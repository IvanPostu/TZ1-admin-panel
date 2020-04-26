package com.webapp.adminpanel.domain.dto;


import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.adminpanel.domain.entity.BotEntity;
import com.webapp.adminpanel.domain.jsonviews.Views;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
public class FindBotsResultDto {

  @JsonView(Views.FindBotsResultDtoViews.class)
  private String name;
  @JsonView(Views.FindBotsResultDtoViews.class)
  private Integer currentPage;
  @JsonView(Views.FindBotsResultDtoViews.class)
  private List<BotEntity> bots = new LinkedList<>();
  @JsonView(Views.FindBotsResultDtoViews.class)
  private Boolean haveNextPage;

}
