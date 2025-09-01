import { p } from "../905/896627";
function r({
  error: e,
  resetValue: t
}) {
  switch (e.key) {
    case "INVALID_VIEWER_MODE_FOR_EDITOR_TYPE":
    case "NO_VALID_PROTOTYPE_FOUND":
      t();
      return !0;
  }
}
export function $$a0(e) {
  p(e, r);
  return e;
}
export const W = $$a0;