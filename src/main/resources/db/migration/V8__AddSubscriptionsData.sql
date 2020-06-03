
CREATE OR REPLACE FUNCTION random_int_range(min INTEGER, max INTEGER) RETURNS INTEGER AS $$
BEGIN
  RETURN min + (random() * (max - min))::INTEGER;
END; 
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE FUNCTION generate_subscriptions() 
RETURNS VOID AS $$
DECLARE
  user_last_id INTEGER;
  bot_last_id INTEGER;
  i INTEGER;
  z INTEGER;
  j INTEGER;
  default_bot_id INTEGER;
  bots_for_one_user INTEGER;
BEGIN
  user_last_id := (SELECT id FROM "app_user" ORDER BY id DESC LIMIT 1);
  bot_last_id := (SELECT id FROM "bot" ORDER BY id DESC LIMIT 1);
  default_bot_id := (SELECT id FROM "bot" LIMIT 1 );

  FOR i IN 1..user_last_id LOOP
    
    -- If user is not null
    IF (SELECT COUNT(1) FROM "app_user" WHERE id=i) = 1 THEN
      bots_for_one_user := 0;

      FOR j IN 1..bot_last_id LOOP
        IF random_int_range(1,4) = 1 THEN
          IF (SELECT COUNT(1) FROM "bot" WHERE id=j) = 1 THEN
            bots_for_one_user := bots_for_one_user + 1;
            INSERT INTO "user_subscriptions" (user_id, bot_id) VALUES (i, j);
          END IF;
        END IF;
      END LOOP;

      IF (bots_for_one_user=0) THEN
        INSERT INTO "user_subscriptions" (user_id, bot_id) VALUES (i, default_bot_id);
      END IF;
    END IF;
  END LOOP;

END;
$$ LANGUAGE PLPGSQL; 



SELECT generate_subscriptions();




DROP FUNCTION IF EXISTS random_int_range( INTEGER,  INTEGER);
DROP FUNCTION IF EXISTS generate_subscriptions();
