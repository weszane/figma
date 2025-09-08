import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import { permissionScopeHandler } from "../905/189185";
import r from "classnames";
import { t as _$$t } from "../905/331623";
import { ZT } from "../figma_app/844435";
import { EO } from "../figma_app/86989";
import { j } from "../905/813868";
import { E as _$$E } from "../469e6e40/167556";
import { P } from "../469e6e40/160324";
import { FFileType } from "../figma_app/191312";
import { hasLocalFileId } from "../figma_app/155287";
import { b as _$$b } from "../905/635568";
import { J } from "../469e6e40/430781";
import { cJ, HA, Gb, DJ } from "../905/483312";
import { A } from "../svg/241789";
var l = r;
export function $$f0(e) {
  let t = _$$b();
  let a = ZT();
  let r = EO(a[e.widget.plugin_id]);
  let f = "boolean" == typeof e.clickToInsert ? e.clickToInsert && !r : !r;
  let {
    dragState,
    onInsertableResourcePointerDown
  } = P({
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: t,
    triggeredFrom: e.analytics.triggeredFrom,
    resource: e.widget,
    searchQuery: e.analytics.searchQuery
  });
  let w = hasLocalFileId(e.widget);
  return jsxs(Fragment, {
    children: [jsxs(E, {
      className: l()({
        [cJ]: !0,
        [J]: !!dragState,
        [HA]: e.fillContainer,
        [Gb]: e.context === FFileType.WHITEBOARD
      }),
      onClick: () => {
        f && permissionScopeHandler.user("insert-widget", () => {
          j({
            pluginID: e.widget.plugin_id,
            widgetName: e.widget.name,
            pluginVersionID: w ? "" : e.widget.id,
            triggeredFrom: "universal-insert"
          });
          t();
        });
      },
      htmlAttributes: {
        onPointerDown: onInsertableResourcePointerDown
      },
      "data-testid": "widget-snapshot-draggable",
      children: [jsx("img", {
        src: e.src,
        alt: "",
        draggable: !1
      }), jsx("div", {
        className: DJ,
        children: w && jsx(_$$t, {
          svg: A,
          useOriginalSrcFills_DEPRECATED: !0,
          fallbackSvg: A
        })
      })]
    }), jsx(_$$E, {
      dragState
    })]
  });
}
export const _ = $$f0;