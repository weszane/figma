import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { N as AppleEulaContent } from '../905/73189';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { renderI18nText } from '../905/303541';
import { selectCurrentUser } from '../905/372672';
import { useModalManager } from '../905/437088';
import { analyticsEventManager } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { useSingleEffect } from '../905/791079';
import { postUserFlag } from '../905/985254';
import { hE, jk, nB, vo, wi, Y9 } from '../figma_app/272243';
import { selectCurrentFile } from '../figma_app/516028';
import { $z } from '../figma_app/617427';

/**
 * AppleEulaModalProps - Props for AppleEulaModal component
 */
export interface AppleEulaModalProps {
  onAgree: () => void;
  onDecline: () => void;
  onClose: () => void;
  eulasToShow?: number;
  eulaShown?: number;
  [key: string]: any;
}

/**
 * AppleEulaModal - Modal for displaying Apple EULA agreement
 * Original function name: $$b1
 */
export function AppleEulaModal({
  onAgree,
  onDecline,
  onClose,
  eulasToShow,
  eulaShown,
  ...restProps
}: AppleEulaModalProps) {
  const dispatch = useDispatch();
  const currentUser = selectCurrentUser();
  const currentFile = selectCurrentFile();

  // Track display event (original: IIFE inside $$b1)
  useSingleEffect(() => {
    analyticsEventManager.trackDefinedEvent('preset_libraries.apple_eula_displayed', {
      userId: currentUser?.id ?? undefined,
      fileTeamId: currentFile?.teamId ?? undefined,
      fileParentOrgId: currentFile?.parentOrgId ?? undefined,
      fileKey: currentFile?.key,
      asyncModal: false
    });
  });

  /**
   * Track click events on EULA modal actions
   * Original variable name: A
   */
  const trackEulaClick = useCallback((actionType: string) => {
    analyticsEventManager.trackDefinedEvent('preset_libraries.apple_eula_clicked', {
      actionType,
      userId: currentUser?.id ?? undefined,
      fileTeamId: currentFile?.teamId ?? undefined,
      fileParentOrgId: currentFile?.parentOrgId ?? undefined,
      fileKey: currentFile?.key,
      asyncModal: false
    });
  }, [currentUser, currentFile]);

  /**
   * Handle modal close (original variable name: x)
   */
  const handleClose = useCallback(() => {
    trackEulaClick('x');
    onDecline?.();
    onClose();
  }, [onDecline, onClose, trackEulaClick]);

  // Modal manager (original variable name: N)
  const modalManager = useModalManager({
    ...restProps,
    onClose: handleClose,
    preventUserClose: false
  });
  const featureFlags = getFeatureFlags();
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 600,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: featureFlags.dse_sf_pro_font ? renderI18nText('community.eula.component_license_agreement') : renderI18nText('community.eula.license_agreement_v2')
        })
      }), jsx(nB, {
        children: jsxs('div', {
          style: {
            maxHeight: '360px'
          },
          children: [featureFlags.dse_sf_pro_font ? jsx('div', {
            style: {
              color: 'var(--color-text-secondary)',
              padding: '8px 0px'
            },
            children: renderI18nText('community.eula.subtext.component_license_agreement')
          }) : jsx('div', {
            className: 'apple_eula_modals--preamble--POXQG',
            children: renderI18nText('community.eula.license_agreement_preamble')
          }), jsx(AppleEulaContent, {})]
        })
      }), jsxs(wi, {
        children: [eulasToShow !== undefined && eulaShown !== undefined && eulasToShow > 1 && jsx('div', {
          children: renderI18nText('community.eula.i_of_count', {
            i: eulaShown,
            count: eulasToShow
          })
        }), jsxs(jk, {
          children: [jsx($z, {
            onClick: () => {
              trackEulaClick('decline');
              onDecline?.();
              onClose();
            },
            variant: 'secondary',
            children: renderI18nText('community.eula.disagree')
          }), jsx($z, {
            onClick: () => {
              trackEulaClick('accept');
              dispatch(postUserFlag({
                apple_eula_accepted: true
              }));
              onAgree();
              onClose();
            },
            variant: 'primary',
            children: renderI18nText('community.eula.agree')
          })]
        })]
      })]
    })
  });
}

/**
 * Registered Apple EULA Modal
 * Original variable name: $$$$T0
 */
export const RegisteredAppleEulaModal = registerModal(AppleEulaModal, 'APPLE_EULA_MODAL_TYPE', ModalSupportsBackground.YES);

/**
 * Exported modal type (original: T)
 */
export const T = RegisteredAppleEulaModal;

/**
 * Exported modal component (original: x)
 */
export const x = AppleEulaModal;