package com.webapp.adminpanel.handlers;

import com.webapp.adminpanel.domain.dto.FindUsersDto;
import com.webapp.adminpanel.domain.dto.UserDto;
import com.webapp.adminpanel.domain.jsonviews.Views;
import com.webapp.adminpanel.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.codec.json.Jackson2CodecSupport;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ResponseStatusException;

import reactor.core.publisher.Mono;

@Component
public class UserHandler {

  @Autowired
  private UserService userService;

  public Mono<ServerResponse> findUsersByName(ServerRequest request){
    String name;
    int usersPerPage;
    int currentPage;

    try{
      name = request
        .queryParam("name")
        .orElse("");
      
      usersPerPage = request
        .queryParam("usersPerPage")
        .map(a -> Integer.parseInt(a))
        .orElse(10);

      currentPage = request
        .queryParam("currentPage")
        .map(a -> Integer.parseInt(a))
        .orElse(0);

    }catch(Exception e){
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Request params not valid!");
    }


    Mono<FindUsersDto> data = userService.findUsersByNameSubString(
      name, 
      currentPage, 
      usersPerPage
    );

    return ServerResponse
      .ok()
      .contentType(MediaType.APPLICATION_JSON)
      .hint(Jackson2CodecSupport.JSON_VIEW_HINT, Views.FindUsersDtoViews.class)
      .body(data, FindUsersDto.class);
  }

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