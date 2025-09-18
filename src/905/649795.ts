import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { A } from "../vendor/737188";
import { s as _$$s } from "../cssbuilder/589278";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { Vt } from "../905/780715";
export let $$c0 = memo(e => {
  let t = useDispatch();
  let i = {
    attributes: {
      rel: "noopener nofollow noreferrer ugc",
      onClick: e => {
        let i = e.target;
        i && "A" === i.tagName && (t(setupHyperlinkHandler({
          rawInput: i.href
        })), e.stopPropagation(), e.preventDefault());
      }
    },
    className: _$$s.colorTextBrand.cursorPointer.$,
    validate: {
      url: e => Vt(e).length > 0
    }
  };
  return jsx(A, {
    options: i,
    children: e.children
  });
});
export const M = $$c0;