package com.webapp.adminpanel.domain.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BotSubscribersDto {

  private Integer botId;
  private Boolean haveNext;
  private Integer currentOffset;

  private List<UserDtoMin> subscribers;

}
