export var $$n2 = (e => (e.ADDED = "ADDED", e.REMOVED = "REMOVED", e))($$n2 || {});
export function $$i4(e, t = 0, r, n) {
  let a = {
    code: e,
    matchingVars: n
  };
  r && (a.hint = r);
  t && (a.indent = t);
  return a;
}
export function $$a3(e, t = !1) {
  return e.map(e => t ? $$s1(e) + e.code : e.code).join("\n");
}
export function $$s1(e) {
  return e.indent && e.indent > 0 ? "  ".repeat(e.indent) : "";
}
export function $$o0(e) {
  if (!e || "string" != typeof e) return "plaintext";
  switch (e.split(".").pop()?.toLowerCase()) {
    case "ts":
    case "tsx":
      return "typescript";
    case "js":
    case "jsx":
      return "javascript";
    case "css":
      return "css";
    case "json":
      return "json";
    case "html":
    case "htm":
      return "html";
    case "md":
    case "py":
      return "python";
    case "rb":
      return "ruby";
    case "go":
      return "go";
    case "cpp":
    case "cc":
    case "cxx":
    case "h":
    case "hpp":
      return "cpp";
    case "yml":
    case "xml":
      return "xml";
    case "swift":
      return "swift";
    case "kt":
    case "kts":
      return "kotlin";
    case "rs":
      return "rust";
    default:
      return "plaintext";
  }
}
export const $e = $$o0;
export const Gj = $$s1;
export const j5 = $$n2;
export const kt = $$a3;
export const n8 = $$i4;