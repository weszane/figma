import { useDispatch } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { registerModal } from '../905/102752';
import { hideModal } from '../905/156213';
import { renderI18nText } from '../905/303541';
import { useModalManager } from '../905/437088';
import { CustomSpacer } from '../905/585996';
import { Dg, DX, FS, Kc, Sl } from '../905/989426';
import { buildUploadUrl } from '../figma_app/169182';
import { DialogBody, DialogContents } from '../figma_app/272243';
import { WithTrackedButtonLargeWide } from '../figma_app/617427';
import { TrackingProvider } from '../figma_app/831799';
export let googleDeviceClaimSuccessModal = registerModal(e => {
  let t = useDispatch<AppDispatch>();
  let i = useModalManager({
    ...e,
    preventUserClose: !0
  });
  return jsx(TrackingProvider, {
    name: 'google_device_try_file_claim_success_modal',
    children: jsx(ModalRootComponent, {
      width: 420,
      manager: i,
      children: jsx(DialogContents, {
        children: jsxs(DialogBody, {
          padding: 32,
          children: [jsx('div', {
            className: Dg,
            children: jsx('img', {
              className: Sl,
              src: buildUploadUrl('e94b4d90f07d46f80c5d4d47a16ee2cd8df688bf'),
              alt: ''
            })
          }), jsx(CustomSpacer, {
            multiple: 2
          }), jsx('div', {
            className: FS,
            children: jsxs('h1', {
              className: DX,
              children: [renderI18nText('google_device_try_file_modal.claim_success.header'), ' ']
            })
          }), jsx(CustomSpacer, {
            multiple: 1
          }), jsx('div', {
            className: FS,
            children: jsx('div', {
              className: Kc,
              children: renderI18nText('google_device_try_file_modal.claim_success.description')
            })
          }), jsx(CustomSpacer, {
            multiple: 3
          }), jsx(WithTrackedButtonLargeWide, {
            onClick: e => {
              e.preventDefault();
              e.stopPropagation();
              t(hideModal());
            },
            children: renderI18nText('google_device_try_file_modal.claim_success.button')
          })]
        })
      })
    })
  });
}, 'GOOGLE_DEVICE_TRY_FILE_CLAIM_SUCCESS_MODAL');
export const $ = googleDeviceClaimSuccessModal;
