package com.webapp.adminpanel.persistence;

import com.webapp.adminpanel.domain.entity.UserEntity;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;

public interface UserRepository extends ReactiveCrudRepository<UserEntity, Integer> {

  @Query(value = ""+
  "SELECT * "+
  "FROM app_user AS u "+
  "INNER JOIN user_subscriptions AS us "+
  "ON us.user_id=u.id "+
  "AND us.bot_id=:botId "+
  "AND EXTRACT(year FROM age(current_date, u.birth_date))::INT4 BETWEEN :minAge AND :maxAge "+
  "ORDER BY CASE WHEN :sortFirstnameAlphabetical THEN u.firstname END "+
  "OFFSET :offset LIMIT :limit ")
  public Flux<UserEntity> findUsersByBotId(
    Integer botId, 
    int offset, 
    int limit, 
    boolean sortFirstnameAlphabetical, 
    int minAge, 
    int maxAge
  );

}