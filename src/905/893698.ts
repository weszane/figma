import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventShield } from "../905/821217";
import { DialogTriggerButton } from "../905/976845";
import { A as _$$A } from "../905/891805";
import { t as _$$t } from "../905/947268";
import { Z } from "../905/498136";
import { e as _$$e } from "../905/295932";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { Ay } from "../figma_app/272902";
import { useStorageEventSync } from "../905/657224";
import { analyticsEventManager } from "../905/449184";
import { PickerOptionType } from "../905/211621";
import { X3, MM } from "../figma_app/236327";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { setInstanceSwapPickerListLayout } from "../figma_app/91703";
import { Dm } from "../figma_app/8833";
import { useDropdownState } from "../905/848862";
import { R2 } from "../figma_app/188908";
import { MB } from "../figma_app/525558";
import { fileLaunchHelper as _$$S } from "../905/459477";
let $$C1 = "instance_swap_settings_dropdown-";
let T = e => `${$$C1}${e}`;
let $$k2 = forwardRef(function ({
  pickerType: e,
  includeFolderSetting: t,
  queryId: i,
  sessionId: d
}, c) {
  let u = useRef(null);
  let p = useCallback(() => {
    u.current?.focus();
  }, []);
  let h = T(e);
  let g = useDropdownState();
  let _ = g?.type === h;
  let y = useDispatch();
  let v = useCallback(() => {
    _ ? y(hideDropdownAction()) : y(showDropdownThunk({
      type: h,
      data: {
        position: {
          top: u.current?.getBoundingClientRect().height,
          right: 0
        }
      }
    }));
  }, [y, h, _]);
  let I = useMemo(() => {
    if (_) return g.data?.position;
  }, [g?.data?.position, _]);
  return jsxs("div", {
    style: {
      position: "relative"
    },
    "data-testid": "instance-swapper-settings-container",
    children: [jsx(EventShield, {
      eventListeners: _ ? ["onMouseDown"] : [],
      children: jsx(DialogTriggerButton, {
        onClick: v,
        "aria-expanded": _,
        ref: Ay(u, c),
        "aria-label": getI18nString("design_systems.instance_swap_picker.settings"),
        "aria-haspopup": "listbox",
        htmlAttributes: {
          "data-testid": "instance-swapper-settings-button"
        },
        children: jsx(_$$A, {})
      })
    }), _ && jsx(R, {
      position: I,
      dropdownId: h,
      includeFolderSetting: t,
      focusIconButton: p,
      sessionId: d,
      queryId: i,
      isPreferredValues: e === PickerOptionType.PREFERRED_VALUES_PICKER
    })]
  });
});
function R({
  position: e,
  includeFolderSetting: t,
  dropdownId: i,
  sessionId: s,
  queryId: o,
  focusIconButton: l,
  isPreferredValues: p
}) {
  let m = _$$S.useOpenFileProperties();
  let h = useDispatch();
  let f = useCallback(() => {
    h(hideDropdownAction());
  }, [h]);
  let E = R2("number" == typeof e?.top ? e.top : void 0);
  let C = useSelector(e => e.instanceSwapPickerListLayout);
  let T = useCallback(e => {
    h(setInstanceSwapPickerListLayout({
      isListLayout: e
    }));
  }, [h]);
  let k = _$$S.useTrackViewToggle({
    sessionId: s,
    queryId: o,
    isPreferredValues: p
  });
  let R = useCallback(e => {
    T(e);
    k(e);
  }, [T, k]);
  let [N, O] = $$P0();
  let D = useCallback(() => R(!1), [R]);
  let L = useCallback(() => R(!0), [R]);
  let F = useCallback(() => {
    let e = !N;
    O(e);
    analyticsEventManager.trackDefinedEvent("instance_swap_picker.toggle_show_folders", {
      sessionId: s,
      showFolders: e,
      ...m,
      isPreferredValues: p
    });
  }, [m, p, s, O, N]);
  let M = MB({
    onBoth: D,
    onKeyDown: l
  });
  let j = MB({
    onBoth: L,
    onKeyDown: l
  });
  let U = MB({
    onBoth: F,
    onKeyDown: l
  });
  let B = useMemo(() => ({
    ...styleBuilderInstance.borderBox.add({
      width: "169px",
      overflowY: "auto"
    }).$,
    ...e,
    maxHeight: E
  }), [E, e]);
  return jsxs(X3, {
    className: Dm,
    positionAbsolute: !0,
    style: B,
    id: i,
    hideDropdown: f,
    autofocusPrevElementOnEsc: !0,
    children: [jsxs(MM, {
      checked: !C,
      onClick: M,
      children: [jsx(_$$t, {}), renderI18nText("design_systems.instance_swap_picker.grid")]
    }, "grid"), jsxs(MM, {
      checked: C,
      onClick: j,
      children: [jsx(Z, {}), renderI18nText("design_systems.instance_swap_picker.list")]
    }, "list"), !!t && jsxs(MM, {
      checked: N,
      onClick: U,
      children: [jsx(_$$e, {}), renderI18nText("design_systems.instance_swap_picker.show_subfolders")]
    }, "subfolders")]
  });
}
let N = atom(!0);
export function $$P0() {
  let [e, t] = useAtomValueAndSetter(N);
  let i = useCallback(e => "instance-swapper-show-folders" === e.key && null != e.newValue, []);
  let n = useCallback(i => {
    if (i) try {
      let n = JSON.parse(i);
      "boolean" == typeof n && e !== n && t(n);
    } catch (e) {}
  }, [e, t]);
  useStorageEventSync({
    onSync: n,
    shouldSyncValue: i
  });
  return [e, t];
}
export const Pk = $$P0;
export const fn = $$C1;
export const sX = $$k2;