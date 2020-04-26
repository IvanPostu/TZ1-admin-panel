package com.webapp.adminpanel.domain.entity;



import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Table(value = "bot_category")
public class BotCategoryEntity {

  @Id
  private Integer id;

  private String name;

  // @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  
  private List<BotEntity> bots = new ArrayList<>();

}
