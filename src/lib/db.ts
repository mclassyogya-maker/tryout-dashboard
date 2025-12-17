import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function query(query: string, params?: any[]) {
  try {
    const result = await sql(query, params || []);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default sql;
