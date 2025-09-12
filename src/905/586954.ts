import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
let $$a13 = "USER_FOLDERS";
let $$s3 = "USER_DRAFTS";
let $$o15 = createOptimistThunk((e, t) => {
  let {
    foldersByTeamId,
    teamOrder
  } = t.fileMove;
  if (!teamOrder || 0 === teamOrder.length || !foldersByTeamId) return;
  let r = 0;
  for (let t = 0; t < teamOrder.length; t++) {
    let o = teamOrder[t];
    let l = foldersByTeamId[o] && foldersByTeamId[o].length > 0;
    if (o === $$s3) l && (r += 1);else if (o === $$a13) {
      if (l) {
        e.dispatch($$y1({
          indexAt: r
        }));
        return;
      }
    } else if (r += 1, l) {
      e.dispatch($$y1({
        indexAt: r
      }));
      return;
    }
  }
});
let $$l10 = createActionCreator("FILE_MOVE_CAN_MOUSE_FOCUS");
let $$d14 = createActionCreator("FILE_MOVE_SET_KEY_PRESSED_TO_FALSE");
let $$c11 = createActionCreator("FILE_MOVE_IS_SEARCH_FOCUSED");
let $$u7 = createActionCreator("FILE_MOVE_INDEX_ORDER");
let $$p2 = createActionCreator("FILE_MOVE_IS_SEARCH_RESULT");
let $$m8 = createActionCreator("FILE_MOVE_SET_FOLDER_ORDER");
let $$h5 = createActionCreator("FILE_MOVE_SET_TEAM_ORDER");
let $$g17 = createActionCreator("FILE_MOVE_SET_USER_TEAM_COUNT");
let $$f16 = createActionCreator("FILE_MOVE_SET_INDEX_OFFSETS");
let $$_0 = createActionCreator("FILE_MOVE_SET_FOLDER_COUNT");
let $$A18 = createActionCreator("FILE_MOVE_RESET_FOCUSED_INDEX");
let $$y1 = createActionCreator("FILE_MOVE_SET_FOCUSED_INDEX_AT");
let $$b19 = createActionCreator("FILE_MOVE_DECREMENT_FOCUSED_INDEX");
let $$v9 = createActionCreator("FILE_MOVE_INCREMENT_FOCUSED_INDEX");
let $$I6 = createActionCreator("FILE_MOVE_END_FOLDER_RENAME");
let $$E4 = createActionCreator("FILE_MOVE_START_FOLDER_RENAME");
let $$x12 = createActionCreator("FILE_MOVE_SET_FOLDER_SEARCH_QUERY");
export const CU = $$_0;
export const Dp = $$y1;
export const EN = $$p2;
export const HK = $$s3;
export const JG = $$E4;
export const Mi = $$h5;
export const Mn = $$I6;
export const OT = $$u7;
export const Pb = $$m8;
export const TL = $$v9;
export const Ww = $$l10;
export const YG = $$c11;
export const hq = $$x12;
export const iK = $$a13;
export const qM = $$d14;
export const qb = $$o15;
export const t3 = $$f16;
export const w3 = $$g17;
export const xH = $$A18;
export const zv = $$b19;