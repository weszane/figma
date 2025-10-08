import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useMemo, useRef } from "react";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { RecordingScrollContainer } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { TrackingKeyEnum } from "../905/696396";
import { a as _$$a } from "../905/275092";
import { U } from "../905/540113";
import { OverviewStatsView } from "../905/167005";
import { i as _$$i } from "../905/565139";
import { StatValueType } from "../905/697254";
import { KZ } from "../905/193404";
import { _4 } from "../905/627262";
import { nZ } from "../figma_app/277330";
import { U7 } from "../905/712714";
import { TrackingWrapper } from "../905/414363";
import { l as _$$l, n as _$$n } from "../905/402643";
export let $$v0 = memo(function ({
  libraryFileKey: e,
  variableStat: t,
  onBackClick: i,
  width: l,
  hideOpenInFileButton: p = !1
}) {
  let [h] = setupResourceAtomHandler(U7({
    libraryFileKey: e ?? "",
    variableKey: t.key
  }), {
    enabled: !!e
  });
  let v = useMemo(() => h ? {
    type: _$$l.FILES,
    items: _4(h.data?.files)
  } : {
    type: _$$l.FILES,
    items: []
  }, [h]);
  let E = useMemo(() => ({
    variableKey: t.key,
    assetType: _$$n.VARIABLES
  }), [t.key]);
  let x = useRef(null);
  let S = nZ(x);
  return jsx(TrackingWrapper, {
    page: TrackingKeyEnum.DSA_VARIABLE_VIEW,
    properties: E,
    children: jsxs("div", {
      className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
      "data-testid": "variable-drilldown",
      children: [jsx(_$$i, {
        assetOrFileName: t.name,
        onBack: i,
        children: p ? null : jsx(U, {
          asset: t
        })
      }), jsxs(RecordingScrollContainer, {
        width: l,
        className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
        ref: x,
        children: [jsx(I, {
          libraryFileKey: e,
          variableKey: t.key,
          resolvedType: t.resolvedType
        }), jsx(KZ, {
          statsData: v,
          onScrollTo: S
        })]
      }), jsx(_$$a, {
        fileStats: v.items
      })]
    })
  });
});
function I({
  libraryFileKey: e,
  variableKey: t,
  resolvedType: i
}) {
  let [r] = setupResourceAtomHandler(U7({
    libraryFileKey: e ?? "",
    variableKey: t
  }), {
    enabled: !!e
  });
  let s = [{
    type: StatValueType.DESCRIPTION_AND_IMAGE,
    description: void 0,
    imageData: {
      type: "variable",
      variableType: i
    }
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.total"),
    count: r.data?.summary.total_usages ?? 0,
    word: getI18nString("design_systems.libraries_modal.plural.instance", {
      instanceCount: r.data?.summary.total_usages ?? 0
    })
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.used_by"),
    count: r.data?.summary.total_teams ?? 0,
    word: getI18nString("design_systems.libraries_modal.plural.team", {
      teamCount: r.data?.summary.total_teams ?? 0
    })
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.used_in"),
    count: r.data?.summary.total_files ?? 0,
    word: getI18nString("design_systems.libraries_modal.plural.file", {
      fileCount: r.data?.summary.total_files ?? 0
    })
  }];
  return jsx(OverviewStatsView, {
    isLoading: "loading" === r.status,
    stats: s
  });
}
export const x = $$v0;