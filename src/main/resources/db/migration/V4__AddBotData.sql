CREATE OR REPLACE FUNCTION random_string(length INTEGER) RETURNS TEXT AS $$
DECLARE
  chars TEXT[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}';
  result TEXT := '';
  i INTEGER := 0;
BEGIN
  IF length < 0 THEN
    RAISE EXCEPTION 'Given length cannot be less than 0';
  END IF;
  for i IN 1..length LOOP
    result := result || chars[1+random()*(array_length(chars, 1)-1)];
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE PLPGSQL;




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
BEGIN
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

    INSERT INTO "bot" (id, name, avatar_filename, category_id)
    VALUES
    (
      DEFAULT,
      random_string(random_int_range(7,22)),
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


SELECT insert_bots(200);


DROP FUNCTION IF EXISTS random_int_range( INTEGER,  INTEGER);
DROP FUNCTION IF EXISTS insert_bots(INTEGER);
DROP FUNCTION IF EXISTS random_string(INTEGER);