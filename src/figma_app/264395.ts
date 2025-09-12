import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { jm } from "../figma_app/416935";
import { debugState } from "../905/407919";
import { useSubscription } from "../figma_app/288654";
import { isIpadDevice } from "../figma_app/778880";
import { generateUUIDv4 } from "../905/871474";
import { getI18nString } from "../905/303541";
import { notificationActions } from "../905/851662";
import { NotificationType } from "../905/170564";
import { lg } from "../figma_app/976749";
import { FDeviceType } from "../figma_app/191312";
import { LatestClipboardData } from "../figma_app/43951";
import { ds } from "../figma_app/314264";
import { aq } from "../figma_app/412189";
export function $$E0(e, t) {
  return !!(e?.is_ipad_user || jm(t));
}
export function $$y1() {
  let e = useDispatch();
  let t = useRef("");
  let r = "whiteboard" === lg();
  let a = aq();
  let E = isIpadDevice ? FDeviceType.DESKTOP : FDeviceType.IPAD;
  let y = useSubscription(LatestClipboardData, {
    deviceType: E
  });
  useEffect(() => {
    if (!y || "loaded" !== y.status) return;
    let n = y.data.latestClipboardData;
    if (n.deviceType !== E || !n.presignedDownloadUrl || !n.timestamp || Date.now() - parseInt(n.timestamp) > 6e4) return;
    let i = debugState.getState();
    let o = {
      copy_device_type: n.deviceType,
      copy_timestamp: n.timestamp
    };
    ds("crossDeviceCopyPaste_s3_header_fetch_start", i.openFile?.key, i, o);
    let l = generateUUIDv4();
    t.current = l;
    T(() => fetch(n.presignedDownloadUrl, {
      method: "HEAD"
    }), l, t).then(({
      success: s,
      retryCount: d,
      errorMessage: _
    }) => {
      if (a()) {
        if (!s) {
          ds("crossDeviceCopyPaste_s3_header_fetch_failure", i.openFile?.key, i, {
            ...o,
            error: _,
            retryCount: d
          });
          return;
        }
        ds("crossDeviceCopyPaste_s3_header_fetch_success", i.openFile?.key, i, {
          ...o,
          retryCount: d
        });
        e(notificationActions.dequeue({
          type: NotificationType.CLIPBOARD_DATA_AVAILABLE
        }));
        e(notificationActions.enqueue({
          notification: {
            type: NotificationType.CLIPBOARD_DATA_AVAILABLE,
            message: getI18nString("fullscreen.notification.clipboard_data_available"),
            downloadUrl: n.presignedDownloadUrl,
            deviceType: n.deviceType,
            timestamp: n.timestamp,
            isFigJam: r,
            acceptCallback: () => ds("crossDeviceCopyPaste_dialog_paste_tapped", i.openFile?.key, i, o),
            dismissCallback: () => ds("crossDeviceCopyPaste_dialog_dismiss_tapped", i.openFile?.key, i, o),
            displayCallback: () => ds("crossDeviceCopyPaste_dialog_shown", i.openFile?.key, i, o)
          }
        }));
        setTimeout(() => {
          a() && t.current === l && e(notificationActions.dequeue({
            type: NotificationType.CLIPBOARD_DATA_AVAILABLE
          }));
        }, 6e4);
      }
    });
  }, [r, y, E, t, e, a]);
}
let b = e => new Promise(t => setTimeout(t, 300 * e));
let T = async (e, t, r, n = 0) => {
  if (t !== r.current) return {
    success: !1,
    retryCount: n,
    errorMessage: "Download retry cancelled by new user initiated paste action"
  };
  try {
    let t = await e();
    if (!t.ok) throw Error("Failed to fetch header with status " + t.status);
  } catch (i) {
    if (n > 4) return {
      success: !1,
      retryCount: n,
      errorMessage: i.toString()
    };
    await b(n);
    return T(e, t, r, n + 1);
  }
  return {
    success: !0,
    retryCount: n
  };
};
export const n = $$E0;
export const o = $$y1;