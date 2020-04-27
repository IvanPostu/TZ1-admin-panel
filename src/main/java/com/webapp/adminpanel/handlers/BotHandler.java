package com.webapp.adminpanel.handlers;

import com.webapp.adminpanel.domain.dto.BotDto;
import com.webapp.adminpanel.domain.dto.BotSubscribersDto;
import com.webapp.adminpanel.domain.dto.BotSubscribersPaginationDto;
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

  private final BotService botService;
  private final UserService userService;

  @Autowired
  public BotHandler(BotService botService, UserService userService){
    this.botService = botService;
    this.userService = userService;
  }

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
    int minUserAge, maxUserAge;
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

      minUserAge = request
        .queryParam("minUserAge")
        .map( s -> Integer.parseInt(s))
        .orElse(0);

      maxUserAge = request
        .queryParam("maxUserAge")
        .map( s -> Integer.parseInt(s))
        .orElse(200);

      if(minUserAge > maxUserAge) throw new Exception();

    } catch (Exception e) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request params not valid!");
    }

    Mono<BotSubscribersDto> result = userService
      .findSubscribersForBot(
        botId, page, itemsPerPage, sortUsernameAlphabetical, minUserAge, maxUserAge
      );

    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(result, BotSubscribersDto.class);
  }

  /**
   * 
   * This method is needed for the frontend to show 
   * the total number of pages with bot subscribers,
   * given the filter.
   * 
   * @param minUserAge, default 0
   * @param maxUserAge, default 200
   * @param usersPerPage, required
   * @param botId; required
   * @return Mono<BotSubscribersPaginationDto>;
   */
  public Mono<ServerResponse> botSubscribersPagination(ServerRequest request){

    int minUserAge, maxUserAge, botId, usersPerPage;

    try{

      botId = request
        .queryParam("botId")
        .map(s -> Integer.parseInt(s))
        .orElseThrow(() -> new ResponseStatusException(
          HttpStatus.BAD_REQUEST, "botId argument is required")
        );

      minUserAge = request
        .queryParam("minUserAge")
        .map( s -> Integer.parseInt(s))
        .orElse(0);

      maxUserAge = request
        .queryParam("maxUserAge")
        .map( s -> Integer.parseInt(s))
        .orElse(200);

      usersPerPage = request
        .queryParam("usersPerPage")
        .map( s -> Integer.parseInt(s))
        .orElseThrow(() -> new ResponseStatusException(
          HttpStatus.BAD_REQUEST, "usersPerPage argument is required")
        );

    }catch(Exception e){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request params not valid!");
    }

    Mono<BotSubscribersPaginationDto> result = userService
      .botSubscribersPagination( botId, minUserAge, maxUserAge, usersPerPage);

    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .body(result, BotSubscribersPaginationDto.class);
  }

}