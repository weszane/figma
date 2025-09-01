import { Sh, yV, Z, ul, Si, Og, FZ, Id, Fo, fN } from "../figma_app/262240";
import { TH } from "../905/293114";
import s from "../905/131414";
import { E$, rb, M$ } from "../905/209596";
import { mD, JM } from "../905/950718";
import { O4, Ac } from "../905/499389";
import { J } from "../905/62244";
import { eb } from "../905/848469";
import { G } from "../905/231180";
let n;
function o(e, t) {
  return t.LinkFeatures;
}
let l = ["text_max_similarity_with_target_descendants", "text_max_similarity_with_target_descendants_per_source_avg", "text_max_similarity_with_target_descendants_per_source_count", "text_max_similarity_source_self", "text_max_similarity_source_overlapping", "text_max_similarity_font_ratio", "text_max_similarity_target_num_chars", "text_max_similarity_with_target_descendant_images", "text_max_similarity_with_target_descendant_images_per_source_avg", "text_max_similarity_with_target_descendant_images_per_source_count", "text_similarity_with_target_tlf_name", "text_similarity_with_target_tlf_name_per_source_avg", "text_similarity_with_target_tlf_name_per_source_count", "text_similarity_with_target_tlf_summary", "text_similarity_with_target_tlf_summary_per_source_avg", "text_similarity_with_target_tlf_summary_per_source_count", "text_similarity_with_target_tlf_name_summary", "text_similarity_with_target_tlf_name_summary_per_source_avg", "text_similarity_with_target_tlf_name_summary_per_source_count", "name_max_similarity_with_target_descendants", "name_max_similarity_with_target_descendants_per_source_avg", "name_max_similarity_with_target_descendants_per_source_count", "name_similarity_with_target_tlf_name", "name_similarity_with_target_tlf_name_per_source_avg", "name_similarity_with_target_tlf_name_per_source_count", "name_similarity_with_target_tlf_summary", "name_similarity_with_target_tlf_summary_per_source_avg", "name_similarity_with_target_tlf_summary_per_source_count", "name_similarity_with_target_tlf_name_summary", "name_similarity_with_target_tlf_name_summary_per_source_avg", "name_similarity_with_target_tlf_name_summary_per_source_count", "image_max_similarity_with_target_descendants", "image_max_similarity_with_target_descendants_per_source_avg", "image_max_similarity_with_target_descendants_per_source_count", "image_max_similarity_area_ratio", "image_max_similarity_target_area", "image_max_similarity_with_target_descendant_characters", "image_max_similarity_with_target_descendant_characters_per_source_avg", "image_max_similarity_with_target_descendant_characters_per_source_count", "image_max_similarity_with_target_descendant_names", "image_max_similarity_with_target_descendant_names_per_source_avg", "image_max_similarity_with_target_descendant_names_per_source_count", "image_similarity_with_target_tlf_name", "image_similarity_with_target_tlf_name_per_source_avg", "image_similarity_with_target_tlf_name_per_source_count", "image_similarity_with_target_tlf_summary", "image_similarity_with_target_tlf_summary_per_source_avg", "image_similarity_with_target_tlf_summary_per_source_count", "image_similarity_with_target_tlf_name_summary", "image_similarity_with_target_tlf_name_summary_per_source_avg", "image_similarity_with_target_tlf_name_summary_per_source_count", "gains_colorful_solid_fill", "loses_colorful_solid_fill", "colorfulness_delta"];
let c = e => {
  let t = "FRAME" === e.type;
  let i = e.parentNode;
  let n = i && ("CANVAS" === i.type || "SECTION" === i.type);
  return t && n;
};
let u = e => {
  let t;
  let i = [];
  if (c(e)) {
    i.push(e.name);
    let t = e.parentNode.children.indexOf(e);
    i.push(t.toString());
  }
  for (t = e; !c(t); t = t.parentNode) {
    let e = t.name;
    let n = 0;
    let r = t.parentNode;
    if (!r) break;
    for (let i of r.children) if (i.name === e) {
      if (i === t) break;
      n++;
    }
    i.push(e);
    i.push(n.toString());
  }
  return i.join("/");
};
function m(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let h = e => `${e.sourceID} -> ${e.destinationScreenID}`;
class g {
  get length() {
    return this.samples.length;
  }
  createSampleBySourceID() {
    for (let e of (this.samplesBySourceID = new Map(), this.samples)) {
      let t = e.sourceID;
      this.samplesBySourceID.has(t) || this.samplesBySourceID.set(t, []);
      this.samplesBySourceID.get(t).push(e);
    }
  }
  static fromUnfilteredScene(e, t, i) {
    let n = A(e);
    return new g(t.map(e => Sh(e, n)), i);
  }
  removeSamples(e) {
    for (let t of e) this.removeSample(t);
  }
  removeSample(e) {
    let t = h(e);
    this.featuresForSample.$$delete(t);
    this.samples = this.samples.filter(e => h(e) !== t);
    let i = e.sourceID;
    if (this.samplesBySourceID.has(i)) {
      let e = this.samplesBySourceID.get(i).filter(e => h(e) !== t);
      e.length > 0 ? this.samplesBySourceID.set(i, e) : this.samplesBySourceID.$$delete(i);
    }
  }
  removeBySourceId(e) {
    let t = this.getSamplesBySourceId(e);
    if (t) for (let e of t) this.featuresForSample.$$delete(h(e));
    this.samples = this.samples.filter(t => e != t.sourceID);
    this.samplesBySourceID.$$delete(e);
  }
  getSamplesBySourceId(e) {
    return this.samplesBySourceID.get(e) || [];
  }
  getFeatures(e) {
    let t = h(e);
    let i = this.featuresForSample.get(t);
    i && this.selectionLevelFeatures && Object.assign(i, this.selectionLevelFeatures);
    return i;
  }
  getComputedFeatures(e) {
    return this.getFeatures(e);
  }
  entries() {
    return this.samples.map(e => [e, this.getFeatures(e)]);
  }
  payloadForSourceID(e, t, i, n) {
    let r = [];
    for (let a of this.samplesBySourceID.get(e) || []) {
      let e = this.getFeatures(a);
      if (!o(e, this.enabledFeatureGroups)) throw Error("Link features are disabled");
      if (n && void 0 !== e.ensemblePredictedScore) continue;
      let s = {
        source_id: a.sourceID,
        target_id: a.destinationScreenID
      };
      let l = !0;
      for (let n of t) {
        let t = e[n];
        if (void 0 === t) {
          if (i) {
            l = !1;
            break;
          }
          throw Error(`Missing attribute '${n}' in features for sample ${h(a)}`);
        }
        "boolean" == typeof t ? s[n] = t ? 1 : 0 : s[n] = t;
      }
      l && r.push(s);
    }
    return r;
  }
  *batchedPayload(e, t, i, n) {
    let r = 1048576 * e;
    let a = [];
    let s = 0;
    for (let e of this.samplesBySourceID.keys()) for (let o of this.payloadForSourceID(e, t, i, n)) {
      let e = new TextEncoder().encode(JSON.stringify(o)).length;
      s + e >= r && (yield a, a = [], s = 0);
      a.push(o);
      s += e;
    }
    a.length > 0 && (yield a);
  }
  argmax(e) {
    let t;
    let i = -1 / 0;
    for (let n of this.entries()) {
      let r = n[0];
      let a = n[1];
      if (!a.hasOwnProperty(e)) throw Error(`Missing attribute '${e}' in features`);
      let s = a[e];
      null !== s && Number(s) > i && (i = Number(s), t = r);
    }
    return t;
  }
  where(e) {
    let t = [];
    for (let i of this.samples) e(this.getFeatures(i)) && t.push(i);
    return t;
  }
  copy() {
    let e = [...this.selectedTlfs];
    let t = new Map(this.featuresForSample);
    let i = new g(e, this.enabledFeatureGroups);
    i.featuresForSample = t;
    i.createSampleBySourceID();
    return i;
  }
  filter(e) {
    let t = this.where(e);
    let i = this.copy();
    let n = new Set(t.map(e => h(e)));
    i.samples = t;
    i.featuresForSample = new Map(Array.from(i.featuresForSample.entries()).filter(([e, t]) => n.has(e)));
    i.createSampleBySourceID();
    return i;
  }
  addGptInteractions(e) {
    for (let t of e?.filter(e => e.destinationScreenID) || []) {
      let e = {
        sourceID: t.buttonID,
        destinationScreenID: t.destinationScreenID
      };
      let i = this.getFeatures(e);
      if (!i) throw Error(`Sample missing from table: ${JSON.stringify(e)}`);
      for (let e of (i.adjustedGptPrediction = !0, i.adjustedGptPredictedType = t.navigationType, i.gptScore = t.score, this.getSamplesBySourceId(t.buttonID))) if (e.destinationScreenID !== t.destinationScreenID) {
        let t = this.getFeatures(e);
        t.adjustedGptPrediction = !1;
        t.adjustedGptPredictedType = null;
        t.gptScore = 0;
      }
      this.propagateGptLinksThroughGraph(t, i, e);
    }
  }
  propagateGptLinksThroughGraph(e, t, i) {
    let n = Sh(e.buttonID, {
      children: this.selectedTlfs
    });
    if (!n) {
      console.warn(`Node not found for buttonID: ${e.buttonID}`);
      return;
    }
    for (let i of yV(n, !0)) {
      let n = {
        sourceID: i.id,
        destinationScreenID: e.destinationScreenID
      };
      if (n.sourceID === n.destinationScreenID) continue;
      let a = this.getFeatures(n);
      a.adjustedGptPrediction = !1;
      a.adjustedGptPredictedType = null;
      a.gptScore = 0;
      a.gptScoreHoistedFromSiblings = e.score;
      a.gptScoreHoistedFromSiblingsAreaRatio = Z(t.area_source, a.area_source);
    }
    ul(n, a => {
      if (n.id === a.id) return;
      let s = {
        sourceID: a.id,
        destinationScreenID: i.destinationScreenID
      };
      let o = this.getFeatures(s);
      o.adjustedGptPrediction = !1;
      o.adjustedGptPredictedType = null;
      o.gptScore = 0;
      o.gptScoreHoistedFromAncestors = e.score;
      o.gptScoreHoistedFromAncestorsAreaRatio = Z(t.area_source, o.area_source);
    });
    let a = 0;
    Si(n, n => {
      if (Og(n)) return FZ.BREAK;
      let s = {
        sourceID: n.id,
        destinationScreenID: i.destinationScreenID
      };
      let o = this.getFeatures(s);
      o.adjustedGptPrediction = !1;
      o.adjustedGptPredictedType = null;
      o.gptScore = 0;
      o.gptScoreHoistedFromDescendants = e.score;
      o.gptScoreHoistedFromDescendantsAreaRatio = Z(t.area_source, o.area_source);
      a++;
      o.gptScoreHoistedFromDescendantsNumSteps = a;
      return FZ.CONTINUE;
    });
  }
  markAllAsGPTProcessed() {
    for (let e of this.entries()) {
      let t = e[1];
      t && (void 0 === t.adjustedGptPrediction && (t.adjustedGptPrediction = !1), void 0 === t.adjustedGptPredictedType && (t.adjustedGptPredictedType = null), void 0 === t.gptScore && (t.gptScore = 0));
    }
  }
  checkForUnprocessedSamples(e) {
    let t = this.filter(e => !e.ensemblePredictedScore);
    if (t.length > 0) {
      for (let i of t.batchedPayload(500, e, !1, !0));
      throw Error("Unprocessed samples found");
    }
  }
  constructor(e, t) {
    for (let i of (m(this, "featuresForSample", void 0), m(this, "samples", void 0), m(this, "samplesBySourceID", void 0), m(this, "featuresForNode", new Map()), m(this, "selectedTlfs", void 0), m(this, "selectionLevelFeatures", void 0), m(this, "enabledFeatureGroups", void 0), this.enabledFeatureGroups = t, this.samples = f(e), this.selectedTlfs = e || [], this.selectionLevelFeatures = null, this.featuresForSample = new Map(), this.samples)) this.featuresForSample.set(h(i), {
      gptScoreHoistedFromAncestors: null,
      gptScoreHoistedFromAncestorsAreaRatio: null,
      gptScoreHoistedFromDescendants: null,
      gptScoreHoistedFromDescendantsAreaRatio: null,
      gptScoreHoistedFromDescendantsNumSteps: null,
      gptScoreHoistedFromSiblings: null,
      gptScoreHoistedFromSiblingsAreaRatio: null
    });
    this.samplesBySourceID = new Map();
    this.createSampleBySourceID();
  }
}
let f = e => {
  let t = [];
  for (let i of e) ul(i, n => {
    for (let r of e) r.id !== i.id && t.push({
      sourceID: n.id,
      destinationScreenID: r.id
    });
  });
  return t;
};
let _ = e => !!e;
let A = e => (e.children = e.children.map(y).filter(_), e);
let y = e => {
  var t;
  if (!(!1 === e.visible || 0 === e.opacity)) {
    e.children = e.children?.map(y).filter(_);
    return e;
  }
};
let b = class {
  getKey(e, t) {
    return `${e}-${t}`;
  }
  increment(e, t, i, n, r) {
    let a = this.getKey(e, t);
    let s = this.counter.get(a) || {
      count: 0,
      tags: [],
      sourceAbsoluteBounds: [],
      sourceParentIDs: []
    };
    s.count += 1;
    s.tags.push(i);
    s.sourceAbsoluteBounds.push(n);
    s.sourceParentIDs.push(r);
    this.counter.set(a, s);
  }
  getCount(e, t) {
    var i;
    let n = this.getKey(e, t);
    return this.counter.get(n)?.count || 0;
  }
  getTags(e, t) {
    var i;
    let n = this.getKey(e, t);
    return this.counter.get(n)?.tags || [];
  }
  getSourceAbsoluteBounds(e, t) {
    var i;
    let n = this.getKey(e, t);
    return this.counter.get(n)?.sourceAbsoluteBounds || [];
  }
  getSourceParentIDs(e, t) {
    var i;
    let n = this.getKey(e, t);
    return this.counter.get(n)?.sourceParentIDs || [];
  }
  constructor() {
    !function(e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    }(this, "counter", new Map());
  }
};
function v(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function I(e) {
  return function() {
    var t = this;
    var i = arguments;
    return new Promise(function(n, r) {
      var a = e.apply(t, i);
      function s(e) {
        v(a, n, r, s, o, "next", e);
      }
      function o(e) {
        v(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  };
}
function E() {
  return (E = I(function*(e, t, i) {
    let a = function() {
      if (!n) throw Error("Call setEnsembleModelProvider before trying to use the ensemble model");
      return n;
    }();
    let s = mD(e.id, "ensemble");
    function l() {
      return (l = I(function*(e, t) {
        let i = [];
        let n = new Set();
        for (let r of e) {
          let e = {
            batch: r
          };
          JM(`Calling Sagemaker for batch with size ${r.length}`);
          let s = a(e).then(e => e.results);
          i.push(s);
          n.add(s);
          let o = () => n.$$delete(s);
          s.then(o).catch(o);
          n.size >= t && (yield Promise.race(n));
        }
        return Promise.all(i);
      })).apply(this, arguments);
    }
    JM(`Starting batched calls to Sagemaker with ${t.samples.length} samples`);
    let c = t.batchedPayload(4, i, !0, !0);
    let u = yield function(e, t) {
      return l.apply(this, arguments);
    }(c, 4);
    s();
    (function(e, t) {
      for (let i of e) {
        let e = {
          sourceID: i.source_id,
          destinationScreenID: i.target_id
        };
        let n = t.getFeatures(e);
        n.ensemblePredictedLink = i.predicted_link;
        n.ensemblePredictedScore = i.score;
      }
    })(u.flat(), t);
    return function(e, t) {
      for (let i = 0; i < t.length; i++) {
        for (let i of (function(e, t) {
          let i = function(e, t) {
            let i = t.where(e => e.acceptedLink);
            let n = new Set();
            for (let e of i) n.add(e.sourceID);
            let a = function(e, t) {
              let i = [];
              for (let n of t) ul(n, t => {
                e.includes(t.id) && i.push(t);
              });
              return i;
            }(Array.from(n), t.selectedTlfs);
            let s = new Map();
            for (let e of t.selectedTlfs) {
              s.set(e.id, {
                overlapsWithAcceptedLink: !1
              });
              ul(e, t => {
                if (t.id === e.id) return;
                let i = {
                  overlapsWithAcceptedLink: a.some(e => null !== E$(rb(t), rb(e)))
                };
                s.set(t.id, i);
              });
            }
            return s;
          }(0, t);
          let n = t.where(e => e.acceptedLink);
          let a = new b();
          for (let i of n) {
            let n = Sh(i.sourceID, e);
            let s = Id(n);
            let o = t.getFeatures(i);
            let l = (o.characters_source || "") + (o.child_characters_source || "") + (o.overlapping_sibling_characters_source || "");
            a.increment(s.id, i.destinationScreenID, l, rb(n), n.parentNode.id);
          }
          for (let [n, l] of t.entries()) {
            var s;
            var o;
            let t = null !== (o = i.get(n.sourceID)?.overlapsWithAcceptedLink) && void 0 !== o && o;
            l.overlaps_with_accepted_link_source = t;
            let c = Sh(n.sourceID, e);
            let u = Id(c);
            l.num_accepted_links_from_same_source_tlf_to_target = a.getCount(u.id, n.destinationScreenID);
            l.links_to_parent_tlf = u.id === n.destinationScreenID;
            let p = a.getTags(u.id, n.destinationScreenID);
            let m = (l.characters_source || "") + (l.child_characters_source || "") + (l.overlapping_sibling_characters_source || "");
            l.link_with_same_chars_exists = "" != m && p.includes(m);
            let h = Math.min(...a.getSourceAbsoluteBounds(u.id, n.destinationScreenID).map(e => M$(rb(c), e)).filter(e => null !== e));
            l.min_distance_to_accepted_link_to_same_target = h;
            let g = a.getSourceParentIDs(u.id, n.destinationScreenID);
            let f = c.parentNode.id;
            l.link_with_same_parent_and_target_exists = g.includes(f);
          }
        }(e, t), t.entries())) {
          let e = i[1];
          if (!o(e, t.enabledFeatureGroups)) throw Error("Link features are disabled");
          e.acceptedLink ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : e.overlaps_with_accepted_link_source ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : e.link_with_same_chars_exists ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : e.num_accepted_links_from_same_source_tlf_to_target >= 3 ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : e.min_distance_to_accepted_link_to_same_target < 10 ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : e.link_with_same_parent_and_target_exists ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : e.links_to_parent_tlf ? (e.NextLinkScore = 0, e.NextLinkPrediction = !1) : (e.NextLinkPrediction = e.ensemblePredictedLink, e.NextLinkScore = e.ensemblePredictedScore);
        }
        let i = t.filter(e => e.NextLinkPrediction);
        if (0 == i.length) break;
        let n = i.argmax("NextLinkScore");
        if (n) t.getFeatures(n).acceptedLink = !0; else break;
      }
      return function(e) {
        let t = [];
        for (let i of e.entries()) {
          let e = i[0];
          if (i[1].acceptedLink) {
            let i = {
              buttonID: e.sourceID,
              destinationScreenID: e.destinationScreenID,
              navigationType: "NAVIGATE",
              generationStep: "ensemble"
            };
            t.push(i);
          }
        }
        return t;
      }(t);
    }(e, t);
  })).apply(this, arguments);
}
I(function*(e, t, i, n) {
  let r = i.filter(e => !e.destinationScreenID);
  r.forEach(e => {
    t.removeBySourceId(e.buttonID);
  });
  let a = yield function(e, t, i) {
    return E.apply(this, arguments);
  }(e, t, n);
  return r.concat(a);
});
function T(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function k(e) {
  return function() {
    var t = this;
    var i = arguments;
    return new Promise(function(n, r) {
      var a = e.apply(t, i);
      function s(e) {
        T(a, n, r, s, o, "next", e);
      }
      function o(e) {
        T(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  };
}
class R extends Error {
  constructor(...e) {
    super(...e);
    (function(e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    })(this, "name", "ThumbnailError");
  }
}
function N() {
  return (N = k(function*(e, t, i, n) {
    let a = yield function(e, t, i, n) {
      return P.apply(this, arguments);
    }(e, t, i, n);
    if (0 === a.length) return;
    let s = [];
    try {
      let e = G();
      s = yield e(a);
    } catch (e) {
      throw new R("Failed to get thumbnails.");
    }
    let o = new Map();
    a.forEach((e, t) => {
      o.set(e.id, s[t]);
      e.isPredictedIcon = !0;
    });
    JM(`Added ${s.length} thumbnails to page ${t.id}`);
    o.forEach((e, i) => {
      let n = Sh(i, t);
      n && (e.includes(",") ? n.base64 = e.split(",")[1] : n.base64 = e);
    });
  })).apply(this, arguments);
}
function P() {
  return (P = k(function*(e, t, i, n) {
    let a;
    let s = [];
    if (e.iconClassifierEndpointName === O4) for (let e of n) {
      let t = Fo(e, e => fN(e) && (e.visible || void 0 === e.visible));
      s.push(...t);
    } else {
      a = eb();
      s = yield J(i, a, t, e.iconClassifierColumns);
    }
    JM(`Found ${s.length} icon nodes in total.`);
    return s;
  })).apply(this, arguments);
}
function O(e) {
  var t;
  var i;
  function n(t, i) {
    try {
      var a = e[t](i);
      var s = a.value;
      var o = s instanceof M;
      Promise.resolve(o ? s.wrapped : s).then(function(e) {
        if (o) {
          n("next", e);
          return;
        }
        r(a.done ? "return" : "normal", e);
      }, function(e) {
        n("throw", e);
      });
    } catch (e) {
      r("throw", e);
    }
  }
  function r(e, r) {
    switch (e) {
      case "return":
        t.resolve({
          value: r,
          done: !0
        });
        break;
      case "throw":
        t.reject(r);
        break;
      default:
        t.resolve({
          value: r,
          done: !1
        });
    }
    (t = t.next) ? n(t.key, t.arg) : i = null;
  }
  this._invoke = function(e, r) {
    return new Promise(function(a, s) {
      var o = {
        key: e,
        arg: r,
        resolve: a,
        reject: s,
        next: null
      };
      i ? i = i.next = o : (t = i = o, n(e, r));
    });
  };
  "function" != typeof e.$$return && (this.$$return = void 0);
}
function D(e) {
  function t(e) {
    if (Object(e) !== e) return Promise.reject(TypeError(e + " is not an object."));
    var t = e.done;
    return Promise.resolve(e.value).then(function(e) {
      return {
        value: e,
        done: t
      };
    });
  }
  (D = function(e) {
    this.s = e;
    this.n = e.next;
  }).prototype = {
    s: null,
    n: null,
    next: function() {
      return t(this.n.apply(this.s, arguments));
    },
    return: function(e) {
      var i = this.s.$$return;
      return void 0 === i ? Promise.resolve({
        value: e,
        done: !0
      }) : t(i.apply(this.s, arguments));
    },
    throw: function(e) {
      var i = this.s.$$return;
      return void 0 === i ? Promise.reject(e) : t(i.apply(this.s, arguments));
    }
  };
  return new D(e);
}
function L(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function F(e) {
  return new M(e);
}
function M(e) {
  this.wrapped = e;
}
"function" == typeof Symbol && Symbol.asyncIterator && (O.prototype[Symbol.asyncIterator] = function() {
  return this;
});
O.prototype.next = function(e) {
  return this._invoke("next", e);
};
O.prototype.$$throw = function(e) {
  return this._invoke("throw", e);
};
O.prototype.$$return = function(e) {
  return this._invoke("return", e);
};
export class $$j0 extends Error {
  constructor(e) {
    super(e);
    this.name = "MagicLinkError";
  }
}
export function $$U1(e, t, i) {
  return B.apply(this, arguments);
}
function B() {
  var e;
  e = function*(e, t, i, n = !1) {
    let s = {
      type: "TOPLEVEL",
      variant: e,
      topLevelFrames: t,
      unfilteredScene: i
    };
    if ("TOPLEVEL" !== s.type) throw Error("remove this error and fix typing instead");
    let o = t.map(e => Sh(e, i));
    let l = Ac(e);
    let d = A(s.unfilteredScene);
    let c = yield TH(d, {
      LinearTimeNodeFeatures: !0,
      SlowOrAsyncNodeFeatures: !1,
      LinkFeatures: !1
    }, o);
    if (l.iconClassifierEndpointName && "unfilteredScene" in s) try {
      yield function(e, t, i, n) {
        return N.apply(this, arguments);
      }(l, s.unfilteredScene, c, o);
    } catch (e) {
      if (e instanceof R && n) console.error("ThumbnailError occurred:", e.message); else throw e;
    }
    return {
      selectionInput: s,
      nodeToFeatures: c
    };
  };
  return (B = function() {
    var t = this;
    var i = arguments;
    return new Promise(function(n, r) {
      var a = e.apply(t, i);
      function s(e) {
        L(a, n, r, s, o, "next", e);
      }
      function o(e) {
        L(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  }).apply(this, arguments);
}
export const gS = $$j0;
export const e_ = $$U1; 
