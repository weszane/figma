// Original file: /Users/allen/sigma-main/src/905/441305.ts
// Refactored to improve readability, add types, and organize logic.
// Original function: $$p0, now renamed to ConfirmationModal for clarity.
// Original export: R, updated to match new name.

import { jsx, jsxs } from 'react/jsx-runtime';
import { ModalFormContents, ModalRootComponent } from '../905/38914';
import { setupAutofocusHandler } from '../905/128376';
import { renderI18nText } from '../905/303541';
import { useModalManager } from '../905/437088';
import { Button } from '../905/521428';
import { DialogTitle, DialogActionStrip, DialogBody, DialogFooter, DialogHeader } from '../figma_app/272243';
import { LoadingSpinner } from '../figma_app/858013';
import { useSetupPlayback } from '../figma_app/878298';

// Define props interface for better type safety
interface ConfirmationModalProps {
  open: boolean;
  width?: 'sm' | 'md' | 'lg' | string; // Assuming common widths, adjust as needed
  title?: string;
  cancelText?: string;
  autofocusConfirm?: boolean;
  destructive?: boolean;
  recordingKey?: string;
  onConfirm: (event: any) => void;
  onClose: () => void;
  onCancel?: () => void;
  height?: string;
  children?: React.ReactNode;
  footerText?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  disableConfirm?: boolean;
  confirmText?: string;
}

/**
 * ConfirmationModal component for displaying a modal with confirm/cancel actions.
 * Original: $$p0
 * @param props - The props for the modal.
 * @returns JSX element.
 */
export function ConfirmationModal(props: ConfirmationModalProps) {
  const {
    open,
    width = 'md',
    title = renderI18nText('modal.are_you_sure'),
    cancelText = renderI18nText('modal.cancel'),
    autofocusConfirm,
    destructive,
    recordingKey,
    onConfirm,
    onClose,
    onCancel,
    height,
    children,
    footerText,
    isLoading,
    loadingText,
    disableConfirm,
    confirmText
  } = props;

  // Determine autofocus based on props
  const shouldAutofocusConfirm = autofocusConfirm ?? !destructive;

  // Setup playback handlers
  const handleConfirm = useSetupPlayback(recordingKey, 'confirm', (event: any) => {
    onConfirm(event);
    if (!event.defaultPrevented) {
      onClose();
    }
  });
  const handleCancel = useSetupPlayback(recordingKey, 'cancel', () => {
    onCancel?.();
    onClose();
  });

  // Modal manager
  const modalManager = useModalManager({
    open,
    onClose: handleCancel
  });

  // Autofocus handler
  const autofocusRef = setupAutofocusHandler();
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width,
    height,
    children: jsxs(ModalFormContents, {
      onSubmit: handleConfirm,
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: title
        })
      }), jsx(DialogBody, {
        children
      }), jsxs(DialogFooter, {
        children: [footerText, jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: handleCancel,
            ref: shouldAutofocusConfirm ? undefined : autofocusRef,
            children: cancelText
          }), isLoading ? jsxs(Button, {
            disabled: true,
            children: [jsx(LoadingSpinner, {
              className: loadingText ? 'confirmation_modal--spinnerWithText--8t9yx confirmation_modal--spinner--E3om4' : 'confirmation_modal--spinner--E3om4'
            }), loadingText]
          }) : jsx(Button, {
            type: 'submit',
            disabled: disableConfirm,
            variant: destructive ? 'destructive' : 'primary',
            ref: shouldAutofocusConfirm ? autofocusRef : undefined,
            children: confirmText
          })]
        })]
      })]
    })
  });
}

// Update export to match refactored name
export const R = ConfirmationModal;