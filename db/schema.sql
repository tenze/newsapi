BEGIN;

DROP TABLE IF EXISTS newslist;


CREATE TABLE newslist(
  newsid TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR NOT NULL
);

COMMIT;
