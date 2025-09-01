function n(e) {
  return !!e && !e.agreed_to_community_tos_at;
}
export let $$r0 = {
  displayName: "TosAcceptedField",
  fetchInitialValue: ({
    orgUser: e,
    defaultValue: t
  }) => n(e) ? t ?? !1 : void 0,
  validate: ({
    orgUser: e
  }, t) => {
    if (n(e) && !t) return [{
      key: "TOS_AGREEMENT_MISSING_FOR_ORG_USER",
      data: {}
    }];
  },
  canSet: ({
    orgUser: e
  }) => n(e)
};
export const Y = $$r0;