import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { mc, YJ, hE, g8, ZP, Q$, MJ, q7, Ov, rm } from "../figma_app/860955";
import { V } from "../905/291719";
import { Pt } from "../figma_app/806412";
import { VU } from "../905/625959";
import { bs } from "../figma_app/553940";
import { nj } from "../figma_app/889655";
import { Yh, c1 } from "../figma_app/357047";
import { Jg } from "../figma_app/108168";
import { fT, ZU } from "../figma_app/986347";
let h = "overflowMenuDropdown";
export function $$m0(e) {
  return jsx(mc, {
    htmlAttributes: {
      "data-testid": "overflowMenuDropdownContainer"
    },
    children: e.enabledToolbarItems.filter(e => e.length > 0).map((t, r) => jsx(g, {
      groupItems: t,
      recordingKey: e.recordingKey
    }, t[0]?.recordingKey || r))
  });
}
function g({
  groupItems: e,
  recordingKey: t
}) {
  if (0 === e.length) return null;
  let r = e.find(fT)?.getTitle();
  let i = e.filter(e => !fT(e)).map(e => jsx($$f1, {
    item: e,
    recordingKey: t
  }, e.recordingKey));
  return jsx(YJ, {
    title: r ? jsx(hE, {
      children: r
    }) : void 0,
    children: i
  });
}
export function $$f1({
  item: e,
  recordingKey: t
}) {
  switch (e.type) {
    case ZU.ACTION:
      return jsx(y, {
        action: e,
        recordingKey: t
      });
    case ZU.ACTION_SUBMENU:
      return jsx(E, {
        submenu: e,
        recordingKey: t
      });
    case ZU.CUSTOM_ACTION:
      return jsx(b, {
        action: e,
        recordingKey: t
      });
    default:
      return null;
  }
}
function E({
  submenu: e,
  recordingKey: t
}) {
  if (0 === e.items.length) return null;
  if (1 === e.items.length && !e.preventSingleItemSubmenuFlattening) {
    let t = e.items[0];
    return t ? jsx($$f1, {
      item: t
    }) : null;
  }
  return jsxs(g8, {
    children: [jsxs(ZP, {
      recordingKey: Pt(t || h, e.recordingKey),
      children: [jsx(Q$, {
        children: e.icon
      }), e.getTitle()]
    }), jsx(MJ, {
      children: jsx(g, {
        groupItems: e.items,
        recordingKey: t
      })
    })]
  });
}
function y({
  action: e,
  recordingKey: t
}) {
  let r = useSelector(nj);
  let _ = Yh(r, e.action);
  return jsxs(q7, {
    disabled: !_,
    onClick: VU.get(e.action, "toolbar"),
    recordingKey: Pt(t || h, e.recordingKey),
    children: [jsx(Q$, {
      children: bs(e.action)?.ui3Icon || jsx(V, {})
    }), Jg(e.getDisplayAction?.() ?? e.action), jsx(Ov, {
      children: jsx(rm, {
        children: c1(r.keyboardShortcuts, e.action)
      })
    })]
  });
}
function b({
  action: e,
  recordingKey: t
}) {
  return jsxs(q7, {
    onClick: t => {
      e.onClick(t);
    },
    recordingKey: Pt(t || h, e.recordingKey),
    disabled: e.disabled,
    children: [jsx(Q$, {
      children: e.icon
    }), e.getTitle(), jsx(Ov, {
      children: e.rightIcon
    })]
  });
}
export const l = $$m0;
export const t = $$f1;