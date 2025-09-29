import { props } from '@stylexjs/stylex';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { registerModal } from '../905/102752';
import { hideSpecificModal } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { accountTypeRequestHandler } from '../905/281010';
import { useTheme } from '../905/289770';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { UpgradeAction } from '../905/370443';
import { ProductAccessTypeEnum } from '../905/513035';
import { setupThemeContext } from '../905/614223';
import { WAFImage } from '../905/675859';
import { textDisplayConfig } from '../905/687265';
import { useSingleEffect } from '../905/791079';
import { U } from '../figma_app/65327';
import { buildUploadUrl, isDevEnvironment } from '../figma_app/169182';
import { FFileType } from '../figma_app/191312';
import { throwTypeError } from '../figma_app/465776';
import { selectCurrentFile } from '../figma_app/516028';
import { tI } from '../figma_app/599327';
import { TrackingProvider } from '../figma_app/831799';
import { xx } from '../figma_app/995208';
let k = 'cb2673de5dce908e59e849955b564818efb747a6';
let R = {
  noteInput: {
    'height': 'x1peatla',
    'padding': 'xf7z5ut',
    'borderRadius': 'x19y5rnk',
    'background': 'x1sjmt1f',
    'resize': 'xtt52l0',
    ':placeholder_color': 'x1804815',
    '$$css': !0
  }
};
function N(e) {
  let {
    note,
    onChange
  } = e;
  return jsxs('div', {
    className: 'x4ygwfs x78zum5 xdt5ytf x1nfngrj',
    children: [jsx('span', {
      ...props(textDisplayConfig.textBodyMedium),
      children: renderI18nText('seat_selection_in_nux.note_prompt')
    }), jsx('textarea', {
      ...props(R.noteInput, textDisplayConfig.textBodyMedium),
      placeholder: getI18nString('seat_selection_in_nux.note_placeholder', {
        seat_type: tI(e.seatType)
      }),
      value: note,
      onChange: e => onChange(e.target.value),
      rows: 3
    })]
  });
}
let P = {
  [ProductAccessTypeEnum.COLLABORATOR]: 'whiteboard',
  [ProductAccessTypeEnum.DEVELOPER]: 'dev-handoff',
  [ProductAccessTypeEnum.EXPERT]: 'design',
  [ProductAccessTypeEnum.CONTENT]: 'cooper'
};
let O = (e, t) => {
  if (e) {
    switch (t) {
      case ProductAccessTypeEnum.COLLABORATOR:
        return renderI18nText('seat_selection_in_nux.collab_seat_auto_approved');
      case ProductAccessTypeEnum.DEVELOPER:
        return renderI18nText('seat_selection_in_nux.dev_seat_auto_approved');
      case ProductAccessTypeEnum.EXPERT:
        return renderI18nText('seat_selection_in_nux.full_seat_auto_approved');
      case ProductAccessTypeEnum.CONTENT:
        return renderI18nText('seat_selection_in_nux.content_seat_auto_approved');
      default:
        throwTypeError(t);
    }
  } else {
    switch (t) {
      case ProductAccessTypeEnum.COLLABORATOR:
        return renderI18nText('seat_selection_in_nux.collab_seat_manual_request');
      case ProductAccessTypeEnum.DEVELOPER:
        return renderI18nText('seat_selection_in_nux.dev_seat_manual_request');
      case ProductAccessTypeEnum.EXPERT:
        return renderI18nText('seat_selection_in_nux.full_seat_manual_request');
      case ProductAccessTypeEnum.CONTENT:
        return renderI18nText('seat_selection_in_nux.content_seat_manual_request');
      default:
        throwTypeError(t);
    }
  }
};
let D = (e, t) => {
  if (e) {
    switch (t) {
      case ProductAccessTypeEnum.COLLABORATOR:
        return buildUploadUrl(k);
      case ProductAccessTypeEnum.DEVELOPER:
        return buildUploadUrl('bb9c1da4623599a5b504821d08933e4a62f77738');
      case ProductAccessTypeEnum.EXPERT:
      case ProductAccessTypeEnum.CONTENT:
        return buildUploadUrl('e64c10dbcf541d5c046e504238332a5a4e6c3936');
      default:
        throwTypeError(t);
    }
  } else {
    switch (t) {
      case ProductAccessTypeEnum.COLLABORATOR:
        return buildUploadUrl(k);
      case ProductAccessTypeEnum.DEVELOPER:
        return buildUploadUrl('c01e13ea74266be4e3bd04138f24580a366f34db');
      case ProductAccessTypeEnum.EXPERT:
      case ProductAccessTypeEnum.CONTENT:
        return buildUploadUrl('8ccf73b4d60956f75e7d328f2f84303814551671');
      default:
        throwTypeError(t);
    }
  }
};
export let NuxSeatRequestConfirmationModal = registerModal(e => {
  let [t, i] = useState('');
  let {
    color
  } = useTheme();
  let c = useDispatch();
  let u = U('nux_seat_request_confirmation_modal');
  let A = selectCurrentFile();
  useSingleEffect(() => {
    e.autoApproved || e.requestId || function (e) {
      if (isDevEnvironment()) throw e;
      reportError(ServiceCategories.ACTIVATION, e);
      c(hideSpecificModal(NuxSeatRequestConfirmationModal));
      c(VisualBellActions.enqueue({
        message: 'Something went wrong.',
        error: !0
      }));
    }(new Error('No request ID for post-NUX seat request confirmation modal'));
  });
  let w = async i => {
    let n = !1;
    if (!e.autoApproved && i && t.length > 0) {
      if (e.requestId) {
        try {
          let i = e.requestId;
          i ? await accountTypeRequestHandler.updateRequestMessage({
            request_id: i,
            message: t
          }) : n = !0;
        } catch (e) {
          n = !0;
        }
      } else {
        n = !0;
      }
    }
    c(hideSpecificModal(NuxSeatRequestConfirmationModal));
    e.seatType === ProductAccessTypeEnum.DEVELOPER && A?.editorType === FFileType.DESIGN && u('handoff');
    n && c(VisualBellActions.enqueue({
      message: 'Error updating request message.',
      error: !0
    }));
  };
  return jsx(setupThemeContext, {
    brand: P[e.seatType],
    children: jsx(TrackingProvider, {
      name: 'Post NUX Seat Request Confirmation Modal Outer',
      children: jsx(xx, {
        title: renderI18nText('seat_selection_in_nux.welcome_to_figma'),
        media: jsx('div', {
          className: 'x78zum5 x2lah0s x13a6bvl x6s0dn4 x1jgvi1y xg80ozm x1bifzbx',
          children: jsx(WAFImage, {
            alt: '',
            className: 'xh8yej3 xgmxx4u x14vqqas',
            src: D(color === 'dark', e.seatType)
          })
        }),
        primaryCta: {
          type: 'button',
          label: renderI18nText('seat_selection_in_nux.continue'),
          onClick: w,
          ctaTrackingDescriptor: UpgradeAction.CONTINUE
        },
        onClose: () => c(hideSpecificModal(NuxSeatRequestConfirmationModal)),
        trackingContextName: 'Post NUX Seat Request Confirmation Modal',
        description: jsxs(Fragment, {
          children: [O(e.autoApproved, e.seatType), !e.autoApproved && jsx(N, {
            note: t,
            onChange: i,
            seatType: e.seatType
          })]
        })
      })
    })
  });
}, 'NuxSeatRequestConfirmationModal');
export const u = NuxSeatRequestConfirmationModal;
