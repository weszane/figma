import { jsx, jsxs } from "react/jsx-runtime";
import { A } from "../vendor/737188";
import { RecordingComponent } from "../figma_app/878298";
import { v } from "../905/318279";
let a = /(https?:\/\/)?(www\.)?figma.com\/@/;
export function $$l1(e) {
  return jsx(A, {
    options: {
      target: {
        url: "_blank"
      },
      attributes: {
        rel: "noopener nofollow ugc",
        onMouseDown: e => {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      className: "formatted_expanding_textarea--blueLink--GWaek blue_link--blueLink--9rlnd",
      format: e => e.replace(a, "@")
    },
    children: e
  });
}
export class $$c0 extends RecordingComponent {
  constructor(e) {
    super(e);
    this.onChange = e => {
      this.setState({
        value: e.target.value
      });
    };
    this.onMouseDown = e => {
      this.props.readOnly || e.preventDefault();
      this.setState({
        isEditing: !0
      });
    };
    this.onFocus = () => {
      this.state.isEditing || this.setState({
        isEditing: !0
      });
    };
    this.onSubmit = e => {
      this.props.submit && this.props.submit(e);
    };
    this.onBlur = () => {
      this.setState({
        isEditing: !1
      });
    };
    this.state = {
      value: this.props.value,
      isEditing: !1
    };
  }
  componentDidUpdate(e) {
    this.props.value !== e.value && this.setState({
      value: this.props.value
    });
  }
  renderFormattedValue() {
    return jsx("div", {
      dir: "auto",
      className: "formatted_expanding_textarea--value--XJ2Gh",
      children: this.props.formatter ? this.props.formatter(this.state.value) : this.state.value
    });
  }
  renderPlaceholder() {
    return jsx("div", {
      className: "formatted_expanding_textarea--placeholder--JJ8AZ",
      children: this.props.readOnly ? "" : this.props.placeholder
    });
  }
  render() {
    let e = !this.props.readOnly && this.state.isEditing;
    let t = ["formatted_expanding_textarea--container--3NuYC text--fontPos13--xW8hS text--_fontBase--QdLsd", e ? "formatted_expanding_textarea--editMode--wvP9s" : "formatted_expanding_textarea--viewMode--GHMnM", this.props.readOnly ? "formatted_expanding_textarea--readOnly--w19iZ" : "formatted_expanding_textarea--canEdit--UVjHq", this.props.className || ""].join(" ");
    return jsxs("div", {
      className: t,
      onMouseDown: this.onMouseDown,
      onFocus: this.onFocus,
      tabIndex: this.state.isEditing ? -1 : 0,
      children: [!e && (this.state.value ? this.renderFormattedValue() : this.renderPlaceholder()), e && jsx(v, {
        maxLength: this.props.maxLength || 1e4,
        onChange: this.onChange,
        value: this.state.value,
        placeholder: this.props.placeholder,
        submit: this.onSubmit,
        onBlur: this.onBlur,
        selectOnMount: !0,
        className: "formatted_expanding_textarea--expandingTextarea--LLtsJ"
      })]
    });
  }
}
$$c0.displayName = "FormattedExpandingTextarea";
export const TI = $$c0;
export const qU = $$l1;