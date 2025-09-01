import { buildUploadUrl } from "../figma_app/169182";
import { t } from "../905/303541";
let a = {
  scaleFactor: 2,
  imageSize: {
    x: 3792,
    y: 2304
  },
  offset: {
    x: 192,
    y: 28
  },
  deviceName: 'MacBook Pro 14"',
  getI18nDeviceName: () => t("presets.mac_book_pro_14"),
  framePresetSize: {
    x: 1512,
    y: 982
  }
};
let s = {
  scaleFactor: 2,
  imageSize: {
    x: 4220,
    y: 2574
  },
  offset: {
    x: 191,
    y: 28
  },
  deviceName: 'MacBook Pro 16"',
  getI18nDeviceName: () => t("presets.mac_book_pro_16"),
  framePresetSize: {
    x: 1728,
    y: 1117
  }
};
let o = {
  scaleFactor: 2,
  imageSize: {
    x: 3208,
    y: 1944
  },
  offset: {
    x: 163,
    y: 33
  },
  deviceName: "MacBook Air",
  getI18nDeviceName: () => t("presets.mac_book_air_m2"),
  framePresetSize: {
    x: 1280,
    y: 832
  }
};
let $$l0 = [{
  presetIdentifier: "APPLE_MACBOOK_AIR_M2_SILVER",
  url: buildUploadUrl("354fac4a93039a59659f59101c0e219db8f931dd"),
  thumbnailUrl: buildUploadUrl("b98d49f9e763a176d6aa7eb5919abf609805c152"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.mac_book_air_silver"),
  ...o
}, {
  presetIdentifier: "APPLE_MACBOOK_AIR_M2_SPACE_GREY",
  url: buildUploadUrl("191fcdf7d3727da19ed591282edb2f7e41c660ff"),
  thumbnailUrl: buildUploadUrl("e02a222394c86013a0675102443a71f662209f6b"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.mac_book_air_space_grey"),
  ...o
}, {
  presetIdentifier: "APPLE_MACBOOK_AIR_M2_STARLIGHT",
  url: buildUploadUrl("1cb33a27629dbd656eada49095c5ae4ca43c4227"),
  thumbnailUrl: buildUploadUrl("6f492a8ea701f1ceaf3d426d14353006fe229e4e"),
  styleName: "Starlight",
  getI18nStyleName: () => t("presets.styles.mac_book_air_starlight"),
  ...o
}, {
  presetIdentifier: "APPLE_MACBOOK_AIR_M2_MIDNIGHT",
  url: buildUploadUrl("29887044f61a2c3f7aa9b49785916134303f4857"),
  thumbnailUrl: buildUploadUrl("0308477cf8659fd2962b50778c2fc3f7d892cc7a"),
  styleName: "Midnight",
  getI18nStyleName: () => t("presets.styles.mac_book_air_midnight"),
  ...o
}, {
  presetIdentifier: "APPLE_MACBOOK_PRO_14IN_SILVER",
  url: buildUploadUrl("d0ac51db2301a1df16ec8577cf699c038aab0104"),
  thumbnailUrl: buildUploadUrl("a324ff09fc229afb6de967a60f0d67128f47f288"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.mac_book_pro_silver"),
  ...a
}, {
  presetIdentifier: "APPLE_MACBOOK_PRO_14IN_SPACE_GREY",
  url: buildUploadUrl("97dfa32458f7a83d940ec8fbaa68d54aa8cf7ee8"),
  thumbnailUrl: buildUploadUrl("fd515d09a7013734aa2cb1a15073dd5c5f2679b5"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.mac_book_pro_space_grey"),
  ...a
}, {
  presetIdentifier: "APPLE_MACBOOK_PRO_16IN_SILVER",
  url: buildUploadUrl("1f2c9f4c15ca4d1804f34e5b251ac08627b9ec68"),
  thumbnailUrl: buildUploadUrl("c4c083cc23725fa7a40cf59a21dacd7d61b226cf"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.mac_book_pro_silver"),
  ...s
}, {
  presetIdentifier: "APPLE_MACBOOK_PRO_16IN_SPACE_GREY",
  url: buildUploadUrl("6775576c185793200af0c931b1131d8e4b8cbbc8"),
  thumbnailUrl: buildUploadUrl("a8ec13de98896c9931272c1d1930df3669e3a96c"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.mac_book_pro_space_grey"),
  ...s
}, {
  presetIdentifier: "APPLE_TV",
  url: buildUploadUrl("6b498a79fda04bf5ed960b027abd702068610785"),
  thumbnailUrl: buildUploadUrl("0b1b83e3df9a3e0e15fe98d3cc8d42f328148ed4"),
  styleName: "",
  getI18nStyleName: () => "",
  scaleFactor: 2,
  imageSize: {
    x: 2608,
    y: 1570
  },
  offset: {
    x: 12,
    y: 12
  },
  deviceName: "TV",
  getI18nDeviceName: () => t("presets.tv"),
  framePresetSize: {
    x: 1280,
    y: 720
  }
}, {
  presetIdentifier: "APPLE_MACINTOSH_128K",
  url: buildUploadUrl("3fadd217a75ad0333441f0da8eb2d1beea66d114"),
  thumbnailUrl: buildUploadUrl("3bd4c5ae80a538033c9d88b9d6db256a31b0ede7"),
  styleName: "",
  getI18nStyleName: () => "",
  scaleFactor: 1,
  imageSize: {
    x: 706,
    y: 976
  },
  offset: {
    x: 97,
    y: 132
  },
  framePresetSize: {
    x: 512,
    y: 342
  },
  deviceName: "Macintosh 128k",
  getI18nDeviceName: () => t("presets.mac_128k"),
  archived: !0,
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("97e7500f80fc8443679965e979c4e26fac482b7b")
  }
}];
export const E = $$l0;