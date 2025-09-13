import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debug } from "../figma_app/465776";
import { StylesBindings, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { generateRecordingKey } from "../figma_app/878298";
import { ms, c$ } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { j7, oB } from "../905/929976";
import { sw, rk } from "../figma_app/914957";
import { compareLibraryItemsAlias, compareWithGeneratedKey, compareLibraryItemWithKey } from "../905/709171";
import { teamLibraryCache } from "../figma_app/80990";
import { b as _$$b } from "../905/217163";
import { fullscreenValue } from "../figma_app/455680";
import { Um } from "../905/848862";
import { useCurrentFileKey, selectCurrentFile } from "../figma_app/516028";
export let $$v0 = "variable-picker-style-context-menu";
export function $$I1() {
  let e = useDispatch();
  let t = useCurrentFileKey();
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
        if (i.isShown && !i.isCreating && i.style?.node_id === n.node_id && compareLibraryItemsAlias(i.style, n)) r();else {
          debug(null != n.content_hash, "style does not have a hash");
          let i = compareWithGeneratedKey(n, t) ? n.node_id : StylesBindings.getStyleNodeId(n.key, n.content_hash);
          isValidSessionLocalID(parseSessionLocalID(i)) ? Fullscreen.selectStyleByGuid(i) : teamLibraryCache.getCanvas(n).then(e => {
            Fullscreen.selectExternalStyle(e);
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
        compareWithGeneratedKey(e, t) && (Fullscreen.deleteNode(e.node_id), fullscreenValue.triggerAction("commit"));
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
  let m = selectCurrentFile();
  let h = useMemo(() => {
    if (a.data?.type === "team") return a.data.link;
  }, [a.data]);
  if (s) return null;
  let f = compareLibraryItemWithKey(e, m);
  return f || h ? jsx(ms, {
    style: {
      top: t.y,
      left: t.x,
      position: "fixed"
    },
    children: f ? jsxs(Fragment, {
      children: [jsx(c$, {
        recordingKey: generateRecordingKey(i, "editStyle"),
        onClick: () => showStyleDetails({
          dsStyle: e,
          position: t
        }),
        children: renderI18nText("design_systems.styles.edit_style")
      }), jsx(c$, {
        recordingKey: generateRecordingKey(i, "deleteStyle"),
        onClick: () => permissionScopeHandler.user("delete-style", () => deleteStyle(e)),
        children: renderI18nText("design_systems.styles.delete_styles", {
          numStyles: 1
        })
      })]
    }) : jsx(c$, {
      href: h,
      target: "_blank",
      recordingKey: generateRecordingKey(i, "goToStyleDefinition"),
      children: renderI18nText("design_systems.styles.go_to_style_definition")
    })
  }) : null;
}
export const A7 = $$v0;
export const XM = $$I1;
export const ip = $$E2;