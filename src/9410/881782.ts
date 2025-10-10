import { useContext, useEffect, useRef } from 'react';
import { TeamTemplateType } from '../905/79930';
import { useNavigateToViewport } from '../905/104740';
import { ServiceCategories } from '../905/165054';
import { permissionScopeHandler } from '../905/189185';
import { trackEventAnalytics } from '../905/449184';
import { FlashActions } from '../905/573154';
import { endPerformanceSpan, startPerformanceSpan } from '../905/670985';
import { logError, logInfo } from '../905/714362';
import { selectUserFlag } from '../905/940356';
import { postUserFlag } from '../905/985254';
import { useAtomValueAndSetter, useSetAtom } from '../figma_app/27355';
import { getHubFileVersionsThunk } from '../figma_app/49598';
import { $2, bn, GF, h0, HQ, JJ, mf, NI, zu } from '../figma_app/61403';
import { isRectInsideViewport, viewportToScreen } from '../figma_app/62612';
import { getObservableValue } from '../figma_app/84367';
import { Fz } from '../figma_app/106207';
import { isColorDark, whiteColor, blackColor } from '../figma_app/191804';
import { xT } from '../figma_app/195407';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { viewportNavigatorContext } from '../figma_app/298911';
import { findNodeMatching, findVisibleChild, findLatestNodeMatching } from '../figma_app/387100';
import { fullscreenValue } from '../figma_app/455680';
import { $i, a8, Dh, Ds, H7, iB, jE, jr, Lw, nG, oO, Sf, WW } from '../figma_app/467440';
import { $1, dK, L7, mF, tF, Y4, YX } from '../figma_app/631279';
import { getPropertiesPanelTab, setPropertiesPanelTab, clearSelection } from '../figma_app/741237';
import { SceneGraphHelpers, AppStateTsApi, DesignWorkspace, Fullscreen, CustomPosition, LayoutTabType, PluginHelpers, DesignGraphElements, InteractionCpp, PaintTools, SourceType } from '../figma_app/763686';
import { getFalseValue } from '../figma_app/897289';
import { useDispatch, useSelector } from 'react-redux';
let O = getFalseValue() ? 0 : 300;
class L {
  constructor(e, t, i, r, n, s, o, l, d, c, u, p, h, m, f, g, _, x, y, C, v) {
    this.setCursorBotX = e;
    this.setCursorBotY = t;
    this.setCursorBotChat = i;
    this.setCursorBotAnimationDuration = r;
    this.setCursorBotTutorialPhase = n;
    this.setCursorType = s;
    this.setCursorDirection = o;
    this.setToolbarActionWithSimulatedHover = l;
    this.setCursorBotAnimationLayerPosition = d;
    this.setCursorBotOverlayType = c;
    this.setCursorBotTutorialDuration = u;
    this.hasWaved = p;
    this.cursorBotX = h;
    this.cursorBotY = m;
    this.getViewportInfo = f;
    this.navigate = g;
    this.sceneGraph = _;
    this.infoForSentry = x;
    this.dispatch = y;
    this.insertTemplate = C;
    this.appModel = v;
    this.waitForDuration = (e, t) => new Promise(i => {
      this.setTimeoutWrapper({
        callback: i,
        delay: getFalseValue() && !t ? 0 : e,
        isBlockingTutorialExecution: !0
      });
    });
    this.unblockUserEventsTimeout = null;
    this.blockUserEvents = () => {
      AppStateTsApi.editorState().shouldBlockUserEvents.set(!0);
      getFalseValue() || (this.unblockUserEventsTimeout = setTimeout(() => {
        this.unblockUserEvents();
      }, 6e4));
    };
    this.unblockUserEvents = () => {
      this.setCursorBotTutorialPhase(h0.AWAITING_PLAYBACK);
      AppStateTsApi.editorState().shouldBlockUserEvents.set(!1);
      this.unblockUserEventsTimeout && clearTimeout(this.unblockUserEventsTimeout);
      this.unblockUserEventsTimeout = null;
    };
    this.animateChat = (e, t) => {
      if (e > t.length || this.shouldStop) return;
      let i = t.slice(0, e);
      this.setCursorBotChat(i);
      this.setTimeoutWrapper({
        callback: () => {
          this.animateChat(e + 1, t);
        },
        delay: getFalseValue() ? 0 : 35,
        isBlockingTutorialExecution: !1
      });
    };
    this.startingStateHubFiles = {};
    this.shouldStop = !1;
    this.timeoutIds = [];
    this.pendingCallbacksToRun = [];
  }
  runTutorial(e, t) {
    let i = async () => {
      for (let t of (await this.setupStateAndCanvas(e), e.steps)) {
        if (this.shouldStop) return;
        try {
          await this.transition(t, e.name);
        } catch (i) {
          this.logErrorAndStopTutorial('Could not execute step', {
            step: t,
            err: i,
            tutorialName: e.name
          });
          return;
        }
      }
      this.resetStateAndMarkTutorialComplete(e.tutorialPlayedUserFlag, t);
    };
    startPerformanceSpan(tF, ServiceCategories.UNOWNED);
    let r = window.performance.now();
    this.currentTutorialRunningPromise = i();
    this.currentTutorialRunningPromise.finally(() => {
      endPerformanceSpan(tF);
      let t = window.performance.now() - r;
      logInfo(tF, 'Tutorial completed or stopped', {
        elapsedDuration: t,
        tutorialName: e.name
      });
    });
    return this.currentTutorialRunningPromise;
  }
  insertStartingStateFromHubFile({
    hubFileId: e,
    nodeWidth: t,
    nodeHeight: i,
    tutorialName: r
  }) {
    if (!e) throw new Error('Hub file ID is not provided');
    let n = async e => {
      let n = InteractionCpp.findBoundsToCenterNewTopLevelNode(t + 88, i);
      let s = n.origin.x + 88;
      let o = n.origin.y;
      await this.centerViewportAroundCanvasRect({
        x: s,
        y: o,
        width: t,
        height: i
      });
      await this.waitForDuration(this.moveCursorBot({
        x: s + t / 2,
        y: o + i / 2,
        coordinateType: 'canvas',
        animationDuration: 600
      }));
      await this.transition({
        type: HQ.SET_CHAT,
        message: 'Here\u2019s another example...'
      }, r);
      await this.insertTemplate({
        template: {
          type: TeamTemplateType.HubFile,
          template: e
        },
        userTriggered: !1,
        editScopeType: SourceType.ONBOARDING,
        triggeredFrom: 'cursor-bot',
        templateInsertionDirection: CustomPosition.CUSTOM_POSITION,
        templateCustomPosition: {
          x: s,
          y: o
        },
        selectTemplateAfterInsertion: !0
      });
      await this.waitForDuration(500);
    };
    return this.startingStateHubFiles[e] ? n(this.startingStateHubFiles[e]) : new Promise((t, i) => {
      this.dispatch(getHubFileVersionsThunk({
        hubFileId: e,
        callback: async e => {
          try {
            this.startingStateHubFiles[e.id] = e;
            await n(e);
            t();
          } catch (e) {
            i(e);
          }
        }
      }));
    });
  }
  logSentryError(e, t) {
    logError(tF, e, t, {
      reportAsSentryError: !0
    });
  }
  logErrorAndStopTutorial(e, t) {
    this.logSentryError(e, t);
    this.dispatch(FlashActions.error('Could not run tutorial. Please try again later.'));
    this.stopCurrentTutorial({
      tutorialName: t.tutorialName,
      stopTrigger: mf.STATE_MANAGER_ERROR,
      errorMessage: e,
      nodeName: t.name
    });
  }
  async stopCurrentTutorial(e) {
    this.shouldStop = !0;
    this.timeoutIds.forEach(e => clearTimeout(e));
    this.pendingCallbacksToRun.forEach(e => e());
    await this.currentTutorialRunningPromise;
    this.resetCursorBotStateToDefaults();
    this.unblockUserEvents();
    e && trackEventAnalytics('Cursor Bot Tutorial Stopped', {
      ...e
    });
  }
  updatePositionState(e, t) {
    this.cursorBotX = e;
    this.cursorBotY = t;
  }
  updateSceneGraphReference(e) {
    this.sceneGraph = e;
  }
  updateInfoForSentry(e) {
    this.infoForSentry = e;
  }
  updateAppModel(e) {
    this.appModel = e;
  }
  updateHasWaved(e) {
    this.hasWaved = e;
  }
  setTimeoutWrapper({
    callback: e,
    delay: t,
    isBlockingTutorialExecution: i
  }) {
    this.timeoutIds.push(setTimeout(e, t));
    i && this.pendingCallbacksToRun.push(e);
  }
  resetCursorBotStateToDefaults() {
    this.tutorialParentNode = void 0;
    this.setCursorBotX(Lw);
    this.setCursorBotY(WW);
    this.setCursorBotChat('');
    this.setCursorBotAnimationDuration(0);
    this.setCursorType(PaintTools.DEFAULT);
    this.setToolbarActionWithSimulatedHover(void 0);
    this.setCursorDirection(zu.DEFAULT);
    this.setCursorBotOverlayType(JJ.CANVAS);
    this.timeoutIds = [];
    this.pendingCallbacksToRun = [];
  }
  async navigateToPageNodesOrDefaultViewport() {
    let e = this.sceneGraph.getCurrentPage()?.childrenGuids;
    e && e.length > 0 ? PluginHelpers.scrollAndZoomIntoView(e) : await this.navigate({
      centerX: 0,
      centerY: 0,
      scale: 3
    });
  }
  getSelectedNodeIfMatches(e) {
    if (Fullscreen.getFirstSelectedNodeIdForCurrentPage() !== '') {
      let t = Fullscreen.getFirstSelectedNodeIdForCurrentPage();
      let i = this.sceneGraph.get(t);
      if (i && e(i, this.sceneGraph)) return i;
    }
  }
  computeAndSetTutorialDuration(e) {
    let t = e.duration;
    if (e.startingState) {
      let {
        centerNodeMatcher,
        resetStartingState
      } = e.startingState;
      !findNodeMatching(centerNodeMatcher, this.sceneGraph) && resetStartingState && (t += 3e3);
    }
    this.hasWaved || (t += Y4 + YX);
    this.setCursorBotTutorialDuration(t);
    logInfo(tF, 'Estimated tutorial duration', {
      tutorialDuration: t,
      tutorialName: e.name
    });
  }
  async setupStateAndCanvas(e) {
    if (this.blockUserEvents(), this.shouldStop = !1, this.timeoutIds = [], this.computeAndSetTutorialDuration(e), e.startingViewportFrameType && this.setCursorBotOverlayType(e.startingViewportFrameType), this.setCursorBotTutorialPhase(h0.PLAYING), this.hasWaved || (this.setTimeoutWrapper({
      callback: () => {
        this.hasWaved = !0;
        this.dispatch(postUserFlag({
          cursor_bot_v2_has_greeted_with_wave: !0
        }));
      },
      delay: Y4,
      isBlockingTutorialExecution: !1
    }), await this.transition({
      type: HQ.SET_CHAT,
      message: 'Certainly! Here\u2019s how...',
      additionalDelay: YX,
      preDelay: Y4
    }, e.name)), void 0 !== e.startingState) {
      let t;
      let {
        centerNodeMatcher,
        prioritizeSelectedNode,
        resetStartingState
      } = e.startingState;
      if (prioritizeSelectedNode && (t = this.getSelectedNodeIfMatches(centerNodeMatcher)), t || (t = findLatestNodeMatching(centerNodeMatcher, this.sceneGraph)), !t && resetStartingState) {
        try {
          await this.insertStartingStateFromHubFile({
            ...resetStartingState,
            tutorialName: e.name
          });
          t = findNodeMatching(centerNodeMatcher, this.sceneGraph);
        } catch (t) {
          this.logErrorAndStopTutorial('Could not insert starting state from hub file for tutorial', {
            err: t,
            tutorialName: e.name
          });
          return;
        }
      }
      if (t) {
        this.tutorialParentNode = findVisibleChild(this.sceneGraph, t.guid) ?? void 0;
        let e = {
          centerX: t.absoluteBoundingBox.x + t.absoluteBoundingBox.w / 2,
          centerY: t.absoluteBoundingBox.y + t.absoluteBoundingBox.h / 2,
          scale: 0.2
        };
        let i = PluginHelpers.getViewportBounds();
        let r = dK(t, {
          width: i.width,
          height: i.height,
          zoom: this.getViewportInfo().zoomScale
        });
        r == null || isNaN(r) || (e.scale = r);
        await this.navigate(e);
      } else {
        await this.navigateToPageNodesOrDefaultViewport();
      }
    } else {
      await this.navigateToPageNodesOrDefaultViewport();
    }
  }
  resetStateAndMarkTutorialComplete(e, t) {
    setTimeout(() => {
      this.dispatch(postUserFlag({
        [e]: !0
      }));
      t?.();
      this.resetCursorBotStateToDefaults();
      this.unblockUserEvents();
    }, O);
  }
  async centerViewportAroundCanvasRect(e, t = !1) {
    let {
      x,
      y,
      width,
      height
    } = e;
    let s = this.getViewportInfo();
    if (t && isRectInsideViewport(e, s)) return;
    let o = s.zoomScale;
    (width * o > s.width || height * o > s.height) && (o = Math.min(s.width / width, s.height / height) / 1.1);
    await this.navigate({
      centerX: x + width / 2,
      centerY: y + height / 2,
      scale: o
    });
  }
  moveCursorBot({
    x: e,
    y: t,
    coordinateType: i,
    animationDuration: r
  }) {
    if (i === 'canvas') {
      let i = this.getViewportInfo();
      let r = viewportToScreen(i, {
        x: e,
        y: t
      });
      e = r.x + i.x;
      t = r.y + i.y;
    }
    r = r || function (e, t, i, r) {
      let n = Math.abs(e - t);
      let a = Math.abs(i - r);
      return Math.min(Math.round(1.6 * Math.sqrt(n * n + a * a)), 3e3);
    }(this.cursorBotX, e, this.cursorBotY, t);
    this.setCursorBotAnimationDuration(r);
    this.setCursorBotX(e);
    this.setCursorBotY(t);
    return r;
  }
  repositionNode(e, t, i) {
    permissionScopeHandler.onboarding('reposition-node', () => e.relativeTransform = {
      ...e.relativeTransform,
      m02: t,
      m12: i
    });
  }
  async insertNode(e, t, i, r, n) {
    let s;
    if (e.nodeType === 'RECTANGLE') {
      let t = await mF({
        imgSrc: e.imgSrc,
        desiredWidth: e.width,
        desiredHeight: e.height
      });
      s = t ? this.sceneGraph.get(t) : null;
    } else {
      s = permissionScopeHandler.onboarding('create-node', () => this.sceneGraph.createNode(e.nodeType));
    }
    if (!s) return null;
    if (permissionScopeHandler.onboarding('size', () => {
      s && SceneGraphHelpers.setSelectedNodeAndCanvas(s.guid, !1);
    }), n) {
      let e = findNodeMatching(n, this.sceneGraph, this.tutorialParentNode);
      permissionScopeHandler.onboarding('append-child', () => s && e?.appendChild(s));
    }
    if (this.repositionNode(s, i, r), permissionScopeHandler.onboarding('rename-node', () => {
      s && (s.name = t);
    }), e.nodeType === 'FRAME') {
      permissionScopeHandler.onboarding('resize-frame', () => s?.resizeWithoutConstraints(e.width || 100, e.height || 100));
    } else if (e.nodeType === 'TEXT') {
      Fullscreen.triggerAction('set-tool-default', null);
      this.setCursorType(PaintTools.DEFAULT);
      let t = s.parentNode;
      if (t !== null) {
        let e = t.type === 'CANVAS' ? t.backgroundColor : t.fills[0].color;
        permissionScopeHandler.onboarding('set-text-color', () => {
          s && (s.fills = [{
            ...s.fills[0],
            color: isColorDark(e || whiteColor) ? whiteColor : blackColor
          }]);
        });
      }
      let i = e.text.length;
      let r = e.typingDurationPerCharMs || 50;
      let n = 500;
      for (let t = 0; t < i; t++) {
        this.setTimeoutWrapper({
          callback: () => {
            permissionScopeHandler.onboarding('set-text', () => {
              s?.spliceCharacters(s.textData?.characters?.length ?? t, s.textData?.characters?.length ?? t, e.text[t], 'BEFORE');
            });
          },
          delay: n,
          isBlockingTutorialExecution: !1
        });
        n += Math.max(r - t, 40);
      }
      e.shouldCenterAlign && this.setTimeoutWrapper({
        callback: () => {
          permissionScopeHandler.onboarding('set-text-horizontal-alignment', () => {
            s && (s.textAlignHorizontal = 'CENTER', s.textAlignVertical = 'CENTER');
          });
        },
        delay: n,
        isBlockingTutorialExecution: !1
      });
      await this.waitForDuration(n);
    }
    return s;
  }
  getCursorBotNodeInsertionLocation(e) {
    let t;
    if (e.locationType === bn.INSIDE_SCENE_NODE) {
      let {
        parentMatcher,
        useDefaultLocationIfParentNotFound
      } = e.location;
      let n = findNodeMatching(parentMatcher, this.sceneGraph, this.tutorialParentNode);
      if (!n) {
        return useDefaultLocationIfParentNotFound ? this.getCursorBotNodeInsertionLocation({
          ...e,
          locationType: bn.DEFAULT
        }) : void 0;
      }
      let a = e.location?.offsetX ?? 0;
      let s = e.location?.offsetY ?? 0;
      let {
        absoluteBoundingBox: {
          x,
          y,
          w,
          h
        }
      } = n;
      e.location.shouldPositionRelativeToCenterOfParent && (a += w / 2, s += h / 2);
      t = {
        cursorBotX: x + a,
        cursorBotY: y + s,
        insertionX: a,
        insertionY: s
      };
    } else if (e.locationType === bn.CANVAS_COORDINATE) {
      t = {
        cursorBotX: e.location.x,
        cursorBotY: e.location.y,
        insertionX: e.location.x,
        insertionY: e.location.y
      };
    } else {
      let i = InteractionCpp.findBoundsToCenterNewTopLevelNode(e.payload.width ?? 100, e.payload.height ?? 100);
      t = {
        cursorBotX: i.origin.x,
        cursorBotY: i.origin.y,
        insertionX: i.origin.x,
        insertionY: i.origin.y
      };
    }
    if (void 0 !== e.cursorPosition && e.nodeDrawingAnimationDuration == null) {
      let i = e.payload.width ?? 100;
      let r = e.payload.height ?? 100;
      switch (e.cursorPosition) {
        case $2.BOTTOM_LEFT:
          t.cursorBotY += r;
          break;
        case $2.BOTTOM_RIGHT:
          t.cursorBotX += i;
          t.cursorBotY += r;
        case $2.TOP_LEFT:
      }
    }
    return t;
  }
  async transition(e, t) {
    if (this.shouldStop) return;
    let i = async () => {
      switch (e.type) {
        case HQ.SET_CHAT:
          {
            e.preDelay && (await this.waitForDuration(e.preDelay));
            let {
              message
            } = e;
            e.hasBackupMessage && e.shouldShowBackupMessage(this.sceneGraph) && (t = e.backupMessage);
            this.animateChat(1, message);
            return;
          }
        case HQ.CLEAR_CHAT:
          this.setCursorBotChat('');
          return;
        case HQ.TARGET_DOM_NODE:
          {
            let i = xT(e.dataOnboardingKey);
            if (!i) {
              let i = {
                name: e.dataOnboardingKey,
                tutorialName: t,
                ...this.infoForSentry
              };
              e.continueIfNotFound ? this.logSentryError('Failed to find DOM node to target', i) : this.logErrorAndStopTutorial('Failed to find DOM node to target', i);
              return;
            }
            let {
              targetX,
              targetY
            } = L7(i, e.position, e.offset);
            await this.waitForDuration(this.moveCursorBot({
              x: targetX,
              y: targetY,
              coordinateType: 'dom',
              animationDuration: e.cursorBotMovementAnimationDuration
            }));
            e.triggerHoverOfItemWithName && this.setToolbarActionWithSimulatedHover(e.triggerHoverOfItemWithName);
            return;
          }
        case HQ.TARGET_SCENE_NODE:
          {
            let i = findNodeMatching(e.meetsConditions, this.sceneGraph, this.tutorialParentNode);
            if (e.prioritizeSelectedNode && (i = this.getSelectedNodeIfMatches(e.meetsConditions) ?? i), !i) {
              e.continueIfNotFound || this.logErrorAndStopTutorial('Failed to find scene node to target', {
                name: e.nodeNameForLogging,
                tutorialName: t
              });
              return;
            }
            await this.centerViewportAroundCanvasRect({
              x: i.absoluteBoundingBox.x,
              y: i.absoluteBoundingBox.y,
              width: i.absoluteBoundingBox.w,
              height: i.absoluteBoundingBox.h
            }, !0);
            let r = e.position || {
              x: GF.RIGHT,
              y: NI.BOTTOM
            };
            let {
              targetX,
              targetY
            } = L7(i, r, e.offset);
            await this.waitForDuration(this.moveCursorBot({
              x: targetX,
              y: targetY,
              coordinateType: 'canvas',
              animationDuration: e.cursorBotMovementAnimationDuration
            }));
            e.shouldSelect && SceneGraphHelpers.setSelectedNodeAndCanvas(i.guid, !1);
            return;
          }
        case HQ.SELECT_SCENE_NODE:
          {
            let i;
            if (e.prioritizeSelectedNode && (i = this.getSelectedNodeIfMatches(e.meetsConditions)), i || (i = findNodeMatching(e.meetsConditions, this.sceneGraph, this.tutorialParentNode)), !i) {
              this.logErrorAndStopTutorial('Failed to find scene node to select', {
                name: e.nodeNameForLogging,
                tutorialName: t
              });
              return;
            }
            SceneGraphHelpers.setSelectedNodeAndCanvas(i.guid, !1);
            return;
          }
        case HQ.INSERT_NODE:
          {
            let i = this.getCursorBotNodeInsertionLocation(e);
            if (void 0 === i) {
              this.logErrorAndStopTutorial('Could not find parent scene node to insert node', {
                name: e.nodeNameForLogging,
                tutorialName: t
              });
              return;
            }
            let r = e.payload.height ?? 100;
            let n = e.payload.width ?? 100;
            await this.centerViewportAroundCanvasRect({
              x: i.cursorBotX,
              y: i.cursorBotY,
              width: n,
              height: r
            }, !0);
            await this.waitForDuration(this.moveCursorBot({
              x: i.cursorBotX,
              y: i.cursorBotY,
              coordinateType: 'canvas',
              animationDuration: e.cursorMovementAnimationDuration || 600
            }));
            e.nodeDrawingAnimationDuration && e.payload.nodeType === 'FRAME' && (this.setCursorBotAnimationLayerPosition({
              x: i.cursorBotX,
              y: i.cursorBotY,
              width: n,
              height: r,
              duration: e.nodeDrawingAnimationDuration
            }), await this.waitForDuration(this.moveCursorBot({
              x: i.cursorBotX + n,
              y: i.cursorBotY + r,
              coordinateType: 'canvas',
              animationDuration: e.nodeDrawingAnimationDuration
            })));
            let a = i.insertionX ?? i.cursorBotX;
            let s = i.insertionY ?? i.cursorBotY;
            await this.insertNode(e.payload, e.nodeName, a, s, e.locationType === bn.INSIDE_SCENE_NODE ? e.location.parentMatcher : void 0);
            this.setCursorBotAnimationLayerPosition(null);
            return;
          }
        case HQ.MOVE_CURSOR_TO_CENTER_SCREEN:
          return this.waitForDuration(this.moveCursorBot({
            x: this.getViewportInfo().offsetX,
            y: this.getViewportInfo().offsetY,
            coordinateType: 'canvas',
            animationDuration: e.cursorBotMovementAnimationDuration
          }));
        case HQ.CHANGE_TOOL:
          [DesignGraphElements.FRAME, DesignGraphElements.TYPE].includes(e.toolType) ? (e.toolType === DesignGraphElements.TYPE ? Fullscreen.triggerAction('set-tool-type', null) : e.toolType === DesignGraphElements.FRAME && Fullscreen.triggerAction('set-tool-frame', null), this.setCursorType(PaintTools.CROSSHAIR)) : e.toolType === DesignGraphElements.HAND ? (Fullscreen.triggerAction('set-tool-hand', null), this.setCursorType(PaintTools.HAND)) : e.toolType === DesignGraphElements.NONE && (Fullscreen.triggerAction('set-tool-default', null), this.setCursorType(PaintTools.DEFAULT));
          return;
        case HQ.MOVE_VIEWPORT:
          if (e.movementType === 'displace') {
            return this.navigate({
              centerX: this.getViewportInfo().offsetX + e.xDisplacement,
              centerY: this.getViewportInfo().offsetY + e.yDisplacement,
              scale: this.getViewportInfo().zoomScale
            });
          }
          return this.navigate({
            centerX: e.centerX,
            centerY: e.centerY,
            scale: e.scale || this.getViewportInfo().zoomScale
          });
        case HQ.ADJUST_ZOOM_LEVEL:
          return this.navigate({
            centerX: this.getViewportInfo().offsetX,
            centerY: this.getViewportInfo().offsetY,
            scale: e.scale
          });
        case HQ.SET_CURSOR_DIRECTION:
          this.setCursorDirection(e.direction);
          return;
        case HQ.SET_PROPERTIES_PANEL_TAB:
          setPropertiesPanelTab(e.tab);
          return;
        case HQ.UPDATE_SELECTED_NODE_PROPERTIES:
          {
            let t = Fullscreen.getFirstSelectedNodeIdForCurrentPage();
            let i = this.sceneGraph.get(t);
            if (!i) {
              logError(tF, 'Failed to find selected node to update', void 0, {
                reportAsSentryError: !0
              });
              return;
            }
            this.appModel.activeCanvasEditModeType === LayoutTabType.TEXT && (clearSelection(), SceneGraphHelpers.setSelectedNodeAndCanvas(t, !1));
            fullscreenValue.updateSelectionProperties({
              ...(typeof e.properties == 'function' ? e.properties(i) : e.properties)
            }, {
              shouldCommit: yesNoTrackingEnum.YES,
              editScopeType: SourceType.ONBOARDING
            });
            return;
          }
        case HQ.SCROLL_PROPERTIES_PANEL:
          $1(e.value);
          return;
        case HQ.FOCUS_INPUT:
          {
            let t = document.querySelector(e.selector);
            t ? t.focus() : logError(tF, 'Failed to find input to focus', {
              selector: e.selector
            }, {
              reportAsSentryError: !0
            });
            return;
          }
        case HQ.SET_VIEWPORT_FRAME_TYPE:
          this.setCursorBotOverlayType(e.viewportFrameType);
      }
    };
    await i();
    let r = e.additionalDelay || 0;
    e.type === HQ.SET_CHAT && (r += 35 * e.message.length);
    r > 0 && (await this.waitForDuration(r, e.type === HQ.SET_CHAT));
    await e.callback?.(this.dispatch);
  }
}
export function $$R0() {
  let [e, t] = useAtomValueAndSetter(jr);
  let [i, m] = useAtomValueAndSetter(Sf);
  let f = useSetAtom(H7);
  let g = useSetAtom(nG);
  let _ = useSetAtom(Ds);
  let x = useSetAtom(Dh);
  let y = useSetAtom(a8);
  let b = useSetAtom(iB);
  let C = useSetAtom(oO);
  let v = useSetAtom($i);
  let E = useSetAtom(jE);
  let T = !!selectUserFlag('cursor_bot_v2_has_greeted_with_wave');
  let w = useContext(viewportNavigatorContext);
  let S = useNavigateToViewport();
  let j = useSelector(e => e.mirror.sceneGraph);
  let I = useDispatch<AppDispatch>();
  let {
    insertTemplate
  } = Fz();
  let N = getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  let A = useSelector(e => e.mirror.appModel.showUi);
  let O = useSelector(e => e.mirror.appModel);
  let R = useRef();
  R.current || (R.current = new L(t, m, g, _, y, b, f, C, x, v, E, T, e, i, () => w.getViewportInfo(), S, j, {
    isUiShown: A,
    propertiesPanelTab: N
  }, I, insertTemplate, O));
  useEffect(() => {
    R.current?.updatePositionState(e, i);
  }, [e, i]);
  useEffect(() => {
    R.current?.updateSceneGraphReference(j);
  }, [j]);
  useEffect(() => {
    R.current?.updateInfoForSentry({
      isUiShown: A,
      propertiesPanelTab: N
    });
  }, [N, A]);
  useEffect(() => {
    R.current?.updateAppModel(O);
  }, [O]);
  useEffect(() => {
    R.current?.updateHasWaved(T);
  }, [T]);
  return R.current;
}
export const b = $$R0;