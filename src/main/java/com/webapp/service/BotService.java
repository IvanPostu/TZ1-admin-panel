package com.webapp.service;

import com.webapp.domain.entity.BotEntity;
import com.webapp.persistence.BotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BotService {

  @Autowired
  private BotRepository botRepository;

  public List<BotEntity> findAll(){
    return botRepository.findAll();
  }

  public Page<BotEntity> findBotByNameSubstring(String botName, PageRequest pageRequest) {
    return botRepository.findBotByNameSubstring(botName, pageRequest);
  }
}
