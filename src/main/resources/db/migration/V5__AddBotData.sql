

CREATE OR REPLACE FUNCTION random_int_range(min INTEGER, max INTEGER) RETURNS INTEGER AS $$
BEGIN
  RETURN min + (random() * (max - min))::INTEGER;
END; 
$$ LANGUAGE PLPGSQL;



CREATE OR REPLACE FUNCTION insert_bots(n INTEGER) RETURNS VOID AS $$
DECLARE
  i INTEGER := 0;
  imagename varchar(100);
  image_index INTEGER;
  category_id INTEGER;
  usernames_table_last_index INTEGER;
  rand_val INTEGER;
  rand_name VARCHAR(64);
BEGIN
  usernames_table_last_index := (SELECT max(id) FROM usernames);
  FOR i IN 1..n LOOP
    image_index := random_int_range(1,8);
    category_id := random_int_range(1,11);
    IF image_index < 6 --1..5
      THEN
        imagename := CONCAT('robot', CAST( image_index AS varchar(10)),'.jpeg');
      ELSE
        imagename := NULL;
    END IF;

    IF category_id > 8 --1..8 IMPORTANT SEE V3 sql migration file
      THEN
        category_id := NULL;
    END IF;

    rand_val := random_int_range(1,usernames_table_last_index);
    rand_name := (SELECT "username" FROM "usernames" WHERE id=rand_val LIMIT 1);

    INSERT INTO "bot" (id, "name", avatar_filename, category_id)
    VALUES
    (
      DEFAULT,
      rand_name,
      imagename,
      category_id
    );
  END LOOP;
END;
$$ LANGUAGE PLPGSQL;  


INSERT INTO "bot" (id, name, avatar_filename, category_id)
VALUES
(DEFAULT, 'Jorik', 'robot1.jpeg', (SELECT id FROM "bot_category" WHERE name='Media' LIMIT 1)),
(DEFAULT, 'Rick', 'robot2.jpeg', (SELECT id FROM "bot_category" WHERE name='Blogs' LIMIT 1)),
(DEFAULT, 'Vasya', 'robot3.jpeg', (SELECT id FROM "bot_category" WHERE name='Education' LIMIT 1)),
(DEFAULT, 'Mitya', 'robot4.jpeg', (SELECT id FROM "bot_category" WHERE name='Health' LIMIT 1)),
(DEFAULT, 'Rex', 'robot5.jpeg', (SELECT id FROM "bot_category" WHERE name='Music' LIMIT 1)),
(DEFAULT, 'Max', 'robot1.jpeg', (SELECT id FROM "bot_category" WHERE name='News' LIMIT 1)),
(DEFAULT, 'Sanyok', 'robot2.jpeg', (SELECT id FROM "bot_category" WHERE name='Animals' LIMIT 1)),
(DEFAULT, 'Alex', 'robot3.jpeg', (SELECT id FROM "bot_category" WHERE name='Fashion' LIMIT 1)),
(DEFAULT, 'Bobby', 'robot4.jpeg', (SELECT id FROM "bot_category" WHERE name='Media' LIMIT 1)),
(DEFAULT, 'Jonny', 'robot5.jpeg', (SELECT id FROM "bot_category" WHERE name='Blogs' LIMIT 1)),
(DEFAULT, 'Pupsik', 'robot1.jpeg', (SELECT id FROM "bot_category" WHERE name='Education' LIMIT 1)),
(DEFAULT, 'Linus', 'robot2.jpeg', (SELECT id FROM "bot_category" WHERE name='Health' LIMIT 1)),
(DEFAULT, 'Bill', 'robot3.jpeg', (SELECT id FROM "bot_category" WHERE name='Music' LIMIT 1)),
(DEFAULT, 'Musk', 'robot4.jpeg', (SELECT id FROM "bot_category" WHERE name='News' LIMIT 1)),
(DEFAULT, 'Dodon', 'robot5.jpeg', (SELECT id FROM "bot_category" WHERE name='Animals' LIMIT 1)),
(DEFAULT, 'John', 'robot1.jpeg', (SELECT id FROM "bot_category" WHERE name='Fashion' LIMIT 1)),
(DEFAULT, 'Martin', 'robot2.jpeg', (SELECT id FROM "bot_category" WHERE name='Media' LIMIT 1)),
(DEFAULT, 'Marusya', 'robot3.jpeg', (SELECT id FROM "bot_category" WHERE name='Blogs' LIMIT 1)),
(DEFAULT, 'Irina', 'robot4.jpeg', (SELECT id FROM "bot_category" WHERE name='Education' LIMIT 1)),
(DEFAULT, 'Marina', 'robot5.jpeg', (SELECT id FROM "bot_category" WHERE name='Health' LIMIT 1)),
(DEFAULT, 'Zozik', 'robot1.jpeg', (SELECT id FROM "bot_category" WHERE name='Music' LIMIT 1)),
(DEFAULT, 'Julik', 'robot2.jpeg', (SELECT id FROM "bot_category" WHERE name='News' LIMIT 1)),
(DEFAULT, 'Frosya', 'robot3.jpeg', (SELECT id FROM "bot_category" WHERE name='Animals' LIMIT 1)),
(DEFAULT, 'Dimon', NULL, (SELECT id FROM "bot_category" WHERE name='Fashion' LIMIT 1)),
(DEFAULT, 'Vlad', NULL, NULL),
(DEFAULT, 'Eskobar', NULL, NULL);


SELECT insert_bots(100);


DROP FUNCTION IF EXISTS random_int_range( INTEGER,  INTEGER);
DROP FUNCTION IF EXISTS insert_bots(INTEGER);