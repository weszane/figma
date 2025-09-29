import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { O } from "../905/969533";
import { stylex } from "@stylexjs/stylex";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { useSelectedCooperFrameIds, useSelectedSlideRowGuids, useCooperFrameGuids } from "../figma_app/396464";
import { ZH } from "../figma_app/504823";
import { clearSelection, addToSelection, removeFromSelection } from "../figma_app/741237";
import { useDropdownState } from "../905/848862";
import { useSceneGraphSelector } from "../figma_app/722362";
import { l6, c$, sK } from "../905/794875";
import { pu, OL } from "../figma_app/123994";
import { wB, be, Uk } from "../905/257620";
let A = "all-assets";
let y = () => ({
  format: e => e
});
export function $$b1(e, t, i, n) {
  let r = [];
  for (let e of t) {
    let t = n.get(e)?.childrenGuids;
    if (t) for (let e of t) r.push(e);
  }
  (r = [...new Set([...e, ...r])]).sort((e, t) => i.indexOf(e) - i.indexOf(t));
  return r;
}
export function $$v0({
  ariaLabelledBy: e
}) {
  let t = useDispatch();
  let i = useDropdownState();
  let l = useSceneGraphSelector();
  let u = null;
  let f = useSelectedCooperFrameIds();
  let v = useSelectedSlideRowGuids();
  let x = useCooperFrameGuids();
  let [S, w] = useState(f);
  let C = S.length === x.length;
  return (useEffect(() => {
    w($$b1(f, v, x, l));
  }, [x, l, f, v]), u = f && x && f.length === x.length ? jsxs("div", {
    children: [getI18nString("cooper.toolbar.export_modal.all_assets"), " ", jsx("span", {
      className: "x1n0bwc9",
      children: "(" + x.length + ")"
    })]
  }) : jsx("div", {
    children: getI18nString("cooper.toolbar.export_modal.asset_count_selected", {
      assetCount: S.length
    })
  }), 0 === x.length || void 0 === x[0]) ? null : jsxs(l6, {
    ariaLabelledBy: e,
    chevronClassName: wB,
    className: be,
    dispatch: t,
    dropdownClassName: Uk,
    dropdownShown: i,
    formatter: y(),
    id: "asset-selection-select",
    keepDropdownOpenOnSubmit: !0,
    multipleSelections: S.concat(C ? A : []),
    onChange: e => {
      if (e === A) {
        if (C) clearSelection();else for (let e of x) S.includes(e) || addToSelection([e]);
      } else if (S.includes(e)) {
        let t = l.get(e)?.parentGuid;
        if (t && v.includes(t)) {
          let i = l.get(t)?.childrenGuids;
          if (i) for (let n of (removeFromSelection([t]), i)) n !== e && addToSelection([n]);
        } else removeFromSelection([e]);
      } else addToSelection([e]);
    },
    openBelowTarget: !0,
    property: "",
    renderInput: ({
      onMouseDown: e
    }) => jsxs("button", {
      ...stylex.props(E.selectInputContainer, (0 === S.length || void 0 === S[0]) && E.selectInputContainerError),
      onClick: e,
      children: [jsxs("div", {
        className: "x78zum5 x6s0dn4 x1i71x30",
        children: [jsx(I, {
          cooperFrameId: S[0],
          hasBorder: !0
        }, S[0]), u]
      }), jsx(O, {})]
    }),
    shouldNotTryToExpand: !0,
    children: [jsx(c$, {
      value: A,
      height: 48,
      children: jsxs("div", {
        className: "x78zum5 x6s0dn4 x1nfngrj",
        children: [jsx(I, {
          cooperFrameId: x[0]
        }), getI18nString("cooper.toolbar.export_modal.all_assets") + " (" + x.length + ")"]
      })
    }, A), jsx(sK, {}), [...x].map(e => {
      let t = l.get(e)?.name;
      return jsx(c$, {
        value: e,
        height: 48,
        children: jsxs("div", {
          className: "x78zum5 x6s0dn4 x1nfngrj",
          children: [jsx(I, {
            cooperFrameId: e
          }), t]
        })
      }, e);
    })]
  });
}
function I({
  cooperFrameId: e,
  hasBorder: t
}) {
  return e ? jsx(ZH, {
    children: ({
      documentExportColorProfile: i
    }) => jsx(Fragment, {
      children: jsx(pu, {
        selectedCooperFrameNodeId: e,
        recordingKey: generateRecordingKey(e, "exportDropdownPreview"),
        useAbsoluteBounds: !0,
        panelWidth: 32,
        panelHeight: 32,
        colorProfile: i,
        hasBorder: t
      })
    })
  }) : jsx(OL, {
    panelWidth: 32,
    panelHeight: 32
  });
}
let E = {
  selectInputContainer: {
    display: "x78zum5",
    boxSizing: "x9f619",
    justifyContent: "x1qughib",
    alignItems: "x6s0dn4",
    width: "xh8yej3",
    height: "xsdox4t",
    border: "x1kylzug",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: "x7z60cl",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    paddingRight: "x1cmmqis",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  selectInputContainerError: {
    borderColor: "xhbgokh",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    color: "x172n1ly",
    $$css: !0
  }
};
export const B = $$v0;
export const W = $$b1;
