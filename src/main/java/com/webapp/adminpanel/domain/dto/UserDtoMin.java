package com.webapp.adminpanel.domain.dto;

import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.adminpanel.domain.jsonviews.Views;

import org.springframework.data.relational.core.mapping.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDtoMin {

  @JsonView(value = Views.IdName.class)
  private Integer id;

  /**
   * firstname + ' ' + lastname
   */
  @JsonView(value = Views.IdName.class)
  private String fullname;

  @Column(value = "avatar_filename")
  @JsonView(value = Views.IdName.class)
  private String avatarFilename;

  private Integer age;


}