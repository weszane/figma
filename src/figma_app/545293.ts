import { A } from '../905/202425';
import { v } from '../905/350380';
import { D as _$$D } from '../905/417423';
import { trackEventAnalytics } from '../905/449184';
import { L as _$$L } from '../905/480623';
import { _G, Pv } from '../905/619652';
import { t as _$$t } from '../905/658240';
import { h as _$$h, G } from '../905/706725';
import { Point } from '../905/736624';
import { generateUUIDv4 } from '../905/871474';
import { G as _$$G } from '../905/948837';
import { atomStoreManager } from '../figma_app/27355';
import { PublicModelType } from '../figma_app/162807';
import { throwTypeError } from '../figma_app/465776';
import { getUUID } from '../figma_app/517115';
import { dd } from '../figma_app/604494';
export let $$f3 = 'FRAGMENT_SEARCH_PEEK_MODAL';
export function $$E9(e, t, r, n, a, s, o) {
  return n ? {
    entry_point: e,
    session_id: t,
    search_id: r,
    componentSuggestionSessionId: getUUID(),
    query_type: function (e) {
      switch (e.type) {
        case 'input-text':
          return 'text';
        case 'input-selection':
          return 'selection';
        case 'input-image':
          return 'image';
        default:
          throwTypeError(e);
      }
    }(n),
    query_text: n.type === 'input-text' ? n.value : void 0,
    query_node_id: n.type === 'input-selection' ? n.node.guid : void 0,
    query_is_image_selection: function (e) {
      switch (e.type) {
        case 'input-text':
        case 'input-image':
          return;
        case 'input-selection':
          return A(e.node) || e.node.childCount === 1 && A(e.node.childrenNodes[0]);
        default:
          throwTypeError(e);
      }
    }(n),
    query_file_key: n.file_key,
    ...function (e) {
      switch (e.type) {
        case 'input-text':
        case 'input-image':
          return;
        case 'input-selection':
          return {
            query_width: e.node.absoluteBoundingBox.w,
            query_height: e.node.absoluteBoundingBox.h
          };
        default:
          throwTypeError(e);
      }
    }(n),
    ...b(s),
    is_in_preview: a,
    is_community_fragment_search: !!o
  } : {
    entry_point: e,
    session_id: t,
    search_id: r,
    is_in_preview: a,
    componentSuggestionSessionId: getUUID(),
    ...b(s),
    is_community_fragment_search: !!o
  };
}
export function $$y10(e) {
  switch (e) {
    case 'percent_match':
      return 'relevance';
    case 'last_modified':
      return 'last_modified';
    case void 0:
      return;
    default:
      throwTypeError(e);
  }
}
function b(e) {
  return e && e.searchModelType === PublicModelType.FILES ? {
    filterFolderIds: e.folderIds,
    filterTeamIds: e.teamIds,
    filterCreatorIds: e.creatorIds
  } : null;
}
export function $$T14(e) {
  return e?.type === $$f3;
}
export function $$I16(e, t = 378) {
  let r = Math.min(e.x, e.y);
  if (r > t) {
    let n = t / r;
    return new Point(e.x * n, e.y * n);
  }
  return e;
}
export var $$S1 = (e => (e.FragmentSearch = 'fragment-search', e.GPT = 'gpt-vision', e))($$S1 || {});
export function $$v5(e, t = 'fragment-search') {
  let r;
  r = t === 'fragment-search' ? $$I16(new Point(e.size.x, e.size.y)) : $$I16(function (e, t) {
    let r = Math.max(e.x, e.y);
    if (r > 2048) {
      let t = 2048 / r;
      return new Point(e.x * t, e.y * t);
    }
    return e;
  }(new Point(e.size.x, e.size.y), 0), 768);
  let n = _G(r, e.guid, !1, void 0, !1, !0);
  return n && n.pixels && n.pixelSize && n.displaySize && Pv(n.pixels, n.pixelSize).split(';base64,').pop() || null;
}
export async function $$A11(e, t, r) {
  return t.x !== e.width || t.y !== e.height ? {
    type: 'image',
    value: function (e, t) {
      let r = document.createElement('canvas');
      let n = r.getContext('2d');
      r.width = t.x;
      r.height = t.y;
      n?.drawImage(e, 0, 0, t.x, t.y);
      let i = r.toDataURL('image/png').split(',');
      if (i.length >= 2) return i[1];
      throw new Error('Invalid data URL format');
    }(e, t)
  } : {
    type: 'image',
    value: await _$$t(r)
  };
}
export function $$x15(e) {
  return new Promise((t, r) => {
    let n = document.createElement('img');
    let i = URL.createObjectURL(e);
    n.onload = () => {
      t(n);
      URL.revokeObjectURL(i);
    };
    n.onerror = e => {
      r(e);
      URL.revokeObjectURL(i);
    };
    n.src = i;
  });
}
export async function $$N7(e, t, r, l, c, u, p, _) {
  let h = generateUUIDv4();
  let m = Date.now();
  let g = atomStoreManager.get(dd);
  let f = $$E9(t, g, h, e, !1, r, u);
  let y = e.type === 'input-selection' ? function (e) {
    let t = e.editInfo;
    return {
      query_is_top_level_node: e.isTopLevelFrame(),
      query_num_descendant_nodes: e.getVisibleDescendantIds().length,
      query_is_component: e.isComponentish,
      query_depth_from_top_level_frame: e.depthFromTopLevelFrame,
      query_created_at: t?.createdAt,
      query_last_edited_at: t?.lastEditedAt,
      query_last_edited_by: t?.userId,
      query_edit_info_valid: !!t,
      query_node_type: e.type
    };
  }(e.node) : {};
  _$$h.setFragmentSearchLoading(h, e, l, u, c);
  trackEventAnalytics('Fragment search query', {
    ...y,
    ...f
  }, {
    forwardToDatadog: !0
  });
  let b = {
    session_id: g,
    search_id: h,
    node_id: e.type === 'input-selection' ? e.node.guid : ''
  };
  try {
    let a = [];
    switch (e.type) {
      case 'input-image':
        a = await w(e, b, r, c, u);
        break;
      case 'input-text':
        a = await $$O18(e, b, r, c, u, _);
        break;
      case 'input-selection':
        a = await $$C17(e, b, r, c, u);
        break;
      default:
        throwTypeError(e);
    }
    let o = [];
    if (o = u ? a.map(e => ({
      ...e,
      type: 'hub-file-fragment'
    })) : a.map(e => ({
      ...e,
      type: 'fig-file-fragment'
    })), _$$h.getSearchId(u) !== h) {
      return;
    }
    trackEventAnalytics('Fragment search time to load', {
      ...f,
      elapsed_time: Date.now() - m
    });
    trackEventAnalytics('Fragment search result', {
      ...f,
      count: a.length
    });
    _$$h.setFragmentSearchResults(h, o, t, u);
    p && p();
  } catch (e) {
    if (_$$h.getSearchId(u) !== h) return;
    _$$h.setFragmentSearchError(h, e, u);
  }
}
export async function $$C17(e, t, r, n, i) {
  let {
    node,
    file_key
  } = e;
  let o = $$v5(node);
  if (!o) throw new Error('Failed to export thumbnail');
  return (await _$$D.postFragmentSearch({
    type: 'image',
    value: o
  }, file_key, t, r, n, i)).data.meta.results;
}
async function w(e, t, r, n, i) {
  let a = await $$x15(e.imageFile);
  let s = $$I16(new Point(a.width, a.height));
  let o = await $$A11(a, s, e.imageFile);
  return (await _$$D.postFragmentSearch(o, e.file_key, t, r, n, i)).data.meta.results;
}
export async function $$O18(e, t, r, n, i, a) {
  return (await _$$D.postFragmentSearch({
    type: 'text',
    value: e.value
  }, e.file_key, t, r, n, i, a)).data.meta.results;
}
export async function $$R12(e, t) {
  let r = (await _$$D.getFragmentData({
    file_key: t,
    node_id: e.guid
  })).data.meta.results;
  _$$L.setIndexedFragmentData(r);
}
export { cN, U2 } from '../905/457801';
export const De = _$$D;
export const UF = $$S1;
export const G4 = _$$G;
export const v2 = $$f3;
export const T1 = $$v5;
export const LK = _$$L;
export const Hl = $$N7;
export const hO = _$$h;
export const d3 = $$E9;
export const eQ = $$y10;
export const SW = $$A11;
export const ni = $$R12;
export const G1 = G;
export const uZ = $$T14;
export const yt = $$x15;
export const m1 = $$I16;
export const lc = $$C17;
export const c = $$O18;
export const vz = v;