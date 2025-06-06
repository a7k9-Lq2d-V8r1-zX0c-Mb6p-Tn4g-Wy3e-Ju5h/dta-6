/*! For license information please see gamepush.js.LICENSE.txt */
(()=>{
    var e, t, n, i, r = {
        2616: e=>{
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, i) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var r = {};
                    if (i)
                        for (var s = 0; s < this.length; s++) {
                            var a = this[s][0];
                            null != a && (r[a] = !0)
                        }
                    for (var o = 0; o < e.length; o++) {
                        var c = [].concat(e[o]);
                        i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                        t.push(c))
                    }
                }
                ,
                t
            }
        }
        ,
        5585: e=>{
            !function(t) {
                e.exports = t;
                var n = {
                    on: function(e, t) {
                        return s(this, e).push(t),
                        this
                    },
                    once: function(e, t) {
                        var n = this;
                        return i.originalListener = t,
                        s(n, e).push(i),
                        n;
                        function i() {
                            r.call(n, e, i),
                            t.apply(this, arguments)
                        }
                    },
                    off: r,
                    emit: function(e, t) {
                        var n = this
                          , i = s(n, e, !0);
                        if (!i)
                            return !1;
                        var r = arguments.length;
                        if (1 === r)
                            i.forEach(o);
                        else if (2 === r)
                            i.forEach(c);
                        else {
                            var a = Array.prototype.slice.call(arguments, 1);
                            i.forEach(l)
                        }
                        return !!i.length;
                        function o(e) {
                            e.call(n)
                        }
                        function c(e) {
                            e.call(n, t)
                        }
                        function l(e) {
                            e.apply(n, a)
                        }
                    }
                };
                function i(e) {
                    for (var t in n)
                        e[t] = n[t];
                    return e
                }
                function r(e, t) {
                    var n, i = this;
                    if (arguments.length) {
                        if (t) {
                            if (n = s(i, e, !0)) {
                                if (!(n = n.filter(a)).length)
                                    return r.call(i, e);
                                i.listeners[e] = n
                            }
                        } else if ((n = i.listeners) && (delete n[e],
                        !Object.keys(n).length))
                            return r.call(i)
                    } else
                        delete i.listeners;
                    return i;
                    function a(e) {
                        return e !== t && e.originalListener !== t
                    }
                }
                function s(e, t, n) {
                    if (!n || e.listeners) {
                        var i = e.listeners || (e.listeners = {});
                        return i[t] || (i[t] = [])
                    }
                }
                i(t.prototype),
                t.mixin = i
            }((function e() {
                if (!(this instanceof e))
                    return new e
            }
            ))
        }
        ,
        4943: e=>{
            "use strict";
            e.exports = i,
            e.exports.isMobile = i,
            e.exports.default = i;
            var t = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
              , n = /android|ipad|playbook|silk/i;
            function i(e) {
                e || (e = {});
                var i = e.ua;
                if (i || "undefined" == typeof navigator || (i = navigator.userAgent),
                i && i.headers && "string" == typeof i.headers["user-agent"] && (i = i.headers["user-agent"]),
                "string" != typeof i)
                    return !1;
                var r = t.test(i) || !!e.tablet && n.test(i);
                return !r && e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== i.indexOf("Macintosh") && -1 !== i.indexOf("Safari") && (r = !0),
                r
            }
        }
        ,
        2096: ()=>{
            "function" != typeof Promise.prototype.finally && (Promise.prototype.finally = function(e) {
                var t = this;
                return this.then((function(n) {
                    return t.constructor.resolve(e()).then((function() {
                        return n
                    }
                    ))
                }
                )).catch((function(n) {
                    return t.constructor.resolve(e()).then((function() {
                        throw n
                    }
                    ))
                }
                ))
            }
            )
        }
        ,
        6256: function(e, t, n) {
            var i;
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            e = n.nmd(e),
            function(s, a) {
                "use strict";
                var o = "function"
                  , c = "undefined"
                  , l = "object"
                  , h = "string"
                  , u = "model"
                  , d = "name"
                  , p = "type"
                  , f = "vendor"
                  , m = "version"
                  , v = "architecture"
                  , y = "console"
                  , g = "mobile"
                  , w = "tablet"
                  , b = "smarttv"
                  , E = "wearable"
                  , P = "embedded"
                  , _ = "Amazon"
                  , T = "Apple"
                  , I = "ASUS"
                  , S = "BlackBerry"
                  , A = "Google"
                  , k = "Huawei"
                  , O = "LG"
                  , C = "Microsoft"
                  , R = "Motorola"
                  , N = "Samsung"
                  , x = "Sharp"
                  , D = "Sony"
                  , M = "Xiaomi"
                  , L = "Zebra"
                  , j = "Facebook"
                  , $ = "Chromium OS"
                  , F = "Mac OS"
                  , U = function(e) {
                    for (var t = {}, n = 0; n < e.length; n++)
                        t[e[n].toUpperCase()] = e[n];
                    return t
                }
                  , B = function(e, t) {
                    return r(e) === h && -1 !== G(t).indexOf(G(e))
                }
                  , G = function(e) {
                    return e.toLowerCase()
                }
                  , W = function(e, t) {
                    if (r(e) === h)
                        return e = e.replace(/^\s\s*/, ""),
                        r(t) === c ? e : e.substring(0, 350)
                }
                  , q = function(e, t) {
                    for (var n, i, s, c, h, u, d = 0; d < t.length && !h; ) {
                        var p = t[d]
                          , f = t[d + 1];
                        for (n = i = 0; n < p.length && !h && p[n]; )
                            if (h = p[n++].exec(e))
                                for (s = 0; s < f.length; s++)
                                    u = h[++i],
                                    r(c = f[s]) === l && c.length > 0 ? 2 === c.length ? r(c[1]) == o ? this[c[0]] = c[1].call(this, u) : this[c[0]] = c[1] : 3 === c.length ? r(c[1]) !== o || c[1].exec && c[1].test ? this[c[0]] = u ? u.replace(c[1], c[2]) : a : this[c[0]] = u ? c[1].call(this, u, c[2]) : a : 4 === c.length && (this[c[0]] = u ? c[3].call(this, u.replace(c[1], c[2])) : a) : this[c] = u || a;
                        d += 2
                    }
                }
                  , V = function(e, t) {
                    for (var n in t)
                        if (r(t[n]) === l && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (B(t[n][i], e))
                                    return "?" === n ? a : n
                        } else if (B(t[n], e))
                            return "?" === n ? a : n;
                    return e
                }
                  , Y = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
                  , z = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, m], [/opios[\/ ]+([\w\.]+)/i], [m, [d, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [m, [d, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [d, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [m, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [m, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], m], [/\bfocus\/([\w\.]+)/i], [m, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [m, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [d, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [m, [d, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], m], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [d, m], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, j], m], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [d, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [d, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [m, V, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, m], [/(cobalt)\/([\w\.]+)/i], [d, [m, /master.|lts./, ""]]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, G]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[v, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[v, "armhf"]], [/windows (ce|mobile); ppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[v, /ower/, "", G]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[v, G]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [f, N], [p, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [f, N], [p, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [u, [f, T], [p, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [f, T], [p, w]], [/(macintosh);/i], [u, [f, T]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [f, x], [p, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [f, k], [p, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [u, [f, k], [p, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [f, M], [p, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [f, M], [p, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [f, "OPPO"], [p, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [f, "Vivo"], [p, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [f, "Realme"], [p, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [f, R], [p, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [f, R], [p, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [f, O], [p, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [f, O], [p, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [f, "Lenovo"], [p, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [f, "Nokia"], [p, g]], [/(pixel c)\b/i], [u, [f, A], [p, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [f, A], [p, g]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [f, D], [p, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [f, D], [p, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [f, "OnePlus"], [p, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [f, _], [p, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [f, _], [p, g]], [/(playbook);[-\w\),; ]+(rim)/i], [u, f, [p, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [f, S], [p, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [f, I], [p, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [f, I], [p, g]], [/(nexus 9)/i], [u, [f, "HTC"], [p, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [f, [u, /_/g, " "], [p, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [f, "Acer"], [p, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [f, "Meizu"], [p, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [f, u, [p, g]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [f, u, [p, w]], [/(surface duo)/i], [u, [f, C], [p, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [f, "Fairphone"], [p, g]], [/(u304aa)/i], [u, [f, "AT&T"], [p, g]], [/\bsie-(\w*)/i], [u, [f, "Siemens"], [p, g]], [/\b(rct\w+) b/i], [u, [f, "RCA"], [p, w]], [/\b(venue[\d ]{2,7}) b/i], [u, [f, "Dell"], [p, w]], [/\b(q(?:mv|ta)\w+) b/i], [u, [f, "Verizon"], [p, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [f, "Barnes & Noble"], [p, w]], [/\b(tm\d{3}\w+) b/i], [u, [f, "NuVision"], [p, w]], [/\b(k88) b/i], [u, [f, "ZTE"], [p, w]], [/\b(nx\d{3}j) b/i], [u, [f, "ZTE"], [p, g]], [/\b(gen\d{3}) b.+49h/i], [u, [f, "Swiss"], [p, g]], [/\b(zur\d{3}) b/i], [u, [f, "Swiss"], [p, w]], [/\b((zeki)?tb.*\b) b/i], [u, [f, "Zeki"], [p, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[f, "Dragon Touch"], u, [p, w]], [/\b(ns-?\w{0,9}) b/i], [u, [f, "Insignia"], [p, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [f, "NextBook"], [p, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[f, "Voice"], u, [p, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[f, "LvTel"], u, [p, g]], [/\b(ph-1) /i], [u, [f, "Essential"], [p, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [f, "Envizen"], [p, w]], [/\b(trio[-\w\. ]+) b/i], [u, [f, "MachSpeed"], [p, w]], [/\btu_(1491) b/i], [u, [f, "Rotor"], [p, w]], [/(shield[\w ]+) b/i], [u, [f, "Nvidia"], [p, w]], [/(sprint) (\w+)/i], [f, u, [p, g]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [f, C], [p, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [f, L], [p, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [f, L], [p, g]], [/smart-tv.+(samsung)/i], [f, [p, b]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [f, N], [p, b]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[f, O], [p, b]], [/(apple) ?tv/i], [f, [u, "Apple TV"], [p, b]], [/crkey/i], [[u, "Chromecast"], [f, A], [p, b]], [/droid.+aft(\w)( bui|\))/i], [u, [f, _], [p, b]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [u, [f, x], [p, b]], [/(bravia[\w ]+)( bui|\))/i], [u, [f, D], [p, b]], [/(mitv-\w{5}) bui/i], [u, [f, M], [p, b]], [/Hbbtv.*(technisat) (.*);/i], [f, u, [p, b]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[f, W], [u, W], [p, b]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, b]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [f, u, [p, y]], [/droid.+; (shield) bui/i], [u, [f, "Nvidia"], [p, y]], [/(playstation [345portablevi]+)/i], [u, [f, D], [p, y]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [f, C], [p, y]], [/((pebble))app/i], [f, u, [p, E]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [u, [f, T], [p, E]], [/droid.+; (glass) \d/i], [u, [f, A], [p, E]], [/droid.+; (wt63?0{2,3})\)/i], [u, [f, L], [p, E]], [/(quest( 2| pro)?)/i], [u, [f, j], [p, E]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [f, [p, P]], [/(aeobc)\b/i], [u, [f, _], [p, P]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [p, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [p, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, g]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [f, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, d]],
                    os: [[/microsoft (windows) (vista|xp)/i], [d, m], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [d, [m, V, Y]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[d, "Windows"], [m, V, Y]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, F], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, m], [/\(bb(10);/i], [m, [d, S]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [d, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, $], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, m], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, m]]
                }
                  , K = function e(t, n) {
                    if (r(t) === l && (n = t,
                    t = a),
                    !(this instanceof e))
                        return new e(t,n).getResult();
                    var i = r(s) !== c && s.navigator ? s.navigator : a
                      , u = t || (i && i.userAgent ? i.userAgent : "")
                      , d = i && i.userAgentData ? i.userAgentData : a
                      , p = n ? function(e, t) {
                        var n = {};
                        for (var i in e)
                            t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                        return n
                    }(z, n) : z
                      , f = i && i.userAgent == u;
                    return this.getBrowser = function() {
                        var e, t = {};
                        return t.name = a,
                        t.version = a,
                        q.call(t, u, p.browser),
                        t.major = r(e = t.version) === h ? e.replace(/[^\d\.]/g, "").split(".")[0] : a,
                        f && i && i.brave && r(i.brave.isBrave) == o && (t.name = "Brave"),
                        t
                    }
                    ,
                    this.getCPU = function() {
                        var e = {};
                        return e.architecture = a,
                        q.call(e, u, p.cpu),
                        e
                    }
                    ,
                    this.getDevice = function() {
                        var e = {};
                        return e.vendor = a,
                        e.model = a,
                        e.type = a,
                        q.call(e, u, p.device),
                        f && !e.type && d && d.mobile && (e.type = g),
                        f && "Macintosh" == e.model && i && r(i.standalone) !== c && i.maxTouchPoints && i.maxTouchPoints > 2 && (e.model = "iPad",
                        e.type = w),
                        e
                    }
                    ,
                    this.getEngine = function() {
                        var e = {};
                        return e.name = a,
                        e.version = a,
                        q.call(e, u, p.engine),
                        e
                    }
                    ,
                    this.getOS = function() {
                        var e = {};
                        return e.name = a,
                        e.version = a,
                        q.call(e, u, p.os),
                        f && !e.name && d && "Unknown" != d.platform && (e.name = d.platform.replace(/chrome os/i, $).replace(/macos/i, F)),
                        e
                    }
                    ,
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function() {
                        return u
                    }
                    ,
                    this.setUA = function(e) {
                        return u = r(e) === h && e.length > 350 ? W(e, 350) : e,
                        this
                    }
                    ,
                    this.setUA(u),
                    this
                };
                K.VERSION = "1.0.35",
                K.BROWSER = U([d, m, "major"]),
                K.CPU = U([v]),
                K.DEVICE = U([u, f, p, y, g, b, w, E, P]),
                K.ENGINE = K.OS = U([d, m]),
                r(t) !== c ? (r(e) !== c && e.exports && (t = e.exports = K),
                t.UAParser = K) : r(n.amdD) === o && n.amdO ? (i = function() {
                    return K
                }
                .call(t, n, t, e)) === a || (e.exports = i) : r(s) !== c && (s.UAParser = K);
                var J = r(s) !== c && (s.jQuery || s.Zepto);
                if (J && !J.ua) {
                    var Z = new K;
                    J.ua = Z.getResult(),
                    J.ua.get = function() {
                        return Z.getUA()
                    }
                    ,
                    J.ua.set = function(e) {
                        Z.setUA(e);
                        var t = Z.getResult();
                        for (var n in t)
                            J.ua[n] = t[n]
                    }
                }
            }("object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window : this)
        },
        8205: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>s
            });
            var i = n(2616)
              , r = n.n(i)()((function(e) {
                return e[1]
            }
            ));
            r.push([e.id, ".gs-global-loader{position:fixed;z-index:99999;top:8px;right:8px;width:48px;height:48px}@media only screen and (min-width: 1024px){.gs-global-loader{top:inherit;right:16px;bottom:16px}}.gs-loader{position:relative;width:40px;height:40px;border-radius:50%;display:flex}.gs-loader__outter{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-left-color:transparent;width:100%;height:100%;border-radius:50%;-webkit-animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}.gs-loader__inner{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-radius:50%;width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);border-top-color:transparent;-webkit-animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}@keyframes loader-outter{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-inner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.gs-loader-hidden{display:none}", ""]);
            const s = r
        }
        ,
        3379: (e,t,n)=>{
            "use strict";
            var i, r = function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        e[t] = n
                    }
                    return e[t]
                }
            }(), s = [];
            function a(e) {
                for (var t = -1, n = 0; n < s.length; n++)
                    if (s[n].identifier === e) {
                        t = n;
                        break
                    }
                return t
            }
            function o(e, t) {
                for (var n = {}, i = [], r = 0; r < e.length; r++) {
                    var o = e[r]
                      , c = t.base ? o[0] + t.base : o[0]
                      , l = n[c] || 0
                      , h = "".concat(c, " ").concat(l);
                    n[c] = l + 1;
                    var u = a(h)
                      , d = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    -1 !== u ? (s[u].references++,
                    s[u].updater(d)) : s.push({
                        identifier: h,
                        updater: m(d, t),
                        references: 1
                    }),
                    i.push(h)
                }
                return i
            }
            function c(e) {
                var t = document.createElement("style")
                  , i = e.attributes || {};
                if (void 0 === i.nonce) {
                    var s = n.nc;
                    s && (i.nonce = s)
                }
                if (Object.keys(i).forEach((function(e) {
                    t.setAttribute(e, i[e])
                }
                )),
                "function" == typeof e.insert)
                    e.insert(t);
                else {
                    var a = r(e.insert || "head");
                    if (!a)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t)
                }
                return t
            }
            var l, h = (l = [],
            function(e, t) {
                return l[e] = t,
                l.filter(Boolean).join("\n")
            }
            );
            function u(e, t, n, i) {
                var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = h(t, r);
                else {
                    var s = document.createTextNode(r)
                      , a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(s, a[t]) : e.appendChild(s)
                }
            }
            function d(e, t, n) {
                var i = n.css
                  , r = n.media
                  , s = n.sourceMap;
                if (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
                s && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")),
                e.styleSheet)
                    e.styleSheet.cssText = i;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(i))
                }
            }
            var p = null
              , f = 0;
            function m(e, t) {
                var n, i, r;
                if (t.singleton) {
                    var s = f++;
                    n = p || (p = c(t)),
                    i = u.bind(null, n, s, !1),
                    r = u.bind(null, n, s, !0)
                } else
                    n = c(t),
                    i = d.bind(null, n, t),
                    r = function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    }
                    ;
                return i(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        i(e = t)
                    } else
                        r()
                }
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === i && (i = Boolean(window && document && document.all && !window.atob)),
                i));
                var n = o(e = e || [], t);
                return function(e) {
                    if (e = e || [],
                    "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var i = 0; i < n.length; i++) {
                            var r = a(n[i]);
                            s[r].references--
                        }
                        for (var c = o(e, t), l = 0; l < n.length; l++) {
                            var h = a(n[l]);
                            0 === s[h].references && (s[h].updater(),
                            s.splice(h, 1))
                        }
                        n = c
                    }
                }
            }
        }
        ,
        7818: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>pa
            });
            var i = n(4943)
              , r = n.n(i)
              , s = n(4293)
              , a = n(5942);
            const o = {
                [a.z.YANDEX]: ()=>n.e(755).then(n.bind(n, 2855)),
                [a.z.VK]: ()=>n.e(911).then(n.bind(n, 1440)),
                [a.z.OK]: ()=>n.e(614).then(n.bind(n, 5821)),
                [a.z.GAME_MONETIZE]: ()=>n.e(369).then(n.bind(n, 3978)),
                [a.z.GAMEPIX]: ()=>n.e(885).then(n.bind(n, 5940)),
                [a.z.POKI]: ()=>n.e(551).then(n.bind(n, 449)),
                [a.z.GAME_DISTRIBUTION]: ()=>n.e(860).then(n.bind(n, 8708)),
                [a.z.WG_PLAYGROUND]: ()=>n.e(84).then(n.bind(n, 2447)),
                [a.z.CRAZY_GAMES]: ()=>n.e(433).then(n.bind(n, 346)),
                [a.z.SMARTMARKET]: ()=>n.e(552).then(n.bind(n, 5122)),
                [a.z.VK_PLAY]: ()=>n.e(70).then(n.bind(n, 558)),
                [a.z.BEELINE]: ()=>n.e(658).then(n.bind(n, 5367)),
                [a.z.KONGREGATE]: ()=>n.e(658).then(n.bind(n, 8518)),
                [a.z.GOOGLE_PLAY]: ()=>n.e(658).then(n.bind(n, 6226)),
                [a.z.NONE]: ()=>n.e(477).then(n.bind(n, 254))
            };
            var c, l, h, u = n(8293), d = n(7802), p = n(4692), f = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, m = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }, v = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            };
            const y = "... on Success { success }";
            class g {
                constructor(e, t, n, i, r) {
                    this.apiUrl = e,
                    this.projectId = t,
                    this.publicToken = n,
                    this.lang = i,
                    this.platformType = r,
                    c.set(this, ""),
                    l.set(this, 0),
                    h.set(this, (()=>{}
                    ))
                }
                get reqCounter() {
                    return m(this, l, "f")
                }
                set reqCounter(e) {
                    v(this, l, e, "f"),
                    m(this, h, "f").call(this, e)
                }
                addCounterListener(e) {
                    v(this, h, e, "f")
                }
                setLang(e) {
                    this.lang = e
                }
                setPlayerData(e) {
                    v(this, c, btoa(JSON.stringify(e)), "f")
                }
                ping(e) {
                    fetch(`${this.apiUrl}/api/ping?t=${e}`)
                }
                signQuery(e=null) {
                    return f(this, void 0, void 0, (function*() {
                        const t = {
                            projectId: this.projectId,
                            query: w(e),
                            token: this.publicToken
                        }
                          , n = yield function(e) {
                            return t = this,
                            n = void 0,
                            r = function*() {
                                const t = (new TextEncoder).encode(e)
                                  , n = yield crypto.subtle.digest("SHA-256", t);
                                return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2, "0"))).join("")
                            }
                            ,
                            new ((i = void 0) || (i = Promise))((function(e, s) {
                                function a(e) {
                                    try {
                                        c(r.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }
                                function o(e) {
                                    try {
                                        c(r.throw(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }
                                function c(t) {
                                    var n;
                                    t.done ? e(t.value) : (n = t.value,
                                    n instanceof i ? n : new i((function(e) {
                                        e(n)
                                    }
                                    ))).then(a, o)
                                }
                                c((r = r.apply(t, n || [])).next())
                            }
                            ));
                            var t, n, i, r
                        }(JSON.stringify(t));
                        return {
                            input: e,
                            hash: n
                        }
                    }
                    ))
                }
                fetch(e, t, n) {
                    return f(this, void 0, void 0, (function*() {
                        return this.fetchMany(e, t, n).then((({result: e})=>((0,
                        p.tv)(e),
                        e)))
                    }
                    ))
                }
                fetchMany(e, t, n={}) {
                    return f(this, void 0, void 0, (function*() {
                        const {input: i, hash: r} = yield this.signQuery(t);
                        let s, a = {};
                        const o = JSON.stringify({
                            query: e,
                            variables: Object.assign({
                                input: i,
                                lang: this.lang.toUpperCase()
                            }, n)
                        })
                          , l = function(e={}) {
                            return Object.keys(e).filter((t=>e[t]instanceof File))
                        }(t);
                        if (l.length > 0) {
                            s = new FormData,
                            s.append("operations", o);
                            const e = {};
                            l.forEach(((t,n)=>{
                                e[n] = [`variables.input.${t}`]
                            }
                            )),
                            s.append("map", JSON.stringify(e)),
                            l.forEach(((e,n)=>{
                                s.append(n, t[e])
                            }
                            ))
                        } else
                            a = {
                                "Content-Type": "application/json;charset=utf-8"
                            },
                            s = o;
                        return fetch(`${this.apiUrl}/graphql`, {
                            body: s,
                            method: "POST",
                            headers: Object.assign(Object.assign({}, a), {
                                "X-Transaction-Token": r,
                                "X-Platform": this.platformType,
                                "X-Project-ID": String(this.projectId),
                                "X-Project-Token": this.publicToken,
                                "X-Language": this.lang,
                                "X-Player-Data": m(this, c, "f")
                            })
                        }).catch((e=>{
                            if (String(null == e ? void 0 : e.message).includes("Failed to fetch"))
                                throw "connection_error";
                            throw e
                        }
                        )).then((e=>f(this, void 0, void 0, (function*() {
                            var t;
                            if (!e.ok) {
                                const t = yield e.text();
                                throw new Error(`${e.status}. ${t}`)
                            }
                            const n = yield e.json();
                            if ((null === (t = n.errors) || void 0 === t ? void 0 : t.length) > 0)
                                throw new Error(n.errors[0].message);
                            return Object.values(n.data || {}).forEach((e=>{
                                "Problem" != e.__typename && this.reqCounter++
                            }
                            )),
                            n
                        }
                        )))).then((e=>e.data))
                    }
                    ))
                }
            }
            function w(e) {
                var t;
                return Array.isArray(e) ? e.map(w) : null !== e && "object" == typeof e ? (Object.getOwnPropertySymbols(e).length > 0 && (e = JSON.parse(JSON.stringify(e))),
                t = {},
                Object.keys(e).sort().forEach((n=>t[n] = w(e[n]))),
                t) : e
            }
            c = new WeakMap,
            l = new WeakMap,
            h = new WeakMap;
            var b, E = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const P = "\n    id\n    tags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    hasPassword\n    membersCount\n"
              , _ = `... on ChannelInvitesList {\n    items {\n        channel { ${P} }\n        channelId\n        playerFrom\n        date\n    }\n}`
              , T = `... on ChannelInvitesList {\n    items {\n        channel { ${P} }\n        channelId\n        playerTo\n        date\n    }\n}`
              , I = `query($input: PlayerFetchPlayerInvitesInput!, $lang: Lang) {\n    result: PlayerFetchInvites(input: $input) { ${(0,
            p.Mn)(_)} }\n}`
              , S = `query($input: PlayerFetchPlayerSentInvitesInput!, $lang: Lang) {\n    result: PlayerFetchSentInvites(input: $input) { ${(0,
            p.Mn)(T)} }\n}`
              , A = `query($input: PlayerFetchChannelInvitesInput!) {\n    result: PlayerFetchChannelInvites(input: $input) { ${(0,
            p.Mn)("... on ChannelInvitesList {\n    items {\n        channelId\n        playerTo\n        playerFrom\n        date\n    }\n}")} }\n}`
              , k = `mutation($input: PlayerSendInviteToChannelInput!) {\n    result: PlayerSendInviteToChannel(input: $input) { ${(0,
            p.Mn)("... on ChannelInvite {\n    channelId\n    playerToId\n    playerFromId\n    date\n }")} }\n}`
              , O = `mutation($input: PlayerCancelInviteToChannelInput!) {\n    result: PlayerCancelInviteToChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , C = `mutation($input: PlayerAcceptInviteToChannelInput!) {\n    result: PlayerAcceptInviteToChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , R = `mutation($input: PlayerRejectInviteToChannelInput!) {\n    result: PlayerRejectInviteToChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`;
            class N {
                constructor(e) {
                    b.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, b, e, "f")
                }
                fetchInvites({limit: e, offset: t}) {
                    return E(this, b, "f").fetch(I, {
                        limit: e,
                        offset: t
                    })
                }
                fetchChannelInvites({channelId: e, limit: t, offset: n}) {
                    return E(this, b, "f").fetch(A, {
                        channelId: e,
                        limit: t,
                        offset: n
                    })
                }
                fetchSentInvites({limit: e, offset: t}) {
                    return E(this, b, "f").fetch(S, {
                        limit: e,
                        offset: t
                    })
                }
                sendInvite({channelId: e, playerId: t}) {
                    return E(this, b, "f").fetch(k, {
                        channelId: e,
                        playerId: t
                    })
                }
                cancelInvite({channelId: e, playerId: t}) {
                    return E(this, b, "f").fetch(O, {
                        channelId: e,
                        playerId: t
                    })
                }
                acceptInvite({channelId: e}) {
                    return E(this, b, "f").fetch(C, {
                        channelId: e
                    })
                }
                rejectInvite({channelId: e}) {
                    return E(this, b, "f").fetch(R, {
                        channelId: e
                    })
                }
            }
            b = new WeakMap;
            var x, D = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const M = "\n    canViewMessages\n    canAddMessage\n    canEditMessage\n    canDeleteMessage\n    canViewMembers\n    canInvitePlayer\n    canKickPlayer\n    canAcceptJoinRequest\n    canMutePlayer\n"
              , L = `\n    id\n    tags\n    messageTags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    permanent\n    hasPassword\n    password\n    templateId\n    membersCount\n    membersOnlineCount\n    isJoined\n    isRequestSent\n    isInvited\n    mute { isMuted, unmuteAt }\n    ownerAcl { ${M} }\n    memberAcl { ${M} }\n    guestAcl { ${M} }\n`
              , j = `... on Channel { ${L} }`
              , $ = `... on ChannelsList {\n    items { ${L} }\n}`
              , F = `query($input: PlayerFetchChannelInput!, $lang: Lang) {\n    result: PlayerFetchChannel(input: $input) { ${(0,
            p.Mn)(j)} }\n}`
              , U = `query($input: PlayerFetchPersonalChannelInput!, $lang: Lang) {\n    result: PlayerFetchPersonalChannel(input: $input) { ${(0,
            p.Mn)(j)} }\n}`
              , B = `query($input: PlayerFetchChannelsInput!, $lang: Lang) {\n    result: PlayerFetchChannels(input: $input) { ${(0,
            p.Mn)($)} }\n}`
              , G = `query($input: PlayerFetchFeedChannelInput!, $lang: Lang) {\n    result: PlayerFetchFeedChannel(input: $input) { ${(0,
            p.Mn)(j)} }\n}`
              , W = `mutation($input: PlayerCreateChannelInput!, $lang: Lang) {\n    result: PlayerCreateChannel(input: $input) { ${(0,
            p.Mn)(j)} }\n}`
              , q = `mutation($input: PlayerUpdateChannelInput!, $lang: Lang) {\n    result: PlayerUpdateChannel(input: $input) { ${(0,
            p.Mn)(j)} }\n}`
              , V = `mutation($input: PlayerDeleteChannelInput!) {\n    result: PlayerDeleteChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`;
            class Y {
                constructor(e) {
                    x.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, x, e, "f")
                }
                fetchChannel({channelId: e}) {
                    return D(this, x, "f").fetch(F, {
                        channelId: e
                    }).then(z)
                }
                fetchPersonalChannel({playerId: e}) {
                    return D(this, x, "f").fetch(U, {
                        playerId: e
                    }).then(z)
                }
                fetchFeedChannel({playerId: e}) {
                    return D(this, x, "f").fetch(G, {
                        playerId: e
                    }).then(z)
                }
                fetchChannels({ids: e, onlyJoined: t, onlyOwned: n, tags: i, search: r, limit: s, offset: a}) {
                    return D(this, x, "f").fetch(B, {
                        ids: e,
                        onlyJoined: t,
                        onlyOwned: n,
                        tags: i,
                        search: r,
                        limit: s,
                        offset: a
                    }).then(K)
                }
                createChannel({template: e, tags: t, capacity: n, name: i, description: r, password: s, ownerAcl: a, memberAcl: o, guestAcl: c, visible: l, private: h}) {
                    return D(this, x, "f").fetch(W, {
                        template: e,
                        tags: t,
                        capacity: n,
                        name: i,
                        description: r,
                        password: s,
                        ownerAcl: a,
                        memberAcl: o,
                        guestAcl: c,
                        visible: l,
                        private: h
                    }).then(z)
                }
                updateChannel({channelId: e, tags: t, capacity: n, name: i, description: r, password: s, ownerAcl: a, memberAcl: o, guestAcl: c, ownerId: l, visible: h, private: u}) {
                    return D(this, x, "f").fetch(q, {
                        channelId: e,
                        tags: t,
                        capacity: n,
                        name: i,
                        description: r,
                        password: s,
                        ownerAcl: a,
                        memberAcl: o,
                        guestAcl: c,
                        ownerId: l,
                        visible: h,
                        private: u
                    }).then(z)
                }
                deleteChannel({channelId: e}) {
                    return D(this, x, "f").fetch(V, {
                        channelId: e
                    })
                }
            }
            function z(e) {
                return e.isMuted = e.mute.isMuted,
                e
            }
            function K(e) {
                return e.items = e.items.map(z),
                e
            }
            x = new WeakMap;
            var J, Z = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const H = `... on ChannelJoinRequestsList {\n    items {\n        date\n        channelId\n        channel { ${L} }\n    }\n}`
              , X = `query($input: PlayerFetchChannelJoinRequestsInput!) {\n    result: PlayerFetchChannelJoinRequests(input: $input) { ${(0,
            p.Mn)("... on ChannelJoinRequestsList {\n    items {\n        channelId\n        player\n        date\n    }\n}")} }\n}`
              , Q = `query($input: PlayerFetchPlayerSentJoinRequestsInput!, $lang: Lang) {\n    result: PlayerFetchSentJoinRequests(input: $input) { ${(0,
            p.Mn)(H)} }\n}`
              , ee = `mutation($input: PlayerAcceptJoinRequestToChannelInput!) {\n    result: PlayerAcceptJoinRequestToChannel(input: $input) { ${(0,
            p.Mn)("... on ChannelMember {\n    id\n    state\n    channelId\n    isOnline\n    mute {\n        isMuted\n        unmuteAt\n    }\n}")} }\n}`
              , te = `mutation($input: PlayerRejectJoinRequestToChannelInput!) {\n    result: PlayerRejectJoinRequestToChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`;
            class ne {
                constructor(e) {
                    J.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, J, e, "f")
                }
                fetchJoinRequests({channelId: e, search: t, limit: n, offset: i}) {
                    return Z(this, J, "f").fetch(X, {
                        channelId: e,
                        search: t,
                        limit: n,
                        offset: i
                    })
                }
                fetchSentJoinRequests({limit: e, offset: t}) {
                    return Z(this, J, "f").fetch(Q, {
                        limit: e,
                        offset: t
                    })
                }
                acceptJoinRequest({channelId: e, playerId: t}) {
                    return Z(this, J, "f").fetch(ee, {
                        channelId: e,
                        playerId: t
                    })
                }
                rejectJoinRequest({channelId: e, playerId: t}) {
                    return Z(this, J, "f").fetch(te, {
                        channelId: e,
                        playerId: t
                    })
                }
            }
            J = new WeakMap;
            var ie, re = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const se = `mutation($input: PlayerMutePlayerInChannelInput!) {\n    result: PlayerMutePlayerInChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , ae = `mutation($input: PlayerUnmutePlayerInChannelInput!) {\n    result: PlayerUnmutePlayerInChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , oe = `query($input: PlayerFetchChannelMembersInput!) {\n    result: PlayerFetchChannelMembers(input: $input) { ${(0,
            p.Mn)("... on ChannelMembersList {\n    players {\n        id\n        state\n        isOnline\n        mute {\n            isMuted\n            unmuteAt\n        }\n    }\n}")} }\n}`
              , ce = `mutation($input: PlayerKickFromChannelInput!) {\n    result: PlayerKickFromChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , le = `mutation($input: PlayerJoinChannelInput!) {\n    result: PlayerJoinChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , he = `mutation($input: PlayerLeaveChannelInput!) {\n    result: PlayerLeaveChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`
              , ue = `mutation($input: PlayerCancelJoinChannelInput!) {\n    result: PlayerCancelJoinChannel(input: $input) { ${(0,
            p.Mn)(y)} }\n}`;
            class de {
                constructor(e) {
                    ie.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, ie, e, "f")
                }
                mute({channelId: e, playerId: t, unmuteAt: n}) {
                    return re(this, ie, "f").fetch(se, {
                        channelId: e,
                        playerId: t,
                        unmuteAt: n
                    })
                }
                unmute({channelId: e, playerId: t}) {
                    return re(this, ie, "f").fetch(ae, {
                        channelId: e,
                        playerId: t
                    })
                }
                fetchMembers({channelId: e, onlyOnline: t, search: n, limit: i, offset: r}) {
                    return re(this, ie, "f").fetch(oe, {
                        channelId: e,
                        onlyOnline: t,
                        search: n,
                        limit: i,
                        offset: r
                    })
                }
                join({channelId: e, password: t}) {
                    return re(this, ie, "f").fetch(le, {
                        channelId: e,
                        password: t
                    })
                }
                cancelJoin({channelId: e}) {
                    return re(this, ie, "f").fetch(ue, {
                        channelId: e
                    })
                }
                leave({channelId: e}) {
                    return re(this, ie, "f").fetch(he, {
                        channelId: e
                    })
                }
                kick({channelId: e, playerId: t}) {
                    return re(this, ie, "f").fetch(ce, {
                        channelId: e,
                        playerId: t
                    })
                }
            }
            ie = new WeakMap;
            var pe, fe = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const me = "\n    id\n    channelId\n    authorId\n    text\n    tags\n    player\n    createdAt\n"
              , ve = `... on ChannelMessage { ${me} }`
              , ye = `... on ChannelMessagesList {\n    items { ${me} }\n}`
              , ge = `query($input: PlayerFetchChannelMessagesInput!) {\n    result: PlayerFetchChannelMessages(input: $input) { ${(0,
            p.Mn)(ye)} }\n}`
              , we = `query($input: PlayerFetchPersonalMessagesInput!) {\n    result: PlayerFetchPersonalMessages(input: $input) { ${(0,
            p.Mn)(ye)} }\n}`
              , be = `query($input: PlayerFetchFeedMessagesInput!) {\n    result: PlayerFetchFeedMessages(input: $input) { ${(0,
            p.Mn)(ye)} }\n}`
              , Ee = `mutation($input: PlayerSendMessageInput!) {\n    result: PlayerSendMessage(input: $input) { ${(0,
            p.Mn)(ve)} }\n}`
              , Pe = `mutation($input: PlayerSendFeedMessageInput!) {\n    result: PlayerSendFeedMessage(input: $input) { ${(0,
            p.Mn)(ve)} }\n}`
              , _e = `mutation($input: PlayerSendPersonalMessageInput!) {\n    result: PlayerSendPersonalMessage(input: $input) { ${(0,
            p.Mn)(ve)} }\n}`
              , Te = `mutation($input: PlayerEditMessageInput!) {\n    result: PlayerEditMessage(input: $input) { ${(0,
            p.Mn)(ve)} }\n}`
              , Ie = `mutation($input: PlayerDeleteMessageInput!) {\n    result: PlayerDeleteMessage(input: $input) { ${(0,
            p.Mn)(y)} }\n}`;
            class Se {
                constructor(e) {
                    pe.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, pe, e, "f")
                }
                fetchMessages({channelId: e, tags: t, limit: n, offset: i}) {
                    return fe(this, pe, "f").fetch(ge, {
                        channelId: e,
                        tags: t,
                        limit: n,
                        offset: i
                    })
                }
                fetchPersonalMessages({playerId: e, tags: t, limit: n, offset: i}) {
                    return fe(this, pe, "f").fetch(we, {
                        playerId: e,
                        tags: t,
                        limit: n,
                        offset: i
                    })
                }
                fetchFeedMessages({playerId: e, authorId: t, tags: n, limit: i, offset: r}) {
                    return fe(this, pe, "f").fetch(be, {
                        playerId: e,
                        authorId: t,
                        tags: n,
                        limit: i,
                        offset: r
                    })
                }
                sendMessage({channelId: e, tags: t, text: n}) {
                    return fe(this, pe, "f").fetch(Ee, {
                        channelId: e,
                        tags: t,
                        text: n
                    })
                }
                sendFeedMessage({playerId: e, text: t, tags: n}) {
                    return fe(this, pe, "f").fetch(Pe, {
                        playerId: e,
                        text: t,
                        tags: n
                    })
                }
                sendPersonalMessage({playerId: e, text: t, tags: n}) {
                    return fe(this, pe, "f").fetch(_e, {
                        playerId: e,
                        text: t,
                        tags: n
                    })
                }
                editMessage({messageId: e, text: t}) {
                    return fe(this, pe, "f").fetch(Te, {
                        messageId: e,
                        text: t
                    })
                }
                deleteMessage({messageId: e}) {
                    return fe(this, pe, "f").fetch(Ie, {
                        messageId: e
                    })
                }
            }
            pe = new WeakMap;
            var Ae, ke = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class Oe {
                constructor(e) {
                    Ae.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Ae, e, "f"),
                    this.channels = new Y(ke(this, Ae, "f")),
                    this.messages = new Se(ke(this, Ae, "f")),
                    this.members = new de(ke(this, Ae, "f")),
                    this.invites = new N(ke(this, Ae, "f")),
                    this.joinRequests = new ne(ke(this, Ae, "f"))
                }
                ping(e) {
                    ke(this, Ae, "f").ping(e)
                }
            }
            Ae = new WeakMap;
            class Ce {
                constructor(e, t) {
                    this.config = e,
                    this.adapter = t
                }
                get hasIntegratedAuth() {
                    return this.adapter.hasIntegratedAuth
                }
                get hasAccountLinkingFeature() {
                    return this.adapter.hasAccountLinkingFeature
                }
                get isSecretCodeAuthAvailable() {
                    return this.adapter.isSecretCodeAuthAvailable
                }
                get _hasAuthModal() {
                    return this.adapter._hasAuthModal
                }
                get isExternalLinksAllowed() {
                    return this.adapter.isExternalLinksAllowed
                }
                get type() {
                    return this.adapter.type
                }
                get availableSocialNetworks() {
                    return this.adapter.socialNetworks
                }
                getSDK() {
                    return this.adapter.getSDK()
                }
                getNativeSDK() {
                    return this.adapter.getNativeSDK()
                }
                get isSupportsImageUploading() {
                    return this.adapter.isSupportsImageUploading
                }
                requestPermissions(e) {
                    return t = this,
                    n = void 0,
                    r = function*() {
                        return this.adapter.requestPermissions(e)
                    }
                    ,
                    new ((i = void 0) || (i = Promise))((function(e, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value,
                            n instanceof i ? n : new i((function(e) {
                                e(n)
                            }
                            ))).then(a, o)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }
                    ));
                    var t, n, i, r
                }
                uploadImage(e) {
                    return this.adapter.uploadImage(e)
                }
            }
            var Re = n(3379)
              , Ne = n.n(Re)
              , xe = n(8205);
            Ne()(xe.Z, {
                insert: "head",
                singleton: !1
            }),
            xe.Z.locals;
            var De, Me = n(6558), Le = n(9696), je = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, $e = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, Fe = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class Ue {
                constructor(e=[]) {
                    this.storages = e,
                    De.set(this, ""),
                    this.isEmptyOnBoot = !0,
                    this.temp = {};
                    const t = (0,
                    u._)();
                    this.ready = t.ready,
                    Promise.all([this._get(e, "context"), this._get(e, "config")]).then((([e,n])=>{
                        $e(this, De, e || "", "f"),
                        this.isEmptyOnBoot = !n,
                        t.done()
                    }
                    ))
                }
                get localStorages() {
                    return this.storages.filter((e=>!0 === e.isLocal))
                }
                _get(e, t) {
                    const n = (0,
                    u._)();
                    return Promise.all(this.storages.map((e=>{
                        const n = (0,
                        u._)(u.s);
                        return e.get(t).then(n.done).catch(n.abort),
                        n.ready.catch((e=>(Me.kg.warn(e),
                        null)))
                    }
                    ))).then((e=>n.done(e.find(Boolean)))),
                    n.ready
                }
                _set(e, t, n) {
                    return Promise.all(e.map((e=>e.set(t, n))))
                }
                set(e, t, n) {
                    return this._set(e, `${t}${Fe(this, De, "f")}`, n)
                }
                setRaw(e, t, n) {
                    return this._set(e, `${t}`, n)
                }
                get(e, t) {
                    return this._get(e, `${t}${Fe(this, De, "f")}`)
                }
                getRaw(e, t) {
                    return this._get(e, `${t}`)
                }
                isEmptyContext() {
                    return !Fe(this, De, "f")
                }
                setContext(e) {
                    $e(this, De, e, "f"),
                    this._set(this.localStorages, "context", Fe(this, De, "f"))
                }
                migrateToContext(e) {
                    return je(this, void 0, void 0, (function*() {
                        $e(this, De, "", "f");
                        const [t,n,i] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()])
                          , r = n || (null == t ? void 0 : t.secretCode);
                        return $e(this, De, e, "f"),
                        yield Promise.all([this.savePlayer(t), this.saveSecretCode(r), this.saveLanguage(i)]),
                        $e(this, De, "", "f"),
                        yield Promise.all([this.savePlayer(null), this.saveSecretCode(null), this.saveLanguage(null)]),
                        [t, r]
                    }
                    ))
                }
                clearContext(e) {
                    return je(this, void 0, void 0, (function*() {
                        const t = Fe(this, De, "f");
                        $e(this, De, e, "f"),
                        yield Promise.all([this.savePlayer(null), this.saveSecretCode(null), this.saveLanguage(null)]),
                        $e(this, De, t, "f")
                    }
                    ))
                }
                extractFromContext(e) {
                    return je(this, void 0, void 0, (function*() {
                        const t = Fe(this, De, "f");
                        $e(this, De, e, "f");
                        const [n,i,r] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()])
                          , s = i || (null == n ? void 0 : n.secretCode);
                        return $e(this, De, t, "f"),
                        [n, s, r]
                    }
                    ))
                }
                copyFromContext(e, t) {
                    return je(this, void 0, void 0, (function*() {
                        const n = Fe(this, De, "f")
                          , [i,r,s] = yield this.extractFromContext(e);
                        $e(this, De, t, "f"),
                        yield Promise.all([this.savePlayer(i), this.saveSecretCode(r), this.saveLanguage(s)]),
                        $e(this, De, n, "f")
                    }
                    ))
                }
                loadPlayer() {
                    return this.get(this.storages, "players").then((([e]=[null])=>e))
                }
                savePlayer(e) {
                    return this.set(this.storages, "players", [e]).catch(Me.kg.warn)
                }
                loadSecretCode() {
                    return this.get(this.localStorages, "sk").catch(Me.kg.warn)
                }
                saveSecretCode(e) {
                    return this.set(this.localStorages, "sk", e).catch(Me.kg.warn)
                }
                loadLanguage() {
                    return this.get(this.localStorages, "lang").catch((e=>(Me.kg.warn(e),
                    null)))
                }
                saveLanguage(e) {
                    return this.set(this.localStorages, "lang", e).catch(Me.kg.warn)
                }
                loadConfig() {
                    return this._get(this.localStorages, "config").then((e=>Object.assign(Object.assign({}, Le.lR), e))).catch((e=>(Me.kg.warn(e),
                    Le.lR)))
                }
                saveConfig(e) {
                    return this._set(this.localStorages, "config", e).catch(Me.kg.warn)
                }
                loadAdsInfo() {
                    const e = this._get(this.localStorages, "adsInfo").then((e=>Object.assign(Object.assign({}, Le.GH), e))).catch((e=>(Me.kg.warn(e),
                    Le.GH)));
                    return e.then((e=>this.temp.adsInfo = e)),
                    e
                }
                saveAdsInfo(e) {
                    return this._set(this.localStorages, "adsInfo", e).catch(Me.kg.warn)
                }
                saveIsExistsShortcut(e) {
                    this.set(this.localStorages, "isExistsShortcut", e)
                }
                loadIsExistsShortcut() {
                    return this.get(this.localStorages, "isExistsShortcut")
                }
                isCrazyGamesAccountLinked(e) {
                    var t;
                    return je(this, void 0, void 0, (function*() {
                        return Boolean(null !== (t = yield this.getRaw(this.localStorages, `crazyGames.account${e}.linked`)) && void 0 !== t && t)
                    }
                    ))
                }
                setCrazyGamesAccountLinked(e) {
                    return je(this, void 0, void 0, (function*() {
                        yield this.setRaw(this.localStorages, `crazyGames.account${e}.linked`, !0)
                    }
                    ))
                }
            }
            De = new WeakMap;
            var Be = n(6388)
              , Ge = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class We extends Error {
                constructor() {
                    super("throttled invocation was canceled"),
                    this.name = "CanceledError"
                }
            }
            class qe {
                constructor(e, t) {
                    this.canceled = !1;
                    const n = new Promise((e=>{
                        this.timeout = setTimeout(e, t),
                        this.resolve = e
                    }
                    ));
                    this.ready = e.then((()=>n), (()=>n))
                }
                flush() {
                    clearTimeout(this.timeout),
                    this.resolve()
                }
                cancel() {
                    this.canceled = !0,
                    clearTimeout(this.timeout),
                    this.resolve()
                }
                then(e) {
                    return this.ready.then((()=>{
                        if (this.canceled)
                            throw new We;
                        return e()
                    }
                    ))
                }
            }
            function Ve(e, t, n={}) {
                const i = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0
                  , r = n.getNextArgs || ((e,t)=>t);
                let s, a = Promise.resolve(), o = new qe(a,0), c = null;
                function l() {
                    const t = s;
                    c = null,
                    s = null;
                    const n = (()=>Ge(this, void 0, void 0, (function*() {
                        return yield e.apply(this, t)
                    }
                    )))();
                    return o = new qe(n,i),
                    n
                }
                function h(...e) {
                    return s = s ? r(s, e) : e,
                    c || (c = o.then(l.bind(this))),
                    c
                }
                return h.cancel = ()=>Ge(this, void 0, void 0, (function*() {
                    const e = a;
                    o.cancel(),
                    c = null,
                    s = null,
                    a = Promise.resolve(),
                    o = new qe(a,0),
                    yield e
                }
                )),
                h.flush = ()=>Ge(this, void 0, void 0, (function*() {
                    o.flush(),
                    yield a
                }
                )),
                h
            }
            function Ye(e) {
                return function(t, n, i) {
                    const r = i.value;
                    return i.value = Ve(r, e),
                    i
                }
            }
            Ve.CanceledError = We;
            var ze = n(6480)
              , Ke = function(e, t, n, i) {
                var r, s = arguments.length, a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, i);
                else
                    for (var o = e.length - 1; o >= 0; o--)
                        (r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                return s > 3 && a && Object.defineProperty(t, n, a),
                a
            }
              , Je = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class Ze extends Be.Z {
                constructor(e) {
                    super(),
                    this.gp = e
                }
                open(e={
                    orderBy: ["score"]
                }) {
                    return Je(this, void 0, void 0, (function*() {
                        e.orderBy && "string" == typeof e.orderBy && (e.orderBy = [e.orderBy]);
                        const t = Array.isArray(e.orderBy) ? e.orderBy : ["score"];
                        0 === t.filter((e=>"" !== e)).length && (e = Object.assign(Object.assign({}, e), {
                            orderBy: t
                        }));
                        const [n] = yield Promise.all([this.fetch(e), this.gp.loadOverlay()]);
                        this._events.emit("open"),
                        yield this.gp.overlay.openLeaderboard(e, n),
                        this._events.emit("close")
                    }
                    ))
                }
                openScoped(e) {
                    return Je(this, void 0, void 0, (function*() {
                        const [t] = yield Promise.all([this.fetchScoped(e), this.gp.loadOverlay()])
                          , n = Object.assign({}, e)
                          , i = t.fields.map((e=>e.key));
                        n.orderBy = e.includeFields ? i.filter((t=>!e.includeFields.includes(t))) : i,
                        this._events.emit("open"),
                        yield this.gp.overlay.openLeaderboard(n, t),
                        this._events.emit("close")
                    }
                    ))
                }
                fetch(e={}) {
                    return Je(this, void 0, void 0, (function*() {
                        const t = (0,
                        u._)();
                        this.gp.loader.inc();
                        const {showNearest: n, withMe: i, limit: r} = e
                          , s = Object.assign(Object.assign({}, e), {
                            showNearest: (0,
                            ze.pY)(n),
                            withMe: (0,
                            ze.oo)(n, i)
                        });
                        try {
                            const {result: e, playerResult: n} = yield this.gp._leaderboardsService.getRating(s);
                            He(e, n, s.showNearest, s.withMe, (0,
                            ze.wQ)(r, e.leaderboard)),
                            t.done(e),
                            this._events.emit("fetch", e)
                        } catch (e) {
                            t.abort(e),
                            this._events.emit("error:fetch")
                        } finally {
                            this.gp.loader.dec()
                        }
                        return t.ready
                    }
                    ))
                }
                fetchScoped(e) {
                    return Je(this, void 0, void 0, (function*() {
                        const t = (0,
                        u._)();
                        this.gp.loader.inc();
                        const {showNearest: n, withMe: i, limit: r} = e
                          , s = Object.assign(Object.assign({}, e), {
                            showNearest: (0,
                            ze.pY)(n),
                            withMe: (0,
                            ze.oo)(n, i)
                        });
                        try {
                            const e = yield this.gp._leaderboardsService.getRatingVariant(s)
                              , {result: n, playerResult: i} = e;
                            (0,
                            p.tv)(n),
                            (0,
                            p.tv)(i),
                            He(n, i, s.showNearest, s.withMe, (0,
                            ze.wQ)(r, n.leaderboard)),
                            t.done(n),
                            this._events.emit("fetch", n)
                        } catch (e) {
                            t.abort(e),
                            this._events.emit("error:fetch")
                        } finally {
                            this.gp.loader.dec()
                        }
                        return t.ready
                    }
                    ))
                }
                fetchPlayerRating(e={}) {
                    return Je(this, void 0, void 0, (function*() {
                        const t = (0,
                        u._)();
                        this.gp.loader.inc();
                        const {showNearest: n} = e
                          , i = Object.assign(Object.assign({}, e), {
                            showNearest: (0,
                            ze.pY)(n)
                        });
                        try {
                            const e = yield this.gp._leaderboardsService.getPlayerRating(i);
                            t.done(e),
                            this._events.emit("fetchPlayer", e)
                        } catch (e) {
                            t.abort(e),
                            this._events.emit("error:fetchPlayer", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return t.ready
                    }
                    ))
                }
                fetchPlayerRatingScoped(e) {
                    return Je(this, void 0, void 0, (function*() {
                        const t = (0,
                        u._)();
                        this.gp.loader.inc();
                        const {showNearest: n} = e
                          , i = Object.assign(Object.assign({}, e), {
                            showNearest: (0,
                            ze.pY)(n)
                        });
                        try {
                            const e = yield this.gp._leaderboardsService.getPlayerRatingVariant(i);
                            t.done(e),
                            this._events.emit("fetchPlayerScoped", e)
                        } catch (e) {
                            t.abort(e),
                            this._events.emit("error:fetchPlayerScoped", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return t.ready
                    }
                    ))
                }
                publishRecord(e) {
                    return Je(this, void 0, void 0, (function*() {
                        const t = (0,
                        u._)();
                        this.gp.loader.inc();
                        try {
                            const n = yield this.gp._leaderboardsService.publishRecord(e);
                            t.done(n),
                            this._events.emit("publishRecord", n)
                        } catch (e) {
                            t.abort(e),
                            this._events.emit("error:publishRecord", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return t.ready
                    }
                    ))
                }
            }
            function He(e, t, n, i, r) {
                e.countOfPlayersAbove = (0,
                ze.q3)(e.players, (null == t ? void 0 : t.abovePlayers) || []),
                e.topPlayers = [...e.players],
                e.abovePlayers = [...(null == t ? void 0 : t.abovePlayers) || []],
                e.belowPlayers = [...(null == t ? void 0 : t.belowPlayers) || []],
                e.player = (null == t ? void 0 : t.player) || null,
                e.players = function(e, t, n, i, r, s, a) {
                    if (!i || !t || "none" === t)
                        return e;
                    if (e.some((e=>e.id === i.id && e.position === i.position)))
                        return e.map((e=>i.id === e.id ? i : e));
                    const o = e.length
                      , c = i.position - 1;
                    if (c > o) {
                        const t = e.findIndex((e=>e.id === i.id));
                        t >= 0 && e.forEach(((e,n)=>{
                            n >= t && (e.position -= 1)
                        }
                        ))
                    }
                    if (r && 0 !== r.length && c > n - 1 && (e = [...r, ...e]),
                    s && 0 !== s.length && c > n - 1 && (e = [...e, ...s]),
                    c < o)
                        e.splice(c, 0, i),
                        e.forEach(((e,t)=>{
                            t <= c || e.position++
                        }
                        )),
                        e.length > o && e.pop();
                    else
                        switch (t) {
                        case "first":
                            e.unshift(i);
                            break;
                        case "last":
                            e.push(i)
                        }
                    return e = [...new Set(e.map((e=>e.id)))].map((t=>e.find((e=>e.id === t)))),
                    a && (e = e.sort(((e,t)=>e.position - t.position))),
                    e
                }(e.players, (0,
                ze.oo)(n, i), (0,
                ze.wQ)(r, e.leaderboard), null == t ? void 0 : t.player, null == t ? void 0 : t.abovePlayers, null == t ? void 0 : t.belowPlayers, (0,
                ze.pY)(n))
            }
            Ke([Ye(500)], Ze.prototype, "open", null),
            Ke([Ye(500)], Ze.prototype, "openScoped", null),
            Ke([Ye(500)], Ze.prototype, "fetch", null),
            Ke([Ye(500)], Ze.prototype, "fetchScoped", null),
            Ke([Ye(500)], Ze.prototype, "fetchPlayerRating", null),
            Ke([Ye(500)], Ze.prototype, "fetchPlayerRatingScoped", null),
            Ke([Ye(500)], Ze.prototype, "publishRecord", null);
            var Xe = n(264);
            const Qe = []
              , et = e=>(Qe.push(e),
            ()=>{
                Qe.splice(Qe.indexOf(e), 1)
            }
            );
            let tt = performance.now();
            const nt = e=>{
                const t = e - tt;
                tt = e,
                Qe.forEach((e=>e(t))),
                requestAnimationFrame(nt)
            }
            ;
            requestAnimationFrame(nt);
            var it, rt, st, at, ot, ct, lt, ht, ut, dt, pt, ft, mt, vt = function(e, t, n, i) {
                var r, s = arguments.length, a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, i);
                else
                    for (var o = e.length - 1; o >= 0; o--)
                        (r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                return s > 3 && a && Object.defineProperty(t, n, a),
                a
            }, yt = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, gt = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, wt = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class bt extends Xe.Z {
                constructor(e={}, t, n, i, r, s) {
                    super(e, t),
                    this.playerAdapter = n,
                    this.gp = i,
                    it.add(this),
                    this.isLoggedIn = !1,
                    this.isLoggedInByPlatform = !1,
                    this.hasAnyCredentials = !1,
                    this.secretCode = "",
                    this.tempSecredCode = "",
                    this._hasFirstSync = !1,
                    this.isFirstRequest = !1,
                    this.credentials = "",
                    this.stats = {
                        activeDays: 0,
                        activeDaysConsecutive: 0,
                        playtimeAll: 0,
                        playtimeToday: 0
                    },
                    rt.set(this, {}),
                    st.set(this, ""),
                    at.set(this, void 0),
                    this.emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                    ot.set(this, void 0),
                    ct.set(this, (()=>{}
                    )),
                    ht.set(this, (function({silent: e=!0, override: t=!1}={}) {
                        return yt(this, void 0, void 0, (function*() {
                            this.gp.loader.inc();
                            const n = (0,
                            u._)();
                            this.gp._storage.savePlayer(this.toJSON()).catch(Me.kg.warn);
                            try {
                                let i;
                                if (e ? this._isRequredDataUpdate && (i = this.playerAdapter.getPlayer()) : i = this.playerAdapter.loginPlayer(this),
                                i) {
                                    const t = yield i.catch((e=>{
                                        if ("cancelled" === (null == e ? void 0 : e.message))
                                            throw e;
                                        return {
                                            name: "",
                                            photoLarge: ""
                                        }
                                    }
                                    ));
                                    t.name && !this.get("name") && (this.name = t.name),
                                    this.name && this.emailRegex.test(this.name) && (this.name = this.name.replace(/@.*/, "")),
                                    t.photoLarge && this._isRequredAvatarUpdate && (this.avatar = t.photoLarge),
                                    e || (yield wt(this, it, "m", lt).call(this))
                                }
                                const r = yield this.gp._playerService.sync(Object.assign({
                                    override: t,
                                    playerState: this.toJSON()
                                }, wt(this, at, "f").export()), {
                                    withToken: this.isFirstRequest
                                });
                                switch (r.__typename) {
                                case "PlayerSyncConflict":
                                    {
                                        this.gp.loader.dec();
                                        const t = r;
                                        yield this.gp.loadOverlay();
                                        const i = yield this.gp.overlay.pickPlayerOnConflict(t);
                                        this.gp.loader.inc(),
                                        this.has("name") && !i.name && (i.name = this.get("name")),
                                        this.has("avatar") && !i.avatar && (i.avatar = this.get("avatar"));
                                        const s = yield this.gp._playerService.sync(Object.assign({
                                            playerState: i,
                                            override: !0
                                        }, wt(this, at, "f").export()), {
                                            withToken: this.isFirstRequest
                                        });
                                        if ("Player" !== s.__typename)
                                            return void n.abort();
                                        e || wt(this, it, "m", ft).call(this, ""),
                                        this.gp.overlay.close(),
                                        wt(this, it, "m", dt).call(this, s),
                                        n.done(),
                                        yield wt(this, it, "m", pt).call(this, s.state);
                                        break
                                    }
                                case "Player":
                                    {
                                        const {state: t} = r;
                                        e || wt(this, it, "m", ft).call(this, ""),
                                        wt(this, it, "m", dt).call(this, r),
                                        n.done(),
                                        yield wt(this, it, "m", pt).call(this, t),
                                        this.playerAdapter.publishRecord(t);
                                        break
                                    }
                                }
                            } catch (e) {
                                n.abort(e)
                            } finally {
                                this._hasFirstSync = !0,
                                this.gp.loader.dec()
                            }
                            return n.ready.then((()=>this._events.emit("sync", !0))).catch((()=>this._events.emit("sync", !1))),
                            n.ready
                        }
                        ))
                    }
                    )),
                    ut.set(this, (function() {
                        return yt(this, void 0, void 0, (function*() {
                            this.gp.loader.inc();
                            try {
                                const e = yield this.gp._playerService.getPlayer({
                                    withToken: !0
                                });
                                wt(this, it, "m", dt).call(this, e),
                                yield wt(this, it, "m", pt).call(this, e.state),
                                this._events.emit("load", !0)
                            } catch (e) {
                                Me.kg.error(e),
                                this._events.emit("load", !1)
                            } finally {
                                this.gp.loader.dec()
                            }
                        }
                        ))
                    }
                    ));
                    const a = (0,
                    u._)();
                    this.ready = a.ready,
                    gt(this, ot, s, "f"),
                    gt(this, at, r, "f"),
                    r.on("syncPlayer", (()=>{
                        this.ready.then((()=>this.sync().finally((()=>r.commitSyncPlayer()))))
                    }
                    )),
                    wt(this, it, "m", lt).call(this).finally((()=>this._init(a)))
                }
                get avatar() {
                    return this.get("avatar") || this.gp.generateAvatar(this.id, 64)
                }
                set avatar(e) {
                    this.set("avatar", e)
                }
                get _isRequredDataUpdate() {
                    return !this.get("name") || this._isRequredAvatarUpdate
                }
                get _isRequredAvatarUpdate() {
                    const e = this.get("avatar");
                    return !e || !this._hasFirstSync && this.playerAdapter.isPlatformAvatar(e)
                }
                get _authInfo() {
                    return Object.assign(Object.assign({}, wt(this, rt, "f")), {
                        secretCode: this.secretCode || wt(this, st, "f")
                    })
                }
                get _isAuthorizedAtPlatform() {
                    return this.playerAdapter.isAuthorizedAtPlatform
                }
                get(e) {
                    return "secretCode" === e ? this.secretCode || wt(this, st, "f") : "credentials" === e ? this.credentials || this.playerAdapter.userId : super.get(e)
                }
                _init(e) {
                    return yt(this, void 0, void 0, (function*() {
                        Promise.all([this.gp._storage.loadPlayer(), this.gp._storage.loadSecretCode(), this.gp.ready]).then((([t,n])=>{
                            this.fromJSON(t || {}),
                            gt(this, st, (null == t ? void 0 : t.secretCode) || "", "f"),
                            this.secretCode = n,
                            wt(this, ot, "f").call(this, this._authInfo),
                            this.isFirstRequest = !0,
                            (this.id ? wt(this, ut, "f").call(this) : wt(this, ht, "f").call(this)).finally((()=>yt(this, void 0, void 0, (function*() {
                                this.isFirstRequest = !1,
                                this.isLoggedInByPlatform && (yield wt(this, at, "f").syncPurchases()),
                                e.done(),
                                this._events.emit("ready")
                            }
                            ))))
                        }
                        ))
                    }
                    ))
                }
                fetchFields() {
                    return yt(this, void 0, void 0, (function*() {
                        try {
                            this.fields = (yield this.gp._playerService.fetchFields()).items,
                            this._events.emit("fetchFields", !0)
                        } catch (e) {
                            this._events.emit("fetchFields", !1)
                        }
                    }
                    ))
                }
                sync(e={}) {
                    return yt(this, void 0, void 0, (function*() {
                        return wt(this, ht, "f").call(this, e)
                    }
                    ))
                }
                load() {
                    return yt(this, void 0, void 0, (function*() {
                        return wt(this, ut, "f").call(this)
                    }
                    ))
                }
                login() {
                    return yt(this, void 0, void 0, (function*() {
                        if (this.gp.platform._hasAuthModal)
                            return yield this.playerAdapter.loginPlayer(this),
                            void (yield wt(this, ht, "f").call(this, {
                                silent: !1
                            }).then((()=>this._events.emit("login", !0))).catch((e=>{
                                Me.kg.error(e),
                                this._events.emit("login", !1)
                            }
                            )));
                        if (this.gp.platform.hasIntegratedAuth || this.gp.platform.isSecretCodeAuthAvailable)
                            try {
                                yield this.gp.loadOverlay();
                                const {type: e, secretCode: t} = yield this.gp.overlay.login();
                                switch (e) {
                                case "PLATFORM_AUTH":
                                    yield wt(this, ht, "f").call(this, {
                                        silent: !1
                                    }).then((()=>this._events.emit("login", !0))).catch((e=>{
                                        Me.kg.error(e),
                                        this._events.emit("login", !1)
                                    }
                                    ));
                                    break;
                                case "SECRET_KEY_AUTH_LOGIN":
                                    wt(this, it, "m", ft).call(this, t),
                                    yield wt(this, ut, "f").call(this).then((()=>this._events.emit("login", !0))).catch((e=>{
                                        Me.kg.error(e),
                                        this._events.emit("login", !1)
                                    }
                                    ))
                                }
                                this.gp.overlay.close()
                            } catch (e) {
                                Me.kg.error(e),
                                this._events.emit("login", !1)
                            }
                        else
                            this._events.emit("login", !1)
                    }
                    ))
                }
            }
            rt = new WeakMap,
            st = new WeakMap,
            at = new WeakMap,
            ot = new WeakMap,
            ct = new WeakMap,
            ht = new WeakMap,
            ut = new WeakMap,
            it = new WeakSet,
            lt = function() {
                return yt(this, void 0, void 0, (function*() {
                    const {platformData: e, key: t} = yield this.playerAdapter.getPlayerContext().catch((e=>(Me.kg.error(e),
                    {
                        platformData: null,
                        key: ""
                    })));
                    gt(this, rt, e || {}, "f"),
                    wt(this, ot, "f").call(this, this._authInfo);
                    const n = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},${t}`;
                    if (null == e ? void 0 : e.savedState) {
                        Me.kg.info("found saved state...");
                        const e = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},null`
                          , [t] = yield this.gp._storage.extractFromContext(e);
                        t && (this.fromJSON(t),
                        yield wt(this, ht, "f").call(this),
                        yield this.gp._storage.copyFromContext(n, e))
                    }
                    if (this.gp.platform.type === a.z.SMARTMARKET) {
                        const e = `,SBER_MARKET,${this.gp.isDev ? "d" : "p"},`
                          , [t] = yield this.gp._storage.extractFromContext(e);
                        t && (delete t.platformType,
                        this.fromJSON(t),
                        yield wt(this, ht, "f").call(this),
                        yield this.gp._storage.clearContext(e))
                    }
                    if ([a.z.POKI, a.z.VK_PLAY, a.z.CRAZY_GAMES, a.z.WG_PLAYGROUND, a.z.BEELINE, a.z.KONGREGATE, a.z.GOOGLE_PLAY].includes(this.gp.platform.type)) {
                        const e = `,NONE,${this.gp.isDev ? "d" : "p"},`
                          , [t] = yield this.gp._storage.extractFromContext(n);
                        let i = !t;
                        if (t && (this.fromJSON(t),
                        this.isStub && (i = !0)),
                        i) {
                            const [t] = yield this.gp._storage.extractFromContext(e);
                            t && (delete t.platformType,
                            delete t.secretCode,
                            delete t.credentials,
                            t.id = this.id,
                            this.fromJSON(t),
                            this.gp._storage.setContext(n),
                            yield wt(this, ht, "f").call(this))
                        }
                    }
                    if (!this.gp._storage.isEmptyOnBoot && this.gp._storage.isEmptyContext()) {
                        Me.kg.info("Applying migration...");
                        const [e,t] = yield this.gp._storage.migrateToContext(n);
                        this.secretCode = t,
                        this.fromJSON(e),
                        gt(this, st, e.secretCode, "f"),
                        wt(this, ot, "f").call(this, this._authInfo),
                        yield wt(this, ht, "f").call(this)
                    }
                    this.gp._storage.setContext(n)
                }
                ))
            }
            ,
            dt = function(e) {
                return yt(this, void 0, void 0, (function*() {
                    this._firstReqHash = e.firstReqHash,
                    this.stats = e.stats,
                    wt(this, it, "m", mt).call(this, e.token),
                    this.fromJSON(e.state),
                    gt(this, st, e.state.secretCode, "f"),
                    wt(this, ot, "f").call(this, this._authInfo),
                    this.gp._storage.savePlayer(e.state);
                    const t = Date.parse(e.sessionStart)
                      , n = t > 0 ? Date.parse(this.gp.serverTime) - t : 0;
                    let i = this.stats.playtimeAll + n / 1e3
                      , r = this.stats.playtimeToday + n / 1e3;
                    wt(this, ct, "f").call(this),
                    gt(this, ct, et((e=>{
                        i += e / 1e3,
                        r += e / 1e3,
                        this.stats.playtimeAll = Math.floor(i),
                        this.stats.playtimeToday = Math.floor(r)
                    }
                    )), "f"),
                    wt(this, at, "f").reset(),
                    wt(this, at, "f").markTriggersActivated(e.rewardsData.activatedTriggersNow),
                    wt(this, at, "f").markTriggersClaimed(e.rewardsData.claimedTriggersNow),
                    wt(this, at, "f").markRewardsGiven(e.rewardsData.givenRewards),
                    wt(this, at, "f").markAchievementsUnlocked(e.rewardsData.givenAchievements),
                    wt(this, at, "f").markPurchasesGiven(e.rewardsData.givenProducts),
                    wt(this, at, "f").markSchedulersDaysClaimed(e.rewardsData.claimedSchedulersDaysNow),
                    wt(this, at, "f").setPlayerSegments(e.segments, e.newSegments, e.leftSegments),
                    wt(this, at, "f").setAchievementsList(e.achievementsList),
                    wt(this, at, "f").setPurchasedList(e.purchasesListV2),
                    wt(this, at, "f").setRewardsList(e.rewards),
                    wt(this, at, "f").setTriggersList(e.triggers),
                    wt(this, at, "f").setPlayerSchedulersList(e.playerSchedulers),
                    wt(this, at, "f").setPlayerEventsList(e.playerEvents),
                    wt(this, at, "f").setExperiments(e.experiments)
                }
                ))
            }
            ,
            pt = function(e) {
                return yt(this, void 0, void 0, (function*() {
                    this.isStub ? (this.tempSecredCode = e.secretCode,
                    wt(this, it, "m", ft).call(this, e.secretCode)) : this.tempSecredCode && this.tempSecredCode === e.secretCode && (wt(this, it, "m", ft).call(this, ""),
                    this.tempSecredCode = ""),
                    this.isLoggedInByPlatform = this.playerAdapter.hasCredetials,
                    this.isLoggedIn = this.isLoggedInByPlatform,
                    this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode,
                    this.secretCode && this.secretCode != e.secretCode && wt(this, it, "m", ft).call(this, e.secretCode),
                    this.hasAnyCredentials || (wt(this, it, "m", ft).call(this, e.secretCode),
                    this.hasAnyCredentials = !0)
                }
                ))
            }
            ,
            ft = function(e) {
                this.secretCode = e,
                this.gp._storage.saveSecretCode(this.secretCode),
                wt(this, ot, "f").call(this, this._authInfo)
            }
            ,
            mt = function(e) {
                e && this.gp.channels._connect(e)
            }
            ,
            vt([Ye(300)], bt.prototype, "fetchFields", null),
            vt([Ye(300)], bt.prototype, "sync", null),
            vt([Ye(300)], bt.prototype, "load", null);
            class Et extends Be.Z {
                constructor() {
                    super(),
                    document.documentElement.addEventListener("fullscreenchange", (()=>{
                        let e = this.isEnabled;
                        this._events.emit("change", e),
                        this._events.emit(e ? "open" : "close")
                    }
                    ))
                }
                get isEnabled() {
                    return Boolean(document.fullscreenElement || document.webkitFullscreenElement)
                }
                open() {
                    this.isEnabled || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen())
                }
                close() {
                    this.isEnabled && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                }
                toggle() {
                    this.isEnabled ? this.close() : this.open()
                }
            }
            var Pt, _t = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            };
            class Tt {
                constructor() {
                    this.counters = [],
                    this.visitParams = {},
                    this._experimentsVisitParams = {},
                    this._segmentsVisitParams = {},
                    Pt.set(this, 0)
                }
                addCounter(e) {
                    return t = this,
                    n = void 0,
                    r = function*() {
                        this.counters.push(e)
                    }
                    ,
                    new ((i = void 0) || (i = Promise))((function(e, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value,
                            n instanceof i ? n : new i((function(e) {
                                e(n)
                            }
                            ))).then(a, o)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }
                    ));
                    var t, n, i, r
                }
                hit(e) {
                    this.counters.forEach((t=>t.hit(e)))
                }
                goal(e, t) {
                    this.counters.forEach((n=>n.goal(e, t)))
                }
                setVisitParams(e) {
                    this.visitParams = e,
                    function(e, t, n, i) {
                        if ("a" === n && !i)
                            throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e))
                            throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    }(this, Pt, "f") || _t(this, Pt, window.setTimeout((()=>{
                        _t(this, Pt, 0, "f");
                        const e = Object.assign(Object.assign(Object.assign({}, this._experimentsVisitParams), this._segmentsVisitParams), this.visitParams);
                        this.counters.forEach((t=>t.setVisitParams(e)))
                    }
                    ), 100), "f")
                }
            }
            Pt = new WeakMap;
            var It = n(4917)
              , St = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class At {
                constructor({counterId: e}) {
                    this.visitParams = {},
                    this.counterId = e;
                    const t = window;
                    t.ym = t.ym || function() {
                        (t.ym.a = t.ym.a || []).push(arguments),
                        t.ym.l = Date.now()
                    }
                    ,
                    t.ym(e, "init", {
                        accurateTrackBounce: !0
                    }),
                    this.ym = window.ym
                  
                }
                hit(e) {
                    return St(this, void 0, void 0, (function*() {
                        this.ym(this.counterId, "hit", e, {
                            params: this.visitParams
                        })
                    }
                    ))
                }
                goal(e, t) {
                    return St(this, void 0, void 0, (function*() {
                        this.ym(this.counterId, "reachGoal", t ? `${e}_${t}` : e, this.visitParams)
                    }
                    ))
                }
                setVisitParams(e) {
                    this.visitParams = e,
                    this.ym(this.counterId, "params", e)
                }
            }
            var kt = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class Ot {
                constructor({counterId: e}) {
                    this.visitParams = {},
                    this.counterId = e;
                    const t = window;
                    t.dataLayer = t.dataLayer || [],
                    t.gtag = function() {
                        t.dataLayer.push(arguments)
                    }
                    ,
                    this.gtag("js", new Date),
                    this.gtag("config", e, {
                        send_page_view: !1
                    }),
                    (0,
                    It.Z)({
                        src: `//www.googletagmanager.com/gtag/js?id=${e}`
                    })
                }
                get gtag() {
                    return window.gtag
                }
                hit(e) {
                    return kt(this, void 0, void 0, (function*() {
                        this.gtag("event", "page_view", {
                            page_location: e,
                            send_to: this.counterId
                        })
                    }
                    ))
                }
                goal(e, t) {
                    return kt(this, void 0, void 0, (function*() {
                        this.gtag("event", e, t ? Object.assign(Object.assign({}, this.visitParams), {
                            value: t
                        }) : Object.assign({}, this.visitParams))
                    }
                    ))
                }
                setVisitParams(e) {
                    this.visitParams = e
                }
            }
            var Ct, Rt, Nt, xt = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, Dt = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class Mt extends Be.Z {
                constructor(e, t, n) {
                    super(),
                    this.adapter = e,
                    this.gp = t,
                    this.config = n,
                    Ct.add(this)
                }
                get isSupportsShare() {
                    return this.adapter.isSupportsShare
                }
                get isSupportsNativeShare() {
                    return this.adapter.isSupportsNativeShare
                }
                get isSupportsNativePosts() {
                    return this.adapter.isSupportsNativePosts
                }
                get isSupportsNativeInvite() {
                    return this.adapter.isSupportsNativeInvite
                }
                get isSupportShareParams() {
                    return this.adapter.isSupportShareParams
                }
                get isSupportsNativeCommunityJoin() {
                    return this.adapter.isSupportsNativeCommunityJoin
                }
                get canJoinCommunity() {
                    return this.adapter.canJoinCommunity && !!this.communityLink
                }
                get communityLink() {
                    return this.adapter.getCommunityLink(Dt(this, Ct, "a", Nt))
                }
                get shareParams() {
                    return this.adapter.shareParams || {}
                }
                _getShareOptions(e) {
                    return xt(this, void 0, void 0, (function*() {
                        return yield this.gp.app.requestGameUrl(),
                        {
                            text: e.text || this.gp.app.title,
                            image: e.image || "",
                            url: e.url || this.gp.app.url
                        }
                    }
                    ))
                }
                _shareByOverlay(e, t) {
                    var n;
                    return xt(this, void 0, void 0, (function*() {
                        if (this.gp.isMobile)
                            try {
                                const e = yield this._getShareOptions(t)
                                  , i = Object.assign({}, e);
                                if (e.image) {
                                    const t = yield fetch(e.image).then((e=>e.blob()));
                                    i.files = [new File([t],"image.png",{
                                        type: t.type,
                                        lastModified: (new Date).getTime()
                                    })]
                                }
                                const r = window.navigator;
                                if (null === (n = r.canShare) || void 0 === n ? void 0 : n.call(r, i))
                                    return r.share(i)
                            } catch (e) {
                                Me.kg.warn(e)
                            }
                        return yield this.gp.loadOverlay(),
                        this.gp.overlay.share(e, yield this._getShareOptions(t))
                    }
                    ))
                }
                share(e={}) {
                    return xt(this, void 0, void 0, (function*() {
                        if (!this.isSupportsShare)
                            return this._events.emit("share", !1),
                            !1;
                        const t = this.isSupportsNativeShare ? this.adapter.share(yield this._getShareOptions(e)) : this._shareByOverlay("share", e)
                          , n = yield t.catch((()=>!1));
                        return this._events.emit("share", n),
                        n
                    }
                    ))
                }
                post(e={}) {
                    return xt(this, void 0, void 0, (function*() {
                        if (!this.isSupportsShare)
                            return this._events.emit("post", !1),
                            !1;
                        const t = this.isSupportsNativePosts ? this.adapter.post(yield this._getShareOptions(e)) : this._shareByOverlay("post", e)
                          , n = yield t.catch((()=>!1));
                        return this._events.emit("post", n),
                        n
                    }
                    ))
                }
                invite(e={}) {
                    return xt(this, void 0, void 0, (function*() {
                        if (!this.isSupportsShare)
                            return this._events.emit("invite", !1),
                            !1;
                        const t = this.isSupportsNativeInvite ? this.adapter.invite(yield this._getShareOptions(e)) : this._shareByOverlay("invite", e)
                          , n = yield t.catch((()=>!1));
                        return this._events.emit("invite", n),
                        n
                    }
                    ))
                }
                joinCommunity() {
                    return xt(this, void 0, void 0, (function*() {
                        if (!this.canJoinCommunity)
                            return this._events.emit("joinCommunity", !1),
                            !1;
                        let e = !0;
                        return this.isSupportsNativeCommunityJoin && (e = yield this.adapter.joinCommunity(Dt(this, Ct, "a", Rt))),
                        window.open(this.communityLink, "_blank"),
                        this._events.emit("joinCommunity", e),
                        e
                    }
                    ))
                }
                addShareParamsToUrl(e, t={}) {
                    return this.adapter.addShareParamsToUrl(e, t)
                }
                makeShareUrl(e={}) {
                    return !!this.isSupportShareParams && (0 === Object.keys(e).length ? this.gp.app.url : this.adapter.makeShareUrl(e))
                }
                getShareParam(e) {
                    var t;
                    return !!this.isSupportShareParams && (null !== (t = this.adapter.getShareParam(e)) && void 0 !== t ? t : "")
                }
            }
            Ct = new WeakSet,
            Rt = function() {
                return this.config.platformConfig.communityLinks[this.gp.language] || this.config.platformConfig.communityLinks.en || ""
            }
            ,
            Nt = function() {
                return Dt(this, Ct, "a", Rt) || this.config.config.communityLinks[this.gp.language] || this.config.config.communityLinks.en || ""
            }
            ;
            var Lt = n(2954)
              , jt = n(3607)
              , $t = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            var Ft, Ut = n(584), Bt = n(3080);
            function Gt(e) {
                return new Promise((function(t, n) {
                    e.oncomplete = e.onsuccess = function() {
                        return t(e.result)
                    }
                    ,
                    e.onabort = e.onerror = function() {
                        return n(e.error)
                    }
                }
                ))
            }
            function Wt(e, t) {
                var n = indexedDB.open(e);
                n.onupgradeneeded = function() {
                    return n.result.createObjectStore(t)
                }
                ;
                var i = Gt(n);
                return function(e, n) {
                    return i.then((function(i) {
                        return n(i.transaction(t, e).objectStore(t))
                    }
                    ))
                }
            }
            function qt() {
                return Ft || (Ft = Wt("keyval-store", "keyval")),
                Ft
            }
            class Vt {
                constructor(e) {
                    this.projectId = e,
                    this.isLocal = !0;
                    try {
                        this.store = Wt(`gs-db-project-${this.projectId}`, "storage")
                    } catch (e) {
                        Me.kg.error(e)
                    }
                }
                set(e, t) {
                    return this.store ? function(e, t) {
                        return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qt())("readwrite", (function(n) {
                            return n.put(t, e),
                            Gt(n.transaction)
                        }
                        ))
                    }(e, t, this.store).catch((()=>null)) : Promise.resolve()
                }
                get(e) {
                    if (!this.store)
                        return Promise.resolve(null);
                    const t = (0,
                    u._)({
                        timeout: 2e3
                    });
                    return function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt())("readonly", (function(t) {
                            return Gt(t.get(e))
                        }
                        ))
                    }(e, this.store).then(t.done).catch((()=>t.done(null))),
                    t.ready
                }
            }
            var Yt, zt = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, Kt = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class Jt {
                constructor(e) {
                    this.projectId = e,
                    Yt.set(this, void 0),
                    this.isLocal = !0;
                    try {
                        !function(e, t, n, i, r) {
                            if ("m" === i)
                                throw new TypeError("Private method is not writable");
                            if ("a" === i && !r)
                                throw new TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                                throw new TypeError("Cannot write private member to an object whose class did not declare it");
                            "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                        }(this, Yt, window.localStorage, "f")
                    } catch (e) {}
                }
                getKey(e) {
                    return `gs-db-project-${this.projectId}-${e}`
                }
                set(e, t) {
                    return zt(this, void 0, void 0, (function*() {
                        Kt(this, Yt, "f").setItem(this.getKey(e), JSON.stringify(t))
                    }
                    ))
                }
                get(e) {
                    return zt(this, void 0, void 0, (function*() {
                        try {
                            return JSON.parse(Kt(this, Yt, "f").getItem(this.getKey(e)) || "null")
                        } catch (e) {}
                    }
                    ))
                }
            }
            Yt = new WeakMap;
            var Zt, Ht = n(9631), Xt = n(4687);
            class Qt {
                constructor(e) {
                    Zt.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Zt, e, "f")
                }
                fetch({id: e, tag: t, urlFrom: n}) {
                    return function(e, t, n, i) {
                        if ("a" === n && !i)
                            throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e))
                            throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    }(this, Zt, "f").fetch("\nfragment project on Project {\n    id\n    url(from: $url)\n    name(lang: $lang)\n    description(lang: $lang)\n    assets {\n        icon {\n            resources { src(w: 256, h: 256, crop: true) }\n        }\n    }\n}\nquery ($input: FetchPlayerGamesCollectionInput!, $lang: Lang, $url: String) {\n    result: FetchPlayerGamesCollection(input: $input) {\n        __typename\n        ... on GamesCollection {\n            id\n            tag\n            name(lang: $lang)\n            description(lang: $lang)\n            games { ...project }\n        }\n        ... on Problem { message }\n    }\n}", {
                        id: e,
                        tag: t,
                        urlFrom: n
                    }, {
                        url: n
                    })
                }
            }
            Zt = new WeakMap;
            var en = n(1437)
              , tn = n(4835)
              , nn = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            const rn = e=>{
                var t;
                return (null === (t = null == e ? void 0 : e.resources[0]) || void 0 === t ? void 0 : t.src) || ""
            }
              , sn = e=>{
                var {assets: t} = e
                  , n = function(e, t) {
                    var n = {};
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                            t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                    }
                    return n
                }(e, ["assets"]);
                return Object.assign(Object.assign({}, n), {
                    icon: rn(t.icon)
                })
            }
              , an = [a.z.YANDEX, a.z.VK, a.z.OK, a.z.GAMEPIX];
            class on extends Be.Z {
                constructor(e) {
                    super(),
                    this.gp = e
                }
                get isAvailable() {
                    return this.gp.platform.isExternalLinksAllowed || an.includes(this.gp.platform.type)
                }
                open({id: e, tag: t, shareParams: n}={
                    tag: "ALL",
                    shareParams: {}
                }) {
                    return nn(this, void 0, void 0, (function*() {
                        if (this.isAvailable) {
                            this.gp.loader.inc();
                            try {
                                const [i] = yield Promise.all([this.fetch({
                                    id: e,
                                    tag: t,
                                    shareParams: n
                                }), this.gp.loadOverlay(), (0,
                                en.p)(tn.Z.app.trophy).catch(Me.kg.error)]);
                                this.gp.loader.dec(),
                                i.games.length > 0 && (this._events.emit("open"),
                                yield this.gp.overlay.openGamesCollections(i).catch(Me.kg.error),
                                this._events.emit("close"))
                            } catch (e) {
                                this.gp.loader.dec(),
                                Me.kg.error(e)
                            }
                        } else
                            Me.kg.warn(`Not available on ${this.gp.platform.type}`)
                    }
                    ))
                }
                fetch({id: e, tag: t="ALL", shareParams: n={}}={
                    tag: "ALL",
                    shareParams: {}
                }) {
                    return nn(this, void 0, void 0, (function*() {
                        if (!this.isAvailable)
                            return void Me.kg.warn(`Not available on ${this.gp.platform.type}`);
                        const i = (0,
                        u._)();
                        this.gp.loader.inc();
                        try {
                            const r = yield this.gp._gamesCollectionsService.fetch({
                                id: e,
                                tag: t,
                                urlFrom: this.gp.app.url
                            });
                            if (!r)
                                throw new Error("can't fetch GamesCollections list");
                            const s = Object.assign(Object.assign({}, r), {
                                games: r.games.filter((e=>e.url)).map(sn)
                            });
                            Object.keys(n).length > 0 && (s.games = s.games.map((e=>Object.assign(Object.assign({}, e), {
                                url: this.gp.socials.addShareParamsToUrl(e.url, n)
                            })))),
                            s.games || Me.kg.warn("empty games collection"),
                            i.done(s),
                            this._events.emit("fetch", s)
                        } catch (e) {
                            i.abort(e),
                            this._events.emit("error:fetch")
                        } finally {
                            this.gp.loader.dec()
                        }
                        return i.ready
                    }
                    ))
                }
            }
            var cn, ln, hn, un = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, dn = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class pn {
                constructor(e) {
                    this.queryBuilder = e,
                    cn.set(this, {}),
                    ln.set(this, (function(e={}, t) {
                        return un(this, void 0, void 0, (function*() {
                            const n = (0,
                            u._)();
                            e.limit = e.limit || 10;
                            try {
                                const i = yield t(e)
                                  , r = i.length === e.limit;
                                dn(this, cn, "f")[this.queryBuilder(e)] = Object.assign(Object.assign({}, e), {
                                    canLoadMore: r
                                }),
                                n.done({
                                    items: i,
                                    canLoadMore: r
                                })
                            } catch (e) {
                                n.abort(e)
                            }
                            return n.ready
                        }
                        ))
                    }
                    )),
                    hn.set(this, (function(e={}, t) {
                        return un(this, void 0, void 0, (function*() {
                            const n = this.queryBuilder(e)
                              , i = dn(this, cn, "f")[n];
                            if (!i)
                                return yield this.fetch(e, t);
                            if (!i.canLoadMore)
                                return {
                                    items: [],
                                    canLoadMore: !1
                                };
                            const r = (0,
                            u._)()
                              , s = (i.offset || 0) + (i.limit || 0);
                            i.limit = e.limit || i.limit;
                            const a = Object.assign({}, dn(this, cn, "f")[n])
                              , o = Object.assign(Object.assign({}, i), {
                                offset: s
                            });
                            dn(this, cn, "f")[n] = o;
                            try {
                                const e = yield t(o)
                                  , i = e.length === o.limit;
                                dn(this, cn, "f")[n].canLoadMore = i,
                                r.done({
                                    items: e,
                                    canLoadMore: i
                                })
                            } catch (e) {
                                dn(this, cn, "f")[n] = a,
                                r.abort(e)
                            }
                            return r.ready
                        }
                        ))
                    }
                    ))
                }
                fetch(e={}, t) {
                    return dn(this, ln, "f").call(this, e, t)
                }
                fetchMore(e={}, t) {
                    return un(this, void 0, void 0, (function*() {
                        return dn(this, hn, "f").call(this, e, t)
                    }
                    ))
                }
            }
            cn = new WeakMap,
            ln = new WeakMap,
            hn = new WeakMap;
            var fn, mn, vn, yn, gn, wn, bn, En, Pn, _n, Tn = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, In = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }, Sn = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                }
                return n
            };
            class An extends Be.Z {
                constructor(e, t) {
                    super(),
                    this.gp = e,
                    this._config = t,
                    fn.set(this, new pn((e=>["channels", (e.tags || []).join(","), e.search || "", (e.ids || []).join(","), e.onlyJoined || !1, e.onlyOwned || !1].join(":")))),
                    mn.set(this, new pn((e=>`channelsMembers:${e.channelId}`))),
                    vn.set(this, new pn((e=>`invites:${e.channelId}`))),
                    yn.set(this, new pn((e=>`channelsInvites:${e.channelId}`))),
                    gn.set(this, new pn((e=>"sentInvites"))),
                    wn.set(this, new pn((e=>`channelsJoinRequests:${e.channelId}`))),
                    bn.set(this, new pn((e=>"sentJoinRequests"))),
                    En.set(this, new pn((e=>`channelsJoinRequests:${e.channelId}:${(e.tags || []).join(",")}`))),
                    Pn.set(this, new pn((e=>`channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`))),
                    _n.set(this, new pn((e=>`channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`)))
                }
                get canBeOnline() {
                    return this._config.acl.canConnectOnline
                }
                get isMainChatEnabled() {
                    return this._config.project.enableMainChat && this.mainChatId > 0
                }
                get mainChatId() {
                    return this._config.project.mainChatId
                }
                _handleResponse(e, t) {
                    e.then((e=>this._events.emit(t, e))),
                    e.catch((e=>{
                        Me.kg.error(e),
                        this._events.emit(`error:${t}`, e)
                    }
                    ))
                }
                sendInvite(e) {
                    const t = this.gp._channelsService.invites.sendInvite(e);
                    return this._handleResponse(t, "sendInvite"),
                    t
                }
                cancelInvite(e) {
                    const t = this.gp._channelsService.invites.cancelInvite(e);
                    return this._handleResponse(t, "cancelInvite"),
                    t
                }
                acceptInvite(e) {
                    const t = this.gp._channelsService.invites.acceptInvite(e);
                    return this._handleResponse(t, "acceptInvite"),
                    t
                }
                rejectInvite(e) {
                    const t = this.gp._channelsService.invites.rejectInvite(e);
                    return this._handleResponse(t, "rejectInvite"),
                    t
                }
                join(e) {
                    const t = this.gp._channelsService.members.join(e);
                    return this._handleResponse(t, "join"),
                    t
                }
                leave(e) {
                    const t = this.gp._channelsService.members.leave(e);
                    return this._handleResponse(t, "leave"),
                    t
                }
                cancelJoin(e) {
                    const t = this.gp._channelsService.members.cancelJoin(e);
                    return this._handleResponse(t, "cancelJoin"),
                    t
                }
                acceptJoinRequest(e) {
                    const t = this.gp._channelsService.joinRequests.acceptJoinRequest(e);
                    return this._handleResponse(t, "acceptJoinRequest"),
                    t
                }
                rejectJoinRequest(e) {
                    const t = this.gp._channelsService.joinRequests.rejectJoinRequest(e);
                    return this._handleResponse(t, "rejectJoinRequest"),
                    t
                }
                fetchMessages(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, En, "f").fetch(e, (e=>this.gp._channelsService.messages.fetchMessages(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMessages"),
                        t
                    }
                    ))
                }
                fetchMoreMessages(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, En, "f").fetchMore(e, (e=>this.gp._channelsService.messages.fetchMessages(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreMessages"),
                        t
                    }
                    ))
                }
                fetchPersonalMessages(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, Pn, "f").fetch(e, (e=>this.gp._channelsService.messages.fetchPersonalMessages(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchPersonalMessages"),
                        t
                    }
                    ))
                }
                fetchMorePersonalMessages(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, Pn, "f").fetchMore(e, (e=>this.gp._channelsService.messages.fetchPersonalMessages(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMorePersonalMessages"),
                        t
                    }
                    ))
                }
                fetchFeedMessages(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, _n, "f").fetch(e, (e=>this.gp._channelsService.messages.fetchFeedMessages(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchFeedMessages"),
                        t
                    }
                    ))
                }
                fetchMoreFeedMessages(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, _n, "f").fetchMore(e, (e=>this.gp._channelsService.messages.fetchFeedMessages(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreFeedMessages"),
                        t
                    }
                    ))
                }
                sendMessage(e) {
                    const t = this.gp._channelsService.messages.sendMessage(e);
                    return this._handleResponse(t, "sendMessage"),
                    t
                }
                sendFeedMessage(e) {
                    const t = this.gp._channelsService.messages.sendFeedMessage(e);
                    return this._handleResponse(t, "sendMessage"),
                    t
                }
                sendPersonalMessage(e) {
                    const t = this.gp._channelsService.messages.sendPersonalMessage(e);
                    return this._handleResponse(t, "sendMessage"),
                    t
                }
                editMessage(e) {
                    const t = this.gp._channelsService.messages.editMessage(e);
                    return this._handleResponse(t, "editMessage"),
                    t
                }
                deleteMessage(e) {
                    const t = this.gp._channelsService.messages.deleteMessage(e);
                    return this._handleResponse(t, "deleteMessage"),
                    t
                }
                mute(e) {
                    var {seconds: t=0} = e;
                    const n = Sn(e, ["seconds"]);
                    if (t > 0) {
                        const e = new Date;
                        e.setSeconds(e.getSeconds() + t),
                        n.unmuteAt = e.toISOString()
                    }
                    const i = this.gp._channelsService.members.mute(n);
                    return this._handleResponse(i, "mute"),
                    i
                }
                unmute(e) {
                    const t = this.gp._channelsService.members.unmute(e);
                    return this._handleResponse(t, "unmute"),
                    t
                }
                fetchMembers(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, mn, "f").fetch(e, (e=>this.gp._channelsService.members.fetchMembers(e).then((e=>e.players))));
                        return this._handleResponse(t, "fetchMembers"),
                        t
                    }
                    ))
                }
                fetchMoreMembers(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, mn, "f").fetchMore(e, (e=>this.gp._channelsService.members.fetchMembers(e).then((e=>e.players))));
                        return this._handleResponse(t, "fetchMoreMembers"),
                        t
                    }
                    ))
                }
                fetchInvites(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, vn, "f").fetch(e, (e=>this.gp._channelsService.invites.fetchInvites(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchInvites"),
                        t
                    }
                    ))
                }
                fetchMoreInvites(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, vn, "f").fetchMore(e, (e=>this.gp._channelsService.invites.fetchInvites(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreInvites"),
                        t
                    }
                    ))
                }
                fetchChannelInvites(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, yn, "f").fetch(e, (e=>this.gp._channelsService.invites.fetchChannelInvites(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchChannelInvites"),
                        t
                    }
                    ))
                }
                fetchMoreChannelInvites(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, yn, "f").fetchMore(e, (e=>this.gp._channelsService.invites.fetchChannelInvites(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreChannelInvites"),
                        t
                    }
                    ))
                }
                fetchSentInvites(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, gn, "f").fetch(e, (e=>this.gp._channelsService.invites.fetchSentInvites(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchSentInvites"),
                        t
                    }
                    ))
                }
                fetchMoreSentInvites(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, gn, "f").fetchMore(e, (e=>this.gp._channelsService.invites.fetchSentInvites(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreSentInvites"),
                        t
                    }
                    ))
                }
                fetchJoinRequests(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, wn, "f").fetch(e, (e=>this.gp._channelsService.joinRequests.fetchJoinRequests(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchJoinRequests"),
                        t
                    }
                    ))
                }
                fetchMoreJoinRequests(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, wn, "f").fetchMore(e, (e=>this.gp._channelsService.joinRequests.fetchJoinRequests(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreJoinRequests"),
                        t
                    }
                    ))
                }
                fetchSentJoinRequests(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, bn, "f").fetch(e, (e=>this.gp._channelsService.joinRequests.fetchSentJoinRequests(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchSentJoinRequests"),
                        t
                    }
                    ))
                }
                fetchMoreSentJoinRequests(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = In(this, bn, "f").fetchMore(e, (e=>this.gp._channelsService.joinRequests.fetchSentJoinRequests(e).then((e=>e.items))));
                        return this._handleResponse(t, "fetchMoreSentJoinRequests"),
                        t
                    }
                    ))
                }
                kick(e) {
                    const t = this.gp._channelsService.members.kick(e);
                    return this._handleResponse(t, "kick"),
                    t
                }
                openChat({id: e, tags: t}={
                    id: 0,
                    tags: []
                }) {
                    return Tn(this, void 0, void 0, (function*() {
                        let n = e;
                        if (!e && this._config.project.enableMainChat && (n = this._config.project.mainChatId),
                        n) {
                            this.gp.loader.inc();
                            try {
                                const e = this.gp.loadOverlay()
                                  , i = yield this.fetchChannel({
                                    channelId: n
                                });
                                if (!(i.ownerId === this.gp.player.id ? i.ownerAcl : i.memberAcl).canViewMessages)
                                    throw Me.kg.error("access_denied"),
                                    Error("access_denied");
                                i.isJoined || (yield this.join({
                                    channelId: n
                                }),
                                i.membersCount += 1,
                                i.membersOnlineCount += 1,
                                i.isJoined = !0);
                                const [r] = yield Promise.all([this.fetchMessages({
                                    channelId: n,
                                    limit: 100,
                                    tags: t
                                }), e]);
                                this.gp.loader.dec(),
                                this._events.emit("openChat"),
                                yield this.openChatOverlay(i, r, t),
                                this._events.emit("closeChat")
                            } catch (e) {
                                this._events.emit("error:openChat", e),
                                this.gp.loader.dec(),
                                Me.kg.error(e)
                            }
                        } else
                            Me.kg.error("empty_channel_id")
                    }
                    ))
                }
                openPersonalChat({playerId: e, tags: t}={
                    playerId: 0,
                    tags: []
                }) {
                    return Tn(this, void 0, void 0, (function*() {
                        if (e) {
                            this.gp.loader.inc();
                            try {
                                const n = this.gp.loadOverlay()
                                  , i = yield this.fetchPersonalChannel({
                                    playerId: e
                                })
                                  , [r] = yield Promise.all([this.fetchPersonalMessages({
                                    playerId: e,
                                    limit: 100,
                                    tags: t
                                }), n]);
                                this.gp.loader.dec(),
                                this._events.emit("openChat"),
                                yield this.openChatOverlay(i, r, t),
                                this._events.emit("closeChat")
                            } catch (e) {
                                this._events.emit("error:openChat", e),
                                this.gp.loader.dec(),
                                Me.kg.error(e)
                            }
                        } else
                            Me.kg.error("empty_player_id")
                    }
                    ))
                }
                openFeed({playerId: e, tags: t}={
                    playerId: 0,
                    tags: []
                }) {
                    return Tn(this, void 0, void 0, (function*() {
                        if (e) {
                            this.gp.loader.inc();
                            try {
                                const n = this.gp.loadOverlay()
                                  , i = yield this.fetchFeedChannel({
                                    playerId: e
                                })
                                  , [r] = yield Promise.all([this.fetchFeedMessages({
                                    playerId: e,
                                    limit: 100,
                                    tags: t
                                }), n]);
                                this.gp.loader.dec(),
                                this._events.emit("openChat"),
                                yield this.openChatOverlay(i, r, t),
                                this._events.emit("closeChat")
                            } catch (e) {
                                this._events.emit("error:openFeed", e),
                                this.gp.loader.dec(),
                                Me.kg.error(e)
                            }
                        } else
                            Me.kg.error("empty_player_id")
                    }
                    ))
                }
                openChatOverlay(e, t, n) {
                    return Tn(this, void 0, void 0, (function*() {
                        const {playerId: i, activeOverlay: r} = this.processTags(e.tags, this.gp.player.id)
                          , s = i ? parseInt(i, 10) : this.gp.player.id
                          , a = {
                            playerId: s,
                            tags: n,
                            channelName: e.name,
                            channelType: r
                        };
                        if ("personal" === r || "feed" === r) {
                            const e = yield this.gp.players.fetch({
                                ids: [s]
                            })
                              , [t] = e.players;
                            if (!t)
                                throw "player_not_found";
                            a.channelName = t.state.name || null
                        }
                        yield this.gp.overlay.openChat(e, t, a)
                    }
                    ))
                }
                processTags(e, t) {
                    let n = "channel"
                      , i = "";
                    return e.forEach((e=>{
                        e.startsWith("@feed:") ? (n = "feed",
                        i = e.split(":").filter((e=>!isNaN(parseInt(e, 10)))).join("")) : e.startsWith("@personal:") && (n = "personal",
                        i = e.split(":").filter((e=>!isNaN(parseInt(e, 10)))).filter((e=>e !== t.toString())).join(""))
                    }
                    )),
                    {
                        playerId: i,
                        activeOverlay: n
                    }
                }
                fetchChannel(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = this.gp._channelsService.channels.fetchChannel(e);
                        return this._handleResponse(t, "fetchChannel"),
                        t
                    }
                    ))
                }
                fetchPersonalChannel(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = this.gp._channelsService.channels.fetchPersonalChannel(e);
                        return this._handleResponse(t, "fetchPersonalChannel"),
                        t
                    }
                    ))
                }
                fetchFeedChannel(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = this.gp._channelsService.channels.fetchFeedChannel(e);
                        return this._handleResponse(t, "fetchFeedChannel"),
                        t
                    }
                    ))
                }
                fetchChannels(e) {
                    var {ids: t=[]} = e
                      , n = Sn(e, ["ids"]);
                    return Tn(this, void 0, void 0, (function*() {
                        const e = n;
                        (t = t.map((e=>Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                        const i = In(this, fn, "f").fetch(n, (e=>this.gp._channelsService.channels.fetchChannels(e).then((e=>e.items))));
                        return this._handleResponse(i, "fetchChannels"),
                        i
                    }
                    ))
                }
                fetchMoreChannels(e) {
                    var {ids: t=[]} = e
                      , n = Sn(e, ["ids"]);
                    return Tn(this, void 0, void 0, (function*() {
                        const e = n;
                        (t = null == t ? void 0 : t.map((e=>Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                        const i = In(this, fn, "f").fetchMore(n, (e=>this.gp._channelsService.channels.fetchChannels(e).then((e=>e.items))));
                        return this._handleResponse(i, "fetchMoreChannels"),
                        i
                    }
                    ))
                }
                createChannel(e) {
                    const t = this.gp._channelsService.channels.createChannel(e);
                    return this._handleResponse(t, "createChannel"),
                    t
                }
                updateChannel(e) {
                    const t = this.gp._channelsService.channels.updateChannel(e);
                    return this._handleResponse(t, "updateChannel"),
                    t
                }
                deleteChannel(e) {
                    const t = this.gp._channelsService.channels.deleteChannel(e);
                    return this._handleResponse(t, "deleteChannel"),
                    t
                }
                _connect(e) {
                    return Tn(this, void 0, void 0, (function*() {
                        const t = ()=>this.gp._channelsService.ping(e);
                        if (window.setInterval(t, 3e4),
                        t(),
                        !this.canBeOnline)
                            return;
                        const i = new TextDecoder;
                        (yield function(e, t, i, r) {
                            return s = this,
                            a = void 0,
                            c = function*() {
                                const t = [{
                                    transport: "websocket",
                                    endpoint: "wss://ws.eponesh.com/connection/websocket?format=protobuf"
                                }, {
                                    transport: "http_stream",
                                    endpoint: "https://ws.eponesh.com/connection/http_stream?format=protobuf"
                                }, {
                                    transport: "sse",
                                    endpoint: "https://ws.eponesh.com/connection/sse?format=protobuf"
                                }]
                                  , {default: i} = yield n.e(72).then(n.bind(n, 9965));
                                return new i(t,{
                                    token: e,
                                    protocol: "protobuf",
                                    debug: !0
                                })
                            }
                            ,
                            new ((o = void 0) || (o = Promise))((function(e, t) {
                                function n(e) {
                                    try {
                                        r(c.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                function i(e) {
                                    try {
                                        r(c.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                function r(t) {
                                    var r;
                                    t.done ? e(t.value) : (r = t.value,
                                    r instanceof o ? r : new o((function(e) {
                                        e(r)
                                    }
                                    ))).then(n, i)
                                }
                                r((c = c.apply(s, a || [])).next())
                            }
                            ));
                            var s, a, o, c
                        }(e)).on("connected", (e=>{
                            console.info(`connected over ${e.transport}`)
                        }
                        )).on("connecting", (function(e) {
                            console.info(`connecting: ${e.code}, ${e.reason}`)
                        }
                        )).on("disconnected", (function(e) {
                            console.info(`disconnected: ${e.code}, ${e.reason}`)
                        }
                        )).on("publication", (e=>{
                            const t = JSON.parse(i.decode(e.data));
                            (null == t ? void 0 : t.type) && (this._events.emit("event", t),
                            this._events.emit(t.type, t.data))
                        }
                        )).connect()
                    }
                    ))
                }
            }
            fn = new WeakMap,
            mn = new WeakMap,
            vn = new WeakMap,
            yn = new WeakMap,
            gn = new WeakMap,
            wn = new WeakMap,
            bn = new WeakMap,
            En = new WeakMap,
            Pn = new WeakMap,
            _n = new WeakMap;
            var kn, On = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, Cn = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const Rn = `\n    ... on PlayersTop {\n        leaderboard {\n            id\n            tag\n            name(lang: $lang),\n            description(lang: $lang),\n            shareText(lang: $lang),\n            isAuthorizedOnly,\n            limit\n        }\n        players\n        fields { ${d.SX} }\n    }\n`
              , Nn = `\n    ... on PlayerTop {\n        player\n        abovePlayers\n        belowPlayers\n        fields { ${d.SX} }\n    }\n`
              , xn = `\n    ... on PlayerRecord {\n        record\n        fields { ${d.SX} }\n    }\n`
              , Dn = `query ($input: FetchTopInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchTop(input: $input) {${(0,
            p.Mn)(Rn)}}\n    playerResult: FetchPlayerRating(input: $input) @include(if: $withMe) {${(0,
            p.Mn)(Nn)}}\n}`
              , Mn = `query ($input: FetchTopInput!, $lang: Lang) {\n    result: FetchPlayerRating(input: $input) {${(0,
            p.Mn)(Nn)}}\n}`
              , Ln = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchPlayerTopScoped(input: $input) {${(0,
            p.Mn)(Rn)}}\n    playerResult: FetchPlayerRatingScoped(input: $input) @include(if: $withMe) {${(0,
            p.Mn)(Nn)}}\n}`
              , jn = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang) {\n    result: FetchPlayerRatingScoped(input: $input) {${(0,
            p.Mn)(Nn)}}\n}`
              , $n = `mutation ($input: PlayerPublishRecordInput!, $lang: Lang) {\n    result: PlayerPublishRecord(input: $input) {${(0,
            p.Mn)(xn)}}\n}`;
            class Fn {
                constructor(e) {
                    kn.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, kn, e, "f")
                }
                getRating({orderBy: e=["score"], includeFields: t=[], order: n="DESC", limit: i=10, withMe: r="none", showNearest: s}) {
                    return On(this, void 0, void 0, (function*() {
                        return Cn(this, kn, "f").fetchMany(Dn, {
                            orderBy: e,
                            order: n,
                            limit: i,
                            includeFields: t,
                            showNearest: s
                        }, {
                            withMe: "none" !== r
                        })
                    }
                    ))
                }
                getPlayerRating({orderBy: e=["score"], includeFields: t=[], order: n="DESC", limit: i=10, showNearest: r}) {
                    return On(this, void 0, void 0, (function*() {
                        return Cn(this, kn, "f").fetch(Mn, {
                            orderBy: e,
                            order: n,
                            limit: i,
                            includeFields: t,
                            showNearest: r
                        })
                    }
                    ))
                }
                getRatingVariant({id: e, tag: t, variant: n, includeFields: i=[], limit: r=10, withMe: s="none", order: a, showNearest: o}) {
                    return On(this, void 0, void 0, (function*() {
                        return Cn(this, kn, "f").fetchMany(Ln, {
                            id: e,
                            tag: t,
                            variant: n,
                            limit: r,
                            includeFields: i,
                            order: a,
                            showNearest: o
                        }, {
                            withMe: "none" !== s
                        })
                    }
                    ))
                }
                getPlayerRatingVariant({id: e, tag: t, variant: n, includeFields: i=[], limit: r=10, order: s, showNearest: a}) {
                    return On(this, void 0, void 0, (function*() {
                        return Cn(this, kn, "f").fetch(jn, {
                            id: e,
                            tag: t,
                            variant: n,
                            limit: r,
                            includeFields: i,
                            order: s,
                            showNearest: a
                        })
                    }
                    ))
                }
                publishRecord({id: e, tag: t, variant: n, record: i, override: r}) {
                    return On(this, void 0, void 0, (function*() {
                        return Cn(this, kn, "f").fetch($n, {
                            id: e,
                            tag: t,
                            variant: n,
                            record: i,
                            override: r
                        })
                    }
                    ))
                }
            }
            kn = new WeakMap;
            var Un;
            class Bn {
                constructor(e) {
                    Un.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Un, e, "f")
                }
                fetch({type: e, format: t}) {
                    return function(e, t, n, i) {
                        if ("a" === n && !i)
                            throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e))
                            throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    }(this, Un, "f").fetch("query($input: FetchPlayerDocumentInput!, $lang: Lang, $format: DocumentFormat) {\n    result: FetchPlayerDocument(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Document {\n            type\n            content(lang: $lang, format: $format)\n        }\n    }\n}", {
                        type: e
                    }, {
                        format: t
                    })
                }
            }
            Un = new WeakMap;
            var Gn = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class Wn extends Be.Z {
                constructor(e) {
                    super(),
                    this.gp = e
                }
                open({type: e}) {
                    return Gn(this, void 0, void 0, (function*() {
                        this.gp.loader.inc();
                        try {
                            const [t] = yield Promise.all([this.fetch({
                                type: e
                            }), this.gp.loadOverlay(), (0,
                            en.p)(tn.Z.app.trophy).catch(Me.kg.error)]);
                            this.gp.loader.dec(),
                            t ? (t.format = "HTML",
                            this._events.emit("open"),
                            yield this.gp.overlay.openDocument(t).catch(Me.kg.error),
                            this._events.emit("close")) : Me.kg.error(new Error("document not found"))
                        } catch (e) {
                            this.gp.loader.dec(),
                            Me.kg.error(e)
                        }
                    }
                    ))
                }
                fetch({type: e, format: t="HTML"}) {
                    return Gn(this, void 0, void 0, (function*() {
                        const n = (0,
                        u._)();
                        this.gp.loader.inc();
                        try {
                            const i = yield this.gp._documentsService.fetch({
                                type: e,
                                format: t
                            });
                            if (!i)
                                throw new Error("can't fetch privacy policy");
                            i.format = t,
                            n.done(i),
                            this._events.emit("fetch", i)
                        } catch (e) {
                            n.abort(e),
                            this._events.emit("error:fetch", e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready
                    }
                    ))
                }
            }
            var qn, Vn = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const Yn = {
                data: e=>String(e || ""),
                stats: e=>Number(e) || 0,
                flag: e=>Boolean(e) || !1,
                image: e=>String(e || ""),
                doc_html: e=>String(e || ""),
                file: e=>String(e || "")
            };
            class zn extends Be.Z {
                constructor(e, t) {
                    super(),
                    this.gp = e,
                    this.state = {},
                    this.list = [],
                    qn.set(this, (function(e) {
                        this.state = {},
                        this.list = e,
                        e.forEach((e=>{
                            var t;
                            const n = (null === (t = Yn[e.type]) || void 0 === t ? void 0 : t.call(Yn, e.value)) || e.value;
                            this.state[e.key] = n
                        }
                        )),
                        this._events.emit("change")
                    }
                    )),
                    Vn(this, qn, "f").call(this, t)
                }
                get(e) {
                    return this.state[e]
                }
                has(e) {
                    return Boolean(this.get(e))
                }
                type(e) {
                    var t;
                    return (null === (t = this.list.find((t=>t.key === e))) || void 0 === t ? void 0 : t.type) || "data"
                }
                fetch() {
                    return e = this,
                    t = void 0,
                    i = function*() {
                        try {
                            const e = (yield this.gp._projectService.fetchVariables()).items;
                            return Vn(this, qn, "f").call(this, e),
                            this._events.emit("fetch", e),
                            e
                        } catch (e) {
                            Me.kg.error(e),
                            this._events.emit("error:fetch", e)
                        }
                    }
                    ,
                    new ((n = void 0) || (n = Promise))((function(r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, o)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }
                    ));
                    var e, t, n, i
                }
            }
            qn = new WeakMap,
            function(e, t, n, i) {
                var r, s = arguments.length, a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, i);
                else
                    for (var o = e.length - 1; o >= 0; o--)
                        (r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                s > 3 && a && Object.defineProperty(t, n, a)
            }([Ye(300)], zn.prototype, "fetch", null);
            var Kn, Jn = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const Zn = "\n    id: _id\n    playerId\n    src\n    tags\n    width\n    height\n"
              , Hn = `\n    ... on ImagesList {\n        items { ${Zn} }\n    }\n`
              , Xn = `\n    ... on Image { ${Zn} }\n`
              , Qn = `query($input: FetchPlayerImagesInput!) {\n    result: FetchPlayerImages(input: $input) { ${(0,
            p.Mn)(Hn)} }\n}`
              , ei = `mutation($input: UploadPlayerImageInput!) {\n    result: UploadPlayerImage(input: $input) { ${(0,
            p.Mn)(Xn)} }\n}`
              , ti = `mutation($input: UploadPlayerImageByURLInput!) {\n    result: UploadPlayerImageByURL(input: $input) {\n        ${(0,
            p.Mn)("... on ResponseBody { body }")}\n    }\n}`
              , ni = `mutation($input: SavePlayerImageByURLInput!) {\n    result: SavePlayerImageByURL(input: $input) {\n        ${(0,
            p.Mn)(Xn)}\n    }\n}`;
            class ii {
                constructor(e) {
                    Kn.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Kn, e, "f")
                }
                fetch({playerId: e, limit: t, offset: n, tags: i}) {
                    return Jn(this, Kn, "f").fetch(Qn, {
                        playerId: e,
                        limit: t,
                        offset: n,
                        tags: i
                    })
                }
                upload({file: e, tags: t, accessPayload: n}) {
                    return Jn(this, Kn, "f").fetch(ei, {
                        file: e,
                        tags: t,
                        accessPayload: n
                    })
                }
                uploadByURL({fieldName: e, file: t, uploadUrl: n}) {
                    return Jn(this, Kn, "f").fetch(ti, {
                        fieldName: e,
                        file: t,
                        uploadUrl: n
                    })
                }
                saveByURL({src: e, crop: t, tags: n}) {
                    return Jn(this, Kn, "f").fetch(ni, {
                        src: e,
                        crop: t,
                        tags: n
                    })
                }
            }
            Kn = new WeakMap;
            const ri = 2048
              , si = /cdn.(eponesh|gamepush).com\/static(\/([\d\-]+.)([\d\-]+.)|)\/(.*)/
              , ai = /-(\d+)x(\d+)\.\w+$/;
            var oi, ci, li, hi, ui = function(e, t, n, i) {
                var r, s = arguments.length, a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, i);
                else
                    for (var o = e.length - 1; o >= 0; o--)
                        (r = e[o]) && (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
                return s > 3 && a && Object.defineProperty(t, n, a),
                a
            }, di = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, pi = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }, fi = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                }
                return n
            };
            const mi = "empty_url"
              , vi = "empty_content"
              , yi = "empty_filename";
            class gi extends pn {
                constructor() {
                    super(wi),
                    oi.set(this, void 0),
                    ci.set(this, {}),
                    li.set(this, (function(e, t) {
                        var {url: n, filename: i} = e
                          , r = fi(e, ["url", "filename"]);
                        return di(this, void 0, void 0, (function*() {
                            if (!n)
                                throw Me.kg.error(mi),
                                new Error(mi);
                            if (!i)
                                throw Me.kg.error(yi),
                                new Error(yi);
                            if (pi(this, ci, "f")[n]) {
                                const e = new File([pi(this, ci, "f")[n]],i,pi(this, ci, "f")[n]);
                                return t(Object.assign(Object.assign({}, r), {
                                    file: e
                                }))
                            }
                            try {
                                const e = yield fetch(n).then((e=>e.blob()));
                                return t(Object.assign(Object.assign({}, r), {
                                    file: new File([e],i,{
                                        type: e.type
                                    })
                                }))
                            } catch (e) {
                                throw Me.kg.error(e),
                                e
                            }
                        }
                        ))
                    }
                    )),
                    hi.set(this, (function(e, t) {
                        return di(this, void 0, void 0, (function*() {
                            const {content: n, filename: i} = e
                              , r = fi(e, ["content", "filename"]);
                            if (!n.trim())
                                throw Me.kg.error(vi),
                                new Error(vi);
                            if (!i)
                                throw Me.kg.error(yi),
                                new Error(yi);
                            return t(Object.assign(Object.assign({}, r), {
                                file: new File([n],i)
                            }))
                        }
                        ))
                    }
                    ));
                    const {openFile: e} = function() {
                        let e = null;
                        const t = document.createElement("input");
                        t.type = "file",
                        t.id = "gp-file-input",
                        t.style.cssText = "position: fixed; top: -999px; left: -999px; z-index: 0;",
                        t.onchange = e=>i(e.target),
                        t.tabIndex = -1,
                        document.body.appendChild(t);
                        const n = ()=>{
                            setTimeout((()=>e.done(null)), 1e3),
                            document.body.removeEventListener("focus", n, !0)
                        }
                          , i = t=>{
                            const [i] = t.files ? Array.from(t.files) : [];
                            document.body.removeEventListener("focus", n, !0),
                            e.done(i)
                        }
                        ;
                        return {
                            input: t,
                            openFile: (i="*")=>{
                                return r = this,
                                s = void 0,
                                o = function*() {
                                    null == e || e.abort(),
                                    e = (0,
                                    u._)(),
                                    t.accept = i,
                                    t.click(),
                                    document.body.addEventListener("focus", n, !0);
                                    const r = yield e.ready;
                                    if (r)
                                        return r;
                                    throw new Error("cancelled")
                                }
                                ,
                                new ((a = void 0) || (a = Promise))((function(e, t) {
                                    function n(e) {
                                        try {
                                            c(o.next(e))
                                        } catch (e) {
                                            t(e)
                                        }
                                    }
                                    function i(e) {
                                        try {
                                            c(o.throw(e))
                                        } catch (e) {
                                            t(e)
                                        }
                                    }
                                    function c(t) {
                                        var r;
                                        t.done ? e(t.value) : (r = t.value,
                                        r instanceof a ? r : new a((function(e) {
                                            e(r)
                                        }
                                        ))).then(n, i)
                                    }
                                    c((o = o.apply(r, s || [])).next())
                                }
                                ));
                                var r, s, a, o
                            }
                        }
                    }();
                    !function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, oi, e, "f")
                }
                chooseFile(e) {
                    return di(this, void 0, void 0, (function*() {
                        const t = (0,
                        u._)();
                        try {
                            const n = yield pi(this, oi, "f").call(this, e)
                              , i = URL.createObjectURL(n);
                            pi(this, ci, "f")[i] = n,
                            t.done({
                                file: n,
                                tempUrl: i
                            })
                        } catch (e) {
                            t.abort(e)
                        }
                        return t.ready
                    }
                    ))
                }
                upload(e, t) {
                    return di(this, void 0, void 0, (function*() {
                        const n = (0,
                        u._)();
                        try {
                            e.file || (e.file = yield pi(this, oi, "f").call(this, e.accept));
                            const i = yield t(e);
                            n.done(i)
                        } catch (e) {
                            n.abort(e)
                        }
                        return n.ready
                    }
                    ))
                }
                uploadUrl(e, t) {
                    return di(this, void 0, void 0, (function*() {
                        return pi(this, li, "f").call(this, e, t)
                    }
                    ))
                }
                uploadContent(e, t) {
                    return di(this, void 0, void 0, (function*() {
                        return pi(this, hi, "f").call(this, e, t)
                    }
                    ))
                }
            }
            function wi(e) {
                return `p${e.playerId || 0}:${(e.tags || []).join(",")}`
            }
            oi = new WeakMap,
            ci = new WeakMap,
            li = new WeakMap,
            hi = new WeakMap,
            ui([Ye(300)], gi.prototype, "uploadUrl", null),
            ui([Ye(300)], gi.prototype, "uploadContent", null);
            var bi, Ei = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, Pi = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const _i = "image/png,.jpeg,.jpg";
            class Ti extends Be.Z {
                constructor(e, t) {
                    super(),
                    this.gp = e,
                    this.acl = t,
                    bi.set(this, new gi)
                }
                get canUpload() {
                    return this.acl.canUploadImages
                }
                resize(e, t, n, i) {
                    return function(e, t, n, i) {
                        const r = si.exec(e);
                        if (!r)
                            return e;
                        const [s,a] = function(e) {
                            const t = ai.exec(e);
                            return t ? [Number(t[1]) || 0, Number(t[2]) || 0] : [0, 0]
                        }(e);
                        s && t > s && (t = s),
                        a && n > a && (n = a),
                        t > ri && (t = ri),
                        n > ri && (n = ri);
                        const [,o,,,,c] = r;
                        return `https://cdn.${o}.com/static/${t || "-"}x${n || "-"}${i ? "crop" : ""}/${c}`
                    }(e, t, n, i)
                }
                chooseFile() {
                    return Ei(this, void 0, void 0, (function*() {
                        const e = Pi(this, bi, "f").chooseFile(_i);
                        return e.then((e=>this._events.emit("choose", e))),
                        e.catch((e=>this._events.emit("error:choose", e))),
                        e
                    }
                    ))
                }
                upload(e={}) {
                    return Ei(this, void 0, void 0, (function*() {
                        const t = Pi(this, bi, "f").upload(Object.assign(Object.assign({}, e), {
                            accept: _i
                        }), (({file: e, tags: t})=>Ei(this, void 0, void 0, (function*() {
                            const n = this.gp.app.title
                              , i = yield this.gp.platform.requestPermissions({
                                allowUploadImages: !0
                            });
                            if (!i.success)
                                throw new Error("permission_not_allowed_by_user");
                            if (this.gp.platform.isSupportsImageUploading) {
                                const r = yield this.gp.platform.uploadImage({
                                    file: e,
                                    tags: t,
                                    albumName: n,
                                    accessToken: i.payload.token
                                });
                                return this.gp._imagesService.saveByURL({
                                    src: r.src,
                                    tags: t,
                                    crop: {
                                        height: r.height,
                                        width: r.width,
                                        left: 0,
                                        top: 0
                                    }
                                })
                            }
                            return this.gp._imagesService.upload({
                                file: e,
                                tags: t,
                                accessPayload: i.payload
                            })
                        }
                        ))));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("upload", e))),
                        t.catch((e=>this._events.emit("error:upload", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
                uploadUrl(e={
                    url: ""
                }) {
                    return Ei(this, void 0, void 0, (function*() {
                        return Pi(this, bi, "f").uploadUrl(Object.assign(Object.assign({}, e), {
                            filename: "image.jpeg"
                        }), (e=>this.upload(e)))
                    }
                    ))
                }
                fetch(e={}) {
                    return Ei(this, void 0, void 0, (function*() {
                        const t = Pi(this, bi, "f").fetch(e, (e=>this.gp._imagesService.fetch(e).then((e=>e.items))));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("fetch", e))),
                        t.catch((e=>this._events.emit("error:fetch", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
                fetchMore(e={}) {
                    return Ei(this, void 0, void 0, (function*() {
                        const t = Pi(this, bi, "f").fetchMore(e, (e=>this.gp._imagesService.fetch(e).then((e=>e.items))));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("fetchMore", e))),
                        t.catch((e=>this._events.emit("error:fetchMore", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
            }
            bi = new WeakMap;
            var Ii, Si = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const Ai = "\n    id: _id\n    playerId\n    src\n    size\n    name\n    tags\n"
              , ki = `\n    ... on FilesList {\n        items { ${Ai} }\n    }\n`
              , Oi = `\n    ... on File { ${Ai} }\n`
              , Ci = `query($input: FetchPlayerFilesInput!) {\n    result: FetchPlayerFiles(input: $input) { ${(0,
            p.Mn)(ki)} }\n}`
              , Ri = `mutation($input: UploadPlayerFileInput!) {\n    result: UploadPlayerFile(input: $input) { ${(0,
            p.Mn)(Oi)} }\n}`;
            class Ni {
                constructor(e) {
                    Ii.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Ii, e, "f")
                }
                fetch({playerId: e, limit: t, offset: n, tags: i}) {
                    return Si(this, Ii, "f").fetch(Ci, {
                        playerId: e,
                        limit: t,
                        offset: n,
                        tags: i
                    })
                }
                upload({file: e, tags: t}) {
                    return Si(this, Ii, "f").fetch(Ri, {
                        file: e,
                        tags: t
                    })
                }
            }
            Ii = new WeakMap;
            var xi, Di = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, Mi = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class Li extends Be.Z {
                constructor(e, t) {
                    super(),
                    this.gp = e,
                    this.acl = t,
                    xi.set(this, new gi)
                }
                get canUpload() {
                    return this.acl.canUploadFiles
                }
                chooseFile(e) {
                    return Di(this, void 0, void 0, (function*() {
                        const t = Mi(this, xi, "f").chooseFile(e);
                        return t.then((e=>this._events.emit("choose", e))),
                        t.catch((e=>this._events.emit("error:choose", e))),
                        t
                    }
                    ))
                }
                upload(e) {
                    return Di(this, void 0, void 0, (function*() {
                        const t = Mi(this, xi, "f").upload(e, (e=>this.gp._filesService.upload(e)));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("upload", e))),
                        t.catch((e=>this._events.emit("error:upload", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
                uploadContent(e) {
                    return Di(this, void 0, void 0, (function*() {
                        return Mi(this, xi, "f").uploadContent(e, (e=>this.upload(e)))
                    }
                    ))
                }
                uploadUrl(e) {
                    return Di(this, void 0, void 0, (function*() {
                        return Mi(this, xi, "f").uploadUrl(e, (e=>this.upload(e)))
                    }
                    ))
                }
                loadContent(e) {
                    return Di(this, void 0, void 0, (function*() {
                        const t = fetch(new URL(e).toString()).then((t=>{
                            if (t.ok)
                                return t.text();
                            throw new Error(`Failed to load ${e}, errorCode: ${t.status}`)
                        }
                        ));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("loadContent", e))),
                        t.catch((e=>this._events.emit("error:loadContent", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
                fetch(e={}) {
                    return Di(this, void 0, void 0, (function*() {
                        const t = Mi(this, xi, "f").fetch(e, (e=>this.gp._filesService.fetch(e).then((e=>e.items))));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("fetch", e))),
                        t.catch((e=>this._events.emit("error:fetch", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
                fetchMore(e={}) {
                    return Di(this, void 0, void 0, (function*() {
                        const t = Mi(this, xi, "f").fetchMore(e, (e=>this.gp._filesService.fetch(e).then((e=>e.items))));
                        return this.gp.loader.inc(),
                        t.then((e=>this._events.emit("fetchMore", e))),
                        t.catch((e=>this._events.emit("error:fetchMore", e))),
                        t.finally((()=>this.gp.loader.dec())),
                        t
                    }
                    ))
                }
            }
            xi = new WeakMap;
            var ji = n(1049);
            class $i extends Be.Z {
                constructor(e) {
                    super(),
                    this.gp = e
                }
                fetch({ids: e}) {
                    return t = this,
                    n = void 0,
                    r = function*() {
                        if (0 === e.map(Number).filter(Boolean).length)
                            throw Me.kg.error("empty_ids"),
                            new Error("empty_ids");
                        const t = (0,
                        u._)();
                        return this.gp.loader.inc(),
                        t.ready.then((e=>this._events.emit("fetch", e))).catch((e=>this._events.emit("fetch:error", e))),
                        this.gp._playerService.fetchPlayers({
                            ids: e
                        }).then(t.done).catch(t.abort).finally((()=>this.gp.loader.dec())),
                        t.ready
                    }
                    ,
                    new ((i = void 0) || (i = Promise))((function(e, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value,
                            n instanceof i ? n : new i((function(e) {
                                e(n)
                            }
                            ))).then(a, o)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }
                    ));
                    var t, n, i, r
                }
            }
            let Fi;
            try {
                new EventTarget,
                Fi = !0
            } catch (e) {
                Fi = !1
            }
            var Ui = Fi ? EventTarget : class {
                constructor() {
                    this.e = {}
                }
                addEventListener(e, t, n=!1) {
                    this.t(e).push(t)
                }
                removeEventListener(e, t, n=!1) {
                    const i = this.t(e)
                      , r = i.indexOf(t);
                    r > -1 && i.splice(r, 1)
                }
                dispatchEvent(e) {
                    return e.target = this,
                    Object.freeze(e),
                    this.t(e.type).forEach((t=>t(e))),
                    !0
                }
                t(e) {
                    return this.e[e] = this.e[e] || []
                }
            }
              , Bi = Fi ? Event : class {
                constructor(e) {
                    this.type = e
                }
            }
            ;
            class Gi extends Bi {
                constructor(e, t) {
                    super(e),
                    this.newState = t.newState,
                    this.oldState = t.oldState,
                    this.originalEvent = t.originalEvent
                }
            }
            const Wi = "active"
              , qi = "passive"
              , Vi = "hidden"
              , Yi = "frozen"
              , zi = "terminated"
              , Ki = "object" == typeof safari && safari.pushNotification
              , Ji = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow"in self ? "pagehide" : "unload"]
              , Zi = e=>(e.preventDefault(),
            e.returnValue = "Are you sure?")
              , Hi = [[Wi, qi, Vi, zi], [Wi, qi, Vi, Yi], [Vi, qi, Wi], [Yi, Vi], [Yi, Wi], [Yi, qi]].map((e=>e.reduce(((e,t,n)=>(e[t] = n,
            e)), {})))
              , Xi = ()=>document.visibilityState === Vi ? Vi : document.hasFocus() ? Wi : qi
              , Qi = new class extends Ui {
                constructor() {
                    super();
                    const e = Xi();
                    this.s = e,
                    this.i = [],
                    this.a = this.a.bind(this),
                    Ji.forEach((e=>addEventListener(e, this.a, !0))),
                    Ki && addEventListener("beforeunload", (e=>{
                        this.n = setTimeout((()=>{
                            e.defaultPrevented || e.returnValue.length > 0 || this.r(e, Vi)
                        }
                        ), 0)
                    }
                    ))
                }
                get state() {
                    return this.s
                }
                get pageWasDiscarded() {
                    return document.wasDiscarded || !1
                }
                addUnsavedChanges(e) {
                    !this.i.indexOf(e) > -1 && (0 === this.i.length && addEventListener("beforeunload", Zi),
                    this.i.push(e))
                }
                removeUnsavedChanges(e) {
                    const t = this.i.indexOf(e);
                    t > -1 && (this.i.splice(t, 1),
                    0 === this.i.length && removeEventListener("beforeunload", Zi))
                }
                r(e, t) {
                    if (t !== this.s) {
                        const n = ((e,t)=>{
                            for (let n, i = 0; n = Hi[i]; ++i) {
                                const i = n[e]
                                  , r = n[t];
                                if (i >= 0 && r >= 0 && r > i)
                                    return Object.keys(n).slice(i, r + 1)
                            }
                            return []
                        }
                        )(this.s, t);
                        for (let t = 0; t < n.length - 1; ++t) {
                            const i = n[t]
                              , r = n[t + 1];
                            this.s = r,
                            this.dispatchEvent(new Gi("statechange",{
                                oldState: i,
                                newState: r,
                                originalEvent: e
                            }))
                        }
                    }
                }
                a(e) {
                    switch (Ki && clearTimeout(this.n),
                    e.type) {
                    case "pageshow":
                    case "resume":
                        this.r(e, Xi());
                        break;
                    case "focus":
                        this.r(e, Wi);
                        break;
                    case "blur":
                        this.s === Wi && this.r(e, Xi());
                        break;
                    case "pagehide":
                    case "unload":
                        this.r(e, e.persisted ? Yi : zi);
                        break;
                    case "visibilitychange":
                        this.s !== Yi && this.s !== zi && this.r(e, Xi());
                        break;
                    case "freeze":
                        this.r(e, Yi)
                    }
                }
            }
              , er = ["hidden", "frozen", "terminated"];
            function tr({url: e, blur: t=0, fade: n=0}) {
                e ? (function(e) {
                    document.querySelectorAll(".gp-custom-background").forEach((t=>{
                        t.childNodes.forEach((e=>{
                            e.style.opacity = "0"
                        }
                        )),
                        setTimeout((()=>{
                            t.remove()
                        }
                        ), 1e3 * e)
                    }
                    ))
                }(n),
                function(e) {
                    const t = document.createElement("div");
                    document.body.style.setProperty("background", "transparent", "important"),
                    t.classList.add("gp-custom-background"),
                    function(e, t) {
                        const n = document.createElement("div");
                        n.style.cssText = `\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n        background: transparent;\n        backdrop-filter: blur(${e.blur}px);\n        \n        transition: ${e.fade}s;\n    `,
                        n.classList.add("gp-custom-background-blur"),
                        t.append(n)
                    }(e, t),
                    function(e, t) {
                        const n = document.createElement("div");
                        n.style.cssText = `\n        background-image: url(${e.url});\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -2;\n        opacity: 0;\n        transition: ${e.fade}s;\n    `,
                        n.classList.add("gp-custom-background-img"),
                        t.append(n),
                        setTimeout((()=>{
                            n.style.opacity = "1"
                        }
                        ), 100)
                    }(e, t),
                    document.body.append(t)
                }({
                    url: e,
                    blur: t,
                    fade: n
                })) : Me.kg.warn("Empty background url")
            }
            class nr {
                getLanguage() {
                    return e = this,
                    t = void 0,
                    i = function*() {
                        const e = decodeURIComponent(window.location.toString())
                          , t = /_gp_lang=(?<lang>\w{2})/.exec(e);
                        return t ? t.groups.lang : null
                    }
                    ,
                    new ((n = void 0) || (n = Promise))((function(r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, o)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }
                    ));
                    var e, t, n, i
                }
            }
            var ir;
            class rr {
                constructor() {
                    ir.set(this, [new nr])
                }
                getLanguage() {
                    return e = this,
                    t = void 0,
                    i = function*() {
                        for (const e of function(e, t, n, i) {
                            if ("a" === n && !i)
                                throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                                throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                        }(this, ir, "f")) {
                            const t = yield e.getLanguage();
                            if (null !== t)
                                return (0,
                                Le.Ff)(t.toLowerCase()).unwrapOr(null)
                        }
                        return null
                    }
                    ,
                    new ((n = void 0) || (n = Promise))((function(r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, o)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }
                    ));
                    var e, t, n, i
                }
            }
            ir = new WeakMap;
            var sr = n(2940);
            const ar = ()=>window.matchMedia("(orientation: portrait)").matches
              , or = e=>{
                const t = ar();
                return t && e === sr.LH.Portrait || !t && e === sr.LH.Landscape
            }
            ;
            var cr, lr = n(8866), hr = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class ur {
                constructor() {
                    cr.set(this, new Set),
                    document.addEventListener("pointerdown", (e=>{
                        hr(this, cr, "f").add(e.pointerId)
                    }
                    )),
                    document.addEventListener("pointerup", (e=>{
                        hr(this, cr, "f").delete(e.pointerId)
                    }
                    ))
                }
                waitForPointersUp() {
                    return e = this,
                    t = void 0,
                    i = function*() {
                        const e = new Promise((e=>{
                            if (0 === hr(this, cr, "f").size)
                                return e();
                            const t = n=>{
                                if (hr(this, cr, "f").delete(n.pointerId),
                                0 === hr(this, cr, "f").size)
                                    return document.removeEventListener("pointerup", t),
                                    e()
                            }
                            ;
                            document.addEventListener("pointerup", t)
                        }
                        ));
                        yield Promise.race([e, (0,
                        lr.Z)(1500)])
                    }
                    ,
                    new ((n = void 0) || (n = Promise))((function(r, s) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, o)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }
                    ));
                    var e, t, n, i
                }
            }
            cr = new WeakMap;
            var dr = n(7227);
            const pr = {
                [sr.W2.Add]: (e,t)=>{
                    e.player.add(t.key, t.value)
                }
                ,
                [sr.W2.Remove]: (e,t)=>{
                    e.player.add(t.key, -t.value)
                }
                ,
                [sr.W2.Set]: (e,t)=>{
                    e.player.set(t.key, t.value)
                }
            }
              , fr = {
                [sr.x1.PlayerField]: pr
            };
            var mr, vr, yr, gr, wr, br, Er, Pr, _r, Tr, Ir, Sr, Ar, kr, Or, Cr, Rr, Nr = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, xr = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, Dr = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const Mr = "reward_not_found";
            class Lr extends Be.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    mr.add(this),
                    vr.set(this, void 0),
                    yr.set(this, []),
                    gr.set(this, []),
                    wr.set(this, []),
                    br.set(this, {}),
                    Er.set(this, {}),
                    Pr.set(this, {}),
                    xr(this, gr, n, "f"),
                    Dr(this, mr, "m", Cr).call(this),
                    xr(this, vr, t, "f"),
                    Dr(this, vr, "f").on("setRewardsList", (e=>Dr(this, mr, "m", Sr).call(this, e.playerRewards, e.notSentGivenList, e.notSentAcceptedList))),
                    Dr(this, vr, "f").on("markRewardsGiven", (e=>{
                        e.forEach((e=>{
                            const t = Dr(this, mr, "m", _r).call(this, e);
                            if (!t)
                                return void Me.kg.error(`reward not found', ID ${e}`);
                            Dr(this, mr, "m", Ar).call(this, t.id);
                            const n = Dr(this, mr, "m", Ir).call(this, t.id);
                            this._events.emit("give", n),
                            t.isAutoAccept && this._events.emit("accept", n)
                        }
                        ))
                    }
                    )),
                    this.gp.on("change:language", (e=>{
                        Dr(this, gr, "f").forEach((t=>{
                            t.name = t.names[e] || t.names.en,
                            t.description = t.descriptions[e] || t.descriptions.en
                        }
                        )),
                        Dr(this, mr, "m", Cr).call(this)
                    }
                    )),
                    this.gp.on("gameStart", (()=>Nr(this, void 0, void 0, (function*() {
                        yield this.gp.player.ready,
                        Dr(this, wr, "f").forEach((e=>{
                            const t = Dr(this, mr, "m", _r).call(this, e.rewardId);
                            if (null == t ? void 0 : t.isAutoAccept) {
                                const n = e.countTotal - e.countAccepted;
                                if (n > 0)
                                    for (let e = 0; e < n; e++)
                                        this.accept({
                                            id: t.id
                                        })
                            }
                        }
                        ))
                    }
                    ))))
                }
                get list() {
                    return [...Dr(this, gr, "f")]
                }
                get givenList() {
                    return [...Dr(this, wr, "f")]
                }
                give(e) {
                    return Nr(this, void 0, void 0, (function*() {
                        const t = Number(e.id) || e.tag
                          , n = (0,
                        u._)()
                          , i = t=>{
                            n.abort(t),
                            this._events.emit("error:give", t, {
                                input: e
                            })
                        }
                        ;
                        if (Dr(this, yr, "f").includes(t))
                            return i(Mr),
                            n.ready;
                        const r = Dr(this, mr, "m", _r).call(this, t);
                        if (!r)
                            return i(Mr),
                            n.ready;
                        if (e.lazy) {
                            let e = {
                                rewardId: r.id,
                                countTotal: 1,
                                countAccepted: 0
                            };
                            Dr(this, mr, "m", Ar).call(this, r.id),
                            Dr(this, vr, "f").addGivenReward({
                                id: r.id,
                                count: 1
                            });
                            const t = Dr(this, mr, "m", Tr).call(this, r.id);
                            return e.countTotal = t.countTotal,
                            e.countAccepted = t.countAccepted,
                            this._events.emit("give", {
                                reward: r,
                                playerReward: e
                            }),
                            r.isAutoAccept && (yield this.accept({
                                id: r.id
                            })),
                            n.done({
                                reward: r,
                                playerReward: e
                            }),
                            n.ready
                        }
                        this.gp.loader.inc();
                        const s = r.id;
                        try {
                            const e = yield this.gp._rewardsService.give({
                                id: s
                            })
                              , {reward: t} = e
                              , i = function(e, t) {
                                var n = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var r = 0;
                                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                                        t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                                }
                                return n
                            }(e, ["reward"]);
                            Dr(this, mr, "m", Ar).call(this, t.id);
                            const r = Dr(this, mr, "m", Tr).call(this, t.id);
                            i.countTotal = r.countTotal,
                            i.countAccepted = r.countAccepted,
                            this._events.emit("give", {
                                reward: t,
                                playerReward: i
                            }),
                            t.isAutoAccept && (yield this.accept({
                                id: t.id
                            })),
                            n.done({
                                reward: t,
                                playerReward: i
                            })
                        } catch (r) {
                            "reward_not_found" === r && Dr(this, yr, "f").push(t),
                            "string" == typeof r ? (Me.kg.error(r),
                            i(r)) : (n.abort(r),
                            this._events.emit("error:give", r, {
                                input: e
                            }))
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready
                    }
                    ))
                }
                accept(e) {
                    return Nr(this, void 0, void 0, (function*() {
                        const t = Number(e.id) || e.tag
                          , n = (0,
                        u._)()
                          , i = t=>{
                            n.abort(t),
                            this._events.emit("error:accept", t, {
                                input: e
                            })
                        }
                        ;
                        if (Dr(this, yr, "f").includes(t))
                            return i(Mr),
                            n.ready;
                        if (!this.hasUnaccepted(t))
                            return i("reward_already_accepted"),
                            n.ready;
                        const {reward: r, playerReward: s} = Dr(this, mr, "m", Ir).call(this, t);
                        return s ? (Dr(this, mr, "m", kr).call(this, s),
                        Dr(this, vr, "f").addAcceptedReward({
                            id: s.rewardId,
                            count: 1
                        }),
                        this._events.emit("accept", {
                            reward: r,
                            playerReward: s
                        }),
                        n.done({
                            reward: r,
                            playerReward: s
                        }),
                        n.ready) : (i("player_reward_not_found"),
                        n.ready)
                    }
                    ))
                }
                has(e) {
                    var t;
                    return (null === (t = Dr(this, mr, "m", Ir).call(this, e).playerReward) || void 0 === t ? void 0 : t.countTotal) > 0
                }
                hasAccepted(e) {
                    var t;
                    return (null === (t = Dr(this, mr, "m", Ir).call(this, e).playerReward) || void 0 === t ? void 0 : t.countAccepted) > 0
                }
                hasUnaccepted(e) {
                    const {playerReward: t} = Dr(this, mr, "m", Ir).call(this, e);
                    return !!t && t.countTotal > t.countAccepted
                }
                getReward(e) {
                    return Dr(this, mr, "m", Ir).call(this, e)
                }
            }
            function jr(e, t=1) {
                e.countAccepted += t
            }
            vr = new WeakMap,
            yr = new WeakMap,
            gr = new WeakMap,
            wr = new WeakMap,
            br = new WeakMap,
            Er = new WeakMap,
            Pr = new WeakMap,
            mr = new WeakSet,
            _r = function(e) {
                return Dr(this, br, "f")[e] || Dr(this, Er, "f")[e]
            }
            ,
            Tr = function(e) {
                return Dr(this, Pr, "f")[e]
            }
            ,
            Ir = function(e) {
                const t = {
                    reward: null,
                    playerReward: null
                }
                  , n = Dr(this, mr, "m", _r).call(this, e);
                if (!n)
                    return t;
                t.reward = n;
                const i = Dr(this, mr, "m", Tr).call(this, n.id);
                return t.playerReward = i || {
                    rewardId: n.id,
                    countAccepted: 0,
                    countTotal: 0
                },
                t
            }
            ,
            Sr = function(e, t, n) {
                let i = [...n];
                const r = t.reduce(((t,{id: n, count: i})=>{
                    const r = e.find((e=>e.rewardId === n));
                    return r ? (r.countTotal += i,
                    t) : (Dr(this, gr, "f").find((e=>e.id === n)) && t.push({
                        rewardId: n,
                        countTotal: i,
                        countAccepted: 0
                    }),
                    t)
                }
                ), [])
                  , s = [...e, ...r];
                xr(this, wr, s.reduce(((e,t)=>{
                    if (Dr(this, gr, "f").find((e=>e.id === t.rewardId))) {
                        const n = i.find((e=>e.id === t.rewardId));
                        n && (i = i.filter((e=>e.id !== t.rewardId)),
                        jr(t, n.count)),
                        e.push(t)
                    }
                    return e
                }
                ), []), "f"),
                Dr(this, mr, "m", Rr).call(this)
            }
            ,
            Ar = function(e) {
                if (!Dr(this, mr, "m", _r).call(this, e))
                    return;
                const t = Dr(this, mr, "m", Tr).call(this, e);
                t ? t.countTotal += 1 : (Dr(this, wr, "f").unshift({
                    rewardId: e,
                    countTotal: 1,
                    countAccepted: 0
                }),
                Dr(this, mr, "m", Rr).call(this))
            }
            ,
            kr = function(e) {
                const t = Dr(this, mr, "m", _r).call(this, e.rewardId);
                t ? (jr(e),
                Dr(this, mr, "m", Or).call(this, t)) : Me.kg.error(`Reward ${e.rewardId} not found`)
            }
            ,
            Or = function(e) {
                try {
                    t = this.gp,
                    e.mutations.forEach((e=>{
                        const n = fr[e.type];
                        if (!n)
                            throw new Error(`Unknown mutation type: ${e.type}`);
                        const i = n[e.action];
                        if (!i)
                            throw new Error(`Unknown mutation action: ${e.action}`);
                        i(t, e)
                    }
                    ))
                } catch (e) {
                    Me.kg.error("failed to apply reward", e)
                }
                var t
            }
            ,
            Cr = function() {
                xr(this, br, {}, "f"),
                xr(this, Er, {}, "f"),
                Dr(this, gr, "f").forEach((e=>{
                    Dr(this, br, "f")[e.id] = e,
                    Dr(this, Er, "f")[e.tag] = e
                }
                ))
            }
            ,
            Rr = function() {
                xr(this, Pr, {}, "f"),
                Dr(this, wr, "f").forEach((e=>{
                    Dr(this, Pr, "f")[e.rewardId] = e
                }
                ))
            }
            ;
            var $r, Fr, Ur, Br, Gr, Wr, qr, Vr, Yr, zr, Kr, Jr, Zr = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, Hr = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, Xr = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const Qr = "trigger_not_found";
            class es extends Be.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    $r.add(this),
                    Fr.set(this, void 0),
                    Ur.set(this, []),
                    Br.set(this, []),
                    Gr.set(this, {}),
                    Wr.set(this, {}),
                    qr.set(this, {}),
                    Hr(this, Ur, [...n.triggers, ...n.schedulers.reduce(((e,t)=>[...e, ...t.triggers]), []), ...n.events.reduce(((e,t)=>[...e, ...t.triggers]), [])], "f"),
                    Xr(this, $r, "m", Kr).call(this),
                    Hr(this, Fr, t, "f"),
                    Xr(this, Fr, "f").on("setTriggersList", (e=>{
                        Hr(this, Br, e.playerTriggers.filter((e=>!!Xr(this, Gr, "f")[e.triggerId])), "f"),
                        Xr(this, $r, "m", Jr).call(this)
                    }
                    )),
                    Xr(this, Fr, "f").on("markTriggersActivated", (e=>{
                        e.forEach((e=>{
                            const {trigger: t, isActivated: n} = Xr(this, $r, "m", Yr).call(this, e);
                            t ? n || (Xr(this, Br, "f").push({
                                triggerId: e,
                                claimed: !1
                            }),
                            Xr(this, $r, "m", Jr).call(this),
                            this._events.emit("activate", {
                                trigger: t
                            }),
                            Me.kg.info(`🎉 Trigger activated, ID: ${e}, Tag: ${t.tag}`)) : Me.kg.error(`trigger not found, ID: ${e}`)
                        }
                        ))
                    }
                    )),
                    Xr(this, Fr, "f").on("markTriggersClaimed", (e=>{
                        e.forEach((e=>{
                            const {trigger: t, isClaimed: n} = Xr(this, $r, "m", Yr).call(this, e);
                            t ? n || (Hr(this, Br, Xr(this, Br, "f").map((t=>t.triggerId === e ? Object.assign(Object.assign({}, t), {
                                claimed: !0
                            }) : t)), "f"),
                            Xr(this, $r, "m", Jr).call(this),
                            this._events.emit("claim", {
                                trigger: t
                            }),
                            Me.kg.info(`🎉 Trigger claimed, ID: ${e}, Tag: ${t.tag}`)) : Me.kg.error(`trigger not found, ID: ${e}`)
                        }
                        ))
                    }
                    )),
                    this.gp.on("change:language", (e=>{
                        Xr(this, Ur, "f").forEach((t=>{
                            t.description = t.descriptions[e] || t.descriptions.en
                        }
                        )),
                        Xr(this, $r, "m", Kr).call(this)
                    }
                    ))
                }
                get list() {
                    return [...Xr(this, Ur, "f")]
                }
                get activatedList() {
                    return [...Xr(this, Br, "f")]
                }
                isActivated(e) {
                    return Xr(this, $r, "m", Yr).call(this, e).isActivated
                }
                isClaimed(e) {
                    return Xr(this, $r, "m", Yr).call(this, e).isClaimed
                }
                getTrigger(e) {
                    return Xr(this, $r, "m", Yr).call(this, e)
                }
                claim(e) {
                    return Zr(this, void 0, void 0, (function*() {
                        const t = e.id || e.tag
                          , n = Xr(this, $r, "m", Vr).call(this, t)
                          , i = (0,
                        u._)();
                        try {
                            if (!n)
                                throw Me.kg.error(`trigger not found, ID: ${t}`),
                                new Error(Qr);
                            const e = yield this._claim({
                                id: n.id
                            });
                            i.done(e)
                        } catch (t) {
                            const n = (null == t ? void 0 : t.message) || t;
                            this._events.emit("error:claim", n, {
                                input: e
                            }),
                            i.abort(n)
                        }
                        return i.ready
                    }
                    ))
                }
                _claim({id: e, tag: t}) {
                    return Zr(this, void 0, void 0, (function*() {
                        const n = e || t
                          , {isActivated: i, isClaimed: r} = Xr(this, $r, "m", zr).call(this, n);
                        if (!i)
                            throw Me.kg.error(`trigger is not activated, ID: ${n}`),
                            new Error("trigger_not_activated");
                        if (r)
                            throw Me.kg.error(`trigger is already claimed, ID: ${n}`),
                            new Error("trigger_already_claimed");
                        return Xr(this, Fr, "f").addClaimedTrigger(n),
                        yield Xr(this, Fr, "f").syncPlayer(),
                        Xr(this, $r, "m", Yr).call(this, n)
                    }
                    ))
                }
            }
            Fr = new WeakMap,
            Ur = new WeakMap,
            Br = new WeakMap,
            Gr = new WeakMap,
            Wr = new WeakMap,
            qr = new WeakMap,
            $r = new WeakSet,
            Vr = function(e) {
                return Xr(this, Gr, "f")[e] || Xr(this, Wr, "f")[e]
            }
            ,
            Yr = function(e) {
                const t = {
                    trigger: null,
                    isActivated: !1,
                    isClaimed: !1
                }
                  , n = Xr(this, $r, "m", Vr).call(this, e);
                if (!n)
                    return t;
                if (t.trigger = n,
                n) {
                    const e = Xr(this, qr, "f")[n.id];
                    e && (t.isActivated = !0,
                    t.isClaimed = e.claimed)
                }
                return t
            }
            ,
            zr = function(e) {
                const t = Xr(this, qr, "f")[e];
                return t ? {
                    isActivated: !0,
                    isClaimed: t.claimed
                } : {
                    isActivated: !1,
                    isClaimed: !1
                }
            }
            ,
            Kr = function() {
                Hr(this, Gr, {}, "f"),
                Hr(this, Wr, {}, "f"),
                Xr(this, Ur, "f").forEach((e=>{
                    Xr(this, Gr, "f")[e.id] = e,
                    Xr(this, Wr, "f")[e.tag] = e
                }
                ))
            }
            ,
            Jr = function() {
                Hr(this, qr, {}, "f"),
                Xr(this, Br, "f").forEach((e=>{
                    Xr(this, qr, "f")[e.triggerId] = e
                }
                ))
            }
            ;
            var ts, ns = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }, is = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            };
            class rs extends Be.Z {
                constructor() {
                    super(...arguments),
                    this.acceptedRewards = [],
                    this.givenRewards = [],
                    this.unlockedAchievements = [],
                    this.purchasedProducts = [],
                    this.claimedTriggers = [],
                    this.claimedSchedulersDays = [],
                    ts.set(this, null)
                }
                addGivenReward(e) {
                    const t = this.givenRewards.find((t=>t.id === e.id));
                    t ? t.count += e.count : this.givenRewards.push(e)
                }
                addAcceptedReward(e) {
                    const t = this.acceptedRewards.find((t=>t.id === e.id));
                    t ? t.count += e.count : this.acceptedRewards.push(e)
                }
                addClaimedTrigger(e) {
                    this.claimedTriggers.push(e)
                }
                addClaimedSchedulerDay(e) {
                    this.claimedSchedulersDays.push(e)
                }
                addUnlockedAchievement(e) {
                    this.unlockedAchievements.push(e)
                }
                setTriggersList(e) {
                    this.emit("setTriggersList", {
                        playerTriggers: e
                    })
                }
                setRewardsList(e) {
                    this.emit("setRewardsList", {
                        playerRewards: e,
                        notSentAcceptedList: this.acceptedRewards,
                        notSentGivenList: this.givenRewards
                    })
                }
                setAchievementsList(e) {
                    this.emit("setAchievementsList", {
                        achievements: e,
                        notSentIds: this.unlockedAchievements
                    })
                }
                setPurchasedList(e) {
                    this.emit("setPurchasedList", {
                        playerPurchases: e,
                        notSentIds: this.purchasedProducts
                    })
                }
                setExperiments(e) {
                    this.emit("setExperiments", {
                        playerExperiments: e
                    })
                }
                setPlayerSegments(e, t, n) {
                    this.emit("setPlayerSegments", {
                        playerSegments: e,
                        leftSegments: n,
                        enterSegments: t
                    })
                }
                setPlayerSchedulersList(e) {
                    this.emit("setPlayerSchedulersList", {
                        playerSchedulers: e
                    })
                }
                setPlayerEventsList(e) {
                    this.emit("setPlayerEventsList", {
                        playerEvents: e
                    })
                }
                markTriggersActivated(e) {
                    this.emit("markTriggersActivated", e)
                }
                markTriggersClaimed(e) {
                    this.emit("markTriggersClaimed", e)
                }
                markRewardsGiven(e) {
                    this.emit("markRewardsGiven", e)
                }
                markAchievementsUnlocked(e) {
                    this.emit("markAchievementsUnlocked", e)
                }
                markPurchasesGiven(e) {
                    this.emit("markPurchasesGiven", e)
                }
                markSchedulersDaysClaimed(e) {
                    this.emit("markSchedulersDaysClaimed", e)
                }
                syncPurchases() {
                    const e = (0,
                    u._)();
                    return this._events.emit("syncPurchases", e.done),
                    e.ready
                }
                syncPlayer() {
                    if (ns(this, ts, "f"))
                        return ns(this, ts, "f").ready;
                    const e = (0,
                    u._)();
                    return is(this, ts, e, "f"),
                    (0,
                    lr.Z)(300).then((()=>this._events.emit("syncPlayer"))),
                    e.ready
                }
                commitSyncPlayer() {
                    var e;
                    null === (e = ns(this, ts, "f")) || void 0 === e || e.done(),
                    is(this, ts, null, "f")
                }
                export() {
                    return {
                        acceptedRewards: this.acceptedRewards,
                        givenRewards: this.givenRewards,
                        claimedTriggers: this.claimedTriggers,
                        claimedSchedulersDays: this.claimedSchedulersDays
                    }
                }
                reset() {
                    this.acceptedRewards = [],
                    this.givenRewards = [],
                    this.claimedTriggers = [],
                    this.claimedSchedulersDays = []
                }
                emit(e, t) {
                    this._events.emit(e, t)
                }
            }
            ts = new WeakMap;
            var ss, as, os, cs, ls, hs, us, ds, ps, fs, ms, vs, ys = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, gs = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, ws = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const bs = "scheduler_not_found"
              , Es = "wrong_day"
              , Ps = "day_not_reached"
              , _s = "nothing_to_claim"
              , Ts = {
                scheduler: null,
                bonuses: [],
                canClaimAllDay: !1,
                canClaimDay: !1,
                day: 0,
                isAllDayClaimed: !1,
                isDayClaimed: !1,
                isDayComplete: !1,
                isDayReached: !1,
                triggers: []
            };
            class Is extends Be.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    ss.add(this),
                    as.set(this, void 0),
                    os.set(this, []),
                    cs.set(this, []),
                    gs(this, os, n, "f"),
                    gs(this, as, t, "f"),
                    ws(this, as, "f").on("setPlayerSchedulersList", (({playerSchedulers: e})=>{
                        gs(this, cs, e.filter((e=>ws(this, os, "f").some((t=>t.id === e.schedulerId)))), "f")
                    }
                    ))
                }
                get list() {
                    return [...ws(this, os, "f")]
                }
                get activeList() {
                    return [...ws(this, cs, "f")]
                }
                getSchedulersTriggers() {
                    return ws(this, os, "f").reduce(((e,{triggers: t})=>[...e, ...t]), [])
                }
                getScheduler(e) {
                    const {scheduler: t, playerScheduler: n} = ws(this, ss, "m", hs).call(this, e);
                    if (!t)
                        return {
                            scheduler: null,
                            currentDay: 0,
                            daysClaimed: [],
                            isRegistered: !1,
                            stats: {
                                activeDays: 0,
                                activeDaysConsecutive: 0
                            }
                        };
                    let i = !1
                      , r = 0
                      , s = []
                      , a = {
                        activeDays: 0,
                        activeDaysConsecutive: 0
                    };
                    return n && (i = !0,
                    a = n.stats,
                    s = n.daysClaimed,
                    r = t.type === sr.OB.ActiveDays ? a.activeDays : a.activeDaysConsecutive),
                    {
                        scheduler: t,
                        isRegistered: i,
                        currentDay: r,
                        daysClaimed: s,
                        stats: a
                    }
                }
                isRegistered(e) {
                    return !!ws(this, ss, "m", hs).call(this, e).playerScheduler
                }
                isTodayRewardClaimed(e) {
                    const t = this.getScheduler(e);
                    if (!t.scheduler)
                        return !1;
                    const {currentDay: n, daysClaimed: i} = t;
                    return i.includes(n)
                }
                canClaimDay(e, t) {
                    return this.getSchedulerDay(e, t).canClaimDay
                }
                canClaimDayAdditional(e, t, n) {
                    const {scheduler: i} = ws(this, ss, "m", hs).call(this, e);
                    if (!i)
                        return !1;
                    const r = i.triggers.find((e=>(e.id === n || e.tag === n) && e.day === t));
                    return !!r && this.gp.triggers.isActivated(r.id) && !this.gp.triggers.isClaimed(r.id)
                }
                canClaimAllDay(e, t) {
                    return this.getSchedulerDay(e, t).canClaimAllDay
                }
                getSchedulerDay(e, t) {
                    var n;
                    const i = this.getScheduler(e);
                    if (!i.scheduler)
                        return Ts;
                    const {scheduler: r, currentDay: s, daysClaimed: a} = i
                      , o = r.triggers.filter((e=>e.day === t))
                      , c = s >= t
                      , l = c && o.every((e=>this.gp.triggers.isActivated(e.id)))
                      , h = a.includes(t)
                      , u = h && o.every((e=>this.gp.triggers.isClaimed(e.id)))
                      , d = !!r && !h && c
                      , p = d || r.triggers.some((n=>this.canClaimDayAdditional(e, t, n.id)));
                    return {
                        scheduler: r,
                        day: t,
                        isDayReached: c,
                        isDayComplete: l,
                        isDayClaimed: h,
                        isAllDayClaimed: u,
                        canClaimDay: d,
                        canClaimAllDay: p,
                        bonuses: (null === (n = r.daysBonuses.find((e=>e.day === t))) || void 0 === n ? void 0 : n.bonuses) || [],
                        triggers: o
                    }
                }
                getSchedulerCurrentDay(e) {
                    const t = this.getScheduler(e);
                    if (!t.scheduler)
                        return Ts;
                    const {currentDay: n} = t;
                    return this.getSchedulerDay(e, n)
                }
                claimDay(e, t) {
                    return ys(this, void 0, void 0, (function*() {
                        return ws(this, ss, "m", vs).call(this, "claimDay", ws(this, ss, "m", ds).call(this, e, t), {
                            schedulerIdOrTag: e,
                            day: t
                        })
                    }
                    ))
                }
                claimDayAdditional(e, t, n) {
                    return ys(this, void 0, void 0, (function*() {
                        return ws(this, ss, "m", vs).call(this, "claimDayAdditional", ws(this, ss, "m", ps).call(this, e, t, n), {
                            schedulerIdOrTag: e,
                            day: t,
                            triggerIdOrTag: n
                        })
                    }
                    ))
                }
                claimAllDay(e, t) {
                    return ys(this, void 0, void 0, (function*() {
                        return ws(this, ss, "m", vs).call(this, "claimAllDay", ws(this, ss, "m", fs).call(this, e, t), {
                            schedulerIdOrTag: e,
                            day: t
                        })
                    }
                    ))
                }
                claimAllDays(e) {
                    return ys(this, void 0, void 0, (function*() {
                        return ws(this, ss, "m", vs).call(this, "claimAllDays", ws(this, ss, "m", ms).call(this, e), {
                            schedulerIdOrTag: e
                        })
                    }
                    ))
                }
                register(e) {
                    return ys(this, void 0, void 0, (function*() {
                        return ws(this, ss, "m", vs).call(this, "register", ws(this, ss, "m", ls).call(this, (null == e ? void 0 : e.id) || (null == e ? void 0 : e.tag)), e)
                    }
                    ))
                }
            }
            as = new WeakMap,
            os = new WeakMap,
            cs = new WeakMap,
            ss = new WeakSet,
            ls = function(e) {
                return ys(this, void 0, void 0, (function*() {
                    const t = this.getScheduler(e);
                    if (!t.scheduler)
                        throw new Error(bs);
                    const {scheduler: n} = t
                      , i = yield this.gp._schedulersService.register({
                        schedulerId: n.id
                    });
                    ws(this, cs, "f").push(Object.assign(Object.assign({}, i), {
                        scheduler: n
                    }));
                    const r = this.getScheduler(e)
                      , {scheduler: s} = r;
                    return function(e, t) {
                        var n = {};
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                                t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(r, ["scheduler"])
                }
                ))
            }
            ,
            hs = function(e) {
                const t = {
                    scheduler: null,
                    playerScheduler: null
                }
                  , n = ws(this, os, "f").find((t=>t.tag === e || t.id === Number(e)));
                return n ? (t.scheduler = n,
                n && (t.playerScheduler = ws(this, cs, "f").find((e=>e.schedulerId === n.id))),
                t) : t
            }
            ,
            us = function(e, t) {
                return !Number.isNaN(e) && e > 0 && e <= t.days
            }
            ,
            ds = function(e, t) {
                return ys(this, void 0, void 0, (function*() {
                    const {scheduler: n, isDayReached: i, isDayClaimed: r} = this.getSchedulerDay(e, t);
                    if (!n)
                        throw bs;
                    if (!ws(this, ss, "m", us).call(this, t, n))
                        throw Es;
                    if (!i)
                        throw Ps;
                    if (r)
                        throw "day_already_claimed";
                    return ws(this, as, "f").addClaimedSchedulerDay({
                        schedulerId: n.id,
                        day: t
                    }),
                    yield ws(this, as, "f").syncPlayer(),
                    this.getSchedulerDay(e, t)
                }
                ))
            }
            ,
            ps = function(e, t, n) {
                return ys(this, void 0, void 0, (function*() {
                    const {scheduler: i, isDayReached: r} = this.getSchedulerDay(e, t);
                    if (!i)
                        throw bs;
                    if (!ws(this, ss, "m", us).call(this, t, i))
                        throw Es;
                    if (!r)
                        throw Ps;
                    const s = i.triggers.find((e=>e.id === n || e.tag === n));
                    if (!s)
                        throw Qr;
                    const {isClaimed: a} = yield this.gp.triggers._claim({
                        id: s.id
                    });
                    if (!a)
                        throw "failed_to_claim";
                    return this.getSchedulerDay(e, t)
                }
                ))
            }
            ,
            fs = function(e, t) {
                return ys(this, void 0, void 0, (function*() {
                    const {scheduler: n, isDayReached: i} = this.getSchedulerDay(e, t);
                    if (!n)
                        throw bs;
                    if (!ws(this, ss, "m", us).call(this, t, n))
                        throw Es;
                    if (!i)
                        throw Ps;
                    const r = [];
                    if (this.canClaimDay(e, t) && r.push(ws(this, ss, "m", ds).call(this, e, t)),
                    n.triggers.forEach((n=>{
                        this.canClaimDayAdditional(e, t, n.id) && r.push(ws(this, ss, "m", ps).call(this, e, t, n.id))
                    }
                    )),
                    0 === r.length)
                        throw _s;
                    return yield Promise.all(r),
                    this.getSchedulerDay(e, t)
                }
                ))
            }
            ,
            ms = function(e) {
                return ys(this, void 0, void 0, (function*() {
                    const {scheduler: t} = ws(this, ss, "m", hs).call(this, e);
                    if (!t)
                        throw bs;
                    const n = [];
                    for (let i = 1; i <= t.days; i++)
                        this.canClaimAllDay(e, i) && n.push(this.claimAllDay(e, i).catch(Me.kg.warn));
                    if (0 === n.length)
                        throw _s;
                    return yield Promise.all(n),
                    this.getScheduler(e)
                }
                ))
            }
            ,
            vs = function(e, t, n) {
                return t.then((t=>(this._events.emit(e, t, {
                    input: n
                }),
                t))).catch((t=>{
                    const i = (null == t ? void 0 : t.message) || t;
                    throw this._events.emit(`error:${e}`, i, {
                        input: n
                    }),
                    i
                }
                ))
            }
            ;
            var Ss, As, ks, Os, Cs, Rs = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, Ns = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class xs extends Be.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    Ss.add(this),
                    As.set(this, void 0),
                    ks.set(this, []),
                    Os.set(this, []),
                    Rs(this, ks, n.map((t=>Object.assign(Object.assign({}, t), {
                        get timeLeft() {
                            const n = Date.parse(t.dateEnd) || 1 / 0
                              , i = Math.floor((n - Date.parse(e.serverTime)) / 1e3);
                            return i > 0 ? i : 0
                        },
                        get isActive() {
                            const n = Date.parse(t.dateStart) || 0;
                            return Date.parse(e.serverTime) >= n && this.timeLeft > 0
                        }
                    }))), "f"),
                    Rs(this, As, t, "f"),
                    Ns(this, As, "f").on("setPlayerEventsList", (({playerEvents: e})=>{
                        Rs(this, Os, e.filter((e=>Ns(this, ks, "f").some((t=>t.id === e.eventId)))), "f")
                    }
                    )),
                    this.gp.on("change:language", (e=>{
                        Ns(this, ks, "f").forEach((t=>{
                            t.name = t.names[e] || t.names.en,
                            t.description = t.descriptions[e] || t.descriptions.en
                        }
                        ))
                    }
                    ))
                }
                get list() {
                    return [...Ns(this, ks, "f")]
                }
                get activeList() {
                    return [...Ns(this, Os, "f")]
                }
                getEvent(e) {
                    const {event: t, playerEvent: n} = Ns(this, Ss, "m", Cs).call(this, e)
                      , i = {
                        event: t,
                        stats: (null == n ? void 0 : n.stats) || {
                            activeDays: 0,
                            activeDaysConsecutive: 0
                        },
                        isJoined: !!(null == t ? void 0 : t.isActive) && !!n,
                        rewards: [],
                        achievements: [],
                        products: []
                    };
                    return t ? (t.triggers.forEach((e=>{
                        e.bonuses.forEach((e=>{
                            switch (e.type) {
                            case sr.Do.Reward:
                                const {reward: t} = this.gp.rewards.getReward(e.id);
                                t && i.rewards.push(Object.assign(Object.assign({}, t), {
                                    isExists: this.gp.rewards.has(e.id)
                                }));
                                break;
                            case sr.Do.Achievement:
                                const {achievement: n} = this.gp.achievements.getAchievement(e.id);
                                n && i.achievements.push(Object.assign(Object.assign({}, n), {
                                    isExists: this.gp.achievements.has(e.id)
                                }));
                                break;
                            case sr.Do.Product:
                                const r = this.gp.payments.getProduct(e.id);
                                r && i.products.push(Object.assign(Object.assign({}, r), {
                                    isExists: this.gp.payments.has(e.id)
                                }))
                            }
                        }
                        ), [])
                    }
                    )),
                    i) : i
                }
                has(e) {
                    const {event: t} = Ns(this, Ss, "m", Cs).call(this, e);
                    return !!(null == t ? void 0 : t.isActive)
                }
                isJoined(e) {
                    const {event: t, playerEvent: n} = Ns(this, Ss, "m", Cs).call(this, e);
                    return !!(null == t ? void 0 : t.isActive) && !!n
                }
                join(e) {
                    return t = this,
                    n = void 0,
                    r = function*() {
                        const t = Number(e.id) || e.tag
                          , n = (0,
                        u._)()
                          , i = t=>{
                            const i = "string" == typeof t ? t : t.message;
                            return n.abort(i),
                            this._events.emit("error:join", i, {
                                input: e
                            }),
                            n.ready
                        }
                          , {event: r, playerEvent: s} = Ns(this, Ss, "m", Cs).call(this, t);
                        if (!r)
                            return i("event_not_found");
                        if (s)
                            return i("already_joined");
                        try {
                            this.gp.loader.inc();
                            const e = yield this.gp._eventsService.join({
                                eventId: r.id
                            })
                              , {__typename: t} = e
                              , i = function(e, t) {
                                var n = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var r = 0;
                                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                                        t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                                }
                                return n
                            }(e, ["__typename"]);
                            Ns(this, Os, "f").some((e=>e.eventId === i.eventId)) || Ns(this, Os, "f").push(i),
                            n.done({
                                event: r,
                                playerEvent: i
                            }),
                            this._events.emit("join", {
                                event: r,
                                playerEvent: i
                            })
                        } catch (e) {
                            i(e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready
                    }
                    ,
                    new ((i = void 0) || (i = Promise))((function(e, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value,
                            n instanceof i ? n : new i((function(e) {
                                e(n)
                            }
                            ))).then(a, o)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }
                    ));
                    var t, n, i, r
                }
            }
            As = new WeakMap,
            ks = new WeakMap,
            Os = new WeakMap,
            Ss = new WeakSet,
            Cs = function(e) {
                const t = {
                    event: null,
                    playerEvent: null
                }
                  , n = Ns(this, ks, "f").find((t=>t.tag === e || t.id === e));
                return n ? (t.event = n,
                n && (t.playerEvent = Ns(this, Os, "f").find((e=>e.eventId === n.id))),
                t) : t
            }
            ;
            var Ds, Ms, Ls = n(2619), js = n(6256);
            class $s {
                constructor() {
                    Ds.add(this),
                    this.type = function(e, t, n, i) {
                        if ("a" === n && !i)
                            throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !i : !t.has(e))
                            throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                    }(this, Ds, "m", Ms).call(this)
                }
                _satisfies(e) {
                    return e.includes(this.type)
                }
            }
            Ds = new WeakSet,
            Ms = function() {
                const e = new js.UAParser
                  , t = e.getOS()
                  , n = e.getDevice();
                return "iOS" === t.name ? sr.U7.Ios : "Android" === t.name ? sr.U7.Android : "smarttv" === n.type ? sr.U7.Tv : sr.U7.Desktop
            }
            ;
            var Fs;
            class Us {
                constructor(e) {
                    Fs.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, Fs, e, "f")
                }
                register(e) {
                    return t = this,
                    n = void 0,
                    r = function*() {
                        return function(e, t, n, i) {
                            if ("a" === n && !i)
                                throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                                throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                        }(this, Fs, "f").fetch("\n    mutation ($input: PlayerRegisterOnSchedulerInput!) {\n        result: PlayerRegisterOnScheduler(input: $input) {\n            __typename\n            ... on Problem { message }\n            ... on PlayerScheduler { \n    daysClaimed\n    schedulerId\n    stats {\n        activeDays\n        activeDaysConsecutive\n    }\n }\n        }\n    }\n", e)
                    }
                    ,
                    new ((i = void 0) || (i = Promise))((function(e, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value,
                            n instanceof i ? n : new i((function(e) {
                                e(n)
                            }
                            ))).then(a, o)
                        }
                        c((r = r.apply(t, n || [])).next())
                    }
                    ));
                    var t, n, i, r
                }
            }
            Fs = new WeakMap;
            var Bs, Gs, Ws, qs, Vs, Ys = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, zs = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class Ks {
                constructor(e, t) {
                    this.gp = e,
                    Bs.add(this),
                    Gs.set(this, void 0),
                    Ws.set(this, []),
                    qs.set(this, {}),
                    Ys(this, Gs, t, "f"),
                    zs(this, Gs, "f").on("setExperiments", (e=>zs(this, Bs, "m", Vs).call(this, e.playerExperiments)))
                }
                get map() {
                    return Object.assign({}, zs(this, qs, "f"))
                }
                has(e, t) {
                    return e in zs(this, qs, "f") && zs(this, qs, "f")[e] === t
                }
            }
            Gs = new WeakMap,
            Ws = new WeakMap,
            qs = new WeakMap,
            Bs = new WeakSet,
            Vs = function(e) {
                if (0 === e.length)
                    return;
                let t = !1;
                const n = {};
                Ys(this, qs, e.reduce(((e,i,r)=>{
                    var s;
                    return e[i.experiment] = i.cohort,
                    n[`GP_AB_${i.experiment}`] = i.cohort,
                    t || (null === (s = zs(this, Ws, "f")[r]) || void 0 === s ? void 0 : s.cohort) === i.cohort || (t = !0),
                    e
                }
                ), {}), "f"),
                Ys(this, Ws, e, "f"),
                this.gp.analytics._experimentsVisitParams = n,
                t && this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)
            }
            ;
            var Js, Zs, Hs, Xs, Qs = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, ea = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class ta extends Be.Z {
                constructor(e, t) {
                    super(),
                    this.gp = e,
                    Js.add(this),
                    Zs.set(this, void 0),
                    Hs.set(this, []),
                    Qs(this, Zs, t, "f"),
                    ea(this, Zs, "f").on("setPlayerSegments", (e=>ea(this, Js, "m", Xs).call(this, e.playerSegments, e.enterSegments, e.leftSegments)))
                }
                get list() {
                    return [...ea(this, Hs, "f")]
                }
                has(e) {
                    return ea(this, Hs, "f").includes(e)
                }
            }
            Zs = new WeakMap,
            Hs = new WeakMap,
            Js = new WeakSet,
            Xs = function(e, t, n) {
                (0 === ea(this, Hs, "f").length && e.length > 0 || t.length > 0 || n.length > 0) && (this.gp.analytics._segmentsVisitParams = e.reduce(((e,t)=>(e[`GP_SEGMENT_${t}`] = "1",
                e)), {}),
                this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)),
                Qs(this, Hs, e, "f"),
                t.forEach((e=>this._events.emit("enter", e))),
                n.forEach((e=>this._events.emit("leave", e)))
            }
            ;
            var na, ia, ra, sa, aa, oa, ca, la, ha = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, ua = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }, da = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            };
            class pa extends Be.Z {
                constructor() {
                    super(),
                    na.add(this),
                    this.setBackground = tr,
                    this.isPaused = !1,
                    this.isGameplay = !1,
                    this.isGameStarted = !1,
                    this.logger = Me.kg,
                    ia.set(this, void 0),
                    ra.set(this, void 0),
                    sa.set(this, void 0),
                    aa.set(this, void 0),
                    ua(this, na, "m", oa).call(this)
                }
                get nativeSDK() {
                    return this.platform.getNativeSDK()
                }
                get serverTime() {
                    return new Date(ua(this, aa, "f")).toISOString()
                }
                get isDev() {
                    var e;
                    return (null === (e = ua(this, ra, "f")) || void 0 === e ? void 0 : e.isDev) || !1
                }
                get isAllowedOrigin() {
                    var e;
                    return (null === (e = ua(this, ra, "f")) || void 0 === e ? void 0 : e.isAllowedOrigin) || !1
                }
                get locale() {
                    return Le.h$[this.language] || "en-US"
                }
                get isPortrait() {
                    return ar()
                }
                init(e) {
                    return ha(this, void 0, void 0, (function*() {
                        this.channels.on("event:connect", (({hash: e})=>{
                            this.player._firstReqHash !== e && this._events.emit("event:connect")
                        }
                        ));
                        const t = ()=>{
                            this.ads.isAllowedToResumeGameplay && this.resume()
                        }
                          , n = ()=>{
                            this.pause()
                        }
                        ;
                        this.ads.on("fullscreen:start", n),
                        this.ads.on("fullscreen:close", t),
                        this.ads.on("preloader:start", n),
                        this.ads.on("preloader:close", t),
                        this.ads.on("rewarded:start", n),
                        this.ads.on("rewarded:close", t),
                        yield Promise.all([this.ads.checkAdblock()]).catch(Me.kg.warn),
                        e.done(this)
                    }
                    ))
                }
                loadOverlay() {
                    return ha(this, void 0, void 0, (function*() {
                        this.overlay || (this.overlay = yield Promise.all([n.e(690), n.e(9), n.e(573), n.e(460)]).then(n.bind(n, 7586)).then((e=>e.default(this))),
                        this._events.emit("overlay:ready"))
                    }
                    ))
                }
                get _overlaySizeOffsets() {
                    return {
                        top: this.ads._stickyBannerOffsets.top,
                        bottom: this.ads._stickyBannerOffsets.bottom
                    }
                }
                changeLanguage(e) {
                    return ha(this, void 0, void 0, (function*() {
                        if (this.language !== e)
                            try {
                                if (!Object.values(Le.Uo).includes(e))
                                    throw new Error(`Language ${e} not supported`);
                                this.language = e,
                                this._storage.saveLanguage(e),
                                this.overlay && (yield this.overlay.changeLanguage(e)),
                                ua(this, sa, "f").setLang(this.language),
                                this._events.emit("change:language", this.language)
                            } catch (e) {
                                Me.kg.error(e)
                            }
                    }
                    ))
                }
                changeAvatarGenerator() {
                    return ha(this, void 0, void 0, (function*() {
                        Me.kg.warn("[DEPRECATED]: changeAvatarGenerator")
                    }
                    ))
                }
                generateAvatar(e, t) {
                    return (0,
                    ji.Z)(this.avatarGeneratorTemplate, e, t)
                }
                pause() {
                    this.isPaused || (this.isPaused = !0,
                    this._events.emit("pause"))
                }
                resume() {
                    this.isPaused && (this.isPaused = !1,
                    this._events.emit("resume"))
                }
                gameStart() {
                    return ha(this, void 0, void 0, (function*() {
                        yield this.ready,
                        this.isGameStarted || (this._events.emit("gameStart"),
                        this.isGameStarted = !0)
                    }
                    ))
                }
                gameplayStart() {
                    return ha(this, void 0, void 0, (function*() {
                        yield this.ready,
                        this.isGameplay || (this.isGameplay = !0,
                        this._events.emit("gameplayStart"))
                    }
                    ))
                }
                gameplayStop() {
                    return ha(this, void 0, void 0, (function*() {
                        yield this.ready,
                        this.isGameplay && (this.isGameplay = !1,
                        this._events.emit("gameplayStop"))
                    }
                    ))
                }
            }
            ia = new WeakMap,
            ra = new WeakMap,
            sa = new WeakMap,
            aa = new WeakMap,
            na = new WeakSet,
            oa = function() {
                return ha(this, void 0, void 0, (function*() {
                    const e = (0,
                    u._)();
                    this.ready = e.ready;
                    const t = new URL(document.currentScript.src).searchParams;
                    this.projectId = Number(t.get("projectId"));
                    const i = t.get("publicToken")
                      , c = t.get("callback") || "onGPInit";
                    this.ready.then((e=>{
                        var t, n, i, r;
                        null === (n = (t = window)[c]) || void 0 === n || n.call(t, e),
                        "onGSInit" !== c && (null === (r = (i = window).onGSInit) || void 0 === r || r.call(i, e))
                    }
                    )),
                    this.fullscreen = new Et,
                    this.analytics = new Tt,
                    this.leaderboard = new Ze(this),
                    this.gamesCollections = new on(this),
                    this.documents = new Wn(this),
                    this.players = new $i(this),
                    this.isMobile = r()({
                        tablet: !0,
                        featureDetect: !0
                    }),
                    this.device = new $s;
                    const l = navigator.language.slice(0, 2).toLowerCase()
                      , h = yield function() {
                        return $t(this, void 0, void 0, (function*() {
                            const e = new URL(window.location.href)
                              , {searchParams: t, hostname: n} = e
                              , i = yield function() {
                                return $t(this, void 0, void 0, (function*() {
                                    const e = (0,
                                    jt._X)()
                                      , {cordova: t} = window;
                                    if (t)
                                        try {
                                            t.exec((()=>{
                                                e.done(!0)
                                            }
                                            ), (()=>{
                                                e.done(!1)
                                            }
                                            ), "GooglePlayServicesChecker", "check", [])
                                        } catch (e) {
                                            console.warn(e)
                                        }
                                    else
                                        e.done(!1);
                                    return e.ready
                                }
                                ))
                            }();
                            return t.has("_platform") ? t.get("_platform") : function(e) {
                                return !!e.hostname.includes(["games", "s3", "yandex", "net"].join(".")) || !!e.hash.includes("origin=https") && (e.hash.includes("app-id=") || e.searchParams.has("app-id"))
                            }(e) ? a.z.YANDEX : n.includes("gamemonetize.co") ? a.z.GAME_MONETIZE : n.includes("gamedistribution.co") ? a.z.GAME_DISTRIBUTION : n.includes("crazygames.com") ? a.z.CRAZY_GAMES : n.includes(".gamepix.com") ? a.z.GAMEPIX : n.includes(".wgplayground.com") ? a.z.WG_PLAYGROUND : n.includes("poki.com") || t.has("pokiDebug") || n.includes("poki-gdn.com") ? a.z.POKI : t.has("api_id") && t.has("viewer_id") && t.has("auth_key") || t.get("vk_user_id") && t.get("sign") && t.get("vk_app_id") ? a.z.VK : t.has("auth_sig") && t.has("session_key") ? a.z.OK : t.has("gp_beeline_token") ? a.z.BEELINE : n.includes(".konggames.com") || t.has("kongregate_game_version") && t.has("kongregate_host") ? a.z.KONGREGATE : n.includes("static.developer.sberdevices.ru") || Array.isArray(window.appInitialData) && window.appInitialData.some((e=>"app_context" === (null == e ? void 0 : e.type))) ? a.z.SMARTMARKET : function(e) {
                                const {searchParams: t} = e;
                                if (!(t.get("lang") || "").includes("_"))
                                    return !1;
                                if (!t.has("currency"))
                                    return !1;
                                if (t.has("uid") && t.has("sign") && t.has("appid"))
                                    return !0;
                                const n = t.get("status");
                                return Number(t.get("appid")) > 0 || n.length > 0 && !Number.isNaN(t.get("status"))
                            }(e) ? a.z.VK_PLAY : i ? a.z.GOOGLE_PLAY : a.z.NONE
                        }
                        ))
                    }();
                    let p = Object.values(Le.Uo).includes(l) ? l : null;
                    h !== a.z.GAME_DISTRIBUTION && h !== a.z.GAMEPIX && h !== a.z.WG_PLAYGROUND || (p = Le.Uo.EN);
                    const f = h === a.z.VK && this.device.type === sr.U7.Ios && "file:" === location.protocol ? "https://api.eponesh.com/gs/api".replace("https", "vkcors") : "https://api.eponesh.com/gs/api";
                    da(this, sa, new g(f,this.projectId,i,p || Le.Uo.EN,h), "f");
                    const m = e=>{
                        ua(this, sa, "f").setPlayerData(e)
                    }
                    ;
                    var v, y;
                    this._playerService = new d.ZP(ua(this, sa, "f")),
                    this._channelsService = new Oe(ua(this, sa, "f")),
                    this._leaderboardsService = new Fn(ua(this, sa, "f")),
                    this._projectService = new Le.ZP(ua(this, sa, "f")),
                    this._achievementsService = new Ut.ZP(ua(this, sa, "f")),
                    this._paymentsService = new Ht.ZP(ua(this, sa, "f")),
                    this._gamesCollectionsService = new Qt(ua(this, sa, "f")),
                    this._documentsService = new Bn(ua(this, sa, "f")),
                    this._imagesService = new ii(ua(this, sa, "f")),
                    this._filesService = new Ni(ua(this, sa, "f")),
                    this._rewardsService = new dr.ZP(ua(this, sa, "f")),
                    this._eventsService = new Ls.ZP(ua(this, sa, "f")),
                    this._schedulersService = new Us(ua(this, sa, "f")),
                    this._pointersManager = new ur,
                    da(this, ia, new rr, "f"),
                    function({platformType: e, tools: t}) {
                        return function(e, t) {
                            return (o[e] || o[a.z.NONE])().then((e=>e.default(t)))
                        }(e, t)
                    }({
                        platformType: h,
                        tools: {
                            gp: this,
                            setupStorage: e=>{
                                const t = [new Vt(this.projectId), ...e];
                                try {
                                    null !== window.localStorage && t.push(new Jt(this.projectId))
                                } catch (e) {}
                                return this._storage = new Ue(t),
                                this._storage.ready
                            }
                            ,
                            fetchConfig: e=>ha(this, void 0, void 0, (function*() {
                                yield this._storage.ready;
                                const [t,n,i,r] = yield Promise.all([this._storage.loadLanguage(), this._storage.loadConfig(), this._storage.loadAdsInfo(), ua(this, ia, "f").getLanguage()]);
                                return t || this._storage.saveLanguage(null),
                                this.language = r || t || e || p || Le.Uo.EN,
                                ua(this, sa, "f").setLang(this.language),
                                this._projectService.fetchConfig().then((e=>e || n)).catch((e=>(console.error(e),
                                n)))
                            }
                            ))
                        }
                    }).then((t=>ha(this, void 0, void 0, (function*() {
                        const {adsAdapter: i, playerAdapter: r, platformAdapter: o, socialsAdapter: c, paymentsAdapter: l, projectConfig: u, appAdapter: d} = t;
                        da(this, ra, u, "f"),
                        da(this, aa, Date.parse(u.serverTime), "f"),
                        et((e=>{
                            da(this, aa, ua(this, aa, "f") + e, "f")
                        }
                        )),
                        h === a.z.GAMEPIX || h === a.z.GAME_DISTRIBUTION || h === a.z.WG_PLAYGROUND || (u.config.ymCounterId && this.analytics.addCounter(new At({
                            counterId: u.config.ymCounterId
                        })),
                        u.config.gtagCounterId && this.analytics.addCounter(new Ot({
                            counterId: u.config.gtagCounterId
                        }))),
                        this.avatarGenerator = u.config.avatarGenerator,
                        this.avatarGeneratorTemplate = u.config.avatarGeneratorTemplate,
                        this.loader = function(e) {
                            let t = 0;
                            const n = document.createElement("div");
                            function i() {
                                n.style.display = t > 0 ? "flex" : "none"
                            }
                            return n.classList.add("gs-global-loader"),
                            n.innerHTML = `<div class="gs-loader ${!e && "gs-loader-hidden"}">\n        <div class="gs-loader__outter"></div>\n        <div class="gs-loader__inner"></div>\n    </div>`,
                            document.body.appendChild(n),
                            {
                                inc() {
                                    t += 1,
                                    i()
                                },
                                dec() {
                                    t = t <= 0 ? 0 : t - 1,
                                    i()
                                }
                            }
                        }(u.config.showLoader),
                        this._storage.saveConfig(u);
                        const p = new rs;
                        this.platform = new Ce(u.platformConfig,o),
                        this.ads = new s.Z(this,i,u),
                        this.app = new Lt.Z(this,d,u),
                        this.socials = new Mt(c,this,u),
                        this.channels = new An(this,u),
                        this.player = new bt({},u.playerFields,r,this,p,m),
                        this.payments = new Xt.Z(this,p,l,u),
                        this.variables = new zn(this,u.gameVariables || []),
                        this.images = new Ti(this,u.acl),
                        this.files = new Li(this,u.acl),
                        this.achievements = new Bt.Z(this,p,u),
                        this.rewards = new Lr(this,p,u.rewards),
                        this.triggers = new es(this,p,u),
                        this.schedulers = new Is(this,p,u.schedulers),
                        this.segments = new ta(this,p),
                        this.events = new xs(this,p,u.events),
                        this.experiments = new Ks(this,p),
                        this.isDev ? (this.devtools = yield Promise.all([n.e(690), n.e(9), n.e(863)]).then(n.bind(n, 4070)).then((e=>e.default(this, p, u))),
                        u.config.showReqCounter && ua(this, sa, "f").addCounterListener((e=>{
                            this.devtools.showCounter(e)
                        }
                        ))) : Me.kg.stopCollect(),
                        ua(this, na, "m", la).call(this),
                        ua(this, na, "m", ca).call(this),
                        this.init(e)
                    }
                    )))).catch(Me.kg.error),
                    v = ()=>this.pause(),
                    y = ()=>{
                        this.ads && (this.ads.isFullscreenPlaying || this.ads.isPreloaderPlaying || this.ads.isRewardedPlaying || this.resume())
                    }
                    ,
                    Qi.addEventListener("statechange", (e=>{
                        er.includes(e.newState) ? v() : y()
                    }
                    ))
                }
                ))
            }
            ,
            ca = function() {
                const {showOrientationOverlay: e, orientation: t} = ua(this, ra, "f").config
                  , n = e && this.isMobile && t != sr.LH.Any
                  , i = ()=>ha(this, void 0, void 0, (function*() {
                    var e;
                    n && !or(t) ? (yield this.loadOverlay(),
                    or(t) || this.overlay.showOrientationOverlay(t)) : null === (e = this.overlay) || void 0 === e || e.closeOrientationOverlay()
                }
                ));
                var r;
                r = e=>{
                    this._events.emit("change:orientation", e),
                    i()
                }
                ,
                window.matchMedia("(orientation: portrait)").addEventListener("change", (()=>requestAnimationFrame((()=>r(ar()))))),
                i()
            }
            ,
            la = function() {
                return ha(this, void 0, void 0, (function*() {
                    const {showUnsupportedOSOverlay: e, targetOS: t} = ua(this, ra, "f").config;
                    this.logger.info(`Running on ${this.device.type}`),
                    e ? this.logger.info(`allowed=(${t.join(",")})`) : this.logger.info("no device restrictions"),
                    e && !this.device._satisfies(t) && (this.logger.info(`${this.device.type} is restricted`),
                    yield this.loadOverlay(),
                    this.overlay.setUnsupportedDeviceOverlay({
                        allowed: t,
                        detected: this.device.type
                    }))
                }
                ))
            }
        }
        ,
        3080: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>j,
                M: ()=>$
            });
            var i, r, s, a, o, c, l, h, u, d, p, f, m, v, y, g, w, b, E, P, _, T, I, S = n(6558), A = n(1437), k = n(4835), O = n(8293), C = n(6388), R = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, N = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, x = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            }, D = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                }
                return n
            };
            const M = "already_unlocked"
              , L = "achievement_not_found";
            class j extends C.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    i.add(this),
                    r.set(this, void 0),
                    s.set(this, void 0),
                    a.set(this, []),
                    o.set(this, []),
                    c.set(this, []),
                    l.set(this, {}),
                    h.set(this, {}),
                    u.set(this, {}),
                    d.set(this, {}),
                    p.set(this, {}),
                    f.set(this, {}),
                    m.set(this, {}),
                    v.set(this, new Set),
                    N(this, r, n.project.achievements, "f"),
                    N(this, a, [...n.achievements], "f"),
                    N(this, o, [...n.achievementsGroups], "f"),
                    x(this, i, "m", _).call(this),
                    x(this, i, "m", T).call(this),
                    N(this, s, t, "f"),
                    x(this, s, "f").on("setAchievementsList", (e=>x(this, i, "m", E).call(this, e.achievements))),
                    x(this, s, "f").on("markAchievementsUnlocked", (e=>{
                        e.forEach((e=>{
                            const {achievement: t, playerAchievement: n} = x(this, i, "m", b).call(this, e);
                            if (!t)
                                return void S.kg.error(`achievement not found, ID: ${e}`);
                            if (n)
                                return void S.kg.error(`player achievement already unlocked, ID: ${e}, Tag: ${t.tag}`);
                            const s = {
                                achievementId: t.id,
                                unlocked: !0,
                                progress: t.maxProgress || 0
                            };
                            let a;
                            x(this, r, "f").enableUnlockToast && (a = this.gp.loadOverlay());
                            const o = Object.assign(Object.assign({}, t), s);
                            x(this, i, "m", P).call(this, o),
                            this._events.emit("unlock", o),
                            x(this, r, "f").enableUnlockToast && Promise.all([a, (0,
                            A.p)($(o)).catch(S.kg.error)]).then((()=>{
                                this.gp.overlay.unlockAchievement(o)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    this.gp.on("change:language", (e=>{
                        x(this, a, "f").forEach((t=>{
                            t.name = t.names[e] || t.names.en,
                            t.description = t.descriptions[e] || t.descriptions.en
                        }
                        )),
                        x(this, o, "f").forEach((t=>{
                            t.name = t.names[e] || t.names.en,
                            t.description = t.descriptions[e] || t.descriptions.en
                        }
                        )),
                        x(this, i, "m", _).call(this)
                    }
                    ))
                }
                get list() {
                    return [...x(this, a, "f")]
                }
                get groupsList() {
                    return [...x(this, o, "f")]
                }
                get playerAchievementsList() {
                    return [...x(this, c, "f")]
                }
                get unlockedList() {
                    return [...x(this, c, "f")]
                }
                open({scrollTo: e}={}) {
                    return R(this, void 0, void 0, (function*() {
                        this.gp.loader.inc();
                        try {
                            const [t] = yield Promise.all([this.fetch(), this.gp.loadOverlay(), (0,
                            A.p)(k.Z.app.trophy).catch(S.kg.error)]);
                            this.gp.loader.dec(),
                            t.achievements.length > 0 ? (this._events.emit("open"),
                            yield this.gp.overlay.openAchievements(t, {
                                scrollTo: e
                            }).catch(S.kg.error),
                            this._events.emit("close")) : S.kg.error(new Error("Empty achievements list"))
                        } catch (e) {
                            this.gp.loader.dec(),
                            S.kg.error(e)
                        }
                    }
                    ))
                }
                fetch() {
                    return R(this, void 0, void 0, (function*() {
                        const e = (0,
                        O._)();
                        this.gp.loader.inc();
                        try {
                            const t = {
                                achievements: this.list,
                                achievementsGroups: this.groupsList,
                                playerAchievements: this.unlockedList
                            };
                            e.done(t),
                            this._events.emit("fetch", t)
                        } catch (t) {
                            e.abort(t),
                            this._events.emit("error:fetch")
                        } finally {
                            this.gp.loader.dec()
                        }
                        return e.ready
                    }
                    ))
                }
                unlock(e) {
                    return R(this, void 0, void 0, (function*() {
                        const t = (0,
                        O._)()
                          , n = n=>(t.done({
                            success: !1,
                            achievement: null,
                            error: n
                        }),
                        this._events.emit("error:unlock", n, {
                            input: e
                        }),
                        t.ready)
                          , s = Number(e.id) || e.tag
                          , {achievement: a, playerAchievement: o} = x(this, i, "m", b).call(this, s);
                        if (!a)
                            return n(L);
                        if (null == o ? void 0 : o.unlocked)
                            return n(M);
                        if (x(this, v, "f").has(a.id))
                            return n(M);
                        let c;
                        x(this, l, "f")[s] = t,
                        this.gp.loader.inc(),
                        x(this, r, "f").enableUnlockToast && (c = this.gp.loadOverlay());
                        const h = a.id;
                        try {
                            const e = yield this.gp._achievementsService.unlock({
                                id: h
                            })
                              , {achievement: n} = e
                              , s = D(e, ["achievement"])
                              , a = Object.assign(Object.assign({}, n), s);
                            x(this, i, "m", P).call(this, a),
                            this._events.emit("unlock", a),
                            x(this, r, "f").enableUnlockToast && Promise.all([c, (0,
                            A.p)($(a)).catch(S.kg.error)]).then((()=>{
                                this.gp.overlay.unlockAchievement(a)
                            }
                            )),
                            t.done({
                                achievement: a,
                                success: !0,
                                error: ""
                            })
                        } catch (i) {
                            "string" == typeof i ? (i === M && x(this, v, "f").add(a.id),
                            S.kg.error(i),
                            n(i)) : (t.abort(i),
                            this._events.emit("error:unlock", i, {
                                input: e
                            }))
                        } finally {
                            this.gp.loader.dec()
                        }
                        return t.ready.finally((()=>{
                            delete x(this, l, "f")[s]
                        }
                        )),
                        t.ready
                    }
                    ))
                }
                getAchievement(e) {
                    return x(this, i, "m", b).call(this, e)
                }
                has(e) {
                    var t;
                    return !!(null === (t = x(this, i, "m", b).call(this, e).playerAchievement) || void 0 === t ? void 0 : t.unlocked)
                }
                setProgress(e) {
                    var t;
                    return R(this, void 0, void 0, (function*() {
                        const n = (0,
                        O._)()
                          , s = t=>(n.done({
                            success: !1,
                            achievement: null,
                            error: t
                        }),
                        this._events.emit("error:progress", t, {
                            input: e
                        }),
                        n.ready)
                          , a = Number(e.id) || e.tag
                          , {achievement: o} = x(this, i, "m", b).call(this, a);
                        return o ? a in x(this, h, "f") ? (x(this, h, "f")[a] = e.progress,
                        null === (t = x(this, u, "f")[a]) || void 0 === t ? void 0 : t.ready) : (x(this, h, "f")[a] = e.progress,
                        x(this, u, "f")[a] = n,
                        setTimeout((()=>R(this, void 0, void 0, (function*() {
                            const t = x(this, h, "f")[a]
                              , {playerAchievement: c} = x(this, i, "m", b).call(this, a);
                            if (x(this, v, "f").has(o.id))
                                return s(M);
                            if (null == c ? void 0 : c.unlocked)
                                return s(M);
                            const l = (null == c ? void 0 : c.progress) || 0;
                            if (l === t)
                                return s("progress_the_same");
                            let u;
                            this.gp.loader.inc(),
                            x(this, r, "f").enableUnlockToast && (u = this.gp.loadOverlay()),
                            yield this.gp._achievementsService.setProgress(Object.assign(Object.assign({}, e), {
                                progress: t
                            })).then((e=>{
                                var {achievement: t} = e
                                  , s = D(e, ["achievement"]);
                                const a = Object.assign(Object.assign({}, t), s)
                                  , o = Math.floor(l / a.progressStep)
                                  , c = Math.floor(a.progress / a.progressStep);
                                x(this, i, "m", P).call(this, s),
                                x(this, r, "f").enableUnlockToast && (a.unlocked || o < c) && Promise.all([u, (0,
                                A.p)($(a)).catch(S.kg.error)]).then((()=>{
                                    this.gp.overlay.unlockAchievement(a)
                                }
                                )),
                                a.unlocked && this._events.emit("unlock", a),
                                this._events.emit("progress", a),
                                n.done({
                                    achievement: a,
                                    success: !0,
                                    error: ""
                                })
                            }
                            )).catch((t=>{
                                "string" == typeof t ? (t === M && x(this, v, "f").add(o.id),
                                S.kg.error(t),
                                s(t)) : (n.abort(t),
                                this._events.emit("error:progress", t, {
                                    input: e
                                }))
                            }
                            )),
                            this.gp.loader.dec()
                        }
                        ))), 1e3),
                        n.ready.finally((()=>{
                            delete x(this, u, "f")[a],
                            delete x(this, h, "f")[a]
                        }
                        )),
                        n.ready) : s(L)
                    }
                    ))
                }
                getProgress(e) {
                    const {achievement: t, playerAchievement: n} = x(this, i, "m", b).call(this, e);
                    return t && n ? n.progress : 0
                }
            }
            function $(e) {
                let t = "";
                return t = window.devicePixelRatio > 1 ? e.unlocked ? e.icon || e.lockedIcon : e.lockedIcon || e.icon : e.unlocked ? e.iconSmall || e.lockedIconSmall : e.lockedIconSmall || e.iconSmall,
                t || k.Z.cdn.trophy
            }
            r = new WeakMap,
            s = new WeakMap,
            a = new WeakMap,
            o = new WeakMap,
            c = new WeakMap,
            l = new WeakMap,
            h = new WeakMap,
            u = new WeakMap,
            d = new WeakMap,
            p = new WeakMap,
            f = new WeakMap,
            m = new WeakMap,
            v = new WeakMap,
            i = new WeakSet,
            y = function(e) {
                return x(this, d, "f")[e] || x(this, p, "f")[e]
            }
            ,
            g = function(e) {
                return x(this, f, "f")[e]
            }
            ,
            w = function(e) {
                return x(this, o, "f")[e]
            }
            ,
            b = function(e) {
                const t = {
                    achievement: null,
                    playerAchievement: null,
                    achievementGroup: null
                }
                  , n = x(this, i, "m", y).call(this, e);
                if (!n)
                    return t;
                t.achievement = n;
                const r = x(this, i, "m", g).call(this, n.id);
                r && (t.playerAchievement = r);
                const s = x(this, i, "m", w).call(this, n.id);
                return s && (t.achievementGroup = s),
                t
            }
            ,
            E = function(e) {
                N(this, c, [...e], "f"),
                x(this, i, "m", I).call(this)
            }
            ,
            P = function(e) {
                x(this, c, "f").some((t=>t.achievementId === e.achievementId)) ? N(this, c, x(this, c, "f").map((t=>t.achievementId === e.achievementId ? e : t)), "f") : x(this, c, "f").push(e),
                x(this, i, "m", I).call(this)
            }
            ,
            _ = function() {
                N(this, d, {}, "f"),
                N(this, p, {}, "f"),
                x(this, a, "f").forEach((e=>{
                    x(this, d, "f")[e.id] = e,
                    x(this, p, "f")[e.tag] = e
                }
                ))
            }
            ,
            T = function() {
                N(this, m, {}, "f"),
                x(this, o, "f").forEach((e=>{
                    x(this, m, "f")[e.id] = e
                }
                ))
            }
            ,
            I = function() {
                N(this, f, {}, "f"),
                x(this, c, "f").forEach((e=>{
                    x(this, f, "f")[e.achievementId] = e
                }
                ))
            }
        }
        ,
        4687: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>S
            });
            var i, r, s, a, o, c, l, h, u, d, p, f, m, v, y, g, w = n(6558), b = n(8293), E = n(6388), P = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            }, _ = function(e, t, n, i, r) {
                if ("m" === i)
                    throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n),
                n
            }, T = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const I = "product_not_found";
            class S extends E.Z {
                constructor(e, t, n, f) {
                    super(),
                    this.gp = e,
                    this.adapter = n,
                    i.add(this),
                    r.set(this, void 0),
                    s.set(this, []),
                    a.set(this, []),
                    o.set(this, {}),
                    c.set(this, {}),
                    l.set(this, {}),
                    h.set(this, {}),
                    u.set(this, {}),
                    _(this, a, f.products, "f"),
                    T(this, i, "m", y).call(this),
                    _(this, r, t, "f"),
                    T(this, r, "f").on("setPurchasedList", (e=>T(this, i, "m", v).call(this, e.playerPurchases))),
                    T(this, r, "f").on("markPurchasesGiven", (e=>{
                        e.forEach((e=>{
                            const {product: t} = T(this, i, "m", p).call(this, e);
                            if (!t)
                                return void w.kg.error(`product not found, ID: ${e}`);
                            const n = {
                                productId: t.id,
                                tag: t.tag,
                                payload: {},
                                createdAt: this.gp.serverTime,
                                expiredAt: t.isSubscription ? A(this.gp.serverTime, t.period) : "",
                                gift: !0,
                                subscribed: t.isSubscription
                            };
                            T(this, s, "f").push(n),
                            T(this, i, "m", g).call(this),
                            this._events.emit(t.isSubscription ? "subscribe" : "purchase", {
                                product: t,
                                purchase: n
                            })
                        }
                        ))
                    }
                    )),
                    T(this, r, "f").on("syncPurchases", (e=>T(this, i, "m", d).call(this).finally(e))),
                    this.gp.on("change:language", (e=>{
                        T(this, a, "f").forEach((t=>{
                            t.name = t.names[e] || t.names.en,
                            t.description = t.descriptions[e] || t.descriptions.en
                        }
                        )),
                        T(this, i, "m", y).call(this)
                    }
                    )),
                    this.adapter.mapProducts(this.gp, this.products).then((e=>{
                        _(this, a, e, "f"),
                        T(this, i, "m", y).call(this)
                    }
                    ))
                }
                get isAvailable() {
                    return this.adapter.isSupportsPayments
                }
                get isSubscriptionsAvailable() {
                    return this.adapter.isSupportsSubscriptions
                }
                get products() {
                    return [...T(this, a, "f")]
                }
                get purchases() {
                    return [...T(this, s, "f")]
                }
                fetchProducts() {
                    return P(this, void 0, void 0, (function*() {
                        const e = (0,
                        b._)();
                        this.gp.loader.inc();
                        try {
                            const t = this.purchases
                              , n = yield this.adapter.mapProducts(this.gp, this.products);
                            _(this, a, n, "f"),
                            T(this, i, "m", y).call(this),
                            e.done({
                                products: n,
                                playerPurchases: t
                            }),
                            this._events.emit("fetchProducts", {
                                products: n,
                                playerPurchases: t
                            })
                        } catch (t) {
                            e.abort(t),
                            this._events.emit("error:fetchProducts", t)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return e.ready
                    }
                    ))
                }
                purchase(e) {
                    return P(this, void 0, void 0, (function*() {
                        const t = Number(e.id) || e.tag;
                        if (T(this, o, "f")[t])
                            throw new Error("payment_in_progress");
                        const n = (0,
                        b._)()
                          , r = t=>(n.abort(t),
                        this._events.emit("error:purchase", t, {
                            input: e
                        }),
                        n.ready)
                          , {product: a} = T(this, i, "m", p).call(this, t);
                        if (!a)
                            return r(I);
                        T(this, o, "f")[t] = n,
                        this.gp.loader.inc();
                        try {
                            let e, t, r = !0, o = "";
                            this.gp.player.isLoggedInByPlatform ? this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync()) : yield this.gp.player.sync({
                                silent: !1
                            });
                            try {
                                t = yield this.adapter.purchase(a)
                            } catch (e) {
                                throw e
                            }
                            if (this.adapter.isServerValidation)
                                e = {
                                    productId: a.id,
                                    tag: a.tag,
                                    payload: t,
                                    createdAt: this.gp.serverTime,
                                    expiredAt: "",
                                    gift: !1,
                                    subscribed: !1
                                };
                            else
                                try {
                                    e = (yield this.gp._paymentsService.purchase({
                                        id: a.id,
                                        payload: t
                                    })).purchase
                                } catch (e) {
                                    r = !1,
                                    o = e.message
                                }
                            if (!r)
                                throw o;
                            T(this, s, "f").push({
                                productId: a.id,
                                tag: a.tag,
                                createdAt: e.createdAt,
                                expiredAt: e.expiredAt,
                                payload: e.payload,
                                gift: e.gift,
                                subscribed: e.subscribed
                            }),
                            T(this, i, "m", g).call(this),
                            this._events.emit("purchase", {
                                product: a,
                                purchase: e
                            }),
                            n.done({
                                success: r,
                                product: a,
                                purchase: e,
                                error: o
                            })
                        } catch (e) {
                            r(e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready.finally((()=>{
                            delete T(this, o, "f")[t]
                        }
                        )),
                        n.ready
                    }
                    ))
                }
                consume(e) {
                    return P(this, void 0, void 0, (function*() {
                        const t = Number(e.id) || e.tag;
                        T(this, c, "f")[t] && (yield T(this, c, "f")[t]);
                        const n = (0,
                        b._)()
                          , r = t=>(n.abort(t),
                        this._events.emit("error:consume", t, {
                            input: e
                        }),
                        n.ready)
                          , {product: a} = T(this, i, "m", p).call(this, t);
                        if (!a)
                            return r(I);
                        T(this, c, "f")[t] = n,
                        this.gp.loader.inc();
                        const o = a.id;
                        try {
                            const {product: e, purchase: t} = yield this.gp._paymentsService.consume({
                                id: o
                            });
                            t.gift || (yield this.adapter.consume(t));
                            const r = T(this, s, "f").findIndex((t=>t.productId === e.id));
                            -1 !== r && (T(this, s, "f").splice(r, 1),
                            T(this, i, "m", g).call(this)),
                            this._events.emit("consume", {
                                product: e,
                                purchase: t
                            }),
                            n.done({
                                product: e,
                                purchase: t,
                                success: !0,
                                error: ""
                            })
                        } catch (e) {
                            r(e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready.finally((()=>{
                            delete T(this, c, "f")[t]
                        }
                        )),
                        n.ready
                    }
                    ))
                }
                subscribe(e) {
                    return P(this, void 0, void 0, (function*() {
                        const t = Number(e.id) || e.tag;
                        if (T(this, o, "f")[t])
                            return T(this, o, "f")[t];
                        const n = (0,
                        b._)()
                          , r = t=>(n.abort(t),
                        this._events.emit("error:subscribe", t, {
                            input: e
                        }),
                        n.ready)
                          , {product: a, purchase: c} = T(this, i, "m", p).call(this, t);
                        if (!a)
                            return r(I);
                        T(this, o, "f")[t] = n,
                        this.gp.loader.inc();
                        try {
                            if (!a.isSubscription)
                                throw new Error(`Not subscription "${t}", please enable subscription on the product`);
                            let e, r, o = !0, l = "";
                            this.gp.player.isLoggedInByPlatform ? this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync()) : yield this.gp.player.sync({
                                silent: !1
                            });
                            try {
                                r = yield this.adapter.subscribe(a, c)
                            } catch (e) {
                                throw e
                            }
                            if (this.adapter.isServerValidation)
                                e = {
                                    payload: r,
                                    tag: a.tag,
                                    productId: a.id,
                                    createdAt: this.gp.serverTime,
                                    expiredAt: (null == c ? void 0 : c.expiredAt) || A(this.gp.serverTime, a.period),
                                    gift: !1,
                                    subscribed: !0
                                };
                            else
                                try {
                                    e = (yield this.gp._paymentsService.purchase({
                                        id: a.id,
                                        payload: r
                                    })).purchase
                                } catch (e) {
                                    o = !1,
                                    l = e.message
                                }
                            o ? (c && _(this, s, T(this, s, "f").filter((e=>e.productId !== c.productId)), "f"),
                            T(this, s, "f").push({
                                tag: a.tag,
                                productId: a.id,
                                createdAt: e.createdAt,
                                expiredAt: e.expiredAt,
                                payload: e.payload,
                                gift: e.gift,
                                subscribed: !0
                            }),
                            T(this, i, "m", g).call(this),
                            this._events.emit("subscribe", {
                                product: a,
                                purchase: e
                            })) : w.kg.error(l),
                            n.done({
                                success: o,
                                product: a,
                                purchase: e,
                                error: l
                            })
                        } catch (e) {
                            r(e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready.finally((()=>{
                            delete T(this, o, "f")[t]
                        }
                        )),
                        n.ready
                    }
                    ))
                }
                unsubscribe(e) {
                    return P(this, void 0, void 0, (function*() {
                        const t = Number(e.id) || e.tag;
                        if (T(this, o, "f")[t])
                            return T(this, o, "f")[t];
                        const n = (0,
                        b._)()
                          , r = t=>(n.abort(t),
                        this._events.emit("error:unsubscribe", t, {
                            input: e
                        }),
                        n.ready)
                          , {product: a, purchase: c} = T(this, i, "m", p).call(this, t);
                        if (!a)
                            return r(I);
                        T(this, o, "f")[t] = n,
                        this.gp.loader.inc();
                        try {
                            if (!a.isSubscription)
                                throw new Error(`Not subscription "${t}", please enable subscription on the product`);
                            if (!c || !c.subscribed)
                                throw new Error("already_unsubscribed");
                            let e = !0
                              , r = Object.assign({}, c)
                              , o = "";
                            try {
                                yield this.adapter.unsubscribe(a, c)
                            } catch (e) {
                                throw w.kg.error(o),
                                e
                            }
                            r.subscribed = !1,
                            _(this, s, T(this, s, "f").map((e=>e.productId !== c.productId ? e : Object.assign(Object.assign({}, e), {
                                subscribed: !1
                            }))), "f"),
                            T(this, i, "m", g).call(this),
                            this._events.emit("unsubscribe", {
                                product: a,
                                purchase: r
                            }),
                            n.done({
                                success: e,
                                product: a,
                                purchase: r,
                                error: o
                            })
                        } catch (e) {
                            r(e)
                        } finally {
                            this.gp.loader.dec()
                        }
                        return n.ready.finally((()=>{
                            delete T(this, o, "f")[t]
                        }
                        )),
                        n.ready
                    }
                    ))
                }
                has(e) {
                    return !!T(this, i, "m", p).call(this, e).purchase
                }
                getProduct(e) {
                    return T(this, i, "m", p).call(this, e).product
                }
                getPurchase(e) {
                    return T(this, i, "m", p).call(this, e).purchase
                }
            }
            function A(e, t) {
                return function(e, t) {
                    const n = new Date(e);
                    return n.setDate(n.getDate() + t),
                    n
                }(new Date(e), t).toISOString()
            }
            r = new WeakMap,
            s = new WeakMap,
            a = new WeakMap,
            o = new WeakMap,
            c = new WeakMap,
            l = new WeakMap,
            h = new WeakMap,
            u = new WeakMap,
            i = new WeakSet,
            d = function() {
                return P(this, void 0, void 0, (function*() {
                    const {purchases: e, payload: t} = yield this.adapter.fetchPurchases();
                    if (0 === e.length)
                        return;
                    const {purchases: n} = yield this.gp._paymentsService.sync({
                        purchases: e,
                        payload: t
                    });
                    T(this, i, "m", v).call(this, n),
                    this.adapter.consumeAllExpired(this.products, e, n)
                }
                ))
            }
            ,
            p = function(e) {
                const t = {
                    product: null,
                    purchase: null
                }
                  , n = T(this, i, "m", f).call(this, e);
                if (!n)
                    return t;
                t.product = n;
                const r = T(this, i, "m", m).call(this, n.id);
                return r && (t.purchase = r),
                t
            }
            ,
            f = function(e) {
                return T(this, l, "f")[e] || T(this, h, "f")[e]
            }
            ,
            m = function(e) {
                return T(this, u, "f")[e]
            }
            ,
            v = function(e) {
                _(this, s, e.map((e=>Object.assign(Object.assign({}, e), {
                    id: e.productId
                }))), "f"),
                T(this, i, "m", g).call(this)
            }
            ,
            y = function() {
                _(this, l, {}, "f"),
                _(this, h, {}, "f"),
                T(this, a, "f").forEach((e=>{
                    T(this, l, "f")[e.id] = e,
                    T(this, h, "f")[e.tag] = e
                }
                ))
            }
            ,
            g = function() {
                _(this, s, T(this, s, "f").reduce(((e,t)=>{
                    const n = T(this, i, "m", f).call(this, t.productId);
                    return n && e.push(Object.assign(Object.assign({}, t), {
                        id: n.id,
                        tag: n.tag
                    })),
                    e
                }
                ), []), "f"),
                _(this, u, {}, "f"),
                T(this, s, "f").forEach((e=>{
                    T(this, u, "f")[e.productId] = e
                }
                ))
            }
        }
        ,
        4293: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>h
            });
            var i = n(8293);
            const r = ["adsbox", "advertisement", "pub_300x250", "pub_300x250m", "pub_728x90", "text-ad", "textAd", "text_ad", "text_ads", "text-ads", "text-ad-links"];
            var s = n(9233)
              , a = n(6388)
              , o = n(6558)
              , c = n(8866)
              , l = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class h extends a.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    this.adapter = t,
                    this.config = n,
                    this.isAdblockEnabled = !1,
                    this.fullscreenDisplayIntervalId = 0,
                    this.stickyRefreshIntervalId = 0,
                    this.isStickyPlaying = !1,
                    this.isRewardedPlaying = !1,
                    this.isFullscreenPlaying = !1,
                    this.isPreloaderPlaying = !1,
                    this.adsInfo = e._storage.temp.adsInfo;
                    const i = this.config.platformConfig.banners;
                    this.stickyBanner = i.find((e=>e.type === s.$.STICKY)),
                    this.fullscreenBanner = i.find((e=>e.type === s.$.FULLSCREEN)),
                    this.rewardedVideo = i.find((e=>e.type === s.$.REWARDED)),
                    this.preloaderBanner = i.find((e=>e.type === s.$.PRELOADER)),
                    this.banners = i.reduce(((e,t)=>(e[t.type] = t,
                    e)), {}),
                    this._checkLimitsExpired(!0),
                    setInterval((()=>this._checkLimitsExpired(!1)), 1e3)
                }
                get needToLeaveFullscreenBeforeAds() {
                    return this.adapter.needToLeaveFullscreenBeforeAds
                }
                get isAllowedToResumeGameplay() {
                    return !this.isPreloaderPlaying && !this.isFullscreenPlaying && !this.isRewardedPlaying
                }
                get isStickyAvailable() {
                    var e;
                    return this.adapter.isStickyAvailable && (null === (e = this.stickyBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.STICKY)
                }
                get isFullscreenAvailable() {
                    var e;
                    return !this.isPreloaderPlaying && this.adapter.isFullscreenAvailable && (null === (e = this.fullscreenBanner) || void 0 === e ? void 0 : e.enabled) && !this.fullscreenDisplayIntervalId && !this.isBannerLimitReached(s.$.FULLSCREEN)
                }
                get isRewardedAvailable() {
                    var e;
                    return this.adapter.isRewardedAvailable && (null === (e = this.rewardedVideo) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.REWARDED)
                }
                get isPreloaderAvailable() {
                    var e;
                    return this.adapter.isPreloaderAvailable && (null === (e = this.preloaderBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.PRELOADER)
                }
                get isCountdownOverlayEnabled() {
                    return this.config.project.ads.showCountdownOverlay
                }
                get isRewardedFailedOverlayEnabled() {
                    return this.config.project.ads.showRewardedFailedOverlay
                }
                get canShowFullscreenBeforeGamePlay() {
                    return this.adapter.canShowFullscreenBeforeGamePlay
                }
                checkAdblock() {
                    return l(this, void 0, void 0, (function*() {
                        return this.isAdblockEnabled = yield function() {
                            const e = (0,
                            i._)()
                              , t = document.createElement("div");
                            return t.innerHTML = "&nbsp;",
                            t.className = r.join(" "),
                            t.id = "text_ad",
                            t.style.padding = "1px 0 0 0",
                            document.body.appendChild(t),
                            setTimeout((()=>{
                                e.done(0 === t.offsetHeight),
                                document.body.removeChild(t)
                            }
                            ), 10),
                            e.ready
                        }(),
                        this.gp.logger.info("adblock is " + (this.isAdblockEnabled ? "detected" : "not detected")),
                        this.isAdblockEnabled
                    }
                    ))
                }
                sendShowAdsInfo(e) {
                    this.config.acl.canCollectStats && fetch(`https://api.eponesh.com/gs/api/t/b/?q=${btoa(JSON.stringify(Object.assign(Object.assign({}, e), {
                        platformType: this.gp.platform.type,
                        projectId: this.gp.projectId
                    })))}`)
                }
                showFullscreen({showCountdownOverlay: e=!1}={}) {
                    return l(this, void 0, void 0, (function*() {
                        if (yield this.gp._pointersManager.waitForPointersUp(),
                        !this.isFullscreenAvailable)
                            return this._events.emit("close", !1),
                            this._events.emit("fullscreen:close", !1),
                            !1;
                        this.fullscreenBanner.frequency,
                        this._events.emit("start"),
                        this._events.emit("fullscreen:start"),
                        this.sendShowAdsInfo({
                            type: "FULLSCREEN",
                            action: "REQUEST"
                        }),
                        this.fullscreenDisplayIntervalId = window.setTimeout((()=>{
                            this.fullscreenDisplayIntervalId = 0
                        }
                        ), 1e3 * this.fullscreenBanner.frequency),
                        this.isFullscreenPlaying = !0;
                        const t = e || this.isCountdownOverlayEnabled
                          , n = this.gp.fullscreen.isEnabled
                          , i = n && this.adapter.needToLeaveFullscreenBeforeAds;
                        (t || i) && (yield this.gp.loadOverlay()),
                        t && (yield this.gp.loadOverlay(),
                        this.gp.overlay.showPreAdCountdownOverlay(),
                        yield(0,
                        c.Z)(3e3)),
                        i && (this.gp.fullscreen.close(),
                        yield(0,
                        c.Z)(200));
                        let r = !1;
                        try {
                            r = !!(yield this.adapter.showFullscreen(this.fullscreenBanner))
                        } catch (e) {
                            o.kg.error(e)
                        }
                        return this.sendShowAdsInfo({
                            type: "FULLSCREEN",
                            action: r ? "DISPLAY" : "ERROR"
                        }),
                        (t || i) && (this.gp.overlay.closePreAdCountdownOverlay(),
                        yield this.gp.overlay.showPreAdCountdownOverlayFinish(n)),
                        this.isFullscreenPlaying = !1,
                        this._events.emit("close", r),
                        this._events.emit("fullscreen:close", r),
                        r && this._trackBannerDisplay(s.$.FULLSCREEN),
                        r
                    }
                    ))
                }
                showRewardedVideo({showRewardedFailedOverlay: e=!1}={}) {
                    return l(this, void 0, void 0, (function*() {
                        if (yield this.gp._pointersManager.waitForPointersUp(),
                        !this.isRewardedAvailable)
                            return this._events.emit("close", !1),
                            this._events.emit("rewarded:close", !1),
                            !1;
                        const t = this.gp.fullscreen.isEnabled
                          , n = t && this.adapter.needToLeaveFullscreenBeforeAds;
                        n && (yield this.gp.loadOverlay(),
                        this.gp.fullscreen.close(),
                        yield(0,
                        c.Z)(200)),
                        this._events.emit("start"),
                        this._events.emit("rewarded:start"),
                        this.sendShowAdsInfo({
                            type: "REWARDED",
                            action: "REQUEST"
                        }),
                        this.isRewardedPlaying = !0;
                        const i = !!(yield this.adapter.showRewardedVideo(this.rewardedVideo).catch((()=>!1)));
                        n && (this.gp.overlay.closePreAdCountdownOverlay(),
                        yield this.gp.overlay.showPreAdCountdownOverlayFinish(t)),
                        this.sendShowAdsInfo({
                            type: "REWARDED",
                            action: i ? "DISPLAY" : "ERROR"
                        });
                        const r = e || this.isRewardedFailedOverlayEnabled;
                        return !i && r && (yield this.gp.loadOverlay(),
                        yield this.gp.overlay.showRewardedFailedOverlay()),
                        this.isRewardedPlaying = !1,
                        this._events.emit("close", i),
                        this._events.emit("rewarded:close", i),
                        this._trackBannerDisplay(s.$.REWARDED),
                        i && this._events.emit("rewarded:reward"),
                        i
                    }
                    ))
                }
                showPreloader() {
                    return l(this, void 0, void 0, (function*() {
                        if (yield this.gp._pointersManager.waitForPointersUp(),
                        !this.isPreloaderAvailable)
                            return this._events.emit("close", !1),
                            this._events.emit("preloader:close", !1),
                            !1;
                        const e = this.gp.fullscreen.isEnabled
                          , t = e && this.adapter.needToLeaveFullscreenBeforeAds;
                        t && (yield this.gp.loadOverlay(),
                        this.gp.fullscreen.close(),
                        yield(0,
                        c.Z)(200)),
                        this.sendShowAdsInfo({
                            type: "PRELOADER",
                            action: "REQUEST"
                        }),
                        this._events.emit("start"),
                        this._events.emit("preloader:start"),
                        this.isPreloaderPlaying = !0;
                        const n = !!(yield this.adapter.showPreloader(this.preloaderBanner).catch((()=>!1)));
                        return t && (this.gp.overlay.closePreAdCountdownOverlay(),
                        yield this.gp.overlay.showPreAdCountdownOverlayFinish(e)),
                        this.sendShowAdsInfo({
                            type: "PRELOADER",
                            action: n ? "DISPLAY" : "ERROR"
                        }),
                        this.isPreloaderPlaying = !1,
                        this._events.emit("close", n),
                        this._events.emit("preloader:close", n),
                        n && this._trackBannerDisplay(s.$.PRELOADER),
                        n
                    }
                    ))
                }
                showSticky() {
                    var e;
                    return l(this, void 0, void 0, (function*() {
                        if (!this.isStickyAvailable)
                            return this._events.emit("close", !1),
                            this._events.emit("sticky:close", !1),
                            !1;
                        !this.stickyRefreshIntervalId && this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval((()=>this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)),
                        this._events.emit("start"),
                        this._events.emit("sticky:start"),
                        this.sendShowAdsInfo({
                            type: "STICKY",
                            action: "REQUEST"
                        });
                        const t = yield this.adapter.showSticky(this.stickyBanner).catch((()=>!1));
                        return this.sendShowAdsInfo({
                            type: "STICKY",
                            action: t ? "DISPLAY" : "ERROR"
                        }),
                        this.isStickyPlaying = t,
                        this._events.emit("sticky:render", t),
                        t && this._trackBannerDisplay(s.$.STICKY),
                        null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets),
                        t
                    }
                    ))
                }
                refreshSticky() {
                    var e;
                    return l(this, void 0, void 0, (function*() {
                        if (!this.isStickyAvailable)
                            return this._events.emit("close", !1),
                            this._events.emit("sticky:close", !1),
                            !1;
                        clearInterval(this.stickyRefreshIntervalId),
                        this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval((()=>this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)),
                        this._events.emit("sticky:refresh"),
                        this.sendShowAdsInfo({
                            type: "STICKY",
                            action: "REQUEST"
                        });
                        const t = yield this.adapter.refreshSticky(this.stickyBanner).catch((()=>!1));
                        return this.sendShowAdsInfo({
                            type: "STICKY",
                            action: t ? "DISPLAY" : "ERROR"
                        }),
                        this.isStickyPlaying = t,
                        this._events.emit("sticky:render", t),
                        t && this._trackBannerDisplay(s.$.STICKY),
                        null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets),
                        t
                    }
                    ))
                }
                closeSticky() {
                    var e;
                    return l(this, void 0, void 0, (function*() {
                        const t = yield this.adapter.closeSticky();
                        return this.isStickyPlaying = !1,
                        this._events.emit("close", !0),
                        this._events.emit("sticky:close", !0),
                        clearInterval(this.stickyRefreshIntervalId),
                        null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets),
                        t
                    }
                    ))
                }
                get _stickyBannerOffsets() {
                    const {height: e, isOverlapping: t} = this.adapter.stickyBannerConfig
                      , {position: n} = this.stickyBanner;
                    return {
                        top: this.isStickyPlaying && t && "top" === n ? e : 0,
                        bottom: this.isStickyPlaying && t && "bottom" === n ? e : 0
                    }
                }
                _trackBannerDisplay(e) {
                    const t = this.adsInfo.limits[e];
                    t.hour.count += 1,
                    t.day.count += 1,
                    t.session.count += 1,
                    t.day.timestamp || (t.day.timestamp = Date.now()),
                    t.hour.timestamp || (t.hour.timestamp = Date.now()),
                    this._saveAdsInfo()
                }
                _checkLimitsExpired(e) {
                    let t = !1;
                    Object.values(this.adsInfo.limits).forEach((n=>{
                        e && (n.session.count = 0),
                        u(n.hour.timestamp, 36e5) && (n.hour.timestamp = 0,
                        n.hour.count = 0,
                        t = !0),
                        u(n.day.timestamp, 864e5) && (n.day.timestamp = 0,
                        n.hour.count = 0,
                        t = !0)
                    }
                    )),
                    t && this._saveAdsInfo()
                }
                _saveAdsInfo() {
                    this.gp._storage.saveAdsInfo(this.adsInfo)
                }
                isBannerLimitReached(e) {
                    return this.isBannerLimitTypeReached(e, "hour") || this.isBannerLimitTypeReached(e, "day") || this.isBannerLimitTypeReached(e, "session")
                }
                isBannerLimitTypeReached(e, t) {
                    const n = this.banners[e].limits[t];
                    return !!n && this.adsInfo.limits[e][t].count >= n
                }
            }
            function u(e, t) {
                return (new Date).getTime() - new Date(e).getTime() > t
            }
        }
        ,
        2954: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>s
            });
            var i = n(6388)
              , r = function(e, t, n, i) {
                return new (n || (n = Promise))((function(r, s) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function o(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(a, o)
                    }
                    c((i = i.apply(e, t || [])).next())
                }
                ))
            };
            class s extends i.Z {
                constructor(e, t, n) {
                    super(),
                    this.gp = e,
                    this.adapter = t,
                    this.config = n,
                    this.title = this.config.project.name,
                    this.description = this.config.project.description,
                    this.image = this.config.project.icon
                }
                get url() {
                    return this.config.platformConfig.gameLink || this.gp.platform.getSDK().appUrl
                }
                get canAddShortcut() {
                    return this.adapter.canAddShortcut
                }
                get canRequestReview() {
                    return this.adapter.canRequestReview
                }
                get isAlreadyReviewed() {
                    return this.adapter.isAlreadyReviewed
                }
                addShortcut() {
                    return r(this, void 0, void 0, (function*() {
                        const e = yield this.adapter.addShortcut();
                        return this._events.emit("addShortcut", e),
                        e
                    }
                    ))
                }
                requestReview() {
                    return r(this, void 0, void 0, (function*() {
                        const e = yield this.adapter.requestReview();
                        return e.success ? this._events.emit("review", e) : this._events.emit("error:review", e.error),
                        e
                    }
                    ))
                }
                requestGameUrl() {
                    return this.adapter.requestGameUrl()
                }
            }
        }
        ,
        6388: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>s
            });
            var i = n(5585)
              , r = n.n(i);
            class s {
                constructor() {
                    this._events = new (r())
                }
                on(e, t) {
                    this._events.on(e, t)
                }
                off(e, t) {
                    this._events.off(e, t)
                }
                once(e, t) {
                    this._events.once(e, t)
                }
            }
        }
        ,
        264: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>o
            });
            var i = n(6558)
              , r = n(6388);
            const s = {
                data: e=>String(e || ""),
                stats: e=>Number(e) || 0,
                flag: e=>Boolean(e) || !1,
                service: null,
                accounts: null
            }
              , a = ["name", "avatar"];
            class o extends r.Z {
                constructor(e={}, t) {
                    super(),
                    this.credentials = "",
                    this.fields = t,
                    this.fromJSON(e)
                }
                get id() {
                    return this.state.id
                }
                get score() {
                    return this.get("score")
                }
                set score(e) {
                    this.set("score", e)
                }
                get name() {
                    return this.get("name")
                }
                set name(e) {
                    this.set("name", e)
                }
                get avatar() {
                    return this.get("avatar")
                }
                set avatar(e) {
                    this.set("avatar", e)
                }
                get isStub() {
                    return !this.fields.filter((e=>!a.includes(e.key))).some((e=>this.get(e.key) !== e.default))
                }
                fromJSON(e) {
                    var t, n, i;
                    this.state = {
                        id: e.id || 0,
                        active: null === (t = e.active) || void 0 === t || t,
                        removed: null !== (n = e.removed) && void 0 !== n && n,
                        test: null !== (i = e.test) && void 0 !== i && i,
                        name: e.name || "",
                        avatar: e.avatar || "",
                        score: e.score || 0
                    },
                    e.credentials && (this.credentials = String(e.credentials)),
                    this.fields.forEach((t=>{
                        if (!(t.key in e))
                            return void (this.state[t.key] = t.default);
                        const n = s[t.type];
                        if (!n)
                            return void (this.state[t.key] = e[t.key] || t.default);
                        const i = n(e[t.key]);
                        this.state[t.key] = t.variants.length && !t.variants.some((e=>e.value === i)) ? t.default : i
                    }
                    )),
                    this._events.emit("change")
                }
                toJSON() {
                    return Object.assign({}, this.state)
                }
                getField(e) {
                    const t = this.fields.find((t=>t.key === e));
                    if (!t) {
                        const t = `Field "${e}" not exists on player model`;
                        throw i.kg.error(t),
                        new Error(t)
                    }
                    return t
                }
                getFieldName(e) {
                    return this.getField(e).name || ""
                }
                getFieldVariantName(e, t) {
                    var n;
                    return (null === (n = this.getField(e).variants.find((e=>e.value === t))) || void 0 === n ? void 0 : n.name) || ""
                }
                get(e) {
                    return this.state[e]
                }
                set(e, t) {
                    this.state[e] = this._convert(e, t),
                    this._events.emit("change")
                }
                add(e, t) {
                    return this.set(e, this.get(e) + this._convert(e, t))
                }
                toggle(e) {
                    return this.set(e, !this.get(e))
                }
                has(e) {
                    return Boolean(this.get(e))
                }
                reset() {
                    this.fields.forEach((e=>this.set(e.key, e.default)))
                }
                remove() {
                    this.state.id = 0,
                    this.reset()
                }
                _convert(e, t) {
                    const n = this.getField(e)
                      , r = s[n.type];
                    if (!r) {
                        const t = `Cannot mutate "${e}", it's readonly`;
                        throw i.kg.error(t),
                        new Error(t)
                    }
                    const a = r(t);
                    if (n.variants.length && !n.variants.some((e=>e.value === a))) {
                        const t = `Invalid variant ${a} of "${e}"`;
                        throw i.kg.error(t),
                        new Error(t)
                    }
                    return a
                }
            }
        }
        ,
        2940: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Do: ()=>ve,
                LH: ()=>Ce,
                W2: ()=>$e,
                x1: ()=>Fe,
                OB: ()=>Qe,
                U7: ()=>st
            });
            var i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }
                ).apply(this, arguments)
            };
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            Object.create,
            Object.create,
            "function" == typeof Symbol && null != Symbol.iterator && Symbol.iterator,
            "function" == typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
            var s = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag";
            function a(e, t) {
                for (var n, i = /\r\n|[\n\r]/g, r = 1, s = t + 1; (n = i.exec(e.body)) && n.index < t; )
                    r += 1,
                    s = t + 1 - (n.index + n[0].length);
                return {
                    line: r,
                    column: s
                }
            }
            function o(e) {
                return c(e.source, a(e.source, e.start))
            }
            function c(e, t) {
                var n = e.locationOffset.column - 1
                  , i = h(n) + e.body
                  , r = t.line - 1
                  , s = e.locationOffset.line - 1
                  , a = t.line + s
                  , o = 1 === t.line ? n : 0
                  , c = t.column + o
                  , u = "".concat(e.name, ":").concat(a, ":").concat(c, "\n")
                  , d = i.split(/\r\n|[\n\r]/g)
                  , p = d[r];
                if (p.length > 120) {
                    for (var f = Math.floor(c / 80), m = c % 80, v = [], y = 0; y < p.length; y += 80)
                        v.push(p.slice(y, y + 80));
                    return u + l([["".concat(a), v[0]]].concat(v.slice(1, f + 1).map((function(e) {
                        return ["", e]
                    }
                    )), [[" ", h(m - 1) + "^"], ["", v[f + 1]]]))
                }
                return u + l([["".concat(a - 1), d[r - 1]], ["".concat(a), p], ["", h(c - 1) + "^"], ["".concat(a + 1), d[r + 1]]])
            }
            function l(e) {
                var t = e.filter((function(e) {
                    return e[0],
                    void 0 !== e[1]
                }
                ))
                  , n = Math.max.apply(Math, t.map((function(e) {
                    return e[0].length
                }
                )));
                return t.map((function(e) {
                    var t, i = e[0], r = e[1];
                    return h(n - (t = i).length) + t + (r ? " | " + r : " |")
                }
                )).join("\n")
            }
            function h(e) {
                return Array(e + 1).join(" ")
            }
            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            function p(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? f(e) : t
            }
            function f(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function m(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (m = function(e) {
                    if (null === e || (n = e,
                    -1 === Function.toString.call(n).indexOf("[native code]")))
                        return e;
                    var n;
                    if ("function" != typeof e)
                        throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e))
                            return t.get(e);
                        t.set(e, i)
                    }
                    function i() {
                        return v(e, arguments, w(this).constructor)
                    }
                    return i.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: i,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    g(i, e)
                }
                )(e)
            }
            function v(e, t, n) {
                return (v = y() ? Reflect.construct : function(e, t, n) {
                    var i = [null];
                    i.push.apply(i, t);
                    var r = new (Function.bind.apply(e, i));
                    return n && g(r, n.prototype),
                    r
                }
                ).apply(null, arguments)
            }
            function y() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }
            function g(e, t) {
                return (g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var b = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && g(e, t)
                }(u, e);
                var t, n, i, l, h = (t = u,
                n = y(),
                function() {
                    var e, i = w(t);
                    if (n) {
                        var r = w(this).constructor;
                        e = Reflect.construct(i, arguments, r)
                    } else
                        e = i.apply(this, arguments);
                    return p(this, e)
                }
                );
                function u(e, t, n, i, s, o, c) {
                    var l, d, m, v, y;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, u),
                    y = h.call(this, e);
                    var g, w = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0, b = n;
                    !b && w && (b = null === (g = w[0].loc) || void 0 === g ? void 0 : g.source);
                    var E, P = i;
                    !P && w && (P = w.reduce((function(e, t) {
                        return t.loc && e.push(t.loc.start),
                        e
                    }
                    ), [])),
                    P && 0 === P.length && (P = void 0),
                    i && n ? E = i.map((function(e) {
                        return a(n, e)
                    }
                    )) : w && (E = w.reduce((function(e, t) {
                        return t.loc && e.push(a(t.loc.source, t.loc.start)),
                        e
                    }
                    ), []));
                    var _, T = c;
                    if (null == T && null != o) {
                        var I = o.extensions;
                        "object" == r(_ = I) && null !== _ && (T = I)
                    }
                    return Object.defineProperties(f(y), {
                        name: {
                            value: "GraphQLError"
                        },
                        message: {
                            value: e,
                            enumerable: !0,
                            writable: !0
                        },
                        locations: {
                            value: null !== (l = E) && void 0 !== l ? l : void 0,
                            enumerable: null != E
                        },
                        path: {
                            value: null != s ? s : void 0,
                            enumerable: null != s
                        },
                        nodes: {
                            value: null != w ? w : void 0
                        },
                        source: {
                            value: null !== (d = b) && void 0 !== d ? d : void 0
                        },
                        positions: {
                            value: null !== (m = P) && void 0 !== m ? m : void 0
                        },
                        originalError: {
                            value: o
                        },
                        extensions: {
                            value: null !== (v = T) && void 0 !== v ? v : void 0,
                            enumerable: null != T
                        }
                    }),
                    null != o && o.stack ? (Object.defineProperty(f(y), "stack", {
                        value: o.stack,
                        writable: !0,
                        configurable: !0
                    }),
                    p(y)) : (Error.captureStackTrace ? Error.captureStackTrace(f(y), u) : Object.defineProperty(f(y), "stack", {
                        value: Error().stack,
                        writable: !0,
                        configurable: !0
                    }),
                    y)
                }
                return i = u,
                (l = [{
                    key: "toString",
                    value: function() {
                        return function(e) {
                            var t = e.message;
                            if (e.nodes)
                                for (var n = 0, i = e.nodes; n < i.length; n++) {
                                    var r = i[n];
                                    r.loc && (t += "\n\n" + o(r.loc))
                                }
                            else if (e.source && e.locations)
                                for (var s = 0, a = e.locations; s < a.length; s++) {
                                    var l = a[s];
                                    t += "\n\n" + c(e.source, l)
                                }
                            return t
                        }(this)
                    }
                }, {
                    key: s,
                    get: function() {
                        return "Object"
                    }
                }]) && d(i.prototype, l),
                u
            }(m(Error));
            function E(e, t, n) {
                return new b("Syntax Error: ".concat(n),void 0,e,[t])
            }
            var P = Object.freeze({
                NAME: "Name",
                DOCUMENT: "Document",
                OPERATION_DEFINITION: "OperationDefinition",
                VARIABLE_DEFINITION: "VariableDefinition",
                SELECTION_SET: "SelectionSet",
                FIELD: "Field",
                ARGUMENT: "Argument",
                FRAGMENT_SPREAD: "FragmentSpread",
                INLINE_FRAGMENT: "InlineFragment",
                FRAGMENT_DEFINITION: "FragmentDefinition",
                VARIABLE: "Variable",
                INT: "IntValue",
                FLOAT: "FloatValue",
                STRING: "StringValue",
                BOOLEAN: "BooleanValue",
                NULL: "NullValue",
                ENUM: "EnumValue",
                LIST: "ListValue",
                OBJECT: "ObjectValue",
                OBJECT_FIELD: "ObjectField",
                DIRECTIVE: "Directive",
                NAMED_TYPE: "NamedType",
                LIST_TYPE: "ListType",
                NON_NULL_TYPE: "NonNullType",
                SCHEMA_DEFINITION: "SchemaDefinition",
                OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
                SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
                OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
                FIELD_DEFINITION: "FieldDefinition",
                INPUT_VALUE_DEFINITION: "InputValueDefinition",
                INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
                UNION_TYPE_DEFINITION: "UnionTypeDefinition",
                ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
                ENUM_VALUE_DEFINITION: "EnumValueDefinition",
                INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
                DIRECTIVE_DEFINITION: "DirectiveDefinition",
                SCHEMA_EXTENSION: "SchemaExtension",
                SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
                OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
                INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
                UNION_TYPE_EXTENSION: "UnionTypeExtension",
                ENUM_TYPE_EXTENSION: "EnumTypeExtension",
                INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
            });
            const _ = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;
            function T(e) {
                var t = e.prototype.toJSON;
                "function" == typeof t || function(e, t) {
                    if (!Boolean(0))
                        throw new Error("Unexpected invariant triggered.")
                }(),
                e.prototype.inspect = t,
                _ && (e.prototype[_] = t)
            }
            var I = function() {
                function e(e, t, n) {
                    this.start = e.start,
                    this.end = t.end,
                    this.startToken = e,
                    this.endToken = t,
                    this.source = n
                }
                return e.prototype.toJSON = function() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }
                ,
                e
            }();
            T(I);
            var S = function() {
                function e(e, t, n, i, r, s, a) {
                    this.kind = e,
                    this.start = t,
                    this.end = n,
                    this.line = i,
                    this.column = r,
                    this.value = a,
                    this.prev = s,
                    this.next = null
                }
                return e.prototype.toJSON = function() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }
                ,
                e
            }();
            T(S);
            var A = Object.freeze({
                SOF: "<SOF>",
                EOF: "<EOF>",
                BANG: "!",
                DOLLAR: "$",
                AMP: "&",
                PAREN_L: "(",
                PAREN_R: ")",
                SPREAD: "...",
                COLON: ":",
                EQUALS: "=",
                AT: "@",
                BRACKET_L: "[",
                BRACKET_R: "]",
                BRACE_L: "{",
                PIPE: "|",
                BRACE_R: "}",
                NAME: "Name",
                INT: "Int",
                FLOAT: "Float",
                STRING: "String",
                BLOCK_STRING: "BlockString",
                COMMENT: "Comment"
            });
            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function O(e) {
                return C(e, [])
            }
            function C(e, t) {
                switch (k(e)) {
                case "string":
                    return JSON.stringify(e);
                case "function":
                    return e.name ? "[function ".concat(e.name, "]") : "[function]";
                case "object":
                    return null === e ? "null" : function(e, t) {
                        if (-1 !== t.indexOf(e))
                            return "[Circular]";
                        var n = [].concat(t, [e])
                          , i = function(e) {
                            var t = e[String(_)];
                            return "function" == typeof t ? t : "function" == typeof e.inspect ? e.inspect : void 0
                        }(e);
                        if (void 0 !== i) {
                            var r = i.call(e);
                            if (r !== e)
                                return "string" == typeof r ? r : C(r, n)
                        } else if (Array.isArray(e))
                            return function(e, t) {
                                if (0 === e.length)
                                    return "[]";
                                if (t.length > 2)
                                    return "[Array]";
                                for (var n = Math.min(10, e.length), i = e.length - n, r = [], s = 0; s < n; ++s)
                                    r.push(C(e[s], t));
                                return 1 === i ? r.push("... 1 more item") : i > 1 && r.push("... ".concat(i, " more items")),
                                "[" + r.join(", ") + "]"
                            }(e, n);
                        return function(e, t) {
                            var n = Object.keys(e);
                            return 0 === n.length ? "{}" : t.length > 2 ? "[" + function(e) {
                                var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                if ("Object" === t && "function" == typeof e.constructor) {
                                    var n = e.constructor.name;
                                    if ("string" == typeof n && "" !== n)
                                        return n
                                }
                                return t
                            }(e) + "]" : "{ " + n.map((function(n) {
                                return n + ": " + C(e[n], t)
                            }
                            )).join(", ") + " }"
                        }(e, n)
                    }(e, t);
                default:
                    return String(e)
                }
            }
            function R(e, t) {
                if (!Boolean(e))
                    throw new Error(t)
            }
            function N(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            var x = function() {
                function e(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request"
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        line: 1,
                        column: 1
                    };
                    "string" == typeof e || R(0, "Body must be a string. Received: ".concat(O(e), ".")),
                    this.body = e,
                    this.name = t,
                    this.locationOffset = n,
                    this.locationOffset.line > 0 || R(0, "line in locationOffset is 1-indexed and must be positive."),
                    this.locationOffset.column > 0 || R(0, "column in locationOffset is 1-indexed and must be positive.")
                }
                var t, n;
                return t = e,
                (n = [{
                    key: s,
                    get: function() {
                        return "Source"
                    }
                }]) && N(t.prototype, n),
                e
            }()
              , D = Object.freeze({
                QUERY: "QUERY",
                MUTATION: "MUTATION",
                SUBSCRIPTION: "SUBSCRIPTION",
                FIELD: "FIELD",
                FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
                FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
                INLINE_FRAGMENT: "INLINE_FRAGMENT",
                VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
                SCHEMA: "SCHEMA",
                SCALAR: "SCALAR",
                OBJECT: "OBJECT",
                FIELD_DEFINITION: "FIELD_DEFINITION",
                ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
                INTERFACE: "INTERFACE",
                UNION: "UNION",
                ENUM: "ENUM",
                ENUM_VALUE: "ENUM_VALUE",
                INPUT_OBJECT: "INPUT_OBJECT",
                INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
            });
            function M(e) {
                var t = e.split(/\r\n|[\n\r]/g)
                  , n = function(e) {
                    for (var t, n = !0, i = !0, r = 0, s = null, a = 0; a < e.length; ++a)
                        switch (e.charCodeAt(a)) {
                        case 13:
                            10 === e.charCodeAt(a + 1) && ++a;
                        case 10:
                            n = !1,
                            i = !0,
                            r = 0;
                            break;
                        case 9:
                        case 32:
                            ++r;
                            break;
                        default:
                            i && !n && (null === s || r < s) && (s = r),
                            i = !1
                        }
                    return null !== (t = s) && void 0 !== t ? t : 0
                }(e);
                if (0 !== n)
                    for (var i = 1; i < t.length; i++)
                        t[i] = t[i].slice(n);
                for (var r = 0; r < t.length && L(t[r]); )
                    ++r;
                for (var s = t.length; s > r && L(t[s - 1]); )
                    --s;
                return t.slice(r, s).join("\n")
            }
            function L(e) {
                for (var t = 0; t < e.length; ++t)
                    if (" " !== e[t] && "\t" !== e[t])
                        return !1;
                return !0
            }
            var j = function() {
                function e(e) {
                    var t = new S(A.SOF,0,0,0,0,null);
                    this.source = e,
                    this.lastToken = t,
                    this.token = t,
                    this.line = 1,
                    this.lineStart = 0
                }
                var t = e.prototype;
                return t.advance = function() {
                    return this.lastToken = this.token,
                    this.token = this.lookahead()
                }
                ,
                t.lookahead = function() {
                    var e = this.token;
                    if (e.kind !== A.EOF)
                        do {
                            var t;
                            e = null !== (t = e.next) && void 0 !== t ? t : e.next = F(this, e)
                        } while (e.kind === A.COMMENT);
                    return e
                }
                ,
                e
            }();
            function $(e) {
                return isNaN(e) ? A.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
            }
            function F(e, t) {
                for (var n = e.source, i = n.body, r = i.length, s = t.end; s < r; ) {
                    var a = i.charCodeAt(s)
                      , o = e.line
                      , c = 1 + s - e.lineStart;
                    switch (a) {
                    case 65279:
                    case 9:
                    case 32:
                    case 44:
                        ++s;
                        continue;
                    case 10:
                        ++s,
                        ++e.line,
                        e.lineStart = s;
                        continue;
                    case 13:
                        10 === i.charCodeAt(s + 1) ? s += 2 : ++s,
                        ++e.line,
                        e.lineStart = s;
                        continue;
                    case 33:
                        return new S(A.BANG,s,s + 1,o,c,t);
                    case 35:
                        return B(n, s, o, c, t);
                    case 36:
                        return new S(A.DOLLAR,s,s + 1,o,c,t);
                    case 38:
                        return new S(A.AMP,s,s + 1,o,c,t);
                    case 40:
                        return new S(A.PAREN_L,s,s + 1,o,c,t);
                    case 41:
                        return new S(A.PAREN_R,s,s + 1,o,c,t);
                    case 46:
                        if (46 === i.charCodeAt(s + 1) && 46 === i.charCodeAt(s + 2))
                            return new S(A.SPREAD,s,s + 3,o,c,t);
                        break;
                    case 58:
                        return new S(A.COLON,s,s + 1,o,c,t);
                    case 61:
                        return new S(A.EQUALS,s,s + 1,o,c,t);
                    case 64:
                        return new S(A.AT,s,s + 1,o,c,t);
                    case 91:
                        return new S(A.BRACKET_L,s,s + 1,o,c,t);
                    case 93:
                        return new S(A.BRACKET_R,s,s + 1,o,c,t);
                    case 123:
                        return new S(A.BRACE_L,s,s + 1,o,c,t);
                    case 124:
                        return new S(A.PIPE,s,s + 1,o,c,t);
                    case 125:
                        return new S(A.BRACE_R,s,s + 1,o,c,t);
                    case 34:
                        return 34 === i.charCodeAt(s + 1) && 34 === i.charCodeAt(s + 2) ? V(n, s, o, c, t, e) : q(n, s, o, c, t);
                    case 45:
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return G(n, s, a, o, c, t);
                    case 65:
                    case 66:
                    case 67:
                    case 68:
                    case 69:
                    case 70:
                    case 71:
                    case 72:
                    case 73:
                    case 74:
                    case 75:
                    case 76:
                    case 77:
                    case 78:
                    case 79:
                    case 80:
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 85:
                    case 86:
                    case 87:
                    case 88:
                    case 89:
                    case 90:
                    case 95:
                    case 97:
                    case 98:
                    case 99:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                    case 107:
                    case 108:
                    case 109:
                    case 110:
                    case 111:
                    case 112:
                    case 113:
                    case 114:
                    case 115:
                    case 116:
                    case 117:
                    case 118:
                    case 119:
                    case 120:
                    case 121:
                    case 122:
                        return z(n, s, o, c, t)
                    }
                    throw E(n, s, U(a))
                }
                var l = e.line
                  , h = 1 + s - e.lineStart;
                return new S(A.EOF,r,r,l,h,t)
            }
            function U(e) {
                return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat($(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat($(e), ".")
            }
            function B(e, t, n, i, r) {
                var s, a = e.body, o = t;
                do {
                    s = a.charCodeAt(++o)
                } while (!isNaN(s) && (s > 31 || 9 === s));
                return new S(A.COMMENT,t,o,n,i,r,a.slice(t + 1, o))
            }
            function G(e, t, n, i, r, s) {
                var a = e.body
                  , o = n
                  , c = t
                  , l = !1;
                if (45 === o && (o = a.charCodeAt(++c)),
                48 === o) {
                    if ((o = a.charCodeAt(++c)) >= 48 && o <= 57)
                        throw E(e, c, "Invalid number, unexpected digit after 0: ".concat($(o), "."))
                } else
                    c = W(e, c, o),
                    o = a.charCodeAt(c);
                if (46 === o && (l = !0,
                o = a.charCodeAt(++c),
                c = W(e, c, o),
                o = a.charCodeAt(c)),
                69 !== o && 101 !== o || (l = !0,
                43 !== (o = a.charCodeAt(++c)) && 45 !== o || (o = a.charCodeAt(++c)),
                c = W(e, c, o),
                o = a.charCodeAt(c)),
                46 === o || function(e) {
                    return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
                }(o))
                    throw E(e, c, "Invalid number, expected digit but got: ".concat($(o), "."));
                return new S(l ? A.FLOAT : A.INT,t,c,i,r,s,a.slice(t, c))
            }
            function W(e, t, n) {
                var i = e.body
                  , r = t
                  , s = n;
                if (s >= 48 && s <= 57) {
                    do {
                        s = i.charCodeAt(++r)
                    } while (s >= 48 && s <= 57);
                    return r
                }
                throw E(e, r, "Invalid number, expected digit but got: ".concat($(s), "."))
            }
            function q(e, t, n, i, r) {
                for (var s, a, o, c, l = e.body, h = t + 1, u = h, d = 0, p = ""; h < l.length && !isNaN(d = l.charCodeAt(h)) && 10 !== d && 13 !== d; ) {
                    if (34 === d)
                        return p += l.slice(u, h),
                        new S(A.STRING,t,h + 1,n,i,r,p);
                    if (d < 32 && 9 !== d)
                        throw E(e, h, "Invalid character within String: ".concat($(d), "."));
                    if (++h,
                    92 === d) {
                        switch (p += l.slice(u, h - 1),
                        d = l.charCodeAt(h)) {
                        case 34:
                            p += '"';
                            break;
                        case 47:
                            p += "/";
                            break;
                        case 92:
                            p += "\\";
                            break;
                        case 98:
                            p += "\b";
                            break;
                        case 102:
                            p += "\f";
                            break;
                        case 110:
                            p += "\n";
                            break;
                        case 114:
                            p += "\r";
                            break;
                        case 116:
                            p += "\t";
                            break;
                        case 117:
                            var f = (s = l.charCodeAt(h + 1),
                            a = l.charCodeAt(h + 2),
                            o = l.charCodeAt(h + 3),
                            c = l.charCodeAt(h + 4),
                            Y(s) << 12 | Y(a) << 8 | Y(o) << 4 | Y(c));
                            if (f < 0) {
                                var m = l.slice(h + 1, h + 5);
                                throw E(e, h, "Invalid character escape sequence: \\u".concat(m, "."))
                            }
                            p += String.fromCharCode(f),
                            h += 4;
                            break;
                        default:
                            throw E(e, h, "Invalid character escape sequence: \\".concat(String.fromCharCode(d), "."))
                        }
                        u = ++h
                    }
                }
                throw E(e, h, "Unterminated string.")
            }
            function V(e, t, n, i, r, s) {
                for (var a = e.body, o = t + 3, c = o, l = 0, h = ""; o < a.length && !isNaN(l = a.charCodeAt(o)); ) {
                    if (34 === l && 34 === a.charCodeAt(o + 1) && 34 === a.charCodeAt(o + 2))
                        return h += a.slice(c, o),
                        new S(A.BLOCK_STRING,t,o + 3,n,i,r,M(h));
                    if (l < 32 && 9 !== l && 10 !== l && 13 !== l)
                        throw E(e, o, "Invalid character within String: ".concat($(l), "."));
                    10 === l ? (++o,
                    ++s.line,
                    s.lineStart = o) : 13 === l ? (10 === a.charCodeAt(o + 1) ? o += 2 : ++o,
                    ++s.line,
                    s.lineStart = o) : 92 === l && 34 === a.charCodeAt(o + 1) && 34 === a.charCodeAt(o + 2) && 34 === a.charCodeAt(o + 3) ? (h += a.slice(c, o) + '"""',
                    c = o += 4) : ++o
                }
                throw E(e, o, "Unterminated string.")
            }
            function Y(e) {
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
            }
            function z(e, t, n, i, r) {
                for (var s = e.body, a = s.length, o = t + 1, c = 0; o !== a && !isNaN(c = s.charCodeAt(o)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122); )
                    ++o;
                return new S(A.NAME,t,o,n,i,r,s.slice(t, o))
            }
            var K = function() {
                function e(e, t) {
                    var n = function(e) {
                        return e instanceof x
                    }(e) ? e : new x(e);
                    this._lexer = new j(n),
                    this._options = t
                }
                var t = e.prototype;
                return t.parseName = function() {
                    var e = this.expectToken(A.NAME);
                    return {
                        kind: P.NAME,
                        value: e.value,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseDocument = function() {
                    var e = this._lexer.token;
                    return {
                        kind: P.DOCUMENT,
                        definitions: this.many(A.SOF, this.parseDefinition, A.EOF),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseDefinition = function() {
                    if (this.peek(A.NAME))
                        switch (this._lexer.token.value) {
                        case "query":
                        case "mutation":
                        case "subscription":
                            return this.parseOperationDefinition();
                        case "fragment":
                            return this.parseFragmentDefinition();
                        case "schema":
                        case "scalar":
                        case "type":
                        case "interface":
                        case "union":
                        case "enum":
                        case "input":
                        case "directive":
                            return this.parseTypeSystemDefinition();
                        case "extend":
                            return this.parseTypeSystemExtension()
                        }
                    else {
                        if (this.peek(A.BRACE_L))
                            return this.parseOperationDefinition();
                        if (this.peekDescription())
                            return this.parseTypeSystemDefinition()
                    }
                    throw this.unexpected()
                }
                ,
                t.parseOperationDefinition = function() {
                    var e = this._lexer.token;
                    if (this.peek(A.BRACE_L))
                        return {
                            kind: P.OPERATION_DEFINITION,
                            operation: "query",
                            name: void 0,
                            variableDefinitions: [],
                            directives: [],
                            selectionSet: this.parseSelectionSet(),
                            loc: this.loc(e)
                        };
                    var t, n = this.parseOperationType();
                    return this.peek(A.NAME) && (t = this.parseName()),
                    {
                        kind: P.OPERATION_DEFINITION,
                        operation: n,
                        name: t,
                        variableDefinitions: this.parseVariableDefinitions(),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseOperationType = function() {
                    var e = this.expectToken(A.NAME);
                    switch (e.value) {
                    case "query":
                        return "query";
                    case "mutation":
                        return "mutation";
                    case "subscription":
                        return "subscription"
                    }
                    throw this.unexpected(e)
                }
                ,
                t.parseVariableDefinitions = function() {
                    return this.optionalMany(A.PAREN_L, this.parseVariableDefinition, A.PAREN_R)
                }
                ,
                t.parseVariableDefinition = function() {
                    var e = this._lexer.token;
                    return {
                        kind: P.VARIABLE_DEFINITION,
                        variable: this.parseVariable(),
                        type: (this.expectToken(A.COLON),
                        this.parseTypeReference()),
                        defaultValue: this.expectOptionalToken(A.EQUALS) ? this.parseValueLiteral(!0) : void 0,
                        directives: this.parseDirectives(!0),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseVariable = function() {
                    var e = this._lexer.token;
                    return this.expectToken(A.DOLLAR),
                    {
                        kind: P.VARIABLE,
                        name: this.parseName(),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseSelectionSet = function() {
                    var e = this._lexer.token;
                    return {
                        kind: P.SELECTION_SET,
                        selections: this.many(A.BRACE_L, this.parseSelection, A.BRACE_R),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseSelection = function() {
                    return this.peek(A.SPREAD) ? this.parseFragment() : this.parseField()
                }
                ,
                t.parseField = function() {
                    var e, t, n = this._lexer.token, i = this.parseName();
                    return this.expectOptionalToken(A.COLON) ? (e = i,
                    t = this.parseName()) : t = i,
                    {
                        kind: P.FIELD,
                        alias: e,
                        name: t,
                        arguments: this.parseArguments(!1),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.peek(A.BRACE_L) ? this.parseSelectionSet() : void 0,
                        loc: this.loc(n)
                    }
                }
                ,
                t.parseArguments = function(e) {
                    var t = e ? this.parseConstArgument : this.parseArgument;
                    return this.optionalMany(A.PAREN_L, t, A.PAREN_R)
                }
                ,
                t.parseArgument = function() {
                    var e = this._lexer.token
                      , t = this.parseName();
                    return this.expectToken(A.COLON),
                    {
                        kind: P.ARGUMENT,
                        name: t,
                        value: this.parseValueLiteral(!1),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseConstArgument = function() {
                    var e = this._lexer.token;
                    return {
                        kind: P.ARGUMENT,
                        name: this.parseName(),
                        value: (this.expectToken(A.COLON),
                        this.parseValueLiteral(!0)),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseFragment = function() {
                    var e = this._lexer.token;
                    this.expectToken(A.SPREAD);
                    var t = this.expectOptionalKeyword("on");
                    return !t && this.peek(A.NAME) ? {
                        kind: P.FRAGMENT_SPREAD,
                        name: this.parseFragmentName(),
                        directives: this.parseDirectives(!1),
                        loc: this.loc(e)
                    } : {
                        kind: P.INLINE_FRAGMENT,
                        typeCondition: t ? this.parseNamedType() : void 0,
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseFragmentDefinition = function() {
                    var e, t = this._lexer.token;
                    return this.expectKeyword("fragment"),
                    !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
                        kind: P.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        variableDefinitions: this.parseVariableDefinitions(),
                        typeCondition: (this.expectKeyword("on"),
                        this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(t)
                    } : {
                        kind: P.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        typeCondition: (this.expectKeyword("on"),
                        this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                        loc: this.loc(t)
                    }
                }
                ,
                t.parseFragmentName = function() {
                    if ("on" === this._lexer.token.value)
                        throw this.unexpected();
                    return this.parseName()
                }
                ,
                t.parseValueLiteral = function(e) {
                    var t = this._lexer.token;
                    switch (t.kind) {
                    case A.BRACKET_L:
                        return this.parseList(e);
                    case A.BRACE_L:
                        return this.parseObject(e);
                    case A.INT:
                        return this._lexer.advance(),
                        {
                            kind: P.INT,
                            value: t.value,
                            loc: this.loc(t)
                        };
                    case A.FLOAT:
                        return this._lexer.advance(),
                        {
                            kind: P.FLOAT,
                            value: t.value,
                            loc: this.loc(t)
                        };
                    case A.STRING:
                    case A.BLOCK_STRING:
                        return this.parseStringLiteral();
                    case A.NAME:
                        switch (this._lexer.advance(),
                        t.value) {
                        case "true":
                            return {
                                kind: P.BOOLEAN,
                                value: !0,
                                loc: this.loc(t)
                            };
                        case "false":
                            return {
                                kind: P.BOOLEAN,
                                value: !1,
                                loc: this.loc(t)
                            };
                        case "null":
                            return {
                                kind: P.NULL,
                                loc: this.loc(t)
                            };
                        default:
                            return {
                                kind: P.ENUM,
                                value: t.value,
                                loc: this.loc(t)
                            }
                        }
                    case A.DOLLAR:
                        if (!e)
                            return this.parseVariable()
                    }
                    throw this.unexpected()
                }
                ,
                t.parseStringLiteral = function() {
                    var e = this._lexer.token;
                    return this._lexer.advance(),
                    {
                        kind: P.STRING,
                        value: e.value,
                        block: e.kind === A.BLOCK_STRING,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseList = function(e) {
                    var t = this
                      , n = this._lexer.token;
                    return {
                        kind: P.LIST,
                        values: this.any(A.BRACKET_L, (function() {
                            return t.parseValueLiteral(e)
                        }
                        ), A.BRACKET_R),
                        loc: this.loc(n)
                    }
                }
                ,
                t.parseObject = function(e) {
                    var t = this
                      , n = this._lexer.token;
                    return {
                        kind: P.OBJECT,
                        fields: this.any(A.BRACE_L, (function() {
                            return t.parseObjectField(e)
                        }
                        ), A.BRACE_R),
                        loc: this.loc(n)
                    }
                }
                ,
                t.parseObjectField = function(e) {
                    var t = this._lexer.token
                      , n = this.parseName();
                    return this.expectToken(A.COLON),
                    {
                        kind: P.OBJECT_FIELD,
                        name: n,
                        value: this.parseValueLiteral(e),
                        loc: this.loc(t)
                    }
                }
                ,
                t.parseDirectives = function(e) {
                    for (var t = []; this.peek(A.AT); )
                        t.push(this.parseDirective(e));
                    return t
                }
                ,
                t.parseDirective = function(e) {
                    var t = this._lexer.token;
                    return this.expectToken(A.AT),
                    {
                        kind: P.DIRECTIVE,
                        name: this.parseName(),
                        arguments: this.parseArguments(e),
                        loc: this.loc(t)
                    }
                }
                ,
                t.parseTypeReference = function() {
                    var e, t = this._lexer.token;
                    return this.expectOptionalToken(A.BRACKET_L) ? (e = this.parseTypeReference(),
                    this.expectToken(A.BRACKET_R),
                    e = {
                        kind: P.LIST_TYPE,
                        type: e,
                        loc: this.loc(t)
                    }) : e = this.parseNamedType(),
                    this.expectOptionalToken(A.BANG) ? {
                        kind: P.NON_NULL_TYPE,
                        type: e,
                        loc: this.loc(t)
                    } : e
                }
                ,
                t.parseNamedType = function() {
                    var e = this._lexer.token;
                    return {
                        kind: P.NAMED_TYPE,
                        name: this.parseName(),
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseTypeSystemDefinition = function() {
                    var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
                    if (e.kind === A.NAME)
                        switch (e.value) {
                        case "schema":
                            return this.parseSchemaDefinition();
                        case "scalar":
                            return this.parseScalarTypeDefinition();
                        case "type":
                            return this.parseObjectTypeDefinition();
                        case "interface":
                            return this.parseInterfaceTypeDefinition();
                        case "union":
                            return this.parseUnionTypeDefinition();
                        case "enum":
                            return this.parseEnumTypeDefinition();
                        case "input":
                            return this.parseInputObjectTypeDefinition();
                        case "directive":
                            return this.parseDirectiveDefinition()
                        }
                    throw this.unexpected(e)
                }
                ,
                t.peekDescription = function() {
                    return this.peek(A.STRING) || this.peek(A.BLOCK_STRING)
                }
                ,
                t.parseDescription = function() {
                    if (this.peekDescription())
                        return this.parseStringLiteral()
                }
                ,
                t.parseSchemaDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("schema");
                    var n = this.parseDirectives(!0)
                      , i = this.many(A.BRACE_L, this.parseOperationTypeDefinition, A.BRACE_R);
                    return {
                        kind: P.SCHEMA_DEFINITION,
                        description: t,
                        directives: n,
                        operationTypes: i,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseOperationTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseOperationType();
                    this.expectToken(A.COLON);
                    var n = this.parseNamedType();
                    return {
                        kind: P.OPERATION_TYPE_DEFINITION,
                        operation: t,
                        type: n,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseScalarTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("scalar");
                    var n = this.parseName()
                      , i = this.parseDirectives(!0);
                    return {
                        kind: P.SCALAR_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseObjectTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("type");
                    var n = this.parseName()
                      , i = this.parseImplementsInterfaces()
                      , r = this.parseDirectives(!0)
                      , s = this.parseFieldsDefinition();
                    return {
                        kind: P.OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: i,
                        directives: r,
                        fields: s,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseImplementsInterfaces = function() {
                    var e;
                    if (!this.expectOptionalKeyword("implements"))
                        return [];
                    if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
                        var t = [];
                        this.expectOptionalToken(A.AMP);
                        do {
                            t.push(this.parseNamedType())
                        } while (this.expectOptionalToken(A.AMP) || this.peek(A.NAME));
                        return t
                    }
                    return this.delimitedMany(A.AMP, this.parseNamedType)
                }
                ,
                t.parseFieldsDefinition = function() {
                    var e;
                    return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(A.BRACE_L) && this._lexer.lookahead().kind === A.BRACE_R ? (this._lexer.advance(),
                    this._lexer.advance(),
                    []) : this.optionalMany(A.BRACE_L, this.parseFieldDefinition, A.BRACE_R)
                }
                ,
                t.parseFieldDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription()
                      , n = this.parseName()
                      , i = this.parseArgumentDefs();
                    this.expectToken(A.COLON);
                    var r = this.parseTypeReference()
                      , s = this.parseDirectives(!0);
                    return {
                        kind: P.FIELD_DEFINITION,
                        description: t,
                        name: n,
                        arguments: i,
                        type: r,
                        directives: s,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseArgumentDefs = function() {
                    return this.optionalMany(A.PAREN_L, this.parseInputValueDef, A.PAREN_R)
                }
                ,
                t.parseInputValueDef = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription()
                      , n = this.parseName();
                    this.expectToken(A.COLON);
                    var i, r = this.parseTypeReference();
                    this.expectOptionalToken(A.EQUALS) && (i = this.parseValueLiteral(!0));
                    var s = this.parseDirectives(!0);
                    return {
                        kind: P.INPUT_VALUE_DEFINITION,
                        description: t,
                        name: n,
                        type: r,
                        defaultValue: i,
                        directives: s,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseInterfaceTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("interface");
                    var n = this.parseName()
                      , i = this.parseImplementsInterfaces()
                      , r = this.parseDirectives(!0)
                      , s = this.parseFieldsDefinition();
                    return {
                        kind: P.INTERFACE_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: i,
                        directives: r,
                        fields: s,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseUnionTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("union");
                    var n = this.parseName()
                      , i = this.parseDirectives(!0)
                      , r = this.parseUnionMemberTypes();
                    return {
                        kind: P.UNION_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        types: r,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseUnionMemberTypes = function() {
                    return this.expectOptionalToken(A.EQUALS) ? this.delimitedMany(A.PIPE, this.parseNamedType) : []
                }
                ,
                t.parseEnumTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("enum");
                    var n = this.parseName()
                      , i = this.parseDirectives(!0)
                      , r = this.parseEnumValuesDefinition();
                    return {
                        kind: P.ENUM_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        values: r,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseEnumValuesDefinition = function() {
                    return this.optionalMany(A.BRACE_L, this.parseEnumValueDefinition, A.BRACE_R)
                }
                ,
                t.parseEnumValueDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription()
                      , n = this.parseName()
                      , i = this.parseDirectives(!0);
                    return {
                        kind: P.ENUM_VALUE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseInputObjectTypeDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("input");
                    var n = this.parseName()
                      , i = this.parseDirectives(!0)
                      , r = this.parseInputFieldsDefinition();
                    return {
                        kind: P.INPUT_OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        fields: r,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseInputFieldsDefinition = function() {
                    return this.optionalMany(A.BRACE_L, this.parseInputValueDef, A.BRACE_R)
                }
                ,
                t.parseTypeSystemExtension = function() {
                    var e = this._lexer.lookahead();
                    if (e.kind === A.NAME)
                        switch (e.value) {
                        case "schema":
                            return this.parseSchemaExtension();
                        case "scalar":
                            return this.parseScalarTypeExtension();
                        case "type":
                            return this.parseObjectTypeExtension();
                        case "interface":
                            return this.parseInterfaceTypeExtension();
                        case "union":
                            return this.parseUnionTypeExtension();
                        case "enum":
                            return this.parseEnumTypeExtension();
                        case "input":
                            return this.parseInputObjectTypeExtension()
                        }
                    throw this.unexpected(e)
                }
                ,
                t.parseSchemaExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("schema");
                    var t = this.parseDirectives(!0)
                      , n = this.optionalMany(A.BRACE_L, this.parseOperationTypeDefinition, A.BRACE_R);
                    if (0 === t.length && 0 === n.length)
                        throw this.unexpected();
                    return {
                        kind: P.SCHEMA_EXTENSION,
                        directives: t,
                        operationTypes: n,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseScalarTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("scalar");
                    var t = this.parseName()
                      , n = this.parseDirectives(!0);
                    if (0 === n.length)
                        throw this.unexpected();
                    return {
                        kind: P.SCALAR_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseObjectTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("type");
                    var t = this.parseName()
                      , n = this.parseImplementsInterfaces()
                      , i = this.parseDirectives(!0)
                      , r = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === i.length && 0 === r.length)
                        throw this.unexpected();
                    return {
                        kind: P.OBJECT_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: i,
                        fields: r,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseInterfaceTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("interface");
                    var t = this.parseName()
                      , n = this.parseImplementsInterfaces()
                      , i = this.parseDirectives(!0)
                      , r = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === i.length && 0 === r.length)
                        throw this.unexpected();
                    return {
                        kind: P.INTERFACE_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: i,
                        fields: r,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseUnionTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("union");
                    var t = this.parseName()
                      , n = this.parseDirectives(!0)
                      , i = this.parseUnionMemberTypes();
                    if (0 === n.length && 0 === i.length)
                        throw this.unexpected();
                    return {
                        kind: P.UNION_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        types: i,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseEnumTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("enum");
                    var t = this.parseName()
                      , n = this.parseDirectives(!0)
                      , i = this.parseEnumValuesDefinition();
                    if (0 === n.length && 0 === i.length)
                        throw this.unexpected();
                    return {
                        kind: P.ENUM_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        values: i,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseInputObjectTypeExtension = function() {
                    var e = this._lexer.token;
                    this.expectKeyword("extend"),
                    this.expectKeyword("input");
                    var t = this.parseName()
                      , n = this.parseDirectives(!0)
                      , i = this.parseInputFieldsDefinition();
                    if (0 === n.length && 0 === i.length)
                        throw this.unexpected();
                    return {
                        kind: P.INPUT_OBJECT_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        fields: i,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseDirectiveDefinition = function() {
                    var e = this._lexer.token
                      , t = this.parseDescription();
                    this.expectKeyword("directive"),
                    this.expectToken(A.AT);
                    var n = this.parseName()
                      , i = this.parseArgumentDefs()
                      , r = this.expectOptionalKeyword("repeatable");
                    this.expectKeyword("on");
                    var s = this.parseDirectiveLocations();
                    return {
                        kind: P.DIRECTIVE_DEFINITION,
                        description: t,
                        name: n,
                        arguments: i,
                        repeatable: r,
                        locations: s,
                        loc: this.loc(e)
                    }
                }
                ,
                t.parseDirectiveLocations = function() {
                    return this.delimitedMany(A.PIPE, this.parseDirectiveLocation)
                }
                ,
                t.parseDirectiveLocation = function() {
                    var e = this._lexer.token
                      , t = this.parseName();
                    if (void 0 !== D[t.value])
                        return t;
                    throw this.unexpected(e)
                }
                ,
                t.loc = function(e) {
                    var t;
                    if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation))
                        return new I(e,this._lexer.lastToken,this._lexer.source)
                }
                ,
                t.peek = function(e) {
                    return this._lexer.token.kind === e
                }
                ,
                t.expectToken = function(e) {
                    var t = this._lexer.token;
                    if (t.kind === e)
                        return this._lexer.advance(),
                        t;
                    throw E(this._lexer.source, t.start, "Expected ".concat(Z(e), ", found ").concat(J(t), "."))
                }
                ,
                t.expectOptionalToken = function(e) {
                    var t = this._lexer.token;
                    if (t.kind === e)
                        return this._lexer.advance(),
                        t
                }
                ,
                t.expectKeyword = function(e) {
                    var t = this._lexer.token;
                    if (t.kind !== A.NAME || t.value !== e)
                        throw E(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(J(t), "."));
                    this._lexer.advance()
                }
                ,
                t.expectOptionalKeyword = function(e) {
                    var t = this._lexer.token;
                    return t.kind === A.NAME && t.value === e && (this._lexer.advance(),
                    !0)
                }
                ,
                t.unexpected = function(e) {
                    var t = null != e ? e : this._lexer.token;
                    return E(this._lexer.source, t.start, "Unexpected ".concat(J(t), "."))
                }
                ,
                t.any = function(e, t, n) {
                    this.expectToken(e);
                    for (var i = []; !this.expectOptionalToken(n); )
                        i.push(t.call(this));
                    return i
                }
                ,
                t.optionalMany = function(e, t, n) {
                    if (this.expectOptionalToken(e)) {
                        var i = [];
                        do {
                            i.push(t.call(this))
                        } while (!this.expectOptionalToken(n));
                        return i
                    }
                    return []
                }
                ,
                t.many = function(e, t, n) {
                    this.expectToken(e);
                    var i = [];
                    do {
                        i.push(t.call(this))
                    } while (!this.expectOptionalToken(n));
                    return i
                }
                ,
                t.delimitedMany = function(e, t) {
                    this.expectOptionalToken(e);
                    var n = [];
                    do {
                        n.push(t.call(this))
                    } while (this.expectOptionalToken(e));
                    return n
                }
                ,
                e
            }();
            function J(e) {
                var t = e.value;
                return Z(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
            }
            function Z(e) {
                return function(e) {
                    return e === A.BANG || e === A.DOLLAR || e === A.AMP || e === A.PAREN_L || e === A.PAREN_R || e === A.SPREAD || e === A.COLON || e === A.EQUALS || e === A.AT || e === A.BRACKET_L || e === A.BRACKET_R || e === A.BRACE_L || e === A.PIPE || e === A.BRACE_R
                }(e) ? '"'.concat(e, '"') : e
            }
            function H(e) {
                return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            var X = new Map
              , Q = new Map
              , ee = !0
              , te = !1;
            function ne(e) {
                return e.replace(/[\s,]+/g, " ").trim()
            }
            function ie(e) {
                var t, n, r, s = ne(e);
                if (!X.has(s)) {
                    var a = function(e, t) {
                        return new K(e,t).parseDocument()
                    }(e, {
                        experimentalFragmentVariables: te
                    });
                    if (!a || "Document" !== a.kind)
                        throw new Error("Not a valid GraphQL document.");
                    X.set(s, function(e) {
                        var t = new Set(e.definitions);
                        t.forEach((function(e) {
                            e.loc && delete e.loc,
                            Object.keys(e).forEach((function(n) {
                                var i = e[n];
                                i && "object" === H(i) && t.add(i)
                            }
                            ))
                        }
                        ));
                        var n = e.loc;
                        return n && (delete n.startToken,
                        delete n.endToken),
                        e
                    }((t = a,
                    n = new Set,
                    r = [],
                    t.definitions.forEach((function(e) {
                        if ("FragmentDefinition" === e.kind) {
                            var t = e.name.value
                              , i = ne((a = e.loc).source.body.substring(a.start, a.end))
                              , s = Q.get(t);
                            s && !s.has(i) ? ee && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : s || Q.set(t, s = new Set),
                            s.add(i),
                            n.has(i) || (n.add(i),
                            r.push(e))
                        } else
                            r.push(e);
                        var a
                    }
                    )),
                    i(i({}, t), {
                        definitions: r
                    }))))
                }
                return X.get(s)
            }
            function re(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                "string" == typeof e && (e = [e]);
                var i = e[0];
                return t.forEach((function(t, n) {
                    t && "Document" === t.kind ? i += t.loc.source.body : i += t,
                    i += e[n + 1]
                }
                )),
                ie(i)
            }
            var se, ae = re;
            (se = re || (re = {})).gql = ae,
            se.resetCaches = function() {
                X.clear(),
                Q.clear()
            }
            ,
            se.disableFragmentWarnings = function() {
                ee = !1
            }
            ,
            se.enableExperimentalFragmentVariables = function() {
                te = !0
            }
            ,
            se.disableExperimentalFragmentVariables = function() {
                te = !1
            }
            ,
            re.default = re;
            const oe = re;
            var ce, le, he, ue, de, pe, fe, me, ve, ye, ge, we, be, Ee, Pe, _e, Te, Ie, Se, Ae, ke, Oe, Ce, Re, Ne, xe, De, Me, Le, je, $e, Fe, Ue, Be, Ge, We, qe, Ve, Ye, ze, Ke, Je, Ze, He, Xe, Qe, et, tt, nt, it, rt, st, at, ot, ct, lt, ht, ut;
            !function(e) {
                e.Skip = "SKIP",
                e.Analytics = "ANALYTICS"
            }(ce || (ce = {})),
            function(e) {
                e.Any = "ANY",
                e.Admin = "ADMIN",
                e.Player = "PLAYER",
                e.InternalDeveloper = "INTERNAL_DEVELOPER",
                e.InternalModerator = "INTERNAL_MODERATOR"
            }(le || (le = {})),
            function(e) {
                e.Achievement = "ACHIEVEMENT",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Project = "PROJECT"
            }(he || (he = {})),
            function(e) {
                e.Achievement = "ACHIEVEMENT",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Total = "TOTAL"
            }(ue || (ue = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.BannerType = "BANNER_TYPE",
                e.Project = "PROJECT"
            }(de || (de = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.BannerType = "BANNER_TYPE",
                e.Requests = "REQUESTS",
                e.Displays = "DISPLAYS",
                e.Errors = "ERRORS",
                e.FillRate = "FILL_RATE",
                e.Revenue = "REVENUE"
            }(pe || (pe = {})),
            function(e) {
                e.GamepushLlc = "GAMEPUSH_LLC",
                e.GamepushFzco = "GAMEPUSH_FZCO"
            }(fe || (fe = {})),
            function(e) {
                e.Preloader = "PRELOADER",
                e.Fullscreen = "FULLSCREEN",
                e.Rewarded = "REWARDED",
                e.Sticky = "STICKY"
            }(me || (me = {})),
            function(e) {
                e.Reward = "REWARD",
                e.Achievement = "ACHIEVEMENT",
                e.Product = "PRODUCT"
            }(ve || (ve = {})),
            function(e) {
                e.Eq = "EQ",
                e.Ne = "NE",
                e.Lt = "LT",
                e.Gt = "GT",
                e.Lte = "LTE",
                e.Gte = "GTE"
            }(ye || (ye = {})),
            function(e) {
                e.PlayerStat = "PLAYER_STAT",
                e.EntityStat = "ENTITY_STAT",
                e.PlayerField = "PLAYER_FIELD"
            }(ge || (ge = {})),
            function(e) {
                e.Rub = "RUB",
                e.Usd = "USD",
                e.Eur = "EUR"
            }(we || (we = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.Project = "PROJECT"
            }(be || (be = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.StickyFactor = "STICKY_FACTOR",
                e.Dau = "DAU",
                e.Wau = "WAU",
                e.Mau = "MAU",
                e.NewUsersDay = "NEW_USERS_DAY",
                e.NewUsersWeek = "NEW_USERS_WEEK",
                e.NewUsersMonth = "NEW_USERS_MONTH"
            }(Ee || (Ee = {})),
            function(e) {
                e.Purchases = "Purchases",
                e.Ads = "Ads"
            }(Pe || (Pe = {})),
            function(e) {
                e.Raw = "RAW",
                e.Txt = "TXT",
                e.Html = "HTML"
            }(_e || (_e = {})),
            function(e) {
                e.PlayerPrivacyPolicy = "PLAYER_PRIVACY_POLICY"
            }(Te || (Te = {})),
            function(e) {
                e.Image = "IMAGE",
                e.File = "FILE",
                e.Channel = "CHANNEL",
                e.ChannelMessage = "CHANNEL_MESSAGE"
            }(Ie || (Ie = {})),
            function(e) {
                e.Event = "EVENT",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Project = "PROJECT"
            }(Se || (Se = {})),
            function(e) {
                e.Event = "EVENT",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Count = "COUNT"
            }(Ae || (Ae = {})),
            function(e) {
                e.Date = "DATE",
                e.Plan = "PLAN",
                e.Project = "PROJECT"
            }(ke || (ke = {})),
            function(e) {
                e.Date = "DATE",
                e.Plan = "PLAN",
                e.Count = "COUNT",
                e.Size = "SIZE"
            }(Oe || (Oe = {})),
            function(e) {
                e.Any = "ANY",
                e.Portrait = "PORTRAIT",
                e.Landscape = "LANDSCAPE"
            }(Ce || (Ce = {})),
            function(e) {
                e.Day = "DAY",
                e.Month = "MONTH",
                e.Year = "YEAR"
            }(Re || (Re = {})),
            function(e) {
                e.Date = "DATE",
                e.Plan = "PLAN",
                e.Project = "PROJECT"
            }(Ne || (Ne = {})),
            function(e) {
                e.Date = "DATE",
                e.Plan = "PLAN",
                e.Count = "COUNT"
            }(xe || (xe = {})),
            function(e) {
                e.GameIcon = "GAME_ICON",
                e.GameIcon4X3 = "GAME_ICON4X3",
                e.GameIcon3X4 = "GAME_ICON3X4",
                e.GameCover = "GAME_COVER",
                e.GameCoverPortrait = "GAME_COVER_PORTRAIT",
                e.GameBackground = "GAME_BACKGROUND",
                e.GameScreenshotAlbum = "GAME_SCREENSHOT_ALBUM",
                e.GameScreenshotPortrait = "GAME_SCREENSHOT_PORTRAIT"
            }(De || (De = {})),
            function(e) {
                e.Date = "DATE",
                e.Plan = "PLAN",
                e.Project = "PROJECT"
            }(Me || (Me = {})),
            function(e) {
                e.Date = "DATE",
                e.Plan = "PLAN",
                e.Count = "COUNT"
            }(Le || (Le = {})),
            function(e) {
                e.En = "EN",
                e.Fr = "FR",
                e.It = "IT",
                e.De = "DE",
                e.Es = "ES",
                e.Zh = "ZH",
                e.Pt = "PT",
                e.Ko = "KO",
                e.Ja = "JA",
                e.Ru = "RU",
                e.Tr = "TR",
                e.Ar = "AR",
                e.Hi = "HI",
                e.Id = "ID"
            }(je || (je = {})),
            function(e) {
                e.Add = "ADD",
                e.Remove = "REMOVE",
                e.Set = "SET"
            }($e || ($e = {})),
            function(e) {
                e.PlayerField = "PLAYER_FIELD"
            }(Fe || (Fe = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.Project = "PROJECT"
            }(Ue || (Ue = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.Avg = "AVG",
                e.Peak = "PEAK"
            }(Be || (Be = {})),
            function(e) {
                e.New = "NEW",
                e.Paid = "PAID"
            }(Ge || (Ge = {})),
            function(e) {
                e.Company = "COMPANY",
                e.Individual = "INDIVIDUAL",
                e.SoleProprietor = "SOLE_PROPRIETOR"
            }(We || (We = {})),
            function(e) {
                e.Yandex = "YANDEX",
                e.Vk = "VK",
                e.Ok = "OK",
                e.GameMonetize = "GAME_MONETIZE",
                e.GameDistribution = "GAME_DISTRIBUTION",
                e.CrazyGames = "CRAZY_GAMES",
                e.Smartmarket = "SMARTMARKET",
                e.Fb = "FB",
                e.Poki = "POKI",
                e.Gamepix = "GAMEPIX",
                e.VkPlay = "VK_PLAY",
                e.WgPlayground = "WG_PLAYGROUND",
                e.Beeline = "BEELINE",
                e.None = "NONE"
            }(qe || (qe = {})),
            function(e) {
                e.Player = "PLAYER",
                e.Product = "PRODUCT",
                e.Platform = "PLATFORM",
                e.Consumed = "CONSUMED",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Project = "PROJECT"
            }(Ve || (Ve = {})),
            function(e) {
                e.Player = "PLAYER",
                e.Product = "PRODUCT",
                e.Platform = "PLATFORM",
                e.Consumed = "CONSUMED",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Total = "TOTAL",
                e.Price = "PRICE"
            }(Ye || (Ye = {})),
            function(e) {
                e.Common = "COMMON",
                e.Uncommon = "UNCOMMON",
                e.Rare = "RARE",
                e.Epic = "EPIC",
                e.Legendary = "LEGENDARY",
                e.Mythic = "MYTHIC"
            }(ze || (ze = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.Project = "PROJECT"
            }(Ke || (Ke = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.RetentionDay = "RETENTION_DAY",
                e.RetentionWeek = "RETENTION_WEEK",
                e.RetentionMonth = "RETENTION_MONTH",
                e.NewUsersDay = "NEW_USERS_DAY",
                e.NewUsersWeek = "NEW_USERS_WEEK",
                e.NewUsersMonth = "NEW_USERS_MONTH",
                e.ReturnedUsersDay = "RETURNED_USERS_DAY",
                e.ReturnedUsersWeek = "RETURNED_USERS_WEEK",
                e.ReturnedUsersMonth = "RETURNED_USERS_MONTH"
            }(Je || (Je = {})),
            function(e) {
                e.Common = "COMMON"
            }(Ze || (Ze = {})),
            function(e) {
                e.Reward = "REWARD",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Project = "PROJECT"
            }(He || (He = {})),
            function(e) {
                e.Reward = "REWARD",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.GivenCount = "GIVEN_COUNT",
                e.AcceptedCount = "ACCEPTED_COUNT"
            }(Xe || (Xe = {})),
            function(e) {
                e.ActiveDays = "ACTIVE_DAYS",
                e.ActiveDaysConsecutive = "ACTIVE_DAYS_CONSECUTIVE"
            }(Qe || (Qe = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.Project = "PROJECT"
            }(et || (et = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.SessionTime = "SESSION_TIME",
                e.SessionsCount = "SESSIONS_COUNT",
                e.InGameTime = "IN_GAME_TIME"
            }(tt || (tt = {})),
            function(e) {
                e.Px = "PX",
                e.Percent = "PERCENT"
            }(nt || (nt = {})),
            function(e) {
                e.Asc = "ASC",
                e.Desc = "DESC"
            }(it || (it = {})),
            function(e) {
                e.Account = "Account",
                e.Project = "Project",
                e.Platform = "Platform"
            }(rt || (rt = {})),
            function(e) {
                e.Desktop = "Desktop",
                e.Ios = "IOS",
                e.Android = "Android",
                e.Tv = "TV"
            }(st || (st = {})),
            function(e) {
                e.Honorary = "HONORARY",
                e.Release = "RELEASE",
                e.Absolute = "ABSOLUTE",
                e.Start = "START",
                e.Advanced = "ADVANCED",
                e.Pro = "PRO",
                e.Enterprise = "ENTERPRISE"
            }(at || (at = {})),
            function(e) {
                e.Common = "COMMON",
                e.Scheduler = "SCHEDULER",
                e.Event = "EVENT"
            }(ot || (ot = {})),
            function(e) {
                e.Trigger = "TRIGGER",
                e.Type = "TYPE",
                e.Entity = "ENTITY",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Project = "PROJECT"
            }(ct || (ct = {})),
            function(e) {
                e.Trigger = "TRIGGER",
                e.Type = "TYPE",
                e.Entity = "ENTITY",
                e.Platform = "PLATFORM",
                e.Dev = "DEV",
                e.Date = "DATE",
                e.Count = "COUNT"
            }(lt || (lt = {})),
            function(e) {
                e.Date = "DATE",
                e.Platform = "PLATFORM",
                e.Plan = "PLAN",
                e.Action = "ACTION",
                e.Project = "PROJECT"
            }(ht || (ht = {})),
            function(e) {
                e.Date = "DATE",
                e.Action = "ACTION",
                e.Requests = "REQUESTS",
                e.Plan = "PLAN",
                e.Platform = "PLATFORM"
            }(ut || (ut = {})),
            oe`
    mutation createProject($input: CreateProjectInput!) {
  result: CreateProject(input: $input) {
    ...project
  }
}
    ${oe`
    fragment project on Project {
  id
  name
  icon
  publicToken
  orderedAchievementsGroups
  achievements {
    isLockedVisible
    isLockedDescriptionVisible
    enableUnlockToast
  }
  origins {
    origin
    isDev
    isActive
  }
  config {
    lang
    avatarGenerator
    ymCounterId
    gtagCounterId
    showLoader
    showReqCounter
  }
  assets {
    icon {
      ...imageAsset
    }
  }
}
    ${oe`
    fragment imageAsset on Asset {
  __typename
  ... on ImageAsset {
    type
    resources {
      src
      crop {
        left
        top
        width
        height
      }
    }
  }
}
    `}`}`
        }
        ,
        1049: (e,t,n)=>{
            "use strict";
            function i(e, t, n) {
                return e.replace(/{{hash}}/gi, t).replace(/{{size}}/gi, n)
            }
            n.d(t, {
                Z: ()=>i
            })
        }
        ,
        6480: (e,t,n)=>{
            "use strict";
            function i(e, t) {
                return !e || t && "none" !== t ? t : "last"
            }
            function r(e) {
                return e > 10 ? 10 : e
            }
            function s(e, t) {
                return e || t.limit
            }
            function a(e, t) {
                const n = new Set([...e.map((e=>e.id)), ...t.map((e=>e.id))]);
                return e.forEach((e=>{
                    n.has(e.id) && n.delete(e.id)
                }
                )),
                n.size
            }
            n.d(t, {
                oo: ()=>i,
                pY: ()=>r,
                wQ: ()=>s,
                q3: ()=>a
            })
        }
        ,
        4917: (e,t,n)=>{
            "use strict";
            function i({src: e, check: t}) {
                return new Promise(((n,i)=>{
                    let r = 0;
                    if (null == t ? void 0 : t(window))
                        return void n();
                    function s() {
                        t ? t(window) && (clearInterval(r),
                        n()) : n()
                    }
                    if (document.querySelector(`script[src="${e}"]`) && t)
                        return void (r = setInterval(s, 100));
                    var a = document.getElementsByTagName("script")[0];
                    const o = document.createElement("script");
                    o.src = e,
                    o.onload = s,
                    o.onerror = i,
                    a.parentNode.insertBefore(o, a),
                    t && (r = setInterval(s, 100))
                }
                ))
            }
            n.d(t, {
                Z: ()=>i
            })
        }
        ,
        6558: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Yd: ()=>s,
                kg: ()=>a,
                EK: ()=>o
            });
            var i, r = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            class s {
                constructor() {
                    i.set(this, "[GamePush]: "),
                    this.isCollectingLogs = !0,
                    this.logs = [],
                    this.log = (...e)=>{
                        this.collectLogs("log", e),
                        console.log(r(this, i, "f"), ...e)
                    }
                    ,
                    this.info = (...e)=>{
                        this.collectLogs("info", e),
                        console.info(r(this, i, "f"), ...e)
                    }
                    ,
                    this.warn = (...e)=>{
                        this.collectLogs("warn", e),
                        console.warn(r(this, i, "f"), ...e)
                    }
                    ,
                    this.error = (...e)=>{
                        this.collectLogs("error", e),
                        console.error(r(this, i, "f"), ...e)
                    }
                    ,
                    this.assert = (...e)=>{
                        this.collectLogs("assert", e),
                        console.assert(...e, {
                            name: r(this, i, "f")
                        })
                    }
                }
                stopCollect() {
                    this.isCollectingLogs = !1,
                    this.logs = []
                }
                collectLogs(e, t) {
                    this.isCollectingLogs && this.logs.push({
                        type: e,
                        args: t
                    })
                }
            }
            i = new WeakMap;
            let a = new s;
            const o = e=>a = e
        }
        ,
        1437: (e,t,n)=>{
            "use strict";
            n.d(t, {
                p: ()=>r
            });
            var i = n(8293);
            function r(e) {
                const t = (0,
                i._)(i.s)
                  , n = new Image;
                return n.onload = ()=>t.done(n),
                n.onerror = ()=>t.abort(),
                n.onabort = ()=>t.abort(),
                n.src = e,
                t.ready
            }
        }
        ,
        8866: (e,t,n)=>{
            "use strict";
            function i(e) {
                return new Promise((t=>setTimeout(t, e)))
            }
            n.d(t, {
                Z: ()=>i
            })
        }
        ,
        4835: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>i
            });
            const i = {
                app: {
                    trophy: "https://gs.eponesh.com/sdk/static/icons/trophy.svg"
                },
                cdn: {
                    trophy: "https://cdn.eponesh.com/static/64x64/images/achievements/reward.png"
                }
            }
        }
        ,
        8293: (e,t,n)=>{
            "use strict";
            n.d(t, {
                s: ()=>r,
                _: ()=>s
            });
            var i = n(6558);
            const r = {
                timeout: 5e3
            };
            function s({timeout: e=0}={}) {
                let t = !1;
                const n = {}
                  , r = new Promise(((e,s)=>{
                    n.done = n=>{
                        if (!t)
                            return t = !0,
                            e(n),
                            r
                    }
                    ,
                    n.abort = e=>{
                        if (!t)
                            return t = !0,
                            i.kg.error(e),
                            s(e),
                            r
                    }
                }
                ));
                return e && setTimeout((()=>{
                    t || n.abort(`Timeout ${e}ms exceeded`)
                }
                ), e),
                n.ready = r,
                n
            }
        }
        ,
        3607: (e,t,n)=>{
            "use strict";
            n.d(t, {
                _X: ()=>i._
            }),
            n(7818),
            n(264);
            var i = n(8293)
        }
        ,
        5942: (e,t,n)=>{
            "use strict";
            var i;
            n.d(t, {
                z: ()=>i
            }),
            function(e) {
                e.YANDEX = "YANDEX",
                e.VK = "VK",
                e.OK = "OK",
                e.GAME_MONETIZE = "GAME_MONETIZE",
                e.GAME_DISTRIBUTION = "GAME_DISTRIBUTION",
                e.WG_PLAYGROUND = "WG_PLAYGROUND",
                e.CRAZY_GAMES = "CRAZY_GAMES",
                e.SMARTMARKET = "SMARTMARKET",
                e.GAMEPIX = "GAMEPIX",
                e.POKI = "POKI",
                e.VK_PLAY = "VK_PLAY",
                e.BEELINE = "BEELINE",
                e.KONGREGATE = "KONGREGATE",
                e.GOOGLE_PLAY = "GOOGLE_PLAY",
                e.NONE = "NONE"
            }(i || (i = {}))
        }
        ,
        584: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Th: ()=>s,
                ez: ()=>a,
                VI: ()=>o,
                P8: ()=>u,
                ZP: ()=>d
            });
            var i, r = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const s = "\n    id\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    icon(w: 256, h: 256, crop: false)\n    tag\n    rare\n    name(lang: $lang)\n    description(lang: $lang)\n    progress\n    maxProgress\n    unlocked\n    lockedIcon(w: 256, h: 256, crop: false)\n    lockedIconSmall: lockedIcon(w: 48, h: 48, crop: false)\n    progressStep\n    isPublished\n    isLockedVisible\n    isLockedDescriptionVisible\n"
              , a = "\n    achievementId\n    createdAt\n    progress\n    unlocked\n"
              , o = "id tag name(lang: $lang) description(lang: $lang) achievements"
              , c = `mutation ($input: UnlockPlayerAchievementInput!, $lang: Lang) {\n    result: UnlockPlayerAchievement(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${a}\n            achievement { ${s} }\n        }\n    }\n}`
              , l = `mutation ($input: PlayerSetAchievementProgressInput!, $lang: Lang){\n    result: PlayerSetAchievementProgress(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${a}\n            achievement { ${s} }\n        }\n    }\n}`
              , h = `query($lang: Lang) {\n    result: FetchPlayerAchievements {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievements {\n            achievements { ${s} }\n            achievementsGroups { ${o} }\n            playerAchievements { ${a} }\n        }\n    }\n}`;
            var u;
            !function(e) {
                e.COMMON = "COMMON",
                e.UNCOMMON = "UNCOMMON",
                e.RARE = "RARE",
                e.EPIC = "EPIC",
                e.LEGENDARY = "LEGENDARY",
                e.MYTHIC = "MYTHIC"
            }(u || (u = {}));
            class d {
                constructor(e) {
                    i.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, i, e, "f")
                }
                fetch() {
                    return r(this, i, "f").fetch(h)
                }
                setProgress({id: e, tag: t, progress: n}) {
                    return r(this, i, "f").fetch(l, {
                        id: e,
                        tag: t,
                        progress: n
                    })
                }
                unlock({id: e, tag: t}) {
                    return r(this, i, "f").fetch(c, {
                        id: e,
                        tag: t,
                        v: 2
                    })
                }
            }
            i = new WeakMap
        }
        ,
        2619: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Ks: ()=>s,
                Z_: ()=>a,
                ZP: ()=>c
            });
            var i, r = n(4444);
            const s = `\n    id\n    tag\n    icon(w: 256, h: 256, crop: false)\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    dateStart\n    dateEnd\n    isAutoJoin\n    name(lang: $lang)\n    description(lang: $lang)\n    triggers { ${r.p} }\n`
              , a = "\n    eventId\n    stats {\n        activeDays\n        activeDaysConsecutive\n    }\n"
              , o = `mutation ($input: PlayerJoinEventInput!) {\n    result: PlayerJoinEvent(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerEvent { ${a} }\n    }\n}`;
            class c {
                constructor(e) {
                    i.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, i, e, "f")
                }
                join(e) {
                    return t = this,
                    n = void 0,
                    s = function*() {
                        return function(e, t, n, i) {
                            if ("a" === n && !i)
                                throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                                throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                        }(this, i, "f").fetch(o, e)
                    }
                    ,
                    new ((r = void 0) || (r = Promise))((function(e, i) {
                        function a(e) {
                            try {
                                c(s.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(s.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function c(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value,
                            n instanceof r ? n : new r((function(e) {
                                e(n)
                            }
                            ))).then(a, o)
                        }
                        c((s = s.apply(t, n || [])).next())
                    }
                    ));
                    var t, n, r, s
                }
            }
            i = new WeakMap
        }
        ,
        9631: (e,t,n)=>{
            "use strict";
            n.d(t, {
                c5: ()=>s,
                Lb: ()=>a,
                ZP: ()=>m
            });
            var i, r = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const s = "\n    id\n    icon(w: 256, h: 256, crop: false)\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    tag\n    price\n    isSubscription\n    period\n    trialPeriod\n    name(lang: $lang)\n    description(lang: $lang)\n    yandexId\n"
              , a = "productId, payload, gift, subscribed, createdAt, expiredAt"
              , o = `{\n    __typename\n    ... on Problem { message }\n    ... on PlayerPurchaseOutput {\n        product { ${s} }\n        purchase { ${a} }\n    }\n}`
              , c = `query ($input: FindPlayerPurchaseInput!, $lang: Lang) {\n    result: FindPlayerPurchase(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchaseOutput {\n            product { ${s} }\n        }\n    }\n}`
              , l = `mutation ($input: SyncPlayerPurchasesInput!) {\n    result: SyncPlayerPurchases(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProductsPurchasedOutput {\n            purchases { ${a} }\n        }\n    }\n}`
              , h = `mutation ($input: PurchasePlayerPurchaseInput!, $lang: Lang) {\n    result: PurchasePlayerPurchase(input: $input) ${o}\n}`
              , u = `mutation ($input: ConsumePlayerPurchaseInput!, $lang: Lang) {\n    result: ConsumePlayerPurchase(input: $input) ${o}\n}`
              , d = `mutation ($input: CancelPlayerSubscriptionInput!, $lang: Lang) {\n    result: CancelPlayerSubscription(input: $input) ${o}\n}`
              , p = `mutation ($input: ResumePlayerSubscriptionInput!, $lang: Lang) {\n    result: ResumePlayerSubscription(input: $input) ${o}\n}`
              , f = `query ($lang: Lang) {\n    result: FetchPlayerPurchases {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchasesOutput {\n            products { ${s} }\n            playerPurchases { ${a} }\n        }\n    }\n}`;
            class m {
                constructor(e) {
                    i.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, i, e, "f")
                }
                sync({purchases: e, payload: t}) {
                    return r(this, i, "f").fetch(l, {
                        purchases: e,
                        payload: t
                    })
                }
                fetch() {
                    return r(this, i, "f").fetch(f)
                }
                getPaymentLink(e) {
                    return r(this, i, "f").fetch("query ($input: PlayerGetPaymentLinkInput!) {\n    result: PlayerGetPaymentLink(input: $input) {\n        __typename\n        ... on PlayerPaymentLink { link }\n        ... on Problem { message }\n    }\n}", e)
                }
                purchase({payload: e, id: t, tag: n}) {
                    return r(this, i, "f").fetch(h, {
                        payload: e,
                        id: t,
                        tag: n
                    })
                }
                findProduct({id: e, tag: t}) {
                    return r(this, i, "f").fetch(c, {
                        id: e,
                        tag: t
                    })
                }
                consume({id: e, tag: t}) {
                    return r(this, i, "f").fetch(u, {
                        id: e,
                        tag: t
                    })
                }
                cancelSubscription({payload: e, id: t, tag: n}) {
                    return r(this, i, "f").fetch(d, {
                        payload: e,
                        id: t,
                        tag: n
                    })
                }
                resumeSubscription({payload: e, id: t, tag: n}) {
                    return r(this, i, "f").fetch(p, {
                        payload: e,
                        id: t,
                        tag: n
                    })
                }
            }
            i = new WeakMap
        }
        ,
        9233: (e,t,n)=>{
            "use strict";
            var i;
            n.d(t, {
                $: ()=>i,
                iA: ()=>s
            }),
            function(e) {
                e.PRELOADER = "PRELOADER",
                e.FULLSCREEN = "FULLSCREEN",
                e.REWARDED = "REWARDED",
                e.STICKY = "STICKY"
            }(i || (i = {}));
            const r = ()=>({
                type: i.STICKY,
                enabled: !1,
                bannerId: "",
                desktopBannerId: "",
                frequency: 0,
                refreshInterval: 0,
                maxWidth: 0,
                maxHeight: 0,
                maxWidthDimension: "PX",
                maxHeightDimension: "PX",
                desktopMaxWidth: 0,
                desktopMaxHeight: 0,
                desktopMaxWidthDimension: "PX",
                desktopMaxHeightDimension: "PX",
                fitCanvas: !1,
                position: "bottom",
                limits: {
                    hour: 0,
                    day: 0,
                    session: 0
                },
                useNative: !0
            })
              , s = {
                appId: "",
                communityLinks: {
                    en: ""
                },
                gameLink: "",
                banners: [Object.assign(Object.assign({}, r()), {
                    type: i.FULLSCREEN,
                    enabled: !0,
                    frequency: 60
                }), Object.assign(Object.assign({}, r()), {
                    type: i.PRELOADER,
                    enabled: !1
                }), Object.assign(Object.assign({}, r()), {
                    type: i.REWARDED,
                    enabled: !0
                }), Object.assign(Object.assign({}, r()), {
                    type: i.STICKY,
                    enabled: !1
                })]
            };
            new WeakMap
        }
        ,
        7802: (e,t,n)=>{
            "use strict";
            n.d(t, {
                SX: ()=>h,
                ZP: ()=>y
            });
            var i, r = n(584), s = n(4692), a = n(9631), o = n(7227), c = n(2619), l = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const h = "\n    name(lang: $lang)\n    key\n    type\n    default\n    important\n    variants {\n        value\n        name(lang: $lang)\n    }\n"
              , u = `\n... on Player {\n    state\n    stats {\n        playtimeAll\n        playtimeToday\n        activeDays\n        activeDaysConsecutive\n    }\n    achievementsList { ${r.ez} }\n    purchasesListV2 { ${a.Lb} }\n    rewards { ${o.v_} }\n    triggers { triggerId claimed }\n    segments\n    leftSegments\n    newSegments\n    playerSchedulers {\n        schedulerId\n        daysClaimed\n        stats {\n            activeDays\n            activeDaysConsecutive\n        }\n    }\n    playerEvents { ${c.Z_} }\n    experiments  {\n    experiment\n    cohort\n}\n    rewardsData {\n        activatedTriggersNow\n        claimedTriggersNow\n        claimedSchedulersDaysNow { schedulerId day }\n        givenAchievements\n        givenRewards\n        givenProducts\n    }\n    sessionStart\n    token @include(if: $withToken)\n}\n... on Problem { message }\n`
              , d = `\nmutation ($input: SyncPlayerInput!, $lang: Lang, $withToken: Boolean!) {\n    result: SyncPlayer(input: $input) {\n        __typename\n        ${u}\n        ... on PlayerSyncConflict {\n            players\n            fields { ${h} }\n        }\n    }\n}`
              , p = `\nquery ($input: GetPlayerInput!, $withToken: Boolean!) {\n    result: GetPlayer(input: $input) {\n        __typename\n        ${u}\n    }\n}`
              , f = `query ($lang: Lang) {\n    result: FetchPlayerFields {\n        __typename\n        ... on Problem { message }\n        ... on ModelFieldsList {\n            items { ${h} }\n        }\n    }\n}`
              , m = `query($input: PlayerFetchPlayersInput!) {\n    result: PlayerFetchPlayers(input: $input) { ${(0,
            s.Mn)("\n    ... on FullPlayersList {\n        players {\n            state\n            isOnline\n        }\n    }\n")} }\n}`;
            let v = !0;
            class y {
                constructor(e) {
                    i.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, i, e, "f")
                }
                sync({playerState: e, override: t, acceptedRewards: n, givenRewards: r, claimedTriggers: a, claimedSchedulersDays: o}, {withToken: c}) {
                    (0,
                    s.dX)(e, 1 * s.aI.MB, 2 * s.aI.MB);
                    const h = l(this, i, "f").fetch(d, {
                        playerState: e,
                        override: t,
                        acceptedRewards: n,
                        givenRewards: r,
                        claimedTriggers: a,
                        claimedSchedulersDays: o,
                        isFirstRequest: v
                    }, {
                        withToken: c
                    });
                    return v = !1,
                    h
                }
                getPlayer({withToken: e}) {
                    const t = l(this, i, "f").fetch(p, {
                        isFirstRequest: v
                    }, {
                        withToken: e
                    });
                    return v = !1,
                    t
                }
                fetchFields() {
                    return e = this,
                    t = void 0,
                    r = function*() {
                        return l(this, i, "f").fetch(f)
                    }
                    ,
                    new ((n = void 0) || (n = Promise))((function(i, s) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function o(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }
                        function c(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value,
                            t instanceof n ? t : new n((function(e) {
                                e(t)
                            }
                            ))).then(a, o)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }
                    ));
                    var e, t, n, r
                }
                checkCode({secretCode: e}) {
                    return l(this, i, "f").fetch("query ($input: CheckPlayerCodeInput!) {\n    result: CheckPlayerCode(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}", {
                        secretCode: e
                    })
                }
                fetchPlayers({ids: e}) {
                    return l(this, i, "f").fetch(m, {
                        ids: e
                    })
                }
            }
            i = new WeakMap
        }
        ,
        9696: (e,t,n)=>{
            "use strict";
            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = []
                          , i = !0
                          , r = !1
                          , s = void 0;
                        try {
                            for (var a, o = e[Symbol.iterator](); !(i = (a = o.next()).done) && (n.push(a.value),
                            !t || n.length !== t); i = !0)
                                ;
                        } catch (e) {
                            r = !0,
                            s = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (r)
                                    throw s
                            }
                        }
                        return n
                    }
                }(e, t) || o(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function r(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, a = !0, c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        c = !0,
                        s = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw s
                        }
                    }
                }
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function a(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return c(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                        return Array.from(e)
                }(e) || o(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function o(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                }
            }
            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++)
                    i[n] = e[n];
                return i
            }
            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function h(e) {
                return "string" == typeof e
            }
            function u(e) {
                return "number" == typeof e && Number.isFinite(e)
            }
            function d(e) {
                return "boolean" == typeof e
            }
            function p(e) {
                return void 0 === e
            }
            function f(e) {
                return null === e
            }
            function m(e) {
                return f(e) || p(e)
            }
            n.d(t, {
                Uo: ()=>Y,
                GH: ()=>Z,
                ZP: ()=>H,
                Ff: ()=>z,
                h$: ()=>K,
                lR: ()=>J
            });
            var v = [h, u, d, f, p, function(e) {
                return "bigint" == typeof e
            }
            , function(e) {
                return "symbol" == l(e)
            }
            ];
            function y(e) {
                return Array.isArray(e)
            }
            function g(e) {
                if (function(e) {
                    return v.some((function(t) {
                        return t(e)
                    }
                    ))
                }(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function w(e) {
                return !m(e)
            }
            function b(e) {
                throw h(e) ? new Error(e) : e
            }
            function E(e) {
                return {
                    and: function() {
                        return E(e)
                    },
                    andThen: function() {
                        return E(e)
                    },
                    err: function() {
                        return T(e)
                    },
                    expect: function(e) {
                        return b(e)
                    },
                    expectErr: function() {
                        return e
                    },
                    inspect: function() {
                        return E(e)
                    },
                    inspectErr: function(t) {
                        return t(e),
                        E(e)
                    },
                    isErr: function() {
                        return !0
                    },
                    isErrAnd: function(t) {
                        return t(e)
                    },
                    isOk: function() {
                        return !1
                    },
                    isOkAnd: function() {
                        return !1
                    },
                    map: function() {
                        return E(e)
                    },
                    mapErr: function(t) {
                        return E(t(e))
                    },
                    mapOr: function(e) {
                        return e
                    },
                    mapOrElse: function(t) {
                        return t(e)
                    },
                    match: function(t, n) {
                        return n(e)
                    },
                    ok: function() {
                        return _
                    },
                    or: function(e) {
                        return e
                    },
                    orElse: function(t) {
                        return t(e)
                    },
                    unwrap: function() {
                        return b("called Result.unwrap on an `Err` value")
                    },
                    unwrapErr: function() {
                        return e
                    },
                    unwrapOr: function(e) {
                        return e
                    },
                    unwrapOrElse: function(t) {
                        return t(e)
                    }
                }
            }
            function P(e) {
                return {
                    and: function(e) {
                        return e
                    },
                    andThen: function(t) {
                        return t(e)
                    },
                    err: function() {
                        return _
                    },
                    expect: function() {
                        return e
                    },
                    expectErr: function(e) {
                        return b(e)
                    },
                    inspect: function(t) {
                        return t(e),
                        P(e)
                    },
                    inspectErr: function() {
                        return P(e)
                    },
                    isErr: function() {
                        return !1
                    },
                    isErrAnd: function() {
                        return !1
                    },
                    isOk: function() {
                        return !0
                    },
                    isOkAnd: function(t) {
                        return t(e)
                    },
                    map: function(t) {
                        return P(t(e))
                    },
                    mapErr: function() {
                        return P(e)
                    },
                    mapOr: function(t, n) {
                        return n(e)
                    },
                    mapOrElse: function(t, n) {
                        return n(e)
                    },
                    match: function(t) {
                        return t(e)
                    },
                    ok: function() {
                        return T(e)
                    },
                    or: function() {
                        return P(e)
                    },
                    orElse: function() {
                        return P(e)
                    },
                    unwrap: function() {
                        return e
                    },
                    unwrapErr: function() {
                        return b("called Result.unwrapErr on an `Ok` value")
                    },
                    unwrapOr: function() {
                        return e
                    },
                    unwrapOrElse: function() {
                        return e
                    }
                }
            }
            var _ = {
                and: function() {
                    return _
                },
                andThen: function() {
                    return _
                },
                expect: function(e) {
                    return b(e)
                },
                filter: function() {
                    return _
                },
                inspect: function() {
                    return _
                },
                isNone: function() {
                    return !0
                },
                isSome: function() {
                    return !1
                },
                isSomeAnd: function() {
                    return !1
                },
                map: function() {
                    return _
                },
                mapOr: function(e) {
                    return e
                },
                mapOrElse: function(e) {
                    return e()
                },
                match: function(e, t) {
                    return t()
                },
                or: function(e) {
                    return e
                },
                orElse: function(e) {
                    return e()
                },
                unwrap: function() {
                    return b("called Option.unwrap on a `None` value")
                },
                unwrapOr: function(e) {
                    return e
                },
                unwrapOrElse: function(e) {
                    return e()
                },
                okOr: function(e) {
                    return E(e)
                },
                okOrElse: function(e) {
                    return E(e())
                }
            };
            function T(e) {
                return {
                    and: function(e) {
                        return e
                    },
                    andThen: function(t) {
                        return t(e)
                    },
                    expect: function() {
                        return e
                    },
                    filter: function(t) {
                        return t(e) ? T(e) : _
                    },
                    inspect: function(t) {
                        return t(e),
                        T(e)
                    },
                    isNone: function() {
                        return !1
                    },
                    isSome: function() {
                        return !0
                    },
                    isSomeAnd: function(t) {
                        return t(e)
                    },
                    map: function(t) {
                        return T(t(e))
                    },
                    mapOr: function(t, n) {
                        return n(e)
                    },
                    mapOrElse: function(t, n) {
                        return n(e)
                    },
                    match: function(t) {
                        return t(e)
                    },
                    or: function() {
                        return T(e)
                    },
                    orElse: function() {
                        return T(e)
                    },
                    unwrap: function() {
                        return e
                    },
                    unwrapOr: function() {
                        return e
                    },
                    unwrapOrElse: function() {
                        return e
                    },
                    okOr: function() {
                        return P(e)
                    },
                    okOrElse: function() {
                        return P(e)
                    }
                }
            }
            function I(e) {
                return w(e) ? T(e) : _
            }
            function S(e, t) {
                return t < 0 ? e.length + t : t
            }
            function A(e, t) {
                return I(e[S(e, t)])
            }
            function k(e, t) {
                for (var n = Object.create(null), i = 0; i < e.length; i++) {
                    var r = e[i]
                      , s = t(r, i);
                    s in n || (n[s] = []),
                    n[s].push(r)
                }
                return n
            }
            function O(e) {
                var t, n = p(e) ? [] : Array.isArray(e) ? e : Array.from(e);
                return s(t = {}, Symbol.iterator, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.delegateYield(n[Symbol.iterator](), "t0", 1);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                s(t, "append", (function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                        t[i] = arguments[i];
                    return O([].concat(a(n), t))
                }
                )),
                s(t, "at", (function(e) {
                    return A(n, e)
                }
                )),
                s(t, "concat", (function(e) {
                    return O([].concat(a(n), a(e)))
                }
                )),
                s(t, "compact", (function() {
                    return O(n.filter(w))
                }
                )),
                s(t, "drop", (function(e) {
                    return O(n.slice(e))
                }
                )),
                s(t, "each", (function(e) {
                    return n.forEach(e),
                    O(n)
                }
                )),
                s(t, "every", (function(e) {
                    return n.every(e)
                }
                )),
                s(t, "filter", (function(e) {
                    return O(n.filter(e))
                }
                )),
                s(t, "find", (function(e) {
                    return I(n.find(e))
                }
                )),
                s(t, "first", (function() {
                    return A(n, 0)
                }
                )),
                s(t, "group", (function(e) {
                    return k(n, e)
                }
                )),
                s(t, "groupBy", (function(e) {
                    return function(e, t) {
                        return k(e, (function(e) {
                            return e[t]
                        }
                        ))
                    }(n, e)
                }
                )),
                s(t, "includes", (function(e) {
                    return n.includes(e)
                }
                )),
                s(t, "insert", (function(e, t) {
                    return O(function(e, t, n) {
                        n = S(e, n);
                        var i = a(e);
                        return i.splice(n, 0, t),
                        i
                    }(n, e, t))
                }
                )),
                s(t, "isEmpty", (function() {
                    return 0 === n.length
                }
                )),
                s(t, "last", (function() {
                    return A(n, -1)
                }
                )),
                s(t, "len", (function() {
                    return n.length
                }
                )),
                s(t, "map", (function(e) {
                    return O(n.map(e))
                }
                )),
                s(t, "move", (function(e, t) {
                    return O(function(e, t, n) {
                        t = S(e, t),
                        n = S(e, n);
                        var i = a(e)
                          , r = i.splice(t, 1)[0];
                        return i.splice(n, 0, r),
                        i
                    }(n, e, t))
                }
                )),
                s(t, "prepend", (function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
                        t[i] = arguments[i];
                    return O([].concat(t, a(n)))
                }
                )),
                s(t, "reduce", (function(e, t) {
                    return n.reduce(t, e)
                }
                )),
                s(t, "remove", (function(e) {
                    return O(function(e, t) {
                        t = S(e, t);
                        var n = a(e);
                        return n.splice(t, 1),
                        n
                    }(n, e))
                }
                )),
                s(t, "reverse", (function() {
                    return O(a(n).reverse())
                }
                )),
                s(t, "shuffle", (function() {
                    return O(function(e) {
                        for (var t = a(e), n = t.length - 1; n > 0; n--) {
                            var i = Math.floor(Math.random() * (n + 1))
                              , r = t[n];
                            t[n] = t[i],
                            t[i] = r
                        }
                        return t
                    }(n))
                }
                )),
                s(t, "some", (function(e) {
                    return n.some(e)
                }
                )),
                s(t, "sort", (function(e) {
                    return O(a(n).sort(e))
                }
                )),
                s(t, "swap", (function(e, t) {
                    return O(function(e, t, n) {
                        t = S(e, t),
                        n = S(e, n);
                        var i = a(e)
                          , r = i[t];
                        return i[t] = i[n],
                        i[n] = r,
                        i
                    }(n, e, t))
                }
                )),
                s(t, "take", (function(e) {
                    return O(n.slice(0, e))
                }
                )),
                s(t, "toArray", (function() {
                    return a(n)
                }
                )),
                s(t, "toJSON", (function() {
                    return a(n)
                }
                )),
                t
            }
            var C, R = function(e) {
                return function(t) {
                    if (!y(t))
                        return E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        });
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) {
                        var r = e(t[i]);
                        if (r.isErr())
                            return E(r.unwrapErr());
                        n.push(r.unwrap())
                    }
                    return P(n)
                }
            }, N = Object.freeze(Object.defineProperty({
                __proto__: null,
                array: R,
                boolean: function(e) {
                    return function(t) {
                        if (null != e && e.coerce)
                            if (h(t))
                                switch (t.toLowerCase()) {
                                case "true":
                                case "yes":
                                case "on":
                                    t = !0;
                                    break;
                                default:
                                    t = !1
                                }
                            else
                                t = Boolean(t);
                        return d(t) ? P(t) : E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                chain: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    return function(t) {
                        return e(t).andThen((function(e) {
                            return P(n.reduce((function(e, t) {
                                return t(e)
                            }
                            ), e))
                        }
                        ))
                    }
                },
                date: function(e) {
                    return function(t) {
                        return null != e && e.coerce && (u(t) || h(t)) && (t = new Date(t)),
                        function(e) {
                            return function(e, t) {
                                return t instanceof e
                            }(Date, e) && u(e.getTime())
                        }(t) ? P(t) : E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                defaulted: function(e, t) {
                    return function(n) {
                        return m(n) ? P(t) : e(n)
                    }
                },
                enums: function(e) {
                    var t = Object.values(e);
                    return function(e) {
                        return t.includes(e) ? P(e) : E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                intersection: function(e) {
                    return function(t) {
                        var n, i = Object.create(null), s = r(e);
                        try {
                            for (s.s(); !(n = s.n()).done; ) {
                                var a = (0,
                                n.value)(t);
                                if (a.isErr())
                                    return E(a.unwrapErr());
                                Object.assign(i, a.unwrap())
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return P(i)
                    }
                },
                list: function(e) {
                    var t = R(e);
                    return function(e) {
                        return t(e).andThen((function(e) {
                            return P(O(e))
                        }
                        ))
                    }
                },
                literal: function(e) {
                    return function(t) {
                        return t === e ? P(t) : E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                map: function(e, t) {
                    return function(n) {
                        return e(n).andThen(t)
                    }
                },
                number: function(e) {
                    return function(t) {
                        return null != e && e.coerce && (t = Number(t)),
                        u(t) ? P(t) : E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                object: function(e) {
                    var t = Object.entries(e);
                    return function(e) {
                        if (!g(e))
                            return E({
                                path: [],
                                message: "",
                                actual: "",
                                expected: ""
                            });
                        var n, s = Object.create(null), a = r(t);
                        try {
                            for (a.s(); !(n = a.n()).done; ) {
                                var o = i(n.value, 2)
                                  , c = o[0]
                                  , l = (0,
                                o[1])(s[c]);
                                if (l.isErr())
                                    return E(l.unwrapErr())
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return P(s)
                    }
                },
                optional: function(e) {
                    return function(t) {
                        return m(t) ? P(_) : e(t).andThen((function(e) {
                            return P(T(e))
                        }
                        ))
                    }
                },
                record: function(e, t) {
                    return function(n) {
                        if (!g(n))
                            return E({
                                path: [],
                                message: "",
                                actual: "",
                                expected: ""
                            });
                        for (var r = Object.create(null), s = 0, a = Object.entries(n); s < a.length; s++) {
                            var o = i(a[s], 2)
                              , c = o[0]
                              , l = o[1]
                              , h = e(c);
                            if (h.isErr()) {
                                var u = h.unwrapErr();
                                return u.path.unshift(c),
                                E(u)
                            }
                            var d = t(l);
                            if (d.isErr()) {
                                var p = d.unwrapErr();
                                return p.path.unshift(c),
                                E(p)
                            }
                            r[h.unwrap()] = d.unwrap()
                        }
                        return P(r)
                    }
                },
                string: function(e) {
                    return function(t) {
                        return null != e && e.coerce && (t = String(t)),
                        h(t) ? P(null != e && e.trim ? t.trim() : t) : E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                tuple: function(e) {
                    var t = a(e.entries());
                    return function(n) {
                        if (!y(n))
                            return E({
                                path: [],
                                message: "",
                                actual: "",
                                expected: ""
                            });
                        var s, a = new Array(e.length), o = r(t);
                        try {
                            for (o.s(); !(s = o.n()).done; ) {
                                var c = i(s.value, 2)
                                  , l = c[0]
                                  , h = (0,
                                c[1])(n[l]);
                                if (h.isErr()) {
                                    var u = h.unwrapErr();
                                    return u.path.unshift(l.toString()),
                                    E(u)
                                }
                                a[l] = h.unwrap()
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return P(a)
                    }
                },
                union: function(e) {
                    return function(t) {
                        var n, i = r(e);
                        try {
                            for (i.s(); !(n = i.n()).done; ) {
                                var s = (0,
                                n.value)(t);
                                if (s.isOk())
                                    return P(s.unwrap())
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return E({
                            path: [],
                            message: "",
                            actual: "",
                            expected: ""
                        })
                    }
                },
                unknown: function(e) {
                    return P(e)
                }
            }, Symbol.toStringTag, {
                value: "Module"
            })), x = n(9233), D = n(7802), M = n(2940), L = n(7227), j = n(584), $ = n(9631), F = n(2619), U = n(4444), B = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const G = "\n    key\n    value(lang: $lang)\n    type\n"
              , W = `\n    id\n    tag\n    type\n    days\n    isRepeat\n    daysBonuses {\n        day\n        bonuses { id type }\n    }\n    triggers {\n        ${U.p}\n        day\n    }\n    isAutoRegister\n`
              , q = `\n fragment translations on Translations { en fr it de es zh pt ko ja ru tr ar id hi }\nquery ($lang: Lang) {\n    result: FetchPlayerProjectConfig {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProjectConfig {\n            isDev\n            isAllowedOrigin\n            config {\n                lang\n                avatarGenerator\n                avatarGeneratorTemplate\n                ymCounterId\n                gtagCounterId\n                showLoader\n                showReqCounter\n                orientation\n                showOrientationOverlay\n                targetOS\n                showUnsupportedOSOverlay\n                communityLinks { ...translations }\n            }\n            project {\n                name(lang: $lang)\n                description(lang: $lang)\n                icon(w: 256, h: 256, crop: false)\n                mainChatId\n                enableMainChat\n                achievements {\n                    isLockedVisible\n                    isLockedDescriptionVisible\n                    enableUnlockToast\n                }\n                ads {\n                    showCountdownOverlay\n                    showRewardedFailedOverlay\n                }\n            }\n            platformConfig {\n                appId\n                gameLink\n                communityLinks { ...translations }\n                banners {\n                    type\n                    enabled\n                    bannerId\n                    desktopBannerId\n                    frequency\n                    refreshInterval\n                    maxWidth\n                    maxHeight\n                    maxWidthDimension\n                    maxHeightDimension\n                    desktopMaxWidth\n                    desktopMaxHeight\n                    desktopMaxWidthDimension\n                    desktopMaxHeightDimension\n                    fitCanvas\n                    position\n                    limits { hour day session }\n                    useNative\n                }\n            }\n            playerFields { ${D.SX} }\n            serverTime\n            gameVariables { ${G} }\n            rewards {\n                ${L.GY}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            triggers {\n                ${U.p}\n            }\n            achievements {\n                ${j.Th}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            achievementsGroups {\n                ${j.VI}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            products {\n                ${$.c5}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            products {\n                ${$.c5}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            schedulers { ${W} }\n            events {\n                ${F.Ks}\n                names { ...translations }\n                descriptions { ...translations }\n            }\n            acl {\n                canUploadImages\n                canUploadFiles\n                canConnectOnline\n                canCollectStats\n            }\n        }\n    }\n}`
              , V = `query ($lang: Lang) {\n    result: FetchPlayerProjectVariables {\n        __typename\n        ... on Problem { message }\n        ... on ProjectVariablesList {\n            items { ${G} }\n        }\n    }\n}`;
            var Y;
            !function(e) {
                e.EN = "en",
                e.FR = "fr",
                e.IT = "it",
                e.DE = "de",
                e.ES = "es",
                e.ZH = "zh",
                e.PT = "pt",
                e.KO = "ko",
                e.JA = "ja",
                e.RU = "ru",
                e.TR = "tr",
                e.AR = "ar",
                e.HI = "hi",
                e.ID = "id"
            }(Y || (Y = {}));
            const z = N.enums(Y)
              , K = {
                [Y.EN]: "en-US",
                [Y.FR]: "fr-FR",
                [Y.IT]: "it-IT",
                [Y.DE]: "de-DE",
                [Y.ES]: "es-ES",
                [Y.ZH]: "zh-CN",
                [Y.PT]: "pt-BR",
                [Y.KO]: "ko-KR",
                [Y.JA]: "ja-JP",
                [Y.RU]: "ru-RU",
                [Y.TR]: "tr-TR",
                [Y.AR]: "ar-SA",
                [Y.HI]: "hi-IN",
                [Y.ID]: "id-ID"
            }
              , J = {
                isDev: !1,
                isAllowedOrigin: !0,
                config: {
                    avatarGenerator: "dicebear_retro",
                    avatarGeneratorTemplate: "",
                    enableUserUploadFiles: !1,
                    enableUserUploadImages: !1,
                    ymCounterId: 0,
                    gtagCounterId: "",
                    showLoader: !1,
                    showReqCounter: !1,
                    orientation: M.LH.Any,
                    showOrientationOverlay: !1,
                    showUnsupportedOSOverlay: !1,
                    targetOS: [],
                    communityLinks: {
                        en: ""
                    }
                },
                platformConfig: x.iA,
                playerFields: [],
                serverTime: (new Date).toISOString(),
                gameVariables: [],
                acl: {
                    canUploadFiles: !1,
                    canUploadImages: !1,
                    canConnectOnline: !1,
                    canCollectStats: !1
                },
                project: {
                    icon: "",
                    description: "",
                    name: "",
                    enableMainChat: !1,
                    mainChatId: 0,
                    achievements: {
                        isLockedVisible: !1,
                        isLockedDescriptionVisible: !1,
                        enableUnlockToast: !1
                    },
                    ads: {
                        showCountdownOverlay: !1,
                        showRewardedFailedOverlay: !1
                    }
                },
                rewards: [],
                triggers: [],
                products: [],
                achievements: [],
                achievementsGroups: [],
                schedulers: [],
                events: []
            }
              , Z = {
                limits: {
                    [x.$.PRELOADER]: {
                        hour: {
                            timestamp: 0,
                            count: 0
                        },
                        day: {
                            timestamp: 0,
                            count: 0
                        },
                        session: {
                            count: 0
                        }
                    },
                    [x.$.FULLSCREEN]: {
                        hour: {
                            timestamp: 0,
                            count: 0
                        },
                        day: {
                            timestamp: 0,
                            count: 0
                        },
                        session: {
                            count: 0
                        }
                    },
                    [x.$.REWARDED]: {
                        hour: {
                            timestamp: 0,
                            count: 0
                        },
                        day: {
                            timestamp: 0,
                            count: 0
                        },
                        session: {
                            count: 0
                        }
                    },
                    [x.$.STICKY]: {
                        hour: {
                            timestamp: 0,
                            count: 0
                        },
                        day: {
                            timestamp: 0,
                            count: 0
                        },
                        session: {
                            count: 0
                        }
                    }
                }
            };
            class H {
                constructor(e) {
                    C.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, C, e, "f")
                }
                fetchConfig() {
                    return B(this, C, "f").fetch(q)
                }
                fetchVariables() {
                    return B(this, C, "f").fetch(V)
                }
            }
            C = new WeakMap
        }
        ,
        7227: (e,t,n)=>{
            "use strict";
            n.d(t, {
                GY: ()=>s,
                v_: ()=>a,
                ZP: ()=>h
            });
            var i, r = function(e, t, n, i) {
                if ("a" === n && !i)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
            };
            const s = "\n    id\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    icon(w: 256, h: 256, crop: false)\n    tag\n    name(lang: $lang)\n    description(lang: $lang)\n    isAutoAccept\n    mutations { type key action value }\n"
              , a = "\n    rewardId\n    countTotal\n    countAccepted\n"
              , o = `mutation ($input: GivePlayerRewardInput!, $lang: Lang) {\n    result: GivePlayerReward(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerReward {\n            ${a}\n            reward { ${s} }\n        }\n    }\n}`
              , c = `mutation ($input: AcceptPlayerRewardInput!, $lang: Lang) {\n    result: AcceptPlayerReward(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerReward {\n            ${a}\n            reward { ${s} }\n        }\n    }\n}`
              , l = `query($lang: Lang) {\n    result: FetchPlayerRewards {\n        __typename\n        ... on Problem { message }\n        ... on PlayerRewards {\n            rewards { ${s} }\n            playerRewards { ${a} }\n        }\n    }\n}`;
            class h {
                constructor(e) {
                    i.set(this, void 0),
                    function(e, t, n, i, r) {
                        if ("m" === i)
                            throw new TypeError("Private method is not writable");
                        if ("a" === i && !r)
                            throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e))
                            throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        "a" === i ? r.call(e, n) : r ? r.value = n : t.set(e, n)
                    }(this, i, e, "f")
                }
                fetch() {
                    return r(this, i, "f").fetch(l)
                }
                accept({id: e, tag: t}) {
                    return r(this, i, "f").fetch(c, {
                        id: e,
                        tag: t
                    })
                }
                give({id: e, tag: t}) {
                    return r(this, i, "f").fetch(o, {
                        id: e,
                        tag: t
                    })
                }
            }
            i = new WeakMap
        }
        ,
        4444: (e,t,n)=>{
            "use strict";
            n.d(t, {
                p: ()=>i
            });
            const i = "\n    id\n    tag\n    isAutoClaim\n    description(lang: $lang)\n    descriptions { ...translations }\n    conditions { \n    type\n    key\n    operator\n    value\n }\n    bonuses { id type }\n"
        }
        ,
        4692: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Mn: ()=>r,
                tv: ()=>s,
                aI: ()=>a,
                dX: ()=>c
            });
            var i = n(6558);
            const r = e=>`\n    __typename\n    ... on Problem { message }\n    ${e}\n`
              , s = e=>{
                if ("Problem" === (null == e ? void 0 : e.__typename))
                    throw e.message
            }
              , a = {
                MB: 1048576
            }
              , o = new TextEncoder
              , c = (e,t,n)=>{
                const r = o.encode(JSON.stringify(e)).length;
                if (r > t && i.kg.warn(`Maximum size exceeded: sending data must be maximum 1MB, your size is: ${Math.round(r / 1024 / 1024 * 100) / 100} MB`),
                r > n)
                    throw new Error("max_data_limit_exceeded")
            }
        }
    }, s = {};
    function a(e) {
        var t = s[e];
        if (void 0 !== t)
            return t.exports;
        var n = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(n.exports, n, n.exports, a),
        n.loaded = !0,
        n.exports
    }
    a.m = r,
    a.amdD = function() {
        throw new Error("define cannot be used indirect")
    }
    ,
    a.amdO = {},
    a.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
    a.t = function(n, i) {
        if (1 & i && (n = this(n)),
        8 & i)
            return n;
        if ("object" == typeof n && n) {
            if (4 & i && n.__esModule)
                return n;
            if (16 & i && "function" == typeof n.then)
                return n
        }
        var r = Object.create(null);
        a.r(r);
        var s = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var o = 2 & i && n; "object" == typeof o && !~e.indexOf(o); o = t(o))
            Object.getOwnPropertyNames(o).forEach((e=>s[e] = ()=>n[e]));
        return s.default = ()=>n,
        a.d(r, s),
        r
    }
    ,
    a.d = (e,t)=>{
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.f = {},
    a.e = e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e, t),
    t)), [])),
    a.u = e=>(({
        47: "i18n/pt-json",
        66: "i18n/tr-json",
        70: "platforms/platform.vkplay",
        72: "utils/centrifuge.protobuf",
        84: "platforms/platform.wg",
        159: "i18n/it-json",
        369: "platforms/platform.gm",
        433: "platforms/platform.cg",
        459: "i18n/de-json",
        460: "gamepush.overlay",
        477: "platforms/platform.gp",
        513: "i18n/id-json",
        551: "platforms/platform.poki",
        552: "platforms/platform.smartmarket",
        606: "i18n/devtools-ru-json",
        614: "platforms/platform.ok",
        637: "i18n/hi-json",
        658: "platforms/platform.beeline",
        670: "i18n/ko-json",
        746: "i18n/fr-json",
        755: "platforms/platform.yandex",
        808: "i18n/ar-json",
        848: "i18n/ja-json",
        851: "platforms/platform.vk.app",
        860: "platforms/platform.gd",
        863: "gamepush.devtools",
        885: "platforms/platform.gamepix",
        897: "i18n/devtools-en-json",
        911: "platforms/platform.vk",
        929: "i18n/zh-json",
        932: "i18n/en-json",
        964: "i18n/ru-json",
        968: "i18n/es-json"
    }[e] || e) + "." + a.h() + ".js"),
    a.h = ()=>"6eb0968859ad5c3f006d",
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n = {},
    i = "game-score-sdk:",
    a.l = (e,t,r,s)=>{
        if (n[e])
            n[e].push(t);
        else {
            var o, c;
            if (void 0 !== r)
                for (var l = document.getElementsByTagName("script"), h = 0; h < l.length; h++) {
                    var u = l[h];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == i + r) {
                        o = u;
                        break
                    }
                }
            o || (c = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            a.nc && o.setAttribute("nonce", a.nc),
            o.setAttribute("data-webpack", i + r),
            o.src = e,
            0 !== o.src.indexOf(window.location.origin + "/") && (o.crossOrigin = "anonymous")),
            n[e] = [t];
            var d = (t,i)=>{
                o.onerror = o.onload = null,
                clearTimeout(p);
                var r = n[e];
                if (delete n[e],
                o.parentNode && o.parentNode.removeChild(o),
                r && r.forEach((e=>e(i))),
                t)
                    return t(i)
            }
              , p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = d.bind(null, o.onerror),
            o.onload = d.bind(null, o.onload),
            c && document.head.appendChild(o)
        }
    }
    ,
    a.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e),
    (()=>{
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        a.p = e
    }
    )(),
    (()=>{
        var e = {
            821: 0,
            742: 0,
            11: 0
        };
        a.f.j = (t,n)=>{
            var i = a.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    n.push(i[2]);
                else {
                    var r = new Promise(((n,r)=>i = e[t] = [n, r]));
                    n.push(i[2] = r);
                    var s = a.p + a.u(t)
                      , o = new Error;
                    a.l(s, (n=>{
                        if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0),
                        i)) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , s = n && n.target && n.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")",
                            o.name = "ChunkLoadError",
                            o.type = r,
                            o.request = s,
                            i[1](o)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t,n)=>{
            var i, r, [s,o,c] = n, l = 0;
            for (i in o)
                a.o(o, i) && (a.m[i] = o[i]);
            for (c && c(a),
            t && t(n); l < s.length; l++)
                r = s[l],
                a.o(e, r) && e[r] && e[r][0](),
                e[s[l]] = 0
        }
          , n = self.webpackChunkgame_score_sdk = self.webpackChunkgame_score_sdk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    (()=>{
        "use strict";
        a(2096),
        new (a(7818).Z)
    }
    )()
}
)();
