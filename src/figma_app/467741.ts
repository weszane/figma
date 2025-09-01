import { wA } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { qR } from "../figma_app/696043";
import { RH, gU, Kq, lD } from "../figma_app/147952";
import { _i } from "../figma_app/120210";
import { TA } from "../905/372672";
import { U_ } from "../figma_app/190980";
import { vt } from "../figma_app/45218";
import { k0, ZQ } from "../figma_app/155287";
import { cq } from "../905/794154";
import { zX } from "../figma_app/882116";
import { Ag, r7 } from "../905/235578";
import { JT } from "../figma_app/930214";
export function $$g0(e) {
  let t = y(e);
  let r = function (e) {
    let {
      save
    } = E(e);
    let r = wA();
    let a = U_();
    let o = TA();
    if (!e.types.has(Ag.USER_SAVED) && !JT(e)) return {
      displayText: _$$t("community.saves.save"),
      callback: () => {
        if (save(), a && o) {
          let {
            extension
          } = e;
          r((k0(extension) ? RH : gU)({
            storeInRecentsKey: a,
            id: extension.plugin_id,
            version: e.extension.id,
            currentUserId: o,
            skipPluginRun: !0
          }));
        }
      }
    };
  }(e);
  let a = t || r;
  let {
    pop
  } = cq();
  if (a) return {
    shortcuts: [r7],
    onAction: () => {
      a.callback();
      pop();
    },
    text: a.displayText
  };
}
export function $$f1(e) {
  let t = y(e);
  if (t) return t;
}
function E(e) {
  let {
    extension
  } = e;
  let r = zX({
    extensionId: extension.plugin_id
  });
  return _i(extension.plugin_id, k0(extension) ? vt.WIDGET : vt.PLUGIN, e.publishedExtension, r);
}
function y(e) {
  let t = wA();
  let r = U_();
  let {
    extension,
    types
  } = e;
  let {
    unsave
  } = E(e);
  if (!(e.types.has(Ag.RECENT) || e.types.has(Ag.USER_SAVED) || e.types.has(Ag.LOCAL))) return;
  let p = !!(ZQ(extension) && e.publishedExtension);
  return {
    displayText: p ? _$$t("universal_insert.remove_local_version") : _$$t("universal_insert.remove"),
    callback: () => {
      !(types.has(Ag.LOCAL) && ZQ(extension) && (t(qR(extension.localFileId)), p)) && (types.has(Ag.RECENT) && r && t((k0(extension) ? Kq : lD)({
        storeInRecentsKey: r,
        resourceId: extension.plugin_id
      })), types.has(Ag.USER_SAVED) && unsave());
    }
  };
}
export const DS = $$g0;
export const rH = $$f1;