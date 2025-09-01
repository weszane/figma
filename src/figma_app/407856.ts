import { buildStaticUrl, buildUploadUrl } from "../figma_app/169182";
import { t as _$$t } from "../905/303541";
export let $$a4 = "s-heart";
function s(e) {
  return [{
    type: "STAMP",
    name: "s-thumbsUp",
    image: e.thumbsUp,
    position: 2,
    label: "Thumbs up",
    i18nName: () => _$$t("fullscreen.stamp_wheel.thumbs_up")
  }, {
    type: "STAMP",
    name: "s-plusOne",
    offset: .72,
    image: e.plusOne,
    position: 1,
    label: "+1",
    i18nName: () => _$$t("fullscreen.stamp_wheel.plus_one")
  }, {
    type: "STAMP",
    name: "s-star",
    image: e.star,
    position: 8,
    label: "Star",
    i18nName: () => _$$t("fullscreen.stamp_wheel.star")
  }, {
    type: "STAMP",
    name: "s-question",
    image: e.question,
    position: 7,
    label: "Question",
    i18nName: () => _$$t("fullscreen.stamp_wheel.question")
  }, {
    type: "STAMP",
    name: "s-thumbsDown",
    image: e.thumbsDown,
    position: 6,
    label: "Thumbs down",
    i18nName: () => _$$t("fullscreen.stamp_wheel.thumbs_down")
  }, {
    type: "STAMP",
    name: "s-dot",
    imageFunc: e.dots,
    position: 5,
    label: "Dot",
    i18nName: () => _$$t("fullscreen.stamp_wheel.dot")
  }, {
    type: "STAMP",
    name: "s-profile",
    offset: .73,
    imageFunc: e.profile,
    position: 4,
    label: "Profile",
    i18nName: () => _$$t("fullscreen.stamp_wheel.profile")
  }, {
    type: "STAMP",
    name: "s-heart",
    image: e.heart,
    position: 3,
    label: "Heart",
    i18nName: () => _$$t("fullscreen.stamp_wheel.heart")
  }];
}
export function $$o3(e) {
  return s({
    heart: "af824a5efc8f5738e597b114e77ec693dc694783",
    thumbsDown: "aa22611268cdcc5c6a89b0fbfdb1acbf6d98378d",
    star: "3b83c9551d5d60e27ad4ca2f67cd10358a154401",
    thumbsUp: "933574dba7004721d4f0fe0ba0f4d5069e106383",
    question: "c32fac5da104a7d1360acecfcf92d4df9cb5e51c",
    profile: () => e,
    dots: e => buildStaticUrl(`figjam_dots/${e}.png`),
    plusOne: "f54909c2377f2c9da84382594e98db7b2a5c5f8f"
  });
}
export function $$l0(e) {
  let t = $$o3(null).find(t => t.label === e);
  return t ? t.i18nName : () => _$$t("fullscreen.accessibility_dom.unlabelled_stamp");
}
let d = {
  F24E1E: "f5c62908951d5597fd78d43b466a590616ba2693",
  "0FA958": "a80c699432955f63c3613761744dfb61758780ae",
  FFC700: "a9d0704b01ae94a42c00e495f58e169966099333",
  "5551FF": "87a816dc22c9fe975e6cb531cc7f2b47ff66f26e",
  D27C2C: "a7115640741f347d4fec9f4f82bf88465e6081f4",
  848484: "1775b53401dbbb5bfb48ae9b00b650952e5c8d67",
  EBEBEB: "c3312ab90b95e13d91b5a826628708663e502ddc",
  667799: "27be94d8a31dc67f2fdf0bc0ed1cd2c7d6c48cba",
  "007BE5": "4f73e22fc8d7e9d55bfb24dcc7b7d6201ca51fb3",
  "9747FF": "d337617455a562b3a0859d87fac6d82f86d8d729",
  FF24BD: "19e369b3f6531ed8571b6fed7db7e2fe7b4d4517",
  F24822: "4c9a2a1f92768b87946ec3a4d9000f0fe99d760c",
  FFCD29: "13a81b40823bfed9e05f4b0eedab902453bf47b3",
  "14AE5C": "fd086d9788aa1e5a4dd7c10436a59d5d51c6c063"
};
let c = {
  "s-heart": "421d20c98db007d377890189b093545f16498acc",
  "s-thumbsDown": "0bda50cfaecc87b58d0a78e8a8768b55a9f67c03",
  "s-star": "cbc8d70c16c1fcf0d8690429564495cce3ab11c0",
  "s-thumbsUp": "5e39a5f28101ed8ca9d9e38275066867c47294e9",
  "s-question": "75a4d8d5c7e5fc18ad3f76ce2c1166b68f9ec046",
  "s-plusOne": "0d4a582f5dd156228c1443c9fd19a331ff8f087b"
};
export function $$u2(e) {
  return s({
    heart: c["s-heart"],
    thumbsDown: c["s-thumbsDown"],
    star: c["s-star"],
    thumbsUp: c["s-thumbsUp"],
    question: c["s-question"],
    profile: () => e,
    dots: e => {
      let t = d[e] || d["667799"];
      return buildUploadUrl(t);
    },
    plusOne: c["s-plusOne"]
  });
}
let $$p5 = buildUploadUrl("2b2029d1eabf48358e208427103a2023435751dc");
let $$_1 = s({
  heart: "cdb352553f6650801d744ab73fd416222f120bd6",
  thumbsDown: "1b9c978d009d03d1abececfe15edf721a7c14374",
  star: "a9c2008e62c6d5a4421a22cd960b5ca54fdbe93f",
  thumbsUp: "d7c56a0ef07da63ed9f641ab04637704a4744c74",
  question: "4fe56356e345e558e669ff6e369f0265ee0b7fe7",
  profile: () => buildUploadUrl("cb417fb549d06a2fb42e182cddd2b94b1996b768"),
  dots: () => $$p5,
  plusOne: "96363e23778476978d264bfcbd286bc0cbafe6cd"
});
export const TI = $$l0;
export const WJ = $$_1;
export const hf = $$u2;
export const lJ = $$o3;
export const sn = $$a4;
export const tR = $$p5;