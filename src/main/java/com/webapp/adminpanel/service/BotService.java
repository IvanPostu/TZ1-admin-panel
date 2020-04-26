package com.webapp.adminpanel.service;

import com.webapp.adminpanel.domain.dto.BotDto;
import com.webapp.adminpanel.domain.dto.FindBotsResultDto;
import com.webapp.adminpanel.domain.entity.BotEntity;
import com.webapp.adminpanel.persistence.BotCategoryRepository;
import com.webapp.adminpanel.persistence.BotRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class BotService {

  @Autowired
  private BotRepository botRepository;

  @Autowired
  private BotCategoryRepository categoryRepository;

  public Flux<BotEntity> findAll(){
    return botRepository.findAll();
  }

  public Mono<BotEntity> findById(Integer id){
    return botRepository.findById(id);
  }

  public Mono<BotDto> findByIdWithCategory(Integer id){
    Mono<BotDto> result = botRepository
      .findById(id)
      .flatMap(bot -> {
        BotDto botDto = new BotDto();
        botDto.setId(id);
        botDto.setImageFilename(bot.getAvatarFilename());
        botDto.setName(bot.getName());
        if(bot.getCategoryId()!=null){
          return categoryRepository.findById(bot.getCategoryId())
          .map(categ -> {
            botDto.setCategory(categ.getName());
            return botDto;
          });
        }else{
          return Mono.just(botDto);
        }
      });


    return result;
  }


  public Mono<FindBotsResultDto> findBotsByNameSubString(
    String nameSubString, 
    int offset, 
    int botsQuantity
  ){

    Flux<BotEntity> bots = botRepository
      .findBotsByNameSubString(nameSubString, offset, botsQuantity+1);

    Mono<FindBotsResultDto> result = bots
      .collectList()
      .map( list -> {
        boolean haveNextPage = list.size()==botsQuantity+1;
        if(haveNextPage){
          list.remove(list.size()-1);
        }

        FindBotsResultDto dtoResult = new FindBotsResultDto();
        dtoResult.setBots(list);
        dtoResult.setCurrentPage(offset+botsQuantity);
        dtoResult.setHaveNextPage(haveNextPage);
        dtoResult.setName(nameSubString);
        return dtoResult;
      });
    return result;
  }

}
