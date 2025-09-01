import { Qw } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { t } from "../905/303541";
import { HH } from "../figma_app/828186";
import { FFileType } from "../figma_app/191312";
import { zCd } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { Az, No } from "../figma_app/465071";
import { aI } from "../figma_app/552876";
import { oz } from "../905/561485";
var $$n0;
export function $$h1(e) {
  return {
    canCreateDesignFileWithReasons: e.canCreateDesignFileWithReasons,
    canCreateFigjamFileWithReasons: e.canCreateFigjamFileWithReasons,
    canCreateSlidesFileWithReasons: e.canCreateSlidesFileWithReasons,
    canCreateSitesFileWithReasons: e.canCreateSitesFileWithReasons,
    canCreateCooperFileWithReasons: e.canCreateCooperFileWithReasons,
    canCreateFigmakeFileWithReasons: e.canCreateFigmakeFileWithReasons
  };
}
export function $$m2(e) {
  return {
    [FFileType.DESIGN]: e.canCreateDesignFileWithReasons,
    [FFileType.WHITEBOARD]: e.canCreateFigjamFileWithReasons,
    [FFileType.SLIDES]: e.canCreateSlidesFileWithReasons,
    [FFileType.SITES]: oz() ? e.canCreateSitesFileWithReasons : null,
    [FFileType.COOPER]: HH() ? e.canCreateCooperFileWithReasons : null,
    [FFileType.FIGMAKE]: aI() ? e.canCreateFigmakeFileWithReasons : null
  };
}
export function $$g4(e, t) {
  let r = $$m2(e)[t];
  return !!r && r.result;
}
export async function $$f3(e, t) {
  let {
    project
  } = await M4.fetch(zCd.Query({
    projectId: e
  }));
  return !!project && $$g4(project, t);
}
export function $$E5(e) {
  return Object.values($$m2(e)).some(e => !!e && e.result);
}
export function $$y6(e) {
  let t = Rs(zCd, {
    projectId: e
  }, {
    enabled: !!e
  });
  return Qw.useTransform(t, e => e.project);
}
export function $$b7() {
  return Az(No()).transform(e => e ? t("file_browser.creation_buttons.disabled_by_organization") : t("file_browser.creation_buttons.disabled_by_team"));
}
(e => {
  function t(e, t) {
    function r(e) {
      return "boolean" == typeof e ? {
        result: e,
        publicDenyReasons: []
      } : e;
    }
    let n = {
      canCreateCooperFileWithReasons: r(e),
      canCreateDesignFileWithReasons: r(e),
      canCreateFigjamFileWithReasons: r(e),
      canCreateSlidesFileWithReasons: r(e),
      canCreateSitesFileWithReasons: r(e),
      canCreateFigmakeFileWithReasons: r(e)
    };
    t && Object.entries(t).forEach(([e, t]) => {
      n[e] = r(t);
    });
    return n;
  }
  e.generate = t;
  e.enabled = function () {
    return t(!0);
  };
  e.disabled = function () {
    return t(!1);
  };
})($$n0 || ($$n0 = {}));
export const DI = $$n0;
export const VI = $$h1;
export const av = $$m2;
export const bJ = $$f3;
export const d6 = $$g4;
export const f3 = $$E5;
export const nt = $$y6;
export const qI = $$b7;