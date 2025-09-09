import { jsxs, jsx } from "react/jsx-runtime";
import { useContext, useMemo, useState, useRef, useEffect, useCallback } from "react";
import { isNotNullish } from "../figma_app/95419";
import { DimensionErrorType } from "../figma_app/763686";
import o from "classnames";
import { useLatestRef } from "../figma_app/922077";
import { M } from "../figma_app/648761";
import { Uz } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { S as _$$S } from "../figma_app/552746";
import { getI18nString } from "../905/303541";
import { isInvalidValue, isValidValue } from "../905/216495";
import { p_ } from "../905/203369";
import { p as _$$p } from "../905/427409";
import { J, P as _$$P } from "../figma_app/120873";
import { kL, Bv, hF, zN } from "../905/435127";
var l = o;
export function $$v0(e) {
  let t = useContext(_$$p);
  let {
    property,
    formatter
  } = e;
  let v = useMemo(() => {
    if (!t?.boundVariableId) return [];
    if (isInvalidValue(property) || isInvalidValue(t.mismatchedValue)) return [{
      value: getI18nString("fullscreen.mixed")
    }];
    let e = t.mismatchedValue;
    return [{
      value: e ? e.value.toFixed(0) : formatter.format(property),
      variableId: t.boundVariableId ?? void 0,
      isDeleted: t.isBoundVariableDeleted,
      invalidReason: function (e) {
        if (null == e) return null;
        switch (e) {
          case DimensionErrorType.NONE:
            return null;
          case DimensionErrorType.LESS_THAN_MIN_WIDTH:
            return getI18nString("variables.invalid.less_than_min_width");
          case DimensionErrorType.LESS_THAN_MIN_HEIGHT:
            return getI18nString("variables.invalid.less_than_min_height");
          case DimensionErrorType.GREATER_THAN_MAX_WIDTH:
            return getI18nString("variables.invalid.greater_than_max_width");
          case DimensionErrorType.GREATER_THAN_MAX_HEIGHT:
            return getI18nString("variables.invalid.greater_than_max_height");
          case DimensionErrorType.LESS_THAN_ONE:
            return getI18nString("variables.invalid.less_than_one");
          case DimensionErrorType.NEGATIVE:
            return getI18nString("variables.invalid.negative");
          case DimensionErrorType.NEGATIVE_OR_ZERO:
            return getI18nString("variables.invalid.negative_or_zero");
        }
      }(e?.reason) ?? void 0
    }];
  }, [property, formatter, t]);
  let I = t?.boundVariableId ? void 0 : property;
  let E = v.length;
  let [x, S] = useState(null);
  let w = useRef(null);
  let C = M(e.forwardedRef);
  let [T, k] = useState(!1);
  useEffect(() => {
    t?.isShowingBindingUI || null === x || w.current?.focus?.();
  }, [w, x, t]);
  useEffect(() => {
    t?.isShowingBindingUI || S(null);
  }, [t?.isShowingBindingUI]);
  let R = () => {
    w.current?.focus?.();
    S(Math.max(0, null === x ? E - 1 : x - 1));
  };
  let N = useLatestRef(I);
  useEffect(() => {
    T && N !== I && (C?.current?.select(), k(!1));
  }, [C, I, N, T]);
  let P = useCallback(() => {
    v.length > 0 ? S(0) : C.current?.focus?.({
      preventScroll: !0
    });
  }, [v, C]);
  let O = () => {
    let e = C.current;
    t?.showBindingUI(e, {
      currentFieldValue: isValidValue(property) && isNotNullish(property) ? property : void 0
    });
  };
  let D = (e, t) => {
    S(t);
    O();
    e.preventDefault();
    e.stopPropagation();
  };
  return jsxs(_$$S.recordableDiv, {
    role: "textbox",
    forwardedRef: w,
    onClick: P,
    onFocus: P,
    onBlur: () => S(null),
    onKeyDown: i => {
      if (e.onKeyDown?.(i), 0 === E) return;
      let n = C.current;
      switch (i.keyCode) {
        case Uz.DELETE:
        case Uz.BACKSPACE:
          null !== x && (i.preventDefault(), C.current?.focus?.(), S(null), t?.onVariableSelected?.());
          break;
        case Uz.ENTER:
          null !== x && (i.preventDefault(), t?.showBindingUI(n));
          break;
        case Uz.RIGHT_ARROW:
          null !== x && (i.preventDefault(), x + 1 === E ? (S(null), C.current?.focus?.()) : S(x + 1));
          break;
        case Uz.LEFT_ARROW:
          i.preventDefault();
          R();
      }
    },
    className: l()(kL, e.outerClassName),
    recordingKey: generateRecordingKey(e.recordingKey, "tokenizableInput"),
    children: [jsx("div", {
      className: l()(Bv, e.pillsContainerClassName),
      children: v.map((t, i) => {
        let r = i === x ? J.SELECTED : t.isDeleted ? J.DISABLED_TERTIARY : e.disabled ? J.DISABLED : J.DEFAULT;
        return jsx(_$$P, {
          colorTheme: r,
          disableHover: e.disabled,
          invalid: null != t.invalidReason,
          isDeleted: !1,
          isStandalone: !0,
          onClick: e.disabled ? void 0 : e => D(e, i),
          recordingKey: generateRecordingKey(e.recordingKey, "tokens", i),
          tooltipOverride: t.invalidReason,
          value: t.value,
          variableId: t.variableId
        }, i);
      })
    }), jsx("div", {
      className: l()({
        [hF]: !0,
        [zN]: v.length >= 1
      }),
      children: jsx(p_, {
        allowEmpty: e.allowEmpty,
        ariaDescription: getI18nString("fullscreen.properties_panel.apply_variable_hotkey"),
        ariaLabel: e.ariaLabel,
        autoFocus: e.autoFocus,
        className: l()({
          [_$$s.ellipsis.$]: e.ellipsis
        }, e.className),
        dataTestId: e.dataTestId,
        disabled: e.disabled,
        formatter: e.formatter,
        forwardedRef: C,
        mixedMathHandler: e.mixedMathHandler,
        noBorderOnFocus: e.noBorderOnFocus,
        noLeftBorder: e.noLeftBorder,
        noPlaceholderLine: e.noPlaceholderLine,
        onBlur: t => {
          S(null);
          e.onBlur?.(t);
        },
        onChange: e.onChange,
        onClick: e.onClick,
        onFocus: e.onFocus,
        onKeyDown: i => {
          if (e.onKeyDown?.(i), !i.defaultPrevented && ("=" === i.key && (i.preventDefault(), O()), 0 !== E)) switch (i.keyCode) {
            case Uz.BACKSPACE:
              {
                let e = C.current;
                e && e === document.activeElement && 0 === e.selectionStart && 0 === e.selectionEnd && (i.preventDefault(), C.current?.focus?.(), S(null), t?.onVariableSelected?.(), k(!0));
                break;
              }
            case Uz.LEFT_ARROW:
              i.preventDefault();
              R();
          }
        },
        onKeyUp: e.onKeyUp,
        onMixedMathNudge: e.onMixedMathNudge,
        onMouseDown: e.onMouseDown,
        placeholder: E > 0 ? void 0 : e.placeholder,
        property: I,
        recordingKey: e.recordingKey,
        shouldClearOnFocus: e.shouldClearOnFocus,
        squareRightBorder: e.squareRightBorder,
        variablesDisabled: !0
      })
    })]
  });
}
export const $ = $$v0;