package com.webapp.adminpanel.persistence;

import com.webapp.adminpanel.domain.entity.UserEntity;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;

public interface UserRepository extends ReactiveCrudRepository<UserEntity, Integer> {

  @Query(value = ""+
  "SELECT * FROM app_user AS u INNER JOIN user_subscriptions AS us "+
  "ON us.user_id=u.id AND us.bot_id=:botId OFFSET :offset LIMIT :limit ")
  public Flux<UserEntity> findUsersByBotId(Integer botId, int offset, int limit);

  @Query(value = ""+
  "SELECT * FROM app_user AS u INNER JOIN user_subscriptions AS us "+
  "ON us.user_id=u.id AND us.bot_id=:botId ORDER BY u.firstname "+
  "OFFSET :offset LIMIT :limit ")
  public Flux<UserEntity> findUsersByBotIdSortFirstname(Integer botId, int offset, int limit);



}