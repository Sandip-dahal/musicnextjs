CREATE TABLE "contact_us" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"email" varchar NOT NULL UNIQUE,
	"message" text NOT NULL
);
