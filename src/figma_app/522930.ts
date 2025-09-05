import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { localStorageRef } from "../905/657224";
import { s as _$$s } from "../cssbuilder/589278";
import { pW } from "../905/160095";
import { tx } from "../905/303541";
import { V } from "../905/965990";
import { b as _$$b } from "../905/985254";
import { A } from "../905/563377";
import { tS } from "../figma_app/622574";
import { f as _$$f } from "../905/940356";
import { $z, IX } from "../figma_app/957169";
let g = "team_template_card_view_count";
let f = () => {
  if (!localStorageRef) return;
  let e = parseInt(localStorageRef.getItem(g) || "0");
  localStorageRef.setItem(g, "" + ++e);
};
export function $$E0({
  fullWidth: e = !1
}) {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.itemsCenter.mxAuto.gap12.alignCenter.justifyCenter.$,
    style: {
      width: e ? "100%" : "360px",
      paddingTop: "100px"
    },
    children: [jsx("div", {
      children: jsx($z, {
        size: IX.MEDIUM,
        useCurrentFileAsThumbnail: !1
      })
    }), jsx("div", {
      className: _$$s.font13.fontSemiBold.$,
      children: tx("whiteboard.inserts.custom_templates_header")
    }), jsx("div", {
      children: tx("whiteboard.inserts.custom_templates_description")
    }), jsx(pW, {
      newTab: !0,
      href: A,
      children: tx("whiteboard.inserts.learn_more")
    })]
  });
}
export function $$y1({
  applyInsertStyling: e,
  applyNarrowStyling: t
}) {
  let r = _$$f("dismissed_team_template_announcement_card");
  let o = useDispatch();
  let l = tS();
  let d = useCallback(() => {
    o(_$$b({
      dismissed_team_template_announcement_card: !0
    }));
    localStorage.removeItem(g);
  }, [o]);
  let c = parseInt(localStorageRef?.getItem(g) || "0");
  return (useEffect(() => {
    !r && c >= 10 && d();
  }, [r, c, d]), l && c < 10 && !r) ? jsx(b, {
    applyInsertStyling: e,
    applyNarrowStyling: t,
    onDismiss: d
  }) : null;
}
function b({
  applyInsertStyling: e,
  applyNarrowStyling: t,
  onDismiss: r
}) {
  useEffect(() => {
    f();
  }, []);
  return jsxs("div", {
    className: _$$s.bRadius5.flex.flexRow.itemsStart.gap12.itemsCenter.p18.colorBgSecondary.mb20.$$if(e, _$$s.m24).$$if(t, _$$s.m12.p12.pt16.mb12).$,
    "data-testid": "teamplates-announcement-card",
    children: [jsx("div", {
      children: jsx($z, {
        size: t ? IX.SMALL : IX.MEDIUM,
        useCurrentFileAsThumbnail: !1
      })
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.justifyBetween.$,
      children: [jsx("div", {
        className: _$$s.font13.fontSemiBold.pb8.$,
        children: tx("whiteboard.inserts.custom_templates_header")
      }), jsx("div", {
        children: tx("whiteboard.inserts.custom_templates_description")
      }), jsxs("div", {
        className: _$$s.flex.gap8.pt16.$,
        children: [jsx(pW, {
          newTab: !0,
          href: A,
          children: tx("whiteboard.inserts.learn_more")
        }), jsx(V, {
          onClick: r,
          children: tx("whiteboard.inserts.dismiss")
        })]
      })]
    })]
  });
}
export const Ht = $$E0;
export const O9 = $$y1;