import { sha1HexFromString, bytesToHex } from "../905/125019";
import { ImageCppBindings } from "../figma_app/763686";
import { Zw, fJ } from "../905/419431";
export function $$o0(e) {
  try {
    let t = e.configSettings.markupImageOption;
    let i = function (e) {
      let t = e.maxDepth || void 0;
      let i = e.includeComponents ?? !0;
      let r = e.includeVariables ?? !0;
      let o = function e({
        node: t,
        maxDepth: i,
        includeComponents: r,
        includeVariables: o,
        codeConnectMapping: d,
        codebaseSuggestions: c,
        configSettings: u,
        loadImageByHash: p
      }, m = 0) {
        if (!t.visible && (!t.componentPropertyReferences() || !t.componentPropertyReferences().visible)) return "";
        let h = "  ".repeat(m);
        let g = function ({
          node: e,
          includeComponents: t,
          includeVariables: i,
          codeConnectMapping: r,
          codebaseSuggestions: o,
          configSettings: d,
          loadImageByHash: c
        }) {
          let u = {
            name: e.name,
            id: e.guid
          };
          t && function (e, t, i) {
            if ("SYMBOL" === e.type && e.parentNode && e.parentNode.isStateGroup ? (t.componentKey = e.componentKey ?? "", t.parentComponentKey = e.parentNode.componentKey ?? "") : e.isStateGroup && e.componentKey && (t.componentKey = e.componentKey), e.isStateGroup || "SYMBOL" === e.type && e.parentNode && !e.parentNode.isStateGroup) {
              let i = e.componentPropertyDefinitions();
              for (let n in i) {
                let r = i[n];
                let a = n?.split("#")[0] || "";
                let s = `prop[${a.replace(/[^A-Za-z0-9]/g, "_")}]`;
                if (r?.type === "INSTANCE_SWAP") try {
                  let i = e.sceneGraph.get("#{p.defaultValue}");
                  i && i.parentNode && (t[s] = i.parentNode.isStateGroup ? i.parentNode.name : i.name);
                } catch (e) {
                  console.warn("Could not get default swap component:", e);
                } else r?.type === "VARIANT" ? t[s] = r?.variantOptions?.join(",") : t[s] = r?.defaultValue;
              }
            }
            "VECTOR" === e.type && e.visible && function (e, t, i) {
              if ("local" === i.markupImageOption) {
                let i = new TextDecoder("utf-8").decode(e.$$export([{
                  imageType: "SVG"
                }]));
                let r = sha1HexFromString(i);
                let s = new Blob([i]);
                let o = new Map();
                let l = `${r}.svg`;
                o.set(l, s);
                Zw(o);
                t["xlink:href"] = `${fJ}/${l}`;
              } else try {
                let i = new TextDecoder("utf-8").decode(e.$$export([{
                  imageType: "SVG"
                }]));
                t.svg = i;
              } catch (e) {}
            }(e, t, i);
            "INSTANCE" === e.type && function (e, t) {
              try {
                let i = e.mainComponent ? e.mainComponent : null;
                i && (t.componentKey = i.componentKey ?? "", i.parentNode && i.parentNode.isStateGroup && i.parentNode.componentKey && (t.parentComponentKey = i.parentNode.componentKey));
              } catch (e) {
                console.warn("Could not get main component:", e);
              }
              let i = e.componentProperties();
              for (let n in i) {
                let r = i[n];
                let a = n?.split("#")[0] || "";
                let s = `prop[${a.replace(/[^A-Za-z0-9]/g, "_")}]`;
                if (r?.type === "INSTANCE_SWAP") try {
                  let i = e.sceneGraph.get(`${r.value}`);
                  i && i.parentNode && (t[s] = i.parentNode.isStateGroup ? i.parentNode.name : i.name);
                } catch (e) {
                  console.warn("Could not get swap component:", e);
                } else t[s] = r?.value;
              }
            }(e, t);
          }(e, u, d);
          e.annotations && e.annotations.length && function (e, t) {
            for (let i of e.annotations) {
              let n = i.categoryId ? e.sceneGraph.getRoot().annotationCategories?.find(e => e?.id === i.categoryId) : null;
              i.label && (t[`annotation[${n ? n.id : "Default"}]`] = i.label);
            }
          }(e, u);
          l(e, u, d, c);
          i && e.boundVariables && function (e, t) {
            for (let i in e.boundVariables) {
              let n = "fills" === i || "strokes" === i;
              let r = n ? e.boundVariables[i] : [e.boundVariables[i]];
              if (!r) continue;
              let a = Array.isArray(r) ? r : [r];
              if (0 === a.length) continue;
              let s = 0;
              for (let r of a) {
                if (!r) continue;
                let a = e.sceneGraph.getVariableNode(r.id);
                let o = n ? `var[${i}][${s}]` : `var[${i}]`;
                let l = a ? a.name : r.id;
                l && (t[o] = l, s++);
              }
            }
          }(e, u);
          r && function (e, t, i) {
            let n = i[e.guid];
            n && (t.codeConnectSrc = n.source, t.codeConnectName = n.componentName);
          }(e, u, r);
          o && function (e, t, i) {
            let n = i[e.guid];
            n && 0 !== n.length && (t.codebaseSuggestions = JSON.stringify(n));
          }(e, u, o);
          return u;
        }({
          node: t,
          includeComponents: !!r,
          includeVariables: !!o,
          codeConnectMapping: d,
          codebaseSuggestions: c,
          configSettings: u,
          loadImageByHash: p
        });
        let f = t.type.toLowerCase();
        let _ = Object.entries(g).flatMap(([e, t]) => {
          if ("spans" === e || "svg" === e || null == t) return [];
          let i = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
          return `${e}="${i}"`;
        }).join(" ");
        let A = `${h}<${f} ${_}`;
        let y = void 0 !== i && m >= i;
        if (g.spans) {
          A += ">\n";
          A += g.spans.map(e => `${h}  <span ${Object.entries(e).flatMap(([e, t]) => {
            if ("content" === e) return [];
            let i = String(t || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
            return `${e}="${i}"`;
          }).join(" ")} ${e.content ? `>${e.content}</span>` : "/>"}`).join("\n");
          A += `
${h}</${f}>
`;
        } else if (g.svg) {
          A += ">\n";
          A += `${h}  ${g.svg.replace(/\n/g, "")}`;
          A += `
${h}</${f}>
`;
        } else if ("childrenNodes" in t && t.childrenNodes.length > 0 && !y) {
          for (let n of (A += ">\n", t.childrenNodes)) A += e({
            node: n,
            maxDepth: i,
            includeComponents: r,
            includeVariables: o,
            codeConnectMapping: d,
            codebaseSuggestions: c,
            configSettings: u,
            loadImageByHash: p
          }, m + 1);
          A += `${h}</${f}>
`;
        } else A += " />\n";
        return A;
      }({
        node: e.node,
        includeComponents: i,
        includeVariables: r,
        maxDepth: t,
        codeConnectMapping: e.codeConnectMapping,
        codebaseSuggestions: e.codebaseSuggestions,
        configSettings: e.configSettings,
        loadImageByHash: e.loadImageByHash
      });
      return `<?xml version="1.0" encoding="UTF-8"?>
<root>
${o}
</root>`;
    }(e);
    let r = Object.keys(e?.codeConnectMapping || {}).length > 0;
    let o = Object.keys(e?.codebaseSuggestions || {}).length > 0;
    return {
      content: [{
        type: "text",
        text: ["The following message is an XML representation of the design node. ", r ? "If the node is connected to a code component in the users codebase, the source of the code component will be included in the XML on the codeConnectSrc attribute. The component name will be included in the codeConnectName attribute." : "", o ? "If the node is similar to existing components in your codebase based on name and visual similarity, the top suggested components will be included in the XML on the codebaseSuggestions attribute. It will be an array of objects with the component `name` and `source`, ordered in descending order of similarity." : "", "local" === t ? "Image assets are stored on a local server and can be referenced using the imageSrc attribute in the XML-they will be served from the local server." : ""].filter(e => !!e).join("\n\n")
      }, {
        type: "text",
        text: i
      }]
    };
  } catch (e) {
    console.error(e);
    return e;
  }
}
async function l(e, t, i, s) {
  if ("TEXT" === e.type) {
    !function (e, t) {
      e.name === e.characters ? t.name = "Text Node" : t.name = e.name.slice(0, 30);
      let i = e.getStyledTextSegments(["textStyleId", "fontName", "fontSize", "fontWeight", "letterSpacing", "lineHeight", "textCase", "textDecoration"]);
      let n = [];
      for (let t of i) {
        let i = {
          content: t.characters
        };
        if (n.push(i), t.textStyleId) {
          let n = e.getRangeInheritedTextStyle(t.start, t.end);
          i["style[textStyleName]"] = function (e, t) {
            if ("mixed" === t) return "mixed";
            if (t && t.key) {
              let i = e.sceneGraph.getStyleNodeByRef(t);
              return i ? i.name : t.key;
            }
            return "unknown";
          }(e, n);
        }
        if (t.fontName && (i["style[fontFamily]"] = t.fontName.family, i["style[fontStyle]"] = t.fontName.style), void 0 !== t.fontSize && (i["style[fontSize]"] = t.fontSize), void 0 !== t.fontWeight && (i["style[fontWeight]"] = t.fontWeight), void 0 !== t.letterSpacing) {
          let e = t.letterSpacing;
          "object" == typeof e ? (i["style[letterSpacing]"] = e.value, i["style[letterSpacingUnit]"] = e.units) : i["style[letterSpacing]"] = e;
        }
        if (void 0 !== t.lineHeight) {
          let e = t.lineHeight;
          "object" == typeof e ? (i["style[lineHeight]"] = e.value, i["style[lineHeightUnit]"] = e.units) : i["style[lineHeight]"] = e;
        }
        void 0 !== t.textCase && (i["style[textCase]"] = t.textCase);
        void 0 !== t.textDecoration && (i["style[textDecoration]"] = t.textDecoration);
        void 0 !== t.paragraphIndent && (i["style[paragraphIndent]"] = t.paragraphIndent);
        void 0 !== t.paragraphSpacing && (i["style[paragraphSpacing]"] = t.paragraphSpacing);
      }
      t.spans = n;
      void 0 !== e.textAlignHorizontal && (t["style[textAlign]"] = e.textAlignHorizontal);
      void 0 !== e.textAlignVertical && (t["style[textAlignVertical]"] = e.textAlignVertical);
    }(e, t);
    return;
  }
  let o = e.inferredAutoLayoutResult;
  if (o) for (let e in o) t[`style[${e}]`] = o[e];
  if (e.absoluteRenderBounds?.w !== void 0 && (t["style[width]"] = e.absoluteRenderBounds.w), e.absoluteRenderBounds?.h !== void 0 && (t["style[height]"] = e.absoluteRenderBounds.h), void 0 !== e.x && (t["style[x]"] = e.x), void 0 !== e.y && (t["style[y]"] = e.y), e.fills && e.fills.length > 0) {
    let o = e.fills.map(async (e, o) => {
      if ("SOLID" === e.type && !1 !== e.visible && e.color) {
        let {
          r: _r,
          g,
          b,
          a
        } = e.color;
        let s = $$d(_r, g, b);
        t[`style[fill][${o}]`] = s;
        1 !== a && (t[`style[fillOpacity][${o}]`] = a);
      } else if ("local" === i.markupImageOption && "IMAGE" === e.type && e.image?.hash && ImageCppBindings && !1 !== e.visible) try {
        let i = bytesToHex(e.image.hash);
        await s(i);
        let l = ImageCppBindings.getCompressedImage(i);
        if (!l) {
          console.error(`Image data for hash ${i} not found`);
          return;
        }
        let d = new Blob([l]);
        let c = new Map();
        let u = `${i}.png`;
        c.set(u, d);
        Zw(c);
        t[`style[fill][${o}][imageSrc]`] = `${fJ}/${u}`;
      } catch (e) {
        console.error(`Error processing image fill at index ${o}:`, e);
      } else e.type && (t[`style[fill][${o}]`] = e.type);
    });
    await Promise.all(o);
  }
  let l = e.strokePaints?.data;
  l && l.length > 0 && l.forEach((e, i) => {
    if ("SOLID" === e.type && !1 !== e.visible) {
      let {
        r: _r2,
        g,
        b,
        a: _a
      } = e.color || {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
      let o = $$d(_r2, g, b);
      t[`style[stroke][${i}]`] = o;
      1 !== _a && (t[`style[strokeOpacity][${i}]`] = `${_a}`);
    } else e.type && (t[`style[stroke][${i}]`] = e.type);
  });
  e.effects && e.effects.length > 0 && e.effects.forEach((e, i) => {
    if (e.visible) {
      if (t[`style[effect][${i}][type]`] = `${e.type}`, "DROP_SHADOW" === e.type || "INNER_SHADOW" === e.type) {
        if (e.color) {
          let {
            r: _r3,
            g,
            b,
            a: _a2
          } = e.color;
          t[`style[effect][${i}][color]`] = $$d(_r3, g, b);
          1 !== _a2 && (t[`style[effect][${i}][opacity]`] = `${_a2}`);
        }
        t[`style[effect][${i}][offset][x]`] = e.offset ? e.offset.x : void 0;
        t[`style[effect][${i}][offset][y]`] = e.offset ? e.offset.y : void 0;
        t[`style[effect][${i}][radius]`] = e.radius;
        t[`style[effect][${i}][spread]`] = e.spread;
      } else ("FOREGROUND_BLUR" === e.type || "BACKGROUND_BLUR" === e.type) && (t[`style[effect][${i}][radius]`] = e.radius);
    }
  });
}
function $$d(e, t, i) {
  return "#" + (0x1000000 + ((e = Math.round(255 * e)) << 16) + ((t = Math.round(255 * t)) << 8) + (i = Math.round(255 * i))).toString(16).slice(1).toUpperCase();
}
export const d = $$o0;