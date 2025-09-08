import { useSelector } from 'react-redux';
import { getI18nString } from '../905/303541';
import { d8, gR, H_, oU, qi, qr, sR, Wi, ZH } from '../905/366346';
import { $ } from '../905/532878';
import { Nh } from '../905/560959';
import { parseAndNormalizeQuery } from '../905/634134';
import { EO, Ml } from '../905/691205';
import { At, L8 } from '../905/760074';
import { b } from '../905/898378';
import { atomStoreManager } from '../figma_app/27355';
import { FEditorType } from '../figma_app/53721';
import { M } from '../figma_app/80938';
import { Zt } from '../figma_app/617727';
import { e6 } from '../figma_app/707808';
import { DesignGraphElements } from '../figma_app/763686';
import { sy } from '../figma_app/930338';
export function $$y0(e) {
  return e?.view === 'fullscreen' && e?.editorType === FEditorType.DevHandoff;
}
export function $$b1() {
  return useSelector(e => $$y0(e.selectedView) && M(e) && (e.mirror.appModel.currentTool === DesignGraphElements.SELECT || e.mirror.appModel.currentTool === DesignGraphElements.DROPPER_COLOR || e.mirror.appModel.currentTool === DesignGraphElements.ANNOTATE || e.mirror.appModel.currentTool === DesignGraphElements.MEASURE));
}
export class $$v2 {
  pathToSelectedView(e, t, i, n) {
    let r = i ? parseAndNormalizeQuery(i) : {};
    let o = t[1];
    if ((o === 'design' || o === 'file') && (r['ready-for-dev'] === '1' || (r.mode === 'dev' || r.m === 'dev') && r.m !== 'auto')) {
      let i = t[3] === 'branch' && t[4] ? t[4] : t[2];
      let s = {
        view: 'fullscreen',
        editorType: e?.user ? FEditorType.DevHandoff : FEditorType.Design,
        fileKey: i
      };
      d8(n, s);
      qi(r, s);
      let o = e?.openFile?.canAccessFullDevMode;
      r['cc-version-id'] && (r['node-id'] || r['cc-node-id']) && !r.vars && o && (s.compareChangesVersionId = r['cc-version-id']);
      r['cc-activity-id'] && (r['node-id'] || r['cc-node-id']) && !r.vars && o && (s.compareChangesActivityId = r['cc-activity-id']);
      r['cc-filter-status'] && (r['cc-version-id'] || r['cc-activity-id']) && (r['node-id'] || r['cc-node-id']) && !r.vars && o && (s.filterStatusVersions = r['cc-filter-status'] === '1');
      r['cc-node-id'] && r['cc-version-id'] && !r.vars && o && (s.compareChangesNodeId = r['cc-node-id']);
      let l = b(e);
      if (r.vars === '1') {
        s.showDevModeVariablesTable = !0;
        atomStoreManager.set($, Nh.DirectUrl);
        r['var-id'] && (s.devModeVariablesTableSelectedVariable = r['var-id']);
      } else if (l && r['ready-for-dev'] === '1') {
        s.showOverview = !0;
      } else if (l && r['component-browser'] === '1') {
        s.showDevModeComponentBrowser = !0;
        s.componentKey = r['component-key'] || void 0;
        let e = e6.NONE;
        r['gh-settings'] === 'repo' ? e = e6.REPO_SELECTOR : r['gh-settings'] === 'dirs' ? e = e6.DIRECTORY_SELECTOR : r['gh-repo-selector'] === '1' && (e = e6.REPO_SELECTOR);
        s.githubRepositorySelectorMode = e;
      }
      s.showDevModeVariablesTable || atomStoreManager.set($, null);
      $$y0(s) && (r.mode === 'dev' || r.m === 'dev') && (s.mode = 'dev', !l || !r['focus-id'] || s.showOverview || r.vars || (s.devModeFocusId = r['focus-id'], r['node-id'] || (s.nodeId = r['focus-id'])));
      return s;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return !1;
  }
  selectedViewToPath(e, t) {
    if ($$y0(e) || e.view === 'fullscreen' && !0 === e.showOverview) {
      let i;
      if (e.fileKey === Zt) return oU();
      let n = this.selectedViewName(e, t);
      let r = n ? sy(n) : '';
      let a = {};
      let s = e.fileKey;
      let l = e.fileKey && t.fileByKey[e.fileKey];
      let d = 'design';
      l ? i = ZH(d, s || '', r, l, L8(l, t.repos)) : (i = `/${d}/${s}`, r ? i += `/${r}` : i += '/Untitled');
      gR(a, e.nodeId);
      H_(a, e.nodeId);
      Wi(a, e.versionId);
      e.compareChangesVersionId && (a['cc-version-id'] = e.compareChangesVersionId);
      e.filterStatusVersions && (a['cc-filter-status'] = 1);
      e.compareChangesNodeId && (a['cc-node-id'] = EO(e.compareChangesNodeId));
      e.devModeFocusId && (a['focus-id'] = EO(e.devModeFocusId));
      e.showOverview && (a['ready-for-dev'] = '1');
      e.showDevModeVariablesTable && (a.vars = '1', e.devModeVariablesTableSelectedVariable && (a['var-id'] = Ml(e.devModeVariablesTableSelectedVariable)));
      e.showDevModeComponentBrowser && (a['component-browser'] = '1', e.componentKey && (a['component-key'] = e.componentKey), e.githubRepositorySelectorMode === e6.REPO_SELECTOR ? a['gh-settings'] = 'repo' : e.githubRepositorySelectorMode === e6.DIRECTORY_SELECTOR && (a['gh-settings'] = 'dirs'));
      a.m = 'dev';
      i = sR(i, a);
      return i = qr(i, e.commentThreadId);
    }
    return null;
  }
  selectedViewName(e, t) {
    if ($$y0(e)) {
      let i = null;
      if (e.fileKey) {
        let n = t.fileByKey[e.fileKey];
        if (n) {
          let e = L8(n, t.repos);
          i = e ? At(n, e) : n.name;
        }
      }
      return i ?? getI18nString('dev_handoff.dev_handoff_view_selector.untitled');
    }
    return null;
  }
  selectedViewHasMissingResources(e, t) {
    return !!$$y0(t) && !!t.fileKey && !(t.fileKey in e.fileByKey);
  }
}
export const $A = $$y0;
export const LS = $$b1;
export const YY = $$v2;