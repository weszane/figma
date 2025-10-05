import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { l4 } from "../905/124270";
import { isFacetEmpty, getFacetDisplayValue } from "../905/171315";
import { s as _$$s2 } from "../figma_app/576667";
import { f as _$$f } from "../figma_app/882858";
import { A as _$$A } from "../905/484713";
import { G } from "../figma_app/119843";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { resetTileSelection } from "../905/81009";
import { useDropdownState } from "../905/848862";
import { CreatorResourceType, InputType } from "../figma_app/162807";
import { A as _$$A2 } from "../6828/154709";
let T = e => {
  switch (e) {
    case CreatorResourceType.RESOURCE:
      return renderI18nText("search.preview_section.all_files");
    case CreatorResourceType.CREATOR:
      return renderI18nText("search.facets.created_by", {
        creator: getI18nString("search.facets.anyone")
      });
    case CreatorResourceType.SPACE:
      return renderI18nText("search.facets.space", {
        space: getI18nString("search.facets.all_spaces")
      });
    default:
      return "";
  }
};
export function $$I0({
  dropdownId: e,
  facetType: t,
  containerRef: r,
  hasQuickActionsStyling: I,
  contentTargetRef: S
}) {
  let v = useDispatch();
  let A = useRef(null);
  let x = S || A;
  let N = useDropdownState();
  let C = N?.type === e;
  let w = useAtomWithSubscription(l4(t ?? null));
  let O = _$$f();
  let R = _$$A();
  let L = InputType.DROPDOWN;
  let P = useMemo(() => {
    switch (t) {
      case CreatorResourceType.RESOURCE:
        return getI18nString("search.facets.filter_by_resource");
      case CreatorResourceType.CREATOR:
        return getI18nString("search.facets.filter_by_creator");
      case CreatorResourceType.SPACE:
        return getI18nString("search.facets.filter_by_space");
      default:
        return "Filter";
    }
  }, [t]);
  let D = I ? cssBuilderInstance.relative.lhNormal.flex.itemsCenter.bRadius4.px8.py4.b1.colorBorder.fontMedium.$ : "facet_dropdown_entry--dropdownContainer--VoPFx tile_sort_filter--dropdownContainer--443h- text--fontPos11--2LvXf text--_fontBase--QdLsd";
  let k = I ? cssBuilderInstance.ml8.flex.itemsCenter.$ : "facet_dropdown_entry--caretContainer--4agJ1 tile_sort_filter--caretContainer--kkZQq";
  let M = r && r.current ? r.current.getBoundingClientRect().right : void 0;
  return jsxs("div", {
    className: D,
    onMouseDown: r => {
      r.stopPropagation();
      v(resetTileSelection());
      C ? (v(hideDropdownAction()), R(L, t)) : x.current && (r.preventDefault(), v(showDropdownThunk({
        type: e,
        data: {
          facetType: t,
          targetRect: x.current.getBoundingClientRect()
        }
      })), O(L, t));
    },
    onClick: e => e.stopPropagation(),
    role: "combobox",
    "aria-expanded": C,
    "aria-haspopup": "listbox",
    "aria-controls": e,
    "aria-label": P,
    tabIndex: -1,
    children: [jsx("span", {
      ref: x,
      className: cssBuilderInstance.noWrap.$,
      children: !w || isFacetEmpty(w) ? T(t) : getFacetDisplayValue(w)
    }), jsx("div", {
      className: k,
      children: jsx(SvgComponent, {
        svg: _$$A2,
        className: `facet_dropdown_entry--caret--XFove tile_sort_filter--caret--AJHA9 ${C ? "facet_dropdown_entry--caretDown--ez1jh tile_sort_filter--caretDown--hIOid" : ""}`
      })
    }), C && jsx(G, {
      dropdownId: e,
      dropdownChild: jsx(_$$s2, {
        facetType: t,
        id: "",
        path: []
      }),
      containerRefRight: M,
      limitHeight: I
    })]
  });
}
export const l = $$I0;