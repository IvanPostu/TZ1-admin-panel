package com.webapp.service;

import com.webapp.domain.entity.BotEntity;
import com.webapp.persistence.BotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BotService {

  @Autowired
  private BotRepository botRepository;

  public List<BotEntity> findAll(){
    return botRepository.findAll();
  }

}
