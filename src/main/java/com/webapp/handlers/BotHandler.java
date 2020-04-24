package com.webapp.handlers;

import com.webapp.domain.dto.BotDto;
import com.webapp.domain.dto.BotSubscribersDto;
import com.webapp.domain.dto.FindBotsResultDto;
import com.webapp.domain.entity.BotEntity;
import com.webapp.domain.views.BotSubscribersDtoViews;
import com.webapp.domain.views.FindBotsResultDtoViews;
import com.webapp.service.BotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.codec.json.Jackson2CodecSupport;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

@Component
@Transactional
public class BotHandler {

  @Autowired
  private BotService botService;

  public Mono<ServerResponse> findBotsByName(ServerRequest request) {
    final String botName = request
        .queryParam("name")
        .orElse("");
    final int botsPerPage = request
        .queryParam("bots-per-page")
        .map(a -> {
          int result = Integer.parseInt(a);
          return Math.min(result, 100);
        })
        .orElse(7);
    final int currentPage = request
        .queryParam("current-page")
        .map(Integer::valueOf)
        .orElse(0);
    PageRequest pageRequest = PageRequest.of(currentPage, botsPerPage);

    Mono<FindBotsResultDto> data = Mono
        .just(botService.findBotByNameSubstring(botName, pageRequest))
        .map(a -> {
          FindBotsResultDto result = new FindBotsResultDto();
          result.setBots(a.getContent());
          result.setName(botName);
          result.setCurrentPage(a.getNumber());
          result.setHaveNextPage(a.hasNext());
          return result;
        });


    return ServerResponse
        .ok()
        .hint(Jackson2CodecSupport.JSON_VIEW_HINT, FindBotsResultDtoViews.FindBotsDtoData.class)
        .contentType(MediaType.APPLICATION_JSON)
        .body(data, FindBotsResultDto.class);

  }

  public Mono<ServerResponse> findBotById(ServerRequest request) {
    int botId;

    try{
      botId= request
          .queryParam("id")
          .map(Integer::parseInt)
          .get();
    }catch(NumberFormatException e){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id is not valid!");
    }

    Mono<BotDto> result = Mono
        .just(botService.findById(botId))
        .map(a -> {
          BotDto res = new BotDto();
          BotEntity botFromDb = a.orElseThrow(() ->
              new ResponseStatusException(HttpStatus.NOT_FOUND, "Bot not found!")
          );
          res.setName(botFromDb.getName());
          res.setId(botFromDb.getId());
          res.setCategory(botFromDb.getCategory().getName());
          res.setImageFilename(botFromDb.getAvatarFilename());

          return res;
        });
    return ServerResponse
        .ok()
        .contentType(MediaType.APPLICATION_JSON)
        .body(result, BotDto.class);
  }

  public Mono<ServerResponse> botSubscribers (ServerRequest request){

    int botId;

    try{
      botId= request
          .queryParam("id")
          .map(Integer::parseInt)
          .get();
    }catch(NumberFormatException e){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id is not valid!");
    }

    try {
      Mono<BotSubscribersDto> result = Mono
          .just(botService.findSubscribersByBotId(botId))
          .map( a -> {
            BotSubscribersDto r = new BotSubscribersDto();
            r.setSubscribers(a);
            r.setBotId(botId);
            return r;
          });
      return ServerResponse
          .ok()
          .hint(Jackson2CodecSupport.JSON_VIEW_HINT, BotSubscribersDtoViews.All.class)
          .contentType(MediaType.APPLICATION_JSON)
          .body(result, BotSubscribersDto.class);
    } catch (Exception e) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id is not valid!");
    }
  }

}

