import { useCallback } from "react";
import { Command, Fullscreen } from "../figma_app/763686";
import { useAtomWithSubscription, useSetAtom } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { toolStylesAtom, shapeColorAtom } from "../905/125333";
import { Jc, Qd } from "../figma_app/27927";
import { A as _$$A } from "../svg/328130";
import { A as _$$A2 } from "../svg/193017";
import { A as _$$A3 } from "../svg/744346";
import { A as _$$A4 } from "../svg/858635";
import { A as _$$A5 } from "../svg/591862";
import { A as _$$A6 } from "../svg/989294";
import { A as _$$A7 } from "../3850/108557";
import { A as _$$A8 } from "../svg/21531";
import { A as _$$A9 } from "../svg/258806";
import { A as _$$A0 } from "../svg/742456";
import { A as _$$A1 } from "../svg/803905";
import { A as _$$A10 } from "../svg/113971";
import { A as _$$A11 } from "../svg/924042";
import { A as _$$A12 } from "../svg/607564";
import { A as _$$A13 } from "../svg/341413";
import { A as _$$A14 } from "../svg/40842";
import { A as _$$A15 } from "../svg/943742";
import { A as _$$A16 } from "../svg/375688";
import { A as _$$A17 } from "../svg/992663";
import { A as _$$A18 } from "../svg/32229";
import { A as _$$A19 } from "../svg/489925";
import { A as _$$A20 } from "../svg/578995";
import { A as _$$A21 } from "../3850/60943";
import { A as _$$A22 } from "../svg/156698";
import { A as _$$A23 } from "../svg/46799";
import { A as _$$A24 } from "../svg/625862";
import { A as _$$A25 } from "../svg/555402";
import { A as _$$A26 } from "../svg/174052";
import { A as _$$A27 } from "../svg/803402";
import { A as _$$A28 } from "../svg/144832";
import { A as _$$A29 } from "../svg/934458";
import { A as _$$A30 } from "../svg/920134";
import { A as _$$A31 } from "../svg/536651";
export function $$V3(e) {
  switch (e) {
    case "SQUARE":
      return _$$A21;
    case "ELLIPSE":
      return _$$A7;
    case "ROUNDED_RECTANGLE":
      return _$$A23;
    case "DIAMOND":
      return _$$A4;
    case "TRIANGLE_UP":
      return _$$A22;
    case "TRIANGLE_DOWN":
      return _$$A29;
    case "PARALLELOGRAM_RIGHT":
      return _$$A17;
    case "PARALLELOGRAM_LEFT":
      return _$$A16;
    case "ENG_DATABASE":
      return _$$A8;
    case "ENG_QUEUE":
      return _$$A1;
    case "ENG_FILE":
      return _$$A9;
    case "ENG_FOLDER":
      return _$$A0;
    case "TRAPEZOID":
      return _$$A28;
    case "STAR":
      return _$$A26;
    case "SHIELD":
      return _$$A24;
    case "HEXAGON":
      return _$$A10;
    case "PENTAGON":
      return _$$A18;
    case "OCTAGON":
      return _$$A14;
    case "PLUS":
      return _$$A19;
    case "PREDEFINED_PROCESS":
      return _$$A20;
    case "MANUAL_INPUT":
      return _$$A12;
    case "CHEVRON":
      return _$$A3;
    case "DOCUMENT_SINGLE":
      return _$$A6;
    case "DOCUMENT_MULTIPLE":
      return _$$A5;
    case "ARROW_LEFT":
      return _$$A;
    case "ARROW_RIGHT":
      return _$$A2;
    case "SUMMING_JUNCTION":
      return _$$A27;
    case "OR":
      return _$$A15;
    case "SPEECH_BUBBLE":
      return _$$A25;
    case "INTERNAL_STORAGE":
      return _$$A11;
    case "MINDMAP_TREE_NUCLEUS":
      return _$$A13;
    default:
      return _$$A30;
  }
}
let $$G5 = ["SQUARE", "ELLIPSE", "DIAMOND", "TRIANGLE_UP", "TRIANGLE_DOWN", "ROUNDED_RECTANGLE", "CHEVRON"];
let $$K1 = ["SQUARE", "ELLIPSE", "DIAMOND", "TRIANGLE_UP", "TRIANGLE_DOWN", "ROUNDED_RECTANGLE", "PARALLELOGRAM_RIGHT", "PARALLELOGRAM_LEFT"];
let $$W0 = [...$$G5, "PREDEFINED_PROCESS", "DOCUMENT_SINGLE", "DOCUMENT_MULTIPLE", "MANUAL_INPUT", "HEXAGON", "PARALLELOGRAM_RIGHT", "PARALLELOGRAM_LEFT", "ENG_DATABASE", "ENG_QUEUE", "INTERNAL_STORAGE", "TRAPEZOID", "SUMMING_JUNCTION", "OR", "SHIELD", "ENG_FOLDER", "ENG_FILE", "PENTAGON", "OCTAGON", "PLUS", "ARROW_LEFT", "ARROW_RIGHT", "STAR", "SPEECH_BUBBLE"];
export function $$z2(e) {
  let t = useAtomWithSubscription(toolStylesAtom);
  let i = useSetAtom(shapeColorAtom);
  let {
    shapeWithTextType
  } = t;
  return useCallback(t => {
    i(t);
    let n = Jc.get(shapeWithTextType);
    if (!n) return;
    let a = Qd();
    let o = a.get(n)?.actionEnum ?? Command.SET_TOOL_DEFAULT;
    Fullscreen?.triggerActionEnumInUserEditScope(o, {
      source: e
    });
  }, [i, shapeWithTextType, e]);
}
buildUploadUrl("207bc31b9911b06b2b85797781d0a68486b15dc6");
buildUploadUrl("476a2d6160ae8dc502e8458d538777675394443b");
buildUploadUrl("06cceafc7034bc35db5fb309ab70717615526a5c");
buildUploadUrl("5ab93eef0010c3b6af23e4c8fd15e3f427a8799a");
buildUploadUrl("98d711f562ff8f5c043c5c622ef61f3654da25cb");
buildUploadUrl("45389442e64125e09f25fc9a0eaf4bc27e4da760");
buildUploadUrl("ac68553557253b75a1bfc3ad0996bcbacefa8650");
export const L2 = $$W0;
export const Qc = $$K1;
export const Su = $$z2;
export const eg = $$V3;
export const h$ = _$$A31;
export const ke = $$G5;