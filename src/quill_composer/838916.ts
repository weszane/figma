import { jsx, jsxs } from "react/jsx-runtime";
import { Component, useRef, useEffect, useId, useState, useMemo, useLayoutEffect } from "react";
import { N as _$$N } from "../905/57692";
import l from "classnames";
import a from "../vendor/197638";
import { Ay, Ru } from "../vendor/610080";
import { A as _$$A } from "../vendor/579780";
import { Cy, Ay as _$$Ay } from "../vendor/626418";
import { A as _$$A2 } from "../vendor/343378";
import { A as _$$A3 } from "../vendor/783563";
import { A as _$$A4 } from "../vendor/269467";
import { A as _$$A5 } from "../vendor/683923";
import { A as _$$A6 } from "../vendor/427129";
import { Ay as _$$Ay2 } from "../vendor/937019";
import { A as _$$A7 } from "../vendor/572313";
import { A as _$$A8 } from "../vendor/787998";
import { A as _$$A9 } from "../vendor/706709";
import { c2 } from "../figma_app/243213";
import { Uz } from "../905/63728";
import { z as _$$z } from "../905/69245";
import { getI18nString } from "../905/303541";
import { Ib } from "../905/129884";
import { _ as _$$_ } from "../905/142361";
import { mv, OZ, mm } from "../905/491152";
import z from "../vendor/128080";
import { A as _$$A0 } from "../quill_composer/816110";
var n = l;
var d = a;
var T = z;
class B extends Component {
  constructor(t) {
    super(t);
    this.dirtyProps = ["modules", "formats", "bounds", "theme"];
    this.cleanProps = ["id", "className", "style", "placeholder", "tabIndex", "onChange", "onChangeSelection", "onFocus", "onBlur", "onKeyPress", "onKeyDown", "onKeyUp"];
    this.state = {
      generation: 0
    };
    this.editingArea = null;
    this.selection = null;
    this.onEditorChange = (t, e, i, o) => {
      "text-change" === t ? this.onEditorChangeText?.(this.editor.root.innerHTML, e, o, this.unprivilegedEditor) : "selection-change" === t && this.onEditorChangeSelection?.(e, o, this.unprivilegedEditor);
    };
    let e = this.isControlled() ? t.value : t.defaultValue;
    this.value = e ?? "";
  }
  validateProps(t) {
    if (this.lastDeltaChangeSet && t.value === this.lastDeltaChangeSet) throw Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
  }
  shouldComponentUpdate(t, e) {
    if (this.validateProps(t), !this.editor || this.state.generation !== e.generation) return !0;
    if (void 0 !== t.value) {
      let e = this.getEditorContents();
      let i = t.value ?? "";
      this.isEqualValue(i, e) || this.setEditorContents(this.editor, i);
    }
    t.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, t.readOnly);
    return [...this.cleanProps, ...this.dirtyProps].some(e => !T()(t[e], this.props[e]));
  }
  shouldComponentRegenerate(t) {
    return this.dirtyProps.some(e => !T()(t[e], this.props[e]));
  }
  componentDidMount() {
    this.instantiateEditor();
    this.setEditorContents(this.editor, this.getEditorContents());
  }
  componentWillUnmount() {
    this.destroyEditor();
  }
  componentDidUpdate(t, e) {
    if (this.editor && this.shouldComponentRegenerate(t)) {
      let t = this.editor.getContents();
      let e = this.editor.getSelection();
      this.regenerationSnapshot = {
        delta: t,
        selection: e
      };
      this.setState({
        generation: this.state.generation + 1
      });
      this.destroyEditor();
    }
    if (this.state.generation !== e.generation) {
      let {
        delta,
        selection
      } = this.regenerationSnapshot;
      delete this.regenerationSnapshot;
      this.instantiateEditor();
      let i = this.editor;
      i.setContents(delta);
      L(() => this.setEditorSelection(i, selection));
    }
  }
  instantiateEditor() {
    this.editor || (this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig()));
  }
  destroyEditor() {
    this.editor && (this.unhookEditor(this.editor), delete this.editor);
  }
  isControlled() {
    return void 0 !== this.props.value;
  }
  getEditorConfig() {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      tabIndex: this.props.tabIndex,
      theme: this.props.theme
    };
  }
  getEditor() {
    if (!this.editor) throw Error("Accessing non-instantiated editor");
    return this.editor;
  }
  createEditor(t, e) {
    let i = new Ay(t, e);
    null != e.tabIndex && this.setEditorTabIndex(i, e.tabIndex);
    this.hookEditor(i);
    return i;
  }
  hookEditor(t) {
    this.unprivilegedEditor = this.makeUnprivilegedEditor(t);
    t.on("editor-change", this.onEditorChange);
  }
  unhookEditor(t) {
    t.off("editor-change", this.onEditorChange);
  }
  getEditorContents() {
    return this.value;
  }
  getEditorSelection() {
    return this.selection;
  }
  isDelta(t) {
    return t && t.ops;
  }
  isEqualValue(t, e) {
    return this.isDelta(t) && this.isDelta(e) ? T()(t.ops, e.ops) : T()(t, e);
  }
  setEditorContents(t, e) {
    this.value = e;
    let i = this.getEditorSelection();
    "string" == typeof e ? t.setContents(t.clipboard.convert({
      html: e
    })) : t.setContents(e);
    L(() => this.setEditorSelection(t, i));
  }
  setEditorSelection(t, e) {
    if (this.selection = e, e) {
      let i = t.getLength();
      e.index = Math.max(0, Math.min(e.index, i - 1));
      e.length = Math.max(0, Math.min(e.length, i - 1 - e.index));
      t.setSelection(e);
    }
  }
  setEditorTabIndex(t, e) {
    t?.scroll?.domNode && (t.scroll.domNode.tabIndex = e);
  }
  setEditorReadOnly(t, e) {
    e ? t.disable() : t.enable();
  }
  makeUnprivilegedEditor(t) {
    return {
      getHTML: () => t.root.innerHTML,
      getLength: t.getLength.bind(t),
      getText: t.getText.bind(t),
      getContents: t.getContents.bind(t),
      getSelection: t.getSelection.bind(t),
      getBounds: t.getBounds.bind(t)
    };
  }
  getEditingArea() {
    if (!this.editingArea) throw Error("Instantiating on missing editing area");
    let t = this.editingArea;
    if (3 === t.nodeType) throw Error("Editing area cannot be a text node");
    return t;
  }
  renderEditingArea() {
    let {
      preserveWhitespace
    } = this.props;
    let {
      generation
    } = this.state;
    let i = {
      key: generation,
      ref: t => {
        this.editingArea = t;
      }
    };
    return preserveWhitespace ? jsx("pre", {
      ...i
    }) : jsx("div", {
      ...i
    });
  }
  render() {
    return jsx("div", {
      id: this.props.id,
      style: this.props.style,
      ref: this.props.innerRef,
      className: n()("quill", this.props.className),
      onKeyPress: this.props.onKeyPress,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      children: this.renderEditingArea()
    }, this.state.generation);
  }
  onEditorChangeText(t, e, i, o) {
    if (!this.editor) return;
    let r = this.isDelta(this.value) ? o.getContents() : o.getHTML();
    r !== this.getEditorContents() && (this.lastDeltaChangeSet = e, this.value = r, this.props.onChange?.(t, e, i, o));
  }
  onEditorChangeSelection(t, e, i) {
    if (!this.editor) return;
    let o = this.getEditorSelection();
    let r = !o && t;
    let s = o && !t;
    !T()(t, o) && (this.selection = t, this.props.onChangeSelection?.(t, e, i), r ? this.props.onFocus?.(t, e, i) : s && this.props.onBlur?.(o, e, i));
  }
  focus() {
    this.editor && this.editor.focus();
  }
  blur() {
    this.editor && (this.selection = null, this.editor.blur());
  }
}
function L(t) {
  Promise.resolve().then(t);
}
B.displayName = "React Quill";
B.Quill = Ay;
B.defaultProps = {
  theme: "snow",
  modules: {},
  readOnly: !1
};
export let $$O2 = ["bold", "italic", "strike", "header", "list", "link", "code", "code-block"];
B.Quill.register("modules/keyboardBindings", class {
  constructor(t, e) {
    t.keyboard.addBinding({
      key: "x",
      shiftKey: !0,
      shortKey: !0
    }, (e, i) => t.format("strike", !i.format.strike));
    t.keyboard.addBinding({
      key: "x",
      shiftKey: !0,
      shortKey: !0
    }, (e, i) => t.format("strike", !i.format.strike));
    t.keyboard.addBinding({
      key: "c",
      shiftKey: !0,
      shortKey: !0
    }, (e, i) => t.format("code", !i.format.code));
    t.keyboard.addBinding({
      key: "c",
      shiftKey: !0,
      shortKey: !0,
      altKey: !0
    }, (e, i) => t.format("code-block", !i.format["code-block"]));
  }
});
B.Quill.register("themes/snow", _$$A8);
B.Quill.register("formats/bold", _$$A);
B.Quill.register("formats/italic", _$$A3);
B.Quill.register("formats/strike", _$$A6);
B.Quill.register("formats/header", _$$A2);
B.Quill.register("formats/list", _$$A5);
B.Quill.register("formats/code", Cy);
B.Quill.register("formats/code-block", _$$Ay);
B.Quill.register("modules/markdownShortcuts", class {
  constructor(t, e) {
    this.symbolToFormat = new Map([["*", "bold"], ["_", "italic"], ["~", "strike"], ["`", "code"]]);
    this.quill = t;
    t.on("text-change", (e, i, o) => {
      if (e && e.ops && "user" === o) {
        for (let i = 0; i < e.ops.length; i++) if (e.ops[i].hasOwnProperty("insert")) {
          let o = e.ops[i].insert;
          let r = t.getSelection();
          if (!r) return;
          let [s, l] = t.getLine(r.index);
          let n = s?.domNode.textContent;
          let a = r.index - l;
          switch (o) {
            case " ":
              this.parseHeader(n, r);
              break;
            case "`":
              this.parseCodeBlock(n, r, a);
              break;
            case "_":
            case "*":
            case "~":
              this.parseStylizedText(n, r, a, o);
          }
        }
      }
    });
  }
  parseHeader(t, e) {
    let i = t.match(/^(#){1,2}\s/g);
    if (null == i) return;
    let o = i[0].length;
    this.quill.deleteText(e.index - o, o);
    this.quill.formatLine(e.index - o, 0, "header", o - 1);
    setTimeout(() => {
      this.quill.setSelection(e.index - o, 0);
    }, 0);
  }
  parseCodeBlock(t, e, i) {
    let o = t.indexOf("```");
    if (-1 === o) {
      this.parseStylizedText(t, e, i, "`");
      return;
    }
    let r = i + o;
    let s = this.quill.getFormat(e)["code-block"];
    this.quill.deleteText(r, 3);
    (o > 0 || s) && this.quill.insertText(r, "\n");
    this.quill.format("code-block", !s);
  }
  parseStylizedText(t, e, i, o) {
    if (this.quill.getFormat(e)["code-block"]) return;
    let r = "*" === o ? "\\*" : o;
    let s = RegExp("(?<= |^)" + r + "\\S((.*\\S" + r + ")|" + r + ")", "g").exec(t);
    if (null == s) return;
    let l = s[0];
    let n = i + s.index;
    let a = this.symbolToFormat.get(o);
    this.quill.deleteText(n + l.length - 1, 1);
    this.quill.deleteText(n, 1);
    this.quill.formatText(n, l.length - 2, {
      [a]: !0
    });
    this.quill.format(a, !1);
  }
});
class K extends _$$A4 {
  static create(t) {
    let e = super.create(t);
    e.setAttribute("rel", "noreferrer noopener nofollow ugc");
    return e;
  }
  static sanitize(t) {
    var e = t;
    /^mailto:/.test(e) || (/^[^\s@\/]+@[^\s@\/]+\.[^\s@\/]+$/.test(e) ? e = `mailto:${e}` : /^https?:\/{2}/.test(e) || (e = `http://${e}`));
    return super.sanitize(e);
  }
}
B.Quill.register("formats/link", K, !0);
B.Quill.register("modules/toolbar", _$$A7);
class N extends _$$Ay2 {
  updateContentsAndSetCursorIndex(t, e) {
    this.quill.updateContents(t, "silent");
    this.quill.setSelection(e, 0, "silent");
  }
  onCapturePaste(t) {
    t.preventDefault();
    let e = this.quill.getSelection();
    let i = t.clipboardData?.getData("text/plain") || "";
    let o = mv(i);
    if (!e) return;
    if (!o) {
      let t = new Ru().retain(e.index).$$delete(e.length).insert(i);
      this.updateContentsAndSetCursorIndex(t, e.index + i.length);
      return;
    }
    if (0 === e.length) {
      let t = new Ru().retain(e.index).insert(i, {
        link: i
      });
      this.updateContentsAndSetCursorIndex(t, e.index + e.length + i.length);
      return;
    }
    let r = new Ru().retain(e.index).retain(e.length, {
      link: i
    });
    this.updateContentsAndSetCursorIndex(r, e.index + e.length);
  }
}
function H(t) {
  return jsx("button", {
    className: t.className,
    "aria-label": `${t.tooltip}`,
    value: t.value,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": `${t.tooltip}${OZ(t)}`,
    onKeyDown: t => {
      t.keyCode === Uz.ESCAPE && t.currentTarget.blur();
    }
  });
}
B.Quill.register("modules/clipboard", N, !0);
_$$A9.bold = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M8 6h4.25c1.795 0 3.25 1.455 3.25 3.25 0 1.06-.507 2.001-1.292 2.594C15.27 12.38 16 13.48 16 14.75c0 1.795-1.455 3.25-3.25 3.25H8zm6.5 3.25c0 1.243-1.007 2.25-2.25 2.25H9V7h3.25c1.243 0 2.25 1.007 2.25 2.25M9 12.5V17h3.75c1.243 0 2.25-1.007 2.25-2.25 0-1.243-1.007-2.25-2.25-2.25z"/></svg>';
_$$A9.italic = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M9.99 7h5.26l-.24 1H13l-1.575 9h2.325l-.25 1H8l.25-1h2.175L12 8H9.75z"/></svg>';
_$$A9.strike = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M9.904 7.297c.652-.528 1.524-.797 2.445-.797.907 0 1.755.228 2.407.742.661.523 1.069 1.301 1.149 2.295l-.997.08c-.06-.75-.353-1.26-.772-1.59-.429-.338-1.039-.527-1.787-.527-.735 0-1.373.215-1.816.574-.434.352-.703.855-.703 1.503 0 .615.285 1.013.639 1.292q.09.071.184.131h-1.41c-.246-.373-.413-.842-.413-1.423 0-.96.412-1.745 1.074-2.28M14.824 14h1.069q.105.36.107.801c0 .972-.373 1.793-1.065 2.362-.68.559-1.622.837-2.707.837-1.1 0-1.986-.31-2.628-.879-.64-.567-.99-1.347-1.096-2.2l.992-.124c.083.66.343 1.2.767 1.575.422.375 1.055.628 1.965.628.925 0 1.619-.237 2.072-.61.442-.363.7-.892.7-1.589 0-.324-.066-.586-.177-.801zM6 13h12v-1H6z"/></svg>';
_$$A9.header[2] = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M6 7H5v11h1v-5h6v5h1V7h-1v5H6zm11.997 5H19v6h-1v-5l-1.5.895v-.966z"/></svg>';
_$$A9.list.bullet = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M8 6H6v1h2zm0 10H6v1h2zm-2-5h2v1H6zm12-5h-8v1h8zm-8 10h8v1h-8zm8-5h-8v1h8z"/></svg>';
_$$A9.list.ordered = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M6.163 5.636H5.41l-1.085.697v.725l1.02-.652h.026V10h.79V5.636zM10 6h8v1h-8zm0 10h8v1h-8zm8-5h-8v1h8zM7.38 17H4.387v-.571l1.515-1.485c.43-.437.652-.697.652-1.061 0-.411-.31-.665-.725-.665-.434 0-.716.28-.716.724h-.752c0-.828.614-1.365 1.479-1.365.878 0 1.472.534 1.472 1.265 0 .492-.234.889-1.082 1.703l-.752.765v.03h1.9V17z"/></svg>';
_$$A9.link = _$$A0;
_$$A9.code = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" d="m6.414 12.096 3.89-3.889-.708-.707-4.242 4.243-.354.353 4.596 4.596.707-.707zm7.89-4.596 4.242 4.243.354.353-4.597 4.596-.707-.707 3.89-3.889-3.89-3.889.707-.707z"/></svg>';
_$$A9["code-block"] = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M19 7h-4V6h5v14H4v-5h1v4h14zM6.146 6.646 3.293 9.5l2.853 2.854.708-.708L4.707 9.5l2.147-2.146zm3 .708L11.293 9.5l-2.147 2.146.708.708L12.707 9.5 9.854 6.646z"/></svg>';
let I = {
  [_$$_.Bold]: () => jsx(H, {
    className: "ql-bold",
    tooltip: getI18nString("proto.starting_points.description_bold_tooltip"),
    keyShortcutKey: "B"
  }),
  [_$$_.Italic]: () => jsx(H, {
    className: "ql-italic",
    tooltip: getI18nString("proto.starting_points.description_italic_tooltip"),
    keyShortcutKey: "I"
  }),
  [_$$_.Strikethrough]: () => jsx(H, {
    className: "ql-strike",
    tooltip: getI18nString("proto.starting_points.description_strikethrough_tooltip"),
    keyShortcutKey: "X",
    keyShortcutShift: !0
  }),
  [_$$_.Header1]: () => jsx(H, {
    className: "ql-header",
    value: "2",
    tooltip: getI18nString("proto.starting_points.description_header_tooltip")
  }),
  [_$$_.BulletedList]: () => jsx(H, {
    className: "ql-list",
    value: "bullet",
    tooltip: getI18nString("proto.starting_points.description_bulleted_list_tooltip")
  }),
  [_$$_.OrderedList]: () => jsx(H, {
    className: "ql-list",
    value: "ordered",
    tooltip: getI18nString("proto.starting_points.description_ordered_list_tooltip")
  }),
  [_$$_.Link]: () => jsx(H, {
    className: "ql-link",
    tooltip: getI18nString("proto.starting_points.description_link_tooltip"),
    keyShortcutKey: "K"
  }),
  [_$$_.Code]: () => jsx(H, {
    className: "ql-code",
    tooltip: getI18nString("proto.starting_points.description_code_tooltip"),
    keyShortcutKey: "C",
    keyShortcutShift: !0
  }),
  [_$$_.CodeBlock]: () => jsx(H, {
    className: "ql-code-block",
    tooltip: getI18nString("proto.starting_points.description_code_block_tooltip"),
    keyShortcutKey: "C",
    keyShortcutShift: !0,
    keyShortcutOption: !0
  })
};
let P = ["Bold", "Italic", "Strikethrough", "Header1", "BulletedList", "OrderedList", "Link", "Code", "CodeBlock"];
let Q = ["Bold", "BulletedList", "OrderedList", "Link"];
export function $$j0({
  toolbarProps: t,
  onInputChange: e,
  ...i
}) {
  let l = useRef(null);
  let n = useRef(null);
  useEffect(() => {
    let t = l?.current?.querySelector(".ql-tooltip input[type=text]");
    t && t.setAttribute("data-link", "Type or paste URL");
  }, []);
  useEffect(() => {
    let t = i.mountBehavior ?? "none";
    if ("none" === t) return;
    let e = n?.current?.getEditor();
    if (!e) return;
    e.focus();
    let o = e.getLength();
    o <= 0 || ("focusAndSelectAll" === t ? e.setSelection(0, o) : e.setSelection(o - 1, 0));
  }, [i.mountBehavior]);
  let a = useId();
  let d = useRef(i.onEnterKeyPressed);
  d.current = i.onEnterKeyPressed;
  let h = (t, e) => !d.current || !!e.format.list || (d.current(), !1);
  let u = {
    toolbar: {
      container: `#${CSS.escape(a)}`
    },
    keyboard: {
      bindings: {
        tab: {
          key: 9,
          handler: () => !0
        },
        backspace: {
          key: "Backspace",
          handler: (t, e) => {
            let i = n?.current?.getEditor();
            if (!i) return !0;
            let o = 0 === e.offset || "\n" === e.prefix.charAt(e.offset - 1);
            return !e.collapsed || !o || !e.format["code-block"] || (i.formatLine(t.index, 0, "code-block", !1), !1);
          }
        },
        enter: {
          key: "Enter",
          shiftKey: !1,
          handler: h
        },
        enterMeta: {
          key: "Enter",
          metaKey: !0,
          handler: h
        }
      }
    },
    keyboardBindings: {},
    markdownShortcuts: {}
  };
  let [c] = useState(u);
  let p = useMemo(() => "object" == typeof i.toolbarOptions ? i.toolbarOptions : "minimal" === i.toolbarOptions ? Q : P, [i.toolbarOptions]);
  useEffect(() => {
    let t = n?.current?.getEditor();
    if (t) {
      let e = () => {
        t.root.setAttribute("data-placeholder", "");
      };
      let i = () => {
        c2(t.root, "data-placeholder", t.options.placeholder);
      };
      t.on(B.Quill.events.COMPOSITION_START, e);
      t.on(B.Quill.events.COMPOSITION_END, i);
      return () => {
        t.off(B.Quill.events.COMPOSITION_START, e);
        t.off(B.Quill.events.COMPOSITION_END, i);
      };
    }
  }, []);
  let g = "value" in i;
  let f = g ? i.value : void 0;
  let m = useRef(g ? R(mm(i.value)) : void 0);
  let [v, y] = useState(m.current);
  useLayoutEffect(() => {
    if (void 0 === v) return;
    let t = R(v);
    t !== m.current && (m.current = t, e(t));
  }, [e, v]);
  useLayoutEffect(() => {
    if (void 0 === f) return;
    let t = R(mm(f));
    t !== m.current && (m.current = t, y(t));
  }, [f]);
  return jsxs("div", {
    className: "text-editor",
    ref: l,
    onBlur: i.onBlur,
    children: [jsx(B, {
      ref: n,
      bounds: i.bounds,
      defaultValue: g ? void 0 : R(mm(i.defaultValue)),
      formats: $$O2,
      modules: c,
      onChange: t => {
        g ? y(t) : e(R(t));
      },
      onChangeSelection: t => {
        let e = n?.current?.getEditor();
        if (!e || !t) return;
        let i = e.getFormat(t)["code-block"];
        for (let t of [".ql-italic", ".ql-strike", ".ql-link", ".ql-code"]) {
          let e = l?.current?.querySelector(t);
          i ? e?.classList.add("disabled") : e?.classList.remove("disabled");
        }
        let o = l?.current?.querySelector(".ql-bold");
        i || e.getFormat(t).header ? o?.classList.add("disabled") : o?.classList.remove("disabled");
      },
      onFocus: i.onFocus,
      onKeyDown: t => {
        i.onKeyDown?.(t) || t.keyCode !== Uz.ESCAPE || t.target.blur();
      },
      placeholder: i.placeholder,
      value: v
    }), jsx(_$$N, {
      ...t,
      id: a,
      className: i.hideToolbar ? "quill-hide-toolbar" : "",
      children: p.map(t => {
        let e = I[t];
        return jsx(e, {}, `quill-toolbar-option-${t}`);
      })
    })]
  });
}
export function $$D1({
  value: t,
  quillClassName: e,
  quillInnerRef: i
}) {
  return useMemo(() => jsx(B, {
    modules: {
      toolbar: !1
    },
    readOnly: !0,
    className: n()("quill-readonly", e),
    innerRef: i,
    value: _$$z(mm(t))
  }), [e, i, t]);
}
function R(t) {
  return _$$z(function (t) {
    let e = document.createElement("div");
    e.innerHTML = d().sanitize(t);
    let i = e.querySelectorAll("h1");
    if (0 === i.length) return t;
    for (let t = 0; t < i.length; t++) {
      let e = i[t];
      let o = document.createElement("h2");
      o.innerHTML = d().sanitize(e.innerHTML);
      e.parentNode?.replaceChild(o, e);
    }
    return e.innerHTML;
  }(t));
}
export const QuillEditor = $$j0;
export const ReadOnlyQuillEditor = $$D1;
export const descriptionEditorFormats = $$O2;