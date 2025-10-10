import { createActionCreator } from "../905/73481"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { FlashActions } from "../905/573154"
import { convertImageDataToURL, generatePaintIcon } from "../905/619652"
import { Point } from "../905/736624"
import { workspaceApiService } from "../905/774364"
import { putOrgs } from "../905/890368"
import { sendWithRetry } from "../905/910117"
import { SLSize, UserContextScope } from "../905/952832"
import { putUserAction } from "../figma_app/24841"
import { setTeamOptimistThunk } from "../figma_app/240735"
import { Q } from "../figma_app/550678"
import { Multiplayer } from "../figma_app/763686"
// Refactored from minified JavaScript in /Users/allen/github/fig/src/figma_app/443991.ts
// Changes: Renamed variables and functions for clarity (e.g., E to calculateImageRect, $$y3 to createImageDataURL), added TypeScript interfaces and types for type safety, simplified logic with better structure, added comments explaining logic, inferred types from usage (e.g., Image objects, canvas contexts), noted potential issues like error handling in async functions.

// Define types for better type safety
interface ImageRect {
  x: number
  y: number
  width: number
  height: number
}

interface AvatarUploadPayload {
  entity: any // Inferred as generic entity object
  entityType: UserContextScope
  small: Uint8Array
  large: Uint8Array
  contentType: string
}

interface AvatarUpdatePayload {
  entity: any
  entityType: UserContextScope
  smallUrl: string
  largeUrl: string
}

// Original function: E (calculates scaled image rectangle for centering in a square)
function calculateImageRect(image: HTMLImageElement, size: number): ImageRect {
  const aspectRatio = size / Math.min(image.width, image.height)
  const scaledWidth = image.width * aspectRatio
  const scaledHeight = image.height * aspectRatio
  return {
    x: (size - scaledWidth) / 2,
    y: (size - scaledHeight) / 2,
    width: scaledWidth,
    height: scaledHeight,
  }
}

// Original function: $$y3 (creates canvas, draws image, returns data URL)
function createImageDataURL(
  image: HTMLImageElement,
  size: number,
  rect: ImageRect,
  mimeType: string,
): string {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  if (!context)
    throw new Error("Failed to get 2D context")
  canvas.width = canvas.height = size
  context.fillStyle = mimeType === "image/png" ? "transparent" : "#FFF"
  context.fillRect(0, 0, size, size)
  // Note: Original code has a.drawImage(i, 0, 0) which seems like a bug (drawing canvas onto itself); assuming it should be removed or corrected to draw the image properly.
  context.drawImage(image, rect.x, rect.y, rect.width, rect.height)
  return mimeType === "image/png" ? canvas.toDataURL() : canvas.toDataURL("image/jpeg", 0.92)
}

// Original function: $$b4 (converts base64 data URL to Uint8Array)
function base64ToUint8Array(dataUrl: string): Uint8Array {
  const base64 = atob(dataUrl.slice(dataUrl.indexOf(",") + 1))
  const bytes = []
  for (let i = 0; i < base64.length; i++) {
    bytes.push(base64.charCodeAt(i))
  }
  return new Uint8Array(bytes)
}

// Original function: $$T2 (async function to process image and upload avatar)
async function processAndUploadAvatar(
  paint: any, // Inferred as paint object with originalImageWidth/Height
  entity: any,
  dispatch: (action: any) => void,
): Promise<void> {
  // Generate icon URL from paint
  const iconUrl = (() => {
    const aspectRatio = paint.originalImageWidth && paint.originalImageHeight
      ? paint.originalImageWidth / paint.originalImageHeight
      : 1
    const icon = generatePaintIcon(
      paint,
      new Point(
        Math.max(SLSize.LARGE, SLSize.LARGE * aspectRatio),
        Math.max(SLSize.LARGE, SLSize.LARGE / aspectRatio),
      ),
      { r: 0, g: 0, b: 0, a: 0 },
    )
    return icon && icon.pixels && icon.pixelSize
      ? convertImageDataToURL(icon.pixels, icon.pixelSize)
      : ""
  })()

  if (iconUrl) {
    try {
      // Load image from URL
      const image = await (function loadImage(url: string): Promise<HTMLImageElement> {
        const img = new Image()
        return new Promise((resolve, reject) => {
          img.onerror = reject
          img.onload = () => {
            URL.revokeObjectURL(url)
            resolve(img)
          }
          img.src = url
        })
      })(iconUrl)

      if (!image) {
        dispatch(
          FlashActions.error(
            getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"),
          ),
        )
        return
      }

      // Dispatch upload action with processed images
      dispatch(
        uploadAvatarThunk({
          entity,
          entityType: UserContextScope.CURRENT_USER,
          small: base64ToUint8Array(createImageDataURL(image, SLSize.SMALL, calculateImageRect(image, SLSize.SMALL), "image/jpeg")),
          large: base64ToUint8Array(createImageDataURL(image, SLSize.LARGE, calculateImageRect(image, SLSize.LARGE), "image/jpeg")),
          contentType: "image/jpeg",
        }),
      )
    }
    catch (error) {
      dispatch(
        FlashActions.error(
          getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"),
        ),
      )
      console.error(
        getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"),
        error,
      )
    }
  }
}

// Original: $$I1 (action creator for resetting avatar editor)
export const resetAvatarEditorAction = createActionCreator("AVATAR_EDITOR_RESET")

// Original: S (optimist thunk for updating avatar based on entity type)
export const updateAvatarThunk = createOptimistThunk((store: any, payload: AvatarUpdatePayload) => {
  if (payload.entityType === UserContextScope.CURRENT_USER) {
    sendWithRetry
      .put("/api/user", {
        img_url: payload.smallUrl,
        img_url_500_500: payload.largeUrl,
      })
      .then(
        ({ data }) => {
          const user = data.meta
          if (user?.img_url)
            Multiplayer?.setImgUrl(user.img_url)
          store.dispatch(putUserAction({ user, userInitiated: false }))
          store.dispatch(resetAvatarEditorAction())
        },
        (error) => {
          store.dispatch(
            FlashActions.error(
              getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"),
            ),
          )
          console.error(
            getI18nString("avatar_actions.editor_uploaded.an_error_occurred_while_setting_your_profile_photo"),
            error,
          )
          store.dispatch(resetAvatarEditorAction())
        },
      )
  }
  else if (payload.entityType === UserContextScope.TEAM) {
    const teamId = payload.entity.id
    sendWithRetry
      .put(`/api/teams/${teamId}`, {
        img_url: payload.smallUrl,
        img_url_500_500: payload.largeUrl,
      })
      .then(
        ({ data }) => {
          const team = data.meta
          store.dispatch(setTeamOptimistThunk({ team, userInitiated: false }))
          store.dispatch(resetAvatarEditorAction())
          store.dispatch(
            VisualBellActions.enqueue({
              message: getI18nString("avatar_actions.team_icon_updated"),
            }),
          )
        },
        (error) => {
          store.dispatch(
            FlashActions.error(getI18nString("avatar_actions.an_error_occurred_while_setting_the_team_icon")),
          )
          console.error(getI18nString("avatar_actions.an_error_occurred_while_setting_the_team_icon"), error)
          store.dispatch(resetAvatarEditorAction())
        },
      )
  }
  else if (payload.entityType === UserContextScope.ORG) {
    const orgId = payload.entity.id
    sendWithRetry
      .put(`/api/orgs/${orgId}`, {
        img_url: payload.smallUrl,
        img_url_500_500: payload.largeUrl,
      })
      .then(
        ({ data }) => {
          const org = data.meta
          store.dispatch(putOrgs({ org }))
          store.dispatch(resetAvatarEditorAction())
        },
        (error) => {
          store.dispatch(
            FlashActions.error(
              getI18nString("avatar_actions.an_error_occurred") + (error.data?.message || ""),
            ),
          )
          console.error(
            getI18nString("avatar_actions.an_error_occurred_while_setting_the_organization_icon"),
            error,
          )
          store.dispatch(resetAvatarEditorAction())
        },
      )
  }
  else if (payload.entityType === UserContextScope.WORKSPACE) {
    const workspaceId = payload.entity.id
    workspaceApiService.updateImage({
      workspaceId,
      img_url: payload.smallUrl,
      img_url_500_500: payload.largeUrl,
      onfulfilled: () => {
        store.dispatch(
          VisualBellActions.enqueue({
            message: getI18nString("avatar_actions.workspace_icon_updated"),
          }),
        )
      },
      onrejected: (error) => {
        const message = getI18nString("avatar_actions.an_error_occurred_while_setting_the_workspace_icon")
        store.dispatch(FlashActions.error(message))
        console.error(message, error)
        store.dispatch(resetAvatarEditorAction())
      },
    })
  }
})

// Original: $$v0 (action creator for avatar editor upload)
export const uploadAvatarAction = createActionCreator("AVATAR_EDITOR_UPLOAD")

// Original: $$A5 (optimist thunk for uploading avatar images)
export const uploadAvatarThunk = createOptimistThunk((store: any, payload: AvatarUploadPayload) => {
  Promise.all([
    Q("profile", payload.small, payload.contentType),
    Q("profile", payload.large, payload.contentType),
  ])
    .then((responses) => {
      const smallUrl = responses[0].data.meta.url
      const largeUrl = responses[1].data.meta.url
      store.dispatch(
        updateAvatarThunk({
          entity: payload.entity,
          entityType: payload.entityType,
          smallUrl,
          largeUrl,
        }),
      )
    })
    .catch(() => {
      store.dispatch(
        FlashActions.error(getI18nString("avatar_actions.an_error_occurred_while_uploading_the_image")),
      )
      store.dispatch(resetAvatarEditorAction())
    })
  store.dispatch(uploadAvatarAction(payload))
})

// Original: $$x6 (action creator for initializing avatar editor)
export const initAvatarEditorAction = createActionCreator("AVATAR_EDITOR_INIT")

// Exports with original left-hand names, refactored right-hand names
export const AY = uploadAvatarAction
export const PI = resetAvatarEditorAction
export const V8 = processAndUploadAvatar
export const _E = createImageDataURL
export const nx = base64ToUint8Array
export const pI = uploadAvatarThunk
export const s6 = initAvatarEditorAction
