// This unit tests determines if we are able to correctly capture successes or failures when connecting to the PostgreSQL database.

/**
 * @jest-environment node
 */
import { getVoterData } from "../api/sample_api/getVoterData";
import { Pool } from "pg";

// Mock pg.Pool
jest.mock("pg", () => {
  const mockClient = {
    query: jest.fn(),
    release: jest.fn(),
  };
  const mockPool = {
    connect: jest.fn(() => mockClient),
  };
  return { Pool: jest.fn(() => mockPool), __mockClient: mockClient, __mockPool: mockPool };
});

describe("getVoterData", () => {
  it("returns rows from the database", async () => {
    const { __mockClient } = require("pg");
    const mockData = [{ State: "Arizona" }];
    __mockClient.query.mockResolvedValueOnce({ rows: mockData });

    const data = await getVoterData();
    expect(data).toEqual(mockData);
  });

  it("throws an error when db connection fails", async () => {
    const { __mockPool } = require("pg");
    __mockPool.connect.mockRejectedValueOnce(new Error("DB connection error"));

    await expect(getVoterData()).rejects.toThrow("DB connection error");
  });
});
