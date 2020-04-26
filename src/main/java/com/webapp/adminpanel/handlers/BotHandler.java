package com.webapp.adminpanel.handlers;

import com.webapp.adminpanel.domain.dto.BotDto;
import com.webapp.adminpanel.domain.dto.BotSubscribersDto;
import com.webapp.adminpanel.domain.dto.FindBotsResultDto;
import com.webapp.adminpanel.domain.jsonviews.Views;
import com.webapp.adminpanel.service.BotService;
import com.webapp.adminpanel.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
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

  @Autowired
  private UserService userService;

  public Mono<ServerResponse> findBotsByName(ServerRequest request) {
    final String botName = request.queryParam("name").orElse("");
    final int botsPerPage = request.queryParam("bots-per-page")
      .map(a -> {
        int result = Integer.parseInt(a);
        return Math.min(result, 100);
      })
      .orElse(7);
    final int currentPage = request.queryParam("current-page")
      .map(Integer::valueOf)
      .orElse(0);

    Mono<FindBotsResultDto> data = botService.findBotsByNameSubString(
      botName, 
      currentPage, 
      botsPerPage
    );

    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.FindBotsResultDtoViews.class)
      .body(data, FindBotsResultDto.class);

  }

  public Mono<ServerResponse> findBotById(ServerRequest request)  {
    int botId;

    try {
      botId = request.queryParam("id").map(Integer::parseInt).get();
    } catch (NumberFormatException e) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Id is not valid!");
    }

    Mono<BotDto> result = botService
      .findByIdWithCategory(botId);

    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(result, BotDto.class);
  }

  public Mono<ServerResponse> botSubscribers(ServerRequest request) {

    int botId;
    int page;
    int itemsPerPage;
    boolean sortUsernameAlphabetical;

    try {
      botId = request
        .queryParam("botId")
        .map(s -> Integer.parseInt(s))
        .orElseThrow(() -> new NumberFormatException());

      page = request
        .queryParam("page")
        .map( s -> Integer.parseInt(s))
        .orElseThrow(()->new NumberFormatException());

      itemsPerPage = request
        .queryParam("itemsPerPage")
        .map( s -> Integer.min(Integer.parseInt(s), 100))
        .orElseThrow(()->new NumberFormatException());

      sortUsernameAlphabetical = request
        .queryParam("sortUsernameAlphabetical")
        .map(s -> Boolean.valueOf(s))
        .orElse(false);

    } catch (NumberFormatException e) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request params not valid!");
    }

    Mono<BotSubscribersDto> result = userService
      .findSubscribersForBot(botId, page, itemsPerPage, sortUsernameAlphabetical);

    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(result, BotSubscribersDto.class);
  }

}