package com.webapp.adminpanel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.webapp.adminpanel.domain.entity.BotEntity;
import com.webapp.adminpanel.domain.entity.UserEntity;
import com.webapp.adminpanel.persistence.BotRepository;

@Service
@Transactional
public class BotService {

  @Autowired
  private BotRepository botRepository;

  public List<BotEntity> findAll(){
    return botRepository.findAll();
  }

  public Page<BotEntity> findBotByNameSubstring(String botName, PageRequest pageRequest) {
    return botRepository.findBotByNameSubstring(botName, pageRequest);
  }

  public Optional<BotEntity> findById(Integer id){
    return botRepository.findById(id);
  }

  public Set<UserEntity> findSubscribersByBotId(int botId) throws Exception {
    BotEntity bot = botRepository.findById(botId).orElseThrow(Exception::new);
    Set<UserEntity> result = bot.getSubscribers();
    return result;
  }
}
