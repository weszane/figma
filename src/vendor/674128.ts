!function (t) {
  "use strict";

  var n = function () {
    var e;
    return {
      escape: function (e) {
        return e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
      },
      parseExtension: t,
      mimeType: function (e) {
        var n;
        var r;
        var o = t(e).toLowerCase();
        return {
          woff: n = "application/font-woff",
          woff2: n,
          ttf: "application/font-truetype",
          eot: "application/vnd.ms-fontobject",
          png: "image/png",
          jpg: r = "image/jpeg",
          jpeg: r,
          gif: "image/gif",
          tiff: "image/tiff",
          svg: "image/svg+xml"
        }[o] || "";
      },
      dataAsUrl: function (e, t) {
        return "data:" + t + ";base64," + e;
      },
      isDataUrl: function (e) {
        return -1 !== e.search(/^(data:)/);
      },
      canvasToBlob: function (e) {
        return new Promise(e.toBlob ? function (t) {
          e.toBlob(t);
        } : function (t) {
          for (n = window.atob(e.toDataURL().split(",")[1]), r = n.length, o = new Uint8Array(r), i = 0, void 0; i < r; i++) {
            var n;
            var r;
            var o;
            var i;
            o[i] = n.charCodeAt(i);
          }
          t(new Blob([o], {
            type: "image/png"
          }));
        });
      },
      resolveUrl: function (e, t) {
        var n = document.implementation.createHTMLDocument();
        var r = n.createElement("base");
        n.head.appendChild(r);
        var o = n.createElement("a");
        n.body.appendChild(o);
        r.href = t;
        o.href = e;
        return o.href;
      },
      getAndEncode: function (e) {
        a.impl.options.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
        return new Promise(function (t) {
          var n;
          var r = new XMLHttpRequest();
          if (r.onreadystatechange = function () {
            if (4 === r.readyState) {
              if (200 !== r.status) {
                n ? t(n) : i("cannot fetch resource: " + e + ", status: " + r.status);
                return;
              }
              var o = new FileReader();
              o.onloadend = function () {
                t(o.result.split(/,/)[1]);
              };
              o.readAsDataURL(r.response);
            }
          }, r.ontimeout = function () {
            n ? t(n) : i("timeout of 30000ms occured while fetching resource: " + e);
          }, r.responseType = "blob", r.timeout = 3e4, r.open("GET", e, !0), r.send(), a.impl.options.imagePlaceholder) {
            var o = a.impl.options.imagePlaceholder.split(/,/);
            o && o[1] && (n = o[1]);
          }
          function i(e) {
            console.error(e);
            t("");
          }
        });
      },
      uid: (e = 0, function () {
        return "u" + ("0000" + (1679616 * Math.random() << 0).toString(36)).slice(-4) + e++;
      }),
      delay: function (e) {
        return function (t) {
          return new Promise(function (n) {
            setTimeout(function () {
              n(t);
            }, e);
          });
        };
      },
      asArray: function (e) {
        for (t = [], n = e.length, r = 0, void 0; r < n; r++) {
          var t;
          var n;
          var r;
          t.push(e[r]);
        }
        return t;
      },
      escapeXhtml: function (e) {
        return e.replace(/#/g, "%23").replace(/\n/g, "%0A");
      },
      makeImage: function (e) {
        return new Promise(function (t, n) {
          var r = new Image();
          r.onload = function () {
            t(r);
          };
          r.onerror = n;
          r.src = e;
        });
      },
      width: function (e) {
        var t = n(e, "border-left-width");
        var r = n(e, "border-right-width");
        return e.scrollWidth + t + r;
      },
      height: function (e) {
        var t = n(e, "border-top-width");
        var r = n(e, "border-bottom-width");
        return e.scrollHeight + t + r;
      }
    };
    function t(e) {
      var t = /\.([^\.\/]*?)$/g.exec(e);
      return t ? t[1] : "";
    }
    function n(e, t) {
      return parseFloat(window.getComputedStyle(e).getPropertyValue(t).replace("px", ""));
    }
  }();
  var r = function () {
    var e = /url\(['"]?([^'"]+?)['"]?\)/g;
    return {
      inlineAll: function (e, n, i) {
        return t(e) ? Promise.resolve(e).then(r).then(function (t) {
          var r = Promise.resolve(e);
          t.forEach(function (e) {
            r = r.then(function (t) {
              return o(t, e, n, i);
            });
          });
          return r;
        }) : Promise.resolve(e);
      },
      shouldProcess: t,
      impl: {
        readUrls: r,
        inline: o
      }
    };
    function t(t) {
      return -1 !== t.search(e);
    }
    function r(t) {
      for (o = [], void 0; null !== (r = e.exec(t));) {
        var r;
        var o;
        o.push(r[1]);
      }
      return o.filter(function (e) {
        return !n.isDataUrl(e);
      });
    }
    function o(e, t, r, o) {
      return Promise.resolve(t).then(function (e) {
        return r ? n.resolveUrl(e, r) : e;
      }).then(o || n.getAndEncode).then(function (e) {
        return n.dataAsUrl(e, n.mimeType(t));
      }).then(function (r) {
        return e.replace(RegExp("(url\\(['\"]?)(" + n.escape(t) + ")(['\"]?\\))", "g"), "$1" + r + "$3");
      });
    }
  }();
  var o = function () {
    return {
      resolveAll: function () {
        return e(document).then(function (e) {
          return Promise.all(e.map(function (e) {
            return e.resolve();
          }));
        }).then(function (e) {
          return e.join("\n");
        });
      },
      impl: {
        readAll: e
      }
    };
    function e() {
      return Promise.resolve(n.asArray(document.styleSheets)).then(function (e) {
        var t = [];
        e.forEach(function (e) {
          try {
            n.asArray(e.cssRules || []).forEach(t.push.bind(t));
          } catch (t) {
            console.log("Error while reading CSS rules from " + e.href, t.toString());
          }
        });
        return t;
      }).then(function (e) {
        return e.filter(function (e) {
          return e.type === CSSRule.FONT_FACE_RULE;
        }).filter(function (e) {
          return r.shouldProcess(e.style.getPropertyValue("src"));
        });
      }).then(function (t) {
        return t.map(e);
      });
      function e(e) {
        return {
          resolve: function () {
            var t = (e.parentStyleSheet || {}).href;
            return r.inlineAll(e.cssText, t);
          },
          src: function () {
            return e.style.getPropertyValue("src");
          }
        };
      }
    }
  }();
  var i = function () {
    return {
      inlineAll: function t(o) {
        var i;
        return o instanceof Element ? ((i = o.style.getPropertyValue("background")) ? r.inlineAll(i).then(function (e) {
          o.style.setProperty("background", e, o.style.getPropertyPriority("background"));
        }).then(function () {
          return o;
        }) : Promise.resolve(o)).then(function () {
          return o instanceof HTMLImageElement ? e(o).inline() : Promise.all(n.asArray(o.childNodes).map(function (e) {
            return t(e);
          }));
        }) : Promise.resolve(o);
      },
      impl: {
        newImage: e
      }
    };
    function e(e) {
      return {
        inline: function (t) {
          return n.isDataUrl(e.src) ? Promise.resolve() : Promise.resolve(e.src).then(t || n.getAndEncode).then(function (t) {
            return n.dataAsUrl(t, n.mimeType(e.src));
          }).then(function (t) {
            return new Promise(function (n, r) {
              e.onload = n;
              e.onerror = r;
              e.src = t;
            });
          });
        }
      };
    }
  }();
  var u = {
    imagePlaceholder: void 0,
    cacheBust: !1
  };
  var a = {
    toSvg: c,
    toPng: function (e, t) {
      return l(e, t || {}).then(function (e) {
        return e.toDataURL();
      });
    },
    toJpeg: function (e, t) {
      return l(e, t = t || {}).then(function (e) {
        return e.toDataURL("image/jpeg", t.quality || 1);
      });
    },
    toBlob: function (e, t) {
      return l(e, t || {}).then(n.canvasToBlob);
    },
    toPixelData: function (e, t) {
      return l(e, t || {}).then(function (t) {
        return t.getContext("2d").getImageData(0, 0, n.width(e), n.height(e)).data;
      });
    },
    impl: {
      fontFaces: o,
      images: i,
      util: n,
      inliner: r,
      options: {}
    }
  };
  function c(e, t) {
    var r;
    void 0 === (r = t = t || {}).imagePlaceholder ? a.impl.options.imagePlaceholder = u.imagePlaceholder : a.impl.options.imagePlaceholder = r.imagePlaceholder;
    void 0 === r.cacheBust ? a.impl.options.cacheBust = u.cacheBust : a.impl.options.cacheBust = r.cacheBust;
    return Promise.resolve(e).then(function (e) {
      return function e(t, r, o) {
        return o || !r || r(t) ? Promise.resolve(t).then(function (e) {
          return e instanceof HTMLCanvasElement ? n.makeImage(e.toDataURL()) : e.cloneNode(!1);
        }).then(function (o) {
          var i;
          var u;
          var a;
          return 0 === (i = t.childNodes).length ? Promise.resolve(o) : (u = n.asArray(i), a = Promise.resolve(), u.forEach(function (t) {
            a = a.then(function () {
              return e(t, r);
            }).then(function (e) {
              e && o.appendChild(e);
            });
          }), a).then(function () {
            return o;
          });
        }).then(function (e) {
          return e instanceof Element ? Promise.resolve().then(function () {
            var r;
            var o;
            r = window.getComputedStyle(t);
            o = e.style;
            r.cssText ? o.cssText = r.cssText : function (e, t) {
              n.asArray(e).forEach(function (n) {
                t.setProperty(n, e.getPropertyValue(n), e.getPropertyPriority(n));
              });
            }(r, o);
          }).then(function () {
            [":before", ":after"].forEach(function (r) {
              (function (r) {
                var o = window.getComputedStyle(t, r);
                var i = o.getPropertyValue("content");
                if ("" !== i && "none" !== i) {
                  var u;
                  var a;
                  var c = n.uid();
                  e.className = e.className + " " + c;
                  var l = document.createElement("style");
                  l.appendChild((a = o.cssText ? (u = o.getPropertyValue("content"), o.cssText + " content: " + u + ";") : n.asArray(o).map(function (e) {
                    return e + ": " + o.getPropertyValue(e) + (o.getPropertyPriority(e) ? " !important" : "");
                  }).join("; ") + ";", document.createTextNode("." + c + ":" + r + "{" + a + "}")));
                  e.appendChild(l);
                }
              })(r);
            });
          }).then(function () {
            t instanceof HTMLTextAreaElement && (e.innerHTML = t.value);
            t instanceof HTMLInputElement && e.setAttribute("value", t.value);
          }).then(function () {
            e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e instanceof SVGRectElement && ["width", "height"].forEach(function (t) {
              var n = e.getAttribute(t);
              n && e.style.setProperty(t, n);
            }));
          }).then(function () {
            return e;
          }) : e;
        }) : Promise.resolve();
      }(e, t.filter, !0);
    }).then(s).then(f).then(function (e) {
      t.bgcolor && (e.style.backgroundColor = t.bgcolor);
      t.width && (e.style.width = t.width + "px");
      t.height && (e.style.height = t.height + "px");
      t.style && Object.keys(t.style).forEach(function (n) {
        e.style[n] = t.style[n];
      });
      return e;
    }).then(function (r) {
      var o;
      var i;
      o = t.width || n.width(e);
      i = t.height || n.height(e);
      return Promise.resolve(r).then(function (e) {
        e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        return new XMLSerializer().serializeToString(e);
      }).then(n.escapeXhtml).then(function (e) {
        return '<foreignObject x="0" y="0" width="100%" height="100%">' + e + "</foreignObject>";
      }).then(function (e) {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + o + '" height="' + i + '">' + e + "</svg>";
      }).then(function (e) {
        return "data:image/svg+xml;charset=utf-8," + e;
      });
    });
  }
  function l(e, t) {
    return c(e, t).then(n.makeImage).then(n.delay(100)).then(function (r) {
      var o = function (e) {
        var r = document.createElement("canvas");
        if (r.width = t.width || n.width(e), r.height = t.height || n.height(e), t.bgcolor) {
          var o = r.getContext("2d");
          o.fillStyle = t.bgcolor;
          o.fillRect(0, 0, r.width, r.height);
        }
        return r;
      }(e);
      o.getContext("2d").drawImage(r, 0, 0);
      return o;
    });
  }
  function s(e) {
    return o.resolveAll().then(function (t) {
      var n = document.createElement("style");
      e.appendChild(n);
      n.appendChild(document.createTextNode(t));
      return e;
    });
  }
  function f(e) {
    return i.inlineAll(e).then(function () {
      return e;
    });
  }
  module.exports = a;
}(0);