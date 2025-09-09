import { atom, useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { S as _$$S } from '../905/73063';
import { Label } from '../905/270045';
import { getI18nString, renderI18nText } from '../905/303541';
import { b as _$$b, c as _$$c } from '../905/308099';
import { o as _$$o } from '../905/382697';
import { FJ } from '../905/508367';
import { $n } from '../905/521428';
import { jN } from '../905/612685';
import { s as _$$s } from '../905/932270';
import { sR } from '../905/932881';
import { sx } from '../905/941192';
import { b as _$$b2 } from '../905/985254';
import { HB } from '../3973/538504';
import { s as _$$s2 } from '../cssbuilder/589278';
import { buildUploadUrl } from '../figma_app/169182';
import { selectCurrentFile } from '../figma_app/516028';
import { ShareAction } from '../figma_app/707808';
import { $z, fu, tf } from '../figma_app/831799';
import { fb, J4 } from '../figma_app/907616';
export function $$x3(e) {
  return HB(e) === 'education';
}
var N = (e => (e.EDIT = 'edit', e.DUPLICATE = 'duplicate', e))(N || {});
let C = buildUploadUrl('cee072aec57608cbb49c64eb6cb3765896cea921');
let $$w4 = 'share-to-google-classroom-row';
let $$O0 = atom(null);
let R = tf(sR);
function L(e) {
  let t = useDispatch();
  let r = useSetAtom($$O0);
  let s = useRef(null);
  useEffect(() => (r(s), () => {
    r(null);
  }), [s, r]);
  let o = jsx('div', {
    ref: s,
    className: _$$S,
    children: jsx('img', {
      src: C,
      alt: 'share to google classroom',
      className: _$$S
    })
  });
  return jsx(fu, {
    name: 'share_to_google_classroom_row',
    children: jsx(R, {
      icon: o,
      text: getI18nString('file_permissions_modal.share_as.google_classroom'),
      onClick: () => {
        t(_$$b2({
          has_shared_to_google_classroom: !0
        }));
        e.onClick();
      },
      testId: $$w4,
      dataOnboardingKey: $$w4,
      expandCaret: !0,
      trackingProperties: {
        text: 'Share to Google Classroom'
      }
    })
  });
}
export function $$P1({
  org: e,
  currentUser: t
}) {
  let r = _$$o();
  let i = e?.k12_google_org;
  let a = $$x3(t?.profile?.jobTitle || '');
  return i || a ? jsx(L, {
    onClick: () => r(ShareAction.SHARE_TO_GOOGLE_CLASSROOM)
  }) : null;
}
let D = tf($n);
let k = sx.add({
  color: 'var(--color-text-figjam)',
  cursor: 'pointer',
  userSelect: 'auto'
}).$;
let M = sx.add({
  transform: 'translateY(-4px)'
}).$;
export function $$F2(e) {
  let t = fb[e.linkAccess].audienceAccessLevel !== J4.EDIT;
  let r = selectCurrentFile();
  let [a, s] = useState('edit');
  let c = _$$o();
  return jsx(fu, {
    name: 'google_classroom_share_modal',
    children: jsxs('div', {
      className: _$$s2.flex.flexColumn.p16.$,
      children: [jsx('form', {
        children: jsx(_$$b, {
          legend: jsx(_$$s, {
            children: t ? jsx('div', {
              'className': _$$s2.textBodyMedium.pb8.$,
              'data-testid': 'share-to-google-classroom-disclaimer',
              'children': renderI18nText('file_permissions_modal.google_classroom_modal.disclaimer', {
                link: jsx($z, {
                  onClick: () => c(ShareAction.SHARE_SETTINGS),
                  type: 'button',
                  style: k,
                  children: renderI18nText('file_permissions_modal.google_classroom_modal.disclaimer_link')
                })
              })
            }) : jsx(Fragment, {})
          }),
          value: a,
          onChange: s,
          children: jsxs('div', {
            className: _$$s2.mt8.$,
            children: [jsx(_$$c, {
              value: 'edit',
              label: jsx(Label, {
                htmlAttributes: {
                  'data-testid': 'share-to-google-classroom-edit-option'
                },
                children: renderI18nText('file_permissions_modal.google_classroom_modal.editable_option')
              }),
              children: t ? jsx('div', {
                style: M,
                children: renderI18nText('file_permissions_modal.google_classroom_modal.editable_option_description')
              }) : null
            }), jsx(_$$c, {
              value: 'duplicate',
              label: jsx(Label, {
                htmlAttributes: {
                  'data-testid': 'share-to-google-classroom-duplicate-option'
                },
                children: renderI18nText('file_permissions_modal.google_classroom_modal.duplicate_option')
              }),
              children: t ? jsx('div', {
                style: M,
                children: renderI18nText('file_permissions_modal.google_classroom_modal.duplicate_option_description')
              }) : null
            })]
          })
        })
      }), jsx('div', {
        className: _$$s2.flex.flexRow.justifyEnd.$,
        children: jsx(D, {
          variant: 'primary',
          onClick: () => {
            let t = r ? jN({
              file: r
            }) : '';
            let n = a === 'duplicate' ? '/duplicate' : '';
            let i = t ? `?url=${t}${n}` : '';
            FJ(`https://classroom.google.com/share${i}`, '_blank', 'popup,width=650,height=505');
            e.closeModal();
          },
          trackingProperties: {
            googleClassroomShareOption: a
          },
          htmlAttributes: {
            'data-testid': 'share-to-google-classroom-share-button'
          },
          children: renderI18nText('general.next')
        })
      })]
    })
  });
}
export const Ij = $$O0;
export const KM = $$P1;
export const Ku = $$F2;
export const aA = $$x3;
export const pb = $$w4;