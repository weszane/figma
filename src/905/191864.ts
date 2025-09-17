import { DropdownEnableState } from "../figma_app/188152";
export let $$r0 = {
  displayName: "CommentsSettingField",
  fetchInitialValue: ({
    existingResourceContent: e
  }) => (e && (e.comments_setting ?? void 0)) === DropdownEnableState.ALL_DISABLED ? DropdownEnableState.ALL_DISABLED : DropdownEnableState.ENABLED,
  validate: ({}, e) => {
    if (![DropdownEnableState.ALL_DISABLED, DropdownEnableState.ENABLED].includes(e)) return [{
      key: "INVALID_COMMENTS_SETTING",
      data: {
        commentsSettings: e
      }
    }];
  },
  canSet: () => !0
};
export const T = $$r0;