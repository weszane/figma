import { jsx, jsxs } from "react/jsx-runtime";
import r from "classnames";
import { il } from "../vendor/291472";
import { parsePxNumber } from "../figma_app/783094";
import { iA, PC, OV } from "../905/403166";
import { RecordingPureComponent, generateRecordingKey } from "../figma_app/878298";
import { Hn, f6, xD, ri } from "../905/337179";
import { useState, useCallback, useEffect } from "react";
import { KeyCodes } from "../905/63728";
import { O1, KD } from "../figma_app/317394";
import { fullscreenValue } from "../figma_app/455680";
var a = r;
let g = function (e) {
  let t = il.getDefaultSkin();
  let [i, r] = useState(t ? t - 1 : 0);
  let o = t => {
    t += 1;
    fullscreenValue.triggerAction("set-default-emoji-skin-tone", {
      newEmojiSkinTone: t
    });
    e.onInsert();
    setTimeout(() => {
      e.onClear();
    }, 50);
  };
  let l = useCallback(() => (e.forceCloseSkinToneSelector(), !0), [e]);
  O1(l, KD.EDITING_TEXT_FIELD);
  let d = t => {
    let n = e.allSkinTones.length;
    t.keyCode === KeyCodes.UP_ARROW || t.keyCode === KeyCodes.LEFT_ARROW ? (t.stopPropagation(), t.preventDefault(), r((i - 1 + n) % n)) : t.keyCode === KeyCodes.DOWN_ARROW || t.keyCode === KeyCodes.RIGHT_ARROW ? (t.stopPropagation(), t.preventDefault(), r((i + 1) % n)) : (t.keyCode === KeyCodes.ENTER || t.keyCode === KeyCodes.TAB) && (t.stopPropagation(), t.preventDefault(), o(e.allSkinTones[i].skin));
  };
  let c = e => r(e);
  let g = e => i === e;
  useEffect(() => (window.addEventListener("keydown", d, {
    capture: !0
  }), () => window.removeEventListener("keydown", d, {
    capture: !0
  })));
  return jsx("div", {
    role: "listbox",
    onKeyDown: d,
    className: "skin_tone_selector--skinToneSelect--y6dln",
    tabIndex: 0,
    children: e.allSkinTones.map((t, i) => jsx("div", {
      role: "option",
      tabIndex: -1,
      onPointerUp: () => o(i),
      onPointerEnter: () => c(i),
      className: a()({
        "skin_tone_selector--emojiWrapper--ShVCf": !0,
        "skin_tone_selector--figJamEditorSkinToneEmojiSelected--Xy7zc": g(i) && !e.isComments && e.isFigJam,
        "skin_tone_selector--skinToneEmojiSelected--j523O": g(i) && (e.isComments || !e.isFigJam)
      }),
      "aria-selected": g(i),
      children: jsx("img", {
        className: "skin_tone_selector--skinToneEmojiPreview--6BIz1",
        src: t.src,
        alt: ""
      }, t.src)
    }, `${t.emojiName}-${t.skin}`))
  });
};
let f = "30px";
let _ = "emoji_typeahead--emojiPreview--3rFYm";
export class $$A0 extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.getDefaultEmojiSkinTone = () => il.getDefaultSkin() || 1;
    this.hasEmojiSkinTonePreference = () => !!il.getDefaultSkin();
    this.pointerMoved = !1;
    this.state = {
      isPointerDownInTypeahead: !1,
      wasPointerDownInTypeahead: !1,
      isSkinToneSelectorToggled: !1
    };
    this.setWasPointerDownInTypeahead = e => {
      this.setState(t => ({
        ...t,
        wasPointerDownInTypeahead: e
      }));
    };
    this.setIsPointerDownInTypeahead = e => {
      this.setState(t => ({
        ...t,
        isPointerDownInTypeahead: e
      }));
    };
    this.toggleSkinToneSelector = () => {
      this.setState(e => ({
        ...e,
        isSkinToneSelectorToggled: !e.isSkinToneSelectorToggled
      }));
    };
    this.forceCloseSkinToneSelector = () => {
      this.setState(e => ({
        ...e,
        isSkinToneSelectorToggled: !1,
        wasPointerDownInTypeahead: !1,
        isPointerDownInTypeahead: !1
      }));
    };
    this.onEmojiTypeaheadClick = (e, t) => {
      this.props.onInsert();
      this.props.dispatchTypeahead(null);
    };
    this.placeEmoji = e => {
      this.props.dispatchTypeahead({
        ...this.props.typeahead,
        index: e
      });
    };
    this.props.setMaxTypeaheadHeight && this.props.setMaxTypeaheadHeight(this.props.typeahead.maxEmojis * parsePxNumber(f));
  }
  componentDidUpdate(e) {
    e.typeahead.emojis !== this.props.typeahead.emojis && (this.pointerMoved = !1);
    (e.setMaxTypeaheadHeight !== this.props.setMaxTypeaheadHeight || e.typeahead.maxEmojis !== this.props.typeahead.maxEmojis) && this.props.setMaxTypeaheadHeight && this.props.setMaxTypeaheadHeight(this.props.typeahead.maxEmojis * parsePxNumber(f));
  }
  render() {
    let e = this.props.typeahead.emojis.map((e, t) => {
      let r = "";
      let s = this.getDefaultEmojiSkinTone();
      r = e.skins[s - 1] ? e.skins[s - 1].unified : e.skins[0].unified;
      return jsxs(Hn, {
        className: "emoji_typeahead--emojiTypeaheadRow---i-5r",
        selectedClassName: a()({
          "emoji_typeahead--figJamEditorEmojiTypeaheadRowSelected--Xpw-b": !this.props.isComments && this.props.isFigJam,
          "emoji_typeahead--emojiTypeaheadRowSelected--B7eK8": this.props.isComments || !this.props.isFigJam
        }),
        selected: this.props.typeahead.index === t,
        onClick: (e = s) => {
          this.state.isPointerDownInTypeahead || (!this.hasEmojiSkinTonePreference() && i().length > 1 ? this.toggleSkinToneSelector() : this.onEmojiTypeaheadClick(t, e));
        },
        onPointerOver: () => {
          this.pointerMoved && this.placeEmoji(t);
        },
        onPointerDown: () => {
          this.pointerMoved = !0;
          this.placeEmoji(t);
        },
        recordingKey: generateRecordingKey(this.props.recordingKey, t, "item"),
        children: [this.props.isComments ? jsx("p", {
          className: _,
          children: iA(r)
        }) : jsx("img", {
          src: PC(r, this.props.emojiImageSet),
          className: _,
          alt: ""
        }), jsx("p", {
          className: "emoji_typeahead--emojiName--hDLxK",
          children: OV(e, this.props.typeahead.query)
        })]
      }, e.id);
    });
    let t = f6(this.props);
    let i = () => {
      let e = this.props.typeahead.emojis[this.props.typeahead.index];
      return e.skins.map((t, i) => ({
        emojiName: e.id,
        src: PC(t.unified, this.props.emojiImageSet),
        skin: i
      }));
    };
    let r = i().length > 1;
    let s = !this.hasEmojiSkinTonePreference() && r;
    let o = this.state.isSkinToneSelectorToggled && s;
    let u = this.state.wasPointerDownInTypeahead && r;
    let p = o || u;
    let m = [jsx("div", {
      style: {
        height: 6
      }
    }, "emoji-typeahead-top-padding-div"), ...e, jsx("div", {
      style: {
        height: 6
      }
    }, "emoji-typeahead-bottom-padding-div")];
    let h = jsx(g, {
      allSkinTones: i(),
      onInsert: this.props.onInsert,
      onClear: this.props.onClear,
      forceCloseSkinToneSelector: this.forceCloseSkinToneSelector,
      isComments: !!this.props.isComments,
      isFigJam: !!this.props.isFigJam
    }, "skin-tone-selector");
    let f = [...m.slice(0, this.props.typeahead.index + 1), h, ...m.slice(this.props.typeahead.index + 1)];
    return jsx(xD, {
      className: a()({
        "emoji_typeahead--emojiTypeahead--fVmv9": !0,
        "emoji_typeahead--commentsEmojiTypeaheadDown--O8EYO": this.props.isComments && this.props.direction === ri.DOWNWARDS,
        "emoji_typeahead--commentsEmojiTypeaheadUp--RP2hd": this.props.isComments && this.props.direction === ri.UPWARDS
      }),
      dispatchTypeahead: this.props.dispatchTypeahead,
      isPointerDownInTypeahead: this.state.isPointerDownInTypeahead,
      onClear: this.props.onClear,
      onInsert: () => {
        this.state.isSkinToneSelectorToggled || !s || u ? this.props.onInsert() : this.toggleSkinToneSelector();
      },
      onPointerMove: () => this.pointerMoved = !p,
      recordingKey: this.props.recordingKey,
      setIsPointerDownInTypeahead: this.setIsPointerDownInTypeahead,
      setWasPointerDownInTypeahead: this.setWasPointerDownInTypeahead,
      shouldNotClearOnEnter: s,
      shouldNotHandleKeyDown: p,
      typeahead: this.props.typeahead,
      wasPointerDownInTypeahead: this.state.wasPointerDownInTypeahead,
      width: this.props.width,
      zIndex: this.props.zIndex,
      ...t,
      children: p ? f : m
    });
  }
}
$$A0.displayName = "EmojiTypeaheadView";
export const j = $$A0;