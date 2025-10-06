import { reportError, setTagGlobal, SeverityLevel } from '../905/11';
import { showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { isStackOverflowError } from '../905/194389';
import { trackEventAnalytics } from '../905/449184';
import { isActiveAtom } from '../905/617744';
import { logInfo } from '../905/714362';
import { atomStoreManager } from '../figma_app/27355';
import { fullscreenCrashStateAtom } from '../figma_app/276445';
import { getWasmVariantInfo } from '../figma_app/298277';
import { MEMORY_WARNING_MODAL } from '../figma_app/453508';
import { openFileAtom } from '../figma_app/516028';
import { GLFailureType } from '../figma_app/763686';

// Refactored class: original $$f0
class FullscreenCrashHandler {
  _preventEnteringCpp: boolean;
  _fullscreenCrashState: any;
  constructor() {
    this._preventEnteringCpp = false;
    this._fullscreenCrashState = 'ok';
  }

  // original: fullscreenCrashed
  fullscreenCrashed(crash: {
    type: string;
    sentryId?: string;
  }, shouldReport: boolean): void {
    if (this._fullscreenCrashState !== 'ok') {
      logInfo('crash', 'crash already reported', {
        'new crash': crash,
        'original crash': this._fullscreenCrashState
      });
      return;
    }
    if (!shouldReport) return;
    logInfo('crash', 'updating crash state', {
      crash
    });
    this._preventEnteringCpp = true;
    this._fullscreenCrashState = crash;
    atomStoreManager.set(fullscreenCrashStateAtom, crash);
    const figmaMobile = window.FigmaMobile;
    figmaMobile?.dismissMediaLoadingToast?.();
    if (crash.type === 'oom' && figmaMobile?.handleAllocationFailure) {
      figmaMobile.handleAllocationFailure(GLFailureType.WASM_FAILURE);
    }
    const additionalData = getWasmVariantInfo();
    setTagGlobal('fullscreen_status', 'has_crashed');
    let editorType: string | undefined;
    try {
      const openFile = atomStoreManager.get(openFileAtom);
      editorType = openFile?.editorType;
    } catch (error) {
      reportError(ServiceCategories.CLIENT_PLATFORM, error, {
        tags: {
          severity: SeverityLevel.Minor
        }
      });
    }
    trackEventAnalytics('Fullscreen Hard Crash', {
      crashType: crash.type,
      isMergeModalOpen: atomStoreManager.get(isActiveAtom),
      editorType,
      ...additionalData
    }, {
      forwardToDatadog: true
    });
  }

  // original: getFullscreenCrashState
  getFullscreenCrashState(): string {
    return this._fullscreenCrashState;
  }

  // original: preventEnteringCpp
  preventEnteringCpp(): boolean {
    return this._preventEnteringCpp;
  }

  // original: fatalCppError
  fatalCppError(error: Error, type: string = 'other'): void {
    if (type === 'bindings') {
      window.dispatchEvent(new ErrorEvent('bindingserror', {
        error
      }));
    }
    setTagGlobal('fullscreen_status', 'crash');
    const sentryId = reportError(ServiceCategories.UNOWNED, error, {
      tags: {
        severity: SeverityLevel.Critical
      }
    });
    setTagGlobal('fullscreen_status', 'has_crashed');
    const crashType = type === 'oom' ? 'oom' : isStackOverflowError(error) ? 'stack-overflow' : 'other';
    this.fullscreenCrashed({
      type: crashType,
      sentryId
    }, true);
  }

  // original: showMemoryCrashModal
  showMemoryCrashModal(data: {
    isBranching?: boolean;
  }, shouldShow: boolean, dispatch: (action: any) => void): void {
    if (!shouldShow) return;
    if (!dispatch) {
      throw new Error('Trying to dispatch before we\'ve been initialized');
    }
    dispatch(showModalHandler({
      type: MEMORY_WARNING_MODAL,
      data: {
        isBranching: !!data.isBranching
      }
    }));
  }
}
export const fullscreenCrashHandler = new FullscreenCrashHandler();
// original: y
export const y = fullscreenCrashHandler;
