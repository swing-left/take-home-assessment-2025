// These unit tests ensure that route.ts correctly catches successes and failures when calling the API


/**
 * @jest-environment node
 */

const { GET } = require("../api/sample_api/route"); // changed from "@/app/api/..."
const { NextRequest } = require("next/server");

// Mock the getVoterData function directly
jest.mock("../api/sample_api/getVoterData", () => ({
  getVoterData: jest.fn(),
}));

describe("API Route: GET /api/sample_api", () => {
  it("returns 200 and voter data on success", async () => {
    const { getVoterData } = require("../api/sample_api/getVoterData");
    const mockData = [{ State: "Arizona" }];
    getVoterData.mockResolvedValueOnce(mockData);

    const req = new NextRequest('http://localhost:3000/api/sample_api');
    const res = await GET(req);

    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("application/json");

    const body = await res.json();
    expect(body).toEqual(mockData);
  });

  it("returns 500 and error message on failure", async () => {
    const { getVoterData } = require("../api/sample_api/getVoterData");
    getVoterData.mockRejectedValueOnce(new Error("DB down"));

    const req = new NextRequest('http://localhost:3000/api/sample_api');
    const res = await GET(req);

    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body).toEqual({ error: "Failed to load voter data" });
  });
});
