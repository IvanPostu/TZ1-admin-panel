package com.webapp.adminpanel.domain.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Table(value = "app_user")
@NoArgsConstructor
@Data
public class UserEntity {

  @Id
  private Integer id;

  private String firstname;

  private String lastname;

  private String email;

  @Column(value = "avatar_filename")
  private String avatarFilename;

  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  private Date birthDate;

}
