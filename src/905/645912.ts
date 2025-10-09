import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories } from "../905/165054";
import { SlideConstantsCppBindings, Fullscreen, InteractionCpp } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { AffineTransform } from "../905/583953";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { reportError } from "../905/11";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { CZ } from "../905/294085";
import { hO, G4, U2, d3, eQ } from "../figma_app/545293";
import { g as _$$g, o as _$$o } from "../905/566160";
import { fullscreenValue } from "../figma_app/455680";
import { dh } from "../figma_app/186343";
import { openFileKeyAtom } from "../figma_app/516028";
import { getUserId } from "../905/372672";
import { $z } from "../figma_app/297733";
import { XG } from "../figma_app/98578";
import { eg } from "../figma_app/297822";
import { AssetTabType } from "../905/946805";
import { dd } from "../figma_app/604494";
import { xA } from "../905/742325";
import { m as _$$m } from "../905/654466";
import { Jb } from "../figma_app/224338";
import { n as _$$n } from "../905/347702";
import { X } from "../905/123783";
let D = _$$n((e, t, i, n) => {
  let r = e.childrenNodes[0];
  let a = i && getSingletonSceneGraph().get(i);
  if (a) {
    a.appendChild(r);
    let e = SlideConstantsCppBindings.slideWidth() - r.size.x / 2;
    let t = SlideConstantsCppBindings.slideHeight() - r.size.y / 2;
    let i = AffineTransform.fromNumbers(1, 0, e, 0, 1, t);
    r.relativeTransform = i.toFigMatrix();
  } else {
    e.parentNode?.appendChild(r);
    r.relativeTransform = AffineTransform.fromFigMatrix(e.relativeTransform).toFigMatrix();
  }
  e.removeSelfAndChildren();
  Fullscreen.selectInstances(r.guid, !1);
  $z();
  "hub-file-fragment" === t.type && n && (r.name = `${r.name}`, r.hubFileAttribution = {
    hubFileId: t.hub_file_id.toString(),
    hubFileName: t.file_name
  });
});
export function $$L0(e, t) {
  let i = useDispatch<AppDispatch>();
  let d = useAtomWithSubscription(hO.currentSearchAtom);
  let x = useAtomWithSubscription(hO.currentCommunitySearchAtom);
  let P = useAtomWithSubscription(CZ);
  let L = useAtomWithSubscription(hO.sortByAtom);
  let F = X();
  let M = useAtomWithSubscription(dd);
  let j = getUserId();
  let U = dh();
  let B = useAtomWithSubscription(openFileKeyAtom);
  let V = Jb();
  let G = _$$m();
  return useCallback(async ({
    fragment: n,
    dropPosition: r,
    percentageOffset: u,
    insertAsChildOfCanvas: _,
    analyticsProps: v
  }) => {
    try {
      let i = "hub-file-fragment" === n.type;
      let s = e === G4.FIGMAKE;
      let m = await _$$g(n, B ?? void 0);
      permissionScopeHandler.user("Fragment search: insert suggestion", () => {
        let e = getSingletonSceneGraph().createNode("FRAME");
        if (e.stackMode = "VERTICAL", e.stackPrimarySizing = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE", e.stackCounterSizing = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE", e.size = new Point(n.width, n.height), s) {
          let r = getSingletonSceneGraph().getInternalCanvas();
          if (r) r.appendChild(e);else throw Error("Internal canvas not found");
          if (!_$$o(n.node_id, m, e.guid)) {
            e.removeSelfAndChildren();
            return Error("Couldn't paste suggestion");
          }
          let a = e.childrenNodes[0];
          if (!a) throw Error("No pasted node found");
          i && t?.(n, a.guid);
          D(e, n, V, B);
          return;
        }
        let a = Point.rounded(r.subtract(new Point(u.x * n.width, u.y * n.height)));
        if (_ ? (e.relativeTransform = {
          ...e.relativeTransform,
          m02: a.x,
          m12: a.y
        }, getSingletonSceneGraph().getCurrentPage().appendChild(e)) : InteractionCpp.insertNodeAtPoint(U, e.guid, r, a), !_$$o(n.node_id, m, e.guid)) {
          e.removeSelfAndChildren();
          return Error("Couldn't paste suggestion");
        }
        D(e, n, V, B);
      });
      fullscreenValue.commit();
      j && !i && U2.addRecentFragment(j, n);
      let g = i ? x : d;
      let f = {
        ...d3(e, M, g ? g.searchId : "", g ? g.input : null, F, P, i),
        fragment_node_id: n.node_id,
        fragment_position: v.fragmentPosition,
        fragment_last_edited_at: n.last_edited_at,
        fragment_score: n.score,
        assets_tab_type: G
      };
      switch (n.type) {
        case "fig-file-fragment":
          f.fragment_file_key = n.file_key;
          f.sort_by = eQ(L);
          trackEventAnalytics("Fragment search result inserted", f, {
            forwardToDatadog: !0
          });
          break;
        case "hub-file-fragment":
          f.hub_file_id = n.hub_file_id;
          trackEventAnalytics("Fragment search result inserted", f, {
            forwardToDatadog: !0
          });
          break;
        default:
          throwTypeError(n);
      }
      s || XG({
        isSearchResult: !0,
        rankingAlgorithm: eg(AssetTabType.ASSETS),
        numSearchResults: null,
        moduleFilters: i ? xA.COMMUNITY : xA.FRAGMENTS,
        action: "insert-asset-fragment-search",
        searchPosition: v.fragmentPosition
      });
    } catch (e) {
      reportError(ServiceCategories.ML_PLATFORM, Error("Fragment search insert error: " + e.message));
      i(VisualBellActions.enqueue({
        message: getI18nString("fragment_search.insert_toast_error"),
        error: !0
      }));
    }
  }, [e, B, j, x, d, M, F, P, G, V, t, U, L, i]);
}
export const j = $$L0;
