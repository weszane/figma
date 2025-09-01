import { MM } from "../905/350402";
import { r as _$$r, c } from "../905/676456";
import { XHR } from "../905/910117";
import { t as _$$t } from "../905/303541";
import { J } from "../905/231762";
import { F } from "../905/302958";
export let $$l0 = MM("REPO_RESTORE", (e, {
  reposById: t,
  userInitiated: i
}, {
  optimistId: d
}) => {
  i && XHR.post("/api/repos_batch/restore", {
    repo_ids: Object.keys(t)
  }).then(i => {
    if (207 === i.status) {
      e.dispatch(_$$r(d));
      try {
        let n = Object.keys(i.data?.meta?.success);
        let r = {};
        n.forEach(e => {
          r[e] = t[e];
        });
        e.dispatch($$l0({
          reposById: r,
          userInitiated: !1
        }));
        e.dispatch(F.enqueue({
          message: J(i, i.data?.message || _$$t("collaboration.branching.an_error_occurred_while_restoring_these_files")),
          error: !0
        }));
      } catch (t) {
        e.dispatch(F.enqueue({
          message: _$$t("collaboration.branching.an_error_occurred_while_restoring_these_files"),
          error: !0
        }));
      }
    } else {
      let t = _$$t("collaboration.branching.files_restored");
      e.dispatch(c(d));
      e.dispatch(F.enqueue({
        message: t
      }));
    }
  }).catch(t => {
    e.dispatch(_$$r(d));
    e.dispatch(F.enqueue({
      message: J(t, t.data?.message || _$$t("collaboration.branching.an_error_occurred_while_restoring_these_files")),
      error: !0
    }));
  });
});
export const i = $$l0; 
