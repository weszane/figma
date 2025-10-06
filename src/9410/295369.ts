import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { noop } from 'lodash-es';
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { renderI18nText } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { e as _$$e } from "../905/621515";
import { isViewportPanning } from "../figma_app/62612";
import { N } from "../figma_app/268271";
import { TrackingKeyEnum } from "../905/696396";
import { OnboardingSequence } from "../905/152487";
import { mI } from "../9410/983167";
import { ArrowPosition } from "../905/858282";
import { Dv } from "../figma_app/419216";
import { YiU } from "../figma_app/6204";
import { Cb } from "../9410/659371";
let $$y2 = atom(!1);
let $$b1 = "organize";
function C({
  onClose: e
}) {
  let t = Cb();
  let i = isViewportPanning({
    subscribeToUpdates_expensive: t
  });
  useEffect(() => {
    t || e();
  }, [t, e]);
  return jsx("div", {
    style: {
      opacity: i ? 0 : 1,
      transition: "ease-in-out 0.1s all"
    },
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: $$b1,
      topPadding: -6,
      isBold: !0,
      fixedWidth: 316,
      arrowPosition: ArrowPosition.BOTTOM,
      onTargetLost: noop,
      children: jsx(mI, {
        bodyText: jsx("span", {
          style: {
            maxWidth: 184
          },
          children: renderI18nText("whiteboard.organize_menu.onboarding_text_base", {
            boldText: jsx("b", {
              children: renderI18nText("whiteboard.organize_menu.onboarding_text_bold_text")
            })
          })
        }),
        buttonText: renderI18nText("whiteboard.organize_menu.onboarding_dismiss_button_text"),
        onButtonClick: () => {
          e();
        }
      })
    })
  });
}
export function $$v0() {
  let [e, t] = useAtomValueAndSetter($$y2);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: YiU,
    priority: N.SECONDARY_MODAL
  });
  useEffect(() => {
    show({
      canShow: () => e
    });
  }, [e, show]);
  return jsx(OnboardingSequence, {
    isShowing,
    testId: "FigJamAISummarizationEntrpointPointerOverlay",
    children: jsx(TrackingProvider, {
      name: TrackingKeyEnum.AI_INLINE_MENU_ORGANIZE_SUMMARY_TOOLTIP,
      children: jsx(C, {
        onClose: () => {
          t(!1);
          complete();
        }
      })
    })
  });
}
export const Cw = $$v0;
export const Su = $$b1;
export const v = $$y2;