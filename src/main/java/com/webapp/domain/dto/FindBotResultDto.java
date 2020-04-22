package com.webapp.domain.dto;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.domain.entity.BotEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.LinkedList;
import java.util.List;


@NoArgsConstructor
@Data

public class FindBotResultDto {
  @JsonView(Views.FindBotDtoData.class)
  private String name;

  @JsonView(Views.FindBotDtoData.class)
  private Integer currentPage;

  @JsonView(Views.FindBotDtoData.class)
  private List<BotEntity> bots = new LinkedList<>();

  @JsonView(Views.FindBotDtoData.class)
  private Boolean haveNextPage;

}
