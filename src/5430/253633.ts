import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { h as _$$h } from "../905/994594";
import { sx } from "../905/449184";
import { Ay } from "../905/612521";
import { Uz } from "../905/63728";
import { B } from "../905/714743";
import { t as _$$t } from "../905/303541";
import { Dy, ky, Je } from "../figma_app/925970";
import { x0 } from "../5430/908946";
import { W as _$$W } from "../5430/53744";
import { Jm } from "../figma_app/387599";
import { _t } from "../figma_app/471982";
import { xn } from "../905/934145";
import { AG } from "../figma_app/999312";
import { A as _$$A } from "../svg/355105";
import { A as _$$A2 } from "../svg/545021";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$b0({
  query: e,
  inSearchPath: t,
  onChange: r,
  onSubmit: b,
  inputPlaceholder: j,
  context: w,
  className: C,
  searchIconClassName: L,
  closeIconClassName: T,
  dropdownSelector: I
}) {
  let N = useDispatch();
  let E = Jm(!0);
  let S = AG();
  let [R, k] = useState(!1);
  let A = useRef(null);
  let P = useRef(null);
  let M = useRef(null);
  let {
    renderedOrder,
    renderedSelectedIdx,
    resources,
    setResources,
    selectedIdx,
    setSelectedIdx
  } = _$$W(w);
  let V = useCallback(() => {
    setSelectedIdx({
      idx: -1
    });
  }, [setSelectedIdx]);
  let W = I && (R || t || e);
  let G = W ? "" : j ?? _$$t("community.search.search_community");
  let $ = S ? jsx(_$$h, {
    className: L
  }) : jsx(B, {
    svg: _$$A,
    className: L
  });
  return jsxs("div", {
    className: C,
    tabIndex: 0,
    ref: P,
    onFocus: () => {
      k(!0);
      null !== A.current && A.current.focus();
      N(Dy({
        entryPoint: S ? "resource_hub" : "community"
      }));
    },
    children: [W && jsx("div", {
      className: "xpnmzw7 x78zum5 x2lah0s",
      ref: M,
      children: I
    }), !W && $, jsx("input", {
      type: "text",
      value: e,
      spellCheck: !1,
      placeholder: G,
      ref: A,
      onChange: e => {
        let s = e.currentTarget.value;
        r(s);
        (t || S) && s && b(s);
      },
      onBlur: V,
      onKeyDown: s => {
        let i = s.currentTarget.value.trim();
        if ("Enter" === s.key) {
          if (s.preventDefault(), renderedSelectedIdx >= 0 && selectedIdx.type) {
            let t = resources[selectedIdx.type]?.[selectedIdx.idx];
            let s = x0(t) ? new xn({
              profileHandle: t.model.profile_handle
            }).href : _t({
              resource: t
            });
            Ay.push(s);
            A.current?.blur();
            r("");
            setResources({});
            N(ky());
            sx("search_result_clicked", {
              query: e,
              resourceType: renderedOrder[renderedSelectedIdx]?.type,
              scope: "community",
              is_preview: !0,
              index: renderedSelectedIdx,
              entry_point: "community_via_enter",
              searchSessionId: E
            });
          } else {
            b(i);
            t && !i ? N(ky()) : !t && i && N(Je({
              entryPoint: "community"
            }));
          }
        } else if ("Escape" === s.key) A.current?.blur();else if (s.keyCode === Uz.DOWN_ARROW || s.keyCode === Uz.UP_ARROW) {
          s.preventDefault();
          let e = renderedSelectedIdx === renderedOrder.length - 1 ? renderedSelectedIdx : renderedSelectedIdx + 1;
          let t = renderedSelectedIdx <= 0 ? renderedSelectedIdx : renderedSelectedIdx - 1;
          switch (s.keyCode) {
            case Uz.DOWN_ARROW:
              setSelectedIdx(renderedOrder[e] || {
                idx: -1
              });
              break;
            case Uz.UP_ARROW:
              setSelectedIdx(renderedOrder[t] || {
                idx: -1
              });
          }
        }
      },
      required: !0
    }), e && e.length > 0 && jsx(B, {
      svg: _$$A2,
      className: T,
      onClick: () => {
        r("");
        t && b("");
        N(ky());
      }
    })]
  });
}
export const D = $$b0;