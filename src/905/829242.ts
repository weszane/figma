export async function $$n0(e, t) {
  if (void 0 === t) return e;
  if (t.aborted) throw Error("Aborted");
  let i = new Promise((e, i) => {
    let n = () => {
      i(Error("Aborted"));
    };
    t.addEventListener("abort", n);
    t.addEventListener("abort", () => {
      t.removeEventListener("abort", n);
    });
  });
  return await Promise.race([e, i]);
}
export const Z = $$n0;