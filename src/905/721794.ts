import { Component } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { registerLegacyModal } from '../905/102752'
import { hideModal } from '../905/156213'
import { renderI18nText } from '../905/303541'
import { ButtonBasePrimary } from '../figma_app/637027'
import { _Z, pL, v0, yl } from '../figma_app/639088'
import { ModalContainer } from '../figma_app/918700'

export let tileCopyLinkModalId = 'tile-copy-link-modal'
// Register the legacy modal using a typed, named component.
// Original component name: class p
registerLegacyModal(tileCopyLinkModalId, props => jsx(TileCopyLinkModal, { ...props }))

// Types for modal data and component props
interface TileCopyLinkData {
  link: string
}

interface TileCopyLinkModalShown {
  data: TileCopyLinkData
}

interface TileCopyLinkModalProps {
  // Action dispatcher from the app store
  dispatch: (action: unknown) => void
  // Modal state with link data
  modalShown: TileCopyLinkModalShown
  // Allow passing through any additional props to ModalContainer
  [key: string]: any
}

/**
 * TileCopyLinkModal renders a small modal with a read-only input containing a shareable link.
 * Original displayName: 'TileCopyLinkModal'
 */
class TileCopyLinkModal extends Component<TileCopyLinkModalProps> {
  static displayName = 'TileCopyLinkModal'
  // Original field: inputRef
  private inputRef = (el: HTMLInputElement | null): void => {
    if (el) {
      el.focus()
      el.select()
    }
  }

  // Original method: hideModal
  private hideModal = (): void => {
    this.props.dispatch(hideModal())
  }

  render() {
    const { modalShown } = this.props
    return jsxs(ModalContainer, {
      size: 'small',
      className: yl,
      ...this.props,
      children: [
        jsx('div', {
          children: renderI18nText('tile.copy_link.action_description'),
        }),
        jsx('input', {
          'className': _Z,
          'value': modalShown.data.link,
          'readOnly': true,
          'ref': this.inputRef,
          'data-testid': 'tile.copy_link.input',
        }),
        jsx('div', {
          className: v0,
          children: jsx(ButtonBasePrimary, {
            className: pL,
            onClick: this.hideModal,
            children: renderI18nText('tile.copy_link.done'),
          }),
        }),
      ],
    })
  }
}

// Backward-compatible export, original: export const o = $$u0;
export const o = tileCopyLinkModalId

// New clearer export name for the modal id to aid refactoring.
// Consumers can migrate to this while keeping the old export working.

