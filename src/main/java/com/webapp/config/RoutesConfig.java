package com.webapp.config;

import com.webapp.handlers.BotHandler;
import com.webapp.handlers.MainHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import java.net.URI;

@Configuration
public class RoutesConfig {

  @Bean
  public RouterFunction<ServerResponse> htmlMainIndexPageRoute(MainHandler mainHandler ) {

    return RouterFunctions
        .route(
            RequestPredicates.GET("*"),
            mainHandler::index
        );
  }

  @Bean
  public RouterFunction<ServerResponse> route(BotHandler botHandler) {

    return RouterFunctions
        .route(
            RequestPredicates.GET("/api/bots")
                .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
            botHandler::findBotsByName
        )
        .andRoute(
            RequestPredicates.GET("/api/bot")
                .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
            botHandler::findBotById
        )
        .andRoute(
            RequestPredicates.GET("/api/bot/subscribers")
                .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
            botHandler::botSubscribers
        );
  }


}
