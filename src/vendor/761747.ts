import { Bi } from "../vendor/832351";
export function $$n0(e, t) {
  let {
    id,
    "aria-label": n,
    "aria-labelledby": r
  } = e;
  a = Bi(id);
  r && n ? r = [...new Set([id, ...r.trim().split(/\s+/)])].join(" ") : r && (r = r.trim().split(/\s+/).join(" "));
  n || r || !t || (n = t);
  return {
    id,
    "aria-label": n,
    "aria-labelledby": r
  };
}
export const b = $$n0;