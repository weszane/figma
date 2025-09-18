import { useRef, useEffect, useMemo } from "react";
import r from "../vendor/116389";
import s from "../vendor/336892";
import { debugState } from "../905/407919";
import { J } from "../905/931050";
import { APILoadingStatus } from "../905/520829";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { p as _$$p } from "../905/896627";
import { A as _$$A } from "../905/17894";
import { Zc, Lz } from "../905/497882";
import { nK, Gp } from "../figma_app/599979";
import { Sq, dE } from "../figma_app/809727";
var a = r;
var o = s;
function A({
  error: e,
  currentValue: t,
  setValue: i
}) {
  if (!i) return !1;
  switch (e.key) {
    case "THUMBNAIL_NOT_IN_ALL_MEDIA":
      {
        let {
          thumbnailMedium,
          allMedia
        } = e.data;
        i({
          ...t,
          allMedia: [thumbnailMedium, ...allMedia]
        });
        return !0;
      }
    case "DUPLICATE_CAROUSEL_MEDIA":
      {
        let n;
        let {
          duplicateMediaBySha1
        } = e.data;
        let a = Object.values(duplicateMediaBySha1).reduce((e, i) => {
          let r = i.find(e => Sq(e)) ?? i[0];
          let a = i.filter(e => e !== r);
          t.thumbnailMedium && a.includes(t.thumbnailMedium) && (n = r, e.push(t.thumbnailMedium));
          e.push(...a);
          return e;
        }, []);
        i(n ? {
          allMedia: o()(t.allMedia, ...a),
          thumbnailMedium: n
        } : {
          ...t,
          allMedia: o()(t.allMedia, ...a)
        });
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString("community.publishing.some_media_was_deduplicated"),
          error: !1
        }));
        return !0;
      }
    case "EXTRA_MEDIA_NOT_ALLOWED":
      i({
        ...t,
        allMedia: t.allMedia.slice(0, 1)
      });
      return !0;
    case "VIDEOS_NOT_ALLOWED":
      i({
        ...t,
        allMedia: t.allMedia.filter(e => "video" !== e.type)
      });
      return !0;
  }
  return !1;
}
function y(e, t, i) {
  if (t === (i = Math.max(0, i))) return e;
  let n = e[t];
  if (!n) return e;
  let r = [...e];
  r.splice(i + (i > t ? 1 : 0), 0, n);
  r.splice(t + (i < t ? 1 : 0), 1);
  return r;
}
export function $$b0(e, t) {
  _$$p(e, A);
  let i = J(async () => t && (await t.promise), [t]);
  let r = useRef([]);
  useEffect(() => {
    let {
      currentValue
    } = e;
    if (currentValue !== _$$A) {
      o()(r.current, ...currentValue.allMedia).filter(e => dE(e) && (i.status !== APILoadingStatus.SUCCESS || e.url !== i.value?.url)).forEach(e => {
        nK(e);
      });
      return () => {
        r.current = currentValue.allMedia;
      };
    }
  }, [i, e]);
  let s = useMemo(() => {
    if (!Zc(e)) return;
    let {
      currentValue,
      setValue
    } = e;
    return function (e) {
      let {
        allMedia,
        thumbnailMedium
      } = currentValue;
      if (e === thumbnailMedium) return;
      let s = allMedia.indexOf(e);
      if (s >= 0 && thumbnailMedium) {
        let t = allMedia.indexOf(thumbnailMedium);
        setValue({
          allMedia: y(allMedia, t, s),
          thumbnailMedium: e
        });
      } else setValue({
        allMedia: a()([allMedia.includes(e) ? void 0 : e, ...(thumbnailMedium ? o()(allMedia, thumbnailMedium) : allMedia)]),
        thumbnailMedium: e
      });
    };
  }, [e]);
  let u = useRef(!1);
  useEffect(() => {
    !u.current && e.currentValue !== _$$A && i.status === APILoadingStatus.SUCCESS && s && (!e.currentValue.thumbnailMedium && i.value && s(i.value), u.current = !0);
  }, [i, e.currentValue, s]);
  let b = useMemo(() => {
    if (!s) return;
    let t = i.status === APILoadingStatus.SUCCESS ? i.value : void 0;
    if (t) {
      if (Lz(e, void 0)?.thumbnailMedium?.sha1 === t.sha1) return;
      return function () {
        s(t);
      };
    }
  }, [i, e, s]);
  let v = useMemo(() => {
    if (!Zc(e)) return;
    let {
      currentValue,
      setValue
    } = e;
    return function (...e) {
      setValue({
        allMedia: o()(currentValue.allMedia, ...e),
        thumbnailMedium: currentValue.thumbnailMedium && e.includes(currentValue.thumbnailMedium) ? void 0 : currentValue.thumbnailMedium
      });
    };
  }, [e]);
  let I = useMemo(() => {
    if (!Zc(e)) return;
    let {
      currentValue,
      setValue
    } = e;
    return function (e, n) {
      let r = y(currentValue.allMedia, e, n);
      r !== currentValue.allMedia && setValue({
        ...currentValue,
        allMedia: r
      });
    };
  }, [e]);
  let E = useMemo(() => {
    if (s) return async function (t) {
      try {
        let i = await Gp([t], e.deps.allowVideos, 1);
        if (0 === i.length) return;
        s(i[0]);
      } catch (e) {
        e instanceof Error && debugState.dispatch(VisualBellActions.enqueue({
          message: e.message,
          error: !0
        }));
        return;
      }
    };
  }, [e.deps.allowVideos, s]);
  let x = useMemo(() => {
    if (!Zc(e)) return;
    let {
      currentValue,
      setValue
    } = e;
    return async function (n) {
      try {
        let r = await Gp(n, e.deps.allowVideos, 1 / 0);
        if (0 === r.length) return;
        setValue({
          ...currentValue,
          allMedia: [...currentValue.allMedia, ...r]
        });
      } catch (e) {
        e instanceof Error && debugState.dispatch(VisualBellActions.enqueue({
          message: e.message,
          error: !0
        }));
        return;
      }
    };
  }, [e]);
  let S = useMemo(() => {
    if (E) return async function (e) {
      e.files && e.files[0] && (await E(e.files[0]), e.value = "");
    };
  }, [E]);
  let w = useMemo(() => {
    if (x) return async function (e) {
      e.files && 0 !== e.files.length && (await x(e.files), e.value = "");
    };
  }, [x]);
  return {
    ...e,
    setThumbnailMedium: s,
    hasDefaultThumbnailMedium: i.status === APILoadingStatus.SUCCESS && void 0 !== i.value ? null !== i.value : void 0,
    defaultThumbnailMediumSource: t?.source,
    restoreDefaultThumbnailMedium: b,
    deleteMedia: v,
    reorderMedium: I,
    setThumbnailMediumFromFile: E,
    addMediaFromFiles: x,
    setThumbnailMediumFromInput: S,
    addMediaFromInput: w
  };
}
export const n = $$b0;