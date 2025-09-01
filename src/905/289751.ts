export function $$n0(e) {
  return new Promise((t, i) => {
    if (!e) {
      i(Error("Failed to load image bytes without file object"));
      return;
    }
    let n = new FileReader();
    function r(e) {
      if ("load" !== e.type || "string" == typeof n.result || !n.result) {
        i(Error(`Failed to load image bytes: event=${e.type}`));
        return;
      }
      t(n.result);
    }
    n.addEventListener("load", r);
    n.addEventListener("abort", r);
    n.addEventListener("error", r);
    n.readAsArrayBuffer(e);
  });
}
export const c = $$n0;