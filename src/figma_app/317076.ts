import { ServiceCategories as _$$e } from "../905/165054";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { z } from "../905/239603";
import { Gw, FB } from "../vendor/149334";
import { debugState } from "../905/407919";
import { WB } from "../905/761735";
import { reportError } from "../905/11";
import { Zr } from "../figma_app/930338";
import { g as _$$g } from "../905/880308";
import { XHR } from "../905/910117";
import { ds } from "../figma_app/314264";
import { Cs } from "../905/420347";
import { M4 } from "../905/713695";
import { ZA, xA } from "../figma_app/633080";
import { S as _$$S } from "../figma_app/787550";
import { E as _$$E } from "../905/695476";
import { k4, Yi } from "../figma_app/164212";
let b = z.object({
  id: z.string(),
  node_id: z.string(),
  file_key: z.string(),
  link_name: z.string(),
  link_url: z.string(),
  is_user_override: z.boolean(),
  link_preview_json: z.any()
});
let T = z.object({
  meta: z.array(b)
});
export async function $$I7({
  fileKey: e,
  nodeId: t,
  includeInheritedLinks: r
}) {
  let n = (await _$$S.getRelatedLinks({
    nodeId: t,
    fileKey: e
  })).data;
  let i = T.safeParse(n);
  if (!i.success) throw Error("Invalid response from server");
  let a = i.data.meta.map(e => ({
    id: e.id,
    nodeId: e.node_id,
    linkName: e.link_name,
    linkUrl: e.link_url,
    fileKey: e.file_key,
    isUserOverride: !!e.is_user_override,
    linkPreviewJson: e.link_preview_json
  }));
  if (!r) return a;
  let s = debugState.getState().mirror.sceneGraph;
  let l = k4([t], s);
  let d = Yi([t], s);
  let c = await S(e, l);
  let u = await S(e, d);
  return [...a, ...c.map(e => ({
    ...e,
    nodeId: t,
    mainComponentId: l
  })), ...u.map(e => ({
    ...e,
    nodeId: t,
    mainComponentId: d
  }))];
}
async function S(e, t) {
  let r = debugState.getState().mirror.sceneGraph;
  if (!t) return [];
  let n = r.get(t);
  if (!n) return [];
  let {
    publishID
  } = n;
  let s = isValidSessionLocalID(parseSessionLocalID(publishID));
  let l = n.sourceLibraryKey;
  let d = (await M4.fetch(Cs.LibrariesByLibraryKeysQuery({
    libraryKeys: [l],
    subscriptionFileKey: debugState.getState().openFile?.key ?? null,
    orgId: debugState.getState().currentUserOrgId
  })))[0];
  let c = null;
  d && (ZA(d) && xA(d) ? c = d.hub_file_id : "library_file_key" in d && (c = d.library_file_key));
  return await $$I7({
    fileKey: c ?? e,
    nodeId: s ? publishID ?? "" : t,
    includeInheritedLinks: !1
  });
}
export async function $$v6(e) {
  let t = new Set([e]);
  let r = new Map();
  let n = new Map();
  let a = debugState.getState().mirror.sceneGraph;
  let s = (s, o, l) => {
    if (!o) return;
    let d = a.get(o);
    if (!d) return;
    let {
      publishID,
      guid
    } = d;
    let p = l.find(e => e.library_key === d.sourceLibraryKey);
    let _ = null;
    if (p && (ZA(p) && xA(p) ? _ = p.hub_file_id : "library_file_key" in p && (_ = p.library_file_key)), !_ || !publishID || !isValidSessionLocalID(parseSessionLocalID(publishID)) || _ === e) {
      r.set(guid, s);
      n.set(guid, o);
      return;
    }
    r.set(publishID, s);
    n.set(publishID, o);
    t.add(_);
  };
  let l = a.get("0:0")?.findAllWithCriteria({
    types: ["INSTANCE"]
  }).map(([e]) => e);
  if (l && l.length > 0) {
    let e = new Set();
    for (let t of l) {
      let r = a.get(t);
      if (!r || "INSTANCE" !== r.type) continue;
      let n = r.symbolId;
      if (!n) continue;
      let i = a.get(n);
      i?.sourceLibraryKey && e.add(i?.sourceLibraryKey);
    }
    let t = await M4.fetch(Cs.LibrariesByLibraryKeysQuery({
      libraryKeys: Array.from(e),
      subscriptionFileKey: debugState.getState().openFile?.key ?? null,
      orgId: debugState.getState().currentUserOrgId
    }));
    for (let e of l) {
      let r = a.get(e);
      if (!r || "INSTANCE" !== r.type) continue;
      s(e, r.symbolId, t);
      let n = Yi([e], a);
      s(e, n, t);
    }
  }
  let d = await XHR.post("/api/files/related_links", {
    file_keys: Array.from(t.values())
  });
  let c = [];
  d.data.meta.forEach(t => {
    let i = e === t.file_key && !!a.get(a.guidFromDeveloperFriendlyId(t.node_id));
    let s = {
      id: t.id,
      linkName: t.link_name,
      linkUrl: t.link_url,
      fileKey: t.file_key,
      isUserOverride: !!t.is_user_override,
      linkPreviewJson: t.link_preview_json
    };
    i && c.push({
      ...s,
      nodeId: t.node_id,
      mainComponentId: void 0
    });
    r.has(t.node_id) && c.push({
      ...s,
      nodeId: r.get(t.node_id),
      mainComponentId: n.get(t.node_id)
    });
  });
  return c;
}
export async function $$A3({
  fileKey: e,
  nodeId: t,
  url: r,
  name: n,
  nodeType: i,
  pluginId: a,
  source: s
}) {
  if ((await $$I7({
    fileKey: e ?? "",
    nodeId: t ?? ""
  })).find(e => e.linkUrl === r)) throw Error(`Link already exists on node ${t} with url ${r}`);
  return $$C2({
    fileKey: e,
    nodeId: t,
    url: r,
    name: n,
    nodeType: i,
    pluginId: a,
    source: s
  });
}
export async function $$x11(e) {
  let t;
  try {
    let r = await _$$E.getLinkMetadata({
      text: e
    });
    let n = r?.data?.meta;
    n?.title && (t = decodeURIComponent(n?.title));
  } catch (e) {} finally {
    if (!t) {
      let r = Gw(e);
      t = r ? Zr(r) : "N/A";
    }
  }
  return t;
}
z.object({
  node_id: z.string(),
  link_name: z.string(),
  link_url: z.string()
});
export let $$N5 = z.object({
  meta: b
});
export async function $$C2({
  url: e,
  nodeId: t,
  fileKey: r,
  name: n,
  onPost: i,
  nodeType: a,
  pluginId: d,
  source: c
}) {
  let h = "";
  if (n) h = n;else {
    let t = FB(e);
    if (t?.toLowerCase() === "github.com") h = "Github";else if (t?.toLowerCase() === "jira.com" || t?.toLowerCase() === "atlassian.net") {
      h = "Jira";
      let t = function (e) {
        for (let t of M) {
          let r = e.match(t);
          if (r?.[1]) return r[1];
        }
        return null;
      }(e);
      t && (h = `Issue ${t}`);
    } else h = await $$x11(e);
  }
  let m = {
    node_id: t ?? "",
    link_name: h,
    link_url: e
  };
  let g = XHR.post(`/api/files/${r}/related_links`, m);
  i && i();
  WB()?.optimisticallyCreate({
    DeveloperRelatedLink: {
      [`optimistic-link-${_$$g()}`]: {
        nodeId: t ?? "",
        fileKey: r ?? "",
        linkName: h,
        linkUrl: e,
        isUserOverride: !1,
        linkPreviewJson: null
      }
    }
  }, g);
  return g.then(e => (ds("Dev Handoff Related Links Added New Link Success", r, debugState.getState(), {
    nodeId: t,
    nodeType: a,
    source: c,
    pluginId: d
  }), e));
}
export async function $$w4({
  fileKey: e,
  nodeId: t,
  currentUrl: r,
  newValue: n,
  nodeType: i,
  pluginId: a,
  source: s
}) {
  let o = (await $$I7({
    fileKey: e,
    nodeId: t
  })).find(e => e.linkUrl === r);
  o || k({
    nodeId: t,
    url: r
  });
  return $$O1({
    fileKey: e,
    nodeId: t,
    linkId: o.id,
    name: n.name || o.linkName,
    url: n.url || o.linkUrl,
    isUserOverride: !1,
    clearLinkPreview: !0,
    nodeType: i,
    pluginId: a,
    source: s
  });
}
export function $$O1({
  fileKey: e,
  nodeId: t,
  linkId: r,
  name: n,
  url: i,
  isUserOverride: a,
  clearLinkPreview: s,
  nodeType: d,
  pluginId: c,
  source: u
}) {
  let h = {
    node_id: t,
    link_id: r,
    new_link_name: n,
    new_link_url: i
  };
  void 0 !== a && (h.is_user_override = a);
  s && (h.link_preview_json = null);
  let m = XHR.put(`/api/files/${e}/related_links`, h);
  WB()?.optimisticallyUpdate({
    DeveloperRelatedLink: {
      [r]: {
        linkName: n,
        linkUrl: i,
        isUserOverride: a,
        linkPreviewJson: s ? "" : void 0
      }
    }
  }, m);
  return m.then(r => (ds("Dev Handoff Related Links Edit Link Success", e, debugState.getState(), {
    nodeId: t,
    nodeType: d,
    source: u,
    pluginId: c
  }), r));
}
export async function $$R9({
  fileKey: e,
  nodeId: t,
  url: r,
  nodeType: n,
  pluginId: i,
  source: a
}) {
  let s = (await $$I7({
    fileKey: e,
    nodeId: t
  })).find(e => e.linkUrl === r);
  s || k({
    nodeId: t,
    url: r
  });
  return $$L8({
    fileKey: e,
    nodeId: t,
    linkId: s.id,
    nodeType: n,
    pluginId: i,
    source: a
  });
}
export function $$L8({
  fileKey: e,
  nodeId: t,
  linkId: r,
  nodeType: n,
  pluginId: i,
  source: a
}) {
  let s = XHR.del(`/api/files/${e}/related_links`, {
    node_id: t,
    link_id: r
  });
  WB()?.optimisticallyDelete({
    DeveloperRelatedLink: {
      [r]: null
    }
  }, s);
  return s.then(r => (ds("Dev Handoff Related Links Delete Link Success", e, debugState.getState(), {
    nodeId: t,
    nodeType: n,
    source: a,
    pluginId: i
  }), r));
}
export async function $$P0({
  fileKey: e,
  nodeId: t,
  url: r,
  linkPreviewJson: n
}) {
  let i = (await $$I7({
    fileKey: e,
    nodeId: t
  })).find(e => e.linkUrl === r);
  i || k({
    nodeId: t,
    url: r
  });
  return $$D10({
    link: i,
    linkPreviewJson: n
  });
}
export async function $$D10({
  link: e,
  linkPreviewJson: t
}) {
  try {
    let r = XHR.put(`/api/files/${e.fileKey}/related_links/link_preview`, {
      node_id: e.nodeId,
      link_id: e.id,
      link_preview_json: t
    });
    WB()?.optimisticallyUpdate({
      DeveloperRelatedLink: {
        [e.id]: {
          linkPreviewJson: JSON.stringify(t)
        }
      }
    }, r);
    await r;
  } catch (r) {
    reportError(_$$e.DEVELOPER_TOOLS, r, {
      extra: {
        link: e,
        linkPreviewJson: t
      }
    });
  }
}
function k({
  nodeId: e,
  url: t
}) {
  throw Error(`url ${t} and nodeId ${e} not found`);
}
let M = [/\/browse\/([A-Z]+-\d+)/, /selectedIssue=([A-Z]+-\d+)/, /issues\/([A-Z]+-\d+)/];
export const Co = $$P0;
export const Cq = $$O1;
export const DY = $$C2;
export const Iy = $$A3;
export const Me = $$w4;
export const Rb = $$N5;
export const SD = $$v6;
export const TU = $$I7;
export const Tz = $$L8;
export const WV = $$R9;
export const n7 = $$D10;
export const yf = $$x11;