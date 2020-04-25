package com.webapp.adminpanel.domain.entity;

import com.fasterxml.jackson.annotation.*;
import com.webapp.adminpanel.domain.views.UserEntityViews;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "app_user")
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = {"id"})
public class UserEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id", unique = true, nullable = false)
  @JsonView(UserEntityViews.IdName.class)
  private Integer id;

  @Column(name = "firstname", columnDefinition = "varchar(64)", nullable = true)
  @JsonView(UserEntityViews.IdName.class)
  private String firstname;

  @Column(name = "lastname", columnDefinition = "varchar(64)", nullable = true)
  @JsonView(UserEntityViews.IdName.class)
  private String lastname;

  @Column(name = "email", columnDefinition = "varchar(64)", nullable = true)
  @JsonView(UserEntityViews.IdNameEmail.class)
  private String email;

  @Column(name = "avatar_filename")
  @JsonView(UserEntityViews.ImageFilename.class)
  private String avatarFilename;

  @Column(name = "birth_date", columnDefinition = "DATE")
  @JsonView(UserEntityViews.AllWithoutSubscriptions.class)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  private Date birthDate;


  @ManyToMany
  @JoinTable(
      name = "user_subscriptions",
      joinColumns = { @JoinColumn(name= "subscriber_id" ) },
      inverseJoinColumns = { @JoinColumn(name = "bot_id") }
  )
  private Set<BotEntity> subscriptions = new HashSet<>();

}
