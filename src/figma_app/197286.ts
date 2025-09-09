import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { A } from "../905/920142";
import { XHR } from "../905/910117";
import { handleAtomEvent } from "../905/502364";
import { showModalHandler } from "../905/156213";
import { v } from "../figma_app/380543";
import { selectCurrentUser } from "../905/372672";
import { J } from "../figma_app/333189";
import { d4 } from "../905/759412";
export let $$_2 = "link_expired_event";
function h(e) {
  XHR.put(`/api/files/${e}/expire_public_link`);
}
let m = (e, t) => {
  let r = useRef(null);
  useEffect(() => {
    let n = e ? A(e).diff(A()) : void 0;
    void 0 !== n && n < 0x7fffffff ? (r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      r.current = null;
      t();
    }, n)) : r.current && (clearTimeout(r.current), r.current = null);
    return () => {
      r.current && clearTimeout(r.current);
    };
  }, [e, t]);
};
export function $$g1(e) {
  let t = selectCurrentUser();
  let r = useDispatch();
  let {
    file,
    onCanvasExpired
  } = e;
  let p = file?.key;
  let g = v(e.file);
  let f = useRef(void 0);
  let E = g?.activeExpiration;
  let y = g?.file;
  let b = y?.hasViewPrototypeRole;
  let T = g?.accessReverted;
  useEffect(() => {
    b && T && !f.current?.accessReverted && g.expiresAt && g.expiresAt === f.current?.expiresAt && handleAtomEvent({
      id: $$_2
    });
    f.current = g;
  }, [g, T, b]);
  m(E, useCallback(() => {
    p && (b && t || (r(showModalHandler({
      type: J
    })), onCanvasExpired?.()), h(p));
  }, [r, onCanvasExpired, p, t, b]));
}
export function $$f0(e, t) {
  m(d4(t)?.toISOString(), useCallback(() => {
    h(e);
  }, [e]));
}
export const mK = $$f0;
export const ox = $$g1;
export const q2 = $$_2;