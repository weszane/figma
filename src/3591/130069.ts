import { jsxs, jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { $n } from "../905/521428";
import { N } from "../905/438674";
import { tx } from "../905/303541";
import { Y } from "../905/830372";
import { E } from "../905/984674";
import { Nn, dx, MZ } from "../figma_app/399472";
import { uF } from "../figma_app/300692";
if (443 == require.j) {}
if (443 == require.j) {}
function c(e) {
  return {
    ...(e.is_widget ? {
      widget_id: e.id
    } : {
      plugin_id: e.id
    }),
    src: Nn.INVITE_TILE
  };
}
export function $$g2(e) {
  let i = wA();
  let t = c(e);
  return () => i(dx(t));
}
export function $$h0(e) {
  let i = wA();
  let t = c(e);
  return () => i(MZ(t));
}
export function $$m3({
  resource: e
}) {
  let i = $$g2(e);
  let t = $$h0(e);
  return jsxs(Y, {
    children: [jsx($n, {
      onClick: e => {
        e.stopPropagation();
        t();
      },
      variant: "secondary",
      children: tx("community.detail_view.decline")
    }), jsx($n, {
      onClick: e => {
        e.stopPropagation();
        i();
      },
      variant: "primary",
      children: tx("community.detail_view.accept")
    })]
  });
}
export function $$x4({
  resource: e
}) {
  let i = uF(e);
  let t = e.creator;
  let s = e.is_widget ? "widget" : "plugin";
  let l = `/community/${s}/${e.id}`;
  return jsx(E, {
    children: tx("universal_insert.invited_you_to_publish", {
      ownerName: jsx(E, {
        fontWeight: "medium",
        children: t.handle
      }),
      resourceName: jsx(N, {
        newTab: !0,
        href: l,
        onClick: e => {
          e.stopPropagation();
        },
        trusted: !0,
        children: jsx(E, {
          fontWeight: "medium",
          children: i.name
        })
      })
    })
  });
}
export function $$_1({
  resource: e
}) {
  return jsxs(Y, {
    direction: "vertical",
    children: [jsx($$x4, {
      resource: e
    }), jsx($$m3, {
      resource: e
    })]
  });
}
export const JB = $$h0;
export const PE = $$_1;
export const R_ = $$g2;
export const WZ = $$m3;
export const e2 = $$x4;