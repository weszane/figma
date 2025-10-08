// Original: $$n0
/**
 * Splits a buffer into five 512-byte chunks and returns them as an object with raw stack properties.
 * @param buffer - The input buffer to split.
 * @returns An object containing the five raw stack chunks.
 */
export function splitBufferIntoRawStacks(buffer: Uint8Array): {
  raw_stack: Uint8Array;
  raw_stack2: Uint8Array;
  raw_stack3: Uint8Array;
  raw_stack4: Uint8Array;
  raw_stack5: Uint8Array;
} {
  const chunks = [
    buffer.slice(0, 512),
    buffer.slice(512, 1024),
    buffer.slice(1024, 1536),
    buffer.slice(1536, 2048),
    buffer.slice(2048, 2560),
  ];
  return {
    raw_stack: chunks[0],
    raw_stack2: chunks[1],
    raw_stack3: chunks[2],
    raw_stack4: chunks[3],
    raw_stack5: chunks[4],
  };
}

// Original: r
/**
 * A utility class for running functions in a fake stack context.
 */
class FakeStackRunner {
  /**
   * Runs the provided function in a fake stack context.
   * @param fn - The function to execute.
   */
  runInFakeStack(fn: () => void): void {
    fn();
  }
}

// Original: $$a1
/**
 * Executes a function in a fake stack context using a FakeStackRunner instance.
 * @param fn - The function to execute.
 */
export function executeInFakeStack(fn: () => void): void {
  new FakeStackRunner().runInFakeStack(fn);
}

export const I = splitBufferIntoRawStacks;
export const u = executeInFakeStack;
