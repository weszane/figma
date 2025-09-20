import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { VariableResolvedDataType } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { useStableMemo } from "../905/19536";
import { getFileKey } from "../905/412913";
import { compareLibraryKeyWithString } from "../905/709171";
import { nR } from "../figma_app/852050";
import { useCurrentFileKey } from "../figma_app/516028";
import { SS } from "../figma_app/936646";
import { useSubscribedLibraries } from "../figma_app/155728";
import { LibraryItemTypeEnum, PrimaryWorkflowEnum } from "../figma_app/633080";
import { AH } from "../905/571648";
let _ = getFileKey();
export function $$$$A0(e, t, i) {
  let n = useStableMemo(i ?? [LibraryItemTypeEnum.VARIABLE, LibraryItemTypeEnum.STYLE]);
  let d = AH(t?.type === PrimaryWorkflowEnum.STYLE ? t.key : null, t?.type === PrimaryWorkflowEnum.STYLE ? t : null);
  let m = d?.status === "loaded" ? d.data : null;
  let A = nR();
  let y = t?.type === PrimaryWorkflowEnum.VARIABLE && "SUBSCRIBED" === t.subscriptionStatus ? t : null;
  let b = useSubscribedLibraries();
  let v = useCurrentFileKey();
  return useMemo(() => {
    let t = new Set();
    let i = [];
    function r({
      fileKey: e,
      libraryKey: n,
      name: r
    }) {
      t.has(e) || e === v || (i.push({
        fileKey: e,
        libraryKey: n,
        fileName: r
      }), t.add(e));
    }
    if (b.data) for (let t of b.data) (y && compareLibraryKeyWithString(y, t.libraryKey) || m && compareLibraryKeyWithString(m, t.libraryKey) || function (e, t, i) {
      for (let n of new Set((t ?? [null]).reduce((e, t) => (e.push(...function (e, t) {
        switch (e) {
          case VariableResolvedDataType.BOOLEAN:
            return ["numVariablesBoolean"];
          case VariableResolvedDataType.COLOR:
            {
              let e = [];
              t.some(e => e === LibraryItemTypeEnum.STYLE) && e.push("numStylesFill");
              t.some(e => e === LibraryItemTypeEnum.VARIABLE) && e.push("numVariablesColor");
              return e;
            }
          case VariableResolvedDataType.FLOAT:
            return ["numVariablesFloat"];
          case VariableResolvedDataType.STRING:
            return ["numVariablesString"];
          case VariableResolvedDataType.MAP:
          case VariableResolvedDataType.SYMBOL_ID:
          case VariableResolvedDataType.FONT_STYLE:
            return ["numVariables"];
          case VariableResolvedDataType.TEXT_DATA:
            return ["numVariablesString"];
          case VariableResolvedDataType.IMAGE:
          case VariableResolvedDataType.LINK:
          case VariableResolvedDataType.JS_RUNTIME_ALIAS:
          case VariableResolvedDataType.SLOT_CONTENT_ID:
          case null:
            return ["numVariables"];
          default:
            throwTypeError(e, `Unhandled resolved type ${e}`);
        }
      }(t, i)), e), []))) if ("number" == typeof e[n] && +e[n] > 0) return !0;
      return !1;
    }(t, e, n)) && r(t);
    if (y) {
      let e = A[y.key];
      if (e?.status === "loaded") {
        let t = e.data.variable?.file;
        t && r({
          fileKey: t.key,
          libraryKey: _$$l(t.libraryKey),
          name: t.name
        });
      }
    }
    m && r({
      fileKey: _(m),
      libraryKey: m.library_key,
      name: m.fileName
    });
    return i;
  }, [b, m, y, A, e, n, v]);
}
export function $$y1({
  resolvedTypes: e,
  selectedItem: t
}) {
  let i = $$$$A0(e, t);
  return jsx(Fragment, {
    children: i.map(e => jsx(SS, {
      fileKey: e.fileKey,
      libraryKey: e.libraryKey
    }, e.fileKey))
  });
}
export const A = $$$$A0;
export const M = $$y1;