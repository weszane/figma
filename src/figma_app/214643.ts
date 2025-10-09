import { useCallback, useId, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { iE, K0, kW, nI, nk, oS, Pf, UU, VN, wx } from "../905/32813"
import { getI18nString, renderI18nText } from "../905/303541"
import { variableSetDefaultModeService } from "../905/694231"
import { SvgComponent } from "../905/714743"
import { c$, l6, sK } from "../905/794875"
import { useDropdownState } from "../905/848862"
import { LoadingOverlay } from "../figma_app/858013"
import { A } from "../svg/660901"

export function $$h1({
  variableSet: e,
  modeDropdownStyle: t,
  entity: r,
  defaultModeId: s,
  isLibraryFileEnabled: o,
  libraryKey: p,
  ariaLabelledBy: _,
}) {
  let h = useDispatch<AppDispatch>()
  let g = useDropdownState()
  let f = "auto_inherit_mode_string"
  let E = e.modes ? e.modes[0].name : ""
  let y = useMemo(() => ({
    name: getI18nString("variables.mode_properties_panel.select.option.default_with_name", {
      modeName: E,
    }),
    id: f,
  }), [E])
  let b = s ? e.modes?.find(e => e.id === s) : y
  let [T, I] = useState(b)
  let S = useMemo(() => T?.id === f ? y : e.modes?.find(e => e.id === T?.id), [e, T, y])
  let v = useCallback((t) => {
    I(t)
    t.id === f
      ? variableSetDefaultModeService.deleteDefaultMode({
          libraryKey: p,
          entityType: r.entityType,
          entityId: r.entityId,
          variableSetKey: e.key,
        })
      : variableSetDefaultModeService.setDefaultMode({
          libraryKey: p,
          entityType: r.entityType,
          entityId: r.entityId,
          variableSetKey: e.key,
          defaultModeId: t.id,
        }).catch((e) => {
          I(T)
        })
  }, [T, p, r.entityType, r.entityId, e.key])
  return e.modes && e.modes.length !== 1 && r && b
    ? jsxs(l6, {
        ariaLabelledBy: _,
        className: t,
        dataTestId: `mode-dropdown-${e.id}`,
        disabled: !o,
        dispatch: h,
        dropdownShown: g,
        dropdownWidth: 150,
        formatter: m,
        id: `subscription-dropdown-${e.id}`,
        onChange: v,
        property: S,
        children: [jsx(c$, {
          value: y,
          children: getI18nString("variables.mode_properties_panel.select.option.default_with_name", {
            modeName: E,
          }),
        }), jsx(sK, {}), e.modes?.map(e => jsx(c$, {
          value: e,
          children: m.format(e),
        }, e.id))],
      })
    : jsx("div", {
        className: t,
      })
}
let m = {
  format: e => e.name,
}
export function $$g0({
  forBestMatches: e,
  variableSets: t,
  shouldDisplayDefaultModeDropdown: r,
  libraryKey: a,
  entity: d,
  isLibraryFileEnabled: u,
}) {
  let [m, g] = useState({})
  let [f, E] = useState(!1)
  let y = useId()
  if (!t || t.length === 0)
    return null
  r &&= t.some(e => e.modes && e.modes.length > 1)
  let b = !f && r && d && a
  return (b && variableSetDefaultModeService.getDefaultModes({
    libraryKey: a,
    entityType: d.entityType,
    entityId: d.entityId,
  }).then((e) => {
    g(e.data.meta)
    E(!0)
  }).catch(() => {
    E(!0)
  }), b)
    ? jsx(LoadingOverlay, {})
    : jsxs("div", {
        children: [!e && jsxs("div", {
          className: wx,
          children: [jsx("h2", {
            className: Pf,
            children: renderI18nText("design_systems.libraries_modal.header_variable_collections"),
          }), r && jsx("div", {
            className: Pf,
            children: renderI18nText("design_systems.libraries_modal.header_default_mode"),
          })],
        }), jsx("div", {
          className: e ? VN : iE,
          children: t.map(t => jsx("div", {
            className: nk,
            children: e
              ? jsxs(Fragment, {
                  children: [jsx(SvgComponent, {
                    className: oS,
                    svg: A,
                  }), jsx("span", {
                    className: UU,
                    children: t.name,
                  }), t.numVariableMatches && jsx("span", {
                    className: K0,
                    children: renderI18nText("design_systems.libraries_modal.plural.num_variable_match", {
                      numVariables: t.numVariableMatches,
                    }),
                  })],
                })
              : jsxs("div", {
                  className: kW,
                  children: [jsx("span", {
                    id: y,
                    className: UU,
                    children: t.name,
                  }), r && d && a && jsx($$h1, {
                    ariaLabelledBy: y,
                    variableSet: t,
                    modeDropdownStyle: nI,
                    libraryKey: a,
                    entity: d,
                    defaultModeId: m[t.key],
                    isLibraryFileEnabled: u,
                  }) || jsx("div", {
                    className: nI,
                  }), jsx("span", {
                    className: K0,
                    children: renderI18nText("design_systems.libraries_modal.plural.num_variables", {
                      numVariables: t.numVariables,
                    }),
                  })],
                }),
          }, t.id)),
        })],
      })
}
export const RV = $$g0
export const fM = $$h1
