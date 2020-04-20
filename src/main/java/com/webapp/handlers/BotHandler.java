package com.webapp.handlers;

import com.webapp.domain.entity.BotEntity;
import com.webapp.domain.entity.Views;
import com.webapp.persistence.BotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.codec.json.Jackson2CodecSupport;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.awt.print.Pageable;

@Component
public class BotHandler {

  @Autowired
  private BotRepository botRepository;

  public Mono<ServerResponse> bots(ServerRequest request) {

    Flux<BotEntity> data = Flux
        .fromIterable(botRepository.findAll());

    return ServerResponse
        .ok()
        .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.IdName.class)
        .contentType(MediaType.APPLICATION_JSON)
        .body(data, BotEntity.class);
  }

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

    Flux<BotEntity> data = Flux
        .fromIterable(botRepository.findBotByNameSubstring(botName, pageRequest));

    return ServerResponse
        .ok()
        .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.IdName.class)
        .contentType(MediaType.APPLICATION_JSON)
        .body(data, BotEntity.class);

  }

}

