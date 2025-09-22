// Original code: let n = { ... }; export async function $$r0(e, t, i = {}) { ... }; export const a = $$r0;

// Define an interface for batch processing options
interface BatchOptions {
  batchSize: number;
  onBatchFinish: (batchIndex: number, processedCount: number) => void | Promise<void>;
  onBatchStart: (batchIndex: number) => void | Promise<void>;
  priority: "user-visible" | "user-blocking" | "background";
}

// Default batch options (original: n)
const defaultBatchOptions: BatchOptions = {
  batchSize: 10,
  onBatchFinish: () => {},
  onBatchStart: () => {},
  priority: "user-visible"
};

// Refactored function: processArrayInBatches (original: $$r0)
export async function processArrayInBatches(
  array: any[], // original: e
  callback: (item: any, index: number) => void | Promise<void>, // original: t
  options: Partial<BatchOptions> = {} // original: i
): Promise<void> {
  // Merge options with defaults (original: { ...n, ...i })
  const { batchSize, priority, onBatchFinish, onBatchStart } = { ...defaultBatchOptions, ...options };
  
  const totalItems = array.length; // original: d
  const totalBatches = Math.ceil(totalItems / batchSize); // original: c
  
  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) { // original: i
    await onBatchStart(batchIndex);
    let processedCount = 0; // original: n
    
    await scheduler.postTask(async () => {
      for (let itemIndex = batchIndex * batchSize; itemIndex < (batchIndex + 1) * batchSize && itemIndex < totalItems; itemIndex++) { // original: r
        await callback(array[itemIndex], itemIndex);
        processedCount++;
      }
    }, { priority });
    
    await onBatchFinish(batchIndex, processedCount);
  }
}

// Alias export (original: export const a = $$r0)
export const a = processArrayInBatches;
