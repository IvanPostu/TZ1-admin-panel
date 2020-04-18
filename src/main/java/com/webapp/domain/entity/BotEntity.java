package com.webapp.domain.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "bot")
@NoArgsConstructor
public class BotEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id", unique = true, nullable = false)
  private Integer id;

  @Column(name = "name", nullable = false, updatable = false)
  private String name;

  @ManyToMany
  @JoinTable(
      name = "user_subscriptions",
      joinColumns = { @JoinColumn(name= "bot_id" ) },
      inverseJoinColumns = { @JoinColumn(name = "subscriber_id") }
  )
  private Set<UserEntity> subscribers = new HashSet<>();

}
