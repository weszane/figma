import { XZ, YK, LU } from "../vendor/897392";
import { wN, K5, HC, BC, b2, HT, FK, c1, tn, Bq } from "../vendor/157953";
import { VF, c4, K2, Tb, mw, Nc, OW, se, nf, YL, Cv, rH, Tp } from "../vendor/691964";
export function $$a0(e) {
  return VF(h("", null, null, null, [""], e = c4(e), 0, [0], e));
}
function h(e, r, n, i, a, m, v, y, b) {
  for (O = 0, x = 0, w = v, k = 0, _ = 0, S = 0, E = 1, A = 1, C = 1, T = 0, I = "", P = a, R = m, M = i, D = I, void 0; A;) {
    var O;
    var x;
    var w;
    var k;
    var _;
    var S;
    var E;
    var A;
    var C;
    var T;
    var I;
    var P;
    var R;
    var M;
    var D;
    switch (S = T, T = K2()) {
      case 40:
        if (108 != S && 58 == wN(D, w - 1)) {
          -1 != K5(D += HC(Tb(T), "&", "&\f"), "&\f") && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += Tb(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += mw(S);
        break;
      case 92:
        D += Nc(OW() - 1, 7);
        continue;
      case 47:
        switch (se()) {
          case 42:
          case 47:
            BC(p(nf(K2(), OW()), r, n), b);
            break;
          default:
            D += "/";
        }
        break;
      case 123 * E:
        y[O++] = b2(D) * C;
      case 125 * E:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            A = 0;
          case 59 + x:
            -1 == C && (D = HC(D, /\f/g, ""));
            _ > 0 && b2(D) - w && BC(_ > 32 ? g(D + ";", i, n, w - 1) : g(HC(D, " ", "") + ";", i, n, w - 2), b);
            break;
          case 59:
            D += ";";
          default:
            if (BC(M = d(D, r, n, O, x, a, y, I, P = [], R = [], w), m), 123 === T) {
              if (0 === x) h(D, r, M, M, P, m, w, y, R);else switch (99 === k && 110 === wN(D, 3) ? 100 : k) {
                case 100:
                case 108:
                case 109:
                case 115:
                  h(e, M, M, i && BC(d(e, M, M, 0, 0, a, y, I, a, P = [], w), R), a, R, w, y, i ? P : R);
                  break;
                default:
                  h(D, M, M, M, [""], R, 0, y, R);
              }
            }
        }
        O = x = _ = 0;
        E = C = 1;
        I = D = "";
        w = v;
        break;
      case 58:
        w = 1 + b2(D);
        _ = S;
      default:
        if (E < 1) {
          if (123 == T) --E;else if (125 == T && 0 == E++ && 125 == YL()) continue;
        }
        switch (D += HT(T), T * E) {
          case 38:
            C = x > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            y[O++] = (b2(D) - 1) * C;
            C = 1;
            break;
          case 64:
            45 === se() && (D += Tb(K2()));
            k = se();
            x = w = b2(I = D += Cv(OW()));
            T++;
            break;
          case 45:
            45 === S && 2 == b2(D) && (E = 0);
        }
    }
  }
  return m;
}
function d(e, r, n, a, h, d, p, g, m, v, y) {
  for (b = h - 1, O = 0 === h ? d : [""], x = FK(O), w = 0, k = 0, _ = 0, void 0; w < a; ++w) {
    var b;
    var O;
    var x;
    var w;
    var k;
    var _;
    for (S = 0, E = c1(e, b + 1, b = tn(k = p[w])), A = e, void 0; S < x; ++S) {
      var S;
      var E;
      var A;
      (A = Bq(k > 0 ? O[S] + " " + E : HC(E, /&\f/g, O[S]))) && (m[_++] = A);
    }
  }
  return rH(e, r, n, 0 === h ? XZ : g, m, v, y);
}
function p(e, r, n) {
  return rH(e, r, n, YK, HT(Tp()), c1(e, 2, -2), 0);
}
function g(e, r, n, a) {
  return rH(e, r, n, LU, c1(e, 0, a), c1(e, a + 1, -1), a);
}
export const wE = $$a0;