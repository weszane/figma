import { getFeatureFlags } from "../905/601108";
import { IntegrationUtils } from "../figma_app/469876";
import { Hm } from "../figma_app/658673";
import { jsx } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { DesignGraphElements, Fullscreen } from "../figma_app/763686";
import { LR } from "../figma_app/120210";
import { Ib } from "../905/129884";
import { pN } from "../9410/983733";
import { hx } from "../figma_app/630194";
import { gd } from "../figma_app/837467";
import { I as _$$I } from "../figma_app/552397";
import { aO, wv, XU, Ch, Gb, nl, Rz, hM, EB, PW, nb, oN } from "../figma_app/801324";
import { fK } from "../figma_app/300024";
import { uW, Qq, nK, TC, tp } from "../figma_app/731560";
import { s as _$$s } from "../2b17fec9/641273";
import { useAtomWithSubscription } from "../figma_app/27355";
import { CB } from "../figma_app/442259";
import { D1 } from "../9410/67768";
import { Bu } from "../figma_app/604494";
import { V } from "../9410/365876";
import { iT } from "../figma_app/765161";
import { U } from "../9410/630757";
let j = memo(function () {
  let e = useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.SECTION);
  let t = LR();
  let i = useCallback(() => {
    t(!1);
    Fullscreen?.triggerActionInUserEditScope(e ? "set-tool-default" : "set-tool-section", {
      source: fK
    });
  }, [e, t]);
  return jsx(_$$I, {
    toolType: "section",
    recordingKey: hx("section"),
    isSelected: e,
    className: uW,
    onClick: i,
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": "set-tool-section",
    hasOpenSubmenu: !1,
    onboardingKey: pN,
    children: t => jsx(gd, {
      toolType: "section",
      inactiveIcon: jsx(aO, {}),
      hoveredIcon: jsx(wv, {}),
      activeIcon: jsx(XU, {}),
      isSelected: e,
      isHovered: t
    })
  });
});
let y = memo(function () {
  let e = useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.TYPE);
  let t = LR();
  let i = useCallback(() => {
    t(!1);
    Fullscreen?.triggerActionInUserEditScope(e ? "set-tool-default" : "set-tool-type", {
      source: fK
    });
  }, [e, t]);
  return jsx(_$$I, {
    toolType: "text",
    recordingKey: hx("text"),
    isSelected: e,
    className: Qq,
    onClick: i,
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": "set-tool-type",
    hasOpenSubmenu: !1,
    children: t => jsx(gd, {
      toolType: "text",
      inactiveIcon: jsx(Ch, {}),
      hoveredIcon: jsx(Gb, {}),
      activeIcon: jsx(nl, {}),
      isSelected: e,
      isHovered: t
    })
  });
});
let v = memo(function () {
  let e = useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.COMMENTS);
  let t = useCallback(() => {
    Fullscreen?.triggerActionInUserEditScope(e ? "set-tool-default" : "set-tool-comments", {
      source: fK
    });
  }, [e]);
  return jsx(_$$I, {
    toolType: "comments",
    recordingKey: hx("comments"),
    isSelected: e,
    className: nK,
    onClick: t,
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": "set-tool-comments",
    hasOpenSubmenu: !1,
    children: t => jsx(gd, {
      toolType: "comments",
      inactiveIcon: jsx(Rz, {}),
      hoveredIcon: jsx(hM, {}),
      activeIcon: jsx(EB, {}),
      isSelected: e,
      isHovered: t
    })
  });
});
let N = memo(function () {
  let e = V();
  let t = useAtomWithSubscription(Bu);
  let {
    Inactive,
    GrayHover,
    Active
  } = U();
  let a = iT();
  return jsx(_$$I, {
    toolType: "quick-actions-v2",
    recordingKey: hx("toggle-actions-menu"),
    isSelected: t,
    className: TC,
    onClick: () => {
      a && CB.closeWheel();
      e();
    },
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": "toggle-menu",
    onboardingKey: D1,
    hasOpenSubmenu: !1,
    children: e => jsx(gd, {
      toolType: "quick-actions-v2",
      inactiveIcon: jsx(Inactive, {}),
      hoveredIcon: jsx(GrayHover, {}),
      activeIcon: jsx(Active, {}),
      isSelected: t,
      isHovered: e
    })
  });
});
let A = memo(function () {
  let e = useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.TABLE);
  let t = LR();
  let i = useCallback(() => {
    t(!1);
    Fullscreen?.triggerActionInUserEditScope(e ? "set-tool-default" : "set-tool-table", {
      source: fK
    });
  }, [e, t]);
  return jsx(_$$I, {
    toolType: "table",
    recordingKey: hx("table"),
    isSelected: e,
    className: tp,
    onClick: i,
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": "set-tool-table",
    hasOpenSubmenu: !1,
    children: t => jsx(gd, {
      toolType: "table",
      inactiveIcon: jsx(PW, {}),
      hoveredIcon: jsx(nb, {}),
      activeIcon: jsx(oN, {}),
      isSelected: e,
      isHovered: t
    })
  });
});
let O = new Map([["text", {
  toolType: "text",
  Component: y,
  action: "set-tool-type"
}], ["stamp", {
  toolType: "stamp",
  Component: _$$s,
  action: "set-tool-stamp"
}], ["section", {
  toolType: "section",
  Component: j,
  action: "set-tool-section"
}], ["table", {
  toolType: "table",
  Component: A,
  action: "set-tool-table"
}], ["universal-insert", {
  toolType: "universal-insert",
  Component: Hm,
  action: "browse-all-resources-dlt-overflow"
}], ["comments", {
  toolType: "comments",
  Component: v,
  action: "set-tool-comments"
}], ["quick-actions-v2", {
  toolType: "quick-actions-v2",
  Component: N,
  action: "toggle-menu"
}]]);
export function $$k1() {
  let e = function () {
    let e = ["text", "section", "table", "stamp"];
    getFeatureFlags().figjam_quick_actions_v2 && e.push("quick-actions-v2");
    return e;
  }();
  IntegrationUtils.isGoogleClassroomIntegration() && e.push("comments");
  return e;
}
function R(e) {
  return 0 === e ? 549 : 573 + 56 * e;
}
export function $$M0(e) {
  let t = [];
  let i = $$k1().length;
  t.push({
    stage: "FULL",
    thresholdWidth: R(i),
    numPrimaryTools: i
  });
  5 === i && t.push({
    stage: "MINIMIZED_FOUR",
    thresholdWidth: R(4),
    numPrimaryTools: 4
  });
  return t = t.concat([{
    stage: "MINIMIZED_THREE",
    thresholdWidth: R(3),
    numPrimaryTools: e ? 2 : 3
  }, {
    stage: "MINIMIZED_TWO",
    thresholdWidth: R(2),
    numPrimaryTools: e ? 1 : 2
  }, {
    stage: "MINIMIZED_ONE",
    thresholdWidth: R(1),
    numPrimaryTools: e ? 0 : 1
  }, {
    stage: "MINIMIZED_ZERO",
    thresholdWidth: 549,
    numPrimaryTools: 0
  }, {
    stage: "MINIMIZED",
    thresholdWidth: 437,
    numPrimaryTools: 0
  }, {
    stage: "CUT_OFF",
    thresholdWidth: 0,
    numPrimaryTools: 0
  }]);
}
export function $$D2() {
  let e = [];
  for (let t of $$k1()) {
    let i = function () {
      let e = new Map();
      for (let t of new Set(["text", "stamp", "section", "table", "comments", "quick-actions-v2"])) O.has(t) && e.set(t, O.get(t));
      return e;
    }().get(t);
    i && (e = e.concat(i));
  }
  return e;
}
export function $$P3(e) {
  return $$D2().slice(0, e).map(e => e.toolType);
}
export const az = $$M0;
export const dQ = $$k1;
export const f7 = $$D2;
export const Q6 = $$P3;
