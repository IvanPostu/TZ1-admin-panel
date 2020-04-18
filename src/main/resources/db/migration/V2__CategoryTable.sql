

ALTER TABLE IF EXISTS app_user 
ADD COLUMN avatar_filename VARCHAR(255);

ALTER TABLE IF EXISTS bot 
ADD COLUMN avatar_filename VARCHAR(255);

ALTER TABLE IF EXISTS bot 
ADD COLUMN category_id INT4;

CREATE TABLE bot_category (
  id  SERIAL NOT NULL, 
  name VARCHAR(255), 
  PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS bot
ADD CONSTRAINT bot_category 
FOREIGN KEY (category_id) REFERENCES bot_category;


