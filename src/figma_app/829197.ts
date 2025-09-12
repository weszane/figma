import { useCallback } from "react";
import { ColorSpaceEnum } from "../figma_app/763686";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { createActionCreator } from "../905/73481";
import { debugState } from "../905/407919";
import { userColorProfileAtomFamily } from "../905/888985";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { uE } from "../figma_app/314264";
import { FColorSpaceType } from "../figma_app/191312";
import { M } from "../905/366117";
let h = {
  colorProfilePreference: FColorSpaceType.DEFAULT,
  id: ""
};
let $$m2 = createActionCreator("USER_UPDATE_COLOR_PROFILE");
let g = atom(e => {
  let t = e(userColorProfileAtomFamily({}));
  let r = h.colorProfilePreference;
  "loading" === t.status && void 0 !== debugState && debugState?.getState()?.user?.color_profile ? r = debugState.getState().user?.color_profile : t.data?.userColorProfilePreference?.colorProfilePreference && (r = t.data?.userColorProfilePreference?.colorProfilePreference);
  let n = {
    colorProfilePreference: function (e) {
      switch (e) {
        case FColorSpaceType.DEFAULT:
          return M.DEFAULT;
        case FColorSpaceType.SRGB:
          return M.SRGB;
        case "display-p3":
        case FColorSpaceType.DISPLAY_P3:
          return M.DISPLAY_P3;
      }
    }(r),
    id: t.data?.userColorProfilePreference?.id ?? h.id
  };
  void 0 !== debugState && debugState?.getState()?.user?.color_profile !== n.colorProfilePreference && debugState.dispatch($$m2({
    color_profile: n.colorProfilePreference
  }));
  return n;
});
export function $$f3(e) {
  switch (e) {
    case M.DEFAULT:
    case M.SRGB:
      return ColorSpaceEnum.SRGB;
    case M.DISPLAY_P3:
      return ColorSpaceEnum.DISPLAY_P3;
  }
}
export function $$E1() {
  return atomStoreManager.get(g);
}
export function $$y5() {
  return useAtomWithSubscription(g);
}
export function $$b4({
  colorProfilePreference: e,
  id: t,
  eventName: r = "user_manual_change",
  additionalDataToLog: n
}) {
  if (e === h.colorProfilePreference) return;
  !function (e) {
    let t = debugState.getState();
    uE("color_profile_preference", t, {
      userColorProfile: e.userColorProfilePreference.colorProfilePreference,
      userColorProfileId: e.userColorProfilePreference.id,
      eventName: e.eventName,
      ...(e.additionalDataToLog ?? {})
    });
  }({
    userColorProfilePreference: {
      colorProfilePreference: e,
      id: t
    },
    eventName: r,
    additionalDataToLog: n
  });
  let i = XHR.put("/api/user", {
    color_profile: e
  });
  if (t) WB()?.optimisticallyUpdate({
    UserColorProfilePreference: {
      [t]: {
        colorProfilePreference: e
      }
    }
  }, i);else {
    let t = debugState.getState().user?.id;
    if (!t) return;
    WB()?.optimisticallyCreate({
      UserColorProfilePreference: {
        "optimistic-id": {
          colorProfilePreference: e,
          userId: t,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    }, i);
  }
}
export function $$T0() {
  let e = $$y5();
  return useCallback((t, r) => {
    e.colorProfilePreference === M.DEFAULT && $$b4({
      colorProfilePreference: t,
      id: e.id,
      eventName: `default_to_${t === M.SRGB ? "srgb" : "p3"}`,
      additionalDataToLog: {
        desktopSetting: r.desktopSetting,
        p3Plugins: r.p3Plugins ? Object.values(r.p3Plugins) : null,
        canSeeP3: r.canSeeP3
      }
    });
  }, [e.colorProfilePreference, e.id]);
}
export const C$ = $$T0;
export const YN = $$E1;
export const eu = $$m2;
export const hP = $$f3;
export const it = $$b4;
export const jK = $$y5;