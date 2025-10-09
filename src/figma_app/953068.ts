import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useRef } from "react";
import { IconButton } from "../905/443068";
import { X as _$$X } from "../905/736922";
import { VariableDataType, VariableResolvedDataType } from "../figma_app/763686";
import { useAtomValueAndSetter } from "../figma_app/27355";
import d from "classnames";
import { pR } from "../vendor/330821";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString } from "../905/303541";
import { $Q } from "../figma_app/315578";
import { getResolvedVariableValueIfNotMixed } from "../figma_app/852050";
import { uV } from "../figma_app/151869";
import { ZQ, QZ, VZ, SH, ln } from "../figma_app/727192";
import { Cm, _p } from "../figma_app/826998";
import { oU } from "../figma_app/152690";
import { wG } from "../905/331989";
import { G as _$$G } from "../905/178509";
import { Qs, Tk, O7, cL, eR, P_, tl } from "../905/18906";
var c = d;
export function $$S0() {
  let {
    content,
    numSelected,
    numSelectedByType
  } = selectWithShallowEqual(e => ({
    content: e.mirror.selectionProperties.nodeText,
    numSelected: e.mirror.selectionProperties.numSelected,
    numSelectedByType: e.mirror.selectionProperties.numSelectedByType
  }));
  return 1 === numSelected && numSelectedByType?.TEXT === 1 && content ? jsx(A, {
    content,
    contentToCopy: content
  }) : null;
}
export function $$v1(e) {
  let {
    basisContent = "",
    changeContent = ""
  } = e;
  let a = useMemo(() => pR(basisContent, changeContent).map(e => {
    let t = e.added ? Qs : e.removed ? Tk : "";
    return jsx("span", {
      className: t,
      children: e.value
    }, e.value);
  }), [basisContent, changeContent]);
  return jsx(A, {
    content: jsx(Fragment, {
      children: a
    }),
    contentToCopy: changeContent,
    showVariable: !1
  });
}
function A({
  content: e,
  contentToCopy: t,
  showVariable: r = !0
}) {
  let {
    value,
    eventHandlers,
    isHovered
  } = ZQ(O7, O7);
  let [S, v] = useState(!1);
  let A = useRef(null);
  let x = oU("TEXT_DATA", {
    type: VariableDataType.STRING,
    resolvedType: VariableResolvedDataType.STRING,
    value: t
  });
  let N = x.variableDisplayName;
  let C = uV(x?.variable);
  let w = getResolvedVariableValueIfNotMixed(x?.variable?.node_id);
  let O = Cm(t, "text_content");
  let R = Cm(C, "text_variable");
  let L = isHovered || S;
  let P = jsxs(Fragment, {
    children: [jsx($Q, {
      matchingVars: x?.matchingVars,
      rowRef: A,
      isHovered: L,
      recordingKey: "content_panel"
    }), jsx("div", {
      className: cL,
      children: jsx(IconButton, {
        htmlAttributes: eventHandlers,
        onClick: O,
        "aria-label": getI18nString("inspect_panel.copy"),
        children: jsx(_$$X, {})
      })
    })]
  });
  let {
    collapsedInspectionPanelAtom,
    collapseEnabled
  } = QZ("content");
  let [M] = useAtomValueAndSetter(collapsedInspectionPanelAtom);
  let F = getI18nString("inspect_panel.property.content_text");
  let j = "string" == typeof e;
  return jsx(VZ, {
    title: F,
    hideHeader: !0,
    noPadding: !0,
    recordingKey: "content",
    children: jsxs("div", {
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      ref: A,
      children: [jsx(SH, {
        title: F,
        isHovered: L,
        recordingKey: "contentHeader",
        additionalHeaders: P,
        isCollapsedAtom: collapsedInspectionPanelAtom,
        collapseEnabled,
        collapsedHeaders: j ? jsx(_$$G, {
          text: e
        }) : void 0
      }), jsxs(ln, {
        isCollapsed: M,
        childrenWrapperClassname: eR,
        children: [jsx("div", {
          className: c()(P_, value),
          dir: "auto",
          "data-testid": "textContent",
          children: e
        }), !!N && r && jsx(_p, {
          copyValue: null,
          variableId: x.variable?.node_id,
          className: tl,
          children: jsx(wG, {
            text: C ?? N,
            onClick: R,
            dataTestId: "textVariableName",
            thumbnailValue: w,
            fullWidth: !0,
            ui3Height: !0,
            endTruncate: !0
          })
        })]
      })]
    })
  });
}
export const G = $$S0;
export const X = $$v1;