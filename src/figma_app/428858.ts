import { xb } from "../figma_app/465776";
import { FPlanNameType, FOrganizationLevelType } from "../figma_app/191312";
import { s$, i5, LC } from "../figma_app/421473";
let s = {
  [s$.VOICE]: {
    environments: {
      gov: i5.INELIGIBLE
    },
    tiers: {
      [FPlanNameType.ORG]: i5.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: i5.ELIGIBLE,
      [FPlanNameType.PRO]: i5.ELIGIBLE,
      [FPlanNameType.STUDENT]: i5.ELIGIBLE,
      [FPlanNameType.STARTER]: i5.UPSELL
    }
  },
  [s$.DISABLE_WORKSHOP]: {
    environments: {
      gov: i5.ELIGIBLE
    },
    tiers: {
      [FPlanNameType.ORG]: i5.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: i5.ELIGIBLE,
      [FPlanNameType.PRO]: i5.UPSELL,
      [FPlanNameType.STUDENT]: i5.UPSELL,
      [FPlanNameType.STARTER]: i5.UPSELL
    }
  },
  [s$.DISABLE_FIGJAM]: {
    environments: {
      gov: i5.ELIGIBLE
    },
    tiers: {
      [FPlanNameType.ORG]: i5.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: i5.ELIGIBLE,
      [FPlanNameType.PRO]: i5.UPSELL,
      [FPlanNameType.STUDENT]: i5.UPSELL,
      [FPlanNameType.STARTER]: i5.UPSELL
    }
  },
  [s$.DISABLE_AI_FEATURES]: {
    environments: {
      gov: i5.ELIGIBLE
    },
    tiers: {
      [FPlanNameType.ORG]: i5.ELIGIBLE,
      [FPlanNameType.ENTERPRISE]: i5.ELIGIBLE,
      [FPlanNameType.PRO]: i5.ELIGIBLE,
      [FPlanNameType.STUDENT]: i5.ELIGIBLE,
      [FPlanNameType.STARTER]: i5.ELIGIBLE
    }
  }
};
function o(e, t, r = window.INITIAL_OPTIONS.cluster_name) {
  return "gov" === r && s[t].environments.gov ? s[t].environments.gov : e && s[t]?.tiers[e.tier] ? s[t].tiers[e.tier] : i5.INELIGIBLE;
}
function l(e, t, r = window.INITIAL_OPTIONS.cluster_name) {
  if (o(e, t, r) === i5.INELIGIBLE || !e) return LC.DISABLED;
  let i = o(e, t, r);
  switch (t) {
    case s$.VOICE:
      if (i === i5.ELIGIBLE) return e.voiceEnabled ? LC.ENABLED : LC.DISABLED;
      return LC.DISABLED;
    case s$.DISABLE_FIGJAM:
      if (i === i5.ELIGIBLE) return e.figjamDisabledAt ? LC.ENABLED : LC.DISABLED;
      return LC.DISABLED;
    case s$.DISABLE_WORKSHOP:
      if (i === i5.ELIGIBLE) return e.workshopEnabled ? LC.DISABLED : LC.ENABLED;
      return LC.DISABLED;
    case s$.DISABLE_AI_FEATURES:
      if (i === i5.ELIGIBLE) return e.aiFeaturesEnabled ? LC.ENABLED : LC.DISABLED;
      return LC.DISABLED;
    default:
      xb(t, "Unknown plan feature");
  }
}
export function $$d2(e) {
  return {
    ...e,
    voice: {
      supports: o(e, s$.VOICE),
      enabled: l(e, s$.VOICE)
    },
    disable_figjam: {
      supports: o(e, s$.DISABLE_FIGJAM),
      enabled: l(e, s$.DISABLE_FIGJAM)
    },
    disable_workshop: {
      supports: o(e, s$.DISABLE_WORKSHOP),
      enabled: l(e, s$.DISABLE_WORKSHOP)
    },
    disable_ai_features: {
      supports: o(e, s$.DISABLE_AI_FEATURES),
      enabled: l(e, s$.DISABLE_AI_FEATURES)
    }
  };
}
export function $$c3(e, t) {
  switch (e) {
    case FOrganizationLevelType.TEAM:
      return t.team;
    case FOrganizationLevelType.ORG:
      return t.org;
    default:
      xb(e);
  }
}
export function $$u1(e, t) {
  return {
    ...$$c3(e, t),
    planType: e
  };
}
export function $$p0(e) {
  if (!e || !e.includes("::")) return null;
  let [t, r] = e.split("::");
  return t && r && Object.values(FOrganizationLevelType).includes(t) ? {
    type: t,
    parentId: r
  } : null;
}
export function $$_4(e) {
  return ![FPlanNameType.STARTER, FPlanNameType.STUDENT].includes(e);
}
export const Do = $$p0;
export const Ef = $$u1;
export const HT = $$d2;
export const RB = $$c3;
export const e0 = $$_4;