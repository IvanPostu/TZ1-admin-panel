package com.webapp.config;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.domain.entity.Views;
import com.webapp.handlers.BotHandler;
import com.webapp.handlers.MainHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class RoutesConfig {

  @Bean
  public RouterFunction<ServerResponse> htmlMainIndexPageRoute(MainHandler mainHandler ) {

    return RouterFunctions
        .route(
            RequestPredicates.GET("/"),
            mainHandler::index
        );
  }

  @Bean
  public RouterFunction<ServerResponse> route(BotHandler botHandler) {

    return RouterFunctions
        .route(
            RequestPredicates.GET("/api/bots/q"),
            botHandler::bots
        )
        .andRoute(
            RequestPredicates.GET("/api/bots")
                .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
            botHandler::findBotsByName
        );
  }

}
