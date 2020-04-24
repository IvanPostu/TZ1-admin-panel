package com.webapp.handlers;

import com.webapp.domain.dto.FindBotResultDto;
import com.webapp.domain.dto.FindBotsResultDto;
import com.webapp.domain.dto.Views;
import com.webapp.domain.entity.BotEntity;
import com.webapp.service.BotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.codec.json.Jackson2CodecSupport;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

@Component
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
        .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.FindBotsDtoData.class)
        .contentType(MediaType.APPLICATION_JSON)
        .body(data, FindBotsResultDto.class);

  }

  public Mono<ServerResponse> findBotById(ServerRequest request) {
    int botId;

    try{
      botId= request
          .queryParam("id")
          .map(Integer::parseInt)
          .orElse(7);
    }catch(NumberFormatException e){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id is not valid!");
    }

    Mono<FindBotResultDto> result = Mono
        .just(botService.findById(botId))
        .map(a -> {
          FindBotResultDto res = new FindBotResultDto();
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
        .body(result, FindBotResultDto.class);


  }

}

