import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { h as _$$h } from "../905/207101";
import { s_ } from "../905/17223";
import { kt } from "../figma_app/858013";
import { P } from "../905/347284";
import { t as _$$t } from "../905/303541";
import { yJ } from "../figma_app/78808";
import { Lo } from "../905/156213";
import { _z, ky } from "../905/977218";
import { ud } from "../905/862913";
import { fileEntityDataMapper } from "../905/943101";
import { Pz } from "../figma_app/300692";
import { Ju } from "../905/102752";
import { ey } from "../figma_app/918700";
import { IW, ql, fp, fV } from "../figma_app/257005";
import { M4, UC } from "../905/561298";
import { Yk, vu, g8, aq, jG, g4, qr, PJ, GC } from "../figma_app/312949";
function I(e) {
  let t = wA();
  return jsxs("div", {
    className: Yk,
    children: [jsx(IW, {
      query: e.searchQuery,
      setQuery: e.setSearchQuery,
      setSearchResults: e.setSearchResults,
      hasCloseButton: !1
    }), jsx("div", {
      className: vu,
      children: jsx(s_, {
        className: g8,
        dispatch: () => {
          t(Lo());
        }
      })
    })]
  });
}
export let $$E0 = Ju(function (e) {
  let t = wA();
  let i = "loaded" === ql().status;
  let o = ud();
  _$$h(() => {
    t(_z({}));
    let e = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = e;
    };
  });
  let _ = () => {
    C && t(ky());
    t(Lo());
  };
  let E = e => {
    e && (S(e), o[e.key] || t(yJ({
      file: e
    })));
  };
  let [x, S] = useState(null);
  let w = () => S(null);
  let [C, T] = useState("");
  let [k, R] = useState(null);
  let N = e.pluginManifestEditorType.map(Pz);
  return jsxs(ey, {
    size: "any",
    className: aq,
    hide: _,
    children: [jsx(I, {
      searchQuery: C,
      setSearchQuery: T,
      setSearchResults: R
    }), jsxs(P, {
      className: jG,
      hideScrollbar: !0,
      children: [!i && jsx("div", {
        className: g4,
        children: jsx(kt, {
          size: "small"
        })
      }), C && jsx(fp, {
        activeSearchQuery: C,
        activeFileKey: x?.key || null,
        setActiveFile: E,
        deselectActiveFile: w,
        searchResults: k,
        editorTypes: N
      }), i && !C && jsx(fV, {
        activeFileKey: x?.key || null,
        setActiveFile: E,
        deselectActiveFile: w,
        editorTypes: N
      })]
    }), jsxs("div", {
      className: qr,
      children: [jsx("div", {
        className: PJ,
        children: e.isWidget ? _$$t("community.publishing.playground_file_for_widget") : _$$t("community.publishing.playground_file_for_plugin")
      }), jsxs("div", {
        className: GC,
        children: [jsx(M4, {
          onClick: _,
          children: _$$t("general.cancel")
        }), jsx(UC, {
          disabled: !x,
          onClick: () => {
            x && (e.onAddCallback(fileEntityDataMapper.toSinatra(x)), t(Lo()), S(null));
          },
          children: _$$t("community.publishing.playground_file_add_button")
        })]
      })]
    })]
  });
}, "Playground File Selector Modal");
export const $ = $$E0;