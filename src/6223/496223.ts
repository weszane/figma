import { jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect, Suspense } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Y } from "../vendor/435990";
import { mergeRegister } from "../vendor/425002";
import d from "classnames";
import { $isNodeSelection, $getSelection, $getNodeByKey, SELECTION_CHANGE_COMMAND, COMMAND_PRIORITY_LOW, CLICK_COMMAND, DRAGSTART_COMMAND, KEY_DELETE_COMMAND, KEY_BACKSPACE_COMMAND } from "lexical";
import { oW } from "../905/675859";
import { Eh } from "../940032c6/718024";
var i = d;
let m = new Set();
function f({
  altText: e,
  imageRef: r,
  src: n,
  width: t,
  height: l,
  isFocused: s,
  isDraggable: u
}) {
  !function (e) {
    if (!m.has(e)) throw new Promise(r => {
      let n = new Image();
      n.src = e;
      n.onload = () => {
        m.add(e);
        r(null);
      };
    });
  }(n);
  return jsx(oW, {
    className: i()("image_node--imgContainer--zeypc", {
      "image_node--focused--97PZB": s,
      "image_node--draggable--d0R7d": u
    }),
    src: n,
    alt: e,
    imageRef: r,
    style: {
      height: l,
      width: t
    },
    draggable: "false"
  });
}
export function $$b0({
  src: e,
  altText: r,
  nodeKey: n,
  width: d,
  height: i
}) {
  let c = useRef(null);
  let [m, b, h] = Y(n);
  let [C] = useLexicalComposerContext();
  let [_, w] = useState(null);
  let p = useRef(null);
  let v = useCallback(e => {
    if (m && $isNodeSelection($getSelection())) {
      e.preventDefault();
      let r = $getNodeByKey(n);
      Eh(r) && r.remove();
    }
    return !1;
  }, [m, n]);
  useEffect(() => {
    let e = !0;
    let r = mergeRegister(C.registerUpdateListener(({
      editorState: r
    }) => {
      if (e) {
        let e = r.read(() => $getSelection());
        ($isNodeSelection(e) || null === e) && w(e);
      }
    }), C.registerCommand(SELECTION_CHANGE_COMMAND, (e, r) => (p.current = r, !1), COMMAND_PRIORITY_LOW), C.registerCommand(CLICK_COMMAND, e => e.target === c.current && (e.shiftKey ? b(!m) : (h(), b(!0)), !0), COMMAND_PRIORITY_LOW), C.registerCommand(DRAGSTART_COMMAND, e => e.target === c.current && (e.preventDefault(), !0), COMMAND_PRIORITY_LOW), C.registerCommand(KEY_DELETE_COMMAND, v, COMMAND_PRIORITY_LOW), C.registerCommand(KEY_BACKSPACE_COMMAND, v, COMMAND_PRIORITY_LOW));
    return () => {
      e = !1;
      r();
    };
  }, [h, C, m, n, b, v]);
  let k = m && $isNodeSelection(_);
  return jsx(Suspense, {
    fallback: null,
    children: jsx(Fragment, {
      children: jsx("div", {
        draggable: k,
        className: "image_node--draggableContainer--6HODy",
        children: jsx(f, {
          isFocused: m,
          isDraggable: k,
          src: e,
          altText: r,
          imageRef: c,
          width: d,
          height: i
        })
      })
    })
  });
}
export const _$$default = $$b0;
