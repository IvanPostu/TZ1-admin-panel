package com.webapp.adminpanel.persistence;


import com.webapp.adminpanel.domain.entity.BotEntity;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;


public interface BotRepository extends ReactiveCrudRepository<BotEntity, Integer>{


  @Query(value = ""
  +"SELECT * FROM bot WHERE name LIKE CONCAT('%',:partialName,'%') "
  +"OFFSET :offset LIMIT :limit")
  public Flux<BotEntity> findBotsByNameSubString(String partialName, int offset, int limit);

}
