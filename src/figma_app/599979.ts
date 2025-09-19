import { shallowEqual, useSelector } from 'react-redux'
import { reportError } from '../905/11'
import { sha1BytesFromHex, sha1Hex } from '../905/125019'
import { ServiceCategories as _$$e } from '../905/165054'
import { resolveMessage } from '../905/231762'
import { readImageBytes } from '../905/289751'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { H } from '../905/473998'
import { encodeBase64 } from '../905/561685'
import { getFeatureFlags } from '../905/601108'
import { s as _$$s } from '../905/608932'
import { uploadVideoToPresignedPost } from '../905/623179'
import { j } from '../905/659729'
import { liveStoreInstance } from '../905/713695'
import { en, GT } from '../905/759470'
import { aB, yr } from '../905/827765'
import { v as _$$v } from '../905/871922'
import { getValueOrFallback } from '../905/872825'
import { XHR } from '../905/910117'
import { IMAGE_TYPES, VIDEO_TYPE_VALUES } from '../905/966582'
import { O_ } from '../905/967587'
import { i as _$$i } from '../905/970229'
import { TeamOrgType } from '../figma_app/10554'
import { hasClientMeta, hasFigFileMetadata, hasMonetizedResourceMetadata, isPlugin, isWidget } from '../figma_app/45218'
import { PublisherType } from '../figma_app/155287'
import { Bg } from '../figma_app/246699'
import { hasHubFile, isPluginOrWidget } from '../figma_app/427318'
import { canAdminOrg, hasAdminRoleAccessOnTeam } from '../figma_app/642025'
import { A as _$$A, E3 } from '../figma_app/711113'
import { findPublishedProfileForUser, getAcceptedPublisherProfile, getAdminUserForProfile, getAssociatedProfiles, getAuthedPublisherProfile, isOrgOrTeamExport, MAX_COVER_IMAGE_SIZE, MAX_PLUGIN_SIZE } from '../figma_app/740025'
import { isResourcePendingPublishing, isUserAcceptedPublisher } from '../figma_app/777551'
import { getCurrentUserOrgUser } from '../figma_app/951233'

var $$M4 = (e => (e[e.NONE = 0] = 'NONE', e[e.PENDING = 1] = 'PENDING', e[e.DISPLAY_ONLY = 2] = 'DISPLAY_ONLY', e[e.ADMIN_IN_DIFFERENT_WORKSPACE = 3] = 'ADMIN_IN_DIFFERENT_WORKSPACE', e[e.ADMIN = 4] = 'ADMIN', e[e.NONE_WITH_INHERITED_ADMIN = 5] = 'NONE_WITH_INHERITED_ADMIN', e[e.PENDING_WITH_INHERITED_ADMIN = 6] = 'PENDING_WITH_INHERITED_ADMIN', e[e.DISPLAY_ONLY_WITH_INHERITED_ADMIN = 7] = 'DISPLAY_ONLY_WITH_INHERITED_ADMIN', e[e.EXPLICIT_ADMIN = 8] = 'EXPLICIT_ADMIN', e))($$M4 || {})
let $$F43 = [1, 6]
let $$j8 = [2, 7]
export function $$U29(e) {
  return e >= 4
}
export function $$B25(e, t) {
  let r = getAssociatedProfiles(e)
  let n = !!(t.creator.id && r.some(e => e.id === t.creator.id))
  if (n && isOrgOrTeamExport(e.authedActiveCommunityProfile)) {
    let r = getAcceptedPublisherProfile(t)
    return r?.id === e.authedActiveCommunityProfile?.id
  }
  return n
}
export function $$G19(e) {
  let t = useSelector(t => $$V13(t, e))
  let r = useSelector(r => hasClientMeta(e) ? $$U29(t) : $$B25(r, e))
  let i = useSelector(t => isPlugin(e) || isWidget(e) ? _$$A(t, e) : null)
  let a = hasFigFileMetadata(e) ? e.fig_file_metadata?.key : null
  let s = liveStoreInstance.File.useValue(a)
  let o = !!a && !!s
  return hasClientMeta(e) ? r && o : !!(isPlugin(e) || isWidget(e)) && (r || E3(i))
}
export function $$V13(e, t) {
  let r = getAuthedPublisherProfile(e, t)
  let n = !!(r?.org_id || r?.team_id)
  let i = r && getAdminUserForProfile(r, e)
  let a = i && e.user && O_(e, i)
  return isPluginOrWidget(t) && (!i || i.userId === e.user?.id) && t.creator.id === e.user?.id ? 8 : t.community_publishers?.accepted.some(t => t.id === e.user?.community_profile_id) ? !n && hasHubFile(t) ? 8 : i ? a ? n ? 7 : 2 : 3 : 2 : t.community_publishers?.pending?.some(t => t.id === e.user?.community_profile_id) ? i && a ? 6 : 1 : i ? a ? 5 : 3 : 0
}
export function $$H34(e, t) {
  if ('user' in e) {
    if (t.primary_user_id === e.user?.id)
      return 4
    if (isOrgOrTeamExport(t)) {
      let r = getAdminUserForProfile(t, e)
      let n = r && e.user && O_(e, r)
      if (r && n)
        return 4
      if (r && !n)
        return 3
    }
  }
  return 0
}
export let $$z17 = e => !0 === e.is_public || e.org != null
export function $$W41(e, t, r, n) {
  return hasMonetizedResourceMetadata(e) || n ? PublisherType.PUBLIC : $$z17(e.roles) ? e.roles.is_public || isResourcePendingPublishing(e) ? PublisherType.PUBLIC : PublisherType.ORG : t != null && r ? PublisherType.ORG : PublisherType.PUBLIC
}
export function $$K31(e, t, r, n) {
  let i = $$en21(t.team_id, r, e, t.parent_org_id || null)
  if (i.length === 0)
    throw new Error('Called getDefaultHubFilePublishingMetadataAuthor when no valid author exists')
  return Z(e, i, r.authedProfilesById, r.user?.id, n)
}
export function $$Y16(e, t) {
  if (!e)
    return !1
  let r = e.author.id
  return isUserAcceptedPublisher(r, t)
}
export function $$$5(e, t) {
  return e.creator.id === t
}
export function $$X6(e, t) {
  if (e) {
    let r = $$ea42(t, e)
    if (r)
      return r
  }
  let r = $$es24(t, e)
  if (r.length === 0)
    throw new Error('Called getDefaultPluginPublishingMetadataAuthor when no valid author exists')
  return Z(e, r, t.authedProfilesById, t.user?.id)
}
export function $$q22(e, t, r) {
  return e?.id && Object.keys(e.versions).length > 0
    ? (function (e, t, r) {
        if ((e.community_publishers?.accepted || []).length > 0) {
          let n = getAcceptedPublisherProfile(e)
          let i = n && t[n.id]
          return i?.team_id
            ? {
                team_id: i.team_id,
              }
            : i?.org_id
              ? {
                  org_id: i.org_id,
                }
              : {
                  user_id: r || e.creator.id,
                }
        }
        let n = t[e.publisher.id]
        return n?.org_id
          ? {
              org_id: n.org_id,
            }
          : n?.team_id
            ? {
                team_id: n.team_id,
              }
            : {
                user_id: n?.primary_user_id || e.creator.id,
              }
      }(e, t, r))
    : null
}
export function $$J23(e) {
  let t
  e?.team_id
    ? t = {
      team_id: e.team_id,
    }
    : e?.org_id && (t = {
      org_id: e.org_id,
    })
  return t
}
function Z(e, t, r, i, a) {
  if (t.length === 0)
    throw new Error('Called getDefaultPublishingMetadataAuthor when no valid author exists')
  let s = $$q22(e, r, i)
  if (s && t.some(e => $$Q30(e, s)))
    return s
  if (a && t.find(e => shallowEqual(e, a)))
    return a
  let o = t.find($$er33)
  if (o)
    return o
  let l = t.find($$ee14)
  return l || t.find($$et28) || t[0]
}
export function $$Q30(e, t) {
  return 'team_id' in e ? 'team_id' in t && e.team_id === t.team_id : 'org_id' in e ? 'org_id' in t && e.org_id === t.org_id : 'user_id' in e && 'user_id' in t && e.user_id === t.user_id
}
let $$ee14 = e => 'org_id' in e
let $$et28 = e => 'team_id' in e
let $$er33 = e => 'user_id' in e
export function $$en21(e, t, r, n) {
  let i = []
  if ((r?.community_publishers?.accepted || []).length > 0) {
    if (!e && !n) {
      return [{
        user_id: t.user.id,
      }]
    }
    let i = r && getAcceptedPublisherProfile(r)
    let a = i ? t.authedProfilesById[i.id] : null
    if (a?.team_id) {
      return hasAdminRoleAccessOnTeam(a?.team_id, t)
        ? [{
            team_id: a.team_id,
          }]
        : []
    }
    if (a?.org_id) {
      return canAdminOrg(a?.org_id, t)
        ? [{
            org_id: a.org_id,
          }]
        : []
    }
  }
  if (t.currentUserOrgId) {
    let r = t.orgById[t.currentUserOrgId]
    if (!r)
      return []
    if (canAdminOrg(t.currentUserOrgId, t) && (i.push({
      org_id: t.currentUserOrgId,
    }), r.cmty_publish_as_user_enabled && i.push({
      user_id: t.user.id,
    })), e && t.teams[e]) {
      if (t.teams[e]?.org_access === 'secret')
        return [];
      (Bg(r.shared_container_setting) ? canAdminOrg(t.currentUserOrgId, t) : hasAdminRoleAccessOnTeam(e, t)) && i.push({
        team_id: e,
      })
    }
    return i
  }
  return e
    ? (hasAdminRoleAccessOnTeam(e, t) && i.push({
        team_id: e,
      }), i.push({
        user_id: t.user.id,
      }), i)
    : [{
        user_id: t.user.id,
      }]
}
export async function $$ei38(e) {
  let {
    data,
    status,
  } = await _$$s.getEditors({
    fileKey: e.key,
  })
  if (status === 200)
    return data.meta
}
export function $$ea42(e, t) {
  if (t.publisher.id && e.user) {
    switch (t.publisher.entity_type) {
      case TeamOrgType.ORG:
      {
        let r = Object.values(e.orgById).find(e => e.community_profile_id === t.publisher.id)
        return {
          org_id: r?.id ?? e.currentUserOrgId ?? '',
        }
      }
      case TeamOrgType.TEAM:
      {
        let r = Object.values(e.teams).find(e => e.community_profile_id === t.publisher.id)
        return {
          team_id: r?.id || '',
        }
      }
      default:
        return {
          user_id: t.creator.id,
        }
    }
  }
  return null
}
export function $$es24(e, t, r = !0) {
  let n = []
  let i = r && t ? $$ea42(e, t) : null
  e.currentUserOrgId && canAdminOrg(e.currentUserOrgId, e) && n.push({
    org_id: e.currentUserOrgId,
  })
  Object.keys(e.teams).forEach((t) => {
    let r = e.teams[t]
    r && r.org_access !== 'secret' && hasAdminRoleAccessOnTeam(t, e) && n.push({
      team_id: t,
    })
  })
  n.push({
    user_id: e.user.id,
  })
  i && !n.some(e => $$Q30(e, i)) && n.unshift(i)
  return n
}
export function $$eo10(e, t) {
  if (!e)
    return !1
  let {
    team_id,
    org_id,
  } = e
  if ('user_id' in t) {
    let r = e.associated_users
    return !!t.user_id && t.user_id === e.primary_user_id || r?.some(e => e.user_id === t.user_id)
  }
  return 'team_id' in t && team_id === t.team_id || 'org_id' in t && org_id === t.org_id
}
export function $$el32(e) {
  let t = debugState.getState()
  return 'user_id' in e ? t.authedUsers.byId[e.user_id] : 'org_id' in e ? t.orgById[e.org_id] : 'team_id' in e ? t.teams[e.team_id] : void 0
}
export function $$ed35(e, t) {
  if ('org_id' in e)
    return t.orgById[e.org_id]?.name ?? null
  if ('team_id' in e)
    return t.teams[e.team_id]?.name ?? null
  {
    let e = t.user && findPublishedProfileForUser(t.user, t.authedProfilesById)
    return e?.public_at && e?.name ? e.name : e?.public_at && e?.profile_handle ? `@${e.profile_handle}` : t.user?.handle || null
  }
}
export function $$ec40(e, t) {
  if ('org_id' in e) {
    let r = t.orgById[e.org_id]
    return r
      ? getI18nString('community.publishing.org_name', {
          org: r.name,
        })
      : getI18nString('general.fallback_org_name')
  }
  if ('team_id' in e) {
    let r = t.teams[e.team_id]
    return r
      ? getI18nString('community.publishing.team_name', {
          team: r.name,
        })
      : getI18nString('general.fallback_team_name')
  }
  {
    let r = t.authedUsers.byId[e.user_id] ?? t.user
    let n = findPublishedProfileForUser(r, t.authedProfilesById)
    return n ? n.name : r?.name || getI18nString('general.fallback_user_name')
  }
}
export function $$eu37(e, t) {
  if ('org_id' in e) {
    let r = t.orgById[e.org_id]
    return r?.community_profile_handle || null
  }
  if ('team_id' in e) {
    let r = t.teams[e.team_id]
    return r?.community_profile_handle || null
  }
  {
    let r = t.authedUsers.byId[e.user_id] ?? t.user
    let n = findPublishedProfileForUser(r, t.authedProfilesById)
    return n ? n.profile_handle : r?.handle || null
  }
}
export let $$ep3 = [IMAGE_TYPES.PNG, IMAGE_TYPES.JPEG]
export function $$e_26(e, t = 'Image') {
  if (!e) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_not_found', {
      filename: t,
    }))
  }
  let r = getValueOrFallback(e.type, IMAGE_TYPES)
  if (!r || !$$ep3.includes(r)) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_wrong_format', {
      filename: t,
    }))
  }
  if (e.size > MAX_COVER_IMAGE_SIZE) {
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_too_large', {
      filename: t,
      max_size: Math.floor(MAX_COVER_IMAGE_SIZE / 1e6),
    }))
  }
  return e.size
}
export function $$eh36(e): Promise<HTMLImageElement> {
  return new Promise((t, r) => {
    let n = new Image()
    n.onload = () => t(n)
    n.onerror = r
    n.src = e
  })
}
let em = new Set()
export async function $$eg1(e, t) {
  if (e.files === null || !e.files[0])
    throw new Error(getI18nString('community.publishing.error_thumbnail_image_not_found_no_filename'))
  t && $$eN39(t)
  let r = e.files[0]
  $$e_26(r, getI18nString('community.publishing.thumbnail_image'))
  let [n, i] = await Promise.all([$$eh36(URL.createObjectURL(r)), readImageBytes(r)])
  em.add(n.src)
  return {
    url: n.src,
    buffer: new Uint8Array(i),
  }
}
export async function $$ef9(e, t, r = en) {
  let n = []
  for (let i of Array.from(e).slice(0, r)) {
    if (t && i.type.startsWith('video/')) {
      !(function (e) {
        let t = e.name
        if (!e) {
          throw new Error(getI18nString('community.publishing.error_thumbnail_image_not_found', {
            filename: t,
          }))
        }
        if (!VIDEO_TYPE_VALUES.includes(e.type)) {
          throw new Error(getI18nString('community.publishing.error_video_wrong_format', {
            filename: t,
          }))
        }
        if (e.size > MAX_PLUGIN_SIZE) {
          throw new Error(getI18nString('community.publishing.error_thumbnail_image_too_large', {
            filename: t,
            max_size: Math.floor(MAX_PLUGIN_SIZE / 1e6),
          }))
        }
      }(i))
      let e = URL.createObjectURL(i)
      let [t, r] = await Promise.all([eC(i), j(e), eb(e, i.name)])
      let s = URL.createObjectURL(new Blob([r]))
      em.add(e)
      em.add(s)
      n.push({
        url: e,
        buffer: t.bytes,
        sha1: t.sha1,
        type: 'video',
        thumbnail_url: s,
        thumbnail_buffer: r,
        thumbnail_sha1: sha1Hex(r),
      })
    }
    else {
      $$e_26(i, getI18nString('community.publishing.carousel_media_image'))
      let [e, t] = await Promise.all([$$eh36(URL.createObjectURL(i)), readImageBytes(i)])
      em.add(e.src)
      let r = new Uint8Array(t)
      n.push({
        url: e.src,
        buffer: r,
        sha1: sha1Hex(r),
        type: 'image',
      })
    }
  }
  return n
}
export async function $$eE15(e, t) {
  return e.files === null || e.files.length === 0 ? Promise.resolve([]) : await $$ef9(e.files, t)
}
export function $$ey44(e) {
  if (!e || !e.length)
    return getI18nString('community.publishing.upload_at_least_one_image')
}
async function eb(e, t) {
  if ((await new Promise((t, r) => {
    let n = document.createElement('video')
    n.preload = 'metadata'
    n.addEventListener('error', (e) => {
      r(e.message)
    })
    n.addEventListener('loadedmetadata', () => {
      t(n.duration)
    })
    n.src = e
    n.currentTime = 0
    n.load()
    setTimeout(() => {
      r('Video load timeout during video length validation')
    }, 1e4)
  })) > GT) {
    throw new Error(getI18nString('community.publishing.error_video_too_long', {
      filename: t,
      max_length: GT,
    }))
  }
}
export function $$eT11(e) {
  let t = []
  let r = []
  let n = []
  e && e.forEach((e, i) => {
    if ('buffer' in e) {
      if (e.type === 'video') {
        if (!e.thumbnail_buffer)
          throw new Error(getI18nString('community.publishing.error_video_thumbnail_not_found'))
        let t = {
          carousel_position: i,
          sha1: sha1Hex(e.buffer),
          bytes: e.buffer,
          video_thumbnail_buffer: e.thumbnail_buffer,
          video_thumbnail_sha1: sha1Hex(e.thumbnail_buffer),
        }
        r.push(t)
      }
      else {
        let r = {
          carousel_position: i,
          sha1: sha1Hex(e.buffer),
        }
        t.push(r)
        n.push(r)
      }
    }
    else if ('id' in e) {
      let t = e.type === 'video'
        ? {
            carousel_position: i,
            sha1: e.sha1,
            video_file_uuid: e.video_file_uuid,
            video_thumbnail_sha1: e.thumbnail_sha1,
          }
        : {
            carousel_position: i,
            sha1: e.sha1,
          }
      n.push(t)
    }
  })
  return {
    uploadImages: t,
    uploadVideos: r,
    allMedia: n,
  }
}
export function $$eI20(e, t) {
  return t && t?.length && e?.length
    ? e.map(async ({
        url: e,
        fields: r,
        carouselPosition: n,
        signedCloudfrontUrl: i,
      }) => {
        let a = t[n]
        if (!a || !('buffer' in a) || !a.buffer)
          return !1
        let c = new FormData()
        Object.entries(r).forEach(([e, t]) => c.append(e, t))
        c.set('content-type', _$$i(a.buffer) ?? 'image/png')
        let u = new Blob([a.buffer])
        try {
          if (i && getFeatureFlags().ext_s3_url_use_figma_domains) {
            let e = await readImageBytes(u)
            await XHR.crossOriginPut(i, e, {
              raw: !0,
              headers: {
                'Content-Type': u.type,
                'x-amz-acl': 'bucket-owner-full-control',
              },
            })
          }
          else {
            let t = new FormData()
            Object.entries(r).forEach(([e, r]) => t.append(e, r))
            t.set('content-type', _$$i(a.buffer) ?? 'image/png')
            t.append('file', u)
            await yr(e, t)
          }
        }
        catch (e) {
          reportError(_$$e.COMMUNITY, e)
          return new Error(getI18nString('community.actions.error_uploading_carousel_image_error', {
            error: resolveMessage(e, e.data?.message || 'unknown error'),
          }))
        }
        return !0
      })
    : []
}
function eS(e, t) {
  let r = new FormData()
  Object.entries(e).forEach(([e, t]) => r.append(e, t))
  r.set('content-type', _$$i(t) ?? 'image/png')
  r.append('file', new Blob([t]))
  return r
}
export async function $$ev18(e, t, r, n) {
  let i
  let {
    uploadImages,
    allMedia,
  } = $$eT11(t)
  if (!e?.length && !uploadImages?.length) {
    return {
      cover_image: {
        cover_image_uploaded: !1,
        signature: null,
      },
      carousel_images: allMedia,
    }
  }
  try {
    i = (await H.setupMultiImageUploadForHubFile({
      file_version_id: r,
      hub_file_id: n,
      images_sha1: uploadImages,
    })).data.meta
  }
  catch (e) {
    reportError(_$$e.COMMUNITY, e)
    return new Error(resolveMessage(e, getI18nString('community.actions.could_not_connect_to_the_server')))
  }
  let l = []
  for (let e of i.carousel_images) {
    let r = t[e.carousel_position]
    r && 'buffer' in r && r.buffer && l.push({
      url: e.url,
      formData: eS(e.fields, r.buffer),
    })
  }
  e?.length && l.push({
    url: i.cover_image.cover_image_upload_url,
    formData: eS(i.cover_image.fields, e),
  })
  try {
    await aB(l)
    return {
      cover_image: {
        cover_image_uploaded: !!e?.length,
        signature: i.cover_image.signature,
      },
      carousel_images: allMedia,
    }
  }
  catch (e) {
    reportError(_$$e.COMMUNITY, e)
    return new Error(resolveMessage(e, getI18nString('community.actions.error_connecting_to_server_to_upload_file_images')))
  }
}
export function $$eA27(e, t) {
  return t ? e.findIndex(e => e.sha1 === t.sha1) : -1
}
function ex(e) {
  em.has(e) && (URL.revokeObjectURL(e), em.$$delete(e))
}
export function $$eN39(e) {
  e && (e.url && ex(e.url), 'type' in e && e.type === 'video' && ex(e.thumbnail_url))
}
async function eC(e) {
  let t = new Uint8Array(await readImageBytes(e))
  return {
    sha1: sha1Hex(t),
    bytes: t,
  }
}
export function $$ew45(e) {
  if (!e.currentUserOrgId)
    return !1
  let t = getCurrentUserOrgUser(e)
  return !(t && t.agreed_to_community_tos_at)
}
export function $$eO0(e, t) {
  return Object.entries(t).reduce((t, [r, n]) => t + Number(e.includes(r) && !!n), 0)
}
function eR(e) {
  return typeof e == 'object' && 'fields' in e && 'imagePath' in e
}
export function $$eL2(e, t, r) {
  if (eR(e)) {
    let {
      fields,
      imagePath,
      signedCloudfrontUrl,
    } = e
    if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) {
      return XHR.crossOriginPut(signedCloudfrontUrl, r, {
        raw: !0,
        headers: {
          'Content-Type': t.type,
          'x-amz-acl': 'bucket-owner-full-control',
        },
      })
    }
    let s = new FormData()
    Object.entries(fields).forEach(([e, t]) => s.append(e, t))
    s.set('Content-Type', t.type)
    s.append('file', t)
    return XHR.crossOriginPost(imagePath, s, {
      raw: !0,
      headers: {
        'Content-Type': t.type,
      },
    })
  }
  return typeof e == 'string'
    ? XHR.crossOriginPut(e, r, {
        raw: !0,
        headers: {
          ...XHR.defaults.headers,
          'Content-Type': t.type,
        },
      })
    : Promise.reject(new Error('Invalid presigned_url'))
}
export function $$eP12(e, t) {
  let r = _$$i(t) ?? 'image/png'
  if (eR(e)) {
    let {
      fields,
      imagePath,
      signedCloudfrontUrl,
    } = e
    if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) {
      return XHR.crossOriginPut(signedCloudfrontUrl, t, {
        raw: !0,
        headers: {
          'Content-Type': r,
          'x-amz-acl': 'bucket-owner-full-control',
        },
      })
    }
    let s = new FormData()
    Object.entries(fields).forEach(([e, t]) => s.append(e, t))
    s.set('Content-Type', r)
    s.append('file', new Blob([t]))
    return XHR.crossOriginPost(imagePath, s, {
      raw: !0,
      headers: {
        'Content-Type': r,
      },
    })
  }
  return typeof e == 'string'
    ? XHR.crossOriginPut(e, t, {
        raw: !0,
        headers: {
          ...XHR.defaults.headers,
          'Content-Type': r,
        },
      })
    : Promise.reject(new Error('Invalid presigned_url'))
}
export async function $$eD7(e, t, r, n, s) {
  let {
    video,
    videoThumbnail,
  } = await _$$v.getVideoUploadUrl({
    resourceType: e,
    id: t,
    sha1: r.sha1,
    thumbnail_sha1: s,
  })
  let c = null
  if (video) {
    let {
      url,
      fields,
      signedCloudfrontUrl,
    } = video
    if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains && getFeatureFlags().ext_s3_url_videos_use_figma_domains) {
      let e = encodeBase64(sha1BytesFromHex(r.sha1))
      c = XHR.crossOriginPut(signedCloudfrontUrl, r.bytes, {
        raw: !0,
        headers: {
          'Content-Type': 'video/mp4',
          'x-amz-acl': 'bucket-owner-full-control',
          'x-amz-checksum-sha1': e,
        },
      }).then(() => fields.key || '')
    }
    else {
      c = uploadVideoToPresignedPost(url, fields, r, 'video/mp4')
    }
  }
  let p = new Blob([n], {
    type: 'image/png',
  })
  let g = $$eL2({
    imagePath: videoThumbnail.url,
    fields: videoThumbnail.fields,
    signedCloudfrontUrl: videoThumbnail.signedCloudfrontUrl,
  }, p, n).catch((e) => {
    throw new Error(getI18nString('community.actions.error_uploading_plugin_video_thumbnail_error', {
      error: resolveMessage(e, e.data?.message || 'unknown error'),
    }))
  })
  let [f] = await Promise.all([c, g])
  return await ek(r.sha1, t, e, f ?? '', s, video?.blobUploadCommitKey || '')
}
async function ek(e, t, r, n, i, a) {
  let s = new URLSearchParams()
  s.append('sha1', e)
  s.append('uploadPath', n)
  s.append('resourceId', t)
  s.append('resourceType', r)
  s.append('blobUploadCommitKey', a)
  return {
    videoFileUuid: (await XHR.post(`/api/upnode/video?${s.toString()}`)).data.meta.video_file_uuid,
    sha1: e,
    videoThumbnailSha1: i,
  }
}
export const $W = $$eO0
export const $x = $$eg1
export const Ac = $$eL2
export const CW = $$ep3
export const Cw = $$M4
export const Dd = $$$5
export const En = $$X6
export const Gf = $$eD7
export const Gl = $$j8
export const Gp = $$ef9
export const Ii = $$eo10
export const Kg = $$eT11
export const M0 = $$eP12
export const MK = $$V13
export const MO = $$ee14
export const N8 = $$eE15
export const PR = $$Y16
export const Q4 = $$z17
export const R1 = $$ev18
export const RB = $$G19
export const Rd = $$eI20
export const Rv = $$en21
export const T$ = $$q22
export const Tn = $$J23
export const UU = $$es24
export const Wd = $$B25
export const Wl = $$e_26
export const Z2 = $$eA27
export const Z7 = $$et28
export const cN = $$U29
export const f7 = $$Q30
export const gO = $$K31
export const j4 = $$el32
export const jr = $$er33
export const kJ = $$H34
export const kN = $$ed35
export const l8 = $$eh36
export const mH = $$eu37
export const mN = $$ei38
export const nK = $$eN39
export const o1 = $$ec40
export const oB = $$W41
export const of = $$ea42
export const ot = $$F43
export const vC = $$ey44
export const xw = $$ew45
