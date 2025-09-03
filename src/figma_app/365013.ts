import { N8 } from "../vendor/792931";
import { throwTypeError } from "../figma_app/465776";
function a(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
export class $$s0 {
  addChunk(e) {
    this.chunks.push(e);
    let t = this.parse();
    let r = t.state;
    switch (r) {
      case "successful-parse":
      case "repaired-parse":
        return t.value;
      case "failed-parse":
      case "undefined-input":
        return;
      default:
        throwTypeError(r);
    }
  }
  getAccumulatedText() {
    return this.chunks.join("");
  }
  reset() {
    this.chunks = [];
  }
  parse() {
    let e = function (e) {
      if (void 0 === e) return {
        value: void 0,
        state: "undefined-input"
      };
      let t = N8({
        text: e
      });
      if (t.success) return {
        value: t.value,
        state: "successful-parse"
      };
      let r = function (e) {
        let t = ["ROOT"];
        let r = -1;
        let n = null;
        function i(e, i, a) {
          switch (e) {
            case '"':
              r = i;
              t.pop();
              t.push(a);
              t.push("INSIDE_STRING");
              break;
            case "f":
            case "t":
            case "n":
              r = i;
              n = i;
              t.pop();
              t.push(a);
              t.push("INSIDE_LITERAL");
              break;
            case "-":
              t.pop();
              t.push(a);
              t.push("INSIDE_NUMBER");
              break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              r = i;
              t.pop();
              t.push(a);
              t.push("INSIDE_NUMBER");
              break;
            case "{":
              r = i;
              t.pop();
              t.push(a);
              t.push("INSIDE_OBJECT_START");
              break;
            case "[":
              r = i;
              t.pop();
              t.push(a);
              t.push("INSIDE_ARRAY_START");
          }
        }
        function a(e, n) {
          switch (e) {
            case ",":
              t.pop();
              t.push("INSIDE_OBJECT_AFTER_COMMA");
              break;
            case "}":
              r = n;
              t.pop();
          }
        }
        function s(e, n) {
          switch (e) {
            case ",":
              t.pop();
              t.push("INSIDE_ARRAY_AFTER_COMMA");
              break;
            case "]":
              r = n;
              t.pop();
          }
        }
        for (let o = 0; o < e.length; o++) {
          let l = e[o];
          switch (t[t.length - 1]) {
            case "ROOT":
              i(l, o, "FINISH");
              break;
            case "INSIDE_OBJECT_START":
              switch (l) {
                case '"':
                  t.pop();
                  t.push("INSIDE_OBJECT_KEY");
                  break;
                case "}":
                  r = o;
                  t.pop();
              }
              break;
            case "INSIDE_OBJECT_AFTER_COMMA":
              '"' === l && (t.pop(), t.push("INSIDE_OBJECT_KEY"));
              break;
            case "INSIDE_OBJECT_KEY":
              '"' === l && (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
              break;
            case "INSIDE_OBJECT_AFTER_KEY":
              ":" === l && (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
              break;
            case "INSIDE_OBJECT_BEFORE_VALUE":
              i(l, o, "INSIDE_OBJECT_AFTER_VALUE");
              break;
            case "INSIDE_OBJECT_AFTER_VALUE":
              a(l, o);
              break;
            case "INSIDE_STRING":
              switch (l) {
                case '"':
                  t.pop();
                  r = o;
                  break;
                case "\\":
                  t.push("INSIDE_STRING_ESCAPE");
                  break;
                default:
                  r = o;
              }
              break;
            case "INSIDE_ARRAY_START":
              "]" === l ? (r = o, t.pop()) : (r = o, i(l, o, "INSIDE_ARRAY_AFTER_VALUE"));
              break;
            case "INSIDE_ARRAY_AFTER_VALUE":
              switch (l) {
                case ",":
                  t.pop();
                  t.push("INSIDE_ARRAY_AFTER_COMMA");
                  break;
                case "]":
                  r = o;
                  t.pop();
                  break;
                default:
                  r = o;
              }
              break;
            case "INSIDE_ARRAY_AFTER_COMMA":
              i(l, o, "INSIDE_ARRAY_AFTER_VALUE");
              break;
            case "INSIDE_STRING_ESCAPE":
              t.pop();
              r = o;
              break;
            case "INSIDE_NUMBER":
              switch (l) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  r = o;
                  break;
                case "e":
                case "E":
                case "-":
                case ".":
                  break;
                case ",":
                  t.pop();
                  "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && s(l, o);
                  "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] && a(l, o);
                  break;
                case "}":
                  t.pop();
                  "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] && a(l, o);
                  break;
                case "]":
                  t.pop();
                  "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && s(l, o);
                  break;
                default:
                  t.pop();
              }
              break;
            case "INSIDE_LITERAL":
              {
                let i = e.substring(n, o + 1);
                "false".startsWith(i) || "true".startsWith(i) || "null".startsWith(i) ? r = o : (t.pop(), "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] ? a(l, o) : "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] && s(l, o));
              }
          }
        }
        let o = e.slice(0, r + 1);
        for (let r = t.length - 1; r >= 0; r--) switch (t[r]) {
          case "INSIDE_STRING":
            o += '"';
            break;
          case "INSIDE_OBJECT_KEY":
          case "INSIDE_OBJECT_AFTER_KEY":
          case "INSIDE_OBJECT_AFTER_COMMA":
          case "INSIDE_OBJECT_START":
          case "INSIDE_OBJECT_BEFORE_VALUE":
          case "INSIDE_OBJECT_AFTER_VALUE":
            o += "}";
            break;
          case "INSIDE_ARRAY_START":
          case "INSIDE_ARRAY_AFTER_COMMA":
          case "INSIDE_ARRAY_AFTER_VALUE":
            o += "]";
            break;
          case "INSIDE_LITERAL":
            {
              let t = e.substring(n, e.length);
              "true".startsWith(t) ? o += "true".slice(t.length) : "false".startsWith(t) ? o += "false".slice(t.length) : "null".startsWith(t) && (o += "null".slice(t.length));
            }
        }
        return o;
      }(e);
      return (t = N8({
        text: r
      })).success ? {
        value: t.value,
        state: "repaired-parse"
      } : {
        value: void 0,
        state: "failed-parse"
      };
    }(this.getAccumulatedText());
    if (this.schema) {
      let t = this.schema.safeParse(e.value);
      return t.success ? {
        value: t.data,
        state: "successful-parse"
      } : {
        value: void 0,
        state: "failed-parse",
        error: Error(`Schema validation failed: ${t.error.message}`)
      };
    }
    return e;
  }
  constructor(e) {
    a(this, "chunks", []);
    a(this, "schema", void 0);
    this.schema = e;
  }
}
export const V = $$s0;