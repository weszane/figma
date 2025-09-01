let n = [{
  type: "TOKEN_NUMBER",
  match: /^([0-9]+\.?[0-9]*|\.[0-9]+)/
}, {
  type: "TOKEN_BOOL",
  match: /^(true|True|false|False)/
}, {
  type: "TOKEN_COLOR",
  match: /^#[0-9a-fA-F]{6}/
}, {
  type: "TOKEN_VARIABLE_WITH_MODE",
  match: /^VariableID:[0-9a-zA-Z/]+:[0-9]+\$\$\$[0-9]+:[0-9]+/
}, {
  type: "TOKEN_VARIABLE",
  match: /^VariableID:[0-9a-zA-Z/]+:[0-9]+/
}, {
  type: "TOKEN_NODE_FIELD_ALIAS",
  match: /^StablePathToNode:\["(?:[0-9]+:[0-9]+)"(?:,"(?:[0-9]+:[0-9]+)")*\]\$\$\$NodeField:[A-Z_]+\$\$\$IndexOrKey:[0-9]+:[0-9]+/
}, {
  type: "TOKEN_STRING",
  match: /^"(\\.|[^"])*"/
}, {
  type: "TOKEN_ADDITION",
  match: /^\+/
}, {
  type: "TOKEN_SUBTRACTION",
  match: /^-/
}, {
  type: "TOKEN_MULTIPLICATION",
  match: /^\*/
}, {
  type: "TOKEN_DIVISION",
  match: /^\//
}, {
  type: "TOKEN_EQUALS",
  match: /^==/
}, {
  type: "TOKEN_NOT_EQUAL",
  match: /^!=/
}, {
  type: "TOKEN_LESS_THAN_OR_EQUAL",
  match: /^<=/
}, {
  type: "TOKEN_LESS_THAN",
  match: /^</
}, {
  type: "TOKEN_GREATER_THAN_OR_EQUAL",
  match: /^>=/
}, {
  type: "TOKEN_GREATER_THAN",
  match: /^>/
}, {
  type: "TOKEN_AND",
  match: /^(AND|and|And)/
}, {
  type: "TOKEN_OR",
  match: /^(OR|or|Or)/
}, {
  type: "TOKEN_NOT",
  match: /^(NOT|not|Not)/
}, {
  type: "TOKEN_PAREN_OPEN",
  match: /^\(/
}, {
  type: "TOKEN_PAREN_CLOSE",
  match: /^\)/
}, {
  type: "TOKEN_STRINGIFY",
  match: /^debug_to_string/
}, {
  type: "TOKEN_IDENTIFIER",
  match: /^[a-zA-Z_][a-zA-Z0-9_]*/
}, {
  type: "TOKEN_COMMA",
  match: /^,/
}];
export function $$r0(e) {
  let t = [];
  for (let i = 0; i < e.length; i++) {
    let r = e.slice(i);
    let a = !1;
    let s = r.match(/^\s+/);
    if (s) {
      i += s[0].length - 1;
      continue;
    }
    for (let e of n) {
      let n = r.match(e.match);
      if (n) {
        t.push({
          type: e.type,
          stringValue: n[0]
        });
        a = !0;
        i += n[0].length - 1;
        break;
      }
    }
    if (!a) throw Error("syntax error");
  }
  return t;
}
export const q = $$r0;