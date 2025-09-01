let n = e => Promise.resolve({
  code: [],
  error: Error("Not implemented")
});
export function $$r0(e) {
  n = e;
}
export async function $$a1(e) {
  return await n(e);
}
export const P = $$r0;
export const k = $$a1;