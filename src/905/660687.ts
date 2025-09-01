import { Lz, xO, NZ, Pe, Z9, $t, sU, YH } from "../figma_app/770359";
import { h3O, glU, zvt } from "../figma_app/763686";
import { l7 } from "../905/189185";
let s = Lz.baseTheme({
  ".cm-remoteSelection": {
    display: "inline-block",
    height: "100%"
  },
  ".cm-remoteLineSelection": {
    padding: 0,
    margin: "0px 2px 0px 6px"
  },
  ".cm-remoteSelectionCaret": {
    position: "relative",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    marginLeft: "-1px",
    marginRight: "-1px",
    boxSizing: "border-box",
    display: "inline"
  },
  ".cm-remoteSelectionCaretDot": {
    borderRadius: "50%",
    position: "absolute",
    width: ".4em",
    height: ".4em",
    top: "-.2em",
    left: "-.2em",
    backgroundColor: "inherit",
    transition: "transform .3s ease-in-out",
    boxSizing: "border-box"
  },
  ".cm-remoteSelectionCaret:hover > .cm-remoteSelectionCaretDot": {
    transformOrigin: "bottom center",
    transform: "scale(0)"
  },
  ".cm-remoteSelectionInfo": {
    position: "absolute",
    top: "-1.05em",
    left: "-1px",
    fontSize: ".75em",
    fontFamily: "serif",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    userSelect: "none",
    color: "white",
    paddingLeft: "2px",
    paddingRight: "2px",
    zIndex: 101,
    transition: "opacity .3s ease-in-out",
    backgroundColor: "inherit",
    opacity: 0,
    transitionDelay: "0s",
    whiteSpace: "nowrap"
  },
  ".cm-remoteSelectionCaret:hover > .cm-remoteSelectionInfo": {
    opacity: 1,
    transitionDelay: "0s"
  }
});
class o extends xO {
  constructor(e, t, i) {
    super();
    this.color = e;
    this.name = t;
    this.sessionId = i;
  }
  toDOM() {
    let e = document.createElement("span");
    e.className = "cm-remoteSelectionCaret";
    e.style.backgroundColor = this.color;
    e.style.borderColor = this.color;
    let t = document.createElement("div");
    t.className = "cm-remoteSelectionCaretDot";
    let i = document.createElement("div");
    i.className = "cm-remoteSelectionInfo";
    i.appendChild(document.createTextNode(this.name));
    e.textContent = "";
    e.appendChild(document.createTextNode("\u2060"));
    e.appendChild(t);
    e.appendChild(document.createTextNode("\u2060"));
    e.appendChild(i);
    e.appendChild(document.createTextNode("\u2060"));
    return e;
  }
  eq(e) {
    return e.sessionId === this.sessionId;
  }
  compare(e) {
    return e.sessionId === this.sessionId;
  }
  updateDOM() {
    return !1;
  }
  get estimatedHeight() {
    return -1;
  }
  ignoreEvent() {
    return !0;
  }
}
function l(e, t) {
  let i = e.caretAtFront ? e.widecharPositionStart : e.widecharPositionEnd;
  let r = [{
    from: i,
    to: i,
    value: NZ.widget({
      side: e.caretAtFront ? 1 : -1,
      block: !1,
      widget: new o(e.color, e.userName, e.sessionId)
    })
  }];
  if (e.widecharPositionEnd > e.widecharPositionStart) {
    let i = e.color + "33";
    let a = e.widecharPositionStart;
    let s = e.widecharPositionEnd;
    let o = t.lineAt(a);
    let l = t.lineAt(s);
    if (o.number === l.number) r.push({
      from: a,
      to: s,
      value: NZ.mark({
        attributes: {
          style: `background-color: ${i}`
        },
        class: "cm-remoteSelection"
      })
    });else {
      r.push({
        from: a,
        to: o.to,
        value: NZ.mark({
          attributes: {
            style: `background-color: ${i}`
          },
          class: "cm-remoteSelection"
        })
      });
      r.push({
        from: l.from,
        to: s,
        value: NZ.mark({
          attributes: {
            style: `background-color: ${i}`
          },
          class: "cm-remoteSelection"
        })
      });
      for (let e = o.number + 1; e < l.number; e++) {
        let a = t.line(e).from;
        r.push({
          from: a,
          to: a,
          value: NZ.line({
            attributes: {
              style: `background-color: ${i}`
            },
            class: "cm-remoteLineSelection"
          })
        });
      }
    }
  }
  return r;
}
let d = Pe.define({});
export function $$c0(e, t, i) {
  return Z9.define(n => new m(e, n, t, i), {
    provide: () => {
      let t = e();
      if (!t) return [];
      let i = [];
      if (t.isInUnrecoverableBugErrorState() && i.push($t.readOnly.of(!0)), h3O) {
        var a;
        i.push((a = () => h3O ? h3O.computeCollaborativeTextRemoteCursorPositions(t) : [], sU.define({
          create: e => NZ.set(a().flatMap(t => l(t, e.doc)), !0),
          update(e, t) {
            for (let e of t.effects) if (e.is(d)) return NZ.set(a().flatMap(e => l(e, t.state.doc)), !0);
            return e.map(t.changes);
          },
          provide: e => [Lz.decorations.from(e), s]
        })));
      }
      return i;
    }
  });
}
let u = YH.define();
let p = class e {
  constructor(t, i, n = () => {}, r) {
    this.getCollaborativeText = t;
    this.editorView = i;
    this.logVerbose = n;
    this.onLocalChanges = r;
    this.collaborativeTextObserverHandle = null;
    this.collaborativeTextObserverHandle = this.collaborativeText.addObserver(this);
    this.cmAnnotation = e.nextAnnotation++;
    this.checkForDocMismatch(this.editorView.state.doc, "CodeMirror initialization");
  }
  get collaborativeText() {
    let e = this.getCollaborativeText();
    if (!e) throw Error("Collaborative text is not available");
    return e;
  }
  onOperations(e, t) {
    if (this.logVerbose("Collaborative Text", "CodeMirror received ops from collaborative text", {
      matchesOurLocalTag: t === this.collaborativeTextObserverHandle,
      operations: e
    }), t === this.collaborativeTextObserverHandle) return;
    let i = [];
    let n = [u.of(this.cmAnnotation)];
    for (let t of e) "insert" === t.type && void 0 !== t.text ? i.push({
      changes: {
        from: t.widecharPosition,
        to: t.widecharPosition,
        insert: t.text
      },
      annotations: n,
      sequential: i.length > 0,
      selection: t.updateCursor ? {
        anchor: t.widecharPosition + t.widecharLength,
        head: t.widecharPosition + t.widecharLength
      } : void 0
    }) : "delete" === t.type && void 0 !== t.widecharLength && i.push({
      changes: {
        from: t.widecharPosition,
        to: t.widecharPosition + t.widecharLength,
        insert: ""
      },
      annotations: n,
      sequential: i.length > 0,
      selection: t.updateCursor ? {
        anchor: t.widecharPosition,
        head: t.widecharPosition
      } : void 0
    });
    i.length > 0 && this.editorView.dispatch(this.editorView.state.update(...i));
    this.checkForDocMismatch(this.editorView.state.doc, "after applying remote edits");
  }
  onRemoteCursorsChanged() {
    this.editorView.dispatch({
      effects: [d.of()]
    });
  }
  textDidReload() {
    this.logVerbose("Collaborative Text", "CodeMirror reloading text from history");
    let e = this.collaborativeText.computeCurrentText();
    let t = this.editorView.state.doc;
    this.editorView.dispatch({
      changes: [{
        from: 0,
        to: t.length,
        insert: e
      }],
      annotations: [u.of(this.cmAnnotation)]
    });
  }
  onUnrecoverableBugError() {
    setTimeout(() => {
      let e = Pe.appendConfig.of($t.readOnly.of(!0));
      this.editorView.dispatch({
        effects: [e]
      });
    });
  }
  update(e) {
    if (this.relayTextUpdatesToCollaborativeText(e), h3O) {
      if (e.view.hasFocus && e.view.dom.ownerDocument.hasFocus()) {
        let t = e.state.selection.main;
        let i = t.to - t.from;
        let n = i > 0 && t.head === t.from;
        h3O.sendCollaborativeTextCursorPosition(t.from, i, n, this.collaborativeText);
      } else h3O.clearCollaborativeTextCursorPosition();
    }
  }
  relayTextUpdatesToCollaborativeText(e) {
    if (!e.docChanged || 0 === e.transactions.length) return;
    let t = e.transactions.filter(e => e.annotation(u) !== this.cmAnnotation);
    0 !== t.length && (this.logVerbose("Collaborative Text", "CodeMirror informed us of local changes", {
      nonCollabTransactions: t
    }), this.checkForDocMismatch(e.startState.doc, "before CodeMirror updates are applied"), l7.user("codemirror-local-edit", () => {
      for (let e of (this.collaborativeText.startBatch(), t)) e.changes.iterChanges((e, t, i, n, r) => {
        let a = r.sliceString(0, r.length, "\n");
        if (e !== t) {
          let n = t - e;
          this.collaborativeText.createDeletionOp(i, n, !0, this.collaborativeTextObserverHandle ?? 0);
        }
        a.length > 0 && this.collaborativeText.createInsertionOp(i, a.length, a, this.collaborativeTextObserverHandle ?? 0);
      });
      glU?.requestNextCommitMergeWithPrevious(zvt.COLLABORATIVE_TEXT_EDIT);
      this.collaborativeText.endBatch();
      glU?.commit();
      this.checkForDocMismatch(e.state.doc, "after Codemirror edits applied");
      this.onLocalChanges?.();
    }));
  }
  checkForDocMismatch(e, t) {
    this.collaborativeText.isInUnrecoverableBugErrorState() || e.length === this.collaborativeText.textLengthInWideChars() || this.logVerbose("CollaborativePlainTextCodeMirrorExtension", "Collaborative text and editor state are out of sync. This is probably a bug.", {
      collabText: this.collaborativeText.computeCurrentText(),
      doc: e.toString(),
      actionContext: t
    });
  }
  destroy() {
    let e = this.getCollaborativeText();
    e && null !== this.collaborativeTextObserverHandle && (e.removeObserver(this.collaborativeTextObserverHandle), this.collaborativeTextObserverHandle = null);
    h3O && h3O.clearCollaborativeTextCursorPosition();
  }
};
p.nextAnnotation = 1;
let m = p;
export const C = $$c0;