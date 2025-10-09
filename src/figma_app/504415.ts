import type { ThunkActionDispatch } from 'redux-thunk'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { registerModal } from '../905/102752'
import { popModalStack } from '../905/156213'
import { InputComponent } from '../905/185998'
import { Label } from '../905/270045'
import { getI18nString, renderI18nText } from '../905/303541'
import { u as _$$u, R } from '../905/375517'
import { useModalManager } from '../905/437088'
import { trackEventAnalytics } from '../905/449184'
import { Button } from '../905/521428'
import { ButtonPrimitive } from '../905/632989'
import { logError } from '../905/714362'
import { fileUpdateSavepointAction, savepointOptimistThunk } from '../905/852057'
import { B } from '../905/867899'
import { Textarea } from '../905/909590'
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243'
import { selectCurrentFile } from '../figma_app/516028'
import { hasCmsCollection } from '../figma_app/618433'
import { ViewType } from '../figma_app/763686'
import { enterVersionHistoryMode } from '../figma_app/841351'
import { generateRecordingKey, handleFocusEvent, RecordingComponent } from '../figma_app/878298'

/**
 * SavepointModalProps - Props for SavepointModal component (originally class e)
 */
interface SavepointModalProps {
  description?: string
  dispatch: ThunkActionDispatch<any>
  editingSavepointID?: string
  fileKey?: string
  hasCMSData?: boolean
  hideShowFullVersionHistoryCTA?: boolean
  isEditingMergeSavepoint?: boolean
  isHistoryMode?: boolean
  isLabelReadOnly?: boolean
  isViewOnly?: boolean
  label?: string
  recordingKey?: string
}

/**
 * SavepointModalState - State for SavepointModal component (originally class e)
 */
interface SavepointModalState {
  label: string
  description: string
  disableConfirm: boolean
}

/**
 * SavepointModal - Modal for creating/editing savepoints (originally class e)
 */
class SavepointModal extends RecordingComponent<SavepointModalProps, SavepointModalState> {
  static displayName = 'SavepointModal'
  static keepSavepointModalInput = false
  static savedLabelInput = ''
  static savedDescriptionInput = ''

  constructor(props: SavepointModalProps) {
    super(props)
    this.state = {
      label: '',
      description: '',
      disableConfirm: !props.isLabelReadOnly,
    }
  }

  /**
   * Handles confirming the savepoint modal (originally onConfirmSavepointModal)
   */
  onConfirmSavepointModal = (label?: string, description?: string) => {
    const r = label || ''
    const n = description || ''
    if (this.props.editingSavepointID && this.props.fileKey) {
      this.props.dispatch(fileUpdateSavepointAction({
        fileKey: this.props.fileKey,
        savepointID: this.props.editingSavepointID,
        label: r,
        description: n,
      }))
      this.hideModal()
      trackEventAnalytics('History Version Edited Information', {
        savepointId: this.props.editingSavepointID,
        labelLength: r.length,
        descriptionLength: n.length,
      })
    }
    else if (r.length > 0 && this.props.fileKey) {
      this.props.dispatch(savepointOptimistThunk({
        fileKey: this.props.fileKey,
        label: r,
        description: n,
      }))
      this.hideModal()
      trackEventAnalytics(`History Version Created from ${this.props.isHistoryMode ? 'History Mode' : 'Keyboard Shortcut'}`, {
        savepointId: this.props.editingSavepointID,
        labelLength: r.length,
        descriptionLength: n.length,
      })
    }
    this.clearSavedInputs()
  }

  /**
   * Hides the modal (originally hideModal)
   */
  hideModal = () => {
    this.props.dispatch(popModalStack())
  }

  /**
   * Handles submit event (originally onSubmit)
   */
  onSubmit = handleFocusEvent(this, 'submit', () => {
    this.onConfirmSavepointModal(this.state.label, this.state.description)
  })

  /**
   * Handles cancel event (originally onCancel)
   */
  onCancel = () => {
    this.clearSavedInputs()
    this.hideModal()
  }

  /**
   * Saves current inputs for history (originally saveHistoryInputs)
   */
  saveHistoryInputs = () => {
    SavepointModal.keepSavepointModalInput = true
    SavepointModal.savedLabelInput = this.state.label
    SavepointModal.savedDescriptionInput = this.state.description
  }

  /**
   * Clears saved inputs (originally clearSavedInputs)
   */
  clearSavedInputs = () => {
    SavepointModal.keepSavepointModalInput = false
    SavepointModal.savedLabelInput = ''
    SavepointModal.savedDescriptionInput = ''
  }

  /**
   * Handles label change (originally onLabelChange)
   */
  onLabelChange = (label: string) => {
    this.setState({ label })
  }

  /**
   * Handles label blur (originally onLabelBlur)
   */
  onLabelBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.onLabelChange(e.target.value)
  }

  /**
   * Handles description change (originally onDescriptionChange)
   */
  onDescriptionChange = (description: string) => {
    this.setState({ description })
  }

  /**
   * Handles description blur (originally onDescriptionBlur)
   */
  onDescriptionBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    this.onDescriptionChange(e.target.value)
  }

  /**
   * Switches to history mode (originally goHistoryMode)
   */
  goHistoryMode = () => {
    if (!this.props.isHistoryMode) {
      this.props.dispatch(enterVersionHistoryMode())
      this.saveHistoryInputs()
      this.hideModal()
    }
  }

  /**
   * Hydrates label and description from props or saved inputs (originally hydrateLabelAndDescription)
   */
  hydrateLabelAndDescription() {
    if (this.state.label.length < 1 && this.state.description.length < 1) {
      if (SavepointModal.keepSavepointModalInput) {
        this.setState({
          label: SavepointModal.savedLabelInput,
          description: SavepointModal.savedDescriptionInput,
        })
      }
      else {
        this.setState({
          label: this.props.label || '',
          description: this.props.description || '',
        })
      }
    }
  }

  componentDidMount() {
    this.hydrateLabelAndDescription()
    super.componentDidMount()
  }

  UNSAFE_componentWillReceiveProps() {
    this.hydrateLabelAndDescription()
  }

  /**
   * Renders the SavepointModal (originally render)
   */
  render() {
    if (this.props.isViewOnly)
      return null
    let disableConfirm = this.state.disableConfirm
    if (this.state.label && this.state.label.length > 0)
      disableConfirm = false
    const saveText = renderI18nText('collaboration.feedback.save_modal.save')
    const cancelText = renderI18nText('collaboration.feedback.save_modal.cancel')
    return jsxs(Fragment, {
      children: [
        jsxs(DialogBody, {
          children: [
            jsxs('div', {
              className: _$$u,
              children: [
                this.props.isEditingMergeSavepoint && jsx(Label, {
                  htmlFor: 'savepoint-modal-title',
                  children: renderI18nText('collaboration.feedback.save_modal.merge_name_placeholder'),
                }),
                jsx(InputComponent, {
                  'id': 'savepoint-modal-title',
                  'disabled': this.props.isLabelReadOnly,
                  'onChange': this.onLabelChange,
                  'htmlAttributes': { onBlur: this.onLabelBlur },
                  'placeholder': getI18nString('fullscreen.savepoint_modal.title'),
                  'aria-label': getI18nString('fullscreen.savepoint_modal.title_label'),
                  'recordingKey': generateRecordingKey(this.props, 'title'),
                  'value': this.state.label,
                }),
              ],
            }),
            jsxs('div', {
              className: _$$u,
              children: [
                this.props.isEditingMergeSavepoint && jsx(Label, {
                  htmlFor: 'savepoint-modal-description',
                  children: renderI18nText('fullscreen.savepoint_modal.give_this_merge_a_description'),
                }),
                jsx(Textarea, {
                  'id': 'savepoint-modal-description',
                  'aria-label': getI18nString('fullscreen.savepoint_modal.description_label'),
                  'value': this.state.description,
                  'placeholder': getI18nString('collaboration.feedback.save_modal.description_placeholder'),
                  'onChange': this.onDescriptionChange,
                  'htmlAttributes': { onBlur: this.onDescriptionBlur },
                  'recordingKey': generateRecordingKey(this.props, 'description'),
                }),
              ],
            }),
            this.props.hasCMSData && jsx('div', {
              className: _$$u,
              children: jsx(B, {}),
            }),
            jsx('div', {
              className: _$$u,
              children: !this.props.isHistoryMode && !this.props.hideShowFullVersionHistoryCTA && jsx(ButtonPrimitive, {
                className: R,
                onClick: this.goHistoryMode,
                children: renderI18nText('fullscreen.savepoint_modal.show_full_version_history'),
              }),
            }),
          ],
        }),
        jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [
              jsx(Button, {
                variant: 'secondary',
                onClick: this.onCancel,
                children: cancelText,
              }),
              jsx(Button, {
                'type': 'submit',
                'disabled': disableConfirm,
                'data-testid': 'savepoint-modal-submit',
                'onClick': this.onSubmit,
                'children': saveText,
              }),
            ],
          }),
        }),
      ],
    })
  }
}

/**
 * getSavepointModalTitle - Returns the modal title based on context (originally N)
 */
function getSavepointModalTitle(savepointID?: string, isEditingMergeSavepoint?: boolean) {
  if (savepointID) {
    return isEditingMergeSavepoint
      ? renderI18nText('collaboration.feedback.save_modal.edit_merge_details')
      : renderI18nText('collaboration.feedback.save_modal.edit_version_information')
  }
  return renderI18nText('collaboration.feedback.save_modal.add_to_version_history')
}

/**
 * SavepointModalContainer - Modal registration for SavepointModal (originally $$C1)
 */
export const SavepointModalContainer = registerModal((props) => {
  const manager = useModalManager(props)
  const file = selectCurrentFile()
  const dispatch = useDispatch<AppDispatch>()
  const isHistoryMode = useSelector<ObjectOf>(e => e.mirror.appModel.topLevelMode === ViewType.HISTORY)
  const description = props.description || ''
  const label = props.label || ''
  const savepointID = props.savepointID
  const isEditingMergeSavepoint = props.isEditingMergeSavepoint || false
  const hideShowFullVersionHistoryCTA = props.hideShowFullVersionHistoryCTA || false
  const fileKey = file?.key
  const hasCMSData = hasCmsCollection(fileKey)
  const modalTitle = getSavepointModalTitle(savepointID, isEditingMergeSavepoint)

  return file && fileKey != null
    ? jsx(ModalRootComponent, {
        manager,
        width: 'lg',
        children: jsxs(DialogContents, {
          children: [
            jsx(DialogHeader, {
              children: jsx(DialogTitle, { children: modalTitle }),
            }),
            jsx(SavepointModal, {
              description,
              dispatch,
              editingSavepointID: savepointID,
              fileKey,
              hasCMSData,
              hideShowFullVersionHistoryCTA,
              isEditingMergeSavepoint,
              isHistoryMode,
              isViewOnly: !file.canEdit,
              label,
              recordingKey: 'savepointModal',
            }),
          ],
        }),
      })
    : (logError('Save Point Modal', 'File key is missing.', {}, { reportAsSentryError: true }), null)
})

/**
 * DevModeSavepointModalContainer - Modal registration for dev mode (originally $$w0)
 */
export const DevModeSavepointModalContainer = registerModal((props) => {
  const file = selectCurrentFile()
  const dispatch = useDispatch<AppDispatch>()
  const manager = useModalManager(props)
  const modalTitle = getSavepointModalTitle(props.savepointID, false)

  return file
    ? jsx(ModalRootComponent, {
        manager,
        width: 'lg',
        children: jsxs(DialogContents, {
          children: [
            jsx(DialogHeader, {
              children: jsx(DialogTitle, { children: modalTitle }),
            }),
            jsx(SavepointModal, {
              description: props.description ?? '',
              dispatch,
              editingSavepointID: props.savepointID,
              fileKey: file.key,
              hasCMSData: false,
              isHistoryMode: true,
              isLabelReadOnly: true,
              isViewOnly: !file.canEdit,
              label: props.label ?? '',
              recordingKey: 'savepointModal',
            }),
          ],
        }),
      })
    : null
}, 'DevModeSavepointModal')

// Export refactored modal containers with original export names
export const S = DevModeSavepointModalContainer
export const y = SavepointModalContainer
