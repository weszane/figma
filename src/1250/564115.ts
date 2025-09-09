import { useMemo } from "react";
import { $P } from "../vendor/218029";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { OG, w6 } from "../1250/340571";
import { Tp } from "../1250/282084";
function l(e, t, n, a) {
  return "" === t ? e.sort((e, t) => e.name.localeCompare(t.name)).slice(0, 20).map(e => ({
    title: e.name,
    subtitle: e.path,
    metadata: a(e)
  })) : $P(t, e, {
    keySelector: e => [e.path, e.name],
    threshold: .6,
    limit: 10,
    ignoreCase: !0,
    ignoreSymbols: !0
  }).map(e => ({
    title: e.name,
    subtitle: e.path,
    metadata: a(e)
  })).slice(0, 20);
}
function d({
  searchTerm: e,
  libraryKey: t
}) {
  let n = OG(t);
  let r = n?.selectedRepositories?.[0];
  let [l] = setupResourceAtomHandler(Tp({
    libraryKey: t,
    repository: r?.id ?? ""
  }), {
    enabled: !!t && n?.status === w6.Connected,
    key: "repositorySourceFilesQuery"
  });
  return {
    sourceFilesQuery: l,
    filePathToSearch: useMemo(() => function (e) {
      let t = e.match(/^https?:\/\/github\.com\/([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_.]+)\/(?:blob|tree)\/([a-zA-Z0-9-_.]+)\/(.*)$/);
      if (t) {
        let [,,,, e] = t;
        return e ?? "";
      }
      let n = e.replace(/^https?:\/\//, "");
      return /^[a-zA-Z0-9\-_./\\]+$/.test(n) ? n : "";
    }(e), [e]),
    defaultRepository: r
  };
}
export function $$c1({
  searchTerm: e,
  libraryKey: t,
  suggestions: n
}) {
  let {
    sourceFilesQuery,
    filePathToSearch,
    defaultRepository
  } = d({
    searchTerm: e,
    libraryKey: t
  });
  return {
    result: useMemo(() => {
      if (!sourceFilesQuery.data) return [];
      let t = l(sourceFilesQuery.data, filePathToSearch, defaultRepository, e => ({
        isCustomLink: !1,
        repository: {
          id: defaultRepository?.id ?? "",
          name: defaultRepository?.name ?? ""
        },
        path: e.path,
        name: e.name,
        sha: e.sha,
        type: e.type
      }));
      if (e || !n) return t;
      let a = new Set();
      let s = [];
      n.forEach(e => {
        a.has(e.src_path) || (a.add(e.src_path), s.push({
          title: e.name,
          subtitle: e.src_path,
          metadata: {
            isCustomLink: !1,
            repository: {
              id: defaultRepository?.id ?? "",
              name: defaultRepository?.name ?? ""
            },
            path: e.src_path
          }
        }));
      });
      return [...s, ...t.filter(e => !a.has(e.subtitle ?? ""))];
    }, [sourceFilesQuery.data, filePathToSearch, defaultRepository, e, n]),
    isLoading: "loading" === sourceFilesQuery.status
  };
}
export function $$_0({
  searchTerm: e,
  libraryKey: t
}) {
  let {
    sourceFilesQuery,
    filePathToSearch,
    defaultRepository
  } = d({
    searchTerm: e,
    libraryKey: t
  });
  return {
    result: useMemo(() => sourceFilesQuery.data ? l(function (e) {
      let t = new Set();
      e.forEach(e => {
        let n = e.path.split("/");
        for (let e = 1; e < n.length; e++) {
          let a = n.slice(0, e).join("/");
          t.add(a);
        }
      });
      return Array.from(t).map(e => ({
        path: e,
        name: e.split("/").pop() || e
      }));
    }(sourceFilesQuery.data), filePathToSearch, defaultRepository, e => ({
      isCustomLink: !1,
      repository: {
        id: defaultRepository?.id ?? "",
        name: defaultRepository?.name ?? ""
      },
      path: e.path,
      name: e.name,
      sha: "",
      type: "directory"
    })) : [], [sourceFilesQuery.data, filePathToSearch, defaultRepository]),
    isLoading: "loading" === sourceFilesQuery.status
  };
}
export const F = $$_0;
export const I = $$c1;