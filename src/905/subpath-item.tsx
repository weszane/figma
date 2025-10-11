import g from 'classnames';
import { jsx, jsxs } from 'react/jsx-runtime';
import { memo, useCallback, useContext, useMemo } from 'react';
import { R as _$$R } from './307199';
import { x as _$$x } from './505155';
import { n as _$$n2 } from './913636';
import { V as _$$V2 } from './546897';
import { ButtonPrimitive } from './632989';
import { MB } from '../figma_app/525558';
import { getAssetKeyForSubscription } from '../figma_app/473391';
import { jsFullscreenPreventEventCaptureKeys } from '../figma_app/8833';
import { Bx } from './221848';
import { styleBuilderInstance } from './941192';
import { useKeyboardNavigationItemForSubpath, useFocusParentSubpath } from './keyboard-navigation';
import { DrilldownContextValue, SubpathDrilldownItem, GridLayoutMode } from './drilldown-types';
const SUBPATH_DISPLAY_TEXT_CLASS = 'drilldown_item--subpathDisplayText--Lgl-w drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd';
interface SubpathItemProps {
  drilldownItem: SubpathDrilldownItem;
  i: number;
  visible: boolean;
  onClick: (event: React.MouseEvent, item: SubpathDrilldownItem) => void;
  gridLayoutMode: GridLayoutMode;
  top: number;
  recordingKey?: string;
  tabIndex?: number;
}
interface SubpathPreviewProps {
  item: any;
  isList: boolean;
}
function SubpathPreview({
  item,
  isList
}: SubpathPreviewProps) {
  const {
    subpathGridHeight
  } = useContext({} as any); // DrilldownContext would be passed here

  if (isList) {
    return jsx(_$$x, {
      className: 'drilldown_item--folderIconRefresh--y824q'
    });
  }
  return jsx('div', {
    className: 'drilldown_item--previewContainer--iLP5F',
    children: item ? jsx(_$$V2, {
      width: subpathGridHeight,
      height: subpathGridHeight,
      previewAssetOrUrl: item,
      keyPrefix: getAssetKeyForSubscription(item),
      type: 'compact'
    }) : jsx('div', {
      style: styleBuilderInstance.colorBgSecondary.radiusMedium.add({
        height: `${subpathGridHeight - 8}px`,
        width: `${subpathGridHeight - 8}px`
      }).$
    })
  });
}
export const SubpathItem = memo<SubpathItemProps>(({
  drilldownItem,
  i,
  visible,
  onClick,
  gridLayoutMode,
  top,
  recordingKey,
  tabIndex
}) => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(e, drilldownItem);
  }, [onClick, drilldownItem]);
  const focusParentSubpath = useFocusParentSubpath();
  const combinedHandler = MB({
    onBoth: handleClick,
    onKeyDown: focusParentSubpath
  });
  const {
    setKeyboardNavigationElement
  } = useKeyboardNavigationItemForSubpath(i, drilldownItem.id, !visible);
  const displayTextElement = jsx(_$$R, {
    className: SUBPATH_DISPLAY_TEXT_CLASS,
    text: drilldownItem.displayText
  });
  const {
    subpathGridHeight,
    subpathListHeight
  } = useContext({} as any); // DrilldownContext would be passed here
  const previewItem = useMemo(() => Bx(drilldownItem), [drilldownItem]);
  const isList = !gridLayoutMode;
  return jsxs(ButtonPrimitive, {
    style: {
      top,
      height: gridLayoutMode ? subpathGridHeight : subpathListHeight
    },
    className: g()(isList ? 'drilldown_item--subpathContainerList--n-4-2 drilldown_item--_drilldownItemBase--YOfRd drilldown_item--_subpathContainerBase--krA4j' : 'drilldown_item--subpathContainerGrid--8bV5l drilldown_item--_drilldownItemBase--YOfRd drilldown_item--_subpathContainerBase--krA4j', jsFullscreenPreventEventCaptureKeys),
    onClick: combinedHandler,
    recordingKey,
    ref: setKeyboardNavigationElement,
    htmlAttributes: {
      tabIndex,
      'data-testid': 'subpath-drilldown-item'
    },
    children: [jsx(SubpathPreview, {
      item: previewItem,
      isList
    }), displayTextElement, jsx(_$$n2, {
      className: 'drilldown_item--chevronRefresh--rOgV7'
    })]
  });
});
SubpathItem.displayName = 'SubpathItem';