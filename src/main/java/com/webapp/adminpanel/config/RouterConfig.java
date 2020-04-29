package com.webapp.adminpanel.config;

import org.springframework.context.annotation.Configuration;
import com.webapp.adminpanel.handlers.BotHandler;
import com.webapp.adminpanel.handlers.MainHandler;
import com.webapp.adminpanel.handlers.UserHandler;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class RouterConfig {

  @Bean
  public RouterFunction<ServerResponse> htmlMainIndexPageRoute(MainHandler mainHandler) {
    return RouterFunctions.route(RequestPredicates.GET("*"), mainHandler::index);
  }

  @Bean
  public RouterFunction<ServerResponse> botsApiRoute(BotHandler botHandler) {

    return RouterFunctions
    
      .route(RequestPredicates.GET("/api/botsApi/findByName")
        .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), botHandler::findBotsByName)

      .andRoute(RequestPredicates.GET("/api/botsApi/find")
        .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), botHandler::findBotById)

      .andRoute(RequestPredicates.GET("api/botsApi/findSubscribers")
        .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), botHandler::botSubscribers)

      .andRoute(RequestPredicates.GET("api/botsApi/usersPagination")
        .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)), 
          botHandler::botSubscribersPagination);
  }

  @Bean
  public RouterFunction<ServerResponse> usersApiRoute(UserHandler userHandler) {
    return RouterFunctions
      .route(RequestPredicates.GET("api/usersApi/find")
        .and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),userHandler::find);
  }

}