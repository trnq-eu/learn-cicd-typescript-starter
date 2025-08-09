import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

interface MockHeaders {
    authorization?: string;
}

describe("getAPIKey", () => {
    test("returns null if the header has no Authorization", () => {
        const headers = {};
        const result = getAPIKey(headers as any);
        expect(result).toBeNull();
    });

    test("returns null if the header doesn't start with ApiKey", () => {
        const headers: MockHeaders = { authorization: "Bearer abc123" };
        const result = getAPIKey(headers as any);
        expect(result).toBeNull();
    });

    test("returns null if the key is missing", () => {
    const headers: MockHeaders = { authorization: "ApiKey" };
    const result = getAPIKey(headers as any);
    expect(result).toBeNull();
  });

    test("returns the key if the header is in the correct format", () => {
        const headers: MockHeaders = { authorization: "ApiKey my-secret-key-123"}
        const result = getAPIKey(headers as any);
        expect(result).toBe("my-secret-key-123")
    });
})