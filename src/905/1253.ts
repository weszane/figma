import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { E as _$$E } from "../905/632989";
import { y as _$$y } from "../905/582657";
import { r as _$$r } from "../905/571562";
import d from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { generateRecordingKey } from "../figma_app/878298";
import { Zl } from "../905/211621";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { zE } from "../905/8732";
import { dG } from "../figma_app/753501";
import { isValidValue, isInvalidValue } from "../905/216495";
import { getBasename } from "../905/309735";
import { VZ, TS } from "../905/959568";
import { MB } from "../figma_app/525558";
import { T as _$$T } from "../figma_app/270091";
import { g as _$$g } from "../figma_app/60940";
import { Flg } from "../figma_app/27776";
var c = d;
let S = "instance_swap_toggle--pickerContentFill--8hXPb";
let $$w0 = "instance-swap-toggle";
let C = parsePxNumber(Flg);
let T = parsePxNumber("5px");
export function $$k1(e) {
  let {
    fill,
    pickerID,
    pickerWidth,
    shouldPerformSwapOnClick,
    instanceSwapNode,
    title,
    onSwapCallback,
    disableToggle,
    preferredItems,
    preferredValuesErrorComponent,
    sceneGraph,
    instanceSwapPickerInitialHeight,
    initialPosition = "bottom",
    entrypointForLogging,
    getInstanceSwapPickerPosition
  } = e;
  let U = instanceSwapNode && isValidValue(instanceSwapNode) ? instanceSwapNode.guid : "";
  let B = useMemo(_$$g, []);
  let V = useSelector(e => B(e, U, sceneGraph));
  let G = useSelector(e => e.instanceSwapPickerShown);
  let z = useDispatch();
  let H = useRef(null);
  let W = useCallback(() => H.current ? getInstanceSwapPickerPosition ? getInstanceSwapPickerPosition(H.current, pickerWidth, initialPosition, instanceSwapPickerInitialHeight) : "bottom" === initialPosition ? VZ(H.current, pickerWidth, !1) : TS({
    el: H.current,
    initialHeight: instanceSwapPickerInitialHeight ? instanceSwapPickerInitialHeight + C + T : instanceSwapPickerInitialHeight,
    verticalAlign: "right-center" === initialPosition
  }) : void 0, [initialPosition, instanceSwapPickerInitialHeight, pickerWidth, getInstanceSwapPickerPosition]);
  let K = useCallback(e => {
    disableToggle || (z(zE({
      initialPosition: W(),
      id: pickerID,
      modal: !0
    })), e.stopPropagation());
  }, [disableToggle, z, pickerID, W]);
  let Y = useCallback(() => {
    z(zE({
      initialPosition: W(),
      id: pickerID,
      modal: !0,
      returnFocusToToggle: !0
    }));
  }, [z, pickerID, W]);
  let q = MB({
    onClick: K,
    onKeyDown: Y
  });
  let $ = useMemo(() => G.isShown && G.id === pickerID ? "instance_swap_toggle--selectedInstanceSwapPickerButton--fNyIE" : disableToggle ? "instance_swap_toggle--disabledInstanceSwapPickerButton--MPdD6 instance_swap_toggle--instanceSwapPickerButton--Yyiv7" : "instance_swap_toggle--instanceSwapPickerButton--Yyiv7", [disableToggle, G, pickerID]);
  let Z = useMemo(() => V ? [V] : [], [V]);
  return jsxs(Fragment, {
    children: [jsxs(_$$E, {
      className: c()($, _$$s.alignLeft.$),
      ref: H,
      onClick: q,
      recordingKey: generateRecordingKey("instanceSwapToggle", pickerID),
      htmlAttributes: {
        id: $$w0,
        onMouseDown: dG,
        "data-testid": "instance-swap-toggle-button"
      },
      children: [jsx("span", {
        className: "instance_swap_toggle--instanceIcon--I3hqd",
        children: jsx(_$$y, {})
      }), instanceSwapNode && (isInvalidValue(instanceSwapNode) || instanceSwapNode.isAlive) ? jsx("div", {
        className: c()("instance_swap_toggle--pickerButtonContent--wSQrI ellipsis--ellipsis--Tjyfa", {
          [S]: fill
        }),
        children: isInvalidValue(instanceSwapNode) ? renderI18nText("design_systems.instance_swap_picker.mixed") : getBasename(instanceSwapNode.name)
      }) : jsx("div", {
        className: c()("instance_swap_toggle--pickerButtonPlaceholder--OIjte instance_swap_toggle--pickerButtonContent--wSQrI ellipsis--ellipsis--Tjyfa", {
          [S]: fill
        }),
        children: renderI18nText("design_systems.instance_swap_picker.pick_instance")
      }), !disableToggle && jsx("span", {
        className: "instance_swap_toggle--chevronIcon--4CRVk",
        children: jsx(_$$r, {})
      })]
    }), G.isShown && G.id === pickerID && jsx(_$$T, {
      entrypointForLogging,
      initialHeight: instanceSwapPickerInitialHeight,
      initialWidth: pickerWidth,
      onSwapCallback,
      pickerToggleRef: H,
      pickerType: Zl.INSTANCE_SWAP_PICKER,
      preferredItems,
      preferredValuesErrorComponent,
      recordingKey: generateRecordingKey("instanceSwapPicker", pickerID),
      selectedItems: Z,
      shouldPerformSwapOnClick,
      title
    })]
  });
}
export const D = $$w0;
export const x = $$k1;