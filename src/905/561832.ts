import { jsx, jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { wA } from "../vendor/514228";
import { N as _$$N } from "../905/438674";
import { $n } from "../905/521428";
import { kul } from "../figma_app/763686";
import { sx } from "../905/449184";
import { k as _$$k } from "../905/651849";
import { Ay } from "../905/612521";
import { h as _$$h } from "../905/207101";
import { Point } from "../905/736624";
import { XHR } from "../905/910117";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { sf } from "../905/929976";
import { Cp } from "../905/292918";
import { Nu, ie, ov, E as _$$E } from "../905/300250";
import { Ce } from "../905/156213";
import { fu } from "../figma_app/831799";
import { HJ } from "../905/760074";
import { oJ } from "../905/346794";
import { nT } from "../figma_app/53721";
import { PW, Kn } from "../905/535806";
import { e0 } from "../905/696396";
import { Ju, ZU } from "../905/102752";
import { Ao } from "../905/748636";
import { ss } from "../905/746499";
var $$P1 = (e => (e[e.TIMED_OUT = 0] = "TIMED_OUT", e[e.COULD_NOT_START = 1] = "COULD_NOT_START", e[e.BRANCH_ARCHIVED = 2] = "BRANCH_ARCHIVED", e[e.STALE_BRANCH_POINT = 3] = "STALE_BRANCH_POINT", e[e.COULD_NOT_COMPLETE = 4] = "COULD_NOT_COMPLETE", e))($$P1 || {});
let O = async (e, t, i) => {
  e.dispatch(Nu({}));
  e.dispatch(_$$F.enqueue({
    message: t,
    icon: zX.SPINNER,
    type: "file-merge-submit"
  }));
  await XHR.put(`/api/file_merge/${e.failureInfo.file_merge_id}`, {
    closed: !0
  }).catch(t => {
    400 === t.status && (_$$k.warn(t), HJ(Error(t?.data?.message || "Unknown error"), PW.ON_MERGE, e.mergeParams.direction, {
      file_merge_id: e.failureInfo.file_merge_id
    }));
  });
  await oJ(kul.JOINED).then(() => {
    e.dispatch(_$$F.enqueue({
      message: i,
      icon: zX.CHECK,
      type: "file-merge-submit"
    }));
    e.dispatch(ie({}));
  });
};
let D = async (e, t, i) => {
  e.dispatch(Nu({}));
  e.dispatch(_$$F.enqueue({
    message: t,
    icon: zX.SPINNER,
    type: "file-merge-submit"
  }));
  await XHR.del(`/api/file_merge/${e.failureInfo.file_merge_id}`);
  await oJ(kul.JOINED).then(() => {
    e.dispatch(_$$F.enqueue({
      message: i,
      icon: zX.CHECK,
      type: "file-merge-submit"
    }));
    e.dispatch(ie({}));
  });
};
let L = e => {
  e.mergeParams.direction === Kn.TO_SOURCE ? e.dispatch(sf({
    view: "fullscreen",
    fileKey: e.mergeParams.branchKey,
    editorType: nT.Design,
    mergeParams: {
      ...e.mergeParams,
      mergeOnFileOpen: !1
    }
  })) : e.dispatch(Cp(e.mergeParams));
};
let F = (e, t, i) => {
  let n;
  let r;
  let a = ["pending", "success"];
  let s = t === Kn.TO_SOURCE ? "merge" : "update";
  let [o, l] = a.map(e => _$$t(`collaboration.branching.merge_error.confirm_${s}_${e}`));
  let [d, c] = a.map(e => _$$t(`collaboration.branching.merge_error.cancel_${s}_${e}`));
  let [p, m] = a.map(e => _$$t(`collaboration.branching.merge_error.cancel_previous_${s}_${e}`));
  switch (e) {
    case 0:
      n = tx(`collaboration.branching.merge_error.review_and_confirm_${s}_description`);
      return {
        title: tx("collaboration.branching.merge_error.review_and_confirm"),
        description: n,
        primaryButtonText: tx("collaboration.branching.merge_error.confirm"),
        secondaryButtonText: tx("collaboration.branching.merge_error.cancel"),
        primaryAction: async e => {
          await O(e, o, l);
        },
        secondaryAction: async e => {
          await D(e, d, c);
        }
      };
    case 1:
      return {
        title: tx(`collaboration.branching.merge_error.could_not_start_${s}`),
        description: n = tx(`collaboration.branching.merge_error.could_not_start_${s}_description`),
        primaryButtonText: tx("collaboration.branching.merge_error.retry_merge"),
        secondaryButtonText: tx("collaboration.branching.merge_error.cancel"),
        primaryAction: e => {
          L(e);
        },
        secondaryAction: e => {
          e.dispatch(ov({
            hideModal: !1,
            mergeParams: {
              branchKey: e.mergeParams.branchKey,
              sourceKey: e.mergeParams.sourceKey,
              direction: t,
              branchModalTrackingId: i
            },
            userInitiated: !0,
            reason: "user_cancelled_merge_after_error"
          }));
        }
      };
    case 2:
      return {
        title: tx(`collaboration.branching.merge_error.could_not_start_${s}`),
        description: n = tx("collaboration.branching.merge_error.branch_archived_description"),
        primaryButtonText: tx("base_notifications.dismiss"),
        primaryAction: () => { }
      };
    case 3:
      return {
        title: tx(`collaboration.branching.merge_error.could_not_start_${s}`),
        description: n = tx("collaboration.branching.merge_error.branch_already_updated_description"),
        primaryButtonText: tx("collaboration.branching.merge_error.reload"),
        primaryAction: () => {
          Ay.reload("Branch point changed");
        }
      };
    case 4:
      return {
        title: tx("collaboration.branching.merge_error.merge_in_progress"),
        description: n = tx("collaboration.branching.merge_error.merge_in_progress_description"),
        primaryButtonText: tx("collaboration.branching.merge_error.retry_merge"),
        primaryAction: async e => {
          await D(e, p, m);
          L(e);
        },
        secondaryLinkButton: {
          text: tx("collaboration.branching.merge_error.contact_support"),
          href: "https://help.figma.com/hc/requests/new"
        }
      };
  }
};
function M(e) {
  let t = useContext(ss);
  let i = F(e.view, e.mergeParams.direction, t);
  let {
    secondaryLinkButton,
    secondaryButtonText,
    secondaryAction
  } = i;
  let h = wA();
  _$$h(() => {
    sx("Merge Error Modal Shown", {
      view: $$P1[e.view],
      branchKey: e.mergeParams.branchKey,
      sourceKey: e.mergeParams.sourceKey,
      direction: e.mergeParams.direction,
      fileMergeId: e.failureInfo.file_merge_id,
      branchModalTrackingId: t
    }, {
      forwardToDatadog: !0
    });
  });
  return jsx(fu, {
    name: e0.BRANCHING_MERGE_ERROR_MODAL,
    children: jsx(Ao, {
      isCloseHidden: !0,
      title: i.title,
      headerClassName: "merge_error_modal--title--Ys0zA",
      initialPosition: new Point(window.innerWidth / 2 - 246, window.innerHeight / 2),
      children: jsxs("div", {
        className: "merge_error_modal--content--W-q2c",
        children: [jsx("p", {
          children: i.description
        }), jsxs("div", {
          className: "merge_error_modal--buttonRow--Im07r",
          children: [secondaryLinkButton && jsx(_$$N.Button, {
            newTab: !0,
            variant: "secondary",
            href: secondaryLinkButton.href,
            onClick: () => {
              h(Ce());
              h(_$$E({}));
            },
            children: secondaryLinkButton.text
          }), secondaryButtonText && secondaryAction && jsx("span", {
            className: _$$s.ml8.$,
            children: jsx($n, {
              variant: "secondary",
              onClick: () => {
                h(Ce());
                h(_$$E({}));
                secondaryAction({
                  mergeParams: e.mergeParams,
                  failureInfo: e.failureInfo,
                  dispatch: h
                });
              },
              children: secondaryButtonText
            })
          }), jsx("span", {
            className: _$$s.ml8.$,
            children: jsx($n, {
              variant: "primary",
              onClick: () => {
                h(Ce());
                h(_$$E({}));
                i.primaryAction({
                  mergeParams: e.mergeParams,
                  failureInfo: e.failureInfo,
                  dispatch: h
                });
              },
              children: i.primaryButtonText
            })
          })]
        })]
      })
    })
  });
}
M.displayName = "MergeErrorModal";
export let $$j0 = Ju(M, "MergeErrorModal", ZU.YES);
export const my = $$j0;
export const RK = $$P1; 
