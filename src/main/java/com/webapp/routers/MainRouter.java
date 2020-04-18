package com.webapp.routers;

import com.webapp.handlers.MainHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;


@Configuration
public class MainRouter {
  @Bean
  public RouterFunction<ServerResponse> route(MainHandler mainHandler) {

    return RouterFunctions
        .route(
            RequestPredicates.GET("/"),
            mainHandler::index
        );
  }
}