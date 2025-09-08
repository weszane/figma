import { jsx } from "react/jsx-runtime";
import { DesignWorkspace } from "../figma_app/763686";
import { WY, cy } from "../figma_app/387100";
import { getInitialOptions } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { $z } from "../figma_app/831799";
import { Lh, D8 } from "../figma_app/242339";
import { wn, HQ, Le, zu, GF, NI, JJ } from "../figma_app/61403";
import { Of } from "../figma_app/631279";
import { W } from "../9410/216737";
import { xK, Dl, IM, YI, Ui, ro, LW, HX, e7, TT, Q$ } from "../9410/837048";
import { W as _$$W } from "../figma_app/605682";
import { Z } from "../figma_app/731770";
export function $$x0(e, t) {
  let i = wn.FORMAT_FRAME;
  let {
    tutorialPlayedUserFlag,
    stepCompletedUserFlag
  } = Of(i, t);
  return {
    name: i,
    tutorialPlayedUserFlag,
    stepCompletedUserFlag,
    duration: t ? 17500 : 9400,
    steps: function (e) {
      let t = [];
      t.push({
        type: HQ.SET_PROPERTIES_PANEL_TAB,
        tab: DesignWorkspace.DESIGN
      });
      e ? t.push({
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => xK(e, Dl),
        nodeNameForLogging: Le.PRODUCT_FRAME_CHERRIES_FRAME,
        additionalDelay: 400
      }) : t.push({
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => "FRAME" === e.type,
        nodeNameForLogging: Le.NO_BASICS_FILE_FRAME,
        additionalDelay: 400,
        prioritizeSelectedNode: !0
      });
      t.push({
        type: HQ.SET_CURSOR_DIRECTION,
        direction: zu.RIGHT
      }, {
        type: HQ.SET_CHAT,
        message: "Change how your frames look here.",
        additionalDelay: 500
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: _$$W,
        offset: {
          x: -28,
          y: 132
        },
        position: {
          x: GF.LEFT,
          y: NI.TOP
        },
        cursorBotMovementAnimationDuration: 600
      }, {
        type: HQ.SET_VIEWPORT_FRAME_TYPE,
        viewportFrameType: JJ.PROPERTIES_PANEL,
        additionalDelay: 1500
      }, {
        type: HQ.SET_CHAT,
        message: e ? "For example: Add color..." : "For example: Their color!",
        additionalDelay: 1e3
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.PROPERTIES_PANEL_TITLE, "fill"),
        position: {
          x: GF.LEFT,
          y: NI.CENTER
        },
        additionalDelay: 500,
        cursorBotMovementAnimationDuration: 1e3
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: () => ({
          fillPaints: IM(e ? YI : Ui())
        }),
        additionalDelay: 0
      }, {
        type: HQ.FOCUS_INPUT,
        selector: `[data-onboarding-key="${Lh(D8.PAINT_PANEL_ROW, "paint-1-0")}"] input`,
        additionalDelay: 1500
      }, {
        type: HQ.CLEAR_CHAT
      });
      e && t.push({
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.PROPERTIES_PANEL_TITLE, "stroke"),
        position: {
          x: GF.LEFT,
          y: NI.CENTER
        },
        cursorBotMovementAnimationDuration: 300,
        additionalDelay: 300
      }, {
        type: HQ.SET_CHAT,
        message: "A border...",
        additionalDelay: 500
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: {
          strokePaints: IM(ro),
          strokeWeight: 2
        },
        additionalDelay: 10
      }, {
        type: HQ.FOCUS_INPUT,
        selector: `[data-onboarding-key="${Lh(D8.PAINT_PANEL_ROW, "paint-2-0")}"] input`,
        additionalDelay: 1500
      }, {
        type: HQ.SCROLL_PROPERTIES_PANEL,
        value: 0,
        additionalDelay: 500
      }, {
        type: HQ.CLEAR_CHAT
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.SCRUBBABLE_CONTROL, "corner-radius"),
        offset: {
          x: -25,
          y: 5
        },
        cursorBotMovementAnimationDuration: 700,
        additionalDelay: 300
      }, {
        type: HQ.SET_CHAT,
        message: "Or rounded corners!",
        additionalDelay: 500
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: {
          cornerRadius: LW
        },
        additionalDelay: 10
      }, {
        type: HQ.FOCUS_INPUT,
        selector: `[data-onboarding-key="${Lh(D8.SCRUBBABLE_CONTROL, "corner-radius")}"] input`,
        additionalDelay: 2500
      }, {
        type: HQ.CLEAR_CHAT
      });
      return t;
    }(t),
    startingState: t ? {
      centerNodeMatcher: e => xK(e, Dl),
      resetStartingState: {
        hubFileId: getInitialOptions()?.cursor_bot?.ginger_formatted_text_hub_file_id,
        nodeHeight: HX,
        nodeWidth: e7
      }
    } : {
      centerNodeMatcher: e => "FRAME" === e.type
    },
    TooltipElement: i => {
      let {
        primaryCtaProps,
        secondaryCtaProps,
        onPrimaryCtaClick,
        onSecondaryCtaClick
      } = W({
        isReplay: e,
        props: i
      });
      return jsx(Z, {
        bodyText: t ? getI18nString("cursor_bot.design_panel_can_change_objects") : getI18nString("cursor_bot.design_panel_is_key"),
        frameNodeMatcher: t ? e => WY(e => TT(e, Dl), e) || cy((e, t) => Q$(e, t), e) : void 0,
        fromCursorBot: !0,
        isFollowUp: i.isFollowUp,
        lowerLeftText: i.onClickBack ? jsx($z, {
          onClick: i.onClickBack,
          className: _$$s.textInherit.bgTransparent.$,
          trackingProperties: {
            ctaTrackingDescriptor: _$$c.BACK
          },
          children: renderI18nText("cursor_bot.back")
        }) : void 0,
        onClose: i.onClickClose,
        onPrimaryCtaClick,
        onSecondaryCtaClick,
        primaryCtaProps,
        secondaryCtaProps,
        skip: i.skip,
        title: getI18nString("cursor_bot.make_it_look_just_right")
      });
    }
  };
}
export const p = $$x0;