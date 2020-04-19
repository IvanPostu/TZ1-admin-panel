package com.webapp.domain.entity;

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
public class UserEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id", unique = true, nullable = false)
  private Integer id;

  @Column(name = "firstname", columnDefinition = "varchar(64)", nullable = true)
  private String firstname;

  @Column(name = "lastname", columnDefinition = "varchar(64)", nullable = true)
  private String lastname;

  @Column(name = "email", columnDefinition = "varchar(64)", nullable = true)
  private String email;

  @Column(name = "avatar_filename")
  private String avatarFilename;

  @Column(name = "birth_date", columnDefinition = "DATE")
  private Date birthDate;


  @ManyToMany
  @JoinTable(
      name = "user_subscriptions",
      joinColumns = { @JoinColumn(name= "subscriber_id" ) },
      inverseJoinColumns = { @JoinColumn(name = "bot_id") }
  )
  private Set<BotEntity> subscriptions = new HashSet<>();

}
