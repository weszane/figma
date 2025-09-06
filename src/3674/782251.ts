import { jsxs, jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { $n } from "../905/521428";
import { Osy } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { y as _$$y } from "../figma_app/404310";
import { getI18nString, renderI18nText } from "../905/303541";
import { X } from "../figma_app/521331";
import { M } from "../469e6e40/302359";
import { Ku } from "../figma_app/740163";
import { sS } from "../figma_app/516028";
import { w$ } from "../figma_app/646357";
import { AT } from "../figma_app/633080";
import { Af, Gz, DP } from "../figma_app/803932";
import { VZ } from "../figma_app/727192";
import { q } from "../905/296913";
import { fI } from "../figma_app/626177";
export function $$y0({
  hideBorder: e,
  noPadding: t,
  isSubsection: n
}) {
  let {
    selectionVariables,
    selectionStyles,
    selectionValues
  } = M();
  let g = useSelector(sS);
  let y = useSelector(e => e.mirror.selectionPaints.emptyDueToLimitExceeded);
  let {
    visibleItems,
    showMoreButton
  } = _$$y({
    items: [...selectionVariables, ...selectionStyles, ...selectionValues],
    shouldResetOnSelectionChange: !0
  });
  return y || visibleItems.length ? jsxs(VZ, {
    title: getI18nString("dev_handoff.selection_colors"),
    recordingKey: "handoffColorStyles",
    additionalHeaders: n ? void 0 : jsx(Af, {}),
    fadedTitle: n,
    snugTitle: n,
    noPadding: t,
    noBorder: e,
    isSubsection: n,
    children: [y && jsx(fI, {
      children: jsx("div", {
        className: "selection_colors_panel--ignoreLimitButton--US3qr",
        children: jsx($n, {
          variant: "secondary",
          onClick: () => {
            trackEventAnalytics("Show Selection Paints For Large Selection", {
              fileKey: g || ""
            });
            Osy.ignoreLimitWhenCollectingPaints();
          },
          children: renderI18nText("dev_handoff.selection_colors.show_colors")
        })
      })
    }), visibleItems.map((e, t) => e.type === q.STYLE ? jsx(b, {
      colorStyle: e
    }, t) : jsx(j, {
      colorValue: e
    }, t)), showMoreButton]
  }) : null;
}
function b({
  colorStyle: e
}) {
  let {
    dsStyle,
    styleGUIDs
  } = e;
  w$(dsStyle);
  let i = dsStyle.value;
  dsStyle.kind === AT.SUBSCRIBED_WITHOUT_LIBRARY && (i.style_type = "FILL", i.node_id = dsStyle.value.node_id);
  let o = Ku();
  return jsx(Gz, {
    color: e,
    format: o,
    onMouseEnter: () => Osy.highlightOnlySameStyleInSublayers(styleGUIDs),
    onMouseLeave: () => Osy.highlightOnlySameStyleInSublayers([])
  });
}
function j({
  colorValue: e
}) {
  let {
    paint,
    encodedPaint,
    valueFormatter
  } = e;
  let o = Ku();
  let {
    isVariableRow,
    onMouseEnter,
    onMouseLeave,
    variable,
    variableDisplayName
  } = X({
    ...paint,
    encodedPaint,
    valueFormatter
  });
  return isVariableRow ? jsx(DP, {
    formattableColor: {
      ...e,
      variable: {
        variable,
        variableDisplayName
      }
    },
    format: o,
    onMouseEnter,
    onMouseLeave
  }) : jsx(DP, {
    formattableColor: e,
    format: o,
    onMouseEnter,
    onMouseLeave
  });
}
export const V = $$y0;