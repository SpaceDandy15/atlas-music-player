// setupTests.ts
import '@testing-library/jest-dom';
import { server } from './src/mocks/msw';
import { beforeAll, afterEach, afterAll } from 'vitest';

// Start server before all tests
beforeAll(() => server.listen());

// Reset any runtime request handlers between tests
afterEach(() => server.resetHandlers());

// Clean up once the tests are done
afterAll(() => server.close());
