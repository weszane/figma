import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'

interface TrashedFilesParams {
  orgId?: string
  teamId?: string
  creatorFilter?: string
}

interface SchemaValidator {
  validate: (fn: (params: { xr: { get: (url: string, params: any) => Promise<any> } }) => Promise<any>) => any
}

class TrashedFilesValidatorAPI {
  TrashedFilesV2SchemaValidator: SchemaValidator

  constructor() {
    this.TrashedFilesV2SchemaValidator = createNoOpValidator()
  }

  getTrashedFilesV2(e: TrashedFilesParams) {
    return this.TrashedFilesV2SchemaValidator.validate(async ({
      xr: t,
    }) => await t.get('/api/trashed_files_v2', APIParameterUtils.toAPIParameters({
      orgId: e.orgId || '',
      teamId: e.teamId || '',
      creatorFilter: e.creatorFilter || '',
    })))
  }
}
export const trashedFilesValidatorAPI = new TrashedFilesValidatorAPI()
export const p = trashedFilesValidatorAPI
