import { C } from "../905/222694";
import { ServiceCategories } from "../905/165054";
import { getResourceDataOrFallback } from "../905/663269";
import { bellFeedAPIInstance } from "../figma_app/876459";
import { reportError } from "../905/11";
import { generateUUIDv4 } from "../905/871474";
import { FilePresenterData, DesktopTabPreviewView, FileWithCommentsAndReactions, PersistentUserNotificationBellData } from "../figma_app/43951";
import { td } from "../figma_app/273118";
export class $$u2 {
  constructor() {
    this.subscribedFiles = new Map();
  }
  updateSubscriptions(e, t) {
    let i = [this.subscribeToFilePresenterData, this.subscribeToFileCommentData, this.subscribeToTabPreviewData];
    for (let [n, r] of Object.entries(e)) if (!this.subscribedFiles.has(n) && t) {
      let e = i.map(e => e.call(this, n, t));
      this.subscribedFiles.set(n, e);
    }
    for (let [t, i] of this.subscribedFiles) if (!(t in e)) {
      for (let e of i) e();
      this.subscribedFiles.$$delete(t);
    }
  }
  subscribeToFilePresenterData(e, t) {
    return t.subscribe(FilePresenterData, {
      fileKey: e
    }, t => {
      if ("loaded" === t.status && t.data.file?.presenter) {
        let i;
        let n = null;
        let a = t.data.file.key;
        a !== e && reportError(ServiceCategories.DESKTOP, Error(`Mismatched file keys for presenter data: got ${a} from livegraph but expected ${e}`), {
          level: "warning"
        });
        let {
          userId,
          handle,
          imageURL,
          presenterExists,
          color
        } = t.data.file.presenter;
        userId && handle && imageURL && presenterExists && color && (n = {
          id: userId,
          handle,
          imageURL
        }, i = {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        });
        this.handleLiveFileUpdate(a, {
          presenter: n,
          color: i
        });
      }
    });
  }
  subscribeToTabPreviewData(e, t) {
    return t.subscribe(DesktopTabPreviewView, {
      fileKey: e
    }, e => {
      if ("loaded" === e.status && e.data.file) {
        let {
          file
        } = e.data;
        file && this.handleTabPreviewUpdate(file);
      }
    });
  }
  subscribeToFileCommentData(e, t) {
    let i = "menubar" + generateUUIDv4();
    return t.subscribe(FileWithCommentsAndReactions, {
      fileKey: e
    }, t => {
      if ("loaded" === t.status && t.data.file?.currentUserCommentReadStatus) {
        let i = t.data.file.currentUserCommentReadStatus.userId;
        let n = t.data.file.id;
        n !== e && reportError(ServiceCategories.DESKTOP, Error(`Mismatched file keys for comment data: got ${n} from livegraph but expected ${e}`), {
          level: "warning"
        });
        let a = t.data.file.comments[0];
        if (a) {
          if (Date.now() - a.createdAt.getTime() > 1e3) return;
          let e = a.user;
          for (let t of a.messageMeta) if (t.user?.id === i && t.user?.id !== e.id) {
            let t = {
              id: e.id,
              handle: e.handle,
              imageURL: e.imgUrl
            };
            this.handleLiveFileUpdate(n, {
              atMentionBy: t
            });
            return;
          }
        }
      }
    }, i);
  }
  handleTabPreviewUpdate(e) {
    var t;
    if (null == bellFeedAPIInstance) return;
    let {
      touchedAt,
      key
    } = e;
    let a = function (e) {
      let {
        signedThumbnailUrl,
        checkpointClientMeta,
        thumbnailGuid
      } = e;
      return signedThumbnailUrl ? {
        url: signedThumbnailUrl,
        backgroundColor: C(checkpointClientMeta),
        fullWidth: !!thumbnailGuid
      } : void 0;
    }(e);
    let o = (t = e.activeFileUsers) ? t.map(e => {
      let {
        id,
        handle,
        imageUrl
      } = e;
      return {
        id,
        handle,
        imageURL: imageUrl
      };
    }) ?? [] : [];
    this.subscribedFiles.has(key) && bellFeedAPIInstance.setTabPreviewData(key, {
      editedAt: touchedAt,
      thumbnail: a,
      activeFileUsers: o
    });
  }
  handleLiveFileUpdate(e, t) {
    bellFeedAPIInstance?.setLiveFileData(e, t);
  }
}
export function $$p1(e) {
  return e.thumbnail_url ? {
    url: e.thumbnail_url,
    backgroundColor: C(e.client_meta),
    fullWidth: !!e.thumbnail_guid
  } : void 0;
}
export function $$m0(e) {
  let t = !1;
  return e.subscribe(PersistentUserNotificationBellData, {}, e => {
    if ("loaded" !== e.status) return;
    let i = (getResourceDataOrFallback(e.data.persistentUserNotificationBells) || []).find(e => e.notificationSpaceId === td);
    i && i.bell !== t && (t = i.bell, bellFeedAPIInstance?.setBell(i.bell));
  });
}
export const cz = $$m0;
export const pf = $$p1;
export const vY = $$u2;
