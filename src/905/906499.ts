import { jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { registerModal } from '../905/102752'
import { renderI18nText } from '../905/303541'
import { useModalManager } from '../905/437088'
import { Button } from '../905/521428'
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243'

export let autosaveErrorModal = registerModal((e) => {
  let {
    message,
    onClose,
  } = e
  let d = useModalManager(e)
  return jsx(ModalRootComponent, {
    width: 'sm',
    manager: d,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('autosave.unable_to_leave_document.title'),
        }),
      }), jsx(DialogBody, {
        children: message,
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Button, {
            onClick: onClose,
            children: renderI18nText('autosave.unable_to_leave_document.ok_button'),
          }),
        }),
      })],
    }),
  })
})
export const v = autosaveErrorModal
