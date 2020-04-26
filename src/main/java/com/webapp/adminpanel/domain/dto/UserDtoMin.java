package com.webapp.adminpanel.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDtoMin {

  private Integer id;

  /**
   * firstname + ' ' + lastname
   */
  private String fullname;

  private String avatarFilename;

}