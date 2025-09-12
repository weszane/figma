import { createActionCreator } from "../905/73481";
import { createNoOpValidator } from "../figma_app/181241";
import { createOptimistThunk } from "../905/350402";
let a = new class {
  constructor() {
    this.UsersUserIdsSchemaValidator = createNoOpValidator();
  }
  getUsersUserIds(e) {
    return this.UsersUserIdsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/voice/${e.fileKey}/users?user_ids=${e.userIds}`));
  }
}();
let $$o5 = createActionCreator("VOICE_SET_ACTIVE_CALL");
let $$l3 = createActionCreator("VOICE_JOIN_ACTIVE_CALL");
let $$d4 = createActionCreator("VOICE_LEAVE_ACTIVE_CALL");
let $$c1 = createActionCreator("VOICE_CLEAR_ACTIVE_CALL");
createActionCreator("VOICE_SHOW_PAYWALL_MODAL");
let $$u7 = createActionCreator("VOICE_SET_VOICE_USERS");
let $$p2 = createOptimistThunk(async (e, {
  userIds: t,
  fileKey: i
}) => {
  if (0 !== t.length) try {
    let {
      data
    } = await a.getUsersUserIds({
      fileKey: i,
      userIds: t
    });
    let r = data.meta.map(e => ({
      userID: e.id,
      name: e.handle,
      imageURL: e.img_url
    }));
    e.dispatch($$u7(r));
  } catch {
    return;
  }
});
let $$m10 = createActionCreator("VOICE_TOGGLE_WIDGET");
let $$h11 = createActionCreator("VOICE_TOGGLE_WIDGET_PARTICIPANT_LIST");
let $$g9 = createActionCreator("VOICE_SNAP_WIDGET");
let $$f6 = createActionCreator("VOICE_SET_USER_IDS_INCALL_FROM_PROVIDER");
let $$_8 = createActionCreator("VOICE_SHOW_CAPTIONS");
let $$A0 = createActionCreator("VOICE_CAPTIONS_INSTALL_PROGRESS");
export const Kh = $$A0;
export const a6 = $$c1;
export const NS = $$p2;
export const rO = $$l3;
export const oI = $$d4;
export const Zq = $$o5;
export const cb = $$f6;
export const LV = $$u7;
export const t7 = $$_8;
export const jT = $$g9;
export const Pp = $$m10;
export const yF = $$h11;