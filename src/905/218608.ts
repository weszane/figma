let n = {
  0: "file_copy",
  1: "file_edit",
  2: "file_create",
  3: "file_default",
  4: "file_restore",
  5: "file_multiplayer",
  6: "file_savepoint",
  7: "branch_child_create",
  8: "branch_child_merge",
  9: "branch_create",
  10: "branch_merge",
  11: "branch_update",
  12: "branch_archive",
  13: "branch_restore",
  14: "branch_child_update",
  15: "template_create",
  16: "template_update",
  17: "file_empty_create"
};
export function $$r1(e) {
  return n[e] ?? "file_default";
}
export function $$a3(e) {
  switch (e.view) {
    case "branch_child_create":
    case "branch_child_merge":
    case "branch_child_update":
    case "branch_create":
    case "branch_merge":
    case "branch_update":
    case "branch_archive":
    case "branch_restore":
      return !0;
    default:
      return !1;
  }
}
export function $$s0(e) {
  return !!e.label || $$a3(e) || "file_restore" === e.view;
}
export var $$o2 = (e => (e[e.COMPARE_CHANGES = 0] = "COMPARE_CHANGES", e[e.COMPARE_MODAL = 1] = "COMPARE_MODAL", e))($$o2 || {});
export const AI = $$s0;
export const HF = $$r1;
export const lE = $$o2;
export const pW = $$a3;