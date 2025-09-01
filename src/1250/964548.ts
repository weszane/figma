import { jsx } from "react/jsx-runtime";
import { filterNotNullish } from "../figma_app/656233";
import { n as _$$n } from "../5132/715664";
import { D } from "../5132/780644";
import { l as _$$l } from "../905/241412";
import { J } from "../5132/948584";
import { W } from "../5132/887999";
import { t as _$$t } from "../5132/435788";
import { R } from "../1250/835893";
import { getFeatureFlags } from "../905/601108";
import { t as _$$t2 } from "../905/303541";
import { gN } from "../figma_app/976345";
import { L } from "../figma_app/990299";
import { FFileType } from "../figma_app/191312";
import { oQ, sq, GJ } from "../figma_app/53721";
import { z } from "../5132/283698";
import { _ as _$$_ } from "../figma_app/919092";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$y0({
  editorType: e,
  isDisabled: t,
  isLoading: n,
  onClick: _,
  showRequestLabel: p,
  showRequestSentLabel: g
}) {
  let y = {
    [FFileType.DESIGN]: {
      title: _$$t2("file_browser.creation_buttons.design"),
      brand: "design",
      dataTestId: "new-design-file-button",
      icon: jsx(_$$n, {})
    },
    [FFileType.WHITEBOARD]: {
      title: _$$t2("file_browser.creation_buttons.figjam"),
      brand: "whiteboard",
      dataTestId: "new-whiteboard-file-button",
      icon: jsx(D, {})
    },
    [FFileType.SLIDES]: {
      title: _$$t2("file_browser.creation_buttons.slide_deck"),
      brand: "piper",
      dataTestId: "new-slides-file-button",
      icon: jsx(_$$l, {})
    },
    [FFileType.SITES]: {
      title: _$$t2("file_browser.creation_buttons.sites"),
      brand: "seascape",
      dataTestId: `new-${oQ}-file-button`,
      icon: jsx(J, {}),
      badge: function () {
        if ("BETA" === z()) return _$$_.BETA;
      }()
    },
    [FFileType.COOPER]: {
      title: _$$t2("file_browser.creation_buttons.marketing_asset"),
      brand: "cooper",
      dataTestId: `new-${sq}-file-button`,
      icon: jsx(W, {}),
      badge: _$$_.BETA
    },
    [FFileType.FIGMAKE]: {
      title: _$$t2("file_browser.creation_buttons.figmake"),
      brand: "bake-filebrowser",
      dataTestId: `new-${GJ}-file-button`,
      icon: jsx(_$$t, {}),
      badge: getFeatureFlags().ai_ga ? void 0 : _$$_.BETA
    }
  }[e];
  let v = filterNotNullish([p ? _$$_.REQUEST_UPGRADE : null, g ? _$$_.REQUEST_SENT : null, y.badge]);
  return {
    key: e,
    isDisabled: t,
    isLoading: n,
    onClick: _,
    title: y.title,
    dataTestId: y.dataTestId,
    brand: y.brand,
    icon: y.icon,
    badges: v
  };
}
export function $$v1({
  isLoading: e,
  dispatch: t,
  targetFolderId: n
}) {
  return {
    key: "import-file",
    isLoading: e,
    onClick: () => {
      n && t(gN(n));
      t(L());
    },
    title: _$$t2("file_browser.creation_buttons.import"),
    dataTestId: "file-import-button",
    icon: jsx(R, {})
  };
}
export const p = $$y0;
export const u = $$v1;