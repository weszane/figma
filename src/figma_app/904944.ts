import { jsx } from "react/jsx-runtime";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import s from "classnames";
var o = s;
var $$l0 = (e => (e.DIVIDER = "divider", e.TEXT = "text", e.SECTION_HEADER = "section-header", e))($$l0 || {});
export function $$d1({
  items: e,
  selectedItemId: t,
  selectedCategory: r,
  onItemSelected: i,
  selectedItemClassName: s
}) {
  return jsx("div", {
    className: "template_picker_sidebar--sidebar--w6kCU",
    children: e.map(e => {
      switch (e.type) {
        case "divider":
          return jsx("div", {
            className: "template_picker_sidebar--itemDivider--agXxQ",
            "data-testid": "sidebar-divider"
          }, e.key);
        case "section-header":
          return jsx("div", {
            className: "template_picker_sidebar--sidebarSectionHeader--WK4rN",
            children: e.text
          }, `section-header-${e.text}`);
        case "text":
          let l = e.id === t && (null == r || e.category === r);
          return jsx("button", {
            className: o()("template_picker_sidebar--sidebarItemBase--D5CCc", {
              [s]: l
            }),
            onClick: () => i(e),
            disabled: e.loading,
            children: e.loading ? jsx(c, {}) : jsx("div", {
              ...stylex.props(l ? u.selectedItemText : u.itemText),
              role: "option",
              "aria-selected": l,
              children: e.text
            })
          }, e.category ? `${e.id}-${e.category}` : e.id);
      }
    })
  });
}
function c() {
  return jsx("div", {
    className: "xj35x94 x17rw0jw x1v8gsql x19y5rnk"
  });
}
let u = {
  itemText: {
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    width: "xh8yej3",
    textAlign: "xdpxx8g",
    ...textDisplayConfig.textBodyLarge,
    $$css: !0
  },
  selectedItemText: {
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    width: "xh8yej3",
    textAlign: "xdpxx8g",
    ...textDisplayConfig.textBodyLargeStrong,
    $$css: !0
  }
};
export const k = $$l0;
export const j = $$d1;
