package com.webapp.domain.dto;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.domain.entity.UserEntity;
import com.webapp.domain.views.BotSubscribersDtoViews;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
public class BotSubscribersDto {

  @JsonView(BotSubscribersDtoViews.All.class)
  private Integer botId;

  @JsonView(BotSubscribersDtoViews.All.class)
  private Set<UserEntity> subscribers;

}
