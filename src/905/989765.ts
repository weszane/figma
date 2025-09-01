import { NC } from "../905/17179";
import { vh } from "../figma_app/181241";
import { nF } from "../905/350402";
let a = new class {
  constructor() {
    this.UsersUserIdsSchemaValidator = vh();
  }
  getUsersUserIds(e) {
    return this.UsersUserIdsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/voice/${e.fileKey}/users?user_ids=${e.userIds}`));
  }
}();
let $$o5 = NC("VOICE_SET_ACTIVE_CALL");
let $$l3 = NC("VOICE_JOIN_ACTIVE_CALL");
let $$d4 = NC("VOICE_LEAVE_ACTIVE_CALL");
let $$c1 = NC("VOICE_CLEAR_ACTIVE_CALL");
NC("VOICE_SHOW_PAYWALL_MODAL");
let $$u7 = NC("VOICE_SET_VOICE_USERS");
let $$p2 = nF(async (e, {
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
let $$m10 = NC("VOICE_TOGGLE_WIDGET");
let $$h11 = NC("VOICE_TOGGLE_WIDGET_PARTICIPANT_LIST");
let $$g9 = NC("VOICE_SNAP_WIDGET");
let $$f6 = NC("VOICE_SET_USER_IDS_INCALL_FROM_PROVIDER");
let $$_8 = NC("VOICE_SHOW_CAPTIONS");
let $$A0 = NC("VOICE_CAPTIONS_INSTALL_PROGRESS");
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