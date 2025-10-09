// Origin: /Users/allen/sigma-main/src/905/298764.ts
// Changes: Renamed variables and class, added TypeScript types/interfaces, improved readability, added comments, simplified logic, noted assumed dependencies.

import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";

// Assumed dependencies:
// - createNoOpValidator: returns an object with a `validate` method that accepts an async function.
// - APIParameterUtils: provides `toAPIParameters` for converting parameters to API format.

// Type definitions for API context and parameters
interface APIContext {
  xr: {
    get: (url: string, params?: Record<string, any>) => Promise<any>;
  };
}

interface ActivityLogsParams {
  [key: string]: any;
}

interface LastEditParams {
  orgUserId: string;
}

interface RecentParams {
  orgUserId: string;
  pageSize: number;
}

// Refactored class with clear names and type safety
export class ActivityLogsService {
  private activityLogsValidator = createNoOpValidator();
  private lastEditValidator = createNoOpValidator();
  private recentValidator = createNoOpValidator();

  /**
   * Fetches activity logs using provided parameters.
   * @param params - Parameters for the activity logs API.
   */
  getActivityLogs(params: ActivityLogsParams): Promise<any> {
    return this.activityLogsValidator.validate(async ({ xr }: APIContext) => {
      const apiParams = APIParameterUtils.toAPIParameters(params);
      return await xr.get("/api/activity_logs", apiParams);
    });
  }

  /**
   * Fetches the last edit information for a user.
   * @param params - Parameters containing orgUserId.
   */
  getLastEdit(params: LastEditParams): Promise<any> {
    return this.lastEditValidator.validate(async ({ xr }: APIContext) => {
      return await xr.get(`/api/activity_logs/last_edit/${params.orgUserId}`);
    });
  }

  /**
   * Fetches recent activity logs for a user with pagination.
   * @param params - Parameters containing orgUserId and pageSize.
   */
  getRecent(params: RecentParams): Promise<any> {
    return this.recentValidator.validate(async ({ xr }: APIContext) => {
      const apiParams = APIParameterUtils.toAPIParameters({ pageSize: params.pageSize });
      return await xr.get(`/api/activity_logs/recent/${params.orgUserId}`, apiParams);
    });
  }
}

// Export with original variable names for compatibility
export const activityLogsService = new ActivityLogsService();
export const J = activityLogsService;
