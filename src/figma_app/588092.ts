import { useDispatch, useSelector } from "react-redux"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { fr, qE, S0, Ts, xl } from "../905/52565"
import { registerModal } from "../905/102752"
import { hideModal } from "../905/156213"
import { renderI18nText } from "../905/303541"

import { $E, B1, eR, iF } from "../905/586932"
import { e0 } from "../905/696396"
import { TrackedButton } from "../905/773401"
import { aq, C5, FT, IK, Il, m_, my, N4, Qc, Qk, wx } from "../905/884682"
import { postUserFlag } from "../905/985254"
import { FigmaResourceType, HubAction } from "../figma_app/350203"
import { generateProfileHandleThunk } from "../figma_app/530167"
import { ButtonSecondaryTracked } from "../figma_app/637027"
import { Pn } from "../figma_app/692865"
import { Ro } from "../figma_app/805373"
import { TrackingProvider } from "../figma_app/831799"
import { ModalContainer } from "../figma_app/918700"

// Color mapping for avatar decorations
const AvatarDecorationColors = {
  INDIGO: S0,
  VIOLET: xl,
  RED: qE,
  GREEN: Ts,
  GOLD: fr,
}

// Enum for community onboarding variations
export enum CommunityOnboardingVariation {
  COMMENTS = 0,
  OPT_IN = 1,
}

// Helper function to check if variations include a specific variation
function hasVariation(variations: CommunityOnboardingVariation[], variation: CommunityOnboardingVariation): boolean {
  return variations.includes(variation)
}

// Component to display user profile preview
interface UserProfilePreviewProps {
  user: any
  variations: CommunityOnboardingVariation[]
}

function UserProfilePreview({ user, variations }: UserProfilePreviewProps) {
  return jsxs(Fragment, {
    children: [
      // User avatar
      jsx(Ro, {
        className: my,
        entity: user,
        size: 100,
      }),

      // Avatar decorations for comments variation
      hasVariation(variations, CommunityOnboardingVariation.COMMENTS) && jsxs("div", {
        children: [
          jsx(eR, {
            backgroundColor: AvatarDecorationColors.RED,
            position: {
              top: "12px",
              left: "12%",
              transform: "rotate(-12deg)",
            },
          }),
          jsx(eR, {
            backgroundColor: AvatarDecorationColors.INDIGO,
            position: {
              top: "-40px",
              left: "9%",
              transform: "rotate(60deg)",
            },
          }),
          jsx(eR, {
            backgroundColor: AvatarDecorationColors.VIOLET,
            position: {
              top: "-10px",
              left: "27%",
              transform: "rotate(20deg)",
            },
          }),
          jsx(eR, {
            backgroundColor: AvatarDecorationColors.GREEN,
            position: {
              top: "-30px",
              left: "70%",
              transform: "rotate(30deg)",
            },
          }),
          jsx(eR, {
            backgroundColor: AvatarDecorationColors.GOLD,
            position: {
              top: "8px",
              left: "88%",
              transform: "rotate(-20deg)",
            },
          }),
        ],
      }),

      // User handle
      jsx("h1", {
        className: wx,
        children: user?.handle,
      }),

      // Description text
      jsx("h2", {
        className: m_,
        children: renderI18nText("community.onboarding.here_s_how_you_ll_look_when_using_the_figma_community"),
      }),

      // Settings information
      jsxs("h3", {
        className: N4,
        children: [
          renderI18nText("community.onboarding.change_your_photo_or_name_in_your_settings"),
          hasVariation(variations, CommunityOnboardingVariation.COMMENTS) && jsxs(Fragment, {
            children: [
              jsx("br", {}),
              renderI18nText("community.onboarding.when_leaving_comments_we_ask_that_you"),
            ],
          }),
        ],
      }),
    ],
  })
}

// Component to display community guidelines
function CommunityGuidelines() {
  return jsxs(Fragment, {
    children: [
      jsx("h1", {
        className: wx,
        children: renderI18nText("community.onboarding.follow_our_guidelines"),
      }),
      jsx("h2", {
        className: m_,
        children: renderI18nText("community.onboarding.when_leaving_comments_we_ask_that_you"),
      }),
    ],
  })
}

// Component to display guideline items
function GuidelineItems() {
  return jsxs("div", {
    className: Il,
    children: [
      jsxs("li", {
        children: [
          jsx("div", {
            className: Qk,
            children: renderI18nText("community.onboarding.stay_on_topic"),
          }),
          jsx(iF, {}),
        ],
      }),
      jsxs("li", {
        children: [
          jsx("div", {
            className: Qk,
            children: renderI18nText("community.onboarding.be_respectful"),
          }),
          jsx(B1, {}),
        ],
      }),
      jsxs("li", {
        children: [
          jsx("div", {
            className: Qk,
            children: renderI18nText("community.onboarding.read_our_guidelines", {
              guidelinesLink: jsx("a", {
                href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
                target: "_blank",
                children: renderI18nText("community.onboarding.guidelines"),
              }),
            }),
          }),
          jsx($E, {}),
        ],
      }),
    ],
  })
}

// Modal name constant
export const COMMUNITY_OPT_IN_MODAL_NAME = "COMMUNITY_OPT_IN"

// Register the community opt-in modal
registerModal(({
  userId,
  onFinish,
  variations = [],
}: {
  userId?: string
  onFinish?: () => void
  variations: CommunityOnboardingVariation[]
}) => {
  // Get user from Redux store
  const user = useSelector((state: any) => state.user)
  const effectiveUserId = userId || user?.id

  // Get dispatch function
  const dispatch = useDispatch<AppDispatch>()

  // Function to close the modal
  const closeModal = () => {
    dispatch(hideModal())
  }

  // Function to post user flag
  const postFlag = () => {
    dispatch(postUserFlag({
      [Pn]: true,
    }))
  }

  // Determine if we only show the cancel button
  const showOnlyCancelButton = hasVariation(variations, CommunityOnboardingVariation.COMMENTS) && variations.length === 1

  // Determine modal container class
  const containerClass = hasVariation(variations, CommunityOnboardingVariation.COMMENTS)
    ? (variations.length === 1 ? aq : Qc)
    : FT

  return jsx(ModalContainer, {
    className: containerClass,
    children: jsxs(TrackingProvider, {
      name: e0.PROFILE_CREATE_MODAL,
      properties: {
        action: HubAction.COMMUNITY_OPT_IN,
        communityHubEntity: FigmaResourceType.USERS,
        communityHubEntityId: effectiveUserId,
      },
      children: [
        // Show user profile preview or guidelines based on variations
        hasVariation(variations, CommunityOnboardingVariation.OPT_IN) && user
          ? jsx(UserProfilePreview, {
            user,
            variations,
          })
          : jsx(CommunityGuidelines, {}),

        // Show guideline items for comments variation
        hasVariation(variations, CommunityOnboardingVariation.COMMENTS) && jsx(GuidelineItems, {}),

        // Primary action button
        jsx(TrackedButton, {
          type: "submit",
          className: C5,
          onClick: () => {
            closeModal()

            const isOptInVariation = hasVariation(variations, CommunityOnboardingVariation.OPT_IN)

            // Handle opt-in variation
            if (isOptInVariation) {
              dispatch(generateProfileHandleThunk({
                onSuccess: onFinish,
              }))
              postFlag()
            }

            // Handle comments variation
            if (hasVariation(variations, CommunityOnboardingVariation.COMMENTS) && effectiveUserId) {
              postFlag()
              if (!isOptInVariation) {
                onFinish?.()
              }
            }
          },
          children: hasVariation(variations, CommunityOnboardingVariation.COMMENTS)
            ? renderI18nText("community.onboarding.got_it")
            : renderI18nText("community.onboarding.looks_good"),
        }),

        // Cancel button (shown unless showOnlyCancelButton is true)
        !showOnlyCancelButton && jsx(ButtonSecondaryTracked, {
          className: IK,
          onClick: closeModal,
          children: renderI18nText("general.cancel"),
        }),
      ],
    }),
  })
}, COMMUNITY_OPT_IN_MODAL_NAME)

// Export enums and constants
export const FF = CommunityOnboardingVariation
export const G$ = COMMUNITY_OPT_IN_MODAL_NAME
