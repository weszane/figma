import { sendWithRetry } from "../905/910117";
export let $$r0 = new class {
  requestPlugin(e, t, i, r) {
    return sendWithRetry.post(`/api/plugins/${t}/org/${e}/request`, {
      requester_note: i,
      workspace_id: r
    });
  }
  requestWidget(e, t, i, r) {
    return sendWithRetry.post(`/api/widgets/${t}/org/${e}/request`, {
      requester_note: i,
      workspace_id: r
    });
  }
  rejectPluginRequestForOrg(e, t, i) {
    return sendWithRetry.put(`/api/plugins/${t}/org/${e}/request`, {
      status: "rejected",
      decline_note: i
    });
  }
  rejectWidgetRequestForOrg(e, t, i) {
    return sendWithRetry.put(`/api/widgets/${t}/org/${e}/request`, {
      status: "rejected",
      decline_note: i
    });
  }
  approvePluginRequestForOrg(e, t) {
    return sendWithRetry.put(`/api/plugins/${t}/org/${e}/request`, {
      status: "approved"
    });
  }
  approveWidgetRequestForOrg(e, t) {
    return sendWithRetry.put(`/api/widgets/${t}/org/${e}/request`, {
      status: "approved"
    });
  }
  updatePluginRequestForWorkspaces(e, t, i, r) {
    return sendWithRetry.put(`/api/plugins/${t}/org/${e}/request`, {
      approved_workspace_ids: i,
      decline_note: r
    });
  }
  updateWidgetRequestForWorkspaces(e, t, i, r) {
    return sendWithRetry.put(`/api/widgets/${t}/org/${e}/request`, {
      approved_workspace_ids: i,
      decline_note: r
    });
  }
  rejectRequestForOrg({
    orgId: e,
    extensionId: t,
    extensionType: i,
    declineNote: n
  }) {
    return "plugin" === i ? this.rejectPluginRequestForOrg(e, t, n) : this.rejectWidgetRequestForOrg(e, t, n);
  }
  approveRequestForOrg({
    orgId: e,
    extensionId: t,
    extensionType: i
  }) {
    return "plugin" === i ? this.approvePluginRequestForOrg(e, t) : this.approveWidgetRequestForOrg(e, t);
  }
  updateRequestForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: i,
    approvedWorkspaceIds: n,
    declineNote: r
  }) {
    return "plugin" === i ? this.updatePluginRequestForWorkspaces(e, t, n, r) : this.updateWidgetRequestForWorkspaces(e, t, n, r);
  }
}();
export const J = $$r0;
