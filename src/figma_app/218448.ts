import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useId, memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { d as _$$d } from "../905/49800";
import { Label } from "../905/270045";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { r } from "../905/12476";
import { isValidValue } from "../905/216495";
import { Ib } from "../905/129884";
import { l6, c$ } from "../905/794875";
import { cS } from "../figma_app/334459";
import { aq } from "../figma_app/305626";
import { xJ, NE, kz } from "../figma_app/264776";
import { wG, lV, E3 } from "../figma_app/689119";
let E = {
  format: e => e || xJ
};
function y(e) {
  let {
    propertyValueEntries,
    selectedStatesPropertyValues,
    stateGroupPropertyValues,
    onSelectProperty,
    dropdownShown,
    hideErrorsPanel,
    dispatch,
    extended
  } = e;
  let I = useRef([]);
  let S = useCallback(e => {
    if (!I.current) return !1;
    let t = I.current[e];
    return !!t && t.offsetWidth < t.scrollWidth;
  }, []);
  let v = useId();
  return jsxs("div", {
    className: wG,
    children: [propertyValueEntries.length > 0 && jsx("div", {
      children: propertyValueEntries.map((t, i) => {
        let {
          property,
          label
        } = t;
        let A = selectedStatesPropertyValues[property];
        let x = stateGroupPropertyValues[property];
        let N = `states-property-label-${v}-${i}`;
        let C = jsx("p", {
          id: N,
          ref: e => I.current?.push(e),
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": S(i) ? property : null,
          children: label
        });
        let w = "TOGGLE" === t.type ? jsx("span", {
          className: extended ? lV : E3,
          children: jsx(_$$d, {
            label: jsx(Label, {
              children: ""
            }),
            checked: isValidValue(A) ? A === t.toggleTokenPair[0] : void 0,
            onChange: e => {
              onSelectProperty(property, t.toggleTokenPair[e ? 0 : 1]);
            },
            recordingKey: generateRecordingKey(e, `toggle-${property}`)
          })
        }) : jsx(l6, {
          ariaLabelledBy: N,
          dispatch,
          dropdownShown,
          formatter: E,
          id: `states-property-select-${property}-${e.recordingKey}`,
          onChange: e => {
            onSelectProperty(property, e);
          },
          onMouseDown: () => dispatch(r),
          property: A,
          recordingKey: generateRecordingKey(e, `select-${property}`),
          children: [...x].map(t => jsx(c$, {
            value: t,
            truncateInMiddle: !0,
            recordingKey: generateRecordingKey(e, `select-${property}-option-${t}`)
          }, t))
        });
        return jsx(cS, {
          label: C,
          labelId: N,
          input: w
        }, property);
      })
    }), !hideErrorsPanel && jsx(aq, {})]
  });
}
export function $$b1(e, t, r) {
  let n = [{
    property: t,
    value: r
  }];
  for (let r of e) r.property !== t && n.push({
    ...r
  });
  return n;
}
export function $$T0(e, t) {
  let r = t.map(e => e.toLowerCase());
  let n = null;
  if (2 === t.length) for (let e of NE) {
    let i = r.indexOf(e[0]);
    let a = r.indexOf(e[1]);
    -1 !== i && -1 !== a && (n = [t[i], t[a]]);
  }
  return n ? {
    property: e,
    type: "TOGGLE",
    label: e,
    toggleTokenPair: n
  } : {
    property: e,
    type: "SELECT",
    label: e
  };
}
export let $$I2 = memo(function (e) {
  let {
    sortedProperties,
    stateGroupPropertyValues,
    selectedStatesPropertyValues,
    selectedStates,
    allStates,
    onSelectProperty,
    recordingKey,
    hideErrorsPanel,
    shouldIndent,
    extended
  } = e;
  let m = useDispatch();
  let {
    dropdownShown,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let [I, S] = useState([]);
  useEffect(() => {
    S([]);
  }, [sceneGraphSelection]);
  let v = stateGroupPropertyValues ? sortedProperties.map(e => $$T0(e, stateGroupPropertyValues[e])) : [];
  return jsx(y, {
    dispatch: m,
    dropdownShown,
    extended,
    hideErrorsPanel,
    onSelectProperty: function (e, t) {
      let r = $$b1(I, e, t);
      let n = {};
      for (let i of selectedStates) {
        let {
          propertyValues
        } = i.stateInfo;
        let s = {
          ...propertyValues,
          [e]: t
        };
        let o = kz(s, r, allStates);
        null !== o && (n[i.symbol.node_id] = o);
      }
      onSelectProperty(n);
      S(r);
    },
    propertyValueEntries: v,
    recordingKey,
    selectedStatesPropertyValues,
    shouldIndent,
    stateGroupPropertyValues
  });
});
export const D5 = $$T0;
export const Tj = $$b1;
export const lS = $$I2;
