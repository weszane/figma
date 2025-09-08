import { useDispatch } from "../vendor/514228";
import { Pt } from "../figma_app/806412";
import { j7 } from "../905/929976";
import { LO } from "../figma_app/8833";
import { t as _$$t } from "../469e6e40/489933";
import { lg } from "../figma_app/976749";
import { Gt, dR } from "../figma_app/248118";
import { cW, j1 } from "../figma_app/844435";
import { EO } from "../figma_app/86989";
import { t as _$$t2 } from "../905/851577";
import { N } from "../905/645480";
import { x as _$$x } from "../469e6e40/671704";
import { X$, H3 } from "../figma_app/465071";
import { F } from "../905/827944";
import { hasLocalFileId } from "../figma_app/155287";
import { p as _$$p } from "../905/42189";
import { W } from "../3276/776313";
import { F5, oM } from "../905/192343";
export function $$y0(e) {
  let t = X$("useInsertablePlugin").unwrapOr(null);
  let n = H3(t);
  let y = Gt(e.resource.plugin_id, e.triggeredFrom);
  let C = dR(e.resource.plugin_id, e.triggeredFrom);
  let w = "whiteboard" === lg();
  let j = F5();
  let k = _$$t(e.resource.plugin_id, y, C);
  let P = useDispatch();
  let I = k.length > 0;
  let T = cW();
  let M = EO(T[e.resource.plugin_id]);
  let E = _$$x({
    isWidget: !1,
    id: e.resource.plugin_id
  });
  let {
    validatePublishedPluginInOrgAllowlist
  } = j1(e.resource.plugin_id);
  return _$$t2(e, {
    insertAction: t => {
      if (e.showRequestFlow) return Promise.resolve();
      let n = validatePublishedPluginInOrgAllowlist();
      if (!hasLocalFileId(e.resource) && !n) return Promise.resolve();
      if (M) E();else {
        let {
          e
        } = t;
        I ? P(j7({
          type: LO,
          data: {
            pluginId: e.resource.plugin_id,
            target: {
              top: e.clientY,
              bottom: e.clientY,
              right: e.clientX,
              left: e.clientX,
              width: 0,
              height: 0
            },
            triggeredFrom: e.triggeredFrom
          }
        })) : hasLocalFileId(e.resource) ? C() : y();
      }
      w && oM({
        id: e.resource.plugin_id,
        type: _$$p.PLUGINS,
        source: e.triggeredFrom,
        options: {
          ...j,
          query: e.searchQuery
        }
      });
      return Promise.resolve();
    },
    dragPreviewPointerPosition: N.CENTERED,
    getDragPreviewSrc: () => hasLocalFileId(e.resource) ? W : e.resource.redirect_icon_url || "",
    onPointerDownCallback: () => {
      e.showRequestFlow || hasLocalFileId(e.resource) || M || F.getAndCache(e.resource, n);
    },
    recordingKey: Pt("plugin", e.resource.plugin_id)
  });
}
export const c = $$y0;