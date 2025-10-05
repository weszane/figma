import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useId, useState, useCallback, useEffect } from "react";
import { DialogTriggerButton } from "../905/976845";
import { r as _$$r } from "../905/571562";
import o from "../vendor/128080";
import { useLatestRef } from "../figma_app/922077";
import { KeyCodes } from "../905/63728";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { c$, wv, MM } from "../figma_app/236327";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { useDropdown } from "../905/848862";
import { Jz } from "../905/504727";
import { Button } from "../905/521428";
import { c as _$$c } from "../905/566438";
import { kz } from "../figma_app/171177";
var l = o;
function f({
  iconSuffix: e,
  children: t,
  onClick: r,
  variant: i,
  disabled: a,
  ariaLabel: s,
  ariaExpanded: o,
  ariaHasPopup: l,
  ariaControls: d,
  id: c
}) {
  return jsx(Button, {
    onClick: r,
    variant: i,
    disabled: a,
    "aria-label": s,
    "aria-expanded": o,
    "aria-haspopup": l,
    "aria-controls": d,
    htmlAttributes: {
      id: c
    },
    children: jsxs("div", {
      className: cssBuilderInstance.flex.itemsCenter.$,
      children: [jsx("span", {
        className: cssBuilderInstance.noWrap.$,
        children: t
      }), jsx("span", {
        style: {
          "--color-icon": "var(--color-text)",
          marginRight: "-8px"
        },
        children: e
      })]
    })
  });
}
export function $$b0(e) {
  return jsx(v, {
    ...e,
    buttonComponent: I
  });
}
export function $$T1(e) {
  return jsx(v, {
    ...e,
    buttonComponent: S
  });
}
function I(e) {
  let t = useMemo(() => e.selected ? e.labelForSelectedItem ? e.labelForSelectedItem(e.selected) : e.selected.toString() : e.placeholder, [e]);
  let r = useHandleMouseEvent(generateRecordingKey(e, "dropdownButton"), "click", () => {
    e.onSelect();
  });
  return jsx(f, {
    onClick: e => {
      e.stopPropagation();
      r();
    },
    iconSuffix: jsx(_$$r, {}),
    variant: "secondary",
    disabled: e.disabled,
    ariaLabel: e.ariaLabel,
    ariaExpanded: e.isActive,
    ariaHasPopup: "menu",
    ariaControls: e.menuId,
    id: e.buttonId,
    children: t
  });
}
function S(e) {
  let t = useHandleMouseEvent(generateRecordingKey(e, "dropdownIconButton"), "click", () => {
    e.onSelect();
  });
  return jsx(DialogTriggerButton, {
    "aria-label": e.iconAriaLabel,
    "aria-expanded": e.isActive,
    variant: "secondary",
    onClick: e => {
      e.stopPropagation();
      t();
    },
    children: e.iconSvg
  });
}
function v(e) {
  let t = useRef(null);
  let r = e.buttonRef || t;
  let a = useId();
  let s = e.id ?? a;
  let {
    toggle,
    hide,
    showing
  } = useDropdown(s);
  let f = useLatestRef(showing);
  let [b, T] = useState();
  let I = () => {
    let e = r.current;
    e && (T(e.getBoundingClientRect()), document?.activeElement && document.activeElement instanceof HTMLElement && document.activeElement?.blur(), toggle());
  };
  let S = useCallback(() => {
    hide();
  }, [hide]);
  let {
    onFocus,
    active
  } = e;
  useEffect(() => {
    onFocus && active && onFocus();
  }, [active, onFocus]);
  kz(KeyCodes.ENTER, t => {
    if (!t.target || !active) return;
    let r = e.items.filter(e => "checkableOption" === e.type).find(e => e.text === t.target.text);
    r && x(r);
    I();
  }, active);
  let x = useCallback(t => {
    t.disabled || (t.onSelectOverride ? t.onSelectOverride() : e.onSelectedChange && t.value && e.onSelectedChange(t.value), S());
  }, [S, e]);
  useEffect(() => {
    void 0 !== f && f !== showing && e.onVisibleChange?.(showing);
  }, [f, e, showing]);
  return jsxs("div", {
    children: [jsx("div", {
      ref: r,
      children: jsx(_$$c, {
        active: !!active,
        children: jsx(e.buttonComponent, {
          ...e,
          onSelect: I,
          isActive: showing
        })
      })
    }), showing && b && jsx(Jz, {
      "aria-labelledby": e.buttonId,
      autoHeight: !0,
      autofocusPrevOnDismount: !0,
      displayAboveTarget: e.displayAboveTarget,
      focusContainerOnMount: e.focusContainerOnMount,
      hideDropdown: S,
      id: e.menuId,
      lean: e.lean || "left",
      maxWidth: e.maxWidth,
      options: e.items.map((t, r) => {
        switch (t.type) {
          case "header":
            return jsx(c$, {
              disabled: !0,
              children: jsx("div", {
                className: cssBuilderInstance.overflowHidden.ellipsis.block.$,
                children: t.text
              })
            }, r);
          case "separator":
            return jsx(wv, {}, r);
          case "option":
            return jsx(c$, {
              disabled: t.disabled,
              onClick: () => x(t),
              children: jsx("div", {
                className: cssBuilderInstance.overflowHidden.ellipsis.block.$,
                children: t.text
              })
            }, r);
          case "checkableOption":
            return jsx(MM, {
              disabled: t.disabled,
              onClick: () => x(t),
              checked: l()(e.selected, t.value),
              children: jsx("div", {
                className: cssBuilderInstance.overflowHidden.ellipsis.block.$,
                children: t.text
              })
            }, r);
        }
      }),
      targetRect: b
    })]
  });
}
export const m = $$b0;
export const r = $$T1;