import { error, quote } from "../905/206393";
function r(e, t) {
  return "int64" !== t.type && "uint64" !== t.type || t.isArray ? e : `std::bit_cast<std::array<std::byte, 8>>(${e})`;
}
function a(e, t) {
  return t.isArray ? e : "int64" === t.type ? `std::bit_cast<int64_t>(${e})` : "uint64" === t.type ? `std::bit_cast<uint64_t>(${e})` : e;
}
function s(e, t, i) {
  if (!t.isArray || t.isDeprecated || !t.type) return !1;
  let n = e[t.type];
  return !!n && i.includes(n.name);
}
function o(e, t, i) {
  let r;
  switch (t.type) {
    case "bool":
      r = "bool";
      break;
    case "byte":
      r = "uint8_t";
      break;
    case "int":
      r = "int32_t";
      break;
    case "uint":
      r = "uint32_t";
      break;
    case "int64":
      r = "int64_t";
      break;
    case "uint64":
      r = "uint64_t";
      break;
    case "float":
      r = "float";
      break;
    case "string":
      r = "kiwi::String";
      break;
    default:
      {
        let i = e[t.type];
        i || error(`Invalid type ${quote(t.type)} for field ${quote(t.name)}`, t.line, t.column);
        r = i.name;
      }
  }
  i && (r = `kiwi::Array<${r}>`);
  return r;
}
function l(e) {
  return "_data_" + e.name;
}
function d(e) {
  return `(1 << ${e % 32})`;
}
function c(e, t) {
  return !t.isArray && t.type in e && "ENUM" !== e[t.type].kind;
}
function u(e, t, i) {
  switch (t.type) {
    case "bool":
      return `_wb.writeBool(${i});`;
    case "byte":
      return `_wb.writeByte(${i});`;
    case "int":
      return `_wb.writeVarInt(${i});`;
    case "uint":
      return `_wb.writeVarUint(${i});`;
    case "int64":
      return `_wb.writeVarInt64(${i});`;
    case "uint64":
      return `_wb.writeVarUint64(${i});`;
    case "float":
      return `_wb.writeVarFloat(${i});`;
    case "string":
      return `_wb.writeString(${i}.c_str());`;
    default:
      {
        let r = e[t.type];
        if (r) {
          if ("ENUM" === r.kind) return `_wb.writeVarUint(static_cast<uint32_t>(${i}));`;
          return `if (!${i}${c(e, t) ? "->" : "."}encode(_wb)) return false;`;
        }
        error(`Invalid type ${quote(t.type)} for field ${quote(t.name)}`, t.line, t.column);
      }
  }
}
function p(e, t, i, r) {
  let a = c(e, t);
  switch (t.type) {
    case "bool":
      return `_bb.readBool(${i})`;
    case "byte":
      return `_bb.readByte(${i})`;
    case "int":
      return `_bb.readVarInt(${i})`;
    case "uint":
      return `_bb.readVarUint(${i})`;
    case "int64":
      return `_bb.readVarInt64(${i})`;
    case "uint64":
      return `_bb.readVarUint64(${i})`;
    case "float":
      return `_bb.readVarFloat(${i})`;
    case "string":
      return `_bb.readString(${i}, _pool)`;
    default:
      {
        let s = e[t.type];
        if (s) {
          if ("ENUM" === s.kind) return `_bb.readVarUint(reinterpret_cast<uint32_t &>(${i}))`;
          if (r) return `${i + (a ? "->" : ".")}decode(_bb, _pool, _schema, tempDecodingFields)`;
          return `${i + (a ? "->" : ".")}decode(_bb, _pool, _schema)`;
        }
        error(`Invalid type ${quote(t.type)} for field ${quote(t.name)}`, t.line, t.column);
      }
  }
}
function m(e) {
  let t = {
    bool: 1,
    byte: 1,
    int: 4,
    uint: 4,
    float: 4
  };
  return e.slice().sort(function (i, n) {
    let r = !i.isArray && t[i.type] || 8;
    let a = !n.isArray && t[n.type] || 8;
    return r !== a ? a - r : e.indexOf(i) - e.indexOf(n);
  });
}
function h(e, t) {
  switch (e.type) {
    case "bool":
    case "byte":
    case "int":
    case "uint":
    case "int64":
    case "uint64":
    case "float":
    case "string":
      return !0;
  }
  return function (e, t) {
    if (e.type) {
      let i = t[e.type];
      if (i && "ENUM" === i.kind) return !0;
    }
    return !1;
  }(e, t);
}
function g(e, t) {
  return "string" === t.type ? "const char*" : o(e, t, !1);
}
var f = (e => (e[e.ForwardDeclarations = 0] = "ForwardDeclarations", e[e.Declarations = 1] = "Declarations", e[e.Inlined = 2] = "Inlined", e[e.Implementations = 3] = "Implementations", e))(f || {});
function _(e) {
  return e.fields.every(e => "uint" === e.type || "float" === e.type || "byte" === e.type && e.isArray);
}
export function $$A0(e, t = {}) {
  let i = {};
  for (let t of e.definitions) i[t.name] = t;
  let f = t.includePrefix || "";
  let {
    sparseMessages = [],
    copyableMessages = [],
    generateVisitors = [],
    separateEnumFile
  } = t;
  for (let e of sparseMessages) e in i || error(`Requesting sparse implementation for ${quote(e)} which is not defined in the schema`, 0, 0);
  let x = [];
  for (let t of (x.push(`#include "${f}kiwi.h"`), separateEnumFile && x.push(`#include "${f}${separateEnumFile}"`), x.push(""), null !== e.$$package && (x.push(`namespace ${e.$$package} {`), x.push(""), x.push(`#ifndef INCLUDE_${e.$$package.toUpperCase()}_H`), x.push(`#define INCLUDE_${e.$$package.toUpperCase()}_H`), x.push("")), x.push("class BinarySchema {"), x.push("public:"), x.push("  bool parse(kiwi::ByteBuffer &bb);"), x.push("  const kiwi::BinarySchema &underlyingSchema() const { return _schema; }"), e.definitions)) {
    "MESSAGE" === t.kind && (x.push(`  bool skip${t.name}Field(kiwi::ByteBuffer &bb, uint32_t id) const;`), x.push(`  bool skip${t.name}(kiwi::ByteBuffer &bb) const;`));
    "STRUCT" === t.kind && _(t) && x.push(`  bool skip${t.name}(kiwi::ByteBuffer &bb) const;`);
  }
  for (let t of (x.push(""), x.push("private:"), x.push("  kiwi::BinarySchema _schema;"), e.definitions)) "MESSAGE" === t.kind && x.push(`  uint32_t _index${t.name} = 0;`);
  for (let t of (x.push("};"), x.push(""), separateEnumFile || b(e, x), [0, 1, 2, 3])) {
    let f = !1;
    if (3 === t) {
      if (null !== e.$$package) {
        if (sparseMessages.length > 0) {
          for (let t of (x.push(`}  // namespace ${e.$$package}`), sparseMessages)) {
            x.push("template<>");
            x.push(`struct std::hash<${e.$$package}::${t}::Field> {`);
            x.push(`  size_t operator()(const ${e.$$package}::${t}::Field& msg) const {`);
            x.push("    return 0;");
            x.push("  }");
            x.push("};");
          }
          x.push(`namespace ${e.$$package} {`);
        }
        x.push(`#endif  // INCLUDE_${e.$$package.toUpperCase()}_H`);
      }
      for (let t of (x.push("#ifdef IMPLEMENT_SCHEMA_H"), x.push(""), x.push("bool BinarySchema::parse(kiwi::ByteBuffer &bb) {"), x.push("  if (!_schema.parse(bb)) return false;"), e.definitions)) "MESSAGE" === t.kind && x.push(`  _schema.findDefinition("${t.name}", _index${t.name});`);
      for (let t of (x.push("  return true;"), x.push("}"), x.push(""), e.definitions)) if ("MESSAGE" === t.kind && (x.push(`bool BinarySchema::skip${t.name}Field(kiwi::ByteBuffer &bb, uint32_t id) const {`), x.push(`  return _schema.skipField(bb, _index${t.name}, id);`), x.push("}"), x.push(""), x.push(`bool BinarySchema::skip${t.name}(kiwi::ByteBuffer &bb) const {`), x.push("  while (true) {"), x.push("    uint32_t type;"), x.push("    if (!bb.readVarUint(type)) return false;"), x.push("    if (type == 0) return true;"), x.push(`    if (!skip${t.name}Field(bb, type)) return false;`), x.push("  }"), x.push("}"), x.push(""), generateVisitors.includes(t.name) && (x = x.concat(function (e, t) {
        let i = [];
        for (let n of (i.push(`bool parse${e.name}(kiwi::ByteBuffer& bb, ${e.name}Visitor& visitor) {`), i.push("  while (true) {"), i.push("    uint32_t _field;"), i.push("    if (!bb.readVarUint(_field)) return false;"), i.push("    switch (_field) {"), i.push("      case 0: {"), i.push("        return true;"), i.push("      }"), e.fields)) !n.isDeprecated && ((i.push(`      case ${n.value}: {`), n.isArray) ? (i.push("        uint32_t count;"), i.push("        if (!bb.readVarUint(count)) return false;"), i.push(`        if (!visitor.visit${e.name}_${n.name}(count)) return false;`)) : h(n, t) ? (i.push(`        ${g(t, n)} v;`), i.push(`        if (!${"string" === n.type ? "bb.readString(v)" : p(t, n, "v", !1).slice(1)}) return false;`), i.push(`        if (!visitor.visit${e.name}_${n.name}(v)) return false;`)) : i.push(`        if (!visitor.visit${e.name}_${n.name}()) return false;`), i.push("        break;"), i.push("      }"));
        i.push("      default:");
        i.push(`        if (visitor.schema.skip${e.name}Field(bb, _field)) break;`);
        i.push("        return false;");
        i.push("    }");
        i.push("  }");
        i.push("}");
        i.push("");
        return i;
      }(t, i)))), "STRUCT" === t.kind && _(t)) {
        x.push(`bool BinarySchema::skip${t.name}(kiwi::ByteBuffer &bb) const {`);
        let e = !1;
        let i = !1;
        for (let n of t.fields) {
          x.push(`  // ${n.name}`);
          "float" === n.type ? (i || (x.push("  float f;"), i = !0), x.push("  if (!bb.readVarFloat(f)) return false;")) : (e || (x.push("  uint32_t i;"), e = !0), x.push("  if (!bb.readVarUint(i)) return false;"), n.isArray && x.push("  if (!bb.skipCount(i)) return false;"));
        }
        x.push("  return true;");
        x.push("}");
        x.push("");
      }
    }
    for (let _ of e.definitions) {
      if ("ENUM" === _.kind) continue;
      let e = sparseMessages.includes(_.name);
      if (e && "MESSAGE" !== _.kind) {
        let e = `Type ${quote(_.name)} cannot be declared as sparse. `;
        e += `${quote(_.name)} is type ${quote(_.kind)}, but needs to be a MESSAGE.`;
        error(e, _.line, _.column);
      }
      0 === t ? (x.push(`class ${_.name};`), f = !0) : 1 === t ? (x = e ? x.concat(function (e, t, i) {
        let n = e.fields;
        let r = [];
        for (let a of (r.push(`class ${e.name} {`), r.push("public:"), r.push("  union Field;"), r.push(`  ${e.name}() { (void)_flags; }`), r.push(`  ${e.name}(const ${e.name}&) = delete;`), r.push(`  ${e.name}& operator=(const ${e.name}&) = delete;`), r.push(`  ${e.name}(${e.name}&&) = default;`), r.push(`  ${e.name}& operator=(${e.name}&&) = default;`), r.push(""), i && (r.push(`  ${e.name} copy(kiwi::MemoryPool& pool) const;`), r.push("")), r.push("  auto fields() const {"), r.push("    return _fields.fields();"), r.push("  }"), r.push(""), n)) {
          if (a.isDeprecated) continue;
          let e = o(t, a, a.isArray);
          c(t, a) ? (r.push(`  ${e} *${a.name}();`), r.push(`  const ${e} *${a.name}() const;`), r.push(`  const ${e} *iterator_${a.name}(const typename kiwi::SparseFields<Field>::FieldIterator& it) const;`)) : (r.push(`  kiwi::Optional<${e}> ${a.name}() const;`), r.push(`  ${e} iterator_${a.name}(const typename kiwi::SparseFields<Field>::FieldIterator& it) const;`));
          c(t, a) ? r.push(`  void set_${a.name}(kiwi::MemoryPool &pool, ${e} *value);`) : a.isArray ? r.push(`  ${e} &set_${a.name}(kiwi::MemoryPool &pool, uint32_t count);`) : r.push(`  void set_${a.name}(kiwi::MemoryPool &pool, const ${e} &value);`);
          r.push("");
        }
        r.push("  bool encode(kiwi::WriteBuffer &wb) const;");
        r.push("  bool decode(kiwi::ByteBuffer &bb, kiwi::MemoryPool &pool, const BinarySchema *schema = nullptr);");
        r.push("  bool decode(kiwi::ByteBuffer &bb, kiwi::MemoryPool &pool, const BinarySchema *schema, std::vector<kiwi::SparseFields<Field>::Element> &tempFields);");
        r.push("");
        r.push("private:");
        r.push(`  uint32_t _flags[${n.length + 31 >> 5}] = {};`);
        let a = m(n);
        r.push("public:");
        r.push("  union Field {");
        r.push("  public:");
        r.push("    bool operator==(const Field&) const { return false; }");
        let s = "    ";
        for (let e of a) {
          var d;
          if (e.isDeprecated) continue;
          let i = l(e);
          d = e.isArray;
          let n = "int64" !== e.type && "uint64" !== e.type || d ? o(t, e, d) : "std::array<std::byte, 8>";
          c(t, e) ? r.push(s + `${n} *${i};`) : r.push(s + `${n} ${i};`);
        }
        r.push("  };");
        r.push("private:");
        r.push("  kiwi::SparseFields<Field> _fields;");
        r.push("  friend std::hash<Field>;");
        r.push("};");
        r.push("");
        return r;
      }(_, i, copyableMessages.includes(_.name))) : x.concat(function (e, t, i) {
        let n = e.fields;
        let r = [];
        for (let a of (r.push(`class ${e.name} {`), r.push("public:"), r.push(`  ${e.name}() { (void)_flags; }`), i || (r.push(`  ${e.name}(const ${e.name}&) = delete;`), r.push(`  ${e.name}& operator=(const ${e.name}&) = delete;`)), r.push(`  ${e.name}(${e.name}&&) = default;`), r.push(`  ${e.name}& operator=(${e.name}&&) = default;`), r.push(""), i && (r.push(`  ${e.name} copy() const;`), r.push("")), n)) {
          if (a.isDeprecated) continue;
          let e = o(t, a, a.isArray);
          r.push(`  ${e} *${a.name}();`);
          r.push(`  const ${e} *${a.name}() const;`);
          c(t, a) ? r.push(`  void set_${a.name}(${e} *value);`) : a.isArray ? r.push(`  ${e} &set_${a.name}(kiwi::MemoryPool &pool, uint32_t count);`) : r.push(`  void set_${a.name}(const ${e} &value);`);
          r.push("");
        }
        for (let a of (r.push("  bool encode(kiwi::WriteBuffer &wb) const;"), r.push("  bool decode(kiwi::ByteBuffer &bb, kiwi::MemoryPool &pool, const BinarySchema *schema = nullptr);"), r.push(""), r.push("private:"), i && (r.push(`  ${e.name}(const ${e.name}&) = default;`), r.push(`  ${e.name}& operator=(const ${e.name}&) = default;`)), r.push(`  uint32_t _flags[${n.length + 31 >> 5}] = {};`), m(n))) {
          if (a.isDeprecated) continue;
          let e = l(a);
          let i = o(t, a, a.isArray);
          c(t, a) ? r.push(`  ${i} *${e} = {};`) : r.push(`  ${i} ${e} = {};`);
        }
        r.push("};");
        r.push("");
        return r;
      }(_, i, copyableMessages.includes(_.name))), generateVisitors.includes(_.name) && (x = x.concat(function (e, t) {
        let i = [];
        for (let n of (i.push(`struct ${e.name}Visitor {`), i.push("  kiwi::ByteBuffer& bb;"), i.push("  BinarySchema& schema;"), i.push(""), i.push(`  ${e.name}Visitor(kiwi::ByteBuffer& _bb, BinarySchema& _schema) : bb(_bb), schema(_schema) {}`), i.push(""), e.fields)) if (!n.isDeprecated) {
          if (n.isArray) {
            i.push("  // If this is overridden, the new implementation must skip over exactly count");
            i.push(`  // encoded instances of ${n.type} in bb`);
            i.push(`  virtual bool visit${e.name}_${n.name}(size_t count) {`);
            i.push("    for (size_t i=0; i<count; i++) {");
            i.push(`      if (!schema.skip${n.type}(bb)) return false;`);
            i.push("    }");
            i.push("    return true;");
            i.push("  }");
          } else if (h(n, t)) {
            let r = g(t, n);
            i.push(`  virtual bool visit${e.name}_${n.name}(${r} ${n.name}) { return true; }`);
          } else {
            i.push(`  // If this is overridden, the new implementation must skip over encoded one ${n.type} in bb`);
            i.push(`  virtual bool visit${e.name}_${n.name}() {`);
            i.push(`    return schema.skip${n.type}(bb);`);
            i.push("  }");
          }
        }
        i.push("};");
        i.push("");
        i.push(`bool parse${e.name}(kiwi::ByteBuffer& bb, ${e.name}Visitor& visitor);`);
        i.push("");
        return i;
      }(_, i)))) : x = 2 === t ? e ? x.concat(function (e, t, i) {
        let n = e.fields;
        let s = [];
        for (let [u, p] of (i && (s.push(`inline ${e.name} ${e.name}::copy(kiwi::MemoryPool& pool) const {`), s.push(`  ${e.name} clone;`), s.push("  clone._fields = _fields.copy(pool);"), s.push("  memcpy(clone._flags, _flags, sizeof(_flags));"), s.push("  return clone;"), s.push("}"), s.push("")), n.entries())) {
          let i = l(p);
          let n = o(t, p, p.isArray);
          let m = u >> 5;
          let h = d(u);
          if (p.isDeprecated) continue;
          let g = `_flags[${m}] |= ${h}`;
          let f = `_flags[${m}] & ${h}`;
          let _ = c(t, p);
          _ ? (s.push(`inline ${n} *${e.name}::${p.name}() {`), s.push(`  if (!(${f})) return nullptr;`), s.push(`  Field* field = _fields.getField(${p.value});`), s.push(`  return field ? ${_ ? "" : "&"}field->${i} : nullptr;`), s.push("}"), s.push(""), s.push(`inline const ${n} *${e.name}::${p.name}() const {`), s.push(`  if (!(${f})) return nullptr;`), s.push(`  const Field* field = _fields.getField(${p.value});`), s.push(`  return field ? ${_ ? "" : "&"}field->${i} : nullptr;`), s.push("}"), s.push(""), s.push(`inline const ${n} *${e.name}::iterator_${p.name}(const typename kiwi::SparseFields<Field>::FieldIterator& it) const {`), s.push(`  REPORT_IF_FALSE_DEBUG_ONLY(it.fieldNumber == ${p.value});`), s.push(`  return it.element->field.${i};`)) : (s.push(`inline kiwi::Optional<${n}> ${e.name}::${p.name}() const {`), s.push(`  if (!(${f})) return std::nullopt;`), s.push(`  const Field* field = _fields.getField(${p.value});`), s.push(`  return field ? kiwi::Optional<${n}>(${a(`field->${i}`, p)}) : std::nullopt;`), s.push("}"), s.push(""), s.push(`inline ${n} ${e.name}::iterator_${p.name}(const typename kiwi::SparseFields<Field>::FieldIterator& it) const {`), s.push(`  REPORT_IF_FALSE_DEBUG_ONLY(it.fieldNumber == ${p.value});`), s.push(`  return ${a(`it.element->field.${i}`, p)};`));
          s.push("}");
          s.push("");
          c(t, p) ? s.push(`inline void ${e.name}::set_${p.name}(kiwi::MemoryPool &pool, ${n} *value) {`) : p.isArray ? (s.push(`inline ${n} &${e.name}::set_${p.name}(kiwi::MemoryPool &pool, uint32_t count) {`), s.push(`  ${n} value = pool.array<${o(t, p, !1)}>(count);`)) : s.push(`inline void ${e.name}::set_${p.name}(kiwi::MemoryPool &pool, const ${n} &value) {`);
          s.push(`  if (${f}) {`);
          s.push(`    Field* field = _fields.getField(${p.value});`);
          s.push(`    field->${i} = ${r("value", p)};`);
          p.isArray && s.push(`    return field->${i};`);
          s.push("  } else {");
          s.push(`    ${g};`);
          p.isArray ? s.push(`    return _fields.addField({${p.value}, Field{.${i} = ${r("value", p)}}}, pool)->field.${i};`) : s.push(`    _fields.addField({${p.value}, Field{.${i} = ${r("value", p)}}}, pool);`);
          s.push("  }");
          s.push("}");
          s.push("");
        }
        return s;
      }(_, i, copyableMessages.includes(_.name))) : x.concat(function (e, t, i) {
        let n = e.fields;
        let r = [];
        for (let [a, s] of (i && (r.push(`inline ${e.name} ${e.name}::copy() const {`), r.push(`  ${e.name} clone = *this;`), r.push("  return clone;"), r.push("}"), r.push("")), n.entries())) {
          let i = l(s);
          let n = o(t, s, s.isArray);
          let u = a >> 5;
          let p = d(a);
          if (s.isDeprecated) continue;
          let m = `_flags[${u}] |= ${p}`;
          let h = `_flags[${u}] & ${p}`;
          c(t, s) ? (r.push(`inline ${n} *${e.name}::${s.name}() {`), r.push(`  return ${i};`), r.push("}"), r.push(""), r.push(`inline const ${n} *${e.name}::${s.name}() const {`), r.push(`  return ${i};`), r.push("}"), r.push(""), r.push(`inline void ${e.name}::set_${s.name}(${n} *value) {`), r.push(`  ${i} = value;`)) : s.isArray ? (r.push(`inline ${n} *${e.name}::${s.name}() {`), r.push(`  return ${h} ? &${i} : nullptr;`), r.push("}"), r.push(""), r.push(`inline const ${n} *${e.name}::${s.name}() const {`), r.push(`  return ${h} ? &${i} : nullptr;`), r.push("}"), r.push(""), r.push(`inline ${n} &${e.name}::set_${s.name}(kiwi::MemoryPool &pool, uint32_t count) {`), r.push(`  ${m}; return ${i} = pool.array<${o(t, s, !1)}>(count);`)) : (r.push(`inline ${n} *${e.name}::${s.name}() {`), r.push(`  return ${h} ? &${i} : nullptr;`), r.push("}"), r.push(""), r.push(`inline const ${n} *${e.name}::${s.name}() const {`), r.push(`  return ${h} ? &${i} : nullptr;`), r.push("}"), r.push(""), r.push(`inline void ${e.name}::set_${s.name}(const ${n} &value) {`), r.push(`  ${m}; ${i} = value;`));
          r.push("}");
          r.push("");
        }
        return r;
      }(_, i, copyableMessages.includes(_.name))) : e ? (x = x.concat(function (e, t) {
        let i = e.fields;
        let n = [];
        for (let r of (n.push(`bool ${e.name}::encode(kiwi::WriteBuffer &_wb) const {`), i)) {
          let e;
          if (r.isDeprecated) continue;
          let i = o(t, r, r.isArray);
          let a = c(t, r);
          e = a ? `${i}*` : `kiwi::Optional<${i}>`;
          let s = l(r);
          n.push(`  const ${e} ${s} = ${r.name}();`);
          a ? (n.push(`  if (${s}) {`), n.push(`    const ${o(t, r, r.isArray)}* _data = ${s};`)) : (n.push(`  if (${s}.has_value()) {`), n.push(`    const ${o(t, r, r.isArray)}& _data = *${s};`));
          let d = "    ";
          s = "_data";
          let p = r.isArray ? "_it" : s;
          let m = u(t, r, p);
          n.push(d + `_wb.writeVarUint(${r.value});`);
          r.isArray ? (n.push(d + `_wb.writeVarUint(${s}.size());`), n.push(d + `for (const ${o(t, r, !1)} &_it : ${s}) ${m}`)) : n.push(d + m);
          n.push("  }");
        }
        n.push("  _wb.writeVarUint(0);");
        n.push("  return true;");
        n.push("}");
        n.push("");
        return n;
      }(_, i))).concat(function (e, t, i) {
        let n = e.fields;
        let a = [];
        for (let t of (a.push(`bool ${e.name}::decode(kiwi::ByteBuffer &_bb, kiwi::MemoryPool &_pool, const BinarySchema *_schema, std::vector<kiwi::SparseFields<Field>::Element> &tempFields) {`), n)) if (t.isArray) {
          a.push("  uint32_t count;");
          break;
        }
        for (let [e, u] of (a.push("  while (true) {"), a.push("    uint32_t type;"), a.push("    if (!_bb.readVarUint(type)) return false;"), a.push("    switch (type) {"), a.push("      case 0: {"), a.push("        _fields = kiwi::SparseFields<Field>(tempFields.data(), tempFields.size(), _pool);"), a.push("        tempFields.clear();"), a.push("        return true;"), a.push("      }"), n.entries())) {
          let n = l(u);
          let m = u.isArray ? "_it" : n;
          let h = c(t, u);
          let g = s(t, u, i);
          let f = p(t, u, m, g);
          let _ = o(t, u, !1);
          let A = e >> 5;
          let y = d(e);
          let b = `_flags[${A}] |= ${y}`;
          a.push(`      case ${u.value}: {`);
          let v = "        ";
          u.isArray ? (a.push(v + "if (!_bb.readVarUint(count)) return false;"), u.isDeprecated ? "byte" === u.type ? a.push(v + "if (!_bb.skipCount(count)) return false;") : a.push(v + `for (${_} &_it : _pool.array<${_}>(count)) if (!${f}) return false;`) : (a.push(v + `${b};`), a.push(v + `${o(t, u, !0)} ${n} = _pool.array<${_}>(count);`), "byte" === u.type ? a.push(v + `if (!_bb.readByteArray(${n}.data(), count)) return false;`) : (g && a.push(v + `std::vector<kiwi::SparseFields<${_}::Field>::Element> tempDecodingFields;`), a.push(v + `for (${_} &_it : ${n}) if (!${f}) return false;`)), a.push(v + `tempFields.push_back({${u.value}, Field{.${n} = ${r(n, u)}}});`))) : (h ? a.push(v + `${_}* ${n} = _pool.allocate<${_}>();`) : a.push(v + `${_} ${n} = {};`), a.push(v + `if (!${f}) return false;`), u.isDeprecated || (a.push(v + `${b};`), a.push(v + `tempFields.push_back({${u.value}, Field{.${n} = ${r(n, u)}}});`)));
          a.push("        break;");
          a.push("      }");
        }
        a.push("      default: {");
        a.push(`        if (!_schema || !_schema->skip${e.name}Field(_bb, type)) return false;`);
        a.push("        break;");
        a.push("      }");
        a.push("    }");
        a.push("  }");
        a.push("}");
        a.push("");
        a.push(`bool ${e.name}::decode(kiwi::ByteBuffer &_bb, kiwi::MemoryPool &_pool, const BinarySchema *_schema) {`);
        a.push("  std::vector<kiwi::SparseFields<Field>::Element> tempFields;");
        a.push("  return decode(_bb, _pool, _schema, tempFields);");
        a.push("}");
        return a;
      }(_, i, sparseMessages)) : (x = x.concat(function (e, t) {
        let i = e.fields;
        let n = [];
        for (let r of (n.push(`bool ${e.name}::encode(kiwi::WriteBuffer &_wb) const {`), i)) {
          if (r.isDeprecated) continue;
          let i = "  ";
          "STRUCT" === e.kind ? n.push(`  if (${r.name}() == nullptr) return false;`) : (n.push(`  if (${r.name}() != nullptr) {`), i = "    ");
          let a = l(r);
          let s = r.isArray ? "_it" : a;
          let d = u(t, r, s);
          "MESSAGE" === e.kind && n.push(i + `_wb.writeVarUint(${r.value});`);
          r.isArray ? (n.push(i + `_wb.writeVarUint(${a}.size());`), n.push(i + `for (const ${o(t, r, !1)} &_it : ${a}) ${d}`)) : n.push(i + d);
          "STRUCT" !== e.kind && n.push("  }");
        }
        "MESSAGE" === e.kind && n.push("  _wb.writeVarUint(0);");
        n.push("  return true;");
        n.push("}");
        n.push("");
        return n;
      }(_, i))).concat(function (e, t, i) {
        let n = e.fields;
        let r = [];
        for (let t of (r.push(`bool ${e.name}::decode(kiwi::ByteBuffer &_bb, kiwi::MemoryPool &_pool, const BinarySchema *_schema) {`), n)) if (t.isArray) {
          r.push("  uint32_t count;");
          break;
        }
        for (let a of ("MESSAGE" === e.kind && (r.push("  while (true) {"), r.push("    uint32_t type;"), r.push("    if (!_bb.readVarUint(type)) return false;"), r.push("    switch (type) {"), r.push("      case 0:"), r.push("        return true;")), n)) {
          let n = l(a);
          let d = a.isArray ? "_it" : n;
          let u = c(t, a);
          let m = s(t, a, i);
          let h = o(t, a, !1);
          let g = p(t, a, d, m);
          let f = "  ";
          if ("MESSAGE" === e.kind && (r.push(`      case ${a.value}: {`), f = "        "), a.isArray) {
            if (r.push(f + "if (!_bb.readVarUint(count)) return false;"), a.isDeprecated) {
              if ("byte" === a.type) r.push(f + "if (!_bb.skipCount(count)) return false;");else {
                let e = p(t, a, d, !1);
                r.push(f + `for (${h} &_it : _pool.array<${h}>(count)) if (!${e}) return false;`);
              }
            } else "byte" === a.type ? r.push(f + `if (!_bb.readByteArray(set_${a.name}(_pool, count).data(), count)) return false;`) : (m && r.push(f + `std::vector<kiwi::SparseFields<${h}::Field>::Element> tempDecodingFields;`), r.push(f + `for (${h} &_it : set_${a.name}(_pool, count)) if (!${g}) return false;`));
          } else a.isDeprecated ? (u ? r.push(f + `${h} *${n} = _pool.allocate<${h}>();`) : r.push(f + `${h} ${n} = {};`), r.push(f + `if (!${g}) return false;`)) : (u && r.push(f + `${n} = _pool.allocate<${h}>();`), r.push(f + `if (!${g}) return false;`), u || r.push(f + `set_${a.name}(${n});`));
          "MESSAGE" === e.kind && (r.push("        break;"), r.push("      }"));
        }
        "MESSAGE" === e.kind ? (r.push("      default: {"), r.push(`        if (!_schema || !_schema->skip${e.name}Field(_bb, type)) return false;`), r.push("        break;"), r.push("      }"), r.push("    }"), r.push("  }")) : r.push("  return true;");
        r.push("}");
        r.push("");
        return r;
      }(_, i, sparseMessages));
    }
    3 === t ? (x.push("#endif  // IMPLEMENT_SCHEMA_H"), x.push("")) : f && x.push("");
  }
  null !== e.$$package && (x.push(`}  // namespace ${e.$$package}`), x.push(""));
  return x.join("\n");
}
export function $$y1(e) {
  let t = ["#pragma once", ""];
  e.$$package && (t.push(`namespace ${e.$$package} {`), t.push(""));
  b(e, t);
  e.$$package && (t.push(""), t.push(`}  // namespace ${e.$$package}`), t.push(""));
  return t.join("\n");
}
function b(e, t) {
  for (let i of e.definitions) if ("ENUM" === i.kind) {
    for (let e of (t.push(`enum class ${i.name} : uint32_t {`), i.fields)) t.push(`  ${e.name} = ${e.value},`);
    t.push("};");
    t.push("");
  }
}
export const compileSchemaCPP = $$A0;
export const compileSchemaEnumsCPP = $$y1;