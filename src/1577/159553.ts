import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useContext, useEffect, useRef, useMemo, useCallback, Fragment as _$$Fragment } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { debounce } from "../905/915765";
import { Tabs } from "../905/150656";
import { LoadingSpinner } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import { getFeatureFlags } from "../905/601108";
import _ from "classnames";
import { bellFeedAPIInstance, desktopAPIInstance } from "../figma_app/876459";
import { ek as _$$ek, zv } from "../figma_app/640683";
import { customHistory } from "../905/612521";
import { F as _$$F } from "../905/680873";
import { useLatestRef } from "../figma_app/922077";
import { sendWithRetry } from "../905/910117";
import { RecordingScrollContainer } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { trackFileClicked } from "../figma_app/976345";
import { hideDropdownAction, selectViewAction } from "../905/929976";
import { useHighPriorityNotificationsExperiment } from "../figma_app/297957";
import { trackContextViewed, trackFileBrowserPlanFilterSelected, logAndTrackCTA, trackFolderEvent, trackTeamEvent } from "../figma_app/314264";
import { H as _$$H } from "../905/422284";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { selectPermissionsState } from "../figma_app/212807";
import { selectUser } from "../905/372672";
import { mapPathToSelectedView } from "../figma_app/193867";
import { gN, X2, Zo, td } from "../figma_app/273118";
import { notificationAPI } from "../905/894881";
import { fD } from "../905/807385";
import { a as _$$a, j as _$$j } from "../1577/143479";
import { ButtonWide } from "../905/521428";
import { HG, hE, bL, O6 } from "../905/598775";
import { IconButton } from "../905/443068";
import { ScreenReaderOnly } from "../905/172252";
import { a as _$$a2 } from "../905/964520";
import H from "../vendor/197638";
import { getEmojiData } from "../905/403166";
import { buildUploadUrl } from "../figma_app/169182";
import { RelativeTimeDisplay, useRelativeTime } from "../905/986103";
import { FlashActions } from "../905/573154";
import { getI18nState } from "../figma_app/363242";
import { AvatarSize } from "../905/590952";
import { A as _$$A } from "../905/639174";
import { Ro } from "../figma_app/805373";
import { H as _$$H2 } from "../905/209153";
import { H as _$$H3 } from "../1577/640070";
import { UC, zr, AS } from "../figma_app/50271";
import { throwTypeError } from "../figma_app/465776";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { logError } from "../905/714362";
import { p as _$$p } from "../figma_app/941287";
import { noop } from 'lodash-es';
import { TabLoop } from "../905/718764";
import { CircularBuffer } from "../905/807275";
import { y as _$$y } from "../905/52479";
import { Point } from "../905/736624";
import { d as _$$d } from "../1577/847459";
var $$a1;
var m = _;
var z = H;
let et = "block_kit_row--rowContainer--hsQo5";
let ei = "block_kit_row--rowWidth--kC8ex";
let ea = "block_kit_row--metadataContainer--tcs33";
let en = "block_kit_row--usersContainerStructuredView--PUPYI";
let eo = "block_kit_row--imagePreview--CqQsi";
function er(e) {
  return jsx("span", {
    className: "block_kit_row--htmlTextBlock--wINSP",
    dangerouslySetInnerHTML: {
      __html: z().sanitize(e.block.html_text)
    }
  });
}
function el(e) {
  let t = getEmojiData(e.block.emoji_shortcode)[0];
  return t.meta ? jsx("span", {
    className: "block_kit_row--emojiUnicode--qBoed",
    children: t.unicode
  }) : jsx(Fragment, {});
}
function es(e) {
  return e ? e.map((e, t) => "HtmlTextBlock" === e._block_type ? jsx(er, {
    block: e
  }, t) : jsx(el, {
    block: e
  }, t)) : [];
}
function ec(e) {
  let {
    block,
    size
  } = e;
  return jsx(Ro, {
    entity: {
      ...block,
      id: block.entity_id
    },
    size,
    hideFallbackInitial: !1,
    shape: block.shape.toUpperCase()
  });
}
function ed(e) {
  let {
    block
  } = e;
  return jsx("div", {
    className: `${eo} thumbnail_DEPRECATED--tileThumbnail--4kE7l`,
    style: {
      background: `url(${_$$A()})`
    },
    children: jsx("div", {
      className: "thumbnail_DEPRECATED--thumbnailContainer--xPcsg",
      style: {
        backgroundColor: (e => {
          if (!e || 0 === e.alpha) return "transparent";
          let {
            red,
            green,
            blue,
            alpha
          } = e;
          return `rgba(${255 * red | 0}, ${255 * green | 0}, ${255 * blue | 0}, ${alpha})`;
        })(block.background_color)
      },
      children: jsx("div", {
        className: "thumbnail_DEPRECATED--thumbnail--WuuvA thumbnail_DEPRECATED--baseThumbnail--8p9z4",
        style: {
          backgroundImage: `url(${block.img_url})`
        }
      })
    })
  });
}
function eu(e) {
  let {
    block
  } = e;
  return jsx("div", {
    className: "block_kit_row--square--vD5SO",
    children: jsx("div", {
      className: eo,
      style: {
        backgroundImage: `url(${block.img_url})`
      }
    })
  });
}
function e_(e) {
  let {
    avatars,
    icon
  } = e;
  return 0 === avatars.length ? null : avatars.length > 1 ? jsxs("div", {
    className: en,
    children: [jsx("div", {
      className: "block_kit_row--secondaryUser--hkjpm",
      children: jsx(ec, {
        block: avatars[1],
        size: AvatarSize.MEDIUM
      })
    }), jsx("div", {
      className: "block_kit_row--primaryUser--lg4hR",
      children: jsx(ec, {
        block: avatars[0],
        size: AvatarSize.MEDIUM
      })
    }), icon && jsx(em, {
      icon
    })]
  }) : jsxs("div", {
    className: en,
    children: [jsx(ec, {
      block: avatars[0],
      size: AvatarSize.LARGE
    }), icon && jsx(em, {
      icon
    })]
  });
}
function em(e) {
  let {
    icon
  } = e;
  let i = new Set([buildUploadUrl("fc8b3d0c889b51bd8800945089e8b473ff4d619d")]);
  return jsx("div", {
    className: "block_kit_row--icon--YApgQ",
    children: "ImageThumbnailBlock" === icon._block_type ? jsx("img", {
      className: `block_kit_row--iconImg--SRdFH ${i.has(icon.img_url) ? "" : "block_kit_row--iconInvert--7YBRA"} `,
      src: icon.img_url,
      alt: ""
    }) : "ReacjiBlock" === icon._block_type ? jsx(el, {
      block: icon
    }) : "AvatarBlock" === icon._block_type ? jsx(ec, {
      block: icon,
      size: AvatarSize.SMALL16
    }) : void 0
  });
}
function ef(e) {
  let t = useDispatch<AppDispatch>();
  let {
    block,
    callbacks,
    isPrimary = !0,
    isDisabled,
    setIsDisabled
  } = e;
  let c = async e => {
    try {
      setIsDisabled(!0);
      let n = (await callbacks.buildNotificationActionRequest(block.notification_action)).data.meta.updated_notification_blob;
      e && t(VisualBellActions.enqueue({
        message: e,
        error: !1,
        role: "status"
      }));
      block.hide_after_action ? callbacks.hideNotification() : (callbacks.followLinkIfPossible(), n && callbacks.updateNotification(n.notification_id, n));
    } catch (a) {
      let e = a.message || ("resolve" === block.notification_action ? getI18nString("user_notification.an_error_occurred_while_clicking_this_notification") : getI18nString("user_notification.an_error_occurred_while_removing_this_notification"));
      t(FlashActions.error(e));
    } finally {
      setIsDisabled(!1);
    }
  };
  let d = es([block.text]);
  return jsx(ButtonWide, {
    variant: isPrimary ? "primary" : "secondary",
    onClick: () => {
      c(block.screenreader_action_success_announcement);
    },
    disabled: isDisabled,
    children: d
  });
}
function ep(e) {
  let {
    block,
    actionBlockCallbacks
  } = e;
  let [a, r] = useState(!1);
  return jsxs("div", {
    className: "block_kit_row--rowBottom--dKrKA",
    children: [jsx(ef, {
      block: block.secondary_action,
      callbacks: actionBlockCallbacks,
      isPrimary: !1,
      isDisabled: a,
      setIsDisabled: r
    }), jsx(ef, {
      block: block.primary_action,
      callbacks: actionBlockCallbacks,
      isPrimary: !0,
      isDisabled: a,
      setIsDisabled: r
    })]
  });
}
function eh(e) {
  let {
    block,
    plan,
    shouldShowChevron,
    userLastViewedTimestamp,
    inDesktopTray,
    openQuickReply
  } = e;
  switch (block._block_type) {
    case "BodyAndThumbnailBlock":
      return jsx(eb, {
        block,
        plan,
        shouldShowChevron
      });
    case "SplitlineTitleAndBodyBlock":
      return jsx(ex, {
        block,
        shouldShowChevron,
        userLastViewedTimestamp,
        inDesktopTray,
        openQuickReply
      });
  }
}
function eb(e) {
  let {
    block,
    plan,
    shouldShowChevron
  } = e;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "block_kit_row--contentContainer--ZbpO2 text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsxs("div", {
        className: "block_kit_row--content--52-rY",
        children: [jsx("div", {
          children: es(block.title)
        }), jsxs("div", {
          className: ea,
          children: [jsxs("div", {
            className: "block_kit_row--textContainer--168xh",
            children: [block.description && jsx("div", {
              className: "block_kit_row--notificationDescription--lMjfr ellipsis--ellipsisAfter3Lines--h405C ellipsis--_ellipsisAfterNLines--LzI7k",
              children: es(block.description)
            }), jsxs("div", {
              className: "block_kit_row--fromNow--ryp9b",
              children: [plan && jsxs(Fragment, {
                children: [jsx(_$$H2, {
                  entityId: plan.id.toString(),
                  entityName: plan.name,
                  imgUrl: plan.img_url || void 0
                }), gN(plan.name, 21), jsx("div", {
                  className: "block_kit_row--planDivider--XnNq8",
                  children: "\xb7"
                })]
              }), jsx(RelativeTimeDisplay, {
                date: block.created_at,
                style: "short"
              })]
            })]
          }), shouldShowChevron && jsx("div", {
            className: "block_kit_row--quickReplyChevron--0rKX3",
            children: jsx(_$$a2, {})
          })]
        })]
      })
    }), (() => {
      if (!block.thumbnail) return null;
      let e = block.thumbnail;
      switch (e._block_type) {
        case "AvatarBlock":
          return jsx(ec, {
            block: e,
            size: AvatarSize.XLARGE
          });
        case "ImageThumbnailBlock":
          return jsx(eu, {
            block: e
          });
        case "FileThumbnailBlock":
          return jsx(ed, {
            block: e
          });
      }
    })()]
  });
}
function ex(e) {
  let {
    block,
    shouldShowChevron,
    userLastViewedTimestamp,
    inDesktopTray,
    openQuickReply
  } = e;
  return jsxs("div", {
    className: "block_kit_row--contentContainerRevamp--voNSM text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsxs("div", {
      className: "block_kit_row--titleAndTimestamp--30RnS",
      children: [jsx("div", {
        className: "block_kit_row--title--gqwu-",
        children: es(block.title)
      }), jsx(ej, {
        createdAt: block.created_at,
        lastSeenTimestamp: userLastViewedTimestamp
      })]
    }), jsxs("div", {
      className: ea,
      children: [jsx("div", {
        className: "block_kit_row--subtitle--jIRsg",
        children: es(block.subtitle)
      }), block.description && jsx("div", {
        className: "block_kit_row--notificationDescriptionStructuredView--yUeTV ellipsis--ellipsisAfter3Lines--h405C ellipsis--_ellipsisAfterNLines--LzI7k",
        children: es(block.description)
      }), shouldShowChevron && openQuickReply && jsx(HG, {
        children: jsx("div", {
          className: inDesktopTray ? "block_kit_row--quickReplyChevronContainerDesktop--Nn5jL block_kit_row--quickReplyChevronContainerBase--Z-3oi" : "block_kit_row--quickReplyChevronContainerBase--Z-3oi",
          children: jsx(IconButton, {
            onClick: openQuickReply,
            htmlAttributes: {
              "data-testid": "quick-reply-chevron"
            },
            "aria-label": getI18nString("user_notifications.open_quickreply"),
            children: jsx(_$$a2, {})
          })
        })
      })]
    })]
  });
}
function ek(e) {
  let {
    notification
  } = e;
  let i = getI18nString("user_notifications.unread_notifcation_sr");
  return jsxs("div", {
    className: m()("block_kit_row--rowTop--4zNja", ei),
    id: `notification-${notification.notification_id}`,
    children: [notification.is_unread ? jsx("div", {
      className: "block_kit_row--unreadDotStructuredView--WluAp"
    }) : null, jsx(e_, {
      avatars: notification.avatars,
      icon: notification.icon
    }), notification.is_unread ? jsx(ScreenReaderOnly, {
      children: i
    }) : null, e.children]
  });
}
function ew(e) {
  let {
    attachment,
    notification,
    dontShowPlanIcon
  } = e;
  return jsx(ek, {
    notification,
    children: jsx(eh, {
      block: attachment.body,
      plan: !0 === dontShowPlanIcon ? void 0 : notification.plan,
      userLastViewedTimestamp: notification.filters.user_last_viewed_timestamp
    })
  });
}
function ev(e) {
  let {
    attachment,
    notification,
    dontShowPlanIcon,
    openQuickReply
  } = e;
  let {
    inDesktopTray
  } = useContext(_$$H3);
  return jsx(hE, {
    children: jsx(ek, {
      notification,
      children: jsx(eh, {
        block: attachment.body,
        plan: !0 === dontShowPlanIcon ? void 0 : notification.plan,
        userLastViewedTimestamp: notification.filters.user_last_viewed_timestamp,
        inDesktopTray,
        shouldShowChevron: UC(notification),
        openQuickReply
      })
    })
  });
}
function eg(e) {
  let {
    attachment,
    notification,
    actionBlockCallbacks
  } = e;
  return jsxs(Fragment, {
    children: [jsx(ek, {
      notification,
      children: jsx(eh, {
        block: attachment.body,
        plan: notification.plan,
        userLastViewedTimestamp: notification.filters.user_last_viewed_timestamp
      })
    }), jsx(ep, {
      block: attachment.actions,
      actionBlockCallbacks
    })]
  });
}
function ej(e) {
  let {
    createdAt,
    lastSeenTimestamp
  } = e;
  let a = ey(createdAt, lastSeenTimestamp);
  let o = useRelativeTime(createdAt, "narrow");
  if ("today" !== a && "new" !== a) {
    let e = new Date(createdAt);
    let i = {};
    i = !function (e) {
      let t = new Date();
      t.setDate(t.getDate() - 365);
      return e >= t;
    }(e) ? {
      month: "short",
      day: "numeric",
      year: "numeric"
    } : {
      month: "short",
      day: "numeric"
    };
    o = new Intl.DateTimeFormat(getI18nState().getPrimaryLocale(!1), i).format(e);
  }
  return jsx("div", {
    className: "block_kit_row--timestamp--FiNtf",
    children: o
  });
}
function ey(e, t) {
  let i = new Date(e);
  let a = new Date();
  let n = new Date(a);
  return (n.setDate(a.getDate() - 1), t && new Date(t) < i) ? "new" : eC(i, a) ? "today" : eC(i, n) ? "yesterday" : i >= new Date(a.getFullYear(), a.getMonth(), a.getDate() - 7) ? "last_week" : "older";
}
function eC(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
var eN = (e => (e.NEW = "new", e.TODAY = "today", e.YESTERDAY = "yesterday", e.LAST_WEEK = "last_week", e.OLDER = "older", e))(eN || {});
let eA = {
  new: renderI18nText("user_notifications.new"),
  today: renderI18nText("user_notifications.today"),
  yesterday: renderI18nText("user_notifications.yesterday"),
  last_week: renderI18nText("user_notifications.last_7_days"),
  older: renderI18nText("user_notifications.older")
};
function eT(e) {
  return e.preferred_attachments.length > 0 && "ActionableAttachment" === e.preferred_attachments[0]._block_type;
}
var eP = (e => (e.ACTIONABLE = "actionable", e.ACTIONED = "actioned", e))(eP || {});
let eI = {
  actionable: renderI18nText("user_notifications.pending"),
  actioned: renderI18nText("user_notifications.done")
};
function eM(e) {
  let t = e.preferred_attachments.find(e => _$$p.BlockKit.Block.ATTACHMENT_TYPES.has(e._block_type));
  if (void 0 === t) throw Error(`Unable to render attachment. Hiding notification ${e.notification_id}`);
  return t;
}
function eL(e) {
  var t;
  let i;
  let a = useDispatch<AppDispatch>();
  let [l, s] = useState(!1);
  let c = useSelector(e => e.selectedView.view);
  let {
    onClick,
    toggleQuickReply,
    onMouseMove,
    onRemove,
    inDesktopTray
  } = useContext(_$$H3);
  let x = e.notification;
  useEffect(() => () => {
    onRemove(x);
  }, [onRemove, x]);
  try {
    i = eM(e.notification);
  } catch (e) {
    console.error(`Unsupported Notification: ${e}`);
    return null;
  }
  let k = t => {
    let i = c + "_quickreply";
    toggleQuickReply(t, x, async () => {
      if (getFeatureFlags().notif_new_read_api) try {
        await notificationAPI.markNotificationAsRead({
          notification_id: x.notification_id,
          currentView: i
        });
        e.updateNotificationCallback(x.notification_id, {
          ...x,
          is_unread: !1
        });
      } catch (e) {
        logError("Error marking notification as read", e);
      } else C("resolve", i).then(({
        data: t
      }) => {
        if (t.meta.updated_notification_blob) {
          let i = t.meta.updated_notification_blob;
          e.updateNotificationCallback(i.notification_id, i);
        }
      });
    });
  };
  let w = e => {
    onMouseMove(e);
  };
  let g = async t => {
    trackEventAnalytics("file_browser_notification_clicked", {
      notification_id: x.notification_id,
      notification_type: x.notification_type,
      actionable: "ActionableAttachment" === i._block_type,
      selectedView: c,
      plan_filter: e.currentPlanFilter,
      notification_filter: e.currentNotificationFilter
    });
    j(t);
    let n = onClick(x);
    if (getFeatureFlags().notif_new_read_api) try {
      await notificationAPI.markNotificationAsRead({
        notification_id: x.notification_id,
        currentView: c
      });
      n || e.followLinkOnClickCallback();
      e.updateNotificationCallback(x.notification_id, {
        ...x,
        is_unread: !1
      });
    } catch (e) {
      a(FlashActions.error(getI18nString("user_notification.an_error_occurred_while_clicking_this_notification")));
    } else C("resolve").then(({
      data: t
    }) => {
      if (n || e.followLinkOnClickCallback(), t.meta.updated_notification_blob) {
        let i = t.meta.updated_notification_blob;
        e.updateNotificationCallback(i.notification_id, i);
      }
    }, e => {
      a(FlashActions.error(getI18nString("user_notification.an_error_occurred_while_clicking_this_notification")));
    });
  };
  let j = e => {
    e.stopPropagation();
  };
  let y = () => {
    s(!0);
    e.onHide && e.onHide();
  };
  let C = (e, t = c) => notificationAPI.updateNotification({
    notification_id: x.notification_id,
    notification_action: e,
    currentView: t
  });
  let N = (t, i = c) => {
    switch (analyticsEventManager.trackDefinedEvent("notification.file_browser_notification_actioned", {
      notification_id: x.notification_id,
      notification_type: x.notification_type,
      notification_action: t,
      selectedView: c,
      plan_filter: e.currentPlanFilter || void 0,
      notification_filter: e.currentNotificationFilter
    }), t) {
      case "resolve":
        return notificationAPI.acceptNotification({
          notification_id: x.notification_id,
          currentView: i
        });
      case "reject":
        return notificationAPI.rejectNotification({
          notification_id: x.notification_id,
          currentView: i
        });
      default:
        throwTypeError(t);
    }
  };
  let A = (t, i, a) => {
    try {
      switch (t._block_type) {
        case "ActionableAttachment":
          {
            let a = {
              updateNotification: e.updateNotificationCallback,
              hideNotification: y,
              followLinkIfPossible: e.followLinkOnClickCallback,
              buildNotificationActionRequest: getFeatureFlags().notif_new_actionable_api ? N : C
            };
            return jsx(eg, {
              attachment: t,
              notification: i,
              actionBlockCallbacks: a
            });
          }
        case "ClientActionableAttachment":
          return jsx(ev, {
            attachment: t,
            notification: i,
            openQuickReply: a
          });
        case "BodyAndThumbnailAttachment":
        case "BodyAttachment":
          return jsx(ew, {
            attachment: t,
            notification: i,
            dontShowPlanIcon: e.dontShowPlanIcon
          });
      }
    } catch (e) {
      console.error(`Unable to render attachment: ${t}`);
      y();
    }
  };
  let T = "ActionableAttachment" === (t = i)._block_type ? jsx("div", {
    className: et,
    tabIndex: 0,
    onMouseMove: w,
    children: A(t, x)
  }) : "ClientActionableAttachment" === t._block_type ? jsxs(bL, {
    className: et,
    children: [jsx(O6, {
      className: "block_kit_row--clientActionableRowFocus--OB-8f",
      onClick: g,
      htmlAttributes: {
        onMouseEnter: inDesktopTray ? void 0 : k,
        onMouseMove: w
      }
    }), A(t, x, k) ?? jsx(Fragment, {})]
  }) : jsx(ButtonPrimitive, {
    className: m()(et, ei),
    htmlAttributes: {
      onMouseEnter: inDesktopTray ? void 0 : k,
      onMouseMove: w
    },
    onClick: g,
    children: A(t, x)
  });
  return !l && T || null;
}
let ez = class e {
  constructor() {
    this.circularBuffer = new CircularBuffer(e.BUFFER_CAPACITY);
    this.lastTimestamp = 0;
  }
  clear() {
    this.circularBuffer.clear();
  }
  push(t, i) {
    i - this.lastTimestamp > e.THROTTLE_DURATION_MS && (this.circularBuffer.push(t), this.lastTimestamp = i);
  }
  getLocation50msAgo() {
    let e = this.circularBuffer.toArray();
    return e.length > 0 ? e[0] : new Point(window.innerWidth, window.innerHeight);
  }
};
function eV(e) {
  let [t, i] = useState(null);
  let [a, r] = useState(0);
  let l = selectCurrentFile();
  let s = useRef(noop);
  let c = useRef(noop);
  let d = useRef(null);
  let _ = useRef(null);
  let m = zr(l, t);
  let f = useRef({
    notificationId: "",
    mouseLocationHistory: new ez(),
    scheduledShowQuickReply: void 0,
    scheduledMarkAsRead: void 0
  });
  useEffect(() => {
    _.current && _.current.addEventListener("mouseover", e => {
      clearTimeout(f.current?.scheduledShowQuickReply);
    });
  }, [t]);
  let p = () => {
    clearTimeout(f.current?.scheduledMarkAsRead);
    f.current.scheduledMarkAsRead = setTimeout(() => {
      c.current = s.current;
    }, 1e3);
  };
  let h = useMemo(() => {
    function e(e, t, a) {
      let n = window.innerWidth > 900 && window.innerHeight > 650;
      f.current.notificationId = e.notification_id;
      n && UC(e) ? (i(AS(e)), r(t), s.current = a) : (i(null), s.current = noop);
      f.current.mouseLocationHistory.clear();
    }
    return {
      onClick: e => !1,
      toggleQuickReply: (t, i, a) => {
        let n = !1;
        if (i.notification_id !== f.current.notificationId && _.current && t instanceof MouseEvent) {
          let e = _.current.getBoundingClientRect();
          let i = new Point(e.left, e.top);
          let a = new Point(e.left, e.bottom);
          let o = [f.current.mouseLocationHistory.getLocation50msAgo(), i, a];
          n = _$$y(new Point(t.clientX, t.clientY), o);
        }
        let o = t.target;
        if (n) {
          var r;
          r = () => {
            e(i, o.getBoundingClientRect().bottom, a);
          };
          clearTimeout(f.current?.scheduledShowQuickReply);
          f.current && (f.current.scheduledShowQuickReply = setTimeout(r, 500));
        } else {
          clearTimeout(f.current?.scheduledShowQuickReply);
          e(i, o.getBoundingClientRect().bottom, a);
        }
      },
      onMouseMove: e => {
        f.current.mouseLocationHistory.push(new Point(e.clientX, e.clientY), e.timeStamp);
      },
      onRemove: e => {
        e.notification_id === f.current.notificationId && i(null);
      },
      inDesktopTray: !1
    };
  }, [_]);
  if (!getFeatureFlags().desktop_quickreply_filebrowser) return jsx(Fragment, {
    children: e.children
  });
  let b = Math.max(0, a - (d.current?.getBoundingClientRect().y ?? 0) - (_.current?.getBoundingClientRect().height ?? 640));
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "quick_reply_switcher--hoverContainer--eL8mU",
      ref: d,
      children: t && !m && jsx("div", {
        className: "quick_reply_switcher--quickReplyContainer--7Qpx8",
        "data-testid": "quick-reply-container",
        style: {
          top: b,
          maxHeight: 640,
          minHeight: 450
        },
        onMouseEnter: () => {
          p();
        },
        onMouseLeave: () => {
          clearTimeout(f.current?.scheduledMarkAsRead);
          c.current();
          c.current = noop;
          s.current = noop;
        },
        children: jsx(TabLoop, {
          children: jsx(_$$d, {
            quickReplyInfo: t,
            onClose: () => i(null),
            fileBrowser: !0,
            ref: _
          })
        })
      })
    }), jsx(_$$H3.Provider, {
      value: h,
      children: e.children
    })]
  });
}
ez.BUFFER_CAPACITY = 10;
ez.DESIRED_DURATION_MS = 50;
ez.THROTTLE_DURATION_MS = ez.DESIRED_DURATION_MS / ez.BUFFER_CAPACITY;
let eQ = "user_notifications_dropdown--dateHeader---l8oH";
let e$ = "user_notifications_dropdown--markAllReadButton--TwhKK text--fontPos11--2LvXf text--_fontBase--QdLsd";
export function $$eY4(e, t) {
  let i = useDispatch<AppDispatch>();
  let a = useSelector(e => e.user.id);
  let n = useSelector(e => e.user.community_profile_id);
  let s = useSelector(e => e.authedUsers.byId[a]?.plans);
  let c = useMemo(() => void 0 !== s && (new Map(s.map(e => [e.plan_id, e.is_org])).get(t) || !1), [s, t]);
  let d = useSelector(e => e.userNotifications.communityProfileBellStates);
  let u = useSelector(e => e.selectedView.view);
  let [_, m] = useState(new Map());
  let [p, h] = useState(!0);
  let x = _$$F(d);
  useEffect(() => {
    let o = debounce(() => {
      e ? n && (x.current[n] && i(X2({
        isBellStateHigh: !1,
        userInitiated: !0,
        profileId: n
      })), notificationAPI.getCommunityServerDriven({
        currentView: u
      }).then(({
        data: e
      }) => {
        w(e.meta);
      }).catch(e => {
        i(VisualBellActions.enqueue({
          message: getI18nString("user_notification.an_error_occurred_while_fetching_your_community_notifications"),
          type: "user-notification",
          error: !0
        }));
        i(hideDropdownAction());
      })) : (Zo(!1, td, a), notificationAPI.getServerDrivenPlan({
        currentPlanId: t,
        currentView: u,
        isPlanOrg: c
      }).then(({
        data: e
      }) => {
        w(e.meta);
      }).catch(e => {
        i(VisualBellActions.enqueue({
          message: getI18nString("user_notification.an_error_occurred_while_fetching_your_notifications"),
          type: "user-notification",
          error: !0
        }));
        i(hideDropdownAction());
      }));
    }, 800, !0);
    h(!0);
    o();
  }, [t, x, u, i, e, c, n, a]);
  let w = e => {
    let t = new Map();
    let i = !1;
    e.forEach(e => {
      t.set(e.notification_id, e);
      !i && e.filters.is_priority && (i = !0);
    });
    m(t);
    h(!1);
  };
  return {
    notificationFeedMap: _,
    isFetchingNotifications: p,
    markAllAsReadFn: () => {
      (e ? sendWithRetry.post("/api/user_notifications/community/mark_read", {
        currentView: u,
        source: bellFeedAPIInstance ? "desktopbell" : "web"
      }) : sendWithRetry.post("/api/user_notifications/mark_read/plan", {
        current_plan_id: t,
        currentView: u,
        is_plan_org: c,
        source: bellFeedAPIInstance ? "desktopbell" : "web"
      })).then(() => {
        m(new Map(Array.from(_, ([e, t]) => (t.is_unread = !1, [e, t]))));
      }).catch(() => {
        i(VisualBellActions.enqueue({
          message: getI18nString("user_notification.an_error_occurred_marking_all_as_read"),
          type: "user-notification",
          error: !0
        }));
      });
    },
    updateNotification: (e, t) => {
      m(new Map(_.set(e, t)));
    }
  };
}
export function $$eJ2(e, t) {
  return e.filter(e => !t.includes(e.notification_id));
}
export function $$eK3(e) {
  return e.some(e => e.filters.is_priority);
}
export function $$eX0(e) {
  let [t, i] = useState(td);
  let {
    notificationFeedMap,
    isFetchingNotifications,
    markAllAsReadFn,
    updateNotification
  } = $$eY4(!!e.inCommunity, t);
  let [u, _] = useState([]);
  let f = t === td ? _$$a : t;
  let p = $$eJ2([...notificationFeedMap.values()], u);
  let h = $$eK3(p);
  let b = useHighPriorityNotificationsExperiment(h);
  let [k, w, v] = Tabs.useTabs({
    all: !0,
    priority: !!b && h,
    unread: !0
  });
  let g = useLatestRef(v.activeTab);
  useEffect(() => {
    v.activeTab !== g && trackContextViewed({
      name: "user_notifications_filter_viewed",
      filter_type: v.activeTab,
      dropdown_location: "web"
    });
  }, [g, v.activeTab]);
  let j = e => {
    e.stopPropagation();
  };
  let y = e => {
    e === _$$a && (e = td);
    trackFileBrowserPlanFilterSelected(e, "notifications", void 0);
    i(e);
  };
  let A = useMemo(() => p.filter(e => e.filters.is_priority), [p]);
  let T = useMemo(() => p.filter(e => e.is_unread), [p]);
  let P = t => jsx($$a1.Feed, {
    notifications: t,
    currentPlanFilter: f,
    currentNotificationFilter: v.activeTab,
    hiddenNotificationIds: u,
    setHiddenNotificationIds: _,
    isFetchingNotifications,
    inCommunity: e.inCommunity,
    fillParent: !1,
    updateNotificationCallback: updateNotification
  });
  return jsx("div", {
    className: m()(0 !== notificationFeedMap.size || isFetchingNotifications ? "user_notifications_dropdown--dropdownContainer--ON3UV text--fontPos11--2LvXf text--_fontBase--QdLsd" : "user_notifications_dropdown--dropdownContainerEmptyState--7D3ct user_notifications_dropdown--dropdownContainer--ON3UV text--fontPos11--2LvXf text--_fontBase--QdLsd", e.containerClassName, {
      "user_notifications_dropdown--arrowRight--g36M8": e.arrowRight
    }),
    onMouseDown: j,
    onClick: j,
    "data-onboarding-key": fD,
    children: jsxs(eV, {
      children: [jsx($$a1.Header, {
        selectedPlan: t,
        onPlanFilterUpdate: e => y(e),
        inCommunity: !!e.inCommunity,
        markAllAsReadFn,
        inDesktopTray: !1
      }), jsx($$a1.FilterToggle, {
        notificationFilter: v.activeTab,
        toggleNotificationFilter: e => {
          logAndTrackCTA({
            filter_type: e
          }, "user_notifications_filter_clicked");
        },
        isFetchingNotifications,
        notifications: p,
        markAllAsReadFn,
        tabManager: v,
        tabPropsMap: k
      }), jsx(Tabs.TabPanel, {
        ...w.all,
        children: P(p)
      }), jsx(Tabs.TabPanel, {
        ...w.priority,
        children: P(A)
      }), jsx(Tabs.TabPanel, {
        ...w.unread,
        children: P(T)
      })]
    })
  });
}
function eW(e, t) {
  return !e && t.some(e => e.is_unread);
}
(e => {
  function t(e) {
    return jsx("h3", {
      className: eQ,
      children: eA[e.notificationDateGroup]
    });
  }
  function i(e) {
    return useHighPriorityNotificationsExperiment(!0) ? jsx("h3", {
      className: eQ,
      children: eI[e.notificationPriorityGroup]
    }) : null;
  }
  e.Feed = function (e) {
    let a = selectUser();
    let l = useSelector(e => a ? e.authedUsers.byId[a.id]?.plans : null);
    let s = useStore();
    let d = useDispatch<AppDispatch>();
    let u = selectPermissionsState();
    let _ = selectCurrentFile();
    let m = useCurrentUserOrg();
    let b = t => {
      e.setHiddenNotificationIds([...e.hiddenNotificationIds, t]);
    };
    let x = !1;
    if (a && !e.inCommunity && l?.length === 1 && (x = !0, e.currentPlanFilter === _$$a)) {
      let t = l[0].plan_id;
      for (let i of e.notifications) if (i.plan?.id.toString() !== t) {
        x = !1;
        break;
      }
    }
    let k = useCallback(t => () => {
      var i;
      var a;
      if (!t.deeplink) return;
      let n = new URL(t.deeplink.href);
      let o = n.pathname;
      if (o.includes("project")) {
        i = o.split("project/")[1];
        trackFolderEvent("file_browser_folder_click", i, null, u, {
          selectedView: "notifications",
          planFilterId: e.currentPlanFilter === _$$a ? null : e.currentPlanFilter
        });
      } else if (o.includes("team")) {
        a = o.split("team/")[1];
        trackTeamEvent("file_browser_team_click", a, u, {
          selectedView: "notifications",
          planFilterId: e.currentPlanFilter === _$$a ? null : e.currentPlanFilter
        });
      } else if (_$$ek(o)) {
        let t = zv(o);
        t && d(trackFileClicked({
          fileKey: t,
          entrypoint: "notifications",
          currentPlanFilter: {
            planId: e.currentPlanFilter === _$$a ? void 0 : e.currentPlanFilter || void 0
          }
        }));
      }
      d(hideDropdownAction());
      let r = !!_ && _.key === zv(n.pathname);
      if (!desktopAPIInstance && r) d(_$$H({
        params: n.searchParams.toString(),
        hash: n.hash
      }));else if (t.deeplink.use_unsafe) customHistory.unsafeRedirect(n.href, desktopAPIInstance ? void 0 : "_blank");else if (e.inDesktopTray) customHistory.redirect(n.href);else try {
        let e = mapPathToSelectedView(s.getState(), o);
        if ("teamFeed" === e.view) {
          m && t.plan?.id.toString() === m.id ? d(selectViewAction(e)) : customHistory.redirect(n.href, desktopAPIInstance ? void 0 : "_blank");
          return;
        }
        customHistory.redirect(n.href, desktopAPIInstance ? void 0 : "_blank");
        return;
      } catch {
        customHistory.redirect(n.href, desktopAPIInstance ? void 0 : "_blank");
      }
    }, [d, _, e.currentPlanFilter, e.inDesktopTray, u, s, m]);
    if (e.isFetchingNotifications) return jsx("div", {
      className: "user_notifications_dropdown--loadingContainer--jY9PZ",
      children: jsx(LoadingSpinner, {})
    });
    if (0 === e.notifications.length) return jsx("div", {
      className: "user_notifications_dropdown--emptyRow--4UwYl",
      children: renderI18nText("user_notifications.dropdown.no_notifications")
    });
    {
      var g;
      let a;
      let r;
      "priority" === e.currentNotificationFilter && e.notifications.sort((e, t) => Number(eT(t)) - Number(eT(e)));
      let l = e.inCommunity ? "user_notifications_dropdown--scrollContainer--phbbl" : "user_notifications_dropdown--scrollContainerWithPlan---Z4H1";
      let s = ey((g = e.notifications)[0].preferred_attachments[0].body.created_at, g[0].filters.user_last_viewed_timestamp) === ey(g[g.length - 1].preferred_attachments[0].body.created_at, g[0].filters.user_last_viewed_timestamp);
      let c = e => {
        let i;
        let o = null;
        if (!s) try {
          i = eM(e);
          let r = ey(i.body.created_at, e.filters.user_last_viewed_timestamp);
          r !== a && (a = r, o = jsx(t, {
            notificationDateGroup: r
          }, `date-${e.notification_id}`));
        } catch (e) {
          console.error("Skipping date header, unsupported notification");
        }
        return o;
      };
      let d = e => {
        let t = null;
        let a = eT(e) ? "actionable" : "actioned";
        a !== r && (r = a, t = jsx(i, {
          notificationPriorityGroup: a
        }, `priority-${e.notification_id}`));
        return t;
      };
      return jsx(RecordingScrollContainer, {
        className: `${e.fillParent ? "" : l}`,
        children: jsx("div", {
          children: e.notifications.map(t => {
            let i = null;
            i = "priority" === e.currentNotificationFilter ? d(t) : c(t);
            return jsxs(_$$Fragment, {
              children: [i, jsx(eL, {
                notification: t,
                updateNotificationCallback: e.updateNotificationCallback,
                dontShowPlanIcon: x,
                currentPlanFilter: e.currentPlanFilter,
                currentNotificationFilter: e.currentNotificationFilter,
                inDesktopTray: e.inDesktopTray,
                onHide: () => b(t.notification_id),
                followLinkOnClickCallback: k(t)
              }, `row-${t.notification_id}`)]
            }, `row-container-${t.notification_id}`);
          })
        })
      });
    }
  };
  e.UnreadBar = function (e) {
    return eW(e.isFetchingNotifications, e.notifications) ? jsxs("div", {
      className: "user_notifications_dropdown--unreadToggleBar---1U5q",
      children: [function (e) {
        let t = e.reduce((e, t) => e + Number(t.is_unread), 0);
        return jsx("div", {
          className: "user_notifications_dropdown--unread--e14XU",
          children: getI18nString("user_notifications.unread_count", {
            unreadCount: t
          })
        });
      }(e.notifications), eW(e.isFetchingNotifications, e.notifications) && jsx(ButtonPrimitive, {
        onClick: e.markAllAsReadFn,
        className: e$,
        children: renderI18nText("user_notifications.dropdown.mark_all_as_read")
      })]
    }) : null;
  };
  e.DateHeader = t;
  e.PriorityHeader = i;
  e.Header = function (e) {
    let t = selectCurrentFile();
    let i = !e.inDesktopTray && (!!t || !!getFeatureFlags().notif_settings_button);
    return jsxs("div", {
      className: "user_notifications_dropdown--header--aOhWS",
      children: [e.inCommunity ? jsx("div", {
        className: "user_notifications_dropdown--orgName--vbTxV ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: getI18nString("user_notification.community_notifications")
      }) : jsx(Fragment, {
        children: jsx(_$$j, {
          currentPlanFilter: e.selectedPlan === td ? _$$a : e.selectedPlan,
          onPlanFilterUpdate: e.onPlanFilterUpdate,
          displaySettings: i
        })
      }), e.children]
    });
  };
  e.FilterToggle = function (e) {
    let t = jsxs(Tabs.TabStrip, {
      manager: e.tabManager,
      children: [jsx(Tabs.Tab, {
        ...e.tabPropsMap.all,
        children: getI18nString("user_notification.all")
      }), jsx(Tabs.Tab, {
        ...e.tabPropsMap.priority,
        children: function (e) {
          let t = e.reduce((e, t) => e + Number(eT(t)), 0);
          return 0 === t ? getI18nString("user_notifications.requests_empty") : getI18nString("user_notifications.requests_toggle_count", {
            actionableCount: t
          });
        }(e.notifications)
      }), jsx(Tabs.Tab, {
        ...e.tabPropsMap.unread,
        children: function (e) {
          let t = e.reduce((e, t) => e + Number(t.is_unread), 0);
          return 0 === t ? getI18nString("user_notifications.unread_empty") : getI18nString("user_notifications.unread_toggle_count", {
            unreadCount: t
          });
        }(e.notifications)
      })]
    });
    return e.isFetchingNotifications ? null : jsxs("div", {
      className: "user_notifications_dropdown--filterToggleBar--VhBmn user_notifications_dropdown--unreadToggleBar---1U5q",
      children: [t, eW(e.isFetchingNotifications, e.notifications) && jsx(ButtonPrimitive, {
        onClick: e.markAllAsReadFn,
        className: e$,
        children: renderI18nText("user_notifications.dropdown.mark_all_as_read")
      })]
    });
  };
})($$a1 || ($$a1 = {}));
export const IP = $$eX0;
export const fd = $$a1;
export const he = $$eJ2;
export const e8 = $$eK3;
export const ql = $$eY4;
