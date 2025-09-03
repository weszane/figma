import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { tx, t as _$$t } from "../905/303541";
import { tc } from "../905/15667";
import { ud } from "../905/513035";
import { VG } from "../905/389382";
import { FProductAccessType } from "../figma_app/191312";
let $$c6 = {
  type: "RequestOrgUpgradeModal"
};
let $$u4 = {
  type: "RequestProUpgradeModal"
};
export function $$p11(e, t, i, c, u) {
  if (c === tc.USER_SETTINGS) switch (u) {
    case ud.COLLABORATOR:
      return tx("request_upgrade_modal.body.collab");
    case ud.DEVELOPER:
      return tx("request_upgrade_modal.body.dev");
    case ud.EXPERT:
      return tx("request_upgrade_modal.body.full");
  }
  if (getFeatureFlags().ai_ga && c === tc.PUBLISH_SITES && e === FProductAccessType.FIGMAKE) return tx("request_upgrade_modal.body.figmake.publish");
  if (getFeatureFlags().ai_ga && c === tc.CODE_CHAT_LIMIT && u === ud.EXPERT) return tx("request_upgrade_modal.body.ai_ga.higher_limits", {
    productName: VG(e)
  });
  if (t) switch (e) {
    case FProductAccessType.DESIGN:
      return i ? tx("1_click_expansion.well_let_you_know_when") : tx("request_upgrade_modal.body.design", {
        planName: t
      });
    case FProductAccessType.DEV_MODE:
      return i ? tx("dev_handoff.paywall.success_modal.no_grace_period.description") : tx("request_upgrade_modal.body.dev_mode", {
        planName: t
      });
    case FProductAccessType.WHITEBOARD:
      return tx("request_upgrade_modal.body.figjam", {
        planName: t
      });
    case FProductAccessType.SLIDES:
      return tx("request_upgrade_modal.body.slides", {
        planName: t
      });
    case FProductAccessType.SITES:
      return tx("request_upgrade_modal.body.sites", {
        planName: t
      });
    case FProductAccessType.FIGMAKE:
      return tx("request_upgrade_modal.body.figmake", {
        planName: t
      });
    case FProductAccessType.COOPER:
      return tx("request_upgrade_modal.body.design", {
        planName: t
      });
    default:
      throwTypeError(e);
  }
  switch (e) {
    case FProductAccessType.DESIGN:
      return i ? tx("1_click_expansion.well_let_you_know_when") : tx("request_upgrade_modal.body.no_plan_name.design");
    case FProductAccessType.DEV_MODE:
      return i ? tx("dev_handoff.paywall.success_modal.no_grace_period.description") : tx("request_upgrade_modal.body.no_plan_name.dev_mode");
    case FProductAccessType.WHITEBOARD:
      return tx("request_upgrade_modal.body.no_plan_name.figjam");
    case FProductAccessType.SLIDES:
      return tx("request_upgrade_modal.body.no_plan_name.slides");
    case FProductAccessType.SITES:
      return tx("request_upgrade_modal.body.no_plan_name.sites");
    case FProductAccessType.FIGMAKE:
      return tx("request_upgrade_modal.body.no_plan_name.figmake");
    case FProductAccessType.COOPER:
      return tx("request_upgrade_modal.body.no_plan_name.design");
    default:
      throwTypeError(e);
  }
}
export function $$m9(e, t) {
  switch (e) {
    case FProductAccessType.DESIGN:
    case FProductAccessType.SITES:
    case FProductAccessType.FIGMAKE:
      return tx("auto_upgrade_confirmation_modal.body.full", {
        planName: t
      });
    case FProductAccessType.DEV_MODE:
      return tx("auto_upgrade_confirmation_modal.body.dev", {
        planName: t
      });
    case FProductAccessType.SLIDES:
    case FProductAccessType.WHITEBOARD:
      return tx("auto_upgrade_confirmation_modal.body.collab", {
        planName: t
      });
    case FProductAccessType.COOPER:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$h5(e, t, i, o) {
  if (getFeatureFlags().ai_ga && o === tc.CODE_CHAT_LIMIT) return tx("admin_auto_upgrade_confirmation_modal.body.higher_limits");
  switch (e) {
    case FProductAccessType.DESIGN:
      return tx("admin_auto_upgrade_confirmation_modal.body.design", {
        planName: t,
        otherProducts: i
      });
    case FProductAccessType.WHITEBOARD:
      return tx("admin_auto_upgrade_confirmation_modal.body.figjam", {
        planName: t,
        otherProducts: i
      });
    case FProductAccessType.SLIDES:
      return tx("admin_auto_upgrade_confirmation_modal.body.slides", {
        planName: t,
        otherProducts: i
      });
    case FProductAccessType.SITES:
      return tx("admin_auto_upgrade_confirmation_modal.body.sites", {
        planName: t,
        otherProducts: i
      });
    case FProductAccessType.DEV_MODE:
      return tx("admin_auto_upgrade_confirmation_modal.body.dev_mode", {
        planName: t,
        otherProducts: i
      });
    case FProductAccessType.FIGMAKE:
      return tx("admin_auto_upgrade_confirmation_modal.body.figmake", {
        planName: t,
        otherProducts: i
      });
    case FProductAccessType.COOPER:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$g3(e, t) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return tx("auto_upgrade_confirmation_modal.body.design", {
        planName: t
      });
    case FProductAccessType.WHITEBOARD:
      return tx("auto_upgrade_confirmation_modal.body.figjam", {
        planName: t
      });
    case FProductAccessType.SLIDES:
      return tx("auto_upgrade_confirmation_modal.body.slides", {
        planName: t
      });
    case FProductAccessType.SITES:
      return tx("auto_upgrade_confirmation_modal.body.sites", {
        planName: t
      });
    case FProductAccessType.FIGMAKE:
      return tx("auto_upgrade_confirmation_modal.body.figmake", {
        planName: t
      });
    case FProductAccessType.COOPER:
    case FProductAccessType.DEV_MODE:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$f8(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
    case FProductAccessType.SITES:
    case FProductAccessType.FIGMAKE:
      return tx("auto_upgrade_confirmation_modal.title.full");
    case FProductAccessType.DEV_MODE:
      return tx("auto_upgrade_confirmation_modal.title.dev");
    case FProductAccessType.SLIDES:
    case FProductAccessType.WHITEBOARD:
      return tx("auto_upgrade_confirmation_modal.title.collab");
    case FProductAccessType.COOPER:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$_10(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return tx("auto_upgrade_confirmation_modal.title.design");
    case FProductAccessType.WHITEBOARD:
      return tx("auto_upgrade_confirmation_modal.title.figjam");
    case FProductAccessType.SLIDES:
      return tx("auto_upgrade_confirmation_modal.title.slides");
    case FProductAccessType.SITES:
      return tx("auto_upgrade_confirmation_modal.title.sites");
    case FProductAccessType.FIGMAKE:
      return tx("auto_upgrade_confirmation_modal.title.figmake");
    case FProductAccessType.COOPER:
    case FProductAccessType.DEV_MODE:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$A1(e, t, i, c, u) {
  if (t) switch (e) {
    case FProductAccessType.DESIGN:
      return i ? tx("1_click_expansion.you_can_work_in_figma", {
        numDays: 3
      }) : tx("request_upgrade_modal.provisional_access.design", {
        numDays: 3,
        planName: t
      });
    case FProductAccessType.DEV_MODE:
      return i ? tx("request_upgrade.description_dev_mode_grace_period_one_click", {
        numDays: 3
      }) : tx("request_upgrade_modal.provisional_access.dev_mode", {
        numDays: 3,
        planName: t
      });
    case FProductAccessType.WHITEBOARD:
      return tx("request_upgrade_modal.provisional_access.figjam", {
        numDays: 3,
        planName: t
      });
    case FProductAccessType.SLIDES:
      return tx("request_upgrade_modal.provisional_access.slides", {
        numDays: 3,
        planName: t
      });
    case FProductAccessType.SITES:
      return tx("request_upgrade_modal.provisional_access.sites", {
        numDays: 3,
        planName: t
      });
    case FProductAccessType.FIGMAKE:
      if (getFeatureFlags().ai_ga) {
        if (c === tc.PUBLISH_SITES) return tx("request_upgrade_modal.body.figmake.provisional_access.publish", {
          numDays: 3
        });
        if (c === tc.CODE_CHAT_LIMIT && u === ud.EXPERT) return tx("request_upgrade_modal.body.ai_ga.provisional_access.higher_limits", {
          productName: VG(e),
          numDays: 3
        });
      }
      return tx("request_upgrade_modal.provisional_access.figmake", {
        numDays: 3,
        planName: t
      });
    case FProductAccessType.COOPER:
      return tx("request_upgrade_modal.provisional_access.design", {
        numDays: 3,
        planName: t
      });
    default:
      throwTypeError(e);
  }
  switch (e) {
    case FProductAccessType.DESIGN:
      return tx("request_upgrade_modal.provisional_access.no_plan_name.design", {
        numDays: 3
      });
    case FProductAccessType.DEV_MODE:
      return i ? tx("request_upgrade.description_dev_mode_grace_period_one_click", {
        numDays: 3
      }) : tx("request_upgrade_modal.provisional_access.no_plan_name.dev_mode", {
        numDays: 3
      });
    case FProductAccessType.WHITEBOARD:
      return tx("request_upgrade_modal.provisional_access.no_plan_name.figjam", {
        numDays: 3
      });
    case FProductAccessType.SLIDES:
      return tx("request_upgrade_modal.provisional_access.no_plan_name.slides", {
        numDays: 3
      });
    case FProductAccessType.SITES:
      return tx("request_upgrade_modal.provisional_access.no_plan_name.sites", {
        numDays: 3
      });
    case FProductAccessType.FIGMAKE:
      return tx("request_upgrade_modal.provisional_access.no_plan_name.figmake", {
        numDays: 3
      });
    case FProductAccessType.COOPER:
      return tx("request_upgrade_modal.provisional_access.no_plan_name.design", {
        numDays: 3
      });
    default:
      throwTypeError(e);
  }
}
export function $$y7(e) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return tx("request_upgrade.provisional_access.curf.design", {
        numDays: 3
      });
    case FProductAccessType.DEV_MODE:
      return tx("request_upgrade.provisional_access.curf.dev_mode", {
        numDays: 3
      });
    case FProductAccessType.WHITEBOARD:
      return tx("request_upgrade.provisional_access.curf.figjam", {
        numDays: 3
      });
    case FProductAccessType.SLIDES:
      return tx("request_upgrade.provisional_access.curf.slides", {
        numDays: 3
      });
    case FProductAccessType.SITES:
      return tx("request_upgrade.provisional_access.curf.sites", {
        numDays: 3
      });
    case FProductAccessType.FIGMAKE:
      return tx("request_upgrade.provisional_access.curf.figmake", {
        numDays: 3
      });
    case FProductAccessType.COOPER:
      return tx("request_upgrade.provisional_access.curf.design", {
        numDays: 3
      });
    default:
      throwTypeError(e);
  }
}
export function $$b2(e, t) {
  switch (e) {
    case FProductAccessType.DESIGN:
      return _$$t("request_upgrade.placeholder.design");
    case FProductAccessType.DEV_MODE:
      return _$$t("request_upgrade.placeholder.dev_mode");
    case FProductAccessType.WHITEBOARD:
      return _$$t("request_upgrade.placeholder.figjam");
    case FProductAccessType.SLIDES:
      return _$$t("request_upgrade.placeholder.slides");
    case FProductAccessType.SITES:
      return _$$t("request_upgrade.placeholder.sites");
    case FProductAccessType.FIGMAKE:
      if (t === tc.CODE_CHAT_LIMIT && getFeatureFlags().ai_ga) return _$$t("request_upgrade.placeholder.ai_ga");
      return _$$t("request_upgrade.placeholder.figmake");
    case FProductAccessType.COOPER:
      return _$$t("request_upgrade.placeholder.design");
    default:
      return throwTypeError(e);
  }
}
export function $$v0(e, t) {
  if (t) switch (e) {
    case FProductAccessType.DESIGN:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.design");
    case FProductAccessType.DEV_MODE:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.dev_mode");
    case FProductAccessType.WHITEBOARD:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.figjam");
    case FProductAccessType.SLIDES:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.slides");
    case FProductAccessType.SITES:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.sites");
    case FProductAccessType.FIGMAKE:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.figmake");
    case FProductAccessType.COOPER:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.curf.design");
    default:
      return throwTypeError(e);
  } else switch (e) {
    case FProductAccessType.DESIGN:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.design");
    case FProductAccessType.DEV_MODE:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.dev_mode");
    case FProductAccessType.WHITEBOARD:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.figjam");
    case FProductAccessType.SLIDES:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.slides");
    case FProductAccessType.SITES:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.sites");
    case FProductAccessType.FIGMAKE:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.figmake");
    case FProductAccessType.COOPER:
      return tx("upgrades.drafts_move_drafts_share.provisional_access.design");
    default:
      return throwTypeError(e);
  }
}
export const C8 = $$v0;
export const GW = $$A1;
export const Jo = $$b2;
export const KL = $$g3;
export const PK = $$u4;
export const So = $$h5;
export const YG = $$c6;
export const iS = $$y7;
export const k0 = $$f8;
export const m3 = $$m9;
export const mV = $$_10;
export const sp = $$p11;