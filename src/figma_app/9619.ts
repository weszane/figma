import { iK } from "../vendor/858260";
import { D } from "../vendor/24766";
import { g } from "../vendor/797080";
import { Db } from "../vendor/491721";
import { v5, YW } from "../vendor/231521";
import { jL } from "../vendor/871930";
import d from "../vendor/197638";
import { Ey, Ni } from "../vendor/408361";
import { W, z } from "../905/69245";
var c = d;
export let $$_2 = [Ey, v5, YW, Db, iK, jL];
export function $$h1(e) {
  let t = g(e);
  let r = W(t, ["class", "dir"]);
  return function (e) {
    let t = new DOMParser().parseFromString(e, "text/html");
    t.querySelectorAll("ol > li").forEach(e => {
      e.setAttribute("data-list", "ordered");
    });
    t.querySelectorAll("ul").forEach(e => {
      let t = document.createElement("ol");
      t.innerHTML = c().sanitize(e.innerHTML);
      e.replaceWith(t);
      t.querySelectorAll("li").forEach(e => {
        e.setAttribute("data-list", "bullet");
      });
    });
    return t.body.innerHTML;
  }(r = function (e) {
    let t = new DOMParser().parseFromString(e, "text/html");
    t.querySelectorAll("pre").forEach(e => {
      let t = document.createElement("div");
      t.classList.add("ql-code-block-container");
      t.setAttribute("spellcheck", "false");
      e.innerHTML.replace(/<br\s*\/?>/gi, "\n").split("\n").forEach(e => {
        let r = document.createElement("div");
        r.classList.add("ql-code-block");
        r.innerHTML = c().sanitize(e);
        t.appendChild(r);
      });
      e.replaceWith(t);
    });
    return t.body.innerHTML;
  }(r));
}
function m(e, t) {
  let r = document.createElement("ordered" === t ? "ol" : "ul");
  let n = e.map(e => e.outerHTML).join("");
  r.innerHTML = c().sanitize(n);
  return r;
}
export function $$g3(e) {
  try {
    JSON.parse(e);
    let t = D({
      nodes: $$_2
    });
    t.setEditorState(t.parseEditorState(e));
    return "lexical";
  } catch {
    return "html";
  }
}
export function $$f0(e) {
  return D({
    nodes: $$_2,
    onError: e => {
      console.error(e);
    }
  }).parseEditorState(e).read(() => Ni().getTextContent());
}
function E(e) {
  if (!e) return "";
  let t = new DOMParser().parseFromString(e, "text/html");
  t.body.childNodes.forEach(e => {
    if (e.nodeType === Node.TEXT_NODE) {
      let t = e.textContent;
      if (!t || "" === t.trim()) {
        e.remove();
        return;
      }
      let r = e.previousSibling;
      if (r?.nodeType === Node.ELEMENT_NODE && "P" === r.nodeName) {
        r.innerHTML = c().sanitize(r.innerHTML + t);
        e.remove();
        return;
      }
      let n = e.nextSibling;
      if (n?.nodeType === Node.ELEMENT_NODE && "P" === n.nodeName) {
        n.innerHTML = c().sanitize(t + n.innerHTML);
        e.remove();
        return;
      }
      let i = document.createElement("p");
      i.textContent = t.trim();
      e.replaceWith(i);
    } else if (e.nodeType === Node.ELEMENT_NODE && ["STRONG", "I", "EM", "S", "CODE", "BR"].includes(e.tagName)) {
      let t = document.createElement("p");
      e.replaceWith(t);
      t.appendChild(e);
    }
  });
  return t.body.innerHTML.replace(/(\r\n|\n|\r)/gm, "<br>");
}
export function $$y4(e) {
  let t = new DOMParser();
  let r = z(E(e));
  let n = z(E(r));
  let i = t.parseFromString(n, "text/html");
  !function (e) {
    e.querySelectorAll("div.ql-code-block-container").forEach(e => {
      let t = document.createElement("pre");
      let r = e.querySelectorAll("div.ql-code-block");
      r.forEach((e, n) => {
        let i = document.createElement("span");
        i.innerHTML = c().sanitize(e.innerHTML);
        t.appendChild(i);
        n < r.length - 1 && t.appendChild(document.createElement("br"));
      });
      e.replaceWith(t);
    });
  }(i);
  !function (e) {
    e.querySelectorAll("ol").forEach(e => {
      let t = [];
      let r = e.querySelectorAll("li");
      let n = [];
      let i = null;
      for (let e of r) {
        if (!i && !(i = e.getAttribute("data-list"))) return;
        i !== e.getAttribute("data-list") && (t.push(m(n, i)), n = [], i = e.getAttribute("data-list"));
        n.push(e);
      }
      n && t.push(m(n, i));
      e.replaceWith(...t);
    });
  }(i);
  !function (e) {
    let t = e.body.lastElementChild;
    t && "P" === t.nodeName && "<br>" === t.innerHTML && t.remove();
  }(i);
  return i;
}
export const El = $$f0;
export const T = $$h1;
export const cL = $$_2;
export const j_ = $$g3;
export const mH = $$y4;