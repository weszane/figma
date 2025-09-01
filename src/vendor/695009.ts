import { isName } from "../vendor/673785";
function s(e, r) {
  let n = {};
  if ("O" === e[r + 3] && "C" === e[r + 4] && "T" === e[r + 5] && "Y" === e[r + 6] && "P" === e[r + 7] && "E" === e[r + 8]) {
    r += 9;
    let i = 1;
    let s = !1;
    let v = !1;
    let y = "";
    for (; r < e.length; r++) if ("<" !== e[r] || v) {
      if (">" === e[r]) {
        if (v ? "-" === e[r - 1] && "-" === e[r - 2] && (v = !1, i--) : i--, 0 === i) break;
      } else "[" === e[r] ? s = !0 : y += e[r];
    } else {
      if (s && h(e, r)) {
        r += 7;
        [entityName, val, r] = o(e, r + 1);
        -1 === val.indexOf("&") && (n[m(entityName)] = {
          regx: RegExp(`&${entityName};`, "g"),
          val: val
        });
      } else if (s && d(e, r)) r += 8;else if (s && p(e, r)) r += 8;else if (s && g(e, r)) r += 9;else if (a) v = !0;else throw Error("Invalid DOCTYPE");
      i++;
      y = "";
    }
    if (0 !== i) throw Error("Unclosed DOCTYPE");
  } else throw Error("Invalid Tag instead of DOCTYPE");
  return {
    entities: n,
    i: r
  };
}
function o(e, r) {
  let n = "";
  for (; r < e.length && "'" !== e[r] && '"' !== e[r]; r++) n += e[r];
  if (-1 !== (n = n.trim()).indexOf(" ")) throw Error("External entites are not supported");
  let i = e[r++];
  let s = "";
  for (; r < e.length && e[r] !== i; r++) s += e[r];
  return [n, s, r];
}
function a(e, r) {
  return "!" === e[r + 1] && "-" === e[r + 2] && "-" === e[r + 3];
}
function h(e, r) {
  return "!" === e[r + 1] && "E" === e[r + 2] && "N" === e[r + 3] && "T" === e[r + 4] && "I" === e[r + 5] && "T" === e[r + 6] && "Y" === e[r + 7];
}
function d(e, r) {
  return "!" === e[r + 1] && "E" === e[r + 2] && "L" === e[r + 3] && "E" === e[r + 4] && "M" === e[r + 5] && "E" === e[r + 6] && "N" === e[r + 7] && "T" === e[r + 8];
}
function p(e, r) {
  return "!" === e[r + 1] && "A" === e[r + 2] && "T" === e[r + 3] && "T" === e[r + 4] && "L" === e[r + 5] && "I" === e[r + 6] && "S" === e[r + 7] && "T" === e[r + 8];
}
function g(e, r) {
  return "!" === e[r + 1] && "N" === e[r + 2] && "O" === e[r + 3] && "T" === e[r + 4] && "A" === e[r + 5] && "T" === e[r + 6] && "I" === e[r + 7] && "O" === e[r + 8] && "N" === e[r + 9];
}
function m(e) {
  if (isName(e)) return e;
  throw Error(`Invalid entity name ${e}`);
}
module.exports = s;