import { throwTypeError } from "../figma_app/465776";
import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import { x1 } from "../905/714362";
import { dZ } from "../figma_app/741237";
import { a as _$$a } from "../5421/59825";
import { $v } from "../figma_app/259678";
import { t8, L_, Lh } from "../figma_app/504321";
import { W } from "../figma_app/331365";
export class $$u0 {
  constructor(e, t, n) {
    this.editor = e;
    this.sendEditToPreview = t;
    this.displayErrorVisualBell = n;
  }
  async addClassesToInspectedElements(e, t, n) {
    this.editor.addLocalComputedStyleEditToSelectedNodes(e);
    let o = dZ(t);
    let i = await this.editor.getCachedOrFetchCodeSnippets(!o);
    if (null === i) {
      x1("direct_manipulation", "No snippets found for addClassToInspectedElements", {}, {
        reportAsSentryError: !0
      });
      this.displayErrorVisualBell(o ? "on_save" : "on_selection");
      return;
    }
    for (let t of i) {
      let i = null;
      for (let n of e) i = this.addClassToInspectedElementAndPreview(n, t, i);
      o && null !== i && (await this.commitToCode({
        classNames: i,
        snippet: t
      }), this.editor.updateAnalyticsRecordClassNameEdit(n));
    }
  }
  addClassToInspectedElementAndPreview(e, t, n) {
    if (null === n) {
      let e = t.editingInfo.classNameAttribute;
      switch (e.type) {
        case "static":
          n = e.value;
          break;
        case "not-set":
          n = "";
          break;
        case "dynamic":
        case "dynamic-identifier":
        case "unknown":
          x1("direct_manipulation", "Unsupported jsx for addClassToInspectedElement", {
            type: e.type
          }, {
            reportAsSentryError: !0
          });
          this.displayErrorVisualBell("on_save");
          return n;
        default:
          throwTypeError(e);
      }
    }
    n = t8({
      existingClassNames: n,
      classToStyles: this.editor.selectedElementsClassToStyles,
      classToAdd: e
    });
    let i = {};
    for (let t of e.cssRules) {
      let e = t.property;
      let n = {
        property: e,
        value: t.value
      };
      for (let o of t.propertiesExpandedFromShorthand.length > 0 ? t.propertiesExpandedFromShorthand : [e]) i[o] = n;
    }
    this.editor.addClassStyleFromLocalEdit(e.className, {
      className: e.className,
      styles: i,
      type: "tailwind"
    });
    this.sendClassnamesToPreview(n, t, e);
    return n;
  }
  sendClassnamesToPreview(e, t, n) {
    let o = {
      sourceCodeClassNames: e,
      sourceCodeJSXCallId: t.sourceCodeJSXCallId,
      classNameToInject: n?.className,
      cssToInject: n ? L_(n) : void 0
    };
    this.sendEditToPreview(o);
  }
  async commitToCode({
    classNames: e,
    allowedRetries: t = 1,
    snippet: n
  }) {
    let {
      folderPath,
      fileName
    } = n;
    let u = $v(UN(), folderPath, fileName);
    let h = !1;
    if (u) {
      let t = n.editingInfo.classNameAttribute;
      _$$a(() => {
        l7.user("direct-manipulation", () => {
          switch (t.type) {
            case "static":
              W(u, n.collaborativeSourceCodeVersion, t.valueStartIndex, t.value, e) || (h = !0);
              break;
            case "not-set":
              {
                let o = ` className="${e}"`;
                W(u, n.collaborativeSourceCodeVersion, t.insertIndex, "", o) || (h = !0);
                break;
              }
            case "dynamic":
            case "dynamic-identifier":
            case "unknown":
              x1("direct_manipulation", "Unsupported jsx for commitToCode", {
                type: t.type
              }, {
                reportAsSentryError: !0
              });
              this.displayErrorVisualBell("on_save");
              break;
            default:
              throwTypeError(t);
          }
        });
      });
    }
    if (h) {
      if (t > 0) {
        let n = await this.editor.getCachedOrFetchCodeSnippets(!1);
        let o = n?.find(e => e.sourceCodeJSXCallId == e.sourceCodeJSXCallId);
        if (!o) {
          x1("direct_manipulation", "Could not refresh snippet for commitToCode retry", {}, {
            reportAsSentryError: !0
          });
          this.displayErrorVisualBell("on_save");
          return;
        }
        await this.commitToCode({
          classNames: e,
          allowedRetries: t - 1,
          snippet: o
        });
      } else {
        x1("direct_manipulation", "Unsuccessful code edit", {}, {
          reportAsSentryError: !0
        });
        this.displayErrorVisualBell("on_save");
      }
    } else setTimeout(() => {
      this.editor.fetchNewCodeSnippets();
    }, 0);
  }
  async resetClassNamesForPropertiesAndCommitToCode(e) {
    let t = await this.editor.getCachedOrFetchCodeSnippets(!1);
    if (null === t) {
      x1("direct_manipulation", "No snippet found for resetClassNames", {}, {
        reportAsSentryError: !0
      });
      this.displayErrorVisualBell("on_save");
      return;
    }
    for (let n of t) {
      let t = null;
      let i = n.editingInfo.classNameAttribute;
      switch (i.type) {
        case "static":
          t = i.value;
          break;
        case "not-set":
          t = "";
          break;
        case "dynamic":
        case "dynamic-identifier":
        case "unknown":
          x1("direct_manipulation", "Unsupported jsx for resetClassNames", {
            type: i.type
          }, {
            reportAsSentryError: !0
          });
          this.displayErrorVisualBell("on_save");
          return;
        default:
          throwTypeError(i);
      }
      t = Lh({
        existingClassNames: t,
        classToStyles: this.editor.selectedElementsClassToStyles,
        propertiesToReset: e
      });
      this.sendClassnamesToPreview(t, n);
      await this.commitToCode({
        classNames: t,
        snippet: n
      });
    }
    this.editor.clearLocalComputedStyleEditForSelectedNodes(e);
  }
}
export const q = $$u0;