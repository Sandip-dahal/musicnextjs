import { z } from "zod"

export const contactUsSchemaValidation = z.object({
    email: z.email("Please enter a valid email"),
    message: z
    .string()
    .min(2,"Message cant be less than 2 character")
    .max(100,"Message can't be more than 100 character")
    .trim()
    .toLowerCase()
})