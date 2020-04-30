package com.webapp.adminpanel.domain.dto;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.adminpanel.domain.jsonviews.Views;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FindUsersDto {
  
  @JsonView(value = Views.FindUsersDtoViews.class)
  private String findName;

  @JsonView(value = Views.FindUsersDtoViews.class)
  private Integer currentPage;

  @JsonView(value = Views.FindUsersDtoViews.class)
  private Boolean haveNextPage;
  
  @JsonView(value = Views.FindUsersDtoViews.class)
  private List<UserDtoMin> users = new LinkedList<>();

}