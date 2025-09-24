import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Button } from "../905/521428";
import { r as _$$r } from "../905/571838";
import { StateHierarchy, StateGroupErrorType } from "../figma_app/763686";
import o from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { renderI18nText } from "../905/303541";
import { clearSelection, addToSelection } from "../figma_app/741237";
import { ow, _f, Hf, i$ } from "../figma_app/150804";
import { filterByErrorType, getMaxErrorType } from "../figma_app/264776";
import { pV, jO, lG, Z7, t as _$$t, Qb, Vf, Ii } from "../figma_app/689119";
var l = o;
export function $$m1({
  flushWithContainer: e
}) {
  let t = function () {
    let {
      allStates,
      selectedStates,
      stateGroupError,
      stateGroupSelectionMode
    } = selectWithShallowEqual(e => ({
      allStates: ow(e) ?? [],
      selectedStates: _f(e) ?? [],
      stateGroupError: Hf(e),
      stateGroupSelectionMode: i$(e)
    }));
    if (stateGroupSelectionMode === StateHierarchy.STATE_GROUP) {
      let t = () => {
        let t = filterByErrorType(allStates, stateGroupError).map(e => e.symbol.node_id);
        clearSelection();
        addToSelection(t);
      };
      switch (stateGroupError) {
        case StateGroupErrorType.PARSE_ERROR:
          return jsxs(Fragment, {
            children: [renderI18nText("design_systems.states_panel.some_layers_have_invalid_names"), jsx("div", {
              children: jsx("strong", {
                children: renderI18nText("design_systems.states_panel.prop_value_prop_value")
              })
            }), jsx("div", {
              className: pV,
              children: jsx(Button, {
                variant: "link",
                onClick: t,
                children: renderI18nText("design_systems.states_panel.select_invalid_variants")
              })
            })]
          });
        case StateGroupErrorType.DUPLICATE_STATE_ERROR:
          return jsxs(Fragment, {
            children: [renderI18nText("design_systems.states_panel.some_variants_have_the_same_property_values_applied"), jsx("div", {
              className: pV,
              children: jsx(Button, {
                variant: "link",
                onClick: t,
                children: renderI18nText("design_systems.states_panel.select_conflicting_variants")
              })
            })]
          });
        case StateGroupErrorType.MISSING_PROPERTIES_ERROR:
          return jsxs(Fragment, {
            children: [renderI18nText("design_systems.states_panel.some_variants_are_missing_properties"), jsx("div", {
              className: pV,
              children: jsx(Button, {
                variant: "link",
                onClick: t,
                children: renderI18nText("design_systems.states_panel.select_invalid_variants")
              })
            })]
          });
        case StateGroupErrorType.TOO_MANY_STATES_ERROR:
          return jsx(Fragment, {
            children: renderI18nText("design_systems.states_panel.components_with_more_than_1000_variants_may_experience_performance_issues")
          });
      }
    } else if (stateGroupSelectionMode === StateHierarchy.STATE || stateGroupSelectionMode === StateHierarchy.STATE_INSTANCE) switch (getMaxErrorType(selectedStates)) {
      case StateGroupErrorType.PARSE_ERROR:
        return jsxs(Fragment, {
          children: [renderI18nText("design_systems.states_panel.layer_has_invalid_name", {
            layers: selectedStates.length
          }), jsx("div", {
            children: jsx("strong", {
              children: renderI18nText("design_systems.states_panel.prop_value_prop_value")
            })
          })]
        });
      case StateGroupErrorType.DUPLICATE_STATE_ERROR:
        return jsx(Fragment, {
          children: renderI18nText("design_systems.states_panel.the_properties_and_values_of_variant_are_conflicting", {
            variants: selectedStates.length
          })
        });
      case StateGroupErrorType.MISSING_PROPERTIES_ERROR:
        return jsx(Fragment, {
          children: renderI18nText("design_systems.states_panel.variants_are_missing_one_or_more_properties", {
            variants: selectedStates.length
          })
        });
    }
    return null;
  }();
  return null === t ? null : jsx($$g0, {
    flushWithContainer: e,
    children: t
  });
}
export function $$g0({
  title: e,
  children: t,
  flushWithContainer: r,
  appendedClassName: i
}) {
  return jsxs("div", {
    className: l()(r ? jO : lG, i),
    children: [jsx("div", {
      className: Z7,
      children: jsx(_$$r, {})
    }), jsxs("div", {
      className: _$$t,
      children: [!!e && jsx("div", {
        className: Qb,
        children: e
      }), t]
    })]
  });
}
export function $$f2({
  title: e,
  children: t,
  closeButton: r
}) {
  return jsxs("div", {
    className: Vf,
    children: [jsxs("div", {
      className: Ii,
      children: [jsx("div", {
        className: Z7,
        children: jsx(_$$r, {})
      }), r]
    }), jsxs("div", {
      className: _$$t,
      children: [!!e && jsx("div", {
        className: Qb,
        children: e
      }), t]
    })]
  });
}
export const aV = $$g0;
export const aq = $$m1;
export const oE = $$f2;