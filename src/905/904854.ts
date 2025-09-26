const MIME_TYPE_FIG_FILE = 'application/x-fig-file'
const MIME_TYPE_JSON = 'application/json'
const MIME_TYPE_FILES = 'Files'
const MIME_TYPE_FIG_REPO = 'application/x-fig-file-repo'
const MIME_TYPE_FIG_TILE = 'application/x-fig-file-tile'
const MIME_TYPE_FIG_PROTO = 'application/x-fig-file-proto'

interface TilesData {
  files: any[]
  repos: any[]
  prototypes: any[]
}

interface ReposData {
  repos: any[]
  files: any[]
}

export class DragDataHandler {
  private _dataTransfer: DataTransfer
  private _type: string
  private _data: any

  constructor(dataTransfer: DataTransfer) {
    this._dataTransfer = dataTransfer

    // Check for file type first
    if (this._containsType(MIME_TYPE_FILES)) {
      this._type = MIME_TYPE_FILES
      this._data = this._dataTransfer.getData(MIME_TYPE_FILES)
    }

    // Check for other types
    const mimeTypes = [
      MIME_TYPE_JSON,
      MIME_TYPE_FIG_FILE,
      MIME_TYPE_FIG_REPO,
      MIME_TYPE_FIG_PROTO,
      MIME_TYPE_FIG_TILE,
    ]

    for (const mimeType of mimeTypes) {
      if (this._containsType(mimeType) && this._dataTransfer.getData(mimeType)) {
        try {
          this._type = mimeType
          this._data = JSON.parse(this._dataTransfer.getData(mimeType))
          break
        }
        catch {
          // Ignore parsing errors
        }
      }
    }
  }

  /**
   * Checks if the data transfer contains a specific MIME type
   * @param mimeType - The MIME type to check for
   * @returns boolean indicating if the type is present
   */
  private _containsType(mimeType: string): boolean {
    return !!this._dataTransfer.types
      && Array.from(this._dataTransfer.types).includes(mimeType)
  }

  /**
   * Sets the data transfer data as JSON string
   */
  private _setDataAsText(): void {
    this._dataTransfer.setData(this._type, JSON.stringify(this._data))
  }

  /**
   * Sets arbitrary data with JSON MIME type
   * @param data - The data to set
   */
  setArbitraryData(data: any): void {
    this._type = MIME_TYPE_JSON
    this._data = data
    this._setDataAsText()
  }

  /**
   * Sets fig files data
   * @param data - The fig files data to set
   */
  setFigFilesData(data: any): void {
    this._type = MIME_TYPE_FIG_FILE
    this._data = data
    this._setDataAsText()
  }

  /**
   * Sets repositories data
   * @param repos - Array of repositories
   * @param files - Array of files
   */
  setReposData(repos: any[], files: any[]): void {
    this._type = MIME_TYPE_FIG_REPO
    this._data = {
      repos,
      files,
    }
    this._setDataAsText()
  }

  /**
   * Sets prototypes data
   * @param data - The prototypes data to set
   */
  setPrototypesData(data: any): void {
    this._type = MIME_TYPE_FIG_PROTO
    this._data = data
    this._setDataAsText()
  }

  /**
   * Sets tiles data
   * @param files - Array of files
   * @param repos - Array of repositories
   * @param prototypes - Array of prototypes
   */
  setTilesData(files: any[], repos: any[], prototypes: any[]): void {
    this._type = MIME_TYPE_FIG_TILE
    this._data = {
      files,
      repos,
      prototypes,
    }
    this._setDataAsText()
  }

  /**
   * Sets the drag image if supported
   * @param img - The image element
   * @param xOffset - X offset
   * @param yOffset - Y offset
   */
  setDragImage(img: Element, xOffset: number, yOffset: number): void {
    if (this._dataTransfer.setDragImage) {
      this._dataTransfer.setDragImage(img, xOffset, yOffset)
    }
  }

  /**
   * Checks if the current data is arbitrary JSON data
   * @returns boolean
   */
  isArbitraryData(): boolean {
    return this._type === MIME_TYPE_JSON
  }

  /**
   * Checks if the current data is fig files
   * @returns boolean
   */
  isFigFiles(): boolean {
    return this._type === MIME_TYPE_FIG_FILE
  }

  /**
   * Checks if the current data is file
   * @returns boolean
   */
  isFile(): boolean {
    return this._type === MIME_TYPE_FILES
  }

  /**
   * Checks if the current data is repositories
   * @returns boolean
   */
  isRepos(): boolean {
    return this._type === MIME_TYPE_FIG_REPO
  }

  /**
   * Checks if the current data is prototypes
   * @returns boolean
   */
  isPrototypes(): boolean {
    return this._type === MIME_TYPE_FIG_PROTO
  }

  /**
   * Checks if the current data is tiles
   * @returns boolean
   */
  isTiles(): boolean {
    return this._type === MIME_TYPE_FIG_TILE
  }

  /**
   * Gets the current data
   * @returns The stored data
   */
  getData(): any {
    return this._data
  }

  /**
   * Gets repositories data if current type is repos
   * @returns ReposData or null
   */
  getReposData(): ReposData | null {
    return this.isRepos() ? this.getData() : null
  }

  /**
   * Gets tiles data if current type is tiles
   * @returns TilesData or null
   */
  getTilesData(): TilesData | null {
    return this.isTiles() ? this.getData() : null
  }
}

export const le = DragDataHandler
