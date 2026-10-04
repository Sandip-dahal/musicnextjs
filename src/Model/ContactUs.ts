

import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const contactus = pgTable("contact_us",{
    id:uuid("id").primaryKey().defaultRandom(),
    email:varchar("email").notNull().unique(),
    message:text("message").notNull()
})