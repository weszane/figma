import { Oc } from "../figma_app/552876";
let i = {
  defaultTypography: {
    lineHeight: "xno9bf3",
    fontSize: "x17akokd",
    fontWeight: "x1yuz8eb",
    letterSpacing: "xqp8s7e",
    $$css: !0
  },
  figmakeTypography: {
    lineHeight: "x1fc57z9",
    fontSize: "x1lh6uom",
    fontWeight: "x1yuz8eb",
    letterSpacing: "xuf8qxk",
    $$css: !0
  },
  userMessageTypography: {
    lineHeight: "xno9bf3",
    fontSize: "x17akokd",
    fontWeight: "x1yuz8eb",
    letterSpacing: "xqp8s7e",
    $$css: !0
  },
  figmakeUserMessageTypography: {
    lineHeight: "x17fgdl5",
    fontSize: "x1lh6uom",
    fontWeight: "x1yuz8eb",
    letterSpacing: "xuf8qxk",
    $$css: !0
  },
  artifactTypography: {
    color: "x1n0bwc9",
    lineHeight: "xno9bf3",
    fontSize: "x17akokd",
    fontWeight: "x1yuz8eb",
    letterSpacing: "xqp8s7e",
    $$css: !0
  },
  figmakeArtifactTypography: {
    color: "x1n0bwc9",
    lineHeight: "x1o2sk6j",
    fontSize: "x1lh6uom",
    fontWeight: "x1yuz8eb",
    letterSpacing: "xuf8qxk",
    $$css: !0
  },
  artifactActiveTypography: {
    color: "x1ptu4o3",
    lineHeight: "x14kxzw3",
    fontSize: "xiqqdae",
    fontWeight: "x6xwguf",
    letterSpacing: "xqp8s7e",
    $$css: !0
  },
  figmakeArtifactActiveTypography: {
    color: "x1ptu4o3",
    lineHeight: "x1o2sk6j",
    fontSize: "x1lh6uom",
    fontWeight: "x6xwguf",
    letterSpacing: "xr8fz4w",
    $$css: !0
  }
};
export function $$s0() {
  let e = Oc();
  let t = e ? i.figmakeUserMessageTypography : i.userMessageTypography;
  let n = e ? i.figmakeArtifactTypography : i.artifactTypography;
  return {
    userMessageTypographyStyle: t,
    artifactActiveTypographyStyle: e ? i.figmakeArtifactActiveTypography : i.artifactActiveTypography,
    artifactTypographyStyle: n,
    defaultTypographyStyle: e ? i.figmakeTypography : i.defaultTypography
  };
}
export const L = $$s0;