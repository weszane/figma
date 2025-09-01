export class $$n0 {
  constructor(e) {
    this.userScrolled = !1;
    this.handleUserScroll = () => {
      this.userScrolled = !0;
    };
    this.view = e;
    e.scrollDOM.addEventListener("wheel", this.handleUserScroll);
    e.scrollDOM.addEventListener("mousedown", this.handleUserScroll);
    e.scrollDOM.addEventListener("touchstart", this.handleUserScroll);
    e.scrollDOM.addEventListener("scroll", () => {
      this.isNearBottom() && (this.userScrolled = !1);
    });
  }
  isNearBottom() {
    let e = this.view.scrollDOM;
    return (e.scrollTop + e.clientHeight) / e.scrollHeight >= .9;
  }
  isAutoScrollAllowed({
    checkNearBottom: e
  }) {
    return !this.userScrolled || e && this.isNearBottom();
  }
  destroy() {
    this.view.scrollDOM.removeEventListener("wheel", this.handleUserScroll);
    this.view.scrollDOM.removeEventListener("mousedown", this.handleUserScroll);
    this.view.scrollDOM.removeEventListener("touchstart", this.handleUserScroll);
  }
}
export const A = $$n0;