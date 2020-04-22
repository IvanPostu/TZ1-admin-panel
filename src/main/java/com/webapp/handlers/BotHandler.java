package com.webapp.handlers;

import com.webapp.domain.dto.FindBotResultDto;
import com.webapp.domain.dto.Views;
import com.webapp.service.BotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.codec.json.Jackson2CodecSupport;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
public class BotHandler {

  @Autowired
  private BotService botService;



  public Mono<ServerResponse> findBotsByName(ServerRequest request){
    final String botName = request
        .queryParam("name")
        .orElse("");
    final int botsPerPage = request
        .queryParam("bots-per-page")
        .map( a -> {
          int result = Integer.parseInt(a);
          return Math.min(result, 100);
        })
        .orElse(7);
    final int currentPage = request
        .queryParam("current-page")
        .map(Integer::valueOf)
        .orElse(0);
    PageRequest pageRequest = PageRequest.of(currentPage, botsPerPage);

    Mono<FindBotResultDto> data = Mono
        .just(botService.findBotByNameSubstring(botName, pageRequest))
        .map( a -> {
          FindBotResultDto result = new FindBotResultDto();
          result.setBots(a.getContent());
          result.setName(botName);
          result.setCurrentPage(a.getNumber());
          result.setHaveNextPage(a.hasNext());
          return result;
        });
//        .reduce(new FindBotResultDto(), (acc, itm)->{
//          acc.getBots().add(itm);
//          return acc;
//        })
//        .map(a -> {
//          a.
//          a.setName(botName);
//          a.setCurrentPage(pageRequest.getPageNumber());
//          a.setHaveNextPage(pageRequest.getPageNumber()<=pageRequest.getPageSize());
//          return a;
//        });



    return ServerResponse
        .ok()
        .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.FindBotDtoData.class)
        .contentType(MediaType.APPLICATION_JSON)
        .body(data, FindBotResultDto.class);

  }

}

