import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { convertToRgba } from "../905/222694"
import { getResourceDataOrFallback } from "../905/663269"
import { generateUUIDv4 } from "../905/871474"
import { DesktopTabPreviewView, FilePresenterData, FileWithCommentsAndReactions, PersistentUserNotificationBellData } from "../figma_app/43951"
import { td } from "../figma_app/273118"
import { bellFeedAPIInstance } from "../figma_app/876459"

export class DesktopFileSubscriptionManager {
  private subscribedFiles: Map<string, Array<() => void>>

  constructor() {
    this.subscribedFiles = new Map()
  }

  /**
   * Updates file subscriptions based on provided file keys
   * @param fileKeys - Object containing file keys to subscribe to
   * @param subscriptionManager - Manager instance for handling subscriptions
   */
  updateSubscriptions(
    fileKeys: Record<string, unknown>,
    subscriptionManager: any,
  ): void {
    const subscriptionMethods = [
      this.subscribeToFilePresenterData.bind(this),
      this.subscribeToFileCommentData.bind(this),
      this.subscribeToTabPreviewData.bind(this),
    ]

    // Add new subscriptions
    for (const [fileKey] of Object.entries(fileKeys)) {
      if (!this.subscribedFiles.has(fileKey) && subscriptionManager) {
        const unsubscribeFunctions = subscriptionMethods.map(method =>
          method(fileKey, subscriptionManager),
        )
        this.subscribedFiles.set(fileKey, unsubscribeFunctions)
      }
    }

    // Remove obsolete subscriptions
    for (const [fileKey, unsubscribeFunctions] of this.subscribedFiles) {
      if (!(fileKey in fileKeys)) {
        for (const unsubscribe of unsubscribeFunctions) {
          unsubscribe()
        }
        this.subscribedFiles.delete(fileKey)
      }
    }
  }

  /**
   * Subscribe to file presenter data updates
   * @param fileKey - The file key to subscribe to
   * @param subscriptionManager - Manager instance for handling subscriptions
   * @returns Unsubscribe function
   */
  private subscribeToFilePresenterData(
    fileKey: string,
    subscriptionManager: any,
  ): () => void {
    return subscriptionManager.subscribe(FilePresenterData, {
      fileKey,
    }, (response: any) => {
      if (response.status === "loaded" && response.data.file?.presenter) {
        let color: { r: number, g: number, b: number, a: number } | undefined
        let presenter: { id: string, handle: string, imageURL: string } | null = null
        const receivedFileKey = response.data.file.key

        // Validate file key consistency
        if (receivedFileKey !== fileKey) {
          reportError(
            ServiceCategories.DESKTOP,
            new Error(`Mismatched file keys for presenter data: got ${receivedFileKey} from livegraph but expected ${fileKey}`),
            { level: "warning" },
          )
        }

        const { userId, handle, imageURL, presenterExists, color: presenterColor } = response.data.file.presenter

        // Extract presenter data if all required fields exist
        if (userId && handle && imageURL && presenterExists && presenterColor) {
          presenter = {
            id: userId,
            handle,
            imageURL,
          }
          color = {
            r: presenterColor.r,
            g: presenterColor.g,
            b: presenterColor.b,
            a: presenterColor.a,
          }
        }

        this.handleLiveFileUpdate(receivedFileKey, {
          presenter,
          color,
        })
      }
    })
  }

  /**
   * Subscribe to tab preview data updates
   * @param fileKey - The file key to subscribe to
   * @param subscriptionManager - Manager instance for handling subscriptions
   * @returns Unsubscribe function
   */
  private subscribeToTabPreviewData(
    fileKey: string,
    subscriptionManager: any,
  ): () => void {
    return subscriptionManager.subscribe(DesktopTabPreviewView, {
      fileKey,
    }, (response: any) => {
      if (response.status === "loaded" && response.data.file) {
        const { file } = response.data
        if (file) {
          this.handleTabPreviewUpdate(file)
        }
      }
    })
  }

  /**
   * Subscribe to file comment data updates
   * @param fileKey - The file key to subscribe to
   * @param subscriptionManager - Manager instance for handling subscriptions
   * @returns Unsubscribe function
   */
  private subscribeToFileCommentData(
    fileKey: string,
    subscriptionManager: any,
  ): () => void {
    const subscriptionId = `menubar${generateUUIDv4()}`

    return subscriptionManager.subscribe(FileWithCommentsAndReactions, {
      fileKey,
    }, (response: any) => {
      if (response.status === "loaded" && response.data.file?.currentUserCommentReadStatus) {
        const currentUserId = response.data.file.currentUserCommentReadStatus.userId
        const fileId = response.data.file.id

        // Validate file key consistency
        if (fileId !== fileKey) {
          reportError(
            ServiceCategories.DESKTOP,
            new Error(`Mismatched file keys for comment data: got ${fileId} from livegraph but expected ${fileKey}`),
            { level: "warning" },
          )
        }

        const latestComment = response.data.file.comments[0]
        if (latestComment) {
          // Only process recent comments (within 1 second)
          if (Date.now() - latestComment.createdAt.getTime() > 1000) {
            return
          }

          const commentAuthor = latestComment.user
          for (const messageMeta of latestComment.messageMeta) {
            // Check if current user was mentioned by someone else
            if (messageMeta.user?.id === currentUserId && messageMeta.user?.id !== commentAuthor.id) {
              const mentionData = {
                id: commentAuthor.id,
                handle: commentAuthor.handle,
                imageURL: commentAuthor.imgUrl,
              }

              this.handleLiveFileUpdate(fileId, {
                atMentionBy: mentionData,
              })
              return
            }
          }
        }
      }
    }, subscriptionId)
  }

  /**
   * Handle tab preview updates
   * @param fileData - File data containing preview information
   */
  private handleTabPreviewUpdate(fileData: any): void {
    if (bellFeedAPIInstance == null) {
      return
    }

    const { touchedAt, key } = fileData

    // Extract thumbnail data
    const thumbnail = (function (data: any) {
      const { signedThumbnailUrl, checkpointClientMeta, thumbnailGuid } = data
      return signedThumbnailUrl
        ? {
          url: signedThumbnailUrl,
          backgroundColor: convertToRgba(checkpointClientMeta),
          fullWidth: !!thumbnailGuid,
        }
        : undefined
    })(fileData)

    // Extract active file users
    const activeFileUsers = fileData.activeFileUsers
      ? fileData.activeFileUsers.map((user: any) => {
        const { id, handle, imageUrl } = user
        return {
          id,
          handle,
          imageURL: imageUrl,
        }
      }) ?? []
      : []

    // Update tab preview data if file is still subscribed
    if (this.subscribedFiles.has(key)) {
      bellFeedAPIInstance.setTabPreviewData(key, {
        editedAt: touchedAt,
        thumbnail,
        activeFileUsers,
      })
    }
  }

  /**
   * Handle live file data updates
   * @param fileKey - The file key
   * @param updateData - Data to update
   */
  private handleLiveFileUpdate(
    fileKey: string,
    updateData: {
      presenter?: { id: string, handle: string, imageURL: string } | null
      color?: { r: number, g: number, b: number, a: number }
      atMentionBy?: { id: string, handle: string, imageURL: string }
    },
  ): void {
    bellFeedAPIInstance?.setLiveFileData(fileKey, updateData)
  }
}

/**
 * Process file data to extract thumbnail information
 * @param fileData - File data containing thumbnail information
 * @returns Thumbnail data or undefined
 */
export function processFileThumbnailData(fileData: any): {
  url: string
  backgroundColor: string
  fullWidth: boolean
} | undefined {
  return fileData.thumbnail_url
    ? {
      url: fileData.thumbnail_url,
      backgroundColor: convertToRgba(fileData.client_meta),
      fullWidth: !!fileData.thumbnail_guid,
    }
    : undefined
}

/**
 * Subscribe to user notification bell data
 * @param subscriptionManager - Manager instance for handling subscriptions
 * @returns Unsubscribe function
 */
export function subscribeToUserNotificationBell(subscriptionManager: any): () => void {
  let currentBellState = false

  return subscriptionManager.subscribe(PersistentUserNotificationBellData, {}, (response: any) => {
    if (response.status !== "loaded") {
      return
    }

    const notificationBells = getResourceDataOrFallback(response.data.persistentUserNotificationBells) || []
    const userBellData = notificationBells.find(bell => bell.notificationSpaceId === td)

    if (userBellData && userBellData.bell !== currentBellState) {
      currentBellState = userBellData.bell
      bellFeedAPIInstance?.setBell(userBellData.bell)
    }
  })
}

export const cZ = subscribeToUserNotificationBell
export const pf = processFileThumbnailData
export const vY = DesktopFileSubscriptionManager
