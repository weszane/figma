import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { isMfaRequiredForOrg } from "../905/31837"
import { registerModal } from "../905/102752"
import { getI18nString, renderI18nText } from "../905/303541"
import { AvatarWithTooltip } from "../figma_app/54182"
import { ListFormatter } from "../figma_app/257703"
import { v_ } from "../figma_app/538002"
import { Be, iZ, jE, N4, Rt } from "../figma_app/639088"
import { flattenMessageMeta } from "../figma_app/819288"
import { ConfirmationModal2 } from "../figma_app/918700"
import { formatList } from "../figma_app/930338"

interface User {
  id: string
  handle: string
}

interface CommentMentionModalProps {
  usersWithoutAccess: User[]
  externalUsersWithoutAccess: User[]
  uninvitableUsers: User[]
  messageMeta: any
}

/**
 * Component to display header and text content
 * (original function: h)
 */
function MessageContentDisplay(props: { header?: string, text: string }) {
  return jsxs("div", {
    className: iZ,
    children: [
      props.header && jsx("span", {
        className: Rt,
        children: props.header,
      }),
      jsx("span", {
        className: N4,
        children: props.text,
      }),
    ],
  })
}

/**
 * Component to display user avatar with tooltip
 * (original function: g)
 */
function UserAvatarDisplay(props: { user: User }) {
  const { user } = props
  return jsx("span", {
    className: Be,
    children: jsxs(AvatarWithTooltip, {
      user,
      children: ["@", user.handle],
    }),
  })
}

/**
 * Component to format and display a list of users
 * (original function: f)
 */
function UserListFormatter(props: { users: User[] }) {
  return jsx(ListFormatter, {
    children: props.users.map(user =>
      jsx(UserAvatarDisplay, {
        user,
      }, user.id),
    ),
  })
}

/**
 * Modal component for confirming comment mentions
 * (original function: $$_0)
 */
export const ConfirmCommentMentionModal = registerModal((props: CommentMentionModalProps) => {
  const isMfaRequired = isMfaRequiredForOrg()

  const usersWithoutAccessHandles = props.usersWithoutAccess.map(user => user.handle)
  const externalUsersWithoutAccessHandles = props.externalUsersWithoutAccess.map(user => user.handle)
  const uninvitableUsersHandles = props.uninvitableUsers.map(user => user.handle)
  const allUserHandles = [
    ...usersWithoutAccessHandles,
    ...externalUsersWithoutAccessHandles,
    ...uninvitableUsersHandles,
  ]

  // Case when there are no external users without access or there are uninvitable users
  if (props.externalUsersWithoutAccess.length === 0 || props.uninvitableUsers.length > 0) {
    const usersUnableToView = [...props.uninvitableUsers, ...props.usersWithoutAccess]
    const confirmationTitle = getI18nString("comments.cant_view_this_comment", {
      numUsers: usersUnableToView.length,
      userHandle: usersUnableToView[0].handle,
    })

    return jsxs(ConfirmationModal2, {
      confirmationTitle,
      confirmText: props.uninvitableUsers.length === 0
        ? getI18nString("comments.post_share")
        : getI18nString("comments.post_anyway"),
      cancelText: getI18nString("comments.cancel_post_and_share"),
      size: "small",
      hideClose: true,
      ...props,
      children: [
        jsx("div", {
          className: jE,
          children: renderI18nText("comments.wont_be_able_to_view_your_comments_because_they_dont_have_access_to_this_file", {
            mentionedUsers: jsx(UserListFormatter, {
              users: usersUnableToView,
            }),
          }),
        }),
        jsx(MessageContentDisplay, {
          header: getI18nString("comments.you"),
          text: flattenMessageMeta(props.messageMeta),
        }),
      ],
    })
  }

  // Case when there are external users without access
  const hasInternalUsers = externalUsersWithoutAccessHandles.length !== allUserHandles.length

  const learnMoreLink = jsx("a", {
    className: v_,
    target: "_blank",
    rel: "noopener",
    href: "https://help.figma.com/hc/articles/360039960434",
    children: renderI18nText("comments.learn_more"),
  })

  const externalUsersWarning = hasInternalUsers
    ? renderI18nText("comments.please_note_that_is_external_to_your_organization", {
      numUsers: externalUsersWithoutAccessHandles.length,
      userNames: formatList(externalUsersWithoutAccessHandles),
      learnMore: learnMoreLink,
    })
    : renderI18nText("comments.please_note_that_some_of_these_users_are_external_to_your_organization", {
      numUsers: externalUsersWithoutAccessHandles.length,
      learnMore: learnMoreLink,
    })

  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("comments.post_comment_and_share_file"),
    confirmText: getI18nString("comments.post_share"),
    cancelText: getI18nString("comments.discard"),
    size: "small",
    hideClose: true,
    ...props,
    children: jsxs("div", {
      className: jE,
      children: [
        jsxs(Fragment, {
          children: [
            jsx("div", {
              children: renderI18nText("comments.mention_confirm_warning", {
                numUsers: props.usersWithoutAccess.length + props.externalUsersWithoutAccess.length,
                mentionedUsers: jsx(UserListFormatter, {
                  users: [...props.usersWithoutAccess, ...props.externalUsersWithoutAccess],
                }),
              }),
            }),
            jsx("br", {}),
            jsx("div", {
              children: isMfaRequired
                ? renderI18nText("comments.mfa_required_warning_without_link", {
                  numUsers: externalUsersWithoutAccessHandles.length,
                })
                : externalUsersWarning,
            }),
          ],
        }),
        jsx(MessageContentDisplay, {
          header: getI18nString("comments.you"),
          text: flattenMessageMeta(props.messageMeta),
        }),
      ],
    }),
  })
}, "confirm-comment-mention-modal-new")

export const VB = ConfirmCommentMentionModal
