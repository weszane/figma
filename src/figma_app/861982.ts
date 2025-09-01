import { jsx, jsxs } from "react/jsx-runtime";
import { g8, MJ } from "../figma_app/860955";
import { t as _$$t } from "../905/303541";
import { jd } from "../figma_app/106207";
import { x } from "../905/619833";
import { vt } from "../905/862883";
import { Pu, Qq } from "../figma_app/4616";
import { yz } from "../905/784221";
import { i$, YM } from "../905/122282";
import { w1 } from "../figma_app/835688";
import { Jv } from "../figma_app/553488";
export function $$h3({
  dispatch: e,
  fileKey: t,
  templateName: r
}) {
  return {
    recordingKey: "publishCustomTemplate",
    name: "publish-template",
    displayText: _$$t("tile.dropdown.use_in_new_file"),
    callback() {
      e(jd({
        templateIdentifier: {
          type: vt.TeamTemplate,
          file_key: t
        },
        templateName: r
      }));
    }
  };
}
export function $$m1({
  dispatch: e,
  fileKey: t,
  templateName: r
}) {
  return jsx(Pu, {
    onClick: () => {
      e(jd({
        templateIdentifier: {
          type: vt.TeamTemplate,
          file_key: t
        },
        templateName: r
      }));
    },
    recordingKey: "publishCustomTemplate",
    children: _$$t("tile.dropdown.use_in_new_file")
  });
}
export async function $$g2({
  dispatch: e,
  file: t,
  source: r,
  fileNeedsMovingBeforePublish: n
}) {
  if (t) {
    if (await Jv(t)) {
      i$(e);
      return;
    }
    n ? x({
      file: t,
      dispatch: e
    }) : YM(e, t.key, t.editor_type, r);
  }
}
export function $$f4({
  dispatch: e,
  file: t,
  isPublished: r,
  fileNeedsMovingBeforePublish: n,
  source: i
}) {
  let s = () => {
    $$g2({
      dispatch: e,
      file: t,
      source: i,
      fileNeedsMovingBeforePublish: n
    });
  };
  return r ? {
    displayText: _$$t("tile.dropdown.manage_template"),
    name: "manage-template",
    children: [{
      recordingKey: "publishCustomTemplate",
      name: "publish-template",
      displayText: _$$t("tile.dropdown.update_template"),
      callback: s
    }, {
      recordingKey: "unpublishCustomTemplate",
      name: "unpublish-template",
      displayText: _$$t("tile.dropdown.unpublish_template"),
      callback: yz(e, t.key)
    }]
  } : {
    recordingKey: "publishCustomTemplate",
    name: "publish-template",
    displayText: _$$t("tile.dropdown.publish_as_template"),
    callback: s,
    "data-onboarding-key": w1
  };
}
export function $$E0({
  dispatch: e,
  file: t,
  isPublished: r,
  fileNeedsMovingBeforePublish: s,
  source: o
}) {
  let l = () => {
    $$g2({
      dispatch: e,
      file: t,
      source: o,
      fileNeedsMovingBeforePublish: s
    });
  };
  return r ? jsxs(g8, {
    children: [jsx(Qq, {
      children: _$$t("tile.dropdown.manage_template")
    }), jsxs(MJ, {
      children: [jsx(Pu, {
        onClick: l,
        recordingKey: "publishCustomTemplate",
        children: _$$t("tile.dropdown.update_template")
      }), jsx(Pu, {
        onClick: yz(e, t.key),
        recordingKey: "unpublishCustomTemplate",
        children: _$$t("tile.dropdown.unpublish_template")
      })]
    })]
  }) : jsx(Pu, {
    onClick: l,
    "data-onboarding-key": w1,
    recordingKey: "publishCustomTemplate",
    children: _$$t("tile.dropdown.publish_as_template")
  });
}
export const R5 = $$E0;
export const Z5 = $$m1;
export const ZW = $$g2;
export const rC = $$h3;
export const we = $$f4;