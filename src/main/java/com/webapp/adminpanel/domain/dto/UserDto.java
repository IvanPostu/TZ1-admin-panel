package com.webapp.adminpanel.domain.dto;

import lombok.Data;

@Data
public class UserDto extends UserDtoMin {

  private String email;
  private Integer subscriptionCount;

}