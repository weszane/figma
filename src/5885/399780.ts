import { jsx } from "react/jsx-runtime";
import { trackEventAnalytics } from "../905/449184";
import { buildUploadUrl } from "../figma_app/169182";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { ng } from "../figma_app/205827";
import { A } from "../c5e2cae0/180390";
import { A as _$$A } from "../c5e2cae0/302396";
import { A as _$$A2 } from "../c5e2cae0/731272";
import { A as _$$A3 } from "../c5e2cae0/858457";
import { A as _$$A4 } from "../5724/971107";
import { A as _$$A5 } from "../c5e2cae0/690182";
import { A as _$$A6 } from "../c5e2cae0/1757";
import { A as _$$A7 } from "../c5e2cae0/817229";
var $$a4;
let $$T2 = "Pro Trial Initiation Modal";
let $$v1 = "Pro Trial Downgrade Modal";
var $$b8 = (e => (e[e.SELECT_TEAM = 0] = "SELECT_TEAM", e[e.SELECT_TEAM_TYPE = 1] = "SELECT_TEAM_TYPE", e[e.SELECT_FEATURES = 2] = "SELECT_FEATURES", e))($$b8 || {});
var E = (e => (e.FREELANCER = "freelancer", e.AGENCY = "agency", e.PRODUCT = "product", e.OTHER = "other", e))(E || {});
var x = (e => (e.UNLIMITED_FILES = "unlimited_files", e.COMPONENT_LIBRARIES = "component_libraries", e.ORGANIZING_FILES = "organizing_files", e.VOTING_WORKSHOPS = "voting_workshops", e.PLAYING_VIDEOS = "playing_videos", e.SHARING_FILES = "sharing_files", e.INVITING_VISITORS = "inviting_visitors", e.AUDIO = "audio", e))(x || {});
let $$S7 = Object.keys($$b8).length / 2;
let $$I0 = {
  freelancer: buildUploadUrl("06cfa92c773695fb0be0202d467640e521950e67"),
  agency: buildUploadUrl("e98abc8479042db5e94f5c35bf764ad4326f892f"),
  product: buildUploadUrl("915ace9058a397e6e4ceadc221dd20a9d95898d7"),
  other: buildUploadUrl("4423aaa8499d483db2703e6cad1b4c90805e7f16")
};
let $$A5 = [{
  teamType: "freelancer",
  imageAltText: () => getI18nString("pro_trials_v3.pro_trial_initiation_modal.freelancer"),
  descriptionText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.freelancer")
  })
}, {
  teamType: "agency",
  imageAltText: () => getI18nString("pro_trials_v3.pro_trial_initiation_modal.agency"),
  descriptionText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.agency")
  })
}, {
  teamType: "product",
  imageAltText: () => getI18nString("pro_trials_v3.pro_trial_initiation_modal.product"),
  descriptionText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.product")
  })
}, {
  teamType: "other",
  imageAltText: () => getI18nString("pro_trials_v3.pro_trial_initiation_modal.other_team_type"),
  descriptionText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.other_team_type")
  })
}];
let $$j6 = {
  unlimited_files: jsx(SvgComponent, {
    svg: A
  }),
  component_libraries: jsx(SvgComponent, {
    svg: _$$A5
  }),
  organizing_files: jsx(SvgComponent, {
    svg: _$$A
  }),
  voting_workshops: jsx(SvgComponent, {
    svg: _$$A7
  }),
  playing_videos: jsx(SvgComponent, {
    svg: _$$A6
  }),
  sharing_files: jsx(SvgComponent, {
    svg: _$$A4
  }),
  inviting_visitors: jsx(SvgComponent, {
    svg: _$$A2
  }),
  audio: jsx(SvgComponent, {
    svg: _$$A3
  })
};
let $$P3 = [{
  featureType: "unlimited_files",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.unlimited_files")
  })
}, {
  featureType: "component_libraries",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.component_libraries")
  })
}, {
  featureType: "organizing_files",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.organizing_files")
  })
}, {
  featureType: "voting_workshops",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.voting_workshopping")
  })
}, {
  featureType: "playing_videos",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.playing_videos")
  })
}, {
  featureType: "sharing_files",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.sharing_files")
  })
}, {
  featureType: "inviting_visitors",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.inviting_visitors")
  })
}, {
  featureType: "audio",
  featureText: jsx(TextWithTruncation, {
    fontSize: 14,
    fontWeight: "medium",
    children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.using_audio")
  })
}];
($$a4 || ($$a4 = {})).trackInitiationSubmit = function (e, t) {
  trackEventAnalytics("pro_trial_initiation_submit", {
    startedTrialSuccessfully: t,
    ...e,
    ...ng.getTrackingProperties(),
    features: e.features ? e.features.join(", ") : null
  });
};
export const $Q = $$I0;
export const Mm = $$v1;
export const NN = $$T2;
export const PG = $$P3;
export const R_ = $$a4;
export const TB = $$A5;
export const bo = $$j6;
export const h3 = $$S7;
export const iX = $$b8;