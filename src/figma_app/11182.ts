import { showModalHandler } from "../905/156213"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { tileCopyLinkModalId } from "../905/721794"
import { selectedViewToPath } from "../figma_app/193867"
import { copyTextToClipboard } from "../figma_app/623293"
// Original variable: $$c3
/**
 * Thunk to copy text to clipboard with optional line breaks and success message.
 * @param e - The dispatch function.
 * @param t - Options including stringToCopy, ignoreLineBreaks, and successText.
 */
const copyTextThunk = createOptimistThunk((e, t) => {
  const textToCopy = t.stringToCopy
  const options = {
    withLineBreaks: !(t.ignoreLineBreaks ?? true),
    successText: t.successText,
  }
  copyTextToClipboard(textToCopy, options).then(() => {
    e.dispatch(VisualBellActions.enqueue({
      type: "copied_to_clipboard",
      message: options.successText ?? getI18nString("fullscreen_actions.copied_to_clipboard"),
    }))
  })
})

// Original variable: $$u0
/**
 * Thunk to copy a list of emails to clipboard.
 * @param e - The dispatch function.
 * @param t - Options including emailList.
 */
const copyEmailsThunk = createOptimistThunk((e, t) => {
  const emailList = t.emailList
  const numEmails = emailList.length
  const emailText = emailList.join("; ")
  copyTextToClipboard(emailText).then(() => {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("copy_to_clipboard.emails_copied_to_clipboard", {
        numEmails,
        emailText,
      }),
      type: "emails-copied",
    }))
  })
})

// Original variable: $$p2
/**
 * Function to create a thunk for copying a link based on selected view.
 * @param e - The dispatch function.
 * @returns A thunk that handles the link copying.
 */
export function copySelectedViewLinkThunk(e) {
  return createOptimistThunk(({dispatch}, t) => {
    const path = t.selector.selectedViewToPath(t.selectedView, t.data)
    if (!path)
      return
    const fullUrl = new URL(path, document.baseURI).href
    dispatch(copyLinkThunk({
      url: fullUrl,
    }))
  })(e)
}

// Original variable: $$_4
/**
 * Thunk to copy a link for a view, converting folder to project type.
 * @param e - The dispatch function.
 * @param t - Options including view.
 */
const copyViewLinkThunk = createOptimistThunk((e, t) => {
  const url = new URL(selectedViewToPath(e.getState(), t), document.baseURI).href
  const linkType = (() => {
    if (t.view === "folder")
      return "project"
    return undefined
  })()
  e.dispatch(copyLinkThunk({
    url,
    linkType,
  }))
})

// Original variable: $$h1
/**
 * Thunk to copy a link to clipboard with appropriate success message based on link type.
 * @param e - The dispatch function.
 * @param t - Options including url and optional linkType.
 */
const copyLinkThunk = createOptimistThunk(async (e, t) => {
  const url = t.url
  const linkType = t.linkType ?? "selection"
  let successMessage
  switch (linkType) {
    case "template":
      successMessage = getI18nString("copy_to_clipboard.template_share_link_copied")
      break
    case "project":
    case "team":
    case "link":
      successMessage = getI18nString("copy_to_clipboard.link_copied_to_clipboard")
      break
    case "plugin":
      successMessage = getI18nString("copy_to_clipboard.link_to_plugin_copied_to_clipboard")
      break
    case "widget":
      successMessage = getI18nString("copy_to_clipboard.link_to_widget_copied_to_clipboard")
      break
    default:
      successMessage = getI18nString("copy_to_clipboard.link_to_selection_copied_to_clipboard")
  }
  try {
    await copyTextToClipboard(url)
    e.dispatch(VisualBellActions.enqueue({
      type: "link_copied_to_clipboard",
      message: successMessage,
    }))
  }
  catch {
    e.dispatch(showModalHandler({
      type: tileCopyLinkModalId,
      data: {
        link: url,
      },
    }))
  }
})

export const II = copyEmailsThunk
export const S = copyLinkThunk
export const TH = copySelectedViewLinkThunk
export const lW = copyTextThunk
export const le = copyViewLinkThunk
