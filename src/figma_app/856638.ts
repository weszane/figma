import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { MenuContainerComp, MenuGroupComp, MenuTitleComp, MenuSubMenu, MenuSubTrigger, MenuItemLead, MenuSubContainerComp, MenuItemComp, MenuItemTrail, MenuShortcut } from "../figma_app/860955";
import { V } from "../905/291719";
import { generateRecordingKey } from "../figma_app/878298";
import { VU } from "../905/625959";
import { bs } from "../figma_app/553940";
import { selectAppModel } from "../figma_app/889655";
import { isActionEnabled, getKeyboardShortcut } from "../figma_app/357047";
import { Jg } from "../figma_app/108168";
import { isDropdownGroupHeader, DMenuItemType } from "../figma_app/986347";
let h = "overflowMenuDropdown";
export function $$m0(e) {
  return jsx(MenuContainerComp, {
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
  let r = e.find(isDropdownGroupHeader)?.getTitle();
  let i = e.filter(e => !isDropdownGroupHeader(e)).map(e => jsx($$f1, {
    item: e,
    recordingKey: t
  }, e.recordingKey));
  return jsx(MenuGroupComp, {
    title: r ? jsx(MenuTitleComp, {
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
    case DMenuItemType.ACTION:
      return jsx(y, {
        action: e,
        recordingKey: t
      });
    case DMenuItemType.ACTION_SUBMENU:
      return jsx(E, {
        submenu: e,
        recordingKey: t
      });
    case DMenuItemType.CUSTOM_ACTION:
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
  return jsxs(MenuSubMenu, {
    children: [jsxs(MenuSubTrigger, {
      recordingKey: generateRecordingKey(t || h, e.recordingKey),
      children: [jsx(MenuItemLead, {
        children: e.icon
      }), e.getTitle()]
    }), jsx(MenuSubContainerComp, {
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
  let r = useSelector(selectAppModel);
  let _ = isActionEnabled(r, e.action);
  return jsxs(MenuItemComp, {
    disabled: !_,
    onClick: VU.get(e.action, "toolbar"),
    recordingKey: generateRecordingKey(t || h, e.recordingKey),
    children: [jsx(MenuItemLead, {
      children: bs(e.action)?.ui3Icon || jsx(V, {})
    }), Jg(e.getDisplayAction?.() ?? e.action), jsx(MenuItemTrail, {
      children: jsx(MenuShortcut, {
        children: getKeyboardShortcut(r.keyboardShortcuts, e.action)
      })
    })]
  });
}
function b({
  action: e,
  recordingKey: t
}) {
  return jsxs(MenuItemComp, {
    onClick: t => {
      e.onClick(t);
    },
    recordingKey: generateRecordingKey(t || h, e.recordingKey),
    disabled: e.disabled,
    children: [jsx(MenuItemLead, {
      children: e.icon
    }), e.getTitle(), jsx(MenuItemTrail, {
      children: e.rightIcon
    })]
  });
}
export const l = $$m0;
export const t = $$f1;