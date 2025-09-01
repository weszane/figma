var n;
!function (i, o) {
  "use strict";

  var a = "function";
  var s = "undefined";
  var u = "object";
  var c = "string";
  var l = "model";
  var f = "name";
  var p = "type";
  var h = "vendor";
  var d = "version";
  var g = "architecture";
  var y = "console";
  var v = "mobile";
  var m = "tablet";
  var _ = "smarttv";
  var b = "wearable";
  var S = "embedded";
  var w = "Amazon";
  var x = "Apple";
  var k = "ASUS";
  var C = "BlackBerry";
  var E = "Browser";
  var O = "Chrome";
  var D = "Firefox";
  var K = "Google";
  var T = "Huawei";
  var M = "Microsoft";
  var A = "Motorola";
  var I = "Opera";
  var B = "Samsung";
  var L = "Sharp";
  var R = "Sony";
  var F = "Xiaomi";
  var N = "Zebra";
  var P = "Facebook";
  var z = function (t, e) {
    var r = {};
    for (var n in t) e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];
    return r;
  };
  var j = function (t) {
    for (e = {}, r = 0, void 0; r < t.length; r++) {
      var e;
      var r;
      e[t[r].toUpperCase()] = t[r];
    }
    return e;
  };
  var U = function (t, e) {
    return typeof t === c && -1 !== q(e).indexOf(q(t));
  };
  var q = function (t) {
    return t.toLowerCase();
  };
  var H = function (t, e) {
    if (typeof t === c) {
      t = t.replace(/^\s\s*/, "");
      return typeof e === s ? t : t.substring(0, 350);
    }
  };
  var W = function (t, e) {
    for (f = 0, void 0; f < e.length && !c;) {
      var r;
      var n;
      var i;
      var s;
      var c;
      var l;
      var f;
      var p = e[f];
      var h = e[f + 1];
      for (r = n = 0; r < p.length && !c;) if (c = p[r++].exec(t)) for (i = 0; i < h.length; i++) {
        l = c[++n];
        typeof (s = h[i]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : void 0 : this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0 : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : void 0) : this[s] = l || o;
      }
      f += 2;
    }
  };
  var V = function (t, e) {
    for (var r in e) if (typeof e[r] === u && e[r].length > 0) {
      for (var n = 0; n < e[r].length; n++) if (U(e[r][n], t)) return "?" === r ? o : r;
    } else if (U(e[r], t)) return "?" === r ? o : r;
    return t;
  };
  var J = {
    ME: "4.90",
    "NT 3.11": "NT3.51",
    "NT 4.0": "NT4.0",
    2e3: "NT 5.0",
    XP: ["NT 5.1", "NT 5.2"],
    Vista: "NT 6.0",
    7: "NT 6.1",
    8: "NT 6.2",
    "8.1": "NT 6.3",
    10: ["NT 6.4", "NT 10.0"],
    RT: "ARM"
  };
  var G = {
    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [d, [f, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [d, [f, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [f, d], [/opios[\/ ]+([\w\.]+)/i], [d, [f, I + " Mini"]], [/\bopr\/([\w\.]+)/i], [d, [f, I]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [f, d], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [d, [f, "UC" + E]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [d, [f, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [d, [f, "WeChat"]], [/konqueror\/([\w\.]+)/i], [d, [f, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [d, [f, "IE"]], [/yabrowser\/([\w\.]+)/i], [d, [f, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[f, /(.+)/, "$1 Secure " + E], d], [/\bfocus\/([\w\.]+)/i], [d, [f, D + " Focus"]], [/\bopt\/([\w\.]+)/i], [d, [f, I + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [d, [f, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [d, [f, "Dolphin"]], [/coast\/([\w\.]+)/i], [d, [f, I + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [d, [f, "MIUI " + E]], [/fxios\/([-\w\.]+)/i], [d, [f, D]], [/\bqihu|(qi?ho?o?|360)browser/i], [[f, "360 " + E]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[f, /(.+)/, "$1 " + E], d], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], d], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [f, d], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [f], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[f, P], d], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [f, d], [/\bgsa\/([\w\.]+) .*safari\//i], [d, [f, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [d, [f, O + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[f, O + " WebView"], d], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [d, [f, "Android " + E]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [f, d], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [d, [f, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [d, f], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [f, [d, V, {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }]], [/(webkit|khtml)\/([\w\.]+)/i], [f, d], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[f, "Netscape"], d], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [d, [f, D + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [f, d], [/(cobalt)\/([\w\.]+)/i], [f, [d, /master.|lts./, ""]]],
    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, q]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[g, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[g, "armhf"]], [/windows (ce|mobile); ppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[g, /ower/, "", q]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[g, q]]],
    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [l, [h, B], [p, m]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [l, [h, B], [p, v]], [/\((ip(?:hone|od)[\w ]*);/i], [l, [h, x], [p, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [l, [h, x], [p, m]], [/(macintosh);/i], [l, [h, x]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [l, [h, T], [p, m]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [l, [h, T], [p, v]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[l, /_/g, " "], [h, F], [p, v]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[l, /_/g, " "], [h, F], [p, m]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [l, [h, "OPPO"], [p, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [l, [h, "Vivo"], [p, v]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [l, [h, "Realme"], [p, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [l, [h, A], [p, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [l, [h, A], [p, m]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [l, [h, "LG"], [p, m]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [l, [h, "LG"], [p, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [l, [h, "Lenovo"], [p, m]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[l, /_/g, " "], [h, "Nokia"], [p, v]], [/(pixel c)\b/i], [l, [h, K], [p, m]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [l, [h, K], [p, v]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [l, [h, R], [p, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[l, "Xperia Tablet"], [h, R], [p, m]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [l, [h, "OnePlus"], [p, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [l, [h, w], [p, m]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[l, /(.+)/g, "Fire Phone $1"], [h, w], [p, v]], [/(playbook);[-\w\),; ]+(rim)/i], [l, h, [p, m]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [l, [h, C], [p, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [l, [h, k], [p, m]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [l, [h, k], [p, v]], [/(nexus 9)/i], [l, [h, "HTC"], [p, m]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [l, /_/g, " "], [p, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [l, [h, "Acer"], [p, m]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [l, [h, "Meizu"], [p, v]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [l, [h, L], [p, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, l, [p, v]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, l, [p, m]], [/(surface duo)/i], [l, [h, M], [p, m]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [l, [h, "Fairphone"], [p, v]], [/(u304aa)/i], [l, [h, "AT&T"], [p, v]], [/\bsie-(\w*)/i], [l, [h, "Siemens"], [p, v]], [/\b(rct\w+) b/i], [l, [h, "RCA"], [p, m]], [/\b(venue[\d ]{2,7}) b/i], [l, [h, "Dell"], [p, m]], [/\b(q(?:mv|ta)\w+) b/i], [l, [h, "Verizon"], [p, m]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [l, [h, "Barnes & Noble"], [p, m]], [/\b(tm\d{3}\w+) b/i], [l, [h, "NuVision"], [p, m]], [/\b(k88) b/i], [l, [h, "ZTE"], [p, m]], [/\b(nx\d{3}j) b/i], [l, [h, "ZTE"], [p, v]], [/\b(gen\d{3}) b.+49h/i], [l, [h, "Swiss"], [p, v]], [/\b(zur\d{3}) b/i], [l, [h, "Swiss"], [p, m]], [/\b((zeki)?tb.*\b) b/i], [l, [h, "Zeki"], [p, m]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], l, [p, m]], [/\b(ns-?\w{0,9}) b/i], [l, [h, "Insignia"], [p, m]], [/\b((nxa|next)-?\w{0,9}) b/i], [l, [h, "NextBook"], [p, m]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], l, [p, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], l, [p, v]], [/\b(ph-1) /i], [l, [h, "Essential"], [p, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [l, [h, "Envizen"], [p, m]], [/\b(trio[-\w\. ]+) b/i], [l, [h, "MachSpeed"], [p, m]], [/\btu_(1491) b/i], [l, [h, "Rotor"], [p, m]], [/(shield[\w ]+) b/i], [l, [h, "Nvidia"], [p, m]], [/(sprint) (\w+)/i], [h, l, [p, v]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [h, M], [p, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [l, [h, N], [p, m]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [l, [h, N], [p, v]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, l, [p, y]], [/droid.+; (shield) bui/i], [l, [h, "Nvidia"], [p, y]], [/(playstation [345portablevi]+)/i], [l, [h, R], [p, y]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [l, [h, M], [p, y]], [/smart-tv.+(samsung)/i], [h, [p, _]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [h, B], [p, _]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, "LG"], [p, _]], [/(apple) ?tv/i], [h, [l, x + " TV"], [p, _]], [/crkey/i], [[l, O + "cast"], [h, K], [p, _]], [/droid.+aft(\w)( bui|\))/i], [l, [h, w], [p, _]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [l, [h, L], [p, _]], [/(bravia[\w ]+)( bui|\))/i], [l, [h, R], [p, _]], [/(mitv-\w{5}) bui/i], [l, [h, F], [p, _]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[h, H], [l, H], [p, _]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, _]], [/((pebble))app/i], [h, l, [p, b]], [/droid.+; (glass) \d/i], [l, [h, K], [p, b]], [/droid.+; (wt63?0{2,3})\)/i], [l, [h, N], [p, b]], [/(quest( 2)?)/i], [l, [h, P], [p, b]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [p, S]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [l, [p, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [l, [p, m]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, m]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, v]], [/(android[-\w\. ]{0,9});.+buil/i], [l, [h, "Generic"]]],
    engine: [[/windows.+ edge\/([\w\.]+)/i], [d, [f, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [d, [f, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [f, d], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [d, f]],
    os: [[/microsoft (windows) (vista|xp)/i], [f, d], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [f, [d, V, J]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[f, "Windows"], [d, V, J]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[d, /_/g, "."], [f, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[f, "Mac OS"], [d, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [d, f], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [f, d], [/\(bb(10);/i], [d, [f, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [d, [f, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [d, [f, D + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [d, [f, "webOS"]], [/crkey\/([\d\.]+)/i], [d, [f, O + "cast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[f, "Chromium OS"], d], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [f, d], [/(sunos) ?([\w\.\d]*)/i], [[f, "Solaris"], d], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [f, d]]
  };
  var X = function (t, e) {
    if (typeof t === u && (e = t, t = o), !(this instanceof X)) return new X(t, e).getResult();
    var r = t || (typeof i !== s && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : "");
    var n = e ? z(G, e) : G;
    this.getBrowser = function () {
      var t;
      var e = {};
      e[f] = o;
      e[d] = o;
      W.call(e, r, n.browser);
      e.major = typeof (t = e.version) === c ? t.replace(/[^\d\.]/g, "").split(".")[0] : o;
      return e;
    };
    this.getCPU = function () {
      var t = {};
      t[g] = o;
      W.call(t, r, n.cpu);
      return t;
    };
    this.getDevice = function () {
      var t = {};
      t[h] = o;
      t[l] = o;
      t[p] = o;
      W.call(t, r, n.device);
      return t;
    };
    this.getEngine = function () {
      var t = {};
      t[f] = o;
      t[d] = o;
      W.call(t, r, n.engine);
      return t;
    };
    this.getOS = function () {
      var t = {};
      t[f] = o;
      t[d] = o;
      W.call(t, r, n.os);
      return t;
    };
    this.getResult = function () {
      return {
        ua: this.getUA(),
        browser: this.getBrowser(),
        engine: this.getEngine(),
        os: this.getOS(),
        device: this.getDevice(),
        cpu: this.getCPU()
      };
    };
    this.getUA = function () {
      return r;
    };
    this.setUA = function (t) {
      r = typeof t === c && t.length > 350 ? H(t, 350) : t;
      return this;
    };
    this.setUA(r);
    return this;
  };
  X.VERSION = "0.7.33";
  X.BROWSER = j([f, d, "major"]);
  X.CPU = j([g]);
  X.DEVICE = j([l, h, p, y, v, _, m, b, S]);
  X.ENGINE = X.OS = j([f, d]);
  typeof exports !== s ? (module.exports && (exports = module.exports = X), exports.UAParser = X) : require.amdO ? o !== (n = function () {
    return X;
  }.call(exports, require, exports, module)) && (module.exports = n) : typeof i !== s && (i.UAParser = X);
  var $ = typeof i !== s && (i.jQuery || i.Zepto);
  if ($ && !$.ua) {
    var Y = new X();
    $.ua = Y.getResult();
    $.ua.get = function () {
      return Y.getUA();
    };
    $.ua.set = function (t) {
      Y.setUA(t);
      var e = Y.getResult();
      for (var r in e) $.ua[r] = e[r];
    };
  }
}("object" == typeof window ? window : this);