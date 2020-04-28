package com.webapp.adminpanel.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BotSubscribersPaginationDto {

  private Integer botId;
  private Integer pageCount;
  private BotSubscribersDto firstPage;

}