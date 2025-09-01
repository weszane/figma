let $$n3 = "FIGMA_PROPERTIES";
let $$r7 = "WEB";
let $$a6 = "IOS";
let $$s2 = "ANDROID";
let $$o0 = "CSSBUILDER";
let $$l1 = "IOS_UIKIT";
let $$d4 = "ANDROID_XML";
let $$c5 = {
  [$$r7]: {
    type: "first-party",
    id: $$r7
  },
  [$$a6]: {
    type: "first-party",
    id: $$a6
  },
  [$$l1]: {
    type: "first-party",
    id: $$l1
  },
  [$$s2]: {
    type: "first-party",
    id: $$s2
  },
  [$$d4]: {
    type: "first-party",
    id: $$d4
  }
};
export function $$u8(e) {
  switch (e) {
    case $$r7:
    case $$o0:
      return "React";
    case $$a6:
    case $$l1:
      return "SwiftUI";
    case $$s2:
    case $$d4:
      return "Compose";
    default:
      return;
  }
}
export const A0 = $$o0;
export const Ap = $$l1;
export const LK = $$s2;
export const MT = $$n3;
export const NU = $$d4;
export const S8 = $$c5;
export const p = $$a6;
export const uz = $$r7;
export const yT = $$u8;