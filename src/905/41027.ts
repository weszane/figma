import { GB } from "../905/192923";
import { Id, TA, N6 } from "../figma_app/262240";
import { Qm, iQ } from "../905/131414";
import { bB } from "../905/776065";
import { nq } from "../905/279649";
function l(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function d(e) {
  return function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var a = e.apply(t, i);
      function s(e) {
        l(a, n, r, s, o, "next", e);
      }
      function o(e) {
        l(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  };
}
export function $$c1(e, t) {
  if (m(e, t)) {
    let t = Qm(e);
    return !(t && $$h2(t));
  }
  return !1;
}
export function $$u0(e, t, i, n) {
  return p.apply(this, arguments);
}
function p() {
  return (p = d(function* (e, t, i, n) {
    if (!m(e, t)) return !1;
    let o = Qm(e);
    if (o && $$h2(o) || (yield iQ(e, i, n))) return !0;
    let l = e?.parentNode;
    let d = Id(e);
    let c = l?.id === d.id;
    return !!bB(e.name, ["vector", "polygon"]) && !!c;
  })).apply(this, arguments);
}
function m(e, t) {
  if (!e || TA(e)) return !1;
  let i = N6(t, e.id);
  return !!i && !!GB(e, i) && !(e.w > i.w / 4) && !(e.h > i.h / 4);
}
export function $$h2(e) {
  return f.includes(e.toLowerCase().replace(/[^a-zA-Z]/g, ""));
}
function g() {
  return (g = d(function* (e) {
    return null;
  })).apply(this, arguments);
}
let f = [nq.BACK_BUTTON.replace(/\s/g, ""), nq.LEFT_ARROW.replace(/\s/g, ""), nq.CLOSE.replace(/\s/g, ""), nq.EXIT.replace(/\s/g, ""), nq.X.replace(/\s/g, ""), "back", "backbutton", "backbtn", "btnback", "btnbackbutton", "buttonback", "cancel", "iconlylightoutlinearrowleft", "iconlydarktoutlinearrowleft", "iconangleleft", "ionarrowback", "chevronleft", "chevron", "iconchevronleft", "vuesaxlineararrowleft", "vuesaxoutlinearrowleft", "arrowleft", "backarrow", "navigationbarleftaccessoryback", "expandleftdouble", "angledoubleleft", "iconarrow", "iconarrowleft", "arrow", "arrowback", "bringback", "arrowleftline", "backbuttonframe", "iconnavigateback", "arrowchevronleft", "iconback", "navigateback", "arrowlefticon", "leftarrow", "backnav", "backnavigation", "arrowleftcircle", "backward", "goback", "returnback", "backicon", "leftchevron", "leftarrowicon", "backarrowicon", "navigateleft", "iconsarrowsarrowlongleft", "iconsnavigatebefore", "navigationbarcomponentsleftback", "arrowleftshort", "arrowpointingleft", "navarrow", "arrowbackios"];
export const _p = $$u0;
export const t$ = $$c1;
export const uV = $$h2;