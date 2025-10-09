import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { getI18nString } from "../905/303541";
import { createNewSlideHandler } from "../5132/642384";
import { s as _$$s } from "../5430/913603";
import { Q } from "../5430/345616";
import { WorkspaceSelectorModal } from "../905/456042";
import { vQ } from "../5430/664984";
import { getResourceActionText } from "../figma_app/777551";
import { ResourceTypeEnum } from "../figma_app/306946";
import { showModalHandler } from "../905/156213";
import { COMMUNITY_MIN_WIDTH } from "../figma_app/350203";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { IE } from "../5430/231178";
import { selectCurrentUser } from "../905/372672";
import { FileTypeEnum } from "../905/71785";
import { KindEnum } from "../905/129884";
import { isResourceHubContext } from "../5132/203178";
import { nu, uD } from "../5430/774694";
export function $$T0({
  resource: e,
  enableWideButtonForStickyFooter: t
}) {
  let r = IE(e);
  let T = useDispatch<AppDispatch>();
  let I = usePrefersMediaQuery(`(max-width: ${COMMUNITY_MIN_WIDTH}px)`);
  let N = isResourceHubContext();
  let E = selectCurrentUser();
  let S = useCallback(() => {
    if (I) {
      T(showModalHandler({
        type: _$$s,
        data: {
          dispatch: T,
          editorType: FileTypeEnum.SLIDES
        }
      }));
      return;
    }
    let t = createNewSlideHandler(e => {
      trackEventAnalytics("try_it_out_drafts_picker_menu_opened", r);
      T(showModalHandler({
        type: WorkspaceSelectorModal,
        data: {
          payload: e
        }
      }));
    }, {
      skipWorkspaceSelection: N,
      userId: E?.id
    });
    T(t(e));
  }, [T, e, r, I, N, E]);
  let R = vQ(T);
  let k = getResourceActionText(ResourceTypeEnum.SLIDE_TEMPLATE);
  let A = jsx("div", {
    "data-testid": "slide-template-use-button",
    className: nu,
    children: jsx("div", {
      className: uD,
      children: k
    })
  });
  if (!R) {
    let e = getI18nString("community.use_slide_template.disabled_tooltip");
    return jsx(TrackingProvider, {
      name: "slide_template_use_button",
      properties: {
        trackingDescriptor: UpgradeAction.SLIDE_TEMPLATE_USE_BUTTON,
        ...r,
        isEnabled: !1
      },
      children: jsx("div", {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": e,
        "data-tooltip-show-immediately": !0,
        children: A
      })
    });
  }
  return jsx(TrackingProvider, {
    name: "slide_template_use_button",
    properties: {
      trackingDescriptor: UpgradeAction.SLIDE_TEMPLATE_USE_BUTTON,
      ...r,
      isEnabled: !0
    },
    children: jsx(Q, {
      buttonText: k,
      onClick: S,
      useNoIconStyle: !0,
      editorType: FileTypeEnum.SLIDES,
      enableWideButtonForStickyFooter: t,
      dataTestId: "slide-template-use-button"
    })
  });
}
export const l = $$T0;
