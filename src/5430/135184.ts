import { jsx } from "react/jsx-runtime";
import { wA, d4 } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { dx, Nn, MZ } from "../figma_app/399472";
import { A, jT } from "../figma_app/711113";
import { my } from "../figma_app/300692";
import { xQ, I0 } from "../figma_app/45218";
import { vR } from "../5430/309696";
export function $$m0({
  pluginId: e,
  containerClassName: t
}) {
  let r = wA();
  let m = d4(t => my(e, t.publishedPlugins));
  let _ = d4(e => A(e, m));
  return void 0 !== _ && jT(_) ? jsx("div", {
    className: t,
    children: jsx(vR, {
      onClickAccept: () => {
        r(dx({
          widget_id: xQ(m) ? m.id : void 0,
          plugin_id: I0(m) ? m.id : void 0,
          src: Nn.COMMUNITY_PAGE
        }));
        r(F.enqueue({
          message: _$$t("community.detail_view.accepted_publisher_invite")
        }));
      },
      onClickDecline: () => {
        r(MZ({
          widget_id: xQ(m) ? m.id : void 0,
          plugin_id: I0(m) ? m.id : void 0,
          src: Nn.COMMUNITY_PAGE
        }));
        r(F.enqueue({
          message: _$$t("community.detail_view.declined_publisher_invite")
        }));
      },
      label: _$$t("community.detail_view.you_have_been_added_as_a_publisher_of_this_resource")
    })
  }) : null;
}
export const l = $$m0;