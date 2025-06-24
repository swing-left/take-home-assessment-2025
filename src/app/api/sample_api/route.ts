import { NextRequest } from "next/server";
import { getVoterData } from "./getVoterData";

export async function GET(request: NextRequest) {
  try {
    const data = await getVoterData();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error querying database:", error);
    return new Response(JSON.stringify({ error: "Failed to load voter data" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
