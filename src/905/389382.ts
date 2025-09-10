import { memo } from "react";
import { ServiceCategories as _$$e } from "src/905/165054";
import { buildUploadUrl } from "src/figma_app/169182";
import { reportError } from "src/905/11";
import { getI18nString } from "src/905/303541";
import { FPlanNameType, FProductAccessType } from "src/figma_app/191312";
import { getFeatureFlags } from "src/905/601108";
import { ProductAccessTypeEnum } from "src/905/513035";
import { z } from "src/905/510753";
import { a as _$$a } from "src/905/693578";
import { O as _$$O } from "src/905/501876";
import { l as _$$l } from "src/905/840533";
import { Z } from "src/905/236383";
import { e as _$$e2 } from "src/905/693478";
import { $ } from "src/905/302575";
import { a as _$$a2 } from "src/905/676930";
import { V } from "src/905/761565";
import { T as _$$T } from "src/905/514205";
import { o as _$$o } from "src/905/486078";
import { D as _$$D } from "src/905/711533";
import { jsx } from "react/jsx-runtime";
let c = {
  productNameShort: () => getI18nString("general.figma_buzz"),
  productName: () => getI18nString("general.figma_buzz"),
  minimumBundle: getFeatureFlags().billing_enable_content_seat ? ProductAccessTypeEnum.CONTENT : null
};
let m = {
  productNameShort: () => getI18nString("general.figma_design_short"),
  productName: () => getI18nString("general.figma_design"),
  minimumBundle: ProductAccessTypeEnum.EXPERT,
  seatDescriptionConfig: {
    shouldShow: () => !0,
    icon16: z,
    icon24: _$$a
  }
};
let h = {
  productIcon: z,
  productBackgroundImgHash: {
    dark: "4db855791a85e159e85daecbafe7310368a7a925",
    light: "4eff99bc26e56fa3fc3a67ad414821f0cdf86b25"
  },
  editorTheme: "design",
  translations: {
    defaultRequestModalTitle: () => getI18nString("request_upgrade.header.design")
  }
};
let _ = {
  productNameShort: () => getI18nString("general.dev_mode"),
  productName: () => getI18nString("general.dev_mode"),
  minimumBundle: ProductAccessTypeEnum.DEVELOPER,
  seatDescriptionConfig: {
    shouldShow: () => !0,
    icon16: _$$O,
    icon24: _$$l
  }
};
let A = {
  productIcon: _$$O,
  productBackgroundImgHash: {
    dark: "5af365b6469aeba5827058a5bc89f8cfd231a755",
    light: "54dac14e109b2044abd568aa9c6b0afbdfc3c7ae"
  },
  editorTheme: "dev-handoff",
  translations: {
    defaultRequestModalTitle: () => getI18nString("request_upgrade.header.dev_mode")
  }
};
let v = {
  productNameShort: () => getI18nString("general.figma_rev"),
  productName: () => getI18nString("general.figma_rev"),
  productNameBeta: getFeatureFlags().ai_ga ? void 0 : () => getI18nString("general.figma_make_beta"),
  minimumBundle: ProductAccessTypeEnum.EXPERT,
  seatDescriptionConfig: {
    shouldShow: e => function (e) {
      return e === FPlanNameType.STARTER ? !!getFeatureFlags().bake_starter_limit : e !== FPlanNameType.STUDENT && (e === FPlanNameType.PRO || e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE) && !!getFeatureFlags().bake_full_seat_description;
    }(e),
    icon16: Z,
    icon24: _$$e2
  }
};
let I = {
  productIcon: Z,
  productBackgroundImgHash: {
    dark: "3f0db48feeade5b862bd21e603c5e7541decff24",
    light: "14e8447dce093f4cbab8fe38656cc547d3f6117a"
  },
  editorTheme: "bake-filebrowser",
  translations: {
    defaultRequestModalTitle: () => getI18nString("request_upgrade.header.figmake")
  }
};
let w = {
  productNameShort: () => getI18nString("general.sites"),
  productName: () => getI18nString("general.figma_sites"),
  productNameBeta: () => getI18nString("general.figma_sites_beta"),
  minimumBundle: ProductAccessTypeEnum.EXPERT,
  seatDescriptionConfig: {
    shouldShow: e => V(e),
    icon16: $,
    icon24: _$$a2
  }
};
let C = {
  productIcon: $,
  productBackgroundImgHash: {
    dark: "e5a91d8610b49b875188d308ba52333c47a3d958",
    light: "d9eaa9441b01bcd9d85dcef7f5b13b6bfa86829b"
  },
  editorTheme: "seascape",
  translations: {
    defaultRequestModalTitle: () => getI18nString("request_upgrade.header.sites")
  }
};
let R = {
  productNameShort: () => getI18nString("general.figma_slides_short"),
  productName: () => getI18nString("general.figma_slides"),
  minimumBundle: ProductAccessTypeEnum.COLLABORATOR,
  seatDescriptionConfig: {
    shouldShow: () => !0,
    icon16: _$$T,
    icon24: _$$o
  }
};
let N = {
  productIcon: _$$T,
  productBackgroundImgHash: {
    dark: "47baaec1438d32e82b627ac1bcfb956aee11865b",
    light: "b6299082220ada26c36037e0eaebc5c3b0ec2636"
  },
  editorTheme: "piper",
  translations: {
    defaultRequestModalTitle: () => getI18nString("request_upgrade.header.slides")
  }
};
let D = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M18 4a2 2 0 0 1 2 2v6.172l-.01.197a2 2 0 0 1-.576 1.217l-5.828 5.828-.146.133a2 2 0 0 1-1.268.453H6l-.204-.01A2 2 0 0 1 4 18V6a2 2 0 0 1 2-2zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6v-5a2 2 0 0 1 2-2h5V6a1 1 0 0 0-1-1zm8 8a1 1 0 0 0-1 1v4.586L18.586 13z"
    })
  });
});
let L = {
  productNameShort: () => getI18nString("general.figjam"),
  productName: () => getI18nString("general.figjam"),
  minimumBundle: ProductAccessTypeEnum.COLLABORATOR,
  seatDescriptionConfig: {
    shouldShow: () => !0,
    icon16: _$$D,
    icon24: D
  }
};
let F = {
  productIcon: _$$D,
  productBackgroundImgHash: {
    dark: "6dfc9076d0bffcd6b1407e02c166179d8d3b658e",
    light: "c929588c2d64daf221de7361f859c2fd6b0c7e7e"
  },
  editorTheme: "whiteboard",
  translations: {
    defaultRequestModalTitle: () => getI18nString("request_upgrade.header.figjam")
  }
};
let M = {
  [FProductAccessType.DESIGN]: m,
  [FProductAccessType.WHITEBOARD]: L,
  [FProductAccessType.DEV_MODE]: _,
  [FProductAccessType.SLIDES]: R,
  [FProductAccessType.SITES]: w,
  [FProductAccessType.FIGMAKE]: v,
  [FProductAccessType.COOPER]: c
};
let j = {
  [FProductAccessType.DESIGN]: h,
  [FProductAccessType.WHITEBOARD]: F,
  [FProductAccessType.DEV_MODE]: A,
  [FProductAccessType.SLIDES]: N,
  [FProductAccessType.SITES]: C,
  [FProductAccessType.FIGMAKE]: I,
  [FProductAccessType.COOPER]: null
};
function U(e) {
  return M[e] || (reportError(_$$e.MONETIZATION_EXPANSION, Error(`Error getting LicenseTypeConfig for license type '${e}'`), {
    extra: {
      licenseType: e
    }
  }), m);
}
function B(e, t) {
  let i = j[e];
  return void 0 === i ? (reportError(_$$e.MONETIZATION_EXPANSION, Error(`Error getting LicenseTypeUpgradeConfig for license type '${e}'`), {
    extra: {
      licenseType: e
    }
  }), h) : t ? i ?? h : i;
}
export function $$V8(e, t) {
  return U(e).seatDescriptionConfig?.shouldShow(t) ?? !1;
}
export function $$G5(e) {
  return U(e).productName();
}
export function $$z6(e) {
  let t = U(e);
  return t.productNameBeta ? t.productNameBeta() : t.productName();
}
export function $$H2(e) {
  return U(e).minimumBundle;
}
export function $$W4(e) {
  return B(e, !0).productIcon;
}
export function $$K3(e, t = "light") {
  let i = B(e, !0).productBackgroundImgHash[t];
  return buildUploadUrl(i);
}
export function $$Y1(e) {
  return B(e, !0).editorTheme;
}
export function $$q7(e, t = "16") {
  let i = U(e);
  return i.seatDescriptionConfig ? i.seatDescriptionConfig[`icon${t}`] : null;
}
export function $$$0(e) {
  return B(e, !1)?.translations.defaultRequestModalTitle() || getI18nString("request_upgrade.header.license_type", {
    licenseType: $$G5(e)
  });
}
export const A7 = $$$0;
export const ju = $$Y1;
export const F2 = $$H2;
export const E2 = $$K3;
export const FN = $$W4;
export const VG = $$G5;
export const sC = $$z6;
export const JW = $$q7;
export const lG = $$V8;
