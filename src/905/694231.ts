import { sendWithRetry } from "../905/910117"
import { APIParameterUtils, createNoOpValidator } from "../figma_app/181241"

export class VariableSetDefaultModeService {
  private validator = createNoOpValidator()

  /**
   * Get default modes for variable sets
   * @param params - Parameters containing either folderId or API parameters
   * @returns Promise with the API response
   */
  getDefaultModes(params: { folderId?: string, [key: string]: any }) {
    return this.validator.validate(({ xr }: { xr: any }) => {
      if ("folderId" in params) {
        return xr.get(`/api/variable_set_default_modes/${params.folderId}`)
      }
      return xr.get("/api/variable_set_default_modes", APIParameterUtils.toAPIParameters(params))
    })
  }

  /**
   * Set default mode for variable sets
   * @param params - Parameters for setting default mode
   * @returns Promise with the API response
   */
  setDefaultMode(params: Record<string, any>) {
    return sendWithRetry.post("/api/variable_set_default_modes", APIParameterUtils.toAPIParameters(params))
  }

  /**
   * Delete default mode for variable sets
   * @param params - Parameters for deleting default mode
   * @returns Promise with the API response
   */
  deleteDefaultMode(params: Record<string, any>) {
    return sendWithRetry.del("/api/variable_set_default_modes", APIParameterUtils.toAPIParameters(params))
  }
}

export const variableSetDefaultModeService = new VariableSetDefaultModeService()
export const j = variableSetDefaultModeService
