import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { Alert } from '../905/64735'
import { registerModal } from '../905/102752'
import { z } from '../905/284530'
import { VisualBellActions } from '../905/302958'
import { getI18nString, renderI18nText } from '../905/303541'
import { J } from '../905/403084'
import { useModalManager } from '../905/437088'
import { Link } from '../905/438674'
import { trackEventAnalytics } from '../905/449184'
import { Button } from '../905/521428'
import { ResourceStatus } from '../905/663269'
import { TextWithTruncation } from '../905/984674'
import { P } from '../905/994270'
import { A as _$$A2 } from '../5724/663128'
import { A as _$$A } from '../5724/933949'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { AllowlistPluginsSectionView, PluginRequests } from '../figma_app/43951'
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243'
import { useSubscription } from '../figma_app/288654'
import { formatList } from '../figma_app/930338'

function w(e) {
  let {
    extensionId,
    orgId,
    isWidget,
    workspaceId,
  } = e
  let s = useSubscription(AllowlistPluginsSectionView, {
    orgId,
  })
  let o = s.data?.org
  if (s.status === 'loading' || s.status === 'errors' || !o)
    return null
  let {
    numWorkspacesApproved,
    workspaceNames,
  } = (function (e, t, i, n) {
    let r = 0
    let a = []
    for (let s of e) {
      if (s.allowlistGroupType !== 'Workspace' || !s.allowlistedWorkspace || !s.plugin || s.plugin.status !== ResourceStatus.Loaded)
        continue
      let e = s.plugin.data
      e && e.id === t && !!e.isWidget == !!i && s.allowlistedWorkspace.id !== n && (r += 1, a.push(s.allowlistedWorkspace.name))
    }
    return {
      numWorkspacesApproved: r,
      workspaceNames: a,
    }
  }(o.allowlistedPlugins, extensionId, isWidget, workspaceId))
  if (numWorkspacesApproved === 0 || workspaceNames.length === 0)
    return null
  let c = {
    numWorkspacesApproved,
    workspaceList: jsx(TextWithTruncation, {
      fontWeight: 'semi-bold',
      children: formatList(workspaceNames),
    }),
  }
  let u = isWidget
    ? jsx(TextWithTruncation, {
        color: 'default',
        fontWeight: 'medium',
        children: renderI18nText('extension_request_modal.widget_approved', c),
      })
    : jsx(TextWithTruncation, {
        color: 'default',
        fontWeight: 'medium',
        children: renderI18nText('extension_request_modal.plugin_approved', c),
      })
  return jsx('div', {
    'className': cssBuilderInstance.mb16.$,
    'data-testid': 'approved-banner',
    'children': jsx(z, {
      variant: 'success',
      iconSrc: _$$A,
      orientation: 'vertical',
      children: u,
    }),
  })
}
function T({
  workspaceDetails: e,
  isWidget: t,
}) {
  if (!e)
    return null
  let {
    workspaceName,
    fileName,
    fileKey,
  } = e
  let o = jsx(Link, {
    newTab: !0,
    href: `/file/${fileKey}`,
    children: fileName,
  })
  if (!workspaceName) {
    let e = t
      ? renderI18nText('extension_request_modal.widget_file_details', {
          fileLink: o,
        })
      : renderI18nText('extension_request_modal.plugin_file_details', {
          fileLink: o,
        })
    return jsx('div', {
      'className': cssBuilderInstance.my8.$,
      'data-testid': 'file-request-text',
      'children': jsx(TextWithTruncation, {
        color: 'default',
        children: e,
      }),
    })
  }
  let l = jsx(TextWithTruncation, {
    fontWeight: 'semi-bold',
    children: workspaceName,
  })
  let d = t
    ? renderI18nText('extension_request_modal.widget_workspace_details', {
        fileLink: o,
        workspace: l,
      })
    : renderI18nText('extension_request_modal.plugin_workspace_details', {
        fileLink: o,
        workspace: l,
      })
  return jsx('div', {
    'className': cssBuilderInstance.my8.$,
    'data-testid': 'file-request-text',
    'children': jsx(TextWithTruncation, {
      color: 'default',
      children: d,
    }),
  })
}
export let ExtensionRequestModal = registerModal(({
  extension: e,
  isWidget: t,
  orgId: i,
  workspaceDetails: s,
  openedFrom: b,
  fullscreenEditorType: I,
  onClose: E,
  open: x,
}) => {
  let S
  trackEventAnalytics('Open Plugin Request Modal', {
    name: 'Request Plugin Modal',
    openedFrom: b,
    fullscreenEditorType: I,
  })
  P(!0)
  let k = useSubscription(PluginRequests, {
    orgId: i,
  })
  let R = k?.data?.org?.pluginRequests.reduce((t, i) => i.pluginId === e.pluginId && i.status === 'rejected' && (!t || i.updatedAt > t.updatedAt) ? i : t, null)
  let {
    name,
    iconUrl,
    pluginId,
  } = e
  let [D, L] = useState(void 0)
  let F = s?.workspaceId
  let M = useDispatch()
  let j = t ? getI18nString('extension_request_modal.request_widget_approval') : getI18nString('extension_request_modal.request_plugin_approval')
  S = R ? t ? getI18nString('extension_request_modal.leave_widget_rerequest_note') : getI18nString('extension_request_modal.leave_plugin_rerequest_note') : t ? getI18nString('extension_request_modal.leave_widget_note') : getI18nString('extension_request_modal.leave_plugin_note')
  let U = useModalManager({
    open: x,
    onClose: E,
  })
  return jsx(ModalRootComponent, {
    manager: U,
    width: 'md',
    htmlAttributes: {
      'data-testid': 'plugin-request-modal',
    },
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: j,
        }),
      }), jsxs(DialogBody, {
        scrolling: 'none',
        children: [jsxs('div', {
          className: cssBuilderInstance.mb16.flex.itemsCenter.$,
          children: [jsx('img', {
            src: iconUrl ?? '',
            alt: 'plugin icon',
            className: cssBuilderInstance.w24.h24.bRadius6.mr8.$,
          }), jsx(TextWithTruncation, {
            color: 'default',
            fontWeight: 'medium',
            truncate: !0,
            children: name,
          })],
        }), jsx(w, {
          isWidget: t,
          extensionId: pluginId,
          orgId: i,
          workspaceId: F,
        }), R && jsxs(Alert, {
          variant: 'warning',
          orientation: 'vertical',
          iconSrc: _$$A2,
          children: [jsxs(TextWithTruncation, {
            fontWeight: 'semi-bold',
            children: [t ? getI18nString('extension_request_modal.widget_declined_on_string') : getI18nString('extension_request_modal.plugin_declined_on_string'), ' ', R.updatedAt.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })],
          }), jsx('br', {}), R.declineNote && jsx(TextWithTruncation, {
            children: `"${R.declineNote}"`,
          })],
        }), jsxs('div', {
          className: cssBuilderInstance.mb16.mt16.$,
          children: [jsx(T, {
            workspaceDetails: s,
            isWidget: t,
          }), jsx(TextWithTruncation, {
            children: S,
          })],
        }), jsx('textarea', {
          className: cssBuilderInstance.wFull.borderBox.b1.h64.bRadius2.p8.resizeNone.colorBorder.$,
          value: D,
          onChange: (e) => {
            L(e.target.value)
          },
          placeholder: getI18nString('extension_request_modal.request_placeholder'),
        })],
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: E,
            children: getI18nString('extension_request_modal.cancel'),
          }), jsx(Button, {
            disabled: !D,
            variant: 'primary',
            onClick: () => {
              (t ? J.requestWidget : J.requestPlugin)(i, pluginId, D, F).then(() => {
                let e = t ? getI18nString('extension_request_modal.widget_approval_requested') : getI18nString('extension_request_modal.plugin_approval_requested')
                M(VisualBellActions.enqueue({
                  message: e,
                }))
              }).catch((e) => {
                let t = e.message ?? getI18nString('extension_request_modal.error_requesting_approval')
                M(VisualBellActions.enqueue({
                  message: t,
                }))
              })
              E()
            },
            children: getI18nString('extension_request_modal.request'),
          })],
        }),
      })],
    }),
  })
}, 'ExtensionRequestModal')
export const S = ExtensionRequestModal
