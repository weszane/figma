import { jsx, jsxs } from "react/jsx-runtime";
import { connect } from "react-redux";
import { Button } from "../905/521428";
import { N } from "../905/438674";
import { A } from "../905/251970";
import l from "classnames";
import { RecordingPureComponent, generateRecordingKey } from "../figma_app/878298";
import { Spacing } from "../figma_app/637027";
import { t as _$$t } from "../905/331623";
import { Me } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { postUserFlag } from "../905/985254";
import { c as _$$c } from "../905/370443";
import { isFullscreenDevHandoffView } from "../905/782918";
import { Q } from "../905/346809";
import { nV, fI, hl } from "../figma_app/626177";
import { $E, Cj, FQ, L4, Q as _$$Q, zD, hq, Ms, z_, eO } from "../905/553729";
var d = l;
class T extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.onDismiss = () => {
      this.props.dispatch(postUserFlag({
        [this.props.userFlag]: !0
      }));
    };
    this.renderContent = () => {
      if (this.props.userFlags[this.props.userFlag]) return null;
      let e = this.props.panelName ? {
        panelName: this.props.panelName
      } : void 0;
      let t = null;
      this.props.hintLinkText && (this.props.hintLinkOnClick ? t = jsx(Button, {
        variant: "secondary",
        onClick: this.props.hintLinkOnClick,
        recordingKey: generateRecordingKey(this.props.recordingKey, "link"),
        children: this.props.hintLinkText
      }) : this.props.hintLinkUrl && (t = jsx(N, {
        href: this.props.hintLinkUrl,
        newTab: !0,
        children: this.props.hintLinkText
      })));
      let r = this.props.hintLinkOnNewLine ? jsxs("div", {
        className: $E,
        children: [jsx(nV, {
          className: Cj,
          children: this.props.hintText
        }), jsx(nV, {
          className: Cj,
          children: t
        })]
      }) : jsxs(nV, {
        className: Cj,
        children: [this.props.hintText, " ", t]
      });
      let i = this.props.iconComponent ? this.props.iconComponent : this.props.icon_DEPRECATED ? jsx(_$$t, {
        svg: this.props.icon_DEPRECATED,
        fallbackSvg: this.props.iconFallback,
        className: FQ
      }) : null;
      return jsxs("div", {
        className: this.props.className,
        id: this.props.idForTests,
        children: [jsxs(fI, {
          className: L4,
          children: [jsx(Q, {
            className: _$$Q,
            children: this.props.title
          }), jsx("span", {
            className: zD,
            children: jsx(Me, {
              onClick: this.onDismiss,
              "aria-label": getI18nString("fullscreen.properties_panel.hint_panel.close"),
              recordingKey: generateRecordingKey(this.props.recordingKey, "x"),
              trackingProperties: {
                trackingDescriptor: _$$c.CLOSE_BUTTON,
                ...e
              },
              children: jsx(A, {})
            })
          })]
        }), jsxs(hl, {
          className: d()(hq, {
            [Ms]: !!this.props.useProminentVersion && !this.props.secondaryHintText
          }),
          children: [i, r]
        }), this.props.secondaryHintText && jsxs(hl, {
          className: d()({
            [hq]: !0,
            [Ms]: !!this.props.useProminentVersion
          }),
          children: [this.props.secondaryIconComponent ?? null, jsx(nV, {
            className: Cj,
            children: this.props.secondaryHintText
          })]
        })]
      });
    };
  }
  render() {
    return this.props.useProminentVersion ? jsx("div", {
      className: z_,
      children: jsxs("div", {
        className: eO,
        children: [jsx(Spacing, {
          multiple: 1
        }), this.renderContent()]
      })
    }) : this.renderContent();
  }
}
export let $$I0 = connect((e, t) => ({
  ...t,
  userFlags: e.userFlags,
  isDevHandoff: isFullscreenDevHandoffView(e.selectedView)
}), e => ({
  dispatch: e
}))(T);
export const u = $$I0;