(()=>{var Db=Object.create;var fu=Object.defineProperty;var Fb=Object.getOwnPropertyDescriptor;var kb=Object.getOwnPropertyNames;var Lb=Object.getPrototypeOf,Ub=Object.prototype.hasOwnProperty;var Pn=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Jr=(n,t)=>{for(var e in t)fu(n,e,{get:t[e],enumerable:!0})},Ob=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of kb(t))!Ub.call(n,r)&&r!==e&&fu(n,r,{get:()=>t[r],enumerable:!(i=Fb(t,r))||i.enumerable});return n};var qd=(n,t,e)=>(e=n!=null?Db(Lb(n)):{},Ob(t||!n||!n.__esModule?fu(e,"default",{value:n,enumerable:!0}):e,n));var Xx=Pn((EL,qx)=>{qx.exports=Ee;var Bn=null;try{Bn=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ee(n,t,e){this.low=n|0,this.high=t|0,this.unsigned=!!e}Ee.prototype.__isLong__;Object.defineProperty(Ee.prototype,"__isLong__",{value:!0});function yn(n){return(n&&n.__isLong__)===!0}Ee.isLong=yn;var Ux={},Ox={};function Or(n,t){var e,i,r;return t?(n>>>=0,(r=0<=n&&n<256)&&(i=Ox[n],i)?i:(e=Ae(n,(n|0)<0?-1:0,!0),r&&(Ox[n]=e),e)):(n|=0,(r=-128<=n&&n<128)&&(i=Ux[n],i)?i:(e=Ae(n,n<0?-1:0,!1),r&&(Ux[n]=e),e))}Ee.fromInt=Or;function zn(n,t){if(isNaN(n))return t?Ur:Vn;if(t){if(n<0)return Ur;if(n>=Hx)return $x}else{if(n<=-zx)return xn;if(n+1>=zx)return Wx}return n<0?zn(-n,t).neg():Ae(n%Vs|0,n/Vs|0,t)}Ee.fromNumber=zn;function Ae(n,t,e){return new Ee(n,t,e)}Ee.fromBits=Ae;var Nc=Math.pow;function Ef(n,t,e){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return Vn;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var i;if((i=n.indexOf("-"))>0)throw Error("interior hyphen");if(i===0)return Ef(n.substring(1),t,e).neg();for(var r=zn(Nc(e,8)),s=Vn,o=0;o<n.length;o+=8){var a=Math.min(8,n.length-o),l=parseInt(n.substring(o,o+a),e);if(a<8){var c=zn(Nc(e,a));s=s.mul(c).add(zn(l))}else s=s.mul(r),s=s.add(zn(l))}return s.unsigned=t,s}Ee.fromString=Ef;function ti(n,t){return typeof n=="number"?zn(n,t):typeof n=="string"?Ef(n,t):Ae(n.low,n.high,typeof t=="boolean"?t:n.unsigned)}Ee.fromValue=ti;var Bx=65536,XA=1<<24,Vs=Bx*Bx,Hx=Vs*Vs,zx=Hx/2,Vx=Or(XA),Vn=Or(0);Ee.ZERO=Vn;var Ur=Or(0,!0);Ee.UZERO=Ur;var zs=Or(1);Ee.ONE=zs;var Gx=Or(1,!0);Ee.UONE=Gx;var Tf=Or(-1);Ee.NEG_ONE=Tf;var Wx=Ae(-1,2147483647,!1);Ee.MAX_VALUE=Wx;var $x=Ae(-1,-1,!0);Ee.MAX_UNSIGNED_VALUE=$x;var xn=Ae(0,-2147483648,!1);Ee.MIN_VALUE=xn;var yt=Ee.prototype;yt.toInt=function(){return this.unsigned?this.low>>>0:this.low};yt.toNumber=function(){return this.unsigned?(this.high>>>0)*Vs+(this.low>>>0):this.high*Vs+(this.low>>>0)};yt.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(xn)){var e=zn(t),i=this.div(e),r=i.mul(e).sub(this);return i.toString(t)+r.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=zn(Nc(t,6),this.unsigned),o=this,a="";;){var l=o.div(s),c=o.sub(l.mul(s)).toInt()>>>0,u=c.toString(t);if(o=l,o.isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}};yt.getHighBits=function(){return this.high};yt.getHighBitsUnsigned=function(){return this.high>>>0};yt.getLowBits=function(){return this.low};yt.getLowBitsUnsigned=function(){return this.low>>>0};yt.getNumBitsAbs=function(){if(this.isNegative())return this.eq(xn)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&(t&1<<e)==0;e--);return this.high!=0?e+33:e+1};yt.isZero=function(){return this.high===0&&this.low===0};yt.eqz=yt.isZero;yt.isNegative=function(){return!this.unsigned&&this.high<0};yt.isPositive=function(){return this.unsigned||this.high>=0};yt.isOdd=function(){return(this.low&1)===1};yt.isEven=function(){return(this.low&1)===0};yt.equals=function(t){return yn(t)||(t=ti(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};yt.eq=yt.equals;yt.notEquals=function(t){return!this.eq(t)};yt.neq=yt.notEquals;yt.ne=yt.notEquals;yt.lessThan=function(t){return this.comp(t)<0};yt.lt=yt.lessThan;yt.lessThanOrEqual=function(t){return this.comp(t)<=0};yt.lte=yt.lessThanOrEqual;yt.le=yt.lessThanOrEqual;yt.greaterThan=function(t){return this.comp(t)>0};yt.gt=yt.greaterThan;yt.greaterThanOrEqual=function(t){return this.comp(t)>=0};yt.gte=yt.greaterThanOrEqual;yt.ge=yt.greaterThanOrEqual;yt.compare=function(t){if(yn(t)||(t=ti(t)),this.eq(t))return 0;var e=this.isNegative(),i=t.isNegative();return e&&!i?-1:!e&&i?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};yt.comp=yt.compare;yt.negate=function(){return!this.unsigned&&this.eq(xn)?xn:this.not().add(zs)};yt.neg=yt.negate;yt.add=function(t){yn(t)||(t=ti(t));var e=this.high>>>16,i=this.high&65535,r=this.low>>>16,s=this.low&65535,o=t.high>>>16,a=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,h=0,f=0,d=0;return d+=s+c,f+=d>>>16,d&=65535,f+=r+l,h+=f>>>16,f&=65535,h+=i+a,u+=h>>>16,h&=65535,u+=e+o,u&=65535,Ae(f<<16|d,u<<16|h,this.unsigned)};yt.subtract=function(t){return yn(t)||(t=ti(t)),this.add(t.neg())};yt.sub=yt.subtract;yt.multiply=function(t){if(this.isZero())return Vn;if(yn(t)||(t=ti(t)),Bn){var e=Bn.mul(this.low,this.high,t.low,t.high);return Ae(e,Bn.get_high(),this.unsigned)}if(t.isZero())return Vn;if(this.eq(xn))return t.isOdd()?xn:Vn;if(t.eq(xn))return this.isOdd()?xn:Vn;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Vx)&&t.lt(Vx))return zn(this.toNumber()*t.toNumber(),this.unsigned);var i=this.high>>>16,r=this.high&65535,s=this.low>>>16,o=this.low&65535,a=t.high>>>16,l=t.high&65535,c=t.low>>>16,u=t.low&65535,h=0,f=0,d=0,g=0;return g+=o*u,d+=g>>>16,g&=65535,d+=s*u,f+=d>>>16,d&=65535,d+=o*c,f+=d>>>16,d&=65535,f+=r*u,h+=f>>>16,f&=65535,f+=s*c,h+=f>>>16,f&=65535,f+=o*l,h+=f>>>16,f&=65535,h+=i*u+r*c+s*l+o*a,h&=65535,Ae(d<<16|g,h<<16|f,this.unsigned)};yt.mul=yt.multiply;yt.divide=function(t){if(yn(t)||(t=ti(t)),t.isZero())throw Error("division by zero");if(Bn){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?Bn.div_u:Bn.div_s)(this.low,this.high,t.low,t.high);return Ae(e,Bn.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Ur:Vn;var i,r,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Ur;if(t.gt(this.shru(1)))return Gx;s=Ur}else{if(this.eq(xn)){if(t.eq(zs)||t.eq(Tf))return xn;if(t.eq(xn))return zs;var o=this.shr(1);return i=o.div(t).shl(1),i.eq(Vn)?t.isNegative()?zs:Tf:(r=this.sub(t.mul(i)),s=i.add(r.div(t)),s)}else if(t.eq(xn))return this.unsigned?Ur:Vn;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=Vn}for(r=this;r.gte(t);){i=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(i)/Math.LN2),l=a<=48?1:Nc(2,a-48),c=zn(i),u=c.mul(t);u.isNegative()||u.gt(r);)i-=l,c=zn(i,this.unsigned),u=c.mul(t);c.isZero()&&(c=zs),s=s.add(c),r=r.sub(u)}return s};yt.div=yt.divide;yt.modulo=function(t){if(yn(t)||(t=ti(t)),Bn){var e=(this.unsigned?Bn.rem_u:Bn.rem_s)(this.low,this.high,t.low,t.high);return Ae(e,Bn.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};yt.mod=yt.modulo;yt.rem=yt.modulo;yt.not=function(){return Ae(~this.low,~this.high,this.unsigned)};yt.and=function(t){return yn(t)||(t=ti(t)),Ae(this.low&t.low,this.high&t.high,this.unsigned)};yt.or=function(t){return yn(t)||(t=ti(t)),Ae(this.low|t.low,this.high|t.high,this.unsigned)};yt.xor=function(t){return yn(t)||(t=ti(t)),Ae(this.low^t.low,this.high^t.high,this.unsigned)};yt.shiftLeft=function(t){return yn(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Ae(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Ae(0,this.low<<t-32,this.unsigned)};yt.shl=yt.shiftLeft;yt.shiftRight=function(t){return yn(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Ae(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Ae(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};yt.shr=yt.shiftRight;yt.shiftRightUnsigned=function(t){if(yn(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var i=this.low;return Ae(i>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?Ae(e,0,this.unsigned):Ae(e>>>t-32,0,this.unsigned)};yt.shru=yt.shiftRightUnsigned;yt.shr_u=yt.shiftRightUnsigned;yt.toSigned=function(){return this.unsigned?Ae(this.low,this.high,!1):this};yt.toUnsigned=function(){return this.unsigned?this:Ae(this.low,this.high,!0)};yt.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};yt.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};yt.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]};Ee.fromBytes=function(t,e,i){return i?Ee.fromBytesLE(t,e):Ee.fromBytesBE(t,e)};Ee.fromBytesLE=function(t,e){return new Ee(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)};Ee.fromBytesBE=function(t,e){return new Ee(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}});var w0=Pn(()=>{});var T0=Pn(()=>{});var G0=Pn((H0,sd)=>{(function(n,t,e){function i(a){var l=this,c=o();l.next=function(){var u=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=u-(l.c=u|0)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(a),l.s0<0&&(l.s0+=1),l.s1-=c(a),l.s1<0&&(l.s1+=1),l.s2-=c(a),l.s2<0&&(l.s2+=1),c=null}function r(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}function s(a,l){var c=new i(a),u=l&&l.state,h=c.next;return h.int32=function(){return c.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}function o(){var a=4022871197,l=function(c){c=String(c);for(var u=0;u<c.length;u++){a+=c.charCodeAt(u);var h=.02519603282416938*a;a=h>>>0,h-=a,h*=a,a=h>>>0,h-=a,a+=h*4294967296}return(a>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.alea=s})(H0,typeof sd=="object"&&sd,typeof define=="function"&&define)});var $0=Pn((W0,od)=>{(function(n,t,e){function i(o){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var u=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^u^u>>>8},o===(o|0)?a.x=o:l+=o;for(var c=0;c<l.length+64;c++)a.x^=l.charCodeAt(c)|0,a.next()}function r(o,a){return a.x=o.x,a.y=o.y,a.z=o.z,a.w=o.w,a}function s(o,a){var l=new i(o),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,d=(h+f)/(1<<21);while(d===0);return d},u.int32=l.next,u.quick=u,c&&(typeof c=="object"&&r(c,l),u.state=function(){return r(l,{})}),u}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xor128=s})(W0,typeof od=="object"&&od,typeof define=="function"&&define)});var X0=Pn((q0,ad)=>{(function(n,t,e){function i(o){var a=this,l="";a.next=function(){var u=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(u^u<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,o===(o|0)?a.x=o:l+=o;for(var c=0;c<l.length+64;c++)a.x^=l.charCodeAt(c)|0,c==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function r(o,a){return a.x=o.x,a.y=o.y,a.z=o.z,a.w=o.w,a.v=o.v,a.d=o.d,a}function s(o,a){var l=new i(o),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,d=(h+f)/(1<<21);while(d===0);return d},u.int32=l.next,u.quick=u,c&&(typeof c=="object"&&r(c,l),u.state=function(){return r(l,{})}),u}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xorwow=s})(q0,typeof ad=="object"&&ad,typeof define=="function"&&define)});var K0=Pn((Y0,ld)=>{(function(n,t,e){function i(o){var a=this;a.next=function(){var c=a.x,u=a.i,h,f,d;return h=c[u],h^=h>>>7,f=h^h<<24,h=c[u+1&7],f^=h^h>>>10,h=c[u+3&7],f^=h^h>>>3,h=c[u+4&7],f^=h^h<<7,h=c[u+7&7],h=h^h<<13,f^=h^h<<9,c[u]=f,a.i=u+1&7,f};function l(c,u){var h,f,d=[];if(u===(u|0))f=d[0]=u;else for(u=""+u,h=0;h<u.length;++h)d[h&7]=d[h&7]<<15^u.charCodeAt(h)+d[h+1&7]<<13;for(;d.length<8;)d.push(0);for(h=0;h<8&&d[h]===0;++h);for(h==8?f=d[7]=-1:f=d[h],c.x=d,c.i=0,h=256;h>0;--h)c.next()}l(a,o)}function r(o,a){return a.x=o.x.slice(),a.i=o.i,a}function s(o,a){o==null&&(o=+new Date);var l=new i(o),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,d=(h+f)/(1<<21);while(d===0);return d},u.int32=l.next,u.quick=u,c&&(c.x&&r(c,l),u.state=function(){return r(l,{})}),u}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xorshift7=s})(Y0,typeof ld=="object"&&ld,typeof define=="function"&&define)});var J0=Pn((Z0,cd)=>{(function(n,t,e){function i(o){var a=this;a.next=function(){var c=a.w,u=a.X,h=a.i,f,d;return a.w=c=c+1640531527|0,d=u[h+34&127],f=u[h=h+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,d=u[h]=d^f,a.i=h,d+(c^c>>>16)|0};function l(c,u){var h,f,d,g,x,m=[],p=128;for(u===(u|0)?(f=u,u=null):(u=u+"\0",f=0,p=Math.max(p,u.length)),d=0,g=-32;g<p;++g)u&&(f^=u.charCodeAt((g+32)%u.length)),g===0&&(x=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,g>=0&&(x=x+1640531527|0,h=m[g&127]^=f+x,d=h==0?d+1:0);for(d>=128&&(m[(u&&u.length||0)&127]=-1),d=127,g=512;g>0;--g)f=m[d+34&127],h=m[d=d+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,m[d]=f^h;c.w=x,c.X=m,c.i=d}l(a,o)}function r(o,a){return a.i=o.i,a.w=o.w,a.X=o.X.slice(),a}function s(o,a){o==null&&(o=+new Date);var l=new i(o),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,d=(h+f)/(1<<21);while(d===0);return d},u.int32=l.next,u.quick=u,c&&(c.X&&r(c,l),u.state=function(){return r(l,{})}),u}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xor4096=s})(Z0,typeof cd=="object"&&cd,typeof define=="function"&&define)});var Q0=Pn((j0,ud)=>{(function(n,t,e){function i(o){var a=this,l="";a.next=function(){var u=a.b,h=a.c,f=a.d,d=a.a;return u=u<<25^u>>>7^h,h=h-f|0,f=f<<24^f>>>8^d,d=d-u|0,a.b=u=u<<20^u>>>12^h,a.c=h=h-f|0,a.d=f<<16^h>>>16^d,a.a=d-u|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,o===Math.floor(o)?(a.a=o/4294967296|0,a.b=o|0):l+=o;for(var c=0;c<l.length+20;c++)a.b^=l.charCodeAt(c)|0,a.next()}function r(o,a){return a.a=o.a,a.b=o.b,a.c=o.c,a.d=o.d,a}function s(o,a){var l=new i(o),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var h=l.next()>>>11,f=(l.next()>>>0)/4294967296,d=(h+f)/(1<<21);while(d===0);return d},u.int32=l.next,u.quick=u,c&&(typeof c=="object"&&r(c,l),u.state=function(){return r(l,{})}),u}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.tychei=s})(j0,typeof ud=="object"&&ud,typeof define=="function"&&define)});var ty=Pn(()=>{});var ny=Pn((ey,Yc)=>{(function(n,t,e){var i=256,r=6,s=52,o="random",a=e.pow(i,r),l=e.pow(2,s),c=l*2,u=i-1,h;function f(_,y,S){var b=[];y=y==!0?{entropy:!0}:y||{};var T=m(x(y.entropy?[_,v(t)]:_??p(),3),b),R=new d(b),w=function(){for(var M=R.g(r),C=a,D=0;M<l;)M=(M+D)*i,C*=i,D=R.g(1);for(;M>=c;)M/=2,C/=2,D>>>=1;return(M+D)/C};return w.int32=function(){return R.g(4)|0},w.quick=function(){return R.g(4)/4294967296},w.double=w,m(v(R.S),t),(y.pass||S||function(M,C,D,F){return F&&(F.S&&g(F,R),M.state=function(){return g(R,{})}),D?(e[o]=M,C):M})(w,T,"global"in y?y.global:this==e,y.state)}function d(_){var y,S=_.length,b=this,T=0,R=b.i=b.j=0,w=b.S=[];for(S||(_=[S++]);T<i;)w[T]=T++;for(T=0;T<i;T++)w[T]=w[R=u&R+_[T%S]+(y=w[T])],w[R]=y;(b.g=function(M){for(var C,D=0,F=b.i,L=b.j,U=b.S;M--;)C=U[F=u&F+1],D=D*i+U[u&(U[F]=U[L=u&L+C])+(U[L]=C)];return b.i=F,b.j=L,D})(i)}function g(_,y){return y.i=_.i,y.j=_.j,y.S=_.S.slice(),y}function x(_,y){var S=[],b=typeof _,T;if(y&&b=="object")for(T in _)try{S.push(x(_[T],y-1))}catch{}return S.length?S:b=="string"?_:_+"\0"}function m(_,y){for(var S=_+"",b,T=0;T<S.length;)y[u&T]=u&(b^=y[u&T]*19)+S.charCodeAt(T++);return v(y)}function p(){try{var _;return h&&(_=h.randomBytes)?_=_(i):(_=new Uint8Array(i),(n.crypto||n.msCrypto).getRandomValues(_)),v(_)}catch{var y=n.navigator,S=y&&y.plugins;return[+new Date,n,S,n.screen,v(t)]}}function v(_){return String.fromCharCode.apply(0,_)}if(m(e.random(),t),typeof Yc=="object"&&Yc.exports){Yc.exports=f;try{h=ty()}catch{}}else typeof define=="function"&&define.amd?define(function(){return f}):e["seed"+o]=f})(typeof self<"u"?self:ey,[],Math)});var ry=Pn((Nz,iy)=>{var aC=G0(),lC=$0(),cC=X0(),uC=K0(),hC=J0(),fC=Q0(),$r=ny();$r.alea=aC;$r.xor128=lC;$r.xorwow=cC;$r.xorshift7=uC;$r.xor4096=hC;$r.tychei=fC;iy.exports=$r});var ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mp=0,Vu=1,gp=2;var Hu=1,xp=2,li=3,Ci=0,on=1,Un=2,Pi=0,_r=1,Gu=2,Wu=3,$u=4,yp=5,Qi=100,_p=101,vp=102,Sp=103,bp=104,Mp=200,wp=201,Tp=202,Ep=203,Xa=204,Ya=205,Ap=206,Ip=207,Cp=208,Rp=209,Np=210,Pp=211,Dp=212,Fp=213,kp=214,vl=0,Sl=1,bl=2,vr=3,Ml=4,wl=5,Tl=6,El=7,qu=0,Lp=1,Up=2,Di=0,Op=1,Bp=2,zp=3,Vp=4,Hp=5,Gp=6,Wp=7;var Xu=300,Er=301,Ar=302,Al=303,Il=304,ko=306,Ka=1e3,ji=1001,Za=1002,kn=1003,$p=1004;var Lo=1005;var jn=1006,Cl=1007;var sr=1008;var ci=1009,Yu=1010,Ku=1011,ws=1012,Rl=1013,or=1014,ui=1015,Ts=1016,Nl=1017,Pl=1018,Es=1020,Zu=35902,Ju=35899,ju=1021,Qu=1022,On=1023,ms=1026,As=1027,th=1028,Dl=1029,eh=1030,Fl=1031;var kl=1033,Uo=33776,Oo=33777,Bo=33778,zo=33779,Ll=35840,Ul=35841,Ol=35842,Bl=35843,zl=36196,Vl=37492,Hl=37496,Gl=37808,Wl=37809,$l=37810,ql=37811,Xl=37812,Yl=37813,Kl=37814,Zl=37815,Jl=37816,jl=37817,Ql=37818,tc=37819,ec=37820,nc=37821,ic=36492,rc=36494,sc=36495,oc=36283,ac=36284,lc=36285,cc=36286;var ho=2300,Ja=2301,qa=2302,Lu=2400,Uu=2401,Ou=2402;var qp=3200,Xp=3201;var Yp=0,Kp=1,Fi="",En="srgb",Sr="srgb-linear",fo="linear",xe="srgb";var yr=7680;var Bu=519,Zp=512,Jp=513,jp=514,nh=515,Qp=516,tm=517,em=518,nm=519,ja=35044;var ih="300 es",Jn=2e3,po=2001;var si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=1234567,co=Math.PI/180,gs=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function rh(n,t){return(n%t+t)%t}function Bb(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function zb(n,t,e){return n!==t?(e-n)/(t-n):0}function uo(n,t,e){return(1-e)*n+e*t}function Vb(n,t,e,i){return uo(n,t,1-Math.exp(-e*i))}function Hb(n,t=1){return t-Math.abs(rh(n,t*2)-t)}function Gb(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wb(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function $b(n,t){return n+Math.floor(Math.random()*(t-n+1))}function qb(n,t){return n+Math.random()*(t-n)}function Xb(n){return n*(.5-Math.random())}function Yb(n){n!==void 0&&(Xd=n);let t=Xd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kb(n){return n*co}function Zb(n){return n*gs}function Jb(n){return(n&n-1)===0&&n!==0}function jb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tM(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var sh={DEG2RAD:co,RAD2DEG:gs,generateUUID:Ai,clamp:oe,euclideanModulo:rh,mapLinear:Bb,inverseLerp:zb,lerp:uo,damp:Vb,pingpong:Hb,smoothstep:Gb,smootherstep:Wb,randInt:$b,randFloat:qb,randFloatSpread:Xb,seededRandom:Yb,degToRad:Kb,radToDeg:Zb,isPowerOfTwo:Jb,ceilPowerOfTwo:jb,floorPowerOfTwo:Qb,setQuaternionFromProperEuler:tM,normalize:ge,denormalize:Zn},Yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let S=Math.sqrt(_),b=Math.atan2(S,p*v);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}let y=a*v;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return du.copy(this).projectOnVector(t),this.sub(du)}reflect(t){return this.sub(du.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},du=new $,Yd=new Ln,ne=class n{constructor(t,e,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],v=r[1],_=r[4],y=r[7],S=r[2],b=r[5],T=r[8];return s[0]=o*x+a*v+l*S,s[3]=o*m+a*_+l*b,s[6]=o*p+a*y+l*T,s[1]=c*x+u*v+h*S,s[4]=c*m+u*_+h*b,s[7]=c*p+u*y+h*T,s[2]=f*x+d*v+g*S,s[5]=f*m+d*_+g*b,s[8]=f*p+d*y+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(r*c-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pu.makeScale(t,e)),this}rotate(t){return this.premultiply(pu.makeRotation(-t)),this}translate(t,e){return this.premultiply(pu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pu=new ne;function oh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function im(){let n=mo("canvas");return n.style.display="block",n}var Kd={};function xs(n){n in Kd||(Kd[n]=!0,console.warn(n))}function rm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Zd=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){let n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xe&&(r.r=Ii(r.r),r.g=Ii(r.g),r.b=Ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:t,whitePoint:i,transfer:fo,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),n}var fe=eM();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var jr,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jr===void 0&&(jr=mo("canvas")),jr.width=t.width,jr.height=t.height;let r=jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=jr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ii(e[i]/255)*255):e[i]=Ii(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nM=0,ys=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function mu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var iM=0,gu=new $,dn=class n extends si{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ji,r=ji,s=jn,o=sr,a=On,l=ci,c=n.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Ai(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Xu;dn.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,S=(p+1)/2,b=(u+f)/4,T=(h+x)/4,R=(g+m)/4;return _>y&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=T/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=R/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=R/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends si{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let r={width:t,height:e,depth:i.depth},s=new dn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends tl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},go=class extends dn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends dn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),wa.subVectors(this.max,eo),Qr.subVectors(t.a,eo),ts.subVectors(t.b,eo),es.subVectors(t.c,eo),qi.subVectors(ts,Qr),Xi.subVectors(es,ts),pr.subVectors(Qr,es);let e=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-pr.z,pr.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,pr.z,0,-pr.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-pr.y,pr.x,0];return!xu(e,Qr,ts,es,wa)||(e=[1,0,0,0,1,0,0,0,1],!xu(e,Qr,ts,es,wa))?!1:(Ta.crossVectors(qi,Xi),e=[Ta.x,Ta.y,Ta.z],xu(e,Qr,ts,es,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new $,new $,new $,new $,new $,new $,new $,new $],Xn=new $,Ma=new tr,Qr=new $,ts=new $,es=new $,qi=new $,Xi=new $,pr=new $,eo=new $,wa=new $,Ta=new $,mr=new $;function xu(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mr.fromArray(n,s);let a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=t.dot(mr),c=e.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var rM=new tr,no=new $,yu=new $,br=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):rM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(yu)),this.expandByPoint(no.copy(t.center).sub(yu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Si=new $,_u=new $,Ea=new $,Yi=new $,vu=new $,Aa=new $,Su=new $,Mr=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){_u.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(_u);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ea),a=Yi.dot(this.direction),l=-Yi.dot(Ea),c=Yi.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_u).addScaledVector(Ea,f),d}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,r,s){vu.subVectors(e,t),Aa.subVectors(i,t),Su.crossVectors(vu,Aa);let o=this.direction.dot(Su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,t);let l=a*this.direction.dot(Aa.crossVectors(Yi,Aa));if(l<0)return null;let c=a*this.direction.dot(vu.cross(Yi));if(c<0||l+c>o)return null;let u=-a*Yi.dot(Su);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class n{constructor(t,e,i,r,s,o,a,l,c,u,h,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,d,g,x,m)}set(t,e,i,r,s,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sM,t,oM)}lookAt(t,e,i){let r=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ki.crossVectors(i,wn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ki.crossVectors(i,wn)),Ki.normalize(),Ia.crossVectors(wn,Ki),r[0]=Ki.x,r[4]=Ia.x,r[8]=wn.x,r[1]=Ki.y,r[5]=Ia.y,r[9]=wn.y,r[2]=Ki.z,r[6]=Ia.z,r[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],S=i[15],b=r[0],T=r[4],R=r[8],w=r[12],M=r[1],C=r[5],D=r[9],F=r[13],L=r[2],U=r[6],O=r[10],V=r[14],k=r[3],G=r[7],K=r[11],Z=r[15];return s[0]=o*b+a*M+l*L+c*k,s[4]=o*T+a*C+l*U+c*G,s[8]=o*R+a*D+l*O+c*K,s[12]=o*w+a*F+l*V+c*Z,s[1]=u*b+h*M+f*L+d*k,s[5]=u*T+h*C+f*U+d*G,s[9]=u*R+h*D+f*O+d*K,s[13]=u*w+h*F+f*V+d*Z,s[2]=g*b+x*M+m*L+p*k,s[6]=g*T+x*C+m*U+p*G,s[10]=g*R+x*D+m*O+p*K,s[14]=g*w+x*F+m*V+p*Z,s[3]=v*b+_*M+y*L+S*k,s[7]=v*T+_*C+y*U+S*G,s[11]=v*R+_*D+y*O+S*K,s[15]=v*w+_*F+y*V+S*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+x*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,_=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,S=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,b=e*v+i*_+r*y+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=v*T,t[1]=(x*f*s-h*m*s-x*r*d+i*m*d+h*r*p-i*f*p)*T,t[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*T,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*T,t[4]=_*T,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*T,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*T,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*T,t[8]=y*T,t[9]=(g*h*s-u*x*s-g*i*d+e*x*d+u*i*p-e*h*p)*T,t[10]=(o*x*s-g*a*s+g*i*c-e*x*c-o*i*p+e*a*p)*T,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*d-e*a*d)*T,t[12]=S*T,t[13]=(u*x*r-g*h*r+g*i*f-e*x*f-u*i*m+e*h*m)*T,t[14]=(g*a*r-o*x*r-g*i*l+e*x*l+o*i*m-e*a*m)*T,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,m=o*h,p=a*h,v=l*c,_=l*u,y=l*h,S=i.x,b=i.y,T=i.z;return r[0]=(1-(x+p))*S,r[1]=(d+y)*S,r[2]=(g-_)*S,r[3]=0,r[4]=(d-y)*b,r[5]=(1-(f+p))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=ns.set(r[0],r[1],r[2]).length(),o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Yn.copy(this);let c=1/s,u=1/o,h=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,e.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Jn,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Jn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===po)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Jn,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-r),f=-(e+t)/(e-t),d=-(i+r)/(i-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Jn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===po)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ns=new $,Yn=new ke,sM=new $(0,0,0),oM=new $(1,1,1),Ki=new $,Ia=new $,wn=new $,jd=new ke,Qd=new Ln,ai=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},aM=0,tp=new $,is=new Ln,bi=new ke,Ca=new $,io=new $,lM=new $,cM=new Ln,ep=new $(1,0,0),np=new $(0,1,0),ip=new $(0,0,1),rp={type:"added"},uM={type:"removed"},rs={type:"childadded",child:null},bu={type:"childremoved",child:null},pn=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new ai,i=new Ln,r=new $(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new ne}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(ep,t)}rotateY(t){return this.rotateOnAxis(np,t)}rotateZ(t){return this.rotateOnAxis(ip,t)}translateOnAxis(t,e){return tp.copy(t).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ep,t)}translateY(t){return this.translateOnAxis(np,t)}translateZ(t){return this.translateOnAxis(ip,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ca.copy(t):Ca.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(io,Ca,this.up):bi.lookAt(Ca,io,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),is.setFromRotationMatrix(bi),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rp),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uM),bu.child=t,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rp),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,lM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,cM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};pn.DEFAULT_UP=new $(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new $,Mi=new $,Mu=new $,wi=new $,ss=new $,os=new $,sp=new $,wu=new $,Tu=new $,Eu=new $,Au=new De,Iu=new De,Cu=new De,Ti=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Kn.subVectors(t,e),r.cross(Kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Kn.subVectors(r,e),Mi.subVectors(i,e),Mu.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Mi),l=Kn.dot(Mu),c=Mi.dot(Mi),u=Mi.dot(Mu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Au.setScalar(0),Iu.setScalar(0),Cu.setScalar(0),Au.fromBufferAttribute(t,e),Iu.fromBufferAttribute(t,i),Cu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Au,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Cu,s.z),o}static isFrontFacing(t,e,i,r){return Kn.subVectors(i,e),Mi.subVectors(t,e),Kn.cross(Mi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Kn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;ss.subVectors(r,i),os.subVectors(s,i),wu.subVectors(t,i);let l=ss.dot(wu),c=os.dot(wu);if(l<=0&&c<=0)return e.copy(i);Tu.subVectors(t,r);let u=ss.dot(Tu),h=os.dot(Tu);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ss,o);Eu.subVectors(t,s);let d=ss.dot(Eu),g=os.dot(Eu);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(os,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return sp.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(sp,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Ru(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ue=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=fe.workingColorSpace){if(t=rh(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Ru(o,s,t+1/3),this.g=Ru(o,s,t),this.b=Ru(o,s,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let i=sm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return fe.workingToColorSpace(Je.copy(this),t),Math.round(oe(Je.r*255,0,255))*65536+Math.round(oe(Je.g*255,0,255))*256+Math.round(oe(Je.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Je.copy(this),e);let i=Je.r,r=Je.g,s=Je.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=En){fe.workingToColorSpace(Je.copy(this),t);let e=Je.r,i=Je.g,r=Je.b;return t!==En?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Ra);let i=uo(Zi.h,Ra.h,e),r=uo(Zi.s,Ra.s,e),s=uo(Zi.l,Ra.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new ue;ue.NAMES=sm;var hM=0,Ri=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=_r,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ni=class extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new $,Na=new Yt,fM=0,fn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}};var yo=class extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var _o=class extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ze=class extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}},dM=0,Dn=new ke,Nu=new pn,as=new $,Tn=new tr,ro=new tr,$e=new $,Qe=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?_o:yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ne().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Nu.lookAt(t),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Tn.min,ro.min),Tn.expandByPoint($e),$e.addVectors(Tn.max,ro.max),Tn.expandByPoint($e)):(Tn.expandByPoint(ro.min),Tn.expandByPoint(ro.max))}Tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),$e.add(as)),r=Math.max(r,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new $,l[R]=new $;let c=new $,u=new $,h=new $,f=new Yt,d=new Yt,g=new Yt,x=new $,m=new $;function p(R,w,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(x),a[w].add(x),a[M].add(x),l[R].add(m),l[w].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,w=v.length;R<w;++R){let M=v[R],C=M.start,D=M.count;for(let F=C,L=C+D;F<L;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new $,y=new $,S=new $,b=new $;function T(R){S.fromBufferAttribute(r,R),b.copy(S);let w=a[R];_.copy(w),_.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(b,w);let C=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,C)}for(let R=0,w=v.length;R<w;++R){let M=v[R],C=M.start,D=M.count;for(let F=C,L=C+D;F<L;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},op=new ke,gr=new Mr,Pa=new br,ap=new $,Da=new $,Fa=new $,ka=new $,Pu=new $,La=new $,lp=new $,Ua=new $,tn=class extends pn{constructor(t=new Qe,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Pu.fromBufferAttribute(h,t),o?La.addScaledVector(Pu,u):La.addScaledVector(Pu.sub(e),u))}e.add(La)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),gr.copy(t.ray).recast(t.near),!(Pa.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Pa,ap)===null||gr.origin.distanceToSquared(ap)>(t.far-t.near)**2))&&(op.copy(s).invert(),gr.copy(t.ray).applyMatrix4(op),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gr)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,S=_;y<S;y+=3){let b=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);r=Oa(this,p,t,i,c,u,h,b,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Oa(this,o,t,i,c,u,h,v,_,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,S=_;y<S;y+=3){let b=y,T=y+1,R=y+2;r=Oa(this,p,t,i,c,u,h,b,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,_=m+1,y=m+2;r=Oa(this,o,t,i,c,u,h,v,_,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function pM(n,t,e,i,r,s,o,a){let l;if(t.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Ci,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:n}}function Oa(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Da),n.getVertexPosition(l,Fa),n.getVertexPosition(c,ka);let u=pM(n,t,e,i,Da,Fa,ka,lp);if(u){let h=new $;Ti.getBarycoord(lp,Da,Fa,ka,h),r&&(u.uv=Ti.getInterpolatedAttribute(r,a,l,c,h,new Yt)),s&&(u.uv1=Ti.getInterpolatedAttribute(s,a,l,c,h,new Yt)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,l,c,h,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Ti.getNormal(Da,Fa,ka,f.normal),u.face=f,u.barycoord=h}return u}var _s=class n extends Qe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(h,2));function g(x,m,p,v,_,y,S,b,T,R,w){let M=y/T,C=S/R,D=y/2,F=S/2,L=b/2,U=T+1,O=R+1,V=0,k=0,G=new $;for(let K=0;K<O;K++){let Z=K*C-F;for(let nt=0;nt<U;nt++){let it=nt*M-D;G[x]=it*v,G[m]=Z*_,G[p]=L,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=b>0?1:-1,u.push(G.x,G.y,G.z),h.push(nt/T),h.push(1-K/R),V+=1}}for(let K=0;K<R;K++)for(let Z=0;Z<T;Z++){let nt=f+Z+U*K,it=f+Z+U*(K+1),lt=f+(Z+1)+U*(K+1),st=f+(Z+1)+U*K;l.push(nt,it,st),l.push(it,lt,st),k+=6}a.addGroup(d,k,w),d+=k,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ir(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function en(n){let t={};for(let e=0;e<n.length;e++){let i=Ir(n[e]);for(let r in i)t[r]=i[r]}return t}function mM(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ah(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var om={clone:Ir,merge:en},gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=mM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},vo=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new $,cp=new Yt,up=new Yt,je=class extends vo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,cp,up),e.subVectors(up,cp)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,nl=class extends pn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new je(ls,cs,t,e);r.layers=this.layers,this.add(r);let s=new je(ls,cs,t,e);s.layers=this.layers,this.add(s);let o=new je(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new je(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new je(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new je(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},So=class extends dn{constructor(t=[],e=Er,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},il=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new So(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _s(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Pi});s.uniforms.tEquirect.value=e;let o=new tn(r,s),a=e.minFilter;return e.minFilter===sr&&(e.minFilter=jn),new nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},Ei=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yM={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var bo=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},rl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new $,Mo=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),r=ge(r,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ss=class extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,so=new $,hs=new $,fs=new $,ds=new Yt,oo=new Yt,am=new ke,Ba=new $,ao=new $,za=new $,hp=new Yt,Du=new Yt,fp=new Yt,wo=class extends pn{constructor(t=new Ss){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rl(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Mo(i,3,0,!1)),us.setAttribute("uv",new Mo(i,2,3,!1))}this.geometry=us,this.material=t,this.center=new Yt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),am.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-fs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Va(Ba.set(-.5,-.5,0),fs,o,hs,r,s),Va(ao.set(.5,-.5,0),fs,o,hs,r,s),Va(za.set(.5,.5,0),fs,o,hs,r,s),hp.set(0,0),Du.set(1,0),fp.set(1,1);let a=t.ray.intersectTriangle(Ba,ao,za,!1,so);if(a===null&&(Va(ao.set(-.5,.5,0),fs,o,hs,r,s),Du.set(0,1),a=t.ray.intersectTriangle(Ba,za,ao,!1,so),a===null))return;let l=t.ray.origin.distanceTo(so);l<t.near||l>t.far||e.push({distance:l,point:so.clone(),uv:Ti.getInterpolation(so,Ba,ao,za,hp,Du,fp,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Va(n,t,e,i,r,s){ds.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(oo.x=s*ds.x-r*ds.y,oo.y=r*ds.x+s*ds.y):oo.copy(ds),n.copy(t),n.x+=oo.x,n.y+=oo.y,n.applyMatrix4(am)}var Fu=new $,_M=new $,vM=new ne,Fn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Fu.subVectors(i,e).cross(_M.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vM.getNormalMatrix(t),r=this.coplanarPoint(Fu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xr=new br,SM=new Yt(.5,.5),Ha=new $,To=class{constructor(t=new Fn,e=new Fn,i=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],v=s[12],_=s[13],y=s[14],S=s[15];if(r[0].setComponents(c-o,d-u,p-g,S-v).normalize(),r[1].setComponents(c+o,d+u,p+g,S+v).normalize(),r[2].setComponents(c+a,d+h,p+x,S+_).normalize(),r[3].setComponents(c-a,d-h,p-x,S-_).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,d-f,p-m,S-y).normalize();else if(r[4].setComponents(c-l,d-f,p-m,S-y).normalize(),e===Jn)r[5].setComponents(c+l,d+f,p+m,S+y).normalize();else if(e===po)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);let e=SM.distanceTo(t.center);return xr.radius=.7071067811865476+e,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ha.x=r.normal.x>0?t.max.x:t.min.x,Ha.y=r.normal.y>0?t.max.y:t.min.y,Ha.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wr=class extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sl=new $,ol=new $,dp=new ke,lo=new Mr,Ga=new br,ku=new $,pp=new $,bs=class extends pn{constructor(t=new Qe,e=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)sl.fromBufferAttribute(e,r-1),ol.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=sl.distanceTo(ol);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,t.ray.intersectsSphere(Ga)===!1)return;dp.copy(r).invert(),lo.copy(t.ray).applyMatrix4(dp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),v=u.getX(x+1),_=Wa(this,t,lo,l,p,v,x);_&&e.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Wa(this,t,lo,l,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Wa(this,t,lo,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Wa(this,t,lo,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wa(n,t,e,i,r,s,o){let a=n.geometry.attributes.position;if(sl.fromBufferAttribute(a,r),ol.fromBufferAttribute(a,s),e.distanceSqToSegment(sl,ol,ku,pp)>i)return;ku.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ku);if(!(c<t.near||c>t.far))return{distance:c,point:pp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Eo=class extends bs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Ao=class extends dn{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Io=class extends dn{constructor(t,e,i=or,r,s,o,a=kn,l=kn,c,u=ms,h=1){if(u!==ms&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Co=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ro=class n extends Qe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*f-o;for(let _=0;_<c;_++){let y=_*h-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),S=v+1+c*(p+1),b=v+1+c*p;d.push(_,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var No=class n extends Qe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new $,f=new $,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let b=S/e;h.x=-t*Math.cos(r+b*s)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(r+b*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+y,1-_),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let _=u[p][v+1],y=u[p][v],S=u[p+1][v],b=u[p+1][v+1];(p!==0||o>0)&&d.push(_,y,b),(p!==i-1||l<Math.PI)&&d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Po=class n extends Qe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new $,h=new $,f=new $;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,v=(r+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var al=class extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ll=class extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $a(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function bM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Tr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Tr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lu,endingEnd:Lu}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:s=t,a=2*e-i;break;case Ou:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:o=t,l=2*i-e;break;case Ou:o=1,l=i+r[1]-r[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(r-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+v*o[c+S]+_*o[l+S]+y*o[h+S];return s}},ul=class extends Tr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},hl=class extends Tr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$a(e,this.TimeBufferType),this.values=$a(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$a(t.times,Array),values:$a(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&bM(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ja;var er=class extends An{constructor(t,e,i){super(t,e,i)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=ho;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends An{constructor(t,e,i,r){super(t,e,i,r)}};fl.prototype.ValueTypeName="color";var dl=class extends An{constructor(t,e,i,r){super(t,e,i,r)}};dl.prototype.ValueTypeName="number";var pl=class extends Tr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ln.slerpFlat(s,0,o,c-a,o,c,l);return s}},Do=class extends An{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends An{constructor(t,e,i){super(t,e,i)}};nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=ho;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends An{constructor(t,e,i,r){super(t,e,i,r)}};ml.prototype.ValueTypeName="vector";var gl=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},lm=new gl,xl=class{constructor(t){this.manager=t!==void 0?t:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yl=class extends vo{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var _l=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",MM=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",wM="[^"+lh.replace("\\.","")+"]",TM=/((?:WC+[\/:])*)/.source.replace("WC",ch),EM=/(WCOD+)?/.source.replace("WCOD",wM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),IM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),CM=new RegExp("^"+TM+EM+AM+IM+"$"),RM=["material","materials","bones","map"],zu=class{constructor(t,e,i){let r=i||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(MM,"")}static parseTrackName(t){let e=CM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);RM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=zu;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YD=new Float32Array(1);var Ms=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fo=class extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function uh(n,t,e,i){let r=NM(i);switch(e){case ju:return n*t;case th:return n*t/r.components*r.byteLength;case Dl:return n*t/r.components*r.byteLength;case eh:return n*t*2/r.components*r.byteLength;case Fl:return n*t*2/r.components*r.byteLength;case Qu:return n*t*3/r.components*r.byteLength;case On:return n*t*4/r.components*r.byteLength;case kl:return n*t*4/r.components*r.byteLength;case Uo:case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Bl:return Math.max(n,16)*Math.max(t,8)/4;case Ll:case Ol:return Math.max(n,8)*Math.max(t,8)/2;case zl:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ic:case rc:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function NM(n){switch(n){case ci:case Yu:return{byteLength:1,components:1};case ws:case Ku:case Ts:return{byteLength:2,components:1};case Nl:case Pl:return{byteLength:2,components:4};case or:case Rl:case ui:return{byteLength:4,components:1};case Zu:case Ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Pm(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function DM(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",hw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ew=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ET=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:FM,alphahash_pars_fragment:kM,alphamap_fragment:LM,alphamap_pars_fragment:UM,alphatest_fragment:OM,alphatest_pars_fragment:BM,aomap_fragment:zM,aomap_pars_fragment:VM,batching_pars_vertex:HM,batching_vertex:GM,begin_vertex:WM,beginnormal_vertex:$M,bsdfs:qM,iridescence_fragment:XM,bumpmap_pars_fragment:YM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:jM,color_fragment:QM,color_pars_fragment:tw,color_pars_vertex:ew,color_vertex:nw,common:iw,cube_uv_reflection_fragment:rw,defaultnormal_vertex:sw,displacementmap_pars_vertex:ow,displacementmap_vertex:aw,emissivemap_fragment:lw,emissivemap_pars_fragment:cw,colorspace_fragment:uw,colorspace_pars_fragment:hw,envmap_fragment:fw,envmap_common_pars_fragment:dw,envmap_pars_fragment:pw,envmap_pars_vertex:mw,envmap_physical_pars_fragment:Ew,envmap_vertex:gw,fog_vertex:xw,fog_pars_vertex:yw,fog_fragment:_w,fog_pars_fragment:vw,gradientmap_pars_fragment:Sw,lightmap_pars_fragment:bw,lights_lambert_fragment:Mw,lights_lambert_pars_fragment:ww,lights_pars_begin:Tw,lights_toon_fragment:Aw,lights_toon_pars_fragment:Iw,lights_phong_fragment:Cw,lights_phong_pars_fragment:Rw,lights_physical_fragment:Nw,lights_physical_pars_fragment:Pw,lights_fragment_begin:Dw,lights_fragment_maps:Fw,lights_fragment_end:kw,logdepthbuf_fragment:Lw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:Bw,map_fragment:zw,map_pars_fragment:Vw,map_particle_fragment:Hw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Ww,metalnessmap_pars_fragment:$w,morphinstance_vertex:qw,morphcolor_vertex:Xw,morphnormal_vertex:Yw,morphtarget_pars_vertex:Kw,morphtarget_vertex:Zw,normal_fragment_begin:Jw,normal_fragment_maps:jw,normal_pars_fragment:Qw,normal_pars_vertex:tT,normal_vertex:eT,normalmap_pars_fragment:nT,clearcoat_normal_fragment_begin:iT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:sT,iridescence_pars_fragment:oT,opaque_fragment:aT,packing:lT,premultiplied_alpha_fragment:cT,project_vertex:uT,dithering_fragment:hT,dithering_pars_fragment:fT,roughnessmap_fragment:dT,roughnessmap_pars_fragment:pT,shadowmap_pars_fragment:mT,shadowmap_pars_vertex:gT,shadowmap_vertex:xT,shadowmask_pars_fragment:yT,skinbase_vertex:_T,skinning_pars_vertex:vT,skinning_vertex:ST,skinnormal_vertex:bT,specularmap_fragment:MT,specularmap_pars_fragment:wT,tonemapping_fragment:TT,tonemapping_pars_fragment:ET,transmission_fragment:AT,transmission_pars_fragment:IT,uv_pars_fragment:CT,uv_pars_vertex:RT,uv_vertex:NT,worldpos_vertex:PT,background_vert:DT,background_frag:FT,backgroundCube_vert:kT,backgroundCube_frag:LT,cube_vert:UT,cube_frag:OT,depth_vert:BT,depth_frag:zT,distanceRGBA_vert:VT,distanceRGBA_frag:HT,equirect_vert:GT,equirect_frag:WT,linedashed_vert:$T,linedashed_frag:qT,meshbasic_vert:XT,meshbasic_frag:YT,meshlambert_vert:KT,meshlambert_frag:ZT,meshmatcap_vert:JT,meshmatcap_frag:jT,meshnormal_vert:QT,meshnormal_frag:tE,meshphong_vert:eE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:rE,meshtoon_vert:sE,meshtoon_frag:oE,points_vert:aE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:hE,sprite_frag:fE},bt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},hi={basic:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ue(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:en([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:en([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ue(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:en([bt.points,bt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:en([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:en([bt.common,bt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:en([bt.sprite,bt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:en([bt.common,bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:en([bt.lights,bt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};hi.physical={uniforms:en([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var uc={r:0,b:0,g:0},Cr=new ai,dE=new ke;function pE(n,t,e,i,r,s,o){let a=new ue(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,S=g(_);S===null?p(a,l):S&&S.isColor&&(p(S,1),y=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,y){let S=g(y);S&&(S.isCubeTexture||S.mapping===ko)?(u===void 0&&(u=new tn(new _s(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ir(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cr.copy(y.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(Cr)),u.material.toneMapped=fe.getTransfer(S.colorSpace)!==xe,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new tn(new Ro(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ir(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=fe.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(uc,ah(n)),i.buffers.color.setClear(uc.r,uc.g,uc.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m,dispose:v}}function mE(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,C,D,F,L){let U=!1,O=h(F,D,C);s!==O&&(s=O,c(s.object)),U=d(M,F,D,L),U&&g(M,F,D,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(M,C,D,F),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,C,D){let F=D.wireframe===!0,L=i[M.id];L===void 0&&(L={},i[M.id]=L);let U=L[C.id];U===void 0&&(U={},L[C.id]=U);let O=U[F];return O===void 0&&(O=f(l()),U[F]=O),O}function f(M){let C=[],D=[],F=[];for(let L=0;L<e;L++)C[L]=0,D[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,C,D,F){let L=s.attributes,U=C.attributes,O=0,V=D.getAttributes();for(let k in V)if(V[k].location>=0){let K=L[k],Z=U[k];if(Z===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),K===void 0||K.attribute!==Z||Z&&K.data!==Z.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function g(M,C,D,F){let L={},U=C.attributes,O=0,V=D.getAttributes();for(let k in V)if(V[k].location>=0){let K=U[k];K===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));let Z={};Z.attribute=K,K&&K.data&&(Z.data=K.data),L[k]=Z,O++}s.attributes=L,s.attributesNum=O,s.index=F}function x(){let M=s.newAttributes;for(let C=0,D=M.length;C<D;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let D=s.newAttributes,F=s.enabledAttributes,L=s.attributeDivisors;D[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),L[M]!==C&&(n.vertexAttribDivisor(M,C),L[M]=C)}function v(){let M=s.newAttributes,C=s.enabledAttributes;for(let D=0,F=C.length;D<F;D++)C[D]!==M[D]&&(n.disableVertexAttribArray(D),C[D]=0)}function _(M,C,D,F,L,U,O){O===!0?n.vertexAttribIPointer(M,C,D,L,U):n.vertexAttribPointer(M,C,D,F,L,U)}function y(M,C,D,F){x();let L=F.attributes,U=D.getAttributes(),O=C.defaultAttributeValues;for(let V in U){let k=U[V];if(k.location>=0){let G=L[V];if(G===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){let K=G.normalized,Z=G.itemSize,nt=t.get(G);if(nt===void 0)continue;let it=nt.buffer,lt=nt.type,st=nt.bytesPerElement,H=lt===n.INT||lt===n.UNSIGNED_INT||G.gpuType===Rl;if(G.isInterleavedBufferAttribute){let Y=G.data,rt=Y.stride,ct=G.offset;if(Y.isInstancedInterleavedBuffer){for(let ut=0;ut<k.locationSize;ut++)p(k.location+ut,Y.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ut=0;ut<k.locationSize;ut++)m(k.location+ut);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ut=0;ut<k.locationSize;ut++)_(k.location+ut,Z/k.locationSize,lt,K,rt*st,(ct+Z/k.locationSize*ut)*st,H)}else{if(G.isInstancedBufferAttribute){for(let Y=0;Y<k.locationSize;Y++)p(k.location+Y,G.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Y=0;Y<k.locationSize;Y++)m(k.location+Y);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Y=0;Y<k.locationSize;Y++)_(k.location+Y,Z/k.locationSize,lt,K,Z*st,Z/k.locationSize*Y*st,H)}}else if(O!==void 0){let K=O[V];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(k.location,K);break;case 3:n.vertexAttrib3fv(k.location,K);break;case 4:n.vertexAttrib4fv(k.location,K);break;default:n.vertexAttrib1fv(k.location,K)}}}}v()}function S(){R();for(let M in i){let C=i[M];for(let D in C){let F=C[D];for(let L in F)u(F[L].object),delete F[L];delete C[D]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let D in C){let F=C[D];for(let L in F)u(F[L].object),delete F[L];delete C[D]}delete i[M.id]}function T(M){for(let C in i){let D=i[C];if(D[M.id]===void 0)continue;let F=D[M.id];for(let L in F)u(F[L].object),delete F[L];delete D[M.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function gE(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xE(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==On&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ci&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,maxSamples:b}}function yE(n){let t=this,e=null,i=0,r=!1,s=!1,o=new Fn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let v=s?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=u(g,f,_,d);for(let S=0;S!==_;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function _E(n){let t=new WeakMap;function e(o,a){return a===Al?o.mapping=Er:a===Il&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Al||a===Il)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new il(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Cs=4,cm=[.125,.215,.35,.446,.526,.582],Pr=20,hh=new yl,um=new ue,fh=null,dh=0,ph=0,mh=!1,Nr=(1+Math.sqrt(5))/2,Is=1/Nr,hm=[new $(-Nr,Is,0),new $(Nr,Is,0),new $(-Is,0,Nr),new $(Is,0,Nr),new $(0,Nr,-Is),new $(0,Nr,Is),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],vE=new $,dc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=vE}=s;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,hc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Er||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ts,format:On,colorSpace:Sr,depthBuffer:!1},r=fm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SE(s)),this._blurMaterial=bE(s,t,e)}return r}_compileMaterial(t){let e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,hh)}_sceneToCubeUV(t,e,i,r,s){let l=new je(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(um),h.toneMapping=Di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new Ni({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new tn(new _s,x),p=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,p=!0):(x.color.copy(um),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));let S=this._cubeSize;hc(r,y*S,_>2?S:0,S,S),h.setRenderTarget(r),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Er||t.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;hc(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,hh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hm[(r-s-1)%hm.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new tn(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);let p=[],v=0;for(let T=0;T<Pr;++T){let R=T/x,w=Math.exp(-R*R/2);p.push(w),T===0?v+=w:T<m&&(v+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let y=this._sizeLods[r],S=3*y*(r>_-Cs?r-_+Cs:0),b=4*(this._cubeSize-y);hc(e,S,b,3*y,2*y),l.setRenderTarget(e),l.render(h,hh)}};function SE(n){let t=[],e=[],i=[],r=n,s=n-Cs+1+cm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Cs?l=cm[o-n+Cs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),_=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let b=0;b<d;b++){let T=b%3*2/3-1,R=b>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(w,x*g*b),_.set(f,m*g*b);let M=[b,b,b,b,b,b];y.set(M,p*g*b)}let S=new Qe;S.setAttribute("position",new fn(v,x)),S.setAttribute("uv",new fn(_,m)),S.setAttribute("faceIndex",new fn(y,p)),t.push(S),r>Cs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fm(n,t,e){let i=new oi(n,t,e);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function bE(n,t,e){let i=new Float32Array(Pr),r=new $(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function dm(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function pm(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ME(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Al||l===Il,u=l===Er||l===Ar;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new dc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wE(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TE(n,t,e,i){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){let S=v[_+0],b=v[_+1],T=v[_+2];f.push(S,b,b,T,T,S)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let S=_+0,b=_+1,T=_+2;f.push(S,b,b,T,T,S)}}else return;let m=new(oh(f)?_o:yo)(f,1);m.version=x;let p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function EE(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function AE(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function IE(n,t,e){let i=new WeakMap,r=new De;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let w=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*S*4*h),T=new go(b,y,S,h);T.type=ui,T.needsUpdate=!0;let R=_*4;for(let M=0;M<h;M++){let C=m[M],D=p[M],F=v[M],L=y*S*4*M;for(let U=0;U<C.count;U++){let O=U*R;d===!0&&(r.fromBufferAttribute(C,U),b[L+O+0]=r.x,b[L+O+1]=r.y,b[L+O+2]=r.z,b[L+O+3]=0),g===!0&&(r.fromBufferAttribute(D,U),b[L+O+4]=r.x,b[L+O+5]=r.y,b[L+O+6]=r.z,b[L+O+7]=0),x===!0&&(r.fromBufferAttribute(F,U),b[L+O+8]=r.x,b[L+O+9]=r.y,b[L+O+10]=r.z,b[L+O+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new Yt(y,S)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function CE(n,t,e,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Dm=new dn,mm=new Io(1,1),Fm=new go,km=new el,Lm=new So,gm=[],xm=[],ym=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function Ns(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mc(n,t){let e=xm[t];e===void 0&&(e=new Int32Array(t),xm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function RE(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function NE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function PE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function DE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function FE(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,i))return;vm.set(i),n.uniformMatrix2fv(this.addr,!1,vm),He(e,i)}}function kE(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,i))return;_m.set(i),n.uniformMatrix3fv(this.addr,!1,_m),He(e,i)}}function LE(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,i))return;ym.set(i),n.uniformMatrix4fv(this.addr,!1,ym),He(e,i)}}function UE(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function OE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function BE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function zE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function VE(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function HE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function GE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function WE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function $E(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mm.compareFunction=nh,s=mm):s=Dm,e.setTexture2D(t||s,r)}function qE(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||km,r)}function XE(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Lm,r)}function YE(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Fm,r)}function KE(n){switch(n){case 5126:return RE;case 35664:return NE;case 35665:return PE;case 35666:return DE;case 35674:return FE;case 35675:return kE;case 35676:return LE;case 5124:case 35670:return UE;case 35667:case 35671:return OE;case 35668:case 35672:return BE;case 35669:case 35673:return zE;case 5125:return VE;case 36294:return HE;case 36295:return GE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return YE}}function ZE(n,t){n.uniform1fv(this.addr,t)}function JE(n,t){let e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function jE(n,t){let e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function QE(n,t){let e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function t1(n,t){let e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function e1(n,t){let e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function n1(n,t){let e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function i1(n,t){n.uniform1iv(this.addr,t)}function r1(n,t){n.uniform2iv(this.addr,t)}function s1(n,t){n.uniform3iv(this.addr,t)}function o1(n,t){n.uniform4iv(this.addr,t)}function a1(n,t){n.uniform1uiv(this.addr,t)}function l1(n,t){n.uniform2uiv(this.addr,t)}function c1(n,t){n.uniform3uiv(this.addr,t)}function u1(n,t){n.uniform4uiv(this.addr,t)}function h1(n,t,e){let i=this.cache,r=t.length,s=mc(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Dm,s[o])}function f1(n,t,e){let i=this.cache,r=t.length,s=mc(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||km,s[o])}function d1(n,t,e){let i=this.cache,r=t.length,s=mc(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Lm,s[o])}function p1(n,t,e){let i=this.cache,r=t.length,s=mc(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),He(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Fm,s[o])}function m1(n){switch(n){case 5126:return ZE;case 35664:return JE;case 35665:return jE;case 35666:return QE;case 35674:return t1;case 35675:return e1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return p1}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=KE(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m1(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},gh=/(\w+)(\])?(\[|\.)?/g;function Sm(n,t){n.seq.push(t),n.map[t.id]=t}function g1(n,t,e){let i=n.name,r=i.length;for(gh.lastIndex=0;;){let s=gh.exec(i),o=gh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sm(e,c===void 0?new xh(a,n,t):new yh(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new _h(a),Sm(e,h)),e=h}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);g1(s,o,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function bm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var x1=37297,y1=0;function _1(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Mm=new ne;function v1(n){fe._getMatrix(Mm,fe.workingColorSpace,n);let t=`mat3( ${Mm.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(n)){case fo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_1(n.getShaderSource(t),a)}else return s}function S1(n,t){let e=v1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b1(n,t){let e;switch(t){case Op:e="Linear";break;case Bp:e="Reinhard";break;case zp:e="Cineon";break;case Vp:e="ACESFilmic";break;case Gp:e="AgX";break;case Wp:e="Neutral";break;case Hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new $;function M1(){fe.getLuminanceCoefficients(fc);let n=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function T1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function E1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Vo(n){return n!==""}function Tm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Em(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(n){return n.replace(A1,C1)}var I1=new Map;function C1(n,t){let e=re[t];if(e===void 0){let i=I1.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vh(e)}var R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(n){return n.replace(R1,N1)}function N1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Im(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function P1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function D1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Ar:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function k1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Lp:t="ENVMAP_BLENDING_MIX";break;case Up:t="ENVMAP_BLENDING_ADD";break}return t}function L1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function U1(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=P1(e),c=D1(e),u=F1(e),h=k1(e),f=L1(e),d=w1(e),g=T1(s),x=r.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vo).join(`
`),p.length>0&&(p+=`
`)):(m=[Im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),p=[Im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?re.tonemapping_pars_fragment:"",e.toneMapping!==Di?b1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,S1("linearToOutputTexel",e.outputColorSpace),M1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vo).join(`
`)),o=vh(o),o=Tm(o,e),o=Em(o,e),a=vh(a),a=Tm(a,e),a=Em(a,e),o=Am(o),a=Am(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,S=bm(r,r.VERTEX_SHADER,_),b=bm(r,r.FRAGMENT_SHADER,y);r.attachShader(x,S),r.attachShader(x,b),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(C){if(n.debug.checkShaderErrors){let D=r.getProgramInfoLog(x)||"",F=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(b)||"",U=D.trim(),O=F.trim(),V=L.trim(),k=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,S,b);else{let K=wm(r,S,"vertex"),Z=wm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+K+`
`+Z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||V==="")&&(G=!1);G&&(C.diagnostics={runnable:k,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(S),r.deleteShader(b),R=new Rs(r,x),w=E1(r,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,x1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var O1=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new bh(t),e.set(t,i)),i}},bh=class{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}};function B1(n,t,e,i,r,s,o){let a=new xo,l=new Sh,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,D,F){let L=D.fog,U=F.geometry,O=w.isMeshStandardMaterial?D.environment:null,V=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),k=V&&V.mapping===ko?V.image.height:null,G=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Z=K!==void 0?K.length:0,nt=0;U.morphAttributes.position!==void 0&&(nt=1),U.morphAttributes.normal!==void 0&&(nt=2),U.morphAttributes.color!==void 0&&(nt=3);let it,lt,st,H;if(G){let pe=hi[G];it=pe.vertexShader,lt=pe.fragmentShader}else it=w.vertexShader,lt=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),H=l.getFragmentShaderID(w);let Y=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),ct=F.isInstancedMesh===!0,ut=F.isBatchedMesh===!0,St=!!w.map,Zt=!!w.matcap,P=!!V,Xt=!!w.aoMap,At=!!w.lightMap,vt=!!w.bumpMap,xt=!!w.normalMap,Wt=!!w.displacementMap,It=!!w.emissiveMap,Lt=!!w.metalnessMap,ve=!!w.roughnessMap,ce=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,X=w.iridescence>0,et=w.sheen>0,at=w.transmission>0,Q=ce&&!!w.anisotropyMap,Nt=N&&!!w.clearcoatMap,gt=N&&!!w.clearcoatNormalMap,Pt=N&&!!w.clearcoatRoughnessMap,Ut=X&&!!w.iridescenceMap,ft=X&&!!w.iridescenceThicknessMap,wt=et&&!!w.sheenColorMap,$t=et&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,Tt=!!w.specularColorMap,ie=!!w.specularIntensityMap,z=at&&!!w.transmissionMap,mt=at&&!!w.thicknessMap,_t=!!w.gradientMap,Rt=!!w.alphaMap,dt=w.alphaTest>0,ot=!!w.alphaHash,Ft=!!w.extensions,ee=Di;w.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ee=n.toneMapping);let Te={shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:lt,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:H,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:ut,batchingColor:ut&&F._colorsTexture!==null,instancing:ct,instancingColor:ct&&F.instanceColor!==null,instancingMorph:ct&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Sr,alphaToCoverage:!!w.alphaToCoverage,map:St,matcap:Zt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:k,aoMap:Xt,lightMap:At,bumpMap:vt,normalMap:xt,displacementMap:f&&Wt,emissiveMap:It,normalMapObjectSpace:xt&&w.normalMapType===Kp,normalMapTangentSpace:xt&&w.normalMapType===Yp,metalnessMap:Lt,roughnessMap:ve,anisotropy:ce,anisotropyMap:Q,clearcoat:N,clearcoatMap:Nt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Pt,dispersion:E,iridescence:X,iridescenceMap:Ut,iridescenceThicknessMap:ft,sheen:et,sheenColorMap:wt,sheenRoughnessMap:$t,specularMap:Ot,specularColorMap:Tt,specularIntensityMap:ie,transmission:at,transmissionMap:z,thicknessMap:mt,gradientMap:_t,opaque:w.transparent===!1&&w.blending===_r&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:dt,alphaHash:ot,combine:w.combine,mapUv:St&&x(w.map.channel),aoMapUv:Xt&&x(w.aoMap.channel),lightMapUv:At&&x(w.lightMap.channel),bumpMapUv:vt&&x(w.bumpMap.channel),normalMapUv:xt&&x(w.normalMap.channel),displacementMapUv:Wt&&x(w.displacementMap.channel),emissiveMapUv:It&&x(w.emissiveMap.channel),metalnessMapUv:Lt&&x(w.metalnessMap.channel),roughnessMapUv:ve&&x(w.roughnessMap.channel),anisotropyMapUv:Q&&x(w.anisotropyMap.channel),clearcoatMapUv:Nt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:$t&&x(w.sheenRoughnessMap.channel),specularMapUv:Ot&&x(w.specularMap.channel),specularColorMapUv:Tt&&x(w.specularColorMap.channel),specularIntensityMapUv:ie&&x(w.specularIntensityMap.channel),transmissionMapUv:z&&x(w.transmissionMap.channel),thicknessMapUv:mt&&x(w.thicknessMap.channel),alphaMapUv:Rt&&x(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xt||ce),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(St||Rt),fog:!!L,useFog:w.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:St&&w.map.isVideoTexture===!0&&fe.getTransfer(w.map.colorSpace)===xe,decodeVideoTextureEmissive:It&&w.emissiveMap.isVideoTexture===!0&&fe.getTransfer(w.emissiveMap.colorSpace)===xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Un,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(v(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=g[w.type],C;if(M){let D=hi[M];C=om.clone(D.uniforms)}else C=w.uniforms;return C}function S(w,M){let C;for(let D=0,F=u.length;D<F;D++){let L=u[D];if(L.cacheKey===M){C=L,++C.usedTimes;break}}return C===void 0&&(C=new U1(n,M,w,s),u.push(C)),C}function b(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:R}}function z1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function V1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rm(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,d,g,x,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||V1),i.length>1&&i.sort(f||Cm),r.length>1&&r.sort(f||Cm)}function u(){for(let h=t,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function H1(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new Rm,n.set(i,[o])):r>=s.length?(o=new Rm,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function G1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ue};break;case"SpotLight":e={position:new $,direction:new $,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function W1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var $1=0;function q1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function X1(n){let t=new G1,e=W1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);let r=new $,s=new ke,o=new ke;function a(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,_=0,y=0,S=0,b=0,T=0;c.sort(q1);for(let w=0,M=c.length;w<M;w++){let C=c[w],D=C.color,F=C.intensity,L=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=D.r*F,h+=D.g*F,f+=D.b*F;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],F);T++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,k=e.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=C.shadow.matrix,v++}i.directional[d]=O,d++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(D).multiplyScalar(F),O.distance=L,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[x]=O;let V=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,V.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[x]=V.matrix,C.castShadow){let k=e.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=U,y++}x++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(D).multiplyScalar(F),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=O,m++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let V=C.shadow,k=e.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(F),O.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==S||R.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+S-b,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=S,R.numLightProbes=T,i.version=$1++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(_.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Nm(n){let t=new X1(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Y1(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Nm(n),t.set(r,[a])):s>=o.length?(a=new Nm(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J1(n,t,e){let i=new To,r=new Yt,s=new Yt,o=new De,a=new al({depthPacking:Xp}),l=new ll,c={},u=e.maxTextureSize,h={[Ci]:on,[on]:Ci,[Un]:Un},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:K1,fragmentShader:Z1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let p=this.type;this.render=function(b,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==li&&this.type===li,L=p===li&&this.type!==li;for(let U=0,O=b.length;U<O;U++){let V=b[U],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let G=k.getFrameExtents();if(r.multiply(G),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,k.mapSize.y=s.y)),k.map===null||F===!0||L===!0){let Z=this.type!==li?{minFilter:kn,magFilter:kn}:{};k.map!==null&&k.map.dispose(),k.map=new oi(r.x,r.y,Z),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let K=k.getViewportCount();for(let Z=0;Z<K;Z++){let nt=k.getViewport(Z);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),D.viewport(o),k.updateMatrices(V,Z),i=k.getFrustum(),y(T,R,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===li&&v(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,C)};function v(b,T){let R=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new oi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,R,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,R,d,x,null)}function _(b,T,R,w){let M=null,C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=M.uuid,F=T.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let U=L[F];U===void 0&&(U=M.clone(),L[F]=U,T.addEventListener("dispose",S)),M=U}if(M.visible=T.visible,M.wireframe=T.wireframe,w===li?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=n.properties.get(M);D.light=R}return M}function y(b,T,R,w,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===li)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let F=t.update(b),L=b.material;if(Array.isArray(L)){let U=F.groups;for(let O=0,V=U.length;O<V;O++){let k=U[O],G=L[k.materialIndex];if(G&&G.visible){let K=_(b,G,w,M);b.onBeforeShadow(n,b,T,R,F,K,k),n.renderBufferDirect(R,null,F,K,b,k),b.onAfterShadow(n,b,T,R,F,K,k)}}}else if(L.visible){let U=_(b,L,w,M);b.onBeforeShadow(n,b,T,R,F,U,null),n.renderBufferDirect(R,null,F,U,b,null),b.onAfterShadow(n,b,T,R,F,U,null)}}let D=b.children;for(let F=0,L=D.length;F<L;F++)y(D[F],T,R,w,M)}function S(b){b.target.removeEventListener("dispose",S);for(let R in c){let w=c[R],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var j1={[vl]:Sl,[bl]:Tl,[Ml]:El,[vr]:wl,[Sl]:vl,[Tl]:bl,[El]:Ml,[wl]:vr};function Q1(n,t){function e(){let z=!1,mt=new De,_t=null,Rt=new De(0,0,0,0);return{setMask:function(dt){_t!==dt&&!z&&(n.colorMask(dt,dt,dt,dt),_t=dt)},setLocked:function(dt){z=dt},setClear:function(dt,ot,Ft,ee,Te){Te===!0&&(dt*=ee,ot*=ee,Ft*=ee),mt.set(dt,ot,Ft,ee),Rt.equals(mt)===!1&&(n.clearColor(dt,ot,Ft,ee),Rt.copy(mt))},reset:function(){z=!1,_t=null,Rt.set(-1,0,0,0)}}}function i(){let z=!1,mt=!1,_t=null,Rt=null,dt=null;return{setReversed:function(ot){if(mt!==ot){let Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=ot;let ee=dt;dt=null,this.setClear(ee)}},getReversed:function(){return mt},setTest:function(ot){ot?Y(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(ot){_t!==ot&&!z&&(n.depthMask(ot),_t=ot)},setFunc:function(ot){if(mt&&(ot=j1[ot]),Rt!==ot){switch(ot){case vl:n.depthFunc(n.NEVER);break;case Sl:n.depthFunc(n.ALWAYS);break;case bl:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Ml:n.depthFunc(n.EQUAL);break;case wl:n.depthFunc(n.GEQUAL);break;case Tl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=ot}},setLocked:function(ot){z=ot},setClear:function(ot){dt!==ot&&(mt&&(ot=1-ot),n.clearDepth(ot),dt=ot)},reset:function(){z=!1,_t=null,Rt=null,dt=null,mt=!1}}}function r(){let z=!1,mt=null,_t=null,Rt=null,dt=null,ot=null,Ft=null,ee=null,Te=null;return{setTest:function(pe){z||(pe?Y(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!z&&(n.stencilMask(pe),mt=pe)},setFunc:function(pe,_i,ri){(_t!==pe||Rt!==_i||dt!==ri)&&(n.stencilFunc(pe,_i,ri),_t=pe,Rt=_i,dt=ri)},setOp:function(pe,_i,ri){(ot!==pe||Ft!==_i||ee!==ri)&&(n.stencilOp(pe,_i,ri),ot=pe,Ft=_i,ee=ri)},setLocked:function(pe){z=pe},setClear:function(pe){Te!==pe&&(n.clearStencil(pe),Te=pe)},reset:function(){z=!1,mt=null,_t=null,Rt=null,dt=null,ot=null,Ft=null,ee=null,Te=null}}}let s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,_=null,y=null,S=null,b=null,T=new ue(0,0,0),R=0,w=!1,M=null,C=null,D=null,F=null,L=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=V>=2);let G=null,K={},Z=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),it=new De().fromArray(Z),lt=new De().fromArray(nt);function st(z,mt,_t,Rt){let dt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(z,ot),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<_t;Ft++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(mt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ot}let H={};H[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(vr),vt(!1),xt(Vu),Y(n.CULL_FACE),Xt(Pi);function Y(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function rt(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function ct(z,mt){return h[z]!==mt?(n.bindFramebuffer(z,mt),h[z]=mt,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=mt),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function ut(z,mt){let _t=d,Rt=!1;if(z){_t=f.get(mt),_t===void 0&&(_t=[],f.set(mt,_t));let dt=z.textures;if(_t.length!==dt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Ft=dt.length;ot<Ft;ot++)_t[ot]=n.COLOR_ATTACHMENT0+ot;_t.length=dt.length,Rt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(_t)}function St(z){return g!==z?(n.useProgram(z),g=z,!0):!1}let Zt={[Qi]:n.FUNC_ADD,[_p]:n.FUNC_SUBTRACT,[vp]:n.FUNC_REVERSE_SUBTRACT};Zt[Sp]=n.MIN,Zt[bp]=n.MAX;let P={[Mp]:n.ZERO,[wp]:n.ONE,[Tp]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Np]:n.SRC_ALPHA_SATURATE,[Cp]:n.DST_COLOR,[Ap]:n.DST_ALPHA,[Ep]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[Rp]:n.ONE_MINUS_DST_COLOR,[Ip]:n.ONE_MINUS_DST_ALPHA,[Pp]:n.CONSTANT_COLOR,[Dp]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[kp]:n.ONE_MINUS_CONSTANT_ALPHA};function Xt(z,mt,_t,Rt,dt,ot,Ft,ee,Te,pe){if(z===Pi){x===!0&&(rt(n.BLEND),x=!1);return}if(x===!1&&(Y(n.BLEND),x=!0),z!==yp){if(z!==m||pe!==w){if((p!==Qi||y!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,y=Qi),pe)switch(z){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.ONE,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $u:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $u:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,_=null,S=null,b=null,T.set(0,0,0),R=0,m=z,w=pe}return}dt=dt||mt,ot=ot||_t,Ft=Ft||Rt,(mt!==p||dt!==y)&&(n.blendEquationSeparate(Zt[mt],Zt[dt]),p=mt,y=dt),(_t!==v||Rt!==_||ot!==S||Ft!==b)&&(n.blendFuncSeparate(P[_t],P[Rt],P[ot],P[Ft]),v=_t,_=Rt,S=ot,b=Ft),(ee.equals(T)===!1||Te!==R)&&(n.blendColor(ee.r,ee.g,ee.b,Te),T.copy(ee),R=Te),m=z,w=!1}function At(z,mt){z.side===Un?rt(n.CULL_FACE):Y(n.CULL_FACE);let _t=z.side===on;mt&&(_t=!_t),vt(_t),z.blending===_r&&z.transparent===!1?Xt(Pi):Xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let Rt=z.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),It(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function xt(z){z!==mp?(Y(n.CULL_FACE),z!==C&&(z===Vu?n.cullFace(n.BACK):z===gp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),C=z}function Wt(z){z!==D&&(O&&n.lineWidth(z),D=z)}function It(z,mt,_t){z?(Y(n.POLYGON_OFFSET_FILL),(F!==mt||L!==_t)&&(n.polygonOffset(mt,_t),F=mt,L=_t)):rt(n.POLYGON_OFFSET_FILL)}function Lt(z){z?Y(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function ve(z){z===void 0&&(z=n.TEXTURE0+U-1),G!==z&&(n.activeTexture(z),G=z)}function ce(z,mt,_t){_t===void 0&&(G===null?_t=n.TEXTURE0+U-1:_t=G);let Rt=K[_t];Rt===void 0&&(Rt={type:void 0,texture:void 0},K[_t]=Rt),(Rt.type!==z||Rt.texture!==mt)&&(G!==_t&&(n.activeTexture(_t),G=_t),n.bindTexture(z,mt||H[z]),Rt.type=z,Rt.texture=mt)}function N(){let z=K[G];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(z){it.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function $t(z){lt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),lt.copy(z))}function Ot(z,mt){let _t=c.get(mt);_t===void 0&&(_t=new WeakMap,c.set(mt,_t));let Rt=_t.get(z);Rt===void 0&&(Rt=n.getUniformBlockIndex(mt,z.name),_t.set(z,Rt))}function Tt(z,mt){let Rt=c.get(mt).get(z);l.get(mt)!==Rt&&(n.uniformBlockBinding(mt,Rt,z.__bindingPointIndex),l.set(mt,Rt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,K={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,_=null,y=null,S=null,b=null,T=new ue(0,0,0),R=0,w=!1,M=null,C=null,D=null,F=null,L=null,it.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:rt,bindFramebuffer:ct,drawBuffers:ut,useProgram:St,setBlending:Xt,setMaterial:At,setFlipSided:vt,setCullFace:xt,setLineWidth:Wt,setPolygonOffset:It,setScissorTest:Lt,activeTexture:ve,bindTexture:ce,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Ut,texImage3D:ft,updateUBOMapping:Ot,uniformBlockBinding:Tt,texStorage2D:gt,texStorage3D:Pt,texSubImage2D:et,texSubImage3D:at,compressedTexSubImage2D:Q,compressedTexSubImage3D:Nt,scissor:wt,viewport:$t,reset:ie}}function tA(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,E){return d?new OffscreenCanvas(N,E):mo("canvas")}function x(N,E,X){let et=1,at=ce(N);if((at.width>X||at.height>X)&&(et=X/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Q=Math.floor(et*at.width),Nt=Math.floor(et*at.height);h===void 0&&(h=g(Q,Nt));let gt=E?g(Q,Nt):h;return gt.width=Q,gt.height=Nt,gt.getContext("2d").drawImage(N,0,0,Q,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+Nt+")."),gt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){n.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(N,E,X,et,at=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Q=E;if(E===n.RED&&(X===n.FLOAT&&(Q=n.R32F),X===n.HALF_FLOAT&&(Q=n.R16F),X===n.UNSIGNED_BYTE&&(Q=n.R8)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.R8UI),X===n.UNSIGNED_SHORT&&(Q=n.R16UI),X===n.UNSIGNED_INT&&(Q=n.R32UI),X===n.BYTE&&(Q=n.R8I),X===n.SHORT&&(Q=n.R16I),X===n.INT&&(Q=n.R32I)),E===n.RG&&(X===n.FLOAT&&(Q=n.RG32F),X===n.HALF_FLOAT&&(Q=n.RG16F),X===n.UNSIGNED_BYTE&&(Q=n.RG8)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RG8UI),X===n.UNSIGNED_SHORT&&(Q=n.RG16UI),X===n.UNSIGNED_INT&&(Q=n.RG32UI),X===n.BYTE&&(Q=n.RG8I),X===n.SHORT&&(Q=n.RG16I),X===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),X===n.UNSIGNED_INT&&(Q=n.RGB32UI),X===n.BYTE&&(Q=n.RGB8I),X===n.SHORT&&(Q=n.RGB16I),X===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),X===n.UNSIGNED_INT&&(Q=n.RGBA32UI),X===n.BYTE&&(Q=n.RGBA8I),X===n.SHORT&&(Q=n.RGBA16I),X===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&(X===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),E===n.RGBA){let Nt=at?fo:fe.getTransfer(et);X===n.FLOAT&&(Q=n.RGBA32F),X===n.HALF_FLOAT&&(Q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Q=Nt===xe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(N,E){let X;return N?E===null||E===or||E===Es?X=n.DEPTH24_STENCIL8:E===ui?X=n.DEPTH32F_STENCIL8:E===ws&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===or||E===Es?X=n.DEPTH_COMPONENT24:E===ui?X=n.DEPTH_COMPONENT32F:E===ws&&(X=n.DEPTH_COMPONENT16),X}function S(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==kn&&N.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function b(N){let E=N.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&u.delete(E)}function T(N){let E=N.target;E.removeEventListener("dispose",T),M(E)}function R(N){let E=i.get(N);if(E.__webglInit===void 0)return;let X=N.source,et=f.get(X);if(et){let at=et[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(N),Object.keys(et).length===0&&f.delete(X)}i.remove(N)}function w(N){let E=i.get(N);n.deleteTexture(E.__webglTexture);let X=N.source,et=f.get(X);delete et[E.__cacheKey],o.memory.textures--}function M(N){let E=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let at=0;at<E.__webglFramebuffer[et].length;at++)n.deleteFramebuffer(E.__webglFramebuffer[et][at]);else n.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)n.deleteFramebuffer(E.__webglFramebuffer[et]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=N.textures;for(let et=0,at=X.length;et<at;et++){let Q=i.get(X[et]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(X[et])}i.remove(N)}let C=0;function D(){C=0}function F(){let N=C;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),C+=1,N}function L(N){let E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function U(N,E){let X=i.get(N);if(N.isVideoTexture&&Lt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){let et=N.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,N,E);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function O(N,E){let X=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){H(X,N,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function V(N,E){let X=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){H(X,N,E);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function k(N,E){let X=i.get(N);if(N.version>0&&X.__version!==N.version){Y(X,N,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}let G={[Ka]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},K={[kn]:n.NEAREST,[$p]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},Z={[Zp]:n.NEVER,[nm]:n.ALWAYS,[Jp]:n.LESS,[nh]:n.LEQUAL,[jp]:n.EQUAL,[em]:n.GEQUAL,[Qp]:n.GREATER,[tm]:n.NOTEQUAL};function nt(N,E){if(E.type===ui&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Cl||E.magFilter===Lo||E.magFilter===sr||E.minFilter===jn||E.minFilter===Cl||E.minFilter===Lo||E.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,G[E.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,G[E.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,G[E.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,K[E.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==Lo&&E.minFilter!==sr||E.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function it(N,E){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",b));let et=E.source,at=f.get(et);at===void 0&&(at={},f.set(et,at));let Q=L(E);if(Q!==N.__cacheKey){at[Q]===void 0&&(at[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[Q].usedTimes++;let Nt=at[N.__cacheKey];Nt!==void 0&&(at[N.__cacheKey].usedTimes--,Nt.usedTimes===0&&w(E)),N.__cacheKey=Q,N.__webglTexture=at[Q].texture}return X}function lt(N,E,X){return Math.floor(Math.floor(N/X)/E)}function st(N,E,X,et){let Q=N.updateRanges;if(Q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,X,et,E.data);else{Q.sort((ft,wt)=>ft.start-wt.start);let Nt=0;for(let ft=1;ft<Q.length;ft++){let wt=Q[Nt],$t=Q[ft],Ot=wt.start+wt.count,Tt=lt($t.start,E.width,4),ie=lt(wt.start,E.width,4);$t.start<=Ot+1&&Tt===ie&&lt($t.start+$t.count-1,E.width,4)===Tt?wt.count=Math.max(wt.count,$t.start+$t.count-wt.start):(++Nt,Q[Nt]=$t)}Q.length=Nt+1;let gt=n.getParameter(n.UNPACK_ROW_LENGTH),Pt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ut=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ft=0,wt=Q.length;ft<wt;ft++){let $t=Q[ft],Ot=Math.floor($t.start/4),Tt=Math.ceil($t.count/4),ie=Ot%E.width,z=Math.floor(Ot/E.width),mt=Tt,_t=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,ie,z,mt,_t,X,et,E.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,gt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ut)}}function H(N,E,X){let et=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=n.TEXTURE_3D);let at=it(N,E),Q=E.source;e.bindTexture(et,N.__webglTexture,n.TEXTURE0+X);let Nt=i.get(Q);if(Q.version!==Nt.__version||at===!0){e.activeTexture(n.TEXTURE0+X);let gt=fe.getPrimaries(fe.workingColorSpace),Pt=E.colorSpace===Fi?null:fe.getPrimaries(E.colorSpace),Ut=E.colorSpace===Fi||gt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ft=x(E.image,!1,r.maxTextureSize);ft=ve(E,ft);let wt=s.convert(E.format,E.colorSpace),$t=s.convert(E.type),Ot=_(E.internalFormat,wt,$t,E.colorSpace,E.isVideoTexture);nt(et,E);let Tt,ie=E.mipmaps,z=E.isVideoTexture!==!0,mt=Nt.__version===void 0||at===!0,_t=Q.dataReady,Rt=S(E,ft);if(E.isDepthTexture)Ot=y(E.format===As,E.type),mt&&(z?e.texStorage2D(n.TEXTURE_2D,1,Ot,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Ot,ft.width,ft.height,0,wt,$t,null));else if(E.isDataTexture)if(ie.length>0){z&&mt&&e.texStorage2D(n.TEXTURE_2D,Rt,Ot,ie[0].width,ie[0].height);for(let dt=0,ot=ie.length;dt<ot;dt++)Tt=ie[dt],z?_t&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,wt,$t,Tt.data):e.texImage2D(n.TEXTURE_2D,dt,Ot,Tt.width,Tt.height,0,wt,$t,Tt.data);E.generateMipmaps=!1}else z?(mt&&e.texStorage2D(n.TEXTURE_2D,Rt,Ot,ft.width,ft.height),_t&&st(E,ft,wt,$t)):e.texImage2D(n.TEXTURE_2D,0,Ot,ft.width,ft.height,0,wt,$t,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ot,ie[0].width,ie[0].height,ft.depth);for(let dt=0,ot=ie.length;dt<ot;dt++)if(Tt=ie[dt],E.format!==On)if(wt!==null)if(z){if(_t)if(E.layerUpdates.size>0){let Ft=uh(Tt.width,Tt.height,E.format,E.type);for(let ee of E.layerUpdates){let Te=Tt.data.subarray(ee*Ft/Tt.data.BYTES_PER_ELEMENT,(ee+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,ee,Tt.width,Tt.height,1,wt,Te)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ft.depth,wt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Tt.width,Tt.height,ft.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ft.depth,wt,$t,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Tt.width,Tt.height,ft.depth,0,wt,$t,Tt.data)}else{z&&mt&&e.texStorage2D(n.TEXTURE_2D,Rt,Ot,ie[0].width,ie[0].height);for(let dt=0,ot=ie.length;dt<ot;dt++)Tt=ie[dt],E.format!==On?wt!==null?z?_t&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_t&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,wt,$t,Tt.data):e.texImage2D(n.TEXTURE_2D,dt,Ot,Tt.width,Tt.height,0,wt,$t,Tt.data)}else if(E.isDataArrayTexture)if(z){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ot,ft.width,ft.height,ft.depth),_t)if(E.layerUpdates.size>0){let dt=uh(ft.width,ft.height,E.format,E.type);for(let ot of E.layerUpdates){let Ft=ft.data.subarray(ot*dt/ft.data.BYTES_PER_ELEMENT,(ot+1)*dt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ft.width,ft.height,1,wt,$t,Ft)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,$t,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,ft.width,ft.height,ft.depth,0,wt,$t,ft.data);else if(E.isData3DTexture)z?(mt&&e.texStorage3D(n.TEXTURE_3D,Rt,Ot,ft.width,ft.height,ft.depth),_t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,$t,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,ft.width,ft.height,ft.depth,0,wt,$t,ft.data);else if(E.isFramebufferTexture){if(mt)if(z)e.texStorage2D(n.TEXTURE_2D,Rt,Ot,ft.width,ft.height);else{let dt=ft.width,ot=ft.height;for(let Ft=0;Ft<Rt;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Ot,dt,ot,0,wt,$t,null),dt>>=1,ot>>=1}}else if(ie.length>0){if(z&&mt){let dt=ce(ie[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Ot,dt.width,dt.height)}for(let dt=0,ot=ie.length;dt<ot;dt++)Tt=ie[dt],z?_t&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,wt,$t,Tt):e.texImage2D(n.TEXTURE_2D,dt,Ot,wt,$t,Tt);E.generateMipmaps=!1}else if(z){if(mt){let dt=ce(ft);e.texStorage2D(n.TEXTURE_2D,Rt,Ot,dt.width,dt.height)}_t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,$t,ft)}else e.texImage2D(n.TEXTURE_2D,0,Ot,wt,$t,ft);m(E)&&p(et),Nt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Y(N,E,X){if(E.image.length!==6)return;let et=it(N,E),at=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+X);let Q=i.get(at);if(at.version!==Q.__version||et===!0){e.activeTexture(n.TEXTURE0+X);let Nt=fe.getPrimaries(fe.workingColorSpace),gt=E.colorSpace===Fi?null:fe.getPrimaries(E.colorSpace),Pt=E.colorSpace===Fi||Nt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let ot=0;ot<6;ot++)!Ut&&!ft?wt[ot]=x(E.image[ot],!0,r.maxCubemapSize):wt[ot]=ft?E.image[ot].image:E.image[ot],wt[ot]=ve(E,wt[ot]);let $t=wt[0],Ot=s.convert(E.format,E.colorSpace),Tt=s.convert(E.type),ie=_(E.internalFormat,Ot,Tt,E.colorSpace),z=E.isVideoTexture!==!0,mt=Q.__version===void 0||et===!0,_t=at.dataReady,Rt=S(E,$t);nt(n.TEXTURE_CUBE_MAP,E);let dt;if(Ut){z&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ie,$t.width,$t.height);for(let ot=0;ot<6;ot++){dt=wt[ot].mipmaps;for(let Ft=0;Ft<dt.length;Ft++){let ee=dt[Ft];E.format!==On?Ot!==null?z?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,ee.width,ee.height,Ot,ee.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,ie,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,0,0,ee.width,ee.height,Ot,Tt,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft,ie,ee.width,ee.height,0,Ot,Tt,ee.data)}}}else{if(dt=E.mipmaps,z&&mt){dt.length>0&&Rt++;let ot=ce(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,ie,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ft){z?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,wt[ot].width,wt[ot].height,Ot,Tt,wt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,wt[ot].width,wt[ot].height,0,Ot,Tt,wt[ot].data);for(let Ft=0;Ft<dt.length;Ft++){let Te=dt[Ft].image[ot].image;z?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,Te.width,Te.height,Ot,Tt,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,ie,Te.width,Te.height,0,Ot,Tt,Te.data)}}else{z?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ot,Tt,wt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ie,Ot,Tt,wt[ot]);for(let Ft=0;Ft<dt.length;Ft++){let ee=dt[Ft];z?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,0,0,Ot,Tt,ee.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ft+1,ie,Ot,Tt,ee.image[ot])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),Q.__version=at.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function rt(N,E,X,et,at,Q){let Nt=s.convert(X.format,X.colorSpace),gt=s.convert(X.type),Pt=_(X.internalFormat,Nt,gt,X.colorSpace),Ut=i.get(E),ft=i.get(X);if(ft.__renderTarget=E,!Ut.__hasExternalTextures){let wt=Math.max(1,E.width>>Q),$t=Math.max(1,E.height>>Q);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,Pt,wt,$t,E.depth,0,Nt,gt,null):e.texImage2D(at,Q,Pt,wt,$t,0,Nt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),It(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,at,ft.__webglTexture,0,Wt(E)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,at,ft.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(N,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,N),E.depthBuffer){let et=E.depthTexture,at=et&&et.isDepthTexture?et.type:null,Q=y(E.stencilBuffer,at),Nt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=Wt(E);It(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,Q,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Nt,n.RENDERBUFFER,N)}else{let et=E.textures;for(let at=0;at<et.length;at++){let Q=et[at],Nt=s.convert(Q.format,Q.colorSpace),gt=s.convert(Q.type),Pt=_(Q.internalFormat,Nt,gt,Q.colorSpace),Ut=Wt(E);X&&It(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,Pt,E.width,E.height):It(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,Pt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Pt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=i.get(E.depthTexture);et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),U(E.depthTexture,0);let at=et.__webglTexture,Q=Wt(E);if(E.depthTexture.format===ms)It(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(E.depthTexture.format===As)It(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function St(N){let E=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){let et=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){let at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=et}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let et=N.texture.mipmaps;et&&et.length>0?ut(E.__webglFramebuffer[0],N):ut(E.__webglFramebuffer,N)}else if(X){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=n.createRenderbuffer(),ct(E.__webglDepthbuffer[et],N,!1);else{let at=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Q)}}else{let et=N.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ct(E.__webglDepthbuffer,N,!1);else{let at=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(N,E,X){let et=i.get(N);E!==void 0&&rt(et.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&St(N)}function P(N){let E=N.texture,X=i.get(N),et=i.get(E);N.addEventListener("dispose",T);let at=N.textures,Q=N.isWebGLCubeRenderTarget===!0,Nt=at.length>1;if(Nt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=E.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[gt]=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)X.__webglFramebuffer[gt][Pt]=n.createFramebuffer()}else X.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)X.__webglFramebuffer[gt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Nt)for(let gt=0,Pt=at.length;gt<Pt;gt++){let Ut=i.get(at[gt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&It(N)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let gt=0;gt<at.length;gt++){let Pt=at[gt];X.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[gt]);let Ut=s.convert(Pt.format,Pt.colorSpace),ft=s.convert(Pt.type),wt=_(Pt.internalFormat,Ut,ft,Pt.colorSpace,N.isXRRenderTarget===!0),$t=Wt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,wt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,X.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),nt(n.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)rt(X.__webglFramebuffer[gt][Pt],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt);else rt(X.__webglFramebuffer[gt],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let gt=0,Pt=at.length;gt<Pt;gt++){let Ut=at[gt],ft=i.get(Ut),wt=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,ft.__webglTexture),nt(wt,Ut),rt(X.__webglFramebuffer,N,Ut,n.COLOR_ATTACHMENT0+gt,wt,0),m(Ut)&&p(wt)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(gt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),nt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)rt(X.__webglFramebuffer[Pt],N,E,n.COLOR_ATTACHMENT0,gt,Pt);else rt(X.__webglFramebuffer,N,E,n.COLOR_ATTACHMENT0,gt,0);m(E)&&p(gt),e.unbindTexture()}N.depthBuffer&&St(N)}function Xt(N){let E=N.textures;for(let X=0,et=E.length;X<et;X++){let at=E[X];if(m(at)){let Q=v(N),Nt=i.get(at).__webglTexture;e.bindTexture(Q,Nt),p(Q),e.unbindTexture()}}}let At=[],vt=[];function xt(N){if(N.samples>0){if(It(N)===!1){let E=N.textures,X=N.width,et=N.height,at=n.COLOR_BUFFER_BIT,Q=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=i.get(N),gt=E.length>1;if(gt)for(let Ut=0;Ut<E.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let Pt=N.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ut=0;Ut<E.length;Ut++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),gt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ut]);let ft=i.get(E[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,X,et,0,0,X,et,at,n.NEAREST),l===!0&&(At.length=0,vt.length=0,At.push(n.COLOR_ATTACHMENT0+Ut),N.depthBuffer&&N.resolveDepthBuffer===!1&&(At.push(Q),vt.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,vt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Ut=0;Ut<E.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ut]);let ft=i.get(E[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let E=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Wt(N){return Math.min(r.maxSamples,N.samples)}function It(N){let E=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(N){let E=o.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function ve(N,E){let X=N.colorSpace,et=N.format,at=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==Sr&&X!==Fi&&(fe.getTransfer(X)===xe?(et!==On||at!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Zt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=It}function eA(n,t){function e(i,r=Fi){let s,o=fe.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===Nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yu)return n.BYTE;if(i===Ku)return n.SHORT;if(i===ws)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===ju)return n.ALPHA;if(i===Qu)return n.RGB;if(i===On)return n.RGBA;if(i===ms)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===eh)return n.RG;if(i===Fl)return n.RG_INTEGER;if(i===kl)return n.RGBA_INTEGER;if(i===Uo||i===Oo||i===Bo||i===zo)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Ul||i===Ol||i===Bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Vl||i===Hl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zl||i===Vl)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gl||i===Wl||i===$l||i===ql||i===Xl||i===Yl||i===Kl||i===Zl||i===Jl||i===jl||i===Ql||i===tc||i===ec||i===nc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===rc||i===sc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ic)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qn({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new Ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends si{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Mh,p={},v=e.getContextAttributes(),_=null,y=null,S=[],b=[],T=new Yt,R=null,w=new je;w.viewport=new De;let M=new je;M.viewport=new De;let C=[w,M],D=new _l,F=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=S[H];return Y===void 0&&(Y=new vs,S[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=S[H];return Y===void 0&&(Y=new vs,S[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=S[H];return Y===void 0&&(Y=new vs,S[H]=Y),Y.getHandSpace()};function U(H){let Y=b.indexOf(H.inputSource);if(Y===-1)return;let rt=S[Y];rt!==void 0&&(rt.update(H.inputSource,H.frame,c||o),rt.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",V);for(let H=0;H<S.length;H++){let Y=b[H];Y!==null&&(b[H]=null,S[H].disconnect(Y))}F=null,L=null,m.reset();for(let H in p)delete p[H];t.setRenderTarget(_),d=null,f=null,h=null,r=null,y=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ct=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=v.stencil?As:ms,ct=v.stencil?Es:or);let St={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(St),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new oi(f.textureWidth,f.textureHeight,{format:On,type:ci,depthTexture:new Io(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new oi(d.framebufferWidth,d.framebufferHeight,{format:On,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(H){for(let Y=0;Y<H.removed.length;Y++){let rt=H.removed[Y],ct=b.indexOf(rt);ct>=0&&(b[ct]=null,S[ct].disconnect(rt))}for(let Y=0;Y<H.added.length;Y++){let rt=H.added[Y],ct=b.indexOf(rt);if(ct===-1){for(let St=0;St<S.length;St++)if(St>=b.length){b.push(rt),ct=St;break}else if(b[St]===null){b[St]=rt,ct=St;break}if(ct===-1)break}let ut=S[ct];ut&&ut.connect(rt)}}let k=new $,G=new $;function K(H,Y,rt){k.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(rt.matrixWorld);let ct=k.distanceTo(G),ut=Y.projectionMatrix.elements,St=rt.projectionMatrix.elements,Zt=ut[14]/(ut[10]-1),P=ut[14]/(ut[10]+1),Xt=(ut[9]+1)/ut[5],At=(ut[9]-1)/ut[5],vt=(ut[8]-1)/ut[0],xt=(St[8]+1)/St[0],Wt=Zt*vt,It=Zt*xt,Lt=ct/(-vt+xt),ve=Lt*-vt;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ve),H.translateZ(Lt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ut[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let ce=Zt+Lt,N=P+Lt,E=Wt-ve,X=It+(ct-ve),et=Xt*P/N*ce,at=At*P/N*ce;H.projectionMatrix.makePerspective(E,X,et,at,ce,N),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Z(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let Y=H.near,rt=H.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),D.near=M.near=w.near=Y,D.far=M.far=w.far=rt,(F!==D.near||L!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,L=D.far),D.layers.mask=H.layers.mask|6,w.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let ct=H.parent,ut=D.cameras;Z(D,ct);for(let St=0;St<ut.length;St++)Z(ut[St],ct);ut.length===2?K(D,w,M):D.projectionMatrix.copy(w.projectionMatrix),nt(H,D,ct)};function nt(H,Y,rt){rt===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(rt.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=gs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(H){return p[H]};let it=null;function lt(H,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ct=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,ct=!0);for(let P=0;P<rt.length;P++){let Xt=rt[P],At=null;if(d!==null)At=d.getViewport(Xt);else{let xt=h.getViewSubImage(f,Xt);At=xt.viewport,P===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let vt=C[P];vt===void 0&&(vt=new je,vt.layers.enable(P),vt.viewport=new De,C[P]=vt),vt.matrix.fromArray(Xt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Xt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(At.x,At.y,At.width,At.height),P===0&&(D.matrix.copy(vt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ct===!0&&D.cameras.push(vt)}let ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let P=h.getDepthInformation(rt[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let P=0;P<rt.length;P++){let Xt=rt[P].camera;if(Xt){let At=p[Xt];At||(At=new Co,p[Xt]=At);let vt=h.getCameraImage(Xt);At.sourceTexture=vt}}}}for(let rt=0;rt<S.length;rt++){let ct=b[rt],ut=S[rt];ct!==null&&ut!==void 0&&ut.update(ct,Y,c||o)}it&&it(H,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let st=new Pm;st.setAnimationLoop(lt),this.setAnimationLoop=function(H){it=H},this.dispose=function(){}}},Rr=new ai,rA=new ke;function sA(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ah(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Rr.copy(y),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(Rr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oA(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));let S=_.program;i.updateUBOMapping(v,S);let b=t.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function u(v){let _=h();v.__bindingPointIndex=_;let y=n.createBuffer(),S=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=r[v.id],y=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,T=y.length;b<T;b++){let R=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,M=R.length;w<M;w++){let C=R[w];if(d(C,b,w,S)===!0){let D=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],L=0;for(let U=0;U<F.length;U++){let O=F[U],V=x(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,D+L,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,_,y,S){let b=v.value,T=_+"_"+y;if(S[T]===void 0)return typeof b=="number"||typeof b=="boolean"?S[T]=b:S[T]=b.clone(),!0;{let R=S[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return S[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(v){let _=v.uniforms,y=0,S=16;for(let T=0,R=_.length;T<R;T++){let w=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,C=w.length;M<C;M++){let D=w[M],F=Array.isArray(D.value)?D.value:[D.value];for(let L=0,U=F.length;L<U;L++){let O=F[L],V=x(O),k=y%S,G=k%V.boundary,K=k+G;y+=G,K!==0&&S-K<V.storage&&(y+=S-K),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=V.storage}}}let b=y%S;return b>0&&(y+=S-b),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var pc=class{constructor(t={}){let{canvas:e=im(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,S=!1;this._outputColorSpace=En;let b=0,T=0,R=null,w=-1,M=null,C=new De,D=new De,F=null,L=new ue(0),U=0,O=e.width,V=e.height,k=1,G=null,K=null,Z=new De(0,0,O,V),nt=new De(0,0,O,V),it=!1,lt=new To,st=!1,H=!1,Y=new ke,rt=new $,ct=new De,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Zt(){return R===null?k:1}let P=i;function Xt(I,W){return e.getContext(I,W)}try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){let W="webgl2";if(P=Xt(W,I),P===null)throw Xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let At,vt,xt,Wt,It,Lt,ve,ce,N,E,X,et,at,Q,Nt,gt,Pt,Ut,ft,wt,$t,Ot,Tt,ie;function z(){At=new wE(P),At.init(),Ot=new eA(P,At),vt=new xE(P,At,t,Ot),xt=new Q1(P,At),vt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Wt=new AE(P),It=new z1,Lt=new tA(P,At,xt,It,vt,Ot,Wt),ve=new _E(y),ce=new ME(y),N=new DM(P),Tt=new mE(P,N),E=new TE(P,N,Wt,Tt),X=new CE(P,E,N,Wt),ft=new IE(P,vt,Lt),gt=new yE(It),et=new B1(y,ve,ce,At,vt,Tt,gt),at=new sA(y,It),Q=new H1,Nt=new Y1(At),Ut=new pE(y,ve,ce,xt,X,d,l),Pt=new J1(y,X,vt),ie=new oA(P,Wt,vt,xt),wt=new gE(P,At,Wt),$t=new EE(P,At,Wt),Wt.programs=et.programs,y.capabilities=vt,y.extensions=At,y.properties=It,y.renderLists=Q,y.shadowMap=Pt,y.state=xt,y.info=Wt}z();let mt=new wh(y,P);this.xr=mt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let I=At.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=At.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(O,V,!1))},this.getSize=function(I){return I.set(O,V)},this.setSize=function(I,W,J=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,V=W,e.width=Math.floor(I*k),e.height=Math.floor(W*k),J===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(O*k,V*k).floor()},this.setDrawingBufferSize=function(I,W,J){O=I,V=W,k=J,e.width=Math.floor(I*J),e.height=Math.floor(W*J),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(Z)},this.setViewport=function(I,W,J,j){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,W,J,j),xt.viewport(C.copy(Z).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(nt)},this.setScissor=function(I,W,J,j){I.isVector4?nt.set(I.x,I.y,I.z,I.w):nt.set(I,W,J,j),xt.scissor(D.copy(nt).multiplyScalar(k).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(I){xt.setScissorTest(it=I)},this.setOpaqueSort=function(I){G=I},this.setTransparentSort=function(I){K=I},this.getClearColor=function(I){return I.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(I=!0,W=!0,J=!0){let j=0;if(I){let q=!1;if(R!==null){let pt=R.texture.format;q=pt===kl||pt===Fl||pt===Dl}if(q){let pt=R.texture.type,Et=pt===ci||pt===or||pt===ws||pt===Es||pt===Nl||pt===Pl,Dt=Ut.getClearColor(),Ct=Ut.getClearAlpha(),qt=Dt.r,Jt=Dt.g,zt=Dt.b;Et?(g[0]=qt,g[1]=Jt,g[2]=zt,g[3]=Ct,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=qt,x[1]=Jt,x[2]=zt,x[3]=Ct,P.clearBufferiv(P.COLOR,0,x))}else j|=P.COLOR_BUFFER_BIT}W&&(j|=P.DEPTH_BUFFER_BIT),J&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Ut.dispose(),Q.dispose(),Nt.dispose(),It.dispose(),ve.dispose(),ce.dispose(),X.dispose(),Tt.dispose(),ie.dispose(),et.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",ri),mt.removeEventListener("sessionend",zd),fr.stop()};function _t(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let I=Wt.autoReset,W=Pt.enabled,J=Pt.autoUpdate,j=Pt.needsUpdate,q=Pt.type;z(),Wt.autoReset=I,Pt.enabled=W,Pt.autoUpdate=J,Pt.needsUpdate=j,Pt.type=q}function dt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ot(I){let W=I.target;W.removeEventListener("dispose",ot),Ft(W)}function Ft(I){ee(I),It.remove(I)}function ee(I){let W=It.get(I).programs;W!==void 0&&(W.forEach(function(J){et.releaseProgram(J)}),I.isShaderMaterial&&et.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,J,j,q,pt){W===null&&(W=ut);let Et=q.isMesh&&q.matrixWorld.determinant()<0,Dt=Ab(I,W,J,j,q);xt.setMaterial(j,Et);let Ct=J.index,qt=1;if(j.wireframe===!0){if(Ct=E.getWireframeAttribute(J),Ct===void 0)return;qt=2}let Jt=J.drawRange,zt=J.attributes.position,ae=Jt.start*qt,ye=(Jt.start+Jt.count)*qt;pt!==null&&(ae=Math.max(ae,pt.start*qt),ye=Math.min(ye,(pt.start+pt.count)*qt)),Ct!==null?(ae=Math.max(ae,0),ye=Math.min(ye,Ct.count)):zt!=null&&(ae=Math.max(ae,0),ye=Math.min(ye,zt.count));let Pe=ye-ae;if(Pe<0||Pe===1/0)return;Tt.setup(q,j,Dt,J,Ct);let Ie,Se=wt;if(Ct!==null&&(Ie=N.get(Ct),Se=$t,Se.setIndex(Ie)),q.isMesh)j.wireframe===!0?(xt.setLineWidth(j.wireframeLinewidth*Zt()),Se.setMode(P.LINES)):Se.setMode(P.TRIANGLES);else if(q.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),xt.setLineWidth(Gt*Zt()),q.isLineSegments?Se.setMode(P.LINES):q.isLineLoop?Se.setMode(P.LINE_LOOP):Se.setMode(P.LINE_STRIP)}else q.isPoints?Se.setMode(P.POINTS):q.isSprite&&Se.setMode(P.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Gt=q._multiDrawStarts,Re=q._multiDrawCounts,de=q._multiDrawCount,bn=Ct?N.get(Ct).bytesPerElement:1,Zr=It.get(j).currentProgram.getUniforms();for(let Mn=0;Mn<de;Mn++)Zr.setValue(P,"_gl_DrawID",Mn),Se.render(Gt[Mn]/bn,Re[Mn])}else if(q.isInstancedMesh)Se.renderInstances(ae,Pe,q.count);else if(J.isInstancedBufferGeometry){let Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,Gt);Se.renderInstances(ae,Pe,Re)}else Se.render(ae,Pe)};function Te(I,W,J){I.transparent===!0&&I.side===Un&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,ba(I,W,J),I.side=Ci,I.needsUpdate=!0,ba(I,W,J),I.side=Un):ba(I,W,J)}this.compile=function(I,W,J=null){J===null&&(J=I),p=Nt.get(J),p.init(W),_.push(p),J.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),I!==J&&I.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let j=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let pt=q.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){let Dt=pt[Et];Te(Dt,J,q),j.add(Dt)}else Te(pt,J,q),j.add(pt)}),p=_.pop(),j},this.compileAsync=function(I,W,J=null){let j=this.compile(I,W,J);return new Promise(q=>{function pt(){if(j.forEach(function(Et){It.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){q(I);return}setTimeout(pt,10)}At.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let pe=null;function _i(I){pe&&pe(I)}function ri(){fr.stop()}function zd(){fr.start()}let fr=new Pm;fr.setAnimationLoop(_i),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(I){pe=I,mt.setAnimationLoop(I),I===null?fr.stop():fr.start()},mt.addEventListener("sessionstart",ri),mt.addEventListener("sessionend",zd),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(W),W=mt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,W,R),p=Nt.get(I,_.length),p.init(W),_.push(p),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),lt.setFromProjectionMatrix(Y,Jn,W.reversedDepth),H=this.localClippingEnabled,st=gt.init(this.clippingPlanes,H),m=Q.get(I,v.length),m.init(),v.push(m),mt.enabled===!0&&mt.isPresenting===!0){let pt=y.xr.getDepthSensingMesh();pt!==null&&uu(pt,W,-1/0,y.sortObjects)}uu(I,W,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,K),St=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,St&&Ut.addToRenderList(m,I),this.info.render.frame++,st===!0&&gt.beginShadows();let J=p.state.shadowsArray;Pt.render(J,I,W),st===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,q=m.transmissive;if(p.setupLights(),W.isArrayCamera){let pt=W.cameras;if(q.length>0)for(let Et=0,Dt=pt.length;Et<Dt;Et++){let Ct=pt[Et];Hd(j,q,I,Ct)}St&&Ut.render(I);for(let Et=0,Dt=pt.length;Et<Dt;Et++){let Ct=pt[Et];Vd(m,I,Ct,Ct.viewport)}}else q.length>0&&Hd(j,q,I,W),St&&Ut.render(I),Vd(m,I,W);R!==null&&T===0&&(Lt.updateMultisampleRenderTarget(R),Lt.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(y,I,W),Tt.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],st===!0&&gt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function uu(I,W,J,j){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||lt.intersectsSprite(I)){j&&ct.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Y);let Et=X.update(I),Dt=I.material;Dt.visible&&m.push(I,Et,Dt,J,ct.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||lt.intersectsObject(I))){let Et=X.update(I),Dt=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ct.copy(I.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ct.copy(Et.boundingSphere.center)),ct.applyMatrix4(I.matrixWorld).applyMatrix4(Y)),Array.isArray(Dt)){let Ct=Et.groups;for(let qt=0,Jt=Ct.length;qt<Jt;qt++){let zt=Ct[qt],ae=Dt[zt.materialIndex];ae&&ae.visible&&m.push(I,Et,ae,J,ct.z,zt)}}else Dt.visible&&m.push(I,Et,Dt,J,ct.z,null)}}let pt=I.children;for(let Et=0,Dt=pt.length;Et<Dt;Et++)uu(pt[Et],W,J,j)}function Vd(I,W,J,j){let q=I.opaque,pt=I.transmissive,Et=I.transparent;p.setupLightsView(J),st===!0&&gt.setGlobalState(y.clippingPlanes,J),j&&xt.viewport(C.copy(j)),q.length>0&&Sa(q,W,J),pt.length>0&&Sa(pt,W,J),Et.length>0&&Sa(Et,W,J),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Hd(I,W,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new oi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Ts:ci,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let pt=p.state.transmissionRenderTarget[j.id],Et=j.viewport||C;pt.setSize(Et.z*y.transmissionResolutionScale,Et.w*y.transmissionResolutionScale);let Dt=y.getRenderTarget(),Ct=y.getActiveCubeFace(),qt=y.getActiveMipmapLevel();y.setRenderTarget(pt),y.getClearColor(L),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),St&&Ut.render(J);let Jt=y.toneMapping;y.toneMapping=Di;let zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),st===!0&&gt.setGlobalState(y.clippingPlanes,j),Sa(I,J,j),Lt.updateMultisampleRenderTarget(pt),Lt.updateRenderTargetMipmap(pt),At.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let ye=0,Pe=W.length;ye<Pe;ye++){let Ie=W[ye],Se=Ie.object,Gt=Ie.geometry,Re=Ie.material,de=Ie.group;if(Re.side===Un&&Se.layers.test(j.layers)){let bn=Re.side;Re.side=on,Re.needsUpdate=!0,Gd(Se,J,j,Gt,Re,de),Re.side=bn,Re.needsUpdate=!0,ae=!0}}ae===!0&&(Lt.updateMultisampleRenderTarget(pt),Lt.updateRenderTargetMipmap(pt))}y.setRenderTarget(Dt,Ct,qt),y.setClearColor(L,U),zt!==void 0&&(j.viewport=zt),y.toneMapping=Jt}function Sa(I,W,J){let j=W.isScene===!0?W.overrideMaterial:null;for(let q=0,pt=I.length;q<pt;q++){let Et=I[q],Dt=Et.object,Ct=Et.geometry,qt=Et.group,Jt=Et.material;Jt.allowOverride===!0&&j!==null&&(Jt=j),Dt.layers.test(J.layers)&&Gd(Dt,W,J,Ct,Jt,qt)}}function Gd(I,W,J,j,q,pt){I.onBeforeRender(y,W,J,j,q,pt),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(y,W,J,j,I,pt),q.transparent===!0&&q.side===Un&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,y.renderBufferDirect(J,W,j,q,I,pt),q.side=Ci,q.needsUpdate=!0,y.renderBufferDirect(J,W,j,q,I,pt),q.side=Un):y.renderBufferDirect(J,W,j,q,I,pt),I.onAfterRender(y,W,J,j,q,pt)}function ba(I,W,J){W.isScene!==!0&&(W=ut);let j=It.get(I),q=p.state.lights,pt=p.state.shadowsArray,Et=q.state.version,Dt=et.getParameters(I,q.state,pt,W,J),Ct=et.getProgramCacheKey(Dt),qt=j.programs;j.environment=I.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(I.isMeshStandardMaterial?ce:ve).get(I.envMap||j.environment),j.envMapRotation=j.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,qt===void 0&&(I.addEventListener("dispose",ot),qt=new Map,j.programs=qt);let Jt=qt.get(Ct);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===Et)return $d(I,Dt),Jt}else Dt.uniforms=et.getUniforms(I),I.onBeforeCompile(Dt,y),Jt=et.acquireProgram(Dt,Ct),qt.set(Ct,Jt),j.uniforms=Dt.uniforms;let zt=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(zt.clippingPlanes=gt.uniform),$d(I,Dt),j.needsLights=Cb(I),j.lightsStateVersion=Et,j.needsLights&&(zt.ambientLightColor.value=q.state.ambient,zt.lightProbe.value=q.state.probe,zt.directionalLights.value=q.state.directional,zt.directionalLightShadows.value=q.state.directionalShadow,zt.spotLights.value=q.state.spot,zt.spotLightShadows.value=q.state.spotShadow,zt.rectAreaLights.value=q.state.rectArea,zt.ltc_1.value=q.state.rectAreaLTC1,zt.ltc_2.value=q.state.rectAreaLTC2,zt.pointLights.value=q.state.point,zt.pointLightShadows.value=q.state.pointShadow,zt.hemisphereLights.value=q.state.hemi,zt.directionalShadowMap.value=q.state.directionalShadowMap,zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,zt.spotShadowMap.value=q.state.spotShadowMap,zt.spotLightMatrix.value=q.state.spotLightMatrix,zt.spotLightMap.value=q.state.spotLightMap,zt.pointShadowMap.value=q.state.pointShadowMap,zt.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function Wd(I){if(I.uniformsList===null){let W=I.currentProgram.getUniforms();I.uniformsList=Rs.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function $d(I,W){let J=It.get(I);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Ab(I,W,J,j,q){W.isScene!==!0&&(W=ut),Lt.resetTextureUnits();let pt=W.fog,Et=j.isMeshStandardMaterial?W.environment:null,Dt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Sr,Ct=(j.isMeshStandardMaterial?ce:ve).get(j.envMap||Et),qt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!J.morphAttributes.position,ae=!!J.morphAttributes.normal,ye=!!J.morphAttributes.color,Pe=Di;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pe=y.toneMapping);let Ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=Ie!==void 0?Ie.length:0,Gt=It.get(j),Re=p.state.lights;if(st===!0&&(H===!0||I!==M)){let rn=I===M&&j.id===w;gt.setState(j,I,rn)}let de=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Re.state.version||Gt.outputColorSpace!==Dt||q.isBatchedMesh&&Gt.batching===!1||!q.isBatchedMesh&&Gt.batching===!0||q.isBatchedMesh&&Gt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Gt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Gt.instancing===!1||!q.isInstancedMesh&&Gt.instancing===!0||q.isSkinnedMesh&&Gt.skinning===!1||!q.isSkinnedMesh&&Gt.skinning===!0||q.isInstancedMesh&&Gt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Gt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Gt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Gt.instancingMorph===!1&&q.morphTexture!==null||Gt.envMap!==Ct||j.fog===!0&&Gt.fog!==pt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==gt.numPlanes||Gt.numIntersection!==gt.numIntersection)||Gt.vertexAlphas!==qt||Gt.vertexTangents!==Jt||Gt.morphTargets!==zt||Gt.morphNormals!==ae||Gt.morphColors!==ye||Gt.toneMapping!==Pe||Gt.morphTargetsCount!==Se)&&(de=!0):(de=!0,Gt.__version=j.version);let bn=Gt.currentProgram;de===!0&&(bn=ba(j,W,q));let Zr=!1,Mn=!1,to=!1,Ne=bn.getUniforms(),Rn=Gt.uniforms;if(xt.useProgram(bn.program)&&(Zr=!0,Mn=!0,to=!0),j.id!==w&&(w=j.id,Mn=!0),Zr||M!==I){xt.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ne.setValue(P,"projectionMatrix",I.projectionMatrix),Ne.setValue(P,"viewMatrix",I.matrixWorldInverse);let hn=Ne.map.cameraPosition;hn!==void 0&&hn.setValue(P,rt.setFromMatrixPosition(I.matrixWorld)),vt.logarithmicDepthBuffer&&Ne.setValue(P,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ne.setValue(P,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,Mn=!0,to=!0)}if(q.isSkinnedMesh){Ne.setOptional(P,q,"bindMatrix"),Ne.setOptional(P,q,"bindMatrixInverse");let rn=q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ne.setValue(P,"boneTexture",rn.boneTexture,Lt))}q.isBatchedMesh&&(Ne.setOptional(P,q,"batchingTexture"),Ne.setValue(P,"batchingTexture",q._matricesTexture,Lt),Ne.setOptional(P,q,"batchingIdTexture"),Ne.setValue(P,"batchingIdTexture",q._indirectTexture,Lt),Ne.setOptional(P,q,"batchingColorTexture"),q._colorsTexture!==null&&Ne.setValue(P,"batchingColorTexture",q._colorsTexture,Lt));let Nn=J.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ft.update(q,J,bn),(Mn||Gt.receiveShadow!==q.receiveShadow)&&(Gt.receiveShadow=q.receiveShadow,Ne.setValue(P,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Rn.envMap.value=Ct,Rn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(Rn.envMapIntensity.value=W.environmentIntensity),Mn&&(Ne.setValue(P,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&Ib(Rn,to),pt&&j.fog===!0&&at.refreshFogUniforms(Rn,pt),at.refreshMaterialUniforms(Rn,j,k,V,p.state.transmissionRenderTarget[I.id]),Rs.upload(P,Wd(Gt),Rn,Lt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Rs.upload(P,Wd(Gt),Rn,Lt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ne.setValue(P,"center",q.center),Ne.setValue(P,"modelViewMatrix",q.modelViewMatrix),Ne.setValue(P,"normalMatrix",q.normalMatrix),Ne.setValue(P,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let rn=j.uniformsGroups;for(let hn=0,hu=rn.length;hn<hu;hn++){let dr=rn[hn];ie.update(dr,bn),ie.bind(dr,bn)}}return bn}function Ib(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Cb(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,W,J){let j=It.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),It.get(I.texture).__webglTexture=W,It.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,W){let J=It.get(I);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};let Rb=P.createFramebuffer();this.setRenderTarget=function(I,W=0,J=0){R=I,b=W,T=J;let j=!0,q=null,pt=!1,Et=!1;if(I){let Ct=It.get(I);if(Ct.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(P.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)Lt.setupRenderTarget(I);else if(Ct.__hasExternalTextures)Lt.rebindTextures(I,It.get(I.texture).__webglTexture,It.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let zt=I.depthTexture;if(Ct.__boundDepthTexture!==zt){if(zt!==null&&It.has(zt)&&(I.width!==zt.image.width||I.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(I)}}let qt=I.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Et=!0);let Jt=It.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?q=Jt[W][J]:q=Jt[W],pt=!0):I.samples>0&&Lt.useMultisampledRTT(I)===!1?q=It.get(I).__webglMultisampledFramebuffer:Array.isArray(Jt)?q=Jt[J]:q=Jt,C.copy(I.viewport),D.copy(I.scissor),F=I.scissorTest}else C.copy(Z).multiplyScalar(k).floor(),D.copy(nt).multiplyScalar(k).floor(),F=it;if(J!==0&&(q=Rb),xt.bindFramebuffer(P.FRAMEBUFFER,q)&&j&&xt.drawBuffers(I,q),xt.viewport(C),xt.scissor(D),xt.setScissorTest(F),pt){let Ct=It.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ct.__webglTexture,J)}else if(Et){let Ct=W;for(let qt=0;qt<I.textures.length;qt++){let Jt=It.get(I.textures[qt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qt,Jt.__webglTexture,J,Ct)}}else if(I!==null&&J!==0){let Ct=It.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ct.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(I,W,J,j,q,pt,Et,Dt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=It.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){xt.bindFramebuffer(P.FRAMEBUFFER,Ct);try{let qt=I.textures[Dt],Jt=qt.format,zt=qt.type;if(!vt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-j&&J>=0&&J<=I.height-q&&(I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Dt),P.readPixels(W,J,j,q,Ot.convert(Jt),Ot.convert(zt),pt))}finally{let qt=R!==null?It.get(R).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(I,W,J,j,q,pt,Et,Dt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=It.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(W>=0&&W<=I.width-j&&J>=0&&J<=I.height-q){xt.bindFramebuffer(P.FRAMEBUFFER,Ct);let qt=I.textures[Dt],Jt=qt.format,zt=qt.type;if(!vt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ae),P.bufferData(P.PIXEL_PACK_BUFFER,pt.byteLength,P.STREAM_READ),I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Dt),P.readPixels(W,J,j,q,Ot.convert(Jt),Ot.convert(zt),0);let ye=R!==null?It.get(R).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,ye);let Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rm(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pt),P.deleteBuffer(ae),P.deleteSync(Pe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,W=null,J=0){let j=Math.pow(2,-J),q=Math.floor(I.image.width*j),pt=Math.floor(I.image.height*j),Et=W!==null?W.x:0,Dt=W!==null?W.y:0;Lt.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Et,Dt,q,pt),xt.unbindTexture()};let Nb=P.createFramebuffer(),Pb=P.createFramebuffer();this.copyTextureToTexture=function(I,W,J=null,j=null,q=0,pt=null){pt===null&&(q!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=q,q=0):pt=0);let Et,Dt,Ct,qt,Jt,zt,ae,ye,Pe,Ie=I.isCompressedTexture?I.mipmaps[pt]:I.image;if(J!==null)Et=J.max.x-J.min.x,Dt=J.max.y-J.min.y,Ct=J.isBox3?J.max.z-J.min.z:1,qt=J.min.x,Jt=J.min.y,zt=J.isBox3?J.min.z:0;else{let Nn=Math.pow(2,-q);Et=Math.floor(Ie.width*Nn),Dt=Math.floor(Ie.height*Nn),I.isDataArrayTexture?Ct=Ie.depth:I.isData3DTexture?Ct=Math.floor(Ie.depth*Nn):Ct=1,qt=0,Jt=0,zt=0}j!==null?(ae=j.x,ye=j.y,Pe=j.z):(ae=0,ye=0,Pe=0);let Se=Ot.convert(W.format),Gt=Ot.convert(W.type),Re;W.isData3DTexture?(Lt.setTexture3D(W,0),Re=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Lt.setTexture2DArray(W,0),Re=P.TEXTURE_2D_ARRAY):(Lt.setTexture2D(W,0),Re=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);let de=P.getParameter(P.UNPACK_ROW_LENGTH),bn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zr=P.getParameter(P.UNPACK_SKIP_PIXELS),Mn=P.getParameter(P.UNPACK_SKIP_ROWS),to=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zt);let Ne=I.isDataArrayTexture||I.isData3DTexture,Rn=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){let Nn=It.get(I),rn=It.get(W),hn=It.get(Nn.__renderTarget),hu=It.get(rn.__renderTarget);xt.bindFramebuffer(P.READ_FRAMEBUFFER,hn.__webglFramebuffer),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,hu.__webglFramebuffer);for(let dr=0;dr<Ct;dr++)Ne&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.get(I).__webglTexture,q,zt+dr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.get(W).__webglTexture,pt,Pe+dr)),P.blitFramebuffer(qt,Jt,Et,Dt,ae,ye,Et,Dt,P.DEPTH_BUFFER_BIT,P.NEAREST);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||It.has(I)){let Nn=It.get(I),rn=It.get(W);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Nb),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Pb);for(let hn=0;hn<Ct;hn++)Ne?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nn.__webglTexture,q,zt+hn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Nn.__webglTexture,q),Rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,rn.__webglTexture,pt,Pe+hn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,rn.__webglTexture,pt),q!==0?P.blitFramebuffer(qt,Jt,Et,Dt,ae,ye,Et,Dt,P.COLOR_BUFFER_BIT,P.NEAREST):Rn?P.copyTexSubImage3D(Re,pt,ae,ye,Pe+hn,qt,Jt,Et,Dt):P.copyTexSubImage2D(Re,pt,ae,ye,qt,Jt,Et,Dt);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Rn?I.isDataTexture||I.isData3DTexture?P.texSubImage3D(Re,pt,ae,ye,Pe,Et,Dt,Ct,Se,Gt,Ie.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,pt,ae,ye,Pe,Et,Dt,Ct,Se,Ie.data):P.texSubImage3D(Re,pt,ae,ye,Pe,Et,Dt,Ct,Se,Gt,Ie):I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,pt,ae,ye,Et,Dt,Se,Gt,Ie.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,pt,ae,ye,Ie.width,Ie.height,Se,Ie.data):P.texSubImage2D(P.TEXTURE_2D,pt,ae,ye,Et,Dt,Se,Gt,Ie);P.pixelStorei(P.UNPACK_ROW_LENGTH,de),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,to),pt===0&&W.generateMipmaps&&P.generateMipmap(Re),xt.unbindTexture()},this.initRenderTarget=function(I){It.get(I).__webglFramebuffer===void 0&&Lt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Lt.setTextureCube(I,0):I.isData3DTexture?Lt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Lt.setTexture2DArray(I,0):Lt.setTexture2D(I,0),xt.unbindTexture()},this.resetState=function(){b=0,T=0,R=null,xt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var Um={type:"change"},Ah={type:"start"},Bm={type:"end"},gc=new Mr,Om=new Fn,lA=Math.cos(70*sh.DEG2RAD),Ge=new $,mn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6,xc=class extends Fo{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ln,this._lastTargetPosition=new $,this._quat=new Ln().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ms,this._sphericalDelta=new Ms,this._scale=1,this._panOffset=new $,this._rotateStart=new Yt,this._rotateEnd=new Yt,this._rotateDelta=new Yt,this._panStart=new Yt,this._panEnd=new Yt,this._panDelta=new Yt,this._dollyStart=new Yt,this._dollyEnd=new Yt,this._dollyDelta=new Yt,this._dollyDirection=new $,this._mouse=new Yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uA.bind(this),this._onPointerDown=cA.bind(this),this._onPointerUp=hA.bind(this),this._onContextMenu=yA.bind(this),this._onMouseWheel=pA.bind(this),this._onKeyDown=mA.bind(this),this._onTouchStart=gA.bind(this),this._onTouchMove=xA.bind(this),this._onMouseDown=fA.bind(this),this._onMouseMove=dA.bind(this),this._interceptControlDown=_A.bind(this),this._interceptControlUp=vA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Um),this.update(),this.state=_e.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),r<-Math.PI?r+=mn:r>Math.PI&&(r-=mn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ge.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gc.origin.copy(this.object.position),gc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gc.direction))<lA?this.object.lookAt(this.target):(Om.setFromNormalAndCoplanarPoint(this.object.up,this.target),gc.intersectPlane(Om,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(Um),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ge.copy(r).sub(this.target);let s=Ge.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function cA(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function uA(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hA(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bm),this.state=_e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fA(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_e.DOLLY;break;case ir.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}break;case ir.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ah)}function dA(n){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pA(n){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(n.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bm))}function mA(n){this.enabled!==!1&&this._handleKeyDown(n)}function gA(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_e.TOUCH_ROTATE;break;case rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_e.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ah)}function xA(n){switch(this._trackPointer(n),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_e.NONE}}function yA(n){this.enabled!==!1&&n.preventDefault()}function _A(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vA(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ho=class{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},Dr=class{refCount(t){return gn("refCount")}incRef(t){return gn("incRef")}timerAvailable(){return!0}time(t){return gn("time")}read(t){return gn("read")}readSync(t){return gn("readSync")}readToGPU(t,e){return gn("readToGPU")}numDataIds(){return gn("numDataIds")}disposeData(t,e){return gn("disposeData")}write(t,e,i){return gn("write")}move(t,e,i,r,s){return gn("move")}createTensorFromGPUData(t,e,i){return gn("createTensorFromGPUData")}memory(){return gn("memory")}floatPrecision(){return gn("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return gn("dispose")}};function gn(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function zm(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,yc(n,t,e)}function SA(n,t){if(n.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${t.length}`);let e=n.length,i=0;for(;e>0;)i=Math.random()*e|0,e--,yc(n,e,i),yc(t,e,i)}function Ps(n,t,e){return Math.max(n,Math.min(t,e))}function bA(n){return n%2===0?n:n+1}function yc(n,t,e){let i=n[t];n[t]=n[e],n[e]=i}function MA(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function wA(n,t){let e=Math.random();return t*e+(1-e)*n}function TA(n,t){let e=0;for(let i=0;i<n.length;i++){let r=Number(n[i])-Number(t[i]);e+=r*r}return e}function Mt(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Vm(n,t,e=""){Mt(Ds(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Ih(n){Mt(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Fe(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function EA(n){return n.length===0}function AA(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==null&&t[e]!==null&&n[e]!==t[e])return!1;return!0}function Ds(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Go(n){return n%1===0}function IA(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;{let t=Math.exp(2*n);return(t-1)/(t+1)}}function CA(n){let t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function RA(n){let t=new Uint32Array(n);for(let e=0;e<n;++e)t[e]=e;return zm(t),t}function kr(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function NA(n,t=r=>0,e,i){return new Promise((r,s)=>{let o=0,a=()=>{if(n()){r();return}o++;let l=t(o);if(e!=null&&o>=e){s();return}i!=null?i(a,l):setTimeout(a,l)};a()})}function PA(n,t){let e=1,i=-1;for(let s=0;s<n.length;++s)if(n[s]>=0)e*=n[s];else if(n[s]===-1){if(i!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${i} and dim ${s}`);i=s}else if(n[s]<0)throw Error(`Shapes can not be < 0. Found ${n[s]} at dim ${s}`);if(i===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);let r=n.slice();return r[i]=t/e,r}function Hm(n,t){let e=t.length;return n=n==null?t.map((i,r)=>r):[].concat(n),Mt(n.every(i=>i>=-e&&i<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),Mt(n.every(i=>Go(i)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(i=>i<0?e+i:i)}function DA(n,t){let e=[],i=[],r=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||r?null:Hm(t,n).sort(),o=0;for(let a=0;a<n.length;++a){if(s!=null){if(s[o]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(s[o]==null||s[o]>a)&&n[a]===1&&(e.push(n[a]),i.push(a)),s[o]<=a&&o++}n[a]!==1&&(e.push(n[a]),i.push(a))}return{newShape:e,keptDims:i}}function FA(n,t){return _c(n,t)}function _c(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Ch(n,t){for(let e=0;e<n.length;e++){let i=n[e];if(isNaN(i)||!isFinite(i))throw Error(`A tensor of type ${t} being uploaded contains ${i}.`)}}function Rh(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function kA(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function Fs(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Nh(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function ks(n){return typeof n=="string"||n instanceof String}function Gm(n){return typeof n=="boolean"}function Wm(n){return typeof n=="number"}function ar(n){return Array.isArray(n)?ar(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Wm(n)?"float32":ks(n)?"string":Gm(n)?"bool":"float32"}function Ls(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Us(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function fi(n){let t=n.length;if(t<2)return[];let e=new Array(t-1);e[t-2]=n[t-1];for(let i=t-3;i>=0;--i)e[i]=e[i+1]*n[i+1];return e}function $m(n,t,e,i=!1){let r=new Array;if(t.length===1){let s=t[0]*(i?2:1);for(let o=0;o<s;o++)r[o]=e[n+o]}else{let s=t[0],o=t.slice(1),a=o.reduce((l,c)=>l*c)*(i?2:1);for(let l=0;l<s;l++)r[l]=$m(n+l*a,o,e,i)}return r}function Fr(n,t,e=!1){if(n.length===0)return t[0];let i=n.reduce((r,s)=>r*s)*(e?2:1);if(i===0)return[];if(i!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return $m(0,n,t,e)}function LA(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function Ph(n,t){let e=vc(n,t);for(let i=0;i<e.length;i++)e[i]=1;return e}function vc(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function UA(n,t){let e=n.reduce((i,r)=>i*r,1);if(t==null||t==="float32")return Fr(n,new Float32Array(e));if(t==="int32")return Fr(n,new Int32Array(e));if(t==="bool")return Fr(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function ki(n){n.forEach(t=>{Mt(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function OA(n,t,e){if(t===0)return 0;if(t===1)return n[0];let i=n[n.length-1];for(let r=0;r<n.length-1;++r)i+=e[r]*n[r];return i}function BA(n,t,e){if(t===0)return[];if(t===1)return[n];let i=new Array(t);for(let r=0;r<i.length-1;++r)i[r]=Math.floor(n/e[r]),n-=i[r]*e[r];return i[i.length-1]=n,i}function Lr(n){return n&&n.then&&typeof n.then=="function"}var qm="tfjsflags",Wo=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=VA,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(Vt().getBool("IS_TEST")||Vt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,i){if(this.flagRegistry[t]={evaluationFn:e,setHook:i},this.urlFlags[t]!=null){let r=this.urlFlags[t];Vt().getBool("IS_TEST")||Vt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let e=this.evaluateFlag(t);if(Lr(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);qm in t&&t[qm].split(",").forEach(i=>{let[r,s]=i.split(":");this.urlFlags[r]=GA(r,s)})}};function VA(n){let t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...i)=>(HA(t,i[0],i[1]),i.join("="))),t}function HA(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function GA(n,t){let e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function Vt(){return Dh}var Dh=null;function Xm(n){Dh=n}var Fh;function kh(){if(Fh==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Fh=n}return Fh}function WA(){let n=kh();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function $o(n,t){let e=WA();if(e.has(n))return e.get(n);{let i=t();return e.set(n,i),e.get(n)}}var Lh="Acos",Uh="Acosh";var Ym="AddN";var Km="ArgMax",Zm="ArgMin",Oh="Asin",Bh="Asinh",zh="Atan",Vh="Atanh",Hh="Atan2",Jm="AvgPool",jm="AvgPoolGrad",Qm="AvgPool3D",tg="AvgPool3DGrad",eg="BatchMatMul",ng="BatchToSpaceND",ig="Bincount",Gh="BitwiseAnd";var rg="BroadcastArgs",Os="Cast",Wh="Ceil",$h="ClipByValue",sg="Complex",Sc="ComplexAbs",og="Concat",ag="Conv2D",lg="Conv2DBackpropFilter",cg="Conv2DBackpropInput",ug="Conv3D",hg="Conv3DBackpropFilterV2",fg="Conv3DBackpropInputV2";var qh="Cosh",dg="Cumprod",pg="Cumsum",mg="CropAndResize",gg="DenseBincount",xg="DepthToSpace",yg="DepthwiseConv2dNative",_g="DepthwiseConv2dNativeBackpropFilter",vg="DepthwiseConv2dNativeBackpropInput",Sg="Diag",bg="Dilation2D",Xh="Dilation2DBackpropInput",Yh="Dilation2DBackpropFilter",Mg="Draw",qo="RealDiv",wg="Einsum";var Tg="EluGrad";var Kh="Equal";var Eg="ExpandDims",Zh="Expm1";var bc="Fill",Ag="FlipLeftRight",Jh="Floor",Xo="FloorDiv",Ig="FusedBatchNorm",Cg="GatherV2",Rg="GatherNd",jh="Greater",Qh="GreaterEqual",Bs="Identity",Ng="IFFT",Pg="Imag",tf="IsFinite",ef="IsInf",nf="IsNan",Mc="LeakyRelu",rf="Less",sf="LessEqual",Dg="LinSpace";var of="Log1p",af="LogicalAnd",lf="LogicalNot",cf="LogicalOr";var Fg="LRNGrad";var Yo="Maximum",kg="MaxPool",Lg="MaxPoolGrad",Ug="MaxPool3D",Og="MaxPool3DGrad",Bg="MaxPoolWithArgmax",zg="Mean";var uf="Minimum",Vg="MirrorPad";var Hg="Multinomial",Ko="Multiply";var hf="NotEqual",Gg="NonMaxSuppressionV3",Wg="NonMaxSuppressionV4",$g="NonMaxSuppressionV5",qg="OnesLike",Xg="OneHot",Yg="Pack",Kg="PadV2";var wc="Prelu",Zg="Prod",Jg="RaggedGather",jg="RaggedRange",Qg="RaggedTensorToTensor",tx="Range",ex="Real",ff="Reciprocal",Zo="Relu",Tc="Reshape",nx="ResizeNearestNeighbor",ix="ResizeNearestNeighborGrad",rx="ResizeBilinear",sx="ResizeBilinearGrad",Jo="Relu6",ox="Reverse",df="Round",pf="Rsqrt",ax="ScatterNd",lx="TensorScatterUpdate",cx="SearchSorted",ux="Select",mf="Selu",hx="Slice";var gf="Sinh",xf="Sign",jo="Sigmoid",yf="Softplus",Qo="Sqrt";var fx="SpaceToBatchND",dx="SplitV",Ec="Softmax",px="SparseFillEmptyRows",mx="SparseReshape",gx="SparseSegmentMean",xx="SparseSegmentSum",yx="SparseToDense",_f="SquaredDifference",_x="Square",vf="StaticRegexReplace",vx="StridedSlice",Sx="StringNGrams",bx="StringSplit",Mx="StringToHashBucketFast";var Sf="Tanh",Ac="Tile",wx="TopK",Tx="Transform",Ex="Transpose",Ax="Unique",Ix="Unpack",Cx="UnsortedSegmentSum";var Ic="ZerosLike",ta="Step";var Rx="RotateWithOffset",Nx="_FusedMatMul",Px="FusedConv2D",Dx="FusedDepthwiseConv2D";function Li(...n){Vt().getBool("IS_TEST")||Vt().getBool("PROD")||console.warn(...n)}function $A(...n){Vt().getBool("IS_TEST")||Vt().getBool("PROD")||console.log(...n)}var Cc=$o("kernelRegistry",()=>new Map),qA=$o("gradRegistry",()=>new Map);function bf(n,t){let e=Lx(n,t);return Cc.get(e)}function Mf(n){return qA.get(n)}function wf(n){let t=Cc.entries(),e=[];for(;;){let{done:i,value:r}=t.next();if(i)break;let[s,o]=r,[a]=s.split("_");a===n&&e.push(o)}return e}function kx(n){let{kernelName:t,backendName:e}=n,i=Lx(t,e);Cc.has(i)&&Li(`The kernel '${t}' for backend '${e}' is already registered`),Cc.set(i,n)}function Lx(n,t){return`${t}_${n}`}var A={};Jr(A,{arraysEqual:()=>Ds,arraysEqualWithNull:()=>AA,assert:()=>Mt,assertNonNegativeIntegerDimensions:()=>ki,assertNonNull:()=>Ih,assertShapesMatch:()=>Vm,bytesFromStringArray:()=>Nh,bytesPerElement:()=>Fs,checkConversionForErrors:()=>Ch,clamp:()=>Ps,computeStrides:()=>fi,convertBackendValuesAndArrayBuffer:()=>LA,createScalarValue:()=>QA,createShuffledIndices:()=>RA,decodeString:()=>Ws,distSquared:()=>TA,encodeString:()=>Gs,fetch:()=>eI,fingerPrint64:()=>jA,flatten:()=>cr,getArrayFromDType:()=>_c,getTypedArrayFromDType:()=>FA,hasEncodingLoss:()=>kA,hexToLong:()=>ea,indexToLoc:()=>BA,inferDtype:()=>ar,inferFromImplicitShape:()=>PA,isBoolean:()=>Gm,isFunction:()=>Ls,isInt:()=>Go,isNumber:()=>Wm,isPromise:()=>Lr,isScalarShape:()=>EA,isString:()=>ks,isTypedArray:()=>Ye,isValidDtype:()=>Rh,locToIndex:()=>OA,makeOnesTypedArray:()=>Ph,makeZerosNestedTypedArray:()=>UA,makeZerosTypedArray:()=>vc,nearestDivisor:()=>Us,nearestLargerEven:()=>bA,now:()=>Vr,parseAxisParam:()=>Hm,randUniform:()=>wA,repeatedTry:()=>NA,rightPad:()=>kr,shuffle:()=>zm,shuffleCombo:()=>SA,sizeFromShape:()=>Fe,sizeToSquarishShape:()=>CA,squeezeShape:()=>DA,sum:()=>MA,swap:()=>yc,tanh:()=>IA,toNestedArray:()=>Fr,toTypedArray:()=>Hs});function Rc(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}var If=qd(Xx());var zr=If.default||If;function ea(n){return zr.fromString(n,!0,16)}var Kx=ea("c3a5c85c97cb3127"),Br=ea("b492b66fbe98f273"),nn=ea("9ae16a3b2f90404f");function Af(n){return n.xor(n.shru(47))}function Zx(n,t,e){let i=n.slice(t,t+e);return zr.fromBytes(Array.from(i),!0,!0)}function be(n,t){return Zx(n,t,8)}function Yx(n,t){return Zx(n,t,4)}function We(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function lr(n,t,e=ea("9ddfea08eb382d69")){let i=n.xor(t).mul(e);i=i.xor(i.shru(47));let r=t.xor(i).mul(e);return r=r.xor(r.shru(47)),r=r.mul(e),r}function YA(n,t,e,i,r,s){r=r.add(n),s=We(s.add(r).add(i),21);let o=r;return r=r.add(t),r=r.add(e),s=s.add(We(r,44)),[r.add(i),s.add(o)]}function Pc(n,t,e,i){return YA(be(n,t),be(n,t+8),be(n,t+16),be(n,t+24),e,i)}function KA(n,t=n.length){if(t>=8){let e=nn.add(t*2),i=be(n,0).add(nn),r=be(n,t-8),s=We(r,37).mul(e).add(i),o=We(i,25).add(r).mul(e);return lr(s,o,e)}if(t>=4){let e=nn.add(t*2),i=Yx(n,0);return lr(i.shl(3).add(t),Yx(n,t-4),e)}if(t>0){let e=n[0],i=n[t>>1],r=n[t-1],s=e+(i<<8),o=t+(r<<2);return Af(nn.mul(s).xor(Kx.mul(o))).mul(nn)}return nn}function ZA(n,t=n.length){let e=nn.add(t*2),i=be(n,0).mul(Br),r=be(n,8),s=be(n,t-8).mul(e),o=be(n,t-16).mul(nn);return lr(We(i.add(r),43).add(We(s,30)).add(o),i.add(We(r.add(nn),18)).add(s),e)}function JA(n,t=n.length){let e=nn.add(t*2),i=be(n,0).mul(nn),r=be(n,8),s=be(n,t-8).mul(e),o=be(n,t-16).mul(nn),a=We(i.add(r),43).add(We(s,30)).add(o),l=lr(a,i.add(We(r.add(nn),18)).add(s),e),c=be(n,16).mul(e),u=be(n,24),h=a.add(be(n,t-32)).mul(e),f=l.add(be(n,t-24)).mul(e);return lr(We(c.add(u),43).add(We(h,30)).add(f),c.add(We(u.add(i),18)).add(h),e)}function jA(n,t=n.length){let e=zr.fromNumber(81,!0);if(t<=32)return t<=16?KA(n,t):ZA(n,t);if(t<=64)return JA(n,t);let i=e,r=e.mul(Br).add(113),s=Af(r.mul(nn).add(113)).mul(nn),o=[zr.UZERO,zr.UZERO],a=[zr.UZERO,zr.UZERO];i=i.mul(nn).add(be(n,0));let l=0,c=(t-1>>6)*64,u=c+(t-1&63)-63;do i=We(i.add(r).add(o[0]).add(be(n,l+8)),37).mul(Br),r=We(r.add(o[1]).add(be(n,l+48)),42).mul(Br),i=i.xor(a[1]),r=r.add(o[0]).add(be(n,l+40)),s=We(s.add(a[0]),33).mul(Br),o=Pc(n,l,o[1].mul(Br),i.add(a[0])),a=Pc(n,l+32,s.add(a[1]),r.add(be(n,l+16))),[s,i]=[i,s],l+=64;while(l!==c);let h=Br.add(s.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),o[0]=o[0].add(a[0]),a[0]=a[0].add(o[0]),i=We(i.add(r).add(o[0]).add(be(n,l+8)),37).mul(h),r=We(r.add(o[1]).add(be(n,l+48)),42).mul(h),i=i.xor(a[1].mul(9)),r=r.add(o[0].mul(9).add(be(n,l+40))),s=We(s.add(a[0]),33).mul(h),o=Pc(n,l,o[1].mul(h),i.add(a[0])),a=Pc(n,l+32,s.add(a[1]),r.add(be(n,l+16))),[s,i]=[i,s],lr(lr(o[0],a[0],h).add(Af(r).mul(Kx)).add(s),lr(o[1],a[1],h).add(i),h)}function QA(n,t){return t==="string"?Gs(n):Hs([n],t)}function tI(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Hs(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=cr(n)),Vt().getBool("DEBUG")&&Ch(n,t),tI(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){let e=new Uint8Array(n.length);for(let i=0;i<e.length;++i)Math.round(n[i])!==0&&(e[i]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Vr(){return Vt().platform.now()}function eI(n,t){return Vt().platform.fetch(n,t)}function Gs(n,t="utf-8"){return t=t||"utf-8",Vt().platform.encode(n,t)}function Ws(n,t="utf-8"){return t=t||"utf-8",Vt().platform.decode(n,t)}function Ye(n){return Vt().platform.isTypedArray!=null?Vt().platform.isTypedArray(n):Rc(n)}function cr(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Lr(n)||n==null||Ye(n)&&e)t.push(n);else if(Array.isArray(n)||Ye(n))for(let i=0;i<n.length;++i)cr(n[i],t,e);else{let i=-1;for(let r of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(r)&&(i=Math.max(i,Number(r)));for(let r=0;r<=i;r++)cr(n[r],t,e)}return t}var Dc=class{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Cf)}profileKernel(t,e,i){let r,s=()=>{r=i()},o,a=Vr();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(s);else{s();for(let c of r)c.dataSync();o=Promise.resolve({kernelMs:Vr()-a})}if(Vt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<r.length;c++){let u=r[c];u.data().then(h=>{nI(h,u.dtype,t)})}return{kernelName:t,outputs:r,inputs:e,timeMs:o.then(c=>c.kernelMs),extraInfo:o.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:e,outputs:i,timeMs:r,inputs:s,extraInfo:o}=t;i.forEach(a=>{Promise.all([a.data(),r,o]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],s,l[2])})})}};function nI(n,t,e){if(t!=="float32")return!1;for(let i=0;i<n.length;i++){let r=n[i];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}var Cf=class{logKernelProfile(t,e,i,r,s,o){let a=typeof r=="number"?kr(`${r}ms`,9):r.error,l=kr(t,25),c=e.rank,u=e.size,h=kr(e.shape.toString(),14),f="";for(let d in s){let g=s[d];if(g!=null){let x=g.shape||e.shape,m=x.length;f+=`${d}: ${m}D ${m>0?x:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${f}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function Jx(n,t,e){let i={},r={};for(let l=0;l<t.length;l++)i[t[l].id]=!0;for(let l=0;l<n.length;l++){let c=n[l],u=c.inputs;for(let h in u){let f=u[h],d=!1;for(let g=0;g<t.length;g++)if(i[f.id]){c.outputs.forEach(x=>i[x.id]=!0),d=!0,r[c.id]=!0;break}if(d)break}}let s={};s[e.id]=!0;let o={};for(let l=n.length-1;l>=0;l--){let c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(s[c.outputs[h].id]){for(let f in u)s[u[f].id]=!0,o[c.id]=!0;break}}let a=[];for(let l=0;l<n.length;l++){let c=n[l];if(r[c.id]&&o[c.id]){let u={};for(let f in c.inputs){let d=c.inputs[f];i[d.id]&&(u[f]=d)}let h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function jx(n,t,e,i){for(let r=t.length-1;r>=0;r--){let s=t[r],o=[];if(s.outputs.forEach(l=>{let c=n[l.id];c!=null?o.push(c):o.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(o);for(let l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);let c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);let u=s.inputs[l];if(!Ds(c.shape,u.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{let h=n[u.id];n[u.id]=i(h,c),h.dispose()}}}}var Qx=20,na=3,Rf=7;function t0(n,t,e,i){let r=fi(t),s=iI(n,t,e,r),o=t.length,a=Fc(n,t,e,r,s),l=["Tensor"];return i&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${o}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function iI(n,t,e,i){let r=Fe(t),s=i[i.length-1],o=new Array(s).fill(0),a=t.length,l=e==="complex64"?ra(n):n;if(a>1)for(let c=0;c<r/s;c++){let u=c*s;for(let h=0;h<s;h++)o[h]=Math.max(o[h],ia(l[u+h],0,e).length)}return o}function ia(n,t,e){let i;return Array.isArray(n)?i=`${parseFloat(n[0].toFixed(Rf))} + ${parseFloat(n[1].toFixed(Rf))}j`:ks(n)?i=`'${n}'`:e==="bool"?i=e0(n):i=parseFloat(n.toFixed(Rf)).toString(),kr(i,t)}function e0(n){return n===0?"false":"true"}function Fc(n,t,e,i,r,s=!0){let o=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){let x=ra(n);return[ia(x[0],0,e)]}return e==="bool"?[e0(n[0])]:[n[0].toString()]}if(l===1){if(a>Qx){let m=na*o,p=Array.from(n.slice(0,m)),v=Array.from(n.slice((a-na)*o,a*o));return e==="complex64"&&(p=ra(p),v=ra(v)),["["+p.map((_,y)=>ia(_,r[y],e)).join(", ")+", ..., "+v.map((_,y)=>ia(_,r[a-na+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?ra(n):Array.from(n)).map((m,p)=>ia(m,r[p],e)).join(", ")+"]"]}let c=t.slice(1),u=i.slice(1),h=i[0]*o,f=[];if(a>Qx){for(let x=0;x<na;x++){let m=x*h,p=m+h;f.push(...Fc(n.slice(m,p),c,e,u,r,!1))}f.push("...");for(let x=a-na;x<a;x++){let m=x*h,p=m+h;f.push(...Fc(n.slice(m,p),c,e,u,r,x===a-1))}}else for(let x=0;x<a;x++){let m=x*h,p=m+h;f.push(...Fc(n.slice(m,p),c,e,u,r,x===a-1))}let d=l===2?",":"";f[0]="["+(a>0?f[0]+d:"");for(let x=1;x<f.length-1;x++)f[x]=" "+f[x]+d;let g=`,
`;for(let x=2;x<l;x++)g+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(s?"":g),f}function ra(n){let t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var he=class{constructor(t,e,i){if(this.dtype=e,this.shape=t.slice(),this.size=Fe(t),i!=null){let r=i.length;Mt(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=i||_c(e,this.size),this.strides=fi(t)}set(t,...e){e.length===0&&(e=[0]),Mt(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);let i=this.locToIndex(e);this.values[i]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(let r of t){if(r<0||r>=this.shape[e]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}e++}let i=t[t.length-1];for(let r=0;r<t.length-1;++r)i+=this.strides[r]*t[r];return this.values[i]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let i=0;i<t.length-1;++i)e+=this.strides[i]*t[i];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let e=new Array(this.shape.length);for(let i=0;i<e.length-1;++i)e[i]=Math.floor(t/this.strides[i]),t-=e[i]*this.strides[i];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return ei().makeTensor(this.values,this.shape,this.dtype)}},ei=null,$s=null,rI=null;function n0(n){ei=n}function i0(n){$s=n}function r0(n){rI=n}var Ke=class{constructor(t,e,i,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Fe(t),this.strides=fi(t),this.dataId=i,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return $s.buffer(this.shape,this.dtype,t)}bufferSync(){return $s.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Fr(this.shape,t,this.dtype==="complex64")}arraySync(){return Fr(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=ei().read(this.dataId);if(this.dtype==="string"){let e=await t;try{return e.map(i=>Ws(i))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),ei().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=ei().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Ws(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await ei().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),ei().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return $s.print(this,t)}clone(){return this.throwIfDisposed(),$s.clone(this)}toString(t=!1){let e=this.dataSync();return t0(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),$s.cast(this,t)}variable(t=!0,e,i){return this.throwIfDisposed(),ei().makeVariable(this,t,e,i)}};Object.defineProperty(Ke,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Nf(){return $o("Tensor",()=>Ke)}Nf();var Ui=class extends Ke{constructor(t,e,i,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=i}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Ds(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);ei().disposeTensor(this),this.dataId=t.dataId,ei().incRef(this,null)}dispose(){ei().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Ui,Symbol.hasInstance,{value:n=>n instanceof Ke&&n.assign!=null&&n.assign instanceof Function});var Pf;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Pf||(Pf={}));var Df;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Df||(Df={}));var Ff;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Ff||(Ff={}));var kf;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(kf||(kf={}));var Lf;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Lf||(Lf={}));var sI={float32:kf,int32:Df,bool:Ff,complex64:Lf};function In(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return sI[n][t]}function kc(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Lc(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function _n(n,t){if(n.dtype===t.dtype)return[n,t];let e=In(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Uc(n){let t=[];return s0(n,t,new Set),t}function s0(n,t,e){if(n==null)return;if(n instanceof Ke){t.push(n);return}if(!oI(n))return;let i=n;for(let r in i){let s=i[r];e.has(s)||(e.add(s),s0(s,t,e))}}function oI(n){return Array.isArray(n)||typeof n=="object"}function Uf(n){return n.kernelName!=null}var Oc=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},sa=class n{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Oc}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let i=t[e];if(await this.initializeBackend(i).success){await this.setBackend(i);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,i=1){return t in this.registryFactory?(Li(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:i},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:e,asyncInit:i}=this.initializeBackend(t);if(!(i?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Dc(this.backendInstance),!0}setupRegisteredKernels(){wf(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){wf(t).forEach(i=>{i.disposeFunc!=null&&i.disposeFunc(this.registry[t])})}initializeBackend(t){let e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let i=e.factory();if(i&&!(i instanceof Dr)&&typeof i.then=="function"){let r=++this.pendingBackendInitId,s=i.then(o=>r<this.pendingBackendInitId?!1:(this.registry[t]=o,this.pendingBackendInit=null,!0)).catch(o=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Li(`Initialization of backend ${t} failed`),Li(o.stack||o.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=i,{success:!0,asyncInit:!1}}catch(i){return Li(`Initialization of backend ${t} failed`),Li(i.stack||i.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let i=t[e],{success:r,asyncInit:s}=this.initializeBackend(i);if(s||r)return{name:i,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){let i=this.state.tensorInfo.get(e),r=i.backend,s=this.readSync(e),o=r.refCount(e);r.disposeData(e,!0),i.backend=t,t.move(e,s,i.shape,i.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}let r;return this.scopedRun(()=>this.startScope(i),()=>this.endScope(r),()=>(r=e(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,e,i){t();try{let r=i();return e(),r}catch(r){throw e(),r}}nextTensorId(){return n.nextTensorId++}nextVariableId(){return n.nextVariableId++}clone(t){let e=ht.runKernel(Bs,{x:t}),i={x:t},r=o=>({x:()=>{let a="float32",l={x:o},c={dtype:a};return ht.runKernel(Os,l,c)}}),s=[];return this.addTapeNode(this.state.activeScope.name,i,[e],r,s,{}),e}runKernel(t,e,i){if(this.backendName==null&&this.backend,!(bf(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:i})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,i){let r=this.backend.numDataIds(),s=0;i.forEach(l=>{s+=l.dtype==="complex64"?3:1});let o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=r-e-s-o;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,i=[],r=this.isTapeOn(),s=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l,c=Uf(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Uf(t)){let{kernelName:g,inputs:x,attrs:m}=t;this.backendName==null&&this.backend;let p=bf(g,this.backendName);Mt(p!=null,()=>`Cannot find registered kernel '${g}' for backend '${this.backendName}'`),a=()=>{let v=this.backend.numDataIds();l=p.kernelFunc({inputs:x,attrs:m,backend:this.backend});let _=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(g,v,_);let y=_.map(S=>S.rank!=null?S:this.makeTensorFromTensorInfo(S));if(r){let S=this.getTensorsForGradient(g,x,y);i=this.saveTensorsForBackwardMode(S)}return y}}else{let{forwardFunc:g}=t,x=m=>{r&&(i=m.map(p=>this.keep(this.clone(p))))};a=()=>{let m=this.backend.numDataIds();l=this.tidy(()=>g(this.backend,x));let p=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,m,p),p}}let{inputs:u,attrs:h}=t,f=Uf(t)?null:t.backwardsFunc,d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(d=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),e=d.outputs)}),r&&this.addTapeNode(c,u,e,f,i,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(g=>u[g]!=null?u[g].shape:null),outputShapes:e.map(g=>g.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(i=>this.keep(this.clone(i)))}getTensorsForGradient(t,e,i){let r=Mf(t);if(r!=null){let s=r.inputsToSave||[],o=r.outputsToSave||[],a;r.saveAllInputs?(Mt(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=s.map(c=>e[c]);let l=i.filter((c,u)=>o[u]);return a.concat(l)}return[]}makeTensor(t,e,i,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");i=i||"float32",r=r||this.backend;let s=t;i==="string"&&ks(t[0])&&(s=t.map(l=>Gs(l)));let o=r.write(s,e,i),a=new Ke(e,i,o,this.nextTensorId());if(this.trackTensor(a,r),i==="string"){let l=this.state.tensorInfo.get(o),c=Nh(s);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,i,r){i=i||"float32";let s={dataId:t,shape:e,dtype:i};return this.makeTensorFromTensorInfo(s,r)}makeTensorFromTensorInfo(t,e){let{dataId:i,shape:r,dtype:s}=t,o=new Ke(r,s,i,this.nextTensorId());return this.trackTensor(o,e),o}makeVariable(t,e=!0,i,r){i=i||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));let s=new Ui(t,e,i,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let i=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(i=t.size*Fs(t.dtype)),this.state.numBytes+=i,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:i})),t instanceof Ui||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let i=t.size*Fs(t.dtype);this.state.numBytes-=i}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let e=this.state.numBytes,i=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-i;for(let r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,i,r,s,o){let a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:i,saved:s},l=Mf(t);l!=null&&(r=l.gradFunc),r!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){let f=i[h],d=vc(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return u}),r(c.length>1?c:c[0],s,o))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){let e=Uc(t),i=new Set(e.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let o=this.state.activeScope.track[s];!o.kept&&!i.has(o.id)&&o.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(s=>{!s.kept&&s.scopeId===r.id&&this.track(s)})}gradients(t,e,i,r=!1){if(Mt(e.length>0,()=>"gradients() received an empty list of xs."),i!=null&&i.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${i.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));Mt(s instanceof Ke,()=>"The result y returned by f() must be a tensor.");let o=Jx(this.state.activeTape,e,s);if(!r&&o.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[s.id]=i??aI(s.shape),jx(a,o,c=>this.tidy(c),lI);let l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(let u of c.saved)u.dispose()}),this.state.activeTape=null),{value:s,grads:l}})}customGrad(t){return Mt(Ls(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{Mt(e.every(a=>a instanceof Ke),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let i,r={};e.forEach((a,l)=>{r[l]=a});let s=(a,l)=>(i=t(...e,l),Mt(i.value instanceof Ke,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),Mt(Ls(i.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),i.value),o=(a,l)=>{let c=i.gradFunc(a,l),u=Array.isArray(c)?c:[c];Mt(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),Mt(u.every(f=>f instanceof Ke),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let h={};return u.forEach((f,d)=>{h[d]=()=>f}),h};return this.runKernelFunc({forwardFunc:s,backwardsFunc:o,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){let e=Vr(),i=await this.backend.time(t);return i.wallMs=Vr()-e,i}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Oc;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};sa.nextTensorId=0;sa.nextVariableId=0;function aI(n){let t=Ph(Fe(n),"float32");return ht.makeTensor(t,n,"float32")}function Of(){let n=kh();if(n._tfengine==null){let t=new Wo(n);n._tfengine=new sa(t)}return Xm(n._tfengine.ENV),n0(()=>n._tfengine),n._tfengine}var ht=Of();function lI(n,t){let e={a:n,b:t};return ht.runKernel("Add",e)}function o0(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var an=Vt();an.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});an.registerFlag("IS_BROWSER",()=>o0());an.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");an.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));an.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));an.registerFlag("PROD",()=>!1);an.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>an.getBool("DEBUG"));an.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);an.registerFlag("IS_TEST",()=>!1);an.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>an.getBool("DEBUG"));an.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);an.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);an.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Bf(n,t){let e=n;if(Ye(n))return t==="string"?[]:[n.length];if(kc(n)){let r=n.channels||"RGBA";return[n.height,n.width*r.length]}else if(Lc(n))return[n.buffer.size/(t==null?4:Fs(t))];if(!Array.isArray(n))return[];let i=[];for(;Array.isArray(e)||Ye(e)&&t!=="string";)i.push(e.length),e=e[0];return Array.isArray(n)&&Vt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&l0(n,i,[]),i}function l0(n,t,e){if(e=e||[],!Array.isArray(n)&&!Ye(n)){Mt(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}Mt(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),Mt(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);let i=t.slice(1);for(let r=0;r<n.length;++r)l0(n[r],i,e.concat(r))}function a0(n,t,e,i){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${i}' must be ${n} tensor, but got ${t} tensor`)}}function Bt(n,t,e,i="numeric"){if(n instanceof Nf())return a0(i,n.dtype,t,e),n;let r=ar(n);if(r!=="string"&&["bool","int32","float32"].indexOf(i)>=0&&(r=i),a0(i,r,t,e),n==null||!Ye(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){let l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}let s=Bf(n,r);!Ye(n)&&!Array.isArray(n)&&(n=[n]);let a=r!=="string"?Hs(n,r):cr(n,[],!0);return ht.makeTensor(a,s,r)}var uI="__op";function Kt(n){let t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0],i=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+uI;let r=(...s)=>{ht.startScope(e);try{let o=i(...s);return Lr(o)&&console.error("Cannot return a Promise inside of tidy."),ht.endScope(o),o}catch(o){throw ht.endScope(null),o}};return Object.defineProperty(r,"name",{value:e,configurable:!0}),r}function Bc(n,t,e,i){if(i==null)i=ar(n);else if(i==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Lc(n)||kc(n)){if(i!=="float32"&&i!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${i}.`);return ht.backend.createTensorFromGPUData(n,t||e,i)}if(!Ye(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ki(t);let r=Fe(t),s=Fe(e);Mt(r===s,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${s}`);for(let o=0;o<e.length;++o){let a=e[o],l=o===e.length-1?a!==Fe(t.slice(o)):!0;Mt(e[o]===t[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!Ye(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=i!=="string"?Hs(n,i):cr(n,[],!0),ht.makeTensor(n,t,i)}var vn=class n{static join(t){return new n(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(i=>Ye(i)?i.buffer:i),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let i=0;i<t.length;i++){let r=t[i];i!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let s=e+r.byteLength;this.shards.push({buffer:r,start:e,end:s}),e=s}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);let i=this.findShardForByte(t);if(i===-1)throw new Error(`Could not find start shard for byte ${t}`);let r=e-t,s=new ArrayBuffer(r),o=new Uint8Array(s),a=0;for(let l=i;l<this.shards.length;l++){let c=this.shards[l],h=t+a-c.start,f=a,g=Math.min(e,c.end)-c.start,x=new Uint8Array(c.buffer,h,g-h);if(o.set(x,f),a+=x.length,e<c.end)break}return s}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(r){return t<r.start?-1:t>=r.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let i=hI(this.shards,e);return i===-1?-1:(this.previousShardIndex=i,this.previousShardIndex)}};function hI(n,t){let e=0,i=n.length;for(;e<=i;){let r=Math.floor((i-e)/2)+e,s=t(n[r]);if(s===0)return r;s<0?i=r:e=r+1}return-1}function fI(n){Vt().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}r0(fI);function zf(){return ht}function me(n,t){return ht.tidy(n,t)}function Oe(n){Uc(n).forEach(e=>e.dispose())}function c0(n){return ht.keep(n)}function u0(n){return ht.setBackend(n)}function h0(){return ht.ready()}function f0(n,t,e=1){return ht.registerBackend(n,t,e)}var Vf=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function d0(n){return Vf?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function p0(n){if(Vf)return Buffer.from(n).toString("base64");let t=new Uint8Array(n),e="";for(let i=0,r=t.length;i<r;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function m0(n){if(Vf){let i=Buffer.from(n,"base64");return i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength)}let t=atob(n),e=new Uint8Array(t.length);for(let i=0;i<t.length;++i)e.set([t.charCodeAt(i)],i);return e.buffer}function zc(n,t){let e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function g0(n,t,e){let i={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(i.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");i.weightSpecs=t,i.weightData=e}return n.signature!=null&&(i.signature=n.signature),n.userDefinedMetadata!=null&&(i.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(i.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(i.initializerSignature=n.initializerSignature),i}async function Vc(n,t){let e,i;return n.weightsManifest!=null&&([e,i]=await t(n.weightsManifest)),g0(n,e,i)}function Oi(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:d0(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:d0(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new vn(n.weightData).byteLength}}function Hc(n){let t=[];for(let e of n)t.push(...e.weights);return t}var Sn=class n{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return n.instance==null&&(n.instance=new n),n.instance}static registerSaveRouter(t){n.getInstance().saveRouters.push(t)}static registerLoadRouter(t){n.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return n.getHandlers(t,"save")}static getLoadHandlers(t,e){return n.getHandlers(t,"load",e)}static getHandlers(t,e,i){let r=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(o=>{let a=o(t,i);a!==null&&r.push(a)}),r}};var Hf="tensorflowjs",Gf=1,Hr="models_store",ur="model_info_store";function x0(){if(!Vt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Wf(n){let t=n.result;t.createObjectStore(Hr,{keyPath:"modelPath"}),t.createObjectStore(ur,{keyPath:"modelPath"})}var di=class{constructor(t){if(this.indexedDB=x0(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((i,r)=>{let s=this.indexedDB.open(Hf,Gf);s.onupgradeneeded=()=>Wf(s),s.onsuccess=()=>{let o=s.result;if(e==null){let a=o.transaction(Hr,"readonly"),c=a.objectStore(Hr).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return o.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));i(c.result.modelArtifacts)},c.onerror=u=>(o.close(),r(c.error)),a.oncomplete=()=>o.close()}else{e.weightData=vn.join(e.weightData);let a=Oi(e),l=o.transaction(ur,"readwrite"),c=l.objectStore(ur),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(f){return r(f)}let h;u.onsuccess=()=>{h=o.transaction(Hr,"readwrite");let f=h.objectStore(Hr),d;try{d=f.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(g){return r(g)}d.onsuccess=()=>i({modelArtifactsInfo:a}),d.onerror=g=>{c=l.objectStore(ur);let x=c.delete(this.modelPath);x.onsuccess=()=>(o.close(),r(d.error)),x.onerror=m=>(o.close(),r(d.error))}},u.onerror=f=>(o.close(),r(u.error)),l.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},s.onerror=o=>r(s.error)})}};di.URL_SCHEME="indexeddb://";var y0=n=>Vt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(di.URL_SCHEME)?pI(n.slice(di.URL_SCHEME.length)):null;Sn.registerSaveRouter(y0);Sn.registerLoadRouter(y0);function pI(n){return new di(n)}function mI(n){return n.startsWith(di.URL_SCHEME)?n.slice(di.URL_SCHEME.length):n}var Gc=class{constructor(){this.indexedDB=x0()}async listModels(){return new Promise((t,e)=>{let i=this.indexedDB.open(Hf,Gf);i.onupgradeneeded=()=>Wf(i),i.onsuccess=()=>{let r=i.result,s=r.transaction(ur,"readonly"),a=s.objectStore(ur).getAll();a.onsuccess=()=>{let l={};for(let c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(r.close(),e(a.error)),s.oncomplete=()=>r.close()},i.onerror=r=>e(i.error)})}async removeModel(t){return t=mI(t),new Promise((e,i)=>{let r=this.indexedDB.open(Hf,Gf);r.onupgradeneeded=()=>Wf(r),r.onsuccess=()=>{let s=r.result,o=s.transaction(ur,"readwrite"),a=o.objectStore(ur),l=a.get(t),c;l.onsuccess=()=>{if(l.result==null)return s.close(),i(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let u=a.delete(t),h=()=>{c=s.transaction(Hr,"readwrite");let d=c.objectStore(Hr).delete(t);d.onsuccess=()=>e(l.result.modelArtifactsInfo),d.onerror=g=>i(l.error)};u.onsuccess=h,u.onerror=f=>(h(),s.close(),i(l.error))}},l.onerror=u=>(s.close(),i(l.error)),o.oncomplete=()=>{c==null?s.close():c.oncomplete=()=>s.close()}},r.onerror=s=>i(r.error)})}};var Bi="/",qs="tensorflowjs_models",_0="info",gI="model_topology",xI="weight_specs",yI="weight_data",_I="model_metadata";function v0(n){return{info:[qs,n,_0].join(Bi),topology:[qs,n,gI].join(Bi),weightSpecs:[qs,n,xI].join(Bi),weightData:[qs,n,yI].join(Bi),modelMetadata:[qs,n,_I].join(Bi)}}function S0(n){for(let t of Object.values(n))window.localStorage.removeItem(t)}function vI(n){let t=n.split(Bi);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Bi)}function SI(n){return n.startsWith(pi.URL_SCHEME)?n.slice(pi.URL_SCHEME.length):n}var pi=class{constructor(t){if(!Vt().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=v0(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let e=JSON.stringify(t.modelTopology),i=JSON.stringify(t.weightSpecs),r=Oi(t),s=vn.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,i),this.LS.setItem(this.keys.weightData,p0(s));let o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:r}}catch{throw S0(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let e={},i=JSON.parse(this.LS.getItem(this.keys.topology));if(i==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=i;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let a=JSON.parse(s);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}let o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=m0(o),e}};pi.URL_SCHEME="localstorage://";var b0=n=>Vt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(pi.URL_SCHEME)?bI(n.slice(pi.URL_SCHEME.length)):null;Sn.registerSaveRouter(b0);Sn.registerLoadRouter(b0);function bI(n){return new pi(n)}var Wc=class{constructor(){Mt(Vt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),Mt(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},e=qs+Bi,i=Bi+_0;for(let r=0;r<this.LS.length;++r){let s=this.LS.key(r);if(s.startsWith(e)&&s.endsWith(i)){let o=vI(s);t[o]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=SI(t);let e=v0(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);let i=JSON.parse(this.LS.getItem(e.info));return S0(e),i}};var M0="://",aa=class n{constructor(){this.managers={}}static getInstance(){return n.instance==null&&(n.instance=new n),n.instance}static registerManager(t,e){Mt(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(M0)&&(t=t.slice(0,t.indexOf(M0))),Mt(t.length>0,()=>"scheme must not be an empty string.");let i=n.getInstance();Mt(i.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),i.managers[t]=e}static getManager(t){let e=n.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(n.getInstance().managers)}};var $f=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!Vt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",i=>{if(i.source===window&&i.data.name===this.messageName){i.stopPropagation();let r=this.functionRefs[i.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Rc(t)}};if(Vt().get("IS_BROWSER")){Vt().setPlatform("browser",new $f);try{aa.registerManager(pi.URL_SCHEME,new Wc)}catch{}try{aa.registerManager(di.URL_SCHEME,new Gc)}catch{}}var MI={importFetch:()=>w0()},qf;var Xf=class{constructor(){this.util=T0(),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return Vt().global.fetch!=null?Vt().global.fetch(t,e):(qf==null&&(qf=MI.importFetch()),qf(t,e))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};Vt().get("IS_NODE")&&!Vt().get("IS_BROWSER")&&Vt().setPlatform("node",new Xf);function Ht(n,t="float32",e){return t=t||"float32",ki(n),new he(n,t,e)}function wI(n,t){let e=Bt(n,"x","cast");if(!Rh(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");let i={x:e},r={dtype:t};return ht.runKernel(Os,i,r)}var Gr=Kt({cast_:wI});function TI(n){let e={x:Bt(n,"x","clone","string_or_numeric")};return ht.runKernel(Bs,e)}var $c=Kt({clone_:TI});function E0(n,t=!1){console.log(n.toString(t))}Of();var EI={buffer:Ht,cast:Gr,clone:$c,print:E0};i0(EI);function AI(n,t){let e=Bt(n,"a","add"),i=Bt(t,"b","add");[e,i]=_n(e,i);let r={a:e,b:i};return ht.runKernel("Add",r)}var le=Kt({add_:AI});function II(n,t){let e=Bt(n,"a","floorDiv"),i=Bt(t,"b","floorDiv");[e,i]=_n(e,i);let r={a:e,b:i};return ht.runKernel(Xo,r)}var A0=Kt({floorDiv_:II});function CI(n,t){let e=Bt(n,"a","div"),i=Bt(t,"b","div");if([e,i]=_n(e,i),e.dtype==="int32"&&i.dtype==="int32")return A0(e,i);let r={a:e,b:i},s={};return ht.runKernel(qo,r,s)}var qe=Kt({div_:CI});function RI(n,t){let e=Bt(n,"a","mul"),i=Bt(t,"b","mul");[e,i]=_n(e,i);let r={a:e,b:i};return ht.runKernel(Ko,r)}var jt=Kt({mul_:RI});function NI(n){let t=Bt(n,"x","abs");if(t.dtype==="complex64"){let e={x:t};return ht.runKernel(Sc,e)}else{let e={x:t};return ht.runKernel("Abs",e)}}var I0=Kt({abs_:NI});function PI(n,t,e,i,r="NHWC",s){let o=n[3],a=[...t,o],l=R0(r);return Jf(n,a,e,s,i,null,null,l)}function DI(n,t,e,i,r,s,o="channelsLast"){let[a,l]=la(t),c;if(o==="channelsLast")c=[a,l,n[3],n[3]];else if(o==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return Jf(n,c,e,i,r,s,!1,o)}function FI(n,t,e,i,r,s,o="NDHWC"){let[a,l,c]=Kf(t),u,h;if(o==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(o==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return C0(n,u,e,i,r,!1,h,s)}function Jf(n,t,e,i,r,s,o=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);let[f,d,,g]=t,[x,m]=la(e),[p,v]=la(i),_=Xs(f,p),y=Xs(d,v),{padInfo:S,outHeight:b,outWidth:T}=UI(r,c,u,x,m,_,y,s,a),R=o?g*h:g,w;return a==="channelsFirst"?w=[l,R,b,T]:a==="channelsLast"&&(w=[l,b,T,R]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:b,outWidth:T,outChannels:R,padInfo:S,strideHeight:x,strideWidth:m,filterHeight:f,filterWidth:d,effectiveFilterHeight:_,effectiveFilterWidth:y,dilationHeight:p,dilationWidth:v,inShape:n,outShape:w,filterShape:t}}function C0(n,t,e,i,r,s=!1,o="channelsLast",a){let[l,c,u,h,f]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[l,c,u,h,f]=n;else if(o==="channelsFirst")[l,f,c,u,h]=n;else throw new Error(`Unknown dataFormat ${o}`);let[d,g,x,,m]=t,[p,v,_]=Kf(e),[y,S,b]=Kf(i),T=Xs(d,y),R=Xs(g,S),w=Xs(x,b),{padInfo:M,outDepth:C,outHeight:D,outWidth:F}=OI(r,c,u,h,p,v,_,T,R,w,a),L=s?m*f:m,U;return o==="channelsFirst"?U=[l,L,C,D,F]:o==="channelsLast"&&(U=[l,C,D,F,L]),{batchSize:l,dataFormat:o,inDepth:c,inHeight:u,inWidth:h,inChannels:f,outDepth:C,outHeight:D,outWidth:F,outChannels:L,padInfo:M,strideDepth:p,strideHeight:v,strideWidth:_,filterDepth:d,filterHeight:g,filterWidth:x,effectiveFilterDepth:T,effectiveFilterHeight:R,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:S,dilationWidth:b,inShape:n,outShape:U,filterShape:t}}function kI(n,t,e,i,r){i==null&&(i=jf(n,t,e));let s=n[0],o=n[1],a=ca((s-t+2*i)/e+1,r),l=ca((o-t+2*i)/e+1,r);return[a,l]}function LI(n,t,e,i,r,s){r==null&&(r=jf(n,t[0],i[0]));let o=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*r>=t[a]&&(o[a]=ca((n[a]-t[a]+2*r)/i[a]+1,s));return o}function jf(n,t,e,i=1){let r=Xs(t,i);return Math.floor((n[0]*(e-1)-e+r)/2)}function la(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Kf(n){return typeof n=="number"?[n,n,n]:n}function Xs(n,t){return t<=1?n:n+(n-1)*(t-1)}function UI(n,t,e,i,r,s,o,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};let d=kI([t,e],s,i,n,a);u=d[0],h=d[1]}else if(n==="same"){u=Math.ceil(t/i),h=Math.ceil(e/r);let f=Math.max(0,(u-1)*i+s-t),d=Math.max(0,(h-1)*r+o-e),g=Math.floor(f/2),x=f-g,m=Math.floor(d/2),p=d-m;c={top:g,bottom:x,left:m,right:p,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-s+1)/i),h=Math.ceil((e-o+1)/r);else if(typeof n=="object"){let f=l==="channelsLast"?n[1][0]:n[2][0],d=l==="channelsLast"?n[1][1]:n[2][1],g=l==="channelsLast"?n[2][0]:n[3][0],x=l==="channelsLast"?n[2][1]:n[3][1];c={top:f,bottom:d,left:g,right:x,type:f===0&&d===0&&g===0&&x===0?"VALID":"EXPLICIT"},u=ca((t-s+f+d)/i+1,a),h=ca((e-o+g+x)/r+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function OI(n,t,e,i,r,s,o,a,l,c,u){let h,f,d,g;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};let m=LI([t,e,i,1],[a,l,c],1,[r,s,o],n,u);f=m[0],d=m[1],g=m[2]}else if(n==="same"){f=Math.ceil(t/r),d=Math.ceil(e/s),g=Math.ceil(i/o);let x=(f-1)*r+a-t,m=(d-1)*s+l-e,p=(g-1)*o+c-i,v=Math.floor(x/2),_=x-v,y=Math.floor(m/2),S=m-y,b=Math.floor(p/2),T=p-b;h={top:y,bottom:S,left:b,right:T,front:v,back:_,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:f,outHeight:d,outWidth:g}}function ca(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function Zf(n){let[t,e,i]=la(n);return t===1&&e===1&&i===1}function BI(n,t){return Zf(n)||Zf(t)}function zI(n){return la(n).every(t=>t>0)}function R0(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function VI(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")Mt(Go(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(i=>{i.forEach(r=>{Mt(Go(r),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${r}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function HI(n,t){let i={x:Bt(n,"x","reshape","string_or_numeric")},r={shape:t};return ht.runKernel(Tc,i,r)}var Wr=Kt({reshape_:HI});function GI(n){let e={x:Bt(n,"x","sigmoid","float32")};return ht.runKernel(jo,e)}var N0=Kt({sigmoid_:GI});function WI(n,t){let e=Bt(n,"broadcastTo","x"),i=e.shape;if(ki(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){let c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=Wr(e,c)}let r=e.shape,s=Array.from(t);for(let c=t.length-1;c>=0;c--)if(r[c]===t[c])s[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${i}] cannot be broadcast to [${t}].`);if(s.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return $c(e);let a={x:e},l={reps:s};return ht.runKernel(Ac,a,l)}var Qf=Kt({broadcastTo_:WI});function P0(n,t,e){ki(n),e=e||ar(t);let i={shape:n,value:t,dtype:e};return ht.runKernel(bc,{},i)}var ua={};Jr(ua,{assertAndGetBroadcastShape:()=>Xc,getBroadcastDims:()=>D0,getReductionAxes:()=>qc});function D0(n,t){let e=n.length,i=[];for(let r=0;r<e;r++){let s=e-1-r,o=n[s]||1;(t[t.length-1-r]||1)>1&&o===1&&i.unshift(s)}return i}function qc(n,t){let e=[];for(let i=0;i<t.length;i++){let r=n[n.length-i-1],s=t.length-i-1,o=t[s];(r==null||r===1&&o>1)&&e.unshift(s)}return e}function Xc(n,t){let e=Math.max(n.length,t.length),i=new Array(e);for(let r=0;r<e;r++){let s=n[n.length-r-1];s==null&&(s=1);let o=t[t.length-r-1];if(o==null&&(o=1),s===1)i[e-r-1]=o;else if(o===1)i[e-r-1]=s;else if(s!==o){let a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else i[e-r-1]=s}return i}function $I(n){let e={x:Bt(n,"x","zerosLike")};return ht.runKernel(Ic,e)}var ln=Kt({zerosLike_:$I});function qI(n){let e={x:Bt(n,"x","elu","float32")};return ht.runKernel("Elu",e)}var F0=Kt({elu_:qI});function ed(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function k0(n,t,e){let i=n.length+t.length,r=[],s=0,o=0;for(let a=0;a<i;a++)e.indexOf(a)===-1?r.push(n[s++]):r.push(t[o++]);return r}function XI(n,t){let e=[],i=n.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&e.push(n[s]);let r=t.map(s=>n[s]);return[e,r]}function YI(n,t){let e=t.map(i=>1);return k0(n,e,t)}function KI(n,t,e){Mt(ed(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function ZI(n,t){if(ed(n,t))return null;let e=[];for(let i=0;i<t;++i)n.indexOf(i)===-1&&e.push(i);return n.forEach(i=>e.push(i)),e}function JI(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function jI(n,t){let e=[];for(let i=t-n;i<t;++i)e.push(i);return e}function QI(n,t){let e=Bt(n,"base","pow"),i=Bt(t,"exp","pow");[e,i]=_n(e,i);let r={a:e,b:i};return ht.runKernel("Pow",r)}var id=Kt({pow_:QI});function Cn(n,t){if((Ye(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ye(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Bc(n,[],[],t)}function tC(n){let e={x:Bt(n,"x","sqrt","float32")};return ht.runKernel(Qo,e)}var ni=Kt({sqrt_:tC});function eC(n){let t=Bt(n,"x","square"),e={};return ht.runKernel("Square",{x:t},e)}var ii=Kt({square_:eC});function nC(n,t=null,e=!1){let i=Bt(n,"x","sum");i.dtype==="bool"&&(i=Gr(i,"int32"));let r={x:i},s={axis:t,keepDims:e};return ht.runKernel("Sum",r,s)}var U0=Kt({sum_:nC});function iC(n,t=.2){let i={x:Bt(n,"x","leakyRelu")},r={alpha:t};return ht.runKernel(Mc,i,r)}var O0=Kt({leakyRelu_:iC});function B0(n,t){Mt(Ls(n),()=>"The f passed in variableGrads(f) must be a function"),Mt(t==null||Array.isArray(t)&&t.every(c=>c instanceof Ui),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let e=t!=null;if(!e){t=[];for(let c in ht.registeredVariables)t.push(ht.registeredVariables[c])}let i=e?t.filter(c=>!c.trainable):null,r=t.length;t=t.filter(c=>c.trainable),Mt(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);let s=!0,{value:o,grads:a}=ht.gradients(n,t,null,s);Mt(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),Mt(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);let l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),i?.forEach(c=>l[c.name]=null),{value:o,grads:l}}function rC(n,t){let e=Bt(n,"a","sub"),i=Bt(t,"b","sub");[e,i]=_n(e,i);let r={a:e,b:i};return ht.runKernel("Sub",r)}var zi=Kt({sub_:rC});function sC(n,t){let e=Bt(n,"a","maximum"),i=Bt(t,"b","maximum");[e,i]=_n(e,i),e.dtype==="bool"&&(e=Gr(e,"int32"),i=Gr(i,"int32")),Xc(e.shape,i.shape);let r={a:e,b:i};return ht.runKernel(Yo,r)}var z0=Kt({maximum_:sC});function oC(n,t){let e=Bt(n,"x","prelu"),i=Bt(t,"alpha","prelu"),r={x:e,alpha:i};return ht.runKernel(wc,r)}var V0=Kt({prelu_:oC});function dC(n){let e={x:Bt(n,"x","relu")};return ht.runKernel(Zo,e)}var sy=Kt({relu_:dC});function pC(n){let e={x:Bt(n,"x","relu6")};return ht.runKernel(Jo,e)}var oy=Kt({relu6_:pC});function mC(n,t=-1){let e=Bt(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);let i={logits:e},r={dim:t};return ht.runKernel(Ec,i,r)}var hd=Kt({softmax_:mC});function gC(n,t=0){let i={x:Bt(n,"x","step")},r={alpha:t};return ht.runKernel(ta,i,r)}var ay=Kt({step_:gC});function fd(n,t){Ih(n);let e=Bf(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Bc(n,null,e,t)}function ly(n,t,e){let i=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${i}, and batchDim: ${r}.`;if(e.rank<r)throw new Error(s+` update.rank < ${r}. `);if(n.length<i+(e.rank-r))throw new Error(s+` Output shape length < ${i+(e.rank-r)}`);if(e.rank!==r+n.length-i)throw new Error(s+` update.rank != ${r+n.length-i}`);for(let o=0;o<r;++o)if(e.shape[o]!==t.shape[o])throw new Error(s+` updates.shape[${o}] (${e.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<e.rank-r;++o)if(e.shape[o+r]!==n[o+i])throw new Error(s+` updates.shape[${o+r}] (${e.shape[o+r]}) != shape[${o+r}] (${n[o+r]})`)}function xC(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}ly(e,t,n)}function yC(n,t,e){let i=t.shape.length,r=i>1?t.shape[i-1]:1,s=e.length,o=1;for(let h=r;h<s;++h)o*=e[h];let a=r<1?1:r,l=Fe(t.shape)/a,c=[...fi(e.slice(0,r)),1],u=Fe(e);return{sliceRank:r,numUpdates:l,sliceSize:o,strides:c,outputSize:u}}function cy(n,t){let e=[];for(let s=0;s<t.length;s++)t[s]&&e.push(s);let i=Ht(n,"int32"),r=Ht([e.length,n.length],"int32");for(let s=0;s<e.length;s++){let o=i.indexToLoc(e[s]),a=s*n.length;r.values.set(o,a)}return r.toTensor()}function _C(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return jt(n,ay(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function vC(n,t){let e=t,i=qc(n.shape,t.shape);return i.length>0&&(e=U0(e,i)),Wr(e,n.shape)}function SC(n,t,e,i){if(t==="linear")return n;if(t==="relu")return sy(n);if(t==="elu")return F0(n);if(t==="relu6")return oy(n);if(t==="prelu")return V0(n,e);if(t==="leakyrelu")return O0(n,i);if(t==="sigmoid")return N0(n);throw new Error(`Unknown fused activation ${t}.`)}var bC=(n,t)=>!(n>0)||t==="linear";function uy(n,t,e){let i=MC(n,t,e),r=i<0?-(i+1):i;n.splice(r,0,t)}function MC(n,t,e){return TC(n,t,e||wC)}function wC(n,t){return n>t?1:n<t?-1:0}function TC(n,t,e){let i=0,r=n.length,s=0,o=!1;for(;i<r;){s=i+(r-i>>>1);let a=e(t,n[s]);a>0?i=s+1:(r=s,o=!a)}return o?i:-i-1}function fy(n,t,e,i,r){return dd(n,t,e,i,r,0)}function dy(n,t,e,i,r,s){return dd(n,t,e,i,r,0,!1,s,!0)}function py(n,t,e,i,r,s){return dd(n,t,e,i,r,s,!0)}function dd(n,t,e,i,r,s,o=!1,a=!1,l=!1){let c=[];for(let m=0;m<t.length;m++)t[m]>r&&c.push({score:t[m],boxIndex:m,suppressBeginIndex:0});c.sort(hy);let u=s>0?-.5/s:0,h=[],f=[];for(;h.length<e&&c.length>0;){let m=c.pop(),{score:p,boxIndex:v,suppressBeginIndex:_}=m;if(p<r)break;let y=!1;for(let S=h.length-1;S>=_;--S){let b=EC(n,v,h[S]);if(b>=i){y=!0;break}if(m.score=m.score*AC(i,u,b),m.score<=r)break}m.suppressBeginIndex=h.length,y||(m.score===p?(h.push(v),f.push(m.score)):m.score>r&&uy(c,m,hy))}let d=h.length,g=e-d;a&&g>0&&(h.push(...new Array(g).fill(0)),f.push(...new Array(g).fill(0)));let x={selectedIndices:h};return o&&(x.selectedScores=f),l&&(x.validOutputs=d),x}function EC(n,t,e){let i=n.subarray(t*4,t*4+4),r=n.subarray(e*4,e*4+4),s=Math.min(i[0],i[2]),o=Math.min(i[1],i[3]),a=Math.max(i[0],i[2]),l=Math.max(i[1],i[3]),c=Math.min(r[0],r[2]),u=Math.min(r[1],r[3]),h=Math.max(r[0],r[2]),f=Math.max(r[1],r[3]),d=(a-s)*(l-o),g=(h-c)*(f-u);if(d<=0||g<=0)return 0;let x=Math.max(s,c),m=Math.max(o,u),p=Math.min(a,h),v=Math.min(l,f),_=Math.max(p-x,0)*Math.max(v-m,0);return _/(d+g-_)}function AC(n,t,e){let i=Math.exp(t*e*e);return e<=n?i:0}function hy(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}var IC=new Map,CC=new Map,Kc=class{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}},pd=class n{constructor(){this.classNameMap={}}static getMap(){return n.instance==null&&(n.instance=new n),n.instance}static register(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function my(n,t,e){Mt(n.className!=null,()=>"Class being registered does not have the static className property defined."),Mt(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),Mt(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);let i=e,r=t+">"+i;return pd.register(n),IC.set(r,n),CC.set(n,r),n}var cn=class extends Kc{minimize(t,e=!1,i){let{value:r,grads:s}=this.computeGradients(t,i);if(i!=null){let o=i.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(o)}else this.applyGradients(s);return Oe(s),e?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return B0(t,e)}dispose(){this.iterations_!=null&&Oe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Cn(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(cn,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});var Zc=class extends cn{static get className(){return"Adadelta"}constructor(t,e,i=null){super(),this.learningRate=t,this.rho=e,this.epsilon=i,this.accumulatedGrads=[],this.accumulatedUpdates=[],i==null&&(this.epsilon=ht.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(i=>i.name):Object.keys(t)).forEach((i,r)=>{let s=ht.registeredVariables[i],o=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${i}/accum_grad`,variable:me(()=>ln(s).variable(o))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${i}/accum_var`,variable:me(()=>ln(s).variable(o))});let a=Array.isArray(t)?t[r].tensor:t[i];if(a==null)return;let l=this.accumulatedGrads[r].variable,c=this.accumulatedUpdates[r].variable;me(()=>{let u=le(jt(l,this.rho),jt(ii(a),1-this.rho)),h=jt(qe(ni(le(c,this.epsilon)),ni(le(l,this.epsilon))),a),f=le(jt(c,this.rho),jt(ii(h),1-this.rho));l.assign(u),c.assign(f);let d=le(jt(h,-this.learningRate),s);s.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Oe(this.accumulatedGrads.map(t=>t.variable)),Oe(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=t.length/2,i=!1;this.accumulatedGrads=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(i)})),this.accumulatedUpdates=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(i)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}};var Jc=class extends cn{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(i=>i.name):Object.keys(t)).forEach((i,r)=>{let s=ht.registeredVariables[i];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${i}/accumulator`,variable:me(()=>P0(s.shape,this.initialAccumulatorValue).variable(!1))});let o=Array.isArray(t)?t[r].tensor:t[i];if(o==null)return;let a=this.accumulatedGrads[r].variable;me(()=>{let l=le(a,ii(o));a.assign(l);let c=le(jt(qe(o,ni(le(l,ht.backend.epsilon()))),-this.learningRate),s);s.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Oe(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=!1;this.accumulatedGrads=t.map(i=>({originalName:i.name,variable:i.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}};var jc=class extends cn{static get className(){return"Adam"}constructor(t,e,i,r=null){super(),this.learningRate=t,this.beta1=e,this.beta2=i,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],me(()=>{this.accBeta1=Cn(e).variable(),this.accBeta2=Cn(i).variable()}),r==null&&(this.epsilon=ht.backend.epsilon())}applyGradients(t){let e=Array.isArray(t)?t.map(i=>i.name):Object.keys(t);me(()=>{let i=zi(1,this.accBeta1),r=zi(1,this.accBeta2);e.forEach((s,o)=>{let a=ht.registeredVariables[s],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${s}/m`,variable:me(()=>ln(a).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${s}/v`,variable:me(()=>ln(a).variable(l))});let c=Array.isArray(t)?t[o].tensor:t[s];if(c==null)return;let u=this.accumulatedFirstMoment[o].variable,h=this.accumulatedSecondMoment[o].variable,f=le(jt(u,this.beta1),jt(c,1-this.beta1)),d=le(jt(h,this.beta2),jt(ii(c),1-this.beta2)),g=qe(f,i),x=qe(d,r);u.assign(f),h.assign(d);let m=le(jt(qe(g,le(ni(x),this.epsilon)),-this.learningRate),a);a.assign(m)}),this.accBeta1.assign(jt(this.accBeta1,this.beta1)),this.accBeta2.assign(jt(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Oe(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Oe(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),me(()=>{this.accBeta1.assign(id(this.beta1,this.iterations_+1)),this.accBeta2.assign(id(this.beta2,this.iterations_+1))});let e=t.length/2,i=!1;this.accumulatedFirstMoment=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(i)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(i)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}};var Qc=class extends cn{static get className(){return"Adamax"}constructor(t,e,i,r=null,s=0){super(),this.learningRate=t,this.beta1=e,this.beta2=i,this.epsilon=r,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],me(()=>{this.iteration=Cn(0).variable(),this.accBeta1=Cn(e).variable()}),r==null&&(this.epsilon=ht.backend.epsilon())}applyGradients(t){let e=Array.isArray(t)?t.map(i=>i.name):Object.keys(t);me(()=>{let i=zi(1,this.accBeta1),r=qe(-this.learningRate,le(jt(this.iteration,this.decay),1));e.forEach((s,o)=>{let a=ht.registeredVariables[s],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${s}/m`,variable:ln(a).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${s}/v`,variable:ln(a).variable(l)});let c=Array.isArray(t)?t[o].tensor:t[s];if(c==null)return;let u=this.accumulatedFirstMoment[o].variable,h=this.accumulatedWeightedInfNorm[o].variable,f=le(jt(u,this.beta1),jt(c,1-this.beta1)),d=jt(h,this.beta2),g=I0(c),x=z0(d,g);u.assign(f),h.assign(x);let m=le(jt(qe(r,i),qe(f,le(x,this.epsilon))),a);a.assign(m)}),this.iteration.assign(le(this.iteration,1)),this.accBeta1.assign(jt(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Oe(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Oe(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}};var Ys=class extends cn{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(i=>i.name):Object.keys(t)).forEach((i,r)=>{let s=Array.isArray(t)?t[r].tensor:t[i];if(s==null)return;let o=ht.registeredVariables[i];me(()=>{let a=le(jt(this.c,s),o);o.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=c0(Cn(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}};var tu=class extends Ys{static get className(){return"Momentum"}constructor(t,e,i=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=i,this.accumulations=[],this.m=Cn(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(i=>i.name):Object.keys(t)).forEach((i,r)=>{let s=ht.registeredVariables[i];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${i}/momentum`,variable:me(()=>ln(s).variable(!1))});let o=this.accumulations[r].variable,a=Array.isArray(t)?t[r].tensor:t[i];a!=null&&me(()=>{let l,c=le(jt(this.m,o),a);this.useNesterov?l=le(jt(this.c,le(a,jt(c,this.m))),s):l=le(jt(this.c,c),s),o.assign(c),s.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Oe(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=!1;this.accumulations=t.map(i=>({originalName:i.name,variable:i.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}};var eu=class extends cn{static get className(){return"RMSProp"}constructor(t,e=.9,i=0,r=null,s=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=i,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,r==null&&(this.epsilon=ht.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(i=>i.name):Object.keys(t)).forEach((i,r)=>{let s=ht.registeredVariables[i],o=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${i}/rms`,variable:me(()=>ln(s).variable(o))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${i}/momentum`,variable:me(()=>ln(s).variable(o))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${i}/mg`,variable:me(()=>ln(s).variable(o))});let a=Array.isArray(t)?t[r].tensor:t[i];if(a==null)return;let l=this.accumulatedMeanSquares[r].variable,c=this.accumulatedMoments[r].variable;me(()=>{let u=le(jt(l,this.decay),jt(ii(a),1-this.decay));if(this.centered){let h=this.accumulatedMeanGrads[r].variable,f=le(jt(h,this.decay),jt(a,1-this.decay)),d=qe(jt(a,this.learningRate),ni(zi(u,le(ii(f),this.epsilon)))),g=le(jt(c,this.momentum),d);l.assign(u),h.assign(f),c.assign(g);let x=zi(s,g);s.assign(x)}else{let h=le(jt(l,this.decay),jt(ii(a),1-this.decay)),f=le(jt(c,this.momentum),qe(jt(a,this.learningRate),ni(le(h,this.epsilon))));l.assign(h),c.assign(f);let d=zi(s,f);s.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Oe(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Oe(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Oe(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=this.centered?t.length/3:t.length/2,i=!1;this.accumulatedMeanSquares=t.slice(0,e).map(r=>({originalName:r.name,variable:r.tensor.variable(i)})),this.accumulatedMoments=t.slice(e,e*2).map(r=>({originalName:r.name,variable:r.tensor.variable(i)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(r=>({originalName:r.name,variable:r.tensor.variable(i)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}};var RC=[Zc,Jc,jc,Qc,tu,eu,Ys];function gy(){for(let n of RC)my(n)}var NC="model",PC=".json",DC=".weights.bin";function xy(n){return new Promise(t=>setTimeout(t)).then(n)}var Ks=class n{constructor(t){if(!Vt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),(t==null||t.length===0)&&(t=NC),this.modelJsonFileName=t+PC,this.weightDataFileName=t+DC}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let e=vn.join(t.weightData),i=window.URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=zc(t,r),o=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=o,await xy(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=i,await xy(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Oi(t)}}}};Ks.URL_SCHEME="downloads://";var FC=n=>Vt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ks.URL_SCHEME)?kC(n.slice(Ks.URL_SCHEME.length)):null;Sn.registerSaveRouter(FC);function kC(n="model"){return new Ks(n)}function md(n,t,e,i){o(n),e=e??0,i=i??1,a(e,i);let r=0,s=l=>(l.then(c=>{let u=e+ ++r/n.length*(i-e);return t(u),c}),l);function o(l){Mt(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){Mt(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),Mt(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),Mt(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(s))}async function yy(n,t){t==null&&(t={});let e=t.fetchFunc==null?Vt().platform.fetch:t.fetchFunc,i=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(i):await md(i,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await md(a,t.onProgress,.5,1)}function _y(n,t){var e;let i=t.fetchFunc==null?Vt().platform.fetch:t.fetchFunc,r=0,s;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:async o=>{for(var a;r<n.length;){s||(s=(await i(n[r],t.requestInit,{isBinary:!0})).body.getReader());let{done:l,value:c}=await s.read();if(l){r++,s=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,r/n.length);continue}o.enqueue(c);return}o.close()}})}var UC="application/octet-stream",OC="application/json",ha=class{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(Mt(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=Vt().platform.fetch,Mt(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&Mt(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;let i=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=zc(t,i);if(e.body.append("model.json",new Blob([JSON.stringify(r)],{type:OC}),"model.json"),t.weightData!=null){let o=vn.join(t.weightData);e.body.append("model.weights.bin",new Blob([o],{type:UC}),"model.weights.bin")}let s=await this.fetch(this.path,e);if(s.ok)return{modelArtifactsInfo:Oi(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async loadModelJSON(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}let i=e.modelTopology,r=e.weightsManifest;if(i==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();let t=await this.loadModelJSON();return Vc(t,e=>this.loadWeights(e))}async loadStream(){let t=await this.loadModelJSON(),e=await this.getWeightUrls(t.weightsManifest),i=Hc(t.weightsManifest),r=()=>_y(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:i,getWeightStream:r})}async getWeightUrls(t){let e=Array.isArray(this.path)?this.path[1]:this.path,[i,r]=BC(e),s=this.weightPathPrefix||i,o=[],a=[];for(let l of t)for(let c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):o.push(s+c+r);return this.weightUrlConverter&&o.push(...await Promise.all(a)),o}async loadWeights(t){let e=await this.getWeightUrls(t),i=Hc(t),r=await yy(e,this.loadOptions);return[i,r]}};ha.URL_SCHEME_REGEX=/^https?:\/\//;function BC(n){let t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),i=n.substring(0,t),r=e>t?n.substring(e):"";return[i+"/",r]}function gd(n){return n.match(ha.URL_SCHEME_REGEX)!=null}var vy=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(i=>gd(i)):e=gd(n),e)return Sy(n,t)}return null};Sn.registerSaveRouter(vy);Sn.registerLoadRouter(vy);function Sy(n,t){return new ha(n,t)}function VC(n,t){let e=n.shape.length,i=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(i<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${i}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[i-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[i-1]} vs. ${e}`);if(Fe(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);let r=t.shape,s=r[r.length-1],o=1;for(let h=0;h<r.length-1;++h)o*=r[h];let a=n.shape,l=r.slice();l.pop();let c=1;for(let h=s;h<e;++h)c*=a[h],l.push(a[h]);let u=[...fi(n.shape).map(h=>h/c),1].slice(0,s);return[l,o,c,u]}var Hn={};Jr(Hn,{assertParamsValid:()=>GC,computeFlatOffset:()=>YC,computeOutShape:()=>$C,getNormalizedAxes:()=>qC,isSliceContinous:()=>XC,maskToAxes:()=>WC,parseSliceParams:()=>KC,sliceInfo:()=>ZC,startForAxis:()=>Cy,startIndicesWithElidedDims:()=>Ey,stopForAxis:()=>Ry,stopIndicesWithElidedDims:()=>Ay,stridesForAxis:()=>Iy,stridesWithElidedDims:()=>My});var xd=-2,HC=-1;function GC(n,t,e){let i=n.shape.length;Mt(i===t.length,()=>`Error in slice${i}D: Length of begin ${t} must match the rank of the array (${i}).`),Mt(i===e.length,()=>`Error in slice${i}D: Length of size ${e} must match the rank of the array (${i}).`);for(let r=0;r<i;++r)Mt(t[r]+e[r]<=n.shape[r],()=>`Error in slice${i}D: begin[${r}] + size[${r}] (${t[r]+e[r]}) would overflow input.shape[${r}] (${n.shape[r]})`)}function WC(n){let t=[],e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function $C(n,t,e){let i=[];for(let r=0;r<n.length;r++)i[r]=Math.ceil((t[r]-n[r])/e[r]);return i}function My(n,t,e,i){let r=[...n];for(let s=r.length;s<i.length;s++)r.push(1);for(let s=0;s<e;s++)s===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function wy(n,t,e){return e<=n?e:e-(t-1)}function Ty(n,t){let e=[];for(let i=0;i<n;i++)e.push(t+i);return e}function qC(n,t,e,i,r,s,o,a,l){let c=n.length,u=new Array(c),h=new Array(c),f=new Array(c);if(t.length&&e>0){let d=t[0],g=e+1;u=Ey(o,d,g,i,n),h=Ay(a,d,g,r,n),f=My(s,d,g,n)}else for(let d=0;d<c;d++)u[d]=Cy(o,i,s,n,d,l),h[d]=Ry(a,r,s,n,d,l),f[d]=Iy(s,d,l);return{begin:u,end:h,strides:f}}function Ey(n,t,e,i,r){let s=[...r],o=Ty(e,t);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=0;else{let l=wy(t,e,a),c=i[l];n&1<<l&&(c=0),s[a]=c}return s}function Ay(n,t,e,i,r){let s=[...r],o=Ty(e,t);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let l=wy(t,e,a),c=i[l];n&1<<l&&(c=Number.MAX_SAFE_INTEGER),s[a]=c}for(let a=0;a<s.length;a++){let l=r[a];s[a]<0&&(s[a]+=l),s[a]=Ps(0,s[a],r[a])}return s}function Iy(n,t,e){let i=n[t];return(e&1<<t||i==null)&&(i=1),i}function Cy(n,t,e,i,r,s){let o=t[r],a=e[r]||1;(n&1<<r||s&1<<r||o==null)&&(a>0?o=Number.MIN_SAFE_INTEGER:o=Number.MAX_SAFE_INTEGER);let l=i[r];return o<0&&(o+=l),o=Ps(0,o,l-1),o}function Ry(n,t,e,i,r,s){let o=t[r],a=e[r]||1;(n&1<<r||s&1<<r||o==null)&&(a>0?o=Number.MAX_SAFE_INTEGER:o=Number.MIN_SAFE_INTEGER);let l=i[r];return o<0&&(o+=l),a>0?o=Ps(0,o,l):o=Ps(-1,o,l-1),o}function XC(n,t,e){let i=e.length;for(let r=0;r<e.length;r++)if(e[r]>1){i=r;break}for(let r=i+1;r<e.length;r++)if(t[r]>0||e[r]!==n[r])return!1;return!0}function YC(n,t){let e=n.length>0?n[n.length-1]:1;for(let i=0;i<n.length-1;i++)e+=n[i]*t[i];return e}function KC(n,t,e){let i,r=n.shape.length;typeof t=="number"?i=[t,...new Array(r-1).fill(0)]:t.length<r?i=t.concat(new Array(r-t.length).fill(0)):i=t.slice(),i.forEach(o=>{Mt(o!==-1,()=>"slice() does not support negative begin indexing.")});let s;return e==null?s=new Array(r).fill(-1):typeof e=="number"?s=[e,...new Array(r-1).fill(-1)]:e.length<r?s=e.concat(new Array(r-e.length).fill(-1)):s=e,s=s.map((o,a)=>o>=0?o:(Mt(o===-1,()=>`Negative size values should be exactly -1 but got ${o} for the slice() size at index ${a}.`),n.shape[a]-i[a])),[i,s]}function ZC(n,t,e,i,r,s,o,a,l){let c;if(i==null?(c=new Array(t.length),c.fill(1)):c=i,o!=null&&(o&o-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1,h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:r,endMask:s,ellipsisMask:o,newAxisMask:a,shrinkAxisMask:l};for(let _=0;_<h.dims;_++)u&&(1<<_&a)!==0&&h.numAddAxisAfterEllipsis++,1<<_&o&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);let f={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};JC(h,f);let d=!0,g=!0,x=!0,m=[],p=[];for(let _=0;_<n.length;++_){if(f.strides[_]===0)throw Error(`strides[${_}] must be non-zero`);let y=!!(f.shrinkAxisMask&1<<_),S=n[_];if(S===-1){m.push(y?1:-1);continue}let b=[f.beginMask&1<<_,f.endMask&1<<_],T=[f.strides[_]>0?0:-1,f.strides[_]>0?S:S-1];if(y&&f.strides[_]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&f.strides[_]===1;let R=!!(f.beginMask&1<<_&&f.endMask&1<<_);if(f.beginValid&&f.endValid){if(y){let D=f.begin[_]<0?S+f.begin[_]:f.begin[_];if(f.begin[_]=D,f.end[_]=f.begin[_]+1,D<0||D>=S)throw Error(`slice index ${f.begin[_]} of dimension ${_} out of bounds.`)}else f.begin[_]=by(f.begin[_],0,f.strides[_],S,b,T),f.end[_]=by(f.end[_],1,f.strides[_],S,b,T);let C=f.strides[_]===1&&f.begin[_]===0&&f.end[_]===S;d=d&&C,g=g&&(_===0&&f.strides[_]===1||C)}else d=d&&f.strides[_]===1&&R,g=g&&(_===0&&f.strides[_]===1||R);let w,M=!1;if(f.beginValid&&f.endValid?(w=f.end[_]-f.begin[_],M=!0):y?(w=1,M=!0):R&&S>=0&&(f.strides[_]<0?w=-S:w=S,M=!0),M){let C;w===0||w<0!=f.strides[_]<0?C=0:C=Math.trunc(w/f.strides[_])+(w%f.strides[_]!==0?1:0),m.push(C)}else m.push(-1)}for(let _=0;_<f.finalShapeGatherIndices.length;++_){let y=f.finalShapeGatherIndices[_];y>=0?p.push(m[y]):y===xd&&p.push(1)}return{finalShapeSparse:p.filter((_,y)=>f.finalShapeGatherIndices[y]!==xd),finalShape:p,isIdentity:d,sliceDim0:g,isSimpleSlice:x,begin:f.begin,end:f.end,strides:f.strides}}function JC(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let i=0;i<n.dims;i++)if(1<<i&n.ellipsisMask){let r=Math.min(t.dims-(n.dims-i)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<r;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=i}else if(1<<i&n.newAxisMask)t.finalShapeGatherIndices.push(xd),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[i]),n.end!=null&&(t.end[e]=n.end[i]),t.strides[e]=n.strides[i],n.beginMask&1<<i&&(t.beginMask|=1<<e),n.endMask&1<<i&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<i?(t.finalShapeGatherIndices.push(HC),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(i)),t.inputShapeGatherIndicesSparse[e]=i,e++}}function by(n,t,e,i,r,s){if(r[t])return e>0?s[t]:s[t+1&1];{let o=n<0?i+n:n;return o<s[0]?s[0]:o>s[1]?s[1]:o}}var B={};Jr(B,{ERF_A1:()=>pR,ERF_A2:()=>mR,ERF_A3:()=>gR,ERF_A4:()=>xR,ERF_A5:()=>yR,ERF_P:()=>dR,PARALLELIZE_THRESHOLD:()=>nu,RowPartitionType:()=>mi,SELU_SCALE:()=>fR,SELU_SCALEALPHA:()=>hR,applyActivation:()=>SC,assertAndGetBroadcastShape:()=>Xc,assertAxesAreInnerMostDims:()=>KI,assertParamsConsistent:()=>jC,assignToTypedArray:()=>wR,axesAreInnerMostDims:()=>ed,calculateShapes:()=>yC,checkEinsumDimSizes:()=>RR,checkPadOnDimRoundingMode:()=>VI,combineLocations:()=>k0,combineRaggedTensorToTensorShapes:()=>tR,complexWithEvenIndex:()=>SR,complexWithOddIndex:()=>bR,computeConv2DInfo:()=>Jf,computeConv3DInfo:()=>C0,computeDefaultPad:()=>jf,computeDilation2DInfo:()=>PI,computeOptimalWindowSize:()=>rR,computeOutAndReduceShapes:()=>XI,computeOutShape:()=>QC,computePool2DInfo:()=>DI,computePool3DInfo:()=>FI,convertConv2DDataFormat:()=>R0,decodeEinsumEquation:()=>IR,eitherStridesOrDilationsAreOne:()=>BI,expandShapeToKeepDim:()=>YI,exponent:()=>ER,exponents:()=>TR,fromStringArrayToUint8:()=>JR,fromUint8ToStringArray:()=>ZR,getAxesPermutation:()=>ZI,getBroadcastDims:()=>D0,getComplexWithIndex:()=>MR,getEinsumComputePath:()=>NR,getEinsumPermutation:()=>CR,getFusedBiasGradient:()=>vC,getFusedDyActivation:()=>_C,getImageCenter:()=>sR,getInnerMostAxes:()=>jI,getPermuted:()=>aR,getRaggedRank:()=>nR,getReductionAxes:()=>qc,getReshaped:()=>oR,getReshapedPermuted:()=>lR,getRowPartitionTypesHelper:()=>eR,getSliceBeginCoords:()=>cR,getSliceSize:()=>uR,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>kR,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>LR,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>UR,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>zR,getSparseReshapeInputOutputMismatchErrorMessage:()=>HR,getSparseReshapeInputOutputMultipleErrorMessage:()=>VR,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>OR,getSparseReshapeNegativeOutputDimErrorMessage:()=>BR,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>qR,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>GR,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>WR,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>$R,getUndoAxesPermutation:()=>JI,isIdentityPermutation:()=>PR,log:()=>$A,mergeRealAndImagArrays:()=>_R,prepareAndValidate:()=>VC,prepareSplitSize:()=>FR,segment_util:()=>_d,shouldFuse:()=>bC,slice_util:()=>Hn,splitRealAndImagArrays:()=>vR,stridesOrDilationsArePositive:()=>zI,tupleValuesAreOne:()=>Zf,upcastType:()=>In,validateDefaultValueShape:()=>iR,validateInput:()=>xC,validateUpdateShape:()=>ly,warn:()=>Li});function jC(n,t){let e=n[0].length;n.forEach((r,s)=>{Mt(r.length===e,()=>`Error in concat${e}D: rank of tensors[${s}] must be the same as the rank of the rest (${e})`)}),Mt(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);let i=n[0];n.forEach((r,s)=>{for(let o=0;o<e;o++)Mt(o===t||r[o]===i[o],()=>`Error in concat${e}D: Shape of tensors[${s}] (${r}) does not match the shape of the rest (${i}) along the non-concatenated axis ${s}.`)})}function QC(n,t){let e=n[0].slice();for(let i=1;i<n.length;i++)e[t]+=n[i][t];return e}var mi;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(mi||(mi={}));function tR(n,t,e){let i=new Array;if(e==null&&t==null)return i;if(t==null)for(;i.length<n+e.length;)i.push(-1);else i=t.slice();if(e==null)return i;if(n+e.length!==i.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${i.length}`);for(let r=1;r<e.length;++r){let s=e[r],o=i[i.length-e.length+r],a=i[o];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+n}] = ${s} but shape[${r+n}] = ${a}`)}else i[o]=s}return i}function eR(n){let t={FIRST_DIM_SIZE:mi.FIRST_DIM_SIZE,VALUE_ROWIDS:mi.VALUE_ROWIDS,ROW_LENGTHS:mi.ROW_LENGTHS,ROW_SPLITS:mi.ROW_SPLITS,ROW_LIMITS:mi.ROW_LIMITS,ROW_STARTS:mi.ROW_STARTS},e=[];for(let i of n)if(i in t)e.push(t[i]);else break;return e}function nR(n){return n.length===0?0:n[0]===mi.FIRST_DIM_SIZE?n.length-1:n.length}function iR(n,t){if(n==null||t==null)return;let e=n.length,i=t.length;if(e>=i)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${i})`);for(let r=0;r<Math.min(e,i-1);++r){let s=n[r],o=t[r+1];if(s>=0&&o>=0&&s!==1&&s!==o)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-n.length}] = ${s} but ragged tensor input.flatValues.shape[${r-n.length}] = ${o}`)}}var nu=30;function rR(n){return n<=nu?n:Us(n,Math.floor(Math.sqrt(n)))}function sR(n,t,e){let i=e*(typeof n=="number"?n:n[0]),r=t*(typeof n=="number"?n:n[1]);return[i,r]}function oR(n,t,e,i=!0){let r=[];if(i)r=r.concat(t.slice(0)),r.push(n[0]/e),r=r.concat(n.slice(1));else{r=r.concat(n[0]);let s=t.length;for(let o=0;o<s;++o)r=r.concat([n[o+1]/t[o],t[o]]);r=r.concat(n.slice(s+1))}return r}function aR(n,t,e=!0){let i=[];if(e){i.push(t);for(let r=t+1;r<n;++r)r<=2*t?(i.push(r),i.push(r-(t+1))):i.push(r)}else{let r=[],s=[];for(let o=1;o<n;++o)o>=t*2+1||o%2===1?s.push(o):r.push(o);i.push(...r),i.push(0),i.push(...s)}return i}function lR(n,t,e,i=!0){let r=[];i?r.push(n[0]/e):r.push(n[0]*e);for(let s=1;s<n.length;++s)s<=t.length?i?r.push(t[s-1]*n[s]):r.push(n[s]/t[s-1]):r.push(n[s]);return r}function cR(n,t){let e=[0];for(let i=0;i<t;++i)e.push(n[i][0]);return e}function uR(n,t,e){let i=n.slice(0,1);for(let r=0;r<e;++r)i.push(n[r+1]-t[r][0]-t[r][1]);return i}var hR=1.7580993408473768,fR=1.0507009873554805;var dR=.3275911,pR=.254829592,mR=-.284496736,gR=1.421413741,xR=-1.453152027,yR=1.061405429;function _R(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);let e=new Float32Array(n.length*2);for(let i=0;i<e.length;i+=2)e[i]=n[i/2],e[i+1]=t[i/2];return e}function vR(n){let t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let i=0;i<n.length;i+=2)t[i/2]=n[i],e[i/2]=n[i+1];return{real:t,imag:e}}function SR(n){let t=Math.ceil(n.length/4),e=new Float32Array(t),i=new Float32Array(t);for(let r=0;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],i[Math.floor(r/4)]=n[r+1];return{real:e,imag:i}}function bR(n){let t=Math.floor(n.length/4),e=new Float32Array(t),i=new Float32Array(t);for(let r=2;r<n.length;r+=4)e[Math.floor(r/4)]=n[r],i[Math.floor(r/4)]=n[r+1];return{real:e,imag:i}}function MR(n,t){let e=n[t*2],i=n[t*2+1];return{real:e,imag:i}}function wR(n,t,e,i){n[i*2]=t,n[i*2+1]=e}function TR(n,t){let e=new Float32Array(n/2),i=new Float32Array(n/2);for(let r=0;r<Math.ceil(n/2);r++){let s=(t?2:-2)*Math.PI*(r/n);e[r]=Math.cos(s),i[r]=Math.sin(s)}return{real:e,imag:i}}function ER(n,t,e){let i=(e?2:-2)*Math.PI*(n/t),r=Math.cos(i),s=Math.sin(i);return{real:r,imag:s}}var yd="->",AR=/->/g,Ny=",",Py="...";function IR(n,t){n=n.replace(/\s/g,"");let e=(n.length-n.replace(AR,"").length)/yd.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${yd}").`);let[i,r]=n.split(yd);Mt(i.indexOf(Py)===-1,()=>`The ellipsis notation ("${Py}") is not supported yet.`);let s=i.split(Ny),o=s.length;if(t!==o)throw new Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let f=0;f<r.length;++f){let d=r[f];if(!s.some(g=>g.indexOf(d)!==-1))throw new Error(`Output subscripts contain the label ${d} not present in the input subscripts.`);a.indexOf(d)===-1&&a.push(d)}for(let f=0;f<i.length;++f){let d=i[f];a.indexOf(d)===-1&&d!==Ny&&a.push(d)}let l=new Array(s.length);for(let f=0;f<o;++f){if(new Set(s[f].split("")).size!==s[f].length)throw new Error(`Found duplicate axes in input component ${s[f]}. Support for duplicate axes in input is not implemented yet.`);l[f]=[];for(let d=0;d<s[f].length;++d)l[f].push(a.indexOf(s[f][d]))}let c=a.length,u=r.length,h=[];for(let f=u;f<c;++f)h.push(f);return{allDims:a,summedDims:h,idDims:l}}function CR(n,t){let e=new Array(n);e.fill(-1);for(let r=0;r<t.length;++r)e[t[r]]=r;let i=[];for(let r=0;r<n;++r)e[r]===-1&&i.push(r);return e=e.filter(r=>r!==-1),{permutationIndices:e,expandDims:i}}function RR(n,t,e){let i=new Array(n);for(let r=0;r<e.length;++r){let s=e[r].shape;for(let o=0;o<t[r].length;++o)i[t[r][o]]===void 0?i[t[r][o]]=s[o]:Mt(i[t[r][o]]===s[o],()=>`Expected dimension ${i[t[r][o]]} at axis ${o} of input shaped ${JSON.stringify(s)}, but got dimension ${s[o]}`)}}function NR(n,t){let e=n,i=[],r=0;n.length===0&&e.push(-1),r=n.length+1;for(let o=0;o<r;++o)i.push([]);let s=[];for(let o=0;o<e.length;++o){let a=e[o],l=DR(t,a);for(let c of l)s.indexOf(c)===-1&&(i[o].push(c),s.push(c))}return{path:e,steps:i}}function PR(n){return n.every((t,e)=>t===e)}function DR(n,t){let e=[];for(let i=0;i<n.length;++i)(n[i].length===0||n[i].indexOf(t)!==-1||t===-1)&&e.push(i);return e}function FR(n,t,e=0){let i=[];if(typeof t=="number")Mt(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),i=new Array(t).fill(n.shape[e]/t);else{let r=t.reduce((o,a)=>(a===-1&&(o+=1),o),0);Mt(r<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(s!==-1){let o=t.reduce((a,l)=>l>0?a+l:a);t[s]=n.shape[e]-o}Mt(n.shape[e]===t.reduce((o,a)=>o+a),()=>"The sum of sizes must match the size of the axis dimension."),i=t}return i}function kR(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function LR(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function UR(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function OR(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function BR(n,t){return`size ${n} must be non-negative, not ${t}`}function zR(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function VR(n,t){let e=Fe(n),i=Fe(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${i}. inputShape=${n} outputShape= ${t}`}function HR(n,t){let e=Fe(n),i=Fe(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${i}. inputShape=${n} outputShape=${t}`}function GR(){return"segment ids must be >= 0"}function WR(){return"segment ids are not increasing"}function $R(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function qR(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}var _d={};Jr(_d,{collectGatherOpShapeInfo:()=>KR,computeOutShape:()=>YR,segOpComputeOptimalWindowSize:()=>XR});function XR(n,t){let e=!1,i;for(n<=nu?(i=n,e=!0):i=Us(n,Math.floor(Math.sqrt(n)));!e;)i>t||i===n?e=!0:i=Us(n,i+1);return i}function YR(n,t,e){let i=[],r=n.length;for(let s=0;s<r;s++)s!==t?i.push(n[s]):i.push(e);return i}function KR(n,t,e,i){let r=t.shape.length,s=n.shape.length;if(i!==0&&(i<-r||i>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${i}`);if(i<0&&(i+=r),i>s)throw new Error(`batchDims (${i}) must be less than rank(x) (
    ${s}).`);if(e<i)throw new Error(`batchDims (${i}) must be less than or equal to axis (${e}).`);for(let h=0;h<i;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);let o=n.shape[e],a=[],l=1,c=1,u=1;for(let h=0;h<i;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=i;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=i;h<r;h++)a.push(t.shape[h]);for(let h=e+1;h<s;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:o,outputShape:a}}function ZR(n){try{return n.map(t=>Ws(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function JR(n){return n.map(t=>Gs(t))}var gi={};Jr(gi,{nonMaxSuppressionV3Impl:()=>fy,nonMaxSuppressionV4Impl:()=>dy,nonMaxSuppressionV5Impl:()=>py,whereImpl:()=>cy});gy();function tt(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&A.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}var QR=gi.whereImpl,fa=class n extends Dr{nextDataId(){return n.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Ho(this,zf())}write(t,e,i){this.firstUse&&(this.firstUse=!1,Vt().get("IS_NODE")&&B.warn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let r={id:this.nextDataId()};return this.data.set(r,{values:t,dtype:i,refCount:1}),r}makeTensorInfo(t,e,i){let r;if(e==="string"&&i!=null&&i.length>0&&A.isString(i[0])){let s=i.map(o=>A.encodeString(o));r=this.write(s,t,e)}else r=this.write(i,t,e);return{dataId:r,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){let e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){let e=this.data.get(t);e.refCount--}}move(t,e,i,r,s){this.data.set(t,{values:e,dtype:r,refCount:s})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){let{dtype:e,complexTensorInfos:i}=this.data.get(t);if(e==="complex64"){let r=this.readSync(i.real.dataId),s=this.readSync(i.imag.dataId);return B.mergeRealAndImagArrays(r,s)}return A.convertBackendValuesAndArrayBuffer(this.data.get(t).values,e)}bufferSync(t){let e=this.readSync(t.dataId);if(t.dtype==="string")try{let i=e.map(r=>A.decodeString(r));return Ht(t.shape,t.dtype,i)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Ht(t.shape,t.dtype,e)}makeOutput(t,e,i){return zf().makeTensorFromTensorInfo(this.makeTensorInfo(e,i,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;let{complexTensorInfos:i}=this.data.get(t);i!=null&&(this.disposeData(i.real.dataId,!0),this.disposeData(i.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){let e=A.now();return t(),{kernelMs:A.now()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){tt([t],"where");let e=this.readSync(t.dataId);return QR(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};fa.nextDataId=0;function t2(n){let t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}var e2=n=>{let{x:t}=n.inputs,e=n.backend;tt(t,"abs");let i=new Float32Array(A.sizeFromShape(t.shape)),r=e.data.get(t.dataId).values;return i=t2(r),e.makeOutput(i,t.shape,t.dtype)},Dy={kernelName:"Abs",backendName:"cpu",kernelFunc:e2};function Qt(n){return(t,e,i,r,s)=>{let o=B.assertAndGetBroadcastShape(t,e),a=o.length,l=A.computeStrides(o),c=A.sizeFromShape(o),u=A.getTypedArrayFromDType(s,c),h=t.length,f=e.length,d=A.computeStrides(t),g=A.computeStrides(e),x=B.getBroadcastDims(t,o),m=B.getBroadcastDims(e,o);if(x.length+m.length===0)for(let p=0;p<u.length;++p)u[p]=n(i[p%i.length],r[p%r.length]);else for(let p=0;p<u.length;++p){let v=A.indexToLoc(p,a,l),_=v.slice(-h);x.forEach(T=>_[T]=0);let y=A.locToIndex(_,h,d),S=v.slice(-f);m.forEach(T=>S[T]=0);let b=A.locToIndex(S,f,g);u[p]=n(i[y],r[b])}return[u,o]}}function Le(n){let{inputs:t,backend:e}=n,{real:i,imag:r}=t,s=e.data.get(i.dataId).values,o=e.data.get(r.dataId).values,a=e.makeTensorInfo(i.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(i.shape,"float32",s),imag:e.makeTensorInfo(r.shape,"float32",o)},a}var Fy={kernelName:sg,backendName:"cpu",kernelFunc:Le};function Zs(n,t,e="float32"){if(e==="complex64"){let r=Zs(n,t,"float32"),s=Zs(n,t,"float32");return Le({inputs:{real:r,imag:s},backend:n})}let i=A.makeZerosTypedArray(A.sizeFromShape(t),e);return n.makeTensorInfo(t,e,i)}function Xe(n){let{inputs:t,backend:e}=n,{x:i}=t;return e.incRef(i.dataId),{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}var ky={kernelName:Bs,backendName:"cpu",kernelFunc:Xe};function Gn(n){let{inputs:t,backend:e}=n,{input:i}=t,r=e.data.get(i.dataId).complexTensorInfos.real,s=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,s)}var Ly={kernelName:ex,backendName:"cpu",kernelFunc:Gn};function n2(n,t,e,i){if(i==="int32"){let r=Int32Array.from(n);return[t,"int32",r]}if(i==="bool"){let r=A.toTypedArray([0],e),[s,o]=Qt((a,l)=>a!==l?1:0)(t,[],n,r,"bool");return[o,"bool",s]}throw new Error(`Error in Cast: failed to cast ${e} to ${i}`)}function Wn(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{dtype:s}=i;if(s==="complex64"){if(r.dtype==="complex64")return Xe({inputs:{x:r},backend:e});let u=Zs(e,r.shape,r.dtype),h=Wn({inputs:{x:r},backend:e,attrs:{dtype:"float32"}}),f=Le({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),f}if(r.dtype==="complex64"){let u=Gn({inputs:{input:r},backend:e}),h=Wn({inputs:{x:u},backend:e,attrs:{dtype:s}});return e.disposeIntermediateTensorInfo(u),h}if(!A.hasEncodingLoss(r.dtype,s)){let u=Xe({inputs:{x:r},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:s}}let o=e.data.get(r.dataId).values,[a,l,c]=n2(o,r.shape,r.dtype,s);return e.makeTensorInfo(a,l,c)}var Uy={kernelName:Os,backendName:"cpu",kernelFunc:Wn};function se(n,t,e,i){return e==null?({inputs:r,backend:s})=>{let{a:o,b:a}=r,l=s;tt([o,a],n);let c=l.data.get(o.dataId).values,u=l.data.get(a.dataId).values,h=o.dtype==="string"?B.fromUint8ToStringArray(c):c,f=o.dtype==="string"?B.fromUint8ToStringArray(u):u,d=i||o.dtype,[g,x]=t(o.shape,a.shape,h,f,d);return l.makeTensorInfo(x,d,g)}:({inputs:r,backend:s})=>{let{a:o,b:a}=r,l=s;if(o.dtype==="complex64"||a.dtype==="complex64"){let c=Wn({inputs:{x:o},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,f=u.complexTensorInfos.imag,d=l.data.get(h.dataId).values,g=l.data.get(f.dataId).values,x=Wn({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),m=l.data.get(x.dataId),p=m.complexTensorInfos.real,v=m.complexTensorInfos.imag,_=l.data.get(p.dataId).values,y=l.data.get(v.dataId).values,[S,b,T]=e(o.shape,a.shape,d,g,_,y),R=l.makeTensorInfo(T,"float32",S),w=l.makeTensorInfo(T,"float32",b),M=Le({inputs:{real:R,imag:w},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(x),l.disposeIntermediateTensorInfo(R),l.disposeIntermediateTensorInfo(w),M}else{let c=l.data.get(o.dataId).values,u=l.data.get(a.dataId).values,h=i||o.dtype,[f,d]=t(o.shape,a.shape,c,u,h);return l.makeTensorInfo(d,h,f)}}}function Js(n){return(t,e,i,r,s,o)=>{let a=B.assertAndGetBroadcastShape(t,e),l=A.sizeFromShape(a),c=a.length,u=A.computeStrides(a),h=A.getTypedArrayFromDType("float32",l),f=A.getTypedArrayFromDType("float32",l),d=B.getBroadcastDims(t,a),g=B.getBroadcastDims(e,a),x=B.mergeRealAndImagArrays(i,r),m=B.mergeRealAndImagArrays(s,o),p=t.length,v=A.computeStrides(t),_=e.length,y=A.computeStrides(e);if(d.length+g.length===0)for(let S=0;S<h.length;S++){let b=S%x.length,T=S%m.length,R=n(x[b*2],x[b*2+1],m[T*2],m[T*2+1]);h[S]=R.real,f[S]=R.imag}else for(let S=0;S<h.length;S++){let b=A.indexToLoc(S,c,u),T=b.slice(-p);d.forEach(D=>T[D]=0);let R=A.locToIndex(T,p,v),w=b.slice(-_);g.forEach(D=>w[D]=0);let M=A.locToIndex(w,_,y),C=n(x[R*2],x[R*2+1],m[M*2],m[M*2+1]);h[S]=C.real,f[S]=C.imag}return[h,f,a]}}var i2=Qt(((n,t)=>n+t)),r2=Js(((n,t,e,i)=>({real:n+e,imag:t+i}))),xi=se("Add",i2,r2),Oy={kernelName:"Add",backendName:"cpu",kernelFunc:xi};function iu(n,t,e,i,r){let s=A.sizeFromShape(i),o=A.makeZerosTypedArray(r,e);for(let a=0;a<n.length;a++){let l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=r||(s>0?o[l]+=t[a]:o[l]+=1)}return o}function By(n,t,e,i=!1){let r=n.shape[0],s=n.shape[1],o=Ht([r,e],t.dtype);for(let a=0;a<r;a++)for(let l=0;l<s;l++){let c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(i?o.set(1,a,c):t.size>0?o.set(o.get(a,c)+t.get(a,l),a,c):o.set(o.get(a,c)+1,a,c))}return o}var s2=Qt(((n,t)=>n&t)),o2=se(Gh,s2),zy={kernelName:Gh,backendName:"cpu",kernelFunc:o2};function Be(n){return(t,e,i)=>{let r=A.getArrayFromDType(e,t.length);for(let s=0;s<t.length;++s)r[s]=n(t[s],i);return r}}function kt(n,t,e){let i=Be(t);return un(n,i,e)}function un(n,t,e){return({inputs:i,attrs:r,backend:s})=>{let{x:o}=i;tt(o,n);let a=s,l=a.data.get(o.dataId).values,c;if(o.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=B.fromUint8ToStringArray(l)}else c=l;let u=e||o.dtype,h=t(c,u,r);return a.makeTensorInfo(o.shape,u,h)}}var a2=Be(n=>Math.ceil(n)),l2=un(Wh,a2),Vy={kernelName:Wh,backendName:"cpu",kernelFunc:l2};function Hy(n,t,e,i){let r=A.getArrayFromDType(e,A.sizeFromShape(t));if(i&&e!=="string"){let s=0;n.forEach(o=>{let a=A.sizeFromShape(o.shape);r.set(o.vals,s),s+=a})}else{let s=0;n.forEach(o=>{let a=e==="string"?B.fromUint8ToStringArray(o.vals):o.vals,l=0;for(let c=0;c<o.shape[0];++c){let u=c*t[1]+s;for(let h=0;h<o.shape[1];++h)r[u+h]=a[l++]}s+=o.shape[1]})}return r}var c2=Qt((n,t)=>n===t?1:0),vd=se(Kh,c2,null,"bool"),Gy={kernelName:Kh,backendName:"cpu",kernelFunc:vd};var u2=Be(n=>Math.exp(n)),Sd=un("Exp",u2,"float32"),$y={kernelName:"Exp",backendName:"cpu",kernelFunc:Sd};var h2=Be(n=>Math.expm1(n)),f2=un(Zh,h2),qy={kernelName:Zh,backendName:"cpu",kernelFunc:f2};var d2=Be(n=>Math.floor(n)),p2=un(Jh,d2),Xy={kernelName:Jh,backendName:"cpu",kernelFunc:p2};var m2=Qt((n,t)=>Math.floor(n/t)),g2=se(Xo,m2,null,"int32"),Yy={kernelName:Xo,backendName:"cpu",kernelFunc:g2};function Ky(n,t,e,i,r,s,o,a,l){let c=Ht([i,s],e);for(let u=0;u<i;u++){let h=[],f=0;for(let d=0;d<r;d++){let g=n[u*r+d];f+=g*o[d],h.push(g)}if(f<0||f>=l/s)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let d=0;d<s;d++)c.values[u*s+d]=t.get(...t.indexToLoc(f*s+d))}return c}function Zy(n,t,e){let i=Ht(e,n.dtype);for(let r=0;r<i.size;++r){let o=i.indexToLoc(r).slice(),a=o[0],l=o[2],c=t.locToIndex([a,l]);o[2]=t.values[c];let u=n.locToIndex(o);0<=u&&u<n.values.length&&(i.values[r]=n.values[u])}return i}var x2=Qt((n,t)=>n>t?1:0),y2=se(jh,x2,null,"bool"),Jy={kernelName:jh,backendName:"cpu",kernelFunc:y2};var _2=Qt((n,t)=>n>=t?1:0),v2=se(Qh,_2,null,"bool"),jy={kernelName:Qh,backendName:"cpu",kernelFunc:v2};var S2=Qt((n,t)=>n<t?1:0),b2=se(rf,S2,null,"bool"),Qy={kernelName:rf,backendName:"cpu",kernelFunc:b2};var M2=Qt((n,t)=>n<=t?1:0),w2=se(sf,M2,null,"bool"),t_={kernelName:sf,backendName:"cpu",kernelFunc:w2};function e_(n,t,e){let i=(t-n)/(e-1),r=A.makeZerosTypedArray(e,"float32");r[0]=n;for(let s=1;s<r.length;s++)r[s]=r[s-1]+i;return r}var T2=Be(n=>Math.log(n)),E2=un("Log",T2),i_={kernelName:"Log",backendName:"cpu",kernelFunc:E2};function r_(n,t,e,i){let r=A.getTypedArrayFromDType(i,A.sizeFromShape(e));for(let s=0;s<r.length;++s){let o=s*t,a=n[o];for(let l=0;l<t;++l){let c=n[o+l];(Number.isNaN(c)||c>a)&&(a=c)}r[s]=a}return r}var A2=Qt(((n,t)=>Math.max(n,t))),I2=se(Yo,A2),s_={kernelName:Yo,backendName:"cpu",kernelFunc:I2};var C2=Qt(((n,t)=>Math.min(n,t))),R2=se(uf,C2),o_={kernelName:uf,backendName:"cpu",kernelFunc:R2};var bd=Qt(((n,t)=>n*t)),N2=Js(((n,t,e,i)=>({real:n*e-t*i,imag:n*i+t*e}))),qr=se(Ko,bd,N2),a_={kernelName:Ko,backendName:"cpu",kernelFunc:qr};function D2(n,t,e){let i=A.createScalarValue(-1,e);return bd([],t,i,n,e)}function F2(n){let{inputs:t,backend:e}=n,{x:i}=t;tt(i,"neg");let r=e.data.get(i.dataId).values,[s,o]=D2(r,i.shape,i.dtype);return e.makeTensorInfo(o,i.dtype,s)}var l_={kernelName:"Neg",backendName:"cpu",kernelFunc:F2};var k2=Qt(((n,t)=>n!==t?1:0)),L2=se(hf,k2,null,"bool"),c_={kernelName:hf,backendName:"cpu",kernelFunc:L2};function ru(n,t,e,i,r){let s=t.length,o=A.sizeFromShape(t),a=A.computeStrides(t),l=A.computeStrides(r),c=A.getTypedArrayFromDType(e,A.sizeFromShape(r));for(let u=0;u<o;++u){let h=A.indexToLoc(u,s,a),f=new Array(h.length);for(let g=0;g<f.length;g++)f[g]=h[i[g]];let d=A.locToIndex(f,s,l);c[d]=n[u]}return c}function Me(n){let{inputs:t,attrs:e,backend:i}=n,{x:r}=t,{perm:s}=e;tt(r,"transpose");let o=r.shape.length,a=new Array(o);for(let h=0;h<a.length;h++)a[h]=r.shape[s[h]];let l=i.data.get(r.dataId).values,c=ru(l,r.shape,r.dtype,s,a);return{dataId:i.write(c,a,r.dtype),shape:a,dtype:r.dtype}}var u_={kernelName:Ex,backendName:"cpu",kernelFunc:Me};function U2(n,t,e,i){let[r,s]=B.computeOutAndReduceShapes(n,i),o=In(t,"int32"),a=A.makeZerosTypedArray(A.sizeFromShape(r),o),l=A.sizeFromShape(s);for(let c=0;c<a.length;++c){let u=c*l,h=1;for(let f=0;f<l;++f)h*=e[u+f];a[c]=h}return{outVals:a,outShape:r,outDtype:o}}function O2(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,keepDims:o}=i;tt(r,"prod");let a=r.shape.length,l=A.parseAxisParam(s,r.shape),c=B.getAxesPermutation(l,a),u=l,h=r,f=[];c!=null&&(h=Me({inputs:{x:r},backend:e,attrs:{perm:c}}),f.push(h),u=B.getInnerMostAxes(u.length,a));let d=e.data.get(h.dataId).values,{outVals:g,outShape:x,outDtype:m}=U2(h.shape,h.dtype,d,u),p=x;return o&&(p=B.expandShapeToKeepDim(x,l)),f.forEach(v=>e.disposeIntermediateTensorInfo(v)),e.makeTensorInfo(p,m,g)}var h_={kernelName:Zg,backendName:"cpu",kernelFunc:O2};function B2(n,t,e){n.forEach((i,r)=>{if(i<0||i>=e){let s=A.indexToLoc(r,t.length,A.computeStrides(t)).join(",");throw new Error(`indices[${s}] = ${i} is not in [0, ${e})`)}})}function z2(n,t){for(let e=0;e<n.length;++e){let i=n[e],r=e===n.length-1?t:n[e+1].length;if(i.length===0)throw new Error("Ragged splits may not be empty");if(i[0]<0)throw new Error("Ragged splits must be non-negative");if(i[i.length-1]>r)throw new Error("Ragged splits must not point past values");for(let s=1;s<i.length;++s)if(i[s-1]>i[s])throw new Error("Ragged splits must be sorted in ascending order")}}function V2(n,t,e,i){let r=[],s=0,o=t.length-1+e.length,a=new Array(o).fill(null).map(()=>[0]);z2(e,i);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];let u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let f=0;f<e.length;++f){let d=e[f],g=f+t.length-1;if(g>=0){let x=a[g],m=x[x.length-1]-d[u];for(let p=u;p<h;++p)a[g].push(d[p+1]+m)}u=d[u],h=d[h]}h!==u&&(r.push([u,h]),s+=h-u)}return{outSplits:a,valueSlices:r,numValues:s}}function H2(n){let t=[];for(let e=0;e<n.length;++e){let i=n[e].length,r=A.getArrayFromDType("int32",i);t.push(r),n[e].forEach((s,o)=>r[o]=s)}return t}function f_(n,t){let e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let i=t;i<n.length;i++)e[t-1]*=n[i];return e}function G2(n,t,e,i,r,s){let o=f_(t,2)[1],a=f_(s,2)[1],l=0;for(let c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<i;++h)r[l*a+h]=n[u*o+h];++l}}function W2(n,t,e,i,r){let s=t.slice();s[0]=r;let o=A.getArrayFromDType(e,A.sizeFromShape(s)),a=n.length,l=a===0?0:a/t[0];return G2(n,t,i,l,o,s),[o,s]}function d_(n,t,e,i,r,s,o,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");let l=t[0][0]-1;if(B2(s,o,l),i.length===0)throw new Error("params.rank must be nonzero");let c=i[0],{outSplits:u,valueSlices:h,numValues:f}=V2(s,o,n,c),d=H2(u),g=W2(e,i,r,h,f);return[d,g[0],g[1]]}var p_=2147483647;function m_(n,t,e,i,r,s,o){if(t.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(o.length>1)throw new Error("deltas must be a scalar or vector");let a=t.length===0,l=r.length===0,c=o.length===0,u=[];a||u.push(t[0]),l||u.push(r[0]),c||u.push(o[0]);for(let m=1;m<u.length;++m)if(u[m]!==u[m-1])throw new Error("starts, limits, and deltas must have the same shape");let h=u.length===0?1:u[0],f=A.getArrayFromDType("int32",h+1);f[0]=0;for(let m=0;m<h;++m){let p=a?n[0]:n[m],v=l?i[0]:i[m],_=c?s[0]:s[m];if(_===0)throw new Error("Requires delta != 0");let y;if(_>0&&v<p||_<0&&v>p)y=0;else if(y=Math.ceil(Math.abs((v-p)/_)),y>p_)throw new Error(`Requires ((limit - start) / delta) <= ${p_}`);f[m+1]=f[m]+y}let d=f[h],g=A.getArrayFromDType(e,d),x=0;for(let m=0;m<h;++m){let p=f[m+1]-f[m],v=a?n[0]:n[m],_=c?s[0]:s[m];for(let y=0;y<p;++y)g[x++]=v,v+=_}return[f,g]}var $n=B.RowPartitionType,Md=class n{constructor(t,e,i,r,s,o,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=i,this.valuesShape=r,this.valuesDType=s,this.defaultValue=o,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=B.getRowPartitionTypesHelper(u),this.raggedRank=B.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===$n.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===$n.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case $n.VALUE_ROWIDS:return n.getMaxWidthValueRowID(e);case $n.ROW_SPLITS:return n.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${$n[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let e=t.length;if(e===0||e===1)return 0;let i=0;for(let r=0;r<e-1;++r){let s=t[r+1]-t[r];s>i&&(i=s)}return i}static getMaxWidthValueRowID(t){let e=t.length;if(e===0)return 0;let i=0,r=t[0],s=0;for(let o=1;o<e;++o){let a=t[o];a!==r&&(r=a,s=Math.max(o-i,s),i=o)}return Math.max(e-i,s)}tensorShapeFromTensor(t,e,i=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return x_(t,i)}calculateOutputSize(t){let e=this.valuesShape,i=this.defaultValueShape;B.validateDefaultValueShape(i,e);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),o=B.combineRaggedTensorToTensorShapes(this.raggedRank,r,e);o[0]<0&&(o[0]=t);for(let a=1;a<=this.raggedRank;++a)o[a]<0&&(o[a]=this.getMaxWidth(a));return o}calculateFirstParentOutputIndex(t,e,i){let r=Math.min(t,i),s=[],o=0;for(let a=0;a<r;++a,o+=e)s.push(o);for(let a=r;a<t;++a)s.push(-1);return A.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,e,i,r){let s=t.length,o=[];for(let a=0;a<s-1;++a){let l=t[a+1]-t[a],c=Math.min(r,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)o.push(u),u+=i;for(let h=0;h<l-c;++h)o.push(-1)}if(s>0&&o.length!==t[s-1])throw new Error("Invalid row split size.");return o}calculateOutputIndexValueRowID(t,e,i,r){let s=t.length,o=[];if(s===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];o.push(c);for(let u=1;u<s;++u){let h=t[u];if(h===l)c>=0&&(++a,a<r?c+=i:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}o.push(c)}if(o.length!==t.length)throw new Error("Invalid row ids.");return o}calculateOutputIndex(t,e,i,r){let s=this.getRowPartitionTensor(t),o=this.getRowPartitionTypeByDimension(t);switch(o){case $n.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,e,i,r);case $n.ROW_SPLITS:if(s.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(s,e,i,r);default:throw new Error(`Unsupported partition type: ${$n[o]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let e=this.rowPartitionTypes[0];switch(e){case $n.FIRST_DIM_SIZE:return t[0];case $n.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case $n.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${$n[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),i=this.calculateOutputSize(e),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let l=r.length-2;l>=0;--l)r[l]=r[l+1]*i[l+1];let s=x_(i,!1),o=A.getArrayFromDType(this.valuesDType,A.sizeFromShape(s));if(r[0]*i[0]>0){let l=this.calculateFirstParentOutputIndex(e,r[0],i[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,r[c],i[c]);this.setOutput(this.raggedRank,l,o,s)}return[s,o]}setOutput(t,e,i,r){if(i.length===0)return;let s=this.values,o=i,a=r.slice();a=a.slice(t+1);let l=A.sizeFromShape(a),c=e.length,u=this.defaultValue;if(u.length!==l&&u.length!==1){let g=this.defaultValueShape;me(()=>{let x=Wr(u,g);u=Qf(x,a).dataSync()})}let h=0,f=0,d=0;for(let g=0;g<=c;++g){let x=g<c?e[g]:-1;if(x===d){++d;continue}if(f<d){let m=s.subarray(h*l),p=o.subarray(f*l),v=(d-f)*l;g_(p,m,v)}if(g>=c){let m=i.length;x=Math.floor(m/l)}if(x>d)if(this.defaultValue.length===1)o.subarray(d*l,x*l).fill(this.defaultValue[0]),d=x;else for(;x>d;){let m=o.slice(d*l);g_(m,u,l),++d}x<0?(h=g+1,f=d):(h=g,f=d,d=f+1)}}};function g_(n,t,e){for(let i=0;i<e;i++)n[i]=t[i]}function x_(n,t){let e=[];for(let i of n){if(i<0){if(!t)throw new Error(`Dimension ${i} must be >= 0`);if(i<-1)throw new Error(`Dimension ${i} must be >= -1`);i=-1}e.push(i)}return e}function y_(n,t,e,i,r,s,o,a,l,c){return new Md(n,t,e,i,r,s,o,a,l,c).compute()}function __(n,t,e,i){let r=n===t,s=n<t&&e<0,o=t<n&&e>1;if(r||s||o)return A.makeZerosTypedArray(0,i);let a=Math.abs(Math.ceil((t-n)/e)),l=A.makeZerosTypedArray(a,i);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}var $2=Be(n=>1/Math.sqrt(n)),q2=un(pf,$2),v_={kernelName:pf,backendName:"cpu",kernelFunc:q2};function Vi(n,t,e,i,r,s,o,a,l,c){let u=[i/r,r],h=n.values,f=t.values;if(i===0)return Ht(e,t.dtype);let d=l instanceof he?l:Ht(u,t.dtype);typeof l=="string"||typeof l=="number"?d.values.fill(l):typeof l=="boolean"&&d.values.fill(+l);for(let g=0;g<s;g++){let x=[],m=0;for(let p=0;p<o;p++){let v=h[g*o+p];x.push(v),m+=v*a[p]}if(m<0||m>=i/r)throw new Error(`Invalid indices: ${x} does not index into ${e}`);for(let p=0;p<r;p++)c?d.values[m*r+p]+=f[g*r+p]:d.values[m*r+p]=t.rank===0?f[0]:f[g*r+p]}return d}var u8=Be(n=>1/(1+Math.exp(-n))),wd=kt(jo,n=>1/(1+Math.exp(-n))),S_={kernelName:jo,backendName:"cpu",kernelFunc:wd};function X2(n,t,e,i,r){let s=Hn.isSliceContinous(i,t,e),o=A.sizeFromShape(e),a=A.computeStrides(i);if(s){let h=Hn.computeFlatOffset(t,a);return r==="string"?n.slice(h,h+o):n.subarray(h,h+o)}let l=r==="string"?B.fromUint8ToStringArray(n):n,c=Ht(i,r,l),u=Ht(e,r);for(let h=0;h<u.size;++h){let f=u.indexToLoc(h),d=f.map((g,x)=>g+t[x]);u.set(c.get(...d),...f)}return r==="string"?B.fromStringArrayToUint8(u.values):u.values}function qn(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{begin:s,size:o}=i;tt(r,"slice");let[a,l]=Hn.parseSliceParams(r,s,o);Hn.assertParamsValid(r,a,l);let c=e.data.get(r.dataId).values,u=X2(c,a,l,r.shape,r.dtype);return e.makeTensorInfo(l,r.dtype,u)}var b_={kernelName:hx,backendName:"cpu",kernelFunc:qn};function M_(n,t,e,i,r,s,o){let a=t[0],l=s[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(B.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let m=A.getArrayFromDType(e,0),p=A.getArrayFromDType(r,0);return[m,[0,h],p,c,u]}let f=!0,d=0,g=new Array(l).fill(0);for(let m=0;m<a;++m){let p=n[m*h];if(p<0)throw new Error(B.getSparseFillEmptyRowsNegativeIndexErrorMessage(m,p));if(p>=l)throw new Error(B.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(m,p,l));++g[p],f=f&&p>=d,d=p}let x=!0;for(let m=0;m<l;++m){let p=g[m]===0;c[m]=p,x=x&&!p,g[m]=Math.max(g[m],1),m>0&&(g[m]+=g[m-1])}if(x&&f){let m=n,p=i;for(let v=0;v<a;++v)u[v]=v;return[m,[a,h],p,c,u]}else{let m=g[l-1],p=A.getArrayFromDType(e,m*h),v=A.getArrayFromDType(r,m),_=new Array(l).fill(0);for(let y=0;y<a;++y){let S=n[y*h],b=_[S],T=(S===0?0:g[S-1])+b;_[S]++;for(let R=0;R<h;++R)p[T*h+R]=n[y*h+R];v[T]=i[y],u[y]=T}for(let y=0;y<l;++y)if(_[y]===0){let b=y===0?0:g[y-1];p[b*h+0]=y;for(let T=1;T<h;++T)p[b*h+T]=0;v[b]=o}return[p,[m,h],v,c,u]}}function w_(n,t,e,i,r){let s=A.sizeFromShape(i),o=t[0],a=r.length,l=[],c=1,u=-1;for(let m=0;m<a;++m){let p=r[m];if(p===-1){if(u!==-1)throw new Error(B.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(u,m));u=m,l.push(1)}else{if(p<0)throw new Error(B.getSparseReshapeNegativeOutputDimErrorMessage(m,p));c*=p,l.push(p)}}if(u!==-1){if(c<=0)throw new Error(B.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let m=Math.trunc(s/c);if(c*m!==s)throw new Error(B.getSparseReshapeInputOutputMultipleErrorMessage(i,l));l[u]=m}if(A.sizeFromShape(l)!==s)throw new Error(B.getSparseReshapeInputOutputMismatchErrorMessage(i,l));let f=i.length,d=[];if(f>0){d[f-1]=1;for(let m=f-2;m>=0;--m)d[m]=d[m+1]*i[m+1]}let g=[];if(a>0){g[a-1]=1;for(let m=a-2;m>=0;--m)g[m]=g[m+1]*l[m+1]}let x=A.getArrayFromDType(e,o*a);for(let m=0;m<o;++m){let p=0;for(let v=0;v<f;++v)p+=n[m*f+v]*d[v];for(let v=0;v<a;++v)x[m*a+v]=Math.trunc(p/g[v]),p%=g[v]}return[x,[o,a],l]}function su(n,t,e,i,r,s=!1,o=0){let a=i.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?r[a-1]+1:0;if(h<0)throw new Error(B.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=t.slice();f[0]=h;let d=f.reduce((_,y)=>_*y,1),g=A.getArrayFromDType(e,d);if(a===0)return h>0&&g.fill(o),[g,f];if(h<=0)throw new Error(B.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let x=0,m=1,p=0,v=r[x];for(;;){let _=0;if(m<a){if(_=r[m],v===_){++m;continue}if(v>=_)throw new Error(B.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(v<0||v>=h)throw new Error(B.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(v,h));v>p&&g.fill(o,p*c,v*c);for(let y=x;y<m;++y){let S=i[y];if(S<0||S>=l[0])throw new Error(B.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(y,i[y],l[0]));for(let b=0;b<c;b++)g[v*c+b]+=n[S*c+b]}if(s)for(let y=0;y<c;y++)g[v*c+y]/=m-x;if(x=m,++m,p=v+1,v=_,m>a)break}return p<h&&g.fill(o,p*c,h*c),[g,f]}var w8=Be(n=>Math.sqrt(n)),Y2=kt(Qo,n=>Math.sqrt(n)),T_={kernelName:Qo,backendName:"cpu",kernelFunc:Y2};var K2=Qt(((n,t)=>{let e=n-t;return e*e})),Z2=se(_f,K2),E_={kernelName:_f,backendName:"cpu",kernelFunc:Z2};var J2=Be((n,t)=>{let{pattern:e,replaceGlobal:i,rewrite:r}=t;return n.replace(new RegExp(e,i?"g":""),r)}),j2=un(vf,J2),A_={kernelName:vf,backendName:"cpu",kernelFunc:j2};function I_(n,t,e,i){let r=Ht(n,t.dtype);for(let s=0;s<r.size;s++){let o=r.indexToLoc(s),a=new Array(o.length);for(let l=0;l<a.length;l++)a[l]=o[l]*e[l]+i[l];r.set(t.get(...a),...o)}return r}var Td=class{constructor(t,e,i,r,s,o){this.separator=A.encodeString(t),this.nGramWidths=e,this.leftPad=A.encodeString(i),this.rightPad=A.encodeString(r),this.padWidth=s,this.preserveShort=o}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){let i=this.getPadWidth(e);return Math.max(0,t+2*i-e+1)}createNGrams(t,e,i,r,s,o){for(let a=0;a<s;++a){let l=this.getPadWidth(o),c=Math.max(0,l-a),u=Math.max(0,l-(s-(a+1))),h=o-(c+u),f=e+(c>0?0:a-l),d=0;d+=c*this.leftPad.length;for(let v=0;v<h;++v)d+=t[f+v].length;d+=u*this.rightPad.length;let g=c+u+h-1;d+=g*this.separator.length,i[r+a]=new Uint8Array(d);let x=i[r+a],m=0,p=v=>v.forEach(_=>x[m++]=_);for(let v=0;v<c;++v)p(this.leftPad),p(this.separator);for(let v=0;v<h-1;++v)p(t[f+v]),p(this.separator);if(h>0){p(t[f+h-1]);for(let v=0;v<u;++v)p(this.separator),p(this.rightPad)}else{for(let v=0;v<u-1;++v)p(this.rightPad),p(this.separator);p(this.rightPad)}}}compute(t,e){let i=t.length,r=e.length;if(r>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<r;++c){let u=e[c]>=l;if(u=u&&e[c]<=i,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${i}]`);l=e[c]}if(l!==i)throw new Error(`Last split value must be data size. Expected ${i}, got ${l}`)}let s=r-1,o=A.getArrayFromDType("int32",r);if(i===0||r===0){let l=new Array(i);for(let c=0;c<=s;++c)o[c]=0;return[l,o]}o[0]=0;for(let l=1;l<=s;++l){let c=e[l]-e[l-1],u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),o[l]=o[l-1]+u}let a=new Array(o[s]);for(let l=0;l<s;++l){let c=e[l],u=o[l];if(this.nGramWidths.forEach(h=>{let f=e[l+1]-e[l],d=this.getNumNGrams(f,h);this.createNGrams(t,c,a,u,d,h),u+=d}),this.preserveShort&&u===o[l]){let h=e[l+1]-e[l];if(h===0)continue;let f=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,f)}}return[a,o]}};function C_(n,t,e,i,r,s,o,a){return new Td(e,i,r,s,o,a).compute(n,t)}function Q2(n,t,e,i){if(!n.length)return;if(t.length===0){for(let s=0;s<n.length;++s)i.push(n.subarray(s,s+1));return}if(t.length===1){let s=t[0],o=n.indexOf(s);for(;o!==-1;){let a=n.subarray(0,o);(!e||a.length!==0)&&i.push(a),n=n.subarray(o+1),o=n.indexOf(s)}(!e||n.length!==0)&&i.push(n);return}let r=0;for(let s=0;s<n.length+1;s++)if(s===n.length||t.indexOf(n[s])!==-1){let o=n.subarray(r,s);(!e||o.length!==0)&&i.push(o),r=s+1}}function R_(n,t,e){let i=n.length,r=[],s=0,o=0,a=new Array(i);for(let f=0;f<i;++f){let d=r.length;Q2(n[f],t,e,r);let g=r.length-d;a[f]=g,s+=g,o=Math.max(o,g)}let l=A.getArrayFromDType("int32",s*2),c=new Array(s),u=[i,o],h=0;for(let f=0;f<i;++f)for(let d=0;d<a[f];++d)l[h*2]=f,l[h*2+1]=d,c[h]=r[h],++h;return[l,c,u]}function N_(n,t){let e=A.getArrayFromDType("int32",n.length);for(let i=0;i<n.length;++i)e[i]=A.fingerPrint64(n[i]).modulo(t).getLowBitsUnsigned();return e}var tN=Qt(((n,t)=>n-t)),eN=Js(((n,t,e,i)=>({real:n-e,imag:t-i}))),da=se("Sub",tN,eN),P_={kernelName:"Sub",backendName:"cpu",kernelFunc:da};function D_(n,t){let e=new Array(n.rank);for(let r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];let i=Ht(e,n.dtype);for(let r=0;r<i.values.length;++r){let s=i.indexToLoc(r),o=new Array(n.rank);for(let l=0;l<o.length;l++)o[l]=s[l]%n.shape[l];let a=n.locToIndex(o);i.values[r]=n.values[a]}return i}var pa=(n,t)=>{let e=t.value-n.value;return e===0?n.index-t.index:e};function F_(n,t,e=0,i=n.length-1){for(;i>e;){if(i-e>600){let a=i-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),f=Math.max(e,Math.floor(t-l*u/a+h)),d=Math.min(i,Math.floor(t+(a-l)*u/a+h));F_(n,t,f,d)}let r=n[t],s=e,o=i;for(A.swap(n,e,t),pa(n[i],r)>0&&A.swap(n,e,i);s<o;){for(A.swap(n,s,o),s++,o--;pa(n[s],r)<0;)s=s+1;for(;pa(n[o],r)>0;)o=o-1}pa(n[e],r)===0?A.swap(n,e,o):(o=o+1,A.swap(n,o,i)),o<=t&&(e=o+1),t<=o&&(i=o-1)}}function k_(n,t,e,i,r){let s=t[t.length-1],[o,a]=[n.length/s,s],l=A.getTypedArrayFromDType(e,o*i),c=A.getTypedArrayFromDType("int32",o*i);for(let h=0;h<o;h++){let f=h*a,d=n.subarray(f,f+a),g=new Array(d.length);d.forEach((v,_)=>g[_]={value:v,index:_}),i<g.length&&(F_(g,i),g=g.slice(0,i)),r&&g.sort(pa);let x=h*i,m=l.subarray(x,x+i),p=c.subarray(x,x+i);for(let v=0;v<i;v++)m[v]=g[v].value,p[v]=g[v].index}let u=t.slice();return u[u.length-1]=i,[Ht(u,e,l),Ht(u,"int32",c)]}function L_(n,t,e,i){let r=A.parseAxisParam(t,e)[0],s=[1,e[0],1];for(let g=0;g<r;g++)s[0]*=e[g];s[1]=e[r];for(let g=r+1;g<e.length;g++)s[2]*=e[g];let o=new Map,a=new Int32Array(e[r]),l=new he(s,i,n),c=[],u=s[0]===1&&s[2]===1;for(let g=0;g<e[r];g++){let x;if(u)x=n[g].toString();else{let p=[];for(let v=0;v<s[0];v++)for(let _=0;_<s[2];_++)p.push(l.get(v,g,_));x=p.join(",")}let m=o.get(x);if(m!=null)a[g]=m;else{let p=o.size;o.set(x,p),a[g]=p,c.push(g)}}let h=s.slice();h[1]=o.size;let f=new he(h,i);c.forEach((g,x)=>{for(let m=0;m<s[0];m++)for(let p=0;p<s[2];p++)f.set(l.get(m,g,p),m,x,p)});let d=e.slice();return d[r]=h[1],{outputValues:f.values,outputShape:d,indices:a}}f0("cpu",()=>new fa,1);var Ed=kt("Elu",n=>n>=0?n:Math.exp(n)-1),U_={kernelName:"Elu",backendName:"cpu",kernelFunc:Ed};function Ad(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{alpha:s}=i;tt([r],"leakyRelu");let o=A.sizeFromShape(r.shape),a=e.data.get(r.dataId).values,l=A.getTypedArrayFromDType("float32",o);for(let c=0;c<a.length;c++)l[c]=a[c]<0?s*a[c]:a[c];return e.makeTensorInfo(r.shape,"float32",l)}var O_={kernelName:Mc,backendName:"cpu",kernelFunc:Ad};var nN=Qt((n,t)=>n<0?t*n:n);function Id(n){let{inputs:t,backend:e}=n,{x:i,alpha:r}=t;tt([i,r],"prelu");let s=e.data.get(i.dataId).values,o=e.data.get(r.dataId).values,[a,l]=nN(i.shape,r.shape,s,o,"float32");return e.makeTensorInfo(l,"float32",a)}var B_={kernelName:wc,backendName:"cpu",kernelFunc:Id};var Cd=kt(Zo,n=>Math.max(0,n)),z_={kernelName:Zo,backendName:"cpu",kernelFunc:Cd};var Rd=kt(Jo,n=>Math.min(Math.max(0,n),6)),V_={kernelName:Jo,backendName:"cpu",kernelFunc:Rd};function Xr(n,t,e,i,r){if(e==="linear")return Xe({inputs:{x:t},backend:n});if(e==="relu")return Cd({inputs:{x:t},backend:n});if(e==="elu")return Ed({inputs:{x:t},backend:n});if(e==="relu6")return Rd({inputs:{x:t},backend:n});if(e==="prelu")return Id({inputs:{x:t,alpha:i},backend:n});if(e==="leakyrelu")return Ad({inputs:{x:t},backend:n,attrs:{alpha:r}});if(e==="sigmoid")return wd({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function te(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{shape:s}=i,o=A.sizeFromShape(r.shape),a=A.inferFromImplicitShape(s,o),l=A.sizeFromShape(a);A.assert(o===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${r.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),e.incRef(r.dataId);let c=e.data.get(r.dataId);if(c.complexTensorInfos!=null){let u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:r.dataId,shape:a,dtype:r.dtype}}var H_={kernelName:Tc,backendName:"cpu",kernelFunc:te};function Nd(n){let{inputs:t,backend:e,attrs:i}=n,{a:r,b:s}=t,{transposeA:o,transposeB:a}=i;tt([r,s],"matMul");let l=r.shape.length,c=s.shape.length,u=o?r.shape[l-2]:r.shape[l-1],h=a?s.shape[c-1]:s.shape[c-2],f=o?r.shape[l-1]:r.shape[l-2],d=a?s.shape[c-2]:s.shape[c-1],g=r.shape.slice(0,-2),x=s.shape.slice(0,-2),m=A.sizeFromShape(g),p=A.sizeFromShape(x),_=ua.assertAndGetBroadcastShape(r.shape.slice(0,-2),s.shape.slice(0,-2)).concat([f,d]);A.assert(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${r.shape} and ${s.shape} and transposeA=${o} and transposeB=${a} must match.`);let y=o?[m,u,f]:[m,f,u],S=a?[p,d,h]:[p,h,d],b=te({inputs:{x:r},backend:e,attrs:{shape:y}}),T=te({inputs:{x:s},backend:e,attrs:{shape:S}}),R=o?b.shape[1]:b.shape[2],w=o?b.shape[2]:b.shape[1],M=a?T.shape[1]:T.shape[2],C=Math.max(m,p),D=e.data.get(b.dataId).values,F=e.data.get(T.dataId).values,L=A.computeStrides(b.shape),U=A.computeStrides(T.shape),[O,V,k]=o?[L[0],1,L[1]]:[L[0],L[1],1],[G,K,Z]=a?[1,U[1],U[0]]:[U[1],1,U[0]],nt=w*M,it=Ht([C,w,M],b.dtype),lt=it.values,st=e.blockSize;for(let H=0;H<C;H++){let Y=H%m,rt=H%p;for(let ct=0;ct<w;ct+=st){let ut=Math.min(ct+st,w);for(let St=0;St<M;St+=st){let Zt=Math.min(St+st,M);for(let P=0;P<R;P+=st){let Xt=Math.min(P+st,R);for(let At=ct;At<ut;At++)for(let vt=St;vt<Zt;vt++){let xt=0;for(let Wt=P;Wt<Xt;Wt++){let It=D[Y*O+At*V+Wt*k],Lt=F[Wt*G+vt*K+rt*Z];xt+=It*Lt}lt[H*nt+(At*M+vt)]+=xt}}}}}return e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(T),e.makeTensorInfo(_,it.dtype,it.values)}var G_={kernelName:eg,backendName:"cpu",kernelFunc:Nd};function iN(n){let{inputs:t,backend:e,attrs:i}=n,{a:r,b:s,bias:o,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=i,f,d,g,x=[];f=Nd({inputs:{a:r,b:s},attrs:{transposeA:l,transposeB:c},backend:e}),o&&(d=xi({inputs:{a:f,b:o},backend:e}),x.push(f),f=d),u&&(g=Xr(e,f,u,a,h),x.push(f),f=g);for(let p of x)e.disposeIntermediateTensorInfo(p);return f}var W_={kernelName:Nx,backendName:"cpu",kernelFunc:iN};var rN=kt(Lh,n=>Math.acos(n)),$_={kernelName:Lh,backendName:"cpu",kernelFunc:rN};var sN=kt(Uh,n=>Math.acosh(n)),q_={kernelName:Uh,backendName:"cpu",kernelFunc:sN};function oN(n){let{inputs:t,backend:e}=n,i=t;tt(t,"addN");let r=i.map(a=>e.data.get(a.dataId).values),s=Ht(i[0].shape,i[0].dtype),o=s.values;for(let a=0;a<i.length;a++){let l=r[a];for(let c=0;c<o.length;c++)o[c]+=l[c]}return e.makeTensorInfo(s.shape,s.dtype,s.values)}var X_={kernelName:Ym,backendName:"cpu",kernelFunc:oN};function lN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,keepDims:o}=i;tt(r,"all");let a=A.parseAxisParam(s,r.shape),l=a,c=B.getAxesPermutation(l,r.shape.length),u=r;c!=null&&(u=Me({inputs:{x:r},backend:e,attrs:{perm:c}}),l=B.getInnerMostAxes(l.length,r.shape.length)),B.assertAxesAreInnerMostDims("all",l,u.shape.length);let[h,f]=B.computeOutAndReduceShapes(u.shape,l),d=A.sizeFromShape(f),g=A.makeZerosTypedArray(A.sizeFromShape(h),u.dtype),x=e.data.get(u.dataId).values;for(let p=0;p<g.length;++p){let v=p*d,_=x[v];for(let y=0;y<d;++y){let S=x[v+y];_=_&&S}g[p]=_}c!=null&&e.disposeIntermediateTensorInfo(u);let m=e.makeTensorInfo(h,u.dtype,g);if(o){let p=B.expandShapeToKeepDim(h,a),v=te({inputs:{x:m},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(m),v}return m}var Y_={kernelName:"All",backendName:"cpu",kernelFunc:lN};function uN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,keepDims:o}=i;tt(r,"any");let a=A.parseAxisParam(s,r.shape),l=a,c=B.getAxesPermutation(l,r.shape.length),u=r;c!=null&&(u=Me({inputs:{x:r},backend:e,attrs:{perm:c}}),l=B.getInnerMostAxes(l.length,r.shape.length)),B.assertAxesAreInnerMostDims("any",l,u.shape.length);let[h,f]=B.computeOutAndReduceShapes(u.shape,l),d=A.sizeFromShape(f),g=A.makeZerosTypedArray(A.sizeFromShape(h),u.dtype),x=e.data.get(u.dataId).values;for(let p=0;p<g.length;++p){let v=p*d,_=x[v];for(let y=0;y<d;++y){let S=x[v+y];_=_||S}g[p]=_}c!=null&&e.disposeIntermediateTensorInfo(u);let m=e.makeTensorInfo(h,u.dtype,g);if(o){let p=B.expandShapeToKeepDim(h,a),v=te({inputs:{x:m},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(m),v}return m}var K_={kernelName:"Any",backendName:"cpu",kernelFunc:uN};function hN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s}=i;tt(r,"argMax");let o=A.parseAxisParam(s,r.shape),a=B.getAxesPermutation(o,r.shape.length),l=r,c=[];a!=null&&(l=Me({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),o=B.getInnerMostAxes(o.length,l.shape.length)),o=[o[0]],B.assertAxesAreInnerMostDims("argMax",o,l.shape.length);let[u,h]=B.computeOutAndReduceShapes(l.shape,o),f=A.sizeFromShape(u),d=A.makeZerosTypedArray(f,"int32"),g=A.sizeFromShape(h),x=e.data.get(l.dataId).values;for(let m=0;m<d.length;++m){let p=m*g,v=x[p],_=0;for(let y=0;y<g;++y){let S=x[p+y];S>v&&(v=S,_=y)}d[m]=_}return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),e.makeTensorInfo(u,"int32",d)}var Z_={kernelName:Km,backendName:"cpu",kernelFunc:hN};function fN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s}=i;tt(r,"argMin");let o=A.parseAxisParam(s,r.shape),a=B.getAxesPermutation(o,r.shape.length),l=r,c=[];a!=null&&(l=Me({inputs:{x:r},backend:e,attrs:{perm:a}}),c.push(l),o=B.getInnerMostAxes(o.length,l.shape.length)),o=[o[0]],B.assertAxesAreInnerMostDims("argMin",o,l.shape.length);let[u,h]=B.computeOutAndReduceShapes(l.shape,o),f=A.sizeFromShape(u),d=A.makeZerosTypedArray(f,"int32"),g=A.sizeFromShape(h),x=e.data.get(l.dataId).values;for(let m=0;m<d.length;++m){let p=m*g,v=x[p],_=0;for(let y=0;y<g;++y){let S=x[p+y];S<v&&(v=S,_=y)}d[m]=_}return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),e.makeTensorInfo(u,"int32",d)}var J_={kernelName:Zm,backendName:"cpu",kernelFunc:fN};var dN=kt(Oh,n=>Math.asin(n)),j_={kernelName:Oh,backendName:"cpu",kernelFunc:dN};var pN=kt(Bh,n=>Math.asinh(n)),Q_={kernelName:Bh,backendName:"cpu",kernelFunc:pN};var mN=kt(zh,n=>Math.atan(n)),tv={kernelName:zh,backendName:"cpu",kernelFunc:mN};var gN=Qt((n,t)=>Math.atan2(n,t)),xN=se(Hh,gN),ev={kernelName:Hh,backendName:"cpu",kernelFunc:xN};var yN=kt(Vh,n=>Math.atanh(n)),nv={kernelName:Vh,backendName:"cpu",kernelFunc:yN};function js(n,t,e,i,r,s){let o=r.strideHeight,a=r.strideWidth,l=r.dilationHeight,c=r.dilationWidth,u=r.effectiveFilterHeight,h=r.effectiveFilterWidth,f=r.padInfo.top,d=r.padInfo.left,g=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=Ht(r.outShape,e),m=x.values,p=r.outShape[1]*r.outShape[2]*r.outShape[3],v=r.outShape[2]*r.outShape[3],_=r.outShape[3];for(let y=0;y<r.batchSize;++y){let S=y*p,b=y*i[0];for(let T=0;T<r.inChannels;++T)for(let R=0;R<r.outHeight;++R){let w=R*o-f,M=Math.max(0,w),C=Math.min(r.inHeight,u+w),D=S+R*v;for(let F=0;F<r.outWidth;++F){let L=F*a-d,U=Math.max(0,L),O=Math.min(r.inWidth,h+L),V=g,k=0,G=0;for(let Z=M;Z<C;Z+=l){let nt=b+Z*i[1];for(let it=U;it<O;it+=c){let lt=nt+it*i[2],st=n[lt+T];s==="max"&&st>V?V=st:s==="avg"&&(k+=st,G++)}if(isNaN(V))break}let K=D+F*_+T;m[K]=s==="avg"?k/G:V}}}return x}function ou(n,t,e,i,r=!1,s=!1){let o=Ht(i.outShape,"int32"),a=i.strideHeight,l=i.strideWidth,c=i.dilationHeight,u=i.dilationWidth,h=i.effectiveFilterHeight,f=i.effectiveFilterWidth,d=i.padInfo.top,g=i.padInfo.left,x=Ht(t,e,n);for(let m=0;m<i.batchSize;++m)for(let p=0;p<i.inChannels;++p)for(let v=0;v<i.outHeight;++v){let _=v*a-d,y=_;for(;y<0;)y+=c;let S=Math.min(i.inHeight,h+_);for(let b=0;b<i.outWidth;++b){let T=b*l-g,R=T;for(;R<0;)R+=u;let w=Math.min(i.inWidth,f+T),M=Number.NEGATIVE_INFINITY,C=-1;for(let D=y;D<S;D+=c){let F=D-_;for(let L=R;L<w;L+=u){let U=L-T,O=x.get(m,D,L,p);O>M&&(M=O,r?C=s?((m*i.inHeight+D)*i.inWidth+L)*i.inChannels+p:(D*i.inWidth+L)*i.inChannels+p:C=F*f+U)}}o.set(C,m,v,b,p)}}return o}function au(n,t,e,i,r,s){let o=r.strideDepth,a=r.strideHeight,l=r.strideWidth,c=r.dilationDepth,u=r.dilationHeight,h=r.dilationWidth,f=r.effectiveFilterDepth,d=r.effectiveFilterHeight,g=r.effectiveFilterWidth,x=r.padInfo.front,m=r.padInfo.top,p=r.padInfo.left,v=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,_=Ht(r.outShape,e),y=_.values,S=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],b=r.outShape[2]*r.outShape[3]*r.outShape[4],T=r.outShape[3]*r.outShape[4],R=r.outShape[4];for(let w=0;w<r.batchSize;++w){let M=w*S,C=w*i[0];for(let D=0;D<r.inChannels;++D)for(let F=0;F<r.outDepth;++F){let L=F*o-x,U=L;for(;U<0;)U+=c;let O=Math.min(r.inDepth,f+L),V=M+F*b;for(let k=0;k<r.outHeight;++k){let G=k*a-m,K=G;for(;K<0;)K+=u;let Z=Math.min(r.inHeight,d+G),nt=V+k*T;for(let it=0;it<r.outWidth;++it){let lt=it*l-p,st=lt;for(;st<0;)st+=h;let H=Math.min(r.inWidth,g+lt),Y=nt+it*R,rt=v,ct=0,ut=0;for(let Zt=U;Zt<O;Zt+=c){let P=C+Zt*i[1];for(let Xt=K;Xt<Z;Xt+=u){let At=P+Xt*i[2];for(let vt=st;vt<H;vt+=h){let xt=At+vt*i[3],Wt=n[xt+D];if(s==="max"&&Wt>rt?rt=Wt:s==="avg"&&(ct+=Wt,ut++),isNaN(rt))break}if(isNaN(rt))break}if(isNaN(rt))break}let St=Y+D;y[St]=s==="avg"?ct/Math.max(ut,1):rt}}}}return _}function iv(n,t){let e=Ht(t.outShape,"int32"),i=t.strideDepth,r=t.strideHeight,s=t.strideWidth,o=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,f=t.padInfo.front,d=t.padInfo.top,g=t.padInfo.left;for(let x=0;x<t.batchSize;++x)for(let m=0;m<t.inChannels;++m)for(let p=0;p<t.outDepth;++p){let v=p*i-f,_=v;for(;_<0;)_+=o;let y=Math.min(t.inDepth,c+v);for(let S=0;S<t.outHeight;++S){let b=S*r-d,T=b;for(;T<0;)T+=a;let R=Math.min(t.inHeight,u+b);for(let w=0;w<t.outWidth;++w){let M=w*s-g,C=M;for(;C<0;)C+=l;let D=Math.min(t.inWidth,h+M),F=Number.NEGATIVE_INFINITY,L=-1;for(let U=_;U<y;U+=o){let O=U-v;for(let V=T;V<R;V+=a){let k=V-b;for(let G=C;G<D;G+=l){let K=G-M,Z=n.get(x,U,V,G,m);Z>=F&&(F=Z,L=O*u*h+k*u+K)}}}e.set(L,x,p,S,w,m)}}}return e}function _N(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t;tt(r,"avgPool");let{filterSize:s,strides:o,pad:a,dimRoundingMode:l}=i,c=1;A.assert(B.eitherStridesOrDilationsAreOne(o,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);let u=B.computePool2DInfo(r.shape,s,o,c,a,l),h;if(u.filterWidth===1&&u.filterHeight===1&&A.arraysEqual(u.inShape,u.outShape))h=Xe({inputs:{x:r},backend:e});else{let f=e.data.get(r.dataId).values,d=A.computeStrides(r.shape),g=js(f,r.shape,r.dtype,d,u,"avg");h=e.makeTensorInfo(u.outShape,r.dtype,g.values)}return h}var rv={kernelName:Jm,backendName:"cpu",kernelFunc:_N};function vN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{filterSize:s,strides:o,pad:a,dimRoundingMode:l,dataFormat:c}=i;tt(r,"avgPool3d");let u=B.computePool3DInfo(r.shape,s,o,1,a,l,c),h=e.data.get(r.dataId).values,f=au(h,r.shape,r.dtype,A.computeStrides(r.shape),u,"avg");return e.makeTensorInfo(f.shape,"float32",f.values)}var sv={kernelName:Qm,backendName:"cpu",kernelFunc:vN};function SN(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,input:s}=t,{filterSize:o,strides:a,pad:l,dimRoundingMode:c}=i;tt([r,s],"avgPool3DGrad");let u=B.computePool3DInfo(s.shape,o,a,1,l,c),h=u.strideDepth,f=u.strideHeight,d=u.strideWidth,g=u.filterDepth,x=u.filterHeight,m=u.filterWidth,p=u.dilationDepth,v=u.dilationHeight,_=u.dilationWidth,y=u.effectiveFilterDepth,S=u.effectiveFilterHeight,b=u.effectiveFilterWidth,T=y-1-u.padInfo.front,R=b-1-u.padInfo.left,w=S-1-u.padInfo.top,M=Ht(s.shape,"float32"),C=1/(g*x*m),D=e.bufferSync(r);for(let F=0;F<u.batchSize;++F)for(let L=0;L<u.inChannels;++L)for(let U=0;U<u.inDepth;++U)for(let O=0;O<u.inHeight;++O)for(let V=0;V<u.inWidth;++V){let k=U-T,G=O-w,K=V-R,Z=0;for(let nt=0;nt<y;nt+=p){let it=(k+nt)/h;if(!(it<0||it>=u.outDepth||Math.floor(it)!==it))for(let lt=0;lt<S;lt+=v){let st=(G+lt)/f;if(!(st<0||st>=u.outHeight||Math.floor(st)!==st))for(let H=0;H<b;H+=_){let Y=(K+H)/d;if(Y<0||Y>=u.outWidth||Math.floor(Y)!==Y)continue;let rt=D.get(F,it,st,Y,L);Z+=rt}}}M.set(Z*C,F,U,O,V,L)}return e.makeTensorInfo(M.shape,M.dtype,M.values)}var ov={kernelName:tg,backendName:"cpu",kernelFunc:SN};function bN(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,input:s}=t,o=s;tt([r,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:c}=i,u=B.computePool2DInfo(o.shape,a,l,1,c),h=u.strideHeight,f=u.strideWidth,d=u.filterHeight,g=u.filterWidth,x=u.dilationHeight,m=u.dilationWidth,p=u.effectiveFilterHeight,v=u.effectiveFilterWidth,_=v-1-u.padInfo.left,y=p-1-u.padInfo.top,S=Ht(o.shape,"float32"),b=1/(d*g),T=e.data.get(r.dataId).values,R=Ht(r.shape,"float32",T);for(let w=0;w<u.batchSize;++w)for(let M=0;M<u.inChannels;++M)for(let C=0;C<u.inHeight;++C)for(let D=0;D<u.inWidth;++D){let F=C-y,L=D-_,U=0;for(let O=0;O<p;O+=x){let V=(F+O)/h;if(!(V<0||V>=u.outHeight||Math.floor(V)!==V))for(let k=0;k<v;k+=m){let G=(L+k)/f;if(G<0||G>=u.outWidth||Math.floor(G)!==G)continue;let K=R.get(w,V,G,M);U+=K}}S.set(U*b,w,C,D,M)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}var av={kernelName:jm,backendName:"cpu",kernelFunc:bN};function MN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,scale:s,offset:o,mean:a,variance:l}=t;A.assert(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),A.assert(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),A.assert(s==null||a.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),tt([r,a,l,s,o],"batchNorm");let{varianceEpsilon:c}=i;c==null&&(c=.001);let u=e.data.get(r.dataId).values,h=e.data.get(a.dataId).values,f=e.data.get(l.dataId).values,d=s?e.data.get(s.dataId).values:new Float32Array([1]),g=o?e.data.get(o.dataId).values:new Float32Array([0]),x=new Float32Array(u.length),m=g.length,p=d.length,v=f.length,_=h.length,y=0,S=0,b=0,T=0;for(let R=0;R<u.length;++R)x[R]=g[y++]+(u[R]-h[S++])*d[b++]/Math.sqrt(f[T++]+c),y>=m&&(y=0),S>=_&&(S=0),b>=p&&(b=0),T>=v&&(T=0);return e.makeTensorInfo(r.shape,r.dtype,x)}var lv={kernelName:Ig,backendName:"cpu",kernelFunc:MN};function wN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{blockShape:s,crops:o}=i;tt([r],"batchToSpaceND");let a=s.reduce((p,v)=>p*v),l=B.getReshaped(r.shape,s,a),c=B.getPermuted(l.length,s.length),u=B.getReshapedPermuted(r.shape,s,a),h=B.getSliceBeginCoords(o,s.length),f=B.getSliceSize(u,o,s.length),d=te({inputs:{x:r},backend:e,attrs:{shape:l}}),g=Me({inputs:{x:d},backend:e,attrs:{perm:c}}),x=te({inputs:{x:g},backend:e,attrs:{shape:u}}),m=qn({inputs:{x},backend:e,attrs:{begin:h,size:f}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),m}var cv={kernelName:ng,backendName:"cpu",kernelFunc:wN};function TN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,weights:s}=t,{size:o}=i,a=e.data.get(r.dataId).values,l=e.data.get(s.dataId).values,c=iu(a,l,s.dtype,s.shape,o);return e.makeTensorInfo([o],s.dtype,c)}var uv={kernelName:ig,backendName:"cpu",kernelFunc:TN};function EN(n){let{inputs:t,backend:e}=n,{s0:i,s1:r}=t,s=e.data.get(i.dataId).values,o=e.data.get(r.dataId).values,a=B.assertAndGetBroadcastShape(Array.from(s),Array.from(o));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var hv={kernelName:rg,backendName:"cpu",kernelFunc:EN};var AN=kt($h,(n,t)=>{let e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),fv={kernelName:$h,backendName:"cpu",kernelFunc:AN};var IN=n=>{let{x:t}=n.inputs,e=n.backend,i=new Float32Array(A.sizeFromShape(t.shape)),r=e.data.get(t.dataId),s=r.complexTensorInfos.real,o=r.complexTensorInfos.imag,a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values;for(let c=0;c<a.length;c++){let u=a[c],h=l[c];i[c]=Math.hypot(u,h)}return e.makeOutput(i,t.shape,"float32")},dv={kernelName:Sc,backendName:"cpu",kernelFunc:IN};function yi(n){let{inputs:t,backend:e}=n,{input:i}=t,r=e.data.get(i.dataId).complexTensorInfos.imag,s=e.data.get(r.dataId).values;return e.makeTensorInfo(r.shape,r.dtype,s)}var pv={kernelName:Pg,backendName:"cpu",kernelFunc:yi};function hr(n){let{inputs:t,backend:e,attrs:i}=n,{axis:r}=i,s=A.parseAxisParam(r,t[0].shape)[0],o=t.map(x=>x.shape);B.assertParamsConsistent(o,s);let a=B.computeOutShape(t.map(x=>x.shape),s);if(A.sizeFromShape(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);let l=t.filter(x=>A.sizeFromShape(x.shape)>0);if(l.length===1)return Xe({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){let x=l.map(y=>Gn({inputs:{input:y},backend:e})),m=l.map(y=>yi({inputs:{input:y},backend:e})),p=hr({inputs:x,backend:e,attrs:{axis:s}}),v=hr({inputs:m,backend:e,attrs:{axis:s}}),_=Le({inputs:{real:p,imag:v},backend:e});return x.forEach(y=>e.disposeIntermediateTensorInfo(y)),m.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(v),_}let c=l.map(x=>{let p=[-1,A.sizeFromShape(x.shape.slice(s))];return te({inputs:{x},backend:e,attrs:{shape:p}})}),u=c.map(x=>({vals:e.data.get(x.dataId).values,shape:x.shape}));a=B.computeOutShape(c.map(x=>x.shape),1);let h=c[0].shape[0]===1,f=Hy(u,a,t[0].dtype,h),d=B.computeOutShape(l.map(x=>x.shape),s),g=e.makeTensorInfo(d,t[0].dtype,f);return c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g}var mv={kernelName:og,backendName:"cpu",kernelFunc:hr};function Pd(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,filter:s}=t,{strides:o,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=i;tt([r,s],"conv2d");let h=B.convertConv2DDataFormat(l),f=B.computeConv2DInfo(r.shape,s.shape,o,c,a,u,!1,h),d=f.filterHeight,g=f.filterWidth,x=f.dilationHeight,m=f.dilationWidth,p=f.padInfo.left,v=f.padInfo.top,_=f.dataFormat==="channelsLast",y=new he(f.outShape,r.dtype),S=A.computeStrides(r.shape),b=A.computeStrides(s.shape),T=S[0],R=_?S[1]:S[2],w=_?S[2]:1,M=_?1:S[1],C=y.strides[0],D=_?y.strides[1]:y.strides[2],F=_?y.strides[2]:1,L=_?1:y.strides[1],U=e.data.get(r.dataId).values,O=e.data.get(s.dataId).values,V=y.values;for(let k=0;k<f.batchSize;++k){let G=k*T,K=k*C;for(let Z=0;Z<f.outHeight;++Z){let nt=K+Z*D,it=Z*f.strideHeight-v;for(let lt=0;lt<d;++lt){let st=it+lt*x;if(st<0||st>=f.inHeight)continue;let H=lt*b[0],Y=G+st*R;for(let rt=0;rt<f.outWidth;++rt){let ct=nt+rt*F,ut=rt*f.strideWidth-p;for(let St=0;St<g;++St){let Zt=ut+St*m;if(Zt<0||Zt>=f.inWidth)continue;let P=H+St*b[1],Xt=Y+Zt*w,At=P;for(let vt=0;vt<f.inChannels;++vt){let xt=U[Xt+vt*M];for(let Wt=0;Wt<f.outChannels;++Wt)V[ct+Wt*L]+=xt*O[At+Wt];At+=f.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,V)}var gv={kernelName:ag,backendName:"cpu",kernelFunc:Pd};function CN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,dy:s}=t,{strides:o,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=i;tt([r,s],"conv2dBackpropFilter");let h=B.convertConv2DDataFormat(l),f=B.computeConv2DInfo(r.shape,u,o,1,a,c,!1,h),{strideHeight:d,strideWidth:g,filterHeight:x,filterWidth:m}=f,p=f.dataFormat==="channelsLast",v=new he(f.filterShape,"float32"),_=f.padInfo.left,y=f.padInfo.top,S=e.data.get(r.dataId).values,b=e.data.get(s.dataId).values,T=new he(r.shape,r.dtype,S),R=new he(s.shape,s.dtype,b);for(let w=0;w<x;++w){let M=Math.max(0,Math.ceil((y-w)/d)),C=Math.min(f.outHeight,(f.inHeight+y-w)/d);for(let D=0;D<m;++D){let F=Math.max(0,Math.ceil((_-D)/g)),L=Math.min(f.outWidth,(f.inWidth+_-D)/g);for(let U=0;U<f.inChannels;++U)for(let O=0;O<f.outChannels;++O){let V=0;for(let k=0;k<f.batchSize;++k)for(let G=M;G<C;++G){let K=w+G*d-y;for(let Z=F;Z<L;++Z){let nt=D+Z*g-_;p?V+=T.get(k,K,nt,U)*R.get(k,G,Z,O):V+=T.get(k,U,K,nt)*R.get(k,O,G,Z)}}v.set(V,w,D,U,O)}}}return e.makeTensorInfo(v.shape,v.dtype,v.values)}var xv={kernelName:lg,backendName:"cpu",kernelFunc:CN};function RN(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,filter:s}=t,{inputShape:o,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=i;tt([r,s],"conv2dBackpropInput");let h=A.computeStrides(s.shape),f=A.computeStrides(r.shape),d=B.convertConv2DDataFormat(c),g=B.computeConv2DInfo(o,s.shape,a,1,l,u,!1,d),x=new he(g.inShape,"float32"),m=x.values,p=e.data.get(r.dataId).values,v=e.data.get(s.dataId).values,[_,y,S]=h,{batchSize:b,filterHeight:T,filterWidth:R,inChannels:w,inHeight:M,inWidth:C,outChannels:D,outHeight:F,outWidth:L,strideHeight:U,strideWidth:O}=g;d=g.dataFormat;let V=T-1-g.padInfo.top,k=R-1-g.padInfo.left,G=d==="channelsLast",K=x.strides[0],Z=G?x.strides[1]:x.strides[2],nt=G?x.strides[2]:1,it=G?1:x.strides[1],lt=f[0],st=G?f[1]:f[2],H=G?f[2]:1,Y=G?1:f[1];for(let rt=0;rt<b;++rt)for(let ct=0;ct<w;++ct)for(let ut=0;ut<M;++ut){let St=ut-V,Zt=Math.max(0,Math.ceil(St/U)),P=Math.min(F,(T+St)/U);for(let Xt=0;Xt<C;++Xt){let At=Xt-k,vt=Math.max(0,Math.ceil(At/O)),xt=Math.min(L,(R+At)/O),Wt=0;for(let Lt=Zt;Lt<P;++Lt){let ve=Lt*U-St;for(let ce=vt;ce<xt;++ce){let N=ce*O-At,E=lt*rt+st*Lt+H*ce,X=_*(T-1-ve)+y*(R-1-N)+S*ct;for(let et=0;et<D;++et){let at=p[E+Y*et],Q=v[X+et];Wt+=at*Q}}}let It=K*rt+Z*ut+nt*Xt+it*ct;m[It]=Wt}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}var yv={kernelName:cg,backendName:"cpu",kernelFunc:RN};function NN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,filter:s}=t,{strides:o,pad:a,dilations:l}=i;tt([r,s],"conv3d");let c=B.computeConv3DInfo(r.shape,s.shape,o,l,a),{filterDepth:u,filterHeight:h,filterWidth:f,dilationDepth:d,dilationHeight:g,dilationWidth:x,padInfo:m}=c,p=m.front,v=m.left,_=m.top,y=new he(c.outShape,r.dtype),S=e.data.get(r.dataId).values,b=e.data.get(s.dataId).values,T=y.values,R=A.computeStrides(r.shape),w=A.computeStrides(s.shape);for(let M=0;M<c.batchSize;++M){let C=M*R[0],D=M*y.strides[0];for(let F=0;F<c.outDepth;++F){let L=D+F*y.strides[1],U=F*c.strideDepth-p;for(let O=0;O<u;++O){let V=U+O*d;if(V<0||V>=c.inDepth)continue;let k=O*w[0],G=C+V*R[1];for(let K=0;K<c.outHeight;++K){let Z=L+K*y.strides[2],nt=K*c.strideHeight-_;for(let it=0;it<h;++it){let lt=nt+it*g;if(lt<0||lt>=c.inHeight)continue;let st=k+it*w[1],H=G+lt*R[2];for(let Y=0;Y<c.outWidth;++Y){let rt=Z+Y*c.outChannels,ct=Y*c.strideWidth-v;for(let ut=0;ut<f;++ut){let St=ct+ut*x;if(St<0||St>=c.inWidth)continue;let Zt=st+ut*w[2],P=H+St*c.inChannels,Xt=Zt;for(let At=0;At<c.inChannels;++At){let vt=S[P+At];for(let xt=0;xt<c.outChannels;++xt)T[rt+xt]+=vt*b[Xt+xt];Xt+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}var _v={kernelName:ug,backendName:"cpu",kernelFunc:NN};function PN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,dy:s}=t,{strides:o,pad:a,filterShape:l}=i;tt([r,s],"conv3dBackpropFilterV2");let c=A.computeStrides(r.shape),u=A.computeStrides(s.shape),h=B.computeConv3DInfo(r.shape,l,o,1,a),f=h.strideDepth,d=h.strideHeight,g=h.strideWidth,x=h.filterDepth,m=h.filterHeight,p=h.filterWidth,v=new he(h.filterShape,"float32"),_=v.values,[y,S,b,T]=v.strides,R=e.data.get(s.dataId).values,[w,M,C,D]=u,F=e.data.get(r.dataId).values,[L,U,O,V]=c,k=h.padInfo.front,G=h.padInfo.left,K=h.padInfo.top;for(let Z=0;Z<x;++Z){let nt=Math.max(0,Math.ceil((k-Z)/f)),it=Math.min(h.outDepth,(h.inDepth+k-Z)/f),lt=Z*y;for(let st=0;st<m;++st){let H=Math.max(0,Math.ceil((K-st)/d)),Y=Math.min(h.outHeight,(h.inHeight+K-st)/d),rt=st*S+lt;for(let ct=0;ct<p;++ct){let ut=Math.max(0,Math.ceil((G-ct)/g)),St=Math.min(h.outWidth,(h.inWidth+G-ct)/g),Zt=ct*b+rt;for(let P=0;P<h.inChannels;++P){let Xt=P*T+Zt;for(let At=0;At<h.outChannels;++At){let vt=0;for(let xt=0;xt<h.batchSize;++xt){let Wt=xt*L,It=xt*w;for(let Lt=nt;Lt<it;++Lt){let ce=(Z+Lt*f-k)*U+Wt,N=Lt*M+It;for(let E=H;E<Y;++E){let et=(st+E*d-K)*O+ce,at=E*C+N;for(let Q=ut;Q<St;++Q){let gt=(ct+Q*g-G)*V+et,Pt=Q*D+at;vt+=F[gt+P]*R[Pt+At]}}}}_[Xt+At]=vt}}}}}return e.makeTensorInfo(v.shape,v.dtype,v.values)}var vv={kernelName:hg,backendName:"cpu",kernelFunc:PN};function DN(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,filter:s}=t,{pad:o,strides:a,inputShape:l}=i;tt([r],"conv3dBackpropInputV2");let c=A.computeStrides(r.shape),u=A.computeStrides(s.shape),h=B.computeConv3DInfo(l,s.shape,a,1,o),f=new he(h.inShape,"float32"),d=f.values,[g,x,m,p]=f.strides,v=e.data.get(r.dataId).values,[_,y,S,b]=c,T=e.data.get(s.dataId).values,[R,w,M,C]=u,{batchSize:D,filterDepth:F,filterHeight:L,filterWidth:U,inChannels:O,inDepth:V,inHeight:k,inWidth:G,outChannels:K,outDepth:Z,outHeight:nt,outWidth:it,strideDepth:lt,strideHeight:st,strideWidth:H}=h,Y=F-1-h.padInfo.front,rt=L-1-h.padInfo.top,ct=U-1-h.padInfo.left;for(let ut=0;ut<D;++ut)for(let St=0;St<O;++St)for(let Zt=0;Zt<V;++Zt){let P=Zt-Y,Xt=Math.max(0,Math.ceil(P/lt)),At=Math.min(Z,(F+P)/lt);for(let vt=0;vt<k;++vt){let xt=vt-rt,Wt=Math.max(0,Math.ceil(xt/st)),It=Math.min(nt,(L+xt)/st);for(let Lt=0;Lt<G;++Lt){let ve=Lt-ct,ce=Math.max(0,Math.ceil(ve/H)),N=Math.min(it,(U+ve)/H),E=0;for(let X=Xt;X<At;++X){let et=X*lt-P;for(let at=Wt;at<It;++at){let Q=at*st-xt;for(let Nt=ce;Nt<N;++Nt){let gt=Nt*H-ve,Pt=_*ut+y*X+S*at+b*Nt,Ut=R*(F-1-et)+w*(L-1-Q)+M*(U-1-gt)+C*St;for(let ft=0;ft<K;++ft){let wt=v[Pt+ft],$t=T[Ut+ft];E+=wt*$t}}}}d[g*ut+x*Zt+m*vt+p*Lt+St]=E}}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}var Sv={kernelName:fg,backendName:"cpu",kernelFunc:DN};var FN=kt("Cos",n=>Math.cos(n)),Mv={kernelName:"Cos",backendName:"cpu",kernelFunc:FN};var kN=kt(qh,n=>Math.cosh(n)),wv={kernelName:qh,backendName:"cpu",kernelFunc:kN};function LN(n){let{inputs:t,backend:e,attrs:i}=n,{image:r,boxes:s,boxInd:o}=t,{cropSize:a,method:l,extrapolationValue:c}=i,[u,h,f,d]=r.shape,g=s.shape[0],[x,m]=a,p=Ht([g,x,m,d],"float32"),v=e.data.get(s.dataId).values,_=e.data.get(o.dataId).values,y=e.data.get(r.dataId).values,S=A.computeStrides(r.shape),b=A.computeStrides(p.shape);for(let T=0;T<g;T++){let R=T*4,w=v[R],M=v[R+1],C=v[R+2],D=v[R+3],F=_[T];if(F>=u)continue;let L=x>1?(C-w)*(h-1)/(x-1):0,U=m>1?(D-M)*(f-1)/(m-1):0;for(let O=0;O<x;O++){let V=x>1?w*(h-1)+O*L:.5*(w+C)*(h-1);if(V<0||V>h-1){for(let k=0;k<m;k++)for(let G=0;G<d;G++){let K=G+k*b[2]+O*b[1]+T*b[0];p.values[K]=c}continue}if(l==="bilinear"){let k=Math.floor(V),G=Math.ceil(V),K=V-k;for(let Z=0;Z<m;Z++){let nt=m>1?M*(f-1)+Z*U:.5*(M+D)*(f-1);if(nt<0||nt>f-1){for(let H=0;H<d;H++){let Y=H+Z*b[2]+O*b[1]+T*b[0];p.values[Y]=c}continue}let it=Math.floor(nt),lt=Math.ceil(nt),st=nt-it;for(let H=0;H<d;H++){let Y=H+it*S[2]+k*S[1]+F*S[0],rt=y[Y];Y=H+lt*S[2]+k*S[1]+F*S[0];let ct=y[Y];Y=H+it*S[2]+G*S[1]+F*S[0];let ut=y[Y];Y=H+lt*S[2]+G*S[1]+F*S[0];let St=y[Y],Zt=rt+(ct-rt)*st,P=ut+(St-ut)*st;Y=H+Z*b[2]+O*b[1]+T*b[0],p.values[Y]=Zt+(P-Zt)*K}}}else for(let k=0;k<m;++k){let G=m>1?M*(f-1)+k*U:.5*(M+D)*(f-1);if(G<0||G>f-1){for(let nt=0;nt<d;nt++){let it=nt+k*b[2]+O*b[1]+T*b[0];p.values[it]=c}continue}let K=Math.round(G),Z=Math.round(V);for(let nt=0;nt<d;nt++){let it=nt+K*S[2]+Z*S[1]+F*S[0],lt=nt+k*b[2]+O*b[1]+T*b[0];p.values[lt]=y[it]}}}}return e.makeTensorInfo(p.shape,p.dtype,p.values)}var Tv={kernelName:mg,backendName:"cpu",kernelFunc:LN};function UN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,exclusive:o,reverse:a}=i;tt(r,"cumprod");let l=B.getAxesPermutation([s],r.shape.length),c=r;l!=null&&(c=Me({inputs:{x:r},backend:e,attrs:{perm:l}}));let u=B.getInnerMostAxes(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);let h=In(c.dtype,"int32"),f=A.makeOnesTypedArray(A.sizeFromShape(c.shape),h),d=e.data.get(c.dataId).values,g=c.shape[c.shape.length-1],x=a?(p,v)=>p+g-v-1:(p,v)=>p+v;for(let p=0;p<d.length;p+=g)for(let v=0;v<g;v++){let _=x(p,v);if(v===0)f[_]=o?1:d[_];else{let y=x(p,v-1);f[_]=o?d[y]*f[y]:d[_]*f[y]}}let m=e.makeTensorInfo(c.shape,h,f);if(l!=null){let p=B.getUndoAxesPermutation(l),v=Me({inputs:{x:m},backend:e,attrs:{perm:p}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(c),v}return m}var Ev={kernelName:dg,backendName:"cpu",kernelFunc:UN};function ON(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,exclusive:o,reverse:a}=i;tt(r,"cumsum");let l=B.getAxesPermutation([s],r.shape.length),c=r;l!=null&&(c=Me({inputs:{x:r},backend:e,attrs:{perm:l}}));let u=B.getInnerMostAxes(1,r.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);let h=In(c.dtype,"int32"),f=A.makeZerosTypedArray(A.sizeFromShape(c.shape),h),d=e.data.get(c.dataId).values,g=c.shape[c.shape.length-1],x=a?(p,v)=>p+g-v-1:(p,v)=>p+v;for(let p=0;p<d.length;p+=g)for(let v=0;v<g;v++){let _=x(p,v);if(v===0)f[_]=o?0:d[_];else{let y=x(p,v-1);f[_]=o?d[y]+f[y]:d[_]+f[y]}}let m=e.makeTensorInfo(c.shape,h,f);if(l!=null){let p=B.getUndoAxesPermutation(l),v=Me({inputs:{x:m},backend:e,attrs:{perm:p}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(c),v}return m}var Av={kernelName:pg,backendName:"cpu",kernelFunc:ON};function BN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,weights:s}=t,{size:o,binaryOutput:a}=i;if(r.shape.length===1){let l=e.data.get(r.dataId).values,c=e.data.get(s.dataId).values,u=iu(l,c,s.dtype,s.shape,o);return e.makeTensorInfo([o],s.dtype,u)}else if(r.shape.length===2){let l=e.bufferSync(r),c=e.bufferSync(s),u=By(l,c,o,a);return e.makeTensorInfo(u.shape,s.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}var Iv={kernelName:gg,backendName:"cpu",kernelFunc:BN};function zN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{blockSize:s,dataFormat:o}=i;A.assert(o==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${o}`);let a=r.shape[0],l=r.shape[1],c=r.shape[2],u=r.shape[3],h=l*s,f=c*s,d=u/(s*s),g=e.data.get(r.dataId).values,x=new Float32Array(a*h*f*d),m=0;for(let p=0;p<a;++p)for(let v=0;v<h;++v){let _=Math.floor(v/s),y=v%s;for(let S=0;S<f;++S){let b=Math.floor(S/s),T=S%s,R=(y*s+T)*d;for(let w=0;w<d;++w){let C=w+R+u*(b+c*(_+l*p));x[m++]=g[C]}}}return e.makeTensorInfo([a,h,f,d],r.dtype,x)}var Cv={kernelName:xg,backendName:"cpu",kernelFunc:zN};function Dd(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,filter:s}=t,{strides:o,pad:a,dilations:l,dimRoundingMode:c}=i;tt([r,s],"depthwiseConv2DNative");let u=A.computeStrides(r.shape),h=A.computeStrides(s.shape),f=l;f==null&&(f=[1,1]),A.assert(B.eitherStridesOrDilationsAreOne(o,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${f}'`);let d=B.computeConv2DInfo(r.shape,s.shape,o,f,a,c,!0),{filterHeight:g,filterWidth:x,dilationHeight:m,dilationWidth:p,padInfo:v}=d,_=v.left,y=v.top,S=d.outChannels/d.inChannels,b=new he(d.outShape,r.dtype),T=e.data.get(r.dataId).values,R=e.data.get(s.dataId).values,w=b.values;for(let M=0;M<d.batchSize;++M){let C=M*u[0],D=M*b.strides[0];for(let F=0;F<d.outHeight;++F){let L=D+F*b.strides[1],U=F*d.strideHeight-y;for(let O=0;O<g;++O){let V=U+O*m;if(V<0||V>=d.inHeight)continue;let k=O*h[0],G=C+V*u[1];for(let K=0;K<d.outWidth;++K){let Z=L+K*b.strides[2],nt=K*d.strideWidth-_;for(let it=0;it<x;++it){let lt=nt+it*p;if(lt<0||lt>=d.inWidth)continue;let st=k+it*h[1],H=G+lt*d.inChannels,Y=Z,rt=st;for(let ct=0;ct<d.inChannels;++ct){let ut=T[H+ct];for(let St=0;St<S;++St)w[Y+St]+=ut*R[rt+St];Y+=S,rt+=S}}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}var Rv={kernelName:yg,backendName:"cpu",kernelFunc:Dd};function VN(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,dy:s}=t,{strides:o,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=i;tt([r,s],"depthwiseConv2dNativeBackpropFilter");let h=B.computeConv2DInfo(r.shape,u,o,a,l,c,!0),{strideHeight:f,strideWidth:d,filterHeight:g,filterWidth:x}=h,m=new he(h.filterShape,"float32"),p=h.padInfo.left,v=h.padInfo.top,_=h.outChannels/h.inChannels,y=e.data.get(r.dataId).values,S=new he(r.shape,r.dtype,y),b=e.data.get(s.dataId).values,T=new he(s.shape,s.dtype,b);for(let R=0;R<g;++R){let w=Math.max(0,Math.ceil((v-R)/f)),M=Math.min(h.outHeight,(h.inHeight+v-R)/f);for(let C=0;C<x;++C){let D=Math.max(0,Math.ceil((p-C)/d)),F=Math.min(h.outWidth,(h.inWidth+p-C)/d);for(let L=0;L<h.outChannels;++L){let U=Math.trunc(L/_),O=L%_,V=0;for(let k=0;k<h.batchSize;++k)for(let G=w;G<M;++G){let K=R+G*f-v;for(let Z=D;Z<F;++Z){let nt=C+Z*d-p;V+=S.get(k,K,nt,U)*T.get(k,G,Z,L)}}m.set(V,R,C,U,O)}}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}var Nv={kernelName:_g,backendName:"cpu",kernelFunc:VN};function HN(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,filter:s}=t,{strides:o,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=i;tt([r,s],"depthwiseConv2DNativeBackpropInput");let h=A.computeStrides(r.shape),f=A.computeStrides(s.shape),d=B.computeConv2DInfo(u,s.shape,o,a,l,c,!0),g=new he(d.inShape,"float32"),x=g.values,[m,p,v]=g.strides,_=e.data.get(r.dataId).values,[y,S,b]=h,T=e.data.get(s.dataId).values,[R,w,M]=f,{batchSize:C,filterHeight:D,filterWidth:F,inChannels:L,inHeight:U,inWidth:O,outChannels:V,outHeight:k,outWidth:G,strideHeight:K,strideWidth:Z}=d,nt=D-1-d.padInfo.top,it=F-1-d.padInfo.left,lt=V/L;for(let st=0;st<C;++st)for(let H=0;H<L;++H)for(let Y=0;Y<U;++Y){let rt=Y-nt,ct=Math.max(0,Math.ceil(rt/K)),ut=Math.min(k,(D+rt)/K);for(let St=0;St<O;++St){let Zt=St-it,P=Math.max(0,Math.ceil(Zt/Z)),Xt=Math.min(G,(F+Zt)/Z),At=0;for(let vt=ct;vt<ut;++vt){let xt=vt*K-rt;for(let Wt=P;Wt<Xt;++Wt){let It=Wt*Z-Zt,Lt=y*st+S*vt+b*Wt,ve=R*(D-1-xt)+w*(F-1-It)+M*H;for(let ce=0;ce<lt;++ce){let N=H*lt+ce,E=_[Lt+N],X=T[ve+ce];At+=E*X}}}x[m*st+p*Y+v*St+H]=At}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}var Pv={kernelName:vg,backendName:"cpu",kernelFunc:HN};function GN(n){let{inputs:t,backend:e}=n,{x:i}=t,r=A.sizeFromShape(i.shape),s=e.data.get(i.dataId).values,o=Ht([r,r],i.dtype),a=o.values;for(let c=0;c<s.length;c++)a[c*r+c]=s[c];let l=[...i.shape,...i.shape];return e.makeTensorInfo(l,o.dtype,o.values)}var Dv={kernelName:Sg,backendName:"cpu",kernelFunc:GN};var Fv={kernelName:bg,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{let{x:i,filter:r}=n,{strides:s,pad:o,dilations:a}=e,l=t,c=l.data.get(i.dataId).values,u=i.shape.length,h=l.data.get(r.dataId).values,f=r.shape.length,{batchSize:d,inHeight:g,inWidth:x,inChannels:m,outHeight:p,outWidth:v,padInfo:_,strideHeight:y,strideWidth:S,filterHeight:b,filterWidth:T,dilationHeight:R,dilationWidth:w,outShape:M}=B.computeDilation2DInfo(i.shape,r.shape,s,o,"NHWC",a),C=A.sizeFromShape(M),D=M.length,F=A.getArrayFromDType(i.dtype,C);for(let U=0;U<d;++U)for(let O=0;O<p;++O){let V=O*y-_.top;for(let k=0;k<v;++k){let G=k*S-_.left;for(let K=0;K<m;++K){let Z=Number.MIN_SAFE_INTEGER;for(let it=0;it<b;++it){let lt=V+it*R;if(lt>=0&&lt<g)for(let st=0;st<T;++st){let H=G+st*w;if(H>=0&&H<x){let Y=A.locToIndex([U,lt,H,K],u,A.computeStrides(i.shape)),rt=A.locToIndex([it,st,K],f,A.computeStrides(r.shape)),ct=c[Y]+h[rt];ct>Z&&(Z=ct)}}}let nt=A.locToIndex([U,O,k,K],D,A.computeStrides(M));F[nt]=Z}}}return{dataId:l.write(A.toTypedArray(F,i.dtype),M,i.dtype),shape:M,dtype:i.dtype}}};var kv={kernelName:Yh,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{let{x:i,filter:r,dy:s}=n,{strides:o,pad:a,dilations:l}=e,c=t,u=A.toNestedArray(i.shape,c.data.get(i.dataId).values),h=A.toNestedArray(r.shape,c.data.get(r.dataId).values),{batchSize:f,inHeight:d,inWidth:g,inChannels:x,outHeight:m,outWidth:p,padInfo:v,strideHeight:_,strideWidth:y,filterHeight:S,filterWidth:b,dilationHeight:T,dilationWidth:R,outShape:w}=B.computeDilation2DInfo(i.shape,r.shape,o,a,"NHWC",l);A.assert(s.rank===w.length,()=>`Error in ${Yh}, dy must have the same rank as output ${w.length}, but got ${s.rank}`);let M=A.toNestedArray(w,c.data.get(s.dataId).values),C=A.makeZerosNestedTypedArray(r.shape,r.dtype);for(let F=0;F<f;++F)for(let L=0;L<m;++L){let U=L*_-v.top;for(let O=0;O<p;++O){let V=O*y-v.left;for(let k=0;k<x;++k){let G=Number.MIN_SAFE_INTEGER,K=0,Z=0;for(let nt=0;nt<S;++nt){let it=U+nt*T;if(it>=0&&it<d)for(let lt=0;lt<b;++lt){let st=V+lt*R;if(st>=0&&st<g){let H=u[F][it][st][k]+h[nt][lt][k];H>G&&(G=H,K=nt,Z=lt)}}}C[K][Z][k]+=M[F][L][O][k]}}}return{dataId:c.write(A.toTypedArray(C,i.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};var Lv={kernelName:Xh,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{let{x:i,filter:r,dy:s}=n,{strides:o,pad:a,dilations:l}=e,c=t,u=A.toNestedArray(i.shape,c.data.get(i.dataId).values),h=A.toNestedArray(r.shape,c.data.get(r.dataId).values),{batchSize:f,inHeight:d,inWidth:g,inChannels:x,outHeight:m,outWidth:p,padInfo:v,strideHeight:_,strideWidth:y,filterHeight:S,filterWidth:b,dilationHeight:T,dilationWidth:R,outShape:w}=B.computeDilation2DInfo(i.shape,r.shape,o,a,"NHWC",l);A.assert(s.rank===w.length,()=>`Error in ${Xh}, dy must have the same rank as output ${w.length}, but got ${s.rank}`);let M=A.toNestedArray(w,c.data.get(s.dataId).values),C=A.makeZerosNestedTypedArray(i.shape,i.dtype);for(let F=0;F<f;++F)for(let L=0;L<m;++L){let U=L*_-v.top;for(let O=0;O<p;++O){let V=O*y-v.left;for(let k=0;k<x;++k){let G=Number.MIN_SAFE_INTEGER,K=U<0?0:U,Z=V<0?0:V;for(let nt=0;nt<S;++nt){let it=U+nt*T;if(it>=0&&it<d)for(let lt=0;lt<b;++lt){let st=V+lt*R;if(st>=0&&st<g){let H=u[F][it][st][k]+h[nt][lt][k];H>G&&(G=H,K=it,Z=st)}}}C[F][K][Z][k]+=M[F][L][O][k]}}}return{dataId:c.write(A.toTypedArray(C,i.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}};function WN(n){let{inputs:t,backend:e,attrs:i}=n,{image:r}=t,{canvas:s,options:o}=i,{contextOptions:a,imageOptions:l}=o||{},c=l?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);let h=s.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);let[f,d]=r.shape.slice(0,2),g=r.shape.length===2?1:r.shape[2],x=e.data.get(r.dataId).values,m=r.dtype==="float32"?255:1,p=new Uint8ClampedArray(d*f*4);for(let _=0;_<f*d;++_){let y=[0,0,0,255*c];for(let b=0;b<g;b++){let T=x[_*g+b];if(r.dtype==="float32"){if(T<0||T>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${T}.`)}else if(r.dtype==="int32"&&(T<0||T>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${T}.`);g===1?(y[0]=T*m,y[1]=T*m,y[2]=T*m):y[b]=T*m}let S=_*4;p[S+0]=Math.round(y[0]),p[S+1]=Math.round(y[1]),p[S+2]=Math.round(y[2]),p[S+3]=Math.round(y[3])}s.width=d,s.height=f;let v=new ImageData(p,d,f);return h.putImageData(v,0,0),r}var Uv={kernelName:Mg,backendName:"cpu",kernelFunc:WN};function Hi(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,keepDims:o}=i;tt(r,"sum");let a;r.dtype==="bool"?a=Wn({inputs:{x:r},backend:e,attrs:{dtype:"int32"}}):a=Xe({inputs:{x:r},backend:e});let l=a.shape.length,c=A.parseAxisParam(s,a.shape),u=B.getAxesPermutation(c,l),h=c,f=a;u!=null&&(f=Me({inputs:{x:a},backend:e,attrs:{perm:u}}),h=B.getInnerMostAxes(h.length,l)),B.assertAxesAreInnerMostDims("sum",h,f.shape.length);let[d,g]=B.computeOutAndReduceShapes(f.shape,h),x=B.upcastType(f.dtype,"int32"),m=Zs(e,d,x),p=A.sizeFromShape(g),v=e.data.get(m.dataId).values,_=e.data.get(f.dataId).values;for(let y=0;y<v.length;++y){let S=y*p,b=0;for(let T=0;T<p;++T)b+=_[S+T];v[y]=b}if(o){let y=B.expandShapeToKeepDim(m.shape,c),S=m;m=te({inputs:{x:m},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(S)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(f),m}var Ov={kernelName:"Sum",backendName:"cpu",kernelFunc:Hi};function $N(n){let{inputs:t,backend:e,attrs:i}=n,{equation:r}=i,s=t,{allDims:o,summedDims:a,idDims:l}=B.decodeEinsumEquation(r,s.length);B.checkEinsumDimSizes(o.length,l,s);let{path:c,steps:u}=B.getEinsumComputePath(a,l),h=u.length,f=null,d=o.length,g=[];for(let x=0;x<h;++x){for(let m of u[x]){let{permutationIndices:p,expandDims:v}=B.getEinsumPermutation(d,l[m]),_;B.isIdentityPermutation(p)?_=s[m]:(_=Me({inputs:{x:s[m]},backend:e,attrs:{perm:p}}),g.push(_));let y=_.shape.slice();for(let S=0;S<v.length;++S)y.splice(v[S],0,1);A.arraysEqual(_.shape,y)||(_=te({inputs:{x:_},backend:e,attrs:{shape:y}}),g.push(_)),f===null?f=_:(f=qr({inputs:{a:_,b:f},backend:e}),g.push(f))}x<h-1&&(c[x]>=0&&(f=Hi({inputs:{x:f},backend:e,attrs:{axis:c[x]-(o.length-d),keepDims:!1}}),g.push(f)),d--)}for(let x of g)x!==f&&e.disposeIntermediateTensorInfo(x);return f}var Bv={kernelName:wg,backendName:"cpu",kernelFunc:$N};function qN(n){let{inputs:t,backend:e}=n,{dy:i,y:r}=t;tt([i,r],"eluGrad");let s=new Float32Array(A.sizeFromShape(r.shape)),o=e.data.get(r.dataId).values,a=e.data.get(i.dataId).values;for(let l=0;l<o.length;++l){let c=o[l];c>=0?s[l]=a[l]:s[l]=a[l]*(c+1)}return e.makeTensorInfo(r.shape,"float32",s)}var zv={kernelName:Tg,backendName:"cpu",kernelFunc:qN};var XN=B.ERF_P,YN=B.ERF_A1,KN=B.ERF_A2,ZN=B.ERF_A3,JN=B.ERF_A4,jN=B.ERF_A5,QN=kt("Erf",n=>{let t=Math.sign(n),e=Math.abs(n),i=1/(1+XN*e);return t*(1-((((jN*i+JN)*i+ZN)*i+KN)*i+YN)*i*Math.exp(-e*e))}),Hv={kernelName:"Erf",backendName:"cpu",kernelFunc:QN};function Qs(n){let{inputs:t,backend:e,attrs:i}=n,{input:r}=t,{dim:s}=i,o=r.shape.length,a=r.shape.slice(),l=s;return s<0&&(A.assert(-(o+1)<=s,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),l=o+s+1),a.splice(l,0,1),te({inputs:{x:r},backend:e,attrs:{shape:a}})}var Gv={kernelName:Eg,backendName:"cpu",kernelFunc:Qs};var tP=Qt((n,t)=>n/t),ma=se(qo,tP),ga={kernelName:qo,backendName:"cpu",kernelFunc:ma};function lu(n,t,e){let i=n.shape,r=i[0],s=i[1],o=e.data.get(n.dataId),a=o.complexTensorInfos.real,l=o.complexTensorInfos.imag,c=[r,s],u=A.sizeFromShape(c),h=A.getTypedArrayFromDType("float32",u),f=A.getTypedArrayFromDType("float32",u);for(let m=0;m<r;m++){let p=qn({inputs:{x:a},backend:e,attrs:{begin:[m,0],size:[1,s]}}),v=qn({inputs:{x:l},backend:e,attrs:{begin:[m,0],size:[1,s]}}),_=Le({inputs:{real:p,imag:v},backend:e}),{real:y,imag:S}=eP(_,t,e),b=B.mergeRealAndImagArrays(y,S);for(let T=0;T<s;T++){let R=B.getComplexWithIndex(b,T);h[m*s+T]=R.real,f[m*s+T]=R.imag}e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(v),e.disposeIntermediateTensorInfo(_)}let d=e.makeTensorInfo(c,"float32",h),g=e.makeTensorInfo(c,"float32",f),x=Le({inputs:{real:d,imag:g},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),x}function eP(n,t,e){let i=A.sizeFromShape(n.shape),r=e.data.get(n.dataId),s=e.data.get(r.complexTensorInfos.real.dataId).values,o=e.data.get(r.complexTensorInfos.imag.dataId).values;if(nP(i)){let a=Fd(s,o,i,t,e),l=[n.shape[0],n.shape[1]];if(t){let c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",A.createScalarValue(i,"float32")),f=Xe({inputs:{x:h},backend:e}),d=ga.kernelFunc({inputs:{a:c,b:h},backend:e}),g=ga.kernelFunc({inputs:{a:u,b:f},backend:e}),x=e.data.get(d.dataId).values,m=e.data.get(g.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),{real:x,imag:m}}return a}else{let a=B.mergeRealAndImagArrays(s,o),l=iP(a,i,t);return B.splitRealAndImagArrays(l)}}function nP(n){return(n&n-1)===0}function Fd(n,t,e,i,r){if(e===1)return{real:n,imag:t};let s=B.mergeRealAndImagArrays(n,t),o=e/2,a=B.complexWithEvenIndex(s),l=a.real,c=a.imag,u=[l.length],h=r.makeTensorInfo(u,"float32",l),f=r.makeTensorInfo(u,"float32",c),d=Le({inputs:{real:h,imag:f},backend:r}),g=B.complexWithOddIndex(s),x=g.real,m=g.imag,p=[x.length],v=r.makeTensorInfo(p,"float32",x),_=r.makeTensorInfo(p,"float32",m),y=Le({inputs:{real:v,imag:_},backend:r}),S=Fd(l,c,o,i,r),b=S.real,T=S.imag,R=[b.length],w=r.makeTensorInfo(R,"float32",b),M=r.makeTensorInfo(R,"float32",T),C=Le({inputs:{real:w,imag:M},backend:r}),D=Fd(x,m,o,i,r),F=D.real,L=D.imag,U=[F.length],O=r.makeTensorInfo(U,"float32",F),V=r.makeTensorInfo(U,"float32",L),k=Le({inputs:{real:O,imag:V},backend:r}),G=B.exponents(e,i),K=[G.real.length],Z=r.makeTensorInfo(K,"float32",G.real),nt=r.makeTensorInfo(K,"float32",G.imag),it=Le({inputs:{real:Z,imag:nt},backend:r}),lt=qr({inputs:{a:it,b:k},backend:r}),st=xi({inputs:{a:C,b:lt},backend:r}),H=da({inputs:{a:C,b:lt},backend:r}),Y=Gn({inputs:{input:st},backend:r}),rt=Gn({inputs:{input:H},backend:r}),ct=yi({inputs:{input:st},backend:r}),ut=yi({inputs:{input:H},backend:r}),St=hr({inputs:[Y,rt],backend:r,attrs:{axis:0}}),Zt=hr({inputs:[ct,ut],backend:r,attrs:{axis:0}}),P=r.data.get(St.dataId).values,Xt=r.data.get(Zt.dataId).values;return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(v),r.disposeIntermediateTensorInfo(_),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(M),r.disposeIntermediateTensorInfo(C),r.disposeIntermediateTensorInfo(O),r.disposeIntermediateTensorInfo(V),r.disposeIntermediateTensorInfo(k),r.disposeIntermediateTensorInfo(Z),r.disposeIntermediateTensorInfo(nt),r.disposeIntermediateTensorInfo(it),r.disposeIntermediateTensorInfo(lt),r.disposeIntermediateTensorInfo(st),r.disposeIntermediateTensorInfo(H),r.disposeIntermediateTensorInfo(Y),r.disposeIntermediateTensorInfo(ct),r.disposeIntermediateTensorInfo(rt),r.disposeIntermediateTensorInfo(ut),r.disposeIntermediateTensorInfo(St),r.disposeIntermediateTensorInfo(Zt),{real:P,imag:Xt}}function iP(n,t,e){let i=new Float32Array(t*2);for(let r=0;r<t;r++){let s=0,o=0;for(let a=0;a<t;a++){let l=B.exponent(r*a,t,e),c=B.getComplexWithIndex(n,a);s+=c.real*l.real-c.imag*l.imag,o+=c.real*l.imag+c.imag*l.real}e&&(s/=t,o/=t),B.assignToTypedArray(i,s,o,r)}return i}function sP(n){let{inputs:t,backend:e}=n,{input:i}=t,r=A.sizeFromShape(i.shape),s=i.shape[i.shape.length-1],o=r/s,a=te({inputs:{x:i},backend:e,attrs:{shape:[o,s]}}),l=lu(a,!1,e),c=te({inputs:{x:l},backend:e,attrs:{shape:i.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}var Wv={kernelName:"FFT",backendName:"cpu",kernelFunc:sP};function xa(n){let{backend:t,attrs:e}=n,{shape:i,value:r,dtype:s}=e,o=s||A.inferDtype(r),a=A.getArrayFromDType(o,A.sizeFromShape(i));return oP(a,r,o),t.makeTensorInfo(i,o,a)}var $v={kernelName:bc,backendName:"cpu",kernelFunc:xa};function oP(n,t,e){n.fill(t)}var qv={kernelName:Ag,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{let{image:i}=n,r=e,s=A.getTypedArrayFromDType(i.dtype,A.sizeFromShape(i.shape)),[o,a,l,c]=i.shape,u=r.data.get(i.dataId).values;for(let f=0;f<o;f++){let d=f*l*a*c;for(let g=0;g<a;g++){let x=g*(l*c);for(let m=0;m<l;m++){let p=m*c;for(let v=0;v<c;v++){let _=Math.round(l-m-1),y=d+x+p+v,S=u[y];if(_>=0&&_<l){let b=_*c,T=d+x+b+v;S=u[T]}s[y]=S}}}}return{dataId:r.write(s,i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}};function aP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,filter:s,bias:o,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:f,activation:d,leakyreluAlpha:g}=i,x=Pd({inputs:{x:r,filter:s},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:f}});if(o){let m=x;if(u==="NCHW"&&o.shape.length===1&&o.shape[0]!==1){let p=te({inputs:{x:o},backend:e,attrs:{shape:[o.shape[0],1,1]}});x=xi({inputs:{a:x,b:p},backend:e}),e.disposeIntermediateTensorInfo(p)}else x=xi({inputs:{a:x,b:o},backend:e});e.disposeIntermediateTensorInfo(m)}if(d){let m=x;if(u==="NCHW"&&d==="prelu"&&a.shape.length===1&&a.shape[0]!==1){let p=te({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});x=Xr(e,x,d,p,g),e.disposeIntermediateTensorInfo(p)}else x=Xr(e,x,d,a,g);e.disposeIntermediateTensorInfo(m)}return x}var Xv={kernelName:Px,backendName:"cpu",kernelFunc:aP};function lP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,filter:s,bias:o,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:f,activation:d,leakyreluAlpha:g}=i,x=Dd({inputs:{x:r,filter:s},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:f}});if(o){let m=x;x=xi({inputs:{a:x,b:o},backend:e}),e.disposeIntermediateTensorInfo(m)}if(d){let m=x;x=Xr(e,x,d,a,g),e.disposeIntermediateTensorInfo(m)}return x}var Yv={kernelName:Dx,backendName:"cpu",kernelFunc:lP};function cP(n){let{inputs:t,backend:e}=n,{params:i,indices:r}=t,s=A.sizeFromShape(i.shape),o=r.shape,a=o[o.length-1],[l,c,u,h]=B.prepareAndValidate(i,r);if(c===0)return e.makeTensorInfo(l,i.dtype,[]);let f=e.data.get(r.dataId).values,d=e.bufferSync(i),g=Ky(f,d,i.dtype,c,a,u,h,i.shape,s);return e.makeTensorInfo(l,i.dtype,g.values)}var Kv={kernelName:Rg,backendName:"cpu",kernelFunc:cP};function uP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,indices:s}=t,{axis:o,batchDims:a}=i;tt([r,s],"gatherV2");let l=A.parseAxisParam(o,r.shape)[0],c=e.data.get(s.dataId).values,u=r.shape[l];for(let y=0;y<c.length;++y){let S=c[y];A.assert(S<=u-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);let f=A.sizeFromShape(s.shape),d=B.segment_util.collectGatherOpShapeInfo(r,s,l,h),g=te({inputs:{x:r},backend:e,attrs:{shape:[d.batchSize,d.outerSize,d.dimSize,d.sliceSize]}}),x=te({inputs:{x:s},backend:e,attrs:{shape:[d.batchSize,f/d.batchSize]}}),m=[d.batchSize,d.outerSize,f/d.batchSize,d.sliceSize],p=e.bufferSync(x),v=e.bufferSync(g),_=Zy(v,p,m);return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),e.makeTensorInfo(d.outputShape,_.dtype,_.values)}var Zv={kernelName:Cg,backendName:"cpu",kernelFunc:uP};function hP(n){let{inputs:t,backend:e}=n,{input:i}=t,r=A.sizeFromShape(i.shape),s=i.shape[i.shape.length-1],o=r/s,a=te({inputs:{x:i},backend:e,attrs:{shape:[o,s]}}),l=lu(a,!0,e),c=te({inputs:{x:l},backend:e,attrs:{shape:i.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}var Jv={kernelName:Ng,backendName:"cpu",kernelFunc:hP};var fP=kt(tf,n=>Number.isFinite(n)?1:0,"bool"),jv={kernelName:tf,backendName:"cpu",kernelFunc:fP};var dP=kt(ef,n=>Math.abs(n)===1/0?1:0,"bool"),Qv={kernelName:ef,backendName:"cpu",kernelFunc:dP};var pP=kt(nf,n=>Number.isNaN(n)?1:0,"bool"),tS={kernelName:nf,backendName:"cpu",kernelFunc:pP};function mP(n){let{backend:t,attrs:e}=n,{start:i,stop:r,num:s}=e,o=e_(i,r,s);return t.makeTensorInfo([o.length],"float32",o)}var eS={kernelName:Dg,backendName:"cpu",kernelFunc:mP};var gP=kt(of,n=>Math.log1p(n)),nS={kernelName:of,backendName:"cpu",kernelFunc:gP};var xP=Qt((n,t)=>n&&t),yP=se(af,xP,null,"bool"),iS={kernelName:af,backendName:"cpu",kernelFunc:yP};var _P=kt(lf,n=>n?0:1,"bool"),rS={kernelName:lf,backendName:"cpu",kernelFunc:_P};var vP=Qt((n,t)=>n||t),SP=se(cf,vP,null,"bool"),sS={kernelName:cf,backendName:"cpu",kernelFunc:SP};function MP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{depthRadius:s,bias:o,alpha:a,beta:l}=i;tt(r,"LRN");let c=r.shape[3],u=c-1,h=e.data.get(r.dataId).values,f=A.sizeFromShape(r.shape),d=new Float32Array(f);function g(x){let m=x%c,p=x-m+Math.max(0,m-s),v=x-m+Math.min(m+s,u),_=0;for(;p<=v;p++){let y=h[p];_+=y*y}return _}for(let x=0;x<f;x++){let m=g(x),p=h[x]*Math.pow(o+a*m,-l);d[x]=p}return e.makeTensorInfo(r.shape,r.dtype,d)}var oS={kernelName:"LRN",backendName:"cpu",kernelFunc:MP};function wP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,y:s,dy:o}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=i;tt(o,"LRNGrad");let h=A.sizeFromShape(o.shape),f=o.shape[3],d=e.data.get(o.dataId).values,g=e.data.get(r.dataId).values,x=e.data.get(s.dataId).values,m=new Float32Array(h),p=h;for(let v=0;v<p;v++){let _=v%f,y=v-_+Math.max(0,_-a),S=v-_+Math.min(f,_+a+1),b=0;for(let T=y;T<S;T++)b+=Math.pow(g[T],2);b=c*b+l;for(let T=y;T<S;T++){let R=-2*c*u*g[T]*x[v]/b;v===T&&(R+=Math.pow(b,-u)),R*=d[v],m[T]+=R}}return e.makeTensorInfo(o.shape,r.dtype,m)}var aS={kernelName:Fg,backendName:"cpu",kernelFunc:wP};function kd(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{reductionIndices:s,keepDims:o}=i,a=e,l=r.shape,c=l.length,u=A.parseAxisParam(s,l),h=u,f=B.getAxesPermutation(h,c),d=a.data.get(r.dataId).values;if(f!=null){let y=new Array(c);for(let S=0;S<y.length;S++)y[S]=l[f[S]];d=ru(d,l,r.dtype,f,y),h=B.getInnerMostAxes(h.length,c),l=y}tt(r,"max"),B.assertAxesAreInnerMostDims("max",h,c);let[g,x]=B.computeOutAndReduceShapes(l,h),m=A.sizeFromShape(x),p=r_(d,m,g,r.dtype),v=a.write(p,g,r.dtype),_=g;return o&&(_=B.expandShapeToKeepDim(g,u)),{dataId:v,shape:_,dtype:r.dtype}}var lS={kernelName:"Max",backendName:"cpu",kernelFunc:kd};function EP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t;tt(r,"maxPool");let{filterSize:s,strides:o,pad:a,dimRoundingMode:l}=i,c=1;A.assert(B.eitherStridesOrDilationsAreOne(o,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);let u=B.computePool2DInfo(r.shape,s,o,c,a,l),h;if(u.filterWidth===1&&u.filterHeight===1&&A.arraysEqual(u.inShape,u.outShape))h=Xe({inputs:{x:r},backend:e});else{let f=e.data.get(r.dataId).values,d=A.computeStrides(r.shape),g=js(f,r.shape,r.dtype,d,u,"max");h=e.makeTensorInfo(u.outShape,r.dtype,g.values)}return h}var cS={kernelName:kg,backendName:"cpu",kernelFunc:EP};function AP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{filterSize:s,strides:o,pad:a,dimRoundingMode:l,dataFormat:c}=i;tt(r,"maxPool3d");let u=B.computePool3DInfo(r.shape,s,o,1,a,l,c),h=e.data.get(r.dataId).values,f=au(h,r.shape,r.dtype,A.computeStrides(r.shape),u,"max");return e.makeTensorInfo(f.shape,"float32",f.values)}var uS={kernelName:Ug,backendName:"cpu",kernelFunc:AP};function IP(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,input:s}=t,{filterSize:o,strides:a,pad:l,dimRoundingMode:c}=i;tt([r,s],"maxPool3DGrad");let u=B.computePool3DInfo(s.shape,o,a,1,l,c),h=e.bufferSync(s),f=iv(h,u),d=u.strideDepth,g=u.strideHeight,x=u.strideWidth,m=u.dilationDepth,p=u.dilationHeight,v=u.dilationWidth,_=u.effectiveFilterDepth,y=u.effectiveFilterHeight,S=u.effectiveFilterWidth,b=_-1-u.padInfo.front,T=S-1-u.padInfo.left,R=y-1-u.padInfo.top,w=Ht(s.shape,"float32"),M=e.bufferSync(r);for(let C=0;C<u.batchSize;++C)for(let D=0;D<u.inChannels;++D)for(let F=0;F<u.inDepth;++F)for(let L=0;L<u.inHeight;++L)for(let U=0;U<u.inWidth;++U){let O=F-b,V=L-R,k=U-T,G=0;for(let K=0;K<_;K+=m){let Z=(O+K)/d;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let nt=0;nt<y;nt+=p){let it=(V+nt)/g;if(!(it<0||it>=u.outHeight||Math.floor(it)!==it))for(let lt=0;lt<S;lt+=v){let st=(k+lt)/x;if(st<0||st>=u.outWidth||Math.floor(st)!==st)continue;let H=_*y*S-1-f.get(C,Z,it,st,D),Y=K*y*S+nt*S+lt,rt=H===Y?1:0;if(rt===0)continue;let ct=M.get(C,Z,it,st,D);G+=ct*rt}}}w.set(G,C,F,L,U,D)}return e.makeTensorInfo(w.shape,w.dtype,w.values)}var hS={kernelName:Og,backendName:"cpu",kernelFunc:IP};function CP(n){let{inputs:t,backend:e,attrs:i}=n,{dy:r,input:s,output:o}=t,a=s;tt([s,o],"maxPoolGrad");let{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=i,f=B.computePool2DInfo(a.shape,l,c,1,u,h),d=e.data.get(a.dataId).values,g=Ht(f.outShape,a.dtype,ou(d,a.shape,a.dtype,f).values),x=f.strideHeight,m=f.strideWidth,p=f.dilationHeight,v=f.dilationWidth,_=f.effectiveFilterHeight,y=f.effectiveFilterWidth,S=y-1-f.padInfo.left,b=_-1-f.padInfo.top,T=Ht(a.shape,"float32"),R=e.data.get(r.dataId).values,w=Ht(r.shape,"float32",R);for(let M=0;M<f.batchSize;++M)for(let C=0;C<f.inChannels;++C)for(let D=0;D<f.inHeight;++D)for(let F=0;F<f.inWidth;++F){let L=D-b,U=F-S,O=0;for(let V=0;V<_;V+=p){let k=(L+V)/x;if(!(k<0||k>=f.outHeight||Math.floor(k)!==k))for(let G=0;G<y;G+=v){let K=(U+G)/m;if(K<0||K>=f.outWidth||Math.floor(K)!==K)continue;let Z=_*y-1-g.get(M,k,K,C),nt=V*y+G,it=Z===nt?1:0;if(it===0)continue;let lt=w.get(M,k,K,C);O+=lt*it}}T.set(O,M,D,F,C)}return e.makeTensorInfo(T.shape,T.dtype,T.values)}var fS={kernelName:Lg,backendName:"cpu",kernelFunc:CP};function dS(n,t,e,i,r){let s=A.computeStrides(t),o=js(n,t,e,s,r,"max"),a=ou(n,t,e,r,!0,i);return[o.values,a.values]}var pS={kernelName:Bg,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{let{x:i}=n,{filterSize:r,strides:s,pad:o,includeBatchInIndex:a}=t,l=e;tt(i,"MaxPoolWithArgmax");let c=l.data.get(i.dataId).values,u=B.computePool2DInfo(i.shape,r,s,[1,1],o),[h,f]=dS(c,i.shape,i.dtype,a,u),d=l.write(h,u.outShape,i.dtype),g=l.write(f,u.outShape,i.dtype);return[{dataId:d,shape:u.outShape,dtype:i.dtype},{dataId:g,shape:u.outShape,dtype:"int32"}]}};function RP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,keepDims:o}=i,a=A.parseAxisParam(s,r.shape),c=B.computeOutAndReduceShapes(r.shape,a)[1],u=A.sizeFromShape(c),h=[],f=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(f);let d=Wn({inputs:{x:r},backend:e,attrs:{dtype:"float32"}});h.push(d);let g=ma({inputs:{a:d,b:f},backend:e});h.push(g);let x=Hi({inputs:{x:g},backend:e,attrs:{axis:s,keepDims:o}});return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),x}var mS={kernelName:zg,backendName:"cpu",kernelFunc:RP};function PP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{axis:s,keepDims:o}=i;tt(r,"min");let a=A.parseAxisParam(s,r.shape),l=a,c=B.getAxesPermutation(l,r.shape.length),u=r;c!=null&&(u=Me({inputs:{x:r},backend:e,attrs:{perm:c}}),l=B.getInnerMostAxes(l.length,r.shape.length)),B.assertAxesAreInnerMostDims("min",l,u.shape.length);let[h,f]=B.computeOutAndReduceShapes(u.shape,l),d=A.sizeFromShape(f),g=A.makeZerosTypedArray(A.sizeFromShape(h),u.dtype),x=e.data.get(u.dataId).values;for(let p=0;p<g.length;++p){let v=p*d,_=x[v];for(let y=0;y<d;++y){let S=x[v+y];(Number.isNaN(S)||S<_)&&(_=S)}g[p]=_}c!=null&&e.disposeIntermediateTensorInfo(u);let m=e.makeTensorInfo(h,u.dtype,g);if(o){let p=B.expandShapeToKeepDim(h,a),v=te({inputs:{x:m},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(m),v}return m}var gS={kernelName:"Min",backendName:"cpu",kernelFunc:PP};function DP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{paddings:s,mode:o}=i;tt(r,"mirrorPad");let a=s.map((_,y)=>_[0]+r.shape[y]+_[1]),l=s.map(_=>_[0]),c=s.map((_,y)=>_[0]+r.shape[y]),u=o==="reflect"?0:1,h=e.data.get(r.dataId).values,f=r.shape.length,d=A.computeStrides(r.shape),g=A.sizeFromShape(a),x=a.length,m=A.computeStrides(a),p=A.getTypedArrayFromDType(r.dtype,g);for(let _=0;_<g;_++){let y=A.indexToLoc(_,x,m);for(let b=0;b<x;b++)y[b]<l[b]?y[b]=l[b]*2-y[b]-u:y[b]>=c[b]&&(y[b]=(c[b]-1)*2-y[b]+u);y=y.map((b,T)=>b-l[T]);let S=A.locToIndex(y,f,d);p[_]=h[S]}return{dataId:e.write(p,a,r.dtype),shape:a,dtype:r.dtype}}var xS={kernelName:Vg,backendName:"cpu",kernelFunc:DP};var FP=Qt(((n,t)=>{let e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),kP=se("Mod",FP),_S={kernelName:"Mod",backendName:"cpu",kernelFunc:kP};var SS=qd(ry());function Ld(n){let{inputs:t,backend:e,attrs:i}=n,{logits:r}=t,{dim:s}=i,o=r.shape.length,a=s;if(a===-1&&(a=o-1),a!==o-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${o} and dim was ${a}`);let l=A.parseAxisParam([a],r.shape),c=kd({inputs:{x:r},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=B.expandShapeToKeepDim(c.shape,l),h=te({inputs:{x:c},backend:e,attrs:{shape:u}}),f=da({inputs:{a:r,b:h},backend:e}),d=Sd({inputs:{x:f},backend:e}),g=Hi({inputs:{x:d},backend:e,attrs:{axis:l,keepDims:!1}}),x=te({inputs:{x:g},backend:e,attrs:{shape:u}}),m=ma({inputs:{a:d,b:x},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),m}var vS={kernelName:Ec,backendName:"cpu",kernelFunc:Ld};function LP(n){let{inputs:t,backend:e,attrs:i}=n,{logits:r}=t,{numSamples:s,seed:o,normalized:a}=i;tt(r,"multinomial");let l=a?r:Ld({inputs:{logits:r},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,f=[c,s],d=A.makeZerosTypedArray(A.sizeFromShape(f),"int32");for(let g=0;g<c;++g){let x=g*u,m=new Float32Array(u-1);m[0]=h[x];for(let _=1;_<m.length;++_)m[_]=m[_-1]+h[x+_];let p=SS.alea(o.toString()),v=g*s;for(let _=0;_<s;++_){let y=p();d[v+_]=m.length;for(let S=0;S<m.length;S++)if(y<m[S]){d[v+_]=S;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(f,"int32",d)}var bS={kernelName:Hg,backendName:"cpu",kernelFunc:LP};var UP=gi.nonMaxSuppressionV3Impl;function OP(n){let{inputs:t,backend:e,attrs:i}=n,{boxes:r,scores:s}=t,{maxOutputSize:o,iouThreshold:a,scoreThreshold:l}=i;tt(r,"NonMaxSuppression");let c=e.data.get(r.dataId).values,u=e.data.get(s.dataId).values,{selectedIndices:h}=UP(c,u,o,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}var MS={kernelName:Gg,backendName:"cpu",kernelFunc:OP};var BP=gi.nonMaxSuppressionV4Impl;function zP(n){let{inputs:t,backend:e,attrs:i}=n,{boxes:r,scores:s}=t,{maxOutputSize:o,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=i;tt(r,"NonMaxSuppressionPadded");let u=e.data.get(r.dataId).values,h=e.data.get(s.dataId).values,{selectedIndices:f,validOutputs:d}=BP(u,h,o,a,l,c);return[e.makeTensorInfo([f.length],"int32",new Int32Array(f)),e.makeTensorInfo([],"int32",new Int32Array([d]))]}var wS={kernelName:Wg,backendName:"cpu",kernelFunc:zP};var VP=gi.nonMaxSuppressionV5Impl;function HP(n){let{inputs:t,backend:e,attrs:i}=n,{boxes:r,scores:s}=t,{maxOutputSize:o,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=i;tt(r,"NonMaxSuppressionWithScore");let u=e.data.get(r.dataId).values,h=e.data.get(s.dataId).values,f=o,d=a,g=l,x=c,{selectedIndices:m,selectedScores:p}=VP(u,h,f,d,g,x);return[e.makeTensorInfo([m.length],"int32",new Int32Array(m)),e.makeTensorInfo([p.length],"float32",new Float32Array(p))]}var TS={kernelName:$g,backendName:"cpu",kernelFunc:HP};function GP(n){let{inputs:t,backend:e,attrs:i}=n,{indices:r}=t,{dtype:s,depth:o,onValue:a,offValue:l}=i;tt(r,"oneHot");let c=A.sizeFromShape(r.shape),u=new Float32Array(c*o);u.fill(l);let h=e.data.get(r.dataId).values;for(let f=0;f<c;++f)h[f]>=0&&h[f]<o&&(u[f*o+h[f]]=a);return e.makeTensorInfo([...r.shape,o],s,u)}var ES={kernelName:Xg,backendName:"cpu",kernelFunc:GP};function ya(n){let{inputs:t,backend:e}=n,{x:i}=t;if(i.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(i.dtype==="complex64"){let r=Gn({inputs:{input:i},backend:e}),s=ya({inputs:{x:r},backend:e}),o=yi({inputs:{input:i},backend:e}),a=ya({inputs:{x:o},backend:e}),l=Le({inputs:{real:s,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(a),l}else return xa({backend:e,attrs:{shape:i.shape,value:0,dtype:i.dtype}})}var AS={kernelName:Ic,backendName:"cpu",kernelFunc:ya};function IS(n){let{inputs:t,backend:e}=n,{x:i}=t;if(i.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(i.dtype==="complex64"){let r=Gn({inputs:{input:i},backend:e}),s=IS({inputs:{x:r},backend:e}),o=yi({inputs:{input:i},backend:e}),a=ya({inputs:{x:o},backend:e}),l=Le({inputs:{real:s,imag:a},backend:e});return e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(a),l}else return xa({backend:e,attrs:{shape:i.shape,value:1,dtype:i.dtype}})}var CS={kernelName:qg,backendName:"cpu",kernelFunc:IS};function Ud(n){let{inputs:t,backend:e,attrs:i}=n,{axis:r}=i;if(t.length===1)return Qs({inputs:{input:t[0]},backend:e,attrs:{dim:r}});let s=t[0].shape,o=t[0].dtype;t.forEach(u=>{A.assertShapesMatch(s,u.shape,"All tensors passed to stack must have matching shapes"),A.assert(o===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=t.map(u=>{let h=Qs({inputs:{input:u},backend:e,attrs:{dim:r}});return a.push(h),h}),c=hr({inputs:l,backend:e,attrs:{axis:r}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}var RS={kernelName:Yg,backendName:"cpu",kernelFunc:Ud};function WP(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{paddings:s,constantValue:o}=i;tt(r,"pad");let a=s.map((v,_)=>v[0]+r.shape[_]+v[1]),l=s.map(v=>v[0]),c=e.data.get(r.dataId).values,u=A.sizeFromShape(r.shape),h=r.shape.length,f=A.computeStrides(r.shape),d=A.sizeFromShape(a),g=a.length,x=A.computeStrides(a),m=A.getTypedArrayFromDType(r.dtype,d);o!==0&&m.fill(o);for(let v=0;v<u;v++){let y=A.indexToLoc(v,h,f).map((b,T)=>b+l[T]),S=A.locToIndex(y,g,x);m[S]=c[v]}return{dataId:e.write(m,a,r.dtype),shape:a,dtype:r.dtype}}var cu={kernelName:Kg,backendName:"cpu",kernelFunc:WP};var $P=Qt((n,t)=>Math.pow(n,t)),qP=se("Pow",$P),NS={kernelName:"Pow",backendName:"cpu",kernelFunc:qP};function XP(n){let{inputs:t,backend:e,attrs:i}=n,{paramsNestedSplits:r,paramsDenseValues:s,indices:o}=t,{outputRaggedRank:a}=i,l=r.map(p=>e.data.get(p.dataId).values),c=r.map(p=>p.shape),u=e.data.get(s.dataId).values,h=e.data.get(o.dataId).values,[f,d,g]=d_(l,c,u,s.shape,s.dtype,h,o.shape,a),x=f.map(p=>e.makeTensorInfo([p.length],"int32",p)),m=e.makeTensorInfo(g,s.dtype,d);return x.concat([m])}var PS={kernelName:Jg,backendName:"cpu",kernelFunc:XP};function YP(n){let{inputs:t,backend:e}=n,{starts:i,limits:r,deltas:s}=t,o=e.data.get(i.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(s.dataId).values,[c,u]=m_(o,i.shape,i.dtype,a,r.shape,l,s.shape),h=e.makeTensorInfo([c.length],"int32",c),f=e.makeTensorInfo([u.length],i.dtype,u);return[h,f]}var DS={kernelName:jg,backendName:"cpu",kernelFunc:YP};function KP(n){let{inputs:t,backend:e,attrs:i}=n,{shape:r,values:s,defaultValue:o,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=i,c=e.data.get(r.dataId).values,u=e.data.get(s.dataId).values,h=e.data.get(o.dataId).values,f=a.map(m=>e.data.get(m.dataId).values),d=a.map(m=>m.shape),[g,x]=y_(c,r.shape,u,s.shape,s.dtype,h,o.shape,f,d,l);return e.makeTensorInfo(g,s.dtype,x)}var FS={kernelName:Qg,backendName:"cpu",kernelFunc:KP};function ZP(n){let{backend:t,attrs:e}=n,{start:i,stop:r,dtype:s,step:o}=e,a=__(i,r,o,s);return t.makeTensorInfo([a.length],s,a)}var kS={kernelName:tx,backendName:"cpu",kernelFunc:ZP};var JP=kt(ff,n=>1/n),LS={kernelName:ff,backendName:"cpu",kernelFunc:JP};function jP(n){let{inputs:t,backend:e,attrs:i}=n,{images:r}=t,{alignCorners:s,halfPixelCenters:o,size:a}=i;tt(r,"resizeBilinear");let l=A.computeStrides(r.shape),[c,u]=a,[h,f,d,g]=r.shape,x=e.data.get(r.dataId).values,m=new Float32Array(A.sizeFromShape([h,c,u,g])),p=[s&&c>1?f-1:f,s&&u>1?d-1:d],v=[s&&c>1?c-1:c,s&&u>1?u-1:u],_=0,y=p[0]/v[0],S=p[1]/v[1];for(let b=0;b<h;b++)for(let T=0;T<c;T++){let R;o?R=y*(T+.5)-.5:R=y*T;let w=Math.max(0,Math.floor(R)),M=R-w,C=Math.min(f-1,Math.ceil(R)),D=b*l[0]+w*l[1],F=b*l[0]+C*l[1];for(let L=0;L<u;L++){let U;o?U=S*(L+.5)-.5:U=S*L;let O=Math.max(0,Math.floor(U)),V=U-O,k=Math.min(d-1,Math.ceil(U)),G=D+O*l[2],K=F+O*l[2],Z=D+k*l[2],nt=F+k*l[2];for(let it=0;it<g;it++){let lt=x[G+it],st=x[K+it],H=x[Z+it],Y=x[nt+it],rt=lt+(H-lt)*V,ct=st+(Y-st)*V,ut=rt+(ct-rt)*M;m[_++]=ut}}}return e.makeTensorInfo([h,c,u,g],"float32",m)}var US={kernelName:rx,backendName:"cpu",kernelFunc:jP};function QP(n){let{inputs:t,backend:e,attrs:i}=n,{images:r,dy:s}=t,{alignCorners:o}=i;tt([s,r],"resizeBilinearGrad");let a=A.computeStrides(r.shape),[l,c,u,h]=r.shape,[,f,d]=s.shape,g=new Float32Array(l*c*u*h),x=[o&&f>1?c-1:c,o&&d>1?u-1:u],m=[o&&f>1?f-1:f,o&&d>1?d-1:d],p=x[0]/m[0],v=x[1]/m[1],_=e.data.get(s.dataId).values,y=0;for(let S=0;S<l;S++){let b=S*a[0];for(let T=0;T<f;T++){let R=T*p,w=Math.floor(R),M=Math.min(Math.ceil(R),c-1),C=b+w*a[1],D=b+M*a[1],F=R-w,L=1-F;for(let U=0;U<d;U++){let O=U*v,V=Math.floor(O),k=Math.min(Math.ceil(O),u-1),G=O-V,K=1-G,Z=C+V*a[2],nt=C+k*a[2],it=D+V*a[2],lt=D+k*a[2],st=L*K,H=L*G,Y=F*K,rt=F*G;for(let ct=0;ct<h;ct++){let ut=_[y++];g[Z+ct]+=ut*st,g[nt+ct]+=ut*H,g[it+ct]+=ut*Y,g[lt+ct]+=ut*rt}}}}return e.makeTensorInfo([l,u,c,h],"float32",g)}var OS={kernelName:sx,backendName:"cpu",kernelFunc:QP};function tD(n){let{inputs:t,backend:e,attrs:i}=n,{images:r}=t,{alignCorners:s,halfPixelCenters:o,size:a}=i;tt(r,"resizeNearestNeighbor");let l=A.computeStrides(r.shape),[c,u]=a,[h,f,d,g]=r.shape,x=e.data.get(r.dataId).values,m=new Float32Array(h*c*u*g),p=[s&&c>1?f-1:f,s&&u>1?d-1:d],v=[s&&c>1?c-1:c,s&&u>1?u-1:u],_=p[0]/v[0],y=p[1]/v[1],S=0;for(let b=0;b<h;b++){let T=b*l[0];for(let R=0;R<c;R++){let w=o?_*(R+.5):_*R,M=Math.min(f-1,s?Math.round(w):Math.floor(w));o&&(M=Math.max(0,M));let C=T+M*l[1];for(let D=0;D<u;D++){let F=o?y*(D+.5):y*D,L=Math.min(d-1,s?Math.round(F):Math.floor(F));o&&(L=Math.max(0,L));let U=C+L*l[2];for(let O=0;O<g;O++){let V=x[U+O];m[S++]=V}}}}return e.makeTensorInfo([h,c,u,g],r.dtype,m)}var BS={kernelName:nx,backendName:"cpu",kernelFunc:tD};function eD(n){let{inputs:t,backend:e,attrs:i}=n,{images:r,dy:s}=t,{alignCorners:o}=i;tt([s,r],"resizeNearestNeighborGrad");let a=A.computeStrides(r.shape),l=A.computeStrides(s.shape),[c,u,h,f]=r.shape,[,d,g]=s.shape,x=new Float32Array(c*u*h*f),m=e.data.get(s.dataId).values,p=[o&&d>1?u-1:u,o&&g>1?h-1:h],v=[o&&d>1?d-1:d,o&&g>1?g-1:g],_=p[0]/v[0],y=p[1]/v[1],S=1/_,b=1/y,T=Math.ceil(S)*2+2,R=Math.ceil(b)*2+2;for(let w=0;w<c;w++){let M=w*a[0];for(let C=0;C<u;C++){let D=M+C*a[1],F=Math.floor(C*S),L=Math.floor(F-T/2);for(let U=0;U<h;U++){let O=D+U*a[2],V=Math.floor(U*b),k=Math.floor(V-R/2);for(let G=0;G<f;G++){let K=0;for(let Z=0;Z<T;Z++){let nt=Z+L;if(nt<0||nt>=d)continue;let it=M+nt*l[1],lt=nt*_,st=Math.min(u-1,o?Math.round(lt):Math.floor(lt));if(C===st)for(let H=0;H<R;H++){let Y=H+k;if(Y<0||Y>=g)continue;let rt=it+Y*l[2],ct=Y*y,ut=Math.min(h-1,o?Math.round(ct):Math.floor(ct));U===ut&&(K+=m[rt+G])}}x[O+G]=K}}}}return e.makeTensorInfo(r.shape,r.dtype,x)}var zS={kernelName:ix,backendName:"cpu",kernelFunc:eD};function nD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{dims:s}=i;tt(r,"reverse");let o=r.shape.length,a=A.parseAxisParam(s,r.shape);if(o===0)return Xe({inputs:{x:r},backend:e});let l=new he(r.shape,r.dtype),c=e.bufferSync(r);for(let u=0;u<l.size;u++){let h=l.indexToLoc(u),f=h.slice();a.forEach(d=>f[d]=r.shape[d]-1-f[d]),l.set(c.get(...f),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}var VS={kernelName:ox,backendName:"cpu",kernelFunc:nD};var HS={kernelName:Rx,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{let{image:i}=n,{radians:r,fillValue:s,center:o}=t,a=e,l=A.getTypedArrayFromDType(i.dtype,A.sizeFromShape(i.shape)),[c,u,h,f]=i.shape,[d,g]=B.getImageCenter(o,u,h),x=255,m=Math.sin(r),p=Math.cos(r),v=a.data.get(i.dataId).values;for(let y=0;y<c;y++){let S=y*h*u*f;for(let b=0;b<u;b++){let T=b*(h*f);for(let R=0;R<h;R++){let w=R*f;for(let M=0;M<f;M++){let C=[c,b,R,M],D=C[2],F=C[1],L=(D-d)*p-(F-g)*m,U=(D-d)*m+(F-g)*p;L=Math.round(L+d),U=Math.round(U+g);let O=s;if(typeof s!="number"&&(M===3?O=x:O=s[M]),L>=0&&L<h&&U>=0&&U<u){let k=U*(h*f),G=L*f,K=S+k+G+M;O=v[K]}let V=S+T+w+M;l[V]=O}}}}return{dataId:a.write(l,i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}};var iD=kt(df,n=>{let t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),GS={kernelName:df,backendName:"cpu",kernelFunc:iD};function rD(n){let{inputs:t,backend:e,attrs:i}=n,{indices:r,updates:s}=t,{shape:o}=i,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=B.calculateShapes(s,r,o),f=!0,d=e.bufferSync(r),g=e.bufferSync(s),x=Vi(d,g,o,h,c,l,a,u,0,f);return e.makeTensorInfo(o,x.dtype,x.values)}var WS={kernelName:ax,backendName:"cpu",kernelFunc:rD};function sD(n,t){let e=0,i=n.length,r=0;for(;e<i;)r=Math.floor((e+i)/2),n[r]<t?e=r+1:i=r;return i}function oD(n,t){let e=0,i=n.length,r=0;for(;e<i;)r=Math.floor((e+i)/2),n[r]<=t?e=r+1:i=r;return i}function $S(n,t,e,i,r,s){let o=A.getArrayFromDType("int32",e*r);for(let a=0;a<e;++a){let l=n.slice(a*i,(a+1)*i),c=a*r;for(let u=0;u<r;++u)o[c+u]=s==="left"?sD(l,t[u+c]):oD(l,t[u+c])}return o}function aD(n){let{inputs:t,backend:e,attrs:i}=n,{sortedSequence:r,values:s}=t,{side:o}=i,a=e.data.get(r.dataId).values,l=e.data.get(s.dataId).values,c=$S(a,l,r.shape[0],r.shape[1],s.shape[1],o);return e.makeTensorInfo(s.shape,"int32",c)}var qS={kernelName:cx,backendName:"cpu",kernelFunc:aD};function lD(n){let{inputs:t,backend:e}=n,{condition:i,t:r,e:s}=t;tt([i,r,s],"select");let o=i.shape.length,a=e.data.get(i.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(s.dataId).values,u=In(r.dtype,s.dtype),h=A.makeZerosTypedArray(A.sizeFromShape(r.shape),u),f=0,d=o===0||o>1||r.shape.length===1?1:A.sizeFromShape(r.shape.slice(1));for(let g=0;g<a.length;g++)for(let x=0;x<d;x++)a[g]===1?h[f++]=l[g]:h[f++]=c[g];return e.makeTensorInfo(r.shape,u,h)}var XS={kernelName:ux,backendName:"cpu",kernelFunc:lD};var cD=B.SELU_SCALEALPHA,uD=B.SELU_SCALE,hD=kt(mf,n=>n>=0?uD*n:cD*(Math.exp(n)-1)),YS={kernelName:mf,backendName:"cpu",kernelFunc:hD};var fD=kt(xf,n=>n<0?-1:n>0?1:0),KS={kernelName:xf,backendName:"cpu",kernelFunc:fD};var dD=kt("Sin",n=>Math.sin(n)),JS={kernelName:"Sin",backendName:"cpu",kernelFunc:dD};var pD=kt(gf,n=>Math.sinh(n)),jS={kernelName:gf,backendName:"cpu",kernelFunc:pD};var mD=11920928955078125e-23,QS=Math.log(mD)+2,gD=kt(yf,n=>{let t=n>-QS,e=n<QS,i=Math.exp(n),r;return e?r=i:t?r=n:r=Math.log(1+i),r}),tb={kernelName:yf,backendName:"cpu",kernelFunc:gD};function xD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{blockShape:s,paddings:o}=i;tt([r],"spaceToBatchND");let a=A.sizeFromShape(s),l=[[0,0]];l.push(...o);for(let b=1+s.length;b<r.shape.length;++b)l.push([0,0]);let c=cu.kernelFunc({inputs:{x:r},backend:e,attrs:{paddings:l,constantValue:0}}),u=B.getReshaped(c.shape,s,a,!1),h=B.getPermuted(u.length,s.length,!1),f=B.getReshapedPermuted(c.shape,s,a,!1),x=te({inputs:{x:c},backend:e,attrs:{shape:u}}),v=Me({inputs:{x},backend:e,attrs:{perm:h}}),S=te({inputs:{x:v},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(v),S}var eb={kernelName:fx,backendName:"cpu",kernelFunc:xD};function yD(n){let{inputs:t,backend:e}=n,{indices:i,values:r,denseShape:s,defaultValue:o}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${s.shape}`);if(i.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${i.shape}`);if(r.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${r.shape}`);if(o.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${o.shape}`);let a=e.data.get(i.dataId).values,l=e.data.get(r.dataId).values,c=e.data.get(s.dataId).values,u=e.data.get(o.dataId).values[0],[h,f,d,g,x]=M_(a,i.shape,i.dtype,l,r.dtype,c,u);return[e.makeTensorInfo(f,i.dtype,h),e.makeTensorInfo([f[0]],r.dtype,d),e.makeTensorInfo([g.length],"bool",new Uint8Array(g.map(m=>Number(m)))),e.makeTensorInfo([x.length],i.dtype,new Int32Array(x))]}var nb={kernelName:px,backendName:"cpu",kernelFunc:yD};function _D(n){let{inputs:t,backend:e}=n,{inputIndices:i,inputShape:r,newShape:s}=t;if(i.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${i.shape}`);if(r.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${r.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let o=Array.from(e.data.get(r.dataId).values),a=e.data.get(i.dataId).values,l=Array.from(e.data.get(s.dataId).values),[c,u,h]=w_(a,i.shape,i.dtype,o,l);return[e.makeTensorInfo(u,i.dtype,c),e.makeTensorInfo([h.length],s.dtype,new Int32Array(h))]}var ib={kernelName:mx,backendName:"cpu",kernelFunc:_D};function vD(n){let{inputs:t,backend:e}=n,{data:i,indices:r,segmentIds:s}=t;if(i.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${r.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${s.shape}`);if(r.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let o=e.data.get(i.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(s.dataId).values,[c,u]=su(o,i.shape,i.dtype,a,l,!0);return e.makeTensorInfo(u,i.dtype,c)}var rb={kernelName:gx,backendName:"cpu",kernelFunc:vD};function SD(n){let{inputs:t,backend:e}=n,{data:i,indices:r,segmentIds:s}=t;if(i.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${r.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${s.shape}`);if(r.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let o=e.data.get(i.dataId).values,a=e.data.get(r.dataId).values,l=e.data.get(s.dataId).values,[c,u]=su(o,i.shape,i.dtype,a,l);return e.makeTensorInfo(u,i.dtype,c)}var sb={kernelName:xx,backendName:"cpu",kernelFunc:SD};function bD(n){let{inputs:t,backend:e,attrs:i}=n,{sparseIndices:r,sparseValues:s,defaultValue:o}=t,{outputShape:a}=i,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:f}=B.calculateShapes(s,r,a),d=!1,g=e.bufferSync(r),x;switch(s.dtype){case"bool":{let m=e.bufferSync(s),p=!!e.data.get(o.dataId).values[0];x=Vi(g,m,a,f,u,c,l,h,p,d);break}case"float32":{let m=e.bufferSync(s),p=e.data.get(o.dataId).values[0];x=Vi(g,m,a,f,u,c,l,h,p,d);break}case"int32":{let m=e.bufferSync(s),p=e.data.get(o.dataId).values[0];x=Vi(g,m,a,f,u,c,l,h,p,d);break}case"string":{let m=e.bufferSync(s),p=A.decodeString(e.data.get(o.dataId).values[0]);x=Vi(g,m,a,f,u,c,l,h,p,d);break}default:throw new Error(`Unsupported type ${s.dtype}`)}return e.makeTensorInfo(a,x.dtype,x.values)}var ob={kernelName:yx,backendName:"cpu",kernelFunc:bD};function MD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{numOrSizeSplits:s,axis:o}=i,a=A.parseAxisParam(o,r.shape)[0],l=B.prepareSplitSize(r,s,a),c=new Array(r.shape.length).fill(0),u=r.shape.slice();return l.map(h=>{let f=[...u];f[a]=h;let d=qn({inputs:{x:r},backend:e,attrs:{begin:c,size:f}});return c[a]+=h,d})}var ab={kernelName:dx,backendName:"cpu",kernelFunc:MD};var lb={kernelName:_x,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{let{x:e}=n,i=t;tt(e,"square");let r=i.data.get(e.dataId).values,s=new Float32Array(r.length);for(let a=0;a<r.length;++a){let l=r[a];s[a]=l*l}return{dataId:i.write(s,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};var wD=kt(ta,(n,t)=>{let e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),cb={kernelName:ta,backendName:"cpu",kernelFunc:wD};function TD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{begin:s,end:o,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:f}=i;tt(r,"stridedSlice");let{finalShapeSparse:d,finalShape:g,isIdentity:x,sliceDim0:m,isSimpleSlice:p,begin:v,end:_,strides:y}=Hn.sliceInfo(r.shape,s,o,a,l,c,u,h,f),S;if(x)S=te({inputs:{x:r},backend:e,attrs:{shape:g}});else if(m||p){A.assert(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);let b=Hn.computeOutShape(v,_,y),T=qn({inputs:{x:r},backend:e,attrs:{begin:v,size:b}});S=te({inputs:{x:T},backend:e,attrs:{shape:g}}),e.disposeIntermediateTensorInfo(T)}else{let b=e.bufferSync(r),T=I_(d,b,y,v);S=e.makeTensorInfo(g,T.dtype,T.values)}return S}var ub={kernelName:vx,backendName:"cpu",kernelFunc:TD};function ED(n){let{inputs:t,backend:e,attrs:i}=n,{separator:r,nGramWidths:s,leftPad:o,rightPad:a,padWidth:l,preserveShortSequences:c}=i,{data:u,dataSplits:h}=t,f=e.data.get(u.dataId).values,d=e.data.get(h.dataId).values,[g,x]=C_(f,d,r,s,o,a,l,c);return[e.makeTensorInfo([g.length],"string",g),e.makeTensorInfo(h.shape,"int32",x)]}var hb={kernelName:Sx,backendName:"cpu",kernelFunc:ED};function AD(n){let{inputs:t,backend:e,attrs:i}=n,{skipEmpty:r}=i,{input:s,delimiter:o}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(o.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values[0],[c,u,h]=R_(a,l,r),f=u.length;return[e.makeTensorInfo([f,2],"int32",c),e.makeTensorInfo([f],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}var fb={kernelName:bx,backendName:"cpu",kernelFunc:AD};function ID(n){let{inputs:t,backend:e,attrs:i}=n,{numBuckets:r}=i,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");let o=e.data.get(s.dataId).values,a=N_(o,r);return e.makeTensorInfo(s.shape,"int32",a)}var db={kernelName:Mx,backendName:"cpu",kernelFunc:ID};var CD=kt("Tan",n=>Math.tan(n)),mb={kernelName:"Tan",backendName:"cpu",kernelFunc:CD};var RD=kt(Sf,n=>Math.tanh(n)),gb={kernelName:Sf,backendName:"cpu",kernelFunc:RD};function ND(n){let{inputs:t,backend:e}=n,{tensor:i,indices:r,updates:s}=t,{sliceRank:o,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=B.calculateShapes(s,r,i.shape),h=!1,f=e.bufferSync(r),d=e.bufferSync(s),g=e.bufferSync(i),x=Vi(f,d,i.shape,u,l,a,o,c,g,h);return e.makeTensorInfo(i.shape,x.dtype,x.values)}var xb={kernelName:lx,backendName:"cpu",kernelFunc:ND};function PD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{reps:s}=i;tt(r,"tile");let o=D_(e.bufferSync(r),s);return e.makeTensorInfo(o.shape,o.dtype,o.values)}var yb={kernelName:Ac,backendName:"cpu",kernelFunc:PD};function DD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r}=t,{k:s,sorted:o}=i;tt(r,"topk");let a=e.data.get(r.dataId).values,[l,c]=k_(a,r.shape,r.dtype,s,o);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}var _b={kernelName:wx,backendName:"cpu",kernelFunc:DD};function FD(n){let{inputs:t,attrs:e,backend:i}=n,{image:r,transforms:s}=t,{interpolation:o,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,f,d]=r.shape,[g,x]=c??[h,f],m=[u,g,x,d],p=A.computeStrides(r.shape),v=p[0],_=p[1],y=p[2],S=A.computeStrides(m),b=S[0],T=S[1],R=S[2],w=A.getTypedArrayFromDType(r.dtype,A.sizeFromShape(m));w.fill(l);let M=i.data.get(r.dataId).values,C=i.data.get(s.dataId).values;for(let F=0;F<u;++F){let L=s.shape[0]===1?C:C.subarray(F*8,F*8+8);for(let U=0;U<g;++U)for(let O=0;O<x;++O)for(let V=0;V<d;++V){let k,G=L[6]*O+L[7]*U+1;if(G===0)continue;let K=(L[0]*O+L[1]*U+L[2])/G,Z=(L[3]*O+L[4]*U+L[5])/G,nt=vb(K,f,a),it=vb(Z,h,a);switch(o){case"nearest":k=BD(M,h,f,v,_,y,F,it,nt,V,l);break;case"bilinear":k=zD(M,h,f,v,_,y,F,it,nt,V,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${o}`)}let lt=F*b+U*T+O*R+V;w[lt]=k}return i.makeTensorInfo(m,r.dtype,w)}return{dataId:i.write(w,m,r.dtype),shape:r.shape,dtype:r.dtype}}var Sb={kernelName:Tx,backendName:"cpu",kernelFunc:FD};function vb(n,t,e){switch(e){case"reflect":return kD(n,t);case"wrap":return LD(n,t);case"nearest":return OD(n,t);case"constant":default:return UD(n,t)}}function kD(n,t){let e=n;if(e<0)if(t<=1)e=0;else{let i=2*t;e<i&&(e=i*Math.trunc(-e/i)+e),e=e<-t?e+i:-e-1}else if(e>t-1)if(t<=1)e=0;else{let i=2*t;e-=i*Math.trunc(e/i),e>=t&&(e=i-e-1)}return A.clamp(0,e,t-1)}function LD(n,t){let e=n;if(e<0)if(t<=1)e=0;else{let i=t-1;e+=t*(Math.trunc(-e/i)+1)}else if(e>t-1)if(t<=1)e=0;else{let i=t-1;e-=t*Math.trunc(e/i)}return A.clamp(0,e,t-1)}function UD(n,t){return n}function OD(n,t){return A.clamp(0,n,t-1)}function _a(n,t,e,i,r,s,o,a,l,c,u){let h=o*i+a*r+l*s+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function BD(n,t,e,i,r,s,o,a,l,c,u){let h=Math.round(a),f=Math.round(l);return _a(n,t,e,i,r,s,o,h,f,c,u)}function zD(n,t,e,i,r,s,o,a,l,c,u){let h=Math.floor(a),f=Math.floor(l),d=h+1,g=f+1,x=(g-l)*_a(n,t,e,i,r,s,o,h,f,c,u)+(l-f)*_a(n,t,e,i,r,s,o,h,g,c,u),m=(g-l)*_a(n,t,e,i,r,s,o,d,f,c,u)+(l-f)*_a(n,t,e,i,r,s,o,d,g,c,u);return(d-a)*x+(a-h)*m}function VD(n){let{inputs:t,attrs:e,backend:i}=n,{axis:r}=e,{x:s}=t;tt(s,"unique");let o=i.data.get(s.dataId).values,{outputValues:a,outputShape:l,indices:c}=L_(o,r,s.shape,s.dtype);return[i.makeTensorInfo(l,s.dtype,a),i.makeTensorInfo([c.length],"int32",c)]}var bb={kernelName:Ax,backendName:"cpu",kernelFunc:VD};function HD(n){let{inputs:t,backend:e,attrs:i}=n,{value:r}=t,{axis:s}=i;s<0&&(s+=r.shape.length);let o=r.shape.length,a=r.shape[s],l=new Array(o-1),c=0;for(let d=0;d<o;d++)d!==s&&(l[c++]=r.shape[d]);let u=new Array(o).fill(0),h=r.shape.slice();h[s]=1;let f=new Array(a);for(let d=0;d<f.length;d++){u[s]=d;let g=qn({inputs:{x:r},backend:e,attrs:{begin:u,size:h}});f[d]=te({inputs:{x:g},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(g)}return f}var Mb={kernelName:Ix,backendName:"cpu",kernelFunc:HD};function GD(n){let{inputs:t,backend:e,attrs:i}=n,{x:r,segmentIds:s}=t,{numSegments:o}=i;tt(r,"unsortedSegmentSum");let a=r.shape.length,l=s.shape.length,c=[],u=[],h=a-l,f=s;for(let g=0;g<h;++g){let x=Qs({inputs:{input:f},backend:e,attrs:{dim:g+1}});f=x,u.push(x)}for(let g=0;g<o;++g){let x=A.createScalarValue(g,"int32"),m=e.makeTensorInfo([],"int32",x),p=vd({inputs:{a:m,b:f},backend:e}),v=Wn({inputs:{x:p},backend:e,attrs:{dtype:"float32"}}),_=qr({inputs:{a:v,b:r},backend:e}),y=Hi({inputs:{x:_},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(m),u.push(p),u.push(v),u.push(_),u.push(y)}let d=Ud({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(g=>e.disposeIntermediateTensorInfo(g)),d}var wb={kernelName:Cx,backendName:"cpu",kernelFunc:GD};var WD=[W_,Dy,$_,q_,Oy,X_,Y_,K_,Z_,J_,j_,Q_,tv,ev,nv,rv,sv,ov,av,G_,lv,cv,uv,zy,hv,Uy,Vy,fv,Fy,dv,mv,gv,xv,yv,_v,vv,Sv,Mv,wv,Tv,Ev,Av,Iv,Cv,Rv,Nv,Pv,Dv,Fv,kv,Lv,Uv,Bv,U_,zv,Gy,Hv,$y,Gv,qy,Wv,$v,qv,Xy,Yy,Xv,Yv,Kv,Zv,Jy,jy,ky,Jv,pv,jv,Qv,tS,O_,Qy,t_,eS,i_,nS,iS,rS,sS,oS,aS,lS,s_,cS,uS,hS,fS,pS,mS,gS,o_,xS,_S,bS,a_,l_,MS,wS,TS,c_,ES,CS,RS,cu,NS,B_,h_,PS,DS,FS,kS,Ly,ga,LS,z_,V_,H_,US,OS,BS,zS,VS,HS,GS,v_,WS,qS,XS,YS,S_,KS,JS,jS,b_,vS,tb,eb,nb,ib,rb,sb,ob,ab,T_,lb,E_,A_,cb,ub,hb,fb,db,P_,Ov,mb,gb,xb,yb,_b,Sb,u_,bb,Mb,wb,AS];for(let n of WD)kx(n);var we=n=>document.getElementById(n),Od=(n,t)=>me(()=>Array.from(hd(qe(fd(n),t)).dataSync()));function Eb(){let n=[+we("a").value,+we("b").value,0],t=+we("shift").value,e=+we("temp").value,i=n.map(o=>o+t),r=Od(i,e),s=Od(n,e);return{base:n,shift:t,temp:e,z:i,p:r,reference:s,sum:r.reduce((o,a)=>o+a,0),drift:Math.max(...r.map((o,a)=>Math.abs(o-s[a]))),naiveFinite:i.every(o=>Number.isFinite(Math.exp(o/e)))}}var Wi,Yr,$i,Gi,Kr;function Bd(){Wi&&Wi.render(Yr,$i)}function Tb(){$i&&($i.position.set(2.1,1.9,2.4),Gi.target.set(1/3,1/3,1/3),Gi.update())}function $D(n){if(!Wi)return;for(let s of[...Kr.children])s.geometry.dispose(),s.material.dispose(),Kr.remove(s);let t=new tn(new No(.022,24,16),new Ni({color:11870297,depthTest:!1}));t.position.set(...n.p),t.renderOrder=10,Kr.add(t);let e=new tn(new Po(.036,.005,8,32),new Ni({color:1654321,depthTest:!1}));e.position.set(...n.reference),e.quaternion.setFromUnitVectors(new $(0,0,1),new $(1,1,1).normalize()),e.renderOrder=9,Kr.add(e);let i=[];for(let s=0;s<=75;s++)i.push(new $(...Od(n.base,.25+s*.05)));let r=new bs(new Qe().setFromPoints(i),new wr({color:11302167,depthTest:!1}));Kr.add(r),Bd()}function va(){let n=Eb();window.experiment=n;for(let t of["a","b","shift","temp"])we(t+"o").textContent=we(t).value;we("prob").textContent=`Probabilities
`+n.p.map((t,e)=>"p"+(e+1)+" = "+t.toFixed(6)).join(`
`)+`
Sum = `+n.sum.toFixed(8),we("numerics").textContent="Actual logits: ["+n.z.join(", ")+`]
Max shift drift: `+n.drift.toExponential(2)+`
Naive exponentials finite: `+n.naiveFinite+`
Backend: TensorFlow.js CPU / float32`,$D(n)}async function qD(){await u0("cpu"),await h0();try{Wi=new pc({antialias:!0,preserveDrawingBuffer:!0}),Wi.setPixelRatio(Math.min(devicePixelRatio,2)),we("scene").append(Wi.domElement),Yr=new bo,Yr.background=new ue(15660529),$i=new je(40,1,.01,30),Gi=new xc($i,Wi.domElement),Gi.enableDamping=!1,Gi.minDistance=1.3,Gi.maxDistance=6,Gi.addEventListener("change",Bd),Kr=new Ei,Yr.add(Kr);let n=new Qe;n.setAttribute("position",new ze([1,0,0,0,1,0,0,0,1],3)),Yr.add(new tn(n,new Ni({color:7846817,transparent:!0,opacity:.3,side:Un}))),Yr.add(new Eo(new Qe().setFromPoints([[1,0,0],[0,1,0],[0,0,1]].map(t=>new $(...t))),new wr({color:2651736})));for(let[t,e]of[["p1 = 1",[1.08,0,0]],["p2 = 1",[0,1.08,0]],["p3 = 1",[0,0,1.08]]]){let i=document.createElement("canvas");i.width=256,i.height=64;let r=i.getContext("2d");r.fillStyle="#193e31",r.font="bold 28px Arial",r.textAlign="center",r.fillText(t,128,42);let s=new wo(new Ss({map:new Ao(i),depthTest:!1}));s.position.set(...e),s.scale.set(.4,.1,1),Yr.add(s)}Tb(),new ResizeObserver(()=>{let t=we("scene").getBoundingClientRect();Wi.setSize(t.width,t.height),$i.aspect=t.width/t.height,$i.updateProjectionMatrix(),Bd()}).observe(we("scene"))}catch{Wi=null,we("fallback").hidden=!1}for(let n of["a","b","shift","temp"])we(n).oninput=va;we("large").onclick=()=>{we("shift").value=1e3,va()},we("equal").onclick=()=>{we("a").value=0,we("b").value=0,va()},we("front").onclick=()=>{$i&&($i.position.set(2,2,2),Gi.target.set(1/3,1/3,1/3),Gi.update())},we("reset").onclick=()=>{we("a").value=2,we("b").value=1,we("shift").value=0,we("temp").value=1,Tb(),va()},we("export").onclick=()=>{let n=URL.createObjectURL(new Blob([JSON.stringify({...Eb(),toy:!0,backend:"tensorflowjs-cpu-float32"},null,2)],{type:"application/json"})),t=document.createElement("a");t.href=n,t.download="softmax-state.json",t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)},va()}qD().catch(n=>{we("fallback").hidden=!1,we("fallback").textContent="Experiment could not initialize: "+n.message});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@tensorflow/tfjs-core/dist/backends/backend.js:
@tensorflow/tfjs-core/dist/util_base.js:
@tensorflow/tfjs-core/dist/global_util.js:
@tensorflow/tfjs-core/dist/ops/clone.js:
@tensorflow/tfjs-core/dist/ops/add.js:
@tensorflow/tfjs-core/dist/ops/floorDiv.js:
@tensorflow/tfjs-core/dist/ops/div.js:
@tensorflow/tfjs-core/dist/ops/mul.js:
@tensorflow/tfjs-core/dist/ops/conv_util.js:
@tensorflow/tfjs-core/dist/ops/reshape.js:
@tensorflow/tfjs-core/dist/ops/broadcast_to.js:
@tensorflow/tfjs-core/dist/ops/fill.js:
@tensorflow/tfjs-core/dist/ops/elu.js:
@tensorflow/tfjs-core/dist/ops/pow.js:
@tensorflow/tfjs-core/dist/ops/leaky_relu.js:
@tensorflow/tfjs-core/dist/ops/sub.js:
@tensorflow/tfjs-core/dist/ops/maximum.js:
@tensorflow/tfjs-core/dist/ops/prelu.js:
@tensorflow/tfjs-core/dist/ops/relu.js:
@tensorflow/tfjs-core/dist/ops/relu6.js:
@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js:
@tensorflow/tfjs-core/dist/ops/ops.js:
@tensorflow/tfjs-core/dist/ops/rotate_util.js:
@tensorflow/tfjs-core/dist/backends/kernel_impls.js:
@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js:
@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js:
@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js:
@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js:
@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js:
@tensorflow/tfjs-backend-cpu/dist/base.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LeakyRelu.js:
@tensorflow/tfjs-backend-cpu/dist/utils/fused_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Reshape.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AddN.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/All.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Any.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ArgMax.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ArgMin.js:
@tensorflow/tfjs-backend-cpu/dist/utils/pool_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPool.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPool3D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPool3DGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPoolGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BatchNorm.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BatchToSpaceND.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Imag.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Concat.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv2DBackpropFilter.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv2DBackpropInput.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv3D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv3DBackpropFilterV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv3DBackpropInputV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cos.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/CropAndResize.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cumsum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DenseBincount.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthToSpace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthwiseConv2dNative.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthwiseConv2dNativeBackpropInput.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Diag.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Dilation2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Dilation2DBackpropFilter.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Dilation2DBackpropInput.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/EluGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ExpandDims.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RealDiv.js:
@tensorflow/tfjs-backend-cpu/dist/utils/fft_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FFT.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Fill.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FlipLeftRight.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FusedConv2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FusedDepthwiseConv2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IFFT.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LogicalAnd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LogicalOr.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LRN.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LRNGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Max.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPool.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPool3D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPool3DGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPoolGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPoolWithArgmax_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPoolWithArgmax.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Mean.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Min.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MirrorPad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Mod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Softmax.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Multinomial.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NonMaxSuppressionV3.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NonMaxSuppressionV4.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/OneHot.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ZerosLike.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/OnesLike.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Pack.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/PadV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Pow.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Range.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeBilinear.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeBilinearGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeNearestNeighbor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeNearestNeighborGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Reverse.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RotateWithOffset.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ScatterNd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Select.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SpaceToBatchND.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseToDense.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SplitV.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tile.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TopK.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unpack.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/UnsortedSegmentSum.js:
@tensorflow/tfjs-backend-cpu/dist/register_all_kernels.js:
@tensorflow/tfjs-backend-cpu/dist/index.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/environment.js:
@tensorflow/tfjs-core/dist/util.js:
@tensorflow/tfjs-core/dist/tape.js:
@tensorflow/tfjs-core/dist/tensor.js:
@tensorflow/tfjs-core/dist/types.js:
@tensorflow/tfjs-core/dist/device_util.js:
@tensorflow/tfjs-core/dist/ops/broadcast_util.js:
@tensorflow/tfjs-core/dist/ops/axis_util.js:
@tensorflow/tfjs-core/dist/ops/concat_util.js:
@tensorflow/tfjs-core/dist/ops/reduce_util.js:
@tensorflow/tfjs-core/dist/index.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/log.js:
@tensorflow/tfjs-core/dist/profiler.js:
@tensorflow/tfjs-core/dist/tensor_format.js:
@tensorflow/tfjs-core/dist/tensor_util.js:
@tensorflow/tfjs-core/dist/engine.js:
@tensorflow/tfjs-core/dist/tensor_util_env.js:
@tensorflow/tfjs-core/dist/ops/operation.js:
@tensorflow/tfjs-core/dist/ops/tensor_ops_util.js:
@tensorflow/tfjs-core/dist/io/types.js:
@tensorflow/tfjs-core/dist/globals.js:
@tensorflow/tfjs-core/dist/io/io_utils.js:
@tensorflow/tfjs-core/dist/io/router_registry.js:
@tensorflow/tfjs-core/dist/io/indexed_db.js:
@tensorflow/tfjs-core/dist/io/local_storage.js:
@tensorflow/tfjs-core/dist/io/model_management.js:
@tensorflow/tfjs-core/dist/ops/abs.js:
@tensorflow/tfjs-core/dist/ops/sigmoid.js:
@tensorflow/tfjs-core/dist/ops/zeros_like.js:
@tensorflow/tfjs-core/dist/ops/scalar.js:
@tensorflow/tfjs-core/dist/ops/sqrt.js:
@tensorflow/tfjs-core/dist/ops/sum.js:
@tensorflow/tfjs-core/dist/gradients.js:
@tensorflow/tfjs-core/dist/ops/softmax.js:
@tensorflow/tfjs-core/dist/ops/step.js:
@tensorflow/tfjs-core/dist/ops/tensor1d.js:
@tensorflow/tfjs-core/dist/backends/where_impl.js:
@tensorflow/tfjs-core/dist/serialization.js:
@tensorflow/tfjs-core/dist/optimizers/optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adadelta_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adagrad_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adam_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adamax_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/sgd_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/momentum_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/rmsprop_optimizer.js:
@tensorflow/tfjs-core/dist/io/browser_files.js:
@tensorflow/tfjs-core/dist/io/weights_loader.js:
@tensorflow/tfjs-core/dist/io/http.js:
@tensorflow/tfjs-core/dist/io/passthrough.js:
@tensorflow/tfjs-core/dist/io/io.js:
@tensorflow/tfjs-core/dist/ops/array_ops_util.js:
@tensorflow/tfjs-core/dist/ops/selu_util.js:
@tensorflow/tfjs-core/dist/ops/erf_util.js:
@tensorflow/tfjs-core/dist/backends/complex_util.js:
@tensorflow/tfjs-core/dist/ops/segment_util.js:
@tensorflow/tfjs-core/dist/backends/backend_util.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/kernel_registry.js:
@tensorflow/tfjs-core/dist/flags.js:
@tensorflow/tfjs-core/dist/platforms/platform_browser.js:
@tensorflow/tfjs-core/dist/platforms/platform_node.js:
@tensorflow/tfjs-core/dist/ops/square.js:
@tensorflow/tfjs-core/dist/ops/fused_util.js:
@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js:
@tensorflow/tfjs-core/dist/io/progress.js:
@tensorflow/tfjs-backend-cpu/dist/cpu_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NonMaxSuppressionV5.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Square.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/platforms/is_typed_array_browser.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BitwiseAnd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Draw.js:
  (**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/hash_util.js:
@tensorflow/tfjs-core/dist/ops/slice_util.js:
@tensorflow/tfjs-core/dist/backends/einsum_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_reduction_util.js:
@tensorflow/tfjs-backend-cpu/dist/backend_cpu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BroadcastArgs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Einsum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentMean.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentSum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/buffer.js:
@tensorflow/tfjs-core/dist/ops/cast.js:
@tensorflow/tfjs-core/dist/ops/print.js:
@tensorflow/tfjs-core/dist/base_side_effects.js:
@tensorflow/tfjs-core/dist/base.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/register_optimizers.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ragged_to_dense_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cumprod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SearchSorted_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SearchSorted.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TensorScatterUpdate.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Elu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Prelu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Relu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Relu6.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BatchMatMul.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/_FusedMatMul.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Acos.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Acosh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Asin.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Asinh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Atan.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Atan2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Atanh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ClipByValue.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ComplexAbs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cosh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Erf.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IsFinite.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IsInf.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IsNaN.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Log1p.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LogicalNot.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Reciprocal.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Round.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Selu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sign.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sin.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sinh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Softplus.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Step.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tan.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tanh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unique.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
