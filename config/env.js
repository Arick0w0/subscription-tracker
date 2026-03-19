import { config } from "dotenv";
import fs from "node:fs";

// In hosted environments (e.g. Render), env vars are injected via process.env.
// Locally, we still support `.env.<env>.local` when present.
const envName = process.env.NODE_ENV || "development";
const localEnvPath = `.env.${envName}.local`;
if (fs.existsSync(localEnvPath)) {
  config({ path: localEnvPath });
}

export const {
  PORT,
  NODE_ENV,
  SERVE_URL,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
  QSTASH_URL,
  QSTASH_TOKEN,
  EMAIL_PASSWORD,
} = process.env;
