import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { permissionScopeHandler } from '../905/189185';
import { areAllSelectedInstances } from '../905/456912';
import { fileLaunchHelper } from '../905/459477';
import { updateSelectedNodeGuid } from '../905/632622';
import { Point } from '../905/736624';
import { FDocumentType } from '../905/862883';
import { v9 } from '../figma_app/383828';
import { fullscreenValue } from '../figma_app/455680';
import { PrimaryWorkflowEnum } from '../figma_app/633080';
import { insertSharedStateGroup, insertSharedModule, insertSharedComponent } from '../figma_app/933328';

/**
 * Handles swapping or inserting items based on user interaction and workflow type.
 * Original function name: $$g0
 *
 * @param params - Configuration for swap/insert logic
 * @returns Callback function for handling swap/insert actions
 */
export function setupSwapOrInsertHandler({
  alwaysSwap,
  canSwap,
  insertAsChildOfCanvas,
  itemsToSwap,
  openFileKey,
  onSwap,
  sourceForTracking,
  insertLogArgsOverride,
  insertionCallback
}: {
  alwaysSwap: boolean;
  canSwap: boolean;
  insertAsChildOfCanvas?: boolean;
  itemsToSwap?: string[];
  openFileKey: string;
  onSwap?: (item: any) => void;
  sourceForTracking: any;
  insertLogArgsOverride?: any;
  insertionCallback?: (item: any) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const sceneGraphSelection = useSelector((state: AppState) => state.mirror.sceneGraphSelection);
  const allSelectedInstances = areAllSelectedInstances();
  const openFileProperties = fileLaunchHelper.useOpenFileProperties();

  /**
   * Callback to handle swap or insert logic.
   * Original callback inside $$g0
   */
  const handleSwapOrInsert = useCallback((event: React.KeyboardEvent, item: any, meta?: any) => {
    const isAltPressed = event.altKey;

    // Swap logic
    if (alwaysSwap || isAltPressed && allSelectedInstances) {
      if (item.type !== PrimaryWorkflowEnum.MODULE) {
        canSwap && permissionScopeHandler.user('swap-instance', () => v9(item, dispatch, openFileKey, itemsToSwap || Object.keys(sceneGraphSelection), sourceForTracking, !alwaysSwap && isAltPressed, openFileProperties, meta));
        onSwap?.(item);
        return;
      }
    }

    // Insert logic
    updateSelectedNodeGuid();
    const viewportInfo = fullscreenValue.getViewportInfo();
    const insertParams = {
      canvasPosition: {
        x: viewportInfo.offsetX,
        y: viewportInfo.offsetY
      },
      insertAsChildOfCanvas: insertAsChildOfCanvas ?? false,
      percentageOffset: new Point(0.5, 0.5),
      storeInRecentsKey: FDocumentType.Design,
      useSmartPositioning: true
    };
    if (item.type === PrimaryWorkflowEnum.COMPONENT) {
      dispatch(insertSharedComponent({
        item,
        ...insertParams,
        insertionCallback,
        insertLogArgsOverride
      }));
    } else if (item.type === PrimaryWorkflowEnum.STATE_GROUP) {
      dispatch(insertSharedStateGroup({
        item,
        ...insertParams,
        insertionCallback,
        insertLogArgsOverride
      }));
    } else if (item.type === PrimaryWorkflowEnum.MODULE) {
      dispatch(insertSharedModule({
        item,
        ...insertParams,
        insertLogArgsOverride,
        insertionCallback: () => fullscreenValue.triggerAction('commit')
      }));
    }
  }, [alwaysSwap, canSwap, dispatch, insertAsChildOfCanvas, insertLogArgsOverride, insertionCallback, itemsToSwap, onSwap, openFileProperties, openFileKey, sceneGraphSelection, allSelectedInstances, sourceForTracking]);
  return handleSwapOrInsert;
}

// Export with original variable name for traceability
export const u = setupSwapOrInsertHandler;