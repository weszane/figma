import { t as _$$t } from "../905/303541";
import { hS } from "../905/216495";
import { wQ } from "../figma_app/385874";
import { lJ } from "../905/275640";
import { Fk } from "../figma_app/167249";
export function $$l1({
  getTypeCountAndNodeOverrides: e,
  getNodeTypeStringOverrides: t
} = {}) {
  let [r] = lJ("leftEndCap");
  let [c] = lJ("rightEndCap");
  let u = hS(r) ? r : void 0;
  let p = hS(c) ? c : void 0;
  return Fk((e, t, r) => {
    let {
      nodeType,
      count,
      node
    } = function (e, t) {
      if (!e || 0 === e.length) return {
        nodeType: null,
        count: 0,
        node: null
      };
      if (t) {
        let r = t(e);
        if (r) return r;
      }
      if (1 === e.length && e[0]) return {
        nodeType: e[0].type,
        count: 1,
        node: e[0]
      };
      if (2 === e.length) {
        let t = e.find(e => "TEXT" === e.type);
        let r = e.find(e => "SHAPE_WITH_TEXT" === e.type);
        if (t && r) return {
          nodeType: "TEXT",
          count: 1,
          node: t
        };
        let n = e.find(e => "STICKY" === e.type);
        if (t && n) return {
          nodeType: "STICKY",
          count: 1,
          node: n
        };
        let i = e.find(e => "CODE_BLOCK" === e.type);
        if (t && i) return {
          nodeType: "CODE_BLOCK",
          count: 1,
          node: i
        };
      }
      return e.every(e => ["FRAME", "SECTION", "GROUP"].includes(e.type)) ? {
        nodeType: "MIXED_FRAME_SECTION_GROUP",
        count: e.length,
        node: null
      } : {
        nodeType: "MIXED",
        count: e.length,
        node: null
      };
    }(e.getDirectlySelectedNodes(), t);
    return node ? {
      nodeType,
      count,
      nodeTypeAsUserDisplayableString: function (e, t, r, i) {
        if (i) {
          let n = i(e, t, r);
          if (n) return n;
        }
        if (["RECTANGLE", "ROUNDED_RECTANGLE"].includes(e.type)) {
          let t = $$d0(e);
          if (t) return t;
        }
        switch (e.type) {
          case "ELLIPSE":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_ellipse");
          case "LINE":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_line");
          case "REGULAR_POLYGON":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_polygon");
          case "RECTANGLE":
          case "ROUNDED_RECTANGLE":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_rectangle");
          case "SECTION":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_section");
          case "SLICE":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_slice");
          case "STAR":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_star");
          case "TEXT":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_text");
          case "TEXT_PATH":
            return _$$t("fullscreen.properties_panel.layer_header.node_type_text_on_a_path");
          case "VECTOR":
            if (wQ(t) || wQ(r)) return _$$t("fullscreen.properties_panel.layer_header.node_type_arrow");
            return _$$t("fullscreen.properties_panel.layer_header.node_type_vector_path");
          default:
            return e.name;
        }
      }(node, u, p, r)
    } : {
      nodeType,
      count,
      nodeTypeAsUserDisplayableString: null
    };
  }, e, t);
}
export function $$d0(e) {
  let t = "SHAPE_WITH_TEXT" === e.type && e.immutableFrameShape || e;
  let r = t.hasEnabledAnimatedPaint || t.hasEnabledVideoPaint;
  let i = t.hasEnabledStaticImagePaint;
  return r ? _$$t("fullscreen.properties_panel.layer_header.node_type_video") : i ? _$$t("fullscreen.properties_panel.layer_header.node_type_image") : void 0;
}
export const j = $$d0;
export const u = $$l1;