import { noop } from "../figma_app/465776";
import r from "../vendor/128080";
import { parseQuerySimple } from "../905/634134";
var a = r;
export class $$o1 {
  pathToSelectedView(e, t, i) {
    let [n, r, a, o, l] = t;
    if ("admin" !== r || "figmascope" !== a) return null;
    let d = i ? parseQuerySimple(i) : {};
    let c = d.selection;
    let u = "fullscreen" === d.backend ? "fullscreen" : "kiwi";
    let p = d.diffKey;
    return {
      view: "figmascope",
      selection: c,
      urlParams: (() => {
        if (!o || !l) return null;
        switch (o) {
          case "file":
            return {
              type: "server_file",
              key: l,
              diffKey: p,
              backend: u
            };
          case "file_validation":
            return {
              type: "server_file_validation_checkpoint",
              key: l,
              prefix: d.prefix || "",
              locality: d.locality || "US",
              diffPrefix: d.diffPrefix ?? d.diff_prefix,
              backend: u
            };
          case "file_validation_diff":
            return {
              type: "server_file_validation_checkpoint_diff",
              key: l,
              prefix: d.prefix || "",
              locality: d.locality || "US"
            };
          case "checkpoint":
            return {
              type: "server_checkpoint",
              key: l,
              diffKey: p,
              backend: u
            };
          case "diff":
            return {
              type: "server_checkpoint_diff",
              key: l
            };
          case "multiplayer_journal":
          case "multiplayer_journals":
            return {
              type: "multiplayer_journal_browser",
              fileKey: l,
              startSequenceNumber: d.start_sequence_number,
              endSequenceNumber: d.end_sequence_number
            };
          case "multiplayer_journal_diff":
            if (null == d.end_sequence_number) return null;
            return {
              type: "multiplayer_journal_diff",
              fileKey: l,
              endSequenceNumber: d.end_sequence_number
            };
          default:
            return null;
        }
      })()
    };
  }
  selectedViewToPath(e) {
    if (!$$l0(e)) return null;
    let t = "/admin/figmascope";
    let i = new URLSearchParams(document.location.search);
    if (e.urlParams) {
      let r = e.urlParams;
      switch (r.type) {
        case "server_file":
          t += `/file/${r.key}`;
          break;
        case "server_file_validation_checkpoint":
          t += `/file_validation/${r.key})}`;
          break;
        case "server_file_validation_checkpoint_diff":
          t += `/file_validation_diff/${r.key})}`;
          break;
        case "server_checkpoint":
          t += `/checkpoint/${r.key}`;
          break;
        case "server_checkpoint_diff":
          t += `/diff/${r.key}`;
          break;
        case "multiplayer_journal_browser":
          t += `/multiplayer_journals/${r.fileKey}`;
          break;
        case "multiplayer_journal_diff":
          t += `/multiplayer_journal_diff/${r.fileKey}`;
          break;
        default:
          noop(r);
      }
      if ("backend" in r && i.set("backend", r.backend || ""), "diffKey" in r && r.diffKey && i.set("diffKey", r.diffKey), "server_file_validation_checkpoint" === r.type || "server_file_validation_checkpoint_diff" === r.type) {
        let {
          prefix,
          locality
        } = r;
        prefix && i.set("prefix", prefix);
        locality && i.set("locality", locality);
        "server_file_validation_checkpoint" === r.type && r.diffPrefix && i.set("diffPrefix", r.diffPrefix);
      }
      if ("multiplayer_journal_browser" === r.type) {
        let {
          startSequenceNumber,
          endSequenceNumber
        } = r;
        startSequenceNumber && i.set("start_sequence_number", startSequenceNumber);
        endSequenceNumber && i.set("end_sequence_number", endSequenceNumber);
      }
      "multiplayer_journal_diff" === r.type && i.set("end_sequence_number", r.endSequenceNumber);
    }
    e.selection && i.set("selection", e.selection);
    let r = i.toString();
    r && (t += `?${r}`);
    return t;
  }
  requireHistoryChange(e, t) {
    return $$l0(e) !== $$l0(t) || !!($$l0(e) && $$l0(t)) && !a()(e.urlParams, t.urlParams);
  }
  selectedViewName(e) {
    if ($$l0(e)) {
      if (e.urlParams) switch (e.urlParams.type) {
        case "server_file":
          return `FigmaScope (File ${e.urlParams.key})`;
        case "server_file_validation_checkpoint":
          return `FigmaScope (File Validation Checkpoint ${e.urlParams.key})`;
        case "server_file_validation_checkpoint_diff":
          return `FigmaScope (File Validation Diff ${e.urlParams.key})`;
        case "server_checkpoint":
          return `FigmaScope (Checkpoint ${e.urlParams.key})`;
        case "server_checkpoint_diff":
          return `FigmaScope (Diff ${e.urlParams.key})`;
        case "multiplayer_journal_browser":
          return `FigmaScope (Journals for ${e.urlParams.fileKey})`;
        case "multiplayer_journal_diff":
          return `FigmaScope (Journal Diff for ${e.urlParams.fileKey})`;
        default:
          noop(e.urlParams);
      }
      return "FigmaScope";
    }
    return null;
  }
}
export function $$l0(e) {
  return "figmascope" === e.view;
}
export const E = $$l0;
export const N = $$o1;