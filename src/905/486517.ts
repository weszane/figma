import { jsx, jsxs } from "react/jsx-runtime";
import { T } from "../905/745591";
import a from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { RecordingComponent, generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { Hx } from "../figma_app/530167";
import { Qd } from "../905/380385";
import { Ro } from "../figma_app/805373";
import { Hn, f6, xD, ri } from "../905/337179";
import { _ as _$$_ } from "../905/328370";
var s = a;
let g = "mentions_typeahead--mentionsTypeahead--0G1Mt";
let f = "mentions_typeahead--communityMentionsTypeahead--d2hdN mentions_typeahead--mentionsTypeahead--0G1Mt";
let _ = "mentions_typeahead--commentsMentionsTypeaheadDown--GaGMe";
let A = "mentions_typeahead--commentsMentionsTypeaheadUp--Ovlxr";
let y = "mentions_typeahead--mentionsTypeaheadHeader--3mbyK";
let b = "mentions_typeahead--name--08XKn mentions_typeahead--profileItem--eA3Qi";
let v = parsePxNumber("132px") + 8;
export function $$I0(e) {
  return jsx($$E, {
    ...e,
    isUI3: !0
  });
}
class $$E extends RecordingComponent {
  constructor(e) {
    super(e);
    this.pointerMoved = !1;
    this.onMentionTypeaheadClick = e => {
      this.props.onInsert();
      this.props.setTypeahead(null);
      "profile_handle" in this.props.typeahead.mentions[e] && this.props.dispatch(Hx(this.props.typeahead.mentions[e]));
    };
    this.placeMention = e => {
      this.props.setTypeahead({
        ...this.props.typeahead,
        index: e
      });
    };
    this.generateTypeaheadItems = (e, t = 0) => e.map((e, i) => {
      let r = "handle" in e ? e.handle : null;
      let a = null;
      if (this.props.entity.id === e.id) {
        let t = r ?? e.name;
        a = jsx("div", {
          className: b,
          children: renderI18nText("comments.name_and_you", {
            name: t || ""
          })
        });
      } else a = "email" in e ? jsx(_$$_, {
        className: b,
        email: e.email || null,
        displayString: e.handle
      }) : jsx("div", {
        className: b,
        children: e.name || r || ""
      });
      let s = null;
      s = "profile_handle" in e ? `@${e.profile_handle}` : e.id.startsWith("invite-") ? getI18nString("comments.invited") : e.email;
      let o = this.props.getAdditionalMetadata?.(e);
      return jsxs(Hn, {
        className: this.props.isCommunityMentions ? "mentions_typeahead--communityMentionsTypeaheadRow--eL1iz mentions_typeahead--mentionsTypeaheadRow--2EwXX text--fontPos12--YsUAh text--_fontBase--QdLsd" : "mentions_typeahead--mentionsTypeaheadRow--2EwXX",
        selectedClassName: this.props.isCommunityMentions ? "mentions_typeahead--communityMentionsTypeaheadRowSelected--pPzO6" : "mentions_typeahead--mentionsTypeaheadRowSelected--AEr6h",
        selected: this.props.typeahead.index === i + t,
        onClick: () => {
          this.onMentionTypeaheadClick(i + t);
        },
        onPointerOver: () => {
          this.pointerMoved && this.placeMention(i + t);
        },
        onPointerDown: () => {
          this.pointerMoved = !0;
          this.placeMention(i + t);
        },
        recordingKey: generateRecordingKey(this.props.recordingKey, i + t, "item"),
        children: [jsx("div", {
          className: "mentions_typeahead--avatar--Po0PL",
          children: jsx(Ro, {
            entity: e
          })
        }), jsxs("div", {
          className: "mentions_typeahead--profile--C1inz",
          children: [a, jsxs("div", {
            className: "mentions_typeahead--metadata--BJOWW mentions_typeahead--profileItem--eA3Qi",
            "data-testid": "mention-typeahead-metadata",
            children: [!!s && jsx("span", {
              className: "mentions_typeahead--email--Sc3Kt",
              children: s
            }), !!o && jsxs("span", {
              className: "mentions_typeahead--additionalMetadata--r6A38",
              children: [s ? " \u2022 " : "", o]
            })]
          })]
        })]
      }, e.id);
    });
    this.setMaxTypeaheadHeight();
  }
  setMaxTypeaheadHeight() {
    this.props.setMaxTypeaheadHeight && (this.props.isCommunityMentions ? this.props.setMaxTypeaheadHeight(parsePxNumber("216px")) : this.props.setMaxTypeaheadHeight(this.props.typeahead.maxMentions * parsePxNumber("48px")));
  }
  componentDidUpdate(e) {
    e.typeahead.mentions !== this.props.typeahead.mentions && (this.pointerMoved = !1);
    (this.props.setMaxTypeaheadHeight !== e.setMaxTypeaheadHeight || this.props.typeahead.maxMentions !== e.typeahead.maxMentions || this.props.isCommunityMentions !== e.isCommunityMentions) && this.setMaxTypeaheadHeight();
  }
  render() {
    let e = () => this.pointerMoved = !0;
    let t = f6(this.props);
    if (this.props.typeahead.mentions.some(e => e.id.startsWith("invite-"))) {
      let i = this.props.typeahead.mentions.filter(e => e.id.startsWith("invite-"));
      let r = this.generateTypeaheadItems(i);
      let a = this.props.typeahead.mentions.filter(e => !e.id.startsWith("invite-"));
      let o = this.generateTypeaheadItems(a, r.length);
      let l = jsx("div", {
        className: y,
        style: {
          padding: 6
        },
        children: renderI18nText("comments.invited")
      }, "mentions-typeahead-top-padding-div");
      let c = jsx("div", {
        className: y,
        style: {
          padding: 6
        },
        children: renderI18nText("comments.with_access")
      }, "mentions-typeahead-bottom-padding-div");
      let p = [];
      r.length > 0 && (p.push(l), p.push(...r));
      o.length > 0 && (p.push(c), p.push(...o));
      return jsxs(xD, {
        className: s()({
          [f]: this.props.isCommunityMentions,
          [g]: !this.props.isCommunityMentions,
          [_]: this.props.isComments && this.props.direction === ri.DOWNWARDS,
          [A]: this.props.isComments && this.props.direction === ri.UPWARDS
        }),
        dataTestId: this.props.dataTestId,
        dispatchTypeahead: this.props.setTypeahead,
        id: Qd,
        onClear: this.props.onClear,
        onInsert: this.props.onInsert,
        onPointerMove: e,
        typeahead: this.props.typeahead,
        width: this.props.width,
        zIndex: this.props.zIndex,
        ...t,
        children: [...p]
      });
    }
    {
      let i = this.generateTypeaheadItems(this.props.typeahead.mentions);
      let a = jsx("div", {
        style: {
          height: 6
        }
      }, "mentions-typeahead-top-padding-div");
      let o = jsx("div", {
        style: {
          height: 6
        }
      }, "mentions-typeahead-bottom-padding-div");
      let l = this.props.isUI3 ? [...i] : [a, ...i, o];
      if (this.props.typeahead.search && this.props.typeahead.search.length > 0) {
        let e = jsxs("span", {
          style: {
            maxWidth: this.props.width - v
          },
          className: "mentions_typeahead--noMatchesFoundSearchTerm--smkuY",
          children: [renderI18nText("comments.at_mention"), this.props.typeahead.search]
        });
        let t = jsx(T, {
          role: "alert",
          children: jsx("div", {
            className: "mentions_typeahead--noMatchesFoundRow--9mNPs",
            children: jsx("span", {
              className: "mentions_typeahead--noMatchesFoundText--anK6N text--fontPos12--YsUAh text--_fontBase--QdLsd",
              style: {
                maxWidth: this.props.width
              },
              children: renderI18nText("comments.no_users_matched_your_search", {
                searchQuery: e
              })
            })
          }, "mentions-typeahead-no-matches-div")
        });
        l = this.props.isUI3 ? [t] : [a, t, o];
      }
      return jsx(xD, {
        ariaLabel: getI18nString("comments.at_mention_listbox_label"),
        className: s()({
          [f]: this.props.isCommunityMentions,
          [g]: !this.props.isCommunityMentions,
          [_]: this.props.isComments && this.props.direction === ri.DOWNWARDS,
          [A]: this.props.isComments && this.props.direction === ri.UPWARDS
        }),
        dataTestId: this.props.dataTestId,
        dispatchTypeahead: this.props.setTypeahead,
        id: Qd,
        onClear: this.props.onClear,
        onInsert: this.props.onInsert,
        onPointerMove: e,
        typeahead: this.props.typeahead,
        width: this.props.width,
        zIndex: this.props.zIndex,
        ...t,
        children: l
      });
    }
  }
}
$$E.displayName = "MentionsTypeaheadView";
export const E = $$I0;