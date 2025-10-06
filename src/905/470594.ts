import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { registerModal } from '../905/102752';
import { showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { useModalManager } from '../905/437088';
import { Link } from '../905/438674';
import { Button } from '../905/521428';
import { decodeBase64 } from '../905/561685';
import { VisualBellIcon } from '../905/576487';
import { getFeatureFlags } from '../905/601108';
import { UploadError, uploadToPresignedPost } from '../905/623179';
import { SvgComponent } from '../905/714743';
import { sendWithRetry } from '../905/910117';
import { styleBuilderInstance } from '../905/941192';
import { getFontIndexUrl } from '../905/946258';
import { A as SVG2 } from '../6828/289931';
import { createNoOpValidator } from '../figma_app/181241';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243';
import { Badge, BadgeColor, BadgeSize } from '../figma_app/919079';

/**
 * Enum for feature types (x)
 */
export enum FeatureType {
  LibraryPublish = 'library_publish',
  CommentAttachment = 'comment_attachment',
  Video = 'video',
  ExtensionPublish = 'extension_publish',
}

/**
 * Enum for font list feature (S)
 */
export enum FontFeature {
  FontList = 'font_list',
}

/**
 * Enum for error types (w)
 */
export enum NetworkErrorType {
  NONE = 0,
  NON_S3_RESPONSE = 1,
  OTHER = 2,
}

/**
 * NetworkCompatibilityService (C)
 * Handles network compatibility checks for presigned posts and font lists.
 */
class NetworkCompatibilityService {
  checkPresignedPostValidator = createNoOpValidator();

  /**
   * Validates presigned post network compatibility.
   */
  getCheckPresignedPostNetworkCompatibility() {
    return this.checkPresignedPostValidator.validate(({
      xr: e
    }) => e.get('/api/check_network_compatibility'));
  }

  /**
   * Checks font list network compatibility.
   * @param url Font list URL
   */
  checkFontListNetworkCompatibility(url: string) {
    return sendWithRetry.crossOriginHead(url, null, {
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      responseType: 'arraybuffer',
      retryCount: 0
    });
  }
}
export const networkCompatibilityService = new NetworkCompatibilityService();

/** Base64 PNG used for upload test (R) */
export const base64Png = decodeBase64('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==');

/**
 * Modal for network compatibility check (N)
 */
export const CheckNetworkCompatibilityModal = registerModal(props => {
  const dispatch = useDispatch();
  const manager = useModalManager(props);

  // Description content
  const descriptionContent = jsxs(Fragment, {
    children: [jsx('span', {
      children: getI18nString('check_network_compatibility.description')
    }), jsx('br', {}), jsx('br', {}), jsx('span', {
      children: getI18nString('check_network_compatibility.description_cta')
    }), '\xA0', jsx(Link, {
      href: 'https://help.figma.com/hc/articles/19424714305943-Adjust-firewall-settings',
      newTab: true,
      style: styleBuilderInstance.colorTextBrand.cursorPointer.my16.$,
      children: renderI18nText('check_network_compatibility.view_help_center')
    })]
  });

  /**
   * Renders a result row for a feature check (s)
   */
  const renderResultRow = ({
    feature,
    url,
    error,
    type
  }: {
    feature: FeatureType | FontFeature;
    url: string;
    error: NetworkErrorType;
    type: string;
  }) => jsxs('div', {
    style: styleBuilderInstance.mb16.fontMedium.$,
    children: [jsxs('div', {
      style: styleBuilderInstance.mb8.flex.justifyBetween.selectNone.$,
      children: [jsxs('div', {
        style: styleBuilderInstance.flex.gap4.$,
        children: [(() => {
          switch (feature) {
            case FeatureType.LibraryPublish:
              return renderI18nText('check_network_compatibility.feature.library_publish');
            case FeatureType.ExtensionPublish:
              return renderI18nText('check_network_compatibility.feature.extension_publish');
            case FeatureType.CommentAttachment:
              return renderI18nText('check_network_compatibility.feature.comment_attachment');
            case FeatureType.Video:
              return renderI18nText('check_network_compatibility.feature.video');
            case FontFeature.FontList:
              return renderI18nText('check_network_compatibility.feature.font_list');
          }
        })(), jsx(Badge, {
          text: type,
          color: BadgeColor.DEFAULT,
          size: BadgeSize.SMALL,
          subtle: true
        })]
      }), jsx('div', {
        children: error === NetworkErrorType.NONE ? jsx('div', {
          style: styleBuilderInstance.colorTextSuccess.$,
          children: renderI18nText('check_network_compatibility.available')
        }) : jsx('div', {
          style: styleBuilderInstance.colorTextDanger.$,
          children: renderI18nText('check_network_compatibility.blocked')
        })
      })]
    }), error === NetworkErrorType.NON_S3_RESPONSE ? jsxs('div', {
      style: styleBuilderInstance.p8.colorBgSecondary.colorTextSecondary.bRadius4.flex.justifyBetween.itemsCenter.$,
      children: [jsx('span', {
        style: styleBuilderInstance.mr8.$,
        children: url
      }), jsx(SvgComponent, {
        svg: SVG2,
        className: 'check_network_compatibility--copySvg--1lHmK',
        onClick: () => {
          navigator.clipboard.writeText(url).then(() => {
            dispatch(VisualBellActions.enqueue({
              message: getI18nString('check_network_compatibility.copied_to_clipboard')
            }));
          });
        }
      })]
    }) : null]
  }, feature);
  return jsx(ModalRootComponent, {
    manager,
    width: 360,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('check_network_compatibility.title')
        })
      }), jsxs(DialogBody, {
        children: [jsx('div', {
          style: styleBuilderInstance.mt8.mb16.selectNone.$,
          children: descriptionContent
        }), props.results.map(renderResultRow)]
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Button, {
            variant: 'secondary',
            onClick: props.onClose,
            children: renderI18nText('check_network_compatibility.close')
          })
        })
      })]
    })
  });
}, 'CheckNetworkCompatibilityModal');

/** Visual bell type constant (P) */
export const CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE = 'CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE';

/**
 * Enqueue error bell with settings button ($$O1)
 * @param dispatch Redux dispatch
 * @param message Error message
 */
export function enqueueNetworkErrorBell(dispatch, message) {
  dispatch(VisualBellActions.enqueue({
    message,
    button: {
      text: getI18nString('check_network_compatibility.error_bell.view_settings'),
      action: () => {
        showNetworkSettingsModal(dispatch);
        return true;
      }
    },
    error: true
  }));
}

/**
 * Show network settings modal and check compatibility ($$D0)
 * @param dispatch Redux dispatch
 */
export function showNetworkSettingsModal(dispatch) {
  dispatch(VisualBellActions.dequeue({
    matchType: CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE
  }));
  dispatch(VisualBellActions.enqueue({
    message: getI18nString('check_network_compatibility.checking_network_settings'),
    icon: VisualBellIcon.SPINNER,
    type: CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE
  }));
  networkCompatibilityService.getCheckPresignedPostNetworkCompatibility().then(async ({
    data
  }) => {
    const results = await Promise.all(data.meta.map(async ({
      url,
      fields,
      feature
    }) => {
      try {
        await uploadToPresignedPost(ServiceCategories.SCENEGRAPH_AND_SYNC, 'test', url, fields, base64Png, 'image/png');
        return {
          url,
          fields,
          feature,
          error: NetworkErrorType.NONE,
          type: 'POST'
        };
      } catch (err) {
        return {
          url,
          fields,
          feature,
          error: err instanceof UploadError ? NetworkErrorType.NON_S3_RESPONSE : NetworkErrorType.OTHER,
          type: 'POST'
        };
      }
    }));
    if (getFeatureFlags().ce_font_network_status_ui) {
      const fontUrl = getFontIndexUrl({
        format: 'kiwi',
        shouldUseLocalFontIndex: !!getFeatureFlags().font_index_use_local,
        shouldUse250317Index: !!getFeatureFlags().font_index_250317
      });
      try {
        await networkCompatibilityService.checkFontListNetworkCompatibility(fontUrl);
        results.push({
          url: fontUrl,
          fields: {},
          feature: FontFeature.FontList,
          error: NetworkErrorType.NONE,
          type: 'GET'
        });
      } catch {
        results.push({
          url: fontUrl,
          fields: {},
          feature: FontFeature.FontList,
          error: NetworkErrorType.NON_S3_RESPONSE,
          type: 'GET'
        });
      }
    }
    dispatch(VisualBellActions.dequeue({
      matchType: CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE
    }));
    if (results.some(({
      error
    }) => error !== NetworkErrorType.NONE)) {
      VisualBellActions.dequeue({
        matchType: CHECK_NETWORK_COMPATIBILITY_VISUAL_BELL_TYPE
      });
      dispatch(showModalHandler({
        type: CheckNetworkCompatibilityModal,
        data: {
          results
        }
      }));
    } else {
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('check_network_compatibility.network_settings_compatible')
      }));
    }
  }).catch(() => {
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('check_network_compatibility.error'),
      error: true
    }));
  });
}

// Exported aliases for refactored functions
export const x9 = showNetworkSettingsModal;
export const MZ = enqueueNetworkErrorBell;
