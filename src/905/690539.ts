import { FontSourceType } from "../figma_app/763686";
import { logError } from "../905/714362";
import { G5 } from "../figma_app/795674";
import { Uw, HB } from "../905/698759";
import { l6, c$ } from "../905/794875";
let l = [["Inter"], ["Roboto"], ["Segoe", "Segoe UI"], ["SF Pro Text", "SF UI Text"], ["Serif"], ["Crimson Text"], ["New York"], ["Playfair Display"], ["Source Serif Pro"], ["Caveat"], ["Figma Hand"], ["Pacifico"], ["Anonymous Pro"], ["IBM Plex Mono"], ["Roboto Mono"]];
let d = new Set(["Anonymous Pro", "BIZ UDGothic", "BIZ UDMincho", "Courier", "Courier New", "Courier Prime", "Cousine", "Digital Numbers", "DotGothic16", "Fira Code", "Inconsolata", "Input", "Input Sans", "Input Serif", "Kosugi", "Kosugi Maru", "LXGW WenKai Mono TC", "Lekton", "Libre Barcode 128", "Libre Barcode 128 Text", "Libre Barcode 39", "Libre Barcode 39 Extended", "Libre Barcode 39 Extended Text", "Libre Barcode 39 Text", "Libre Barcode EAN13 Text", "Ligconsolata", "Linefont", "M PLUS 1 Code", "M PLUS Code Latin", "Major Mono Display", "NanumGothicCoding", "NovaMono", "Orbit", "Press Start 2P", "Redacted", "Redacted Script", "Rubik Mono One", "Sixtyfour", "Sono", "Source Code Pro", "Sudo Var", "Thabit", "VT323", "Workbench", "Yomogi"]);
let c = ["Allison", "Allura", "Annie Use Your Telescope", "Architects Daughter", "Are You Serious", "Arizonia", "Babylonica", "Ballet", "Beau Rivage", "Berkshire Swash", "Bilbo Swash Caps", "Bonheur Royale", "Butterfly Kids", "Caligraffiti", "Caramel", "Carattere", "Caveat", "Cedarville Cursive", "Cherish", "Comforter", "Cookie", "Corinthia", "Covered By Your Grace", "Dawning of a New Day", "Dr Sugiyama", "Dynalight", "Engagement", "Ephesis", "Fasthand", "Festive", "Fleur De Leah", "Great Vibes", "Gwendolyn", "Henny Penny", "Homemade Apple", "Hurricane", "Indie Flower", "Ingrid Darling", "Inspiration", "Island Moments", "Italianno", "Jolly Lodger", "Just Another Hand", "Just Me Again Down Here", "Kapakana", "Kristi", "Lavishly Yours", "Licorice", "Liu Jian Mao Cao", "Love Light", "Loved By The King", "Lovers Quarrel", "Ma Shan Zheng", "Mea Culpa", "Meddon", "Miss Fajardose", "Monsieur La Doulaise", "MonteCarlo", "Moon Dance", "Mr De Haviland", "Mrs Saint Delafield", "Ms Madi", "My Soul", "Nanum Pen", "Neonderthaw", "Nothing You Could Do", "Ole", "Oooh Baby", "Over the Rainbow", "Parisienne", "Passions Conflict", "Petemoss", "Princess Sofia", "Puppies Play", "Reenie Beanie", "Rochester", "Rock Salt", "RU Serious", "Ruge Boogie", "Ruthie", "Sacramento", "Sassy Frass", "Satisfy", "Send Flowers", "Sevillana", "Shalimar", "Square Peg", "Stalemate", "Sue Ellen Francisco", "Sunshiney", "Tangerine", "Taprom", "The Nautigal", "Twinkle Star", "Waterfall", "Whisper", "WindSong", "Zeyada", "LingWai SC", "LingWai TC", "Party LET", "Savoye LET", "Snell Roundhand", "HanziPen SC ", "HanziPen TC", "Grayscale"];
let u = {
  "Alumni Sans Collegiate One SC": 1.2,
  Nabla: 1.3
};
let p = ["Redacted Script"];
function m(e, t, i) {
  if (p.includes(e)) return t;
  try {
    let e = t.match(/height="(.*?)"/);
    let n = t.match(/width="(.*?)"/);
    let a = t.match(/viewBox="(.*?)"/);
    if (!e || !n || !a) {
      logError("Cannot resize svg, missing data.", t);
      return t;
    }
    let s = a[1].split(" ");
    if (4 !== s.length) {
      logError("Cannot resize svg, incorrectly formatted viewBox", a[1]);
      return t;
    }
    let o = parseFloat(n[1]) * i;
    let l = parseFloat(e[1]) * i;
    let d = parseFloat(s[1]) / i;
    t = (t = (t = t.replace(/width="(.*?)"/, `width="${o.toString()}"`)).replace(/height="(.*?)"/, `height="${l.toString()}"`)).replace(/viewBox="(.*?)"/, `viewBox="${s[0]} ${d.toString()} ${s[2]} ${s[3]}"`);
  } catch (e) {
    logError("Could not resize mono/script preview: ", e);
  }
  return t;
}
let h = ["regular", "medium", "r"];
let $$g5 = 27;
let f = ["Ested-VF", "Figma Hand", "Font Awesome 5 Brands", "Font Awesome 5 Free", "Font Awesome 6 Brands", "Font Awesome 6 Free", "KyivType Sans", "Kyiv*Type Serif", "Kyiv*Type Titling", "Material Icons", "SF Pro", "SF Pro Rounded", "SF Compact", "SF Compact Rounded", "Sudo Var", "Wavefont"];
let _ = ["Honk", "jsMath-cmex10", "Linefont", "ZCOOL XiaoWei"];
export function $$A12(e) {
  return !!(e.match(/Noto (.*)/) || _.includes(e));
}
export var $$y2 = (e => (e.ALL_FONTS = "all_fonts", e.DOCUMENT_FONTS = "document_fonts", e.SHARED_FONTS = "shared_fonts", e.USER_INSTALLED_FONTS = "user_installed_fonts", e.GOOGLE_FONTS = "google_fonts", e.VARIABLE_FONTS = "variable_fonts", e.POPULAR_FONTS = "popular_fonts", e.SUMMER_NEW = "summer_new", e))($$y2 || {});
export function $$b13(e) {
  return `${e.family}-${e.source}-${e.isVariableFont ? 1 : 0}`;
}
export function $$v11(e, t) {
  if (t.family.startsWith(".")) return !1;
  let i = t.family.toLowerCase();
  for (let t of e) if (!i.includes(t)) return !1;
  return !0;
}
export function $$I7(e, t) {
  let i = /^[\p{Punctuation}]/gu;
  let n = i.test(e.family);
  let r = i.test(t.family);
  return n && !r ? 1 : !n && r ? -1 : e.family.localeCompare(t.family);
}
export function $$E10(e) {
  if (e.source !== FontSourceType.LOCAL) return !1;
  let t = Math.max.apply(Math, Object.values(e.styles).map(e => e.modifiedAt));
  return G5(7) - t < 0;
}
let x = new Set(["Blaka Ink", "Bungee Color", "Bungee Spice", "Cairo Play", "Foldit", "Honk", "Kalnia Glaze", "Noto Color Emoji", "Noto Znamenny Musical Notation"]);
export function $$S9(e) {
  return x.has(e);
}
export function $$w6(e, t, i) {
  if ("all_fonts" === t) return e;
  let a = new Map();
  let o = [];
  for (let d of e) switch (t) {
    case "summer_new":
      (Uw.has(d.previewPath || "") || HB.has(d.previewPath || "")) && o.push(d);
      break;
    case "shared_fonts":
      d.source === FontSourceType.SHARED && o.push(d);
      break;
    case "user_installed_fonts":
      d.source === FontSourceType.LOCAL && d.userInstalled && o.push(d);
      break;
    case "google_fonts":
      d.source !== FontSourceType.GOOGLE || f.includes(d.family) || o.push(d);
      break;
    case "variable_fonts":
      d.isVariableFont && o.push(d);
      break;
    case "document_fonts":
      Object.keys(i).includes(d.family) && o.push(d);
      break;
    case "popular_fonts":
      l.forEach((e, t) => {
        e.forEach((e, i) => {
          if (e === d.family) {
            let e = a.get(t) || [];
            e.splice(i, 0, d);
            a.set(t, e);
          }
        });
      });
      break;
    default:
      logError("Font picker", "Reached unreachable code: unhandled FontListType", {
        fontSet: t
      }, {
        reportAsSentryError: !0
      });
  }
  return ("popular_fonts" === t && a.forEach(e => o.push(e[0])), i) ? o.sort((e, t) => i[t.family] - i[e.family]) : o;
}
export function $$C8(e, t, i) {
  let r;
  let a = Number.MAX_SAFE_INTEGER;
  let s = Number.MAX_SAFE_INTEGER;
  let o = "";
  for (let e of Object.keys(t)) if (t[e].source === i) for (let i of Object.keys(t[e].styles)) {
    let n = t[e].styles[i];
    if (!n.weight || !n.stretch || r && !r.italic && n.italic) continue;
    let l = Math.abs(n.weight - 400);
    let d = Math.abs(n.stretch - 5);
    let c = l < a || l === a && d < s;
    let u = r && r.italic && !n.italic;
    let p = r && n.weight === r.weight && n.stretch === r.stretch && n.italic === r.italic && h.includes(i.toLocaleLowerCase());
    (c || u || p) && (a = l, s = d, r = n, o = i);
  }
  return i === FontSourceType.LOCAL ? `/font-preview?file=${r?.id}&font_size=12&postscript=${r?.postscript}&family=${e}&style=${o}&v=5` : i === FontSourceType.SHARED ? r?.previewUrl : r?.id;
}
let $$T0 = '<svg width="100%" height="100%"><pattern id="pattern" x="0" y="0" width="240" height="28" patternUnits="userSpaceOnUse"><rect x="32" width="64" height="9" y="9"></rect></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect></svg>';
let $$k1 = '<svg width="100%" height="100%"><rect x="24" width="64" height="9" y="9" fill="var(--color-bg)"></rect></svg>';
export function $$R14(e, t) {
  if (e.includes(" Mono") || d.has(e)) return m(e, t, .92);
  if ("Workbench" === e) return m(e, t, 1.2);
  if (e.includes(" Script") || e.includes(" Brush") || c.includes(e)) return m(e, t, 1.25);
  if ("Nabla" === e) return m(e, t, .95);
  if ("Monofett" === e) return m(e, t, 1.3);
  let i = u[e];
  return "number" == typeof i ? m(e, t, i) : t;
}
let $$N4 = l6;
let $$P3 = c$;
export const kF = $$T0;
export const sp = $$k1;
export const Qr = $$y2;
export const Lz = $$P3;
export const e2 = $$N4;
export const HP = $$g5;
export const G8 = $$w6;
export const qV = $$I7;
export const x6 = $$C8;
export const RE = $$S9;
export const Wp = $$E10;
export const uv = $$v11;
export const fj = $$A12;
export const Km = $$b13;
export const Aw = $$R14;