import classNames from 'classnames'
import { useMemo } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KindEnum } from '../905/129884'
import { SizeOption } from '../905/171275'
import { getI18nString } from '../905/303541'
import { setupFolderPreviewHandler } from '../905/731725'
import { TextWithTruncation } from '../905/984674'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { NU } from '../figma_app/204891'
import { getSelectedView } from '../figma_app/386952'
import { getSidebarPath } from '../figma_app/528509'
import { Badge, BadgeColor } from '../figma_app/919079'

/**
 * Renders a folder preview with thumbnails and folder name.
 * Original function: $$_0
 * @param props - Folder preview props
 */
export interface FolderPreviewProps {
  folder: {
    id: string
    // Add other folder properties as needed
  }
  containerClassName?: string
  dataOnboardingKey?: string
  fontSize?: number
  showViewOnlyLabel?: boolean
}

/**
 * Returns a sorted and sliced array of folder files for preview.
 * Original logic from $$_0
 * @param files - Array of files
 */
function getSortedPreviewFiles(files: any[]): any[] {
  return (files ?? [])
    .sort((a, b) => a.touched_at < b.touched_at ? 1 : -1)
    .slice(0, 4)
}

/**
 * FolderPreview component renders folder thumbnails and name.
 * Original function: $$_0
 */
export function FolderPreview(props: FolderPreviewProps) {
  const selectedView = getSelectedView()
  const previewHandler = setupFolderPreviewHandler({
    folderId: props.folder.id,
    shouldShowOnlyTrashedFiles: selectedView.view === 'trashedFolders',
  })

  const previewFiles = useMemo(
    () => getSortedPreviewFiles(previewHandler.data),
    [previewHandler.data],
  )

  return jsxs('div', {
    'className': classNames(
      cssBuilderInstance.flex.flexRow.gap12.itemsCenter.wFull.$,
      props.containerClassName,
    ),
    'data-onboarding-key': props.dataOnboardingKey,
    'children': [
      jsx('div', {
        className: 'folder_name_and_preview--folderFiles--8g7Iy',
        children: previewFiles.map(file =>
          jsx(NU, {
            file,
            borderRadius: 2,
            size: SizeOption.SMALL,
          }, `Thumbnail${file.key}`),
        ),
      }),
      jsxs('div', {
        className: 'folder_name_and_preview--fileNameContainer--8lvc-',
        children: [
          jsx(TextWithTruncation, {
            fontSize: props.fontSize ?? 13,
            fontWeight: 'medium',
            truncate: true,
            children: getSidebarPath(props.folder),
          }),
          props.showViewOnlyLabel
          && jsx(Badge, {
            color: BadgeColor.WARNING_TERTIARY,
            text: getI18nString('locked_team.label.view_only'),
            dataTooltip: getI18nString('locked_team.label.tooltip'),
            dataTooltipType: KindEnum.TEXT,
            className: 'folder_name_and_preview--viewOnlyLabel--G3IV1',
          }),
        ],
      }),
    ],
  })
}

// Refactored export name
export const L = FolderPreview
