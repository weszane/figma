import { reportError } from '../905/11';
import { createActionCreator } from '../905/73481';
import { ServiceCategories } from '../905/165054';
import { runWithTimeout } from '../905/236856';
import { hasStyleType } from '../905/311324';
import { createOptimistThunk } from '../905/350402';
import { isEffectOrGrid, isStyleType } from '../905/405710';
import { trackEventAnalytics } from '../905/449184';
import { convertKiwiToString, convertStringToKiwi } from '../905/537777';
import { getFeatureFlags } from '../905/601108';
import { logError } from '../905/714362';
import { componentReplaceLocal } from '../905/879323';
import { FAILED_THUMBNAIL, generateSerializableStyleThumbnail, generateThumbnailFromStyleMaster, hasValidFillColor, LOADING_THUMBNAIL, revokeThumbnailUrl, teamLibraryCache } from '../figma_app/80990';
import { isNotNullish } from '../figma_app/95419';
import { throwTypeError } from '../figma_app/465776';
import { resolveAllWithStatus } from '../figma_app/562352';
import { getImageManager } from '../figma_app/624361';
import { getStyleInfo, PrimaryWorkflowEnum, SubscriptionStatusEnum } from '../figma_app/633080';
import { ImageExportType, VariableDataType } from '../figma_app/763686';

/**
 * Generates the thumbnail URL for a variable set.
 * @param variableSetKey - The key of the variable set.
 * @param checkpointId - The checkpoint version.
 * @returns The thumbnail URL string.
 * (Original: $$E5)
 */
export function generateVariableSetThumbnailUrl(variableSetKey: string, checkpointId: string): string {
  return `/variable_set/${variableSetKey}/thumbnails?ver=${checkpointId}`;
}

/**
 * Retrieves the thumbnail object for a variable, resolving aliases if necessary.
 * @param variableSetKey - The key of the variable set.
 * @param thumbnails - The thumbnails object.
 * @param variableId - The variable ID.
 * @param variableType - The variable type.
 * @param modeContext - The mode context object.
 * @returns The thumbnail object or null.
 * (Original: $$x6)
 */
export function getVariableThumbnail(variableSetKey: string, thumbnails: Record<string, any>, variableId: string, variableType: string, modeContext: Record<string, string>): any | null {
  let thumbnail = thumbnails[variableSetKey];
  if (!thumbnail || !thumbnail.variableThumbnails) return null;
  let current = thumbnail.variableThumbnails[variableId] ?? null;
  while (current?.type === VariableDataType.ALIAS) {
    const mode = modeContext[current.variableCollectionKey];
    if (mode && current.values && current.values[mode]) {
      current = current.values[mode];
      continue;
    }
    if (mode && mode !== 'MIXED') {
      trackEventAnalytics('Fallback to default variable thumbnail', {
        variableId,
        variableType,
        mode
      });
    }
    const defaultMode = current.defaultMode;
    if (!defaultMode || !current.values || !current.values[defaultMode]) return null;
    current = current.values[defaultMode];
  }
  return current;
}

/**
 * Loads variable set thumbnails and invokes a callback with the result.
 * (Original: $$S0)
 */
export const loadVariableSetThumbnails = createOptimistThunk((dispatch, payload) => {
  const {
    variableSet,
    variableId,
    variableType,
    modeContext,
    callback
  } = payload;
  const kiwiId = convertStringToKiwi(variableSet.node_id);
  if (!kiwiId) {
    console.error(`Invalid variableId in loading thumbnails: ${variableSet.id}`);
    return;
  }
  fetchVariableSetThumbnails(variableSet).then(result => {
    const thumbnail = getVariableThumbnail(convertKiwiToString(kiwiId), result.thumbnails, variableId, variableType, modeContext);
    callback?.(thumbnail);
  }).catch(err => {
    console.error(`Variable thumbnail did not load: ${variableId}`);
    console.error(err);
  });
});

/**
 * Fetches variable set thumbnails from the cache.
 * @param variableSet - The variable set object.
 * @returns An object containing thumbnails.
 * (Original: $$w2)
 */
export async function fetchVariableSetThumbnails(variableSet: {
  key: string;
  checkpoint_id: string;
}) {
  return {
    thumbnails: await teamLibraryCache.getVariableSetThumbnails(generateVariableSetThumbnailUrl(variableSet.key, variableSet.checkpoint_id))
  };
}

/**
 * Generates or retrieves a style thumbnail, handling local and remote cases.
 * @param style - The style object.
 * @param existingThumbnail - The existing thumbnail object.
 * @returns The thumbnail object or a Promise resolving to it.
 * (Original: C)
 */
function getStyleThumbnail(style: any, existingThumbnail: any): any | Promise<any> | null {
  const styleType = style.style_type;
  let thumbnailCss = style.meta ? style.meta.style_thumbnail : null;
  if (isStyleType(styleType) && (!existingThumbnail || existingThumbnail.content_hash !== style.content_hash || !thumbnailCss)) {
    try {
      thumbnailCss = generateSerializableStyleThumbnail(style.style_type, style.node_id);
    } catch (err) {
      logError('thumbnails', 'error generating local style css thumbnail', {
        name: style.name,
        type: style.style_type,
        libraryKey: style.library_key,
        key: style.key
      });
      reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, err);
    }
  }
  if (thumbnailCss && (isEffectOrGrid(style.style_type) || hasValidFillColor(thumbnailCss))) {
    return {
      contentHash: style.content_hash,
      nodeId: style.node_id,
      styleThumbnail: thumbnailCss,
      type: PrimaryWorkflowEnum.STYLE,
      url: undefined
    };
  }
  if (!existingThumbnail || existingThumbnail.content_hash !== style.content_hash || !existingThumbnail.url || existingThumbnail.url === LOADING_THUMBNAIL || existingThumbnail.url === FAILED_THUMBNAIL) {
    const signal = thumbnailTaskController.acquire(style.node_id, style.content_hash);
    if (!signal) return null;
    const loadImagesPromise = style.style_type !== 'FILL' ? Promise.resolve() : runWithTimeout(getImageManager().loadAllImagesUnder([style.node_id], ImageExportType.NON_ANIMATED_ONLY, 'style-thumbnail'), () => {
      logError('thumbnails', 'image manager failed to load', {
        name: style.name,
        key: style.key,
        libraryKey: style.library_key
      });
    }, 10000);
    return loadImagesPromise.then(() => scheduler.postTask(() => generateThumbnailFromStyleMaster(style.node_id, style.style_type), signal).catch(err => {
      if (err.name !== 'AbortError') {
        logError('thumbnails', 'error generating local style url thumbnail', {
          name: style.name,
          type: style.style_type,
          libraryKey: style.library_key,
          key: style.key
        });
        reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, err);
      }
      return FAILED_THUMBNAIL;
    })).then(url => ({
      contentHash: style.content_hash,
      nodeId: style.node_id,
      styleThumbnail: thumbnailCss,
      type: PrimaryWorkflowEnum.STYLE,
      url
    }));
  }
  return null;
}

/** (Original: $$T7) */
export const addThumbnailForDanglingStyle = createActionCreator('LIBRARY_ADD_THUMBNAIL_FOR_DANGLING_STYLE');
/** (Original: $$k8) */
export const replaceLocalThumbnails = createActionCreator('LIBRARY_THUMBNAIL_REPLACE_LOCAL_THUMBNAILS');

/**
 * Handles replacing local thumbnails and updating local styles/components/groups/modules.
 * (Original: $$R3)
 */
export const replaceThumbnailsOptimist = createOptimistThunk((context, payload) => {
  const state = context.getState();
  const localThumbnails = state.library.local.thumbnails;
  const localComponents = state.library.local.components;
  const localStateGroups = state.library.local.stateGroups;
  const localStyles = state.library.local.styles;
  const localModules = state.library.local.modules;
  let updatedThumbnails: Record<string, any> | null = null;
  let updatedStyles: Record<string, any> | null = null;
  for (const {
    nodeId,
    url,
    contentHash,
    styleThumbnail,
    type
  } of payload.thumbnails) {
    let collection;
    switch (type) {
      case PrimaryWorkflowEnum.COMPONENT:
        collection = localComponents;
        break;
      case PrimaryWorkflowEnum.STATE_GROUP:
        collection = localStateGroups;
        break;
      case PrimaryWorkflowEnum.STYLE:
        collection = localStyles;
        break;
      case PrimaryWorkflowEnum.MODULE:
        collection = localModules;
        break;
      default:
        if (type === PrimaryWorkflowEnum.VARIABLE || type === PrimaryWorkflowEnum.VARIABLE_SET || type === PrimaryWorkflowEnum.VARIABLE_OVERRIDE || type === PrimaryWorkflowEnum.RESPONSIVE_SET || type === PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE || type === PrimaryWorkflowEnum.CODE_LIBRARY || type === PrimaryWorkflowEnum.CODE_FILE || type === PrimaryWorkflowEnum.MANAGED_STRING || type === PrimaryWorkflowEnum.CODE_COMPONENT) {
          continue;
        }
        throwTypeError(type);
    }
    if (payload.styleKind === SubscriptionStatusEnum.LOCAL && !(nodeId in collection)) continue;
    const previousUrl = localThumbnails[nodeId]?.url;
    if (previousUrl && url) revokeThumbnailUrl(previousUrl);
    const item = payload.styleKind === SubscriptionStatusEnum.LOCAL ? collection[nodeId] : payload.item;
    const resolvedContentHash = (() => {
      if (contentHash != null) return contentHash;
      if (item) {
        switch (item.type) {
          case PrimaryWorkflowEnum.COMPONENT:
          case PrimaryWorkflowEnum.STYLE:
            return item.content_hash;
          case PrimaryWorkflowEnum.STATE_GROUP:
          case PrimaryWorkflowEnum.VARIABLE:
          case PrimaryWorkflowEnum.VARIABLE_SET:
          case PrimaryWorkflowEnum.MODULE:
          case PrimaryWorkflowEnum.RESPONSIVE_SET:
          case PrimaryWorkflowEnum.CODE_COMPONENT:
            return item.version;
          default:
            throwTypeError(item, 'Unhandled item type');
        }
      }
    })();
    const thumbnailEntry = (updatedThumbnails || localThumbnails)[nodeId];
    if (thumbnailEntry && thumbnailEntry.url === url && thumbnailEntry.content_hash === resolvedContentHash) {
      // No update needed
    } else {
      if (!updatedThumbnails) updatedThumbnails = {
        ...localThumbnails
      };
      updatedThumbnails[nodeId] = {
        kind: payload.styleKind,
        url,
        css: styleThumbnail,
        content_hash: resolvedContentHash
      };
    }
    if (type === PrimaryWorkflowEnum.STYLE && payload.styleKind === SubscriptionStatusEnum.LOCAL) {
      const styleEntry = (updatedStyles || localStyles)[nodeId];
      if (styleEntry && (!styleEntry.meta || styleEntry.meta.style_thumbnail !== styleThumbnail)) {
        if (!updatedStyles) updatedStyles = {
          ...localStyles
        };
        updatedStyles[nodeId] = {
          ...styleEntry,
          meta: {
            ...styleEntry.meta,
            style_thumbnail: styleThumbnail
          }
        };
      }
    }
  }
  if (updatedThumbnails) {
    context.dispatch(replaceLocalThumbnails({
      thumbnails: updatedThumbnails
    }));
  }
  if (updatedStyles && payload.styleKind === SubscriptionStatusEnum.LOCAL) {
    context.dispatch(componentReplaceLocal({
      local: updatedStyles,
      type: PrimaryWorkflowEnum.STYLE
    }));
  }
});

/**
 * Loads and updates style thumbnails for a given style node.
 * (Original: $$N4)
 */
export const updateStyleThumbnailOptimist = createOptimistThunk(async (context, payload) => {
  if (payload.styleKind === SubscriptionStatusEnum.LOCAL) {
    const style = context.getState().library.local.styles[payload.styleNodeId];
    const thumbnail = context.getState().library.local.thumbnails[payload.styleNodeId];
    if (style) {
      const result = getStyleThumbnail(style, thumbnail);
      const resolved = await result;
      if (result instanceof Promise && resolved) {
        thumbnailTaskController.release(resolved.nodeId, resolved.contentHash);
      }
      if (resolved) {
        context.dispatch(replaceThumbnailsOptimist({
          thumbnails: [resolved],
          styleKind: SubscriptionStatusEnum.LOCAL
        }));
      }
    }
  } else if (payload.styleKind === SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY) {
    const thumbnail = context.getState().library.local.thumbnails[payload.styleNodeId];
    if (thumbnail) return;
    if (getFeatureFlags().ds_zombie_styles_fixes) {
      const sceneNode = context.getState().mirror.sceneGraph.get(payload.styleNodeId);
      const styleInfo = sceneNode && hasStyleType(sceneNode) ? getStyleInfo(sceneNode) : null;
      if (styleInfo) {
        const result = getStyleThumbnail(styleInfo, thumbnail);
        const resolved = await result;
        if (result instanceof Promise && resolved) {
          thumbnailTaskController.release(resolved.nodeId, resolved.contentHash);
        }
        if (resolved) {
          context.dispatch(replaceThumbnailsOptimist({
            thumbnails: [resolved],
            styleKind: SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY,
            item: styleInfo
          }));
        }
      }
    } else {
      const url = generateThumbnailFromStyleMaster(payload.styleNodeId, 'FILL');
      context.dispatch(addThumbnailForDanglingStyle({
        styleID: payload.styleNodeId,
        url
      }));
    }
  }
});

/**
 * Loads and updates all style thumbnails for a given style type.
 * (Original: $$P1)
 */
export const updateAllStyleThumbnailsOptimist = createOptimistThunk(async (context, payload) => {
  const styles = context.getState().library.local.styles;
  const thumbnails = context.getState().library.local.thumbnails;
  const styleType = payload.styleType;
  const resolvedThumbnails: any[] = [];
  const pendingPromises: Promise<any>[] = [];
  for (const styleId in styles) {
    const style = styles[styleId];
    if (style.style_type !== styleType) continue;
    const result = getStyleThumbnail(style, thumbnails[styleId]);
    if (result instanceof Promise) {
      pendingPromises.push(result);
    } else if (result != null) {
      resolvedThumbnails.push(result);
    }
  }
  if (resolvedThumbnails.length > 0) {
    context.dispatch(replaceThumbnailsOptimist({
      thumbnails: resolvedThumbnails,
      styleKind: SubscriptionStatusEnum.LOCAL
    }));
  }
  if (pendingPromises.length > 0) {
    for (let i = 0; i < pendingPromises.length; i += 50) {
      const batch = await resolveAllWithStatus(pendingPromises.slice(i, i + 50));
      const batchThumbnails = batch.map(e => e.resolve).filter(isNotNullish);
      for (const thumbnail of batchThumbnails) {
        thumbnailTaskController.release(thumbnail.nodeId, thumbnail.contentHash);
      }
      context.dispatch(replaceThumbnailsOptimist({
        thumbnails: batchThumbnails,
        styleKind: SubscriptionStatusEnum.LOCAL
      }));
    }
  }
});

/**
 * Controller for managing thumbnail generation tasks.
 * (Original: O)
 */
const thumbnailTaskController = (() => {
  const controllerMap = new Map<string, {
    controller: any;
    contentHash: string;
  }>();
  return {
    acquire(nodeId: string, contentHash: string = 'INVALID') {
      const entry = controllerMap.get(nodeId);
      if (entry?.contentHash === contentHash) return null;
      if (entry) entry.controller.abort();
      const controller = new TaskController({
        priority: 'user-visible'
      });
      controllerMap.set(nodeId, {
        controller,
        contentHash
      });
      return controller.signal;
    },
    release(nodeId: string, contentHash: string = 'INVALID') {
      const entry = controllerMap.get(nodeId);
      if (entry?.contentHash === contentHash) controllerMap.delete(nodeId);
    }
  };
})();

// Exported names for refactored functions and constants
export const Fw = loadVariableSetThumbnails;
export const GT = updateAllStyleThumbnailsOptimist;
export const RI = fetchVariableSetThumbnails;
export const T1 = replaceThumbnailsOptimist;
export const rb = updateStyleThumbnailOptimist;
export const sA = generateVariableSetThumbnailUrl;
export const t9 = getVariableThumbnail;
export const us = addThumbnailForDanglingStyle;
export const xp = replaceLocalThumbnails;
