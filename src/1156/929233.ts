import { FJ } from "../905/508367";
import { debugState } from "../905/407919";
import { t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { v7 } from "../figma_app/325912";
var c = ((e) => (e.PROJECT_NAME_TAKEN = "supabase-project-name-taken", e.ACTIVE_FREE_PROJECT_LIMIT = "supabase-active-free-project-limit", e.PROJECT_CREATION_UNSUCCESSFUL = "supabase-project-creation-unsuccessful", e.PROJECT_CONNECTION_UNSUCCESSFUL = "supabase-project-connection-unsuccessful", e.PROJECT_RESTORE_UNSUCCESSFUL = "supabase-project-restore-unsuccessful", e.PAUSING_PROJECT_UNSUCCESSFUL = "supabase-pausing-project-unsuccessful", e.PAUSING_PROJECT_SUCCESSFUL = "supabase-pausing-project-successful", e.DEPLOY_UNSUCCESSFUL = "supabase-deploy-unsuccessful", e.DEPLOY_SUCCESSFUL = "supabase-deploy-successful", e.NOTHING_TO_DEPLOY = "supabase-nothing-to-deploy", e.AUTHENTICATION_UNSUCCESSFUL = "supabase-authentication-unsuccessful", e))(c || {});
export function $$d10() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.project_name_taken"),
    type: "supabase-project-name-taken",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$u2() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.project_creation_unsuccessful.need_to_pause"),
    type: "supabase-active-free-project-limit",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0,
    button: {
      text: t("figmake.supabase.errors.project_creation_unsuccessful.need_to_pause.button"),
      action: () => {
        FJ(v7, "_blank");
      }
    }
  }));
}
export function $$x9() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.project_creation_unsuccessful"),
    type: "supabase-project-creation-unsuccessful",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$m4() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.project_connection_unsuccessful"),
    type: "supabase-project-connection-unsuccessful",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$h7() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.project_restore_unsuccessful"),
    type: "supabase-project-restore-unsuccessful",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$g3() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.pausing_project_unsuccessful"),
    type: "supabase-pausing-project-unsuccessful",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$p5() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.pausing_project_successful"),
    type: "supabase-pausing-project-successful",
    icon: zX.CHECK,
    timeoutOverride: 3e3
  }));
}
export function $$f8() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.deploy_unsuccessful"),
    type: "supabase-deploy-unsuccessful",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$y0() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.deploy_successful"),
    type: "supabase-deploy-successful",
    icon: zX.CHECK,
    timeoutOverride: 3e3
  }));
}
export function $$_1() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.nothing_to_deploy"),
    type: "supabase-nothing-to-deploy",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export function $$b6() {
  debugState.dispatch(F.enqueue({
    message: t("figmake.supabase.errors.authentication_unsuccessful"),
    type: "supabase-authentication-unsuccessful",
    icon: zX.EXCLAMATION,
    timeoutOverride: 3e3,
    error: !0
  }));
}
export const A9 = $$y0;
export const SR = $$_1;
export const ZK = $$u2;
export const it = $$g3;
export const jx = $$m4;
export const l4 = $$p5;
export const m8 = $$b6;
export const n9 = $$h7;
export const rq = $$f8;
export const u = $$x9;
export const ym = $$d10;