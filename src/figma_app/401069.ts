import { createActionCreator } from "../905/73481";
import { debugState } from "../905/407919";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { createOptimistThunk } from "../905/350402";
import { H3 } from "../figma_app/994725";
import { trackOrgEvent } from "../figma_app/314264";
import { J } from "../905/298764";
let u = e => {
  let t = debugState.getState();
  if (!t.openFile) return;
  let r = t.openFile;
  r && r.parentOrgId && XHR.post(`/api/activity_logs/${r.key}`, {
    event_name: e
  });
};
export function $$p3() {
  u("fig_file_save_as");
}
let $$_6 = createOptimistThunk((e, t) => {
  u("fig_file_export");
});
let $$h2 = createOptimistThunk((e, t) => {
  u("fig_file_image_download");
});
let $$m0 = createActionCreator("GET_ACTIVITY_LOGS");
let $$g1 = createOptimistThunk((e, t) => {
  let {
    newQuery,
    teamId,
    emails,
    eventName,
    date
  } = t;
  let u = e.getState();
  J.getActivityLogs({
    pageSize: "30",
    orgId: u.currentUserOrgId,
    startTime: date.start,
    endTime: H3(date.end),
    ...(teamId ? {
      teamId
    } : null),
    ...(eventName ? {
      eventName: JSON.stringify(eventName)
    } : null),
    ...(emails ? {
      emails: emails.join()
    } : null),
    ...(newQuery ? null : {
      after: u.activityLogs.cursor.after
    })
  }).then(({
    data: t
  }) => {
    let s = t.meta;
    let c = s[0];
    let p = s[1];
    let _ = newQuery ? c : e.getState().activityLogs.logs.concat(c);
    e.dispatch($$$$E5({
      logs: _,
      cursor: p
    }));
    trackOrgEvent("Activity Logs Fetched", u.currentUserOrgId, u, {
      teamIdFilter: teamId,
      eventNamesFilter: eventName,
      startDateFilter: date.start,
      endDateFilter: H3(date.end),
      filtersOnActorEmail: !!emails && emails.length > 0,
      filtersOnActedOnEmail: !!emails && emails.length > 0,
      isNewQuery: newQuery,
      numberOfResults: c.length
    });
  }).catch(t => {
    let r = t.data?.message || "An error occurred while fetching activity logs.";
    e.dispatch(FlashActions.flash(r));
  });
  e.dispatch($$m0(t));
});
let $$f4 = createActionCreator("CLEAR_CURSOR_ACTIVITY_LOGS");
let $$$$E5 = createActionCreator("SET_ACTIVITY_LOGS");
export const E = $$m0;
export const Jt = $$g1;
export const aK = $$h2;
export const ce = $$p3;
export const cv = $$f4;
export const hZ = $$$$E5;
export const rg = $$_6;