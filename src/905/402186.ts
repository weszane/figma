import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useMemo, useRef } from "react";
import { P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { setupResourceAtomHandler } from "../905/713695";
import { TrackingKeyEnum } from "../905/696396";
import { l as _$$l, n as _$$n } from "../905/402643";
import { a as _$$a } from "../905/275092";
import { U as _$$U } from "../905/540113";
import { OverviewStatsView } from "../905/167005";
import { i as _$$i } from "../905/565139";
import { V } from "../905/697254";
import { KZ } from "../905/193404";
import { _4 } from "../905/627262";
import { nZ } from "../figma_app/277330";
import { lY } from "../905/712714";
import { t as _$$t2 } from "../905/414363";
export let $$v0 = memo(function ({
  libraryFileKey: e,
  styleStat: t,
  onBackClick: i,
  width: o,
  hideOpenInFileButton: m = !1
}) {
  let [g] = setupResourceAtomHandler(lY({
    libraryFileKey: e ?? "",
    styleKey: t.key
  }), {
    enabled: !!e
  });
  let v = useMemo(() => g.data ? {
    type: _$$l.FILES,
    items: _4(g.data.files)
  } : {
    type: _$$l.FILES,
    items: []
  }, [g]);
  let E = useMemo(() => ({
    assetType: _$$n.STYLES,
    styleKey: t.key
  }), [t.key]);
  let x = useRef(null);
  let S = nZ(x);
  return jsx(_$$t2, {
    page: TrackingKeyEnum.DSA_STYLE_VIEW,
    properties: E,
    children: jsxs("div", {
      className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
      "data-testid": "style-drilldown",
      children: [jsx(_$$i, {
        assetOrFileName: t.name,
        onBack: i,
        children: m ? null : jsx(_$$U, {
          asset: t
        })
      }), jsxs(P, {
        width: o,
        className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
        ref: x,
        children: [jsx(I, {
          libraryFileKey: e,
          styleStat: t
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
  styleStat: t
}) {
  let [i] = setupResourceAtomHandler(lY({
    libraryFileKey: e ?? "",
    styleKey: t.key
  }), {
    enabled: !!e
  });
  let r = [{
    type: V.DESCRIPTION_AND_IMAGE,
    imageData: {
      type: "style",
      style: t
    },
    description: t.description ?? getI18nString("design_systems.libraries_modal.n_a")
  }, {
    type: V.STAT,
    header: getI18nString("design_systems.libraries_modal.total"),
    count: i.data?.summary.total_usages ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.instance", {
      instanceCount: i.data?.summary.total_usages ?? 0
    })
  }, {
    type: V.STAT,
    header: getI18nString("design_systems.libraries_modal.used_by"),
    count: i.data?.summary.total_teams ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.team", {
      teamCount: i.data?.summary.total_teams ?? 0
    })
  }, {
    type: V.STAT,
    header: getI18nString("design_systems.libraries_modal.used_in"),
    count: i.data?.summary.total_files ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.file", {
      fileCount: i.data?.summary.total_files ?? 0
    })
  }];
  return jsx(OverviewStatsView, {
    isLoading: "loading" === i.status,
    stats: r
  });
}
export const U = $$v0;