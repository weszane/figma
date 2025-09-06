import { ServiceCategories as _$$e } from "../905/165054";
import { logMessage } from "../905/954389";
import { parseStrict, parseLoose } from "../905/253473";
import { id, Bj } from "../905/648693";
function o(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let l = class {
  getLocation(e) {
    for (let t = 0; t < this.lineBreaks.length; t++) {
      let i = this.lineBreaks[t];
      if (e <= i) {
        let n = t > 0 ? this.lineBreaks[t - 1] : -1;
        return {
          line: t + 1,
          column: Math.min(e - n, i - n)
        };
      }
    }
    throw Error("Provided offset is longer than input code");
  }
  parse() {
    this.context = {
      stringifyJSXExpressionContainers: !1
    };
    return this.parseInternal();
  }
  parseAndStringifyExpressions() {
    this.context = {
      stringifyJSXExpressionContainers: !0
    };
    return this.parseInternal();
  }
  parseInternal() {
    return this.code ? this.parseFunction(this.code).body.map(e => this.parseExpression(e)).filter(id) : null;
  }
  parseExpression(e, t) {
    switch (e.type) {
      case "JSXAttribute":
        if (null === e.value) return !0;
        return this.parseExpression(e.value, t);
      case "JSXElement":
      case "JSXFragment":
        return this.parseElement(e, t);
      case "JSXExpressionContainer":
        if (this.context.stringifyJSXExpressionContainers) {
          let t = e.expression;
          if (["MemberExpression", "Identifier"].includes(t.type)) {
            let e = {
              type: "JSXExpressionContainer",
              expression: this.code.substring(t.start, t.end)
            };
            this.includeLocations && (e.location = {
              start: this.getLocation(t.start),
              end: this.getLocation(t.end - 1)
            });
            return e;
          }
        }
        return this.parseExpression(e.expression, t);
      case "JSXText":
        return e.value.replace(/\s+/g, " ").trim();
      case "JSXArrayExpression":
        return e.elements.map(e => this.parseExpression(e, t));
      case "JSXObject":
        let i = {};
        for (let t of e.properties) if (t.key && t.value) {
          if (this.context.stringifyJSXExpressionContainers && ["MemberExpression", "Identifier"].includes(t.value.type)) {
            let e = {
              type: "JSXExpressionContainer",
              expression: this.code.substring(t.value.start, t.value.end)
            };
            this.includeLocations && (e.location = {
              start: this.getLocation(t.value.start),
              end: this.getLocation(t.value.end - 1)
            });
            i[t.key.name || t.key.value] = e;
          } else i[t.key.name || t.key.value] = this.parseExpression(t.value);
        }
        return i;
      case "ArrayExpression":
        return e.elements.map(e => this.parseExpression(e, t));
      case "BinaryExpression":
        let a = this.parseExpression(e.left);
        let s = this.parseExpression(e.right);
        switch (e.operator) {
          case "-":
            return a - s;
          case "!=":
            return a != s;
          case "!==":
            return a !== s;
          case "*":
            return a * s;
          case "**":
            return a ** s;
          case "/":
            return a / s;
          case "%":
            return a % s;
          case "+":
            return a + s;
          case "<":
            return a < s;
          case "<=":
            return a <= s;
          case "==":
            return a == s;
          case "===":
            return a === s;
          case ">":
            return a > s;
          case ">=":
            return a >= s;
        }
        return;
      case "CallExpression":
        let o = this.parseExpression(e.callee);
        if (void 0 === o) {
          logMessage(_$$e.AI_GENERATION, Error("The CallExpression could not be resolved, resulting in an undefined return value."), {
            extra: {
              expression: e
            }
          });
          return;
        }
        return o(...e.$$arguments.map(t => this.parseExpression(t, e.callee)));
      case "ConditionalExpression":
        return this.parseExpression(e.test) ? this.parseExpression(e.consequent) : this.parseExpression(e.alternate);
      case "ExpressionStatement":
        return this.parseExpression(e.expression);
      case "Identifier":
        if (t && e.name in t) return t[e.name];
        return {}[e.name];
      case "Literal":
        return e.value;
      case "LogicalExpression":
        let l = this.parseExpression(e.left);
        if ("||" === e.operator && l) return l;
        if ("&&" === e.operator && l || "||" === e.operator && !l) return this.parseExpression(e.right);
        return !1;
      case "MemberExpression":
        return this.parseMemberExpression(e, t);
      case "ObjectExpression":
        let d = {};
        e.properties.forEach(e => {
          d[e.key.name || e.key.value] = this.parseExpression(e.value);
        });
        return d;
      case "TemplateElement":
        return e.value.cooked;
      case "TemplateLiteral":
        return [...e.expressions, ...e.quasis].sort((e, t) => e.start < t.start ? -1 : 1).map(e => this.parseExpression(e)).join("");
      case "UnaryExpression":
        switch (e.operator) {
          case "+":
            return e.argument.value;
          case "-":
            return -e.argument.value;
          case "!":
            return !e.argument.value;
        }
        return;
      case "ArrowFunctionExpression":
        (e.async || e.generator) && logMessage(_$$e.AI_GENERATION, Error("Async and generator arrow functions are not supported."));
        return (...t) => {
          let i = {};
          e.params.forEach((e, n) => {
            i[e.name] = t[n];
          });
          return this.parseExpression(e.body, i);
        };
    }
  }
  parseMemberExpression(e, t) {
    let {
      object
    } = e;
    let a = [e.property?.name ?? JSON.parse(e.property?.raw ?? '""')];
    if ("Literal" !== e.object.type) for (; object && ["MemberExpression", "Literal"].includes(object?.type);) {
      let {
        property
      } = object;
      object.computed ? a.unshift(this.parseExpression(property, t)) : a.unshift(property?.name ?? JSON.parse(property?.raw ?? '""'));
      i = object.object;
    }
    let s = this.parseExpression(object, t);
    try {
      let e = s;
      let t = a.reduce((t, i) => (e = t, t[i]), s);
      if ("function" == typeof t) return t.bind(e);
      return t;
    } catch (o) {
      let t = object?.name || "unknown";
      logMessage(_$$e.AI_GENERATION, Error("Unable to parse member expression."), {
        extra: {
          target: s,
          name: t,
          path: a,
          expression: e
        }
      });
    }
  }
  parseName(e) {
    return "JSXIdentifier" === e.type ? e.name : `${this.parseName(e.object)}.${this.parseName(e.property)}`;
  }
  parseElement(e, t) {
    let i;
    let {
      children = []
    } = e;
    let r = "JSXElement" === e.type ? e.openingElement : e.openingFragment;
    let a = ("JSXElement" === e.type ? this.parseName(r.name) : "").trim();
    if (i = (i = children.map(e => this.parseExpression(e, t))).filter(e => !!e), "string" == typeof e) return e.trim();
    let s = {};
    r.attributes && (s = r.attributes.reduce((e, i) => {
      if (!i.name) return e;
      let n = i.name.name;
      let r = this.parseAttribute(i, t);
      e[n] = r;
      return e;
    }, {}));
    e.isPartial && (s.isPartial = NaN);
    let o = this.includeLocations;
    let l = r.attributes?.filter(e => "JSXSpreadAttribute" === e.type).map(e => {
      let t = {
        type: "JSXSpreadAttribute",
        argument: this.code.substring(e.argument.start, e.argument.end)
      };
      o && (t.location = {
        start: this.getLocation(e.argument.start),
        end: this.getLocation(e.argument.end - 1)
      });
      return t;
    });
    let d = {
      type: a,
      props: s,
      children: i,
      ...(l?.length > 0 ? {
        spreadAttributes: l
      } : {})
    };
    this.includeLocations && (d.parsedLocations = {
      full: {
        start: this.getLocation(e.start),
        end: this.getLocation(e.end - 1)
      },
      opening: {
        start: this.getLocation(r.start),
        end: this.getLocation(r.end - 1)
      },
      attributes: Object.fromEntries(r.attributes?.filter(e => e.name)?.map(e => [e.name.name, {
        start: this.getLocation(e.start),
        end: this.getLocation(e.end - 1)
      }]) || []),
      spreads: r.attributes?.filter(e => "JSXSpreadAttribute" === e.type).map(e => ({
        start: this.getLocation(e.start),
        end: this.getLocation(e.end - 1)
      })),
      children: children.length > 0 ? {
        start: this.getLocation(children[0].start),
        end: this.getLocation(children[children.length - 1].end - 1)
      } : void 0
    });
    return d;
  }
  parseAttribute(e, t) {
    let i = e.value;
    return null === i || this.parseExpression(i, t);
  }
  constructor(e, t, i) {
    o(this, "code", void 0);
    o(this, "lineBreaks", void 0);
    o(this, "includeLocations", void 0);
    o(this, "parseFunction", void 0);
    o(this, "context", void 0);
    this.code = e;
    this.lineBreaks = [];
    for (let t = 0; t < e.length; t++) "\n" === e[t] && this.lineBreaks.push(t);
    this.lineBreaks.push(e.length);
    this.includeLocations = i;
    this.parseFunction = t;
    this.context = {};
  }
};
export function $$d1(e, t) {
  return (t?.strict ? new l(e, parseStrict, !t.excludeLocations) : new l(e, parseLoose, !t?.excludeLocations)).parse();
}
export function $$c2(e, t) {
  return (t?.strict ? new l(e, parseStrict, !t.excludeLocations) : new l(e, parseLoose, !t?.excludeLocations)).parseAndStringifyExpressions();
}
let u = {
  indent: "  ",
  numberPrecision: "auto",
  numberPrecisionLessThanOne: 4,
  numberPrecisionLessThanHundred: 2,
  numberPrecisionDefault: 1
};
export const V = function e(t, i = u) {
  if (null === t) return "";
  let n = {
    ...u,
    ...i
  };
  return function t(i) {
    let {
      component,
      indent,
      indentAmount,
      newLine,
      options
    } = i;
    if (options.customFormatter && id(component)) {
      let e = options.customFormatter(component);
      if (null !== e) return e;
    }
    if ("string" == typeof component) return /[\n\r\t{}<>&'"]|^\s|\s$|\s{2,}/.test(component) ? [indent, "{`", component.replace(/`/g, "\\`"), "`}", newLine].join("") : [indent, component, newLine].join("");
    if (Bj(component)) return [indent, "{", component.expression, "}", newLine].join("");
    if (null === component) return "";
    let d = Object.entries(component.props).filter(([e, t]) => void 0 !== t).map(([t, i]) => function ([t, i], n) {
      return "string" != typeof i ? `${t}={${function t(i, n) {
        if (Array.isArray(i)) return `[${i.map(e => t(e, n)).join(",")}]`;
        if ("object" == typeof i && null !== i) return function (i, n) {
          if (id(i)) return e(i, n);
          if (Bj(i)) return i.expression;
          let r = Object.entries(i).filter(([e, t]) => void 0 !== t).map(([e, i]) => `${/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e) ? e : JSON.stringify(e)}:${t(i, n)}`);
          return `{${r.join(",")}}`;
        }(i, n);
        if ("number" == typeof i) {
          let e = n.numberPrecision;
          return ("auto" === e && (e = function (e, t) {
            let i = Math.abs(e);
            return i < 1 ? t.numberPrecisionLessThanOne ?? t.numberPrecisionDefault ?? 4 : i < 100 ? t.numberPrecisionLessThanHundred ?? t.numberPrecisionDefault ?? 2 : t.numberPrecisionDefault ?? 1;
          }(i, n)), null !== e) ? (+i.toFixed(e)).toString() : i.toString();
        }
        return void 0 !== i ? JSON.stringify(i) : "";
      }(i, n)}}` : i.includes('"') ? `${t}={\`${i.replace(/`/g, "\\`")}\`}` : `${t}="${i}"`;
    }([t, i], options)).join(" ");
    let c = component.children?.filter(e => null !== e).map(e => t({
      component: e,
      indent: indent + indentAmount,
      indentAmount,
      newLine,
      options
    })) ?? [];
    let u = component.type;
    let p = "spreadAttributes" in component && component.spreadAttributes && component.spreadAttributes.length > 0 ? " " + component.spreadAttributes.map(e => `{...${e.argument}}`).join(" ") : "";
    return c.length > 0 ? `${indent}<${u}${d.length > 0 ? " " + d : ""}${p}>${newLine}` + c.join("") + `${indent}</${u}>${newLine}` : `${indent}<${u}${d ? " " + d : ""}${p}/>${newLine}`;
  }({
    component: t,
    indent: "",
    indentAmount: n.indent ? n.indent : "",
    newLine: n.indent ? "\n" : "",
    options: n
  }).trimEnd();
};
export const parseJSX = $$d1;
export const S = $$c2;