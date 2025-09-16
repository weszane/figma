import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useMemo, Fragment, useEffect } from "react";
import { TabLoop } from "../905/718764";
import { DialogRoot, DialogLabel } from "../905/799737";
import { IconButton } from "../905/443068";
import { r1 } from "../figma_app/272243";
import { A } from "../905/251970";
import c from "classnames";
import { N } from "../vendor/930821";
import { xQ } from "../vendor/222851";
import { d as _$$d } from "../vendor/456530";
import { P } from "../vendor/348225";
import { M } from "../figma_app/648761";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
var u = c;
let v = createContext(null);
function b() {
  let e = useContext(v);
  if (!e) throw Error("missing FlyoutContext for flyout! does the current component have a Flyout.Root parent?");
  return e;
}
function y() {
  return b().close;
}
function j() {
  let e = y();
  return jsx("div", {
    className: u()(_$$s.absolute.flex.itemsCenter.justifyCenter.$, "flyout--close--SKgKT"),
    children: jsx(IconButton, {
      onClick: () => e("button"),
      "aria-label": getI18nString("modal.close"),
      children: jsx(A, {})
    })
  });
}
export let $$I0 = {
  Root: forwardRef((e, t) => {
    let a = useMemo(() => ({
      ref: t,
      close: e.onClose
    }), [e.onClose, t]);
    return jsx(v.Provider, {
      value: a,
      children: jsx(N, {
        initial: !1,
        children: e.open ? jsx(Fragment, {
          children: e.children
        }, "contents") : null
      })
    });
  }),
  Contents: function ({
    children: e,
    ...t
  }) {
    let {
      close,
      ref
    } = b();
    let o = M(ref);
    useEffect(() => {
      let e = o.current;
      if (!e) return;
      let t = e => {
        "Escape" === e.key && (e.preventDefault(), close("escape"));
      };
      e.addEventListener("keydown", t);
      return () => {
        e.removeEventListener("keydown", t);
      };
    }, [close, o]);
    let [d, c] = xQ();
    let m = _$$d("translateX(100%)");
    useEffect(() => {
      let e;
      d ? m.set("none") : (m.set("translateX(100%)"), e = setTimeout(c, 600));
      return () => {
        clearTimeout(e);
      };
    }, [d]);
    return jsx(TabLoop, {
      children: jsx(DialogRoot, {
        ...t,
        className: u()(_$$s.fixed.top0.right0.bottom0.left0.zIndexModal.colorText.eventsNone.$, t.zIndexOverrideClassName),
        ref: o,
        children: jsx("div", {
          className: u()(_$$s.my0.mr0.mlAuto.top0.wFull.eventsAuto.$, "flyout--contents--g9Ra6"),
          children: jsxs(P.div, {
            className: _$$s.hFull.elevation400.colorBg.flex.flexColumn.$,
            style: {
              transform: m,
              ...(d ? {
                transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
              } : {
                transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), visibility 0s 500ms",
                visibility: "hidden"
              })
            },
            onTransitionEnd: e => {
              "transform" !== e.propertyName || d || c();
            },
            children: [jsx(j, {}), e]
          })
        })
      })
    });
  },
  Header: function (e) {
    return jsx("div", {
      className: u()(_$$s.minH40.bb1.colorBorder.bSolid.flex.itemsCenter.selectNone.flexShrink0.overflowHidden.$, "flyout--header--AZ5ed"),
      children: e.children
    });
  },
  HiddenTitle: r1,
  Title: function (e) {
    return jsx(DialogLabel, {
      className: _$$s.textBodyMediumStrong.pl16.pr4.wFull.noWrap.ellipsis.overflowHidden.$,
      children: e.children
    });
  },
  Body: function (e) {
    let {
      height,
      ...a
    } = e;
    return jsx("div", {
      className: u()(_$$s.overflowAuto.$$if("fill" === e.height, _$$s.hFull).$, "flyout--body--2bx8h"),
      "data-testid": "flyout-body",
      children: a.children
    });
  },
  useClose: y
};
export const m = $$I0;