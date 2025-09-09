import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { Uz } from "../905/63728";
import { ks } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { popModalStack } from "../905/156213";
export function $$g0(e) {
  let t = useDispatch();
  return jsx(h, {
    ...e,
    open: !0,
    onClose: () => t(popModalStack())
  });
}
function h(e) {
  let {
    title,
    subtitle,
    initialName,
    maxLength,
    onRename,
    placeholder,
    submitText,
    allowEmptyString
  } = e;
  let y = useDispatch();
  let [j, I] = useState(initialName);
  let E = title ?? getI18nString("resource_rename_modal.title", {
    initialName
  });
  let S = hS(e);
  let T = () => {
    y(popModalStack());
  };
  let A = () => !allowEmptyString && "" === j.trim() || j.trim() === initialName.trim();
  let w = () => {
    A() || (onRename(j), T());
  };
  return jsx(bL, {
    manager: S,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: E
        })
      }), jsxs(nB, {
        scrolling: "none",
        children: [subtitle, jsx(ks, {
          autoFocus: !0,
          className: "resource_rename_modal--input--lUTNz",
          maxLength,
          placeholder,
          onChange: e => I(e.currentTarget.value),
          value: j,
          onKeyDown: e => {
            e.keyCode === Uz.ENTER && (e.preventDefault(), w());
          }
        }), maxLength && jsx("div", {
          className: "resource_rename_modal--lengthCount--n2dbN",
          children: jsx(_$$E, {
            color: "secondary",
            children: renderI18nText("resource_rename_modal.lengthCount", {
              currentLength: j.length,
              maxLength
            })
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: T,
            variant: "secondary",
            children: renderI18nText("resource_rename_modal.cancel")
          }), jsx($n, {
            variant: "primary",
            disabled: A(),
            onClick: w,
            children: submitText
          })]
        })
      })]
    })
  });
}
export const c = $$g0;
