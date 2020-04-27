package com.webapp.adminpanel.domain.dto;

import org.springframework.data.relational.core.mapping.Column;

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

  @Column(value = "avatar_filename")
  private String avatarFilename;

  private Integer age;


}