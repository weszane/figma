import _require3 from "62471";
import _require2 from "717297";
import _require from "62471";
import v from "../vendor/238597";
var r;
var n;
var o;
var A;
var i;
var s;
var l;
var c;
var p;
var d;
var f;
var u;
var h;
var m;
var g;
var b = v;
var y = function() {
  return (y = Object.assign || function(e) {
    for (a = 1, r = $$arguments.length, void 0; a < r; a++) {
      var t;
      var a;
      var r;
      for (var n in t = $$arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
};
function x(e, t, a, r) {
  return new (a || (a = Promise))(function(n, o) {
    function A(e) {
      try {
        s(r.next(e));
      } catch (e) {
        o(e);
      }
    }
    function i(e) {
      try {
        s(r.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function s(e) {
      var t;
      e.done ? n(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
        e(t);
      })).then(A, i);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function w(e, t) {
  var a;
  var r;
  var n;
  var o;
  var A = {
    label: 0,
    sent: function() {
      if (1 & n[0]) throw n[1];
      return n[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: i(0),
    throw: i(1),
    return: i(2)
  };
  "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this;
  });
  return o;
  function i(i) {
    return function(s) {
      return function(i) {
        if (a) throw TypeError("Generator is already executing.");
        for (; o && (o = 0, i[0] && (A = 0)), A;) try {
          if (a = 1, r && (n = 2 & i[0] ? r.$$return : i[0] ? r.$$throw || ((n = r.$$return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
          switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
            case 0:
            case 1:
              n = i;
              break;
            case 4:
              A.label++;
              return {
                value: i[1],
                done: !1
              };
            case 5:
              A.label++;
              r = i[1];
              i = [0];
              continue;
            case 7:
              i = A.ops.pop();
              A.trys.pop();
              continue;
            default:
              if (!(n = (n = A.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                A = 0;
                continue;
              }
              if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                A.label = i[1];
                break;
              }
              if (6 === i[0] && A.label < n[1]) {
                A.label = n[1];
                n = i;
                break;
              }
              if (n && A.label < n[2]) {
                A.label = n[2];
                A.ops.push(i);
                break;
              }
              n[2] && A.ops.pop();
              A.trys.pop();
              continue;
          }
          i = t.call(e, A);
        } catch (e) {
          i = [6, e];
          r = 0;
        } finally {
          a = n = 0;
        }
        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, s]);
    };
  }
}
function C(e, t, a) {
  if (a || 2 == $$arguments.length) for (n = 0, o = t.length, void 0; n < o; n++) {
    var r;
    var n;
    var o;
    !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
  }
  return e.concat(r || Array.prototype.slice.call(t));
}
var P = /^[0-9a-fA-F]{6}$/;
var L = {
  type: "solid",
  color: "666666",
  pt: 1
};
var B = [.05, .1, .05, .1];
var T = {
  color: "363636",
  pt: 1
};
var S = {
  color: "888888",
  style: "solid",
  size: 1,
  cap: "flat"
};
var E = "000000";
var D = "LAYOUT_16x9";
var k = "DEFAULT";
var N = "333333";
var F = {
  type: "outer",
  blur: 3,
  offset: 23e3 / 12700,
  angle: 90,
  color: "000000",
  opacity: .35,
  rotateWithShape: !0
};
var _ = [.5, .5, .5, .5];
var I = {
  color: "000000"
};
var R = {
  size: 8,
  color: "FFFFFF",
  opacity: .75
};
var O = "2094734552";
var M = "2094734553";
var z = "2094734554";
var U = "2094734555";
var j = "2094734556";
var Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var G = ["C0504D", "4F81BD", "9BBB59", "8064A2", "4BACC6", "F79646", "628FC6", "C86360", "C0504D", "4F81BD", "9BBB59", "8064A2", "4BACC6", "F79646", "628FC6", "C86360"];
var Y = ["5DA5DA", "FAA43A", "60BD68", "F17CB0", "B2912F", "B276B2", "DECF3F", "F15854", "A7A7A7", "5DA5DA", "FAA43A", "60BD68", "F17CB0", "B2912F", "B276B2", "DECF3F", "F15854", "A7A7A7"];
!function(e) {
  e.left = "left";
  e.center = "center";
  e.right = "right";
  e.justify = "justify";
}(r || (r = {}));
(function(e) {
  e.b = "b";
  e.ctr = "ctr";
  e.t = "t";
})(n || (n = {}));
var W = "{F7021451-1387-4CA6-816F-3879F97B5CBC}";
!function(e) {
  e.arraybuffer = "arraybuffer";
  e.base64 = "base64";
  e.binarystring = "binarystring";
  e.blob = "blob";
  e.nodebuffer = "nodebuffer";
  e.uint8array = "uint8array";
}(o || (o = {}));
(function(e) {
  e.area = "area";
  e.bar = "bar";
  e.bar3d = "bar3D";
  e.bubble = "bubble";
  e.bubble3d = "bubble3D";
  e.doughnut = "doughnut";
  e.line = "line";
  e.pie = "pie";
  e.radar = "radar";
  e.scatter = "scatter";
})(A || (A = {}));
(function(e) {
  e.accentBorderCallout1 = "accentBorderCallout1";
  e.accentBorderCallout2 = "accentBorderCallout2";
  e.accentBorderCallout3 = "accentBorderCallout3";
  e.accentCallout1 = "accentCallout1";
  e.accentCallout2 = "accentCallout2";
  e.accentCallout3 = "accentCallout3";
  e.actionButtonBackPrevious = "actionButtonBackPrevious";
  e.actionButtonBeginning = "actionButtonBeginning";
  e.actionButtonBlank = "actionButtonBlank";
  e.actionButtonDocument = "actionButtonDocument";
  e.actionButtonEnd = "actionButtonEnd";
  e.actionButtonForwardNext = "actionButtonForwardNext";
  e.actionButtonHelp = "actionButtonHelp";
  e.actionButtonHome = "actionButtonHome";
  e.actionButtonInformation = "actionButtonInformation";
  e.actionButtonMovie = "actionButtonMovie";
  e.actionButtonReturn = "actionButtonReturn";
  e.actionButtonSound = "actionButtonSound";
  e.arc = "arc";
  e.bentArrow = "bentArrow";
  e.bentUpArrow = "bentUpArrow";
  e.bevel = "bevel";
  e.blockArc = "blockArc";
  e.borderCallout1 = "borderCallout1";
  e.borderCallout2 = "borderCallout2";
  e.borderCallout3 = "borderCallout3";
  e.bracePair = "bracePair";
  e.bracketPair = "bracketPair";
  e.callout1 = "callout1";
  e.callout2 = "callout2";
  e.callout3 = "callout3";
  e.can = "can";
  e.chartPlus = "chartPlus";
  e.chartStar = "chartStar";
  e.chartX = "chartX";
  e.chevron = "chevron";
  e.chord = "chord";
  e.circularArrow = "circularArrow";
  e.cloud = "cloud";
  e.cloudCallout = "cloudCallout";
  e.corner = "corner";
  e.cornerTabs = "cornerTabs";
  e.cube = "cube";
  e.curvedDownArrow = "curvedDownArrow";
  e.curvedLeftArrow = "curvedLeftArrow";
  e.curvedRightArrow = "curvedRightArrow";
  e.curvedUpArrow = "curvedUpArrow";
  e.custGeom = "custGeom";
  e.decagon = "decagon";
  e.diagStripe = "diagStripe";
  e.diamond = "diamond";
  e.dodecagon = "dodecagon";
  e.donut = "donut";
  e.doubleWave = "doubleWave";
  e.downArrow = "downArrow";
  e.downArrowCallout = "downArrowCallout";
  e.ellipse = "ellipse";
  e.ellipseRibbon = "ellipseRibbon";
  e.ellipseRibbon2 = "ellipseRibbon2";
  e.flowChartAlternateProcess = "flowChartAlternateProcess";
  e.flowChartCollate = "flowChartCollate";
  e.flowChartConnector = "flowChartConnector";
  e.flowChartDecision = "flowChartDecision";
  e.flowChartDelay = "flowChartDelay";
  e.flowChartDisplay = "flowChartDisplay";
  e.flowChartDocument = "flowChartDocument";
  e.flowChartExtract = "flowChartExtract";
  e.flowChartInputOutput = "flowChartInputOutput";
  e.flowChartInternalStorage = "flowChartInternalStorage";
  e.flowChartMagneticDisk = "flowChartMagneticDisk";
  e.flowChartMagneticDrum = "flowChartMagneticDrum";
  e.flowChartMagneticTape = "flowChartMagneticTape";
  e.flowChartManualInput = "flowChartManualInput";
  e.flowChartManualOperation = "flowChartManualOperation";
  e.flowChartMerge = "flowChartMerge";
  e.flowChartMultidocument = "flowChartMultidocument";
  e.flowChartOfflineStorage = "flowChartOfflineStorage";
  e.flowChartOffpageConnector = "flowChartOffpageConnector";
  e.flowChartOnlineStorage = "flowChartOnlineStorage";
  e.flowChartOr = "flowChartOr";
  e.flowChartPredefinedProcess = "flowChartPredefinedProcess";
  e.flowChartPreparation = "flowChartPreparation";
  e.flowChartProcess = "flowChartProcess";
  e.flowChartPunchedCard = "flowChartPunchedCard";
  e.flowChartPunchedTape = "flowChartPunchedTape";
  e.flowChartSort = "flowChartSort";
  e.flowChartSummingJunction = "flowChartSummingJunction";
  e.flowChartTerminator = "flowChartTerminator";
  e.folderCorner = "folderCorner";
  e.frame = "frame";
  e.funnel = "funnel";
  e.gear6 = "gear6";
  e.gear9 = "gear9";
  e.halfFrame = "halfFrame";
  e.heart = "heart";
  e.heptagon = "heptagon";
  e.hexagon = "hexagon";
  e.homePlate = "homePlate";
  e.horizontalScroll = "horizontalScroll";
  e.irregularSeal1 = "irregularSeal1";
  e.irregularSeal2 = "irregularSeal2";
  e.leftArrow = "leftArrow";
  e.leftArrowCallout = "leftArrowCallout";
  e.leftBrace = "leftBrace";
  e.leftBracket = "leftBracket";
  e.leftCircularArrow = "leftCircularArrow";
  e.leftRightArrow = "leftRightArrow";
  e.leftRightArrowCallout = "leftRightArrowCallout";
  e.leftRightCircularArrow = "leftRightCircularArrow";
  e.leftRightRibbon = "leftRightRibbon";
  e.leftRightUpArrow = "leftRightUpArrow";
  e.leftUpArrow = "leftUpArrow";
  e.lightningBolt = "lightningBolt";
  e.line = "line";
  e.lineInv = "lineInv";
  e.mathDivide = "mathDivide";
  e.mathEqual = "mathEqual";
  e.mathMinus = "mathMinus";
  e.mathMultiply = "mathMultiply";
  e.mathNotEqual = "mathNotEqual";
  e.mathPlus = "mathPlus";
  e.moon = "moon";
  e.noSmoking = "noSmoking";
  e.nonIsoscelesTrapezoid = "nonIsoscelesTrapezoid";
  e.notchedRightArrow = "notchedRightArrow";
  e.octagon = "octagon";
  e.parallelogram = "parallelogram";
  e.pentagon = "pentagon";
  e.pie = "pie";
  e.pieWedge = "pieWedge";
  e.plaque = "plaque";
  e.plaqueTabs = "plaqueTabs";
  e.plus = "plus";
  e.quadArrow = "quadArrow";
  e.quadArrowCallout = "quadArrowCallout";
  e.rect = "rect";
  e.ribbon = "ribbon";
  e.ribbon2 = "ribbon2";
  e.rightArrow = "rightArrow";
  e.rightArrowCallout = "rightArrowCallout";
  e.rightBrace = "rightBrace";
  e.rightBracket = "rightBracket";
  e.round1Rect = "round1Rect";
  e.round2DiagRect = "round2DiagRect";
  e.round2SameRect = "round2SameRect";
  e.roundRect = "roundRect";
  e.rtTriangle = "rtTriangle";
  e.smileyFace = "smileyFace";
  e.snip1Rect = "snip1Rect";
  e.snip2DiagRect = "snip2DiagRect";
  e.snip2SameRect = "snip2SameRect";
  e.snipRoundRect = "snipRoundRect";
  e.squareTabs = "squareTabs";
  e.star10 = "star10";
  e.star12 = "star12";
  e.star16 = "star16";
  e.star24 = "star24";
  e.star32 = "star32";
  e.star4 = "star4";
  e.star5 = "star5";
  e.star6 = "star6";
  e.star7 = "star7";
  e.star8 = "star8";
  e.stripedRightArrow = "stripedRightArrow";
  e.sun = "sun";
  e.swooshArrow = "swooshArrow";
  e.teardrop = "teardrop";
  e.trapezoid = "trapezoid";
  e.triangle = "triangle";
  e.upArrow = "upArrow";
  e.upArrowCallout = "upArrowCallout";
  e.upDownArrow = "upDownArrow";
  e.upDownArrowCallout = "upDownArrowCallout";
  e.uturnArrow = "uturnArrow";
  e.verticalScroll = "verticalScroll";
  e.wave = "wave";
  e.wedgeEllipseCallout = "wedgeEllipseCallout";
  e.wedgeRectCallout = "wedgeRectCallout";
  e.wedgeRoundRectCallout = "wedgeRoundRectCallout";
})(i || (i = {}));
(function(e) {
  e.text1 = "tx1";
  e.text2 = "tx2";
  e.background1 = "bg1";
  e.background2 = "bg2";
  e.accent1 = "accent1";
  e.accent2 = "accent2";
  e.accent3 = "accent3";
  e.accent4 = "accent4";
  e.accent5 = "accent5";
  e.accent6 = "accent6";
})(s || (s = {}));
(function(e) {
  e.left = "left";
  e.center = "center";
  e.right = "right";
  e.justify = "justify";
})(l || (l = {}));
(function(e) {
  e.top = "top";
  e.middle = "middle";
  e.bottom = "bottom";
})(c || (c = {}));
(function(e) {
  e.ACTION_BUTTON_BACK_OR_PREVIOUS = "actionButtonBackPrevious";
  e.ACTION_BUTTON_BEGINNING = "actionButtonBeginning";
  e.ACTION_BUTTON_CUSTOM = "actionButtonBlank";
  e.ACTION_BUTTON_DOCUMENT = "actionButtonDocument";
  e.ACTION_BUTTON_END = "actionButtonEnd";
  e.ACTION_BUTTON_FORWARD_OR_NEXT = "actionButtonForwardNext";
  e.ACTION_BUTTON_HELP = "actionButtonHelp";
  e.ACTION_BUTTON_HOME = "actionButtonHome";
  e.ACTION_BUTTON_INFORMATION = "actionButtonInformation";
  e.ACTION_BUTTON_MOVIE = "actionButtonMovie";
  e.ACTION_BUTTON_RETURN = "actionButtonReturn";
  e.ACTION_BUTTON_SOUND = "actionButtonSound";
  e.ARC = "arc";
  e.BALLOON = "wedgeRoundRectCallout";
  e.BENT_ARROW = "bentArrow";
  e.BENT_UP_ARROW = "bentUpArrow";
  e.BEVEL = "bevel";
  e.BLOCK_ARC = "blockArc";
  e.CAN = "can";
  e.CHART_PLUS = "chartPlus";
  e.CHART_STAR = "chartStar";
  e.CHART_X = "chartX";
  e.CHEVRON = "chevron";
  e.CHORD = "chord";
  e.CIRCULAR_ARROW = "circularArrow";
  e.CLOUD = "cloud";
  e.CLOUD_CALLOUT = "cloudCallout";
  e.CORNER = "corner";
  e.CORNER_TABS = "cornerTabs";
  e.CROSS = "plus";
  e.CUBE = "cube";
  e.CURVED_DOWN_ARROW = "curvedDownArrow";
  e.CURVED_DOWN_RIBBON = "ellipseRibbon";
  e.CURVED_LEFT_ARROW = "curvedLeftArrow";
  e.CURVED_RIGHT_ARROW = "curvedRightArrow";
  e.CURVED_UP_ARROW = "curvedUpArrow";
  e.CURVED_UP_RIBBON = "ellipseRibbon2";
  e.CUSTOM_GEOMETRY = "custGeom";
  e.DECAGON = "decagon";
  e.DIAGONAL_STRIPE = "diagStripe";
  e.DIAMOND = "diamond";
  e.DODECAGON = "dodecagon";
  e.DONUT = "donut";
  e.DOUBLE_BRACE = "bracePair";
  e.DOUBLE_BRACKET = "bracketPair";
  e.DOUBLE_WAVE = "doubleWave";
  e.DOWN_ARROW = "downArrow";
  e.DOWN_ARROW_CALLOUT = "downArrowCallout";
  e.DOWN_RIBBON = "ribbon";
  e.EXPLOSION1 = "irregularSeal1";
  e.EXPLOSION2 = "irregularSeal2";
  e.FLOWCHART_ALTERNATE_PROCESS = "flowChartAlternateProcess";
  e.FLOWCHART_CARD = "flowChartPunchedCard";
  e.FLOWCHART_COLLATE = "flowChartCollate";
  e.FLOWCHART_CONNECTOR = "flowChartConnector";
  e.FLOWCHART_DATA = "flowChartInputOutput";
  e.FLOWCHART_DECISION = "flowChartDecision";
  e.FLOWCHART_DELAY = "flowChartDelay";
  e.FLOWCHART_DIRECT_ACCESS_STORAGE = "flowChartMagneticDrum";
  e.FLOWCHART_DISPLAY = "flowChartDisplay";
  e.FLOWCHART_DOCUMENT = "flowChartDocument";
  e.FLOWCHART_EXTRACT = "flowChartExtract";
  e.FLOWCHART_INTERNAL_STORAGE = "flowChartInternalStorage";
  e.FLOWCHART_MAGNETIC_DISK = "flowChartMagneticDisk";
  e.FLOWCHART_MANUAL_INPUT = "flowChartManualInput";
  e.FLOWCHART_MANUAL_OPERATION = "flowChartManualOperation";
  e.FLOWCHART_MERGE = "flowChartMerge";
  e.FLOWCHART_MULTIDOCUMENT = "flowChartMultidocument";
  e.FLOWCHART_OFFLINE_STORAGE = "flowChartOfflineStorage";
  e.FLOWCHART_OFFPAGE_CONNECTOR = "flowChartOffpageConnector";
  e.FLOWCHART_OR = "flowChartOr";
  e.FLOWCHART_PREDEFINED_PROCESS = "flowChartPredefinedProcess";
  e.FLOWCHART_PREPARATION = "flowChartPreparation";
  e.FLOWCHART_PROCESS = "flowChartProcess";
  e.FLOWCHART_PUNCHED_TAPE = "flowChartPunchedTape";
  e.FLOWCHART_SEQUENTIAL_ACCESS_STORAGE = "flowChartMagneticTape";
  e.FLOWCHART_SORT = "flowChartSort";
  e.FLOWCHART_STORED_DATA = "flowChartOnlineStorage";
  e.FLOWCHART_SUMMING_JUNCTION = "flowChartSummingJunction";
  e.FLOWCHART_TERMINATOR = "flowChartTerminator";
  e.FOLDED_CORNER = "folderCorner";
  e.FRAME = "frame";
  e.FUNNEL = "funnel";
  e.GEAR_6 = "gear6";
  e.GEAR_9 = "gear9";
  e.HALF_FRAME = "halfFrame";
  e.HEART = "heart";
  e.HEPTAGON = "heptagon";
  e.HEXAGON = "hexagon";
  e.HORIZONTAL_SCROLL = "horizontalScroll";
  e.ISOSCELES_TRIANGLE = "triangle";
  e.LEFT_ARROW = "leftArrow";
  e.LEFT_ARROW_CALLOUT = "leftArrowCallout";
  e.LEFT_BRACE = "leftBrace";
  e.LEFT_BRACKET = "leftBracket";
  e.LEFT_CIRCULAR_ARROW = "leftCircularArrow";
  e.LEFT_RIGHT_ARROW = "leftRightArrow";
  e.LEFT_RIGHT_ARROW_CALLOUT = "leftRightArrowCallout";
  e.LEFT_RIGHT_CIRCULAR_ARROW = "leftRightCircularArrow";
  e.LEFT_RIGHT_RIBBON = "leftRightRibbon";
  e.LEFT_RIGHT_UP_ARROW = "leftRightUpArrow";
  e.LEFT_UP_ARROW = "leftUpArrow";
  e.LIGHTNING_BOLT = "lightningBolt";
  e.LINE_CALLOUT_1 = "borderCallout1";
  e.LINE_CALLOUT_1_ACCENT_BAR = "accentCallout1";
  e.LINE_CALLOUT_1_BORDER_AND_ACCENT_BAR = "accentBorderCallout1";
  e.LINE_CALLOUT_1_NO_BORDER = "callout1";
  e.LINE_CALLOUT_2 = "borderCallout2";
  e.LINE_CALLOUT_2_ACCENT_BAR = "accentCallout2";
  e.LINE_CALLOUT_2_BORDER_AND_ACCENT_BAR = "accentBorderCallout2";
  e.LINE_CALLOUT_2_NO_BORDER = "callout2";
  e.LINE_CALLOUT_3 = "borderCallout3";
  e.LINE_CALLOUT_3_ACCENT_BAR = "accentCallout3";
  e.LINE_CALLOUT_3_BORDER_AND_ACCENT_BAR = "accentBorderCallout3";
  e.LINE_CALLOUT_3_NO_BORDER = "callout3";
  e.LINE_CALLOUT_4 = "borderCallout3";
  e.LINE_CALLOUT_4_ACCENT_BAR = "accentCallout3";
  e.LINE_CALLOUT_4_BORDER_AND_ACCENT_BAR = "accentBorderCallout3";
  e.LINE_CALLOUT_4_NO_BORDER = "callout3";
  e.LINE = "line";
  e.LINE_INVERSE = "lineInv";
  e.MATH_DIVIDE = "mathDivide";
  e.MATH_EQUAL = "mathEqual";
  e.MATH_MINUS = "mathMinus";
  e.MATH_MULTIPLY = "mathMultiply";
  e.MATH_NOT_EQUAL = "mathNotEqual";
  e.MATH_PLUS = "mathPlus";
  e.MOON = "moon";
  e.NON_ISOSCELES_TRAPEZOID = "nonIsoscelesTrapezoid";
  e.NOTCHED_RIGHT_ARROW = "notchedRightArrow";
  e.NO_SYMBOL = "noSmoking";
  e.OCTAGON = "octagon";
  e.OVAL = "ellipse";
  e.OVAL_CALLOUT = "wedgeEllipseCallout";
  e.PARALLELOGRAM = "parallelogram";
  e.PENTAGON = "homePlate";
  e.PIE = "pie";
  e.PIE_WEDGE = "pieWedge";
  e.PLAQUE = "plaque";
  e.PLAQUE_TABS = "plaqueTabs";
  e.QUAD_ARROW = "quadArrow";
  e.QUAD_ARROW_CALLOUT = "quadArrowCallout";
  e.RECTANGLE = "rect";
  e.RECTANGULAR_CALLOUT = "wedgeRectCallout";
  e.REGULAR_PENTAGON = "pentagon";
  e.RIGHT_ARROW = "rightArrow";
  e.RIGHT_ARROW_CALLOUT = "rightArrowCallout";
  e.RIGHT_BRACE = "rightBrace";
  e.RIGHT_BRACKET = "rightBracket";
  e.RIGHT_TRIANGLE = "rtTriangle";
  e.ROUNDED_RECTANGLE = "roundRect";
  e.ROUNDED_RECTANGULAR_CALLOUT = "wedgeRoundRectCallout";
  e.ROUND_1_RECTANGLE = "round1Rect";
  e.ROUND_2_DIAG_RECTANGLE = "round2DiagRect";
  e.ROUND_2_SAME_RECTANGLE = "round2SameRect";
  e.SMILEY_FACE = "smileyFace";
  e.SNIP_1_RECTANGLE = "snip1Rect";
  e.SNIP_2_DIAG_RECTANGLE = "snip2DiagRect";
  e.SNIP_2_SAME_RECTANGLE = "snip2SameRect";
  e.SNIP_ROUND_RECTANGLE = "snipRoundRect";
  e.SQUARE_TABS = "squareTabs";
  e.STAR_10_POINT = "star10";
  e.STAR_12_POINT = "star12";
  e.STAR_16_POINT = "star16";
  e.STAR_24_POINT = "star24";
  e.STAR_32_POINT = "star32";
  e.STAR_4_POINT = "star4";
  e.STAR_5_POINT = "star5";
  e.STAR_6_POINT = "star6";
  e.STAR_7_POINT = "star7";
  e.STAR_8_POINT = "star8";
  e.STRIPED_RIGHT_ARROW = "stripedRightArrow";
  e.SUN = "sun";
  e.SWOOSH_ARROW = "swooshArrow";
  e.TEAR = "teardrop";
  e.TRAPEZOID = "trapezoid";
  e.UP_ARROW = "upArrow";
  e.UP_ARROW_CALLOUT = "upArrowCallout";
  e.UP_DOWN_ARROW = "upDownArrow";
  e.UP_DOWN_ARROW_CALLOUT = "upDownArrowCallout";
  e.UP_RIBBON = "ribbon2";
  e.U_TURN_ARROW = "uturnArrow";
  e.VERTICAL_SCROLL = "verticalScroll";
  e.WAVE = "wave";
})(p || (p = {}));
(function(e) {
  e.AREA = "area";
  e.BAR = "bar";
  e.BAR3D = "bar3D";
  e.BUBBLE = "bubble";
  e.BUBBLE3D = "bubble3D";
  e.DOUGHNUT = "doughnut";
  e.LINE = "line";
  e.PIE = "pie";
  e.RADAR = "radar";
  e.SCATTER = "scatter";
})(d || (d = {}));
(function(e) {
  e.TEXT1 = "tx1";
  e.TEXT2 = "tx2";
  e.BACKGROUND1 = "bg1";
  e.BACKGROUND2 = "bg2";
  e.ACCENT1 = "accent1";
  e.ACCENT2 = "accent2";
  e.ACCENT3 = "accent3";
  e.ACCENT4 = "accent4";
  e.ACCENT5 = "accent5";
  e.ACCENT6 = "accent6";
})(f || (f = {}));
(function(e) {
  e.chart = "chart";
  e.image = "image";
  e.line = "line";
  e.rect = "rect";
  e.text = "text";
  e.placeholder = "placeholder";
})(u || (u = {}));
(function(e) {
  e.chart = "chart";
  e.hyperlink = "hyperlink";
  e.image = "image";
  e.media = "media";
  e.online = "online";
  e.placeholder = "placeholder";
  e.table = "table";
  e.tablecell = "tablecell";
  e.text = "text";
  e.notes = "notes";
})(h || (h = {}));
(function(e) {
  e.title = "title";
  e.body = "body";
  e.image = "pic";
  e.chart = "chart";
  e.table = "tbl";
  e.media = "media";
})(m || (m = {}));
(function(e) {
  e.DEFAULT = "&#x2022;";
  e.CHECK = "&#x2713;";
  e.STAR = "&#x2605;";
  e.TRIANGLE = "&#x25B6;";
})(g || (g = {}));
var X = "data:image/png;base64,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";
function H(e, t, a) {
  return ("string" != typeof e || isNaN(Number(e)) || (e = Number(e)), "number" == typeof e && e < 100) ? J(e) : "number" == typeof e && e >= 100 ? e : "string" == typeof e && e.includes("%") ? t && "X" === t ? Math.round(parseFloat(e) / 100 * a.width) : t && "Y" === t ? Math.round(parseFloat(e) / 100 * a.height) : Math.round(parseFloat(e) / 100 * a.width) : 0;
}
function V(e) {
  return e.replace(/[xy]/g, function(e) {
    var t = 16 * Math.random() | 0;
    return ("x" === e ? t : 3 & t | 8).toString(16);
  });
}
function q(e) {
  return void 0 === e || null == e ? "" : e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function J(e) {
  return "number" == typeof e && e > 100 ? e : ("string" == typeof e && (e = Number(e.replace(/in*/gi, ""))), Math.round(914400 * e));
}
function K(e) {
  var t = Number(e) || 0;
  return isNaN(t) ? 0 : Math.round(12700 * t);
}
function Z(e) {
  return Math.round(((e = e || 0) > 360 ? e - 360 : e) * 6e4);
}
function $(e) {
  var t = e.toString(16);
  return 1 === t.length ? "0" + t : t;
}
function ee(e, t, a) {
  return ($(e) + $(t) + $(a)).toUpperCase();
}
function et(e, t) {
  var a = (e || "").replace("#", "");
  P.test(a) || a === s.background1 || a === s.background2 || a === s.text1 || a === s.text2 || a === s.accent1 || a === s.accent2 || a === s.accent3 || a === s.accent4 || a === s.accent5 || a === s.accent6 || (console.warn('"'.concat(a, '" is not a valid scheme color or hex RGB! "').concat(E, "\" used instead. Only provide 6-digit RGB or 'pptx.SchemeColor' values!")), a = E);
  var r = P.test(a) ? "srgbClr" : "schemeClr";
  var n = 'val="' + (P.test(a) ? a.toUpperCase() : a) + '"';
  return t ? "<a:".concat(r, " ").concat(n, ">").concat(t, "</a:").concat(r, ">") : "<a:".concat(r, " ").concat(n, "/>");
}
function ea(e) {
  var t = "solid";
  var a = "";
  var r = "";
  var n = "";
  e && (("string" == typeof e ? a = e : (e.type && (t = e.type), e.color && (a = e.color), e.alpha && (r += '<a:alpha val="'.concat(Math.round((100 - e.alpha) * 1e3), '"/>')), e.transparency && (r += '<a:alpha val="'.concat(Math.round((100 - e.transparency) * 1e3), '"/>'))), "solid" === t) ? n += "<a:solidFill>".concat(et(a, r), "</a:solidFill>") : n += "");
  return n;
}
function er(e) {
  return e._rels.length + e._relsChart.length + e._relsMedia.length + 1;
}
function en(e) {
  if (e && "object" == typeof e) {
    "outer" !== e.type && "inner" !== e.type && "none" !== e.type && (console.warn("Warning: shadow.type options are `outer`, `inner` or `none`."), e.type = "outer");
    e.angle && ((isNaN(Number(e.angle)) || e.angle < 0 || e.angle > 359) && (console.warn("Warning: shadow.angle can only be 0-359"), e.angle = 270), e.angle = Math.round(Number(e.angle)));
    e.opacity && ((isNaN(Number(e.opacity)) || e.opacity < 0 || e.opacity > 1) && (console.warn("Warning: shadow.opacity can only be 0-1"), e.opacity = .75), e.opacity = Number(e.opacity));
    e.color && e.color.startsWith("#") && (console.warn('Warning: shadow.color should not include hash (#) character, , e.g. "FF0000"'), e.color = e.color.replace("#", ""));
    return e;
  }
}
function eo(e, t, a, r) {
  void 0 === e && (e = []);
  void 0 === t && (t = {});
  var n = _;
  var o = 914400;
  var A = 914400;
  var i = 0;
  var s = 0;
  var l = [];
  var c = H(t.x, "X", a);
  var p = H(t.y, "Y", a);
  var d = H(t.w, "X", a);
  var f = H(t.h, "Y", a);
  var u = d;
  function m() {
    var e = 0;
    0 === l.length && (e = p || J(n[0]));
    l.length > 0 && (e = J(t.autoPageSlideStartY || t.newSlideStartY || n[0]));
    A = (f || a.height) - e - J(n[2]);
    l.length > 1 && ("number" == typeof t.autoPageSlideStartY ? A = (f || a.height) - J(t.autoPageSlideStartY + n[2]) : "number" == typeof t.newSlideStartY ? A = (f || a.height) - J(t.newSlideStartY + n[2]) : p && (A = (f || a.height) - J((p / 914400 < n[0] ? p / 914400 : n[0]) + n[2])) < f && (A = f));
  }
  t.verbose && (console.log("[[VERBOSE MODE]]"), console.log("|-- TABLE PROPS --------------------------------------------------------|"), console.log("| presLayout.width ................................ = ".concat((a.width / 914400).toFixed(1))), console.log("| presLayout.height ............................... = ".concat((a.height / 914400).toFixed(1))), console.log("| tableProps.x .................................... = ".concat("number" == typeof t.x ? (t.x / 914400).toFixed(1) : t.x)), console.log("| tableProps.y .................................... = ".concat("number" == typeof t.y ? (t.y / 914400).toFixed(1) : t.y)), console.log("| tableProps.w .................................... = ".concat("number" == typeof t.w ? (t.w / 914400).toFixed(1) : t.w)), console.log("| tableProps.h .................................... = ".concat("number" == typeof t.h ? (t.h / 914400).toFixed(1) : t.h)), console.log("| tableProps.slideMargin .......................... = ".concat(t.slideMargin ? String(t.slideMargin) : "")), console.log("| tableProps.margin ............................... = ".concat(String(t.margin))), console.log("| tableProps.colW ................................. = ".concat(String(t.colW))), console.log("| tableProps.autoPageSlideStartY .................. = ".concat(t.autoPageSlideStartY)), console.log("| tableProps.autoPageCharWeight ................... = ".concat(t.autoPageCharWeight)), console.log("|-- CALCULATIONS -------------------------------------------------------|"), console.log("| tablePropX ...................................... = ".concat(c / 914400)), console.log("| tablePropY ...................................... = ".concat(p / 914400)), console.log("| tablePropW ...................................... = ".concat(d / 914400)), console.log("| tablePropH ...................................... = ".concat(f / 914400)), console.log("| tableCalcW ...................................... = ".concat(u / 914400)));
  t.slideMargin || 0 === t.slideMargin || (t.slideMargin = _[0]);
  r && void 0 !== r._margin ? Array.isArray(r._margin) ? n = r._margin : isNaN(Number(r._margin)) || (n = [Number(r._margin), Number(r._margin), Number(r._margin), Number(r._margin)]) : (t.slideMargin || 0 === t.slideMargin) && (Array.isArray(t.slideMargin) ? n = t.slideMargin : isNaN(t.slideMargin) || (n = [t.slideMargin, t.slideMargin, t.slideMargin, t.slideMargin]));
  t.verbose && console.log("| arrInchMargins .................................. = [".concat(n.join(", "), "]"));
  var g = e[0] || [];
  if (g.forEach(function(e) {
    e || (e = {
      _type: h.tablecell
    });
    var t = e.options || null;
    s += Number(t?.colspan ? t.colspan : 1);
  }), t.verbose && console.log("| numCols ......................................... = ".concat(s)), !d && t.colW && (u = Array.isArray(t.colW) ? 914400 * t.colW.reduce(function(e, t) {
    return e + t;
  }) : t.colW * s || 0, t.verbose && console.log("| tableCalcW ...................................... = ".concat(u / 914400))), o = u || J((c ? c / 914400 : n[1]) + n[3]), t.verbose && console.log("| emuSlideTabW .................................... = ".concat((o / 914400).toFixed(1))), !t.colW || !Array.isArray(t.colW)) {
    if (t.colW && !isNaN(Number(t.colW))) {
      var v = [];
      var g = e[0] || [];
      g.forEach(function() {
        return v.push(t.colW);
      });
      t.colW = [];
      v.forEach(function(e) {
        Array.isArray(t.colW) && t.colW.push(e);
      });
    } else {
      t.colW = [];
      for (var b = 0; b < s; b++) t.colW.push(o / 914400 / s);
    }
  }
  var x = {
    rows: []
  };
  e.forEach(function(e, a) {
    var r = [];
    var n = 0;
    var o = 0;
    var s = [];
    e.forEach(function(e) {
      var a;
      var r;
      var A;
      var i;
      s.push({
        _type: h.tablecell,
        text: [],
        options: e.options
      });
      e.options.margin && e.options.margin[0] >= 1 ? (e.options?.margin && e.options.margin[0] && K(e.options.margin[0]) > n ? n = K(e.options.margin[0]) : t?.margin && t.margin[0] && K(t.margin[0]) > n && (n = K(t.margin[0])), e.options?.margin && e.options.margin[2] && K(e.options.margin[2]) > o ? o = K(e.options.margin[2]) : t?.margin && t.margin[2] && K(t.margin[2]) > o && (o = K(t.margin[2]))) : (e.options?.margin && e.options.margin[0] && J(e.options.margin[0]) > n ? n = J(e.options.margin[0]) : t?.margin && t.margin[0] && J(t.margin[0]) > n && (n = J(t.margin[0])), e.options?.margin && e.options.margin[2] && J(e.options.margin[2]) > o ? o = J(e.options.margin[2]) : t?.margin && t.margin[2] && J(t.margin[2]) > o && (o = J(t.margin[2])));
    });
    m();
    i += n + o;
    t.verbose && 0 === a && console.log("| SLIDE [".concat(l.length, "]: emuSlideTabH ...... = ").concat((A / 914400).toFixed(1), " "));
    e.forEach(function(e, a) {
      var n;
      var o;
      var A;
      var i;
      var s;
      var l;
      var c;
      var p;
      var d;
      var f;
      var u;
      var m = {
        _type: h.tablecell,
        _lines: null,
        _lineHeight: J((e.options?.fontSize ? e.options.fontSize : t.fontSize ? t.fontSize : 12) * (1.67 + (t.autoPageLineWeight ? t.autoPageLineWeight : 0)) / 100),
        text: [],
        options: e.options
      };
      m.options.rowspan && (m._lineHeight = 0);
      m.options.autoPageCharWeight = t.autoPageCharWeight ? t.autoPageCharWeight : null;
      var g = t.colW[a];
      e.options.colspan && Array.isArray(t.colW) && (g = t.colW.filter(function(t, r) {
        return r >= a && r < r + e.options.colspan;
      }).reduce(function(e, t) {
        return e + t;
      }));
      m._lines = (n = g, i = 2.3 + (e.options?.autoPageCharWeight ? e.options.autoPageCharWeight : 0), s = Math.floor(n / 12700 * 914400) / ((e.options?.fontSize ? e.options.fontSize : 12) / i), l = [], c = [], p = [], d = [], e.text && 0 === e.text.toString().trim().length ? c.push({
        _type: h.tablecell,
        text: " "
      }) : "number" == typeof e.text || "string" == typeof e.text ? c.push({
        _type: h.tablecell,
        text: (e.text || "").toString().trim()
      }) : Array.isArray(e.text) && (c = e.text), f = [], c.forEach(function(e) {
        var t;
        "string" == typeof e.text && (e.text.split("\n").length > 1 ? e.text.split("\n").forEach(function(t) {
          f.push({
            _type: h.tablecell,
            text: t,
            options: y(y({}, e.options), {
              breakLine: !0
            })
          });
        }) : f.push({
          _type: h.tablecell,
          text: e.text.trim(),
          options: e.options
        }), e.options?.breakLine && (p.push(f), f = []));
        f.length > 0 && (p.push(f), f = []);
      }), p.forEach(function(e) {
        e.forEach(function(e) {
          var t = [];
          var a = String(e.text).split(" ");
          a.forEach(function(r, n) {
            var o = y({}, e.options);
            o?.breakLine && (o.breakLine = n + 1 === a.length);
            t.push({
              _type: h.tablecell,
              text: r + (n + 1 < a.length ? " " : ""),
              options: o
            });
          });
          d.push(t);
        });
      }), d.forEach(function(e) {
        var t = [];
        var a = "";
        e.forEach(function(e) {
          a.length + e.text.length > s && (l.push(t), t = [], a = "");
          t.push(e);
          a += e.text.toString();
        });
        t.length > 0 && l.push(t);
      }), l);
      r.push(m);
    });
    t.verbose && console.log("\n| SLIDE [".concat(l.length, "]: ROW [").concat(a, "]: START..."));
    for (c = 0, p = 0, d = !1, void 0; !d;) {
      var c;
      var p;
      var d;
      var f = r[c];
      var u = s[c];
      r.forEach(function(e) {
        e._lineHeight >= p && (p = e._lineHeight);
      });
      i + p > A && (t.verbose && (console.log("\n|-----------------------------------------------------------------------|"), console.log("|-- NEW SLIDE CREATED (currTabH+currLineH > maxH) => ".concat((i / 914400).toFixed(2), " + ").concat((f._lineHeight / 914400).toFixed(2), " > ").concat(A / 914400)), console.log("|-----------------------------------------------------------------------|\n\n")), s.length > 0 && s.map(function(e) {
        return e.text.length;
      }).reduce(function(e, t) {
        return e + t;
      }) > 0 && x.rows.push(s), l.push(x), x = {
        rows: []
      }, s = [], e.forEach(function(e) {
        return s.push({
          _type: h.tablecell,
          text: [],
          options: e.options
        });
      }), m(), i += n + o, t.verbose && console.log("| SLIDE [".concat(l.length, "]: emuSlideTabH ...... = ").concat((A / 914400).toFixed(1), " ")), i = 0, (t.addHeaderToEach || t.autoPageRepeatHeader) && t._arrObjTabHeadRows && t._arrObjTabHeadRows.forEach(function(e) {
        var t = [];
        var a = 0;
        e.forEach(function(e) {
          t.push(e);
          e._lineHeight > a && (a = e._lineHeight);
        });
        x.rows.push(t);
        i += a;
      }), u = s[c]);
      var g = f._lines.shift();
      Array.isArray(u.text) && (g ? u.text = u.text.concat(g) : 0 === u.text.length && (u.text = u.text.concat({
        _type: h.tablecell,
        text: ""
      })));
      c === r.length - 1 && (i += p);
      c = c < r.length - 1 ? c + 1 : 0;
      0 === r.map(function(e) {
        return e._lines.length;
      }).reduce(function(e, t) {
        return e + t;
      }) && (d = !0);
    }
    s.length > 0 && x.rows.push(s);
    t.verbose && console.log("- SLIDE [".concat(l.length, "]: ROW [").concat(a, "]: ...COMPLETE ...... emuTabCurrH = ").concat((i / 914400).toFixed(2), " ( emuSlideTabH = ").concat((A / 914400).toFixed(2), " )"));
  });
  l.push(x);
  t.verbose && (console.log("\n|================================================|"), console.log("| FINAL: tableRowSlides.length = ".concat(l.length)), l.forEach(function(e) {
    return console.log(e);
  }), console.log("|================================================|\n\n"));
  return l;
}
var eA = 0;
function ei(e, t, a, r) {
  function n(e) {
    e && "none" !== e.style && (void 0 !== e.size && (isNaN(Number(e.size)) || e.size <= 0) && (console.warn("Warning: chart.gridLine.size must be greater than 0."), delete e.size), e.style && !["solid", "dash", "dot"].includes(e.style) && (console.warn("Warning: chart.gridLine.style options: `solid`, `dash`, `dot`."), delete e.style), e.cap && !["flat", "square", "round"].includes(e.cap) && (console.warn("Warning: chart.gridLine.cap options: `flat`, `square`, `round`."), delete e.cap));
  }
  var o;
  var A = ++eA;
  var i = {
    _type: null,
    text: null,
    options: null,
    chartRid: null
  };
  var s = null;
  var l = [];
  Array.isArray(t) ? (t.forEach(function(e) {
    l = l.concat(e.data);
  }), s = a || r) : (l = a, s = r);
  l.forEach(function(e, t) {
    e._dataIndex = t;
    void 0 === e.labels || Array.isArray(e.labels[0]) || (e.labels = [e.labels]);
  });
  var c = s && "object" == typeof s ? s : {};
  c._type = t;
  c.x = void 0 === c.x || null == c.x || isNaN(Number(c.x)) ? 1 : c.x;
  c.y = void 0 === c.y || null == c.y || isNaN(Number(c.y)) ? 1 : c.y;
  c.w = c.w || "50%";
  c.h = c.h || "50%";
  c.objectName = c.objectName ? q(c.objectName) : "Chart ".concat(e._slideObjects.filter(function(e) {
    return e._type === h.chart;
  }).length);
  ["bar", "col"].includes(c.barDir || "") || (c.barDir = "col");
  c._type !== d.AREA || ["stacked", "standard", "percentStacked"].includes(c.barGrouping || "") || (c.barGrouping = "standard");
  c._type !== d.BAR || ["clustered", "stacked", "percentStacked"].includes(c.barGrouping || "") || (c.barGrouping = "clustered");
  c._type !== d.BAR3D || ["clustered", "stacked", "standard", "percentStacked"].includes(c.barGrouping || "") || (c.barGrouping = "standard");
  c.barGrouping?.includes("tacked") && !c.barGapWidthPct && (c.barGapWidthPct = 50);
  !c.dataLabelPosition || ((c._type === d.AREA || c._type === d.BAR3D || c._type === d.DOUGHNUT || c._type === d.RADAR) && delete c.dataLabelPosition, c._type !== d.PIE || ["bestFit", "ctr", "inEnd", "outEnd"].includes(c.dataLabelPosition) || delete c.dataLabelPosition, c._type !== d.BUBBLE && c._type !== d.BUBBLE3D && c._type !== d.LINE && c._type !== d.SCATTER || ["b", "ctr", "l", "r", "t"].includes(c.dataLabelPosition) || delete c.dataLabelPosition, c._type !== d.BAR || (["stacked", "percentStacked"].includes(c.barGrouping || "") || ["ctr", "inBase", "inEnd"].includes(c.dataLabelPosition) || delete c.dataLabelPosition, ["clustered"].includes(c.barGrouping || "") || ["ctr", "inBase", "inEnd", "outEnd"].includes(c.dataLabelPosition) || delete c.dataLabelPosition));
  c.dataLabelBkgrdColors = (!!c.dataLabelBkgrdColors || !c.dataLabelBkgrdColors) && c.dataLabelBkgrdColors;
  ["b", "l", "r", "t", "tr"].includes(c.legendPos || "") || (c.legendPos = "r");
  ["cone", "coneToMax", "box", "cylinder", "pyramid", "pyramidToMax"].includes(c.bar3DShape || "") || (c.bar3DShape = "box");
  ["circle", "dash", "diamond", "dot", "none", "square", "triangle"].includes(c.lineDataSymbol || "") || (c.lineDataSymbol = "circle");
  ["gap", "span"].includes(c.displayBlanksAs || "") || (c.displayBlanksAs = "span");
  ["standard", "marker", "filled"].includes(c.radarStyle || "") || (c.radarStyle = "standard");
  c.lineDataSymbolSize = c.lineDataSymbolSize && !isNaN(c.lineDataSymbolSize) ? c.lineDataSymbolSize : 6;
  c.lineDataSymbolLineSize = c.lineDataSymbolLineSize && !isNaN(c.lineDataSymbolLineSize) ? K(c.lineDataSymbolLineSize) : K(.75);
  c.layout && ["x", "y", "w", "h"].forEach(function(e) {
    var t = c.layout[e];
    (isNaN(Number(t)) || t < 0 || t > 1) && (console.warn("Warning: chart.layout." + e + " can only be 0-1"), delete c.layout[e]);
  });
  c.catGridLine = c.catGridLine || (c._type === d.SCATTER ? {
    color: "D9D9D9",
    size: 1
  } : {
    style: "none"
  });
  c.valGridLine = c.valGridLine || (c._type === d.SCATTER ? {
    color: "D9D9D9",
    size: 1
  } : {});
  c.serGridLine = c.serGridLine || (c._type === d.SCATTER ? {
    color: "D9D9D9",
    size: 1
  } : {
    style: "none"
  });
  n(c.catGridLine);
  n(c.valGridLine);
  n(c.serGridLine);
  en(c.shadow);
  c.showDataTable = (!!c.showDataTable || !c.showDataTable) && c.showDataTable;
  c.showDataTableHorzBorder = !c.showDataTableHorzBorder && !!c.showDataTableHorzBorder || c.showDataTableHorzBorder;
  c.showDataTableVertBorder = !c.showDataTableVertBorder && !!c.showDataTableVertBorder || c.showDataTableVertBorder;
  c.showDataTableOutline = !c.showDataTableOutline && !!c.showDataTableOutline || c.showDataTableOutline;
  c.showDataTableKeys = !c.showDataTableKeys && !!c.showDataTableKeys || c.showDataTableKeys;
  c.showLabel = (!!c.showLabel || !c.showLabel) && c.showLabel;
  c.showLegend = (!!c.showLegend || !c.showLegend) && c.showLegend;
  c.showPercent = !c.showPercent && !!c.showPercent || c.showPercent;
  c.showTitle = (!!c.showTitle || !c.showTitle) && c.showTitle;
  c.showValue = (!!c.showValue || !c.showValue) && c.showValue;
  c.showLeaderLines = (!!c.showLeaderLines || !c.showLeaderLines) && c.showLeaderLines;
  c.catAxisLineShow = void 0 === c.catAxisLineShow || c.catAxisLineShow;
  c.valAxisLineShow = void 0 === c.valAxisLineShow || c.valAxisLineShow;
  c.serAxisLineShow = void 0 === c.serAxisLineShow || c.serAxisLineShow;
  c.v3DRotX = !isNaN(c.v3DRotX) && c.v3DRotX >= -90 && c.v3DRotX <= 90 ? c.v3DRotX : 30;
  c.v3DRotY = !isNaN(c.v3DRotY) && c.v3DRotY >= 0 && c.v3DRotY <= 360 ? c.v3DRotY : 30;
  c.v3DRAngAx = !c.v3DRAngAx && !!c.v3DRAngAx || c.v3DRAngAx;
  c.v3DPerspective = !isNaN(c.v3DPerspective) && c.v3DPerspective >= 0 && c.v3DPerspective <= 240 ? c.v3DPerspective : 30;
  c.barGapWidthPct = !isNaN(c.barGapWidthPct) && c.barGapWidthPct >= 0 && c.barGapWidthPct <= 1e3 ? c.barGapWidthPct : 150;
  c.barGapDepthPct = !isNaN(c.barGapDepthPct) && c.barGapDepthPct >= 0 && c.barGapDepthPct <= 1e3 ? c.barGapDepthPct : 150;
  c.chartColors = Array.isArray(c.chartColors) ? c.chartColors : c._type === d.PIE || c._type === d.DOUGHNUT ? Y : G;
  c.chartColorsOpacity = c.chartColorsOpacity && !isNaN(c.chartColorsOpacity) ? c.chartColorsOpacity : null;
  c.border = c.border && "object" == typeof c.border ? c.border : null;
  c.border && (!c.border.pt || isNaN(c.border.pt)) && (c.border.pt = T.pt);
  c.border && (!c.border.color || "string" != typeof c.border.color) && (c.border.color = T.color);
  c.plotArea = c.plotArea || {};
  c.plotArea.border = c.plotArea.border && "object" == typeof c.plotArea.border ? c.plotArea.border : null;
  c.plotArea.border && (!c.plotArea.border.pt || isNaN(c.plotArea.border.pt)) && (c.plotArea.border.pt = T.pt);
  c.plotArea.border && (!c.plotArea.border.color || "string" != typeof c.plotArea.border.color) && (c.plotArea.border.color = T.color);
  c.border && (c.plotArea.border = c.border);
  c.plotArea.fill = c.plotArea.fill || {
    color: null,
    transparency: null
  };
  c.fill && (c.plotArea.fill.color = c.fill);
  c.chartArea = c.chartArea || {};
  c.chartArea.border = c.chartArea.border && "object" == typeof c.chartArea.border ? c.chartArea.border : null;
  c.chartArea.border && (c.chartArea.border = {
    color: c.chartArea.border.color || T.color,
    pt: c.chartArea.border.pt || T.pt
  });
  c.chartArea.roundedCorners = "boolean" != typeof c.chartArea.roundedCorners || c.chartArea.roundedCorners;
  c.dataBorder = c.dataBorder && "object" == typeof c.dataBorder ? c.dataBorder : null;
  c.dataBorder && (!c.dataBorder.pt || isNaN(c.dataBorder.pt)) && (c.dataBorder.pt = .75);
  c.dataBorder && (!c.dataBorder.color || "string" != typeof c.dataBorder.color || 6 !== c.dataBorder.color.length) && (c.dataBorder.color = "F9F9F9");
  c.dataLabelFormatCode || c._type !== d.SCATTER || (c.dataLabelFormatCode = "General");
  c.dataLabelFormatCode || c._type !== d.PIE && c._type !== d.DOUGHNUT || (c.dataLabelFormatCode = c.showPercent ? "0%" : "General");
  c.dataLabelFormatCode = c.dataLabelFormatCode && "string" == typeof c.dataLabelFormatCode ? c.dataLabelFormatCode : "#,##0";
  c.dataLabelFormatScatter || c._type !== d.SCATTER || (c.dataLabelFormatScatter = "custom");
  c.lineSize = "number" == typeof c.lineSize ? c.lineSize : 2;
  c.valAxisMajorUnit = "number" == typeof c.valAxisMajorUnit ? c.valAxisMajorUnit : null;
  c._type === d.AREA || c._type === d.BAR || c._type === d.BAR3D || c._type === d.LINE ? c.catAxisMultiLevelLabels = !!c.catAxisMultiLevelLabels : delete c.catAxisMultiLevelLabels;
  i._type = "chart";
  i.options = c;
  i.chartRid = er(e);
  e._relsChart.push({
    rId: er(e),
    data: l,
    opts: c,
    type: c._type,
    globalId: A,
    fileName: "chart".concat(A, ".xml"),
    Target: "/ppt/charts/chart".concat(A, ".xml")
  });
  e._slideObjects.push(i);
  return i;
}
function es(e, t) {
  var a = {
    _type: null,
    text: null,
    options: null,
    image: null,
    imageRid: null,
    hyperlink: null
  };
  var r = t.x || 0;
  var n = t.y || 0;
  var o = t.w || 0;
  var A = t.h || 0;
  var i = t.sizing || null;
  var s = t.hyperlink || "";
  var l = t.data || "";
  var c = t.path || "";
  var p = er(e);
  var d = t.objectName ? q(t.objectName) : "Image ".concat(e._slideObjects.filter(function(e) {
    return e._type === h.image;
  }).length);
  if (!c && !l) {
    console.error("ERROR: addImage() requires either 'data' or 'path' parameter!");
    return null;
  }
  if (c && "string" != typeof c) {
    console.error("ERROR: addImage() 'path' should be a string, ex: {path:'/img/sample.png'} - you sent ".concat(String(c)));
    return null;
  }
  if (l && "string" != typeof l) {
    console.error("ERROR: addImage() 'data' should be a string, ex: {data:'image/png;base64,NMP[...]'} - you sent ".concat(String(l)));
    return null;
  }
  if (l && "string" == typeof l && !l.toLowerCase().includes("base64,")) {
    console.error("ERROR: Image `data` value lacks a base64 header! Ex: 'image/png;base64,NMP[...]')");
    return null;
  }
  var f = (c.substring(c.lastIndexOf("/") + 1).split("?")[0].split(".").pop().split("#")[0] || "png").toLowerCase();
  if (l && /image\/(\w+);/.exec(l) && /image\/(\w+);/.exec(l).length > 0 ? f = /image\/(\w+);/.exec(l)[1] : l?.toLowerCase().includes("image/svg+xml") && (f = "svg"), a._type = h.image, a.image = c || "preencoded.png", a.options = {
    x: r || 0,
    y: n || 0,
    w: o || 1,
    h: A || 1,
    altText: t.altText || "",
    rounding: "boolean" == typeof t.rounding && t.rounding,
    sizing: i,
    placeholder: t.placeholder,
    rotate: t.rotate || 0,
    flipV: t.flipV || !1,
    flipH: t.flipH || !1,
    transparency: t.transparency || 0,
    objectName: d,
    shadow: en(t.shadow)
  }, "svg" === f) {
    e._relsMedia.push({
      path: c || l + "png",
      type: "image/png",
      extn: "png",
      data: l || "",
      rId: p,
      Target: "../media/image-".concat(e._slideNum, "-").concat(e._relsMedia.length + 1, ".png"),
      isSvgPng: !0,
      svgSize: {
        w: H(a.options.w, "X", e._presLayout),
        h: H(a.options.h, "Y", e._presLayout)
      }
    });
    a.imageRid = p;
    e._relsMedia.push({
      path: c || l,
      type: "image/svg+xml",
      extn: f,
      data: l || "",
      rId: p + 1,
      Target: "../media/image-".concat(e._slideNum, "-").concat(e._relsMedia.length + 1, ".").concat(f)
    });
    a.imageRid = p + 1;
  } else {
    var u = e._relsMedia.filter(function(e) {
      return e.path && e.path === c && e.type === "image/" + f && !e.isDuplicate;
    })[0];
    e._relsMedia.push({
      path: c || "preencoded." + f,
      type: "image/" + f,
      extn: f,
      data: l || "",
      rId: p,
      isDuplicate: !!u?.Target,
      Target: u?.Target ? u.Target : "../media/image-".concat(e._slideNum, "-").concat(e._relsMedia.length + 1, ".").concat(f)
    });
    a.imageRid = p;
  }
  if ("object" == typeof s) {
    if (s.url || s.slide) {
      p++;
      e._rels.push({
        type: h.hyperlink,
        data: s.slide ? "slide" : "dummy",
        rId: p,
        Target: s.url || s.slide.toString()
      });
      s._rId = p;
      a.hyperlink = s;
    } else throw Error("ERROR: `hyperlink` option requires either: `url` or `slide`");
  }
  e._slideObjects.push(a);
}
function el(e, t, a) {
  var r = "object" == typeof a ? a : {};
  r.line = r.line || {
    type: "none"
  };
  var n = {
    _type: h.text,
    shape: t || p.RECTANGLE,
    options: r,
    text: null
  };
  if (!t) throw Error("Missing/Invalid shape parameter! Example: `addShape(pptxgen.shapes.LINE, {x:1, y:1, w:1, h:1});`");
  var o = {
    type: r.line.type || "solid",
    color: r.line.color || N,
    transparency: r.line.transparency || 0,
    width: r.line.width || 1,
    dashType: r.line.dashType || "solid",
    beginArrowType: r.line.beginArrowType || null,
    endArrowType: r.line.endArrowType || null
  };
  "object" == typeof r.line && "none" !== r.line.type && (r.line = o);
  r.x = r.x || (0 === r.x ? 0 : 1);
  r.y = r.y || (0 === r.y ? 0 : 1);
  r.w = r.w || (0 === r.w ? 0 : 1);
  r.h = r.h || (0 === r.h ? 0 : 1);
  r.objectName = r.objectName ? q(r.objectName) : "Shape ".concat(e._slideObjects.filter(function(e) {
    return e._type === h.text;
  }).length);
  "string" == typeof r.line && (o.color = String(r.line), r.line = o);
  "number" == typeof r.lineSize && (r.line.width = r.lineSize);
  "string" == typeof r.lineDash && (r.line.dashType = r.lineDash);
  "string" == typeof r.lineHead && (r.line.beginArrowType = r.lineHead);
  "string" == typeof r.lineTail && (r.line.endArrowType = r.lineTail);
  ed(e, n);
  e._slideObjects.push(n);
}
function ec(e, t, a, o) {
  var A = {
    _type: o ? h.placeholder : h.text,
    shape: a?.shape || p.RECTANGLE,
    text: t && 0 !== t.length ? t : [{
      text: "",
      options: null
    }],
    options: a || {}
  };
  function i(t) {
    if (t.placeholder || (t.color = t.color || A.options.color || e.color || E), (t.placeholder || o) && (t.bullet = t.bullet || !1), t.placeholder && e._slideLayout && e._slideLayout._slideObjects) {
      var a = e._slideLayout._slideObjects.filter(function(e) {
        return "placeholder" === e._type && e.options && e.options.placeholder && e.options.placeholder === t.placeholder;
      })[0];
      a?.options && (t = y(y({}, t), a.options));
    }
    if (t.objectName = t.objectName ? q(t.objectName) : "Text ".concat(e._slideObjects.filter(function(e) {
      return e._type === h.text;
    }).length), t.shape === p.LINE) {
      var i = {
        type: t.line.type || "solid",
        color: t.line.color || N,
        transparency: t.line.transparency || 0,
        width: t.line.width || 1,
        dashType: t.line.dashType || "solid",
        beginArrowType: t.line.beginArrowType || null,
        endArrowType: t.line.endArrowType || null
      };
      "object" == typeof t.line && (t.line = i);
      "string" == typeof t.line && ("string" == typeof t.line && (i.color = t.line), t.line = i);
      "number" == typeof t.lineSize && (t.line.width = t.lineSize);
      "string" == typeof t.lineDash && (t.line.dashType = t.lineDash);
      "string" == typeof t.lineHead && (t.line.beginArrowType = t.lineHead);
      "string" == typeof t.lineTail && (t.line.endArrowType = t.lineTail);
    }
    t.line = t.line || {};
    t.lineSpacing = t.lineSpacing && !isNaN(t.lineSpacing) ? t.lineSpacing : null;
    t.lineSpacingMultiple = t.lineSpacingMultiple && !isNaN(t.lineSpacingMultiple) ? t.lineSpacingMultiple : null;
    t._bodyProp = t._bodyProp || {};
    t._bodyProp.autoFit = t.autoFit || !1;
    t._bodyProp.anchor = t.placeholder ? null : n.ctr;
    t._bodyProp.vert = t.vert || null;
    t._bodyProp.wrap = "boolean" != typeof t.wrap || t.wrap;
    (t.inset && !isNaN(Number(t.inset)) || 0 === t.inset) && (t._bodyProp.lIns = J(t.inset), t._bodyProp.rIns = J(t.inset), t._bodyProp.tIns = J(t.inset), t._bodyProp.bIns = J(t.inset));
    "boolean" == typeof t.underline && !0 === t.underline && (t.underline = {
      style: "sng"
    });
    0 === (t.align || "").toLowerCase().indexOf("c") ? t._bodyProp.align = r.center : 0 === (t.align || "").toLowerCase().indexOf("l") ? t._bodyProp.align = r.left : 0 === (t.align || "").toLowerCase().indexOf("r") ? t._bodyProp.align = r.right : 0 === (t.align || "").toLowerCase().indexOf("j") && (t._bodyProp.align = r.justify);
    0 === (t.valign || "").toLowerCase().indexOf("b") ? t._bodyProp.anchor = n.b : 0 === (t.valign || "").toLowerCase().indexOf("m") ? t._bodyProp.anchor = n.ctr : 0 === (t.valign || "").toLowerCase().indexOf("t") && (t._bodyProp.anchor = n.t);
    en(t.shadow);
    return t;
  }
  A.options = i(A.options);
  A.text.forEach(function(e) {
    return e.options = i(e.options || {});
  });
  ed(e, A.text || "");
  e._slideObjects.push(A);
}
function ep(e, t) {
  var a;
  if (t.bkgd && (t.background || (t.background = {}), "string" == typeof t.bkgd ? t.background.color = t.bkgd : (t.bkgd.data && (t.background.data = t.bkgd.data), t.bkgd.path && (t.background.path = t.bkgd.path), t.bkgd.src && (t.background.path = t.bkgd.src))), t.background?.fill && (t.background.color = t.background.fill), e && (e.path || e.data)) {
    e.path = e.path || "preencoded.png";
    var r = (e.path.split(".").pop() || "png").split("?")[0];
    "jpg" === r && (r = "jpeg");
    t._relsMedia = t._relsMedia || [];
    var n = t._relsMedia.length + 1;
    t._relsMedia.push({
      path: e.path,
      type: h.image,
      extn: r,
      data: e.data || null,
      rId: n,
      Target: "../media/".concat((t._name || "").replace(/\s+/gi, "-"), "-image-").concat(t._relsMedia.length + 1, ".").concat(r)
    });
    t._bkgdImgRid = n;
  }
}
function ed(e, t) {
  var a = [];
  "string" != typeof t && "number" != typeof t && (Array.isArray(t) ? a = t : "object" == typeof t && (a = [t]), a.forEach(function(t) {
    if (Array.isArray(t)) ed(e, t); else if (Array.isArray(t.text)) ed(e, t.text); else if (t && "object" == typeof t && t.options && t.options.hyperlink && !t.options.hyperlink._rId) {
      if ("object" != typeof t.options.hyperlink) console.log("ERROR: text `hyperlink` option should be an object. Ex: `hyperlink: {url:'https://github.com'}` "); else if (t.options.hyperlink.url || t.options.hyperlink.slide) {
        var a = er(e);
        e._rels.push({
          type: h.hyperlink,
          data: t.options.hyperlink.slide ? "slide" : "dummy",
          rId: a,
          Target: q(t.options.hyperlink.url) || t.options.hyperlink.slide.toString()
        });
        t.options.hyperlink._rId = a;
      } else console.log("ERROR: 'hyperlink requires either: `url` or `slide`'");
    }
  }));
}
var ef = function() {
  function e(e) {
    var t;
    this.addSlide = e.addSlide;
    this.getSlide = e.getSlide;
    this._name = "Slide ".concat(e.slideNumber);
    this._presLayout = e.presLayout;
    this._rId = e.slideRId;
    this._rels = [];
    this._relsChart = [];
    this._relsMedia = [];
    this._setSlideNum = e.setSlideNum;
    this._slideId = e.slideId;
    this._slideLayout = e.slideLayout || null;
    this._slideNum = e.slideNumber;
    this._slideObjects = [];
    this._slideNumberProps = this._slideLayout?._slideNumberProps ? this._slideLayout._slideNumberProps : null;
  }
  Object.defineProperty(e.prototype, "bkgd", {
    get: function() {
      return this._bkgd;
    },
    set: function(e) {
      this._bkgd = e;
      this._background && this._background.color || (this._background || (this._background = {}), "string" != typeof e || (this._background.color = e));
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "background", {
    get: function() {
      return this._background;
    },
    set: function(e) {
      this._background = e;
      e && ep(e, this);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "color", {
    get: function() {
      return this._color;
    },
    set: function(e) {
      this._color = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "hidden", {
    get: function() {
      return this._hidden;
    },
    set: function(e) {
      this._hidden = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "slideNumber", {
    get: function() {
      return this._slideNumberProps;
    },
    set: function(e) {
      this._slideNumberProps = e;
      this._setSlideNum(e);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "newAutoPagedSlides", {
    get: function() {
      return this._newAutoPagedSlides;
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.addChart = function(e, t, a) {
    (a || {})._type = e;
    ei(this, e, t, a);
    return this;
  };
  e.prototype.addImage = function(e) {
    es(this, e);
    return this;
  };
  e.prototype.addMedia = function(e) {
    (function(e, t) {
      var a = t.x || 0;
      var r = t.y || 0;
      var n = t.w || 2;
      var o = t.h || 2;
      var A = t.data || "";
      var i = t.link || "";
      var s = t.path || "";
      var l = t.type || "audio";
      var c = "";
      var p = t.cover || "data:image/png;base64,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AAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKSEAhgAAAAAAAAgJRTAAAAAAAAAACmhAAYAAAAAAABICQUwAAAAAAAAQEoogAEAAAAAAABSQgEMAAAAAAAAkBIKYAAAAAAAAICUUAADAAAAAAAApIQCGAAAAAAAACAlFMAAAAAAAAAAKaEABgAAAAAAAEgJBTAAAAAAAABASiiAAQAAAAAAAFJCAQwAAAAAAACQEgpgAAAAAAAAgJRQAAMAAAAAAACkhAIYAAAAAAAAICUUwAAAAAAAAAApoQAGAAAAAAAASAkFMAAAAAAAAEBKKIABAAAAAAAAUkIBDAAAAAAAAJASCmAAAAAAAACAlFAAAwAAAAAAAKREkRUAAACwrUpLSwuGDRvWfMCAAS26du3avKysrLiioqKkZcuWzZs1a1bcvHnz0tLS0rJsNtusuLi4ebNmzUoLCgo+8/eijY2N9Zs3b66pra2tqqur21xTU1NdVVVVs2nTptqNGzdWbdiwoeYvf/nL5hUrVlQtWLBgw6xZs6pqamoaJQYAAEDaKYABAACIiIghQ4aUHnTQQW379u3bql27dq3at2/fpkWLFq2bN29eWVpa2qpZs2bNCwsLm2ez2fLCwsLyoqKi8sLCwtKknK+hoaG6vr6+qqGh4S91dXV/aWhoqNq8eXNVTU3NuqqqqvUbNmxYu2rVqjWrV69e99Zbb6177rnnPpgzZ06NTwYAAABJogAGAADIA8OGDWt+xBFHdBwwYECnLl26dGjdunXHFi1adCgtLe1YUlLSvlmzZq0KCgqK07yDwsLCssLCwrKIaPdp/zuNjY21mzdvXrdp06ZVNTU172/YsGHl2rVr31+2bNnKBQsWrHjyySffnzVrVpVPGAAAAE1Fpuexsd9HfaF+ZcSal0ptCAAAIAE6deqUPf744zvtueeeXbp3796lbdu2XSorKzuXlpZ2KS0t7VBYWFhhSztGQ0PDxpqampU1NTXL169fv+yDDz5Y9s477yybPXv2sj/96U8rVqxYUWdLAAAAbE9t9q6Jog4f/TUFMAAAQEJks9nMt7/97Y4jRozo1bdv397t2rXrXl5e3rWsrKxzcXFx+4gosKUmp7G2tnZVTU3Nso0bNy5btWrV0tdff/2tJ598cvG999672noAAADYFgpgAACAhPne977X6a9Fb/v27Xu1bNmyV1lZWa8kvXOXLauvr9/wl7/8ZdG6desWL1u2bNHChQsX/fGPf1w8derUjbYDAADAliiAAQAAmqhsNps59dRTuxx66KH9+/Tp87n27dv3Ly8v719UVOSRzXlq06ZNKzZu3Pj6+++//8abb775xqOPPvrG3XffvcpmAAAA+CsFMAAAQBNx6qmndvniF784qHfv3v3btWv3uYqKis8VFhaW2wxbUl9fv37Dhg1vfPDBB68vXrz4jccee2z+jTfeuNxmAAAA8pMCGAAAYBc45phjWn/rW9/aq3///kPatGnTv6Kiop9HOLO9NDQ0VG/cuPGtNWvWLFy4cOGcO+6445WHHnporc0AAACknwIYAABgJzjjjDO6f+lLX9qrV69eg1u3bj2orKysR0RkbIadJFddXb103bp18xcvXjz30UcffeXqq69+x1oAAADSRwEMAACwnZWWlhb86le/2u3QQw8d1r17931btmw5qLCwsMxmaEoaGhqqP/zww/nvvPPOzGeeeWbW2LFj36ipqWm0GQAAgGRTAAMAAGwHP/7xj7t+9atf3bdXr15D27Ztu1c2m21jKyRJXV3dmg8++OCVRYsWvfznP/95xh/+8IdltgIAAJA8CmAAAIBtcOKJJ7Y75ZRTDujXr9+w1q1bD81ms61shTSpq6tbt3bt2pfffPPNWbfccsvUe++9d7WtAAAANH0KYAAAgE+hoqKi4IILLhg0YsSI/bp27bpfy5YtB2YymUKbIR/kcrmGDz/8cP6777474/nnn59x4YUXvrZx40aPiwYAAGiCFMAAAAAf4/jjj2/7/e9//8D+/fsf2Lp1630KCgpKbAUiGhsbN61fv37eW2+9NeWGG2545u67715lKwAAAE2DAhgAAOB/ZLPZzAUXXPC5I4888sDu3bsfWFFRsVtEFNgMbFl1dfWSd999d8qsWbNmnnvuuS+vW7euwVYAAAB2DQUwAACQ10pLSwsuvfTSQYcccsjBXbt2HVFWVtbDVmDb1dbWrnr//fdfmDp16uRf/vKXL65evbreVgAAAHYeBTAAAJB3Bg0aVHrBBRd8fs899zywQ4cOBxQVFbWwFdj+Ghsba9euXTtrzpw5T59//vmTX3755WpbAQAA2LEUwAAAQF4YNmxY8/POO+/gIUOGHOZ9vrDz/W0ZfNFFFz07a9asKlsBAADY/hTAAABAarVq1arwyiuv3HfEiBEjO3TocFBhYWGZrcCu19DQUP3+++8/O2XKlIk/+clPZm7cuLHRVgAAALYPBTAAAJAqrVq1Kvztb3+7/3777Xd4x44dRxQWFpbbCjRdDQ0NG99///0pM2bMeOqHP/zhC8pgAACAz0YBDAAApMJZZ53V45vf/OaRvXr1GllaWtrVRiB5ampq3l28ePHEO++8c9LVV1/9jo0AAABsPQUwAACQWMOHDy+/6KKLvjB48OCjW7RoMdBGID0+/PDDV+fNmzfhvPPOe3L69Ol/sREAAIBPRwEMAAAkSqtWrQpvuOGGQ/bbb79/atOmzX6ZTCZrK5BeuVyubs2aNTNmzJjx2JgxYyavW7euwVYAAAA+ngIYAABIhB//+Mddv/e9732lZ8+e/1RcXNzWRiD/1NbWfvD2228/dssttzz029/+9l0bAQAA+L8UwAAAQJNVUVFRcO21137+4IMPPrZ169b7ZTKZAlsBIqJxzZo1M59//vnxp5122hR3BQMAAPx/CmAAAKDJOeWUUzqefvrpx/bu3ftL2Wy2jY0AH6e+vn7j0qVLH/vd7373x+uvv36ZjQAAAPlOAQwAADQJ2Ww2c+uttx5wyCGHnNC6deu9I8LdvsDWaFy7du1L06ZN+/OPfvSjZ1evXl1vJQAAQD5SAAMAALtU//79S6655pp/2nPPPY8tLy/vayPAZ1VTU7NswYIF488999wHp06dutFGAACAfKIABgAAdomf//znPU855ZQTu3btemRhYWGZjQDbW2NjY92KFSuevOWWW+689NJLF9kIAACQDxTAAADATuMxz8Cusn79+rlPP/30f5188slT6+rqcjYCAACklQIYAADY4fr27Vv8hz/84a+Pee5nI8CuUlNT8+68efPu/8EPfvDgwoULN9kIAACQNgpgAABghxkyZEjpNddc89XBgwefWFxc3MFGgKaitrZ21dy5c+/5yU9+8uc5c+bU2AgAAJAWWyqAPYoNAADYJqNHj+4wb968n06ZMuXRYcOGnaH8BZqa4uLi9sOGDTtjypQpj86bN++nJ510UntbAQAA0s4dwAAAwFY599xze33/+9//dufOnY/IZDJZGwGSIpfL1S1fvvzJG2644fbLLrvsbRsBAACSyiOgAQCAz+y8887r+53vfOfbHTt2PDyTyRTaCJBUuVyuYcWKFU/cdNNN//XrX/96sY0AAABJowAGAAC22WWXXTboG9/4xg9at249zDaAtFm7du2su++++9pzzjnnNdsAAACSQgEMAABsNcUvkE8UwQAAQJIogAEAgE9N8Qvks7Vr18665557rvv5z38+3zYAAICmaksFcGHlwOj6UV9orIqoWZG1PQAAyBO/+MUvet9xxx3nHHrooT8pLS3tYiNAPiotLe2y7777HvP973+/X1lZ2ZIpU6assxUAAKCpKetcHwXlH/01BTAAAOS5M844o/u99957zpe//OWflZeX94qIjK0AeS5TXl7e8+CDDx71/e9/v3dEvDVjxowPrQUAAGgqFMAAAMD/ceKJJ7a77777fjJq1Kh/KS8v7xOKX4B/lCkvL+99+OGHj/rWt77VfvXq1Qvnz59fbS0AAMCutqUC2DuAAQAgzwwdOrTs+uuvP6l///4nFRYWltkI20NjY2Ns2rQpqquro6amJurr62PTpk2xefPmqK+vj+rq6qivr4/NmzfHpk2boqGhYZv/fxUWFkZJSUk0a9YsioqKoqysLIqKiqJZs2ZRUlISRUVFUVpa+r9/FRQUCIjtoqGhoeq11167a8yYMffMmTOnxkYAAIBdZUvvAFYAAwBAnujUqVP2nnvuGbXXXnudnM1mK22Ej9PQ0BAbN26MDRs2/J+/Nm7cGBs3boyamprYtGlTbNq0KWpqaqK2trbJnqe4uDhKSkqitLT0f/9eUVERFRUV0aJFi//zV0VFRRQWFvog8LHq6urWvvjii7eceOKJf169enW9jQAAADubAhgAAPLcXXfdddAXv/jF00tLS7vZRn7L5XKxYcOGWLt2baxbty7Wrl37d3+tW7cuNmzYkPd7atGiRbRu3TpatWoVrVu3jjZt2vzvf27dunW0aNHCh4morq5e+sgjj1zzne98Z6ptAAAAO5MCGAAA8tTVV189+MQTTzyzoqJioG3kj8bGxli5cmUsX748Pvjgg1i9evX//n3t2rXR2NhoSZ9RYWFhtGrVKtq1axdt27b937937tw5OnTo4LHTeWbDhg3z77333qvOPPPMebYBAADsDApgAADIM1/72tfaXHrppad27979qIjQRKVUQ0NDrFq1KlasWBHvv//+//595cqVTfqRzGlXXFwcHTp0iI4dO0bnzp2jY8eO0alTp2jXrp1HS6dYLpdrfOeddx76+c9/fv2ECRPW2QgAALAjKYABACBP9OrVq9ldd931jT322OM7hYWFZTaSHh9++GG88847sXTp0njvvfdixYoVsXr16mhoaLCchCgsLIz27dtHp06dolu3btG9e/fo3r27x0mnTENDQ9W8efNu++Y3v/nHJUuWbLYRAABgR1AAAwBAHrjrrrtG/NM//dOZJSUlXWwj2davXx9Lly6Nd955539L3w8//NBiUqqysvJ/y+C//tWqVSuLSbiamppljz322G9Gjx49xTYAAIDtTQEMAAAp9qtf/arPD3/4w5+1atVqL9tIno0bN8aSJUvirbfeikWLFsV7770XmzZtspg8V1JSEl27do0+ffpE3759o3fv3lFeXm4xCbRu3bqXr7322ivGjh27yDYAAIDtRQEMAAApNGjQoNI77rjju7vttttJBQUFWRtJhtWrV8ebb74ZixcvjiVLlsTy5cujsbHRYtiigoKC6Ny5c/Tu3Tt69+4d/fr1i7Zt21pMQjQ2Nta98cYbd33rW9+6ff78+TU2AgAAfFYKYAAASJHS0tKCBx988Jj99tvvn7PZbBsbaboaGhri7bffjrfeeisWLFgQS5YscXcv201FRUX06tUr+vbtG3379o2ePXtGYWGhxTRhdXV1a2bMmHHjV77ylYdqamr85gcAALDNFMAAAJASp59+erdf/vKX51ZWVu5jG03T6tWr47XXXouFCxfGm2++GRs3brQUdooWLVpE3759Y8CAATFw4EB3CDdh69evf/E//uM//vPqq69+xzYAAIBtoQAGAICEGzRoUOm99977w969ex+byWTc4teErF+/PubNmxcLFiyIN954Q+FLk9GiRYvo169fDBgwIPbYY4+orKy0lCYkl8s1LF68eNyJJ554rcdCAwAAW0sBDAAACXbNNdcMOemkk35RVlbWyzZ2vVwuF++++27MnTs3XnvttViyZIl3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B7lcrm7y5Mm//vKXv/yIbQAAwK63pXcAK4ABAMg7paWlBTNnzjyzT58+x9vG39uwYUOMGzcuZsyY4VHPQF7KZDKx3377xde//vWoqKiwkH+waNGiP+27775X1dTUeCwEAADsQgpgAAD4H926dctOnjz5V506dRppG/9fLpeLqVOnxp///OfYuHGjhQB5r6KiIkaNGhX777+/x0L/g+XLlz9+6KGHXvLuu+/W2QYAAOwaWyqAvQMYAIC8MXz48PInnnjiynbt2o2wjf/vnXfeiWuvvTaee+652Lx5s4UARMTmzZtjzpw58dprr0XPnj2jRYsWlvI/Kioq+n7rW98aMnXq1Ofee+89f3AAAMAusKV3ACuAAQDIC9/+9rc73n777X9o0aLFANv4b1VVVXHXXXfFvffeG+vXr7cQgI+wbt26eP7552P9+vWx2267RVFRkaVERElJSefjjjvuoA8++GDKK6+88hcbAQCAnUsBDABAXjv//PP7XXzxxX8oKSnpbBv/bfr06XHttdfGokWLLAPgU3jnnXdi2rRp0bp16+jc2R8nERHZbLbyC1/4whElJSUvTp48eY2NAADAzqMABgAgb/3ud7/b60c/+tFVRUVFrWwjYs2aNXHzzTfHpEmTora21kIAtkJtbW289NJL8c4770Tfvn2jtLQ073dSWFhYNnz48C/26dNn4UMPPbTMpwQAAHYOBTAAAHnp1ltv3f+b3/zmfxYWFjbP913kcrl4/vnn4/rrr4/ly5f7cAB8BitXroxp06ZFRUVFdOvWLTKZTF7vo6CgIDto0KBDBw0atOiBBx54xycEAAB2vC0VwJmex8Z+H/WF+pURa17ym6wAACTTww8//KXDDjvsXzKZTN6/rPGDDz6I22+/Pd544w0fDIDtbMCAAfGtb30r2rRpk/e7yOVyjVOmTPn1yJEjH/LJAACAHavN3jVR1OGjv6YABgAgdV555ZXTPve5z30r3/fQ0NAQjz32WDz++ONRV1fngwGwg2Sz2Tj66KPjC1/4QhQUFOT9Pl5//fU79tprr9/7ZAAAwI6jAAYAIC9ks9nMyy+/fFafPn2Oz/ddvPvuu3HbbbfFe++954MBsJN069YtvvOd70S3bt3yfhdLliy5f5999rmypqam0ScDAAC2PwUwAACpV1paWjBr1qyzevfufVw+7yGXy8WTTz4ZDz74oLt+AXaBbDYbxxxzTBxxxBF5fzfw0qVLHxg6dOjlSmAAANj+FMAAAKRar169mk2ePHlsu3btDsrnPaxcuTJuueWWePvtt30oAHaxnj17ximnnBIdOnTI6z2sXr16yiGHHPIvS5Ys2exTAQAA28+WCuDCyoHR9aO+0FgVUbMia3sAADRpQ4cOLXvqqacub9Omzf75uoNcLhfPPPNMXH/99bF27VofCoAmYP369TFlypQoKSmJnj17RiaTycs9NG/evPtJJ500ZPLkyc+sWLHCoykAAGA7KetcHwXlH/01BTAAAIk1ZMiQ0kceeeSKVq1a7Z2vO6iuro7bb789nnjiiWhs9IRNgKaksbEx5s+fH++//34MGDAgstn8/DlLaWlpp6997WuDn3rqqadXrlxZ75MBAACfnQIYAIDUOfTQQ1s8+OCDv2/ZsuUe+bqDOXPmxNVXX+2RzwBN3PLly+OFF16Ijh075u0joUtLSzudcMIJ+7/00ktPv/3227U+FQAA8NkogAEASJVhw4Y1v++++37TsmXLQfl4/vr6+hg/fnz88Y9/jNpaP0MHSILNmzfHiy++GJs3b47ddtstCgoK8m4HxcXFbY866qg9n3vuuaeXL1/ucdAAAPAZKIABAEiNI488snLcuHG/b9GixcB8PP97770XV111VcyZM8eHASCBFi1aFC+//HL069cvWrRokXfnLykp6XDcccftP2fOnGcWLVq0yScCAAC2jQIYAIBUOPLIIyvvvPPO35aXl++Wj+d/+umn48Ybb4wPP/zQhwEgwf7yl7/ECy+8ECUlJdGrV6+8O3+zZs3aHHXUUfspgQEAYNspgAEASLxjjz227W233faH5s2b98m3s1dVVcXNN98cTz31VDQ2NvowAKRAY2NjzJ8/P5YtWxYDBgyIZs2a5dX5mzVr1uaYY4458M0333xm4cKFNT4RAACwdRTAAAAk2qGHHtritttuuzofy9+33347rrnmmli8eLEPAkAKvf/++/HKK69Enz59orKyMq/Ons1mK4888sh9Zs6c+dTSpUs3+zQAAMCnpwAGACCxjjjiiJb33nvvteXl5f3y6dy5XC4mTZoUN998c1RVVfkgAKRYVVVVTJ06NbLZbPTp0ycymUzenL24uLjtV7/61c+/8sorTy1evLjWpwEAAD4dBTAAAIl06KGHtrj33nt/l2/lb3V1ddx0000xefLkyOVyPggAeSCXy8WCBQvi3Xffjd133z2y2fz5mUyzZs1aH3300fvNmDHjSXcCAwDAp6MABgAgcYYOHVo2fvz4qysqKgbk07mXLVsWV111lUc+A+SplStXxiuvvBKf+9znoqKiIm/O3axZszZHH3300GeeeebJFStW1PkkAADAlimAAQBIlCFDhpQ++uij17Rs2XL3fDr31KlT49prr42NGzf6EADksaqqqpg+fXq0bds2unTpkjfnLikpaT9q1KihTz755JMrV66s90kAAICPt6UCuMB6AABoSjp16pSdMGHCv1dWVu6RL2dubGyMcePGxR133BF1dW56AiCitrY2br755hg/fnw0NjbmzbkrKyv3mDBhwr9369bNXQkAALCNFMAAADQZrVq1Kpw+ffolbdq02T9fzlxdXR2/+93vYtKkSd73C8DfyeVy8fjjj8fvf//7qK6uzptzt2nTZv8pU6Zc0qpVq0KfAgAA2HoKYAAAmoSKioqC2bNnX9KuXbuD8uXMS5cujYsuuijmz5/vAwDAx3r11VfjoosuiqVLl+bNmdu1a3fQ7Nmz/72iosLPrgAAYCu5iAYAoEmYOXPmz9q1a3dIvpz35ZdfjiuuuCLWrVsnfAA+0bp16+KKK66Il19+OW/O3K5du4Nnzpz5M+kDAMDWUQADALDLvfjii2N69OgxKh/Omsvl4oEHHogbbrghamtrhQ/Ap1ZbWxs33HBDPPDAA3nz2oAePXqMevHFF8dIHwAAPj0FMAAAu9SkSZO+NnDgwFPy4ax1dXVx8803x8SJE73vF4BtksvlYuLEiXHLLbdEXV1dXpx54MCBJ0+aNOlr0gcAgE9HAQwAwC7z6KOPHnXggQeekw9nXbduXfz617+OWbNmCR6Az2zmzJnx61//Ol9eJZA58MADz3n00UePkjwAAHyywsqB0fWjvtBYFVGzImtDAADsEDfeeOO+Rx999EWZTKYw7Wddvnx5XHXVVbFy5UrBA7DdbNiwIWbPnh0DBw6MioqKtB8307179/179uz56sMPP7xc+gAA5LuyzvVRUP7RX1MAAwCw011xxRV7fPe7372qoKCgWdrPOmfOnPjtb38bGzduFDwA2111dXVMmzYtOnfuHB07dkz1WTOZTOHuu+9+eJs2bV6aNGnSKukDAJDPFMAAADQZZ5xxRvef/exnvy0sLCxP+1knTJgQd999d9TX1wsegB2moaEhXnrppchms9G3b99UnzWTyRTttddeB/3lL395dubMmRukDwBAvlIAAwDQJBx00EEVf/jDH64pLi7ulOZz5nK5eOCBB+Kxxx4TOgA77c+eBQsWRF1dXfTv3z8ymUxqz1pQUFBywAEHDJs+ffqkpUuXbpY+AAD5aEsFcIH1AACwMwwaNKj0vvvuu7qsrKxXms9ZV1cX1113XUyaNEnoAOx0EydOjOuvvz7q6upSfc6ysrJef/rTn67u379/idQBAODvKYABANjhKioqCh577LGLKyoqBqb5nNXV1XHNNdfE7NmzhQ7ALvPKK6/ElVdeGVVVVak+Z4sWLQZOnDhxbEVFhZ9vAQDA33CBDADADjdz5syftW3b9sA0n3HdunVx2WWXxRtvvCFwAHa5xYsXx2WXXRZr165N9TnbtWt34MyZM38mcQAA+P8UwAAA7FBPPvnkqB49eoxK8xlXrVoVV1xxRSxfvlzgADQZK1asiCuuuCJWrlyZ6nP26NFj1KRJk0ZJHAAA/lth5cDo+lFfaKyKqFmRtSEAALbZjTfeuO+XvvSlCzOZTGp/8fDdd9+NK6+8MtatWydwAJqc6urqmDVrVvTv3z8qKytTe85u3boN79mz57yHH37Yb2MBAJAXyjrXR0H5R39NAQwAwA5x3nnn9T311FOvLigoKE7rGV977bW45pprorq6WuAANFmbN2+OGTNmRI8ePaJ9+/apPGMmkykYNGjQIYWFhVOee+45v5UFAEDqKYABANipjjrqqFb/8R//8YdmzZq1SusZX3755bj++uujrq5O4AA0eQ0NDfHSSy9Fp06dolOnTqk8Y0FBQXbYsGGfnz9//qQ33nhjk9QBAEizLRXA3gEMAMB21a1bt+wNN9zwnyUlJR3TesYpU6bEjTfeGPX19QIHIDHq6+vjxhtvjKlTp6b2jCUlJZ1uuOGG/+jWrZu7GgAAyFsKYAAAtqunn376XyorK/dI6/kmTZoUd955ZzQ2NgobgMRpbGyMO+64I5588snUnrGysnLw008//UtpAwCQrxTAAABsN88///w3unTp8k9pPd/EiRNj3LhxkcvlhA1AYuVyubj//vtTXQJ36dLlS88+++yJ0gYAIB95BzAAANvFTTfdNPzII488L5PJZNJ4vsceeyzGjx8vaABS47XXXotmzZpF3759U3m+zp0779urV695Dz/88DJpAwCQNlt6B7ACGACAz+wXv/hF7x/+8IdXFxQUNEvj+R544IF45JFHBA1A6ixYsCDq6upiwIABqTtbJpPJDBo06ODGxsbnpk6dul7aAACkiQIYAIAd5oADDqj43e9+99tmzZq1TeP5xo0bF5MmTRI0AKm1aNGi2Lx5cwwcODB1ZysoKMjut99+w5577rnH33vvvc3SBgAgLbZUAHsHMAAA2yybzWbuvPPOfyktLe2exvNNmDBB+QtAXpg0aVI89NBDqTxbaWlpj3vuuedfstlsRtIAAOQDBTAAANvs+eef/06HDh0OTePZHn744Xj44YeFDEDeeOSRR+LPf/5zKs/WoUOHw5599tlvSxkAgHygAAYAYJvcd999hw8ePPjUNJ7t/vvvjwkTJggZgLzz2GOPxX333ZfKs+25554/+NOf/nSYlAEASDvvAAYAYKudccYZ3ceMGXN5QUFBcdrONnHixHjkkUeEDEDeWrx4cWSz2ejbt2/ajpbp06fPvn/5y18mz5w5c4OkAQBIsi29A1gBDADAVhk2bFjzG2+88Q/NmjVrl7azPfroo6l99CUAbI2FCxdGUVFR9OvXL1XnKigoKD7wwAP3e/LJJx9dsWJFnaQBAEiqLRXAHgENAMBWuffee39ZWlraPW3nevzxx+PBBx8UMAD8jz//+c8xceLE1J2rtLS0x3333fdLCQMAkFYKYAAAPrVJkyaN6tSp0xEpPFeMHz9ewADwD8aPHx+TJ09O3bk6der0hUmTJn1VwgAApJFHQAMA8Kmcd955fU888cR/z2QyRWk618yZM+Puu+8WMAB8jNdeey06duwYnTt3TtW5unbtuk9BQcHzzz333DopAwCQNN4BDADAZ3LEEUe0vOKKK67NZrOVaTrXyy+/HDfffHPkcjkhA8DHyOVyMXv27OjSpUt06tQpNefKZDJF++yzz/CpU6c+9u67726WNAAASeIdwAAAbLNsNpu55ZZb/q2kpKRjms61YMGCuPnmm6OxsVHIAPAJGhsb4+abb44333wzVecqLS3tcvfdd5+fzWYzUgYAIC0UwAAAbNGkSZO+3rZt2wPTdKZly5bFDTfcEPX19QIGgE+prq4urr322li+fHmqztWuXbsDH3/88VESBgAgLTwCGgCAj3XZZZcN+upXvzo2k8mk5hcH33///bjyyiujqqpKwACwlerq6uLll1+OIUOGRHl5eWrO1aVLl31LS0unPvPMM2ukDABAEngENAAAW61///4lJ5988q8ymUxRWs60YcOG+P3vfx8bN24UMABso40bN8bvfve7VP15WlBQkP3hD394ft++fYslDABA4q9vrQAAgI/y4IMPnl1WVtYrLeeprq6O3/zmN7Fq1SrhAsBntGrVqrjyyiujuro6NWcqKyvr8/DDD58lXQAAkk4BDADA/zF+/Pgju3XrdnRazlNfX5/KdxYCwK60fPnyuO6666K+vj41Z+rRo8dXx40bd4R0AQBIMgUwAAB/53vf+16nI4444py0nCeXy8Vtt90Wb7zxhnABYDt7/fXX47bbbotcLpeaMx155JHnfvvb3+4oXQAAkkoBDADA/6qoqCi4+OKLLywsLCxPy5nGjx8fs2bNEi4A7CCzZs2Khx56KDXnKSwsrPj1r399QUVFhZ+bAQCQSC5kAQD4XxMnThxdWVk5OC3nef7552PixImCBYAd7LHHHosXXnghNeeprKzc89FHHz1RsgAAJFFh5cDo+lFfaKyKqFmRtSEAgDxxwQUX7DZq1KgLM5lMYRrO8+qrr8Ytt9ySqkdSAkBT/7O3d+/e0a5du1Scp2PHjkNzudxzU6ZMWSddAACamrLO9VHwMc/wcwcwAADRt2/f4h//+McXZzKZVPwG4HvvvRc33HBDNDY2ChcAdpKGhoa47rrrYtmyZak4T0FBQfbss88e27dv32LpAgCQqGtZKwAAYPz48T8qKyvrkYazbNiwIX7/+99HbW2tYAFgJ9u0aVP8/ve/j40bN6biPGVlZb3GjRs3RrIAACSJAhgAIM/ddNNNw/v06XN8Gs5SX18f1157baxdu1awALCLrFmzJq699tqor69PxXn69ev3jd///vdDJQsAQFIogAEA8thBBx1Uceyxx/5rRGTScJ477rgjFi9eLFgA2MUWLVoUd955Z1qOU/CNb3zj34YNG9ZcsgAAJOIC1goAAPLXzTfffFZxcXG7NJxl4sSJMX36dKECQBMxbdq0mDRpUirOUlJS0unOO+88Q6oAACSBAhgAIE/913/914FdunT5UhrO8tprr8Wf//xnoQJAEzN+/PhYsGBBKs7SrVu3o2+66abhUgUAoKlTAAMA5KEvfelLlV/5yld+lYazrFixIq6//vpobGwULAA0MY2NjXHdddfFihUr0nCczHHHHfergw46qEKyAAA0ZQpgAIA8dPXVV5+ezWYrk36OmpqauPbaa2PTpk1CBYAmatOmTXHttddGTU1N4s+SzWbb3njjjT+RKgAATZkCGAAgz9x6663Du3Tp8uWknyOXy8Utt9wSK1euFCoANHErV66MW2+9NXK5XOLP4lHQAAA0dQpgAIA8MnTo0LKvfvWrv0jDWSZMmBBz584VKgAkxJw5c+Kxxx5LxVlGjRr1i6FDh5ZJFQCApkgBDACQR+64444fFRcXd0z6OV5++eV45JFHBAoACfPQQw+l4he4SkpKOt5xxx0/lCgAAE2RAhgAIE9cfvnlu/fs2XNU0s/xwQcfxB133JGKR0gCQL7J5XJx2223xZo1axJ/lp49ex57+eWX7y5VAACaGgUwAEAe6NatW/a73/3uv2YymURf/9XX18cNN9wQ1dXVQgWAhKqqqoobb7wx6uvrE32OTCZT8N3vfvdX3bp1y0oVAICmRAEMAJAHxo8ff0pZWVmvpJ/jnnvuiaVLlwoUABJuyZIlcd999yX+HGVlZT3Hjx9/ikQBAGhKFMAAACn385//vOeAAQNGJ/0c06dPjylTpggUAFJi8uTJMWPGjMSfY8CAAaN//vOf95QoAABNhQIYACDFstls5qyzzjo3k8kk+tGEK1asiLvvvlugAJAyd911V6xYsSLRZ8hkMtmzzjrr3Gw2m5EoAABNgQIYACDFxo0b98XKysq9knyG2trauOGGG6K2tlagAJAyf/1zfvPmzYk+R2Vl5V7jxo0bKVEAAJoCBTAAQEoNHz68/OCDDz4t6ee4//77Y/ny5QIFgJRavnx5jBs3LvHnGDFixI+HDRvWXKIAAOxqCmAAgJS69dZbT8tms22TfIYZM2bEc889J0wASLnJkyfHzJkzE32G4uLitrfffvtp0gQAYFdTAAMApNBVV121R48ePb6S5DOsXLky7rrrLmECQJ64++6744MPPkj0GXr27PnVK664Yg9pAgCwKymAAQBSprS0tOAb3/jGT5N8rdfY2Bi333679/4CQB6pqamJ2267LRobG5N8jIJvfvObZ5aWlvqZGwAAu+6i1AoAANJlwoQJX6uoqBiQ5DOMHz8+Fi1aJEwAyDNvvvlmPPjgg4k+Q4sWLQY9+OCDx0gTAIBdRQEMAJAiRx55ZOWwYcN+kOQzzJ07N5544glhAkCemjhxYixYsCDRZxg+fPiPjjjiiJbSBABgV1AAAwCkyBVXXHFyUVFRRVLnr6qqijvvvDNyuZwwASBP5XK5uP3226O6ujqxZygqKmrxm9/85mRpAgCwKyiAAQBS4vzzz+/Xu3fv45J8httvvz0+/PBDYQJAnlu3bl3cfvvtiT5D7969jz///PP7SRMAgJ1NAQwAkALZbDZz6qmn/jyTyST2+m769OkxZ84cYQIAERExe/bsmDFjRmLnz2QyBaeeeurPs9lsRpoAAOxMCmAAgBT44x//eERlZeXgpM6/du3auPfeewUJAPyde+65J9atW5fY+SsrKwf/6U9/+oIkAQDYmRTAAAAJ17dv3+JDDjnkR0k+w9133x01NTXCBAD+Tk1NTdx9992JPsPBBx/8o759+xZLEwCAnUUBDACQcHfdddc3S0pKOiV1/smTJ8e8efMECQB8pLlz58azzz6b2PlLSko63nPPPd+SJAAAO4sCGAAgwb70pS9VDhw48KSkzr9mzZoYP368IAGALXrggQdizZo1iZ2/f//+Jx111FGtJAkAwM6gAAYASLArrrji1MLCwvIkzp7L5eK2226LTZs2CRIA2KJNmzbFbbfdFrlcLpHzFxYWll1++eU/kCQAADuDAhgAIKF+8Ytf9O7evftXkjr/s88+G2+88YYgAYBP5Y033ojnn38+sfN369bt6F/96ld9JAkAwI6mAAYASKgf/vCHP8pkMom8nvvggw/igQceECIAsFXGjRsX69atS+TsmUym4NRTT/2xFAEA2NEUwAAACXTdddcNa9eu3YFJnD2Xy8Udd9wRtbW1ggQAtsqmTZvizjvvTOz8bdq02f+mm27aT5IAAOxICmAAgIQpLS0t+NrXvnZ6Uud/4YUXYuHChYIEALbJq6++GjNmzEjs/Mccc8zpFRUVfiYHAMAO42ITACBhbr/99oMrKip2S+LsGzZsiHHjxgkRAPhM7r///qiqqkrk7OXl5X3/67/+6wgpAgCwoyiAAQASpKKiouCwww47Nanz33vvvYn9YS0A0HRs2LAh7r///sTOf9BBB/1zq1atCiUJAMCOoAAGAEiQ+++//+iysrKeSZx9zpw58dJLLwkRANguXnjhhViwYEEiZy8tLe32xz/+8StSBABgR1AAAwAkRN++fYv33Xfff07i7LW1tXHvvfcKEQDYru6+++6oq6tL5Oz77bffKf379y+RIgAA25sCGAAgIW6++eZRxcXFbZM4+yOPPBJr164VIgCwXa1atSoee+yxRM6ezWbb3njjjV+TIgAA25sCGAAgAYYOHVq21157fSeJs7/33nvxxBNPCBEA2CEmTpwYK1asSOTsQ4YM+c7QoUPLpAgAwPakAAYASIBrr732xKKiosqkzZ3L5eKee+6JxsZGIQIAO0R9fX3cddddkcvlEjd7UVFR5bXXXnuCFAEA2J4UwAAATdwBBxxQMWDAgG8kcfYZM2bEW2+9JUQAYId6880348UXX0zk7AMGDPjG8OHDy6UIAMD2ogAGAGjirrrqqhOKiooqkjb3pk2b4oEHHhAgALBT3H///VFbW5u4uYuKilpcffXV7gIGAGC7UQADADRhBx10UEX//v0Teffvww8/HB9++KEQAYCdYv369TFhwoREzj5w4MBvHHDAARVSBABge1AAAwA0Yf/5n/95bGFhYfOkzb1q1aqYPHmyAAGAnerpp5+O1atXJ27uwsLC8ssuu2yUBAEA2B4UwAAATdQBBxxQMWjQoNFJnP3uu++O+vp6IQIAO1V9fX3cddddiZx99913/+bQoUPLpAgAwGelAAYAaKIuv/zyYwsLC8uTNvfcuXNjwYIFAgQAdokFCxbE3LlzEzd3UVFRi9/97ndflyAAAJ+VAhgAoAkaOnRo2aBBgxL37t+6urr405/+JEAAYJf605/+FHV1dYmbe/fdd//mkCFDSiUIAMBnoQAGAGiCfvOb33ylqKioZdLmfu655xL53j0AIF1Wr14dzz33XOLmLioqann11VcfLUEAAD4LBTAAQBPTq1evZoMHD/5m0uaurq6ORx55RIAAQJPwyCOPRHV1deLmHjJkyLe6deuWlSAAANtKAQwA0MTcdNNNxxQXF7dN2twTJkyIqqoqAQIATUJVVVUifzmtuLi43a233uouYAAAtpkCGACgCWnVqlXhXnvtdVLS5l61alU8++yzAgQAmpTJkyfHqlWrEjf30KFDR7dq1apQggAAbAsFMABAE3LLLbccXlJS0jlpcz/44INRX18vQACgSamvr48HH3wwcXOXlJR0vummmw6VIAAA20IBDADQRGSz2cwBBxzw7aTNvWjRonjppZcECAA0SS+99FIsXrw4cXOPGDHiO9lsNiNBAAC2lgIYAKCJuOaaa/YuLy/vm7S5H3roocjlcgIEAJqkXC6XyLuAy8vL+1111VV7SRAAgK2lAAYAaCK+8pWvfDdpM8+bNy8WLlwoPACgSVu4cGG8+uqrrg8BAMgLCmAAgCbgsssuG1RZWblPkmbO5XIxfvx44QEAifDAAw8k7qklrVu33veSSy7pLz0AALaGAhgAoAkYNWrUCUmbefbs2bFs2TLhAQCJsGzZsnjllVcSN/cJJ5xwovQAANgaCmAAgF3sn//5nzt37NjxiCTN3NjYGA888IDwAIBEGT9+fDQ0NCRq5k6dOn1h9OjRHaQHAMCnpQAGANjFfvSjH30tk8kk6rps2rRpsWrVKuEBAImyatWqeOGFFxI1cyaTKfzpT386SnoAAHxaCmAAgF1o0KBBpX369Plqkmaur6+PCRMmCA8ASKQJEyZEXV1dombu27fvV/r27VssPQAAPg0FMADALnTZZZcdXlRUVJGkmadOnRpr164VHgCQSOvXr48pU6YkauaioqLK3/zmN0dIDwCAT0MBDACwi2Sz2cy+++57UpJmrqurc/cvAJB4jz76aOLuAt5///1PymazGekBAPBJFMAAALvI1VdfPbSsrKx3kmaeMmVKbNiwQXgAQKJt2LAhnn/++UTNXFZW1ueqq67aS3oAAHwSBTAAwC7y5S9/+bgkzVtfXx8TJ04UHACQCo8//nji7gL+0pe+dLzkAAD4JApgAIBdYPTo0R3atm07IkkzT5s2LdatWyc8ACAVPvzww5g+fXqiZm7fvv2I0aNHd5AeAABbogAGANgFfvrTn47KZDKFSZm3vr4+HnnkEcEBAKnyyCOPRH19fWLmzWQyhT/96U+/JjkAALZEAQwAsJN16tQp26dPn6OTNLO7fwGANFq3bl1MmzYtUTP36dPnmE6dOmWlBwDAx1EAAwDsZFddddUB2Wy2dVLmbWxsjEmTJgmOVOvYsWN06OCJmgD5aNKkSdHY2JiYebPZbOurrrrqAMkBAPBxFMAAADvZiBEjvp6keV988cVYtWqV4Ei1Ll26xIUXXhinnXZadO3a1UIA8siqVavipZdecj0JAEBqKIABAHaiM844o3tlZeXeSZk3l8vFxIkTBUdeyGQyMXjw4PjVr34VY8aMcUcwQB55/PHHI5fLJWbeysrKvc8444zukgMA4KMogAEAdqJTTjnlqxGRScq8CxYsiPfee09w5JVMJhN77713XHjhhTFmzJho3769pQCk3HvvvRcLFy5M1B9X/3NdCQAA/4cCGABgJ+nVq1ezXr16fTlJM3v3L/nsr0XwBRdcECeffHK0bdvWUgBSLGnXPb169fpyr169mkkOAIB/pAAGANhJrrjiioOLiopaJmXeBN4JAztEYWFhDB8+PC688MIYPXp0VFZWWgpACi1YsCCWLVuWmHmLiopaXnnllYdIDgCAf6QABgDYSYYPH/6VJM2btHfhwY5WVFQUI0aMiEsuuSRGjx4dLVu2tBSAFMnlcvH4448naub99tvvK5IDAOAfKYABAHaC0aNHd6isrByalHnXrl0bL7/8suDgI/y1CL744ovjhBNOiBYtWlgKQEq89NJLsW7dusTMW1lZudfo0aM7SA4AgL+lAAYA2AlOP/30o5J07fXMM89EQ0OD4GALiouL47DDDouxY8fGqFGjoqyszFIAEq6hoSGeeeaZJI1c8D/XmQAA8P8vEq0AAGDHymazmX79+n05KfPW1tbGlClTBAefUnFxcYwcOTIuvfTSGDVqVJSWlloKQII9//zzUVtbm5h5+/Xr9+VsNpuRHAAAf6UABgDYwX7zm9/sWVJS0jkp886YMSOqq6sFB1uppKQkRo4cGZdcckkcffTRUVJSYikACVRdXR0zZ85M0p8/na+44orBkgMA4K8UwAAAO9gXvvCFLyVl1lwuF08//bTQ4DNo3rx5HHXUUXHJJZfEyJEjI5vNWgpAwjz11FORy+USM++RRx75ZakBAPBXCmAAgB1oyJAhpZ07dz4iKfO+/vrrsWLFCsHBdlBeXh6jRo2KSy+9VBEMkDArVqyI119/PTHzdunS5fD+/ft79AQAABGhAAYA2KHGjh17aGFhYWJeCOruX9j+KioqYtSoUXHxxRfH4YcfHkVFRZYC4LpouyosLGz+H//xHwdLDQCACAUwAMAOteeeex6ZlFnXrl0b8+bNExrsIK1atYrjjz8+LrroohgxYkQUFPh2DKApmzdvXqxZsyYx8+61115HSg0AgAgFMADADnPMMce0bt269b5Jmfe5556LxsZGwcEO1qZNmxg9enRcfPHFimCAJqyxsTGee+65JP35MvyYY45pLTkAAPykAQBgBznzzDMPz2Qyibjeqq+vj6lTpwoNdqK2bdvG6NGj47zzzovhw4crggGaoBdeeCHq6+sTMWsmkyk844wzDpUaAAB+wgAAsIP079//C0mZdc6cObFhwwahwS7QqVOnOPnkk+Pf/u3fYu+9945MJmMpAE3Ehg0bYvbs2YmZd8CAAR4DDQCAAhgAYEf43ve+16mysnKPpMybpMcbQlp17tw5xowZE7/61a8UwQBNyPPPP5+YWSsrKwd/73vf6yQ1AID8pgAGANgBTj755CMiIhHtzcqVK+P1118XGjQRXbt2jTFjxsQ555wTgwcPthCAXez111+PlStXJmXczMknn3y41AAA8psCGABgB+jXr19iHv88ZcqUyOVyQoMmpnfv3nHaaafFOeecE/3797cQgF0kl8vFlClTknQd6jHQAAB5TgEMALCdnX766d0qKip2S8Ks9fX1MW3aNKFBE9anT58466yz4pxzzonddtvNQgB2gWnTpkV9fX0iZq2oqNjt9NNP7yY1AID8pQAGANjORo8efURSZp03b15s3LhRaJAAffr0ibPPPjvOPPPM6Nmzp4UA7EQbN26MefPmuR4FACARFMAAANtZr169EvPetSQ9zhD4bwMGDIhf/vKXceaZZ0b37t0tBGAnmTp1apKuRw+TGABA/lIAAwBsR2eccUb38vLyvkmYdf369fHaa68JDRJqwIAB8S//8i9x2mmnRbdunvQJsKPNnz8/Pvzww0TMWl5e3u9HP/pRF6kBAOQnBTAAwHZ03HHHHZSUWWfMmBGNjY1CgwTLZDIxePDg+Nd//dcYM2ZMdOjQwVIAdpDGxsaYMWNGYub9xje+cYjUAADykwIYAGA76tOnz8FJmDOXyyXqMYbAlmUymdh7773jwgsvjDFjxkT79u0tBWAHeOGFF5J0XXqIxAAA8pMCGABgOznppJPat2zZcvckzLpkyZJYuXKl0CBl/loEX3DBBXHyySdH27ZtLQVgO1qxYkW8/fbbiZi1srJy0PHHH+8PAgCAPKQABgDYTr773e8eGBGZJMyapMcXAluvsLAwhg8fHhdeeGGMHj06KisrLQVgO5k+fXpSRi34/ve/f6DEAADyjwIYAGA72X333Q9Nwpz19fUxc+ZMgUEeKCoqihEjRsQll1wSo0ePjpYtW1oKwGc0c+bMqK+vT8SsAwcOPFRiAAD5RwEMALAdHHTQQRUtW7bcKwmzLly4MKqrq4UGeeSvRfDFF18cJ5xwQrRo0cJSALZRVVVVvP7664mYtVWrVkOHDx9eLjUAgPyiAAYA2A7OPvvsz2cymaIkzOrxz5C/iouL47DDDouxY8fGqFGjoqyszFIAtkFSnqaSyWSy55577uclBgCQXxTAAADbwe67735AEuasra2NOXPmCAzyXHFxcYwcOTIuvfRSRTDANpg9e3bU1dUlYtY99tjjAIkBAOQXBTAAwGfUqlWrwnbt2u2fhFnnzZsXtbW1QgMiIqKkpCRGjhwZY8eOjaOPPjpKSkosBeBT2LRpU8ybNy8Rs7Zv337/iooKPwMEAMgjLv4AAD6jCy+8cPeioqKKJMz64osvCgz4P5o3bx5HHXVUXHLJJTFy5MjIZrOWAvAJZs2alYg5i4qKWlx88cWDJAYAkD8UwAAAn9GBBx6YiMfqVVdXJ+ZOFWDXKC8vj1GjRsWll16qCAb4BPPmzYuamppEzHrQQQd5DDQAQB5RAAMAfEZdu3YdnoQ5582bF/X19QIDPlFFRUWMGjUqLr744jj88MOjqKjIUgD+QV1dXbz66quJmLVLly77SwwAIH8ogAEAPoNTTjmlY3l5+W5JmPXll18WGLBVWrVqFccff3xcdNFFMWLEiCgo8C0kwN966aWXEjFnRUXFbieddFJ7iQEA5AffvQMAfAYnnnji55MwZ21tbcyfP19gwDZp06ZNjB49OsaOHasIBvgb8+fPj9ra2iSMmvnud7/7eYkBAOQH37UDAHwGn/vc5/ZLwpwLFy6Muro6gQGfyV+L4PPOOy+GDx+uCAby3ubNm2PhwoWJmLVfv37DJQYAkB98tw4AsI1atWpV2Lp1672TMKvHPwPbU6dOneLkk0+Oc889NwYNGmQhQF6bPXt2IuZs06bN3hUVFX4WCACQB1z0AQBso/PPP39gYWFheVOfs76+PubMmSMwYLvr2bNn/OQnP4nzzjsv9t5778hkMpYC5J3Zs2dHfX19k5+zqKio4vzzzx8oMQCA9FMAAwBso/3333/fJMz5+uuvR01NjcCAHaZLly4xZsyYOOecc2Lw4MEWAuSV6urqeOONNxIx64EHHriPxAAA0k8BDACwjbp27ZqIxz/PnTtXWMBO0bt37zjttNPinHPOif79+1sIkDeScr3VvXv3vaUFAJB+CmAAgG0wZMiQ0srKyj2a+py5XM7jn4Gdrk+fPnHWWWfFOeecE7vttpuFAKk3e/bsyOVyTX7Oli1b7jlo0KBSiQEApJsCGABgG5x55pl7ZjKZbFOfc9myZbFu3TqBAbtEnz594uyzz44zzzwzevbsaSFAaq1bty6WL1/e5OfMZDLZs846a4jEAADSrcgKAAC23tChQ4clYc558+YJC9jlBgwYEAMGDIgFCxbE+PHjY+nSpZYCpM68efOiS5cuTX7OffbZZ5+ImC4xAID0cgcwAMA26Nix4z5JmHP+/PnCApqMAQMGxC9/+cs47bTTolu3bhYCpEpSrrs6deq0j7QAANJNAQwAsJWOOOKIlhUVFf2a+pxVVVWxaNEigQFNSiaTicGDB8e//uu/xpgxY6JDhw6WAqTCW2+9FVVVVU1+zoqKis8deuihLSQGAJBeCmAAgK108sknD46ITFOfc/78+dHY2CgwoEnKZDKx9957x4UXXhhjxoyJ9u3bWwqQaI2NjbFgwYJE/Cv4u9/97h4SAwBILwUwAMBW2n333fdMwpze/wskwV+L4AsuuCBOPvnkaNu2raUAiZWU66/BgwfvKS0AgPQqsgIAgK3Trl27wU19xlwul5Q7UAAiIqKwsDCGDx8e++yzT0ybNi0mTJgQ69evtxggURYsWBC5XC4ymab9sJgOHToMlhYAQHq5AxgAYCsMGjSotGXLlgOa+pzvvfdebNy4UWBA4hQVFcWIESPikksuidGjR0fLli0tBUiMDz/8MJYtW9bk52zZsuXA/v37l0gMACCdFMAAAFvhxz/+8aBMJtPkn6Li7l8g6f5aBI8dOzZOOOGEaNGihaUAibBw4cImP2Mmk8n+5Cc/GSAtAIB0UgADAGyFvffee88kzJmEHzwCfBrNmjWLww47LMaOHRujRo2KsrIySwGatKT8Il5SrmsBANh63gEMALAVunbtOqSpz1hfXx9vvvmmsIBUKS4ujpEjR8bBBx8czz77bDz++ONRXV1tMUCT8+abb0Z9fX0UFTXtH7t16dJlT2kBAKSTO4ABAD6lioqKgoqKikFNfc4lS5bE5s2bBQakUklJSYwcOTLGjh0bRx99dJSUeIUl0LTU1tbG0qVLm/ycLVu2HFRaWupngwAAKeQiDwDgUzr77LP7FhYWNvlnj7722mvCAlKvefPmcdRRR8Ull1wSI0eOjGbNmlkK4HpsKxQWFpafffbZvaQFAJA+CmAAgE9p//3375+EOV9//XVhAXmjvLw8Ro0aFf/+7/8eI0eOjGw2aymA67FP6fOf//xAaQEApI8CGADgU+rRo8fuTX3G2traePvtt4UF5J2KiooYNWpUXHzxxXH44Yc3+XdvAum2ePHiRLySo1evXoOkBQCQPgpgAIBPqXXr1k3+DoklS5ZEQ0ODsIC81apVqzj++OPj4osvjhEjRkRBgW97gZ2voaEhlixZ0uTnbNOmjQIYACCFfCcMAPApDBkypLR58+a9m/qcb775prAAIqJ169YxevToGDt2rCIYcF32MZo3b95n0KBBpdICAEgX3wEDAHwKp556av9MJtPkr53eeustYQH8jTZt2sTo0aPjvPPOi+HDhyuCAddlfyOTyRT84Ac/+Jy0AADSxXe+AACfwuDBg5v84/Hq6+tj0aJFwgL4CJ06dYqTTz45/u3f/i323nvvyGQylgLsUIsXL07Eqzn23HPPgdICAEgXBTAAwKfQpUuXAU19xnfeeSfq6uqEBbAFnTt3jjFjxiiCgR2utrY23n333SRc53oPMABAyiiAAQA+hZYtW/Zv6jN6/DPAp9elS5cYM2ZMnHvuuTF48GALAfL2+iwJ17kAAGwdBTAAwCcYPnx4eUlJSeemPqfHPwNsvV69esVpp50W55xzTvTvrwMB8u/6rLS0tPPw4cPLpQUAkB4KYACAT/Ctb31rt4ho8s8IXbx4sbAAtlGfPn3irLPOinPOOSd22203CwG2i4T8gl7m29/+dj9pAQCkhwIYAOAT7L777k2+CVi7dm1s2LBBWACfUZ8+feLss8+OM888M3r27GkhwGfy4Ycfxrp165r8nAMHDlQAAwCkSJEVAABsWadOnZr8D8TefvttQQFsRwMGDIgBAwbEggULYvz48bF06VJLAbb5Oq1Vq1audwEA2GkUwAAAn6CyslIBDJCnBgwYEP3794958+bFQw89FO+++66lAFtlyZIlsddeezX1613PvgcASBEFMADAFnTq1CnbvHnzXk19ziVLlggLYAfJZDIxePDg2GOPPeLll1+OBx98MFauXGkxQGqu05o3b967Xbt2RatXr66XGABA8nkHMADAFowZM6ZnJpPJNuUZGxsbPZoUYCfIZDKx9957x4UXXhhjxoyJ9u3bWwrwiZYuXRqNjY1NesaCgoLsqaee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k8nE7NmzY+LEibFmzRoNAXif/VNSzJo161kTAwBongTAAAC70O233/7KOeecszU/P78022sdMGBAtG/f3tWu0My9+uqrMWnSpFi1apVmALyPjh07xgEHHJCIWhsbG6u/8Y1v/NXUAACaJwEwAMAutHLlyob169fP6tat2+hsrzWVSsXhhx8ekyZNMjhohubMmROTJ0+OJUuWaAbAh3D44YdHKpVKRK3r16+fVVFR0WhqAADNU54WAADsWq+++mpirts77LDDDAyamTfffDP+/d//PX7yk58IfwE+pFQqFSNGjEhMva+88sozpgYA0Hw5AQwAsIvddNNNz5166qnV+fn5rbO91m7dukX//v1j4cKFBgc5btmyZfHYY4/F/PnzNQPgIzrggAOic+fOiai1sbFxy4033jjL1AAAmi8BMADALrZy5cqG8vLyGT179vx0Euo9+uijBcCQw5YvXx7jxo0T/AJ8wv1SUpSXlz9TXl7eYGoAAM2XABgAYDeYMWPGUxdccEEiAuAhQ4ZE69ato7q62uAgh6xcuTImTJgQc+fOjUwmoyEAH1ObNm3i0EMPTUy9zz777FOmBgDQvPkGMADAbvDVr371lYaGhk1JqLWgoCCOOOIIQ4McsW7duvj5z38ed955Z8yZM0f4C/AJjRw5MvLz8xNRa0NDw8abbrrpVVMDAGjenAAGANgNKisrm1atWjW9T58+5ySh3qOPPjqefPJJQREk2Pr16+Oxxx6L2bNn+3cZYBdJpVIxatSoxNS7cuXKadXV1WmTAwBo3pwABgDYTaZNm5aY6/c6duwYAwYMMDRIoA0bNsSvf/3r+Nd//dd49dVXhb8Au9CAAQOiY8eOian36aefftLUAAAQAAMA7CZf+9rX5tTX11ckpd6jjjrK0CBBqqqq4v77749vf/vb8eKLL0ZTU5OmAOxiRx55ZGJqra+vX/eNb3zjdVMDAMAV0AAAu0ltbW16xYoVT++///6fT0K9hx56aLRt2zaqqqoMD7LYli1bYsqUKfHcc8/F9u3bNQRgN2nbtm0MGTIkMfUuX778qdraWtc/AwDgBDAAwO70xz/+cUJSas3Pz4/jjjvO0CBL1dTUxKOPPhq33XZb/OUvfxH+Auxmxx57bOTn5yel3Myvf/3rCaYGAECEABgAYLe66667llZXV89PSr1HH310tGjRwuAgi7wd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qATAAABZ4umnn968fPnyxF3xN3r06GjXrp0BAgBZqUOHDnH88ccnru5ly5ZNmD59+hYTBADgoxIAAwBkkbvvvvtPmUymKUk1FxYWxumnn254AEBWOvPMMxP3yYpMJtN41113/dH0AAD4OATAAABZ5Be/+MWatWvXTkta3UcccUT06tXLAAGArNK7d+847LDDEld3eXn5X+6///51JggAwMchAAYAyDIPP/zwn5JWcyqVijPPPNPwAICsMmbMmEilUomr+8EHH/yT6QEA8HEJgAEAsszXv/71NzZs2DAraXUPHDgwDj74YAMEALLCoEGDYsCAAYmru6KiYuatt966wAQBAPi4BMAAAFlo3Lhxv01i3WPGjIm8PFtMAGDvysvLizFjxiSy9j//+c+/NUEAAD7RflgLAACyz/XXXz+nqqrqr0mru1evXnHUUUcZIACwVx1zzDHRvXv3xNW9adOmV2666aa5JggAwCchAAYAyFJ/+tOf7k1i3WPGjInS0lIDBAD2ijZt2sRZZ52VyNofeOCBe00QAIBPSgAMAJClbrrpprlJPAVcXFwcZ555pgECAHvFWWedFS1btkxc3Zs2bXrl5ptvnmeCAAB8UgJgAIAsNm7cuF8lse5Ro0ZF7969DRAA2KP69OkTI0eOTGTtjz322K9MEACAXUEADACQxcaOHTu7qqrqb0mrO5VKxfnnnx+pVMoQAYA9tv/4/Oc/n8j9R2Vl5d+uueaav5kiAAC7ggAYACDLTZ069bdJrLtv374xZMgQAwQA9ojDDjsssTeQTJ48+TcmCADAriIABgDIcpdeeumLVVVVryax9s9//vNRXFxsiADAblVaWhrnn39+Imuvqqr66+WXX/6SKQIAsKsIgAEAEuChhx76WRLrLisri9NPP90AAYDd6qyzzoqSkpIklp753e9+91MTBABgVxIAAwAkwA033DB3w4YNs5JY+3HHHRd9+vQxRABgt+jbt28cddRRiay9oqJi1te//vU3TBEAgF1JAAwAkBA///nPfxoR6aTVnUql4vOf/3zk5dl6AgC7Vn5+flx00UWRSqWSWH76F7/4xX+bIgAAu5q3cAAACXHHHXe8tW7duulJrL13795xzDHHGCIAsEudcMIJ0b1790TWXl5e/pc77rjjLVMEAGBXEwADACTI3XfffW8mk2lKYu1nnXVWtG3b1hAB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onv37vEv//IvccABBzSrdWcymaYnnnji9s997nPPeAoAAODDEQADAJBYDz/88NJjjjlmY+/evY+KiGZzFKq0tDSGDx8eq1evjvXr13sQAHLcwIED45prrol27do1t6VnZsyY8YOzzjprqqcAAAA+PAEwAACJdv/99795zDHHVO6zzz5HRDMKgVu0aBGHHXZYtGzZMhYuXBjpdNrDAJBjCgoK4pxzzonzzz8/WrRo0dyWn37uuefuOuWUUyZ4EgAA4KMRAAMAkHi///3v5w8bNmxF3759j2lO10GnUqno27dvDB06NBYvXhxbtmzxMADkiJ49e8YNN9wQgwcPblbf+434x7XPU6ZM+fbpp58+2ZMAAAAfnQAYAICc8OCDDy4ZNmzYin79+jWrEDgionXr1nHEEUdEfX19LF261MMAkGCpVCpOOOGEuOKKK6JNmzbNbv07wt9vnXPOOX/xNAAAwMcjAAYAIGc89NBDS4YNG7a8X79+xza3EDg/Pz8OPvjg6NWrV8yfPz8aGho8EAAJU1JSEpdffnmccMIJkZ+f3+zWn8lkGp944olvffazn53maQAAgI9PAAwAQE556KGHlo4cOXJdnz59RqWa252ZEdG1a9cYNmxYLFu2LCorKz0QAAnRt2/fuO6662K//fZrluvPZDLpp59++rvnnHPO054GAAD4ZATAAADknD/96U+LDj300KX7779/s7sOOiKiuLg4jjzyyCgpKYk333wz0um0hwIgSxUUFMRnP/vZuPDCC6OkpKRZ9iCdTjc88sgjt5x//vnTPREAAPDJCYABAMhJDz/88NId3wQelUqlmt09mqlUKvr06RMHH3xwLFy4MLZt2+ahAMgynTt3jrFjx8bQoUOjGV5aERH/CH+feOKJ2y+88MLnPBEAALBrCIABAMhZDz300JIePXq8NmjQoGPz8vJaNMcetG3bNkaNGhVNTU2xZMkSDwVAFkilUjF69Oi48soro0OHDs22D01NTdt++9vf/stll132oqcCAAB2HQEwAAA5bdKkSeXdu3efM3jw4GYbAufn58eAAQOiV69esWDBgti+fbsHA2Avad26dVx66aVx/PHHR35+frPtQ2NjY/WvfvWrf7nuuute81QAAMCuJQAGACDnTZ48eW1jY+OMI4444uiCgoKS5tqHrl27xqhRo2Lbtm2xcuVKDwbAHpRKpWLUqFExduzY6NWrV7PuRX19/fo77rjjK9/61rcWejIAAGDXEwADANAsPP/881UbNmx45rjjjjuqsLCwrLn2obCwMAYNGhT77bdfLF68OGpraz0cALtZ+/bt44orrogTTzwxCgub9/uU2tralTfffPPVP/nJT1Z7MgAAYPcQAAMA0Gz87W9/27p27doZJ5xwwsjCwsK2zbkXnTp1ipEjR0Z1dbXTwAC70ciRI+Pqq6+OHj16NPte1NTULL/hhhuu/e1vf7vOkwEAALuPABgAgGbltdde2zpv3rynTznllKFFRUWdmnMvCgsL49BDD4399tsvFi1a5DQwwC709qnfk08+udmf+o2I2Lx587yLL774unHjxm30dAAAwO71fgFwat9zYsTOftC4LmLjq610DwCAxOrVq1fhs88++69du3Y9QTciGhoaYurUqTF58uRobGzUEICPqaCgIE499dQYPXq04HeH8vLyp4499tjvrly5skE3AABg9+swrDYKuuz8ZwJgAAByWuvWrfNeeumlm/fdd9+zdeMfVq9eHffff38sWbJEMwA+ov322y8uuugi1z2/w8KFC38/fPjwnzY0NGR0AwAA9gwBMAAAzd7zzz9/8aGHHnp1RKR0IyKTycTMmTPjz3/+c9TV1WkIwAcoKSmJ8847L0aMGBGplL9Kdki//PLL9xx77LEPagUAAOxZ7xcA+wYwAADNwn333Tfn+OOP39yrV6/DQwgcqVQqevfuHcOHD49169ZFRUWFhwTgPRxyyCExduzY6N+/v/B3h0wm0/jMM8/828knnzxONwAAYM97v28AC4ABAGg2fve7370xePDgJf369Ts6lUrl60hEcXFxjBgxInr06BFLly6N2tpaTQHYoUOHDvGFL3whzjzzzCguLtaQHZqammoeeOCBWz73uc9N1w0AANg7BMAAALDDww8/vKygoOC54cOHH1FQUFCqI//QrVu3OO6446K0tDQWL14cTU1NmgI0Wy1btoxzzjknLr300ujevbuGvENtbe2K22677arbbrvtDd0AAIC9RwAMAADv8Oyzz25avHjx0yeddNKQoqKiTjryD3l5edGnT58YOXJkbN26NVatWqUpQLNz+OGHx1e+8pUYMGBA5OXlacg7VFVV/e3CCy+8/oEHHvDdAAAA2MsEwAAA8C7z58+vefbZZ58+44wz+hcX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OigOOOCAKCoq0pQs0djYuGXmzJk/PvPMMyc2NDS4XgAAAPjQBMAAAJADjjzyyNY/+9nPrujbt++5EZGnI9mluro6Fi5cGPPnz4958+ZFZWWlprBXtGvXLg455JAYMGBA9O/fP1q39nsjWSj91ltv/fmqq676xaxZs6q1AwAA+KgEwAAAkEN++ctfjhgzZsyNrVq16q0b2SmdTsfKlStj0aJFsXDhwli8eHFs27ZNY9gtSkpKol+/ftG/f//Yf//9o1evXpGX53dEslVNTc3yRx999EdXXnnlK7oBAAB8XAJgAADIMd26dSt8+OGHPzd48ODL8vPzbdyzXCaTiTVr1sTChQtj0aJFsWjRotiyZYvG8LGUlZVF//79/xn6du/ePVKplMZkuaampprXXnvtV2PGjHmgoqKiUUcAAIBPQgAMAAA56rjjjiv7r//6r8tdC508mzdvjuXLl8eKFSti+fLlsXjx4qipqdEY/pfi4uLo169f9O7dO/bZZ5/Yd999o6ysTGMSJJPJpJcsWfLn66677pfTp0/3mx8AAMAuIQAGAIAc99Of/nTIueeee3NpaWlf3UimxsbGWLlyZSxdujSWLVsWy5cvj3Xr1kUmk9GcZiKVSkWXLl1in332iT59+kSfPn2iV69eUVBQoDkJtXXr1sUPPvjgj6699tq/6wYAALArCYABAKAZaNeuXf64cePOGTp06BUFBQWtdST56uvrY+XKlf88KbxixYpYu3ZtpNNpzUm4vLy86Nq1a+yzzz7//KdXr17RsmVLzckBjY2NW/7617/+4pxzznm0srKySUcAAIBdTQAMAADNyIknntjmnnvuuXzfffcdk0qlHB3MMdu3b481a9bEmjVrYu3atbF27dooLy+PDRs2CIazUF5eXnTs2DG6desWXbt2jW7dukW3bt2iR48eUVhYqEE5JpPJNC5ZsuRR1z0DAAC7mwAYAACaoa9+9av7Xnfdddd16NDhCN3IfY2Njf8MhNetWxfr1q2LioqKWLduXWzbtk2DdrPS0tLo3LnzP//p0qVLdO3aNbp27eoK52Ziw4YNM//rv/7rxz/60Y+W6wYAALC7CYABAKAZ++UvfznirLPOuq64uNj3gZupmpqaWL9+/T//qaioiMrKyqisrIxNmzZFY2OjJn2AgoKCaN++fbRr1y7at28fHTt2jC5dukSnTp2ic+fOUVxcrEnN1NatW98aP378PVdcccXLugEAAOwpAmAAAGjm2rVrl//ggw+eOWLEiCsLCwvb6gjvtHnz5n+GwZs2bYrKysqorq6OLVu2xJYtW6K6ujqqq6sjk8nk3NpTqVS0bt06WrduHWVlZdGmTZsoLS39X2Fvu3btok2bNh4U/peGhobKl1566efnnHPO+OrqavevAwAAe5QAGAAAiIiIoUOHFt97770XHHjggRfk5+c7ssiHlk6n/xkEV1dXR01Nzfv+k8lkora2NtLpdNTX10dTU1PU1dXt0u8U5+XlRcuWLSM/Pz+KiooiLy8vWrVqFalUKoqLi3f6T0lJSbRq1eqfgW9paWnk5eUZMB9aU1NTzYIFC/745S9/+Y+zZ8+u0REAAGBvEAADAAD/y2mnndb2rrvuurRPnz5n5+XlFeoIe9LbgfDbtm/f/r7XUBcUFESLFi3++b/fDnxhT8pkMg1LliwZd8stt/xq0qRJVToCAADsTQJgAABgp0477bS2d95554X777//5wTBAP9XJpNpWLhw4QO33nrrHwS/AABAtni/ADi/7UHRc2c/SG+LqC33/gcAAHLZokWL6u69995X0un0swcddFCnkpKS3roC8A8VFRUz/7//7/+77aKLLpq6aNGiOh0BAACyRXH3xsgr3fnPBMAAAEDMnDmz8u67736qqalpWr9+/Ypbt27dN5VKpXQGaG4ymUx6zZo1U+65555/Peeccx6cOXNmpa4AAADZRgAMAAB8KDNnzqz88Y9//Gw6nZ4uCAaak7eD37vvvvtfzz///McEvwAAQDYTAAMAAB+JIBhoLgS/AABAEgmAAQCAj+XtILisrOyFvn37diwuLu4VEYJgIBdkKioqnrv33nu/PWbMmEcEvwAAQJK8XwCc2vecGLGzHzSui9j4aivdAwAA/unqq6/u8ZWvfOX8Pn36nJWXl9dCR4CkSafT9UuXLh3/X//1Xw/84he/WKMjAABAEnUYVhsFXXb+MwEwAADwkZ1xxhntb7/99rMPPPDA8/Pz81vrCJDtmpqaqhcsWPDgd77znUcmTpzotC8AAJBoAmAAAGC3GD58eMkPf/jDzwwePPjioqKijjoCZJv6+voNr7322u9vvPHGx2fPnl2jIwAAQC4QAAMAALvV0KFDi++5556zDjnkkPOKioq66giwt9XV1a19/fXXH7z++uvHC34BAIBcIwAGAAD2iFatWuXdc889w0455ZTzO3bseJSOAHtYZsOGDbOmTJny4PXXX/9qbW1tWksAAIBcJAAGAAD2uH/913/tf/7555/dq1ev0/Ly8lroCLC7pNPp+pUrV05+4IEHHvnOd76zSEcAAIBcJwAGAAD2mjPOOKP97bfffvYBBxzw2YKCgjY6AuwqjY2NVW+++eafv/e97z06YcKETToCAAA0FwJgAABgrxs+fHjJ97///dGDBg0aU1paur+OAB9XdXX1wtdee+3Rr371q1Nfe+21Wh0BAACaGwEwAACQVb761a/ue8EFF3y6b9++ZxUUFLTWEeCDNDY2bnnrrbfG/+EPf5j4ox/9aLmOAAAAzZkAGAAAyEpDhw4t/sEPfnDy4MGDz27dunV/HQHerbq6+s2XX375weuuu+7ppUuXbtcRAAAAATAAAJDlCgsLU3ffffeQ0aNHn9G1a9fj8vLyinQFmq90Ol1XXl4+bcqUKROuvfbav+sIAADA/yYABgAAEqNPnz4t/v3f/33UyJEjz2rfvv2nIiKlK9AsZDZt2vTXF1544bGvfe1rzzntCwAA8N4EwAAAQCJddNFFXa6++uqTDzzwwLNbtmzZTUcg99TV1a1ZsGDBuJ/+9KdP3n///et0BAAA4IMJgAEAgETr1q1b4d13333k4YcffmqHDh2OyMvLK9QVSK50Ot2wcePGWbNmzZp8/fXXz6qoqGjUFQAAgA9PAAwAAOSMo48+uvWtt956/CGHHHJKu3btBkdEnq5AIqQrKytfmzdv3uQ777xz+owZM6q1BAAA4OMRAAMAADnpuOOOK/vGN75x/CGHHHJa27ZtB4bvBUO2yVRVVc2dN2/epO9///vTpk+fvkVLAAAAPjkBMAAAkPNuu+22vmedddZJffr0Oa5Vq1a9dQT2ntra2uXLly+f/uijjz51xx13vKUjAAAAu5YAGAAAaFa+9KUvdbv44ouP7t+//wlOBsMekamqqpq7cOHCv/z+97+fcd9995VrCQAAwO4jAAYAAJqtSy65pOtll112jDAYdrl0VVXVvIULF/7lV7/61bO/+93v1moJAADAniEABgAAiIirr766x/nnnz9q//33P7JNmzZDUqlUga7Ah5fJZBoqKyv/vnjx4uf+9Kc/zbr33ntX6woAAMCeJwAGAAB4l379+hV97WtfGzRy5MhRPXv2PLaoqKizrsD/VV9fv37VqlXPvPDCC8/9+7//+5zFixfX6woAAMDeJQAGAAB4H61bt8678847Bx599NFHde/efURpaen+4apomq/M1q1bF69Zs+bF5557btY3v/nNOdXV1WltAQAAyB4CYAAAgI9g8ODBrcaOHXvI8OHDD+vevfvw1q1bHxACYXJXprq6+s01a9a88sorr7z8k5/8ZN5rr71Wqy0AAADZSwAMAADwCVx//fX7nHHGGYf169dvePv27Yfm5+e31hWSrLGxsXrjxo2vvvXWWy+PHz/+lR//+McrdQUAACA5BMAAAAC70Je//OUe55xzzvA+ffoM7tix45CioqKuukI2q6+vX7t27doXFy9ePGfixImv3Xvvvat1BQAAILkEwAAAALvRl7/85R6f+cxnBvfr129Qly5dDm/ZsqVAmL2qrq5u7bp16wS+AAAAOUoADAAAsIe0atUq75prrtnn2GOPPXi//fY7uH379oeUlpb2TaVS+brDbpKuqalZtnHjxnlvvfXW3GeffXbef/3Xfy2vra1Naw0AAEBuEgADAADsRQceeGDLq6+++oAhQ4Yc3LNnz4Pbtm17sGuj+biampqqq6qqXi8vL583Z86ceb/85S/nvfjii1t1BgAAoPkQAAMAAGSZoUOHFn/xi1/cf9CgQQf26NHjwHbt2h3YqlWr3qlUKk932CFdU1OzvLKycsHq1asXzJkzZ8Gf//znJTNmzKjWGgAAgOZNAAwAAJAAxx13XNkFF1xw4MEHH3xA165dDywtLd23pKRkn1QqVag7uS2TyTRs27ZtRXV19dJ169YtfOONNxZOmDBh4YQJEzbpDgAAAO8mAAYAAEiw8847r+OJJ57Yp3///vt16dKlT5s2bfZr3bp1v/z8/GLdSZampqaa6urqxZs3b16ybt26pQsXLlzy9NNPL33ooYc26A4AAAAflgAYAAAgx7Rr1y7/kksu6TFkyJCe++67b89OnTr1Kisr61VcXNyzZcuW3VKpVL4u7R2ZTKaprq6uvKamZtWWLVtWVlRUrFy6dOnK2bNnr7r//vvXVFZWNukSAAAAn4QAGAAAoBnp1KlTwec+97luQ4cO7bnPPvv0aNeuXafWrVt3Li4u7tqyZcvORUVFnfLy8lro1MeTTqe319fXr6+rq6uoqalZW11dvb6y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AACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoIQADAAAAAAAAlBCAAQAAAAAAAEoIwAAAAAAAAAAlBGAAAAAAAACAEgIwAAAAAAAAQAkBGAAAAAAAAKCEAAwAAAAAAABQQgAGAAAAAAAAKCEAAwAAAAAAAJQQgAEAAAAAAABKCMAAAAAAAAAAJQRgAAAAAAAAgBICMAAAAAAAAEAJARgAAAAAAACghAAMAAAAAAAAUEIABgAAAAAAACghAAMAAAAAAACUEIABAAAAAAAASgjAAAAAAAAAACUEYAAAAAAAAIASAjAAAAAAAABACQEYAAAAAAAAoIQADAAAAAAAAFBCAAYAAAAAAAAoMY3JP//9K8My551lzpAk293a7QAAAAAAAAD8iIw3r+SL7TpPxuSt4/ibJJuz20QDBgAAAAAAAHhzrJPp6NvHYcyyjLl7dJTPbl/Jp6sPLufSsM+5ec7q5YOrF0OeP/SVaAAAAAAAAIA3weH7u6zfm79dWDIMSw6225w785vsx3XyzasOby5ssz69c4sAAAAAAAAAr9n69C6bC9sT93a7rKdnORin5Otxynzi1JQcfiwCAwAAAAAAALxO69O7HH68TaaT98cp85R8vbp3Nfszv8q0LHn7xMF1sjk/ZzUPmZ/MmWefhAYAAAAAAAD4oayPdjn7223Gn7x6ZrXPnetX8mBKkpv3cufDd/Pufn5FL56SzcVtNheT3dNt8tQlAwAAAAAAAHyv1sm0ySv/9XtsNWZ3I/lHkgzHi7/4XY7WYz5yiwAAAAAAAAA/Ivtcv/3nPEyS1fHa42t5+vNLyX7JoRsCAAAAAAAAePPt1/nbV3/KvePn1Xc371/NYxEYAAAAAAAA4M0yTHk2rvNo2WdzvHZqzN9v/SF3vju3evng/at5fPDLPDu1yuGyZHSVAAAAAAAAAK/XOGe4ueSvZ4e8M8xZbVe5ceuPufvy3Oqkw4+v5emDX+fuuTlLhhwsEYIBAAAAAAAAXpclGR8OuXP0TR4cPM/9z/+SRyfNDf/1TZezOp/87KdjzizJZkhO7edMy/w/nAUAAAAAAADg/zaMWcZkP8/ZLsmLacr2/MV8+cnvs/tP5/4FmLjAq1ifcioAAAAASUVORK5CYII=";
      var d = t.objectName ? q(t.objectName) : "Media ".concat(e._slideObjects.filter(function(e) {
        return e._type === h.media;
      }).length);
      var f = {
        _type: h.media
      };
      if (s || A || "online" === l) {
        if (A && !A.toLowerCase().includes("base64,")) throw Error("addMedia() error: `data` value lacks a base64 header! Ex: 'video/mpeg;base64,NMP[...]')");
        if (p && !p.toLowerCase().includes("base64,")) throw Error("addMedia() error: `cover` value lacks a base64 header! Ex: 'data:image/png;base64,iV[...]')");
      } else throw Error("addMedia() error: either `data` or `path` are required!");
      if ("online" === l && !i) throw Error("addMedia() error: online videos require `link` value");
      if (c = t.extn || (A ? A.split(";")[0].split("/")[1] : s.split(".").pop()) || "mp3", f.mtype = l, f.media = s || "preencoded.mov", f.options = {}, f.options.x = a, f.options.y = r, f.options.w = n, f.options.h = o, f.options.objectName = d, "online" === l) {
        var u = er(e);
        e._relsMedia.push({
          path: s || "preencoded" + c,
          data: "dummy",
          type: "online",
          extn: c,
          rId: u,
          Target: i
        });
        f.mediaRid = u;
        e._relsMedia.push({
          path: "preencoded.png",
          data: p,
          type: "image/png",
          extn: "png",
          rId: er(e),
          Target: "../media/image-".concat(e._slideNum, "-").concat(e._relsMedia.length + 1, ".png")
        });
      } else {
        var m = e._relsMedia.filter(function(e) {
          return e.path && e.path === s && e.type === l + "/" + c && !e.isDuplicate;
        })[0];
        var u = er(e);
        e._relsMedia.push({
          path: s || "preencoded" + c,
          type: l + "/" + c,
          extn: c,
          data: A || "",
          rId: u,
          isDuplicate: !!m?.Target,
          Target: m?.Target ? m.Target : "../media/media-".concat(e._slideNum, "-").concat(e._relsMedia.length + 1, ".").concat(c)
        });
        f.mediaRid = u;
        e._relsMedia.push({
          path: s || "preencoded" + c,
          type: l + "/" + c,
          extn: c,
          data: A || "",
          rId: er(e),
          isDuplicate: !!m?.Target,
          Target: m?.Target ? m.Target : "../media/media-".concat(e._slideNum, "-").concat(e._relsMedia.length + 0, ".").concat(c)
        });
        e._relsMedia.push({
          path: "preencoded.png",
          type: "image/png",
          extn: "png",
          data: p,
          rId: er(e),
          Target: "../media/image-".concat(e._slideNum, "-").concat(e._relsMedia.length + 1, ".png")
        });
      }
      e._slideObjects.push(f);
    })(this, e);
    return this;
  };
  e.prototype.addNotes = function(e) {
    (function(e, t) {
      e._slideObjects.push({
        _type: h.notes,
        text: [{
          text: t
        }]
      });
    })(this, e);
    return this;
  };
  e.prototype.addShape = function(e, t) {
    el(this, e, t);
    return this;
  };
  e.prototype.addTable = function(e, t) {
    this._newAutoPagedSlides = function(e, t, a, r, n, o, A) {
      var i = [e];
      var s = a && "object" == typeof a ? a : {};
      if (s.objectName = s.objectName ? q(s.objectName) : "Table ".concat(e._slideObjects.filter(function(e) {
        return e._type === h.table;
      }).length), null === t || 0 === t.length || !Array.isArray(t)) throw Error("addTable: Array expected! EX: 'slide.addTable( [rows], {options} );' (https://gitbrent.github.io/PptxGenJS/docs/api-tables.html)");
      if (!t[0] || !Array.isArray(t[0])) throw Error("addTable: 'rows' should be an array of cells! EX: 'slide.addTable( [ ['A'], ['B'], {text:'C',options:{align:'center'}} ] );' (https://gitbrent.github.io/PptxGenJS/docs/api-tables.html)");
      var l = [];
      t.forEach(function(e) {
        var t = [];
        Array.isArray(e) ? e.forEach(function(e) {
          var a = {
            _type: h.tablecell,
            text: "",
            options: "object" == typeof e && e.options ? e.options : {}
          };
          "string" == typeof e || "number" == typeof e ? a.text = e.toString() : e.text && ("string" == typeof e.text || "number" == typeof e.text ? a.text = e.text.toString() : e.text && (a.text = e.text), e.options && "object" == typeof e.options && (a.options = e.options));
          a.options.border = a.options.border || s.border || [{
            type: "none"
          }, {
            type: "none"
          }, {
            type: "none"
          }, {
            type: "none"
          }];
          var r = a.options.border;
          Array.isArray(r) || "object" != typeof r || (a.options.border = [r, r, r, r]);
          a.options.border[0] || (a.options.border[0] = {
            type: "none"
          });
          a.options.border[1] || (a.options.border[1] = {
            type: "none"
          });
          a.options.border[2] || (a.options.border[2] = {
            type: "none"
          });
          a.options.border[3] || (a.options.border[3] = {
            type: "none"
          });
          [0, 1, 2, 3].forEach(function(e) {
            a.options.border[e] = {
              type: a.options.border[e].type || L.type,
              color: a.options.border[e].color || L.color,
              pt: "number" == typeof a.options.border[e].pt ? a.options.border[e].pt : L.pt
            };
          });
          t.push(a);
        }) : (console.log("addTable: tableRows has a bad row. A row should be an array of cells. You provided:"), console.log(e));
        l.push(t);
      });
      s.x = H(s.x || (0 === s.x ? 0 : 457200), "X", n);
      s.y = H(s.y || (0 === s.y ? 0 : 457200), "Y", n);
      s.h && (s.h = H(s.h, "Y", n));
      s.fontSize = s.fontSize || 12;
      s.margin = 0 === s.margin || s.margin ? s.margin : B;
      "number" == typeof s.margin && (s.margin = [Number(s.margin), Number(s.margin), Number(s.margin), Number(s.margin)]);
      s.color || (s.color = s.color || E);
      "string" == typeof s.border ? (console.warn("addTable `border` option must be an object. Ex: `{border: {type:'none'}}`"), s.border = null) : Array.isArray(s.border) && [0, 1, 2, 3].forEach(function(e) {
        s.border[e] = s.border[e] ? {
          type: s.border[e].type || L.type,
          color: s.border[e].color || L.color,
          pt: s.border[e].pt || L.pt
        } : {
          type: "none"
        };
      });
      s.autoPage = "boolean" == typeof s.autoPage && s.autoPage;
      s.autoPageRepeatHeader = "boolean" == typeof s.autoPageRepeatHeader && s.autoPageRepeatHeader;
      s.autoPageHeaderRows = void 0 === s.autoPageHeaderRows || isNaN(Number(s.autoPageHeaderRows)) ? 1 : Number(s.autoPageHeaderRows);
      s.autoPageLineWeight = void 0 === s.autoPageLineWeight || isNaN(Number(s.autoPageLineWeight)) ? 0 : Number(s.autoPageLineWeight);
      s.autoPageLineWeight && (s.autoPageLineWeight > 1 ? s.autoPageLineWeight = 1 : s.autoPageLineWeight < -1 && (s.autoPageLineWeight = -1));
      var c = _;
      if (r && void 0 !== r._margin && (Array.isArray(r._margin) ? c = r._margin : isNaN(Number(r._margin)) || (c = [Number(r._margin), Number(r._margin), Number(r._margin), Number(r._margin)])), s.colW) {
        var p = l[0].reduce(function(e, t) {
          var a;
          t?.options?.colspan && "number" == typeof t.options.colspan ? e += t.options.colspan : e += 1;
          return e;
        }, 0);
        "string" == typeof s.colW || "number" == typeof s.colW ? (s.w = Math.floor(Number(s.colW) * p), s.colW = null) : s.colW && Array.isArray(s.colW) && 1 === s.colW.length && p > 1 ? (s.w = Math.floor(Number(s.colW) * p), s.colW = null) : s.colW && Array.isArray(s.colW) && s.colW.length !== p && (console.warn("addTable: mismatch: (colW.length != data.length) Therefore, defaulting to evenly distributed col widths."), s.colW = null);
      } else s.w ? s.w = H(s.w, "X", n) : s.w = Math.floor(n._sizeW / 914400 - c[1] - c[3]);
      s.x && s.x < 20 && (s.x = J(s.x));
      s.y && s.y < 20 && (s.y = J(s.y));
      s.w && s.w < 20 && (s.w = J(s.w));
      s.h && s.h < 20 && (s.h = J(s.h));
      l.forEach(function(e) {
        e.forEach(function(t, a) {
          "number" == typeof t || "string" == typeof t ? e[a] = {
            _type: h.tablecell,
            text: String(e[a]),
            options: s
          } : "object" == typeof t && ("number" == typeof t.text ? e[a].text = e[a].text.toString() : (void 0 === t.text || null === t.text) && (e[a].text = ""), e[a].options = t.options || {}, e[a]._type = h.tablecell);
        });
      });
      var d = [];
      s && !s.autoPage ? (ed(e, l), e._slideObjects.push({
        _type: h.table,
        arrTabRows: l,
        options: Object.assign({}, s)
      })) : (s.autoPageRepeatHeader && (s._arrObjTabHeadRows = l.filter(function(e, t) {
        return t < s.autoPageHeaderRows;
      })), eo(l, s, n, r).forEach(function(t, a) {
        A(e._slideNum + a) || i.push(o({
          masterName: r?._name || null
        }));
        a > 0 && (s.y = J(s.autoPageSlideStartY || s.newSlideStartY || c[0]));
        var n = A(e._slideNum + a);
        s.autoPage = !1;
        ed(n, t.rows);
        n.addTable(t.rows, Object.assign({}, s));
        a > 0 && d.push(n);
      }));
      return d;
    }(this, e, t, this._slideLayout, this._presLayout, this.addSlide, this.getSlide);
    return this;
  };
  e.prototype.addText = function(e, t) {
    ec(this, "string" == typeof e || "number" == typeof e ? [{
      text: e,
      options: t
    }] : e, t, !1);
    return this;
  };
  return e;
}();
function eu(e, t, a, r, n, o) {
  var A = -1;
  var i = 1;
  var s = null;
  var l = "";
  switch (e) {
    case d.AREA:
    case d.BAR:
    case d.BAR3D:
    case d.LINE:
    case d.RADAR:
      l += "<c:".concat(e, "Chart>");
      e === d.AREA && "stacked" === a.barGrouping && (l += '<c:grouping val="' + a.barGrouping + '"/>');
      (e === d.BAR || e === d.BAR3D) && (l += '<c:barDir val="' + a.barDir + '"/>', l += '<c:grouping val="' + (a.barGrouping || "clustered") + '"/>');
      e === d.RADAR && (l += '<c:radarStyle val="' + a.radarStyle + '"/>');
      l += '<c:varyColors val="0"/>';
      t.forEach(function(r) {
        A++;
        l += "<c:ser>";
        l += '  <c:idx val="'.concat(r._dataIndex, '"/><c:order val="').concat(r._dataIndex, '"/>');
        l += "  <c:tx>";
        l += "    <c:strRef>";
        l += "      <c:f>Sheet1!$" + ev(r._dataIndex + r.labels.length + 1) + "$1</c:f>";
        l += '      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>' + q(r.name) + "</c:v></c:pt></c:strCache>";
        l += "    </c:strRef>";
        l += "  </c:tx>";
        var n;
        var o = a.chartColors ? a.chartColors[A % a.chartColors.length] : null;
        l += "  <c:spPr>";
        "transparent" === o ? l += "<a:noFill/>" : a.chartColorsOpacity ? l += "<a:solidFill>" + et(o, '<a:alpha val="'.concat(Math.round(1e3 * a.chartColorsOpacity), '"/>')) + "</a:solidFill>" : l += "<a:solidFill>" + et(o) + "</a:solidFill>";
        e === d.LINE || e === d.RADAR ? 0 === a.lineSize ? l += "<a:ln><a:noFill/></a:ln>" : (l += '<a:ln w="'.concat(K(a.lineSize), '" cap="').concat(ex(a.lineCap), '"><a:solidFill>').concat(et(o), "</a:solidFill>"), l += '<a:prstDash val="' + (a.lineDash || "solid") + '"/><a:round/></a:ln>') : a.dataBorder && (l += '<a:ln w="'.concat(K(a.dataBorder.pt), '" cap="').concat(ex(a.lineCap), '"><a:solidFill>').concat(et(a.dataBorder.color), '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'));
        l += eb(a.shadow, F);
        l += "  </c:spPr>";
        l += '  <c:invertIfNegative val="0"/>';
        e !== d.RADAR && (l += "<c:dLbls>", l += '<c:numFmt formatCode="'.concat(q(a.dataLabelFormatCode) || "General", '" sourceLinked="0"/>'), a.dataLabelBkgrdColors && (l += "<c:spPr><a:solidFill>".concat(et(o), "</a:solidFill></c:spPr>")), l += "<c:txPr><a:bodyPr/><a:lstStyle/><a:p><a:pPr>", l += '<a:defRPr b="'.concat(a.dataLabelFontBold ? 1 : 0, '" i="').concat(a.dataLabelFontItalic ? 1 : 0, '" strike="noStrike" sz="').concat(Math.round(100 * (a.dataLabelFontSize || 12)), '" u="none">'), l += "<a:solidFill>".concat(et(a.dataLabelColor || E), "</a:solidFill>"), l += '<a:latin typeface="'.concat(a.dataLabelFontFace || "Arial", '"/>'), l += "</a:defRPr></a:pPr></a:p></c:txPr>", a.dataLabelPosition && (l += '<c:dLblPos val="'.concat(a.dataLabelPosition, '"/>')), l += '<c:showLegendKey val="0"/>', l += '<c:showVal val="'.concat(a.showValue ? "1" : "0", '"/>'), l += '<c:showCatName val="0"/><c:showSerName val="'.concat(a.showSerName ? "1" : "0", '"/><c:showPercent val="0"/><c:showBubbleSize val="0"/>'), l += '<c:showLeaderLines val="'.concat(a.showLeaderLines ? "1" : "0", '"/>'), l += "</c:dLbls>");
        (e === d.LINE || e === d.RADAR) && (l += "<c:marker>", l += '  <c:symbol val="' + a.lineDataSymbol + '"/>', a.lineDataSymbolSize && (l += '<c:size val="'.concat(a.lineDataSymbolSize, '"/>')), l += "  <c:spPr>", l += "    <a:solidFill>".concat(et(a.chartColors[r._dataIndex + 1 > a.chartColors.length ? Math.floor(Math.random() * a.chartColors.length) : r._dataIndex]), "</a:solidFill>"), l += '    <a:ln w="'.concat(a.lineDataSymbolLineSize, '" cap="flat"><a:solidFill>').concat(et(a.lineDataSymbolLineColor || o), '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'), l += "    <a:effectLst/>", l += "  </c:spPr>", l += "</c:marker>");
        (e === d.BAR || e === d.BAR3D) && 1 === t.length && (a.chartColors && a.chartColors !== G && a.chartColors.length > 1 || a.invertedColors?.length) && r.values.forEach(function(t, r) {
          var n = t < 0 ? a.invertedColors || a.chartColors || G : a.chartColors || [];
          l += "  <c:dPt>";
          l += '    <c:idx val="'.concat(r, '"/>');
          l += '      <c:invertIfNegative val="0"/>';
          l += '    <c:bubble3D val="0"/>';
          l += "    <c:spPr>";
          0 === a.lineSize ? l += "<a:ln><a:noFill/></a:ln>" : e === d.BAR ? (l += "<a:solidFill>", l += '  <a:srgbClr val="' + n[r % n.length] + '"/>', l += "</a:solidFill>") : (l += "<a:ln>", l += "  <a:solidFill>", l += '   <a:srgbClr val="' + n[r % n.length] + '"/>', l += "  </a:solidFill>", l += "</a:ln>");
          l += eb(a.shadow, F);
          l += "    </c:spPr>";
          l += "  </c:dPt>";
        });
        l += "<c:cat>";
        a.catLabelFormatCode ? (l += "  <c:numRef>", l += "    <c:f>Sheet1!$A$2:$A$".concat(r.labels[0].length + 1, "</c:f>"), l += "    <c:numCache>", l += "      <c:formatCode>" + (a.catLabelFormatCode || "General") + "</c:formatCode>", l += '      <c:ptCount val="'.concat(r.labels[0].length, '"/>'), r.labels[0].forEach(function(e, t) {
          return l += '<c:pt idx="'.concat(t, '"><c:v>').concat(q(e), "</c:v></c:pt>");
        }), l += "    </c:numCache>", l += "  </c:numRef>") : (l += "  <c:multiLvlStrRef>", l += "    <c:f>Sheet1!$A$2:$".concat(ev(r.labels.length), "$").concat(r.labels[0].length + 1, "</c:f>"), l += "    <c:multiLvlStrCache>", l += '      <c:ptCount val="'.concat(r.labels[0].length, '"/>'), r.labels.forEach(function(e) {
          l += "<c:lvl>";
          e.forEach(function(e, t) {
            return l += '<c:pt idx="'.concat(t, '"><c:v>').concat(q(e), "</c:v></c:pt>");
          });
          l += "</c:lvl>";
        }), l += "    </c:multiLvlStrCache>", l += "  </c:multiLvlStrRef>");
        l += "</c:cat>";
        l += "<c:val>";
        l += "  <c:numRef>";
        l += "<c:f>Sheet1!$".concat(ev(r._dataIndex + r.labels.length + 1), "$2:$").concat(ev(r._dataIndex + r.labels.length + 1), "$").concat(r.labels[0].length + 1, "</c:f>");
        l += "    <c:numCache>";
        l += "      <c:formatCode>" + (a.valLabelFormatCode || a.dataTableFormatCode || "General") + "</c:formatCode>";
        l += '      <c:ptCount val="'.concat(r.labels[0].length, '"/>');
        r.values.forEach(function(e, t) {
          return l += '<c:pt idx="'.concat(t, '"><c:v>').concat(e || 0 === e ? e : "", "</c:v></c:pt>");
        });
        l += "    </c:numCache>";
        l += "  </c:numRef>";
        l += "</c:val>";
        e === d.LINE && (l += '<c:smooth val="' + (a.lineSmooth ? "1" : "0") + '"/>');
        l += "</c:ser>";
      });
      l += "  <c:dLbls>";
      l += '    <c:numFmt formatCode="'.concat(q(a.dataLabelFormatCode) || "General", '" sourceLinked="0"/>');
      l += "    <c:txPr>";
      l += "      <a:bodyPr/>";
      l += "      <a:lstStyle/>";
      l += "      <a:p><a:pPr>";
      l += '        <a:defRPr b="'.concat(a.dataLabelFontBold ? 1 : 0, '" i="').concat(a.dataLabelFontItalic ? 1 : 0, '" strike="noStrike" sz="').concat(Math.round(100 * (a.dataLabelFontSize || 12)), '" u="none">');
      l += "          <a:solidFill>" + et(a.dataLabelColor || E) + "</a:solidFill>";
      l += '          <a:latin typeface="' + (a.dataLabelFontFace || "Arial") + '"/>';
      l += "        </a:defRPr>";
      l += "      </a:pPr></a:p>";
      l += "    </c:txPr>";
      a.dataLabelPosition && (l += ' <c:dLblPos val="' + a.dataLabelPosition + '"/>');
      l += '    <c:showLegendKey val="0"/>';
      l += '    <c:showVal val="' + (a.showValue ? "1" : "0") + '"/>';
      l += '    <c:showCatName val="0"/>';
      l += '    <c:showSerName val="' + (a.showSerName ? "1" : "0") + '"/>';
      l += '    <c:showPercent val="0"/>';
      l += '    <c:showBubbleSize val="0"/>';
      l += '    <c:showLeaderLines val="'.concat(a.showLeaderLines ? "1" : "0", '"/>');
      l += "  </c:dLbls>";
      e === d.BAR ? (l += '  <c:gapWidth val="'.concat(a.barGapWidthPct, '"/>'), l += '  <c:overlap val="'.concat((a.barGrouping || "").includes("tacked") ? 100 : a.barOverlapPct ? a.barOverlapPct : 0, '"/>')) : e === d.BAR3D ? (l += '  <c:gapWidth val="'.concat(a.barGapWidthPct, '"/>'), l += '  <c:gapDepth val="'.concat(a.barGapDepthPct, '"/>'), l += '  <c:shape val="' + a.bar3DShape + '"/>') : e === d.LINE && (l += '  <c:marker val="1"/>');
      l += '<c:axId val="'.concat(n, '"/><c:axId val="').concat(r, '"/><c:axId val="').concat(j, '"/>');
      l += "</c:".concat(e, "Chart>");
      break;
    case d.SCATTER:
      l += "<c:" + e + "Chart>";
      l += '<c:scatterStyle val="lineMarker"/>';
      l += '<c:varyColors val="0"/>';
      A = -1;
      t.filter(function(e, t) {
        return t > 0;
      }).forEach(function(e, r) {
        A++;
        l += "<c:ser>";
        l += '  <c:idx val="'.concat(r, '"/>');
        l += '  <c:order val="'.concat(r, '"/>');
        l += "  <c:tx>";
        l += "    <c:strRef>";
        l += "      <c:f>Sheet1!$".concat(ev(r + 2), "$1</c:f>");
        l += '      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>' + q(e.name) + "</c:v></c:pt></c:strCache>";
        l += "    </c:strRef>";
        l += "  </c:tx>";
        l += "  <c:spPr>";
        var n = a.chartColors[A % a.chartColors.length];
        if ("transparent" === n ? l += "<a:noFill/>" : a.chartColorsOpacity ? l += "<a:solidFill>" + et(n, '<a:alpha val="' + Math.round(1e3 * a.chartColorsOpacity).toString() + '"/>') + "</a:solidFill>" : l += "<a:solidFill>" + et(n) + "</a:solidFill>", 0 === a.lineSize ? l += "<a:ln><a:noFill/></a:ln>" : (l += '<a:ln w="'.concat(K(a.lineSize), '" cap="').concat(ex(a.lineCap), '"><a:solidFill>').concat(et(n), "</a:solidFill>"), l += '<a:prstDash val="'.concat(a.lineDash || "solid", '"/><a:round/></a:ln>')), l += eb(a.shadow, F), l += "  </c:spPr>", l += "<c:marker>", l += '  <c:symbol val="' + a.lineDataSymbol + '"/>', a.lineDataSymbolSize && (l += '<c:size val="'.concat(a.lineDataSymbolSize, '"/>')), l += "<c:spPr>", l += "<a:solidFill>".concat(et(a.chartColors[r + 1 > a.chartColors.length ? Math.floor(Math.random() * a.chartColors.length) : r]), "</a:solidFill>"), l += '<a:ln w="'.concat(a.lineDataSymbolLineSize, '" cap="flat"><a:solidFill>').concat(et(a.lineDataSymbolLineColor || a.chartColors[A % a.chartColors.length]), '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'), l += "<a:effectLst/>", l += "</c:spPr>", l += "</c:marker>", a.showLabel) {
          var o = V("-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
          e.labels[0] && ("custom" === a.dataLabelFormatScatter || "customXY" === a.dataLabelFormatScatter) && (l += "<c:dLbls>", e.labels[0].forEach(function(t, r) {
            ("custom" === a.dataLabelFormatScatter || "customXY" === a.dataLabelFormatScatter) && (l += "  <c:dLbl>", l += '    <c:idx val="'.concat(r, '"/>'), l += "    <c:tx>", l += "      <c:rich>", l += "            <a:bodyPr>", l += "                <a:spAutoFit/>", l += "            </a:bodyPr>", l += "            <a:lstStyle/>", l += "            <a:p>", l += "                <a:pPr>", l += "                    <a:defRPr/>", l += "                </a:pPr>", l += "              <a:r>", l += '                    <a:rPr lang="' + (a.lang || "en-US") + '" dirty="0"/>', l += "                    <a:t>" + q(t) + "</a:t>", l += "              </a:r>", "customXY" !== a.dataLabelFormatScatter || /^ *$/.test(t) || (l += "              <a:r>", l += '                  <a:rPr lang="' + (a.lang || "en-US") + '" baseline="0" dirty="0"/>', l += "                  <a:t> (</a:t>", l += "              </a:r>", l += '              <a:fld id="{' + V("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") + '}" type="XVALUE">', l += '                  <a:rPr lang="' + (a.lang || "en-US") + '" baseline="0"/>', l += "                  <a:pPr>", l += "                      <a:defRPr/>", l += "                  </a:pPr>", l += "                  <a:t>[" + q(e.name) + "</a:t>", l += "              </a:fld>", l += "              <a:r>", l += '                  <a:rPr lang="' + (a.lang || "en-US") + '" baseline="0" dirty="0"/>', l += "                  <a:t>, </a:t>", l += "              </a:r>", l += '              <a:fld id="{' + V("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") + '}" type="YVALUE">', l += '                  <a:rPr lang="' + (a.lang || "en-US") + '" baseline="0"/>', l += "                  <a:pPr>", l += "                      <a:defRPr/>", l += "                  </a:pPr>", l += "                  <a:t>[" + q(e.name) + "]</a:t>", l += "              </a:fld>", l += "              <a:r>", l += '                  <a:rPr lang="' + (a.lang || "en-US") + '" baseline="0" dirty="0"/>', l += "                  <a:t>)</a:t>", l += "              </a:r>", l += '              <a:endParaRPr lang="' + (a.lang || "en-US") + '" dirty="0"/>'), l += "            </a:p>", l += "      </c:rich>", l += "    </c:tx>", l += "    <c:spPr>", l += "        <a:noFill/>", l += "        <a:ln>", l += "            <a:noFill/>", l += "        </a:ln>", l += "        <a:effectLst/>", l += "    </c:spPr>", a.dataLabelPosition && (l += ' <c:dLblPos val="' + a.dataLabelPosition + '"/>'), l += '    <c:showLegendKey val="0"/>', l += '    <c:showVal val="0"/>', l += '    <c:showCatName val="0"/>', l += '    <c:showSerName val="0"/>', l += '    <c:showPercent val="0"/>', l += '    <c:showBubbleSize val="0"/>', l += '       <c:showLeaderLines val="1"/>', l += "    <c:extLst>", l += '      <c:ext uri="{CE6537A1-D6FC-4f65-9D91-7224C49458BB}" xmlns:c15="http://schemas.microsoft.com/office/drawing/2012/chart"/>', l += '      <c:ext uri="{C3380CC4-5D6E-409C-BE32-E72D297353CC}" xmlns:c16="http://schemas.microsoft.com/office/drawing/2014/chart">', l += '            <c16:uniqueId val="{'.concat("00000000".substring(0, 8 - (r + 1).toString().length).toString()).concat(r + 1).concat(o, '}"/>'), l += "      </c:ext>", l += "        </c:extLst>", l += "</c:dLbl>");
          }), l += "</c:dLbls>");
          "XY" === a.dataLabelFormatScatter && (l += "<c:dLbls>", l += "    <c:spPr>", l += "        <a:noFill/>", l += "        <a:ln>", l += "            <a:noFill/>", l += "        </a:ln>", l += "          <a:effectLst/>", l += "    </c:spPr>", l += "    <c:txPr>", l += "        <a:bodyPr>", l += "            <a:spAutoFit/>", l += "        </a:bodyPr>", l += "        <a:lstStyle/>", l += "        <a:p>", l += "            <a:pPr>", l += "                <a:defRPr/>", l += "            </a:pPr>", l += '            <a:endParaRPr lang="en-US"/>', l += "        </a:p>", l += "    </c:txPr>", a.dataLabelPosition && (l += ' <c:dLblPos val="' + a.dataLabelPosition + '"/>'), l += '    <c:showLegendKey val="0"/>', l += ' <c:showVal val="'.concat(a.showLabel ? "1" : "0", '"/>'), l += ' <c:showCatName val="'.concat(a.showLabel ? "1" : "0", '"/>'), l += ' <c:showSerName val="'.concat(a.showSerName ? "1" : "0", '"/>'), l += '    <c:showPercent val="0"/>', l += '    <c:showBubbleSize val="0"/>', l += "    <c:extLst>", l += '        <c:ext uri="{CE6537A1-D6FC-4f65-9D91-7224C49458BB}" xmlns:c15="http://schemas.microsoft.com/office/drawing/2012/chart">', l += '            <c15:showLeaderLines val="1"/>', l += "        </c:ext>", l += "    </c:extLst>", l += "</c:dLbls>");
        }
        1 === t.length && a.chartColors !== G && e.values.forEach(function(e, t) {
          var r = e < 0 ? a.invertedColors || a.chartColors || G : a.chartColors || [];
          l += "  <c:dPt>";
          l += '    <c:idx val="'.concat(t, '"/>');
          l += '      <c:invertIfNegative val="0"/>';
          l += '    <c:bubble3D val="0"/>';
          l += "    <c:spPr>";
          0 === a.lineSize ? l += "<a:ln><a:noFill/></a:ln>" : (l += "<a:solidFill>", l += ' <a:srgbClr val="' + r[t % r.length] + '"/>', l += "</a:solidFill>");
          l += eb(a.shadow, F);
          l += "    </c:spPr>";
          l += "  </c:dPt>";
        });
        l += "<c:xVal>";
        l += "  <c:numRef>";
        l += "    <c:f>Sheet1!$A$2:$A$".concat(t[0].values.length + 1, "</c:f>");
        l += "    <c:numCache>";
        l += "      <c:formatCode>General</c:formatCode>";
        l += '      <c:ptCount val="'.concat(t[0].values.length, '"/>');
        t[0].values.forEach(function(e, t) {
          l += '<c:pt idx="'.concat(t, '"><c:v>').concat(e || 0 === e ? e : "", "</c:v></c:pt>");
        });
        l += "    </c:numCache>";
        l += "  </c:numRef>";
        l += "</c:xVal>";
        l += "<c:yVal>";
        l += "  <c:numRef>";
        l += "    <c:f>Sheet1!$".concat(ev(r + 2), "$2:$").concat(ev(r + 2), "$").concat(t[0].values.length + 1, "</c:f>");
        l += "    <c:numCache>";
        l += "      <c:formatCode>General</c:formatCode>";
        l += '      <c:ptCount val="'.concat(t[0].values.length, '"/>');
        t[0].values.forEach(function(t, a) {
          l += '<c:pt idx="'.concat(a, '"><c:v>').concat(e.values[a] || 0 === e.values[a] ? e.values[a] : "", "</c:v></c:pt>");
        });
        l += "    </c:numCache>";
        l += "  </c:numRef>";
        l += "</c:yVal>";
        l += '<c:smooth val="' + (a.lineSmooth ? "1" : "0") + '"/>';
        l += "</c:ser>";
      });
      l += "  <c:dLbls>";
      l += '    <c:numFmt formatCode="'.concat(q(a.dataLabelFormatCode) || "General", '" sourceLinked="0"/>');
      l += "    <c:txPr>";
      l += "      <a:bodyPr/>";
      l += "      <a:lstStyle/>";
      l += "      <a:p><a:pPr>";
      l += '        <a:defRPr b="'.concat(a.dataLabelFontBold ? "1" : "0", '" i="').concat(a.dataLabelFontItalic ? "1" : "0", '" strike="noStrike" sz="').concat(Math.round(100 * (a.dataLabelFontSize || 12)), '" u="none">');
      l += "          <a:solidFill>" + et(a.dataLabelColor || E) + "</a:solidFill>";
      l += '          <a:latin typeface="' + (a.dataLabelFontFace || "Arial") + '"/>';
      l += "        </a:defRPr>";
      l += "      </a:pPr></a:p>";
      l += "    </c:txPr>";
      a.dataLabelPosition && (l += ' <c:dLblPos val="' + a.dataLabelPosition + '"/>');
      l += '    <c:showLegendKey val="0"/>';
      l += '    <c:showVal val="' + (a.showValue ? "1" : "0") + '"/>';
      l += '    <c:showCatName val="0"/>';
      l += '    <c:showSerName val="' + (a.showSerName ? "1" : "0") + '"/>';
      l += '    <c:showPercent val="0"/>';
      l += '    <c:showBubbleSize val="0"/>';
      l += "  </c:dLbls>";
      l += '<c:axId val="'.concat(n, '"/><c:axId val="').concat(r, '"/>');
      l += "</c:" + e + "Chart>";
      break;
    case d.BUBBLE:
    case d.BUBBLE3D:
      l += "<c:bubbleChart>";
      l += '<c:varyColors val="0"/>';
      A = -1;
      t.filter(function(e, t) {
        return t > 0;
      }).forEach(function(r, n) {
        A++;
        l += "<c:ser>";
        l += '  <c:idx val="'.concat(n, '"/>');
        l += '  <c:order val="'.concat(n, '"/>');
        l += "  <c:tx>";
        l += "    <c:strRef>";
        l += "      <c:f>Sheet1!$" + ev(i + 1) + "$1</c:f>";
        l += '      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>' + q(r.name) + "</c:v></c:pt></c:strCache>";
        l += "    </c:strRef>";
        l += "  </c:tx>";
        l += "<c:spPr>";
        var o = a.chartColors[A % a.chartColors.length];
        "transparent" === o ? l += "<a:noFill/>" : a.chartColorsOpacity ? l += "<a:solidFill>".concat(et(o, '<a:alpha val="' + Math.round(1e3 * a.chartColorsOpacity).toString() + '"/>'), "</a:solidFill>") : l += "<a:solidFill>" + et(o) + "</a:solidFill>";
        0 === a.lineSize ? l += "<a:ln><a:noFill/></a:ln>" : a.dataBorder ? l += '<a:ln w="'.concat(K(a.dataBorder.pt), '" cap="flat"><a:solidFill>').concat(et(a.dataBorder.color), '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>') : (l += '<a:ln w="'.concat(K(a.lineSize), '" cap="flat"><a:solidFill>').concat(et(o), "</a:solidFill>"), l += '<a:prstDash val="'.concat(a.lineDash || "solid", '"/><a:round/></a:ln>'));
        l += eb(a.shadow, F);
        l += "</c:spPr>";
        l += "<c:xVal>";
        l += "  <c:numRef>";
        l += "    <c:f>Sheet1!$A$2:$A$".concat(t[0].values.length + 1, "</c:f>");
        l += "    <c:numCache>";
        l += "      <c:formatCode>General</c:formatCode>";
        l += '      <c:ptCount val="'.concat(t[0].values.length, '"/>');
        t[0].values.forEach(function(e, t) {
          l += '<c:pt idx="'.concat(t, '"><c:v>').concat(e || 0 === e ? e : "", "</c:v></c:pt>");
        });
        l += "    </c:numCache>";
        l += "  </c:numRef>";
        l += "</c:xVal>";
        l += "<c:yVal>";
        l += "  <c:numRef>";
        l += "<c:f>Sheet1!$".concat(ev(i + 1), "$2:$").concat(ev(i + 1), "$").concat(t[0].values.length + 1, "</c:f>");
        i++;
        l += "    <c:numCache>";
        l += "      <c:formatCode>General</c:formatCode>";
        l += '      <c:ptCount val="'.concat(t[0].values.length, '"/>');
        t[0].values.forEach(function(e, t) {
          l += '<c:pt idx="'.concat(t, '"><c:v>').concat(r.values[t] || 0 === r.values[t] ? r.values[t] : "", "</c:v></c:pt>");
        });
        l += "    </c:numCache>";
        l += "  </c:numRef>";
        l += "</c:yVal>";
        l += "  <c:bubbleSize>";
        l += "    <c:numRef>";
        l += "<c:f>Sheet1!$".concat(ev(i + 1), "$2:$").concat(ev(i + 1), "$").concat(r.sizes.length + 1, "</c:f>");
        i++;
        l += "      <c:numCache>";
        l += "        <c:formatCode>General</c:formatCode>";
        l += '           <c:ptCount val="'.concat(r.sizes.length, '"/>');
        r.sizes.forEach(function(e, t) {
          l += '<c:pt idx="'.concat(t, '"><c:v>').concat(e || "", "</c:v></c:pt>");
        });
        l += "      </c:numCache>";
        l += "    </c:numRef>";
        l += "  </c:bubbleSize>";
        l += '  <c:bubble3D val="' + (e === d.BUBBLE3D ? "1" : "0") + '"/>';
        l += "</c:ser>";
      });
      l += "<c:dLbls>";
      l += '<c:numFmt formatCode="'.concat(q(a.dataLabelFormatCode) || "General", '" sourceLinked="0"/>');
      l += "<c:txPr><a:bodyPr/><a:lstStyle/><a:p><a:pPr>";
      l += '<a:defRPr b="'.concat(a.dataLabelFontBold ? 1 : 0, '" i="').concat(a.dataLabelFontItalic ? 1 : 0, '" strike="noStrike" sz="').concat(Math.round(100 * Math.round(a.dataLabelFontSize || 12)), '" u="none">');
      l += "<a:solidFill>".concat(et(a.dataLabelColor || E), "</a:solidFill>");
      l += '<a:latin typeface="'.concat(a.dataLabelFontFace || "Arial", '"/>');
      l += "</a:defRPr></a:pPr></a:p></c:txPr>";
      a.dataLabelPosition && (l += '<c:dLblPos val="'.concat(a.dataLabelPosition, '"/>'));
      l += '<c:showLegendKey val="0"/>';
      l += '<c:showVal val="'.concat(a.showValue ? "1" : "0", '"/>');
      l += '<c:showCatName val="0"/><c:showSerName val="'.concat(a.showSerName ? "1" : "0", '"/><c:showPercent val="0"/><c:showBubbleSize val="0"/>');
      l += "<c:extLst>";
      l += '  <c:ext uri="{CE6537A1-D6FC-4f65-9D91-7224C49458BB}" xmlns:c15="http://schemas.microsoft.com/office/drawing/2012/chart">';
      l += '    <c15:showLeaderLines val="' + (a.showLeaderLines ? "1" : "0") + '"/>';
      l += "  </c:ext>";
      l += "</c:extLst>";
      l += "</c:dLbls>";
      l += '<c:axId val="'.concat(n, '"/><c:axId val="').concat(r, '"/>');
      l += "</c:bubbleChart>";
      break;
    case d.DOUGHNUT:
    case d.PIE:
      s = t[0];
      l += "<c:" + e + "Chart>";
      l += '  <c:varyColors val="1"/>';
      l += "<c:ser>";
      l += '  <c:idx val="0"/>';
      l += '  <c:order val="0"/>';
      l += "  <c:tx>";
      l += "    <c:strRef>";
      l += "      <c:f>Sheet1!$B$1</c:f>";
      l += "      <c:strCache>";
      l += '        <c:ptCount val="1"/>';
      l += '        <c:pt idx="0"><c:v>' + q(s.name) + "</c:v></c:pt>";
      l += "      </c:strCache>";
      l += "    </c:strRef>";
      l += "  </c:tx>";
      l += "  <c:spPr>";
      l += '    <a:solidFill><a:schemeClr val="accent1"/></a:solidFill>';
      l += '    <a:ln w="9525" cap="flat"><a:solidFill><a:srgbClr val="F9F9F9"/></a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>';
      a.dataNoEffects ? l += "<a:effectLst/>" : l += eb(a.shadow, F);
      l += "  </c:spPr>";
      s.labels[0].forEach(function(e, t) {
        l += "<c:dPt>";
        l += ' <c:idx val="'.concat(t, '"/>');
        l += ' <c:bubble3D val="0"/>';
        l += " <c:spPr>";
        l += "<a:solidFill>".concat(et(a.chartColors[t + 1 > a.chartColors.length ? Math.floor(Math.random() * a.chartColors.length) : t]), "</a:solidFill>");
        a.dataBorder && (l += '<a:ln w="'.concat(K(a.dataBorder.pt), '" cap="flat"><a:solidFill>').concat(et(a.dataBorder.color), '</a:solidFill><a:prstDash val="solid"/><a:round/></a:ln>'));
        l += eb(a.shadow, F);
        l += "  </c:spPr>";
        l += "</c:dPt>";
      });
      l += "<c:dLbls>";
      s.labels[0].forEach(function(t, r) {
        l += "<c:dLbl>";
        l += ' <c:idx val="'.concat(r, '"/>');
        l += '  <c:numFmt formatCode="'.concat(q(a.dataLabelFormatCode) || "General", '" sourceLinked="0"/>');
        l += "  <c:spPr/><c:txPr>";
        l += "   <a:bodyPr/><a:lstStyle/>";
        l += "   <a:p><a:pPr>";
        l += '   <a:defRPr sz="'.concat(Math.round(100 * (a.dataLabelFontSize || 12)), '" b="').concat(a.dataLabelFontBold ? 1 : 0, '" i="').concat(a.dataLabelFontItalic ? 1 : 0, '" u="none" strike="noStrike">');
        l += "    <a:solidFill>" + et(a.dataLabelColor || E) + "</a:solidFill>";
        l += '    <a:latin typeface="'.concat(a.dataLabelFontFace || "Arial", '"/>');
        l += "   </a:defRPr>";
        l += "      </a:pPr></a:p>";
        l += "    </c:txPr>";
        e === d.PIE && a.dataLabelPosition && (l += '<c:dLblPos val="'.concat(a.dataLabelPosition, '"/>'));
        l += '    <c:showLegendKey val="0"/>';
        l += '    <c:showVal val="' + (a.showValue ? "1" : "0") + '"/>';
        l += '    <c:showCatName val="' + (a.showLabel ? "1" : "0") + '"/>';
        l += '    <c:showSerName val="' + (a.showSerName ? "1" : "0") + '"/>';
        l += '    <c:showPercent val="' + (a.showPercent ? "1" : "0") + '"/>';
        l += '    <c:showBubbleSize val="0"/>';
        l += "  </c:dLbl>";
      });
      l += ' <c:numFmt formatCode="'.concat(q(a.dataLabelFormatCode) || "General", '" sourceLinked="0"/>');
      l += "    <c:txPr>";
      l += "      <a:bodyPr/>";
      l += "      <a:lstStyle/>";
      l += "      <a:p>";
      l += "        <a:pPr>";
      l += '          <a:defRPr sz="1800" b="'.concat(a.dataLabelFontBold ? "1" : "0", '" i="').concat(a.dataLabelFontItalic ? "1" : "0", '" u="none" strike="noStrike">');
      l += '            <a:solidFill><a:srgbClr val="000000"/></a:solidFill><a:latin typeface="Arial"/>';
      l += "          </a:defRPr>";
      l += "        </a:pPr>";
      l += "      </a:p>";
      l += "    </c:txPr>";
      l += e === d.PIE ? '<c:dLblPos val="ctr"/>' : "";
      l += '    <c:showLegendKey val="0"/>';
      l += '    <c:showVal val="0"/>';
      l += '    <c:showCatName val="1"/>';
      l += '    <c:showSerName val="0"/>';
      l += '    <c:showPercent val="1"/>';
      l += '    <c:showBubbleSize val="0"/>';
      l += ' <c:showLeaderLines val="'.concat(a.showLeaderLines ? "1" : "0", '"/>');
      l += "</c:dLbls>";
      l += "<c:cat>";
      l += "  <c:strRef>";
      l += "    <c:f>Sheet1!$A$2:$A$".concat(s.labels[0].length + 1, "</c:f>");
      l += "    <c:strCache>";
      l += '         <c:ptCount val="'.concat(s.labels[0].length, '"/>');
      s.labels[0].forEach(function(e, t) {
        l += '<c:pt idx="'.concat(t, '"><c:v>').concat(q(e), "</c:v></c:pt>");
      });
      l += "    </c:strCache>";
      l += "  </c:strRef>";
      l += "</c:cat>";
      l += "  <c:val>";
      l += "    <c:numRef>";
      l += "      <c:f>Sheet1!$B$2:$B$".concat(s.labels[0].length + 1, "</c:f>");
      l += "      <c:numCache>";
      l += '           <c:ptCount val="'.concat(s.labels[0].length, '"/>');
      s.values.forEach(function(e, t) {
        l += '<c:pt idx="'.concat(t, '"><c:v>').concat(e || 0 === e ? e : "", "</c:v></c:pt>");
      });
      l += "      </c:numCache>";
      l += "    </c:numRef>";
      l += "  </c:val>";
      l += "  </c:ser>";
      l += '  <c:firstSliceAng val="'.concat(a.firstSliceAng ? Math.round(a.firstSliceAng) : 0, '"/>');
      e === d.DOUGHNUT && (l += '<c:holeSize val="'.concat("number" == typeof a.holeSize ? a.holeSize : "50", '"/>'));
      l += "</c:" + e + "Chart>";
      break;
    default:
      l += "";
  }
  return l;
}
function eh(e, t, a) {
  var r = "";
  e._type === d.SCATTER || e._type === d.BUBBLE || e._type === d.BUBBLE3D ? r += "<c:valAx>" : r += "<c:" + (e.catLabelFormatCode ? "dateAx" : "catAx") + ">";
  r += '  <c:axId val="' + t + '"/>';
  r += "  <c:scaling>";
  r += '<c:orientation val="' + (e.catAxisOrientation || (e.barDir, "minMax")) + '"/>';
  (e.catAxisMaxVal || 0 === e.catAxisMaxVal) && (r += '<c:max val="'.concat(e.catAxisMaxVal, '"/>'));
  (e.catAxisMinVal || 0 === e.catAxisMinVal) && (r += '<c:min val="'.concat(e.catAxisMinVal, '"/>'));
  r += "</c:scaling>";
  r += '  <c:delete val="' + (e.catAxisHidden ? "1" : "0") + '"/>';
  r += '  <c:axPos val="' + ("col" === e.barDir ? "b" : "l") + '"/>';
  r += "none" !== e.catGridLine.style ? ey(e.catGridLine) : "";
  e.showCatAxisTitle && (r += eg({
    color: e.catAxisTitleColor,
    fontFace: e.catAxisTitleFontFace,
    fontSize: e.catAxisTitleFontSize,
    titleRotate: e.catAxisTitleRotate,
    title: e.catAxisTitle || "Axis Title"
  }));
  e._type === d.SCATTER || e._type === d.BUBBLE || e._type === d.BUBBLE3D ? r += '  <c:numFmt formatCode="' + (e.valAxisLabelFormatCode ? q(e.valAxisLabelFormatCode) : "General") + '" sourceLinked="1"/>' : r += '  <c:numFmt formatCode="' + (q(e.catLabelFormatCode) || "General") + '" sourceLinked="1"/>';
  e._type === d.SCATTER ? (r += '  <c:majorTickMark val="none"/>', r += '  <c:minorTickMark val="none"/>', r += '  <c:tickLblPos val="nextTo"/>') : (r += '  <c:majorTickMark val="' + (e.catAxisMajorTickMark || "out") + '"/>', r += '  <c:minorTickMark val="' + (e.catAxisMinorTickMark || "none") + '"/>', r += '  <c:tickLblPos val="' + (e.catAxisLabelPos || ("col" === e.barDir ? "low" : "nextTo")) + '"/>');
  r += "  <c:spPr>";
  r += '    <a:ln w="'.concat(e.catAxisLineSize ? K(e.catAxisLineSize) : 12700, '" cap="flat">');
  r += e.catAxisLineShow ? "<a:solidFill>" + et(e.catAxisLineColor || S.color) + "</a:solidFill>" : "<a:noFill/>";
  r += '      <a:prstDash val="' + (e.catAxisLineStyle || "solid") + '"/>';
  r += "      <a:round/>";
  r += "    </a:ln>";
  r += "  </c:spPr>";
  r += "  <c:txPr>";
  e.catAxisLabelRotate ? r += '<a:bodyPr rot="'.concat(Z(e.catAxisLabelRotate), '"/>') : r += "<a:bodyPr/>";
  r += "    <a:lstStyle/>";
  r += "    <a:p>";
  r += "    <a:pPr>";
  r += '      <a:defRPr sz="'.concat(Math.round(100 * (e.catAxisLabelFontSize || 12)), '" b="').concat(e.catAxisLabelFontBold ? 1 : 0, '" i="').concat(e.catAxisLabelFontItalic ? 1 : 0, '" u="none" strike="noStrike">');
  r += "      <a:solidFill>" + et(e.catAxisLabelColor || E) + "</a:solidFill>";
  r += '      <a:latin typeface="' + (e.catAxisLabelFontFace || "Arial") + '"/>';
  r += "   </a:defRPr>";
  r += "  </a:pPr>";
  r += '  <a:endParaRPr lang="' + (e.lang || "en-US") + '"/>';
  r += "  </a:p>";
  r += " </c:txPr>";
  r += ' <c:crossAx val="' + a + '"/>';
  r += " <c:".concat("number" == typeof e.valAxisCrossesAt ? "crossesAt" : "crosses", ' val="').concat(e.valAxisCrossesAt || "autoZero", '"/>');
  r += ' <c:auto val="1"/>';
  r += ' <c:lblAlgn val="ctr"/>';
  r += ' <c:noMultiLvlLbl val="'.concat(e.catAxisMultiLevelLabels ? 0 : 1, '"/>');
  e.catAxisLabelFrequency && (r += ' <c:tickLblSkip val="' + e.catAxisLabelFrequency + '"/>');
  (e.catLabelFormatCode || e._type === d.SCATTER || e._type === d.BUBBLE || e._type === d.BUBBLE3D) && (e.catLabelFormatCode && (["catAxisBaseTimeUnit", "catAxisMajorTimeUnit", "catAxisMinorTimeUnit"].forEach(function(t) {
    e[t] && ("string" != typeof e[t] || !["days", "months", "years"].includes(e[t].toLowerCase())) && (console.warn('"'.concat(t, "\" must be one of: 'days','months','years' !")), e[t] = null);
  }), e.catAxisBaseTimeUnit && (r += '<c:baseTimeUnit val="' + e.catAxisBaseTimeUnit.toLowerCase() + '"/>'), e.catAxisMajorTimeUnit && (r += '<c:majorTimeUnit val="' + e.catAxisMajorTimeUnit.toLowerCase() + '"/>'), e.catAxisMinorTimeUnit && (r += '<c:minorTimeUnit val="' + e.catAxisMinorTimeUnit.toLowerCase() + '"/>')), e.catAxisMajorUnit && (r += '<c:majorUnit val="'.concat(e.catAxisMajorUnit, '"/>')), e.catAxisMinorUnit && (r += '<c:minorUnit val="'.concat(e.catAxisMinorUnit, '"/>')));
  e._type === d.SCATTER || e._type === d.BUBBLE || e._type === d.BUBBLE3D ? r += "</c:valAx>" : r += "</c:" + (e.catLabelFormatCode ? "dateAx" : "catAx") + ">";
  return r;
}
function em(e, t) {
  var a = t === O ? "col" === e.barDir ? "l" : "b" : "col" !== e.barDir ? "r" : "t";
  t === M && (a = "r");
  var r = t === O ? z : U;
  var n = "";
  (n += "<c:valAx>", n += '  <c:axId val="' + t + '"/>', n += "  <c:scaling>", e.valAxisLogScaleBase && (n += '<c:logBase val="'.concat(e.valAxisLogScaleBase, '"/>')), n += '<c:orientation val="' + (e.valAxisOrientation || (e.barDir, "minMax")) + '"/>', (e.valAxisMaxVal || 0 === e.valAxisMaxVal) && (n += '<c:max val="'.concat(e.valAxisMaxVal, '"/>')), (e.valAxisMinVal || 0 === e.valAxisMinVal) && (n += '<c:min val="'.concat(e.valAxisMinVal, '"/>')), n += "  </c:scaling>", n += '  <c:delete val="'.concat(e.valAxisHidden ? 1 : 0, '"/>'), n += '  <c:axPos val="' + a + '"/>', "none" !== e.valGridLine.style && (n += ey(e.valGridLine)), e.showValAxisTitle && (n += eg({
    color: e.valAxisTitleColor,
    fontFace: e.valAxisTitleFontFace,
    fontSize: e.valAxisTitleFontSize,
    titleRotate: e.valAxisTitleRotate,
    title: e.valAxisTitle || "Axis Title"
  })), n += '<c:numFmt formatCode="'.concat(e.valAxisLabelFormatCode ? q(e.valAxisLabelFormatCode) : "General", '" sourceLinked="0"/>'), e._type === d.SCATTER ? (n += '  <c:majorTickMark val="none"/>', n += '  <c:minorTickMark val="none"/>', n += '  <c:tickLblPos val="nextTo"/>') : (n += ' <c:majorTickMark val="' + (e.valAxisMajorTickMark || "out") + '"/>', n += ' <c:minorTickMark val="' + (e.valAxisMinorTickMark || "none") + '"/>', n += ' <c:tickLblPos val="' + (e.valAxisLabelPos || ("col" === e.barDir ? "nextTo" : "low")) + '"/>'), n += " <c:spPr>", n += '   <a:ln w="'.concat(e.valAxisLineSize ? K(e.valAxisLineSize) : 12700, '" cap="flat">'), n += e.valAxisLineShow ? "<a:solidFill>" + et(e.valAxisLineColor || S.color) + "</a:solidFill>" : "<a:noFill/>", n += '     <a:prstDash val="' + (e.valAxisLineStyle || "solid") + '"/>', n += "     <a:round/>", n += "   </a:ln>", n += " </c:spPr>", n += " <c:txPr>", n += "  <a:bodyPr".concat(e.valAxisLabelRotate ? ' rot="' + Z(e.valAxisLabelRotate).toString() + '"' : "", "/>"), n += "  <a:lstStyle/>", n += "  <a:p>", n += "    <a:pPr>", n += '      <a:defRPr sz="'.concat(Math.round(100 * (e.valAxisLabelFontSize || 12)), '" b="').concat(e.valAxisLabelFontBold ? 1 : 0, '" i="').concat(e.valAxisLabelFontItalic ? 1 : 0, '" u="none" strike="noStrike">'), n += "        <a:solidFill>" + et(e.valAxisLabelColor || E) + "</a:solidFill>", n += '        <a:latin typeface="' + (e.valAxisLabelFontFace || "Arial") + '"/>', n += "      </a:defRPr>", n += "    </a:pPr>", n += '  <a:endParaRPr lang="' + (e.lang || "en-US") + '"/>', n += "  </a:p>", n += " </c:txPr>", n += ' <c:crossAx val="' + r + '"/>', "number" == typeof e.catAxisCrossesAt) ? n += ' <c:crossesAt val="'.concat(e.catAxisCrossesAt, '"/>') : "string" == typeof e.catAxisCrossesAt ? n += ' <c:crosses val="' + e.catAxisCrossesAt + '"/>' : n += ' <c:crosses val="' + ("r" === a || "t" === a ? "max" : "autoZero") + '"/>';
  n += ' <c:crossBetween val="' + (e._type === d.SCATTER || Array.isArray(e._type) && e._type.filter(function(e) {
    return e.type === d.AREA;
  }).length > 0 ? "midCat" : "between") + '"/>';
  e.valAxisMajorUnit && (n += ' <c:majorUnit val="'.concat(e.valAxisMajorUnit, '"/>'));
  e.valAxisDisplayUnit && (n += '<c:dispUnits><c:builtInUnit val="'.concat(e.valAxisDisplayUnit, '"/>').concat(e.valAxisDisplayUnitLabel ? "<c:dispUnitsLbl/>" : "", "</c:dispUnits>"));
  return n += "</c:valAx>";
}
function eg(e, t, a) {
  var r = "left" === e.titleAlign || "right" === e.titleAlign ? '<a:pPr algn="'.concat(e.titleAlign.substring(0, 1), '">') : "<a:pPr>";
  var n = e.titleRotate ? '<a:bodyPr rot="'.concat(Z(e.titleRotate), '"/>') : "<a:bodyPr/>";
  var o = e.fontSize ? 'sz="'.concat(Math.round(100 * e.fontSize), '"') : "";
  var A = e.titleBold ? 1 : 0;
  var i = "<c:layout/>";
  if (e.titlePos && "number" == typeof e.titlePos.x && "number" == typeof e.titlePos.y) {
    var s = e.titlePos.x + t;
    var l = e.titlePos.y + a;
    var c = 0 === s ? 0 : s / 5 * s / 10;
    c >= 1 && (c /= 10);
    c >= .1 && (c /= 10);
    var p = 0 === l ? 0 : l / 5 * l / 10;
    p >= 1 && (p /= 10);
    p >= .1 && (p /= 10);
    i = '<c:layout><c:manualLayout><c:xMode val="edge"/><c:yMode val="edge"/><c:x val="'.concat(c, '"/><c:y val="').concat(p, '"/></c:manualLayout></c:layout>');
  }
  return "<c:title>\n      <c:tx>\n        <c:rich>\n          ".concat(n, "\n          <a:lstStyle/>\n          <a:p>\n            ").concat(r, "\n            <a:defRPr ").concat(o, ' b="').concat(A, '" i="0" u="none" strike="noStrike">\n              <a:solidFill>').concat(et(e.color || E), '</a:solidFill>\n              <a:latin typeface="').concat(e.fontFace || "Arial", '"/>\n            </a:defRPr>\n          </a:pPr>\n          <a:r>\n            <a:rPr ').concat(o, ' b="').concat(A, '" i="0" u="none" strike="noStrike">\n              <a:solidFill>').concat(et(e.color || E), '</a:solidFill>\n              <a:latin typeface="').concat(e.fontFace || "Arial", '"/>\n            </a:rPr>\n            <a:t>').concat(q(e.title) || "", "</a:t>\n          </a:r>\n        </a:p>\n        </c:rich>\n      </c:tx>\n      ").concat(i, '\n      <c:overlay val="0"/>\n    </c:title>');
}
function ev(e) {
  var t = e - 1;
  return t <= 25 ? Q[t] : "".concat(Q[Math.floor(t / Q.length - 1)]).concat(Q[t % Q.length]);
}
function eb(e, t) {
  if (!e) return "<a:effectLst/>";
  if ("object" != typeof e) {
    console.warn("`shadow` options must be an object. Ex: `{shadow: {type:'none'}}`");
    return "<a:effectLst/>";
  }
  var a = "<a:effectLst>";
  var r = y(y({}, t), e);
  var n = r.type || "outer";
  var o = K(r.blur);
  var A = K(r.offset);
  var i = Math.round(6e4 * r.angle);
  var s = r.color;
  var l = Math.round(1e5 * r.opacity);
  var c = r.rotateWithShape ? 1 : 0;
  a += "<a:".concat(n, 'Shdw sx="100000" sy="100000" kx="0" ky="0"  algn="bl" blurRad="').concat(o, '" rotWithShape="').concat(c, '" dist="').concat(A, '" dir="').concat(i, '">');
  a += '<a:srgbClr val="'.concat(s, '">');
  a += '<a:alpha val="'.concat(l, '"/></a:srgbClr>');
  a += "</a:".concat(n, "Shdw>");
  return a += "</a:effectLst>";
}
function ey(e) {
  var t = "<c:majorGridlines>";
  t += " <c:spPr>";
  t += '  <a:ln w="'.concat(K(e.size || S.size), '" cap="').concat(ex(e.cap || S.cap), '">');
  t += '  <a:solidFill><a:srgbClr val="' + (e.color || S.color) + '"/></a:solidFill>';
  t += '   <a:prstDash val="' + (e.style || S.style) + '"/><a:round/>';
  t += "  </a:ln>";
  t += " </c:spPr>";
  return t += "</c:majorGridlines>";
}
function ex(e) {
  if (!e || "flat" === e) return "flat";
  if ("square" === e) return "sq";
  if ("round" === e) return "rnd";
  throw Error("Invalid chart line cap: ".concat(e));
}
function ew(e) {
  var t = "undefined" == typeof window ? _require : null;
  var r = "undefined" == typeof window ? _require2 : null;
  var n = [];
  var o = e._relsMedia.filter(function(e) {
    return "online" !== e.type && !e.data && (!e.path || e.path && !e.path.includes("preencoded"));
  });
  var A = [];
  o.forEach(function(e) {
    A.includes(e.path) ? e.isDuplicate = !0 : (e.isDuplicate = !1, A.push(e.path));
  });
  o.filter(function(e) {
    return !e.isDuplicate;
  }).forEach(function(e) {
    n.push(new Promise(function(a, n) {
      if (t && 0 !== e.path.indexOf("http")) try {
        var A = t.readFileSync(e.path);
        e.data = Buffer.from(A).toString("base64");
        o.filter(function(t) {
          return t.isDuplicate && t.path === e.path;
        }).forEach(function(t) {
          return t.data = e.data;
        });
        a("done");
      } catch (t) {
        e.data = X;
        o.filter(function(t) {
          return t.isDuplicate && t.path === e.path;
        }).forEach(function(t) {
          return t.data = e.data;
        });
        n(Error('ERROR: Unable to read media: "'.concat(e.path, '"\n').concat(String(t))));
      } else if (t && r && 0 === e.path.indexOf("http")) r.get(e.path, function(t) {
        var r = "";
        t.setEncoding("binary");
        t.on("data", function(e) {
          return r += e;
        });
        t.on("end", function() {
          e.data = Buffer.from(r, "binary").toString("base64");
          o.filter(function(t) {
            return t.isDuplicate && t.path === e.path;
          }).forEach(function(t) {
            return t.data = e.data;
          });
          a("done");
        });
        t.on("error", function(t) {
          e.data = X;
          o.filter(function(t) {
            return t.isDuplicate && t.path === e.path;
          }).forEach(function(t) {
            return t.data = e.data;
          });
          n(Error("ERROR! Unable to load image (https.get): ".concat(e.path)));
        });
      }); else {
        var i = new XMLHttpRequest();
        i.onload = function() {
          var t = new FileReader();
          t.onloadend = function() {
            e.data = t.result;
            o.filter(function(t) {
              return t.isDuplicate && t.path === e.path;
            }).forEach(function(t) {
              return t.data = e.data;
            });
            e.isSvgPng ? eC(e).then(function() {
              a("done");
            }).catch(function(e) {
              n(e);
            }) : a("done");
          };
          t.readAsDataURL(i.response);
        };
        i.onerror = function(t) {
          e.data = X;
          o.filter(function(t) {
            return t.isDuplicate && t.path === e.path;
          }).forEach(function(t) {
            return t.data = e.data;
          });
          n(Error("ERROR! Unable to load image (xhr.onerror): ".concat(e.path)));
        };
        i.open("GET", e.path);
        i.responseType = "blob";
        i.send();
      }
    }));
  });
  e._relsMedia.filter(function(e) {
    return e.isSvgPng && e.data;
  }).forEach(function(e) {
    t ? (e.data = X, n.push(Promise.resolve().then(function() {
      return "done";
    }))) : n.push(eC(e));
  });
  return n;
}
function eC(e) {
  return x(this, void 0, void 0, function() {
    return w(this, function(t) {
      switch (t.label) {
        case 0:
          return [4, new Promise(function(t, a) {
            var r = new Image();
            r.onload = function() {
              r.width + r.height === 0 && r.onerror("h/w=0");
              var a = document.createElement("CANVAS");
              var n = a.getContext("2d");
              a.width = r.width;
              a.height = r.height;
              n.drawImage(r, 0, 0);
              try {
                e.data = a.toDataURL(e.type);
                t("done");
              } catch (e) {
                r.onerror(e);
              }
            };
            r.onerror = function(t) {
              e.data = X;
              a(Error("ERROR! Unable to load image (image.onerror): ".concat(e.path)));
            };
            r.src = "string" == typeof e.data ? e.data : X;
          })];
        case 1:
          return [2, t.sent()];
      }
    });
  });
}
var eP = {
  cover: function(e, t) {
    var a = e.h / e.w;
    var r = t.h / t.w > a;
    var n = r ? t.h / a : t.w;
    var o = r ? t.h : t.w * a;
    var A = Math.round(5e4 * (1 - t.w / n));
    var i = Math.round(5e4 * (1 - t.h / o));
    return '<a:srcRect l="'.concat(A, '" r="').concat(A, '" t="').concat(i, '" b="').concat(i, '"/><a:stretch/>');
  },
  contain: function(e, t) {
    var a = e.h / e.w;
    var r = t.h / t.w > a;
    var n = r ? t.w : t.h / a;
    var o = r ? t.w * a : t.h;
    var A = Math.round(5e4 * (1 - t.w / n));
    var i = Math.round(5e4 * (1 - t.h / o));
    return '<a:srcRect l="'.concat(A, '" r="').concat(A, '" t="').concat(i, '" b="').concat(i, '"/><a:stretch/>');
  },
  crop: function(e, t) {
    var a = t.x;
    var r = e.w - (t.x + t.w);
    var n = t.y;
    var o = e.h - (t.y + t.h);
    var A = Math.round(1e5 * (a / e.w));
    var i = Math.round(1e5 * (r / e.w));
    var s = Math.round(1e5 * (n / e.h));
    var l = Math.round(1e5 * (o / e.h));
    return '<a:srcRect l="'.concat(A, '" r="').concat(i, '" t="').concat(s, '" b="').concat(l, '"/><a:stretch/>');
  }
};
function eL(e) {
  var t;
  var a = e._name ? '<p:cSld name="' + e._name + '">' : "<p:cSld>";
  var r = 1;
  e._bkgdImgRid ? a += '<p:bg><p:bgPr><a:blipFill dpi="0" rotWithShape="1"><a:blip r:embed="rId'.concat(e._bkgdImgRid, '"><a:lum/></a:blip><a:srcRect/><a:stretch><a:fillRect/></a:stretch></a:blipFill><a:effectLst/></p:bgPr></p:bg>') : e.background?.color ? a += "<p:bg><p:bgPr>".concat(ea(e.background), "</p:bgPr></p:bg>") : !e.bkgd && e._name && e._name === k && (a += '<p:bg><p:bgRef idx="1001"><a:schemeClr val="bg1"/></p:bgRef></p:bg>');
  a += "<p:spTree>";
  a += '<p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>';
  a += '<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/>';
  a += '<a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>';
  e._slideObjects.forEach(function(t, n) {
    var o;
    var A;
    var i;
    var s;
    var l;
    var c;
    var p;
    var d;
    var f;
    var u = 0;
    var m = 0;
    var g = H("75%", "X", e._presLayout);
    var v = 0;
    var b = "";
    var y = null;
    var x = null;
    var w = 0;
    var P = 0;
    var L = null;
    var T = null;
    var S = t.options?.sizing;
    var E = t.options?.rounding;
    void 0 !== e._slideLayout && void 0 !== e._slideLayout._slideObjects && t.options && t.options.placeholder && (f = e._slideLayout._slideObjects.filter(function(e) {
      return e.options.placeholder === t.options.placeholder;
    })[0]);
    t.options = t.options || {};
    void 0 !== t.options.x && (u = H(t.options.x, "X", e._presLayout));
    void 0 !== t.options.y && (m = H(t.options.y, "Y", e._presLayout));
    void 0 !== t.options.w && (g = H(t.options.w, "X", e._presLayout));
    void 0 !== t.options.h && (v = H(t.options.h, "Y", e._presLayout));
    var D = g;
    var k = v;
    switch (f && ((f.options.x || 0 === f.options.x) && (u = H(f.options.x, "X", e._presLayout)), (f.options.y || 0 === f.options.y) && (m = H(f.options.y, "Y", e._presLayout)), (f.options.w || 0 === f.options.w) && (g = H(f.options.w, "X", e._presLayout)), (f.options.h || 0 === f.options.h) && (v = H(f.options.h, "Y", e._presLayout))), t.options.flipH && (b += ' flipH="1"'), t.options.flipV && (b += ' flipV="1"'), t.options.rotate && (b += ' rot="'.concat(Z(t.options.rotate), '"')), t._type) {
      case h.table:
        if (y = t.arrTabRows, x = t.options, w = 0, P = 0, y[0].forEach(function(e) {
          L = e.options || null;
          w += L?.colspan ? Number(L.colspan) : 1;
        }), T = '<p:graphicFrame><p:nvGraphicFramePr><p:cNvPr id="'.concat(r * e._slideNum + 1, '" name="').concat(t.options.objectName, '"/>') + '<p:cNvGraphicFramePr><a:graphicFrameLocks noGrp="1"/></p:cNvGraphicFramePr>  <p:nvPr><p:extLst><p:ext uri="{D42A27DB-BD31-4B8C-83A1-F6EECF244321}"><p14:modId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1579011935"/></p:ext></p:extLst></p:nvPr></p:nvGraphicFramePr>' + '<p:xfrm><a:off x="'.concat(u || (0 === u ? 0 : 914400), '" y="').concat(m || (0 === m ? 0 : 914400), '"/><a:ext cx="').concat(g || (0 === g ? 0 : 914400), '" cy="').concat(v || 914400, '"/></p:xfrm>') + '<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/table"><a:tbl><a:tblPr/>', Array.isArray(x.colW)) {
          T += "<a:tblGrid>";
          for (var N = 0; N < w; N++) {
            var F = J(x.colW[N]);
            (null == F || isNaN(F)) && (F = ("number" == typeof t.options.w ? t.options.w : 1) / w);
            T += '<a:gridCol w="'.concat(Math.round(F), '"/>');
          }
          T += "</a:tblGrid>";
        } else {
          P = x.colW ? x.colW : 914400;
          t.options.w && !x.colW && (P = Math.round(("number" == typeof t.options.w ? t.options.w : 1) / w));
          T += "<a:tblGrid>";
          for (var _ = 0; _ < w; _++) T += '<a:gridCol w="'.concat(P, '"/>');
          T += "</a:tblGrid>";
        }
        y.forEach(function(e) {
          for (n = 0, void 0; n < e.length;) {
            var t;
            var a;
            var r;
            var n;
            (function(n) {
              var o = e[n];
              var A = o.options?.colspan;
              var i = o.options?.rowspan;
              if (A && A > 1) {
                var s = Array(A - 1).fill(void 0).map(function(e) {
                  return {
                    _type: h.tablecell,
                    options: {
                      rowspan: i
                    },
                    _hmerge: !0
                  };
                });
                e.splice.apply(e, C([n + 1, 0], s, !1));
                n += A;
              } else n += 1;
              r = n;
            })(n);
            n = r;
          }
        });
        y.forEach(function(e, t) {
          var a = y[t + 1];
          a && e.forEach(function(e, t) {
            var r;
            var n;
            var o = e._rowContinue || e.options?.rowspan;
            var A = e.options?.colspan;
            var i = e._hmerge;
            if (o && o > 1) {
              var s = {
                _type: h.tablecell,
                options: {
                  colspan: A
                },
                _rowContinue: o - 1,
                _vmerge: !0,
                _hmerge: i
              };
              a.splice(t, 0, s);
            }
          });
        });
        y.forEach(function(e, a) {
          var r = 0;
          Array.isArray(x.rowH) && x.rowH[a] ? r = J(Number(x.rowH[a])) : x.rowH && !isNaN(Number(x.rowH)) ? r = J(Number(x.rowH)) : (t.options.cy || t.options.h) && (r = Math.round((t.options.h ? J(t.options.h) : "number" == typeof t.options.cy ? t.options.cy : 1) / y.length));
          T += '<a:tr h="'.concat(r, '">');
          e.forEach(function(e) {
            var t;
            var a;
            var r;
            var n;
            var o;
            var A = {
              rowSpan: e.options?.rowspan > 1 ? e.options.rowspan : void 0,
              gridSpan: e.options?.colspan > 1 ? e.options.colspan : void 0,
              vMerge: e._vmerge ? 1 : void 0,
              hMerge: e._hmerge ? 1 : void 0
            };
            var i = Object.keys(A).map(function(e) {
              return [e, A[e]];
            }).filter(function(e) {
              e[0];
              return !!e[1];
            }).map(function(e) {
              var t = e[0];
              var a = e[1];
              return "".concat(String(t), '="').concat(String(a), '"');
            }).join(" ");
            if (i && (i = " " + i), e._hmerge || e._vmerge) {
              T += "<a:tc".concat(i, "><a:tcPr/></a:tc>");
              return;
            }
            var s = e.options || {};
            e.options = s;
            ["align", "bold", "border", "color", "fill", "fontFace", "fontSize", "margin", "underline", "valign"].forEach(function(e) {
              x[e] && !s[e] && 0 !== s[e] && (s[e] = x[e]);
            });
            var l = s.valign ? ' anchor="'.concat(s.valign.replace(/^c$/i, "ctr").replace(/^m$/i, "ctr").replace("center", "ctr").replace("middle", "ctr").replace("top", "t").replace("btm", "b").replace("bottom", "b"), '"') : "";
            var c = e._optImp?.fill?.color ? e._optImp.fill.color : e._optImp?.fill && "string" == typeof e._optImp.fill ? e._optImp.fill : "";
            var p = (c = c || s.fill ? s.fill : "") ? ea(c) : "";
            var d = 0 === s.margin || s.margin ? s.margin : B;
            Array.isArray(d) || "number" != typeof d || (d = [d, d, d, d]);
            var f = "";
            f = d[0] >= 1 ? ' marL="'.concat(K(d[3]), '" marR="').concat(K(d[1]), '" marT="').concat(K(d[0]), '" marB="').concat(K(d[2]), '"') : ' marL="'.concat(J(d[3]), '" marR="').concat(J(d[1]), '" marT="').concat(J(d[0]), '" marB="').concat(J(d[2]), '"');
            T += "<a:tc".concat(i, ">").concat(eE(e), "<a:tcPr").concat(f).concat(l, ">");
            s.border && Array.isArray(s.border) && [{
              idx: 3,
              name: "lnL"
            }, {
              idx: 1,
              name: "lnR"
            }, {
              idx: 0,
              name: "lnT"
            }, {
              idx: 2,
              name: "lnB"
            }].forEach(function(e) {
              "none" !== s.border[e.idx].type ? (T += "<a:".concat(e.name, ' w="').concat(K(s.border[e.idx].pt), '" cap="flat" cmpd="sng" algn="ctr">'), T += "<a:solidFill>".concat(et(s.border[e.idx].color), "</a:solidFill>"), T += '<a:prstDash val="'.concat("dash" === s.border[e.idx].type ? "sysDash" : "solid", '"/><a:round/><a:headEnd type="none" w="med" len="med"/><a:tailEnd type="none" w="med" len="med"/>'), T += "</a:".concat(e.name, ">")) : T += "<a:".concat(e.name, ' w="0" cap="flat" cmpd="sng" algn="ctr"><a:noFill/></a:').concat(e.name, ">");
            });
            T += p;
            T += "  </a:tcPr>";
            T += " </a:tc>";
          });
          T += "</a:tr>";
        });
        T += "      </a:tbl>";
        T += "    </a:graphicData>";
        T += "  </a:graphic>";
        T += "</p:graphicFrame>";
        a += T;
        r++;
        break;
      case h.text:
      case h.placeholder:
        if (t.options.line || 0 !== v || (v = 274320), t.options._bodyProp || (t.options._bodyProp = {}), t.options.margin && Array.isArray(t.options.margin) ? (t.options._bodyProp.lIns = K(t.options.margin[0] || 0), t.options._bodyProp.rIns = K(t.options.margin[1] || 0), t.options._bodyProp.bIns = K(t.options.margin[2] || 0), t.options._bodyProp.tIns = K(t.options.margin[3] || 0)) : "number" == typeof t.options.margin && (t.options._bodyProp.lIns = K(t.options.margin), t.options._bodyProp.rIns = K(t.options.margin), t.options._bodyProp.bIns = K(t.options.margin), t.options._bodyProp.tIns = K(t.options.margin)), a += "<p:sp>", a += '<p:nvSpPr><p:cNvPr id="'.concat(n + 2, '" name="').concat(t.options.objectName, '">'), t.options.hyperlink?.url && (a += '<a:hlinkClick r:id="rId'.concat(t.options.hyperlink._rId, '" tooltip="').concat(t.options.hyperlink.tooltip ? q(t.options.hyperlink.tooltip) : "", '"/>')), t.options.hyperlink?.slide && (a += '<a:hlinkClick r:id="rId'.concat(t.options.hyperlink._rId, '" tooltip="').concat(t.options.hyperlink.tooltip ? q(t.options.hyperlink.tooltip) : "", '" action="ppaction://hlinksldjump"/>')), a += "</p:cNvPr>", a += "<p:cNvSpPr" + (t.options?.isTextBox ? ' txBox="1"/>' : "/>"), a += "<p:nvPr>".concat("placeholder" === t._type ? eD(t) : eD(f), "</p:nvPr>"), a += "</p:nvSpPr><p:spPr>", a += "<a:xfrm".concat(b, ">"), a += '<a:off x="'.concat(u, '" y="').concat(m, '"/>'), a += '<a:ext cx="'.concat(g, '" cy="').concat(v, '"/></a:xfrm>'), "custGeom" === t.shape) {
          a += "<a:custGeom><a:avLst />";
          a += "<a:gdLst>";
          a += "</a:gdLst>";
          a += "<a:ahLst />";
          a += "<a:cxnLst>";
          a += "</a:cxnLst>";
          a += '<a:rect l="l" t="t" r="r" b="b" />';
          a += "<a:pathLst>";
          a += '<a:path w="'.concat(g, '" h="').concat(v, '">');
          t.options.points?.forEach(function(t, r) {
            if ("curve" in t) switch (t.curve.type) {
              case "arc":
                a += '<a:arcTo hR="'.concat(H(t.curve.hR, "Y", e._presLayout), '" wR="').concat(H(t.curve.wR, "X", e._presLayout), '" stAng="').concat(Z(t.curve.stAng), '" swAng="').concat(Z(t.curve.swAng), '" />');
                break;
              case "cubic":
                a += '<a:cubicBezTo>\n									<a:pt x="'.concat(H(t.curve.x1, "X", e._presLayout), '" y="').concat(H(t.curve.y1, "Y", e._presLayout), '" />\n									<a:pt x="').concat(H(t.curve.x2, "X", e._presLayout), '" y="').concat(H(t.curve.y2, "Y", e._presLayout), '" />\n									<a:pt x="').concat(H(t.x, "X", e._presLayout), '" y="').concat(H(t.y, "Y", e._presLayout), '" />\n									</a:cubicBezTo>');
                break;
              case "quadratic":
                a += '<a:quadBezTo>\n									<a:pt x="'.concat(H(t.curve.x1, "X", e._presLayout), '" y="').concat(H(t.curve.y1, "Y", e._presLayout), '" />\n									<a:pt x="').concat(H(t.x, "X", e._presLayout), '" y="').concat(H(t.y, "Y", e._presLayout), '" />\n									</a:quadBezTo>');
            } else "close" in t ? a += "<a:close />" : t.moveTo || 0 === r ? a += '<a:moveTo><a:pt x="'.concat(H(t.x, "X", e._presLayout), '" y="').concat(H(t.y, "Y", e._presLayout), '" /></a:moveTo>') : a += '<a:lnTo><a:pt x="'.concat(H(t.x, "X", e._presLayout), '" y="').concat(H(t.y, "Y", e._presLayout), '" /></a:lnTo>');
          });
          a += "</a:path>";
          a += "</a:pathLst>";
          a += "</a:custGeom>";
        } else {
          if (a += '<a:prstGeom prst="' + t.shape + '"><a:avLst>', t.options.rectRadius) a += '<a:gd name="adj" fmla="val '.concat(Math.round(9144e7 * t.options.rectRadius / Math.min(g, v)), '"/>'); else if (t.options.angleRange) {
            for (var R = 0; R < 2; R++) {
              var O = t.options.angleRange[R];
              a += '<a:gd name="adj'.concat(R + 1, '" fmla="val ').concat(Z(O), '" />');
            }
            t.options.arcThicknessRatio && (a += '<a:gd name="adj3" fmla="val '.concat(Math.round(5e4 * t.options.arcThicknessRatio), '" />'));
          }
          a += "</a:avLst></a:prstGeom>";
        }
        a += t.options.fill ? ea(t.options.fill) : "<a:noFill/>";
        t.options.line && (a += t.options.line.width ? '<a:ln w="'.concat(K(t.options.line.width), '">') : "<a:ln>", t.options.line.color && (a += ea(t.options.line)), t.options.line.dashType && (a += '<a:prstDash val="'.concat(t.options.line.dashType, '"/>')), t.options.line.beginArrowType && (a += '<a:headEnd type="'.concat(t.options.line.beginArrowType, '"/>')), t.options.line.endArrowType && (a += '<a:tailEnd type="'.concat(t.options.line.endArrowType, '"/>')), a += "</a:ln>");
        t.options.shadow && "none" !== t.options.shadow.type && (t.options.shadow.type = t.options.shadow.type || "outer", t.options.shadow.blur = K(t.options.shadow.blur || 8), t.options.shadow.offset = K(t.options.shadow.offset || 4), t.options.shadow.angle = Math.round(6e4 * (t.options.shadow.angle || 270)), t.options.shadow.opacity = Math.round(1e5 * (t.options.shadow.opacity || .75)), t.options.shadow.color = t.options.shadow.color || I.color, a += "<a:effectLst>", a += " <a:".concat(t.options.shadow.type, "Shdw ").concat("outer" === t.options.shadow.type ? 'sx="100000" sy="100000" kx="0" ky="0" algn="bl" rotWithShape="0"' : "", ' blurRad="').concat(t.options.shadow.blur, '" dist="').concat(t.options.shadow.offset, '" dir="').concat(t.options.shadow.angle, '">'), a += ' <a:srgbClr val="'.concat(t.options.shadow.color, '">'), a += ' <a:alpha val="'.concat(t.options.shadow.opacity, '"/></a:srgbClr>'), a += " </a:outerShdw>", a += "</a:effectLst>");
        a += "</p:spPr>";
        a += eE(t);
        a += "</p:sp>";
        break;
      case h.image:
        if (a += "<p:pic>", a += "  <p:nvPicPr>", a += '<p:cNvPr id="'.concat(n + 2, '" name="').concat(t.options.objectName, '" descr="').concat(q(t.options.altText || t.image), '">'), t.hyperlink?.url && (a += '<a:hlinkClick r:id="rId'.concat(t.hyperlink._rId, '" tooltip="').concat(t.hyperlink.tooltip ? q(t.hyperlink.tooltip) : "", '"/>')), t.hyperlink?.slide && (a += '<a:hlinkClick r:id="rId'.concat(t.hyperlink._rId, '" tooltip="').concat(t.hyperlink.tooltip ? q(t.hyperlink.tooltip) : "", '" action="ppaction://hlinksldjump"/>')), a += "    </p:cNvPr>", a += '    <p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr>', a += "    <p:nvPr>" + eD(f) + "</p:nvPr>", a += "  </p:nvPicPr>", a += "<p:blipFill>", (e._relsMedia || []).filter(function(e) {
          return e.rId === t.imageRid;
        })[0] && "svg" === (e._relsMedia || []).filter(function(e) {
          return e.rId === t.imageRid;
        })[0].extn ? (a += '<a:blip r:embed="rId'.concat(t.imageRid - 1, '">'), a += t.options.transparency ? ' <a:alphaModFix amt="'.concat(Math.round((100 - t.options.transparency) * 1e3), '"/>') : "", a += " <a:extLst>", a += '  <a:ext uri="{96DAC541-7B7A-43D3-8B79-37D633B846F1}">', a += '   <asvg:svgBlip xmlns:asvg="http://schemas.microsoft.com/office/drawing/2016/SVG/main" r:embed="rId'.concat(t.imageRid, '"/>'), a += "  </a:ext>", a += " </a:extLst>") : (a += '<a:blip r:embed="rId'.concat(t.imageRid, '">'), a += t.options.transparency ? '<a:alphaModFix amt="'.concat(Math.round((100 - t.options.transparency) * 1e3), '"/>') : ""), a += "</a:blip>", S?.type) {
          var M = S.w ? H(S.w, "X", e._presLayout) : g;
          var z = S.h ? H(S.h, "Y", e._presLayout) : v;
          var U = H(S.x || 0, "X", e._presLayout);
          var j = H(S.y || 0, "Y", e._presLayout);
          a += eP[S.type]({
            w: D,
            h: k
          }, {
            w: M,
            h: z,
            x: U,
            y: j
          });
          D = M;
          k = z;
        } else a += "  <a:stretch><a:fillRect/></a:stretch>";
        a += "</p:blipFill>";
        a += "<p:spPr>";
        a += " <a:xfrm" + b + ">";
        a += '  <a:off x="'.concat(u, '" y="').concat(m, '"/>');
        a += '  <a:ext cx="'.concat(D, '" cy="').concat(k, '"/>');
        a += " </a:xfrm>";
        a += ' <a:prstGeom prst="'.concat(E ? "ellipse" : "rect", '"><a:avLst/></a:prstGeom>');
        t.options.shadow && "none" !== t.options.shadow.type && (t.options.shadow.type = t.options.shadow.type || "outer", t.options.shadow.blur = K(t.options.shadow.blur || 8), t.options.shadow.offset = K(t.options.shadow.offset || 4), t.options.shadow.angle = Math.round(6e4 * (t.options.shadow.angle || 270)), t.options.shadow.opacity = Math.round(1e5 * (t.options.shadow.opacity || .75)), t.options.shadow.color = t.options.shadow.color || I.color, a += "<a:effectLst>", a += "<a:".concat(t.options.shadow.type, "Shdw ").concat("outer" === t.options.shadow.type ? 'sx="100000" sy="100000" kx="0" ky="0" algn="bl" rotWithShape="0"' : "", ' blurRad="').concat(t.options.shadow.blur, '" dist="').concat(t.options.shadow.offset, '" dir="').concat(t.options.shadow.angle, '">'), a += '<a:srgbClr val="'.concat(t.options.shadow.color, '">'), a += '<a:alpha val="'.concat(t.options.shadow.opacity, '"/></a:srgbClr>'), a += "</a:".concat(t.options.shadow.type, "Shdw>"), a += "</a:effectLst>");
        a += "</p:spPr>";
        a += "</p:pic>";
        break;
      case h.media:
        "online" === t.mtype ? (a += "<p:pic>", a += " <p:nvPicPr>", a += '<p:cNvPr id="'.concat(t.mediaRid + 2, '" name="').concat(t.options.objectName, '"/>'), a += " <p:cNvPicPr/>", a += " <p:nvPr>", a += '  <a:videoFile r:link="rId'.concat(t.mediaRid, '"/>'), a += " </p:nvPr>", a += " </p:nvPicPr>", a += ' <p:blipFill><a:blip r:embed="rId'.concat(t.mediaRid + 1, '"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>')) : (a += "<p:pic>", a += " <p:nvPicPr>", a += '<p:cNvPr id="'.concat(t.mediaRid + 2, '" name="').concat(t.options.objectName, '"><a:hlinkClick r:id="" action="ppaction://media"/></p:cNvPr>'), a += ' <p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr>', a += " <p:nvPr>", a += '  <a:videoFile r:link="rId'.concat(t.mediaRid, '"/>'), a += "  <p:extLst>", a += '   <p:ext uri="{DAA4B4D4-6D71-4841-9C94-3DE7FCFB9230}">', a += '    <p14:media xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" r:embed="rId'.concat(t.mediaRid + 1, '"/>'), a += "   </p:ext>", a += "  </p:extLst>", a += " </p:nvPr>", a += " </p:nvPicPr>", a += ' <p:blipFill><a:blip r:embed="rId'.concat(t.mediaRid + 2, '"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>'));
        a += " <p:spPr>";
        a += "  <a:xfrm".concat(b, '><a:off x="').concat(u, '" y="').concat(m, '"/><a:ext cx="').concat(g, '" cy="').concat(v, '"/></a:xfrm>');
        a += '  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>';
        a += " </p:spPr>";
        a += "</p:pic>";
        break;
      case h.chart:
        a += "<p:graphicFrame>";
        a += " <p:nvGraphicFramePr>";
        a += '   <p:cNvPr id="'.concat(n + 2, '" name="').concat(t.options.objectName, '" descr="').concat(q(t.options.altText || ""), '"/>');
        a += "   <p:cNvGraphicFramePr/>";
        a += "   <p:nvPr>".concat(eD(f), "</p:nvPr>");
        a += " </p:nvGraphicFramePr>";
        a += ' <p:xfrm><a:off x="'.concat(u, '" y="').concat(m, '"/><a:ext cx="').concat(g, '" cy="').concat(v, '"/></p:xfrm>');
        a += ' <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">';
        a += '  <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart">';
        a += '   <c:chart r:id="rId'.concat(t.chartRid, '" xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"/>');
        a += "  </a:graphicData>";
        a += " </a:graphic>";
        a += "</p:graphicFrame>";
        break;
      default:
        a += "";
    }
  });
  e._slideNumberProps && (e._slideNumberProps.align || (e._slideNumberProps.align = "left"), a += "<p:sp>", a += " <p:nvSpPr>", a += '  <p:cNvPr id="25" name="Slide Number Placeholder 0"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>', a += '  <p:nvPr><p:ph type="sldNum" sz="quarter" idx="4294967295"/></p:nvPr>', a += " </p:nvSpPr>", a += " <p:spPr>", a += "<a:xfrm>" + '<a:off x="'.concat(H(e._slideNumberProps.x, "X", e._presLayout), '" y="').concat(H(e._slideNumberProps.y, "Y", e._presLayout), '"/>') + '<a:ext cx="'.concat(e._slideNumberProps.w ? H(e._slideNumberProps.w, "X", e._presLayout) : "800000", '" cy="').concat(e._slideNumberProps.h ? H(e._slideNumberProps.h, "Y", e._presLayout) : "300000", '"/>') + '</a:xfrm> <a:prstGeom prst="rect"><a:avLst/></a:prstGeom> <a:extLst><a:ext uri="{C572A759-6A51-4108-AA02-DFA0A04FC94B}"><ma14:wrappingTextBoxFlag val="0" xmlns:ma14="http://schemas.microsoft.com/office/mac/drawingml/2011/main"/></a:ext></a:extLst></p:spPr>', a += "<p:txBody>", a += "<a:bodyPr", e._slideNumberProps.margin && Array.isArray(e._slideNumberProps.margin) ? (a += ' lIns="'.concat(K(e._slideNumberProps.margin[3] || 0), '"'), a += ' tIns="'.concat(K(e._slideNumberProps.margin[0] || 0), '"'), a += ' rIns="'.concat(K(e._slideNumberProps.margin[1] || 0), '"'), a += ' bIns="'.concat(K(e._slideNumberProps.margin[2] || 0), '"')) : "number" == typeof e._slideNumberProps.margin && (a += ' lIns="'.concat(K(e._slideNumberProps.margin || 0), '"'), a += ' tIns="'.concat(K(e._slideNumberProps.margin || 0), '"'), a += ' rIns="'.concat(K(e._slideNumberProps.margin || 0), '"'), a += ' bIns="'.concat(K(e._slideNumberProps.margin || 0), '"')), e._slideNumberProps.valign && (a += ' anchor="'.concat(e._slideNumberProps.valign.replace("top", "t").replace("middle", "ctr").replace("bottom", "b"), '"')), a += "/>", a += "  <a:lstStyle><a:lvl1pPr>", (e._slideNumberProps.fontFace || e._slideNumberProps.fontSize || e._slideNumberProps.color) && (a += '<a:defRPr sz="'.concat(Math.round(100 * (e._slideNumberProps.fontSize || 12)), '">'), e._slideNumberProps.color && (a += ea(e._slideNumberProps.color)), e._slideNumberProps.fontFace && (a += '<a:latin typeface="'.concat(e._slideNumberProps.fontFace, '"/><a:ea typeface="').concat(e._slideNumberProps.fontFace, '"/><a:cs typeface="').concat(e._slideNumberProps.fontFace, '"/>')), a += "</a:defRPr>"), a += "</a:lvl1pPr></a:lstStyle>", a += "<a:p>", e._slideNumberProps.align.startsWith("l") ? a += '<a:pPr algn="l"/>' : e._slideNumberProps.align.startsWith("c") ? a += '<a:pPr algn="ctr"/>' : e._slideNumberProps.align.startsWith("r") ? a += '<a:pPr algn="r"/>' : a += '<a:pPr algn="l"/>', a += '<a:fld id="'.concat(W, '" type="slidenum"><a:rPr b="').concat(e._slideNumberProps.bold ? 1 : 0, '" lang="en-US"/>'), a += "<a:t>".concat(e._slideNum, '</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p>'), a += "</p:txBody></p:sp>");
  a += "</p:spTree>";
  return a += "</p:cSld>";
}
function eB(e, t) {
  var a = 0;
  var r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
  e._rels.forEach(function(e) {
    a = Math.max(a, e.rId);
    e.type.toLowerCase().includes("hyperlink") ? "slide" === e.data ? r += '<Relationship Id="rId'.concat(e.rId, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slide').concat(e.Target, '.xml"/>') : r += '<Relationship Id="rId'.concat(e.rId, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="').concat(e.Target, '" TargetMode="External"/>') : e.type.toLowerCase().includes("notesSlide") && (r += '<Relationship Id="rId'.concat(e.rId, '" Target="').concat(e.Target, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide"/>'));
  });
  (e._relsChart || []).forEach(function(e) {
    a = Math.max(a, e.rId);
    r += '<Relationship Id="rId'.concat(e.rId, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" Target="').concat(e.Target, '"/>');
  });
  (e._relsMedia || []).forEach(function(e) {
    var t = e.rId.toString();
    a = Math.max(a, e.rId);
    e.type.toLowerCase().includes("image") ? r += '<Relationship Id="rId' + t + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="' + e.Target + '"/>' : e.type.toLowerCase().includes("audio") ? r.includes(' Target="' + e.Target + '"') ? r += '<Relationship Id="rId' + t + '" Type="http://schemas.microsoft.com/office/2007/relationships/media" Target="' + e.Target + '"/>' : r += '<Relationship Id="rId' + t + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/audio" Target="' + e.Target + '"/>' : e.type.toLowerCase().includes("video") ? r.includes(' Target="' + e.Target + '"') ? r += '<Relationship Id="rId' + t + '" Type="http://schemas.microsoft.com/office/2007/relationships/media" Target="' + e.Target + '"/>' : r += '<Relationship Id="rId' + t + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/video" Target="' + e.Target + '"/>' : e.type.toLowerCase().includes("online") && (r.includes(' Target="' + e.Target + '"') ? r += '<Relationship Id="rId' + t + '" Type="http://schemas.microsoft.com/office/2007/relationships/image" Target="' + e.Target + '"/>' : r += '<Relationship Id="rId' + t + '" Target="' + e.Target + '" TargetMode="External" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/video"/>');
  });
  t.forEach(function(e, t) {
    r += '<Relationship Id="rId'.concat(a + t + 1, '" Type="').concat(e.type, '" Target="').concat(e.target, '"/>');
  });
  return r += "</Relationships>";
}
function eT(e, t) {
  var a;
  var r;
  var n = "";
  var o = "";
  var A = "";
  var i = "";
  var s = t ? "a:lvl1pPr" : "a:pPr";
  var l = K(27);
  var c = "<".concat(s).concat(e.options.rtlMode ? ' rtl="1" ' : "");
  if (e.options.align) switch (e.options.align) {
    case "left":
      c += ' algn="l"';
      break;
    case "right":
      c += ' algn="r"';
      break;
    case "center":
      c += ' algn="ctr"';
      break;
    case "justify":
      c += ' algn="just"';
      break;
    default:
      c += "";
  }
  if (e.options.lineSpacing ? o = '<a:lnSpc><a:spcPts val="'.concat(Math.round(100 * e.options.lineSpacing), '"/></a:lnSpc>') : e.options.lineSpacingMultiple && (o = '<a:lnSpc><a:spcPct val="'.concat(Math.round(1e5 * e.options.lineSpacingMultiple), '"/></a:lnSpc>')), e.options.indentLevel && !isNaN(Number(e.options.indentLevel)) && e.options.indentLevel > 0 && (c += ' lvl="'.concat(e.options.indentLevel, '"')), e.options.paraSpaceBefore && !isNaN(Number(e.options.paraSpaceBefore)) && e.options.paraSpaceBefore > 0 && (A += '<a:spcBef><a:spcPts val="'.concat(Math.round(100 * e.options.paraSpaceBefore), '"/></a:spcBef>')), e.options.paraSpaceAfter && !isNaN(Number(e.options.paraSpaceAfter)) && e.options.paraSpaceAfter > 0 && (A += '<a:spcAft><a:spcPts val="'.concat(Math.round(100 * e.options.paraSpaceAfter), '"/></a:spcAft>')), "object" == typeof e.options.bullet) {
    if (e?.options?.bullet?.indent && (l = K(e.options.bullet.indent)), e.options.bullet.type) "number" === e.options.bullet.type.toString().toLowerCase() && (c += ' marL="'.concat(e.options.indentLevel && e.options.indentLevel > 0 ? l + l * e.options.indentLevel : l, '" indent="-').concat(l, '"'), n = '<a:buSzPct val="100000"/><a:buFont typeface="+mj-lt"/><a:buAutoNum type="'.concat(e.options.bullet.style || "arabicPeriod", '" startAt="').concat(e.options.bullet.numberStartAt || e.options.bullet.startAt || "1", '"/>')); else if (e.options.bullet.characterCode) {
      var p = "&#x".concat(e.options.bullet.characterCode, ";");
      /^[0-9A-Fa-f]{4}$/.test(e.options.bullet.characterCode) || (console.warn("Warning: `bullet.characterCode should be a 4-digit unicode charatcer (ex: 22AB)`!"), p = g.DEFAULT);
      c += ' marL="'.concat(e.options.indentLevel && e.options.indentLevel > 0 ? l + l * e.options.indentLevel : l, '" indent="-').concat(l, '"');
      n = '<a:buSzPct val="100000"/><a:buChar char="' + p + '"/>';
    } else if (e.options.bullet.code) {
      var p = "&#x".concat(e.options.bullet.code, ";");
      /^[0-9A-Fa-f]{4}$/.test(e.options.bullet.code) || (console.warn("Warning: `bullet.code should be a 4-digit hex code (ex: 22AB)`!"), p = g.DEFAULT);
      c += ' marL="'.concat(e.options.indentLevel && e.options.indentLevel > 0 ? l + l * e.options.indentLevel : l, '" indent="-').concat(l, '"');
      n = '<a:buSzPct val="100000"/><a:buChar char="' + p + '"/>';
    } else {
      c += ' marL="'.concat(e.options.indentLevel && e.options.indentLevel > 0 ? l + l * e.options.indentLevel : l, '" indent="-').concat(l, '"');
      n = '<a:buSzPct val="100000"/><a:buChar char="'.concat(g.DEFAULT, '"/>');
    }
  } else e.options.bullet ? (c += ' marL="'.concat(e.options.indentLevel && e.options.indentLevel > 0 ? l + l * e.options.indentLevel : l, '" indent="-').concat(l, '"'), n = '<a:buSzPct val="100000"/><a:buChar char="'.concat(g.DEFAULT, '"/>')) : e.options.bullet || (c += ' indent="0" marL="0"', n = "<a:buNone/>");
  if (e.options.tabStops && Array.isArray(e.options.tabStops)) {
    var d = e.options.tabStops.map(function(e) {
      return '<a:tab pos="'.concat(J(e.position || 1), '" algn="').concat(e.alignment || "l", '"/>');
    }).join("");
    i = "<a:tabLst>".concat(d, "</a:tabLst>");
  }
  c += ">" + o + A + n + i;
  t && (c += eS(e.options, !0));
  return c += "</" + s + ">";
}
function eS(e, t) {
  var a;
  var r;
  var n;
  var o;
  var A;
  var i;
  var s;
  var l = "";
  var c = t ? "a:defRPr" : "a:rPr";
  if (l += "<" + c + ' lang="' + (e.lang ? e.lang : "en-US") + '"' + (e.lang ? ' altLang="en-US"' : ""), l += e.fontSize ? ' sz="'.concat(Math.round(100 * e.fontSize), '"') : "", l += e?.bold ? ' b="'.concat(e.bold ? "1" : "0", '"') : "", l += e?.italic ? ' i="'.concat(e.italic ? "1" : "0", '"') : "", l += e?.strike ? ' strike="'.concat("string" == typeof e.strike ? e.strike : "sngStrike", '"') : "", "object" == typeof e.underline && e.underline?.style ? l += ' u="'.concat(e.underline.style, '"') : "string" == typeof e.underline ? l += ' u="'.concat(String(e.underline), '"') : e.hyperlink && (l += ' u="sng"'), e.baseline ? l += ' baseline="'.concat(Math.round(50 * e.baseline), '"') : e.subscript ? l += ' baseline="-40000"' : e.superscript && (l += ' baseline="30000"'), l += e.charSpacing ? ' spc="'.concat(Math.round(100 * e.charSpacing), '" kern="0"') : "", l += ' dirty="0">', (e.color || e.fontFace || e.outline || "object" == typeof e.underline && e.underline.color) && (e.outline && "object" == typeof e.outline && (l += '<a:ln w="'.concat(K(e.outline.size || .75), '">').concat(ea(e.outline.color || "FFFFFF"), "</a:ln>")), e.color && (l += ea({
    color: e.color,
    transparency: e.transparency
  })), e.highlight && (l += "<a:highlight>".concat(et(e.highlight), "</a:highlight>")), "object" == typeof e.underline && e.underline.color && (l += "<a:uFill>".concat(ea(e.underline.color), "</a:uFill>")), e.glow && (l += "<a:effectLst>".concat((a = e.glow, r = "", o = Math.round(12700 * (n = y(y({}, R), a)).size), A = n.color, i = Math.round(1e5 * n.opacity), r += '<a:glow rad="'.concat(o, '">'), r += et(A, '<a:alpha val="'.concat(i, '"/>')), r += "</a:glow>"), "</a:effectLst>")), e.fontFace && (l += '<a:latin typeface="'.concat(e.fontFace, '" pitchFamily="34" charset="0"/><a:ea typeface="').concat(e.fontFace, '" pitchFamily="34" charset="-122"/><a:cs typeface="').concat(e.fontFace, '" pitchFamily="34" charset="-120"/>'))), e.hyperlink) {
    if ("object" != typeof e.hyperlink) throw Error("ERROR: text `hyperlink` option should be an object. Ex: `hyperlink:{url:'https://github.com'}` ");
    if (e.hyperlink.url || e.hyperlink.slide) e.hyperlink.url ? l += '<a:hlinkClick r:id="rId'.concat(e.hyperlink._rId, '" invalidUrl="" action="" tgtFrame="" tooltip="').concat(e.hyperlink.tooltip ? q(e.hyperlink.tooltip) : "", '" history="1" highlightClick="0" endSnd="0"').concat(e.color ? ">" : "/>") : e.hyperlink.slide && (l += '<a:hlinkClick r:id="rId'.concat(e.hyperlink._rId, '" action="ppaction://hlinksldjump" tooltip="').concat(e.hyperlink.tooltip ? q(e.hyperlink.tooltip) : "", '"').concat(e.color ? ">" : "/>")); else throw Error("ERROR: 'hyperlink requires either `url` or `slide`'");
    e.color && (l += " <a:extLst>", l += '  <a:ext uri="{A12FA001-AC4F-418D-AE19-62706E023703}">', l += '   <ahyp:hlinkClr xmlns:ahyp="http://schemas.microsoft.com/office/drawing/2018/hyperlinkcolor" val="tx"/>', l += "  </a:ext>", l += " </a:extLst>", l += "</a:hlinkClick>");
  }
  return l + "</".concat(c, ">");
}
function eE(e) {
  var t;
  var a = e.options || {};
  var r = [];
  var n = [];
  if (a && e._type !== h.tablecell && (void 0 === e.text || null === e.text)) return "";
  var o = e._type === h.tablecell ? "<a:txBody>" : "<p:txBody>";
  o += (t = "<a:bodyPr", e && e._type === h.text && e.options._bodyProp ? (t += e.options._bodyProp.wrap ? ' wrap="square"' : ' wrap="none"', (e.options._bodyProp.lIns || 0 === e.options._bodyProp.lIns) && (t += ' lIns="'.concat(e.options._bodyProp.lIns, '"')), (e.options._bodyProp.tIns || 0 === e.options._bodyProp.tIns) && (t += ' tIns="'.concat(e.options._bodyProp.tIns, '"')), (e.options._bodyProp.rIns || 0 === e.options._bodyProp.rIns) && (t += ' rIns="'.concat(e.options._bodyProp.rIns, '"')), (e.options._bodyProp.bIns || 0 === e.options._bodyProp.bIns) && (t += ' bIns="'.concat(e.options._bodyProp.bIns, '"')), t += ' rtlCol="0"', e.options._bodyProp.anchor && (t += ' anchor="' + e.options._bodyProp.anchor + '"'), e.options._bodyProp.vert && (t += ' vert="' + e.options._bodyProp.vert + '"'), t += ">", e.options.fit && ("none" === e.options.fit ? t += "" : "shrink" === e.options.fit ? t += "<a:normAutofit/>" : "resize" === e.options.fit && (t += "<a:spAutoFit/>")), e.options.shrinkText && (t += "<a:normAutofit/>"), t += e.options._bodyProp.autoFit ? "<a:spAutoFit/>" : "") : t += ' wrap="square" rtlCol="0">', t += "</a:bodyPr>", e._type === h.tablecell ? "<a:bodyPr/>" : t);
  0 === a.h && a.line && a.align ? o += '<a:lstStyle><a:lvl1pPr algn="l"/></a:lstStyle>' : "placeholder" === e._type ? o += "<a:lstStyle>".concat(eT(e, !0), "</a:lstStyle>") : o += "<a:lstStyle/>";
  "string" == typeof e.text || "number" == typeof e.text ? r.push({
    text: e.text.toString(),
    options: a || {}
  }) : e.text && !Array.isArray(e.text) && "object" == typeof e.text && Object.keys(e.text).includes("text") ? r.push({
    text: e.text || "",
    options: e.options || {}
  }) : Array.isArray(e.text) && (r = e.text.map(function(e) {
    return {
      text: e.text,
      options: e.options
    };
  }));
  r.forEach(function(e, t) {
    e.text || (e.text = "");
    e.options = e.options || a || {};
    0 === t && e.options && !e.options.bullet && a.bullet && (e.options.bullet = a.bullet);
    ("string" == typeof e.text || "number" == typeof e.text) && (e.text = e.text.toString().replace(/\r*\n/g, "\r\n"));
    e.text.includes("\r\n") && null === e.text.match(/\n$/g) ? e.text.split("\r\n").forEach(function(t) {
      e.options.breakLine = !0;
      n.push({
        text: t,
        options: e.options
      });
    }) : n.push(e);
  });
  var A = [];
  var i = [];
  n.forEach(function(e, t) {
    i.length > 0 && (e.options.align || a.align) ? e.options.align !== n[t - 1].options.align && (A.push(i), i = []) : i.length > 0 && e.options.bullet && i.length > 0 && (A.push(i), i = [], e.options.breakLine = !1);
    i.push(e);
    i.length > 0 && e.options.breakLine && t + 1 < n.length && (A.push(i), i = []);
    t + 1 === n.length && A.push(i);
  });
  A.forEach(function(t) {
    var r;
    var n = !1;
    o += "<a:p>";
    var A = "<a:pPr ".concat(t[0].options?.rtlMode ? ' rtl="1" ' : "");
    t.forEach(function(e, t) {
      e.options._lineIdx = t;
      t > 0 && e.options.softBreakBefore && (o += "<a:br/>");
      e.options.align = e.options.align || a.align;
      e.options.lineSpacing = e.options.lineSpacing || a.lineSpacing;
      e.options.lineSpacingMultiple = e.options.lineSpacingMultiple || a.lineSpacingMultiple;
      e.options.indentLevel = e.options.indentLevel || a.indentLevel;
      e.options.paraSpaceBefore = e.options.paraSpaceBefore || a.paraSpaceBefore;
      e.options.paraSpaceAfter = e.options.paraSpaceAfter || a.paraSpaceAfter;
      A = eT(e, !1);
      o += A.replace("<a:pPr></a:pPr>", "");
      Object.entries(a).filter(function(t) {
        var a = t[0];
        t[1];
        return !(e.options.hyperlink && "color" === a);
      }).forEach(function(t) {
        var a = t[0];
        var r = t[1];
        "bullet" === a || e.options[a] || (e.options[a] = r);
      });
      o += e.text ? "<a:r>".concat(eS(e.options, !1), "<a:t>").concat(q(e.text), "</a:t></a:r>") : "";
      (!e.text && a.fontSize || e.options.fontSize) && (n = !0, a.fontSize = a.fontSize || e.options.fontSize);
    });
    e._type === h.tablecell && (a.fontSize || a.fontFace) ? a.fontFace ? (o += '<a:endParaRPr lang="'.concat(a.lang || "en-US", '"') + (a.fontSize ? ' sz="'.concat(Math.round(100 * a.fontSize), '"') : "") + ' dirty="0">', o += '<a:latin typeface="'.concat(a.fontFace, '" charset="0"/>'), o += '<a:ea typeface="'.concat(a.fontFace, '" charset="0"/>'), o += '<a:cs typeface="'.concat(a.fontFace, '" charset="0"/>'), o += "</a:endParaRPr>") : o += '<a:endParaRPr lang="'.concat(a.lang || "en-US", '"') + (a.fontSize ? ' sz="'.concat(Math.round(100 * a.fontSize), '"') : "") + ' dirty="0"/>' : n ? o += '<a:endParaRPr lang="'.concat(a.lang || "en-US", '"') + (a.fontSize ? ' sz="'.concat(Math.round(100 * a.fontSize), '"') : "") + ' dirty="0"/>' : o += '<a:endParaRPr lang="'.concat(a.lang || "en-US", '" dirty="0"/>');
    o += "</a:p>";
  });
  return o += e._type === h.tablecell ? "</a:txBody>" : "</p:txBody>";
}
function eD(e) {
  if (!e) return "";
  var t;
  var a;
  var r = e.options?._placeholderIdx ? e.options._placeholderIdx : "";
  var n = e.options?._placeholderType ? e.options._placeholderType : "";
  var o = n && m[n] ? m[n].toString() : "";
  return "<p:ph\n		".concat(r ? ' idx="' + r.toString() + '"' : "", "\n		").concat(o && m[o] ? ' type="'.concat(o, '"') : "", "\n		").concat(e.text && e.text.length > 0 ? ' hasCustomPrompt="1"' : "", "\n		/>");
}
export var $$ek0 = function() {
  function e() {
    var e = this;
    this._version = "3.12.0";
    this._alignH = l;
    this._alignV = c;
    this._chartType = A;
    this._outputType = o;
    this._schemeColor = s;
    this._shapeType = i;
    this._charts = d;
    this._colors = f;
    this._shapes = p;
    this.addNewSlide = function(t) {
      var a = e.sections.length > 0 && e.sections[e.sections.length - 1]._slides.filter(function(t) {
        return t._slideNum === e.slides[e.slides.length - 1]._slideNum;
      }).length > 0;
      t.sectionTitle = a ? e.sections[e.sections.length - 1].title : null;
      return e.addSlide(t);
    };
    this.getSlide = function(t) {
      return e.slides.filter(function(e) {
        return e._slideNum === t;
      })[0];
    };
    this.setSlideNumber = function(t) {
      e.masterSlide._slideNumberProps = t;
      e.slideLayouts.filter(function(e) {
        return e._name === k;
      })[0]._slideNumberProps = t;
    };
    this.createChartMediaRels = function(e, t, a) {
      e._relsChart.forEach(function(e) {
        return a.push(function(e, t) {
          return x(this, void 0, void 0, function() {
            var a;
            return w(this, function(r) {
              switch (r.label) {
                case 0:
                  a = e.data;
                  return [4, new Promise(function(r, n) {
                    var o;
                    var A;
                    var i = new (b())();
                    var s = (a.length - 1) * 2 + 1;
                    var l = a[0]?.labels?.length > 1;
                    i.folder("_rels");
                    i.folder("docProps");
                    i.folder("xl/_rels");
                    i.folder("xl/tables");
                    i.folder("xl/theme");
                    i.folder("xl/worksheets");
                    i.folder("xl/worksheets/_rels");
                    i.file("[Content_Types].xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>  <Default Extension="xml" ContentType="application/xml"/>  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>  <Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>  <Override PartName="/xl/tables/table1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>\n');
                    i.file("_rels/.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>\n');
                    i.file("docProps/app.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Macintosh Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>Sheet1</vt:lpstr></vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>\n');
                    i.file("docProps/core.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>PptxGenJS</dc:creator><cp:lastModifiedBy>PptxGenJS</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">' + new Date().toISOString() + '</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">' + new Date().toISOString() + "</dcterms:modified></cp:coreProperties>");
                    i.file("xl/_rels/workbook.xml.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/></Relationships>');
                    i.file("xl/styles.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="0" formatCode="General"/></numFmts><fonts count="4"><font><sz val="9"/><color indexed="8"/><name val="Geneva"/></font><font><sz val="9"/><color indexed="8"/><name val="Geneva"/></font><font><sz val="10"/><color indexed="8"/><name val="Geneva"/></font><font><sz val="18"/><color indexed="8"/><name val="Arial"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><dxfs count="0"/><tableStyles count="0"/><colors><indexedColors><rgbColor rgb="ff000000"/><rgbColor rgb="ffffffff"/><rgbColor rgb="ffff0000"/><rgbColor rgb="ff00ff00"/><rgbColor rgb="ff0000ff"/><rgbColor rgb="ffffff00"/><rgbColor rgb="ffff00ff"/><rgbColor rgb="ff00ffff"/><rgbColor rgb="ff000000"/><rgbColor rgb="ffffffff"/><rgbColor rgb="ff878787"/><rgbColor rgb="fff9f9f9"/></indexedColors></colors></styleSheet>\n');
                    i.file("xl/theme/theme1.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="4472C4"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="5B9BD5"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="Yu Gothic Light"/><a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/><a:font script="Hans" typeface="DengXian Light"/><a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="Yu Gothic"/><a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/><a:font script="Hans" typeface="DengXian"/><a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>');
                    i.file("xl/workbook.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><fileVersion appName="xl" lastEdited="7" lowestEdited="6" rupBuild="10507"/><workbookPr/><bookViews><workbookView xWindow="0" yWindow="500" windowWidth="20960" windowHeight="15960"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0" concurrentCalc="0"/></workbook>\n');
                    i.file("xl/worksheets/_rels/sheet1.xml.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table1.xml"/></Relationships>\n');
                    var c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
                    if (e.opts._type === d.BUBBLE || e.opts._type === d.BUBBLE3D) c += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'.concat(s, '" uniqueCount="').concat(s, '">'); else if (e.opts._type === d.SCATTER) c += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'.concat(a.length, '" uniqueCount="').concat(a.length, '">'); else if (l) {
                      var p = a.length;
                      a[0].labels.forEach(function(e) {
                        return p += e.filter(function(e) {
                          return e && "" !== e;
                        }).length;
                      });
                      c += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'.concat(p, '" uniqueCount="').concat(p, '">');
                      c += "<si><t/></si>";
                    } else {
                      var f = a.length + a[0].labels.length * a[0].labels[0].length + a[0].labels.length;
                      var u = a.length + a[0].labels.length * a[0].labels[0].length + 1;
                      c += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="'.concat(f, '" uniqueCount="').concat(u, '">');
                      c += '<si><t xml:space="preserve"></t></si>';
                    }
                    e.opts._type === d.BUBBLE || e.opts._type === d.BUBBLE3D ? a.forEach(function(e, t) {
                      0 === t ? c += "<si><t>X-Axis</t></si>" : (c += "<si><t>".concat(q(e.name || "Y-Axis".concat(t)), "</t></si>"), c += "<si><t>".concat(q("Size".concat(t)), "</t></si>"));
                    }) : a.forEach(function(e) {
                      c += "<si><t>".concat(q((e.name || " ").replace("X-Axis", "X-Values")), "</t></si>");
                    });
                    e.opts._type !== d.BUBBLE && e.opts._type !== d.BUBBLE3D && e.opts._type !== d.SCATTER && a[0].labels.slice().reverse().forEach(function(e) {
                      e.filter(function(e) {
                        return e && "" !== e;
                      }).forEach(function(e) {
                        c += "<si><t>".concat(q(e), "</t></si>");
                      });
                    });
                    c += "</sst>\n";
                    i.file("xl/sharedStrings.xml", c);
                    var h = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
                    if (e.opts._type === d.BUBBLE || e.opts._type === d.BUBBLE3D) {
                      h += '<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="Table1" displayName="Table1" ref="A1:'.concat(ev(s)).concat(s, '" totalsRowShown="0">');
                      h += '<tableColumns count="'.concat(s, '">');
                      var m = 1;
                      a.forEach(function(e, t) {
                        0 === t ? h += '<tableColumn id="'.concat(t + 1, '" name="X-Values"/>') : (h += '<tableColumn id="'.concat(t + m, '" name="').concat(e.name, '"/>'), m++, h += '<tableColumn id="'.concat(t + m, '" name="Size').concat(t, '"/>'));
                      });
                    } else e.opts._type === d.SCATTER ? (h += '<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="Table1" displayName="Table1" ref="A1:'.concat(ev(a.length)).concat(a[0].values.length + 1, '" totalsRowShown="0">'), h += '<tableColumns count="'.concat(a.length, '">'), a.forEach(function(e, t) {
                      h += '<tableColumn id="'.concat(t + 1, '" name="').concat(0 === t ? "X-Values" : "Y-Value ").concat(t, '"/>');
                    })) : (h += '<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="Table1" displayName="Table1" ref="A1:'.concat(ev(a.length + a[0].labels.length)).concat(a[0].labels[0].length + 1, '\'" totalsRowShown="0">'), h += '<tableColumns count="'.concat(a.length + a[0].labels.length, '">'), a[0].labels.forEach(function(e, t) {
                      h += '<tableColumn id="'.concat(t + 1, '" name="Column').concat(t + 1, '"/>');
                    }), a.forEach(function(e, t) {
                      h += '<tableColumn id="'.concat(t + a[0].labels.length + 1, '" name="').concat(q(e.name), '"/>');
                    }));
                    h += "</tableColumns>";
                    h += '<tableStyleInfo showFirstColumn="0" showLastColumn="0" showRowStripes="1" showColumnStripes="0"/>';
                    h += "</table>";
                    i.file("xl/tables/table1.xml", h);
                    var g = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
                    if (g += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">', e.opts._type === d.BUBBLE || e.opts._type === d.BUBBLE3D ? g += '<dimension ref="A1:'.concat(ev(s)).concat(a[0].values.length + 1, '"/>') : e.opts._type === d.SCATTER ? g += '<dimension ref="A1:'.concat(ev(a.length)).concat(a[0].values.length + 1, '"/>') : g += '<dimension ref="A1:'.concat(ev(a.length + 1)).concat(a[0].values.length + 1, '"/>'), g += '<sheetViews><sheetView tabSelected="1" workbookViewId="0"><selection activeCell="B1" sqref="B1"/></sheetView></sheetViews>', g += '<sheetFormatPr baseColWidth="10" defaultRowHeight="16"/>', e.opts._type === d.BUBBLE || e.opts._type === d.BUBBLE3D) {
                      g += "<sheetData>";
                      g += '<row r="1" spans="1:'.concat(s, '">');
                      g += '<c r="A1" t="s"><v>0</v></c>';
                      for (var v = 1; v < s; v++) g += '<c r="'.concat(ev(v + 1), '1" t="s"><v>').concat(v, "</v></c>");
                      g += "</row>";
                      a[0].values.forEach(function(e, t) {
                        g += '<row r="'.concat(t + 2, '" spans="1:').concat(s, '">');
                        g += '<c r="A'.concat(t + 2, '"><v>').concat(e, "</v></c>");
                        for (r = 2, n = 1, void 0; n < a.length; n++) {
                          var r;
                          var n;
                          g += '<c r="'.concat(ev(r)).concat(t + 2, '"><v>').concat(a[n].values[t] || "", "</v></c>");
                          r++;
                          g += '<c r="'.concat(ev(r)).concat(t + 2, '"><v>').concat(a[n].sizes[t] || "", "</v></c>");
                          r++;
                        }
                        g += "</row>";
                      });
                    } else if (e.opts._type === d.SCATTER) {
                      g += "<sheetData>";
                      g += '<row r="1" spans="1:'.concat(a.length, '">');
                      for (var v = 0; v < a.length; v++) g += '<c r="'.concat(ev(v + 1), '1" t="s"><v>').concat(v, "</v></c>");
                      g += "</row>";
                      a[0].values.forEach(function(e, t) {
                        g += '<row r="'.concat(t + 2, '" spans="1:').concat(a.length, '">');
                        g += '<c r="A'.concat(t + 2, '"><v>').concat(e, "</v></c>");
                        for (var r = 1; r < a.length; r++) g += '<c r="'.concat(ev(r + 1)).concat(t + 2, '"><v>').concat(a[r].values[t] || 0 === a[r].values[t] ? a[r].values[t] : "", "</v></c>");
                        g += "</row>";
                      });
                    } else if (g += "<sheetData>", l) {
                      g += '<row r="1" spans="1:'.concat(a.length + a[0].labels.length, '">');
                      for (var v = 0; v < a[0].labels.length; v++) g += '<c r="'.concat(ev(v + 1), '1" t="s"><v>0</v></c>');
                      for (var v = a[0].labels.length - 1; v < a.length + a[0].labels.length - 1; v++) g += '<c r="'.concat(ev(v + a[0].labels.length), '1" t="s"><v>').concat(v, "</v></c>");
                      g += "</row>";
                      for (x = a.length, w = a[0].labels[0].length, C = a[0].labels.length, P = function(e) {
                        g += '<row r="'.concat(e + 2, '" spans="1:').concat(x + C, '">');
                        var t = x;
                        var r = a[0].labels.slice().reverse();
                        r.forEach(function(a, n) {
                          if (a[e]) {
                            var o = 0 === n ? 1 : r[n - 1].filter(function(e) {
                              return e && "" !== e;
                            }).length;
                            t += o;
                            g += '<c r="'.concat(ev(e + 1 + n)).concat(e + 2, '" t="s"><v>').concat(t, "</v></c>");
                          }
                        });
                        for (var n = 0; n < x; n++) g += '<c r="'.concat(ev(C + n + 1)).concat(e + 2, '"><v>').concat(a[n].values[e] || 0, "</v></c>");
                        g += "</row>";
                      }, v = 0, void 0; v < w; v++) {
                        var x;
                        var w;
                        var C;
                        var P;
                        var v;
                        P(v);
                      }
                    } else {
                      g += '<row r="1" spans="1:'.concat(a.length + a[0].labels.length, '">');
                      a[0].labels.forEach(function(e, t) {
                        g += '<c r="'.concat(ev(t + 1), '1" t="s"><v>0</v></c>');
                      });
                      for (var v = 0; v < a.length; v++) g += '<c r="'.concat(ev(v + 1 + a[0].labels.length), '1" t="s"><v>').concat(v + 1, "</v></c>");
                      g += "</row>";
                      a[0].labels[0].forEach(function(e, t) {
                        g += '<row r="'.concat(t + 2, '" spans="1:').concat(a.length + a[0].labels.length, '">');
                        for (var r = a[0].labels.length - 1; r >= 0; r--) {
                          g += '<c r="'.concat(ev(a[0].labels.length - r)).concat(t + 2, '" t="s">');
                          g += "<v>".concat(a.length + t + 1, "</v>");
                          g += "</c>";
                        }
                        for (var n = 0; n < a.length; n++) g += '<c r="'.concat(ev(a[0].labels.length + n + 1)).concat(t + 2, '"><v>').concat(a[n].values[t] || "", "</v></c>");
                        g += "</row>";
                      });
                    }
                    g += "</sheetData>";
                    g += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>';
                    g += "</worksheet>\n";
                    i.file("xl/worksheets/sheet1.xml", g);
                    i.generateAsync({
                      type: "base64"
                    }).then(function(a) {
                      t.file("ppt/embeddings/Microsoft_Excel_Worksheet".concat(e.globalId, ".xlsx"), a, {
                        base64: !0
                      });
                      t.file("ppt/charts/_rels/" + e.fileName + ".rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/package" Target="../embeddings/Microsoft_Excel_Worksheet'.concat(e.globalId, '.xlsx"/>') + "</Relationships>");
                      t.file("ppt/charts/".concat(e.fileName), function(e) {
                        var t;
                        var a;
                        var r;
                        var n;
                        var o;
                        var A;
                        var i = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
                        var s = !1;
                        if (i += '<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">', i += '<c:date1904 val="0"/>', i += '<c:roundedCorners val="'.concat(e.opts.chartArea.roundedCorners ? "1" : "0", '"/>'), i += "<c:chart>", e.opts.showTitle ? (i += eg({
                          title: e.opts.title || "Chart Title",
                          color: e.opts.titleColor,
                          fontFace: e.opts.titleFontFace,
                          fontSize: e.opts.titleFontSize || 18,
                          titleAlign: e.opts.titleAlign,
                          titleBold: e.opts.titleBold,
                          titlePos: e.opts.titlePos,
                          titleRotate: e.opts.titleRotate
                        }, e.opts.x, e.opts.y), i += '<c:autoTitleDeleted val="0"/>') : i += '<c:autoTitleDeleted val="1"/>', e.opts._type === d.BAR3D && (i += '<c:view3D><c:rotX val="'.concat(e.opts.v3DRotX, '"/><c:rotY val="').concat(e.opts.v3DRotY, '"/><c:rAngAx val="').concat(e.opts.v3DRAngAx ? 1 : 0, '"/><c:perspective val="').concat(e.opts.v3DPerspective, '"/></c:view3D>')), i += "<c:plotArea>", e.opts.layout ? (i += "<c:layout>", i += " <c:manualLayout>", i += '  <c:layoutTarget val="inner" />', i += '  <c:xMode val="edge" />', i += '  <c:yMode val="edge" />', i += '  <c:x val="' + (e.opts.layout.x || 0) + '" />', i += '  <c:y val="' + (e.opts.layout.y || 0) + '" />', i += '  <c:w val="' + (e.opts.layout.w || 1) + '" />', i += '  <c:h val="' + (e.opts.layout.h || 1) + '" />', i += " </c:manualLayout>", i += "</c:layout>") : i += "<c:layout/>", Array.isArray(e.opts._type) ? e.opts._type.forEach(function(t) {
                          var a = y(y({}, e.opts), t.options);
                          var r = a.secondaryValAxis ? M : O;
                          var n = a.secondaryCatAxis ? U : z;
                          s = s || a.secondaryValAxis;
                          i += eu(t.type, t.data, a, r, n);
                        }) : i += eu(e.opts._type, e.data, e.opts, O, z), e.opts._type !== d.PIE && e.opts._type !== d.DOUGHNUT) {
                          if (e.opts.valAxes && e.opts.valAxes.length > 1 && !s) throw Error("Secondary axis must be used by one of the multiple charts");
                          if (e.opts.catAxes) {
                            if (!e.opts.valAxes || e.opts.valAxes.length !== e.opts.catAxes.length) throw Error("There must be the same number of value and category axes.");
                            i += eh(y(y({}, e.opts), e.opts.catAxes[0]), z, O);
                          } else i += eh(e.opts, z, O);
                          e.opts.valAxes ? (i += em(y(y({}, e.opts), e.opts.valAxes[0]), O), e.opts.valAxes[1] && (i += em(y(y({}, e.opts), e.opts.valAxes[1]), M))) : (i += em(e.opts, O), e.opts._type === d.BAR3D && (i += (a = '<c:serAx>  <c:axId val="' + j + '"/>' + ('  <c:scaling><c:orientation val="' + ((t = e.opts).serAxisOrientation || (t.barDir, "minMax"))) + '"/></c:scaling>' + ('  <c:delete val="' + (t.serAxisHidden ? "1" : "0")) + '"/>' + ('  <c:axPos val="' + ("col" === t.barDir ? "b" : "l")) + '"/>' + ("none" !== t.serGridLine.style ? ey(t.serGridLine) : ""), t.showSerAxisTitle && (a += eg({
                            color: t.serAxisTitleColor,
                            fontFace: t.serAxisTitleFontFace,
                            fontSize: t.serAxisTitleFontSize,
                            titleRotate: t.serAxisTitleRotate,
                            title: t.serAxisTitle || "Axis Title"
                          })), a += '  <c:numFmt formatCode="'.concat(q(t.serLabelFormatCode) || "General", '" sourceLinked="0"/>'), a += '  <c:majorTickMark val="out"/>', a += '  <c:minorTickMark val="none"/>', a += '  <c:tickLblPos val="'.concat(t.serAxisLabelPos || "col" === t.barDir ? "low" : "nextTo", '"/>'), a += "  <c:spPr>", a += '    <a:ln w="12700" cap="flat">', a += t.serAxisLineShow ? "<a:solidFill>".concat(et(t.serAxisLineColor || S.color), "</a:solidFill>") : "<a:noFill/>", a += '      <a:prstDash val="solid"/>', a += "      <a:round/>", a += "    </a:ln>", a += "  </c:spPr>", a += "  <c:txPr>", a += "    <a:bodyPr/>", a += "    <a:lstStyle/>", a += "    <a:p>", a += "    <a:pPr>", a += '    <a:defRPr sz="'.concat(Math.round(100 * (t.serAxisLabelFontSize || 12)), '" b="').concat(t.serAxisLabelFontBold ? "1" : "0", '" i="').concat(t.serAxisLabelFontItalic ? "1" : "0", '" u="none" strike="noStrike">'), a += "      <a:solidFill>".concat(et(t.serAxisLabelColor || E), "</a:solidFill>"), a += '      <a:latin typeface="'.concat(t.serAxisLabelFontFace || "Arial", '"/>'), a += "   </a:defRPr>", a += "  </a:pPr>", a += '  <a:endParaRPr lang="' + (t.lang || "en-US") + '"/>', a += "  </a:p>", a += " </c:txPr>", a += ' <c:crossAx val="' + O + '"/>', a += ' <c:crosses val="autoZero"/>', t.serAxisLabelFrequency && (a += ' <c:tickLblSkip val="' + t.serAxisLabelFrequency + '"/>'), t.serLabelFormatCode && (["serAxisBaseTimeUnit", "serAxisMajorTimeUnit", "serAxisMinorTimeUnit"].forEach(function(e) {
                            t[e] && ("string" != typeof t[e] || !["days", "months", "years"].includes(e.toLowerCase())) && (console.warn('"'.concat(e, "\" must be one of: 'days','months','years' !")), t[e] = null);
                          }), t.serAxisBaseTimeUnit && (a += ' <c:baseTimeUnit  val="'.concat(t.serAxisBaseTimeUnit.toLowerCase(), '"/>')), t.serAxisMajorTimeUnit && (a += ' <c:majorTimeUnit val="'.concat(t.serAxisMajorTimeUnit.toLowerCase(), '"/>')), t.serAxisMinorTimeUnit && (a += ' <c:minorTimeUnit val="'.concat(t.serAxisMinorTimeUnit.toLowerCase(), '"/>')), t.serAxisMajorUnit && (a += ' <c:majorUnit val="'.concat(t.serAxisMajorUnit, '"/>')), t.serAxisMinorUnit && (a += ' <c:minorUnit val="'.concat(t.serAxisMinorUnit, '"/>'))), a += "</c:serAx>")));
                          e.opts?.catAxes && e.opts?.catAxes[1] && (i += eh(y(y({}, e.opts), e.opts.catAxes[1]), U, M));
                        }
                        e.opts.showDataTable && (i += "<c:dTable>", i += '  <c:showHorzBorder val="'.concat(e.opts.showDataTableHorzBorder ? 1 : 0, '"/>'), i += '  <c:showVertBorder val="'.concat(e.opts.showDataTableVertBorder ? 1 : 0, '"/>'), i += '  <c:showOutline    val="'.concat(e.opts.showDataTableOutline ? 1 : 0, '"/>'), i += '  <c:showKeys       val="'.concat(e.opts.showDataTableKeys ? 1 : 0, '"/>'), i += "  <c:spPr>", i += "    <a:noFill/>", i += '    <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="tx1"><a:lumMod val="15000"/><a:lumOff val="85000"/></a:schemeClr></a:solidFill><a:round/></a:ln>', i += "    <a:effectLst/>", i += "  </c:spPr>", i += "  <c:txPr>", i += '   <a:bodyPr rot="0" spcFirstLastPara="1" vertOverflow="ellipsis" vert="horz" wrap="square" anchor="ctr" anchorCtr="1"/>', i += "   <a:lstStyle/>", i += "   <a:p>", i += '     <a:pPr rtl="0">', i += '       <a:defRPr sz="'.concat(Math.round(100 * (e.opts.dataTableFontSize || 12)), '" b="0" i="0" u="none" strike="noStrike" kern="1200" baseline="0">'), i += '         <a:solidFill><a:schemeClr val="tx1"><a:lumMod val="65000"/><a:lumOff val="35000"/></a:schemeClr></a:solidFill>', i += '         <a:latin typeface="+mn-lt"/>', i += '         <a:ea typeface="+mn-ea"/>', i += '         <a:cs typeface="+mn-cs"/>', i += "       </a:defRPr>", i += "     </a:pPr>", i += '    <a:endParaRPr lang="en-US"/>', i += "   </a:p>", i += " </c:txPr>", i += "</c:dTable>");
                        i += "  <c:spPr>";
                        i += e.opts.plotArea.fill?.color ? ea(e.opts.plotArea.fill) : "<a:noFill/>";
                        i += e.opts.plotArea.border ? '<a:ln w="'.concat(K(e.opts.plotArea.border.pt), '" cap="flat">').concat(ea(e.opts.plotArea.border.color), "</a:ln>") : "<a:ln><a:noFill/></a:ln>";
                        i += "    <a:effectLst/>";
                        i += "  </c:spPr>";
                        i += "</c:plotArea>";
                        e.opts.showLegend && (i += "<c:legend>", i += '<c:legendPos val="' + e.opts.legendPos + '"/>', i += '<c:overlay val="0"/>', (e.opts.legendFontFace || e.opts.legendFontSize || e.opts.legendColor) && (i += "<c:txPr>", i += "  <a:bodyPr/>", i += "  <a:lstStyle/>", i += "  <a:p>", i += "    <a:pPr>", i += e.opts.legendFontSize ? '<a:defRPr sz="'.concat(Math.round(100 * Number(e.opts.legendFontSize)), '">') : "<a:defRPr>", e.opts.legendColor && (i += ea(e.opts.legendColor)), e.opts.legendFontFace && (i += '<a:latin typeface="' + e.opts.legendFontFace + '"/>'), e.opts.legendFontFace && (i += '<a:cs    typeface="' + e.opts.legendFontFace + '"/>'), i += "      </a:defRPr>", i += "    </a:pPr>", i += '    <a:endParaRPr lang="en-US"/>', i += "  </a:p>", i += "</c:txPr>"), i += "</c:legend>");
                        i += '  <c:plotVisOnly val="1"/>';
                        i += '  <c:dispBlanksAs val="' + e.opts.displayBlanksAs + '"/>';
                        e.opts._type === d.SCATTER && (i += '<c:showDLblsOverMax val="1"/>');
                        i += "</c:chart>";
                        i += "<c:spPr>";
                        i += e.opts.chartArea.fill?.color ? ea(e.opts.chartArea.fill) : "<a:noFill/>";
                        i += e.opts.chartArea.border ? '<a:ln w="'.concat(K(e.opts.chartArea.border.pt), '" cap="flat">').concat(ea(e.opts.chartArea.border.color), "</a:ln>") : "<a:ln><a:noFill/></a:ln>";
                        i += "  <a:effectLst/>";
                        i += "</c:spPr>";
                        i += '<c:externalData r:id="rId1"><c:autoUpdate val="0"/></c:externalData>';
                        return i += "</c:chartSpace>";
                      }(e));
                      r("");
                    }).catch(function(e) {
                      n(e);
                    });
                  })];
                case 1:
                  return [2, r.sent()];
              }
            });
          });
        }(e, t));
      });
      e._relsMedia.forEach(function(e) {
        if ("online" !== e.type && "hyperlink" !== e.type) {
          var a = e.data && "string" == typeof e.data ? e.data : "";
          (a.includes(",") || a.includes(";")) && a.includes(",") ? a.includes(";") || (a = "image/png;" + a) : a = "image/png;base64," + a;
          t.file(e.Target.replace("..", "ppt"), a.split(",").pop(), {
            base64: !0
          });
        }
      });
    };
    this.writeFileToBrowser = function(t, a) {
      return x(e, void 0, void 0, function() {
        var e;
        var r;
        return w(this, function(n) {
          switch (n.label) {
            case 0:
              if ((e = document.createElement("a")).setAttribute("style", "display:none;"), e.dataset.interception = "off", document.body.appendChild(e), !window.URL.createObjectURL) return [3, 2];
              r = window.URL.createObjectURL(new Blob([a], {
                type: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
              }));
              e.href = r;
              e.download = t;
              e.click();
              setTimeout(function() {
                window.URL.revokeObjectURL(r);
                document.body.removeChild(e);
              }, 100);
              return [4, Promise.resolve(t)];
            case 1:
              return [2, n.sent()];
            case 2:
              return [2];
          }
        });
      });
    };
    this.exportPresentation = function(t) {
      return x(e, void 0, void 0, function() {
        var e;
        var a;
        var r;
        var n = this;
        return w(this, function(o) {
          switch (o.label) {
            case 0:
              e = [];
              a = [];
              r = new (b())();
              this.slides.forEach(function(e) {
                a = a.concat(ew(e));
              });
              this.slideLayouts.forEach(function(e) {
                a = a.concat(ew(e));
              });
              return [4, Promise.all(a = a.concat(ew(this.masterSlide))).then(function() {
                return x(n, void 0, void 0, function() {
                  var a = this;
                  return w(this, function(n) {
                    switch (n.label) {
                      case 0:
                        var o;
                        var A;
                        var i;
                        var s;
                        var l;
                        var c;
                        var p;
                        var d;
                        var f;
                        var u;
                        var m;
                        var g;
                        var v;
                        var b;
                        var y;
                        var C;
                        var P;
                        var L;
                        var B;
                        var T;
                        this.slides.forEach(function(e) {
                          e._slideLayout && function(e) {
                            (e._slideLayout._slideObjects || []).forEach(function(t) {
                              t._type === h.placeholder && 0 === e._slideObjects.filter(function(e) {
                                return e.options && e.options.placeholder === t.options.placeholder;
                              }).length && ec(e, [{
                                text: ""
                              }], t.options, !1);
                            });
                          }(e);
                        });
                        r.folder("_rels");
                        r.folder("docProps");
                        r.folder("ppt").folder("_rels");
                        r.folder("ppt/charts").folder("_rels");
                        r.folder("ppt/embeddings");
                        r.folder("ppt/media");
                        r.folder("ppt/slideLayouts").folder("_rels");
                        r.folder("ppt/slideMasters").folder("_rels");
                        r.folder("ppt/slides").folder("_rels");
                        r.folder("ppt/theme");
                        r.folder("ppt/notesMasters").folder("_rels");
                        r.folder("ppt/notesSlides").folder("_rels");
                        r.file("[Content_Types].xml", (o = this.slides, A = this.slideLayouts, i = this.masterSlide, s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="jpeg" ContentType="image/jpeg"/><Default Extension="jpg" ContentType="image/jpg"/><Default Extension="svg" ContentType="image/svg+xml"/><Default Extension="png" ContentType="image/png"/><Default Extension="gif" ContentType="image/gif"/><Default Extension="m4v" ContentType="video/mp4"/><Default Extension="mp4" ContentType="video/mp4"/>', o.forEach(function(e) {
                          (e._relsMedia || []).forEach(function(e) {
                            "image" === e.type || "online" === e.type || "chart" === e.type || "m4v" === e.extn || s.includes(e.type) || (s += '<Default Extension="' + e.extn + '" ContentType="' + e.type + '"/>');
                          });
                        }), s += '<Default Extension="vml" ContentType="application/vnd.openxmlformats-officedocument.vmlDrawing"/>', s += '<Default Extension="xlsx" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>', s += '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>', s += '<Override PartName="/ppt/notesMasters/notesMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml"/>', o.forEach(function(e, t) {
                          s += '<Override PartName="/ppt/slideMasters/slideMaster'.concat(t + 1, '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>');
                          s += '<Override PartName="/ppt/slides/slide'.concat(t + 1, '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>');
                          e._relsChart.forEach(function(e) {
                            s += '<Override PartName="'.concat(e.Target, '" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>');
                          });
                        }), s += '<Override PartName="/ppt/presProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml"/>', s += '<Override PartName="/ppt/viewProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml"/>', s += '<Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>', s += '<Override PartName="/ppt/tableStyles.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml"/>', A.forEach(function(e, t) {
                          s += '<Override PartName="/ppt/slideLayouts/slideLayout'.concat(t + 1, '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>');
                          (e._relsChart || []).forEach(function(e) {
                            s += ' <Override PartName="' + e.Target + '" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>';
                          });
                        }), o.forEach(function(e, t) {
                          s += '<Override PartName="/ppt/notesSlides/notesSlide'.concat(t + 1, '.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml"/>');
                        }), i._relsChart.forEach(function(e) {
                          s += ' <Override PartName="' + e.Target + '" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>';
                        }), i._relsMedia.forEach(function(e) {
                          "image" === e.type || "online" === e.type || "chart" === e.type || "m4v" === e.extn || s.includes(e.type) || (s += ' <Default Extension="' + e.extn + '" ContentType="' + e.type + '"/>');
                        }), s += ' <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>', s += ' <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>', s += "</Types>"));
                        r.file("_rels/.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n		<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>\n		<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>\n		<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>\n		</Relationships>'));
                        r.file("docProps/app.xml", (l = this.slides, c = this.company, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">\n	<TotalTime>0</TotalTime>\n	<Words>0</Words>\n	<Application>Microsoft Office PowerPoint</Application>\n	<PresentationFormat>On-screen Show (16:9)</PresentationFormat>\n	<Paragraphs>0</Paragraphs>\n	<Slides>').concat(l.length, "</Slides>\n	<Notes>").concat(l.length, '</Notes>\n	<HiddenSlides>0</HiddenSlides>\n	<MMClips>0</MMClips>\n	<ScaleCrop>false</ScaleCrop>\n	<HeadingPairs>\n		<vt:vector size="6" baseType="variant">\n			<vt:variant><vt:lpstr>Fonts Used</vt:lpstr></vt:variant>\n			<vt:variant><vt:i4>2</vt:i4></vt:variant>\n			<vt:variant><vt:lpstr>Theme</vt:lpstr></vt:variant>\n			<vt:variant><vt:i4>1</vt:i4></vt:variant>\n			<vt:variant><vt:lpstr>Slide Titles</vt:lpstr></vt:variant>\n			<vt:variant><vt:i4>').concat(l.length, '</vt:i4></vt:variant>\n		</vt:vector>\n	</HeadingPairs>\n	<TitlesOfParts>\n		<vt:vector size="').concat(l.length + 1 + 2, '" baseType="lpstr">\n			<vt:lpstr>Arial</vt:lpstr>\n			<vt:lpstr>Calibri</vt:lpstr>\n			<vt:lpstr>Office Theme</vt:lpstr>\n			').concat(l.map(function(e, t) {
                          return "<vt:lpstr>Slide ".concat(t + 1, "</vt:lpstr>");
                        }).join(""), "\n		</vt:vector>\n	</TitlesOfParts>\n	<Company>").concat(c, "</Company>\n	<LinksUpToDate>false</LinksUpToDate>\n	<SharedDoc>false</SharedDoc>\n	<HyperlinksChanged>false</HyperlinksChanged>\n	<AppVersion>16.0000</AppVersion>\n	</Properties>")));
                        r.file("docProps/core.xml", (p = this.title, d = this.subject, f = this.author, u = this.revision, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n	<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n		<dc:title>'.concat(q(p), "</dc:title>\n		<dc:subject>").concat(q(d), "</dc:subject>\n		<dc:creator>").concat(q(f), "</dc:creator>\n		<cp:lastModifiedBy>").concat(q(f), "</cp:lastModifiedBy>\n		<cp:revision>").concat(u, '</cp:revision>\n		<dcterms:created xsi:type="dcterms:W3CDTF">').concat(new Date().toISOString().replace(/\.\d\d\dZ/, "Z"), '</dcterms:created>\n		<dcterms:modified xsi:type="dcterms:W3CDTF">').concat(new Date().toISOString().replace(/\.\d\d\dZ/, "Z"), "</dcterms:modified>\n	</cp:coreProperties>")));
                        r.file("ppt/_rels/presentation.xml.rels", function(e) {
                          var t = 1;
                          var a = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
                          a += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
                          a += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>';
                          for (var r = 1; r <= e.length; r++) a += '<Relationship Id="rId'.concat(++t, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide').concat(r, '.xml"/>');
                          t++;
                          return a += '<Relationship Id="rId'.concat(t + 0, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="notesMasters/notesMaster1.xml"/>') + '<Relationship Id="rId'.concat(t + 1, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps" Target="presProps.xml"/>') + '<Relationship Id="rId'.concat(t + 2, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps" Target="viewProps.xml"/>') + '<Relationship Id="rId'.concat(t + 3, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>') + '<Relationship Id="rId'.concat(t + 4, '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles" Target="tableStyles.xml"/>') + "</Relationships>";
                        }(this.slides));
                        r.file("ppt/theme/theme1.xml", (y = this.theme?.headFontFace ? '<a:latin typeface="'.concat(this.theme?.headFontFace, '"/>') : '<a:latin typeface="Calibri Light" panose="020F0302020204030204"/>', C = this.theme?.bodyFontFace ? '<a:latin typeface="'.concat(this.theme?.bodyFontFace, '"/>') : '<a:latin typeface="Calibri" panose="020F0502020204030204"/>', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="4472C4"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="5B9BD5"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont>'.concat(y, '<a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="\u6E38\u30B4\u30B7\u30C3\u30AF Light"/><a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/><a:font script="Hans" typeface="\u7B49\u7EBF Light"/><a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Angsana New"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:majorFont><a:minorFont>').concat(C, '<a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="\u6E38\u30B4\u30B7\u30C3\u30AF"/><a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/><a:font script="Hans" typeface="\u7B49\u7EBF"/><a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Cordia New"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>')));
                        r.file("ppt/presentation.xml", function(e) {
                          var t = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n") + '<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' + 'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" '.concat(e.rtlMode ? 'rtl="1"' : "", ' saveSubsetFonts="1" autoCompressPictures="0">');
                          t += '<p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>';
                          t += "<p:sldIdLst>";
                          e.slides.forEach(function(e) {
                            return t += '<p:sldId id="'.concat(e._slideId, '" r:id="rId').concat(e._rId, '"/>');
                          });
                          t += "</p:sldIdLst>";
                          t += '<p:notesMasterIdLst><p:notesMasterId r:id="rId'.concat(e.slides.length + 2, '"/></p:notesMasterIdLst>');
                          t += '<p:sldSz cx="'.concat(e.presLayout.width, '" cy="').concat(e.presLayout.height, '"/>');
                          t += '<p:notesSz cx="'.concat(e.presLayout.height, '" cy="').concat(e.presLayout.width, '"/>');
                          t += "<p:defaultTextStyle>";
                          for (var a = 1; a < 10; a++) t += "<a:lvl".concat(a, 'pPr marL="').concat((a - 1) * 457200, '" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">') + '<a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/>' + "</a:defRPr></a:lvl".concat(a, "pPr>");
                          t += "</p:defaultTextStyle>";
                          e.sections && e.sections.length > 0 && (t += '<p:extLst><p:ext uri="{521415D9-36F7-43E2-AB2F-B90AF26B5E84}">', t += '<p14:sectionLst xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main">', e.sections.forEach(function(e) {
                            t += '<p14:section name="'.concat(q(e.title), '" id="{').concat(V("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"), '}"><p14:sldIdLst>');
                            e._slides.forEach(function(e) {
                              return t += '<p14:sldId id="'.concat(e._slideId, '"/>');
                            });
                            t += "</p14:sldIdLst></p14:section>";
                          }), t += "</p14:sectionLst></p:ext>", t += '<p:ext uri="{EFAFB233-063F-42B5-8137-9DF3F51BA10A}"><p15:sldGuideLst xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main"/></p:ext>', t += "</p:extLst>");
                          return t += "</p:presentation>";
                        }(this));
                        r.file("ppt/presProps.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<p:presentationPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"/>'));
                        r.file("ppt/tableStyles.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<a:tblStyleLst xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" def="{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}"/>'));
                        r.file("ppt/viewProps.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<p:viewPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:normalViewPr horzBarState="maximized"><p:restoredLeft sz="15611"/><p:restoredTop sz="94610"/></p:normalViewPr><p:slideViewPr><p:cSldViewPr snapToGrid="0" snapToObjects="1"><p:cViewPr varScale="1"><p:scale><a:sx n="136" d="100"/><a:sy n="136" d="100"/></p:scale><p:origin x="216" y="312"/></p:cViewPr><p:guideLst/></p:cSldViewPr></p:slideViewPr><p:notesTextViewPr><p:cViewPr><p:scale><a:sx n="1" d="1"/><a:sy n="1" d="1"/></p:scale><p:origin x="0" y="0"/></p:cViewPr></p:notesTextViewPr><p:gridSpacing cx="76200" cy="76200"/></p:viewPr>'));
                        this.slideLayouts.forEach(function(e, t) {
                          var n;
                          r.file("ppt/slideLayouts/slideLayout".concat(t + 1, ".xml"), '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n		<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" preserve="1">\n		'.concat(eL(e), "\n		<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>"));
                          r.file("ppt/slideLayouts/_rels/slideLayout".concat(t + 1, ".xml.rels"), (n = t + 1, eB(a.slideLayouts[n - 1], [{
                            target: "../slideMasters/slideMaster1.xml",
                            type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster"
                          }])));
                        });
                        this.slides.forEach(function(e, t) {
                          var n;
                          var o;
                          var A;
                          var i;
                          var s;
                          r.file("ppt/slides/slide".concat(t + 1, ".xml"), '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n") + '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"' + "".concat(e?.hidden ? ' show="0"' : "", ">") + "".concat(eL(e)) + "<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>");
                          r.file("ppt/slides/_rels/slide".concat(t + 1, ".xml.rels"), (n = a.slides, o = a.slideLayouts, eB(n[(A = t + 1) - 1], [{
                            target: "../slideLayouts/slideLayout".concat(function(e, t, a) {
                              for (var r = 0; r < t.length; r++) if (t[r]._name === e[a - 1]._slideLayout._name) return r + 1;
                              return 1;
                            }(n, o, A), ".xml"),
                            type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout"
                          }, {
                            target: "../notesSlides/notesSlide".concat(A, ".xml"),
                            type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide"
                          }])));
                          r.file("ppt/notesSlides/notesSlide".concat(t + 1, ".xml"), '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<p:notes xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr><p:sp><p:nvSpPr><p:cNvPr id="2" name="Slide Image Placeholder 1"/><p:cNvSpPr><a:spLocks noGrp="1" noRot="1" noChangeAspect="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldImg"/></p:nvPr></p:nvSpPr><p:spPr/></p:sp><p:sp><p:nvSpPr><p:cNvPr id="3" name="Notes Placeholder 2"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="body" idx="1"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:r><a:rPr lang="en-US" dirty="0"/><a:t>').concat(q((s = "", e._slideObjects.forEach(function(e) {
                            e._type === h.notes && (s += e?.text && e.text[0] ? e.text[0].text : "");
                          }), s.replace(/\r*\n/g, "\r\n"))), '</a:t></a:r><a:endParaRPr lang="en-US" dirty="0"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="4" name="Slide Number Placeholder 3"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldNum" sz="quarter" idx="10"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:fld id="').concat(W, '" type="slidenum"><a:rPr lang="en-US"/><a:t>').concat(e._slideNum, '</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp></p:spTree><p:extLst><p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}"><p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1024086991"/></p:ext></p:extLst></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:notes>'));
                          r.file("ppt/notesSlides/_rels/notesSlide".concat(t + 1, ".xml.rels"), (i = t + 1, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n		<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n			<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="../notesMasters/notesMaster1.xml"/>\n			<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="../slides/slide'.concat(i, '.xml"/>\n		</Relationships>')));
                        });
                        r.file("ppt/slideMasters/slideMaster1.xml", (P = this.masterSlide, L = this.slideLayouts.map(function(e, t) {
                          return '<p:sldLayoutId id="'.concat(0x80000001 + t, '" r:id="rId').concat(P._rels.length + t + 1, '"/>');
                        }), '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">' + eL(P) + '<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:sldLayoutIdLst>' + L.join("") + '</p:sldLayoutIdLst><p:hf sldNum="0" hdr="0" ftr="0" dt="0"/><p:txStyles> <p:titleStyle>  <a:lvl1pPr algn="ctr" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="0"/></a:spcBef><a:buNone/><a:defRPr sz="4400" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mj-lt"/><a:ea typeface="+mj-ea"/><a:cs typeface="+mj-cs"/></a:defRPr></a:lvl1pPr> </p:titleStyle> <p:bodyStyle>  <a:lvl1pPr marL="342900" indent="-342900" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2022"/><a:defRPr sz="3200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl1pPr>  <a:lvl2pPr marL="742950" indent="-285750" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2013"/><a:defRPr sz="2800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl2pPr>  <a:lvl3pPr marL="1143000" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2022"/><a:defRPr sz="2400" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl3pPr>  <a:lvl4pPr marL="1600200" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2013"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl4pPr>  <a:lvl5pPr marL="2057400" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\xbb"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl5pPr>  <a:lvl6pPr marL="2514600" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2022"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl6pPr>  <a:lvl7pPr marL="2971800" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2022"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl7pPr>  <a:lvl8pPr marL="3429000" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2022"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl8pPr>  <a:lvl9pPr marL="3886200" indent="-228600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:spcBef><a:spcPct val="20000"/></a:spcBef><a:buFont typeface="Arial" pitchFamily="34" charset="0"/><a:buChar char="\u2022"/><a:defRPr sz="2000" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl9pPr> </p:bodyStyle> <p:otherStyle>  <a:defPPr><a:defRPr lang="en-US"/></a:defPPr>  <a:lvl1pPr marL="0" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl1pPr>  <a:lvl2pPr marL="457200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl2pPr>  <a:lvl3pPr marL="914400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl3pPr>  <a:lvl4pPr marL="1371600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl4pPr>  <a:lvl5pPr marL="1828800" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl5pPr>  <a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl6pPr>  <a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl7pPr>  <a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl8pPr>  <a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1800" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl9pPr> </p:otherStyle></p:txStyles></p:sldMaster>'));
                        r.file("ppt/slideMasters/_rels/slideMaster1.xml.rels", (B = this.masterSlide, (T = this.slideLayouts.map(function(e, t) {
                          return {
                            target: "../slideLayouts/slideLayout".concat(t + 1, ".xml"),
                            type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout"
                          };
                        })).push({
                          target: "../theme/theme1.xml",
                          type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
                        }), eB(B, T)));
                        r.file("ppt/notesMasters/notesMaster1.xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<p:notesMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:bg><p:bgRef idx="1001"><a:schemeClr val="bg1"/></p:bgRef></p:bg><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr><p:sp><p:nvSpPr><p:cNvPr id="2" name="Header Placeholder 1"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="hdr" sz="quarter"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="2971800" cy="458788"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0"/><a:lstStyle><a:lvl1pPr algn="l"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="3" name="Date Placeholder 2"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="dt" idx="1"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="3884613" y="0"/><a:ext cx="2971800" cy="458788"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0"/><a:lstStyle><a:lvl1pPr algn="r"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:fld id="{5282F153-3F37-0F45-9E97-73ACFA13230C}" type="datetimeFigureOut"><a:rPr lang="en-US"/><a:t>7/23/19</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="4" name="Slide Image Placeholder 3"/><p:cNvSpPr><a:spLocks noGrp="1" noRot="1" noChangeAspect="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldImg" idx="2"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="685800" y="1143000"/><a:ext cx="5486400" cy="3086100"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln w="12700"><a:solidFill><a:prstClr val="black"/></a:solidFill></a:ln></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr"/><a:lstStyle/><a:p><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="5" name="Notes Placeholder 4"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="body" sz="quarter" idx="3"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="685800" y="4400550"/><a:ext cx="5486400" cy="3600450"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0"/><a:lstStyle/><a:p><a:pPr lvl="0"/><a:r><a:rPr lang="en-US"/><a:t>Click to edit Master text styles</a:t></a:r></a:p><a:p><a:pPr lvl="1"/><a:r><a:rPr lang="en-US"/><a:t>Second level</a:t></a:r></a:p><a:p><a:pPr lvl="2"/><a:r><a:rPr lang="en-US"/><a:t>Third level</a:t></a:r></a:p><a:p><a:pPr lvl="3"/><a:r><a:rPr lang="en-US"/><a:t>Fourth level</a:t></a:r></a:p><a:p><a:pPr lvl="4"/><a:r><a:rPr lang="en-US"/><a:t>Fifth level</a:t></a:r></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="6" name="Footer Placeholder 5"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="ftr" sz="quarter" idx="4"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="0" y="8685213"/><a:ext cx="2971800" cy="458787"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="b"/><a:lstStyle><a:lvl1pPr algn="l"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="7" name="Slide Number Placeholder 6"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="sldNum" sz="quarter" idx="5"/></p:nvPr></p:nvSpPr><p:spPr><a:xfrm><a:off x="3884613" y="8685213"/><a:ext cx="2971800" cy="458787"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="b"/><a:lstStyle><a:lvl1pPr algn="r"><a:defRPr sz="1200"/></a:lvl1pPr></a:lstStyle><a:p><a:fld id="{CE5E9CC1-C706-0F49-92D6-E571CC5EEA8F}" type="slidenum"><a:rPr lang="en-US"/><a:t>\u2039#\u203A</a:t></a:fld><a:endParaRPr lang="en-US"/></a:p></p:txBody></p:sp></p:spTree><p:extLst><p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}"><p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1024086991"/></p:ext></p:extLst></p:cSld><p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:notesStyle><a:lvl1pPr marL="0" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl1pPr><a:lvl2pPr marL="457200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl2pPr><a:lvl3pPr marL="914400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl3pPr><a:lvl4pPr marL="1371600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl4pPr><a:lvl5pPr marL="1828800" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl5pPr><a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl6pPr><a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl7pPr><a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl8pPr><a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1"><a:defRPr sz="1200" kern="1200"><a:solidFill><a:schemeClr val="tx1"/></a:solidFill><a:latin typeface="+mn-lt"/><a:ea typeface="+mn-ea"/><a:cs typeface="+mn-cs"/></a:defRPr></a:lvl9pPr></p:notesStyle></p:notesMaster>'));
                        r.file("ppt/notesMasters/_rels/notesMaster1.xml.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.concat("\r\n", '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n		<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>\n		</Relationships>'));
                        this.slideLayouts.forEach(function(t) {
                          a.createChartMediaRels(t, r, e);
                        });
                        this.slides.forEach(function(t) {
                          a.createChartMediaRels(t, r, e);
                        });
                        this.createChartMediaRels(this.masterSlide, r, e);
                        return [4, Promise.all(e).then(function() {
                          return x(a, void 0, void 0, function() {
                            return w(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  if ("STREAM" !== t.outputType) return [3, 2];
                                  return [4, r.generateAsync({
                                    type: "nodebuffer",
                                    compression: t.compression ? "DEFLATE" : "STORE"
                                  })];
                                case 1:
                                case 3:
                                case 5:
                                  return [2, e.sent()];
                                case 2:
                                  if (!t.outputType) return [3, 4];
                                  return [4, r.generateAsync({
                                    type: t.outputType
                                  })];
                                case 4:
                                  return [4, r.generateAsync({
                                    type: "blob",
                                    compression: t.compression ? "DEFLATE" : "STORE"
                                  })];
                              }
                            });
                          });
                        })];
                      case 1:
                        return [2, n.sent()];
                    }
                  });
                });
              })];
            case 1:
              return [2, o.sent()];
          }
        });
      });
    };
    this.LAYOUTS = {
      LAYOUT_4x3: {
        name: "screen4x3",
        width: 9144e3,
        height: 6858e3
      },
      LAYOUT_16x9: {
        name: "screen16x9",
        width: 9144e3,
        height: 5143500
      },
      LAYOUT_16x10: {
        name: "screen16x10",
        width: 9144e3,
        height: 5715e3
      },
      LAYOUT_WIDE: {
        name: "custom",
        width: 12192e3,
        height: 6858e3
      }
    };
    this._author = "PptxGenJS";
    this._company = "PptxGenJS";
    this._revision = "1";
    this._subject = "PptxGenJS Presentation";
    this._title = "PptxGenJS Presentation";
    this._presLayout = {
      name: this.LAYOUTS[D].name,
      _sizeW: this.LAYOUTS[D].width,
      _sizeH: this.LAYOUTS[D].height,
      width: this.LAYOUTS[D].width,
      height: this.LAYOUTS[D].height
    };
    this._rtlMode = !1;
    this._slideLayouts = [{
      _margin: _,
      _name: k,
      _presLayout: this._presLayout,
      _rels: [],
      _relsChart: [],
      _relsMedia: [],
      _slide: null,
      _slideNum: 1e3,
      _slideNumberProps: null,
      _slideObjects: []
    }];
    this._slides = [];
    this._sections = [];
    this._masterSlide = {
      addChart: null,
      addImage: null,
      addMedia: null,
      addNotes: null,
      addShape: null,
      addTable: null,
      addText: null,
      _name: null,
      _presLayout: this._presLayout,
      _rId: null,
      _rels: [],
      _relsChart: [],
      _relsMedia: [],
      _slideId: null,
      _slideLayout: null,
      _slideNum: null,
      _slideNumberProps: null,
      _slideObjects: []
    };
  }
  Object.defineProperty(e.prototype, "layout", {
    get: function() {
      return this._layout;
    },
    set: function(e) {
      var t = this.LAYOUTS[e];
      if (t) {
        this._layout = e;
        this._presLayout = t;
      } else throw Error("UNKNOWN-LAYOUT");
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "version", {
    get: function() {
      return this._version;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "author", {
    get: function() {
      return this._author;
    },
    set: function(e) {
      this._author = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "company", {
    get: function() {
      return this._company;
    },
    set: function(e) {
      this._company = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "revision", {
    get: function() {
      return this._revision;
    },
    set: function(e) {
      this._revision = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "subject", {
    get: function() {
      return this._subject;
    },
    set: function(e) {
      this._subject = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "theme", {
    get: function() {
      return this._theme;
    },
    set: function(e) {
      this._theme = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "title", {
    get: function() {
      return this._title;
    },
    set: function(e) {
      this._title = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "rtlMode", {
    get: function() {
      return this._rtlMode;
    },
    set: function(e) {
      this._rtlMode = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "masterSlide", {
    get: function() {
      return this._masterSlide;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "slides", {
    get: function() {
      return this._slides;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "sections", {
    get: function() {
      return this._sections;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "slideLayouts", {
    get: function() {
      return this._slideLayouts;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "AlignH", {
    get: function() {
      return this._alignH;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "AlignV", {
    get: function() {
      return this._alignV;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "ChartType", {
    get: function() {
      return this._chartType;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "OutputType", {
    get: function() {
      return this._outputType;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "presLayout", {
    get: function() {
      return this._presLayout;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "SchemeColor", {
    get: function() {
      return this._schemeColor;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "ShapeType", {
    get: function() {
      return this._shapeType;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "charts", {
    get: function() {
      return this._charts;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "colors", {
    get: function() {
      return this._colors;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "shapes", {
    get: function() {
      return this._shapes;
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.stream = function(e) {
    return x(this, void 0, void 0, function() {
      return w(this, function(t) {
        switch (t.label) {
          case 0:
            return [4, this.exportPresentation({
              compression: e?.compression,
              outputType: "STREAM"
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  };
  e.prototype.write = function(e) {
    return x(this, void 0, void 0, function() {
      var t;
      var a;
      return w(this, function(r) {
        switch (r.label) {
          case 0:
            t = "object" == typeof e && e?.outputType ? e.outputType : e || null;
            a = "object" == typeof e && null != e && !!e.compression && e.compression;
            return [4, this.exportPresentation({
              compression: a,
              outputType: t
            })];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  };
  e.prototype.writeFile = function(e) {
    return x(this, void 0, void 0, function() {
      var t;
      var r;
      var n;
      var o;
      var A = this;
      return w(this, function(i) {
        switch (i.label) {
          case 0:
            t = "undefined" == typeof window ? _require3 : null;
            "string" == typeof e && console.log("Warning: `writeFile(filename)` is deprecated - please use `WriteFileProps` argument (v3.5.0)");
            r = "object" == typeof e && e?.fileName ? e.fileName : "string" == typeof e ? e : "";
            n = "object" == typeof e && null != e && !!e.compression && e.compression;
            o = r ? r.toString().toLowerCase().endsWith(".pptx") ? r : r + ".pptx" : "Presentation.pptx";
            return [4, this.exportPresentation({
              compression: n,
              outputType: t ? "nodebuffer" : null
            }).then(function(e) {
              return x(A, void 0, void 0, function() {
                return w(this, function(a) {
                  switch (a.label) {
                    case 0:
                      if (!t) return [3, 2];
                      return [4, new Promise(function(a, r) {
                        t.writeFile(o, e, function(e) {
                          e ? r(e) : a(o);
                        });
                      })];
                    case 1:
                    case 3:
                      return [2, a.sent()];
                    case 2:
                      return [4, this.writeFileToBrowser(o, e)];
                  }
                });
              });
            })];
          case 1:
            return [2, i.sent()];
        }
      });
    });
  };
  e.prototype.addSection = function(e) {
    e ? e.title || console.warn("addSection requires a title") : console.warn("addSection requires an argument");
    var t = {
      _type: "user",
      _slides: [],
      title: e.title
    };
    e.order ? this.sections.splice(e.order, 0, t) : this._sections.push(t);
  };
  e.prototype.addSlide = function(e) {
    var t = "string" == typeof e ? e : e?.masterName ? e.masterName : "";
    var a = {
      _name: this.LAYOUTS[D].name,
      _presLayout: this.presLayout,
      _rels: [],
      _relsChart: [],
      _relsMedia: [],
      _slideNum: this.slides.length + 1
    };
    if (t) {
      var r = this.slideLayouts.filter(function(e) {
        return e._name === t;
      })[0];
      r && (a = r);
    }
    var n = new ef({
      addSlide: this.addNewSlide,
      getSlide: this.getSlide,
      presLayout: this.presLayout,
      setSlideNum: this.setSlideNumber,
      slideId: this.slides.length + 256,
      slideRId: this.slides.length + 2,
      slideNumber: this.slides.length + 1,
      slideLayout: a
    });
    if (this._slides.push(n), e?.sectionTitle) {
      var o = this.sections.filter(function(t) {
        return t.title === e.sectionTitle;
      })[0];
      o ? o._slides.push(n) : console.warn('addSlide: unable to find section with title: "'.concat(e.sectionTitle, '"'));
    } else if (this.sections && this.sections.length > 0 && !e?.sectionTitle) {
      var A = this._sections[this.sections.length - 1];
      "default" === A._type ? A._slides.push(n) : this._sections.push({
        title: "Default-".concat(this.sections.filter(function(e) {
          return "default" === e._type;
        }).length + 1),
        _type: "default",
        _slides: [n]
      });
    }
    return n;
  };
  e.prototype.defineLayout = function(e) {
    e ? e.name ? e.width ? e.height ? "number" != typeof e.height ? console.warn("defineLayout `height` should be a number (inches)") : "number" != typeof e.width && console.warn("defineLayout `width` should be a number (inches)") : console.warn("defineLayout requires `height`") : console.warn("defineLayout requires `width`") : console.warn("defineLayout requires `name`") : console.warn("defineLayout requires `{name, width, height}`");
    this.LAYOUTS[e.name] = {
      name: e.name,
      _sizeW: Math.round(914400 * Number(e.width)),
      _sizeH: Math.round(914400 * Number(e.height)),
      width: Math.round(914400 * Number(e.width)),
      height: Math.round(914400 * Number(e.height))
    };
  };
  e.prototype.defineSlideMaster = function(e) {
    if (!e.title) throw Error("defineSlideMaster() object argument requires a `title` value. (https://gitbrent.github.io/PptxGenJS/docs/masters.html)");
    var t = {
      _margin: e.margin || _,
      _name: e.title,
      _presLayout: this.presLayout,
      _rels: [],
      _relsChart: [],
      _relsMedia: [],
      _slide: null,
      _slideNum: 1e3 + this.slideLayouts.length + 1,
      _slideNumberProps: e.slideNumber || null,
      _slideObjects: [],
      background: e.background || null,
      bkgd: e.bkgd || null
    };
    e.bkgd && (t.bkgd = e.bkgd);
    e.objects && Array.isArray(e.objects) && e.objects.length > 0 && e.objects.forEach(function(e, a) {
      var r = Object.keys(e)[0];
      u[r] && "chart" === r ? ei(t, e[r].type, e[r].data, e[r].opts) : u[r] && "image" === r ? es(t, e[r]) : u[r] && "line" === r ? el(t, p.LINE, e[r]) : u[r] && "rect" === r ? el(t, p.RECTANGLE, e[r]) : u[r] && "text" === r ? ec(t, [{
        text: e[r].text
      }], e[r].options, !1) : u[r] && "placeholder" === r && (e[r].options.placeholder = e[r].options.name, delete e[r].options.name, e[r].options._placeholderType = e[r].options.type, delete e[r].options.type, e[r].options._placeholderIdx = 100 + a, ec(t, [{
        text: e[r].text
      }], e[r].options, !0));
    });
    e.slideNumber && "object" == typeof e.slideNumber && (t._slideNumberProps = e.slideNumber);
    this.slideLayouts.push(t);
    (e.background || e.bkgd) && ep(e.background, t);
    t._slideNumberProps && !this.masterSlide._slideNumberProps && (this.masterSlide._slideNumberProps = t._slideNumberProps);
  };
  e.prototype.tableToSlides = function(e, t) {
    void 0 === t && (t = {});
    (function(e, t, a, r) {
      void 0 === a && (a = {});
      var n = a || {};
      n.slideMargin = n.slideMargin || 0 === n.slideMargin ? n.slideMargin : .5;
      var o = n.w || e.presLayout.width;
      var A = [];
      var i = [];
      var s = [];
      var l = [];
      var c = [];
      var p = [.5, .5, .5, .5];
      var d = 0;
      if (!document.getElementById(t)) throw Error('tableToSlides: Table ID "' + t + '" does not exist!');
      r?._margin ? (Array.isArray(r._margin) ? p = r._margin : isNaN(r._margin) || (p = [r._margin, r._margin, r._margin, r._margin]), n.slideMargin = p) : n?.slideMargin && (Array.isArray(n.slideMargin) ? p = n.slideMargin : isNaN(n.slideMargin) || (p = [n.slideMargin, n.slideMargin, n.slideMargin, n.slideMargin]));
      o = (n.w ? J(n.w) : e.presLayout.width) - J(p[1] + p[3]);
      n.verbose && (console.log("[[VERBOSE MODE]]"), console.log("|-- `tableToSlides` ----------------------------------------------------|"), console.log("| tableProps.h .................................... = ".concat(n.h)), console.log("| tableProps.w .................................... = ".concat(n.w)), console.log("| pptx.presLayout.width ........................... = ".concat((e.presLayout.width / 914400).toFixed(1))), console.log("| pptx.presLayout.height .......................... = ".concat((e.presLayout.height / 914400).toFixed(1))), console.log("| emuSlideTabW .................................... = ".concat((o / 914400).toFixed(1))));
      var f = document.querySelectorAll("#".concat(t, " tr:first-child th"));
      0 === f.length && (f = document.querySelectorAll("#".concat(t, " tr:first-child td")));
      f.forEach(function(e) {
        if (e.getAttribute("colspan")) for (var t = 0; t < Number(e.getAttribute("colspan")); t++) c.push(Math.round(e.offsetWidth / Number(e.getAttribute("colspan")))); else c.push(e.offsetWidth);
      });
      c.forEach(function(e) {
        d += e;
      });
      c.forEach(function(e, a) {
        var r = Number((Number(o) * (e / d * 100) / 100 / 914400).toFixed(2));
        var n = 0;
        var A = document.querySelector("#".concat(t, " thead tr:first-child th:nth-child(").concat(a + 1, ")"));
        A && (n = Number(A.getAttribute("data-pptx-min-width")));
        var i = document.querySelector("#".concat(t, " thead tr:first-child th:nth-child(").concat(a + 1, ")"));
        i && (n = Number(i.getAttribute("data-pptx-width")));
        l.push(n > r ? n : r);
      });
      n.verbose && console.log("| arrColW ......................................... = [".concat(l.join(", "), "]"));
      ["thead", "tbody", "tfoot"].forEach(function(e) {
        document.querySelectorAll("#".concat(t, " ").concat(e, " tr")).forEach(function(t) {
          var a = [];
          switch (Array.from(t.cells).forEach(function(e) {
            var t = window.getComputedStyle(e).getPropertyValue("color").replace(/\s+/gi, "").replace("rgba(", "").replace("rgb(", "").replace(")", "").split(",");
            var r = window.getComputedStyle(e).getPropertyValue("background-color").replace(/\s+/gi, "").replace("rgba(", "").replace("rgb(", "").replace(")", "").split(",");
            ("rgba(0, 0, 0, 0)" === window.getComputedStyle(e).getPropertyValue("background-color") || window.getComputedStyle(e).getPropertyValue("transparent")) && (r = ["255", "255", "255"]);
            var n = {
              align: null,
              bold: !!("bold" === window.getComputedStyle(e).getPropertyValue("font-weight") || Number(window.getComputedStyle(e).getPropertyValue("font-weight")) >= 500),
              border: null,
              color: ee(Number(t[0]), Number(t[1]), Number(t[2])),
              fill: {
                color: ee(Number(r[0]), Number(r[1]), Number(r[2]))
              },
              fontFace: (window.getComputedStyle(e).getPropertyValue("font-family") || "").split(",")[0].replace(/"/g, "").replace("inherit", "").replace("initial", "") || null,
              fontSize: Number(window.getComputedStyle(e).getPropertyValue("font-size").replace(/[a-z]/gi, "")),
              margin: null,
              colspan: Number(e.getAttribute("colspan")) || null,
              rowspan: Number(e.getAttribute("rowspan")) || null,
              valign: null
            };
            if (["left", "center", "right", "start", "end"].includes(window.getComputedStyle(e).getPropertyValue("text-align"))) {
              var o = window.getComputedStyle(e).getPropertyValue("text-align").replace("start", "left").replace("end", "right");
              n.align = "center" === o ? "center" : "left" === o ? "left" : "right" === o ? "right" : null;
            }
            if (["top", "middle", "bottom"].includes(window.getComputedStyle(e).getPropertyValue("vertical-align"))) {
              var A = window.getComputedStyle(e).getPropertyValue("vertical-align");
              n.valign = "top" === A ? "top" : "middle" === A ? "middle" : "bottom" === A ? "bottom" : null;
            }
            window.getComputedStyle(e).getPropertyValue("padding-left") && (n.margin = [0, 0, 0, 0], ["padding-top", "padding-right", "padding-bottom", "padding-left"].forEach(function(t, a) {
              n.margin[a] = Math.round(Number(window.getComputedStyle(e).getPropertyValue(t).replace(/\D/gi, "")));
            }));
            (window.getComputedStyle(e).getPropertyValue("border-top-width") || window.getComputedStyle(e).getPropertyValue("border-right-width") || window.getComputedStyle(e).getPropertyValue("border-bottom-width") || window.getComputedStyle(e).getPropertyValue("border-left-width")) && (n.border = [null, null, null, null], ["top", "right", "bottom", "left"].forEach(function(t, a) {
              var r = Math.round(Number(window.getComputedStyle(e).getPropertyValue("border-" + t + "-width").replace("px", "")));
              var o = [];
              var A = ee(Number((o = window.getComputedStyle(e).getPropertyValue("border-" + t + "-color").replace(/\s+/gi, "").replace("rgba(", "").replace("rgb(", "").replace(")", "").split(","))[0]), Number(o[1]), Number(o[2]));
              n.border[a] = {
                pt: r,
                color: A
              };
            }));
            a.push({
              _type: h.tablecell,
              text: e.innerText,
              options: n
            });
          }), e) {
            case "thead":
              A.push(a);
              break;
            case "tbody":
              i.push(a);
              break;
            case "tfoot":
              s.push(a);
              break;
            default:
              console.log("table parsing: unexpected table part: ".concat(e));
          }
        });
      });
      n._arrObjTabHeadRows = A || null;
      n.colW = l;
      eo(C(C(C([], A, !0), i, !0), s, !0), n, e.presLayout, r).forEach(function(t, a) {
        var r = e.addSlide({
          masterName: n.masterSlideName || null
        });
        0 === a && (n.y = n.y || p[0]);
        a > 0 && (n.y = n.autoPageSlideStartY || n.newSlideStartY || p[0]);
        n.verbose && console.log("| opts.autoPageSlideStartY: ".concat(n.autoPageSlideStartY, " / arrInchMargins[0]: ").concat(p[0], " => opts.y = ").concat(n.y));
        r.addTable(t.rows, {
          x: n.x || p[3],
          y: n.y,
          w: Number(o) / 914400,
          colW: l,
          autoPage: !1
        });
        n.addImage && (n.addImage.options = n.addImage.options || {}, n.addImage.image && (n.addImage.image.path || n.addImage.image.data) ? r.addImage({
          path: n.addImage.image.path,
          data: n.addImage.image.data,
          x: n.addImage.options.x,
          y: n.addImage.options.y,
          w: n.addImage.options.w,
          h: n.addImage.options.h
        }) : console.warn("Warning: tableToSlides.addImage requires either `path` or `data`"));
        n.addShape && r.addShape(n.addShape.shapeName, n.addShape.options || {});
        n.addTable && r.addTable(n.addTable.rows, n.addTable.options || {});
        n.addText && r.addText(n.addText.text, n.addText.options || {});
      });
    })(this, e, t, t?.masterSlideName ? this.slideLayouts.filter(function(e) {
      return e._name === t.masterSlideName;
    })[0] : null);
  };
  return e;
}();
export const _$$default = $$ek0; 
