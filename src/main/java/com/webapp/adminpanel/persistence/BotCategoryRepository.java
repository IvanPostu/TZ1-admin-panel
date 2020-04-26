package com.webapp.adminpanel.persistence;

import com.webapp.adminpanel.domain.entity.BotCategoryEntity;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface BotCategoryRepository extends ReactiveCrudRepository<BotCategoryEntity, Integer> {


  
}