import { useDispatch } from "react-redux"
import { showModalHandler } from "../905/156213"
import { selectCurrentUser } from "../905/372672"
import { trackEventAnalytics } from "../905/449184"
import { WorkspaceSelectorModal } from "../905/456042"
import { isResourceHubContext } from "../5132/203178"
import { createDuplicateTemplateHandler } from "../5132/642384"
import { hasClientMeta } from "../figma_app/45218"
import { getSearchSessionIdFromSelector } from "../figma_app/387599"

export function useDuplicateTemplateHandler(
  file: any,
  adminReviewerOverride: boolean = false,
  isFreemiumPreview: boolean = false,
  skipWorkspaceSelectionOverride: boolean = false,
) {
  const dispatch = useDispatch<AppDispatch>()
  const searchSessionId = getSearchSessionIdFromSelector()
  const isResourceHub = isResourceHubContext()
  const currentUser = selectCurrentUser()

  if (!hasClientMeta(file)) {
    return () => { }
  }

  const handleDuplicateTemplate = createDuplicateTemplateHandler((payload) => {
    trackEventAnalytics("try_it_out_drafts_picker_menu_opened", {
      hubFileId: file.id,
      searchSessionId,
    })

    dispatch(showModalHandler({
      type: WorkspaceSelectorModal,
      data: {
        payload,
      },
    }))
  }, {
    isFreemiumPreview,
    adminReviewerOverride,
    skipWorkspaceSelection: isResourceHub || skipWorkspaceSelectionOverride,
    userId: currentUser?.id,
  })

  return () => {
    dispatch(handleDuplicateTemplate(file))
  }
}

export const A = useDuplicateTemplateHandler
