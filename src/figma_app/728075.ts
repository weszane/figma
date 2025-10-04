// Color palette constants
const COLORS = {
  // Base colors
  white: "#fff",
  black: "#000",
  gray300: "#e5e5e5",
  gray400: "#e6e6e6",
  gray500: "#333333",
  gray600: "rgba(117, 117, 117, 1)",
  gray700: "rgba(179, 179, 179, 1)",
  gray800: "rgba(151, 151, 151, 1)",
  gray900: "rgba(175, 175, 175, 1)",

  // Brand colors
  bluePrimary: "#0d99ff",
  blueSecondary: "#007be5",
  blueTint: "rgba(13, 153, 255, 1)",
  blueLight: "rgba(128, 202, 255, 1)",
  blueUltraLight: "rgba(189, 227, 255, 1)",
  blueSky: "rgba(168, 215, 250, 1)",

  purplePrimary: "#9747ff",
  purpleSecondary: "rgba(151, 71, 255, 1)",
  purpleLight: "rgba(217, 184, 255, 1)",
  purpleUltraLight: "rgba(228, 204, 255, 1)",
  purpleMagenta: "rgba(138, 56, 245, 1)",
  purpleLavender: "rgba(214, 182, 251, 1)",
  purpleOrchid: "rgba(188, 155, 255, 1)",

  pinkPrimary: "#f531b3",
  pinkHot: "#ff24bd",
  pinkFlamingo: "rgba(255, 36, 189, 1)",
  pinkRose: "rgba(255, 189, 242, 1)",
  pinkCottonCandy: "rgba(255, 153, 248, 1)",
  pinkBubblegum: "rgba(255, 160, 249, 1)",
  pinkSalmon: "rgba(255, 184, 104, 1)",

  redPrimary: "#f24822",
  redSecondary: "rgba(242, 72, 34, 1)",
  redCoral: "rgba(224, 62, 26, 1)",
  redLight: "rgba(255, 199, 194, 1)",
  redBlush: "rgba(251, 188, 182, 1)",
  redPeach: "rgba(252, 163, 151, 1)",
  redCinnamon: "rgba(255, 175, 163, 1)",
  redTomato: "rgba(247, 151, 34, 1)",
  redOrange: "rgba(255, 166, 41, 1)",
  redAmber: "rgba(255, 196, 112, 1)",
  redHoney: "rgba(252, 209, 156, 1)",
  redApricot: "rgba(255, 205, 41, 1)",
  redLemon: "rgba(255, 232, 163, 1)",
  redCantaloupe: "rgba(255, 217, 102, 1)",
  redPineapple: "rgba(247, 209, 95, 1)",
  redGold: "rgba(243, 193, 27, 1)",
  redButter: "rgba(249, 223, 144, 1)",
  redCaramel: "rgba(200, 115, 74, 1)",

  greenPrimary: "#1bc47d",
  greenSecondary: "#14ae5c",
  greenForest: "rgba(25, 143, 81, 1)",
  greenMint: "rgba(20, 174, 92, 1)",
  greenTeal: "rgba(63, 201, 156, 1)",
  greenLime: "rgba(134, 250, 22, 1)",
  greenPear: "rgba(174, 255, 97, 1)",
  greenJade: "rgba(133, 224, 163, 1)",
  greenEmerald: "rgba(121, 210, 151, 1)",
  greenSage: "rgba(196, 213, 106, 1)",
  greenLight: "rgba(175, 244, 198, 1)",
  greenSeafoam: "rgba(161, 232, 185, 1)",
  greenAqua: "rgba(111, 255, 246, 1)",
  greenCyan: "rgba(126, 255, 247, 1)",

  yellowPrimary: "#ffc700",
  yellowSunflower: "#ffcd29",
  yellowLemon: "rgba(255, 242, 52, 1)",
  yellowCream: "rgba(255, 238, 0, 1)",

  cyanPrimary: "#00b5ce",

  indigoPrimary: "#7b61ff",

  // Neutrals
  neutralDark: "rgba(30, 30, 30, 1)",
  neutralLight: "rgba(255, 255, 255, 1)",
  neutralOffWhite: "#f8f8f8",
  neutralPaper: "rgba(250, 248, 245, 1)",

  // Utility colors
  shadow: "rgba(0, 0, 0, 0.1)",
  overlay: "rgba(0, 0, 0, 0.8)",

  // UI colors
  uiBlue: "rgba(12, 140, 233, 1)",
  uiPurple: "rgba(179, 143, 255, 1)",
  uiGray: "rgba(230, 230, 230, 1)",
  uiGrayBorder: "rgba(217, 217, 217, 1)",
  uiBlueSteel: "rgba(102, 119, 153, 1)",
  uiBlueSlate: "rgba(175, 188, 207, 1)",
  uiBluePeriwinkle: "rgba(209, 168, 255, 1)",
  uiPinkCarnation: "rgba(253, 156, 224, 1)",
  uiGreenMint: "rgba(124, 196, 248, 1)",
} as const

// Exported color constants (maintaining original export names for compatibility)
export const yellowSunflowerColor = COLORS.yellowSunflower
export const $C = yellowSunflowerColor
export const redPeachColor = COLORS.redPeach
export const $b = redPeachColor
export const purplePrimaryColor = COLORS.purplePrimary
export const $r = purplePrimaryColor
export const uiGrayBorderColor = COLORS.uiGrayBorder
export const A4 = uiGrayBorderColor
export const indigoPrimaryColor = COLORS.indigoPrimary
export const A8 = indigoPrimaryColor
export const gray900Color = COLORS.gray900
export const AN = gray900Color
export const redCoralColor = COLORS.redCoral
export const Af = redCoralColor
export const redApricotColor = COLORS.redApricot
export const Ah = redApricotColor
export const neutralDarkColor = COLORS.neutralDark
export const B8 = neutralDarkColor
export const redAmberColor = COLORS.redAmber
export const B9 = redAmberColor
export const yellowLemonColor = COLORS.yellowLemon
export const DE = yellowLemonColor
export const purpleSecondaryColor = COLORS.purpleSecondary
export const DN = purpleSecondaryColor
export const uiGrayColor = COLORS.uiGray
export const Dd = uiGrayColor
export const gray400Color = COLORS.gray400
export const De = gray400Color
export const cyanPrimaryColor = COLORS.cyanPrimary
export const Dm = cyanPrimaryColor
export const whiteColor = COLORS.white
export const Dr = whiteColor
export const uiGrayColor2 = COLORS.uiGray
export const FQ = uiGrayColor2
export const pinkPrimaryColor = COLORS.pinkPrimary
export const FX = pinkPrimaryColor
export const blueLightColor = COLORS.blueLight
export const JI = blueLightColor
export const pinkHotColor = COLORS.pinkHot
export const JT = pinkHotColor
export const redPineappleColor = COLORS.redPineapple
export const K4 = redPineappleColor
export const yellowPrimaryColor = COLORS.yellowPrimary
export const Ks = yellowPrimaryColor
export const purplePrimaryColor2 = COLORS.purplePrimary
export const L2 = purplePrimaryColor2
export const redGoldColor = COLORS.redGold
export const L5 = redGoldColor
export const redAmberColor2 = COLORS.redAmber
export const LL = redAmberColor2
export const redPrimaryColor = COLORS.redPrimary
export const Me = redPrimaryColor
export const redSecondaryColor = COLORS.redSecondary
export const N0 = redSecondaryColor
export const greenTealColor = COLORS.greenTeal
export const OF = greenTealColor
export const overlayColor = COLORS.overlay
export const PN = overlayColor
export const uiGrayColor3 = COLORS.uiGray
export const PQ = uiGrayColor3
export const redLightColor = COLORS.redLight
export const Po = redLightColor
export const redCantaloupeColor = COLORS.redCantaloupe
export const Pp = redCantaloupeColor
export const purpleUltraLightColor = COLORS.purpleUltraLight
export const Py = purpleUltraLightColor
export const uiPinkCarnationColor = COLORS.uiPinkCarnation
export const Q1 = uiPinkCarnationColor
export const redOrangeColor = COLORS.redOrange
export const Q2 = redOrangeColor
export const greenSageColor = COLORS.greenSage
export const QE = greenSageColor
export const gray500Color = COLORS.gray500
export const QQ = gray500Color
export const redLemonColor = COLORS.redLemon
export const Qw = redLemonColor
export const greenForestColor = COLORS.greenForest
export const R2 = greenForestColor
export const blackColor = COLORS.black
export const R3 = blackColor
export const greenMintColor = COLORS.greenMint
export const RO = greenMintColor
export const neutralOffWhiteColor = COLORS.neutralOffWhite
export const Rv = neutralOffWhiteColor
export const redCinnamonColor = COLORS.redCinnamon
export const SW = redCinnamonColor
export const redApricotColor2 = COLORS.redApricot
export const Sb = redApricotColor2
export const uiBlueSlateColor = COLORS.uiBlueSlate
export const T2 = uiBlueSlateColor
export const greenLimeColor = COLORS.greenLime
export const Td = greenLimeColor
export const neutralPaperColor = COLORS.neutralPaper
export const Tn = neutralPaperColor
export const uiGrayBorderColor2 = COLORS.uiGrayBorder
export const U8 = uiGrayBorderColor2
export const uiGrayColor4 = COLORS.uiGray
export const Uw = uiGrayColor4
export const whiteColor2 = COLORS.white
export const Vm = whiteColor2
export const greenSecondaryColor = COLORS.greenSecondary
export const Wn = greenSecondaryColor
export const neutralDarkColor2 = COLORS.neutralDark
export const Ws = neutralDarkColor2
export const blueSkyColor = COLORS.blueSky
export const X8 = blueSkyColor
export const gray700Color = COLORS.gray700
export const Z6 = gray700Color
export const redCaramelColor = COLORS.redCaramel
export const Zv = redCaramelColor
export const uiBluePeriwinkleColor = COLORS.uiBluePeriwinkle
export const Zz = uiBluePeriwinkleColor
export const gray600Color = COLORS.gray600
export const _M = gray600Color
export const redBlushColor = COLORS.redBlush
export const _P = redBlushColor
export const purpleLightColor = COLORS.purpleLight
export const _x = purpleLightColor
export const pinkRoseColor = COLORS.pinkRose
export const a6 = pinkRoseColor
export const redAmberColor3 = COLORS.redAmber
export const aT = redAmberColor3
export const neutralLightColor = COLORS.neutralLight
export const az = neutralLightColor
export const greenLightColor = COLORS.greenLight
export const bu = greenLightColor
export const greenSeafoamColor = COLORS.greenSeafoam
export const c6 = greenSeafoamColor
export const shadowColor = COLORS.shadow
export const c7 = shadowColor
export const blueSecondaryColor = COLORS.blueSecondary
export const dV = blueSecondaryColor
export const purpleLavenderColor = COLORS.purpleLavender
export const eN = purpleLavenderColor
export const gray300Color = COLORS.gray300
export const eg = gray300Color
export const greenPearColor = COLORS.greenPear
export const ev = greenPearColor
export const redButterColor = COLORS.redButter
export const fU = redButterColor
export const uiPurpleColor = COLORS.uiPurple
export const fV = uiPurpleColor
export const uiBlueSteelColor = COLORS.uiBlueSteel
export const fh = uiBlueSteelColor
export const gray800Color = COLORS.gray800
export const g$ = gray800Color
export const purpleOrchidColor = COLORS.purpleOrchid
export const gn = purpleOrchidColor
export const greenMintColor2 = COLORS.greenMint
export const h3 = greenMintColor2
export const pinkFlamingoColor = COLORS.pinkFlamingo
export const i4 = pinkFlamingoColor
export const redApricotColor3 = COLORS.redApricot
export const iU = redApricotColor3
export const redHoneyColor = COLORS.redHoney
export const is = redHoneyColor
export const neutralDarkColor3 = COLORS.neutralDark
export const jR = neutralDarkColor3
export const uiBlueColor = COLORS.uiBlue
export const jc = uiBlueColor
export const blueTintColor = COLORS.blueTint
export const k0 = blueTintColor
export const greenJadeColor = COLORS.greenJade
export const k7 = greenJadeColor
export const purpleMagentaColor = COLORS.purpleMagenta
export const mO = purpleMagentaColor
export const redTomatoColor = COLORS.redTomato
export const n7 = redTomatoColor
export const neutralLightColor2 = COLORS.neutralLight
export const nG = neutralLightColor2
export const greenEmeraldColor = COLORS.greenEmerald
export const nL = greenEmeraldColor
export const uiGreenMintColor = COLORS.uiGreenMint
export const o$ = uiGreenMintColor
export const uiBlueSlateColor2 = COLORS.uiBlueSlate
export const oK = uiBlueSlateColor2
export const blueUltraLightColor = COLORS.blueUltraLight
export const oW = blueUltraLightColor
export const redGoldColor2 = COLORS.redGold
export const p5 = redGoldColor2
export const redSecondaryColor2 = COLORS.redSecondary
export const pZ = redSecondaryColor2
export const greenAquaColor = COLORS.greenAqua
export const qH = greenAquaColor
export const redOrangeColor2 = COLORS.redOrange
export const qm = redOrangeColor2
export const pinkBubblegumColor = COLORS.pinkBubblegum
export const qt = pinkBubblegumColor
export const neutralLightColor3 = COLORS.neutralLight
export const t1 = neutralLightColor3
export const pinkCottonCandyColor = COLORS.pinkCottonCandy
export const vD = pinkCottonCandyColor
export const greenCyanColor = COLORS.greenCyan
export const vY = greenCyanColor
export const gray600Color2 = COLORS.gray600
export const vh = gray600Color2
export const uiBlueSteelColor2 = COLORS.uiBlueSteel
export const w3 = uiBlueSteelColor2
export const yellowCreamColor = COLORS.yellowCream
export const wO = yellowCreamColor
export const bluePrimaryColor = COLORS.bluePrimary
export const wR = bluePrimaryColor
export const neutralLightColor4 = COLORS.neutralLight
export const wl = neutralLightColor4
export const uiGrayColor5 = COLORS.uiGray
export const xr = uiGrayColor5
export const pinkSalmonColor = COLORS.pinkSalmon
export const xu = pinkSalmonColor
export const blueTintColor2 = COLORS.blueTint
export const yG = blueTintColor2
export const greenPrimaryColor = COLORS.greenPrimary
export const zo = greenPrimaryColor
export const purpleSecondaryColor2 = COLORS.purpleSecondary
export const zt = purpleSecondaryColor2
