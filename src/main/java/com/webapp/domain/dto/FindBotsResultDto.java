package com.webapp.domain.dto;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.domain.entity.BotEntity;
import com.webapp.domain.views.FindBotsResultDtoViews;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.LinkedList;
import java.util.List;


@NoArgsConstructor
@Data
public class FindBotsResultDto {
  @JsonView(FindBotsResultDtoViews.FindBotsDtoData.class)
  private String name;

  @JsonView(FindBotsResultDtoViews.FindBotsDtoData.class)
  private Integer currentPage;

  @JsonView(FindBotsResultDtoViews.FindBotsDtoData.class)
  private List<BotEntity> bots = new LinkedList<>();

  @JsonView(FindBotsResultDtoViews.FindBotsDtoData.class)
  private Boolean haveNextPage;

}
