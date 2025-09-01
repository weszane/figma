import { buildUploadUrl } from "../figma_app/169182";
import { t } from "../905/303541";
let a = {
  scaleFactor: 3,
  imageSize: {
    x: 4110,
    y: 2670
  },
  offset: {
    x: 45,
    y: 45
  },
  deviceName: "Android Expanded",
  getI18nDeviceName: () => t("presets.android_expanded"),
  framePresetSize: {
    x: 1280,
    y: 800
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("32937d09bffc6606a61b407954e4aacab45b998e")
  }
};
let s = {
  scaleFactor: 2,
  imageSize: {
    x: 3020,
    y: 2176
  },
  offset: {
    x: 35,
    y: 64
  },
  deviceName: "Surface Pro 8",
  getI18nDeviceName: () => t("presets.surface_pro_8"),
  framePresetSize: {
    x: 1440,
    y: 960
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("206c91d15ad504d727ec166f40a9160f8e4ad912")
  }
};
let $$o = {
  scaleFactor: 2,
  imageSize: {
    x: 1728,
    y: 2604
  },
  offset: {
    x: 48,
    y: 139
  },
  deviceName: "iPad mini",
  getI18nDeviceName: () => t("presets.i_pad_mini"),
  framePresetSize: {
    x: 768,
    y: 1024
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("0dece8b484c0522bdee57c2596d8c1ee614ad814")
  }
};
let l = {
  scaleFactor: 2,
  imageSize: {
    x: 1828,
    y: 2631
  },
  offset: {
    x: 40,
    y: 107.5
  },
  deviceName: 'iPad Pro 10.5"',
  getI18nDeviceName: () => t("presets.i_pad_pro_10_5"),
  framePresetSize: {
    x: 834,
    y: 1112
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("777d80fe9ebe9382a7c0af8e57c6fb5e23d0335d")
  }
};
let d = {
  scaleFactor: 2,
  imageSize: {
    x: 1763,
    y: 2495
  },
  offset: {
    x: 56,
    y: 112
  },
  deviceName: 'iPad 9.7"',
  getI18nDeviceName: () => t("presets.i_pad_9_7"),
  framePresetSize: {
    x: 768,
    y: 1024
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("93df3c3a17d16f3eb0c0cbed560a1109bee5f437")
  }
};
let $$c0 = [{
  presetIdentifier: "ANDROID_EXPANDED_SILVER",
  url: buildUploadUrl("603ebb9c77cca5277b2f4bb76d7b09f153581f6e"),
  thumbnailUrl: buildUploadUrl("5c2f5cbf66c34a974131de38dad1e801e23da0fc"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.android_silver"),
  ...a
}, {
  presetIdentifier: "ANDROID_EXPANDED_BLACK",
  url: buildUploadUrl("854db1a8b909e8309060df10eb1fe27b1bc82a50"),
  thumbnailUrl: buildUploadUrl("36633217e125d29504971cc7469e12370337323a"),
  styleName: "Black",
  getI18nStyleName: () => t("presets.styles.android_black"),
  ...a
}, {
  presetIdentifier: "APPLE_IPAD_MINI_83_SPACE_GREY",
  url: buildUploadUrl("068d7ef1ff70fd76e2a330bdfc0966c52f7e370b"),
  thumbnailUrl: buildUploadUrl("69a9e0440f39e43c5b176ba88a15adaa3924f12c"),
  scaleFactor: 2,
  imageSize: {
    x: 1720,
    y: 2504
  },
  offset: {
    x: 58,
    y: 61
  },
  deviceName: "iPad mini 8.3",
  getI18nDeviceName: () => t("presets.i_pad_mini_8_3"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.ipad_space_grey"),
  framePresetSize: {
    x: 744,
    y: 1133
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("9c7685c20ea1de4f1ffc984f7c5192a85c11ea91")
  }
}, {
  presetIdentifier: "MICROSOFT_SURFACE_PRO_8_PLATNUM",
  url: buildUploadUrl("92d5ece8be81c95bb255298e69ee998bcff2389e"),
  thumbnailUrl: buildUploadUrl("5b0a4fed78b07af23ee81e5d150bb55bb0864b86"),
  styleName: "Platinum",
  getI18nStyleName: () => t("presets.styles.surface_platinum"),
  ...s
}, {
  presetIdentifier: "MICROSOFT_SURFACE_PRO_8_GRAPHITE",
  url: buildUploadUrl("eee19b625be7752f489eabb1dabb880c577dd4f2"),
  thumbnailUrl: buildUploadUrl("8fb12ac02e7c22ad0748b9d85ebf0a538b0edffc"),
  styleName: "Graphite",
  getI18nStyleName: () => t("presets.styles.surface_graphite"),
  ...s
}, {
  presetIdentifier: "APPLE_IPAD_MINI_4_GOLD",
  url: buildUploadUrl("328013fee3e9ae814eeb7bb38c1d9b4d42ae6bc9"),
  thumbnailUrl: buildUploadUrl("75bf4da29b271b65dc372f36608cbd2f94eaa84a"),
  styleName: "Gold",
  getI18nStyleName: () => t("presets.styles.ipad_gold"),
  archived: !0,
  ...$$o
}, {
  presetIdentifier: "APPLE_IPAD_MINI_4_SILVER",
  url: buildUploadUrl("e880c453cd086df5696ca242d7bbc0fcd4a7e6c7"),
  thumbnailUrl: buildUploadUrl("0befd84fa291160218098e1e11ef814593c3e8af"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.ipad_silver"),
  archived: !0,
  ...$$o
}, {
  presetIdentifier: "APPLE_IPAD_MINI_4_SPACE_GREY",
  url: buildUploadUrl("8638fcab67fa732bc8a72acb6c40b79cf1261f21"),
  thumbnailUrl: buildUploadUrl("5a823145105ba98060af64c62bfec3b96e603bc7"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.ipad_space_grey"),
  archived: !0,
  ...$$o
}, {
  presetIdentifier: "APPLE_IPAD_PRO_11_SILVER",
  url: buildUploadUrl("93f3bdf77fe5e69af9a645fce6497e5b33d7011f"),
  thumbnailUrl: buildUploadUrl("38c681887e85ee410a4635219665279e60b194b9"),
  scaleFactor: 2,
  imageSize: {
    x: 1863,
    y: 2583
  },
  offset: {
    x: 47.5,
    y: 50
  },
  deviceName: 'iPad Pro 11"',
  getI18nDeviceName: () => t("presets.i_pad_pro_11"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.ipad_silver"),
  framePresetSize: {
    x: 834,
    y: 1194
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("a6509d93d3f8e6c2afa4a47aeabde3702f122835")
  }
}, {
  presetIdentifier: "APPLE_IPAD_PRO_129_SILVER",
  url: buildUploadUrl("6d5c861ea44bd36c7b8dfe07cc167378938f71ef"),
  thumbnailUrl: buildUploadUrl("5f68be5104861293fc155a581a874e030874489b"),
  scaleFactor: 2,
  imageSize: {
    x: 2245,
    y: 2930
  },
  offset: {
    x: 48,
    y: 51
  },
  deviceName: 'iPad Pro 12.9"',
  getI18nDeviceName: () => t("presets.i_pad_pro_12_9"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.ipad_silver"),
  framePresetSize: {
    x: 1024,
    y: 1366
  },
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("2ce9c369b0e222915b11508a382ac1bd8121be41")
  }
}, {
  presetIdentifier: "MICROSOFT_SURFACE_PRO_4",
  url: buildUploadUrl("4192a676e2992e9b08407571f59d57b2da414407"),
  thumbnailUrl: buildUploadUrl("5abae406fbb16edb28d09336521687e904195c7c"),
  scaleFactor: 2,
  imageSize: {
    x: 3064,
    y: 2115
  },
  offset: {
    x: 82,
    y: 74
  },
  deviceName: "Surface Pro 4",
  getI18nDeviceName: () => t("presets.surface_pro_4"),
  styleName: "",
  getI18nStyleName: () => "",
  framePresetSize: {
    x: 1368,
    y: 912
  },
  archived: !0,
  inlinePreviewInfo: {
    hitTargetSvgUrl: buildUploadUrl("0ff63a94a8b9430323c3b4ca1aa9d3b82a040f9b")
  }
}, {
  presetIdentifier: "APPLE_IPAD_GOLD",
  url: buildUploadUrl("c0041089d121b6a9fab09a3e6e57ae662a63c056"),
  thumbnailUrl: buildUploadUrl("352b92962b1d63d4142d3b3f525f7a7145d6865b"),
  styleName: "Gold",
  getI18nStyleName: () => t("presets.styles.ipad_gold"),
  archived: !0,
  ...d
}, {
  presetIdentifier: "APPLE_IPAD_SILVER",
  url: buildUploadUrl("673fcf21209d5719d14ec969b226509b0386ff28"),
  thumbnailUrl: buildUploadUrl("e04b4c9943933ae8948bd6f9e98a59d2e2248b98"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.ipad_silver"),
  archived: !0,
  ...d
}, {
  presetIdentifier: "APPLE_IPAD_SPACE_GREY",
  url: buildUploadUrl("dc4087534c677eb0bd8e01be81960f541df7abab"),
  thumbnailUrl: buildUploadUrl("7eaf93631ddf35d4d7773618c84c6811bd8f5023"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.ipad_space_grey"),
  archived: !0,
  ...d
}, {
  presetIdentifier: "APPLE_IPAD_PRO_105_GOLD",
  url: buildUploadUrl("6604919217ccd2007dc242289b6eb46a67e906b0"),
  thumbnailUrl: buildUploadUrl("144614eca299bf21ef6a3220413deafe74d7db5f"),
  styleName: "Gold",
  getI18nStyleName: () => t("presets.styles.ipad_gold"),
  hideUnlessActive: !0,
  ...l
}, {
  presetIdentifier: "APPLE_IPAD_PRO_105_ROSE_GOLD",
  url: buildUploadUrl("628fb1414c2b238f444108bf359460981e4efd7b"),
  thumbnailUrl: buildUploadUrl("a7fc4718e83b481e5191cc352e4810a9bb828ee5"),
  styleName: "Rose Gold",
  getI18nStyleName: () => t("presets.styles.ipad_rose_gold"),
  hideUnlessActive: !0,
  ...l
}, {
  presetIdentifier: "APPLE_IPAD_PRO_105_SILVER",
  url: buildUploadUrl("fe6849f30d136173a21c308c8291b52b83feb15a"),
  thumbnailUrl: buildUploadUrl("d8af399f095f5964262ed4d96e3d7304ca5f8941"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.ipad_silver"),
  hideUnlessActive: !0,
  ...l
}, {
  presetIdentifier: "APPLE_IPAD_PRO_105_SPACE_GREY",
  url: buildUploadUrl("555b2468733885cb2e3ade0de884e72bfc8bcaac"),
  thumbnailUrl: buildUploadUrl("c5466e02e01cba41c26234034e5e055147c993b1"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.ipad_space_grey"),
  hideUnlessActive: !0,
  ...l
}, {
  presetIdentifier: "APPLE_IPAD_PRO_GOLD",
  url: buildUploadUrl("693d028b945399d6eb411e8b5691c83cfd3ec1e8"),
  thumbnailUrl: buildUploadUrl("08e04a3eeb2230962f7c11de04e05987d9f93b14"),
  scaleFactor: 2,
  imageSize: {
    x: 2286,
    y: 3168
  },
  offset: {
    x: 59.5,
    y: 108
  },
  deviceName: 'iPad Pro 12.9" (old)',
  getI18nDeviceName: () => t("presets.i_pad_pro_12_9"),
  styleName: "Gold",
  getI18nStyleName: () => t("presets.styles.ipad_gold"),
  framePresetSize: {
    x: 1024,
    y: 1366
  },
  hideUnlessActive: !0
}, {
  presetIdentifier: "APPLE_IPAD_PRO_SILVER",
  url: buildUploadUrl("703a3beb0bb7eeefa5a8f00c328606f59d7bfad1"),
  thumbnailUrl: buildUploadUrl("0d3fc68051cb305703d02372bff6d8ec74c24111"),
  scaleFactor: 2,
  imageSize: {
    x: 2286,
    y: 3168
  },
  offset: {
    x: 59.5,
    y: 108
  },
  deviceName: 'iPad Pro 12.9" (old)',
  getI18nDeviceName: () => t("presets.i_pad_pro_12_9"),
  styleName: "Silver",
  getI18nStyleName: () => t("presets.styles.ipad_silver"),
  framePresetSize: {
    x: 1024,
    y: 1366
  },
  hideUnlessActive: !0
}, {
  presetIdentifier: "APPLE_IPAD_PRO_SPACE_GREY",
  url: buildUploadUrl("0eebe7d84dc8cfdd9578d03fb8fd59de6a7c0578"),
  thumbnailUrl: buildUploadUrl("272fa6d8901005d8fca90e51d3b19f2cac448bba"),
  scaleFactor: 2,
  imageSize: {
    x: 2286,
    y: 3168
  },
  offset: {
    x: 59.5,
    y: 108
  },
  deviceName: 'iPad Pro 12.9" (old)',
  getI18nDeviceName: () => t("presets.i_pad_pro_12_9"),
  styleName: "Space Grey",
  getI18nStyleName: () => t("presets.styles.ipad_space_grey"),
  framePresetSize: {
    x: 1024,
    y: 1366
  },
  hideUnlessActive: !0
}];
export const o = $$c0;