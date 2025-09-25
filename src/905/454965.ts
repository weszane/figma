import { XHR } from '../905/910117'
import { APIParameterUtils } from '../figma_app/181241'

/**
 * Represents the handler for updating recently used actions and frecency history.
 * Original: $$a0
 */
export class ActionsHistoryHandler {
  /**
   * Updates the recently used actions.
   * @param action - The action object containing displayName, extensionInfo, and runPluginArgs.
   * @returns A promise from XHR.put.
   * Original: updateRecentlyUsedActions
   */
  updateRecentlyUsedActions(action: {
    displayName: string;
    extensionInfo: any;
    runPluginArgs?: {
      parameterValues?: Record<string, any>;
    };
  }) {
    // Helper to serialize parameter values
    const serializeParameterValues = (parameterValues?: Record<string, any>) => {
      if (parameterValues === undefined) return undefined;
      const serialized: Record<string, string> = {};
      for (const key in parameterValues) {
        serialized[key] = JSON.stringify(parameterValues[key]);
      }
      return serialized;
    };

    // Helper to build selectedRunPluginArgs
    const buildSelectedRunPluginArgs = (runPluginArgs?: { parameterValues?: Record<string, any> }) => {
      if (!runPluginArgs) return undefined;
      return {
        parameterValues: serializeParameterValues(runPluginArgs.parameterValues),
      };
    };

    const recentlyUsedActionPayload = {
      displayName: action.displayName,
      extensionInfo: action.extensionInfo,
      selectedRunPluginArgs: buildSelectedRunPluginArgs(action.runPluginArgs),
    };

    return XHR.put('/api/actions_history', {
      recently_used_actions: recentlyUsedActionPayload,
    });
  }

  /**
   * Updates the frecency history.
   * @param payload - The payload to be converted and sent.
   * @returns A promise from XHR.put.
   * Original: updateFrecencyHistory
   */
  updateFrecencyHistory(payload: any) {
    return XHR.put('/api/actions_history', {
      frecency_payload: APIParameterUtils.toAPIParameters(payload),
    });
  }
}

/** Exported instance for usage. Original: I */
export const actionsHistoryHandler = new ActionsHistoryHandler();
export const I = actionsHistoryHandler;
