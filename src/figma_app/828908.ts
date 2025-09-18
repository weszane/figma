import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { desktopAPIInstance } from "../figma_app/876459";
import { postUserFlag } from "../905/985254";
import { selectUserFlag } from "../905/940356";
function l(e) {
  switch (e) {
    case "default":
      return "color_management_desktop_app_setting_default";
    case "unmanaged":
      return "color_management_desktop_app_setting_unmanaged";
    case "managed":
      return "color_management_desktop_app_setting_managed";
    case "srgb":
      return "color_management_desktop_app_setting_srgb";
  }
}
function d(e, t) {
  return e.getState().userFlags[t];
}
function c(e, t, r) {
  let {
    isDefault,
    isManaged,
    isSrgb,
    isUnmanaged
  } = t;
  let d = {};
  isDefault && "default" !== r && (d.color_management_desktop_app_setting_default = !1);
  isUnmanaged && "unmanaged" !== r && (d.color_management_desktop_app_setting_unmanaged = !1);
  isManaged && "managed" !== r && (d.color_management_desktop_app_setting_managed = !1);
  isSrgb && "srgb" !== r && (d.color_management_desktop_app_setting_srgb = !1);
  let c = isDefault && "default" === r || isUnmanaged && "unmanaged" === r || isManaged && "managed" === r || isSrgb && "srgb" === r;
  void 0 === r || c || (d[l(r)] = !0);
  Object.keys(d).length > 0 && e(postUserFlag(d));
}
export function $$u1(e) {
  if (!desktopAPIInstance) return;
  let t = desktopAPIInstance?.getLegacyColorSpacePreference();
  c(e.dispatch, {
    isDefault: !!d(e, l("default")),
    isUnmanaged: !!d(e, l("unmanaged")),
    isManaged: !!d(e, l("managed")),
    isSrgb: !!d(e, l("srgb"))
  }, t);
}
export function $$p0() {
  let e = !!selectUserFlag(l("default"));
  let t = !!selectUserFlag(l("unmanaged"));
  let r = !!selectUserFlag(l("managed"));
  let a = !!selectUserFlag(l("srgb"));
  let s = useDispatch();
  let d = useCallback(n => {
    c(s, {
      isDefault: e,
      isUnmanaged: t,
      isManaged: r,
      isSrgb: a
    }, n);
  }, [s, e, r, a, t]);
  let u = null;
  e && (u = "default");
  t && (u = "unmanaged");
  r && (u = "managed");
  a && (u = "srgb");
  return [u, d];
}
export const jJ = $$p0;
export const wH = $$u1;