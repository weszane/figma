import { Ni } from "../figma_app/188152";
export let $$r0 = {
  displayName: "CommentsSettingField",
  fetchInitialValue: ({
    existingResourceContent: e
  }) => (e && (e.comments_setting ?? void 0)) === Ni.ALL_DISABLED ? Ni.ALL_DISABLED : Ni.ENABLED,
  validate: ({}, e) => {
    if (![Ni.ALL_DISABLED, Ni.ENABLED].includes(e)) return [{
      key: "INVALID_COMMENTS_SETTING",
      data: {
        commentsSettings: e
      }
    }];
  },
  canSet: () => !0
};
export const T = $$r0;