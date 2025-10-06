import { useCallback } from "react"
import { createActionCreator } from "../905/73481"
import { ColorSpaceType } from "../905/366117"
import { debugState } from "../905/407919"
import { getCurrentLiveGraphClient } from "../905/761735"
import { userColorProfileAtomFamily } from "../905/888985"
import { sendWithRetry } from "../905/910117"
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355"
import { FColorSpaceType } from "../figma_app/191312"
import { trackUserEvent } from "../figma_app/314264"
import { ColorSpaceEnum } from "../figma_app/763686"

interface UserColorProfile {

  colorProfilePreference: FColorSpaceType;
  id: string;
}

interface ColorProfileUpdateParams {
  colorProfilePreference: FColorSpaceType;
  id: string;
  eventName?: string;
  additionalDataToLog?: Record<string, any>;
}

interface DefaultToP3EventData {
  desktopSetting: any;
  p3Plugins: Record<string, any> | null;
  canSeeP3: boolean;
}

const DEFAULT_USER_COLOR_PROFILE: UserColorProfile = {
  colorProfilePreference: FColorSpaceType.DEFAULT,
  id: "",
};

/**
 * Action creator for updating user color profile
 * Original name: $$m2
 */
const updateUserColorProfileAction = createActionCreator("USER_UPDATE_COLOR_PROFILE");

/**
 * Atom that manages user color profile state
 * Original name: g
 */
const userColorProfileAtom = atom((get) => {
  const userColorProfileState: any = get(userColorProfileAtomFamily({}));
  let effectiveColorProfile = DEFAULT_USER_COLOR_PROFILE.colorProfilePreference;

  // Determine the effective color profile based on loading state and available data
  if (
    userColorProfileState.status === "loading" &&
    debugState !== undefined &&
    debugState?.getState()?.user?.color_profile
  ) {
    effectiveColorProfile = debugState.getState().user?.color_profile as any;
  } else if (
    userColorProfileState.data?.userColorProfilePreference?.colorProfilePreference
  ) {
    effectiveColorProfile =
      userColorProfileState.data.userColorProfilePreference.colorProfilePreference;
  }

  // Map Figma color space type to internal color space type
  const mappedColorProfile = (function mapFigmaColorSpaceToInternal(
    figmaColorSpace: any
  ): ColorSpaceType {
    switch (figmaColorSpace) {
      case FColorSpaceType.DEFAULT:
        return ColorSpaceType.DEFAULT;
      case FColorSpaceType.SRGB:
        return ColorSpaceType.SRGB;
      case "display-p3":
      case FColorSpaceType.DISPLAY_P3:
        return ColorSpaceType.DISPLAY_P3;
      default:
        return ColorSpaceType.DEFAULT;
    }
  })(effectiveColorProfile);

  const userProfileId =
    userColorProfileState.data?.userColorProfilePreference?.id ??
    DEFAULT_USER_COLOR_PROFILE.id;

  const result = {
    colorProfilePreference: mappedColorProfile,
    id: userProfileId,
  };

  // Update debug state if needed
  if (
    debugState !== undefined &&
    debugState?.getState()?.user?.color_profile !== result.colorProfilePreference
  ) {
    debugState.dispatch(
      updateUserColorProfileAction({
        color_profile: result.colorProfilePreference,
      })
    );
  }

  return result;
});

/**
 * Maps internal color space type to color space enum
 * Original name: $$f3
 */
export function mapColorSpaceToEnum(colorSpace: ColorSpaceType): ColorSpaceEnum {
  switch (colorSpace) {
    case ColorSpaceType.DEFAULT:
    case ColorSpaceType.SRGB:
      return ColorSpaceEnum.SRGB;
    case ColorSpaceType.DISPLAY_P3:
      return ColorSpaceEnum.DISPLAY_P3;
    default:
      return ColorSpaceEnum.SRGB;
  }
}

/**
 * Gets the current user color profile from atom store
 * Original name: $$E1
 */
export function getCurrentUserColorProfile() {
  return atomStoreManager.get(userColorProfileAtom);
}

/**
 * Hook to subscribe to user color profile updates
 * Original name: $$y5
 */
export function useUserColorProfileSubscription() {
  return useAtomWithSubscription(userColorProfileAtom);
}

/**
 * Updates user color profile preference
 * Original name: $$b4
 */
export async function updateUserColorProfilePreference({
  colorProfilePreference,
  id,
  eventName = "user_manual_change",
  additionalDataToLog,
}: ColorProfileUpdateParams): Promise<void> {
  // Early return if no change
  if (colorProfilePreference === DEFAULT_USER_COLOR_PROFILE.colorProfilePreference) {
    return;
  }

  // Track the user event
  const currentState = debugState.getState();
  trackUserEvent("color_profile_preference", currentState, {
    userColorProfile: colorProfilePreference,
    userColorProfileId: id,
    eventName,
    ...(additionalDataToLog ?? {}),
  });

  // Send update to server
  const requestPromise = sendWithRetry.put("/api/user", {
    color_profile: colorProfilePreference,
  });

  if (id) {
    // Update existing preference
    getCurrentLiveGraphClient()?.optimisticallyUpdate(
      {
        UserColorProfilePreference: {
          [id]: {
            colorProfilePreference,
          },
        },
      },
      requestPromise
    );
  } else {
    // Create new preference
    const userId = debugState.getState().user?.id;
    if (!userId) {
      return;
    }

    getCurrentLiveGraphClient()?.optimisticallyCreate(
      {
        UserColorProfilePreference: {
          "optimistic-id": {
            colorProfilePreference,
            userId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
      },
      requestPromise
    );
  }
}

/**
 * Hook that provides a callback for handling default to P3 color profile transitions
 * Original name: $$T0
 */
export function useDefaultToP3TransitionHandler() {
  const currentUserProfile = useUserColorProfileSubscription();

  return useCallback(
    (newColorProfile: FColorSpaceType, eventData: DefaultToP3EventData) => {
      if (currentUserProfile.colorProfilePreference === ColorSpaceType.DEFAULT) {
        const eventName =
          newColorProfile === FColorSpaceType.SRGB ? "default_to_srgb" : "default_to_p3";

        updateUserColorProfilePreference({
          colorProfilePreference: newColorProfile,
          id: currentUserProfile.id,
          eventName,
          additionalDataToLog: {
            desktopSetting: eventData.desktopSetting,
            p3Plugins: eventData.p3Plugins ? Object.values(eventData.p3Plugins) : null,
            canSeeP3: eventData.canSeeP3,
          },
        });
      }
    },
    [currentUserProfile.colorProfilePreference, currentUserProfile.id]
  );
}

// Export aliases for backward compatibility
export const C$ = useDefaultToP3TransitionHandler;
export const YN = getCurrentUserColorProfile;
export const eu = updateUserColorProfileAction;
export const hP = mapColorSpaceToEnum;
export const it = updateUserColorProfilePreference;
export const jK = useUserColorProfileSubscription;
