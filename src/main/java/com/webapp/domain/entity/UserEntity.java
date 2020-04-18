package com.webapp.domain.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "app_user")
@NoArgsConstructor
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

  @Column(name = "birth_date", nullable = true)
  private Date birthDate;


  @ManyToMany
  @JoinTable(
      name = "user_subscriptions",
      joinColumns = { @JoinColumn(name= "subscriber_id" ) },
      inverseJoinColumns = { @JoinColumn(name = "bot_id") }
  )
  private Set<BotEntity> subscriptions = new HashSet<>();

}
