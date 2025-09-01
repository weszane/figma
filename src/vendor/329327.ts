import { Map as _$$Map } from "../vendor/116740";
import { createElement } from "react";
import i from "../vendor/312623";
var o = _$$Map({
  "header-one": {
    element: "h1"
  },
  "header-two": {
    element: "h2"
  },
  "header-three": {
    element: "h3"
  },
  "header-four": {
    element: "h4"
  },
  "header-five": {
    element: "h5"
  },
  "header-six": {
    element: "h6"
  },
  section: {
    element: "section"
  },
  article: {
    element: "article"
  },
  "unordered-list-item": {
    element: "li",
    wrapper: createElement("ul", {
      className: i("public/DraftStyleDefault/ul")
    })
  },
  "ordered-list-item": {
    element: "li",
    wrapper: createElement("ol", {
      className: i("public/DraftStyleDefault/ol")
    })
  },
  blockquote: {
    element: "blockquote"
  },
  atomic: {
    element: "figure"
  },
  "code-block": {
    element: "pre",
    wrapper: createElement("pre", {
      className: i("public/DraftStyleDefault/pre")
    })
  },
  unstyled: {
    element: "div",
    aliasedElements: ["p"]
  }
});
module.exports = o;