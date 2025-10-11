import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppStateTsApi } from "../figma_app/763686";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import l from "classnames";
import { parsePxInt, parsePxNumber } from "../figma_app/783094";
import { fetchShelvesForShelfTypeThunk } from "../figma_app/216696";
import { jsFullscreenPreventEventCaptureKeys, jsFullscreenPreventEventCapture } from "../figma_app/8833";
import { TrackingProvider } from "../figma_app/831799";
import { designCopyToSlidesAtom } from "../figma_app/223206";
import { overlayStateAtom } from "../905/12032";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { getElementByDataTarget } from "../905/797478";
import { getSidebarSplitPosition } from "../figma_app/740163";
import { _o } from "../figma_app/701001";
import { useAppModelProperty } from "../figma_app/722362";
import { useCurrentFileKey } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { getObservableValue } from "../figma_app/84367";
import { CommunityPageType } from "../figma_app/45218";
import { FDocumentType } from "../905/862883";
import { recentItemsThunks } from "../905/381612";
import { Ye } from "../figma_app/32128";
import { JT } from "../figma_app/632248";
import { wj, qy } from "../figma_app/862289";
import { wd } from "../9410/236102";
import { useHasValidSceneSlideTheme, useIsFullscreenReady } from "../figma_app/21029";
import { G as _$$G } from "../9410/312268";
import { Kt } from "../figma_app/835688";
import { l as _$$l } from "../9410/430547";
import { useClickOutside } from "../905/1768";
import { q } from "../9410/847736";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { ModalContainer } from "../figma_app/918700";
import { vN, Jn, S7 } from "../7222/396421";
import { uRR, M$q } from "../figma_app/27776";
import { draftModeAtomFamily, booleanAtomFamily, selectionAtomFamily } from "../figma_app/60023";
import { Ji } from "../figma_app/553488";
import { ij } from "../9410/148230";
var d = l;
function G({
  children: e
}) {
  let {
    canDismiss,
    maybeUseLightTemplateOnDismiss
  } = vN();
  return jsx(ModalContainer, {
    className: d()("slides_template_modal--templateModal--GmDGm", jsFullscreenPreventEventCaptureKeys),
    size: parsePxInt(uRR),
    onHide: maybeUseLightTemplateOnDismiss,
    tintedModalBackground: !0,
    disableClickOutsideToHide: !canDismiss,
    enableEscapeToClose: canDismiss,
    "data-testid": "slides-template-modal",
    children: jsx("div", {
      className: cssBuilderInstance.overflowHidden.$,
      style: {
        height: "600px"
      },
      children: e
    })
  });
}
export function $$V1() {
  let [e, t] = useAtomValueAndSetter(draftModeAtomFamily);
  let i = getSidebarSplitPosition();
  let s = _o();
  let l = Ye();
  let m = useDispatch<AppDispatch>();
  let f = useCurrentUserOrg();
  let g = useRef(null);
  if (useClickOutside(() => t(!1), {
    closeOnEsc: !0,
    ignore: [g, getElementByDataTarget("slides-template-button"), getElementByDataTarget(_$$G), getElementByDataTarget(_$$l)]
  }), useEffect(() => {
    m(recentItemsThunks.fetchTemplatesMetadata({
      key: FDocumentType.Slides,
      orgId: f?.id
    }));
    m(fetchShelvesForShelfTypeThunk({
      shelfType: CommunityPageType.SLIDES_TEMPLATE_MODAL
    }));
  }, [f?.id, m]), !e) return null;
  let b = l ? 70 + s : parsePxNumber(M$q) + s;
  return jsx(TrackingProvider, {
    name: "Slides Template Picker",
    children: jsx("div", {
      className: d()(ij, jsFullscreenPreventEventCapture),
      style: {
        top: b,
        left: l ? 12 : i + 12,
        width: 408,
        height: window.innerHeight - b - 72
      },
      ref: g,
      "data-testid": "slides-template-picker",
      children: jsx(Jn.Provider, {
        value: Ji.PICKER,
        children: jsx(q, {})
      })
    })
  });
}
export function $$W0() {
  let e = useAppModelProperty("isReadOnly");
  let t = useHasValidSceneSlideTheme();
  let i = !!S7();
  let n = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []).flat().length > 0;
  let a = useAtomWithSubscription(booleanAtomFamily);
  let l = useIsFullscreenReady();
  let d = useAtomWithSubscription(overlayStateAtom);
  let c = useAtomWithSubscription(userFlagExistsAtomFamily(Kt)).data;
  let u = useAtomWithSubscription(selectionAtomFamily);
  let p = useAtomWithSubscription(designCopyToSlidesAtom);
  let {
    state
  } = wj(JT.BOARD_TO_DECK);
  let x = useCurrentFileKey();
  let y = wd();
  return a || p && p.fileKey && !a || e || !c || y || !l || t || i || n || d && !u || state === qy.RUNNING ? null : jsx(TrackingProvider, {
    name: "Slides Template Overlay Modal",
    properties: {
      productType: "slides",
      fileKey: x
    },
    children: jsx(Jn.Provider, {
      value: Ji.OVERLAY_MODAL,
      children: jsx(G, {
        children: jsx(q, {
          showCloseButton: !0
        })
      })
    })
  });
}
export const g = $$W0;
export const h = $$V1;