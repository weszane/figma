import { jsx } from "react/jsx-runtime";
import { PureComponent, useState, useRef, useEffect } from "react";
import { arraysEqual } from "../figma_app/656233";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { generatePaintIcon, convertImageDataToURL } from "../905/619652";
export class $$d0 extends PureComponent {
  constructor(e) {
    super(e);
    this.updateThumbnailSrc = e => {
      let t = generatePaintIcon(e, new Point(this.props.width, this.props.height), {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      });
      let r = t && t.pixels && t.pixelSize ? convertImageDataToURL(t.pixels, t.pixelSize) : null;
      this.setState({
        src: r,
        lastPaintFilter: e.paintFilter || null
      });
    };
    this.state = {
      src: null,
      lastPaintFilter: null
    };
  }
  componentDidMount() {
    this.updateThumbnailSrc(this.props.imagePaint);
  }
  colorAdjustEqual(e, t) {
    if (!e || !t) return !e == !t;
    for (let r in e) if (e.hasOwnProperty(r) && e[r] !== t[r]) return !1;
    return !0;
  }
  UNSAFE_componentWillReceiveProps(e) {
    let t = this.props.imagePaint;
    let r = e.imagePaint;
    (t.image && r.image && !arraysEqual(t.image.hash, r.image.hash) || e.forceUpdate && !this.colorAdjustEqual(this.state.lastPaintFilter, r.paintFilter)) && this.updateThumbnailSrc(r);
  }
  render() {
    return jsx("img", {
      className: this.props.className,
      src: this.state.src ? this.state.src : "",
      width: this.props.width,
      height: this.props.height,
      alt: getI18nString("fullscreen.properties_panel.image_preview.alt_text")
    });
  }
}
export function $$c1(e) {
  let {
    imagePaint,
    width,
    height,
    className,
    dataTestId
  } = e;
  let [c, u] = useState(null);
  let [p, _] = useState(!1);
  let h = useRef(null);
  let m = (e, t, r) => {
    let n = generatePaintIcon(e, new Point(t, r), {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    });
    return n && n.pixels && 0 !== n.pixels.length && n.pixelSize ? convertImageDataToURL(n.pixels, n.pixelSize) : null;
  };
  useEffect(() => {
    !p && h.current && (clearInterval(h.current), h.current = null);
  }, [p]);
  useEffect(() => {
    let e = m(imagePaint, width, height);
    e ? u(e) : (_(!0), h.current = setInterval(() => {
      let e = m(imagePaint, width, height);
      e && (u(e), _(!1));
    }, 200));
    return () => {
      h.current && clearInterval(h.current);
    };
  }, [imagePaint, width, height, _]);
  return c ? jsx("img", {
    className,
    src: c,
    width,
    height,
    alt: "",
    "data-testid": dataTestId
  }) : null;
}
$$d0.displayName = "ImagePaintThumbnail";
export const K = $$d0;
export const i = $$c1;