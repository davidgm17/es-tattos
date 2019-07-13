-- ============
-- 	PostgreSQL
-- ============

DROP SCHEMA IF EXISTS "es_tattoos_404" CASCADE;
CREATE SCHEMA "es_tattoos_404" AUTHORIZATION "postgres";
SET "search_path" TO "es_tattoos_404";

CREATE TABLE "users" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"user_name" VARCHAR NOT NULL,
	"first_name" VARCHAR NOT NULL,
	"last_name" VARCHAR NOT NULL,
	"age" SMALLINT NOT NULL,
	"email" VARCHAR  NOT NULL,
	"password" VARCHAR NOT NULL,
	"photo_id" BIGSERIAL,
	"phone" VARCHAR,
	"description" VARCHAR
);

CREATE TABLE "studios" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"studio_name" VARCHAR NOT NULL,
	"location"  BIGSERIAL NOT NULL,
	"photo_id" BIGSERIAL,
	"email" VARCHAR,
	"phone" VARCHAR,
	"description" VARCHAR
);

CREATE TABLE "meetings" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"user_id"  BIGSERIAL NOT NULL,
	"studio_id"  BIGSERIAL NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"state_id"  BIGSERIAL NOT NULL,
	"description" VARCHAR
);

CREATE TABLE "roles" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"role_name" VARCHAR NOT NULL,
	"creation_date" DATE NOT NULL,
	"description" VARCHAR
);

CREATE TABLE "states" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"state_name" VARCHAR NOT NULL,
	"creation_date" DATE NOT NULL,
	"description" VARCHAR
);

CREATE TABLE "appointment" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"applicant" BIGSERIAL NOT NULL,
	"receiver" BIGSERIAL,
	"studio_id" BIGSERIAL NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"last_update" TIMESTAMP NOT NULL,
	"state_id" BIGSERIAL NOT NULL,
	"message" VARCHAR,
	"file" VARCHAR
);

CREATE TABLE "images" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"path" VARCHAR NOT NULL,
	"tag_name" VARCHAR  NOT NULL,
	"upload_date" DATE NOT NULL,
	"description" VARCHAR  NOT NULL
);

CREATE TABLE "locations" (
	"id" BIGSERIAL  PRIMARY KEY,
	"address" VARCHAR NOT NULL,
	"lat" FLOAT NOT NULL,
	"lng" FLOAT NOT NULL,
	"description" VARCHAR NOT NULL
);

CREATE TABLE "global_events" (
	"id" BIGSERIAL  PRIMARY KEY, 
	"title" VARCHAR  NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"photo_id"  BIGSERIAL,
	"email" VARCHAR ,
	"phone"  VARCHAR NOT NULL,
	"description" VARCHAR 
);

--  RELATIONS

CREATE TABLE "relationships" (
	"user_id" BIGSERIAL NOT NULL,
	"studio_id" BIGSERIAL NOT NULL,
	"type" BIGSERIAL NOT NULL,
	PRIMARY KEY ("user_id","studio_id")
);

ALTER TABLE "users"
ADD CONSTRAINT "FK_users_images" FOREIGN KEY ("photo_id") REFERENCES "images"("id");

ALTER TABLE "relationships"
ADD CONSTRAINT "FK_relationships_users" FOREIGN KEY ("user_id") REFERENCES "users"("id"),
ADD CONSTRAINT "FK_relationships_studios" FOREIGN KEY ("studio_id") REFERENCES "studios"("id"),
ADD CONSTRAINT "FK_relationships_roles" FOREIGN KEY ("type") REFERENCES "roles"("id");

ALTER TABLE "meetings"
ADD CONSTRAINT "FK_meetings_users" FOREIGN KEY ("user_id") REFERENCES "users"("id"),
ADD CONSTRAINT "FK_meetings_studios" FOREIGN KEY ("studio_id") REFERENCES "studios"("id"),
ADD CONSTRAINT "FK_meetings_states" FOREIGN KEY ("state_id") REFERENCES "states"("id");

ALTER TABLE "appointment"
ADD CONSTRAINT "FK_appointment_usersApplicant" FOREIGN KEY ("applicant") REFERENCES "users"("id"),
ADD CONSTRAINT "FK_appointment_usersReceiver" FOREIGN KEY ("receiver") REFERENCES "users"("id"),
ADD CONSTRAINT "FK_appointment_studios" FOREIGN KEY ("studio_id") REFERENCES "studios"("id"),
ADD CONSTRAINT "FK_appointment_states" FOREIGN KEY ("state_id") REFERENCES "states"("id");

ALTER TABLE "studios"
ADD CONSTRAINT "FK_studios_locations" FOREIGN KEY ("location") REFERENCES "locations"("id");

-- RESETEAR SEQUENCIAS --
DO $$
DECLARE
i TEXT;
BEGIN
 FOR i IN (SELECT tb.table_name FROM information_schema.tables AS tb INNER JOIN information_schema.columns AS cols ON 
        tb.table_name = cols.table_name WHERE tb.table_catalog='DATA_BASE_NAME' 
         AND tb.table_schema='public' AND cols.column_name='Id') LOOP
         EXECUTE 'SELECT setval('||'"' || i || '_Id_seq"'||',1);';

  END LOOP;
END $$;

CREATE SEQUENCE hibernate_sequence START 101;