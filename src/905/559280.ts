import { noop } from 'lodash-es';
import { Component, useCallback } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { TrackedLinkButton } from '../905/160095';
import { LoadingRenderer } from '../905/211326';
import { useModalManager } from '../905/437088';
import { TabLoop } from '../905/718764';
import { Point } from '../905/736624';
import { ArrowPosition, DraggableModalManager, HEADER_HEIGHT } from '../905/748636';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { S as _$$S, qg, v0, zP } from '../figma_app/169752';
import { xT } from '../figma_app/195407';
import { DialogBody, DialogContents } from '../figma_app/272243';
import { logAndTrackCTA } from '../figma_app/314264';
import { CR, NJ, OA } from '../figma_app/419216';
import { CornerPosition, MAX_WIDTH, OverlayType, TitlePosition } from '../figma_app/450829';
import { iy, Uj } from '../figma_app/532170';
import { WithTrackedButton } from '../figma_app/617427';
import { useTracking, wrapWithTracking } from '../figma_app/831799';
import { x as _$$x2 } from '../figma_app/849451';

// Constants from original code (C, T, k)
const HEADER_HEIGHT_CONSTANT = 48;
const PADDING_CONSTANT = 12;
const nullishCoalesce = <T,>(value: T | null): T | undefined => value !== null ? value : undefined;

/**
 * Props interface for ModalFrame component.
 * Defines the expected properties for the ModalFrame class component.
 */
interface ModalFrameProps {
  onClose: () => void;
  step: any;
  dismissModal: () => void;
  onClickPrimaryCta: () => void;
  additionalOnExplicitDismiss?: () => void;
  dispatch: any;
}

/**
 * ModalFrame component - refactored from $$R0 class.
 * Handles rendering different types of modals based on step configuration.
 */
export class RcsFrame extends Component<ModalFrameProps> {
  static displayName = 'RcsFrame';
  // Refactored state with explicit types
  state: {
    modalHeight: number;
    rcsKeyLocation: {
      top: number | null;
      left: number | null;
      arrowRelativeX: number | null;
      arrowRelativeY: number | null;
      arrowPosition: ArrowPosition | null;
    } | null;
    renderCount: number;
    title?: string;
    titleSetByStep?: any;
  } = {
      modalHeight: 328,
      rcsKeyLocation: null,
      renderCount: 0
    };

  // Refactored instance variables
  getRcsKeyElementInterval: number | null = null;
  button: HTMLElement | null = null;
  constructor(props: ModalFrameProps) {
    super(props);
  }

  // Refactored lifecycle methods with comments tracing to original
  componentDidMount() {
    window.addEventListener('beforeunload', this.props.onClose);
    this.startScanningForRcsKeyElement();
    document.addEventListener('readystatechange', this.renderIfDocumentComplete);
  }
  componentWillUnmount() {
    this.props.onClose();
    window.removeEventListener('beforeunload', this.props.onClose);
    document.removeEventListener('readystatechange', this.renderIfDocumentComplete);
    this.cleanUpRcsKeyElementScanner();
  }
  componentDidUpdate(prevProps: any) {
    this.focusButton();
    const currentStep = this.props.step;
    if (currentStep.modalType !== OverlayType.DRAGGABLE) return;
    const prevStep = prevProps.step;
    if (prevStep.modalType !== OverlayType.DRAGGABLE || currentStep.onboardingKey && currentStep.onboardingKey !== prevStep.onboardingKey) {
      this.startScanningForRcsKeyElement();
    }
  }

  // Refactored getters with types
  get width(): number {
    const step = this.props.step;
    switch (step.modalType) {
      case OverlayType.FEATURE_UPDATE:
        return step.width || MAX_WIDTH;
      case OverlayType.DRAGGABLE:
        return step.width || 350;
      default:
        return 350;
    }
  }
  get height(): number {
    return this.state.modalHeight || 328;
  }

  // Refactored static method
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    return nextProps.step !== prevState.titleSetByStep ? {
      title: undefined,
      titleSetByStep: undefined
    } : {};
  }

  // Refactored methods with TS docs and original names in comments

  /**
   * renderIfDocumentComplete - original method name
   */
  renderIfDocumentComplete = () => {
    if (document.readyState === 'complete') {
      this.forceRender();
    }
  };

  /**
   * startScanningForRcsKeyElement - original method name
   */
  startScanningForRcsKeyElement = () => {
    this.cleanUpRcsKeyElementScanner();
    const step = this.props.step;
    if (step.modalType === OverlayType.DRAGGABLE) {
      if (!step.onboardingKey) {
        this.setState({
          rcsKeyLocation: null
        });
        return;
      }
      this.getRcsKeyElementInterval = setInterval(() => {
        const element = this.getRcsKeyElement();
        if (element != null) {
          const location = this.computeLocation(element.getBoundingClientRect());
          if (this.state.rcsKeyLocation == null || this.state.rcsKeyLocation.top !== location.top || this.state.rcsKeyLocation.left !== location.left) {
            this.setState({
              rcsKeyLocation: location
            });
          }
        } else {
          this.setState({
            rcsKeyLocation: null
          });
        }
      }, 50);
    }
  };

  /**
   * cleanUpRcsKeyElementScanner - original method name
   */
  cleanUpRcsKeyElementScanner = () => {
    if (this.getRcsKeyElementInterval != null) {
      clearInterval(this.getRcsKeyElementInterval);
      this.getRcsKeyElementInterval = null;
    }
  };

  /**
   * acceptHeight - original method name
   */
  acceptHeight = (height: number) => this.setState({
    modalHeight: height
  });

  /**
   * nextButtonRef - original method name
   */
  nextButtonRef = (element: HTMLElement | null) => {
    if (element) {
      this.button = element;
      this.focusButton();
    }
  };

  /**
   * focusButton - original method name
   */
  focusButton = () => {
    if (this.button && !this.props.step.UNSAFE_disableFocus) {
      this.button.focus();
    }
  };

  /**
   * computeLocation - original method name
   */
  computeLocation = (rect: DOMRect): {
    top: number | null;
    left: number | null;
    arrowRelativeX: number | null;
    arrowRelativeY: number | null;
    arrowPosition: ArrowPosition | null;
  } => {
    const step = this.props.step;
    if (step.modalType !== OverlayType.DRAGGABLE) {
      return {
        top: null,
        left: null,
        arrowRelativeX: null,
        arrowRelativeY: null,
        arrowPosition: null
      };
    }
    if (step.pointDirection === TitlePosition.LEFT_TITLE) {
      const top = rect.top + rect.height / 2;
      return {
        left: rect.left + rect.width + 16,
        top: top - 20,
        arrowRelativeX: -18,
        arrowRelativeY: HEADER_HEIGHT / 2 - 9,
        arrowPosition: ArrowPosition.LEFT_TITLE
      };
    }
    if (step.pointDirection === TitlePosition.RIGHT_TITLE) {
      const top = rect.top + rect.height / 2;
      const left = rect.left - this.width - 16;
      const arrowRelativeY = HEADER_HEIGHT / 2 - 9;
      return {
        left,
        top: top - 20,
        arrowRelativeX: this.width,
        arrowRelativeY,
        arrowPosition: ArrowPosition.RIGHT_TITLE
      };
    }
    const centerX = rect.left + rect.width / 2;
    let top = rect.bottom + 18;
    let left = centerX - this.width / 2;
    left = Math.min(Math.max(left, 10), window.innerWidth - 10 - this.width);
    const arrowRelativeX = centerX - left;
    let arrowPosition = ArrowPosition.TOP;
    if (this.state.modalHeight != null && window.innerHeight - top < this.state.modalHeight + 12) {
      top = rect.top - this.state.modalHeight - 12;
      arrowPosition = ArrowPosition.BOTTOM;
    }
    return {
      left,
      top,
      arrowRelativeX,
      arrowRelativeY: null,
      arrowPosition
    };
  };

  /**
   * getFramePosition - original method name
   */
  getFramePosition = () => this.state.rcsKeyLocation || {
    top: null,
    left: null,
    arrowPosition: null,
    arrowRelativeX: null,
    arrowRelativeY: null
  };

  /**
   * getRcsKeyElement - original method name
   */
  getRcsKeyElement = () => {
    const step = this.props.step;
    return step.modalType === OverlayType.DRAGGABLE && step.onboardingKey ? xT(step.onboardingKey) : null;
  };

  /**
   * acceptTitle - original method name
   */
  acceptTitle = (title: string) => {
    this.setState({
      title,
      titleSetByStep: this.props.step
    });
  };

  /**
   * forceRender - original method name
   */
  forceRender = () => this.setState({
    renderCount: this.state.renderCount + 1
  });

  /**
   * getPositionAndConstraints - original method name
   */
  getPositionAndConstraints = (defaultLocation, initialPosition?: Point) => {
    const framePosition = this.getFramePosition();
    if (framePosition.top && framePosition.left) {
      return {
        initialPosition: new Point(framePosition.left, framePosition.top)
      };
    }
    switch (defaultLocation) {
      case CornerPosition.BOTTOM_LEFT:
        return {
          initialPosition: initialPosition || new Point(PADDING_CONSTANT, PADDING_CONSTANT),
          initialConstraints: {
            x: 'left',
            y: 'bottom'
          }
        };
      case CornerPosition.BOTTOM_RIGHT:
        return {
          initialPosition: initialPosition || new Point(64, 16),
          initialConstraints: {
            x: 'right',
            y: 'bottom'
          }
        };
      case CornerPosition.TOP_RIGHT:
        return {
          initialPosition: initialPosition || new Point(PADDING_CONSTANT, HEADER_HEIGHT_CONSTANT + PADDING_CONSTANT),
          initialConstraints: {
            x: 'right',
            y: 'top'
          }
        };
      case CornerPosition.CENTER:
      default:
        return {
          initialPosition: initialPosition || new Point(window.innerWidth / 2 - this.width / 2, window.innerHeight / 2 - this.height / 2)
        };
    }
  };

  // Refactored render method split into smaller parts
  render() {
    const step = this.props.step;
    const framePosition = this.getFramePosition();
    const contextValue = {
      acceptTitle: this.acceptTitle,
      dismissModal: this.props.dismissModal,
      onClickPrimaryCta: this.props.onClickPrimaryCta,
      forceRender: this.forceRender
    };
    const content = jsx(Uj.Provider, {
      value: this.forceRender,
      children: jsx(step.element, {
        ...contextValue
      })
    });
    return wrapWithTracking(this.renderModalType(step, framePosition, content), step.trackingContextName, step.trackingProperties, step.trackingEnabled);
  }

  // Extracted render logic for modal types
  renderModalType = (step: any, framePosition: any, content: any) => {
    switch (step.modalType) {
      case OverlayType.DRAGGABLE:
        return this.renderDraggableModal(step, framePosition, content);
      case OverlayType.FEATURE_UPDATE:
        return this.renderFeatureUpdateModal(step, content);
      case OverlayType.WALK_THROUGH:
        return this.renderWalkThroughModal(step, content);
      case OverlayType.WELCOME:
        return this.renderWelcomeModal(step, content);
      case OverlayType.SELF_CONTAINED:
        return content;
      case OverlayType.POINTER:
        return this.renderPointerModal(step, content);
      case OverlayType.ANNOUNCEMENT_POINTER:
        return this.renderAnnouncementPointerModal(step, content);
      default:
        return content;
    }
  };
  renderDraggableModal = (step: any, framePosition: any, content: any) => {
    const {
      initialPosition,
      initialConstraints
    } = this.getPositionAndConstraints(step.defaultLocation, step.initialPosition);
    const title = typeof step.title === 'function' ? step.title() : step.title;
    const displayTitle = this.state.title || title;
    const highlightKey = step.onboardingKey || step.highlightOnlyKey;
    return jsxs(Fragment, {
      children: [highlightKey && !step.disableHighlight && jsx(_$$x2, {
        target: highlightKey
      }), jsxs(DraggableModalManager, {
        acceptHeight: this.acceptHeight,
        animatedIn: true,
        arrowPosition: step.hideArrow ? undefined : nullishCoalesce(framePosition.arrowPosition),
        arrowRelativeX: step.hideArrow ? undefined : nullishCoalesce(framePosition.arrowRelativeX),
        arrowRelativeY: step.hideArrow ? undefined : nullishCoalesce(framePosition.arrowRelativeY),
        disableDragging: step.disableDragging,
        dragHeaderOnly: !!displayTitle,
        headerClassName: step.headerClassName,
        initialConstraints,
        initialPosition,
        initialWidth: this.width,
        onClose: this.props.dismissModal,
        title: displayTitle,
        zIndex: step.zIndex,
        children: [content, step.disableFooter ? null : jsxs(iy, {
          className: step.footerClassName,
          children: [!step.hideStepCounter && step.stepCounter && jsx('div', {
            className: _$$S,
            children: step.stepCounter
          }), jsxs('div', {
            className: v0,
            children: [step.additionalButton && jsx('div', {
              className: cssBuilderInstance.ml8.$,
              children: jsx(AdditionalButton, {
                additionalButton: step.additionalButton,
                dismissModal: this.props.dismissModal,
                dispatch: this.props.dispatch
              })
            }), jsx('div', {
              className: cssBuilderInstance.ml8.$,
              children: jsx(WithTrackedButton, {
                ref: this.nextButtonRef,
                onClick: this.props.onClickPrimaryCta,
                trackingProperties: {
                  trackingDescriptor: step.ctaTrackingDescriptor
                },
                disabled: !!step.ctaIsLoading,
                children: jsx(LoadingRenderer, {
                  isLoading: !!step.ctaIsLoading,
                  className: zP,
                  children: () => jsx('div', {
                    children: step.ctaText
                  })
                })
              })
            })]
          })]
        })]
      })]
    });
  };
  renderFeatureUpdateModal = (step: any, content: any) => jsx(FeatureUpdateModal, {
    width: this.width,
    onAdditionalExplicitDismiss: this.props.additionalOnExplicitDismiss,
    onDismissModal: this.props.dismissModal,
    children: content
  });
  renderWalkThroughModal = (step: any, content: any) => jsxs(Fragment, {
    children: [!step.disableHighlight && jsx(_$$x2, {
      target: step.onboardingKey
    }), jsx(CR, {
      additionalOnExplicitDismiss: this.props.additionalOnExplicitDismiss,
      className: step.className,
      disableClickOutsideToHide: step.disableClickOutsideToHide,
      dismissModal: this.props.dismissModal,
      height: step.height,
      hideCloseButton: step.hideCloseButton,
      pointerForegroundColor: step.pointerForegroundColor,
      shouldCenterArrow: step.shouldCenterArrow,
      shouldDismissWhenLostDOMTarget: step.shouldDismissWhenLostDOMTarget,
      targetKey: step.onboardingKey,
      topPadding: step.topPadding,
      width: step.width,
      children: content
    })]
  });
  renderWelcomeModal = (step: any, content: any) => jsxs(Fragment, {
    children: [step.fullscreen && jsx('div', {
      className: qg
    }), jsx(WelcomeModal, {
      onDismissModal: this.props.dismissModal,
      children: jsx(TabLoop, {
        children: content
      })
    })]
  });
  renderPointerModal = (step: any, content: any) => jsxs(Fragment, {
    children: [step.showHighlight && jsx(_$$x2, {
      target: step.onboardingKey
    }), jsx(NJ, {
      dismissModal: this.props.dismissModal,
      targetKey: step.onboardingKey,
      width: step.width,
      topPadding: step.topPadding,
      shouldCenterArrow: step.shouldCenterArrow,
      shouldNotWrapInParagraphTag: step.shouldNotWrapInParagraphTag,
      arrowPosition: step.arrowPosition,
      onTargetLost: step.onTargetLost,
      children: content
    })]
  });
  renderAnnouncementPointerModal = (step: any, content: any) => {
    const title = typeof step.title === 'function' ? step.title() : step.title;
    return jsx(OA, {
      arrowPosition: step.arrowPosition,
      bottomLeftText: step.stepCounter,
      ctaText: step.ctaText,
      dismissModal: this.props.dismissModal,
      onClickPrimaryCta: this.props.onClickPrimaryCta,
      onClickSecondaryCta: step.preventDismissOnClickSecondaryCta ? noop : this.props.dismissModal,
      secondaryCtaText: step.secondaryCtaText,
      shouldCenterArrow: step.shouldCenterArrow,
      shouldCenterModal: step.shouldCenterModal,
      targetKey: step.onboardingKey,
      title,
      topPadding: step.topPadding,
      width: step.width,
      children: content
    });
  };
}

// Refactored helper components with TS docs

/**
 * FeatureUpdateModal - refactored from N function
 */
function FeatureUpdateModal({
  children,
  width,
  onAdditionalExplicitDismiss,
  onDismissModal
}: {
  children: any;
  width: number;
  onAdditionalExplicitDismiss?: () => void;
  onDismissModal: () => void;
}) {
  const tracking = useTracking();
  const handleClose = useCallback(({
    source
  }: {
    source: string;
  }) => {
    if (source === 'button') {
      const context = tracking.name;
      logAndTrackCTA({
        ...tracking.properties,
        ...(context != null ? {
          trackingContext: context
        } : {}),
        text: 'Close'
      });
    }
    onAdditionalExplicitDismiss?.();
    onDismissModal();
  }, [onAdditionalExplicitDismiss, onDismissModal, tracking]);
  const manager = useModalManager({
    open: true,
    onClose: handleClose
  });
  return jsx(ModalRootComponent, {
    manager,
    width: width ?? 'fit-content',
    children: jsx(DialogContents, {
      children: jsx(DialogBody, {
        padding: 0,
        children
      })
    })
  });
}

/**
 * WelcomeModal - refactored from P function
 */
function WelcomeModal({
  children,
  onDismissModal
}: {
  children: any;
  onDismissModal: () => void;
}) {
  const manager = useModalManager({
    open: true,
    onClose: onDismissModal,
    preventUserClose: true
  });
  return jsx(ModalRootComponent, {
    manager,
    width: 'fit-content',
    children: jsx(DialogContents, {
      children: jsx(DialogBody, {
        padding: 0,
        children
      })
    })
  });
}

/**
 * AdditionalButton - refactored from O function
 */
function AdditionalButton({
  additionalButton,
  dismissModal,
  dispatch
}: {
  additionalButton: any;
  dismissModal: () => void;
  dispatch: any;
}) {
  if (!additionalButton) return null;
  const trackingProps = additionalButton.textForTracking ? {
    text: additionalButton.textForTracking()
  } : {};
  return additionalButton.onClickBehavior === 'link' ? jsx(TrackedLinkButton, {
    href: additionalButton.href,
    variant: 'secondary',
    trackingProperties: trackingProps,
    newTab: true,
    children: additionalButton.label
  }) : jsx(WithTrackedButton, {
    onClick: () => {
      additionalButton.onClick(dispatch);
      dismissModal();
    },
    trackingProperties: trackingProps,
    variant: 'secondary',
    children: additionalButton.label
  });
}
export const i = RcsFrame;
