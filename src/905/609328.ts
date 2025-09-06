import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { debug } from "../figma_app/465776";
import { Pt4, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { fn, sH } from "../905/871411";
import { Pt } from "../figma_app/806412";
import { ms, c$ } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { j7, oB } from "../905/929976";
import { sw, rk } from "../figma_app/914957";
import { EF, Oo, eE } from "../905/709171";
import { Eo } from "../figma_app/80990";
import { b as _$$b } from "../905/217163";
import { Y5 } from "../figma_app/455680";
import { Um } from "../905/848862";
import { tS, q5 } from "../figma_app/516028";
export let $$v0 = "variable-picker-style-context-menu";
export function $$I1() {
  let e = useDispatch();
  let t = tS();
  let i = useSelector(e => e.stylePreviewShown);
  let {
    showStyleContextMenu,
    hideStyleContextMenu
  } = function () {
    let e = useDispatch();
    let t = Um();
    return useMemo(() => ({
      showStyleContextMenu: function ({
        dsStyle: t,
        position: i
      }) {
        e(j7({
          type: $$v0,
          data: {
            dsStyle: t,
            position: i
          }
        }));
      },
      hideStyleContextMenu: function () {
        t?.type === $$v0 && e(oB());
      }
    }), [e, t]);
  }();
  return useMemo(() => {
    function r() {
      e(sw());
    }
    return {
      showStyleContextMenu,
      hideStyleContextMenu,
      showStyleDetails: function ({
        dsStyle: n,
        position: a
      }) {
        if (i.isShown && !i.isCreating && i.style?.node_id === n.node_id && EF(i.style, n)) r();else {
          debug(null != n.content_hash, "style does not have a hash");
          let i = Oo(n, t) ? n.node_id : Pt4.getStyleNodeId(n.key, n.content_hash);
          fn(sH(i)) ? glU.selectStyleByGuid(i) : Eo.getCanvas(n).then(e => {
            glU.selectExternalStyle(e);
          });
          e(rk({
            style: n,
            rowTop: a.y,
            rowLeft: a.x
          }));
        }
      },
      hideStyleDetails: r,
      deleteStyle: function (e) {
        Oo(e, t) && (glU.deleteNode(e.node_id), Y5.triggerAction("commit"));
      }
    };
  }, [e, t, i, hideStyleContextMenu, showStyleContextMenu]);
}
export function $$E2({
  dsStyle: e,
  position: t,
  recordingKey: i
}) {
  let a = _$$b({
    libraryKey: e.library_key,
    nodeId: e.node_id
  });
  let s = a.data?.type === "community";
  let {
    showStyleDetails,
    deleteStyle
  } = $$I1();
  let m = q5();
  let h = useMemo(() => {
    if (a.data?.type === "team") return a.data.link;
  }, [a.data]);
  if (s) return null;
  let f = eE(e, m);
  return f || h ? jsx(ms, {
    style: {
      top: t.y,
      left: t.x,
      position: "fixed"
    },
    children: f ? jsxs(Fragment, {
      children: [jsx(c$, {
        recordingKey: Pt(i, "editStyle"),
        onClick: () => showStyleDetails({
          dsStyle: e,
          position: t
        }),
        children: renderI18nText("design_systems.styles.edit_style")
      }), jsx(c$, {
        recordingKey: Pt(i, "deleteStyle"),
        onClick: () => l7.user("delete-style", () => deleteStyle(e)),
        children: renderI18nText("design_systems.styles.delete_styles", {
          numStyles: 1
        })
      })]
    }) : jsx(c$, {
      href: h,
      target: "_blank",
      recordingKey: Pt(i, "goToStyleDefinition"),
      children: renderI18nText("design_systems.styles.go_to_style_definition")
    })
  }) : null;
}
export const A7 = $$v0;
export const XM = $$I1;
export const ip = $$E2;