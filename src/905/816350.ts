import { transformFromReactProps } from "../905/436288";
exports.renderTree = void 0;
exports.renderTree = function (e, t) {
  var i;
  let a = `${e.name?.replace(/ /g, "-")}-${r++}`;
  let {
    relativeBoundingBox,
    rotationOnlyTransform
  } = transformFromReactProps(e);
  let l = [];
  let d = e.stroke.filter(e => !1 !== e.visible).reverse();
  for (let i of e.strokePath || []) if (t.stroke) l.push({
    type: "path",
    name: a,
    path: i,
    paint: {
      type: "override",
      color: t.stroke
    }
  });else for (let e of d) l.push({
    type: "path",
    name: a,
    path: i,
    paint: e
  });
  e.fillPath && e.fillPath.length > 0 && ("inside" === e.strokeAlign ? l = [{
    type: "mask",
    name: `${a}-strokeMask`,
    maskNode: {
      type: "path",
      name: `${a}-strokeMaskNode`,
      path: e.fillPath[0],
      paint: {
        type: "solid",
        color: {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        },
        blendMode: "luminosity"
      }
    },
    children: l
  }] : "outside" === e.strokeAlign && (l = [{
    type: "mask",
    name: `${a}-strokeMask`,
    maskNode: {
      type: "group",
      name: `${a}-strokeMaskNode`,
      clip: !1,
      size: {
        x: relativeBoundingBox.width,
        y: relativeBoundingBox.height
      },
      boundingBox: relativeBoundingBox,
      effects: [],
      children: [{
        type: "path",
        name: `${a}-strokeMaskNodePath`,
        path: e.fillPath[0],
        paint: {
          type: "solid",
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1
          },
          blendMode: "luminosity"
        }
      }, {
        type: "path",
        path: function ({
          x: e,
          y: t
        }, i) {
          let n = 2 * i;
          return {
            path: `M0 ${-n}H${e + n}V${t + n}H${-n}V0Z`,
            windingRule: "nonzero"
          };
        }({
          x: relativeBoundingBox.width,
          y: relativeBoundingBox.height
        }, e.strokeWidth),
        name: `${a}-strokeMaskNodeBounds`,
        paint: {
          type: "solid",
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          blendMode: "luminosity"
        }
      }]
    },
    children: l
  }]));
  let c = [];
  let u = e.fill.filter(e => !1 !== e.visible).reverse();
  for (let i of e.fillPath || []) if (t.fill) c.push({
    type: "path",
    name: a,
    path: i,
    paint: {
      type: "override",
      color: t.fill
    }
  });else for (let e of u) c.push({
    type: "path",
    name: a,
    path: i,
    paint: e
  });
  let p = e.effect.filter(e => !1 !== e.visible);
  return {
    type: "group",
    name: a,
    transform: rotationOnlyTransform,
    size: {
      x: relativeBoundingBox.width,
      y: relativeBoundingBox.height
    },
    clip: !1,
    children: [...l, ...c],
    effects: p,
    opacity: e.opacity,
    boundingBox: relativeBoundingBox
  };
};
let r = 0;