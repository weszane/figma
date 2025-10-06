function n(e, t, i, r) {
  let a = [];
  for (let s of i) {
    let i = t + s.name;
    if (s.isArray && !r) return null;
    let o = function (e, t, i) {
      switch (t) {
        case "bool":
          return {
            type: "bool ",
            name: i
          };
        case "byte":
          return {
            type: "uint8_t ",
            name: i
          };
        case "int":
          return {
            type: "int32_t ",
            name: i
          };
        case "uint":
          return {
            type: "uint32_t ",
            name: i
          };
        case "int64":
          return {
            type: "int64_t ",
            name: i
          };
        case "uint64":
          return {
            type: "uint64_t ",
            name: i
          };
        case "float":
          return {
            type: "float ",
            name: i
          };
        case "string":
          return {
            type: "const char *",
            name: i
          };
        default:
          {
            let n = e[t];
            if ("ENUM" === n.kind) return {
              type: n.name + " ",
              name: i
            };
            return null;
          }
      }
    }(e, s.type, i);
    if (null !== o) {
      a.push(o);
      continue;
    }
    let l = e[s.type];
    if ("STRUCT" !== l.kind) return null;
    let d = n(e, i + "_", l.fields, !1);
    if (null === d) return null;
    a.push.apply(a, d);
  }
  return a;
}
function r(e) {
  return e.type + e.name;
}
function a(e) {
  return e.name;
}
function s(e) {
  switch (e.type) {
    case "bool ":
      return `!bb.readBool(${e.name})`;
    case "uint8_t ":
      return `!bb.readByte(${e.name})`;
    case "int32_t ":
      return `!bb.readVarInt(${e.name})`;
    case "uint32_t ":
      return `!bb.readVarUint(${e.name})`;
    case "int64_t ":
      return `!bb.readVarInt64(${e.name})`;
    case "uint64_t ":
      return `!bb.readVarUint64(${e.name})`;
    case "float ":
      return `!bb.readVarFloat(${e.name})`;
    case "const char *":
      return `!bb.readString(${e.name})`;
    default:
      return `!bb.readVarUint(reinterpret_cast<uint32_t &>(${e.name}))`;
  }
}
function o(e) {
  switch (e.type) {
    case "bool ":
      return `_wb.writeBool(${e.name})`;
    case "uint8_t ":
      return `_wb.writeByte(${e.name})`;
    case "int32_t ":
      return `_wb.writeVarInt(${e.name})`;
    case "uint32_t ":
      return `_wb.writeVarUint(${e.name})`;
    case "int64_t ":
      return `_wb.writeVarInt64(${e.name})`;
    case "uint64_t ":
      return `_wb.writeVarUint64(${e.name})`;
    case "float ":
      return `_wb.writeVarFloat(${e.name})`;
    case "const char *":
      return `_wb.writeString(${e.name})`;
    default:
      return `_wb.writeVarUint(static_cast<uint32_t>(${e.name}))`;
  }
}
function l(e, t, i, o, l) {
  let d = o.name;
  if (o.isArray) {
    let t = `_${d}_count`;
    e.push(l + `uint32_t ${t};`);
    e.push(l + `if (!bb.readVarUint(${t})) return false;`);
    o.isDeprecated || e.push(l + `visitor.visit${i.name}_${o.name}_count(${t});`);
    e.push(l + `while (${t}-- > 0) {`);
    l += "  ";
    d += "_element";
  }
  let c = n(t, "", [o], !0);
  if (null !== c) {
    for (let t of c) e.push(l + `${r(t)};`);
    e.push(l + `if (${c.map(s).join(" || ")}) return false;`);
    o.isDeprecated || e.push(l + `visitor.visit${i.name}_${d}(${c.map(a).join(", ")});`);
  } else {
    o.isDeprecated || e.push(l + `visitor.visit${i.name}_${d}();`);
    let n = t[o.type];
    e.push(l + `if (!parse${n.name}(bb, visitor)) return false;`);
  }
  o.isArray && e.push(l.slice(2) + "}");
}
export function $$d0(e, t = {}) {
  let i = {};
  let c = [];
  let u = t.includePrefix || "";
  for (let t of e.definitions) i[t.name] = t;
  for (let t of (null !== e.$$package && (c.push(`#ifndef INCLUDE_${e.$$package.toUpperCase()}_H`), c.push(`#define INCLUDE_${e.$$package.toUpperCase()}_H`), c.push("")), c.push(`#include "${u}kiwi.h"`), c.push(""), null !== e.$$package && (c.push(`namespace ${e.$$package} {`), c.push("")), e.definitions)) if ("ENUM" === t.kind) {
    for (let e of (c.push(`enum class ${t.name} : uint32_t {`), t.fields)) e.isDeprecated || c.push(`  ${e.name} = ${e.value},`);
    c.push("};");
    c.push("");
  }
  for (let t = 0; t < 2; t++) {
    let a = ") = 0;";
    for (let s of (0 === t ? (c.push("class Visitor {"), c.push("public:")) : (c.push("class Writer : public Visitor {"), c.push(":"), c.push("  kiwi::WriteBuffer &_wb;"), c.push("public:"), c.push("  Writer(kiwi::WriteBuffer &wb) : _wb(wb) {}"), a = ") override;"), e.definitions)) {
      if ("STRUCT" === s.kind) {
        let e = n(i, "", s.fields, !1);
        if (null !== e) {
          c.push(`  virtual void visit${s.name}(${e.map(r).join(", ")}${a}`);
          continue;
        }
      }
      if ("STRUCT" === s.kind || "MESSAGE" === s.kind) {
        for (let e of (c.push(`  virtual void begin${s.name}(${a}`), s.fields)) {
          if (e.isDeprecated) continue;
          let t = e.name;
          e.isArray && (c.push(`  virtual void visit${s.name}_${e.name}_count(uint32_t size${a}`), t += "_element");
          let o = n(i, "", [e], !0);
          null !== o ? c.push(`  virtual void visit${s.name}_${t}(${o.map(r).join(", ")}${a}`) : c.push(`  virtual void visit${s.name}_${t}(${a}`);
        }
        c.push(`  virtual void end${s.name}(${a}`);
      }
    }
    c.push("};");
    c.push("");
  }
  for (let t of e.definitions) ("STRUCT" === t.kind || "MESSAGE" === t.kind) && c.push(`bool parse${t.name}(kiwi::ByteBuffer &bb, Visitor &visitor);`);
  for (let t of (c.push(""), c.push("#ifdef IMPLEMENT_SCHEMA_H"), c.push(""), e.definitions)) if ("STRUCT" === t.kind) {
    let e = n(i, "", t.fields, !1);
    if (null !== e) {
      for (let i of (c.push(`bool parse${t.name}(kiwi::ByteBuffer &bb, Visitor &visitor) {`), e)) c.push(`  ${r(i)};`);
      c.push(`  if (${e.map(s).join(" || ")}) return false;`);
      c.push(`  visitor.visit${t.name}(${e.map(a).join(", ")});`);
      c.push("  return true;");
      c.push("}");
      c.push("");
    } else {
      for (let e of (c.push(`bool parse${t.name}(kiwi::ByteBuffer &bb, Visitor &visitor) {`), c.push(`  visitor.begin${t.name}();`), t.fields)) l(c, i, t, e, "  ");
      c.push(`  visitor.end${t.name}();`);
      c.push("  return true;");
      c.push("}");
      c.push("");
    }
  } else if ("MESSAGE" === t.kind) {
    for (let e of (c.push(`bool parse${t.name}(kiwi::ByteBuffer &bb, Visitor &visitor) {`), c.push(`  visitor.begin${t.name}();`), c.push("  while (true) {"), c.push("    uint32_t _type;"), c.push("    if (!bb.readVarUint(_type)) return false;"), c.push("    switch (_type) {"), c.push("      case 0: {"), c.push(`        visitor.end${t.name}();`), c.push("        return true;"), c.push("      }"), t.fields)) {
      c.push(`      case ${e.value}: {`);
      l(c, i, t, e, "        ");
      c.push("        break;");
      c.push("      }");
    }
    c.push("      default: return false;");
    c.push("    }");
    c.push("  }");
    c.push("}");
    c.push("");
  }
  for (let t of e.definitions) {
    if ("STRUCT" === t.kind) {
      let e = n(i, "", t.fields, !1);
      if (null !== e) {
        for (let i of (c.push(`void Writer::visit${t.name}(${e.map(r).join(", ")}) {`), e)) c.push(`  ${o(i)};`);
        c.push("}");
        c.push("");
        continue;
      }
    }
    if ("STRUCT" === t.kind || "MESSAGE" === t.kind) {
      for (let e of (c.push(`void Writer::begin${t.name}() {`), c.push("}"), c.push(""), t.fields)) {
        if (e.isDeprecated) continue;
        let a = e.name;
        e.isArray && (c.push(`void Writer::visit${t.name}_${e.name}_count(uint32_t size) {`), "MESSAGE" === t.kind && c.push(`  _wb.writeVarUint(${e.value});`), c.push("  _wb.writeVarUint(size);"), c.push("}"), c.push(""), a += "_element");
        let s = n(i, "", [e], !0);
        if (null !== s) {
          for (let i of (c.push(`void Writer::visit${t.name}_${a}(${s.map(r).join(", ")}) {`), "MESSAGE" !== t.kind || e.isArray || c.push(`  _wb.writeVarUint(${e.value});`), s)) c.push(`  ${o(i)};`);
          c.push("}");
          c.push("");
        } else {
          c.push(`void Writer::visit${t.name}_${a}() {`);
          "MESSAGE" !== t.kind || e.isArray || c.push(`  _wb.writeVarUint(${e.value});`);
          c.push("}");
          c.push("");
        }
      }
      c.push(`void Writer::end${t.name}() {`);
      "MESSAGE" === t.kind && c.push("  _wb.writeVarUint(0);");
      c.push("}");
      c.push("");
    }
  }
  c.push("#endif");
  c.push("");
  null !== e.$$package && (c.push("}"), c.push(""), c.push("#endif"), c.push(""));
  return c.join("\n");
}
export const compileSchemaCallbackCPP = $$d0;
