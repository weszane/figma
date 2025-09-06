import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { getI18nString } from "../905/303541";
import { K2 } from "../7021/970540";
let n = "sticky_note--stickyNoteAnimateIn--AiFPv";
let a = e => {
  switch (e) {
    case "developer":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.developer");
    case "designer":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.designer");
    case "product_manager":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.product_manager");
    case "research":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.user_researcher");
    case "marketer":
      return getI18nString("new_user_experience.what_do_you_do.cursor_chat.marketer");
    case "student":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.student");
    case "educator":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.educator");
    case "ux_writing":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.ux_writing");
    case "data_analytics":
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.data_analytics");
    default:
      return getI18nString("new_user_experience.what_do_you_do.sticky_note.other");
  }
};
export function $$d0({
  jobTitle: e
}) {
  let r = K2();
  let [t, o] = useState(0);
  let d = useRef(t);
  let c = useRef(e);
  let u = a(c.current);
  let [x, h] = useState(u);
  let [_, p] = useState(n);
  let f = e => {
    let r;
    do r = Math.floor(15 * Math.random()) + -7; while (!(Math.abs(e - r) >= 3));
    return r;
  };
  return (useEffect(() => {
    let r = f(d.current);
    o(r);
    let t = a(e);
    if (c.current && c.current !== e) {
      p("sticky_note--stickyNoteAnimateOut--g015-");
      c.current = e;
      let i = setTimeout(() => {
        h(t);
        p(n);
        d.current = r;
      }, 300);
      return () => clearTimeout(i);
    }
    c.current = e;
    d.current = r;
    h(t);
    p(n);
  }, [e]), e) ? jsx("div", {
    className: _,
    style: {
      "--prevEndRotationAngle": `${d.current}deg`,
      "--endRotationAngle": `${t}deg`
    },
    children: jsxs("div", {
      className: "sticky_note--stickyNote--3k6bP",
      children: [jsx("div", {
        className: "sticky_note--stickyNoteText--okxL-",
        children: x
      }), jsx("div", {
        className: "sticky_note--stickyNoteName--vgQzM",
        children: r
      })]
    })
  }) : null;
}
export const G = $$d0;