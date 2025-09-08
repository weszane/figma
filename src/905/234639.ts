import { PresentationValidationStatus } from "../figma_app/763686";
import r from "../vendor/336892";
import { debugState } from "../905/407919";
import { Sb } from "../905/359847";
import { c_ } from "../905/497882";
import { V } from "../905/513628";
import { Z } from "../905/909123";
import { aP } from "../figma_app/530167";
import { Ri } from "../figma_app/49598";
import { HZ, Oo } from "../905/926523";
import { Yp } from "../figma_app/740025";
import { R1, Z2 } from "../figma_app/599979";
import { M4 } from "../905/713695";
import { PN } from "../905/54385";
import { H } from "../905/473998";
var a = r;
export async function $$y2({
  carouselMedia: e,
  newVersionId: t,
  createNewVersionOnSubmit: i,
  existingHubFile: n
}) {
  let {
    thumbnailMedium,
    allMedia
  } = c_(e).currentValue;
  let o = thumbnailMedium && "buffer" in thumbnailMedium ? thumbnailMedium.buffer : null;
  let {
    cover_image: {
      cover_image_uploaded,
      signature
    },
    carousel_images
  } = await R1(o, thumbnailMedium ? [thumbnailMedium, ...a()(allMedia, thumbnailMedium)] : [...allMedia], t, i ? void 0 : n.id);
  let p = Z2(carousel_images, thumbnailMedium);
  return {
    coverImageUploaded: cover_image_uploaded,
    coverImageSignature: signature,
    carouselImages: carousel_images,
    carouselThumbnailPosition: p
  };
}
export function $$b0(e, t) {
  debugState.dispatch(Sb({
    hubFiles: [e],
    src: t
  }));
}
async function v({
  canvasThumbnailPromise: e,
  carouselMedia: t,
  name: i,
  description: n,
  category: r,
  tagsV1: a,
  tagsV2: s,
  viewerMode: o,
  scalingMode: c,
  cocreators: u,
  price: p,
  supportContact: m,
  commentsSetting: g,
  coverImageUploaded: f,
  coverImageSignature: _,
  carouselImages: A,
  carouselThumbnailPosition: y
}) {
  let b = c_(t).currentValue.thumbnailMedium;
  return {
    name: Yp(c_(i).currentValue),
    description: Yp(c_(n).currentValue),
    category_id: (r && c_(r).currentValue?.id) ?? null,
    tags: [...c_(a).currentValue],
    tags_v2: (s && c_(s).currentValue.map(e => e.text)) ?? [],
    viewer_mode: c_(o).currentValue,
    scaling_mode: (c && c_(c).currentValue) ?? null,
    creator_policy: "",
    publisher_ids: c_(u).currentValue.map(e => e.id),
    price: c_(p).currentValue,
    support_contact: c_(m).currentValue,
    carousel_images: A,
    cover_image_carousel_image: A[y],
    signature: _,
    cover_image_uploaded: f,
    has_custom_uploaded_thumbnail: !!b && b.sha1 !== (e && (await V(e, c_(o).currentValue)))?.sha1,
    comments_setting: c_(g).currentValue
  };
}
export class $$I5 extends Error {
  constructor(e, t) {
    super(e instanceof Error ? e.message : "Error finalizing hub file version");
    this.rawError = e;
    this.requestPayload = t;
  }
}
export async function $$E1(e) {
  let {
    author,
    newVersionId,
    figFilePrototypeStatus,
    tosAccepted,
    price
  } = e;
  let o = c_(author).currentValue;
  let d = {
    ...(await v(e)),
    file_version_id: newVersionId,
    valid_prototype: figFilePrototypeStatus === PresentationValidationStatus.VALID,
    author_org_id: o && "org_id" in o ? o.org_id : "",
    author_team_id: o && "team_id" in o ? o.team_id : "",
    is_paid: (c_(price).currentValue ?? 0) > 0,
    agreed_to_tos: c_(tosAccepted).currentValue
  };
  try {
    let {
      data: {
        meta: {
          hub_file,
          acting_profile,
          profile_created
        }
      }
    } = await H.publishHubFile(d);
    return {
      hubFile: hub_file,
      actingProfile: acting_profile,
      profileCreated: profile_created
    };
  } catch (e) {
    throw new $$I5(e, d);
  }
}
export async function $$x6(e) {
  let t = await v(e);
  let {
    existingHubFile
  } = e;
  try {
    let {
      data: {
        meta
      }
    } = await H.updateHubFile(existingHubFile.id, t);
    return {
      hubFile: meta
    };
  } catch (e) {
    throw new $$I5(e, t);
  }
}
export async function $$S3({
  hubFile: e,
  figFile: t,
  actingProfile: i,
  profileCreated: n,
  profileHandle: r,
  updateSource: a
}) {
  $$b0(e, a);
  t && debugState.dispatch(Ri({
    hubFileId: e.id,
    fileKey: t.key
  }));
  i && (n && (debugState.dispatch(HZ({
    ...i,
    profile_created: n
  })), await new Promise(e => {
    debugState.dispatch(aP({
      profileHandle: c_(r).currentValue,
      profileId: i.id,
      onSuccess: e
    }));
  })), debugState.dispatch(Oo(i)));
}
export async function $$w4(e) {
  let t = 0;
  for (let i of [200, 300, 500, 1e3, 1e3, 2e3, 5e3, 1e4, 1e4]) {
    if (t >= 3e4) break;
    await new Promise(e => setTimeout(e, i));
    t += i;
    let {
      data: {
        meta: {
          publishing_status,
          third_party_m10n_status
        }
      }
    } = await H.getStatuses({
      id: e
    });
    if (third_party_m10n_status !== PN.PENDING_AUTO_VALIDATION) return publishing_status;
  }
}
export function $$C8(e) {
  var t;
  t = Z({
    apiResourceType: "file",
    id: e.id
  });
  null !== M4.getCachedData(t) && M4.fetch(t, {
    policy: "networkOnly"
  });
}
function T(e) {
  return `${e.id}_${e.current_hub_file_version_id}`;
}
export function $$k7({
  figFile: e,
  existingHubFile: t,
  createNewVersionOnSubmit: i
}) {
  return i ? t ? `new_from_${e.key}_based_on_${T(t)}` : `new_from_${e.key}` : `update_${T(t)}`;
}
export const RN = $$b0;
export const Rr = $$E1;
export const S3 = $$y2;
export const SK = $$S3;
export const Ur = $$w4;
export const YI = $$I5;
export const fY = $$x6;
export const fe = $$k7;
export const nz = $$C8;