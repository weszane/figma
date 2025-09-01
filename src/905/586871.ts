let n = {
  batchSize: 10,
  onBatchFinish: () => {},
  onBatchStart: () => {},
  priority: "user-visible"
};
export async function $$r0(e, t, i = {}) {
  let {
    batchSize,
    priority,
    onBatchFinish,
    onBatchStart
  } = {
    ...n,
    ...i
  };
  let d = e.length;
  let c = Math.ceil(d / batchSize);
  for (let i = 0; i < c; i++) {
    await onBatchStart(i);
    let n = 0;
    await scheduler.postTask(async () => {
      for (let r = i * batchSize; r < (i + 1) * batchSize && r < d; r++) {
        await t(e[r], r);
        n++;
      }
    }, {
      priority
    });
    await onBatchFinish(i, n);
  }
}
export const a = $$r0;