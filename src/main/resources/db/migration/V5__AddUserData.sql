CREATE OR REPLACE FUNCTION random_int_range(min INTEGER, max INTEGER) RETURNS INTEGER AS $$
BEGIN
  RETURN min + (random() * (max - min))::INTEGER;
END; 
$$ LANGUAGE PLPGSQL;


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



CREATE OR REPLACE FUNCTION insert_users(n INTEGER) RETURNS VOID AS $$
DECLARE
  i INTEGER := 0;
  imagename varchar(100);
  image_index INTEGER;
BEGIN
  FOR i IN 1..n LOOP
    image_index := random_int_range(1,10);
    IF image_index < 8 
    THEN
      imagename := CONCAT('user', CAST( image_index AS varchar(10)),'.jpeg');
    ELSE
      imagename := NULL;
    END IF;

    INSERT INTO "app_user" (id, birth_date, email, firstname, lastname, avatar_filename)
    VALUES
    (
      DEFAULT, 
      CAST(CONCAT(CAST( random_int_range(1970,2010) AS varchar(10)) , '-',
        CAST( random_int_range(1,12) AS varchar(10)),'-',
        CAST( random_int_range(1,27) AS varchar(10)))AS DATE ),
      CONCAT(random_string(random_int_range(7,22)), '@mail.com'),
      random_string(random_int_range(7,22)), 
      random_string(random_int_range(7,22)), 
      imagename
    );
  END LOOP;
END;
$$ LANGUAGE PLPGSQL;  

SELECT insert_users(300); 

-- **************Int TO STR*************************
-- SELECT CAST( random_int_range(12,33323) AS varchar(10));


DROP FUNCTION IF EXISTS insert_users(INTEGER);
DROP FUNCTION IF EXISTS random_string(INTEGER);
DROP FUNCTION IF EXISTS random_int_range( INTEGER,  INTEGER);

