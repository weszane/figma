import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import o from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { ErrorBoundaryCrash } from "../905/751457";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { fC } from "../figma_app/968813";
import { fG } from "../figma_app/973927";
import { IntegrationUtils } from "../figma_app/469876";
import { useIsVotingSessionJoined } from "../905/486443";
import { useCurrentUserOrg } from "../905/845253";
import { getUserId } from "../905/372672";
import { useIsLoading } from "../905/18797";
import { FDocumentType } from "../905/862883";
import { KindEnum } from "../905/129884";
import { cd } from "../905/381612";
import { TabCategory } from "../905/42189";
import { c5 } from "../905/526509";
import { hx } from "../figma_app/630194";
import { ws, NT } from "../3276/316480";
import { Hm } from "../figma_app/658673";
import { E as _$$E, h as _$$h } from "../3276/806373";
import { gd } from "../figma_app/837467";
import { XN, ti } from "../figma_app/937735";
import { I as _$$I } from "../figma_app/552397";
import { nX, ZH, cs } from "../figma_app/801324";
import { yl, b as _$$b } from "../figma_app/300024";
import { r as _$$r } from "../3276/289511";
import { YCy } from "../figma_app/27776";
import { JY, VF, s as _$$s2, r3, f_, Ge, V6 } from "../3276/694413";
import { z6, ac, vy, qs } from "../figma_app/731560";
var l = o;
let P = YCy;
let F = [{
  src: buildUploadUrl("9cd2eb2ff31cb221dce81ca1e67aa51e12b24166"),
  zIndex: 0,
  width: 50,
  height: 50,
  translateStart: {
    x: 42,
    y: 36
  },
  rotateStart: -15,
  translateEnd: {
    x: 42,
    y: 36
  },
  rotateEnd: -15
}, {
  src: buildUploadUrl("276fdbb8f6edbcb958f84235ebfc58b63eab0fc2"),
  zIndex: 1,
  width: 50,
  height: 50,
  translateStart: {
    x: 95,
    y: 36
  },
  rotateStart: 15,
  translateEnd: {
    x: 95,
    y: 36
  },
  rotateEnd: 15
}, {
  src: buildUploadUrl("94db9cf93e2a26f927d5f1a7f066f8b045985011"),
  zIndex: 2,
  width: 50,
  height: 50,
  translateStart: {
    x: 42,
    y: 66
  },
  rotateStart: -10,
  translateEnd: {
    x: 42,
    y: 66
  },
  rotateEnd: -10
}, {
  src: buildUploadUrl("004b50b1460d47029608e9aaa66c09c1c94c6741"),
  zIndex: 3,
  width: 50,
  height: 50,
  translateStart: {
    x: 95,
    y: 66
  },
  rotateStart: 10,
  translateEnd: {
    x: 95,
    y: 66
  },
  rotateEnd: 10
}];
function B({
  recentItems: e,
  toolbarIconScale: t,
  isModalOpen: i
}) {
  let n = ws(e);
  return jsx("div", {
    className: l()(z6, ac, JY),
    style: {
      width: 112 * t
    },
    children: F.map((e, a) => {
      var s;
      var o;
      let l = n[a];
      return jsx(G, {
        zIndex: P + 1 + e.zIndex,
        width: e.width * t,
        height: e.height * t,
        isModalOpen: i,
        transform: (s = {
          x: e.translateStart.x * t,
          y: e.translateStart.y * t
        }, o = e.rotateStart, `translate(calc(-50% + ${s.x}px), calc(-50% + ${s.y}px)) rotate(${o}deg)`),
        children: l ? jsx(_$$E, {
          item: l,
          width: e.width * t,
          height: e.height * t,
          disableTooltips: !0
        }) : jsx("img", {
          src: e.src,
          alt: "",
          className: VF
        })
      }, l?.id || e.src);
    })
  });
}
function U({
  onClick: e,
  isSelected: t,
  isHovered: i
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyCenter.mx20.h40.w40.$,
    children: jsx(_$$I, {
      toolType: "universal-insert-collage",
      recordingKey: hx("universal-insert-plus"),
      isSelected: t,
      hasOpenSubmenu: !1,
      onClick: e,
      "data-tooltip-type": KindEnum.LOOKUP,
      "data-tooltip": "browse-all-resources-dlt",
      "data-tooltip-offset-y": -2,
      children: jsx(gd, {
        toolType: "universal-insert-collage",
        inactiveIcon: jsx(nX, {}),
        hoveredIcon: jsx(ZH, {}),
        activeIcon: jsx(cs, {}),
        isSelected: t,
        isHovered: i
      })
    })
  });
}
function G({
  zIndex: e,
  width: t,
  height: i,
  transform: n,
  isModalOpen: a,
  children: s
}) {
  return jsx("div", {
    className: l()(_$$s2, {
      [r3]: a
    }),
    style: {
      zIndex: e,
      width: t,
      height: i,
      transform: n
    },
    children: jsx("div", {
      className: f_,
      children: s
    })
  });
}
export function $$K1(e, t) {
  let [i, r] = useState(!1);
  let a = useRef(!1);
  let s = useRef([]);
  s.current = t;
  useEffect(() => {
    e || a.current || (a.current = !0, async function () {
      let e = [];
      for (let t of s.current) t && e.push(new Promise(e => {
        let i = new Image();
        i.src = t;
        i.addEventListener("load", () => e());
        i.addEventListener("error", () => e());
      }));
      await Promise.all(e);
      r(!0);
    }());
  }, [e]);
  return i;
}
function H({
  toolbarIconScale: e
}) {
  let t = getUserId();
  let [i, o] = useState(!1);
  let l = useDispatch();
  let d = NT();
  let c = useAtomWithSubscription(c5);
  let u = useIsVotingSessionJoined();
  let b = useCurrentUserOrg();
  let S = useSelector(e => e.universalInsertModal.showing);
  let I = fG();
  let A = _$$r(S, c?.stage !== "FULL" ? TabCategory.MORE : void 0);
  useEffect(() => {
    l(cd.fetchTemplatesMetadata({
      key: FDocumentType.FigJam,
      orgId: b?.id
    }));
    l(cd.fetchWidgetsMetadata({
      key: FDocumentType.FigJam
    }));
    o(!0);
  }, [l, b?.id]);
  let R = useIsLoading(fC);
  let P = useIsLoading(cd.fetchTemplatesMetadata.loadingKeyForPayload({
    key: FDocumentType.FigJam
  }));
  let F = useIsLoading(cd.fetchWidgetsMetadata.loadingKeyForPayload({
    key: FDocumentType.FigJam
  }));
  let G = $$K1(!i || R || P || F, d.map(e => _$$h(e, I, t ?? void 0))) ? d.map(e => e.id || "").sort((e, t) => e.localeCompare(t)).join("") : "loading";
  let H = u && c?.stage === "MINIMIZED_ZERO" || c?.stage === "MINIMIZED" || c?.stage === "CUT_OFF";
  return jsx(XN, {
    alignment: "CENTER",
    children: jsx(_$$I, {
      toolType: "universal-insert-collage",
      recordingKey: hx("universal-insert-collage"),
      isSelected: S,
      className: IntegrationUtils.isGoogleClassroomIntegration() ? vy : qs,
      onClick: A,
      ariaLabel: "browse-all-resources-dlt",
      onboardingKey: yl,
      "data-does-not-dismiss-modal": !0,
      hasOpenSubmenu: S,
      children: t => jsx(ti, {
        isSelected: t,
        noScaleAnimation: !0,
        isRightEdge: !0,
        children: jsxs("div", {
          className: Ge,
          "data-element-target": _$$b,
          "data-cancel-insertable-resource-drag-and-drop": !0,
          children: [!H && jsx(B, {
            recentItems: d,
            toolbarIconScale: e,
            isModalOpen: S
          }, G), jsx(U, {
            onClick: A,
            isSelected: S,
            isHovered: t
          })]
        })
      })
    })
  });
}
function z() {
  return jsx(XN, {
    alignment: "CENTER",
    children: jsx("div", {
      "data-element-target": _$$b,
      className: V6,
      children: jsx(Hm, {})
    })
  });
}
export let $$V0 = memo(function ({
  toolbarIconScale: e
}) {
  return jsx(ErrorBoundaryCrash, {
    fallback: jsx(z, {}),
    boundaryKey: "UniversalInsertCollage",
    children: jsx(H, {
      toolbarIconScale: e
    })
  });
});
export const q = $$V0;
export const x = $$K1;