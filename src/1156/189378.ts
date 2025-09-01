import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef, useCallback } from "react";
import { wA } from "../vendor/514228";
import { b as _$$b, q7, Q$, bL, mc } from "../figma_app/860955";
import { K } from "../905/443068";
import { s as _$$s } from "../905/551945";
import { e as _$$e } from "../905/149844";
import { t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { xp } from "../905/966582";
import { wj } from "../1156/721826";
import { H } from "../1156/461363";
import { qQ } from "../figma_app/119420";
import { z } from "../905/634240";
let o = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M13.756 5.013A2.5 2.5 0 0 1 16 7.5l-.013.256a2.5 2.5 0 0 1-.99 1.745A2.5 2.5 0 0 1 16 11.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-1.5-.504V15.5l-.013.256A2.5 2.5 0 0 1 9.5 18l-.256-.013a2.5 2.5 0 0 1-2.231-2.231L7 15.5c0-.819.394-1.545 1.002-2.001a2.5 2.5 0 0 1-.99-1.743L7 11.5c0-.819.394-1.545 1.002-2.001a2.5 2.5 0 0 1-.99-1.743L7 7.5a2.5 2.5 0 0 1 2.244-2.487L9.5 5h4zM17 14a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5m-7.5 0a1.5 1.5 0 1 0 1.5 1.5V14zm0-4a1.5 1.5 0 0 0 0 3H11v-3zm4 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4-4a1.5 1.5 0 1 0 0 3H11V6zM12 9h1.5a1.5 1.5 0 0 0 0-3H12z"
    })
  });
});
export function $$y0({
  enableAssetImport: e,
  enableImageAttachment: t,
  attachments: n,
  isViewOnly: y,
  chatMessagesNodeGuid: _,
  createLoadedAttachment: b,
  toggleComponent: j
}) {
  let v = wA();
  let k = useRef(null);
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let S = useCallback(async e => {
    let t = e.target.files?.[0];
    t && (await z(t, b), k.current && (k.current.value = ""));
  }, [b]);
  let N = e ? jsxs(q7, {
    onClick: () => {
      v(to({
        type: H,
        data: {
          chatMessagesNodeGuid: _
        }
      }));
    },
    disabled: y || n.length >= qQ,
    children: [jsx(Q$, {
      children: jsx(o, {})
    }), jsx("div", {
      className: "xifkd7f",
      children: n.length >= qQ ? _$$t("sites.panel.make.attach_limit_reached", {
        limit: qQ
      }) : _$$t("figmake.attachments.import_from_figma")
    })]
  }) : null;
  let w = t ? jsx(Fragment, {
    children: jsxs(q7, {
      disabled: y || n.length >= qQ,
      onClick: () => {
        k.current?.click();
      },
      children: [jsx(Q$, {
        children: jsx(_$$s, {})
      }), jsx("div", {
        className: "xifkd7f",
        children: n.length >= qQ ? _$$t("sites.panel.make.attach_limit_reached", {
          limit: qQ
        }) : _$$t("figmake.attachments.upload_image")
      })]
    })
  }) : null;
  return t || e ? jsxs(bL, {
    manager,
    children: [j ? jsx(j, {
      ...getTriggerProps()
    }) : jsx(K, {
      ...getTriggerProps(),
      "aria-label": _$$t("sites.panel.make.attach_design"),
      "data-tooltip-show-above": !0,
      "data-onboarding-key": wj,
      disabled: y || n.length >= qQ,
      children: jsx(_$$e, {})
    }), t && jsx("input", {
      type: "file",
      className: "x1s85apg",
      ref: k,
      accept: xp.join(","),
      onChange: S
    }), jsxs(mc, {
      children: [N, w]
    })]
  }) : null;
}
export const D = $$y0;