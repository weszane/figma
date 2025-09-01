import { useEffect } from "react";
import { d4 } from "../vendor/514228";
import { Ez5, nQ7 } from "../figma_app/763686";
import { Qw } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { PN } from "../figma_app/257275";
import { vu } from "../figma_app/516028";
import { a$M } from "../figma_app/43951";
import { ut } from "../figma_app/84367";
export function $$_1() {
  return ut(Ez5?.interopToolMode(), nQ7.SELF) === nQ7.SELF;
}
export function $$h0() {
  return ut(Ez5?.canEnterDesignMode(), !1);
}
export function $$m2() {
  let e = function () {
    let e = d4(vu);
    let t = e?.key ?? null;
    let r = Rs(a$M, {
      key: t ?? ""
    }, {
      enabled: !!t
    });
    let n = Qw.useTransform(r, e => !!oA(e.file)?.hasPermission);
    return !!PN() || n.unwrapOr(!1);
  }();
  useEffect(() => {
    Ez5?.canEnterDesignMode().set(e);
  }, [e]);
}
export const Bk = $$h0;
export const HW = $$_1;
export const VD = $$m2;