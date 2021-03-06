package com.webapp.adminpanel.persistence;

import com.webapp.adminpanel.domain.entity.UserEntity;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

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
    int botId, 
    int offset, 
    int limit, 
    boolean sortFirstnameAlphabetical, 
    int minAge, 
    int maxAge
  );

  @Query(value = ""+
  "SELECT COUNT(*) FROM app_user AS u "+
  "INNER JOIN user_subscriptions AS us "+
  "ON us.user_id=u.id AND us.bot_id=:botId "+
  "WHERE EXTRACT(year FROM age(current_date, u.birth_date))::INT4 "+
  "BETWEEN :minUserAge AND :maxUserAge ")
  public Mono<Integer> subscribersCountForBot(
    int botId,
    int minUserAge,
    int maxUserAge
  );

  @Query(value = ""+
  "SELECT * FROM app_user AS u "+
  "WHERE LOWER(u.firstname) LIKE CONCAT('%', LOWER(:name), '%') "+
  "OR LOWER(u.lastname) LIKE CONCAT('%', LOWER(:name), '%') "+
  "OFFSET :offset LIMIT :limit ")
  public Flux<UserEntity> findUsersByFirstnameOfLastnameSubString(
    String name, 
    int offset, 
    int limit
  );

}