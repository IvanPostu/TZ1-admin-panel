package com.webapp.adminpanel.service;

import com.webapp.adminpanel.domain.dto.BotSubscribersDto;
import com.webapp.adminpanel.domain.dto.UserDtoMin;
import com.webapp.adminpanel.persistence.UserRepository;

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
    boolean sortUsernameAlphabetical)
  {

    /**
     * Pulls out 1 more, to check if there is the next bot list,
     * after check remove last element if exists.
     */
    Flux<UserDtoMin> users; 

    int offset = page * itemsPerPage;
    int limit = itemsPerPage;
    
    if(sortUsernameAlphabetical){
      users = userRepository
      .findUsersByBotIdSortFirstname(botId, offset, limit+1)
      .map( u -> new UserDtoMin(
        u.getId(), u.getFirstname()+' '+u.getLastname(), u.getAvatarFilename())
      );
    }else {
      users = userRepository
      .findUsersByBotId(botId, offset, limit+1)
      .map( u -> new UserDtoMin(
        u.getId(), u.getFirstname()+' '+u.getLastname(), u.getAvatarFilename())
      );
    }

    Mono<BotSubscribersDto> result = users
      .collectList()
      .map( list -> {
        boolean haveNextBots = list.size() == limit+1;
        if(haveNextBots){
          list.remove(list.size()-1);
        }
        
        return new BotSubscribersDto(botId, haveNextBots, offset+list.size(), list);
      });

    return result;
  }

}