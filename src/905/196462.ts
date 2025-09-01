import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useId, useCallback, useEffect } from "react";
import { p } from "../905/185998";
import { K } from "../905/443068";
import { U } from "../905/708285";
import { J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { t } from "../905/303541";
import { Dm } from "../figma_app/8833";
export function $$p0(e) {
  let {
    onBlur,
    onClickTrash,
    onInputKeyDown,
    onInputChange,
    url,
    location
  } = e;
  let f = useRef(null);
  let _ = useId();
  let A = useCallback(e => {
    onInputChange({
      target: {
        value: e
      }
    });
  }, [onInputChange]);
  useEffect(() => {
    f.current && (f.current.focus(), f.current.select());
  }, [f]);
  return jsx("div", {
    className: "hyperlink_editor--container--rXDYj",
    style: {
      left: location.x,
      top: location.y
    },
    children: jsx(J, {
      mode: "dark",
      children: jsxs("div", {
        className: `hyperlink_editor--popup--CHv-O _overlayBase--_overlayBase--Rkj8l ${Dm}`,
        children: [getFeatureFlags().figjam_a11y_inline_toolbar ? jsx("div", {
          className: "xt7dq6l x3smdqs xfifm61",
          children: jsx(p, {
            id: _,
            value: url,
            onChange: A,
            onKeyDown: onInputKeyDown,
            htmlAttributes: {
              onBlur
            },
            placeholder: t("hyperlink.type_or_paste_url"),
            autoFocus: !0
          })
        }) : jsx("input", {
          ref: f,
          autoCapitalize: "off",
          autoComplete: "off",
          autoCorrect: "off",
          className: "hyperlink_editor--input--FGLip input--darkInput--zfbnG",
          onBlur,
          onChange: onInputChange,
          onKeyDown: onInputKeyDown,
          placeholder: t("hyperlink.type_or_paste_url"),
          spellCheck: !1,
          value: url
        }), "" !== url && jsx("span", {
          className: "hyperlink_editor--breakIcon--ntEK8",
          children: jsx(K, {
            "aria-label": t("hyperlink.remove_link"),
            onClick: onClickTrash,
            actionOnPointerDown: !0,
            children: jsx(U, {})
          })
        })]
      })
    })
  });
}
export const c = $$p0;