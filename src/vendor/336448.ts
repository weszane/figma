function r(e) {
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = e;
}
r.prototype = {
  accepts: function () {
    return !!this.t;
  },
  tt: function (e, t) {
    if (t && t.j) {
      this.j[e] = t;
      return t;
    }
    var n = this.j[e];
    if (n) {
      t && (n.t = t);
      return n;
    }
    n = i();
    var r = a(this, e);
    r ? (Object.assign(n.j, r.j), n.jr.append(r.jr), n.jr = r.jd, n.t = t || r.t) : n.t = t;
    this.j[e] = n;
    return n;
  }
};
var i = function () {
  return new r();
};
var A = function (e) {
  return new r(e);
};
var o = function (e, t, n) {
  e.j[t] || (e.j[t] = n);
};
var s = function (e, t, n) {
  e.jr.push([t, n]);
};
var a = function (e, t) {
  var n = e.j[t];
  if (n) return n;
  for (var r = 0; r < e.jr.length; r++) {
    var i = e.jr[r][0];
    var A = e.jr[r][1];
    if (i.test(t)) return A;
  }
  return e.jd;
};
var l = function (e, t, n) {
  for (var r = 0; r < t.length; r++) o(e, t[r], n);
};
var u = function (e, t) {
  for (var n = 0; n < t.length; n++) o(e, t[n][0], t[n][1]);
};
var g = function (e, t, n, r) {
  for (A = 0, s = t.length, void 0; A < s && (i = e.j[t[A]]);) {
    var i;
    var A;
    var s;
    e = i;
    A++;
  }
  if (A >= s) return [];
  for (; A < s - 1;) {
    i = r();
    o(e, t[A], i);
    e = i;
    A++;
  }
  o(e, t[s - 1], n);
};
var c = "DOMAIN";
var f = "LOCALHOST";
var d = "PROTOCOL";
var h = "MAILTO";
var p = "OPENBRACE";
var C = "OPENBRACKET";
var I = "OPENANGLEBRACKET";
var E = "OPENPAREN";
var B = "CLOSEBRACE";
var m = "CLOSEBRACKET";
var y = "CLOSEANGLEBRACKET";
var _ = "CLOSEPAREN";
var Q = "AMPERSAND";
var D = "APOSTROPHE";
var w = "ASTERISK";
var b = "BACKSLASH";
var v = "BACKTICK";
var k = "CARET";
var x = "COLON";
var S = "COMMA";
var F = "DOLLAR";
var N = "EQUALS";
var T = "EXCLAMATION";
var L = "HYPHEN";
var R = "PERCENT";
var M = "PIPE";
var O = "PLUS";
var G = "POUND";
var P = "QUERY";
var U = "QUOTE";
var q = "SEMI";
var J = "SLASH";
var z = "TILDE";
var H = "UNDERSCORE";
var K = Object.freeze({
  __proto__: null,
  DOMAIN: c,
  LOCALHOST: f,
  TLD: "TLD",
  NUM: "NUM",
  PROTOCOL: d,
  MAILTO: h,
  WS: "WS",
  NL: "NL",
  OPENBRACE: p,
  OPENBRACKET: C,
  OPENANGLEBRACKET: I,
  OPENPAREN: E,
  CLOSEBRACE: B,
  CLOSEBRACKET: m,
  CLOSEANGLEBRACKET: y,
  CLOSEPAREN: _,
  AMPERSAND: Q,
  APOSTROPHE: D,
  ASTERISK: w,
  AT: "AT",
  BACKSLASH: b,
  BACKTICK: v,
  CARET: k,
  COLON: x,
  COMMA: S,
  DOLLAR: F,
  DOT: "DOT",
  EQUALS: N,
  EXCLAMATION: T,
  HYPHEN: L,
  PERCENT: R,
  PIPE: M,
  PLUS: O,
  POUND: G,
  QUERY: P,
  QUOTE: U,
  SEMI: q,
  SLASH: J,
  TILDE: z,
  UNDERSCORE: H,
  SYM: "SYM"
});
var j = "aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw verm\xf6gensberater-ctb verm\xf6gensberatung-pwb \u03B5\u03BB \u03B5\u03C5 \u0431\u0433 \u0431\u0435\u043B \u0434\u0435\u0442\u0438 \u0435\u044E \u043A\u0430\u0442\u043E\u043B\u0438\u043A \u043A\u043E\u043C \u049B\u0430\u0437 \u043C\u043A\u0434 \u043C\u043E\u043D \u043C\u043E\u0441\u043A\u0432\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0440\u0433 \u0440\u0443\u0441 \u0440\u0444 \u0441\u0430\u0439\u0442 \u0441\u0440\u0431 \u0443\u043A\u0440 \u10D2\u10D4 \u0570\u0561\u0575 \u05D9\u05E9\u05E8\u05D0\u05DC \u05E7\u05D5\u05DD \u0627\u0628\u0648\u0638\u0628\u064A \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u0644\u0627\u0631\u062F\u0646 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u062C\u0632\u0627\u0626\u0631 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0639\u0644\u064A\u0627\u0646 \u0627\u0644\u0645\u063A\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u06CC\u0631\u0627\u0646 \u0628\u0627\u0631\u062A \u0628\u0627\u0632\u0627\u0631 \u0628\u06BE\u0627\u0631\u062A \u0628\u064A\u062A\u0643 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646 \u0680\u0627\u0631\u062A \u062A\u0648\u0646\u0633 \u0633\u0648\u062F\u0627\u0646 \u0633\u0648\u0631\u064A\u0629 \u0634\u0628\u0643\u0629 \u0639\u0631\u0627\u0642 \u0639\u0631\u0628 \u0639\u0645\u0627\u0646 \u0641\u0644\u0633\u0637\u064A\u0646 \u0642\u0637\u0631 \u0643\u0627\u062B\u0648\u0644\u064A\u0643 \u0643\u0648\u0645 \u0645\u0635\u0631 \u0645\u0644\u064A\u0633\u064A\u0627 \u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627 \u0645\u0648\u0642\u0639 \u0647\u0645\u0631\u0627\u0647 \u0915\u0949\u092E \u0928\u0947\u091F \u092D\u093E\u0930\u0924 \u092D\u093E\u0930\u0924\u092E\u094D \u092D\u093E\u0930\u094B\u0924 \u0938\u0902\u0917\u0920\u0928 \u09AC\u09BE\u0982\u09B2\u09BE \u09AD\u09BE\u09B0\u09A4 \u09AD\u09BE\u09F0\u09A4 \u0A2D\u0A3E\u0A30\u0A24 \u0AAD\u0ABE\u0AB0\u0AA4 \u0B2D\u0B3E\u0B30\u0B24 \u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE \u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8 \u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD \u0C2D\u0C3E\u0C30\u0C24\u0C4D \u0CAD\u0CBE\u0CB0\u0CA4 \u0D2D\u0D3E\u0D30\u0D24\u0D02 \u0DBD\u0D82\u0D9A\u0DCF \u0E04\u0E2D\u0E21 \u0E44\u0E17\u0E22 \u0EA5\u0EB2\u0EA7 \uB2F7\uB137 \uB2F7\uCEF4 \uC0BC\uC131 \uD55C\uAD6D \u30A2\u30DE\u30BE\u30F3 \u30B0\u30FC\u30B0\u30EB \u30AF\u30E9\u30A6\u30C9 \u30B3\u30E0 \u30B9\u30C8\u30A2 \u30BB\u30FC\u30EB \u30D5\u30A1\u30C3\u30B7\u30E7\u30F3 \u30DD\u30A4\u30F3\u30C8 \u307F\u3093\u306A \u4E16\u754C \u4E2D\u4FE1 \u4E2D\u56FD \u4E2D\u570B \u4E2D\u6587\u7F51 \u4E9A\u9A6C\u900A \u4F01\u4E1A \u4F5B\u5C71 \u4FE1\u606F \u5065\u5EB7 \u516B\u5366 \u516C\u53F8 \u516C\u76CA \u53F0\u6E7E \u53F0\u7063 \u5546\u57CE \u5546\u5E97 \u5546\u6807 \u5609\u91CC \u5609\u91CC\u5927\u9152\u5E97 \u5728\u7EBF \u5927\u4F17\u6C7D\u8F66 \u5927\u62FF \u5929\u4E3B\u6559 \u5A31\u4E50 \u5BB6\u96FB \u5E7F\u4E1C \u5FAE\u535A \u6148\u5584 \u6211\u7231\u4F60 \u624B\u673A \u62DB\u8058 \u653F\u52A1 \u653F\u5E9C \u65B0\u52A0\u5761 \u65B0\u95FB \u65F6\u5C1A \u66F8\u7C4D \u673A\u6784 \u6DE1\u9A6C\u9521 \u6E38\u620F \u6FB3\u9580 \u70B9\u770B \u79FB\u52A8 \u7EC4\u7EC7\u673A\u6784 \u7F51\u5740 \u7F51\u5E97 \u7F51\u7AD9 \u7F51\u7EDC \u8054\u901A \u8BFA\u57FA\u4E9A \u8C37\u6B4C \u8D2D\u7269 \u901A\u8CA9 \u96C6\u56E2 \u96FB\u8A0A\u76C8\u79D1 \u98DE\u5229\u6D66 \u98DF\u54C1 \u9910\u5385 \u9999\u683C\u91CC\u62C9 \u9999\u6E2F".split(" ");
var Y = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/;
var W = /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])/;
var V = /\uFE0F/;
var Z = /\d/;
var $ = /\s/;
function X(e) {
  return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
var ee = {
  defaultProtocol: "http",
  events: null,
  format: en,
  formatHref: en,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 0,
  className: null,
  attributes: null,
  ignoreTags: []
};
export function $$et1(e) {
  e = e || {};
  this.defaultProtocol = "defaultProtocol" in e ? e.defaultProtocol : ee.defaultProtocol;
  this.events = "events" in e ? e.events : ee.events;
  this.format = "format" in e ? e.format : ee.format;
  this.formatHref = "formatHref" in e ? e.formatHref : ee.formatHref;
  this.nl2br = "nl2br" in e ? e.nl2br : ee.nl2br;
  this.tagName = "tagName" in e ? e.tagName : ee.tagName;
  this.target = "target" in e ? e.target : ee.target;
  this.rel = "rel" in e ? e.rel : ee.rel;
  this.validate = "validate" in e ? e.validate : ee.validate;
  this.truncate = "truncate" in e ? e.truncate : ee.truncate;
  this.className = "className" in e ? e.className : ee.className;
  this.attributes = e.attributes || ee.attributes;
  this.ignoreTags = [];
  for (t = ("ignoreTags" in e) ? e.ignoreTags : ee.ignoreTags, n = 0, void 0; n < t.length; n++) {
    var t;
    var n;
    this.ignoreTags.push(t[n].toUpperCase());
  }
}
function en(e) {
  return e;
}
function er() {}
function ei(e, t) {
  function n(t, n) {
    this.t = e;
    this.v = t;
    this.tk = n;
  }
  !function (e, t) {
    var n = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
    var r = Object.create(e.prototype);
    for (var i in n) r[i] = n[i];
    r.constructor = t;
    t.prototype = r;
  }(er, n, t);
  return n;
}
$$et1.prototype = {
  resolve: function (e) {
    var t = e.toHref(this.defaultProtocol);
    return {
      formatted: this.get("format", e.toString(), e),
      formattedHref: this.get("formatHref", t, e),
      tagName: this.get("tagName", t, e),
      className: this.get("className", t, e),
      target: this.get("target", t, e),
      rel: this.get("rel", t, e),
      events: this.getObject("events", t, e),
      attributes: this.getObject("attributes", t, e),
      truncate: this.get("truncate", t, e)
    };
  },
  check: function (e) {
    return this.get("validate", e.toString(), e);
  },
  get: function (e, t, n) {
    var r;
    var i = this[e];
    if (!i) return i;
    switch (X(i)) {
      case "function":
        return i(t, n.t);
      case "object":
        return "function" == typeof (r = n.t in i ? i[n.t] : ee[e]) ? r(t, n.t) : r;
    }
    return i;
  },
  getObject: function (e, t, n) {
    var r = this[e];
    return "function" == typeof r ? r(t, n.t) : r;
  }
};
er.prototype = {
  t: "token",
  isLink: !1,
  toString: function () {
    return this.v;
  },
  toHref: function () {
    return this.toString();
  },
  startIndex: function () {
    return this.tk[0].s;
  },
  endIndex: function () {
    return this.tk[this.tk.length - 1].e;
  },
  toObject: function () {
    var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : ee.defaultProtocol;
    return {
      type: this.t,
      value: this.v,
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  }
};
var eA = ei("email", {
  isLink: !0
});
var eo = ei("email", {
  isLink: !0,
  toHref: function () {
    return "mailto:" + this.toString();
  }
});
var es = ei("text");
var ea = ei("nl");
var el = ei("url", {
  isLink: !0,
  toHref: function () {
    for (e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : ee.defaultProtocol, t = this.tk, n = !1, r = !1, i = [], A = 0, void 0; t[A].t === d;) {
      var e;
      var t;
      var n;
      var r;
      var i;
      var A;
      n = !0;
      i.push(t[A].v);
      A++;
    }
    for (; t[A].t === J;) {
      r = !0;
      i.push(t[A].v);
      A++;
    }
    for (; A < t.length; A++) i.push(t[A].v);
    i = i.join("");
    n || r || (i = "".concat(e, "://").concat(i));
    return i;
  },
  hasProtocol: function () {
    return this.tk[0].t === d;
  }
});
var eu = Object.freeze({
  __proto__: null,
  MultiToken: er,
  Base: er,
  createTokenClass: ei,
  MailtoEmail: eA,
  Email: eo,
  Text: es,
  Nl: ea,
  Url: el
});
function eg(e, t, n) {
  var r = n[0].s;
  var i = n[n.length - 1].e;
  return new e(t.substr(r, i - r), n);
}
"undefined" != typeof console && console && console.warn;
var ec = {
  scanner: null,
  parser: null,
  pluginQueue: [],
  customProtocols: [],
  initialized: !1
};
export function $$ef2(e) {
  ec.initialized || function () {
    ec.scanner = {
      start: function () {
        var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : [];
        var t = i();
        var n = A("NUM");
        var r = A(c);
        var a = i();
        var l = A("WS");
        var K = [[Z, r], [Y, r], [W, r], [V, r]];
        var X = function () {
          var e = A(c);
          e.j = {
            "-": a
          };
          e.jr = [].concat(K);
          return e;
        };
        var ee = function (e) {
          var t = X();
          t.t = e;
          return t;
        };
        u(t, [["'", A(D)], ["{", A(p)], ["[", A(C)], ["<", A(I)], ["(", A(E)], ["}", A(B)], ["]", A(m)], [">", A(y)], [")", A(_)], ["&", A(Q)], ["*", A(w)], ["@", A("AT")], ["`", A(v)], ["^", A(k)], [":", A(x)], [",", A(S)], ["$", A(F)], [".", A("DOT")], ["=", A(N)], ["!", A(T)], ["-", A(L)], ["%", A(R)], ["|", A(M)], ["+", A(O)], ["#", A(G)], ["?", A(P)], ['"', A(U)], ["/", A(J)], [";", A(q)], ["~", A(z)], ["_", A(H)], ["\\", A(b)]]);
        o(t, "\n", A("NL"));
        s(t, $, l);
        o(l, "\n", i());
        s(l, $, l);
        for (var et = 0; et < j.length; et++) g(t, j[et], ee("TLD"), X);
        var en = X();
        var er = X();
        var ei = X();
        var eA = X();
        g(t, "file", en, X);
        g(t, "ftp", er, X);
        g(t, "http", ei, X);
        g(t, "mailto", eA, X);
        var eo = X();
        var es = A(d);
        var ea = A(h);
        o(er, "s", eo);
        o(er, ":", es);
        o(ei, "s", eo);
        o(ei, ":", es);
        o(en, ":", es);
        o(eo, ":", es);
        o(eA, ":", ea);
        for (el = X(), eu = 0, void 0; eu < e.length; eu++) {
          var el;
          var eu;
          g(t, e[eu], el, X);
        }
        o(el, ":", es);
        g(t, "localhost", ee(f), X);
        s(t, Z, n);
        s(t, Y, r);
        s(t, W, r);
        s(t, V, r);
        s(n, Z, n);
        s(n, Y, r);
        s(n, W, r);
        s(n, V, r);
        o(n, "-", a);
        o(r, "-", a);
        o(a, "-", a);
        s(r, Z, r);
        s(r, Y, r);
        s(r, W, r);
        s(r, V, r);
        s(a, Z, r);
        s(a, Y, r);
        s(a, W, r);
        s(a, V, r);
        t.jd = A("SYM");
        return t;
      }(ec.customProtocols),
      tokens: K
    };
    ec.parser = {
      start: (e = i(), t = i(), n = i(), r = i(), a = i(), X = i(), ee = i(), et = A(el), en = i(), er = A(el), es = A(el), eg = i(), ef = i(), ed = i(), eh = i(), ep = i(), eC = A(el), eI = A(el), eE = A(el), eB = A(el), em = i(), ey = i(), e_ = i(), eQ = i(), eD = i(), ew = i(), eb = A(eo), ev = i(), ek = A(eo), ex = A(eA), eS = i(), eF = i(), eN = i(), eT = i(), o(e, "NL", A(ea)), o(e, d, t), o(e, h, n), o(t, J, r), o(r, J, a), o(e, "TLD", X), o(e, c, X), o(e, f, et), o(e, "NUM", X), o(a, "TLD", es), o(a, c, es), o(a, "NUM", es), o(a, f, es), o(X, "DOT", ee), o(eD, "DOT", ew), o(ee, "TLD", et), o(ee, c, X), o(ee, "NUM", X), o(ee, f, X), o(ew, "TLD", eb), o(ew, c, eD), o(ew, "NUM", eD), o(ew, f, eD), o(et, "DOT", ee), o(eb, "DOT", ew), o(et, x, en), o(et, J, es), o(en, "NUM", er), o(er, J, es), o(eb, x, ev), o(ev, "NUM", ek), eL = [Q, w, "AT", b, v, k, F, c, N, L, f, "NUM", R, M, O, G, d, J, "SYM", z, "TLD", H], eR = [D, y, B, m, _, x, S, "DOT", T, I, p, C, E, P, U, q], o(es, p, ef), o(es, C, ed), o(es, I, eh), o(es, E, ep), o(eg, p, ef), o(eg, C, ed), o(eg, I, eh), o(eg, E, ep), o(ef, B, es), o(ed, m, es), o(eh, y, es), o(ep, _, es), o(eC, B, es), o(eI, m, es), o(eE, y, es), o(eB, _, es), o(em, B, es), o(ey, m, es), o(e_, y, es), o(eQ, _, es), l(ef, eL, eC), l(ed, eL, eI), l(eh, eL, eE), l(ep, eL, eB), l(ef, eR, em), l(ed, eR, ey), l(eh, eR, e_), l(ep, eR, eQ), l(eC, eL, eC), l(eI, eL, eI), l(eE, eL, eE), l(eB, eL, eB), l(eC, eR, eC), l(eI, eR, eI), l(eE, eR, eE), l(eB, eR, eB), l(em, eL, eC), l(ey, eL, eI), l(e_, eL, eE), l(eQ, eL, eB), l(em, eR, em), l(ey, eR, ey), l(e_, eR, e_), l(eQ, eR, eQ), l(es, eL, es), l(eg, eL, es), l(es, eR, eg), l(eg, eR, eg), o(n, "TLD", ex), o(n, c, ex), o(n, "NUM", ex), o(n, f, ex), l(ex, eL, ex), l(ex, eR, eS), l(eS, eL, ex), l(eS, eR, eS), l(X, eM = [Q, D, w, b, v, k, B, F, c, N, L, "NUM", p, R, M, O, G, P, J, "SYM", z, "TLD", H], eF), o(X, "AT", eN), l(et, eM, eF), o(et, "AT", eN), l(ee, eM, eF), l(eF, eM, eF), o(eF, "AT", eN), o(eF, "DOT", eT), l(eT, eM, eF), o(eN, "TLD", eD), o(eN, c, eD), o(eN, "NUM", eD), o(eN, f, eb), e),
      tokens: eu
    };
    for (eO = {
      createTokenClass: ei
    }, eG = 0, void 0; eG < ec.pluginQueue.length; eG++) {
      var e;
      var t;
      var n;
      var r;
      var a;
      var X;
      var ee;
      var et;
      var en;
      var er;
      var es;
      var eg;
      var ef;
      var ed;
      var eh;
      var ep;
      var eC;
      var eI;
      var eE;
      var eB;
      var em;
      var ey;
      var e_;
      var eQ;
      var eD;
      var ew;
      var eb;
      var ev;
      var ek;
      var ex;
      var eS;
      var eF;
      var eN;
      var eT;
      var eL;
      var eR;
      var eM;
      var eO;
      var eG;
      ec.pluginQueue[eG][1]({
        scanner: ec.scanner,
        parser: ec.parser,
        utils: eO
      });
    }
    ec.initialized = !0;
  }();
  return function (e, t, n) {
    for (r = n.length, i = 0, A = [], o = [], void 0; i < r;) {
      var r;
      var i;
      var A;
      var o;
      for (s = e, l = null, u = null, g = 0, c = null, f = -1, void 0; i < r && !(l = a(s, n[i].t));) {
        var s;
        var l;
        var u;
        var g;
        var c;
        var f;
        o.push(n[i++]);
      }
      for (; i < r && (u = l || a(s, n[i].t));) {
        l = null;
        (s = u).accepts() ? (f = 0, c = s) : f >= 0 && f++;
        i++;
        g++;
      }
      if (f < 0) for (var d = i - g; d < i; d++) o.push(n[d]);else {
        o.length > 0 && (A.push(eg(es, t, o)), o = []);
        i -= f;
        g -= f;
        var h = c.t;
        var p = n.slice(i - g, i);
        A.push(eg(h, t, p));
      }
    }
    o.length > 0 && A.push(eg(es, t, o));
    return A;
  }(ec.parser.start, e, function (e, t) {
    for (n = function (e) {
      for (t = [], n = e.length, r = 0, void 0; r < n;) {
        var t;
        var n;
        var r;
        var i = e.charCodeAt(r);
        var A = void 0;
        var o = i < 55296 || i > 56319 || r + 1 === n || (A = e.charCodeAt(r + 1)) < 56320 || A > 57343 ? e[r] : e.slice(r, r + 2);
        t.push(o);
        r += o.length;
      }
      return t;
    }(t.replace(/[A-Z]/g, function (e) {
      return e.toLowerCase();
    })), r = n.length, i = [], A = 0, o = 0, void 0; o < r;) {
      var n;
      var r;
      var i;
      var A;
      var o;
      for (s = e, l = null, u = 0, g = null, c = -1, f = -1, void 0; o < r && (l = a(s, n[o]));) {
        var s;
        var l;
        var u;
        var g;
        var c;
        var f;
        (s = l).accepts() ? (c = 0, f = 0, g = s) : c >= 0 && (c += n[o].length, f++);
        u += n[o].length;
        A += n[o].length;
        o++;
      }
      A -= c;
      o -= f;
      u -= c;
      i.push({
        t: g.t,
        v: t.substr(A - u, u),
        s: A - u,
        e: A
      });
    }
    return i;
  }(ec.scanner.start, e));
}
export function $$ed0(e) {
  for (t = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : null, n = $$ef2(e), r = [], i = 0, void 0; i < n.length; i++) {
    var t;
    var n;
    var r;
    var i;
    var A = n[i];
    A.isLink && (!t || A.t === t) && r.push(A.toObject());
  }
  return r;
}
export const I6 = $$ed0;
export const JY = $$et1;
export const qw = $$ef2;