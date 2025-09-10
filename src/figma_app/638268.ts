import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useRef, useState, useContext, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { E as _$$E } from "../905/632989";
import { TextDecorationType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { A as _$$A } from "../vendor/850789";
import { useHandleMouseEvent } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { Ui } from "../905/709171";
import { isInvalidValue } from "../905/216495";
import { kl } from "../905/275640";
import { w$ } from "../figma_app/646357";
import { getBasename } from "../905/309735";
import { getStyleThumbnail } from "../905/405710";
import { Q as _$$Q } from "../figma_app/104130";
import { SubscriptionStatusEnum } from "../figma_app/633080";
import { Ib } from "../905/129884";
import { Pc } from "../figma_app/463500";
import { P as _$$P } from "../905/201667";
import { xo, zi } from "../905/824449";
import { AH } from "../905/571648";
import { Z as _$$Z } from "../905/248978";
import { Z as _$$Z2 } from "../905/183586";
import { p5, A as _$$A2, lG, Tu, hg, p3, Rb, gE } from "../figma_app/433906";
var c = d;
export let $$O0 = memo(function ({
  displayAsDonut: e,
  libraryKey: t,
  isNarrow: r,
  onClick: d,
  recordingKey: O,
  selected: R,
  dsStyle: L,
  styleType: P,
  itemIndex: D,
  elementType: k
}) {
  let M = useRef(null);
  let [F, j] = useState(!1);
  let U = _$$P();
  let B = _$$A(U, 500);
  let {
    useLargePreviewRows
  } = useContext(_$$Q);
  useEffect(() => {
    let e = M.current;
    j(!!(e && e.offsetWidth < e.scrollWidth));
  }, [M, L?.name, B]);
  let V = kl("numTextStyleOverrides");
  let H = kl("textStyleOverrideType");
  let z = kl("anyNonFrameLikesSelected");
  let W = !!(isInvalidValue(z) || z);
  let K = function (e, t) {
    if (!e || isInvalidValue(e)) return "";
    if (1 === e) switch (TextDecorationType[t]) {
      case TextDecorationType.SEMANTIC_WEIGHT:
        return "B";
      case TextDecorationType.SEMANTIC_ITALIC:
        return "I";
    }
    return e.toString();
  }(V, H);
  let Y = "TEXT" === P && void 0 !== V && !isInvalidValue(V) && V > 0 && K.length > 0;
  let $ = AH(L?.key || null, L);
  let X = useMemo(() => L ? Ui(L, t) ? {
    kind: SubscriptionStatusEnum.LOCAL,
    value: L
  } : !getFeatureFlags().ds_zombie_styles_fixes || $ && $.data && $.data.content_hash === L.content_hash ? void 0 : {
    kind: SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY,
    value: L
  } : void 0, [L, t, $]);
  w$(X);
  let q = useHandleMouseEvent(O, "click", useCallback(e => {
    d?.(e);
  }, [d]));
  let J = useSelector(e => e.library);
  let Z = R ? p5 : _$$A2;
  r && (Z = `${Z} ${lG}`);
  d || (Z = `${Z} ${Tu}`);
  let Q = L && xo(getStyleThumbnail(L) || J.local.thumbnails[L.node_id]?.css || null, W) || null;
  return useLargePreviewRows ? jsx(_$$Z2, {
    dsStyle: L,
    displayAsDonut: e,
    onPreviewClick: q,
    selected: !!R,
    previewActive: !!R,
    anyNonFrameLikesSelected: W
  }) : jsxs(_$$E, {
    className: Z,
    onClick: q,
    htmlAttributes: Q ? {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": Q
    } : {
      "data-tooltip-style-description": L ? L.description : void 0,
      "data-tooltip-style-name": L ? getBasename(L.name) : getI18nString("design_systems.styles.custom"),
      "data-tooltip-style-element-type": k,
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip": L && L.description || F ? _$$Z : ""
    },
    children: [L && jsx("div", {
      className: hg,
      children: jsx(zi, {
        dsStyle: L,
        displayAsDonut: e,
        itemIndex: D,
        anyNonFrameLikesSelected: W
      })
    }), jsx("div", {
      className: c()(p3, {
        [Rb]: !L
      }),
      ref: M,
      dir: "auto",
      children: L ? Pc(L.name) : getI18nString("design_systems.styles.custom")
    }), Y && jsxs("div", {
      className: [gE, p3].join(" "),
      children: ["(", K, ")"]
    })]
  });
});
export const g = $$O0;