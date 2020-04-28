package com.webapp.adminpanel.service;

import java.util.Date;

import com.webapp.adminpanel.domain.dto.BotSubscribersDto;
import com.webapp.adminpanel.domain.dto.BotSubscribersPaginationDto;
import com.webapp.adminpanel.domain.dto.UserDtoMin;
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

}