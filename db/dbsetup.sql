CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "fb_id" varchar(60),
  "email" varchar(60),
  "password" varchar(200),
  "fb_profile_pic" varchar(200)
);


CREATE TABLE "friends" (
  "id" serial PRIMARY KEY,
  "fb_id" varchar(60),
  "movie_list_id" numeric,
  "fb_name" varchar(60),
  "fb_profile_pic" varchar(200)
);

CREATE TABLE "movie_list" (
  "id" serial PRIMARY KEY,
  "imdb_id" numeric,
  "title" varchar(60),
  "year" numeric,
  "rating" varchar(10),
  "poster" varchar(200),
  "plot" text,
  "user_rating" numeric,
  "favorite" boolean
);

CREATE TABLE "info_join" (
  "id" serial PRIMARY KEY,
  "user_id" numeric,
  "friends_list_id" numeric,
  "movie_list_id" numeric
);

ALTER TABLE "info_join" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "friends" ADD FOREIGN KEY ("id") REFERENCES "info_join" ("friends_list_id");

ALTER TABLE "movie_list" ADD FOREIGN KEY ("id") REFERENCES "info_join" ("movie_list_id");
