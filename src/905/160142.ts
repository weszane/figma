import { n as _$$n } from "../905/347702";
import { ServiceCategories as _$$e } from "../905/165054";
import { X3B } from "../figma_app/763686";
import { FJ } from "../905/508367";
import { Ay } from "../figma_app/778880";
import { xO } from "../905/11";
import { XHR } from "../905/910117";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { Q9 } from "../905/70982";
import { z4 } from "../905/37051";
import { m as _$$m } from "../905/575846";
import { ge } from "../figma_app/349248";
import { _P, Zh, qb, Rv } from "../figma_app/2590";
import { vp } from "../figma_app/831696";
import { s6 } from "../905/91038";
import { Qn } from "../figma_app/415217";
let $$y0 = _$$n(nF(async (e, t, {
  liveStore: i
}) => {
  let {
    fileKey,
    startingPointNodeId,
    nodeId,
    source,
    isSlides,
    isPresenterViewWithPopoutAudienceView,
    openShareModal,
    scalingInfo
  } = t;
  let C = e.getState();
  xO(_$$e.PROTOTYPING, C.mirror.appModel);
  let T = C.mirror.appModel.currentPage;
  let k = s6(C);
  let R = C.mirror.sceneGraph.get(T);
  let N = R?.prototypeDevice?.presetIdentifier || "";
  isSlides ? e.dispatch(_P({
    name: isPresenterViewWithPopoutAudienceView ? "slides.presentation_mode.present_slides_with_speaker_notes" : "slides.presentation_mode.present_slides",
    params: {
      source
    }
  })) : e.dispatch(Zh({
    name: "prototype.editor_play_button_clicked",
    params: {
      isFirstPage: k,
      source,
      viewer: "new_tab",
      devicePreset: N
    }
  }));
  let P = X3B.currentDeviceType();
  let O = {
    viewportScalingMode: scalingInfo?.viewportScalingMode ?? qb(P),
    contentScalingMode: scalingInfo?.contentScalingMode ?? Rv(P)
  };
  let D = C.lastVisitedPlanId || null;
  let L = vp({
    scalingInfo: O,
    nodeId,
    pageId: T,
    startingPointNodeId,
    showHotspots: void 0,
    share: openShareModal
  }, D, void 0, void 0, t.isPresenterViewWithPopoutAudienceView);
  let F = "";
  let M = () => `proto-${fileKey}-${T}-${b}`;
  {
    R && !isSlides && XHR.post(`/api/files/${t.fileKey}/prototype`, {
      page_id: T,
      name: R.name
    }).then(({
      data: t
    }) => {
      e.dispatch(Q9({
        fileKey: t.meta.file_key,
        pageId: t.meta.page_id
      }));
    }).catch(e => { });
    let n = await i.fetchFile(fileKey);
    if (_$$m) {
      e.dispatch(sf({
        view: "prototype",
        file: ge(n),
        scalingInfo: O,
        nodeId: T
      }));
      return;
    }
    if (F = `${n.prototype_url}${L}`.replace(/proto/, isPresenterViewWithPopoutAudienceView ? "presenter" : isSlides ? "deck" : "proto"), z4.getIsExtension()) {
      Qn(F);
      return;
    }
  }
  setTimeout(() => {
    let e = null;
    if (null != (e = Ay.safari && +Ay.version >= 12 ? FJ(F, M(), "menubar=yes") : FJ(F, M())) && (e.focus(), Ay.chrome)) try {
      e.location === e.href && console.log(" ");
    } catch (t) {
      b++;
      e = FJ(F, M());
    }
  });
}));
let b = 0;
export const F = $$y0; 
