function t(e) {
  return e && e.__esModule ? e.$$default : e;
}
var f;
var r;
var a;
var o;
var u;
var l;
var d = {};
var s = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(e, n) {
  for (var i in n) e[i] = n[i];
  return e;
}
function p(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function g(e, n, i) {
  var t;
  var r;
  var a;
  var o = {};
  for (a in n) "key" == a ? t = n[a] : "ref" == a ? r = n[a] : o[a] = n[a];
  if ($$arguments.length > 2 && (o.children = $$arguments.length > 3 ? f.call(arguments, 2) : i), "function" == typeof e && null != e.defaultProps) for (a in e.defaultProps) void 0 === o[a] && (o[a] = e.defaultProps[a]);
  return m(e, o, t, r, null);
}
function m(e, n, i, t, f) {
  var o = {
    type: e,
    props: n,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: f
  };
  null == f && null != r.vnode && r.vnode(o);
  return o;
}
function _(e) {
  return e.children;
}
function b(e, n) {
  this.props = e;
  this.context = n;
}
function y(e, n) {
  if (null == n) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var i; n < e.__k.length; n++) if (null != (i = e.__k[n]) && null != i.__e) return i.__e;
  return "function" == typeof e.type ? y(e) : null;
}
function v(e) {
  (!e.__d && (e.__d = !0) && o.push(e) && !w.__r++ || l !== r.debounceRendering) && ((l = r.debounceRendering) || u)(w);
}
function w() {
  for (var e; w.__r = o.length;) {
    e = o.sort(function (e, n) {
      return e.__v.__b - n.__v.__b;
    });
    o = [];
    e.some(function (e) {
      var n;
      var i;
      var t;
      var f;
      var r;
      e.__d && (f = (t = e.__v).__e, (r = e.__P) && (n = [], (i = h({}, t)).__v = t.__v + 1, L(r, t, i, e.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [f] : null, n, f, t.__h), N(n, t), t.__e != f && function e(n) {
        var i;
        var t;
        if (null != (n = n.__) && null != n.__c) {
          for (n.__e = n.__c.base = null, i = 0; i < n.__k.length; i++) if (null != (t = n.__k[i]) && null != t.__e) {
            n.__e = n.__c.base = t.__e;
            break;
          }
          return e(n);
        }
      }(t)));
    });
  }
}
function k(e, n, i, t, f, a, o, u, l, c) {
  var h;
  var g;
  var b;
  var v;
  var w;
  var k;
  var S;
  var x = t && t.__k || s;
  var C = x.length;
  for (i.__k = [], h = 0; h < n.length; h++) if (null != (v = i.__k[h] = n[h] || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? m(null, v, null, null, v) : Array.isArray(v) ? m(_, {
    children: v
  }, null, null, null) : v.__b > 0 ? m(v.type, v.props, v.key, null, v.__v) : v)) {
    if (v.__ = i, v.__b = i.__b + 1, x[h] || b && v.key == b.key && v.type === b.type) x[h] = void 0;else for (g = 0; g < C; g++) {
      if ((b = x[g]) && v.key == b.key && v.type === b.type) {
        x[g] = void 0;
        break;
      }
      b = null;
    }
    L(e, v, b = b || d, f, a, o, u, l, c);
    w = v.__e;
    (g = v.ref) && b.ref != g && (S || (S = []), b.ref && S.push(b.ref, null, v), S.push(g, v.__c || w, v));
    null != w ? (null == k && (k = w), "function" == typeof v.type && v.__k === b.__k ? v.__d = l = function e(n, i, t) {
      for (r = n.__k, a = 0, void 0; r && a < r.length; a++) {
        var f;
        var r;
        var a;
        (f = r[a]) && (f.__ = n, i = "function" == typeof f.type ? e(f, i, t) : E(t, f, f, r, f.__e, i));
      }
      return i;
    }(v, l, e) : l = E(e, v, b, x, w, l), "function" == typeof i.type && (i.__d = l)) : l && b.__e == l && l.parentNode != e && (l = y(b));
  }
  for (i.__e = k, h = C; h--;) null != x[h] && ("function" == typeof i.type && null != x[h].__e && x[h].__e == i.__d && (i.__d = y(t, h + 1)), function e(n, i, t) {
    var f;
    var a;
    if (r.unmount && r.unmount(n), (f = n.ref) && (f.current && f.current !== n.__e || O(f, null, i)), null != (f = n.__c)) {
      if (f.componentWillUnmount) try {
        f.componentWillUnmount();
      } catch (e) {
        r.__e(e, i);
      }
      f.base = f.__P = null;
    }
    if (f = n.__k) for (a = 0; a < f.length; a++) f[a] && e(f[a], i, "function" != typeof n.type);
    t || null == n.__e || p(n.__e);
    n.__e = n.__d = void 0;
  }(x[h], x[h]));
  if (S) for (h = 0; h < S.length; h++) O(S[h], S[++h], S[++h]);
}
function S(e, n) {
  n = n || [];
  null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function (e) {
    S(e, n);
  }) : n.push(e));
  return n;
}
function E(e, n, i, t, f, r) {
  var a;
  var o;
  var u;
  if (void 0 !== n.__d) {
    a = n.__d;
    n.__d = void 0;
  } else if (null == i || f != r || null == f.parentNode) i: if (null == r || r.parentNode !== e) {
    e.appendChild(f);
    a = null;
  } else {
    for (o = r, u = 0; (o = o.nextSibling) && u < t.length; u += 2) if (o == f) break i;
    e.insertBefore(f, r);
    a = r;
  }
  return void 0 !== a ? a : f.nextSibling;
}
function x(e, n, i) {
  "-" === n[0] ? e.setProperty(n, i) : e[n] = null == i ? "" : "number" != typeof i || c.test(n) ? i : i + "px";
}
function C(e, n, i, t, f) {
  var r;
  i: if ("style" === n) {
    if ("string" == typeof i) e.style.cssText = i;else {
      if ("string" == typeof t && (e.style.cssText = t = ""), t) for (n in t) i && n in i || x(e.style, n, "");
      if (i) for (n in i) t && i[n] === t[n] || x(e.style, n, i[n]);
    }
  } else if ("o" === n[0] && "n" === n[1]) {
    r = n !== (n = n.replace(/Capture$/, ""));
    n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2);
    e.l || (e.l = {});
    e.l[n + r] = i;
    i ? t || e.addEventListener(n, r ? P : T, r) : e.removeEventListener(n, r ? P : T, r);
  } else if ("dangerouslySetInnerHTML" !== n) {
    if (f) n = n.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== n && "list" !== n && "form" !== n && "tabIndex" !== n && "download" !== n && n in e) try {
      e[n] = i;
      break i;
    } catch (e) {}
    "function" == typeof i || (null != i && (!1 !== i || "a" === n[0] && "r" === n[1]) ? e.setAttribute(n, i) : e.removeAttribute(n));
  }
}
function T(e) {
  this.l[e.type + !1](r.event ? r.event(e) : e);
}
function P(e) {
  this.l[e.type + !0](r.event ? r.event(e) : e);
}
function L(e, n, i, t, a, o, u, l, s) {
  var c;
  var g;
  var m;
  var v;
  var w;
  var S;
  var E;
  var x;
  var T;
  var P;
  var L;
  var N = n.type;
  if (void 0 !== n.constructor) return null;
  null != i.__h && (s = i.__h, l = n.__e = i.__e, n.__h = null, o = [l]);
  (c = r.__b) && c(n);
  try {
    i: if ("function" == typeof N) {
      if (x = n.props, T = (c = N.contextType) && t[c.__c], P = c ? T ? T.props.value : c.__ : t, i.__c ? E = (g = n.__c = i.__c).__ = g.__E : ("prototype" in N && N.prototype.render ? n.__c = g = new N(x, P) : (n.__c = g = new b(x, P), g.constructor = N, g.render = A), T && T.sub(g), g.props = x, g.state || (g.state = {}), g.context = P, g.__n = t, m = g.__d = !0, g.__h = []), null == g.__s && (g.__s = g.state), null != N.getDerivedStateFromProps && (g.__s == g.state && (g.__s = h({}, g.__s)), h(g.__s, N.getDerivedStateFromProps(x, g.__s))), v = g.props, w = g.state, m) {
        null == N.getDerivedStateFromProps && null != g.componentWillMount && g.componentWillMount();
        null != g.componentDidMount && g.__h.push(g.componentDidMount);
      } else {
        if (null == N.getDerivedStateFromProps && x !== v && null != g.componentWillReceiveProps && g.componentWillReceiveProps(x, P), !g.__e && null != g.shouldComponentUpdate && !1 === g.shouldComponentUpdate(x, g.__s, P) || n.__v === i.__v) {
          g.props = x;
          g.state = g.__s;
          n.__v !== i.__v && (g.__d = !1);
          g.__v = n;
          n.__e = i.__e;
          n.__k = i.__k;
          n.__k.forEach(function (e) {
            e && (e.__ = n);
          });
          g.__h.length && u.push(g);
          break i;
        }
        null != g.componentWillUpdate && g.componentWillUpdate(x, g.__s, P);
        null != g.componentDidUpdate && g.__h.push(function () {
          g.componentDidUpdate(v, w, S);
        });
      }
      g.context = P;
      g.props = x;
      g.state = g.__s;
      (c = r.__r) && c(n);
      g.__d = !1;
      g.__v = n;
      g.__P = e;
      c = g.render(g.props, g.state, g.context);
      g.state = g.__s;
      null != g.getChildContext && (t = h(h({}, t), g.getChildContext()));
      m || null == g.getSnapshotBeforeUpdate || (S = g.getSnapshotBeforeUpdate(v, w));
      L = null != c && c.type === _ && null == c.key ? c.props.children : c;
      k(e, Array.isArray(L) ? L : [L], n, i, t, a, o, u, l, s);
      g.base = n.__e;
      n.__h = null;
      g.__h.length && u.push(g);
      E && (g.__E = g.__ = null);
      g.__e = !1;
    } else null == o && n.__v === i.__v ? (n.__k = i.__k, n.__e = i.__e) : n.__e = function (e, n, i, t, r, a, o, u) {
      var l;
      var s;
      var c;
      var h = i.props;
      var g = n.props;
      var m = n.type;
      var _ = 0;
      if ("svg" === m && (r = !0), null != a) {
        for (; _ < a.length; _++) if ((l = a[_]) && "setAttribute" in l == !!m && (m ? l.localName === m : 3 === l.nodeType)) {
          e = l;
          a[_] = null;
          break;
        }
      }
      if (null == e) {
        if (null === m) return document.createTextNode(g);
        e = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, g.is && g);
        a = null;
        u = !1;
      }
      if (null === m) h === g || u && e.data === g || (e.data = g);else {
        if (a = a && f.call(e.childNodes), s = (h = i.props || d).dangerouslySetInnerHTML, c = g.dangerouslySetInnerHTML, !u) {
          if (null != a) for (h = {}, _ = 0; _ < e.attributes.length; _++) h[e.attributes[_].name] = e.attributes[_].value;
          (c || s) && (c && (s && c.__html == s.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
        }
        if (function (e, n, i, t, f) {
          var r;
          for (r in i) "children" === r || "key" === r || r in n || C(e, r, null, i[r], t);
          for (r in n) f && "function" != typeof n[r] || "children" === r || "key" === r || "value" === r || "checked" === r || i[r] === n[r] || C(e, r, n[r], i[r], t);
        }(e, g, h, r, u), c) n.__k = [];else if (_ = n.props.children, k(e, Array.isArray(_) ? _ : [_], n, i, t, r && "foreignObject" !== m, a, o, a ? a[0] : i.__k && y(i, 0), u), null != a) for (_ = a.length; _--;) null != a[_] && p(a[_]);
        u || ("value" in g && void 0 !== (_ = g.value) && (_ !== h.value || _ !== e.value || "progress" === m && !_) && C(e, "value", _, h.value, !1), "checked" in g && void 0 !== (_ = g.checked) && _ !== e.checked && C(e, "checked", _, h.checked, !1));
      }
      return e;
    }(i.__e, n, i, t, a, o, u, s);
    (c = r.diffed) && c(n);
  } catch (e) {
    n.__v = null;
    (s || null != o) && (n.__e = l, n.__h = !!s, o[o.indexOf(l)] = null);
    r.__e(e, n, i);
  }
}
function N(e, n) {
  r.__c && r.__c(n, e);
  e.some(function (n) {
    try {
      e = n.__h;
      n.__h = [];
      e.some(function (e) {
        e.call(n);
      });
    } catch (e) {
      r.__e(e, n.__v);
    }
  });
}
function O(e, n, i) {
  try {
    "function" == typeof e ? e(n) : e.current = n;
  } catch (e) {
    r.__e(e, i);
  }
}
function A(e, n, i) {
  return this.constructor(e, i);
}
function M(e, n, i) {
  var t;
  var a;
  var o;
  r.__ && r.__(e, n);
  a = (t = "function" == typeof i) ? null : i && i.__k || n.__k;
  o = [];
  L(n, e = (!t && i || n).__k = g(_, null, [e]), a || d, d, void 0 !== n.ownerSVGElement, !t && i ? [i] : a ? null : n.firstChild ? f.call(n.childNodes) : null, o, !t && i ? i : a ? a.__e : n.firstChild, t);
  N(o, e);
}
f = s.slice;
r = {
  __e: function (e, n) {
    for (void 0; n = n.__;) {
      var i;
      var t;
      var f;
      if ((i = n.__c) && !i.__) try {
        if ((t = i.constructor) && null != t.getDerivedStateFromError && (i.setState(t.getDerivedStateFromError(e)), f = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e), f = i.__d), f) return i.__E = i;
      } catch (n) {
        e = n;
      }
    }
    throw e;
  }
};
a = 0;
b.prototype.setState = function (e, n) {
  var i;
  i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state);
  "function" == typeof e && (e = e(h({}, i), this.props));
  e && h(i, e);
  null != e && this.__v && (n && this.__h.push(n), v(this));
};
b.prototype.forceUpdate = function (e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), v(this));
};
b.prototype.render = _;
o = [];
u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
w.__r = 0;
var R = 0;
function j(e, n, i, t, f) {
  var a;
  var o;
  var u = {};
  for (o in n) "ref" == o ? a = n[o] : u[o] = n[o];
  var l = {
    type: e,
    props: u,
    key: i,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --R,
    __source: t,
    __self: f
  };
  if ("function" == typeof e && (a = e.defaultProps)) for (o in a) void 0 === u[o] && (u[o] = a[o]);
  r.vnode && r.vnode(l);
  return l;
}
async function I(e = 1) {
  for (let n in [...Array(e).keys()]) await new Promise(requestAnimationFrame);
}
function z(e) {
  try {
    let n = window.localStorage[`emoji-mart.${e}`];
    if (n) return JSON.parse(n);
  } catch (e) {}
}
ef = JSON.parse('{"search":"Search","search_no_results":"That emoji couldn\u2019t be found","pick":"Pick an emoji\u2026","categories":{"activity":"Activity","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');
er = JSON.parse('{"categories":[{"id":"people","emojis":["grinning","smiley","smile","grin","laughing","sweat_smile","rolling_on_the_floor_laughing","joy","slightly_smiling_face","upside_down_face","melting_face","wink","blush","innocent","smiling_face_with_3_hearts","heart_eyes","star-struck","kissing_heart","kissing","relaxed","kissing_closed_eyes","kissing_smiling_eyes","smiling_face_with_tear","yum","stuck_out_tongue","stuck_out_tongue_winking_eye","zany_face","stuck_out_tongue_closed_eyes","money_mouth_face","hugging_face","face_with_hand_over_mouth","face_with_open_eyes_and_hand_over_mouth","face_with_peeking_eye","shushing_face","thinking_face","saluting_face","zipper_mouth_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","dotted_line_face","face_in_clouds","smirk","unamused","face_with_rolling_eyes","grimacing","face_exhaling","lying_face","shaking_face","relieved","pensive","sleepy","drooling_face","sleeping","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","hot_face","cold_face","woozy_face","dizzy_face","face_with_spiral_eyes","exploding_head","face_with_cowboy_hat","partying_face","disguised_face","sunglasses","nerd_face","face_with_monocle","confused","face_with_diagonal_mouth","worried","slightly_frowning_face","white_frowning_face","open_mouth","hushed","astonished","flushed","pleading_face","face_holding_back_tears","frowning","anguished","fearful","cold_sweat","disappointed_relieved","cry","sob","scream","confounded","persevere","disappointed","sweat","weary","tired_face","yawning_face","triumph","rage","angry","face_with_symbols_on_mouth","smiling_imp","imp","skull","skull_and_crossbones","hankey","clown_face","japanese_ogre","japanese_goblin","ghost","alien","space_invader","wave","raised_back_of_hand","raised_hand_with_fingers_splayed","hand","spock-hand","rightwards_hand","leftwards_hand","palm_down_hand","palm_up_hand","leftwards_pushing_hand","rightwards_pushing_hand","ok_hand","pinched_fingers","pinching_hand","v","crossed_fingers","hand_with_index_finger_and_thumb_crossed","i_love_you_hand_sign","the_horns","call_me_hand","point_left","point_right","point_up_2","middle_finger","point_down","point_up","index_pointing_at_the_viewer","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","clap","raised_hands","heart_hands","open_hands","palms_up_together","handshake","pray","writing_hand","nail_care","selfie","muscle","mechanical_arm","mechanical_leg","leg","foot","ear","ear_with_hearing_aid","nose","brain","anatomical_heart","lungs","tooth","bone","eyes","eye","tongue","lips","biting_lip","baby","child","boy","girl","adult","person_with_blond_hair","man","bearded_person","man_with_beard","woman_with_beard","red_haired_man","curly_haired_man","white_haired_man","bald_man","woman","red_haired_woman","red_haired_person","curly_haired_woman","curly_haired_person","white_haired_woman","white_haired_person","bald_woman","bald_person","blond-haired-woman","blond-haired-man","older_adult","older_man","older_woman","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","deaf_person","deaf_man","deaf_woman","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","health_worker","male-doctor","female-doctor","student","male-student","female-student","teacher","male-teacher","female-teacher","judge","male-judge","female-judge","farmer","male-farmer","female-farmer","cook","male-cook","female-cook","mechanic","male-mechanic","female-mechanic","factory_worker","male-factory-worker","female-factory-worker","office_worker","male-office-worker","female-office-worker","scientist","male-scientist","female-scientist","technologist","male-technologist","female-technologist","singer","male-singer","female-singer","artist","male-artist","female-artist","pilot","male-pilot","female-pilot","astronaut","male-astronaut","female-astronaut","firefighter","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","ninja","construction_worker","male-construction-worker","female-construction-worker","person_with_crown","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","person_in_tuxedo","man_in_tuxedo","woman_in_tuxedo","bride_with_veil","man_with_veil","woman_with_veil","pregnant_woman","pregnant_man","pregnant_person","breast-feeding","woman_feeding_baby","man_feeding_baby","person_feeding_baby","angel","santa","mrs_claus","mx_claus","superhero","male_superhero","female_superhero","supervillain","male_supervillain","female_supervillain","mage","male_mage","female_mage","fairy","male_fairy","female_fairy","vampire","male_vampire","female_vampire","merperson","merman","mermaid","elf","male_elf","female_elf","genie","male_genie","female_genie","zombie","male_zombie","female_zombie","troll","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","standing_person","man_standing","woman_standing","kneeling_person","man_kneeling","woman_kneeling","person_with_probing_cane","man_with_probing_cane","woman_with_probing_cane","person_in_motorized_wheelchair","man_in_motorized_wheelchair","woman_in_motorized_wheelchair","person_in_manual_wheelchair","man_in_manual_wheelchair","woman_in_manual_wheelchair","runner","man-running","woman-running","dancer","man_dancing","man_in_business_suit_levitating","dancers","men-with-bunny-ears-partying","women-with-bunny-ears-partying","person_in_steamy_room","man_in_steamy_room","woman_in_steamy_room","person_climbing","man_climbing","woman_climbing","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","person_in_lotus_position","man_in_lotus_position","woman_in_lotus_position","bath","sleeping_accommodation","people_holding_hands","two_women_holding_hands","man_and_woman_holding_hands","two_men_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","people_hugging","footprints","robot_face","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","love_letter","cupid","gift_heart","sparkling_heart","heartpulse","heartbeat","revolving_hearts","two_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","broken_heart","heart_on_fire","mending_heart","heart","pink_heart","orange_heart","yellow_heart","green_heart","blue_heart","light_blue_heart","purple_heart","brown_heart","black_heart","grey_heart","white_heart","kiss","100","anger","boom","dizzy","sweat_drops","dash","hole","speech_balloon","eye-in-speech-bubble","left_speech_bubble","right_anger_bubble","thought_balloon","zzz"]},{"id":"nature","emojis":["monkey_face","monkey","gorilla","orangutan","dog","dog2","guide_dog","service_dog","poodle","wolf","fox_face","raccoon","cat","cat2","black_cat","lion_face","tiger","tiger2","leopard","horse","moose","donkey","racehorse","unicorn_face","zebra_face","deer","bison","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","llama","giraffe_face","elephant","mammoth","rhinoceros","hippopotamus","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","beaver","hedgehog","bat","bear","polar_bear","koala","panda_face","sloth","otter","skunk","kangaroo","badger","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","swan","owl","dodo","feather","flamingo","peacock","parrot","wing","black_bird","goose","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","seal","fish","tropical_fish","blowfish","shark","octopus","shell","coral","jellyfish","snail","butterfly","bug","ant","bee","beetle","ladybug","cricket","cockroach","spider","spider_web","scorpion","mosquito","fly","worm","microbe","bouquet","cherry_blossom","white_flower","lotus","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","hyacinth","seedling","potted_plant","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves","empty_nest","nest_with_eggs","mushroom"]},{"id":"foods","emojis":["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","mango","apple","green_apple","pear","peach","cherries","strawberry","blueberries","kiwifruit","tomato","olive","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","bell_pepper","cucumber","leafy_green","broccoli","garlic","onion","peanuts","beans","chestnut","ginger_root","pea_pod","bread","croissant","baguette_bread","flatbread","pretzel","bagel","pancakes","waffle","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","tamale","stuffed_flatbread","falafel","egg","fried_egg","shallow_pan_of_food","stew","fondue","bowl_with_spoon","green_salad","popcorn","butter","salt","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","moon_cake","dango","dumpling","fortune_cookie","takeout_box","crab","lobster","shrimp","squid","oyster","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","cupcake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","teapot","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","pouring_liquid","cup_with_straw","bubble_tea","beverage_box","mate_drink","ice_cube","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","jar","amphora"]},{"id":"activity","emojis":["jack_o_lantern","christmas_tree","fireworks","sparkler","firecracker","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","red_envelope","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","softball","basketball","volleyball","football","rugby_football","tennis","flying_disc","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","lacrosse","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","golf","ice_skate","fishing_pole_and_fish","diving_mask","running_shirt_with_sash","ski","sled","curling_stone","dart","yo-yo","kite","gun","8ball","crystal_ball","magic_wand","video_game","joystick","slot_machine","game_die","jigsaw","teddy_bear","pinata","mirror_ball","nesting_dolls","spades","hearts","diamonds","clubs","chess_pawn","black_joker","mahjong","flower_playing_cards","performing_arts","frame_with_picture","art","thread","sewing_needle","yarn","knot"]},{"id":"places","emojis":["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","compass","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","bricks","rock","wood","hut","house_buildings","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","hindu_temple","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","cityscape","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","carousel_horse","playground_slide","ferris_wheel","roller_coaster","barber","circus_tent","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","pickup_truck","truck","articulated_lorry","tractor","racing_car","racing_motorcycle","motor_scooter","manual_wheelchair","motorized_wheelchair","auto_rickshaw","bike","scooter","skateboard","roller_skate","busstop","motorway","railway_track","oil_drum","fuelpump","wheel","rotating_light","traffic_light","vertical_traffic_light","octagonal_sign","construction","anchor","ring_buoy","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","parachute","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","luggage","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","ringed_planet","star","star2","stars","milky_way","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{"id":"objects","emojis":["eyeglasses","dark_sunglasses","goggles","lab_coat","safety_vest","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","sari","one-piece_swimsuit","briefs","shorts","bikini","womans_clothes","folding_hand_fan","purse","handbag","pouch","shopping_bags","school_satchel","thong_sandal","mans_shoe","athletic_shoe","hiking_boot","womans_flat_shoe","high_heel","sandal","ballet_shoes","boot","hair_pick","crown","womans_hat","tophat","mortar_board","billed_cap","military_helmet","helmet_with_white_cross","prayer_beads","lipstick","ring","gem","mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","accordion","guitar","musical_keyboard","trumpet","violin","banjo","drum_with_drumsticks","long_drum","maracas","flute","iphone","calling","phone","telephone_receiver","pager","fax","battery","low_battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","abacus","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","candle","bulb","flashlight","izakaya_lantern","diya_lamp","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","coin","yen","dollar","euro","pound","money_with_wings","credit_card","receipt","chart","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","axe","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","bomb","boomerang","bow_and_arrow","shield","carpentry_saw","wrench","screwdriver","nut_and_bolt","gear","compression","scales","probing_cane","link","chains","hook","toolbox","magnet","ladder","alembic","test_tube","petri_dish","dna","microscope","telescope","satellite_antenna","syringe","drop_of_blood","pill","adhesive_bandage","crutch","stethoscope","x-ray","door","elevator","mirror","window","bed","couch_and_lamp","chair","toilet","plunger","shower","bathtub","mouse_trap","razor","lotion_bottle","safety_pin","broom","basket","roll_of_paper","bucket","soap","bubbles","toothbrush","sponge","fire_extinguisher","shopping_trolley","smoking","coffin","headstone","funeral_urn","nazar_amulet","hamsa","moyai","placard","identification_card"]},{"id":"symbols","emojis":["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","khanda","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","wireless","vibration_mode","mobile_phone_off","female_sign","male_sign","transgender_symbol","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_equals_sign","infinity","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","currency_exchange","heavy_dollar_sign","medical_symbol","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","x","negative_squared_cross_mark","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","red_circle","large_orange_circle","large_yellow_circle","large_green_circle","large_blue_circle","large_purple_circle","large_brown_circle","black_circle","white_circle","large_red_square","large_orange_square","large_yellow_square","large_green_square","large_blue_square","large_purple_square","large_brown_square","black_large_square","white_large_square","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_small_square","white_small_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","white_square_button","black_square_button"]},{"id":"flags","emojis":["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-un","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","pirate_flag","rainbow-flag","ru","transgender_flag","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],"emojis":{"100":[{"unified":"1f4af"}],"1234":[{"unified":"1f522"}],"grinning":[{"unified":"1f600"}],"smiley":[{"unified":"1f603"}],"smile":[{"unified":"1f604"}],"grin":[{"unified":"1f601"}],"laughing":[{"unified":"1f606"}],"sweat_smile":[{"unified":"1f605"}],"rolling_on_the_floor_laughing":[{"unified":"1f923"}],"joy":[{"unified":"1f602"}],"slightly_smiling_face":[{"unified":"1f642"}],"upside_down_face":[{"unified":"1f643"}],"melting_face":[{"unified":"1fae0"}],"wink":[{"unified":"1f609"}],"blush":[{"unified":"1f60a"}],"innocent":[{"unified":"1f607"}],"smiling_face_with_3_hearts":[{"unified":"1f970"}],"heart_eyes":[{"unified":"1f60d"}],"star-struck":[{"unified":"1f929"}],"kissing_heart":[{"unified":"1f618"}],"kissing":[{"unified":"1f617"}],"relaxed":[{"unified":"263a-fe0f"}],"kissing_closed_eyes":[{"unified":"1f61a"}],"kissing_smiling_eyes":[{"unified":"1f619"}],"smiling_face_with_tear":[{"unified":"1f972"}],"yum":[{"unified":"1f60b"}],"stuck_out_tongue":[{"unified":"1f61b"}],"stuck_out_tongue_winking_eye":[{"unified":"1f61c"}],"zany_face":[{"unified":"1f92a"}],"stuck_out_tongue_closed_eyes":[{"unified":"1f61d"}],"money_mouth_face":[{"unified":"1f911"}],"hugging_face":[{"unified":"1f917"}],"face_with_hand_over_mouth":[{"unified":"1f92d"}],"face_with_open_eyes_and_hand_over_mouth":[{"unified":"1fae2"}],"face_with_peeking_eye":[{"unified":"1fae3"}],"shushing_face":[{"unified":"1f92b"}],"thinking_face":[{"unified":"1f914"}],"saluting_face":[{"unified":"1fae1"}],"zipper_mouth_face":[{"unified":"1f910"}],"face_with_raised_eyebrow":[{"unified":"1f928"}],"neutral_face":[{"unified":"1f610"}],"expressionless":[{"unified":"1f611"}],"no_mouth":[{"unified":"1f636"}],"dotted_line_face":[{"unified":"1fae5"}],"face_in_clouds":[{"unified":"1f636-200d-1f32b-fe0f"}],"smirk":[{"unified":"1f60f"}],"unamused":[{"unified":"1f612"}],"face_with_rolling_eyes":[{"unified":"1f644"}],"grimacing":[{"unified":"1f62c"}],"face_exhaling":[{"unified":"1f62e-200d-1f4a8"}],"lying_face":[{"unified":"1f925"}],"shaking_face":[{"unified":"1fae8"}],"relieved":[{"unified":"1f60c"}],"pensive":[{"unified":"1f614"}],"sleepy":[{"unified":"1f62a"}],"drooling_face":[{"unified":"1f924"}],"sleeping":[{"unified":"1f634"}],"mask":[{"unified":"1f637"}],"face_with_thermometer":[{"unified":"1f912"}],"face_with_head_bandage":[{"unified":"1f915"}],"nauseated_face":[{"unified":"1f922"}],"face_vomiting":[{"unified":"1f92e"}],"sneezing_face":[{"unified":"1f927"}],"hot_face":[{"unified":"1f975"}],"cold_face":[{"unified":"1f976"}],"woozy_face":[{"unified":"1f974"}],"dizzy_face":[{"unified":"1f635"}],"face_with_spiral_eyes":[{"unified":"1f635-200d-1f4ab"}],"exploding_head":[{"unified":"1f92f"}],"face_with_cowboy_hat":[{"unified":"1f920"}],"partying_face":[{"unified":"1f973"}],"disguised_face":[{"unified":"1f978"}],"sunglasses":[{"unified":"1f60e"}],"nerd_face":[{"unified":"1f913"}],"face_with_monocle":[{"unified":"1f9d0"}],"confused":[{"unified":"1f615"}],"face_with_diagonal_mouth":[{"unified":"1fae4"}],"worried":[{"unified":"1f61f"}],"slightly_frowning_face":[{"unified":"1f641"}],"white_frowning_face":[{"unified":"2639-fe0f"}],"open_mouth":[{"unified":"1f62e"}],"hushed":[{"unified":"1f62f"}],"astonished":[{"unified":"1f632"}],"flushed":[{"unified":"1f633"}],"pleading_face":[{"unified":"1f97a"}],"face_holding_back_tears":[{"unified":"1f979"}],"frowning":[{"unified":"1f626"}],"anguished":[{"unified":"1f627"}],"fearful":[{"unified":"1f628"}],"cold_sweat":[{"unified":"1f630"}],"disappointed_relieved":[{"unified":"1f625"}],"cry":[{"unified":"1f622"}],"sob":[{"unified":"1f62d"}],"scream":[{"unified":"1f631"}],"confounded":[{"unified":"1f616"}],"persevere":[{"unified":"1f623"}],"disappointed":[{"unified":"1f61e"}],"sweat":[{"unified":"1f613"}],"weary":[{"unified":"1f629"}],"tired_face":[{"unified":"1f62b"}],"yawning_face":[{"unified":"1f971"}],"triumph":[{"unified":"1f624"}],"rage":[{"unified":"1f621"}],"angry":[{"unified":"1f620"}],"face_with_symbols_on_mouth":[{"unified":"1f92c"}],"smiling_imp":[{"unified":"1f608"}],"imp":[{"unified":"1f47f"}],"skull":[{"unified":"1f480"}],"skull_and_crossbones":[{"unified":"2620-fe0f"}],"hankey":[{"unified":"1f4a9"}],"clown_face":[{"unified":"1f921"}],"japanese_ogre":[{"unified":"1f479"}],"japanese_goblin":[{"unified":"1f47a"}],"ghost":[{"unified":"1f47b"}],"alien":[{"unified":"1f47d"}],"space_invader":[{"unified":"1f47e"}],"robot_face":[{"unified":"1f916"}],"smiley_cat":[{"unified":"1f63a"}],"smile_cat":[{"unified":"1f638"}],"joy_cat":[{"unified":"1f639"}],"heart_eyes_cat":[{"unified":"1f63b"}],"smirk_cat":[{"unified":"1f63c"}],"kissing_cat":[{"unified":"1f63d"}],"scream_cat":[{"unified":"1f640"}],"crying_cat_face":[{"unified":"1f63f"}],"pouting_cat":[{"unified":"1f63e"}],"see_no_evil":[{"unified":"1f648"}],"hear_no_evil":[{"unified":"1f649"}],"speak_no_evil":[{"unified":"1f64a"}],"love_letter":[{"unified":"1f48c"}],"cupid":[{"unified":"1f498"}],"gift_heart":[{"unified":"1f49d"}],"sparkling_heart":[{"unified":"1f496"}],"heartpulse":[{"unified":"1f497"}],"heartbeat":[{"unified":"1f493"}],"revolving_hearts":[{"unified":"1f49e"}],"two_hearts":[{"unified":"1f495"}],"heart_decoration":[{"unified":"1f49f"}],"heavy_heart_exclamation_mark_ornament":[{"unified":"2763-fe0f"}],"broken_heart":[{"unified":"1f494"}],"heart_on_fire":[{"unified":"2764-fe0f-200d-1f525"}],"mending_heart":[{"unified":"2764-fe0f-200d-1fa79"}],"heart":[{"unified":"2764-fe0f"}],"pink_heart":[{"unified":"1fa77"}],"orange_heart":[{"unified":"1f9e1"}],"yellow_heart":[{"unified":"1f49b"}],"green_heart":[{"unified":"1f49a"}],"blue_heart":[{"unified":"1f499"}],"light_blue_heart":[{"unified":"1fa75"}],"purple_heart":[{"unified":"1f49c"}],"brown_heart":[{"unified":"1f90e"}],"black_heart":[{"unified":"1f5a4"}],"grey_heart":[{"unified":"1fa76"}],"white_heart":[{"unified":"1f90d"}],"kiss":[{"unified":"1f48b"}],"anger":[{"unified":"1f4a2"}],"boom":[{"unified":"1f4a5"}],"dizzy":[{"unified":"1f4ab"}],"sweat_drops":[{"unified":"1f4a6"}],"dash":[{"unified":"1f4a8"}],"hole":[{"unified":"1f573-fe0f"}],"speech_balloon":[{"unified":"1f4ac"}],"eye-in-speech-bubble":[{"unified":"1f441-fe0f-200d-1f5e8-fe0f"}],"left_speech_bubble":[{"unified":"1f5e8-fe0f"}],"right_anger_bubble":[{"unified":"1f5ef-fe0f"}],"thought_balloon":[{"unified":"1f4ad"}],"zzz":[{"unified":"1f4a4"}],"wave":[{"unified":"1f44b"},{"unified":"1f44b-1f3fb"},{"unified":"1f44b-1f3fc"},{"unified":"1f44b-1f3fd"},{"unified":"1f44b-1f3fe"},{"unified":"1f44b-1f3ff"}],"raised_back_of_hand":[{"unified":"1f91a"},{"unified":"1f91a-1f3fb"},{"unified":"1f91a-1f3fc"},{"unified":"1f91a-1f3fd"},{"unified":"1f91a-1f3fe"},{"unified":"1f91a-1f3ff"}],"raised_hand_with_fingers_splayed":[{"unified":"1f590-fe0f"},{"unified":"1f590-1f3fb"},{"unified":"1f590-1f3fc"},{"unified":"1f590-1f3fd"},{"unified":"1f590-1f3fe"},{"unified":"1f590-1f3ff"}],"hand":[{"unified":"270b"},{"unified":"270b-1f3fb"},{"unified":"270b-1f3fc"},{"unified":"270b-1f3fd"},{"unified":"270b-1f3fe"},{"unified":"270b-1f3ff"}],"spock-hand":[{"unified":"1f596"},{"unified":"1f596-1f3fb"},{"unified":"1f596-1f3fc"},{"unified":"1f596-1f3fd"},{"unified":"1f596-1f3fe"},{"unified":"1f596-1f3ff"}],"rightwards_hand":[{"unified":"1faf1"},{"unified":"1faf1-1f3fb"},{"unified":"1faf1-1f3fc"},{"unified":"1faf1-1f3fd"},{"unified":"1faf1-1f3fe"},{"unified":"1faf1-1f3ff"}],"leftwards_hand":[{"unified":"1faf2"},{"unified":"1faf2-1f3fb"},{"unified":"1faf2-1f3fc"},{"unified":"1faf2-1f3fd"},{"unified":"1faf2-1f3fe"},{"unified":"1faf2-1f3ff"}],"palm_down_hand":[{"unified":"1faf3"},{"unified":"1faf3-1f3fb"},{"unified":"1faf3-1f3fc"},{"unified":"1faf3-1f3fd"},{"unified":"1faf3-1f3fe"},{"unified":"1faf3-1f3ff"}],"palm_up_hand":[{"unified":"1faf4"},{"unified":"1faf4-1f3fb"},{"unified":"1faf4-1f3fc"},{"unified":"1faf4-1f3fd"},{"unified":"1faf4-1f3fe"},{"unified":"1faf4-1f3ff"}],"leftwards_pushing_hand":[{"unified":"1faf7"},{"unified":"1faf7-1f3fb"},{"unified":"1faf7-1f3fc"},{"unified":"1faf7-1f3fd"},{"unified":"1faf7-1f3fe"},{"unified":"1faf7-1f3ff"}],"rightwards_pushing_hand":[{"unified":"1faf8"},{"unified":"1faf8-1f3fb"},{"unified":"1faf8-1f3fc"},{"unified":"1faf8-1f3fd"},{"unified":"1faf8-1f3fe"},{"unified":"1faf8-1f3ff"}],"ok_hand":[{"unified":"1f44c"},{"unified":"1f44c-1f3fb"},{"unified":"1f44c-1f3fc"},{"unified":"1f44c-1f3fd"},{"unified":"1f44c-1f3fe"},{"unified":"1f44c-1f3ff"}],"pinched_fingers":[{"unified":"1f90c"},{"unified":"1f90c-1f3fb"},{"unified":"1f90c-1f3fc"},{"unified":"1f90c-1f3fd"},{"unified":"1f90c-1f3fe"},{"unified":"1f90c-1f3ff"}],"pinching_hand":[{"unified":"1f90f"},{"unified":"1f90f-1f3fb"},{"unified":"1f90f-1f3fc"},{"unified":"1f90f-1f3fd"},{"unified":"1f90f-1f3fe"},{"unified":"1f90f-1f3ff"}],"v":[{"unified":"270c-fe0f"},{"unified":"270c-1f3fb"},{"unified":"270c-1f3fc"},{"unified":"270c-1f3fd"},{"unified":"270c-1f3fe"},{"unified":"270c-1f3ff"}],"crossed_fingers":[{"unified":"1f91e"},{"unified":"1f91e-1f3fb"},{"unified":"1f91e-1f3fc"},{"unified":"1f91e-1f3fd"},{"unified":"1f91e-1f3fe"},{"unified":"1f91e-1f3ff"}],"hand_with_index_finger_and_thumb_crossed":[{"unified":"1faf0"},{"unified":"1faf0-1f3fb"},{"unified":"1faf0-1f3fc"},{"unified":"1faf0-1f3fd"},{"unified":"1faf0-1f3fe"},{"unified":"1faf0-1f3ff"}],"i_love_you_hand_sign":[{"unified":"1f91f"},{"unified":"1f91f-1f3fb"},{"unified":"1f91f-1f3fc"},{"unified":"1f91f-1f3fd"},{"unified":"1f91f-1f3fe"},{"unified":"1f91f-1f3ff"}],"the_horns":[{"unified":"1f918"},{"unified":"1f918-1f3fb"},{"unified":"1f918-1f3fc"},{"unified":"1f918-1f3fd"},{"unified":"1f918-1f3fe"},{"unified":"1f918-1f3ff"}],"call_me_hand":[{"unified":"1f919"},{"unified":"1f919-1f3fb"},{"unified":"1f919-1f3fc"},{"unified":"1f919-1f3fd"},{"unified":"1f919-1f3fe"},{"unified":"1f919-1f3ff"}],"point_left":[{"unified":"1f448"},{"unified":"1f448-1f3fb"},{"unified":"1f448-1f3fc"},{"unified":"1f448-1f3fd"},{"unified":"1f448-1f3fe"},{"unified":"1f448-1f3ff"}],"point_right":[{"unified":"1f449"},{"unified":"1f449-1f3fb"},{"unified":"1f449-1f3fc"},{"unified":"1f449-1f3fd"},{"unified":"1f449-1f3fe"},{"unified":"1f449-1f3ff"}],"point_up_2":[{"unified":"1f446"},{"unified":"1f446-1f3fb"},{"unified":"1f446-1f3fc"},{"unified":"1f446-1f3fd"},{"unified":"1f446-1f3fe"},{"unified":"1f446-1f3ff"}],"middle_finger":[{"unified":"1f595"},{"unified":"1f595-1f3fb"},{"unified":"1f595-1f3fc"},{"unified":"1f595-1f3fd"},{"unified":"1f595-1f3fe"},{"unified":"1f595-1f3ff"}],"point_down":[{"unified":"1f447"},{"unified":"1f447-1f3fb"},{"unified":"1f447-1f3fc"},{"unified":"1f447-1f3fd"},{"unified":"1f447-1f3fe"},{"unified":"1f447-1f3ff"}],"point_up":[{"unified":"261d-fe0f"},{"unified":"261d-1f3fb"},{"unified":"261d-1f3fc"},{"unified":"261d-1f3fd"},{"unified":"261d-1f3fe"},{"unified":"261d-1f3ff"}],"index_pointing_at_the_viewer":[{"unified":"1faf5"},{"unified":"1faf5-1f3fb"},{"unified":"1faf5-1f3fc"},{"unified":"1faf5-1f3fd"},{"unified":"1faf5-1f3fe"},{"unified":"1faf5-1f3ff"}],"+1":[{"unified":"1f44d"},{"unified":"1f44d-1f3fb"},{"unified":"1f44d-1f3fc"},{"unified":"1f44d-1f3fd"},{"unified":"1f44d-1f3fe"},{"unified":"1f44d-1f3ff"}],"-1":[{"unified":"1f44e"},{"unified":"1f44e-1f3fb"},{"unified":"1f44e-1f3fc"},{"unified":"1f44e-1f3fd"},{"unified":"1f44e-1f3fe"},{"unified":"1f44e-1f3ff"}],"fist":[{"unified":"270a"},{"unified":"270a-1f3fb"},{"unified":"270a-1f3fc"},{"unified":"270a-1f3fd"},{"unified":"270a-1f3fe"},{"unified":"270a-1f3ff"}],"facepunch":[{"unified":"1f44a"},{"unified":"1f44a-1f3fb"},{"unified":"1f44a-1f3fc"},{"unified":"1f44a-1f3fd"},{"unified":"1f44a-1f3fe"},{"unified":"1f44a-1f3ff"}],"left-facing_fist":[{"unified":"1f91b"},{"unified":"1f91b-1f3fb"},{"unified":"1f91b-1f3fc"},{"unified":"1f91b-1f3fd"},{"unified":"1f91b-1f3fe"},{"unified":"1f91b-1f3ff"}],"right-facing_fist":[{"unified":"1f91c"},{"unified":"1f91c-1f3fb"},{"unified":"1f91c-1f3fc"},{"unified":"1f91c-1f3fd"},{"unified":"1f91c-1f3fe"},{"unified":"1f91c-1f3ff"}],"clap":[{"unified":"1f44f"},{"unified":"1f44f-1f3fb"},{"unified":"1f44f-1f3fc"},{"unified":"1f44f-1f3fd"},{"unified":"1f44f-1f3fe"},{"unified":"1f44f-1f3ff"}],"raised_hands":[{"unified":"1f64c"},{"unified":"1f64c-1f3fb"},{"unified":"1f64c-1f3fc"},{"unified":"1f64c-1f3fd"},{"unified":"1f64c-1f3fe"},{"unified":"1f64c-1f3ff"}],"heart_hands":[{"unified":"1faf6"},{"unified":"1faf6-1f3fb"},{"unified":"1faf6-1f3fc"},{"unified":"1faf6-1f3fd"},{"unified":"1faf6-1f3fe"},{"unified":"1faf6-1f3ff"}],"open_hands":[{"unified":"1f450"},{"unified":"1f450-1f3fb"},{"unified":"1f450-1f3fc"},{"unified":"1f450-1f3fd"},{"unified":"1f450-1f3fe"},{"unified":"1f450-1f3ff"}],"palms_up_together":[{"unified":"1f932"},{"unified":"1f932-1f3fb"},{"unified":"1f932-1f3fc"},{"unified":"1f932-1f3fd"},{"unified":"1f932-1f3fe"},{"unified":"1f932-1f3ff"}],"handshake":[{"unified":"1f91d"},{"unified":"1f91d-1f3fb"},{"unified":"1f91d-1f3fc"},{"unified":"1f91d-1f3fd"},{"unified":"1f91d-1f3fe"},{"unified":"1f91d-1f3ff"}],"pray":[{"unified":"1f64f"},{"unified":"1f64f-1f3fb"},{"unified":"1f64f-1f3fc"},{"unified":"1f64f-1f3fd"},{"unified":"1f64f-1f3fe"},{"unified":"1f64f-1f3ff"}],"writing_hand":[{"unified":"270d-fe0f"},{"unified":"270d-1f3fb"},{"unified":"270d-1f3fc"},{"unified":"270d-1f3fd"},{"unified":"270d-1f3fe"},{"unified":"270d-1f3ff"}],"nail_care":[{"unified":"1f485"},{"unified":"1f485-1f3fb"},{"unified":"1f485-1f3fc"},{"unified":"1f485-1f3fd"},{"unified":"1f485-1f3fe"},{"unified":"1f485-1f3ff"}],"selfie":[{"unified":"1f933"},{"unified":"1f933-1f3fb"},{"unified":"1f933-1f3fc"},{"unified":"1f933-1f3fd"},{"unified":"1f933-1f3fe"},{"unified":"1f933-1f3ff"}],"muscle":[{"unified":"1f4aa"},{"unified":"1f4aa-1f3fb"},{"unified":"1f4aa-1f3fc"},{"unified":"1f4aa-1f3fd"},{"unified":"1f4aa-1f3fe"},{"unified":"1f4aa-1f3ff"}],"mechanical_arm":[{"unified":"1f9be"}],"mechanical_leg":[{"unified":"1f9bf"}],"leg":[{"unified":"1f9b5"},{"unified":"1f9b5-1f3fb"},{"unified":"1f9b5-1f3fc"},{"unified":"1f9b5-1f3fd"},{"unified":"1f9b5-1f3fe"},{"unified":"1f9b5-1f3ff"}],"foot":[{"unified":"1f9b6"},{"unified":"1f9b6-1f3fb"},{"unified":"1f9b6-1f3fc"},{"unified":"1f9b6-1f3fd"},{"unified":"1f9b6-1f3fe"},{"unified":"1f9b6-1f3ff"}],"ear":[{"unified":"1f442"},{"unified":"1f442-1f3fb"},{"unified":"1f442-1f3fc"},{"unified":"1f442-1f3fd"},{"unified":"1f442-1f3fe"},{"unified":"1f442-1f3ff"}],"ear_with_hearing_aid":[{"unified":"1f9bb"},{"unified":"1f9bb-1f3fb"},{"unified":"1f9bb-1f3fc"},{"unified":"1f9bb-1f3fd"},{"unified":"1f9bb-1f3fe"},{"unified":"1f9bb-1f3ff"}],"nose":[{"unified":"1f443"},{"unified":"1f443-1f3fb"},{"unified":"1f443-1f3fc"},{"unified":"1f443-1f3fd"},{"unified":"1f443-1f3fe"},{"unified":"1f443-1f3ff"}],"brain":[{"unified":"1f9e0"}],"anatomical_heart":[{"unified":"1fac0"}],"lungs":[{"unified":"1fac1"}],"tooth":[{"unified":"1f9b7"}],"bone":[{"unified":"1f9b4"}],"eyes":[{"unified":"1f440"}],"eye":[{"unified":"1f441-fe0f"}],"tongue":[{"unified":"1f445"}],"lips":[{"unified":"1f444"}],"biting_lip":[{"unified":"1fae6"}],"baby":[{"unified":"1f476"},{"unified":"1f476-1f3fb"},{"unified":"1f476-1f3fc"},{"unified":"1f476-1f3fd"},{"unified":"1f476-1f3fe"},{"unified":"1f476-1f3ff"}],"child":[{"unified":"1f9d2"},{"unified":"1f9d2-1f3fb"},{"unified":"1f9d2-1f3fc"},{"unified":"1f9d2-1f3fd"},{"unified":"1f9d2-1f3fe"},{"unified":"1f9d2-1f3ff"}],"boy":[{"unified":"1f466"},{"unified":"1f466-1f3fb"},{"unified":"1f466-1f3fc"},{"unified":"1f466-1f3fd"},{"unified":"1f466-1f3fe"},{"unified":"1f466-1f3ff"}],"girl":[{"unified":"1f467"},{"unified":"1f467-1f3fb"},{"unified":"1f467-1f3fc"},{"unified":"1f467-1f3fd"},{"unified":"1f467-1f3fe"},{"unified":"1f467-1f3ff"}],"adult":[{"unified":"1f9d1"},{"unified":"1f9d1-1f3fb"},{"unified":"1f9d1-1f3fc"},{"unified":"1f9d1-1f3fd"},{"unified":"1f9d1-1f3fe"},{"unified":"1f9d1-1f3ff"}],"person_with_blond_hair":[{"unified":"1f471"},{"unified":"1f471-1f3fb"},{"unified":"1f471-1f3fc"},{"unified":"1f471-1f3fd"},{"unified":"1f471-1f3fe"},{"unified":"1f471-1f3ff"}],"man":[{"unified":"1f468"},{"unified":"1f468-1f3fb"},{"unified":"1f468-1f3fc"},{"unified":"1f468-1f3fd"},{"unified":"1f468-1f3fe"},{"unified":"1f468-1f3ff"}],"bearded_person":[{"unified":"1f9d4"},{"unified":"1f9d4-1f3fb"},{"unified":"1f9d4-1f3fc"},{"unified":"1f9d4-1f3fd"},{"unified":"1f9d4-1f3fe"},{"unified":"1f9d4-1f3ff"}],"man_with_beard":[{"unified":"1f9d4-200d-2642-fe0f"},{"unified":"1f9d4-1f3fb-200d-2642-fe0f"},{"unified":"1f9d4-1f3fc-200d-2642-fe0f"},{"unified":"1f9d4-1f3fd-200d-2642-fe0f"},{"unified":"1f9d4-1f3fe-200d-2642-fe0f"},{"unified":"1f9d4-1f3ff-200d-2642-fe0f"}],"woman_with_beard":[{"unified":"1f9d4-200d-2640-fe0f"},{"unified":"1f9d4-1f3fb-200d-2640-fe0f"},{"unified":"1f9d4-1f3fc-200d-2640-fe0f"},{"unified":"1f9d4-1f3fd-200d-2640-fe0f"},{"unified":"1f9d4-1f3fe-200d-2640-fe0f"},{"unified":"1f9d4-1f3ff-200d-2640-fe0f"}],"red_haired_man":[{"unified":"1f468-200d-1f9b0"},{"unified":"1f468-1f3fb-200d-1f9b0"},{"unified":"1f468-1f3fc-200d-1f9b0"},{"unified":"1f468-1f3fd-200d-1f9b0"},{"unified":"1f468-1f3fe-200d-1f9b0"},{"unified":"1f468-1f3ff-200d-1f9b0"}],"curly_haired_man":[{"unified":"1f468-200d-1f9b1"},{"unified":"1f468-1f3fb-200d-1f9b1"},{"unified":"1f468-1f3fc-200d-1f9b1"},{"unified":"1f468-1f3fd-200d-1f9b1"},{"unified":"1f468-1f3fe-200d-1f9b1"},{"unified":"1f468-1f3ff-200d-1f9b1"}],"white_haired_man":[{"unified":"1f468-200d-1f9b3"},{"unified":"1f468-1f3fb-200d-1f9b3"},{"unified":"1f468-1f3fc-200d-1f9b3"},{"unified":"1f468-1f3fd-200d-1f9b3"},{"unified":"1f468-1f3fe-200d-1f9b3"},{"unified":"1f468-1f3ff-200d-1f9b3"}],"bald_man":[{"unified":"1f468-200d-1f9b2"},{"unified":"1f468-1f3fb-200d-1f9b2"},{"unified":"1f468-1f3fc-200d-1f9b2"},{"unified":"1f468-1f3fd-200d-1f9b2"},{"unified":"1f468-1f3fe-200d-1f9b2"},{"unified":"1f468-1f3ff-200d-1f9b2"}],"woman":[{"unified":"1f469"},{"unified":"1f469-1f3fb"},{"unified":"1f469-1f3fc"},{"unified":"1f469-1f3fd"},{"unified":"1f469-1f3fe"},{"unified":"1f469-1f3ff"}],"red_haired_woman":[{"unified":"1f469-200d-1f9b0"},{"unified":"1f469-1f3fb-200d-1f9b0"},{"unified":"1f469-1f3fc-200d-1f9b0"},{"unified":"1f469-1f3fd-200d-1f9b0"},{"unified":"1f469-1f3fe-200d-1f9b0"},{"unified":"1f469-1f3ff-200d-1f9b0"}],"red_haired_person":[{"unified":"1f9d1-200d-1f9b0"},{"unified":"1f9d1-1f3fb-200d-1f9b0"},{"unified":"1f9d1-1f3fc-200d-1f9b0"},{"unified":"1f9d1-1f3fd-200d-1f9b0"},{"unified":"1f9d1-1f3fe-200d-1f9b0"},{"unified":"1f9d1-1f3ff-200d-1f9b0"}],"curly_haired_woman":[{"unified":"1f469-200d-1f9b1"},{"unified":"1f469-1f3fb-200d-1f9b1"},{"unified":"1f469-1f3fc-200d-1f9b1"},{"unified":"1f469-1f3fd-200d-1f9b1"},{"unified":"1f469-1f3fe-200d-1f9b1"},{"unified":"1f469-1f3ff-200d-1f9b1"}],"curly_haired_person":[{"unified":"1f9d1-200d-1f9b1"},{"unified":"1f9d1-1f3fb-200d-1f9b1"},{"unified":"1f9d1-1f3fc-200d-1f9b1"},{"unified":"1f9d1-1f3fd-200d-1f9b1"},{"unified":"1f9d1-1f3fe-200d-1f9b1"},{"unified":"1f9d1-1f3ff-200d-1f9b1"}],"white_haired_woman":[{"unified":"1f469-200d-1f9b3"},{"unified":"1f469-1f3fb-200d-1f9b3"},{"unified":"1f469-1f3fc-200d-1f9b3"},{"unified":"1f469-1f3fd-200d-1f9b3"},{"unified":"1f469-1f3fe-200d-1f9b3"},{"unified":"1f469-1f3ff-200d-1f9b3"}],"white_haired_person":[{"unified":"1f9d1-200d-1f9b3"},{"unified":"1f9d1-1f3fb-200d-1f9b3"},{"unified":"1f9d1-1f3fc-200d-1f9b3"},{"unified":"1f9d1-1f3fd-200d-1f9b3"},{"unified":"1f9d1-1f3fe-200d-1f9b3"},{"unified":"1f9d1-1f3ff-200d-1f9b3"}],"bald_woman":[{"unified":"1f469-200d-1f9b2"},{"unified":"1f469-1f3fb-200d-1f9b2"},{"unified":"1f469-1f3fc-200d-1f9b2"},{"unified":"1f469-1f3fd-200d-1f9b2"},{"unified":"1f469-1f3fe-200d-1f9b2"},{"unified":"1f469-1f3ff-200d-1f9b2"}],"bald_person":[{"unified":"1f9d1-200d-1f9b2"},{"unified":"1f9d1-1f3fb-200d-1f9b2"},{"unified":"1f9d1-1f3fc-200d-1f9b2"},{"unified":"1f9d1-1f3fd-200d-1f9b2"},{"unified":"1f9d1-1f3fe-200d-1f9b2"},{"unified":"1f9d1-1f3ff-200d-1f9b2"}],"blond-haired-woman":[{"unified":"1f471-200d-2640-fe0f"},{"unified":"1f471-1f3fb-200d-2640-fe0f"},{"unified":"1f471-1f3fc-200d-2640-fe0f"},{"unified":"1f471-1f3fd-200d-2640-fe0f"},{"unified":"1f471-1f3fe-200d-2640-fe0f"},{"unified":"1f471-1f3ff-200d-2640-fe0f"}],"blond-haired-man":[{"unified":"1f471-200d-2642-fe0f"},{"unified":"1f471-1f3fb-200d-2642-fe0f"},{"unified":"1f471-1f3fc-200d-2642-fe0f"},{"unified":"1f471-1f3fd-200d-2642-fe0f"},{"unified":"1f471-1f3fe-200d-2642-fe0f"},{"unified":"1f471-1f3ff-200d-2642-fe0f"}],"older_adult":[{"unified":"1f9d3"},{"unified":"1f9d3-1f3fb"},{"unified":"1f9d3-1f3fc"},{"unified":"1f9d3-1f3fd"},{"unified":"1f9d3-1f3fe"},{"unified":"1f9d3-1f3ff"}],"older_man":[{"unified":"1f474"},{"unified":"1f474-1f3fb"},{"unified":"1f474-1f3fc"},{"unified":"1f474-1f3fd"},{"unified":"1f474-1f3fe"},{"unified":"1f474-1f3ff"}],"older_woman":[{"unified":"1f475"},{"unified":"1f475-1f3fb"},{"unified":"1f475-1f3fc"},{"unified":"1f475-1f3fd"},{"unified":"1f475-1f3fe"},{"unified":"1f475-1f3ff"}],"person_frowning":[{"unified":"1f64d"},{"unified":"1f64d-1f3fb"},{"unified":"1f64d-1f3fc"},{"unified":"1f64d-1f3fd"},{"unified":"1f64d-1f3fe"},{"unified":"1f64d-1f3ff"}],"man-frowning":[{"unified":"1f64d-200d-2642-fe0f"},{"unified":"1f64d-1f3fb-200d-2642-fe0f"},{"unified":"1f64d-1f3fc-200d-2642-fe0f"},{"unified":"1f64d-1f3fd-200d-2642-fe0f"},{"unified":"1f64d-1f3fe-200d-2642-fe0f"},{"unified":"1f64d-1f3ff-200d-2642-fe0f"}],"woman-frowning":[{"unified":"1f64d-200d-2640-fe0f"},{"unified":"1f64d-1f3fb-200d-2640-fe0f"},{"unified":"1f64d-1f3fc-200d-2640-fe0f"},{"unified":"1f64d-1f3fd-200d-2640-fe0f"},{"unified":"1f64d-1f3fe-200d-2640-fe0f"},{"unified":"1f64d-1f3ff-200d-2640-fe0f"}],"person_with_pouting_face":[{"unified":"1f64e"},{"unified":"1f64e-1f3fb"},{"unified":"1f64e-1f3fc"},{"unified":"1f64e-1f3fd"},{"unified":"1f64e-1f3fe"},{"unified":"1f64e-1f3ff"}],"man-pouting":[{"unified":"1f64e-200d-2642-fe0f"},{"unified":"1f64e-1f3fb-200d-2642-fe0f"},{"unified":"1f64e-1f3fc-200d-2642-fe0f"},{"unified":"1f64e-1f3fd-200d-2642-fe0f"},{"unified":"1f64e-1f3fe-200d-2642-fe0f"},{"unified":"1f64e-1f3ff-200d-2642-fe0f"}],"woman-pouting":[{"unified":"1f64e-200d-2640-fe0f"},{"unified":"1f64e-1f3fb-200d-2640-fe0f"},{"unified":"1f64e-1f3fc-200d-2640-fe0f"},{"unified":"1f64e-1f3fd-200d-2640-fe0f"},{"unified":"1f64e-1f3fe-200d-2640-fe0f"},{"unified":"1f64e-1f3ff-200d-2640-fe0f"}],"no_good":[{"unified":"1f645"},{"unified":"1f645-1f3fb"},{"unified":"1f645-1f3fc"},{"unified":"1f645-1f3fd"},{"unified":"1f645-1f3fe"},{"unified":"1f645-1f3ff"}],"man-gesturing-no":[{"unified":"1f645-200d-2642-fe0f"},{"unified":"1f645-1f3fb-200d-2642-fe0f"},{"unified":"1f645-1f3fc-200d-2642-fe0f"},{"unified":"1f645-1f3fd-200d-2642-fe0f"},{"unified":"1f645-1f3fe-200d-2642-fe0f"},{"unified":"1f645-1f3ff-200d-2642-fe0f"}],"woman-gesturing-no":[{"unified":"1f645-200d-2640-fe0f"},{"unified":"1f645-1f3fb-200d-2640-fe0f"},{"unified":"1f645-1f3fc-200d-2640-fe0f"},{"unified":"1f645-1f3fd-200d-2640-fe0f"},{"unified":"1f645-1f3fe-200d-2640-fe0f"},{"unified":"1f645-1f3ff-200d-2640-fe0f"}],"ok_woman":[{"unified":"1f646"},{"unified":"1f646-1f3fb"},{"unified":"1f646-1f3fc"},{"unified":"1f646-1f3fd"},{"unified":"1f646-1f3fe"},{"unified":"1f646-1f3ff"}],"man-gesturing-ok":[{"unified":"1f646-200d-2642-fe0f"},{"unified":"1f646-1f3fb-200d-2642-fe0f"},{"unified":"1f646-1f3fc-200d-2642-fe0f"},{"unified":"1f646-1f3fd-200d-2642-fe0f"},{"unified":"1f646-1f3fe-200d-2642-fe0f"},{"unified":"1f646-1f3ff-200d-2642-fe0f"}],"woman-gesturing-ok":[{"unified":"1f646-200d-2640-fe0f"},{"unified":"1f646-1f3fb-200d-2640-fe0f"},{"unified":"1f646-1f3fc-200d-2640-fe0f"},{"unified":"1f646-1f3fd-200d-2640-fe0f"},{"unified":"1f646-1f3fe-200d-2640-fe0f"},{"unified":"1f646-1f3ff-200d-2640-fe0f"}],"information_desk_person":[{"unified":"1f481"},{"unified":"1f481-1f3fb"},{"unified":"1f481-1f3fc"},{"unified":"1f481-1f3fd"},{"unified":"1f481-1f3fe"},{"unified":"1f481-1f3ff"}],"man-tipping-hand":[{"unified":"1f481-200d-2642-fe0f"},{"unified":"1f481-1f3fb-200d-2642-fe0f"},{"unified":"1f481-1f3fc-200d-2642-fe0f"},{"unified":"1f481-1f3fd-200d-2642-fe0f"},{"unified":"1f481-1f3fe-200d-2642-fe0f"},{"unified":"1f481-1f3ff-200d-2642-fe0f"}],"woman-tipping-hand":[{"unified":"1f481-200d-2640-fe0f"},{"unified":"1f481-1f3fb-200d-2640-fe0f"},{"unified":"1f481-1f3fc-200d-2640-fe0f"},{"unified":"1f481-1f3fd-200d-2640-fe0f"},{"unified":"1f481-1f3fe-200d-2640-fe0f"},{"unified":"1f481-1f3ff-200d-2640-fe0f"}],"raising_hand":[{"unified":"1f64b"},{"unified":"1f64b-1f3fb"},{"unified":"1f64b-1f3fc"},{"unified":"1f64b-1f3fd"},{"unified":"1f64b-1f3fe"},{"unified":"1f64b-1f3ff"}],"man-raising-hand":[{"unified":"1f64b-200d-2642-fe0f"},{"unified":"1f64b-1f3fb-200d-2642-fe0f"},{"unified":"1f64b-1f3fc-200d-2642-fe0f"},{"unified":"1f64b-1f3fd-200d-2642-fe0f"},{"unified":"1f64b-1f3fe-200d-2642-fe0f"},{"unified":"1f64b-1f3ff-200d-2642-fe0f"}],"woman-raising-hand":[{"unified":"1f64b-200d-2640-fe0f"},{"unified":"1f64b-1f3fb-200d-2640-fe0f"},{"unified":"1f64b-1f3fc-200d-2640-fe0f"},{"unified":"1f64b-1f3fd-200d-2640-fe0f"},{"unified":"1f64b-1f3fe-200d-2640-fe0f"},{"unified":"1f64b-1f3ff-200d-2640-fe0f"}],"deaf_person":[{"unified":"1f9cf"},{"unified":"1f9cf-1f3fb"},{"unified":"1f9cf-1f3fc"},{"unified":"1f9cf-1f3fd"},{"unified":"1f9cf-1f3fe"},{"unified":"1f9cf-1f3ff"}],"deaf_man":[{"unified":"1f9cf-200d-2642-fe0f"},{"unified":"1f9cf-1f3fb-200d-2642-fe0f"},{"unified":"1f9cf-1f3fc-200d-2642-fe0f"},{"unified":"1f9cf-1f3fd-200d-2642-fe0f"},{"unified":"1f9cf-1f3fe-200d-2642-fe0f"},{"unified":"1f9cf-1f3ff-200d-2642-fe0f"}],"deaf_woman":[{"unified":"1f9cf-200d-2640-fe0f"},{"unified":"1f9cf-1f3fb-200d-2640-fe0f"},{"unified":"1f9cf-1f3fc-200d-2640-fe0f"},{"unified":"1f9cf-1f3fd-200d-2640-fe0f"},{"unified":"1f9cf-1f3fe-200d-2640-fe0f"},{"unified":"1f9cf-1f3ff-200d-2640-fe0f"}],"bow":[{"unified":"1f647"},{"unified":"1f647-1f3fb"},{"unified":"1f647-1f3fc"},{"unified":"1f647-1f3fd"},{"unified":"1f647-1f3fe"},{"unified":"1f647-1f3ff"}],"man-bowing":[{"unified":"1f647-200d-2642-fe0f"},{"unified":"1f647-1f3fb-200d-2642-fe0f"},{"unified":"1f647-1f3fc-200d-2642-fe0f"},{"unified":"1f647-1f3fd-200d-2642-fe0f"},{"unified":"1f647-1f3fe-200d-2642-fe0f"},{"unified":"1f647-1f3ff-200d-2642-fe0f"}],"woman-bowing":[{"unified":"1f647-200d-2640-fe0f"},{"unified":"1f647-1f3fb-200d-2640-fe0f"},{"unified":"1f647-1f3fc-200d-2640-fe0f"},{"unified":"1f647-1f3fd-200d-2640-fe0f"},{"unified":"1f647-1f3fe-200d-2640-fe0f"},{"unified":"1f647-1f3ff-200d-2640-fe0f"}],"face_palm":[{"unified":"1f926"},{"unified":"1f926-1f3fb"},{"unified":"1f926-1f3fc"},{"unified":"1f926-1f3fd"},{"unified":"1f926-1f3fe"},{"unified":"1f926-1f3ff"}],"man-facepalming":[{"unified":"1f926-200d-2642-fe0f"},{"unified":"1f926-1f3fb-200d-2642-fe0f"},{"unified":"1f926-1f3fc-200d-2642-fe0f"},{"unified":"1f926-1f3fd-200d-2642-fe0f"},{"unified":"1f926-1f3fe-200d-2642-fe0f"},{"unified":"1f926-1f3ff-200d-2642-fe0f"}],"woman-facepalming":[{"unified":"1f926-200d-2640-fe0f"},{"unified":"1f926-1f3fb-200d-2640-fe0f"},{"unified":"1f926-1f3fc-200d-2640-fe0f"},{"unified":"1f926-1f3fd-200d-2640-fe0f"},{"unified":"1f926-1f3fe-200d-2640-fe0f"},{"unified":"1f926-1f3ff-200d-2640-fe0f"}],"shrug":[{"unified":"1f937"},{"unified":"1f937-1f3fb"},{"unified":"1f937-1f3fc"},{"unified":"1f937-1f3fd"},{"unified":"1f937-1f3fe"},{"unified":"1f937-1f3ff"}],"man-shrugging":[{"unified":"1f937-200d-2642-fe0f"},{"unified":"1f937-1f3fb-200d-2642-fe0f"},{"unified":"1f937-1f3fc-200d-2642-fe0f"},{"unified":"1f937-1f3fd-200d-2642-fe0f"},{"unified":"1f937-1f3fe-200d-2642-fe0f"},{"unified":"1f937-1f3ff-200d-2642-fe0f"}],"woman-shrugging":[{"unified":"1f937-200d-2640-fe0f"},{"unified":"1f937-1f3fb-200d-2640-fe0f"},{"unified":"1f937-1f3fc-200d-2640-fe0f"},{"unified":"1f937-1f3fd-200d-2640-fe0f"},{"unified":"1f937-1f3fe-200d-2640-fe0f"},{"unified":"1f937-1f3ff-200d-2640-fe0f"}],"health_worker":[{"unified":"1f9d1-200d-2695-fe0f"},{"unified":"1f9d1-1f3fb-200d-2695-fe0f"},{"unified":"1f9d1-1f3fc-200d-2695-fe0f"},{"unified":"1f9d1-1f3fd-200d-2695-fe0f"},{"unified":"1f9d1-1f3fe-200d-2695-fe0f"},{"unified":"1f9d1-1f3ff-200d-2695-fe0f"}],"male-doctor":[{"unified":"1f468-200d-2695-fe0f"},{"unified":"1f468-1f3fb-200d-2695-fe0f"},{"unified":"1f468-1f3fc-200d-2695-fe0f"},{"unified":"1f468-1f3fd-200d-2695-fe0f"},{"unified":"1f468-1f3fe-200d-2695-fe0f"},{"unified":"1f468-1f3ff-200d-2695-fe0f"}],"female-doctor":[{"unified":"1f469-200d-2695-fe0f"},{"unified":"1f469-1f3fb-200d-2695-fe0f"},{"unified":"1f469-1f3fc-200d-2695-fe0f"},{"unified":"1f469-1f3fd-200d-2695-fe0f"},{"unified":"1f469-1f3fe-200d-2695-fe0f"},{"unified":"1f469-1f3ff-200d-2695-fe0f"}],"student":[{"unified":"1f9d1-200d-1f393"},{"unified":"1f9d1-1f3fb-200d-1f393"},{"unified":"1f9d1-1f3fc-200d-1f393"},{"unified":"1f9d1-1f3fd-200d-1f393"},{"unified":"1f9d1-1f3fe-200d-1f393"},{"unified":"1f9d1-1f3ff-200d-1f393"}],"male-student":[{"unified":"1f468-200d-1f393"},{"unified":"1f468-1f3fb-200d-1f393"},{"unified":"1f468-1f3fc-200d-1f393"},{"unified":"1f468-1f3fd-200d-1f393"},{"unified":"1f468-1f3fe-200d-1f393"},{"unified":"1f468-1f3ff-200d-1f393"}],"female-student":[{"unified":"1f469-200d-1f393"},{"unified":"1f469-1f3fb-200d-1f393"},{"unified":"1f469-1f3fc-200d-1f393"},{"unified":"1f469-1f3fd-200d-1f393"},{"unified":"1f469-1f3fe-200d-1f393"},{"unified":"1f469-1f3ff-200d-1f393"}],"teacher":[{"unified":"1f9d1-200d-1f3eb"},{"unified":"1f9d1-1f3fb-200d-1f3eb"},{"unified":"1f9d1-1f3fc-200d-1f3eb"},{"unified":"1f9d1-1f3fd-200d-1f3eb"},{"unified":"1f9d1-1f3fe-200d-1f3eb"},{"unified":"1f9d1-1f3ff-200d-1f3eb"}],"male-teacher":[{"unified":"1f468-200d-1f3eb"},{"unified":"1f468-1f3fb-200d-1f3eb"},{"unified":"1f468-1f3fc-200d-1f3eb"},{"unified":"1f468-1f3fd-200d-1f3eb"},{"unified":"1f468-1f3fe-200d-1f3eb"},{"unified":"1f468-1f3ff-200d-1f3eb"}],"female-teacher":[{"unified":"1f469-200d-1f3eb"},{"unified":"1f469-1f3fb-200d-1f3eb"},{"unified":"1f469-1f3fc-200d-1f3eb"},{"unified":"1f469-1f3fd-200d-1f3eb"},{"unified":"1f469-1f3fe-200d-1f3eb"},{"unified":"1f469-1f3ff-200d-1f3eb"}],"judge":[{"unified":"1f9d1-200d-2696-fe0f"},{"unified":"1f9d1-1f3fb-200d-2696-fe0f"},{"unified":"1f9d1-1f3fc-200d-2696-fe0f"},{"unified":"1f9d1-1f3fd-200d-2696-fe0f"},{"unified":"1f9d1-1f3fe-200d-2696-fe0f"},{"unified":"1f9d1-1f3ff-200d-2696-fe0f"}],"male-judge":[{"unified":"1f468-200d-2696-fe0f"},{"unified":"1f468-1f3fb-200d-2696-fe0f"},{"unified":"1f468-1f3fc-200d-2696-fe0f"},{"unified":"1f468-1f3fd-200d-2696-fe0f"},{"unified":"1f468-1f3fe-200d-2696-fe0f"},{"unified":"1f468-1f3ff-200d-2696-fe0f"}],"female-judge":[{"unified":"1f469-200d-2696-fe0f"},{"unified":"1f469-1f3fb-200d-2696-fe0f"},{"unified":"1f469-1f3fc-200d-2696-fe0f"},{"unified":"1f469-1f3fd-200d-2696-fe0f"},{"unified":"1f469-1f3fe-200d-2696-fe0f"},{"unified":"1f469-1f3ff-200d-2696-fe0f"}],"farmer":[{"unified":"1f9d1-200d-1f33e"},{"unified":"1f9d1-1f3fb-200d-1f33e"},{"unified":"1f9d1-1f3fc-200d-1f33e"},{"unified":"1f9d1-1f3fd-200d-1f33e"},{"unified":"1f9d1-1f3fe-200d-1f33e"},{"unified":"1f9d1-1f3ff-200d-1f33e"}],"male-farmer":[{"unified":"1f468-200d-1f33e"},{"unified":"1f468-1f3fb-200d-1f33e"},{"unified":"1f468-1f3fc-200d-1f33e"},{"unified":"1f468-1f3fd-200d-1f33e"},{"unified":"1f468-1f3fe-200d-1f33e"},{"unified":"1f468-1f3ff-200d-1f33e"}],"female-farmer":[{"unified":"1f469-200d-1f33e"},{"unified":"1f469-1f3fb-200d-1f33e"},{"unified":"1f469-1f3fc-200d-1f33e"},{"unified":"1f469-1f3fd-200d-1f33e"},{"unified":"1f469-1f3fe-200d-1f33e"},{"unified":"1f469-1f3ff-200d-1f33e"}],"cook":[{"unified":"1f9d1-200d-1f373"},{"unified":"1f9d1-1f3fb-200d-1f373"},{"unified":"1f9d1-1f3fc-200d-1f373"},{"unified":"1f9d1-1f3fd-200d-1f373"},{"unified":"1f9d1-1f3fe-200d-1f373"},{"unified":"1f9d1-1f3ff-200d-1f373"}],"male-cook":[{"unified":"1f468-200d-1f373"},{"unified":"1f468-1f3fb-200d-1f373"},{"unified":"1f468-1f3fc-200d-1f373"},{"unified":"1f468-1f3fd-200d-1f373"},{"unified":"1f468-1f3fe-200d-1f373"},{"unified":"1f468-1f3ff-200d-1f373"}],"female-cook":[{"unified":"1f469-200d-1f373"},{"unified":"1f469-1f3fb-200d-1f373"},{"unified":"1f469-1f3fc-200d-1f373"},{"unified":"1f469-1f3fd-200d-1f373"},{"unified":"1f469-1f3fe-200d-1f373"},{"unified":"1f469-1f3ff-200d-1f373"}],"mechanic":[{"unified":"1f9d1-200d-1f527"},{"unified":"1f9d1-1f3fb-200d-1f527"},{"unified":"1f9d1-1f3fc-200d-1f527"},{"unified":"1f9d1-1f3fd-200d-1f527"},{"unified":"1f9d1-1f3fe-200d-1f527"},{"unified":"1f9d1-1f3ff-200d-1f527"}],"male-mechanic":[{"unified":"1f468-200d-1f527"},{"unified":"1f468-1f3fb-200d-1f527"},{"unified":"1f468-1f3fc-200d-1f527"},{"unified":"1f468-1f3fd-200d-1f527"},{"unified":"1f468-1f3fe-200d-1f527"},{"unified":"1f468-1f3ff-200d-1f527"}],"female-mechanic":[{"unified":"1f469-200d-1f527"},{"unified":"1f469-1f3fb-200d-1f527"},{"unified":"1f469-1f3fc-200d-1f527"},{"unified":"1f469-1f3fd-200d-1f527"},{"unified":"1f469-1f3fe-200d-1f527"},{"unified":"1f469-1f3ff-200d-1f527"}],"factory_worker":[{"unified":"1f9d1-200d-1f3ed"},{"unified":"1f9d1-1f3fb-200d-1f3ed"},{"unified":"1f9d1-1f3fc-200d-1f3ed"},{"unified":"1f9d1-1f3fd-200d-1f3ed"},{"unified":"1f9d1-1f3fe-200d-1f3ed"},{"unified":"1f9d1-1f3ff-200d-1f3ed"}],"male-factory-worker":[{"unified":"1f468-200d-1f3ed"},{"unified":"1f468-1f3fb-200d-1f3ed"},{"unified":"1f468-1f3fc-200d-1f3ed"},{"unified":"1f468-1f3fd-200d-1f3ed"},{"unified":"1f468-1f3fe-200d-1f3ed"},{"unified":"1f468-1f3ff-200d-1f3ed"}],"female-factory-worker":[{"unified":"1f469-200d-1f3ed"},{"unified":"1f469-1f3fb-200d-1f3ed"},{"unified":"1f469-1f3fc-200d-1f3ed"},{"unified":"1f469-1f3fd-200d-1f3ed"},{"unified":"1f469-1f3fe-200d-1f3ed"},{"unified":"1f469-1f3ff-200d-1f3ed"}],"office_worker":[{"unified":"1f9d1-200d-1f4bc"},{"unified":"1f9d1-1f3fb-200d-1f4bc"},{"unified":"1f9d1-1f3fc-200d-1f4bc"},{"unified":"1f9d1-1f3fd-200d-1f4bc"},{"unified":"1f9d1-1f3fe-200d-1f4bc"},{"unified":"1f9d1-1f3ff-200d-1f4bc"}],"male-office-worker":[{"unified":"1f468-200d-1f4bc"},{"unified":"1f468-1f3fb-200d-1f4bc"},{"unified":"1f468-1f3fc-200d-1f4bc"},{"unified":"1f468-1f3fd-200d-1f4bc"},{"unified":"1f468-1f3fe-200d-1f4bc"},{"unified":"1f468-1f3ff-200d-1f4bc"}],"female-office-worker":[{"unified":"1f469-200d-1f4bc"},{"unified":"1f469-1f3fb-200d-1f4bc"},{"unified":"1f469-1f3fc-200d-1f4bc"},{"unified":"1f469-1f3fd-200d-1f4bc"},{"unified":"1f469-1f3fe-200d-1f4bc"},{"unified":"1f469-1f3ff-200d-1f4bc"}],"scientist":[{"unified":"1f9d1-200d-1f52c"},{"unified":"1f9d1-1f3fb-200d-1f52c"},{"unified":"1f9d1-1f3fc-200d-1f52c"},{"unified":"1f9d1-1f3fd-200d-1f52c"},{"unified":"1f9d1-1f3fe-200d-1f52c"},{"unified":"1f9d1-1f3ff-200d-1f52c"}],"male-scientist":[{"unified":"1f468-200d-1f52c"},{"unified":"1f468-1f3fb-200d-1f52c"},{"unified":"1f468-1f3fc-200d-1f52c"},{"unified":"1f468-1f3fd-200d-1f52c"},{"unified":"1f468-1f3fe-200d-1f52c"},{"unified":"1f468-1f3ff-200d-1f52c"}],"female-scientist":[{"unified":"1f469-200d-1f52c"},{"unified":"1f469-1f3fb-200d-1f52c"},{"unified":"1f469-1f3fc-200d-1f52c"},{"unified":"1f469-1f3fd-200d-1f52c"},{"unified":"1f469-1f3fe-200d-1f52c"},{"unified":"1f469-1f3ff-200d-1f52c"}],"technologist":[{"unified":"1f9d1-200d-1f4bb"},{"unified":"1f9d1-1f3fb-200d-1f4bb"},{"unified":"1f9d1-1f3fc-200d-1f4bb"},{"unified":"1f9d1-1f3fd-200d-1f4bb"},{"unified":"1f9d1-1f3fe-200d-1f4bb"},{"unified":"1f9d1-1f3ff-200d-1f4bb"}],"male-technologist":[{"unified":"1f468-200d-1f4bb"},{"unified":"1f468-1f3fb-200d-1f4bb"},{"unified":"1f468-1f3fc-200d-1f4bb"},{"unified":"1f468-1f3fd-200d-1f4bb"},{"unified":"1f468-1f3fe-200d-1f4bb"},{"unified":"1f468-1f3ff-200d-1f4bb"}],"female-technologist":[{"unified":"1f469-200d-1f4bb"},{"unified":"1f469-1f3fb-200d-1f4bb"},{"unified":"1f469-1f3fc-200d-1f4bb"},{"unified":"1f469-1f3fd-200d-1f4bb"},{"unified":"1f469-1f3fe-200d-1f4bb"},{"unified":"1f469-1f3ff-200d-1f4bb"}],"singer":[{"unified":"1f9d1-200d-1f3a4"},{"unified":"1f9d1-1f3fb-200d-1f3a4"},{"unified":"1f9d1-1f3fc-200d-1f3a4"},{"unified":"1f9d1-1f3fd-200d-1f3a4"},{"unified":"1f9d1-1f3fe-200d-1f3a4"},{"unified":"1f9d1-1f3ff-200d-1f3a4"}],"male-singer":[{"unified":"1f468-200d-1f3a4"},{"unified":"1f468-1f3fb-200d-1f3a4"},{"unified":"1f468-1f3fc-200d-1f3a4"},{"unified":"1f468-1f3fd-200d-1f3a4"},{"unified":"1f468-1f3fe-200d-1f3a4"},{"unified":"1f468-1f3ff-200d-1f3a4"}],"female-singer":[{"unified":"1f469-200d-1f3a4"},{"unified":"1f469-1f3fb-200d-1f3a4"},{"unified":"1f469-1f3fc-200d-1f3a4"},{"unified":"1f469-1f3fd-200d-1f3a4"},{"unified":"1f469-1f3fe-200d-1f3a4"},{"unified":"1f469-1f3ff-200d-1f3a4"}],"artist":[{"unified":"1f9d1-200d-1f3a8"},{"unified":"1f9d1-1f3fb-200d-1f3a8"},{"unified":"1f9d1-1f3fc-200d-1f3a8"},{"unified":"1f9d1-1f3fd-200d-1f3a8"},{"unified":"1f9d1-1f3fe-200d-1f3a8"},{"unified":"1f9d1-1f3ff-200d-1f3a8"}],"male-artist":[{"unified":"1f468-200d-1f3a8"},{"unified":"1f468-1f3fb-200d-1f3a8"},{"unified":"1f468-1f3fc-200d-1f3a8"},{"unified":"1f468-1f3fd-200d-1f3a8"},{"unified":"1f468-1f3fe-200d-1f3a8"},{"unified":"1f468-1f3ff-200d-1f3a8"}],"female-artist":[{"unified":"1f469-200d-1f3a8"},{"unified":"1f469-1f3fb-200d-1f3a8"},{"unified":"1f469-1f3fc-200d-1f3a8"},{"unified":"1f469-1f3fd-200d-1f3a8"},{"unified":"1f469-1f3fe-200d-1f3a8"},{"unified":"1f469-1f3ff-200d-1f3a8"}],"pilot":[{"unified":"1f9d1-200d-2708-fe0f"},{"unified":"1f9d1-1f3fb-200d-2708-fe0f"},{"unified":"1f9d1-1f3fc-200d-2708-fe0f"},{"unified":"1f9d1-1f3fd-200d-2708-fe0f"},{"unified":"1f9d1-1f3fe-200d-2708-fe0f"},{"unified":"1f9d1-1f3ff-200d-2708-fe0f"}],"male-pilot":[{"unified":"1f468-200d-2708-fe0f"},{"unified":"1f468-1f3fb-200d-2708-fe0f"},{"unified":"1f468-1f3fc-200d-2708-fe0f"},{"unified":"1f468-1f3fd-200d-2708-fe0f"},{"unified":"1f468-1f3fe-200d-2708-fe0f"},{"unified":"1f468-1f3ff-200d-2708-fe0f"}],"female-pilot":[{"unified":"1f469-200d-2708-fe0f"},{"unified":"1f469-1f3fb-200d-2708-fe0f"},{"unified":"1f469-1f3fc-200d-2708-fe0f"},{"unified":"1f469-1f3fd-200d-2708-fe0f"},{"unified":"1f469-1f3fe-200d-2708-fe0f"},{"unified":"1f469-1f3ff-200d-2708-fe0f"}],"astronaut":[{"unified":"1f9d1-200d-1f680"},{"unified":"1f9d1-1f3fb-200d-1f680"},{"unified":"1f9d1-1f3fc-200d-1f680"},{"unified":"1f9d1-1f3fd-200d-1f680"},{"unified":"1f9d1-1f3fe-200d-1f680"},{"unified":"1f9d1-1f3ff-200d-1f680"}],"male-astronaut":[{"unified":"1f468-200d-1f680"},{"unified":"1f468-1f3fb-200d-1f680"},{"unified":"1f468-1f3fc-200d-1f680"},{"unified":"1f468-1f3fd-200d-1f680"},{"unified":"1f468-1f3fe-200d-1f680"},{"unified":"1f468-1f3ff-200d-1f680"}],"female-astronaut":[{"unified":"1f469-200d-1f680"},{"unified":"1f469-1f3fb-200d-1f680"},{"unified":"1f469-1f3fc-200d-1f680"},{"unified":"1f469-1f3fd-200d-1f680"},{"unified":"1f469-1f3fe-200d-1f680"},{"unified":"1f469-1f3ff-200d-1f680"}],"firefighter":[{"unified":"1f9d1-200d-1f692"},{"unified":"1f9d1-1f3fb-200d-1f692"},{"unified":"1f9d1-1f3fc-200d-1f692"},{"unified":"1f9d1-1f3fd-200d-1f692"},{"unified":"1f9d1-1f3fe-200d-1f692"},{"unified":"1f9d1-1f3ff-200d-1f692"}],"male-firefighter":[{"unified":"1f468-200d-1f692"},{"unified":"1f468-1f3fb-200d-1f692"},{"unified":"1f468-1f3fc-200d-1f692"},{"unified":"1f468-1f3fd-200d-1f692"},{"unified":"1f468-1f3fe-200d-1f692"},{"unified":"1f468-1f3ff-200d-1f692"}],"female-firefighter":[{"unified":"1f469-200d-1f692"},{"unified":"1f469-1f3fb-200d-1f692"},{"unified":"1f469-1f3fc-200d-1f692"},{"unified":"1f469-1f3fd-200d-1f692"},{"unified":"1f469-1f3fe-200d-1f692"},{"unified":"1f469-1f3ff-200d-1f692"}],"cop":[{"unified":"1f46e"},{"unified":"1f46e-1f3fb"},{"unified":"1f46e-1f3fc"},{"unified":"1f46e-1f3fd"},{"unified":"1f46e-1f3fe"},{"unified":"1f46e-1f3ff"}],"male-police-officer":[{"unified":"1f46e-200d-2642-fe0f"},{"unified":"1f46e-1f3fb-200d-2642-fe0f"},{"unified":"1f46e-1f3fc-200d-2642-fe0f"},{"unified":"1f46e-1f3fd-200d-2642-fe0f"},{"unified":"1f46e-1f3fe-200d-2642-fe0f"},{"unified":"1f46e-1f3ff-200d-2642-fe0f"}],"female-police-officer":[{"unified":"1f46e-200d-2640-fe0f"},{"unified":"1f46e-1f3fb-200d-2640-fe0f"},{"unified":"1f46e-1f3fc-200d-2640-fe0f"},{"unified":"1f46e-1f3fd-200d-2640-fe0f"},{"unified":"1f46e-1f3fe-200d-2640-fe0f"},{"unified":"1f46e-1f3ff-200d-2640-fe0f"}],"sleuth_or_spy":[{"unified":"1f575-fe0f"},{"unified":"1f575-1f3fb"},{"unified":"1f575-1f3fc"},{"unified":"1f575-1f3fd"},{"unified":"1f575-1f3fe"},{"unified":"1f575-1f3ff"}],"male-detective":[{"unified":"1f575-fe0f-200d-2642-fe0f"},{"unified":"1f575-1f3fb-200d-2642-fe0f"},{"unified":"1f575-1f3fc-200d-2642-fe0f"},{"unified":"1f575-1f3fd-200d-2642-fe0f"},{"unified":"1f575-1f3fe-200d-2642-fe0f"},{"unified":"1f575-1f3ff-200d-2642-fe0f"}],"female-detective":[{"unified":"1f575-fe0f-200d-2640-fe0f"},{"unified":"1f575-1f3fb-200d-2640-fe0f"},{"unified":"1f575-1f3fc-200d-2640-fe0f"},{"unified":"1f575-1f3fd-200d-2640-fe0f"},{"unified":"1f575-1f3fe-200d-2640-fe0f"},{"unified":"1f575-1f3ff-200d-2640-fe0f"}],"guardsman":[{"unified":"1f482"},{"unified":"1f482-1f3fb"},{"unified":"1f482-1f3fc"},{"unified":"1f482-1f3fd"},{"unified":"1f482-1f3fe"},{"unified":"1f482-1f3ff"}],"male-guard":[{"unified":"1f482-200d-2642-fe0f"},{"unified":"1f482-1f3fb-200d-2642-fe0f"},{"unified":"1f482-1f3fc-200d-2642-fe0f"},{"unified":"1f482-1f3fd-200d-2642-fe0f"},{"unified":"1f482-1f3fe-200d-2642-fe0f"},{"unified":"1f482-1f3ff-200d-2642-fe0f"}],"female-guard":[{"unified":"1f482-200d-2640-fe0f"},{"unified":"1f482-1f3fb-200d-2640-fe0f"},{"unified":"1f482-1f3fc-200d-2640-fe0f"},{"unified":"1f482-1f3fd-200d-2640-fe0f"},{"unified":"1f482-1f3fe-200d-2640-fe0f"},{"unified":"1f482-1f3ff-200d-2640-fe0f"}],"ninja":[{"unified":"1f977"},{"unified":"1f977-1f3fb"},{"unified":"1f977-1f3fc"},{"unified":"1f977-1f3fd"},{"unified":"1f977-1f3fe"},{"unified":"1f977-1f3ff"}],"construction_worker":[{"unified":"1f477"},{"unified":"1f477-1f3fb"},{"unified":"1f477-1f3fc"},{"unified":"1f477-1f3fd"},{"unified":"1f477-1f3fe"},{"unified":"1f477-1f3ff"}],"male-construction-worker":[{"unified":"1f477-200d-2642-fe0f"},{"unified":"1f477-1f3fb-200d-2642-fe0f"},{"unified":"1f477-1f3fc-200d-2642-fe0f"},{"unified":"1f477-1f3fd-200d-2642-fe0f"},{"unified":"1f477-1f3fe-200d-2642-fe0f"},{"unified":"1f477-1f3ff-200d-2642-fe0f"}],"female-construction-worker":[{"unified":"1f477-200d-2640-fe0f"},{"unified":"1f477-1f3fb-200d-2640-fe0f"},{"unified":"1f477-1f3fc-200d-2640-fe0f"},{"unified":"1f477-1f3fd-200d-2640-fe0f"},{"unified":"1f477-1f3fe-200d-2640-fe0f"},{"unified":"1f477-1f3ff-200d-2640-fe0f"}],"person_with_crown":[{"unified":"1fac5"},{"unified":"1fac5-1f3fb"},{"unified":"1fac5-1f3fc"},{"unified":"1fac5-1f3fd"},{"unified":"1fac5-1f3fe"},{"unified":"1fac5-1f3ff"}],"prince":[{"unified":"1f934"},{"unified":"1f934-1f3fb"},{"unified":"1f934-1f3fc"},{"unified":"1f934-1f3fd"},{"unified":"1f934-1f3fe"},{"unified":"1f934-1f3ff"}],"princess":[{"unified":"1f478"},{"unified":"1f478-1f3fb"},{"unified":"1f478-1f3fc"},{"unified":"1f478-1f3fd"},{"unified":"1f478-1f3fe"},{"unified":"1f478-1f3ff"}],"man_with_turban":[{"unified":"1f473"},{"unified":"1f473-1f3fb"},{"unified":"1f473-1f3fc"},{"unified":"1f473-1f3fd"},{"unified":"1f473-1f3fe"},{"unified":"1f473-1f3ff"}],"man-wearing-turban":[{"unified":"1f473-200d-2642-fe0f"},{"unified":"1f473-1f3fb-200d-2642-fe0f"},{"unified":"1f473-1f3fc-200d-2642-fe0f"},{"unified":"1f473-1f3fd-200d-2642-fe0f"},{"unified":"1f473-1f3fe-200d-2642-fe0f"},{"unified":"1f473-1f3ff-200d-2642-fe0f"}],"woman-wearing-turban":[{"unified":"1f473-200d-2640-fe0f"},{"unified":"1f473-1f3fb-200d-2640-fe0f"},{"unified":"1f473-1f3fc-200d-2640-fe0f"},{"unified":"1f473-1f3fd-200d-2640-fe0f"},{"unified":"1f473-1f3fe-200d-2640-fe0f"},{"unified":"1f473-1f3ff-200d-2640-fe0f"}],"man_with_gua_pi_mao":[{"unified":"1f472"},{"unified":"1f472-1f3fb"},{"unified":"1f472-1f3fc"},{"unified":"1f472-1f3fd"},{"unified":"1f472-1f3fe"},{"unified":"1f472-1f3ff"}],"person_with_headscarf":[{"unified":"1f9d5"},{"unified":"1f9d5-1f3fb"},{"unified":"1f9d5-1f3fc"},{"unified":"1f9d5-1f3fd"},{"unified":"1f9d5-1f3fe"},{"unified":"1f9d5-1f3ff"}],"person_in_tuxedo":[{"unified":"1f935"},{"unified":"1f935-1f3fb"},{"unified":"1f935-1f3fc"},{"unified":"1f935-1f3fd"},{"unified":"1f935-1f3fe"},{"unified":"1f935-1f3ff"}],"man_in_tuxedo":[{"unified":"1f935-200d-2642-fe0f"},{"unified":"1f935-1f3fb-200d-2642-fe0f"},{"unified":"1f935-1f3fc-200d-2642-fe0f"},{"unified":"1f935-1f3fd-200d-2642-fe0f"},{"unified":"1f935-1f3fe-200d-2642-fe0f"},{"unified":"1f935-1f3ff-200d-2642-fe0f"}],"woman_in_tuxedo":[{"unified":"1f935-200d-2640-fe0f"},{"unified":"1f935-1f3fb-200d-2640-fe0f"},{"unified":"1f935-1f3fc-200d-2640-fe0f"},{"unified":"1f935-1f3fd-200d-2640-fe0f"},{"unified":"1f935-1f3fe-200d-2640-fe0f"},{"unified":"1f935-1f3ff-200d-2640-fe0f"}],"bride_with_veil":[{"unified":"1f470"},{"unified":"1f470-1f3fb"},{"unified":"1f470-1f3fc"},{"unified":"1f470-1f3fd"},{"unified":"1f470-1f3fe"},{"unified":"1f470-1f3ff"}],"man_with_veil":[{"unified":"1f470-200d-2642-fe0f"},{"unified":"1f470-1f3fb-200d-2642-fe0f"},{"unified":"1f470-1f3fc-200d-2642-fe0f"},{"unified":"1f470-1f3fd-200d-2642-fe0f"},{"unified":"1f470-1f3fe-200d-2642-fe0f"},{"unified":"1f470-1f3ff-200d-2642-fe0f"}],"woman_with_veil":[{"unified":"1f470-200d-2640-fe0f"},{"unified":"1f470-1f3fb-200d-2640-fe0f"},{"unified":"1f470-1f3fc-200d-2640-fe0f"},{"unified":"1f470-1f3fd-200d-2640-fe0f"},{"unified":"1f470-1f3fe-200d-2640-fe0f"},{"unified":"1f470-1f3ff-200d-2640-fe0f"}],"pregnant_woman":[{"unified":"1f930"},{"unified":"1f930-1f3fb"},{"unified":"1f930-1f3fc"},{"unified":"1f930-1f3fd"},{"unified":"1f930-1f3fe"},{"unified":"1f930-1f3ff"}],"pregnant_man":[{"unified":"1fac3"},{"unified":"1fac3-1f3fb"},{"unified":"1fac3-1f3fc"},{"unified":"1fac3-1f3fd"},{"unified":"1fac3-1f3fe"},{"unified":"1fac3-1f3ff"}],"pregnant_person":[{"unified":"1fac4"},{"unified":"1fac4-1f3fb"},{"unified":"1fac4-1f3fc"},{"unified":"1fac4-1f3fd"},{"unified":"1fac4-1f3fe"},{"unified":"1fac4-1f3ff"}],"breast-feeding":[{"unified":"1f931"},{"unified":"1f931-1f3fb"},{"unified":"1f931-1f3fc"},{"unified":"1f931-1f3fd"},{"unified":"1f931-1f3fe"},{"unified":"1f931-1f3ff"}],"woman_feeding_baby":[{"unified":"1f469-200d-1f37c"},{"unified":"1f469-1f3fb-200d-1f37c"},{"unified":"1f469-1f3fc-200d-1f37c"},{"unified":"1f469-1f3fd-200d-1f37c"},{"unified":"1f469-1f3fe-200d-1f37c"},{"unified":"1f469-1f3ff-200d-1f37c"}],"man_feeding_baby":[{"unified":"1f468-200d-1f37c"},{"unified":"1f468-1f3fb-200d-1f37c"},{"unified":"1f468-1f3fc-200d-1f37c"},{"unified":"1f468-1f3fd-200d-1f37c"},{"unified":"1f468-1f3fe-200d-1f37c"},{"unified":"1f468-1f3ff-200d-1f37c"}],"person_feeding_baby":[{"unified":"1f9d1-200d-1f37c"},{"unified":"1f9d1-1f3fb-200d-1f37c"},{"unified":"1f9d1-1f3fc-200d-1f37c"},{"unified":"1f9d1-1f3fd-200d-1f37c"},{"unified":"1f9d1-1f3fe-200d-1f37c"},{"unified":"1f9d1-1f3ff-200d-1f37c"}],"angel":[{"unified":"1f47c"},{"unified":"1f47c-1f3fb"},{"unified":"1f47c-1f3fc"},{"unified":"1f47c-1f3fd"},{"unified":"1f47c-1f3fe"},{"unified":"1f47c-1f3ff"}],"santa":[{"unified":"1f385"},{"unified":"1f385-1f3fb"},{"unified":"1f385-1f3fc"},{"unified":"1f385-1f3fd"},{"unified":"1f385-1f3fe"},{"unified":"1f385-1f3ff"}],"mrs_claus":[{"unified":"1f936"},{"unified":"1f936-1f3fb"},{"unified":"1f936-1f3fc"},{"unified":"1f936-1f3fd"},{"unified":"1f936-1f3fe"},{"unified":"1f936-1f3ff"}],"mx_claus":[{"unified":"1f9d1-200d-1f384"},{"unified":"1f9d1-1f3fb-200d-1f384"},{"unified":"1f9d1-1f3fc-200d-1f384"},{"unified":"1f9d1-1f3fd-200d-1f384"},{"unified":"1f9d1-1f3fe-200d-1f384"},{"unified":"1f9d1-1f3ff-200d-1f384"}],"superhero":[{"unified":"1f9b8"},{"unified":"1f9b8-1f3fb"},{"unified":"1f9b8-1f3fc"},{"unified":"1f9b8-1f3fd"},{"unified":"1f9b8-1f3fe"},{"unified":"1f9b8-1f3ff"}],"male_superhero":[{"unified":"1f9b8-200d-2642-fe0f"},{"unified":"1f9b8-1f3fb-200d-2642-fe0f"},{"unified":"1f9b8-1f3fc-200d-2642-fe0f"},{"unified":"1f9b8-1f3fd-200d-2642-fe0f"},{"unified":"1f9b8-1f3fe-200d-2642-fe0f"},{"unified":"1f9b8-1f3ff-200d-2642-fe0f"}],"female_superhero":[{"unified":"1f9b8-200d-2640-fe0f"},{"unified":"1f9b8-1f3fb-200d-2640-fe0f"},{"unified":"1f9b8-1f3fc-200d-2640-fe0f"},{"unified":"1f9b8-1f3fd-200d-2640-fe0f"},{"unified":"1f9b8-1f3fe-200d-2640-fe0f"},{"unified":"1f9b8-1f3ff-200d-2640-fe0f"}],"supervillain":[{"unified":"1f9b9"},{"unified":"1f9b9-1f3fb"},{"unified":"1f9b9-1f3fc"},{"unified":"1f9b9-1f3fd"},{"unified":"1f9b9-1f3fe"},{"unified":"1f9b9-1f3ff"}],"male_supervillain":[{"unified":"1f9b9-200d-2642-fe0f"},{"unified":"1f9b9-1f3fb-200d-2642-fe0f"},{"unified":"1f9b9-1f3fc-200d-2642-fe0f"},{"unified":"1f9b9-1f3fd-200d-2642-fe0f"},{"unified":"1f9b9-1f3fe-200d-2642-fe0f"},{"unified":"1f9b9-1f3ff-200d-2642-fe0f"}],"female_supervillain":[{"unified":"1f9b9-200d-2640-fe0f"},{"unified":"1f9b9-1f3fb-200d-2640-fe0f"},{"unified":"1f9b9-1f3fc-200d-2640-fe0f"},{"unified":"1f9b9-1f3fd-200d-2640-fe0f"},{"unified":"1f9b9-1f3fe-200d-2640-fe0f"},{"unified":"1f9b9-1f3ff-200d-2640-fe0f"}],"mage":[{"unified":"1f9d9"},{"unified":"1f9d9-1f3fb"},{"unified":"1f9d9-1f3fc"},{"unified":"1f9d9-1f3fd"},{"unified":"1f9d9-1f3fe"},{"unified":"1f9d9-1f3ff"}],"male_mage":[{"unified":"1f9d9-200d-2642-fe0f"},{"unified":"1f9d9-1f3fb-200d-2642-fe0f"},{"unified":"1f9d9-1f3fc-200d-2642-fe0f"},{"unified":"1f9d9-1f3fd-200d-2642-fe0f"},{"unified":"1f9d9-1f3fe-200d-2642-fe0f"},{"unified":"1f9d9-1f3ff-200d-2642-fe0f"}],"female_mage":[{"unified":"1f9d9-200d-2640-fe0f"},{"unified":"1f9d9-1f3fb-200d-2640-fe0f"},{"unified":"1f9d9-1f3fc-200d-2640-fe0f"},{"unified":"1f9d9-1f3fd-200d-2640-fe0f"},{"unified":"1f9d9-1f3fe-200d-2640-fe0f"},{"unified":"1f9d9-1f3ff-200d-2640-fe0f"}],"fairy":[{"unified":"1f9da"},{"unified":"1f9da-1f3fb"},{"unified":"1f9da-1f3fc"},{"unified":"1f9da-1f3fd"},{"unified":"1f9da-1f3fe"},{"unified":"1f9da-1f3ff"}],"male_fairy":[{"unified":"1f9da-200d-2642-fe0f"},{"unified":"1f9da-1f3fb-200d-2642-fe0f"},{"unified":"1f9da-1f3fc-200d-2642-fe0f"},{"unified":"1f9da-1f3fd-200d-2642-fe0f"},{"unified":"1f9da-1f3fe-200d-2642-fe0f"},{"unified":"1f9da-1f3ff-200d-2642-fe0f"}],"female_fairy":[{"unified":"1f9da-200d-2640-fe0f"},{"unified":"1f9da-1f3fb-200d-2640-fe0f"},{"unified":"1f9da-1f3fc-200d-2640-fe0f"},{"unified":"1f9da-1f3fd-200d-2640-fe0f"},{"unified":"1f9da-1f3fe-200d-2640-fe0f"},{"unified":"1f9da-1f3ff-200d-2640-fe0f"}],"vampire":[{"unified":"1f9db"},{"unified":"1f9db-1f3fb"},{"unified":"1f9db-1f3fc"},{"unified":"1f9db-1f3fd"},{"unified":"1f9db-1f3fe"},{"unified":"1f9db-1f3ff"}],"male_vampire":[{"unified":"1f9db-200d-2642-fe0f"},{"unified":"1f9db-1f3fb-200d-2642-fe0f"},{"unified":"1f9db-1f3fc-200d-2642-fe0f"},{"unified":"1f9db-1f3fd-200d-2642-fe0f"},{"unified":"1f9db-1f3fe-200d-2642-fe0f"},{"unified":"1f9db-1f3ff-200d-2642-fe0f"}],"female_vampire":[{"unified":"1f9db-200d-2640-fe0f"},{"unified":"1f9db-1f3fb-200d-2640-fe0f"},{"unified":"1f9db-1f3fc-200d-2640-fe0f"},{"unified":"1f9db-1f3fd-200d-2640-fe0f"},{"unified":"1f9db-1f3fe-200d-2640-fe0f"},{"unified":"1f9db-1f3ff-200d-2640-fe0f"}],"merperson":[{"unified":"1f9dc"},{"unified":"1f9dc-1f3fb"},{"unified":"1f9dc-1f3fc"},{"unified":"1f9dc-1f3fd"},{"unified":"1f9dc-1f3fe"},{"unified":"1f9dc-1f3ff"}],"merman":[{"unified":"1f9dc-200d-2642-fe0f"},{"unified":"1f9dc-1f3fb-200d-2642-fe0f"},{"unified":"1f9dc-1f3fc-200d-2642-fe0f"},{"unified":"1f9dc-1f3fd-200d-2642-fe0f"},{"unified":"1f9dc-1f3fe-200d-2642-fe0f"},{"unified":"1f9dc-1f3ff-200d-2642-fe0f"}],"mermaid":[{"unified":"1f9dc-200d-2640-fe0f"},{"unified":"1f9dc-1f3fb-200d-2640-fe0f"},{"unified":"1f9dc-1f3fc-200d-2640-fe0f"},{"unified":"1f9dc-1f3fd-200d-2640-fe0f"},{"unified":"1f9dc-1f3fe-200d-2640-fe0f"},{"unified":"1f9dc-1f3ff-200d-2640-fe0f"}],"elf":[{"unified":"1f9dd"},{"unified":"1f9dd-1f3fb"},{"unified":"1f9dd-1f3fc"},{"unified":"1f9dd-1f3fd"},{"unified":"1f9dd-1f3fe"},{"unified":"1f9dd-1f3ff"}],"male_elf":[{"unified":"1f9dd-200d-2642-fe0f"},{"unified":"1f9dd-1f3fb-200d-2642-fe0f"},{"unified":"1f9dd-1f3fc-200d-2642-fe0f"},{"unified":"1f9dd-1f3fd-200d-2642-fe0f"},{"unified":"1f9dd-1f3fe-200d-2642-fe0f"},{"unified":"1f9dd-1f3ff-200d-2642-fe0f"}],"female_elf":[{"unified":"1f9dd-200d-2640-fe0f"},{"unified":"1f9dd-1f3fb-200d-2640-fe0f"},{"unified":"1f9dd-1f3fc-200d-2640-fe0f"},{"unified":"1f9dd-1f3fd-200d-2640-fe0f"},{"unified":"1f9dd-1f3fe-200d-2640-fe0f"},{"unified":"1f9dd-1f3ff-200d-2640-fe0f"}],"genie":[{"unified":"1f9de"}],"male_genie":[{"unified":"1f9de-200d-2642-fe0f"}],"female_genie":[{"unified":"1f9de-200d-2640-fe0f"}],"zombie":[{"unified":"1f9df"}],"male_zombie":[{"unified":"1f9df-200d-2642-fe0f"}],"female_zombie":[{"unified":"1f9df-200d-2640-fe0f"}],"troll":[{"unified":"1f9cc"}],"massage":[{"unified":"1f486"},{"unified":"1f486-1f3fb"},{"unified":"1f486-1f3fc"},{"unified":"1f486-1f3fd"},{"unified":"1f486-1f3fe"},{"unified":"1f486-1f3ff"}],"man-getting-massage":[{"unified":"1f486-200d-2642-fe0f"},{"unified":"1f486-1f3fb-200d-2642-fe0f"},{"unified":"1f486-1f3fc-200d-2642-fe0f"},{"unified":"1f486-1f3fd-200d-2642-fe0f"},{"unified":"1f486-1f3fe-200d-2642-fe0f"},{"unified":"1f486-1f3ff-200d-2642-fe0f"}],"woman-getting-massage":[{"unified":"1f486-200d-2640-fe0f"},{"unified":"1f486-1f3fb-200d-2640-fe0f"},{"unified":"1f486-1f3fc-200d-2640-fe0f"},{"unified":"1f486-1f3fd-200d-2640-fe0f"},{"unified":"1f486-1f3fe-200d-2640-fe0f"},{"unified":"1f486-1f3ff-200d-2640-fe0f"}],"haircut":[{"unified":"1f487"},{"unified":"1f487-1f3fb"},{"unified":"1f487-1f3fc"},{"unified":"1f487-1f3fd"},{"unified":"1f487-1f3fe"},{"unified":"1f487-1f3ff"}],"man-getting-haircut":[{"unified":"1f487-200d-2642-fe0f"},{"unified":"1f487-1f3fb-200d-2642-fe0f"},{"unified":"1f487-1f3fc-200d-2642-fe0f"},{"unified":"1f487-1f3fd-200d-2642-fe0f"},{"unified":"1f487-1f3fe-200d-2642-fe0f"},{"unified":"1f487-1f3ff-200d-2642-fe0f"}],"woman-getting-haircut":[{"unified":"1f487-200d-2640-fe0f"},{"unified":"1f487-1f3fb-200d-2640-fe0f"},{"unified":"1f487-1f3fc-200d-2640-fe0f"},{"unified":"1f487-1f3fd-200d-2640-fe0f"},{"unified":"1f487-1f3fe-200d-2640-fe0f"},{"unified":"1f487-1f3ff-200d-2640-fe0f"}],"walking":[{"unified":"1f6b6"},{"unified":"1f6b6-1f3fb"},{"unified":"1f6b6-1f3fc"},{"unified":"1f6b6-1f3fd"},{"unified":"1f6b6-1f3fe"},{"unified":"1f6b6-1f3ff"}],"man-walking":[{"unified":"1f6b6-200d-2642-fe0f"},{"unified":"1f6b6-1f3fb-200d-2642-fe0f"},{"unified":"1f6b6-1f3fc-200d-2642-fe0f"},{"unified":"1f6b6-1f3fd-200d-2642-fe0f"},{"unified":"1f6b6-1f3fe-200d-2642-fe0f"},{"unified":"1f6b6-1f3ff-200d-2642-fe0f"}],"woman-walking":[{"unified":"1f6b6-200d-2640-fe0f"},{"unified":"1f6b6-1f3fb-200d-2640-fe0f"},{"unified":"1f6b6-1f3fc-200d-2640-fe0f"},{"unified":"1f6b6-1f3fd-200d-2640-fe0f"},{"unified":"1f6b6-1f3fe-200d-2640-fe0f"},{"unified":"1f6b6-1f3ff-200d-2640-fe0f"}],"standing_person":[{"unified":"1f9cd"},{"unified":"1f9cd-1f3fb"},{"unified":"1f9cd-1f3fc"},{"unified":"1f9cd-1f3fd"},{"unified":"1f9cd-1f3fe"},{"unified":"1f9cd-1f3ff"}],"man_standing":[{"unified":"1f9cd-200d-2642-fe0f"},{"unified":"1f9cd-1f3fb-200d-2642-fe0f"},{"unified":"1f9cd-1f3fc-200d-2642-fe0f"},{"unified":"1f9cd-1f3fd-200d-2642-fe0f"},{"unified":"1f9cd-1f3fe-200d-2642-fe0f"},{"unified":"1f9cd-1f3ff-200d-2642-fe0f"}],"woman_standing":[{"unified":"1f9cd-200d-2640-fe0f"},{"unified":"1f9cd-1f3fb-200d-2640-fe0f"},{"unified":"1f9cd-1f3fc-200d-2640-fe0f"},{"unified":"1f9cd-1f3fd-200d-2640-fe0f"},{"unified":"1f9cd-1f3fe-200d-2640-fe0f"},{"unified":"1f9cd-1f3ff-200d-2640-fe0f"}],"kneeling_person":[{"unified":"1f9ce"},{"unified":"1f9ce-1f3fb"},{"unified":"1f9ce-1f3fc"},{"unified":"1f9ce-1f3fd"},{"unified":"1f9ce-1f3fe"},{"unified":"1f9ce-1f3ff"}],"man_kneeling":[{"unified":"1f9ce-200d-2642-fe0f"},{"unified":"1f9ce-1f3fb-200d-2642-fe0f"},{"unified":"1f9ce-1f3fc-200d-2642-fe0f"},{"unified":"1f9ce-1f3fd-200d-2642-fe0f"},{"unified":"1f9ce-1f3fe-200d-2642-fe0f"},{"unified":"1f9ce-1f3ff-200d-2642-fe0f"}],"woman_kneeling":[{"unified":"1f9ce-200d-2640-fe0f"},{"unified":"1f9ce-1f3fb-200d-2640-fe0f"},{"unified":"1f9ce-1f3fc-200d-2640-fe0f"},{"unified":"1f9ce-1f3fd-200d-2640-fe0f"},{"unified":"1f9ce-1f3fe-200d-2640-fe0f"},{"unified":"1f9ce-1f3ff-200d-2640-fe0f"}],"person_with_probing_cane":[{"unified":"1f9d1-200d-1f9af"},{"unified":"1f9d1-1f3fb-200d-1f9af"},{"unified":"1f9d1-1f3fc-200d-1f9af"},{"unified":"1f9d1-1f3fd-200d-1f9af"},{"unified":"1f9d1-1f3fe-200d-1f9af"},{"unified":"1f9d1-1f3ff-200d-1f9af"}],"man_with_probing_cane":[{"unified":"1f468-200d-1f9af"},{"unified":"1f468-1f3fb-200d-1f9af"},{"unified":"1f468-1f3fc-200d-1f9af"},{"unified":"1f468-1f3fd-200d-1f9af"},{"unified":"1f468-1f3fe-200d-1f9af"},{"unified":"1f468-1f3ff-200d-1f9af"}],"woman_with_probing_cane":[{"unified":"1f469-200d-1f9af"},{"unified":"1f469-1f3fb-200d-1f9af"},{"unified":"1f469-1f3fc-200d-1f9af"},{"unified":"1f469-1f3fd-200d-1f9af"},{"unified":"1f469-1f3fe-200d-1f9af"},{"unified":"1f469-1f3ff-200d-1f9af"}],"person_in_motorized_wheelchair":[{"unified":"1f9d1-200d-1f9bc"},{"unified":"1f9d1-1f3fb-200d-1f9bc"},{"unified":"1f9d1-1f3fc-200d-1f9bc"},{"unified":"1f9d1-1f3fd-200d-1f9bc"},{"unified":"1f9d1-1f3fe-200d-1f9bc"},{"unified":"1f9d1-1f3ff-200d-1f9bc"}],"man_in_motorized_wheelchair":[{"unified":"1f468-200d-1f9bc"},{"unified":"1f468-1f3fb-200d-1f9bc"},{"unified":"1f468-1f3fc-200d-1f9bc"},{"unified":"1f468-1f3fd-200d-1f9bc"},{"unified":"1f468-1f3fe-200d-1f9bc"},{"unified":"1f468-1f3ff-200d-1f9bc"}],"woman_in_motorized_wheelchair":[{"unified":"1f469-200d-1f9bc"},{"unified":"1f469-1f3fb-200d-1f9bc"},{"unified":"1f469-1f3fc-200d-1f9bc"},{"unified":"1f469-1f3fd-200d-1f9bc"},{"unified":"1f469-1f3fe-200d-1f9bc"},{"unified":"1f469-1f3ff-200d-1f9bc"}],"person_in_manual_wheelchair":[{"unified":"1f9d1-200d-1f9bd"},{"unified":"1f9d1-1f3fb-200d-1f9bd"},{"unified":"1f9d1-1f3fc-200d-1f9bd"},{"unified":"1f9d1-1f3fd-200d-1f9bd"},{"unified":"1f9d1-1f3fe-200d-1f9bd"},{"unified":"1f9d1-1f3ff-200d-1f9bd"}],"man_in_manual_wheelchair":[{"unified":"1f468-200d-1f9bd"},{"unified":"1f468-1f3fb-200d-1f9bd"},{"unified":"1f468-1f3fc-200d-1f9bd"},{"unified":"1f468-1f3fd-200d-1f9bd"},{"unified":"1f468-1f3fe-200d-1f9bd"},{"unified":"1f468-1f3ff-200d-1f9bd"}],"woman_in_manual_wheelchair":[{"unified":"1f469-200d-1f9bd"},{"unified":"1f469-1f3fb-200d-1f9bd"},{"unified":"1f469-1f3fc-200d-1f9bd"},{"unified":"1f469-1f3fd-200d-1f9bd"},{"unified":"1f469-1f3fe-200d-1f9bd"},{"unified":"1f469-1f3ff-200d-1f9bd"}],"runner":[{"unified":"1f3c3"},{"unified":"1f3c3-1f3fb"},{"unified":"1f3c3-1f3fc"},{"unified":"1f3c3-1f3fd"},{"unified":"1f3c3-1f3fe"},{"unified":"1f3c3-1f3ff"}],"man-running":[{"unified":"1f3c3-200d-2642-fe0f"},{"unified":"1f3c3-1f3fb-200d-2642-fe0f"},{"unified":"1f3c3-1f3fc-200d-2642-fe0f"},{"unified":"1f3c3-1f3fd-200d-2642-fe0f"},{"unified":"1f3c3-1f3fe-200d-2642-fe0f"},{"unified":"1f3c3-1f3ff-200d-2642-fe0f"}],"woman-running":[{"unified":"1f3c3-200d-2640-fe0f"},{"unified":"1f3c3-1f3fb-200d-2640-fe0f"},{"unified":"1f3c3-1f3fc-200d-2640-fe0f"},{"unified":"1f3c3-1f3fd-200d-2640-fe0f"},{"unified":"1f3c3-1f3fe-200d-2640-fe0f"},{"unified":"1f3c3-1f3ff-200d-2640-fe0f"}],"dancer":[{"unified":"1f483"},{"unified":"1f483-1f3fb"},{"unified":"1f483-1f3fc"},{"unified":"1f483-1f3fd"},{"unified":"1f483-1f3fe"},{"unified":"1f483-1f3ff"}],"man_dancing":[{"unified":"1f57a"},{"unified":"1f57a-1f3fb"},{"unified":"1f57a-1f3fc"},{"unified":"1f57a-1f3fd"},{"unified":"1f57a-1f3fe"},{"unified":"1f57a-1f3ff"}],"man_in_business_suit_levitating":[{"unified":"1f574-fe0f"},{"unified":"1f574-1f3fb"},{"unified":"1f574-1f3fc"},{"unified":"1f574-1f3fd"},{"unified":"1f574-1f3fe"},{"unified":"1f574-1f3ff"}],"dancers":[{"unified":"1f46f"}],"men-with-bunny-ears-partying":[{"unified":"1f46f-200d-2642-fe0f"}],"women-with-bunny-ears-partying":[{"unified":"1f46f-200d-2640-fe0f"}],"person_in_steamy_room":[{"unified":"1f9d6"},{"unified":"1f9d6-1f3fb"},{"unified":"1f9d6-1f3fc"},{"unified":"1f9d6-1f3fd"},{"unified":"1f9d6-1f3fe"},{"unified":"1f9d6-1f3ff"}],"man_in_steamy_room":[{"unified":"1f9d6-200d-2642-fe0f"},{"unified":"1f9d6-1f3fb-200d-2642-fe0f"},{"unified":"1f9d6-1f3fc-200d-2642-fe0f"},{"unified":"1f9d6-1f3fd-200d-2642-fe0f"},{"unified":"1f9d6-1f3fe-200d-2642-fe0f"},{"unified":"1f9d6-1f3ff-200d-2642-fe0f"}],"woman_in_steamy_room":[{"unified":"1f9d6-200d-2640-fe0f"},{"unified":"1f9d6-1f3fb-200d-2640-fe0f"},{"unified":"1f9d6-1f3fc-200d-2640-fe0f"},{"unified":"1f9d6-1f3fd-200d-2640-fe0f"},{"unified":"1f9d6-1f3fe-200d-2640-fe0f"},{"unified":"1f9d6-1f3ff-200d-2640-fe0f"}],"person_climbing":[{"unified":"1f9d7"},{"unified":"1f9d7-1f3fb"},{"unified":"1f9d7-1f3fc"},{"unified":"1f9d7-1f3fd"},{"unified":"1f9d7-1f3fe"},{"unified":"1f9d7-1f3ff"}],"man_climbing":[{"unified":"1f9d7-200d-2642-fe0f"},{"unified":"1f9d7-1f3fb-200d-2642-fe0f"},{"unified":"1f9d7-1f3fc-200d-2642-fe0f"},{"unified":"1f9d7-1f3fd-200d-2642-fe0f"},{"unified":"1f9d7-1f3fe-200d-2642-fe0f"},{"unified":"1f9d7-1f3ff-200d-2642-fe0f"}],"woman_climbing":[{"unified":"1f9d7-200d-2640-fe0f"},{"unified":"1f9d7-1f3fb-200d-2640-fe0f"},{"unified":"1f9d7-1f3fc-200d-2640-fe0f"},{"unified":"1f9d7-1f3fd-200d-2640-fe0f"},{"unified":"1f9d7-1f3fe-200d-2640-fe0f"},{"unified":"1f9d7-1f3ff-200d-2640-fe0f"}],"fencer":[{"unified":"1f93a"}],"horse_racing":[{"unified":"1f3c7"},{"unified":"1f3c7-1f3fb"},{"unified":"1f3c7-1f3fc"},{"unified":"1f3c7-1f3fd"},{"unified":"1f3c7-1f3fe"},{"unified":"1f3c7-1f3ff"}],"skier":[{"unified":"26f7-fe0f"}],"snowboarder":[{"unified":"1f3c2"},{"unified":"1f3c2-1f3fb"},{"unified":"1f3c2-1f3fc"},{"unified":"1f3c2-1f3fd"},{"unified":"1f3c2-1f3fe"},{"unified":"1f3c2-1f3ff"}],"golfer":[{"unified":"1f3cc-fe0f"},{"unified":"1f3cc-1f3fb"},{"unified":"1f3cc-1f3fc"},{"unified":"1f3cc-1f3fd"},{"unified":"1f3cc-1f3fe"},{"unified":"1f3cc-1f3ff"}],"man-golfing":[{"unified":"1f3cc-fe0f-200d-2642-fe0f"},{"unified":"1f3cc-1f3fb-200d-2642-fe0f"},{"unified":"1f3cc-1f3fc-200d-2642-fe0f"},{"unified":"1f3cc-1f3fd-200d-2642-fe0f"},{"unified":"1f3cc-1f3fe-200d-2642-fe0f"},{"unified":"1f3cc-1f3ff-200d-2642-fe0f"}],"woman-golfing":[{"unified":"1f3cc-fe0f-200d-2640-fe0f"},{"unified":"1f3cc-1f3fb-200d-2640-fe0f"},{"unified":"1f3cc-1f3fc-200d-2640-fe0f"},{"unified":"1f3cc-1f3fd-200d-2640-fe0f"},{"unified":"1f3cc-1f3fe-200d-2640-fe0f"},{"unified":"1f3cc-1f3ff-200d-2640-fe0f"}],"surfer":[{"unified":"1f3c4"},{"unified":"1f3c4-1f3fb"},{"unified":"1f3c4-1f3fc"},{"unified":"1f3c4-1f3fd"},{"unified":"1f3c4-1f3fe"},{"unified":"1f3c4-1f3ff"}],"man-surfing":[{"unified":"1f3c4-200d-2642-fe0f"},{"unified":"1f3c4-1f3fb-200d-2642-fe0f"},{"unified":"1f3c4-1f3fc-200d-2642-fe0f"},{"unified":"1f3c4-1f3fd-200d-2642-fe0f"},{"unified":"1f3c4-1f3fe-200d-2642-fe0f"},{"unified":"1f3c4-1f3ff-200d-2642-fe0f"}],"woman-surfing":[{"unified":"1f3c4-200d-2640-fe0f"},{"unified":"1f3c4-1f3fb-200d-2640-fe0f"},{"unified":"1f3c4-1f3fc-200d-2640-fe0f"},{"unified":"1f3c4-1f3fd-200d-2640-fe0f"},{"unified":"1f3c4-1f3fe-200d-2640-fe0f"},{"unified":"1f3c4-1f3ff-200d-2640-fe0f"}],"rowboat":[{"unified":"1f6a3"},{"unified":"1f6a3-1f3fb"},{"unified":"1f6a3-1f3fc"},{"unified":"1f6a3-1f3fd"},{"unified":"1f6a3-1f3fe"},{"unified":"1f6a3-1f3ff"}],"man-rowing-boat":[{"unified":"1f6a3-200d-2642-fe0f"},{"unified":"1f6a3-1f3fb-200d-2642-fe0f"},{"unified":"1f6a3-1f3fc-200d-2642-fe0f"},{"unified":"1f6a3-1f3fd-200d-2642-fe0f"},{"unified":"1f6a3-1f3fe-200d-2642-fe0f"},{"unified":"1f6a3-1f3ff-200d-2642-fe0f"}],"woman-rowing-boat":[{"unified":"1f6a3-200d-2640-fe0f"},{"unified":"1f6a3-1f3fb-200d-2640-fe0f"},{"unified":"1f6a3-1f3fc-200d-2640-fe0f"},{"unified":"1f6a3-1f3fd-200d-2640-fe0f"},{"unified":"1f6a3-1f3fe-200d-2640-fe0f"},{"unified":"1f6a3-1f3ff-200d-2640-fe0f"}],"swimmer":[{"unified":"1f3ca"},{"unified":"1f3ca-1f3fb"},{"unified":"1f3ca-1f3fc"},{"unified":"1f3ca-1f3fd"},{"unified":"1f3ca-1f3fe"},{"unified":"1f3ca-1f3ff"}],"man-swimming":[{"unified":"1f3ca-200d-2642-fe0f"},{"unified":"1f3ca-1f3fb-200d-2642-fe0f"},{"unified":"1f3ca-1f3fc-200d-2642-fe0f"},{"unified":"1f3ca-1f3fd-200d-2642-fe0f"},{"unified":"1f3ca-1f3fe-200d-2642-fe0f"},{"unified":"1f3ca-1f3ff-200d-2642-fe0f"}],"woman-swimming":[{"unified":"1f3ca-200d-2640-fe0f"},{"unified":"1f3ca-1f3fb-200d-2640-fe0f"},{"unified":"1f3ca-1f3fc-200d-2640-fe0f"},{"unified":"1f3ca-1f3fd-200d-2640-fe0f"},{"unified":"1f3ca-1f3fe-200d-2640-fe0f"},{"unified":"1f3ca-1f3ff-200d-2640-fe0f"}],"person_with_ball":[{"unified":"26f9-fe0f"},{"unified":"26f9-1f3fb"},{"unified":"26f9-1f3fc"},{"unified":"26f9-1f3fd"},{"unified":"26f9-1f3fe"},{"unified":"26f9-1f3ff"}],"man-bouncing-ball":[{"unified":"26f9-fe0f-200d-2642-fe0f"},{"unified":"26f9-1f3fb-200d-2642-fe0f"},{"unified":"26f9-1f3fc-200d-2642-fe0f"},{"unified":"26f9-1f3fd-200d-2642-fe0f"},{"unified":"26f9-1f3fe-200d-2642-fe0f"},{"unified":"26f9-1f3ff-200d-2642-fe0f"}],"woman-bouncing-ball":[{"unified":"26f9-fe0f-200d-2640-fe0f"},{"unified":"26f9-1f3fb-200d-2640-fe0f"},{"unified":"26f9-1f3fc-200d-2640-fe0f"},{"unified":"26f9-1f3fd-200d-2640-fe0f"},{"unified":"26f9-1f3fe-200d-2640-fe0f"},{"unified":"26f9-1f3ff-200d-2640-fe0f"}],"weight_lifter":[{"unified":"1f3cb-fe0f"},{"unified":"1f3cb-1f3fb"},{"unified":"1f3cb-1f3fc"},{"unified":"1f3cb-1f3fd"},{"unified":"1f3cb-1f3fe"},{"unified":"1f3cb-1f3ff"}],"man-lifting-weights":[{"unified":"1f3cb-fe0f-200d-2642-fe0f"},{"unified":"1f3cb-1f3fb-200d-2642-fe0f"},{"unified":"1f3cb-1f3fc-200d-2642-fe0f"},{"unified":"1f3cb-1f3fd-200d-2642-fe0f"},{"unified":"1f3cb-1f3fe-200d-2642-fe0f"},{"unified":"1f3cb-1f3ff-200d-2642-fe0f"}],"woman-lifting-weights":[{"unified":"1f3cb-fe0f-200d-2640-fe0f"},{"unified":"1f3cb-1f3fb-200d-2640-fe0f"},{"unified":"1f3cb-1f3fc-200d-2640-fe0f"},{"unified":"1f3cb-1f3fd-200d-2640-fe0f"},{"unified":"1f3cb-1f3fe-200d-2640-fe0f"},{"unified":"1f3cb-1f3ff-200d-2640-fe0f"}],"bicyclist":[{"unified":"1f6b4"},{"unified":"1f6b4-1f3fb"},{"unified":"1f6b4-1f3fc"},{"unified":"1f6b4-1f3fd"},{"unified":"1f6b4-1f3fe"},{"unified":"1f6b4-1f3ff"}],"man-biking":[{"unified":"1f6b4-200d-2642-fe0f"},{"unified":"1f6b4-1f3fb-200d-2642-fe0f"},{"unified":"1f6b4-1f3fc-200d-2642-fe0f"},{"unified":"1f6b4-1f3fd-200d-2642-fe0f"},{"unified":"1f6b4-1f3fe-200d-2642-fe0f"},{"unified":"1f6b4-1f3ff-200d-2642-fe0f"}],"woman-biking":[{"unified":"1f6b4-200d-2640-fe0f"},{"unified":"1f6b4-1f3fb-200d-2640-fe0f"},{"unified":"1f6b4-1f3fc-200d-2640-fe0f"},{"unified":"1f6b4-1f3fd-200d-2640-fe0f"},{"unified":"1f6b4-1f3fe-200d-2640-fe0f"},{"unified":"1f6b4-1f3ff-200d-2640-fe0f"}],"mountain_bicyclist":[{"unified":"1f6b5"},{"unified":"1f6b5-1f3fb"},{"unified":"1f6b5-1f3fc"},{"unified":"1f6b5-1f3fd"},{"unified":"1f6b5-1f3fe"},{"unified":"1f6b5-1f3ff"}],"man-mountain-biking":[{"unified":"1f6b5-200d-2642-fe0f"},{"unified":"1f6b5-1f3fb-200d-2642-fe0f"},{"unified":"1f6b5-1f3fc-200d-2642-fe0f"},{"unified":"1f6b5-1f3fd-200d-2642-fe0f"},{"unified":"1f6b5-1f3fe-200d-2642-fe0f"},{"unified":"1f6b5-1f3ff-200d-2642-fe0f"}],"woman-mountain-biking":[{"unified":"1f6b5-200d-2640-fe0f"},{"unified":"1f6b5-1f3fb-200d-2640-fe0f"},{"unified":"1f6b5-1f3fc-200d-2640-fe0f"},{"unified":"1f6b5-1f3fd-200d-2640-fe0f"},{"unified":"1f6b5-1f3fe-200d-2640-fe0f"},{"unified":"1f6b5-1f3ff-200d-2640-fe0f"}],"person_doing_cartwheel":[{"unified":"1f938"},{"unified":"1f938-1f3fb"},{"unified":"1f938-1f3fc"},{"unified":"1f938-1f3fd"},{"unified":"1f938-1f3fe"},{"unified":"1f938-1f3ff"}],"man-cartwheeling":[{"unified":"1f938-200d-2642-fe0f"},{"unified":"1f938-1f3fb-200d-2642-fe0f"},{"unified":"1f938-1f3fc-200d-2642-fe0f"},{"unified":"1f938-1f3fd-200d-2642-fe0f"},{"unified":"1f938-1f3fe-200d-2642-fe0f"},{"unified":"1f938-1f3ff-200d-2642-fe0f"}],"woman-cartwheeling":[{"unified":"1f938-200d-2640-fe0f"},{"unified":"1f938-1f3fb-200d-2640-fe0f"},{"unified":"1f938-1f3fc-200d-2640-fe0f"},{"unified":"1f938-1f3fd-200d-2640-fe0f"},{"unified":"1f938-1f3fe-200d-2640-fe0f"},{"unified":"1f938-1f3ff-200d-2640-fe0f"}],"wrestlers":[{"unified":"1f93c"}],"man-wrestling":[{"unified":"1f93c-200d-2642-fe0f"}],"woman-wrestling":[{"unified":"1f93c-200d-2640-fe0f"}],"water_polo":[{"unified":"1f93d"},{"unified":"1f93d-1f3fb"},{"unified":"1f93d-1f3fc"},{"unified":"1f93d-1f3fd"},{"unified":"1f93d-1f3fe"},{"unified":"1f93d-1f3ff"}],"man-playing-water-polo":[{"unified":"1f93d-200d-2642-fe0f"},{"unified":"1f93d-1f3fb-200d-2642-fe0f"},{"unified":"1f93d-1f3fc-200d-2642-fe0f"},{"unified":"1f93d-1f3fd-200d-2642-fe0f"},{"unified":"1f93d-1f3fe-200d-2642-fe0f"},{"unified":"1f93d-1f3ff-200d-2642-fe0f"}],"woman-playing-water-polo":[{"unified":"1f93d-200d-2640-fe0f"},{"unified":"1f93d-1f3fb-200d-2640-fe0f"},{"unified":"1f93d-1f3fc-200d-2640-fe0f"},{"unified":"1f93d-1f3fd-200d-2640-fe0f"},{"unified":"1f93d-1f3fe-200d-2640-fe0f"},{"unified":"1f93d-1f3ff-200d-2640-fe0f"}],"handball":[{"unified":"1f93e"},{"unified":"1f93e-1f3fb"},{"unified":"1f93e-1f3fc"},{"unified":"1f93e-1f3fd"},{"unified":"1f93e-1f3fe"},{"unified":"1f93e-1f3ff"}],"man-playing-handball":[{"unified":"1f93e-200d-2642-fe0f"},{"unified":"1f93e-1f3fb-200d-2642-fe0f"},{"unified":"1f93e-1f3fc-200d-2642-fe0f"},{"unified":"1f93e-1f3fd-200d-2642-fe0f"},{"unified":"1f93e-1f3fe-200d-2642-fe0f"},{"unified":"1f93e-1f3ff-200d-2642-fe0f"}],"woman-playing-handball":[{"unified":"1f93e-200d-2640-fe0f"},{"unified":"1f93e-1f3fb-200d-2640-fe0f"},{"unified":"1f93e-1f3fc-200d-2640-fe0f"},{"unified":"1f93e-1f3fd-200d-2640-fe0f"},{"unified":"1f93e-1f3fe-200d-2640-fe0f"},{"unified":"1f93e-1f3ff-200d-2640-fe0f"}],"juggling":[{"unified":"1f939"},{"unified":"1f939-1f3fb"},{"unified":"1f939-1f3fc"},{"unified":"1f939-1f3fd"},{"unified":"1f939-1f3fe"},{"unified":"1f939-1f3ff"}],"man-juggling":[{"unified":"1f939-200d-2642-fe0f"},{"unified":"1f939-1f3fb-200d-2642-fe0f"},{"unified":"1f939-1f3fc-200d-2642-fe0f"},{"unified":"1f939-1f3fd-200d-2642-fe0f"},{"unified":"1f939-1f3fe-200d-2642-fe0f"},{"unified":"1f939-1f3ff-200d-2642-fe0f"}],"woman-juggling":[{"unified":"1f939-200d-2640-fe0f"},{"unified":"1f939-1f3fb-200d-2640-fe0f"},{"unified":"1f939-1f3fc-200d-2640-fe0f"},{"unified":"1f939-1f3fd-200d-2640-fe0f"},{"unified":"1f939-1f3fe-200d-2640-fe0f"},{"unified":"1f939-1f3ff-200d-2640-fe0f"}],"person_in_lotus_position":[{"unified":"1f9d8"},{"unified":"1f9d8-1f3fb"},{"unified":"1f9d8-1f3fc"},{"unified":"1f9d8-1f3fd"},{"unified":"1f9d8-1f3fe"},{"unified":"1f9d8-1f3ff"}],"man_in_lotus_position":[{"unified":"1f9d8-200d-2642-fe0f"},{"unified":"1f9d8-1f3fb-200d-2642-fe0f"},{"unified":"1f9d8-1f3fc-200d-2642-fe0f"},{"unified":"1f9d8-1f3fd-200d-2642-fe0f"},{"unified":"1f9d8-1f3fe-200d-2642-fe0f"},{"unified":"1f9d8-1f3ff-200d-2642-fe0f"}],"woman_in_lotus_position":[{"unified":"1f9d8-200d-2640-fe0f"},{"unified":"1f9d8-1f3fb-200d-2640-fe0f"},{"unified":"1f9d8-1f3fc-200d-2640-fe0f"},{"unified":"1f9d8-1f3fd-200d-2640-fe0f"},{"unified":"1f9d8-1f3fe-200d-2640-fe0f"},{"unified":"1f9d8-1f3ff-200d-2640-fe0f"}],"bath":[{"unified":"1f6c0"},{"unified":"1f6c0-1f3fb"},{"unified":"1f6c0-1f3fc"},{"unified":"1f6c0-1f3fd"},{"unified":"1f6c0-1f3fe"},{"unified":"1f6c0-1f3ff"}],"sleeping_accommodation":[{"unified":"1f6cc"},{"unified":"1f6cc-1f3fb"},{"unified":"1f6cc-1f3fc"},{"unified":"1f6cc-1f3fd"},{"unified":"1f6cc-1f3fe"},{"unified":"1f6cc-1f3ff"}],"people_holding_hands":[{"unified":"1f9d1-200d-1f91d-200d-1f9d1"},{"unified":"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb"},{"unified":"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc"},{"unified":"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd"},{"unified":"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe"},{"unified":"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff"}],"two_women_holding_hands":[{"unified":"1f46d"},{"unified":"1f46d-1f3fb"},{"unified":"1f46d-1f3fc"},{"unified":"1f46d-1f3fd"},{"unified":"1f46d-1f3fe"},{"unified":"1f46d-1f3ff"}],"man_and_woman_holding_hands":[{"unified":"1f46b"},{"unified":"1f46b-1f3fb"},{"unified":"1f46b-1f3fc"},{"unified":"1f46b-1f3fd"},{"unified":"1f46b-1f3fe"},{"unified":"1f46b-1f3ff"}],"two_men_holding_hands":[{"unified":"1f46c"},{"unified":"1f46c-1f3fb"},{"unified":"1f46c-1f3fc"},{"unified":"1f46c-1f3fd"},{"unified":"1f46c-1f3fe"},{"unified":"1f46c-1f3ff"}],"couplekiss":[{"unified":"1f48f"},{"unified":"1f48f-1f3fb"},{"unified":"1f48f-1f3fc"},{"unified":"1f48f-1f3fd"},{"unified":"1f48f-1f3fe"},{"unified":"1f48f-1f3ff"}],"woman-kiss-man":[{"unified":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"}],"man-kiss-man":[{"unified":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468"},{"unified":"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb"},{"unified":"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc"},{"unified":"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd"},{"unified":"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe"},{"unified":"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"}],"woman-kiss-woman":[{"unified":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"}],"couple_with_heart":[{"unified":"1f491"},{"unified":"1f491-1f3fb"},{"unified":"1f491-1f3fc"},{"unified":"1f491-1f3fd"},{"unified":"1f491-1f3fe"},{"unified":"1f491-1f3ff"}],"woman-heart-man":[{"unified":"1f469-200d-2764-fe0f-200d-1f468"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"}],"man-heart-man":[{"unified":"1f468-200d-2764-fe0f-200d-1f468"},{"unified":"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb"},{"unified":"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc"},{"unified":"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd"},{"unified":"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe"},{"unified":"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"}],"woman-heart-woman":[{"unified":"1f469-200d-2764-fe0f-200d-1f469"},{"unified":"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb"},{"unified":"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc"},{"unified":"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd"},{"unified":"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe"},{"unified":"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff"}],"family":[{"unified":"1f46a"}],"man-woman-boy":[{"unified":"1f468-200d-1f469-200d-1f466"}],"man-woman-girl":[{"unified":"1f468-200d-1f469-200d-1f467"}],"man-woman-girl-boy":[{"unified":"1f468-200d-1f469-200d-1f467-200d-1f466"}],"man-woman-boy-boy":[{"unified":"1f468-200d-1f469-200d-1f466-200d-1f466"}],"man-woman-girl-girl":[{"unified":"1f468-200d-1f469-200d-1f467-200d-1f467"}],"man-man-boy":[{"unified":"1f468-200d-1f468-200d-1f466"}],"man-man-girl":[{"unified":"1f468-200d-1f468-200d-1f467"}],"man-man-girl-boy":[{"unified":"1f468-200d-1f468-200d-1f467-200d-1f466"}],"man-man-boy-boy":[{"unified":"1f468-200d-1f468-200d-1f466-200d-1f466"}],"man-man-girl-girl":[{"unified":"1f468-200d-1f468-200d-1f467-200d-1f467"}],"woman-woman-boy":[{"unified":"1f469-200d-1f469-200d-1f466"}],"woman-woman-girl":[{"unified":"1f469-200d-1f469-200d-1f467"}],"woman-woman-girl-boy":[{"unified":"1f469-200d-1f469-200d-1f467-200d-1f466"}],"woman-woman-boy-boy":[{"unified":"1f469-200d-1f469-200d-1f466-200d-1f466"}],"woman-woman-girl-girl":[{"unified":"1f469-200d-1f469-200d-1f467-200d-1f467"}],"man-boy":[{"unified":"1f468-200d-1f466"}],"man-boy-boy":[{"unified":"1f468-200d-1f466-200d-1f466"}],"man-girl":[{"unified":"1f468-200d-1f467"}],"man-girl-boy":[{"unified":"1f468-200d-1f467-200d-1f466"}],"man-girl-girl":[{"unified":"1f468-200d-1f467-200d-1f467"}],"woman-boy":[{"unified":"1f469-200d-1f466"}],"woman-boy-boy":[{"unified":"1f469-200d-1f466-200d-1f466"}],"woman-girl":[{"unified":"1f469-200d-1f467"}],"woman-girl-boy":[{"unified":"1f469-200d-1f467-200d-1f466"}],"woman-girl-girl":[{"unified":"1f469-200d-1f467-200d-1f467"}],"speaking_head_in_silhouette":[{"unified":"1f5e3-fe0f"}],"bust_in_silhouette":[{"unified":"1f464"}],"busts_in_silhouette":[{"unified":"1f465"}],"people_hugging":[{"unified":"1fac2"}],"footprints":[{"unified":"1f463"}],"monkey_face":[{"unified":"1f435"}],"monkey":[{"unified":"1f412"}],"gorilla":[{"unified":"1f98d"}],"orangutan":[{"unified":"1f9a7"}],"dog":[{"unified":"1f436"}],"dog2":[{"unified":"1f415"}],"guide_dog":[{"unified":"1f9ae"}],"service_dog":[{"unified":"1f415-200d-1f9ba"}],"poodle":[{"unified":"1f429"}],"wolf":[{"unified":"1f43a"}],"fox_face":[{"unified":"1f98a"}],"raccoon":[{"unified":"1f99d"}],"cat":[{"unified":"1f431"}],"cat2":[{"unified":"1f408"}],"black_cat":[{"unified":"1f408-200d-2b1b"}],"lion_face":[{"unified":"1f981"}],"tiger":[{"unified":"1f42f"}],"tiger2":[{"unified":"1f405"}],"leopard":[{"unified":"1f406"}],"horse":[{"unified":"1f434"}],"moose":[{"unified":"1face"}],"donkey":[{"unified":"1facf"}],"racehorse":[{"unified":"1f40e"}],"unicorn_face":[{"unified":"1f984"}],"zebra_face":[{"unified":"1f993"}],"deer":[{"unified":"1f98c"}],"bison":[{"unified":"1f9ac"}],"cow":[{"unified":"1f42e"}],"ox":[{"unified":"1f402"}],"water_buffalo":[{"unified":"1f403"}],"cow2":[{"unified":"1f404"}],"pig":[{"unified":"1f437"}],"pig2":[{"unified":"1f416"}],"boar":[{"unified":"1f417"}],"pig_nose":[{"unified":"1f43d"}],"ram":[{"unified":"1f40f"}],"sheep":[{"unified":"1f411"}],"goat":[{"unified":"1f410"}],"dromedary_camel":[{"unified":"1f42a"}],"camel":[{"unified":"1f42b"}],"llama":[{"unified":"1f999"}],"giraffe_face":[{"unified":"1f992"}],"elephant":[{"unified":"1f418"}],"mammoth":[{"unified":"1f9a3"}],"rhinoceros":[{"unified":"1f98f"}],"hippopotamus":[{"unified":"1f99b"}],"mouse":[{"unified":"1f42d"}],"mouse2":[{"unified":"1f401"}],"rat":[{"unified":"1f400"}],"hamster":[{"unified":"1f439"}],"rabbit":[{"unified":"1f430"}],"rabbit2":[{"unified":"1f407"}],"chipmunk":[{"unified":"1f43f-fe0f"}],"beaver":[{"unified":"1f9ab"}],"hedgehog":[{"unified":"1f994"}],"bat":[{"unified":"1f987"}],"bear":[{"unified":"1f43b"}],"polar_bear":[{"unified":"1f43b-200d-2744-fe0f"}],"koala":[{"unified":"1f428"}],"panda_face":[{"unified":"1f43c"}],"sloth":[{"unified":"1f9a5"}],"otter":[{"unified":"1f9a6"}],"skunk":[{"unified":"1f9a8"}],"kangaroo":[{"unified":"1f998"}],"badger":[{"unified":"1f9a1"}],"feet":[{"unified":"1f43e"}],"turkey":[{"unified":"1f983"}],"chicken":[{"unified":"1f414"}],"rooster":[{"unified":"1f413"}],"hatching_chick":[{"unified":"1f423"}],"baby_chick":[{"unified":"1f424"}],"hatched_chick":[{"unified":"1f425"}],"bird":[{"unified":"1f426"}],"penguin":[{"unified":"1f427"}],"dove_of_peace":[{"unified":"1f54a-fe0f"}],"eagle":[{"unified":"1f985"}],"duck":[{"unified":"1f986"}],"swan":[{"unified":"1f9a2"}],"owl":[{"unified":"1f989"}],"dodo":[{"unified":"1f9a4"}],"feather":[{"unified":"1fab6"}],"flamingo":[{"unified":"1f9a9"}],"peacock":[{"unified":"1f99a"}],"parrot":[{"unified":"1f99c"}],"wing":[{"unified":"1fabd"}],"black_bird":[{"unified":"1f426-200d-2b1b"}],"goose":[{"unified":"1fabf"}],"frog":[{"unified":"1f438"}],"crocodile":[{"unified":"1f40a"}],"turtle":[{"unified":"1f422"}],"lizard":[{"unified":"1f98e"}],"snake":[{"unified":"1f40d"}],"dragon_face":[{"unified":"1f432"}],"dragon":[{"unified":"1f409"}],"sauropod":[{"unified":"1f995"}],"t-rex":[{"unified":"1f996"}],"whale":[{"unified":"1f433"}],"whale2":[{"unified":"1f40b"}],"dolphin":[{"unified":"1f42c"}],"seal":[{"unified":"1f9ad"}],"fish":[{"unified":"1f41f"}],"tropical_fish":[{"unified":"1f420"}],"blowfish":[{"unified":"1f421"}],"shark":[{"unified":"1f988"}],"octopus":[{"unified":"1f419"}],"shell":[{"unified":"1f41a"}],"coral":[{"unified":"1fab8"}],"jellyfish":[{"unified":"1fabc"}],"snail":[{"unified":"1f40c"}],"butterfly":[{"unified":"1f98b"}],"bug":[{"unified":"1f41b"}],"ant":[{"unified":"1f41c"}],"bee":[{"unified":"1f41d"}],"beetle":[{"unified":"1fab2"}],"ladybug":[{"unified":"1f41e"}],"cricket":[{"unified":"1f997"}],"cockroach":[{"unified":"1fab3"}],"spider":[{"unified":"1f577-fe0f"}],"spider_web":[{"unified":"1f578-fe0f"}],"scorpion":[{"unified":"1f982"}],"mosquito":[{"unified":"1f99f"}],"fly":[{"unified":"1fab0"}],"worm":[{"unified":"1fab1"}],"microbe":[{"unified":"1f9a0"}],"bouquet":[{"unified":"1f490"}],"cherry_blossom":[{"unified":"1f338"}],"white_flower":[{"unified":"1f4ae"}],"lotus":[{"unified":"1fab7"}],"rosette":[{"unified":"1f3f5-fe0f"}],"rose":[{"unified":"1f339"}],"wilted_flower":[{"unified":"1f940"}],"hibiscus":[{"unified":"1f33a"}],"sunflower":[{"unified":"1f33b"}],"blossom":[{"unified":"1f33c"}],"tulip":[{"unified":"1f337"}],"hyacinth":[{"unified":"1fabb"}],"seedling":[{"unified":"1f331"}],"potted_plant":[{"unified":"1fab4"}],"evergreen_tree":[{"unified":"1f332"}],"deciduous_tree":[{"unified":"1f333"}],"palm_tree":[{"unified":"1f334"}],"cactus":[{"unified":"1f335"}],"ear_of_rice":[{"unified":"1f33e"}],"herb":[{"unified":"1f33f"}],"shamrock":[{"unified":"2618-fe0f"}],"four_leaf_clover":[{"unified":"1f340"}],"maple_leaf":[{"unified":"1f341"}],"fallen_leaf":[{"unified":"1f342"}],"leaves":[{"unified":"1f343"}],"empty_nest":[{"unified":"1fab9"}],"nest_with_eggs":[{"unified":"1faba"}],"mushroom":[{"unified":"1f344"}],"grapes":[{"unified":"1f347"}],"melon":[{"unified":"1f348"}],"watermelon":[{"unified":"1f349"}],"tangerine":[{"unified":"1f34a"}],"lemon":[{"unified":"1f34b"}],"banana":[{"unified":"1f34c"}],"pineapple":[{"unified":"1f34d"}],"mango":[{"unified":"1f96d"}],"apple":[{"unified":"1f34e"}],"green_apple":[{"unified":"1f34f"}],"pear":[{"unified":"1f350"}],"peach":[{"unified":"1f351"}],"cherries":[{"unified":"1f352"}],"strawberry":[{"unified":"1f353"}],"blueberries":[{"unified":"1fad0"}],"kiwifruit":[{"unified":"1f95d"}],"tomato":[{"unified":"1f345"}],"olive":[{"unified":"1fad2"}],"coconut":[{"unified":"1f965"}],"avocado":[{"unified":"1f951"}],"eggplant":[{"unified":"1f346"}],"potato":[{"unified":"1f954"}],"carrot":[{"unified":"1f955"}],"corn":[{"unified":"1f33d"}],"hot_pepper":[{"unified":"1f336-fe0f"}],"bell_pepper":[{"unified":"1fad1"}],"cucumber":[{"unified":"1f952"}],"leafy_green":[{"unified":"1f96c"}],"broccoli":[{"unified":"1f966"}],"garlic":[{"unified":"1f9c4"}],"onion":[{"unified":"1f9c5"}],"peanuts":[{"unified":"1f95c"}],"beans":[{"unified":"1fad8"}],"chestnut":[{"unified":"1f330"}],"ginger_root":[{"unified":"1fada"}],"pea_pod":[{"unified":"1fadb"}],"bread":[{"unified":"1f35e"}],"croissant":[{"unified":"1f950"}],"baguette_bread":[{"unified":"1f956"}],"flatbread":[{"unified":"1fad3"}],"pretzel":[{"unified":"1f968"}],"bagel":[{"unified":"1f96f"}],"pancakes":[{"unified":"1f95e"}],"waffle":[{"unified":"1f9c7"}],"cheese_wedge":[{"unified":"1f9c0"}],"meat_on_bone":[{"unified":"1f356"}],"poultry_leg":[{"unified":"1f357"}],"cut_of_meat":[{"unified":"1f969"}],"bacon":[{"unified":"1f953"}],"hamburger":[{"unified":"1f354"}],"fries":[{"unified":"1f35f"}],"pizza":[{"unified":"1f355"}],"hotdog":[{"unified":"1f32d"}],"sandwich":[{"unified":"1f96a"}],"taco":[{"unified":"1f32e"}],"burrito":[{"unified":"1f32f"}],"tamale":[{"unified":"1fad4"}],"stuffed_flatbread":[{"unified":"1f959"}],"falafel":[{"unified":"1f9c6"}],"egg":[{"unified":"1f95a"}],"fried_egg":[{"unified":"1f373"}],"shallow_pan_of_food":[{"unified":"1f958"}],"stew":[{"unified":"1f372"}],"fondue":[{"unified":"1fad5"}],"bowl_with_spoon":[{"unified":"1f963"}],"green_salad":[{"unified":"1f957"}],"popcorn":[{"unified":"1f37f"}],"butter":[{"unified":"1f9c8"}],"salt":[{"unified":"1f9c2"}],"canned_food":[{"unified":"1f96b"}],"bento":[{"unified":"1f371"}],"rice_cracker":[{"unified":"1f358"}],"rice_ball":[{"unified":"1f359"}],"rice":[{"unified":"1f35a"}],"curry":[{"unified":"1f35b"}],"ramen":[{"unified":"1f35c"}],"spaghetti":[{"unified":"1f35d"}],"sweet_potato":[{"unified":"1f360"}],"oden":[{"unified":"1f362"}],"sushi":[{"unified":"1f363"}],"fried_shrimp":[{"unified":"1f364"}],"fish_cake":[{"unified":"1f365"}],"moon_cake":[{"unified":"1f96e"}],"dango":[{"unified":"1f361"}],"dumpling":[{"unified":"1f95f"}],"fortune_cookie":[{"unified":"1f960"}],"takeout_box":[{"unified":"1f961"}],"crab":[{"unified":"1f980"}],"lobster":[{"unified":"1f99e"}],"shrimp":[{"unified":"1f990"}],"squid":[{"unified":"1f991"}],"oyster":[{"unified":"1f9aa"}],"icecream":[{"unified":"1f366"}],"shaved_ice":[{"unified":"1f367"}],"ice_cream":[{"unified":"1f368"}],"doughnut":[{"unified":"1f369"}],"cookie":[{"unified":"1f36a"}],"birthday":[{"unified":"1f382"}],"cake":[{"unified":"1f370"}],"cupcake":[{"unified":"1f9c1"}],"pie":[{"unified":"1f967"}],"chocolate_bar":[{"unified":"1f36b"}],"candy":[{"unified":"1f36c"}],"lollipop":[{"unified":"1f36d"}],"custard":[{"unified":"1f36e"}],"honey_pot":[{"unified":"1f36f"}],"baby_bottle":[{"unified":"1f37c"}],"glass_of_milk":[{"unified":"1f95b"}],"coffee":[{"unified":"2615"}],"teapot":[{"unified":"1fad6"}],"tea":[{"unified":"1f375"}],"sake":[{"unified":"1f376"}],"champagne":[{"unified":"1f37e"}],"wine_glass":[{"unified":"1f377"}],"cocktail":[{"unified":"1f378"}],"tropical_drink":[{"unified":"1f379"}],"beer":[{"unified":"1f37a"}],"beers":[{"unified":"1f37b"}],"clinking_glasses":[{"unified":"1f942"}],"tumbler_glass":[{"unified":"1f943"}],"pouring_liquid":[{"unified":"1fad7"}],"cup_with_straw":[{"unified":"1f964"}],"bubble_tea":[{"unified":"1f9cb"}],"beverage_box":[{"unified":"1f9c3"}],"mate_drink":[{"unified":"1f9c9"}],"ice_cube":[{"unified":"1f9ca"}],"chopsticks":[{"unified":"1f962"}],"knife_fork_plate":[{"unified":"1f37d-fe0f"}],"fork_and_knife":[{"unified":"1f374"}],"spoon":[{"unified":"1f944"}],"hocho":[{"unified":"1f52a"}],"jar":[{"unified":"1fad9"}],"amphora":[{"unified":"1f3fa"}],"earth_africa":[{"unified":"1f30d"}],"earth_americas":[{"unified":"1f30e"}],"earth_asia":[{"unified":"1f30f"}],"globe_with_meridians":[{"unified":"1f310"}],"world_map":[{"unified":"1f5fa-fe0f"}],"japan":[{"unified":"1f5fe"}],"compass":[{"unified":"1f9ed"}],"snow_capped_mountain":[{"unified":"1f3d4-fe0f"}],"mountain":[{"unified":"26f0-fe0f"}],"volcano":[{"unified":"1f30b"}],"mount_fuji":[{"unified":"1f5fb"}],"camping":[{"unified":"1f3d5-fe0f"}],"beach_with_umbrella":[{"unified":"1f3d6-fe0f"}],"desert":[{"unified":"1f3dc-fe0f"}],"desert_island":[{"unified":"1f3dd-fe0f"}],"national_park":[{"unified":"1f3de-fe0f"}],"stadium":[{"unified":"1f3df-fe0f"}],"classical_building":[{"unified":"1f3db-fe0f"}],"building_construction":[{"unified":"1f3d7-fe0f"}],"bricks":[{"unified":"1f9f1"}],"rock":[{"unified":"1faa8"}],"wood":[{"unified":"1fab5"}],"hut":[{"unified":"1f6d6"}],"house_buildings":[{"unified":"1f3d8-fe0f"}],"derelict_house_building":[{"unified":"1f3da-fe0f"}],"house":[{"unified":"1f3e0"}],"house_with_garden":[{"unified":"1f3e1"}],"office":[{"unified":"1f3e2"}],"post_office":[{"unified":"1f3e3"}],"european_post_office":[{"unified":"1f3e4"}],"hospital":[{"unified":"1f3e5"}],"bank":[{"unified":"1f3e6"}],"hotel":[{"unified":"1f3e8"}],"love_hotel":[{"unified":"1f3e9"}],"convenience_store":[{"unified":"1f3ea"}],"school":[{"unified":"1f3eb"}],"department_store":[{"unified":"1f3ec"}],"factory":[{"unified":"1f3ed"}],"japanese_castle":[{"unified":"1f3ef"}],"european_castle":[{"unified":"1f3f0"}],"wedding":[{"unified":"1f492"}],"tokyo_tower":[{"unified":"1f5fc"}],"statue_of_liberty":[{"unified":"1f5fd"}],"church":[{"unified":"26ea"}],"mosque":[{"unified":"1f54c"}],"hindu_temple":[{"unified":"1f6d5"}],"synagogue":[{"unified":"1f54d"}],"shinto_shrine":[{"unified":"26e9-fe0f"}],"kaaba":[{"unified":"1f54b"}],"fountain":[{"unified":"26f2"}],"tent":[{"unified":"26fa"}],"foggy":[{"unified":"1f301"}],"night_with_stars":[{"unified":"1f303"}],"cityscape":[{"unified":"1f3d9-fe0f"}],"sunrise_over_mountains":[{"unified":"1f304"}],"sunrise":[{"unified":"1f305"}],"city_sunset":[{"unified":"1f306"}],"city_sunrise":[{"unified":"1f307"}],"bridge_at_night":[{"unified":"1f309"}],"hotsprings":[{"unified":"2668-fe0f"}],"carousel_horse":[{"unified":"1f3a0"}],"playground_slide":[{"unified":"1f6dd"}],"ferris_wheel":[{"unified":"1f3a1"}],"roller_coaster":[{"unified":"1f3a2"}],"barber":[{"unified":"1f488"}],"circus_tent":[{"unified":"1f3aa"}],"steam_locomotive":[{"unified":"1f682"}],"railway_car":[{"unified":"1f683"}],"bullettrain_side":[{"unified":"1f684"}],"bullettrain_front":[{"unified":"1f685"}],"train2":[{"unified":"1f686"}],"metro":[{"unified":"1f687"}],"light_rail":[{"unified":"1f688"}],"station":[{"unified":"1f689"}],"tram":[{"unified":"1f68a"}],"monorail":[{"unified":"1f69d"}],"mountain_railway":[{"unified":"1f69e"}],"train":[{"unified":"1f68b"}],"bus":[{"unified":"1f68c"}],"oncoming_bus":[{"unified":"1f68d"}],"trolleybus":[{"unified":"1f68e"}],"minibus":[{"unified":"1f690"}],"ambulance":[{"unified":"1f691"}],"fire_engine":[{"unified":"1f692"}],"police_car":[{"unified":"1f693"}],"oncoming_police_car":[{"unified":"1f694"}],"taxi":[{"unified":"1f695"}],"oncoming_taxi":[{"unified":"1f696"}],"car":[{"unified":"1f697"}],"oncoming_automobile":[{"unified":"1f698"}],"blue_car":[{"unified":"1f699"}],"pickup_truck":[{"unified":"1f6fb"}],"truck":[{"unified":"1f69a"}],"articulated_lorry":[{"unified":"1f69b"}],"tractor":[{"unified":"1f69c"}],"racing_car":[{"unified":"1f3ce-fe0f"}],"racing_motorcycle":[{"unified":"1f3cd-fe0f"}],"motor_scooter":[{"unified":"1f6f5"}],"manual_wheelchair":[{"unified":"1f9bd"}],"motorized_wheelchair":[{"unified":"1f9bc"}],"auto_rickshaw":[{"unified":"1f6fa"}],"bike":[{"unified":"1f6b2"}],"scooter":[{"unified":"1f6f4"}],"skateboard":[{"unified":"1f6f9"}],"roller_skate":[{"unified":"1f6fc"}],"busstop":[{"unified":"1f68f"}],"motorway":[{"unified":"1f6e3-fe0f"}],"railway_track":[{"unified":"1f6e4-fe0f"}],"oil_drum":[{"unified":"1f6e2-fe0f"}],"fuelpump":[{"unified":"26fd"}],"wheel":[{"unified":"1f6de"}],"rotating_light":[{"unified":"1f6a8"}],"traffic_light":[{"unified":"1f6a5"}],"vertical_traffic_light":[{"unified":"1f6a6"}],"octagonal_sign":[{"unified":"1f6d1"}],"construction":[{"unified":"1f6a7"}],"anchor":[{"unified":"2693"}],"ring_buoy":[{"unified":"1f6df"}],"boat":[{"unified":"26f5"}],"canoe":[{"unified":"1f6f6"}],"speedboat":[{"unified":"1f6a4"}],"passenger_ship":[{"unified":"1f6f3-fe0f"}],"ferry":[{"unified":"26f4-fe0f"}],"motor_boat":[{"unified":"1f6e5-fe0f"}],"ship":[{"unified":"1f6a2"}],"airplane":[{"unified":"2708-fe0f"}],"small_airplane":[{"unified":"1f6e9-fe0f"}],"airplane_departure":[{"unified":"1f6eb"}],"airplane_arriving":[{"unified":"1f6ec"}],"parachute":[{"unified":"1fa82"}],"seat":[{"unified":"1f4ba"}],"helicopter":[{"unified":"1f681"}],"suspension_railway":[{"unified":"1f69f"}],"mountain_cableway":[{"unified":"1f6a0"}],"aerial_tramway":[{"unified":"1f6a1"}],"satellite":[{"unified":"1f6f0-fe0f"}],"rocket":[{"unified":"1f680"}],"flying_saucer":[{"unified":"1f6f8"}],"bellhop_bell":[{"unified":"1f6ce-fe0f"}],"luggage":[{"unified":"1f9f3"}],"hourglass":[{"unified":"231b"}],"hourglass_flowing_sand":[{"unified":"23f3"}],"watch":[{"unified":"231a"}],"alarm_clock":[{"unified":"23f0"}],"stopwatch":[{"unified":"23f1-fe0f"}],"timer_clock":[{"unified":"23f2-fe0f"}],"mantelpiece_clock":[{"unified":"1f570-fe0f"}],"clock12":[{"unified":"1f55b"}],"clock1230":[{"unified":"1f567"}],"clock1":[{"unified":"1f550"}],"clock130":[{"unified":"1f55c"}],"clock2":[{"unified":"1f551"}],"clock230":[{"unified":"1f55d"}],"clock3":[{"unified":"1f552"}],"clock330":[{"unified":"1f55e"}],"clock4":[{"unified":"1f553"}],"clock430":[{"unified":"1f55f"}],"clock5":[{"unified":"1f554"}],"clock530":[{"unified":"1f560"}],"clock6":[{"unified":"1f555"}],"clock630":[{"unified":"1f561"}],"clock7":[{"unified":"1f556"}],"clock730":[{"unified":"1f562"}],"clock8":[{"unified":"1f557"}],"clock830":[{"unified":"1f563"}],"clock9":[{"unified":"1f558"}],"clock930":[{"unified":"1f564"}],"clock10":[{"unified":"1f559"}],"clock1030":[{"unified":"1f565"}],"clock11":[{"unified":"1f55a"}],"clock1130":[{"unified":"1f566"}],"new_moon":[{"unified":"1f311"}],"waxing_crescent_moon":[{"unified":"1f312"}],"first_quarter_moon":[{"unified":"1f313"}],"moon":[{"unified":"1f314"}],"full_moon":[{"unified":"1f315"}],"waning_gibbous_moon":[{"unified":"1f316"}],"last_quarter_moon":[{"unified":"1f317"}],"waning_crescent_moon":[{"unified":"1f318"}],"crescent_moon":[{"unified":"1f319"}],"new_moon_with_face":[{"unified":"1f31a"}],"first_quarter_moon_with_face":[{"unified":"1f31b"}],"last_quarter_moon_with_face":[{"unified":"1f31c"}],"thermometer":[{"unified":"1f321-fe0f"}],"sunny":[{"unified":"2600-fe0f"}],"full_moon_with_face":[{"unified":"1f31d"}],"sun_with_face":[{"unified":"1f31e"}],"ringed_planet":[{"unified":"1fa90"}],"star":[{"unified":"2b50"}],"star2":[{"unified":"1f31f"}],"stars":[{"unified":"1f320"}],"milky_way":[{"unified":"1f30c"}],"cloud":[{"unified":"2601-fe0f"}],"partly_sunny":[{"unified":"26c5"}],"thunder_cloud_and_rain":[{"unified":"26c8-fe0f"}],"mostly_sunny":[{"unified":"1f324-fe0f"}],"barely_sunny":[{"unified":"1f325-fe0f"}],"partly_sunny_rain":[{"unified":"1f326-fe0f"}],"rain_cloud":[{"unified":"1f327-fe0f"}],"snow_cloud":[{"unified":"1f328-fe0f"}],"lightning":[{"unified":"1f329-fe0f"}],"tornado":[{"unified":"1f32a-fe0f"}],"fog":[{"unified":"1f32b-fe0f"}],"wind_blowing_face":[{"unified":"1f32c-fe0f"}],"cyclone":[{"unified":"1f300"}],"rainbow":[{"unified":"1f308"}],"closed_umbrella":[{"unified":"1f302"}],"umbrella":[{"unified":"2602-fe0f"}],"umbrella_with_rain_drops":[{"unified":"2614"}],"umbrella_on_ground":[{"unified":"26f1-fe0f"}],"zap":[{"unified":"26a1"}],"snowflake":[{"unified":"2744-fe0f"}],"snowman":[{"unified":"2603-fe0f"}],"snowman_without_snow":[{"unified":"26c4"}],"comet":[{"unified":"2604-fe0f"}],"fire":[{"unified":"1f525"}],"droplet":[{"unified":"1f4a7"}],"ocean":[{"unified":"1f30a"}],"jack_o_lantern":[{"unified":"1f383"}],"christmas_tree":[{"unified":"1f384"}],"fireworks":[{"unified":"1f386"}],"sparkler":[{"unified":"1f387"}],"firecracker":[{"unified":"1f9e8"}],"sparkles":[{"unified":"2728"}],"balloon":[{"unified":"1f388"}],"tada":[{"unified":"1f389"}],"confetti_ball":[{"unified":"1f38a"}],"tanabata_tree":[{"unified":"1f38b"}],"bamboo":[{"unified":"1f38d"}],"dolls":[{"unified":"1f38e"}],"flags":[{"unified":"1f38f"}],"wind_chime":[{"unified":"1f390"}],"rice_scene":[{"unified":"1f391"}],"red_envelope":[{"unified":"1f9e7"}],"ribbon":[{"unified":"1f380"}],"gift":[{"unified":"1f381"}],"reminder_ribbon":[{"unified":"1f397-fe0f"}],"admission_tickets":[{"unified":"1f39f-fe0f"}],"ticket":[{"unified":"1f3ab"}],"medal":[{"unified":"1f396-fe0f"}],"trophy":[{"unified":"1f3c6"}],"sports_medal":[{"unified":"1f3c5"}],"first_place_medal":[{"unified":"1f947"}],"second_place_medal":[{"unified":"1f948"}],"third_place_medal":[{"unified":"1f949"}],"soccer":[{"unified":"26bd"}],"baseball":[{"unified":"26be"}],"softball":[{"unified":"1f94e"}],"basketball":[{"unified":"1f3c0"}],"volleyball":[{"unified":"1f3d0"}],"football":[{"unified":"1f3c8"}],"rugby_football":[{"unified":"1f3c9"}],"tennis":[{"unified":"1f3be"}],"flying_disc":[{"unified":"1f94f"}],"bowling":[{"unified":"1f3b3"}],"cricket_bat_and_ball":[{"unified":"1f3cf"}],"field_hockey_stick_and_ball":[{"unified":"1f3d1"}],"ice_hockey_stick_and_puck":[{"unified":"1f3d2"}],"lacrosse":[{"unified":"1f94d"}],"table_tennis_paddle_and_ball":[{"unified":"1f3d3"}],"badminton_racquet_and_shuttlecock":[{"unified":"1f3f8"}],"boxing_glove":[{"unified":"1f94a"}],"martial_arts_uniform":[{"unified":"1f94b"}],"goal_net":[{"unified":"1f945"}],"golf":[{"unified":"26f3"}],"ice_skate":[{"unified":"26f8-fe0f"}],"fishing_pole_and_fish":[{"unified":"1f3a3"}],"diving_mask":[{"unified":"1f93f"}],"running_shirt_with_sash":[{"unified":"1f3bd"}],"ski":[{"unified":"1f3bf"}],"sled":[{"unified":"1f6f7"}],"curling_stone":[{"unified":"1f94c"}],"dart":[{"unified":"1f3af"}],"yo-yo":[{"unified":"1fa80"}],"kite":[{"unified":"1fa81"}],"gun":[{"unified":"1f52b"}],"8ball":[{"unified":"1f3b1"}],"crystal_ball":[{"unified":"1f52e"}],"magic_wand":[{"unified":"1fa84"}],"video_game":[{"unified":"1f3ae"}],"joystick":[{"unified":"1f579-fe0f"}],"slot_machine":[{"unified":"1f3b0"}],"game_die":[{"unified":"1f3b2"}],"jigsaw":[{"unified":"1f9e9"}],"teddy_bear":[{"unified":"1f9f8"}],"pinata":[{"unified":"1fa85"}],"mirror_ball":[{"unified":"1faa9"}],"nesting_dolls":[{"unified":"1fa86"}],"spades":[{"unified":"2660-fe0f"}],"hearts":[{"unified":"2665-fe0f"}],"diamonds":[{"unified":"2666-fe0f"}],"clubs":[{"unified":"2663-fe0f"}],"chess_pawn":[{"unified":"265f-fe0f"}],"black_joker":[{"unified":"1f0cf"}],"mahjong":[{"unified":"1f004"}],"flower_playing_cards":[{"unified":"1f3b4"}],"performing_arts":[{"unified":"1f3ad"}],"frame_with_picture":[{"unified":"1f5bc-fe0f"}],"art":[{"unified":"1f3a8"}],"thread":[{"unified":"1f9f5"}],"sewing_needle":[{"unified":"1faa1"}],"yarn":[{"unified":"1f9f6"}],"knot":[{"unified":"1faa2"}],"eyeglasses":[{"unified":"1f453"}],"dark_sunglasses":[{"unified":"1f576-fe0f"}],"goggles":[{"unified":"1f97d"}],"lab_coat":[{"unified":"1f97c"}],"safety_vest":[{"unified":"1f9ba"}],"necktie":[{"unified":"1f454"}],"shirt":[{"unified":"1f455"}],"jeans":[{"unified":"1f456"}],"scarf":[{"unified":"1f9e3"}],"gloves":[{"unified":"1f9e4"}],"coat":[{"unified":"1f9e5"}],"socks":[{"unified":"1f9e6"}],"dress":[{"unified":"1f457"}],"kimono":[{"unified":"1f458"}],"sari":[{"unified":"1f97b"}],"one-piece_swimsuit":[{"unified":"1fa71"}],"briefs":[{"unified":"1fa72"}],"shorts":[{"unified":"1fa73"}],"bikini":[{"unified":"1f459"}],"womans_clothes":[{"unified":"1f45a"}],"folding_hand_fan":[{"unified":"1faad"}],"purse":[{"unified":"1f45b"}],"handbag":[{"unified":"1f45c"}],"pouch":[{"unified":"1f45d"}],"shopping_bags":[{"unified":"1f6cd-fe0f"}],"school_satchel":[{"unified":"1f392"}],"thong_sandal":[{"unified":"1fa74"}],"mans_shoe":[{"unified":"1f45e"}],"athletic_shoe":[{"unified":"1f45f"}],"hiking_boot":[{"unified":"1f97e"}],"womans_flat_shoe":[{"unified":"1f97f"}],"high_heel":[{"unified":"1f460"}],"sandal":[{"unified":"1f461"}],"ballet_shoes":[{"unified":"1fa70"}],"boot":[{"unified":"1f462"}],"hair_pick":[{"unified":"1faae"}],"crown":[{"unified":"1f451"}],"womans_hat":[{"unified":"1f452"}],"tophat":[{"unified":"1f3a9"}],"mortar_board":[{"unified":"1f393"}],"billed_cap":[{"unified":"1f9e2"}],"military_helmet":[{"unified":"1fa96"}],"helmet_with_white_cross":[{"unified":"26d1-fe0f"}],"prayer_beads":[{"unified":"1f4ff"}],"lipstick":[{"unified":"1f484"}],"ring":[{"unified":"1f48d"}],"gem":[{"unified":"1f48e"}],"mute":[{"unified":"1f507"}],"speaker":[{"unified":"1f508"}],"sound":[{"unified":"1f509"}],"loud_sound":[{"unified":"1f50a"}],"loudspeaker":[{"unified":"1f4e2"}],"mega":[{"unified":"1f4e3"}],"postal_horn":[{"unified":"1f4ef"}],"bell":[{"unified":"1f514"}],"no_bell":[{"unified":"1f515"}],"musical_score":[{"unified":"1f3bc"}],"musical_note":[{"unified":"1f3b5"}],"notes":[{"unified":"1f3b6"}],"studio_microphone":[{"unified":"1f399-fe0f"}],"level_slider":[{"unified":"1f39a-fe0f"}],"control_knobs":[{"unified":"1f39b-fe0f"}],"microphone":[{"unified":"1f3a4"}],"headphones":[{"unified":"1f3a7"}],"radio":[{"unified":"1f4fb"}],"saxophone":[{"unified":"1f3b7"}],"accordion":[{"unified":"1fa97"}],"guitar":[{"unified":"1f3b8"}],"musical_keyboard":[{"unified":"1f3b9"}],"trumpet":[{"unified":"1f3ba"}],"violin":[{"unified":"1f3bb"}],"banjo":[{"unified":"1fa95"}],"drum_with_drumsticks":[{"unified":"1f941"}],"long_drum":[{"unified":"1fa98"}],"maracas":[{"unified":"1fa87"}],"flute":[{"unified":"1fa88"}],"iphone":[{"unified":"1f4f1"}],"calling":[{"unified":"1f4f2"}],"phone":[{"unified":"260e-fe0f"}],"telephone_receiver":[{"unified":"1f4de"}],"pager":[{"unified":"1f4df"}],"fax":[{"unified":"1f4e0"}],"battery":[{"unified":"1f50b"}],"low_battery":[{"unified":"1faab"}],"electric_plug":[{"unified":"1f50c"}],"computer":[{"unified":"1f4bb"}],"desktop_computer":[{"unified":"1f5a5-fe0f"}],"printer":[{"unified":"1f5a8-fe0f"}],"keyboard":[{"unified":"2328-fe0f"}],"three_button_mouse":[{"unified":"1f5b1-fe0f"}],"trackball":[{"unified":"1f5b2-fe0f"}],"minidisc":[{"unified":"1f4bd"}],"floppy_disk":[{"unified":"1f4be"}],"cd":[{"unified":"1f4bf"}],"dvd":[{"unified":"1f4c0"}],"abacus":[{"unified":"1f9ee"}],"movie_camera":[{"unified":"1f3a5"}],"film_frames":[{"unified":"1f39e-fe0f"}],"film_projector":[{"unified":"1f4fd-fe0f"}],"clapper":[{"unified":"1f3ac"}],"tv":[{"unified":"1f4fa"}],"camera":[{"unified":"1f4f7"}],"camera_with_flash":[{"unified":"1f4f8"}],"video_camera":[{"unified":"1f4f9"}],"vhs":[{"unified":"1f4fc"}],"mag":[{"unified":"1f50d"}],"mag_right":[{"unified":"1f50e"}],"candle":[{"unified":"1f56f-fe0f"}],"bulb":[{"unified":"1f4a1"}],"flashlight":[{"unified":"1f526"}],"izakaya_lantern":[{"unified":"1f3ee"}],"diya_lamp":[{"unified":"1fa94"}],"notebook_with_decorative_cover":[{"unified":"1f4d4"}],"closed_book":[{"unified":"1f4d5"}],"book":[{"unified":"1f4d6"}],"green_book":[{"unified":"1f4d7"}],"blue_book":[{"unified":"1f4d8"}],"orange_book":[{"unified":"1f4d9"}],"books":[{"unified":"1f4da"}],"notebook":[{"unified":"1f4d3"}],"ledger":[{"unified":"1f4d2"}],"page_with_curl":[{"unified":"1f4c3"}],"scroll":[{"unified":"1f4dc"}],"page_facing_up":[{"unified":"1f4c4"}],"newspaper":[{"unified":"1f4f0"}],"rolled_up_newspaper":[{"unified":"1f5de-fe0f"}],"bookmark_tabs":[{"unified":"1f4d1"}],"bookmark":[{"unified":"1f516"}],"label":[{"unified":"1f3f7-fe0f"}],"moneybag":[{"unified":"1f4b0"}],"coin":[{"unified":"1fa99"}],"yen":[{"unified":"1f4b4"}],"dollar":[{"unified":"1f4b5"}],"euro":[{"unified":"1f4b6"}],"pound":[{"unified":"1f4b7"}],"money_with_wings":[{"unified":"1f4b8"}],"credit_card":[{"unified":"1f4b3"}],"receipt":[{"unified":"1f9fe"}],"chart":[{"unified":"1f4b9"}],"email":[{"unified":"2709-fe0f"}],"e-mail":[{"unified":"1f4e7"}],"incoming_envelope":[{"unified":"1f4e8"}],"envelope_with_arrow":[{"unified":"1f4e9"}],"outbox_tray":[{"unified":"1f4e4"}],"inbox_tray":[{"unified":"1f4e5"}],"package":[{"unified":"1f4e6"}],"mailbox":[{"unified":"1f4eb"}],"mailbox_closed":[{"unified":"1f4ea"}],"mailbox_with_mail":[{"unified":"1f4ec"}],"mailbox_with_no_mail":[{"unified":"1f4ed"}],"postbox":[{"unified":"1f4ee"}],"ballot_box_with_ballot":[{"unified":"1f5f3-fe0f"}],"pencil2":[{"unified":"270f-fe0f"}],"black_nib":[{"unified":"2712-fe0f"}],"lower_left_fountain_pen":[{"unified":"1f58b-fe0f"}],"lower_left_ballpoint_pen":[{"unified":"1f58a-fe0f"}],"lower_left_paintbrush":[{"unified":"1f58c-fe0f"}],"lower_left_crayon":[{"unified":"1f58d-fe0f"}],"memo":[{"unified":"1f4dd"}],"briefcase":[{"unified":"1f4bc"}],"file_folder":[{"unified":"1f4c1"}],"open_file_folder":[{"unified":"1f4c2"}],"card_index_dividers":[{"unified":"1f5c2-fe0f"}],"date":[{"unified":"1f4c5"}],"calendar":[{"unified":"1f4c6"}],"spiral_note_pad":[{"unified":"1f5d2-fe0f"}],"spiral_calendar_pad":[{"unified":"1f5d3-fe0f"}],"card_index":[{"unified":"1f4c7"}],"chart_with_upwards_trend":[{"unified":"1f4c8"}],"chart_with_downwards_trend":[{"unified":"1f4c9"}],"bar_chart":[{"unified":"1f4ca"}],"clipboard":[{"unified":"1f4cb"}],"pushpin":[{"unified":"1f4cc"}],"round_pushpin":[{"unified":"1f4cd"}],"paperclip":[{"unified":"1f4ce"}],"linked_paperclips":[{"unified":"1f587-fe0f"}],"straight_ruler":[{"unified":"1f4cf"}],"triangular_ruler":[{"unified":"1f4d0"}],"scissors":[{"unified":"2702-fe0f"}],"card_file_box":[{"unified":"1f5c3-fe0f"}],"file_cabinet":[{"unified":"1f5c4-fe0f"}],"wastebasket":[{"unified":"1f5d1-fe0f"}],"lock":[{"unified":"1f512"}],"unlock":[{"unified":"1f513"}],"lock_with_ink_pen":[{"unified":"1f50f"}],"closed_lock_with_key":[{"unified":"1f510"}],"key":[{"unified":"1f511"}],"old_key":[{"unified":"1f5dd-fe0f"}],"hammer":[{"unified":"1f528"}],"axe":[{"unified":"1fa93"}],"pick":[{"unified":"26cf-fe0f"}],"hammer_and_pick":[{"unified":"2692-fe0f"}],"hammer_and_wrench":[{"unified":"1f6e0-fe0f"}],"dagger_knife":[{"unified":"1f5e1-fe0f"}],"crossed_swords":[{"unified":"2694-fe0f"}],"bomb":[{"unified":"1f4a3"}],"boomerang":[{"unified":"1fa83"}],"bow_and_arrow":[{"unified":"1f3f9"}],"shield":[{"unified":"1f6e1-fe0f"}],"carpentry_saw":[{"unified":"1fa9a"}],"wrench":[{"unified":"1f527"}],"screwdriver":[{"unified":"1fa9b"}],"nut_and_bolt":[{"unified":"1f529"}],"gear":[{"unified":"2699-fe0f"}],"compression":[{"unified":"1f5dc-fe0f"}],"scales":[{"unified":"2696-fe0f"}],"probing_cane":[{"unified":"1f9af"}],"link":[{"unified":"1f517"}],"chains":[{"unified":"26d3-fe0f"}],"hook":[{"unified":"1fa9d"}],"toolbox":[{"unified":"1f9f0"}],"magnet":[{"unified":"1f9f2"}],"ladder":[{"unified":"1fa9c"}],"alembic":[{"unified":"2697-fe0f"}],"test_tube":[{"unified":"1f9ea"}],"petri_dish":[{"unified":"1f9eb"}],"dna":[{"unified":"1f9ec"}],"microscope":[{"unified":"1f52c"}],"telescope":[{"unified":"1f52d"}],"satellite_antenna":[{"unified":"1f4e1"}],"syringe":[{"unified":"1f489"}],"drop_of_blood":[{"unified":"1fa78"}],"pill":[{"unified":"1f48a"}],"adhesive_bandage":[{"unified":"1fa79"}],"crutch":[{"unified":"1fa7c"}],"stethoscope":[{"unified":"1fa7a"}],"x-ray":[{"unified":"1fa7b"}],"door":[{"unified":"1f6aa"}],"elevator":[{"unified":"1f6d7"}],"mirror":[{"unified":"1fa9e"}],"window":[{"unified":"1fa9f"}],"bed":[{"unified":"1f6cf-fe0f"}],"couch_and_lamp":[{"unified":"1f6cb-fe0f"}],"chair":[{"unified":"1fa91"}],"toilet":[{"unified":"1f6bd"}],"plunger":[{"unified":"1faa0"}],"shower":[{"unified":"1f6bf"}],"bathtub":[{"unified":"1f6c1"}],"mouse_trap":[{"unified":"1faa4"}],"razor":[{"unified":"1fa92"}],"lotion_bottle":[{"unified":"1f9f4"}],"safety_pin":[{"unified":"1f9f7"}],"broom":[{"unified":"1f9f9"}],"basket":[{"unified":"1f9fa"}],"roll_of_paper":[{"unified":"1f9fb"}],"bucket":[{"unified":"1faa3"}],"soap":[{"unified":"1f9fc"}],"bubbles":[{"unified":"1fae7"}],"toothbrush":[{"unified":"1faa5"}],"sponge":[{"unified":"1f9fd"}],"fire_extinguisher":[{"unified":"1f9ef"}],"shopping_trolley":[{"unified":"1f6d2"}],"smoking":[{"unified":"1f6ac"}],"coffin":[{"unified":"26b0-fe0f"}],"headstone":[{"unified":"1faa6"}],"funeral_urn":[{"unified":"26b1-fe0f"}],"nazar_amulet":[{"unified":"1f9ff"}],"hamsa":[{"unified":"1faac"}],"moyai":[{"unified":"1f5ff"}],"placard":[{"unified":"1faa7"}],"identification_card":[{"unified":"1faaa"}],"atm":[{"unified":"1f3e7"}],"put_litter_in_its_place":[{"unified":"1f6ae"}],"potable_water":[{"unified":"1f6b0"}],"wheelchair":[{"unified":"267f"}],"mens":[{"unified":"1f6b9"}],"womens":[{"unified":"1f6ba"}],"restroom":[{"unified":"1f6bb"}],"baby_symbol":[{"unified":"1f6bc"}],"wc":[{"unified":"1f6be"}],"passport_control":[{"unified":"1f6c2"}],"customs":[{"unified":"1f6c3"}],"baggage_claim":[{"unified":"1f6c4"}],"left_luggage":[{"unified":"1f6c5"}],"warning":[{"unified":"26a0-fe0f"}],"children_crossing":[{"unified":"1f6b8"}],"no_entry":[{"unified":"26d4"}],"no_entry_sign":[{"unified":"1f6ab"}],"no_bicycles":[{"unified":"1f6b3"}],"no_smoking":[{"unified":"1f6ad"}],"do_not_litter":[{"unified":"1f6af"}],"non-potable_water":[{"unified":"1f6b1"}],"no_pedestrians":[{"unified":"1f6b7"}],"no_mobile_phones":[{"unified":"1f4f5"}],"underage":[{"unified":"1f51e"}],"radioactive_sign":[{"unified":"2622-fe0f"}],"biohazard_sign":[{"unified":"2623-fe0f"}],"arrow_up":[{"unified":"2b06-fe0f"}],"arrow_upper_right":[{"unified":"2197-fe0f"}],"arrow_right":[{"unified":"27a1-fe0f"}],"arrow_lower_right":[{"unified":"2198-fe0f"}],"arrow_down":[{"unified":"2b07-fe0f"}],"arrow_lower_left":[{"unified":"2199-fe0f"}],"arrow_left":[{"unified":"2b05-fe0f"}],"arrow_upper_left":[{"unified":"2196-fe0f"}],"arrow_up_down":[{"unified":"2195-fe0f"}],"left_right_arrow":[{"unified":"2194-fe0f"}],"leftwards_arrow_with_hook":[{"unified":"21a9-fe0f"}],"arrow_right_hook":[{"unified":"21aa-fe0f"}],"arrow_heading_up":[{"unified":"2934-fe0f"}],"arrow_heading_down":[{"unified":"2935-fe0f"}],"arrows_clockwise":[{"unified":"1f503"}],"arrows_counterclockwise":[{"unified":"1f504"}],"back":[{"unified":"1f519"}],"end":[{"unified":"1f51a"}],"on":[{"unified":"1f51b"}],"soon":[{"unified":"1f51c"}],"top":[{"unified":"1f51d"}],"place_of_worship":[{"unified":"1f6d0"}],"atom_symbol":[{"unified":"269b-fe0f"}],"om_symbol":[{"unified":"1f549-fe0f"}],"star_of_david":[{"unified":"2721-fe0f"}],"wheel_of_dharma":[{"unified":"2638-fe0f"}],"yin_yang":[{"unified":"262f-fe0f"}],"latin_cross":[{"unified":"271d-fe0f"}],"orthodox_cross":[{"unified":"2626-fe0f"}],"star_and_crescent":[{"unified":"262a-fe0f"}],"peace_symbol":[{"unified":"262e-fe0f"}],"menorah_with_nine_branches":[{"unified":"1f54e"}],"six_pointed_star":[{"unified":"1f52f"}],"khanda":[{"unified":"1faaf"}],"aries":[{"unified":"2648"}],"taurus":[{"unified":"2649"}],"gemini":[{"unified":"264a"}],"cancer":[{"unified":"264b"}],"leo":[{"unified":"264c"}],"virgo":[{"unified":"264d"}],"libra":[{"unified":"264e"}],"scorpius":[{"unified":"264f"}],"sagittarius":[{"unified":"2650"}],"capricorn":[{"unified":"2651"}],"aquarius":[{"unified":"2652"}],"pisces":[{"unified":"2653"}],"ophiuchus":[{"unified":"26ce"}],"twisted_rightwards_arrows":[{"unified":"1f500"}],"repeat":[{"unified":"1f501"}],"repeat_one":[{"unified":"1f502"}],"arrow_forward":[{"unified":"25b6-fe0f"}],"fast_forward":[{"unified":"23e9"}],"black_right_pointing_double_triangle_with_vertical_bar":[{"unified":"23ed-fe0f"}],"black_right_pointing_triangle_with_double_vertical_bar":[{"unified":"23ef-fe0f"}],"arrow_backward":[{"unified":"25c0-fe0f"}],"rewind":[{"unified":"23ea"}],"black_left_pointing_double_triangle_with_vertical_bar":[{"unified":"23ee-fe0f"}],"arrow_up_small":[{"unified":"1f53c"}],"arrow_double_up":[{"unified":"23eb"}],"arrow_down_small":[{"unified":"1f53d"}],"arrow_double_down":[{"unified":"23ec"}],"double_vertical_bar":[{"unified":"23f8-fe0f"}],"black_square_for_stop":[{"unified":"23f9-fe0f"}],"black_circle_for_record":[{"unified":"23fa-fe0f"}],"eject":[{"unified":"23cf-fe0f"}],"cinema":[{"unified":"1f3a6"}],"low_brightness":[{"unified":"1f505"}],"high_brightness":[{"unified":"1f506"}],"signal_strength":[{"unified":"1f4f6"}],"wireless":[{"unified":"1f6dc"}],"vibration_mode":[{"unified":"1f4f3"}],"mobile_phone_off":[{"unified":"1f4f4"}],"female_sign":[{"unified":"2640-fe0f"}],"male_sign":[{"unified":"2642-fe0f"}],"transgender_symbol":[{"unified":"26a7-fe0f"}],"heavy_multiplication_x":[{"unified":"2716-fe0f"}],"heavy_plus_sign":[{"unified":"2795"}],"heavy_minus_sign":[{"unified":"2796"}],"heavy_division_sign":[{"unified":"2797"}],"heavy_equals_sign":[{"unified":"1f7f0"}],"infinity":[{"unified":"267e-fe0f"}],"bangbang":[{"unified":"203c-fe0f"}],"interrobang":[{"unified":"2049-fe0f"}],"question":[{"unified":"2753"}],"grey_question":[{"unified":"2754"}],"grey_exclamation":[{"unified":"2755"}],"exclamation":[{"unified":"2757"}],"wavy_dash":[{"unified":"3030-fe0f"}],"currency_exchange":[{"unified":"1f4b1"}],"heavy_dollar_sign":[{"unified":"1f4b2"}],"medical_symbol":[{"unified":"2695-fe0f"}],"recycle":[{"unified":"267b-fe0f"}],"fleur_de_lis":[{"unified":"269c-fe0f"}],"trident":[{"unified":"1f531"}],"name_badge":[{"unified":"1f4db"}],"beginner":[{"unified":"1f530"}],"o":[{"unified":"2b55"}],"white_check_mark":[{"unified":"2705"}],"ballot_box_with_check":[{"unified":"2611-fe0f"}],"heavy_check_mark":[{"unified":"2714-fe0f"}],"x":[{"unified":"274c"}],"negative_squared_cross_mark":[{"unified":"274e"}],"curly_loop":[{"unified":"27b0"}],"loop":[{"unified":"27bf"}],"part_alternation_mark":[{"unified":"303d-fe0f"}],"eight_spoked_asterisk":[{"unified":"2733-fe0f"}],"eight_pointed_black_star":[{"unified":"2734-fe0f"}],"sparkle":[{"unified":"2747-fe0f"}],"copyright":[{"unified":"00a9-fe0f"}],"registered":[{"unified":"00ae-fe0f"}],"tm":[{"unified":"2122-fe0f"}],"hash":[{"unified":"0023-fe0f-20e3"}],"keycap_star":[{"unified":"002a-fe0f-20e3"}],"zero":[{"unified":"0030-fe0f-20e3"}],"one":[{"unified":"0031-fe0f-20e3"}],"two":[{"unified":"0032-fe0f-20e3"}],"three":[{"unified":"0033-fe0f-20e3"}],"four":[{"unified":"0034-fe0f-20e3"}],"five":[{"unified":"0035-fe0f-20e3"}],"six":[{"unified":"0036-fe0f-20e3"}],"seven":[{"unified":"0037-fe0f-20e3"}],"eight":[{"unified":"0038-fe0f-20e3"}],"nine":[{"unified":"0039-fe0f-20e3"}],"keycap_ten":[{"unified":"1f51f"}],"capital_abcd":[{"unified":"1f520"}],"abcd":[{"unified":"1f521"}],"symbols":[{"unified":"1f523"}],"abc":[{"unified":"1f524"}],"a":[{"unified":"1f170-fe0f"}],"ab":[{"unified":"1f18e"}],"b":[{"unified":"1f171-fe0f"}],"cl":[{"unified":"1f191"}],"cool":[{"unified":"1f192"}],"free":[{"unified":"1f193"}],"information_source":[{"unified":"2139-fe0f"}],"id":[{"unified":"1f194"}],"m":[{"unified":"24c2-fe0f"}],"new":[{"unified":"1f195"}],"ng":[{"unified":"1f196"}],"o2":[{"unified":"1f17e-fe0f"}],"ok":[{"unified":"1f197"}],"parking":[{"unified":"1f17f-fe0f"}],"sos":[{"unified":"1f198"}],"up":[{"unified":"1f199"}],"vs":[{"unified":"1f19a"}],"koko":[{"unified":"1f201"}],"sa":[{"unified":"1f202-fe0f"}],"u6708":[{"unified":"1f237-fe0f"}],"u6709":[{"unified":"1f236"}],"u6307":[{"unified":"1f22f"}],"ideograph_advantage":[{"unified":"1f250"}],"u5272":[{"unified":"1f239"}],"u7121":[{"unified":"1f21a"}],"u7981":[{"unified":"1f232"}],"accept":[{"unified":"1f251"}],"u7533":[{"unified":"1f238"}],"u5408":[{"unified":"1f234"}],"u7a7a":[{"unified":"1f233"}],"congratulations":[{"unified":"3297-fe0f"}],"secret":[{"unified":"3299-fe0f"}],"u55b6":[{"unified":"1f23a"}],"u6e80":[{"unified":"1f235"}],"red_circle":[{"unified":"1f534"}],"large_orange_circle":[{"unified":"1f7e0"}],"large_yellow_circle":[{"unified":"1f7e1"}],"large_green_circle":[{"unified":"1f7e2"}],"large_blue_circle":[{"unified":"1f535"}],"large_purple_circle":[{"unified":"1f7e3"}],"large_brown_circle":[{"unified":"1f7e4"}],"black_circle":[{"unified":"26ab"}],"white_circle":[{"unified":"26aa"}],"large_red_square":[{"unified":"1f7e5"}],"large_orange_square":[{"unified":"1f7e7"}],"large_yellow_square":[{"unified":"1f7e8"}],"large_green_square":[{"unified":"1f7e9"}],"large_blue_square":[{"unified":"1f7e6"}],"large_purple_square":[{"unified":"1f7ea"}],"large_brown_square":[{"unified":"1f7eb"}],"black_large_square":[{"unified":"2b1b"}],"white_large_square":[{"unified":"2b1c"}],"black_medium_square":[{"unified":"25fc-fe0f"}],"white_medium_square":[{"unified":"25fb-fe0f"}],"black_medium_small_square":[{"unified":"25fe"}],"white_medium_small_square":[{"unified":"25fd"}],"black_small_square":[{"unified":"25aa-fe0f"}],"white_small_square":[{"unified":"25ab-fe0f"}],"large_orange_diamond":[{"unified":"1f536"}],"large_blue_diamond":[{"unified":"1f537"}],"small_orange_diamond":[{"unified":"1f538"}],"small_blue_diamond":[{"unified":"1f539"}],"small_red_triangle":[{"unified":"1f53a"}],"small_red_triangle_down":[{"unified":"1f53b"}],"diamond_shape_with_a_dot_inside":[{"unified":"1f4a0"}],"radio_button":[{"unified":"1f518"}],"white_square_button":[{"unified":"1f533"}],"black_square_button":[{"unified":"1f532"}],"checkered_flag":[{"unified":"1f3c1"}],"triangular_flag_on_post":[{"unified":"1f6a9"}],"crossed_flags":[{"unified":"1f38c"}],"waving_black_flag":[{"unified":"1f3f4"}],"waving_white_flag":[{"unified":"1f3f3-fe0f"}],"rainbow-flag":[{"unified":"1f3f3-fe0f-200d-1f308"}],"transgender_flag":[{"unified":"1f3f3-fe0f-200d-26a7-fe0f"}],"pirate_flag":[{"unified":"1f3f4-200d-2620-fe0f"}],"flag-ac":[{"unified":"1f1e6-1f1e8"}],"flag-ad":[{"unified":"1f1e6-1f1e9"}],"flag-ae":[{"unified":"1f1e6-1f1ea"}],"flag-af":[{"unified":"1f1e6-1f1eb"}],"flag-ag":[{"unified":"1f1e6-1f1ec"}],"flag-ai":[{"unified":"1f1e6-1f1ee"}],"flag-al":[{"unified":"1f1e6-1f1f1"}],"flag-am":[{"unified":"1f1e6-1f1f2"}],"flag-ao":[{"unified":"1f1e6-1f1f4"}],"flag-aq":[{"unified":"1f1e6-1f1f6"}],"flag-ar":[{"unified":"1f1e6-1f1f7"}],"flag-as":[{"unified":"1f1e6-1f1f8"}],"flag-at":[{"unified":"1f1e6-1f1f9"}],"flag-au":[{"unified":"1f1e6-1f1fa"}],"flag-aw":[{"unified":"1f1e6-1f1fc"}],"flag-ax":[{"unified":"1f1e6-1f1fd"}],"flag-az":[{"unified":"1f1e6-1f1ff"}],"flag-ba":[{"unified":"1f1e7-1f1e6"}],"flag-bb":[{"unified":"1f1e7-1f1e7"}],"flag-bd":[{"unified":"1f1e7-1f1e9"}],"flag-be":[{"unified":"1f1e7-1f1ea"}],"flag-bf":[{"unified":"1f1e7-1f1eb"}],"flag-bg":[{"unified":"1f1e7-1f1ec"}],"flag-bh":[{"unified":"1f1e7-1f1ed"}],"flag-bi":[{"unified":"1f1e7-1f1ee"}],"flag-bj":[{"unified":"1f1e7-1f1ef"}],"flag-bl":[{"unified":"1f1e7-1f1f1"}],"flag-bm":[{"unified":"1f1e7-1f1f2"}],"flag-bn":[{"unified":"1f1e7-1f1f3"}],"flag-bo":[{"unified":"1f1e7-1f1f4"}],"flag-bq":[{"unified":"1f1e7-1f1f6"}],"flag-br":[{"unified":"1f1e7-1f1f7"}],"flag-bs":[{"unified":"1f1e7-1f1f8"}],"flag-bt":[{"unified":"1f1e7-1f1f9"}],"flag-bv":[{"unified":"1f1e7-1f1fb"}],"flag-bw":[{"unified":"1f1e7-1f1fc"}],"flag-by":[{"unified":"1f1e7-1f1fe"}],"flag-bz":[{"unified":"1f1e7-1f1ff"}],"flag-ca":[{"unified":"1f1e8-1f1e6"}],"flag-cc":[{"unified":"1f1e8-1f1e8"}],"flag-cd":[{"unified":"1f1e8-1f1e9"}],"flag-cf":[{"unified":"1f1e8-1f1eb"}],"flag-cg":[{"unified":"1f1e8-1f1ec"}],"flag-ch":[{"unified":"1f1e8-1f1ed"}],"flag-ci":[{"unified":"1f1e8-1f1ee"}],"flag-ck":[{"unified":"1f1e8-1f1f0"}],"flag-cl":[{"unified":"1f1e8-1f1f1"}],"flag-cm":[{"unified":"1f1e8-1f1f2"}],"cn":[{"unified":"1f1e8-1f1f3"}],"flag-co":[{"unified":"1f1e8-1f1f4"}],"flag-cp":[{"unified":"1f1e8-1f1f5"}],"flag-cr":[{"unified":"1f1e8-1f1f7"}],"flag-cu":[{"unified":"1f1e8-1f1fa"}],"flag-cv":[{"unified":"1f1e8-1f1fb"}],"flag-cw":[{"unified":"1f1e8-1f1fc"}],"flag-cx":[{"unified":"1f1e8-1f1fd"}],"flag-cy":[{"unified":"1f1e8-1f1fe"}],"flag-cz":[{"unified":"1f1e8-1f1ff"}],"de":[{"unified":"1f1e9-1f1ea"}],"flag-dg":[{"unified":"1f1e9-1f1ec"}],"flag-dj":[{"unified":"1f1e9-1f1ef"}],"flag-dk":[{"unified":"1f1e9-1f1f0"}],"flag-dm":[{"unified":"1f1e9-1f1f2"}],"flag-do":[{"unified":"1f1e9-1f1f4"}],"flag-dz":[{"unified":"1f1e9-1f1ff"}],"flag-ea":[{"unified":"1f1ea-1f1e6"}],"flag-ec":[{"unified":"1f1ea-1f1e8"}],"flag-ee":[{"unified":"1f1ea-1f1ea"}],"flag-eg":[{"unified":"1f1ea-1f1ec"}],"flag-eh":[{"unified":"1f1ea-1f1ed"}],"flag-er":[{"unified":"1f1ea-1f1f7"}],"es":[{"unified":"1f1ea-1f1f8"}],"flag-et":[{"unified":"1f1ea-1f1f9"}],"flag-eu":[{"unified":"1f1ea-1f1fa"}],"flag-fi":[{"unified":"1f1eb-1f1ee"}],"flag-fj":[{"unified":"1f1eb-1f1ef"}],"flag-fk":[{"unified":"1f1eb-1f1f0"}],"flag-fm":[{"unified":"1f1eb-1f1f2"}],"flag-fo":[{"unified":"1f1eb-1f1f4"}],"fr":[{"unified":"1f1eb-1f1f7"}],"flag-ga":[{"unified":"1f1ec-1f1e6"}],"gb":[{"unified":"1f1ec-1f1e7"}],"flag-gd":[{"unified":"1f1ec-1f1e9"}],"flag-ge":[{"unified":"1f1ec-1f1ea"}],"flag-gf":[{"unified":"1f1ec-1f1eb"}],"flag-gg":[{"unified":"1f1ec-1f1ec"}],"flag-gh":[{"unified":"1f1ec-1f1ed"}],"flag-gi":[{"unified":"1f1ec-1f1ee"}],"flag-gl":[{"unified":"1f1ec-1f1f1"}],"flag-gm":[{"unified":"1f1ec-1f1f2"}],"flag-gn":[{"unified":"1f1ec-1f1f3"}],"flag-gp":[{"unified":"1f1ec-1f1f5"}],"flag-gq":[{"unified":"1f1ec-1f1f6"}],"flag-gr":[{"unified":"1f1ec-1f1f7"}],"flag-gs":[{"unified":"1f1ec-1f1f8"}],"flag-gt":[{"unified":"1f1ec-1f1f9"}],"flag-gu":[{"unified":"1f1ec-1f1fa"}],"flag-gw":[{"unified":"1f1ec-1f1fc"}],"flag-gy":[{"unified":"1f1ec-1f1fe"}],"flag-hk":[{"unified":"1f1ed-1f1f0"}],"flag-hm":[{"unified":"1f1ed-1f1f2"}],"flag-hn":[{"unified":"1f1ed-1f1f3"}],"flag-hr":[{"unified":"1f1ed-1f1f7"}],"flag-ht":[{"unified":"1f1ed-1f1f9"}],"flag-hu":[{"unified":"1f1ed-1f1fa"}],"flag-ic":[{"unified":"1f1ee-1f1e8"}],"flag-id":[{"unified":"1f1ee-1f1e9"}],"flag-ie":[{"unified":"1f1ee-1f1ea"}],"flag-il":[{"unified":"1f1ee-1f1f1"}],"flag-im":[{"unified":"1f1ee-1f1f2"}],"flag-in":[{"unified":"1f1ee-1f1f3"}],"flag-io":[{"unified":"1f1ee-1f1f4"}],"flag-iq":[{"unified":"1f1ee-1f1f6"}],"flag-ir":[{"unified":"1f1ee-1f1f7"}],"flag-is":[{"unified":"1f1ee-1f1f8"}],"it":[{"unified":"1f1ee-1f1f9"}],"flag-je":[{"unified":"1f1ef-1f1ea"}],"flag-jm":[{"unified":"1f1ef-1f1f2"}],"flag-jo":[{"unified":"1f1ef-1f1f4"}],"jp":[{"unified":"1f1ef-1f1f5"}],"flag-ke":[{"unified":"1f1f0-1f1ea"}],"flag-kg":[{"unified":"1f1f0-1f1ec"}],"flag-kh":[{"unified":"1f1f0-1f1ed"}],"flag-ki":[{"unified":"1f1f0-1f1ee"}],"flag-km":[{"unified":"1f1f0-1f1f2"}],"flag-kn":[{"unified":"1f1f0-1f1f3"}],"flag-kp":[{"unified":"1f1f0-1f1f5"}],"kr":[{"unified":"1f1f0-1f1f7"}],"flag-kw":[{"unified":"1f1f0-1f1fc"}],"flag-ky":[{"unified":"1f1f0-1f1fe"}],"flag-kz":[{"unified":"1f1f0-1f1ff"}],"flag-la":[{"unified":"1f1f1-1f1e6"}],"flag-lb":[{"unified":"1f1f1-1f1e7"}],"flag-lc":[{"unified":"1f1f1-1f1e8"}],"flag-li":[{"unified":"1f1f1-1f1ee"}],"flag-lk":[{"unified":"1f1f1-1f1f0"}],"flag-lr":[{"unified":"1f1f1-1f1f7"}],"flag-ls":[{"unified":"1f1f1-1f1f8"}],"flag-lt":[{"unified":"1f1f1-1f1f9"}],"flag-lu":[{"unified":"1f1f1-1f1fa"}],"flag-lv":[{"unified":"1f1f1-1f1fb"}],"flag-ly":[{"unified":"1f1f1-1f1fe"}],"flag-ma":[{"unified":"1f1f2-1f1e6"}],"flag-mc":[{"unified":"1f1f2-1f1e8"}],"flag-md":[{"unified":"1f1f2-1f1e9"}],"flag-me":[{"unified":"1f1f2-1f1ea"}],"flag-mf":[{"unified":"1f1f2-1f1eb"}],"flag-mg":[{"unified":"1f1f2-1f1ec"}],"flag-mh":[{"unified":"1f1f2-1f1ed"}],"flag-mk":[{"unified":"1f1f2-1f1f0"}],"flag-ml":[{"unified":"1f1f2-1f1f1"}],"flag-mm":[{"unified":"1f1f2-1f1f2"}],"flag-mn":[{"unified":"1f1f2-1f1f3"}],"flag-mo":[{"unified":"1f1f2-1f1f4"}],"flag-mp":[{"unified":"1f1f2-1f1f5"}],"flag-mq":[{"unified":"1f1f2-1f1f6"}],"flag-mr":[{"unified":"1f1f2-1f1f7"}],"flag-ms":[{"unified":"1f1f2-1f1f8"}],"flag-mt":[{"unified":"1f1f2-1f1f9"}],"flag-mu":[{"unified":"1f1f2-1f1fa"}],"flag-mv":[{"unified":"1f1f2-1f1fb"}],"flag-mw":[{"unified":"1f1f2-1f1fc"}],"flag-mx":[{"unified":"1f1f2-1f1fd"}],"flag-my":[{"unified":"1f1f2-1f1fe"}],"flag-mz":[{"unified":"1f1f2-1f1ff"}],"flag-na":[{"unified":"1f1f3-1f1e6"}],"flag-nc":[{"unified":"1f1f3-1f1e8"}],"flag-ne":[{"unified":"1f1f3-1f1ea"}],"flag-nf":[{"unified":"1f1f3-1f1eb"}],"flag-ng":[{"unified":"1f1f3-1f1ec"}],"flag-ni":[{"unified":"1f1f3-1f1ee"}],"flag-nl":[{"unified":"1f1f3-1f1f1"}],"flag-no":[{"unified":"1f1f3-1f1f4"}],"flag-np":[{"unified":"1f1f3-1f1f5"}],"flag-nr":[{"unified":"1f1f3-1f1f7"}],"flag-nu":[{"unified":"1f1f3-1f1fa"}],"flag-nz":[{"unified":"1f1f3-1f1ff"}],"flag-om":[{"unified":"1f1f4-1f1f2"}],"flag-pa":[{"unified":"1f1f5-1f1e6"}],"flag-pe":[{"unified":"1f1f5-1f1ea"}],"flag-pf":[{"unified":"1f1f5-1f1eb"}],"flag-pg":[{"unified":"1f1f5-1f1ec"}],"flag-ph":[{"unified":"1f1f5-1f1ed"}],"flag-pk":[{"unified":"1f1f5-1f1f0"}],"flag-pl":[{"unified":"1f1f5-1f1f1"}],"flag-pm":[{"unified":"1f1f5-1f1f2"}],"flag-pn":[{"unified":"1f1f5-1f1f3"}],"flag-pr":[{"unified":"1f1f5-1f1f7"}],"flag-ps":[{"unified":"1f1f5-1f1f8"}],"flag-pt":[{"unified":"1f1f5-1f1f9"}],"flag-pw":[{"unified":"1f1f5-1f1fc"}],"flag-py":[{"unified":"1f1f5-1f1fe"}],"flag-qa":[{"unified":"1f1f6-1f1e6"}],"flag-re":[{"unified":"1f1f7-1f1ea"}],"flag-ro":[{"unified":"1f1f7-1f1f4"}],"flag-rs":[{"unified":"1f1f7-1f1f8"}],"ru":[{"unified":"1f1f7-1f1fa"}],"flag-rw":[{"unified":"1f1f7-1f1fc"}],"flag-sa":[{"unified":"1f1f8-1f1e6"}],"flag-sb":[{"unified":"1f1f8-1f1e7"}],"flag-sc":[{"unified":"1f1f8-1f1e8"}],"flag-sd":[{"unified":"1f1f8-1f1e9"}],"flag-se":[{"unified":"1f1f8-1f1ea"}],"flag-sg":[{"unified":"1f1f8-1f1ec"}],"flag-sh":[{"unified":"1f1f8-1f1ed"}],"flag-si":[{"unified":"1f1f8-1f1ee"}],"flag-sj":[{"unified":"1f1f8-1f1ef"}],"flag-sk":[{"unified":"1f1f8-1f1f0"}],"flag-sl":[{"unified":"1f1f8-1f1f1"}],"flag-sm":[{"unified":"1f1f8-1f1f2"}],"flag-sn":[{"unified":"1f1f8-1f1f3"}],"flag-so":[{"unified":"1f1f8-1f1f4"}],"flag-sr":[{"unified":"1f1f8-1f1f7"}],"flag-ss":[{"unified":"1f1f8-1f1f8"}],"flag-st":[{"unified":"1f1f8-1f1f9"}],"flag-sv":[{"unified":"1f1f8-1f1fb"}],"flag-sx":[{"unified":"1f1f8-1f1fd"}],"flag-sy":[{"unified":"1f1f8-1f1fe"}],"flag-sz":[{"unified":"1f1f8-1f1ff"}],"flag-ta":[{"unified":"1f1f9-1f1e6"}],"flag-tc":[{"unified":"1f1f9-1f1e8"}],"flag-td":[{"unified":"1f1f9-1f1e9"}],"flag-tf":[{"unified":"1f1f9-1f1eb"}],"flag-tg":[{"unified":"1f1f9-1f1ec"}],"flag-th":[{"unified":"1f1f9-1f1ed"}],"flag-tj":[{"unified":"1f1f9-1f1ef"}],"flag-tk":[{"unified":"1f1f9-1f1f0"}],"flag-tl":[{"unified":"1f1f9-1f1f1"}],"flag-tm":[{"unified":"1f1f9-1f1f2"}],"flag-tn":[{"unified":"1f1f9-1f1f3"}],"flag-to":[{"unified":"1f1f9-1f1f4"}],"flag-tr":[{"unified":"1f1f9-1f1f7"}],"flag-tt":[{"unified":"1f1f9-1f1f9"}],"flag-tv":[{"unified":"1f1f9-1f1fb"}],"flag-tw":[{"unified":"1f1f9-1f1fc"}],"flag-tz":[{"unified":"1f1f9-1f1ff"}],"flag-ua":[{"unified":"1f1fa-1f1e6"}],"flag-ug":[{"unified":"1f1fa-1f1ec"}],"flag-um":[{"unified":"1f1fa-1f1f2"}],"flag-un":[{"unified":"1f1fa-1f1f3"}],"us":[{"unified":"1f1fa-1f1f8"}],"flag-uy":[{"unified":"1f1fa-1f1fe"}],"flag-uz":[{"unified":"1f1fa-1f1ff"}],"flag-va":[{"unified":"1f1fb-1f1e6"}],"flag-vc":[{"unified":"1f1fb-1f1e8"}],"flag-ve":[{"unified":"1f1fb-1f1ea"}],"flag-vg":[{"unified":"1f1fb-1f1ec"}],"flag-vi":[{"unified":"1f1fb-1f1ee"}],"flag-vn":[{"unified":"1f1fb-1f1f3"}],"flag-vu":[{"unified":"1f1fb-1f1fa"}],"flag-wf":[{"unified":"1f1fc-1f1eb"}],"flag-ws":[{"unified":"1f1fc-1f1f8"}],"flag-xk":[{"unified":"1f1fd-1f1f0"}],"flag-ye":[{"unified":"1f1fe-1f1ea"}],"flag-yt":[{"unified":"1f1fe-1f1f9"}],"flag-za":[{"unified":"1f1ff-1f1e6"}],"flag-zm":[{"unified":"1f1ff-1f1f2"}],"flag-zw":[{"unified":"1f1ff-1f1fc"}],"flag-england":[{"unified":"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"}],"flag-scotland":[{"unified":"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"}],"flag-wales":[{"unified":"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"}]},"aliases":{"satisfied":"laughing","grinning_face_with_star_eyes":"star-struck","grinning_face_with_one_large_and_one_small_eye":"zany_face","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"face_with_hand_over_mouth","face_with_finger_covering_closed_lips":"shushing_face","face_with_one_eyebrow_raised":"face_with_raised_eyebrow","face_with_open_mouth_vomiting":"face_vomiting","shocked_face_with_exploding_head":"exploding_head","serious_face_with_symbols_covering_mouth":"face_with_symbols_on_mouth","poop":"hankey","shit":"hankey","collision":"boom","raised_hand":"hand","hand_with_index_and_middle_fingers_crossed":"crossed_fingers","sign_of_the_horns":"the_horns","reversed_hand_with_middle_finger_extended":"middle_finger","thumbsup":"+1","thumbsdown":"-1","punch":"facepunch","mother_christmas":"mrs_claus","running":"runner","man-with-bunny-ears-partying":"men-with-bunny-ears-partying","woman-with-bunny-ears-partying":"women-with-bunny-ears-partying","women_holding_hands":"two_women_holding_hands","woman_and_man_holding_hands":"man_and_woman_holding_hands","couple":"man_and_woman_holding_hands","men_holding_hands":"two_men_holding_hands","paw_prints":"feet","flipper":"dolphin","honeybee":"bee","lady_beetle":"ladybug","cooking":"fried_egg","knife":"hocho","red_car":"car","sailboat":"boat","waxing_gibbous_moon":"moon","sun_small_cloud":"mostly_sunny","sun_behind_cloud":"barely_sunny","sun_behind_rain_cloud":"partly_sunny_rain","lightning_cloud":"lightning","tornado_cloud":"tornado","tshirt":"shirt","shoe":"mans_shoe","telephone":"phone","lantern":"izakaya_lantern","open_book":"book","envelope":"email","pencil":"memo","heavy_exclamation_mark":"exclamation","staff_of_aesculapius":"medical_symbol","flag-cn":"cn","flag-de":"de","flag-es":"es","flag-fr":"fr","uk":"gb","flag-gb":"gb","flag-it":"it","flag-jp":"jp","flag-kr":"kr","flag-ru":"ru","flag-us":"us"},"sheet":{"cols":61,"rows":61}}');
var $$B2 = {
  set: function (e, n) {
    try {
      window.localStorage[`emoji-mart.${e}`] = JSON.stringify(n);
    } catch (e) {}
  },
  get: z,
  getDefaultSkin: function () {
    return z("skin");
  }
};
var H = {
  unifiedToNative: function (e) {
    return String.fromCodePoint(...e.split("-").map(e => `0x${e}`));
  }
};
let D = ["heavy_plus_sign", "+1", "-1", "eyes", "heart_eyes", "joy", "fire", "grinning", "sweat_smile", "scream", "disappointed", "unamused", "weary", "sob", "sunglasses", "heart"];
let U = null;
var F = {
  add: function (e) {
    U || (U = $$B2.get("frequently") || {});
    let n = e.id || e;
    n && (U[n] || (U[n] = 0), U[n] += 1, $$B2.set("last", n), $$B2.set("frequently", U));
  },
  get: function ({
    maxFrequentRows: e,
    perLine: n
  }) {
    U || (U = $$B2.get("frequently"));
    let i = [];
    if (!U) {
      for (let e in U = {}, D.slice(0, n)) {
        let t = D[e];
        U[t] = n - e;
        i.push(t);
      }
      return i;
    }
    let t = e * n;
    let f = $$B2.get("last");
    for (let e in U) i.push(e);
    if (i.sort((e, n) => {
      let i = U[n];
      let t = U[e];
      return i == t ? e.localeCompare(n) : i - t;
    }), i.length > t) {
      let e = i.slice(t);
      for (let n of (i = i.slice(0, t), e)) n != f && delete U[n];
      f && -1 == i.indexOf(f) && (delete U[i[i.length - 1]], i.splice(-1, 1, f));
      $$B2.set("frequently", U);
    }
    return i;
  }
};
let $ = null;
function q(e, {
  maxResults: n
} = {}) {
  let i = e.toLowerCase().replace(/(\w)-/, "$1 ").split(/[\s|,]+/).filter((e, n, i) => e.trim() && i.indexOf(e) == n);
  if (!i.length) return;
  let t;
  let f;
  let r = $ || ($ = Object.values(K.emojis));
  for (let e of i) {
    if (!r.length) break;
    for (let n of (t = [], f = {}, r)) {
      if (!n.search) continue;
      let i = n.search.indexOf(`,${e}`);
      -1 != i && (t.push(n), f[n.id] || (f[n.id] = 0), f[n.id] += n.id == e ? 0 : i + 1);
    }
    r = t;
  }
  t.length < 2 || (t.sort((e, n) => {
    let i = f[e.id];
    let t = f[n.id];
    return i == t ? e.id.localeCompare(n.id) : i - t;
  }), t.length > n && (t = t.slice(0, n)));
  return t;
}
var $$G1 = {
  search: async function (e, {
    maxResults: n
  } = {}) {
    return e && e.trim().length ? (n || (n = 90), await J(), q(e, {
      maxResults: n
    })) : null;
  },
  searchSynchronized: function (e, {
    maxResults: n
  } = {}) {
    return e && e.trim().length ? (n || (n = 90), J(), q(e, {
      maxResults: n
    })) : null;
  },
  get: function (e) {
    return e.id ? e : K.emojis[e] || K.emojis[K.aliases[e]] || K.emojis[K.natives[e]];
  },
  getShortcodeFromNative: function (e) {
    return K.natives[e];
  },
  SHORTCODES_REGEX: /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/
};
var W = {
  getUrl: function (e) {
    return "https://static.figma.com/emoji/4/64/" + e.unified?.toLowerCase() + ".png";
  }
};
let V = t(ef);
let K = function (e) {
  e.natives = {};
  let n = function (e) {
    let n = {};
    for (let i of Object.keys(e.aliases)) n[e.aliases[i]] = i;
    return n;
  }(e);
  Object.keys(e.emojis).forEach(i => {
    let t = {};
    t.id = i;
    t.search = "," + [...new Set([t.id, ...t.id.split(/[-|_|\s]+/), ...(n[t.id] || "").split(/[-|_|\s]+/)].map(e => e ? e.toLowerCase() : "").filter(e => e && e.trim()))].join(",");
    t.skins = e.emojis[i];
    t.skins.forEach((n, i) => {
      if (n) {
        let f = i + 1 == 1 ? "" : `:skin-tone-${i + 1}:`;
        n.shortcodes = `:${t.id}:${f}`;
        let r = H.unifiedToNative(n.unified);
        e.natives[r] = n.shortcodes;
      }
    });
    e.emojis[i] = t;
  });
  return e;
}(t(er));
let X = {
  autoFocus: {
    value: !1
  },
  emojiButtonColors: {
    value: null
  },
  emojiButtonRadius: {
    value: "100%"
  },
  emojiButtonSize: {
    value: 34
  },
  emojiSize: {
    value: 22
  },
  emojiVersion: {
    value: 15,
    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15]
  },
  locale: {
    value: "en",
    choices: ["en", "fr"]
  },
  maxFrequentRows: {
    value: 4
  },
  navPosition: {
    value: "top",
    choices: ["top", "bottom", "none"]
  },
  noCountryFlags: {
    value: !1
  },
  noResultsEmoji: {
    value: null
  },
  perLine: {
    value: 9
  },
  previewEmoji: {
    value: null
  },
  previewPosition: {
    value: "bottom",
    choices: ["top", "bottom", "none"]
  },
  set: {
    value: "native",
    choices: ["native", "apple", "facebook", "google", "twitter"]
  },
  skin: {
    value: 1,
    choices: [1, 2, 3, 4, 5, 6]
  },
  stickySearch: {
    value: !0
  },
  theme: {
    value: "auto",
    choices: ["auto", "light", "dark"]
  }
};
let Q = null;
let Y = !1;
let Z = null;
function J(e) {
  Q || (Q = new Promise(e => {
    Z = e;
  }));
  Y || (Y = !0, function (e, n) {
    let {
      i18n
    } = e;
    let t = function (e, n) {
      e || (e = {});
      let i = {};
      for (let t in X) i[t] = function (i) {
        let t = X[i];
        let f = n && n.getAttribute(i) || e[i];
        null != f && t.value && typeof t.value != typeof f && (f = "boolean" == typeof t.value ? "false" != f : t.value.constructor(f));
        (null == f || t.choices && -1 == t.choices.indexOf(f)) && (f = t.value);
        return f;
      }(t);
      return i;
    }(e, void 0);
    if (e.i18n && (V = i18n), t.maxFrequentRows) {
      let e = F.get(t);
      e.length && K.categories.unshift({
        id: "frequent",
        emojis: e
      });
    }
    Z(t);
  }(e || {}));
  return Q;
}
var ee = {
  categories: {
    activity: j("svg", {
      width: "19",
      height: "19",
      viewBox: "0 0 19 19",
      version: "1.1",
      children: [j("path", {
        d: "M 2.83936 4.21875C 3.89404 5.54712 4.55981 7.19824 4.66431 9L 5.66577 9C 5.55701 6.90271 4.76794 4.98523 3.51514 3.46411C 4.9408 2.05042 6.86462 1.13831 9 1.0144L 9.5 0C 4.2533 0 0 4.2533 0 9.5L 1.0144 9C 1.1189 7.19824 1.78467 5.54712 2.83936 4.21875Z"
      }), j("path", {
        d: "M 10 10L 13.5485 10L 14.5499 10L 14.5499 9L 13.5485 9L 10 9L 10 1.0144L 9.5 0L 9 1.0144L 9 9L 5.66577 9L 4.66431 9L 4.66431 10L 5.66577 10L 9 10L 9 17.9856L 9.5 19L 10 17.9856L 10 10Z"
      }), j("path", {
        d: "M 16.2678 4.35657C 17.2604 5.66052 17.8846 7.26001 17.9856 9L 19 9.5C 19 4.2533 14.7467 0 9.5 0L 10 1.0144C 12.1947 1.14172 14.1659 2.10168 15.6025 3.58313C 14.4058 5.08472 13.6544 6.95703 13.5485 9L 14.5499 9C 14.6509 7.26001 15.2753 5.66064 16.2678 4.35657Z"
      }), j("path", {
        d: "M 1.0144 10L 4.66431 10L 4.66431 9L 1.0144 9L 0 9.5L 1.0144 10Z"
      }), j("path", {
        d: "M 3.51514 15.5359C 4.76794 14.0148 5.55701 12.0973 5.66577 10L 4.66431 10C 4.55981 11.8018 3.89404 13.4529 2.83936 14.7812C 1.78467 13.4529 1.1189 11.8018 1.0144 10L 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9 17.9856C 6.86462 17.8617 4.9408 16.9496 3.51514 15.5359Z"
      }), j("path", {
        d: "M 15.6025 15.4169C 14.1659 16.8983 12.1947 17.8583 10 17.9856L 9.5 19C 14.7467 19 19 14.7467 19 9.5L 17.9856 10C 17.8846 11.74 17.2604 13.3395 16.2678 14.6434C 15.2753 13.3394 14.6509 11.74 14.5499 10L 13.5485 10C 13.6544 12.043 14.4058 13.9153 15.6025 15.4169Z"
      }), j("path", {
        d: "M 14.5499 10L 17.9856 10L 19 9.5L 17.9856 9L 14.5499 9L 14.5499 10Z"
      })]
    }),
    flags: j("svg", {
      width: "12",
      height: "18",
      viewBox: "0 -1 12 18",
      version: "1.1",
      children: [j("path", {
        d: "M 1 0L 0 0L 0 1L 0 8L 0 9L 0 17L 1 17L 1 9L 1 8L 1 1L 1 0Z"
      }), j("path", {
        d: "M 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0L 1 1L 11 1L 11 8L 1 8L 1 9Z"
      })]
    }),
    foods: j("svg", {
      width: "17",
      height: "19",
      viewBox: "0 0 17 19",
      version: "1.1",
      children: [j("path", {
        d: "M 12.1183 6.48747C 11.4751 6.23515 10.7572 6.10832 10 6.10832C 9.88623 6.10832 9.77332 6.11296 9.66138 6.12187C 9.07397 6.16911 8.5144 6.33805 8 6.60771L 8 1.6082L 7.5 8.12834L 8.07019 7.73258C 8.68677 7.29289 9.25342 7.09477 10 7.10832C 11.1823 7.10832 12.1726 7.46806 12.8571 8.10026C 13.5286 8.72062 14 9.68937 14 11.1083C 14 12.462 13.3236 13.9887 12.2791 15.1969C 11.2169 16.4257 9.96875 17.1083 9 17.1083C 8.54712 17.1144 8.26135 17.0506 7.92432 16.886L 7.5 16.6873L 7.5 17.7915C 7.93848 17.997 8.43762 18.1083 9 18.1083C 11.7615 18.1083 15 14.422 15 11.1083C 15 8.70329 13.8208 7.15556 12.1183 6.48747Z"
      }), j("path", {
        d: "M 6 18.1083C 6.56238 18.1083 7.06152 17.997 7.5 17.7915L 7.5 16.6873L 7.07568 16.886C 6.73865 17.0506 6.45288 17.1144 6 17.1083C 5.03125 17.1083 3.78308 16.4257 2.72095 15.1969C 1.67639 13.9887 1 12.462 1 11.1083C 1 9.68937 1.47144 8.72062 2.14294 8.10026C 2.82739 7.46806 3.81775 7.10832 5 7.10832C 5.74658 7.09477 6.31323 7.29289 6.92981 7.73258L 7.5 8.12834L 8 1.6082L 7 1.6082L 7 6.60758C 6.38757 6.28642 5.71118 6.10832 5 6.10832C 2.23853 6.10832 0 7.7946 0 11.1083C 0 14.422 3.23853 18.1083 6 18.1083Z"
      }), j("path", {
        d: "M 11.4785 0.600017C 9.95911 1.47721 9.13403 3.11283 9.20801 4.76139L 10.2225 4.18717C 10.3368 3.08537 10.9589 2.05473 11.9785 1.46611C 12.9932 0.88029 14.1703 0.864665 15.1501 1.31889L 16.1647 0.74467C 14.8052 -0.16158 12.9978 -0.27718 11.4785 0.600017Z"
      }), j("path", {
        d: "M 13.8942 4.90605C 15.4136 4.02885 16.2386 2.39323 16.1647 0.74467L 15.1501 1.31889C 15.0359 2.42082 14.4138 3.45133 13.3942 4.04008C 12.3795 4.6259 11.2024 4.64152 10.2225 4.18717L 9.20801 4.76139C 9.4104 4.8964 9.6228 5.01371 9.84253 5.11296C 9.89465 5.13652 9.94714 5.15898 10 5.18034C 10.7045 5.46611 11.4779 5.56913 12.244 5.46842C 12.8082 5.39433 13.3684 5.20964 13.8942 4.90605Z"
      })]
    }),
    frequent: j("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      version: "1.1",
      children: [j("path", {
        d: "M 9 4L 10 4L 10 10L 16 10L 16 11L 10 11L 9 11L 9 10L 9 4Z"
      }), j("path", {
        d: "M 10 20C 4.47717 20 0 15.5228 0 10C 0 4.47717 4.47717 0 10 0L 10 1C 5.02942 1 1 5.02942 1 10C 1 14.9706 5.02942 19 10 19L 10 20Z"
      }), j("path", {
        d: "M 20 10C 20 15.5228 15.5228 20 10 20L 10 19C 14.9706 19 19 14.9706 19 10C 19 5.02942 14.9706 1 10 1L 10 0C 15.5228 0 20 4.47717 20 10Z"
      })]
    }),
    nature: j("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      version: "1.1",
      children: [j("path", {
        d: "M 4.77954 12.2311L 0 17.0106L 0.707153 17.7177L 5.39307 13.0318L 4.77954 12.2311Z"
      }), j("path", {
        d: "M 6.16248 12.2624L 5.56335 11.4472L 4.77954 12.2311L 5.39307 13.0318L 6.16248 12.2624Z"
      }), j("path", {
        d: "M 5.39307 13.0318C 8.67566 14.4375 12.6239 13.8008 15.3032 11.1214C 18.0741 8.35044 18.6605 4.22227 17.0624 0.876806L 16.4442 1.98069C 17.4929 4.82078 16.8754 8.13498 14.5961 10.4143C 12.3169 12.6936 9.00244 13.3111 6.16248 12.2624L 5.39307 13.0318Z"
      }), j("path", {
        d: "M 15.6292 1.38144L 5.56335 11.4472L 6.16248 12.2624L 16.4442 1.98069L 15.6292 1.38144Z"
      }), j("path", {
        d: "M 7.52515 3.34299C 9.7168 1.15134 12.8655 0.496191 15.6292 1.38144L 17.0624 0.876806C 13.717 -0.721216 9.58887 -0.134912 6.81799 2.63596C 4.22388 5.23008 3.54431 9.01377 4.77954 12.2311L 5.56335 11.4472C 4.6781 8.68345 5.33337 5.53477 7.52515 3.34299Z"
      }), j("path", {
        d: "M 17.0624 0.876806L 15.6292 1.38144L 16.4442 1.98069L 17.0624 0.876806Z"
      })]
    }),
    objects: j("svg", {
      width: "18",
      height: "17",
      viewBox: "0 0 18 17",
      version: "1.1",
      children: j("path", {
        d: "M 15.6673 1.61096C 13.5194 -0.536987 10.037 -0.536987 7.88901 1.61096L 1.1716 8.32849C -0.390533 9.8905 -0.390533 12.4232 1.1716 13.9854C 2.73361 15.5472 5.26572 15.5481 6.82785 13.9858L 9.30331 11.5105L 9.65683 11.1569L 12.1318 8.68213C 13.108 7.70581 13.108 6.12292 12.1318 5.14661C 11.1555 4.17029 9.57248 4.17029 8.59616 5.14661L 3.29294 10.45L 3.99997 11.157L 9.30331 5.85376C 9.88913 5.26794 10.8388 5.26794 11.4247 5.85376C 12.0105 6.43945 12.0105 7.38928 11.4247 7.97498L 8.9498 10.4498L 8.59616 10.8035L 6.12082 13.2787C 4.94931 14.4502 3.05038 14.4498 1.87863 13.2782C 0.707123 12.1066 0.707123 10.2072 1.87863 9.03552L 8.59616 2.31812C 10.3535 0.560669 13.2029 0.560669 14.9602 2.31812C 16.7176 4.07544 16.7176 6.9248 14.9602 8.68213L 8.24277 15.3997L 8.9498 16.1067L 15.6673 9.38928C 17.8152 7.24133 17.8152 3.75891 15.6673 1.61096Z"
      })
    }),
    people: j("svg", {
      width: "19",
      height: "19",
      viewBox: "0 0 19 19",
      version: "1.1",
      children: [j("path", {
        d: "M 9.5 15C 7.08093 15 5.06323 13.2822 4.59998 11L 5.62598 11C 6.07007 12.7252 7.63623 14 9.5 14C 11.3638 14 12.9299 12.7252 13.374 11L 14.4 11C 13.9368 13.2822 11.9191 15 9.5 15Z"
      }), j("path", {
        d: "M 7 7.5C 7 8.05225 6.55225 8.5 6 8.5C 5.44775 8.5 5 8.05225 5 7.5C 5 6.94775 5.44775 6.5 6 6.5C 6.55225 6.5 7 6.94775 7 7.5Z"
      }), j("path", {
        d: "M 13 8.5C 13.5522 8.5 14 8.05225 14 7.5C 14 6.94775 13.5522 6.5 13 6.5C 12.4478 6.5 12 6.94775 12 7.5C 12 8.05225 12.4478 8.5 13 8.5Z"
      }), j("path", {
        d: "M 9.5 18C 4.80554 18 1 14.1945 1 9.5C 1 4.80554 4.80554 1 9.5 1L 9.5 0C 4.2533 0 0 4.2533 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9.5 18Z"
      }), j("path", {
        d: "M 18 9.5C 18 14.1945 14.1945 18 9.5 18L 9.5 19C 14.7467 19 19 14.7467 19 9.5C 19 4.2533 14.7467 0 9.5 0L 9.5 1C 14.1945 1 18 4.80554 18 9.5Z"
      })]
    }),
    places: j("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      version: "1.1",
      children: [j("path", {
        d: "M 11.9747 1.55383C 12.5566 1.17468 13.1697 0.994873 13.8641 1L 17.861 1L 17.861 0L 13.8641 0C 13.0276 0.00512695 12.1419 0.264648 11.4349 0.712036L 2.07887 6.71204C -1.70385 9.13794 0.0142913 15 4.50807 15L 9.39637 15L 10.411 15L 12.6918 15L 15.3109 15L 16.3256 15L 17.861 15L 17.861 14L 12.6918 14L 4.50807 14C 1.26454 14 -0.119864 10.0732 2.0492 8L 3.48231 7L 7.38062 4.5L 8.93995 3.5L 11.9747 1.55383Z"
      }), j("path", {
        d: "M 13.111 3.5L 8.93995 3.5L 7.38062 4.5L 13.111 4.5C 13.8013 4.5 14.361 5.05969 14.361 5.75C 14.361 6.44031 13.8013 7 13.111 7L 3.48231 7L 2.0492 8L 13.111 8C 14.3536 8 15.361 6.99268 15.361 5.75C 15.361 4.50732 14.3536 3.5 13.111 3.5Z"
      }), j("path", {
        d: "M 12.861 18C 14.6242 18 16.0829 16.6962 16.3256 15L 15.3109 15C 15.0794 16.1411 14.0704 17 12.861 17C 11.6515 17 10.6426 16.1411 10.411 15L 9.39637 15C 9.63905 16.6962 11.0978 18 12.861 18Z"
      })]
    }),
    symbols: j("svg", {
      width: "19",
      height: "16",
      viewBox: "0 0 19 16",
      version: "1.1",
      children: [j("path", {
        d: "M 1 5C 1 2.79091 2.79091 1 5 1C 6.54723 1 7.89015 1.8784 8.55585 3.16603L 9 4.02513L 9 1.99968C 8.08821 0.786061 6.63622 0 5 0C 2.23863 0 0 2.23863 0 5C 0 6.63571 0.786056 8.08793 1.99875 8.99938L 8.65451 15.3614L 9 15.6917L 9 14.3083L 2.66775 8.2555L 2.64519 8.23393L 2.62011 8.21534C 1.63619 7.48562 1 6.31713 1 5Z"
      }), j("path", {
        d: "M 15.3322 8.2555L 9 14.3083L 9 15.6917L 9.34549 15.3614L 16.0013 8.99938C 17.2139 8.08793 18 6.63571 18 5C 18 2.23863 15.7614 0 13 0C 11.3638 0 9.91179 0.786061 9 1.99968L 9 4.02513L 9.44415 3.16603C 10.1099 1.8784 11.4528 1 13 1C 15.2091 1 17 2.79091 17 5C 17 6.31713 16.3638 7.48562 15.3799 8.21534L 15.3548 8.23393L 15.3322 8.2555Z"
      })]
    })
  },
  search: {
    loupe: j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      children: j("path", {
        d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
      })
    }),
    delete: j("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      children: j("path", {
        d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
      })
    })
  }
};
function en(e) {
  let {
    id,
    skin,
    shortcodes,
    emoji,
    set,
    size
  } = e;
  if (!emoji && !id && shortcodes) {
    let e = shortcodes.match($$G1.SHORTCODES_REGEX);
    e && (n = e[1], e[2] && (i = e[2]));
  }
  if (emoji || (f = $$G1.get(id)), !emoji || "female_sign" === emoji.id || "male_sign" === emoji.id) return e.fallback;
  let o = emoji.skins[skin - 1] || emoji.skins[0];
  if ("native" === set) return j("span", {
    style: {
      fontSize: size || 22,
      fontFamily: "EmojiMart, Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji"
    },
    children: H.unifiedToNative(o.unified)
  });
  let u = W.getUrl(o);
  return j("img", {
    style: {
      height: e.size || "1em",
      width: "auto",
      display: "inline-block",
      position: "relative"
    },
    alt: o.$$native,
    src: u
  });
}
class ei extends window.HTMLElement {
  constructor(e = {}) {
    this.props = e;
    if (super(), e.parent || e.ref) {
      let n = e.parent || e.ref && e.ref.current;
      n && n.appendChild(this);
    }
  }
}
class et extends ei {
  constructor(e, {
    styles: n
  } = {}) {
    super(e);
    this.setShadow();
    this.injectStyles(n, e.styleNonce);
  }
  setShadow() {
    this.attachShadow({
      mode: "open"
    });
  }
  injectStyles(e, n) {
    if (!e) return;
    let i = document.createElement("style");
    void 0 !== n && (i.nonce = n);
    i.textContent = e;
    this.shadowRoot.insertBefore(i, this.shadowRoot.firstChild);
  }
}
"customElements" in window && !customElements.get("em-emoji-15") && customElements.define("em-emoji-15", class extends ei {
  async connectedCallback() {
    let e = await J();
    let n = this.getAttribute("native");
    let i = null;
    n && (i = $$G1.get(n));
    M(j(en, {
      ...{
        ...e,
        emoji: i,
        id: this.getAttribute("id"),
        set: this.getAttribute("set") || e.set,
        size: this.getAttribute("size"),
        fallback: this.getAttribute("fallback"),
        shortcodes: this.getAttribute("shortcodes")
      }
    }), this);
  }
});
var ef;
var er;
var ea;
var eo;
var eu = [];
var el = r.__b;
var ed = r.__r;
var es = r.diffed;
var ec = r.__c;
var eh = r.unmount;
function ep() {
  var e;
  for (eu.sort(function (e, n) {
    return e.__v.__b - n.__v.__b;
  }); e = eu.pop();) if (e.__P) try {
    e.__H.__h.forEach(em);
    e.__H.__h.forEach(e_);
    e.__H.__h = [];
  } catch (n) {
    e.__H.__h = [];
    r.__e(n, e.__v);
  }
}
r.__b = function (e) {
  ea = null;
  el && el(e);
};
r.__r = function (e) {
  ed && ed(e);
  var n = (ea = e.__c).__H;
  n && (n.__h.forEach(em), n.__h.forEach(e_), n.__h = []);
};
r.diffed = function (e) {
  es && es(e);
  var n = e.__c;
  n && n.__H && n.__H.__h.length && (1 !== eu.push(n) && eo === r.requestAnimationFrame || ((eo = r.requestAnimationFrame) || function (e) {
    var n;
    var i = function () {
      clearTimeout(t);
      eg && cancelAnimationFrame(n);
      setTimeout(e);
    };
    var t = setTimeout(i, 100);
    eg && (n = requestAnimationFrame(i));
  })(ep));
  ea = null;
};
r.__c = function (e, n) {
  n.some(function (e) {
    try {
      e.__h.forEach(em);
      e.__h = e.__h.filter(function (e) {
        return !e.__ || e_(e);
      });
    } catch (i) {
      n.some(function (e) {
        e.__h && (e.__h = []);
      });
      n = [];
      r.__e(i, e.__v);
    }
  });
  ec && ec(e, n);
};
r.unmount = function (e) {
  eh && eh(e);
  var n;
  var i = e.__c;
  i && i.__H && (i.__H.__.forEach(function (e) {
    try {
      em(e);
    } catch (e) {
      n = e;
    }
  }), n && r.__e(n, i.__v));
};
var eg = "function" == typeof requestAnimationFrame;
function em(e) {
  var n = ea;
  var i = e.__c;
  "function" == typeof i && (e.__c = void 0, i());
  ea = n;
}
function e_(e) {
  var n = ea;
  e.__c = e.__();
  ea = n;
}
function eb(e, n) {
  for (var i in e) if ("__source" !== i && !(i in n)) return !0;
  for (var t in n) if ("__source" !== t && e[t] !== n[t]) return !0;
  return !1;
}
function ey(e) {
  this.props = e;
}
(ey.prototype = new b()).isPureReactComponent = !0;
ey.prototype.shouldComponentUpdate = function (e, n) {
  return eb(this.props, e) || eb(this.state, n);
};
var ev = r.__b;
r.__b = function (e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null);
  ev && ev(e);
};
"undefined" != typeof Symbol && Symbol.$$for && Symbol.$$for("react.forward_ref");
var ew = r.__e;
r.__e = function (e, n, i) {
  if (e.then) {
    for (f = n, void 0; f = f.__;) {
      var t;
      var f;
      if ((t = f.__c) && t.__c) {
        null == n.__e && (n.__e = i.__e, n.__k = i.__k);
        return t.__c(e, n);
      }
    }
  }
  ew(e, n, i);
};
var ek = r.unmount;
function eS() {
  this.__u = 0;
  this.t = null;
  this.__b = null;
}
function eE(e) {
  var n = e.__.__c;
  return n && n.__e && n.__e(e);
}
function ex() {
  this.u = null;
  this.o = null;
}
r.unmount = function (e) {
  var n = e.__c;
  n && n.__R && n.__R();
  n && !0 === e.__h && (e.type = null);
  ek && ek(e);
};
(eS.prototype = new b()).__c = function (e, n) {
  var i = n.__c;
  var t = this;
  null == t.t && (t.t = []);
  t.t.push(i);
  var f = eE(t.__v);
  var r = !1;
  var a = function () {
    r || (r = !0, i.__R = null, f ? f(o) : o());
  };
  i.__R = a;
  var o = function () {
    if (! --t.__u) {
      if (t.state.__e) {
        var e;
        var n = t.state.__e;
        t.__v.__k[0] = function e(n, i, t) {
          n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
            return e(n, i, t);
          }), n.__c && n.__c.__P === i && (n.__e && t.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = t));
          return n;
        }(n, n.__c.__P, n.__c.__O);
      }
      for (t.setState({
        __e: t.__b = null
      }); e = t.t.pop();) e.forceUpdate();
    }
  };
  var u = !0 === n.__h;
  t.__u++ || u || t.setState({
    __e: t.__b = t.__v.__k[0]
  });
  e.then(a, a);
};
eS.prototype.componentWillUnmount = function () {
  this.t = [];
};
eS.prototype.render = function (e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var i = document.createElement("div");
      var t = this.__v.__k[0].__c;
      this.__v.__k[0] = function e(n, i, t) {
        n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (e) {
          "function" == typeof e.__c && e.__c();
        }), n.__c.__H = null), null != (n = function (e, n) {
          for (var i in n) e[i] = n[i];
          return e;
        }({}, n)).__c && (n.__c.__P === t && (n.__c.__P = i), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
          return e(n, i, t);
        }));
        return n;
      }(this.__b, i, t.__O = t.__P);
    }
    this.__b = null;
  }
  var f = n.__e && g(_, null, e.fallback);
  f && (f.__h = null);
  return [g(_, null, n.__e ? null : e.children), f];
};
var eC = function (e, n, i) {
  if (++i[1] === i[0] && e.o.$$delete(n), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (i = e.u; i;) {
    for (; i.length > 3;) i.pop()();
    if (i[1] < i[0]) break;
    e.u = i = i[2];
  }
};
(ex.prototype = new b()).__e = function (e) {
  var n = this;
  var i = eE(n.__v);
  var t = n.o.get(e);
  t[0]++;
  return function (f) {
    var r = function () {
      n.props.revealOrder ? (t.push(f), eC(n, e, t)) : f();
    };
    i ? i(r) : r();
  };
};
ex.prototype.render = function (e) {
  this.u = null;
  this.o = new Map();
  var n = S(e.children);
  e.revealOrder && "b" === e.revealOrder[0] && n.reverse();
  for (var i = n.length; i--;) this.o.set(n[i], this.u = [1, 0, this.u]);
  return e.children;
};
ex.prototype.componentDidUpdate = ex.prototype.componentDidMount = function () {
  var e = this;
  this.o.forEach(function (n, i) {
    eC(e, i, n);
  });
};
var eT = "undefined" != typeof Symbol && Symbol.$$for && Symbol.$$for("react.element") || 60103;
var eP = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var eL = "undefined" != typeof document;
b.prototype.isReactComponent = {};
["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
  Object.defineProperty(b.prototype, e, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + e];
    },
    set: function (n) {
      Object.defineProperty(this, e, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var eN = r.event;
function eO() {}
function eA() {
  return this.cancelBubble;
}
function eM() {
  return this.defaultPrevented;
}
r.event = function (e) {
  eN && (e = eN(e));
  e.persist = eO;
  e.isPropagationStopped = eA;
  e.isDefaultPrevented = eM;
  return e.nativeEvent = e;
};
var eR = {
  configurable: !0,
  get: function () {
    return this.$$class;
  }
};
var ej = r.vnode;
r.vnode = function (e) {
  var n;
  var i = e.type;
  var t = e.props;
  var f = t;
  if ("string" == typeof i) {
    var r = -1 === i.indexOf("-");
    for (var a in f = {}, t) {
      var o = t[a];
      eL && "children" === a && "noscript" === i || "value" === a && "defaultValue" in t && null == o || ("defaultValue" === a && "value" in t && null == t.value ? a = "value" : "download" === a && !0 === o ? o = "" : /ondoubleclick/i.test(a) ? a = "ondblclick" : /^onchange(textarea|input)/i.test(a + i) && (n = t.type, !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n)) ? a = "oninput" : /^onfocus$/i.test(a) ? a = "onfocusin" : /^onblur$/i.test(a) ? a = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(a) ? a = a.toLowerCase() : r && eP.test(a) ? a = a.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), f[a] = o);
    }
    "select" == i && f.multiple && Array.isArray(f.value) && (f.value = S(t.children).forEach(function (e) {
      e.props.selected = -1 != f.value.indexOf(e.props.value);
    }));
    "select" == i && null != f.defaultValue && (f.value = S(t.children).forEach(function (e) {
      e.props.selected = f.multiple ? -1 != f.defaultValue.indexOf(e.props.value) : f.defaultValue == e.props.value;
    }));
    e.props = f;
    t.$$class != t.className && (eR.enumerable = "className" in t, null != t.className && (f.$$class = t.className), Object.defineProperty(f, "className", eR));
  }
  e.$$typeof = eT;
  ej && ej(e);
};
var eI = r.__r;
r.__r = function (e) {
  eI && eI(e);
  e.__c;
};
class ez extends ey {
  constructor() {
    super();
    this.categories = K.categories.filter(e => !e.target);
    this.state = {
      categoryIndex: 0
    };
    this.tabRefs = this.categories.map(e => ({
      current: null
    }));
  }
  renderIcon(e) {
    let {
      icon
    } = e;
    if (icon) {
      if (icon.svg) return j("span", {
        class: "flex",
        dangerouslySetInnerHTML: {
          __html: icon.svg
        }
      });
      if (icon.src) return j("img", {
        src: icon.src
      });
    }
    return ee.categories[e.id];
  }
  setCategoryIndex = e => {
    this.props.onCategoryChange({
      category: this.categories[e],
      i: e
    });
    this.setState({
      categoryIndex: e
    });
    this.tabRefs[e].current?.focus();
  };
  handleKeyDown = e => {
    var n = null;
    switch (e.key) {
      case "ArrowLeft":
        e.stopImmediatePropagation();
        e.preventDefault();
        this.state.categoryIndex > 0 && (n = this.state.categoryIndex - 1, this.setCategoryIndex(n));
        break;
      case "ArrowRight":
        e.stopImmediatePropagation();
        e.preventDefault();
        this.state.categoryIndex < this.categories.length - 1 && (n = this.state.categoryIndex + 1, this.setCategoryIndex(n));
    }
  };
  render() {
    return j("nav", {
      id: "nav",
      class: "padding",
      "data-position": this.props.position,
      children: j("div", {
        class: "flex relative",
        role: "tablist",
        onKeyDown: this.handleKeyDown,
        children: [this.categories.map((e, n) => {
          let i = e.name || V.categories[e.id];
          return j("button", {
            "aria-label": i,
            "aria-selected": !this.props.showTabBar && n == this.state.categoryIndex || void 0,
            title: i,
            type: "button",
            class: "flex flex-grow flex-center",
            onClick: () => {
              this.setCategoryIndex(n);
            },
            tabIndex: this.state.categoryIndex === n ? 0 : -1,
            role: "tab",
            ref: this.tabRefs[n],
            children: this.renderIcon(e)
          });
        }), j("div", {
          class: "bar",
          style: {
            width: 100 / this.categories.length + "%",
            opacity: this.props.showTabBar ? 0 : 1,
            transform: `translateX(${100 * this.state.categoryIndex}%)`
          }
        })]
      })
    });
  }
}
class eB extends ey {
  shouldComponentUpdate(e) {
    for (let n in e) if ("children" != n && e[n] != this.props[n]) return !0;
    return !1;
  }
  render() {
    return this.props.children;
  }
}
class eH extends b {
  constructor(e) {
    super();
    this.state = {
      pos: [-1, -1],
      skin: $$B2.get("skin") || e.skin,
      theme: this.initTheme(e.theme),
      visibleRows: {
        0: !0
      },
      rememberedEmojiPosition: [0, 0]
    };
  }
  componentWillMount() {
    let {
      categories
    } = K;
    this.refs = {
      categories: new Map(),
      menu: {
        current: null
      },
      navigation: {
        current: null
      },
      scroll: {
        current: null
      },
      search: {
        current: null
      },
      searchInput: {
        current: null
      },
      skinToneButton: {
        current: null
      },
      skinToneRadio: {
        current: null
      },
      currentTargetEmoji: {
        current: null
      }
    };
    this.grid = [];
    this.grid.setsize = 0;
    let n = (e, n) => {
      let i = [];
      i.__categoryId = n.id;
      i.__index = e.length;
      this.grid.push(i);
      let t = this.grid.length - 1;
      let f = t % 10 ? {} : {
        current: null
      };
      f.index = t;
      f.posinset = this.grid.setsize + 1;
      e.push(f);
      return i;
    };
    let i = 0;
    for (let t of categories) {
      let e = [];
      let f = n(e, t);
      for (let i of t.emojis) {
        f.length == this.props.perLine && (f = n(e, t));
        this.grid.setsize += 1;
        f.push(i);
      }
      this.refs.categories.set(t.id, {
        root: {
          current: null
        },
        firstEmojiPosition: [i, 0],
        rows: e
      });
      i += e.length;
    }
  }
  componentDidMount() {
    this.observeCategories();
    this.observeRows();
    this.shadowRoot = this.base.parentNode;
    this.props.autoFocus && this.refs.searchInput.current && this.refs.searchInput.current.focus();
  }
  initTheme(e) {
    if ("auto" != e) return e;
    let n = matchMedia("(prefers-color-scheme: dark)");
    return n.media.match(/^not/) ? "light" : (n.addListener(() => {
      this.setState({
        theme: n.matches ? "dark" : "light"
      });
    }), n.matches ? "dark" : "light");
  }
  handleBaseClick = e => {
    this.state.showSkins && (e.target.closest(".menu") || (e.preventDefault(), e.stopImmediatePropagation(), this.closeSkins()));
  };
  handleBaseKeydown = e => {
    this.state.showSkins && "Escape" == e.key && (e.preventDefault(), e.stopImmediatePropagation(), this.closeSkins(), this.refs.skinToneButton.current.focus());
  };
  getEmojiByPos([e, n]) {
    let i = this.state.searchResults || this.grid;
    let t = i[e] && i[e][n];
    if (t) return $$G1.get(t);
  }
  observeCategories() {
    let e = this.refs.navigation.current;
    if (!e) return;
    let n = new Map();
    let i = (n, i) => {
      n != e.state.categoryId && e.setState({
        categoryId: n,
        categoryIndex: i
      });
    };
    let t = new IntersectionObserver(e => {
      for (let i of e) {
        let e = i.target.dataset.id;
        n.set(e, i.intersectionRatio);
      }
      let t = [...n];
      let f = t[t.length - 1];
      if (1 == f[1]) return i(f[0], t.length - 1);
      for (let e = 0; e < t.length; e += 1) {
        let [n, f] = t[e];
        if (f) {
          i(n, e);
          break;
        }
      }
    }, {
      root: this.refs.scroll.current,
      threshold: [0, 1]
    });
    for (let {
      root
    } of this.refs.categories.values()) t.observe(root.current);
  }
  observeRows() {
    let e = {
      ...this.state.visibleRows
    };
    let n = new IntersectionObserver(n => {
      for (let i of n) {
        let n = parseInt(i.target.dataset.index);
        i.isIntersecting ? e[n] = !0 : delete e[n];
      }
      this.setState({
        visibleRows: e
      });
    }, {
      root: this.refs.scroll.current,
      rootMargin: `${15 * this.props.emojiButtonSize}px 0px ${10 * this.props.emojiButtonSize}px`
    });
    for (let {
      rows
    } of this.refs.categories.values()) for (let i of rows) i.current && n.observe(i.current);
  }
  preventDefault(e) {
    e.preventDefault();
  }
  handleSearchClick = () => {
    this.getEmojiByPos(this.state.pos) && this.setState({
      pos: [-1, -1],
      rememberedEmojiPosition: [0, 0]
    });
  };
  handleSearchInput = async () => {
    let e = this.refs.searchInput.current;
    if (!e) return;
    let {
      value
    } = e;
    let i = await $$G1.search(value);
    let t = () => {
      this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0);
    };
    if (!i) return void this.setState({
      searchResults: i,
      pos: [-1, -1],
      rememberedEmojiPosition: [0, 0]
    }, t);
    let f = e.selectionStart == e.value.length ? [0, 0] : [-1, -1];
    let r = [];
    r.setsize = i.length;
    let a = null;
    for (let e of i) {
      r.length && a.length != this.props.perLine || ((a = []).__categoryId = "search", a.__index = r.length, r.push(a));
      a.push(e);
    }
    this.ignoreMouse();
    this.setState({
      searchResults: r,
      pos: f,
      rememberedEmojiPosition: [0, 0]
    }, t);
  };
  handleKeyDown = e => {
    e.stopImmediatePropagation();
    "Escape" === e.key && this.props.onEscapeKeydown && this.props.onEscapeKeydown();
  };
  handleSearchKeyDown = e => {
    if (e.stopImmediatePropagation(), "Enter" === e.key) {
      let n = this.refs.searchInput.current?.value;
      e.preventDefault();
      n && this.handleEmojiClick({
        pos: [0, 0]
      });
    }
  };
  handleGridKeyDown = e => {
    let n = e.currentTarget;
    switch (e.stopImmediatePropagation(), e.key) {
      case "ArrowLeft":
        this.navigate({
          e: e,
          input: n,
          left: !0
        });
        break;
      case "ArrowRight":
        this.navigate({
          e: e,
          input: n,
          right: !0
        });
        break;
      case "ArrowUp":
        this.navigate({
          e: e,
          input: n,
          up: !0
        });
        break;
      case "ArrowDown":
        this.navigate({
          e: e,
          input: n,
          down: !0
        });
        break;
      case "Enter":
        e.preventDefault();
        this.handleEmojiClick({
          pos: this.state.pos
        });
        break;
      case "Escape":
        e.preventDefault();
        this.state.searchResults ? this.clearSearch() : this.props.onEscapeKeydown ? this.props.onEscapeKeydown() : this.unfocusSearch();
    }
  };
  clearSearch = () => {
    let e = this.refs.searchInput.current;
    e && (e.value = "", e.focus(), this.handleSearchInput());
  };
  unfocusSearch() {
    let e = this.refs.searchInput.current;
    e && e.blur();
  }
  navigate({
    e: e,
    input: n,
    left: i,
    right: t,
    up: f,
    down: r
  }) {
    let a = this.state.searchResults || this.grid;
    if (!a.length) return;
    let [o, u] = this.state.pos;
    let l = (() => {
      if (0 == o && 0 == u && !e.repeat && (i || f)) return null;
      if (-1 == o) return !e.repeat && (t || r) && n.selectionStart == n.value.length ? [0, 0] : null;
      if (i || t) {
        let e = a[o];
        let n = i ? -1 : 1;
        if (!e[u += n]) {
          if (o += n, !(e = a[o])) {
            o = i ? 0 : a.length - 1;
            u = i ? 0 : a[o].length - 1;
            return [o, u];
          }
          u = i ? e.length - 1 : 0;
        }
        return [o, u];
      }
      if (f || r) {
        let e = a[o += f ? -1 : 1];
        e ? e[u] || (u = e.length - 1) : (o = f ? 0 : a.length - 1, u = f ? 0 : a[o].length - 1);
        return [o, u];
      }
    })();
    l ? (e.preventDefault(), this.setState({
      pos: l,
      rememberedEmojiPosition: l,
      keyboard: !0
    }, () => {
      this.scrollTo({
        row: l[0]
      });
      this.refs.currentTargetEmoji.current?.focus();
    })) : this.state.pos[0] > -1 && this.setState({
      pos: [-1, -1],
      rememberedEmojiPosition: [0, 0]
    });
  }
  scrollTo({
    categoryId: e,
    row: n
  }) {
    let i = this.state.searchResults || this.grid;
    if (!i.length) return;
    let t = this.refs.scroll.current;
    let f = t.getBoundingClientRect();
    let r = 0;
    if (n >= 0 && (e = i[n].__categoryId), e && (r = (this.refs[e] || this.refs.categories.get(e).root).current.getBoundingClientRect().top - (f.top - t.scrollTop) + 1), n >= 0) {
      if (n) {
        let e = r + i[n].__index * this.props.emojiButtonSize;
        let a = e + this.props.emojiButtonSize + .88 * this.props.emojiButtonSize;
        if (e < t.scrollTop) r = e;else {
          if (!(a > t.scrollTop + f.height)) return;
          r = a - f.height;
        }
      } else r = 0;
    }
    this.ignoreMouse();
    t.scrollTop = r;
  }
  ignoreMouse() {
    this.mouseIsIgnored = !0;
    clearTimeout(this.ignoreMouseTimer);
    this.ignoreMouseTimer = setTimeout(() => {
      delete this.mouseIsIgnored;
    }, 100);
  }
  handleCategorySelect = ({
    category: e,
    i: n
  }) => {
    this.scrollTo(0 == n ? {
      row: -1
    } : {
      categoryId: e.id
    });
    let i = this.refs.categories.get(e.id).firstEmojiPosition;
    this.setState({
      rememberedEmojiPosition: i
    });
  };
  handleEmojiOver(e) {
    this.mouseIsIgnored || this.state.showSkins || this.setState({
      pos: e || [-1, -1],
      keyboard: !1,
      rememberedEmojiPosition: e || [0, 0]
    });
  }
  handleEmojiClick({
    emoji: e,
    pos: n
  }) {
    if (this.props.onEmojiSelect && (!e && n && (e = this.getEmojiByPos(n)), e)) {
      let n = e.skins[this.state.skin - 1] || e.skins[0];
      let i = {
        id: e.id,
        unified: n.unified,
        keywords: e?.keywords || [],
        shortcodes: n.shortcodes || e.shortcodes
      };
      n.src && (i.src = n.src);
      e.aliases && e.aliases.length && (i.aliases = e.aliases);
      this.props.maxFrequentRows && F.add(i, this.props);
      this.props.onEmojiSelect(i);
    }
  }
  openSkins = e => {
    let {
      currentTarget
    } = e;
    let i = currentTarget.getBoundingClientRect();
    this.setState({
      showSkins: i
    }, async () => {
      await I(2);
      let e = this.refs.menu.current;
      e && (e.classList.remove("hidden"), this.refs.skinToneRadio.current.focus(), this.base.addEventListener("click", this.handleBaseClick, !0), this.base.addEventListener("keydown", this.handleBaseKeydown, !0));
    });
  };
  closeSkins() {
    this.state.showSkins && (this.setState({
      showSkins: null,
      tempSkin: null
    }), this.base.removeEventListener("click", this.handleBaseClick), this.base.removeEventListener("keydown", this.handleBaseKeydown));
  }
  handleSkinMouseOver(e) {
    this.setState({
      tempSkin: e
    });
  }
  handleSkinClick(e) {
    this.ignoreMouse();
    this.closeSkins();
    this.setState({
      skin: e,
      tempSkin: null
    });
    $$B2.set("skin", e);
  }
  renderNav() {
    return j(ez, {
      ref: this.refs.navigation,
      theme: this.state.theme,
      showTabBar: !!this.state.searchResults,
      position: this.props.navPosition,
      onCategoryChange: this.handleCategorySelect
    });
  }
  renderPreview() {
    let e = this.getEmojiByPos(this.state.pos);
    let n = this.state.searchResults && !this.state.searchResults.length;
    return j("div", {
      id: "preview",
      class: "flex flex-middle",
      "data-position": this.props.previewPosition,
      children: [j("div", {
        class: "flex flex-middle flex-grow",
        style: {
          padding: "4px 0px"
        },
        children: [j("div", {
          class: "flex flex-auto flex-middle flex-center",
          style: {
            height: 30,
            width: 30,
            fontSize: 30
          },
          children: j(en, {
            emoji: e,
            id: n ? this.props.noResultsEmoji || "cry" : this.props.previewEmoji || ("top" == this.props.previewPosition ? "point_down" : "point_up"),
            set: this.props.set,
            size: 22,
            skin: this.state.tempSkin || this.state.skin,
            spritesheet: !0
          })
        }), j("div", e ? {
          class: "ellipsis color-c",
          children: e.skins[0].shortcodes
        } : n ? {
          class: "ellipsis color-c",
          "aria-live": "polite",
          children: V.search_no_results
        } : {
          class: "color-c",
          children: V.pick
        })]
      }), this.renderSkinToneButton()]
    });
  }
  renderEmojiButton(e, {
    pos: n,
    posinset: i,
    grid: t
  }) {
    var f;
    let r = this.props.emojiButtonSize;
    let a = this.state.tempSkin || this.state.skin;
    let o = Array.isArray(f = this.state.pos) && Array.isArray(n) && f.length === n.length && f.every((e, i) => e == n[i]);
    let u = n.concat(e.id).join("");
    let l = n[0] === this.state.rememberedEmojiPosition[0] && n[1] === this.state.rememberedEmojiPosition[1];
    return j(eB, {
      selected: o,
      skin: a,
      size: r,
      isCurrentEmojiTarget: l,
      children: j("button", {
        "aria-label": e.id,
        "aria-selected": o || void 0,
        "aria-posinset": i,
        "aria-setsize": t.setsize,
        "data-keyboard": this.state.keyboard,
        title: "none" == this.props.previewPosition ? e.id : void 0,
        type: "button",
        class: "flex flex-center flex-middle",
        tabIndex: l ? 0 : -1,
        ref: l ? this.refs.currentTargetEmoji : void 0,
        onFocus: () => {
          this.setState({
            pos: n
          });
        },
        onClick: () => this.handleEmojiClick({
          emoji: e
        }),
        onMouseEnter: () => this.handleEmojiOver(n),
        onMouseLeave: () => this.handleEmojiOver(),
        style: {
          width: this.props.emojiButtonSize,
          height: this.props.emojiButtonSize,
          fontSize: this.props.emojiSize,
          lineHeight: 0,
          fontFamily: "EmojiMart, Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, Android Emoji"
        },
        children: [j("div", {
          "aria-hidden": "true",
          class: "background",
          style: {
            borderRadius: this.props.emojiButtonRadius,
            backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(i - 1) % this.props.emojiButtonColors.length] : void 0
          }
        }), j(en, {
          emoji: e,
          set: this.props.set,
          size: this.props.emojiSize,
          skin: a,
          spritesheet: !0
        })]
      })
    }, u);
  }
  renderSearch() {
    return j("div", {
      children: [j("div", {
        class: "spacer"
      }), j("div", {
        class: "flex flex-middle",
        children: [j("div", {
          class: "search relative flex-grow",
          children: [j("input", {
            type: "search",
            autoFocus: this.props.autoFocus,
            ref: this.refs.searchInput,
            placeholder: V.search,
            onClick: this.handleSearchClick,
            onInput: this.handleSearchInput,
            onKeyDown: this.handleSearchKeyDown,
            "aria-description": V.search_will_update,
            "aria-label": V.search_for_emojis
          }), j("span", {
            class: "icon loupe flex",
            "aria-hidden": !0,
            children: ee.search.loupe
          }), this.state.searchResults && j("button", {
            title: "Clear",
            "aria-label": "Clear",
            type: "button",
            class: "icon delete flex",
            onClick: this.clearSearch,
            onMouseDown: this.preventDefault,
            children: ee.search.$$delete
          })]
        }), "none" == this.props.previewPosition && this.renderSkinToneButton()]
      })]
    });
  }
  renderSearchResults() {
    let {
      searchResults
    } = this.state;
    return searchResults ? j("div", {
      class: "category",
      ref: this.refs.search,
      children: [j("div", {
        class: "sticky padding-small",
        children: V.categories.search
      }), j("div", {
        onKeyDown: this.handleGridKeyDown,
        children: searchResults.map((n, i) => j("div", {
          class: "flex",
          children: n.map((n, t) => this.renderEmojiButton(n, {
            pos: [i, t],
            posinset: i * this.props.perLine + t + 1,
            grid: searchResults
          }))
        }))
      })]
    }) : null;
  }
  renderCategories() {
    let {
      categories
    } = K;
    let n = !!this.state.searchResults;
    return j("div", {
      style: {
        visibility: n ? "hidden" : void 0,
        display: n ? "none" : void 0
      },
      onKeyDown: this.handleGridKeyDown,
      children: categories.map(e => {
        let {
          root,
          rows
        } = this.refs.categories.get(e.id);
        return j("div", {
          "data-id": e.target ? e.target.id : e.id,
          class: "category",
          ref: root,
          role: "tabpanel",
          children: [j("div", {
            class: "sticky padding-small",
            children: j("h2", {
              children: [" ", e.name || V.categories[e.id], " "]
            })
          }), j("div", {
            class: "relative",
            style: {
              height: rows.length * this.props.emojiButtonSize
            },
            role: "list",
            "aria-label": e.name || V.categories[e.id],
            children: rows.map((n, i) => {
              let t = n.index - n.index % 10;
              let f = this.state.visibleRows[t];
              let r = "current" in n ? n : void 0;
              if (!f && !r) return null;
              let a = i * this.props.perLine;
              let o = a + this.props.perLine;
              let u = e.emojis.slice(a, o);
              return j("div", {
                "data-index": n.index,
                ref: r,
                class: "flex row",
                style: {
                  top: i * this.props.emojiButtonSize
                },
                children: f && u.map((e, i) => {
                  let t = $$G1.get(e);
                  return this.renderEmojiButton(t, {
                    pos: [n.index, i],
                    posinset: n.posinset + i,
                    grid: this.grid
                  });
                })
              }, n.index);
            })
          })]
        });
      })
    });
  }
  renderSkinToneButton() {
    return j("div", {
      class: "flex flex-auto flex-center flex-middle",
      style: {
        position: "relative",
        width: this.props.emojiButtonSize,
        height: this.props.emojiButtonSize
      },
      children: j("button", {
        type: "button",
        ref: this.refs.skinToneButton,
        class: "skin-tone-button flex flex-auto flex-center flex-middle",
        "aria-selected": this.state.showSkins ? "" : void 0,
        "aria-label": `${V.skins.choose}, ${V.skins[this.state.skin]}`,
        title: V.skins.choose,
        onClick: this.openSkins,
        style: {
          width: this.props.emojiSize,
          height: this.props.emojiSize
        },
        "aria-controls": "skin-tone-selector",
        "aria-haspopup": !0,
        "aria-expanded": this.state.showSkins,
        children: j("span", {
          class: `skin-tone skin-tone-${this.state.skin}`
        })
      })
    });
  }
  renderSkins() {
    let e = this.refs.skinToneButton.current.getBoundingClientRect();
    let n = this.base.getBoundingClientRect();
    let i = {
      right: n.right - e.right - 3
    };
    "bottom" == this.props.previewPosition ? i.bottom = n.bottom - e.top + 4 : (i.top = e.bottom - n.top + 3, i.bottom = "auto");
    return j("div", {
      ref: this.refs.menu,
      role: "radiogroup",
      id: "skin-tone-selector",
      "aria-label": V.skins.choose,
      class: "menu hidden",
      "data-position": i.top ? "top" : "bottom",
      style: i,
      children: [...Array(6).keys()].map(e => {
        let n = e + 1;
        let i = this.state.skin == n;
        return j("div", {
          children: [j("input", {
            type: "radio",
            name: "skin-tone",
            value: n,
            "aria-label": V.skins[n],
            ref: i ? this.refs.skinToneRadio : null,
            defaultChecked: i,
            onChange: () => this.handleSkinMouseOver(n),
            onKeyDown: e => {
              "Enter" != e.code && "Space" != e.code && "Tab" != e.code || (e.preventDefault(), this.handleSkinClick(n), this.refs.skinToneButton.current.focus());
            }
          }), j("button", {
            "aria-hidden": "true",
            tabindex: "-1",
            onClick: () => this.handleSkinClick(n),
            onMouseEnter: () => this.handleSkinMouseOver(n),
            onMouseLeave: () => this.handleSkinMouseOver(),
            class: "option flex flex-grow flex-middle",
            children: [j("span", {
              class: `skin-tone skin-tone-${n}`
            }), j("span", {
              class: "margin-small-lr",
              children: V.skins[n]
            })]
          })]
        });
      })
    });
  }
  render() {
    return j("section", {
      id: "root",
      class: "flex flex-column",
      style: {
        width: this.props.perLine * this.props.emojiButtonSize + 28
      },
      "data-emoji-set": this.props.set,
      "data-theme": this.state.theme,
      "data-menu": this.state.showSkins ? "" : void 0,
      onKeyDown: this.handleKeyDown,
      children: ["top" == this.props.previewPosition && this.renderPreview(), "top" == this.props.navPosition && this.renderNav(), this.props.stickySearch && j("div", {
        class: "padding-lr",
        children: this.renderSearch()
      }), j("div", {
        ref: this.refs.scroll,
        class: "scroll flex-grow padding-lr",
        children: j("div", {
          style: {
            width: this.props.perLine * this.props.emojiButtonSize
          },
          children: [!this.props.stickySearch && this.renderSearch(), this.renderSearchResults(), this.renderCategories(), j("div", {
            class: "spacer"
          })]
        })
      }), "bottom" == this.props.navPosition && this.renderNav(), "bottom" == this.props.previewPosition && this.renderPreview(), this.state.showSkins && this.renderSkins()]
    });
  }
}
export class $$eD0 extends et {
  constructor(e) {
    super(e, {
      styles: t(eU)
    });
  }
  async connectedCallback() {
    let e = await J(this.props);
    let {
      onEmojiSelect,
      onClickOutside,
      onEscapeKeydown
    } = this.props;
    M(j(eH, {
      ...{
        ...e,
        element: this,
        onEmojiSelect,
        onClickOutside,
        onEscapeKeydown
      }
    }), this.shadowRoot);
  }
}
"customElements" in window && !customElements.get("em-emoji-picker-15") && customElements.define("em-emoji-picker-15", $$eD0);
var eU = {};
eU = ':host{width:min-content;height:405px;min-height:230px;box-shadow:var(--shadow);--category-icon-size:18px;--font-family-fallback:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif;--font-family:var(--font-family-ui,--font-family-fallback);--font-size:13px;--shadow-color:0deg 0% 0%;--shadow:.3px .5px 2.7px hsl(var(--shadow-color)/.14),.4px .8px 1px -3.2px hsl(var(--shadow-color)/.14),1px 2px 2.5px -4.5px hsl(var(--shadow-color)/.14);display:flex}[data-theme=light]{--em-color:var(--color-text,#222427);--em-color-secondary:var(--color-text-secondary,#323437);--em-color-tertiary:var(--color-text-tertiary,#505255);--em-accent:var(--color-border-selected,#2266ed);--em-background:var(--color-bg,#fff);--em-input:var(--color-bg-secondary,#fff);--em-color-border:var(--color-border,#0000000d);--em-color-border-over:var(--color-border-over,#0000001a)}[data-theme=dark]{--em-color:var(--color-text,#dededd);--em-color-secondary:var(--color-text-secondary,#b6b6b5);--em-color-tertiary:var(--color-text-tertiary,#7a7a79);--em-accent:var(--color-border-selected,#3a82f7);--em-background:var(--color-bg,#2c2c2c);--em-input:var(--color-bg-secondary,#000);--em-color-border:var(--color-border,#ffffff1a);--em-color-border-over:var(--color-border-over,#fff3)}#root{--color-a:var(--em-color);--color-b:var(--em-color-secondary);--color-c:var(--em-color-tertiary);--padding-emoji-picker:12px;--padding-small:calc(var(--padding-emoji-picker)/2);--sidebar-width:16px;--duration:225ms;--duration-fast:125ms;--duration-instant:50ms;--easing:cubic-bezier(.4,0,.2,1);width:100%;text-align:left;background-color:var(--em-background);position:relative}@media (prefers-reduced-motion){#root{--duration:0;--duration-fast:0;--duration-instant:0}}#root[data-menu] button{cursor:auto}#root[data-menu] .menu button{cursor:pointer}:host,#root,input,button{color:var(--em-color);font-family:var(--font-family);font-size:var(--font-size);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:normal}*,:before,:after{box-sizing:border-box;min-width:0;margin:0;padding:0}.scroll{padding-right:0;overflow-x:hidden;overflow-y:auto}.scroll::-webkit-scrollbar{width:var(--sidebar-width);height:var(--sidebar-width)}.scroll::-webkit-scrollbar-track{border:0}.scroll::-webkit-scrollbar-button{width:0;height:0;display:none}.scroll::-webkit-scrollbar-corner{background-color:#0000}.scroll::-webkit-scrollbar-thumb{min-height:20%;min-height:65px;border:4px solid var(--em-background);border-radius:8px}.scroll::-webkit-scrollbar-thumb:hover{background-color:var(--em-color-border-over)!important}.scroll:hover::-webkit-scrollbar-thumb{background-color:var(--em-color-border)}.relative{position:relative}.flex{display:flex}.flex-auto{flex:none}.flex-center{justify-content:center}.flex-column{flex-direction:column}.flex-grow{flex:auto}.flex-middle{align-items:center}.flex-wrap{flex-wrap:wrap}.padding{padding:var(--padding-emoji-picker)}.padding-t{padding-top:var(--padding-emoji-picker)}.padding-lr{padding-left:var(--padding-emoji-picker);padding-right:var(--padding-emoji-picker)}.padding-r{padding-right:var(--padding-emoji-picker)}.padding-small{padding:var(--padding-small)}.padding-small-b{padding-bottom:var(--padding-small)}.padding-small-lr{padding-left:var(--padding-small);padding-right:var(--padding-small)}.margin{margin:var(--padding-emoji-picker)}.margin-l{margin-left:var(--padding-emoji-picker)}.margin-small-l{margin-left:var(--padding-small)}.margin-small-lr{margin-left:var(--padding-small);margin-right:var(--padding-small)}.color-a{color:var(--color-a)}.color-b{color:var(--color-b)}.color-c{color:var(--color-c)}.ellipsis{white-space:nowrap;max-width:100%;width:auto;text-overflow:ellipsis;overflow:hidden}a{cursor:pointer;color:var(--em-accent)}a:hover{text-decoration:underline}.spacer{height:10px}.sticky{z-index:1;background-color:var(--em-background);font-weight:500;position:sticky;top:-1px}h2{font-size:var(--font-size)}.search{z-index:2;position:relative}.search input,.search button{font-size:calc(var(--font-size) - 1px)}.search input[type=search]{width:100%;background-color:var(--em-input);border:1px solid #0000;border-radius:10px;outline:0;padding:10px 2em 10px 2.2em;display:block}.search input[type=search]::placeholder{color:inherit;opacity:.6}.search input[type=search],.search input[type=search]::-webkit-search-decoration,.search input[type=search]::-webkit-search-cancel-button,.search input[type=search]::-webkit-search-results-button,.search input[type=search]::-webkit-search-results-decoration{appearance:none}.search input[type=search]:focus{border-color:var(--em-accent);box-shadow:inset 0 0 0 1px var(--em-accent)}.search .icon{z-index:1;color:var(--em-color);position:absolute;top:50%;transform:translateY(-50%)}.search .loupe{pointer-events:none;left:.7em}.search .delete{border:1px solid #0000;padding:4px;right:.6em}.search .delete:focus-visible{border-color:var(--em-accent);box-shadow:inset 0 0 0 1px var(--em-accent);outline:none}svg{fill:currentColor;width:1em;height:1em}button{appearance:none;cursor:pointer;color:currentColor;background-color:#0000;border:0}#nav{z-index:2;padding-top:8px;padding-bottom:8px;padding-right:var(--sidebar-width);position:relative}#nav button{color:var(--color-b);border:1px solid #0000;padding-top:4px;padding-bottom:4px}#nav button:hover{color:var(--color-a)}#nav button:focus-visible{border-color:var(--em-accent);box-shadow:inset 0 0 0 1px var(--em-accent);outline:none}#nav svg,#nav img{width:var(--category-icon-size);height:var(--category-icon-size)}#nav .bar{width:100%;height:2px;background-color:var(--em-accent);position:absolute;bottom:-11px;left:0}#nav button[aria-selected]{color:var(--em-accent)}#preview{z-index:2;padding:0px var(--padding-emoji-picker);padding-right:var(--sidebar-width);position:relative}#nav:before,#preview:before{content:"";height:2px;position:absolute;left:0;right:0}#nav[data-position=top]:before,#preview[data-position=top]:before{background:linear-gradient(to bottom,var(--em-color-border),transparent);top:100%}#nav[data-position=bottom]:before,#preview[data-position=bottom]:before{background:linear-gradient(to top,var(--em-color-border),transparent);bottom:100%}.category button{font-family:var(--font-family);position:relative}.category button>*{position:relative}.category button .background{opacity:0;background-color:var(--em-color-border);position:absolute;inset:0}.category button[aria-selected] .background{opacity:1}.row{width:100%;position:absolute;top:0;left:0}.skin-tone-button{border:1px solid #0000;border-radius:100%}.skin-tone-button:hover{border-color:var(--em-color-border)}.skin-tone-button:active .skin-tone{transform:scale(.85)!important}.skin-tone-button:focus-visible{border-color:var(--em-accent);box-shadow:0 0 0 1px var(--em-accent);outline:none}.skin-tone-button[aria-selected]{background-color:var(--em-color-border);border-top-color:#0000000d;border-bottom-color:#0000;border-left-width:0;border-right-width:0}.skin-tone-button[aria-selected] .skin-tone{transform:scale(.9)}.menu{z-index:2;white-space:nowrap;border:1px solid var(--em-color-border);background-color:var(--em-background);backdrop-filter:blur(4px);border-radius:10px;padding:4px;position:absolute;box-shadow:1px 1px 5px #0000000d}.menu.hidden{opacity:0}.menu[data-position=bottom]{transform-origin:100% 100%}.menu[data-position=bottom].hidden{transform:scale(.9)rotate(-3deg)translateY(5%)}.menu[data-position=top]{transform-origin:100% 0}.menu[data-position=top].hidden{transform:scale(.9)rotate(3deg)translateY(-5%)}.menu input[type=radio]{clip:rect(0 0 0 0);width:1px;height:1px;margin:0;padding:0;position:absolute;overflow:hidden}.menu input[type=radio]:checked+.option{border-color:var(--em-accent);box-shadow:inset 0 0 0 1px var(--em-accent)}.option{width:100%;border:1px solid #0000;border-radius:6px;padding:4px 6px}.option:hover{color:#fff;background-color:var(--em-accent)}.skin-tone{width:16px;height:16px;border-radius:100%;display:inline-block;position:relative;overflow:hidden}.skin-tone:after{content:"";mix-blend-mode:overlay;background:linear-gradient(#fff3,#0000);border:1px solid #000c;border-radius:100%;position:absolute;inset:0;box-shadow:inset 0 -2px 3px #000,inset 0 1px 2px #fff}.skin-tone-1{background-color:#ffc93a}.skin-tone-2{background-color:#ffdab7}.skin-tone-3{background-color:#e7b98f}.skin-tone-4{background-color:#c88c61}.skin-tone-5{background-color:#a46134}.skin-tone-6{background-color:#5d4437}[data-emoji-set=twitter] .skin-tone:after{box-shadow:none;border-color:#00000080}[data-emoji-set=twitter] .skin-tone-1{background-color:#fade72}[data-emoji-set=twitter] .skin-tone-2{background-color:#f3dfd0}[data-emoji-set=twitter] .skin-tone-3{background-color:#eed3a8}[data-emoji-set=twitter] .skin-tone-4{background-color:#cfad8d}[data-emoji-set=twitter] .skin-tone-5{background-color:#a8805d}[data-emoji-set=twitter] .skin-tone-6{background-color:#765542}[data-emoji-set=google] .skin-tone:after{box-shadow:inset 0 0 2px 2px #0006}[data-emoji-set=google] .skin-tone-1{background-color:#f5c748}[data-emoji-set=google] .skin-tone-2{background-color:#f1d5aa}[data-emoji-set=google] .skin-tone-3{background-color:#d4b48d}[data-emoji-set=google] .skin-tone-4{background-color:#aa876b}[data-emoji-set=google] .skin-tone-5{background-color:#916544}[data-emoji-set=google] .skin-tone-6{background-color:#61493f}[data-emoji-set=facebook] .skin-tone:after{border-color:#0006;box-shadow:inset 0 -2px 3px #000,inset 0 1px 4px #fff}[data-emoji-set=facebook] .skin-tone-1{background-color:#f5c748}[data-emoji-set=facebook] .skin-tone-2{background-color:#f1d5aa}[data-emoji-set=facebook] .skin-tone-3{background-color:#d4b48d}[data-emoji-set=facebook] .skin-tone-4{background-color:#aa876b}[data-emoji-set=facebook] .skin-tone-5{background-color:#916544}[data-emoji-set=facebook] .skin-tone-6{background-color:#61493f}';
export const LC = $$eD0;
export const dN = $$G1;
export const il = $$B2;