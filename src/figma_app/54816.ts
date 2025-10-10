import { createActionCreator } from "../905/73481";


export const blockedUILoadingIndicator = {
  set: createActionCreator("BLOCKED_UI_LOADING_INDICATOR_SET"),
  remove : createActionCreator("BLOCKED_UI_LOADING_INDICATOR_REMOVE"),
}
export const o = blockedUILoadingIndicator;
