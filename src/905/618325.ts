import { getSingletonSceneGraph } from "../905/700578";
import { logWarning } from "../905/714362";
export class $$a0 {
  constructor() {
    this.jsxPositionToCharacterOffset = new Map();
  }
  translateBundledSourceCodeToCurrentCodeFileOffsets(e, t, i) {
    if (i.codeBuildId !== t) {
      logWarning("direct_manipulation", "Code build ID mismatch", {
        bundledSourceCodeCodeBuildId: i.codeBuildId,
        codeBuildId: t
      });
      return null;
    }
    let {
      fullFilePath,
      line,
      column
    } = e;
    let o = this.jsxCallToCharacterOffsetInBundleCode({
      fullFilePath,
      line,
      column,
      bundledSourceCode: i
    });
    if (null === o) return null;
    let l = this.getCharacterOffsetInCurrentCodeFile(o.offset, o.codeFileNodeGUID, o.collaborativeSourceCodeVersion);
    return null === l ? null : {
      widecharPosition: l,
      sourceCodeJSXCallId: e.sourceCodeJSXCallId,
      fullFilePath
    };
  }
  jsxCallToCharacterOffsetInBundleCode({
    fullFilePath: e,
    line: t,
    column: i,
    bundledSourceCode: n
  }) {
    let r = n.codeFilesystemMetadata?.["file://" + e];
    if (!r?.collaborativeSourceCodeVersion || !r?.codeFileNodeGUID) return null;
    let {
      collaborativeSourceCodeVersion,
      codeFileNodeGUID
    } = r;
    let o = `${codeFileNodeGUID}~${collaborativeSourceCodeVersion}~${t}~${i}`;
    let l = this.jsxPositionToCharacterOffset.get(o);
    if (void 0 !== l) return l;
    let d = n.codeFilesystem?.["file://" + e];
    if (void 0 === d) return null;
    let c = 0;
    let u = t - 1;
    for (let e of d) {
      if (0 === u) break;
      c++;
      "\n" === e && u--;
    }
    if (0 !== u) return null;
    let p = {
      offset: c += i,
      codeFileNodeGUID,
      collaborativeSourceCodeVersion
    };
    this.jsxPositionToCharacterOffset.set(o, p);
    return p;
  }
  getCharacterOffsetInCurrentCodeFile(e, t, i) {
    let r = getSingletonSceneGraph();
    let a = r.get(t)?.collaborativeSourceCode;
    return a && a.adjustWidecharPositionFromPreviousVersion(i, e) || null;
  }
}
export const E = $$a0;