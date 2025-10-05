import { useCallback, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { KeyCodes } from "../905/63728";
import { KindEnum } from "../905/129884";
import { B as _$$B2 } from "../905/146468";
import { useLibraryFileLink } from "../905/217163";
import { X } from "../905/257331";
import { getI18nString, renderI18nText } from "../905/303541";
import { Link } from "../905/438674";
import { IconButton } from "../905/443068";
import { AutoLayout } from "../905/470281";
import { getLibraryName } from "../905/506188";
import { LibraryIconWithTooltip } from "../905/511388";
import { C as _$$C } from "../905/520159";
import { d_, kz, tq } from "../905/691188";
import { SvgComponent } from "../905/714743";
import { getSelectedFile } from "../905/766303";
import { useSingleEffect } from "../905/791079";
import { useCurrentUserOrgId } from "../905/845253";
import { A as _$$A2 } from "../3850/669090";
import { A as _$$A } from "../6828/858819";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { KP, L1 } from "../figma_app/12491";
import { fV } from "../figma_app/236178";
import { hasResourcePresetKey } from "../figma_app/255679";
import { ph } from "../figma_app/709893";
import { useHandleMouseEvent } from "../figma_app/878298";
// Original function: c - Renamed to FocusableDiv for clarity
/**
 * A focusable div component that manages focus state and accessibility attributes.
 * @param label - The aria-label for the div when focused.
 */
function FocusableDiv({
  label
}: {
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(true);
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  useSingleEffect(() => {
    if (ref.current) {
      ref.current.focus();
      setHasBeenFocused(true);
    }
  });
  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setHasBeenFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  const isHidden = hasBeenFocused && !isFocused;
  return jsx("div", {
    "aria-hidden": isHidden || undefined,
    "aria-label": isHidden ? undefined : label,
    "tabIndex": isHidden ? undefined : 0,
    "onFocus": handleFocus,
    "onBlur": handleBlur,
    "ref": ref
  });
}

// Original function: p - Renamed to useEnterKeyHandler for clarity
/**
 * A hook that returns a callback to handle Enter key presses.
 * @param callback - The function to call on Enter key press.
 * @returns A callback function for key events.
 */
function useEnterKeyHandler(callback: () => void) {
  return useCallback((event: KeyboardEvent) => {
    if (event.keyCode === KeyCodes.ENTER) {
      callback();
    }
  }, [callback]);
}

// Original function: $$O1 - Renamed to SubscriptionFileViewHeader for clarity
/**
 * Component for the subscription file view header.
 * @param props - The props for the component.
 */
export function SubscriptionFileViewHeader({
  canEditSubscriptions,
  libraryStat,
  libraryKey,
  onBackToList,
  showingDefaultSubscriptionsForTeamId,
  showingDefaultSubscriptionsForUser,
  showingDefaultSubscriptionsForOrg,
  sharingGroupData
}: {
  canEditSubscriptions: boolean;
  libraryStat: any;
  libraryKey: string;
  onBackToList: () => void;
  showingDefaultSubscriptionsForTeamId?: string;
  showingDefaultSubscriptionsForUser?: boolean;
  showingDefaultSubscriptionsForOrg?: boolean;
  sharingGroupData?: any;
}) {
  const libraryName = getLibraryName(libraryKey);
  const selectedFile = useSelector(getSelectedFile);
  const user = useSelector((state: any) => state.user);
  const [confirmCalloutShowing, setConfirmCalloutShowing] = useState(false);
  const isCurrentFile = selectedFile?.library_key === libraryKey;
  const fileName = libraryStat?.library_file_name ?? libraryName?.data ?? "";
  const isFromHub = fV(libraryKey, showingDefaultSubscriptionsForUser);
  const hasPreset = hasResourcePresetKey(libraryKey);
  const libraryLink = useLibraryFileLink({
    libraryKey
  });
  const handleBackClick = useHandleMouseEvent("subscriptionFileViewHeader.backCaret", "mousedown", onBackToList);
  useEnterKeyHandler(onBackToList);

  // Render subscription toggle or sharing group component
  const renderSubscriptionToggle = () => {
    if (sharingGroupData) {
      return jsx(_$$B2, {
        resourceConnectionSharingGroupData: sharingGroupData,
        useLabel: true
      });
    }
    if (user && (showingDefaultSubscriptionsForTeamId || showingDefaultSubscriptionsForUser)) {
      return jsx(tq, {
        libraryKey,
        showingDefaultSubscriptionsForTeamId,
        showingDefaultSubscriptionsForUser,
        label: getI18nString("design_systems.libraries_modal.enabled_by_default"),
        disabled: !canEditSubscriptions,
        confirmCalloutShowing,
        setConfirmCalloutShowing
      });
    }
    return null;
  };

  // Render current file label or subscribe button
  const renderFileAction = () => {
    if (showingDefaultSubscriptionsForOrg || showingDefaultSubscriptionsForTeamId || showingDefaultSubscriptionsForUser) {
      return null;
    }
    if (isCurrentFile) {
      return jsx("div", {
        className: "subscription_file_view_header--currentFileLabel--tbNfz ellipsis--ellipsis--Tjyfa",
        children: renderI18nText("design_systems.libraries_modal.current_file")
      });
    }
    if (user) {
      return jsx(kz, {
        libraryKey,
        showingDefaultSubscriptionsForTeamId,
        showingDefaultSubscriptionsForUser,
        disabled: !canEditSubscriptions,
        recordingKey: "subscriptionFileViewHeader.toggle",
        buttonStyleType: d_.PRIMARY
      });
    }
    return null;
  };

  // Render open file link if applicable
  const renderOpenFileLink = () => {
    const link = libraryLink?.data?.link;
    if (showingDefaultSubscriptionsForOrg && link) {
      return jsx("div", {
        className: "subscription_file_view_header--openFileSpacing--fs5yN",
        children: jsx(Link, {
          href: link,
          newTab: true,
          children: renderI18nText("design_systems.libraries_modal.open_file")
        })
      });
    }
    return null;
  };

  // Render library icon or preset indicator
  const renderLibraryIcon = useMemo(() => {
    if (hasPreset) {
      return jsx("div", {
        className: "subscription_file_view_header--presetLibraryIcon--SLpw1",
        children: jsx(LibraryIconWithTooltip, {
          libraryKey,
          showTooltip: true,
          redirectToHubFile: true
        })
      });
    }
    if (isFromHub) {
      return jsx("div", {
        className: cssBuilderInstance.pl4.$,
        children: showingDefaultSubscriptionsForUser ? jsx(L1, {
          libraryKey
        }) : jsx(KP, {
          libraryKey
        })
      });
    }
    return null;
  }, [isFromHub, hasPreset, libraryKey, showingDefaultSubscriptionsForUser]);
  return jsxs("div", {
    className: "subscription_file_view_header--componentOrFileViewHeader_v2--aMnfg",
    children: [jsx(FocusableDiv, {
      label: getI18nString("design_systems.libraries_modal.header_label", {
        fileName
      })
    }), jsx("div", {
      className: "subscription_file_view_header--backButton--0M3NV",
      children: jsx(IconButton, {
        "onClick": handleBackClick,
        "aria-label": getI18nString("design_systems.libraries_modal.back"),
        "children": jsx(_$$C, {})
      })
    }), jsxs("div", {
      className: "subscription_file_view_header--componentOrFileName--YhI3C text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsxs(AutoLayout, {
        verticalAlignItems: "center",
        direction: "horizontal",
        spacing: 0,
        children: [jsx(ph, {
          text: fileName,
          tooltipPropsWhenTruncated: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": fileName,
            "data-tooltip-show-immediately": true
          }
        }), renderLibraryIcon]
      }), jsx(LibraryPath, {
        workspaceId: libraryStat?.workspace_id,
        workspaceName: libraryStat?.workspace_name,
        teamId: libraryStat?.team_id,
        teamName: libraryStat?.team_name
      })]
    }), renderSubscriptionToggle(), renderFileAction(), renderOpenFileLink()]
  });
}

// Original function: D - Renamed to LibraryPath for clarity
/**
 * Component to display the library path with links to workspace and team.
 * @param props - The props for the component.
 */
function LibraryPath({
  workspaceId,
  workspaceName,
  teamId,
  teamName
}: {
  workspaceId?: string;
  workspaceName?: string;
  teamId?: string;
  teamName?: string;
}) {
  const orgId = useCurrentUserOrgId();
  if (!workspaceId && !teamId) {
    return null;
  }
  const workspaceHref = `/files/${orgId}/workspace/${workspaceId}/`;
  const teamHref = teamId ? orgId ? `/files/${orgId}/team/${teamId}` : `/files/team/${teamId}` : null;
  return jsxs("div", {
    className: "subscription_file_view_header--libraryPath--vp-sy text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [workspaceName && jsx(X, {
      href: workspaceHref,
      tooltipText: workspaceName,
      children: workspaceName
    }), workspaceName && teamName && jsx(Fragment, {
      children: " / "
    }), teamName && teamHref && jsx(X, {
      href: teamHref,
      tooltipText: teamName,
      children: teamName
    })]
  });
}

// Original function: $$L0 - Renamed to MissingLibrariesHeader for clarity
/**
 * Component for the missing libraries header.
 * @param props - The props for the component.
 */
export function MissingLibrariesHeader({
  backToList,
  numMissingLibraries
}: {
  backToList: () => void;
  numMissingLibraries: number;
}) {
  const handleKeyDown = useEnterKeyHandler(backToList);
  return jsxs("div", {
    className: "subscription_file_view_header--componentOrFileViewHeader--jxKql",
    children: [jsx(FocusableDiv, {
      label: getI18nString("design_systems.libraries_modal.header_label_missing")
    }), jsx(SvgComponent, {
      svg: _$$A,
      className: "subscription_file_view_header--backCaret--nwuU8",
      onMouseDown: backToList,
      onKeyDown: handleKeyDown,
      role: "button",
      tabIndex: 0
    }), jsxs("div", {
      className: "subscription_file_view_header--missingLibrariesHeader--hQ7Uu text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsx(SvgComponent, {
        className: "subscription_file_view_header--missingLibrariesIcon--AZ8iW replace_libraries_modal--missingLibrariesIcon--1oNrW",
        svg: _$$A2
      }), renderI18nText("design_systems.libraries_modal.plural.missing_library", {
        missingLibCount: numMissingLibraries
      })]
    })]
  });
}

// Refactored exports with meaningful names
export const Y = MissingLibrariesHeader; // Original: Y = $$L0
export const C = SubscriptionFileViewHeader; // Original: C = $$O1