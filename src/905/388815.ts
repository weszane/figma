import { useEffect } from "react";
import { zA } from "../vendor/491721";
import { DF } from "../vendor/463802";
import { w, vJ, I2, sT, Wg } from "../vendor/408361";
import { Jf } from "../905/999278";
let l = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;
let $$d0 = function () {
  let [e] = DF();
  useEffect(() => {
    let t = e.registerCommand(w, t => {
      let i = t.clipboardData;
      if (!i) return !1;
      let n = i.getData("text");
      return !!function (e) {
        if (!new RegExp(l).test(e)) return !1;
        try {
          new URL(e);
          return !0;
        } catch (e) {
          return !1;
        }
      }(n) && "" !== Jf(n) && (e.update(() => {
        let e = vJ();
        if (I2(e)) {
          let t = zA(n, {
            target: "_blank",
            rel: "noreferrer noopener nofollow ugc"
          });
          let i = e.getTextContent();
          let a = sT(i || n);
          t.append(a);
          e.insertNodes([t]);
        }
      }), t.preventDefault(), !0);
    }, Wg);
    return () => {
      t();
    };
  }, [e]);
  return null;
};
export const A = $$d0;