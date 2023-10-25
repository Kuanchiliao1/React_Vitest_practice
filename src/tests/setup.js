import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

// runs cleanup for each test case
afterEach(() => {
  cleanup();
})