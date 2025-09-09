import { vf, mZ, wF, Mj, WD } from "../figma_app/808294";
import { A } from "../905/17894";
import { Lz } from "../905/497882";
import { AC } from "../figma_app/777551";
import { Kc, Fh } from "../905/448740";
import { mr } from "../figma_app/45218";
import { PN } from "../905/54385";
import { SourceType } from "../figma_app/175992";
export let $$u1 = {
  displayName: "PriceField",
  fetchInitialValue: ({
    existingResourceContent: e,
    localExtension: t
  }) => {
    let i = e ? vf(e.monetized_resource_metadata) ?? 0 : 0;
    if (!((!e || mr(e)) && Kc(t, e)) || i) return i;
  },
  validate: ({
    authorField: e,
    existingResourceContent: t,
    isSubscriptionField: i,
    localExtension: r
  }, c) => {
    if (0 === c) {
      if ((!t || mr(t)) && Kc(r, t)) return [{
        key: "FREEMIUM_EXTENSION_MUST_BE_PAID",
        data: {}
      }];
      if (!t || g(t)) return;
      return [{
        key: "PAID_RESOURCE_ALREADY_PUBLISHED",
        data: {
          hubFile: t
        }
      }];
    }
    let u = [];
    if (!c) return [{
      key: "PRICE_EMPTY",
      data: {}
    }];
    c < mZ && u.push({
      key: "PRICE_TOO_LOW",
      data: {
        currentValue: c,
        minValue: mZ
      }
    });
    c > wF && u.push({
      key: "PRICE_TOO_HIGH",
      data: {
        currentValue: c,
        maxValue: wF
      }
    });
    Number.isInteger(c) || u.push({
      key: "PRICE_NOT_WHOLE_NUMBER",
      data: {
        currentValue: c
      }
    });
    let p = Lz(e, void 0);
    !p || "user_id" in p || u.push({
      key: "AUTHOR_MUST_BE_USER",
      data: {
        author: p
      }
    });
    u.push(...function ({
      existingResourceContent: e,
      localExtension: t,
      isSubscriptionField: i,
      currentValue: r
    }) {
      if (!e || !mr(e)) return [];
      let c = [];
      if (!AC(e) && !Kc(t, e)) {
        let t = e.monetized_resource_metadata?.price;
        i && Lz(i, void 0) && t && Mj(t / 100, r) && c.push({
          key: "PRICE_INCREASE_OUT_OF_RANGE",
          data: {}
        });
        !e.monetized_resource_metadata?.can_increase_price && t && WD(t / 100, r) && c.push({
          key: "PRICE_CANNOT_BE_INCREASED",
          data: {}
        });
      }
      t && !t.manifest.permissions?.includes("payments") && e.third_party_m10n_status === PN.FLAGGED && c.push({
        key: "FREEMIUM_REQUIRED_FOR_MIGRATION",
        data: {}
      });
      return c;
    }({
      existingResourceContent: t,
      localExtension: r,
      isSubscriptionField: i,
      currentValue: c
    }));
    return u;
  },
  canSet: e => {
    let {
      user,
      existingResourceContent,
      publishRoleField,
      localExtension
    } = e;
    return publishRoleField && (!existingResourceContent || mr(existingResourceContent)) ? 0 === $$m3({
      user,
      publishRoleField,
      existingResourceContent,
      localExtension
    }).length : 0 === $$p2(e).length;
  }
};
export function $$p2(e) {
  let t = [];
  let {
    figFile,
    user,
    existingResourceContent,
    org
  } = e;
  figFile ? figFile.isOwner || t.push({
    key: "USER_IS_NOT_FILE_OWNER",
    data: {
      figFile
    }
  }) : t.push({
    key: "UNABLE_TO_IDENTIFY_FILE_OWNER",
    data: {
      figFile
    }
  });
  user.can_sell_on_community || t.push({
    key: "USER_CANNOT_SELL_ON_COMMUNITY",
    data: {
      user
    }
  });
  user.cmty_seller_capabilities?.includes(SourceType.FILE) || t.push({
    key: "USER_CANNOT_SELL_RESOURCE",
    data: {
      user
    }
  });
  existingResourceContent && g(existingResourceContent) && t.push({
    key: "FREE_RESOURCE_ALREADY_PUBLISHED",
    data: {
      resourceContent: existingResourceContent
    }
  });
  !org || org.cmty_publish_as_user_enabled || t.push({
    key: "USER_AUTHOR_DISABLED_BY_ORG",
    data: {
      org
    }
  });
  return t;
}
export function $$m3(e) {
  let t = [];
  let {
    user,
    publishRoleField,
    existingResourceContent,
    localExtension
  } = e;
  publishRoleField && !Lz(publishRoleField, void 0)?.is_public && t.push({
    key: "CANNOT_SELL_PRIVATE_EXTENSION",
    data: {
      existingResourceContent
    }
  });
  user.can_sell_on_community || t.push({
    key: "USER_CANNOT_SELL_ON_COMMUNITY",
    data: {
      user
    }
  });
  user.cmty_seller_capabilities?.includes(SourceType.EXTENSION) || t.push({
    key: "USER_CANNOT_SELL_RESOURCE",
    data: {
      user
    }
  });
  existingResourceContent && g(existingResourceContent) && !Fh(existingResourceContent) && !$$_4(localExtension, existingResourceContent) && t.push({
    key: "FREE_RESOURCE_ALREADY_PUBLISHED",
    data: {
      resourceContent: existingResourceContent
    }
  });
  return t;
}
export function $$h5(e) {
  return e.currentValue !== A && 0 !== e.currentValue;
}
function g(e) {
  return !e.monetized_resource_metadata?.price;
}
export function $$f0(e) {
  return !!e?.monetized_resource_metadata?.price;
}
export function $$_4(e, t) {
  return Kc(e, t) || t?.third_party_m10n_status === PN.FLAGGED;
}
export const LG = $$f0;
export const WN = $$u1;
export const Z3 = $$p2;
export const Zj = $$m3;
export const bx = $$_4;
export const wC = $$h5;