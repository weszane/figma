import { G } from '../905/11536';
import { getI18nString, getTranslatedDynamicContent } from '../905/303541';
import { selectCurrentUser } from '../905/372672';
import { c2 } from '../905/382883';
import { trackEventAnalytics } from '../905/449184';
import { $A } from '../905/862883';
import { aP } from '../figma_app/10554';
import { c as _$$c } from '../figma_app/11961';
import { jh } from '../figma_app/35887';
import { bD, Ug, vt } from '../figma_app/45218';
import { FEditorType } from '../figma_app/53721';
import { Ni } from '../figma_app/188152';
import { FPublicationStatusType, FTemplateCategoryType } from '../figma_app/191312';
import { W_ } from '../figma_app/350203';
import { canAdminOrg, hasAdminRoleAccessOnTeam, hasAdminRoleAccessOnTeam__DEPRECATED, hasOrgAccess } from '../figma_app/642025';
import { memoizeByArgs } from '../figma_app/815945';
import { useSelector } from 'react-redux';
export function $$b29(e, t) {
  return {
    ...(e && e.versions || {}),
    ...(t && t.versions || {})
  };
}
export function $$T11(e, t, r) {
  return e && t && t[e] || r;
}
export function $$I26(e) {
  return e && e.trim() || '';
}
export function $$S44(e) {
  return e && e.status || {
    code: aP.EDIT
  };
}
export function $$v54(e, t) {
  let r = getI18nString('community.profiles.your_handle_text');
  return e && e.length !== 0 ? e.length > 15 ? getI18nString('community.profiles.profile_max_15_characters_in_length', {
    errorStringPrefix: r
  }) : /^\w{1,15}$/.test(e) ? null : getI18nString('community.profiles.profile_cannot_contain_special_characters', {
    errorStringPrefix: r
  }) : getI18nString('community.publishing.profile_handle_cannot_be_empty', {
    errorStringPrefix: r
  });
}
export function $$A4(e, t) {
  let r = 'authedActiveCommunityProfile' in t ? t.authedActiveCommunityProfile : null;
  return r?.id === e.id;
}
export function $$x45(e, t) {
  if (!('user' in t)) return !1;
  let r = t.authedProfilesById[e];
  return r?.primary_user_id ? !!t.user && !!r.associated_users?.find(e => e.user_id === t.user.id) : r?.team_id ? !!(t.user && t.teamAdminRolesForAuthedUsers[t.user.id].some(e => e.team_id === r.team_id)) || hasAdminRoleAccessOnTeam(r.team_id, t) : !!r?.org_id && canAdminOrg(r.org_id, t);
}
let N = memoizeByArgs((e, t, r, n) => {
  let i = null;
  if (e && t[e]) {
    let a = t[e];
    i = {
      isAdmin: canAdminOrg(e, {
        currentUserOrgId: e,
        user: r,
        orgById: t,
        orgUsersByOrgId: n,
        fileByKey: {}
      }),
      id: a.id,
      name: a.name
    };
  }
  return i;
});
export function $$C5(e) {
  return N(e.currentUserOrgId, e.orgById, e.user, e.orgUsersByOrgId);
}
export function $$w61() {
  let e = useSelector(e => e.currentUserOrgId);
  return N(e, useSelector(e => 'orgById' in e ? e.orgById : {}), useSelector(e => e.user), useSelector(e => 'orgUsersByOrgId' in e ? e.orgUsersByOrgId : {}));
}
export let $$O37 = memoizeByArgs((e, t, r) => {
  let n;
  let i = t.plugins.fetchedResources;
  switch (e) {
    case FEditorType.Design:
      n = $A.Design;
      break;
    case FEditorType.DevHandoff:
      n = $A.Handoff;
      break;
    case FEditorType.Slides:
      n = $A.Slides;
      break;
    case FEditorType.Cooper:
      n = $A.Cooper;
      break;
    default:
      n = $A.FigJam;
  }
  let a = [];
  for (let e of t.plugins[n]) {
    let t = i[e.id];
    if (t && t.version) {
      a.push(t.version);
      continue;
    }
    let n = r[e.id];
    n && a.push(n);
  }
  return a;
});
export function $$R0(e) {
  return $$O37(e.selectedView.editorType, e.recentlyUsed, e.localPlugins);
}
export function $$L25(e) {
  if (!e) throw new Error(getI18nString('community.publishing.cover_image_not_found'));
  if (!['image/jpeg', 'image/png'].includes(e.type)) throw new Error(getI18nString('community.publishing.cover_image_requirements'));
  if (e.size > $$B22) {
    throw new Error(getI18nString('community.publishing.cover_image_exceeds_max_size', {
      maxResourceSize: Math.floor($$B22 / 1e6)
    }));
  }
  return e.size;
}
export function $$P23(e, t) {
  let r = e.find(e => e.id === t);
  return r?.tags || [];
}
export function $$$$D52(e) {
  return getTranslatedDynamicContent(e.i18n_meta?.text, e.text);
}
export function $$k1(e) {
  return e.replace(/[\s_-]+/g, ' ').trim().toLocaleLowerCase();
}
export function $$M58(e) {
  return e.match(/^[\P{Script_Extensions=Common} _\-0-9]*$/gu) ? e.match(/^[\P{Script_Extensions=Common}0-9](.*[\P{Script_Extensions=Common}0-9])?$/gu) ? e.toLocaleLowerCase() !== e ? getI18nString('community.publishing.tags_can_only_contain_lowercase_characters') : e.length > 25 ? getI18nString('community.publishing.tags_can_only_have_up_to_25_characters') : e.match(/[ _-]{2,}/) ? getI18nString('community.publishing.tags_cannot_have_consecutive_dashes_underscores_or_spaces') : (e.match(/[ _-]/g) || []).length > 2 ? getI18nString('community.publishing.tags_cannot_be_longer_than_3_words') : null : getI18nString('community.publishing.tags_must_begin_and_end_with_a_letter_or_number') : getI18nString('community.publishing.tags_can_only_contain_certain_characters');
}
export function $$F16(e) {
  return e.length > $$Z9 ? getI18nString('community.publishing.tagline_must_be_at_most_100_characters_long') : null;
}
let $$j30 = {
  name: '',
  description: '',
  tags: [],
  categoryId: null,
  creatorPolicy: '',
  viewerMode: FTemplateCategoryType.CANVAS,
  scalingMode: null,
  author: {
    user_id: ''
  },
  commentsSetting: Ni.ENABLED,
  publishers: {
    inputValue: '',
    tokens: [],
    errorMessage: ''
  },
  blockPublishingOnToS: !1
};
let $$U8 = ['Tab', 'Enter', ','];
let $$B22 = 5242880;
let $$G57 = 0xF00000;
let $$V7 = 0x6400000;
let $$H46 = 100;
let $$z38 = 240;
let $$W56 = 240;
let $$K17 = 4096;
let $$Y28 = 1024;
let $$$40 = 5;
let $$X36 = 5;
let $$q24 = 10;
let $$J3 = 60;
let $$Z9 = 100;
function Q(e) {
  return 'is_widget' in e && e.is_widget ? vt.WIDGET : 'current_plugin_version_id' in e ? vt.PLUGIN : vt.HUB_FILE;
}
export function $$ee55(e) {
  return Q(e) === vt.HUB_FILE ? Ug.HUB_FILE : Q(e) === vt.WIDGET ? Ug.WIDGET : Ug.PLUGIN;
}
export function $$et12(e) {
  return e >= $$q24 - 1 ? getI18nString('community.publishing.cannot_have_more_than_max_publishers', {
    MAX_PUBLISHERS_PER_RESOURCE: $$q24
  }) : null;
}
export function $$er10(e) {
  let t = {};
  let r = {};
  let n = e.map(e => (t[e.id] = e, r[e.author.id] = e.author, e.id));
  return {
    commentsById: t,
    authorsById: r,
    feed: n
  };
}
export function $$en35(e) {
  return e.publishing_status === FPublicationStatusType.APPROVED_PUBLIC && e.comments_setting !== Ni.ALL_DISABLED;
}
export function $$ei15(e, t) {
  return !!(t.comments_setting !== Ni.ALL_DISABLED && !t.commenting_is_restricted && !e?.community_commenting_blocked_at);
}
export function $$ea31(e) {
  return !!(e && e.primary_user_id && e.public_at);
}
export let $$es33 = _$$c;
export function $$eo41() {
  return useSelector(e => e.authedActiveCommunityProfile);
}
export function $$el50() {
  let e = useSelector(e => e.authedActiveCommunityProfile);
  let t = useSelector(e => e.authedProfilesById);
  let r = useSelector(e => e.authedUsers.byId);
  let i = useSelector(e => 'orgById' in e ? e.orgById : {});
  if (!e) return null;
  if (!e.public_at) {
    if (e.primary_user_id) return r[e.primary_user_id];
    if (e.org_id) return i[e.org_id];
  }
  return t[e.id];
}
export function $$ed51(e) {
  let t = selectCurrentUser();
  let r = useSelector(e => $$eu39(e), c2);
  let a = useSelector(e => $$ec20(e));
  let s = useSelector(e => 'authedProfilesById' in e ? e.authedProfilesById : {});
  if (!e) return !1;
  let o = s[e.id];
  return !!o && (t?.community_profile_id === o.id || !!o.team_id && !!r[o.team_id] || !!(o.org_id && a[o.org_id]));
}
export function $$ec20(e) {
  if (!('orgById' in e)) return {};
  let t = e.orgById;
  let r = {};
  Object.keys(t).forEach(n => {
    canAdminOrg(n, e) && (r[n] = t[n]);
  });
  return r;
}
export function $$eu39(e) {
  if (!('user' in e) || !e.user) return {};
  let t = e.teamAdminRolesForAuthedUsers[e.user.id];
  if (!t) return {};
  let r = {};
  t.forEach(t => {
    e.authedTeamsById[t.team_id] && (r[t.team_id] = e.authedTeamsById[t.team_id]);
  });
  return r;
}
export function $$ep19({
  authedProfilesById: e,
  profileId: t,
  userId: r,
  orgId: n,
  teamId: i
}) {
  return t ? e[t] : n ? Object.values(e).find(e => e.org_id === n) || null : i ? Object.values(e).find(e => e.team_id === i) || null : r && Object.values(e).find(e => e.associated_users?.find(e => e.user_id === r)) || null;
}
export function $$e_49(e, t) {
  return e && Object.values(t).find(t => t.associated_users?.find(r => r.user_id === e.id && t.public_at)) || null;
}
export function $$eh21() {
  return useSelector(e => $$em34(e.selectedView));
}
export function $$em34(e) {
  return e.view === 'communityHub' || $$eg59(e) || !1;
}
export function $$eg59(e) {
  return e.view === 'search' && (e.entryPoint === 'url:community' || e.entryPoint === 'community' || e.entryPoint === 'community:header');
}
export function $$ef53(e) {
  return e.view === 'communityHub' && e.subView === 'monetizationRedirectView';
}
export function $$eE47(e) {
  return e.view === 'communityHub' && e.subView === 'hubFileEmbed';
}
export function $$ey2(e) {
  return e.view === 'communityHub' && e.subView === 'handle';
}
export function $$eb6(e) {
  return G(e);
}
export function $$eT32(e) {
  return e.community_publishers?.accepted.find(e => $$es33(e)) || null;
}
export function $$eI48(e, t) {
  let r = $$eT32(t);
  if (r) return e.authedProfilesById[r.id] || null;
  let n = e.user && $$e_49(e.user, e.authedProfilesById);
  return n && t.community_publishers?.accepted.find(e => e.id === n.id) ? n : null;
}
export function $$eS27(e, t) {
  if (!t.user) return null;
  let r = $$eb6(t);
  let n = t.user;
  let i = t.authedProfilesById[e.id];
  if (r.length < 0) return null;
  if (i?.org_id) {
    let e = [...r, n].find(e => {
      let r = i.org_id;
      if (!r) return !1;
      let n = t.orgById[r];
      let a = t.orgUsersByOrgId[r][e.id];
      return hasOrgAccess(a, n, jh.ADMIN);
    }) || null;
    return e ? {
      userId: e.id,
      orgId: i.org_id
    } : null;
  }
  if (i?.team_id) {
    let e = r.find(e => hasAdminRoleAccessOnTeam__DEPRECATED(i.team_id, t, e.id)) || null;
    let n = t.teams[i.team_id]?.org_id || null;
    return e ? {
      userId: e.id,
      orgId: n
    } : null;
  }
  let a = r.find(t => t.id === e.primary_user_id);
  return a ? {
    userId: a.id,
    orgId: null
  } : null;
}
export function $$ev42(e) {
  switch (e) {
    case bD.PLUGIN:
      return 'plugins';
    case bD.WIDGET:
      return 'widgets';
    case bD.COMMENT:
      return 'comments';
    case bD.HUB_FILE:
      return 'hub_files';
    default:
      throw new Error('Unsupported Type');
  }
}
let $$eA18 = {
  threshold: 0.1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300
};
let $$ex14 = [{
  name: 'name',
  weight: 1
}, {
  name: 'description',
  weight: 1
}];
let $$eN13 = {
  ...$$eA18,
  keys: [{
    name: 'name',
    weight: 1
  }, {
    name: 'localFilePath',
    weight: 0.5
  }]
};
let $$eC60 = {
  ...$$eA18,
  keys: [{
    name: 'text',
    weight: 1
  }]
};
export function $$ew43(e, t) {
  trackEventAnalytics(W_.PROFILE_ADMIN_MENU_OPEN, {
    source: e,
    view: t
  });
}
export const CR = $$R0;
export const CW = $$k1;
export const Cj = $$ey2;
export const D = $$J3;
export const E1 = $$A4;
export const EL = $$C5;
export const Gg = $$eb6;
export const Gq = $$V7;
export const HE = $$U8;
export const HN = $$Z9;
export const HR = $$er10;
export const Hc = $$T11;
export const IZ = $$et12;
export const Ih = $$eN13;
export const Kj = $$ex14;
export const LI = $$ei15;
export const Lg = $$F16;
export const M0 = $$K17;
export const Pk = $$eA18;
export const T9 = $$ep19;
export const Tm = $$ec20;
export const UP = $$eh21;
export const Uc = $$B22;
export const V4 = $$P23;
export const Wi = $$q24;
export const YU = $$L25;
export const Yp = $$I26;
export const Zi = $$eS27;
export const Zs = $$Y28;
export const ax = $$b29;
export const b = $$j30;
export const cJ = $$ea31;
export const cV = $$eT32;
export const cs = $$es33;
export const d9 = $$em34;
export const e5 = $$en35;
export const eL = $$X36;
export const gS = $$O37;
export const gZ = $$z38;
export const gc = $$eu39;
export const jI = $$$40;
export const kc = $$eo41;
export const n = $$ev42;
export const nR = $$ew43;
export const oH = $$S44;
export const ou = $$x45;
export const pH = $$H46;
export const pK = $$eE47;
export const qA = $$eI48;
export const sD = $$e_49;
export const s_ = $$el50;
export const si = $$ed51;
export const uS = $$$$D52;
export const uz = $$ef53;
export const vr = $$v54;
export const x1 = $$ee55;
export const xj = $$W56;
export const yO = $$G57;
export const z7 = $$M58;
export const zU = $$eg59;
export const zd = $$eC60;
export const zp = $$w61;