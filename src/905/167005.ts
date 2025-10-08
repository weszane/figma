import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { LoadingRenderer } from "../905/211326";
import { renderI18nText } from "../905/303541";
import { getVariableTypeIcon } from "../905/604606";
import { StatValueType } from "../905/697254";
import { SvgComponent } from "../905/714743";
import { iL, zi } from "../905/824449";
import { Wi } from "../figma_app/162641";
import { formatNumber } from "../figma_app/930338";
interface StatBase {
  header: string;
  word?: string;
  count?: number;
}
interface DescriptionAndImageStat extends StatBase {
  type: typeof StatValueType.DESCRIPTION_AND_IMAGE;
  imageData: {
    type: "variable" | "style" | "image";
    variableType?: string;
    style?: any;
    url?: string;
  };
  description?: string;
}
interface CountStat extends StatBase {
  type: typeof StatValueType.COUNT;
}
type Stat = DescriptionAndImageStat | CountStat;
interface StatIconProps {
  type: string;
}

/**
 * Renders an SVG icon based on the provided type
 * @param props - Component props
 * @returns JSX element
 */
function StatIcon({
  type
}: StatIconProps) {
  const svgData = getVariableTypeIcon(type);
  return jsx(SvgComponent, {
    svg: svgData
  });
}
const SECTION_HEADER_CLASS_NAME = "overview_stats_view--sectionHeader--0xDdk library_section_header--sectionHeader--U79xZ";
const STAT_CLASS_NAME = "overview_stats_view--stat--XjnZv text--fontPos14--OL9Hp text--_fontBase--QdLsd";
interface OverviewStatsViewProps {
  isLoading: boolean;
  stats: Stat[];
}

/**
 * Main component for displaying overview statistics
 * @param props - Component props
 * @returns JSX element
 */
export function OverviewStatsView({
  isLoading,
  stats
}: OverviewStatsViewProps) {
  return jsx("div", {
    className: "overview_stats_view--overviewStats--vEzXs",
    children: stats.map(stat => {
      const key = stat.type === StatValueType.DESCRIPTION_AND_IMAGE ? "Description" : stat.header;
      return jsx(Fragment, {
        children: stat.type === StatValueType.DESCRIPTION_AND_IMAGE ? jsx(LoadingRenderer, {
          isLoading,
          className: STAT_CLASS_NAME,
          children: () => jsx(DescriptionAndImageStatComponent, {
            stat: stat as DescriptionAndImageStat
          })
        }) : jsx(CountStatComponent, {
          stat: stat as CountStat,
          isLoading
        })
      }, key);
    })
  });
}
interface DescriptionAndImageStatProps {
  stat: DescriptionAndImageStat;
}

/**
 * Component for rendering description and image statistics
 * @param props - Component props
 * @returns JSX element
 */
function DescriptionAndImageStatComponent({
  stat
}: DescriptionAndImageStatProps) {
  return jsxs("div", {
    "className": "overview_stats_view--componentDescriptionAndImage--ijsqj",
    "data-testid": "overview-stats-description-and-image",
    "children": [stat.imageData.type === "variable" ? jsx("div", {
      className: "overview_stats_view--variableIcon--jbynq overview_stats_view--_baseImage--klmBx",
      children: jsx(StatIcon, {
        type: stat.imageData.variableType!
      })
    }) : stat.imageData.type === "style" ? jsx("div", {
      className: "overview_stats_view--styleIcon--3vy99 overview_stats_view--_baseImage--klmBx",
      children: jsx(zi, {
        dsStyle: stat.imageData.style,
        disableOutline: true,
        size: iL.Large_DSA
      })
    }) : jsx("img", {
      src: stat.imageData.url,
      className: "overview_stats_view--componentImage---YJZq overview_stats_view--_baseImage--klmBx",
      alt: ""
    }), stat.description != null && jsxs("div", {
      children: [jsx("div", {
        className: SECTION_HEADER_CLASS_NAME,
        children: renderI18nText("design_systems.libraries_modal.description")
      }), jsx("div", {
        className: "overview_stats_view--componentDescription--lR6ir text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: stat.description
      })]
    })]
  });
}
interface CountStatComponentProps {
  stat: CountStat;
  isLoading?: boolean;
}

/**
 * Component for rendering count-based statistics
 * @param props - Component props
 * @returns JSX element or null if no word is defined
 */
function CountStatComponent({
  stat,
  isLoading = false
}: CountStatComponentProps) {
  // Early return if no word is defined
  if (!stat.word) {
    return null;
  }
  return jsxs("div", {
    "data-testid": "overview-stats-count",
    "children": [jsx("div", {
      className: SECTION_HEADER_CLASS_NAME,
      children: stat.header
    }), isLoading ? jsx(Wi, {
      className: "overview_stats_view--statLoading--3DxiI"
    }) : jsx("div", {
      className: STAT_CLASS_NAME,
      children: stat.count == null ? "" : `${formatNumber(stat.count)} ${stat.word}`
    })]
  });
}

// Export with a more descriptive name
export const c = OverviewStatsView;