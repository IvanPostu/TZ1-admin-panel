package com.webapp.adminpanel.service;

import java.util.Date;

import com.webapp.adminpanel.domain.dto.BotSubscribersDto;
import com.webapp.adminpanel.domain.dto.BotSubscribersPaginationDto;
import com.webapp.adminpanel.domain.dto.FindUsersDto;
import com.webapp.adminpanel.domain.dto.UserDto;
import com.webapp.adminpanel.domain.dto.UserDtoMin;
import com.webapp.adminpanel.persistence.BotRepository;
import com.webapp.adminpanel.persistence.UserRepository;
import com.webapp.adminpanel.util.DateUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private BotRepository botRepository;

  public Mono<BotSubscribersDto> findSubscribersForBot(
    Integer botId, 
    int page, 
    int itemsPerPage, 
    boolean sortUsernameAlphabetical,
    int minUserAge, 
    int maxUserAge)
  {

    int offset = page * itemsPerPage;
    int limit = itemsPerPage; 

    Flux<UserDtoMin> users = userRepository
      .findUsersByBotId(botId, offset, limit, sortUsernameAlphabetical, minUserAge, maxUserAge)
      .map( u -> {
        String fullname = u.getFirstname()+' '+u.getLastname();
        int userYears = (int)DateUtils.getDiffYears(new Date(), u.getBirthDate());

        return new UserDtoMin(
          u.getId(), fullname, u.getAvatarFilename(), userYears
        );
      }
      );

    Mono<BotSubscribersDto> result = users
      .collectList()
      .map( list -> {
        boolean haveNextBots = list.size() == limit+1;
        if(haveNextBots){
          list.remove(list.size()-1);
        }
        
        return new BotSubscribersDto(botId, page+1, list);
      });

    return result;
  }

  public Mono<BotSubscribersPaginationDto> botSubscribersPagination(
    int botId, 
    int minUserAge, 
    int maxUserAge, 
    int usersPerPage,
    boolean sortUsernameAlphabetical
  ){
    
    Mono<BotSubscribersPaginationDto> result = userRepository
      .subscribersCountForBot(botId, minUserAge, maxUserAge)
      .flatMap( count -> {
        int pageCount = count / usersPerPage + (count % usersPerPage == 0 ? 0 : 1);
        return this
          .findSubscribersForBot(
            botId, 0, usersPerPage, sortUsernameAlphabetical, minUserAge, maxUserAge
          )
          .map( a -> new BotSubscribersPaginationDto(botId, pageCount, a));
      });

    return result;
  }

  public Mono<UserDto> findById(Integer userId){
    Mono<UserDto> userDto = userRepository
      .findById(userId)
      .flatMap( userEntity -> {
        Mono<UserDto> monoUserDto = botRepository
        .countOfSubscription(userId)
        .map( count -> {
          UserDto dto = new UserDto();
          int userYears = (int)DateUtils.getDiffYears(new Date(), userEntity.getBirthDate());
          String fullname = userEntity.getFirstname()+' '+userEntity.getLastname();

          dto.setId(userId);
          dto.setSubscriptionCount((int)count.longValue());
          dto.setAge(userYears);
          dto.setAvatarFilename(userEntity.getAvatarFilename());
          dto.setEmail(userEntity.getEmail());
          dto.setFullname(fullname);

          return dto;
        });

        return monoUserDto;
      });

      return userDto;
  }

  public Mono<FindUsersDto> findUsersByNameSubString (
    String name, 
    int currentPage, 
    int usersPerPage)
  {
    int offset = currentPage * usersPerPage;
    int limit = usersPerPage;

    Flux<UserDtoMin> users = userRepository
      .findUsersByFirstnameOfLastnameSubString(name, offset, limit+1)
      .map(user -> {
        UserDtoMin userDto = new UserDto();
        String fullName = user.getFirstname() + ' ' + user.getLastname();
        userDto.setAvatarFilename(user.getAvatarFilename());
        userDto.setFullname(fullName);
        userDto.setId(user.getId());
        return userDto;
      });

    Mono<FindUsersDto> result = users
      .collectList()
      .map( list -> {
        int listSize = list.size();
        boolean haveNextPage = false; 
        if(listSize==limit+1){
          list.remove(listSize-1);
          haveNextPage = true;
        }

        FindUsersDto resultDto = new FindUsersDto(name, currentPage, haveNextPage, list);
        return resultDto;
      });

    return result;
  }

}