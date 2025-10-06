import { createNoOpValidator } from '../figma_app/181241'

/**
 * Handles API requests related to songs and active songs.
 * Original class: anonymous class assigned to $$r0
 */
export class SongsApiHandler {
  /** Validator for songs schema (original: SongsSchemaValidator) */
  songsSchemaValidator = createNoOpValidator()
  /** Validator for active song schema (original: ActiveSchemaValidator) */
  activeSchemaValidator = createNoOpValidator()

  /**
   * Fetches the list of songs.
   * Original method: getSongs
   */
  getSongs<T = any>() {
    return this.songsSchemaValidator.validate<T>(async ({ xr }) => {
      return await xr.get('/api/songs')
    })
  }

  /**
   * Fetches the active song by songID.
   * Original method: getActive
   * @param params - Object containing songID
   */
  getActive(params: { songID: string }) {
    return this.activeSchemaValidator.validate(async ({ xr }) => {
      return await xr.get(`/api/songs/active/${params.songID}`)
    })
  }
}

// Export refactored instance and variable names
export const songAPIHandler = new SongsApiHandler() // original: $$r0
export const N = songAPIHandler
