package com.webapp.adminpanel.persistence;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

import com.webapp.adminpanel.domain.entity.BotEntity;

public interface BotRepository extends CrudRepository<BotEntity, Integer> {

  List<BotEntity> findAll();

  @Query("" +
      "SELECT b FROM BotEntity b WHERE LOWER(b.name) LIKE CONCAT('%',LOWER(:name),'%') " +
      "")
  Page<BotEntity> findBotByNameSubstring(@Param("name") String name, Pageable pageable);


}
