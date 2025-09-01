import _require2 from "../905/253473";
import _require from "../vendor/496227";
import { z } from "../vendor/744105";
import { GENERATOR, generate } from "../vendor/849173";
var n;
var r = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
  void 0 === n && (n = i);
  var r = Object.getOwnPropertyDescriptor(t, i);
  (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
    enumerable: !0,
    get: function () {
      return t[i];
    }
  });
  Object.defineProperty(e, n, r);
} : function (e, t, i, n) {
  void 0 === n && (n = i);
  e[n] = t[i];
});
var a = this && this.__setModuleDefault || (Object.create ? function (e, t) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: t
  });
} : function (e, t) {
  e.$$default = t;
});
var s = this && this.__importStar || (n = function (e) {
  return (n = Object.getOwnPropertyNames || function (e) {
    var t = [];
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[t.length] = i);
    return t;
  })(e);
}, function (e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (null != e) for (i = n(e), s = 0, void 0; s < i.length; s++) {
    var i;
    var s;
    "default" !== i[s] && r(t, e, i[s]);
  }
  a(t, e);
  return t;
});
exports.astToString = p;
exports.parseLooseWrapped = h;
exports.parseLoose = function (e) {
  return l.Parser.extend(d.AcornJsxPlugin({
    loose: !0
  })).parse(e, {
    ecmaVersion: 11,
    allowImportExportEverywhere: !1
  });
};
exports.parseStrict = function (e) {
  return l.Parser.extend(d.AcornJsxPlugin({
    loose: !1
  })).parse(e, {
    ecmaVersion: 11,
    allowImportExportEverywhere: !1
  });
};
exports.parseLooseEdit = function (e) {
  return l.Parser.extend(d.AcornJsxPlugin({
    loose: !0,
    editMode: !0
  })).parse(e, {
    ecmaVersion: 11,
    allowImportExportEverywhere: !1
  });
};
exports.jsxWithDataId = g;
exports.extractDataIdFromJSX = f;
exports.extractJSXWithoutDataId = function (e, t) {
  let i = m.parse(t);
  let n = p(h(e, {
    addDataIds: !1
  }));
  let r = f(e, t);
  return [n.slice(6, i), n.slice(i + r.length)];
};
let l = s(_require);
let d = s(_require2);
let u = Object.assign({}, GENERATOR, {
  JSXElement: function (e, t) {
    let i = e.openingElement;
    for (let n of (i && this[i.type](i, t), e.children ?? [])) this[n.type](n, t);
    let n = e.closingElement;
    n && this[n.type](n, t);
  },
  JSXAttribute: function (e, t) {
    e.name && (t.write(" "), this[e.name.type](e.name, t), t.write("="), e.value ? "JSXExpressionContainer" === e.value.type ? ("JSXEmptyExpression" !== e.value.expression.type && e.value.expression || t.write('""'), t.write("{"), this[e.value.expression.type](e.value.expression, t), t.write("}")) : (t.write('"'), t.write(e.value.value ?? ""), t.write('"')) : t.write('""'));
  },
  JSXOpeningElement: function (e, t) {
    for (let i of (t.write("<"), this[e.name.type](e.name, t), e.attributes ?? [])) this[i.type](i, t);
    e.selfClosing ? t.write("/>") : t.write(">");
  },
  JSXFragment: function (e, t) {
    for (let i of (t.write("<>"), e.children ?? [])) this[i.type](i, t);
    t.write("</>");
  },
  JSXClosingFragment: function (e, t) {
    t.write("</>");
  },
  JSXClosingElement: function (e, t) {
    t.write("</");
    this[e.name.type](e.name, t);
    t.write(">");
  },
  JSXText: function (e, t) {
    t.write(e.raw);
  },
  JSXIdentifier: function (e, t) {
    t.write(e.name);
  },
  JSXExpressionContainer: function (e, t) {
    t.write("{");
    this[e.expression.type](e.expression, t);
    t.write("}");
  },
  JSXEmptyExpression: function (e, t) {},
  JSXArrayExpression: function (e, t) {
    t.write("[");
    let i = !1;
    for (let n = 0; n < e.elements.length; n++) {
      i = n === e.elements.length - 1;
      let r = e.elements[n];
      this[r.type](r, t);
      i || t.write(", ");
    }
    t.write("]");
  },
  JSXObject: function (e, t) {
    t.write("{");
    let i = !1;
    for (let n = 0; n < e.properties.length; n++) {
      i = n === e.properties.length - 1;
      let r = e.properties[n];
      this[r.type](r, t);
      i || t.write(", ");
    }
    t.write("}");
  },
  JSXProperty: function (e, t) {
    this[e.key.type](e.key, t);
    t.write(": ");
    this[e.value.type](e.value, t);
  }
});
function p(e) {
  if (!e) return JSON.stringify(e);
  let t = generate(e, {
    generator: u
  });
  t.endsWith(";\n") && (t = t.slice(0, -2));
  return t;
}
let m = z.union([z.number(), z.string().transform((e, t) => {
  let i = parseInt(e);
  return isNaN(i) ? (t.addIssue({
    code: z.ZodIssueCode.custom,
    message: "Not a number"
  }), z.NEVER) : i;
})]);
function h(e, t) {
  let i = l.Parser.extend(d.AcornJsxPlugin({
    loose: !0,
    addDataIds: !0,
    ...(t ?? {})
  }));
  let n = `<root>${e}`;
  return i.parse(n, {
    ecmaVersion: 11,
    locations: !0
  });
}
function g(e) {
  return p(h(e));
}
function f(e, t) {
  let i = m.parse(t);
  let n = h(e, {
    addDataIds: !1
  }).body[0].expression.children || [];
  for (; 0 !== n.length;) {
    let e = n.pop();
    if (e) {
      if (e.start === i) return p(e);
      "children" in e && "start" in e && "end" in e && e.start < i && e.end > i && n.push(...e.children);
    }
  }
  console.error(`Failed to find dataId=${t} in

 ${g(e)}`);
  return "";
}