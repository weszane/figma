import { jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { g as _$$g } from "../1250/701065";
import { Ay } from "../905/612521";
import { Ex, zE } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { F } from "../905/302958";
import { E } from "../905/984674";
import { Oe } from "../905/34809";
import { E as _$$E } from "../7021/427161";
import { SidebarRow } from "../451de8f0/94979";
import { sf } from "../905/929976";
import { b as _$$b } from "../905/985254";
import { j0 } from "../1250/524544";
if (443 == require.j) {}
if (443 == require.j) {}
let $$x0 = "drafts_to_move_onboarding_key";
let y = 443 == require.j ? 3e5 : null;
let v = new Date("2024-06-03");
export function $$w1(e) {
  let t = e.dispatch;
  let n = useSelector(e => e.userFlags);
  let w = j0();
  let T = "draftsToMove" === e.selectedView.view;
  !function (e) {
    let {
      personal_draft_migration_scheduled,
      personal_draft_migration_completed,
      long_running_draft_migration_toast_shown,
      draft_migration_completed_toast_shown
    } = useSelector(e => e.userFlags);
    let l = useCallback(() => {
      e(F.enqueue({
        message: _$$t("file_browser.drafts_to_move.long_running_draft_migration"),
        button: {
          text: _$$t("file_browser.drafts_to_move.long_running_draft_migration_learn_more"),
          action: () => {
            Ay.unsafeRedirect("https://figma.com/blog/updates-to-how-drafts-work", "_blank");
          }
        },
        type: "long-running-draft-migration",
        timeoutOverride: 1 / 0,
        onDismiss: () => {}
      }));
      e(_$$b({
        long_running_draft_migration_toast_shown: !0
      }));
    }, [e]);
    let d = useCallback(() => {
      e(F.dequeue({
        matchType: "long-running-draft-migration"
      }));
      e(F.enqueue({
        message: _$$t("file_browser.drafts_to_move.long_running_draft_migration_completed")
      }));
      e(_$$b({
        draft_migration_completed_toast_shown: !0
      }));
    }, [e]);
    useEffect(() => {
      if (!personal_draft_migration_scheduled) return;
      if (personal_draft_migration_completed && personal_draft_migration_completed.updatedAt > personal_draft_migration_scheduled.updatedAt) {
        if (personal_draft_migration_completed.updatedAt < v || draft_migration_completed_toast_shown && draft_migration_completed_toast_shown.updatedAt > personal_draft_migration_completed.updatedAt) return;
        d();
        return;
      }
      if (long_running_draft_migration_toast_shown && long_running_draft_migration_toast_shown.updatedAt > personal_draft_migration_scheduled.updatedAt) return;
      let e = new Date().getTime() - new Date(personal_draft_migration_scheduled.updatedAt).getTime();
      e > y ? l() : setTimeout(() => {
        l();
      }, y - e);
    }, [personal_draft_migration_completed, l, d, long_running_draft_migration_toast_shown, draft_migration_completed_toast_shown, personal_draft_migration_scheduled]);
  }(t);
  let j = n.seen_drafts_to_move_notice_icon ? w > 0 ? jsx(Ex, {
    text: w > 99 ? "99+" : `${w}`,
    color: T ? zE.TOOLBAR_SELECTED : zE.DEFAULT,
    className: _$$s.mr8.$$if(!T, _$$s.colorBgBrandTertiary.colorText).$
  }) : void 0 : jsx(_$$E, {
    className: _$$s.mr8.$
  });
  return w > 0 || T ? jsx(SidebarRow, {
    isSelected: T,
    onClick: e => {
      e.metaKey || e.ctrlKey || 0 !== e.button || (t(sf({
        view: "draftsToMove"
      })), t(Oe({
        clickedResourceType: "draftsToMove"
      })), t(_$$b({
        seen_drafts_to_move_notice_icon: !0
      })));
    },
    "data-onboarding-key": $$x0,
    icon: jsx(_$$g, {}),
    text: jsx(E, {
      truncate: !0,
      children: tx("sidebar.drafts_to_move")
    }),
    badge: j,
    wrapInListItem: !1
  }) : null;
}
export const P = $$x0;
export const r = $$w1;