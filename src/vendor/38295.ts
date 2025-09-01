var r = 30;
var n = 12;
module.exports = function (e, i) {
  var s;
  var o;
  var a;
  var h;
  var d;
  var p;
  var g;
  var m;
  var v;
  var y;
  var b;
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
  s = e.state;
  o = e.next_in;
  R = e.input;
  a = o + (e.avail_in - 5);
  h = e.next_out;
  M = e.output;
  d = h - (i - e.avail_out);
  p = h + (e.avail_out - 257);
  g = s.dmax;
  m = s.wsize;
  v = s.whave;
  y = s.wnext;
  b = s.window;
  O = s.hold;
  x = s.bits;
  w = s.lencode;
  k = s.distcode;
  _ = (1 << s.lenbits) - 1;
  S = (1 << s.distbits) - 1;
  r: do for (x < 15 && (O += R[o++] << x, x += 8, O += R[o++] << x, x += 8), E = w[O & _];;) {
    if (O >>>= A = E >>> 24, x -= A, 0 == (A = E >>> 16 & 255)) M[h++] = 65535 & E;else if (16 & A) for (C = 65535 & E, (A &= 15) && (x < A && (O += R[o++] << x, x += 8), C += O & (1 << A) - 1, O >>>= A, x -= A), x < 15 && (O += R[o++] << x, x += 8, O += R[o++] << x, x += 8), E = k[O & S];;) {
      if (O >>>= A = E >>> 24, x -= A, 16 & (A = E >>> 16 & 255)) {
        if (T = 65535 & E, x < (A &= 15) && (O += R[o++] << x, (x += 8) < A && (O += R[o++] << x, x += 8)), (T += O & (1 << A) - 1) > g) {
          e.msg = "invalid distance too far back";
          s.mode = r;
          break r;
        }
        if (O >>>= A, x -= A, T > (A = h - d)) {
          if ((A = T - A) > v && s.sane) {
            e.msg = "invalid distance too far back";
            s.mode = r;
            break r;
          }
          if (I = 0, P = b, 0 === y) {
            if (I += m - A, A < C) {
              C -= A;
              do M[h++] = b[I++]; while (--A);
              I = h - T;
              P = M;
            }
          } else if (y < A) {
            if (I += m + y - A, (A -= y) < C) {
              C -= A;
              do M[h++] = b[I++]; while (--A);
              if (I = 0, y < C) {
                C -= A = y;
                do M[h++] = b[I++]; while (--A);
                I = h - T;
                P = M;
              }
            }
          } else if (I += y - A, A < C) {
            C -= A;
            do M[h++] = b[I++]; while (--A);
            I = h - T;
            P = M;
          }
          for (; C > 2;) {
            M[h++] = P[I++];
            M[h++] = P[I++];
            M[h++] = P[I++];
            C -= 3;
          }
          C && (M[h++] = P[I++], C > 1 && (M[h++] = P[I++]));
        } else {
          I = h - T;
          do {
            M[h++] = M[I++];
            M[h++] = M[I++];
            M[h++] = M[I++];
            C -= 3;
          } while (C > 2);
          C && (M[h++] = M[I++], C > 1 && (M[h++] = M[I++]));
        }
      } else if ((64 & A) == 0) {
        E = k[(65535 & E) + (O & (1 << A) - 1)];
        continue;
      } else {
        e.msg = "invalid distance code";
        s.mode = r;
        break r;
      }
      break;
    } else if ((64 & A) == 0) {
      E = w[(65535 & E) + (O & (1 << A) - 1)];
      continue;
    } else if (32 & A) {
      s.mode = n;
      break r;
    } else {
      e.msg = "invalid literal/length code";
      s.mode = r;
      break r;
    }
    break;
  } while (o < a && h < p);
  o -= C = x >> 3;
  x -= C << 3;
  O &= (1 << x) - 1;
  e.next_in = o;
  e.next_out = h;
  e.avail_in = o < a ? 5 + (a - o) : 5 - (o - a);
  e.avail_out = h < p ? 257 + (p - h) : 257 - (h - p);
  s.hold = O;
  s.bits = x;
};