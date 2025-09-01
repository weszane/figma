import { useMemo, useCallback, useEffect } from "react";
import { Hg } from "../figma_app/304955";
import { t8O } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { UN } from "../905/700578";
import { eU, fp } from "../figma_app/27355";
import { az } from "../905/449184";
import { tS } from "../figma_app/516028";
import { Wh } from "../figma_app/615482";
import { N6 } from "../figma_app/275370";
import { nc } from "../figma_app/570630";
let g = Wh(() => eU(null));
let p = Wh(() => eU(null));
let f = Wh(() => eU(null));
let y = {
  library_type: "team",
  library_name: "Unknown",
  library_file_key: "",
  library_key: _$$l(""),
  thumbnail_url: "",
  global_css: ""
};
let _ = {
  library_type: "team",
  library_name: "Loading...",
  library_file_key: "",
  library_key: _$$l(""),
  thumbnail_url: "",
  global_css: ""
};
export function $$b2(e) {
  let {
    allDsImportReadyLibraries,
    allDsImportReadyLibrariesRequestStatus
  } = $$v0();
  return useMemo(() => {
    if (!e) return null;
    let r = e.map(e => "user" !== e.type ? null : e.libraryKey).filter(e => !!e);
    if (0 === r.length) return null;
    let i = r[r.length - 1];
    if ("loaded" === allDsImportReadyLibrariesRequestStatus) {
      let e = allDsImportReadyLibraries?.find(e => e.library_key === i);
      return e ? {
        type: "LIBRARY",
        library: e
      } : {
        type: "LIBRARY",
        library: y
      };
    }
    return "loading" === allDsImportReadyLibrariesRequestStatus ? {
      type: "LIBRARY",
      library: _
    } : {
      type: "LIBRARY",
      library: y
    };
  }, [allDsImportReadyLibraries, e, allDsImportReadyLibrariesRequestStatus]);
}
export function $$j1() {
  let [e, t] = fp(g);
  let n = tS();
  let l = useCallback(e => {
    if (e.raw_text_styles) {
      let t = JSON.parse(e.raw_text_styles || "[]");
      l7.ai("figmake custom fonts", () => {
        t.forEach(e => {
          e.fontFamily && e.fontWeight && function(e) {
            let t = t8O?.getLocalTextStyleFontInfo();
            if (t && t.find(t => t.family === e.fontFamily && t.style === e.styleName)) return;
            let n = UN().createStyle("TEXT");
            n.fontName = {
              family: e.fontFamily,
              style: e.styleName,
              postscript: e.postscript
            };
            n.name = `${e.fontFamily}: ${e.styleName}`;
          }({
            fontFamily: e.fontFamily,
            styleName: e.fontWeight,
            postscript: e.postscript || ""
          });
        });
      });
    }
    let r = Hg(nc)["/styles/globals.css"];
    r && (r.sourceCode = e.global_css);
    t({
      type: "LIBRARY",
      library: e
    });
    az.trackDefinedEvent("ds_import.library_selected", {
      fileKey: n || "",
      libraryKey: e.library_key
    });
  }, [t, n]);
  let x = useCallback(() => {
    e?.library && az.trackDefinedEvent("ds_import.library_used_in_generation", {
      fileKey: n || "",
      libraryKey: e.library.library_key
    });
    t(null);
  }, [t, n, e]);
  let m = useCallback(n => {
    e && t({
      ...e,
      frozen: n
    });
  }, [e, t]);
  return {
    libraryImport: e,
    createLibraryImport: l,
    stashLibraryImport: x,
    setFrozenOnLibaryImport: m
  };
}
export function $$v0() {
  let [e, t] = fp(p);
  let [n, i] = fp(f);
  useEffect(() => {
    null === n && (i("loading"), N6().then(e => {
      t(e.data.meta);
      i("loaded");
    }).catch(e => {
      i("error");
    }));
  }, [n, i, t]);
  return {
    allDsImportReadyLibraries: e,
    allDsImportReadyLibrariesRequestStatus: n
  };
}
export const Bo = $$v0;
export const S1 = $$j1;
export const pF = $$b2; 
