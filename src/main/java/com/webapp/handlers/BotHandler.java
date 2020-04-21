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
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

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
        .map(Integer::valueOf)
        .orElse(7);
    final int currentPage = request
        .queryParam("current-page")
        .map(Integer::valueOf)
        .orElse(0);
    PageRequest pageRequest = PageRequest.of(currentPage, botsPerPage);

    Mono<FindBotResultDto> data = Flux
        .fromIterable(botService.findBotByNameSubstring(botName, pageRequest))
        .reduce(new FindBotResultDto(), (acc, itm)->{
          acc.getBots().put(itm.getId(), itm);
          return acc;
        })
        .map(a -> {
          a.setName(botName);
          a.setCurrentPage(pageRequest.getPageNumber());
          return a;
        });



    return ServerResponse
        .ok()
        .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.FindBotDtoData.class)
        .contentType(MediaType.APPLICATION_JSON)
        .body(data, FindBotResultDto.class);

  }

}

