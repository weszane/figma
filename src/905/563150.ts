import { __rest } from "../vendor/56636";
import { createElement, Fragment, memo } from "react";
import { htmlColorFromFigColor } from "../905/545833";
import { cssTransformFromNodeTransform } from "../905/545833";
import { cssVarToString, decimalToPercent, colorToString } from "../905/436288";
exports.RenderNode = exports.RenderPathNode = exports.RenderMaskNode = exports.RenderGroupNode = void 0;
exports.RenderGroupNode = e => {
  let {
    node,
    defMaker
  } = e;
  let o = node.clip ? defMaker(`clip-${node.name}`, e => {
    var t;
    var n;
    return createElement("clipPath", {
      id: e
    }, createElement("rect", {
      width: node.size?.x,
      height: node.size?.y
    }));
  }) : null;
  let l = node.clip ? {
    clipPath: `url(#clip-${node.name})`
  } : {};
  let d = `filter-${node.name}`;
  let c = function (e, t, i) {
    let n = [];
    let s = 0;
    let o = 0;
    let l = 0;
    let d = 0;
    let c = t.map((e, t) => {
      var i;
      var c;
      var u;
      var p;
      var m;
      var h;
      var g;
      var f;
      if ("drop-shadow" === e.type && e.offset && e.color) {
        let u = `shadow${t}`;
        n.push(u);
        s = Math.max(null !== (i = e.offset.x + e.blur) && void 0 !== i ? i : 0, s);
        o = Math.max(null !== (c = e.offset.y + e.blur) && void 0 !== c ? c : 0, o);
        l = Math.min(e.offset.x - e.blur, l);
        d = Math.min(e.offset.y - e.blur, d);
        return createElement("feDropShadow", {
          in: "SourceGraphic",
          result: u,
          key: t,
          dx: e.offset.x,
          dy: e.offset.y,
          stdDeviation: Math.sqrt(e.blur),
          floodColor: htmlColorFromFigColor(e.color)
        });
      }
      if ("layer-blur" === e.type) {
        s = Math.max(null !== (m = e.blur) && void 0 !== m ? m : 0, s);
        o = Math.max(null !== (h = e.blur) && void 0 !== h ? h : 0, o);
        l = Math.min(-e.blur, l);
        d = Math.min(-e.blur, d);
        let i = `layerBlur${t}`;
        n.push(i);
        return createElement("feGaussianBlur", {
          in: "SourceGraphic",
          result: i,
          key: t,
          stdDeviation: Math.sqrt(e.blur)
        });
      }
    }).filter(e => !!e);
    if (c.length > 0) {
      let t = s + Math.abs(l) + i.width;
      let a = o + Math.abs(d) + i.height;
      return createElement("filter", {
        x: Math.min(0, l),
        y: Math.min(0, d),
        width: `${t}px`,
        height: `${a}px`,
        id: e
      }, c, createElement("feMerge", null, n.map((e, t) => createElement("feMergeNode", {
        in: e,
        key: `filter-${t}`
      }))));
    }
  }(d, node.effects || [], node.boundingBox);
  let u = c ? {
    filter: `url(#${d})`
  } : {};
  return createElement(Fragment, null, o, c, createElement("g", Object.assign({}, u), createElement("g", Object.assign({
    className: node.name
  }, l, {
    transform: cssTransformFromNodeTransform(node.transform),
    opacity: node.opacity
  }), [...node.children].reverse().map((i, n) => createElement(exports.RenderNode, Object.assign({
    key: n
  }, Object.assign(Object.assign({}, e), {
    node: i
  })))))));
};
exports.RenderMaskNode = e => {
  let {
    node,
    defMaker
  } = e;
  return createElement(Fragment, null, createElement("defs", null, createElement("mask", {
    id: node.name
  }, createElement(exports.RenderNode, {
    defMaker,
    node: node.maskNode
  }))), createElement("g", {
    mask: `url(#${node.name})`
  }, [...node.children].reverse().map((e, i) => createElement(exports.RenderNode, {
    key: i,
    defMaker,
    node: e
  }))));
};
exports.RenderPathNode = e => {
  let {
    node
  } = e;
  if (!node.path) {
    console.error("No path for", node);
    return null;
  }
  let {
    path,
    windingRule
  } = node.path;
  let {
    fill,
    def
  } = function (e, t, i) {
    switch (e.type) {
      case "override":
        return {
          fill: e.color
        };
      case "css-var":
        return {
          fill: cssVarToString(e)
        };
      case "solid":
        return {
          fill: function (e) {
            let {
              color,
              opacity
            } = e;
            if (color) {
              void 0 !== opacity && (t = Object.assign(Object.assign({}, color), {
                a: color.a * opacity
              }));
              return htmlColorFromFigColor(color);
            }
          }(e)
        };
      case "gradient-linear":
      case "gradient-radial":
        return function (e, t, i) {
          let {
            gradientStops,
            gradientHandlePositions: [{
              x: a,
              y: s
            }, {
              x: l,
              y: d
            }],
            opacity = 1
          } = e;
          let u = gradientStops.map(({
            position: e,
            color: t
          }) => createElement("stop", {
            key: `${t}-${e}`,
            offset: decimalToPercent(e),
            style: {
              stopColor: colorToString(t),
              stopOpacity: t.a * opacity
            }
          }));
          let p = `grad-${i}}`;
          return {
            fill: `url(#${p})`,
            def: t(p, t => "gradient-linear" === e.type ? createElement("linearGradient", Object.assign({
              id: t
            }, {
              x1: decimalToPercent(a),
              y1: decimalToPercent(s),
              x2: decimalToPercent(l),
              y2: decimalToPercent(d)
            }), u) : createElement("radialGradient", {
              id: t
            }, u))
          };
        }(e, t, i);
      case "image":
        return function (e, t, i) {
          var n;
          var a;
          var s;
          var o;
          let l;
          let d = e?.src;
          let c = e?.imageSize;
          switch (e.scaleMode) {
            case "tile":
              let u = (null !== (n = c?.width) && void 0 !== n ? n : 1) * (null !== (a = e.scalingFactor) && void 0 !== a ? a : 1);
              let p = (null !== (s = c?.height) && void 0 !== s ? s : 1) * (null !== (o = e.scalingFactor) && void 0 !== o ? o : 1);
              l = e => createElement("pattern", {
                id: e,
                width: u,
                height: p,
                patternContentUnits: "userSpaceOnUse",
                patternUnits: "userSpaceOnUse"
              }, createElement("image", {
                href: d,
                width: u,
                height: p
              }));
              break;
            case "fill":
              l = e => createElement("pattern", {
                id: e,
                width: "100%",
                height: "100%"
              }, createElement("image", {
                href: d,
                width: "100%",
                height: "100%",
                preserveAspectRatio: "xMidYMid slice"
              }));
              break;
            case "fit":
            case "crop":
              console.error(`Unable to render image fill for ${i}. Scale mode ${e.scaleMode} is not supported.`);
              return {};
          }
          let m = `image-${i}}`;
          return {
            fill: `url(#${m})`,
            def: t(m, l)
          };
        }(e, t, i);
      default:
        console.error(`Unable to render paint for ${i}. Paint type ${e.type} is not supported.`);
        return {};
    }
  }(node.paint, e.defMaker, node.name);
  return createElement(Fragment, null, def, createElement("path", {
    className: node.name,
    d: path,
    fillRule: windingRule,
    fill,
    transform: node.transform ? cssTransformFromNodeTransform(node.transform) : void 0
  }));
};
exports.RenderNode = memo(e => {
  var {
    node
  } = e;
  var a = __rest(e, ["node"]);
  switch (node.type) {
    case "group":
      return createElement(exports.RenderGroupNode, Object.assign({}, Object.assign(Object.assign({}, a), {
        node
      })));
    case "mask":
      return createElement(exports.RenderMaskNode, Object.assign({}, Object.assign(Object.assign({}, a), {
        node
      })));
    case "path":
      return createElement(exports.RenderPathNode, Object.assign({}, Object.assign(Object.assign({}, a), {
        node
      })));
  }
});