package com.webapp.adminpanel.persistence;


import com.webapp.adminpanel.domain.entity.BotEntity;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


public interface BotRepository extends ReactiveCrudRepository<BotEntity, Integer>{


  @Query(value = ""
  +"SELECT * FROM bot WHERE LOWER(name) LIKE CONCAT('%', LOWER(:partialName),'%') "
  +"OFFSET :offset LIMIT :limit")
  public Flux<BotEntity> findBotsByNameSubString(String partialName, int offset, int limit);

  @Query(value=""
  +"SELECT COUNT(b) FROM bot AS b "
  +"INNER JOIN user_subscriptions AS us "
  +"ON b.id=us.bot_id AND us.user_id=:userId ")
  public Mono<Long> countOfSubscription(Integer userId);

}
