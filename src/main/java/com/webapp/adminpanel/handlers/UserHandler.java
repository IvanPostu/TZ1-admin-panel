package com.webapp.adminpanel.handlers;

import com.webapp.adminpanel.domain.dto.UserDto;
import com.webapp.adminpanel.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ResponseStatusException;

import reactor.core.publisher.Mono;

@Component
public class UserHandler {

  @Autowired
  private UserService userService;

  public Mono<ServerResponse> find (ServerRequest request){

    int userId;

    try{
      userId = request
        .queryParam("userId")
        .map(s -> Integer.parseInt(s))
        .orElseThrow(() -> new NumberFormatException());
    }catch(Exception e){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request params not valid!");
    }

    Mono<UserDto> result = userService
      .findById(userId);

    return ServerResponse
    .ok()
    .contentType(MediaType.APPLICATION_JSON)
    .body(result, UserDto.class);
      
  }

}