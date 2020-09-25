/*
 * SnowPlow - The world's most powerful web analytics platform
 *
 * @description JavaScript tracker for SnowPlow
 * @version     0.8.1
 * @author      Alex Dean, Simon Andersson, Anthon Pang
 * @copyright   Anthon Pang, SnowPlow Analytics Ltd
 * @license     Simplified BSD
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());(function(a){var b=(function(){var f="s",g=function(j){var k=-j.getTimezoneOffset();return(k!==null?k:0)},c=function(){return g(new Date(2010,0,1,0,0,0,0))},e=function(){return g(new Date(2010,5,1,0,0,0,0))},h=function(k){var l=((k.getMonth()>5?e():c())),j=g(k);return(l-j)!==0},i=function(){var j=c(),k=e(),l=c()-e();if(l<0){return j+",1"}else{if(l>0){return k+",1,"+f}}return j+",0"},d=function(){var j=i();return new b.TimeZone(b.olson.timezones[j])};return{determine_timezone:function(){if(typeof console!=="undefined"){console.log("jstz.determine_timezone() is deprecated and will be removed in an upcoming version. Please use jstz.determine() instead.")}return d()},determine:d,date_is_dst:h}}());b.TimeZone=function(c){var e=null,d=function(){return e},g=function(){var h=b.olson.ambiguity_list[e],k=h.length,j=0,l=h[0];for(;j<k;j+=1){l=h[j];if(b.date_is_dst(b.olson.dst_start_dates[l])){e=l;return}}},f=function(){return typeof(b.olson.ambiguity_list[e])!=="undefined"
};e=c;if(f()){g()}return{name:d}};b.olson={};b.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Asuncion","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,1":"Europe/Moscow","180,0":"Asia/Baghdad","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Yerevan","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"};
b.olson.dst_start_dates={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)};
b.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Gaza","Asia/Beirut","Europe/Minsk","Europe/Helsinki","Europe/Istanbul","Asia/Damascus","Asia/Jerusalem","Africa/Cairo"],"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};if(typeof exports!=="undefined"){exports.jstz=b}else{a.jstz=b}})(this);var _snaq=_snaq||[];var SnowPlow=SnowPlow||function(){var a=window;return{version:"js-0.8.1",expireDateTime:null,plugins:{},hasLoaded:false,registeredOnLoadHandlers:[],documentAlias:document,windowAlias:a,navigatorAlias:navigator,screenAlias:screen,encodeWrapper:a.encodeURIComponent,decodeWrapper:a.decodeURIComponent,urldecode:unescape,asyncTracker:null}
}();SnowPlow.isDefined=function(a){return typeof a!=="undefined"};SnowPlow.isFunction=function(a){return typeof a==="function"};SnowPlow.isObject=function(a){return typeof a==="object"};SnowPlow.isString=function(a){return typeof a==="string"||a instanceof String};SnowPlow.encodeUtf8=function(a){return SnowPlow.urldecode(SnowPlow.encodeWrapper(a))};SnowPlow.urlFixup=function(e,a,b){function d(i,h){var l=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),k=l.exec(i),j=new RegExp("(?:^|&)"+h+"=([^&]*)"),g=k?j.exec(k[1]):0;return g?SnowPlow.decodeWrapper(g[1]):""}function c(f){var h=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),g=h.exec(f);return g?g[1]:f}if(e==="translate.googleusercontent.com"){if(b===""){b=a}a=d(a,"u");e=c(a)}else{if(e==="cc.bingj.com"||e==="webcache.googleusercontent.com"||e.slice(0,5)==="74.6."){a=SnowPlow.documentAlias.links[0].href;e=c(a)}}return[e,a,b]};SnowPlow.getReferrer=function(){var a="";try{a=SnowPlow.windowAlias.top.document.referrer}catch(c){if(SnowPlow.windowAlias.parent){try{a=SnowPlow.windowAlias.parent.document.referrer
}catch(b){a=""}}}if(a===""){a=SnowPlow.documentAlias.referrer}return a};SnowPlow.domainFixup=function(b){var a=b.length;if(b.charAt(--a)==="."){b=b.slice(0,a)}if(b.slice(0,2)==="*."){b=b.slice(1)}return b};SnowPlow.addEventListener=function(d,c,b,a){if(d.addEventListener){d.addEventListener(c,b,a);return true}if(d.attachEvent){return d.attachEvent("on"+c,b)}d["on"+c]=b};SnowPlow.getCookie=function(c){var a=new RegExp("(^|;)[ ]*"+c+"=([^;]*)"),b=a.exec(SnowPlow.documentAlias.cookie);return b?SnowPlow.decodeWrapper(b[2]):0};SnowPlow.setCookie=function(g,d,c,f,b,e){var a;if(c){a=new Date();a.setTime(a.getTime()+c)}SnowPlow.documentAlias.cookie=g+"="+SnowPlow.encodeWrapper(d)+(c?";expires="+a.toGMTString():"")+";path="+(f||"/")+(b?";domain="+b:"")+(e?";secure":"")};SnowPlow.executePluginMethod=function(b,e){var a="",d,c;for(d in SnowPlow.plugins){if(Object.prototype.hasOwnProperty.call(SnowPlow.plugins,d)){c=SnowPlow.plugins[d][b];if(SnowPlow.isFunction(c)){a+=c(e)}}}return a};SnowPlow.sha1=function sha1(r){var c=function(j,i){return(j<<i)|(j>>>(32-i))
},s=function(y){var x="",w,j;for(w=7;w>=0;w--){j=(y>>>(w*4))&15;x+=j.toString(16)}return x},f,u,t,b=[],l=1732584193,h=4023233417,g=2562383102,e=271733878,d=3285377520,q,p,o,n,m,v,a,k=[];r=SnowPlow.encodeUtf8(r);a=r.length;for(u=0;u<a-3;u+=4){t=r.charCodeAt(u)<<24|r.charCodeAt(u+1)<<16|r.charCodeAt(u+2)<<8|r.charCodeAt(u+3);k.push(t)}switch(a&3){case 0:u=2147483648;break;case 1:u=r.charCodeAt(a-1)<<24|8388608;break;case 2:u=r.charCodeAt(a-2)<<24|r.charCodeAt(a-1)<<16|32768;break;case 3:u=r.charCodeAt(a-3)<<24|r.charCodeAt(a-2)<<16|r.charCodeAt(a-1)<<8|128;break}k.push(u);while((k.length&15)!==14){k.push(0)}k.push(a>>>29);k.push((a<<3)&4294967295);for(f=0;f<k.length;f+=16){for(u=0;u<16;u++){b[u]=k[f+u]}for(u=16;u<=79;u++){b[u]=c(b[u-3]^b[u-8]^b[u-14]^b[u-16],1)}q=l;p=h;o=g;n=e;m=d;for(u=0;u<=19;u++){v=(c(q,5)+((p&o)|(~p&n))+m+b[u]+1518500249)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=20;u<=39;u++){v=(c(q,5)+(p^o^n)+m+b[u]+1859775393)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=40;u<=59;u++){v=(c(q,5)+((p&o)|(p&n)|(o&n))+m+b[u]+2400959708)&4294967295;
m=n;n=o;o=c(p,30);p=q;q=v}for(u=60;u<=79;u++){v=(c(q,5)+(p^o^n)+m+b[u]+3395469782)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}l=(l+q)&4294967295;h=(h+p)&4294967295;g=(g+o)&4294967295;e=(e+n)&4294967295;d=(d+m)&4294967295}v=s(l)+s(h)+s(g)+s(e)+s(d);return v.toLowerCase()};SnowPlow.murmurhash3_32_gc=function murmurhash3_32_gc(k,f){var l,m,h,b,e,a,c,j,g,d;l=k.length&3;m=k.length-l;h=f;e=3432918353;c=461845907;d=0;while(d<m){g=((k.charCodeAt(d)&255))|((k.charCodeAt(++d)&255)<<8)|((k.charCodeAt(++d)&255)<<16)|((k.charCodeAt(++d)&255)<<24);++d;g=((((g&65535)*e)+((((g>>>16)*e)&65535)<<16)))&4294967295;g=(g<<15)|(g>>>17);g=((((g&65535)*c)+((((g>>>16)*c)&65535)<<16)))&4294967295;h^=g;h=(h<<13)|(h>>>19);b=((((h&65535)*5)+((((h>>>16)*5)&65535)<<16)))&4294967295;h=(((b&65535)+27492)+((((b>>>16)+58964)&65535)<<16))}g=0;switch(l){case 3:g^=(k.charCodeAt(d+2)&255)<<16;case 2:g^=(k.charCodeAt(d+1)&255)<<8;case 1:g^=(k.charCodeAt(d)&255);g=(((g&65535)*e)+((((g>>>16)*e)&65535)<<16))&4294967295;g=(g<<15)|(g>>>17);
g=(((g&65535)*c)+((((g>>>16)*c)&65535)<<16))&4294967295;h^=g}h^=k.length;h^=h>>>16;h=(((h&65535)*2246822507)+((((h>>>16)*2246822507)&65535)<<16))&4294967295;h^=h>>>13;h=((((h&65535)*3266489909)+((((h>>>16)*3266489909)&65535)<<16)))&4294967295;h^=h>>>16;return h>>>0};SnowPlow.Tracker=function Tracker(I){var b=SnowPlow.urlFixup(SnowPlow.documentAlias.domain,SnowPlow.windowAlias.location.href,SnowPlow.getReferrer()),ai=SnowPlow.domainFixup(b[0]),aw=b[1],V=b[2],T="GET",p="web",d=M(I),an="",F,x=SnowPlow.documentAlias.title,z="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",R=[ai],f=[],L=[],s=[],Q=500,g,u,h,au="_sp_",l,av,aq,D,q=63072000000,r=1800000,H=15768000000,n=SnowPlow.documentAlias.location.protocol==="https",o=SnowPlow.navigatorAlias.userLanguage||SnowPlow.navigatorAlias.language,ao=at(),P=i(),t=W(),aa=false,X=false,U,N,m,A=SnowPlow.sha1,Z,E,e=af();
function M(aA){if(typeof aA==="undefined"){return null}else{if("cf" in aA){return B(aA.cf)}else{if("url" in aA){return ag(aA.url)}}}}function af(){return{transaction:{},items:[]}}function ar(aA){var aB;if(h){aB=new RegExp("#.*");return aA.replace(aB,"")}return aA}function ay(aA){var aC=new RegExp("^([a-z]+):"),aB=aC.exec(aA);return aB?aB[1]:null}function ah(aC,aA){var aD=ay(aA),aB;if(aD){return aA}if(aA.slice(0,1)==="/"){return ay(aC)+"://"+getHostName(aC)+aA}aC=ar(aC);if((aB=aC.indexOf("?"))>=0){aC=aC.slice(0,aB)}if((aB=aC.lastIndexOf("/"))!==aC.length-1){aC=aC.slice(0,aB+1)}return aC+aA}function S(aD){var aB,aA,aC;for(aB=0;aB<R.length;aB++){aA=domainFixup(R[aB].toLowerCase());if(aD===aA){return true}if(aA.slice(0,1)==="."){if(aD===aA.slice(1)){return true}aC=aD.length-aA.length;if((aC>0)&&(aD.slice(aC)===aA)){return true}}}return false}function az(aA){var aB=new Image(1,1);if(d===null){throw"No SnowPlow collector configured, cannot track"}aB.onload=function(){};aB.src=d+"?"+aA}function C(aC,aB){var aA=new Date();
if(!aq){az(aC);SnowPlow.expireDateTime=aA.getTime()+aB}}function ae(aA){return au+aA+"."+an+"."+Z}function c(){var aA=ae("testcookie");if(!SnowPlow.isDefined(SnowPlow.navigatorAlias.cookieEnabled)){SnowPlow.setCookie(aA,"1");return SnowPlow.getCookie(aA)==="1"?"1":"0"}return SnowPlow.navigatorAlias.cookieEnabled?"1":"0"}function O(){Z=A((l||ai)+(av||"/")).slice(0,4)}function am(){var aA=new Date();U=aA.getTime()}function k(aE,aB,aA,aD,aC){SnowPlow.setCookie(ae("id"),aE+"."+aB+"."+aA+"."+aD+"."+aC,q,av,l,n)}function a(){var aB=new Date(),aA=Math.round(aB.getTime()/1000),aD=SnowPlow.getCookie(ae("id")),aC;if(aD){aC=aD.split(".");aC.unshift("0")}else{if(!E){E=A((SnowPlow.navigatorAlias.userAgent||"")+(SnowPlow.navigatorAlias.platform||"")+JSON2.stringify(ao)+aA).slice(0,16)}aC=["1",E,aA,0,aA,""]}return aC}function y(aB,aS){var aQ,aA=new Date(),aG=Math.round(aA.getTime()/1000),aU,aR,aD,aM,aO,aF,aE,aP,aC=1024,aV,aI,aL=ae("id"),aH=ae("ses"),aN=a(),aK=SnowPlow.getCookie(aH),aT=F||aw,aJ;if(aq){SnowPlow.setCookie(aL,"",-1,av,l);
SnowPlow.setCookie(aH,"",-1,av,l);return""}aU=aN[0];aR=aN[1];aM=aN[2];aD=aN[3];aO=aN[4];aF=aN[5];if(!aK){aD++;aF=aO}aB+="&p="+p+"&tid="+String(Math.random()).slice(2,8)+"&uid="+aR+"&fp="+SnowPlow.encodeWrapper(t)+"&vid="+aD+"&tv="+SnowPlow.encodeWrapper(SnowPlow.version)+(an.length?"&aid="+SnowPlow.encodeWrapper(an):"")+"&lang="+o+(V.length?"&refr="+SnowPlow.encodeWrapper(ar(V)):"");for(aQ in ao){if(Object.prototype.hasOwnProperty.call(ao,aQ)){aJ=(aQ==="res"||aQ==="cd"||aQ==="cookie")?"&":"&f_";aB+=aJ+aQ+"="+ao[aQ]}}aB+="&tz="+SnowPlow.encodeWrapper(P);aB+="&url="+SnowPlow.encodeWrapper(ar(window.location));k(aR,aM,aD,aG,aF);SnowPlow.setCookie(aH,"*",r,av,l,n);aB+=SnowPlow.executePluginMethod(aS);return aB}function B(aA){return ag(aA+".cloudfront.net")}function ag(aA){return("https:"==document.location.protocol?"https":"http")+"://"+aA+"/i"}function aj(aA){var aB=aA||"";return{add:function(aC,aD){if(aD!==undefined&&aD!==""){aB+="&"+aC+"="+SnowPlow.encodeWrapper(aD)}},build:function(){return aB
}}}function j(aC,aF,aA,aE,aD){var aB="ev_ca="+SnowPlow.encodeWrapper(aC)+"&ev_ac="+SnowPlow.encodeWrapper(aF);if(String(aA).length){aB+="&ev_la="+SnowPlow.encodeWrapper(aA)}if(String(aE).length){aB+="&ev_pr="+SnowPlow.encodeWrapper(aE)}if(String(aD).length){aB+="&ev_va="+SnowPlow.encodeWrapper(aD)}aB=y(aB,"event");C(aB,Q)}function Y(aE,aA,aC,aB){var aD="ad_ba="+SnowPlow.encodeWrapper(aE);if(String(aA).length){aD+="&ad_ca="+SnowPlow.encodeWrapper(aA)}if(String(aC).length){aD+="&ad_ad="+SnowPlow.encodeWrapper(aC)}if(String(aB).length){aD+="&ad_uid="+SnowPlow.encodeWrapper(aB)}aD=y(aD,configCustomData,"adimp");C(aD,Q)}function ac(aE,aD,aK,aF,aA,aI,aB,aC){var aJ=aj();aJ.add("tr_id",aE);aJ.add("tr_af",aD);aJ.add("tr_tt",aK);aJ.add("tr_tx",aF);aJ.add("tr_sh",aA);aJ.add("tr_ci",aI);aJ.add("tr_st",aB);aJ.add("tr_co",aC);var aG=aJ.build();var aH=y(aG,"ecommerceTransaction");C(aH,Q)}function G(aC,aH,aA,aB,aG,aE){var aI=aj();aI.add("ti_id",aC);aI.add("ti_sk",aH);aI.add("ti_na",aA);aI.add("ti_ca",aB);
aI.add("ti_pr",aG);aI.add("ti_qu",aE);var aD=aI.build();var aF=y(aD,"ecommerceTransactionItem");C(aF,Q)}function K(aD){function aE(aG){if(!SnowPlow.isString(aG)){aG=aG.text||"";var aF=SnowPlow.documentAlias.getElementsByTagName("title");if(aF&&SnowPlow.isDefined(aF[0])){aG=aF[0].text}}return aG}var aA=new Date(),aC=y("page="+SnowPlow.encodeWrapper(aE(aD||x)),"log");C(aC,Q);if(g&&u&&!X){X=true;addEventListener(SnowPlow.documentAlias,"click",am);addEventListener(SnowPlow.documentAlias,"mouseup",am);addEventListener(SnowPlow.documentAlias,"mousedown",am);addEventListener(SnowPlow.documentAlias,"mousemove",am);addEventListener(SnowPlow.documentAlias,"mousewheel",am);addEventListener(SnowPlow.windowAlias,"DOMMouseScroll",am);addEventListener(SnowPlow.windowAlias,"scroll",am);addEventListener(SnowPlow.documentAlias,"keypress",am);addEventListener(SnowPlow.documentAlias,"keydown",am);addEventListener(SnowPlow.documentAlias,"keyup",am);addEventListener(SnowPlow.windowAlias,"resize",am);addEventListener(SnowPlow.windowAlias,"focus",am);
addEventListener(SnowPlow.windowAlias,"blur",am);U=aA.getTime();setTimeout(function aB(){var aF=new Date(),aG;if((U+u)>aF.getTime()){if(g<aF.getTime()){aG=y("ping=1","ping");C(aG,Q)}setTimeout(aB,u)}},u)}}function al(aB,aA){var aC=y(aA+"="+SnowPlow.encodeWrapper(ar(aB)),"link");C(aC,Q)}function ap(aB,aA){if(aB!==""){return aB+aA.charAt(0).toUpperCase()+aA.slice(1)}return aA}function w(aF){var aE,aA,aD=["","webkit","ms","moz"],aC;if(!D){for(aA=0;aA<aD.length;aA++){aC=aD[aA];if(Object.prototype.hasOwnProperty.call(SnowPlow.documentAlias,ap(aC,"hidden"))){if(SnowPlow.documentAlias[ap(aC,"visibilityState")]==="prerender"){aE=true}break}}}if(aE){addEventListener(SnowPlow.documentAlias,aC+"visibilitychange",function aB(){SnowPlow.documentAlias.removeEventListener(aC+"visibilitychange",aB,false);aF()});return}aF()}function v(aC,aB){var aD,aA="(^| )(piwik[_-]"+aB;if(aC){for(aD=0;aD<aC.length;aD++){aA+="|"+aC[aD]}}aA+=")( |$)";return new RegExp(aA)}function ak(aD,aA,aE){if(!aE){return"link"}var aC=v(L,"download"),aB=v(s,"link"),aF=new RegExp("\\.("+z+")([?&#]|$)","i");
return aB.test(aD)?"link":(aC.test(aD)||aF.test(aA)?"download":0)}function ad(aF){var aD,aB,aA;while((aD=aF.parentNode)!==null&&SnowPlow.isDefined(aD)&&((aB=aF.tagName.toUpperCase())!=="A"&&aB!=="AREA")){aF=aD}if(SnowPlow.isDefined(aF.href)){var aG=aF.hostname||getHostName(aF.href),aH=aG.toLowerCase(),aC=aF.href.replace(aG,aH),aE=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!aE.test(aC)){aA=ak(aF.className,aC,S(aH));if(aA){aC=urldecode(aC);al(aC,aA)}}}}function ax(aA){var aB,aC;aA=aA||SnowPlow.windowAlias.event;aB=aA.which||aA.button;aC=aA.target||aA.srcElement;if(aA.type==="click"){if(aC){ad(aC)}}else{if(aA.type==="mousedown"){if((aB===1||aB===2)&&aC){N=aB;m=aC}else{N=m=null}}else{if(aA.type==="mouseup"){if(aB===N&&aC===m){ad(aC)}N=m=null}}}}function ab(aB,aA){if(aA){addEventListener(aB,"mouseup",ax,false);addEventListener(aB,"mousedown",ax,false)}else{addEventListener(aB,"click",ax,false)}}function J(aB){if(!aa){aa=true;var aC,aA=v(f,"ignore"),aD=SnowPlow.documentAlias.links;
if(aD){for(aC=0;aC<aD.length;aC++){if(!aA.test(aD[aC].className)){ab(aD[aC],aB)}}}}}function W(){var aD=[navigator.userAgent,[screen.height,screen.width,screen.colorDepth].join("x"),(new Date()).getTimezoneOffset(),!!window.sessionStorage,!!window.localStorage,];var aA=[];if(navigator.plugins){for(var aE=0;aE<navigator.plugins.length;aE++){var aB=[];for(var aC=0;aC<navigator.plugins[aE].length;aC++){aB.push([navigator.plugins[aE][aC].type,navigator.plugins[aE][aC].suffixes])}aA.push([navigator.plugins[aE].name+"::"+navigator.plugins[aE].description,aB.join("~")])}}return SnowPlow.murmurhash3_32_gc(aD.join("###")+"###"+aA.sort().join(";"),123412414)}function i(){var aA=jstz.determine();return(typeof(aA)==="undefined")?"":aA.name()}function at(){var aA,aC,aD={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},aB={};
if(SnowPlow.navigatorAlias.mimeTypes&&SnowPlow.navigatorAlias.mimeTypes.length){for(aA in aD){if(Object.prototype.hasOwnProperty.call(aD,aA)){aC=SnowPlow.navigatorAlias.mimeTypes[aD[aA]];aB[aA]=(aC&&aC.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&SnowPlow.isDefined(SnowPlow.navigatorAlias.javaEnabled)&&SnowPlow.navigatorAlias.javaEnabled()){aB.java="1"}if(SnowPlow.isFunction(SnowPlow.windowAlias.GearsFactory)){aB.gears="1"}aB.res=SnowPlow.screenAlias.width+"x"+SnowPlow.screenAlias.height;aB.cd=screen.colorDepth;aB.cookie=c();return aB}O();return{getVisitorId:function(){return(a())[1]},getVisitorInfo:function(){return a()},setSiteId:function(aA){an=aA},setLinkTrackingTimer:function(aA){Q=aA},setDownloadExtensions:function(aA){z=aA},addDownloadExtensions:function(aA){z+="|"+aA},setDomains:function(aA){R=isString(aA)?[aA]:aA;R.push(ai)},setIgnoreClasses:function(aA){f=isString(aA)?[aA]:aA},setReferrerUrl:function(aA){V=aA},setCustomUrl:function(aA){F=ah(aw,aA)},setDocumentTitle:function(aA){x=aA
},setDownloadClasses:function(aA){L=isString(aA)?[aA]:aA},setLinkClasses:function(aA){s=isString(aA)?[aA]:aA},discardHashTag:function(aA){h=aA},setCookieNamePrefix:function(aA){au=aA},setCookieDomain:function(aA){l=domainFixup(aA);O()},setCookiePath:function(aA){av=aA;O()},setVisitorCookieTimeout:function(aA){q=aA*1000},setSessionCookieTimeout:function(aA){r=aA*1000},setReferralCookieTimeout:function(aA){H=aA*1000},setDoNotTrack:function(aB){var aA=SnowPlow.navigatorAlias.doNotTrack||SnowPlow.navigatorAlias.msDoNotTrack;aq=aB&&(aA==="yes"||aA==="1")},addListener:function(aB,aA){ab(aB,aA)},enableLinkTracking:function(aA){if(SnowPlow.hasLoaded){J(aA)}else{SnowPlow.registeredOnLoadHandlers.push(function(){J(aA)})}},setHeartBeatTimer:function(aC,aB){var aA=new Date();g=aA.getTime()+aC*1000;u=aB*1000},killFrame:function(){if(SnowPlow.windowAlias.location!==SnowPlow.windowAlias.top.location){SnowPlow.windowAlias.top.location=SnowPlow.windowAlias.location}},redirectFile:function(aA){if(SnowPlow.windowAlias.location.protocol==="file:"){SnowPlow.windowAlias.location=aA
}},setCountPreRendered:function(aA){D=aA},trackLink:function(aB,aA){w(function(){al(aB,aA)})},trackPageView:function(aA){w(function(){K(aA)})},setAccount:function(aA){if(typeof console!=="undefined"){console.log("SnowPlow: setAccount() is deprecated and will be removed in an upcoming version. Please use setCollectorCf() instead.")}d=B(aA)},setCollectorCf:function(aA){d=B(aA)},setCollectorUrl:function(aA){d=ag(aA)},trackEvent:function(aB,aE,aA,aD,aC){j(aB,aE,aA,aD,aC)},trackImpression:function(aD,aA,aC,aB){Y(aD,aA,aC,aB)},addTrans:function(aA,aD,aE,aC,aB,aH,aF,aG){e.transaction={orderId:aA,affiliation:aD,total:aE,tax:aC,shipping:aB,city:aH,state:aF,country:aG}},addItem:function(aA,aF,aB,aD,aC,aE){e.items.push({orderId:aA,sku:aF,name:aB,category:aD,price:aC,quantity:aE})},trackTrans:function(){ac(e.transaction.orderId,e.transaction.affiliation,e.transaction.total,e.transaction.tax,e.transaction.shipping,e.transaction.city,e.transaction.state,e.transaction.country);e.items.forEach(function(aA){G(aA.orderId,aA.sku,aA.name,aA.category,aA.price,aA.quantity)
});e=af()}}};SnowPlow.build=function(){function b(){var g,j,h;for(g=0;g<arguments.length;g+=1){h=arguments[g];j=h.shift();if(SnowPlow.isString(j)){SnowPlow.asyncTracker[j].apply(SnowPlow.asyncTracker,h)}else{j.apply(SnowPlow.asyncTracker,h)}}}function f(){var g;SnowPlow.executePluginMethod("unload");if(SnowPlow.expireDateTime){do{g=new Date()}while(g.getTimeAlias()<SnowPlow.expireDateTime)}}function d(){var g;if(!SnowPlow.hasLoaded){SnowPlow.hasLoaded=true;SnowPlow.executePluginMethod("load");for(g=0;g<SnowPlow.registeredOnLoadHandlers.length;g++){SnowPlow.registeredOnLoadHandlers[g]()}}return true}function e(){var h;if(SnowPlow.documentAlias.addEventListener){SnowPlow.addEventListener(SnowPlow.documentAlias,"DOMContentLoaded",function g(){SnowPlow.documentAlias.removeEventListener("DOMContentLoaded",g,false);d()})}else{if(SnowPlow.documentAlias.attachEvent){SnowPlow.documentAlias.attachEvent("onreadystatechange",function g(){if(SnowPlow.documentAlias.readyState==="complete"){SnowPlow.documentAlias.detachEvent("onreadystatechange",g);
d()}});if(SnowPlow.documentAlias.documentElement.doScroll&&SnowPlow.windowAlias===SnowPlow.windowAlias.top){(function g(){if(!SnowPlow.hasLoaded){try{SnowPlow.documentAlias.documentElement.doScroll("left")}catch(i){setTimeout(g,0);return}d()}}())}}}if((new RegExp("WebKit")).test(SnowPlow.navigatorAlias.userAgent)){h=setInterval(function(){if(SnowPlow.hasLoaded||/loaded|complete/.test(SnowPlow.documentAlias.readyState)){clearInterval(h);d()}},10)}SnowPlow.addEventListener(SnowPlow.windowAlias,"load",d,false)}function a(){return{push:b}}SnowPlow.addEventListener(SnowPlow.windowAlias,"beforeunload",f,false);e();Date.prototype.getTimeAlias=Date.prototype.getTime;SnowPlow.asyncTracker=new SnowPlow.Tracker();for(var c=0;c<_snaq.length;c++){b(_snaq[c])}_snaq=new a();return{addPlugin:function(g,h){SnowPlow.plugins[g]=h},getTracker:function(g){if(typeof console!=="undefined"){console.log("SnowPlow: getTracker() is deprecated and will be removed in an upcoming version. Please use getTrackerCf() instead.")
}return new SnowPlow.Tracker({cf:g})},getTrackerCf:function(g){return new SnowPlow.Tracker({cf:g})},getTrackerUrl:function(g){return new SnowPlow.Tracker({url:g})},getAsyncTracker:function(){return SnowPlow.asyncTracker}}};(function(){var a=SnowPlow.build();for(prop in a){if(a.hasOwnProperty(prop)){if(SnowPlow[prop]===undefined){SnowPlow[prop]=a[prop]}}}}());