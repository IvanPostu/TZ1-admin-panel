package com.webapp.adminpanel.domain.entity;


import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.adminpanel.domain.jsonviews.Views;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
@Table(value = "bot")
public class BotEntity {

  @Id
  @JsonView(Views.IdName.class)
  private Integer id;

  @JsonView(Views.IdName.class)
  private String name;

  private String avatarFilename;


  @Column(value = "category_id")
  private Integer categoryId;

}