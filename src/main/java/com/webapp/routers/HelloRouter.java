//package com.webapp.routers;
//
//import com.webapp.handlers.HelloHandler;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.reactive.function.server.RequestPredicates;
//import org.springframework.web.reactive.function.server.RouterFunction;
//import org.springframework.web.reactive.function.server.RouterFunctions;
//import org.springframework.web.reactive.function.server.ServerResponse;
//
//
//@Configuration
//public class HelloRouter {
//  @Bean
//  public RouterFunction<ServerResponse> route(HelloHandler helloHandler) {
//
//    return RouterFunctions
//        .route(
//            RequestPredicates.GET("/api/hello"),
//            helloHandler::hello
//        );
//  }
//}