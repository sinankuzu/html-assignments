(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50040,76532],{42238:function(e,i,s){var t;!function(o,n){var r="function",a="undefined",l="object",d="string",c="model",u="name",p="type",m="vendor",w="version",b="architecture",g="console",f="mobile",v="tablet",h="smarttv",y="wearable",k="embedded",x={extend:function(e,i){var s={};for(var t in e)i[t]&&i[t].length%2==0?s[t]=i[t].concat(e[t]):s[t]=e[t];return s},has:function(e,i){return typeof e===d&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===d?e.replace(/[^\d\.]/g,"").split(".")[0]:n},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof i===a?e:e.substring(0,255)}},T={rgx:function(e,i){for(var s,t,o,a,d,c,u=0;u<i.length&&!d;){var p=i[u],m=i[u+1];for(s=t=0;s<p.length&&!d;)if(d=p[s++].exec(e))for(o=0;o<m.length;o++)c=d[++t],typeof(a=m[o])===l&&a.length>0?2==a.length?typeof a[1]==r?this[a[0]]=a[1].call(this,c):this[a[0]]=a[1]:3==a.length?typeof a[1]!==r||a[1].exec&&a[1].test?this[a[0]]=c?c.replace(a[1],a[2]):n:this[a[0]]=c?a[1].call(this,c,a[2]):n:4==a.length&&(this[a[0]]=c?a[3].call(this,c.replace(a[1],a[2])):n):this[a]=c||n;u+=2}},str:function(e,i){for(var s in i)if(typeof i[s]===l&&i[s].length>0){for(var t=0;t<i[s].length;t++)if(x.has(i[s][t],e))return"?"===s?n:s}else if(x.has(i[s],e))return"?"===s?n:s;return e}},S={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},E={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[u,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[u,w],[/opios[\/\s]+([\w\.]+)/i],[w,[u,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[w,[u,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,w],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[w,[u,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[w,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[u,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[w,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[w,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],w],[/focus\/([\w\.]+)/i],[w,[u,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[w,[u,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[w,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[u,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[w,[u,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[w,[u,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],w],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[u,w],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[u],[/;fbav\/([\w\.]+);/i],[w,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[u,w],[/\bgsa\/([\w\.]+)\s.*safari\//i],[w,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[w,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],w],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[w,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,w],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[w,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[w,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[w,T.str,S.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,w],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],w],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[w,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,x.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[b,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[b,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[b,/ower/,"",x.lowerize]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[b,x.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[c,[m,"Samsung"],[p,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[c,[m,"Samsung"],[p,f]],[/\((ip(?:hone|od)[\s\w]*);/i],[c,[m,"Apple"],[p,f]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,"Apple"],[p,v]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[c,[m,"Huawei"],[p,v]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[c,[m,"Huawei"],[p,f]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[c,/_/g," "],[m,"Xiaomi"],[p,f]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[c,/_/g," "],[m,"Xiaomi"],[p,v]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[c,[m,"OPPO"],[p,f]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[c,[m,"Vivo"],[p,f]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[c,[m,"Realme"],[p,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[c,[m,"Motorola"],[p,f]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[m,"Motorola"],[p,v]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[c,[m,"LG"],[p,v]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[c,[m,"LG"],[p,f]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[c,[m,"Lenovo"],[p,v]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[c,/_/g," "],[m,"Nokia"],[p,f]],[/droid.+;\s(pixel\sc)[\s)]/i],[c,[m,"Google"],[p,v]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[c,[m,"Google"],[p,f]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,"Sony"],[p,f]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[c,"Xperia Tablet"],[m,"Sony"],[p,v]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[c,[m,"OnePlus"],[p,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[c,[m,"Amazon"],[p,v]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[c,"Fire Phone"],[m,"Amazon"],[p,f]],[/\((playbook);[\w\s\),;-]+(rim)/i],[c,m,[p,v]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[c,[m,"BlackBerry"],[p,f]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[c,[m,"ASUS"],[p,v]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[c,[m,"ASUS"],[p,f]],[/(nexus\s9)/i],[c,[m,"HTC"],[p,v]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[m,[c,/_/g," "],[p,f]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[c,[m,"Acer"],[p,v]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[c,[m,"Meizu"],[p,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,c,[p,f]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[m,c,[p,v]],[/\s(surface\sduo)\s/i],[c,[m,"Microsoft"],[p,v]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[c,[m,"Fairphone"],[p,f]],[/\s(u304aa)\sbuild/i],[c,[m,"AT&T"],[p,f]],[/sie-(\w*)/i],[c,[m,"Siemens"],[p,f]],[/[;\/]\s?(rct\w+)\sbuild/i],[c,[m,"RCA"],[p,v]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[c,[m,"Dell"],[p,v]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[c,[m,"Verizon"],[p,v]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[c,[m,"Barnes & Noble"],[p,v]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[c,[m,"NuVision"],[p,v]],[/;\s(k88)\sbuild/i],[c,[m,"ZTE"],[p,v]],[/;\s(nx\d{3}j)\sbuild/i],[c,[m,"ZTE"],[p,f]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[c,[m,"Swiss"],[p,f]],[/[;\/]\s?(zur\d{3})\sbuild/i],[c,[m,"Swiss"],[p,v]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[c,[m,"Zeki"],[p,v]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[m,"Dragon Touch"],c,[p,v]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[c,[m,"Insignia"],[p,v]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[c,[m,"NextBook"],[p,v]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[m,"Voice"],c,[p,f]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[m,"LvTel"],c,[p,f]],[/;\s(ph-1)\s/i],[c,[m,"Essential"],[p,f]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[c,[m,"Envizen"],[p,v]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[c,[m,"MachSpeed"],[p,v]],[/[;\/]\s?tu_(1491)\sbuild/i],[c,[m,"Rotor"],[p,v]],[/(shield[\w\s]+)\sbuild/i],[c,[m,"Nvidia"],[p,v]],[/(sprint)\s(\w+)/i],[m,c,[p,f]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,"Microsoft"],[p,f]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,"Zebra"],[p,v]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,"Zebra"],[p,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[m,c,[p,g]],[/droid.+;\s(shield)\sbuild/i],[c,[m,"Nvidia"],[p,g]],[/(playstation\s[345portablevi]+)/i],[c,[m,"Sony"],[p,g]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[c,[m,"Microsoft"],[p,g]],[/smart-tv.+(samsung)/i],[m,[p,h]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,"Samsung"],[p,h]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[m,"LG"],[p,h]],[/(apple)\s?tv/i],[m,[c,"Apple TV"],[p,h]],[/crkey/i],[[c,"Chromecast"],[m,"Google"],[p,h]],[/droid.+aft([\w])(\sbuild\/|\))/i],[c,[m,"Amazon"],[p,h]],[/\(dtv[\);].+(aquos)/i],[c,[m,"Sharp"],[p,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,x.trim],[c,x.trim],[p,h]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[p,h]],[/((pebble))app\/[\d\.]+\s/i],[m,c,[p,y]],[/droid.+;\s(glass)\s\d/i],[c,[m,"Google"],[p,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[c,[m,"Zebra"],[p,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[m,[p,k]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[c,[p,f]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[c,[p,v]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[p,x.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[c,[m,"Generic"]],[/(phone)/i],[[p,f]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[w,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,w],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[u,[w,T.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[w,T.str,S.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[u,"Mac OS"],[w,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[u,w],[/\(bb(10);/i],[w,[u,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[w,[u,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[w,[u,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],w],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[u,w],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],w],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,w]]},A=function(e,i){if("object"==typeof e&&(i=e,e=n),!(this instanceof A))return new A(e,i).getResult();var s=e||(void 0!==o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),t=i?x.extend(E,i):E;return this.getBrowser=function(){var e={name:n,version:n};return T.rgx.call(e,s,t.browser),e.major=x.major(e.version),e},this.getCPU=function(){var e={architecture:n};return T.rgx.call(e,s,t.cpu),e},this.getDevice=function(){var e={vendor:n,model:n,type:n};return T.rgx.call(e,s,t.device),e},this.getEngine=function(){var e={name:n,version:n};return T.rgx.call(e,s,t.engine),e},this.getOS=function(){var e={name:n,version:n};return T.rgx.call(e,s,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=typeof e===d&&e.length>255?x.trim(e,255):e,this},this.setUA(s),this};A.VERSION="0.7.28",A.BROWSER={NAME:u,MAJOR:"major",VERSION:w},A.CPU={ARCHITECTURE:b},A.DEVICE={MODEL:c,VENDOR:m,TYPE:p,CONSOLE:g,MOBILE:f,SMARTTV:h,TABLET:v,WEARABLE:y,EMBEDDED:k},A.ENGINE={NAME:u,VERSION:w},A.OS={NAME:u,VERSION:w},typeof i!==a?(e.exports&&(i=e.exports=A),i.UAParser=A):(t=function(){return A}.call(i,s,i,e))===n||(e.exports=t);var _=void 0!==o&&(o.jQuery||o.Zepto);if(_&&!_.ua){var C=new A;_.ua=C.getResult(),_.ua.get=function(){return C.getUA()},_.ua.set=function(e){C.setUA(e);var i=C.getResult();for(var s in i)_.ua[s]=i[s]}}}("object"==typeof window?window:this)},176532:(e,i,s)=>{function t({async:e,data:i,headers:s,timeout:t,type:o,updateProgress:n,url:r}){let a=!1;return{promise:new Promise(((n,l)=>{const d=t?setTimeout((()=>{a="timeout",l({type:"timeout"})}),t):void 0;fetch(r,{method:o,credentials:"include",mode:"same-origin",keepalive:!e,headers:s,...i?{body:i}:{}}).then((e=>{d&&clearTimeout(d),a?"timeout"!==a&&l({type:"abort"}):n({status:e.status,statusText:e.statusText,ok:e.status>=200&&e.status<300||304===e.status,headers:{get:i=>e.headers.get(i),_logString:()=>{const i=[];for(const[s,t]of e.headers.entries())i.push(`${s}: ${t}\r\n`);return i.join("")}},json:()=>e.json().then((e=>e instanceof Object?e:Promise.reject(new Error("JSON.parse did not return an object"))))})})).catch((()=>Promise.reject({type:"timeout"})))})),abort:()=>{a="manual"}}}s.d(i,{Z:()=>p});var o=s(635240);const n=(...e)=>{};function r({async:e,data:i,headers:s,timeout:t,type:o,updateProgress:r,url:a}){const l=new XMLHttpRequest;return{promise:new Promise(((d,c)=>{const u=t?setTimeout((()=>{l.onreadystatechange=n,l.abort(),c({type:"timeout"})}),t):void 0;l.onreadystatechange=()=>{if(4===l.readyState){l.onreadystatechange=n,clearTimeout(u);const e=l.status,i=l.statusText,s=l.responseText;if(!e)return void c({type:"abort"});d({status:e,statusText:i,ok:e>=200&&e<300||304===e,headers:{get:e=>l.getResponseHeader(e),_logString:()=>l.getAllResponseHeaders()},json:()=>new Promise(((e,i)=>{try{const t=JSON.parse(s);t instanceof Object?e(t):i(new Error("JSON.parse did not return an object"))}catch(t){i(t)}})),responseText:s})}},r&&l.upload.addEventListener("progress",(e=>{let i=null;e.lengthComputable&&(i=e.loaded/e.total*100),r(i)})),l.open(o,a,e),Object.keys(s).forEach((e=>{l.setRequestHeader(e,s[e])})),l.send(i||null)})),abort:()=>{l&&l.abort()}}}var a=s(42238),l=s.n(a);const d=e=>{if((e=>{const i=e.match(/\s+chrome\/(\d+)\./i);return!!i&&parseInt(i[1],10)>=79})(e))return!0;const{name:i="",version:s=""}=l()(e).browser,t=parseInt(s.replace(/\..*/,""),10)||0;return"chrome"===i.toLowerCase()&&t>=79};var c=s(826067),u=s(628551);function p(e){const i={async:!0,cache:!1,data:void 0,headers:{},query:{},timeout:0,type:"GET",...e};let{url:s,data:n}=i;const a=i.type;n&&"object"==typeof n&&("GET"===a?(s=(0,c.ru)(s,n),n=void 0):n instanceof FormData||(n=(0,c.XP)(n))),!1===i.cache&&"GET"===a&&(s=(0,c.ru)(s,{_:Date.now()}));const l=(0,u.needsCsrfToken)(a,s);if(l&&!(0,u.getCsrfToken)())return{promise:Promise.reject({type:"csrferror",message:"No csrf token found"}),abort:()=>{}};return(!i.async&&"keepalive"in new Request("")&&d(window.navigator.userAgent||"")?t:r)({...i,url:s,data:n,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript, */*, q=0.01","X-APP-VERSION":(0,o.Z)(),..."GET"===a||!n||n instanceof FormData?{}:{"Content-Type":"application/x-www-form-urlencoded"},...l?{"X-CSRFToken":(0,u.getCsrfToken)()||""}:{},...i.headers}})}},991067:(e,i,s)=>{s.d(i,{Z:()=>r});const t=()=>{var e;return!(null===(e=window.performance)||void 0===e||!e.timing)};var o=s(985271),n=s(969853);function r(e){return!("desktop"===e&&!t())&&(!!o.Z&&(0,n.v)())}},528961:(e,i,s)=>{s.d(i,{cC:()=>n,jy:()=>o,qr:()=>a,sk:()=>r});const t=e=>"number"==typeof e?Math.round(e):e,o=e=>({type:"I16",value:t(e)}),n=e=>({type:"I32",value:t(e)}),r=e=>({type:"STRING",value:e}),a=e=>({type:"BOOL",value:e})},638089:(e,i,s)=>{s.d(i,{ng:()=>f,rA:()=>h});var t=s(602738),o=s(226464),n=s(22773),r=s(156381),a=s(543059),l=s(528961);const d=(e,i)=>(e||[]).reduce(((e,s)=>({...e,[`experiment.${s}`]:(0,l.sk)(i(s))})),{}),c=(e,i)=>"number"==typeof i?e(i):null,u=e=>e.reduce(((e,i)=>e+i),0),p=(e,i)=>Object.keys(i).reduce(((s,t)=>({...s,[`${e}${t}`]:i[t]})),{}),m=e=>{if(!e.length)return{};const i=e.map((({startTime:e,requestStart:i,responseStart:s,responseEnd:t})=>{const o=i||e;return{startTime:e,requestStart:o,responseStart:s||o,responseEnd:t}})),s=u(i.map((e=>e.requestStart-e.startTime))),t=u(i.map((e=>e.responseStart-e.requestStart))),o=u(i.map((e=>e.responseEnd-e.responseStart))),n=s+t+o,r=u(e.map((e=>e.decodedBodySize||0)));return{decodedBodySize:(0,l.cC)((a=r,Number(Number(a/1024).toFixed(3)))),"duration.all":(0,l.cC)(n),"duration.requestStartToResponseStart":(0,l.cC)(t),"duration.responseStartToResponseEnd":(0,l.cC)(o),"duration.startToRequestStart":(0,l.cC)(s)};var a},w=e=>{const i=e.filter((e=>!!e.responseEnd));return{...e.length?{...m(i),"count.completed":(0,l.cC)(i.length)}:{},"count.all":(0,l.cC)(e.length)}},b=e=>{const i=["timeSecond1","timeSecond2","timeSecond3"],s={timeSecond1:{start:0,end:0,count:0},timeSecond2:{start:0,end:0,count:0},timeSecond3:{start:0,end:0,count:0}},t={script_deferred:[],external:[],visually_complete:[],script:[],css:[],video:[],image:[],xmlhttprequest:[],other:[]};if(e.length){const{requestStart:o,startTime:n}=e[0].timing,r=o||n;s.timeSecond1.start=r,s.timeSecond1.end=r+1e3,s.timeSecond2.start=r+1e3,s.timeSecond2.end=r+2e3,s.timeSecond3.start=r+2e3,s.timeSecond3.end=r+3e3,e.forEach((e=>{const{timing:o}=e;t[e.category]=t[e.category].concat([o]),e.isDeferred&&(t.script_deferred=t.script_deferred.concat([o])),e.isExternal&&(t.external=t.external.concat([o])),e.isVisuallyCompleteRequired&&(t.visually_complete=t.visually_complete.concat([o]));const{requestStart:n,startTime:r,responseEnd:a}=o,l=n||r;i.forEach((e=>{const{start:i,end:t}=s[e];(l>=i&&l<t||l<i&&a>i)&&(s[e].count+=1)}))}))}const o={...p("concurrentRequests.",Object.keys(s).reduce(((e,i)=>e={...e,[i]:(0,l.cC)(s[i].count)}),{}))};return{...Object.keys(t).reduce(((e,i)=>({...e,...p(`resource.${i}.`,w(t[i]))})),o)}},g=(e,i,s)=>{var r;const{devicePixelRatio:a,navigator:d,innerWidth:u,innerHeight:p,performance:m}=window,{deviceMemory:w,hardwareConcurrency:b,platform:g,userAgent:f,connection:v}=d,{memory:h}=m,{appType:y,appVersion:k,browserName:x,browserVersion:T,deviceType:S,isAppShell:E,isAuthenticated:A,isBot:_,isSocialBot:C,locale:O,osName:N,stageName:j}=i,q="desktop"===S?y||5:y||6;let R;const{navigationType:M}=e;let I=null;if("initial_app_load"===M){var B;R=1;const e=null===(B=(0,t.Z)("navigation")[0])||void 0===B?void 0:B.transferSize;I=e?parseFloat((.001*e).toFixed(1)):null}else R=4;return{"app.type":(0,l.jy)(q),"app.version":(0,l.sk)(k),"browser.name":(0,l.sk)(x),"browser.version":(0,l.sk)(T),"cpu.speed":(0,l.jy)(b),"device.memory":(0,l.jy)(w),"device.type":(0,l.jy)(0),"device.typeName":(0,l.sk)(S),"device.version":(0,l.sk)("unknown"),"pwt.cause":(0,l.jy)(R),"net.effectiveType":(0,l.sk)((null==v?void 0:v.effectiveType)||null),"net.downlink":(0,l.cC)(c((e=>10*Math.round(e/10)),null==v?void 0:v.downlink)),"net.downlinkMax":(0,l.cC)(c((e=>10*Math.round(e/10)),null==v?void 0:v.downlinkMax)),"net.rtt":(0,l.cC)(c((e=>10*Math.round(e/10)),null==v?void 0:v.rtt)),"net.speed":(0,l.cC)((0,n.Hv)(s,!1)),"pwt.result":(0,l.jy)(1),"view.type":(0,l.cC)(0),"viewport.height":(0,l.cC)(p||0),"viewport.width":(0,l.cC)(u||0),devicePixelRatio:(0,l.cC)(a||0),isAppShell:(0,l.qr)(E),isAuthenticated:(0,l.qr)(A),isBot:(0,l.qr)(_),isSocialBot:(0,l.qr)(C),locale:(0,l.sk)(O),osName:(0,l.sk)(N),...null!==I&&{htmlResponseSize:(0,l.cC)(I)},nextHopProtocol:(0,l.sk)((null===(r=(0,t.Z)("navigation")[0])||void 0===r?void 0:r.nextHopProtocol)||null),platform:(0,l.sk)(g||null),profilerVersion:(0,l.sk)("3"),pwtActionName:(0,l.jy)((0,o.Rp)(e)),stageName:(0,l.sk)(j),userAgent:(0,l.sk)(f),usedJSHeapSize:(0,l.cC)((null==h?void 0:h.usedJSHeapSize)||0),totalJSHeapSize:(0,l.cC)((null==h?void 0:h.totalJSHeapSize)||0),jsHeapSizeLimit:(0,l.cC)((null==h?void 0:h.jsHeapSizeLimit)||0)}},f=({annotateExperiments:e,metricId:i,pwtStaticContext:s,binaryAnnotations:t={},performanceResourceTimings:o=[]})=>({...d(e,s.getExperimentGroup),...g(i,s,o),...t,stopwatchVersion:(0,l.jy)(1)}),v=(e,i)=>{var s;const{navigator:t}=window,{serviceWorker:o}=t,{surface:n,navigationType:d,isAuthenticated:c}=e,{cumulativeLayoutShiftScore:p,longTaskDurations:m}=(0,r.v2)();return{...m.length?{"longTask.count":(0,l.cC)(m.length),"longTask.maxDuration":(0,l.cC)(Math.max(...m)),"longTask.totalDuration":(0,l.cC)(u(m))}:{},cumulativeLayoutShiftScore:(0,l.cC)(100*p),"masonry.paginationMarkCount":(0,l.cC)((0,a.Ao)(a.at,i)),"metricId.isAuthenticated":(0,l.qr)(c),"metricId.navigationType":(0,l.sk)(d),"metricId.surface":(0,l.sk)(n),resourceBufferClearedCount:(0,l.jy)((0,a.Ao)("resourceBufferCleared",i)),scrollDuringLayout:(0,l.qr)((0,a.BA)("scrollDuringLayout",i)),serviceWorker:(0,l.qr)(o?!!o.controller:null),serviceWorkerState:(0,l.sk)((null==o||null===(s=o.controller)||void 0===s?void 0:s.state)||null)}},h=({annotateExperiments:e,binaryAnnotations:i={},entries:s,metricId:t,performanceResources:o,pwtEndTime:n,pwtStaticContext:r})=>({...i,...b(o),...d(e,r.getExperimentGroup),...g(t,r,s),...v(t,n)})},860273:(e,i,s)=>{s.d(i,{Z:()=>o});var t=s(985271);const o=()=>{const[e]=t.Z?t.Z.getEntriesByType("navigation"):[];return e}},558775:(e,i,s)=>{s.d(i,{Z:()=>k});let t=null;const o=(e,i)=>(t=t||{results:[],context:i},t.results.push(e),t);var n=s(176532),r=s(7789),a=s(383434),l=s(226464),d=s(790348),c=s(860273),u=s(358864),p=s(602738),m=s(528961);const w=(e,i)=>Object.keys(e).reduce(((s,t)=>{const o=e[t];return o&&(s[t]={timestamp:i+o}),s}),{}),b=({span:e,timeOrigin:i})=>{return{id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:i+e.startTime,duration:e.endTime-e.startTime,annotations:w(e.annotationMap,i),binary_annotations:(s=e.binaryAnnotationMap,Object.keys(s).reduce(((e,i)=>{const t=s[i];if(!t)return e;const{value:o,type:n}=t;return null==o?e:e.concat({name:i,value:o,annotation_type:n})}),[]))};var s},g=(e,{startTime:i,endTime:s,annotationMap:t,binaryAnnotationMap:o,parentId:n,traceId:r})=>({name:`pwt/${e}`,startTime:i,endTime:s,annotationMap:t,binaryAnnotationMap:o,parentId:n,id:r}),f=({annotations:e})=>e.reduce(((e,{key:i,timestamp:s})=>({...e,[`server_${i}`]:{timestamp:s}})),{}),v=(e,i)=>({...e,annotations:{...f(i),...e.annotations},binary_annotations:[...i.binary_annotations,...e.binary_annotations]}),h=({traceId:e,actionName:i,result:s,timeOrigin:t,serverDataToJoin:o})=>{let n=b({span:g(i,s),timeOrigin:t}),r=null;return o&&(n=v(n,o),r=((e,i,s)=>{var t;const o=(0,c.Z)();return(null==o?void 0:o.responseEnd)?v(b({span:{name:"html",startTime:0,endTime:(null==o?void 0:o.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{nextHopProtocol:(0,m.sk)((null===(t=(0,p.Z)("navigation")[0])||void 0===t?void 0:t.nextHopProtocol)||null)},id:e.server_span_id||(0,u.Z)(),parentId:i},timeOrigin:s}),e):null})(o,e,t)),{trace_id:e,spans:[n,...r?[r]:[],...s.spans.map((e=>b({span:e,timeOrigin:t})))]}},y=(0,a.X)("reportResult");function k({metricId:e,pwtStaticContext:i,result:s,isAuth:t}){const{serverData:a}=i,c=(0,l.KJ)(e),u=`${s.type}.${c}`,p=`${s.type}.sampled.${c}`,m=void 0!==t&&{tags:{isAuth:t}}||void 0;if((0,d.A9)(s.reason?u.concat(`.${s.reason}`):u,m),(0,d.A9)(s.reason?p.concat(`.${s.reason}`):p,{...m,sampleRate:.5}),"COMPLETE"!==s.type)return void y(`Abort metric ${c}`,s);const w=null!==(b=window.performance)&&void 0!==b&&b.now?Date.now()-window.performance.now():"unknown";var b,g;if("unknown"===w)return y(`Unable to convert to absolute times for ${c} due to missing time origin`),void(0,d.A9)(`missingTimeOrigin.${c}`,m);if(r.is&&(window.PWT_LAB_DATA=o(s,i)),s.spans.length&&(s.spans=s.spans.map((e=>(e.parentId||e.id===s.traceId||"network_resources"===e.name||(e.parentId=s.traceId),e)))),!r.is){const t=e.navigationType&&"initial_app_load"===e.navigationType,o=s.traceId,l=h({traceId:o,actionName:c,result:s,timeOrigin:w,serverDataToJoin:t&&a||null});(0,n.Z)({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(l),report_context:JSON.stringify((g=i,{debugTrace:r.eD,locale:g.locale,stageName:g.stageName}))}}),y(`PinTrace ${c} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${o.toString(16)}`,{duration:s.endTime-s.startTime,result:s,pwtStaticContext:i})}}},156381:(e,i,s)=>{s.d(i,{Af:()=>w,Kj:()=>p,PJ:()=>l,UQ:()=>b,Ux:()=>d,on:()=>r,v2:()=>c});var t=s(581341),o=s(169213);const n={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},r=()=>{n.longTaskDurations=[]},a=(0,t.Z)((()=>n.elementTimings)),l=()=>a.get(),d=e=>{e&&a.save(),n.elementTimings=[]},c=()=>n;let u=0;const p=()=>u;let m;const w=()=>m,b=()=>{(0,o.Z)({type:"element",buffered:!0},(e=>{n.elementTimings=n.elementTimings.concat(e.getEntries().reduce(((e,{identifier:i,loadTime:s,renderTime:t})=>e.concat("string"==typeof i&&"number"==typeof s&&"number"==typeof t?[{identifier:i,loadTime:s,renderTime:t}]:[])),[]))})),(0,o.Z)({entryTypes:["longtask"]},(e=>{e.getEntries().map((e=>n.longTaskDurations.push(e.duration)))}),(()=>r())),(0,o.Z)({type:"first-input",buffered:!0},((e,i)=>{const s=e.getEntries()[0];s&&s.startTime&&s.processingStart&&(n.firstInputDelay={startTime:s.startTime,endTime:s.processingStart},m=n.firstInputDelay.startTime),i.disconnect()}),(()=>{n.firstInputDelay=null})),(0,o.Z)({type:"largest-contentful-paint",buffered:!0},(e=>{const i=e.getEntries(),s=i.length,t=i[s-1];t&&(u=s,n.largestContentfulPaint=t.renderTime||t.loadTime||null)})),(0,o.Z)({type:"layout-shift",buffered:!0},(e=>{e.getEntries().forEach((e=>{e.hadRecentInput||(n.cumulativeLayoutShiftScore+=e.value)}))}))}},358864:(e,i,s)=>{function t(){let e="";for(let i=0;i<15;i+=1){e+="0123456789"[Math.floor(10*Math.random())]}return Number(e)}s.d(i,{Z:()=>t})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50040-e3bd43f5e803fbe7.mjs.map