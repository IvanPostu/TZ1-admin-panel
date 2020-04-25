package com.webapp.adminpanel.domain.entity;


import com.fasterxml.jackson.annotation.JsonView;
import com.webapp.adminpanel.domain.views.BotEntityViews;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "bot")
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = {"id"})
public class BotEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id", unique = true, nullable = false)
  @JsonView(BotEntityViews.IdName.class)
  private Integer id;

  @JsonView(BotEntityViews.IdName.class)
  private String name;

  @ManyToOne( fetch=FetchType.EAGER )
  @JoinColumn(name="category_id")
  private BotCategoryEntity category;

  @Column(name = "avatar_filename")
  @JsonView(BotEntityViews.IconFilename.class)
  private String avatarFilename;

  @ManyToMany
  @JoinTable(
      name = "user_subscriptions",
      joinColumns = { @JoinColumn(name= "bot_id" ) },
      inverseJoinColumns = { @JoinColumn(name = "subscriber_id") }
  )
  private Set<UserEntity> subscribers = new HashSet<>();

}