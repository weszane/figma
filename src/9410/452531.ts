import { jsx } from "react/jsx-runtime";
import { FAf } from "../figma_app/763686";
import { WY } from "../figma_app/387100";
import { UN } from "../905/700578";
import { getInitialOptions } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { $z } from "../figma_app/831799";
import { Lh, D8 } from "../figma_app/242339";
import { wn, HQ, Le, zu, GF, NI, JJ } from "../figma_app/61403";
import { Of } from "../figma_app/631279";
import { W } from "../9410/216737";
import { Ut, $j, qw, x0, _q, A8, IM, YH, yz, U4, zk, wG, bO, AO, HX, e7 } from "../9410/837048";
import { Vr } from "../figma_app/151869";
import { B, P } from "../figma_app/846647";
export function $$y0(e, t) {
  let i = wn.FORMAT_TEXT;
  let {
    tutorialPlayedUserFlag,
    stepCompletedUserFlag
  } = Of(i, t);
  return {
    name: i,
    tutorialPlayedUserFlag,
    stepCompletedUserFlag,
    duration: t ? 10500 : 8500,
    steps: function (e) {
      let t = [];
      t.push({
        type: HQ.SET_PROPERTIES_PANEL_TAB,
        tab: FAf.DESIGN
      });
      e && t.push({
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => Ut(e, $j),
        prioritizeSelectedNode: !0,
        nodeNameForLogging: Le.CHERRIES_FRAME_GROWN_TEXT,
        additionalDelay: 1e3
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: B,
        offset: {
          x: -150,
          y: -50
        },
        cursorBotMovementAnimationDuration: 800
      }, {
        type: HQ.SET_CHAT,
        message: "Change how your text looks here.",
        additionalDelay: 1500
      });
      t.push({
        type: HQ.SET_CURSOR_DIRECTION,
        direction: zu.RIGHT
      }, {
        type: HQ.SET_CHAT,
        message: "Pick your style, size, alignment, and more.",
        additionalDelay: 1200
      });
      e ? t.push({
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => Ut(e, qw),
        nodeNameForLogging: Le.CHERRIES_FRAME_CHERRIES_TEXT,
        prioritizeSelectedNode: !0
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.TEXT_PANEL, "font-style-button"),
        position: {
          x: GF.LEFT,
          y: NI.CENTER
        },
        cursorBotMovementAnimationDuration: 500,
        additionalDelay: 1e3
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: {
          fontSize: 20,
          fontStyle: x0,
          lineHeight: _q
        }
      }, {
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => Ut(e, A8),
        nodeNameForLogging: Le.CHERRIES_FRAME_PRICE_TEXT
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: {
          fillPaints: IM(YH),
          fontSize: 20,
          fontStyle: x0,
          lineHeight: _q,
          textAlignHorizontal: "RIGHT"
        }
      }, {
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => Ut(e, $j),
        nodeNameForLogging: Le.CHERRIES_FRAME_GROWN_TEXT
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: {
          fillPaints: IM(yz),
          fontSize: 16,
          lineHeight: U4
        },
        additionalDelay: 1500
      }) : t.push({
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.TEXT_PANEL, "font-picker-button"),
        position: {
          x: GF.LEFT,
          y: NI.CENTER
        },
        cursorBotMovementAnimationDuration: 600,
        additionalDelay: 500
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: e => ({
          fontFamily: e.fontName.family === zk ? wG.family : zk
        }),
        additionalDelay: 300
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.TEXT_PANEL, "font-style-button"),
        position: {
          x: GF.LEFT,
          y: NI.CENTER
        },
        cursorBotMovementAnimationDuration: 600,
        additionalDelay: 500
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: e => ({
          fontStyle: e.fontName.style === bO ? wG.style : bO
        }),
        additionalDelay: 300
      }, {
        type: HQ.TARGET_DOM_NODE,
        dataOnboardingKey: Lh(D8.SCRUBBABLE_CONTROL, "font-size"),
        position: {
          x: GF.LEFT,
          y: NI.CENTER
        },
        cursorBotMovementAnimationDuration: 600
      }, {
        type: HQ.FOCUS_INPUT,
        selector: `[data-onboarding-key="${Lh(D8.SCRUBBABLE_CONTROL, "font-size")}"] input`,
        additionalDelay: 500
      }, {
        type: HQ.UPDATE_SELECTED_NODE_PROPERTIES,
        properties: e => ({
          fontSize: 16 === e.fontSize ? 12 : 16
        }),
        additionalDelay: 1500
      });
      t.push({
        type: HQ.CLEAR_CHAT
      });
      return t;
    }(t),
    startingViewportFrameType: t ? JJ.TEXT_PANEL : JJ.PROPERTIES_PANEL,
    startingState: t ? {
      centerNodeMatcher: e => AO(e, 4),
      resetStartingState: {
        hubFileId: getInitialOptions()?.cursor_bot?.ginger_hub_file_id,
        nodeHeight: HX,
        nodeWidth: e7
      }
    } : {
      centerNodeMatcher: e => "TEXT" === e.type
    },
    TooltipElement: i => {
      let n = Vr();
      let {
        primaryCtaProps,
        secondaryCtaProps,
        onPrimaryCtaClick,
        onSecondaryCtaClick
      } = W({
        isReplay: e,
        props: i
      });
      return jsx(P, {
        bodyText: _$$t("cursor_bot.use_the_design_panel_to_turn_basic_text_into_titles"),
        fromCursorBot: !0,
        getNodeToSelect: t ? () => WY(e => "TEXT" === e.type && (e.name === $j || "Grown in Tracy, CA" === e.name), UN()) : () => n?.type === "TEXT" ? n : WY(e => "TEXT" === e.type, UN()),
        isFollowUp: i.isFollowUp,
        lowerLeftText: i.onClickBack ? jsx($z, {
          onClick: i.onClickBack,
          className: _$$s.textInherit.bgTransparent.$,
          trackingProperties: {
            ctaTrackingDescriptor: _$$c.BACK
          },
          children: tx("cursor_bot.back")
        }) : void 0,
        onClose: i.onClickClose,
        onPrimaryCtaClick,
        onSecondaryCtaClick,
        primaryCtaProps,
        secondaryCtaProps,
        skip: i.skip,
        title: t ? _$$t("cursor_bot.pick_the_perfect_font") : _$$t("cursor_bot.and_pick_the_perfect_font")
      });
    }
  };
}
export const Z = $$y0;