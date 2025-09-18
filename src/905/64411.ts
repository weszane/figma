import { reportError } from '../905/11';
import { isNullOrFailure } from '../905/18797';
import { ServiceCategories as _$$e } from '../905/165054';
import { createOptimistThunk } from '../905/350402';
import { D3 } from '../905/359847';
import { setupLoadingStateHandler } from '../905/696711';
import { Z } from '../905/939602';
import { batchPutFileAction } from '../figma_app/78808';
import { Mb, Ve, Ys } from '../figma_app/646357';
import { aW } from '../figma_app/864378';
export let $$m0 = createOptimistThunk(async (e, t) => {
  let {
    libraryKey,
    includeThumbnail,
    includeRealtime
  } = t;
  let h = e.getState().loadingState;
  let g = Mb(libraryKey);
  if (!isNullOrFailure(h, g)) return;
  let f = Z.getLibraryPublishedComponentsV2({
    libraryKey,
    includeThumbnail,
    includeRealtime
  });
  setupLoadingStateHandler(f, {
    dispatch: e.dispatch
  }, g);
  Ys.add(g);
  try {
    let t = await f;
    let {
      components,
      stateGroups
    } = function ({
      components: e,
      stateGroups: t,
      file: i
    }) {
      return i?.team_id ? {
        components: e.map(e => ({
          ...e,
          team_id: i.team_id
        })),
        stateGroups: t.map(e => ({
          ...e,
          team_id: i.team_id
        }))
      } : {
        components: e,
        stateGroups: t
      };
    }({
      components: t?.data?.meta?.components || [],
      stateGroups: t?.data?.meta?.state_groups || [],
      file: t?.data?.meta?.file
    });
    let c = t?.data?.meta?.file;
    let u = t?.data?.meta?.hub_file;
    c ? e.dispatch(batchPutFileAction({
      files: [c],
      subscribeToRealtime: includeRealtime
    })) : u && e.dispatch(D3([u]));
    let h = function (e, t, i) {
      return i != null ? i.id : t != null ? t.key : (reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, new Error('getPublishedComponentsForLibrary: no hub file or file found'), {
        tags: {
          libraryKey: e
        }
      }), '');
    }(libraryKey, c, u);
    e.dispatch(aW({
      components,
      stateGroups,
      fileKeyOrHubFileId: h,
      libraryKey,
      teamId: c?.team_id
    }));
    Ve(libraryKey);
  } catch (e) {
    console.warn(`Failed to get published components from library with libraryKey ${libraryKey}`);
  }
});
export const n = $$m0;