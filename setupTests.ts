import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./src/mocks/server";

// Start MSW before all tests
beforeAll(() => server.listen());

// Reset handlers after each test (clean slate)
afterEach(() => server.resetHandlers());

// Stop MSW after all tests
afterAll(() => server.close());
