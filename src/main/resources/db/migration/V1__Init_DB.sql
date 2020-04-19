
CREATE TABLE app_user (
  id  SERIAL NOT NULL, 
  birth_date DATE, 
  email VARCHAR(64), 
  firstname VARCHAR(64), 
  lastname VARCHAR(64), 
  PRIMARY KEY (id)
);

CREATE TABLE bot (
  id  SERIAL NOT NULL, 
  name VARCHAR(255) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE user_subscriptions (
  subscriber_id int4 NOT NULL, 
  bot_id int4 NOT NULL, 
  PRIMARY KEY (bot_id, subscriber_id)
);

ALTER TABLE IF EXISTS user_subscriptions 
ADD CONSTRAINT user_subscriptions_bot 
FOREIGN KEY (bot_id) REFERENCES bot;

ALTER TABLE IF EXISTS user_subscriptions 
ADD CONSTRAINT user_subscriptions_subscriber 
FOREIGN KEY (subscriber_id) REFERENCES app_user;