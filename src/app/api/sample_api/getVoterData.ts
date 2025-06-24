// Pulls and returns voter_registration_deaddlines from postgresql database
import { Pool } from "pg";

// Add your postgres credientials to postgres:test (username:password)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://postgres:test@localhost:5432/state_registration_deadlines",
});

export async function getVoterData() {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM voter_registration_deadlines");
  client.release();
  return result.rows;
}
