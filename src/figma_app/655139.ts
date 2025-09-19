import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { D } from '../905/273829';
import { getI18nString } from '../905/303541';
import { ANDROID, ANDROID_XML, CSSBUILDER, FIGMA_PROPERTIES, IOS, IOS_UIKIT, SupportedPlatforms, WEB } from '../905/359509';
import { findCodegenLanguage, getCodegenLanguages } from '../905/661977';
import { useAtomWithSubscription } from '../figma_app/27355';
import { isDevModePlugin } from '../figma_app/300692';
import { getLocalPlugins, usePluginManifestById, getAllPluginVersions, findPluginOrWidgetByFileId } from '../figma_app/844435';
export function $$p4(e) {
  let t = typeof e == 'string' ? {
    type: 'first-party',
    id: e
  } : e;
  return t && t.id && (t.type !== 'first-party' || SupportedPlatforms[t.id]) ? t : {
    type: 'first-party',
    id: WEB
  };
}
export function $$_1() {
  return $$h2($$m3());
}
export function $$h2(e) {
  let t = getLocalPlugins();
  let r = getAllPluginVersions();
  return useMemo(() => ({
    format(n) {
      if (n?.type === 'first-party') {
        switch (n?.id) {
          case CSSBUILDER:
            return 'CssBuilder';
          case WEB:
            return getI18nString('dev_handoff.code.lang_css');
          case IOS:
            return getI18nString('dev_handoff.code.lang_swiftui');
          case IOS_UIKIT:
            return getI18nString('dev_handoff.code.lang_uikit');
          case ANDROID:
            return getI18nString('dev_handoff.code.lang_compose');
          case ANDROID_XML:
            return getI18nString('dev_handoff.code.lang_android_xml');
          case FIGMA_PROPERTIES:
            return getI18nString('dev_handoff.code.lang_figma');
        }
      }
      if (e) {
        let i = n?.type === 'local-plugin' ? t[n.id] : n?.type === 'published-plugin' && e.plugin_id === n?.id ? r[n.id] ?? e : null;
        if (i) return getCodegenLanguages(i).length === 1 ? i.name : findCodegenLanguage(i, n?.pluginLanguage ?? '').label ?? i.name;
      }
      return '';
    }
  }), [r, t, e]);
}
export function $$m3() {
  return $$g0($$E5());
}
export function $$g0(e) {
  let t = findPluginOrWidgetByFileId((e?.type !== 'first-party' ? e?.id : '') ?? '', {
    searchLocalPlugins: !0,
    searchPublishedPlugins: !0
  });
  let {
    plugin
  } = usePluginManifestById((e?.type === 'published-plugin' ? e?.id : '0') ?? '0', e?.type === 'published-plugin');
  if (!e) return null;
  let n = t || plugin;
  return n && isDevModePlugin(n) ? n : null;
}
export function $$f6(e, t) {
  if (!e || !e.codeSyntax) return null;
  switch (t) {
    case WEB:
    case CSSBUILDER:
      return e.codeSyntax[0] ?? null;
    case ANDROID:
    case ANDROID_XML:
      return e.codeSyntax[1] ?? null;
    case IOS:
    case IOS_UIKIT:
      return e.codeSyntax[2] ?? null;
  }
  return null;
}
export function $$E5() {
  let e = useAtomWithSubscription(D);
  let t = useSelector(e => e.mirror.appModel.devHandoffCodeLanguage);
  let r = useSelector(e => e.selectedView);
  let o = t;
  r.view === 'orgAdminSettings' && e && (o = e);
  return useMemo(() => $$p4(o), [o]);
}
export const AC = $$g0;
export const P0 = $$_1;
export const Pt = $$h2;
export const QN = $$m3;
export const XP = $$p4;
export const v4 = $$E5;
export const xv = $$f6;