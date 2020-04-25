package com.webapp.adminpanel.handlers;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;


@Component
  public class MainHandler {


    public Mono<ServerResponse> index(ServerRequest serverRequest) {

      return ServerResponse
          .ok()
          .render("index");
    }
  }