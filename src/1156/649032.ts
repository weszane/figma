export function $$r0(e, t) {
  return {
    filePath: t.fullFilePath,
    snippetStartLine: t.jsxSnippet.snippetStartLine,
    tagLine: t.jsxSnippet.tagLine,
    snippet: t.jsxSnippet.code,
    tagName: e.tagName,
    fileImports: t.imports,
    componentHeader: t.componentHeader
  };
}
export const F = $$r0;