import { useState, useEffect } from "react";
exports.useImageSize = void 0;
exports.useImageSize = function (e) {
  let {
    width,
    height,
    src
  } = e;
  let [a, s] = useState({
    width,
    height
  });
  useEffect(() => {
    let e = new Image();
    e.src = "string" == typeof src ? src : src.src;
    e.onload = () => {
      var t;
      var i;
      a.width && a.height || s({
        width: null !== (t = a.width) && void 0 !== t ? t : e.width,
        height: null !== (i = a.height) && void 0 !== i ? i : e.height
      });
    };
  });
  return a;
};