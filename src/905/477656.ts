import { noop } from 'lodash-es'
import { jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { registerLegacyModal } from '../905/102752'
import { hideModal } from '../905/156213'
import { getI18nString, renderI18nText } from '../905/303541'
import { useModalManager } from '../905/437088'

import { Button } from '../905/521428'
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243'

export const DELETED_SOURCE_COMPONENT_MODAL_ID = 'no-shared-instance-in-master-file-if-deleted'

interface ModalProps {
  dispatch: (action: any) => void
}

/**
 * Modal component for displaying message when source component has been deleted
 * (Original function name: m)
 */
function DeletedSourceComponentModal({ dispatch }: ModalProps) {
  const modalManager = useModalManager({
    onClose: noop,
    open: true,
    preventUserClose: true,
  })

  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [
        jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString('design_systems.instance_panel.oops'),
          }),
        }),
        jsx(DialogBody, {
          children: renderI18nText('design_systems.instance_panel.deleted_source_component_message'),
        }),
        jsx(DialogFooter, {
          children: jsx(DialogActionStrip, {
            children: jsx(Button, {
              onClick: () => {
                dispatch(hideModal())
              },
              variant: 'primary',
              children: renderI18nText('design_systems.instance_panel.ok'),
            }),
          }),
        }),
      ],
    }),
  })
}

registerLegacyModal(DELETED_SOURCE_COMPONENT_MODAL_ID, props =>
  jsx(DeletedSourceComponentModal, {
    ...props,
  }))

export const Q = DELETED_SOURCE_COMPONENT_MODAL_ID
