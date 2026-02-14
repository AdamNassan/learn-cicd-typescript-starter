import { describe, test, expect } from "vitest";
import { getAPIKey } from "../src/api/auth";

describe("getAPIKey function", () => {
  test("should return a string", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    const key = getAPIKey(headers);
    expect(typeof key).toBe("string");
  });

  test("should not be empty", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    const key = getAPIKey(headers);
    expect(key).not.toBe("");
  });
});

