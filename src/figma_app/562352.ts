export function $$n3(e) {
  return new Promise(t => {
    let r = Array(e.length);
    let n = e.length;
    let i = () => {
      0 === n && t(r);
    };
    for (let t = 0; t < e.length; t++) e[t].then(e => {
      r[t] = {
        type: "resolve",
        resolve: e,
        reject: void 0
      };
      n--;
      i();
    }, e => {
      r[t] = {
        type: "reject",
        resolve: void 0,
        reject: e
      };
      n--;
      i();
    });
    i();
  });
}
export function $$i0(e, t) {
  return new Promise(r => {
    let n = 0;
    let i = e.length;
    let a = () => {
      0 === i && r(s);
    };
    let s = Array(e.length);
    let o = t => {
      let r = e[t];
      return void 0 !== r && (r().then(e => {
        s[t] = {
          type: "resolve",
          resolve: e,
          reject: void 0
        };
        i--;
        l();
        a();
      }, e => {
        s[t] = {
          type: "reject",
          resolve: void 0,
          reject: e
        };
        i--;
        l();
        a();
      }), !0);
    };
    let l = () => {
      let e = o(n);
      n++;
      return e;
    };
    for (let e = 0; e < t && l(); e++);
    a();
  });
}
export function $$a1(e) {
  let t = null;
  return () => (null === t && (t = e()).catch(() => t = null), t);
}
export async function $$s2(e, t, r) {
  return await new Promise((n, i) => {
    let a;
    let s = function() {
      0 === t ? i(a) : e().then(n).catch(e => {
        t--;
        a = e;
        setTimeout(function() {
          s();
        }, r);
      });
    };
    s();
  });
}
export const Ed = $$i0;
export const Kt = $$a1;
export const OF = $$s2;
export const _7 = $$n3; 
