package com.webapp.domain.dto;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.domain.entity.BotEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.LinkedList;
import java.util.List;


@NoArgsConstructor
@Data
public class FindBotsResultDto {
  @JsonView(Views.FindBotsDtoData.class)
  private String name;

  @JsonView(Views.FindBotsDtoData.class)
  private Integer currentPage;

  @JsonView(Views.FindBotsDtoData.class)
  private List<BotEntity> bots = new LinkedList<>();

  @JsonView(Views.FindBotsDtoData.class)
  private Boolean haveNextPage;

}
