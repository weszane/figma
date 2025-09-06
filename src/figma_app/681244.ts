import { getI18nString } from "../905/303541";
let i = [{
  name: "Android Compact",
  width: 412,
  height: 917,
  i18nName: () => getI18nString("presets.android_compact")
}, {
  name: "Android Medium",
  width: 700,
  height: 840,
  i18nName: () => getI18nString("presets.android_medium")
}, {
  name: "iPhone 16",
  width: 393,
  height: 852,
  i18nName: () => getI18nString("presets.i_phone_16")
}, {
  name: "iPhone 16 Pro",
  width: 402,
  height: 874,
  i18nName: () => getI18nString("presets.i_phone_16_pro")
}, {
  name: "iPhone 16 Pro Max",
  width: 440,
  height: 956,
  i18nName: () => getI18nString("presets.i_phone_16_pro_max")
}, {
  name: "iPhone 16 Plus",
  width: 430,
  height: 932,
  i18nName: () => getI18nString("presets.i_phone_16_plus")
}, {
  name: "iPhone 14 & 15 Pro Max",
  width: 430,
  height: 932,
  i18nName: () => getI18nString("presets.i_phone_14_and_15_pro_max")
}, {
  name: "iPhone 14 & 15 Pro",
  width: 393,
  height: 852,
  i18nName: () => getI18nString("presets.i_phone_14_and_15_pro")
}, {
  name: "iPhone 13 & 14",
  width: 390,
  height: 844,
  i18nName: () => getI18nString("presets.i_phone_13_and_14")
}, {
  name: "iPhone 14 Plus",
  width: 428,
  height: 926,
  i18nName: () => getI18nString("presets.i_phone_14_plus")
}, {
  name: "iPhone 13 mini",
  width: 375,
  height: 812,
  i18nName: () => getI18nString("presets.i_phone_13_mini")
}, {
  name: "iPhone SE",
  width: 320,
  height: 568,
  i18nName: () => getI18nString("presets.i_phone_se")
}];
let a = [{
  name: "Android Expanded",
  width: 1280,
  height: 800,
  i18nName: () => getI18nString("presets.android_expanded")
}, {
  name: "Surface Pro 8",
  width: 1440,
  height: 960,
  i18nName: () => getI18nString("presets.surface_pro_8")
}, {
  name: "iPad mini 8.3",
  width: 744,
  height: 1133,
  i18nName: () => getI18nString("presets.i_pad_mini_8_3")
}, {
  name: 'iPad Pro 11"',
  width: 834,
  height: 1194,
  i18nName: () => getI18nString("presets.i_pad_pro_11")
}, {
  name: 'iPad Pro 12.9"',
  width: 1024,
  height: 1366,
  i18nName: () => getI18nString("presets.i_pad_pro_12_9")
}];
let s = [{
  name: "MacBook Air",
  width: 1280,
  height: 832,
  i18nName: () => getI18nString("presets.mac_book_air_m2")
}, {
  name: 'MacBook Pro 14"',
  width: 1512,
  height: 982,
  i18nName: () => getI18nString("presets.mac_book_pro_14")
}, {
  name: 'MacBook Pro 16"',
  width: 1728,
  height: 1117,
  i18nName: () => getI18nString("presets.mac_book_pro_16")
}, {
  name: "Desktop",
  width: 1440,
  height: 1024,
  i18nName: () => getI18nString("presets.desktop")
}, {
  name: "Wireframe",
  width: 1440,
  height: 1024,
  i18nName: () => getI18nString("categories.wireframes")
}, {
  name: "TV",
  width: 1280,
  height: 720,
  i18nName: () => getI18nString("presets.tv")
}];
let o = [{
  name: "Slide 16:9",
  width: 1920,
  height: 1080,
  i18nName: () => getI18nString("presets.slide_16_9")
}, {
  name: "Slide 4:3",
  width: 1024,
  height: 768,
  i18nName: () => getI18nString("presets.slide_4_3")
}];
let l = [{
  name: "A4",
  width: 595,
  height: 842,
  i18nName: () => getI18nString("presets.a_4")
}, {
  name: "A5",
  width: 420,
  height: 595,
  i18nName: () => getI18nString("presets.a_5")
}, {
  name: "A6",
  width: 297,
  height: 420,
  i18nName: () => getI18nString("presets.a_6")
}, {
  name: "Letter",
  width: 612,
  height: 792,
  i18nName: () => getI18nString("presets.letter")
}, {
  name: "Tabloid",
  width: 792,
  height: 1224,
  i18nName: () => getI18nString("presets.tabloid")
}];
let $$d4 = {
  phonePresets: i,
  tabletPresets: a,
  desktopPresets: s,
  presentationPresets: o,
  watchPresets: [{
    name: "Apple Watch Series 10 42mm",
    width: 187,
    height: 223,
    i18nName: () => getI18nString("presets.apple_watch_series_10_42_mm")
  }, {
    name: "Apple Watch Series 10 46mm",
    width: 208,
    height: 248,
    i18nName: () => getI18nString("presets.apple_watch_series_10_46_mm")
  }, {
    name: "Apple Watch 41mm",
    width: 176,
    height: 215,
    i18nName: () => getI18nString("presets.apple_watch_41_mm")
  }, {
    name: "Apple Watch 45mm",
    width: 198,
    height: 242,
    i18nName: () => getI18nString("presets.apple_watch_45_mm")
  }, {
    name: "Apple Watch 44mm",
    width: 184,
    height: 224,
    i18nName: () => getI18nString("presets.apple_watch_44_mm")
  }, {
    name: "Apple Watch 40mm",
    width: 162,
    height: 197,
    i18nName: () => getI18nString("presets.apple_watch_40_mm")
  }],
  paperPresets: l,
  socialMediaPresets: [{
    name: "Twitter post",
    width: 1200,
    height: 675,
    i18nName: () => getI18nString("presets.twitter_post")
  }, {
    name: "Twitter header",
    width: 1500,
    height: 500,
    i18nName: () => getI18nString("presets.twitter_header")
  }, {
    name: "Facebook post",
    width: 1200,
    height: 630,
    i18nName: () => getI18nString("presets.facebook_post")
  }, {
    name: "Facebook cover",
    width: 820,
    height: 312,
    i18nName: () => getI18nString("presets.facebook_cover")
  }, {
    name: "Instagram post",
    width: 1080,
    height: 1080,
    i18nName: () => getI18nString("presets.instagram_post")
  }, {
    name: "Instagram story",
    width: 1080,
    height: 1920,
    i18nName: () => getI18nString("presets.instagram_story")
  }, {
    name: "Dribbble shot",
    width: 400,
    height: 300,
    i18nName: () => getI18nString("presets.dribbble_shot")
  }, {
    name: "Dribbble shot HD",
    width: 800,
    height: 600,
    i18nName: () => getI18nString("presets.dribbble_shot_hd")
  }, {
    name: "LinkedIn cover",
    width: 1584,
    height: 396,
    i18nName: () => getI18nString("presets.linked_in_cover")
  }],
  figmaPresets: [{
    name: "Plugin icon",
    width: 128,
    height: 128,
    i18nName: () => getI18nString("presets.plugin_icon")
  }, {
    name: "Profile banner",
    width: 1680,
    height: 240,
    i18nName: () => getI18nString("presets.profile_banner")
  }, {
    name: "Plugin / file cover",
    width: 1920,
    height: 1080,
    i18nName: () => getI18nString("presets.plugin_file_cover")
  }],
  archivedPresets: [{
    name: "iPhone 13 Pro Max",
    width: 428,
    height: 926,
    i18nName: () => getI18nString("presets.i_phone_13_pro_max")
  }, {
    name: "iPhone 13 / 13 Pro",
    width: 390,
    height: 844,
    i18nName: () => getI18nString("presets.i_phone_13_13_pro")
  }, {
    name: "iPhone 11 Pro Max",
    width: 414,
    height: 896,
    i18nName: () => getI18nString("presets.i_phone_11_pro_max")
  }, {
    name: "iPhone 11 Pro / X",
    width: 375,
    height: 812,
    i18nName: () => getI18nString("presets.i_phone_11_pro_x")
  }, {
    name: "iPhone 8 Plus",
    width: 414,
    height: 736,
    i18nName: () => getI18nString("presets.i_phone_8_plus")
  }, {
    name: "iPhone 8",
    width: 375,
    height: 667,
    i18nName: () => getI18nString("presets.i_phone_8")
  }, {
    name: "Android Small",
    width: 360,
    height: 640,
    i18nName: () => getI18nString("presets.android_small")
  }, {
    name: "Android Large",
    width: 360,
    height: 800,
    i18nName: () => getI18nString("presets.android_large")
  }, {
    name: "Google Pixel 2",
    width: 411,
    height: 731,
    i18nName: () => getI18nString("presets.google_pixel_2")
  }, {
    name: "Google Pixel 2 XL",
    width: 411,
    height: 823,
    i18nName: () => getI18nString("presets.google_pixel_2_xl")
  }, {
    name: "iPad mini 5",
    width: 768,
    height: 1024,
    i18nName: () => getI18nString("presets.i_pad_mini_5")
  }, {
    name: "Surface Pro 4",
    width: 1368,
    height: 912,
    i18nName: () => getI18nString("presets.surface_pro_4")
  }, {
    name: "MacBook",
    width: 1152,
    height: 700,
    i18nName: () => getI18nString("presets.mac_book")
  }, {
    name: "MacBook Pro",
    width: 1440,
    height: 900,
    i18nName: () => getI18nString("presets.mac_book_pro")
  }, {
    name: "Surface Book",
    width: 1500,
    height: 1e3,
    i18nName: () => getI18nString("presets.surface_book")
  }, {
    name: "Apple Watch 42mm",
    width: 156,
    height: 195,
    i18nName: () => getI18nString("presets.apple_watch_42_mm")
  }, {
    name: "Apple Watch 38mm",
    width: 136,
    height: 170,
    i18nName: () => getI18nString("presets.apple_watch_38_mm")
  }, {
    name: "iMac",
    width: 1280,
    height: 720,
    i18nName: () => getI18nString("presets.i_mac")
  }, {
    name: "Macintosh 128k",
    width: 512,
    height: 342,
    i18nName: () => getI18nString("presets.mac_128k")
  }]
};
let $$c1 = _(Object.values($$d4));
let $$u0 = _([i, s, o]);
export function $$p2(e, t = $$c1) {
  let r = null;
  for (let n of Object.values(t)) {
    if (e.width === n.width && e.height === n.height) return n;
    e.width !== n.height || e.height !== n.width || r || (r = n);
  }
  return r;
}
function _(e) {
  return e.reduce((e, t) => {
    for (let r of t) e[r.name] = r;
    return e;
  }, {});
}
_([i, a, l]);
export let $$h3 = {
  phonePresets: {
    i18nName: () => getI18nString("presets.group_titles.phone")
  },
  tabletPresets: {
    i18nName: () => getI18nString("presets.group_titles.tablet")
  },
  desktopPresets: {
    i18nName: () => getI18nString("presets.group_titles.desktop")
  },
  presentationPresets: {
    i18nName: () => getI18nString("presets.group_titles.presentation")
  },
  watchPresets: {
    i18nName: () => getI18nString("presets.group_titles.watch")
  },
  paperPresets: {
    i18nName: () => getI18nString("presets.group_titles.paper")
  },
  socialMediaPresets: {
    i18nName: () => getI18nString("presets.group_titles.social_media")
  },
  figmaPresets: {
    i18nName: () => getI18nString("presets.group_titles.figma")
  },
  archivedPresets: {
    i18nName: () => getI18nString("presets.group_titles.archived")
  }
};
export const $W = $$u0;
export const EZ = $$c1;
export const fS = $$p2;
export const g1 = $$h3;
export const sE = $$d4;