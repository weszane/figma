import { getI18nString } from "../905/303541";
var $$r0 = (e => (e[e.NONE = 0] = "NONE", e[e.SYNTAX_EMPTY = 1] = "SYNTAX_EMPTY", e[e.SYNTAX_UNRECOGNIZED = 2] = "SYNTAX_UNRECOGNIZED", e[e.SYNTAX_MISMATCHED_PARENS = 3] = "SYNTAX_MISMATCHED_PARENS", e[e.EVAL_UNEXPECTED_TYPE = 4] = "EVAL_UNEXPECTED_TYPE", e[e.EVAL_EXPECTED_MORE_ARGUMENTS = 5] = "EVAL_EXPECTED_MORE_ARGUMENTS", e[e.EVAL_IMAGINARY = 6] = "EVAL_IMAGINARY", e[e.EVAL_UNKNOWN = 7] = "EVAL_UNKNOWN", e[e.EVAL_NO_CURRENT_VALUE = 8] = "EVAL_NO_CURRENT_VALUE", e[e.EVAL_INFINITE = 9] = "EVAL_INFINITE", e[e.EVAL_NAN = 10] = "EVAL_NAN", e))($$r0 || {});
export function $$a1(e, t) {
  let i = [];
  let r = function (e, t) {
    let i = getI18nString("fullscreen.mixed");
    let r = (e = e.replace(i, "mixed").toLowerCase()).split(/(mixed|px|[+*()^\/%x\-]|(?:\d+[.,]?\d*|[.,]?\d+)(?:[e][+\-]?\d+)?|(?:\s+))/g);
    let a = r.length;
    if (0 === a) return {
      type: 1
    };
    let s = 0;
    for (let e = 0; e < a; e++) {
      let i = r[e];
      let n = i.length;
      if (e % 2) {
        let e = p.hasOwnProperty(i) ? p[i] : 0;
        let n = {
          id: e,
          text: i,
          type: 0 !== e ? 1 : 0,
          operator: m[e] ?? 0,
          position: s,
          value: NaN
        };
        0 === n.type && (/^(?:\d+[.,]?\d*|[.,]?\d+)(?:[eE][+\-]?\d+)?$/.test(i) ? (n.type = 2, n.value = +i.replace(",", ".")) : /(mixed)/.test(i) && (n.type = 3));
        0 !== n.type && t.push(n);
      } else if (n > 0) return {
        type: 2,
        position: s,
        length: n
      };
      s += n;
    }
    if (0 === t.length) return {
      type: 1
    };
    for (function () {
      let e = 0;
      let i = null;
    }(); e < t.length; e++) {
      let n = t[e];
      (3 === n.operator || 4 === n.operator) && (null === i || function (e) {
        let t = l[e];
        return 1 === e || 2 === t.degree || 1 === t.degree && 1 === t.associativity;
      }(i.operator)) && (n.operator = 3 === n.operator ? 7 : 8);
      i = n;
    }
    return null;
  }(e, i);
  if (null !== r) return {
    value: null,
    error: r
  };
  let a = [];
  let s = [];
  for (let e of i) switch (e.type) {
    case 2:
      a.push(e.value);
      break;
    case 3:
      if (!t && 0 !== t) return {
        value: null,
        error: {
          type: 8
        }
      };
      a.push(t);
      break;
    case 1:
      {
        let i;
        let n = l[e.operator];
        switch (e.operator) {
          case 7:
            break;
          case 1:
            s.push(e);
            break;
          case 2:
            if (!s.length) return {
              value: null,
              error: {
                type: 3,
                position: e.position
              }
            };
            for (; s.length;) {
              let i = s[s.length - 1];
              if (1 === i.operator) {
                s.pop();
                break;
              }
              {
                let e = d(i.operator, a, t);
                if (0 !== e) return {
                  value: null,
                  error: {
                    type: e
                  }
                };
                s.pop();
              }
              if (!s.length) return {
                value: null,
                error: {
                  type: 3,
                  position: e.position
                }
              };
            }
            break;
          default:
            for (; i = s[s.length - 1];) if (1 === n.associativity) {
              if (n.precedence <= l[i.operator].precedence) {
                let e = d(i.operator, a, t);
                if (0 !== e) return {
                  value: null,
                  error: {
                    type: e
                  }
                };
                s.pop();
              } else break;
            } else if (2 !== n.associativity) return {
              value: null,
              error: {
                type: 7
              }
            };else if (n.precedence < l[i.operator].precedence) {
              let e = d(i.operator, a, t);
              if (0 !== e) return {
                value: null,
                error: {
                  type: e
                }
              };
              s.pop();
            } else break;
            s.push(e);
        }
        break;
      }
    default:
      return {
        value: null,
        error: {
          type: 2
        }
      };
  }
  for (; s.length;) {
    let i = s.pop();
    if (1 === i.operator || 2 === i.operator) return {
      value: null,
      error: {
        type: 3,
        position: e.length
      }
    };
    let n = d(i.operator, a, t);
    if (0 !== n) return {
      value: null,
      error: {
        type: n
      }
    };
  }
  if (1 !== a.length) return {
    value: null,
    error: {
      type: 2
    }
  };
  let o = a[0];
  return Number.isNaN(o) ? {
    value: null,
    error: {
      type: 10
    }
  } : Number.isFinite(o) ? {
    value: o,
    error: null
  } : {
    value: null,
    error: {
      type: 9
    }
  };
}
var s = (e => (e[e.NONE = 0] = "NONE", e[e.PAREN_L = 1] = "PAREN_L", e[e.PAREN_R = 2] = "PAREN_R", e[e.ADD = 3] = "ADD", e[e.SUBTRACT = 4] = "SUBTRACT", e[e.MULTIPLY = 5] = "MULTIPLY", e[e.DIVIDE = 6] = "DIVIDE", e[e.UNARY_PLUS = 7] = "UNARY_PLUS", e[e.UNARY_MINUS = 8] = "UNARY_MINUS", e[e.EXPONENT = 9] = "EXPONENT", e[e.PERCENT = 10] = "PERCENT", e[e.X = 11] = "X", e[e.PIXELS = 12] = "PIXELS", e))(s || {});
var o = (e => (e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e))(o || {});
let l = [{
  associativity: 0,
  precedence: -1,
  degree: 0,
  name: ""
}, {
  associativity: 0,
  precedence: -1,
  degree: 0,
  name: "("
}, {
  associativity: 0,
  precedence: -1,
  degree: 0,
  name: ")"
}, {
  associativity: 1,
  precedence: 1,
  degree: 2,
  name: "add"
}, {
  associativity: 1,
  precedence: 1,
  degree: 2,
  name: "sub"
}, {
  associativity: 1,
  precedence: 2,
  degree: 2,
  name: "mul"
}, {
  associativity: 1,
  precedence: 2,
  degree: 2,
  name: "div"
}, {
  associativity: 1,
  precedence: 4,
  degree: 1,
  name: "pos"
}, {
  associativity: 1,
  precedence: 4,
  degree: 1,
  name: "neg"
}, {
  associativity: 2,
  precedence: 5,
  degree: 2,
  name: "exp"
}, {
  associativity: 2,
  precedence: 6,
  degree: 1,
  name: "%"
}, {
  associativity: 2,
  precedence: 6,
  degree: 1,
  name: "x"
}, {
  associativity: 2,
  precedence: 6,
  degree: 1,
  name: "px"
}];
function d(e, t, i) {
  if (t.length < l[e].degree) return 5;
  switch (e) {
    case 0:
    case 1:
    case 2:
      return 4;
    case 3:
    case 4:
    case 5:
    case 6:
    case 9:
      {
        let i = t.pop();
        let n = t.pop();
        switch (e) {
          case 3:
            t.push(n + i);
            break;
          case 4:
            t.push(n - i);
            break;
          case 5:
            t.push(n * i);
            break;
          case 6:
            t.push(n / i);
            break;
          case 9:
            {
              let e = Math.pow(n, i);
              if (isNaN(e)) return 6;
              t.push(e);
            }
        }
        break;
      }
    case 7:
    case 12:
      break;
    case 8:
      t.push(-t.pop());
      break;
    case 10:
      if (!i && 0 !== i) return 8;
      t.push(i * t.pop() / 100);
      break;
    case 11:
      if (!i && 0 !== i) return 8;
      t.push(i * t.pop());
  }
  return 0;
}
var c = (e => (e[e.NONE = 0] = "NONE", e[e.OPERATOR = 1] = "OPERATOR", e[e.NUMBER = 2] = "NUMBER", e[e.MIXED_VARIABLE = 3] = "MIXED_VARIABLE", e))(c || {});
var u = (e => (e[e.NONE = 0] = "NONE", e[e.OPEN_PAREN = 1] = "OPEN_PAREN", e[e.CLOSE_PAREN = 2] = "CLOSE_PAREN", e[e.PLUS = 3] = "PLUS", e[e.MINUS = 4] = "MINUS", e[e.ASTERISK = 5] = "ASTERISK", e[e.SLASH = 6] = "SLASH", e[e.CARET = 7] = "CARET", e[e.PERCENT = 8] = "PERCENT", e[e.X = 9] = "X", e[e.PIXELS = 10] = "PIXELS", e))(u || {});
let p = {
  "(": 1,
  ")": 2,
  "+": 3,
  "-": 4,
  "*": 5,
  "/": 6,
  "^": 7,
  "%": 8,
  x: 9,
  X: 9,
  px: 10
};
let m = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 9,
  8: 10,
  9: 11,
  10: 12
};
export const By = $$r0;
export const O4 = $$a1;