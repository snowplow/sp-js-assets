/*! * Snowplow - The world's most powerful web analytics platform
 *
 * @description JavaScript tracker for Snowplow
 * @version     1.0.0
 * @author      Alex Dean,Simon Andersson,Anthon Pang,Fred Blundun
 * @copyright   Anthon Pang, Snowplow Analytics Ltd
 * @license     Simplified BSD
 */
(function e(b,g,d){function c(k,i){if(!g[k]){if(!b[k]){var h=typeof require=="function"&&require;if(!i&&h){return h(k,!0)}if(a){return a(k,!0)}throw new Error("Cannot find module '"+k+"'")}var j=g[k]={exports:{}};b[k][0].call(j.exports,function(l){var m=b[k][1][l];return c(m?m:l)},j,j.exports,e,b,g,d)}return g[k].exports}var a=typeof require=="function"&&require;for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){(function(){var f=typeof a!="undefined"?a:this;var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function d(h){this.message=h}d.prototype=new Error;d.prototype.name="InvalidCharacterError";f.btoa||(f.btoa=function(k){for(var m,i,h=0,l=g,j="";k.charAt(h|0)||(l="=",h%1);
j+=l.charAt(63&m>>8-h%1*8)){i=k.charCodeAt(h+=3/4);if(i>255){throw new d("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")}m=m<<8|i}return j});f.atob||(f.atob=function(k){k=k.replace(/=+$/,"");if(k.length%4==1){throw new d("'atob' failed: The string to be decoded is not correctly encoded.")}for(var m=0,l,i,h=0,j="";i=k.charAt(h++);~i&&(l=m%4?l*64+i:i,m++%4)?j+=String.fromCharCode(255&l>>(-2*m&6)):0){i=g.indexOf(i)}return j})}())},{}],2:[function(require,module,exports){var JSON;if(!JSON){JSON={}}(function(){var global=Function("return this")(),JSON=global.JSON;if(!JSON){JSON={}}function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"
}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}global.JSON=JSON;module.exports=JSON}())},{}],3:[function(b,c,a){(function(d){var f=(function(){var h="s",i=function(p){var q=-p.getTimezoneOffset();return(q!==null?q:0)},l=function(q,r,p){var s=new Date();
if(q!==undefined){s.setFullYear(q)}s.setMonth(r);s.setDate(p);return s},j=function(p){return i(l(p,0,2))},m=function(p){return i(l(p,5,2))},g=function(q){var r=q.getMonth()>7,u=r?m(q.getFullYear()):j(q.getFullYear()),p=i(q),t=u<0,s=u-p;if(!t&&!r){return s<0}return s!==0},k=function(){var p=j(),q=m(),r=p-q;if(r<0){return p+",1"}else{if(r>0){return q+",1,"+h}}return p+",0"},n=function(){var p=k();return new f.TimeZone(f.olson.timezones[p])},o=function(p){var q=new Date(2010,6,15,1,0,0,0),r={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"America/Asuncion":new Date(2012,9,7,3,0,0,0),"America/Santiago":new Date(2012,9,3,3,0,0,0),"America/Campo_Grande":new Date(2012,9,21,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2012,2,10,2,0,0,0),"America/New_York":new Date(2012,2,10,7,0,0,0),"Europe/Helsinki":new Date(2013,2,31,5,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0),"Europe/Moscow":q,"Asia/Amman":new Date(2013,2,29,1,0,0,0),"Asia/Beirut":new Date(2013,2,31,2,0,0,0),"Asia/Damascus":new Date(2013,3,6,2,0,0,0),"Asia/Jerusalem":new Date(2013,2,29,5,0,0,0),"Asia/Yekaterinburg":q,"Asia/Omsk":q,"Asia/Krasnoyarsk":q,"Asia/Irkutsk":q,"Asia/Yakutsk":q,"Asia/Vladivostok":q,"Asia/Baku":new Date(2013,2,31,4,0,0),"Asia/Yerevan":new Date(2013,2,31,3,0,0),"Asia/Kamchatka":q,"Asia/Gaza":new Date(2010,2,27,4,0,0),"Africa/Cairo":new Date(2010,4,1,3,0,0),"Europe/Minsk":q,"Pacific/Apia":new Date(2010,10,1,1,0,0,0),"Pacific/Fiji":new Date(2010,11,1,0,0,0),"Australia/Perth":new Date(2008,10,1,1,0,0,0)};
return r[p]};return{determine:n,date_is_dst:g,dst_start_for:o}}());f.TimeZone=function(g){var h={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Amman","Asia/Jerusalem","Asia/Beirut","Europe/Helsinki","Asia/Damascus"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka","Pacific/Fiji"],"Pacific/Tongatapu":["Pacific/Apia"],"Asia/Baghdad":["Europe/Minsk"],"Asia/Baku":["Asia/Yerevan","Asia/Baku"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"]},i=g,k=function(){var l=h[i],n=l.length,m=0,o=l[0];
for(;m<n;m+=1){o=l[m];if(f.date_is_dst(f.dst_start_for(o))){i=o;return}}},j=function(){return typeof(h[i])!=="undefined"};if(j()){k()}return{name:function(){return i}}};f.olson={};f.olson.timezones={"-720,0":"Pacific/Majuro","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"America/Noronha","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"};
if(typeof a!=="undefined"){a.jstz=f}else{d.jstz=f}})(this)},{}],4:[function(b,c,a){(function(){var i=this;function g(q,m){var j=q.length,p=m^j,o=0,n;while(j>=4){n=((q.charCodeAt(o)&255))|((q.charCodeAt(++o)&255)<<8)|((q.charCodeAt(++o)&255)<<16)|((q.charCodeAt(++o)&255)<<24);n=(((n&65535)*1540483477)+((((n>>>16)*1540483477)&65535)<<16));n^=n>>>24;n=(((n&65535)*1540483477)+((((n>>>16)*1540483477)&65535)<<16));p=(((p&65535)*1540483477)+((((p>>>16)*1540483477)&65535)<<16))^n;j-=4;++o}switch(j){case 3:p^=(q.charCodeAt(o+2)&255)<<16;case 2:p^=(q.charCodeAt(o+1)&255)<<8;case 1:p^=(q.charCodeAt(o)&255);p=(((p&65535)*1540483477)+((((p>>>16)*1540483477)&65535)<<16))}p^=p>>>13;p=(((p&65535)*1540483477)+((((p>>>16)*1540483477)&65535)<<16));p^=p>>>15;return p>>>0}function f(s,o){var t,u,q,k,n,j,l,r,p,m;t=s.length&3;u=s.length-t;q=o;n=3432918353;l=461845907;m=0;while(m<u){p=((s.charCodeAt(m)&255))|((s.charCodeAt(++m)&255)<<8)|((s.charCodeAt(++m)&255)<<16)|((s.charCodeAt(++m)&255)<<24);++m;p=((((p&65535)*n)+((((p>>>16)*n)&65535)<<16)))&4294967295;
p=(p<<15)|(p>>>17);p=((((p&65535)*l)+((((p>>>16)*l)&65535)<<16)))&4294967295;q^=p;q=(q<<13)|(q>>>19);k=((((q&65535)*5)+((((q>>>16)*5)&65535)<<16)))&4294967295;q=(((k&65535)+27492)+((((k>>>16)+58964)&65535)<<16))}p=0;switch(t){case 3:p^=(s.charCodeAt(m+2)&255)<<16;case 2:p^=(s.charCodeAt(m+1)&255)<<8;case 1:p^=(s.charCodeAt(m)&255);p=(((p&65535)*n)+((((p>>>16)*n)&65535)<<16))&4294967295;p=(p<<15)|(p>>>17);p=(((p&65535)*l)+((((p>>>16)*l)&65535)<<16))&4294967295;q^=p}q^=s.length;q^=q>>>16;q=(((q&65535)*2246822507)+((((q>>>16)*2246822507)&65535)<<16))&4294967295;q^=q>>>13;q=((((q&65535)*3266489909)+((((q>>>16)*3266489909)&65535)<<16)))&4294967295;q^=q>>>16;return q>>>0}var d=f;d.v2=g;d.v3=f;if(typeof(c)!="undefined"){c.exports=d}else{var h=i.murmur;d.noConflict=function(){i.murmur=h;return d};i.murmur=d}}())},{}],5:[function(c,d,b){var a={utf8:{stringToBytes:function(f){return a.bin.stringToBytes(unescape(encodeURIComponent(f)))},bytesToString:function(f){return decodeURIComponent(escape(a.bin.bytesToString(f)))
}},bin:{stringToBytes:function(h){for(var f=[],g=0;g<h.length;g++){f.push(h.charCodeAt(g)&255)}return f},bytesToString:function(f){for(var h=[],g=0;g<f.length;g++){h.push(String.fromCharCode(f[g]))}return h.join("")}}};d.exports=a},{}],6:[function(b,c,a){(function(){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f={rotl:function(h,g){return(h<<g)|(h>>>(32-g))},rotr:function(h,g){return(h<<(32-g))|(h>>>g)},endian:function(h){if(h.constructor==Number){return f.rotl(h,8)&16711935|f.rotl(h,24)&4278255360}for(var g=0;g<h.length;g++){h[g]=f.endian(h[g])}return h},randomBytes:function(h){for(var g=[];h>0;h--){g.push(Math.floor(Math.random()*256))}return g},bytesToWords:function(h){for(var k=[],j=0,g=0;j<h.length;j++,g+=8){k[g>>>5]|=h[j]<<(24-g%32)}return k},wordsToBytes:function(i){for(var h=[],g=0;g<i.length*32;g+=8){h.push((i[g>>>5]>>>(24-g%32))&255)}return h},bytesToHex:function(g){for(var j=[],h=0;h<g.length;h++){j.push((g[h]>>>4).toString(16));j.push((g[h]&15).toString(16))
}return j.join("")},hexToBytes:function(h){for(var g=[],i=0;i<h.length;i+=2){g.push(parseInt(h.substr(i,2),16))}return g},bytesToBase64:function(h){for(var g=[],l=0;l<h.length;l+=3){var m=(h[l]<<16)|(h[l+1]<<8)|h[l+2];for(var k=0;k<4;k++){if(l*8+k*6<=h.length*8){g.push(d.charAt((m>>>6*(3-k))&63))}else{g.push("=")}}}return g.join("")},base64ToBytes:function(h){h=h.replace(/[^A-Z0-9+\/]/ig,"");for(var g=[],j=0,k=0;j<h.length;k=++j%4){if(k==0){continue}g.push(((d.indexOf(h.charAt(j-1))&(Math.pow(2,-2*k+8)-1))<<(k*2))|(d.indexOf(h.charAt(j))>>>(6-k*2)))}return g}};c.exports=f})()},{}],7:[function(b,c,a){(function(){var h=b("crypt"),d=b("charenc").utf8,f=b("charenc").bin,i=function(q){if(q.constructor==String){q=d.stringToBytes(q)}var y=h.bytesToWords(q),z=q.length*8,r=[],u=1732584193,s=-271733879,p=-1732584194,o=271733878,k=-1009589776;y[z>>5]|=128<<(24-z%32);y[((z+64>>>9)<<4)+15]=z;for(var B=0;B<y.length;B+=16){var G=u,F=s,E=p,D=o,C=k;for(var A=0;A<80;A++){if(A<16){r[A]=y[B+A]}else{var x=r[A-3]^r[A-8]^r[A-14]^r[A-16];
r[A]=(x<<1)|(x>>>31)}var v=((u<<5)|(u>>>27))+k+(r[A]>>>0)+(A<20?(s&p|~s&o)+1518500249:A<40?(s^p^o)+1859775393:A<60?(s&p|s&o|p&o)-1894007588:(s^p^o)-899497514);k=o;o=p;p=(s<<30)|(s>>>2);s=u;u=v}u+=G;s+=F;p+=E;o+=D;k+=C}return[u,s,p,o,k]},g=function(l,j){var k=h.wordsToBytes(i(l));return j&&j.asBytes?k:j&&j.asString?f.bytesToString(k):h.bytesToHex(k)};g._blocksize=16;g._digestsize=20;c.exports=g})()},{charenc:5,crypt:6}],8:[function(b,c,a){window._snaq=window._snaq||[];var d=b("./snowplow");window.Snowplow=window.Snowplow||new d.Snowplow()},{"./snowplow":15}],9:[function(b,c,a){(function(){var d=typeof a!=="undefined"?a:this;d.getCookie=function(h){var f=new RegExp("(^|;)[ ]*"+h+"=([^;]*)"),g=f.exec(document.cookie);return g?decodeURIComponent(g[2]):0};d.setCookie=function(l,i,h,k,g,j){var f;if(h){f=new Date();f.setTime(f.getTime()+h)}document.cookie=l+"="+encodeURIComponent(i)+(h?";expires="+f.toGMTString():"")+";path="+(k||"/")+(g?";domain="+g:"")+(j?";secure":"")}}())},{}],10:[function(b,c,a){(function(){var g=b("./lodash"),f=b("./helpers"),d=b("./cookie");
murmurhash3_32_gc=b("murmurhash").v3,tz=b("jstimezonedetect").jstz.determine(),object=typeof a!=="undefined"?a:this,windowAlias=window,navigatorAlias=navigator,screenAlias=screen,documentAlias=document;object.hasSessionStorage=function(){try{return !!windowAlias.sessionStorage}catch(h){return true}};object.hasLocalStorage=function(){try{return !!windowAlias.localStorage}catch(h){return true}};object.hasCookies=function(h){var i=h||"testcookie";if(g.isUndefined(navigatorAlias.cookieEnabled)){d.setCookie(i,"1");return d.getCookie(i)==="1"?"1":"0"}return navigatorAlias.cookieEnabled?"1":"0"};object.detectSignature=function(o){var m=[navigatorAlias.userAgent,[screenAlias.height,screenAlias.width,screenAlias.colorDepth].join("x"),(new Date()).getTimezoneOffset(),object.hasSessionStorage(),object.hasLocalStorage()];var h=[];if(navigatorAlias.plugins){for(var n=0;n<navigatorAlias.plugins.length;n++){var k=[];for(var l=0;l<navigatorAlias.plugins[n].length;l++){k.push([navigatorAlias.plugins[n][l].type,navigatorAlias.plugins[n][l].suffixes])
}h.push([navigatorAlias.plugins[n].name+"::"+navigatorAlias.plugins[n].description,k.join("~")])}}return murmurhash3_32_gc(m.join("###")+"###"+h.sort().join(";"),o)};object.detectTimezone=function(){return(typeof(tz)==="undefined")?"":tz.name()};object.detectViewport=function(){var i=windowAlias,h="inner";if(!("innerWidth" in windowAlias)){h="client";i=documentAlias.documentElement||documentAlias.body}return i[h+"Width"]+"x"+i[h+"Height"]};object.detectDocumentSize=function(){var k=documentAlias.documentElement;var i=Math.max(k.clientWidth,k.offsetWidth,k.scrollWidth);var j=Math.max(k.clientHeight,k.offsetHeight,k.scrollHeight);return i+"x"+j};object.detectBrowserFeatures=function(j){var h,l,m={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},k={};if(navigatorAlias.mimeTypes&&navigatorAlias.mimeTypes.length){for(h in m){if(Object.prototype.hasOwnProperty.call(m,h)){l=navigatorAlias.mimeTypes[m[h]];
k[h]=(l&&l.enabledPlugin)?"1":"0"}}}if(typeof navigatorAlias.javaEnabled!=="unknown"&&!g.isUndefined(navigatorAlias.javaEnabled)&&navigatorAlias.javaEnabled()){k.java="1"}if(g.isFunction(windowAlias.GearsFactory)){k.gears="1"}k.res=screenAlias.width+"x"+screenAlias.height;k.cd=screenAlias.colorDepth;k.cookie=object.hasCookies(j);return k}}())},{"./cookie":9,"./helpers":11,"./lodash":12,jstimezonedetect:3,murmurhash:4}],11:[function(b,c,a){(function(){var f=b("./lodash"),d=typeof a!=="undefined"?a:this;d.encodeUtf8=function(g){return unescape(decodeURIComponent(g))};d.fixupTitle=function(h){if(!f.isString(h)){h=h.text||"";var g=document.getElementsByTagName("title");if(g&&!f.isUndefined(g[0])){h=g[0].text}}return h};d.getHostName=function(g){var i=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),h=i.exec(g);return h?h[1]:g};d.fixupUrl=function(j,g,h){function i(m,l){var p=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),o=p.exec(m),n=new RegExp("(?:^|&)"+l+"=([^&]*)"),k=o?n.exec(o[1]):0;
return k?decodeURIComponent(k[1]):""}if(j==="translate.googleusercontent.com"){if(h===""){h=g}g=i(g,"u");j=d.getHostName(g)}else{if(j==="cc.bingj.com"||j==="webcache.googleusercontent.com"||j.slice(0,5)==="74.6."){g=document.links[0].href;j=d.getHostName(g)}}return[j,g,h]};d.fixupDomain=function(h){var g=h.length;if(h.charAt(--g)==="."){h=h.slice(0,g)}if(h.slice(0,2)==="*."){h=h.slice(1)}return h};d.getReferrer=function(){var h="";var g=d.fromQuerystring("referrer",window.location.href)||d.fromQuerystring("referer",window.location.href);if(g){return g}try{h=window.top.document.referrer}catch(j){if(window.parent){try{h=window.parent.document.referrer}catch(i){h=""}}}if(h===""){h=document.referrer}return h};d.addEventListener=function(j,i,h,g){if(j.addEventListener){j.addEventListener(i,h,g);return true}if(j.attachEvent){return j.attachEvent("on"+i,h)}j["on"+i]=h};d.fromQuerystring=function(i,h){var g=RegExp("^[^#]*[?&]"+i+"=([^&#]*)").exec(h);if(!g){return null}return decodeURIComponent(g[1].replace(/\+/g," "))
}}())},{"./lodash":12}],12:[function(b,c,a){(function(d){(function(){var z="[object Array]",w="[object Date]",y="[object Function]",f="[object String]";var n={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};var v=(n[typeof window]&&window)||this;var m=n[typeof a]&&a&&!a.nodeType&&a;var B=n[typeof c]&&c&&!c.nodeType&&c;var p=B&&B.exports===m&&m;var u=n[typeof d]&&d;if(u&&(u.global===u||u.window===u)){v=u}var s=Object.prototype;var x=s.toString;var h=RegExp("^"+String(x).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");var i=k(i=Array.isArray)&&i;function l(){}function k(C){return typeof C=="function"&&h.test(C)}var q=i||function(C){return C&&typeof C=="object"&&typeof C.length=="number"&&x.call(C)==z||false};function A(C){return C&&typeof C=="object"&&x.call(C)==w||false}function g(C){return typeof C=="function"}if(g(/x/)){g=function(C){return typeof C=="function"&&x.call(C)==y}}function o(C){return !!(C&&n[typeof C])
}function t(C){return C===null}function r(C){return typeof C=="string"||C&&typeof C=="object"&&x.call(C)==f||false}function j(C){return typeof C=="undefined"}l.isArray=q;l.isDate=A;l.isFunction=g;l.isNull=t;l.isObject=o;l.isString=r;l.isUndefined=j;l.VERSION="2.4.1";if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){v._=l;define(function(){return l})}else{if(m&&B){if(p){(B.exports=l)._=l}else{m._=l}}else{v._=l}}}.call(this))}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],13:[function(b,c,a){(function(){var m=b("./lib/lodash"),h=b("JSON"),i=b("Base64"),f=i.btoa,j=i.atob,g=typeof a!=="undefined"?a:this;function k(o){if(!o){return o}var n=f(o);return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function l(o,n){return n?o/1:Math.floor(o/1000)}function d(n){return Math.floor(n/86400000)}g.isJson=function(n){return(!m.isUndefined(n)&&!m.isNull(n)&&n.constructor==={}.constructor)};g.isNonEmptyJson=function(o){if(!g.isJson(o)){return false
}for(var n in o){if(o.hasOwnProperty(n)){return true}}return false};g.payloadBuilder=function(o){var q="";var p=function(x,z,y){if(z!==undefined&&z!==null&&z!==""){var w=(q.length>0)?"&":"?";q+=w+x+"="+(y?encodeURIComponent(z):z)}};var n=function(x){var y=new RegExp("\\$(.[^\\$]+)$"),w=y.exec(x);if(w){return w[1]}};var r=function(w,x){switch(x){case"tms":return l(w,true);case"ts":return l(w,false);case"dt":return d(w);default:return w}};var s=(function(){function w(y){var A={};for(var B in y){var x=B,z=y[B];if(y.hasOwnProperty(x)){if(m.isDate(z)){type=n(x);if(!type){type="tms";x+="$"+type}z=r(z,type)}if(g.isJson(z)){z=w(z)}}A[x]=z}return A}return w})();var v=function(w,x){p(w,x,true)};var u=function(w,x){p(w,x,false)};var t=function(w,x,y){if(g.isNonEmptyJson(y)){var z=s(y);var A=h.stringify(z);if(o){u(w,k(A))}else{v(x,A)}}};return{add:v,addRaw:u,addJson:t,build:function(){return q}}}}())},{"./lib/lodash":12,Base64:1,JSON:2}],14:[function(b,c,a){(function(){var f=b("./lib/lodash"),d=typeof a!=="undefined"?a:this;
d.AsyncQueueProxy=function(g,k){function j(){var l,n,m;for(l=0;l<arguments.length;l+=1){m=arguments[l];n=m.shift();if(f.isString(n)){g[n].apply(g,m)}else{n.apply(g,m)}}}for(var h=0;h<k.length;h++){j(k[h])}return{push:j}}}())},{"./lib/lodash":12}],15:[function(b,c,a){(function(){var h=b("./tracker"),g=b("./lib/helpers"),d=b("./queue"),f=typeof a!=="undefined"?a:this;f.Snowplow=function(){var p=document,l=window,j="js-1.0.0",i={expireDateTime:null,hasLoaded:false,registeredOnLoadHandlers:[]},k=null;function o(){var q;if(i.expireDateTime){do{q=new Date()}while(q.getTime()<i.expireDateTime)}}function m(){var q;if(!i.hasLoaded){i.hasLoaded=true;for(q=0;q<i.registeredOnLoadHandlers.length;q++){i.registeredOnLoadHandlers[q]()}}return true}function n(){var r;if(p.addEventListener){g.addEventListener(p,"DOMContentLoaded",function q(){p.removeEventListener("DOMContentLoaded",q,false);m()})}else{if(p.attachEvent){p.attachEvent("onreadystatechange",function q(){if(p.readyState==="complete"){p.detachEvent("onreadystatechange",q);
m()}});if(p.documentElement.doScroll&&l===l.top){(function q(){if(!i.hasLoaded){try{p.documentElement.doScroll("left")}catch(s){setTimeout(q,0);return}m()}}())}}}if((new RegExp("WebKit")).test(navigator.userAgent)){r=setInterval(function(){if(i.hasLoaded||/loaded|complete/.test(p.readyState)){clearInterval(r);m()}},10)}g.addEventListener(l,"load",m,false)}g.addEventListener(l,"beforeunload",o,false);n();k=new h.Tracker(j,i);l._snaq=new d.AsyncQueueProxy(k,l._snaq);return{getTrackerCf:function(q){return new h.Tracker(j,i,{cf:q})},getTrackerUrl:function(q){return new h.Tracker(j,i,{url:q})},getAsyncTracker:function(){return k}}}}())},{"./lib/helpers":11,"./queue":14,"./tracker":16}],16:[function(b,c,a){(function(){var m=b("./lib/lodash"),d=b("./lib/helpers"),f=b("./lib/cookie"),k=b("./lib/detectors"),l=b("./payload"),h=b("JSON"),j=b("sha1"),g=typeof a!=="undefined"?a:this;g.Tracker=function i(E,r,ag){var Y=document,R=window,G=navigator,o=d.fixupUrl(Y.domain,R.location.href,d.getReferrer()),aK=d.fixupDomain(o[0]),aX=o[1],ax=o[2],av="GET",z="web",p=ak(ag),aO="",ab,N=Y.title,P="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",at=[aK],t=[],aj=[],D=[],ar=500,u,F,v,aV="_sp_",w,aW,aS,V,A=63072000000,C=1800000,ae=15768000000,J=true,H=123412414,aQ=Y.characterSet||Y.charset,y=G.userLanguage||G.language,aP=k.detectBrowserFeatures(B("testcookie")),ap=k.detectTimezone(),q=k.detectSignature(H),aB=false,ay=false,aw,aq,ac,Z,M,al,x,Q=j,aA,W,a1,s=aH();
function ak(a2){if(typeof a2==="undefined"){return null}else{if("cf" in a2){return S(a2.cf)}else{if("url" in a2){return aI(a2.url)}}}}function aH(){return{transaction:{},items:[]}}function aT(a2){var a3;if(v){a3=new RegExp("#.*");return a2.replace(a3,"")}return a2}function aZ(a2){var a4=new RegExp("^([a-z]+):"),a3=a4.exec(a2);return a3?a3[1]:null}function aJ(a4,a2){var a5=aZ(a2),a3;if(a5){return a2}if(a2.slice(0,1)==="/"){return aZ(a4)+"://"+d.getHostName(a4)+a2}a4=aT(a4);if((a3=a4.indexOf("?"))>=0){a4=a4.slice(0,a3)}if((a3=a4.lastIndexOf("/"))!==a4.length-1){a4=a4.slice(0,a3+1)}return a4+a2}function au(a5){var a3,a2,a4;for(a3=0;a3<at.length;a3++){a2=d.fixupDomain(at[a3].toLowerCase());if(a5===a2){return true}if(a2.slice(0,1)==="."){if(a5===a2.slice(1)){return true}a4=a5.length-a2.length;if((a4>0)&&(a5.slice(a4)===a2)){return true}}}return false}function a0(a2){var a3=new Image(1,1);if(p===null){throw"No Snowplow collector configured, cannot track"}a3.onload=function(){};a3.src=p+a2}function T(a4,a3){var a2=new Date();
if(!aS){a0(a4);r.expireDateTime=a2.getTime()+a3}}function B(a2){return aV+a2+"."+aA}function U(a2){return f.getCookie(B(a2))}function ao(){aA=Q((w||aK)+(aW||"/")).slice(0,4)}function aN(){var a2=new Date();aw=a2.getTime()}function aF(){aa();aN()}function af(){var a2=(Y.compatMode&&Y.compatMode!="BackCompat")?Y.documentElement:Y.body;return[a2.scrollLeft||R.pageXOffset,a2.scrollTop||R.pageYOffset]}function am(){var a3=af();var a2=a3[0];aq=a2;ac=a2;var a4=a3[1];Z=a4;M=a4}function aa(){var a3=af();var a2=a3[0];if(a2<aq){aq=a2}else{if(a2>ac){ac=a2}}var a4=a3[1];if(a4<Z){Z=a4}else{if(a4>M){M=a4}}}function aU(a4,a3,a2,a6,a5){f.setCookie(B("id"),a4+"."+a3+"."+a2+"."+a6+"."+a5,A,aW,w)}function aG(){var a3=new Date(),a2=Math.round(a3.getTime()/1000),a5=U("id"),a4;if(a5){a4=a5.split(".");a4.unshift("0")}else{if(!W){W=Q((G.userAgent||"")+(G.platform||"")+h.stringify(aP)+a2).slice(0,16)}a4=["1",W,a2,0,a2,""]}return a4}function X(){var a3=new Date(),a2=a3.getTime();return a2}function O(a2){var bk,a3=new Date(),a9=Math.round(a3.getTime()/1000),bm,bd,a6,bg,bi,a8,a7,bj,a5=1024,bn,bb,bf=B("id"),ba=B("ses"),bh=aG(),be=U("ses"),bl=ab||aX,bc;
if(aS){f.setCookie(bf,"",-1,aW,w);f.setCookie(ba,"",-1,aW,w);return""}bm=bh[0];bd=bh[1];bg=bh[2];a6=bh[3];bi=bh[4];a8=bh[5];if(!be){a6++;a8=bi}a2.addRaw("dtm",X());a2.addRaw("tid",String(Math.random()).slice(2,8));a2.addRaw("vp",k.detectViewport());a2.addRaw("ds",k.detectDocumentSize());a2.addRaw("vid",a6);a2.addRaw("duid",bd);a2.add("p",z);a2.add("tv",E);a2.add("fp",q);a2.add("aid",aO);a2.add("lang",y);a2.add("cs",aQ);a2.add("tz",ap);a2.add("uid",a1);if(ax.length){a2.add("refr",aT(ax))}for(bk in aP){if(Object.prototype.hasOwnProperty.call(aP,bk)){bc=(bk==="res"||bk==="cd"||bk==="cookie")?"":"f_";a2.addRaw(bc+bk,aP[bk])}}a2.add("url",aT(bl));var a4=a2.build();aU(bd,bg,a6,a9,a8);f.setCookie(ba,"*",C,aW,w);return a4}function S(a2){return aI(a2+".cloudfront.net")}function aI(a2){return("https:"==Y.location.protocol?"https":"http")+"://"+a2+"/i"}function ai(a7,a3){var a6=d.fixupTitle(a7||N);var a8=l.payloadBuilder(J);a8.add("e","pv");a8.add("page",a6);a8.addJson("cx","co",a3);var a5=O(a8,"pageView");
T(a5,ar);var a2=new Date();if(u&&F&&!ay){ay=true;am();d.addEventListener(Y,"click",aN);d.addEventListener(Y,"mouseup",aN);d.addEventListener(Y,"mousedown",aN);d.addEventListener(Y,"mousemove",aN);d.addEventListener(Y,"mousewheel",aN);d.addEventListener(R,"DOMMouseScroll",aN);d.addEventListener(R,"scroll",aF);d.addEventListener(Y,"keypress",aN);d.addEventListener(Y,"keydown",aN);d.addEventListener(Y,"keyup",aN);d.addEventListener(R,"resize",aN);d.addEventListener(R,"focus",aN);d.addEventListener(R,"blur",aN);aw=a2.getTime();setInterval(function a4(){var a9=new Date();if((aw+F)>a9.getTime()){if(u<a9.getTime()){n(a6,a3)}}},F)}}function n(a4,a2){var a5=l.payloadBuilder(J);a5.add("e","pp");a5.add("page",a4);a5.addRaw("pp_mix",aq);a5.addRaw("pp_max",ac);a5.addRaw("pp_miy",Z);a5.addRaw("pp_may",M);a5.addJson("cx","co",a2);am();var a3=O(a5,"pagePing");T(a3,ar)}function K(a4,a7,a2,a6,a5,a3){var a8=l.payloadBuilder(J);a8.add("e","se");a8.add("se_ca",a4);a8.add("se_ac",a7);a8.add("se_la",a2);a8.add("se_pr",a6);
a8.add("se_va",a5);a8.addJson("cx","co",a3);request=O(a8,"structEvent");T(request,ar)}function an(a2,a4,a3){var a5=l.payloadBuilder(J);a5.add("e","ue");a5.add("ue_na",a2);a5.addJson("ue_px","ue_pr",a4);a5.addJson("cx","co",a3);request=O(a5,"unstructEvent");T(request,ar)}function aD(a7,a6,bd,a8,a2,ba,a3,a5,bb,a4){var bc=l.payloadBuilder(J);bc.add("e","tr");bc.add("tr_id",a7);bc.add("tr_af",a6);bc.add("tr_tt",bd);bc.add("tr_tx",a8);bc.add("tr_sh",a2);bc.add("tr_ci",ba);bc.add("tr_st",a3);bc.add("tr_co",a5);bc.add("tr_cu",bb);bc.addJson("cx","co",a4);var a9=O(bc,"transaction");T(a9,ar)}function ad(a5,a9,a2,a3,a8,a6,ba,a4){var bb=l.payloadBuilder(J);bb.add("e","ti");bb.add("ti_id",a5);bb.add("ti_sk",a9);bb.add("ti_na",a2);bb.add("ti_ca",a3);bb.add("ti_pr",a8);bb.add("ti_qu",a6);bb.add("ti_cu",ba);bb.addJson("cx","co",a4);var a7=O(bb,"transactionItem");T(a7,ar)}function aM(a3,a2,a4){var a6=l.payloadBuilder(J);a6.add("e",a2);a6.add("t_url",aT(a3));var a5=O(a6,"link");T(a5,ar)}function az(a7,a2,a5,a4,a3){var a6=l.payloadBuilder(J);
a6.add("e","ad");a6.add("ad_ba",a7);a6.add("ad_ca",a2);a6.add("ad_ad",a5);a6.add("ad_uid",a4);a6.addJson("cx","co",a3);request=O(a6,"impression");T(request,ar)}function aR(a3,a2){if(a3!==""){return a3+a2.charAt(0).toUpperCase()+a2.slice(1)}return a2}function L(a7){var a6,a2,a5=["","webkit","ms","moz"],a4;if(!V){for(a2=0;a2<a5.length;a2++){a4=a5[a2];if(Object.prototype.hasOwnProperty.call(Y,aR(a4,"hidden"))){if(Y[aR(a4,"visibilityState")]==="prerender"){a6=true}break}}}if(a6){d.addEventListener(Y,a4+"visibilitychange",function a3(){Y.removeEventListener(a4+"visibilitychange",a3,false);a7()});return}a7()}function I(a4,a3){var a5,a2="(^| )(piwik[_-]"+a3;if(a4){for(a5=0;a5<a4.length;a5++){a2+="|"+a4[a5]}}a2+=")( |$)";return new RegExp(a2)}function aL(a5,a2,a6){if(!a6){return"lnk"}var a4=I(aj,"download"),a3=I(D,"link"),a7=new RegExp("\\.("+P+")([?&#]|$)","i");return a3.test(a5)?"lnk":(a4.test(a5)||a7.test(a2)?"dl":0)}function aE(a7){var a5,a3,a2;while((a5=a7.parentNode)!==null&&!m.isUndefined(a5)&&((a3=a7.tagName.toUpperCase())!=="A"&&a3!=="AREA")){a7=a5
}if(!m.isUndefined(a7.href)){var a8=a7.hostname||d.getHostName(a7.href),a9=a8.toLowerCase(),a4=a7.href.replace(a8,a9),a6=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!a6.test(a4)){a2=aL(a7.className,a4,au(a9));if(a2){a4=unescape(a4);aM(a4,a2)}}}}function aY(a2){var a3,a4;a2=a2||R.event;a3=a2.which||a2.button;a4=a2.target||a2.srcElement;if(a2.type==="click"){if(a4){aE(a4)}}else{if(a2.type==="mousedown"){if((a3===1||a3===2)&&a4){al=a3;x=a4}else{al=x=null}}else{if(a2.type==="mouseup"){if(a3===al&&a4===x){aE(a4)}al=x=null}}}}function aC(a3,a2){if(a2){d.addEventListener(a3,"mouseup",aY,false);d.addEventListener(a3,"mousedown",aY,false)}else{d.addEventListener(a3,"click",aY,false)}}function ah(a3){if(!aB){aB=true;var a4,a2=I(t,"ignore"),a5=Y.links;if(a5){for(a4=0;a4<a5.length;a4++){if(!a2.test(a5[a4].className)){aC(a5[a4],a3)}}}}}ao();return{getUserId:function(){return a1},getDomainUserId:function(){return(aG())[1]},getDomainUserInfo:function(){return aG()
},setAppId:function(a2){aO=a2},setLinkTrackingTimer:function(a2){ar=a2},setDownloadExtensions:function(a2){P=a2},addDownloadExtensions:function(a2){P+="|"+a2},setDomains:function(a2){at=m.isString(a2)?[a2]:a2;at.push(aK)},setIgnoreClasses:function(a2){t=m.isString(a2)?[a2]:a2},setReferrerUrl:function(a2){ax=a2},setCustomUrl:function(a2){ab=aJ(aX,a2)},setDocumentTitle:function(a2){N=a2},setDownloadClasses:function(a2){aj=m.isString(a2)?[a2]:a2},setLinkClasses:function(a2){D=m.isString(a2)?[a2]:a2},discardHashTag:function(a2){v=a2},setCookieNamePrefix:function(a2){aV=a2},setCookieDomain:function(a2){w=d.fixupDomain(a2);ao()},setCookiePath:function(a2){aW=a2;ao()},setVisitorCookieTimeout:function(a2){A=a2*1000},setSessionCookieTimeout:function(a2){C=a2*1000},setReferralCookieTimeout:function(a2){ae=a2*1000},setUserFingerprintSeed:function(a2){H=a2;q=k.detectSignature(H)},respectDoNotTrack:function(a3){var a2=G.doNotTrack||G.msDoNotTrack;aS=a3&&(a2==="yes"||a2==="1")},enableUserFingerprint:function(a2){if(!a2){q=""
}},addListener:function(a3,a2){aC(a3,a2)},enableLinkTracking:function(a2){if(r.hasLoaded){ah(a2)}else{r.registeredOnLoadHandlers.push(function(){ah(a2)})}},enableActivityTracking:function(a4,a3){var a2=new Date();u=a2.getTime()+a4*1000;F=a3*1000},killFrame:function(){if(R.location!==R.top.location){R.top.location=R.location}},redirectFile:function(a2){if(R.location.protocol==="file:"){R.location=a2}},setCountPreRendered:function(a2){V=a2},setUserId:function(a2){a1=a2},setUserIdFromLocation:function(a2){a1=d.fromQuerystring(a2,aX)},setUserIdFromReferrer:function(a2){a1=d.fromQuerystring(a2,ax)},setUserIdFromCookie:function(a2){a1=f.getCookie(a2)},setCollectorCf:function(a2){p=S(a2)},setCollectorUrl:function(a2){p=aI(a2)},setPlatform:function(a2){z=a2},encodeBase64:function(a2){J=a2},trackPageView:function(a3,a2){L(function(){ai(a3,a2)})},trackStructEvent:function(a4,a7,a2,a6,a5,a3){K(a4,a7,a2,a6,a5,a3)},trackUnstructEvent:function(a2,a4,a3){an(a2,a4,a3)},addTrans:function(a7,a6,bb,a8,a2,a9,a3,a5,ba,a4){s.transaction={orderId:a7,affiliation:a6,total:bb,tax:a8,shipping:a2,city:a9,state:a3,country:a5,currency:ba,context:a4}
},addItem:function(a2,a9,a4,a7,a6,a8,a3,a5){s.items.push({orderId:a2,sku:a9,name:a4,category:a7,price:a6,quantity:a8,currency:a3,context:a5})},trackTrans:function(){aD(s.transaction.orderId,s.transaction.affiliation,s.transaction.total,s.transaction.tax,s.transaction.shipping,s.transaction.city,s.transaction.state,s.transaction.country,s.transaction.currency,s.transaction.context);for(var a2=0;a2<s.items.length;a2++){var a3=s.items[a2];ad(a3.orderId,a3.sku,a3.name,a3.category,a3.price,a3.quantity,a3.currency,a3.context)}s=aH()},trackLink:function(a4,a2,a3){L(function(){aM(a4,a2,a3)})},trackImpression:function(a6,a2,a5,a4,a3){if(typeof console!=="undefined"){console.log("Snowplow: trackImpression is deprecated. When version 1.1.0 is released, switch to trackAdImpression.")}az(a6,a2,a5,a4,a3)}}}}())},{"./lib/cookie":9,"./lib/detectors":10,"./lib/helpers":11,"./lib/lodash":12,"./payload":13,JSON:2,sha1:7}]},{},[8]);