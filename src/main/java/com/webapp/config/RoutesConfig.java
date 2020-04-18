package com.webapp.config;

import com.webapp.handlers.HelloHandler;
import com.webapp.handlers.MainHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
  public RouterFunction<ServerResponse> route(HelloHandler helloHandler) {

    return RouterFunctions
        .route(
            RequestPredicates.GET("/api/hello"),
            helloHandler::hello
        );
  }

}
