import ea from 'lodash-es/camelCase';
import $ from 'lodash-es/snakeCase';
import { reportError } from '../905/11';
import { t2 as _$$t, HP, Iq, jO } from '../905/8035';
import { h as _$$h } from '../905/34040';
import { A2, bv } from '../905/49095';
import { kz } from '../905/77776';
import { B as _$$B } from '../905/113996';
import { toMatrix2x3 } from '../905/117560';
import { F as _$$F } from '../905/136718';
import { BL, fw, J3, KH, qn, u_, XQ } from '../905/139004';
import { ServiceCategories as _$$e } from '../905/165054';
import { LE, O$ } from '../905/232489';
import { LI as _$$LI, O$ as _$$O$, lS, QE, Qf, RU } from '../905/235413';
import { a3, bE, DX, Eu, F$, hO, JT, jX, Kp, LI, mJ, nb, nK, oE, oy, pO, vV, ZN, zr } from '../905/246310';
import { B as _$$B2 } from '../905/248554';
import { E as _$$E, u as _$$u } from '../905/363827';
import { deepEqual } from '../905/382883';
import { debugState } from '../905/407919';
import { getLinearGradientPoints, getRadialGradientPoints } from '../905/409381';
import { tK as _$$tK, Hw, hX, KY, nk, vy } from '../905/432392';
import { createPluginInstance } from '../905/472793';
import { S as _$$S } from '../905/491708';
import { PluginApiMetrics } from '../905/545265';
import { pS } from '../905/588985';
import { getFeatureFlags } from '../905/601108';
import { L as _$$L } from '../905/687364';
import { createPluginContext as _$$e2 } from '../905/700654';
import { fl, HN, jg, oQ, V$ } from '../905/707098';
import { DX as _$$DX, Q1 } from '../905/721592';
import { P as _$$P } from '../905/783825';
import { Ey, jN, n_, W4 } from '../905/804867';
import { getSceneGraphInstance, SceneGraph } from '../905/830071';
import { a as _$$a } from '../905/860779';
import { z as _$$z } from '../905/897942';
import { j as _$$j } from '../905/971516';
import { isExportRestricted, isCopyExportAllowed } from '../figma_app/12796';
import { ManifestEditorType } from '../figma_app/155287';
import { PluginPermissions } from '../figma_app/300692';
import { BT, q$ } from '../figma_app/644255';
import { n8 } from '../figma_app/711907';
import { Fullscreen, ColorConversionEnum, ColorSpaceEnum, MeasurementUnit, VariableDataType } from '../figma_app/763686';
import { gH } from '../figma_app/985200';
import d from '../vendor/73823';
import e1 from '../vendor/415955';
import eQ from '../vendor/509185';
import eo from '../vendor/750620';
let n;
let c = d;
function y(e, t) {
  return e.map(e => n8(e.code, e.indent ? e.indent + t : t, e.hint, e.matchingVars));
}
let v = ['offset', 'shadow', 'blur', 'borders', 'size', 'backgrounds', 'padding'];
function I([e, t], [i, n]) {
  return v.indexOf(e) - v.indexOf(i);
}
function E(e, t, i) {
  let n = c()(jO({
    ...e
  }).sort(I), ([e, t]) => t ? y(t, 1) : []);
  let r = n.length > 0 ? [{
    lines: [n8('Modifier'), ...n],
    language: 'kotlin',
    name: 'Modifier',
    matchingVars: i
  }] : [];
  if (t && t.size > 0) {
    let e = [...t].map(e => n8(e, 1));
    let i = [n8('object Variables {'), ...e, n8('}')];
    r.push({
      lines: i,
      language: 'kotlin',
      name: 'Variables'
    });
  }
  return r;
}
function S(e, t) {
  return mJ(e, t, {
    isColor: !0
  });
}
function R(e) {
  return `00${Math.round(255 * e).toString(16).toUpperCase()}`.slice(-2);
}
class N {
  constructor(e, t = 1) {
    this.color = e;
    this.opacity = t;
    if (e.r > 1 || e.g > 1 || e.b > 1) throw new Error(`Expected normalised color values (between 0 and 1) but got (${e.r}, ${e.g}, ${e.b})`);
  }
  get value() {
    return function (e, t = 1) {
      let i = function (e, t = 1) {
        let {
          r: _r,
          g,
          b,
          a: _a = 1
        } = e;
        return `${R(_r)}${R(g)}${R(b)}${R(_a * t)}`;
      }(e, t);
      return `Color(0x${i[6]}${i[7]}${i[0]}${i[1]}${i[2]}${i[3]}${i[4]}${i[5]})`;
    }(this.color, this.opacity);
  }
}
class O {
  constructor(e, t, i, n, r) {
    this.name = e;
    this.wrappedValue = t;
    this.typeName = i;
    this.boundVariable = n;
    this.preferences = r;
  }
  get value() {
    return `Variables.${pO(LE(this.name), this.boundVariable, this.preferences)}`;
  }
  getDefinition() {
    return `val ${pO(LE(this.name), this.boundVariable, this.preferences)}: ${this.typeName} = ${this.wrappedValue}${this.typeName === 'Dp' || this.typeName === 'Sp' ? `.${this.typeName.toLowerCase()}` : ''}`;
  }
}
function D(e, t, i, n, r) {
  let a = e.variable?.value;
  if (a) {
    if (a.codeSyntax && a.codeSyntax.ANDROID) return pO(a.codeSyntax.ANDROID, a, r);
    {
      let e = new O(a.name, t, n, a, r);
      i.add(e.getDefinition());
      return e.value;
    }
  }
}
function L(e, t, i, n, r) {
  if (HN(e)) {
    if (e.codeSyntax && e.codeSyntax.ANDROID) return pO(e.codeSyntax.ANDROID, e, r);
    {
      let a = new O(e.name, t, n, e, r);
      i.add(a.getDefinition());
      return a.value;
    }
  }
}
function F(e, t) {
  let {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight,
    strokeAlign = 'CENTER'
  } = e instanceof _$$a ? {
    strokeAlign: 'OUTSIDE',
    strokeTopWeight: e.strokeWeight,
    strokeBottomWeight: e.strokeWeight,
    strokeLeftWeight: e.strokeWeight,
    strokeRightWeight: e.strokeWeight
  } : e.border;
  let o = {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight
  };
  let l = Iq(o, (e, t) => e.rawValue > t.rawValue);
  let d = o[l];
  let c = !deepEqual(d, strokeTopWeight) || !deepEqual(d, strokeBottomWeight) || !deepEqual(d, strokeLeftWeight) || !deepEqual(d, strokeRightWeight);
  let p = M(e, t);
  let m = e instanceof _$$a ? e.strokes : e.border.strokes;
  let h = new Set();
  let g = hX(d.rawValue, t);
  let f = D(d, g, h, 'Dp', t);
  let A = `${g}.dp`;
  let y = f ? void 0 : Kp({
    value: A,
    node: e,
    field: l,
    matchIndex: 4,
    preferences: t
  });
  let v = f ?? y?.value ?? A;
  let {
    borderLines = [],
    constants = []
  } = F$(m).reduce((i, {
    paint: n,
    index: r,
    hint: a
  }) => {
    let {
      color,
      opacity
    } = n;
    let {
      borderLines: _borderLines = [],
      constants: _constants = []
    } = function (e, t, i, n, r, a, s, o, l, d) {
      let c = S(r, n);
      let p = n.value;
      let m = new Set();
      let h = L(r, p, m, 'Color', d);
      h && (p = h);
      let g = h ? void 0 : Kp({
        value: p,
        node: s,
        field: 'strokes',
        matchIndex: 5,
        arrayIndex: l,
        preferences: d
      });
      p = g?.value ?? p;
      let f = [];
      let _ = `.border(width = ${t}`;
      _ = _.concat(`, color = ${p}`);
      e.code && (_ = _.concat(`, shape = ${e.code})`), e.constants.forEach(e => m.add(e)));
      _ = _.concat(')');
      f.push(n8(_, 0, i ? A2.ComposeSeparateBorderWidth : a || c, g?.matchingVars));
      return {
        borderLines: f,
        constants: Array.from(m)
      };
    }(p, v, c, new N(color, opacity), hO(n, r, 'strokes', e), a, e, 0, r, t);
    return {
      borderLines: [...i.borderLines, ..._borderLines.map(e => ({
        ...e,
        matchingVars: a3([e.matchingVars, y?.matchingVars, p.matchingVars])
      }))],
      constants: [...i.constants, ..._constants]
    };
  }, {
    borderLines: [],
    constants: []
  });
  borderLines.push(...function (e, t) {
    switch (e) {
      case 'CENTER':
        return [n8(`.padding(${t / 2}.dp)`)];
      case 'INSIDE':
        return [];
      case 'OUTSIDE':
        return [n8(`.padding(${t}.dp)`)];
    }
  }(strokeAlign, g));
  return {
    properties: {
      borders: borderLines
    },
    constants: new Set([...constants, ...Array.from(h)])
  };
}
function M(e, t) {
  let i = new Set();
  if (e instanceof _$$a) {
    return {
      code: '',
      constants: i
    };
  }
  let {
    bottomRightRadius = 0,
    topLeftRadius = 0,
    topRightRadius = 0,
    bottomLeftRadius = 0
  } = e.border;
  let o = e.getVariableValue('bottomRightRadius');
  let l = e.getVariableValue('topLeftRadius');
  let d = e.getVariableValue('topRightRadius');
  let c = e.getVariableValue('bottomLeftRadius');
  let u = [bottomLeftRadius, bottomRightRadius, topLeftRadius, topRightRadius];
  let p = [c, o, l, d];
  if (!(!(u.every(e => e === u[0]) && u[0] === 0) || p.some(e => HN(e)))) {
    return {
      code: '',
      constants: i
    };
  }
  let m = (i, n, r, a) => {
    let s = hX(i, t);
    if (HN(n)) {
      if (n.codeSyntax && n.codeSyntax.ANDROID) {
        return {
          value: n.codeSyntax.ANDROID
        };
      }
      {
        let e = new O(n.name, s, 'Dp', n, t);
        return {
          value: e.value,
          constant: e
        };
      }
    }
    let o = `${s}.dp`;
    let l = Kp({
      value: o,
      node: e,
      field: r,
      matchIndex: a,
      preferences: t
    });
    return {
      value: l?.value ?? o,
      suggestion: l
    };
  };
  let h = u.map((e, t) => HN(p[t]) ? p[t] : e);
  let g = (e, t) => typeof e == 'number' && typeof t == 'number' ? e === t : typeof e != 'number' && typeof t != 'number' && !!(HN(e) && HN(t)) && e.name === t.name;
  if (!h.every(e => g(e, h[0]))) {
    let e = m(topLeftRadius, l, 'topLeftRadius', 0);
    let t = m(topRightRadius, d, 'topRightRadius', 1);
    let u = m(bottomLeftRadius, c, 'bottomLeftRadius', 3);
    let p = m(bottomRightRadius, o, 'bottomRightRadius', 2);
    e.constant && i.add(e.constant.getDefinition());
    t.constant && i.add(t.constant.getDefinition());
    u.constant && i.add(u.constant.getDefinition());
    p.constant && i.add(p.constant.getDefinition());
    return {
      code: `RoundedCornerShape(topStart = ${e.value}, topEnd = ${t.value}, bottomStart = ${u.value}, bottomEnd = ${p.value})`,
      constants: i,
      matchingVars: a3([e.suggestion?.matchingVars, t.suggestion?.matchingVars, u.suggestion?.matchingVars, p.suggestion?.matchingVars])
    };
  }
  let f = m(topLeftRadius, l, 'topLeftRadius', 0);
  f.constant && i.add(f.constant.getDefinition());
  return {
    code: `RoundedCornerShape(size = ${f.value})`,
    constants: i,
    matchingVars: f.suggestion?.matchingVars
  };
}
function j(e, t) {
  let {
    backgrounds = [],
    constants = []
  } = oE(e.fills).reduce((i, {
    paint: n,
    index: r
  }) => {
    let {
      background,
      constants: _constants2 = []
    } = function (e, t, i, n, r, a, s) {
      if (t.type !== 'SOLID') {
        return {
          background: []
        };
      }
      {
        let r;
        let o = new N(t.color, t.opacity);
        let l = hO(t, i, 'fills', e);
        let d = S(l, o);
        let c = o.value;
        let p = new Set();
        let m = L(l, c, p, 'Color', s);
        m && (c = m);
        let h = m ? void 0 : Kp({
          value: c,
          node: e,
          field: 'fills',
          matchIndex: 4,
          arrayIndex: a,
          preferences: s
        });
        c = h?.value ?? c;
        n.code ? (n.constants.forEach(e => p.add(e)), r = [n8(`.background(color = ${c}, shape = ${n.code})`, 0, d, a3([n.matchingVars, h?.matchingVars]))]) : r = [n8(`.background(color = ${c})`, 0, d, h?.matchingVars)];
        return {
          background: r,
          constants: Array.from(p)
        };
      }
    }(e, n, r, M(e, t), 0, r, t);
    return {
      backgrounds: [...i.backgrounds, ...background],
      constants: [...i.constants, ..._constants2]
    };
  }, {
    backgrounds: [],
    constants: []
  });
  return {
    properties: {
      backgrounds
    },
    constants: new Set(constants)
  };
}
function U(e, t) {
  let {
    effects
  } = e;
  let n = {};
  let r = new Set();
  effects.filter(e => e.visible).forEach(i => {
    switch (i.type) {
      case 'DROP_SHADOW':
        n.shadow || (n.shadow = []);
        n.shadow.push(...function (e, t, i, n) {
          let r = new N(e.color);
          let a = L(bE(e, t), e.radius, i, 'Dp', n) ?? `${e.radius}.dp`;
          let s = r.value;
          let o = L(jX(e, 'color', t), s, i, 'Color', n) ?? s;
          return [n8(`.shadow(elevation = ${a}, spotColor = ${o}, ambientColor = ${o})`, 0, A2.ComposeShadowIncompatibility)];
        }(i, e, r, t));
        break;
      case 'LAYER_BLUR':
        n.blur || (n.blur = []);
        n.blur.push(...function (e, t, i, n) {
          let r = L(bE(e, t), e.radius, i, 'Dp', n) ?? `${e.radius}.dp`;
          return [n8(`.blur(radius = ${r})`, 0, A2.ComposeBlurTip)];
        }(i, e, r, t));
    }
  });
  return {
    properties: n,
    constants: r
  };
}
function B(e, t) {
  let i = {};
  let n = new Set();
  if (e.opacity && e.opacity !== 1) {
    let r = nk(e.opacity, 4);
    let a = `${r}f`;
    let {
      variable,
      hint
    } = zr(e, 'opacity', r);
    let l = L(variable, r, n, '', t);
    l && (a = l);
    let d = l ? void 0 : Kp({
      value: a,
      node: e,
      field: 'opacity',
      preferences: t
    });
    a = d?.value ?? a;
    i.opacity = [n8(`.alpha(${a})`, 0, hint, d?.matchingVars)];
  }
  return {
    properties: i,
    constants: n
  };
}
function V(e, t) {
  let i = {};
  if (e.layout.shouldUseAbsolutePosition()) {
    let n = hX(e.layout.relativeBounds().bounds.x, t);
    let r = hX(e.layout.relativeBounds().bounds.y, t);
    i.offset = [n8(`.offset(x = ${n}.dp, y = ${r}.dp)`)];
  }
  let n = new Set();
  let r = hX(e.layout.width, t);
  let a = `${r}.dp`;
  let {
    variable,
    hint
  } = zr(e, 'width', a);
  let l = L(variable, r, n, 'Dp', t);
  l && (a = l);
  let d = l ? void 0 : Kp({
    value: a,
    node: e,
    field: 'width',
    preferences: t
  });
  a = d ? d.value : a;
  let c = hX(e.layout.height, t);
  let p = `${c}.dp`;
  let {
    variable: _variable,
    hint: _hint
  } = zr(e, 'height', p);
  let g = L(_variable, c, n, 'Dp', t);
  g && (p = g);
  let f = g ? void 0 : Kp({
    value: p,
    node: e,
    field: 'height',
    preferences: t
  });
  p = f ? f.value : p;
  let _ = n8(`.width(${a})`, 0, hint, d?.matchingVars);
  let A = n8(`.height(${p})`, 0, _hint, f?.matchingVars);
  i.size = [_, A];
  return {
    properties: i,
    constants: n
  };
}
function G(e, t, i, n, r) {
  let a = `${hX(e, n)}.dp`;
  let s = L(i.getVariableValue(t), a, r, 'Dp', n);
  return s ? {
    paddingScaled: s
  } : {
    paddingScaled: a
  };
}
function H(e, t) {
  if (e instanceof _$$B || e instanceof J3) return [];
  let i = [];
  Object.keys(e.inferredVariables).forEach(n => {
    if (!function (e, t, i) {
      switch (e) {
        case 'fills':
          return !!t.backgrounds && t.backgrounds.length > 0;
        case 'height':
        case 'width':
          return !!t.size && t.size.length > 0;
        case 'characters':
        case 'itemSpacing':
        case 'minWidth':
        case 'maxWidth':
        case 'minHeight':
        case 'maxHeight':
        case 'counterAxisSpacing':
          break;
        case 'paddingLeft':
        case 'paddingRight':
        case 'paddingTop':
        case 'paddingBottom':
          return !!t.padding && t.padding.length > 0;
        case 'topLeftRadius':
          return !!t.backgrounds && 'border' in i && !!i.border.topLeftRadius;
        case 'topRightRadius':
          return !!t.backgrounds && 'border' in i && !!i.border.topRightRadius;
        case 'bottomLeftRadius':
          return !!t.backgrounds && 'border' in i && !!i.border.bottomLeftRadius;
        case 'bottomRightRadius':
          return !!t.backgrounds && 'border' in i && !!i.border.bottomRightRadius;
        case 'strokes':
        case 'strokeWeight':
        case 'strokeTopWeight':
        case 'strokeRightWeight':
        case 'strokeBottomWeight':
        case 'strokeLeftWeight':
          return !!t.borders && t.borders.length > 0;
        case 'opacity':
          return !!t.opacity && t.opacity.length > 0;
        case 'fontFamily':
          return !!t.fontFamily;
        case 'fontSize':
          return !!t.fontSize;
        case 'lineHeight':
          return !!t.lineHeight;
      }
      return !1;
    }(n, t, e)) {
      return;
    }
    if (n === 'fills' || n === 'strokes') {
      let t = e.inferredVariables[n];
      if (!t) return;
      return t.forEach((t, a) => {
        let s = Eu(n, e, a);
        s && s.type === 'SOLID' && t && t.length !== 0 && i.push({
          ids: t.map(e => e.id),
          rawValue: {
            type: VariableDataType.COLOR,
            value: {
              ...s.color,
              a: s.opacity ?? 1
            }
          }
        });
      });
    }
    let a = e.inferredVariables?.[n];
    if (!a) return;
    if (n === 'fontFamily') {
      if (!KH(e)) return;
      i.push({
        ids: a.map(e => e.id),
        rawValue: {
          type: VariableDataType.STRING,
          value: e.textSegments[0].fontName.family.rawValue
        }
      });
    }
    let s = LI(n, e);
    s && i.push({
      ids: a.map(e => e.id),
      rawValue: {
        type: VariableDataType.FLOAT,
        value: s
      }
    });
  });
  return i;
}
function W(e) {
  let t = [];
  if (e instanceof _$$a) {
    t.push(...K(e.name, null));
  } else {
    let {
      backgrounds = []
    } = e.fills.filter(({
      visible: e = !0,
      type: t = 'IMAGE'
    }) => e && t === 'IMAGE').reduce((t, i) => {
      let n = K(e.name, i.scaleMode);
      return {
        backgrounds: [...t.backgrounds, ...n]
      };
    }, {
      backgrounds: []
    });
    t.push(...backgrounds);
  }
  return {
    name: 'Image',
    language: 'kotlin',
    lines: t
  };
}
function K(e, t) {
  let i = [n8('Image('), n8(`painter = painterResource(id = R.drawable.${LE(e)}),`, 1), n8('contentDescription = "image description",', 1)];
  switch (t) {
    case 'FIT':
      i.push(n8('contentScale = ContentScale.Fit', 1));
      break;
    case 'CROP':
      i.push(n8('contentScale = ContentScale.Crop', 1));
      break;
    case 'FILL':
      i.push(n8('contentScale = ContentScale.FillBounds', 1));
      break;
    default:
      i.push(n8('contentScale = ContentScale.None', 1));
  }
  i.push(n8(')'));
  return i;
}
async function Y(e, t) {
  let {
    properties,
    constants
  } = V(e, t);
  let {
    properties: _properties,
    constants: _constants3
  } = B(e, t);
  let {
    properties: _properties2,
    constants: _constants4
  } = j(e, t);
  let {
    properties: _properties3,
    constants: _constants5
  } = F(e, t);
  let {
    properties: _properties4,
    constants: _constants6
  } = U(e, t);
  let p = {
    ..._properties4,
    ...properties,
    ..._properties,
    ..._properties2,
    ..._properties3
  };
  let m = H(e, p);
  return [...E(p, new Set([..._constants4, ..._constants5, ...constants, ..._constants3, ..._constants6]), m), W(e)];
}
async function q(e, t) {
  let {
    properties,
    constants
  } = V(e, t);
  let {
    properties: _properties5,
    constants: _constants7
  } = B(e, t);
  let {
    properties: _properties6,
    constants: _constants8
  } = j(e, t);
  let {
    properties: _properties7,
    constants: _constants9
  } = F(e, t);
  let {
    properties: _properties8,
    constants: _constants0
  } = U(e, t);
  let {
    properties: _properties9,
    constants: _constants1
  } = function (e, t) {
    let i;
    let n;
    let r;
    let a;
    if (!e.isAutoLayout()) {
      return {
        properties: {},
        constants: new Set()
      };
    }
    let {
      paddingLeft,
      paddingBottom,
      paddingRight,
      paddingTop
    } = e.autoLayout;
    let c = e.getVariableValue('paddingLeft');
    let p = e.getVariableValue('paddingTop');
    let m = e.getVariableValue('paddingRight');
    let h = e.getVariableValue('paddingBottom');
    if (paddingLeft === 0 && paddingTop === 0 && paddingRight === 0 && paddingBottom === 0 && !c && !p && !m && !h) {
      return {
        properties: {},
        constants: new Set()
      };
    }
    let g = new Set();
    let f = '.padding(';
    if (paddingLeft !== 0 || c) {
      let {
        paddingScaled
      } = G(paddingLeft, 'paddingLeft', e, t, g);
      i = HN(c) ? void 0 : Kp({
        value: paddingScaled,
        node: e,
        field: 'paddingLeft',
        matchIndex: 3,
        preferences: t
      });
      n = i?.value ?? paddingScaled;
      f = f.concat(`start = ${paddingScaled}, `);
    }
    if (paddingTop !== 0 || p) {
      let {
        paddingScaled
      } = G(paddingTop, 'paddingTop', e, t, g);
      n = HN(p) ? void 0 : Kp({
        value: paddingScaled,
        node: e,
        field: 'paddingTop',
        matchIndex: 0,
        preferences: t
      });
      i = n?.value ?? paddingScaled;
      f = f.concat(`top = ${paddingScaled}, `);
    }
    if (paddingRight !== 0 || m) {
      let {
        paddingScaled
      } = G(paddingRight, 'paddingRight', e, t, g);
      r = HN(m) ? void 0 : Kp({
        value: paddingScaled,
        node: e,
        field: 'paddingRight',
        matchIndex: 1,
        preferences: t
      });
      i = r?.value ?? paddingScaled;
      f = f.concat(`end = ${paddingScaled}, `);
    }
    if (paddingBottom !== 0 || h) {
      let {
        paddingScaled
      } = G(paddingBottom, 'paddingBottom', e, t, g);
      a = HN(h) ? void 0 : Kp({
        value: paddingScaled,
        node: e,
        field: 'paddingBottom',
        matchIndex: 2,
        preferences: t
      });
      i = a?.value ?? paddingScaled;
      f = f.concat(`bottom = ${paddingScaled}, `);
    }
    f = (f = f.slice(0, -2)).concat(')');
    return {
      properties: {
        padding: [n8(f, 0, void 0, a3([i?.matchingVars, n?.matchingVars, r?.matchingVars, a?.matchingVars]))]
      },
      constants: g
    };
  }(e, t);
  let f = {
    ..._properties8,
    ...(vy(t) ? {} : {
      ...properties,
      ..._properties5
    }),
    ...(KY(t) ? {} : {
      ..._properties6,
      ..._properties7
    }),
    ...(vy(t) ? {} : _properties9)
  };
  let _ = [];
  let A = W(e);
  let y = new Set();
  let b = [];
  if (e.isAutoLayout()) {
    let {
      primaryAxisAlignItems = 'MIN',
      counterAxisAlignItems = 'MIN',
      layoutMode,
      itemSpacing
    } = e.autoLayout;
    let o = `${itemSpacing}.dp`;
    let {
      variable,
      hint
    } = zr(e, 'itemSpacing', o);
    let c = L(variable, itemSpacing, y, 'Dp', t);
    c && (o = c);
    let p = c ? void 0 : Kp({
      value: o,
      node: e,
      field: 'itemSpacing',
      preferences: t
    });
    o = p ? p.value : o;
    e.inferredVariables.itemSpacing && itemSpacing && b.push({
      ids: e.inferredVariables.itemSpacing.map(e => e.id),
      rawValue: {
        type: VariableDataType.FLOAT,
        value: itemSpacing
      }
    });
    layoutMode === 'HORIZONTAL' ? _.push(n8('Row('), n8(`horizontalArrangement = ${function (e, t) {
      switch (e) {
        case 'CENTER':
          return `Arrangement.spacedBy(${t}, Alignment.CenterHorizontally)`;
        case 'MAX':
          return `Arrangement.spacedBy(${t}, Alignment.End)`;
        case 'SPACE_BETWEEN':
          return 'Arrangement.SpaceBetween';
        default:
          return `Arrangement.spacedBy(${t}, Alignment.Start)`;
      }
    }(primaryAxisAlignItems, o)},`, 1, hint, p?.matchingVars), n8(`verticalAlignment = ${function (e) {
      switch (e) {
        case 'CENTER':
          return 'Alignment.CenterVertically';
        case 'MAX':
          return 'Alignment.Bottom';
        default:
          return 'Alignment.Top';
      }
    }(counterAxisAlignItems)},`, 1), n8(') {'), n8('// Child views.', 1), n8('}')) : _.push(n8('Column('), n8(`verticalArrangement = ${function (e, t) {
      switch (e) {
        case 'CENTER':
          return `Arrangement.spacedBy(${t}, Alignment.CenterVertically)`;
        case 'MAX':
          return `Arrangement.spacedBy(${t}, Alignment.Bottom)`;
        case 'SPACE_BETWEEN':
          return 'Arrangement.SpaceBetween';
        default:
          return `Arrangement.spacedBy(${t}, Alignment.Top)`;
      }
    }(primaryAxisAlignItems, o)},`, 1, hint, p?.matchingVars), n8(`horizontalAlignment = ${function (e) {
      switch (e) {
        case 'CENTER':
          return 'Alignment.CenterHorizontally';
        case 'MAX':
          return 'Alignment.End';
        default:
          return 'Alignment.Start';
      }
    }(counterAxisAlignItems)},`, 1), n8(') {'), n8('// Child views.', 1), n8('}'));
  }
  let v = H(e, f);
  return [...E(f, new Set([..._constants8, ..._constants9, ..._constants1, ...constants, ..._constants7, ...y, ..._constants0]), v), {
    name: 'Layout',
    language: 'kotlin',
    lines: _,
    matchingVars: b
  }, A];
}
let Z = $;
let X = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
let Q = {
  thin: 'thin',
  extralight: 'ultralight',
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold',
  extrabold: 'heavy',
  black: 'black'
};
function J(e, t) {
  return t?.rawValue !== void 0 ? {
    fontWeight: t,
    italic: e.includes('Italic')
  } : {
    fontWeight: {
      rawValue: X[e.replace(/italic/gi, '').replace(/ /g, '').toLocaleLowerCase()] ?? 400
    },
    italic: e.includes('Italic')
  };
}
function ee(e) {
  return `"${e.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
}
function et(e, t) {
  switch (e.unit) {
    case 'PIXELS':
      return e.value;
    case 'PERCENT':
      return t * e.value / 100;
  }
}
async function ei(e, t) {
  let {
    properties,
    constants
  } = V(e, t);
  let {
    properties: _properties0,
    constants: _constants10
  } = B(e, t);
  let s = [];
  let o = new Set();
  let l = {};
  let d = e.textSegments[0];
  let {
    fontName: {
      family,
      style
    },
    fontSize,
    fills,
    lineHeight,
    fontWeight
  } = d;
  if (s.push(n8('Text(')), s.push(n8(`text = ${ee(e.characters)},`, 1)), oQ(e.textStyle) && (s.push(n8('', 1)), s.push(n8(`// ${e.textStyle.name}`, 1))), s.push(n8('style = TextStyle(', 1)), fontSize) {
    let _;
    let A;
    let i = hX(fontSize.rawValue, t, 2);
    let n = D(fontSize, i, o, 'Sp', t);
    let r = n ?? `${i}.sp`;
    let a = n ? void 0 : Kp({
      value: r,
      node: e,
      field: 'fontSize',
      preferences: t
    });
    r = a?.value ?? r;
    let d = n8(`fontSize = ${r},`, 2, void 0, a?.matchingVars);
    s.push(d);
    l.fontSize = [d];
    _ = lineHeight.rawValue;
    A = fontSize.rawValue;
    let c = _.unit === 'PIXELS' ? _.value : _.unit !== 'AUTO' ? _.value / 100 * A : void 0;
    if (c) {
      let i = hX(c, t, 2);
      let n = D(lineHeight, i, o, 'Sp', t);
      let r = n ?? `${i}.sp`;
      let a = n ? void 0 : Kp({
        value: r,
        node: e,
        field: 'lineHeight',
        preferences: t
      });
      r = a?.value ?? r;
      let d = n8(`lineHeight = ${r},`, 2, void 0, a?.matchingVars);
      s.push(d);
      l.lineHeight = [d];
    }
  }
  if (family) {
    let e = n8(`fontFamily = FontFamily(Font(R.font.${Z()(family.rawValue)})),`, 2);
    s.push(e);
    l.fontFamily = [e];
  }
  if (style) {
    let {
      fontWeight,
      italic
    } = J(style, fontWeight);
    let n = fontWeight.rawValue;
    let r = D(d.fontWeight, n, o, 'Int', t) ?? n;
    s.push(n8(`fontWeight = FontWeight(${r}),`, 2));
    italic && s.push(n8('fontStyle = FontStyle.Italic,', 2));
  }
  if (fills && !Hw(t)) {
    let i = F$(d.fills);
    if (i.length > 0) {
      let {
        paint,
        index,
        hint
      } = i[0];
      let l = new N(paint.color, paint.opacity);
      let d = hO(paint, index, 'fills', e);
      let c = hint || (i.length > 1 ? A2.SinglePaint : mJ(d, l, {
        isColor: !0
      }));
      let p = l.value;
      let m = L(d, p, o, 'Color', t);
      m && (p = m);
      let h = m ? void 0 : Kp({
        value: p,
        node: e,
        field: 'fills',
        arrayIndex: index,
        preferences: t
      });
      p = h?.value ?? p;
      s.push(n8(`color = ${p},`, 2, c, h?.matchingVars));
    }
  }
  if (e.textAlignHorizontal && e.textAlignHorizontal !== 'LEFT') {
    switch (e.textAlignHorizontal) {
      case 'RIGHT':
        s.push(n8('textAlign = TextAlign.Right,', 2));
        break;
      case 'CENTER':
        s.push(n8('textAlign = TextAlign.Center,', 2));
        break;
      case 'JUSTIFIED':
        s.push(n8('textAlign = TextAlign.Justify,', 2));
    }
  }
  if (d.letterSpacing && d.letterSpacing.rawValue.value > 0) {
    let e = et(d.letterSpacing.rawValue, d.fontSize.rawValue);
    let i = hX(e, t, 2);
    let n = D(d.letterSpacing, i, o, 'Sp', t) ?? `${i}.sp`;
    s.push(n8(`letterSpacing = ${n},`, 2));
  }
  if (d.textDecoration) {
    switch (d.textDecoration) {
      case 'STRIKETHROUGH':
        s.push(n8('textDecoration = TextDecoration.LineThrough,', 2));
        break;
      case 'UNDERLINE':
        s.push(n8('textDecoration = TextDecoration.Underline,', 2));
    }
  }
  s.push(n8(')', 1));
  s.push(n8(')'));
  let y = Hw(t) ? {} : {
    ...properties,
    ..._properties0
  };
  let b = H(e, y);
  let v = H(e, l);
  return [...E(y, new Set(Hw(t) ? o : [...constants, ..._constants10, ...o]), b), {
    lines: s,
    language: 'kotlin',
    name: 'Text',
    matchingVars: v
  }];
}
async function en(e, t) {
  return e instanceof _$$a ? Y(e, t) : e instanceof _$$L ? q(e, t) : e instanceof _$$z ? ei(e, t) : e instanceof _$$j || e instanceof _$$B2 || e instanceof _$$F ? q(e, t) : e instanceof _$$B ? [] : [{
    lines: [n8('Not implemented.')],
    language: 'kotlin',
    name: 'Modifier'
  }];
}
async function er(e, t) {
  return {
    sections: await en(e, t)
  };
}
let es = ea;
let el = eo;
let ed = {
  PASS_THROUGH: 'pass-through',
  NORMAL: 'normal',
  DARKEN: 'darken',
  MULTIPLY: 'multiply',
  LINEAR_BURN: 'plus-darker',
  COLOR_BURN: 'color-burn',
  LIGHTEN: 'lighten',
  SCREEN: 'screen',
  LINEAR_DODGE: 'plus-lighter',
  COLOR_DODGE: 'color-dodge',
  OVERLAY: 'overlay',
  SOFT_LIGHT: 'soft-light',
  HARD_LIGHT: 'hard-light',
  DIFFERENCE: 'difference',
  EXCLUSION: 'exclusion',
  HUE: 'hue',
  SATURATION: 'saturation',
  COLOR: 'color',
  LUMINOSITY: 'luminosity'
};
let ec = new Set(['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter', 'plus-darker']);
class eu {
  constructor(e) {
    this.blendModes = e;
  }
  static fromFigmaBlendMode(e) {
    return new eu(e.map(e => ec.has(ed[e]) ? ed[e] : 'normal'));
  }
  get value() {
    return this.blendModes.some(e => e !== 'normal') ? this.blendModes.join(', ') : 'normal';
  }
  equals(e) {
    return this.value === e.value;
  }
  contains(e) {
    return this.blendModes.includes(e);
  }
}
class em {
  constructor(e) {
    this.filterObjects = e;
  }
  static concat(e, t) {
    return new em([...(e?.filterObjects ?? []), ...(t?.filterObjects ?? [])]);
  }
  get value() {
    return this.filterObjects.length === 1 ? this.filterObjects[0].value : this.filterObjects.map(e => e.value).join(' ');
  }
  equals(e) {
    return this.value === e.value;
  }
}
class eh {
  constructor(e, t) {
    this.rawValue = e;
    this.radius = t;
  }
  get value() {
    return this.radius instanceof RU ? `blur(${this.rawValue / 2}px)` : `blur(calc(${this.radius.value} / 2))`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class eg {
  constructor(e) {
    this.params = e;
  }
  get value() {
    return `drop-shadow(${this.params.offsetX.value} ${this.params.offsetY.value} ${this.params.radius.value} ${this.params.color.value})`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class ef {
  constructor(e, t) {
    this.x = e;
    this.y = t;
  }
  get value() {
    return this.x.equals(this.y) ? `${this.x.value}` : `${this.x.value} ${this.y.value}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class e_ {
  constructor(e, t, i, n) {
    this.top = e;
    this.right = t;
    this.bottom = i;
    this.left = n;
  }
  get value() {
    return this.top.equals(this.right) && this.right.equals(this.bottom) && this.bottom.equals(this.left) ? `${this.top.value}` : this.top.equals(this.bottom) && this.left.equals(this.right) ? `${this.top.value} ${this.left.value}` : `${this.top.value} ${this.right.value} ${this.bottom.value} ${this.left.value}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class eA {
  constructor(e, t, i, n) {
    this.top = new RU(e);
    this.right = new RU(t);
    this.bottom = new RU(i);
    this.left = new RU(n);
  }
  get value() {
    return this.top.equals(this.right) && this.right.equals(this.bottom) && this.bottom.equals(this.left) ? `${this.top.value}` : this.top.equals(this.bottom) && this.left.equals(this.right) ? `${this.top.value} ${this.left.value}` : `${this.top.value} ${this.right.value} ${this.bottom.value} ${this.left.value}`;
  }
  equals(e) {
    return this.value === e.value;
  }
  get singleValue() {
    if (this.top.equals(this.right) && this.right.equals(this.bottom) && this.bottom.equals(this.left)) return this.top;
  }
}
var ey = (e => (e[e.Normal = 0] = 'Normal', e[e.Inset = 1] = 'Inset', e))(ey || {});
class eb {
  constructor(e) {
    this.shadowObjects = e;
  }
  static concat(e, t) {
    return new eb([...(t?.shadowObjects ?? []), ...(e?.shadowObjects ?? [])]);
  }
  get value() {
    return this.shadowObjects.map(e => `${e.offsetX.value} ${e.offsetY.value} ${e.blur.value} ${e.spread.value} ${e.color.value}${e.type === 1 ? ' inset' : ''}`).join(', ');
  }
  equals(e) {
    return this.value === e.value;
  }
}
class ev {
  constructor(e) {
    this.shadowObjects = e;
  }
  static concat(e, t) {
    return new ev([...(t?.shadowObjects ?? []), ...(e?.shadowObjects ?? [])]);
  }
  get value() {
    return this.shadowObjects.map(e => `${e.offsetX.value} ${e.offsetY.value} ${e.blur.value} ${e.color.value}`).join(', ');
  }
  equals(e) {
    return this.value === e.value;
  }
}
class eE {
  constructor(e) {
    this.rotationDeg = e;
  }
  get value() {
    return `rotate(${_$$LI(this.rotationDeg)}deg)`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class ex {
  constructor(e) {
    this.transforms = e;
  }
  static concat(e, t) {
    return new ex([...(e?.transforms ?? []), ...(t?.transforms ?? [])]);
  }
  get value() {
    return this.transforms.map(e => e.value).join(' ');
  }
  equals(e) {
    return this.value === e.value;
  }
}
let eS = {
  'width': new RU('auto'),
  'height': new RU('auto'),
  'min-height': new RU('auto'),
  'min-width': new RU('auto'),
  'max-height': new RU('auto'),
  'max-width': new RU('auto'),
  'position': new _$$O$('static'),
  'flex-grow': new _$$O$(0),
  'flex-shrink': new _$$O$(1),
  'flex-basis': new _$$O$('auto'),
  'box-sizing': new _$$O$('border-box'),
  'align-self': new _$$O$('center'),
  'aspect-ratio': new _$$O$('auto'),
  'padding': new eA(0, 0, 0, 0),
  'flex-direction': new _$$O$('row'),
  'justify-content': new _$$O$('flex-start'),
  'align-items': new _$$O$('stretch'),
  'align-content': new _$$O$('stretch'),
  'gap': new RU(0),
  'row-gap': new RU(0),
  'column-gap': new RU(0),
  'left': new RU('auto'),
  'right': new RU('auto'),
  'top': new RU('auto'),
  'bottom': new RU('auto'),
  'word-break': new Qf(),
  'pointer-events': new _$$O$('auto'),
  'inset': new _$$O$('auto'),
  'border-radius': new eA(0, 0, 0, 0),
  'margin-bottom': new RU(0),
  'text-indent': new RU(0),
  'font-size': new RU(0),
  'letter-spacing': new RU(0),
  'text-transform': new _$$O$('none'),
  'text-align': new _$$O$('left'),
  'text-overflow': new _$$O$('clip'),
  'white-space': new _$$O$('normal'),
  'font-variant': new Qf(),
  'text-decoration-line': new _$$O$('none'),
  'background-blend-mode': new eu(['normal']),
  'overflow': new _$$O$('visible'),
  'opacity': new lS(1),
  'flex': new _$$O$('0 1 auto'),
  'flex-wrap': new _$$O$('nowrap'),
  'mix-blend-mode': new eu(['normal'])
};
let ew = ['box-sizing', 'display', 'position', 'left', 'right', 'top', 'bottom', 'inset', 'width', 'height', 'min-width', 'max-width', 'min-height', 'max-height', 'overflow', 'transform', '-webkit-box-orient', '-webkit-line-clamp', 'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'border-radius', 'margin-bottom', 'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-width', 'border-color', 'border-style', 'box-shadow', 'opacity', 'background', 'background-clip', '-webkit-background-clip', '-webkit-text-fill-color', 'background-blend-mode', 'mix-blend-mode', 'flex-direction', 'justify-content', 'align-items', 'align-content', 'gap', 'row-gap', 'column-gap', 'flex', 'flex-grow', 'flex-shrink', 'flex-basis', 'align-self', 'flex-wrap', 'aspect-ratio', 'color', 'font-family', 'font-size', 'font-style', 'font-weight', 'line-height', 'font-variant', 'letter-spacing', 'text-align', 'text-decoration', 'text-decoration-line', 'text-decoration-style', 'text-decoration-skip-ink', 'text-decoration-color', 'text-decoration-thickness', 'text-underline-offset', 'text-underline-position', 'text-indent', 'text-transform', 'text-shadow', 'word-break', 'leading-trim', 'text-edge', 'font-kerning', 'font-variant-numeric', 'font-feature-settings', 'text-overflow', 'white-space', 'filter', 'backdrop-filter', 'pointer-events', 'content', 'grid-template-rows', 'grid-template-columns', 'grid-row', 'grid-column', 'justify-self'];
let eC = {
  'box-shadow': eb.concat,
  'text-shadow': eb.concat,
  'filter': em.concat,
  'backdrop-filter': em.concat,
  'transform': ex.concat
};
function eT(e) {
  return e instanceof _$$u ? e.raw : e;
}
class ek {
  constructor(e = {}) {
    this.styles = e;
  }
  static From(e) {
    let t = new ek();
    if (e) {
      for (let [i, n] of e) t.set(i, n);
    }
    return t;
  }
  get size() {
    return Object.keys(this.styles).length;
  }
  get(e) {
    return this.styles[e];
  }
  has(e) {
    return void 0 !== this.styles[e];
  }
  set(e, t, i = !1) {
    let n = this.get(e);
    if (_$$t(n) && !i) throw new Error(`Property "${e}" has already been set, old value: "${n?.value}", new value: "${t?.value}"`);
    this.styles[e] = t;
  }
  mergeValue(e, t) {
    let i = this.get(e);
    let n = eC[e];
    _$$t(i) ? this.styles[e] = n(i, t) : this.styles[e] = t;
  }
  merge(e, t = !1) {
    for (let i of e.keys()) _$$t(eC[i]) ? this.mergeValue(i, e.get(i)) : this.set(i, e.get(i), t);
  }
  getStyles() {
    let e = {};
    for (let [t, i] of jO({
      ...this.styles
    })) e[t] = i?.value;
    return {
      ...e
    };
  }
  isEmpty() {
    return this.size === 0;
  }
  keys() {
    return HP(this.styles);
  }
  difference(e) {
    let t = new ek();
    for (let i of this.keys()) {
      let n = this.get(i);
      let r = e.get(i);
      n && (r && n.equals(r) || t.set(i, n));
    }
    return t;
  }
  filterDefaultValues() {
    let e = new ek();
    for (let t of this.keys()) this.hasDefaultValue(t) || e.set(t, this.get(t));
    return e;
  }
  hasDefaultValue(e) {
    let t = eT(this.get(e));
    let i = eT(eS[e]);
    return !!t && _$$t(i) && t.equals(i);
  }
  clone() {
    let e = new ek();
    for (let t of this.keys()) e.set(t, this.get(t));
    return e;
  }
  delete(e) {
    delete this.styles[e];
  }
}
class eL {
  constructor(e = 'cover', t = '50%', i = 'no-repeat') {
    this.backgroundSize = e;
    this.backgroundPosition = t;
    this.backgroundRepeat = i;
    this.background = 'url(<path-to-image>) lightgray';
  }
  static withFillScaleMode() {
    return new eL('cover');
  }
  static withFitScaleMode() {
    return new eL('contain');
  }
  static withTileScaleMode(e = 1) {
    let t = {
      width: 100,
      height: 100
    };
    let i = t ? `${t.width * e}px` : `${Math.round(100 * e)}%`;
    let n = t ? `${t.height * e}px` : `${Math.round(100 * e)}%`;
    return new eL(`${i} ${n}`, '0% 0%', 'repeat');
  }
  static withCropScaleMode(e = [[1, 0, 0], [0, 1, 0]], t = {
    width: 0,
    height: 0
  }) {
    let i = 100 / e[0][0];
    let n = 100 / e[1][1];
    let r = `${_$$LI(i)}% ${_$$LI(n)}%`;
    let a = t ? -(t.width / e[0][0]) * e[0][2] : 0;
    let s = t ? -(t.height / e[1][1]) * e[1][2] : 0;
    return new eL(r, `${_$$LI(a)}px ${_$$LI(s)}px`, 'no-repeat');
  }
  get value() {
    return `${this.background} ${this.backgroundPosition} / ${this.backgroundSize} ${this.backgroundRepeat}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
class eF {
  constructor(e, t, i, n, r = _$$DX) {
    this.paintIndex = e;
    this.paintOpacity = t;
    this.node = i;
    this.preferences = n;
    this.colorManagement = r;
  }
  parseSingleStop(e) {
    let t = hO(e, this.paintIndex, 'fills', this.node);
    return new Q1(e.color, this.preferences, this.paintOpacity, this.colorManagement, t);
  }
}
function eM(e, t, i, n, r, a) {
  let s = hO(e, t, i, n);
  return new Q1(e.color, a, e.opacity, r, s);
}
function ej(e) {
  return e instanceof Q1 && e.hasResolvedVariable();
}
function eU(e, t, i, n, r, a, s = _$$DX) {
  let o = new eF(t, e.opacity, r, a, s);
  switch (e.type) {
    case 'SOLID':
      let l = eM(e, t, 'fills', r, s, a);
      if (n) return l;
      return W4.fromColor(l, !0);
    case 'GRADIENT_LINEAR':
      return W4.fromGradientPaint(e, o);
    case 'IMAGE':
      return eB(e, i);
    case 'GRADIENT_RADIAL':
      return new Ey(e, o);
    case 'GRADIENT_ANGULAR':
      return new jN(e, o);
    case 'GRADIENT_DIAMOND':
      return new n_(e, o);
    case 'VIDEO':
    case 'PATTERN':
      return null;
    default:
      reportError(_$$e.DEVELOPER_TOOLS, new Error(`Unknown paint type: ${e.type}`));
      return null;
  }
}
let eB = (e, t) => {
  switch (e.rotation, e.scaleMode) {
    case 'FILL':
      return eL.withFillScaleMode();
    case 'FIT':
      return eL.withFitScaleMode();
    case 'TILE':
      return eL.withTileScaleMode(e.scalingFactor);
    case 'CROP':
      return eL.withCropScaleMode(e.imageTransform, t);
  }
};
class eV {
  constructor(e, t, i = 'solid') {
    this.width = e;
    this.color = t;
    this.style = i;
  }
  get value() {
    return `${this.width.value} ${this.style} ${this.color.value}`;
  }
  equals(e) {
    return this.value === e.value;
  }
}
function ez(e, t, i, n, r, a, s, o, l, d, c) {
  if (n.variable?.value || n.rawValue > 0) {
    let u = vV(new RU(n.rawValue), n, t, 'stroke-width', d);
    e.set(i, new eV(oy({
      raw: u,
      node: o,
      field: s,
      styleField: i,
      suggestedVars: l,
      preferences: d
    }), r, a));
    t[i] = c;
  }
}
function eH(e) {
  let t;
  let {
    strokes
  } = e instanceof _$$a ? e : e.border;
  let n = F$(strokes);
  return n.length === 0 ? null : (n.length > 1 && (t = A2.SinglePaint), {
    paint: n[0].paint,
    index: n[0].index,
    hint: n[0].hint || t
  });
}
class eW {
  constructor(e, t) {
    this.node = e;
    this.parent = e.layout.parent;
    this.absolutePosition = e.layout.absolutePosition();
    this.transform = e.layout.relativeBounds().transform;
    this.preferences = t;
  }
  getStyles() {
    let e = new ek();
    let t = new _$$E();
    let i = {};
    this.addPosition(e);
    this.addSize(e, i, t, this.preferences);
    this.addRotation(e);
    this.node.layout.shouldUseAbsolutePosition() ? this.addAbsolutePosition(e, i) : this.addFlexibleLayout(e);
    this.addAspectRatio(e);
    return {
      styleMap: e,
      hints: i,
      suggestedVars: t
    };
  }
  addRotation(e) {
    this.transform.isRotated() && e.set('transform', new ex([new eE(-this.transform.getAngleDeg())]));
  }
  addPosition(e) {
    this.node.layout.shouldUseAbsolutePosition() ? e.set('position', new _$$O$('absolute')) : u_(this.node) && this.node.children.some(e => e.layout.shouldUseAbsolutePosition()) && e.set('position', new _$$O$('relative'));
  }
  addSize(e, t, i, n) {
    let {
      width,
      height,
      minHeight,
      minWidth,
      maxHeight,
      maxWidth
    } = this.node.layout;
    if (this.shouldAddWidth()) {
      let a = this.node.getVariableValue('width');
      let s = new RU(width);
      let o = DX(s, a, t, 'width', n);
      e.set('width', oy({
        raw: o,
        node: this.node,
        field: 'width',
        styleField: 'width',
        suggestedVars: i,
        preferences: n
      }));
    }
    if (this.shouldAddHeight()) {
      let r = this.node.getVariableValue('height');
      let s = DX(new RU(height), r, t, 'height', n);
      e.set('height', oy({
        raw: s,
        node: this.node,
        field: 'height',
        styleField: 'height',
        suggestedVars: i,
        preferences: n
      }));
    }
    if (minHeight) {
      let r = this.node.getVariableValue('minHeight');
      let a = DX(new RU(minHeight), r, t, 'min-height', n);
      e.set('min-height', oy({
        raw: a,
        node: this.node,
        field: 'minHeight',
        styleField: 'min-height',
        suggestedVars: i,
        preferences: n
      }));
    }
    if (maxHeight) {
      let r = this.node.getVariableValue('maxHeight');
      let a = DX(new RU(maxHeight), r, t, 'max-height', n);
      e.set('max-height', oy({
        raw: a,
        node: this.node,
        field: 'maxHeight',
        styleField: 'max-height',
        suggestedVars: i,
        preferences: n
      }));
    }
    if (minWidth) {
      let r = this.node.getVariableValue('minWidth');
      let a = DX(new RU(minWidth), r, t, 'min-width', n);
      e.set('min-width', oy({
        raw: a,
        node: this.node,
        field: 'minWidth',
        styleField: 'min-width',
        suggestedVars: i,
        preferences: n
      }));
    }
    if (maxWidth) {
      let r = this.node.getVariableValue('maxWidth');
      let a = DX(new RU(maxWidth), r, t, 'max-width', n);
      e.set('max-width', oy({
        raw: a,
        node: this.node,
        field: 'maxWidth',
        styleField: 'max-width',
        suggestedVars: i,
        preferences: n
      }));
    }
  }
  addFlexibleLayout(e) {
    let t = this.parent?.isAutoLayout() && this.parent.autoLayout.layoutMode === 'HORIZONTAL';
    let i = !t;
    let n = this.parent && BL(this.parent) === XQ.FIXED;
    let r = this.parent && qn(this.parent) === XQ.FIXED;
    t && BL(this.node) === XQ.FILL_PARENT || i && qn(this.node) === XQ.FILL_PARENT ? e.set('flex', new _$$O$('1 0 0')) : (t && n && BL(this.node) === XQ.FIXED || i && r && qn(this.node) === XQ.FIXED) && e.set('flex-shrink', new _$$O$(0));
    (t && qn(this.node) === XQ.FILL_PARENT || i && BL(this.node) === XQ.FILL_PARENT) && e.set('align-self', new _$$O$('stretch'));
  }
  addAbsolutePosition(e, t) {
    if (!this.absolutePosition) {
      return {
        hints: t
      };
    }
    let {
      horizontal,
      vertical
    } = this.absolutePosition;
    let r = e => {
      this.node.layout.parent && (t[e] = A2.AbsolutePosition(this.node.layout.parent.name));
    };
    horizontal.type === 'left' && horizontal.offset !== 0 && (e.set('left', new RU(horizontal.offset)), r('left'));
    horizontal.type === 'right' && (e.set('right', new RU(horizontal.offset)), Object.keys(t).length === 0 && r('right'));
    vertical.type === 'top' && vertical.offset !== 0 && (e.set('top', new RU(vertical.offset)), Object.keys(t).length === 0 && r('top'));
    vertical.type === 'bottom' && (e.set('bottom', new RU(vertical.offset)), Object.keys(t).length === 0 && r('bottom'));
    return {
      hints: t
    };
  }
  addAspectRatio(e) {
    if (!this.node.layout.targetAspectRatio) return;
    let {
      width,
      height
    } = this.node.layout;
    let n = getFeatureFlags().ce_tv_arl_dev_mode_fractions ? function (e, t, i = 50, n = 1e-4) {
      if (!isFinite(e) || !isFinite(t) || t === 0) return `${e.toFixed(2)}/${t.toFixed(2)}`;
      let r = e / t;
      let a = function (e) {
        let t = [];
        let i = e;
        for (let e = 0; e < 10; e++) {
          let e = Math.floor(i);
          t.push(e);
          let n = i - e;
          if (n < 1e-10) break;
          i = 1 / n;
        }
        return t;
      }(r);
      let s = 0;
      let o = 1;
      let l = 0;
      let d = 1;
      let c = 0;
      let u = 0;
      for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (l = t * o + s, (u = t * c + d) > i || u === 0) break;
        if (Math.abs(l / u - r) <= n) return `${l}/${u}`;
        s = o;
        o = l;
        d = c;
        c = u;
      }
      return `${e.toFixed(2)}/${t.toFixed(2)}`;
    }(width, height, Math.max(50, height)) : function (e, t) {
      let i = e => Math.abs(Math.round(e) - e) < 0.001;
      if (!(i(e) && i(t))) return `${e.toFixed(2)}/${t.toFixed(2)}`;
      {
        let i = Math.round(e);
        let n = Math.round(t);
        let r = (e, t) => t ? r(t, e % t) : Math.abs(e);
        let a = r(i, n);
        return `${i / a}/${n / a}`;
      }
    }(width, height);
    e.set('aspect-ratio', new _$$O$(n));
  }
  shouldAddWidth() {
    return (!(this.node instanceof _$$z) || this.node.textAutoResize !== 'WIDTH_AND_HEIGHT' || !!this.transform.isRotated()) && BL(this.node) === XQ.FIXED;
  }
  shouldAddHeight() {
    return (!(this.node instanceof _$$z) || this.node.textAutoResize !== 'HEIGHT' && this.node.textAutoResize !== 'WIDTH_AND_HEIGHT' || !!this.transform.isRotated()) && qn(this.node) === XQ.FIXED;
  }
}
class eK {
  constructor(e) {
    this.bgs = e;
  }
  get value() {
    return this.bgs.map(e => e.value).join(', ');
  }
  equals(e) {
    return this.value === e.value;
  }
}
function eY(e, t, i = _$$DX) {
  let n = ek.From([['box-sizing', new _$$O$('border-box')]]);
  let r = {};
  let {
    styleMap,
    hints,
    suggestedVars
  } = new eW(e, t).getStyles();
  n.merge(styleMap);
  let l = e instanceof _$$a ? 'fill' : 'background';
  let {
    backgrounds,
    blendModes
  } = function (e, t, i = _$$DX) {
    let n;
    if ((n = e.fills) && n.toString() === 'Symbol(figma.mixed)') {
      reportError(_$$e.DEVELOPER_TOOLS, new Error(`Mixed value in fills in node ${e.id}`));
      return {};
    }
    let r = e.layout.relativeBounds().bounds;
    let {
      blendMode = [],
      backgrounds: _backgrounds = []
    } = oE(e.fills).reverse().reduce((n, a, s, o) => {
      let {
        paint,
        index
      } = a;
      let c = eU(paint, index, r, s === o.length - 1, e, t, i);
      return c ? {
        backgrounds: [...n.backgrounds, {
          fill: c,
          index
        }],
        blendMode: [...n.blendMode, paint.blendMode ?? 'NORMAL']
      } : n;
    }, {
      backgrounds: [],
      blendMode: []
    });
    return {
      backgrounds: _backgrounds.length > 0 ? _backgrounds : void 0,
      blendModes: blendMode.some(e => e !== 'NORMAL') ? blendMode : void 0
    };
  }(e, t, i);
  if (_$$t(backgrounds)) {
    let i = backgrounds.map(e => e.fill);
    let a = i.some(ej);
    let s = oQ(e.fillStyle);
    if (s && !a) {
      n.set(l, new kz(e.fillStyle.name, new eK(i), t, void 0, e.fillStyle.id));
    } else {
      r[l] = function (e, t, i) {
        if (!t && !i) return A2.NoStyleForColor;
      }(0, a, s);
      let i = new eK(backgrounds.map(({
        fill: i,
        index: n
      }) => nb({
        raw: i,
        node: e,
        field: 'fills',
        styleField: l,
        suggestedVars,
        matchIndex: n,
        arrayIndex: n,
        preferences: t
      })));
      n.set(l, i);
    }
  }
  if (_$$t(blendModes)) {
    let e = eu.fromFigmaBlendMode(blendModes);
    n.set('background-blend-mode', e);
    let t = e.contains('plus-lighter');
    let i = e.contains('plus-darker');
    (t || i) && (r['background-blend-mode'] = A2.BackgroundBlendModePlusLighterDarker(t ? 'plus-lighter' : 'plus-darker'));
  }
  if (e.opacity) {
    let i = e.getVariableValue('opacity');
    let a = DX(new lS(nk(e.opacity, 4)), i, r, 'opacity', t);
    n.set('opacity', JT({
      raw: a,
      node: e,
      field: 'opacity',
      styleField: 'opacity',
      suggestedVars,
      preferences: t
    }));
  }
  if (!function (e, t = _$$DX, i, n, r, a) {
    let s = eH(e);
    if (!s) return;
    let {
      paint,
      index,
      hint
    } = s;
    let {
      color,
      hint: _hint2
    } = function (e, t) {
      if (oQ(t) && !HN(e.variableValue)) {
        return {
          color: new kz(t.name, e.rawColor, e.preferences, void 0, t.id)
        };
      }
      let i = mJ(e.variableValue, e.rawColor, {
        isColor: !0
      });
      return {
        color: e,
        hint: i
      };
    }(eM(paint, index, 'strokes', e, t, a), e.strokeStyle);
    let p = hint || _hint2;
    if (e instanceof _$$a) {
      if (e.strokeWeight.rawValue <= 0) return;
      let t = oy({
        raw: new RU(e.strokeWeight.rawValue),
        node: e,
        field: 'strokeWeight',
        styleField: 'stroke-width',
        suggestedVars: r,
        preferences: a
      });
      let s = nb({
        raw: color,
        node: e,
        field: 'strokes',
        styleField: 'stroke',
        suggestedVars: r,
        arrayIndex: index,
        preferences: a
      });
      i.set('stroke-width', t);
      i.set('stroke', s);
      return n.stroke = p;
    }
    let {
      strokeTopWeight,
      strokeBottomWeight,
      strokeLeftWeight,
      strokeRightWeight
    } = e.border;
    let A = e.border.dashPattern?.length > 0 ? 'dashed' : 'solid';
    if ([strokeBottomWeight, strokeLeftWeight, strokeRightWeight].every(e => deepEqual(e, strokeTopWeight))) {
      n.border = p;
      let t = vV(new RU(strokeTopWeight.rawValue), strokeTopWeight, n, 'border', a);
      i.set('border', new eV(oy({
        raw: t,
        node: e,
        field: 'strokeTopWeight',
        styleField: 'border',
        suggestedVars: r,
        matchIndex: 0,
        preferences: a
      }), color instanceof Q1 ? nb({
        raw: color,
        node: e,
        field: 'strokes',
        styleField: 'border',
        suggestedVars: r,
        matchIndex: 1,
        arrayIndex: index,
        preferences: a
      }) : color, A));
    } else {
      let t = t => color instanceof Q1 ? nb({
        raw: color,
        node: e,
        field: 'strokes',
        styleField: t,
        suggestedVars: r,
        matchIndex: 1,
        arrayIndex: index,
        preferences: a
      }) : color;
      ez(i, n, 'border-top', strokeTopWeight, t('border-top'), A, 'strokeTopWeight', e, r, a, p);
      ez(i, n, 'border-right', strokeRightWeight, t('border-right'), A, 'strokeRightWeight', e, r, a, p);
      ez(i, n, 'border-bottom', strokeBottomWeight, t('border-bottom'), A, 'strokeBottomWeight', e, r, a, p);
      ez(i, n, 'border-left', strokeLeftWeight, t('border-left'), A, 'strokeLeftWeight', e, r, a, p);
    }
  }(e, i, n, r, suggestedVars, t), !function (e, t = _$$DX, i, n, r) {
    let {
      effects
    } = e;
    let s = new eb([]);
    let o = new em([]);
    let l = new em([]);
    e.blendMode && e.blendMode !== 'PASS_THROUGH' && (i.set('mix-blend-mode', eu.fromFigmaBlendMode([e.blendMode])), e.blendMode === 'LINEAR_BURN' && (n['mix-blend-mode'] = A2.PlusDarker));
    effects.filter(e => e.visible).forEach(i => {
      switch (i.type) {
        case 'LAYER_BLUR':
        case 'BACKGROUND_BLUR':
          {
            let t = bE(i, e);
            let a = DX(new RU(i.radius), t, n, 'filter', r);
            let s = new em([new eh(i.radius, a)]);
            i.type === 'LAYER_BLUR' ? o = em.concat(o, s) : l = em.concat(l, s);
            e instanceof _$$a && (n.filter = A2.EffectsInSvg);
            break;
          }
        case 'DROP_SHADOW':
        case 'INNER_SHADOW':
          {
            let a = i.type === 'DROP_SHADOW' && (e instanceof _$$a || e.isGroup);
            let l = jX(i, 'offsetX', e);
            let d = jX(i, 'offsetY', e);
            let c = jX(i, 'radius', e);
            let u = jX(i, 'spread', e);
            let p = jX(i, 'color', e);
            let m = a ? 'filter' : 'box-shadow';
            e instanceof _$$a && (n[m] = A2.EffectsInSvg);
            let h = DX(new RU(i.offset.x), l, n, m, r);
            let g = DX(new RU(i.offset.y), d, n, m, r);
            let f = DX(new RU(i.radius), c, n, m, r);
            let A = DX(new RU(i.spread ?? 0), u, n, m, r);
            let y = DX(new Q1(i.color, r, 1, t), p, n, m, r);
            if (a) {
              o = em.concat(o, new em([new eg({
                offsetX: h,
                offsetY: g,
                radius: f,
                color: y
              })]));
            } else {
              let e = new eb([{
                offsetX: h,
                offsetY: g,
                blur: f,
                spread: A,
                color: y,
                type: i.type === 'INNER_SHADOW' ? ey.Inset : ey.Normal
              }]);
              s = eb.concat(s, e);
            }
          }
      }
    });
    s.shadowObjects.length > 0 && i.set('box-shadow', s);
    o.filterObjects.length > 0 && i.set('filter', o);
    l.filterObjects.length > 0 && i.set('backdrop-filter', l);
  }(e, i, n, r, t), e instanceof _$$a || function (e, t, i, n, r) {
    let {
      topLeftRadius = 0,
      topRightRadius = 0,
      bottomRightRadius = 0,
      bottomLeftRadius = 0
    } = e.border;
    let d = (t, n, a, s) => {
      let o = e.getVariableValue(t);
      let l = DX(new RU(n), o, i, 'border-radius', r);
      return oy({
        raw: l,
        node: e,
        field: t,
        styleField: 'border-radius',
        suggestedVars: a,
        matchIndex: s,
        preferences: r
      });
    };
    t.set('border-radius', new e_(d('topLeftRadius', topLeftRadius, n, 0), d('topRightRadius', topRightRadius, n, 1), d('bottomRightRadius', bottomRightRadius, n, 2), d('bottomLeftRadius', bottomLeftRadius, n, 3)));
  }(e, n, r, suggestedVars, t), e.layout.parent?.isGrid()) {
    let {
      gridRowSpan,
      gridColumnSpan,
      gridColumnAnchorIndex,
      gridRowAnchorIndex,
      gridChildHorizontalAlign,
      gridChildVerticalAlign
    } = e.gridLayout;
    n.set('grid-row', new _$$O$(`${gridRowAnchorIndex + 1} / span ${gridRowSpan}`));
    n.set('grid-column', new _$$O$(`${gridColumnAnchorIndex + 1} / span ${gridColumnSpan}`));
    let l = e => {
      switch (e) {
        case 'AUTO':
          return 'auto';
        case 'MIN':
          return 'start';
        case 'MAX':
          return 'end';
        case 'CENTER':
          return 'center';
      }
    };
    e.layout.layoutGrow === 0 && e.gridLayout.gridChildHorizontalAlign !== 'AUTO' && n.set('justify-self', new _$$O$(l(gridChildHorizontalAlign)));
    e.layout.layoutAlign !== 'STRETCH' && e.gridLayout.gridChildVerticalAlign !== 'AUTO' && n.set('align-self', new _$$O$(l(gridChildVerticalAlign)));
  }
  return {
    styleMap: n,
    hints: {
      ...r,
      ...hints
    },
    suggestedVars
  };
}
function eq(e, t, {
  styleMap: i,
  hints: n = {},
  suggestedVars: a
} = eY(e, t, {
  colorProfile: e.nodeCache.colorProfile
}), s = {}) {
  let o = {
    ...n,
    ...s
  };
  let {
    fallbackHints,
    fallbackStyleMap
  } = e.nodeCache.colorProfile === ColorSpaceEnum.DISPLAY_P3 ? function ({
    node: e,
    styleMap: t,
    preferences: i
  }) {
    let {
      styleMap
    } = eY(e, i, {
      colorProfile: ColorSpaceEnum.SRGB,
      colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB
    });
    return {
      fallbackStyleMap: n = styleMap.difference(t),
      fallbackHints: Object.fromEntries(styleMap.keys().map(e => [e, A2.DisplayP3Fallback]))
    };
  }({
    node: e,
    styleMap: i,
    preferences: t
  }) : {
    fallbackHints: {},
    fallbackStyleMap: new ek()
  };
  return {
    styleMap: i,
    hints: o,
    suggestedVars: a,
    fallbackHints,
    fallbackStyleMap
  };
}
let e$ = {
  NONE: 'row',
  HORIZONTAL: 'row',
  VERTICAL: 'column',
  GRID: 'row'
};
let eZ = {
  MIN: 'flex-start',
  CENTER: 'center',
  MAX: 'flex-end',
  SPACE_BETWEEN: 'space-between',
  BASELINE: 'baseline'
};
function eX(e, t, i, n, r) {
  let {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = e.autoLayout.layoutMode === 'GRID' ? e.gridLayout : e.autoLayout;
  let d = [paddingTop, paddingRight, paddingBottom, paddingLeft].filter(e => e !== 0).length;
  let c = (t, a, s = 'padding', o = 0) => {
    let l = e.getVariableValue(t);
    let d = DX(new RU(a), l, i, 'padding', r);
    return oy({
      raw: d,
      node: e,
      field: t,
      styleField: s,
      suggestedVars: n,
      matchIndex: o,
      preferences: r
    });
  };
  d === 1 ? (paddingTop && t.set('padding-top', c('paddingTop', paddingTop, 'padding-top')), paddingBottom && t.set('padding-bottom', c('paddingBottom', paddingBottom, 'padding-bottom')), paddingLeft && t.set('padding-left', c('paddingLeft', paddingLeft, 'padding-left')), paddingRight && t.set('padding-right', c('paddingRight', paddingRight, 'padding-right'))) : t.set('padding', new e_(c('paddingTop', paddingTop, 'padding', 0), c('paddingRight', paddingRight, 'padding', 1), c('paddingBottom', paddingBottom, 'padding', 2), c('paddingLeft', paddingLeft, 'padding', 3)));
}
let eJ = eQ;
let e2 = e1;
let e5 = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFIED: 'justify'
};
let e4 = {
  TOP: 'flex-start',
  CENTER: 'center',
  BOTTOM: 'flex-end'
};
let e3 = {
  NONE: 'none',
  STRIKETHROUGH: 'line-through',
  UNDERLINE: 'underline'
};
let e6 = {
  SOLID: 'solid',
  DOTTED: 'dotted',
  WAVY: 'wavy'
};
let e7 = {
  SMALL_CAPS: 'small-caps',
  SMALL_CAPS_FORCED: 'all-small-caps'
};
let e8 = {
  ORIGINAL: 'none',
  UPPER: 'uppercase',
  LOWER: 'lowercase',
  TITLE: 'capitalize',
  SMALL_CAPS: 'uppercase',
  SMALL_CAPS_FORCED: 'capitalize'
};
function e9(e) {
  return e.characters.length === 0 ? [] : e.textSegments;
}
function te(e) {
  return e9(e)[0];
}
function tt(e, t, i, n) {
  let r;
  let a;
  let s;
  let o;
  let l;
  let d;
  let c = {};
  let {
    fontWeight,
    italic
  } = i.fontName?.style ? J(i.fontName.style, i.fontWeight) : {
    fontWeight: i.fontWeight,
    italic: void 0
  };
  let m = i?.fontName?.family;
  if (m) {
    let e = new _$$h(m.rawValue.includes(' ') ? `"${m.rawValue}"` : m.rawValue);
    let i = vV(e, m, c, 'font-family', n);
    t.set('font-family', i);
  }
  if (i.fontSize) {
    let e = vV(new RU(i.fontSize.rawValue), i.fontSize, c, 'font-size', n);
    t.set('font-size', e);
  }
  if (fontWeight && t.set('font-weight', vV(new lS(fontWeight.rawValue), fontWeight, c, 'font-weight', n)), t.set('font-style', new _$$O$(italic ? 'italic' : 'normal')), i.textDecoration && (t.set('text-decoration-line', new _$$O$(e3[i.textDecoration])), i.textDecoration === 'UNDERLINE')) {
    if (i.textDecorationStyle && t.set('text-decoration-style', new _$$O$(e6[i.textDecorationStyle])), void 0 !== i.textDecorationSkipInk && t.set('text-decoration-skip-ink', new _$$O$(i.textDecorationSkipInk ? 'auto' : 'none')), i.textDecorationThickness) {
      r = i.textDecorationThickness;
      a = i.fontSize?.rawValue ?? 0;
      let e = r.unit === 'AUTO' ? {
        value: new RU('auto')
      } : r.unit === 'PERCENT' ? {
        value: new QE(r.value),
        hint: new RU(r.value / 100 * a)
      } : {
        value: new RU(r.value),
        hint: new QE(r.value / a * 100)
      };
      t.set('text-decoration-thickness', e.value);
      e.hint && (c['text-decoration-thickness'] = {
        hint: e.hint.value,
        type: bv.Comment
      });
    }
    if (i.textDecorationColor) {
      let r = e.nodeCache.colorProfile;
      tn(e, t, c, i, n, {
        colorProfile: r
      });
    }
    if (i.textDecorationOffset) {
      s = i.textDecorationOffset;
      o = i.fontSize?.rawValue ?? 0;
      let e = s.unit === 'AUTO' ? {
        value: new RU('auto')
      } : s.unit === 'PERCENT' ? {
        value: new QE(s.value),
        hint: new RU(s.value / 100 * o)
      } : {
        value: new RU(s.value),
        hint: new QE(s.value / o * 100)
      };
      t.set('text-underline-offset', e.value);
      e.hint && (c['text-underline-offset'] = {
        hint: e.hint.value,
        type: bv.Comment
      });
    }
    t.set('text-underline-position', new _$$O$('from-font'));
  }
  let h = i.fontSize || te(e).fontSize;
  if (i.letterSpacing) {
    let e = new RU(et(i.letterSpacing.rawValue, h.rawValue));
    t.set('letter-spacing', vV(e, i.letterSpacing, c, 'letter-spacing', n));
  }
  if (i.textCase && (i.textCase in e7 ? t.set('font-variant', new _$$O$(e7[i.textCase])) : t.set('text-transform', new _$$O$(e8[i.textCase]))), i.lineHeight) {
    l = i.lineHeight.rawValue;
    d = i.fontSize?.rawValue ?? 0;
    let e = l.unit === 'AUTO' ? {
      value: new Qf()
    } : l.unit === 'PERCENT' ? {
      value: new QE(l.value),
      hint: new RU(l.value / 100 * d)
    } : {
      value: new RU(l.value),
      hint: new QE(l.value / d * 100)
    };
    let r = vV(e.value, i.lineHeight, c, 'line-height', n);
    t.set('line-height', r);
    e.hint && (c['line-height'] = {
      hint: e.hint.value,
      type: bv.Comment
    });
  }
  if (function (e, t) {
    let i = e.openTypeFeatures;
    if (!i || !eJ()(i)) return;
    let n = [];
    i.LNUM ? n.push('lining-nums') : i.ONUM && n.push('oldstyle-nums');
    i.TNUM ? n.push('tabular-nums') : i.PNUM && n.push('proportional-nums');
    i.FRAC && n.push('stacked-fractions');
    i.ORDN && n.push('ordinal');
    i.ZERO && n.push('slashed-zero');
    n && n.length > 0 && t.set('font-variant-numeric', new _$$O$(n.join(' ')));
    let r = [];
    Object.entries(i).forEach(([e, i]) => {
      if (e === 'KERN') {
        t.set('font-kerning', new _$$O$(i ? 'normal' : 'none'));
      } else {
        if (e === 'LNUM' || e === 'ONUM' || e === 'TNUM' || e === 'PNUM' || e === 'FRAC' || e === 'ORDN' || e === 'ZERO') return;
        r.push(`'${e.toLowerCase()}' ${i ? 'on' : 'off'}`);
      }
    });
    r.length > 0 && t.set('font-feature-settings', new _$$O$(r.join(', ')));
  }(e, t), e.opacity) {
    let i = e.getVariableValue('opacity');
    let r = DX(new lS(nk(e.opacity, 4)), i, c, 'opacity', n);
    t.set('opacity', r);
  }
  e.leadingTrim && e.leadingTrim === 'CAP_HEIGHT' && (t.set('leading-trim', new _$$O$('both')), t.set('text-edge', new _$$O$('cap')), c['leading-trim'] = A2.LeadingTrim);
  e.maxLines && (t.set('overflow', new _$$O$('hidden')), t.set('text-overflow', new _$$O$('ellipsis')), t.set('-webkit-box-orient', new _$$O$('vertical')), t.set('-webkit-line-clamp', new _$$O$(e.maxLines)));
  return c;
}
function ti(e, t, i, n, r, a = _$$DX) {
  let s = function (e, t, i = _$$DX, n, r) {
    if (!t.fills) return null;
    let a = oE(t.fills);
    if (a.length === 0) return null;
    a.length > 1 && (n.color = A2.SinglePaint);
    let s = a[0];
    let o = e.layout.relativeBounds().bounds;
    let l = eU(s.paint, s.index, o, !0, e, r, i);
    if (!l) return;
    let d = ej(l);
    if (oQ(e.fillStyle) && !d) return new kz(e.fillStyle.name, l, r, void 0, e.fillStyle.id);
    if (t.fillStyleId) {
      let i = fl({
        fillStyleId: t.fillStyleId
      }, e.nodeCache.stylesResolver);
      if (oQ(i)) return new kz(i.name, l, r, void 0, i.id);
    }
    return l;
  }(e, n, a, i, r);
  if (s) {
    if (s instanceof Q1) {
      let e = mJ(s.variableValue, s.rawColor, {
        isColor: !0
      });
      t.set('color', s);
      i.color = i.color || e;
    } else {
      s instanceof kz && s.wrappedValue instanceof Q1 ? t.set('color', s) : (t.set('background', new eK([s])), t.set('background-clip', new _$$O$('text')), t.set('-webkit-background-clip', new _$$O$('text')), t.set('-webkit-text-fill-color', new _$$O$('transparent')));
    }
  }
}
function tn(e, t, i, n, r, a = _$$DX) {
  let s = function (e, t, i = _$$DX, n, r) {
    if (!t.textDecorationColor || !t.textDecorationColor.rawValue) return null;
    let a = t.textDecorationColor.rawValue.value;
    if (a === 'AUTO') return null;
    let s = oE([a]);
    if (s.length === 0) return null;
    s.length > 1 && (n['text-decoration-color'] = A2.SinglePaint);
    let o = s[0];
    if (!o) return null;
    let l = e.layout.relativeBounds().bounds;
    let d = eU(o.paint, o.index, l, !0, e, r, i);
    if (d) return d;
  }(e, n, a, i, r);
  if (s) {
    if (s instanceof Q1) {
      let e = mJ(s.variableValue, s.rawColor, {
        isColor: !0
      });
      t.set('text-decoration-color', s);
      i['text-decoration-color'] = i['text-decoration-color'] || e;
    } else {
      s instanceof kz && s.wrappedValue instanceof Q1 && t.set('text-decoration-color', s);
    }
  }
}
function tr(e, t, i, n, r = _$$DX) {
  let a;
  let {
    strokes,
    strokeStyle,
    strokeWeight
  } = e;
  if (!(strokeWeight <= 0) && strokes.length !== 0) {
    for (let t = 0; t < strokes.length; t++) {
      let i = strokes[t];
      if (i.type === 'SOLID') {
        a = eM(i, t, 'strokes', e, r, n);
        break;
      }
    }
    if (t.set('-webkit-text-stroke-width', new RU(Math.round(100 * strokeWeight) / 100)), !a) {
      t.set('-webkit-text-stroke-color', new Q1({
        r: 0,
        g: 0,
        b: 0
      }, n));
      i['-webkit-text-stroke-color'] = A2.UnsupportedPaint;
      return;
    }
    if (strokes.length > 1 && (i['-webkit-text-stroke-color'] = A2.SinglePaint), strokeStyle && oQ(strokeStyle)) {
      t.set('-webkit-text-stroke-color', new kz(strokeStyle.name, a, n));
      return;
    }
    t.set('-webkit-text-stroke-color', a);
  }
}
function ta(e, t, i, n, r = _$$DX) {
  e.blendMode && e.blendMode !== 'PASS_THROUGH' && (t.set('mix-blend-mode', eu.fromFigmaBlendMode([e.blendMode])), e.blendMode === 'LINEAR_BURN' && (i['mix-blend-mode'] = A2.PlusDarker));
  let a = new ev([]);
  let s = new em([]);
  let o = new em([]);
  e.effects.forEach(t => {
    switch (t.type) {
      case 'LAYER_BLUR':
      case 'BACKGROUND_BLUR':
        let l = bE(t, e);
        let d = DX(new RU(t.radius), l, i, 'filter', n);
        let c = new em([new eh(t.radius, d)]);
        t.type === 'LAYER_BLUR' ? s = em.concat(s, c) : o = em.concat(o, c);
        break;
      case 'DROP_SHADOW':
        let u = jX(t, 'offsetX', e);
        let p = jX(t, 'offsetY', e);
        let m = jX(t, 'radius', e);
        let h = jX(t, 'color', e);
        let g = DX(new RU(t.offset.x), u, i, 'text-shadow', n);
        let f = new ev([{
          offsetX: g,
          offsetY: DX(new RU(t.offset.y), p, i, 'text-shadow', n),
          blur: DX(new RU(t.radius), m, i, 'text-shadow', n),
          color: DX(new Q1(t.color, n, 1, r), h, i, 'text-shadow', n)
        }]);
        a = ev.concat(a, f);
        break;
      case 'INNER_SHADOW':
        console.warn('Inner shadow is not supported on text');
    }
  });
  a.shadowObjects.length > 0 && t.set('text-shadow', a);
  s.filterObjects.length > 0 && t.set('filter', s);
  o.filterObjects.length > 0 && t.set('backdrop-filter', o);
}
function ts(e, t, i, n) {
  let r = t.get('color');
  r instanceof Q1 && t.set('color', nb({
    raw: r,
    node: e,
    field: 'fills',
    styleField: 'color',
    suggestedVars: i,
    preferences: n
  }), !0);
  let a = t.get('text-decoration-color');
  a instanceof Q1 && t.set('text-decoration-color', nb({
    raw: a,
    node: e,
    field: 'textDecorationColor',
    styleField: 'text-decoration-color',
    suggestedVars: i,
    preferences: n
  }), !0);
  let s = t.get('font-family');
  s instanceof _$$h && t.set('font-family', ZN({
    raw: s,
    node: e,
    field: 'fontFamily',
    styleField: 'font-family',
    suggestedVars: i,
    preferences: n
  }), !0);
  let o = t.get('font-size');
  o instanceof RU && t.set('font-size', oy({
    raw: o,
    node: e,
    field: 'fontSize',
    styleField: 'font-size',
    suggestedVars: i,
    preferences: n
  }), !0);
  let l = t.get('line-height');
  l instanceof RU && t.set('line-height', oy({
    raw: l,
    node: e,
    field: 'lineHeight',
    styleField: 'line-height',
    suggestedVars: i,
    preferences: n
  }), !0);
}
let to = ['width', 'height', 'left', 'top', 'right', 'bottom', 'padding', 'padding-left', 'padding-right', 'padding-bottom', 'padding-top', 'gap', 'font-size', 'letter-spacing', 'line-height', 'min-width', 'max-width', 'min-height', 'max-height', 'row-gap', 'border-radius'];
let tl = ['font-size', 'letter-spacing', 'line-height'];
function td(e, t, i) {
  if (void 0 === t) return;
  if (i.unit === _$$tK.PIXEL || i?.customSettings?.onlyText === 'true' && !tl.includes(e)) return t;
  let n = e => e.replace(/(\d+(?:\.\d*)?)px/g, (e, t) => `${hX(t, i)}rem`);
  return to.includes(e) ? e === 'padding' && typeof t == 'string' ? t.split(' ').map(n).join(' ') : typeof t == 'string' ? n(t) : hX(t, i) : t;
}
function tc([e, t], [i, n]) {
  return ew.indexOf(e) - ew.indexOf(i);
}
function tu(e, t, i, n, r) {
  let a = n ? td(e, t, n) : t;
  if (r?.type !== bv.Comment) return n8(`${e}: ${a};`, i, r);
  {
    let t = n ? td(e, r.hint, n) : r?.hint;
    return n8(`${e}: ${a}; /* ${t} */`, i);
  }
}
async function tp(e, t) {
  return e instanceof _$$a ? eq(e, t) : e instanceof _$$L || e instanceof _$$B2 || e instanceof _$$F ? function (e, t) {
    let {
      styleMap,
      hints,
      fallbackHints,
      fallbackStyleMap,
      suggestedVars
    } = eq(e, t);
    let o = {};
    if (e.isAutoLayout()) {
      let {
        layoutMode,
        primaryAxisSizingMode,
        counterAxisSizingMode
      } = e.autoLayout;
      let l = !e.layout.parent?.isAutoLayout() && (layoutMode === 'VERTICAL' && counterAxisSizingMode === 'AUTO' || layoutMode === 'HORIZONTAL' && primaryAxisSizingMode === 'AUTO');
      let d = new _$$O$(l ? 'inline-flex' : 'flex');
      styleMap.set('display', d);
      eX(e, styleMap, o, suggestedVars, t);
      (function (e, t, i, n, r) {
        let {
          layoutMode,
          itemSpacing,
          primaryAxisAlignItems,
          counterAxisAlignItems,
          layoutWrap,
          counterAxisSpacing
        } = e.autoLayout;
        let u = function (e) {
          if (e.autoLayout.counterAxisAlignContent === 'SPACE_BETWEEN') return 'space-between';
          if (e.autoLayout.layoutWrap === 'WRAP' && !e.children.every(e => fw(e) === XQ.FILL_PARENT)) {
            switch (e.autoLayout.counterAxisAlignItems) {
              case 'MIN':
                return 'flex-start';
              case 'CENTER':
                return 'center';
              case 'MAX':
                return 'flex-end';
            }
          }
          return 'stretch';
        }(e);
        t.set('flex-direction', new _$$O$(e$[layoutMode]));
        t.set('justify-content', new _$$O$(eZ[primaryAxisAlignItems]));
        t.set('align-items', new _$$O$(eZ[counterAxisAlignItems]));
        t.set('align-content', new _$$O$(u));
        layoutWrap === 'WRAP' && t.set('flex-wrap', new _$$O$('wrap'));
        let p = e.getVariableValue('counterAxisSpacing');
        let m = DX(new RU(counterAxisSpacing), p, i, 'row-gap', r);
        if (primaryAxisAlignItems !== 'SPACE_BETWEEN') {
          let a = e.getVariableValue('itemSpacing');
          let o = DX(new RU(itemSpacing), a, i, 'gap', r);
          layoutWrap === 'NO_WRAP' || (o.equals(m) || void 0 === counterAxisSpacing) && u !== 'space-between' ? t.set('gap', oy({
            raw: o,
            node: e,
            field: 'itemSpacing',
            styleField: 'gap',
            suggestedVars: n,
            preferences: r
          })) : u === 'space-between' ? t.set('column-gap', oy({
            raw: o,
            node: e,
            field: 'itemSpacing',
            styleField: 'column-gap',
            suggestedVars: n,
            preferences: r
          })) : t.set('gap', new ef(oy({
            raw: m,
            node: e,
            field: 'counterAxisSpacing',
            styleField: 'gap',
            suggestedVars: n,
            matchIndex: 0,
            preferences: r
          }), oy({
            raw: o,
            node: e,
            field: 'itemSpacing',
            styleField: 'gap',
            suggestedVars: n,
            matchIndex: 1,
            preferences: r
          })));
        } else {
          layoutWrap === 'WRAP' && u !== 'space-between' && t.set('row-gap', oy({
            raw: m,
            node: e,
            field: 'counterAxisSpacing',
            styleField: 'row-gap',
            suggestedVars: n,
            preferences: r
          }));
        }
      })(e, styleMap, o, suggestedVars, t);
    }
    if (e.isGrid()) {
      let {
        gridRowSizingCSS,
        gridColumnSizingCSS,
        gridRowGap,
        gridColumnGap
      } = e.gridLayout;
      let d = e.autoLayout.primaryAxisSizingMode === 'AUTO' || e.autoLayout.counterAxisSizingMode === 'AUTO';
      styleMap.set('display', new _$$O$(d ? 'inline-grid' : 'grid'));
      styleMap.set('grid-template-rows', new _$$O$(gridRowSizingCSS));
      styleMap.set('grid-template-columns', new _$$O$(gridColumnSizingCSS));
      let c = e.getVariableValue('gridRowGap');
      let u = DX(new RU(gridRowGap), c, o, 'row-gap', t);
      let p = oy({
        raw: u,
        node: e,
        field: 'gridRowGap',
        styleField: 'row-gap',
        suggestedVars,
        preferences: t
      });
      styleMap.set('row-gap', p);
      let m = e.getVariableValue('gridColumnGap');
      let h = DX(new RU(gridColumnGap), m, o, 'column-gap', t);
      let g = oy({
        raw: h,
        node: e,
        field: 'gridColumnGap',
        styleField: 'column-gap',
        suggestedVars,
        preferences: t
      });
      styleMap.set('column-gap', g);
      eX(e, styleMap, o, suggestedVars, t);
    }
    _$$t(eH(e)) && e.isLayoutContainer() && !e.autoLayout.strokesIncludedInLayout && (o.border = A2.BordersDontTakeUpSpace, o['border-bottom'] = A2.BordersDontTakeUpSpace, o['border-left'] = A2.BordersDontTakeUpSpace, o['border-right'] = A2.BordersDontTakeUpSpace, o['border-top'] = A2.BordersDontTakeUpSpace);
    e.clipsContent && styleMap.set('overflow', new _$$O$('hidden'));
    return {
      styleMap,
      hints: {
        ...o,
        ...hints
      },
      fallbackHints,
      fallbackStyleMap,
      suggestedVars
    };
  }(e, t) : e instanceof _$$z ? Promise.resolve(function (e, t) {
    let i = ek.From([['box-sizing', new _$$O$('border-box')]]);
    let n = new _$$E();
    if (e.textAlignHorizontal && i.set('text-align', new _$$O$(e5[e.textAlignHorizontal])), e.maxLines ? i.set('display', new _$$O$('-webkit-box')) : e.textAlignVertical && e.textAlignVertical !== 'TOP' && qn(e) !== XQ.HUG_CONTENTS && (i.set('display', new _$$O$('flex')), i.set('flex-direction', new _$$O$('column')), i.set('justify-content', new _$$O$(e4[e.textAlignVertical]))), e.textAutoResize === 'TRUNCATE' && (i.set('text-overflow', new _$$O$('ellipsis')), i.set('overflow', new _$$O$('hidden')), i.set('white-space', new _$$O$('nowrap'))), e.layout.parent?.isGrid()) {
      let {
        gridRowSpan,
        gridColumnSpan,
        gridColumnAnchorIndex,
        gridRowAnchorIndex,
        gridChildHorizontalAlign,
        gridChildVerticalAlign
      } = e.gridLayout;
      i.set('grid-row', new _$$O$(`${gridRowAnchorIndex + 1} / span ${gridRowSpan}`));
      i.set('grid-column', new _$$O$(`${gridColumnAnchorIndex + 1} / span ${gridColumnSpan}`));
      e.layout.layoutGrow === 0 && e.gridLayout.gridChildHorizontalAlign !== 'AUTO' && i.set('justify-self', new _$$O$(gridChildHorizontalAlign));
      e.layout.layoutAlign !== 'STRETCH' && e.gridLayout.gridChildVerticalAlign !== 'AUTO' && i.set('align-self', new _$$O$(gridChildVerticalAlign));
    }
    let {
      styleMap,
      hints,
      suggestedVars
    } = new eW(e, t).getStyles();
    i.merge(styleMap);
    n.merge(suggestedVars);
    let l = e.nodeCache.colorProfile;
    ti(e, i, hints, te(e), t, {
      colorProfile: l
    });
    let d = tt(e, i, te(e), t);
    ta(e, i, hints, t, {
      colorProfile: l
    });
    tr(e, i, hints, t, {
      colorProfile: l
    });
    let c = function (e, t = !1, i = !1) {
      let n = [];
      let r = [];
      let a = new RegExp('(\n|\u2028)|(.+)(\n|\u2028)?', 'g');
      let s = new RegExp('\n|\u2028');
      e.forEach((t, i) => {
        if (s.test(t.characters)) {
          let s = t.characters.match(a);
          if (s === null) {
            n.push(t);
          } else if (s.length === 1) {
            n.push(t);
            r.push(n);
            n = [];
          } else {
            (t = e2()(t)).characters = s.shift();
            n.push(t);
            r.push(n);
            n = [];
            let a = s.pop();
            r.push(...s.map(e => ((t = e2()(t)).characters = e, [t])));
            (t = e2()(t)).characters = a;
            a === '' ? e[i + 1] || r.push([t]) : n.push(t);
          }
        } else {
          n.push(t);
        }
      });
      n.length && r.push(n);
      t && r.forEach(e => {
        let t = e[e.length - 1];
        t.characters = t.characters.replace(s, '');
      });
      i && (r = r.filter(e => e.filter(e => e.characters.replace(s, '') !== '').length !== 0));
      return r;
    }(e9(e));
    let u = [];
    for (let [n, r] of c.entries()) {
      if (r.length !== 1 || r[0].characters !== '') {
        for (let [n, a] of r.entries()) {
          let n = a.characters.replace('\n', '').replace(/^(\s+)/, '').replace(/(\s+)$/, '');
          if (n === '') continue;
          let {
            characters,
            ...o
          } = a;
          let d = new ek();
          if (tt(e, d, o, t), ti(e, d, hints, o, t, {
            colorProfile: l
          }), !d.difference(i).isEmpty() && !u.some(e => e.styleMap.difference(d).isEmpty())) {
            let t;
            if (a.textStyleId) {
              let i = V$({
                textStyleId: a.textStyleId
              }, e.nodeCache.stylesResolver);
              oQ(i) && (t = i.name);
            }
            u.push({
              styleMap: d,
              text: n.substring(0, 10) + (n.length > 10 ? '...' : ''),
              styleName: t
            });
          }
        }
      }
    }
    let {
      fallbackHints,
      fallbackStyleMap
    } = l === ColorSpaceEnum.DISPLAY_P3 ? function ({
      node: e,
      styleMap: t,
      hints: i,
      preferences: n
    }) {
      let a = new ek();
      ti(e, a, i, te(e), n, {
        colorProfile: ColorSpaceEnum.SRGB,
        colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB
      });
      ta(e, a, i, n, {
        colorProfile: ColorSpaceEnum.SRGB,
        colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB
      });
      tr(e, a, i, n, {
        colorProfile: ColorSpaceEnum.SRGB,
        colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB
      });
      tn(e, a, i, te(e), n, {
        colorProfile: ColorSpaceEnum.SRGB,
        colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB
      });
      return {
        fallbackStyleMap: a = a.difference(t),
        fallbackHints: Object.fromEntries(a.keys().map(e => [e, A2.DisplayP3Fallback]))
      };
    }({
      node: e,
      styleMap: i,
      hints,
      preferences: t
    }) : {
      fallbackHints: {},
      fallbackStyleMap: new ek()
    };
    ts(e, i, n, t);
    ts(e, fallbackStyleMap, n, t);
    return {
      styleMap: i,
      hints: {
        ...hints,
        ...d
      },
      suggestedVars: n,
      fallbackHints,
      fallbackStyleMap,
      spans: u
    };
  }(e, t)) : e instanceof _$$j ? Promise.resolve(eq(e, t)) : e instanceof _$$B ? {
    styleMap: new ek(),
    hints: {},
    suggestedVars: new _$$E()
  } : {
    styleMap: new ek(),
    suggestedVars: new _$$E()
  };
}
async function tm(e, t) {
  let i;
  let {
    styleMap,
    hints,
    fallbackStyleMap,
    fallbackHints,
    spans,
    suggestedVars
  } = await tp(e, t);
  if (styleMap.isEmpty()) return [];
  let d = ['background', 'background-blend-mode', 'opacity', 'mix-blend-mode', 'background-clip', '-webkit-background-clip', '-webkit-text-fill-color'];
  let c = ['width', 'height', 'min-width', 'max-width', 'min-height', 'max-height', 'flex-grow', 'flex-shrink', 'align-self', 'flex', 'flex-wrap', 'display', 'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'flex-direction', 'justify-content', 'align-items', 'align-content', 'gap', 'transform', 'row-gap', 'column-gap', '-webkit-line-clamp', '-webkit-box-orient', 'aspect-ratio', 'grid-column', 'grid-row', 'grid-template-rows', 'grid-template-columns', 'justify-self'];
  let p = ['left', 'right', 'top', 'bottom', 'position'];
  let m = ['absolute'];
  let h = ['border', 'border-bottom', 'border-top', 'border-left', 'border-right', 'border-radius'];
  let g = ['font-family', 'font-size', 'font-weight', 'font-style', 'font-variant', 'text-decoration-line', 'text-decoration-style', 'text-decoration-skip-ink', 'text-decoration-color', 'text-decoration-thickness', 'text-underline-offset', 'text-underline-position', 'letter-spacing', 'text-transform', 'line-height', '-webkit-text-stroke-color', '-webkit-text-stroke-width'];
  let f = ['color', 'text-align', 'leading-trim', 'text-edge', 'font-kerning', 'font-variant-numeric', 'font-feature-settings', 'text-overflow', 'white-space', 'overflow'];
  let y = ['text-shadow'];
  let v = ['box-shadow', 'filter', 'backdrop-filter'];
  let I = ['stroke', 'stroke-width', 'fill'];
  let E = [];
  let S = [];
  let w = [];
  let C = [];
  let R = [];
  let N = [];
  let P = [];
  let O = [];
  let D = styleMap.filterDefaultValues();
  [...jO(fallbackStyleMap?.filterDefaultValues().getStyles() ?? {}).map(e => ({
    isFallback: !0,
    style: e
  })), ...jO(D.getStyles()).map(e => ({
    isFallback: !1,
    style: e
  }))].sort((e, t) => tc(e.style, t.style)).forEach(({
    isFallback: e,
    style: i
  }) => {
    let [n, a] = i;
    if (vy(t) && c.includes(n) || KY(t) && [...d, 'color'].includes(n)) return;
    let o = e ? fallbackHints?.[n] : hints?.[n];
    let u = tu(n, a, 0, t, o);
    if (suggestedVars && suggestedVars.has(n)) {
      let e = suggestedVars.get(n);
      for (let [t, i] of (u.matchingVars = {}, Object.entries(e))) u.matchingVars[t] = i;
    }
    d.includes(n) || h.includes(n) || I.includes(n) ? P.push(u) : v.includes(n) ? O.push(u) : c.includes(n) ? E.push(u) : p.includes(n) ? n === 'position' ? m.includes(`${a}`) && S.push(u) : S.push(u) : g.includes(n) ? C.push(u) : y.includes(n) ? R.push(u) : f.includes(n) ? N.push(u) : w.push(u);
  });
  let L = e instanceof _$$z;
  if (L && oQ(e.textStyle)) {
    i = e.textStyle.name;
  } else if (L && e.textSegments[0].textStyleId) {
    let t = V$({
      textStyleId: e.textSegments[0].textStyleId
    }, e.nodeCache.stylesResolver);
    oQ(t) && (i = t.name);
  }
  let F = L ? [...N, ...(oQ(e.effectStyle) && R.length > 0 ? [n8(''), n8(`/* ${e.effectStyle.name} */`)] : []), ...R, ...(i && C.length > 0 ? [n8(''), n8(`/* ${i} */`)] : []), ...C] : [];
  let M = [...P, ...('effectStyle' in e && oQ(e.effectStyle) && O.length > 0 ? [n8(''), n8(`/* ${e.effectStyle.name} */`)] : []), ...O];
  let j = styleMap.filterDefaultValues();
  let U = [{
    lines: E,
    name: 'Layout',
    variableKeys: ['width', 'height', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'itemSpacing']
  }, {
    lines: S,
    name: 'Position',
    variableKeys: []
  }, {
    lines: w,
    name: 'Other',
    variableKeys: []
  }, {
    lines: F,
    name: 'Typography',
    variableKeys: ['fontFamily', 'fontSize', 'lineHeight']
  }, {
    lines: M,
    name: 'Style',
    variableKeys: ['fills', 'opacity', 'strokes', 'topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius', 'strokeWeight', 'strokeTopWeight', 'strokeRightWeight', 'strokeBottomWeight', 'strokeLeftWeight']
  }].filter(({
    lines: e
  }) => e.length > 0).map(({
    lines: t,
    name: i,
    variableKeys: n
  }) => ({
    name: i,
    language: 'css',
    lines: t,
    matchingVars: n.flatMap(t => !function (e, t) {
      switch (e) {
        case 'fills':
          return t.has('background');
        case 'strokes':
          return t.has('border') || t.has('border-top') || t.has('border-right') || t.has('border-bottom') || t.has('border-left');
        case 'height':
          return t.has('height');
        case 'width':
          return t.has('width');
        case 'characters':
          break;
        case 'itemSpacing':
        case 'counterAxisSpacing':
          return t.has('gap');
        case 'paddingLeft':
          return t.has('padding') || t.has('padding-left');
        case 'paddingRight':
          return t.has('padding') || t.has('padding-right');
        case 'paddingTop':
          return t.has('padding') || t.has('padding-top');
        case 'paddingBottom':
          return t.has('padding') || t.has('padding-bottom');
        case 'topLeftRadius':
        case 'topRightRadius':
        case 'bottomLeftRadius':
        case 'bottomRightRadius':
          return t.has('border-radius');
        case 'minWidth':
          return t.has('min-width');
        case 'maxWidth':
          return t.has('max-width');
        case 'minHeight':
          return t.has('min-height');
        case 'maxHeight':
          return t.has('max-height');
        case 'strokeWeight':
          return t.has('border');
        case 'strokeTopWeight':
          return t.has('border') || t.has('border-top');
        case 'strokeRightWeight':
          return t.has('border') || t.has('border-right');
        case 'strokeBottomWeight':
          return t.has('border') || t.has('border-bottom');
        case 'strokeLeftWeight':
          return t.has('border') || t.has('border-left');
        case 'opacity':
          return t.has('opacity');
        case 'gridRowGap':
          return t.has('row-gap');
        case 'gridColumnGap':
          return t.has('column-gap');
        case 'fontFamily':
          return t.has('font-family');
        case 'fontSize':
          return t.has('font-size');
        case 'lineHeight':
          return t.has('line-height');
      }
      return !1;
    }(t, j) ? void 0 : nK(t, e)).filter(e => !!e)
  }));
  if (spans && spans.map(({
    text: e,
    styleMap: i,
    styleName: n
  }) => {
    let r = [];
    let a = [];
    jO(i.filterDefaultValues().getStyles()).sort((e, t) => tc(e, t)).forEach(e => {
      let [i, n] = e;
      let s = tu(i, n, 0, t);
      g.includes(i) ? a.push(s) : r.push(s);
    });
    U.push({
      name: `"${e}"`,
      isTextSegment: !0,
      language: 'css',
      lines: [...r, ...(n ? [n8(''), n8(`/* ${n} */`)] : []), ...a]
    });
  }), e instanceof _$$a && !t.isExportRestricted) {
    try {
      let t = await e.getDocumentAsync();
      U.push({
        name: 'SVG',
        language: 'html',
        lines: function (e) {
          let t = e.split('\n').map(e => e.trim());
          let i = 0;
          return t.map(e => {
            let t;
            e.startsWith('</') ? (i--, t = n8(e, i)) : e.startsWith('<') && !e.endsWith('/>') ? (t = n8(e, i), i++) : t = n8(e, i);
            return t;
          });
        }(t.documentElement.outerHTML)
      });
    } catch {}
  }
  return U;
}
async function th(e, t) {
  return {
    sections: await tm(e, t)
  };
}
let tg = JSON.parse('{"block":{"display":"block"},"flex":{"display":"flex"},"grid":{"display":"grid"},"hidden":{"display":"none"},"inline":{"display":"inline"},"inlineBlock":{"display":"inline-block"},"inlineFlex":{"display":"inline-flex"},"contentCenter":{"alignContent":"center"},"itemsBaseline":{"alignItems":"baseline"},"itemsCenter":{"alignItems":"center"},"itemsEnd":{"alignItems":"flex-end"},"itemsStart":{"alignItems":"flex-start"},"itemsStretch":{"alignItems":"stretch"},"itemSelfStretch":{"alignSelf":"stretch"},"itemSelfCenter":{"alignSelf":"center"},"itemSelfStart":{"alignSelf":"flex-start"},"selfCenter":{"placeSelf":"center"},"justifyCenter":{"justifyContent":"center"},"justifyEnd":{"justifyContent":"flex-end"},"justifyBetween":{"justifyContent":"space-between"},"justifyStart":{"justifyContent":"flex-start"},"flexColumn":{"flexDirection":"column"},"flexColumnReverse":{"flexDirection":"column-reverse"},"flexRow":{"flexDirection":"row"},"flexRowReverse":{"flexDirection":"row-reverse"},"flexRowNoWrap":{"flexFlow":"row nowrap"},"flexGrow0":{"flexGrow":"0"},"flexGrow1":{"flexGrow":"1"},"flexShrink0":{"flexShrink":"0"},"flexShrink1":{"flexShrink":"1"},"flexNowrap":{"flexWrap":"nowrap"},"flexWrap":{"flexWrap":"wrap"},"flexBasis0":{"flexBasis":"0"},"flexBasisAuto":{"flexBasis":"auto"},"gridColumnStart1":{"gridColumnStart":"1"},"gridColumnStart2":{"gridColumnStart":"2"},"gridColumnStart3":{"gridColumnStart":"3"},"gridColumnStart4":{"gridColumnStart":"4"},"gridColumnStart5":{"gridColumnStart":"5"},"gridColumnStart6":{"gridColumnStart":"6"},"gridColumnStart7":{"gridColumnStart":"7"},"gridColumnStart8":{"gridColumnStart":"8"},"gridColumnStart9":{"gridColumnStart":"9"},"gridColumnStart10":{"gridColumnStart":"10"},"gridColumnStart11":{"gridColumnStart":"11"},"gridColumnStart12":{"gridColumnStart":"12"},"gridColumnStart13":{"gridColumnStart":"13"},"gridColumnStart14":{"gridColumnStart":"14"},"gridColumnStart15":{"gridColumnStart":"15"},"gridColumnStart16":{"gridColumnStart":"16"},"gridColumnStart17":{"gridColumnStart":"17"},"gridColumnStart18":{"gridColumnStart":"18"},"gridColumnStart19":{"gridColumnStart":"19"},"gridColumnStart20":{"gridColumnStart":"20"},"gridColumnStart21":{"gridColumnStart":"21"},"gridColumnStart22":{"gridColumnStart":"22"},"gridColumnStart23":{"gridColumnStart":"23"},"gridColumnStart24":{"gridColumnStart":"24"},"gridColumnStart25":{"gridColumnStart":"25"},"gridColumnStart26":{"gridColumnStart":"26"},"gridColumnStart27":{"gridColumnStart":"27"},"gridColumnStart28":{"gridColumnStart":"28"},"gridColumnStart29":{"gridColumnStart":"29"},"gridColumnStart30":{"gridColumnStart":"30"},"gridColumnStart31":{"gridColumnStart":"31"},"gridColumnStart32":{"gridColumnStart":"32"},"gridColumnEnd1":{"gridColumnEnd":"1"},"gridColumnEnd2":{"gridColumnEnd":"2"},"gridColumnEnd3":{"gridColumnEnd":"3"},"gridColumnEnd4":{"gridColumnEnd":"4"},"gridColumnEnd5":{"gridColumnEnd":"5"},"gridColumnEnd6":{"gridColumnEnd":"6"},"gridColumnEnd7":{"gridColumnEnd":"7"},"gridColumnEnd8":{"gridColumnEnd":"8"},"gridColumnEnd9":{"gridColumnEnd":"9"},"gridColumnEnd10":{"gridColumnEnd":"10"},"gridColumnEnd11":{"gridColumnEnd":"11"},"gridColumnEnd12":{"gridColumnEnd":"12"},"gridColumnEnd13":{"gridColumnEnd":"13"},"gridColumnEnd14":{"gridColumnEnd":"14"},"gridColumnEnd15":{"gridColumnEnd":"15"},"gridColumnEnd16":{"gridColumnEnd":"16"},"gridColumnEnd17":{"gridColumnEnd":"17"},"gridColumnEnd18":{"gridColumnEnd":"18"},"gridColumnEnd19":{"gridColumnEnd":"19"},"gridColumnEnd20":{"gridColumnEnd":"20"},"gridColumnEnd21":{"gridColumnEnd":"21"},"gridColumnEnd22":{"gridColumnEnd":"22"},"gridColumnEnd23":{"gridColumnEnd":"23"},"gridColumnEnd24":{"gridColumnEnd":"24"},"gridColumnEnd25":{"gridColumnEnd":"25"},"gridColumnEnd26":{"gridColumnEnd":"26"},"gridColumnEnd27":{"gridColumnEnd":"27"},"gridColumnEnd28":{"gridColumnEnd":"28"},"gridColumnEnd29":{"gridColumnEnd":"29"},"gridColumnEnd30":{"gridColumnEnd":"30"},"gridColumnEnd31":{"gridColumnEnd":"31"},"gridColumnEnd32":{"gridColumnEnd":"32"},"gridColumnEndSpan1":{"gridColumnEnd":"span 1"},"gridColumnEndSpan2":{"gridColumnEnd":"span 2"},"gridColumnEndSpan3":{"gridColumnEnd":"span 3"},"gridColumnEndSpan4":{"gridColumnEnd":"span 4"},"gridColumnEndSpan5":{"gridColumnEnd":"span 5"},"gridColumnEndSpan6":{"gridColumnEnd":"span 6"},"gridColumnEndSpan7":{"gridColumnEnd":"span 7"},"gridColumnEndSpan8":{"gridColumnEnd":"span 8"},"gridColumnEndSpan9":{"gridColumnEnd":"span 9"},"gridColumnEndSpan10":{"gridColumnEnd":"span 10"},"gridTemplateColumns1":{"gridTemplateColumns":"repeat(1, 1fr)"},"gridTemplateColumns2":{"gridTemplateColumns":"repeat(2, 1fr)"},"gridTemplateColumns3":{"gridTemplateColumns":"repeat(3, 1fr)"},"gridTemplateColumns4":{"gridTemplateColumns":"repeat(4, 1fr)"},"gridTemplateColumns5":{"gridTemplateColumns":"repeat(5, 1fr)"},"gridTemplateRows1":{"gridTemplateRows":"repeat(1, 1fr)"},"gridTemplateRows2":{"gridTemplateRows":"repeat(2, 1fr)"},"gridTemplateRows3":{"gridTemplateRows":"repeat(3, 1fr)"},"gridTemplateRows4":{"gridTemplateRows":"repeat(4, 1fr)"},"gridTemplateRows5":{"gridTemplateRows":"repeat(5, 1fr)"},"overflowAuto":{"overflow":"auto"},"overflowHidden":{"overflow":"hidden"},"overflowBreakWord":{"overflowWrap":"break-word"},"overflowXHidden":{"overflowX":"hidden"},"overflowYScroll":{"overflowY":"scroll"},"ellipsis":{"textOverflow":"ellipsis"},"overflowWrapAnywhere":{"overflowWrap":"anywhere"},"opacity0":{"opacity":"0"},"opacity0_3":{"opacity":"0.3"},"opacity0_5":{"opacity":"0.5"},"opacity1":{"opacity":"1"},"absolute":{"position":"absolute"},"fixed":{"position":"fixed"},"relative":{"position":"relative"},"sticky":{"position":"sticky"},"topHalf":{"top":"50%"},"topToolbarHeight":{"top":"var(--toolbar-height)"},"top0":{"top":"0"},"right0":{"right":"0"},"bottom0":{"bottom":"0"},"left0":{"left":"0"},"leftHalf":{"left":"50%"},"bgContain":{"backgroundSize":"contain"},"bgCover":{"backgroundSize":"cover"},"bgNoRepeat":{"backgroundRepeat":"no-repeat"},"bgPosCenter":{"backgroundPosition":"center"},"bgClipPaddingBox":{"backgroundClip":"padding-box"},"bgTransparent":{"backgroundColor":"transparent"},"bgNone":{"backgroundColor":"initial"},"bSolid":{"borderStyle":"solid"},"bRadiusDefault":{"borderRadius":"constants.defaultCornerRadius"},"bRadiusFull":{"borderRadius":"100%"},"bRadius1":{"borderRadius":"1px"},"bRadius2":{"borderRadius":"2px"},"bRadius3":{"borderRadius":"3px"},"bRadius4":{"borderRadius":"4px"},"bRadiusHalf":{"borderRadius":"50%"},"bRadius5":{"borderRadius":"5px"},"bRadius6":{"borderRadius":"6px"},"bRadius7":{"borderRadius":"7px"},"bRadius8":{"borderRadius":"8px"},"bt0":{"borderTopWidth":"0"},"br0":{"borderRightWidth":"0"},"bb0":{"borderBottomWidth":"0"},"bl0":{"borderLeftWidth":"0"},"bt1":{"borderTopWidth":"1px"},"br1":{"borderRightWidth":"1px"},"bb1":{"borderBottomWidth":"1px"},"bl1":{"borderLeftWidth":"1px"},"bt2":{"borderTopWidth":"2px"},"br2":{"borderRightWidth":"2px"},"bb2":{"borderBottomWidth":"2px"},"bl2":{"borderLeftWidth":"2px"},"radiusFull":{"borderRadius":"var(--radius-full)"},"radiusLarge":{"borderRadius":"var(--radius-large)"},"radiusMedium":{"borderRadius":"var(--radius-medium)"},"radiusSmall":{"borderRadius":"var(--radius-small)"},"radiusNone":{"borderRadius":"var(--radius-none)"},"colorBg":{"backgroundColor":"var(--color-bg, var(--fallback-color-bg))"},"colorBgAssistive":{"backgroundColor":"var(--color-bg-assistive, var(--fallback-color-bg-assistive))"},"colorBgAssistiveHover":{"backgroundColor":"var(--color-bg-assistive-hover, var(--fallback-color-bg-assistive-hover))"},"colorBgAssistivePressed":{"backgroundColor":"var(--color-bg-assistive-pressed, var(--fallback-color-bg-assistive-pressed))"},"colorBgAssistiveSecondary":{"backgroundColor":"var(--color-bg-assistive-secondary, var(--fallback-color-bg-assistive-secondary))"},"colorBgAssistiveTertiary":{"backgroundColor":"var(--color-bg-assistive-tertiary, var(--fallback-color-bg-assistive-tertiary))"},"colorBgBrand":{"backgroundColor":"var(--color-bg-brand, var(--fallback-color-bg-brand))"},"colorBgBrandHover":{"backgroundColor":"var(--color-bg-brand-hover, var(--fallback-color-bg-brand-hover))"},"colorBgBrandPressed":{"backgroundColor":"var(--color-bg-brand-pressed, var(--fallback-color-bg-brand-pressed))"},"colorBgBrandSecondary":{"backgroundColor":"var(--color-bg-brand-secondary, var(--fallback-color-bg-brand-secondary))"},"colorBgBrandTertiary":{"backgroundColor":"var(--color-bg-brand-tertiary, var(--fallback-color-bg-brand-tertiary))"},"colorBgComponent":{"backgroundColor":"var(--color-bg-component, var(--fallback-color-bg-component))"},"colorBgComponentHover":{"backgroundColor":"var(--color-bg-component-hover, var(--fallback-color-bg-component-hover))"},"colorBgComponentPressed":{"backgroundColor":"var(--color-bg-component-pressed, var(--fallback-color-bg-component-pressed))"},"colorBgComponentSecondary":{"backgroundColor":"var(--color-bg-component-secondary, var(--fallback-color-bg-component-secondary))"},"colorBgComponentTertiary":{"backgroundColor":"var(--color-bg-component-tertiary, var(--fallback-color-bg-component-tertiary))"},"colorBgDanger":{"backgroundColor":"var(--color-bg-danger, var(--fallback-color-bg-danger))"},"colorBgDangerHover":{"backgroundColor":"var(--color-bg-danger-hover, var(--fallback-color-bg-danger-hover))"},"colorBgDangerPressed":{"backgroundColor":"var(--color-bg-danger-pressed, var(--fallback-color-bg-danger-pressed))"},"colorBgDangerSecondary":{"backgroundColor":"var(--color-bg-danger-secondary, var(--fallback-color-bg-danger-secondary))"},"colorBgDangerTertiary":{"backgroundColor":"var(--color-bg-danger-tertiary, var(--fallback-color-bg-danger-tertiary))"},"colorBgDesign":{"backgroundColor":"var(--color-bg-design, var(--fallback-color-bg-design))"},"colorBgDesignHover":{"backgroundColor":"var(--color-bg-design-hover, var(--fallback-color-bg-design-hover))"},"colorBgDesignPressed":{"backgroundColor":"var(--color-bg-design-pressed, var(--fallback-color-bg-design-pressed))"},"colorBgDesignSecondary":{"backgroundColor":"var(--color-bg-design-secondary, var(--fallback-color-bg-design-secondary))"},"colorBgDesignTertiary":{"backgroundColor":"var(--color-bg-design-tertiary, var(--fallback-color-bg-design-tertiary))"},"colorBgDisabled":{"backgroundColor":"var(--color-bg-disabled, var(--fallback-color-bg-disabled))"},"colorBgDisabledSecondary":{"backgroundColor":"var(--color-bg-disabled-secondary, var(--fallback-color-bg-disabled-secondary))"},"colorBgFigjam":{"backgroundColor":"var(--color-bg-figjam, var(--fallback-color-bg-figjam))"},"colorBgFigjamHover":{"backgroundColor":"var(--color-bg-figjam-hover, var(--fallback-color-bg-figjam-hover))"},"colorBgFigjamPressed":{"backgroundColor":"var(--color-bg-figjam-pressed, var(--fallback-color-bg-figjam-pressed))"},"colorBgFigjamSecondary":{"backgroundColor":"var(--color-bg-figjam-secondary, var(--fallback-color-bg-figjam-secondary))"},"colorBgFigjamTertiary":{"backgroundColor":"var(--color-bg-figjam-tertiary, var(--fallback-color-bg-figjam-tertiary))"},"colorBgHover":{"backgroundColor":"var(--color-bg-hover, var(--fallback-color-bg-hover))"},"colorBgInfo":{"backgroundColor":"var(--color-bg-info, var(--fallback-color-bg-info))"},"colorBgInverse":{"backgroundColor":"var(--color-bg-inverse, var(--fallback-color-bg-inverse))"},"colorBgMenu":{"backgroundColor":"var(--color-bg-menu, var(--fallback-color-bg-menu))"},"colorBgMenuDisabled":{"backgroundColor":"var(--color-bg-menu-disabled, var(--fallback-color-bg-menu-disabled))"},"colorBgMenuHover":{"backgroundColor":"var(--color-bg-menu-hover, var(--fallback-color-bg-menu-hover))"},"colorBgMenuPressed":{"backgroundColor":"var(--color-bg-menu-pressed, var(--fallback-color-bg-menu-pressed))"},"colorBgMenuSecondary":{"backgroundColor":"var(--color-bg-menu-secondary, var(--fallback-color-bg-menu-secondary))"},"colorBgMenuSelected":{"backgroundColor":"var(--color-bg-menu-selected, var(--fallback-color-bg-menu-selected))"},"colorBgMenuSelectedHover":{"backgroundColor":"var(--color-bg-menu-selected-hover, var(--fallback-color-bg-menu-selected-hover))"},"colorBgMenuSelectedPressed":{"backgroundColor":"var(--color-bg-menu-selected-pressed, var(--fallback-color-bg-menu-selected-pressed))"},"colorBgMenuSelectedSecondary":{"backgroundColor":"var(--color-bg-menu-selected-secondary, var(--fallback-color-bg-menu-selected-secondary))"},"colorBgMenuSelectedTertiary":{"backgroundColor":"var(--color-bg-menu-selected-tertiary, var(--fallback-color-bg-menu-selected-tertiary))"},"colorBgMenuTertiary":{"backgroundColor":"var(--color-bg-menu-tertiary, var(--fallback-color-bg-menu-tertiary))"},"colorBgOnselected":{"backgroundColor":"var(--color-bg-onselected, var(--fallback-color-bg-onselected))"},"colorBgOnselectedHover":{"backgroundColor":"var(--color-bg-onselected-hover, var(--fallback-color-bg-onselected-hover))"},"colorBgOnselectedPressed":{"backgroundColor":"var(--color-bg-onselected-pressed, var(--fallback-color-bg-onselected-pressed))"},"colorBgPressed":{"backgroundColor":"var(--color-bg-pressed, var(--fallback-color-bg-pressed))"},"colorBgSecondary":{"backgroundColor":"var(--color-bg-secondary, var(--fallback-color-bg-secondary))"},"colorBgSelected":{"backgroundColor":"var(--color-bg-selected, var(--fallback-color-bg-selected))"},"colorBgSelectedHover":{"backgroundColor":"var(--color-bg-selected-hover, var(--fallback-color-bg-selected-hover))"},"colorBgSelectedPressed":{"backgroundColor":"var(--color-bg-selected-pressed, var(--fallback-color-bg-selected-pressed))"},"colorBgSelectedSecondary":{"backgroundColor":"var(--color-bg-selected-secondary, var(--fallback-color-bg-selected-secondary))"},"colorBgSelectedStrong":{"backgroundColor":"var(--color-bg-selected-strong, var(--fallback-color-bg-selected-strong))"},"colorBgSelectedTertiary":{"backgroundColor":"var(--color-bg-selected-tertiary, var(--fallback-color-bg-selected-tertiary))"},"colorBgSuccess":{"backgroundColor":"var(--color-bg-success, var(--fallback-color-bg-success))"},"colorBgSuccessHover":{"backgroundColor":"var(--color-bg-success-hover, var(--fallback-color-bg-success-hover))"},"colorBgSuccessPressed":{"backgroundColor":"var(--color-bg-success-pressed, var(--fallback-color-bg-success-pressed))"},"colorBgSuccessSecondary":{"backgroundColor":"var(--color-bg-success-secondary, var(--fallback-color-bg-success-secondary))"},"colorBgSuccessTertiary":{"backgroundColor":"var(--color-bg-success-tertiary, var(--fallback-color-bg-success-tertiary))"},"colorBgTertiary":{"backgroundColor":"var(--color-bg-tertiary, var(--fallback-color-bg-tertiary))"},"colorBgToolbar":{"backgroundColor":"var(--color-bg-toolbar, var(--fallback-color-bg-toolbar))"},"colorBgToolbarDisabled":{"backgroundColor":"var(--color-bg-toolbar-disabled, var(--fallback-color-bg-toolbar-disabled))"},"colorBgToolbarHover":{"backgroundColor":"var(--color-bg-toolbar-hover, var(--fallback-color-bg-toolbar-hover))"},"colorBgToolbarPressed":{"backgroundColor":"var(--color-bg-toolbar-pressed, var(--fallback-color-bg-toolbar-pressed))"},"colorBgToolbarSecondary":{"backgroundColor":"var(--color-bg-toolbar-secondary, var(--fallback-color-bg-toolbar-secondary))"},"colorBgToolbarSelected":{"backgroundColor":"var(--color-bg-toolbar-selected, var(--fallback-color-bg-toolbar-selected))"},"colorBgToolbarSelectedHover":{"backgroundColor":"var(--color-bg-toolbar-selected-hover, var(--fallback-color-bg-toolbar-selected-hover))"},"colorBgToolbarSelectedPressed":{"backgroundColor":"var(--color-bg-toolbar-selected-pressed, var(--fallback-color-bg-toolbar-selected-pressed))"},"colorBgToolbarSelectedSecondary":{"backgroundColor":"var(--color-bg-toolbar-selected-secondary, var(--fallback-color-bg-toolbar-selected-secondary))"},"colorBgToolbarSelectedTertiary":{"backgroundColor":"var(--color-bg-toolbar-selected-tertiary, var(--fallback-color-bg-toolbar-selected-tertiary))"},"colorBgToolbarTertiary":{"backgroundColor":"var(--color-bg-toolbar-tertiary, var(--fallback-color-bg-toolbar-tertiary))"},"colorBgTooltip":{"backgroundColor":"var(--color-bg-tooltip, var(--fallback-color-bg-tooltip))"},"colorBgTooltipDisabled":{"backgroundColor":"var(--color-bg-tooltip-disabled, var(--fallback-color-bg-tooltip-disabled))"},"colorBgTooltipHover":{"backgroundColor":"var(--color-bg-tooltip-hover, var(--fallback-color-bg-tooltip-hover))"},"colorBgTooltipPressed":{"backgroundColor":"var(--color-bg-tooltip-pressed, var(--fallback-color-bg-tooltip-pressed))"},"colorBgTooltipSecondary":{"backgroundColor":"var(--color-bg-tooltip-secondary, var(--fallback-color-bg-tooltip-secondary))"},"colorBgTooltipSelected":{"backgroundColor":"var(--color-bg-tooltip-selected, var(--fallback-color-bg-tooltip-selected))"},"colorBgTooltipSelectedHover":{"backgroundColor":"var(--color-bg-tooltip-selected-hover, var(--fallback-color-bg-tooltip-selected-hover))"},"colorBgTooltipSelectedPressed":{"backgroundColor":"var(--color-bg-tooltip-selected-pressed, var(--fallback-color-bg-tooltip-selected-pressed))"},"colorBgTooltipSelectedSecondary":{"backgroundColor":"var(--color-bg-tooltip-selected-secondary, var(--fallback-color-bg-tooltip-selected-secondary))"},"colorBgTooltipSelectedTertiary":{"backgroundColor":"var(--color-bg-tooltip-selected-tertiary, var(--fallback-color-bg-tooltip-selected-tertiary))"},"colorBgTooltipTertiary":{"backgroundColor":"var(--color-bg-tooltip-tertiary, var(--fallback-color-bg-tooltip-tertiary))"},"colorBgWarning":{"backgroundColor":"var(--color-bg-warning, var(--fallback-color-bg-warning))"},"colorBgWarningHover":{"backgroundColor":"var(--color-bg-warning-hover, var(--fallback-color-bg-warning-hover))"},"colorBgWarningPressed":{"backgroundColor":"var(--color-bg-warning-pressed, var(--fallback-color-bg-warning-pressed))"},"colorBgWarningSecondary":{"backgroundColor":"var(--color-bg-warning-secondary, var(--fallback-color-bg-warning-secondary))"},"colorBgWarningTertiary":{"backgroundColor":"var(--color-bg-warning-tertiary, var(--fallback-color-bg-warning-tertiary))"},"colorBorder":{"borderColor":"var(--color-border, var(--fallback-color-border))"},"colorBorderAssistive":{"borderColor":"var(--color-border-assistive, var(--fallback-color-border-assistive))"},"colorBorderAssistiveStrong":{"borderColor":"var(--color-border-assistive-strong, var(--fallback-color-border-assistive-strong))"},"colorBorderBg":{"borderColor":"var(--color-bg, var(--fallback-color-bg))"},"colorBorderBrand":{"borderColor":"var(--color-border-brand, var(--fallback-color-border-brand))"},"colorBorderBrandStrong":{"borderColor":"var(--color-border-brand-strong, var(--fallback-color-border-brand-strong))"},"colorBorderComponent":{"borderColor":"var(--color-border-component, var(--fallback-color-border-component))"},"colorBorderComponentStrong":{"borderColor":"var(--color-border-component-strong, var(--fallback-color-border-component-strong))"},"colorBorderComponentHover":{"borderColor":"var(--color-border-component-hover, var(--fallback-color-border-component-hover))"},"colorBorderDanger":{"borderColor":"var(--color-border-danger, var(--fallback-color-border-danger))"},"colorBorderDangerStrong":{"borderColor":"var(--color-border-danger-strong, var(--fallback-color-border-danger-strong))"},"colorBorderDesign":{"borderColor":"var(--color-border-design, var(--fallback-color-border-design))"},"colorBorderDesignStrong":{"borderColor":"var(--color-border-design-strong, var(--fallback-color-border-design-strong))"},"colorBorderDisabled":{"borderColor":"var(--color-border-disabled, var(--fallback-color-border-disabled))"},"colorBorderDisabledStrong":{"borderColor":"var(--color-border-disabled-strong, var(--fallback-color-border-disabled-strong))"},"colorBorderFigjam":{"borderColor":"var(--color-border-figjam, var(--fallback-color-border-figjam))"},"colorBorderFigjamStrong":{"borderColor":"var(--color-border-figjam-strong, var(--fallback-color-border-figjam-strong))"},"colorBorderMenu":{"borderColor":"var(--color-border-menu, var(--fallback-color-border-menu))"},"colorBorderMenuDisabled":{"borderColor":"var(--color-border-menu-disabled, var(--fallback-color-border-menu-disabled))"},"colorBorderMenuDisabledStrong":{"borderColor":"var(--color-border-menu-disabled-strong, var(--fallback-color-border-menu-disabled-strong))"},"colorBorderMenuOnselected":{"borderColor":"var(--color-border-menu-onselected, var(--fallback-color-border-menu-onselected))"},"colorBorderMenuOnselectedStrong":{"borderColor":"var(--color-border-menu-onselected-strong, var(--fallback-color-border-menu-onselected-strong))"},"colorBorderMenuSelected":{"borderColor":"var(--color-border-menu-selected, var(--fallback-color-border-menu-selected))"},"colorBorderMenuSelectedStrong":{"borderColor":"var(--color-border-menu-selected-strong, var(--fallback-color-border-menu-selected-strong))"},"colorBorderMenuStrong":{"borderColor":"var(--color-border-menu-strong, var(--fallback-color-border-menu-strong))"},"colorBorderOnassistive":{"borderColor":"var(--color-border-onassistive, var(--fallback-color-border-onassistive))"},"colorBorderOnassistiveStrong":{"borderColor":"var(--color-border-onassistive-strong, var(--fallback-color-border-onassistive-strong))"},"colorBorderOnbrand":{"borderColor":"var(--color-border-onbrand, var(--fallback-color-border-onbrand))"},"colorBorderOnbrandStrong":{"borderColor":"var(--color-border-onbrand-strong, var(--fallback-color-border-onbrand-strong))"},"colorBorderOncomponent":{"borderColor":"var(--color-border-oncomponent, var(--fallback-color-border-oncomponent))"},"colorBorderOncomponentStrong":{"borderColor":"var(--color-border-oncomponent-strong, var(--fallback-color-border-oncomponent-strong))"},"colorBorderOndanger":{"borderColor":"var(--color-border-ondanger, var(--fallback-color-border-ondanger))"},"colorBorderOndangerStrong":{"borderColor":"var(--color-border-ondanger-strong, var(--fallback-color-border-ondanger-strong))"},"colorBorderOndesign":{"borderColor":"var(--color-border-ondesign, var(--fallback-color-border-ondesign))"},"colorBorderOndesignStrong":{"borderColor":"var(--color-border-ondesign-strong, var(--fallback-color-border-ondesign-strong))"},"colorBorderOnfigjam":{"borderColor":"var(--color-border-onfigjam, var(--fallback-color-border-onfigjam))"},"colorBorderOnfigjamStrong":{"borderColor":"var(--color-border-onfigjam-strong, var(--fallback-color-border-onfigjam-strong))"},"colorBorderOnselected":{"borderColor":"var(--color-border-onselected, var(--fallback-color-border-onselected))"},"colorBorderOnselectedStrong":{"borderColor":"var(--color-border-onselected-strong, var(--fallback-color-border-onselected-strong))"},"colorBorderOnsuccess":{"borderColor":"var(--color-border-onsuccess, var(--fallback-color-border-onsuccess))"},"colorBorderOnsuccessStrong":{"borderColor":"var(--color-border-onsuccess-strong, var(--fallback-color-border-onsuccess-strong))"},"colorBorderOnwarning":{"borderColor":"var(--color-border-onwarning, var(--fallback-color-border-onwarning))"},"colorBorderOnwarningStrong":{"borderColor":"var(--color-border-onwarning-strong, var(--fallback-color-border-onwarning-strong))"},"colorBorderSelected":{"borderColor":"var(--color-border-selected, var(--fallback-color-border-selected))"},"colorBorderSelectedStrong":{"borderColor":"var(--color-border-selected-strong, var(--fallback-color-border-selected-strong))"},"colorBorderStrong":{"borderColor":"var(--color-border-strong, var(--fallback-color-border-strong))"},"colorBorderSuccess":{"borderColor":"var(--color-border-success, var(--fallback-color-border-success))"},"colorBorderSuccessStrong":{"borderColor":"var(--color-border-success-strong, var(--fallback-color-border-success-strong))"},"colorBorderToolbar":{"borderColor":"var(--color-border-toolbar, var(--fallback-color-border-toolbar))"},"colorBorderToolbarDisabled":{"borderColor":"var(--color-border-toolbar-disabled, var(--fallback-color-border-toolbar-disabled))"},"colorBorderToolbarOnselected":{"borderColor":"var(--color-border-toolbar-onselected, var(--fallback-color-border-toolbar-onselected))"},"colorBorderToolbarSelected":{"borderColor":"var(--color-border-toolbar-selected, var(--fallback-color-border-toolbar-selected))"},"colorBorderToolbarSelectedStrong":{"borderColor":"var(--color-border-toolbar-selected-strong, var(--fallback-color-border-toolbar-selected-strong))"},"colorBorderToolbarStrong":{"borderColor":"var(--color-border-toolbar-strong, var(--fallback-color-border-toolbar-strong))"},"colorBorderTooltip":{"borderColor":"var(--color-border-tooltip, var(--fallback-color-border-tooltip))"},"colorBorderTooltipDisabled":{"borderColor":"var(--color-border-tooltip-disabled, var(--fallback-color-border-tooltip-disabled))"},"colorBorderTooltipDisabledStrong":{"borderColor":"var(--color-border-tooltip-disabled-strong, var(--fallback-color-border-tooltip-disabled-strong))"},"colorBorderTooltipOnselected":{"borderColor":"var(--color-border-tooltip-onselected, var(--fallback-color-border-tooltip-onselected))"},"colorBorderTooltipOnselectedStrong":{"borderColor":"var(--color-border-tooltip-onselected-strong, var(--fallback-color-border-tooltip-onselected-strong))"},"colorBorderTooltipSelected":{"borderColor":"var(--color-border-tooltip-selected, var(--fallback-color-border-tooltip-selected))"},"colorBorderTooltipSelectedStrong":{"borderColor":"var(--color-border-tooltip-selected-strong, var(--fallback-color-border-tooltip-selected-strong))"},"colorBorderTooltipStrong":{"borderColor":"var(--color-border-tooltip-strong, var(--fallback-color-border-tooltip-strong))"},"colorBorderWarning":{"borderColor":"var(--color-border-warning, var(--fallback-color-border-warning))"},"colorBorderWarningStrong":{"borderColor":"var(--color-border-warning-strong, var(--fallback-color-border-warning-strong))"},"colorIcon":{"fill":"var(--color-icon, var(--fallback-color-icon))"},"colorIconAssistive":{"fill":"var(--color-icon-assistive, var(--fallback-color-icon-assistive))"},"colorIconAssistivePressed":{"fill":"var(--color-icon-assistive-pressed, var(--fallback-color-icon-assistive-pressed))"},"colorIconAssistiveSecondary":{"fill":"var(--color-icon-assistive-secondary, var(--fallback-color-icon-assistive-secondary))"},"colorIconAssistiveTertiary":{"fill":"var(--color-icon-assistive-tertiary, var(--fallback-color-icon-assistive-tertiary))"},"colorIconBrand":{"fill":"var(--color-icon-brand, var(--fallback-color-icon-brand))"},"colorIconBrandPressed":{"fill":"var(--color-icon-brand-pressed, var(--fallback-color-icon-brand-pressed))"},"colorIconBrandSecondary":{"fill":"var(--color-icon-brand-secondary, var(--fallback-color-icon-brand-secondary))"},"colorIconBrandTertiary":{"fill":"var(--color-icon-brand-tertiary, var(--fallback-color-icon-brand-tertiary))"},"colorIconComponent":{"fill":"var(--color-icon-component, var(--fallback-color-icon-component))"},"colorIconComponentPressed":{"fill":"var(--color-icon-component-pressed, var(--fallback-color-icon-component-pressed))"},"colorIconComponentSecondary":{"fill":"var(--color-icon-component-secondary, var(--fallback-color-icon-component-secondary))"},"colorIconComponentTertiary":{"fill":"var(--color-icon-component-tertiary, var(--fallback-color-icon-component-tertiary))"},"colorIconDanger":{"fill":"var(--color-icon-danger, var(--fallback-color-icon-danger))"},"colorIconDangerHover":{"fill":"var(--color-icon-danger-hover, var(--fallback-color-icon-danger-hover))"},"colorIconDangerPressed":{"fill":"var(--color-icon-danger-pressed, var(--fallback-color-icon-danger-pressed))"},"colorIconDangerSecondary":{"fill":"var(--color-icon-danger-secondary, var(--fallback-color-icon-danger-secondary))"},"colorIconDangerSecondaryHover":{"fill":"var(--color-icon-danger-secondary-hover, var(--fallback-color-icon-danger-secondary-hover))"},"colorIconDangerTertiary":{"fill":"var(--color-icon-danger-tertiary, var(--fallback-color-icon-danger-tertiary))"},"colorIconDesign":{"fill":"var(--color-icon-design, var(--fallback-color-icon-design))"},"colorIconDesignPressed":{"fill":"var(--color-icon-design-pressed, var(--fallback-color-icon-design-pressed))"},"colorIconDesignSecondary":{"fill":"var(--color-icon-design-secondary, var(--fallback-color-icon-design-secondary))"},"colorIconDesignTertiary":{"fill":"var(--color-icon-design-tertiary, var(--fallback-color-icon-design-tertiary))"},"colorIconDisabled":{"fill":"var(--color-icon-disabled, var(--fallback-color-icon-disabled))"},"colorIconFigjam":{"fill":"var(--color-icon-figjam, var(--fallback-color-icon-figjam))"},"colorIconFigjamPressed":{"fill":"var(--color-icon-figjam-pressed, var(--fallback-color-icon-figjam-pressed))"},"colorIconFigjamSecondary":{"fill":"var(--color-icon-figjam-secondary, var(--fallback-color-icon-figjam-secondary))"},"colorIconFigjamTertiary":{"fill":"var(--color-icon-figjam-tertiary, var(--fallback-color-icon-figjam-tertiary))"},"colorIconHover":{"fill":"var(--color-icon-hover, var(--fallback-color-icon-hover))"},"colorIconMenu":{"fill":"var(--color-icon-menu, var(--fallback-color-icon-menu))"},"colorIconMenuDanger":{"fill":"var(--color-icon-menu-danger, var(--fallback-color-icon-menu-danger))"},"colorIconMenuDisabled":{"fill":"var(--color-icon-menu-disabled, var(--fallback-color-icon-menu-disabled))"},"colorIconMenuHover":{"fill":"var(--color-icon-menu-hover, var(--fallback-color-icon-menu-hover))"},"colorIconMenuOndisabled":{"fill":"var(--color-icon-menu-ondisabled, var(--fallback-color-icon-menu-ondisabled))"},"colorIconMenuOnselected":{"fill":"var(--color-icon-menu-onselected, var(--fallback-color-icon-menu-onselected))"},"colorIconMenuPressed":{"fill":"var(--color-icon-menu-pressed, var(--fallback-color-icon-menu-pressed))"},"colorIconMenuSecondary":{"fill":"var(--color-icon-menu-secondary, var(--fallback-color-icon-menu-secondary))"},"colorIconMenuSecondaryHover":{"fill":"var(--color-icon-menu-secondary-hover, var(--fallback-color-icon-menu-secondary-hover))"},"colorIconMenuSelected":{"fill":"var(--color-icon-menu-selected, var(--fallback-color-icon-menu-selected))"},"colorIconMenuSelectedSecondary":{"fill":"var(--color-icon-menu-selected-secondary, var(--fallback-color-icon-menu-selected-secondary))"},"colorIconMenuSelectedTertiary":{"fill":"var(--color-icon-menu-selected-tertiary, var(--fallback-color-icon-menu-selected-tertiary))"},"colorIconMenuTertiary":{"fill":"var(--color-icon-menu-tertiary, var(--fallback-color-icon-menu-tertiary))"},"colorIconMenuTertiaryHover":{"fill":"var(--color-icon-menu-tertiary-hover, var(--fallback-color-icon-menu-tertiary-hover))"},"colorIconMenuWarning":{"fill":"var(--color-icon-menu-warning, var(--fallback-color-icon-menu-warning))"},"colorIconOnassistive":{"fill":"var(--color-icon-onassistive, var(--fallback-color-icon-onassistive))"},"colorIconOnassistiveSecondary":{"fill":"var(--color-icon-onassistive-secondary, var(--fallback-color-icon-onassistive-secondary))"},"colorIconOnassistiveTertiary":{"fill":"var(--color-icon-onassistive-tertiary, var(--fallback-color-icon-onassistive-tertiary))"},"colorIconOnbrand":{"fill":"var(--color-icon-onbrand, var(--fallback-color-icon-onbrand))"},"colorIconOnbrandSecondary":{"fill":"var(--color-icon-onbrand-secondary, var(--fallback-color-icon-onbrand-secondary))"},"colorIconOnbrandTertiary":{"fill":"var(--color-icon-onbrand-tertiary, var(--fallback-color-icon-onbrand-tertiary))"},"colorIconOncomponent":{"fill":"var(--color-icon-oncomponent, var(--fallback-color-icon-oncomponent))"},"colorIconOncomponentSecondary":{"fill":"var(--color-icon-oncomponent-secondary, var(--fallback-color-icon-oncomponent-secondary))"},"colorIconOncomponentTertiary":{"fill":"var(--color-icon-oncomponent-tertiary, var(--fallback-color-icon-oncomponent-tertiary))"},"colorIconOndanger":{"fill":"var(--color-icon-ondanger, var(--fallback-color-icon-ondanger))"},"colorIconOndangerSecondary":{"fill":"var(--color-icon-ondanger-secondary, var(--fallback-color-icon-ondanger-secondary))"},"colorIconOndangerTertiary":{"fill":"var(--color-icon-ondanger-tertiary, var(--fallback-color-icon-ondanger-tertiary))"},"colorIconOndesign":{"fill":"var(--color-icon-ondesign, var(--fallback-color-icon-ondesign))"},"colorIconOndesignSecondary":{"fill":"var(--color-icon-ondesign-secondary, var(--fallback-color-icon-ondesign-secondary))"},"colorIconOndesignTertiary":{"fill":"var(--color-icon-ondesign-tertiary, var(--fallback-color-icon-ondesign-tertiary))"},"colorIconOndisabled":{"fill":"var(--color-icon-ondisabled, var(--fallback-color-icon-ondisabled))"},"colorIconOnfigjam":{"fill":"var(--color-icon-onfigjam, var(--fallback-color-icon-onfigjam))"},"colorIconOnfigjamSecondary":{"fill":"var(--color-icon-onfigjam-secondary, var(--fallback-color-icon-onfigjam-secondary))"},"colorIconOnfigjamTertiary":{"fill":"var(--color-icon-onfigjam-tertiary, var(--fallback-color-icon-onfigjam-tertiary))"},"colorIconOninverse":{"fill":"var(--color-icon-oninverse, var(--fallback-color-icon-oninverse))"},"colorIconOnselected":{"fill":"var(--color-icon-onselected, var(--fallback-color-icon-onselected))"},"colorIconOnselectedSecondary":{"fill":"var(--color-icon-onselected-secondary, var(--fallback-color-icon-onselected-secondary))"},"colorIconOnselectedStrong":{"fill":"var(--color-icon-onselected-strong, var(--fallback-color-icon-onselected-strong))"},"colorIconOnselectedTertiary":{"fill":"var(--color-icon-onselected-tertiary, var(--fallback-color-icon-onselected-tertiary))"},"colorIconOnsuccess":{"fill":"var(--color-icon-onsuccess, var(--fallback-color-icon-onsuccess))"},"colorIconOnsuccessSecondary":{"fill":"var(--color-icon-onsuccess-secondary, var(--fallback-color-icon-onsuccess-secondary))"},"colorIconOnsuccessTertiary":{"fill":"var(--color-icon-onsuccess-tertiary, var(--fallback-color-icon-onsuccess-tertiary))"},"colorIconOnwarning":{"fill":"var(--color-icon-onwarning, var(--fallback-color-icon-onwarning))"},"colorIconOnwarningSecondary":{"fill":"var(--color-icon-onwarning-secondary, var(--fallback-color-icon-onwarning-secondary))"},"colorIconOnwarningTertiary":{"fill":"var(--color-icon-onwarning-tertiary, var(--fallback-color-icon-onwarning-tertiary))"},"colorIconPressed":{"fill":"var(--color-icon-pressed, var(--fallback-color-icon-pressed))"},"colorIconSecondary":{"fill":"var(--color-icon-secondary, var(--fallback-color-icon-secondary))"},"colorIconSecondaryHover":{"fill":"var(--color-icon-secondary-hover, var(--fallback-color-icon-secondary-hover))"},"colorIconSelected":{"fill":"var(--color-icon-selected, var(--fallback-color-icon-selected))"},"colorIconSelectedSecondary":{"fill":"var(--color-icon-selected-secondary, var(--fallback-color-icon-selected-secondary))"},"colorIconSelectedTertiary":{"fill":"var(--color-icon-selected-tertiary, var(--fallback-color-icon-selected-tertiary))"},"colorIconSuccess":{"fill":"var(--color-icon-success, var(--fallback-color-icon-success))"},"colorIconSuccessPressed":{"fill":"var(--color-icon-success-pressed, var(--fallback-color-icon-success-pressed))"},"colorIconSuccessSecondary":{"fill":"var(--color-icon-success-secondary, var(--fallback-color-icon-success-secondary))"},"colorIconSuccessTertiary":{"fill":"var(--color-icon-success-tertiary, var(--fallback-color-icon-success-tertiary))"},"colorIconTertiary":{"fill":"var(--color-icon-tertiary, var(--fallback-color-icon-tertiary))"},"colorIconTertiaryHover":{"fill":"var(--color-icon-tertiary-hover, var(--fallback-color-icon-tertiary-hover))"},"colorIconToolbar":{"fill":"var(--color-icon-toolbar, var(--fallback-color-icon-toolbar))"},"colorIconToolbarDanger":{"fill":"var(--color-icon-toolbar-danger, var(--fallback-color-icon-toolbar-danger))"},"colorIconToolbarDisabled":{"fill":"var(--color-icon-toolbar-disabled, var(--fallback-color-icon-toolbar-disabled))"},"colorIconToolbarHover":{"fill":"var(--color-icon-toolbar-hover, var(--fallback-color-icon-toolbar-hover))"},"colorIconToolbarOndisabled":{"fill":"var(--color-icon-toolbar-ondisabled, var(--fallback-color-icon-toolbar-ondisabled))"},"colorIconToolbarOnselected":{"fill":"var(--color-icon-toolbar-onselected, var(--fallback-color-icon-toolbar-onselected))"},"colorIconToolbarPressed":{"fill":"var(--color-icon-toolbar-pressed, var(--fallback-color-icon-toolbar-pressed))"},"colorIconToolbarSecondary":{"fill":"var(--color-icon-toolbar-secondary, var(--fallback-color-icon-toolbar-secondary))"},"colorIconToolbarSecondaryHover":{"fill":"var(--color-icon-toolbar-secondary-hover, var(--fallback-color-icon-toolbar-secondary-hover))"},"colorIconToolbarSelected":{"fill":"var(--color-icon-toolbar-selected, var(--fallback-color-icon-toolbar-selected))"},"colorIconToolbarSelectedSecondary":{"fill":"var(--color-icon-toolbar-selected-secondary,var(--fallback-color-icon-toolbar-selected-econdary))"},"colorIconToolbarSelectedTertiary":{"fill":"var(--color-icon-toolbar-selected-tertiary, var(--fallback-color-icon-toolbar-selected-tertiary))"},"colorIconToolbarTertiary":{"fill":"var(--color-icon-toolbar-tertiary, var(--fallback-color-icon-toolbar-tertiary))"},"colorIconToolbarTertiaryHover":{"fill":"var(--color-icon-toolbar-tertiary-hover, var(--fallback-color-icon-toolbar-tertiary-hover))"},"colorIconToolbarWarning":{"fill":"var(--color-icon-toolbar-warning, var(--fallback-color-icon-toolbar-warning))"},"colorIconTooltip":{"fill":"var(--color-icon-tooltip, var(--fallback-color-icon-tooltip))"},"colorIconTooltipDanger":{"fill":"var(--color-icon-tooltip-danger, var(--fallback-color-icon-tooltip-danger))"},"colorIconTooltipDisabled":{"fill":"var(--color-icon-tooltip-disabled, var(--fallback-color-icon-tooltip-disabled))"},"colorIconTooltipHover":{"fill":"var(--color-icon-tooltip-hover, var(--fallback-color-icon-tooltip-hover))"},"colorIconTooltipOndisabled":{"fill":"var(--color-icon-tooltip-ondisabled, var(--fallback-color-icon-tooltip-ondisabled))"},"colorIconTooltipOnselected":{"fill":"var(--color-icon-tooltip-onselected, var(--fallback-color-icon-tooltip-onselected))"},"colorIconTooltipPressed":{"fill":"var(--color-icon-tooltip-pressed, var(--fallback-color-icon-tooltip-pressed))"},"colorIconTooltipSecondary":{"fill":"var(--color-icon-tooltip-secondary, var(--fallback-color-icon-tooltip-secondary))"},"colorIconTooltipSecondaryHover":{"fill":"var(--color-icon-tooltip-secondary-hover, var(--fallback-color-icon-tooltip-secondary-hover))"},"colorIconTooltipSelected":{"fill":"var(--color-icon-tooltip-selected, var(--fallback-color-icon-tooltip-selected))"},"colorIconTooltipSelectedSecondary":{"fill":"var(--color-icon-tooltip-selected-secondary,var(--fallback-color-icon-tooltip-selected-econdary))"},"colorIconTooltipSelectedTertiary":{"fill":"var(--color-icon-tooltip-selected-tertiary, var(--fallback-color-icon-tooltip-selected-tertiary))"},"colorIconTooltipTertiary":{"fill":"var(--color-icon-tooltip-tertiary, var(--fallback-color-icon-tooltip-tertiary))"},"colorIconTooltipTertiaryHover":{"fill":"var(--color-icon-tooltip-tertiary-hover, var(--fallback-color-icon-tooltip-tertiary-hover))"},"colorIconTooltipWarning":{"fill":"var(--color-icon-tooltip-warning, var(--fallback-color-icon-tooltip-warning))"},"colorIconWarning":{"fill":"var(--color-icon-warning, var(--fallback-color-icon-warning))"},"colorIconWarningPressed":{"fill":"var(--color-icon-warning-pressed, var(--fallback-color-icon-warning-pressed))"},"colorIconWarningSecondary":{"fill":"var(--color-icon-warning-secondary, var(--fallback-color-icon-warning-secondary))"},"colorIconWarningTertiary":{"fill":"var(--color-icon-warning-tertiary, var(--fallback-color-icon-warning-tertiary))"},"colorText":{"color":"var(--color-text, var(--fallback-color-text))"},"colorTextAssistive":{"color":"var(--color-text-assistive, var(--fallback-color-text-assistive))"},"colorTextAssistivePressed":{"color":"var(--color-text-assistive-pressed, var(--fallback-color-text-assistive-pressed))"},"colorTextAssistiveSecondary":{"color":"var(--color-text-assistive-secondary, var(--fallback-color-text-assistive-secondary))"},"colorTextAssistiveTertiary":{"color":"var(--color-text-assistive-tertiary, var(--fallback-color-text-assistive-tertiary))"},"colorTextBrand":{"color":"var(--color-text-brand, var(--fallback-color-text-brand))"},"colorTextBrandSecondary":{"color":"var(--color-text-brand-secondary, var(--fallback-color-text-brand-secondary))"},"colorTextBrandTertiary":{"color":"var(--color-text-brand-tertiary, var(--fallback-color-text-brand-tertiary))"},"colorTextComponent":{"color":"var(--color-text-component, var(--fallback-color-text-component))"},"colorTextComponentPressed":{"color":"var(--color-text-component-pressed, var(--fallback-color-text-component-pressed))"},"colorTextComponentSecondary":{"color":"var(--color-text-component-secondary, var(--fallback-color-text-component-secondary))"},"colorTextComponentTertiary":{"color":"var(--color-text-component-tertiary, var(--fallback-color-text-component-tertiary))"},"colorTextDanger":{"color":"var(--color-text-danger, var(--fallback-color-text-danger))"},"colorTextDangerSecondary":{"color":"var(--color-text-danger-secondary, var(--fallback-color-text-danger-secondary))"},"colorTextDangerTertiary":{"color":"var(--color-text-danger-tertiary, var(--fallback-color-text-danger-tertiary))"},"colorTextDesign":{"color":"var(--color-text-design, var(--fallback-color-text-design))"},"colorTextDesignPressed":{"color":"var(--color-text-design-pressed, var(--fallback-color-text-design-pressed))"},"colorTextDesignSecondary":{"color":"var(--color-text-design-secondary, var(--fallback-color-text-design-secondary))"},"colorTextDesignTertiary":{"color":"var(--color-text-design-tertiary, var(--fallback-color-text-design-tertiary))"},"colorTextDisabled":{"color":"var(--color-text-disabled, var(--fallback-color-text-disabled))"},"colorTextFigjam":{"color":"var(--color-text-figjam, var(--fallback-color-text-figjam))"},"colorTextFigjamPressed":{"color":"var(--color-text-figjam-pressed, var(--fallback-color-text-figjam-pressed))"},"colorTextFigjamSecondary":{"color":"var(--color-text-figjam-secondary, var(--fallback-color-text-figjam-secondary))"},"colorTextFigjamTertiary":{"color":"var(--color-text-figjam-tertiary, var(--fallback-color-text-figjam-tertiary))"},"colorTextHover":{"color":"var(--color-text-hover, var(--fallback-color-text-hover))"},"colorTextMenu":{"color":"var(--color-text-menu, var(--fallback-color-text-menu))"},"colorTextMenuDanger":{"color":"var(--color-text-menu-danger, var(--fallback-color-text-menu-danger))"},"colorTextMenuDisabled":{"color":"var(--color-text-menu-disabled, var(--fallback-color-text-menu-disabled))"},"colorTextMenuHover":{"color":"var(--color-text-menu-hover, var(--fallback-color-text-menu-hover))"},"colorTextMenuOndisabled":{"color":"var(--color-text-menu-ondisabled, var(--fallback-color-text-menu-ondisabled))"},"colorTextMenuOnselected":{"color":"var(--color-text-menu-onselected, var(--fallback-color-text-menu-onselected))"},"colorTextMenuSecondary":{"color":"var(--color-text-menu-secondary, var(--fallback-color-text-menu-secondary))"},"colorTextMenuSecondaryHover":{"color":"var(--color-text-menu-secondary-hover, var(--fallback-color-text-menu-secondary-hover))"},"colorTextMenuSelected":{"color":"var(--color-text-menu-selected, var(--fallback-color-text-menu-selected))"},"colorTextMenuSelectedSecondary":{"color":"var(--color-text-menu-selected-secondary, var(--fallback-color-text-menu-selected-secondary))"},"colorTextMenuSelectedTertiary":{"color":"var(--color-text-menu-selected-tertiary, var(--fallback-color-text-menu-selected-tertiary))"},"colorTextMenuTertiary":{"color":"var(--color-text-menu-tertiary, var(--fallback-color-text-menu-tertiary))"},"colorTextMenuTertiaryHover":{"color":"var(--color-text-menu-tertiary-hover, var(--fallback-color-text-menu-tertiary-hover))"},"colorTextMenuWarning":{"color":"var(--color-text-menu-warning, var(--fallback-color-text-menu-warning))"},"colorTextOnassistive":{"color":"var(--color-text-onassistive, var(--fallback-color-text-onassistive))"},"colorTextOnassistiveSecondary":{"color":"var(--color-text-onassistive-secondary, var(--fallback-color-text-onassistive-secondary))"},"colorTextOnassistiveTertiary":{"color":"var(--color-text-onassistive-tertiary, var(--fallback-color-text-onassistive-tertiary))"},"colorTextOnbrand":{"color":"var(--color-text-onbrand, var(--fallback-color-text-onbrand))"},"colorTextOnbrandSecondary":{"color":"var(--color-text-onbrand-secondary, var(--fallback-color-text-onbrand-secondary))"},"colorTextOnbrandTertiary":{"color":"var(--color-text-onbrand-tertiary, var(--fallback-color-text-onbrand-tertiary))"},"colorTextOncomponent":{"color":"var(--color-text-oncomponent, var(--fallback-color-text-oncomponent))"},"colorTextOncomponentSecondary":{"color":"var(--color-text-oncomponent-secondary, var(--fallback-color-text-oncomponent-secondary))"},"colorTextOncomponentTertiary":{"color":"var(--color-text-oncomponent-tertiary, var(--fallback-color-text-oncomponent-tertiary))"},"colorTextOndanger":{"color":"var(--color-text-ondanger, var(--fallback-color-text-ondanger))"},"colorTextOndangerSecondary":{"color":"var(--color-text-ondanger-secondary, var(--fallback-color-text-ondanger-secondary))"},"colorTextOndangerTertiary":{"color":"var(--color-text-ondanger-tertiary, var(--fallback-color-text-ondanger-tertiary))"},"colorTextOndesign":{"color":"var(--color-text-ondesign, var(--fallback-color-text-ondesign))"},"colorTextOndesignSecondary":{"color":"var(--color-text-ondesign-secondary, var(--fallback-color-text-ondesign-secondary))"},"colorTextOndesignTertiary":{"color":"var(--color-text-ondesign-tertiary, var(--fallback-color-text-ondesign-tertiary))"},"colorTextOndisabled":{"color":"var(--color-text-ondisabled, var(--fallback-color-text-ondisabled))"},"colorTextOnfigjam":{"color":"var(--color-text-onfigjam, var(--fallback-color-text-onfigjam))"},"colorTextOnfigjamSecondary":{"color":"var(--color-text-onfigjam-secondary, var(--fallback-color-text-onfigjam-secondary))"},"colorTextOnfigjamTertiary":{"color":"var(--color-text-onfigjam-tertiary, var(--fallback-color-text-onfigjam-tertiary))"},"colorTextOninverse":{"color":"var(--color-text-oninverse, var(--fallback-color-text-oninverse))"},"colorTextOnselected":{"color":"var(--color-text-onselected, var(--fallback-color-text-onselected))"},"colorTextOnselectedSecondary":{"color":"var(--color-text-onselected-secondary, var(--fallback-color-text-onselected-secondary))"},"colorTextOnselectedStrong":{"color":"var(--color-text-onselected-strong, var(--fallback-color-text-onselected-strong))"},"colorTextOnselectedTertiary":{"color":"var(--color-text-onselected-tertiary, var(--fallback-color-text-onselected-tertiary))"},"colorTextOnsuccess":{"color":"var(--color-text-onsuccess, var(--fallback-color-text-onsuccess))"},"colorTextOnsuccessSecondary":{"color":"var(--color-text-onsuccess-secondary, var(--fallback-color-text-onsuccess-secondary))"},"colorTextOnsuccessTertiary":{"color":"var(--color-text-onsuccess-tertiary, var(--fallback-color-text-onsuccess-tertiary))"},"colorTextOnwarning":{"color":"var(--color-text-onwarning, var(--fallback-color-text-onwarning))"},"colorTextOnwarningSecondary":{"color":"var(--color-text-onwarning-secondary, var(--fallback-color-text-onwarning-secondary))"},"colorTextOnwarningTertiary":{"color":"var(--color-text-onwarning-tertiary, var(--fallback-color-text-onwarning-tertiary))"},"colorTextSecondary":{"color":"var(--color-text-secondary, var(--fallback-color-text-secondary))"},"colorTextSecondaryHover":{"color":"var(--color-text-secondary-hover, var(--fallback-color-text-secondary-hover))"},"colorTextSelected":{"color":"var(--color-text-selected, var(--fallback-color-text-selected))"},"colorTextSelectedSecondary":{"color":"var(--color-text-selected-secondary, var(--fallback-color-text-selected-secondary))"},"colorTextSelectedTertiary":{"color":"var(--color-text-selected-tertiary, var(--fallback-color-text-selected-tertiary))"},"colorTextSuccess":{"color":"var(--color-text-success, var(--fallback-color-text-success))"},"colorTextSuccessSecondary":{"color":"var(--color-text-success-secondary, var(--fallback-color-text-success-secondary))"},"colorTextSuccessTertiary":{"color":"var(--color-text-success-tertiary, var(--fallback-color-text-success-tertiary))"},"colorTextTertiary":{"color":"var(--color-text-tertiary, var(--fallback-color-text-tertiary))"},"colorTextTertiaryHover":{"color":"var(--color-text-tertiary-hover, var(--fallback-color-text-tertiary-hover))"},"colorTextToolbar":{"color":"var(--color-text-toolbar, var(--fallback-color-text-toolbar))"},"colorTextToolbarDanger":{"color":"var(--color-text-toolbar-danger, var(--fallback-color-text-toolbar-danger))"},"colorTextToolbarDisabled":{"color":"var(--color-text-toolbar-disabled, var(--fallback-color-text-toolbar-disabled))"},"colorTextToolbarHover":{"color":"var(--color-text-toolbar-hover, var(--fallback-color-text-toolbar-hover))"},"colorTextToolbarOndisabled":{"color":"var(--color-text-toolbar-ondisabled, var(--fallback-color-text-toolbar-ondisabled))"},"colorTextToolbarOnselected":{"color":"var(--color-text-toolbar-onselected, var(--fallback-color-text-toolbar-onselected))"},"colorTextToolbarSecondary":{"color":"var(--color-text-toolbar-secondary, var(--fallback-color-text-toolbar-secondary))"},"colorTextToolbarSecondaryHover":{"color":"var(--color-text-toolbar-secondary-hover, var(--fallback-color-text-toolbar-secondary-hover))"},"colorTextToolbarSelected":{"color":"var(--color-text-toolbar-selected, var(--fallback-color-text-toolbar-selected))"},"colorTextToolbarSelectedSecondary":{"color":"var(--color-text-toolbar-selected-secondary,var(--fallback-color-text-toolbar-selected-econdary))"},"colorTextToolbarSelectedTertiary":{"color":"var(--color-text-toolbar-selected-tertiary, var(--fallback-color-text-toolbar-selected-tertiary))"},"colorTextToolbarTertiary":{"color":"var(--color-text-toolbar-tertiary, var(--fallback-color-text-toolbar-tertiary))"},"colorTextToolbarTertiaryHover":{"color":"var(--color-text-toolbar-tertiary-hover, var(--fallback-color-text-toolbar-tertiary-hover))"},"colorTextToolbarWarning":{"color":"var(--color-text-toolbar-warning, var(--fallback-color-text-toolbar-warning))"},"colorTextTooltip":{"color":"var(--color-text-tooltip, var(--fallback-color-text-tooltip))"},"colorTextTooltipDanger":{"color":"var(--color-text-tooltip-danger, var(--fallback-color-text-tooltip-danger))"},"colorTextTooltipDisabled":{"color":"var(--color-text-tooltip-disabled, var(--fallback-color-text-tooltip-disabled))"},"colorTextTooltipHover":{"color":"var(--color-text-tooltip-hover, var(--fallback-color-text-tooltip-hover))"},"colorTextTooltipOndisabled":{"color":"var(--color-text-tooltip-ondisabled, var(--fallback-color-text-tooltip-ondisabled))"},"colorTextTooltipOnselected":{"color":"var(--color-text-tooltip-onselected, var(--fallback-color-text-tooltip-onselected))"},"colorTextTooltipSecondary":{"color":"var(--color-text-tooltip-secondary, var(--fallback-color-text-tooltip-secondary))"},"colorTextTooltipSecondaryHover":{"color":"var(--color-text-tooltip-secondary-hover, var(--fallback-color-text-tooltip-secondary-hover))"},"colorTextTooltipSelected":{"color":"var(--color-text-tooltip-selected, var(--fallback-color-text-tooltip-selected))"},"colorTextTooltipSelectedSecondary":{"color":"var(--color-text-tooltip-selected-secondary,var(--fallback-color-text-tooltip-selected-econdary))"},"colorTextTooltipSelectedTertiary":{"color":"var(--color-text-tooltip-selected-tertiary, var(--fallback-color-text-tooltip-selected-tertiary))"},"colorTextTooltipTertiary":{"color":"var(--color-text-tooltip-tertiary, var(--fallback-color-text-tooltip-tertiary))"},"colorTextTooltipTertiaryHover":{"color":"var(--color-text-tooltip-tertiary-hover, var(--fallback-color-text-tooltip-tertiary-hover))"},"colorTextTooltipWarning":{"color":"var(--color-text-tooltip-warning, var(--fallback-color-text-tooltip-warning))"},"colorTextWarning":{"color":"var(--color-text-warning, var(--fallback-color-text-warning))"},"colorTextWarningSecondary":{"color":"var(--color-text-warning-secondary, var(--fallback-color-text-warning-secondary))"},"colorTextWarningTertiary":{"color":"var(--color-text-warning-tertiary, var(--fallback-color-text-warning-tertiary))"},"colorBgvoting":{"backgroundColor":"var(--color-bgvoting)"},"colorBgvotingsecondary":{"backgroundColor":"var(--color-bgvotingsecondary)"},"colorBgvotingtertiary":{"backgroundColor":"var(--color-bgvotingtertiary)"},"colorIcononvoting":{"fill":"var(--color-icononvoting)"},"colorTextonvoting":{"color":"var(--color-textonvoting)"},"colorBgvotingwheelhover":{"backgroundColor":"var(--color-bgvotingwheelhover)"},"colorBgvotingwheeldial":{"backgroundColor":"var(--color-bgvotingwheeldial)"},"textInherit":{"color":"inherit"},"fontInter":{"fontFamily":"Inter"},"fontUi":{"fontFamily":"constants.uiFontFamily"},"fontWhyte":{"fontFamily":"constants.whyteFontFamily"},"font11":{"fontSize":"11px"},"font12":{"fontSize":"12px"},"font13":{"fontSize":"13px"},"font14":{"fontSize":"14px"},"font15":{"fontSize":"15px"},"font16":{"fontSize":"16px"},"font18":{"fontSize":"18px"},"font20":{"fontSize":"20px"},"font22":{"fontSize":"22px"},"font24":{"fontSize":"24px"},"font32":{"fontSize":"32px"},"italic":{"fontStyle":"italic"},"normal":{"fontStyle":"normal"},"fontMedium":{"fontWeight":"500"},"fontSemiBold":{"fontWeight":"600"},"fontBold":{"fontWeight":"700"},"fontNormal":{"fontWeight":"400"},"fpl__textDisplayFontFamily":{"fontFamily":"var(--text-display-font-family)"},"fpl__textDisplayFontSize":{"fontSize":"var(--text-display-font-size)"},"fpl__textDisplayFontWeight":{"fontWeight":"var(--text-display-font-weight)"},"fpl__textDisplayLetterSpacing":{"letterSpacing":"var(--text-display-letter-spacing)"},"fpl__textDisplayLineHeight":{"lineHeight":"var(--text-display-line-height)"},"fpl__textHeadingLargeFontFamily":{"fontFamily":"var(--text-heading-large-font-family)"},"fpl__textHeadingLargeFontSize":{"fontSize":"var(--text-heading-large-font-size)"},"fpl__textHeadingLargeFontWeight":{"fontWeight":"var(--text-heading-large-font-weight)"},"fpl__textHeadingLargeLetterSpacing":{"letterSpacing":"var(--text-heading-large-letter-spacing)"},"fpl__textHeadingLargeLineHeight":{"lineHeight":"var(--text-heading-large-line-height)"},"fpl__textHeadingMediumFontFamily":{"fontFamily":"var(--text-heading-medium-font-family)"},"fpl__textHeadingMediumFontSize":{"fontSize":"var(--text-heading-medium-font-size)"},"fpl__textHeadingMediumFontWeight":{"fontWeight":"var(--text-heading-medium-font-weight)"},"fpl__textHeadingMediumLetterSpacing":{"letterSpacing":"var(--text-heading-medium-letter-spacing)"},"fpl__textHeadingMediumLineHeight":{"lineHeight":"var(--text-heading-medium-line-height)"},"fpl__textHeadingSmallFontFamily":{"fontFamily":"var(--text-heading-small-font-family)"},"fpl__textHeadingSmallFontSize":{"fontSize":"var(--text-heading-small-font-size)"},"fpl__textHeadingSmallFontWeight":{"fontWeight":"var(--text-heading-small-font-weight)"},"fpl__textHeadingSmallLetterSpacing":{"letterSpacing":"var(--text-heading-small-letter-spacing)"},"fpl__textHeadingSmallLineHeight":{"lineHeight":"var(--text-heading-small-line-height)"},"fpl__textBodyLargeFontFamily":{"fontFamily":"var(--text-body-large-font-family)"},"fpl__textBodyLargeFontSize":{"fontSize":"var(--text-body-large-font-size)"},"fpl__textBodyLargeFontWeight":{"fontWeight":"var(--text-body-large-font-weight)"},"fpl__textBodyLargeLetterSpacing":{"letterSpacing":"var(--text-body-large-letter-spacing)"},"fpl__textBodyLargeLineHeight":{"lineHeight":"var(--text-body-large-line-height)"},"fpl__textBodyLargeStrongFontFamily":{"fontFamily":"var(--text-body-large-strong-font-family)"},"fpl__textBodyLargeStrongFontSize":{"fontSize":"var(--text-body-large-strong-font-size)"},"fpl__textBodyLargeStrongFontWeight":{"fontWeight":"var(--text-body-large-strong-font-weight)"},"fpl__textBodyLargeStrongLetterSpacing":{"letterSpacing":"var(--text-body-large-strong-letter-spacing)"},"fpl__textBodyLargeStrongLineHeight":{"lineHeight":"var(--text-body-large-strong-line-height)"},"fpl__textBodyMediumFontFamily":{"fontFamily":"var(--text-body-medium-font-family)"},"fpl__textBodyMediumFontSize":{"fontSize":"var(--text-body-medium-font-size)"},"fpl__textBodyMediumFontWeight":{"fontWeight":"var(--text-body-medium-font-weight)"},"fpl__textBodyMediumLetterSpacing":{"letterSpacing":"var(--text-body-medium-letter-spacing)"},"fpl__textBodyMediumLineHeight":{"lineHeight":"var(--text-body-medium-line-height)"},"fpl__textBodyMediumStrongFontFamily":{"fontFamily":"var(--text-body-medium-strong-font-family)"},"fpl__textBodyMediumStrongFontSize":{"fontSize":"var(--text-body-medium-strong-font-size)"},"fpl__textBodyMediumStrongFontWeight":{"fontWeight":"var(--text-body-medium-strong-font-weight)"},"fpl__textBodyMediumStrongLetterSpacing":{"letterSpacing":"var(--text-body-medium-strong-letter-spacing)"},"fpl__textBodyMediumStrongLineHeight":{"lineHeight":"var(--text-body-medium-strong-line-height)"},"fpl__textBodySmallFontFamily":{"fontFamily":"var(--text-body-small-font-family)"},"fpl__textBodySmallFontSize":{"fontSize":"var(--text-body-small-font-size)"},"fpl__textBodySmallFontWeight":{"fontWeight":"var(--text-body-small-font-weight)"},"fpl__textBodySmallLetterSpacing":{"letterSpacing":"var(--text-body-small-letter-spacing)"},"fpl__textBodySmallLineHeight":{"lineHeight":"var(--text-body-small-line-height)"},"fpl__textBodySmallStrongFontFamily":{"fontFamily":"var(--text-body-small-strong-font-family)"},"fpl__textBodySmallStrongFontSize":{"fontSize":"var(--text-body-small-strong-font-size)"},"fpl__textBodySmallStrongFontWeight":{"fontWeight":"var(--text-body-small-strong-font-weight)"},"fpl__textBodySmallStrongLetterSpacing":{"letterSpacing":"var(--text-body-small-strong-letter-spacing)"},"fpl__textBodySmallStrongLineHeight":{"lineHeight":"var(--text-body-small-strong-line-height)"},"alignLeft":{"textAlign":"left"},"alignCenter":{"textAlign":"center"},"alignRight":{"textAlign":"right"},"spacingCompact":{"letterSpacing":"-0.01em"},"spacingWide":{"letterSpacing":"0.005em"},"noUnderline":{"textDecoration":"none"},"underline":{"textDecoration":"underline"},"noWrap":{"whiteSpace":"nowrap"},"preWrap":{"whiteSpace":"pre-wrap"},"pre":{"whiteSpace":"pre"},"breakWord":{"wordBreak":"break-word"},"zIndexMinus1":{"zIndex":"-1"},"zIndexModal":{"zIndex":"constants.modalZ"},"zIndexSecondaryModal":{"zIndex":"constants.secondaryModalZ"},"zIndexTertiaryModal":{"zIndex":"constants.curatorTertiaryModalZ"},"zIndexTopBar":{"zIndex":"constants.topBarZ"},"zIndexTemplateModalTeamName":{"zIndex":"constants.templateModalTeamName"},"zIndex0":{"zIndex":"0"},"zIndex1":{"zIndex":"1"},"elevation100":{"boxShadow":"var(--elevation-100)"},"elevation200":{"boxShadow":"var(--elevation-200)"},"elevation300":{"boxShadow":"var(--elevation-300)"},"elevation400":{"boxShadow":"var(--elevation-400)"},"elevation500":{"boxShadow":"var(--elevation-500)"},"appearanceNone":{"appearance":"none"},"shadowNone":{"boxShadow":"none"},"borderBox":{"boxSizing":"border-box"},"noContent":{"content":""},"cursorDefault":{"cursor":"default"},"cursorPointer":{"cursor":"pointer"},"cursorText":{"cursor":"text"},"floatLeft":{"float":"left"},"floatRight":{"float":"right"},"eventsAll":{"pointerEvents":"all"},"eventsAuto":{"pointerEvents":"auto"},"eventsNone":{"pointerEvents":"none"},"resizeNone":{"resize":"none"},"selectNone":{"userSelect":"none"},"alignMiddle":{"verticalAlign":"middle"},"alignTop":{"verticalAlign":"top"},"invisible":{"visibility":"hidden"},"visible":{"visibility":"visible"},"hToolbar":{"height":"var(--toolbar-height)"},"hAuto":{"height":"auto"},"hFull":{"height":"100%"},"hInherit":{"height":"inherit"},"hFitContent":{"height":"fit-content"},"wHalf":{"width":"50%"},"wAuto":{"width":"auto"},"wFull":{"width":"100%"},"wFitContent":{"width":"fit-content"},"maxWFull":{"maxWidth":"100%"},"maxWUnset":{"maxWidth":"unset"},"lh1_5Lines":{"lineHeight":"1.5"},"lhNormal":{"lineHeight":"normal"},"mtAuto":{"marginTop":"auto"},"mrAuto":{"marginRight":"auto"},"mbAuto":{"marginBottom":"auto"},"mlAuto":{"marginLeft":"auto"},"h0":{"height":"0px"},"h1":{"height":"1px"},"h2":{"height":"2px"},"h4":{"height":"4px"},"h6":{"height":"6px"},"h8":{"height":"8px"},"h10":{"height":"10px"},"h12":{"height":"12px"},"h14":{"height":"14px"},"h16":{"height":"16px"},"h18":{"height":"18px"},"h20":{"height":"20px"},"h24":{"height":"24px"},"h28":{"height":"28px"},"h32":{"height":"32px"},"h36":{"height":"36px"},"h40":{"height":"40px"},"h44":{"height":"44px"},"h48":{"height":"48px"},"h64":{"height":"64px"},"h100":{"height":"100px"},"h150":{"height":"150px"},"h200":{"height":"200px"},"h250":{"height":"250px"},"h300":{"height":"300px"},"h350":{"height":"350px"},"h400":{"height":"400px"},"minH0":{"minHeight":"0px"},"minH1":{"minHeight":"1px"},"minH2":{"minHeight":"2px"},"minH4":{"minHeight":"4px"},"minH6":{"minHeight":"6px"},"minH8":{"minHeight":"8px"},"minH10":{"minHeight":"10px"},"minH12":{"minHeight":"12px"},"minH14":{"minHeight":"14px"},"minH16":{"minHeight":"16px"},"minH18":{"minHeight":"18px"},"minH20":{"minHeight":"20px"},"minH24":{"minHeight":"24px"},"minH28":{"minHeight":"28px"},"minH32":{"minHeight":"32px"},"minH36":{"minHeight":"36px"},"minH40":{"minHeight":"40px"},"minH44":{"minHeight":"44px"},"minH48":{"minHeight":"48px"},"minH64":{"minHeight":"64px"},"minH100":{"minHeight":"100px"},"minH150":{"minHeight":"150px"},"minH200":{"minHeight":"200px"},"minH250":{"minHeight":"250px"},"minH300":{"minHeight":"300px"},"minH350":{"minHeight":"350px"},"minH400":{"minHeight":"400px"},"maxH0":{"maxHeight":"0px"},"maxH1":{"maxHeight":"1px"},"maxH2":{"maxHeight":"2px"},"maxH4":{"maxHeight":"4px"},"maxH6":{"maxHeight":"6px"},"maxH8":{"maxHeight":"8px"},"maxH10":{"maxHeight":"10px"},"maxH12":{"maxHeight":"12px"},"maxH14":{"maxHeight":"14px"},"maxH16":{"maxHeight":"16px"},"maxH18":{"maxHeight":"18px"},"maxH20":{"maxHeight":"20px"},"maxH24":{"maxHeight":"24px"},"maxH28":{"maxHeight":"28px"},"maxH32":{"maxHeight":"32px"},"maxH36":{"maxHeight":"36px"},"maxH40":{"maxHeight":"40px"},"maxH44":{"maxHeight":"44px"},"maxH48":{"maxHeight":"48px"},"maxH64":{"maxHeight":"64px"},"maxH100":{"maxHeight":"100px"},"maxH150":{"maxHeight":"150px"},"maxH200":{"maxHeight":"200px"},"maxH250":{"maxHeight":"250px"},"maxH300":{"maxHeight":"300px"},"maxH350":{"maxHeight":"350px"},"maxH400":{"maxHeight":"400px"},"w0":{"width":"0px"},"w1":{"width":"1px"},"w2":{"width":"2px"},"w4":{"width":"4px"},"w6":{"width":"6px"},"w8":{"width":"8px"},"w10":{"width":"10px"},"w12":{"width":"12px"},"w14":{"width":"14px"},"w16":{"width":"16px"},"w18":{"width":"18px"},"w20":{"width":"20px"},"w24":{"width":"24px"},"w28":{"width":"28px"},"w32":{"width":"32px"},"w36":{"width":"36px"},"w40":{"width":"40px"},"w44":{"width":"44px"},"w48":{"width":"48px"},"w64":{"width":"64px"},"w100":{"width":"100px"},"w150":{"width":"150px"},"w200":{"width":"200px"},"w250":{"width":"250px"},"w300":{"width":"300px"},"w350":{"width":"350px"},"w400":{"width":"400px"},"minW0":{"minWidth":"0px"},"minW1":{"minWidth":"1px"},"minW2":{"minWidth":"2px"},"minW4":{"minWidth":"4px"},"minW6":{"minWidth":"6px"},"minW8":{"minWidth":"8px"},"minW10":{"minWidth":"10px"},"minW12":{"minWidth":"12px"},"minW14":{"minWidth":"14px"},"minW16":{"minWidth":"16px"},"minW18":{"minWidth":"18px"},"minW20":{"minWidth":"20px"},"minW24":{"minWidth":"24px"},"minW28":{"minWidth":"28px"},"minW32":{"minWidth":"32px"},"minW36":{"minWidth":"36px"},"minW40":{"minWidth":"40px"},"minW44":{"minWidth":"44px"},"minW48":{"minWidth":"48px"},"minW64":{"minWidth":"64px"},"minW100":{"minWidth":"100px"},"minW150":{"minWidth":"150px"},"minW200":{"minWidth":"200px"},"minW250":{"minWidth":"250px"},"minW300":{"minWidth":"300px"},"minW350":{"minWidth":"350px"},"minW400":{"minWidth":"400px"},"maxW0":{"maxWidth":"0px"},"maxW1":{"maxWidth":"1px"},"maxW2":{"maxWidth":"2px"},"maxW4":{"maxWidth":"4px"},"maxW6":{"maxWidth":"6px"},"maxW8":{"maxWidth":"8px"},"maxW10":{"maxWidth":"10px"},"maxW12":{"maxWidth":"12px"},"maxW14":{"maxWidth":"14px"},"maxW16":{"maxWidth":"16px"},"maxW18":{"maxWidth":"18px"},"maxW20":{"maxWidth":"20px"},"maxW24":{"maxWidth":"24px"},"maxW28":{"maxWidth":"28px"},"maxW32":{"maxWidth":"32px"},"maxW36":{"maxWidth":"36px"},"maxW40":{"maxWidth":"40px"},"maxW44":{"maxWidth":"44px"},"maxW48":{"maxWidth":"48px"},"maxW64":{"maxWidth":"64px"},"maxW100":{"maxWidth":"100px"},"maxW150":{"maxWidth":"150px"},"maxW200":{"maxWidth":"200px"},"maxW250":{"maxWidth":"250px"},"maxW300":{"maxWidth":"300px"},"maxW350":{"maxWidth":"350px"},"maxW400":{"maxWidth":"400px"},"lh0":{"lineHeight":"0px"},"lh1":{"lineHeight":"1px"},"lh2":{"lineHeight":"2px"},"lh4":{"lineHeight":"4px"},"lh6":{"lineHeight":"6px"},"lh8":{"lineHeight":"8px"},"lh10":{"lineHeight":"10px"},"lh12":{"lineHeight":"12px"},"lh14":{"lineHeight":"14px"},"lh16":{"lineHeight":"16px"},"lh18":{"lineHeight":"18px"},"lh20":{"lineHeight":"20px"},"lh24":{"lineHeight":"24px"},"lh28":{"lineHeight":"28px"},"lh32":{"lineHeight":"32px"},"lh36":{"lineHeight":"36px"},"gap0":{"gap":"0px"},"gap1":{"gap":"1px"},"gap2":{"gap":"2px"},"gap4":{"gap":"4px"},"gap6":{"gap":"6px"},"gap8":{"gap":"8px"},"gap10":{"gap":"10px"},"gap12":{"gap":"12px"},"gap14":{"gap":"14px"},"gap16":{"gap":"16px"},"gap18":{"gap":"18px"},"gap20":{"gap":"20px"},"gap24":{"gap":"24px"},"gap28":{"gap":"28px"},"gap32":{"gap":"32px"},"gap36":{"gap":"36px"},"rowGap0":{"rowGap":"0px"},"rowGap1":{"rowGap":"1px"},"rowGap2":{"rowGap":"2px"},"rowGap4":{"rowGap":"4px"},"rowGap6":{"rowGap":"6px"},"rowGap8":{"rowGap":"8px"},"rowGap10":{"rowGap":"10px"},"rowGap12":{"rowGap":"12px"},"rowGap14":{"rowGap":"14px"},"rowGap16":{"rowGap":"16px"},"rowGap18":{"rowGap":"18px"},"rowGap20":{"rowGap":"20px"},"rowGap24":{"rowGap":"24px"},"rowGap28":{"rowGap":"28px"},"rowGap32":{"rowGap":"32px"},"rowGap36":{"rowGap":"36px"},"columnGap0":{"columnGap":"0px"},"columnGap1":{"columnGap":"1px"},"columnGap2":{"columnGap":"2px"},"columnGap4":{"columnGap":"4px"},"columnGap6":{"columnGap":"6px"},"columnGap8":{"columnGap":"8px"},"columnGap10":{"columnGap":"10px"},"columnGap12":{"columnGap":"12px"},"columnGap14":{"columnGap":"14px"},"columnGap16":{"columnGap":"16px"},"columnGap18":{"columnGap":"18px"},"columnGap20":{"columnGap":"20px"},"columnGap24":{"columnGap":"24px"},"columnGap28":{"columnGap":"28px"},"columnGap32":{"columnGap":"32px"},"columnGap36":{"columnGap":"36px"},"m0":{"margin":"0px"},"m1":{"margin":"1px"},"m2":{"margin":"2px"},"m4":{"margin":"4px"},"m6":{"margin":"6px"},"m8":{"margin":"8px"},"m10":{"margin":"10px"},"m12":{"margin":"12px"},"m14":{"margin":"14px"},"m16":{"margin":"16px"},"m18":{"margin":"18px"},"m20":{"margin":"20px"},"m24":{"margin":"24px"},"m28":{"margin":"28px"},"m32":{"margin":"32px"},"m36":{"margin":"36px"},"mt0":{"marginTop":"0px"},"mt1":{"marginTop":"1px"},"mt2":{"marginTop":"2px"},"mt4":{"marginTop":"4px"},"mt6":{"marginTop":"6px"},"mt8":{"marginTop":"8px"},"mt10":{"marginTop":"10px"},"mt12":{"marginTop":"12px"},"mt14":{"marginTop":"14px"},"mt16":{"marginTop":"16px"},"mt18":{"marginTop":"18px"},"mt20":{"marginTop":"20px"},"mt24":{"marginTop":"24px"},"mt28":{"marginTop":"28px"},"mt32":{"marginTop":"32px"},"mt36":{"marginTop":"36px"},"mr0":{"marginRight":"0px"},"mr1":{"marginRight":"1px"},"mr2":{"marginRight":"2px"},"mr4":{"marginRight":"4px"},"mr6":{"marginRight":"6px"},"mr8":{"marginRight":"8px"},"mr10":{"marginRight":"10px"},"mr12":{"marginRight":"12px"},"mr14":{"marginRight":"14px"},"mr16":{"marginRight":"16px"},"mr18":{"marginRight":"18px"},"mr20":{"marginRight":"20px"},"mr24":{"marginRight":"24px"},"mr28":{"marginRight":"28px"},"mr32":{"marginRight":"32px"},"mr36":{"marginRight":"36px"},"mb0":{"marginBottom":"0px"},"mb1":{"marginBottom":"1px"},"mb2":{"marginBottom":"2px"},"mb4":{"marginBottom":"4px"},"mb6":{"marginBottom":"6px"},"mb8":{"marginBottom":"8px"},"mb10":{"marginBottom":"10px"},"mb12":{"marginBottom":"12px"},"mb14":{"marginBottom":"14px"},"mb16":{"marginBottom":"16px"},"mb18":{"marginBottom":"18px"},"mb20":{"marginBottom":"20px"},"mb24":{"marginBottom":"24px"},"mb28":{"marginBottom":"28px"},"mb32":{"marginBottom":"32px"},"mb36":{"marginBottom":"36px"},"ml0":{"marginLeft":"0px"},"ml1":{"marginLeft":"1px"},"ml2":{"marginLeft":"2px"},"ml4":{"marginLeft":"4px"},"ml6":{"marginLeft":"6px"},"ml8":{"marginLeft":"8px"},"ml10":{"marginLeft":"10px"},"ml12":{"marginLeft":"12px"},"ml14":{"marginLeft":"14px"},"ml16":{"marginLeft":"16px"},"ml18":{"marginLeft":"18px"},"ml20":{"marginLeft":"20px"},"ml24":{"marginLeft":"24px"},"ml28":{"marginLeft":"28px"},"ml32":{"marginLeft":"32px"},"ml36":{"marginLeft":"36px"},"p0":{"padding":"0px"},"p1":{"padding":"1px"},"p2":{"padding":"2px"},"p4":{"padding":"4px"},"p6":{"padding":"6px"},"p8":{"padding":"8px"},"p10":{"padding":"10px"},"p12":{"padding":"12px"},"p14":{"padding":"14px"},"p16":{"padding":"16px"},"p18":{"padding":"18px"},"p20":{"padding":"20px"},"p24":{"padding":"24px"},"p28":{"padding":"28px"},"p32":{"padding":"32px"},"p36":{"padding":"36px"},"pt0":{"paddingTop":"0px"},"pt1":{"paddingTop":"1px"},"pt2":{"paddingTop":"2px"},"pt4":{"paddingTop":"4px"},"pt6":{"paddingTop":"6px"},"pt8":{"paddingTop":"8px"},"pt10":{"paddingTop":"10px"},"pt12":{"paddingTop":"12px"},"pt14":{"paddingTop":"14px"},"pt16":{"paddingTop":"16px"},"pt18":{"paddingTop":"18px"},"pt20":{"paddingTop":"20px"},"pt24":{"paddingTop":"24px"},"pt28":{"paddingTop":"28px"},"pt32":{"paddingTop":"32px"},"pt36":{"paddingTop":"36px"},"pr0":{"paddingRight":"0px"},"pr1":{"paddingRight":"1px"},"pr2":{"paddingRight":"2px"},"pr4":{"paddingRight":"4px"},"pr6":{"paddingRight":"6px"},"pr8":{"paddingRight":"8px"},"pr10":{"paddingRight":"10px"},"pr12":{"paddingRight":"12px"},"pr14":{"paddingRight":"14px"},"pr16":{"paddingRight":"16px"},"pr18":{"paddingRight":"18px"},"pr20":{"paddingRight":"20px"},"pr24":{"paddingRight":"24px"},"pr28":{"paddingRight":"28px"},"pr32":{"paddingRight":"32px"},"pr36":{"paddingRight":"36px"},"pb0":{"paddingBottom":"0px"},"pb1":{"paddingBottom":"1px"},"pb2":{"paddingBottom":"2px"},"pb4":{"paddingBottom":"4px"},"pb6":{"paddingBottom":"6px"},"pb8":{"paddingBottom":"8px"},"pb10":{"paddingBottom":"10px"},"pb12":{"paddingBottom":"12px"},"pb14":{"paddingBottom":"14px"},"pb16":{"paddingBottom":"16px"},"pb18":{"paddingBottom":"18px"},"pb20":{"paddingBottom":"20px"},"pb24":{"paddingBottom":"24px"},"pb28":{"paddingBottom":"28px"},"pb32":{"paddingBottom":"32px"},"pb36":{"paddingBottom":"36px"},"pl0":{"paddingLeft":"0px"},"pl1":{"paddingLeft":"1px"},"pl2":{"paddingLeft":"2px"},"pl4":{"paddingLeft":"4px"},"pl6":{"paddingLeft":"6px"},"pl8":{"paddingLeft":"8px"},"pl10":{"paddingLeft":"10px"},"pl12":{"paddingLeft":"12px"},"pl14":{"paddingLeft":"14px"},"pl16":{"paddingLeft":"16px"},"pl18":{"paddingLeft":"18px"},"pl20":{"paddingLeft":"20px"},"pl24":{"paddingLeft":"24px"},"pl28":{"paddingLeft":"28px"},"pl32":{"paddingLeft":"32px"},"pl36":{"paddingLeft":"36px"},"mxAuto":{"type":"composite","rules":["mrAuto","mlAuto"]},"b0":{"type":"composite","rules":["bt0","br0","bb0","bl0"]},"b1":{"type":"composite","rules":["bSolid","bt1","br1","bb1","bl1"]},"b2":{"type":"composite","rules":["bSolid","bt2","br2","bb2","bl2"]},"textDisplay":{"type":"composite","rules":["fpl__textDisplayFontFamily","fpl__textDisplayFontSize","fpl__textDisplayFontWeight","fpl__textDisplayLetterSpacing","fpl__textDisplayLineHeight"]},"textHeadingLarge":{"type":"composite","rules":["fpl__textHeadingLargeFontFamily","fpl__textHeadingLargeFontSize","fpl__textHeadingLargeFontWeight","fpl__textHeadingLargeLetterSpacing","fpl__textHeadingLargeLineHeight"]},"textHeadingMedium":{"type":"composite","rules":["fpl__textHeadingMediumFontFamily","fpl__textHeadingMediumFontSize","fpl__textHeadingMediumFontWeight","fpl__textHeadingMediumLetterSpacing","fpl__textHeadingMediumLineHeight"]},"textHeadingSmall":{"type":"composite","rules":["fpl__textHeadingSmallFontFamily","fpl__textHeadingSmallFontSize","fpl__textHeadingSmallFontWeight","fpl__textHeadingSmallLetterSpacing","fpl__textHeadingSmallLineHeight"]},"textBodyLarge":{"type":"composite","rules":["fpl__textBodyLargeFontFamily","fpl__textBodyLargeFontSize","fpl__textBodyLargeFontWeight","fpl__textBodyLargeLetterSpacing","fpl__textBodyLargeLineHeight"]},"textBodyLargeStrong":{"type":"composite","rules":["fpl__textBodyLargeStrongFontFamily","fpl__textBodyLargeStrongFontSize","fpl__textBodyLargeStrongFontWeight","fpl__textBodyLargeStrongLetterSpacing","fpl__textBodyLargeStrongLineHeight"]},"textBodyMedium":{"type":"composite","rules":["fpl__textBodyMediumFontFamily","fpl__textBodyMediumFontSize","fpl__textBodyMediumFontWeight","fpl__textBodyMediumLetterSpacing","fpl__textBodyMediumLineHeight"]},"textBodyMediumStrong":{"type":"composite","rules":["fpl__textBodyMediumStrongFontFamily","fpl__textBodyMediumStrongFontSize","fpl__textBodyMediumStrongFontWeight","fpl__textBodyMediumStrongLetterSpacing","fpl__textBodyMediumStrongLineHeight"]},"textBodySmall":{"type":"composite","rules":["fpl__textBodySmallFontFamily","fpl__textBodySmallFontSize","fpl__textBodySmallFontWeight","fpl__textBodySmallLetterSpacing","fpl__textBodySmallLineHeight"]},"textBodySmallStrong":{"type":"composite","rules":["fpl__textBodySmallStrongFontFamily","fpl__textBodySmallStrongFontSize","fpl__textBodySmallStrongFontWeight","fpl__textBodySmallStrongLetterSpacing","fpl__textBodySmallStrongLineHeight"]},"flexNone":{"type":"composite","rules":["flexGrow0","flexShrink0","flexBasisAuto"]},"flexAuto":{"type":"composite","rules":["flexGrow1","flexShrink1","flexBasisAuto"]},"flex0":{"type":"composite","rules":["flexGrow0","flexShrink1","flexBasis0"]},"flex1":{"type":"composite","rules":["flexGrow1","flexShrink1","flexBasis0"]},"fillPositionedContainer":{"type":"composite","rules":["absolute","top0","right0","bottom0","left0"]},"truncate":{"type":"composite","rules":["ellipsis","noWrap","overflowHidden"]},"mx0":{"type":"composite","rules":["ml0","mr0"]},"mx1":{"type":"composite","rules":["ml1","mr1"]},"mx2":{"type":"composite","rules":["ml2","mr2"]},"mx4":{"type":"composite","rules":["ml4","mr4"]},"mx6":{"type":"composite","rules":["ml6","mr6"]},"mx8":{"type":"composite","rules":["ml8","mr8"]},"mx10":{"type":"composite","rules":["ml10","mr10"]},"mx12":{"type":"composite","rules":["ml12","mr12"]},"mx14":{"type":"composite","rules":["ml14","mr14"]},"mx16":{"type":"composite","rules":["ml16","mr16"]},"mx18":{"type":"composite","rules":["ml18","mr18"]},"mx20":{"type":"composite","rules":["ml20","mr20"]},"mx24":{"type":"composite","rules":["ml24","mr24"]},"mx28":{"type":"composite","rules":["ml28","mr28"]},"mx32":{"type":"composite","rules":["ml32","mr32"]},"mx36":{"type":"composite","rules":["ml36","mr36"]},"my0":{"type":"composite","rules":["mt0","mb0"]},"my1":{"type":"composite","rules":["mt1","mb1"]},"my2":{"type":"composite","rules":["mt2","mb2"]},"my4":{"type":"composite","rules":["mt4","mb4"]},"my6":{"type":"composite","rules":["mt6","mb6"]},"my8":{"type":"composite","rules":["mt8","mb8"]},"my10":{"type":"composite","rules":["mt10","mb10"]},"my12":{"type":"composite","rules":["mt12","mb12"]},"my14":{"type":"composite","rules":["mt14","mb14"]},"my16":{"type":"composite","rules":["mt16","mb16"]},"my18":{"type":"composite","rules":["mt18","mb18"]},"my20":{"type":"composite","rules":["mt20","mb20"]},"my24":{"type":"composite","rules":["mt24","mb24"]},"my28":{"type":"composite","rules":["mt28","mb28"]},"my32":{"type":"composite","rules":["mt32","mb32"]},"my36":{"type":"composite","rules":["mt36","mb36"]},"px0":{"type":"composite","rules":["pl0","pr0"]},"px1":{"type":"composite","rules":["pl1","pr1"]},"px2":{"type":"composite","rules":["pl2","pr2"]},"px4":{"type":"composite","rules":["pl4","pr4"]},"px6":{"type":"composite","rules":["pl6","pr6"]},"px8":{"type":"composite","rules":["pl8","pr8"]},"px10":{"type":"composite","rules":["pl10","pr10"]},"px12":{"type":"composite","rules":["pl12","pr12"]},"px14":{"type":"composite","rules":["pl14","pr14"]},"px16":{"type":"composite","rules":["pl16","pr16"]},"px18":{"type":"composite","rules":["pl18","pr18"]},"px20":{"type":"composite","rules":["pl20","pr20"]},"px24":{"type":"composite","rules":["pl24","pr24"]},"px28":{"type":"composite","rules":["pl28","pr28"]},"px32":{"type":"composite","rules":["pl32","pr32"]},"px36":{"type":"composite","rules":["pl36","pr36"]},"py0":{"type":"composite","rules":["pt0","pb0"]},"py1":{"type":"composite","rules":["pt1","pb1"]},"py2":{"type":"composite","rules":["pt2","pb2"]},"py4":{"type":"composite","rules":["pt4","pb4"]},"py6":{"type":"composite","rules":["pt6","pb6"]},"py8":{"type":"composite","rules":["pt8","pb8"]},"py10":{"type":"composite","rules":["pt10","pb10"]},"py12":{"type":"composite","rules":["pt12","pb12"]},"py14":{"type":"composite","rules":["pt14","pb14"]},"py16":{"type":"composite","rules":["pt16","pb16"]},"py18":{"type":"composite","rules":["pt18","pb18"]},"py20":{"type":"composite","rules":["pt20","pb20"]},"py24":{"type":"composite","rules":["pt24","pb24"]},"py28":{"type":"composite","rules":["pt28","pb28"]},"py32":{"type":"composite","rules":["pt32","pb32"]},"py36":{"type":"composite","rules":["pt36","pb36"]}}');
async function tf(e, t) {
  let {
    styleMap
  } = await tp(e, t);
  if (styleMap.isEmpty()) {
    return {
      sections: []
    };
  }
  let n = [];
  el()(styleMap.filterDefaultValues().getStyles()).sort(tc).forEach(([e, t]) => {
    let i = es()(e);
    let r = function (e, t) {
      let i = el()(tg).map(([i, n]) => n.type || n[e] !== t ? void 0 : i).filter(e => void 0 !== e);
      return i.length > 0 ? i[0] : void 0;
    }(i, t);
    r ? n.push(r) : n.push(`add({ ${i}: '${t}' })`);
  });
  return {
    sections: [{
      language: 'css',
      name: 'CSS',
      lines: `sx.${n.join('\n  .')}.$`.split('\n').map((e, t) => ({
        code: e,
        indent: t > 0 ? 1 : 0
      }))
    }],
    autocomplete: [{
      code: ['sx', ...n, '$'].join('.'),
      documentSelector: ['javascriptreact', 'typescriptreact'],
      scope: {
        type: 'react-prop',
        propName: 'style'
      },
      itemType: 'dot-notation-property',
      insertSeparatorAfterCompletion: !1,
      triggerCharacters: ['.']
    }, {
      code: ['cx', ...n, '$'].join('.'),
      documentSelector: ['javascriptreact', 'typescriptreact'],
      scope: {
        type: 'react-prop',
        propName: 'className'
      },
      itemType: 'dot-notation-property',
      insertSeparatorAfterCompletion: !1,
      triggerCharacters: ['.']
    }]
  };
}
var t_ = (e => (e[e.DOMElement = 0] = 'DOMElement', e[e.Instance = 1] = 'Instance', e[e.Text = 2] = 'Text', e))(t_ || {});
async function tA(e, t, i) {
  let n = {};
  let r = 0;
  let a = [e];
  for (;;) {
    let e = a.pop();
    if (!e || i && r >= i) break;
    let {
      styleMap
    } = await tp(e, t);
    let o = [];
    if (jO(styleMap.filterDefaultValues().getStyles()).sort(tc).map(([e, i]) => {
      let n = td(e, i, t);
      return [e.replace(/-([a-z])/g, (e, t) => t.toUpperCase()), n];
    }).forEach(([e, t]) => {
      o.push({
        property: e,
        value: t
      });
    }), n[e.id] = {
      guid: e.id,
      cssProperties: o
    }, r++, u_(e) && Array.isArray(e.children) && e.children.length > 0) {
      for (let t of e.children) a.push(t);
    }
  }
  return n;
}
class ty {
  constructor(e, t, i, n, r) {
    this.name = e;
    this.wrappedValue = t;
    this.typeName = i;
    this.boundVariable = n;
    this.preferences = r;
  }
  get value() {
    return `Constants.${pO(O$(this.name), this.boundVariable, this.preferences)}`;
  }
  getDefinition() {
    return `static let ${pO(O$(this.name), this.boundVariable, this.preferences)}: ${this.typeName} = ${this.wrappedValue}`;
  }
}
function tb(e, t, i, n, r) {
  let a = e.variable?.value;
  if (a) {
    if (a.codeSyntax && a.codeSyntax.iOS) return a.codeSyntax.iOS;
    {
      let e = new ty(a.name, t, n, a, r);
      i.add(e.getDefinition());
      return e.value;
    }
  }
}
function tv(e, t, i, n, r) {
  if (HN(e)) {
    if (e.codeSyntax && e.codeSyntax.iOS) return pO(e.codeSyntax.iOS, e, r);
    {
      let a = new ty(e.name, t, n, e, r);
      i.add(a.getDefinition());
      return a.value;
    }
  }
}
class tI {
  constructor(e, t, i, n) {
    this.top = e;
    this.bottom = t;
    this.leading = i;
    this.trailing = n;
  }
  get value() {
    let e = [];
    this.top.value === this.leading.value && this.leading.value === this.bottom.value && this.bottom.value === this.trailing.value ? tE(e, this.top) : (this.leading.value === this.trailing.value ? tE(e, this.leading, 'horizontal') : (tE(e, this.leading, 'leading'), tE(e, this.trailing, 'trailing')), this.top.value === this.bottom.value ? tE(e, this.top, 'vertical') : (tE(e, this.top, 'top'), tE(e, this.bottom, 'bottom')));
    return e;
  }
}
function tE(e, {
  value: t,
  hint: i,
  suggestion: n
}, r) {
  if (t === 0 || t === '') return;
  let a = n ? n.value : t;
  let s = r ? `.padding(.${r}, ${a})` : `.padding(${a})`;
  e.push(n8(s, 0, i, n?.matchingVars));
}
let tx = {
  MIN: {
    MIN: '.topLeading',
    MAX: '.bottomLeading',
    CENTER: '.leading',
    BASELINE: '.leading'
  },
  MAX: {
    MIN: '.topTrailing',
    MAX: '.bottomTrailing',
    CENTER: '.trailing',
    BASELINE: '.trailing'
  },
  CENTER: {
    MIN: '.top',
    MAX: '.bottom',
    CENTER: '.center',
    BASELINE: '.center'
  },
  SPACE_BETWEEN: {
    MIN: '.top',
    MAX: '.bottom',
    CENTER: '.center',
    BASELINE: '.center'
  }
};
let tS = {
  MIN: {
    MIN: '.topLeading',
    MAX: '.topTrailing',
    CENTER: '.top'
  },
  MAX: {
    MIN: '.bottomLeading',
    MAX: '.bottomTrailing',
    CENTER: '.bottom'
  },
  CENTER: {
    MIN: '.leading',
    MAX: '.trailing',
    CENTER: '.center'
  },
  SPACE_BETWEEN: {
    MIN: '.leading',
    MAX: '.trailing',
    CENTER: '.center'
  }
};
let tw = {
  LEFT: {
    TOP: '.topLeading',
    CENTER: '.leading',
    BOTTOM: '.bottomLeading'
  },
  CENTER: {
    TOP: '.top',
    CENTER: '.center',
    BOTTOM: '.bottom'
  },
  RIGHT: {
    TOP: '.topTrailing',
    CENTER: '.trailing',
    BOTTOM: '.bottomTrailing'
  },
  JUSTIFIED: {
    TOP: '.top',
    CENTER: '.center',
    BOTTOM: '.bottom'
  }
};
function tC(e, t, i, n, r, a, s, o) {
  let l = [];
  let d = Kp({
    value: n,
    node: e,
    field: 'width',
    matchIndex: 0,
    preferences: a
  });
  let c = d?.value ?? n;
  let p = Kp({
    value: r,
    node: e,
    field: 'height',
    matchIndex: 1,
    preferences: a
  });
  let m = p?.value ?? r;
  let h = [d?.matchingVars, p?.matchingVars];
  t !== XQ.FILL_PARENT && i !== XQ.FILL_PARENT ? (t === XQ.FIXED && l.push(`width: ${c}`), i === XQ.FIXED && l.push(`height: ${m}`)) : (t === XQ.FIXED ? l.push(`minWidth: ${c}`, `maxWidth: ${c}`) : t === XQ.FILL_PARENT && (l.push('maxWidth: .infinity'), h[0] = void 0), i === XQ.FIXED ? l.push(`minHeight: ${m}`, `maxHeight: ${m}`) : i === XQ.FILL_PARENT && (l.push('maxHeight: .infinity'), h[1] = void 0));
  l.length && s && l.push(`alignment: ${s}`);
  let g = o?.find(e => void 0 !== e);
  return l.length ? [n8(`.frame(${l.join(', ')})`, 0, g, a3(h))] : [];
}
function tT(e, t) {
  let i;
  let {
    layout
  } = e;
  let {
    width,
    height
  } = n;
  if (e.isAutoLayout()) {
    return function (e, t) {
      let {
        layout
      } = e;
      let {
        primaryAxisAlignItems = 'MIN',
        counterAxisAlignItems = 'MIN',
        layoutMode
      } = e.autoLayout;
      let {
        width,
        height
      } = i;
      let l = new Set();
      let d = hX(width, t).toString();
      let c = hX(height, t).toString();
      let {
        variable,
        hint
      } = zr(e, 'width', d);
      let m = tv(variable, d, l, 'CGFloat', t);
      m && (d = m);
      let {
        variable: _variable2,
        hint: _hint3
      } = zr(e, 'height', c);
      let f = tv(_variable2, c, l, 'CGFloat', t);
      f && (c = f);
      let _ = BL(e);
      let A = qn(e);
      let y = layoutMode === 'HORIZONTAL' ? tx[primaryAxisAlignItems][counterAxisAlignItems] : tS[primaryAxisAlignItems][counterAxisAlignItems];
      let {
        properties,
        constants
      } = function (e, t) {
        let {
          autoLayout
        } = e;
        let n = new Set();
        let r = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'];
        let a = new tI(...r.map(a => {
          let s = autoLayout[a];
          let o = hX(s, t).toString();
          let {
            variable: _variable3,
            hint: _hint4
          } = zr(e, a, o);
          let c = tv(_variable3, o, n, 'CGFloat', t);
          c && (o = c);
          let u = c ? void 0 : Kp({
            value: o,
            node: e,
            field: a,
            matchIndex: r.indexOf(a),
            preferences: t
          });
          return {
            value: o,
            hint: _hint4,
            suggestion: u
          };
        })).value;
        return {
          properties: {
            padding: a.length ? a : []
          },
          constants: n
        };
      }(e, t);
      return {
        properties: {
          frame: tC(e, _, A, d, c, t, y, [hint, _hint3]),
          ...properties
        },
        constants: new Set([...l, ...constants])
      };
    }(e, t);
  }
  let s;
  let o;
  let l = new Set();
  let d = hX(width, t).toString();
  let c = hX(height, t).toString();
  let {
    variable,
    hint
  } = zr(e, 'width', d);
  let h = tv(variable, d, l, 'CGFloat', t);
  h && (d = h);
  let {
    variable: _variable4,
    hint: _hint5
  } = zr(e, 'height', c);
  let _ = tv(_variable4, c, l, 'CGFloat', t);
  _ && (c = _);
  let y = {};
  let b = BL(e);
  let v = qn(e);
  if (e instanceof _$$z && (i = tw[e.textAlignHorizontal][e.textAlignVertical]), y.frame = tC(e, b, v, d, c, t, i, [hint, _hint5]), layout.shouldUseAbsolutePosition()) {
    let {
      x,
      y
    } = {
      x: (s = layout.relativeBounds().bounds).x + s.width / 2,
      y: s.y + s.height / 2,
      width: s.width,
      height: s.height
    };
    let r = hX(x, t);
    let a = hX(y, t);
    y.position = [n8(`.position(x:${r}, y:${a})`)];
  }
  layout.relativeTransform && (y.transform = (o = layout.relativeTransform).isRotated() ? [n8(`.rotationEffect(Angle(degrees: ${+(-1 * o.getAngleDeg()).toFixed(2)}))`)] : []);
  return {
    properties: y,
    constants: l
  };
}
let tk = ['view', 'font', 'kerning', 'underline', 'strikethrough', 'multilineTextAlignment', 'foregroundColor', 'fill', 'padding', 'frame', 'position', 'backgrounds', 'cornerRadius', 'shadows', 'borders', 'blur', 'transform', 'opacity'];
let tR = {
  view: 0,
  font: 0,
  kerning: 0,
  strikethrough: 0,
  underline: 0,
  multilineTextAlignment: 0,
  fill: 0,
  foregroundColor: 0,
  padding: 0,
  frame: 0,
  position: 0,
  backgrounds: 0,
  cornerRadius: 0,
  borders: 0,
  blur: 0,
  shadows: 0,
  transform: 0
};
let tN = {
  view: 0,
  font: 1,
  kerning: 1,
  strikethrough: 1,
  underline: 1,
  multilineTextAlignment: 1,
  fill: 1,
  foregroundColor: 1,
  padding: 1,
  frame: 1,
  position: 1,
  backgrounds: 1,
  cornerRadius: 1,
  borders: 1,
  blur: 1,
  shadows: 1,
  transform: 1,
  opacity: 1
};
function tP([e, t], [i, n]) {
  return tk.indexOf(e) - tk.indexOf(i);
}
function tO({
  viewName: e,
  properties: t,
  constants: i,
  indentLevels: n = tN,
  matchingVars: r = []
}) {
  let a = [{
    lines: jO({
      ...t
    }).sort(tP).flatMap(([e, t]) => t ? y(t, n[e] ?? 0) : []),
    language: 'swift',
    name: e,
    matchingVars: r
  }];
  if (i && i.size > 0) {
    let e = [...i].map(e => n8(e, 1));
    let t = [n8('struct Constants {'), ...e, n8('}')];
    a.push({
      lines: t,
      language: 'swift',
      name: 'Variables'
    });
  }
  return a;
}
class tF {
  constructor(e, t = 1) {
    this.color = e;
    this.opacity = t;
    if (e.r > 1 || e.g > 1 || e.b > 1) throw new Error(`Expected normalised color values (between 0 and 1) but got (${e.r}, ${e.g}, ${e.b})`);
  }
  get value() {
    let e;
    let {
      r: _r2,
      g,
      b,
      a = 1
    } = this.color;
    e = Math.abs(_r2) < 1e-5 && Math.abs(g) < 1e-5 && Math.abs(b) < 1e-5 ? '.black' : Math.abs(1 - _r2) < 1e-5 && Math.abs(1 - g) < 1e-5 && Math.abs(1 - b) < 1e-5 ? '.white' : `Color(red: ${+this.color.r.toFixed(2)}, green: ${+this.color.g.toFixed(2)}, blue: ${+this.color.b.toFixed(2)})`;
    return this.opacity !== 1 || function (e) {
      let t = e.a;
      return b.t2(t) && t !== 1;
    }(this.color) ? `${e}.opacity(${+(this.opacity * a).toFixed(2)})` : e;
  }
}
class tM {
  constructor(e, t, i) {
    this.color = e;
    this.position = t;
    this.variable = i;
  }
  get value() {
    return `Gradient.Stop(color: ${this.variable ?? this.color.value}, location: ${this.position.toFixed(2)})`;
  }
}
function tj(e) {
  return `UnitPoint(x: ${+e[0].toFixed(2)}, y: ${+e[1].toFixed(2)})`;
}
class tU {
  static fromGradientPaint(e, t) {
    let i = getLinearGradientPoints(toMatrix2x3(e.gradientTransform));
    let {
      x,
      y
    } = i[0];
    let {
      x: _x,
      y: _y
    } = i[1];
    return new tU([x, y], [_x, _y], e.gradientStops.map(i => {
      let {
        presentedValue
      } = t?.parseSinglePaint(i) ?? {};
      return new tM(new tF(i.color, e.opacity), i.position, presentedValue);
    }));
  }
  get value() {
    let e = [n8('LinearGradient(')];
    this.colorStops.length === 1 ? e.push(n8(`stops: [${this.colorStops[0].value}],`, 1)) : (e.push(n8('stops: [', 1)), e.push(...this.colorStops.map(e => n8(`${e.value},`, 2))), e.push(n8('],', 1)));
    e.push(n8(`startPoint: ${tj(this.startPoint)},`, 1));
    e.push(n8(`endPoint: ${tj(this.endPoint)}`, 1));
    e.push(n8(')'));
    return e;
  }
  constructor(e, t, i) {
    this.startPoint = e;
    this.endPoint = t;
    this.colorStops = i;
  }
}
class tB {
  constructor(e, t) {
    let [{
      x: i,
      y: n
    }] = getRadialGradientPoints(toMatrix2x3(e.gradientTransform));
    this.centerX = i;
    this.centerY = n;
    this.colorStops = e.gradientStops.map(i => {
      let {
        presentedValue
      } = t?.parseSinglePaint(i) ?? {};
      return new tM(new tF(i.color, e.opacity), i.position, presentedValue);
    });
  }
  get value() {
    let e = [n8('EllipticalGradient(')];
    this.colorStops.length === 1 ? e.push(n8(`stops: [${this.colorStops[0].value}],`, 1)) : (e.push(n8('stops: [', 1)), e.push(...this.colorStops.map(e => n8(`${e.value},`, 2))), e.push(n8('],', 1)));
    e.push(n8(`center: ${tj([this.centerX, this.centerY])}`, 1));
    e.push(n8(')'));
    return e;
  }
}
class tV {
  constructor(e, t) {
    let [{
      x: i,
      y: n
    }, {
      x: r,
      y: a
    }] = getRadialGradientPoints(toMatrix2x3(e.gradientTransform));
    this.centerX = i;
    this.centerY = n;
    this.angle = 180 * Math.atan2(a - n, r - i) / Math.PI;
    this.colorStops = e.gradientStops.map(i => {
      let {
        presentedValue
      } = t?.parseSinglePaint(i) ?? {};
      return new tM(new tF(i.color, e.opacity), i.position, presentedValue);
    });
  }
  get value() {
    let e = [n8('AngularGradient(')];
    this.colorStops.length === 1 ? e.push(n8(`stops: [${this.colorStops[0].value}],`, 1)) : (e.push(n8('stops: [', 1)), e.push(...this.colorStops.map(e => n8(`${e.value},`, 2))), e.push(n8('],', 1)));
    e.push(n8(`center: ${tj([this.centerX, this.centerY])},`, 1));
    e.push(n8(`angle: Angle(degrees: ${+this.angle.toFixed(2)})`, 1));
    e.push(n8(')'));
    return e;
  }
}
class tG {
  constructor(e, t, i) {
    this.imagePaint = e;
    this.width = t;
    this.height = i;
  }
  get value() {
    let e = [n8('Image("PATH_TO_IMAGE")')];
    switch (this.imagePaint.scaleMode) {
      case 'FIT':
        e.push(n8('.resizable()', 1));
        e.push(n8('.aspectRatio(contentMode: .fit)', 1));
        break;
      case 'TILE':
        e.push(n8('.resizable(resizingMode: .tile)', 1));
        break;
      case 'CROP':
      case 'FILL':
        e.push(n8('.resizable()', 1));
        e.push(n8('.aspectRatio(contentMode: .fill)', 1));
        e.push(n8(`.frame(width: ${this.width}, height: ${this.height})`, 1));
        e.push(n8('.clipped()', 1));
    }
    this.imagePaint.opacity && this.imagePaint.opacity !== 1 && e.push(n8(`.opacity(${+this.imagePaint.opacity.toFixed(2)})`, 1));
    return e;
  }
}
class tz {
  constructor(e, t, i, n, r) {
    this.colorIndex = e;
    this.matchIndex = t;
    this.paintIndex = i;
    this.node = n;
    this.preferences = r;
    this.constants = new Set();
  }
  parseSinglePaint(e) {
    let t = new tF(e.color, e.opacity);
    let i = hO(e, this.paintIndex, 'fills', this.node);
    let n = mJ(i, t, {
      isColor: !0
    });
    let r = t.value;
    let a = tv(i, r, this.constants, 'Color', this.preferences);
    a && (r = a);
    let s = a ? void 0 : Kp({
      value: r,
      node: this.node,
      field: 'fills',
      matchIndex: this.matchIndex,
      arrayIndex: this.colorIndex,
      preferences: this.preferences
    });
    return {
      hint: n,
      presentedValue: r = s ? s.value : r,
      suggestion: s
    };
  }
  getConstants() {
    return Array.from(this.constants);
  }
}
function tH(e, t) {
  let {
    width,
    height
  } = e.layout;
  let {
    backgrounds = [],
    constants = []
  } = oE(e.fills).reverse().reduce((r, {
    paint: a,
    index: s
  }) => {
    let {
      codeLines,
      constants: _constants11 = []
    } = function (e, t, i, n, r, a, s, o) {
      let l = new tz(s, 0, i, e, o);
      switch (t.type) {
        case 'SOLID':
          let {
            hint,
            presentedValue,
            suggestion
          } = l.parseSinglePaint(t);
          return {
            codeLines: [n8(`.background(${presentedValue})`, 0, hint, suggestion?.matchingVars)],
            constants: l.getConstants()
          };
        case 'GRADIENT_LINEAR':
          let m = tU.fromGradientPaint(t, l);
          return {
            codeLines: [n8('.background('), ...y(m.value, 1), n8(')')],
            constants: l.getConstants()
          };
        case 'GRADIENT_RADIAL':
          let h = new tB(t, l);
          return {
            codeLines: [n8('.background('), ...y(h.value, 1), n8(')')],
            constants: l.getConstants()
          };
        case 'GRADIENT_ANGULAR':
          let g = new tV(t, l);
          return {
            codeLines: [n8('.background('), ...y(g.value, 1), n8(')')],
            constants: l.getConstants()
          };
        case 'IMAGE':
          let f = new tG(t, n, r).value;
          if (f.length > 1) {
            return {
              codeLines: [n8('.background('), ...y(f, 1), n8(')')]
            };
          }
          if (f.length === 1) {
            return {
              codeLines: [n8(`.background(${f[0].code})`)]
            };
          }
          return {
            codeLines: []
          };
        default:
          return {
            codeLines: []
          };
      }
    }(e, a, s, width, height, 0, s, t);
    return {
      backgrounds: [...r.backgrounds, ...codeLines],
      constants: [...r.constants, ..._constants11]
    };
  }, {
    backgrounds: [],
    constants: []
  });
  return {
    properties: {
      backgrounds
    },
    constants: new Set(constants)
  };
}
function tW(e, t) {
  let {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight,
    strokeAlign = 'CENTER',
    bottomRightRadius = 0,
    topLeftRadius = 0,
    topRightRadius = 0,
    bottomLeftRadius = 0,
    dashPattern = []
  } = e instanceof _$$a ? {
    strokeTopWeight: e.strokeWeight,
    strokeBottomWeight: e.strokeWeight,
    strokeLeftWeight: e.strokeWeight,
    strokeRightWeight: e.strokeWeight
  } : e.border;
  let m = {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight
  };
  let h = Iq(m, (e, t) => e.rawValue > t.rawValue);
  let g = m[h];
  let {
    lines,
    cornerRadiusString,
    constants
  } = function (e, t, i, n, r, a) {
    let s = {
      bottomRightRadius: t,
      topLeftRadius: i,
      topRightRadius: n,
      bottomLeftRadius: r
    };
    let o = Iq(s);
    let l = s[o];
    let d = l !== t || l !== i || l !== n || l !== r;
    let c = l > 0 ? hX(l, a).toString() : '';
    let p = e.getVariableValue('topLeftRadius') || e.getVariableValue('topRightRadius') || e.getVariableValue('bottomLeftRadius') || e.getVariableValue('bottomRightRadius');
    let m = mJ(p, {
      value: c
    });
    let h = new Set();
    let g = tv(p, l, h, 'CGFloat', a);
    g && (c = g);
    let f = g ? void 0 : Kp({
      value: c,
      node: e,
      field: o,
      preferences: a
    });
    return (c = f?.value ?? c).length === 0 ? {
      lines: [],
      cornerRadiusString: c,
      constants: Array.from(h)
    } : {
      lines: [n8(`.cornerRadius(${c})`, 0, d ? A2.SwiftUISeparateCornerRadius : m, f?.matchingVars)],
      cornerRadiusString: c,
      constants: Array.from(h)
    };
  }(e, bottomRightRadius, topLeftRadius, topRightRadius, bottomLeftRadius, t);
  let v = !deepEqual(g, strokeTopWeight) || !deepEqual(g, strokeBottomWeight) || !deepEqual(g, strokeLeftWeight) || !deepEqual(g, strokeRightWeight);
  let I = e instanceof _$$a ? e.strokes : e.border.strokes;
  let E = new Set(constants);
  let S = hX(g.rawValue, t);
  let T = tb(g, S, E, 'CGFloat', t);
  let R = T ?? S.toString();
  let N = T ? void 0 : Kp({
    value: R,
    node: e,
    field: h,
    matchIndex: 0,
    preferences: t
  });
  R = N?.value ?? R;
  let {
    borderLines = []
  } = F$(I).reduce((i, {
    paint: n,
    index: r,
    hint: a
  }) => {
    let {
      color,
      opacity
    } = n;
    let d = new tF(color, opacity);
    let c = hO(n, r, 'strokes', e);
    let m = d.value;
    let h = tv(c, m, E, 'Color', t);
    h && (m = h);
    let g = h ? void 0 : Kp({
      value: m,
      node: e,
      field: 'strokes',
      matchIndex: 1,
      arrayIndex: r,
      preferences: t
    });
    m = g?.value ?? m;
    let f = mJ(c, d, {
      isColor: !0
    });
    let _ = [...function (e, t, i, n, r, a, s, o, l) {
      let d = [];
      switch (e.length > 0 ? d.push(n8('.overlay('), n8(`RoundedRectangle(cornerRadius: ${e})`, 1)) : d.push(n8('.overlay('), n8('Rectangle()', 1)), t) {
        case 'CENTER':
          break;
        case 'INSIDE':
          d.push(n8(`.inset(by: ${+(i / 2).toFixed(2)})`, 2));
          break;
        case 'OUTSIDE':
          d.push(n8(`.inset(by: ${+(-i / 2).toFixed(2)})`, 2));
      }
      let c = [a];
      s && s.length > 0 ? c.push(`style: StrokeStyle(lineWidth: ${n}, dash: [${s.join(', ')}])`) : c.push(`lineWidth: ${n}`);
      d.push(n8(`.stroke(${c.join(', ')})`, 2, r ? A2.SwiftUISeparateBorderWidth : o, l));
      d.push(n8(')'));
      return d;
    }(cornerRadiusString, strokeAlign, S, R, v, m, dashPattern, a || f, a3([g?.matchingVars, N?.matchingVars]))];
    return {
      borderLines: [...i.borderLines, ..._]
    };
  }, {
    borderLines: []
  });
  return {
    properties: {
      cornerRadius: lines,
      borders: borderLines
    },
    constants: E
  };
}
function tK(e, t, i, n, r, a) {
  let s = jX(e, i, n);
  let o = `${hX(t, a)}`;
  return tv(s, o, r, 'CGFloat', a) ?? o;
}
function tY(e, t, i, n) {
  let r = tv(bE(e, t), hX(e.radius, n), i, 'CGFloat', n);
  return r ? `${r} / 2` : `${hX(e.radius / 2, n)}`;
}
function tq(e, t) {
  let i = new Set();
  let {
    effects
  } = e;
  let r = {};
  effects.filter(e => e.visible).forEach(n => {
    let a;
    switch (n.type) {
      case 'DROP_SHADOW':
        r.shadows || (r.shadows = []);
        let s = tK(n, n.offset.x, 'offsetX', e, i, t);
        let o = tK(n, n.offset.y, 'offsetY', e, i, t);
        let l = tY(n, e, i, t);
        let d = function (e, t, i, n) {
          let r = jX(e, 'color', t);
          let a = new tF(e.color).value;
          return tv(r, a, i, 'Color', n) ?? a;
        }(n, e, i, t);
        r.shadows.push(...(a = !!n.spread, [n8(`.shadow(color: ${d}, radius: ${l}, x: ${s}, y: ${o})`, 0, a ? A2.SwiftUIBlurNoSpread : void 0)]));
        break;
      case 'LAYER_BLUR':
        r.blur || (r.blur = []);
        let c = tY(n, e, i, t);
        r.blur.push(n8(`.blur(radius: ${c})`));
        break;
      case 'BACKGROUND_BLUR':
        r.blur || (r.blur = []);
        let p = tY(n, e, i, t);
        r.blur.push(n8(`.blur(radius: ${p})`, 0, A2.SwiftUIBackgroundBlur));
    }
  });
  return {
    effects: r,
    constants: i
  };
}
function t$(e, t) {
  let i = {};
  let n = new Set();
  if (e.opacity && e.opacity !== 1) {
    let r = nk(e.opacity, 4);
    let a = `${r}`;
    let {
      variable,
      hint
    } = zr(e, 'opacity', r, t);
    let l = tv(variable, r, n, '', t);
    l && (a = l);
    let d = l ? void 0 : Kp({
      value: a,
      node: e,
      field: 'opacity',
      preferences: t
    });
    a = d ? d.value : a;
    i.opacity = [n8(`.opacity(${a})`, 0, hint, d?.matchingVars)];
  }
  return {
    properties: i,
    constants: n
  };
}
function tZ(e, t) {
  if (e instanceof _$$B || e instanceof J3) return [];
  let i = [];
  Object.keys(e.inferredVariables).forEach(n => {
    if (!function (e, t) {
      switch (e) {
        case 'fills':
          return !!t.backgrounds && t.backgrounds.length > 0;
        case 'height':
        case 'width':
          return !!t.frame && t.frame.length > 0;
        case 'characters':
        case 'minWidth':
        case 'maxWidth':
        case 'minHeight':
        case 'maxHeight':
        case 'counterAxisSpacing':
          break;
        case 'itemSpacing':
          return !!t.view && t.view.length > 0;
        case 'paddingLeft':
        case 'paddingRight':
        case 'paddingTop':
        case 'paddingBottom':
          return !!t.padding && t.padding.length > 0;
        case 'topLeftRadius':
        case 'topRightRadius':
        case 'bottomLeftRadius':
        case 'bottomRightRadius':
          return !!t.cornerRadius && t.cornerRadius.length > 0;
        case 'strokes':
        case 'strokeWeight':
        case 'strokeTopWeight':
        case 'strokeRightWeight':
        case 'strokeBottomWeight':
        case 'strokeLeftWeight':
          return !!t.borders && t.borders.length > 0;
        case 'opacity':
          return !!t.opacity && t.opacity.length > 0;
        case 'fontFamily':
        case 'fontSize':
          return !!t.font && t.font.length > 0;
      }
      return !1;
    }(n, t)) {
      return;
    }
    if (n === 'fills' || n === 'strokes') {
      let t = e.inferredVariables[n];
      if (!t) return;
      return t.forEach((t, a) => {
        let s = Eu(n, e, a);
        s && s.type === 'SOLID' && t && t.length !== 0 && i.push({
          ids: t.map(e => e.id),
          rawValue: {
            type: VariableDataType.COLOR,
            value: {
              ...s.color,
              a: s.opacity ?? 1
            }
          }
        });
      });
    }
    let a = e.inferredVariables?.[n];
    if (!a) return;
    if (n === 'fontFamily') {
      if (!KH(e)) return;
      i.push({
        ids: a.map(e => e.id),
        rawValue: {
          type: VariableDataType.STRING,
          value: e.textSegments[0].fontName.family.rawValue
        }
      });
    }
    let s = LI(n, e);
    s && i.push({
      ids: a.map(e => e.id),
      rawValue: {
        type: VariableDataType.FLOAT,
        value: s
      }
    });
  });
  return i;
}
async function tX(e, t) {
  let {
    properties,
    constants
  } = tT(e, t);
  let {
    properties: _properties1,
    constants: _constants12
  } = t$(e, t);
  let {
    properties: _properties10,
    constants: _constants13
  } = tH(e, t);
  let {
    effects,
    constants: _constants14
  } = tq(e, t);
  let {
    properties: _properties11,
    constants: _constants15
  } = tW(e, t);
  let {
    sectionName = 'View',
    properties: _properties12,
    constants: _constants16
  } = function (e, t) {
    if (!e.isAutoLayout()) {
      return {
        sectionName: 'ZStack',
        properties: {
          view: [n8('ZStack { ... }')]
        },
        constants: new Set()
      };
    }
    {
      let {
        layoutMode
      } = e.autoLayout;
      switch (layoutMode) {
        case 'HORIZONTAL':
          return function (e, t) {
            let {
              counterAxisAlignItems,
              itemSpacing,
              primaryAxisAlignItems
            } = e.autoLayout;
            let a = [];
            switch (counterAxisAlignItems) {
              case 'MIN':
                a.push('alignment: .top');
                break;
              case 'MAX':
                a.push('alignment: .bottom');
                break;
              case 'CENTER':
                a.push('alignment: .center');
                break;
              case 'BASELINE':
                a.push('alignment: .firstTextBaseline');
            }
            if (primaryAxisAlignItems === 'SPACE_BETWEEN') {
              return {
                sectionName: 'HStack',
                properties: {
                  view: [n8(`HStack(${a.join(', ')}) {`), n8('// Space Between', 1), n8('View()', 1), n8('Spacer()', 1), n8('// Alternative Views and Spacers', 1), n8('View()', 1), n8('}')]
                },
                constants: new Set()
              };
            }
            {
              let i;
              let r = hX(itemSpacing, t);
              let {
                variable,
                hint
              } = zr(e, 'itemSpacing', r.toString());
              let l = new Set();
              let d = tv(variable, r, l, 'CGFloat', t);
              if (d) {
                a.push(`spacing: ${d}`);
              } else {
                let n = `${r}`;
                i = Kp({
                  value: n,
                  node: e,
                  field: 'itemSpacing',
                  preferences: t
                });
                a.push(`spacing: ${i?.value ?? n}`);
              }
              return {
                sectionName: 'HStack',
                properties: {
                  view: [n8(`HStack(${a.join(', ')}) { ... }`, 0, hint, i?.matchingVars)]
                },
                constants: l
              };
            }
          }(e, t);
        case 'VERTICAL':
          return function (e, t) {
            let {
              counterAxisAlignItems,
              itemSpacing,
              primaryAxisAlignItems
            } = e.autoLayout;
            let a = [];
            switch (counterAxisAlignItems) {
              case 'MIN':
                a.push('alignment: .leading');
                break;
              case 'MAX':
                a.push('alignment: .trailing');
                break;
              case 'CENTER':
                a.push('alignment: .center');
            }
            if (primaryAxisAlignItems === 'SPACE_BETWEEN') {
              return {
                sectionName: 'VStack',
                properties: {
                  view: [a.length ? n8(`VStack(${a.join(', ')}) {`) : n8('VStack {'), n8('// Space Between', 1, A2.SwiftUISpacersForSpaceBetween), n8('View()', 1), n8('Spacer()', 1), n8('// Alternating Views and Spacers', 1), n8('View()', 1), n8('}')]
                },
                constants: new Set()
              };
            }
            {
              let i;
              let r = hX(itemSpacing, t);
              let {
                variable,
                hint
              } = zr(e, 'itemSpacing', r.toString());
              let l = new Set();
              let d = tv(variable, r, l, 'CGFloat', t);
              if (d) {
                a.push(`spacing: ${d}`);
              } else {
                let n = `${r}`;
                i = Kp({
                  value: n,
                  node: e,
                  field: 'itemSpacing',
                  preferences: t
                });
                a.push(`spacing: ${i?.value ?? n}`);
              }
              return {
                sectionName: 'VStack',
                properties: {
                  view: [n8(`VStack(${a.join(', ')}) { ... }`, 0, hint, i?.matchingVars)]
                },
                constants: l
              };
            }
          }(e, t);
        default:
          return {
            sectionName: 'ZStack',
            properties: {
              view: [n8('ZStack { ... }')]
            },
            constants: new Set()
          };
      }
    }
  }(e, t);
  let f = {
    ..._properties12,
    ...effects,
    ...properties,
    ..._properties1,
    ..._properties10,
    ..._properties11
  };
  let _ = new Set([..._constants16, ..._constants13, ..._constants15, ...constants, ..._constants12, ..._constants14]);
  let A = tZ(e, f);
  return tO({
    viewName: sectionName,
    properties: f,
    constants: _,
    indentLevels: tR,
    matchingVars: A
  });
}
async function tQ(e, t) {
  let {
    properties,
    constants
  } = tT(e, t);
  let {
    properties: _properties13,
    constants: _constants17
  } = t$(e, t);
  let {
    properties: _properties14,
    constants: _constants18
  } = tH(e, t);
  let {
    effects,
    constants: _constants19
  } = tq(e, t);
  let {
    properties: _properties15,
    constants: _constants20
  } = tW(e, t);
  let m = function ({
    blur: e,
    shadows: t
  }) {
    return !!e && e.length > 0 || !!t && t.length > 0;
  }(effects);
  let h = Hw(t) && m ? 'View' : 'Rectangle';
  let g = {
    view: [n8(`${h}()`)],
    ...(KY(t) ? {} : {
      foregroundColor: [n8('.foregroundColor(.clear)')]
    }),
    ...(vy(t) ? {} : properties),
    ...(vy(t) ? {} : _properties13),
    ...(m ? effects : {}),
    ...(Hw(t) ? {} : _properties15),
    ...(KY(t) ? {} : _properties14)
  };
  let f = Hw(t) ? m ? new Set(_constants19) : new Set() : new Set([..._constants18, ..._constants20, ...constants, ..._constants17, ..._constants19]);
  let _ = tZ(e, g);
  return tO({
    viewName: h,
    properties: g,
    constants: f,
    matchingVars: _
  });
}
async function tJ(e, t) {
  let {
    properties,
    constants
  } = tT(e, t);
  let {
    properties: _properties16,
    constants: _constants21
  } = t$(e, t);
  let {
    properties: _properties17,
    constants: _constants22
  } = tH(e, t);
  let {
    effects,
    constants: _constants23
  } = tq(e, t);
  let {
    properties: _properties18,
    constants: _constants24
  } = tW(e, t);
  let m = {
    view: [n8(`Image("${e.name}")`)],
    ...effects,
    ...properties,
    ..._properties16,
    ..._properties17,
    ..._properties18
  };
  let h = new Set([..._constants22, ..._constants24, ...constants, ..._constants21, ..._constants23]);
  let g = tZ(e, m);
  return tO({
    viewName: 'Image',
    properties: m,
    constants: h,
    matchingVars: g
  });
}
function t0(e, t, i, n, r) {
  let a = F$(t);
  if (a.length > 0 && !KY(n) && a[0]) {
    let {
      paint,
      index,
      hint
    } = a[0];
    let l = new tF(paint.color, paint.opacity);
    let d = hO(paint, index, e, i);
    let c = hint || (a.length > 1 ? A2.SinglePaint : mJ(d, l, {
      isColor: !0
    }));
    let u = l.value;
    let p = tv(d, u, r, 'Color', n);
    let m = d.status === jg.NotFound ? Kp({
      value: u,
      node: i,
      field: e,
      arrayIndex: index,
      preferences: n
    }) : void 0;
    (p = m?.value ?? p) && (u = p);
    return {
      presentedValue: u,
      hint: c,
      matchingVars: m?.matchingVars
    };
  }
  return {};
}
async function t1(e, t) {
  let {
    properties,
    constants
  } = tT(e, t);
  let {
    properties: _properties19,
    constants: _constants25
  } = t$(e, t);
  let {
    properties: _properties20,
    constants: _constants26
  } = function (e, t) {
    let i = e.textSegments[0];
    let n = {};
    let r = new Set();
    if (!i) {
      return {
        properties: n,
        constants: r
      };
    }
    if (i.letterSpacing && i.letterSpacing.rawValue.value > 0) {
      let e = hX(et(i.letterSpacing.rawValue, i.fontSize.rawValue), t);
      let a = tb(i.letterSpacing, e, r, 'CGFloat', t) ?? e.toString();
      n.kerning = [n8(`.kerning(${a})`)];
    }
    let {
      presentedValue,
      hint,
      matchingVars
    } = t0('fills', i.fills, e, t, r);
    if (presentedValue && (n.foregroundColor = [n8(`.foregroundColor(${presentedValue})`, 0, hint, matchingVars)]), i.textDecoration) {
      switch (i.textDecoration) {
        case 'STRIKETHROUGH':
          n.strikethrough = [n8('.strikethrough()')];
          break;
        case 'UNDERLINE':
          let l = function (e) {
            if (e.textDecorationStyle) {
              switch (e.textDecorationStyle) {
                case 'SOLID':
                  return '.solid';
                case 'DOTTED':
                  return '.dot';
                case 'WAVY':
              }
            }
          }(i);
          let {
            presentedValue: _presentedValue,
            hint: _hint6,
            matchingVars: _matchingVars
          } = function (e, t, i, n) {
            if (t.textDecorationColor) {
              let r = t.textDecorationColor.rawValue.value;
              return r === 'AUTO' ? {} : t0('textDecorationColor', [r], e, i, n);
            }
            return {};
          }(e, i, t, r);
          l || _presentedValue ? l && _presentedValue ? n.underline = [n8(`.underline(true, pattern: ${l}, color: ${_presentedValue})`, 0, _hint6, _matchingVars)] : n.underline = [n8(`.underline(true, ${l ? `pattern: ${l}` : ''}${_presentedValue ? `color: ${_presentedValue}` : ''})`, 0, _presentedValue ? _hint6 : void 0, _presentedValue ? _matchingVars : void 0)] : n.underline = [n8('.underline()')];
      }
    }
    switch (e.textAlignHorizontal) {
      case 'CENTER':
        n.multilineTextAlignment = [n8('.multilineTextAlignment(.center)')];
        break;
      case 'RIGHT':
        n.multilineTextAlignment = [n8('.multilineTextAlignment(.trailing)')];
    }
    return {
      properties: n,
      constants: r
    };
  }(e, t);
  let l = [];
  oQ(e.textStyle) && l.push(n8(`// ${e.textStyle.name}`));
  l.push(n8(`Text(${ee(e.characters)})`));
  let d = {
    view: l,
    ...properties,
    ..._properties19,
    ..._properties20
  };
  let {
    codeLines,
    constants: _constants27
  } = function (e, t) {
    let i = e.textSegments[0];
    let {
      fontName: {
        family,
        style
      },
      fontSize
    } = i;
    let s = [];
    let o = new Set();
    let l = hX(fontSize.rawValue, t);
    let d = tb(fontSize, l, o, 'CGFloat', t);
    let c = d ?? l.toString();
    let p = d ? void 0 : Kp({
      value: c,
      node: e,
      field: 'fontSize',
      matchIndex: 1,
      preferences: t
    });
    if ((c = p?.value ?? c) && family) {
      let i = `"${family.rawValue}"`;
      let r = tb(family, i, o, 'String', t);
      let a = r ?? i;
      let l = r ? void 0 : Kp({
        value: a,
        node: e,
        field: 'fontFamily',
        matchIndex: 0,
        preferences: t
      });
      a = l?.value ?? a;
      s.push(n8(`Font.custom(${a}, size: ${c})`, 0, void 0, a3([p?.matchingVars, l?.matchingVars])));
    } else {
      c && s.push(n8(`Font.system(size: ${c})`, 0, void 0, p?.matchingVars));
    }
    if (s.length && style) {
      let {
        fontWeight,
        italic = !1
      } = {
        fontWeight: Q[style.replace(/italic/gi, '').replace(/ /g, '').toLocaleLowerCase()] ?? 'regular',
        italic: style.includes('Italic')
      };
      let a = `.${fontWeight}`;
      let l = tb(i.fontWeight, a, o, 'Font.Weight', t);
      let d = l ?? a;
      (fontWeight !== 'regular' || l) && s.push(n8(`.weight(${d})`, 1));
      italic && s.push(n8('.italic()', 1));
    }
    return {
      codeLines: s,
      constants: o
    };
  }(e, t);
  if (codeLines?.length) {
    if (codeLines.length === 1) {
      let e = [n8(`.font(${codeLines[0].code})`, 0, void 0, codeLines[0].matchingVars)];
      d.font = e;
    } else {
      let e = y(codeLines, 1);
      let t = [n8('.font('), ...e, n8(')')];
      d.font = t;
    }
  }
  let m = new Set([...constants, ..._constants25, ..._constants26, ..._constants27]);
  let h = tZ(e, d);
  return tO({
    viewName: 'Text',
    properties: d,
    constants: m,
    matchingVars: h
  });
}
async function t2(e, t) {
  return e instanceof _$$a ? tJ(e, t) : e instanceof _$$L ? tX(e, t) : e instanceof _$$z ? t1(e, t) : e instanceof _$$j ? tQ(e, t) : e instanceof _$$B2 || e instanceof _$$F ? tX(e, t) : e instanceof _$$B ? [] : [{
    name: 'Unimplemented',
    language: 'swift',
    lines: [n8('iOS codegen for nodes of type Unknown has not been implemented yet')]
  }];
}
async function t5(e, t) {
  return {
    sections: await t2(e, t)
  };
}
function t4(e) {
  return {
    id: e.id,
    name: e.name
  };
}
class t3 {
  constructor(e, t = [], i = [], n = []) {
    this.getStyleById = e;
    this.colors = t;
    this.textStyles = i;
    this.effects = n;
  }
  resolveColor(e) {
    let t = this.colors.find(t => t.id === e);
    if (!t) {
      let i = this.getStyleById(e);
      i && i.type === 'PAINT' && (t = t4(i), this.colors.push(t));
    }
    return t;
  }
  resolveEffect(e) {
    let t = this.effects.find(t => t.id === e);
    if (!t) {
      let i = this.getStyleById(e);
      i && i.type === 'EFFECT' && (t = t4(i), this.effects.push(t));
    }
    return t;
  }
  resolveTextStyle(e) {
    let t = this.textStyles.find(t => t.id === e);
    if (!t) {
      let i = this.getStyleById(e);
      i && i.type === 'TEXT' && (t = t4(i), this.textStyles.push(t));
    }
    return t;
  }
}
class t6 {
  constructor(e, t = []) {
    this.getVariableById = e;
    this.cachedVariables = t;
  }
  resolveVariable(e) {
    let t = this.cachedVariables.find(t => t.id === e);
    if (!t) {
      let i = this.getVariableById(e);
      i && (t = i, this.cachedVariables.push(t));
    }
    return t;
  }
}
class t8 {
  constructor(e, t, i = ColorSpaceEnum.SRGB) {
    this.nodes = {};
    this.stylesResolver = e;
    this.variableResolver = t;
    this.colorProfile = i;
  }
  getNode(e) {
    let t = e.id;
    this.nodes[t] || (this.nodes[t] = function (e, t) {
      if (e.type === 'VECTOR' || e.type === 'BOOLEAN_OPERATION' || e.isAsset && !('fills' in e ? Array.isArray(e.fills) ? e.fills.find(e => e.type === 'IMAGE' || e.type === 'VIDEO') != null : null : e.type === 'MEDIA')) return _$$a.from(e, t);
      switch (e.type) {
        case 'LINE':
        case 'ELLIPSE':
        case 'RECTANGLE':
          return _$$j.from(e, t);
        case 'FRAME':
        case 'GROUP':
          return _$$L.from(e, t);
        case 'COMPONENT':
          return _$$F.from(e, t);
        case 'COMPONENT_SET':
          return _$$B.from(e, t);
        case 'INSTANCE':
          return _$$B2.from(e, t);
        case 'TEXT':
          return _$$z.from(e, t);
        default:
          return J3.from(e);
      }
    }(e, this));
    return this.nodes[t];
  }
  invalidate(e) {
    this.nodes[e] && delete this.nodes[e];
  }
}
var $$il0 = (e => (e.CSS = 'CSS', e.IOS = 'IOS', e.IOS_UIKIT = 'IOS_UIKIT', e.ANDROID = 'ANDROID', e.ANDROID_XML = 'ANDROID_XML', e.CSSBUILDER = 'CSSBUILDER', e))($$il0 || {});
let id = new Map([['CSS', th], ['IOS', t5], ['ANDROID', er], ['CSSBUILDER', tf]]);
class ic {
  constructor(e) {
    this.sceneGraph = e;
  }
  prepareVmIfNeeded() {
    if (this.figma) return;
    let {
      addShutdownAction,
      closePlugin,
      noOpVm
    } = _$$e2();
    createPluginInstance(noOpVm, {
      stats: new PluginApiMetrics(),
      pluginVersionID: '',
      name: 'First Party',
      command: '',
      queryMode: !1,
      userID: debugState.getState().user?.id || '',
      pluginID: 'CSS',
      titleIconURL: '',
      openFileKey: debugState.getState().openFile?.key || '',
      apiVersion: pS,
      closePlugin,
      addShutdownAction,
      apiMode: {
        type: 'PLUGIN',
        noOpUI: !0
      },
      enableProposedApi: !0,
      enablePrivatePluginApi: !0,
      deferRunEvent: !1,
      validatedPermissions: PluginPermissions.forFirstPartyPlugin(),
      isLocal: !1,
      capabilities: ['codegen'],
      allowedDomains: gH,
      editorType: [ManifestEditorType.DEV, ManifestEditorType.INSPECT],
      html: null,
      incrementalSafeApi: !1,
      sceneGraph: this.sceneGraph,
      enableNativeJsx: !1,
      isPluginExemptFromPluginDataLimits: !0,
      enableResponsiveSetHierarchyMutations: !1
    });
    let {
      figma
    } = noOpVm.scope;
    this.figma = figma;
    this.closePlugin = closePlugin;
    this.figma.skipInvisibleInstanceChildren = !0;
  }
  dispose() {
    this.nodeCacheDisposable?.();
    this.nodeCacheDisposable = void 0;
    this.nodeCache = void 0;
    this.closePlugin?.();
    this.closePlugin = void 0;
    this.figma = void 0;
  }
  async getCSSPropertiesOfSubTree({
    nodeId: e,
    preferences: t,
    canRunCodegenArgs: i
  }) {
    if (!isCopyExportAllowed(i)) {
      return {
        propertiesByLayer: {},
        error: new Error('Codegen is not allowed')
      };
    }
    this.prepareVmIfNeeded();
    this.nodeCache || this.rebuildNodeCache();
    try {
      let i = this.figma.getNodeById(e);
      if (!i) {
        return {
          propertiesByLayer: {}
        };
      }
      let n = this.nodeCache.getNode(i);
      let a = debugState.getState();
      let o = !!a.openFile && isExportRestricted(a.openFile);
      return {
        propertiesByLayer: await tA(n, {
          unit: t?.unit ?? MeasurementUnit.PIXEL,
          scaleFactor: t?.scaleFactor || 1,
          customSettings: t?.customSettings,
          isExportRestricted: o
        }, 20)
      };
    } catch (e) {
      return {
        propertiesByLayer: {},
        error: e
      };
    }
  }
  async getHTMLSkeleton({
    nodeId: e,
    canRunCodegenArgs: t
  }) {
    if (!isCopyExportAllowed(t)) {
      return {
        code: '',
        error: new Error('Codegen is not allowed')
      };
    }
    this.prepareVmIfNeeded();
    this.nodeCache || this.rebuildNodeCache();
    try {
      let t = this.figma.getNodeById(e);
      if (!t) {
        return {
          code: ''
        };
      }
      this.nodeCache.getNode(t);
      return {
        code: await ''
      };
    } catch (e) {
      return {
        code: '',
        error: e
      };
    }
  }
  rebuildNodeCache() {
    this.prepareVmIfNeeded();
    let e = new t3(this.figma.getStyleById);
    let t = new t6(this.figma.variables.getVariableById);
    this.nodeCacheDisposable && this.nodeCacheDisposable();
    let {
      nodeCache,
      dispose
    } = function (e, t, i = ColorSpaceEnum.SRGB) {
      let n = new t8(e, t, i);
      let a = ({
        id: e
      }) => {
        n.invalidate(e);
      };
      BT(a);
      return {
        nodeCache: n,
        dispose: () => q$(a)
      };
    }(e, t, function (e) {
      switch (e) {
        case 'LEGACY':
        case 'SRGB':
          return ColorSpaceEnum.SRGB;
        case 'DISPLAY_P3':
          return ColorSpaceEnum.DISPLAY_P3;
      }
    }(this.figma.root.documentColorProfile ?? 'LEGACY'));
    this.nodeCache = nodeCache;
    this.nodeCacheDisposable = dispose;
  }
  async runExtension({
    selectedNodeId: e,
    codegenPluginID: t,
    preferences: i,
    canRunCodegenArgs: n,
    generateForCodePanel: a
  }) {
    if (!isCopyExportAllowed(n)) {
      return {
        error: new Error('Codegen is not allowed'),
        code: []
      };
    }
    if (t === 'ANDROID_XML') {
      return {
        code: function (e) {
          let t = c()(e.trim().split('\n'), e => {
            let t = e.startsWith('<');
            let i = /([^-]>$)/.test(e);
            return n8(e, t || i ? 0 : 1);
          });
          return [{
            name: 'XML',
            language: 'xml',
            lines: [n8('\x3C!-- Auto layout, grids, variables, and unit scale are not yet supported --\x3E'), ...t]
          }];
        }(Fullscreen.generateAndroidCodeForNode(e, this.sceneGraph.scene)),
        autocomplete: []
      };
    }
    if (t === 'IOS_UIKIT') {
      return {
        code: function (e) {
          let t = e.trim().split('\n').map(e => n8(e));
          return [{
            name: 'UIKit',
            language: 'swift',
            lines: [n8('// Auto layout, grids, variables, and unit scale are not yet supported'), ...t]
          }];
        }(Fullscreen.generateIOSSwiftCodeForNode(e, this.sceneGraph.scene)),
        autocomplete: []
      };
    }
    if (!id.has(t)) {
      return {
        error: new Error(`Cannot run ${t}`),
        code: []
      };
    }
    let o = id.get(t);
    this.prepareVmIfNeeded();
    this.nodeCache || this.rebuildNodeCache();
    let l = this.figma.getNodeById(e);
    if (!l) {
      return {
        code: []
      };
    }
    let d = this.nodeCache.getNode(l);
    let p = debugState.getState();
    let m = !!p.openFile && isExportRestricted(p.openFile);
    try {
      let {
        sections,
        autocomplete
      } = await o(d, {
        unit: i?.unit ?? MeasurementUnit.PIXEL,
        scaleFactor: i?.scaleFactor || 1,
        customSettings: i?.customSettings,
        isExportRestricted: m,
        generateForCodePanel: a
      });
      return {
        code: sections,
        autocomplete
      };
    } catch (e) {
      return {
        error: e,
        code: []
      };
    }
  }
}
let iu = new ic(getSceneGraphInstance());
export function $$ip1(e) {
  return void 0 === e || e.scene === getSceneGraphInstance().scene ? iu : n && e.scene === n.sceneGraph.scene ? n : (n?.dispose(), n = new ic(new SceneGraph(e.getSceneType())));
}
_$$P(async e => {
  iu.prepareVmIfNeeded();
  iu.rebuildNodeCache();
  let t = debugState.getState();
  let i = _$$S(t);
  return await iu.runExtension({
    selectedNodeId: e.guid,
    codegenPluginID: 'CSS',
    preferences: {
      unit: MeasurementUnit.PIXEL,
      scaleFactor: 1
    },
    canRunCodegenArgs: i
  });
});
export const qZ = $$il0;
export const px = $$ip1;