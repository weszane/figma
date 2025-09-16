import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createElement, forwardRef, useCallback } from "react";
import { DialogHiddenTitle, DialogActionStrip, DialogContents, DialogHeader, DialogBody } from "../figma_app/272243";
import { t as _$$t } from "../905/150656";
import { bL } from "../905/911410";
import { DesignGraphElements } from "../figma_app/763686";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { n as _$$n } from "../905/734251";
import { dH } from "../figma_app/722362";
function p({
  hiddenTitle: e,
  tabManager: t,
  tabPropsMap: i,
  tabProps: o,
  recordingKey: l,
  rightButtons: c
}) {
  let {
    tabs
  } = o;
  return tabs.length <= 1 ? null : jsxs(Fragment, {
    children: [e ?? jsx(DialogHiddenTitle, {
      children: e
    }), jsx(_$$t.TabStrip, {
      manager: t,
      children: i && tabs.map(e => createElement(_$$t.Tab, {
        ...i[e.name],
        key: e.name + "Tab",
        recordingKey: e.recordingKey ? generateRecordingKey(l, e.recordingKey) : void 0
      }, e.displayText))
    }), c && jsx(DialogActionStrip, {
      children: c
    })]
  });
}
function m({
  tabProps: e,
  tabPanelPropsMap: t
}) {
  let {
    tabs
  } = e;
  return 0 === tabs.length ? null : 1 === tabs.length ? tabs[0]?.content ?? null : jsxs(Fragment, {
    children: [jsx("div", {
      className: "asset_binding_picker--bodyForMultipleTabs--yb0cv"
    }), tabs.map(e => createElement(_$$t.TabPanel, {
      ...t[e.name],
      key: e.name + "TabPanel"
    }, e.content))]
  });
}
export let $$h0 = forwardRef(function ({
  tabProps: e,
  onClose: t,
  initialPosition: i,
  initialWidth: r,
  recordingKey: l
}, c) {
  let {
    tabs,
    defaultActiveTabId
  } = e;
  let [f, _, A] = _$$t.useTabs(tabs.reduce((e, t) => (e[t.name] = !0, e), {}), defaultActiveTabId ? {
    defaultActive: defaultActiveTabId
  } : {});
  return jsxs(Fragment, {
    children: [jsx(bL, {
      onClose: ({
        source: e
      }) => {
        "button" === e && t();
      },
      defaultPosition: i,
      width: r,
      ref: c,
      recordingKey: l,
      children: jsxs(DialogContents, {
        children: [tabs.length > 1 && jsx(DialogHeader, {
          children: jsx(p, {
            tabManager: A,
            tabPropsMap: f,
            tabProps: e,
            rightButtons: e.headerRightButtons,
            hiddenTitle: e.headerHiddenTitle
          })
        }), jsx(DialogBody, {
          padding: 0,
          children: jsx(m, {
            tabProps: e,
            tabPanelPropsMap: _
          })
        })]
      })
    }), jsx(g, {
      recordingKey: generateRecordingKey(l, "closer"),
      onClose: t
    })]
  });
});
function g({
  recordingKey: e,
  onClose: t
}) {
  let i = useHandleMouseEvent(e, "mousedown", useCallback(e => {
    t();
    e.stopPropagation();
  }, [t]));
  return dH() === DesignGraphElements.DROPPER_COLOR ? null : jsx(_$$n.div, {
    className: "asset_binding_picker--pickerCloser--PiA1S",
    onMouseDown: i
  });
}
export const k = $$h0;