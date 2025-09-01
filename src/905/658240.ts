export function $$n0(e, {
  includeMimeType: t = !1
} = {}) {
  return new Promise((i, n) => {
    let r = new FileReader();
    r.onload = () => {
      let e = r.result;
      if ("string" == typeof e) {
        t && i(e);
        let r = e.split(",");
        r.length >= 2 ? i(r[1]) : n(Error("Invalid data URL format"));
      } else n(Error("FileReader result is not a string"));
    };
    r.onerror = () => {
      n(r.error);
    };
    r.readAsDataURL(e);
  });
}
export const t = $$n0;