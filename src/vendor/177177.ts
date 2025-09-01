import { deflateSync } from "793370";
import { createCanvas } from "9337";
import { readFile } from "416384";
import { lstat, createReadStream } from "416384";
import { request } from "732165";
import { request as _$$request } from "281076";
import { parse } from "596768";
!
  /**
  * @licstart The following is the entire license notice for the
  * Javascript code in this page
  *
  * Copyright 2022 Mozilla Foundation
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  * @licend The above is the entire license notice for the
  * Javascript code in this page
  */
  function(e, t) {
    module.exports = t();
  }(0, function() {
    return (() => {
      "use strict";

      var __webpack_modules__ = [, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.VerbosityLevel = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.UNSUPPORTED_FEATURES = t.TextRenderingMode = t.StreamType = t.RenderingIntentFlag = t.PermissionFlag = t.PasswordResponses = t.PasswordException = t.PageActionEventType = t.OPS = t.MissingPDFException = t.IsLittleEndianCached = t.IsEvalSupportedCached = t.InvalidPDFException = t.ImageKind = t.IDENTITY_MATRIX = t.FormatError = t.FontType = t.FONT_IDENTITY_MATRIX = t.DocumentActionEventType = t.CMapCompressionType = t.BaseException = t.AnnotationType = t.AnnotationStateModelType = t.AnnotationReviewState = t.AnnotationReplyType = t.AnnotationMode = t.AnnotationMarkedState = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.AnnotationActionEventType = t.AbortException = void 0;
        t.arrayByteLength = Y;
        t.arraysToBytes = K;
        t.assert = L;
        t.bytesToString = $;
        t.createPromiseCapability = em;
        t.createValidAbsoluteUrl = N;
        t.escapeString = el;
        t.getModificationDate = ef;
        t.getVerbosityLevel = E;
        t.info = F;
        t.isArrayBuffer = ep;
        t.isArrayEqual = eg;
        t.isAscii = eh;
        t.isSameOrigin = D;
        t.objectFromMap = Z;
        t.objectSize = Q;
        t.setVerbosityLevel = w;
        t.shadow = j;
        t.string32 = J;
        t.stringToBytes = X;
        t.stringToPDFString = eo;
        t.stringToUTF16BEString = ec;
        t.stringToUTF8String = ed;
        t.unreachable = O;
        t.utf8StringToString = eu;
        t.warn = M;
        r(2);
        let s = [1, 0, 0, 1, 0, 0];
        t.IDENTITY_MATRIX = s;
        let a = [.001, 0, 0, .001, 0, 0];
        t.FONT_IDENTITY_MATRIX = a;
        let i = {
          ANY: 1,
          DISPLAY: 2,
          PRINT: 4,
          ANNOTATIONS_FORMS: 16,
          ANNOTATIONS_STORAGE: 32,
          ANNOTATIONS_DISABLE: 64,
          OPLIST: 256
        };
        t.RenderingIntentFlag = i;
        let n = {
          DISABLE: 0,
          ENABLE: 1,
          ENABLE_FORMS: 2,
          ENABLE_STORAGE: 3
        };
        t.AnnotationMode = n;
        let o = {
          PRINT: 4,
          MODIFY_CONTENTS: 8,
          COPY: 16,
          MODIFY_ANNOTATIONS: 32,
          FILL_INTERACTIVE_FORMS: 256,
          COPY_FOR_ACCESSIBILITY: 512,
          ASSEMBLE: 1024,
          PRINT_HIGH_QUALITY: 2048
        };
        t.PermissionFlag = o;
        let l = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4
        };
        t.TextRenderingMode = l;
        let h = {
          GRAYSCALE_1BPP: 1,
          RGB_24BPP: 2,
          RGBA_32BPP: 3
        };
        t.ImageKind = h;
        let c = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26
        };
        t.AnnotationType = c;
        let d = {
          MARKED: "Marked",
          REVIEW: "Review"
        };
        t.AnnotationStateModelType = d;
        let u = {
          MARKED: "Marked",
          UNMARKED: "Unmarked"
        };
        t.AnnotationMarkedState = u;
        let p = {
          ACCEPTED: "Accepted",
          REJECTED: "Rejected",
          CANCELLED: "Cancelled",
          COMPLETED: "Completed",
          NONE: "None"
        };
        t.AnnotationReviewState = p;
        let g = {
          GROUP: "Group",
          REPLY: "R"
        };
        t.AnnotationReplyType = g;
        let f = {
          INVISIBLE: 1,
          HIDDEN: 2,
          PRINT: 4,
          NOZOOM: 8,
          NOROTATE: 16,
          NOVIEW: 32,
          READONLY: 64,
          LOCKED: 128,
          TOGGLENOVIEW: 256,
          LOCKEDCONTENTS: 512
        };
        t.AnnotationFlag = f;
        let m = {
          READONLY: 1,
          REQUIRED: 2,
          NOEXPORT: 4,
          MULTILINE: 4096,
          PASSWORD: 8192,
          NOTOGGLETOOFF: 16384,
          RADIO: 32768,
          PUSHBUTTON: 65536,
          COMBO: 131072,
          EDIT: 262144,
          SORT: 524288,
          FILESELECT: 1048576,
          MULTISELECT: 2097152,
          DONOTSPELLCHECK: 4194304,
          DONOTSCROLL: 8388608,
          COMB: 0x1000000,
          RICHTEXT: 0x2000000,
          RADIOSINUNISON: 0x2000000,
          COMMITONSELCHANGE: 0x4000000
        };
        t.AnnotationFieldFlag = m;
        let A = {
          SOLID: 1,
          DASHED: 2,
          BEVELED: 3,
          INSET: 4,
          UNDERLINE: 5
        };
        t.AnnotationBorderStyleType = A;
        let b = {
          E: "Mouse Enter",
          X: "Mouse Exit",
          D: "Mouse Down",
          U: "Mouse Up",
          Fo: "Focus",
          Bl: "Blur",
          PO: "PageOpen",
          PC: "PageClose",
          PV: "PageVisible",
          PI: "PageInvisible",
          K: "Keystroke",
          F: "Format",
          V: "Validate",
          C: "Calculate"
        };
        t.AnnotationActionEventType = b;
        let _ = {
          WC: "WillClose",
          WS: "WillSave",
          DS: "DidSave",
          WP: "WillPrint",
          DP: "DidPrint"
        };
        t.DocumentActionEventType = _;
        let y = {
          O: "PageOpen",
          C: "PageClose"
        };
        t.PageActionEventType = y;
        let S = {
          UNKNOWN: "UNKNOWN",
          FLATE: "FLATE",
          LZW: "LZW",
          DCT: "DCT",
          JPX: "JPX",
          JBIG: "JBIG",
          A85: "A85",
          AHX: "AHX",
          CCF: "CCF",
          RLX: "RLX"
        };
        t.StreamType = S;
        let x = {
          UNKNOWN: "UNKNOWN",
          TYPE1: "TYPE1",
          TYPE1STANDARD: "TYPE1STANDARD",
          TYPE1C: "TYPE1C",
          CIDFONTTYPE0: "CIDFONTTYPE0",
          CIDFONTTYPE0C: "CIDFONTTYPE0C",
          TRUETYPE: "TRUETYPE",
          CIDFONTTYPE2: "CIDFONTTYPE2",
          TYPE3: "TYPE3",
          OPENTYPE: "OPENTYPE",
          TYPE0: "TYPE0",
          MMTYPE1: "MMTYPE1"
        };
        t.FontType = x;
        let v = {
          ERRORS: 0,
          WARNINGS: 1,
          INFOS: 5
        };
        t.VerbosityLevel = v;
        let C = {
          NONE: 0,
          BINARY: 1,
          STREAM: 2
        };
        t.CMapCompressionType = C;
        let P = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotations: 78,
          endAnnotations: 79,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintJpegXObject: 82,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91
        };
        t.OPS = P;
        let T = {
          unknown: "unknown",
          forms: "forms",
          javaScript: "javaScript",
          signatures: "signatures",
          smask: "smask",
          shadingPattern: "shadingPattern",
          font: "font",
          errorTilingPattern: "errorTilingPattern",
          errorExtGState: "errorExtGState",
          errorXObject: "errorXObject",
          errorFontLoadType3: "errorFontLoadType3",
          errorFontState: "errorFontState",
          errorFontMissing: "errorFontMissing",
          errorFontTranslate: "errorFontTranslate",
          errorColorSpace: "errorColorSpace",
          errorOperatorList: "errorOperatorList",
          errorFontToUnicode: "errorFontToUnicode",
          errorFontLoadNative: "errorFontLoadNative",
          errorFontBuildPath: "errorFontBuildPath",
          errorFontGetPath: "errorFontGetPath",
          errorMarkedContent: "errorMarkedContent",
          errorContentSubStream: "errorContentSubStream"
        };
        t.UNSUPPORTED_FEATURES = T;
        let k = {
          NEED_PASSWORD: 1,
          INCORRECT_PASSWORD: 2
        };
        t.PasswordResponses = k;
        let R = v.WARNINGS;
        function w(e) {
          Number.isInteger(e) && (R = e);
        }
        function E() {
          return R;
        }
        function F(e) {
          R >= v.INFOS && console.log(`Info: ${e}`);
        }
        function M(e) {
          R >= v.WARNINGS && console.log(`Warning: ${e}`);
        }
        function O(e) {
          throw Error(e);
        }
        function L(e, t) {
          e || O(t);
        }
        function D(e, t) {
          let r;
          try {
            if (!(r = new URL(e)).origin || "null" === r.origin) return !1;
          } catch (e) {
            return !1;
          }
          let s = new URL(t, r);
          return r.origin === s.origin;
        }
        function I(e) {
          if (!e) return !1;
          switch (e.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
              return !0;
            default:
              return !1;
          }
        }
        function N(e, t = null, r = null) {
          if (!e) return null;
          try {
            if (r && "string" == typeof e) {
              if (r.addDefaultProtocol && e.startsWith("www.")) {
                let t = e.match(/\./g);
                t && t.length >= 2 && (e = `http://${e}`);
              }
              if (r.tryConvertEncoding) try {
                e = ed(e);
              } catch (e) { }
            }
            let s = t ? new URL(e, t) : new URL(e);
            if (I(s)) return s;
          } catch (e) { }
          return null;
        }
        function j(e, t, r) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !1
          });
          return r;
        }
        let U = function() {
          function e(t, r) {
            this.constructor === e && O("Cannot initialize BaseException.");
            this.message = t;
            this.name = r;
          }
          e.prototype = Error();
          e.constructor = e;
          return e;
        }();
        t.BaseException = U;
        class B extends U {
          constructor(e, t) {
            super(e, "PasswordException");
            this.code = t;
          }
        }
        t.PasswordException = B;
        class W extends U {
          constructor(e, t) {
            super(e, "UnknownErrorException");
            this.details = t;
          }
        }
        t.UnknownErrorException = W;
        class G extends U {
          constructor(e) {
            super(e, "InvalidPDFException");
          }
        }
        t.InvalidPDFException = G;
        class q extends U {
          constructor(e) {
            super(e, "MissingPDFException");
          }
        }
        t.MissingPDFException = q;
        class H extends U {
          constructor(e, t) {
            super(e, "UnexpectedResponseException");
            this.status = t;
          }
        }
        t.UnexpectedResponseException = H;
        class z extends U {
          constructor(e) {
            super(e, "FormatError");
          }
        }
        t.FormatError = z;
        class V extends U {
          constructor(e) {
            super(e, "AbortException");
          }
        }
        function $(e) {
          ("object" != typeof e || null === e || void 0 === e.length) && O("Invalid argument for bytesToString");
          let t = e.length;
          let r = 8192;
          if (t < 8192) return String.fromCharCode.apply(null, e);
          let s = [];
          for (let a = 0; a < t; a += r) {
            let i = Math.min(a + r, t);
            let n = e.subarray(a, i);
            s.push(String.fromCharCode.apply(null, n));
          }
          return s.join("");
        }
        function X(e) {
          "string" != typeof e && O("Invalid argument for stringToBytes");
          let t = e.length;
          let r = new Uint8Array(t);
          for (let s = 0; s < t; ++s) r[s] = 255 & e.charCodeAt(s);
          return r;
        }
        function Y(e) {
          return void 0 !== e.length ? e.length : void 0 !== e.byteLength ? e.byteLength : void O("Invalid argument for arrayByteLength");
        }
        function K(e) {
          let t = e.length;
          if (1 === t && e[0] instanceof Uint8Array) return e[0];
          let r = 0;
          for (let s = 0; s < t; s++) r += Y(e[s]);
          let s = 0;
          let a = new Uint8Array(r);
          for (let r = 0; r < t; r++) {
            let t = e[r];
            t instanceof Uint8Array || (t = "string" == typeof t ? X(t) : new Uint8Array(t));
            let i = t.byteLength;
            a.set(t, s);
            s += i;
          }
          return a;
        }
        function J(e) {
          return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e);
        }
        function Q(e) {
          return Object.keys(e).length;
        }
        function Z(e) {
          let t = Object.create(null);
          for (let [r, s] of e) t[r] = s;
          return t;
        }
        function ee() {
          let e = new Uint8Array(4);
          e[0] = 1;
          return 1 === new Uint32Array(e.buffer, 0, 1)[0];
        }
        t.AbortException = V;
        let et = {
          get value() {
            return j(this, "value", ee());
          }
        };
        function er() {
          try {
            Function("");
            return !0;
          } catch (e) {
            return !1;
          }
        }
        t.IsLittleEndianCached = et;
        let es = {
          get value() {
            return j(this, "value", er());
          }
        };
        t.IsEvalSupportedCached = es;
        let ea = [...Array(256).keys()].map(e => e.toString(16).padStart(2, "0"));
        class ei {
          static makeHexColor(e, t, r) {
            return `#${ea[e]}${ea[t]}${ea[r]}`;
          }
          static transform(e, t) {
            return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
          }
          static applyTransform(e, t) {
            return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]];
          }
          static applyInverseTransform(e, t) {
            let r = t[0] * t[3] - t[1] * t[2];
            return [(e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r, (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r];
          }
          static getAxialAlignedBoundingBox(e, t) {
            let r = ei.applyTransform(e, t);
            let s = ei.applyTransform(e.slice(2, 4), t);
            let a = ei.applyTransform([e[0], e[3]], t);
            let i = ei.applyTransform([e[2], e[1]], t);
            return [Math.min(r[0], s[0], a[0], i[0]), Math.min(r[1], s[1], a[1], i[1]), Math.max(r[0], s[0], a[0], i[0]), Math.max(r[1], s[1], a[1], i[1])];
          }
          static inverseTransform(e) {
            let t = e[0] * e[3] - e[1] * e[2];
            return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t];
          }
          static apply3dTransform(e, t) {
            return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]];
          }
          static singularValueDecompose2dScale(e) {
            let t = [e[0], e[2], e[1], e[3]];
            let r = e[0] * t[0] + e[1] * t[2];
            let s = e[0] * t[1] + e[1] * t[3];
            let a = e[2] * t[0] + e[3] * t[2];
            let i = e[2] * t[1] + e[3] * t[3];
            let n = (r + i) / 2;
            let o = Math.sqrt((r + i) ** 2 - 4 * (r * i - a * s)) / 2;
            return [Math.sqrt(n + o || 1), Math.sqrt(n - o || 1)];
          }
          static normalizeRect(e) {
            let t = e.slice(0);
            e[0] > e[2] && (t[0] = e[2], t[2] = e[0]);
            e[1] > e[3] && (t[1] = e[3], t[3] = e[1]);
            return t;
          }
          static intersect(e, t) {
            function r(e, t) {
              return e - t;
            }
            let s = [e[0], e[2], t[0], t[2]].sort(r);
            let a = [e[1], e[3], t[1], t[3]].sort(r);
            let i = [];
            return (e = ei.normalizeRect(e), t = ei.normalizeRect(t), (s[0] !== e[0] || s[1] !== t[0]) && (s[0] !== t[0] || s[1] !== e[0])) ? null : (i[0] = s[1], i[2] = s[2], (a[0] !== e[1] || a[1] !== t[1]) && (a[0] !== t[1] || a[1] !== e[1])) ? null : (i[1] = a[1], i[3] = a[2], i);
          }
          static bezierBoundingBox(e, t, r, s, a, i, n, o) {
            let l;
            let h;
            let c;
            let d;
            let u;
            let p;
            let g;
            let f;
            let m = [];
            let A = [[], []];
            for (let A = 0; A < 2; ++A) {
              if (0 === A ? (h = 6 * e - 12 * r + 6 * a, l = -3 * e + 9 * r - 9 * a + 3 * n, c = 3 * r - 3 * e) : (h = 6 * t - 12 * s + 6 * i, l = -3 * t + 9 * s - 9 * i + 3 * o, c = 3 * s - 3 * t), 1e-12 > Math.abs(l)) {
                if (1e-12 > Math.abs(h)) continue;
                0 < (d = -c / h) && d < 1 && m.push(d);
                continue;
              }
              f = Math.sqrt(g = h * h - 4 * c * l);
              !(g < 0) && (0 < (u = (-h + f) / (2 * l)) && u < 1 && m.push(u), 0 < (p = (-h - f) / (2 * l)) && p < 1 && m.push(p));
            }
            let b = m.length;
            let _;
            let y = b;
            for (; b--;) {
              _ = 1 - (d = m[b]);
              A[0][b] = _ * _ * _ * e + 3 * _ * _ * d * r + 3 * _ * d * d * a + d * d * d * n;
              A[1][b] = _ * _ * _ * t + 3 * _ * _ * d * s + 3 * _ * d * d * i + d * d * d * o;
            }
            A[0][y] = e;
            A[1][y] = t;
            A[0][y + 1] = n;
            A[1][y + 1] = o;
            A[0].length = A[1].length = y + 2;
            return [Math.min(...A[0]), Math.min(...A[1]), Math.max(...A[0]), Math.max(...A[1])];
          }
        }
        t.Util = ei;
        let en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
        function eo(e) {
          if (e[0] >= "\xef") {
            let t;
            if ("\xfe" === e[0] && "\xff" === e[1] ? t = "utf-16be" : "\xff" === e[0] && "\xfe" === e[1] ? t = "utf-16le" : "\xef" === e[0] && "\xbb" === e[1] && "\xbf" === e[2] && (t = "utf-8"), t) try {
              let r = new TextDecoder(t, {
                fatal: !0
              });
              let s = X(e);
              return r.decode(s);
            } catch (e) {
              M(`stringToPDFString: "${e}".`);
            }
          }
          let t = [];
          for (function() {
            let r = 0;
            let s = e.length;
          }(); r < s; r++) {
            let s = en[e.charCodeAt(r)];
            t.push(s ? String.fromCharCode(s) : e.charAt(r));
          }
          return t.join("");
        }
        function el(e) {
          return e.replace(/([()\\\n\r])/g, e => "\n" === e ? "\\n" : "\r" === e ? "\\r" : `\\${e}`);
        }
        function eh(e) {
          return /^[\x00-\x7F]*$/.test(e);
        }
        function ec(e) {
          let t = ["\xfe\xff"];
          for (function() {
            let r = 0;
            let s = e.length;
          }(); r < s; r++) {
            let s = e.charCodeAt(r);
            t.push(String.fromCharCode(s >> 8 & 255), String.fromCharCode(255 & s));
          }
          return t.join("");
        }
        function ed(e) {
          return decodeURIComponent(escape(e));
        }
        function eu(e) {
          return unescape(encodeURIComponent(e));
        }
        function ep(e) {
          return "object" == typeof e && null !== e && void 0 !== e.byteLength;
        }
        function eg(e, t) {
          if (e.length !== t.length) return !1;
          for (function() {
            let r = 0;
            let s = e.length;
          }(); r < s; r++) if (e[r] !== t[r]) return !1;
          return !0;
        }
        function ef(e = new Date()) {
          return [e.getUTCFullYear().toString(), (e.getUTCMonth() + 1).toString().padStart(2, "0"), e.getUTCDate().toString().padStart(2, "0"), e.getUTCHours().toString().padStart(2, "0"), e.getUTCMinutes().toString().padStart(2, "0"), e.getUTCSeconds().toString().padStart(2, "0")].join("");
        }
        function em() {
          let e = Object.create(null);
          let t = !1;
          Object.defineProperty(e, "settled", {
            get: () => t
          });
          e.promise = new Promise(function(r, s) {
            e.resolve = function(e) {
              t = !0;
              r(e);
            };
            e.reject = function(e) {
              t = !0;
              s(e);
            };
          });
          return e;
        }
      }, (e, t, r) => {
        r(3);
      }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.isNodeJS = void 0;
        let r = "object" == typeof process && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && "browser" !== process.type);
        t.isNodeJS = r;
      }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
        let createPDFNetworkStream;
        exports.build = exports.RenderTask = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
        exports.getDocument = getDocument;
        exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
        exports.version = void 0;
        var _util = __w_pdfjs_require__(1);
        var _display_utils = __w_pdfjs_require__(5);
        var _font_loader = __w_pdfjs_require__(7);
        var _node_utils = __w_pdfjs_require__(8);
        var _annotation_storage = __w_pdfjs_require__(9);
        var _canvas = __w_pdfjs_require__(10);
        var _worker_options = __w_pdfjs_require__(12);
        var _is_node = __w_pdfjs_require__(3);
        var _message_handler = __w_pdfjs_require__(13);
        var _metadata = __w_pdfjs_require__(14);
        var _optional_content_config = __w_pdfjs_require__(15);
        var _transport_stream = __w_pdfjs_require__(16);
        var _xfa_text = __w_pdfjs_require__(17);
        let DEFAULT_RANGE_CHUNK_SIZE = 65536;
        let RENDERING_CANCELLED_TIMEOUT = 100;
        let DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
        exports.DefaultCanvasFactory = DefaultCanvasFactory;
        let DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
        let DefaultStandardFontDataFactory = _is_node.isNodeJS ? _node_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
        function setPDFNetworkStreamFactory(e) {
          createPDFNetworkStream = e;
        }
        function getDocument(e) {
          let t;
          let r = new PDFDocumentLoadingTask();
          if ("string" == typeof e || e instanceof URL) t = {
            url: e
          }; else if (_util.isArrayBuffer(e)) t = {
            data: e
          }; else if (e instanceof PDFDataRangeTransport) t = {
            range: e
          }; else {
            if ("object" != typeof e) throw Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.");
            if (!e.url && !e.data && !e.range) throw Error("Invalid parameter object: need either .data, .range or .url");
            t = e;
          }
          let s = Object.create(null);
          let a = null;
          let i = null;
          for (let e in t) {
            let r = t[e];
            switch (e) {
              case "url":
                if ("undefined" != typeof window) try {
                  s[e] = new URL(r, window.location).href;
                  continue;
                } catch (e) {
                  _util.warn(`Cannot create valid URL: "${e}".`);
                } else if ("string" == typeof r || r instanceof URL) {
                  s[e] = r.toString();
                  continue;
                }
                throw Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
              case "range":
                a = r;
                continue;
              case "worker":
                i = r;
                continue;
              case "data":
                if (_is_node.isNodeJS && "undefined" != typeof Buffer && r instanceof Buffer) s[e] = new Uint8Array(r); else if (r instanceof Uint8Array) break; else if ("string" == typeof r) s[e] = _util.stringToBytes(r); else if ("object" != typeof r || null === r || isNaN(r.length)) {
                  if (_util.isArrayBuffer(r)) s[e] = new Uint8Array(r); else throw Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.");
                } else s[e] = new Uint8Array(r);
                continue;
            }
            s[e] = r;
          }
          if (s.rangeChunkSize = s.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE, s.CMapReaderFactory = s.CMapReaderFactory || DefaultCMapReaderFactory, s.StandardFontDataFactory = s.StandardFontDataFactory || DefaultStandardFontDataFactory, s.ignoreErrors = !0 !== s.stopAtErrors, s.fontExtraProperties = !0 === s.fontExtraProperties, s.pdfBug = !0 === s.pdfBug, s.enableXfa = !0 === s.enableXfa, ("string" != typeof s.docBaseUrl || _display_utils.isDataScheme(s.docBaseUrl)) && (s.docBaseUrl = null), Number.isInteger(s.maxImageSize) || (s.maxImageSize = -1), "boolean" != typeof s.useWorkerFetch && (s.useWorkerFetch = s.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && s.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory), "boolean" != typeof s.isEvalSupported && (s.isEvalSupported = !0), "boolean" != typeof s.disableFontFace && (s.disableFontFace = _is_node.isNodeJS), "boolean" != typeof s.useSystemFonts && (s.useSystemFonts = !_is_node.isNodeJS && !s.disableFontFace), void 0 === s.ownerDocument && (s.ownerDocument = globalThis.document), "boolean" != typeof s.disableRange && (s.disableRange = !1), "boolean" != typeof s.disableStream && (s.disableStream = !1), "boolean" != typeof s.disableAutoFetch && (s.disableAutoFetch = !1), _util.setVerbosityLevel(s.verbosity), !i) {
            let e = {
              verbosity: s.verbosity,
              port: _worker_options.GlobalWorkerOptions.workerPort
            };
            i = e.port ? PDFWorker.fromPort(e) : new PDFWorker(e);
            r._worker = i;
          }
          let n = r.docId;
          i.promise.then(function() {
            if (r.destroyed) throw Error("Loading aborted");
            return Promise.all([_fetchDocument(i, s, a, n), new Promise(function(e) {
              let t;
              a ? t = new _transport_stream.PDFDataTransportStream({
                length: s.length,
                initialData: s.initialData,
                progressiveDone: s.progressiveDone,
                contentDispositionFilename: s.contentDispositionFilename,
                disableRange: s.disableRange,
                disableStream: s.disableStream
              }, a) : s.data || (t = createPDFNetworkStream({
                url: s.url,
                length: s.length,
                httpHeaders: s.httpHeaders,
                withCredentials: s.withCredentials,
                rangeChunkSize: s.rangeChunkSize,
                disableRange: s.disableRange,
                disableStream: s.disableStream
              }));
              e(t);
            })]).then(function([e, t]) {
              if (r.destroyed) throw Error("Loading aborted");
              let a = new _message_handler.MessageHandler(n, e, i.port);
              let o = new WorkerTransport(a, r, t, s);
              r._transport = o;
              a.send("Ready", null);
            });
          }).catch(r._capability.reject);
          return r;
        }
        async function _fetchDocument(e, t, r, s) {
          if (e.destroyed) throw Error("Worker was destroyed");
          r && (t.length = r.length, t.initialData = r.initialData, t.progressiveDone = r.progressiveDone, t.contentDispositionFilename = r.contentDispositionFilename);
          let a = await e.messageHandler.sendWithPromise("GetDocRequest", {
            docId: s,
            apiVersion: "2.13.216",
            source: {
              data: t.data,
              url: t.url,
              password: t.password,
              disableAutoFetch: t.disableAutoFetch,
              rangeChunkSize: t.rangeChunkSize,
              length: t.length
            },
            maxImageSize: t.maxImageSize,
            disableFontFace: t.disableFontFace,
            docBaseUrl: t.docBaseUrl,
            ignoreErrors: t.ignoreErrors,
            isEvalSupported: t.isEvalSupported,
            fontExtraProperties: t.fontExtraProperties,
            enableXfa: t.enableXfa,
            useSystemFonts: t.useSystemFonts,
            cMapUrl: t.useWorkerFetch ? t.cMapUrl : null,
            standardFontDataUrl: t.useWorkerFetch ? t.standardFontDataUrl : null
          });
          if (e.destroyed) throw Error("Worker was destroyed");
          return a;
        }
        exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
        class PDFDocumentLoadingTask {
          static get idCounters() {
            return _util.shadow(this, "idCounters", {
              doc: 0
            });
          }
          constructor() {
            this._capability = _util.createPromiseCapability();
            this._transport = null;
            this._worker = null;
            this.docId = `d${PDFDocumentLoadingTask.idCounters.doc++}`;
            this.destroyed = !1;
            this.onPassword = null;
            this.onProgress = null;
            this.onUnsupportedFeature = null;
          }
          get promise() {
            return this._capability.promise;
          }
          async destroy() {
            this.destroyed = !0;
            await this._transport?.destroy();
            this._transport = null;
            this._worker && (this._worker.destroy(), this._worker = null);
          }
        }
        exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
        class PDFDataRangeTransport {
          constructor(e, t, r = !1, s = null) {
            this.length = e;
            this.initialData = t;
            this.progressiveDone = r;
            this.contentDispositionFilename = s;
            this._rangeListeners = [];
            this._progressListeners = [];
            this._progressiveReadListeners = [];
            this._progressiveDoneListeners = [];
            this._readyCapability = _util.createPromiseCapability();
          }
          addRangeListener(e) {
            this._rangeListeners.push(e);
          }
          addProgressListener(e) {
            this._progressListeners.push(e);
          }
          addProgressiveReadListener(e) {
            this._progressiveReadListeners.push(e);
          }
          addProgressiveDoneListener(e) {
            this._progressiveDoneListeners.push(e);
          }
          onDataRange(e, t) {
            for (let r of this._rangeListeners) r(e, t);
          }
          onDataProgress(e, t) {
            this._readyCapability.promise.then(() => {
              for (let r of this._progressListeners) r(e, t);
            });
          }
          onDataProgressiveRead(e) {
            this._readyCapability.promise.then(() => {
              for (let t of this._progressiveReadListeners) t(e);
            });
          }
          onDataProgressiveDone() {
            this._readyCapability.promise.then(() => {
              for (let e of this._progressiveDoneListeners) e();
            });
          }
          transportReady() {
            this._readyCapability.resolve();
          }
          requestDataRange(e, t) {
            _util.unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
          }
          abort() { }
        }
        exports.PDFDataRangeTransport = PDFDataRangeTransport;
        class PDFDocumentProxy {
          constructor(e, t) {
            this._pdfInfo = e;
            this._transport = t;
            Object.defineProperty(this, "fingerprint", {
              get() {
                _display_utils.deprecated("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead.");
                return this.fingerprints[0];
              }
            });
            Object.defineProperty(this, "getStats", {
              value: async () => (_display_utils.deprecated("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead."), this.stats || {
                streamTypes: {},
                fontTypes: {}
              })
            });
          }
          get annotationStorage() {
            return this._transport.annotationStorage;
          }
          get numPages() {
            return this._pdfInfo.numPages;
          }
          get fingerprints() {
            return this._pdfInfo.fingerprints;
          }
          get stats() {
            return this._transport.stats;
          }
          get isPureXfa() {
            return !!this._transport._htmlForXfa;
          }
          get allXfaHtml() {
            return this._transport._htmlForXfa;
          }
          getPage(e) {
            return this._transport.getPage(e);
          }
          getPageIndex(e) {
            return this._transport.getPageIndex(e);
          }
          getDestinations() {
            return this._transport.getDestinations();
          }
          getDestination(e) {
            return this._transport.getDestination(e);
          }
          getPageLabels() {
            return this._transport.getPageLabels();
          }
          getPageLayout() {
            return this._transport.getPageLayout();
          }
          getPageMode() {
            return this._transport.getPageMode();
          }
          getViewerPreferences() {
            return this._transport.getViewerPreferences();
          }
          getOpenAction() {
            return this._transport.getOpenAction();
          }
          getAttachments() {
            return this._transport.getAttachments();
          }
          getJavaScript() {
            return this._transport.getJavaScript();
          }
          getJSActions() {
            return this._transport.getDocJSActions();
          }
          getOutline() {
            return this._transport.getOutline();
          }
          getOptionalContentConfig() {
            return this._transport.getOptionalContentConfig();
          }
          getPermissions() {
            return this._transport.getPermissions();
          }
          getMetadata() {
            return this._transport.getMetadata();
          }
          getMarkInfo() {
            return this._transport.getMarkInfo();
          }
          getData() {
            return this._transport.getData();
          }
          getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise;
          }
          cleanup(e = !1) {
            return this._transport.startCleanup(e || this.isPureXfa);
          }
          destroy() {
            return this.loadingTask.destroy();
          }
          get loadingParams() {
            return this._transport.loadingParams;
          }
          get loadingTask() {
            return this._transport.loadingTask;
          }
          saveDocument() {
            this._transport.annotationStorage.size <= 0 && _display_utils.deprecated("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
            return this._transport.saveDocument();
          }
          getFieldObjects() {
            return this._transport.getFieldObjects();
          }
          hasJSActions() {
            return this._transport.hasJSActions();
          }
          getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds();
          }
        }
        exports.PDFDocumentProxy = PDFDocumentProxy;
        class PDFPageProxy {
          constructor(e, t, r, s, a = !1) {
            this._pageIndex = e;
            this._pageInfo = t;
            this._ownerDocument = s;
            this._transport = r;
            this._stats = a ? new _display_utils.StatTimer() : null;
            this._pdfBug = a;
            this.commonObjs = r.commonObjs;
            this.objs = new PDFObjects();
            this.cleanupAfterRender = !1;
            this.pendingCleanup = !1;
            this._intentStates = new Map();
            this._annotationPromises = new Map();
            this.destroyed = !1;
          }
          get pageNumber() {
            return this._pageIndex + 1;
          }
          get rotate() {
            return this._pageInfo.rotate;
          }
          get ref() {
            return this._pageInfo.ref;
          }
          get userUnit() {
            return this._pageInfo.userUnit;
          }
          get view() {
            return this._pageInfo.view;
          }
          getViewport({
            scale: e,
            rotation: t = this.rotate,
            offsetX: r = 0,
            offsetY: s = 0,
            dontFlip: a = !1
          } = {}) {
            return new _display_utils.PageViewport({
              viewBox: this.view,
              scale: e,
              rotation: t,
              offsetX: r,
              offsetY: s,
              dontFlip: a
            });
          }
          getAnnotations({
            intent: e = "display"
          } = {}) {
            let t = this._transport.getRenderingIntent(e);
            let r = this._annotationPromises.get(t.cacheKey);
            r || (r = this._transport.getAnnotations(this._pageIndex, t.renderingIntent), this._annotationPromises.set(t.cacheKey, r), r = r.then(e => {
              for (let t of e) {
                void 0 !== t.titleObj && Object.defineProperty(t, "title", {
                  get: () => (_display_utils.deprecated("`title`-property on annotation, please use `titleObj` instead."), t.titleObj.str)
                });
                void 0 !== t.contentsObj && Object.defineProperty(t, "contents", {
                  get: () => (_display_utils.deprecated("`contents`-property on annotation, please use `contentsObj` instead."), t.contentsObj.str)
                });
              }
              return e;
            }));
            return r;
          }
          getJSActions() {
            return this._jsActionsPromise ||= this._transport.getPageJSActions(this._pageIndex);
          }
          async getXfa() {
            return this._transport._htmlForXfa?.children[this._pageIndex] || null;
          }
          render({
            canvasContext: e,
            viewport: t,
            intent: r = "display",
            annotationMode: s = _util.AnnotationMode.ENABLE,
            transform: a = null,
            imageLayer: i = null,
            canvasFactory: n = null,
            background: o = null,
            optionalContentConfigPromise: l = null,
            annotationCanvasMap: h = null
          }) {
            $$arguments[0]?.renderInteractiveForms !== void 0 && (_display_utils.deprecated("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead."), !0 === $$arguments[0].renderInteractiveForms && s === _util.AnnotationMode.ENABLE && (s = _util.AnnotationMode.ENABLE_FORMS));
            $$arguments[0]?.includeAnnotationStorage !== void 0 && (_display_utils.deprecated("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead."), !0 === $$arguments[0].includeAnnotationStorage && s === _util.AnnotationMode.ENABLE && (s = _util.AnnotationMode.ENABLE_STORAGE));
            this._stats && this._stats.time("Overall");
            let c = this._transport.getRenderingIntent(r, s);
            this.pendingCleanup = !1;
            l || (l = this._transport.getOptionalContentConfig());
            let d = this._intentStates.get(c.cacheKey);
            d || (d = Object.create(null), this._intentStates.set(c.cacheKey, d));
            d.streamReaderCancelTimeout && (clearTimeout(d.streamReaderCancelTimeout), d.streamReaderCancelTimeout = null);
            let u = n || new DefaultCanvasFactory({
              ownerDocument: this._ownerDocument
            });
            let p = !!(c.renderingIntent & _util.RenderingIntentFlag.PRINT);
            d.displayReadyCapability || (d.displayReadyCapability = _util.createPromiseCapability(), d.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: !1
            }, this._stats && this._stats.time("Page Request"), this._pumpOperatorList(c));
            let g = e => {
              d.renderTasks.$$delete(f);
              (this.cleanupAfterRender || p) && (this.pendingCleanup = !0);
              this._tryCleanup();
              e ? (f.capability.reject(e), this._abortOperatorList({
                intentState: d,
                reason: e instanceof Error ? e : Error(e)
              })) : f.capability.resolve();
              this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"));
            };
            let f = new InternalRenderTask({
              callback: g,
              params: {
                canvasContext: e,
                viewport: t,
                transform: a,
                imageLayer: i,
                background: o
              },
              objs: this.objs,
              commonObjs: this.commonObjs,
              annotationCanvasMap: h,
              operatorList: d.operatorList,
              pageIndex: this._pageIndex,
              canvasFactory: u,
              useRequestAnimationFrame: !p,
              pdfBug: this._pdfBug
            });
            (d.renderTasks ||= new Set()).add(f);
            let m = f.task;
            Promise.all([d.displayReadyCapability.promise, l]).then(([e, t]) => {
              if (this.pendingCleanup) {
                g();
                return;
              }
              this._stats && this._stats.time("Rendering");
              f.initializeGraphics({
                transparency: e,
                optionalContentConfig: t
              });
              f.operatorListChanged();
            }).catch(g);
            return m;
          }
          getOperatorList({
            intent: e = "display",
            annotationMode: t = _util.AnnotationMode.ENABLE
          } = {}) {
            let r;
            function s() {
              i.operatorList.lastChunk && (i.opListReadCapability.resolve(i.operatorList), i.renderTasks.$$delete(r));
            }
            let a = this._transport.getRenderingIntent(e, t, !0);
            let i = this._intentStates.get(a.cacheKey);
            i || (i = Object.create(null), this._intentStates.set(a.cacheKey, i));
            i.opListReadCapability || ((r = Object.create(null)).operatorListChanged = s, i.opListReadCapability = _util.createPromiseCapability(), (i.renderTasks ||= new Set()).add(r), i.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: !1
            }, this._stats && this._stats.time("Page Request"), this._pumpOperatorList(a));
            return i.opListReadCapability.promise;
          }
          streamTextContent({
            disableCombineTextItems: e = !1,
            includeMarkedContent: t = !1
          } = {}) {
            let r = 100;
            return this._transport.messageHandler.sendWithStream("GetTextContent", {
              pageIndex: this._pageIndex,
              combineTextItems: !0 !== e,
              includeMarkedContent: !0 === t
            }, {
              highWaterMark: r,
              size: e => e.items.length
            });
          }
          getTextContent(e = {}) {
            if (this._transport._htmlForXfa) return this.getXfa().then(e => _xfa_text.XfaText.textContent(e));
            let t = this.streamTextContent(e);
            return new Promise(function(e, r) {
              function s() {
                a.read().then(function({
                  value: t,
                  done: r
                }) {
                  if (r) {
                    e(i);
                    return;
                  }
                  Object.assign(i.styles, t.styles);
                  i.items.push(...t.items);
                  s();
                }, r);
              }
              let a = t.getReader();
              let i = {
                items: [],
                styles: Object.create(null)
              };
              s();
            });
          }
          getStructTree() {
            return this._structTreePromise ||= this._transport.getStructTree(this._pageIndex);
          }
          _destroy() {
            this.destroyed = !0;
            let e = [];
            for (let t of this._intentStates.values()) if (this._abortOperatorList({
              intentState: t,
              reason: Error("Page was destroyed."),
              force: !0
            }), !t.opListReadCapability) for (let r of t.renderTasks) {
              e.push(r.completed);
              r.cancel();
            }
            this.objs.clear();
            this._annotationPromises.clear();
            this._jsActionsPromise = null;
            this._structTreePromise = null;
            this.pendingCleanup = !1;
            return Promise.all(e);
          }
          cleanup(e = !1) {
            this.pendingCleanup = !0;
            return this._tryCleanup(e);
          }
          _tryCleanup(e = !1) {
            if (!this.pendingCleanup) return !1;
            for (let {
              renderTasks,
              operatorList
            } of this._intentStates.values()) if (renderTasks.size > 0 || !operatorList.lastChunk) return !1;
            this._intentStates.clear();
            this.objs.clear();
            this._annotationPromises.clear();
            this._jsActionsPromise = null;
            this._structTreePromise = null;
            e && this._stats && (this._stats = new _display_utils.StatTimer());
            this.pendingCleanup = !1;
            return !0;
          }
          _startRenderPage(e, t) {
            let r = this._intentStates.get(t);
            r && (this._stats && this._stats.timeEnd("Page Request"), r.displayReadyCapability && r.displayReadyCapability.resolve(e));
          }
          _renderPageChunk(e, t) {
            for (function() {
              let r = 0;
              let s = e.length;
            }(); r < s; r++) {
              t.operatorList.fnArray.push(e.fnArray[r]);
              t.operatorList.argsArray.push(e.argsArray[r]);
            }
            for (let r of (t.operatorList.lastChunk = e.lastChunk, t.renderTasks)) r.operatorListChanged();
            e.lastChunk && this._tryCleanup();
          }
          _pumpOperatorList({
            renderingIntent: e,
            cacheKey: t
          }) {
            let r = this._transport.messageHandler.sendWithStream("GetOperatorList", {
              pageIndex: this._pageIndex,
              intent: e,
              cacheKey: t,
              annotationStorage: e & _util.RenderingIntentFlag.ANNOTATIONS_STORAGE ? this._transport.annotationStorage.serializable : null
            }).getReader();
            let s = this._intentStates.get(t);
            s.streamReader = r;
            let a = () => {
              r.read().then(({
                value: e,
                done: t
              }) => {
                if (t) {
                  s.streamReader = null;
                  return;
                }
                this._transport.destroyed || (this._renderPageChunk(e, s), a());
              }, e => {
                if (s.streamReader = null, !this._transport.destroyed) {
                  if (s.operatorList) {
                    for (let e of (s.operatorList.lastChunk = !0, s.renderTasks)) e.operatorListChanged();
                    this._tryCleanup();
                  }
                  if (s.displayReadyCapability) s.displayReadyCapability.reject(e); else if (s.opListReadCapability) s.opListReadCapability.reject(e); else throw e;
                }
              });
            };
            a();
          }
          _abortOperatorList({
            intentState: e,
            reason: t,
            force: r = !1
          }) {
            if (e.streamReader) {
              if (!r) {
                if (e.renderTasks.size > 0) return;
                if (t instanceof _display_utils.RenderingCancelledException) {
                  e.streamReaderCancelTimeout = setTimeout(() => {
                    this._abortOperatorList({
                      intentState: e,
                      reason: t,
                      force: !0
                    });
                    e.streamReaderCancelTimeout = null;
                  }, RENDERING_CANCELLED_TIMEOUT);
                  return;
                }
              }
              if (e.streamReader.cancel(new _util.AbortException(t.message)).catch(() => { }), e.streamReader = null, !this._transport.destroyed) {
                for (let [t, r] of this._intentStates) if (r === e) {
                  this._intentStates.$$delete(t);
                  break;
                }
                this.cleanup();
              }
            }
          }
          get stats() {
            return this._stats;
          }
        }
        exports.PDFPageProxy = PDFPageProxy;
        class LoopbackPort {
          constructor() {
            this._listeners = [];
            this._deferred = Promise.resolve();
          }
          postMessage(e, t) {
            let r = {
              data: structuredClone(e, t)
            };
            this._deferred.then(() => {
              for (let e of this._listeners) e.call(this, r);
            });
          }
          addEventListener(e, t) {
            this._listeners.push(t);
          }
          removeEventListener(e, t) {
            let r = this._listeners.indexOf(t);
            this._listeners.splice(r, 1);
          }
          terminate() {
            this._listeners.length = 0;
          }
        }
        exports.LoopbackPort = LoopbackPort;
        let PDFWorkerUtil = {
          isWorkerDisabled: !1,
          fallbackWorkerSrc: null,
          fakeWorkerId: 0
        };
        if (_is_node.isNodeJS) {
          PDFWorkerUtil.isWorkerDisabled = !0;
          PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
        } else if ("object" == typeof document) {
          let pdfjsFilePath = document?.currentScript?.src;
          pdfjsFilePath && (PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
        }
        PDFWorkerUtil.createCDNWrapper = function(e) {
          let t = `importScripts("${e}");`;
          return URL.createObjectURL(new Blob([t]));
        };
        class PDFWorker {
          static get _workerPorts() {
            return _util.shadow(this, "_workerPorts", new WeakMap());
          }
          constructor({
            name: e = null,
            port: t = null,
            verbosity: r = _util.getVerbosityLevel()
          } = {}) {
            this.name = e;
            this.destroyed = !1;
            this.verbosity = r;
            this._readyCapability = _util.createPromiseCapability();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;
            if (t && PDFWorker._workerPorts.has(t)) throw Error("Cannot use more than one PDFWorker per port.");
            if (t) {
              PDFWorker._workerPorts.set(t, this);
              this._initializeFromPort(t);
              return;
            }
            this._initialize();
          }
          get promise() {
            return this._readyCapability.promise;
          }
          get port() {
            return this._port;
          }
          get messageHandler() {
            return this._messageHandler;
          }
          _initializeFromPort(e) {
            this._port = e;
            this._messageHandler = new _message_handler.MessageHandler("main", "worker", e);
            this._messageHandler.on("ready", function() { });
            this._readyCapability.resolve();
          }
          _initialize() {
            if ("undefined" != typeof Worker && !PDFWorkerUtil.isWorkerDisabled && !PDFWorker._mainThreadWorkerMessageHandler) {
              let e = PDFWorker.workerSrc;
              try {
                _util.isSameOrigin(window.location.href, e) || (e = PDFWorkerUtil.createCDNWrapper(new URL(e, window.location).href));
                let t = new Worker(e);
                let r = new _message_handler.MessageHandler("main", "worker", t);
                let s = () => {
                  t.removeEventListener("error", a);
                  r.destroy();
                  t.terminate();
                  this.destroyed ? this._readyCapability.reject(Error("Worker was destroyed")) : this._setupFakeWorker();
                };
                let a = () => {
                  this._webWorker || s();
                };
                t.addEventListener("error", a);
                r.on("test", e => {
                  if (t.removeEventListener("error", a), this.destroyed) {
                    s();
                    return;
                  }
                  e ? (this._messageHandler = r, this._port = t, this._webWorker = t, this._readyCapability.resolve(), r.send("configure", {
                    verbosity: this.verbosity
                  })) : (this._setupFakeWorker(), r.destroy(), t.terminate());
                });
                r.on("ready", e => {
                  if (t.removeEventListener("error", a), this.destroyed) {
                    s();
                    return;
                  }
                  try {
                    i();
                  } catch (e) {
                    this._setupFakeWorker();
                  }
                });
                let i = () => {
                  let e = new Uint8Array([255]);
                  try {
                    r.send("test", e, [e.buffer]);
                  } catch (t) {
                    _util.warn("Cannot use postMessage transfers.");
                    e[0] = 0;
                    r.send("test", e);
                  }
                };
                i();
                return;
              } catch (e) {
                _util.info("The worker has been disabled.");
              }
            }
            this._setupFakeWorker();
          }
          _setupFakeWorker() {
            PDFWorkerUtil.isWorkerDisabled || (_util.warn("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0);
            PDFWorker._setupFakeWorkerGlobal.then(e => {
              if (this.destroyed) {
                this._readyCapability.reject(Error("Worker was destroyed"));
                return;
              }
              let t = new LoopbackPort();
              this._port = t;
              let r = `fake${PDFWorkerUtil.fakeWorkerId++}`;
              let s = new _message_handler.MessageHandler(r + "_worker", r, t);
              e.setup(s, t);
              let a = new _message_handler.MessageHandler(r, r + "_worker", t);
              this._messageHandler = a;
              this._readyCapability.resolve();
              a.send("configure", {
                verbosity: this.verbosity
              });
            }).catch(e => {
              this._readyCapability.reject(Error(`Setting up fake worker failed: "${e.message}".`));
            });
          }
          destroy() {
            this.destroyed = !0;
            this._webWorker && (this._webWorker.terminate(), this._webWorker = null);
            PDFWorker._workerPorts.$$delete(this._port);
            this._port = null;
            this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
          }
          static fromPort(e) {
            if (!e?.port) throw Error("PDFWorker.fromPort - invalid method signature.");
            return this._workerPorts.has(e.port) ? this._workerPorts.get(e.port) : new PDFWorker(e);
          }
          static get workerSrc() {
            if (_worker_options.GlobalWorkerOptions.workerSrc) return _worker_options.GlobalWorkerOptions.workerSrc;
            if (null !== PDFWorkerUtil.fallbackWorkerSrc) {
              _is_node.isNodeJS || _display_utils.deprecated('No "GlobalWorkerOptions.workerSrc" specified.');
              return PDFWorkerUtil.fallbackWorkerSrc;
            }
            throw Error('No "GlobalWorkerOptions.workerSrc" specified.');
          }
          static get _mainThreadWorkerMessageHandler() {
            try {
              return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
            } catch (e) {
              return null;
            }
          }
          static get _setupFakeWorkerGlobal() {
            let loader = async () => {
              let mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
              if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
              if (_is_node.isNodeJS) {
                let worker = eval("require")(this.workerSrc);
                return worker.WorkerMessageHandler;
              }
              await _display_utils.loadScript(this.workerSrc);
              return window.pdfjsWorker.WorkerMessageHandler;
            };
            return _util.shadow(this, "_setupFakeWorkerGlobal", loader());
          }
        }
        exports.PDFWorker = PDFWorker;
        PDFWorker.getWorkerSrc = function() {
          _display_utils.deprecated("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead.");
          return this.workerSrc;
        };
        class WorkerTransport {
          #e = null;
          #t = new Map();
          #r = new Map();
          #s = null;
          constructor(e, t, r, s) {
            this.messageHandler = e;
            this.loadingTask = t;
            this.commonObjs = new PDFObjects();
            this.fontLoader = new _font_loader.FontLoader({
              docId: t.docId,
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              ownerDocument: s.ownerDocument,
              styleElement: s.styleElement
            });
            this._params = s;
            s.useWorkerFetch || (this.CMapReaderFactory = new s.CMapReaderFactory({
              baseUrl: s.cMapUrl,
              isCompressed: s.cMapPacked
            }), this.StandardFontDataFactory = new s.StandardFontDataFactory({
              baseUrl: s.standardFontDataUrl
            }));
            this.destroyed = !1;
            this.destroyCapability = null;
            this._passwordCapability = null;
            this._networkStream = r;
            this._fullReader = null;
            this._lastProgress = null;
            this.downloadInfoCapability = _util.createPromiseCapability();
            this.setupMessageHandler();
          }
          get annotationStorage() {
            return _util.shadow(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
          }
          get stats() {
            return this.#e;
          }
          getRenderingIntent(e, t = _util.AnnotationMode.ENABLE, r = !1) {
            let s = _util.RenderingIntentFlag.DISPLAY;
            let a = "";
            switch (e) {
              case "any":
                s = _util.RenderingIntentFlag.ANY;
                break;
              case "display":
                break;
              case "print":
                s = _util.RenderingIntentFlag.PRINT;
                break;
              default:
                _util.warn(`getRenderingIntent - invalid intent: ${e}`);
            }
            switch (t) {
              case _util.AnnotationMode.DISABLE:
                s += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                break;
              case _util.AnnotationMode.ENABLE:
                break;
              case _util.AnnotationMode.ENABLE_FORMS:
                s += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                break;
              case _util.AnnotationMode.ENABLE_STORAGE:
                s += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                a = this.annotationStorage.lastModified;
                break;
              default:
                _util.warn(`getRenderingIntent - invalid annotationMode: ${t}`);
            }
            r && (s += _util.RenderingIntentFlag.OPLIST);
            return {
              renderingIntent: s,
              cacheKey: `${s}_${a}`
            };
          }
          destroy() {
            if (this.destroyCapability) return this.destroyCapability.promise;
            this.destroyed = !0;
            this.destroyCapability = _util.createPromiseCapability();
            this._passwordCapability && this._passwordCapability.reject(Error("Worker was destroyed during onPassword callback"));
            let e = [];
            for (let t of this.#t.values()) e.push(t._destroy());
            this.#t.clear();
            this.#r.clear();
            this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
            let t = this.messageHandler.sendWithPromise("Terminate", null);
            e.push(t);
            Promise.all(e).then(() => {
              this.commonObjs.clear();
              this.fontLoader.clear();
              this.#s = null;
              this._getFieldObjectsPromise = null;
              this._hasJSActionsPromise = null;
              this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
              this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null);
              this.destroyCapability.resolve();
            }, this.destroyCapability.reject);
            return this.destroyCapability.promise;
          }
          setupMessageHandler() {
            let {
              messageHandler,
              loadingTask
            } = this;
            messageHandler.on("GetReader", (e, t) => {
              _util.assert(this._networkStream, "GetReader - no `IPDFStream` instance available.");
              this._fullReader = this._networkStream.getFullReader();
              this._fullReader.onProgress = e => {
                this._lastProgress = {
                  loaded: e.loaded,
                  total: e.total
                };
              };
              t.onPull = () => {
                this._fullReader.read().then(function({
                  value: e,
                  done: r
                }) {
                  if (r) {
                    t.close();
                    return;
                  }
                  _util.assert(_util.isArrayBuffer(e), "GetReader - expected an ArrayBuffer.");
                  t.enqueue(new Uint8Array(e), 1, [e]);
                }).catch(e => {
                  t.error(e);
                });
              };
              t.onCancel = e => {
                this._fullReader.cancel(e);
                t.ready.catch(e => {
                  if (!this.destroyed) throw e;
                });
              };
            });
            messageHandler.on("ReaderHeadersReady", e => {
              let r = _util.createPromiseCapability();
              let s = this._fullReader;
              s.headersReady.then(() => {
                s.isStreamingSupported && s.isRangeSupported || (this._lastProgress && loadingTask.onProgress?.(this._lastProgress), s.onProgress = e => {
                  loadingTask.onProgress?.({
                    loaded: e.loaded,
                    total: e.total
                  });
                });
                r.resolve({
                  isStreamingSupported: s.isStreamingSupported,
                  isRangeSupported: s.isRangeSupported,
                  contentLength: s.contentLength
                });
              }, r.reject);
              return r.promise;
            });
            messageHandler.on("GetRangeReader", (e, t) => {
              _util.assert(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
              let r = this._networkStream.getRangeReader(e.begin, e.end);
              if (!r) {
                t.close();
                return;
              }
              t.onPull = () => {
                r.read().then(function({
                  value: e,
                  done: r
                }) {
                  if (r) {
                    t.close();
                    return;
                  }
                  _util.assert(_util.isArrayBuffer(e), "GetRangeReader - expected an ArrayBuffer.");
                  t.enqueue(new Uint8Array(e), 1, [e]);
                }).catch(e => {
                  t.error(e);
                });
              };
              t.onCancel = e => {
                r.cancel(e);
                t.ready.catch(e => {
                  if (!this.destroyed) throw e;
                });
              };
            });
            messageHandler.on("GetDoc", ({
              pdfInfo: e
            }) => {
              this._numPages = e.numPages;
              this._htmlForXfa = e.htmlForXfa;
              delete e.htmlForXfa;
              loadingTask._capability.resolve(new PDFDocumentProxy(e, this));
            });
            messageHandler.on("DocException", function(e) {
              let r;
              switch (e.name) {
                case "PasswordException":
                  r = new _util.PasswordException(e.message, e.code);
                  break;
                case "InvalidPDFException":
                  r = new _util.InvalidPDFException(e.message);
                  break;
                case "MissingPDFException":
                  r = new _util.MissingPDFException(e.message);
                  break;
                case "UnexpectedResponseException":
                  r = new _util.UnexpectedResponseException(e.message, e.status);
                  break;
                case "UnknownErrorException":
                  r = new _util.UnknownErrorException(e.message, e.details);
                  break;
                default:
                  _util.unreachable("DocException - expected a valid Error.");
              }
              loadingTask._capability.reject(r);
            });
            messageHandler.on("PasswordRequest", e => {
              if (this._passwordCapability = _util.createPromiseCapability(), loadingTask.onPassword) {
                let r = e => {
                  e instanceof Error ? this._passwordCapability.reject(e) : this._passwordCapability.resolve({
                    password: e
                  });
                };
                try {
                  loadingTask.onPassword(r, e.code);
                } catch (e) {
                  this._passwordCapability.reject(e);
                }
              } else this._passwordCapability.reject(new _util.PasswordException(e.message, e.code));
              return this._passwordCapability.promise;
            });
            messageHandler.on("DataLoaded", e => {
              loadingTask.onProgress?.({
                loaded: e.length,
                total: e.length
              });
              this.downloadInfoCapability.resolve(e);
            });
            messageHandler.on("StartRenderPage", e => {
              this.destroyed || this.#t.get(e.pageIndex)._startRenderPage(e.transparency, e.cacheKey);
            });
            messageHandler.on("commonobj", ([t, r, s]) => {
              if (!(this.destroyed || this.commonObjs.has(t))) switch (r) {
                case "Font":
                  let a = this._params;
                  if ("error" in s) {
                    let e = s.error;
                    _util.warn(`Error during font loading: ${e}`);
                    this.commonObjs.resolve(t, e);
                    break;
                  }
                  let i = null;
                  a.pdfBug && globalThis.FontInspector?.enabled && (i = {
                    registerFont(e, t) {
                      globalThis.FontInspector.fontAdded(e, t);
                    }
                  });
                  let n = new _font_loader.FontFaceObject(s, {
                    isEvalSupported: a.isEvalSupported,
                    disableFontFace: a.disableFontFace,
                    ignoreErrors: a.ignoreErrors,
                    onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                    fontRegistry: i
                  });
                  this.fontLoader.bind(n).catch(r => messageHandler.sendWithPromise("FontFallback", {
                    id: t
                  })).$$finally(() => {
                    !a.fontExtraProperties && n.data && (n.data = null);
                    this.commonObjs.resolve(t, n);
                  });
                  break;
                case "FontPath":
                case "Image":
                  this.commonObjs.resolve(t, s);
                  break;
                default:
                  throw Error(`Got unknown common object type ${r}`);
              }
            });
            messageHandler.on("obj", ([e, t, r, s]) => {
              if (this.destroyed) return;
              let a = this.#t.get(t);
              if (!a.objs.has(e)) switch (r) {
                case "Image":
                  a.objs.resolve(e, s);
                  let i = 8e6;
                  s?.data?.length > i && (a.cleanupAfterRender = !0);
                  break;
                case "Pattern":
                  a.objs.resolve(e, s);
                  break;
                default:
                  throw Error(`Got unknown object type ${r}`);
              }
            });
            messageHandler.on("DocProgress", e => {
              this.destroyed || loadingTask.onProgress?.({
                loaded: e.loaded,
                total: e.total
              });
            });
            messageHandler.on("DocStats", e => {
              this.destroyed || (this.#e = Object.freeze({
                streamTypes: Object.freeze(e.streamTypes),
                fontTypes: Object.freeze(e.fontTypes)
              }));
            });
            messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
            messageHandler.on("FetchBuiltInCMap", e => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.CMapReaderFactory ? this.CMapReaderFactory.fetch(e) : Promise.reject(Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.")));
            messageHandler.on("FetchStandardFontData", e => this.destroyed ? Promise.reject(Error("Worker was destroyed.")) : this.StandardFontDataFactory ? this.StandardFontDataFactory.fetch(e) : Promise.reject(Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
          }
          _onUnsupportedFeature({
            featureId: e
          }) {
            this.destroyed || this.loadingTask.onUnsupportedFeature?.(e);
          }
          getData() {
            return this.messageHandler.sendWithPromise("GetData", null);
          }
          getPage(e) {
            if (!Number.isInteger(e) || e <= 0 || e > this._numPages) return Promise.reject(Error("Invalid page request."));
            let t = e - 1;
            let r = this.#r.get(t);
            if (r) return r;
            let s = this.messageHandler.sendWithPromise("GetPage", {
              pageIndex: t
            }).then(e => {
              if (this.destroyed) throw Error("Transport destroyed");
              let r = new PDFPageProxy(t, e, this, this._params.ownerDocument, this._params.pdfBug);
              this.#t.set(t, r);
              return r;
            });
            this.#r.set(t, s);
            return s;
          }
          getPageIndex(e) {
            return "object" != typeof e || null === e || !Number.isInteger(e.num) || e.num < 0 || !Number.isInteger(e.gen) || e.gen < 0 ? Promise.reject(Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
              num: e.num,
              gen: e.gen
            });
          }
          getAnnotations(e, t) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
              pageIndex: e,
              intent: t
            });
          }
          saveDocument() {
            return this.messageHandler.sendWithPromise("SaveDocument", {
              isPureXfa: !!this._htmlForXfa,
              numPages: this._numPages,
              annotationStorage: this.annotationStorage.serializable,
              filename: this._fullReader?.filename ?? null
            }).$$finally(() => {
              this.annotationStorage.resetModified();
            });
          }
          getFieldObjects() {
            return this._getFieldObjectsPromise ||= this.messageHandler.sendWithPromise("GetFieldObjects", null);
          }
          hasJSActions() {
            return this._hasJSActionsPromise ||= this.messageHandler.sendWithPromise("HasJSActions", null);
          }
          getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
          }
          getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
          }
          getDestination(e) {
            return "string" != typeof e ? Promise.reject(Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
              id: e
            });
          }
          getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
          }
          getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
          }
          getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
          }
          getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
          }
          getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
          }
          getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
          }
          getJavaScript() {
            return this.messageHandler.sendWithPromise("GetJavaScript", null);
          }
          getDocJSActions() {
            return this.messageHandler.sendWithPromise("GetDocJSActions", null);
          }
          getPageJSActions(e) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {
              pageIndex: e
            });
          }
          getStructTree(e) {
            return this.messageHandler.sendWithPromise("GetStructTree", {
              pageIndex: e
            });
          }
          getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
          }
          getOptionalContentConfig() {
            return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(e => new _optional_content_config.OptionalContentConfig(e));
          }
          getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
          }
          getMetadata() {
            return this.#s ||= this.messageHandler.sendWithPromise("GetMetadata", null).then(e => ({
              info: e[0],
              metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
              contentDispositionFilename: this._fullReader?.filename ?? null,
              contentLength: this._fullReader?.contentLength ?? null
            }));
          }
          getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
          }
          async startCleanup(e = !1) {
            if (await this.messageHandler.sendWithPromise("Cleanup", null), !this.destroyed) {
              for (let e of this.#t.values()) if (!e.cleanup()) throw Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
              this.commonObjs.clear();
              e || this.fontLoader.clear();
              this.#s = null;
              this._getFieldObjectsPromise = null;
              this._hasJSActionsPromise = null;
            }
          }
          get loadingParams() {
            let e = this._params;
            return _util.shadow(this, "loadingParams", {
              disableAutoFetch: e.disableAutoFetch,
              enableXfa: e.enableXfa
            });
          }
        }
        class PDFObjects {
          #a = Object.create(null);
          #i(e) {
            return this.#a[e] || (this.#a[e] = {
              capability: _util.createPromiseCapability(),
              data: null
            });
          }
          get(e, t = null) {
            if (t) {
              let r = this.#i(e);
              r.capability.promise.then(() => t(r.data));
              return null;
            }
            let r = this.#a[e];
            if (!r?.capability.settled) throw Error(`Requesting object that isn't resolved yet ${e}.`);
            return r.data;
          }
          has(e) {
            let t = this.#a[e];
            return t?.capability.settled || !1;
          }
          resolve(e, t = null) {
            let r = this.#i(e);
            r.data = t;
            r.capability.resolve();
          }
          clear() {
            this.#a = Object.create(null);
          }
        }
        class RenderTask {
          constructor(e) {
            this._internalRenderTask = e;
            this.onContinue = null;
          }
          get promise() {
            return this._internalRenderTask.capability.promise;
          }
          cancel() {
            this._internalRenderTask.cancel();
          }
        }
        exports.RenderTask = RenderTask;
        class InternalRenderTask {
          static get canvasInUse() {
            return _util.shadow(this, "canvasInUse", new WeakSet());
          }
          constructor({
            callback: e,
            params: t,
            objs: r,
            commonObjs: s,
            annotationCanvasMap: a,
            operatorList: i,
            pageIndex: n,
            canvasFactory: o,
            useRequestAnimationFrame: l = !1,
            pdfBug: h = !1
          }) {
            this.callback = e;
            this.params = t;
            this.objs = r;
            this.commonObjs = s;
            this.annotationCanvasMap = a;
            this.operatorListIdx = null;
            this.operatorList = i;
            this._pageIndex = n;
            this.canvasFactory = o;
            this._pdfBug = h;
            this.running = !1;
            this.graphicsReadyCallback = null;
            this.graphicsReady = !1;
            this._useRequestAnimationFrame = !0 === l && "undefined" != typeof window;
            this.cancelled = !1;
            this.capability = _util.createPromiseCapability();
            this.task = new RenderTask(this);
            this._cancelBound = this.cancel.bind(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = t.canvasContext.canvas;
          }
          get completed() {
            return this.capability.promise.catch(function() { });
          }
          initializeGraphics({
            transparency: e = !1,
            optionalContentConfig: t
          }) {
            if (this.cancelled) return;
            if (this._canvas) {
              if (InternalRenderTask.canvasInUse.has(this._canvas)) throw Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
              InternalRenderTask.canvasInUse.add(this._canvas);
            }
            this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
            let {
              canvasContext,
              viewport,
              transform,
              imageLayer,
              background
            } = this.params;
            this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, imageLayer, t, this.annotationCanvasMap);
            this.gfx.beginDrawing({
              transform,
              viewport,
              transparency: e,
              background
            });
            this.operatorListIdx = 0;
            this.graphicsReady = !0;
            this.graphicsReadyCallback && this.graphicsReadyCallback();
          }
          cancel(e = null) {
            this.running = !1;
            this.cancelled = !0;
            this.gfx && this.gfx.endDrawing();
            this._canvas && InternalRenderTask.canvasInUse.$$delete(this._canvas);
            this.callback(e || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"));
          }
          operatorListChanged() {
            if (!this.graphicsReady) {
              this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
              return;
            }
            this.stepper && this.stepper.updateOperatorList(this.operatorList);
            this.running || this._continue();
          }
          _continue() {
            this.running = !0;
            this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
          }
          _scheduleNext() {
            this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
              this._nextBound().catch(this._cancelBound);
            }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
          }
          async _next() {
            !this.cancelled && (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this._canvas && InternalRenderTask.canvasInUse.$$delete(this._canvas), this.callback())));
          }
        }
        let version = "2.13.216";
        exports.version = version;
        let build = "399a0ec60";
        exports.build = build;
      }, (e, t, r) => {
        let s;
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.StatTimer = t.RenderingCancelledException = t.PixelsPerInch = t.PageViewport = t.PDFDateString = t.DOMStandardFontDataFactory = t.DOMSVGFactory = t.DOMCanvasFactory = t.DOMCMapReaderFactory = void 0;
        t.deprecated = x;
        t.getFilenameFromUrl = A;
        t.getPdfFilenameFromUrl = b;
        t.getXfaPageViewport = C;
        t.isDataScheme = f;
        t.isPdfFile = m;
        t.isValidFetchUrl = y;
        t.loadScript = S;
        var a = r(6);
        var i = r(1);
        let n = "http://www.w3.org/2000/svg";
        class o {
          static CSS = 96;
          static PDF = 72;
          static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
        }
        t.PixelsPerInch = o;
        class l extends a.BaseCanvasFactory {
          constructor({
            ownerDocument: e = globalThis.document
          } = {}) {
            super();
            this._document = e;
          }
          _createCanvas(e, t) {
            let r = this._document.createElement("canvas");
            r.width = e;
            r.height = t;
            return r;
          }
        }
        async function h(e, t = !1) {
          if (y(e, document.baseURI)) {
            let r = await fetch(e);
            if (!r.ok) throw Error(r.statusText);
            return t ? new Uint8Array(await r.arrayBuffer()) : i.stringToBytes(await r.text());
          }
          return new Promise((r, s) => {
            let a = new XMLHttpRequest();
            a.open("GET", e, !0);
            t && (a.responseType = "arraybuffer");
            a.onreadystatechange = () => {
              if (a.readyState === XMLHttpRequest.DONE) {
                if (200 === a.status || 0 === a.status) {
                  let e;
                  if (t && a.response ? e = new Uint8Array(a.response) : !t && a.responseText && (e = i.stringToBytes(a.responseText)), e) {
                    r(e);
                    return;
                  }
                }
                s(Error(a.statusText));
              }
            };
            a.send(null);
          });
        }
        t.DOMCanvasFactory = l;
        class c extends a.BaseCMapReaderFactory {
          _fetchData(e, t) {
            return h(e, this.isCompressed).then(e => ({
              cMapData: e,
              compressionType: t
            }));
          }
        }
        t.DOMCMapReaderFactory = c;
        class d extends a.BaseStandardFontDataFactory {
          _fetchData(e) {
            return h(e, !0);
          }
        }
        t.DOMStandardFontDataFactory = d;
        class u extends a.BaseSVGFactory {
          _createSVG(e) {
            return document.createElementNS(n, e);
          }
        }
        t.DOMSVGFactory = u;
        class p {
          constructor({
            viewBox: e,
            scale: t,
            rotation: r,
            offsetX: s = 0,
            offsetY: a = 0,
            dontFlip: i = !1
          }) {
            let n;
            let o;
            let l;
            let h;
            let c;
            let d;
            let u;
            let p;
            this.viewBox = e;
            this.scale = t;
            this.rotation = r;
            this.offsetX = s;
            this.offsetY = a;
            let g = (e[2] + e[0]) / 2;
            let f = (e[3] + e[1]) / 2;
            switch ((r %= 360) < 0 && (r += 360), r) {
              case 180:
                n = -1;
                o = 0;
                l = 0;
                h = 1;
                break;
              case 90:
                n = 0;
                o = 1;
                l = 1;
                h = 0;
                break;
              case 270:
                n = 0;
                o = -1;
                l = -1;
                h = 0;
                break;
              case 0:
                n = 1;
                o = 0;
                l = 0;
                h = -1;
                break;
              default:
                throw Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            i && (l = -l, h = -h);
            0 === n ? (c = Math.abs(f - e[1]) * t + s, d = Math.abs(g - e[0]) * t + a, u = Math.abs(e[3] - e[1]) * t, p = Math.abs(e[2] - e[0]) * t) : (c = Math.abs(g - e[0]) * t + s, d = Math.abs(f - e[1]) * t + a, u = Math.abs(e[2] - e[0]) * t, p = Math.abs(e[3] - e[1]) * t);
            this.transform = [n * t, o * t, l * t, h * t, c - n * t * g - l * t * f, d - o * t * g - h * t * f];
            this.width = u;
            this.height = p;
          }
          clone({
            scale: e = this.scale,
            rotation: t = this.rotation,
            offsetX: r = this.offsetX,
            offsetY: s = this.offsetY,
            dontFlip: a = !1
          } = {}) {
            return new p({
              viewBox: this.viewBox.slice(),
              scale: e,
              rotation: t,
              offsetX: r,
              offsetY: s,
              dontFlip: a
            });
          }
          convertToViewportPoint(e, t) {
            return i.Util.applyTransform([e, t], this.transform);
          }
          convertToViewportRectangle(e) {
            let t = i.Util.applyTransform([e[0], e[1]], this.transform);
            let r = i.Util.applyTransform([e[2], e[3]], this.transform);
            return [t[0], t[1], r[0], r[1]];
          }
          convertToPdfPoint(e, t) {
            return i.Util.applyInverseTransform([e, t], this.transform);
          }
        }
        t.PageViewport = p;
        class g extends i.BaseException {
          constructor(e, t) {
            super(e, "RenderingCancelledException");
            this.type = t;
          }
        }
        function f(e) {
          let t = e.length;
          let r = 0;
          for (; r < t && "" === e[r].trim();) r++;
          return "data:" === e.substring(r, r + 5).toLowerCase();
        }
        function m(e) {
          return "string" == typeof e && /\.pdf$/i.test(e);
        }
        function A(e) {
          let t = e.indexOf("#");
          let r = e.indexOf("?");
          let s = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
          return e.substring(e.lastIndexOf("/", s) + 1, s);
        }
        function b(e, t = "document.pdf") {
          if ("string" != typeof e) return t;
          if (f(e)) {
            i.warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
            return t;
          }
          let r = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
          let s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e);
          let a = r.exec(s[1]) || r.exec(s[2]) || r.exec(s[3]);
          if (a && (a = a[0]).includes("%")) try {
            a = r.exec(decodeURIComponent(a))[0];
          } catch (e) { }
          return a || t;
        }
        t.RenderingCancelledException = g;
        class _ {
          constructor() {
            this.started = Object.create(null);
            this.times = [];
          }
          time(e) {
            e in this.started && i.warn(`Timer is already running for ${e}`);
            this.started[e] = Date.now();
          }
          timeEnd(e) {
            e in this.started || i.warn(`Timer has not been started for ${e}`);
            this.times.push({
              name: e,
              start: this.started[e],
              end: Date.now()
            });
            delete this.started[e];
          }
          toString() {
            let e = [];
            let t = 0;
            for (let e of this.times) {
              let r = e.name;
              r.length > t && (t = r.length);
            }
            for (let r of this.times) {
              let s = r.end - r.start;
              e.push(`${r.name.padEnd(t)} ${s}ms
`);
            }
            return e.join("");
          }
        }
        function y(e, t) {
          try {
            let {
              protocol
            } = t ? new URL(e, t) : new URL(e);
            return "http:" === protocol || "https:" === protocol;
          } catch (e) {
            return !1;
          }
        }
        function S(e, t = !1) {
          return new Promise((r, s) => {
            let a = document.createElement("script");
            a.src = e;
            a.onload = function(e) {
              t && a.remove();
              r(e);
            };
            a.onerror = function() {
              s(Error(`Cannot load script at: ${a.src}`));
            };
            (document.head || document.documentElement).appendChild(a);
          });
        }
        function x(e) {
          console.log("Deprecated API usage: " + e);
        }
        t.StatTimer = _;
        class v {
          static toDateObject(e) {
            if (!e || "string" != typeof e) return null;
            s || (s = RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
            let t = s.exec(e);
            if (!t) return null;
            let r = parseInt(t[1], 10);
            let a = parseInt(t[2], 10);
            a = a >= 1 && a <= 12 ? a - 1 : 0;
            let i = parseInt(t[3], 10);
            i = i >= 1 && i <= 31 ? i : 1;
            let n = parseInt(t[4], 10);
            n = n >= 0 && n <= 23 ? n : 0;
            let o = parseInt(t[5], 10);
            o = o >= 0 && o <= 59 ? o : 0;
            let l = parseInt(t[6], 10);
            l = l >= 0 && l <= 59 ? l : 0;
            let h = t[7] || "Z";
            let c = parseInt(t[8], 10);
            c = c >= 0 && c <= 23 ? c : 0;
            let d = parseInt(t[9], 10) || 0;
            d = d >= 0 && d <= 59 ? d : 0;
            "-" === h ? (n += c, o += d) : "+" === h && (n -= c, o -= d);
            return new Date(Date.UTC(r, a, i, n, o, l));
          }
        }
        function C(e, {
          scale: t = 1,
          rotation: r = 0
        }) {
          let {
            width,
            height
          } = e.attributes.style;
          return new p({
            viewBox: [0, 0, parseInt(width), parseInt(height)],
            scale: t,
            rotation: r
          });
        }
        t.PDFDateString = v;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.BaseStandardFontDataFactory = t.BaseSVGFactory = t.BaseCanvasFactory = t.BaseCMapReaderFactory = void 0;
        var s = r(1);
        class a {
          constructor() {
            this.constructor === a && s.unreachable("Cannot initialize BaseCanvasFactory.");
          }
          create(e, t) {
            if (e <= 0 || t <= 0) throw Error("Invalid canvas size");
            let r = this._createCanvas(e, t);
            return {
              canvas: r,
              context: r.getContext("2d")
            };
          }
          reset(e, t, r) {
            if (!e.canvas) throw Error("Canvas is not specified");
            if (t <= 0 || r <= 0) throw Error("Invalid canvas size");
            e.canvas.width = t;
            e.canvas.height = r;
          }
          destroy(e) {
            if (!e.canvas) throw Error("Canvas is not specified");
            e.canvas.width = 0;
            e.canvas.height = 0;
            e.canvas = null;
            e.context = null;
          }
          _createCanvas(e, t) {
            s.unreachable("Abstract method `_createCanvas` called.");
          }
        }
        t.BaseCanvasFactory = a;
        class i {
          constructor({
            baseUrl: e = null,
            isCompressed: t = !1
          }) {
            this.constructor === i && s.unreachable("Cannot initialize BaseCMapReaderFactory.");
            this.baseUrl = e;
            this.isCompressed = t;
          }
          async fetch({
            name: e
          }) {
            if (!this.baseUrl) throw Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
            if (!e) throw Error("CMap name must be specified.");
            let t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : "");
            let r = this.isCompressed ? s.CMapCompressionType.BINARY : s.CMapCompressionType.NONE;
            return this._fetchData(t, r).catch(e => {
              throw Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${t}`);
            });
          }
          _fetchData(e, t) {
            s.unreachable("Abstract method `_fetchData` called.");
          }
        }
        t.BaseCMapReaderFactory = i;
        class n {
          constructor({
            baseUrl: e = null
          }) {
            this.constructor === n && s.unreachable("Cannot initialize BaseStandardFontDataFactory.");
            this.baseUrl = e;
          }
          async fetch({
            filename: e
          }) {
            if (!this.baseUrl) throw Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
            if (!e) throw Error("Font filename must be specified.");
            let t = `${this.baseUrl}${e}`;
            return this._fetchData(t).catch(e => {
              throw Error(`Unable to load font data at: ${t}`);
            });
          }
          _fetchData(e) {
            s.unreachable("Abstract method `_fetchData` called.");
          }
        }
        t.BaseStandardFontDataFactory = n;
        class o {
          constructor() {
            this.constructor === o && s.unreachable("Cannot initialize BaseSVGFactory.");
          }
          create(e, t) {
            if (e <= 0 || t <= 0) throw Error("Invalid SVG dimensions");
            let r = this._createSVG("svg:svg");
            r.setAttribute("version", "1.1");
            r.setAttribute("width", `${e}px`);
            r.setAttribute("height", `${t}px`);
            r.setAttribute("preserveAspectRatio", "none");
            r.setAttribute("viewBox", `0 0 ${e} ${t}`);
            return r;
          }
          createElement(e) {
            if ("string" != typeof e) throw Error("Invalid SVG element type");
            return this._createSVG(e);
          }
          _createSVG(e) {
            s.unreachable("Abstract method `_createSVG` called.");
          }
        }
        t.BaseSVGFactory = o;
      }, (e, t, r) => {
        let s;
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.FontLoader = t.FontFaceObject = void 0;
        var a = r(1);
        class i {
          constructor({
            docId: e,
            onUnsupportedFeature: t,
            ownerDocument: r = globalThis.document,
            styleElement: s = null
          }) {
            this.constructor === i && a.unreachable("Cannot initialize BaseFontLoader.");
            this.docId = e;
            this._onUnsupportedFeature = t;
            this._document = r;
            this.nativeFontFaces = [];
            this.styleElement = null;
          }
          addNativeFontFace(e) {
            this.nativeFontFaces.push(e);
            this._document.fonts.add(e);
          }
          insertRule(e) {
            let t = this.styleElement;
            t || ((t = this.styleElement = this._document.createElement("style")).id = `PDFJS_FONT_STYLE_TAG_${this.docId}`, this._document.documentElement.getElementsByTagName("head")[0].appendChild(t));
            let r = t.sheet;
            r.insertRule(e, r.cssRules.length);
          }
          clear() {
            for (let e of this.nativeFontFaces) this._document.fonts.$$delete(e);
            this.nativeFontFaces.length = 0;
            this.styleElement && (this.styleElement.remove(), this.styleElement = null);
          }
          async bind(e) {
            if (e.attached || e.missingFile) return;
            if (e.attached = !0, this.isFontLoadingAPISupported) {
              let t = e.createNativeFontFace();
              if (t) {
                this.addNativeFontFace(t);
                try {
                  await t.loaded;
                } catch (r) {
                  this._onUnsupportedFeature({
                    featureId: a.UNSUPPORTED_FEATURES.errorFontLoadNative
                  });
                  a.warn(`Failed to load font '${t.family}': '${r}'.`);
                  e.disableFontFace = !0;
                  return r;
                }
              }
              return;
            }
            let t = e.createFontFaceRule();
            if (t) {
              if (this.insertRule(t), this.isSyncFontLoadingSupported) return;
              await new Promise(r => {
                let s = this._queueLoadingCallback(r);
                this._prepareFontLoadEvent([t], [e], s);
              });
            }
          }
          _queueLoadingCallback(e) {
            a.unreachable("Abstract method `_queueLoadingCallback`.");
          }
          get isFontLoadingAPISupported() {
            let e = !!this._document?.fonts;
            return a.shadow(this, "isFontLoadingAPISupported", e);
          }
          get isSyncFontLoadingSupported() {
            a.unreachable("Abstract method `isSyncFontLoadingSupported`.");
          }
          get _loadTestFont() {
            a.unreachable("Abstract method `_loadTestFont`.");
          }
          _prepareFontLoadEvent(e, t, r) {
            a.unreachable("Abstract method `_prepareFontLoadEvent`.");
          }
        }
        t.FontLoader = s;
        t.FontLoader = s = class extends i {
          constructor(e) {
            super(e);
            this.loadingContext = {
              requests: [],
              nextRequestId: 0
            };
            this.loadTestFontId = 0;
          }
          get isSyncFontLoadingSupported() {
            let e = !1;
            if ("undefined" == typeof navigator) e = !0; else {
              let t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
              t?.[1] >= 14 && (e = !0);
            }
            return a.shadow(this, "isSyncFontLoadingSupported", e);
          }
          _queueLoadingCallback(e) {
            function t() {
              for (a.assert(!s.done, "completeRequest() cannot be called twice."), s.done = !0; r.requests.length > 0 && r.requests[0].done;) setTimeout(r.requests.shift().callback, 0);
            }
            let r = this.loadingContext;
            let s = {
              id: `pdfjs-font-loading-${r.nextRequestId++}`,
              done: !1,
              complete: t,
              callback: e
            };
            r.requests.push(s);
            return s;
          }
          get _loadTestFont() {
            let e = function() {
              return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
            };
            return a.shadow(this, "_loadTestFont", e());
          }
          _prepareFontLoadEvent(e, t, r) {
            let s;
            let i;
            function n(e, t) {
              return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3);
            }
            function o(e, t, r, s) {
              return e.substring(0, t) + s + e.substring(t + r);
            }
            let l = this._document.createElement("canvas");
            l.width = 1;
            l.height = 1;
            let h = l.getContext("2d");
            let c = 0;
            function d(e, t) {
              if (++c > 30) {
                a.warn("Load test font never loaded.");
                t();
                return;
              }
              if (h.font = "30px " + e, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0) {
                t();
                return;
              }
              setTimeout(d.bind(null, e, t));
            }
            let u = `lt${Date.now()}${this.loadTestFontId++}`;
            let p = this._loadTestFont;
            p = o(p, 976, u.length, u);
            let g = 16;
            let f = 0x58585858;
            let m = n(p, 16);
            for (s = 0, i = u.length - 3; s < i; s += 4) m = m - f + n(u, s) | 0;
            s < u.length && (m = m - f + n(u + "XXX", s) | 0);
            p = o(p, g, 4, a.string32(m));
            let A = `url(data:font/opentype;base64,${btoa(p)});`;
            let b = `@font-face {font-family:"${u}";src:${A}}`;
            this.insertRule(b);
            let _ = [];
            for (let e of t) _.push(e.loadedName);
            _.push(u);
            let y = this._document.createElement("div");
            for (let e of (y.style.visibility = "hidden", y.style.width = y.style.height = "10px", y.style.position = "absolute", y.style.top = y.style.left = "0px", _)) {
              let t = this._document.createElement("span");
              t.textContent = "Hi";
              t.style.fontFamily = e;
              y.appendChild(t);
            }
            this._document.body.appendChild(y);
            d(u, () => {
              y.remove();
              r.complete();
            });
          }
        };
        class n {
          constructor(e, {
            isEvalSupported: t = !0,
            disableFontFace: r = !1,
            ignoreErrors: s = !1,
            onUnsupportedFeature: a,
            fontRegistry: i = null
          }) {
            for (let t in this.compiledGlyphs = Object.create(null), e) this[t] = e[t];
            this.isEvalSupported = !1 !== t;
            this.disableFontFace = !0 === r;
            this.ignoreErrors = !0 === s;
            this._onUnsupportedFeature = a;
            this.fontRegistry = i;
          }
          createNativeFontFace() {
            let e;
            if (!this.data || this.disableFontFace) return null;
            if (this.cssFontInfo) {
              let t = {
                weight: this.cssFontInfo.fontWeight
              };
              this.cssFontInfo.italicAngle && (t.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
              e = new FontFace(this.cssFontInfo.fontFamily, this.data, t);
            } else e = new FontFace(this.loadedName, this.data, {});
            this.fontRegistry && this.fontRegistry.registerFont(this);
            return e;
          }
          createFontFaceRule() {
            let e;
            if (!this.data || this.disableFontFace) return null;
            let t = a.bytesToString(this.data);
            let r = `url(data:${this.mimetype};base64,${btoa(t)});`;
            if (this.cssFontInfo) {
              let t = `font-weight: ${this.cssFontInfo.fontWeight};`;
              this.cssFontInfo.italicAngle && (t += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
              e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t}src:${r}}`;
            } else e = `@font-face {font-family:"${this.loadedName}";src:${r}}`;
            this.fontRegistry && this.fontRegistry.registerFont(this, r);
            return e;
          }
          getPathGenerator(e, t) {
            let r;
            if (void 0 !== this.compiledGlyphs[t]) return this.compiledGlyphs[t];
            try {
              r = e.get(this.loadedName + "_path_" + t);
            } catch (e) {
              if (!this.ignoreErrors) throw e;
              this._onUnsupportedFeature({
                featureId: a.UNSUPPORTED_FEATURES.errorFontGetPath
              });
              a.warn(`getPathGenerator - ignoring character: "${e}".`);
              return this.compiledGlyphs[t] = function(e, t) { };
            }
            if (this.isEvalSupported && a.IsEvalSupportedCached.value) {
              let e = [];
              for (let t of r) {
                let r = void 0 !== t.args ? t.args.join(",") : "";
                e.push("c.", t.cmd, "(", r, ");\n");
              }
              return this.compiledGlyphs[t] = Function("c", "size", e.join(""));
            }
            return this.compiledGlyphs[t] = function(e, t) {
              for (let s of r) {
                "scale" === s.cmd && (s.args = [t, -t]);
                e[s.cmd].apply(e, s.args);
              }
            };
          }
        }
        t.FontFaceObject = n;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.NodeStandardFontDataFactory = t.NodeCanvasFactory = t.NodeCMapReaderFactory = void 0;
        var s = r(6);
        var a = r(3);
        var i = r(1);
        let n = class {
          constructor() {
            i.unreachable("Not implemented: NodeCanvasFactory");
          }
        };
        t.NodeCanvasFactory = n;
        let o = class {
          constructor() {
            i.unreachable("Not implemented: NodeCMapReaderFactory");
          }
        };
        t.NodeCMapReaderFactory = o;
        let l = class {
          constructor() {
            i.unreachable("Not implemented: NodeStandardFontDataFactory");
          }
        };
        if (t.NodeStandardFontDataFactory = l, a.isNodeJS) {
          let e = function(e) {
            return new Promise((t, r) => {
              readFile(e, (e, s) => {
                if (e || !s) {
                  r(Error(e));
                  return;
                }
                t(new Uint8Array(s));
              });
            });
          };
          t.NodeCanvasFactory = n = class extends s.BaseCanvasFactory {
            _createCanvas(e, t) {
              return createCanvas(e, t);
            }
          };
          t.NodeCMapReaderFactory = o = class extends s.BaseCMapReaderFactory {
            _fetchData(t, r) {
              return e(t).then(e => ({
                cMapData: e,
                compressionType: r
              }));
            }
          };
          t.NodeStandardFontDataFactory = l = class extends s.BaseStandardFontDataFactory {
            _fetchData(t) {
              return e(t);
            }
          };
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.AnnotationStorage = void 0;
        var s = r(1);
        class a {
          constructor() {
            this._storage = new Map();
            this._timeStamp = Date.now();
            this._modified = !1;
            this.onSetModified = null;
            this.onResetModified = null;
          }
          getValue(e, t) {
            let r = this._storage.get(e);
            return void 0 === r ? t : Object.assign(t, r);
          }
          setValue(e, t) {
            let r = this._storage.get(e);
            let s = !1;
            if (void 0 !== r) for (let [e, a] of Object.entries(t)) r[e] !== a && (s = !0, r[e] = a); else {
              s = !0;
              this._storage.set(e, t);
            }
            s && (this._timeStamp = Date.now(), this._setModified());
          }
          getAll() {
            return this._storage.size > 0 ? s.objectFromMap(this._storage) : null;
          }
          get size() {
            return this._storage.size;
          }
          _setModified() {
            this._modified || (this._modified = !0, "function" == typeof this.onSetModified && this.onSetModified());
          }
          resetModified() {
            this._modified && (this._modified = !1, "function" == typeof this.onResetModified && this.onResetModified());
          }
          get serializable() {
            return this._storage.size > 0 ? this._storage : null;
          }
          get lastModified() {
            return this._timeStamp.toString();
          }
        }
        t.AnnotationStorage = a;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.CanvasGraphics = void 0;
        var s = r(1);
        var a = r(11);
        var i = r(5);
        let n = 16;
        let o = 100;
        let l = 4096;
        let h = 15;
        let c = 10;
        let d = !0;
        let u = 1e3;
        let p = 16;
        let g = 1.000001;
        function f(e, t) {
          if (e._removeMirroring) throw Error("Context is already forwarding operations.");
          e.__originalSave = e.save;
          e.__originalRestore = e.restore;
          e.__originalRotate = e.rotate;
          e.__originalScale = e.scale;
          e.__originalTranslate = e.translate;
          e.__originalTransform = e.transform;
          e.__originalSetTransform = e.setTransform;
          e.__originalResetTransform = e.resetTransform;
          e.__originalClip = e.clip;
          e.__originalMoveTo = e.moveTo;
          e.__originalLineTo = e.lineTo;
          e.__originalBezierCurveTo = e.bezierCurveTo;
          e.__originalRect = e.rect;
          e.__originalClosePath = e.closePath;
          e.__originalBeginPath = e.beginPath;
          e._removeMirroring = () => {
            e.save = e.__originalSave;
            e.restore = e.__originalRestore;
            e.rotate = e.__originalRotate;
            e.scale = e.__originalScale;
            e.translate = e.__originalTranslate;
            e.transform = e.__originalTransform;
            e.setTransform = e.__originalSetTransform;
            e.resetTransform = e.__originalResetTransform;
            e.clip = e.__originalClip;
            e.moveTo = e.__originalMoveTo;
            e.lineTo = e.__originalLineTo;
            e.bezierCurveTo = e.__originalBezierCurveTo;
            e.rect = e.__originalRect;
            e.closePath = e.__originalClosePath;
            e.beginPath = e.__originalBeginPath;
            delete e._removeMirroring;
          };
          e.save = function() {
            t.save();
            this.__originalSave();
          };
          e.restore = function() {
            t.restore();
            this.__originalRestore();
          };
          e.translate = function(e, r) {
            t.translate(e, r);
            this.__originalTranslate(e, r);
          };
          e.scale = function(e, r) {
            t.scale(e, r);
            this.__originalScale(e, r);
          };
          e.transform = function(e, r, s, a, i, n) {
            t.transform(e, r, s, a, i, n);
            this.__originalTransform(e, r, s, a, i, n);
          };
          e.setTransform = function(e, r, s, a, i, n) {
            t.setTransform(e, r, s, a, i, n);
            this.__originalSetTransform(e, r, s, a, i, n);
          };
          e.resetTransform = function() {
            t.resetTransform();
            this.__originalResetTransform();
          };
          e.rotate = function(e) {
            t.rotate(e);
            this.__originalRotate(e);
          };
          e.clip = function(e) {
            t.clip(e);
            this.__originalClip(e);
          };
          e.moveTo = function(e, r) {
            t.moveTo(e, r);
            this.__originalMoveTo(e, r);
          };
          e.lineTo = function(e, r) {
            t.lineTo(e, r);
            this.__originalLineTo(e, r);
          };
          e.bezierCurveTo = function(e, r, s, a, i, n) {
            t.bezierCurveTo(e, r, s, a, i, n);
            this.__originalBezierCurveTo(e, r, s, a, i, n);
          };
          e.rect = function(e, r, s, a) {
            t.rect(e, r, s, a);
            this.__originalRect(e, r, s, a);
          };
          e.closePath = function() {
            t.closePath();
            this.__originalClosePath();
          };
          e.beginPath = function() {
            t.beginPath();
            this.__originalBeginPath();
          };
        }
        function m(e) {
          if (e._transformStack && (e._transformStack = []), !e.mozCurrentTransform) {
            e._originalSave = e.save;
            e._originalRestore = e.restore;
            e._originalRotate = e.rotate;
            e._originalScale = e.scale;
            e._originalTranslate = e.translate;
            e._originalTransform = e.transform;
            e._originalSetTransform = e.setTransform;
            e._originalResetTransform = e.resetTransform;
            e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0];
            e._transformStack = [];
            try {
              let t = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "lineWidth");
              e._setLineWidth = t.set;
              e._getLineWidth = t.get;
              Object.defineProperty(e, "lineWidth", {
                set: function(e) {
                  this._setLineWidth(e * g);
                },
                get: function() {
                  return this._getLineWidth();
                }
              });
            } catch (e) { }
            Object.defineProperty(e, "mozCurrentTransform", {
              get: function() {
                return this._transformMatrix;
              }
            });
            Object.defineProperty(e, "mozCurrentTransformInverse", {
              get: function() {
                let [e, t, r, s, a, i] = this._transformMatrix;
                let n = e * s - t * r;
                let o = t * r - e * s;
                return [s / n, t / o, r / o, e / n, (s * a - r * i) / o, (t * a - e * i) / n];
              }
            });
            e.save = function() {
              let e = this._transformMatrix;
              this._transformStack.push(e);
              this._transformMatrix = e.slice(0, 6);
              this._originalSave();
            };
            e.restore = function() {
              0 === this._transformStack.length && s.warn("Tried to restore a ctx when the stack was already empty.");
              let e = this._transformStack.pop();
              e && (this._transformMatrix = e, this._originalRestore());
            };
            e.translate = function(e, t) {
              let r = this._transformMatrix;
              r[4] = r[0] * e + r[2] * t + r[4];
              r[5] = r[1] * e + r[3] * t + r[5];
              this._originalTranslate(e, t);
            };
            e.scale = function(e, t) {
              let r = this._transformMatrix;
              r[0] *= e;
              r[1] *= e;
              r[2] *= t;
              r[3] *= t;
              this._originalScale(e, t);
            };
            e.transform = function(t, r, s, a, i, n) {
              let o = this._transformMatrix;
              this._transformMatrix = [o[0] * t + o[2] * r, o[1] * t + o[3] * r, o[0] * s + o[2] * a, o[1] * s + o[3] * a, o[0] * i + o[2] * n + o[4], o[1] * i + o[3] * n + o[5]];
              e._originalTransform(t, r, s, a, i, n);
            };
            e.setTransform = function(t, r, s, a, i, n) {
              this._transformMatrix = [t, r, s, a, i, n];
              e._originalSetTransform(t, r, s, a, i, n);
            };
            e.resetTransform = function() {
              this._transformMatrix = [1, 0, 0, 1, 0, 0];
              e._originalResetTransform();
            };
            e.rotate = function(e) {
              let t = Math.cos(e);
              let r = Math.sin(e);
              let s = this._transformMatrix;
              this._transformMatrix = [s[0] * t + s[2] * r, s[1] * t + s[3] * r, -(s[0] * r) + s[2] * t, -(s[1] * r) + s[3] * t, s[4], s[5]];
              this._originalRotate(e);
            };
          }
        }
        class A {
          constructor(e) {
            this.canvasFactory = e;
            this.cache = Object.create(null);
          }
          getCanvas(e, t, r, s) {
            let a;
            void 0 !== this.cache[e] ? (a = this.cache[e], this.canvasFactory.reset(a, t, r), a.context.setTransform(1, 0, 0, 1, 0, 0)) : (a = this.canvasFactory.create(t, r), this.cache[e] = a);
            s && m(a.context);
            return a;
          }
          clear() {
            for (let e in this.cache) {
              let t = this.cache[e];
              this.canvasFactory.destroy(t);
              delete this.cache[e];
            }
          }
        }
        function b(e) {
          let t;
          let r;
          let s;
          let a;
          let i = 1e3;
          let n = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
          let o = e.width;
          let l = e.height;
          let h = o + 1;
          let c = new Uint8Array(h * (l + 1));
          let d = o + 7 & -8;
          let u = e.data;
          let p = new Uint8Array(d * l);
          let g = 0;
          for (t = 0, r = u.length; t < r; t++) {
            let e = u[t];
            let r = 128;
            for (; r > 0;) {
              p[g++] = e & r ? 0 : 255;
              r >>= 1;
            }
          }
          let f = 0;
          for (0 !== p[g = 0] && (c[0] = 1, ++f), s = 1; s < o; s++) {
            p[g] !== p[g + 1] && (c[s] = p[g] ? 2 : 1, ++f);
            g++;
          }
          for (0 !== p[g] && (c[s] = 2, ++f), t = 1; t < l; t++) {
            g = t * d;
            a = t * h;
            p[g - d] !== p[g] && (c[a] = p[g] ? 1 : 8, ++f);
            let e = (p[g] ? 4 : 0) + (p[g - d] ? 8 : 0);
            for (s = 1; s < o; s++) {
              n[e = (e >> 2) + (p[g + 1] ? 4 : 0) + (p[g - d + 1] ? 8 : 0)] && (c[a + s] = n[e], ++f);
              g++;
            }
            if (p[g - d] !== p[g] && (c[a + s] = p[g] ? 2 : 4, ++f), f > i) return null;
          }
          for (g = d * (l - 1), a = t * h, 0 !== p[g] && (c[a] = 8, ++f), s = 1; s < o; s++) {
            p[g] !== p[g + 1] && (c[a + s] = p[g] ? 4 : 8, ++f);
            g++;
          }
          if (0 !== p[g] && (c[a + s] = 4, ++f), f > i) return null;
          let m = new Int32Array([0, h, -1, 0, -h, 0, 0, 0, 1]);
          let A = [];
          for (t = 0; f && t <= l; t++) {
            let e = t * h;
            let r = e + o;
            for (; e < r && !c[e];) e++;
            if (e === r) continue;
            let s = [e % h, t];
            let a = e;
            let i = c[e];
            do {
              let t = m[i];
              do e += t; while (!c[e]);
              let r = c[e];
              5 !== r && 10 !== r ? (i = r, c[e] = 0) : (i = r & 51 * i >> 4, c[e] &= i >> 2 | i << 2);
              s.push(e % h, e / h | 0);
              !c[e] && --f;
            } while (a !== e);
            A.push(s);
            --t;
          }
          return function(e) {
            e.save();
            e.scale(1 / o, -1 / l);
            e.translate(0, -l);
            e.beginPath();
            for (function() {
              let t = 0;
              let r = A.length;
            }(); t < r; t++) {
              let r = A[t];
              e.moveTo(r[0], r[1]);
              for (function() {
                let t = 2;
                let s = r.length;
              }(); t < s; t += 2) e.lineTo(r[t], r[t + 1]);
            }
            e.fill();
            e.beginPath();
            e.restore();
          };
        }
        class _ {
          constructor(e, t) {
            this.alphaIsShape = !1;
            this.fontSize = 0;
            this.fontSizeScale = 1;
            this.textMatrix = s.IDENTITY_MATRIX;
            this.textMatrixScale = 1;
            this.fontMatrix = s.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRenderingMode = s.TextRenderingMode.FILL;
            this.textRise = 0;
            this.fillColor = "#000000";
            this.strokeColor = "#000000";
            this.patternFill = !1;
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.activeSMask = null;
            this.transferMaps = null;
            this.startNewPathAndClipBox([0, 0, e, t]);
          }
          clone() {
            let e = Object.create(this);
            e.clipBox = this.clipBox.slice();
            return e;
          }
          setCurrentPoint(e, t) {
            this.x = e;
            this.y = t;
          }
          updatePathMinMax(e, t, r) {
            [t, r] = s.Util.applyTransform([t, r], e);
            this.minX = Math.min(this.minX, t);
            this.minY = Math.min(this.minY, r);
            this.maxX = Math.max(this.maxX, t);
            this.maxY = Math.max(this.maxY, r);
          }
          updateCurvePathMinMax(e, t, r, a, i, n, o, l, h) {
            let c = s.Util.bezierBoundingBox(t, r, a, i, n, o, l, h);
            this.updatePathMinMax(e, c[0], c[1]);
            this.updatePathMinMax(e, c[2], c[3]);
          }
          getPathBoundingBox(e = a.PathType.FILL, t = null) {
            let r = [this.minX, this.minY, this.maxX, this.maxY];
            if (e === a.PathType.STROKE) {
              t || s.unreachable("Stroke bounding box must include transform.");
              let e = s.Util.singularValueDecompose2dScale(t);
              let a = e[0] * this.lineWidth / 2;
              let i = e[1] * this.lineWidth / 2;
              r[0] -= a;
              r[1] -= i;
              r[2] += a;
              r[3] += i;
            }
            return r;
          }
          updateClipFromPath() {
            let e = s.Util.intersect(this.clipBox, this.getPathBoundingBox());
            this.startNewPathAndClipBox(e || [0, 0, 0, 0]);
          }
          startNewPathAndClipBox(e) {
            this.clipBox = e;
            this.minX = 1 / 0;
            this.minY = 1 / 0;
            this.maxX = 0;
            this.maxY = 0;
          }
          getClippedPathBoundingBox(e = a.PathType.FILL, t = null) {
            return s.Util.intersect(this.clipBox, this.getPathBoundingBox(e, t));
          }
        }
        function y(e, t, r = null) {
          let a;
          let i;
          let n;
          let o;
          let l;
          let h;
          let c;
          let d;
          if ("undefined" != typeof ImageData && t instanceof ImageData) {
            e.putImageData(t, 0, 0);
            return;
          }
          let u = t.height;
          let g = t.width;
          let f = u % p;
          let m = (u - f) / p;
          let A = 0 === f ? m : m + 1;
          let b = e.createImageData(g, p);
          let _ = 0;
          let S;
          let x = t.data;
          let v = b.data;
          if (r) switch (r.length) {
            case 1:
              l = r[0];
              h = r[0];
              c = r[0];
              d = r[0];
              break;
            case 4:
              l = r[0];
              h = r[1];
              c = r[2];
              d = r[3];
          }
          if (t.kind === s.ImageKind.GRAYSCALE_1BPP) {
            let t = x.byteLength;
            let r = new Uint32Array(v.buffer, 0, v.byteLength >> 2);
            let o = r.length;
            let l = g + 7 >> 3;
            let h = 0xffffffff;
            let c = s.IsLittleEndianCached.value ? 0xff000000 : 255;
            for (d && 255 === d[0] && 0 === d[255] && ([h, c] = [c, h]), a = 0; a < A; a++) {
              for (i = 0, n = a < m ? p : f, S = 0; i < n; i++) {
                let e = t - _;
                let s = 0;
                let a = e > l ? g : 8 * e - 7;
                let i = -8 & a;
                let n = 0;
                let o = 0;
                for (; s < i; s += 8) {
                  o = x[_++];
                  r[S++] = 128 & o ? h : c;
                  r[S++] = 64 & o ? h : c;
                  r[S++] = 32 & o ? h : c;
                  r[S++] = 16 & o ? h : c;
                  r[S++] = 8 & o ? h : c;
                  r[S++] = 4 & o ? h : c;
                  r[S++] = 2 & o ? h : c;
                  r[S++] = 1 & o ? h : c;
                }
                for (; s < a; s++) {
                  0 === n && (o = x[_++], n = 128);
                  r[S++] = o & n ? h : c;
                  n >>= 1;
                }
              }
              for (; S < o;) r[S++] = 0;
              e.putImageData(b, 0, a * p);
            }
          } else if (t.kind === s.ImageKind.RGBA_32BPP) {
            let t = !!(l || h || c);
            for (a = 0, i = 0, o = g * p * 4; a < m; a++) {
              if (v.set(x.subarray(_, _ + o)), _ += o, t) for (let e = 0; e < o; e += 4) {
                l && (v[e + 0] = l[v[e + 0]]);
                h && (v[e + 1] = h[v[e + 1]]);
                c && (v[e + 2] = c[v[e + 2]]);
              }
              e.putImageData(b, 0, i);
              i += p;
            }
            if (a < A) {
              if (o = g * f * 4, v.set(x.subarray(_, _ + o)), t) for (let e = 0; e < o; e += 4) {
                l && (v[e + 0] = l[v[e + 0]]);
                h && (v[e + 1] = h[v[e + 1]]);
                c && (v[e + 2] = c[v[e + 2]]);
              }
              e.putImageData(b, 0, i);
            }
          } else if (t.kind === s.ImageKind.RGB_24BPP) {
            let t = !!(l || h || c);
            for (a = 0, o = g * (n = p); a < A; a++) {
              for (a >= m && (o = g * (n = f)), S = 0, i = o; i--;) {
                v[S++] = x[_++];
                v[S++] = x[_++];
                v[S++] = x[_++];
                v[S++] = 255;
              }
              if (t) for (let e = 0; e < S; e += 4) {
                l && (v[e + 0] = l[v[e + 0]]);
                h && (v[e + 1] = h[v[e + 1]]);
                c && (v[e + 2] = c[v[e + 2]]);
              }
              e.putImageData(b, 0, a * p);
            }
          } else throw Error(`bad image kind: ${t.kind}`);
        }
        function S(e, t) {
          let r = t.height;
          let s = t.width;
          let a = r % p;
          let i = (r - a) / p;
          let n = 0 === a ? i : i + 1;
          let o = e.createImageData(s, p);
          let l = 0;
          let h = t.data;
          let c = o.data;
          for (let t = 0; t < n; t++) {
            let r = t < i ? p : a;
            let n = 3;
            for (let e = 0; e < r; e++) {
              let e;
              let t = 0;
              for (let r = 0; r < s; r++) {
                t || (e = h[l++], t = 128);
                c[n] = e & t ? 0 : 255;
                n += 4;
                t >>= 1;
              }
            }
            e.putImageData(o, 0, t * p);
          }
        }
        function x(e, t) {
          let r = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
          for (function() {
            let s = 0;
            let a = r.length;
          }(); s < a; s++) {
            let a = r[s];
            void 0 !== e[a] && (t[a] = e[a]);
          }
          void 0 !== e.setLineDash && (t.setLineDash(e.getLineDash()), t.lineDashOffset = e.lineDashOffset);
        }
        function v(e) {
          e.strokeStyle = "#000000";
          e.fillStyle = "#000000";
          e.fillRule = "nonzero";
          e.globalAlpha = 1;
          e.lineWidth = 1;
          e.lineCap = "butt";
          e.lineJoin = "miter";
          e.miterLimit = 10;
          e.globalCompositeOperation = "source-over";
          e.font = "10px sans-serif";
          void 0 !== e.setLineDash && (e.setLineDash([]), e.lineDashOffset = 0);
        }
        function C(e, t, r, s) {
          let a = e.length;
          for (let i = 3; i < a; i += 4) {
            let a = e[i];
            if (0 === a) {
              e[i - 3] = t;
              e[i - 2] = r;
              e[i - 1] = s;
            } else if (a < 255) {
              let n = 255 - a;
              e[i - 3] = e[i - 3] * a + t * n >> 8;
              e[i - 2] = e[i - 2] * a + r * n >> 8;
              e[i - 1] = e[i - 1] * a + s * n >> 8;
            }
          }
        }
        function P(e, t, r) {
          let s = e.length;
          let a = 1 / 255;
          for (let i = 3; i < s; i += 4) {
            let s = r ? r[e[i]] : e[i];
            t[i] = t[i] * s * a | 0;
          }
        }
        function T(e, t, r) {
          let s = e.length;
          for (let a = 3; a < s; a += 4) {
            let s = 77 * e[a - 3] + 152 * e[a - 2] + 28 * e[a - 1];
            t[a] = r ? t[a] * r[s >> 8] >> 8 : t[a] * s >> 16;
          }
        }
        function k(e, t, r, s, a, i, n, o, l, h, c) {
          let d;
          let u = !!i;
          let p = u ? i[0] : 0;
          let g = u ? i[1] : 0;
          let f = u ? i[2] : 0;
          d = "Luminosity" === a ? T : P;
          let m = Math.min(s, Math.ceil(1048576 / r));
          for (let a = 0; a < s; a += m) {
            let i = Math.min(m, s - a);
            let A = e.getImageData(o - h, a + (l - c), r, i);
            let b = t.getImageData(o, a + l, r, i);
            u && C(A.data, p, g, f);
            d(A.data, b.data, n);
            t.putImageData(b, o, a + l);
          }
        }
        function R(e, t, r, s) {
          let a = s[0];
          let i = s[1];
          let n = s[2] - a;
          let o = s[3] - i;
          0 !== n && 0 !== o && (k(t.context, r, n, o, t.subtype, t.backdrop, t.transferMap, a, i, t.offsetX, t.offsetY), e.save(), e.globalAlpha = 1, e.globalCompositeOperation = "source-over", e.setTransform(1, 0, 0, 1, 0, 0), e.drawImage(r.canvas, 0, 0), e.restore());
        }
        function w(e, t) {
          let r = s.Util.singularValueDecompose2dScale(e);
          r[0] = Math.fround(r[0]);
          r[1] = Math.fround(r[1]);
          let a = Math.fround((globalThis.devicePixelRatio || 1) * i.PixelsPerInch.PDF_TO_CSS_UNITS);
          return void 0 !== t ? t : r[0] <= a || r[1] <= a;
        }
        let E = ["butt", "round", "square"];
        let F = ["miter", "round", "bevel"];
        let M = {};
        let O = {};
        class L {
          constructor(e, t, r, s, a, i, n) {
            this.ctx = e;
            this.current = new _(this.ctx.canvas.width, this.ctx.canvas.height);
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = !1;
            this.res = null;
            this.xobjs = null;
            this.commonObjs = t;
            this.objs = r;
            this.canvasFactory = s;
            this.imageLayer = a;
            this.groupStack = [];
            this.processingType3 = null;
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.suspendedCtx = null;
            this.contentVisible = !0;
            this.markedContentStack = [];
            this.optionalContentConfig = i;
            this.cachedCanvases = new A(this.canvasFactory);
            this.cachedPatterns = new Map();
            this.annotationCanvasMap = n;
            this.viewportScale = 1;
            this.outputScaleX = 1;
            this.outputScaleY = 1;
            e && m(e);
            this._cachedGetSinglePixelWidth = null;
          }
          beginDrawing({
            transform: e,
            viewport: t,
            transparency: r = !1,
            background: s = null
          }) {
            let a = this.ctx.canvas.width;
            let i = this.ctx.canvas.height;
            if (this.ctx.save(), this.ctx.fillStyle = s || "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, a, i), this.ctx.restore(), r) {
              let e = this.cachedCanvases.getCanvas("transparent", a, i, !0);
              this.compositeCtx = this.ctx;
              this.transparentCanvas = e.canvas;
              this.ctx = e.context;
              this.ctx.save();
              this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
            }
            this.ctx.save();
            v(this.ctx);
            e && (this.ctx.transform.apply(this.ctx, e), this.outputScaleX = e[0], this.outputScaleY = e[0]);
            this.ctx.transform.apply(this.ctx, t.transform);
            this.viewportScale = t.scale;
            this.baseTransform = this.ctx.mozCurrentTransform.slice();
            this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]);
            this.imageLayer && this.imageLayer.beginLayout();
          }
          executeOperatorList(e, t, r, a) {
            let i;
            let n = e.argsArray;
            let o = e.fnArray;
            let l = t || 0;
            let d = n.length;
            if (d === l) return l;
            let u = d - l > c && "function" == typeof r;
            let p = u ? Date.now() + h : 0;
            let g = 0;
            let f = this.commonObjs;
            let m = this.objs;
            for (; ;) {
              if (void 0 !== a && l === a.nextBreakPoint) {
                a.breakIt(l, r);
                return l;
              }
              if ((i = o[l]) !== s.OPS.dependency) this[i].apply(this, n[l]); else for (let e of n[l]) {
                let t = e.startsWith("g_") ? f : m;
                if (!t.has(e)) {
                  t.get(e, r);
                  return l;
                }
              }
              if (++l === d) return l;
              if (u && ++g > c) {
                if (Date.now() > p) {
                  r();
                  return l;
                }
                g = 0;
              }
            }
          }
          endDrawing() {
            for (; this.stateStack.length || this.inSMaskMode;) this.restore();
            this.ctx.restore();
            this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
            this.cachedCanvases.clear();
            this.cachedPatterns.clear();
            this.imageLayer && this.imageLayer.endLayout();
          }
          _scaleImage(e, t) {
            let r;
            let s;
            let a = e.width;
            let i = e.height;
            let n = Math.max(Math.hypot(t[0], t[1]), 1);
            let o = Math.max(Math.hypot(t[2], t[3]), 1);
            let l = a;
            let h = i;
            let c = "prescale1";
            for (; n > 2 && l > 1 || o > 2 && h > 1;) {
              let t = l;
              let a = h;
              n > 2 && l > 1 && (t = Math.ceil(l / 2), n /= l / t);
              o > 2 && h > 1 && (a = Math.ceil(h / 2), o /= h / a);
              (s = (r = this.cachedCanvases.getCanvas(c, t, a)).context).clearRect(0, 0, t, a);
              s.drawImage(e, 0, 0, l, h, 0, 0, t, a);
              e = r.canvas;
              l = t;
              h = a;
              c = "prescale1" === c ? "prescale2" : "prescale1";
            }
            return {
              img: e,
              paintWidth: l,
              paintHeight: h
            };
          }
          _createMaskCanvas(e) {
            let t = this.ctx;
            let r = e.width;
            let i = e.height;
            let n = this.current.fillColor;
            let o = this.current.patternFill;
            let l = this.cachedCanvases.getCanvas("maskCanvas", r, i);
            S(l.context, e);
            let h = t.mozCurrentTransform;
            let c = s.Util.transform(h, [1 / r, 0, 0, -1 / i, 0, 0]);
            c = s.Util.transform(c, [1, 0, 0, 1, 0, -i]);
            let d = s.Util.applyTransform([0, 0], c);
            let u = s.Util.applyTransform([r, i], c);
            let p = s.Util.normalizeRect([d[0], d[1], u[0], u[1]]);
            let g = Math.ceil(p[2] - p[0]);
            let f = Math.ceil(p[3] - p[1]);
            let m = this.cachedCanvases.getCanvas("fillCanvas", g, f, !0);
            let A = m.context;
            let b = Math.min(d[0], u[0]);
            let _ = Math.min(d[1], u[1]);
            A.translate(-b, -_);
            A.transform.apply(A, c);
            let y = this._scaleImage(l.canvas, A.mozCurrentTransformInverse);
            A.imageSmoothingEnabled = w(A.mozCurrentTransform, e.interpolate);
            A.drawImage(y.img, 0, 0, y.img.width, y.img.height, 0, 0, r, i);
            A.globalCompositeOperation = "source-in";
            let x = s.Util.transform(A.mozCurrentTransformInverse, [1, 0, 0, 1, -b, -_]);
            A.fillStyle = o ? n.getPattern(t, this, x, a.PathType.FILL) : n;
            A.fillRect(0, 0, r, i);
            return {
              canvas: m.canvas,
              offsetX: Math.round(b),
              offsetY: Math.round(_)
            };
          }
          setLineWidth(e) {
            this.current.lineWidth = e;
            this.ctx.lineWidth = e;
          }
          setLineCap(e) {
            this.ctx.lineCap = E[e];
          }
          setLineJoin(e) {
            this.ctx.lineJoin = F[e];
          }
          setMiterLimit(e) {
            this.ctx.miterLimit = e;
          }
          setDash(e, t) {
            let r = this.ctx;
            void 0 !== r.setLineDash && (r.setLineDash(e), r.lineDashOffset = t);
          }
          setRenderingIntent(e) { }
          setFlatness(e) { }
          setGState(e) {
            for (function() {
              let t = 0;
              let r = e.length;
            }(); t < r; t++) {
              let r = e[t];
              let s = r[0];
              let a = r[1];
              switch (s) {
                case "LW":
                  this.setLineWidth(a);
                  break;
                case "LC":
                  this.setLineCap(a);
                  break;
                case "LJ":
                  this.setLineJoin(a);
                  break;
                case "ML":
                  this.setMiterLimit(a);
                  break;
                case "D":
                  this.setDash(a[0], a[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(a);
                  break;
                case "FL":
                  this.setFlatness(a);
                  break;
                case "Font":
                  this.setFont(a[0], a[1]);
                  break;
                case "CA":
                  this.current.strokeAlpha = r[1];
                  break;
                case "ca":
                  this.current.fillAlpha = r[1];
                  this.ctx.globalAlpha = r[1];
                  break;
                case "BM":
                  this.ctx.globalCompositeOperation = a;
                  break;
                case "SMask":
                  this.current.activeSMask = a ? this.tempSMask : null;
                  this.tempSMask = null;
                  this.checkSMaskState();
                  break;
                case "TR":
                  this.current.transferMaps = a;
              }
            }
          }
          get inSMaskMode() {
            return !!this.suspendedCtx;
          }
          checkSMaskState() {
            let e = this.inSMaskMode;
            this.current.activeSMask && !e ? this.beginSMaskMode() : !this.current.activeSMask && e && this.endSMaskMode();
          }
          beginSMaskMode() {
            if (this.inSMaskMode) throw Error("beginSMaskMode called while already in smask mode");
            let e = this.ctx.canvas.width;
            let t = this.ctx.canvas.height;
            let r = "smaskGroupAt" + this.groupLevel;
            let s = this.cachedCanvases.getCanvas(r, e, t, !0);
            this.suspendedCtx = this.ctx;
            this.ctx = s.context;
            let a = this.ctx;
            a.setTransform.apply(a, this.suspendedCtx.mozCurrentTransform);
            x(this.suspendedCtx, a);
            f(a, this.suspendedCtx);
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
          }
          endSMaskMode() {
            if (!this.inSMaskMode) throw Error("endSMaskMode called while not in smask mode");
            this.ctx._removeMirroring();
            x(this.ctx, this.suspendedCtx);
            this.ctx = this.suspendedCtx;
            this.suspendedCtx = null;
          }
          compose(e) {
            if (!this.current.activeSMask) return;
            e ? (e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.ceil(e[2]), e[3] = Math.ceil(e[3])) : e = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
            let t = this.current.activeSMask;
            R(this.suspendedCtx, t, this.ctx, e);
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.restore();
          }
          save() {
            this.inSMaskMode ? (x(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
            let e = this.current;
            this.stateStack.push(e);
            this.current = e.clone();
          }
          restore() {
            0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode();
            0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), x(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedGetSinglePixelWidth = null);
          }
          transform(e, t, r, s, a, i) {
            this.ctx.transform(e, t, r, s, a, i);
            this._cachedGetSinglePixelWidth = null;
          }
          constructPath(e, t) {
            let r;
            let a;
            let i = this.ctx;
            let n = this.current;
            let o = n.x;
            let l = n.y;
            for (function() {
              let h = 0;
              let c = 0;
              let d = e.length;
            }(); h < d; h++) switch (0 | e[h]) {
              case s.OPS.rectangle:
                o = t[c++];
                l = t[c++];
                let d = t[c++];
                let u = t[c++];
                let p = o + d;
                let g = l + u;
                i.moveTo(o, l);
                0 === d || 0 === u ? i.lineTo(p, g) : (i.lineTo(p, l), i.lineTo(p, g), i.lineTo(o, g));
                n.updatePathMinMax(i.mozCurrentTransform, o, l);
                n.updatePathMinMax(i.mozCurrentTransform, p, g);
                i.closePath();
                break;
              case s.OPS.moveTo:
                o = t[c++];
                l = t[c++];
                i.moveTo(o, l);
                n.updatePathMinMax(i.mozCurrentTransform, o, l);
                break;
              case s.OPS.lineTo:
                o = t[c++];
                l = t[c++];
                i.lineTo(o, l);
                n.updatePathMinMax(i.mozCurrentTransform, o, l);
                break;
              case s.OPS.curveTo:
                r = o;
                a = l;
                o = t[c + 4];
                l = t[c + 5];
                i.bezierCurveTo(t[c], t[c + 1], t[c + 2], t[c + 3], o, l);
                n.updateCurvePathMinMax(i.mozCurrentTransform, r, a, t[c], t[c + 1], t[c + 2], t[c + 3], o, l);
                c += 6;
                break;
              case s.OPS.curveTo2:
                r = o;
                a = l;
                i.bezierCurveTo(o, l, t[c], t[c + 1], t[c + 2], t[c + 3]);
                n.updateCurvePathMinMax(i.mozCurrentTransform, r, a, o, l, t[c], t[c + 1], t[c + 2], t[c + 3]);
                o = t[c + 2];
                l = t[c + 3];
                c += 4;
                break;
              case s.OPS.curveTo3:
                r = o;
                a = l;
                o = t[c + 2];
                l = t[c + 3];
                i.bezierCurveTo(t[c], t[c + 1], o, l, o, l);
                n.updateCurvePathMinMax(i.mozCurrentTransform, r, a, t[c], t[c + 1], o, l, o, l);
                c += 4;
                break;
              case s.OPS.closePath:
                i.closePath();
            }
            n.setCurrentPoint(o, l);
          }
          closePath() {
            this.ctx.closePath();
          }
          stroke(e) {
            e = void 0 === e || e;
            let t = this.ctx;
            let r = this.current.strokeColor;
            if (t.globalAlpha = this.current.strokeAlpha, this.contentVisible) {
              if ("object" == typeof r && r?.getPattern) {
                let e = this.getSinglePixelWidth();
                t.save();
                t.strokeStyle = r.getPattern(t, this, t.mozCurrentTransformInverse, a.PathType.STROKE);
                t.lineWidth = Math.max(e, this.current.lineWidth);
                t.stroke();
                t.restore();
              } else {
                let e = this.getSinglePixelWidth();
                e < 0 && -e >= this.current.lineWidth ? (t.save(), t.resetTransform(), t.lineWidth = Math.floor(this._combinedScaleFactor), t.stroke(), t.restore()) : (t.lineWidth = Math.max(e, this.current.lineWidth), t.stroke());
              }
            }
            e && this.consumePath(this.current.getClippedPathBoundingBox());
            t.globalAlpha = this.current.fillAlpha;
          }
          closeStroke() {
            this.closePath();
            this.stroke();
          }
          fill(e) {
            e = void 0 === e || e;
            let t = this.ctx;
            let r = this.current.fillColor;
            let s = this.current.patternFill;
            let i = !1;
            s && (t.save(), t.fillStyle = r.getPattern(t, this, t.mozCurrentTransformInverse, a.PathType.FILL), i = !0);
            let n = this.current.getClippedPathBoundingBox();
            this.contentVisible && null !== n && (this.pendingEOFill ? (t.fill("evenodd"), this.pendingEOFill = !1) : t.fill());
            i && t.restore();
            e && this.consumePath(n);
          }
          eoFill() {
            this.pendingEOFill = !0;
            this.fill();
          }
          fillStroke() {
            this.fill(!1);
            this.stroke(!1);
            this.consumePath();
          }
          eoFillStroke() {
            this.pendingEOFill = !0;
            this.fillStroke();
          }
          closeFillStroke() {
            this.closePath();
            this.fillStroke();
          }
          closeEOFillStroke() {
            this.pendingEOFill = !0;
            this.closePath();
            this.fillStroke();
          }
          endPath() {
            this.consumePath();
          }
          clip() {
            this.pendingClip = M;
          }
          eoClip() {
            this.pendingClip = O;
          }
          beginText() {
            this.current.textMatrix = s.IDENTITY_MATRIX;
            this.current.textMatrixScale = 1;
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          }
          endText() {
            let e = this.pendingTextPaths;
            let t = this.ctx;
            if (void 0 === e) {
              t.beginPath();
              return;
            }
            t.save();
            t.beginPath();
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              t.setTransform.apply(t, s.transform);
              t.translate(s.x, s.y);
              s.addToPath(t, s.fontSize);
            }
            t.restore();
            t.clip();
            t.beginPath();
            delete this.pendingTextPaths;
          }
          setCharSpacing(e) {
            this.current.charSpacing = e;
          }
          setWordSpacing(e) {
            this.current.wordSpacing = e;
          }
          setHScale(e) {
            this.current.textHScale = e / 100;
          }
          setLeading(e) {
            this.current.leading = -e;
          }
          setFont(e, t) {
            let r = this.commonObjs.get(e);
            let a = this.current;
            if (!r) throw Error(`Can't find font for ${e}`);
            if (a.fontMatrix = r.fontMatrix || s.FONT_IDENTITY_MATRIX, (0 === a.fontMatrix[0] || 0 === a.fontMatrix[3]) && s.warn("Invalid font matrix for font " + e), t < 0 ? (t = -t, a.fontDirection = -1) : a.fontDirection = 1, this.current.font = r, this.current.fontSize = t, r.isType3Font) return;
            let i = r.loadedName || "sans-serif";
            let l = "normal";
            r.black ? l = "900" : r.bold && (l = "bold");
            let h = r.italic ? "italic" : "normal";
            let c = `"${i}", ${r.fallbackName}`;
            let d = t;
            t < n ? d = n : t > o && (d = o);
            this.current.fontSizeScale = t / d;
            this.ctx.font = `${h} ${l} ${d}px ${c}`;
          }
          setTextRenderingMode(e) {
            this.current.textRenderingMode = e;
          }
          setTextRise(e) {
            this.current.textRise = e;
          }
          moveText(e, t) {
            this.current.x = this.current.lineX += e;
            this.current.y = this.current.lineY += t;
          }
          setLeadingMoveText(e, t) {
            this.setLeading(-t);
            this.moveText(e, t);
          }
          setTextMatrix(e, t, r, s, a, i) {
            this.current.textMatrix = [e, t, r, s, a, i];
            this.current.textMatrixScale = Math.hypot(e, t);
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          }
          nextLine() {
            this.moveText(0, this.current.leading);
          }
          paintChar(e, t, r, a, i) {
            let n;
            let o = this.ctx;
            let l = this.current;
            let h = l.font;
            let c = l.textRenderingMode;
            let d = l.fontSize / l.fontSizeScale;
            let u = c & s.TextRenderingMode.FILL_STROKE_MASK;
            let p = !!(c & s.TextRenderingMode.ADD_TO_PATH_FLAG);
            let g = l.patternFill && !h.missingFile;
            (h.disableFontFace || p || g) && (n = h.getPathGenerator(this.commonObjs, e));
            h.disableFontFace || g ? (o.save(), o.translate(t, r), o.beginPath(), n(o, d), a && o.setTransform.apply(o, a), (u === s.TextRenderingMode.FILL || u === s.TextRenderingMode.FILL_STROKE) && o.fill(), (u === s.TextRenderingMode.STROKE || u === s.TextRenderingMode.FILL_STROKE) && (i && (o.resetTransform(), o.lineWidth = Math.floor(this._combinedScaleFactor)), o.stroke()), o.restore()) : ((u === s.TextRenderingMode.FILL || u === s.TextRenderingMode.FILL_STROKE) && o.fillText(e, t, r), (u === s.TextRenderingMode.STROKE || u === s.TextRenderingMode.FILL_STROKE) && (i ? (o.save(), o.moveTo(t, r), o.resetTransform(), o.lineWidth = Math.floor(this._combinedScaleFactor), o.strokeText(e, 0, 0), o.restore()) : o.strokeText(e, t, r)));
            p && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
              transform: o.mozCurrentTransform,
              x: t,
              y: r,
              fontSize: d,
              addToPath: n
            });
          }
          get isFontSubpixelAAEnabled() {
            let {
              context
            } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
            context.scale(1.5, 1);
            context.fillText("I", 0, 10);
            let t = context.getImageData(0, 0, 10, 10).data;
            let r = !1;
            for (let e = 3; e < t.length; e += 4) if (t[e] > 0 && t[e] < 255) {
              r = !0;
              break;
            }
            return s.shadow(this, "isFontSubpixelAAEnabled", r);
          }
          showText(e) {
            let t;
            let r = this.current;
            let i = r.font;
            if (i.isType3Font) return this.showType3Text(e);
            let n = r.fontSize;
            if (0 === n) return;
            let o = this.ctx;
            let l = r.fontSizeScale;
            let h = r.charSpacing;
            let c = r.wordSpacing;
            let d = r.fontDirection;
            let u = r.textHScale * d;
            let p = e.length;
            let g = i.vertical;
            let f = g ? 1 : -1;
            let m = i.defaultVMetrics;
            let A = n * r.fontMatrix[0];
            let b = r.textRenderingMode === s.TextRenderingMode.FILL && !i.disableFontFace && !r.patternFill;
            if (o.save(), o.transform.apply(o, r.textMatrix), o.translate(r.x, r.y + r.textRise), d > 0 ? o.scale(u, -1) : o.scale(u, 1), r.patternFill) {
              o.save();
              let e = r.fillColor.getPattern(o, this, o.mozCurrentTransformInverse, a.PathType.FILL);
              t = o.mozCurrentTransform;
              o.restore();
              o.fillStyle = e;
            }
            let _ = r.lineWidth;
            let y = !1;
            let S = r.textMatrixScale;
            if (0 === S || 0 === _) {
              let e = r.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
              (e === s.TextRenderingMode.STROKE || e === s.TextRenderingMode.FILL_STROKE) && (this._cachedGetSinglePixelWidth = null, y = (_ = this.getSinglePixelWidth()) < 0);
            } else _ /= S;
            1 !== l && (o.scale(l, l), _ /= l);
            o.lineWidth = _;
            let x = 0;
            let v;
            for (v = 0; v < p; ++v) {
              let r;
              let s;
              let a;
              let u = e[v];
              if ("number" == typeof u) {
                x += f * u * n / 1e3;
                continue;
              }
              let p = !1;
              let _ = (u.isSpace ? c : 0) + h;
              let S = u.fontChar;
              let C = u.accent;
              let P = u.width;
              if (g) {
                let e = u.vmetric || m;
                let t = -(u.vmetric ? e[1] : .5 * P) * A;
                let a = e[2] * A;
                P = e ? -e[0] : P;
                r = t / l;
                s = (x + a) / l;
              } else {
                r = x / l;
                s = 0;
              }
              if (i.remeasure && P > 0) {
                let e = 1e3 * o.measureText(S).width / n * l;
                if (P < e && this.isFontSubpixelAAEnabled) {
                  let t = P / e;
                  p = !0;
                  o.save();
                  o.scale(t, 1);
                  r /= t;
                } else P !== e && (r += (P - e) / 2e3 * n / l);
              }
              if (this.contentVisible && (u.isInFont || i.missingFile)) {
                if (b && !C) o.fillText(S, r, s); else if (this.paintChar(S, r, s, t, y), C) {
                  let e = r + n * C.offset.x / l;
                  let a = s - n * C.offset.y / l;
                  this.paintChar(C.fontChar, e, a, t, y);
                }
              }
              x += a = g ? P * A - _ * d : P * A + _ * d;
              p && o.restore();
            }
            g ? r.y -= x : r.x += x * u;
            o.restore();
            this.compose();
          }
          showType3Text(e) {
            let t;
            let r;
            let a;
            let i;
            let n = this.ctx;
            let o = this.current;
            let l = o.font;
            let h = o.fontSize;
            let c = o.fontDirection;
            let d = l.vertical ? 1 : -1;
            let u = o.charSpacing;
            let p = o.wordSpacing;
            let g = o.textHScale * c;
            let f = o.fontMatrix || s.FONT_IDENTITY_MATRIX;
            let m = e.length;
            if (o.textRenderingMode !== s.TextRenderingMode.INVISIBLE && 0 !== h) {
              for (this._cachedGetSinglePixelWidth = null, n.save(), n.transform.apply(n, o.textMatrix), n.translate(o.x, o.y), n.scale(g, c), t = 0; t < m; ++t) {
                if ("number" == typeof (r = e[t])) {
                  i = d * r * h / 1e3;
                  this.ctx.translate(i, 0);
                  o.x += i * g;
                  continue;
                }
                let c = (r.isSpace ? p : 0) + u;
                let m = l.charProcOperatorList[r.operatorListId];
                if (!m) {
                  s.warn(`Type3 character "${r.operatorListId}" is not available.`);
                  continue;
                }
                this.contentVisible && (this.processingType3 = r, this.save(), n.scale(h, h), n.transform.apply(n, f), this.executeOperatorList(m), this.restore());
                a = s.Util.applyTransform([r.width, 0], f)[0] * h + c;
                n.translate(a, 0);
                o.x += a * g;
              }
              n.restore();
              this.processingType3 = null;
            }
          }
          setCharWidth(e, t) { }
          setCharWidthAndBounds(e, t, r, s, a, i) {
            this.ctx.rect(r, s, a - r, i - s);
            this.clip();
            this.endPath();
          }
          getColorN_Pattern(e) {
            let t;
            if ("TilingPattern" === e[0]) {
              let r = e[1];
              let s = this.baseTransform || this.ctx.mozCurrentTransform.slice();
              let i = {
                createCanvasGraphics: e => new L(e, this.commonObjs, this.objs, this.canvasFactory)
              };
              t = new a.TilingPattern(e, r, this.ctx, i, s);
            } else t = this._getPattern(e[1], e[2]);
            return t;
          }
          setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          }
          setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments);
            this.current.patternFill = !0;
          }
          setStrokeRGBColor(e, t, r) {
            let a = s.Util.makeHexColor(e, t, r);
            this.ctx.strokeStyle = a;
            this.current.strokeColor = a;
          }
          setFillRGBColor(e, t, r) {
            let a = s.Util.makeHexColor(e, t, r);
            this.ctx.fillStyle = a;
            this.current.fillColor = a;
            this.current.patternFill = !1;
          }
          _getPattern(e, t = null) {
            let r;
            this.cachedPatterns.has(e) ? r = this.cachedPatterns.get(e) : (r = a.getShadingPattern(this.objs.get(e)), this.cachedPatterns.set(e, r));
            t && (r.matrix = t);
            return r;
          }
          shadingFill(e) {
            if (!this.contentVisible) return;
            let t = this.ctx;
            this.save();
            let r = this._getPattern(e);
            t.fillStyle = r.getPattern(t, this, t.mozCurrentTransformInverse, a.PathType.SHADING);
            let i = t.mozCurrentTransformInverse;
            if (i) {
              let e = t.canvas;
              let r = e.width;
              let a = e.height;
              let n = s.Util.applyTransform([0, 0], i);
              let o = s.Util.applyTransform([0, a], i);
              let l = s.Util.applyTransform([r, 0], i);
              let h = s.Util.applyTransform([r, a], i);
              let c = Math.min(n[0], o[0], l[0], h[0]);
              let d = Math.min(n[1], o[1], l[1], h[1]);
              let u = Math.max(n[0], o[0], l[0], h[0]);
              let p = Math.max(n[1], o[1], l[1], h[1]);
              this.ctx.fillRect(c, d, u - c, p - d);
            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            this.compose(this.current.getClippedPathBoundingBox());
            this.restore();
          }
          beginInlineImage() {
            s.unreachable("Should not call beginInlineImage");
          }
          beginImageData() {
            s.unreachable("Should not call beginImageData");
          }
          paintFormXObjectBegin(e, t) {
            if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(e) && 6 === e.length && this.transform.apply(this, e), this.baseTransform = this.ctx.mozCurrentTransform, t)) {
              let e = t[2] - t[0];
              let r = t[3] - t[1];
              this.ctx.rect(t[0], t[1], e, r);
              this.current.updatePathMinMax(this.ctx.mozCurrentTransform, t[0], t[1]);
              this.current.updatePathMinMax(this.ctx.mozCurrentTransform, t[2], t[3]);
              this.clip();
              this.endPath();
            }
          }
          paintFormXObjectEnd() {
            this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
          }
          beginGroup(e) {
            if (!this.contentVisible) return;
            this.save();
            this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
            let t = this.ctx;
            e.isolated || s.info("TODO: Support non-isolated groups.");
            e.knockout && s.warn("Knockout groups not supported.");
            let r = t.mozCurrentTransform;
            if (e.matrix && t.transform.apply(t, e.matrix), !e.bbox) throw Error("Bounding box is required.");
            let a = s.Util.getAxialAlignedBoundingBox(e.bbox, t.mozCurrentTransform);
            let i = [0, 0, t.canvas.width, t.canvas.height];
            let n = Math.floor((a = s.Util.intersect(a, i) || [0, 0, 0, 0])[0]);
            let o = Math.floor(a[1]);
            let h = Math.max(Math.ceil(a[2]) - n, 1);
            let c = Math.max(Math.ceil(a[3]) - o, 1);
            let d = 1;
            let u = 1;
            h > l && (d = h / l, h = l);
            c > l && (u = c / l, c = l);
            this.current.startNewPathAndClipBox([0, 0, h, c]);
            let p = "groupAt" + this.groupLevel;
            e.smask && (p += "_smask_" + this.smaskCounter++ % 2);
            let g = this.cachedCanvases.getCanvas(p, h, c, !0);
            let f = g.context;
            f.scale(1 / d, 1 / u);
            f.translate(-n, -o);
            f.transform.apply(f, r);
            e.smask ? this.smaskStack.push({
              canvas: g.canvas,
              context: f,
              offsetX: n,
              offsetY: o,
              scaleX: d,
              scaleY: u,
              subtype: e.smask.subtype,
              backdrop: e.smask.backdrop,
              transferMap: e.smask.transferMap || null,
              startTransformInverse: null
            }) : (t.setTransform(1, 0, 0, 1, 0, 0), t.translate(n, o), t.scale(d, u), t.save());
            x(t, f);
            this.ctx = f;
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            this.groupStack.push(t);
            this.groupLevel++;
          }
          endGroup(e) {
            if (!this.contentVisible) return;
            this.groupLevel--;
            let t = this.ctx;
            let r = this.groupStack.pop();
            if (this.ctx = r, this.ctx.imageSmoothingEnabled = !1, e.smask) {
              this.tempSMask = this.smaskStack.pop();
              this.restore();
            } else {
              this.ctx.restore();
              let e = this.ctx.mozCurrentTransform;
              this.restore();
              this.ctx.save();
              this.ctx.setTransform.apply(this.ctx, e);
              let r = s.Util.getAxialAlignedBoundingBox([0, 0, t.canvas.width, t.canvas.height], e);
              this.ctx.drawImage(t.canvas, 0, 0);
              this.ctx.restore();
              this.compose(r);
            }
          }
          beginAnnotations() {
            this.save();
            this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform);
          }
          endAnnotations() {
            this.restore();
          }
          beginAnnotation(e, t, r, a, i) {
            if (this.save(), Array.isArray(t) && 4 === t.length) {
              let a = t[2] - t[0];
              let n = t[3] - t[1];
              if (i && this.annotationCanvasMap) {
                r = r.slice();
                r[4] -= t[0];
                r[5] -= t[1];
                (t = t.slice())[0] = t[1] = 0;
                t[2] = a;
                t[3] = n;
                let [i, o] = s.Util.singularValueDecompose2dScale(this.ctx.mozCurrentTransform);
                let {
                  viewportScale
                } = this;
                let h = Math.ceil(a * this.outputScaleX * viewportScale);
                let c = Math.ceil(n * this.outputScaleY * viewportScale);
                this.annotationCanvas = this.canvasFactory.create(h, c);
                let {
                  canvas,
                  context
                } = this.annotationCanvas;
                canvas.style.width = `calc(${a}px * var(--viewport-scale-factor))`;
                canvas.style.height = `calc(${n}px * var(--viewport-scale-factor))`;
                this.annotationCanvasMap.set(e, canvas);
                this.annotationCanvas.savedCtx = this.ctx;
                this.ctx = context;
                this.ctx.setTransform(i, 0, 0, -o, 0, n * o);
                m(this.ctx);
                v(this.ctx);
              } else {
                v(this.ctx);
                this.ctx.rect(t[0], t[1], a, n);
                this.clip();
                this.endPath();
              }
            }
            this.current = new _(this.ctx.canvas.width, this.ctx.canvas.height);
            this.transform.apply(this, r);
            this.transform.apply(this, a);
          }
          endAnnotation() {
            this.annotationCanvas && (this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
            this.restore();
          }
          paintImageMaskXObject(e) {
            if (!this.contentVisible) return;
            let t = this.ctx;
            let r = e.width;
            let s = e.height;
            let a = this.processingType3;
            if (d && a && void 0 === a.compiled && (r <= u && s <= u ? a.compiled = b({
              data: e.data,
              width: r,
              height: s
            }) : a.compiled = null), a?.compiled) {
              a.compiled(t);
              return;
            }
            let i = this._createMaskCanvas(e);
            let n = i.canvas;
            t.save();
            t.setTransform(1, 0, 0, 1, 0, 0);
            t.drawImage(n, i.offsetX, i.offsetY);
            t.restore();
            this.compose();
          }
          paintImageMaskXObjectRepeat(e, t, r = 0, a = 0, i, n) {
            if (!this.contentVisible) return;
            let o = this.ctx;
            o.save();
            let l = o.mozCurrentTransform;
            o.transform(t, r, a, i, 0, 0);
            let h = this._createMaskCanvas(e);
            o.setTransform(1, 0, 0, 1, 0, 0);
            for (function() {
              let e = 0;
              let c = n.length;
            }(); e < c; e += 2) {
              let c = s.Util.transform(l, [t, r, a, i, n[e], n[e + 1]]);
              let [d, u] = s.Util.applyTransform([0, 0], c);
              o.drawImage(h.canvas, d, u);
            }
            o.restore();
            this.compose();
          }
          paintImageMaskXObjectGroup(e) {
            if (!this.contentVisible) return;
            let t = this.ctx;
            let r = this.current.fillColor;
            let s = this.current.patternFill;
            for (function() {
              let i = 0;
              let n = e.length;
            }(); i < n; i++) {
              let n = e[i];
              let o = n.width;
              let l = n.height;
              let h = this.cachedCanvases.getCanvas("maskCanvas", o, l);
              let c = h.context;
              c.save();
              S(c, n);
              c.globalCompositeOperation = "source-in";
              c.fillStyle = s ? r.getPattern(c, this, t.mozCurrentTransformInverse, a.PathType.FILL) : r;
              c.fillRect(0, 0, o, l);
              c.restore();
              t.save();
              t.transform.apply(t, n.transform);
              t.scale(1, -1);
              t.drawImage(h.canvas, 0, 0, o, l, 0, -1, 1, 1);
              t.restore();
            }
            this.compose();
          }
          paintImageXObject(e) {
            if (!this.contentVisible) return;
            let t = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
            if (!t) {
              s.warn("Dependent image isn't ready yet");
              return;
            }
            this.paintInlineImageXObject(t);
          }
          paintImageXObjectRepeat(e, t, r, a) {
            if (!this.contentVisible) return;
            let i = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
            if (!i) {
              s.warn("Dependent image isn't ready yet");
              return;
            }
            let n = i.width;
            let o = i.height;
            let l = [];
            for (function() {
              let e = 0;
              let s = a.length;
            }(); e < s; e += 2) l.push({
              transform: [t, 0, 0, r, a[e], a[e + 1]],
              x: 0,
              y: 0,
              w: n,
              h: o
            });
            this.paintInlineImageXObjectGroup(i, l);
          }
          paintInlineImageXObject(e) {
            let t;
            if (!this.contentVisible) return;
            let r = e.width;
            let s = e.height;
            let a = this.ctx;
            if (this.save(), a.scale(1 / r, -1 / s), "function" == typeof HTMLElement && e instanceof HTMLElement || !e.data) t = e; else {
              let a = this.cachedCanvases.getCanvas("inlineImage", r, s);
              y(a.context, e, this.current.transferMaps);
              t = a.canvas;
            }
            let i = this._scaleImage(t, a.mozCurrentTransformInverse);
            if (a.imageSmoothingEnabled = w(a.mozCurrentTransform, e.interpolate), a.drawImage(i.img, 0, 0, i.paintWidth, i.paintHeight, 0, -s, r, s), this.imageLayer) {
              let t = this.getCanvasPosition(0, -s);
              this.imageLayer.appendImage({
                imgData: e,
                left: t[0],
                top: t[1],
                width: r / a.mozCurrentTransformInverse[0],
                height: s / a.mozCurrentTransformInverse[3]
              });
            }
            this.compose();
            this.restore();
          }
          paintInlineImageXObjectGroup(e, t) {
            if (!this.contentVisible) return;
            let r = this.ctx;
            let s = e.width;
            let a = e.height;
            let i = this.cachedCanvases.getCanvas("inlineImage", s, a);
            y(i.context, e, this.current.transferMaps);
            for (function() {
              let n = 0;
              let o = t.length;
            }(); n < o; n++) {
              let o = t[n];
              if (r.save(), r.transform.apply(r, o.transform), r.scale(1, -1), r.drawImage(i.canvas, o.x, o.y, o.w, o.h, 0, -1, 1, 1), this.imageLayer) {
                let t = this.getCanvasPosition(o.x, o.y);
                this.imageLayer.appendImage({
                  imgData: e,
                  left: t[0],
                  top: t[1],
                  width: s,
                  height: a
                });
              }
              r.restore();
            }
            this.compose();
          }
          paintSolidColorImageMask() {
            this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
          }
          markPoint(e) { }
          markPointProps(e, t) { }
          beginMarkedContent(e) {
            this.markedContentStack.push({
              visible: !0
            });
          }
          beginMarkedContentProps(e, t) {
            "OC" === e ? this.markedContentStack.push({
              visible: this.optionalContentConfig.isVisible(t)
            }) : this.markedContentStack.push({
              visible: !0
            });
            this.contentVisible = this.isContentVisible();
          }
          endMarkedContent() {
            this.markedContentStack.pop();
            this.contentVisible = this.isContentVisible();
          }
          beginCompat() { }
          endCompat() { }
          consumePath(e) {
            this.pendingClip && this.current.updateClipFromPath();
            this.pendingClip || this.compose(e);
            let t = this.ctx;
            this.pendingClip && (this.pendingClip === O ? t.clip("evenodd") : t.clip(), this.pendingClip = null);
            this.current.startNewPathAndClipBox(this.current.clipBox);
            t.beginPath();
          }
          getSinglePixelWidth() {
            if (null === this._cachedGetSinglePixelWidth) {
              let e = this.ctx.mozCurrentTransform;
              let t = Math.abs(e[0] * e[3] - e[2] * e[1]);
              let r = e[0] ** 2 + e[2] ** 2;
              let s = e[1] ** 2 + e[3] ** 2;
              let a = Math.sqrt(Math.max(r, s)) / t;
              r !== s && this._combinedScaleFactor * a > 1 ? this._cachedGetSinglePixelWidth = -(this._combinedScaleFactor * a) : t > Number.EPSILON ? this._cachedGetSinglePixelWidth = a : this._cachedGetSinglePixelWidth = 1;
            }
            return this._cachedGetSinglePixelWidth;
          }
          getCanvasPosition(e, t) {
            let r = this.ctx.mozCurrentTransform;
            return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]];
          }
          isContentVisible() {
            for (let e = this.markedContentStack.length - 1; e >= 0; e--) if (!this.markedContentStack[e].visible) return !1;
            return !0;
          }
        }
        for (let e in t.CanvasGraphics = L, s.OPS) void 0 !== L.prototype[e] && (L.prototype[s.OPS[e]] = L.prototype[e]);
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.TilingPattern = t.PathType = void 0;
        t.getShadingPattern = u;
        var s = r(1);
        let a = {
          FILL: "Fill",
          STROKE: "Stroke",
          SHADING: "Shading"
        };
        function i(e, t) {
          if (!t || "undefined" == typeof Path2D) return;
          let r = t[2] - t[0];
          let s = t[3] - t[1];
          let a = new Path2D();
          a.rect(t[0], t[1], r, s);
          e.clip(a);
        }
        t.PathType = a;
        class n {
          constructor() {
            this.constructor === n && s.unreachable("Cannot initialize BaseShadingPattern.");
          }
          getPattern() {
            s.unreachable("Abstract method `getPattern` called.");
          }
        }
        class o extends n {
          constructor(e) {
            super();
            this._type = e[1];
            this._bbox = e[2];
            this._colorStops = e[3];
            this._p0 = e[4];
            this._p1 = e[5];
            this._r0 = e[6];
            this._r1 = e[7];
            this.matrix = null;
          }
          _createGradient(e) {
            let t;
            for (let r of ("axial" === this._type ? t = e.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (t = e.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1)), this._colorStops)) t.addColorStop(r[0], r[1]);
            return t;
          }
          getPattern(e, t, r, n) {
            let o;
            if (n === a.STROKE || n === a.FILL) {
              let a = t.current.getClippedPathBoundingBox(n, e.mozCurrentTransform) || [0, 0, 0, 0];
              let l = Math.ceil(a[2] - a[0]) || 1;
              let h = Math.ceil(a[3] - a[1]) || 1;
              let c = t.cachedCanvases.getCanvas("pattern", l, h, !0);
              let d = c.context;
              d.clearRect(0, 0, d.canvas.width, d.canvas.height);
              d.beginPath();
              d.rect(0, 0, d.canvas.width, d.canvas.height);
              d.translate(-a[0], -a[1]);
              r = s.Util.transform(r, [1, 0, 0, 1, a[0], a[1]]);
              d.transform.apply(d, t.baseTransform);
              this.matrix && d.transform.apply(d, this.matrix);
              i(d, this._bbox);
              d.fillStyle = this._createGradient(d);
              d.fill();
              o = e.createPattern(c.canvas, "no-repeat");
              let u = new DOMMatrix(r);
              try {
                o.setTransform(u);
              } catch (e) {
                s.warn(`RadialAxialShadingPattern.getPattern: "${e?.message}".`);
              }
            } else {
              i(e, this._bbox);
              o = this._createGradient(e);
            }
            return o;
          }
        }
        function l(e, t, r, s, a, i, n, o) {
          let l;
          let h;
          let c;
          let d;
          let u;
          let p;
          let g;
          let f;
          let m;
          let A = t.coords;
          let b = t.colors;
          let _ = e.data;
          let y = 4 * e.width;
          A[r + 1] > A[s + 1] && (l = r, r = s, s = l, l = i, i = n, n = l);
          A[s + 1] > A[a + 1] && (l = s, s = a, a = l, l = n, n = o, o = l);
          A[r + 1] > A[s + 1] && (l = r, r = s, s = l, l = i, i = n, n = l);
          let S = (A[r] + t.offsetX) * t.scaleX;
          let x = (A[r + 1] + t.offsetY) * t.scaleY;
          let v = (A[s] + t.offsetX) * t.scaleX;
          let C = (A[s + 1] + t.offsetY) * t.scaleY;
          let P = (A[a] + t.offsetX) * t.scaleX;
          let T = (A[a + 1] + t.offsetY) * t.scaleY;
          if (x >= T) return;
          let k = b[i];
          let R = b[i + 1];
          let w = b[i + 2];
          let E = b[n];
          let F = b[n + 1];
          let M = b[n + 2];
          let O = b[o];
          let L = b[o + 1];
          let D = b[o + 2];
          let I = Math.round(x);
          let N = Math.round(T);
          for (let e = I; e <= N; e++) {
            let t;
            if (e < C) {
              let t;
              h = S - (S - v) * (t = e < x ? 0 : (x - e) / (x - C));
              c = k - (k - E) * t;
              d = R - (R - F) * t;
              u = w - (w - M) * t;
            } else {
              let t;
              h = v - (v - P) * (t = e > T ? 1 : C === T ? 0 : (C - e) / (C - T));
              c = E - (E - O) * t;
              d = F - (F - L) * t;
              u = M - (M - D) * t;
            }
            p = S - (S - P) * (t = e < x ? 0 : e > T ? 1 : (x - e) / (x - T));
            g = k - (k - O) * t;
            f = R - (R - L) * t;
            m = w - (w - D) * t;
            let r = Math.round(Math.min(h, p));
            let s = Math.round(Math.max(h, p));
            let a = y * e + 4 * r;
            for (let e = r; e <= s; e++) {
              (t = (h - e) / (h - p)) < 0 ? t = 0 : t > 1 && (t = 1);
              _[a++] = c - (c - g) * t | 0;
              _[a++] = d - (d - f) * t | 0;
              _[a++] = u - (u - m) * t | 0;
              _[a++] = 255;
            }
          }
        }
        function h(e, t, r) {
          let s;
          let a;
          let i = t.coords;
          let n = t.colors;
          switch (t.type) {
            case "lattice":
              let o = t.verticesPerRow;
              let h = Math.floor(i.length / o) - 1;
              let c = o - 1;
              for (s = 0; s < h; s++) {
                let t = s * o;
                for (let s = 0; s < c; s++, t++) {
                  l(e, r, i[t], i[t + 1], i[t + o], n[t], n[t + 1], n[t + o]);
                  l(e, r, i[t + o + 1], i[t + 1], i[t + o], n[t + o + 1], n[t + 1], n[t + o]);
                }
              }
              break;
            case "triangles":
              for (s = 0, a = i.length; s < a; s += 3) l(e, r, i[s], i[s + 1], i[s + 2], n[s], n[s + 1], n[s + 2]);
              break;
            default:
              throw Error("illegal figure");
          }
        }
        class c extends n {
          constructor(e) {
            super();
            this._coords = e[2];
            this._colors = e[3];
            this._figures = e[4];
            this._bounds = e[5];
            this._bbox = e[7];
            this._background = e[8];
            this.matrix = null;
          }
          _createMeshCanvas(e, t, r) {
            let s = 1.1;
            let a = 3e3;
            let i = 2;
            let n = Math.floor(this._bounds[0]);
            let o = Math.floor(this._bounds[1]);
            let l = Math.ceil(this._bounds[2]) - n;
            let c = Math.ceil(this._bounds[3]) - o;
            let d = Math.min(Math.ceil(Math.abs(l * e[0] * s)), a);
            let u = Math.min(Math.ceil(Math.abs(c * e[1] * s)), a);
            let p = l / d;
            let g = c / u;
            let f = {
              coords: this._coords,
              colors: this._colors,
              offsetX: -n,
              offsetY: -o,
              scaleX: 1 / p,
              scaleY: 1 / g
            };
            let m = d + 2 * i;
            let A = u + 2 * i;
            let b = r.getCanvas("mesh", m, A, !1);
            let _ = b.context;
            let y = _.createImageData(d, u);
            if (t) {
              let e = y.data;
              for (function() {
                let r = 0;
                let s = e.length;
              }(); r < s; r += 4) {
                e[r] = t[0];
                e[r + 1] = t[1];
                e[r + 2] = t[2];
                e[r + 3] = 255;
              }
            }
            for (let e of this._figures) h(y, e, f);
            _.putImageData(y, i, i);
            return {
              canvas: b.canvas,
              offsetX: n - i * p,
              offsetY: o - i * g,
              scaleX: p,
              scaleY: g
            };
          }
          getPattern(e, t, r, n) {
            let o;
            if (i(e, this._bbox), n === a.SHADING) o = s.Util.singularValueDecompose2dScale(e.mozCurrentTransform); else if (o = s.Util.singularValueDecompose2dScale(t.baseTransform), this.matrix) {
              let e = s.Util.singularValueDecompose2dScale(this.matrix);
              o = [o[0] * e[0], o[1] * e[1]];
            }
            let l = this._createMeshCanvas(o, n === a.SHADING ? null : this._background, t.cachedCanvases);
            n !== a.SHADING && (e.setTransform.apply(e, t.baseTransform), this.matrix && e.transform.apply(e, this.matrix));
            e.translate(l.offsetX, l.offsetY);
            e.scale(l.scaleX, l.scaleY);
            return e.createPattern(l.canvas, "no-repeat");
          }
        }
        class d extends n {
          getPattern() {
            return "hotpink";
          }
        }
        function u(e) {
          switch (e[0]) {
            case "RadialAxial":
              return new o(e);
            case "Mesh":
              return new c(e);
            case "Dummy":
              return new d();
          }
          throw Error(`Unknown IR type: ${e[0]}`);
        }
        let p = {
          COLORED: 1,
          UNCOLORED: 2
        };
        class g {
          static get MAX_PATTERN_SIZE() {
            return s.shadow(this, "MAX_PATTERN_SIZE", 3e3);
          }
          constructor(e, t, r, s, a) {
            this.operatorList = e[2];
            this.matrix = e[3] || [1, 0, 0, 1, 0, 0];
            this.bbox = e[4];
            this.xstep = e[5];
            this.ystep = e[6];
            this.paintType = e[7];
            this.tilingType = e[8];
            this.color = t;
            this.ctx = r;
            this.canvasGraphicsFactory = s;
            this.baseTransform = a;
          }
          createPatternCanvas(e) {
            let t = this.operatorList;
            let r = this.bbox;
            let a = this.xstep;
            let i = this.ystep;
            let n = this.paintType;
            let o = this.tilingType;
            let l = this.color;
            let h = this.canvasGraphicsFactory;
            s.info("TilingType: " + o);
            let c = r[0];
            let d = r[1];
            let u = r[2];
            let p = r[3];
            let g = s.Util.singularValueDecompose2dScale(this.matrix);
            let f = s.Util.singularValueDecompose2dScale(this.baseTransform);
            let m = [g[0] * f[0], g[1] * f[1]];
            let A = this.getSizeAndScale(a, this.ctx.canvas.width, m[0]);
            let b = this.getSizeAndScale(i, this.ctx.canvas.height, m[1]);
            let _ = e.cachedCanvases.getCanvas("pattern", A.size, b.size, !0);
            let y = _.context;
            let S = h.createCanvasGraphics(y);
            S.groupLevel = e.groupLevel;
            this.setFillAndStrokeStyleToContext(S, n, l);
            let x = c;
            let v = d;
            let C = u;
            let P = p;
            c < 0 && (x = 0, C += Math.abs(c));
            d < 0 && (v = 0, P += Math.abs(d));
            y.translate(-(A.scale * x), -(b.scale * v));
            S.transform(A.scale, 0, 0, b.scale, 0, 0);
            y.save();
            this.clipBbox(S, x, v, C, P);
            S.baseTransform = S.ctx.mozCurrentTransform.slice();
            S.executeOperatorList(t);
            S.endDrawing();
            return {
              canvas: _.canvas,
              scaleX: A.scale,
              scaleY: b.scale,
              offsetX: x,
              offsetY: v
            };
          }
          getSizeAndScale(e, t, r) {
            e = Math.abs(e);
            let s = Math.max(g.MAX_PATTERN_SIZE, t);
            let a = Math.ceil(e * r);
            a >= s ? a = s : r = a / e;
            return {
              scale: r,
              size: a
            };
          }
          clipBbox(e, t, r, s, a) {
            let i = s - t;
            let n = a - r;
            e.ctx.rect(t, r, i, n);
            e.clip();
            e.endPath();
          }
          setFillAndStrokeStyleToContext(e, t, r) {
            let a = e.ctx;
            let i = e.current;
            switch (t) {
              case p.COLORED:
                let n = this.ctx;
                a.fillStyle = n.fillStyle;
                a.strokeStyle = n.strokeStyle;
                i.fillColor = n.fillStyle;
                i.strokeColor = n.strokeStyle;
                break;
              case p.UNCOLORED:
                let o = s.Util.makeHexColor(r[0], r[1], r[2]);
                a.fillStyle = o;
                a.strokeStyle = o;
                i.fillColor = o;
                i.strokeColor = o;
                break;
              default:
                throw new s.FormatError(`Unsupported paint type: ${t}`);
            }
          }
          getPattern(e, t, r, i) {
            let n = r;
            i !== a.SHADING && (n = s.Util.transform(n, t.baseTransform), this.matrix && (n = s.Util.transform(n, this.matrix)));
            let o = this.createPatternCanvas(t);
            let l = new DOMMatrix(n);
            l = (l = l.translate(o.offsetX, o.offsetY)).scale(1 / o.scaleX, 1 / o.scaleY);
            let h = e.createPattern(o.canvas, "repeat");
            try {
              h.setTransform(l);
            } catch (e) {
              s.warn(`TilingPattern.getPattern: "${e?.message}".`);
            }
            return h;
          }
        }
        t.TilingPattern = g;
      }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.GlobalWorkerOptions = void 0;
        let r = Object.create(null);
        t.GlobalWorkerOptions = r;
        r.workerPort = void 0 === r.workerPort ? null : r.workerPort;
        r.workerSrc = void 0 === r.workerSrc ? "" : r.workerSrc;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.MessageHandler = void 0;
        var s = r(1);
        let a = {
          DATA: 1,
          ERROR: 2
        };
        let i = {
          CANCEL: 1,
          CANCEL_COMPLETE: 2,
          CLOSE: 3,
          ENQUEUE: 4,
          ERROR: 5,
          PULL: 6,
          PULL_COMPLETE: 7,
          START_COMPLETE: 8
        };
        function n(e) {
          switch (e instanceof Error || "object" == typeof e && null !== e || s.unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), e.name) {
            case "AbortException":
              return new s.AbortException(e.message);
            case "MissingPDFException":
              return new s.MissingPDFException(e.message);
            case "PasswordException":
              return new s.PasswordException(e.message, e.code);
            case "UnexpectedResponseException":
              return new s.UnexpectedResponseException(e.message, e.status);
            case "UnknownErrorException":
              return new s.UnknownErrorException(e.message, e.details);
            default:
              return new s.UnknownErrorException(e.message, e.toString());
          }
        }
        class o {
          constructor(e, t, r) {
            this.sourceName = e;
            this.targetName = t;
            this.comObj = r;
            this.callbackId = 1;
            this.streamId = 1;
            this.streamSinks = Object.create(null);
            this.streamControllers = Object.create(null);
            this.callbackCapabilities = Object.create(null);
            this.actionHandler = Object.create(null);
            this._onComObjOnMessage = e => {
              let t = e.data;
              if (t.targetName !== this.sourceName) return;
              if (t.stream) {
                this._processStreamMessage(t);
                return;
              }
              if (t.callback) {
                let e = t.callbackId;
                let r = this.callbackCapabilities[e];
                if (!r) throw Error(`Cannot resolve callback ${e}`);
                if (delete this.callbackCapabilities[e], t.callback === a.DATA) r.resolve(t.data); else if (t.callback === a.ERROR) r.reject(n(t.reason)); else throw Error("Unexpected callback case");
                return;
              }
              let s = this.actionHandler[t.action];
              if (!s) throw Error(`Unknown action from worker: ${t.action}`);
              if (t.callbackId) {
                let e = this.sourceName;
                let i = t.sourceName;
                new Promise(function(e) {
                  e(s(t.data));
                }).then(function(s) {
                  r.postMessage({
                    sourceName: e,
                    targetName: i,
                    callback: a.DATA,
                    callbackId: t.callbackId,
                    data: s
                  });
                }, function(s) {
                  r.postMessage({
                    sourceName: e,
                    targetName: i,
                    callback: a.ERROR,
                    callbackId: t.callbackId,
                    reason: n(s)
                  });
                });
                return;
              }
              if (t.streamId) {
                this._createStreamSink(t);
                return;
              }
              s(t.data);
            };
            r.addEventListener("message", this._onComObjOnMessage);
          }
          on(e, t) {
            let r = this.actionHandler;
            if (r[e]) throw Error(`There is already an actionName called "${e}"`);
            r[e] = t;
          }
          send(e, t, r) {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: e,
              data: t
            }, r);
          }
          sendWithPromise(e, t, r) {
            let a = this.callbackId++;
            let i = s.createPromiseCapability();
            this.callbackCapabilities[a] = i;
            try {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: e,
                callbackId: a,
                data: t
              }, r);
            } catch (e) {
              i.reject(e);
            }
            return i.promise;
          }
          sendWithStream(e, t, r, a) {
            let o = this.streamId++;
            let l = this.sourceName;
            let h = this.targetName;
            let c = this.comObj;
            return new ReadableStream({
              start: r => {
                let i = s.createPromiseCapability();
                this.streamControllers[o] = {
                  controller: r,
                  startCall: i,
                  pullCall: null,
                  cancelCall: null,
                  isClosed: !1
                };
                c.postMessage({
                  sourceName: l,
                  targetName: h,
                  action: e,
                  streamId: o,
                  data: t,
                  desiredSize: r.desiredSize
                }, a);
                return i.promise;
              },
              pull: e => {
                let t = s.createPromiseCapability();
                this.streamControllers[o].pullCall = t;
                c.postMessage({
                  sourceName: l,
                  targetName: h,
                  stream: i.PULL,
                  streamId: o,
                  desiredSize: e.desiredSize
                });
                return t.promise;
              },
              cancel: e => {
                s.assert(e instanceof Error, "cancel must have a valid reason");
                let t = s.createPromiseCapability();
                this.streamControllers[o].cancelCall = t;
                this.streamControllers[o].isClosed = !0;
                c.postMessage({
                  sourceName: l,
                  targetName: h,
                  stream: i.CANCEL,
                  streamId: o,
                  reason: n(e)
                });
                return t.promise;
              }
            }, r);
          }
          _createStreamSink(e) {
            let t = e.streamId;
            let r = this.sourceName;
            let a = e.sourceName;
            let o = this.comObj;
            let l = this;
            let h = this.actionHandler[e.action];
            let c = {
              enqueue(e, n = 1, l) {
                if (this.isCancelled) return;
                let h = this.desiredSize;
                this.desiredSize -= n;
                h > 0 && this.desiredSize <= 0 && (this.sinkCapability = s.createPromiseCapability(), this.ready = this.sinkCapability.promise);
                o.postMessage({
                  sourceName: r,
                  targetName: a,
                  stream: i.ENQUEUE,
                  streamId: t,
                  chunk: e
                }, l);
              },
              close() {
                this.isCancelled || (this.isCancelled = !0, o.postMessage({
                  sourceName: r,
                  targetName: a,
                  stream: i.CLOSE,
                  streamId: t
                }), delete l.streamSinks[t]);
              },
              error(e) {
                s.assert(e instanceof Error, "error must have a valid reason");
                this.isCancelled || (this.isCancelled = !0, o.postMessage({
                  sourceName: r,
                  targetName: a,
                  stream: i.ERROR,
                  streamId: t,
                  reason: n(e)
                }));
              },
              sinkCapability: s.createPromiseCapability(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: e.desiredSize,
              ready: null
            };
            c.sinkCapability.resolve();
            c.ready = c.sinkCapability.promise;
            this.streamSinks[t] = c;
            new Promise(function(t) {
              t(h(e.data, c));
            }).then(function() {
              o.postMessage({
                sourceName: r,
                targetName: a,
                stream: i.START_COMPLETE,
                streamId: t,
                success: !0
              });
            }, function(e) {
              o.postMessage({
                sourceName: r,
                targetName: a,
                stream: i.START_COMPLETE,
                streamId: t,
                reason: n(e)
              });
            });
          }
          _processStreamMessage(e) {
            let t = e.streamId;
            let r = this.sourceName;
            let a = e.sourceName;
            let o = this.comObj;
            let l = this.streamControllers[t];
            let h = this.streamSinks[t];
            switch (e.stream) {
              case i.START_COMPLETE:
                e.success ? l.startCall.resolve() : l.startCall.reject(n(e.reason));
                break;
              case i.PULL_COMPLETE:
                e.success ? l.pullCall.resolve() : l.pullCall.reject(n(e.reason));
                break;
              case i.PULL:
                if (!h) {
                  o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: i.PULL_COMPLETE,
                    streamId: t,
                    success: !0
                  });
                  break;
                }
                h.desiredSize <= 0 && e.desiredSize > 0 && h.sinkCapability.resolve();
                h.desiredSize = e.desiredSize;
                new Promise(function(e) {
                  e(h.onPull && h.onPull());
                }).then(function() {
                  o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: i.PULL_COMPLETE,
                    streamId: t,
                    success: !0
                  });
                }, function(e) {
                  o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: i.PULL_COMPLETE,
                    streamId: t,
                    reason: n(e)
                  });
                });
                break;
              case i.ENQUEUE:
                if (s.assert(l, "enqueue should have stream controller"), l.isClosed) break;
                l.controller.enqueue(e.chunk);
                break;
              case i.CLOSE:
                if (s.assert(l, "close should have stream controller"), l.isClosed) break;
                l.isClosed = !0;
                l.controller.close();
                this._deleteStreamController(l, t);
                break;
              case i.ERROR:
                s.assert(l, "error should have stream controller");
                l.controller.error(n(e.reason));
                this._deleteStreamController(l, t);
                break;
              case i.CANCEL_COMPLETE:
                e.success ? l.cancelCall.resolve() : l.cancelCall.reject(n(e.reason));
                this._deleteStreamController(l, t);
                break;
              case i.CANCEL:
                if (!h) break;
                new Promise(function(t) {
                  t(h.onCancel && h.onCancel(n(e.reason)));
                }).then(function() {
                  o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: i.CANCEL_COMPLETE,
                    streamId: t,
                    success: !0
                  });
                }, function(e) {
                  o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: i.CANCEL_COMPLETE,
                    streamId: t,
                    reason: n(e)
                  });
                });
                h.sinkCapability.reject(n(e.reason));
                h.isCancelled = !0;
                delete this.streamSinks[t];
                break;
              default:
                throw Error("Unexpected stream case");
            }
          }
          async _deleteStreamController(e, t) {
            await Promise.allSettled([e.startCall && e.startCall.promise, e.pullCall && e.pullCall.promise, e.cancelCall && e.cancelCall.promise]);
            delete this.streamControllers[t];
          }
          destroy() {
            this.comObj.removeEventListener("message", this._onComObjOnMessage);
          }
        }
        t.MessageHandler = o;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.Metadata = void 0;
        var s = r(1);
        class a {
          #n;
          #o;
          constructor({
            parsedData: e,
            rawData: t
          }) {
            this.#n = e;
            this.#o = t;
          }
          getRaw() {
            return this.#o;
          }
          get(e) {
            return this.#n.get(e) ?? null;
          }
          getAll() {
            return s.objectFromMap(this.#n);
          }
          has(e) {
            return this.#n.has(e);
          }
        }
        t.Metadata = a;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.OptionalContentConfig = void 0;
        var s = r(1);
        class a {
          constructor(e, t) {
            this.visible = !0;
            this.name = e;
            this.intent = t;
          }
        }
        class i {
          constructor(e) {
            this.name = null;
            this.creator = null;
            this._order = null;
            this._groups = new Map();
            if (null === e) return;
            for (let t of (this.name = e.name, this.creator = e.creator, this._order = e.order, e.groups)) this._groups.set(t.id, new a(t.name, t.intent));
            if ("OFF" === e.baseState) for (let e of this._groups) e.visible = !1;
            for (let t of e.on) this._groups.get(t).visible = !0;
            for (let t of e.off) this._groups.get(t).visible = !1;
          }
          _evaluateVisibilityExpression(e) {
            let t = e.length;
            if (t < 2) return !0;
            let r = e[0];
            for (let a = 1; a < t; a++) {
              let t;
              let i = e[a];
              if (Array.isArray(i)) t = this._evaluateVisibilityExpression(i); else {
                if (!this._groups.has(i)) {
                  s.warn(`Optional content group not found: ${i}`);
                  return !0;
                }
                t = this._groups.get(i).visible;
              }
              switch (r) {
                case "And":
                  if (!t) return !1;
                  break;
                case "Or":
                  if (t) return !0;
                  break;
                case "Not":
                  return !t;
                default:
                  return !0;
              }
            }
            return "And" === r;
          }
          isVisible(e) {
            if (0 === this._groups.size) return !0;
            if (!e) {
              s.warn("Optional content group not defined.");
              return !0;
            }
            if ("OCG" === e.type) return this._groups.has(e.id) ? this._groups.get(e.id).visible : (s.warn(`Optional content group not found: ${e.id}`), !0);
            if ("OCMD" === e.type) {
              if (e.expression) return this._evaluateVisibilityExpression(e.expression);
              if (e.policy && "AnyOn" !== e.policy) {
                if ("AllOn" === e.policy) {
                  for (let t of e.ids) {
                    if (!this._groups.has(t)) {
                      s.warn(`Optional content group not found: ${t}`);
                      break;
                    }
                    if (!this._groups.get(t).visible) return !1;
                  }
                  return !0;
                }
                if ("AnyOff" === e.policy) {
                  for (let t of e.ids) {
                    if (!this._groups.has(t)) {
                      s.warn(`Optional content group not found: ${t}`);
                      return !0;
                    }
                    if (!this._groups.get(t).visible) return !0;
                  }
                  return !1;
                }
                if ("AllOff" === e.policy) {
                  for (let t of e.ids) {
                    if (!this._groups.has(t)) {
                      s.warn(`Optional content group not found: ${t}`);
                      break;
                    }
                    if (this._groups.get(t).visible) return !1;
                  }
                  return !0;
                }
              } else {
                for (let t of e.ids) {
                  if (!this._groups.has(t)) {
                    s.warn(`Optional content group not found: ${t}`);
                    return !0;
                  }
                  if (this._groups.get(t).visible) return !0;
                }
                return !1;
              }
              s.warn(`Unknown optional content policy ${e.policy}.`);
              return !0;
            }
            s.warn(`Unknown group type ${e.type}.`);
            return !0;
          }
          setVisibility(e, t = !0) {
            if (!this._groups.has(e)) {
              s.warn(`Optional content group not found: ${e}`);
              return;
            }
            this._groups.get(e).visible = !!t;
          }
          getOrder() {
            return this._groups.size ? this._order ? this._order.slice() : Array.from(this._groups.keys()) : null;
          }
          getGroups() {
            return this._groups.size > 0 ? s.objectFromMap(this._groups) : null;
          }
          getGroup(e) {
            return this._groups.get(e) || null;
          }
        }
        t.OptionalContentConfig = i;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.PDFDataTransportStream = void 0;
        var s = r(1);
        var a = r(5);
        class i {
          constructor(e, t) {
            s.assert(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
            this._queuedChunks = [];
            this._progressiveDone = e.progressiveDone || !1;
            this._contentDispositionFilename = e.contentDispositionFilename || null;
            let r = e.initialData;
            if (r?.length > 0) {
              let e = new Uint8Array(r).buffer;
              this._queuedChunks.push(e);
            }
            this._pdfDataRangeTransport = t;
            this._isStreamingSupported = !e.disableStream;
            this._isRangeSupported = !e.disableRange;
            this._contentLength = e.length;
            this._fullRequestReader = null;
            this._rangeReaders = [];
            this._pdfDataRangeTransport.addRangeListener((e, t) => {
              this._onReceiveData({
                begin: e,
                chunk: t
              });
            });
            this._pdfDataRangeTransport.addProgressListener((e, t) => {
              this._onProgress({
                loaded: e,
                total: t
              });
            });
            this._pdfDataRangeTransport.addProgressiveReadListener(e => {
              this._onReceiveData({
                chunk: e
              });
            });
            this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
              this._onProgressiveDone();
            });
            this._pdfDataRangeTransport.transportReady();
          }
          _onReceiveData(e) {
            let t = new Uint8Array(e.chunk).buffer;
            if (void 0 === e.begin) this._fullRequestReader ? this._fullRequestReader._enqueue(t) : this._queuedChunks.push(t); else {
              let r = this._rangeReaders.some(function(r) {
                return r._begin === e.begin && (r._enqueue(t), !0);
              });
              s.assert(r, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
            }
          }
          get _progressiveDataLength() {
            return this._fullRequestReader?._loaded ?? 0;
          }
          _onProgress(e) {
            if (void 0 === e.total) {
              let t = this._rangeReaders[0];
              t?.onProgress && t.onProgress({
                loaded: e.loaded
              });
            } else {
              let t = this._fullRequestReader;
              t?.onProgress && t.onProgress({
                loaded: e.loaded,
                total: e.total
              });
            }
          }
          _onProgressiveDone() {
            this._fullRequestReader && this._fullRequestReader.progressiveDone();
            this._progressiveDone = !0;
          }
          _removeRangeReader(e) {
            let t = this._rangeReaders.indexOf(e);
            t >= 0 && this._rangeReaders.splice(t, 1);
          }
          getFullReader() {
            s.assert(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
            let e = this._queuedChunks;
            this._queuedChunks = null;
            return new n(this, e, this._progressiveDone, this._contentDispositionFilename);
          }
          getRangeReader(e, t) {
            if (t <= this._progressiveDataLength) return null;
            let r = new o(this, e, t);
            this._pdfDataRangeTransport.requestDataRange(e, t);
            this._rangeReaders.push(r);
            return r;
          }
          cancelAllRequests(e) {
            for (let t of (this._fullRequestReader && this._fullRequestReader.cancel(e), this._rangeReaders.slice(0))) t.cancel(e);
            this._pdfDataRangeTransport.abort();
          }
        }
        t.PDFDataTransportStream = i;
        class n {
          constructor(e, t, r = !1, s = null) {
            for (let i of (this._stream = e, this._done = r || !1, this._filename = a.isPdfFile(s) ? s : null, this._queuedChunks = t || [], this._loaded = 0, this._queuedChunks)) this._loaded += i.byteLength;
            this._requests = [];
            this._headersReady = Promise.resolve();
            e._fullRequestReader = this;
            this.onProgress = null;
          }
          _enqueue(e) {
            this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
              value: e,
              done: !1
            }) : this._queuedChunks.push(e), this._loaded += e.byteLength);
          }
          get headersReady() {
            return this._headersReady;
          }
          get filename() {
            return this._filename;
          }
          get isRangeSupported() {
            return this._stream._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._stream._isStreamingSupported;
          }
          get contentLength() {
            return this._stream._contentLength;
          }
          async read() {
            if (this._queuedChunks.length > 0) return {
              value: this._queuedChunks.shift(),
              done: !1
            };
            if (this._done) return {
              value: void 0,
              done: !0
            };
            let e = s.createPromiseCapability();
            this._requests.push(e);
            return e.promise;
          }
          cancel(e) {
            for (let e of (this._done = !0, this._requests)) e.resolve({
              value: void 0,
              done: !0
            });
            this._requests.length = 0;
          }
          progressiveDone() {
            this._done || (this._done = !0);
          }
        }
        class o {
          constructor(e, t, r) {
            this._stream = e;
            this._begin = t;
            this._end = r;
            this._queuedChunk = null;
            this._requests = [];
            this._done = !1;
            this.onProgress = null;
          }
          _enqueue(e) {
            if (!this._done) {
              if (0 === this._requests.length) this._queuedChunk = e; else {
                for (let t of (this._requests.shift().resolve({
                  value: e,
                  done: !1
                }), this._requests)) t.resolve({
                  value: void 0,
                  done: !0
                });
                this._requests.length = 0;
              }
              this._done = !0;
              this._stream._removeRangeReader(this);
            }
          }
          get isStreamingSupported() {
            return !1;
          }
          async read() {
            if (this._queuedChunk) {
              let e = this._queuedChunk;
              this._queuedChunk = null;
              return {
                value: e,
                done: !1
              };
            }
            if (this._done) return {
              value: void 0,
              done: !0
            };
            let e = s.createPromiseCapability();
            this._requests.push(e);
            return e.promise;
          }
          cancel(e) {
            for (let e of (this._done = !0, this._requests)) e.resolve({
              value: void 0,
              done: !0
            });
            this._requests.length = 0;
            this._stream._removeRangeReader(this);
          }
        }
      }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.XfaText = void 0;
        class r {
          static textContent(e) {
            let t = [];
            let s = {
              items: t,
              styles: Object.create(null)
            };
            function a(e) {
              if (!e) return;
              let s = null;
              let i = e.name;
              if ("#text" === i) s = e.value; else {
                if (!r.shouldBuildText(i)) return;
                e?.attributes?.textContent ? s = e.attributes.textContent : e.value && (s = e.value);
              }
              if (null !== s && t.push({
                str: s
              }), e.children) for (let t of e.children) a(t);
            }
            a(e);
            return s;
          }
          static shouldBuildText(e) {
            return !("textarea" === e || "input" === e || "option" === e || "select" === e);
          }
        }
        t.XfaText = r;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.AnnotationLayer = void 0;
        var s = r(1);
        var a = r(5);
        var i = r(9);
        var n = r(19);
        var o = r(20);
        let l = 1e3;
        let h = new WeakSet();
        function c(e) {
          return {
            width: e[2] - e[0],
            height: e[3] - e[1]
          };
        }
        class d {
          static create(e) {
            switch (e.data.annotationType) {
              case s.AnnotationType.LINK:
                return new p(e);
              case s.AnnotationType.TEXT:
                return new g(e);
              case s.AnnotationType.WIDGET:
                switch (e.data.fieldType) {
                  case "Tx":
                    return new m(e);
                  case "Btn":
                    if (e.data.radioButton) return new b(e);
                    if (e.data.checkBox) return new A(e);
                    return new _(e);
                  case "Ch":
                    return new y(e);
                }
                return new f(e);
              case s.AnnotationType.POPUP:
                return new S(e);
              case s.AnnotationType.FREETEXT:
                return new v(e);
              case s.AnnotationType.LINE:
                return new C(e);
              case s.AnnotationType.SQUARE:
                return new P(e);
              case s.AnnotationType.CIRCLE:
                return new T(e);
              case s.AnnotationType.POLYLINE:
                return new k(e);
              case s.AnnotationType.CARET:
                return new w(e);
              case s.AnnotationType.INK:
                return new E(e);
              case s.AnnotationType.POLYGON:
                return new R(e);
              case s.AnnotationType.HIGHLIGHT:
                return new F(e);
              case s.AnnotationType.UNDERLINE:
                return new M(e);
              case s.AnnotationType.SQUIGGLY:
                return new O(e);
              case s.AnnotationType.STRIKEOUT:
                return new L(e);
              case s.AnnotationType.STAMP:
                return new D(e);
              case s.AnnotationType.FILEATTACHMENT:
                return new I(e);
              default:
                return new u(e);
            }
          }
        }
        class u {
          constructor(e, {
            isRenderable: t = !1,
            ignoreBorder: r = !1,
            createQuadrilaterals: s = !1
          } = {}) {
            this.isRenderable = t;
            this.data = e.data;
            this.layer = e.layer;
            this.page = e.page;
            this.viewport = e.viewport;
            this.linkService = e.linkService;
            this.downloadManager = e.downloadManager;
            this.imageResourcesPath = e.imageResourcesPath;
            this.renderForms = e.renderForms;
            this.svgFactory = e.svgFactory;
            this.annotationStorage = e.annotationStorage;
            this.enableScripting = e.enableScripting;
            this.hasJSActions = e.hasJSActions;
            this._fieldObjects = e.fieldObjects;
            this._mouseState = e.mouseState;
            t && (this.container = this._createContainer(r));
            s && (this.quadrilaterals = this._createQuadrilaterals(r));
          }
          _createContainer(e = !1) {
            let t = this.data;
            let r = this.page;
            let a = this.viewport;
            let i = document.createElement("section");
            let {
              width,
              height
            } = c(t.rect);
            i.setAttribute("data-annotation-id", t.id);
            let l = s.Util.normalizeRect([t.rect[0], r.view[3] - t.rect[1] + r.view[1], t.rect[2], r.view[3] - t.rect[3] + r.view[1]]);
            if (t.hasOwnCanvas) {
              let e = a.transform.slice();
              let [t, r] = s.Util.singularValueDecompose2dScale(e);
              n = Math.ceil(width * t);
              o = Math.ceil(height * r);
              l[0] *= t;
              l[1] *= r;
              for (let t = 0; t < 4; t++) e[t] = Math.sign(e[t]);
              i.style.transform = `matrix(${e.join(",")})`;
            } else i.style.transform = `matrix(${a.transform.join(",")})`;
            if (i.style.transformOrigin = `${-l[0]}px ${-l[1]}px`, !e && t.borderStyle.width > 0) {
              i.style.borderWidth = `${t.borderStyle.width}px`;
              t.borderStyle.style !== s.AnnotationBorderStyleType.UNDERLINE && (n -= 2 * t.borderStyle.width, o -= 2 * t.borderStyle.width);
              let e = t.borderStyle.horizontalCornerRadius;
              let r = t.borderStyle.verticalCornerRadius;
              if (e > 0 || r > 0) {
                let t = `${e}px / ${r}px`;
                i.style.borderRadius = t;
              }
              switch (t.borderStyle.style) {
                case s.AnnotationBorderStyleType.SOLID:
                  i.style.borderStyle = "solid";
                  break;
                case s.AnnotationBorderStyleType.DASHED:
                  i.style.borderStyle = "dashed";
                  break;
                case s.AnnotationBorderStyleType.BEVELED:
                  s.warn("Unimplemented border style: beveled");
                  break;
                case s.AnnotationBorderStyleType.INSET:
                  s.warn("Unimplemented border style: inset");
                  break;
                case s.AnnotationBorderStyleType.UNDERLINE:
                  i.style.borderBottomStyle = "solid";
              }
              t.borderColor || t.color ? i.style.borderColor = s.Util.makeHexColor(0 | t.color[0], 0 | t.color[1], 0 | t.color[2]) : i.style.borderWidth = 0;
            }
            i.style.left = `${l[0]}px`;
            i.style.top = `${l[1]}px`;
            t.hasOwnCanvas ? i.style.width = i.style.height = "auto" : (i.style.width = `${width}px`, i.style.height = `${height}px`);
            return i;
          }
          _createQuadrilaterals(e = !1) {
            if (!this.data.quadPoints) return null;
            let t = [];
            let r = this.data.rect;
            for (let r of this.data.quadPoints) {
              this.data.rect = [r[2].x, r[2].y, r[1].x, r[1].y];
              t.push(this._createContainer(e));
            }
            this.data.rect = r;
            return t;
          }
          _createPopup(e, t) {
            let r = this.container;
            this.quadrilaterals && (e = e || this.quadrilaterals, r = this.quadrilaterals[0]);
            e || ((e = document.createElement("div")).style.height = r.style.height, e.style.width = r.style.width, r.appendChild(e));
            let s = new x({
              container: r,
              trigger: e,
              color: t.color,
              titleObj: t.titleObj,
              modificationDate: t.modificationDate,
              contentsObj: t.contentsObj,
              richText: t.richText,
              hideWrapper: !0
            }).render();
            s.style.left = r.style.width;
            r.appendChild(s);
          }
          _renderQuadrilaterals(e) {
            for (let t of this.quadrilaterals) t.className = e;
            return this.quadrilaterals;
          }
          render() {
            s.unreachable("Abstract method `AnnotationElement.render` called");
          }
          _getElementsByName(e, t = null) {
            let r = [];
            if (this._fieldObjects) {
              let a = this._fieldObjects[e];
              if (a) for (let {
                page,
                id,
                exportValues
              } of a) {
                if (-1 === page || id === t) continue;
                let a = "string" == typeof exportValues ? exportValues : null;
                let o = document.getElementById(id);
                if (o && !h.has(o)) {
                  s.warn(`_getElementsByName - element not allowed: ${id}`);
                  continue;
                }
                r.push({
                  id,
                  exportValue: a,
                  domElement: o
                });
              }
              return r;
            }
            for (let s of document.getElementsByName(e)) {
              let {
                id,
                exportValue
              } = s;
              id !== t && h.has(s) && r.push({
                id,
                exportValue,
                domElement: s
              });
            }
            return r;
          }
          static get platform() {
            let e = "undefined" != typeof navigator ? navigator.platform : "";
            return s.shadow(this, "platform", {
              isWin: e.includes("Win"),
              isMac: e.includes("Mac")
            });
          }
        }
        class p extends u {
          constructor(e, t = null) {
            super(e, {
              isRenderable: !!(e.data.url || e.data.dest || e.data.action || e.data.isTooltipOnly || e.data.resetForm || e.data.actions && (e.data.actions.Action || e.data.actions["Mouse Up"] || e.data.actions["Mouse Down"])),
              ignoreBorder: !!t?.ignoreBorder,
              createQuadrilaterals: !0
            });
          }
          render() {
            let {
              data,
              linkService
            } = this;
            let r = document.createElement("a");
            if (data.url) {
              linkService.addLinkAttributes || s.warn("LinkAnnotationElement.render - missing `addLinkAttributes`-method on the `linkService`-instance.");
              linkService.addLinkAttributes?.(r, data.url, data.newWindow);
            } else if (data.action) this._bindNamedAction(r, data.action); else if (data.dest) this._bindLink(r, data.dest); else {
              let t = !1;
              data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (t = !0, this._bindJSAction(r, data));
              data.resetForm ? this._bindResetFormAction(r, data.resetForm) : t || this._bindLink(r, "");
            }
            return this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map((e, t) => {
              let s = 0 === t ? r : r.cloneNode();
              e.appendChild(s);
              return e;
            }) : (this.container.className = "linkAnnotation", this.container.appendChild(r), this.container);
          }
          _bindLink(e, t) {
            e.href = this.linkService.getDestinationHash(t);
            e.onclick = () => (t && this.linkService.goToDestination(t), !1);
            (t || "" === t) && (e.className = "internalLink");
          }
          _bindNamedAction(e, t) {
            e.href = this.linkService.getAnchorUrl("");
            e.onclick = () => (this.linkService.executeNamedAction(t), !1);
            e.className = "internalLink";
          }
          _bindJSAction(e, t) {
            e.href = this.linkService.getAnchorUrl("");
            let r = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
            for (let s of Object.keys(t.actions)) {
              let a = r.get(s);
              a && (e[a] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: t.id,
                  name: s
                }
              }), !1));
            }
            e.onclick || (e.onclick = () => !1);
            e.className = "internalLink";
          }
          _bindResetFormAction(e, t) {
            let r = e.onclick;
            if (r || (e.href = this.linkService.getAnchorUrl("")), e.className = "internalLink", !this._fieldObjects) {
              s.warn('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
              r || (e.onclick = () => !1);
              return;
            }
            e.onclick = () => {
              r && r();
              let {
                fields,
                refs,
                include
              } = t;
              let i = [];
              if (0 !== fields.length || 0 !== refs.length) {
                let t = new Set(refs);
                for (let r of fields) for (let {
                  id
                } of this._fieldObjects[r] || []) t.add(id);
                for (let e of Object.values(this._fieldObjects)) for (let r of e) t.has(r.id) === include && i.push(r);
              } else for (let e of Object.values(this._fieldObjects)) i.push(...e);
              let n = this.annotationStorage;
              let o = [];
              for (let e of i) {
                let {
                  id
                } = e;
                switch (o.push(id), e.type) {
                  case "text":
                    {
                      let r = e.defaultValue || "";
                      n.setValue(id, {
                        value: r,
                        valueAsString: r
                      });
                      break;
                    }
                  case "checkbox":
                  case "radiobutton":
                    {
                      let r = e.defaultValue === e.exportValues;
                      n.setValue(id, {
                        value: r
                      });
                      break;
                    }
                  case "combobox":
                  case "listbox":
                    {
                      let r = e.defaultValue || "";
                      n.setValue(id, {
                        value: r
                      });
                      break;
                    }
                  default:
                    continue;
                }
                let r = document.getElementById(id);
                r && h.has(r) && r.dispatchEvent(new Event("resetform"));
              }
              this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: "app",
                  ids: o,
                  name: "ResetForm"
                }
              });
              return !1;
            };
          }
        }
        class g extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str)
            });
          }
          render() {
            this.container.className = "textAnnotation";
            let e = document.createElement("img");
            e.style.height = this.container.style.height;
            e.style.width = this.container.style.width;
            e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
            e.alt = "[{{type}} Annotation]";
            e.dataset.l10nId = "text_annotation_type";
            e.dataset.l10nArgs = JSON.stringify({
              type: this.data.name
            });
            this.data.hasPopup || this._createPopup(e, this.data);
            this.container.appendChild(e);
            return this.container;
          }
        }
        class f extends u {
          render() {
            this.data.alternativeText && (this.container.title = this.data.alternativeText);
            return this.container;
          }
          _getKeyModifier(e) {
            let {
              isWin,
              isMac
            } = u.platform;
            return isWin && e.ctrlKey || isMac && e.metaKey;
          }
          _setEventListener(e, t, r, s) {
            t.includes("mouse") ? e.addEventListener(t, e => {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: r,
                  value: s(e),
                  shift: e.shiftKey,
                  modifier: this._getKeyModifier(e)
                }
              });
            }) : e.addEventListener(t, e => {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: r,
                  value: s(e)
                }
              });
            });
          }
          _setEventListeners(e, t, r) {
            for (let [s, a] of t) ("Action" === a || this.data.actions?.[a]) && this._setEventListener(e, s, a, r);
          }
          _setBackgroundColor(e) {
            let t = this.data.backgroundColor || null;
            e.style.backgroundColor = null === t ? "transparent" : s.Util.makeHexColor(t[0], t[1], t[2]);
          }
          _dispatchEventFromSandbox(e, t) {
            let r = (e, t, r) => {
              let s = r.detail[e];
              r.target.style[t] = n.ColorConverters[`${s[0]}_HTML`](s.slice(1));
            };
            let s = {
              display: e => {
                let t = e.detail.display % 2 == 1;
                e.target.style.visibility = t ? "hidden" : "visible";
                this.annotationStorage.setValue(this.data.id, {
                  hidden: t,
                  print: 0 === e.detail.display || 3 === e.detail.display
                });
              },
              print: e => {
                this.annotationStorage.setValue(this.data.id, {
                  print: e.detail.print
                });
              },
              hidden: e => {
                e.target.style.visibility = e.detail.hidden ? "hidden" : "visible";
                this.annotationStorage.setValue(this.data.id, {
                  hidden: e.detail.hidden
                });
              },
              focus: e => {
                setTimeout(() => e.target.focus({
                  preventScroll: !1
                }), 0);
              },
              userName: e => {
                e.target.title = e.detail.userName;
              },
              readonly: e => {
                e.detail.readonly ? e.target.setAttribute("readonly", "") : e.target.removeAttribute("readonly");
              },
              required: e => {
                e.detail.required ? e.target.setAttribute("required", "") : e.target.removeAttribute("required");
              },
              bgColor: e => {
                r("bgColor", "backgroundColor", e);
              },
              fillColor: e => {
                r("fillColor", "backgroundColor", e);
              },
              fgColor: e => {
                r("fgColor", "color", e);
              },
              textColor: e => {
                r("textColor", "color", e);
              },
              borderColor: e => {
                r("borderColor", "borderColor", e);
              },
              strokeColor: e => {
                r("strokeColor", "borderColor", e);
              }
            };
            for (let r of Object.keys(t.detail)) {
              let a = e[r] || s[r];
              a && a(t);
            }
          }
        }
        class m extends f {
          constructor(e) {
            super(e, {
              isRenderable: e.renderForms || !e.data.hasAppearance && !!e.data.fieldValue
            });
          }
          setPropertyOnSiblings(e, t, r, s) {
            let a = this.annotationStorage;
            for (let i of this._getElementsByName(e.name, e.id)) {
              i.domElement && (i.domElement[t] = r);
              a.setValue(i.id, {
                [s]: r
              });
            }
          }
          render() {
            let e = this.annotationStorage;
            let t = this.data.id;
            this.container.className = "textWidgetAnnotation";
            let r = null;
            if (this.renderForms) {
              let s = e.getValue(t, {
                value: this.data.fieldValue,
                valueAsString: this.data.fieldValue
              });
              let a = s.valueAsString || s.value || "";
              let i = {
                userValue: null,
                formattedValue: null
              };
              this.data.multiLine ? (r = document.createElement("textarea")).textContent = a : ((r = document.createElement("input")).type = "text", r.setAttribute("value", a));
              h.add(r);
              r.disabled = this.data.readOnly;
              r.name = this.data.fieldName;
              r.tabIndex = l;
              i.userValue = a;
              r.setAttribute("id", t);
              r.addEventListener("input", s => {
                e.setValue(t, {
                  value: s.target.value
                });
                this.setPropertyOnSiblings(r, "value", s.target.value, "value");
              });
              r.addEventListener("resetform", e => {
                let t = this.data.defaultFieldValue || "";
                r.value = i.userValue = t;
                delete i.formattedValue;
              });
              let n = e => {
                i.formattedValue && (e.target.value = i.formattedValue);
                e.target.scrollLeft = 0;
              };
              if (this.enableScripting && this.hasJSActions) {
                r.addEventListener("focus", e => {
                  i.userValue && (e.target.value = i.userValue);
                });
                r.addEventListener("updatefromsandbox", r => {
                  let s = {
                    value(r) {
                      i.userValue = r.detail.value || "";
                      e.setValue(t, {
                        value: i.userValue.toString()
                      });
                      i.formattedValue || (r.target.value = i.userValue);
                    },
                    valueAsString(r) {
                      i.formattedValue = r.detail.valueAsString || "";
                      r.target !== document.activeElement && (r.target.value = i.formattedValue);
                      e.setValue(t, {
                        formattedValue: i.formattedValue
                      });
                    },
                    selRange(e) {
                      let [t, r] = e.detail.selRange;
                      t >= 0 && r < e.target.value.length && e.target.setSelectionRange(t, r);
                    }
                  };
                  this._dispatchEventFromSandbox(s, r);
                });
                r.addEventListener("keydown", e => {
                  let r = -1;
                  "Escape" === e.key ? r = 0 : "Enter" === e.key ? r = 2 : "Tab" === e.key && (r = 3);
                  -1 !== r && (i.userValue = e.target.value, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: t,
                      name: "Keystroke",
                      value: e.target.value,
                      willCommit: !0,
                      commitKey: r,
                      selStart: e.target.selectionStart,
                      selEnd: e.target.selectionEnd
                    }
                  }));
                });
                let s = n;
                n = null;
                r.addEventListener("blur", e => {
                  i.userValue = e.target.value;
                  this._mouseState.isDown && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: t,
                      name: "Keystroke",
                      value: e.target.value,
                      willCommit: !0,
                      commitKey: 1,
                      selStart: e.target.selectionStart,
                      selEnd: e.target.selectionEnd
                    }
                  });
                  s(e);
                });
                this.data.actions?.Keystroke && r.addEventListener("beforeinput", e => {
                  i.formattedValue = "";
                  let {
                    data,
                    target
                  } = e;
                  let {
                    value,
                    selectionStart,
                    selectionEnd
                  } = s;
                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: t,
                      name: "Keystroke",
                      value,
                      change: data,
                      willCommit: !1,
                      selStart: selectionStart,
                      selEnd: selectionEnd
                    }
                  });
                });
                this._setEventListeners(r, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], e => e.target.value);
              }
              if (n && r.addEventListener("blur", n), null !== this.data.maxLen && (r.maxLength = this.data.maxLen), this.data.comb) {
                let e = (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
                r.classList.add("comb");
                r.style.letterSpacing = `calc(${e}px - 1ch)`;
              }
            } else {
              (r = document.createElement("div")).textContent = this.data.fieldValue;
              r.style.verticalAlign = "middle";
              r.style.display = "table-cell";
            }
            this._setTextStyle(r);
            this._setBackgroundColor(r);
            this.container.appendChild(r);
            return this.container;
          }
          _setTextStyle(e) {
            let t = ["left", "center", "right"];
            let {
              fontSize,
              fontColor
            } = this.data.defaultAppearanceData;
            let i = e.style;
            fontSize && (i.fontSize = `${fontSize}px`);
            i.color = s.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
            null !== this.data.textAlignment && (i.textAlign = t[this.data.textAlignment]);
          }
        }
        class A extends f {
          constructor(e) {
            super(e, {
              isRenderable: e.renderForms
            });
          }
          render() {
            let e = this.annotationStorage;
            let t = this.data;
            let r = t.id;
            let s = e.getValue(r, {
              value: t.exportValue === t.fieldValue
            }).value;
            "string" == typeof s && (s = "Off" !== s, e.setValue(r, {
              value: s
            }));
            this.container.className = "buttonWidgetAnnotation checkBox";
            let a = document.createElement("input");
            h.add(a);
            a.disabled = t.readOnly;
            a.type = "checkbox";
            a.name = t.fieldName;
            s && a.setAttribute("checked", !0);
            a.setAttribute("id", r);
            a.setAttribute("exportValue", t.exportValue);
            a.tabIndex = l;
            a.addEventListener("change", s => {
              let {
                name,
                checked
              } = s.target;
              for (let s of this._getElementsByName(name, r)) {
                let r = checked && s.exportValue === t.exportValue;
                s.domElement && (s.domElement.checked = r);
                e.setValue(s.id, {
                  value: r
                });
              }
              e.setValue(r, {
                value: checked
              });
            });
            a.addEventListener("resetform", e => {
              let r = t.defaultFieldValue || "Off";
              e.target.checked = r === t.exportValue;
            });
            this.enableScripting && this.hasJSActions && (a.addEventListener("updatefromsandbox", t => {
              let s = {
                value(t) {
                  t.target.checked = "Off" !== t.detail.value;
                  e.setValue(r, {
                    value: t.target.checked
                  });
                }
              };
              this._dispatchEventFromSandbox(s, t);
            }), this._setEventListeners(a, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], e => e.target.checked));
            this._setBackgroundColor(a);
            this.container.appendChild(a);
            return this.container;
          }
        }
        class b extends f {
          constructor(e) {
            super(e, {
              isRenderable: e.renderForms
            });
          }
          render() {
            this.container.className = "buttonWidgetAnnotation radioButton";
            let e = this.annotationStorage;
            let t = this.data;
            let r = t.id;
            let s = e.getValue(r, {
              value: t.fieldValue === t.buttonValue
            }).value;
            "string" == typeof s && (s = s !== t.buttonValue, e.setValue(r, {
              value: s
            }));
            let a = document.createElement("input");
            if (h.add(a), a.disabled = t.readOnly, a.type = "radio", a.name = t.fieldName, s && a.setAttribute("checked", !0), a.setAttribute("id", r), a.tabIndex = l, a.addEventListener("change", t => {
              let {
                name,
                checked
              } = t.target;
              for (let t of this._getElementsByName(name, r)) e.setValue(t.id, {
                value: !1
              });
              e.setValue(r, {
                value: checked
              });
            }), a.addEventListener("resetform", e => {
              let r = t.defaultFieldValue;
              e.target.checked = null != r && r === t.buttonValue;
            }), this.enableScripting && this.hasJSActions) {
              let s = t.buttonValue;
              a.addEventListener("updatefromsandbox", t => {
                let a = {
                  value: t => {
                    let a = s === t.detail.value;
                    for (let s of this._getElementsByName(t.target.name)) {
                      let t = a && s.id === r;
                      s.domElement && (s.domElement.checked = t);
                      e.setValue(s.id, {
                        value: t
                      });
                    }
                  }
                };
                this._dispatchEventFromSandbox(a, t);
              });
              this._setEventListeners(a, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], e => e.target.checked);
            }
            this._setBackgroundColor(a);
            this.container.appendChild(a);
            return this.container;
          }
        }
        class _ extends p {
          constructor(e) {
            super(e, {
              ignoreBorder: e.data.hasAppearance
            });
          }
          render() {
            let e = super.render();
            e.className = "buttonWidgetAnnotation pushButton";
            this.data.alternativeText && (e.title = this.data.alternativeText);
            return e;
          }
        }
        class y extends f {
          constructor(e) {
            super(e, {
              isRenderable: e.renderForms
            });
          }
          render() {
            this.container.className = "choiceWidgetAnnotation";
            let e = this.annotationStorage;
            let t = this.data.id;
            e.getValue(t, {
              value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : void 0
            });
            let {
              fontSize
            } = this.data.defaultAppearanceData;
            fontSize || (r = 9);
            let s = `calc(${fontSize}px * var(--zoom-factor))`;
            let a = document.createElement("select");
            for (let e of (h.add(a), a.disabled = this.data.readOnly, a.name = this.data.fieldName, a.setAttribute("id", t), a.tabIndex = l, a.style.fontSize = `${fontSize}px`, !this.data.combo && (a.size = this.data.options.length, this.data.multiSelect && (a.multiple = !0)), a.addEventListener("resetform", e => {
              let t = this.data.defaultFieldValue;
              for (let e of a.options) e.selected = e.value === t;
            }), this.data.options)) {
              let t = document.createElement("option");
              t.textContent = e.displayValue;
              t.value = e.exportValue;
              this.data.combo && (t.style.fontSize = s);
              this.data.fieldValue.includes(e.exportValue) && t.setAttribute("selected", !0);
              a.appendChild(t);
            }
            let i = (e, t) => {
              let r = t ? "value" : "textContent";
              let s = e.target.options;
              return e.target.multiple ? Array.prototype.filter.call(s, e => e.selected).map(e => e[r]) : -1 === s.selectedIndex ? null : s[s.selectedIndex][r];
            };
            let n = e => {
              let t = e.target.options;
              return Array.prototype.map.call(t, e => ({
                displayValue: e.textContent,
                exportValue: e.value
              }));
            };
            this.enableScripting && this.hasJSActions ? (a.addEventListener("updatefromsandbox", r => {
              let s = {
                value(r) {
                  let s = r.detail.value;
                  let n = new Set(Array.isArray(s) ? s : [s]);
                  for (let e of a.options) e.selected = n.has(e.value);
                  e.setValue(t, {
                    value: i(r, !0)
                  });
                },
                multipleSelection(e) {
                  a.multiple = !0;
                },
                remove(r) {
                  let s = a.options;
                  let o = r.detail.remove;
                  s[o].selected = !1;
                  a.remove(o);
                  s.length > 0 && -1 === Array.prototype.findIndex.call(s, e => e.selected) && (s[0].selected = !0);
                  e.setValue(t, {
                    value: i(r, !0),
                    items: n(r)
                  });
                },
                clear(r) {
                  for (; 0 !== a.length;) a.remove(0);
                  e.setValue(t, {
                    value: null,
                    items: []
                  });
                },
                insert(r) {
                  let {
                    index,
                    displayValue,
                    exportValue
                  } = r.detail.insert;
                  let h = document.createElement("option");
                  h.textContent = displayValue;
                  h.value = exportValue;
                  a.insertBefore(h, a.children[index]);
                  e.setValue(t, {
                    value: i(r, !0),
                    items: n(r)
                  });
                },
                items(r) {
                  let {
                    items
                  } = r.detail;
                  for (; 0 !== a.length;) a.remove(0);
                  for (let e of items) {
                    let {
                      displayValue,
                      exportValue
                    } = e;
                    let s = document.createElement("option");
                    s.textContent = displayValue;
                    s.value = exportValue;
                    a.appendChild(s);
                  }
                  a.options.length > 0 && (a.options[0].selected = !0);
                  e.setValue(t, {
                    value: i(r, !0),
                    items: n(r)
                  });
                },
                indices(r) {
                  let s = new Set(r.detail.indices);
                  for (let e of r.target.options) e.selected = s.has(e.index);
                  e.setValue(t, {
                    value: i(r, !0)
                  });
                },
                editable(e) {
                  e.target.disabled = !e.detail.editable;
                }
              };
              this._dispatchEventFromSandbox(s, r);
            }), a.addEventListener("input", r => {
              let s = i(r, !0);
              let a = i(r, !1);
              e.setValue(t, {
                value: s
              });
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: t,
                  name: "Keystroke",
                  value: a,
                  changeEx: s,
                  willCommit: !0,
                  commitKey: 1,
                  keyDown: !1
                }
              });
            }), this._setEventListeners(a, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], e => e.target.checked)) : a.addEventListener("input", function(r) {
              e.setValue(t, {
                value: i(r)
              });
            });
            this._setBackgroundColor(a);
            this.container.appendChild(a);
            return this.container;
          }
        }
        class S extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str)
            });
          }
          render() {
            let e = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
            if (this.container.className = "popupAnnotation", e.includes(this.data.parentType)) return this.container;
            let t = `[data-annotation-id="${this.data.parentId}"]`;
            let r = this.layer.querySelectorAll(t);
            if (0 === r.length) return this.container;
            let a = new x({
              container: this.container,
              trigger: Array.from(r),
              color: this.data.color,
              titleObj: this.data.titleObj,
              modificationDate: this.data.modificationDate,
              contentsObj: this.data.contentsObj,
              richText: this.data.richText
            });
            let i = this.page;
            let n = s.Util.normalizeRect([this.data.parentRect[0], i.view[3] - this.data.parentRect[1] + i.view[1], this.data.parentRect[2], i.view[3] - this.data.parentRect[3] + i.view[1]]);
            let o = n[0] + this.data.parentRect[2] - this.data.parentRect[0];
            let l = n[1];
            this.container.style.transformOrigin = `${-o}px ${-l}px`;
            this.container.style.left = `${o}px`;
            this.container.style.top = `${l}px`;
            this.container.appendChild(a.render());
            return this.container;
          }
        }
        class x {
          constructor(e) {
            this.container = e.container;
            this.trigger = e.trigger;
            this.color = e.color;
            this.titleObj = e.titleObj;
            this.modificationDate = e.modificationDate;
            this.contentsObj = e.contentsObj;
            this.richText = e.richText;
            this.hideWrapper = e.hideWrapper || !1;
            this.pinned = !1;
          }
          render() {
            let e = .7;
            let t = document.createElement("div");
            t.className = "popupWrapper";
            this.hideElement = this.hideWrapper ? t : this.container;
            this.hideElement.hidden = !0;
            let r = document.createElement("div");
            r.className = "popup";
            let i = this.color;
            if (i) {
              let t = e * (255 - i[0]) + i[0];
              let a = e * (255 - i[1]) + i[1];
              let n = e * (255 - i[2]) + i[2];
              r.style.backgroundColor = s.Util.makeHexColor(0 | t, 0 | a, 0 | n);
            }
            let n = document.createElement("h1");
            n.dir = this.titleObj.dir;
            n.textContent = this.titleObj.str;
            r.appendChild(n);
            let l = a.PDFDateString.toDateObject(this.modificationDate);
            if (l) {
              let e = document.createElement("span");
              e.className = "popupDate";
              e.textContent = "{{date}}, {{time}}";
              e.dataset.l10nId = "annotation_date_string";
              e.dataset.l10nArgs = JSON.stringify({
                date: l.toLocaleDateString(),
                time: l.toLocaleTimeString()
              });
              r.appendChild(e);
            }
            if (this.richText?.str && (!this.contentsObj?.str || this.contentsObj.str === this.richText.str)) {
              o.XfaLayer.render({
                xfaHtml: this.richText.html,
                intent: "richText",
                div: r
              });
              r.lastChild.className = "richText popupContent";
            } else {
              let e = this._formatContents(this.contentsObj);
              r.appendChild(e);
            }
            for (let e of (Array.isArray(this.trigger) || (this.trigger = [this.trigger]), this.trigger)) {
              e.addEventListener("click", this._toggle.bind(this));
              e.addEventListener("mouseover", this._show.bind(this, !1));
              e.addEventListener("mouseout", this._hide.bind(this, !1));
            }
            r.addEventListener("click", this._hide.bind(this, !0));
            t.appendChild(r);
            return t;
          }
          _formatContents({
            str: e,
            dir: t
          }) {
            let r = document.createElement("p");
            r.className = "popupContent";
            r.dir = t;
            let s = e.split(/(?:\r\n?|\n)/);
            for (function() {
              let e = 0;
              let t = s.length;
            }(); e < t; ++e) {
              let a = s[e];
              r.appendChild(document.createTextNode(a));
              e < t - 1 && r.appendChild(document.createElement("br"));
            }
            return r;
          }
          _toggle() {
            this.pinned ? this._hide(!0) : this._show(!0);
          }
          _show(e = !1) {
            e && (this.pinned = !0);
            this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex += 1);
          }
          _hide(e = !0) {
            e && (this.pinned = !1);
            this.hideElement.hidden || this.pinned || (this.hideElement.hidden = !0, this.container.style.zIndex -= 1);
          }
        }
        class v extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "freeTextAnnotation";
            this.data.hasPopup || this._createPopup(null, this.data);
            return this.container;
          }
        }
        class C extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "lineAnnotation";
            let e = this.data;
            let {
              width,
              height
            } = c(e.rect);
            let s = this.svgFactory.create(width, height);
            let a = this.svgFactory.createElement("svg:line");
            a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]);
            a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]);
            a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]);
            a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]);
            a.setAttribute("stroke-width", e.borderStyle.width || 1);
            a.setAttribute("stroke", "transparent");
            a.setAttribute("fill", "transparent");
            s.appendChild(a);
            this.container.append(s);
            this._createPopup(a, e);
            return this.container;
          }
        }
        class P extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "squareAnnotation";
            let e = this.data;
            let {
              width,
              height
            } = c(e.rect);
            let s = this.svgFactory.create(width, height);
            let a = e.borderStyle.width;
            let i = this.svgFactory.createElement("svg:rect");
            i.setAttribute("x", a / 2);
            i.setAttribute("y", a / 2);
            i.setAttribute("width", width - a);
            i.setAttribute("height", height - a);
            i.setAttribute("stroke-width", a || 1);
            i.setAttribute("stroke", "transparent");
            i.setAttribute("fill", "transparent");
            s.appendChild(i);
            this.container.append(s);
            this._createPopup(i, e);
            return this.container;
          }
        }
        class T extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "circleAnnotation";
            let e = this.data;
            let {
              width,
              height
            } = c(e.rect);
            let s = this.svgFactory.create(width, height);
            let a = e.borderStyle.width;
            let i = this.svgFactory.createElement("svg:ellipse");
            i.setAttribute("cx", width / 2);
            i.setAttribute("cy", height / 2);
            i.setAttribute("rx", width / 2 - a / 2);
            i.setAttribute("ry", height / 2 - a / 2);
            i.setAttribute("stroke-width", a || 1);
            i.setAttribute("stroke", "transparent");
            i.setAttribute("fill", "transparent");
            s.appendChild(i);
            this.container.append(s);
            this._createPopup(i, e);
            return this.container;
          }
        }
        class k extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
            this.containerClassName = "polylineAnnotation";
            this.svgElementName = "svg:polyline";
          }
          render() {
            this.container.className = this.containerClassName;
            let e = this.data;
            let {
              width,
              height
            } = c(e.rect);
            let s = this.svgFactory.create(width, height);
            let a = [];
            for (let t of e.vertices) {
              let r = t.x - e.rect[0];
              let s = e.rect[3] - t.y;
              a.push(r + "," + s);
            }
            a = a.join(" ");
            let i = this.svgFactory.createElement(this.svgElementName);
            i.setAttribute("points", a);
            i.setAttribute("stroke-width", e.borderStyle.width || 1);
            i.setAttribute("stroke", "transparent");
            i.setAttribute("fill", "transparent");
            s.appendChild(i);
            this.container.append(s);
            this._createPopup(i, e);
            return this.container;
          }
        }
        class R extends k {
          constructor(e) {
            super(e);
            this.containerClassName = "polygonAnnotation";
            this.svgElementName = "svg:polygon";
          }
        }
        class w extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "caretAnnotation";
            this.data.hasPopup || this._createPopup(null, this.data);
            return this.container;
          }
        }
        class E extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
            this.containerClassName = "inkAnnotation";
            this.svgElementName = "svg:polyline";
          }
          render() {
            this.container.className = this.containerClassName;
            let e = this.data;
            let {
              width,
              height
            } = c(e.rect);
            let s = this.svgFactory.create(width, height);
            for (let t of e.inkLists) {
              let r = [];
              for (let s of t) {
                let t = s.x - e.rect[0];
                let a = e.rect[3] - s.y;
                r.push(`${t},${a}`);
              }
              r = r.join(" ");
              let a = this.svgFactory.createElement(this.svgElementName);
              a.setAttribute("points", r);
              a.setAttribute("stroke-width", e.borderStyle.width || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              this._createPopup(a, e);
              s.appendChild(a);
            }
            this.container.append(s);
            return this.container;
          }
        }
        class F extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.className = "highlightAnnotation", this.container);
          }
        }
        class M extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.className = "underlineAnnotation", this.container);
          }
        }
        class O extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.className = "squigglyAnnotation", this.container);
          }
        }
        class L extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return (this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals) ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.className = "strikeoutAnnotation", this.container);
          }
        }
        class D extends u {
          constructor(e) {
            super(e, {
              isRenderable: !!(e.data.hasPopup || e.data.titleObj?.str || e.data.contentsObj?.str || e.data.richText?.str),
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "stampAnnotation";
            this.data.hasPopup || this._createPopup(null, this.data);
            return this.container;
          }
        }
        class I extends u {
          constructor(e) {
            super(e, {
              isRenderable: !0
            });
            let {
              filename,
              content
            } = this.data.file;
            this.filename = a.getFilenameFromUrl(filename);
            this.content = content;
            this.linkService.eventBus?.dispatch("fileattachmentannotation", {
              source: this,
              id: s.stringToPDFString(filename),
              filename,
              content
            });
          }
          render() {
            this.container.className = "fileAttachmentAnnotation";
            let e = document.createElement("div");
            e.style.height = this.container.style.height;
            e.style.width = this.container.style.width;
            e.addEventListener("dblclick", this._download.bind(this));
            !this.data.hasPopup && (this.data.titleObj?.str || this.data.contentsObj?.str || this.data.richText) && this._createPopup(e, this.data);
            this.container.appendChild(e);
            return this.container;
          }
          _download() {
            this.downloadManager?.openOrDownloadData(this.container, this.content, this.filename);
          }
        }
        class N {
          static render(e) {
            let t = [];
            let r = [];
            for (let a of e.annotations) {
              if (!a) continue;
              let {
                width,
                height
              } = c(a.rect);
              if (!(width <= 0) && !(height <= 0)) {
                if (a.annotationType === s.AnnotationType.POPUP) {
                  r.push(a);
                  continue;
                }
                t.push(a);
              }
            }
            r.length && t.push(...r);
            let n = e.div;
            for (let r of t) {
              let t = d.create({
                data: r,
                layer: n,
                page: e.page,
                viewport: e.viewport,
                linkService: e.linkService,
                downloadManager: e.downloadManager,
                imageResourcesPath: e.imageResourcesPath || "",
                renderForms: !1 !== e.renderForms,
                svgFactory: new a.DOMSVGFactory(),
                annotationStorage: e.annotationStorage || new i.AnnotationStorage(),
                enableScripting: e.enableScripting,
                hasJSActions: e.hasJSActions,
                fieldObjects: e.fieldObjects,
                mouseState: e.mouseState || {
                  isDown: !1
                }
              });
              if (t.isRenderable) {
                let e = t.render();
                if (r.hidden && (e.style.visibility = "hidden"), Array.isArray(e)) for (let t of e) n.appendChild(t); else t instanceof S ? n.prepend(e) : n.appendChild(e);
              }
            }
            this.#l(n, e.annotationCanvasMap);
          }
          static update(e) {
            let t;
            let r;
            let {
              page,
              viewport,
              annotations,
              annotationCanvasMap,
              div
            } = e;
            let h = viewport.transform;
            let c = `matrix(${h.join(",")})`;
            for (let e of annotations) {
              let i = div.querySelectorAll(`[data-annotation-id="${e.id}"]`);
              if (i) for (let n of i) if (e.hasOwnCanvas) {
                let i = s.Util.normalizeRect([e.rect[0], page.view[3] - e.rect[1] + page.view[1], e.rect[2], page.view[3] - e.rect[3] + page.view[1]]);
                if (!r) {
                  t = Math.abs(h[0] || h[1]);
                  let e = h.slice();
                  for (let t = 0; t < 4; t++) e[t] = Math.sign(e[t]);
                  r = `matrix(${e.join(",")})`;
                }
                let o = i[0] * t;
                let l = i[1] * t;
                n.style.left = `${o}px`;
                n.style.top = `${l}px`;
                n.style.transformOrigin = `${-o}px ${-l}px`;
                n.style.transform = r;
              } else n.style.transform = c;
            }
            this.#l(div, annotationCanvasMap);
            div.hidden = !1;
          }
          static #l(e, t) {
            if (t) {
              for (let [r, s] of t) {
                let t = e.querySelector(`[data-annotation-id="${r}"]`);
                if (!t) continue;
                let {
                  firstChild
                } = t;
                "CANVAS" === firstChild.nodeName ? t.replaceChild(s, firstChild) : t.insertBefore(s, firstChild);
              }
              t.clear();
            }
          }
        }
        t.AnnotationLayer = N;
      }, (e, t) => {
        function r(e) {
          return Math.floor(255 * Math.max(0, Math.min(1, e))).toString(16).padStart(2, "0");
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.ColorConverters = void 0;
        class s {
          static CMYK_G([e, t, r, s]) {
            return ["G", 1 - Math.min(1, .3 * e + .59 * r + .11 * t + s)];
          }
          static G_CMYK([e]) {
            return ["CMYK", 0, 0, 0, 1 - e];
          }
          static G_RGB([e]) {
            return ["RGB", e, e, e];
          }
          static G_HTML([e]) {
            let t = r(e);
            return `#${t}${t}${t}`;
          }
          static RGB_G([e, t, r]) {
            return ["G", .3 * e + .59 * t + .11 * r];
          }
          static RGB_HTML([e, t, s]) {
            let a = r(e);
            let i = r(t);
            let n = r(s);
            return `#${a}${i}${n}`;
          }
          static T_HTML() {
            return "#00000000";
          }
          static CMYK_RGB([e, t, r, s]) {
            return ["RGB", 1 - Math.min(1, e + s), 1 - Math.min(1, r + s), 1 - Math.min(1, t + s)];
          }
          static CMYK_HTML(e) {
            return this.RGB_HTML(this.CMYK_RGB(e));
          }
          static RGB_CMYK([e, t, r]) {
            let s = 1 - e;
            let a = 1 - t;
            let i = 1 - r;
            let n = Math.min(s, a, i);
            return ["CMYK", s, a, i, n];
          }
        }
        t.ColorConverters = s;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.XfaLayer = void 0;
        var s = r(1);
        var a = r(17);
        class i {
          static setupStorage(e, t, r, s, a) {
            let i = s.getValue(t, {
              value: null
            });
            switch (r.name) {
              case "textarea":
                if (null !== i.value && (e.textContent = i.value), "print" === a) break;
                e.addEventListener("input", e => {
                  s.setValue(t, {
                    value: e.target.value
                  });
                });
                break;
              case "input":
                if ("radio" === r.attributes.type || "checkbox" === r.attributes.type) {
                  if (i.value === r.attributes.xfaOn ? e.setAttribute("checked", !0) : i.value === r.attributes.xfaOff && e.removeAttribute("checked"), "print" === a) break;
                  e.addEventListener("change", e => {
                    s.setValue(t, {
                      value: e.target.checked ? e.target.getAttribute("xfaOn") : e.target.getAttribute("xfaOff")
                    });
                  });
                } else {
                  if (null !== i.value && e.setAttribute("value", i.value), "print" === a) break;
                  e.addEventListener("input", e => {
                    s.setValue(t, {
                      value: e.target.value
                    });
                  });
                }
                break;
              case "select":
                if (null !== i.value) for (let e of r.children) e.attributes.value === i.value && (e.attributes.selected = !0);
                e.addEventListener("input", e => {
                  let r = e.target.options;
                  let a = -1 === r.selectedIndex ? "" : r[r.selectedIndex].value;
                  s.setValue(t, {
                    value: a
                  });
                });
            }
          }
          static setAttributes({
            html: e,
            element: t,
            storage: r = null,
            intent: a,
            linkService: i
          }) {
            let {
              attributes
            } = t;
            let o = e instanceof HTMLAnchorElement;
            for (let [t, r] of ("radio" === attributes.type && (attributes.name = `${attributes.name}-${a}`), Object.entries(attributes))) if (null != r && "dataId" !== t) {
              if ("style" !== t) {
                if ("textContent" === t) e.textContent = r; else if ("class" === t) r.length && e.setAttribute(t, r.join(" ")); else {
                  if (o && ("href" === t || "newWindow" === t)) continue;
                  e.setAttribute(t, r);
                }
              } else Object.assign(e.style, r);
            }
            o && (i.addLinkAttributes || s.warn("XfaLayer.setAttribute - missing `addLinkAttributes`-method on the `linkService`-instance."), i.addLinkAttributes?.(e, attributes.href, attributes.newWindow));
            r && attributes.dataId && this.setupStorage(e, attributes.dataId, t, r);
          }
          static render(e) {
            let t = e.annotationStorage;
            let r = e.linkService;
            let s = e.xfaHtml;
            let i = e.intent || "display";
            let n = document.createElement(s.name);
            s.attributes && this.setAttributes({
              html: n,
              element: s,
              intent: i,
              linkService: r
            });
            let o = [[s, -1, n]];
            let l = e.div;
            if (l.appendChild(n), e.viewport) {
              let t = `matrix(${e.viewport.transform.join(",")})`;
              l.style.transform = t;
            }
            "richText" !== i && l.setAttribute("class", "xfaLayer xfaFont");
            let h = [];
            for (; o.length > 0;) {
              let e;
              let [s, n, l] = o[o.length - 1];
              if (n + 1 === s.children.length) {
                o.pop();
                continue;
              }
              let c = s.children[++o[o.length - 1][1]];
              if (null === c) continue;
              let {
                name
              } = c;
              if ("#text" === name) {
                let e = document.createTextNode(c.value);
                h.push(e);
                l.appendChild(e);
                continue;
              }
              if (e = c?.attributes?.xmlns ? document.createElementNS(c.attributes.xmlns, name) : document.createElement(name), l.appendChild(e), c.attributes && this.setAttributes({
                html: e,
                element: c,
                storage: t,
                intent: i,
                linkService: r
              }), c.children && c.children.length > 0) o.push([c, -1, e]); else if (c.value) {
                let t = document.createTextNode(c.value);
                a.XfaText.shouldBuildText(name) && h.push(t);
                e.appendChild(t);
              }
            }
            for (let e of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) e.setAttribute("readOnly", !0);
            return {
              textDivs: h
            };
          }
          static update(e) {
            let t = `matrix(${e.viewport.transform.join(",")})`;
            e.div.style.transform = t;
            e.div.hidden = !1;
          }
        }
        t.XfaLayer = i;
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.renderTextLayer = A;
        var s = r(1);
        let a = 1e5;
        let i = 30;
        let n = .8;
        let o = new Map();
        let l = /^\s+$/g;
        function h(e, t) {
          let r = o.get(e);
          if (r) return r;
          t.save();
          t.font = `${i}px ${e}`;
          let s = t.measureText("");
          let a = s.fontBoundingBoxAscent;
          let l = Math.abs(s.fontBoundingBoxDescent);
          if (a) {
            t.restore();
            let r = a / (a + l);
            o.set(e, r);
            return r;
          }
          t.strokeStyle = "red";
          t.clearRect(0, 0, i, i);
          t.strokeText("g", 0, 0);
          let h = t.getImageData(0, 0, i, i).data;
          l = 0;
          for (let e = h.length - 1 - 3; e >= 0; e -= 4) if (h[e] > 0) {
            l = Math.ceil(e / 4 / i);
            break;
          }
          t.clearRect(0, 0, i, i);
          t.strokeText("A", 0, i);
          h = t.getImageData(0, 0, i, i).data;
          a = 0;
          for (function() {
            let e = 0;
            let t = h.length;
          }(); e < t; e += 4) if (h[e] > 0) {
            a = i - Math.floor(e / 4 / i);
            break;
          }
          if (t.restore(), a) {
            let t = a / (a + l);
            o.set(e, t);
            return t;
          }
          o.set(e, n);
          return n;
        }
        function c(e, t, r, a) {
          let i;
          let n;
          let o = document.createElement("span");
          let c = e._enhanceTextSelection ? {
            angle: 0,
            canvasWidth: 0,
            hasText: "" !== t.str,
            hasEOL: t.hasEOL,
            originalTransform: null,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            scale: 1
          } : {
            angle: 0,
            canvasWidth: 0,
            hasText: "" !== t.str,
            hasEOL: t.hasEOL
          };
          e._textDivs.push(o);
          let d = s.Util.transform(e._viewport.transform, t.transform);
          let u = Math.atan2(d[1], d[0]);
          let p = r[t.fontName];
          p.vertical && (u += Math.PI / 2);
          let g = Math.hypot(d[2], d[3]);
          let f = g * h(p.fontFamily, a);
          0 === u ? (i = d[4], n = d[5] - f) : (i = d[4] + f * Math.sin(u), n = d[5] - f * Math.cos(u));
          o.style.left = `${i}px`;
          o.style.top = `${n}px`;
          o.style.fontSize = `${g}px`;
          o.style.fontFamily = p.fontFamily;
          o.setAttribute("role", "presentation");
          o.textContent = t.str;
          o.dir = t.dir;
          e._fontInspectorEnabled && (o.dataset.fontName = t.fontName);
          0 !== u && (c.angle = 180 / Math.PI * u);
          let m = !1;
          if (t.str.length > 1 || e._enhanceTextSelection && l.test(t.str)) m = !0; else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
            let e = Math.abs(t.transform[0]);
            let r = Math.abs(t.transform[3]);
            e !== r && Math.max(e, r) / Math.min(e, r) > 1.5 && (m = !0);
          }
          if (m && (p.vertical ? c.canvasWidth = t.height * e._viewport.scale : c.canvasWidth = t.width * e._viewport.scale), e._textDivProperties.set(o, c), e._textContentStream && e._layoutText(o), e._enhanceTextSelection && c.hasText) {
            let r;
            let a;
            let l = 1;
            let h = 0;
            0 !== u && (l = Math.cos(u), h = Math.sin(u));
            let c = (p.vertical ? t.height : t.width) * e._viewport.scale;
            let d = g;
            0 !== u ? (r = [l, h, -h, l, i, n], a = s.Util.getAxialAlignedBoundingBox([0, 0, c, d], r)) : a = [i, n, i + c, n + d];
            e._bounds.push({
              left: a[0],
              top: a[1],
              right: a[2],
              bottom: a[3],
              div: o,
              size: [c, d],
              m: r
            });
          }
        }
        function d(e) {
          if (e._canceled) return;
          let t = e._textDivs;
          let r = e._capability;
          let s = t.length;
          if (s > a) {
            e._renderingDone = !0;
            r.resolve();
            return;
          }
          if (!e._textContentStream) for (let r = 0; r < s; r++) e._layoutText(t[r]);
          e._renderingDone = !0;
          r.resolve();
        }
        function u(e, t, r) {
          let s = 0;
          for (let a = 0; a < r; a++) {
            let r = e[t++];
            r > 0 && (s = s ? Math.min(r, s) : r);
          }
          return s;
        }
        function p(e) {
          let t = e._bounds;
          let r = e._viewport;
          let a = g(r.width, r.height, t);
          for (let r = 0; r < a.length; r++) {
            let i = t[r].div;
            let n = e._textDivProperties.get(i);
            if (0 === n.angle) {
              n.paddingLeft = t[r].left - a[r].left;
              n.paddingTop = t[r].top - a[r].top;
              n.paddingRight = a[r].right - t[r].right;
              n.paddingBottom = a[r].bottom - t[r].bottom;
              e._textDivProperties.set(i, n);
              continue;
            }
            let o = a[r];
            let l = t[r];
            let h = l.m;
            let c = h[0];
            let d = h[1];
            let p = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size];
            let g = new Float64Array(64);
            for (function() {
              let e = 0;
              let t = p.length;
            }(); e < t; e++) {
              let t = s.Util.applyTransform(p[e], h);
              g[e + 0] = c && (o.left - t[0]) / c;
              g[e + 4] = d && (o.top - t[1]) / d;
              g[e + 8] = c && (o.right - t[0]) / c;
              g[e + 12] = d && (o.bottom - t[1]) / d;
              g[e + 16] = d && -((o.left - t[0]) / d);
              g[e + 20] = c && (o.top - t[1]) / c;
              g[e + 24] = d && -((o.right - t[0]) / d);
              g[e + 28] = c && (o.bottom - t[1]) / c;
              g[e + 32] = c && -((o.left - t[0]) / c);
              g[e + 36] = d && -((o.top - t[1]) / d);
              g[e + 40] = c && -((o.right - t[0]) / c);
              g[e + 44] = d && -((o.bottom - t[1]) / d);
              g[e + 48] = d && (o.left - t[0]) / d;
              g[e + 52] = c && -((o.top - t[1]) / c);
              g[e + 56] = d && (o.right - t[0]) / d;
              g[e + 60] = c && -((o.bottom - t[1]) / c);
            }
            let f = 1 + Math.min(Math.abs(c), Math.abs(d));
            n.paddingLeft = u(g, 32, 16) / f;
            n.paddingTop = u(g, 48, 16) / f;
            n.paddingRight = u(g, 0, 16) / f;
            n.paddingBottom = u(g, 16, 16) / f;
            e._textDivProperties.set(i, n);
          }
        }
        function g(e, t, r) {
          let s = r.map(function(e, t) {
            return {
              x1: e.left,
              y1: e.top,
              x2: e.right,
              y2: e.bottom,
              index: t,
              x1New: void 0,
              x2New: void 0
            };
          });
          f(e, s);
          let a = Array(r.length);
          for (let e of s) a[e.index] = {
            left: e.x1New,
            top: 0,
            right: e.x2New,
            bottom: 0
          };
          for (let i of (r.map(function(t, r) {
            let i = a[r];
            let n = s[r];
            n.x1 = t.top;
            n.y1 = e - i.right;
            n.x2 = t.bottom;
            n.y2 = e - i.left;
            n.index = r;
            n.x1New = void 0;
            n.x2New = void 0;
          }), f(t, s), s)) {
            let e = i.index;
            a[e].top = i.x1New;
            a[e].bottom = i.x2New;
          }
          return a;
        }
        function f(e, t) {
          t.sort(function(e, t) {
            return e.x1 - t.x1 || e.index - t.index;
          });
          let r = [{
            start: -1 / 0,
            end: 1 / 0,
            boundary: {
              x1: -1 / 0,
              y1: -1 / 0,
              x2: 0,
              y2: 1 / 0,
              index: -1,
              x1New: 0,
              x2New: 0
            }
          }];
          for (let e of t) {
            let t;
            let s;
            let a = 0;
            for (; a < r.length && r[a].end <= e.y1;) a++;
            let i = r.length - 1;
            for (; i >= 0 && r[i].start >= e.y2;) i--;
            let n;
            let o;
            let l = -1 / 0;
            for (n = a; n <= i; n++) {
              let a;
              (a = (s = (t = r[n]).boundary).x2 > e.x1 ? s.index > e.index ? s.x1New : e.x1 : void 0 === s.x2New ? (s.x2 + e.x1) / 2 : s.x2New) > l && (l = a);
            }
            for (e.x1New = l, n = a; n <= i; n++) void 0 === (s = (t = r[n]).boundary).x2New ? s.x2 > e.x1 ? s.index > e.index && (s.x2New = s.x2) : s.x2New = l : s.x2New > l && (s.x2New = Math.max(l, s.x2));
            let h = [];
            let c = null;
            for (n = a; n <= i; n++) {
              let a = (s = (t = r[n]).boundary).x2 > e.x2 ? s : e;
              c === a ? h[h.length - 1].end = t.end : (h.push({
                start: t.start,
                end: t.end,
                boundary: a
              }), c = a);
            }
            for (r[a].start < e.y1 && (h[0].start = e.y1, h.unshift({
              start: r[a].start,
              end: e.y1,
              boundary: r[a].boundary
            })), e.y2 < r[i].end && (h[h.length - 1].end = e.y2, h.push({
              start: e.y2,
              end: r[i].end,
              boundary: r[i].boundary
            })), n = a; n <= i; n++) {
              if (void 0 !== (s = (t = r[n]).boundary).x2New) continue;
              let e = !1;
              for (o = a - 1; !e && o >= 0 && r[o].start >= s.y1; o--) e = r[o].boundary === s;
              for (o = i + 1; !e && o < r.length && r[o].end <= s.y2; o++) e = r[o].boundary === s;
              for (o = 0; !e && o < h.length; o++) e = h[o].boundary === s;
              e || (s.x2New = l);
            }
            Array.prototype.splice.apply(r, [a, i - a + 1].concat(h));
          }
          for (let t of r) {
            let r = t.boundary;
            void 0 === r.x2New && (r.x2New = Math.max(e, r.x2));
          }
        }
        class m {
          constructor({
            textContent: e,
            textContentStream: t,
            container: r,
            viewport: a,
            textDivs: i,
            textContentItemsStr: n,
            enhanceTextSelection: o
          }) {
            this._textContent = e;
            this._textContentStream = t;
            this._container = r;
            this._document = r.ownerDocument;
            this._viewport = a;
            this._textDivs = i || [];
            this._textContentItemsStr = n || [];
            this._enhanceTextSelection = !!o;
            this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
            this._reader = null;
            this._layoutTextLastFontSize = null;
            this._layoutTextLastFontFamily = null;
            this._layoutTextCtx = null;
            this._textDivProperties = new WeakMap();
            this._renderingDone = !1;
            this._canceled = !1;
            this._capability = s.createPromiseCapability();
            this._renderTimer = null;
            this._bounds = [];
            this._capability.promise.$$finally(() => {
              this._enhanceTextSelection || (this._textDivProperties = null);
              this._layoutTextCtx && (this._layoutTextCtx.canvas.width = 0, this._layoutTextCtx.canvas.height = 0, this._layoutTextCtx = null);
            }).catch(() => { });
          }
          get promise() {
            return this._capability.promise;
          }
          cancel() {
            this._canceled = !0;
            this._reader && (this._reader.cancel(new s.AbortException("TextLayer task cancelled.")).catch(() => { }), this._reader = null);
            null !== this._renderTimer && (clearTimeout(this._renderTimer), this._renderTimer = null);
            this._capability.reject(Error("TextLayer task cancelled."));
          }
          _processItems(e, t) {
            for (function() {
              let r = 0;
              let s = e.length;
            }(); r < s; r++) {
              if (void 0 === e[r].str) {
                if ("beginMarkedContentProps" === e[r].type || "beginMarkedContent" === e[r].type) {
                  let t = this._container;
                  this._container = document.createElement("span");
                  this._container.classList.add("markedContent");
                  null !== e[r].id && this._container.setAttribute("id", `${e[r].id}`);
                  t.appendChild(this._container);
                } else "endMarkedContent" === e[r].type && (this._container = this._container.parentNode);
                continue;
              }
              this._textContentItemsStr.push(e[r].str);
              c(this, e[r], t, this._layoutTextCtx);
            }
          }
          _layoutText(e) {
            let t = this._textDivProperties.get(e);
            let r = "";
            if (0 !== t.canvasWidth && t.hasText) {
              let {
                fontSize,
                fontFamily
              } = e.style;
              (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) && (this._layoutTextCtx.font = `${fontSize} ${fontFamily}`, this._layoutTextLastFontSize = fontSize, this._layoutTextLastFontFamily = fontFamily);
              let {
                width
              } = this._layoutTextCtx.measureText(e.textContent);
              if (width > 0) {
                let e = t.canvasWidth / width;
                this._enhanceTextSelection && (t.scale = e);
                r = `scaleX(${e})`;
              }
            }
            if (0 !== t.angle && (r = `rotate(${t.angle}deg) ${r}`), r.length > 0 && (this._enhanceTextSelection && (t.originalTransform = r), e.style.transform = r), t.hasText && this._container.appendChild(e), t.hasEOL) {
              let e = document.createElement("br");
              e.setAttribute("role", "presentation");
              this._container.appendChild(e);
            }
          }
          _render(e = 0) {
            let t = s.createPromiseCapability();
            let r = Object.create(null);
            let a = this._document.createElement("canvas");
            if (a.height = a.width = i, a.mozOpaque = !0, this._layoutTextCtx = a.getContext("2d", {
              alpha: !1
            }), this._textContent) {
              let e = this._textContent.items;
              let r = this._textContent.styles;
              this._processItems(e, r);
              t.resolve();
            } else if (this._textContentStream) {
              let e = () => {
                this._reader.read().then(({
                  value: s,
                  done: a
                }) => {
                  if (a) {
                    t.resolve();
                    return;
                  }
                  Object.assign(r, s.styles);
                  this._processItems(s.items, r);
                  e();
                }, t.reject);
              };
              this._reader = this._textContentStream.getReader();
              e();
            } else throw Error('Neither "textContent" nor "textContentStream" parameters specified.');
            t.promise.then(() => {
              r = null;
              e ? this._renderTimer = setTimeout(() => {
                d(this);
                this._renderTimer = null;
              }, e) : d(this);
            }, this._capability.reject);
          }
          expandTextDivs(e = !1) {
            var _this = this;
            if (!this._enhanceTextSelection || !this._renderingDone) return;
            null !== this._bounds && (p(this), this._bounds = null);
            let t = [];
            let r = [];
            for (function() {
              let s = 0;
              let a = _this._textDivs.length;
            }(); s < a; s++) {
              let a = this._textDivs[s];
              let i = this._textDivProperties.get(a);
              i.hasText && (e ? (t.length = 0, r.length = 0, i.originalTransform && t.push(i.originalTransform), i.paddingTop > 0 ? (r.push(`${i.paddingTop}px`), t.push(`translateY(${-i.paddingTop}px)`)) : r.push(0), i.paddingRight > 0 ? r.push(`${i.paddingRight / i.scale}px`) : r.push(0), i.paddingBottom > 0 ? r.push(`${i.paddingBottom}px`) : r.push(0), i.paddingLeft > 0 ? (r.push(`${i.paddingLeft / i.scale}px`), t.push(`translateX(${-i.paddingLeft / i.scale}px)`)) : r.push(0), a.style.padding = r.join(" "), t.length && (a.style.transform = t.join(" "))) : (a.style.padding = null, a.style.transform = i.originalTransform));
            }
          }
        }
        function A(e) {
          let t = new m({
            textContent: e.textContent,
            textContentStream: e.textContentStream,
            container: e.container,
            viewport: e.viewport,
            textDivs: e.textDivs,
            textContentItemsStr: e.textContentItemsStr,
            enhanceTextSelection: e.enhanceTextSelection
          });
          t._render(e.timeout);
          return t;
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.SVGGraphics = void 0;
        var s = r(1);
        var a = r(5);
        var i = r(3);
        let n = class {
          constructor() {
            s.unreachable("Not implemented: SVGGraphics");
          }
        };
        t.SVGGraphics = n;
        {
          let e = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          };
          let r = "http://www.w3.org/XML/1998/namespace";
          let c = "http://www.w3.org/1999/xlink";
          let d = ["butt", "round", "square"];
          let u = ["miter", "round", "bevel"];
          let p = function(e, t = "", r = !1) {
            if (URL.createObjectURL && "undefined" != typeof Blob && !r) return URL.createObjectURL(new Blob([e], {
              type: t
            }));
            let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let a = `data:${t};base64,`;
            for (function() {
              let t = 0;
              let r = e.length;
            }(); t < r; t += 3) {
              let i = 255 & e[t];
              let n = 255 & e[t + 1];
              let o = 255 & e[t + 2];
              let l = i >> 2;
              let h = (3 & i) << 4 | n >> 4;
              let c = t + 1 < r ? (15 & n) << 2 | o >> 6 : 64;
              let d = t + 2 < r ? 63 & o : 64;
              a += s[l] + s[h] + s[c] + s[d];
            }
            return a;
          };
          let g = function() {
            let e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
            let t = 12;
            let r = new Int32Array(256);
            for (let e = 0; e < 256; e++) {
              let t = e;
              for (let e = 0; e < 8; e++) t = 1 & t ? 0xedb88320 ^ t >> 1 & 0x7fffffff : t >> 1 & 0x7fffffff;
              r[e] = t;
            }
            function a(e, t, s) {
              let a = -1;
              for (let i = t; i < s; i++) {
                let t = r[(a ^ e[i]) & 255];
                a = a >>> 8 ^ t;
              }
              return -1 ^ a;
            }
            function n(e, t, r, s) {
              let i = s;
              let n = t.length;
              r[i] = n >> 24 & 255;
              r[i + 1] = n >> 16 & 255;
              r[i + 2] = n >> 8 & 255;
              r[i + 3] = 255 & n;
              r[i += 4] = 255 & e.charCodeAt(0);
              r[i + 1] = 255 & e.charCodeAt(1);
              r[i + 2] = 255 & e.charCodeAt(2);
              r[i + 3] = 255 & e.charCodeAt(3);
              i += 4;
              r.set(t, i);
              let o = a(r, s + 4, i += t.length);
              r[i] = o >> 24 & 255;
              r[i + 1] = o >> 16 & 255;
              r[i + 2] = o >> 8 & 255;
              r[i + 3] = 255 & o;
            }
            function o(e, t, r) {
              let s = 1;
              let a = 0;
              for (let i = t; i < r; ++i) a = (a + (s = (s + (255 & e[i])) % 65521)) % 65521;
              return a << 16 | s;
            }
            function l(e) {
              if (!i.isNodeJS) return h(e);
              try {
                let t;
                parseInt(process.versions.node) >= 8 ? t = e : t = Buffer.from(e);
                let r = deflateSync(t, {
                  level: 9
                });
                return r instanceof Uint8Array ? r : new Uint8Array(r);
              } catch (e) {
                s.warn("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
              }
              return h(e);
            }
            function h(e) {
              let t = e.length;
              let r = 65535;
              let s = Math.ceil(t / 65535);
              let a = new Uint8Array(2 + t + 5 * s + 4);
              let i = 0;
              a[i++] = 120;
              a[i++] = 156;
              let n = 0;
              for (; t > r;) {
                a[i++] = 0;
                a[i++] = 255;
                a[i++] = 255;
                a[i++] = 0;
                a[i++] = 0;
                a.set(e.subarray(n, n + r), i);
                i += r;
                n += r;
                t -= r;
              }
              a[i++] = 1;
              a[i++] = 255 & t;
              a[i++] = t >> 8 & 255;
              a[i++] = 255 & ~t;
              a[i++] = (65535 & ~t) >> 8 & 255;
              a.set(e.subarray(n), i);
              i += e.length - n;
              let l = o(e, 0, e.length);
              a[i++] = l >> 24 & 255;
              a[i++] = l >> 16 & 255;
              a[i++] = l >> 8 & 255;
              a[i++] = 255 & l;
              return a;
            }
            function c(r, a, i, o) {
              let h;
              let c;
              let d;
              let u = r.width;
              let g = r.height;
              let f = r.data;
              switch (a) {
                case s.ImageKind.GRAYSCALE_1BPP:
                  c = 0;
                  h = 1;
                  d = u + 7 >> 3;
                  break;
                case s.ImageKind.RGB_24BPP:
                  c = 2;
                  h = 8;
                  d = 3 * u;
                  break;
                case s.ImageKind.RGBA_32BPP:
                  c = 6;
                  h = 8;
                  d = 4 * u;
                  break;
                default:
                  throw Error("invalid format");
              }
              let m = new Uint8Array((1 + d) * g);
              let A = 0;
              let b = 0;
              for (let e = 0; e < g; ++e) {
                m[A++] = 0;
                m.set(f.subarray(b, b + d), A);
                b += d;
                A += d;
              }
              if (a === s.ImageKind.GRAYSCALE_1BPP && o) {
                A = 0;
                for (let e = 0; e < g; e++) {
                  A++;
                  for (let e = 0; e < d; e++) m[A++] ^= 255;
                }
              }
              let _ = new Uint8Array([u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, 255 & g, h, c, 0, 0, 0]);
              let y = l(m);
              let S = new Uint8Array(e.length + 3 * t + _.length + y.length);
              let x = 0;
              S.set(e, x);
              n("IHDR", _, S, x += e.length);
              n("IDATA", y, S, x += t + _.length);
              x += t + y.length;
              n("IEND", new Uint8Array(0), S, x);
              return p(S, "image/png", i);
            }
            return function(e, t, r) {
              let a = void 0 === e.kind ? s.ImageKind.GRAYSCALE_1BPP : e.kind;
              return c(e, a, t, r);
            };
          }();
          class f {
            constructor() {
              this.fontSizeScale = 1;
              this.fontWeight = e.fontWeight;
              this.fontSize = 0;
              this.textMatrix = s.IDENTITY_MATRIX;
              this.fontMatrix = s.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.textRenderingMode = s.TextRenderingMode.FILL;
              this.textMatrixScale = 1;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRise = 0;
              this.fillColor = e.fillColor;
              this.strokeColor = "#000000";
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.lineJoin = "";
              this.lineCap = "";
              this.miterLimit = 0;
              this.dashArray = [];
              this.dashPhase = 0;
              this.dependencies = [];
              this.activeClipUrl = null;
              this.clipGroup = null;
              this.maskId = "";
            }
            clone() {
              return Object.create(this);
            }
            setCurrentPoint(e, t) {
              this.x = e;
              this.y = t;
            }
          }
          function o(e) {
            let t = [];
            let r = [];
            for (let s of e) {
              if ("save" === s.fn) {
                t.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                });
                r.push(t);
                t = t[t.length - 1].items;
                continue;
              }
              "restore" === s.fn ? t = r.pop() : t.push(s);
            }
            return t;
          }
          function l(e) {
            if (Number.isInteger(e)) return e.toString();
            let t = e.toFixed(10);
            let r = t.length - 1;
            if ("0" !== t[r]) return t;
            do r--; while ("0" === t[r]);
            return t.substring(0, "." === t[r] ? r : r + 1);
          }
          function h(e) {
            if (0 === e[4] && 0 === e[5]) {
              if (0 === e[1] && 0 === e[2]) return 1 === e[0] && 1 === e[3] ? "" : `scale(${l(e[0])} ${l(e[3])})`;
              if (e[0] === e[3] && e[1] === -e[2]) {
                let t = 180 * Math.acos(e[0]) / Math.PI;
                return `rotate(${l(t)})`;
              }
            } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]) return `translate(${l(e[4])} ${l(e[5])})`;
            return `matrix(${l(e[0])} ${l(e[1])} ${l(e[2])} ${l(e[3])} ${l(e[4])} ${l(e[5])})`;
          }
          let m = 0;
          let A = 0;
          let b = 0;
          t.SVGGraphics = n = class {
            constructor(e, t, r = !1) {
              for (let i in this.svgFactory = new a.DOMSVGFactory(), this.current = new f(), this.transformMatrix = s.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = e, this.objs = t, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = Object.create(null), this.cssStyle = null, this.forceDataSchema = !!r, this._operatorIdMapping = [], s.OPS) this._operatorIdMapping[s.OPS[i]] = i;
            }
            save() {
              this.transformStack.push(this.transformMatrix);
              let e = this.current;
              this.extraStack.push(e);
              this.current = e.clone();
            }
            restore() {
              this.transformMatrix = this.transformStack.pop();
              this.current = this.extraStack.pop();
              this.pendingClip = null;
              this.tgrp = null;
            }
            group(e) {
              this.save();
              this.executeOpTree(e);
              this.restore();
            }
            loadDependencies(e) {
              let t = e.fnArray;
              let r = e.argsArray;
              for (function() {
                let e = 0;
                let a = t.length;
              }(); e < a; e++) if (t[e] === s.OPS.dependency) for (let t of r[e]) {
                let e = t.startsWith("g_") ? this.commonObjs : this.objs;
                let r = new Promise(r => {
                  e.get(t, r);
                });
                this.current.dependencies.push(r);
              }
              return Promise.all(this.current.dependencies);
            }
            transform(e, t, r, a, i, n) {
              let o = [e, t, r, a, i, n];
              this.transformMatrix = s.Util.transform(this.transformMatrix, o);
              this.tgrp = null;
            }
            getSVG(e, t) {
              this.viewport = t;
              let r = this._initialize(t);
              return this.loadDependencies(e).then(() => (this.transformMatrix = s.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(e)), r));
            }
            convertOpList(e) {
              let t = this._operatorIdMapping;
              let r = e.argsArray;
              let s = e.fnArray;
              let a = [];
              for (function() {
                let e = 0;
                let i = s.length;
              }(); e < i; e++) {
                let i = s[e];
                a.push({
                  fnId: i,
                  fn: t[i],
                  args: r[e]
                });
              }
              return o(a);
            }
            executeOpTree(e) {
              for (let t of e) {
                let e = t.fn;
                let r = t.fnId;
                let a = t.args;
                switch (0 | r) {
                  case s.OPS.beginText:
                    this.beginText();
                    break;
                  case s.OPS.dependency:
                    break;
                  case s.OPS.setLeading:
                    this.setLeading(a);
                    break;
                  case s.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(a[0], a[1]);
                    break;
                  case s.OPS.setFont:
                    this.setFont(a);
                    break;
                  case s.OPS.showText:
                  case s.OPS.showSpacedText:
                    this.showText(a[0]);
                    break;
                  case s.OPS.endText:
                    this.endText();
                    break;
                  case s.OPS.moveText:
                    this.moveText(a[0], a[1]);
                    break;
                  case s.OPS.setCharSpacing:
                    this.setCharSpacing(a[0]);
                    break;
                  case s.OPS.setWordSpacing:
                    this.setWordSpacing(a[0]);
                    break;
                  case s.OPS.setHScale:
                    this.setHScale(a[0]);
                    break;
                  case s.OPS.setTextMatrix:
                    this.setTextMatrix(a[0], a[1], a[2], a[3], a[4], a[5]);
                    break;
                  case s.OPS.setTextRise:
                    this.setTextRise(a[0]);
                    break;
                  case s.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(a[0]);
                    break;
                  case s.OPS.setLineWidth:
                    this.setLineWidth(a[0]);
                    break;
                  case s.OPS.setLineJoin:
                    this.setLineJoin(a[0]);
                    break;
                  case s.OPS.setLineCap:
                    this.setLineCap(a[0]);
                    break;
                  case s.OPS.setMiterLimit:
                    this.setMiterLimit(a[0]);
                    break;
                  case s.OPS.setFillRGBColor:
                    this.setFillRGBColor(a[0], a[1], a[2]);
                    break;
                  case s.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(a[0], a[1], a[2]);
                    break;
                  case s.OPS.setStrokeColorN:
                    this.setStrokeColorN(a);
                    break;
                  case s.OPS.setFillColorN:
                    this.setFillColorN(a);
                    break;
                  case s.OPS.shadingFill:
                    this.shadingFill(a[0]);
                    break;
                  case s.OPS.setDash:
                    this.setDash(a[0], a[1]);
                    break;
                  case s.OPS.setRenderingIntent:
                    this.setRenderingIntent(a[0]);
                    break;
                  case s.OPS.setFlatness:
                    this.setFlatness(a[0]);
                    break;
                  case s.OPS.setGState:
                    this.setGState(a[0]);
                    break;
                  case s.OPS.fill:
                    this.fill();
                    break;
                  case s.OPS.eoFill:
                    this.eoFill();
                    break;
                  case s.OPS.stroke:
                    this.stroke();
                    break;
                  case s.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case s.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case s.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case s.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case s.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case s.OPS.paintImageXObject:
                    this.paintImageXObject(a[0]);
                    break;
                  case s.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(a[0]);
                    break;
                  case s.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(a[0]);
                    break;
                  case s.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(a[0], a[1]);
                    break;
                  case s.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case s.OPS.closePath:
                    this.closePath();
                    break;
                  case s.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case s.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case s.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case s.OPS.nextLine:
                    this.nextLine();
                    break;
                  case s.OPS.transform:
                    this.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
                    break;
                  case s.OPS.constructPath:
                    this.constructPath(a[0], a[1]);
                    break;
                  case s.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(t.items);
                    break;
                  default:
                    s.warn(`Unimplemented operator ${e}`);
                }
              }
            }
            setWordSpacing(e) {
              this.current.wordSpacing = e;
            }
            setCharSpacing(e) {
              this.current.charSpacing = e;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            setTextMatrix(e, t, r, s, a, i) {
              let n = this.current;
              n.textMatrix = n.lineMatrix = [e, t, r, s, a, i];
              n.textMatrixScale = Math.hypot(e, t);
              n.x = n.lineX = 0;
              n.y = n.lineY = 0;
              n.xcoords = [];
              n.ycoords = [];
              n.tspan = this.svgFactory.createElement("svg:tspan");
              n.tspan.setAttributeNS(null, "font-family", n.fontFamily);
              n.tspan.setAttributeNS(null, "font-size", `${l(n.fontSize)}px`);
              n.tspan.setAttributeNS(null, "y", l(-n.y));
              n.txtElement = this.svgFactory.createElement("svg:text");
              n.txtElement.appendChild(n.tspan);
            }
            beginText() {
              let e = this.current;
              e.x = e.lineX = 0;
              e.y = e.lineY = 0;
              e.textMatrix = s.IDENTITY_MATRIX;
              e.lineMatrix = s.IDENTITY_MATRIX;
              e.textMatrixScale = 1;
              e.tspan = this.svgFactory.createElement("svg:tspan");
              e.txtElement = this.svgFactory.createElement("svg:text");
              e.txtgrp = this.svgFactory.createElement("svg:g");
              e.xcoords = [];
              e.ycoords = [];
            }
            moveText(e, t) {
              let r = this.current;
              r.x = r.lineX += e;
              r.y = r.lineY += t;
              r.xcoords = [];
              r.ycoords = [];
              r.tspan = this.svgFactory.createElement("svg:tspan");
              r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
              r.tspan.setAttributeNS(null, "font-size", `${l(r.fontSize)}px`);
              r.tspan.setAttributeNS(null, "y", l(-r.y));
            }
            showText(t) {
              let a = this.current;
              let i = a.font;
              let n = a.fontSize;
              if (0 === n) return;
              let o = a.fontSizeScale;
              let c = a.charSpacing;
              let d = a.wordSpacing;
              let u = a.fontDirection;
              let p = a.textHScale * u;
              let g = i.vertical;
              let f = g ? 1 : -1;
              let m = i.defaultVMetrics;
              let A = n * a.fontMatrix[0];
              let b = 0;
              for (let e of t) {
                let t;
                let r;
                let s;
                if (null === e) {
                  b += u * d;
                  continue;
                }
                if ("number" == typeof e) {
                  b += f * e * n / 1e3;
                  continue;
                }
                let l = (e.isSpace ? d : 0) + c;
                let h = e.fontChar;
                let p = e.width;
                if (g) {
                  let s;
                  let a = e.vmetric || m;
                  s = -(s = e.vmetric ? a[1] : .5 * p) * A;
                  let i = a[2] * A;
                  p = a ? -a[0] : p;
                  t = s / o;
                  r = (b + i) / o;
                } else {
                  t = b / o;
                  r = 0;
                }
                (e.isInFont || i.missingFile) && (a.xcoords.push(a.x + t), g && a.ycoords.push(-a.y + r), a.tspan.textContent += h);
                b += s = g ? p * A - l * u : p * A + l * u;
              }
              a.tspan.setAttributeNS(null, "x", a.xcoords.map(l).join(" "));
              g ? a.tspan.setAttributeNS(null, "y", a.ycoords.map(l).join(" ")) : a.tspan.setAttributeNS(null, "y", l(-a.y));
              g ? a.y -= b : a.x += b * p;
              a.tspan.setAttributeNS(null, "font-family", a.fontFamily);
              a.tspan.setAttributeNS(null, "font-size", `${l(a.fontSize)}px`);
              a.fontStyle !== e.fontStyle && a.tspan.setAttributeNS(null, "font-style", a.fontStyle);
              a.fontWeight !== e.fontWeight && a.tspan.setAttributeNS(null, "font-weight", a.fontWeight);
              let _ = a.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
              if (_ === s.TextRenderingMode.FILL || _ === s.TextRenderingMode.FILL_STROKE ? (a.fillColor !== e.fillColor && a.tspan.setAttributeNS(null, "fill", a.fillColor), a.fillAlpha < 1 && a.tspan.setAttributeNS(null, "fill-opacity", a.fillAlpha)) : a.textRenderingMode === s.TextRenderingMode.ADD_TO_PATH ? a.tspan.setAttributeNS(null, "fill", "transparent") : a.tspan.setAttributeNS(null, "fill", "none"), _ === s.TextRenderingMode.STROKE || _ === s.TextRenderingMode.FILL_STROKE) {
                let e = 1 / (a.textMatrixScale || 1);
                this._setStrokeAttributes(a.tspan, e);
              }
              let y = a.textMatrix;
              0 !== a.textRise && (y = y.slice(), y[5] += a.textRise);
              a.txtElement.setAttributeNS(null, "transform", `${h(y)} scale(${l(p)}, -1)`);
              a.txtElement.setAttributeNS(r, "xml:space", "preserve");
              a.txtElement.appendChild(a.tspan);
              a.txtgrp.appendChild(a.txtElement);
              this._ensureTransformGroup().appendChild(a.txtElement);
            }
            setLeadingMoveText(e, t) {
              this.setLeading(-t);
              this.moveText(e, t);
            }
            addFontStyle(e) {
              if (!e.data) throw Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
              this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
              let t = p(e.data, e.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }
`;
            }
            setFont(e) {
              let t = this.current;
              let r = this.commonObjs.get(e[0]);
              let a = e[1];
              t.font = r;
              !this.embedFonts || r.missingFile || this.embeddedFonts[r.loadedName] || (this.addFontStyle(r), this.embeddedFonts[r.loadedName] = r);
              t.fontMatrix = r.fontMatrix || s.FONT_IDENTITY_MATRIX;
              let i = "normal";
              r.black ? i = "900" : r.bold && (i = "bold");
              let n = r.italic ? "italic" : "normal";
              a < 0 ? (a = -a, t.fontDirection = -1) : t.fontDirection = 1;
              t.fontSize = a;
              t.fontFamily = r.loadedName;
              t.fontWeight = i;
              t.fontStyle = n;
              t.tspan = this.svgFactory.createElement("svg:tspan");
              t.tspan.setAttributeNS(null, "y", l(-t.y));
              t.xcoords = [];
              t.ycoords = [];
            }
            endText() {
              let e = this.current;
              e.textRenderingMode & s.TextRenderingMode.ADD_TO_PATH_FLAG && e.txtElement?.hasChildNodes() && (e.element = e.txtElement, this.clip("nonzero"), this.endPath());
            }
            setLineWidth(e) {
              e > 0 && (this.current.lineWidth = e);
            }
            setLineCap(e) {
              this.current.lineCap = d[e];
            }
            setLineJoin(e) {
              this.current.lineJoin = u[e];
            }
            setMiterLimit(e) {
              this.current.miterLimit = e;
            }
            setStrokeAlpha(e) {
              this.current.strokeAlpha = e;
            }
            setStrokeRGBColor(e, t, r) {
              this.current.strokeColor = s.Util.makeHexColor(e, t, r);
            }
            setFillAlpha(e) {
              this.current.fillAlpha = e;
            }
            setFillRGBColor(e, t, r) {
              this.current.fillColor = s.Util.makeHexColor(e, t, r);
              this.current.tspan = this.svgFactory.createElement("svg:tspan");
              this.current.xcoords = [];
              this.current.ycoords = [];
            }
            setStrokeColorN(e) {
              this.current.strokeColor = this._makeColorN_Pattern(e);
            }
            setFillColorN(e) {
              this.current.fillColor = this._makeColorN_Pattern(e);
            }
            shadingFill(e) {
              let t = this.viewport.width;
              let r = this.viewport.height;
              let a = s.Util.inverseTransform(this.transformMatrix);
              let i = s.Util.applyTransform([0, 0], a);
              let n = s.Util.applyTransform([0, r], a);
              let o = s.Util.applyTransform([t, 0], a);
              let l = s.Util.applyTransform([t, r], a);
              let h = Math.min(i[0], n[0], o[0], l[0]);
              let c = Math.min(i[1], n[1], o[1], l[1]);
              let d = Math.max(i[0], n[0], o[0], l[0]);
              let u = Math.max(i[1], n[1], o[1], l[1]);
              let p = this.svgFactory.createElement("svg:rect");
              p.setAttributeNS(null, "x", h);
              p.setAttributeNS(null, "y", c);
              p.setAttributeNS(null, "width", d - h);
              p.setAttributeNS(null, "height", u - c);
              p.setAttributeNS(null, "fill", this._makeShadingPattern(e));
              this.current.fillAlpha < 1 && p.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
              this._ensureTransformGroup().appendChild(p);
            }
            _makeColorN_Pattern(e) {
              return "TilingPattern" === e[0] ? this._makeTilingPattern(e) : this._makeShadingPattern(e);
            }
            _makeTilingPattern(e) {
              let t = e[1];
              let r = e[2];
              let a = e[3] || s.IDENTITY_MATRIX;
              let [i, n, o, l] = e[4];
              let h = e[5];
              let c = e[6];
              let d = e[7];
              let u = `shading${b++}`;
              let [p, g, f, m] = s.Util.normalizeRect([...s.Util.applyTransform([i, n], a), ...s.Util.applyTransform([o, l], a)]);
              let [A, _] = s.Util.singularValueDecompose2dScale(a);
              let y = h * A;
              let S = c * _;
              let x = this.svgFactory.createElement("svg:pattern");
              x.setAttributeNS(null, "id", u);
              x.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
              x.setAttributeNS(null, "width", y);
              x.setAttributeNS(null, "height", S);
              x.setAttributeNS(null, "x", `${p}`);
              x.setAttributeNS(null, "y", `${g}`);
              let v = this.svg;
              let C = this.transformMatrix;
              let P = this.current.fillColor;
              let T = this.current.strokeColor;
              let k = this.svgFactory.create(f - p, m - g);
              if (this.svg = k, this.transformMatrix = a, 2 === d) {
                let e = s.Util.makeHexColor(...t);
                this.current.fillColor = e;
                this.current.strokeColor = e;
              }
              this.executeOpTree(this.convertOpList(r));
              this.svg = v;
              this.transformMatrix = C;
              this.current.fillColor = P;
              this.current.strokeColor = T;
              x.appendChild(k.childNodes[0]);
              this.defs.appendChild(x);
              return `url(#${u})`;
            }
            _makeShadingPattern(e) {
              switch ("string" == typeof e && (e = this.objs.get(e)), e[0]) {
                case "RadialAxial":
                  let t;
                  let r = `shading${b++}`;
                  let a = e[3];
                  switch (e[1]) {
                    case "axial":
                      let i = e[4];
                      let n = e[5];
                      (t = this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null, "id", r);
                      t.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                      t.setAttributeNS(null, "x1", i[0]);
                      t.setAttributeNS(null, "y1", i[1]);
                      t.setAttributeNS(null, "x2", n[0]);
                      t.setAttributeNS(null, "y2", n[1]);
                      break;
                    case "radial":
                      let o = e[4];
                      let l = e[5];
                      let h = e[6];
                      let c = e[7];
                      (t = this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null, "id", r);
                      t.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                      t.setAttributeNS(null, "cx", l[0]);
                      t.setAttributeNS(null, "cy", l[1]);
                      t.setAttributeNS(null, "r", c);
                      t.setAttributeNS(null, "fx", o[0]);
                      t.setAttributeNS(null, "fy", o[1]);
                      t.setAttributeNS(null, "fr", h);
                      break;
                    default:
                      throw Error(`Unknown RadialAxial type: ${e[1]}`);
                  }
                  for (let e of a) {
                    let r = this.svgFactory.createElement("svg:stop");
                    r.setAttributeNS(null, "offset", e[0]);
                    r.setAttributeNS(null, "stop-color", e[1]);
                    t.appendChild(r);
                  }
                  this.defs.appendChild(t);
                  return `url(#${r})`;
                case "Mesh":
                  s.warn("Unimplemented pattern Mesh");
                  return null;
                case "Dummy":
                  return "hotpink";
                default:
                  throw Error(`Unknown IR type: ${e[0]}`);
              }
            }
            setDash(e, t) {
              this.current.dashArray = e;
              this.current.dashPhase = t;
            }
            constructPath(e, t) {
              let r = this.current;
              let a = r.x;
              let i = r.y;
              let n = [];
              let o = 0;
              for (let r of e) switch (0 | r) {
                case s.OPS.rectangle:
                  a = t[o++];
                  i = t[o++];
                  let e = t[o++];
                  let h = t[o++];
                  let c = a + e;
                  let d = i + h;
                  n.push("M", l(a), l(i), "L", l(c), l(i), "L", l(c), l(d), "L", l(a), l(d), "Z");
                  break;
                case s.OPS.moveTo:
                  a = t[o++];
                  i = t[o++];
                  n.push("M", l(a), l(i));
                  break;
                case s.OPS.lineTo:
                  a = t[o++];
                  i = t[o++];
                  n.push("L", l(a), l(i));
                  break;
                case s.OPS.curveTo:
                  a = t[o + 4];
                  i = t[o + 5];
                  n.push("C", l(t[o]), l(t[o + 1]), l(t[o + 2]), l(t[o + 3]), l(a), l(i));
                  o += 6;
                  break;
                case s.OPS.curveTo2:
                  n.push("C", l(a), l(i), l(t[o]), l(t[o + 1]), l(t[o + 2]), l(t[o + 3]));
                  a = t[o + 2];
                  i = t[o + 3];
                  o += 4;
                  break;
                case s.OPS.curveTo3:
                  a = t[o + 2];
                  i = t[o + 3];
                  n.push("C", l(t[o]), l(t[o + 1]), l(a), l(i), l(a), l(i));
                  o += 4;
                  break;
                case s.OPS.closePath:
                  n.push("Z");
              }
              n = n.join(" ");
              r.path && e.length > 0 && e[0] !== s.OPS.rectangle && e[0] !== s.OPS.moveTo ? n = r.path.getAttributeNS(null, "d") + n : (r.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().appendChild(r.path));
              r.path.setAttributeNS(null, "d", n);
              r.path.setAttributeNS(null, "fill", "none");
              r.element = r.path;
              r.setCurrentPoint(a, i);
            }
            endPath() {
              let e = this.current;
              if (e.path = null, !this.pendingClip) return;
              if (!e.element) {
                this.pendingClip = null;
                return;
              }
              let t = `clippath${m++}`;
              let r = this.svgFactory.createElement("svg:clipPath");
              r.setAttributeNS(null, "id", t);
              r.setAttributeNS(null, "transform", h(this.transformMatrix));
              let s = e.element.cloneNode(!0);
              if ("evenodd" === this.pendingClip ? s.setAttributeNS(null, "clip-rule", "evenodd") : s.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, r.appendChild(s), this.defs.appendChild(r), e.activeClipUrl) {
                for (let t of (e.clipGroup = null, this.extraStack)) t.clipGroup = null;
                r.setAttributeNS(null, "clip-path", e.activeClipUrl);
              }
              e.activeClipUrl = `url(#${t})`;
              this.tgrp = null;
            }
            clip(e) {
              this.pendingClip = e;
            }
            closePath() {
              let e = this.current;
              if (e.path) {
                let t = `${e.path.getAttributeNS(null, "d")}Z`;
                e.path.setAttributeNS(null, "d", t);
              }
            }
            setLeading(e) {
              this.current.leading = -e;
            }
            setTextRise(e) {
              this.current.textRise = e;
            }
            setTextRenderingMode(e) {
              this.current.textRenderingMode = e;
            }
            setHScale(e) {
              this.current.textHScale = e / 100;
            }
            setRenderingIntent(e) { }
            setFlatness(e) { }
            setGState(e) {
              for (let [t, r] of e) switch (t) {
                case "LW":
                  this.setLineWidth(r);
                  break;
                case "LC":
                  this.setLineCap(r);
                  break;
                case "LJ":
                  this.setLineJoin(r);
                  break;
                case "ML":
                  this.setMiterLimit(r);
                  break;
                case "D":
                  this.setDash(r[0], r[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(r);
                  break;
                case "FL":
                  this.setFlatness(r);
                  break;
                case "Font":
                  this.setFont(r);
                  break;
                case "CA":
                  this.setStrokeAlpha(r);
                  break;
                case "ca":
                  this.setFillAlpha(r);
                  break;
                default:
                  s.warn(`Unimplemented graphic state operator ${t}`);
              }
            }
            fill() {
              let e = this.current;
              e.element && (e.element.setAttributeNS(null, "fill", e.fillColor), e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha), this.endPath());
            }
            stroke() {
              let e = this.current;
              e.element && (this._setStrokeAttributes(e.element), e.element.setAttributeNS(null, "fill", "none"), this.endPath());
            }
            _setStrokeAttributes(e, t = 1) {
              let r = this.current;
              let s = r.dashArray;
              1 !== t && s.length > 0 && (s = s.map(function(e) {
                return t * e;
              }));
              e.setAttributeNS(null, "stroke", r.strokeColor);
              e.setAttributeNS(null, "stroke-opacity", r.strokeAlpha);
              e.setAttributeNS(null, "stroke-miterlimit", l(r.miterLimit));
              e.setAttributeNS(null, "stroke-linecap", r.lineCap);
              e.setAttributeNS(null, "stroke-linejoin", r.lineJoin);
              e.setAttributeNS(null, "stroke-width", l(t * r.lineWidth) + "px");
              e.setAttributeNS(null, "stroke-dasharray", s.map(l).join(" "));
              e.setAttributeNS(null, "stroke-dashoffset", l(t * r.dashPhase) + "px");
            }
            eoFill() {
              this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
              this.fill();
            }
            fillStroke() {
              this.stroke();
              this.fill();
            }
            eoFillStroke() {
              this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
              this.fillStroke();
            }
            closeStroke() {
              this.closePath();
              this.stroke();
            }
            closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
            closeEOFillStroke() {
              this.closePath();
              this.eoFillStroke();
            }
            paintSolidColorImageMask() {
              let e = this.svgFactory.createElement("svg:rect");
              e.setAttributeNS(null, "x", "0");
              e.setAttributeNS(null, "y", "0");
              e.setAttributeNS(null, "width", "1px");
              e.setAttributeNS(null, "height", "1px");
              e.setAttributeNS(null, "fill", this.current.fillColor);
              this._ensureTransformGroup().appendChild(e);
            }
            paintImageXObject(e) {
              let t = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
              if (!t) {
                s.warn(`Dependent image with object ID ${e} is not ready yet`);
                return;
              }
              this.paintInlineImageXObject(t);
            }
            paintInlineImageXObject(e, t) {
              let r = e.width;
              let s = e.height;
              let a = g(e, this.forceDataSchema, !!t);
              let i = this.svgFactory.createElement("svg:rect");
              i.setAttributeNS(null, "x", "0");
              i.setAttributeNS(null, "y", "0");
              i.setAttributeNS(null, "width", l(r));
              i.setAttributeNS(null, "height", l(s));
              this.current.element = i;
              this.clip("nonzero");
              let n = this.svgFactory.createElement("svg:image");
              n.setAttributeNS(c, "xlink:href", a);
              n.setAttributeNS(null, "x", "0");
              n.setAttributeNS(null, "y", l(-s));
              n.setAttributeNS(null, "width", l(r) + "px");
              n.setAttributeNS(null, "height", l(s) + "px");
              n.setAttributeNS(null, "transform", `scale(${l(1 / r)} ${l(-1 / s)})`);
              t ? t.appendChild(n) : this._ensureTransformGroup().appendChild(n);
            }
            paintImageMaskXObject(e) {
              let t = this.current;
              let r = e.width;
              let s = e.height;
              let a = t.fillColor;
              t.maskId = `mask${A++}`;
              let i = this.svgFactory.createElement("svg:mask");
              i.setAttributeNS(null, "id", t.maskId);
              let n = this.svgFactory.createElement("svg:rect");
              n.setAttributeNS(null, "x", "0");
              n.setAttributeNS(null, "y", "0");
              n.setAttributeNS(null, "width", l(r));
              n.setAttributeNS(null, "height", l(s));
              n.setAttributeNS(null, "fill", a);
              n.setAttributeNS(null, "mask", `url(#${t.maskId})`);
              this.defs.appendChild(i);
              this._ensureTransformGroup().appendChild(n);
              this.paintInlineImageXObject(e, i);
            }
            paintFormXObjectBegin(e, t) {
              if (Array.isArray(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]), t) {
                let e = t[2] - t[0];
                let r = t[3] - t[1];
                let s = this.svgFactory.createElement("svg:rect");
                s.setAttributeNS(null, "x", t[0]);
                s.setAttributeNS(null, "y", t[1]);
                s.setAttributeNS(null, "width", l(e));
                s.setAttributeNS(null, "height", l(r));
                this.current.element = s;
                this.clip("nonzero");
                this.endPath();
              }
            }
            paintFormXObjectEnd() { }
            _initialize(e) {
              let t = this.svgFactory.create(e.width, e.height);
              let r = this.svgFactory.createElement("svg:defs");
              t.appendChild(r);
              this.defs = r;
              let s = this.svgFactory.createElement("svg:g");
              s.setAttributeNS(null, "transform", h(e.transform));
              t.appendChild(s);
              this.svg = s;
              return t;
            }
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                let e = this.svgFactory.createElement("svg:g");
                e.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                this.svg.appendChild(e);
                this.current.clipGroup = e;
              }
              return this.current.clipGroup;
            }
            _ensureTransformGroup() {
              this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", h(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp));
              return this.tgrp;
            }
          };
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.PDFNodeStream = void 0;
        var s = r(1);
        var a = r(24);
        let h = /^file:\/\/\/[a-zA-Z]:\//;
        function c(e) {
          let t = parse(e);
          return "file:" === t.protocol || t.host ? t : /^[a-z]:[/\\]/i.test(e) ? parse(`file:///${e}`) : (t.host || (t.protocol = "file:"), t);
        }
        class d {
          constructor(e) {
            this.source = e;
            this.url = c(e.url);
            this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol;
            this.isFsUrl = "file:" === this.url.protocol;
            this.httpHeaders = this.isHttp && e.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            return this._fullRequestReader?._loaded ?? 0;
          }
          getFullReader() {
            s.assert(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
            this._fullRequestReader = this.isFsUrl ? new A(this) : new f(this);
            return this._fullRequestReader;
          }
          getRangeReader(e, t) {
            if (t <= this._progressiveDataLength) return null;
            let r = this.isFsUrl ? new b(this, e, t) : new m(this, e, t);
            this._rangeRequestReaders.push(r);
            return r;
          }
          cancelAllRequests(e) {
            for (let t of (this._fullRequestReader && this._fullRequestReader.cancel(e), this._rangeRequestReaders.slice(0))) t.cancel(e);
          }
        }
        t.PDFNodeStream = d;
        class u {
          constructor(e) {
            this._url = e.url;
            this._done = !1;
            this._storedError = null;
            this.onProgress = null;
            let t = e.source;
            this._contentLength = t.length;
            this._loaded = 0;
            this._filename = null;
            this._disableRange = t.disableRange || !1;
            this._rangeChunkSize = t.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
            this._isStreamingSupported = !t.disableStream;
            this._isRangeSupported = !t.disableRange;
            this._readableStream = null;
            this._readCapability = s.createPromiseCapability();
            this._headersCapability = s.createPromiseCapability();
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            if (await this._readCapability.promise, this._done) return {
              value: void 0,
              done: !0
            };
            if (this._storedError) throw this._storedError;
            let e = this._readableStream.read();
            return null === e ? (this._readCapability = s.createPromiseCapability(), this.read()) : (this._loaded += e.length, this.onProgress && this.onProgress({
              loaded: this._loaded,
              total: this._contentLength
            }), {
              value: new Uint8Array(e).buffer,
              done: !1
            });
          }
          cancel(e) {
            if (!this._readableStream) {
              this._error(e);
              return;
            }
            this._readableStream.destroy(e);
          }
          _error(e) {
            this._storedError = e;
            this._readCapability.resolve();
          }
          _setReadableStream(e) {
            this._readableStream = e;
            e.on("readable", () => {
              this._readCapability.resolve();
            });
            e.on("end", () => {
              e.destroy();
              this._done = !0;
              this._readCapability.resolve();
            });
            e.on("error", e => {
              this._error(e);
            });
            !this._isStreamingSupported && this._isRangeSupported && this._error(new s.AbortException("streaming is disabled"));
            this._storedError && this._readableStream.destroy(this._storedError);
          }
        }
        class p {
          constructor(e) {
            this._url = e.url;
            this._done = !1;
            this._storedError = null;
            this.onProgress = null;
            this._loaded = 0;
            this._readableStream = null;
            this._readCapability = s.createPromiseCapability();
            let t = e.source;
            this._isStreamingSupported = !t.disableStream;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            if (await this._readCapability.promise, this._done) return {
              value: void 0,
              done: !0
            };
            if (this._storedError) throw this._storedError;
            let e = this._readableStream.read();
            return null === e ? (this._readCapability = s.createPromiseCapability(), this.read()) : (this._loaded += e.length, this.onProgress && this.onProgress({
              loaded: this._loaded
            }), {
              value: new Uint8Array(e).buffer,
              done: !1
            });
          }
          cancel(e) {
            if (!this._readableStream) {
              this._error(e);
              return;
            }
            this._readableStream.destroy(e);
          }
          _error(e) {
            this._storedError = e;
            this._readCapability.resolve();
          }
          _setReadableStream(e) {
            this._readableStream = e;
            e.on("readable", () => {
              this._readCapability.resolve();
            });
            e.on("end", () => {
              e.destroy();
              this._done = !0;
              this._readCapability.resolve();
            });
            e.on("error", e => {
              this._error(e);
            });
            this._storedError && this._readableStream.destroy(this._storedError);
          }
        }
        function g(e, t) {
          return {
            protocol: e.protocol,
            auth: e.auth,
            host: e.hostname,
            port: e.port,
            path: e.path,
            method: "GET",
            headers: t
          };
        }
        class f extends u {
          constructor(e) {
            super(e);
            let t = t => {
              if (404 === t.statusCode) {
                let e = new s.MissingPDFException(`Missing PDF "${this._url}".`);
                this._storedError = e;
                this._headersCapability.reject(e);
                return;
              }
              this._headersCapability.resolve();
              this._setReadableStream(t);
              let r = e => this._readableStream.headers[e.toLowerCase()];
              let {
                allowRangeRequests,
                suggestedLength
              } = a.validateRangeRequestCapabilities({
                getResponseHeader: r,
                isHttp: e.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              this._isRangeSupported = allowRangeRequests;
              this._contentLength = suggestedLength || this._contentLength;
              this._filename = a.extractFilenameFromHeader(r);
            };
            this._request = null;
            "http:" === this._url.protocol ? this._request = request(g(this._url, e.httpHeaders), t) : this._request = _$$request(g(this._url, e.httpHeaders), t);
            this._request.on("error", e => {
              this._storedError = e;
              this._headersCapability.reject(e);
            });
            this._request.end();
          }
        }
        class m extends p {
          constructor(e, t, r) {
            for (let t in super(e), this._httpHeaders = {}, e.httpHeaders) {
              let r = e.httpHeaders[t];
              void 0 !== r && (this._httpHeaders[t] = r);
            }
            this._httpHeaders.Range = `bytes=${t}-${r - 1}`;
            let a = e => {
              if (404 === e.statusCode) {
                let e = new s.MissingPDFException(`Missing PDF "${this._url}".`);
                this._storedError = e;
                return;
              }
              this._setReadableStream(e);
            };
            this._request = null;
            "http:" === this._url.protocol ? this._request = request(g(this._url, this._httpHeaders), a) : this._request = _$$request(g(this._url, this._httpHeaders), a);
            this._request.on("error", e => {
              this._storedError = e;
            });
            this._request.end();
          }
        }
        class A extends u {
          constructor(e) {
            super(e);
            let t = decodeURIComponent(this._url.path);
            h.test(this._url.href) && (t = t.replace(/^\//, ""));
            lstat(t, (e, r) => {
              if (e) {
                "ENOENT" === e.code && (e = new s.MissingPDFException(`Missing PDF "${t}".`));
                this._storedError = e;
                this._headersCapability.reject(e);
                return;
              }
              this._contentLength = r.size;
              this._setReadableStream(createReadStream(t));
              this._headersCapability.resolve();
            });
          }
        }
        class b extends p {
          constructor(e, t, r) {
            super(e);
            let s = decodeURIComponent(this._url.path);
            h.test(this._url.href) && (s = s.replace(/^\//, ""));
            this._setReadableStream(createReadStream(s, {
              start: t,
              end: r - 1
            }));
          }
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.createResponseStatusError = l;
        t.extractFilenameFromHeader = o;
        t.validateRangeRequestCapabilities = n;
        t.validateResponseStatus = h;
        var s = r(1);
        var a = r(25);
        var i = r(5);
        function n({
          getResponseHeader: e,
          isHttp: t,
          rangeChunkSize: r,
          disableRange: a
        }) {
          s.assert(r > 0, "Range chunk size must be larger than zero");
          let i = {
            allowRangeRequests: !1,
            suggestedLength: void 0
          };
          let n = parseInt(e("Content-Length"), 10);
          Number.isInteger(n) && (i.suggestedLength = n, n <= 2 * r || a || !t || "bytes" !== e("Accept-Ranges") || "identity" !== (e("Content-Encoding") || "identity") || (i.allowRangeRequests = !0));
          return i;
        }
        function o(e) {
          let t = e("Content-Disposition");
          if (t) {
            let e = a.getFilenameFromContentDispositionHeader(t);
            if (e.includes("%")) try {
              e = decodeURIComponent(e);
            } catch (e) { }
            if (i.isPdfFile(e)) return e;
          }
          return null;
        }
        function l(e, t) {
          return 404 === e || 0 === e && t.startsWith("file:") ? new s.MissingPDFException('Missing PDF "' + t + '".') : new s.UnexpectedResponseException(`Unexpected server response (${e}) while retrieving PDF "${t}".`, e);
        }
        function h(e) {
          return 200 === e || 206 === e;
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.getFilenameFromContentDispositionHeader = a;
        var s = r(1);
        function a(e) {
          let t = !0;
          let r = a("filename\\*", "i").exec(e);
          if (r) {
            let e = l(r = r[1]);
            return n(e = c(e = h(e = unescape(e))));
          }
          if (r = o(e)) return n(c(r));
          if (r = a("filename", "i").exec(e)) {
            let e = l(r = r[1]);
            return n(e = c(e));
          }
          function a(e, t) {
            return RegExp("(?:^|;)\\s*" + e + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', t);
          }
          function i(e, r) {
            if (e) {
              if (!/^[\x00-\xFF]+$/.test(r)) return r;
              try {
                let a = new TextDecoder(e, {
                  fatal: !0
                });
                let i = s.stringToBytes(r);
                r = a.decode(i);
                t = !1;
              } catch (e) { }
            }
            return r;
          }
          function n(e) {
            t && /[\x80-\xff]/.test(e) && (e = i("utf-8", e), t && (e = i("iso-8859-1", e)));
            return e;
          }
          function o(e) {
            let t;
            let r = [];
            let s = a("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            for (; null !== (t = s.exec(e));) {
              let [, e, s, a] = t;
              if ((e = parseInt(e, 10)) in r) {
                if (0 === e) break;
                continue;
              }
              r[e] = [s, a];
            }
            let i = [];
            for (let e = 0; e < r.length && e in r; ++e) {
              let [t, s] = r[e];
              s = l(s);
              t && (s = unescape(s), 0 === e && (s = h(s)));
              i.push(s);
            }
            return i.join("");
          }
          function l(e) {
            if (e.startsWith('"')) {
              let t = e.slice(1).split('\\"');
              for (let e = 0; e < t.length; ++e) {
                let r = t[e].indexOf('"');
                -1 !== r && (t[e] = t[e].slice(0, r), t.length = e + 1);
                t[e] = t[e].replace(/\\(.)/g, "$1");
              }
              e = t.join('"');
            }
            return e;
          }
          function h(e) {
            let t = e.indexOf("'");
            return -1 === t ? e : i(e.slice(0, t), e.slice(t + 1).replace(/^[^']*'/, ""));
          }
          function c(e) {
            return !e.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(e) ? e : e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(e, t, r, s) {
              if ("q" === r || "Q" === r) return i(t, s = (s = s.replace(/_/g, " ")).replace(/=([0-9a-fA-F]{2})/g, function(e, t) {
                return String.fromCharCode(parseInt(t, 16));
              }));
              try {
                s = atob(s);
              } catch (e) { }
              return i(t, s);
            });
          }
          return "";
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.PDFNetworkStream = void 0;
        var s = r(1);
        var a = r(24);
        let i = 200;
        let n = 206;
        function o(e) {
          let t = e.response;
          return "string" != typeof t ? t : s.stringToBytes(t).buffer;
        }
        class l {
          constructor(e, t = {}) {
            this.url = e;
            this.isHttp = /^https?:/i.test(e);
            this.httpHeaders = this.isHttp && t.httpHeaders || Object.create(null);
            this.withCredentials = t.withCredentials || !1;
            this.getXhr = t.getXhr || function() {
              return new XMLHttpRequest();
            };
            this.currXhrId = 0;
            this.pendingRequests = Object.create(null);
          }
          requestRange(e, t, r) {
            let s = {
              begin: e,
              end: t
            };
            for (let e in r) s[e] = r[e];
            return this.request(s);
          }
          requestFull(e) {
            return this.request(e);
          }
          request(e) {
            let t = this.getXhr();
            let r = this.currXhrId++;
            let s = this.pendingRequests[r] = {
              xhr: t
            };
            for (let e in t.open("GET", this.url), t.withCredentials = this.withCredentials, this.httpHeaders) {
              let r = this.httpHeaders[e];
              void 0 !== r && t.setRequestHeader(e, r);
            }
            this.isHttp && "begin" in e && "end" in e ? (t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`), s.expectedStatus = n) : s.expectedStatus = i;
            t.responseType = "arraybuffer";
            e.onError && (t.onerror = function(r) {
              e.onError(t.status);
            });
            t.onreadystatechange = this.onStateChange.bind(this, r);
            t.onprogress = this.onProgress.bind(this, r);
            s.onHeadersReceived = e.onHeadersReceived;
            s.onDone = e.onDone;
            s.onError = e.onError;
            s.onProgress = e.onProgress;
            t.send(null);
            return r;
          }
          onProgress(e, t) {
            let r = this.pendingRequests[e];
            r && r.onProgress?.(t);
          }
          onStateChange(e, t) {
            let r = this.pendingRequests[e];
            if (!r) return;
            let s = r.xhr;
            if (s.readyState >= 2 && r.onHeadersReceived && (r.onHeadersReceived(), delete r.onHeadersReceived), 4 !== s.readyState || !(e in this.pendingRequests)) return;
            if (delete this.pendingRequests[e], 0 === s.status && this.isHttp) {
              r.onError?.(s.status);
              return;
            }
            let a = s.status || i;
            if (!(a === i && r.expectedStatus === n) && a !== r.expectedStatus) {
              r.onError?.(s.status);
              return;
            }
            let l = o(s);
            if (a === n) {
              let e = s.getResponseHeader("Content-Range");
              let t = /bytes (\d+)-(\d+)\/(\d+)/.exec(e);
              r.onDone({
                begin: parseInt(t[1], 10),
                chunk: l
              });
            } else l ? r.onDone({
              begin: 0,
              chunk: l
            }) : r.onError?.(s.status);
          }
          getRequestXhr(e) {
            return this.pendingRequests[e].xhr;
          }
          isPendingRequest(e) {
            return e in this.pendingRequests;
          }
          abortRequest(e) {
            let t = this.pendingRequests[e].xhr;
            delete this.pendingRequests[e];
            t.abort();
          }
        }
        class h {
          constructor(e) {
            this._source = e;
            this._manager = new l(e.url, {
              httpHeaders: e.httpHeaders,
              withCredentials: e.withCredentials
            });
            this._rangeChunkSize = e.rangeChunkSize;
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          _onRangeRequestReaderClosed(e) {
            let t = this._rangeRequestReaders.indexOf(e);
            t >= 0 && this._rangeRequestReaders.splice(t, 1);
          }
          getFullReader() {
            s.assert(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
            this._fullRequestReader = new c(this._manager, this._source);
            return this._fullRequestReader;
          }
          getRangeReader(e, t) {
            let r = new d(this._manager, e, t);
            r.onClosed = this._onRangeRequestReaderClosed.bind(this);
            this._rangeRequestReaders.push(r);
            return r;
          }
          cancelAllRequests(e) {
            for (let t of (this._fullRequestReader?.cancel(e), this._rangeRequestReaders.slice(0))) t.cancel(e);
          }
        }
        t.PDFNetworkStream = h;
        class c {
          constructor(e, t) {
            this._manager = e;
            let r = {
              onHeadersReceived: this._onHeadersReceived.bind(this),
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = t.url;
            this._fullRequestId = e.requestFull(r);
            this._headersReceivedCapability = s.createPromiseCapability();
            this._disableRange = t.disableRange || !1;
            this._contentLength = t.length;
            this._rangeChunkSize = t.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
            this._isStreamingSupported = !1;
            this._isRangeSupported = !1;
            this._cachedChunks = [];
            this._requests = [];
            this._done = !1;
            this._storedError = void 0;
            this._filename = null;
            this.onProgress = null;
          }
          _onHeadersReceived() {
            let e = this._fullRequestId;
            let t = this._manager.getRequestXhr(e);
            let r = e => t.getResponseHeader(e);
            let {
              allowRangeRequests,
              suggestedLength
            } = a.validateRangeRequestCapabilities({
              getResponseHeader: r,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            allowRangeRequests && (this._isRangeSupported = !0);
            this._contentLength = suggestedLength || this._contentLength;
            this._filename = a.extractFilenameFromHeader(r);
            this._isRangeSupported && this._manager.abortRequest(e);
            this._headersReceivedCapability.resolve();
          }
          _onDone(e) {
            if (e && (this._requests.length > 0 ? this._requests.shift().resolve({
              value: e.chunk,
              done: !1
            }) : this._cachedChunks.push(e.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
              for (let e of this._requests) e.resolve({
                value: void 0,
                done: !0
              });
              this._requests.length = 0;
            }
          }
          _onError(e) {
            for (let t of (this._storedError = a.createResponseStatusError(e, this._url), this._headersReceivedCapability.reject(this._storedError), this._requests)) t.reject(this._storedError);
            this._requests.length = 0;
            this._cachedChunks.length = 0;
          }
          _onProgress(e) {
            this.onProgress?.({
              loaded: e.loaded,
              total: e.lengthComputable ? e.total : this._contentLength
            });
          }
          get filename() {
            return this._filename;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          get contentLength() {
            return this._contentLength;
          }
          get headersReady() {
            return this._headersReceivedCapability.promise;
          }
          async read() {
            if (this._storedError) throw this._storedError;
            if (this._cachedChunks.length > 0) return {
              value: this._cachedChunks.shift(),
              done: !1
            };
            if (this._done) return {
              value: void 0,
              done: !0
            };
            let e = s.createPromiseCapability();
            this._requests.push(e);
            return e.promise;
          }
          cancel(e) {
            for (let t of (this._done = !0, this._headersReceivedCapability.reject(e), this._requests)) t.resolve({
              value: void 0,
              done: !0
            });
            this._requests.length = 0;
            this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId);
            this._fullRequestReader = null;
          }
        }
        class d {
          constructor(e, t, r) {
            this._manager = e;
            let s = {
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = e.url;
            this._requestId = e.requestRange(t, r, s);
            this._requests = [];
            this._queuedChunk = null;
            this._done = !1;
            this._storedError = void 0;
            this.onProgress = null;
            this.onClosed = null;
          }
          _close() {
            this.onClosed?.(this);
          }
          _onDone(e) {
            let t = e.chunk;
            for (let e of (this._requests.length > 0 ? this._requests.shift().resolve({
              value: t,
              done: !1
            }) : this._queuedChunk = t, this._done = !0, this._requests)) e.resolve({
              value: void 0,
              done: !0
            });
            this._requests.length = 0;
            this._close();
          }
          _onError(e) {
            for (let t of (this._storedError = a.createResponseStatusError(e, this._url), this._requests)) t.reject(this._storedError);
            this._requests.length = 0;
            this._queuedChunk = null;
          }
          _onProgress(e) {
            this.isStreamingSupported || this.onProgress?.({
              loaded: e.loaded
            });
          }
          get isStreamingSupported() {
            return !1;
          }
          async read() {
            if (this._storedError) throw this._storedError;
            if (null !== this._queuedChunk) {
              let e = this._queuedChunk;
              this._queuedChunk = null;
              return {
                value: e,
                done: !1
              };
            }
            if (this._done) return {
              value: void 0,
              done: !0
            };
            let e = s.createPromiseCapability();
            this._requests.push(e);
            return e.promise;
          }
          cancel(e) {
            for (let e of (this._done = !0, this._requests)) e.resolve({
              value: void 0,
              done: !0
            });
            this._requests.length = 0;
            this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId);
            this._close();
          }
        }
      }, (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        t.PDFFetchStream = void 0;
        var s = r(1);
        var a = r(24);
        function i(e, t, r) {
          return {
            method: "GET",
            headers: e,
            signal: r?.signal,
            mode: "cors",
            credentials: t ? "include" : "same-origin",
            redirect: "follow"
          };
        }
        function n(e) {
          let t = new Headers();
          for (let r in e) {
            let s = e[r];
            void 0 !== s && t.append(r, s);
          }
          return t;
        }
        class o {
          constructor(e) {
            this.source = e;
            this.isHttp = /^https?:/i.test(e.url);
            this.httpHeaders = this.isHttp && e.httpHeaders || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            return this._fullRequestReader?._loaded ?? 0;
          }
          getFullReader() {
            s.assert(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
            this._fullRequestReader = new l(this);
            return this._fullRequestReader;
          }
          getRangeReader(e, t) {
            if (t <= this._progressiveDataLength) return null;
            let r = new h(this, e, t);
            this._rangeRequestReaders.push(r);
            return r;
          }
          cancelAllRequests(e) {
            for (let t of (this._fullRequestReader && this._fullRequestReader.cancel(e), this._rangeRequestReaders.slice(0))) t.cancel(e);
          }
        }
        t.PDFFetchStream = o;
        class l {
          constructor(e) {
            this._stream = e;
            this._reader = null;
            this._loaded = 0;
            this._filename = null;
            let t = e.source;
            this._withCredentials = t.withCredentials || !1;
            this._contentLength = t.length;
            this._headersCapability = s.createPromiseCapability();
            this._disableRange = t.disableRange || !1;
            this._rangeChunkSize = t.rangeChunkSize;
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
            "undefined" != typeof AbortController && (this._abortController = new AbortController());
            this._isStreamingSupported = !t.disableStream;
            this._isRangeSupported = !t.disableRange;
            this._headers = n(this._stream.httpHeaders);
            let r = t.url;
            fetch(r, i(this._headers, this._withCredentials, this._abortController)).then(e => {
              if (!a.validateResponseStatus(e.status)) throw a.createResponseStatusError(e.status, r);
              this._reader = e.body.getReader();
              this._headersCapability.resolve();
              let t = t => e.headers.get(t);
              let {
                allowRangeRequests,
                suggestedLength
              } = a.validateRangeRequestCapabilities({
                getResponseHeader: t,
                isHttp: this._stream.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              this._isRangeSupported = allowRangeRequests;
              this._contentLength = suggestedLength || this._contentLength;
              this._filename = a.extractFilenameFromHeader(t);
              !this._isStreamingSupported && this._isRangeSupported && this.cancel(new s.AbortException("Streaming is disabled."));
            }).catch(this._headersCapability.reject);
            this.onProgress = null;
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            await this._headersCapability.promise;
            let {
              value,
              done
            } = await this._reader.read();
            return done ? {
              value,
              done
            } : (this._loaded += value.byteLength, this.onProgress && this.onProgress({
              loaded: this._loaded,
              total: this._contentLength
            }), {
              value: new Uint8Array(value).buffer,
              done: !1
            });
          }
          cancel(e) {
            this._reader && this._reader.cancel(e);
            this._abortController && this._abortController.abort();
          }
        }
        class h {
          constructor(e, t, r) {
            this._stream = e;
            this._reader = null;
            this._loaded = 0;
            let o = e.source;
            this._withCredentials = o.withCredentials || !1;
            this._readCapability = s.createPromiseCapability();
            this._isStreamingSupported = !o.disableStream;
            "undefined" != typeof AbortController && (this._abortController = new AbortController());
            this._headers = n(this._stream.httpHeaders);
            this._headers.append("Range", `bytes=${t}-${r - 1}`);
            let l = o.url;
            fetch(l, i(this._headers, this._withCredentials, this._abortController)).then(e => {
              if (!a.validateResponseStatus(e.status)) throw a.createResponseStatusError(e.status, l);
              this._readCapability.resolve();
              this._reader = e.body.getReader();
            }).catch(this._readCapability.reject);
            this.onProgress = null;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            await this._readCapability.promise;
            let {
              value,
              done
            } = await this._reader.read();
            return done ? {
              value,
              done
            } : (this._loaded += value.byteLength, this.onProgress && this.onProgress({
              loaded: this._loaded
            }), {
              value: new Uint8Array(value).buffer,
              done: !1
            });
          }
          cancel(e) {
            this._reader && this._reader.cancel(e);
            this._abortController && this._abortController.abort();
          }
        }
      }];
      var __webpack_module_cache__ = {};
      function __w_pdfjs_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = __webpack_module_cache__[e] = {
          exports: {}
        };
        __webpack_modules__[e](r, r.exports, __w_pdfjs_require__);
        return r.exports;
      }
      var __nested_webpack_exports__ = {};
      (() => {
        var e = __nested_webpack_exports__;
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        Object.defineProperty(e, "AnnotationLayer", {
          enumerable: !0,
          get: function() {
            return a.AnnotationLayer;
          }
        });
        Object.defineProperty(e, "AnnotationMode", {
          enumerable: !0,
          get: function() {
            return t.AnnotationMode;
          }
        });
        Object.defineProperty(e, "CMapCompressionType", {
          enumerable: !0,
          get: function() {
            return t.CMapCompressionType;
          }
        });
        Object.defineProperty(e, "GlobalWorkerOptions", {
          enumerable: !0,
          get: function() {
            return i.GlobalWorkerOptions;
          }
        });
        Object.defineProperty(e, "InvalidPDFException", {
          enumerable: !0,
          get: function() {
            return t.InvalidPDFException;
          }
        });
        Object.defineProperty(e, "LoopbackPort", {
          enumerable: !0,
          get: function() {
            return r.LoopbackPort;
          }
        });
        Object.defineProperty(e, "MissingPDFException", {
          enumerable: !0,
          get: function() {
            return t.MissingPDFException;
          }
        });
        Object.defineProperty(e, "OPS", {
          enumerable: !0,
          get: function() {
            return t.OPS;
          }
        });
        Object.defineProperty(e, "PDFDataRangeTransport", {
          enumerable: !0,
          get: function() {
            return r.PDFDataRangeTransport;
          }
        });
        Object.defineProperty(e, "PDFDateString", {
          enumerable: !0,
          get: function() {
            return s.PDFDateString;
          }
        });
        Object.defineProperty(e, "PDFWorker", {
          enumerable: !0,
          get: function() {
            return r.PDFWorker;
          }
        });
        Object.defineProperty(e, "PasswordResponses", {
          enumerable: !0,
          get: function() {
            return t.PasswordResponses;
          }
        });
        Object.defineProperty(e, "PermissionFlag", {
          enumerable: !0,
          get: function() {
            return t.PermissionFlag;
          }
        });
        Object.defineProperty(e, "PixelsPerInch", {
          enumerable: !0,
          get: function() {
            return s.PixelsPerInch;
          }
        });
        Object.defineProperty(e, "RenderingCancelledException", {
          enumerable: !0,
          get: function() {
            return s.RenderingCancelledException;
          }
        });
        Object.defineProperty(e, "SVGGraphics", {
          enumerable: !0,
          get: function() {
            return l.SVGGraphics;
          }
        });
        Object.defineProperty(e, "UNSUPPORTED_FEATURES", {
          enumerable: !0,
          get: function() {
            return t.UNSUPPORTED_FEATURES;
          }
        });
        Object.defineProperty(e, "UnexpectedResponseException", {
          enumerable: !0,
          get: function() {
            return t.UnexpectedResponseException;
          }
        });
        Object.defineProperty(e, "Util", {
          enumerable: !0,
          get: function() {
            return t.Util;
          }
        });
        Object.defineProperty(e, "VerbosityLevel", {
          enumerable: !0,
          get: function() {
            return t.VerbosityLevel;
          }
        });
        Object.defineProperty(e, "XfaLayer", {
          enumerable: !0,
          get: function() {
            return h.XfaLayer;
          }
        });
        Object.defineProperty(e, "build", {
          enumerable: !0,
          get: function() {
            return r.build;
          }
        });
        Object.defineProperty(e, "createPromiseCapability", {
          enumerable: !0,
          get: function() {
            return t.createPromiseCapability;
          }
        });
        Object.defineProperty(e, "createValidAbsoluteUrl", {
          enumerable: !0,
          get: function() {
            return t.createValidAbsoluteUrl;
          }
        });
        Object.defineProperty(e, "getDocument", {
          enumerable: !0,
          get: function() {
            return r.getDocument;
          }
        });
        Object.defineProperty(e, "getFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return s.getFilenameFromUrl;
          }
        });
        Object.defineProperty(e, "getPdfFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return s.getPdfFilenameFromUrl;
          }
        });
        Object.defineProperty(e, "getXfaPageViewport", {
          enumerable: !0,
          get: function() {
            return s.getXfaPageViewport;
          }
        });
        Object.defineProperty(e, "isPdfFile", {
          enumerable: !0,
          get: function() {
            return s.isPdfFile;
          }
        });
        Object.defineProperty(e, "loadScript", {
          enumerable: !0,
          get: function() {
            return s.loadScript;
          }
        });
        Object.defineProperty(e, "renderTextLayer", {
          enumerable: !0,
          get: function() {
            return o.renderTextLayer;
          }
        });
        Object.defineProperty(e, "shadow", {
          enumerable: !0,
          get: function() {
            return t.shadow;
          }
        });
        Object.defineProperty(e, "version", {
          enumerable: !0,
          get: function() {
            return r.version;
          }
        });
        var t = __w_pdfjs_require__(1);
        var r = __w_pdfjs_require__(4);
        var s = __w_pdfjs_require__(5);
        var a = __w_pdfjs_require__(18);
        var i = __w_pdfjs_require__(12);
        var n = __w_pdfjs_require__(3);
        var o = __w_pdfjs_require__(21);
        var l = __w_pdfjs_require__(22);
        var h = __w_pdfjs_require__(20);
        if (n.isNodeJS) {
          let {
            PDFNodeStream
          } = __w_pdfjs_require__(23);
          r.setPDFNetworkStreamFactory(t => new PDFNodeStream(t));
        } else {
          let {
            PDFNetworkStream
          } = __w_pdfjs_require__(26);
          let {
            PDFFetchStream
          } = __w_pdfjs_require__(27);
          r.setPDFNetworkStreamFactory(r => s.isValidFetchUrl(r.url) ? new PDFFetchStream(r) : new PDFNetworkStream(r));
        }
      })();
      return __nested_webpack_exports__;
    })();
  }); 
