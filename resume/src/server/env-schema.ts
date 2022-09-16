import { z } from "zod";

export const envSchema = z.object({
  // Specify your environment variables schema here
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z
    .string()
    .regex(new RegExp(/[0-9]+/), "EMAIL_PORT must be a number"),
  EMAIL_FROM: z.string(),
  EMAIL_TO: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASSWORD: z.string(),
});
