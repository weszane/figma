import { useCallback, useMemo, useState } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { ModalRootComponent } from "../905/38914"
import { Label } from "../905/270045"
import { getI18nString, renderI18nText } from "../905/303541"
import { RadioInputOption, RadioInputRoot } from "../905/308099"
import { UpgradeAction } from "../905/370443"
import { useModalManager } from "../905/437088"
import { filterNumberValues } from "../905/807535"
import { Legend } from "../905/932270"
import { cssBuilderInstance } from "../cssbuilder/589278"
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from "../figma_app/272243"
import { throwTypeError } from "../figma_app/465776"
import { $z } from "../figma_app/617427"
import { WhiteboardIntegrationType } from "../figma_app/763686"

interface PdfSourceOption {
  key: WhiteboardIntegrationType
  value: string
  label: string
}

interface PdfConfirmationModalProps {
  fileImportDescription: React.ReactNode
  onConfirm: (source: WhiteboardIntegrationType) => void
  onCancel: () => void
}

/**
 * PdfConfirmationModal - A modal dialog for selecting a PDF source for import
 * Original function name: $$x0
 */
export function PdfConfirmationModal({
  fileImportDescription,
  onConfirm,
  onCancel,
}: PdfConfirmationModalProps) {
  const [selectedSource, setSelectedSource] = useState<WhiteboardIntegrationType | undefined>(undefined)

  /**
   * Generates and sorts the available whiteboard integration options
   * Original variable: v
   */
  const sourceOptions = useMemo<PdfSourceOption[]>(() => {
    const options = filterNumberValues(WhiteboardIntegrationType).map(type => ({
      key: type,
      value: WhiteboardIntegrationType[type],
      label: getWhiteboardLabel(type),
    }))

    // Sort options alphabetically, but keep UNKNOWN at the end
    options.sort((a, b) => {
      if (a.key === b.key)
        return 0
      if (a.key === WhiteboardIntegrationType.UNKNOWN)
        return 1
      if (b.key === WhiteboardIntegrationType.UNKNOWN)
        return -1
      return a.label.localeCompare(b.label)
    })

    return options
  }, [])

  /**
   * Gets the display label for a whiteboard integration type
   * Original function: anonymous function inside map
   */
  function getWhiteboardLabel(type: WhiteboardIntegrationType): string {
    switch (type) {
      case WhiteboardIntegrationType.MIRO:
        return "Miro"
      case WhiteboardIntegrationType.MURAL:
        return "Mural"
      case WhiteboardIntegrationType.LUCID:
        return "Lucid"
      case WhiteboardIntegrationType.JAMBOARD:
        return "Jamboard"
      case WhiteboardIntegrationType.UNKNOWN:
        return getI18nString("file_browser.file_import_view.select_pdf_source_input_unknown_value")
      default:
        throwTypeError(type)
    }
  }

  /**
   * Handles selection change in the radio input
   * Original function: y
   */
  const handleSourceChange = useCallback((value: string) => {
    setSelectedSource(value as any)
  }, [])

  /**
   * Handles confirmation action
   * Original function: w
   */
  const handleConfirm = useCallback(() => {
    if (selectedSource) {
      onConfirm(selectedSource)
    }
  }, [onConfirm, selectedSource])

  /**
   * Modal manager configuration
   * Original variable: j
   */
  const modalManager = useModalManager({
    open: true,
    onClose: onCancel,
    preventUserClose: true,
  })

  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: "fit-content",
    children: jsxs(DialogContents, {
      children: [
        jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("file_browser.file_import_view.select_pdf_source_header"),
          }),
        }),
        jsx(DialogBody, {
          children: jsxs("div", {
            className: cssBuilderInstance.flex.flexColumn.pt4.gap16.textBodyMedium.$,
            children: [
              jsx("div", {
                children: fileImportDescription,
              }),
              jsx("form", {
                className: cssBuilderInstance.mb8.$,
                children: jsx(RadioInputRoot, {
                  legend: jsx(Legend, {
                    children: renderI18nText("file_browser.file_import_view.select_pdf_source_input_legend"),
                  }),
                  value: selectedSource,
                  onChange: handleSourceChange,
                  children: sourceOptions.map(option =>
                    jsx(RadioInputOption, {
                      value: option.value,
                      label: jsx(Label, {
                        className: cssBuilderInstance.textBodyMedium.$,
                        children: option.label,
                      }),
                      children: option.key === WhiteboardIntegrationType.UNKNOWN
                        && renderI18nText("file_browser.file_import_view.select_pdf_source_input_unknown_disclaimer"),
                    }, option.key),
                  ),
                }),
              }),
            ],
          }),
        }),
        jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [
              jsx($z, {
                variant: "secondary",
                onClick: onCancel,
                trackingProperties: {
                  trackingDescriptor: UpgradeAction.FILE_IMPORT_X_BUTTON,
                  text: "dismiss",
                },
                children: renderI18nText("modal.cancel"),
              }),
              jsx($z, {
                variant: "primary",
                disabled: !selectedSource,
                onClick: handleConfirm,
                children: renderI18nText("modal.confirm"),
              }),
            ],
          }),
        }),
      ],
    }),
  })
}
