import { error, quote } from "../905/206393";
export function $$r0(e) {
  var t;
  var i = "";
  var r = [];
  for (let t of (null !== e.$$package && (r.push("export namespace " + e.$$package + " {"), i += "  "), e.definitions)) if ("ENUM" === t.kind) {
    for (let [e, n] of (r.push(i + "export type " + t.name + " ="), t.fields.entries())) r.push(i + "  " + JSON.stringify(n.name) + (e + 1 < t.fields.length ? " |" : ";"));
    t.fields.length || r.push(i + "  any;");
    r.push("");
  }
  for (let a of e.definitions) if ("STRUCT" === a.kind || "MESSAGE" === a.kind) {
    for (let e of (r.push(i + "export interface " + a.name + " {"), a.fields)) if (!e.isDeprecated) {
      switch (e.type) {
        case "bool":
          t = "boolean";
          break;
        case "byte":
        case "int":
        case "uint":
        case "float":
          t = "number";
          break;
        case "int64":
        case "uint64":
          t = "string";
          break;
        default:
          t = e.type;
      }
      "byte" === e.type && e.isArray ? t = "Uint8Array" : e.isArray && (t += "[]");
      r.push(i + "  " + e.name + ("MESSAGE" === a.kind ? "?" : "") + ": " + t + ";");
    }
    r.push(i + "}");
    r.push("");
  } else "ENUM" !== a.kind && error("Invalid definition kind " + quote(a.kind), a.line, a.column);
  for (let t of (r.push(i + "export type DedupCache = any;"), r.push(""), r.push(i + "export interface Schema {"), r.push(i + "  makeDedupCache(): DedupCache;"), e.definitions)) "ENUM" === t.kind ? r.push(i + "  " + t.name + ": any;") : ("STRUCT" === t.kind || "MESSAGE" === t.kind) && (r.push(i + "  encode" + t.name + "(message: " + t.name + "): Uint8Array;"), r.push(i + "  decode" + t.name + "(buffer: Uint8Array, optionalDedupCache?: DedupCache): " + t.name + ";"), r.push(i + "  redact" + t.name + "(buffer: Uint8Array): void;"));
  r.push(i + "}");
  null !== e.$$package && r.push("}");
  r.push("");
  return r.join("\n");
}
export const compileSchemaTypeScript = $$r0;