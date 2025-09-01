import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, Fragment as _$$Fragment } from "react";
import { bL, gZ } from "../905/598775";
import { $n } from "../905/521428";
import { E } from "../905/632989";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { Yd, tx } from "../905/303541";
import { d as _$$d } from "../5430/535653";
import { Rt } from "../figma_app/979658";
import { bD } from "../figma_app/45218";
import { cX } from "../figma_app/920333";
import { q } from "../1291/18399";
import { L } from "../figma_app/520315";
import { F } from "../1291/661220";
import { sk, xC, H6, xO, bV, jy, a0 } from "../figma_app/745709";
var c = d;
export function $$y0(e) {
  let t;
  let {
    shelves,
    isLoading
  } = _$$d(e.shelfType);
  let y = cX().setSelectedCategory;
  let j = useMemo(() => {
    let e = {};
    let t = new Set();
    shelves.forEach(s => {
      let i = [];
      for (let e of s.shelf_content) if (!t.has(e.id) && (t.add(e.id), i.push(e), 4 === i.length)) break;
      e[s.id] = i;
    });
    return e;
  }, [shelves]);
  if (!shelves || 0 === shelves.length) return null;
  if (isLoading) return jsx(L, {});
  let S = Rt.PLUGINS;
  e.resourceType === bD.HUB_FILE ? (t = sk, S = Rt.TEMPLATES) : e.resourceType === bD.WIDGET ? (t = xC, S = Rt.WIDGETS) : t = void 0;
  return jsxs(Fragment, {
    children: [shelves.map(s => {
      let d = j[s.id];
      return jsxs(_$$Fragment, {
        children: [jsx(F, {}), getFeatureFlags().fpl_card_primitive_migration ? jsxs(bL, {
          className: c()(H6, {
            [xO]: e.resourceType === bD.PLUGIN
          }),
          children: [jsx("div", {
            className: bV,
            children: Yd(s.i18n_meta.title, s.title)
          }), jsx(gZ, {
            className: jy,
            children: jsx($n.Link, {
              onClick: () => y({
                id: s.id,
                title: s.title,
                resourceType: S
              }),
              children: tx("whiteboard.inserts.see_all")
            })
          })]
        }) : jsxs(E, {
          className: c()(a0, {
            [xO]: e.resourceType === bD.PLUGIN
          }),
          onClick: () => y({
            id: s.id,
            title: s.title,
            resourceType: S
          }),
          children: [jsx("div", {
            className: bV,
            children: Yd(s.i18n_meta.title, s.title)
          }), jsx("div", {
            className: jy,
            children: tx("whiteboard.inserts.see_all")
          })]
        }), jsx("div", {
          className: t,
          children: d && d.map(t => e.renderResource(t))
        })]
      }, s.id);
    }), jsx(q, {
      resourceType: e.resourceType
    })]
  });
}
export const K = $$y0;