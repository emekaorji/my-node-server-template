import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { env } from '../config/env';

export const pool = new Pool({
	connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool);
