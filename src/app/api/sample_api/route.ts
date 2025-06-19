import { NextRequest } from "next/server";

const DB_URL = "postgres://postgres:test@localhost:5432/state_registration_deadlines";

export async function GET(request: NextRequest) {
  return new Response(
    'WORLD',
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}
