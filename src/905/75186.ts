import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { hS } from "../905/437088";
import { setupAutofocusHandler } from "../905/128376";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { registerModal } from "../905/102752";
import { A7, EL } from "../905/932769";
let _ = getInitialOptions().release_manifest_git_commit;
let $$A0 = registerModal(function (e) {
  let t = hS(e);
  let [i, u] = useState("");
  let [g, A] = useState("");
  let [y, b] = useState("");
  let v = setupAutofocusHandler();
  let I = e => /^[a-f0-9]{40}$/.test(e);
  let E = e => e.split(",").map(e => e.trim()).filter(Boolean).join(",");
  let x = () => {
    let e = i || _;
    if (!e || !I(e)) {
      b("Invalid SHA. Please enter a valid 40-character SHA.");
      return;
    }
    !function (e, t) {
      let i = new URLSearchParams(customHistory.location.search);
      i.set(A7, e);
      t && i.set(EL, t);
      customHistory.replace(`${customHistory.location.pathname}?${i.toString()}${customHistory.location.hash}`, customHistory.location.state);
      customHistory.reload("Reload with new commit SHA");
    }(e, E(g));
  };
  let S = e => {
    "Enter" === e.key && x();
  };
  let w = _ ? `commit-sha (default: ${_})` : "commit-sha";
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("help_widget.menu.set_commit_sha")
        })
      }), jsxs(nB, {
        htmlAttributes: {
          "data-testid": "set-commit-sha-modal"
        },
        children: [y && jsx("div", {
          className: _$$s.mb8.$,
          children: jsx(_$$E, {
            color: "danger",
            children: y
          })
        }), jsx("input", {
          type: "text",
          ref: v,
          value: i,
          className: _$$s.wFull.borderBox.b1.bRadius2.p8.colorBorder.mb8.$,
          onChange: e => u(e.target.value),
          placeholder: w,
          onKeyDown: S,
          "data-testid": "set-commit-sha-input"
        }), jsx("input", {
          type: "text",
          value: g,
          className: _$$s.wFull.borderBox.b1.bRadius2.p8.colorBorder.$,
          onChange: e => A(e.target.value),
          placeholder: "feature flags, comma-separated",
          onKeyDown: S,
          "data-testid": "set-feature-flags-input"
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            variant: "primary",
            onClick: x,
            htmlAttributes: {
              "data-testid": "set-commit-sha-button"
            },
            children: getI18nString("frontend_sha_override_indicator.reload")
          })
        })
      })]
    })
  });
}, "SetFrontendCommitPreviewModal");
export const H = $$A0;