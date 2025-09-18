import { atomWithReducer } from 'jotai/utils';
import { loadTimeTrackerInstance } from '../figma_app/781115';
var $$a1 = (e => (e[e.NOT_LOADED = 0] = 'NOT_LOADED', e[e.LOADED = 1] = 'LOADED', e))($$a1 || {});
var s = (e => (e[e.LOAD_LIVEGRAPH = 0] = 'LOAD_LIVEGRAPH', e[e.LOAD_VIEWER_INSTANCE = 1] = 'LOAD_VIEWER_INSTANCE', e))(s || {});
export let $$o0 = atomWithReducer({
  status: 0,
  livegraphLoaded: !1,
  viewerInstanceLoaded: !1
}, (e, t) => {
  if (e.status === 1) return e;
  switch (t.type) {
    case 0:
      if (e.viewerInstanceLoaded) {
        loadTimeTrackerInstance.handleViewerLoaded('livegraph');
        return {
          status: 1,
          lastLoaded: 'livegraph'
        };
      }
      if (e.livegraphLoaded) return e;
      return {
        ...e,
        livegraphLoaded: !0
      };
    case 1:
      if (e.livegraphLoaded) {
        loadTimeTrackerInstance.handleViewerLoaded('multiplayer');
        return {
          status: 1,
          lastLoaded: 'multiplayer'
        };
      }
      if (e.viewerInstanceLoaded) return e;
      return {
        ...e,
        viewerInstanceLoaded: !0
      };
  }
});
export const Md = $$o0;
export const z2 = $$a1;