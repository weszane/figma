import { jsxs, jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { $n } from "../905/521428";
import { SelectionPaintHelpers } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { y as _$$y } from "../figma_app/404310";
import { getI18nString, renderI18nText } from "../905/303541";
import { X } from "../figma_app/521331";
import { M } from "../469e6e40/302359";
import { Ku } from "../figma_app/740163";
import { selectOpenFileKey } from "../figma_app/516028";
import { w$ } from "../figma_app/646357";
import { AT } from "../figma_app/633080";
import { Af, Gz, DP } from "../figma_app/803932";
import { VZ } from "../figma_app/727192";
import { q } from "../905/296913";
import { fI } from "../figma_app/626177";
export function $$f0({
  hideBorder: e,
  noPadding: t,
  isSubsection: a
}) {
  let {
    selectionVariables,
    selectionStyles,
    selectionValues
  } = M();
  let g = useSelector(selectOpenFileKey);
  let f = useSelector(e => e.mirror.selectionPaints.emptyDueToLimitExceeded);
  let {
    visibleItems,
    showMoreButton
  } = _$$y({
    items: [...selectionVariables, ...selectionStyles, ...selectionValues],
    shouldResetOnSelectionChange: !0
  });
  return f || visibleItems.length ? jsxs(VZ, {
    title: getI18nString("dev_handoff.selection_colors"),
    recordingKey: "handoffColorStyles",
    additionalHeaders: a ? void 0 : jsx(Af, {}),
    fadedTitle: a,
    snugTitle: a,
    noPadding: t,
    noBorder: e,
    isSubsection: a,
    children: [f && jsx(fI, {
      children: jsx("div", {
        className: "selection_colors_panel--ignoreLimitButton--US3qr",
        children: jsx($n, {
          variant: "secondary",
          onClick: () => {
            trackEventAnalytics("Show Selection Paints For Large Selection", {
              fileKey: g || ""
            });
            SelectionPaintHelpers.ignoreLimitWhenCollectingPaints();
          },
          children: renderI18nText("dev_handoff.selection_colors.show_colors")
        })
      })
    }), visibleItems.map((e, t) => e.type === q.STYLE ? jsx(j, {
      colorStyle: e
    }, t) : jsx(y, {
      colorValue: e
    }, t)), showMoreButton]
  }) : null;
}
function j({
  colorStyle: e
}) {
  let {
    dsStyle,
    styleGUIDs
  } = e;
  w$(dsStyle);
  let s = dsStyle.value;
  dsStyle.kind === AT.SUBSCRIBED_WITHOUT_LIBRARY && (s.style_type = "FILL", s.node_id = dsStyle.value.node_id);
  let i = Ku();
  return jsx(Gz, {
    color: e,
    format: i,
    onMouseEnter: () => SelectionPaintHelpers.highlightOnlySameStyleInSublayers(styleGUIDs),
    onMouseLeave: () => SelectionPaintHelpers.highlightOnlySameStyleInSublayers([])
  });
}
function y({
  colorValue: e
}) {
  let {
    paint,
    encodedPaint,
    valueFormatter
  } = e;
  let i = Ku();
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
    format: i,
    onMouseEnter,
    onMouseLeave
  }) : jsx(DP, {
    formattableColor: e,
    format: i,
    onMouseEnter,
    onMouseLeave
  });
}
export const V = $$f0;