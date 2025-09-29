import g from 'classnames';
import { jsx, jsxs } from 'react/jsx-runtime';
import { memo, useCallback, useContext } from 'react';
import { R as _$$R } from './307199';
import { C as _$$C } from './520159';
import { ButtonPrimitive } from './632989';
import { MB } from '../figma_app/525558';
import { handleKeyboardEventByState } from '../figma_app/896988';
import { Qx } from '../figma_app/8833';
import { useKeyboardNavigationItemForParentSubpath, useFocusSubpath } from './keyboard-navigation';
import { DrilldownContextValue } from './drilldown-types';
const SUBPATH_DISPLAY_TEXT_CLASS = 'drilldown_item--subpathDisplayText--Lgl-w drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd';
interface ParentSubpathItemProps {
  displayText: string;
  onClick: (event: React.MouseEvent) => void;
  accessory?: React.ReactNode;
  tabIndex?: number;
  shouldForwardKeyDownToFullscreen?: boolean;
  visible: boolean;
  indexOfParent: number;
  recordingKey?: string;
}
export const ParentSubpathItem = memo<ParentSubpathItemProps>(({
  displayText,
  onClick,
  accessory,
  tabIndex,
  shouldForwardKeyDownToFullscreen,
  visible,
  indexOfParent,
  recordingKey
}) => {
  const {
    setKeyboardNavigationElement
  } = useKeyboardNavigationItemForParentSubpath(!visible);
  const displayTextElement = jsx(_$$R, {
    className: SUBPATH_DISPLAY_TEXT_CLASS,
    text: displayText
  });
  const {
    listItemHeight
  } = useContext({} as any); // DrilldownContext would be passed here
  const focusSubpath = useFocusSubpath(indexOfParent);
  const combinedHandler = MB({
    onBoth: onClick,
    onKeyDown: focusSubpath
  });
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    combinedHandler(e);
  }, [combinedHandler]);
  return jsxs(ButtonPrimitive, {
    className: g()('drilldown_item--parentSubpathContainer--wbu7T drilldown_item--_drilldownItemBase--YOfRd text--fontPos11--2LvXf text--_fontBase--QdLsd', Qx),
    style: {
      height: listItemHeight
    },
    recordingKey,
    onClick: handleClick,
    ref: setKeyboardNavigationElement,
    htmlAttributes: {
      tabIndex,
      'onKeyDown': shouldForwardKeyDownToFullscreen ? (e: any) => handleKeyboardEventByState(e.nativeEvent) : undefined,
      'data-testid': 'parent-drilldown-item'
    },
    children: [jsx(_$$C, {}), displayTextElement, jsx('span', {
      children: accessory
    })]
  });
});
ParentSubpathItem.displayName = 'ParentSubpathItem';
