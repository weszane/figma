var t;
var f;
/*!
* Bowser - a browser detector
* https://github.com/ded/bowser
* MIT License | (c) Dustin Diaz 2015
*/
t = "bowser";
f = function () {
  function e(e) {
    function n(n) {
      var i = e.match(n);
      return i && i.length > 1 && i[1] || "";
    }
    function i(n) {
      var i = e.match(n);
      return i && i.length > 1 && i[2] || "";
    }
    var t;
    var f = n(/(ipod|iphone|ipad)/i).toLowerCase();
    var r = !/like android/i.test(e) && /android/i.test(e);
    var a = /nexus\s*[0-6]\s*/i.test(e);
    var o = !a && /nexus\s*[0-9]+/i.test(e);
    var u = /CrOS/.test(e);
    var l = /silk/i.test(e);
    var d = /sailfish/i.test(e);
    var s = /tizen/i.test(e);
    var c = /(web|hpw)os/i.test(e);
    var h = /windows phone/i.test(e);
    /SamsungBrowser/i.test(e);
    var p = !h && /windows/i.test(e);
    var g = !f && !l && /macintosh/i.test(e);
    var m = !r && !d && !s && !c && /linux/i.test(e);
    var _ = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i);
    var b = n(/version\/(\d+(\.\d+)?)/i);
    var y = /tablet/i.test(e) && !/tablet pc/i.test(e);
    var v = !y && /[^-]mobi/i.test(e);
    var w = /xbox/i.test(e);
    /opera/i.test(e) ? t = {
      name: "Opera",
      opera: !0,
      version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
    } : /opr\/|opios/i.test(e) ? t = {
      name: "Opera",
      opera: !0,
      version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
    } : /SamsungBrowser/i.test(e) ? t = {
      name: "Samsung Internet for Android",
      samsungBrowser: !0,
      version: b || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
    } : /coast/i.test(e) ? t = {
      name: "Opera Coast",
      coast: !0,
      version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
    } : /yabrowser/i.test(e) ? t = {
      name: "Yandex Browser",
      yandexbrowser: !0,
      version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
    } : /ucbrowser/i.test(e) ? t = {
      name: "UC Browser",
      ucbrowser: !0,
      version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
    } : /mxios/i.test(e) ? t = {
      name: "Maxthon",
      maxthon: !0,
      version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
    } : /epiphany/i.test(e) ? t = {
      name: "Epiphany",
      epiphany: !0,
      version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
    } : /puffin/i.test(e) ? t = {
      name: "Puffin",
      puffin: !0,
      version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
    } : /sleipnir/i.test(e) ? t = {
      name: "Sleipnir",
      sleipnir: !0,
      version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
    } : /k-meleon/i.test(e) ? t = {
      name: "K-Meleon",
      kMeleon: !0,
      version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
    } : h ? (t = {
      name: "Windows Phone",
      osname: "Windows Phone",
      windowsphone: !0
    }, _ ? (t.msedge = !0, t.version = _) : (t.msie = !0, t.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? t = {
      name: "Internet Explorer",
      msie: !0,
      version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
    } : u ? t = {
      name: "Chrome",
      osname: "Chrome OS",
      chromeos: !0,
      chromeBook: !0,
      chrome: !0,
      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
    } : /edg([ea]|ios)/i.test(e) ? t = {
      name: "Microsoft Edge",
      msedge: !0,
      version: _
    } : /vivaldi/i.test(e) ? t = {
      name: "Vivaldi",
      vivaldi: !0,
      version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b
    } : d ? t = {
      name: "Sailfish",
      osname: "Sailfish OS",
      sailfish: !0,
      version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
    } : /seamonkey\//i.test(e) ? t = {
      name: "SeaMonkey",
      seamonkey: !0,
      version: n(/seamonkey\/(\d+(\.\d+)?)/i)
    } : /firefox|iceweasel|fxios/i.test(e) ? (t = {
      name: "Firefox",
      firefox: !0,
      version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
    }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (t.firefoxos = !0, t.osname = "Firefox OS")) : l ? t = {
      name: "Amazon Silk",
      silk: !0,
      version: n(/silk\/(\d+(\.\d+)?)/i)
    } : /phantom/i.test(e) ? t = {
      name: "PhantomJS",
      phantom: !0,
      version: n(/phantomjs\/(\d+(\.\d+)?)/i)
    } : /slimerjs/i.test(e) ? t = {
      name: "SlimerJS",
      slimer: !0,
      version: n(/slimerjs\/(\d+(\.\d+)?)/i)
    } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? t = {
      name: "BlackBerry",
      osname: "BlackBerry OS",
      blackberry: !0,
      version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
    } : c ? (t = {
      name: "WebOS",
      osname: "WebOS",
      webos: !0,
      version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
    }, /touchpad\//i.test(e) && (t.touchpad = !0)) : /bada/i.test(e) ? t = {
      name: "Bada",
      osname: "Bada",
      bada: !0,
      version: n(/dolfin\/(\d+(\.\d+)?)/i)
    } : s ? t = {
      name: "Tizen",
      osname: "Tizen",
      tizen: !0,
      version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
    } : /qupzilla/i.test(e) ? t = {
      name: "QupZilla",
      qupzilla: !0,
      version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
    } : /chromium/i.test(e) ? t = {
      name: "Chromium",
      chromium: !0,
      version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
    } : /chrome|crios|crmo/i.test(e) ? t = {
      name: "Chrome",
      chrome: !0,
      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
    } : r ? t = {
      name: "Android",
      version: b
    } : /safari|applewebkit/i.test(e) ? (t = {
      name: "Safari",
      safari: !0
    }, b && (t.version = b)) : f ? (t = {
      name: "iphone" == f ? "iPhone" : "ipad" == f ? "iPad" : "iPod"
    }, b && (t.version = b)) : t = /googlebot/i.test(e) ? {
      name: "Googlebot",
      googlebot: !0,
      version: n(/googlebot\/(\d+(\.\d+))/i) || b
    } : {
      name: n(/^(.*)\/(.*) /),
      version: i(/^(.*)\/(.*) /)
    };
    !t.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (t.name = t.name || "Blink", t.blink = !0) : (t.name = t.name || "Webkit", t.webkit = !0), !t.version && b && (t.version = b)) : !t.opera && /gecko\//i.test(e) && (t.name = t.name || "Gecko", t.gecko = !0, t.version = t.version || n(/gecko\/(\d+(\.\d+)?)/i));
    !t.windowsphone && (r || t.silk) ? (t.android = !0, t.osname = "Android") : !t.windowsphone && f ? (t[f] = !0, t.ios = !0, t.osname = "iOS") : g ? (t.mac = !0, t.osname = "macOS") : w ? (t.xbox = !0, t.osname = "Xbox") : p ? (t.windows = !0, t.osname = "Windows") : m && (t.linux = !0, t.osname = "Linux");
    var k = "";
    t.windows ? k = function (e) {
      switch (e) {
        case "NT":
          return "NT";
        case "XP":
        case "NT 5.1":
          return "XP";
        case "NT 5.0":
          return "2000";
        case "NT 5.2":
          return "2003";
        case "NT 6.0":
          return "Vista";
        case "NT 6.1":
          return "7";
        case "NT 6.2":
          return "8";
        case "NT 6.3":
          return "8.1";
        case "NT 10.0":
          return "10";
        default:
          return;
      }
    }(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : t.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : t.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : f ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : r ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : t.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : t.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : t.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : t.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i));
    k && (t.osversion = k);
    var S = !t.windows && k.split(".")[0];
    y || o || "ipad" == f || r && (3 == S || S >= 4 && !v) || t.silk ? t.tablet = !0 : (v || "iphone" == f || "ipod" == f || r || a || t.blackberry || t.webos || t.bada) && (t.mobile = !0);
    t.msedge || t.msie && t.version >= 10 || t.yandexbrowser && t.version >= 15 || t.vivaldi && t.version >= 1 || t.chrome && t.version >= 20 || t.samsungBrowser && t.version >= 4 || t.firefox && t.version >= 20 || t.safari && t.version >= 6 || t.opera && t.version >= 10 || t.ios && t.osversion && t.osversion.split(".")[0] >= 6 || t.blackberry && t.version >= 10.1 || t.chromium && t.version >= 20 ? t.a = !0 : t.msie && t.version < 10 || t.chrome && t.version < 20 || t.firefox && t.version < 20 || t.safari && t.version < 6 || t.opera && t.version < 10 || t.ios && t.osversion && t.osversion.split(".")[0] < 6 || t.chromium && t.version < 20 ? t.c = !0 : t.x = !0;
    return t;
  }
  var n = e("undefined" != typeof navigator && navigator.userAgent || "");
  function i(e) {
    return e.split(".").length;
  }
  function t(e, n) {
    var i;
    var t = [];
    if (Array.prototype.map) return Array.prototype.map.call(e, n);
    for (i = 0; i < e.length; i++) t.push(n(e[i]));
    return t;
  }
  function f(e) {
    for (n = Math.max(i(e[0]), i(e[1])), f = t(e, function (e) {
      var f = n - i(e);
      return t((e += Array(f + 1).join(".0")).split("."), function (e) {
        return Array(20 - e.length).join("0") + e;
      }).reverse();
    }), void 0; --n >= 0;) {
      var n;
      var f;
      if (f[0][n] > f[1][n]) return 1;
      if (f[0][n] !== f[1][n]) return -1;
      if (0 === n) return 0;
    }
  }
  function r(i, t, r) {
    var a = n;
    "string" == typeof t && (r = t, t = void 0);
    void 0 === t && (t = !1);
    r && (a = e(r));
    var o = "" + a.version;
    for (var u in i) if (i.hasOwnProperty(u) && a[u]) {
      if ("string" != typeof i[u]) throw Error("Browser version in the minVersion map should be a string: " + u + ": " + String(i));
      return 0 > f([o, i[u]]);
    }
    return t;
  }
  n.test = function (e) {
    for (var i = 0; i < e.length; ++i) {
      var t = e[i];
      if ("string" == typeof t && t in n) return !0;
    }
    return !1;
  };
  n.isUnsupportedBrowser = r;
  n.compareVersions = f;
  n.check = function (e, n, i) {
    return !r(e, n, i);
  };
  n._detect = e;
  n.detect = e;
  return n;
};
module.exports ? module.exports = f() : require.amdD(t, f);