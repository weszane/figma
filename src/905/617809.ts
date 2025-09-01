export function $$n0(e) {
  let t = e.definitions;
  let i = "";
  null !== e.$$package && (i += "package " + e.$$package + ";\n\n");
  let n = !0;
  for (let e of t) {
    for (let t of (n ? n = !1 : i += "\n", i += e.kind.toLowerCase() + " " + e.name + " {\n", e.fields)) {
      i += "  ";
      "ENUM" !== e.kind && (i += t.type, t.isArray && (i += "[]"), i += " ");
      i += t.name;
      "STRUCT" !== e.kind && (i += " = " + t.value);
      t.isDeprecated && (i += " [deprecated]");
      i += ";\n";
    }
    i += "}\n";
  }
  return i;
}
export const prettyPrintSchema = $$n0;