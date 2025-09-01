import { dN } from "../vendor/291472";
import { KH } from "../905/81982";
import { U } from "../figma_app/477548";
import { $W } from "../905/144933";
class o {
  constructor(e, t, i, n, r, s, o = {
    list: U.getAtMentions,
    search: U.searchAtMentions
  }) {
    this.api = o;
    this.orgId = e;
    this.teamId = t;
    this.fileKey = i;
    this.maxResultsCount = void 0 !== n ? n : 5;
    this.includeHiResAvatars = r;
    this.checkPermissions = s;
  }
  async list(e) {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.list({
        fileKey: this.fileKey,
        teamId: this.teamId,
        orgId: this.orgId,
        includeHiResAvatars: this.includeHiResAvatars,
        checkPermissions: this.checkPermissions,
        limit: this.maxResultsCount,
        inFigmaDesignEditor: e
      });
      return meta;
    } catch (e) {
      console.error("An error ocurred while trying to fetch contacts.", e);
    }
    return [];
  }
  async search(e, t) {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.search({
        query: e,
        fileKey: this.fileKey,
        teamId: this.teamId,
        orgId: this.orgId,
        includeHiResAvatars: this.includeHiResAvatars,
        checkPermissions: this.checkPermissions,
        limit: this.maxResultsCount,
        inFigmaDesignEditor: t
      });
      return meta;
    } catch (e) {
      console.error("An error ocurred while searching for contacts.", e);
    }
    return [];
  }
  maxResultsLength() {
    return this.maxResultsCount;
  }
}
class l {
  constructor(e, t, i, n = {
    list: U.getShareModalContacts,
    search: U.searchShareModalContacts
  }) {
    this.api = n;
    this.orgId = e;
    this.teamId = t;
    this.maxResultsCount = void 0 !== i ? i : 5;
  }
  async list() {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.list({
        teamId: this.teamId,
        orgId: this.orgId,
        limit: this.maxResultsCount
      });
      return meta;
    } catch (e) {
      console.error("An error ocurred while trying to fetch contacts for share modal.", e);
    }
    return [];
  }
  async search(e) {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.search({
        query: e,
        teamId: this.teamId,
        orgId: this.orgId,
        limit: this.maxResultsCount
      });
      return meta;
    } catch (e) {
      console.error("An error ocurred while searching for contacts for share modal.", e);
    }
    return [];
  }
  maxResultsLength() {
    return this.maxResultsCount;
  }
}
export class $$d1 {
  async list() {
    return await Promise.resolve([]);
  }
  async search(e) {
    try {
      let {
        data: {
          meta
        }
      } = await $W.getCommunityMentions({
        query: e
      });
      return meta.results.map(e => e.model);
    } catch {
      console.error("An error ocurred while searching for mentions.");
    }
    return [];
  }
  maxResultsLength() {
    return 10;
  }
}
export class $$c0 {
  constructor(e, t, i = {
    list: U.getFeedAtMentions,
    search: U.searchFeedAtMentions
  }) {
    this.api = i;
    this.orgId = e;
    this.feedPostPublicUuid = t;
  }
  async list() {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.list({
        orgId: this.orgId,
        feedPostPublicUuid: this.feedPostPublicUuid
      });
      return meta;
    } catch (e) {
      console.error("An error ocurred while trying to fetch contacts.", e);
    }
    return [];
  }
  async search(e) {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.search({
        query: e,
        orgId: this.orgId,
        feedPostPublicUuid: this.feedPostPublicUuid
      });
      return meta;
    } catch (e) {
      console.error("An error ocurred while searching for contacts.", e);
    }
    return [];
  }
  maxResultsLength() {
    return 5;
  }
}
let u = new class {
  constructor(e) {
    this.searchLibrary = e;
  }
  set(e) {
    this.searchLibrary.set(e);
  }
  list() {
    return Promise.resolve(this.searchLibrary.list().sort((e, t) => e.handle < t.handle ? -1 : 1));
  }
  async search(e) {
    return (await this.searchLibrary.search(e)).map(e => e.item);
  }
  maxResultsLength() {
    return 5;
  }
}(new KH({
  keys: [{
    name: "handle",
    weight: .9
  }, {
    name: "email",
    weight: .1
  }],
  threshold: .2,
  tokenize: !0,
  shouldSort: !0
}));
export function $$p3({
  currentOrgId: e,
  teamId: t,
  users: i,
  fileKey: n,
  maxResultsCount: r,
  api: a,
  includeHiResAvatars: s = !1,
  checkPermissions: d,
  isShareModal: p = !1,
  feedPostUuid: m
}) {
  return p ? {
    library: new l(e, t, r)
  } : m && e ? {
    library: new $$c0(e, m)
  } : n ? {
    library: new o(e, t, n, r, s, d, a)
  } : (i.length && u.set(i), {
    library: u
  });
}
export async function $$m2(e, t, i) {
  let n;
  return (n = "" === e ? (await t.library.list(i)).slice(0, t.library.maxResultsLength()) : (await t.library.search(e, i)).slice(0, t.library.maxResultsLength())).length ? {
    type: "mentions",
    mentions: n,
    index: 0,
    maxMentions: t.library.maxResultsLength()
  } : null;
}
let h = /_/g;
export function $$g4(e) {
  let t = e.replace(h, "-");
  let i = dN.searchSynchronized(t, {
    maxResults: 10
  }) || [];
  return i.length ? {
    type: "emojis",
    emojis: i,
    index: 0,
    maxEmojis: 10,
    query: e
  } : null;
}
export const M8 = $$c0;
export const MH = $$d1;
export const fG = $$m2;
export const mp = $$p3;
export const oQ = $$g4;