import { Multiplayer } from "../figma_app/763686";
import { createActionCreator } from "../905/73481";
import { Q } from "../figma_app/550678";
import { Point } from "../905/736624";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { yJ } from "../905/395917";
import { yJ as _$$yJ } from "../figma_app/240735";
import { yJ as _$$yJ2 } from "../figma_app/24841";
import { jS, Pv } from "../905/619652";
import { Pf, ck } from "../905/952832";
import { u as _$$u } from "../905/774364";
let E = (e, t) => {
  let r = t / Math.min(e.width, e.height);
  let n = e.width * r;
  let i = e.height * r;
  return {
    x: (t - n) / 2,
    y: (t - i) / 2,
    width: n,
    height: i
  };
};
export function $$y3(e, t, r, n) {
  let i = document.createElement("canvas");
  let a = i.getContext("2d");
  i.width = i.height = t;
  a.fillStyle = "image/png" === n ? "transparent" : "#FFF";
  a.fillRect(0, 0, t, t);
  a.drawImage(i, 0, 0);
  a.drawImage(e, r.x, r.y, r.width, r.height);
  return "image/png" === n ? i.toDataURL() : i.toDataURL("image/jpeg", .92);
}
export function $$b4(e) {
  let t = atob(e.slice(e.indexOf(",") + 1));
  let r = [];
  for (let e = 0; e < t.length; e++) r.push(t[e].charCodeAt(0));
  return new Uint8Array(r);
}
export async function $$T2(e, t, r) {
  let n = function () {
    let t = e.originalImageWidth && e.originalImageHeight ? e.originalImageWidth / e.originalImageHeight : 1;
    let r = jS(e, new Point(Math.max(Pf.LARGE, Pf.LARGE * t), Math.max(Pf.LARGE, Pf.LARGE / t)), {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    });
    return r && r.pixels && r.pixelSize ? Pv(r.pixels, r.pixelSize) : "";
  }();
  if (n) try {
    let e = await function (e) {
      let t = new Image();
      return new Promise((r, n) => {
        t.onerror = e => {
          n(e);
        };
        t.onload = () => {
          URL.revokeObjectURL(e);
          r(t);
        };
        t.src = e;
      });
    }(n);
    if (!e) {
      FlashActions.error(getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"));
      return;
    }
    r($$A5({
      entity: t,
      entityType: ck.CURRENT_USER,
      small: $$b4($$y3(e, Pf.SMALL, E(e, Pf.SMALL))),
      large: $$b4($$y3(e, Pf.LARGE, E(e, Pf.LARGE))),
      contentType: "image/jpeg"
    }));
  } catch (e) {
    r(FlashActions.error(getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo")));
    console.error(getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"), e);
  }
}
let $$I1 = createActionCreator("AVATAR_EDITOR_RESET");
let S = createOptimistThunk((e, t) => {
  if (t.entityType === ck.CURRENT_USER) XHR.put("/api/user", {
    img_url: t.smallUrl,
    img_url_500_500: t.largeUrl
  }).then(function ({
    data: t
  }) {
    let r = t.meta;
    r?.img_url && Multiplayer?.setImgUrl(r.img_url);
    e.dispatch(_$$yJ2({
      user: r,
      userInitiated: !1
    }));
    e.dispatch($$I1());
  }, t => {
    e.dispatch(FlashActions.error(getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo")));
    console.error(getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"), t);
    e.dispatch($$I1());
  });else if (t.entityType === ck.TEAM) {
    let r = t.entity.id;
    XHR.put(`/api/teams/${r}`, {
      img_url: t.smallUrl,
      img_url_500_500: t.largeUrl
    }).then(function ({
      data: t
    }) {
      let r = t.meta;
      e.dispatch(_$$yJ({
        team: r,
        userInitiated: !1
      }));
      e.dispatch($$I1());
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("avatar_actions.team_icon_updated")
      }));
    }, t => {
      e.dispatch(FlashActions.error(getI18nString("avatar_actions.an_error_occurred_while_setting_the_team_icon")));
      console.error(getI18nString("avatar_actions.an_error_occurred_while_setting_the_team_icon"));
      e.dispatch($$I1());
    });
  } else if (t.entityType === ck.ORG) {
    let r = t.entity.id;
    XHR.put(`/api/orgs/${r}`, {
      img_url: t.smallUrl,
      img_url_500_500: t.largeUrl
    }).then(function ({
      data: t
    }) {
      let r = t.meta;
      e.dispatch(yJ({
        org: r
      }));
      e.dispatch($$I1());
    }, t => {
      e.dispatch(FlashActions.error(getI18nString("avatar_actions.an_error_occurred") + t.data?.message));
      console.error(getI18nString("avatar_actions.an_error_occurred_while_setting_the_organization_icon"), t);
      e.dispatch($$I1());
    });
  } else if (t.entityType === ck.WORKSPACE) {
    let r = t.entity.id;
    _$$u.updateImage({
      workspaceId: r,
      img_url: t.smallUrl,
      img_url_500_500: t.largeUrl,
      onfulfilled: () => {
        e.dispatch(VisualBellActions.enqueue({
          message: getI18nString("avatar_actions.workspace_icon_updated")
        }));
      },
      onrejected: t => {
        let r = getI18nString("avatar_actions.an_error_occurred_while_setting_the_workspace_icon");
        e.dispatch(FlashActions.error(r));
        console.error(r);
        e.dispatch($$I1());
      }
    });
  }
});
let $$v0 = createActionCreator("AVATAR_EDITOR_UPLOAD");
let $$A5 = createOptimistThunk((e, t) => {
  Promise.all([Q("profile", t.small, t.contentType), Q("profile", t.large, t.contentType)]).then(function (r) {
    let n = r[0].data.meta.url;
    let i = r[1].data.meta.url;
    e.dispatch(S({
      entity: t.entity,
      entityType: t.entityType,
      smallUrl: n,
      largeUrl: i
    }));
  }, () => {
    e.dispatch(FlashActions.error(getI18nString("avatar_actions.an_error_occurred_while_uploading_the_image")));
    e.dispatch($$I1());
  });
  e.dispatch($$v0(t));
});
let $$x6 = createActionCreator("AVATAR_EDITOR_INIT");
export const AY = $$v0;
export const PI = $$I1;
export const V8 = $$T2;
export const _E = $$y3;
export const nx = $$b4;
export const pI = $$A5;
export const s6 = $$x6;