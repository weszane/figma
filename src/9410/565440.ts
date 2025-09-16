import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { throwTypeError } from "../figma_app/465776";
import { R } from "../9410/46722";
import { getI18nString, renderI18nText } from "../905/303541";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { isWhiteboardFileType } from "../figma_app/976749";
import { Ay } from "../figma_app/432652";
import { B as _$$B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { wC, JT, pY } from "../figma_app/632248";
import { s as _$$s, w as _$$w } from "../905/286488";
import { z8, qy } from "../figma_app/862289";
import { cq } from "../905/794154";
import { $J } from "../905/278499";
import { f as _$$f, E as _$$E } from "../905/690713";
import { A } from "../905/721854";
import { Oq, is } from "../905/904596";
import { F as _$$F } from "../905/382217";
import { KeyCodes } from "../905/63728";
import { s as _$$s2 } from "../cssbuilder/589278";
import { If } from "../figma_app/171177";
import { B as _$$B2 } from "../905/388732";
import S, { n as _$$n } from "../905/895449";
import { DM } from "../figma_app/883990";
import { Hd, bu, ay, Vz, Jd } from "../figma_app/878113";
function I({
  items: e,
  onSelectItem: t,
  placeholder: i,
  showIcon: a = !0
}) {
  If(!1);
  let [s, o] = useState("");
  let [l, d] = useState([]);
  useEffect(() => {
    d(e);
    o("");
  }, [e]);
  let c = jsx(_$$B2, {
    resultCount: l.length,
    children: l.map(e => jsx(_$$B2.Item, {
      primaryAction: {
        onAction: () => t(e),
        shortcuts: [{
          key: KeyCodes.ENTER
        }]
      },
      actionLabel: !1,
      recordingKey: e.label,
      children: jsx("div", {
        className: _$$s2.flex.justifyBetween.wFull.$,
        children: jsx("div", {
          className: _$$s2.ml28.$,
          children: e.label
        })
      })
    }, e.label))
  });
  let u = t => {
    o(t);
    d(e.filter(e => e.label.toLowerCase().includes(t.toLowerCase())));
  };
  return jsxs(_$$n, {
    height: wC,
    recordingKey: "parameterLikeList",
    children: [jsx(DM, {
      searchQuery: s,
      onSearchChange: u,
      onClear: () => {
        u("");
      },
      placeholder: i,
      showIcon: a
    }), jsx(_$$n.Body, {
      children: c
    })]
  });
}
let N = ["Arabic", "Urdu"];
export function $$A0() {
  let e = isWhiteboardFileType();
  let t = [{
    name: "Arabic",
    label: getI18nString("ai_text_tools.translate.language.arabic")
  }, {
    name: "Chinese (Simplified)",
    label: getI18nString("ai_text_tools.translate.language.chinese_simplified")
  }, {
    name: "Chinese (Traditional)",
    label: getI18nString("ai_text_tools.translate.language.chinese_traditional")
  }, {
    name: "Dutch",
    label: getI18nString("ai_text_tools.translate.language.dutch")
  }, {
    name: "English (United Kingdom)",
    label: getI18nString("ai_text_tools.translate.language.english_uk")
  }, {
    name: "English (United States)",
    label: getI18nString("ai_text_tools.translate.language.english_us")
  }, {
    name: "Tagalog",
    label: getI18nString("ai_text_tools.translate.language.tagalog")
  }, {
    name: "French",
    label: getI18nString("ai_text_tools.translate.language.french")
  }, {
    name: "German",
    label: getI18nString("ai_text_tools.translate.language.german")
  }, {
    name: "Hindi",
    label: getI18nString("ai_text_tools.translate.language.hindi")
  }, {
    name: "Indonesian",
    label: getI18nString("ai_text_tools.translate.language.indonesian")
  }, {
    name: "Italian",
    label: getI18nString("ai_text_tools.translate.language.italian")
  }, {
    name: "Japanese",
    label: getI18nString("ai_text_tools.translate.language.japanese")
  }, {
    name: "Korean",
    label: getI18nString("ai_text_tools.translate.language.korean")
  }, {
    name: "Malay",
    label: getI18nString("ai_text_tools.translate.language.malay")
  }, {
    name: "Polish",
    label: getI18nString("ai_text_tools.translate.language.polish")
  }, {
    name: "Portuguese (Brazil)",
    label: getI18nString("ai_text_tools.translate.language.portuguese_brazil")
  }, {
    name: "Portuguese (Portugal)",
    label: getI18nString("ai_text_tools.translate.language.portuguese_portugal")
  }, {
    name: "Russian",
    label: getI18nString("ai_text_tools.translate.language.russian")
  }, {
    name: "Spanish (Latin America)",
    label: getI18nString("ai_text_tools.translate.language.spanish_latin_america")
  }, {
    name: "Spanish (Spain)",
    label: getI18nString("ai_text_tools.translate.language.spanish_spain")
  }, {
    name: "Swedish",
    label: getI18nString("ai_text_tools.translate.language.swedish")
  }, {
    name: "Tamil",
    label: getI18nString("ai_text_tools.translate.language.tamil")
  }, {
    name: "Thai",
    label: getI18nString("ai_text_tools.translate.language.thai")
  }, {
    name: "Turkish",
    label: getI18nString("ai_text_tools.translate.language.turkish")
  }, {
    name: "Ukrainian",
    label: getI18nString("ai_text_tools.translate.language.ukrainian")
  }, {
    name: "Urdu",
    label: getI18nString("ai_text_tools.translate.language.urdu")
  }, {
    name: "Vietnamese",
    label: getI18nString("ai_text_tools.translate.language.vietnamese")
  }];
  e && (t = t.filter(e => !N.includes(e.name)));
  let i = getI18nString("ai_text_tools.translate.running");
  let v = useRef(null);
  let {
    onRun,
    resetText,
    cancel,
    longRunningAction,
    lastRun
  } = Hd({
    makeCortexRequest: ({
      texts: e,
      parameters: t,
      authInfo: i,
      surroundingContext: r
    }) => Ay.shared.adjustText({
      texts: e,
      action: {
        type: "TRANSLATE",
        language: t.language
      },
      jsonMode: e.length > 1,
      surroundingContext: r
    }, i),
    featureType: JT.TRANSLATE_TEXT
  });
  let {
    state,
    aiTrackingContext,
    tasks
  } = S;
  let {
    close
  } = cq();
  let D = _$$s(JT.TRANSLATE_TEXT);
  let M = tasks.length;
  let P = tasks.filter(e => e.state === z8.FAILED).length;
  let F = useIsSelectedViewFullscreenCooper();
  switch (state) {
    case qy.RUNNING:
      return jsx(_$$F, {
        onCancel: () => {
          cancel();
          close();
        },
        aiTrackingContext,
        children: i
      });
    case qy.INITIAL:
      switch (D.state) {
        case _$$w.NEEDS_INITIAL_SELECTION:
        case _$$w.SELECTION_LOST:
          return jsx(A, {
            action: JT.TRANSLATE_TEXT,
            actionLabel: renderI18nText("fullscreen_actions.quick_actions.translate-text"),
            actionIcon: jsx(R, {}),
            onPerform: () => D.confirmInitialSelection(),
            getCustomDisabledTextFromSelectedNodes: e => bu(e, {}),
            aiTrackingContext,
            instructionAction: {
              type: "learn_more",
              url: pY
            },
            children: renderI18nText("ai_text_tools.selection_instruction")
          });
        case _$$w.SELECTION_OK:
          return jsx(I, {
            items: t,
            onSelectItem: e => {
              let t = {
                language: e.name
              };
              onRun(t);
              v.current = t;
            },
            placeholder: getI18nString("ai_text_tools.translate.language"),
            showIcon: !F
          });
      }
    case qy.ERROR:
      let B;
      let {
        error
      } = S;
      let G = null;
      let K = [{
        type: _$$f.TRY_AGAIN,
        callback: () => {
          if (v.current) onRun(v.current);else throw new ay("Last parameters is null");
        }
      }];
      (error instanceof Vz || sZ(error) === _$$B.CONTENT_LENGTH_LIMIT) && (B = renderI18nText("ai.error.content_length_limit"), K = []);
      error instanceof Jd && (B = renderI18nText("ai_text_tools.missing_fonts"), K = []);
      sZ(error) === _$$B.UNSAFE_OR_HARMFUL_CONTENT && (K = []);
      M > 0 && P > 0 && P < M && (G = renderI18nText("ai_text_tools.translate.couldnt_count", {
        failed: P,
        total: M
      }));
      return jsx(_$$E, {
        buttons: K,
        error: longRunningAction.error,
        aiTrackingContext,
        customMessage: B,
        secondaryMessage: G
      });
    case qy.DONE:
      return jsx(Oq, {
        iterateOptions: [{
          type: is.UNDO,
          callback: () => {
            resetText();
            close();
          }
        }],
        recordingKey: "translateText",
        aiTrackingContext: {
          ...aiTrackingContext,
          iteration_view_type: $J.DEFAULT_SUCCESS
        },
        targets: lastRun ? lastRun.targets.map(e => e.node.guid) : []
      });
    case qy.CANCELLED:
      return null;
    default:
      throwTypeError(state);
  }
}
export const K = $$A0;