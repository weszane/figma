import { jsx } from "react/jsx-runtime"
import { ConditionalKeyboardWrapper, LibraryModalSections, useElementWithKeyboardArgs } from "../905/66449"
import { useLibraryFileLink } from "../905/217163"
import { renderI18nText } from "../905/303541"
import { Link } from "../905/438674"

// Original function name: $$l0
// Original export name: x
/**
 * Renders a button to open the library file link if available.
 * @param props - The component props.
 * @param props.libraryKey - The key for the library file.
 * @returns JSX element or null.
 */
export function OpenFileButton({
  libraryKey,
}: {
  libraryKey: string
}) {
  // Original: let { ref, kbArgs } = E4(...)
  const {
    ref,
    kbArgs,
  } = useElementWithKeyboardArgs({
    path: [LibraryModalSections.TabBodySection.Footer],
    column: 1,
  })

  // Original: let l = useLibraryFileLink(...)
  const fileLinkData = useLibraryFileLink({
    libraryKey,
  })

  // Original: let d = l?.data?.link
  const link = fileLinkData?.data?.link

  // Early return if no link
  if (!link) {
    return null
  }

  // Original: onClick: e => e.stopPropagation(), htmlAttributes: { onMouseDown: e => e.stopPropagation() }
  const handleEventStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation()
  }
  return jsx(ConditionalKeyboardWrapper, {
    elementRef: ref,
    kbArgs,
    children: jsx(Link.Button, {
      href: link,
      newTab: true,
      trusted: true,
      variant: "secondary",
      onClick: handleEventStopPropagation,
      htmlAttributes: {
        onMouseDown: handleEventStopPropagation,
      },
      ref,
      children: renderI18nText("design_systems.libraries_modal.open_file"),
    }),
  })
}

// Original: export const x = $$l0
export const x = OpenFileButton
