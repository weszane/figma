import _require2 from "../905/330480";
import _require from "../905/691976";
import { parseStrict } from "../905/290380";
var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
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
var r = this && this.__exportStar || function (e, t) {
  for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
};
var a = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.parseStrict = exports.parseLoose = void 0;
exports.getJsxTokens = u;
exports.AcornJsxPlugin = function (e) {
  e = e || {};
  return function (t) {
    return function (e, t) {
      let i = t.acorn;
      let n = u(i);
      let r = i.tokTypes;
      let a = n.tokTypes;
      let s = i.tokContexts;
      let c = n.tokContexts.tc_oTag;
      let m = n.tokContexts.tc_cTag;
      let h = n.tokContexts.tc_expr;
      let g = i.isNewLine;
      let f = i.isIdentifierStart;
      let _ = i.isIdentifierChar;
      return class extends t {
        static get acornJsx() {
          return n;
        }
        jsx_readToken() {
          let t = "";
          let i = this.pos;
          for (;;) {
            if (this.pos >= this.input.length) {
              if (e.loose) {
                t += this.input.slice(i, this.pos);
                return this.finishToken(a.jsxText, t);
              }
              this.raise(this.start, "Unterminated JSX contents");
            }
            let n = this.input.charCodeAt(this.pos);
            switch (n) {
              case 60:
              case 123:
                if (this.pos === this.start) {
                  if (60 === n && this.exprAllowed) {
                    ++this.pos;
                    return this.finishToken(a.jsxTagStart);
                  }
                  return this.getTokenFromCode(n);
                }
                t += this.input.slice(i, this.pos);
                return this.finishToken(a.jsxText, t);
              case 38:
                t += this.input.slice(i, this.pos);
                t += this.jsx_readEntity();
                i = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (62 === n ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                g(n) ? (t += this.input.slice(i, this.pos), t += this.jsx_readNewLine(!0), i = this.pos) : ++this.pos;
            }
          }
        }
        jsx_readNewLine(e) {
          let t;
          let i = this.input.charCodeAt(this.pos);
          ++this.pos;
          13 === i && 10 === this.input.charCodeAt(this.pos) ? (++this.pos, t = e ? "\n" : "\r\n") : t = String.fromCharCode(i);
          this.options.locations && (++this.curLine, this.lineStart = this.pos);
          return t;
        }
        jsx_readString(t) {
          let i = "";
          let n = ++this.pos;
          for (;;) {
            if (this.pos >= this.input.length) {
              if (e.loose) {
                i += this.input.slice(n, this.pos);
                return this.finishToken(r.string, i);
              }
              this.raise(this.start, "Unterminated string constant");
            }
            if (e.editMode && 60 == this.input.charCodeAt(this.pos)) {
              i += this.input.slice(n, this.pos);
              return this.finishToken(r.string, i);
            }
            let a = this.input.charCodeAt(this.pos);
            if (a === t) break;
            38 === a ? (i += this.input.slice(n, this.pos), i += this.jsx_readEntity(), n = this.pos) : g(a) ? (i += this.input.slice(n, this.pos), i += this.jsx_readNewLine(!1), n = this.pos) : ++this.pos;
          }
          i += this.input.slice(n, this.pos++);
          return this.finishToken(r.string, i);
        }
        jsx_readEntity() {
          let e = "";
          let t = 0;
          let i;
          let n = this.input[this.pos];
          "&" !== n && this.raise(this.pos, "Entity must start with an ampersand");
          let r = ++this.pos;
          for (; this.pos < this.input.length && t++ < 10;) {
            if (";" === (n = this.input[this.pos++])) {
              "#" === e[0] ? "x" === e[1] ? l.test(e = e.substr(2)) && (i = String.fromCharCode(parseInt(e, 16))) : d.test(e = e.substr(1)) && (i = String.fromCharCode(parseInt(e, 10))) : i = o.$$default[e];
              break;
            }
            e += n;
          }
          return i || (this.pos = r, "&");
        }
        jsx_readWord() {
          let t;
          let i = this.pos;
          do t = this.input.charCodeAt(++this.pos); while (_(t) || 45 === t);
          return e.loose && isNaN(t) ? this.next() : this.finishToken(a.jsxName, this.input.slice(i, this.pos));
        }
        jsx_parseIdentifier() {
          let t = this.startNode();
          this.type === a.jsxName ? t.name = this.value : this.type.keyword ? t.name = this.type.keyword : e.loose && this.type === r.name ? t.name = this.value : this.unexpected();
          this.next();
          return this.finishNode(t, "JSXIdentifier");
        }
        jsx_parseNamespacedName() {
          let t = this.start;
          let i = this.startLoc;
          let n = this.jsx_parseIdentifier();
          if (!e.allowNamespaces || !this.eat(r.colon)) return n;
          var a = this.startNodeAt(t, i);
          a.namespace = n;
          a.name = this.jsx_parseIdentifier();
          return this.finishNode(a, "JSXNamespacedName");
        }
        jsx_parseElementName() {
          if (this.type === a.jsxTagEnd || e.loose && this.type === r.eof) return "";
          let t = this.start;
          let i = this.startLoc;
          let n = this.jsx_parseNamespacedName();
          for (this.type !== r.dot || "JSXNamespacedName" !== n.type || e.allowNamespacedObjects || this.unexpected(); this.eat(r.dot);) {
            let e = this.startNodeAt(t, i);
            e.object = n;
            e.property = this.jsx_parseIdentifier();
            n = this.finishNode(e, "JSXMemberExpression");
          }
          return n;
        }
        jsx_parseAttributeValue() {
          switch (this.type) {
            case r.braceL:
              try {
                let e = this.jsx_parseExpressionContainer();
                "JSXEmptyExpression" === e.expression.type && this.raise(e.start, "JSX attributes must only be assigned a non-empty expression");
                return e;
              } catch (t) {
                if (!e.loose) throw t;
                return null;
              }
            case a.jsxTagStart:
            case r.string:
              return this.parseExprAtom();
            default:
              if ("name" === this.type.label) return this.parseExprAtom();
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }
        jsx_parseEmptyExpression() {
          let e = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(e, "JSXEmptyExpression", this.start, this.startLoc);
        }
        jsx_parseObjectProperty() {
          let t = this.startNode();
          if (this.type.keyword && (this.type = r.name), t.key = this.type === r.num || this.type === r.string || "name" === this.type.label ? this.parseExprAtom() : null, this.eat(r.colon)) {
            if (this.type === r.eof && e.loose) return;
            t.value = this.parseMaybeAssign(!1, void 0);
          } else t.value = t.key;
          return this.finishNode(t, "JSXProperty");
        }
        jsx_parseObjectProperties() {
          let e = [];
          let t = !0;
          for (; !this.eat(r.braceR) && !this.eat(r.eof);) {
            if (t) t = !1;else if (this.expect(r.comma), this.afterTrailingComma(r.braceR)) break;
            let i = this.jsx_parseObjectProperty();
            i && e.push(i);
          }
          return e;
        }
        jsx_parseObject() {
          let e = this.startNode();
          this.next();
          e.properties = this.jsx_parseObjectProperties();
          return this.finishNode(e, "JSXObject");
        }
        jsx_parseExprList() {
          this.startNode().elements = [];
          var t = [];
          var i = !0;
          try {
            for (; !this.eat(r.bracketR) && !this.eat(r.eof);) {
              if (i) i = !1;else if (this.type !== a.jsxTagStart && this.expect(r.comma), this.afterTrailingComma(r.bracketR)) break;
              var n = void 0;
              n = this.type === r.comma ? null : this.type === r.ellipsis ? this.parseSpread() : this.type === r.braceL ? this.jsx_parseObject() : this.type === a.jsxTagStart ? this.jsx_parseElement() : this.parseExprAtom();
              t.push(n);
            }
          } catch (t) {
            if (!e.loose) throw t;
          }
          return t;
        }
        jsx_parseMaybeListOrObject() {
          let e = this.startNode();
          return this.eat(r.bracketL) ? (e.elements = this.jsx_parseExprList(), this.finishNode(e, "JSXArrayExpression")) : this.eat(r.braceL) ? (e.properties = this.jsx_parseObjectProperties(), this.finishNode(e, "JSXObject")) : this.parseExpression();
        }
        jsx_parseExpressionContainer() {
          let t = this.startNode();
          this.next();
          t.expression = this.type === r.braceR ? this.jsx_parseEmptyExpression() : this.jsx_parseMaybeListOrObject();
          e.loose ? this.eat(r.braceR) || this.curContext() !== s.b_expr || this.context.pop() : this.expect(r.braceR);
          return this.finishNode(t, "JSXExpressionContainer");
        }
        jsx_parseAttribute() {
          let t = this.startNode();
          try {
            if (this.eat(r.braceL)) {
              this.expect(r.ellipsis);
              t.argument = this.parseMaybeAssign();
              this.expect(r.braceR);
              return this.finishNode(t, "JSXSpreadAttribute");
            }
            t.name = this.jsx_parseNamespacedName();
            t.value = this.eat(r.eq) ? this.jsx_parseAttributeValue() : null;
          } catch (i) {
            if (!e.loose) throw i;
            t.name = "";
            t.value = null;
          }
          return this.finishNode(t, "JSXAttribute");
        }
        jsx_parseOpeningElementAt(t, i) {
          let n = this.startNodeAt(t, i);
          n.attributes = [];
          let s = this.jsx_parseElementName();
          if (s && (n.name = s), e.addDataIds) {
            let e = this.startNode();
            let i = this.startNode();
            let r = this.startNode();
            i.name = "data-id";
            r.raw = t;
            r.value = t;
            e.name = this.finishNode(i, "JSXIdentifier");
            e.value = this.finishNode(r, "Literal");
            n.attributes.push(this.finishNode(e, "JSXAttribute"));
          }
          for (; this.type !== r.slash && this.type !== a.jsxTagEnd && (!e.loose || this.type !== r.eof);) {
            let t = this.pos;
            if (e.loose && this.eat(r.comma), e.loose && (this.type === a.jsxTagStart || this.type === r.bracketR)) break;
            if (n.attributes.push(this.jsx_parseAttribute()), e.loose && this.pos === t) {
              for (; this.type !== r.slash && this.type !== a.jsxTagEnd && this.type !== r.eof;) try {
                this.next();
              } catch (e) {
                return this.finishNode(n, s ? "JSXOpeningElement" : "JSXOpeningFragment");
              }
              break;
            }
          }
          n.selfClosing = this.eat(r.slash);
          this.type === a.jsxTagEnd ? this.eat(a.jsxTagEnd) : e.loose && this.type === r.eof ? n.isPartial = !0 : e.loose && (this.type === a.jsxTagStart || this.type === r.bracketR) ? n.selfClosing = !0 : this.unexpected();
          return this.finishNode(n, s ? "JSXOpeningElement" : "JSXOpeningFragment");
        }
        jsx_parseClosingElementAt(t, i) {
          let n = this.startNodeAt(t, i);
          let s = this.jsx_parseElementName();
          s && (n.name = s);
          this.type === a.jsxTagEnd ? this.eat(a.jsxTagEnd) : e.loose && this.type === r.eof ? n.isPartial = !0 : this.unexpected();
          return this.finishNode(n, s ? "JSXClosingElement" : "JSXClosingFragment");
        }
        jsx_parseElementAt(t, i) {
          let n = this.startNodeAt(t, i);
          let s = [];
          let o = this.jsx_parseOpeningElementAt(t, i);
          o.isPartial && (n.isPartial = !0);
          let l = null;
          if (!o.selfClosing) {
            e: for (;;) try {
              switch (this.type) {
                case a.jsxTagStart:
                  if (t = this.start, i = this.startLoc, this.next(), this.eat(r.slash)) {
                    (l = this.jsx_parseClosingElementAt(t, i)).isPartial && (n.isPartial = !0);
                    break e;
                  }
                  s.push(this.jsx_parseElementAt(t, i));
                  break;
                case a.jsxText:
                  s.push(this.parseExprAtom());
                  break;
                case r.braceL:
                  s.push(this.jsx_parseExpressionContainer());
                  break;
                default:
                  this.unexpected();
              }
            } catch (t) {
              if (!e.loose) throw t;
              if (n.isPartial = !0, this.type === r.eof) break;
              for (; this.type !== a.jsxTagStart;) {
                try {
                  this.next();
                } catch {
                  ++this.pos;
                }
                if (this.type === r.eof) break;
              }
            }
            e.loose || p(l.name) === p(o.name) || this.raise(l.start, "Expected corresponding JSX closing tag for <" + p(o.name) + ">");
          }
          let d = o.name ? "Element" : "Fragment";
          n["opening" + d] = o;
          n["closing" + d] = l;
          n.children = s;
          this.type === r.relational && "<" === this.value && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
          return this.finishNode(n, "JSX" + d);
        }
        jsx_parseText() {
          let e = this.parseLiteral(this.value);
          e.type = "JSXText";
          return e;
        }
        jsx_parseElement() {
          let e = this.start;
          let t = this.startLoc;
          this.next();
          return this.jsx_parseElementAt(e, t);
        }
        jsx_parseMaybeUnterminatedString() {
          let t = this.parseLiteral(this.value);
          if ('"' === t.raw[0] || "'" === t.raw[0]) {
            let i = t.raw[0];
            e.loose && (t.raw[t.raw.length - 1] !== i || 1 === t.raw.length) && (t.raw += i, t.isPartial = !0, t.type = "JSXText");
          }
          return t;
        }
        parseExprAtom(e) {
          return this.type === a.jsxText ? this.jsx_parseText() : this.type === a.jsxTagStart ? this.jsx_parseElement() : this.type === r.string ? this.jsx_parseMaybeUnterminatedString() : this.type === r.bracketL || this.type === r.braceL ? this.jsx_parseMaybeListOrObject() : this.type === r.plusMin ? super.parseMaybeUnary() : super.parseExprAtom(e);
        }
        parseIdent(e) {
          return super.parseIdent(!0);
        }
        canInsertSemicolon() {
          return !!e.loose && this.type === a.jsxTagStart || super.canInsertSemicolon();
        }
        readToken(t) {
          let i = this.curContext();
          if (i === h) return this.jsx_readToken();
          if (i === c || i === m) {
            if (f(t)) return this.jsx_readWord();
            if (62 == t) {
              ++this.pos;
              return this.finishToken(a.jsxTagEnd);
            }
            if ((34 === t || 39 === t) && i == c) return this.jsx_readString(t);
          }
          return 60 === t && (this.exprAllowed || e.loose) && 33 !== this.input.charCodeAt(this.pos + 1) ? (++this.pos, this.finishToken(a.jsxTagStart)) : 34 === t || 39 === t ? this.jsx_readString(t) : super.readToken(t);
        }
        updateContext(e) {
          if (this.type == r.braceL) {
            var t = this.curContext();
            t == c ? this.context.push(s.b_expr) : t == h ? this.context.push(s.b_tmpl) : super.updateContext(e);
            this.exprAllowed = !0;
          } else {
            if (this.type !== r.slash || e !== a.jsxTagStart) return super.updateContext(e);
            this.context.length -= 2;
            this.context.push(m);
            this.exprAllowed = !1;
          }
        }
      };
    }({
      loose: !!e.loose,
      editMode: !!e.editMode,
      addDataIds: !!e.addDataIds,
      allowNamespaces: !1 !== e.allowNamespaces,
      allowNamespacedObjects: !!e.allowNamespacedObjects
    }, t);
  };
};
r(_require2, exports);
Object.defineProperty(exports, "parseStrict", {
  enumerable: !0,
  get: function () {
    return parseStrict;
  }
});
let o = a(_require);
let l = /^[\da-fA-F]+$/;
let d = /^\d+$/;
let c = new WeakMap();
function u(e) {
  e = e.Parser.acorn || e;
  let t = c.get(e);
  if (!t) {
    let i = e.tokTypes;
    let n = e.TokContext;
    let r = e.TokenType;
    let a = new n("<tag", !1);
    let s = new n("</tag", !1);
    let o = new n("<tag>...</tag>", !0, !0);
    let l = {
      jsxName: new r("jsxName"),
      jsxText: new r("jsxText", {
        beforeExpr: !0
      }),
      jsxTagStart: new r("jsxTagStart", {
        startsExpr: !0
      }),
      jsxTagEnd: new r("jsxTagEnd")
    };
    l.jsxTagStart.updateContext = function () {
      this.context.push(o);
      this.context.push(a);
      this.exprAllowed = !1;
    };
    l.jsxTagEnd.updateContext = function (e) {
      let t = this.context.pop();
      t === a && e === i.slash || t === s ? (this.context.pop(), this.exprAllowed = this.curContext() === o) : this.exprAllowed = !0;
    };
    t = {
      tokContexts: {
        tc_oTag: a,
        tc_cTag: s,
        tc_expr: o
      },
      tokTypes: l
    };
    c.set(e, t);
  }
  return t;
}
function p(e) {
  return e ? "JSXIdentifier" === e.type ? e.name : "JSXNamespacedName" === e.type ? e.namespace.name + ":" + e.name.name : "JSXMemberExpression" === e.type ? p(e.object) + "." + p(e.property) : void 0 : e;
}