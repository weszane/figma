import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { k } from "../905/381239";
import { l as _$$l } from "../905/241412";
import { x as _$$x } from "../905/587214";
import { r as _$$r } from "../905/571562";
import { _YF } from "../figma_app/763686";
import { Pt } from "../figma_app/806412";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { lg } from "../figma_app/976749";
import { Te } from "../1250/12342";
import { rE } from "../figma_app/186343";
import { FFileType } from "../figma_app/191312";
import { Ib } from "../905/129884";
import { B as _$$B } from "../figma_app/539422";
import { K0 } from "../figma_app/778125";
import { A } from "../svg/871428";
let b = "new_page_dropdown--newPageIcon--R2RXS";
export function $$v0({
  recordingKey: e
}) {
  let {
    Dropdown,
    toggleDropdown,
    isDropdownShown,
    dropdownTargetRef
  } = _$$B("newPageDropdown");
  let T = lg();
  let w = Te();
  let S = rE();
  if (!w) return null;
  let j = [{
    displayText: getI18nString("fullscreen.pages_panel.page_dropdown_new"),
    optionHeight: 24,
    editorType: null,
    disabled: !0
  }, {
    displayText: getI18nString("fullscreen.pages_panel.design_page"),
    optionHeight: 24,
    editorType: FFileType.DESIGN,
    icon: jsx("div", {
      className: b,
      children: jsx(k, {})
    }),
    callback: () => S(_YF.DESIGN)
  }, {
    displayText: getI18nString("fullscreen.pages_panel.figjam_page"),
    optionHeight: 24,
    editorType: FFileType.WHITEBOARD,
    icon: jsx("div", {
      className: b,
      children: jsx(B, {
        svg: A
      })
    }),
    callback: () => S(_YF.WHITEBOARD)
  }, {
    displayText: getI18nString("fullscreen.pages_panel.slide_deck"),
    optionHeight: 24,
    editorType: FFileType.SLIDES,
    icon: jsx("div", {
      className: b,
      children: jsx(_$$l, {})
    }),
    callback: () => S(_YF.SLIDES)
  }];
  let I = 48;
  for (let e = 0; e < j.length; e++) if (j[e].editorType === T) {
    I += 24 * e;
    break;
  }
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.absolute.w8.h8.$,
      ref: dropdownTargetRef,
      style: {
        bottom: `${I}px`,
        right: "42px"
      }
    }), jsx(K0, {
      className: "new_page_dropdown--newPageButton--sYJsl",
      recordingKey: Pt(e, "newPageDropdown"),
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("fullscreen.pages_panel.add_new_page"),
      "data-tooltip-show-above": !0,
      onMouseDown: toggleDropdown,
      children: jsxs("div", {
        className: "new_page_dropdown--newPageIconsContainer--pzY38",
        children: [jsx(_$$x, {}), jsx("div", {
          className: "new_page_dropdown--newPageChevron--N0hv3",
          children: jsx(_$$r, {})
        })]
      })
    }), isDropdownShown && jsx(Dropdown, {
      minWidth: 160,
      items: j,
      showPoint: !0
    })]
  });
}
export const t = $$v0;