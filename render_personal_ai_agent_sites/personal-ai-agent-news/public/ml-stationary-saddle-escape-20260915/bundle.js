(()=>{var dT=Object.create;var ff=Object.defineProperty;var mT=Object.getOwnPropertyDescriptor;var gT=Object.getOwnPropertyNames;var xT=Object.getPrototypeOf,yT=Object.prototype.hasOwnProperty;var Hn=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),Io=(n,t)=>{for(var e in t)ff(n,e,{get:t[e],enumerable:!0})},_T=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of gT(t))!yT.call(n,i)&&i!==e&&ff(n,i,{get:()=>t[i],enumerable:!(r=mT(t,i))||r.enumerable});return n};var gm=(n,t,e)=>(e=n!=null?dT(xT(n)):{},_T(t||!n||!n.__esModule?ff(e,"default",{value:n,enumerable:!0}):e,n));var m0=Hn((JB,d0)=>{d0.exports=ke;var Zn=null;try{Zn=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function ke(n,t,e){this.low=n|0,this.high=t|0,this.unsigned=!!e}ke.prototype.__isLong__;Object.defineProperty(ke.prototype,"__isLong__",{value:!0});function Tn(n){return(n&&n.__isLong__)===!0}ke.isLong=Tn;var o0={},s0={};function mo(n,t){var e,r,i;return t?(n>>>=0,(i=0<=n&&n<256)&&(r=s0[n],r)?r:(e=Le(n,(n|0)<0?-1:0,!0),i&&(s0[n]=e),e)):(n|=0,(i=-128<=n&&n<128)&&(r=o0[n],r)?r:(e=Le(n,n<0?-1:0,!1),i&&(o0[n]=e),e))}ke.fromInt=mo;function Jn(n,t){if(isNaN(n))return t?po:jn;if(t){if(n<0)return po;if(n>=u0)return p0}else{if(n<=-c0)return wn;if(n+1>=c0)return f0}return n<0?Jn(-n,t).neg():Le(n%ks|0,n/ks|0,t)}ke.fromNumber=Jn;function Le(n,t,e){return new ke(n,t,e)}ke.fromBits=Le;var gh=Math.pow;function Wp(n,t,e){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return jn;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var r;if((r=n.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return Wp(n.substring(1),t,e).neg();for(var i=Jn(gh(e,8)),o=jn,s=0;s<n.length;s+=8){var a=Math.min(8,n.length-s),c=parseInt(n.substring(s,s+a),e);if(a<8){var l=Jn(gh(e,a));o=o.mul(l).add(Jn(c))}else o=o.mul(i),o=o.add(Jn(c))}return o.unsigned=t,o}ke.fromString=Wp;function ur(n,t){return typeof n=="number"?Jn(n,t):typeof n=="string"?Wp(n,t):Le(n.low,n.high,typeof t=="boolean"?t:n.unsigned)}ke.fromValue=ur;var a0=65536,AR=1<<24,ks=a0*a0,u0=ks*ks,c0=u0/2,l0=mo(AR),jn=mo(0);ke.ZERO=jn;var po=mo(0,!0);ke.UZERO=po;var Fs=mo(1);ke.ONE=Fs;var h0=mo(1,!0);ke.UONE=h0;var Hp=mo(-1);ke.NEG_ONE=Hp;var f0=Le(-1,2147483647,!1);ke.MAX_VALUE=f0;var p0=Le(-1,-1,!0);ke.MAX_UNSIGNED_VALUE=p0;var wn=Le(0,-2147483648,!1);ke.MIN_VALUE=wn;var Mt=ke.prototype;Mt.toInt=function(){return this.unsigned?this.low>>>0:this.low};Mt.toNumber=function(){return this.unsigned?(this.high>>>0)*ks+(this.low>>>0):this.high*ks+(this.low>>>0)};Mt.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(wn)){var e=Jn(t),r=this.div(e),i=r.mul(e).sub(this);return r.toString(t)+i.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var o=Jn(gh(t,6),this.unsigned),s=this,a="";;){var c=s.div(o),l=s.sub(c.mul(o)).toInt()>>>0,u=l.toString(t);if(s=c,s.isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}};Mt.getHighBits=function(){return this.high};Mt.getHighBitsUnsigned=function(){return this.high>>>0};Mt.getLowBits=function(){return this.low};Mt.getLowBitsUnsigned=function(){return this.low>>>0};Mt.getNumBitsAbs=function(){if(this.isNegative())return this.eq(wn)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&(t&1<<e)==0;e--);return this.high!=0?e+33:e+1};Mt.isZero=function(){return this.high===0&&this.low===0};Mt.eqz=Mt.isZero;Mt.isNegative=function(){return!this.unsigned&&this.high<0};Mt.isPositive=function(){return this.unsigned||this.high>=0};Mt.isOdd=function(){return(this.low&1)===1};Mt.isEven=function(){return(this.low&1)===0};Mt.equals=function(t){return Tn(t)||(t=ur(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};Mt.eq=Mt.equals;Mt.notEquals=function(t){return!this.eq(t)};Mt.neq=Mt.notEquals;Mt.ne=Mt.notEquals;Mt.lessThan=function(t){return this.comp(t)<0};Mt.lt=Mt.lessThan;Mt.lessThanOrEqual=function(t){return this.comp(t)<=0};Mt.lte=Mt.lessThanOrEqual;Mt.le=Mt.lessThanOrEqual;Mt.greaterThan=function(t){return this.comp(t)>0};Mt.gt=Mt.greaterThan;Mt.greaterThanOrEqual=function(t){return this.comp(t)>=0};Mt.gte=Mt.greaterThanOrEqual;Mt.ge=Mt.greaterThanOrEqual;Mt.compare=function(t){if(Tn(t)||(t=ur(t)),this.eq(t))return 0;var e=this.isNegative(),r=t.isNegative();return e&&!r?-1:!e&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};Mt.comp=Mt.compare;Mt.negate=function(){return!this.unsigned&&this.eq(wn)?wn:this.not().add(Fs)};Mt.neg=Mt.negate;Mt.add=function(t){Tn(t)||(t=ur(t));var e=this.high>>>16,r=this.high&65535,i=this.low>>>16,o=this.low&65535,s=t.high>>>16,a=t.high&65535,c=t.low>>>16,l=t.low&65535,u=0,h=0,f=0,p=0;return p+=o+l,f+=p>>>16,p&=65535,f+=i+c,h+=f>>>16,f&=65535,h+=r+a,u+=h>>>16,h&=65535,u+=e+s,u&=65535,Le(f<<16|p,u<<16|h,this.unsigned)};Mt.subtract=function(t){return Tn(t)||(t=ur(t)),this.add(t.neg())};Mt.sub=Mt.subtract;Mt.multiply=function(t){if(this.isZero())return jn;if(Tn(t)||(t=ur(t)),Zn){var e=Zn.mul(this.low,this.high,t.low,t.high);return Le(e,Zn.get_high(),this.unsigned)}if(t.isZero())return jn;if(this.eq(wn))return t.isOdd()?wn:jn;if(t.eq(wn))return this.isOdd()?wn:jn;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(l0)&&t.lt(l0))return Jn(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,i=this.high&65535,o=this.low>>>16,s=this.low&65535,a=t.high>>>16,c=t.high&65535,l=t.low>>>16,u=t.low&65535,h=0,f=0,p=0,g=0;return g+=s*u,p+=g>>>16,g&=65535,p+=o*u,f+=p>>>16,p&=65535,p+=s*l,f+=p>>>16,p&=65535,f+=i*u,h+=f>>>16,f&=65535,f+=o*l,h+=f>>>16,f&=65535,f+=s*c,h+=f>>>16,f&=65535,h+=r*u+i*l+o*c+s*a,h&=65535,Le(p<<16|g,h<<16|f,this.unsigned)};Mt.mul=Mt.multiply;Mt.divide=function(t){if(Tn(t)||(t=ur(t)),t.isZero())throw Error("division by zero");if(Zn){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?Zn.div_u:Zn.div_s)(this.low,this.high,t.low,t.high);return Le(e,Zn.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?po:jn;var r,i,o;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return po;if(t.gt(this.shru(1)))return h0;o=po}else{if(this.eq(wn)){if(t.eq(Fs)||t.eq(Hp))return wn;if(t.eq(wn))return Fs;var s=this.shr(1);return r=s.div(t).shl(1),r.eq(jn)?t.isNegative()?Fs:Hp:(i=this.sub(t.mul(r)),o=r.add(i.div(t)),o)}else if(t.eq(wn))return this.unsigned?po:jn;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();o=jn}for(i=this;i.gte(t);){r=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(r)/Math.LN2),c=a<=48?1:gh(2,a-48),l=Jn(r),u=l.mul(t);u.isNegative()||u.gt(i);)r-=c,l=Jn(r,this.unsigned),u=l.mul(t);l.isZero()&&(l=Fs),o=o.add(l),i=i.sub(u)}return o};Mt.div=Mt.divide;Mt.modulo=function(t){if(Tn(t)||(t=ur(t)),Zn){var e=(this.unsigned?Zn.rem_u:Zn.rem_s)(this.low,this.high,t.low,t.high);return Le(e,Zn.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};Mt.mod=Mt.modulo;Mt.rem=Mt.modulo;Mt.not=function(){return Le(~this.low,~this.high,this.unsigned)};Mt.and=function(t){return Tn(t)||(t=ur(t)),Le(this.low&t.low,this.high&t.high,this.unsigned)};Mt.or=function(t){return Tn(t)||(t=ur(t)),Le(this.low|t.low,this.high|t.high,this.unsigned)};Mt.xor=function(t){return Tn(t)||(t=ur(t)),Le(this.low^t.low,this.high^t.high,this.unsigned)};Mt.shiftLeft=function(t){return Tn(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Le(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Le(0,this.low<<t-32,this.unsigned)};Mt.shl=Mt.shiftLeft;Mt.shiftRight=function(t){return Tn(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Le(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Le(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};Mt.shr=Mt.shiftRight;Mt.shiftRightUnsigned=function(t){if(Tn(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var r=this.low;return Le(r>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?Le(e,0,this.unsigned):Le(e>>>t-32,0,this.unsigned)};Mt.shru=Mt.shiftRightUnsigned;Mt.shr_u=Mt.shiftRightUnsigned;Mt.toSigned=function(){return this.unsigned?Le(this.low,this.high,!1):this};Mt.toUnsigned=function(){return this.unsigned?this:Le(this.low,this.high,!0)};Mt.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};Mt.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};Mt.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]};ke.fromBytes=function(t,e,r){return r?ke.fromBytesLE(t,e):ke.fromBytesBE(t,e)};ke.fromBytesLE=function(t,e){return new ke(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)};ke.fromBytesBE=function(t,e){return new ke(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}});var q0=Hn(()=>{});var X0=Hn(()=>{});var Ty=Hn((wy,Md)=>{(function(n,t,e){function r(a){var c=this,l=s();c.next=function(){var u=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=u-(c.c=u|0)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(a),c.s0<0&&(c.s0+=1),c.s1-=l(a),c.s1<0&&(c.s1+=1),c.s2-=l(a),c.s2<0&&(c.s2+=1),l=null}function i(a,c){return c.c=a.c,c.s0=a.s0,c.s1=a.s1,c.s2=a.s2,c}function o(a,c){var l=new r(a),u=c&&c.state,h=l.next;return h.int32=function(){return l.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,u&&(typeof u=="object"&&i(u,l),h.state=function(){return i(l,{})}),h}function s(){var a=4022871197,c=function(l){l=String(l);for(var u=0;u<l.length;u++){a+=l.charCodeAt(u);var h=.02519603282416938*a;a=h>>>0,h-=a,h*=a,a=h>>>0,h-=a,a+=h*4294967296}return(a>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=o:e&&e.amd?e(function(){return o}):this.alea=o})(wy,typeof Md=="object"&&Md,typeof define=="function"&&define)});var Ay=Hn((Ey,wd)=>{(function(n,t,e){function r(s){var a=this,c="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var u=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^u^u>>>8},s===(s|0)?a.x=s:c+=s;for(var l=0;l<c.length+64;l++)a.x^=c.charCodeAt(l)|0,a.next()}function i(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a}function o(s,a){var c=new r(s),l=a&&a.state,u=function(){return(c.next()>>>0)/4294967296};return u.double=function(){do var h=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},u.int32=c.next,u.quick=u,l&&(typeof l=="object"&&i(l,c),u.state=function(){return i(c,{})}),u}t&&t.exports?t.exports=o:e&&e.amd?e(function(){return o}):this.xor128=o})(Ey,typeof wd=="object"&&wd,typeof define=="function"&&define)});var Cy=Hn((Iy,Td)=>{(function(n,t,e){function r(s){var a=this,c="";a.next=function(){var u=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(u^u<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,s===(s|0)?a.x=s:c+=s;for(var l=0;l<c.length+64;l++)a.x^=c.charCodeAt(l)|0,l==c.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function i(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a.v=s.v,a.d=s.d,a}function o(s,a){var c=new r(s),l=a&&a.state,u=function(){return(c.next()>>>0)/4294967296};return u.double=function(){do var h=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},u.int32=c.next,u.quick=u,l&&(typeof l=="object"&&i(l,c),u.state=function(){return i(c,{})}),u}t&&t.exports?t.exports=o:e&&e.amd?e(function(){return o}):this.xorwow=o})(Iy,typeof Td=="object"&&Td,typeof define=="function"&&define)});var Ny=Hn((Ry,Ed)=>{(function(n,t,e){function r(s){var a=this;a.next=function(){var l=a.x,u=a.i,h,f,p;return h=l[u],h^=h>>>7,f=h^h<<24,h=l[u+1&7],f^=h^h>>>10,h=l[u+3&7],f^=h^h>>>3,h=l[u+4&7],f^=h^h<<7,h=l[u+7&7],h=h^h<<13,f^=h^h<<9,l[u]=f,a.i=u+1&7,f};function c(l,u){var h,f,p=[];if(u===(u|0))f=p[0]=u;else for(u=""+u,h=0;h<u.length;++h)p[h&7]=p[h&7]<<15^u.charCodeAt(h)+p[h+1&7]<<13;for(;p.length<8;)p.push(0);for(h=0;h<8&&p[h]===0;++h);for(h==8?f=p[7]=-1:f=p[h],l.x=p,l.i=0,h=256;h>0;--h)l.next()}c(a,s)}function i(s,a){return a.x=s.x.slice(),a.i=s.i,a}function o(s,a){s==null&&(s=+new Date);var c=new r(s),l=a&&a.state,u=function(){return(c.next()>>>0)/4294967296};return u.double=function(){do var h=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},u.int32=c.next,u.quick=u,l&&(l.x&&i(l,c),u.state=function(){return i(c,{})}),u}t&&t.exports?t.exports=o:e&&e.amd?e(function(){return o}):this.xorshift7=o})(Ry,typeof Ed=="object"&&Ed,typeof define=="function"&&define)});var Py=Hn((Dy,Ad)=>{(function(n,t,e){function r(s){var a=this;a.next=function(){var l=a.w,u=a.X,h=a.i,f,p;return a.w=l=l+1640531527|0,p=u[h+34&127],f=u[h=h+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,p=u[h]=p^f,a.i=h,p+(l^l>>>16)|0};function c(l,u){var h,f,p,g,x,m=[],d=128;for(u===(u|0)?(f=u,u=null):(u=u+"\0",f=0,d=Math.max(d,u.length)),p=0,g=-32;g<d;++g)u&&(f^=u.charCodeAt((g+32)%u.length)),g===0&&(x=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,g>=0&&(x=x+1640531527|0,h=m[g&127]^=f+x,p=h==0?p+1:0);for(p>=128&&(m[(u&&u.length||0)&127]=-1),p=127,g=512;g>0;--g)f=m[p+34&127],h=m[p=p+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,m[p]=f^h;l.w=x,l.X=m,l.i=p}c(a,s)}function i(s,a){return a.i=s.i,a.w=s.w,a.X=s.X.slice(),a}function o(s,a){s==null&&(s=+new Date);var c=new r(s),l=a&&a.state,u=function(){return(c.next()>>>0)/4294967296};return u.double=function(){do var h=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},u.int32=c.next,u.quick=u,l&&(l.X&&i(l,c),u.state=function(){return i(c,{})}),u}t&&t.exports?t.exports=o:e&&e.amd?e(function(){return o}):this.xor4096=o})(Dy,typeof Ad=="object"&&Ad,typeof define=="function"&&define)});var ky=Hn((Fy,Id)=>{(function(n,t,e){function r(s){var a=this,c="";a.next=function(){var u=a.b,h=a.c,f=a.d,p=a.a;return u=u<<25^u>>>7^h,h=h-f|0,f=f<<24^f>>>8^p,p=p-u|0,a.b=u=u<<20^u>>>12^h,a.c=h=h-f|0,a.d=f<<16^h>>>16^p,a.a=p-u|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,s===Math.floor(s)?(a.a=s/4294967296|0,a.b=s|0):c+=s;for(var l=0;l<c.length+20;l++)a.b^=c.charCodeAt(l)|0,a.next()}function i(s,a){return a.a=s.a,a.b=s.b,a.c=s.c,a.d=s.d,a}function o(s,a){var c=new r(s),l=a&&a.state,u=function(){return(c.next()>>>0)/4294967296};return u.double=function(){do var h=c.next()>>>11,f=(c.next()>>>0)/4294967296,p=(h+f)/(1<<21);while(p===0);return p},u.int32=c.next,u.quick=u,l&&(typeof l=="object"&&i(l,c),u.state=function(){return i(c,{})}),u}t&&t.exports?t.exports=o:e&&e.amd?e(function(){return o}):this.tychei=o})(Fy,typeof Id=="object"&&Id,typeof define=="function"&&define)});var Ly=Hn(()=>{});var Oy=Hn((Uy,Vh)=>{(function(n,t,e){var r=256,i=6,o=52,s="random",a=e.pow(r,i),c=e.pow(2,o),l=c*2,u=r-1,h;function f(_,y,S){var b=[];y=y==!0?{entropy:!0}:y||{};var E=m(x(y.entropy?[_,v(t)]:_??d(),3),b),R=new p(b),w=function(){for(var M=R.g(i),C=a,P=0;M<c;)M=(M+P)*r,C*=r,P=R.g(1);for(;M>=l;)M/=2,C/=2,P>>>=1;return(M+P)/C};return w.int32=function(){return R.g(4)|0},w.quick=function(){return R.g(4)/4294967296},w.double=w,m(v(R.S),t),(y.pass||S||function(M,C,P,F){return F&&(F.S&&g(F,R),M.state=function(){return g(R,{})}),P?(e[s]=M,C):M})(w,E,"global"in y?y.global:this==e,y.state)}function p(_){var y,S=_.length,b=this,E=0,R=b.i=b.j=0,w=b.S=[];for(S||(_=[S++]);E<r;)w[E]=E++;for(E=0;E<r;E++)w[E]=w[R=u&R+_[E%S]+(y=w[E])],w[R]=y;(b.g=function(M){for(var C,P=0,F=b.i,L=b.j,U=b.S;M--;)C=U[F=u&F+1],P=P*r+U[u&(U[F]=U[L=u&L+C])+(U[L]=C)];return b.i=F,b.j=L,P})(r)}function g(_,y){return y.i=_.i,y.j=_.j,y.S=_.S.slice(),y}function x(_,y){var S=[],b=typeof _,E;if(y&&b=="object")for(E in _)try{S.push(x(_[E],y-1))}catch{}return S.length?S:b=="string"?_:_+"\0"}function m(_,y){for(var S=_+"",b,E=0;E<S.length;)y[u&E]=u&(b^=y[u&E]*19)+S.charCodeAt(E++);return v(y)}function d(){try{var _;return h&&(_=h.randomBytes)?_=_(r):(_=new Uint8Array(r),(n.crypto||n.msCrypto).getRandomValues(_)),v(_)}catch{var y=n.navigator,S=y&&y.plugins;return[+new Date,n,S,n.screen,v(t)]}}function v(_){return String.fromCharCode.apply(0,_)}if(m(e.random(),t),typeof Vh=="object"&&Vh.exports){Vh.exports=f;try{h=Ly()}catch{}}else typeof define=="function"&&define.amd?define(function(){return f}):e["seed"+s]=f})(typeof self<"u"?self:Uy,[],Math)});var zy=Hn((f$,By)=>{var h2=Ty(),f2=Ay(),p2=Cy(),d2=Ny(),m2=Py(),g2=ky(),Mo=Oy();Mo.alea=h2;Mo.xor128=f2;Mo.xorwow=p2;Mo.xorshift7=d2;Mo.xor4096=m2;Mo.tychei=g2;By.exports=Mo});var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Um=0,Gf=1,Om=2;var Vf=1,Bm=2,gr=3,Ur=0,gn=1,Kn=2,Br=0,Pi=1,Hf=2,Wf=3,$f=4,zm=5,oi=100,Gm=101,Vm=102,Hm=103,Wm=104,$m=200,qm=201,Xm=202,Km=203,ol=204,sl=205,Ym=206,Zm=207,Jm=208,jm=209,Qm=210,tg=211,eg=212,ng=213,rg=214,Rl=0,Nl=1,Dl=2,Fi=3,Pl=4,Fl=5,kl=6,Ll=7,qf=0,ig=1,og=2,zr=0,sg=1,ag=2,cg=3,lg=4,ug=5,hg=6,fg=7;var Xf=300,zi=301,Gi=302,Ul=303,Ol=304,Aa=306,al=1e3,ii=1001,cl=1002,qn=1003,pg=1004;var Ia=1005;var cr=1006,Bl=1007;var fi=1008;var xr=1009,Kf=1010,Yf=1011,Jo=1012,zl=1013,pi=1014,yr=1015,jo=1016,Gl=1017,Vl=1018,Qo=1020,Zf=35902,Jf=35899,jf=1021,Qf=1022,Yn=1023,Ho=1026,ts=1027,tp=1028,Hl=1029,ep=1030,Wl=1031;var $l=1033,Ca=33776,Ra=33777,Na=33778,Da=33779,ql=35840,Xl=35841,Kl=35842,Yl=35843,Zl=36196,Jl=37492,jl=37496,Ql=37808,tu=37809,eu=37810,nu=37811,ru=37812,iu=37813,ou=37814,su=37815,au=37816,cu=37817,lu=37818,uu=37819,hu=37820,fu=37821,pu=36492,du=36494,mu=36495,gu=36283,xu=36284,yu=36285,_u=36286;var la=2300,ll=2301,il=2302,kf=2400,Lf=2401,Uf=2402;var dg=3200,mg=3201;var gg=0,xg=1,Gr="",Dn="srgb",ki="srgb-linear",ua="linear",Ee="srgb";var Ni=7680;var Of=519,yg=512,_g=513,vg=514,np=515,Sg=516,bg=517,Mg=518,wg=519,Bf=35044;var rp="300 es",ar=2e3,ha=2001;var pr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){let r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){let r=this._listeners;if(r===void 0)return;let i=r[t];if(i!==void 0){let o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let r=e[t.type];if(r!==void 0){t.target=this;let i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=1234567,aa=Math.PI/180,Wo=180/Math.PI;function es(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function ip(n,t){return(n%t+t)%t}function vT(n,t,e,r,i){return r+(n-t)*(i-r)/(e-t)}function ST(n,t,e){return n!==t?(e-n)/(t-n):0}function ca(n,t,e){return(1-e)*n+e*t}function bT(n,t,e,r){return ca(n,t,1-Math.exp(-e*r))}function MT(n,t=1){return t-Math.abs(ip(n,t*2)-t)}function wT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function TT(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ET(n,t){return n+Math.floor(Math.random()*(t-n+1))}function AT(n,t){return n+Math.random()*(t-n)}function IT(n){return n*(.5-Math.random())}function CT(n){n!==void 0&&(xm=n);let t=xm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function RT(n){return n*aa}function NT(n){return n*Wo}function DT(n){return(n&n-1)===0&&n!==0}function PT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function FT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kT(n,t,e,r,i){let o=Math.cos,s=Math.sin,a=o(e/2),c=s(e/2),l=o((t+r)/2),u=s((t+r)/2),h=o((t-r)/2),f=s((t-r)/2),p=o((r-t)/2),g=s((r-t)/2);switch(i){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Go(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var op={DEG2RAD:aa,RAD2DEG:Wo,generateUUID:es,clamp:de,euclideanModulo:ip,mapLinear:vT,inverseLerp:ST,lerp:ca,damp:bT,pingpong:MT,smoothstep:wT,smootherstep:TT,randInt:ET,randFloat:AT,randFloatSpread:IT,seededRandom:CT,degToRad:RT,radToDeg:NT,isPowerOfTwo:DT,ceilPowerOfTwo:PT,floorPowerOfTwo:FT,setQuaternionFromProperEuler:kT,normalize:mn,denormalize:Go},ue=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,r=this.y,i=t.elements;return this.x=i[0]*e+i[3]*r+i[6],this.y=i[1]*e+i[4]*r+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let r=this.dot(t)/e;return Math.acos(de(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let r=Math.cos(e),i=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*r-s*i+t.x,this.y=o*i+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xn=class{constructor(t=0,e=0,r=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=i}static slerpFlat(t,e,r,i,o,s,a){let c=r[i+0],l=r[i+1],u=r[i+2],h=r[i+3],f=o[s+0],p=o[s+1],g=o[s+2],x=o[s+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==f||l!==p||u!==g){let m=1-a,d=c*f+l*p+u*g+h*x,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let S=Math.sqrt(_),b=Math.atan2(S,d*v);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}let y=a*v;if(c=c*m+f*y,l=l*m+p*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,r,i,o,s){let a=r[i],c=r[i+1],l=r[i+2],u=r[i+3],h=o[s],f=o[s+1],p=o[s+2],g=o[s+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,i){return this._x=t,this._y=e,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let r=t._x,i=t._y,o=t._z,s=t._order,a=Math.cos,c=Math.sin,l=a(r/2),u=a(i/2),h=a(o/2),f=c(r/2),p=c(i/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let r=e/2,i=Math.sin(r);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,r=e[0],i=e[4],o=e[8],s=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=r+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(s-i)*p}else if(r>a&&r>h){let p=2*Math.sqrt(1+r-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(o+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-r-h);this._w=(o-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-r-a);this._w=(s-i)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let r=this.angleTo(t);if(r===0)return this;let i=Math.min(1,e/r);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let r=t._x,i=t._y,o=t._z,s=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=r*u+s*a+i*l-o*c,this._y=i*u+s*c+o*a-r*l,this._z=o*u+s*l+r*c-i*a,this._w=s*u-r*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let r=this._x,i=this._y,o=this._z,s=this._w,a=s*t._w+r*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*s+e*this._w,this._x=p*r+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=i*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class n{constructor(t=0,e=0,r=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ym.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ym.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,r=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6]*i,this.y=o[1]*e+o[4]*r+o[7]*i,this.z=o[2]*e+o[5]*r+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,r=this.y,i=this.z,o=t.elements,s=1/(o[3]*e+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*e+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*e+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(t){let e=this.x,r=this.y,i=this.z,o=t.x,s=t.y,a=t.z,c=t.w,l=2*(s*i-a*r),u=2*(a*e-o*i),h=2*(o*r-s*e);return this.x=e+c*l+s*h-a*u,this.y=r+c*u+a*l-o*h,this.z=i+c*h+o*u-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,r=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*r+o[8]*i,this.y=o[1]*e+o[5]*r+o[9]*i,this.z=o[2]*e+o[6]*r+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let r=t.x,i=t.y,o=t.z,s=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*s-r*c,this.z=r*a-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return pf.copy(this).projectOnVector(t),this.sub(pf)}reflect(t){return this.sub(pf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let r=this.dot(t)/e;return Math.acos(de(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y,i=this.z-t.z;return e*e+r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){let i=Math.sin(e)*t;return this.x=i*Math.sin(r),this.y=Math.cos(e)*t,this.z=i*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pf=new K,ym=new Xn,ae=class n{constructor(t,e,r,i,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,i,o,s,a,c,l)}set(t,e,r,i,o,s,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let r=t.elements,i=e.elements,o=this.elements,s=r[0],a=r[3],c=r[6],l=r[1],u=r[4],h=r[7],f=r[2],p=r[5],g=r[8],x=i[0],m=i[3],d=i[6],v=i[1],_=i[4],y=i[7],S=i[2],b=i[5],E=i[8];return o[0]=s*x+a*v+c*S,o[3]=s*m+a*_+c*b,o[6]=s*d+a*y+c*E,o[1]=l*x+u*v+h*S,o[4]=l*m+u*_+h*b,o[7]=l*d+u*y+h*E,o[2]=f*x+p*v+g*S,o[5]=f*m+p*_+g*b,o[8]=f*d+p*y+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*s*u-e*a*l-r*o*u+r*a*c+i*o*l-i*s*c}invert(){let t=this.elements,e=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*s-a*l,f=a*c-u*o,p=l*o-s*c,g=e*h+r*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(i*l-u*r)*x,t[2]=(a*r-i*s)*x,t[3]=f*x,t[4]=(u*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=p*x,t[7]=(r*c-l*e)*x,t[8]=(s*e-r*o)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,i,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(r*c,r*l,-r*(c*s+l*a)+s+t,-i*l,i*c,-i*(-l*s+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(df.makeScale(t,e)),this}rotate(t){return this.premultiply(df.makeRotation(-t)),this}translate(t,e){return this.premultiply(df.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,r=t.elements;for(let i=0;i<9;i++)if(e[i]!==r[i])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){let r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},df=new ae;function sp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tg(){let n=fa("canvas");return n.style.display="block",n}var _m={};function $o(n){n in _m||(_m[n]=!0,console.warn(n))}function Eg(n,t,e){return new Promise(function(r,i){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:r()}}setTimeout(o,e)})}var vm=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LT(){let n={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Ee&&(i.r=Lr(i.r),i.g=Lr(i.g),i.b=Lr(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ee&&(i.r=Vo(i.r),i.g=Vo(i.g),i.b=Vo(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gr?ua:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return $o("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return $o("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ki]:{primaries:t,whitePoint:r,transfer:ua,toXYZ:vm,fromXYZ:Sm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:r,transfer:Ee,toXYZ:vm,fromXYZ:Sm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}var Se=LT();function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Co,ul=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Co===void 0&&(Co=fa("canvas")),Co.width=t.width,Co.height=t.height;let i=Co.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),r=Co}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);let i=r.getImageData(0,0,t.width,t.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=Lr(o[s]/255)*255;return r.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Lr(e[r]/255)*255):e[r]=Lr(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},UT=0,qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(mf(i[s].image)):o.push(mf(i[s]))}else o=mf(i);r.url=o}return e||(t.images[this.uuid]=r),r}};function mf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ul.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var OT=0,gf=new K,Fn=class n extends pr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,r=ii,i=ii,o=cr,s=fi,a=Yn,c=xr,l=n.DEFAULT_ANISOTROPY,u=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=es(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let r=t[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&r&&i.isVector2&&r.isVector2||i&&r&&i.isVector3&&r.isVector3||i&&r&&i.isMatrix3&&r.isMatrix3?i.copy(r):this[e]=r}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case al:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case al:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Xf;Fn.DEFAULT_ANISOTROPY=1;var We=class n{constructor(t=0,e=0,r=0,i=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,i){return this.x=t,this.y=e,this.z=r,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,r=this.y,i=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*e+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*e+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*e+s[7]*r+s[11]*i+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,i,o,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,y=(p+1)/2,S=(d+1)/2,b=(u+f)/4,E=(h+x)/4,R=(g+m)/4;return _>y&&_>S?_<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(_),i=b/r,o=E/r):y>S?y<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),r=b/i,o=R/i):S<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(S),r=E/o,i=R/o),this.set(r,i,o,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends pr{constructor(t=1,e=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=r.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);let i={width:t,height:e,depth:r.depth},o=new Fn(i);this.textures=[];let s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){let e={minFilter:cr,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=r,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dr=class extends hl{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}},pa=class extends Fn{constructor(t=null,e=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Fn{constructor(t=null,e=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(ir.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(ir.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let r=ir.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let r=t.geometry;if(r!==void 0){let o=r.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,ir):ir.fromBufferAttribute(o,s),ir.applyMatrix4(t.matrixWorld),this.expandByPoint(ir);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Oc.copy(r.boundingBox)),Oc.applyMatrix4(t.matrixWorld),this.union(Oc)}let i=t.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ir),ir.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(na),Bc.subVectors(this.max,na),Ro.subVectors(t.a,na),No.subVectors(t.b,na),Do.subVectors(t.c,na),Jr.subVectors(No,Ro),jr.subVectors(Do,No),Ai.subVectors(Ro,Do);let e=[0,-Jr.z,Jr.y,0,-jr.z,jr.y,0,-Ai.z,Ai.y,Jr.z,0,-Jr.x,jr.z,0,-jr.x,Ai.z,0,-Ai.x,-Jr.y,Jr.x,0,-jr.y,jr.x,0,-Ai.y,Ai.x,0];return!xf(e,Ro,No,Do,Bc)||(e=[1,0,0,0,1,0,0,0,1],!xf(e,Ro,No,Do,Bc))?!1:(zc.crossVectors(Jr,jr),e=[zc.x,zc.y,zc.z],xf(e,Ro,No,Do,Bc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ir).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ir).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Nr=[new K,new K,new K,new K,new K,new K,new K,new K],ir=new K,Oc=new si,Ro=new K,No=new K,Do=new K,Jr=new K,jr=new K,Ai=new K,na=new K,Bc=new K,zc=new K,Ii=new K;function xf(n,t,e,r,i){for(let o=0,s=n.length-3;o<=s;o+=3){Ii.fromArray(n,o);let a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),c=t.dot(Ii),l=e.dot(Ii),u=r.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var BT=new si,ra=new K,yf=new K,Li=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let r=this.center;e!==void 0?r.copy(e):BT.setFromPoints(t).getCenter(r);let i=0;for(let o=0,s=t.length;o<s;o++)i=Math.max(i,r.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ra.subVectors(t,this.center);let e=ra.lengthSq();if(e>this.radius*this.radius){let r=Math.sqrt(e),i=(r-this.radius)*.5;this.center.addScaledVector(ra,i/r),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ra.copy(t.center).add(yf)),this.expandByPoint(ra.copy(t.center).sub(yf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dr=new K,_f=new K,Gc=new K,Qr=new K,vf=new K,Vc=new K,Sf=new K,Ui=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dr.copy(this.origin).addScaledVector(this.direction,e),Dr.distanceToSquared(t))}distanceSqToSegment(t,e,r,i){_f.copy(t).add(e).multiplyScalar(.5),Gc.copy(e).sub(t).normalize(),Qr.copy(this.origin).sub(_f);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Gc),a=Qr.dot(this.direction),c=-Qr.dot(Gc),l=Qr.lengthSq(),u=Math.abs(1-s*s),h,f,p,g;if(u>0)if(h=s*c-a,f=s*a-c,g=o*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+s*f+2*a)+f*(s*h+f+2*c)+l}else f=o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*c)+l;else f=-o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+l);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_f).addScaledVector(Gc,f),p}intersectSphere(t,e){Dr.subVectors(t.center,this.origin);let r=Dr.dot(this.direction),i=Dr.dot(Dr)-r*r,o=t.radius*t.radius;if(i>o)return null;let s=Math.sqrt(o-i),a=r-s,c=r+s;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){let r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,i,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(r=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(r=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(o=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(o=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),r>c||a>i)||((a>r||r!==r)&&(r=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,e)}intersectsBox(t){return this.intersectBox(t,Dr)!==null}intersectTriangle(t,e,r,i,o){vf.subVectors(e,t),Vc.subVectors(r,t),Sf.crossVectors(vf,Vc);let s=this.direction.dot(Sf),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Qr.subVectors(this.origin,t);let c=a*this.direction.dot(Vc.crossVectors(Qr,Vc));if(c<0)return null;let l=a*this.direction.dot(vf.cross(Qr));if(l<0||c+l>s)return null;let u=-a*Qr.dot(Sf);return u<0?null:this.at(u/s,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class n{constructor(t,e,r,i,o,s,a,c,l,u,h,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,i,o,s,a,c,l,u,h,f,p,g,x,m)}set(t,e,r,i,o,s,a,c,l,u,h,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=r,d[12]=i,d[1]=o,d[5]=s,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){let e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,r=t.elements,i=1/Po.setFromMatrixColumn(t,0).length(),o=1/Po.setFromMatrixColumn(t,1).length(),s=1/Po.setFromMatrixColumn(t,2).length();return e[0]=r[0]*i,e[1]=r[1]*i,e[2]=r[2]*i,e[3]=0,e[4]=r[4]*o,e[5]=r[5]*o,e[6]=r[6]*o,e[7]=0,e[8]=r[8]*s,e[9]=r[9]*s,e[10]=r[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,r=t.x,i=t.y,o=t.z,s=Math.cos(r),a=Math.sin(r),c=Math.cos(i),l=Math.sin(i),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){let f=s*u,p=s*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=s*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,g=l*u,x=l*h;e[0]=f+x*a,e[4]=g*a-p,e[8]=s*l,e[1]=s*h,e[5]=s*u,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=s*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,g=l*u,x=l*h;e[0]=f-x*a,e[4]=-s*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=s*u,e[9]=x-f*a,e[2]=-s*l,e[6]=a,e[10]=s*c}else if(t.order==="ZYX"){let f=s*u,p=s*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=s*c}else if(t.order==="YZX"){let f=s*c,p=s*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=s*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=s*c,p=s*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=s*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zT,t,GT)}lookAt(t,e,r){let i=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ti.crossVectors(r,Rn),ti.lengthSq()===0&&(Math.abs(r.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ti.crossVectors(r,Rn)),ti.normalize(),Hc.crossVectors(Rn,ti),i[0]=ti.x,i[4]=Hc.x,i[8]=Rn.x,i[1]=ti.y,i[5]=Hc.y,i[9]=Rn.y,i[2]=ti.z,i[6]=Hc.z,i[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let r=t.elements,i=e.elements,o=this.elements,s=r[0],a=r[4],c=r[8],l=r[12],u=r[1],h=r[5],f=r[9],p=r[13],g=r[2],x=r[6],m=r[10],d=r[14],v=r[3],_=r[7],y=r[11],S=r[15],b=i[0],E=i[4],R=i[8],w=i[12],M=i[1],C=i[5],P=i[9],F=i[13],L=i[2],U=i[6],O=i[10],V=i[14],k=i[3],W=i[7],j=i[11],et=i[15];return o[0]=s*b+a*M+c*L+l*k,o[4]=s*E+a*C+c*U+l*W,o[8]=s*R+a*P+c*O+l*j,o[12]=s*w+a*F+c*V+l*et,o[1]=u*b+h*M+f*L+p*k,o[5]=u*E+h*C+f*U+p*W,o[9]=u*R+h*P+f*O+p*j,o[13]=u*w+h*F+f*V+p*et,o[2]=g*b+x*M+m*L+d*k,o[6]=g*E+x*C+m*U+d*W,o[10]=g*R+x*P+m*O+d*j,o[14]=g*w+x*F+m*V+d*et,o[3]=v*b+_*M+y*L+S*k,o[7]=v*E+_*C+y*U+S*W,o[11]=v*R+_*P+y*O+S*j,o[15]=v*w+_*F+y*V+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],r=t[4],i=t[8],o=t[12],s=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+o*c*h-i*l*h-o*a*f+r*l*f+i*a*p-r*c*p)+x*(+e*c*p-e*l*f+o*s*f-i*s*p+i*l*u-o*c*u)+m*(+e*l*h-e*a*p-o*s*h+r*s*p+o*a*u-r*l*u)+d*(-i*a*u-e*c*h+e*a*f+i*s*h-r*s*f+r*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=r),this}invert(){let t=this.elements,e=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=h*m*l-x*f*l+x*c*p-a*m*p-h*c*d+a*f*d,_=g*f*l-u*m*l-g*c*p+s*m*p+u*c*d-s*f*d,y=u*x*l-g*h*l+g*a*p-s*x*p-u*a*d+s*h*d,S=g*h*c-u*x*c-g*a*f+s*x*f+u*a*m-s*h*m,b=e*v+r*_+i*y+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=v*E,t[1]=(x*f*o-h*m*o-x*i*p+r*m*p+h*i*d-r*f*d)*E,t[2]=(a*m*o-x*c*o+x*i*l-r*m*l-a*i*d+r*c*d)*E,t[3]=(h*c*o-a*f*o-h*i*l+r*f*l+a*i*p-r*c*p)*E,t[4]=_*E,t[5]=(u*m*o-g*f*o+g*i*p-e*m*p-u*i*d+e*f*d)*E,t[6]=(g*c*o-s*m*o-g*i*l+e*m*l+s*i*d-e*c*d)*E,t[7]=(s*f*o-u*c*o+u*i*l-e*f*l-s*i*p+e*c*p)*E,t[8]=y*E,t[9]=(g*h*o-u*x*o-g*r*p+e*x*p+u*r*d-e*h*d)*E,t[10]=(s*x*o-g*a*o+g*r*l-e*x*l-s*r*d+e*a*d)*E,t[11]=(u*a*o-s*h*o-u*r*l+e*h*l+s*r*p-e*a*p)*E,t[12]=S*E,t[13]=(u*x*i-g*h*i+g*r*f-e*x*f-u*r*m+e*h*m)*E,t[14]=(g*a*i-s*x*i-g*r*c+e*x*c+s*r*m-e*a*m)*E,t[15]=(s*h*i-u*a*i+u*r*c-e*h*c-s*r*f+e*a*f)*E,this}scale(t){let e=this.elements,r=t.x,i=t.y,o=t.z;return e[0]*=r,e[4]*=i,e[8]*=o,e[1]*=r,e[5]*=i,e[9]*=o,e[2]*=r,e[6]*=i,e[10]*=o,e[3]*=r,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,i))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let r=Math.cos(e),i=Math.sin(e),o=1-r,s=t.x,a=t.y,c=t.z,l=o*s,u=o*a;return this.set(l*s+r,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+r,u*c-i*s,0,l*c-i*a,u*c+i*s,o*c*c+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,i,o,s){return this.set(1,r,o,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,r){let i=this.elements,o=e._x,s=e._y,a=e._z,c=e._w,l=o+o,u=s+s,h=a+a,f=o*l,p=o*u,g=o*h,x=s*u,m=s*h,d=a*h,v=c*l,_=c*u,y=c*h,S=r.x,b=r.y,E=r.z;return i[0]=(1-(x+d))*S,i[1]=(p+y)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(f+d))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+_)*E,i[9]=(m-v)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,r){let i=this.elements,o=Po.set(i[0],i[1],i[2]).length(),s=Po.set(i[4],i[5],i[6]).length(),a=Po.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],or.copy(this);let l=1/o,u=1/s,h=1/a;return or.elements[0]*=l,or.elements[1]*=l,or.elements[2]*=l,or.elements[4]*=u,or.elements[5]*=u,or.elements[6]*=u,or.elements[8]*=h,or.elements[9]*=h,or.elements[10]*=h,e.setFromRotationMatrix(or),r.x=o,r.y=s,r.z=a,this}makePerspective(t,e,r,i,o,s,a=ar,c=!1){let l=this.elements,u=2*o/(e-t),h=2*o/(r-i),f=(e+t)/(e-t),p=(r+i)/(r-i),g,x;if(c)g=o/(s-o),x=s*o/(s-o);else if(a===ar)g=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===ha)g=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,r,i,o,s,a=ar,c=!1){let l=this.elements,u=2/(e-t),h=2/(r-i),f=-(e+t)/(e-t),p=-(r+i)/(r-i),g,x;if(c)g=1/(s-o),x=s/(s-o);else if(a===ar)g=-2/(s-o),x=-(s+o)/(s-o);else if(a===ha)g=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,r=t.elements;for(let i=0;i<16;i++)if(e[i]!==r[i])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){let r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}},Po=new K,or=new Ke,zT=new K(0,0,0),GT=new K(1,1,1),ti=new K,Hc=new K,Rn=new K,bm=new Ke,Mm=new Xn,mr=class n{constructor(t=0,e=0,r=0,i=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,i=this._order){return this._x=t,this._y=e,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){let i=t.elements,o=i[0],s=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-de(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return bm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bm,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mr.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},VT=0,wm=new K,Fo=new Xn,Pr=new Ke,Wc=new K,ia=new K,HT=new K,WT=new Xn,Tm=new K(1,0,0),Em=new K(0,1,0),Am=new K(0,0,1),Im={type:"added"},$T={type:"removed"},ko={type:"childadded",child:null},bf={type:"childremoved",child:null},kn=class n extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new K,e=new mr,r=new Xn,i=new K(1,1,1);function o(){r.setFromEuler(e,!1)}function s(){e.setFromQuaternion(r,void 0,!1)}e._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ae}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fo.setFromAxisAngle(t,e),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(t,e){return Fo.setFromAxisAngle(t,e),this.quaternion.premultiply(Fo),this}rotateX(t){return this.rotateOnAxis(Tm,t)}rotateY(t){return this.rotateOnAxis(Em,t)}rotateZ(t){return this.rotateOnAxis(Am,t)}translateOnAxis(t,e){return wm.copy(t).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tm,t)}translateY(t){return this.translateOnAxis(Em,t)}translateZ(t){return this.translateOnAxis(Am,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?Wc.copy(t):Wc.set(t,e,r);let i=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(ia,Wc,this.up):Pr.lookAt(Wc,ia,this.up),this.quaternion.setFromRotationMatrix(Pr),i&&(Pr.extractRotation(i.matrixWorld),Fo.setFromRotationMatrix(Pr),this.quaternion.premultiply(Fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Im),ko.child=t,this.dispatchEvent(ko),ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($T),bf.child=t,this.dispatchEvent(bf),bf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Im),ko.child=t,this.dispatchEvent(ko),ko.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,i=this.children.length;r<i;r++){let s=this.children[r].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);let i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,HT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,WT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let r=0,i=e.length;r<i;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let r=0,i=e.length;r<i;r++)e[r].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let r=0,i=e.length;r<i;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){let a=s(t.geometries),c=s(t.materials),l=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),g=s(t.nodes);a.length>0&&(r.geometries=a),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=i,r;function s(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){let i=t.children[r];this.add(i.clone())}return this}};kn.DEFAULT_UP=new K(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sr=new K,Fr=new K,Mf=new K,kr=new K,Lo=new K,Uo=new K,Cm=new K,wf=new K,Tf=new K,Ef=new K,Af=new We,If=new We,Cf=new We,ri=class n{constructor(t=new K,e=new K,r=new K){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,i){i.subVectors(r,e),sr.subVectors(t,e),i.cross(sr);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,r,i,o){sr.subVectors(i,e),Fr.subVectors(r,e),Mf.subVectors(t,e);let s=sr.dot(sr),a=sr.dot(Fr),c=sr.dot(Mf),l=Fr.dot(Fr),u=Fr.dot(Mf),h=s*l-a*a;if(h===0)return o.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(t,e,r,i){return this.getBarycoord(t,e,r,i,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(t,e,r,i,o,s,a,c){return this.getBarycoord(t,e,r,i,kr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,kr.x),c.addScaledVector(s,kr.y),c.addScaledVector(a,kr.z),c)}static getInterpolatedAttribute(t,e,r,i,o,s){return Af.setScalar(0),If.setScalar(0),Cf.setScalar(0),Af.fromBufferAttribute(t,e),If.fromBufferAttribute(t,r),Cf.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(Af,o.x),s.addScaledVector(If,o.y),s.addScaledVector(Cf,o.z),s}static isFrontFacing(t,e,r,i){return sr.subVectors(r,e),Fr.subVectors(t,e),sr.cross(Fr).dot(i)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,i){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,r,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sr.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),sr.cross(Fr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,i,o){return n.getInterpolation(t,this.a,this.b,this.c,e,r,i,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let r=this.a,i=this.b,o=this.c,s,a;Lo.subVectors(i,r),Uo.subVectors(o,r),wf.subVectors(t,r);let c=Lo.dot(wf),l=Uo.dot(wf);if(c<=0&&l<=0)return e.copy(r);Tf.subVectors(t,i);let u=Lo.dot(Tf),h=Uo.dot(Tf);if(u>=0&&h<=u)return e.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),e.copy(r).addScaledVector(Lo,s);Ef.subVectors(t,o);let p=Lo.dot(Ef),g=Uo.dot(Ef);if(g>=0&&p<=g)return e.copy(o);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(r).addScaledVector(Uo,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Cm.subVectors(o,i),a=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(Cm,a);let d=1/(m+x+f);return s=x*d,a=f*d,e.copy(r).addScaledVector(Lo,s).addScaledVector(Uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},$c={h:0,s:0,l:0};function Rf(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var xe=class{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,r,i=Se.workingColorSpace){return this.r=t,this.g=e,this.b=r,Se.colorSpaceToWorking(this,i),this}setHSL(t,e,r,i=Se.workingColorSpace){if(t=ip(t,1),e=de(e,0,1),r=de(r,0,1),e===0)this.r=this.g=this.b=r;else{let o=r<=.5?r*(1+e):r+e-r*e,s=2*r-o;this.r=Rf(s,o,t+1/3),this.g=Rf(s,o,t),this.b=Rf(s,o,t-1/3)}return Se.colorSpaceToWorking(this,i),this}setStyle(t,e=Dn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){let r=Ag[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}copyLinearToSRGB(t){return this.r=Vo(t.r),this.g=Vo(t.g),this.b=Vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Se.workingToColorSpace(an.copy(this),t),Math.round(de(an.r*255,0,255))*65536+Math.round(de(an.g*255,0,255))*256+Math.round(de(an.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(an.copy(this),e);let r=an.r,i=an.g,o=an.b,s=Math.max(r,i,o),a=Math.min(r,i,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let h=s-a;switch(l=u<=.5?h/(s+a):h/(2-s-a),s){case r:c=(i-o)/h+(i<o?6:0);break;case i:c=(o-r)/h+2;break;case o:c=(r-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Dn){Se.workingToColorSpace(an.copy(this),t);let e=an.r,r=an.g,i=an.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(t,e,r){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL($c);let r=ca(ei.h,$c.h,e),i=ca(ei.s,$c.s,e),o=ca(ei.l,$c.l,e);return this.setHSL(r,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,r=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*r+o[6]*i,this.g=o[1]*e+o[4]*r+o[7]*i,this.b=o[2]*e+o[5]*r+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new xe;xe.NAMES=Ag;var qT=0,ai=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Pi,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=sl,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[e]=r}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ol&&(r.blendSrc=this.blendSrc),this.blendDst!==sl&&(r.blendDst=this.blendDst),this.blendEquation!==oi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(e){let o=i(t.textures),s=i(t.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,r=null;if(e!==null){let i=e.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=e[o].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Or=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new K,qc=new ue,XT=0,Pn=class{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XT++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=Bf,this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[r+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)qc.fromBufferAttribute(this,e),qc.applyMatrix3(t),this.setXY(e,qc.x,qc.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=Go(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=mn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Go(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Go(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Go(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Go(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),r=mn(r,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=i,this}setXYZW(t,e,r,i,o){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),r=mn(r,this.array),i=mn(i,this.array),o=mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bf&&(t.usage=this.usage),t}};var ma=class extends Pn{constructor(t,e,r){super(new Uint16Array(t),e,r)}};var ga=class extends Pn{constructor(t,e,r){super(new Uint32Array(t),e,r)}};var ln=class extends Pn{constructor(t,e,r){super(new Float32Array(t),e,r)}},KT=0,Wn=new Ke,Nf=new kn,Oo=new K,Nn=new si,oa=new si,en=new K,Ln=class n extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sp(t)?ga:ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let o=new ae().getNormalMatrix(t);r.applyNormalMatrix(o),r.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,r){return Wn.makeTranslation(t,e,r),this.applyMatrix4(Wn),this}scale(t,e,r){return Wn.makeScale(t,e,r),this.applyMatrix4(Wn),this}lookAt(t){return Nf.lookAt(t),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let r=[];for(let i=0,o=t.length;i<o;i++){let s=t[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ln(r,3))}else{let r=Math.min(t.length,e.count);for(let i=0;i<r;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,i=e.length;r<i;r++){let o=e[r];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Nn.min,oa.min),Nn.expandByPoint(en),en.addVectors(Nn.max,oa.max),Nn.expandByPoint(en)):(Nn.expandByPoint(oa.min),Nn.expandByPoint(oa.max))}Nn.getCenter(r);let i=0;for(let o=0,s=t.count;o<s;o++)en.fromBufferAttribute(t,o),i=Math.max(i,r.distanceToSquared(en));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(Oo.fromBufferAttribute(t,l),en.add(Oo)),i=Math.max(i,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<r.count;R++)a[R]=new K,c[R]=new K;let l=new K,u=new K,h=new K,f=new ue,p=new ue,g=new ue,x=new K,m=new K;function d(R,w,M){l.fromBufferAttribute(r,R),u.fromBufferAttribute(r,w),h.fromBufferAttribute(r,M),f.fromBufferAttribute(o,R),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,M),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(x),a[w].add(x),a[M].add(x),c[R].add(m),c[w].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,w=v.length;R<w;++R){let M=v[R],C=M.start,P=M.count;for(let F=C,L=C+P;F<L;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new K,y=new K,S=new K,b=new K;function E(R){S.fromBufferAttribute(i,R),b.copy(S);let w=a[R];_.copy(w),_.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(b,w);let C=y.dot(c[R])<0?-1:1;s.setXYZW(R,_.x,_.y,_.z,C)}for(let R=0,w=v.length;R<w;++R){let M=v[R],C=M.start,P=M.count;for(let F=C,L=C+P;F<L;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);let i=new K,o=new K,s=new K,a=new K,c=new K,l=new K,u=new K,h=new K;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),s.fromBufferAttribute(e,m),u.subVectors(s,o),h.subVectors(i,o),u.cross(h),a.fromBufferAttribute(r,g),c.fromBufferAttribute(r,x),l.fromBufferAttribute(r,m),a.add(u),c.add(u),l.add(u),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(x,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),u.subVectors(s,o),h.subVectors(i,o),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,r=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,r);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,r);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let r=this.attributes;for(let c in r){let l=r[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let o=t.morphAttributes;for(let l in o){let u=[],h=o[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,u=s.length;l<u;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rm=new Ke,Ci=new Ui,Xc=new Li,Nm=new K,Kc=new K,Yc=new K,Zc=new K,Df=new K,Jc=new K,Dm=new K,jc=new K,un=class extends kn{constructor(t=new Ln,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){let i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(o&&a){Jc.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],h=o[c];u!==0&&(Df.fromBufferAttribute(h,t),s?Jc.addScaledVector(Df,u):Jc.addScaledVector(Df.sub(e),u))}e.add(Jc)}return e}raycast(t,e){let r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(o),Ci.copy(t.ray).recast(t.near),!(Xc.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Xc,Nm)===null||Ci.origin.distanceToSquared(Nm)>(t.far-t.near)**2))&&(Rm.copy(o).invert(),Ci.copy(t.ray).applyMatrix4(Rm),!(r.boundingBox!==null&&Ci.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,r){let i,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=s[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,S=_;y<S;y+=3){let b=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);i=Qc(this,d,t,r,l,u,h,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=Qc(this,s,t,r,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=s[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,S=_;y<S;y+=3){let b=y,E=y+1,R=y+2;i=Qc(this,d,t,r,l,u,h,b,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,_=m+1,y=m+2;i=Qc(this,s,t,r,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function YT(n,t,e,r,i,o,s,a){let c;if(t.side===gn?c=r.intersectTriangle(s,o,i,!0,a):c=r.intersectTriangle(i,o,s,t.side===Ur,a),c===null)return null;jc.copy(a),jc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(jc);return l<e.near||l>e.far?null:{distance:l,point:jc.clone(),object:n}}function Qc(n,t,e,r,i,o,s,a,c,l){n.getVertexPosition(a,Kc),n.getVertexPosition(c,Yc),n.getVertexPosition(l,Zc);let u=YT(n,t,e,r,Kc,Yc,Zc,Dm);if(u){let h=new K;ri.getBarycoord(Dm,Kc,Yc,Zc,h),i&&(u.uv=ri.getInterpolatedAttribute(i,a,c,l,h,new ue)),o&&(u.uv1=ri.getInterpolatedAttribute(o,a,c,l,h,new ue)),s&&(u.normal=ri.getInterpolatedAttribute(s,a,c,l,h,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new K,materialIndex:0};ri.getNormal(Kc,Yc,Zc,f.normal),u.face=f,u.barycoord=h}return u}var Xo=class n extends Ln{constructor(t=1,e=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};let a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,r,e,t,s,o,0),g("z","y","x",1,-1,r,e,-t,s,o,1),g("x","z","y",1,1,t,r,e,i,s,2),g("x","z","y",1,-1,t,r,-e,i,s,3),g("x","y","z",1,-1,t,e,r,i,o,4),g("x","y","z",-1,-1,t,e,-r,i,o,5),this.setIndex(c),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function g(x,m,d,v,_,y,S,b,E,R,w){let M=y/E,C=S/R,P=y/2,F=S/2,L=b/2,U=E+1,O=R+1,V=0,k=0,W=new K;for(let j=0;j<O;j++){let et=j*C-F;for(let at=0;at<U;at++){let ct=at*M-P;W[x]=ct*v,W[m]=et*_,W[d]=L,l.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[d]=b>0?1:-1,u.push(W.x,W.y,W.z),h.push(at/E),h.push(1-j/R),V+=1}}for(let j=0;j<R;j++)for(let et=0;et<E;et++){let at=f+et+U*j,ct=f+et+U*(j+1),pt=f+(et+1)+U*(j+1),ut=f+(et+1)+U*j;c.push(at,ct,ut),c.push(ct,pt,ut),k+=6}a.addGroup(p,k,w),p+=k,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vi(n){let t={};for(let e in n){t[e]={};for(let r in n[e]){let i=n[e][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=i.clone():Array.isArray(i)?t[e][r]=i.slice():t[e][r]=i}}return t}function hn(n){let t={};for(let e=0;e<n.length;e++){let r=Vi(n[e]);for(let i in r)t[i]=r[i]}return t}function ZT(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ap(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var Ig={clone:Vi,merge:hn},JT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lr=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=ZT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}},xa=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new K,Pm=new ue,Fm=new ue,cn=class extends xa{constructor(t=50,e=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Pm,Fm),e.subVectors(Fm,Pm)}setViewOffset(t,e,r,i,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(aa*.5*this.fov)/this.zoom,r=2*e,i=this.aspect*r,o=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*i/c,e-=s.offsetY*r/l,i*=s.width/c,r*=s.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bo=-90,zo=1,pl=class extends kn{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Bo,zo,t,e);i.layers=this.layers,this.add(i);let o=new cn(Bo,zo,t,e);o.layers=this.layers,this.add(o);let s=new cn(Bo,zo,t,e);s.layers=this.layers,this.add(s);let a=new cn(Bo,zo,t,e);a.layers=this.layers,this.add(a);let c=new cn(Bo,zo,t,e);c.layers=this.layers,this.add(c);let l=new cn(Bo,zo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[r,i,o,s,a,c]=e;for(let l of e)this.remove(l);if(t===ar)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,i),t.render(e,o),t.setRenderTarget(r,1,i),t.render(e,s),t.setRenderTarget(r,2,i),t.render(e,a),t.setRenderTarget(r,3,i),t.render(e,c),t.setRenderTarget(r,4,i),t.render(e,l),r.texture.generateMipmaps=x,t.setRenderTarget(r,5,i),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,r.texture.needsPMREMUpdate=!0}},ya=class extends Fn{constructor(t=[],e=zi,r,i,o,s,a,c,l,u){super(t,e,r,i,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dl=class extends dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let r={width:t,height:t,depth:1},i=[r,r,r,r,r,r];this.texture=new ya(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xo(5,5,5),o=new lr({name:"CubemapFromEquirect",uniforms:Vi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:gn,blending:Br});o.uniforms.tEquirect.value=e;let s=new un(i,o),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=cr),new pl(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,r=!0,i=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,r,i);t.setRenderTarget(o)}},Di=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},QT={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let i=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,r),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,r),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let r=new Di;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}};var _a=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Pf=new K,tE=new K,eE=new ae,$n=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,i){return this.normal.set(t,e,r),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){let i=Pf.subVectors(r,e).cross(tE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let r=t.delta(Pf),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let r=e||eE.getNormalMatrix(t),i=this.coplanarPoint(Pf).applyMatrix4(t),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Li,nE=new ue(.5,.5),tl=new K,va=class{constructor(t=new $n,e=new $n,r=new $n,i=new $n,o=new $n,s=new $n){this.planes=[t,e,r,i,o,s]}set(t,e,r,i,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=ar,r=!1){let i=this.planes,o=t.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],h=o[5],f=o[6],p=o[7],g=o[8],x=o[9],m=o[10],d=o[11],v=o[12],_=o[13],y=o[14],S=o[15];if(i[0].setComponents(l-s,p-u,d-g,S-v).normalize(),i[1].setComponents(l+s,p+u,d+g,S+v).normalize(),i[2].setComponents(l+a,p+h,d+x,S+_).normalize(),i[3].setComponents(l-a,p-h,d-x,S-_).normalize(),r)i[4].setComponents(c,f,m,y).normalize(),i[5].setComponents(l-c,p-f,d-m,S-y).normalize();else if(i[4].setComponents(l-c,p-f,d-m,S-y).normalize(),e===ar)i[5].setComponents(l+c,p+f,d+m,S+y).normalize();else if(e===ha)i[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);let e=nE.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,r=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let r=0;r<6;r++){let i=e[r];if(tl.x=i.normal.x>0?t.max.x:t.min.x,tl.y=i.normal.y>0?t.max.y:t.min.y,tl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yo=class extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ml=new K,gl=new K,km=new Ke,sa=new Ui,el=new Li,Ff=new K,Lm=new K,Sa=class extends kn{constructor(t=new Ln,e=new Yo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,r=[0];for(let i=1,o=e.count;i<o;i++)ml.fromBufferAttribute(e,i-1),gl.fromBufferAttribute(e,i),r[i]=r[i-1],r[i]+=ml.distanceTo(gl);t.setAttribute("lineDistance",new ln(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let r=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),el.copy(r.boundingSphere),el.applyMatrix4(i),el.radius+=o,t.ray.intersectsSphere(el)===!1)return;km.copy(i).invert(),sa.copy(t.ray).applyMatrix4(km);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){let p=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let x=p,m=g-1;x<m;x+=l){let d=u.getX(x),v=u.getX(x+1),_=nl(this,t,sa,c,d,v,x);_&&e.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),d=nl(this,t,sa,c,x,m,g-1);d&&e.push(d)}}else{let p=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let x=p,m=g-1;x<m;x+=l){let d=nl(this,t,sa,c,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){let x=nl(this,t,sa,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){let i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function nl(n,t,e,r,i,o,s){let a=n.geometry.attributes.position;if(ml.fromBufferAttribute(a,i),gl.fromBufferAttribute(a,o),e.distanceSqToSegment(ml,gl,Ff,Lm)>r)return;Ff.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ff);if(!(l<t.near||l>t.far))return{distance:l,point:Lm.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var ba=class extends Fn{constructor(t,e,r=pi,i,o,s,a=qn,c=qn,l,u=Ho,h=1){if(u!==Ho&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,i,o,s,a,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ma=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Oi=class n extends Ln{constructor(t=1,e=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:i};let o=t/2,s=e/2,a=Math.floor(r),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let v=d*f-s;for(let _=0;_<l;_++){let y=_*h-o;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let _=v+l*d,y=v+l*(d+1),S=v+1+l*(d+1),b=v+1+l*d;p.push(_,y,b),p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var wa=class n extends Ln{constructor(t=1,e=32,r=16,i=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:r,phiStart:i,phiLength:o,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),r=Math.max(2,Math.floor(r));let c=Math.min(s+a,Math.PI),l=0,u=[],h=new K,f=new K,p=[],g=[],x=[],m=[];for(let d=0;d<=r;d++){let v=[],_=d/r,y=0;d===0&&s===0?y=.5/e:d===r&&c===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let b=S/e;h.x=-t*Math.cos(i+b*o)*Math.sin(s+_*a),h.y=t*Math.cos(s+_*a),h.z=t*Math.sin(i+b*o)*Math.sin(s+_*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+y,1-_),v.push(l++)}u.push(v)}for(let d=0;d<r;d++)for(let v=0;v<e;v++){let _=u[d][v+1],y=u[d][v],S=u[d+1][v],b=u[d+1][v+1];(d!==0||s>0)&&p.push(_,y,b),(d!==r-1||c<Math.PI)&&p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xl=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rl(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function rE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Bi=class{constructor(t,e,r,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(r),this.sampleValues=e,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,r=this._cachedIndex,i=e[r],o=e[r-1];n:{t:{let s;e:{r:if(!(t<i)){for(let a=r+2;;){if(i===void 0){if(t<o)break r;return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===a)break;if(o=i,i=e[++r],t<i)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(r=2,o=a);for(let c=r-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===c)break;if(i=o,o=e[--r-1],t>=o)break t}s=r,r=0;break e}break n}for(;r<s;){let a=r+s>>>1;t<e[a]?s=a:r=a+1}if(i=e[r],o=e[r-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=e.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,o,i)}return this.interpolate_(r,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,r=this.sampleValues,i=this.valueSize,o=t*i;for(let s=0;s!==i;++s)e[s]=r[o+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends Bi{constructor(t,e,r,i){super(t,e,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kf,endingEnd:kf}}intervalChanged_(t,e,r){let i=this.parameterPositions,o=t-2,s=t+1,a=i[o],c=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Lf:o=t,a=2*e-r;break;case Uf:o=i.length-2,a=e+i[o]-i[o+1];break;default:o=t,a=r}if(c===void 0)switch(this.getSettings_().endingEnd){case Lf:s=t,c=2*r-e;break;case Uf:s=1,c=r+i[1]-i[0];break;default:s=t-1,c=e}let l=(r-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-r),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(t,e,r,i){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(r-e)/(i-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let S=0;S!==a;++S)o[S]=d*s[u+S]+v*s[l+S]+_*s[c+S]+y*s[h+S];return o}},vl=class extends Bi{constructor(t,e,r,i){super(t,e,r,i)}interpolate_(t,e,r,i){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(r-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)o[f]=s[l+f]*h+s[c+f]*u;return o}},Sl=class extends Bi{constructor(t,e,r,i){super(t,e,r,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,r,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rl(e,this.TimeBufferType),this.values=rl(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,r;if(e.toJSON!==this.toJSON)r=e.toJSON(t);else{r={name:t.name,times:rl(t.times,Array),values:rl(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(r.interpolation=i)}return r.type=t.ValueTypeName,r}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case la:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let r=0,i=e.length;r!==i;++r)e[r]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let r=0,i=e.length;r!==i;++r)e[r]*=t}return this}trim(t,e){let r=this.times,i=r.length,o=0,s=i-1;for(;o!==i&&r[o]<t;)++o;for(;s!==-1&&r[s]>e;)--s;if(++s,o!==0||s!==i){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=r.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let r=this.times,i=this.values,o=r.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let c=r[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,s),t=!1;break}s=c}if(i!==void 0&&rE(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===il,o=t.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let h=a*r,f=h-r,p=h+r;for(let g=0;g!==r;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==s){t[s]=t[a];let h=a*r,f=s*r;for(let p=0;p!==r;++p)e[f+p]=e[h+p]}++s}}if(o>0){t[s]=t[o];for(let a=o*r,c=s*r,l=0;l!==r;++l)e[c+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*r)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),r=this.constructor,i=new r(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ll;var ci=class extends Un{constructor(t,e,r){super(t,e,r)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=la;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Un{constructor(t,e,r,i){super(t,e,r,i)}};bl.prototype.ValueTypeName="color";var Ml=class extends Un{constructor(t,e,r,i){super(t,e,r,i)}};Ml.prototype.ValueTypeName="number";var wl=class extends Bi{constructor(t,e,r,i){super(t,e,r,i)}interpolate_(t,e,r,i){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(r-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)Xn.slerpFlat(o,0,s,l-a,s,l,c);return o}},Ta=class extends Un{constructor(t,e,r,i){super(t,e,r,i)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}};Ta.prototype.ValueTypeName="quaternion";Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends Un{constructor(t,e,r){super(t,e,r)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=la;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Un{constructor(t,e,r,i){super(t,e,r,i)}};Tl.prototype.ValueTypeName="vector";var El=class{constructor(t,e,r){let i=this,o=!1,s=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.abortController=new AbortController,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Cg=new El,Al=class{constructor(t){this.manager=t!==void 0?t:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let r=this;return new Promise(function(i,o){r.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Il=class extends xa{constructor(t=-1,e=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=r-t,s=r+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Cl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var cp="\\[\\]\\.:\\/",iE=new RegExp("["+cp+"]","g"),lp="[^"+cp+"]",oE="[^"+cp.replace("\\.","")+"]",sE=/((?:WC+[\/:])*)/.source.replace("WC",lp),aE=/(WCOD+)?/.source.replace("WCOD",oE),cE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),lE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),uE=new RegExp("^"+sE+aE+cE+lE+"$"),hE=["material","materials","bones","map"],zf=class{constructor(t,e,r){let i=r||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(t,e)}setValue(t,e){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=r.length;i!==o;++i)r[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].unbind()}},Be=class n{constructor(t,e,r){this.path=e,this.parsedPath=r||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,r):new n(t,e,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iE,"")}static parseTrackName(t){let e=uE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=r.nodeName&&r.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let o=r.nodeName.substring(i+1);hE.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,i),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(e);if(r!==void 0)return r}if(t.children){let r=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let c=r(a.children);if(c)return c}return null},i=r(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)t[e++]=r[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)r[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)r[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let r=this.resolvedProperty;for(let i=0,o=r.length;i!==o;++i)r[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,r=e.objectName,i=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let l=e.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let s=t[i];if(s===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=zf;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hL=new Float32Array(1);var Zo=class{constructor(t=1,e=0,r=0){this.radius=t,this.phi=e,this.theta=r}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ea=class extends pr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function up(n,t,e,r){let i=fE(r);switch(e){case jf:return n*t;case tp:return n*t/i.components*i.byteLength;case Hl:return n*t/i.components*i.byteLength;case ep:return n*t*2/i.components*i.byteLength;case Wl:return n*t*2/i.components*i.byteLength;case Qf:return n*t*3/i.components*i.byteLength;case Yn:return n*t*4/i.components*i.byteLength;case $l:return n*t*4/i.components*i.byteLength;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Na:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(n,16)*Math.max(t,8)/4;case ql:case Kl:return Math.max(n,8)*Math.max(t,8)/2;case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ou:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case cu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case pu:case du:case mu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gu:case xu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yu:case _u:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fE(n){switch(n){case xr:case Kf:return{byteLength:1,components:1};case Jo:case Yf:case jo:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case pi:case zl:case yr:return{byteLength:4,components:1};case Zf:case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Qg(){let n=null,t=!1,e=null,r=null;function i(o,s){e(o,s),r=n.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(r=n.requestAnimationFrame(i),t=!0)},stop:function(){n.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function dE(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function r(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:s}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,wE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IE=`#ifdef USE_IRIDESCENCE
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
#endif`,CE=`#ifdef USE_BUMPMAP
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OE=`#define PI 3.141592653589793
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
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,p1=`struct PhysicalMaterial {
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
}`,d1=`
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
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
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q1=`float getShadowMask() {
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
}`,tA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eA=`#ifdef USE_SKINNING
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
#endif`,nA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,iA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#ifdef USE_TRANSMISSION
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mA=`uniform sampler2D t2D;
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`#include <common>
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
}`,SA=`#if DEPTH_PACKING == 3200
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
}`,bA=`#define DISTANCE
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
}`,MA=`#define DISTANCE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`uniform float scale;
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
}`,AA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,CA=`uniform vec3 diffuse;
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
}`,RA=`#define LAMBERT
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
}`,NA=`#define LAMBERT
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
}`,DA=`#define MATCAP
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
}`,PA=`#define MATCAP
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
}`,FA=`#define NORMAL
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
}`,kA=`#define NORMAL
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
}`,LA=`#define PHONG
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
}`,UA=`#define PHONG
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
}`,OA=`#define STANDARD
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
}`,BA=`#define STANDARD
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
}`,zA=`#define TOON
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
}`,GA=`#define TOON
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
}`,VA=`uniform float size;
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
}`,HA=`uniform vec3 diffuse;
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
}`,WA=`#include <common>
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
}`,$A=`uniform vec3 color;
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
}`,qA=`uniform float rotation;
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
}`,XA=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:xE,alphamap_pars_fragment:yE,alphatest_fragment:_E,alphatest_pars_fragment:vE,aomap_fragment:SE,aomap_pars_fragment:bE,batching_pars_vertex:ME,batching_vertex:wE,begin_vertex:TE,beginnormal_vertex:EE,bsdfs:AE,iridescence_fragment:IE,bumpmap_pars_fragment:CE,clipping_planes_fragment:RE,clipping_planes_pars_fragment:NE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:PE,color_fragment:FE,color_pars_fragment:kE,color_pars_vertex:LE,color_vertex:UE,common:OE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:zE,displacementmap_pars_vertex:GE,displacementmap_vertex:VE,emissivemap_fragment:HE,emissivemap_pars_fragment:WE,colorspace_fragment:$E,colorspace_pars_fragment:qE,envmap_fragment:XE,envmap_common_pars_fragment:KE,envmap_pars_fragment:YE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:a1,envmap_vertex:JE,fog_vertex:jE,fog_pars_vertex:QE,fog_fragment:t1,fog_pars_fragment:e1,gradientmap_pars_fragment:n1,lightmap_pars_fragment:r1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:o1,lights_pars_begin:s1,lights_toon_fragment:c1,lights_toon_pars_fragment:l1,lights_phong_fragment:u1,lights_phong_pars_fragment:h1,lights_physical_fragment:f1,lights_physical_pars_fragment:p1,lights_fragment_begin:d1,lights_fragment_maps:m1,lights_fragment_end:g1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:v1,map_fragment:S1,map_pars_fragment:b1,map_particle_fragment:M1,map_particle_pars_fragment:w1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:E1,morphinstance_vertex:A1,morphcolor_vertex:I1,morphnormal_vertex:C1,morphtarget_pars_vertex:R1,morphtarget_vertex:N1,normal_fragment_begin:D1,normal_fragment_maps:P1,normal_pars_fragment:F1,normal_pars_vertex:k1,normal_vertex:L1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:z1,iridescence_pars_fragment:G1,opaque_fragment:V1,packing:H1,premultiplied_alpha_fragment:W1,project_vertex:$1,dithering_fragment:q1,dithering_pars_fragment:X1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:J1,shadowmap_vertex:j1,shadowmask_pars_fragment:Q1,skinbase_vertex:tA,skinning_pars_vertex:eA,skinning_vertex:nA,skinnormal_vertex:rA,specularmap_fragment:iA,specularmap_pars_fragment:oA,tonemapping_fragment:sA,tonemapping_pars_fragment:aA,transmission_fragment:cA,transmission_pars_fragment:lA,uv_pars_fragment:uA,uv_pars_vertex:hA,uv_vertex:fA,worldpos_vertex:pA,background_vert:dA,background_frag:mA,backgroundCube_vert:gA,backgroundCube_frag:xA,cube_vert:yA,cube_frag:_A,depth_vert:vA,depth_frag:SA,distanceRGBA_vert:bA,distanceRGBA_frag:MA,equirect_vert:wA,equirect_frag:TA,linedashed_vert:EA,linedashed_frag:AA,meshbasic_vert:IA,meshbasic_frag:CA,meshlambert_vert:RA,meshlambert_frag:NA,meshmatcap_vert:DA,meshmatcap_frag:PA,meshnormal_vert:FA,meshnormal_frag:kA,meshphong_vert:LA,meshphong_frag:UA,meshphysical_vert:OA,meshphysical_frag:BA,meshtoon_vert:zA,meshtoon_frag:GA,points_vert:VA,points_frag:HA,shadow_vert:WA,shadow_frag:$A,sprite_vert:qA,sprite_frag:XA},At={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},_r={basic:{uniforms:hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new xe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:hn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:hn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:hn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new xe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:hn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:hn([At.points,At.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:hn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:hn([At.common,At.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:hn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:hn([At.sprite,At.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:hn([At.common,At.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:hn([At.lights,At.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};_r.physical={uniforms:hn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var vu={r:0,b:0,g:0},Hi=new mr,KA=new Ke;function YA(n,t,e,r,i,o,s){let a=new xe(0),c=o===!0?0:1,l,u,h=null,f=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,S=g(_);S===null?d(a,c):S&&S.isColor&&(d(S,1),y=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,y){let S=g(y);S&&(S.isCubeTexture||S.mapping===Aa)?(u===void 0&&(u=new un(new Xo(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Vi(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KA.makeRotationFromEuler(Hi)),u.material.toneMapped=Se.getTransfer(S.colorSpace)!==Ee,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new un(new Oi(2,2),new lr({name:"BackgroundMaterial",uniforms:Vi(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Se.getTransfer(S.colorSpace)!==Ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,y){_.getRGB(vu,ap(n)),r.buffers.color.setClear(vu.r,vu.g,vu.b,y,s)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(a,c)},render:x,addToRenderList:m,dispose:v}}function ZA(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null),o=i,s=!1;function a(M,C,P,F,L){let U=!1,O=h(F,P,C);o!==O&&(o=O,l(o.object)),U=p(M,F,P,L),U&&g(M,F,P,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(U||s)&&(s=!1,y(M,C,P,F),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,C,P){let F=P.wireframe===!0,L=r[M.id];L===void 0&&(L={},r[M.id]=L);let U=L[C.id];U===void 0&&(U={},L[C.id]=U);let O=U[F];return O===void 0&&(O=f(c()),U[F]=O),O}function f(M){let C=[],P=[],F=[];for(let L=0;L<e;L++)C[L]=0,P[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,C,P,F){let L=o.attributes,U=C.attributes,O=0,V=P.getAttributes();for(let k in V)if(V[k].location>=0){let j=L[k],et=U[k];if(et===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),j===void 0||j.attribute!==et||et&&j.data!==et.data)return!0;O++}return o.attributesNum!==O||o.index!==F}function g(M,C,P,F){let L={},U=C.attributes,O=0,V=P.getAttributes();for(let k in V)if(V[k].location>=0){let j=U[k];j===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));let et={};et.attribute=j,j&&j.data&&(et.data=j.data),L[k]=et,O++}o.attributes=L,o.attributesNum=O,o.index=F}function x(){let M=o.newAttributes;for(let C=0,P=M.length;C<P;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){let P=o.newAttributes,F=o.enabledAttributes,L=o.attributeDivisors;P[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),L[M]!==C&&(n.vertexAttribDivisor(M,C),L[M]=C)}function v(){let M=o.newAttributes,C=o.enabledAttributes;for(let P=0,F=C.length;P<F;P++)C[P]!==M[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function _(M,C,P,F,L,U,O){O===!0?n.vertexAttribIPointer(M,C,P,L,U):n.vertexAttribPointer(M,C,P,F,L,U)}function y(M,C,P,F){x();let L=F.attributes,U=P.getAttributes(),O=C.defaultAttributeValues;for(let V in U){let k=U[V];if(k.location>=0){let W=L[V];if(W===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){let j=W.normalized,et=W.itemSize,at=t.get(W);if(at===void 0)continue;let ct=at.buffer,pt=at.type,ut=at.bytesPerElement,H=pt===n.INT||pt===n.UNSIGNED_INT||W.gpuType===zl;if(W.isInterleavedBufferAttribute){let J=W.data,lt=J.stride,dt=W.offset;if(J.isInstancedInterleavedBuffer){for(let mt=0;mt<k.locationSize;mt++)d(k.location+mt,J.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let mt=0;mt<k.locationSize;mt++)_(k.location+mt,et/k.locationSize,pt,j,lt*ut,(dt+et/k.locationSize*mt)*ut,H)}else{if(W.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)d(k.location+J,W.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let J=0;J<k.locationSize;J++)_(k.location+J,et/k.locationSize,pt,j,et*ut,et/k.locationSize*J*ut,H)}}else if(O!==void 0){let j=O[V];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(k.location,j);break;case 3:n.vertexAttrib3fv(k.location,j);break;case 4:n.vertexAttrib4fv(k.location,j);break;default:n.vertexAttrib1fv(k.location,j)}}}}v()}function S(){R();for(let M in r){let C=r[M];for(let P in C){let F=C[P];for(let L in F)u(F[L].object),delete F[L];delete C[P]}delete r[M]}}function b(M){if(r[M.id]===void 0)return;let C=r[M.id];for(let P in C){let F=C[P];for(let L in F)u(F[L].object),delete F[L];delete C[P]}delete r[M.id]}function E(M){for(let C in r){let P=r[C];if(P[M.id]===void 0)continue;let F=P[M.id];for(let L in F)u(F[L].object),delete F[L];delete P[M.id]}}function R(){w(),s=!0,o!==i&&(o=i,l(o.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function JA(n,t,e){let r;function i(l){r=l}function o(l,u){n.drawArrays(r,l,u),e.update(u,r,1)}function s(l,u,h){h!==0&&(n.drawArraysInstanced(r,l,u,h),e.update(u,r,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,r,1)}function c(l,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(r,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jA(n,t,e,r){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){return!(E!==Yn&&r.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xr&&r.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yr&&!R)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,maxSamples:b}}function QA(n){let t=this,e=null,r=0,i=!1,o=!1,s=new $n,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||r!==0||i;return i=f,r=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!i||g===null||g.length===0||o&&!m)o?u(null):l();else{let v=o?0:r,_=v*4,y=d.clippingState||null;c.value=y,y=u(g,f,_,p);for(let S=0;S!==_;++S)y[S]=e[S];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==x;++_,y+=4)s.copy(h[_]).applyMatrix4(v,a),s.normal.toArray(m,y),m[y+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function tI(n){let t=new WeakMap;function e(s,a){return a===Ul?s.mapping=zi:a===Ol&&(s.mapping=Gi),s}function r(s){if(s&&s.isTexture){let a=s.mapping;if(a===Ul||a===Ol)if(t.has(s)){let c=t.get(s).texture;return e(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let l=new dl(c.height);return l.fromEquirectangularTexture(n,s),t.set(s,l),s.addEventListener("dispose",i),e(l.texture,s.mapping)}else return null}}return s}function i(s){let a=s.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:r,dispose:o}}var rs=4,Rg=[.125,.215,.35,.446,.526,.582],qi=20,hp=new Il,Ng=new xe,fp=null,pp=0,dp=0,mp=!1,$i=(1+Math.sqrt(5))/2,ns=1/$i,Dg=[new K(-$i,ns,0),new K($i,ns,0),new K(-ns,0,$i),new K(ns,0,$i),new K(0,$i,-ns),new K(0,$i,ns),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],eI=new K,Mu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,i=100,o={}){let{size:s=256,position:a=eI}=o;fp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fp,pp,dp),this._renderer.xr.enabled=mp,t.scissorTest=!1,Su(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:cr,minFilter:cr,generateMipmaps:!1,type:jo,format:Yn,colorSpace:ki,depthBuffer:!1},i=Pg(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(t,e,r);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nI(o)),this._blurMaterial=rI(o,t,e)}return i}_compileMaterial(t){let e=new un(this._lodPlanes[0],t);this._renderer.compile(e,hp)}_sceneToCubeUV(t,e,r,i,o){let c=new cn(90,1,e,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ng),h.toneMapping=zr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let x=new Or({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new un(new Xo,x),d=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,d=!0):(x.color.copy(Ng),d=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[_],o.y,o.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[_],o.z)):(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[_]));let S=this._cubeSize;Su(i,y*S,_>2?S:0,S,S),h.setRenderTarget(i),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let r=this._renderer,i=t.mapping===zi||t.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());let o=i?this._cubemapMaterial:this._equirectMaterial,s=new un(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;Su(e,0,0,3*c,2*c),r.setRenderTarget(e),r.render(s,hp)}_applyPMREM(t){let e=this._renderer,r=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let o=1;o<i;o++){let s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Dg[(i-o-1)%Dg.length];this._blur(t,o-1,o,s,a)}e.autoClear=r}_blur(t,e,r,i,o){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,r,i,"latitudinal",o),this._halfBlur(s,t,r,r,i,"longitudinal",o)}_halfBlur(t,e,r,i,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new un(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[r]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*qi-1),x=o/g,m=isFinite(o)?1+Math.floor(u*x):qi;m>qi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let d=[],v=0;for(let E=0;E<qi;++E){let R=E/x,w=Math.exp(-R*R/2);d.push(w),E===0?v+=w:E<m&&(v+=2*w)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-r;let y=this._sizeLods[i],S=3*y*(i>_-rs?i-_+rs:0),b=4*(this._cubeSize-y);Su(e,S,b,3*y,2*y),c.setRenderTarget(e),c.render(h,hp)}};function nI(n){let t=[],e=[],r=[],i=n,o=n-rs+1+Rg.length;for(let s=0;s<o;s++){let a=Math.pow(2,i);e.push(a);let c=1/a;s>n-rs?c=Rg[s-n+rs-1]:s===0&&(c=0),r.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let b=0;b<p;b++){let E=b%3*2/3-1,R=b>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(w,x*g*b),_.set(f,m*g*b);let M=[b,b,b,b,b,b];y.set(M,d*g*b)}let S=new Ln;S.setAttribute("position",new Pn(v,x)),S.setAttribute("uv",new Pn(_,m)),S.setAttribute("faceIndex",new Pn(y,d)),t.push(S),i>rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function Pg(n,t,e){let r=new dr(n,t,e);return r.texture.mapping=Aa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Su(n,t,e,r,i){n.viewport.set(t,e,r,i),n.scissor.set(t,e,r,i)}function rI(n,t,e){let r=new Float32Array(qi),i=new K(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Fg(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function kg(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Tp(){return`

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
	`}function iI(n){let t=new WeakMap,e=null;function r(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ul||c===Ol,u=c===zi||c===Gi;if(l||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Mu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Mu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:s}}function oI(n){let t={};function e(r){if(t[r]!==void 0)return t[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return t[r]=i,i}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){let i=e(r);return i===null&&$o("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function sI(n,t,e,r){let i={},o=new WeakMap;function s(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];let p=o.get(f);p&&(t.remove(p),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let S=v[_+0],b=v[_+1],E=v[_+2];f.push(S,b,b,E,E,S)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let S=_+0,b=_+1,E=_+2;f.push(S,b,b,E,E,S)}}else return;let m=new(sp(f)?ga:ma)(f,1);m.version=x;let d=o.get(h);d&&t.remove(d),o.set(h,m)}function u(h){let f=o.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function aI(n,t,e){let r;function i(f){r=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,p){n.drawElements(r,p,o,f*s),e.update(p,r,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(r,p,o,f*s,g),e.update(p,r,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,o,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,r,1)}function h(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/s,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,o,f,0,x,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*x[v];e.update(d,r,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cI(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:r}}function lI(n,t,e){let r=new WeakMap,i=new We;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=r.get(a);if(f===void 0||f.count!==h){let w=function(){E.dispose(),r.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*S*4*h),E=new pa(b,y,S,h);E.type=yr,E.needsUpdate=!0;let R=_*4;for(let M=0;M<h;M++){let C=m[M],P=d[M],F=v[M],L=y*S*4*M;for(let U=0;U<C.count;U++){let O=U*R;p===!0&&(i.fromBufferAttribute(C,U),b[L+O+0]=i.x,b[L+O+1]=i.y,b[L+O+2]=i.z,b[L+O+3]=0),g===!0&&(i.fromBufferAttribute(P,U),b[L+O+4]=i.x,b[L+O+5]=i.y,b[L+O+6]=i.z,b[L+O+7]=0),x===!0&&(i.fromBufferAttribute(F,U),b[L+O+8]=i.x,b[L+O+9]=i.y,b[L+O+10]=i.z,b[L+O+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new ue(y,S)},r.set(a,f),a.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function uI(n,t,e,r){let i=new WeakMap;function o(c){let l=r.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function s(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:s}}var tx=new Fn,Lg=new ba(1,1),ex=new pa,nx=new fl,rx=new ya,Ug=[],Og=[],Bg=new Float32Array(16),zg=new Float32Array(9),Gg=new Float32Array(4);function os(n,t,e){let r=n[0];if(r<=0||r>0)return n;let i=t*e,o=Ug[i];if(o===void 0&&(o=new Float32Array(i),Ug[i]=o),t!==0){r.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,n[s].toArray(o,a)}return o}function Je(n,t){if(n.length!==t.length)return!1;for(let e=0,r=n.length;e<r;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,r=t.length;e<r;e++)n[e]=t[e]}function Tu(n,t){let e=Og[t];e===void 0&&(e=new Int32Array(t),Og[t]=e);for(let r=0;r!==t;++r)e[r]=n.allocateTextureUnit();return e}function hI(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function pI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function dI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function mI(n,t){let e=this.cache,r=t.elements;if(r===void 0){if(Je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Je(e,r))return;Gg.set(r),n.uniformMatrix2fv(this.addr,!1,Gg),je(e,r)}}function gI(n,t){let e=this.cache,r=t.elements;if(r===void 0){if(Je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Je(e,r))return;zg.set(r),n.uniformMatrix3fv(this.addr,!1,zg),je(e,r)}}function xI(n,t){let e=this.cache,r=t.elements;if(r===void 0){if(Je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Je(e,r))return;Bg.set(r),n.uniformMatrix4fv(this.addr,!1,Bg),je(e,r)}}function yI(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _I(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function vI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function SI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function bI(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function MI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function wI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function TI(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function EI(n,t,e){let r=this.cache,i=e.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let o;this.type===n.SAMPLER_2D_SHADOW?(Lg.compareFunction=np,o=Lg):o=tx,e.setTexture2D(t||o,i)}function AI(n,t,e){let r=this.cache,i=e.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),e.setTexture3D(t||nx,i)}function II(n,t,e){let r=this.cache,i=e.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),e.setTextureCube(t||rx,i)}function CI(n,t,e){let r=this.cache,i=e.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),e.setTexture2DArray(t||ex,i)}function RI(n){switch(n){case 5126:return hI;case 35664:return fI;case 35665:return pI;case 35666:return dI;case 35674:return mI;case 35675:return gI;case 35676:return xI;case 5124:case 35670:return yI;case 35667:case 35671:return _I;case 35668:case 35672:return vI;case 35669:case 35673:return SI;case 5125:return bI;case 36294:return MI;case 36295:return wI;case 36296:return TI;case 35678:case 36198:case 36298:case 36306:case 35682:return EI;case 35679:case 36299:case 36307:return AI;case 35680:case 36300:case 36308:case 36293:return II;case 36289:case 36303:case 36311:case 36292:return CI}}function NI(n,t){n.uniform1fv(this.addr,t)}function DI(n,t){let e=os(t,this.size,2);n.uniform2fv(this.addr,e)}function PI(n,t){let e=os(t,this.size,3);n.uniform3fv(this.addr,e)}function FI(n,t){let e=os(t,this.size,4);n.uniform4fv(this.addr,e)}function kI(n,t){let e=os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function LI(n,t){let e=os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function UI(n,t){let e=os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function OI(n,t){n.uniform1iv(this.addr,t)}function BI(n,t){n.uniform2iv(this.addr,t)}function zI(n,t){n.uniform3iv(this.addr,t)}function GI(n,t){n.uniform4iv(this.addr,t)}function VI(n,t){n.uniform1uiv(this.addr,t)}function HI(n,t){n.uniform2uiv(this.addr,t)}function WI(n,t){n.uniform3uiv(this.addr,t)}function $I(n,t){n.uniform4uiv(this.addr,t)}function qI(n,t,e){let r=this.cache,i=t.length,o=Tu(e,i);Je(r,o)||(n.uniform1iv(this.addr,o),je(r,o));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||tx,o[s])}function XI(n,t,e){let r=this.cache,i=t.length,o=Tu(e,i);Je(r,o)||(n.uniform1iv(this.addr,o),je(r,o));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||nx,o[s])}function KI(n,t,e){let r=this.cache,i=t.length,o=Tu(e,i);Je(r,o)||(n.uniform1iv(this.addr,o),je(r,o));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||rx,o[s])}function YI(n,t,e){let r=this.cache,i=t.length,o=Tu(e,i);Je(r,o)||(n.uniform1iv(this.addr,o),je(r,o));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||ex,o[s])}function ZI(n){switch(n){case 5126:return NI;case 35664:return DI;case 35665:return PI;case 35666:return FI;case 35674:return kI;case 35675:return LI;case 35676:return UI;case 5124:case 35670:return OI;case 35667:case 35671:return BI;case 35668:case 35672:return zI;case 35669:case 35673:return GI;case 5125:return VI;case 36294:return HI;case 36295:return WI;case 36296:return $I;case 35678:case 36198:case 36298:case 36306:case 35682:return qI;case 35679:case 36299:case 36307:return XI;case 35680:case 36300:case 36308:case 36293:return KI;case 36289:case 36303:case 36311:case 36292:return YI}}var xp=class{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=RI(e.type)}},yp=class{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ZI(e.type)}},_p=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){let i=this.seq;for(let o=0,s=i.length;o!==s;++o){let a=i[o];a.setValue(t,e[a.id],r)}}},gp=/(\w+)(\])?(\[|\.)?/g;function Vg(n,t){n.seq.push(t),n.map[t.id]=t}function JI(n,t,e){let r=n.name,i=r.length;for(gp.lastIndex=0;;){let o=gp.exec(r),s=gp.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===i){Vg(e,l===void 0?new xp(a,n,t):new yp(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new _p(a),Vg(e,h)),e=h}}}var is=class{constructor(t,e){this.seq=[],this.map={};let r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let o=t.getActiveUniform(e,i),s=t.getUniformLocation(e,o.name);JI(o,s,this)}}setValue(t,e,r,i){let o=this.map[e];o!==void 0&&o.setValue(t,r,i)}setOptional(t,e,r){let i=e[r];i!==void 0&&this.setValue(t,r,i)}static upload(t,e,r,i){for(let o=0,s=e.length;o!==s;++o){let a=e[o],c=r[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let r=[];for(let i=0,o=t.length;i!==o;++i){let s=t[i];s.id in e&&r.push(s)}return r}};function Hg(n,t,e){let r=n.createShader(t);return n.shaderSource(r,e),n.compileShader(r),r}var jI=37297,QI=0;function tC(n,t){let e=n.split(`
`),r=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=i;s<o;s++){let a=s+1;r.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return r.join(`
`)}var Wg=new ae;function eC(n){Se._getMatrix(Wg,Se.workingColorSpace,n);let t=`mat3( ${Wg.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(n)){case ua:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $g(n,t,e){let r=n.getShaderParameter(t,n.COMPILE_STATUS),o=(n.getShaderInfoLog(t)||"").trim();if(r&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+tC(n.getShaderSource(t),a)}else return o}function nC(n,t){let e=eC(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rC(n,t){let e;switch(t){case sg:e="Linear";break;case ag:e="Reinhard";break;case cg:e="Cineon";break;case lg:e="ACESFilmic";break;case hg:e="AgX";break;case fg:e="Neutral";break;case ug:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bu=new K;function iC(){Se.getLuminanceCoefficients(bu);let n=bu.x.toFixed(4),t=bu.y.toFixed(4),e=bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function sC(n){let t=[];for(let e in n){let r=n[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function aC(n,t){let e={},r=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let o=n.getActiveAttrib(t,i),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:n.getAttribLocation(t,s),locationSize:a}}return e}function Pa(n){return n!==""}function qg(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xg(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cC=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(n){return n.replace(cC,uC)}var lC=new Map;function uC(n,t){let e=he[t];if(e===void 0){let r=lC.get(t);if(r!==void 0)e=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return vp(e)}var hC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(n){return n.replace(hC,fC)}function fC(n,t,e,r){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Yg(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function pC(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gr&&(t="SHADOWMAP_TYPE_VSM"),t}function dC(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mC(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function gC(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qf:t="ENVMAP_BLENDING_MULTIPLY";break;case ig:t="ENVMAP_BLENDING_MIX";break;case og:t="ENVMAP_BLENDING_ADD";break}return t}function xC(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:r,maxMip:e}}function yC(n,t,e,r){let i=n.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,c=pC(e),l=dC(e),u=mC(e),h=gC(e),f=xC(e),p=oC(e),g=sC(o),x=i.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pa).join(`
`),d.length>0&&(d+=`
`)):(m=[Yg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),d=[Yg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zr?"#define TONE_MAPPING":"",e.toneMapping!==zr?he.tonemapping_pars_fragment:"",e.toneMapping!==zr?rC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,nC("linearToOutputTexel",e.outputColorSpace),iC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pa).join(`
`)),s=vp(s),s=qg(s,e),s=Xg(s,e),a=vp(a),a=qg(a,e),a=Xg(a,e),s=Kg(s),a=Kg(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=v+m+s,y=v+d+a,S=Hg(i,i.VERTEX_SHADER,_),b=Hg(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(C){if(n.debug.checkShaderErrors){let P=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(b)||"",U=P.trim(),O=F.trim(),V=L.trim(),k=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,x,S,b);else{let j=$g(i,S,"vertex"),et=$g(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+j+`
`+et)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||V==="")&&(W=!1);W&&(C.diagnostics={runnable:k,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:d}})}i.deleteShader(S),i.deleteShader(b),R=new is(i,x),w=aC(i,x)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,jI)),M},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=QI++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var _C=0,Sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,r=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){let e=this.shaderCache,r=e.get(t);return r===void 0&&(r=new bp(t),e.set(t,r)),r}},bp=class{constructor(t){this.id=_C++,this.code=t,this.usedTimes=0}};function vC(n,t,e,r,i,o,s){let a=new da,c=new Sp,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,P,F){let L=P.fog,U=F.geometry,O=w.isMeshStandardMaterial?P.environment:null,V=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),k=V&&V.mapping===Aa?V.image.height:null,W=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=j!==void 0?j.length:0,at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let ct,pt,ut,H;if(W){let Te=_r[W];ct=Te.vertexShader,pt=Te.fragmentShader}else ct=w.vertexShader,pt=w.fragmentShader,c.update(w),ut=c.getVertexShaderID(w),H=c.getFragmentShaderID(w);let J=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),dt=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Et=!!w.map,ee=!!w.matcap,D=!!V,te=!!w.aoMap,Nt=!!w.lightMap,Tt=!!w.bumpMap,bt=!!w.normalMap,Jt=!!w.displacementMap,Dt=!!w.emissiveMap,Gt=!!w.metalnessMap,Re=!!w.roughnessMap,ge=w.anisotropy>0,N=w.clearcoat>0,A=w.dispersion>0,X=w.iridescence>0,st=w.sheen>0,ft=w.transmission>0,it=ge&&!!w.anisotropyMap,Lt=N&&!!w.clearcoatMap,St=N&&!!w.clearcoatNormalMap,Ut=N&&!!w.clearcoatRoughnessMap,Vt=X&&!!w.iridescenceMap,gt=X&&!!w.iridescenceThicknessMap,It=st&&!!w.sheenColorMap,jt=st&&!!w.sheenRoughnessMap,Ht=!!w.specularMap,Ct=!!w.specularColorMap,le=!!w.specularIntensityMap,G=ft&&!!w.transmissionMap,vt=ft&&!!w.thicknessMap,wt=!!w.gradientMap,kt=!!w.alphaMap,xt=w.alphaTest>0,ht=!!w.alphaHash,Bt=!!w.extensions,oe=zr;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(oe=n.toneMapping);let Fe={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:ct,fragmentShader:pt,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:H,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:dt,instancingColor:dt&&F.instanceColor!==null,instancingMorph:dt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ki,alphaToCoverage:!!w.alphaToCoverage,map:Et,matcap:ee,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:k,aoMap:te,lightMap:Nt,bumpMap:Tt,normalMap:bt,displacementMap:f&&Jt,emissiveMap:Dt,normalMapObjectSpace:bt&&w.normalMapType===xg,normalMapTangentSpace:bt&&w.normalMapType===gg,metalnessMap:Gt,roughnessMap:Re,anisotropy:ge,anisotropyMap:it,clearcoat:N,clearcoatMap:Lt,clearcoatNormalMap:St,clearcoatRoughnessMap:Ut,dispersion:A,iridescence:X,iridescenceMap:Vt,iridescenceThicknessMap:gt,sheen:st,sheenColorMap:It,sheenRoughnessMap:jt,specularMap:Ht,specularColorMap:Ct,specularIntensityMap:le,transmission:ft,transmissionMap:G,thicknessMap:vt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===Pi&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:xt,alphaHash:ht,combine:w.combine,mapUv:Et&&x(w.map.channel),aoMapUv:te&&x(w.aoMap.channel),lightMapUv:Nt&&x(w.lightMap.channel),bumpMapUv:Tt&&x(w.bumpMap.channel),normalMapUv:bt&&x(w.normalMap.channel),displacementMapUv:Jt&&x(w.displacementMap.channel),emissiveMapUv:Dt&&x(w.emissiveMap.channel),metalnessMapUv:Gt&&x(w.metalnessMap.channel),roughnessMapUv:Re&&x(w.roughnessMap.channel),anisotropyMapUv:it&&x(w.anisotropyMap.channel),clearcoatMapUv:Lt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&x(w.sheenRoughnessMap.channel),specularMapUv:Ht&&x(w.specularMap.channel),specularColorMapUv:Ct&&x(w.specularColorMap.channel),specularIntensityMapUv:le&&x(w.specularIntensityMap.channel),transmissionMapUv:G&&x(w.transmissionMap.channel),thicknessMapUv:vt&&x(w.thicknessMap.channel),alphaMapUv:kt&&x(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(bt||ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(Et||kt),fog:!!L,useFog:w.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:at,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:Et&&w.map.isVideoTexture===!0&&Se.getTransfer(w.map.colorSpace)===Ee,decodeVideoTextureEmissive:Dt&&w.emissiveMap.isVideoTexture===!0&&Se.getTransfer(w.emissiveMap.colorSpace)===Ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kn,flipSided:w.side===gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||mt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function d(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(v(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let M=g[w.type],C;if(M){let P=_r[M];C=Ig.clone(P.uniforms)}else C=w.uniforms;return C}function S(w,M){let C;for(let P=0,F=u.length;P<F;P++){let L=u[P];if(L.cacheKey===M){C=L,++C.usedTimes;break}}return C===void 0&&(C=new yC(n,M,w,o),u.push(C)),C}function b(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function E(w){c.remove(w)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:R}}function SC(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function r(s){n.delete(s)}function i(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:r,update:i,dispose:o}}function bC(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jg(){let n=[],t=0,e=[],r=[],i=[];function o(){t=0,e.length=0,r.length=0,i.length=0}function s(h,f,p,g,x,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function a(h,f,p,g,x,m){let d=s(h,f,p,g,x,m);p.transmission>0?r.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(h,f,p,g,x,m){let d=s(h,f,p,g,x,m);p.transmission>0?r.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||bC),r.length>1&&r.sort(f||Zg),i.length>1&&i.sort(f||Zg)}function u(){for(let h=t,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:r,transparent:i,init:o,push:a,unshift:c,finish:u,sort:l}}function MC(){let n=new WeakMap;function t(r,i){let o=n.get(r),s;return o===void 0?(s=new Jg,n.set(r,[s])):i>=o.length?(s=new Jg,o.push(s)):s=o[i],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function wC(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new xe};break;case"SpotLight":e={position:new K,direction:new K,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function TC(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var EC=0;function AC(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function IC(n){let t=new wC,e=TC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new K);let i=new K,o=new Ke,s=new Ke;function a(l){let u=0,h=0,f=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,_=0,y=0,S=0,b=0,E=0;l.sort(AC);for(let w=0,M=l.length;w<M;w++){let C=l[w],P=C.color,F=C.intensity,L=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*F,h+=P.g*F,f+=P.b*F;else if(C.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(C.sh.coefficients[O],F);E++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,k=e.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.directionalShadow[p]=k,r.directionalShadowMap[p]=U,r.directionalShadowMatrix[p]=C.shadow.matrix,v++}r.directional[p]=O,p++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(P).multiplyScalar(F),O.distance=L,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,r.spot[x]=O;let V=C.shadow;if(C.map&&(r.spotLightMap[S]=C.map,S++,V.updateMatrices(C),C.castShadow&&b++),r.spotLightMatrix[x]=V.matrix,C.castShadow){let k=e.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.spotShadow[x]=k,r.spotShadowMap[x]=U,y++}x++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(P).multiplyScalar(F),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),r.rectArea[m]=O,m++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let V=C.shadow,k=e.get(C);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,r.pointShadow[g]=k,r.pointShadowMap[g]=U,r.pointShadowMatrix[g]=C.shadow.matrix,_++}r.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(F),O.groundColor.copy(C.groundColor).multiplyScalar(F),r.hemi[d]=O,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=At.LTC_FLOAT_1,r.rectAreaLTC2=At.LTC_FLOAT_2):(r.rectAreaLTC1=At.LTC_HALF_1,r.rectAreaLTC2=At.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=f;let R=r.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==S||R.numLightProbes!==E)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=m,r.point.length=g,r.hemi.length=d,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=y+S-b,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=E,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=S,R.numLightProbes=E,r.version=EC++)}function c(l,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let _=l[d];if(_.isDirectionalLight){let y=r.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(_.isSpotLight){let y=r.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=r.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(_.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(_.isPointLight){let y=r.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=r.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:r}}function jg(n){let t=new IC(n),e=[],r=[];function i(u){l.camera=u,e.length=0,r.length=0}function o(u){e.push(u)}function s(u){r.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function CC(n){let t=new WeakMap;function e(i,o=0){let s=t.get(i),a;return s===void 0?(a=new jg(n),t.set(i,[a])):o>=s.length?(a=new jg(n),s.push(a)):a=s[o],a}function r(){t=new WeakMap}return{get:e,dispose:r}}var RC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NC=`uniform sampler2D shadow_pass;
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
}`;function DC(n,t,e){let r=new va,i=new ue,o=new ue,s=new We,a=new xl({depthPacking:mg}),c=new yl,l={},u=e.maxTextureSize,h={[Ur]:gn,[gn]:Ur,[Kn]:Kn},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:RC,fragmentShader:NC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ln;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new un(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let d=this.type;this.render=function(b,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Br),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=d!==gr&&this.type===gr,L=d===gr&&this.type!==gr;for(let U=0,O=b.length;U<O;U++){let V=b[U],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let W=k.getFrameExtents();if(i.multiply(W),o.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/W.x),i.x=o.x*W.x,k.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/W.y),i.y=o.y*W.y,k.mapSize.y=o.y)),k.map===null||F===!0||L===!0){let et=this.type!==gr?{minFilter:qn,magFilter:qn}:{};k.map!==null&&k.map.dispose(),k.map=new dr(i.x,i.y,et),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let j=k.getViewportCount();for(let et=0;et<j;et++){let at=k.getViewport(et);s.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),P.viewport(s),k.updateMatrices(V,et),r=k.getFrustum(),y(E,R,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===gr&&v(k,R),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,C)};function v(b,E){let R=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new dr(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,R,p,x,null)}function _(b,E,R,w){let M=null,C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=M.uuid,F=E.uuid,L=l[P];L===void 0&&(L={},l[P]=L);let U=L[F];U===void 0&&(U=M.clone(),L[F]=U,E.addEventListener("dispose",S)),M=U}if(M.visible=E.visible,M.wireframe=E.wireframe,w===gr?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let P=n.properties.get(M);P.light=R}return M}function y(b,E,R,w,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===gr)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let F=t.update(b),L=b.material;if(Array.isArray(L)){let U=F.groups;for(let O=0,V=U.length;O<V;O++){let k=U[O],W=L[k.materialIndex];if(W&&W.visible){let j=_(b,W,w,M);b.onBeforeShadow(n,b,E,R,F,j,k),n.renderBufferDirect(R,null,F,j,b,k),b.onAfterShadow(n,b,E,R,F,j,k)}}}else if(L.visible){let U=_(b,L,w,M);b.onBeforeShadow(n,b,E,R,F,U,null),n.renderBufferDirect(R,null,F,U,b,null),b.onAfterShadow(n,b,E,R,F,U,null)}}let P=b.children;for(let F=0,L=P.length;F<L;F++)y(P[F],E,R,w,M)}function S(b){b.target.removeEventListener("dispose",S);for(let R in l){let w=l[R],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var PC={[Rl]:Nl,[Dl]:kl,[Pl]:Ll,[Fi]:Fl,[Nl]:Rl,[kl]:Dl,[Ll]:Pl,[Fl]:Fi};function FC(n,t){function e(){let G=!1,vt=new We,wt=null,kt=new We(0,0,0,0);return{setMask:function(xt){wt!==xt&&!G&&(n.colorMask(xt,xt,xt,xt),wt=xt)},setLocked:function(xt){G=xt},setClear:function(xt,ht,Bt,oe,Fe){Fe===!0&&(xt*=oe,ht*=oe,Bt*=oe),vt.set(xt,ht,Bt,oe),kt.equals(vt)===!1&&(n.clearColor(xt,ht,Bt,oe),kt.copy(vt))},reset:function(){G=!1,wt=null,kt.set(-1,0,0,0)}}}function r(){let G=!1,vt=!1,wt=null,kt=null,xt=null;return{setReversed:function(ht){if(vt!==ht){let Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let oe=xt;xt=null,this.setClear(oe)}},getReversed:function(){return vt},setTest:function(ht){ht?J(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(ht){wt!==ht&&!G&&(n.depthMask(ht),wt=ht)},setFunc:function(ht){if(vt&&(ht=PC[ht]),kt!==ht){switch(ht){case Rl:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case Fi:n.depthFunc(n.LEQUAL);break;case Pl:n.depthFunc(n.EQUAL);break;case Fl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}kt=ht}},setLocked:function(ht){G=ht},setClear:function(ht){xt!==ht&&(vt&&(ht=1-ht),n.clearDepth(ht),xt=ht)},reset:function(){G=!1,wt=null,kt=null,xt=null,vt=!1}}}function i(){let G=!1,vt=null,wt=null,kt=null,xt=null,ht=null,Bt=null,oe=null,Fe=null;return{setTest:function(Te){G||(Te?J(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(Te){vt!==Te&&!G&&(n.stencilMask(Te),vt=Te)},setFunc:function(Te,Rr,fr){(wt!==Te||kt!==Rr||xt!==fr)&&(n.stencilFunc(Te,Rr,fr),wt=Te,kt=Rr,xt=fr)},setOp:function(Te,Rr,fr){(ht!==Te||Bt!==Rr||oe!==fr)&&(n.stencilOp(Te,Rr,fr),ht=Te,Bt=Rr,oe=fr)},setLocked:function(Te){G=Te},setClear:function(Te){Fe!==Te&&(n.clearStencil(Te),Fe=Te)},reset:function(){G=!1,vt=null,wt=null,kt=null,xt=null,ht=null,Bt=null,oe=null,Fe=null}}}let o=new e,s=new r,a=new i,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,y=null,S=null,b=null,E=new xe(0,0,0),R=0,w=!1,M=null,C=null,P=null,F=null,L=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=V>=2);let W=null,j={},et=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),ct=new We().fromArray(et),pt=new We().fromArray(at);function ut(G,vt,wt,kt){let xt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(G,ht),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<wt;Bt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,kt,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(vt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return ht}let H={};H[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),J(n.DEPTH_TEST),s.setFunc(Fi),Tt(!1),bt(Gf),J(n.CULL_FACE),te(Br);function J(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function lt(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function dt(G,vt){return h[G]!==vt?(n.bindFramebuffer(G,vt),h[G]=vt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function mt(G,vt){let wt=p,kt=!1;if(G){wt=f.get(vt),wt===void 0&&(wt=[],f.set(vt,wt));let xt=G.textures;if(wt.length!==xt.length||wt[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Bt=xt.length;ht<Bt;ht++)wt[ht]=n.COLOR_ATTACHMENT0+ht;wt.length=xt.length,kt=!0}}else wt[0]!==n.BACK&&(wt[0]=n.BACK,kt=!0);kt&&n.drawBuffers(wt)}function Et(G){return g!==G?(n.useProgram(G),g=G,!0):!1}let ee={[oi]:n.FUNC_ADD,[Gm]:n.FUNC_SUBTRACT,[Vm]:n.FUNC_REVERSE_SUBTRACT};ee[Hm]=n.MIN,ee[Wm]=n.MAX;let D={[$m]:n.ZERO,[qm]:n.ONE,[Xm]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[Qm]:n.SRC_ALPHA_SATURATE,[Jm]:n.DST_COLOR,[Ym]:n.DST_ALPHA,[Km]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[jm]:n.ONE_MINUS_DST_COLOR,[Zm]:n.ONE_MINUS_DST_ALPHA,[tg]:n.CONSTANT_COLOR,[eg]:n.ONE_MINUS_CONSTANT_COLOR,[ng]:n.CONSTANT_ALPHA,[rg]:n.ONE_MINUS_CONSTANT_ALPHA};function te(G,vt,wt,kt,xt,ht,Bt,oe,Fe,Te){if(G===Br){x===!0&&(lt(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),G!==zm){if(G!==m||Te!==w){if((d!==oi||y!==oi)&&(n.blendEquation(n.FUNC_ADD),d=oi,y=oi),Te)switch(G){case Pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hf:n.blendFunc(n.ONE,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $f:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $f:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,_=null,S=null,b=null,E.set(0,0,0),R=0,m=G,w=Te}return}xt=xt||vt,ht=ht||wt,Bt=Bt||kt,(vt!==d||xt!==y)&&(n.blendEquationSeparate(ee[vt],ee[xt]),d=vt,y=xt),(wt!==v||kt!==_||ht!==S||Bt!==b)&&(n.blendFuncSeparate(D[wt],D[kt],D[ht],D[Bt]),v=wt,_=kt,S=ht,b=Bt),(oe.equals(E)===!1||Fe!==R)&&(n.blendColor(oe.r,oe.g,oe.b,Fe),E.copy(oe),R=Fe),m=G,w=!1}function Nt(G,vt){G.side===Kn?lt(n.CULL_FACE):J(n.CULL_FACE);let wt=G.side===gn;vt&&(wt=!wt),Tt(wt),G.blending===Pi&&G.transparent===!1?te(Br):te(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),o.setMask(G.colorWrite);let kt=G.stencilWrite;a.setTest(kt),kt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function bt(G){G!==Um?(J(n.CULL_FACE),G!==C&&(G===Gf?n.cullFace(n.BACK):G===Om?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),C=G}function Jt(G){G!==P&&(O&&n.lineWidth(G),P=G)}function Dt(G,vt,wt){G?(J(n.POLYGON_OFFSET_FILL),(F!==vt||L!==wt)&&(n.polygonOffset(vt,wt),F=vt,L=wt)):lt(n.POLYGON_OFFSET_FILL)}function Gt(G){G?J(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function Re(G){G===void 0&&(G=n.TEXTURE0+U-1),W!==G&&(n.activeTexture(G),W=G)}function ge(G,vt,wt){wt===void 0&&(W===null?wt=n.TEXTURE0+U-1:wt=W);let kt=j[wt];kt===void 0&&(kt={type:void 0,texture:void 0},j[wt]=kt),(kt.type!==G||kt.texture!==vt)&&(W!==wt&&(n.activeTexture(wt),W=wt),n.bindTexture(G,vt||H[G]),kt.type=G,kt.texture=vt)}function N(){let G=j[W];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(G){ct.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ct.copy(G))}function jt(G){pt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),pt.copy(G))}function Ht(G,vt){let wt=l.get(vt);wt===void 0&&(wt=new WeakMap,l.set(vt,wt));let kt=wt.get(G);kt===void 0&&(kt=n.getUniformBlockIndex(vt,G.name),wt.set(G,kt))}function Ct(G,vt){let kt=l.get(vt).get(G);c.get(vt)!==kt&&(n.uniformBlockBinding(vt,kt,G.__bindingPointIndex),c.set(vt,kt))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,j={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,y=null,S=null,b=null,E=new xe(0,0,0),R=0,w=!1,M=null,C=null,P=null,F=null,L=null,ct.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:J,disable:lt,bindFramebuffer:dt,drawBuffers:mt,useProgram:Et,setBlending:te,setMaterial:Nt,setFlipSided:Tt,setCullFace:bt,setLineWidth:Jt,setPolygonOffset:Dt,setScissorTest:Gt,activeTexture:Re,bindTexture:ge,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:X,texImage2D:Vt,texImage3D:gt,updateUBOMapping:Ht,uniformBlockBinding:Ct,texStorage2D:St,texStorage3D:Ut,texSubImage2D:st,texSubImage3D:ft,compressedTexSubImage2D:it,compressedTexSubImage3D:Lt,scissor:It,viewport:jt,reset:le}}function kC(n,t,e,r,i,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return p?new OffscreenCanvas(N,A):fa("canvas")}function x(N,A,X){let st=1,ft=ge(N);if((ft.width>X||ft.height>X)&&(st=X/Math.max(ft.width,ft.height)),st<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let it=Math.floor(st*ft.width),Lt=Math.floor(st*ft.height);h===void 0&&(h=g(it,Lt));let St=A?g(it,Lt):h;return St.width=it,St.height=Lt,St.getContext("2d").drawImage(N,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+it+"x"+Lt+")."),St}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),N;return N}function m(N){return N.generateMipmaps}function d(N){n.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(N,A,X,st,ft=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let it=A;if(A===n.RED&&(X===n.FLOAT&&(it=n.R32F),X===n.HALF_FLOAT&&(it=n.R16F),X===n.UNSIGNED_BYTE&&(it=n.R8)),A===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.R8UI),X===n.UNSIGNED_SHORT&&(it=n.R16UI),X===n.UNSIGNED_INT&&(it=n.R32UI),X===n.BYTE&&(it=n.R8I),X===n.SHORT&&(it=n.R16I),X===n.INT&&(it=n.R32I)),A===n.RG&&(X===n.FLOAT&&(it=n.RG32F),X===n.HALF_FLOAT&&(it=n.RG16F),X===n.UNSIGNED_BYTE&&(it=n.RG8)),A===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RG8UI),X===n.UNSIGNED_SHORT&&(it=n.RG16UI),X===n.UNSIGNED_INT&&(it=n.RG32UI),X===n.BYTE&&(it=n.RG8I),X===n.SHORT&&(it=n.RG16I),X===n.INT&&(it=n.RG32I)),A===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGB8UI),X===n.UNSIGNED_SHORT&&(it=n.RGB16UI),X===n.UNSIGNED_INT&&(it=n.RGB32UI),X===n.BYTE&&(it=n.RGB8I),X===n.SHORT&&(it=n.RGB16I),X===n.INT&&(it=n.RGB32I)),A===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),X===n.UNSIGNED_INT&&(it=n.RGBA32UI),X===n.BYTE&&(it=n.RGBA8I),X===n.SHORT&&(it=n.RGBA16I),X===n.INT&&(it=n.RGBA32I)),A===n.RGB&&(X===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),A===n.RGBA){let Lt=ft?ua:Se.getTransfer(st);X===n.FLOAT&&(it=n.RGBA32F),X===n.HALF_FLOAT&&(it=n.RGBA16F),X===n.UNSIGNED_BYTE&&(it=Lt===Ee?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(N,A){let X;return N?A===null||A===pi||A===Qo?X=n.DEPTH24_STENCIL8:A===yr?X=n.DEPTH32F_STENCIL8:A===Jo&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===pi||A===Qo?X=n.DEPTH_COMPONENT24:A===yr?X=n.DEPTH_COMPONENT32F:A===Jo&&(X=n.DEPTH_COMPONENT16),X}function S(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==qn&&N.minFilter!==cr?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function b(N){let A=N.target;A.removeEventListener("dispose",b),R(A),A.isVideoTexture&&u.delete(A)}function E(N){let A=N.target;A.removeEventListener("dispose",E),M(A)}function R(N){let A=r.get(N);if(A.__webglInit===void 0)return;let X=N.source,st=f.get(X);if(st){let ft=st[A.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&w(N),Object.keys(st).length===0&&f.delete(X)}r.remove(N)}function w(N){let A=r.get(N);n.deleteTexture(A.__webglTexture);let X=N.source,st=f.get(X);delete st[A.__cacheKey],s.memory.textures--}function M(N){let A=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(A.__webglFramebuffer[st]))for(let ft=0;ft<A.__webglFramebuffer[st].length;ft++)n.deleteFramebuffer(A.__webglFramebuffer[st][ft]);else n.deleteFramebuffer(A.__webglFramebuffer[st]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[st])}else{if(Array.isArray(A.__webglFramebuffer))for(let st=0;st<A.__webglFramebuffer.length;st++)n.deleteFramebuffer(A.__webglFramebuffer[st]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let st=0;st<A.__webglColorRenderbuffer.length;st++)A.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[st]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let X=N.textures;for(let st=0,ft=X.length;st<ft;st++){let it=r.get(X[st]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),s.memory.textures--),r.remove(X[st])}r.remove(N)}let C=0;function P(){C=0}function F(){let N=C;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),C+=1,N}function L(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function U(N,A){let X=r.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){let st=N.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,N,A);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+A)}function O(N,A){let X=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){H(X,N,A);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+A)}function V(N,A){let X=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){H(X,N,A);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+A)}function k(N,A){let X=r.get(N);if(N.version>0&&X.__version!==N.version){J(X,N,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+A)}let W={[al]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},j={[qn]:n.NEAREST,[pg]:n.NEAREST_MIPMAP_NEAREST,[Ia]:n.NEAREST_MIPMAP_LINEAR,[cr]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},et={[yg]:n.NEVER,[wg]:n.ALWAYS,[_g]:n.LESS,[np]:n.LEQUAL,[vg]:n.EQUAL,[Mg]:n.GEQUAL,[Sg]:n.GREATER,[bg]:n.NOTEQUAL};function at(N,A){if(A.type===yr&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===cr||A.magFilter===Bl||A.magFilter===Ia||A.magFilter===fi||A.minFilter===cr||A.minFilter===Bl||A.minFilter===Ia||A.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,W[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,W[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,W[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,j[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qn||A.minFilter!==Ia&&A.minFilter!==fi||A.type===yr&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ct(N,A){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",b));let st=A.source,ft=f.get(st);ft===void 0&&(ft={},f.set(st,ft));let it=L(A);if(it!==N.__cacheKey){ft[it]===void 0&&(ft[it]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,X=!0),ft[it].usedTimes++;let Lt=ft[N.__cacheKey];Lt!==void 0&&(ft[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(A)),N.__cacheKey=it,N.__webglTexture=ft[it].texture}return X}function pt(N,A,X){return Math.floor(Math.floor(N/X)/A)}function ut(N,A,X,st){let it=N.updateRanges;if(it.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,X,st,A.data);else{it.sort((gt,It)=>gt.start-It.start);let Lt=0;for(let gt=1;gt<it.length;gt++){let It=it[Lt],jt=it[gt],Ht=It.start+It.count,Ct=pt(jt.start,A.width,4),le=pt(It.start,A.width,4);jt.start<=Ht+1&&Ct===le&&pt(jt.start+jt.count-1,A.width,4)===Ct?It.count=Math.max(It.count,jt.start+jt.count-It.start):(++Lt,it[Lt]=jt)}it.length=Lt+1;let St=n.getParameter(n.UNPACK_ROW_LENGTH),Ut=n.getParameter(n.UNPACK_SKIP_PIXELS),Vt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let gt=0,It=it.length;gt<It;gt++){let jt=it[gt],Ht=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),le=Ht%A.width,G=Math.floor(Ht/A.width),vt=Ct,wt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,le),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,le,G,vt,wt,X,st,A.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,St),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,Vt)}}function H(N,A,X){let st=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(st=n.TEXTURE_3D);let ft=ct(N,A),it=A.source;e.bindTexture(st,N.__webglTexture,n.TEXTURE0+X);let Lt=r.get(it);if(it.version!==Lt.__version||ft===!0){e.activeTexture(n.TEXTURE0+X);let St=Se.getPrimaries(Se.workingColorSpace),Ut=A.colorSpace===Gr?null:Se.getPrimaries(A.colorSpace),Vt=A.colorSpace===Gr||St===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let gt=x(A.image,!1,i.maxTextureSize);gt=Re(A,gt);let It=o.convert(A.format,A.colorSpace),jt=o.convert(A.type),Ht=_(A.internalFormat,It,jt,A.colorSpace,A.isVideoTexture);at(st,A);let Ct,le=A.mipmaps,G=A.isVideoTexture!==!0,vt=Lt.__version===void 0||ft===!0,wt=it.dataReady,kt=S(A,gt);if(A.isDepthTexture)Ht=y(A.format===ts,A.type),vt&&(G?e.texStorage2D(n.TEXTURE_2D,1,Ht,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,Ht,gt.width,gt.height,0,It,jt,null));else if(A.isDataTexture)if(le.length>0){G&&vt&&e.texStorage2D(n.TEXTURE_2D,kt,Ht,le[0].width,le[0].height);for(let xt=0,ht=le.length;xt<ht;xt++)Ct=le[xt],G?wt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,It,jt,Ct.data):e.texImage2D(n.TEXTURE_2D,xt,Ht,Ct.width,Ct.height,0,It,jt,Ct.data);A.generateMipmaps=!1}else G?(vt&&e.texStorage2D(n.TEXTURE_2D,kt,Ht,gt.width,gt.height),wt&&ut(A,gt,It,jt)):e.texImage2D(n.TEXTURE_2D,0,Ht,gt.width,gt.height,0,It,jt,gt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,Ht,le[0].width,le[0].height,gt.depth);for(let xt=0,ht=le.length;xt<ht;xt++)if(Ct=le[xt],A.format!==Yn)if(It!==null)if(G){if(wt)if(A.layerUpdates.size>0){let Bt=up(Ct.width,Ct.height,A.format,A.type);for(let oe of A.layerUpdates){let Fe=Ct.data.subarray(oe*Bt/Ct.data.BYTES_PER_ELEMENT,(oe+1)*Bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,oe,Ct.width,Ct.height,1,It,Fe)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,gt.depth,It,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xt,Ht,Ct.width,Ct.height,gt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,gt.depth,It,jt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,xt,Ht,Ct.width,Ct.height,gt.depth,0,It,jt,Ct.data)}else{G&&vt&&e.texStorage2D(n.TEXTURE_2D,kt,Ht,le[0].width,le[0].height);for(let xt=0,ht=le.length;xt<ht;xt++)Ct=le[xt],A.format!==Yn?It!==null?G?wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,xt,Ht,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,It,jt,Ct.data):e.texImage2D(n.TEXTURE_2D,xt,Ht,Ct.width,Ct.height,0,It,jt,Ct.data)}else if(A.isDataArrayTexture)if(G){if(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,Ht,gt.width,gt.height,gt.depth),wt)if(A.layerUpdates.size>0){let xt=up(gt.width,gt.height,A.format,A.type);for(let ht of A.layerUpdates){let Bt=gt.data.subarray(ht*xt/gt.data.BYTES_PER_ELEMENT,(ht+1)*xt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,gt.width,gt.height,1,It,jt,Bt)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,It,jt,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,gt.width,gt.height,gt.depth,0,It,jt,gt.data);else if(A.isData3DTexture)G?(vt&&e.texStorage3D(n.TEXTURE_3D,kt,Ht,gt.width,gt.height,gt.depth),wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,It,jt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,gt.width,gt.height,gt.depth,0,It,jt,gt.data);else if(A.isFramebufferTexture){if(vt)if(G)e.texStorage2D(n.TEXTURE_2D,kt,Ht,gt.width,gt.height);else{let xt=gt.width,ht=gt.height;for(let Bt=0;Bt<kt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,Ht,xt,ht,0,It,jt,null),xt>>=1,ht>>=1}}else if(le.length>0){if(G&&vt){let xt=ge(le[0]);e.texStorage2D(n.TEXTURE_2D,kt,Ht,xt.width,xt.height)}for(let xt=0,ht=le.length;xt<ht;xt++)Ct=le[xt],G?wt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,It,jt,Ct):e.texImage2D(n.TEXTURE_2D,xt,Ht,It,jt,Ct);A.generateMipmaps=!1}else if(G){if(vt){let xt=ge(gt);e.texStorage2D(n.TEXTURE_2D,kt,Ht,xt.width,xt.height)}wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,jt,gt)}else e.texImage2D(n.TEXTURE_2D,0,Ht,It,jt,gt);m(A)&&d(st),Lt.__version=it.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function J(N,A,X){if(A.image.length!==6)return;let st=ct(N,A),ft=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+X);let it=r.get(ft);if(ft.version!==it.__version||st===!0){e.activeTexture(n.TEXTURE0+X);let Lt=Se.getPrimaries(Se.workingColorSpace),St=A.colorSpace===Gr?null:Se.getPrimaries(A.colorSpace),Ut=A.colorSpace===Gr||Lt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Vt=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,It=[];for(let ht=0;ht<6;ht++)!Vt&&!gt?It[ht]=x(A.image[ht],!0,i.maxCubemapSize):It[ht]=gt?A.image[ht].image:A.image[ht],It[ht]=Re(A,It[ht]);let jt=It[0],Ht=o.convert(A.format,A.colorSpace),Ct=o.convert(A.type),le=_(A.internalFormat,Ht,Ct,A.colorSpace),G=A.isVideoTexture!==!0,vt=it.__version===void 0||st===!0,wt=ft.dataReady,kt=S(A,jt);at(n.TEXTURE_CUBE_MAP,A);let xt;if(Vt){G&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,le,jt.width,jt.height);for(let ht=0;ht<6;ht++){xt=It[ht].mipmaps;for(let Bt=0;Bt<xt.length;Bt++){let oe=xt[Bt];A.format!==Yn?Ht!==null?G?wt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,oe.width,oe.height,Ht,oe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,le,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,oe.width,oe.height,Ht,Ct,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,le,oe.width,oe.height,0,Ht,Ct,oe.data)}}}else{if(xt=A.mipmaps,G&&vt){xt.length>0&&kt++;let ht=ge(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,kt,le,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(gt){G?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,It[ht].width,It[ht].height,Ht,Ct,It[ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,le,It[ht].width,It[ht].height,0,Ht,Ct,It[ht].data);for(let Bt=0;Bt<xt.length;Bt++){let Fe=xt[Bt].image[ht].image;G?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Fe.width,Fe.height,Ht,Ct,Fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,le,Fe.width,Fe.height,0,Ht,Ct,Fe.data)}}else{G?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ht,Ct,It[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,le,Ht,Ct,It[ht]);for(let Bt=0;Bt<xt.length;Bt++){let oe=xt[Bt];G?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Ht,Ct,oe.image[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,le,Ht,Ct,oe.image[ht])}}}m(A)&&d(n.TEXTURE_CUBE_MAP),it.__version=ft.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function lt(N,A,X,st,ft,it){let Lt=o.convert(X.format,X.colorSpace),St=o.convert(X.type),Ut=_(X.internalFormat,Lt,St,X.colorSpace),Vt=r.get(A),gt=r.get(X);if(gt.__renderTarget=A,!Vt.__hasExternalTextures){let It=Math.max(1,A.width>>it),jt=Math.max(1,A.height>>it);ft===n.TEXTURE_3D||ft===n.TEXTURE_2D_ARRAY?e.texImage3D(ft,it,Ut,It,jt,A.depth,0,Lt,St,null):e.texImage2D(ft,it,Ut,It,jt,0,Lt,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Dt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,ft,gt.__webglTexture,0,Jt(A)):(ft===n.TEXTURE_2D||ft>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,ft,gt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(N,A,X){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){let st=A.depthTexture,ft=st&&st.isDepthTexture?st.type:null,it=y(A.stencilBuffer,ft),Lt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=Jt(A);Dt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,it,A.width,A.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,it,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,it,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,N)}else{let st=A.textures;for(let ft=0;ft<st.length;ft++){let it=st[ft],Lt=o.convert(it.format,it.colorSpace),St=o.convert(it.type),Ut=_(it.internalFormat,Lt,St,it.colorSpace),Vt=Jt(A);X&&Dt(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Ut,A.width,A.height):Dt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,Ut,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ut,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=r.get(A.depthTexture);st.__renderTarget=A,(!st.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);let ft=st.__webglTexture,it=Jt(A);if(A.depthTexture.format===Ho)Dt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ft,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ft,0);else if(A.depthTexture.format===ts)Dt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ft,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function Et(N){let A=r.get(N),X=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let st=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),st){let ft=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,st.removeEventListener("dispose",ft)};st.addEventListener("dispose",ft),A.__depthDisposeCallback=ft}A.__boundDepthTexture=st}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let st=N.texture.mipmaps;st&&st.length>0?mt(A.__webglFramebuffer[0],N):mt(A.__webglFramebuffer,N)}else if(X){A.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[st]),A.__webglDepthbuffer[st]===void 0)A.__webglDepthbuffer[st]=n.createRenderbuffer(),dt(A.__webglDepthbuffer[st],N,!1);else{let ft=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,it)}}else{let st=N.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),dt(A.__webglDepthbuffer,N,!1);else{let ft=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,it)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(N,A,X){let st=r.get(N);A!==void 0&&lt(st.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Et(N)}function D(N){let A=N.texture,X=r.get(N),st=r.get(A);N.addEventListener("dispose",E);let ft=N.textures,it=N.isWebGLCubeRenderTarget===!0,Lt=ft.length>1;if(Lt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=A.version,s.memory.textures++),it){X.__webglFramebuffer=[];for(let St=0;St<6;St++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[St]=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)X.__webglFramebuffer[St][Ut]=n.createFramebuffer()}else X.__webglFramebuffer[St]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let St=0;St<A.mipmaps.length;St++)X.__webglFramebuffer[St]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let St=0,Ut=ft.length;St<Ut;St++){let Vt=r.get(ft[St]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),s.memory.textures++)}if(N.samples>0&&Dt(N)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let St=0;St<ft.length;St++){let Ut=ft[St];X.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[St]);let Vt=o.convert(Ut.format,Ut.colorSpace),gt=o.convert(Ut.type),It=_(Ut.internalFormat,Vt,gt,Ut.colorSpace,N.isXRRenderTarget===!0),jt=Jt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,It,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,X.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),at(n.TEXTURE_CUBE_MAP,A);for(let St=0;St<6;St++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)lt(X.__webglFramebuffer[St][Ut],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ut);else lt(X.__webglFramebuffer[St],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(A)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let St=0,Ut=ft.length;St<Ut;St++){let Vt=ft[St],gt=r.get(Vt),It=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(It=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(It,gt.__webglTexture),at(It,Vt),lt(X.__webglFramebuffer,N,Vt,n.COLOR_ATTACHMENT0+St,It,0),m(Vt)&&d(It)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(St=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,st.__webglTexture),at(St,A),A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)lt(X.__webglFramebuffer[Ut],N,A,n.COLOR_ATTACHMENT0,St,Ut);else lt(X.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,St,0);m(A)&&d(St),e.unbindTexture()}N.depthBuffer&&Et(N)}function te(N){let A=N.textures;for(let X=0,st=A.length;X<st;X++){let ft=A[X];if(m(ft)){let it=v(N),Lt=r.get(ft).__webglTexture;e.bindTexture(it,Lt),d(it),e.unbindTexture()}}}let Nt=[],Tt=[];function bt(N){if(N.samples>0){if(Dt(N)===!1){let A=N.textures,X=N.width,st=N.height,ft=n.COLOR_BUFFER_BIT,it=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=r.get(N),St=A.length>1;if(St)for(let Vt=0;Vt<A.length;Vt++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);let Ut=N.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Vt=0;Vt<A.length;Vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ft|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ft|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Vt]);let gt=r.get(A[Vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,X,st,0,0,X,st,ft,n.NEAREST),c===!0&&(Nt.length=0,Tt.length=0,Nt.push(n.COLOR_ATTACHMENT0+Vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Nt.push(it),Tt.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Vt=0;Vt<A.length;Vt++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Vt]);let gt=r.get(A[Vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Jt(N){return Math.min(i.maxSamples,N.samples)}function Dt(N){let A=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Gt(N){let A=s.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Re(N,A){let X=N.colorSpace,st=N.format,ft=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==ki&&X!==Gr&&(Se.getTransfer(X)===Ee?(st!==Yn||ft!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Dt}function LC(n,t){function e(r,i=Gr){let o,s=Se.getTransfer(i);if(r===xr)return n.UNSIGNED_BYTE;if(r===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Vl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Jf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Kf)return n.BYTE;if(r===Yf)return n.SHORT;if(r===Jo)return n.UNSIGNED_SHORT;if(r===zl)return n.INT;if(r===pi)return n.UNSIGNED_INT;if(r===yr)return n.FLOAT;if(r===jo)return n.HALF_FLOAT;if(r===jf)return n.ALPHA;if(r===Qf)return n.RGB;if(r===Yn)return n.RGBA;if(r===Ho)return n.DEPTH_COMPONENT;if(r===ts)return n.DEPTH_STENCIL;if(r===tp)return n.RED;if(r===Hl)return n.RED_INTEGER;if(r===ep)return n.RG;if(r===Wl)return n.RG_INTEGER;if(r===$l)return n.RGBA_INTEGER;if(r===Ca||r===Ra||r===Na||r===Da)if(s===Ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ql||r===Xl||r===Kl||r===Yl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zl||r===Jl||r===jl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zl||r===Jl)return s===Ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===jl)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ql||r===tu||r===eu||r===nu||r===ru||r===iu||r===ou||r===su||r===au||r===cu||r===lu||r===uu||r===hu||r===fu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ql)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ru)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===iu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ou)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===su)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===au)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fu)return s===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pu||r===du||r===mu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===pu)return s===Ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===du)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gu||r===xu||r===yu||r===_u)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===gu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_u)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:e}}var UC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OC=`
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

}`,Mp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let r=new Ma(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,r=new lr({vertexShader:UC,fragmentShader:OC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new un(new Oi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wp=class extends pr{constructor(t,e){super();let r=this,i=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Mp,d={},v=e.getContextAttributes(),_=null,y=null,S=[],b=[],E=new ue,R=null,w=new cn;w.viewport=new We;let M=new cn;M.viewport=new We;let C=[w,M],P=new Cl,F=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=S[H];return J===void 0&&(J=new Ko,S[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=S[H];return J===void 0&&(J=new Ko,S[H]=J),J.getGripSpace()},this.getHand=function(H){let J=S[H];return J===void 0&&(J=new Ko,S[H]=J),J.getHandSpace()};function U(H){let J=b.indexOf(H.inputSource);if(J===-1)return;let lt=S[J];lt!==void 0&&(lt.update(H.inputSource,H.frame,l||s),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let H=0;H<S.length;H++){let J=b[H];J!==null&&(b[H]=null,S[H].disconnect(J))}F=null,L=null,m.reset();for(let H in d)delete d[H];t.setRenderTarget(_),p=null,f=null,h=null,i=null,y=null,ut.stop(),r.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,dt=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?ts:Ho,dt=v.stencil?Qo:pi);let Et={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:o};h=this.getBinding(),f=h.createProjectionLayer(Et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new dr(f.textureWidth,f.textureHeight,{format:Yn,type:xr,depthTexture:new ba(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new dr(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:xr,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(H){for(let J=0;J<H.removed.length;J++){let lt=H.removed[J],dt=b.indexOf(lt);dt>=0&&(b[dt]=null,S[dt].disconnect(lt))}for(let J=0;J<H.added.length;J++){let lt=H.added[J],dt=b.indexOf(lt);if(dt===-1){for(let Et=0;Et<S.length;Et++)if(Et>=b.length){b.push(lt),dt=Et;break}else if(b[Et]===null){b[Et]=lt,dt=Et;break}if(dt===-1)break}let mt=S[dt];mt&&mt.connect(lt)}}let k=new K,W=new K;function j(H,J,lt){k.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(lt.matrixWorld);let dt=k.distanceTo(W),mt=J.projectionMatrix.elements,Et=lt.projectionMatrix.elements,ee=mt[14]/(mt[10]-1),D=mt[14]/(mt[10]+1),te=(mt[9]+1)/mt[5],Nt=(mt[9]-1)/mt[5],Tt=(mt[8]-1)/mt[0],bt=(Et[8]+1)/Et[0],Jt=ee*Tt,Dt=ee*bt,Gt=dt/(-Tt+bt),Re=Gt*-Tt;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Re),H.translateZ(Gt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),mt[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let ge=ee+Gt,N=D+Gt,A=Jt-Re,X=Dt+(dt-Re),st=te*D/N*ge,ft=Nt*D/N*ge;H.projectionMatrix.makePerspective(A,X,st,ft,ge,N),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function et(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let J=H.near,lt=H.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),P.near=M.near=w.near=J,P.far=M.far=w.far=lt,(F!==P.near||L!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,L=P.far),P.layers.mask=H.layers.mask|6,w.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;let dt=H.parent,mt=P.cameras;et(P,dt);for(let Et=0;Et<mt.length;Et++)et(mt[Et],dt);mt.length===2?j(P,w,M):P.projectionMatrix.copy(w.projectionMatrix),at(H,P,dt)};function at(H,J,lt){lt===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Wo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(H){return d[H]};let ct=null;function pt(H,J){if(u=J.getViewerPose(l||s),g=J,u!==null){let lt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let dt=!1;lt.length!==P.cameras.length&&(P.cameras.length=0,dt=!0);for(let D=0;D<lt.length;D++){let te=lt[D],Nt=null;if(p!==null)Nt=p.getViewport(te);else{let bt=h.getViewSubImage(f,te);Nt=bt.viewport,D===0&&(t.setRenderTargetTextures(y,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(y))}let Tt=C[D];Tt===void 0&&(Tt=new cn,Tt.layers.enable(D),Tt.viewport=new We,C[D]=Tt),Tt.matrix.fromArray(te.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(te.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),D===0&&(P.matrix.copy(Tt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),dt===!0&&P.cameras.push(Tt)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=r.getBinding();let D=h.getDepthInformation(lt[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),h=r.getBinding();for(let D=0;D<lt.length;D++){let te=lt[D].camera;if(te){let Nt=d[te];Nt||(Nt=new Ma,d[te]=Nt);let Tt=h.getCameraImage(te);Nt.sourceTexture=Tt}}}}for(let lt=0;lt<S.length;lt++){let dt=b[lt],mt=S[lt];dt!==null&&mt!==void 0&&mt.update(dt,J,l||s)}ct&&ct(H,J),J.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:J}),g=null}let ut=new Qg;ut.setAnimationLoop(pt),this.setAnimationLoop=function(H){ct=H},this.dispose=function(){}}},Wi=new mr,BC=new Ke;function zC(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,ap(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),h(m,d)):d.isMeshPhongMaterial?(o(m,d),u(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),x(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(BC.makeRotationFromEuler(Wi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function GC(n,t,e,r){let i={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let y=_.program;r.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));let S=_.program;r.updateUBOMapping(v,S);let b=t.render.frame;o[v.id]!==b&&(f(v),o[v.id]=b)}function u(v){let _=h();v.__bindingPointIndex=_;let y=n.createBuffer(),S=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],y=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,E=y.length;b<E;b++){let R=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,M=R.length;w<M;w++){let C=R[w];if(p(C,b,w,S)===!0){let P=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],L=0;for(let U=0;U<F.length;U++){let O=F[U],V=x(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,P+L,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,S){let b=v.value,E=_+"_"+y;if(S[E]===void 0)return typeof b=="number"||typeof b=="boolean"?S[E]=b:S[E]=b.clone(),!0;{let R=S[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return S[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(v){let _=v.uniforms,y=0,S=16;for(let E=0,R=_.length;E<R;E++){let w=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,C=w.length;M<C;M++){let P=w[M],F=Array.isArray(P.value)?P.value:[P.value];for(let L=0,U=F.length;L<U;L++){let O=F[L],V=x(O),k=y%S,W=k%V.boundary,j=k+W;y+=W,j!==0&&S-j<V.storage&&(y+=S-j),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=V.storage}}}let b=y%S;return b>0&&(y+=S-b),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function d(){for(let v in i)n.deleteBuffer(i[v]);s=[],i={},o={}}return{bind:c,update:l,dispose:d}}var wu=class{constructor(t={}){let{canvas:e=Tg(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,S=!1;this._outputColorSpace=Dn;let b=0,E=0,R=null,w=-1,M=null,C=new We,P=new We,F=null,L=new xe(0),U=0,O=e.width,V=e.height,k=1,W=null,j=null,et=new We(0,0,O,V),at=new We(0,0,O,V),ct=!1,pt=new va,ut=!1,H=!1,J=new Ke,lt=new K,dt=new We,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function ee(){return R===null?k:1}let D=r;function te(I,$){return e.getContext(I,$)}try{let I={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){let $="webgl2";if(D=te($,I),D===null)throw te($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Nt,Tt,bt,Jt,Dt,Gt,Re,ge,N,A,X,st,ft,it,Lt,St,Ut,Vt,gt,It,jt,Ht,Ct,le;function G(){Nt=new oI(D),Nt.init(),Ht=new LC(D,Nt),Tt=new jA(D,Nt,t,Ht),bt=new FC(D,Nt),Tt.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),Jt=new cI(D),Dt=new SC,Gt=new kC(D,Nt,bt,Dt,Tt,Ht,Jt),Re=new tI(y),ge=new iI(y),N=new dE(D),Ct=new ZA(D,N),A=new sI(D,N,Jt,Ct),X=new uI(D,A,N,Jt),gt=new lI(D,Tt,Gt),St=new QA(Dt),st=new vC(y,Re,ge,Nt,Tt,Ct,St),ft=new zC(y,Dt),it=new MC,Lt=new CC(Nt),Vt=new YA(y,Re,ge,bt,X,p,c),Ut=new DC(y,X,Tt),le=new GC(D,Jt,Tt,bt),It=new JA(D,Nt,Jt),jt=new aI(D,Nt,Jt),Jt.programs=st.programs,y.capabilities=Tt,y.extensions=Nt,y.properties=Dt,y.renderLists=it,y.shadowMap=Ut,y.state=bt,y.info=Jt}G();let vt=new wp(y,D);this.xr=vt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let I=Nt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Nt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(O,V,!1))},this.getSize=function(I){return I.set(O,V)},this.setSize=function(I,$,nt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,V=$,e.width=Math.floor(I*k),e.height=Math.floor($*k),nt===!0&&(e.style.width=I+"px",e.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(O*k,V*k).floor()},this.setDrawingBufferSize=function(I,$,nt){O=I,V=$,k=nt,e.width=Math.floor(I*nt),e.height=Math.floor($*nt),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(et)},this.setViewport=function(I,$,nt,rt){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,$,nt,rt),bt.viewport(C.copy(et).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(at)},this.setScissor=function(I,$,nt,rt){I.isVector4?at.set(I.x,I.y,I.z,I.w):at.set(I,$,nt,rt),bt.scissor(P.copy(at).multiplyScalar(k).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(I){bt.setScissorTest(ct=I)},this.setOpaqueSort=function(I){W=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,nt=!0){let rt=0;if(I){let q=!1;if(R!==null){let _t=R.texture.format;q=_t===$l||_t===Wl||_t===Hl}if(q){let _t=R.texture.type,Rt=_t===xr||_t===pi||_t===Jo||_t===Qo||_t===Gl||_t===Vl,Ot=Vt.getClearColor(),Ft=Vt.getClearAlpha(),Qt=Ot.r,ne=Ot.g,qt=Ot.b;Rt?(g[0]=Qt,g[1]=ne,g[2]=qt,g[3]=Ft,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Qt,x[1]=ne,x[2]=qt,x[3]=Ft,D.clearBufferiv(D.COLOR,0,x))}else rt|=D.COLOR_BUFFER_BIT}$&&(rt|=D.DEPTH_BUFFER_BIT),nt&&(rt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Vt.dispose(),it.dispose(),Lt.dispose(),Dt.dispose(),Re.dispose(),ge.dispose(),X.dispose(),Ct.dispose(),le.dispose(),st.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",fr),vt.removeEventListener("sessionend",um),Ti.stop()};function wt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let I=Jt.autoReset,$=Ut.enabled,nt=Ut.autoUpdate,rt=Ut.needsUpdate,q=Ut.type;G(),Jt.autoReset=I,Ut.enabled=$,Ut.autoUpdate=nt,Ut.needsUpdate=rt,Ut.type=q}function xt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ht(I){let $=I.target;$.removeEventListener("dispose",ht),Bt($)}function Bt(I){oe(I),Dt.remove(I)}function oe(I){let $=Dt.get(I).programs;$!==void 0&&($.forEach(function(nt){st.releaseProgram(nt)}),I.isShaderMaterial&&st.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,nt,rt,q,_t){$===null&&($=mt);let Rt=q.isMesh&&q.matrixWorld.determinant()<0,Ot=cT(I,$,nt,rt,q);bt.setMaterial(rt,Rt);let Ft=nt.index,Qt=1;if(rt.wireframe===!0){if(Ft=A.getWireframeAttribute(nt),Ft===void 0)return;Qt=2}let ne=nt.drawRange,qt=nt.attributes.position,me=ne.start*Qt,Ae=(ne.start+ne.count)*Qt;_t!==null&&(me=Math.max(me,_t.start*Qt),Ae=Math.min(Ae,(_t.start+_t.count)*Qt)),Ft!==null?(me=Math.max(me,0),Ae=Math.min(Ae,Ft.count)):qt!=null&&(me=Math.max(me,0),Ae=Math.min(Ae,qt.count));let He=Ae-me;if(He<0||He===1/0)return;Ct.setup(q,rt,Ot,nt,Ft);let Oe,Ne=It;if(Ft!==null&&(Oe=N.get(Ft),Ne=jt,Ne.setIndex(Oe)),q.isMesh)rt.wireframe===!0?(bt.setLineWidth(rt.wireframeLinewidth*ee()),Ne.setMode(D.LINES)):Ne.setMode(D.TRIANGLES);else if(q.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),bt.setLineWidth(Zt*ee()),q.isLineSegments?Ne.setMode(D.LINES):q.isLineLoop?Ne.setMode(D.LINE_LOOP):Ne.setMode(D.LINE_STRIP)}else q.isPoints?Ne.setMode(D.POINTS):q.isSprite&&Ne.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)$o("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Zt=q._multiDrawStarts,Ge=q._multiDrawCounts,Me=q._multiDrawCount,In=Ft?N.get(Ft).bytesPerElement:1,Ao=Dt.get(rt).currentProgram.getUniforms();for(let Cn=0;Cn<Me;Cn++)Ao.setValue(D,"_gl_DrawID",Cn),Ne.render(Zt[Cn]/In,Ge[Cn])}else if(q.isInstancedMesh)Ne.renderInstances(me,He,q.count);else if(nt.isInstancedBufferGeometry){let Zt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ge=Math.min(nt.instanceCount,Zt);Ne.renderInstances(me,He,Ge)}else Ne.render(me,He)};function Fe(I,$,nt){I.transparent===!0&&I.side===Kn&&I.forceSinglePass===!1?(I.side=gn,I.needsUpdate=!0,Uc(I,$,nt),I.side=Ur,I.needsUpdate=!0,Uc(I,$,nt),I.side=Kn):Uc(I,$,nt)}this.compile=function(I,$,nt=null){nt===null&&(nt=I),d=Lt.get(nt),d.init($),_.push(d),nt.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),I!==nt&&I.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights();let rt=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let _t=q.material;if(_t)if(Array.isArray(_t))for(let Rt=0;Rt<_t.length;Rt++){let Ot=_t[Rt];Fe(Ot,nt,q),rt.add(Ot)}else Fe(_t,nt,q),rt.add(_t)}),d=_.pop(),rt},this.compileAsync=function(I,$,nt=null){let rt=this.compile(I,$,nt);return new Promise(q=>{function _t(){if(rt.forEach(function(Rt){Dt.get(Rt).currentProgram.isReady()&&rt.delete(Rt)}),rt.size===0){q(I);return}setTimeout(_t,10)}Nt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Te=null;function Rr(I){Te&&Te(I)}function fr(){Ti.stop()}function um(){Ti.start()}let Ti=new Qg;Ti.setAnimationLoop(Rr),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(I){Te=I,vt.setAnimationLoop(I),I===null?Ti.stop():Ti.start()},vt.addEventListener("sessionstart",fr),vt.addEventListener("sessionend",um),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera($),$=vt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,$,R),d=Lt.get(I,_.length),d.init($),_.push(d),J.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),pt.setFromProjectionMatrix(J,ar,$.reversedDepth),H=this.localClippingEnabled,ut=St.init(this.clippingPlanes,H),m=it.get(I,v.length),m.init(),v.push(m),vt.enabled===!0&&vt.isPresenting===!0){let _t=y.xr.getDepthSensingMesh();_t!==null&&uf(_t,$,-1/0,y.sortObjects)}uf(I,$,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,j),Et=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Et&&Vt.addToRenderList(m,I),this.info.render.frame++,ut===!0&&St.beginShadows();let nt=d.state.shadowsArray;Ut.render(nt,I,$),ut===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let rt=m.opaque,q=m.transmissive;if(d.setupLights(),$.isArrayCamera){let _t=$.cameras;if(q.length>0)for(let Rt=0,Ot=_t.length;Rt<Ot;Rt++){let Ft=_t[Rt];fm(rt,q,I,Ft)}Et&&Vt.render(I);for(let Rt=0,Ot=_t.length;Rt<Ot;Rt++){let Ft=_t[Rt];hm(m,I,Ft,Ft.viewport)}}else q.length>0&&fm(rt,q,I,$),Et&&Vt.render(I),hm(m,I,$);R!==null&&E===0&&(Gt.updateMultisampleRenderTarget(R),Gt.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(y,I,$),Ct.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(d=_[_.length-1],ut===!0&&St.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function uf(I,$,nt,rt){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)nt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||pt.intersectsSprite(I)){rt&&dt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(J);let Rt=X.update(I),Ot=I.material;Ot.visible&&m.push(I,Rt,Ot,nt,dt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||pt.intersectsObject(I))){let Rt=X.update(I),Ot=I.material;if(rt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),dt.copy(I.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),dt.copy(Rt.boundingSphere.center)),dt.applyMatrix4(I.matrixWorld).applyMatrix4(J)),Array.isArray(Ot)){let Ft=Rt.groups;for(let Qt=0,ne=Ft.length;Qt<ne;Qt++){let qt=Ft[Qt],me=Ot[qt.materialIndex];me&&me.visible&&m.push(I,Rt,me,nt,dt.z,qt)}}else Ot.visible&&m.push(I,Rt,Ot,nt,dt.z,null)}}let _t=I.children;for(let Rt=0,Ot=_t.length;Rt<Ot;Rt++)uf(_t[Rt],$,nt,rt)}function hm(I,$,nt,rt){let q=I.opaque,_t=I.transmissive,Rt=I.transparent;d.setupLightsView(nt),ut===!0&&St.setGlobalState(y.clippingPlanes,nt),rt&&bt.viewport(C.copy(rt)),q.length>0&&Lc(q,$,nt),_t.length>0&&Lc(_t,$,nt),Rt.length>0&&Lc(Rt,$,nt),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function fm(I,$,nt,rt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[rt.id]===void 0&&(d.state.transmissionRenderTarget[rt.id]=new dr(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?jo:xr,minFilter:fi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));let _t=d.state.transmissionRenderTarget[rt.id],Rt=rt.viewport||C;_t.setSize(Rt.z*y.transmissionResolutionScale,Rt.w*y.transmissionResolutionScale);let Ot=y.getRenderTarget(),Ft=y.getActiveCubeFace(),Qt=y.getActiveMipmapLevel();y.setRenderTarget(_t),y.getClearColor(L),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),Et&&Vt.render(nt);let ne=y.toneMapping;y.toneMapping=zr;let qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),d.setupLightsView(rt),ut===!0&&St.setGlobalState(y.clippingPlanes,rt),Lc(I,nt,rt),Gt.updateMultisampleRenderTarget(_t),Gt.updateRenderTargetMipmap(_t),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ae=0,He=$.length;Ae<He;Ae++){let Oe=$[Ae],Ne=Oe.object,Zt=Oe.geometry,Ge=Oe.material,Me=Oe.group;if(Ge.side===Kn&&Ne.layers.test(rt.layers)){let In=Ge.side;Ge.side=gn,Ge.needsUpdate=!0,pm(Ne,nt,rt,Zt,Ge,Me),Ge.side=In,Ge.needsUpdate=!0,me=!0}}me===!0&&(Gt.updateMultisampleRenderTarget(_t),Gt.updateRenderTargetMipmap(_t))}y.setRenderTarget(Ot,Ft,Qt),y.setClearColor(L,U),qt!==void 0&&(rt.viewport=qt),y.toneMapping=ne}function Lc(I,$,nt){let rt=$.isScene===!0?$.overrideMaterial:null;for(let q=0,_t=I.length;q<_t;q++){let Rt=I[q],Ot=Rt.object,Ft=Rt.geometry,Qt=Rt.group,ne=Rt.material;ne.allowOverride===!0&&rt!==null&&(ne=rt),Ot.layers.test(nt.layers)&&pm(Ot,$,nt,Ft,ne,Qt)}}function pm(I,$,nt,rt,q,_t){I.onBeforeRender(y,$,nt,rt,q,_t),I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(y,$,nt,rt,I,_t),q.transparent===!0&&q.side===Kn&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,y.renderBufferDirect(nt,$,rt,q,I,_t),q.side=Ur,q.needsUpdate=!0,y.renderBufferDirect(nt,$,rt,q,I,_t),q.side=Kn):y.renderBufferDirect(nt,$,rt,q,I,_t),I.onAfterRender(y,$,nt,rt,q,_t)}function Uc(I,$,nt){$.isScene!==!0&&($=mt);let rt=Dt.get(I),q=d.state.lights,_t=d.state.shadowsArray,Rt=q.state.version,Ot=st.getParameters(I,q.state,_t,$,nt),Ft=st.getProgramCacheKey(Ot),Qt=rt.programs;rt.environment=I.isMeshStandardMaterial?$.environment:null,rt.fog=$.fog,rt.envMap=(I.isMeshStandardMaterial?ge:Re).get(I.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,Qt===void 0&&(I.addEventListener("dispose",ht),Qt=new Map,rt.programs=Qt);let ne=Qt.get(Ft);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Rt)return mm(I,Ot),ne}else Ot.uniforms=st.getUniforms(I),I.onBeforeCompile(Ot,y),ne=st.acquireProgram(Ot,Ft),Qt.set(Ft,ne),rt.uniforms=Ot.uniforms;let qt=rt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(qt.clippingPlanes=St.uniform),mm(I,Ot),rt.needsLights=uT(I),rt.lightsStateVersion=Rt,rt.needsLights&&(qt.ambientLightColor.value=q.state.ambient,qt.lightProbe.value=q.state.probe,qt.directionalLights.value=q.state.directional,qt.directionalLightShadows.value=q.state.directionalShadow,qt.spotLights.value=q.state.spot,qt.spotLightShadows.value=q.state.spotShadow,qt.rectAreaLights.value=q.state.rectArea,qt.ltc_1.value=q.state.rectAreaLTC1,qt.ltc_2.value=q.state.rectAreaLTC2,qt.pointLights.value=q.state.point,qt.pointLightShadows.value=q.state.pointShadow,qt.hemisphereLights.value=q.state.hemi,qt.directionalShadowMap.value=q.state.directionalShadowMap,qt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qt.spotShadowMap.value=q.state.spotShadowMap,qt.spotLightMatrix.value=q.state.spotLightMatrix,qt.spotLightMap.value=q.state.spotLightMap,qt.pointShadowMap.value=q.state.pointShadowMap,qt.pointShadowMatrix.value=q.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function dm(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=is.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function mm(I,$){let nt=Dt.get(I);nt.outputColorSpace=$.outputColorSpace,nt.batching=$.batching,nt.batchingColor=$.batchingColor,nt.instancing=$.instancing,nt.instancingColor=$.instancingColor,nt.instancingMorph=$.instancingMorph,nt.skinning=$.skinning,nt.morphTargets=$.morphTargets,nt.morphNormals=$.morphNormals,nt.morphColors=$.morphColors,nt.morphTargetsCount=$.morphTargetsCount,nt.numClippingPlanes=$.numClippingPlanes,nt.numIntersection=$.numClipIntersection,nt.vertexAlphas=$.vertexAlphas,nt.vertexTangents=$.vertexTangents,nt.toneMapping=$.toneMapping}function cT(I,$,nt,rt,q){$.isScene!==!0&&($=mt),Gt.resetTextureUnits();let _t=$.fog,Rt=rt.isMeshStandardMaterial?$.environment:null,Ot=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ki,Ft=(rt.isMeshStandardMaterial?ge:Re).get(rt.envMap||Rt),Qt=rt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ne=!!nt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!nt.morphAttributes.position,me=!!nt.morphAttributes.normal,Ae=!!nt.morphAttributes.color,He=zr;rt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(He=y.toneMapping);let Oe=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ne=Oe!==void 0?Oe.length:0,Zt=Dt.get(rt),Ge=d.state.lights;if(ut===!0&&(H===!0||I!==M)){let dn=I===M&&rt.id===w;St.setState(rt,I,dn)}let Me=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ge.state.version||Zt.outputColorSpace!==Ot||q.isBatchedMesh&&Zt.batching===!1||!q.isBatchedMesh&&Zt.batching===!0||q.isBatchedMesh&&Zt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Zt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Zt.instancing===!1||!q.isInstancedMesh&&Zt.instancing===!0||q.isSkinnedMesh&&Zt.skinning===!1||!q.isSkinnedMesh&&Zt.skinning===!0||q.isInstancedMesh&&Zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Zt.instancingMorph===!1&&q.morphTexture!==null||Zt.envMap!==Ft||rt.fog===!0&&Zt.fog!==_t||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==St.numPlanes||Zt.numIntersection!==St.numIntersection)||Zt.vertexAlphas!==Qt||Zt.vertexTangents!==ne||Zt.morphTargets!==qt||Zt.morphNormals!==me||Zt.morphColors!==Ae||Zt.toneMapping!==He||Zt.morphTargetsCount!==Ne)&&(Me=!0):(Me=!0,Zt.__version=rt.version);let In=Zt.currentProgram;Me===!0&&(In=Uc(rt,$,q));let Ao=!1,Cn=!1,ea=!1,Ve=In.getUniforms(),Gn=Zt.uniforms;if(bt.useProgram(In.program)&&(Ao=!0,Cn=!0,ea=!0),rt.id!==w&&(w=rt.id,Cn=!0),Ao||M!==I){bt.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ve.setValue(D,"projectionMatrix",I.projectionMatrix),Ve.setValue(D,"viewMatrix",I.matrixWorldInverse);let Sn=Ve.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,lt.setFromMatrixPosition(I.matrixWorld)),Tt.logarithmicDepthBuffer&&Ve.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ve.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,Cn=!0,ea=!0)}if(q.isSkinnedMesh){Ve.setOptional(D,q,"bindMatrix"),Ve.setOptional(D,q,"bindMatrixInverse");let dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ve.setValue(D,"boneTexture",dn.boneTexture,Gt))}q.isBatchedMesh&&(Ve.setOptional(D,q,"batchingTexture"),Ve.setValue(D,"batchingTexture",q._matricesTexture,Gt),Ve.setOptional(D,q,"batchingIdTexture"),Ve.setValue(D,"batchingIdTexture",q._indirectTexture,Gt),Ve.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&Ve.setValue(D,"batchingColorTexture",q._colorsTexture,Gt));let Vn=nt.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&gt.update(q,nt,In),(Cn||Zt.receiveShadow!==q.receiveShadow)&&(Zt.receiveShadow=q.receiveShadow,Ve.setValue(D,"receiveShadow",q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Gn.envMap.value=Ft,Gn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&$.environment!==null&&(Gn.envMapIntensity.value=$.environmentIntensity),Cn&&(Ve.setValue(D,"toneMappingExposure",y.toneMappingExposure),Zt.needsLights&&lT(Gn,ea),_t&&rt.fog===!0&&ft.refreshFogUniforms(Gn,_t),ft.refreshMaterialUniforms(Gn,rt,k,V,d.state.transmissionRenderTarget[I.id]),is.upload(D,dm(Zt),Gn,Gt)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(is.upload(D,dm(Zt),Gn,Gt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ve.setValue(D,"center",q.center),Ve.setValue(D,"modelViewMatrix",q.modelViewMatrix),Ve.setValue(D,"normalMatrix",q.normalMatrix),Ve.setValue(D,"modelMatrix",q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let dn=rt.uniformsGroups;for(let Sn=0,hf=dn.length;Sn<hf;Sn++){let Ei=dn[Sn];le.update(Ei,In),le.bind(Ei,In)}}return In}function lT(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function uT(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,$,nt){let rt=Dt.get(I);rt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Dt.get(I.texture).__webglTexture=$,Dt.get(I.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:nt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){let nt=Dt.get(I);nt.__webglFramebuffer=$,nt.__useDefaultFramebuffer=$===void 0};let hT=D.createFramebuffer();this.setRenderTarget=function(I,$=0,nt=0){R=I,b=$,E=nt;let rt=!0,q=null,_t=!1,Rt=!1;if(I){let Ft=Dt.get(I);if(Ft.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),rt=!1;else if(Ft.__webglFramebuffer===void 0)Gt.setupRenderTarget(I);else if(Ft.__hasExternalTextures)Gt.rebindTextures(I,Dt.get(I.texture).__webglTexture,Dt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let qt=I.depthTexture;if(Ft.__boundDepthTexture!==qt){if(qt!==null&&Dt.has(qt)&&(I.width!==qt.image.width||I.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(I)}}let Qt=I.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Rt=!0);let ne=Dt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ne[$])?q=ne[$][nt]:q=ne[$],_t=!0):I.samples>0&&Gt.useMultisampledRTT(I)===!1?q=Dt.get(I).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[nt]:q=ne,C.copy(I.viewport),P.copy(I.scissor),F=I.scissorTest}else C.copy(et).multiplyScalar(k).floor(),P.copy(at).multiplyScalar(k).floor(),F=ct;if(nt!==0&&(q=hT),bt.bindFramebuffer(D.FRAMEBUFFER,q)&&rt&&bt.drawBuffers(I,q),bt.viewport(C),bt.scissor(P),bt.setScissorTest(F),_t){let Ft=Dt.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ft.__webglTexture,nt)}else if(Rt){let Ft=$;for(let Qt=0;Qt<I.textures.length;Qt++){let ne=Dt.get(I.textures[Qt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,nt,Ft)}}else if(I!==null&&nt!==0){let Ft=Dt.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ft.__webglTexture,nt)}w=-1},this.readRenderTargetPixels=function(I,$,nt,rt,q,_t,Rt,Ot=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Dt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ft=Ft[Rt]),Ft){bt.bindFramebuffer(D.FRAMEBUFFER,Ft);try{let Qt=I.textures[Ot],ne=Qt.format,qt=Qt.type;if(!Tt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-rt&&nt>=0&&nt<=I.height-q&&(I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ot),D.readPixels($,nt,rt,q,Ht.convert(ne),Ht.convert(qt),_t))}finally{let Qt=R!==null?Dt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(I,$,nt,rt,q,_t,Rt,Ot=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Dt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ft=Ft[Rt]),Ft)if($>=0&&$<=I.width-rt&&nt>=0&&nt<=I.height-q){bt.bindFramebuffer(D.FRAMEBUFFER,Ft);let Qt=I.textures[Ot],ne=Qt.format,qt=Qt.type;if(!Tt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,me),D.bufferData(D.PIXEL_PACK_BUFFER,_t.byteLength,D.STREAM_READ),I.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ot),D.readPixels($,nt,rt,q,Ht.convert(ne),Ht.convert(qt),0);let Ae=R!==null?Dt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Ae);let He=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eg(D,He,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_t),D.deleteBuffer(me),D.deleteSync(He),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,nt=0){let rt=Math.pow(2,-nt),q=Math.floor(I.image.width*rt),_t=Math.floor(I.image.height*rt),Rt=$!==null?$.x:0,Ot=$!==null?$.y:0;Gt.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,nt,0,0,Rt,Ot,q,_t),bt.unbindTexture()};let fT=D.createFramebuffer(),pT=D.createFramebuffer();this.copyTextureToTexture=function(I,$,nt=null,rt=null,q=0,_t=null){_t===null&&(q!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=q,q=0):_t=0);let Rt,Ot,Ft,Qt,ne,qt,me,Ae,He,Oe=I.isCompressedTexture?I.mipmaps[_t]:I.image;if(nt!==null)Rt=nt.max.x-nt.min.x,Ot=nt.max.y-nt.min.y,Ft=nt.isBox3?nt.max.z-nt.min.z:1,Qt=nt.min.x,ne=nt.min.y,qt=nt.isBox3?nt.min.z:0;else{let Vn=Math.pow(2,-q);Rt=Math.floor(Oe.width*Vn),Ot=Math.floor(Oe.height*Vn),I.isDataArrayTexture?Ft=Oe.depth:I.isData3DTexture?Ft=Math.floor(Oe.depth*Vn):Ft=1,Qt=0,ne=0,qt=0}rt!==null?(me=rt.x,Ae=rt.y,He=rt.z):(me=0,Ae=0,He=0);let Ne=Ht.convert($.format),Zt=Ht.convert($.type),Ge;$.isData3DTexture?(Gt.setTexture3D($,0),Ge=D.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Gt.setTexture2DArray($,0),Ge=D.TEXTURE_2D_ARRAY):(Gt.setTexture2D($,0),Ge=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,$.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,$.unpackAlignment);let Me=D.getParameter(D.UNPACK_ROW_LENGTH),In=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ao=D.getParameter(D.UNPACK_SKIP_PIXELS),Cn=D.getParameter(D.UNPACK_SKIP_ROWS),ea=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Oe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Oe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);let Ve=I.isDataArrayTexture||I.isData3DTexture,Gn=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){let Vn=Dt.get(I),dn=Dt.get($),Sn=Dt.get(Vn.__renderTarget),hf=Dt.get(dn.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,hf.__webglFramebuffer);for(let Ei=0;Ei<Ft;Ei++)Ve&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.get(I).__webglTexture,q,qt+Ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.get($).__webglTexture,_t,He+Ei)),D.blitFramebuffer(Qt,ne,Rt,Ot,me,Ae,Rt,Ot,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||Dt.has(I)){let Vn=Dt.get(I),dn=Dt.get($);bt.bindFramebuffer(D.READ_FRAMEBUFFER,fT),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,pT);for(let Sn=0;Sn<Ft;Sn++)Ve?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vn.__webglTexture,q,qt+Sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vn.__webglTexture,q),Gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,_t,He+Sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,_t),q!==0?D.blitFramebuffer(Qt,ne,Rt,Ot,me,Ae,Rt,Ot,D.COLOR_BUFFER_BIT,D.NEAREST):Gn?D.copyTexSubImage3D(Ge,_t,me,Ae,He+Sn,Qt,ne,Rt,Ot):D.copyTexSubImage2D(Ge,_t,me,Ae,Qt,ne,Rt,Ot);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gn?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(Ge,_t,me,Ae,He,Rt,Ot,Ft,Ne,Zt,Oe.data):$.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,_t,me,Ae,He,Rt,Ot,Ft,Ne,Oe.data):D.texSubImage3D(Ge,_t,me,Ae,He,Rt,Ot,Ft,Ne,Zt,Oe):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_t,me,Ae,Rt,Ot,Ne,Zt,Oe.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_t,me,Ae,Oe.width,Oe.height,Ne,Oe.data):D.texSubImage2D(D.TEXTURE_2D,_t,me,Ae,Rt,Ot,Ne,Zt,Oe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,In),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ao),D.pixelStorei(D.UNPACK_SKIP_ROWS,Cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ea),_t===0&&$.generateMipmaps&&D.generateMipmap(Ge),bt.unbindTexture()},this.initRenderTarget=function(I){Dt.get(I).__webglFramebuffer===void 0&&Gt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Gt.setTextureCube(I,0):I.isData3DTexture?Gt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Gt.setTexture2DArray(I,0):Gt.setTexture2D(I,0),bt.unbindTexture()},this.resetState=function(){b=0,E=0,R=null,bt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var ix={type:"change"},Ap={type:"start"},sx={type:"end"},Eu=new Ui,ox=new $n,HC=Math.cos(70*op.DEG2RAD),Qe=new K,bn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ep=1e-6,Au=class extends Ea{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Xn,this._lastTargetPosition=new K,this._quat=new Xn().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zo,this._sphericalDelta=new Zo,this._scale=1,this._panOffset=new K,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new K,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$C.bind(this),this._onPointerDown=WC.bind(this),this._onPointerUp=qC.bind(this),this._onContextMenu=QC.bind(this),this._onMouseWheel=YC.bind(this),this._onKeyDown=ZC.bind(this),this._onTouchStart=JC.bind(this),this._onTouchMove=jC.bind(this),this._onMouseDown=XC.bind(this),this._onMouseMove=KC.bind(this),this._interceptControlDown=tR.bind(this),this._interceptControlUp=eR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ix),this.update(),this.state=Ie.NONE}update(t=null){let e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let a=Qe.length();s=this._clampDistance(a*this._scale);let c=a-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){let a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;let l=new K(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),s=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Eu.origin.copy(this.object.position),Eu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eu.direction))<HC?this.object.lookAt(this.target):(ox.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eu.intersectPlane(ox,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ep||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ep||this._lastTargetPosition.distanceToSquared(this.target)>Ep?(this.dispatchEvent(ix),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?bn/60*this.autoRotateSpeed*t:bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){let r=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Qe.copy(i).sub(this.target);let o=Qe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/r.clientHeight,this.object.matrix),this._panUp(2*e*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let r=this.domElement.getBoundingClientRect(),i=t-r.left,o=e-r.top,s=r.width,a=r.height;this._mouse.x=i/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(r,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),r=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(r*r+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let r=this._getSecondPointerPosition(t),i=.5*(t.pageX+r.x),o=.5*(t.pageY+r.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),r=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),r=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ue,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}};function WC(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function $C(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function qC(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sx),this.state=Ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function XC(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ie.DOLLY;break;case ui.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ie.ROTATE}break;case ui.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Ap)}function KC(n){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function YC(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(n.preventDefault(),this.dispatchEvent(Ap),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sx))}function ZC(n){this.enabled!==!1&&this._handleKeyDown(n)}function JC(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ie.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ie.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Ap)}function jC(n){switch(this._trackPointer(n),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ie.NONE}}function QC(n){this.enabled!==!1&&n.preventDefault()}function tR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fa=class{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},Xi=class{refCount(t){return Mn("refCount")}incRef(t){return Mn("incRef")}timerAvailable(){return!0}time(t){return Mn("time")}read(t){return Mn("read")}readSync(t){return Mn("readSync")}readToGPU(t,e){return Mn("readToGPU")}numDataIds(){return Mn("numDataIds")}disposeData(t,e){return Mn("disposeData")}write(t,e,r){return Mn("write")}move(t,e,r,i,o){return Mn("move")}createTensorFromGPUData(t,e,r){return Mn("createTensorFromGPUData")}memory(){return Mn("memory")}floatPrecision(){return Mn("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Mn("dispose")}};function Mn(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function ax(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Iu(n,t,e)}function nR(n,t){if(n.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${t.length}`);let e=n.length,r=0;for(;e>0;)r=Math.random()*e|0,e--,Iu(n,e,r),Iu(t,e,r)}function ss(n,t,e){return Math.max(n,Math.min(t,e))}function rR(n){return n%2===0?n:n+1}function Iu(n,t,e){let r=n[t];n[t]=n[e],n[e]=r}function iR(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function oR(n,t){let e=Math.random();return t*e+(1-e)*n}function sR(n,t){let e=0;for(let r=0;r<n.length;r++){let i=Number(n[r])-Number(t[r]);e+=i*i}return e}function Y(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function ka(n,t,e=""){Y(as(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Ip(n){Y(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ce(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function aR(n){return n.length===0}function cR(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==null&&t[e]!==null&&n[e]!==t[e])return!1;return!0}function as(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Yi(n){return n%1===0}function lR(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;{let t=Math.exp(2*n);return(t-1)/(t+1)}}function uR(n){let t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function hR(n){let t=new Uint32Array(n);for(let e=0;e<n;++e)t[e]=e;return ax(t),t}function Zi(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function fR(n,t=i=>0,e,r){return new Promise((i,o)=>{let s=0,a=()=>{if(n()){i();return}s++;let c=t(s);if(e!=null&&s>=e){o();return}r!=null?r(a,c):setTimeout(a,c)};a()})}function pR(n,t){let e=1,r=-1;for(let o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${o}`);r=o}else if(n[o]<0)throw Error(`Shapes can not be < 0. Found ${n[o]} at dim ${o}`);if(r===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);let i=n.slice();return i[r]=t/e,i}function fn(n,t){let e=t.length;return n=n==null?t.map((r,i)=>i):[].concat(n),Y(n.every(r=>r>=-e&&r<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),Y(n.every(r=>Yi(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?e+r:r)}function dR(n,t){let e=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||i?null:fn(t,n).sort(),s=0;for(let a=0;a<n.length;++a){if(o!=null){if(o[s]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(o[s]==null||o[s]>a)&&n[a]===1&&(e.push(n[a]),r.push(a)),o[s]<=a&&s++}n[a]!==1&&(e.push(n[a]),r.push(a))}return{newShape:e,keptDims:r}}function mR(n,t){return Cu(n,t)}function Cu(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Cp(n,t){for(let e=0;e<n.length;e++){let r=n[e];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Rp(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function gR(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function cs(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Np(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function ls(n){return typeof n=="string"||n instanceof String}function cx(n){return typeof n=="boolean"}function lx(n){return typeof n=="number"}function di(n){return Array.isArray(n)?di(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":lx(n)?"float32":ls(n)?"string":cx(n)?"bool":"float32"}function Ji(n){return!!(n&&n.constructor&&n.call&&n.apply)}function us(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function vr(n){let t=n.length;if(t<2)return[];let e=new Array(t-1);e[t-2]=n[t-1];for(let r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function ux(n,t,e,r=!1){let i=new Array;if(t.length===1){let o=t[0]*(r?2:1);for(let s=0;s<o;s++)i[s]=e[n+s]}else{let o=t[0],s=t.slice(1),a=s.reduce((c,l)=>c*l)*(r?2:1);for(let c=0;c<o;c++)i[c]=ux(n+c*a,s,e,r)}return i}function Ki(n,t,e=!1){if(n.length===0)return t[0];let r=n.reduce((i,o)=>i*o)*(e?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return ux(0,n,t,e)}function xR(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function La(n,t){let e=hs(n,t);for(let r=0;r<e.length;r++)e[r]=1;return e}function hs(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function yR(n,t){let e=n.reduce((r,i)=>r*i,1);if(t==null||t==="float32")return Ki(n,new Float32Array(e));if(t==="int32")return Ki(n,new Int32Array(e));if(t==="bool")return Ki(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function On(n){n.forEach(t=>{Y(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function _R(n,t,e){if(t===0)return 0;if(t===1)return n[0];let r=n[n.length-1];for(let i=0;i<n.length-1;++i)r+=e[i]*n[i];return r}function vR(n,t,e){if(t===0)return[];if(t===1)return[n];let r=new Array(t);for(let i=0;i<r.length-1;++i)r[i]=Math.floor(n/e[i]),n-=r[i]*e[i];return r[r.length-1]=n,r}function ji(n){return n&&n.then&&typeof n.then=="function"}var hx="tfjsflags",Ua=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=bR,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(Wt().getBool("IS_TEST")||Wt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){let i=this.urlFlags[t];Wt().getBool("IS_TEST")||Wt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${i}.`),this.set(t,i)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let e=this.evaluateFlag(t);if(ji(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);hx in t&&t[hx].split(",").forEach(r=>{let[i,o]=r.split(":");this.urlFlags[i]=wR(i,o)})}};function bR(n){let t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...r)=>(MR(t,r[0],r[1]),r.join("="))),t}function MR(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function wR(n,t){let e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function Wt(){return Dp}var Dp=null;function fx(n){Dp=n}var Pp;function Fp(){if(Pp==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Pp=n}return Pp}function TR(){let n=Fp();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Oa(n,t){let e=TR();if(e.has(n))return e.get(n);{let r=t();return e.set(n,r),e.get(n)}}var Ba="Acos",za="Acosh";var Ru="AddN";var Nu="ArgMax",Du="ArgMin",Ga="Asin",Va="Asinh",Ha="Atan",Wa="Atanh",$a="Atan2",Pu="AvgPool",Fu="AvgPoolGrad",ku="AvgPool3D",Lu="AvgPool3DGrad",fs="BatchMatMul",ps="BatchToSpaceND",px="Bincount",kp="BitwiseAnd",dx="BroadcastTo",mx="BroadcastArgs",mi="Cast",qa="Ceil",Xa="ClipByValue",Uu="Complex",ds="ComplexAbs",ms="Concat",gs="Conv2D",Ou="Conv2DBackpropFilter",xs="Conv2DBackpropInput",Bu="Conv3D",zu="Conv3DBackpropFilterV2",Gu="Conv3DBackpropInputV2";var Qi="Cosh",Vu="Cumprod",ys="Cumsum",gx="CropAndResize",xx="DenseBincount",yx="DepthToSpace",Hu="DepthwiseConv2dNative",Wu="DepthwiseConv2dNativeBackpropFilter",$u="DepthwiseConv2dNativeBackpropInput",_x="Diag",qu="Dilation2D",Ka="Dilation2DBackpropInput",Ya="Dilation2DBackpropFilter",vx="Draw",to="RealDiv",Sx="Einsum";var Xu="EluGrad";var Za="Equal";var _s="ExpandDims",Ja="Expm1";var Ku="Fill",bx="FlipLeftRight",eo="Floor",no="FloorDiv",Yu="FusedBatchNorm",vs="GatherV2",Mx="GatherNd",ja="Greater",ro="GreaterEqual",gi="Identity",wx="IFFT",Zu="Imag",Qa="IsFinite",tc="IsInf",ec="IsNan",Ss="LeakyRelu",nc="Less",rc="LessEqual",Tx="LinSpace";var ic="Log1p",oc="LogicalAnd",sc="LogicalNot",Lp="LogicalOr";var Ex="LogSoftmax";var Ju="LRNGrad";var io="Maximum",ju="MaxPool",Qu="MaxPoolGrad",th="MaxPool3D",eh="MaxPool3DGrad",Ax="MaxPoolWithArgmax",nh="Mean";var ac="Minimum",rh="MirrorPad";var Ix="Multinomial",oo="Multiply";var Up="NotEqual",Cx="NonMaxSuppressionV3",Rx="NonMaxSuppressionV4",Nx="NonMaxSuppressionV5",ih="OnesLike",oh="OneHot",bs="Pack",Ms="PadV2";var ws="Prelu",sh="Prod",Dx="RaggedGather",Px="RaggedRange",Fx="RaggedTensorToTensor",kx="Range",ah="Real",cc="Reciprocal",so="Relu",Ts="Reshape",ch="ResizeNearestNeighbor",lh="ResizeNearestNeighborGrad",uh="ResizeBilinear",hh="ResizeBilinearGrad",ao="Relu6",Es="Reverse",lc="Round",co="Rsqrt",Lx="ScatterNd",Ux="TensorScatterUpdate",Ox="SearchSorted",As="Select",uc="Selu",Is="Slice";var lo="Sinh",hc="Sign",uo="Sigmoid",fc="Softplus",ho="Sqrt";var Cs="SpaceToBatchND",Rs="SplitV",fh="Softmax",Bx="SparseFillEmptyRows",zx="SparseReshape",Gx="SparseSegmentMean",Vx="SparseSegmentSum",Hx="SparseToDense",pc="SquaredDifference",ph="Square",Op="StaticRegexReplace",Wx="StridedSlice",$x="StringNGrams",qx="StringSplit",Xx="StringToHashBucketFast";var dc="Tanh",xi="Tile",Kx="TopK",Yx="Transform",yi="Transpose",Zx="Unique",Ns="Unpack",Ds="UnsortedSegmentSum";var Ps="ZerosLike",fo="Step";var Jx="RotateWithOffset",jx="_FusedMatMul",Qx="FusedConv2D",t0="FusedDepthwiseConv2D";function Sr(...n){Wt().getBool("IS_TEST")||Wt().getBool("PROD")||console.warn(...n)}function ER(...n){Wt().getBool("IS_TEST")||Wt().getBool("PROD")||console.log(...n)}var dh=Oa("kernelRegistry",()=>new Map),Bp=Oa("gradRegistry",()=>new Map);function zp(n,t){let e=i0(n,t);return dh.get(e)}function Gp(n){return Bp.get(n)}function Vp(n){let t=dh.entries(),e=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[o,s]=i,[a]=o.split("_");a===n&&e.push(s)}return e}function n0(n){let{kernelName:t,backendName:e}=n,r=i0(t,e);dh.has(r)&&Sr(`The kernel '${t}' for backend '${e}' is already registered`),dh.set(r,n)}function r0(n){let{kernelName:t}=n;Bp.has(t)&&Wt().getBool("DEBUG")&&Sr(`Overriding the gradient for '${t}'`),Bp.set(t,n)}function i0(n,t){return`${t}_${n}`}var T={};Io(T,{arraysEqual:()=>as,arraysEqualWithNull:()=>cR,assert:()=>Y,assertNonNegativeIntegerDimensions:()=>On,assertNonNull:()=>Ip,assertShapesMatch:()=>ka,bytesFromStringArray:()=>Np,bytesPerElement:()=>cs,checkConversionForErrors:()=>Cp,clamp:()=>ss,computeStrides:()=>vr,convertBackendValuesAndArrayBuffer:()=>xR,createScalarValue:()=>PR,createShuffledIndices:()=>hR,decodeString:()=>Os,distSquared:()=>sR,encodeString:()=>Us,fetch:()=>kR,fingerPrint64:()=>DR,flatten:()=>vi,getArrayFromDType:()=>Cu,getTypedArrayFromDType:()=>mR,hasEncodingLoss:()=>gR,hexToLong:()=>mc,indexToLoc:()=>vR,inferDtype:()=>di,inferFromImplicitShape:()=>pR,isBoolean:()=>cx,isFunction:()=>Ji,isInt:()=>Yi,isNumber:()=>lx,isPromise:()=>ji,isScalarShape:()=>aR,isString:()=>ls,isTypedArray:()=>rn,isValidDtype:()=>Rp,locToIndex:()=>_R,makeOnesTypedArray:()=>La,makeZerosNestedTypedArray:()=>yR,makeZerosTypedArray:()=>hs,nearestDivisor:()=>us,nearestLargerEven:()=>rR,now:()=>yo,parseAxisParam:()=>fn,randUniform:()=>oR,repeatedTry:()=>fR,rightPad:()=>Zi,shuffle:()=>ax,shuffleCombo:()=>nR,sizeFromShape:()=>Ce,sizeToSquarishShape:()=>uR,squeezeShape:()=>dR,sum:()=>iR,swap:()=>Iu,tanh:()=>lR,toNestedArray:()=>Ki,toTypedArray:()=>Ls});function mh(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}var qp=gm(m0());var xo=qp.default||qp;function mc(n){return xo.fromString(n,!0,16)}var x0=mc("c3a5c85c97cb3127"),go=mc("b492b66fbe98f273"),pn=mc("9ae16a3b2f90404f");function $p(n){return n.xor(n.shru(47))}function y0(n,t,e){let r=n.slice(t,t+e);return xo.fromBytes(Array.from(r),!0,!0)}function De(n,t){return y0(n,t,8)}function g0(n,t){return y0(n,t,4)}function tn(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function _i(n,t,e=mc("9ddfea08eb382d69")){let r=n.xor(t).mul(e);r=r.xor(r.shru(47));let i=t.xor(r).mul(e);return i=i.xor(i.shru(47)),i=i.mul(e),i}function IR(n,t,e,r,i,o){i=i.add(n),o=tn(o.add(i).add(r),21);let s=i;return i=i.add(t),i=i.add(e),o=o.add(tn(i,44)),[i.add(r),o.add(s)]}function xh(n,t,e,r){return IR(De(n,t),De(n,t+8),De(n,t+16),De(n,t+24),e,r)}function CR(n,t=n.length){if(t>=8){let e=pn.add(t*2),r=De(n,0).add(pn),i=De(n,t-8),o=tn(i,37).mul(e).add(r),s=tn(r,25).add(i).mul(e);return _i(o,s,e)}if(t>=4){let e=pn.add(t*2),r=g0(n,0);return _i(r.shl(3).add(t),g0(n,t-4),e)}if(t>0){let e=n[0],r=n[t>>1],i=n[t-1],o=e+(r<<8),s=t+(i<<2);return $p(pn.mul(o).xor(x0.mul(s))).mul(pn)}return pn}function RR(n,t=n.length){let e=pn.add(t*2),r=De(n,0).mul(go),i=De(n,8),o=De(n,t-8).mul(e),s=De(n,t-16).mul(pn);return _i(tn(r.add(i),43).add(tn(o,30)).add(s),r.add(tn(i.add(pn),18)).add(o),e)}function NR(n,t=n.length){let e=pn.add(t*2),r=De(n,0).mul(pn),i=De(n,8),o=De(n,t-8).mul(e),s=De(n,t-16).mul(pn),a=tn(r.add(i),43).add(tn(o,30)).add(s),c=_i(a,r.add(tn(i.add(pn),18)).add(o),e),l=De(n,16).mul(e),u=De(n,24),h=a.add(De(n,t-32)).mul(e),f=c.add(De(n,t-24)).mul(e);return _i(tn(l.add(u),43).add(tn(h,30)).add(f),l.add(tn(u.add(r),18)).add(h),e)}function DR(n,t=n.length){let e=xo.fromNumber(81,!0);if(t<=32)return t<=16?CR(n,t):RR(n,t);if(t<=64)return NR(n,t);let r=e,i=e.mul(go).add(113),o=$p(i.mul(pn).add(113)).mul(pn),s=[xo.UZERO,xo.UZERO],a=[xo.UZERO,xo.UZERO];r=r.mul(pn).add(De(n,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=tn(r.add(i).add(s[0]).add(De(n,c+8)),37).mul(go),i=tn(i.add(s[1]).add(De(n,c+48)),42).mul(go),r=r.xor(a[1]),i=i.add(s[0]).add(De(n,c+40)),o=tn(o.add(a[0]),33).mul(go),s=xh(n,c,s[1].mul(go),r.add(a[0])),a=xh(n,c+32,o.add(a[1]),i.add(De(n,c+16))),[o,r]=[r,o],c+=64;while(c!==l);let h=go.add(o.and(255).shl(1));return c=u,a[0]=a[0].add(t-1&63),s[0]=s[0].add(a[0]),a[0]=a[0].add(s[0]),r=tn(r.add(i).add(s[0]).add(De(n,c+8)),37).mul(h),i=tn(i.add(s[1]).add(De(n,c+48)),42).mul(h),r=r.xor(a[1].mul(9)),i=i.add(s[0].mul(9).add(De(n,c+40))),o=tn(o.add(a[0]),33).mul(h),s=xh(n,c,s[1].mul(h),r.add(a[0])),a=xh(n,c+32,o.add(a[1]),i.add(De(n,c+16))),[o,r]=[r,o],_i(_i(s[0],a[0],h).add($p(i).mul(x0)).add(o),_i(s[1],a[1],h).add(r),h)}function PR(n,t){return t==="string"?Us(n):Ls([n],t)}function FR(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function Ls(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=vi(n)),Wt().getBool("DEBUG")&&Cp(n,t),FR(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){let e=new Uint8Array(n.length);for(let r=0;r<e.length;++r)Math.round(n[r])!==0&&(e[r]=1);return e}else throw new Error(`Unknown data type ${t}`)}function yo(){return Wt().platform.now()}function kR(n,t){return Wt().platform.fetch(n,t)}function Us(n,t="utf-8"){return t=t||"utf-8",Wt().platform.encode(n,t)}function Os(n,t="utf-8"){return t=t||"utf-8",Wt().platform.decode(n,t)}function rn(n){return Wt().platform.isTypedArray!=null?Wt().platform.isTypedArray(n):mh(n)}function vi(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||ji(n)||n==null||rn(n)&&e)t.push(n);else if(Array.isArray(n)||rn(n))for(let r=0;r<n.length;++r)vi(n[r],t,e);else{let r=-1;for(let i of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(i)&&(r=Math.max(r,Number(i)));for(let i=0;i<=r;i++)vi(n[i],t,e)}return t}var yh=class{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Xp)}profileKernel(t,e,r){let i,o=()=>{i=r()},s,a=yo();if(this.backendTimer.timerAvailable())s=this.backendTimer.time(o);else{o();for(let l of i)l.dataSync();s=Promise.resolve({kernelMs:yo()-a})}if(Wt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<i.length;l++){let u=i[l];u.data().then(h=>{LR(h,u.dtype,t)})}return{kernelName:t,outputs:i,inputs:e,timeMs:s.then(l=>l.kernelMs),extraInfo:s.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:e,outputs:r,timeMs:i,inputs:o,extraInfo:s}=t;r.forEach(a=>{Promise.all([a.data(),i,s]).then(c=>{this.logger.logKernelProfile(e,a,c[0],c[1],o,c[2])})})}};function LR(n,t,e){if(t!=="float32")return!1;for(let r=0;r<n.length;r++){let i=n[r];if(isNaN(i)||!isFinite(i))return console.warn(`Found ${i} in the result of '${e}'`),!0}return!1}var Xp=class{logKernelProfile(t,e,r,i,o,s){let a=typeof i=="number"?Zi(`${i}ms`,9):i.error,c=Zi(t,25),l=e.rank,u=e.size,h=Zi(e.shape.toString(),14),f="";for(let p in o){let g=o[p];if(g!=null){let x=g.shape||e.shape,m=x.length;f+=`${p}: ${m}D ${m>0?x:""} `}}console.log(`%c${c}	%c${a}	%c${l}D ${h}	%c${u}	%c${f}	%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function _0(n,t,e){let r={},i={};for(let c=0;c<t.length;c++)r[t[c].id]=!0;for(let c=0;c<n.length;c++){let l=n[c],u=l.inputs;for(let h in u){let f=u[h],p=!1;for(let g=0;g<t.length;g++)if(r[f.id]){l.outputs.forEach(x=>r[x.id]=!0),p=!0,i[l.id]=!0;break}if(p)break}}let o={};o[e.id]=!0;let s={};for(let c=n.length-1;c>=0;c--){let l=n[c],u=l.inputs;for(let h=0;h<l.outputs.length;h++)if(o[l.outputs[h].id]){for(let f in u)o[u[f].id]=!0,s[l.id]=!0;break}}let a=[];for(let c=0;c<n.length;c++){let l=n[c];if(i[l.id]&&s[l.id]){let u={};for(let f in l.inputs){let p=l.inputs[f];r[p.id]&&(u[f]=p)}let h=Object.assign({},l);h.inputs=u,h.outputs=l.outputs,a.push(h)}}return a}function v0(n,t,e,r){for(let i=t.length-1;i>=0;i--){let o=t[i],s=[];if(o.outputs.forEach(c=>{let l=n[c.id];l!=null?s.push(l):s.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);let a=o.gradient(s);for(let c in o.inputs){if(!(c in a))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(a)}.`);let l=e(()=>a[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);let u=o.inputs[c];if(!as(l.shape,u.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=l;else{let h=n[u.id];n[u.id]=r(h,l),h.dispose()}}}}var S0=20,gc=3,Kp=7;function b0(n,t,e,r){let i=vr(t),o=UR(n,t,e,i),s=t.length,a=_h(n,t,e,i,o),c=["Tensor"];return r&&(c.push(`  dtype: ${e}`),c.push(`  rank: ${s}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(a.map(l=>"    "+l).join(`
`)),c.join(`
`)}function UR(n,t,e,r){let i=Ce(t),o=r[r.length-1],s=new Array(o).fill(0),a=t.length,c=e==="complex64"?yc(n):n;if(a>1)for(let l=0;l<i/o;l++){let u=l*o;for(let h=0;h<o;h++)s[h]=Math.max(s[h],xc(c[u+h],0,e).length)}return s}function xc(n,t,e){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(Kp))} + ${parseFloat(n[1].toFixed(Kp))}j`:ls(n)?r=`'${n}'`:e==="bool"?r=M0(n):r=parseFloat(n.toFixed(Kp)).toString(),Zi(r,t)}function M0(n){return n===0?"false":"true"}function _h(n,t,e,r,i,o=!0){let s=e==="complex64"?2:1,a=t[0],c=t.length;if(c===0){if(e==="complex64"){let x=yc(n);return[xc(x[0],0,e)]}return e==="bool"?[M0(n[0])]:[n[0].toString()]}if(c===1){if(a>S0){let m=gc*s,d=Array.from(n.slice(0,m)),v=Array.from(n.slice((a-gc)*s,a*s));return e==="complex64"&&(d=yc(d),v=yc(v)),["["+d.map((_,y)=>xc(_,i[y],e)).join(", ")+", ..., "+v.map((_,y)=>xc(_,i[a-gc+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?yc(n):Array.from(n)).map((m,d)=>xc(m,i[d],e)).join(", ")+"]"]}let l=t.slice(1),u=r.slice(1),h=r[0]*s,f=[];if(a>S0){for(let x=0;x<gc;x++){let m=x*h,d=m+h;f.push(..._h(n.slice(m,d),l,e,u,i,!1))}f.push("...");for(let x=a-gc;x<a;x++){let m=x*h,d=m+h;f.push(..._h(n.slice(m,d),l,e,u,i,x===a-1))}}else for(let x=0;x<a;x++){let m=x*h,d=m+h;f.push(..._h(n.slice(m,d),l,e,u,i,x===a-1))}let p=c===2?",":"";f[0]="["+(a>0?f[0]+p:"");for(let x=1;x<f.length-1;x++)f[x]=" "+f[x]+p;let g=`,
`;for(let x=2;x<c;x++)g+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(o?"":g),f}function yc(n){let t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var ve=class{constructor(t,e,r){if(this.dtype=e,this.shape=t.slice(),this.size=Ce(t),r!=null){let i=r.length;Y(i===this.size,()=>`Length of values '${i}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Cu(e,this.size),this.strides=vr(t)}set(t,...e){e.length===0&&(e=[0]),Y(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);let r=this.locToIndex(e);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(let i of t){if(i<0||i>=this.shape[e]){let o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}e++}let r=t[t.length-1];for(let i=0;i<t.length-1;++i)r+=this.strides[i]*t[i];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let e=new Array(this.shape.length);for(let r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return hr().makeTensor(this.values,this.shape,this.dtype)}},hr=null,Bs=null,OR=null;function w0(n){hr=n}function T0(n){Bs=n}function E0(n){OR=n}var on=class{constructor(t,e,r,i){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Ce(t),this.strides=vr(t),this.dataId=r,this.id=i,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Bs.buffer(this.shape,this.dtype,t)}bufferSync(){return Bs.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Ki(this.shape,t,this.dtype==="complex64")}arraySync(){return Ki(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=hr().read(this.dataId);if(this.dtype==="string"){let e=await t;try{return e.map(r=>Os(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),hr().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=hr().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Os(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await hr().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),hr().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Bs.print(this,t)}clone(){return this.throwIfDisposed(),Bs.clone(this)}toString(t=!1){let e=this.dataSync();return b0(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Bs.cast(this,t)}variable(t=!0,e,r){return this.throwIfDisposed(),hr().makeVariable(this,t,e,r)}};Object.defineProperty(on,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Yp(){return Oa("Tensor",()=>on)}Yp();var Vr=class extends on{constructor(t,e,r,i){super(t.shape,t.dtype,t.dataId,i),this.trainable=e,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!as(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);hr().disposeTensor(this),this.dataId=t.dataId,hr().incRef(this,null)}dispose(){hr().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Vr,Symbol.hasInstance,{value:n=>n instanceof on&&n.assign!=null&&n.assign instanceof Function});var Zp;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Zp||(Zp={}));var Jp;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Jp||(Jp={}));var jp;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(jp||(jp={}));var Qp;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Qp||(Qp={}));var td;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(td||(td={}));var BR={float32:Qp,int32:Jp,bool:jp,complex64:td};function Bn(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return BR[n][t]}function vh(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Sh(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function Ue(n,t){if(n.dtype===t.dtype)return[n,t];let e=Bn(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function bh(n){let t=[];return A0(n,t,new Set),t}function A0(n,t,e){if(n==null)return;if(n instanceof on){t.push(n);return}if(!zR(n))return;let r=n;for(let i in r){let o=r[i];e.has(o)||(e.add(o),A0(o,t,e))}}function zR(n){return Array.isArray(n)||typeof n=="object"}function ed(n){return n.kernelName!=null}var Mh=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},_c=class n{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Mh}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let r=t[e];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,r=1){return t in this.registryFactory?(Sr(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:e,asyncInit:r}=this.initializeBackend(t);if(!(r?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new yh(this.backendInstance),!0}setupRegisteredKernels(){Vp(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Vp(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){let e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let r=e.factory();if(r&&!(r instanceof Xi)&&typeof r.then=="function"){let i=++this.pendingBackendInitId,o=r.then(s=>i<this.pendingBackendInitId?!1:(this.registry[t]=s,this.pendingBackendInit=null,!0)).catch(s=>(i<this.pendingBackendInitId||(this.pendingBackendInit=null,Sr(`Initialization of backend ${t} failed`),Sr(s.stack||s.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return Sr(`Initialization of backend ${t} failed`),Sr(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let r=t[e],{success:i,asyncInit:o}=this.initializeBackend(r);if(o||i)return{name:r,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){let r=this.state.tensorInfo.get(e),i=r.backend,o=this.readSync(e),s=i.refCount(e);i.disposeData(e,!0),r.backend=t,t.move(e,o,r.shape,r.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let r=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let i;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(i),()=>(i=e(),i instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),i))}scopedRun(t,e,r){t();try{let i=r();return e(),i}catch(i){throw e(),i}}nextTensorId(){return n.nextTensorId++}nextVariableId(){return n.nextVariableId++}clone(t){let e=z.runKernel(gi,{x:t}),r={x:t},i=s=>({x:()=>{let a="float32",c={x:s},l={dtype:a};return z.runKernel(mi,c,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,r,[e],i,o,{}),e}runKernel(t,e,r){if(this.backendName==null&&this.backend,!(zp(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,r){let i=this.backend.numDataIds(),o=0;r.forEach(c=>{o+=c.dtype==="complex64"?3:1});let s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=i-e-o-s;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,r=[],i=this.isTapeOn(),o=this.state.numBytes,s=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let c,l=ed(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(ed(t)){let{kernelName:g,inputs:x,attrs:m}=t;this.backendName==null&&this.backend;let d=zp(g,this.backendName);Y(d!=null,()=>`Cannot find registered kernel '${g}' for backend '${this.backendName}'`),a=()=>{let v=this.backend.numDataIds();c=d.kernelFunc({inputs:x,attrs:m,backend:this.backend});let _=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(g,v,_);let y=_.map(S=>S.rank!=null?S:this.makeTensorFromTensorInfo(S));if(i){let S=this.getTensorsForGradient(g,x,y);r=this.saveTensorsForBackwardMode(S)}return y}}else{let{forwardFunc:g}=t,x=m=>{i&&(r=m.map(d=>this.keep(this.clone(d))))};a=()=>{let m=this.backend.numDataIds();c=this.tidy(()=>g(this.backend,x));let d=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,m,d),d}}let{inputs:u,attrs:h}=t,f=ed(t)?null:t.backwardsFunc,p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(l,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),i&&this.addTapeNode(l,u,e,f,r,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-s,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(g=>u[g]!=null?u[g].shape:null),outputShapes:e.map(g=>g.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(c)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,e,r){let i=Gp(t);if(i!=null){let o=i.inputsToSave||[],s=i.outputsToSave||[],a;i.saveAllInputs?(Y(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(l=>e[l])):a=o.map(l=>e[l]);let c=r.filter((l,u)=>s[u]);return a.concat(c)}return[]}makeTensor(t,e,r,i){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",i=i||this.backend;let o=t;r==="string"&&ls(t[0])&&(o=t.map(c=>Us(c)));let s=i.write(o,e,r),a=new on(e,r,s,this.nextTensorId());if(this.trackTensor(a,i),r==="string"){let c=this.state.tensorInfo.get(s),l=Np(o);this.state.numBytes+=l-c.bytes,c.bytes=l}return a}makeTensorFromDataId(t,e,r,i){r=r||"float32";let o={dataId:t,shape:e,dtype:r};return this.makeTensorFromTensorInfo(o,i)}makeTensorFromTensorInfo(t,e){let{dataId:r,shape:i,dtype:o}=t,s=new on(i,o,r,this.nextTensorId());return this.trackTensor(s,e),s}makeVariable(t,e=!0,r,i){r=r||this.nextVariableId().toString(),i!=null&&i!==t.dtype&&(t=t.cast(i));let o=new Vr(t,e,r,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*cs(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Vr||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let r=t.size*cs(t.dtype);this.state.numBytes-=r}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let e=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(i=>i.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r;for(let i of this.state.activeProfile.kernels)i.kernelTimeMs=await i.kernelTimeMs,i.extraInfo=await i.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,r,i,o,s){let a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:o},c=Gp(t);c!=null&&(i=c.gradFunc),i!=null&&(a.gradient=l=>(l=l.map((u,h)=>{if(u==null){let f=r[h],p=hs(f.size,f.dtype);return this.makeTensor(p,f.shape,f.dtype)}return u}),i(l.length>1?l:l[0],o,s))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){let e=bh(t),r=new Set(e.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){let s=this.state.activeScope.track[o];!s.kept&&!r.has(s.id)&&s.dispose()}let i=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(o=>{!o.kept&&o.scopeId===i.id&&this.track(o)})}gradients(t,e,r,i=!1){if(Y(e.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);let o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));Y(o instanceof on,()=>"The result y returned by f() must be a tensor.");let s=_0(this.state.activeTape,e,o);if(!i&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[o.id]=r??GR(o.shape),v0(a,s,l=>this.tidy(l),VR);let c=e.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(let u of l.saved)u.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return Y(Ji(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{Y(e.every(a=>a instanceof on),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r,i={};e.forEach((a,c)=>{i[c]=a});let o=(a,c)=>(r=t(...e,c),Y(r.value instanceof on,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),Y(Ji(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),s=(a,c)=>{let l=r.gradFunc(a,c),u=Array.isArray(l)?l:[l];Y(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),Y(u.every(f=>f instanceof on),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let h={};return u.forEach((f,p)=>{h[p]=()=>f}),h};return this.runKernelFunc({forwardFunc:o,backwardsFunc:s,inputs:i})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){let e=yo(),r=await this.backend.time(t);return r.wallMs=yo()-e,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Mh;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};_c.nextTensorId=0;_c.nextVariableId=0;function GR(n){let t=La(Ce(n),"float32");return z.makeTensor(t,n,"float32")}function nd(){let n=Fp();if(n._tfengine==null){let t=new Ua(n);n._tfengine=new _c(t)}return fx(n._tfengine.ENV),w0(()=>n._tfengine),n._tfengine}var z=nd();function VR(n,t){let e={a:n,b:t};return z.runKernel("Add",e)}function I0(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var xn=Wt();xn.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});xn.registerFlag("IS_BROWSER",()=>I0());xn.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");xn.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));xn.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));xn.registerFlag("PROD",()=>!1);xn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>xn.getBool("DEBUG"));xn.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);xn.registerFlag("IS_TEST",()=>!1);xn.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>xn.getBool("DEBUG"));xn.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);xn.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);xn.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function rd(n,t){let e=n;if(rn(n))return t==="string"?[]:[n.length];if(vh(n)){let i=n.channels||"RGBA";return[n.height,n.width*i.length]}else if(Sh(n))return[n.buffer.size/(t==null?4:cs(t))];if(!Array.isArray(n))return[];let r=[];for(;Array.isArray(e)||rn(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&Wt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&R0(n,r,[]),r}function R0(n,t,e){if(e=e||[],!Array.isArray(n)&&!rn(n)){Y(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}Y(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),Y(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);let r=t.slice(1);for(let i=0;i<n.length;++i)R0(n[i],r,e.concat(i))}function C0(n,t,e,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${r}' must be ${n} tensor, but got ${t} tensor`)}}function Z(n,t,e,r="numeric"){if(n instanceof Yp())return C0(r,n.dtype,t,e),n;let i=di(n);if(i!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(i=r),C0(r,i,t,e),n==null||!rn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){let c=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${c}'`)}let o=rd(n,i);!rn(n)&&!Array.isArray(n)&&(n=[n]);let a=i!=="string"?Ls(n,i):vi(n,[],!0);return z.makeTensor(a,o,i)}function vc(n,t,e,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((o,s)=>Z(o,`${t}[${s}]`,e,r))}var WR="__op";function tt(n){let t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+WR;let i=(...o)=>{z.startScope(e);try{let s=r(...o);return ji(s)&&console.error("Cannot return a Promise inside of tidy."),z.endScope(s),s}catch(s){throw z.endScope(null),s}};return Object.defineProperty(i,"name",{value:e,configurable:!0}),i}function $R(n,t){let e=Z(n,"real","complex"),r=Z(t,"imag","complex");ka(e.shape,r.shape,`real and imag shapes, ${e.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:e,imag:r};return z.runKernel(Uu,i)}var Gs=tt({complex_:$R});function wh(n,t,e,r){if(r==null)r=di(n);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Sh(n)||vh(n)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return z.backend.createTensorFromGPUData(n,t||e,r)}if(!rn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){On(t);let i=Ce(t),o=Ce(e);Y(i===o,()=>`Based on the provided shape, [${t}], the tensor should have ${i} values but has ${o}`);for(let s=0;s<e.length;++s){let a=e[s],c=s===e.length-1?a!==Ce(t.slice(s)):!0;Y(e[s]===t[s]||!c,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!rn(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=r!=="string"?Ls(n,r):vi(n,[],!0),z.makeTensor(n,t,r)}var En=class n{static join(t){return new n(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(r=>rn(r)?r.buffer:r),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let r=0;r<t.length;r++){let i=t[r];r!==t.length-1&&i.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let o=e+i.byteLength;this.shards.push({buffer:i,start:e,end:o}),e=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);let r=this.findShardForByte(t);if(r===-1)throw new Error(`Could not find start shard for byte ${t}`);let i=e-t,o=new ArrayBuffer(i),s=new Uint8Array(o),a=0;for(let c=r;c<this.shards.length;c++){let l=this.shards[c],h=t+a-l.start,f=a,g=Math.min(e,l.end)-l.start,x=new Uint8Array(l.buffer,h,g-h);if(s.set(x,f),a+=x.length,e<l.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(i){return t<i.start?-1:t>=i.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let r=qR(this.shards,e);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}};function qR(n,t){let e=0,r=n.length;for(;e<=r;){let i=Math.floor((r-e)/2)+e,o=t(n[i]);if(o===0)return i;o<0?r=i:e=i+1}return-1}function XR(n){Wt().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}E0(XR);function id(){return z}function be(n,t){return z.tidy(n,t)}function Ye(n){bh(n).forEach(e=>e.dispose())}function N0(n){return z.keep(n)}function D0(n){return z.setBackend(n)}function P0(){return z.ready()}function F0(n,t,e=1){return z.registerBackend(n,t,e)}var od=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function k0(n){return od?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function L0(n){if(od)return Buffer.from(n).toString("base64");let t=new Uint8Array(n),e="";for(let r=0,i=t.length;r<i;r++)e+=String.fromCharCode(t[r]);return btoa(e)}function U0(n){if(od){let r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}let t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e.set([t.charCodeAt(r)],r);return e.buffer}function Th(n,t){let e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function O0(n,t,e){let r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=e}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(r.initializerSignature=n.initializerSignature),r}async function Eh(n,t){let e,r;return n.weightsManifest!=null&&([e,r]=await t(n.weightsManifest)),O0(n,e,r)}function Hr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:k0(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:k0(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new En(n.weightData).byteLength}}function Ah(n){let t=[];for(let e of n)t.push(...e.weights);return t}var An=class n{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return n.instance==null&&(n.instance=new n),n.instance}static registerSaveRouter(t){n.getInstance().saveRouters.push(t)}static registerLoadRouter(t){n.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return n.getHandlers(t,"save")}static getLoadHandlers(t,e){return n.getHandlers(t,"load",e)}static getHandlers(t,e,r){let i=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(s=>{let a=s(t,r);a!==null&&i.push(a)}),i}};var sd="tensorflowjs",ad=1,_o="models_store",Si="model_info_store";function B0(){if(!Wt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function cd(n){let t=n.result;t.createObjectStore(_o,{keyPath:"modelPath"}),t.createObjectStore(Si,{keyPath:"modelPath"})}var br=class{constructor(t){if(this.indexedDB=B0(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((r,i)=>{let o=this.indexedDB.open(sd,ad);o.onupgradeneeded=()=>cd(o),o.onsuccess=()=>{let s=o.result;if(e==null){let a=s.transaction(_o,"readonly"),l=a.objectStore(_o).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return s.close(),i(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=u=>(s.close(),i(l.error)),a.oncomplete=()=>s.close()}else{e.weightData=En.join(e.weightData);let a=Hr(e),c=s.transaction(Si,"readwrite"),l=c.objectStore(Si),u;try{u=l.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(f){return i(f)}let h;u.onsuccess=()=>{h=s.transaction(_o,"readwrite");let f=h.objectStore(_o),p;try{p=f.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(g){return i(g)}p.onsuccess=()=>r({modelArtifactsInfo:a}),p.onerror=g=>{l=c.objectStore(Si);let x=l.delete(this.modelPath);x.onsuccess=()=>(s.close(),i(p.error)),x.onerror=m=>(s.close(),i(p.error))}},u.onerror=f=>(s.close(),i(u.error)),c.oncomplete=()=>{h==null?s.close():h.oncomplete=()=>s.close()}}},o.onerror=s=>i(o.error)})}};br.URL_SCHEME="indexeddb://";var z0=n=>Wt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(br.URL_SCHEME)?YR(n.slice(br.URL_SCHEME.length)):null;An.registerSaveRouter(z0);An.registerLoadRouter(z0);function YR(n){return new br(n)}function ZR(n){return n.startsWith(br.URL_SCHEME)?n.slice(br.URL_SCHEME.length):n}var Ih=class{constructor(){this.indexedDB=B0()}async listModels(){return new Promise((t,e)=>{let r=this.indexedDB.open(sd,ad);r.onupgradeneeded=()=>cd(r),r.onsuccess=()=>{let i=r.result,o=i.transaction(Si,"readonly"),a=o.objectStore(Si).getAll();a.onsuccess=()=>{let c={};for(let l of a.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},a.onerror=c=>(i.close(),e(a.error)),o.oncomplete=()=>i.close()},r.onerror=i=>e(r.error)})}async removeModel(t){return t=ZR(t),new Promise((e,r)=>{let i=this.indexedDB.open(sd,ad);i.onupgradeneeded=()=>cd(i),i.onsuccess=()=>{let o=i.result,s=o.transaction(Si,"readwrite"),a=s.objectStore(Si),c=a.get(t),l;c.onsuccess=()=>{if(c.result==null)return o.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let u=a.delete(t),h=()=>{l=o.transaction(_o,"readwrite");let p=l.objectStore(_o).delete(t);p.onsuccess=()=>e(c.result.modelArtifactsInfo),p.onerror=g=>r(c.error)};u.onsuccess=h,u.onerror=f=>(h(),o.close(),r(c.error))}},c.onerror=u=>(o.close(),r(c.error)),s.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},i.onerror=o=>r(i.error)})}};var Wr="/",Vs="tensorflowjs_models",G0="info",JR="model_topology",jR="weight_specs",QR="weight_data",tN="model_metadata";function V0(n){return{info:[Vs,n,G0].join(Wr),topology:[Vs,n,JR].join(Wr),weightSpecs:[Vs,n,jR].join(Wr),weightData:[Vs,n,QR].join(Wr),modelMetadata:[Vs,n,tN].join(Wr)}}function H0(n){for(let t of Object.values(n))window.localStorage.removeItem(t)}function eN(n){let t=n.split(Wr);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Wr)}function nN(n){return n.startsWith(Mr.URL_SCHEME)?n.slice(Mr.URL_SCHEME.length):n}var Mr=class{constructor(t){if(!Wt().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=V0(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),i=Hr(t),o=En.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(i)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,L0(o));let s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:i}}catch{throw H0(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${i.modelTopologyBytes}, weightSpecsBytes=${i.weightSpecsBytes}, weightDataBytes=${i.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let e={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=r;let i=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(i==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=i;let o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){let a=JSON.parse(o);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}let s=this.LS.getItem(this.keys.weightData);if(s==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=U0(s),e}};Mr.URL_SCHEME="localstorage://";var W0=n=>Wt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Mr.URL_SCHEME)?rN(n.slice(Mr.URL_SCHEME.length)):null;An.registerSaveRouter(W0);An.registerLoadRouter(W0);function rN(n){return new Mr(n)}var Ch=class{constructor(){Y(Wt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),Y(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},e=Vs+Wr,r=Wr+G0;for(let i=0;i<this.LS.length;++i){let o=this.LS.key(i);if(o.startsWith(e)&&o.endsWith(r)){let s=eN(o);t[s]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=nN(t);let e=V0(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);let r=JSON.parse(this.LS.getItem(e.info));return H0(e),r}};var $0="://",Sc=class n{constructor(){this.managers={}}static getInstance(){return n.instance==null&&(n.instance=new n),n.instance}static registerManager(t,e){Y(t!=null,()=>"scheme must not be undefined or null."),t.endsWith($0)&&(t=t.slice(0,t.indexOf($0))),Y(t.length>0,()=>"scheme must not be an empty string.");let r=n.getInstance();Y(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=e}static getManager(t){let e=n.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(n.getInstance().managers)}};var ld=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!Wt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();let i=this.functionRefs[r.data.index];i(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return mh(t)}};if(Wt().get("IS_BROWSER")){Wt().setPlatform("browser",new ld);try{Sc.registerManager(Mr.URL_SCHEME,new Ch)}catch{}try{Sc.registerManager(br.URL_SCHEME,new Ih)}catch{}}var iN={importFetch:()=>q0()},ud;var hd=class{constructor(){this.util=X0(),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return Wt().global.fetch!=null?Wt().global.fetch(t,e):(ud==null&&(ud=iN.importFetch()),ud(t,e))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};Wt().get("IS_NODE")&&!Wt().get("IS_BROWSER")&&Wt().setPlatform("node",new hd);function Xt(n,t="float32",e){return t=t||"float32",On(n),new ve(n,t,e)}function oN(n,t){let e=Z(n,"x","cast");if(!Rp(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");let r={x:e},i={dtype:t};return z.runKernel(mi,r,i)}var Pt=tt({cast_:oN});function sN(n){let e={x:Z(n,"x","clone","string_or_numeric")};return z.runKernel(gi,e)}var Hs=tt({clone_:sN});function K0(n,t=!1){console.log(n.toString(t))}nd();var aN={buffer:Xt,cast:Pt,clone:Hs,print:K0};T0(aN);function cN(n,t){let e=Z(n,"a","add"),r=Z(t,"b","add");[e,r]=Ue(e,r);let i={a:e,b:r};return z.runKernel("Add",i)}var Kt=tt({add_:cN});function lN(n,t){let e=Z(n,"a","floorDiv"),r=Z(t,"b","floorDiv");[e,r]=Ue(e,r);let i={a:e,b:r};return z.runKernel(no,i)}var Y0=tt({floorDiv_:lN});function uN(n,t){let e=Z(n,"a","div"),r=Z(t,"b","div");if([e,r]=Ue(e,r),e.dtype==="int32"&&r.dtype==="int32")return Y0(e,r);let i={a:e,b:r},o={};return z.runKernel(to,i,o)}var Yt=tt({div_:uN});function hN(n,t){let e=Z(n,"a","mul"),r=Z(t,"b","mul");[e,r]=Ue(e,r);let i={a:e,b:r};return z.runKernel(oo,i)}var Q=tt({mul_:hN});function fN(n){let t=Z(n,"x","abs");if(t.dtype==="complex64"){let e={x:t};return z.runKernel(ds,e)}else{let e={x:t};return z.runKernel("Abs",e)}}var Z0=tt({abs_:fN});function pN(n,t,e,r,i="NHWC",o){let s=n[3],a=[...t,s],c=j0(i);return pd(n,a,e,o,r,null,null,c)}function dN(n,t,e,r,i,o,s="channelsLast"){let[a,c]=bc(t),l;if(s==="channelsLast")l=[a,c,n[3],n[3]];else if(s==="channelsFirst")l=[a,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${s}`);return pd(n,l,e,r,i,o,!1,s)}function mN(n,t,e,r,i,o,s="NDHWC"){let[a,c,l]=fd(t),u,h;if(s==="NDHWC")h="channelsLast",u=[a,c,l,n[4],n[4]];else if(s==="NCDHW")h="channelsFirst",u=[a,c,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${s}`);return J0(n,u,e,r,i,!1,h,o)}function pd(n,t,e,r,i,o,s=!1,a="channelsLast"){let[c,l,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[c,l,u,h]=n;else if(a==="channelsFirst")[c,h,l,u]=n;else throw new Error(`Unknown dataFormat ${a}`);let[f,p,,g]=t,[x,m]=bc(e),[d,v]=bc(r),_=Ws(f,d),y=Ws(p,v),{padInfo:S,outHeight:b,outWidth:E}=yN(i,l,u,x,m,_,y,o,a),R=s?g*h:g,w;return a==="channelsFirst"?w=[c,R,b,E]:a==="channelsLast"&&(w=[c,b,E,R]),{batchSize:c,dataFormat:a,inHeight:l,inWidth:u,inChannels:h,outHeight:b,outWidth:E,outChannels:R,padInfo:S,strideHeight:x,strideWidth:m,filterHeight:f,filterWidth:p,effectiveFilterHeight:_,effectiveFilterWidth:y,dilationHeight:d,dilationWidth:v,inShape:n,outShape:w,filterShape:t}}function J0(n,t,e,r,i,o=!1,s="channelsLast",a){let[c,l,u,h,f]=[-1,-1,-1,-1,-1];if(s==="channelsLast")[c,l,u,h,f]=n;else if(s==="channelsFirst")[c,f,l,u,h]=n;else throw new Error(`Unknown dataFormat ${s}`);let[p,g,x,,m]=t,[d,v,_]=fd(e),[y,S,b]=fd(r),E=Ws(p,y),R=Ws(g,S),w=Ws(x,b),{padInfo:M,outDepth:C,outHeight:P,outWidth:F}=_N(i,l,u,h,d,v,_,E,R,w,a),L=o?m*f:m,U;return s==="channelsFirst"?U=[c,L,C,P,F]:s==="channelsLast"&&(U=[c,C,P,F,L]),{batchSize:c,dataFormat:s,inDepth:l,inHeight:u,inWidth:h,inChannels:f,outDepth:C,outHeight:P,outWidth:F,outChannels:L,padInfo:M,strideDepth:d,strideHeight:v,strideWidth:_,filterDepth:p,filterHeight:g,filterWidth:x,effectiveFilterDepth:E,effectiveFilterHeight:R,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:S,dilationWidth:b,inShape:n,outShape:U,filterShape:t}}function gN(n,t,e,r,i){r==null&&(r=dd(n,t,e));let o=n[0],s=n[1],a=Mc((o-t+2*r)/e+1,i),c=Mc((s-t+2*r)/e+1,i);return[a,c]}function xN(n,t,e,r,i,o){i==null&&(i=dd(n,t[0],r[0]));let s=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*i>=t[a]&&(s[a]=Mc((n[a]-t[a]+2*i)/r[a]+1,o));return s}function dd(n,t,e,r=1){let i=Ws(t,r);return Math.floor((n[0]*(e-1)-e+i)/2)}function bc(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function fd(n){return typeof n=="number"?[n,n,n]:n}function Ws(n,t){return t<=1?n:n+(n-1)*(t-1)}function yN(n,t,e,r,i,o,s,a,c){let l,u,h;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};let p=gN([t,e],o,r,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(t/r),h=Math.ceil(e/i);let f=Math.max(0,(u-1)*r+o-t),p=Math.max(0,(h-1)*i+s-e),g=Math.floor(f/2),x=f-g,m=Math.floor(p/2),d=p-m;l={top:g,bottom:x,left:m,right:d,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-o+1)/r),h=Math.ceil((e-s+1)/i);else if(typeof n=="object"){let f=c==="channelsLast"?n[1][0]:n[2][0],p=c==="channelsLast"?n[1][1]:n[2][1],g=c==="channelsLast"?n[2][0]:n[3][0],x=c==="channelsLast"?n[2][1]:n[3][1];l={top:f,bottom:p,left:g,right:x,type:f===0&&p===0&&g===0&&x===0?"VALID":"EXPLICIT"},u=Mc((t-o+f+p)/r+1,a),h=Mc((e-s+g+x)/i+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:u,outWidth:h}}function _N(n,t,e,r,i,o,s,a,c,l,u){let h,f,p,g;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};let m=xN([t,e,r,1],[a,c,l],1,[i,o,s],n,u);f=m[0],p=m[1],g=m[2]}else if(n==="same"){f=Math.ceil(t/i),p=Math.ceil(e/o),g=Math.ceil(r/s);let x=(f-1)*i+a-t,m=(p-1)*o+c-e,d=(g-1)*s+l-r,v=Math.floor(x/2),_=x-v,y=Math.floor(m/2),S=m-y,b=Math.floor(d/2),E=d-b;h={top:y,bottom:S,left:b,right:E,front:v,back:_,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:f,outHeight:p,outWidth:g}}function Mc(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function $r(n){let[t,e,r]=bc(n);return t===1&&e===1&&r===1}function wc(n,t){return $r(n)||$r(t)}function Nh(n){return bc(n).every(t=>t>0)}function j0(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function yn(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")Y(Yi(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(i=>{Y(Yi(i),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${i}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function vN(n,t){let r={x:Z(n,"x","reshape","string_or_numeric")},i={shape:t};return z.runKernel(Ts,r,i)}var yt=tt({reshape_:vN});function SN(n,t=0){Y(n.length>=1,()=>"Pass at least one tensor to concat");let e=vc(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),e.length===1)return Hs(e[0]);let r=e,i={axis:t};return z.runKernel(ms,r,i)}var Q0=tt({concat_:SN});function bN(n,t,e=!1,r=!1){let i=Z(n,"a","matMul"),o=Z(t,"b","matMul");[i,o]=Ue(i,o);let s={a:i,b:o},a={transposeA:e,transposeB:r};return z.runKernel(fs,s,a)}var qr=tt({matMul_:bN});function MN(n){let e={x:Z(n,"x","sigmoid","float32")};return z.runKernel(uo,e)}var Dh=tt({sigmoid_:MN});function wN(n,t,e){let r=Z(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");let i={x:r},o={begin:t,size:e};return z.runKernel(Is,i,o)}var Xr=tt({slice_:wN});function TN(n,t,e){let r=Z(n,"x","batchToSpaceND"),i=t.reduce((a,c)=>a*c);Y(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),Y(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),Y(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${i}`);let o={x:r},s={blockShape:t,crops:e};return z.runKernel(ps,o,s)}var ty=tt({batchToSpaceND_:TN});function EN(n,t){let e=Z(n,"broadcastTo","x"),r=e.shape;if(On(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){let l=e.shape.slice();for(;l.length<t.length;)l.unshift(1);e=yt(e,l)}let i=e.shape,o=Array.from(t);for(let l=t.length-1;l>=0;l--)if(i[l]===t[l])o[l]=1;else if(e.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(o.map((l,u)=>l>1?u:-1).filter(l=>l>=0).length===0)return Hs(e);let a={x:e},c={reps:o};return z.runKernel(xi,a,c)}var vo=tt({broadcastTo_:EN});function ey(n,t,e){On(n),e=e||di(t);let r={shape:n,value:t,dtype:e};return z.runKernel(Ku,{},r)}function AN(n,t,e,r,i="NHWC",o=[1,1],s){let a=Z(n,"x","conv2d","float32"),c=Z(t,"filter","conv2d","float32"),l=a,u=!1;a.rank===3&&(u=!0,l=yt(a,[1,a.shape[0],a.shape[1],a.shape[2]])),Y(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),Y(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),yn("conv2d",r,s);let h=i==="NHWC"?l.shape[3]:l.shape[1];Y(h===c.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${c.shape[2]}.`),Y(wc(e,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${o}'`),Y(Nh(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),Y(Nh(e),()=>"Error in conv2D: Strides should be larger than 0.");let f={x:l,filter:c},p={strides:e,pad:r,dataFormat:i,dilations:o,dimRoundingMode:s},g=z.runKernel(gs,f,p);return u?yt(g,[g.shape[1],g.shape[2],g.shape[3]]):g}var ny=tt({conv2d_:AN});function IN(n,t,e,r,i,o="NHWC",s){Y(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,c=t,l=!1;t.rank===3&&(l=!0,c=yt(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),Y(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),Y(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),Y(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);let u=o==="NHWC"?a[3]:a[1],h=o==="NHWC"?c.shape[3]:c.shape[1];Y(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),Y(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),yn("conv2dDerInput",i,s);let f={dy:c,filter:e},p={strides:r,pad:i,dataFormat:o,dimRoundingMode:s,inputShape:a},g=z.runKernel(xs,f,p);return l?yt(g,[g.shape[1],g.shape[2],g.shape[3]]):g}var ry=tt({conv2DBackpropInput_:IN});function CN(n,t,e,r,i){Y(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let o=n,s=t,a=!1;t.rank===4&&(a=!0,s=yt(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,n[0],n[1],n[2],n[3]]);let c=o[4],l=s.shape[4];Y(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),Y(s.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${s.rank}`),Y(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),Y(c===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${e.shape[3]}.`),Y(l===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${e.shape[4]}.`);let u={dy:s,filter:e},h={pad:i,strides:r,inputShape:o},f=z.runKernel(Gu,u,h);return a?yt(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var iy=tt({conv3DBackpropInput_:CN});function RN(n){let e={x:Z(n,"x","cos","float32")};return z.runKernel("Cos",e)}var Fh=tt({cos_:RN});function NN(n){let e={x:Z(n,"x","cosh","float32")};return z.runKernel(Qi,e)}var oy=tt({cosh_:NN});function DN(n,t=0,e=!1,r=!1){let o={x:Z(n,"x","cumprod")},s={axis:t,exclusive:e,reverse:r};return z.runKernel(Vu,o,s)}var md=tt({cumprod_:DN});function PN(n,t=0,e=!1,r=!1){let o={x:Z(n,"x","cumsum")},s={axis:t,exclusive:e,reverse:r};return z.runKernel(ys,o,s)}var sy=tt({cumsum_:PN});var Kr={};Io(Kr,{assertAndGetBroadcastShape:()=>ye,getBroadcastDims:()=>ay,getReductionAxes:()=>we});function ay(n,t){let e=n.length,r=[];for(let i=0;i<e;i++){let o=e-1-i,s=n[o]||1;(t[t.length-1-i]||1)>1&&s===1&&r.unshift(o)}return r}function we(n,t){let e=[];for(let r=0;r<t.length;r++){let i=n[n.length-r-1],o=t.length-r-1,s=t[o];(i==null||i===1&&s>1)&&e.unshift(o)}return e}function ye(n,t){let e=Math.max(n.length,t.length),r=new Array(e);for(let i=0;i<e;i++){let o=n[n.length-i-1];o==null&&(o=1);let s=t[t.length-i-1];if(s==null&&(s=1),o===1)r[e-i-1]=s;else if(s===1)r[e-i-1]=o;else if(o!==s){let a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else r[e-i-1]=o}return r}function FN(n,t){let e=Z(n,"a","equal","string_or_numeric"),r=Z(t,"b","equal","string_or_numeric");[e,r]=Ue(e,r),ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(Za,i)}var cy=tt({equal_:FN});function kN(n,t,e){let r=Z(t,"a","where"),i=Z(e,"b","where"),o=Z(n,"condition","where","bool"),s=ye(ye(o.shape,r.shape),i.shape),a=vo(o,s),c=vo(r,s),l=vo(i,s),u={condition:a,t:c,e:l};return z.runKernel(As,u)}var zn=tt({where_:kN});function LN(n){let e={x:Z(n,"x","zerosLike")};return z.runKernel(Ps,e)}var $t=tt({zerosLike_:LN});function UN(n){let e={x:Z(n,"x","elu","float32")};return z.runKernel("Elu",e)}var ly=tt({elu_:UN});function gd(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function uy(n,t,e){let r=n.length+t.length,i=[],o=0,s=0;for(let a=0;a<r;a++)e.indexOf(a)===-1?i.push(n[o++]):i.push(t[s++]);return i}function xd(n,t){let e=[],r=n.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&e.push(n[o]);let i=t.map(o=>n[o]);return[e,i]}function kh(n,t){let e=t.map(r=>1);return uy(n,e,t)}function ON(n,t,e){Y(gd(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function yd(n,t){if(gd(n,t))return null;let e=[];for(let r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach(r=>e.push(r)),e}function Ec(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function BN(n,t){let e=[];for(let r=t-n;r<t;++r)e.push(r);return e}function zN(n,t){let e=Z(n,"base","pow"),r=Z(t,"exp","pow");[e,r]=Ue(e,r);let i={a:e,b:r};return z.runKernel("Pow",i)}var So=tt({pow_:zN});function fe(n,t){if((rn(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&rn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return wh(n,[],[],t)}function GN(n){let e={x:Z(n,"x","sqrt","float32")};return z.runKernel(ho,e)}var $e=tt({sqrt_:GN});function VN(n){let t=Z(n,"x","square"),e={};return z.runKernel("Square",{x:t},e)}var se=tt({square_:VN});function HN(n,t=null,e=!1){let r=Z(n,"x","sum");r.dtype==="bool"&&(r=Pt(r,"int32"));let i={x:r},o={axis:t,keepDims:e};return z.runKernel("Sum",i,o)}var ce=tt({sum_:HN});function WN(n){let e={x:Z(n,"x","exp")};return z.runKernel("Exp",e)}var bi=tt({exp_:WN});function $N(n,t=0){let e=Z(n,"x","expandDims","string_or_numeric");Y(t<=e.rank,()=>"Axis must be <= rank of the tensor");let r={input:e},i={dim:t};return z.runKernel(_s,r,i)}var fy=tt({expandDims_:$N});function qN(n,t){let e=Z(n,"x","tile","string_or_numeric");Y(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);let r={x:e},i={reps:t};return z.runKernel(xi,r,i)}var py=tt({tile_:qN});function XN(n){let e={x:Z(n,"x","floor","float32")};return z.runKernel(eo,e)}var dy=tt({floor_:XN});function KN(n,t,e=0,r=0){let i=Z(n,"x","gather"),o=Z(t,"indices","gather","int32"),s={x:i,indices:o},a={axis:e,batchDims:r};return z.runKernel(vs,s,a)}var my=tt({gather_:KN});function YN(n,t){let e=Z(n,"a","greater","string_or_numeric"),r=Z(t,"b","greater","string_or_numeric");[e,r]=Ue(e,r),ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(ja,i)}var wr=tt({greater_:YN});function ZN(n,t){let e=Z(n,"a","greaterEqual","string_or_numeric"),r=Z(t,"b","greaterEqual","string_or_numeric");[e,r]=Ue(e,r),ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(ro,i)}var qs=tt({greaterEqual_:ZN});function JN(n){let e={input:Z(n,"input","imag")};return z.runKernel(Zu,e)}var gy=tt({imag_:JN});function jN(n,t=.2){let r={x:Z(n,"x","leakyRelu")},i={alpha:t};return z.runKernel(Ss,r,i)}var xy=tt({leakyRelu_:jN});function QN(n,t){let e=Z(n,"a","less","string_or_numeric"),r=Z(t,"b","less","string_or_numeric");[e,r]=Ue(e,r),ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(nc,i)}var yy=tt({less_:QN});function t2(n,t){let e=Z(n,"a","lessEqual","string_or_numeric"),r=Z(t,"b","lessEqual","string_or_numeric");[e,r]=Ue(e,r),ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(rc,i)}var Xs=tt({lessEqual_:t2});function e2(n){let e={x:Z(n,"x","log","float32")};return z.runKernel("Log",e)}var _y=tt({log_:e2});function vd(n){return Y(Ji(n),()=>"The f passed in grad(f) must be a function"),(t,e)=>{let r=Z(t,"x","tf.grad","string_or_numeric"),i=e!=null?Z(e,"dy","tf.grad"):null;return z.tidy(()=>{let{value:o,grads:s}=z.gradients(()=>n(r),[r],i);return i!=null&&ka(o.shape,i.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),n2(s),s[0]})}}function Sd(n,t){Y(Ji(n),()=>"The f passed in variableGrads(f) must be a function"),Y(t==null||Array.isArray(t)&&t.every(l=>l instanceof Vr),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let e=t!=null;if(!e){t=[];for(let l in z.registeredVariables)t.push(z.registeredVariables[l])}let r=e?t.filter(l=>!l.trainable):null,i=t.length;t=t.filter(l=>l.trainable),Y(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let o=!0,{value:s,grads:a}=z.gradients(n,t,null,o);Y(a.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),Y(s.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${s.rank} tensor`);let c={};return t.forEach((l,u)=>{a[u]!=null&&(c[l.name]=a[u])}),r?.forEach(l=>c[l.name]=null),{value:s,grads:c}}function n2(n){if(n.filter(e=>e==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}function r2(n){let e={x:Z(n,"x","neg")};return z.runKernel("Neg",e)}var ze=tt({neg_:r2});function i2(n,t){let e=Z(n,"a","sub"),r=Z(t,"b","sub");[e,r]=Ue(e,r);let i={a:e,b:r};return z.runKernel("Sub",i)}var _e=tt({sub_:i2});function o2(n,t){let e=Z(n,"a","logicalAnd","bool"),r=Z(t,"b","logicalAnd","bool");ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(oc,i)}var zh=tt({logicalAnd_:o2});function s2(n){let e={x:Z(n,"x","logicalNot","bool")};return z.runKernel(sc,e)}var vy=tt({logicalNot_:s2});function a2(n,t){let e=Z(n,"a","maximum"),r=Z(t,"b","maximum");[e,r]=Ue(e,r),e.dtype==="bool"&&(e=Pt(e,"int32"),r=Pt(r,"int32")),ye(e.shape,r.shape);let i={a:e,b:r};return z.runKernel(io,i)}var Gh=tt({maximum_:a2});function Ks(n,t="float32"){if(On(n),t==="complex64"){let r=Ks(n,"float32"),i=Ks(n,"float32");return Gs(r,i)}let e=hs(Ce(n),t);return z.makeTensor(e,n,t)}function bo(n,t="float32"){if(On(n),t==="complex64"){let r=bo(n,"float32"),i=Ks(n,"float32");return Gs(r,i)}let e=La(Ce(n),t);return z.makeTensor(e,n,t)}function c2(n,t,e=0){let r=Z(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let i={paddings:t,constantValue:e},o={x:r};return z.runKernel(Ms,o,i)}var Sy=tt({pad_:c2});function l2(n,t,e){let r=Z(n,"x","spaceToBatchND");Y(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),Y(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),Y(r.shape.reduce((s,a,c)=>c>0&&c<=t.length?s&&(a+e[c-1][0]+e[c-1][1])%t[c-1]===0:s,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},o={blockShape:t,paddings:e};return z.runKernel(Cs,i,o)}var by=tt({spaceToBatchND_:l2});function u2(n,t){let e=Z(n,"x","prelu"),r=Z(t,"alpha","prelu"),i={x:e,alpha:r};return z.runKernel(ws,i)}var My=tt({prelu_:u2});function x2(n){let e={input:Z(n,"input","real")};return z.runKernel(ah,e)}var Gy=tt({real_:x2});function y2(n){let e={x:Z(n,"x","relu")};return z.runKernel(so,e)}var Vy=tt({relu_:y2});function _2(n){let e={x:Z(n,"x","relu6")};return z.runKernel(ao,e)}var Hy=tt({relu6_:_2});function v2(n,t){let r={x:Z(n,"x","reverse")},i={dims:t};return z.runKernel(Es,r,i)}var Wy=tt({reverse_:v2});function S2(n){let e={x:Z(n,"x","rsqrt","float32")};return z.runKernel(co,e)}var $y=tt({rsqrt_:S2});function b2(n){let e={x:Z(n,"x","sin","float32")};return z.runKernel("Sin",e)}var qy=tt({sin_:b2});function M2(n){let e={x:Z(n,"x","sinh")};return z.runKernel(lo,e)}var Xy=tt({sinh_:M2});function w2(n,t,e=0){let i={x:Z(n,"x","split")},o={numOrSizeSplits:t,axis:e};return z.runKernel(Rs,i,o)}var Ky=tt({split_:w2});function T2(n,t=0){let e=vc(n,"tensors","stack","string_or_numeric");Y(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&Y(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");let r=e,i={axis:t};return z.runKernel(bs,r,i)}var Wh=tt({stack_:T2});function E2(n,t=0){let r={x:Z(n,"x","step")},i={alpha:t};return z.runKernel(fo,r,i)}var Mi=tt({step_:E2});function wo(n,t){Ip(n);let e=rd(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return wh(n,null,e,t)}function Yy(n,t,e){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${i}.`;if(e.rank<i)throw new Error(o+` update.rank < ${i}. `);if(n.length<r+(e.rank-i))throw new Error(o+` Output shape length < ${r+(e.rank-i)}`);if(e.rank!==i+n.length-r)throw new Error(o+` update.rank != ${i+n.length-r}`);for(let s=0;s<i;++s)if(e.shape[s]!==t.shape[s])throw new Error(o+` updates.shape[${s}] (${e.shape[s]}) != indices.shape[${s}] (${t.shape[s]}).`);for(let s=0;s<e.rank-i;++s)if(e.shape[s+i]!==n[s+r])throw new Error(o+` updates.shape[${s+i}] (${e.shape[s+i]}) != shape[${s+i}] (${n[s+i]})`)}function A2(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Yy(e,t,n)}function I2(n,t,e){let r=t.shape.length,i=r>1?t.shape[r-1]:1,o=e.length,s=1;for(let h=i;h<o;++h)s*=e[h];let a=i<1?1:i,c=Ce(t.shape)/a,l=[...vr(e.slice(0,i)),1],u=Ce(e);return{sliceRank:i,numUpdates:c,sliceSize:s,strides:l,outputSize:u}}function C2(n,t,e){let r=Z(n,"x","unsortedSegmentSum"),i=Z(t,"segmentIds","unsortedSegmentSum","int32");Y(Yi(e),()=>"numSegments must be of dtype int");let o={x:r,segmentIds:i},s={numSegments:e};return z.runKernel(Ds,o,s)}var Zy=tt({unsortedSegmentSum_:C2});function R2(n,t=0){let e=Z(n,"x","unstack","string_or_numeric");Y(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);let r={value:e},i={axis:t};return z.runKernel(Ns,r,i)}var Jy=tt({unstack_:R2});function jy(n,t){let e=[];for(let o=0;o<t.length;o++)t[o]&&e.push(o);let r=Xt(n,"int32"),i=Xt([e.length,n.length],"int32");for(let o=0;o<e.length;o++){let s=r.indexToLoc(e[o]),a=o*n.length;i.values.set(s,a)}return i.toTensor()}function N2(n,t,e){let r=Z(n,"x","transpose");if(t==null&&(t=r.shape.map((s,a)=>a).reverse()),Y(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(s=>{Y(s>=0&&s<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},o={perm:t};return r.dtype==="complex64"?be(()=>{let s=Gy(r),a=gy(r);return s=z.runKernel(yi,{x:s},o),a=z.runKernel(yi,{x:a},o),e&&(a=ze(a)),Gs(s,a)}):z.runKernel(yi,i,o)}var Tr=tt({transpose_:N2});function D2(n,t,e,r,i,o="NHWC",s){let a=n;n.rank===3&&(a=yt(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=t;c.rank===3&&(c=yt(t,[1,t.shape[0],t.shape[1],t.shape[2]])),Y(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),Y(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),Y(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);let l=o==="NHWC"?a.shape[3]:a.shape[1],u=o==="NHWC"?c.shape[3]:c.shape[1];Y(l===e[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${e[2]}.`),Y(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),yn("conv2dDerFilter",i,s);let h={x:a,dy:c},f={strides:r,pad:i,dataFormat:o,dimRoundingMode:s,filterShape:e};return z.runKernel(Ou,h,f)}var $h=tt({conv2DBackpropFilter_:D2});function P2(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return Q(n,Mi(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function F2(n,t){let e=t,r=we(n.shape,t.shape);return r.length>0&&(e=ce(e,r)),yt(e,n.shape)}function k2(n,t,e,r){if(t==="linear")return n;if(t==="relu")return Vy(n);if(t==="elu")return ly(n);if(t==="relu6")return Hy(n);if(t==="prelu")return My(n,e);if(t==="leakyrelu")return xy(n,r);if(t==="sigmoid")return Dh(n);throw new Error(`Unknown fused activation ${t}.`)}var L2=(n,t)=>!(n>0)||t==="linear";function U2(n,t,e,r,i,o=[1,1],s){let a=n;n.rank===3&&(a=yt(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=t;c.rank===3&&(c=yt(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:a,dy:c},u={strides:r,pad:i,dimRoundingMode:s,dilations:o,filterShape:e};return z.runKernel(Wu,l,u)}var Qy=tt({depthwiseConv2dNativeBackpropFilter_:U2});function O2(n,t,e,r,i,o=[1,1],s){let a=t,c=!1;t.rank===3&&(c=!0,a=yt(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:a,filter:e},u={strides:r,pad:i,dimRoundingMode:s,dilations:o,inputShape:n},h=z.runKernel($u,l,u);return c?yt(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var t_=tt({depthwiseConv2dNativeBackpropInput_:O2});function e_(n,t,e){let r=B2(n,t,e),i=r<0?-(r+1):r;n.splice(i,0,t)}function B2(n,t,e){return G2(n,t,e||z2)}function z2(n,t){return n>t?1:n<t?-1:0}function G2(n,t,e){let r=0,i=n.length,o=0,s=!1;for(;r<i;){o=r+(i-r>>>1);let a=e(t,n[o]);a>0?r=o+1:(i=o,s=!a)}return s?r:-r-1}function r_(n,t,e,r,i){return Cd(n,t,e,r,i,0)}function i_(n,t,e,r,i,o){return Cd(n,t,e,r,i,0,!1,o,!0)}function o_(n,t,e,r,i,o){return Cd(n,t,e,r,i,o,!0)}function Cd(n,t,e,r,i,o,s=!1,a=!1,c=!1){let l=[];for(let m=0;m<t.length;m++)t[m]>i&&l.push({score:t[m],boxIndex:m,suppressBeginIndex:0});l.sort(n_);let u=o>0?-.5/o:0,h=[],f=[];for(;h.length<e&&l.length>0;){let m=l.pop(),{score:d,boxIndex:v,suppressBeginIndex:_}=m;if(d<i)break;let y=!1;for(let S=h.length-1;S>=_;--S){let b=V2(n,v,h[S]);if(b>=r){y=!0;break}if(m.score=m.score*H2(r,u,b),m.score<=i)break}m.suppressBeginIndex=h.length,y||(m.score===d?(h.push(v),f.push(m.score)):m.score>i&&e_(l,m,n_))}let p=h.length,g=e-p;a&&g>0&&(h.push(...new Array(g).fill(0)),f.push(...new Array(g).fill(0)));let x={selectedIndices:h};return s&&(x.selectedScores=f),c&&(x.validOutputs=p),x}function V2(n,t,e){let r=n.subarray(t*4,t*4+4),i=n.subarray(e*4,e*4+4),o=Math.min(r[0],r[2]),s=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),h=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(a-o)*(c-s),g=(h-l)*(f-u);if(p<=0||g<=0)return 0;let x=Math.max(o,l),m=Math.max(s,u),d=Math.min(a,h),v=Math.min(c,f),_=Math.max(d-x,0)*Math.max(v-m,0);return _/(p+g-_)}function H2(n,t,e){let r=Math.exp(t*e*e);return e<=n?r:0}function n_(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}var W2=new Map,$2=new Map,qh=class{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}},Rd=class n{constructor(){this.classNameMap={}}static getMap(){return n.instance==null&&(n.instance=new n),n.instance}static register(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function s_(n,t,e){Y(n.className!=null,()=>"Class being registered does not have the static className property defined."),Y(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),Y(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=n.className);let r=e,i=t+">"+r;return Rd.register(n),W2.set(i,n),$2.set(n,i),n}var _n=class extends qh{minimize(t,e=!1,r){let{value:i,grads:o}=this.computeGradients(t,r);if(r!=null){let s=r.map(a=>({name:a.name,tensor:o[a.name]}));this.applyGradients(s)}else this.applyGradients(o);return Ye(o),e?i:(i.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return Sd(t,e)}dispose(){this.iterations_!=null&&Ye(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:fe(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(_n,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});var Xh=class extends _n{static get className(){return"Adadelta"}constructor(t,e,r=null){super(),this.learningRate=t,this.rho=e,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=z.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,i)=>{let o=z.registeredVariables[r],s=!1;this.accumulatedGrads[i]==null&&(this.accumulatedGrads[i]={originalName:`${r}/accum_grad`,variable:be(()=>$t(o).variable(s))}),this.accumulatedUpdates[i]==null&&(this.accumulatedUpdates[i]={originalName:`${r}/accum_var`,variable:be(()=>$t(o).variable(s))});let a=Array.isArray(t)?t[i].tensor:t[r];if(a==null)return;let c=this.accumulatedGrads[i].variable,l=this.accumulatedUpdates[i].variable;be(()=>{let u=Kt(Q(c,this.rho),Q(se(a),1-this.rho)),h=Q(Yt($e(Kt(l,this.epsilon)),$e(Kt(c,this.epsilon))),a),f=Kt(Q(l,this.rho),Q(se(h),1-this.rho));c.assign(u),l.assign(f);let p=Kt(Q(h,-this.learningRate),o);o.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ye(this.accumulatedGrads.map(t=>t.variable)),Ye(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=t.length/2,r=!1;this.accumulatedGrads=t.slice(0,e).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.accumulatedUpdates=t.slice(e,e*2).map(i=>({originalName:i.name,variable:i.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}};var Kh=class extends _n{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,i)=>{let o=z.registeredVariables[r];this.accumulatedGrads[i]==null&&(this.accumulatedGrads[i]={originalName:`${r}/accumulator`,variable:be(()=>ey(o.shape,this.initialAccumulatorValue).variable(!1))});let s=Array.isArray(t)?t[i].tensor:t[r];if(s==null)return;let a=this.accumulatedGrads[i].variable;be(()=>{let c=Kt(a,se(s));a.assign(c);let l=Kt(Q(Yt(s,$e(Kt(c,z.backend.epsilon()))),-this.learningRate),o);o.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ye(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=!1;this.accumulatedGrads=t.map(r=>({originalName:r.name,variable:r.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}};var Yh=class extends _n{static get className(){return"Adam"}constructor(t,e,r,i=null){super(),this.learningRate=t,this.beta1=e,this.beta2=r,this.epsilon=i,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],be(()=>{this.accBeta1=fe(e).variable(),this.accBeta2=fe(r).variable()}),i==null&&(this.epsilon=z.backend.epsilon())}applyGradients(t){let e=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);be(()=>{let r=_e(1,this.accBeta1),i=_e(1,this.accBeta2);e.forEach((o,s)=>{let a=z.registeredVariables[o],c=!1;this.accumulatedFirstMoment[s]==null&&(this.accumulatedFirstMoment[s]={originalName:`${o}/m`,variable:be(()=>$t(a).variable(c))}),this.accumulatedSecondMoment[s]==null&&(this.accumulatedSecondMoment[s]={originalName:`${o}/v`,variable:be(()=>$t(a).variable(c))});let l=Array.isArray(t)?t[s].tensor:t[o];if(l==null)return;let u=this.accumulatedFirstMoment[s].variable,h=this.accumulatedSecondMoment[s].variable,f=Kt(Q(u,this.beta1),Q(l,1-this.beta1)),p=Kt(Q(h,this.beta2),Q(se(l),1-this.beta2)),g=Yt(f,r),x=Yt(p,i);u.assign(f),h.assign(p);let m=Kt(Q(Yt(g,Kt($e(x),this.epsilon)),-this.learningRate),a);a.assign(m)}),this.accBeta1.assign(Q(this.accBeta1,this.beta1)),this.accBeta2.assign(Q(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ye(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Ye(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),be(()=>{this.accBeta1.assign(So(this.beta1,this.iterations_+1)),this.accBeta2.assign(So(this.beta2,this.iterations_+1))});let e=t.length/2,r=!1;this.accumulatedFirstMoment=t.slice(0,e).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(i=>({originalName:i.name,variable:i.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}};var Zh=class extends _n{static get className(){return"Adamax"}constructor(t,e,r,i=null,o=0){super(),this.learningRate=t,this.beta1=e,this.beta2=r,this.epsilon=i,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],be(()=>{this.iteration=fe(0).variable(),this.accBeta1=fe(e).variable()}),i==null&&(this.epsilon=z.backend.epsilon())}applyGradients(t){let e=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);be(()=>{let r=_e(1,this.accBeta1),i=Yt(-this.learningRate,Kt(Q(this.iteration,this.decay),1));e.forEach((o,s)=>{let a=z.registeredVariables[o],c=!1;this.accumulatedFirstMoment[s]==null&&(this.accumulatedFirstMoment[s]={originalName:`${o}/m`,variable:$t(a).variable(c)}),this.accumulatedWeightedInfNorm[s]==null&&(this.accumulatedWeightedInfNorm[s]={originalName:`${o}/v`,variable:$t(a).variable(c)});let l=Array.isArray(t)?t[s].tensor:t[o];if(l==null)return;let u=this.accumulatedFirstMoment[s].variable,h=this.accumulatedWeightedInfNorm[s].variable,f=Kt(Q(u,this.beta1),Q(l,1-this.beta1)),p=Q(h,this.beta2),g=Z0(l),x=Gh(p,g);u.assign(f),h.assign(x);let m=Kt(Q(Yt(i,r),Yt(f,Kt(x,this.epsilon))),a);a.assign(m)}),this.iteration.assign(Kt(this.iteration,1)),this.accBeta1.assign(Q(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ye(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Ye(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}};var Ys=class extends _n{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,i)=>{let o=Array.isArray(t)?t[i].tensor:t[r];if(o==null)return;let s=z.registeredVariables[r];be(()=>{let a=Kt(Q(this.c,o),s);s.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=N0(fe(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}};var Jh=class extends Ys{static get className(){return"Momentum"}constructor(t,e,r=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=r,this.accumulations=[],this.m=fe(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,i)=>{let o=z.registeredVariables[r];this.accumulations[i]==null&&(this.accumulations[i]={originalName:`${r}/momentum`,variable:be(()=>$t(o).variable(!1))});let s=this.accumulations[i].variable,a=Array.isArray(t)?t[i].tensor:t[r];a!=null&&be(()=>{let c,l=Kt(Q(this.m,s),a);this.useNesterov?c=Kt(Q(this.c,Kt(a,Q(l,this.m))),o):c=Kt(Q(this.c,l),o),s.assign(l),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ye(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=!1;this.accumulations=t.map(r=>({originalName:r.name,variable:r.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}};var jh=class extends _n{static get className(){return"RMSProp"}constructor(t,e=.9,r=0,i=null,o=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=r,this.epsilon=i,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,i==null&&(this.epsilon=z.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,i)=>{let o=z.registeredVariables[r],s=!1;this.accumulatedMeanSquares[i]==null&&(this.accumulatedMeanSquares[i]={originalName:`${r}/rms`,variable:be(()=>$t(o).variable(s))}),this.accumulatedMoments[i]==null&&(this.accumulatedMoments[i]={originalName:`${r}/momentum`,variable:be(()=>$t(o).variable(s))}),this.accumulatedMeanGrads[i]==null&&this.centered&&(this.accumulatedMeanGrads[i]={originalName:`${r}/mg`,variable:be(()=>$t(o).variable(s))});let a=Array.isArray(t)?t[i].tensor:t[r];if(a==null)return;let c=this.accumulatedMeanSquares[i].variable,l=this.accumulatedMoments[i].variable;be(()=>{let u=Kt(Q(c,this.decay),Q(se(a),1-this.decay));if(this.centered){let h=this.accumulatedMeanGrads[i].variable,f=Kt(Q(h,this.decay),Q(a,1-this.decay)),p=Yt(Q(a,this.learningRate),$e(_e(u,Kt(se(f),this.epsilon)))),g=Kt(Q(l,this.momentum),p);c.assign(u),h.assign(f),l.assign(g);let x=_e(o,g);o.assign(x)}else{let h=Kt(Q(c,this.decay),Q(se(a),1-this.decay)),f=Kt(Q(l,this.momentum),Yt(Q(a,this.learningRate),$e(Kt(h,this.epsilon))));c.assign(h),l.assign(f);let p=_e(o,f);o.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ye(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ye(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Ye(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=this.centered?t.length/3:t.length/2,r=!1;this.accumulatedMeanSquares=t.slice(0,e).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.accumulatedMoments=t.slice(e,e*2).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(i=>({originalName:i.name,variable:i.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}};var q2=[Xh,Kh,Yh,Zh,Jh,jh,Ys];function a_(){for(let n of q2)s_(n)}var X2="model",K2=".json",Y2=".weights.bin";function c_(n){return new Promise(t=>setTimeout(t)).then(n)}var Zs=class n{constructor(t){if(!Wt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),(t==null||t.length===0)&&(t=X2),this.modelJsonFileName=t+K2,this.weightDataFileName=t+Y2}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let e=En.join(t.weightData),r=window.URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let i=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=Th(t,i),s=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=s,await c_(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=r,await c_(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Hr(t)}}}};Zs.URL_SCHEME="downloads://";var Z2=n=>Wt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Zs.URL_SCHEME)?J2(n.slice(Zs.URL_SCHEME.length)):null;An.registerSaveRouter(Z2);function J2(n="model"){return new Zs(n)}function Nd(n,t,e,r){s(n),e=e??0,r=r??1,a(e,r);let i=0,o=c=>(c.then(l=>{let u=e+ ++i/n.length*(r-e);return t(u),l}),c);function s(c){Y(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function a(c,l){Y(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),Y(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),Y(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(n.map(o))}async function l_(n,t){t==null&&(t={});let e=t.fetchFunc==null?Wt().platform.fetch:t.fetchFunc,r=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?await Promise.all(r):await Nd(r,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?await Promise.all(a):await Nd(a,t.onProgress,.5,1)}function u_(n,t){var e;let r=t.fetchFunc==null?Wt().platform.fetch:t.fetchFunc,i=0,o;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:async s=>{for(var a;i<n.length;){o||(o=(await r(n[i],t.requestInit,{isBinary:!0})).body.getReader());let{done:c,value:l}=await o.read();if(c){i++,o=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,i/n.length);continue}s.enqueue(l);return}s.close()}})}var Q2="application/octet-stream",tD="application/json",Ac=class{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(Y(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=Wt().platform.fetch,Y(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&Y(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;let r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],i=Th(t,r);if(e.body.append("model.json",new Blob([JSON.stringify(i)],{type:tD}),"model.json"),t.weightData!=null){let s=En.join(t.weightData);e.body.append("model.weights.bin",new Blob([s],{type:Q2}),"model.weights.bin")}let o=await this.fetch(this.path,e);if(o.ok)return{modelArtifactsInfo:Hr(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let s=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?s+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":s+=" Please make sure the server is serving valid JSON for this request.",new Error(s)}let r=e.modelTopology,i=e.weightsManifest;if(r==null&&i==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();let t=await this.loadModelJSON();return Eh(t,e=>this.loadWeights(e))}async loadStream(){let t=await this.loadModelJSON(),e=await this.getWeightUrls(t.weightsManifest),r=Ah(t.weightsManifest),i=()=>u_(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:r,getWeightStream:i})}async getWeightUrls(t){let e=Array.isArray(this.path)?this.path[1]:this.path,[r,i]=eD(e),o=this.weightPathPrefix||r,s=[],a=[];for(let c of t)for(let l of c.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(l)):s.push(o+l+i);return this.weightUrlConverter&&s.push(...await Promise.all(a)),s}async loadWeights(t){let e=await this.getWeightUrls(t),r=Ah(t),i=await l_(e,this.loadOptions);return[r,i]}};Ac.URL_SCHEME_REGEX=/^https?:\/\//;function eD(n){let t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),r=n.substring(0,t),i=e>t?n.substring(e):"";return[r+"/",i]}function Dd(n){return n.match(Ac.URL_SCHEME_REGEX)!=null}var h_=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(r=>Dd(r)):e=Dd(n),e)return f_(n,t)}return null};An.registerSaveRouter(h_);An.registerLoadRouter(h_);function f_(n,t){return new Ac(n,t)}function rD(n,t){let e=n.shape.length,r=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${e}`);if(Ce(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);let i=t.shape,o=i[i.length-1],s=1;for(let h=0;h<i.length-1;++h)s*=i[h];let a=n.shape,c=i.slice();c.pop();let l=1;for(let h=o;h<e;++h)l*=a[h],c.push(a[h]);let u=[...vr(n.shape).map(h=>h/l),1].slice(0,o);return[c,s,l,u]}var Qn={};Io(Qn,{assertParamsValid:()=>oD,computeFlatOffset:()=>uD,computeOutShape:()=>aD,getNormalizedAxes:()=>cD,isSliceContinous:()=>lD,maskToAxes:()=>sD,parseSliceParams:()=>Fd,sliceInfo:()=>hD,startForAxis:()=>v_,startIndicesWithElidedDims:()=>x_,stopForAxis:()=>S_,stopIndicesWithElidedDims:()=>y_,stridesForAxis:()=>__,stridesWithElidedDims:()=>d_});var Pd=-2,iD=-1;function oD(n,t,e){let r=n.shape.length;Y(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),Y(r===e.length,()=>`Error in slice${r}D: Length of size ${e} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)Y(t[i]+e[i]<=n.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+e[i]}) would overflow input.shape[${i}] (${n.shape[i]})`)}function sD(n){let t=[],e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function aD(n,t,e){let r=[];for(let i=0;i<n.length;i++)r[i]=Math.ceil((t[i]-n[i])/e[i]);return r}function d_(n,t,e,r){let i=[...n];for(let o=i.length;o<r.length;o++)i.push(1);for(let o=0;o<e;o++)o===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function m_(n,t,e){return e<=n?e:e-(t-1)}function g_(n,t){let e=[];for(let r=0;r<n;r++)e.push(t+r);return e}function cD(n,t,e,r,i,o,s,a,c){let l=n.length,u=new Array(l),h=new Array(l),f=new Array(l);if(t.length&&e>0){let p=t[0],g=e+1;u=x_(s,p,g,r,n),h=y_(a,p,g,i,n),f=d_(o,p,g,n)}else for(let p=0;p<l;p++)u[p]=v_(s,r,o,n,p,c),h[p]=S_(a,i,o,n,p,c),f[p]=__(o,p,c);return{begin:u,end:h,strides:f}}function x_(n,t,e,r,i){let o=[...i],s=g_(e,t);for(let a=0;a<o.length;a++)if(s.indexOf(a)>-1)o[a]=0;else{let c=m_(t,e,a),l=r[c];n&1<<c&&(l=0),o[a]=l}return o}function y_(n,t,e,r,i){let o=[...i],s=g_(e,t);for(let a=0;a<o.length;a++)if(s.indexOf(a)>-1)o[a]=Number.MAX_SAFE_INTEGER;else{let c=m_(t,e,a),l=r[c];n&1<<c&&(l=Number.MAX_SAFE_INTEGER),o[a]=l}for(let a=0;a<o.length;a++){let c=i[a];o[a]<0&&(o[a]+=c),o[a]=ss(0,o[a],i[a])}return o}function __(n,t,e){let r=n[t];return(e&1<<t||r==null)&&(r=1),r}function v_(n,t,e,r,i,o){let s=t[i],a=e[i]||1;(n&1<<i||o&1<<i||s==null)&&(a>0?s=Number.MIN_SAFE_INTEGER:s=Number.MAX_SAFE_INTEGER);let c=r[i];return s<0&&(s+=c),s=ss(0,s,c-1),s}function S_(n,t,e,r,i,o){let s=t[i],a=e[i]||1;(n&1<<i||o&1<<i||s==null)&&(a>0?s=Number.MAX_SAFE_INTEGER:s=Number.MIN_SAFE_INTEGER);let c=r[i];return s<0&&(s+=c),a>0?s=ss(0,s,c):s=ss(-1,s,c-1),s}function lD(n,t,e){let r=e.length;for(let i=0;i<e.length;i++)if(e[i]>1){r=i;break}for(let i=r+1;i<e.length;i++)if(t[i]>0||e[i]!==n[i])return!1;return!0}function uD(n,t){let e=n.length>0?n[n.length-1]:1;for(let r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function Fd(n,t,e){let r,i=n.shape.length;typeof t=="number"?r=[t,...new Array(i-1).fill(0)]:t.length<i?r=t.concat(new Array(i-t.length).fill(0)):r=t.slice(),r.forEach(s=>{Y(s!==-1,()=>"slice() does not support negative begin indexing.")});let o;return e==null?o=new Array(i).fill(-1):typeof e=="number"?o=[e,...new Array(i-1).fill(-1)]:e.length<i?o=e.concat(new Array(i-e.length).fill(-1)):o=e,o=o.map((s,a)=>s>=0?s:(Y(s===-1,()=>`Negative size values should be exactly -1 but got ${s} for the slice() size at index ${a}.`),n.shape[a]-r[a])),[r,o]}function hD(n,t,e,r,i,o,s,a,c){let l;if(r==null?(l=new Array(t.length),l.fill(1)):l=r,s!=null&&(s&s-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1,h={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:l.slice(),beginMask:i,endMask:o,ellipsisMask:s,newAxisMask:a,shrinkAxisMask:c};for(let _=0;_<h.dims;_++)u&&(1<<_&a)!==0&&h.numAddAxisAfterEllipsis++,1<<_&s&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);let f={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};fD(h,f);let p=!0,g=!0,x=!0,m=[],d=[];for(let _=0;_<n.length;++_){if(f.strides[_]===0)throw Error(`strides[${_}] must be non-zero`);let y=!!(f.shrinkAxisMask&1<<_),S=n[_];if(S===-1){m.push(y?1:-1);continue}let b=[f.beginMask&1<<_,f.endMask&1<<_],E=[f.strides[_]>0?0:-1,f.strides[_]>0?S:S-1];if(y&&f.strides[_]<=0)throw Error("only stride 1 allowed on non-range indexing.");x=x&&f.strides[_]===1;let R=!!(f.beginMask&1<<_&&f.endMask&1<<_);if(f.beginValid&&f.endValid){if(y){let P=f.begin[_]<0?S+f.begin[_]:f.begin[_];if(f.begin[_]=P,f.end[_]=f.begin[_]+1,P<0||P>=S)throw Error(`slice index ${f.begin[_]} of dimension ${_} out of bounds.`)}else f.begin[_]=p_(f.begin[_],0,f.strides[_],S,b,E),f.end[_]=p_(f.end[_],1,f.strides[_],S,b,E);let C=f.strides[_]===1&&f.begin[_]===0&&f.end[_]===S;p=p&&C,g=g&&(_===0&&f.strides[_]===1||C)}else p=p&&f.strides[_]===1&&R,g=g&&(_===0&&f.strides[_]===1||R);let w,M=!1;if(f.beginValid&&f.endValid?(w=f.end[_]-f.begin[_],M=!0):y?(w=1,M=!0):R&&S>=0&&(f.strides[_]<0?w=-S:w=S,M=!0),M){let C;w===0||w<0!=f.strides[_]<0?C=0:C=Math.trunc(w/f.strides[_])+(w%f.strides[_]!==0?1:0),m.push(C)}else m.push(-1)}for(let _=0;_<f.finalShapeGatherIndices.length;++_){let y=f.finalShapeGatherIndices[_];y>=0?d.push(m[y]):y===Pd&&d.push(1)}return{finalShapeSparse:d.filter((_,y)=>f.finalShapeGatherIndices[y]!==Pd),finalShape:d,isIdentity:p,sliceDim0:g,isSimpleSlice:x,begin:f.begin,end:f.end,strides:f.strides}}function fD(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<n.dims;r++)if(1<<r&n.ellipsisMask){let i=Math.min(t.dims-(n.dims-r)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<i;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=r}else if(1<<r&n.newAxisMask)t.finalShapeGatherIndices.push(Pd),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[r]),n.end!=null&&(t.end[e]=n.end[r]),t.strides[e]=n.strides[r],n.beginMask&1<<r&&(t.beginMask|=1<<e),n.endMask&1<<r&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(iD),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[e]=r,e++}}function p_(n,t,e,r,i,o){if(i[t])return e>0?o[t]:o[t+1&1];{let s=n<0?r+n:n;return s<o[0]?o[0]:s>o[1]?o[1]:s}}var B={};Io(B,{ERF_A1:()=>AD,ERF_A2:()=>ID,ERF_A3:()=>CD,ERF_A4:()=>RD,ERF_A5:()=>ND,ERF_P:()=>ED,PARALLELIZE_THRESHOLD:()=>Qh,RowPartitionType:()=>Er,SELU_SCALE:()=>Ld,SELU_SCALEALPHA:()=>kd,applyActivation:()=>k2,assertAndGetBroadcastShape:()=>ye,assertAxesAreInnerMostDims:()=>ON,assertParamsConsistent:()=>pD,assignToTypedArray:()=>UD,axesAreInnerMostDims:()=>gd,calculateShapes:()=>I2,checkEinsumDimSizes:()=>HD,checkPadOnDimRoundingMode:()=>yn,combineLocations:()=>uy,combineRaggedTensorToTensorShapes:()=>mD,complexWithEvenIndex:()=>FD,complexWithOddIndex:()=>kD,computeConv2DInfo:()=>pd,computeConv3DInfo:()=>J0,computeDefaultPad:()=>dd,computeDilation2DInfo:()=>pN,computeOptimalWindowSize:()=>_D,computeOutAndReduceShapes:()=>xd,computeOutShape:()=>dD,computePool2DInfo:()=>dN,computePool3DInfo:()=>mN,convertConv2DDataFormat:()=>j0,decodeEinsumEquation:()=>GD,eitherStridesOrDilationsAreOne:()=>wc,expandShapeToKeepDim:()=>kh,exponent:()=>BD,exponents:()=>OD,fromStringArrayToUint8:()=>uP,fromUint8ToStringArray:()=>lP,getAxesPermutation:()=>yd,getBroadcastDims:()=>ay,getComplexWithIndex:()=>LD,getEinsumComputePath:()=>WD,getEinsumPermutation:()=>VD,getFusedBiasGradient:()=>F2,getFusedDyActivation:()=>P2,getImageCenter:()=>vD,getInnerMostAxes:()=>BN,getPermuted:()=>bD,getRaggedRank:()=>xD,getReductionAxes:()=>we,getReshaped:()=>SD,getReshapedPermuted:()=>MD,getRowPartitionTypesHelper:()=>gD,getSliceBeginCoords:()=>wD,getSliceSize:()=>TD,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>KD,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>YD,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>ZD,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>QD,getSparseReshapeInputOutputMismatchErrorMessage:()=>eP,getSparseReshapeInputOutputMultipleErrorMessage:()=>tP,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>JD,getSparseReshapeNegativeOutputDimErrorMessage:()=>jD,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>oP,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>nP,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>rP,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>iP,getUndoAxesPermutation:()=>Ec,isIdentityPermutation:()=>$D,log:()=>ER,mergeRealAndImagArrays:()=>DD,prepareAndValidate:()=>rD,prepareSplitSize:()=>XD,segment_util:()=>Od,shouldFuse:()=>L2,slice_util:()=>Qn,splitRealAndImagArrays:()=>PD,stridesOrDilationsArePositive:()=>Nh,tupleValuesAreOne:()=>$r,upcastType:()=>Bn,validateDefaultValueShape:()=>yD,validateInput:()=>A2,validateUpdateShape:()=>Yy,warn:()=>Sr});function pD(n,t){let e=n[0].length;n.forEach((i,o)=>{Y(i.length===e,()=>`Error in concat${e}D: rank of tensors[${o}] must be the same as the rank of the rest (${e})`)}),Y(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);let r=n[0];n.forEach((i,o)=>{for(let s=0;s<e;s++)Y(s===t||i[s]===r[s],()=>`Error in concat${e}D: Shape of tensors[${o}] (${i}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`)})}function dD(n,t){let e=n[0].slice();for(let r=1;r<n.length;r++)e[t]+=n[r][t];return e}var Er;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(Er||(Er={}));function mD(n,t,e){let r=new Array;if(e==null&&t==null)return r;if(t==null)for(;r.length<n+e.length;)r.push(-1);else r=t.slice();if(e==null)return r;if(n+e.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${r.length}`);for(let i=1;i<e.length;++i){let o=e[i],s=r[r.length-e.length+i],a=r[s];if(o>=0)if(a>=0){if(a!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+n}] = ${o} but shape[${i+n}] = ${a}`)}else r[s]=o}return r}function gD(n){let t={FIRST_DIM_SIZE:Er.FIRST_DIM_SIZE,VALUE_ROWIDS:Er.VALUE_ROWIDS,ROW_LENGTHS:Er.ROW_LENGTHS,ROW_SPLITS:Er.ROW_SPLITS,ROW_LIMITS:Er.ROW_LIMITS,ROW_STARTS:Er.ROW_STARTS},e=[];for(let r of n)if(r in t)e.push(t[r]);else break;return e}function xD(n){return n.length===0?0:n[0]===Er.FIRST_DIM_SIZE?n.length-1:n.length}function yD(n,t){if(n==null||t==null)return;let e=n.length,r=t.length;if(e>=r)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(e,r-1);++i){let o=n[i],s=t[i+1];if(o>=0&&s>=0&&o!==1&&o!==s)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-n.length}] = ${o} but ragged tensor input.flatValues.shape[${i-n.length}] = ${s}`)}}var Qh=30;function _D(n){return n<=Qh?n:us(n,Math.floor(Math.sqrt(n)))}function vD(n,t,e){let r=e*(typeof n=="number"?n:n[0]),i=t*(typeof n=="number"?n:n[1]);return[r,i]}function SD(n,t,e,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(n[0]/e),i=i.concat(n.slice(1));else{i=i.concat(n[0]);let o=t.length;for(let s=0;s<o;++s)i=i.concat([n[s+1]/t[s],t[s]]);i=i.concat(n.slice(o+1))}return i}function bD(n,t,e=!0){let r=[];if(e){r.push(t);for(let i=t+1;i<n;++i)i<=2*t?(r.push(i),r.push(i-(t+1))):r.push(i)}else{let i=[],o=[];for(let s=1;s<n;++s)s>=t*2+1||s%2===1?o.push(s):i.push(s);r.push(...i),r.push(0),r.push(...o)}return r}function MD(n,t,e,r=!0){let i=[];r?i.push(n[0]/e):i.push(n[0]*e);for(let o=1;o<n.length;++o)o<=t.length?r?i.push(t[o-1]*n[o]):i.push(n[o]/t[o-1]):i.push(n[o]);return i}function wD(n,t){let e=[0];for(let r=0;r<t;++r)e.push(n[r][0]);return e}function TD(n,t,e){let r=n.slice(0,1);for(let i=0;i<e;++i)r.push(n[i+1]-t[i][0]-t[i][1]);return r}var kd=1.7580993408473768,Ld=1.0507009873554805;var ED=.3275911,AD=.254829592,ID=-.284496736,CD=1.421413741,RD=-1.453152027,ND=1.061405429;function DD(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);let e=new Float32Array(n.length*2);for(let r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function PD(n){let t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let r=0;r<n.length;r+=2)t[r/2]=n[r],e[r/2]=n[r+1];return{real:t,imag:e}}function FD(n){let t=Math.ceil(n.length/4),e=new Float32Array(t),r=new Float32Array(t);for(let i=0;i<n.length;i+=4)e[Math.floor(i/4)]=n[i],r[Math.floor(i/4)]=n[i+1];return{real:e,imag:r}}function kD(n){let t=Math.floor(n.length/4),e=new Float32Array(t),r=new Float32Array(t);for(let i=2;i<n.length;i+=4)e[Math.floor(i/4)]=n[i],r[Math.floor(i/4)]=n[i+1];return{real:e,imag:r}}function LD(n,t){let e=n[t*2],r=n[t*2+1];return{real:e,imag:r}}function UD(n,t,e,r){n[r*2]=t,n[r*2+1]=e}function OD(n,t){let e=new Float32Array(n/2),r=new Float32Array(n/2);for(let i=0;i<Math.ceil(n/2);i++){let o=(t?2:-2)*Math.PI*(i/n);e[i]=Math.cos(o),r[i]=Math.sin(o)}return{real:e,imag:r}}function BD(n,t,e){let r=(e?2:-2)*Math.PI*(n/t),i=Math.cos(r),o=Math.sin(r);return{real:i,imag:o}}var Ud="->",zD=/->/g,b_=",",M_="...";function GD(n,t){n=n.replace(/\s/g,"");let e=(n.length-n.replace(zD,"").length)/Ud.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${Ud}").`);let[r,i]=n.split(Ud);Y(r.indexOf(M_)===-1,()=>`The ellipsis notation ("${M_}") is not supported yet.`);let o=r.split(b_),s=o.length;if(t!==s)throw new Error(`Expected ${s} input tensors, received ${t}`);if(s>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let f=0;f<i.length;++f){let p=i[f];if(!o.some(g=>g.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let f=0;f<r.length;++f){let p=r[f];a.indexOf(p)===-1&&p!==b_&&a.push(p)}let c=new Array(o.length);for(let f=0;f<s;++f){if(new Set(o[f].split("")).size!==o[f].length)throw new Error(`Found duplicate axes in input component ${o[f]}. Support for duplicate axes in input is not implemented yet.`);c[f]=[];for(let p=0;p<o[f].length;++p)c[f].push(a.indexOf(o[f][p]))}let l=a.length,u=i.length,h=[];for(let f=u;f<l;++f)h.push(f);return{allDims:a,summedDims:h,idDims:c}}function VD(n,t){let e=new Array(n);e.fill(-1);for(let i=0;i<t.length;++i)e[t[i]]=i;let r=[];for(let i=0;i<n;++i)e[i]===-1&&r.push(i);return e=e.filter(i=>i!==-1),{permutationIndices:e,expandDims:r}}function HD(n,t,e){let r=new Array(n);for(let i=0;i<e.length;++i){let o=e[i].shape;for(let s=0;s<t[i].length;++s)r[t[i][s]]===void 0?r[t[i][s]]=o[s]:Y(r[t[i][s]]===o[s],()=>`Expected dimension ${r[t[i][s]]} at axis ${s} of input shaped ${JSON.stringify(o)}, but got dimension ${o[s]}`)}}function WD(n,t){let e=n,r=[],i=0;n.length===0&&e.push(-1),i=n.length+1;for(let s=0;s<i;++s)r.push([]);let o=[];for(let s=0;s<e.length;++s){let a=e[s],c=qD(t,a);for(let l of c)o.indexOf(l)===-1&&(r[s].push(l),o.push(l))}return{path:e,steps:r}}function $D(n){return n.every((t,e)=>t===e)}function qD(n,t){let e=[];for(let r=0;r<n.length;++r)(n[r].length===0||n[r].indexOf(t)!==-1||t===-1)&&e.push(r);return e}function XD(n,t,e=0){let r=[];if(typeof t=="number")Y(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),r=new Array(t).fill(n.shape[e]/t);else{let i=t.reduce((s,a)=>(a===-1&&(s+=1),s),0);Y(i<=1,()=>"There should be only one negative value in split array.");let o=t.indexOf(-1);if(o!==-1){let s=t.reduce((a,c)=>c>0?a+c:a);t[o]=n.shape[e]-s}Y(n.shape[e]===t.reduce((s,a)=>s+a),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}function KD(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function YD(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function ZD(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function JD(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function jD(n,t){return`size ${n} must be non-negative, not ${t}`}function QD(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function tP(n,t){let e=Ce(n),r=Ce(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${n} outputShape= ${t}`}function eP(n,t){let e=Ce(n),r=Ce(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${r}. inputShape=${n} outputShape=${t}`}function nP(){return"segment ids must be >= 0"}function rP(){return"segment ids are not increasing"}function iP(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function oP(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}var Od={};Io(Od,{collectGatherOpShapeInfo:()=>cP,computeOutShape:()=>aP,segOpComputeOptimalWindowSize:()=>sP});function sP(n,t){let e=!1,r;for(n<=Qh?(r=n,e=!0):r=us(n,Math.floor(Math.sqrt(n)));!e;)r>t||r===n?e=!0:r=us(n,r+1);return r}function aP(n,t,e){let r=[],i=n.length;for(let o=0;o<i;o++)o!==t?r.push(n[o]):r.push(e);return r}function cP(n,t,e,r){let i=t.shape.length,o=n.shape.length;if(r!==0&&(r<-i||r>i))throw new Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>o)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${o}).`);if(e<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${e}).`);for(let h=0;h<r;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);let s=n.shape[e],a=[],c=1,l=1,u=1;for(let h=0;h<r;++h)a.push(n.shape[h]),c*=n.shape[h];for(let h=r;h<e;h++)a.push(n.shape[h]),l*=n.shape[h];for(let h=r;h<i;h++)a.push(t.shape[h]);for(let h=e+1;h<o;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:s,outputShape:a}}function lP(n){try{return n.map(t=>Os(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function uP(n){return n.map(t=>Us(t))}var Ar={};Io(Ar,{nonMaxSuppressionV3Impl:()=>r_,nonMaxSuppressionV4Impl:()=>i_,nonMaxSuppressionV5Impl:()=>o_,whereImpl:()=>jy});a_();function ot(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}var fP=Ar.whereImpl,Ic=class n extends Xi{nextDataId(){return n.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Fa(this,id())}write(t,e,r){this.firstUse&&(this.firstUse=!1,Wt().get("IS_NODE")&&B.warn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let i={id:this.nextDataId()};return this.data.set(i,{values:t,dtype:r,refCount:1}),i}makeTensorInfo(t,e,r){let i;if(e==="string"&&r!=null&&r.length>0&&T.isString(r[0])){let o=r.map(s=>T.encodeString(s));i=this.write(o,t,e)}else i=this.write(r,t,e);return{dataId:i,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){let e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){let e=this.data.get(t);e.refCount--}}move(t,e,r,i,o){this.data.set(t,{values:e,dtype:i,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){let{dtype:e,complexTensorInfos:r}=this.data.get(t);if(e==="complex64"){let i=this.readSync(r.real.dataId),o=this.readSync(r.imag.dataId);return B.mergeRealAndImagArrays(i,o)}return T.convertBackendValuesAndArrayBuffer(this.data.get(t).values,e)}bufferSync(t){let e=this.readSync(t.dataId);if(t.dtype==="string")try{let r=e.map(i=>T.decodeString(i));return Xt(t.shape,t.dtype,r)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return Xt(t.shape,t.dtype,e)}makeOutput(t,e,r){return id().makeTensorFromTensorInfo(this.makeTensorInfo(e,r,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;let{complexTensorInfos:r}=this.data.get(t);r!=null&&(this.disposeData(r.real.dataId,!0),this.disposeData(r.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){let e=T.now();return t(),{kernelMs:T.now()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){ot([t],"where");let e=this.readSync(t.dataId);return fP(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};Ic.nextDataId=0;function pP(n){let t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}var dP=n=>{let{x:t}=n.inputs,e=n.backend;ot(t,"abs");let r=new Float32Array(T.sizeFromShape(t.shape)),i=e.data.get(t.dataId).values;return r=pP(i),e.makeOutput(r,t.shape,t.dtype)},w_={kernelName:"Abs",backendName:"cpu",kernelFunc:dP};function re(n){return(t,e,r,i,o)=>{let s=B.assertAndGetBroadcastShape(t,e),a=s.length,c=T.computeStrides(s),l=T.sizeFromShape(s),u=T.getTypedArrayFromDType(o,l),h=t.length,f=e.length,p=T.computeStrides(t),g=T.computeStrides(e),x=B.getBroadcastDims(t,s),m=B.getBroadcastDims(e,s);if(x.length+m.length===0)for(let d=0;d<u.length;++d)u[d]=n(r[d%r.length],i[d%i.length]);else for(let d=0;d<u.length;++d){let v=T.indexToLoc(d,a,c),_=v.slice(-h);x.forEach(E=>_[E]=0);let y=T.locToIndex(_,h,p),S=v.slice(-f);m.forEach(E=>S[E]=0);let b=T.locToIndex(S,f,g);u[d]=n(r[y],i[b])}return[u,s]}}function qe(n){let{inputs:t,backend:e}=n,{real:r,imag:i}=t,o=e.data.get(r.dataId).values,s=e.data.get(i.dataId).values,a=e.makeTensorInfo(r.shape,"complex64"),c=e.data.get(a.dataId);return c.complexTensorInfos={real:e.makeTensorInfo(r.shape,"float32",o),imag:e.makeTensorInfo(i.shape,"float32",s)},a}var T_={kernelName:Uu,backendName:"cpu",kernelFunc:qe};function Js(n,t,e="float32"){if(e==="complex64"){let i=Js(n,t,"float32"),o=Js(n,t,"float32");return qe({inputs:{real:i,imag:o},backend:n})}let r=T.makeZerosTypedArray(T.sizeFromShape(t),e);return n.makeTensorInfo(t,e,r)}function nn(n){let{inputs:t,backend:e}=n,{x:r}=t;return e.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var E_={kernelName:gi,backendName:"cpu",kernelFunc:nn};function tr(n){let{inputs:t,backend:e}=n,{input:r}=t,i=e.data.get(r.dataId).complexTensorInfos.real,o=e.data.get(i.dataId).values;return e.makeTensorInfo(i.shape,i.dtype,o)}var A_={kernelName:ah,backendName:"cpu",kernelFunc:tr};function mP(n,t,e,r){if(r==="int32"){let i=Int32Array.from(n);return[t,"int32",i]}if(r==="bool"){let i=T.toTypedArray([0],e),[o,s]=re((a,c)=>a!==c?1:0)(t,[],n,i,"bool");return[s,"bool",o]}throw new Error(`Error in Cast: failed to cast ${e} to ${r}`)}function er(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{dtype:o}=r;if(o==="complex64"){if(i.dtype==="complex64")return nn({inputs:{x:i},backend:e});let u=Js(e,i.shape,i.dtype),h=er({inputs:{x:i},backend:e,attrs:{dtype:"float32"}}),f=qe({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),f}if(i.dtype==="complex64"){let u=tr({inputs:{input:i},backend:e}),h=er({inputs:{x:u},backend:e,attrs:{dtype:o}});return e.disposeIntermediateTensorInfo(u),h}if(!T.hasEncodingLoss(i.dtype,o)){let u=nn({inputs:{x:i},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:o}}let s=e.data.get(i.dataId).values,[a,c,l]=mP(s,i.shape,i.dtype,o);return e.makeTensorInfo(a,c,l)}var I_={kernelName:mi,backendName:"cpu",kernelFunc:er};function pe(n,t,e,r){return e==null?({inputs:i,backend:o})=>{let{a:s,b:a}=i,c=o;ot([s,a],n);let l=c.data.get(s.dataId).values,u=c.data.get(a.dataId).values,h=s.dtype==="string"?B.fromUint8ToStringArray(l):l,f=s.dtype==="string"?B.fromUint8ToStringArray(u):u,p=r||s.dtype,[g,x]=t(s.shape,a.shape,h,f,p);return c.makeTensorInfo(x,p,g)}:({inputs:i,backend:o})=>{let{a:s,b:a}=i,c=o;if(s.dtype==="complex64"||a.dtype==="complex64"){let l=er({inputs:{x:s},backend:c,attrs:{dtype:"complex64"}}),u=c.data.get(l.dataId),h=u.complexTensorInfos.real,f=u.complexTensorInfos.imag,p=c.data.get(h.dataId).values,g=c.data.get(f.dataId).values,x=er({inputs:{x:a},backend:c,attrs:{dtype:"complex64"}}),m=c.data.get(x.dataId),d=m.complexTensorInfos.real,v=m.complexTensorInfos.imag,_=c.data.get(d.dataId).values,y=c.data.get(v.dataId).values,[S,b,E]=e(s.shape,a.shape,p,g,_,y),R=c.makeTensorInfo(E,"float32",S),w=c.makeTensorInfo(E,"float32",b),M=qe({inputs:{real:R,imag:w},backend:c});return c.disposeIntermediateTensorInfo(l),c.disposeIntermediateTensorInfo(x),c.disposeIntermediateTensorInfo(R),c.disposeIntermediateTensorInfo(w),M}else{let l=c.data.get(s.dataId).values,u=c.data.get(a.dataId).values,h=r||s.dtype,[f,p]=t(s.shape,a.shape,l,u,h);return c.makeTensorInfo(p,h,f)}}}function js(n){return(t,e,r,i,o,s)=>{let a=B.assertAndGetBroadcastShape(t,e),c=T.sizeFromShape(a),l=a.length,u=T.computeStrides(a),h=T.getTypedArrayFromDType("float32",c),f=T.getTypedArrayFromDType("float32",c),p=B.getBroadcastDims(t,a),g=B.getBroadcastDims(e,a),x=B.mergeRealAndImagArrays(r,i),m=B.mergeRealAndImagArrays(o,s),d=t.length,v=T.computeStrides(t),_=e.length,y=T.computeStrides(e);if(p.length+g.length===0)for(let S=0;S<h.length;S++){let b=S%x.length,E=S%m.length,R=n(x[b*2],x[b*2+1],m[E*2],m[E*2+1]);h[S]=R.real,f[S]=R.imag}else for(let S=0;S<h.length;S++){let b=T.indexToLoc(S,l,u),E=b.slice(-d);p.forEach(P=>E[P]=0);let R=T.locToIndex(E,d,v),w=b.slice(-_);g.forEach(P=>w[P]=0);let M=T.locToIndex(w,_,y),C=n(x[R*2],x[R*2+1],m[M*2],m[M*2+1]);h[S]=C.real,f[S]=C.imag}return[h,f,a]}}var gP=re(((n,t)=>n+t)),xP=js(((n,t,e,r)=>({real:n+e,imag:t+r}))),Ir=pe("Add",gP,xP),C_={kernelName:"Add",backendName:"cpu",kernelFunc:Ir};function tf(n,t,e,r,i){let o=T.sizeFromShape(r),s=T.makeZerosTypedArray(i,e);for(let a=0;a<n.length;a++){let c=n[a];if(c<0)throw new Error("Input x must be non-negative!");c>=i||(o>0?s[c]+=t[a]:s[c]+=1)}return s}function R_(n,t,e,r=!1){let i=n.shape[0],o=n.shape[1],s=Xt([i,e],t.dtype);for(let a=0;a<i;a++)for(let c=0;c<o;c++){let l=n.get(a,c);if(l<0)throw new Error("Input x must be non-negative!");l>=e||(r?s.set(1,a,l):t.size>0?s.set(s.get(a,l)+t.get(a,c),a,l):s.set(s.get(a,l)+1,a,l))}return s}var yP=re(((n,t)=>n&t)),_P=pe(kp,yP),N_={kernelName:kp,backendName:"cpu",kernelFunc:_P};function Ze(n){return(t,e,r)=>{let i=T.getArrayFromDType(e,t.length);for(let o=0;o<t.length;++o)i[o]=n(t[o],r);return i}}function zt(n,t,e){let r=Ze(t);return vn(n,r,e)}function vn(n,t,e){return({inputs:r,attrs:i,backend:o})=>{let{x:s}=r;ot(s,n);let a=o,c=a.data.get(s.dataId).values,l;if(s.dtype==="string"){if(!Array.isArray(c))throw new Error("String tensor's value was not an instance of Array");l=B.fromUint8ToStringArray(c)}else l=c;let u=e||s.dtype,h=t(l,u,i);return a.makeTensorInfo(s.shape,u,h)}}var vP=Ze(n=>Math.ceil(n)),SP=vn(qa,vP),D_={kernelName:qa,backendName:"cpu",kernelFunc:SP};function P_(n,t,e,r){let i=T.getArrayFromDType(e,T.sizeFromShape(t));if(r&&e!=="string"){let o=0;n.forEach(s=>{let a=T.sizeFromShape(s.shape);i.set(s.vals,o),o+=a})}else{let o=0;n.forEach(s=>{let a=e==="string"?B.fromUint8ToStringArray(s.vals):s.vals,c=0;for(let l=0;l<s.shape[0];++l){let u=l*t[1]+o;for(let h=0;h<s.shape[1];++h)i[u+h]=a[c++]}o+=s.shape[1]})}return i}var bP=re((n,t)=>n===t?1:0),Bd=pe(Za,bP,null,"bool"),F_={kernelName:Za,backendName:"cpu",kernelFunc:Bd};var MP=Ze(n=>Math.exp(n)),zd=vn("Exp",MP,"float32"),k_={kernelName:"Exp",backendName:"cpu",kernelFunc:zd};var wP=Ze(n=>Math.expm1(n)),TP=vn(Ja,wP),L_={kernelName:Ja,backendName:"cpu",kernelFunc:TP};var EP=Ze(n=>Math.floor(n)),AP=vn(eo,EP),U_={kernelName:eo,backendName:"cpu",kernelFunc:AP};var IP=re((n,t)=>Math.floor(n/t)),CP=pe(no,IP,null,"int32"),O_={kernelName:no,backendName:"cpu",kernelFunc:CP};function B_(n,t,e,r,i,o,s,a,c){let l=Xt([r,o],e);for(let u=0;u<r;u++){let h=[],f=0;for(let p=0;p<i;p++){let g=n[u*i+p];f+=g*s[p],h.push(g)}if(f<0||f>=c/o)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<o;p++)l.values[u*o+p]=t.get(...t.indexToLoc(f*o+p))}return l}function z_(n,t,e){let r=Xt(e,n.dtype);for(let i=0;i<r.size;++i){let s=r.indexToLoc(i).slice(),a=s[0],c=s[2],l=t.locToIndex([a,c]);s[2]=t.values[l];let u=n.locToIndex(s);0<=u&&u<n.values.length&&(r.values[i]=n.values[u])}return r}var RP=re((n,t)=>n>t?1:0),NP=pe(ja,RP,null,"bool"),G_={kernelName:ja,backendName:"cpu",kernelFunc:NP};var DP=re((n,t)=>n>=t?1:0),PP=pe(ro,DP,null,"bool"),V_={kernelName:ro,backendName:"cpu",kernelFunc:PP};var FP=re((n,t)=>n<t?1:0),kP=pe(nc,FP,null,"bool"),H_={kernelName:nc,backendName:"cpu",kernelFunc:kP};var LP=re((n,t)=>n<=t?1:0),UP=pe(rc,LP,null,"bool"),W_={kernelName:rc,backendName:"cpu",kernelFunc:UP};function $_(n,t,e){let r=(t-n)/(e-1),i=T.makeZerosTypedArray(e,"float32");i[0]=n;for(let o=1;o<i.length;o++)i[o]=i[o-1]+r;return i}var OP=Ze(n=>Math.log(n)),BP=vn("Log",OP),q_={kernelName:"Log",backendName:"cpu",kernelFunc:BP};function X_(n,t,e,r){let i=T.getTypedArrayFromDType(r,T.sizeFromShape(e));for(let o=0;o<i.length;++o){let s=o*t,a=n[s];for(let c=0;c<t;++c){let l=n[s+c];(Number.isNaN(l)||l>a)&&(a=l)}i[o]=a}return i}var zP=re(((n,t)=>Math.max(n,t))),GP=pe(io,zP),K_={kernelName:io,backendName:"cpu",kernelFunc:GP};var VP=re(((n,t)=>Math.min(n,t))),HP=pe(ac,VP),Y_={kernelName:ac,backendName:"cpu",kernelFunc:HP};var Gd=re(((n,t)=>n*t)),WP=js(((n,t,e,r)=>({real:n*e-t*r,imag:n*r+t*e}))),To=pe(oo,Gd,WP),Z_={kernelName:oo,backendName:"cpu",kernelFunc:To};function $P(n,t,e){let r=T.createScalarValue(-1,e);return Gd([],t,r,n,e)}function qP(n){let{inputs:t,backend:e}=n,{x:r}=t;ot(r,"neg");let i=e.data.get(r.dataId).values,[o,s]=$P(i,r.shape,r.dtype);return e.makeTensorInfo(s,r.dtype,o)}var J_={kernelName:"Neg",backendName:"cpu",kernelFunc:qP};var XP=re(((n,t)=>n!==t?1:0)),KP=pe(Up,XP,null,"bool"),j_={kernelName:Up,backendName:"cpu",kernelFunc:KP};function ef(n,t,e,r,i){let o=t.length,s=T.sizeFromShape(t),a=T.computeStrides(t),c=T.computeStrides(i),l=T.getTypedArrayFromDType(e,T.sizeFromShape(i));for(let u=0;u<s;++u){let h=T.indexToLoc(u,o,a),f=new Array(h.length);for(let g=0;g<f.length;g++)f[g]=h[r[g]];let p=T.locToIndex(f,o,c);l[p]=n[u]}return l}function Pe(n){let{inputs:t,attrs:e,backend:r}=n,{x:i}=t,{perm:o}=e;ot(i,"transpose");let s=i.shape.length,a=new Array(s);for(let h=0;h<a.length;h++)a[h]=i.shape[o[h]];let c=r.data.get(i.dataId).values,l=ef(c,i.shape,i.dtype,o,a);return{dataId:r.write(l,a,i.dtype),shape:a,dtype:i.dtype}}var Q_={kernelName:yi,backendName:"cpu",kernelFunc:Pe};function YP(n,t,e,r){let[i,o]=B.computeOutAndReduceShapes(n,r),s=Bn(t,"int32"),a=T.makeZerosTypedArray(T.sizeFromShape(i),s),c=T.sizeFromShape(o);for(let l=0;l<a.length;++l){let u=l*c,h=1;for(let f=0;f<c;++f)h*=e[u+f];a[l]=h}return{outVals:a,outShape:i,outDtype:s}}function ZP(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,keepDims:s}=r;ot(i,"prod");let a=i.shape.length,c=T.parseAxisParam(o,i.shape),l=B.getAxesPermutation(c,a),u=c,h=i,f=[];l!=null&&(h=Pe({inputs:{x:i},backend:e,attrs:{perm:l}}),f.push(h),u=B.getInnerMostAxes(u.length,a));let p=e.data.get(h.dataId).values,{outVals:g,outShape:x,outDtype:m}=YP(h.shape,h.dtype,p,u),d=x;return s&&(d=B.expandShapeToKeepDim(x,c)),f.forEach(v=>e.disposeIntermediateTensorInfo(v)),e.makeTensorInfo(d,m,g)}var tv={kernelName:sh,backendName:"cpu",kernelFunc:ZP};function JP(n,t,e){n.forEach((r,i)=>{if(r<0||r>=e){let o=T.indexToLoc(i,t.length,T.computeStrides(t)).join(",");throw new Error(`indices[${o}] = ${r} is not in [0, ${e})`)}})}function jP(n,t){for(let e=0;e<n.length;++e){let r=n[e],i=e===n.length-1?t:n[e+1].length;if(r.length===0)throw new Error("Ragged splits may not be empty");if(r[0]<0)throw new Error("Ragged splits must be non-negative");if(r[r.length-1]>i)throw new Error("Ragged splits must not point past values");for(let o=1;o<r.length;++o)if(r[o-1]>r[o])throw new Error("Ragged splits must be sorted in ascending order")}}function QP(n,t,e,r){let i=[],o=0,s=t.length-1+e.length,a=new Array(s).fill(null).map(()=>[0]);jP(e,r);let c=1;for(let l=0;l<t.length-1;++l){c*=t[l];let u=t[l+1];for(let h=1;h<c+1;++h)a[l].push(h*u)}for(let l=0;l<n.length;++l){let u=n[l],h=n[l]+1;for(let f=0;f<e.length;++f){let p=e[f],g=f+t.length-1;if(g>=0){let x=a[g],m=x[x.length-1]-p[u];for(let d=u;d<h;++d)a[g].push(p[d+1]+m)}u=p[u],h=p[h]}h!==u&&(i.push([u,h]),o+=h-u)}return{outSplits:a,valueSlices:i,numValues:o}}function tF(n){let t=[];for(let e=0;e<n.length;++e){let r=n[e].length,i=T.getArrayFromDType("int32",r);t.push(i),n[e].forEach((o,s)=>i[s]=o)}return t}function ev(n,t){let e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let r=t;r<n.length;r++)e[t-1]*=n[r];return e}function eF(n,t,e,r,i,o){let s=ev(t,2)[1],a=ev(o,2)[1],c=0;for(let l of e)for(let u=l[0];u<l[1];++u){for(let h=0;h<r;++h)i[c*a+h]=n[u*s+h];++c}}function nF(n,t,e,r,i){let o=t.slice();o[0]=i;let s=T.getArrayFromDType(e,T.sizeFromShape(o)),a=n.length,c=a===0?0:a/t[0];return eF(n,t,r,c,s,o),[s,o]}function nv(n,t,e,r,i,o,s,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");let c=t[0][0]-1;if(JP(o,s,c),r.length===0)throw new Error("params.rank must be nonzero");let l=r[0],{outSplits:u,valueSlices:h,numValues:f}=QP(o,s,n,l),p=tF(u),g=nF(e,r,i,h,f);return[p,g[0],g[1]]}var rv=2147483647;function iv(n,t,e,r,i,o,s){if(t.length>1)throw new Error("starts must be a scalar or vector");if(i.length>1)throw new Error("limits must be a scalar or vector");if(s.length>1)throw new Error("deltas must be a scalar or vector");let a=t.length===0,c=i.length===0,l=s.length===0,u=[];a||u.push(t[0]),c||u.push(i[0]),l||u.push(s[0]);for(let m=1;m<u.length;++m)if(u[m]!==u[m-1])throw new Error("starts, limits, and deltas must have the same shape");let h=u.length===0?1:u[0],f=T.getArrayFromDType("int32",h+1);f[0]=0;for(let m=0;m<h;++m){let d=a?n[0]:n[m],v=c?r[0]:r[m],_=l?o[0]:o[m];if(_===0)throw new Error("Requires delta != 0");let y;if(_>0&&v<d||_<0&&v>d)y=0;else if(y=Math.ceil(Math.abs((v-d)/_)),y>rv)throw new Error(`Requires ((limit - start) / delta) <= ${rv}`);f[m+1]=f[m]+y}let p=f[h],g=T.getArrayFromDType(e,p),x=0;for(let m=0;m<h;++m){let d=f[m+1]-f[m],v=a?n[0]:n[m],_=l?o[0]:o[m];for(let y=0;y<d;++y)g[x++]=v,v+=_}return[f,g]}var nr=B.RowPartitionType,Vd=class n{constructor(t,e,r,i,o,s,a,c,l,u){this.shape=t,this.shapeShape=e,this.values=r,this.valuesShape=i,this.valuesDType=o,this.defaultValue=s,this.defaultValueShape=a,this.rowPartitionValues=c,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=B.getRowPartitionTypesHelper(u),this.raggedRank=B.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===nr.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===nr.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case nr.VALUE_ROWIDS:return n.getMaxWidthValueRowID(e);case nr.ROW_SPLITS:return n.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${nr[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let e=t.length;if(e===0||e===1)return 0;let r=0;for(let i=0;i<e-1;++i){let o=t[i+1]-t[i];o>r&&(r=o)}return r}static getMaxWidthValueRowID(t){let e=t.length;if(e===0)return 0;let r=0,i=t[0],o=0;for(let s=1;s<e;++s){let a=t[s];a!==i&&(i=a,o=Math.max(s-r,o),r=s)}return Math.max(e-r,o)}tensorShapeFromTensor(t,e,r=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return sv(t,r)}calculateOutputSize(t){let e=this.valuesShape,r=this.defaultValueShape;B.validateDefaultValueShape(r,e);let i=this.tensorShapeFromTensor(this.shape,this.shapeShape),s=B.combineRaggedTensorToTensorShapes(this.raggedRank,i,e);s[0]<0&&(s[0]=t);for(let a=1;a<=this.raggedRank;++a)s[a]<0&&(s[a]=this.getMaxWidth(a));return s}calculateFirstParentOutputIndex(t,e,r){let i=Math.min(t,r),o=[],s=0;for(let a=0;a<i;++a,s+=e)o.push(s);for(let a=i;a<t;++a)o.push(-1);return T.assert(o.length===t,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(t,e,r,i){let o=t.length,s=[];for(let a=0;a<o-1;++a){let c=t[a+1]-t[a],l=Math.min(i,c),u=e[a];u===-1&&(l=0);for(let h=0;h<l;++h)s.push(u),u+=r;for(let h=0;h<c-l;++h)s.push(-1)}if(o>0&&s.length!==t[o-1])throw new Error("Invalid row split size.");return s}calculateOutputIndexValueRowID(t,e,r,i){let o=t.length,s=[];if(o===0)return[];let a=0,c=t[0];if(c>=e.length)throw new Error(`Got currentValueRowId=${c}, which is not less than ${e.length}`);let l=e[c];s.push(l);for(let u=1;u<o;++u){let h=t[u];if(h===c)l>=0&&(++a,a<i?l+=r:l=-1);else{if(a=0,c=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);l=e[h]}s.push(l)}if(s.length!==t.length)throw new Error("Invalid row ids.");return s}calculateOutputIndex(t,e,r,i){let o=this.getRowPartitionTensor(t),s=this.getRowPartitionTypeByDimension(t);switch(s){case nr.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,e,r,i);case nr.ROW_SPLITS:if(o.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(o,e,r,i);default:throw new Error(`Unsupported partition type: ${nr[s]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let e=this.rowPartitionTypes[0];switch(e){case nr.FIRST_DIM_SIZE:return t[0];case nr.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case nr.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${nr[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),r=this.calculateOutputSize(e),i=new Array(this.raggedRank+1);i[i.length-1]=1;for(let c=i.length-2;c>=0;--c)i[c]=i[c+1]*r[c+1];let o=sv(r,!1),s=T.getArrayFromDType(this.valuesDType,T.sizeFromShape(o));if(i[0]*r[0]>0){let c=this.calculateFirstParentOutputIndex(e,i[0],r[0]);for(let l=1;l<=this.raggedRank;++l)c=this.calculateOutputIndex(l-1,c,i[l],r[l]);this.setOutput(this.raggedRank,c,s,o)}return[o,s]}setOutput(t,e,r,i){if(r.length===0)return;let o=this.values,s=r,a=i.slice();a=a.slice(t+1);let c=T.sizeFromShape(a),l=e.length,u=this.defaultValue;if(u.length!==c&&u.length!==1){let g=this.defaultValueShape;be(()=>{let x=yt(u,g);u=vo(x,a).dataSync()})}let h=0,f=0,p=0;for(let g=0;g<=l;++g){let x=g<l?e[g]:-1;if(x===p){++p;continue}if(f<p){let m=o.subarray(h*c),d=s.subarray(f*c),v=(p-f)*c;ov(d,m,v)}if(g>=l){let m=r.length;x=Math.floor(m/c)}if(x>p)if(this.defaultValue.length===1)s.subarray(p*c,x*c).fill(this.defaultValue[0]),p=x;else for(;x>p;){let m=s.slice(p*c);ov(m,u,c),++p}x<0?(h=g+1,f=p):(h=g,f=p,p=f+1)}}};function ov(n,t,e){for(let r=0;r<e;r++)n[r]=t[r]}function sv(n,t){let e=[];for(let r of n){if(r<0){if(!t)throw new Error(`Dimension ${r} must be >= 0`);if(r<-1)throw new Error(`Dimension ${r} must be >= -1`);r=-1}e.push(r)}return e}function av(n,t,e,r,i,o,s,a,c,l){return new Vd(n,t,e,r,i,o,s,a,c,l).compute()}function cv(n,t,e,r){let i=n===t,o=n<t&&e<0,s=t<n&&e>1;if(i||o||s)return T.makeZerosTypedArray(0,r);let a=Math.abs(Math.ceil((t-n)/e)),c=T.makeZerosTypedArray(a,r);t<n&&e===1&&(e=-1),c[0]=n;for(let l=1;l<c.length;l++)c[l]=c[l-1]+e;return c}var rF=Ze(n=>1/Math.sqrt(n)),iF=vn(co,rF),lv={kernelName:co,backendName:"cpu",kernelFunc:iF};function Yr(n,t,e,r,i,o,s,a,c,l){let u=[r/i,i],h=n.values,f=t.values;if(r===0)return Xt(e,t.dtype);let p=c instanceof ve?c:Xt(u,t.dtype);typeof c=="string"||typeof c=="number"?p.values.fill(c):typeof c=="boolean"&&p.values.fill(+c);for(let g=0;g<o;g++){let x=[],m=0;for(let d=0;d<s;d++){let v=h[g*s+d];x.push(v),m+=v*a[d]}if(m<0||m>=r/i)throw new Error(`Invalid indices: ${x} does not index into ${e}`);for(let d=0;d<i;d++)l?p.values[m*i+d]+=f[g*i+d]:p.values[m*i+d]=t.rank===0?f[0]:f[g*i+d]}return p}var lZ=Ze(n=>1/(1+Math.exp(-n))),Hd=zt(uo,n=>1/(1+Math.exp(-n))),uv={kernelName:uo,backendName:"cpu",kernelFunc:Hd};function oF(n,t,e,r,i){let o=Qn.isSliceContinous(r,t,e),s=T.sizeFromShape(e),a=T.computeStrides(r);if(o){let h=Qn.computeFlatOffset(t,a);return i==="string"?n.slice(h,h+s):n.subarray(h,h+s)}let c=i==="string"?B.fromUint8ToStringArray(n):n,l=Xt(r,i,c),u=Xt(e,i);for(let h=0;h<u.size;++h){let f=u.indexToLoc(h),p=f.map((g,x)=>g+t[x]);u.set(l.get(...p),...f)}return i==="string"?B.fromStringArrayToUint8(u.values):u.values}function rr(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{begin:o,size:s}=r;ot(i,"slice");let[a,c]=Qn.parseSliceParams(i,o,s);Qn.assertParamsValid(i,a,c);let l=e.data.get(i.dataId).values,u=oF(l,a,c,i.shape,i.dtype);return e.makeTensorInfo(c,i.dtype,u)}var hv={kernelName:Is,backendName:"cpu",kernelFunc:rr};function fv(n,t,e,r,i,o,s){let a=t[0],c=o[0],l=new Array(c),u=new Array(a),h=t[1];if(c===0){if(a!==0)throw new Error(B.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let m=T.getArrayFromDType(e,0),d=T.getArrayFromDType(i,0);return[m,[0,h],d,l,u]}let f=!0,p=0,g=new Array(c).fill(0);for(let m=0;m<a;++m){let d=n[m*h];if(d<0)throw new Error(B.getSparseFillEmptyRowsNegativeIndexErrorMessage(m,d));if(d>=c)throw new Error(B.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(m,d,c));++g[d],f=f&&d>=p,p=d}let x=!0;for(let m=0;m<c;++m){let d=g[m]===0;l[m]=d,x=x&&!d,g[m]=Math.max(g[m],1),m>0&&(g[m]+=g[m-1])}if(x&&f){let m=n,d=r;for(let v=0;v<a;++v)u[v]=v;return[m,[a,h],d,l,u]}else{let m=g[c-1],d=T.getArrayFromDType(e,m*h),v=T.getArrayFromDType(i,m),_=new Array(c).fill(0);for(let y=0;y<a;++y){let S=n[y*h],b=_[S],E=(S===0?0:g[S-1])+b;_[S]++;for(let R=0;R<h;++R)d[E*h+R]=n[y*h+R];v[E]=r[y],u[y]=E}for(let y=0;y<c;++y)if(_[y]===0){let b=y===0?0:g[y-1];d[b*h+0]=y;for(let E=1;E<h;++E)d[b*h+E]=0;v[b]=s}return[d,[m,h],v,l,u]}}function pv(n,t,e,r,i){let o=T.sizeFromShape(r),s=t[0],a=i.length,c=[],l=1,u=-1;for(let m=0;m<a;++m){let d=i[m];if(d===-1){if(u!==-1)throw new Error(B.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(u,m));u=m,c.push(1)}else{if(d<0)throw new Error(B.getSparseReshapeNegativeOutputDimErrorMessage(m,d));l*=d,c.push(d)}}if(u!==-1){if(l<=0)throw new Error(B.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let m=Math.trunc(o/l);if(l*m!==o)throw new Error(B.getSparseReshapeInputOutputMultipleErrorMessage(r,c));c[u]=m}if(T.sizeFromShape(c)!==o)throw new Error(B.getSparseReshapeInputOutputMismatchErrorMessage(r,c));let f=r.length,p=[];if(f>0){p[f-1]=1;for(let m=f-2;m>=0;--m)p[m]=p[m+1]*r[m+1]}let g=[];if(a>0){g[a-1]=1;for(let m=a-2;m>=0;--m)g[m]=g[m+1]*c[m+1]}let x=T.getArrayFromDType(e,s*a);for(let m=0;m<s;++m){let d=0;for(let v=0;v<f;++v)d+=n[m*f+v]*p[v];for(let v=0;v<a;++v)x[m*a+v]=Math.trunc(d/g[v]),d%=g[v]}return[x,[s,a],c]}function nf(n,t,e,r,i,o=!1,s=0){let a=r.length,c=[t[0],n.length/t[0]],l=c[1],h=a>0?i[a-1]+1:0;if(h<0)throw new Error(B.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=t.slice();f[0]=h;let p=f.reduce((_,y)=>_*y,1),g=T.getArrayFromDType(e,p);if(a===0)return h>0&&g.fill(s),[g,f];if(h<=0)throw new Error(B.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let x=0,m=1,d=0,v=i[x];for(;;){let _=0;if(m<a){if(_=i[m],v===_){++m;continue}if(v>=_)throw new Error(B.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(v<0||v>=h)throw new Error(B.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(v,h));v>d&&g.fill(s,d*l,v*l);for(let y=x;y<m;++y){let S=r[y];if(S<0||S>=c[0])throw new Error(B.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(y,r[y],c[0]));for(let b=0;b<l;b++)g[v*l+b]+=n[S*l+b]}if(o)for(let y=0;y<l;y++)g[v*l+y]/=m-x;if(x=m,++m,d=v+1,v=_,m>a)break}return d<h&&g.fill(s,d*l,h*l),[g,f]}var MZ=Ze(n=>Math.sqrt(n)),sF=zt(ho,n=>Math.sqrt(n)),dv={kernelName:ho,backendName:"cpu",kernelFunc:sF};var aF=re(((n,t)=>{let e=n-t;return e*e})),cF=pe(pc,aF),mv={kernelName:pc,backendName:"cpu",kernelFunc:cF};var lF=Ze((n,t)=>{let{pattern:e,replaceGlobal:r,rewrite:i}=t;return n.replace(new RegExp(e,r?"g":""),i)}),uF=vn(Op,lF),gv={kernelName:Op,backendName:"cpu",kernelFunc:uF};function xv(n,t,e,r){let i=Xt(n,t.dtype);for(let o=0;o<i.size;o++){let s=i.indexToLoc(o),a=new Array(s.length);for(let c=0;c<a.length;c++)a[c]=s[c]*e[c]+r[c];i.set(t.get(...a),...s)}return i}var Wd=class{constructor(t,e,r,i,o,s){this.separator=T.encodeString(t),this.nGramWidths=e,this.leftPad=T.encodeString(r),this.rightPad=T.encodeString(i),this.padWidth=o,this.preserveShort=s}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){let r=this.getPadWidth(e);return Math.max(0,t+2*r-e+1)}createNGrams(t,e,r,i,o,s){for(let a=0;a<o;++a){let c=this.getPadWidth(s),l=Math.max(0,c-a),u=Math.max(0,c-(o-(a+1))),h=s-(l+u),f=e+(l>0?0:a-c),p=0;p+=l*this.leftPad.length;for(let v=0;v<h;++v)p+=t[f+v].length;p+=u*this.rightPad.length;let g=l+u+h-1;p+=g*this.separator.length,r[i+a]=new Uint8Array(p);let x=r[i+a],m=0,d=v=>v.forEach(_=>x[m++]=_);for(let v=0;v<l;++v)d(this.leftPad),d(this.separator);for(let v=0;v<h-1;++v)d(t[f+v]),d(this.separator);if(h>0){d(t[f+h-1]);for(let v=0;v<u;++v)d(this.separator),d(this.rightPad)}else{for(let v=0;v<u-1;++v)d(this.rightPad),d(this.separator);d(this.rightPad)}}}compute(t,e){let r=t.length,i=e.length;if(i>0){let c=e[0];if(c!==0)throw new Error(`First split value must be 0, got ${c}`);for(let l=1;l<i;++l){let u=e[l]>=c;if(u=u&&e[l]<=r,!u)throw new Error(`Invalid split value ${e[l]}, must be in [${c}, ${r}]`);c=e[l]}if(c!==r)throw new Error(`Last split value must be data size. Expected ${r}, got ${c}`)}let o=i-1,s=T.getArrayFromDType("int32",i);if(r===0||i===0){let c=new Array(r);for(let l=0;l<=o;++l)s[l]=0;return[c,s]}s[0]=0;for(let c=1;c<=o;++c){let l=e[c]-e[c-1],u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(l,h)}),this.preserveShort&&l>0&&u===0&&(u=1),s[c]=s[c-1]+u}let a=new Array(s[o]);for(let c=0;c<o;++c){let l=e[c],u=s[c];if(this.nGramWidths.forEach(h=>{let f=e[c+1]-e[c],p=this.getNumNGrams(f,h);this.createNGrams(t,l,a,u,p,h),u+=p}),this.preserveShort&&u===s[c]){let h=e[c+1]-e[c];if(h===0)continue;let f=h+2*this.padWidth;this.createNGrams(t,l,a,u,1,f)}}return[a,s]}};function yv(n,t,e,r,i,o,s,a){return new Wd(e,r,i,o,s,a).compute(n,t)}function hF(n,t,e,r){if(!n.length)return;if(t.length===0){for(let o=0;o<n.length;++o)r.push(n.subarray(o,o+1));return}if(t.length===1){let o=t[0],s=n.indexOf(o);for(;s!==-1;){let a=n.subarray(0,s);(!e||a.length!==0)&&r.push(a),n=n.subarray(s+1),s=n.indexOf(o)}(!e||n.length!==0)&&r.push(n);return}let i=0;for(let o=0;o<n.length+1;o++)if(o===n.length||t.indexOf(n[o])!==-1){let s=n.subarray(i,o);(!e||s.length!==0)&&r.push(s),i=o+1}}function _v(n,t,e){let r=n.length,i=[],o=0,s=0,a=new Array(r);for(let f=0;f<r;++f){let p=i.length;hF(n[f],t,e,i);let g=i.length-p;a[f]=g,o+=g,s=Math.max(s,g)}let c=T.getArrayFromDType("int32",o*2),l=new Array(o),u=[r,s],h=0;for(let f=0;f<r;++f)for(let p=0;p<a[f];++p)c[h*2]=f,c[h*2+1]=p,l[h]=i[h],++h;return[c,l,u]}function vv(n,t){let e=T.getArrayFromDType("int32",n.length);for(let r=0;r<n.length;++r)e[r]=T.fingerPrint64(n[r]).modulo(t).getLowBitsUnsigned();return e}var fF=re(((n,t)=>n-t)),pF=js(((n,t,e,r)=>({real:n-e,imag:t-r}))),Cc=pe("Sub",fF,pF),Sv={kernelName:"Sub",backendName:"cpu",kernelFunc:Cc};function bv(n,t){let e=new Array(n.rank);for(let i=0;i<e.length;i++)e[i]=n.shape[i]*t[i];let r=Xt(e,n.dtype);for(let i=0;i<r.values.length;++i){let o=r.indexToLoc(i),s=new Array(n.rank);for(let c=0;c<s.length;c++)s[c]=o[c]%n.shape[c];let a=n.locToIndex(s);r.values[i]=n.values[a]}return r}var Rc=(n,t)=>{let e=t.value-n.value;return e===0?n.index-t.index:e};function Mv(n,t,e=0,r=n.length-1){for(;r>e;){if(r-e>600){let a=r-e+1,c=t-e+1,l=Math.log(a),u=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*u*(a-u)/a)*Math.sign(c-a/2),f=Math.max(e,Math.floor(t-c*u/a+h)),p=Math.min(r,Math.floor(t+(a-c)*u/a+h));Mv(n,t,f,p)}let i=n[t],o=e,s=r;for(T.swap(n,e,t),Rc(n[r],i)>0&&T.swap(n,e,r);o<s;){for(T.swap(n,o,s),o++,s--;Rc(n[o],i)<0;)o=o+1;for(;Rc(n[s],i)>0;)s=s-1}Rc(n[e],i)===0?T.swap(n,e,s):(s=s+1,T.swap(n,s,r)),s<=t&&(e=s+1),t<=s&&(r=s-1)}}function wv(n,t,e,r,i){let o=t[t.length-1],[s,a]=[n.length/o,o],c=T.getTypedArrayFromDType(e,s*r),l=T.getTypedArrayFromDType("int32",s*r);for(let h=0;h<s;h++){let f=h*a,p=n.subarray(f,f+a),g=new Array(p.length);p.forEach((v,_)=>g[_]={value:v,index:_}),r<g.length&&(Mv(g,r),g=g.slice(0,r)),i&&g.sort(Rc);let x=h*r,m=c.subarray(x,x+r),d=l.subarray(x,x+r);for(let v=0;v<r;v++)m[v]=g[v].value,d[v]=g[v].index}let u=t.slice();return u[u.length-1]=r,[Xt(u,e,c),Xt(u,"int32",l)]}function Tv(n,t,e,r){let i=T.parseAxisParam(t,e)[0],o=[1,e[0],1];for(let g=0;g<i;g++)o[0]*=e[g];o[1]=e[i];for(let g=i+1;g<e.length;g++)o[2]*=e[g];let s=new Map,a=new Int32Array(e[i]),c=new ve(o,r,n),l=[],u=o[0]===1&&o[2]===1;for(let g=0;g<e[i];g++){let x;if(u)x=n[g].toString();else{let d=[];for(let v=0;v<o[0];v++)for(let _=0;_<o[2];_++)d.push(c.get(v,g,_));x=d.join(",")}let m=s.get(x);if(m!=null)a[g]=m;else{let d=s.size;s.set(x,d),a[g]=d,l.push(g)}}let h=o.slice();h[1]=s.size;let f=new ve(h,r);l.forEach((g,x)=>{for(let m=0;m<o[0];m++)for(let d=0;d<o[2];d++)f.set(c.get(m,g,d),m,x,d)});let p=e.slice();return p[i]=h[1],{outputValues:f.values,outputShape:p,indices:a}}F0("cpu",()=>new Ic,1);var $d=zt("Elu",n=>n>=0?n:Math.exp(n)-1),Ev={kernelName:"Elu",backendName:"cpu",kernelFunc:$d};function qd(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{alpha:o}=r;ot([i],"leakyRelu");let s=T.sizeFromShape(i.shape),a=e.data.get(i.dataId).values,c=T.getTypedArrayFromDType("float32",s);for(let l=0;l<a.length;l++)c[l]=a[l]<0?o*a[l]:a[l];return e.makeTensorInfo(i.shape,"float32",c)}var Av={kernelName:Ss,backendName:"cpu",kernelFunc:qd};var dF=re((n,t)=>n<0?t*n:n);function Xd(n){let{inputs:t,backend:e}=n,{x:r,alpha:i}=t;ot([r,i],"prelu");let o=e.data.get(r.dataId).values,s=e.data.get(i.dataId).values,[a,c]=dF(r.shape,i.shape,o,s,"float32");return e.makeTensorInfo(c,"float32",a)}var Iv={kernelName:ws,backendName:"cpu",kernelFunc:Xd};var Kd=zt(so,n=>Math.max(0,n)),Cv={kernelName:so,backendName:"cpu",kernelFunc:Kd};var Yd=zt(ao,n=>Math.min(Math.max(0,n),6)),Rv={kernelName:ao,backendName:"cpu",kernelFunc:Yd};function Eo(n,t,e,r,i){if(e==="linear")return nn({inputs:{x:t},backend:n});if(e==="relu")return Kd({inputs:{x:t},backend:n});if(e==="elu")return $d({inputs:{x:t},backend:n});if(e==="relu6")return Yd({inputs:{x:t},backend:n});if(e==="prelu")return Xd({inputs:{x:t,alpha:r},backend:n});if(e==="leakyrelu")return qd({inputs:{x:t},backend:n,attrs:{alpha:i}});if(e==="sigmoid")return Hd({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function ie(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{shape:o}=r,s=T.sizeFromShape(i.shape),a=T.inferFromImplicitShape(o,s),c=T.sizeFromShape(a);T.assert(s===c,()=>`The new shape (${a}) has ${c} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`),e.incRef(i.dataId);let l=e.data.get(i.dataId);if(l.complexTensorInfos!=null){let u=l.complexTensorInfos.real,h=l.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:i.dataId,shape:a,dtype:i.dtype}}var Nv={kernelName:Ts,backendName:"cpu",kernelFunc:ie};function Zd(n){let{inputs:t,backend:e,attrs:r}=n,{a:i,b:o}=t,{transposeA:s,transposeB:a}=r;ot([i,o],"matMul");let c=i.shape.length,l=o.shape.length,u=s?i.shape[c-2]:i.shape[c-1],h=a?o.shape[l-1]:o.shape[l-2],f=s?i.shape[c-1]:i.shape[c-2],p=a?o.shape[l-2]:o.shape[l-1],g=i.shape.slice(0,-2),x=o.shape.slice(0,-2),m=T.sizeFromShape(g),d=T.sizeFromShape(x),_=Kr.assertAndGetBroadcastShape(i.shape.slice(0,-2),o.shape.slice(0,-2)).concat([f,p]);T.assert(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${i.shape} and ${o.shape} and transposeA=${s} and transposeB=${a} must match.`);let y=s?[m,u,f]:[m,f,u],S=a?[d,p,h]:[d,h,p],b=ie({inputs:{x:i},backend:e,attrs:{shape:y}}),E=ie({inputs:{x:o},backend:e,attrs:{shape:S}}),R=s?b.shape[1]:b.shape[2],w=s?b.shape[2]:b.shape[1],M=a?E.shape[1]:E.shape[2],C=Math.max(m,d),P=e.data.get(b.dataId).values,F=e.data.get(E.dataId).values,L=T.computeStrides(b.shape),U=T.computeStrides(E.shape),[O,V,k]=s?[L[0],1,L[1]]:[L[0],L[1],1],[W,j,et]=a?[1,U[1],U[0]]:[U[1],1,U[0]],at=w*M,ct=Xt([C,w,M],b.dtype),pt=ct.values,ut=e.blockSize;for(let H=0;H<C;H++){let J=H%m,lt=H%d;for(let dt=0;dt<w;dt+=ut){let mt=Math.min(dt+ut,w);for(let Et=0;Et<M;Et+=ut){let ee=Math.min(Et+ut,M);for(let D=0;D<R;D+=ut){let te=Math.min(D+ut,R);for(let Nt=dt;Nt<mt;Nt++)for(let Tt=Et;Tt<ee;Tt++){let bt=0;for(let Jt=D;Jt<te;Jt++){let Dt=P[J*O+Nt*V+Jt*k],Gt=F[Jt*W+Tt*j+lt*et];bt+=Dt*Gt}pt[H*at+(Nt*M+Tt)]+=bt}}}}}return e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(E),e.makeTensorInfo(_,ct.dtype,ct.values)}var Dv={kernelName:fs,backendName:"cpu",kernelFunc:Zd};function mF(n){let{inputs:t,backend:e,attrs:r}=n,{a:i,b:o,bias:s,preluActivationWeights:a}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:h}=r,f,p,g,x=[];f=Zd({inputs:{a:i,b:o},attrs:{transposeA:c,transposeB:l},backend:e}),s&&(p=Ir({inputs:{a:f,b:s},backend:e}),x.push(f),f=p),u&&(g=Eo(e,f,u,a,h),x.push(f),f=g);for(let d of x)e.disposeIntermediateTensorInfo(d);return f}var Pv={kernelName:jx,backendName:"cpu",kernelFunc:mF};var gF=zt(Ba,n=>Math.acos(n)),Fv={kernelName:Ba,backendName:"cpu",kernelFunc:gF};var xF=zt(za,n=>Math.acosh(n)),kv={kernelName:za,backendName:"cpu",kernelFunc:xF};function yF(n){let{inputs:t,backend:e}=n,r=t;ot(t,"addN");let i=r.map(a=>e.data.get(a.dataId).values),o=Xt(r[0].shape,r[0].dtype),s=o.values;for(let a=0;a<r.length;a++){let c=i[a];for(let l=0;l<s.length;l++)s[l]+=c[l]}return e.makeTensorInfo(o.shape,o.dtype,o.values)}var Lv={kernelName:Ru,backendName:"cpu",kernelFunc:yF};function vF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,keepDims:s}=r;ot(i,"all");let a=T.parseAxisParam(o,i.shape),c=a,l=B.getAxesPermutation(c,i.shape.length),u=i;l!=null&&(u=Pe({inputs:{x:i},backend:e,attrs:{perm:l}}),c=B.getInnerMostAxes(c.length,i.shape.length)),B.assertAxesAreInnerMostDims("all",c,u.shape.length);let[h,f]=B.computeOutAndReduceShapes(u.shape,c),p=T.sizeFromShape(f),g=T.makeZerosTypedArray(T.sizeFromShape(h),u.dtype),x=e.data.get(u.dataId).values;for(let d=0;d<g.length;++d){let v=d*p,_=x[v];for(let y=0;y<p;++y){let S=x[v+y];_=_&&S}g[d]=_}l!=null&&e.disposeIntermediateTensorInfo(u);let m=e.makeTensorInfo(h,u.dtype,g);if(s){let d=B.expandShapeToKeepDim(h,a),v=ie({inputs:{x:m},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),v}return m}var Uv={kernelName:"All",backendName:"cpu",kernelFunc:vF};function bF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,keepDims:s}=r;ot(i,"any");let a=T.parseAxisParam(o,i.shape),c=a,l=B.getAxesPermutation(c,i.shape.length),u=i;l!=null&&(u=Pe({inputs:{x:i},backend:e,attrs:{perm:l}}),c=B.getInnerMostAxes(c.length,i.shape.length)),B.assertAxesAreInnerMostDims("any",c,u.shape.length);let[h,f]=B.computeOutAndReduceShapes(u.shape,c),p=T.sizeFromShape(f),g=T.makeZerosTypedArray(T.sizeFromShape(h),u.dtype),x=e.data.get(u.dataId).values;for(let d=0;d<g.length;++d){let v=d*p,_=x[v];for(let y=0;y<p;++y){let S=x[v+y];_=_||S}g[d]=_}l!=null&&e.disposeIntermediateTensorInfo(u);let m=e.makeTensorInfo(h,u.dtype,g);if(s){let d=B.expandShapeToKeepDim(h,a),v=ie({inputs:{x:m},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),v}return m}var Ov={kernelName:"Any",backendName:"cpu",kernelFunc:bF};function MF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o}=r;ot(i,"argMax");let s=T.parseAxisParam(o,i.shape),a=B.getAxesPermutation(s,i.shape.length),c=i,l=[];a!=null&&(c=Pe({inputs:{x:i},backend:e,attrs:{perm:a}}),l.push(c),s=B.getInnerMostAxes(s.length,c.shape.length)),s=[s[0]],B.assertAxesAreInnerMostDims("argMax",s,c.shape.length);let[u,h]=B.computeOutAndReduceShapes(c.shape,s),f=T.sizeFromShape(u),p=T.makeZerosTypedArray(f,"int32"),g=T.sizeFromShape(h),x=e.data.get(c.dataId).values;for(let m=0;m<p.length;++m){let d=m*g,v=x[d],_=0;for(let y=0;y<g;++y){let S=x[d+y];S>v&&(v=S,_=y)}p[m]=_}return l.forEach(m=>e.disposeIntermediateTensorInfo(m)),e.makeTensorInfo(u,"int32",p)}var Bv={kernelName:Nu,backendName:"cpu",kernelFunc:MF};function wF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o}=r;ot(i,"argMin");let s=T.parseAxisParam(o,i.shape),a=B.getAxesPermutation(s,i.shape.length),c=i,l=[];a!=null&&(c=Pe({inputs:{x:i},backend:e,attrs:{perm:a}}),l.push(c),s=B.getInnerMostAxes(s.length,c.shape.length)),s=[s[0]],B.assertAxesAreInnerMostDims("argMin",s,c.shape.length);let[u,h]=B.computeOutAndReduceShapes(c.shape,s),f=T.sizeFromShape(u),p=T.makeZerosTypedArray(f,"int32"),g=T.sizeFromShape(h),x=e.data.get(c.dataId).values;for(let m=0;m<p.length;++m){let d=m*g,v=x[d],_=0;for(let y=0;y<g;++y){let S=x[d+y];S<v&&(v=S,_=y)}p[m]=_}return l.forEach(m=>e.disposeIntermediateTensorInfo(m)),e.makeTensorInfo(u,"int32",p)}var zv={kernelName:Du,backendName:"cpu",kernelFunc:wF};var TF=zt(Ga,n=>Math.asin(n)),Gv={kernelName:Ga,backendName:"cpu",kernelFunc:TF};var EF=zt(Va,n=>Math.asinh(n)),Vv={kernelName:Va,backendName:"cpu",kernelFunc:EF};var AF=zt(Ha,n=>Math.atan(n)),Hv={kernelName:Ha,backendName:"cpu",kernelFunc:AF};var IF=re((n,t)=>Math.atan2(n,t)),CF=pe($a,IF),Wv={kernelName:$a,backendName:"cpu",kernelFunc:CF};var RF=zt(Wa,n=>Math.atanh(n)),$v={kernelName:Wa,backendName:"cpu",kernelFunc:RF};function Qs(n,t,e,r,i,o){let s=i.strideHeight,a=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,u=i.effectiveFilterHeight,h=i.effectiveFilterWidth,f=i.padInfo.top,p=i.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=Xt(i.outShape,e),m=x.values,d=i.outShape[1]*i.outShape[2]*i.outShape[3],v=i.outShape[2]*i.outShape[3],_=i.outShape[3];for(let y=0;y<i.batchSize;++y){let S=y*d,b=y*r[0];for(let E=0;E<i.inChannels;++E)for(let R=0;R<i.outHeight;++R){let w=R*s-f,M=Math.max(0,w),C=Math.min(i.inHeight,u+w),P=S+R*v;for(let F=0;F<i.outWidth;++F){let L=F*a-p,U=Math.max(0,L),O=Math.min(i.inWidth,h+L),V=g,k=0,W=0;for(let et=M;et<C;et+=c){let at=b+et*r[1];for(let ct=U;ct<O;ct+=l){let pt=at+ct*r[2],ut=n[pt+E];o==="max"&&ut>V?V=ut:o==="avg"&&(k+=ut,W++)}if(isNaN(V))break}let j=P+F*_+E;m[j]=o==="avg"?k/W:V}}}return x}function rf(n,t,e,r,i=!1,o=!1){let s=Xt(r.outShape,"int32"),a=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,u=r.dilationWidth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.top,g=r.padInfo.left,x=Xt(t,e,n);for(let m=0;m<r.batchSize;++m)for(let d=0;d<r.inChannels;++d)for(let v=0;v<r.outHeight;++v){let _=v*a-p,y=_;for(;y<0;)y+=l;let S=Math.min(r.inHeight,h+_);for(let b=0;b<r.outWidth;++b){let E=b*c-g,R=E;for(;R<0;)R+=u;let w=Math.min(r.inWidth,f+E),M=Number.NEGATIVE_INFINITY,C=-1;for(let P=y;P<S;P+=l){let F=P-_;for(let L=R;L<w;L+=u){let U=L-E,O=x.get(m,P,L,d);O>M&&(M=O,i?C=o?((m*r.inHeight+P)*r.inWidth+L)*r.inChannels+d:(P*r.inWidth+L)*r.inChannels+d:C=F*f+U)}}s.set(C,m,v,b,d)}}return s}function of(n,t,e,r,i,o){let s=i.strideDepth,a=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,u=i.dilationHeight,h=i.dilationWidth,f=i.effectiveFilterDepth,p=i.effectiveFilterHeight,g=i.effectiveFilterWidth,x=i.padInfo.front,m=i.padInfo.top,d=i.padInfo.left,v=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,_=Xt(i.outShape,e),y=_.values,S=i.outShape[1]*i.outShape[2]*i.outShape[3]*i.outShape[4],b=i.outShape[2]*i.outShape[3]*i.outShape[4],E=i.outShape[3]*i.outShape[4],R=i.outShape[4];for(let w=0;w<i.batchSize;++w){let M=w*S,C=w*r[0];for(let P=0;P<i.inChannels;++P)for(let F=0;F<i.outDepth;++F){let L=F*s-x,U=L;for(;U<0;)U+=l;let O=Math.min(i.inDepth,f+L),V=M+F*b;for(let k=0;k<i.outHeight;++k){let W=k*a-m,j=W;for(;j<0;)j+=u;let et=Math.min(i.inHeight,p+W),at=V+k*E;for(let ct=0;ct<i.outWidth;++ct){let pt=ct*c-d,ut=pt;for(;ut<0;)ut+=h;let H=Math.min(i.inWidth,g+pt),J=at+ct*R,lt=v,dt=0,mt=0;for(let ee=U;ee<O;ee+=l){let D=C+ee*r[1];for(let te=j;te<et;te+=u){let Nt=D+te*r[2];for(let Tt=ut;Tt<H;Tt+=h){let bt=Nt+Tt*r[3],Jt=n[bt+P];if(o==="max"&&Jt>lt?lt=Jt:o==="avg"&&(dt+=Jt,mt++),isNaN(lt))break}if(isNaN(lt))break}if(isNaN(lt))break}let Et=J+P;y[Et]=o==="avg"?dt/Math.max(mt,1):lt}}}}return _}function qv(n,t){let e=Xt(t.outShape,"int32"),r=t.strideDepth,i=t.strideHeight,o=t.strideWidth,s=t.dilationDepth,a=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,g=t.padInfo.left;for(let x=0;x<t.batchSize;++x)for(let m=0;m<t.inChannels;++m)for(let d=0;d<t.outDepth;++d){let v=d*r-f,_=v;for(;_<0;)_+=s;let y=Math.min(t.inDepth,l+v);for(let S=0;S<t.outHeight;++S){let b=S*i-p,E=b;for(;E<0;)E+=a;let R=Math.min(t.inHeight,u+b);for(let w=0;w<t.outWidth;++w){let M=w*o-g,C=M;for(;C<0;)C+=c;let P=Math.min(t.inWidth,h+M),F=Number.NEGATIVE_INFINITY,L=-1;for(let U=_;U<y;U+=s){let O=U-v;for(let V=E;V<R;V+=a){let k=V-b;for(let W=C;W<P;W+=c){let j=W-M,et=n.get(x,U,V,W,m);et>=F&&(F=et,L=O*u*h+k*u+j)}}}e.set(L,x,d,S,w,m)}}}return e}function NF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t;ot(i,"avgPool");let{filterSize:o,strides:s,pad:a,dimRoundingMode:c}=r,l=1;T.assert(B.eitherStridesOrDilationsAreOne(s,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`);let u=B.computePool2DInfo(i.shape,o,s,l,a,c),h;if(u.filterWidth===1&&u.filterHeight===1&&T.arraysEqual(u.inShape,u.outShape))h=nn({inputs:{x:i},backend:e});else{let f=e.data.get(i.dataId).values,p=T.computeStrides(i.shape),g=Qs(f,i.shape,i.dtype,p,u,"avg");h=e.makeTensorInfo(u.outShape,i.dtype,g.values)}return h}var Xv={kernelName:Pu,backendName:"cpu",kernelFunc:NF};function DF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{filterSize:o,strides:s,pad:a,dimRoundingMode:c,dataFormat:l}=r;ot(i,"avgPool3d");let u=B.computePool3DInfo(i.shape,o,s,1,a,c,l),h=e.data.get(i.dataId).values,f=of(h,i.shape,i.dtype,T.computeStrides(i.shape),u,"avg");return e.makeTensorInfo(f.shape,"float32",f.values)}var Kv={kernelName:ku,backendName:"cpu",kernelFunc:DF};function PF(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,input:o}=t,{filterSize:s,strides:a,pad:c,dimRoundingMode:l}=r;ot([i,o],"avgPool3DGrad");let u=B.computePool3DInfo(o.shape,s,a,1,c,l),h=u.strideDepth,f=u.strideHeight,p=u.strideWidth,g=u.filterDepth,x=u.filterHeight,m=u.filterWidth,d=u.dilationDepth,v=u.dilationHeight,_=u.dilationWidth,y=u.effectiveFilterDepth,S=u.effectiveFilterHeight,b=u.effectiveFilterWidth,E=y-1-u.padInfo.front,R=b-1-u.padInfo.left,w=S-1-u.padInfo.top,M=Xt(o.shape,"float32"),C=1/(g*x*m),P=e.bufferSync(i);for(let F=0;F<u.batchSize;++F)for(let L=0;L<u.inChannels;++L)for(let U=0;U<u.inDepth;++U)for(let O=0;O<u.inHeight;++O)for(let V=0;V<u.inWidth;++V){let k=U-E,W=O-w,j=V-R,et=0;for(let at=0;at<y;at+=d){let ct=(k+at)/h;if(!(ct<0||ct>=u.outDepth||Math.floor(ct)!==ct))for(let pt=0;pt<S;pt+=v){let ut=(W+pt)/f;if(!(ut<0||ut>=u.outHeight||Math.floor(ut)!==ut))for(let H=0;H<b;H+=_){let J=(j+H)/p;if(J<0||J>=u.outWidth||Math.floor(J)!==J)continue;let lt=P.get(F,ct,ut,J,L);et+=lt}}}M.set(et*C,F,U,O,V,L)}return e.makeTensorInfo(M.shape,M.dtype,M.values)}var Yv={kernelName:Lu,backendName:"cpu",kernelFunc:PF};function FF(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,input:o}=t,s=o;ot([i,o],"avgPoolGrad");let{filterSize:a,strides:c,pad:l}=r,u=B.computePool2DInfo(s.shape,a,c,1,l),h=u.strideHeight,f=u.strideWidth,p=u.filterHeight,g=u.filterWidth,x=u.dilationHeight,m=u.dilationWidth,d=u.effectiveFilterHeight,v=u.effectiveFilterWidth,_=v-1-u.padInfo.left,y=d-1-u.padInfo.top,S=Xt(s.shape,"float32"),b=1/(p*g),E=e.data.get(i.dataId).values,R=Xt(i.shape,"float32",E);for(let w=0;w<u.batchSize;++w)for(let M=0;M<u.inChannels;++M)for(let C=0;C<u.inHeight;++C)for(let P=0;P<u.inWidth;++P){let F=C-y,L=P-_,U=0;for(let O=0;O<d;O+=x){let V=(F+O)/h;if(!(V<0||V>=u.outHeight||Math.floor(V)!==V))for(let k=0;k<v;k+=m){let W=(L+k)/f;if(W<0||W>=u.outWidth||Math.floor(W)!==W)continue;let j=R.get(w,V,W,M);U+=j}}S.set(U*b,w,C,P,M)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}var Zv={kernelName:Fu,backendName:"cpu",kernelFunc:FF};function kF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,scale:o,offset:s,mean:a,variance:c}=t;T.assert(a.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T.assert(s==null||a.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T.assert(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),ot([i,a,c,o,s],"batchNorm");let{varianceEpsilon:l}=r;l==null&&(l=.001);let u=e.data.get(i.dataId).values,h=e.data.get(a.dataId).values,f=e.data.get(c.dataId).values,p=o?e.data.get(o.dataId).values:new Float32Array([1]),g=s?e.data.get(s.dataId).values:new Float32Array([0]),x=new Float32Array(u.length),m=g.length,d=p.length,v=f.length,_=h.length,y=0,S=0,b=0,E=0;for(let R=0;R<u.length;++R)x[R]=g[y++]+(u[R]-h[S++])*p[b++]/Math.sqrt(f[E++]+l),y>=m&&(y=0),S>=_&&(S=0),b>=d&&(b=0),E>=v&&(E=0);return e.makeTensorInfo(i.shape,i.dtype,x)}var Jv={kernelName:Yu,backendName:"cpu",kernelFunc:kF};function LF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{blockShape:o,crops:s}=r;ot([i],"batchToSpaceND");let a=o.reduce((d,v)=>d*v),c=B.getReshaped(i.shape,o,a),l=B.getPermuted(c.length,o.length),u=B.getReshapedPermuted(i.shape,o,a),h=B.getSliceBeginCoords(s,o.length),f=B.getSliceSize(u,s,o.length),p=ie({inputs:{x:i},backend:e,attrs:{shape:c}}),g=Pe({inputs:{x:p},backend:e,attrs:{perm:l}}),x=ie({inputs:{x:g},backend:e,attrs:{shape:u}}),m=rr({inputs:{x},backend:e,attrs:{begin:h,size:f}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),m}var jv={kernelName:ps,backendName:"cpu",kernelFunc:LF};function UF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,weights:o}=t,{size:s}=r,a=e.data.get(i.dataId).values,c=e.data.get(o.dataId).values,l=tf(a,c,o.dtype,o.shape,s);return e.makeTensorInfo([s],o.dtype,l)}var Qv={kernelName:px,backendName:"cpu",kernelFunc:UF};function OF(n){let{inputs:t,backend:e}=n,{s0:r,s1:i}=t,o=e.data.get(r.dataId).values,s=e.data.get(i.dataId).values,a=B.assertAndGetBroadcastShape(Array.from(o),Array.from(s));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var tS={kernelName:mx,backendName:"cpu",kernelFunc:OF};var BF=zt(Xa,(n,t)=>{let e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),eS={kernelName:Xa,backendName:"cpu",kernelFunc:BF};var zF=n=>{let{x:t}=n.inputs,e=n.backend,r=new Float32Array(T.sizeFromShape(t.shape)),i=e.data.get(t.dataId),o=i.complexTensorInfos.real,s=i.complexTensorInfos.imag,a=e.data.get(o.dataId).values,c=e.data.get(s.dataId).values;for(let l=0;l<a.length;l++){let u=a[l],h=c[l];r[l]=Math.hypot(u,h)}return e.makeOutput(r,t.shape,"float32")},nS={kernelName:ds,backendName:"cpu",kernelFunc:zF};function Cr(n){let{inputs:t,backend:e}=n,{input:r}=t,i=e.data.get(r.dataId).complexTensorInfos.imag,o=e.data.get(i.dataId).values;return e.makeTensorInfo(i.shape,i.dtype,o)}var rS={kernelName:Zu,backendName:"cpu",kernelFunc:Cr};function wi(n){let{inputs:t,backend:e,attrs:r}=n,{axis:i}=r,o=T.parseAxisParam(i,t[0].shape)[0],s=t.map(x=>x.shape);B.assertParamsConsistent(s,o);let a=B.computeOutShape(t.map(x=>x.shape),o);if(T.sizeFromShape(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);let c=t.filter(x=>T.sizeFromShape(x.shape)>0);if(c.length===1)return nn({inputs:{x:c[0]},backend:e});if(c[0].dtype==="complex64"){let x=c.map(y=>tr({inputs:{input:y},backend:e})),m=c.map(y=>Cr({inputs:{input:y},backend:e})),d=wi({inputs:x,backend:e,attrs:{axis:o}}),v=wi({inputs:m,backend:e,attrs:{axis:o}}),_=qe({inputs:{real:d,imag:v},backend:e});return x.forEach(y=>e.disposeIntermediateTensorInfo(y)),m.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(v),_}let l=c.map(x=>{let d=[-1,T.sizeFromShape(x.shape.slice(o))];return ie({inputs:{x},backend:e,attrs:{shape:d}})}),u=l.map(x=>({vals:e.data.get(x.dataId).values,shape:x.shape}));a=B.computeOutShape(l.map(x=>x.shape),1);let h=l[0].shape[0]===1,f=P_(u,a,t[0].dtype,h),p=B.computeOutShape(c.map(x=>x.shape),o),g=e.makeTensorInfo(p,t[0].dtype,f);return l.forEach(x=>e.disposeIntermediateTensorInfo(x)),g}var iS={kernelName:ms,backendName:"cpu",kernelFunc:wi};function Jd(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,filter:o}=t,{strides:s,pad:a,dataFormat:c,dilations:l,dimRoundingMode:u}=r;ot([i,o],"conv2d");let h=B.convertConv2DDataFormat(c),f=B.computeConv2DInfo(i.shape,o.shape,s,l,a,u,!1,h),p=f.filterHeight,g=f.filterWidth,x=f.dilationHeight,m=f.dilationWidth,d=f.padInfo.left,v=f.padInfo.top,_=f.dataFormat==="channelsLast",y=new ve(f.outShape,i.dtype),S=T.computeStrides(i.shape),b=T.computeStrides(o.shape),E=S[0],R=_?S[1]:S[2],w=_?S[2]:1,M=_?1:S[1],C=y.strides[0],P=_?y.strides[1]:y.strides[2],F=_?y.strides[2]:1,L=_?1:y.strides[1],U=e.data.get(i.dataId).values,O=e.data.get(o.dataId).values,V=y.values;for(let k=0;k<f.batchSize;++k){let W=k*E,j=k*C;for(let et=0;et<f.outHeight;++et){let at=j+et*P,ct=et*f.strideHeight-v;for(let pt=0;pt<p;++pt){let ut=ct+pt*x;if(ut<0||ut>=f.inHeight)continue;let H=pt*b[0],J=W+ut*R;for(let lt=0;lt<f.outWidth;++lt){let dt=at+lt*F,mt=lt*f.strideWidth-d;for(let Et=0;Et<g;++Et){let ee=mt+Et*m;if(ee<0||ee>=f.inWidth)continue;let D=H+Et*b[1],te=J+ee*w,Nt=D;for(let Tt=0;Tt<f.inChannels;++Tt){let bt=U[te+Tt*M];for(let Jt=0;Jt<f.outChannels;++Jt)V[dt+Jt*L]+=bt*O[Nt+Jt];Nt+=f.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,V)}var oS={kernelName:gs,backendName:"cpu",kernelFunc:Jd};function GF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,dy:o}=t,{strides:s,pad:a,dataFormat:c,dimRoundingMode:l,filterShape:u}=r;ot([i,o],"conv2dBackpropFilter");let h=B.convertConv2DDataFormat(c),f=B.computeConv2DInfo(i.shape,u,s,1,a,l,!1,h),{strideHeight:p,strideWidth:g,filterHeight:x,filterWidth:m}=f,d=f.dataFormat==="channelsLast",v=new ve(f.filterShape,"float32"),_=f.padInfo.left,y=f.padInfo.top,S=e.data.get(i.dataId).values,b=e.data.get(o.dataId).values,E=new ve(i.shape,i.dtype,S),R=new ve(o.shape,o.dtype,b);for(let w=0;w<x;++w){let M=Math.max(0,Math.ceil((y-w)/p)),C=Math.min(f.outHeight,(f.inHeight+y-w)/p);for(let P=0;P<m;++P){let F=Math.max(0,Math.ceil((_-P)/g)),L=Math.min(f.outWidth,(f.inWidth+_-P)/g);for(let U=0;U<f.inChannels;++U)for(let O=0;O<f.outChannels;++O){let V=0;for(let k=0;k<f.batchSize;++k)for(let W=M;W<C;++W){let j=w+W*p-y;for(let et=F;et<L;++et){let at=P+et*g-_;d?V+=E.get(k,j,at,U)*R.get(k,W,et,O):V+=E.get(k,U,j,at)*R.get(k,O,W,et)}}v.set(V,w,P,U,O)}}}return e.makeTensorInfo(v.shape,v.dtype,v.values)}var sS={kernelName:Ou,backendName:"cpu",kernelFunc:GF};function VF(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,filter:o}=t,{inputShape:s,strides:a,pad:c,dataFormat:l,dimRoundingMode:u}=r;ot([i,o],"conv2dBackpropInput");let h=T.computeStrides(o.shape),f=T.computeStrides(i.shape),p=B.convertConv2DDataFormat(l),g=B.computeConv2DInfo(s,o.shape,a,1,c,u,!1,p),x=new ve(g.inShape,"float32"),m=x.values,d=e.data.get(i.dataId).values,v=e.data.get(o.dataId).values,[_,y,S]=h,{batchSize:b,filterHeight:E,filterWidth:R,inChannels:w,inHeight:M,inWidth:C,outChannels:P,outHeight:F,outWidth:L,strideHeight:U,strideWidth:O}=g;p=g.dataFormat;let V=E-1-g.padInfo.top,k=R-1-g.padInfo.left,W=p==="channelsLast",j=x.strides[0],et=W?x.strides[1]:x.strides[2],at=W?x.strides[2]:1,ct=W?1:x.strides[1],pt=f[0],ut=W?f[1]:f[2],H=W?f[2]:1,J=W?1:f[1];for(let lt=0;lt<b;++lt)for(let dt=0;dt<w;++dt)for(let mt=0;mt<M;++mt){let Et=mt-V,ee=Math.max(0,Math.ceil(Et/U)),D=Math.min(F,(E+Et)/U);for(let te=0;te<C;++te){let Nt=te-k,Tt=Math.max(0,Math.ceil(Nt/O)),bt=Math.min(L,(R+Nt)/O),Jt=0;for(let Gt=ee;Gt<D;++Gt){let Re=Gt*U-Et;for(let ge=Tt;ge<bt;++ge){let N=ge*O-Nt,A=pt*lt+ut*Gt+H*ge,X=_*(E-1-Re)+y*(R-1-N)+S*dt;for(let st=0;st<P;++st){let ft=d[A+J*st],it=v[X+st];Jt+=ft*it}}}let Dt=j*lt+et*mt+at*te+ct*dt;m[Dt]=Jt}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}var aS={kernelName:xs,backendName:"cpu",kernelFunc:VF};function HF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,filter:o}=t,{strides:s,pad:a,dilations:c}=r;ot([i,o],"conv3d");let l=B.computeConv3DInfo(i.shape,o.shape,s,c,a),{filterDepth:u,filterHeight:h,filterWidth:f,dilationDepth:p,dilationHeight:g,dilationWidth:x,padInfo:m}=l,d=m.front,v=m.left,_=m.top,y=new ve(l.outShape,i.dtype),S=e.data.get(i.dataId).values,b=e.data.get(o.dataId).values,E=y.values,R=T.computeStrides(i.shape),w=T.computeStrides(o.shape);for(let M=0;M<l.batchSize;++M){let C=M*R[0],P=M*y.strides[0];for(let F=0;F<l.outDepth;++F){let L=P+F*y.strides[1],U=F*l.strideDepth-d;for(let O=0;O<u;++O){let V=U+O*p;if(V<0||V>=l.inDepth)continue;let k=O*w[0],W=C+V*R[1];for(let j=0;j<l.outHeight;++j){let et=L+j*y.strides[2],at=j*l.strideHeight-_;for(let ct=0;ct<h;++ct){let pt=at+ct*g;if(pt<0||pt>=l.inHeight)continue;let ut=k+ct*w[1],H=W+pt*R[2];for(let J=0;J<l.outWidth;++J){let lt=et+J*l.outChannels,dt=J*l.strideWidth-v;for(let mt=0;mt<f;++mt){let Et=dt+mt*x;if(Et<0||Et>=l.inWidth)continue;let ee=ut+mt*w[2],D=H+Et*l.inChannels,te=ee;for(let Nt=0;Nt<l.inChannels;++Nt){let Tt=S[D+Nt];for(let bt=0;bt<l.outChannels;++bt)E[lt+bt]+=Tt*b[te+bt];te+=l.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}var cS={kernelName:Bu,backendName:"cpu",kernelFunc:HF};function WF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,dy:o}=t,{strides:s,pad:a,filterShape:c}=r;ot([i,o],"conv3dBackpropFilterV2");let l=T.computeStrides(i.shape),u=T.computeStrides(o.shape),h=B.computeConv3DInfo(i.shape,c,s,1,a),f=h.strideDepth,p=h.strideHeight,g=h.strideWidth,x=h.filterDepth,m=h.filterHeight,d=h.filterWidth,v=new ve(h.filterShape,"float32"),_=v.values,[y,S,b,E]=v.strides,R=e.data.get(o.dataId).values,[w,M,C,P]=u,F=e.data.get(i.dataId).values,[L,U,O,V]=l,k=h.padInfo.front,W=h.padInfo.left,j=h.padInfo.top;for(let et=0;et<x;++et){let at=Math.max(0,Math.ceil((k-et)/f)),ct=Math.min(h.outDepth,(h.inDepth+k-et)/f),pt=et*y;for(let ut=0;ut<m;++ut){let H=Math.max(0,Math.ceil((j-ut)/p)),J=Math.min(h.outHeight,(h.inHeight+j-ut)/p),lt=ut*S+pt;for(let dt=0;dt<d;++dt){let mt=Math.max(0,Math.ceil((W-dt)/g)),Et=Math.min(h.outWidth,(h.inWidth+W-dt)/g),ee=dt*b+lt;for(let D=0;D<h.inChannels;++D){let te=D*E+ee;for(let Nt=0;Nt<h.outChannels;++Nt){let Tt=0;for(let bt=0;bt<h.batchSize;++bt){let Jt=bt*L,Dt=bt*w;for(let Gt=at;Gt<ct;++Gt){let ge=(et+Gt*f-k)*U+Jt,N=Gt*M+Dt;for(let A=H;A<J;++A){let st=(ut+A*p-j)*O+ge,ft=A*C+N;for(let it=mt;it<Et;++it){let St=(dt+it*g-W)*V+st,Ut=it*P+ft;Tt+=F[St+D]*R[Ut+Nt]}}}}_[te+Nt]=Tt}}}}}return e.makeTensorInfo(v.shape,v.dtype,v.values)}var lS={kernelName:zu,backendName:"cpu",kernelFunc:WF};function $F(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,filter:o}=t,{pad:s,strides:a,inputShape:c}=r;ot([i],"conv3dBackpropInputV2");let l=T.computeStrides(i.shape),u=T.computeStrides(o.shape),h=B.computeConv3DInfo(c,o.shape,a,1,s),f=new ve(h.inShape,"float32"),p=f.values,[g,x,m,d]=f.strides,v=e.data.get(i.dataId).values,[_,y,S,b]=l,E=e.data.get(o.dataId).values,[R,w,M,C]=u,{batchSize:P,filterDepth:F,filterHeight:L,filterWidth:U,inChannels:O,inDepth:V,inHeight:k,inWidth:W,outChannels:j,outDepth:et,outHeight:at,outWidth:ct,strideDepth:pt,strideHeight:ut,strideWidth:H}=h,J=F-1-h.padInfo.front,lt=L-1-h.padInfo.top,dt=U-1-h.padInfo.left;for(let mt=0;mt<P;++mt)for(let Et=0;Et<O;++Et)for(let ee=0;ee<V;++ee){let D=ee-J,te=Math.max(0,Math.ceil(D/pt)),Nt=Math.min(et,(F+D)/pt);for(let Tt=0;Tt<k;++Tt){let bt=Tt-lt,Jt=Math.max(0,Math.ceil(bt/ut)),Dt=Math.min(at,(L+bt)/ut);for(let Gt=0;Gt<W;++Gt){let Re=Gt-dt,ge=Math.max(0,Math.ceil(Re/H)),N=Math.min(ct,(U+Re)/H),A=0;for(let X=te;X<Nt;++X){let st=X*pt-D;for(let ft=Jt;ft<Dt;++ft){let it=ft*ut-bt;for(let Lt=ge;Lt<N;++Lt){let St=Lt*H-Re,Ut=_*mt+y*X+S*ft+b*Lt,Vt=R*(F-1-st)+w*(L-1-it)+M*(U-1-St)+C*Et;for(let gt=0;gt<j;++gt){let It=v[Ut+gt],jt=E[Vt+gt];A+=It*jt}}}}p[g*mt+x*ee+m*Tt+d*Gt+Et]=A}}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}var uS={kernelName:Gu,backendName:"cpu",kernelFunc:$F};var qF=zt("Cos",n=>Math.cos(n)),hS={kernelName:"Cos",backendName:"cpu",kernelFunc:qF};var XF=zt(Qi,n=>Math.cosh(n)),fS={kernelName:Qi,backendName:"cpu",kernelFunc:XF};function KF(n){let{inputs:t,backend:e,attrs:r}=n,{image:i,boxes:o,boxInd:s}=t,{cropSize:a,method:c,extrapolationValue:l}=r,[u,h,f,p]=i.shape,g=o.shape[0],[x,m]=a,d=Xt([g,x,m,p],"float32"),v=e.data.get(o.dataId).values,_=e.data.get(s.dataId).values,y=e.data.get(i.dataId).values,S=T.computeStrides(i.shape),b=T.computeStrides(d.shape);for(let E=0;E<g;E++){let R=E*4,w=v[R],M=v[R+1],C=v[R+2],P=v[R+3],F=_[E];if(F>=u)continue;let L=x>1?(C-w)*(h-1)/(x-1):0,U=m>1?(P-M)*(f-1)/(m-1):0;for(let O=0;O<x;O++){let V=x>1?w*(h-1)+O*L:.5*(w+C)*(h-1);if(V<0||V>h-1){for(let k=0;k<m;k++)for(let W=0;W<p;W++){let j=W+k*b[2]+O*b[1]+E*b[0];d.values[j]=l}continue}if(c==="bilinear"){let k=Math.floor(V),W=Math.ceil(V),j=V-k;for(let et=0;et<m;et++){let at=m>1?M*(f-1)+et*U:.5*(M+P)*(f-1);if(at<0||at>f-1){for(let H=0;H<p;H++){let J=H+et*b[2]+O*b[1]+E*b[0];d.values[J]=l}continue}let ct=Math.floor(at),pt=Math.ceil(at),ut=at-ct;for(let H=0;H<p;H++){let J=H+ct*S[2]+k*S[1]+F*S[0],lt=y[J];J=H+pt*S[2]+k*S[1]+F*S[0];let dt=y[J];J=H+ct*S[2]+W*S[1]+F*S[0];let mt=y[J];J=H+pt*S[2]+W*S[1]+F*S[0];let Et=y[J],ee=lt+(dt-lt)*ut,D=mt+(Et-mt)*ut;J=H+et*b[2]+O*b[1]+E*b[0],d.values[J]=ee+(D-ee)*j}}}else for(let k=0;k<m;++k){let W=m>1?M*(f-1)+k*U:.5*(M+P)*(f-1);if(W<0||W>f-1){for(let at=0;at<p;at++){let ct=at+k*b[2]+O*b[1]+E*b[0];d.values[ct]=l}continue}let j=Math.round(W),et=Math.round(V);for(let at=0;at<p;at++){let ct=at+j*S[2]+et*S[1]+F*S[0],pt=at+k*b[2]+O*b[1]+E*b[0];d.values[pt]=y[ct]}}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}var pS={kernelName:gx,backendName:"cpu",kernelFunc:KF};function YF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,exclusive:s,reverse:a}=r;ot(i,"cumprod");let c=B.getAxesPermutation([o],i.shape.length),l=i;c!=null&&(l=Pe({inputs:{x:i},backend:e,attrs:{perm:c}}));let u=B.getInnerMostAxes(1,i.shape.length)[0];if(u!==l.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let h=Bn(l.dtype,"int32"),f=T.makeOnesTypedArray(T.sizeFromShape(l.shape),h),p=e.data.get(l.dataId).values,g=l.shape[l.shape.length-1],x=a?(d,v)=>d+g-v-1:(d,v)=>d+v;for(let d=0;d<p.length;d+=g)for(let v=0;v<g;v++){let _=x(d,v);if(v===0)f[_]=s?1:p[_];else{let y=x(d,v-1);f[_]=s?p[y]*f[y]:p[_]*f[y]}}let m=e.makeTensorInfo(l.shape,h,f);if(c!=null){let d=B.getUndoAxesPermutation(c),v=Pe({inputs:{x:m},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(l),v}return m}var dS={kernelName:Vu,backendName:"cpu",kernelFunc:YF};function ZF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,exclusive:s,reverse:a}=r;ot(i,"cumsum");let c=B.getAxesPermutation([o],i.shape.length),l=i;c!=null&&(l=Pe({inputs:{x:i},backend:e,attrs:{perm:c}}));let u=B.getInnerMostAxes(1,i.shape.length)[0];if(u!==l.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let h=Bn(l.dtype,"int32"),f=T.makeZerosTypedArray(T.sizeFromShape(l.shape),h),p=e.data.get(l.dataId).values,g=l.shape[l.shape.length-1],x=a?(d,v)=>d+g-v-1:(d,v)=>d+v;for(let d=0;d<p.length;d+=g)for(let v=0;v<g;v++){let _=x(d,v);if(v===0)f[_]=s?0:p[_];else{let y=x(d,v-1);f[_]=s?p[y]+f[y]:p[_]+f[y]}}let m=e.makeTensorInfo(l.shape,h,f);if(c!=null){let d=B.getUndoAxesPermutation(c),v=Pe({inputs:{x:m},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(l),v}return m}var mS={kernelName:ys,backendName:"cpu",kernelFunc:ZF};function JF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,weights:o}=t,{size:s,binaryOutput:a}=r;if(i.shape.length===1){let c=e.data.get(i.dataId).values,l=e.data.get(o.dataId).values,u=tf(c,l,o.dtype,o.shape,s);return e.makeTensorInfo([s],o.dtype,u)}else if(i.shape.length===2){let c=e.bufferSync(i),l=e.bufferSync(o),u=R_(c,l,s,a);return e.makeTensorInfo(u.shape,o.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var gS={kernelName:xx,backendName:"cpu",kernelFunc:JF};function jF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{blockSize:o,dataFormat:s}=r;T.assert(s==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${s}`);let a=i.shape[0],c=i.shape[1],l=i.shape[2],u=i.shape[3],h=c*o,f=l*o,p=u/(o*o),g=e.data.get(i.dataId).values,x=new Float32Array(a*h*f*p),m=0;for(let d=0;d<a;++d)for(let v=0;v<h;++v){let _=Math.floor(v/o),y=v%o;for(let S=0;S<f;++S){let b=Math.floor(S/o),E=S%o,R=(y*o+E)*p;for(let w=0;w<p;++w){let C=w+R+u*(b+l*(_+c*d));x[m++]=g[C]}}}return e.makeTensorInfo([a,h,f,p],i.dtype,x)}var xS={kernelName:yx,backendName:"cpu",kernelFunc:jF};function jd(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,filter:o}=t,{strides:s,pad:a,dilations:c,dimRoundingMode:l}=r;ot([i,o],"depthwiseConv2DNative");let u=T.computeStrides(i.shape),h=T.computeStrides(o.shape),f=c;f==null&&(f=[1,1]),T.assert(B.eitherStridesOrDilationsAreOne(s,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${s} and dilations '${f}'`);let p=B.computeConv2DInfo(i.shape,o.shape,s,f,a,l,!0),{filterHeight:g,filterWidth:x,dilationHeight:m,dilationWidth:d,padInfo:v}=p,_=v.left,y=v.top,S=p.outChannels/p.inChannels,b=new ve(p.outShape,i.dtype),E=e.data.get(i.dataId).values,R=e.data.get(o.dataId).values,w=b.values;for(let M=0;M<p.batchSize;++M){let C=M*u[0],P=M*b.strides[0];for(let F=0;F<p.outHeight;++F){let L=P+F*b.strides[1],U=F*p.strideHeight-y;for(let O=0;O<g;++O){let V=U+O*m;if(V<0||V>=p.inHeight)continue;let k=O*h[0],W=C+V*u[1];for(let j=0;j<p.outWidth;++j){let et=L+j*b.strides[2],at=j*p.strideWidth-_;for(let ct=0;ct<x;++ct){let pt=at+ct*d;if(pt<0||pt>=p.inWidth)continue;let ut=k+ct*h[1],H=W+pt*p.inChannels,J=et,lt=ut;for(let dt=0;dt<p.inChannels;++dt){let mt=E[H+dt];for(let Et=0;Et<S;++Et)w[J+Et]+=mt*R[lt+Et];J+=S,lt+=S}}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}var yS={kernelName:Hu,backendName:"cpu",kernelFunc:jd};function QF(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,dy:o}=t,{strides:s,dilations:a,pad:c,dimRoundingMode:l,filterShape:u}=r;ot([i,o],"depthwiseConv2dNativeBackpropFilter");let h=B.computeConv2DInfo(i.shape,u,s,a,c,l,!0),{strideHeight:f,strideWidth:p,filterHeight:g,filterWidth:x}=h,m=new ve(h.filterShape,"float32"),d=h.padInfo.left,v=h.padInfo.top,_=h.outChannels/h.inChannels,y=e.data.get(i.dataId).values,S=new ve(i.shape,i.dtype,y),b=e.data.get(o.dataId).values,E=new ve(o.shape,o.dtype,b);for(let R=0;R<g;++R){let w=Math.max(0,Math.ceil((v-R)/f)),M=Math.min(h.outHeight,(h.inHeight+v-R)/f);for(let C=0;C<x;++C){let P=Math.max(0,Math.ceil((d-C)/p)),F=Math.min(h.outWidth,(h.inWidth+d-C)/p);for(let L=0;L<h.outChannels;++L){let U=Math.trunc(L/_),O=L%_,V=0;for(let k=0;k<h.batchSize;++k)for(let W=w;W<M;++W){let j=R+W*f-v;for(let et=P;et<F;++et){let at=C+et*p-d;V+=S.get(k,j,at,U)*E.get(k,W,et,L)}}m.set(V,R,C,U,O)}}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}var _S={kernelName:Wu,backendName:"cpu",kernelFunc:QF};function tk(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,filter:o}=t,{strides:s,dilations:a,pad:c,dimRoundingMode:l,inputShape:u}=r;ot([i,o],"depthwiseConv2DNativeBackpropInput");let h=T.computeStrides(i.shape),f=T.computeStrides(o.shape),p=B.computeConv2DInfo(u,o.shape,s,a,c,l,!0),g=new ve(p.inShape,"float32"),x=g.values,[m,d,v]=g.strides,_=e.data.get(i.dataId).values,[y,S,b]=h,E=e.data.get(o.dataId).values,[R,w,M]=f,{batchSize:C,filterHeight:P,filterWidth:F,inChannels:L,inHeight:U,inWidth:O,outChannels:V,outHeight:k,outWidth:W,strideHeight:j,strideWidth:et}=p,at=P-1-p.padInfo.top,ct=F-1-p.padInfo.left,pt=V/L;for(let ut=0;ut<C;++ut)for(let H=0;H<L;++H)for(let J=0;J<U;++J){let lt=J-at,dt=Math.max(0,Math.ceil(lt/j)),mt=Math.min(k,(P+lt)/j);for(let Et=0;Et<O;++Et){let ee=Et-ct,D=Math.max(0,Math.ceil(ee/et)),te=Math.min(W,(F+ee)/et),Nt=0;for(let Tt=dt;Tt<mt;++Tt){let bt=Tt*j-lt;for(let Jt=D;Jt<te;++Jt){let Dt=Jt*et-ee,Gt=y*ut+S*Tt+b*Jt,Re=R*(P-1-bt)+w*(F-1-Dt)+M*H;for(let ge=0;ge<pt;++ge){let N=H*pt+ge,A=_[Gt+N],X=E[Re+ge];Nt+=A*X}}}x[m*ut+d*J+v*Et+H]=Nt}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}var vS={kernelName:$u,backendName:"cpu",kernelFunc:tk};function ek(n){let{inputs:t,backend:e}=n,{x:r}=t,i=T.sizeFromShape(r.shape),o=e.data.get(r.dataId).values,s=Xt([i,i],r.dtype),a=s.values;for(let l=0;l<o.length;l++)a[l*i+l]=o[l];let c=[...r.shape,...r.shape];return e.makeTensorInfo(c,s.dtype,s.values)}var SS={kernelName:_x,backendName:"cpu",kernelFunc:ek};var bS={kernelName:qu,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{let{x:r,filter:i}=n,{strides:o,pad:s,dilations:a}=e,c=t,l=c.data.get(r.dataId).values,u=r.shape.length,h=c.data.get(i.dataId).values,f=i.shape.length,{batchSize:p,inHeight:g,inWidth:x,inChannels:m,outHeight:d,outWidth:v,padInfo:_,strideHeight:y,strideWidth:S,filterHeight:b,filterWidth:E,dilationHeight:R,dilationWidth:w,outShape:M}=B.computeDilation2DInfo(r.shape,i.shape,o,s,"NHWC",a),C=T.sizeFromShape(M),P=M.length,F=T.getArrayFromDType(r.dtype,C);for(let U=0;U<p;++U)for(let O=0;O<d;++O){let V=O*y-_.top;for(let k=0;k<v;++k){let W=k*S-_.left;for(let j=0;j<m;++j){let et=Number.MIN_SAFE_INTEGER;for(let ct=0;ct<b;++ct){let pt=V+ct*R;if(pt>=0&&pt<g)for(let ut=0;ut<E;++ut){let H=W+ut*w;if(H>=0&&H<x){let J=T.locToIndex([U,pt,H,j],u,T.computeStrides(r.shape)),lt=T.locToIndex([ct,ut,j],f,T.computeStrides(i.shape)),dt=l[J]+h[lt];dt>et&&(et=dt)}}}let at=T.locToIndex([U,O,k,j],P,T.computeStrides(M));F[at]=et}}}return{dataId:c.write(T.toTypedArray(F,r.dtype),M,r.dtype),shape:M,dtype:r.dtype}}};var MS={kernelName:Ya,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{let{x:r,filter:i,dy:o}=n,{strides:s,pad:a,dilations:c}=e,l=t,u=T.toNestedArray(r.shape,l.data.get(r.dataId).values),h=T.toNestedArray(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:g,inChannels:x,outHeight:m,outWidth:d,padInfo:v,strideHeight:_,strideWidth:y,filterHeight:S,filterWidth:b,dilationHeight:E,dilationWidth:R,outShape:w}=B.computeDilation2DInfo(r.shape,i.shape,s,a,"NHWC",c);T.assert(o.rank===w.length,()=>`Error in ${Ya}, dy must have the same rank as output ${w.length}, but got ${o.rank}`);let M=T.toNestedArray(w,l.data.get(o.dataId).values),C=T.makeZerosNestedTypedArray(i.shape,i.dtype);for(let F=0;F<f;++F)for(let L=0;L<m;++L){let U=L*_-v.top;for(let O=0;O<d;++O){let V=O*y-v.left;for(let k=0;k<x;++k){let W=Number.MIN_SAFE_INTEGER,j=0,et=0;for(let at=0;at<S;++at){let ct=U+at*E;if(ct>=0&&ct<p)for(let pt=0;pt<b;++pt){let ut=V+pt*R;if(ut>=0&&ut<g){let H=u[F][ct][ut][k]+h[at][pt][k];H>W&&(W=H,j=at,et=pt)}}}C[j][et][k]+=M[F][L][O][k]}}}return{dataId:l.write(T.toTypedArray(C,r.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}};var wS={kernelName:Ka,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{let{x:r,filter:i,dy:o}=n,{strides:s,pad:a,dilations:c}=e,l=t,u=T.toNestedArray(r.shape,l.data.get(r.dataId).values),h=T.toNestedArray(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:g,inChannels:x,outHeight:m,outWidth:d,padInfo:v,strideHeight:_,strideWidth:y,filterHeight:S,filterWidth:b,dilationHeight:E,dilationWidth:R,outShape:w}=B.computeDilation2DInfo(r.shape,i.shape,s,a,"NHWC",c);T.assert(o.rank===w.length,()=>`Error in ${Ka}, dy must have the same rank as output ${w.length}, but got ${o.rank}`);let M=T.toNestedArray(w,l.data.get(o.dataId).values),C=T.makeZerosNestedTypedArray(r.shape,r.dtype);for(let F=0;F<f;++F)for(let L=0;L<m;++L){let U=L*_-v.top;for(let O=0;O<d;++O){let V=O*y-v.left;for(let k=0;k<x;++k){let W=Number.MIN_SAFE_INTEGER,j=U<0?0:U,et=V<0?0:V;for(let at=0;at<S;++at){let ct=U+at*E;if(ct>=0&&ct<p)for(let pt=0;pt<b;++pt){let ut=V+pt*R;if(ut>=0&&ut<g){let H=u[F][ct][ut][k]+h[at][pt][k];H>W&&(W=H,j=ct,et=ut)}}}C[F][j][et][k]+=M[F][L][O][k]}}}return{dataId:l.write(T.toTypedArray(C,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function nk(n){let{inputs:t,backend:e,attrs:r}=n,{image:i}=t,{canvas:o,options:s}=r,{contextOptions:a,imageOptions:c}=s||{},l=c?.alpha||1,u=a?.contextType||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);let h=o.getContext(u,a?.contextAttributes||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);let[f,p]=i.shape.slice(0,2),g=i.shape.length===2?1:i.shape[2],x=e.data.get(i.dataId).values,m=i.dtype==="float32"?255:1,d=new Uint8ClampedArray(p*f*4);for(let _=0;_<f*p;++_){let y=[0,0,0,255*l];for(let b=0;b<g;b++){let E=x[_*g+b];if(i.dtype==="float32"){if(E<0||E>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${E}.`)}else if(i.dtype==="int32"&&(E<0||E>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${E}.`);g===1?(y[0]=E*m,y[1]=E*m,y[2]=E*m):y[b]=E*m}let S=_*4;d[S+0]=Math.round(y[0]),d[S+1]=Math.round(y[1]),d[S+2]=Math.round(y[2]),d[S+3]=Math.round(y[3])}o.width=p,o.height=f;let v=new ImageData(d,p,f);return h.putImageData(v,0,0),i}var TS={kernelName:vx,backendName:"cpu",kernelFunc:nk};function Zr(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,keepDims:s}=r;ot(i,"sum");let a;i.dtype==="bool"?a=er({inputs:{x:i},backend:e,attrs:{dtype:"int32"}}):a=nn({inputs:{x:i},backend:e});let c=a.shape.length,l=T.parseAxisParam(o,a.shape),u=B.getAxesPermutation(l,c),h=l,f=a;u!=null&&(f=Pe({inputs:{x:a},backend:e,attrs:{perm:u}}),h=B.getInnerMostAxes(h.length,c)),B.assertAxesAreInnerMostDims("sum",h,f.shape.length);let[p,g]=B.computeOutAndReduceShapes(f.shape,h),x=B.upcastType(f.dtype,"int32"),m=Js(e,p,x),d=T.sizeFromShape(g),v=e.data.get(m.dataId).values,_=e.data.get(f.dataId).values;for(let y=0;y<v.length;++y){let S=y*d,b=0;for(let E=0;E<d;++E)b+=_[S+E];v[y]=b}if(s){let y=B.expandShapeToKeepDim(m.shape,l),S=m;m=ie({inputs:{x:m},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(S)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(f),m}var ES={kernelName:"Sum",backendName:"cpu",kernelFunc:Zr};function rk(n){let{inputs:t,backend:e,attrs:r}=n,{equation:i}=r,o=t,{allDims:s,summedDims:a,idDims:c}=B.decodeEinsumEquation(i,o.length);B.checkEinsumDimSizes(s.length,c,o);let{path:l,steps:u}=B.getEinsumComputePath(a,c),h=u.length,f=null,p=s.length,g=[];for(let x=0;x<h;++x){for(let m of u[x]){let{permutationIndices:d,expandDims:v}=B.getEinsumPermutation(p,c[m]),_;B.isIdentityPermutation(d)?_=o[m]:(_=Pe({inputs:{x:o[m]},backend:e,attrs:{perm:d}}),g.push(_));let y=_.shape.slice();for(let S=0;S<v.length;++S)y.splice(v[S],0,1);T.arraysEqual(_.shape,y)||(_=ie({inputs:{x:_},backend:e,attrs:{shape:y}}),g.push(_)),f===null?f=_:(f=To({inputs:{a:_,b:f},backend:e}),g.push(f))}x<h-1&&(l[x]>=0&&(f=Zr({inputs:{x:f},backend:e,attrs:{axis:l[x]-(s.length-p),keepDims:!1}}),g.push(f)),p--)}for(let x of g)x!==f&&e.disposeIntermediateTensorInfo(x);return f}var AS={kernelName:Sx,backendName:"cpu",kernelFunc:rk};function ik(n){let{inputs:t,backend:e}=n,{dy:r,y:i}=t;ot([r,i],"eluGrad");let o=new Float32Array(T.sizeFromShape(i.shape)),s=e.data.get(i.dataId).values,a=e.data.get(r.dataId).values;for(let c=0;c<s.length;++c){let l=s[c];l>=0?o[c]=a[c]:o[c]=a[c]*(l+1)}return e.makeTensorInfo(i.shape,"float32",o)}var IS={kernelName:Xu,backendName:"cpu",kernelFunc:ik};var ok=B.ERF_P,sk=B.ERF_A1,ak=B.ERF_A2,ck=B.ERF_A3,lk=B.ERF_A4,uk=B.ERF_A5,hk=zt("Erf",n=>{let t=Math.sign(n),e=Math.abs(n),r=1/(1+ok*e);return t*(1-((((uk*r+lk)*r+ck)*r+ak)*r+sk)*r*Math.exp(-e*e))}),CS={kernelName:"Erf",backendName:"cpu",kernelFunc:hk};function ta(n){let{inputs:t,backend:e,attrs:r}=n,{input:i}=t,{dim:o}=r,s=i.shape.length,a=i.shape.slice(),c=o;return o<0&&(T.assert(-(s+1)<=o,()=>`Axis must be in the interval [${-(s+1)}, ${s}]`),c=s+o+1),a.splice(c,0,1),ie({inputs:{x:i},backend:e,attrs:{shape:a}})}var RS={kernelName:_s,backendName:"cpu",kernelFunc:ta};var fk=re((n,t)=>n/t),Nc=pe(to,fk),Dc={kernelName:to,backendName:"cpu",kernelFunc:Nc};function sf(n,t,e){let r=n.shape,i=r[0],o=r[1],s=e.data.get(n.dataId),a=s.complexTensorInfos.real,c=s.complexTensorInfos.imag,l=[i,o],u=T.sizeFromShape(l),h=T.getTypedArrayFromDType("float32",u),f=T.getTypedArrayFromDType("float32",u);for(let m=0;m<i;m++){let d=rr({inputs:{x:a},backend:e,attrs:{begin:[m,0],size:[1,o]}}),v=rr({inputs:{x:c},backend:e,attrs:{begin:[m,0],size:[1,o]}}),_=qe({inputs:{real:d,imag:v},backend:e}),{real:y,imag:S}=pk(_,t,e),b=B.mergeRealAndImagArrays(y,S);for(let E=0;E<o;E++){let R=B.getComplexWithIndex(b,E);h[m*o+E]=R.real,f[m*o+E]=R.imag}e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(v),e.disposeIntermediateTensorInfo(_)}let p=e.makeTensorInfo(l,"float32",h),g=e.makeTensorInfo(l,"float32",f),x=qe({inputs:{real:p,imag:g},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(g),x}function pk(n,t,e){let r=T.sizeFromShape(n.shape),i=e.data.get(n.dataId),o=e.data.get(i.complexTensorInfos.real.dataId).values,s=e.data.get(i.complexTensorInfos.imag.dataId).values;if(dk(r)){let a=tm(o,s,r,t,e),c=[n.shape[0],n.shape[1]];if(t){let l=e.makeTensorInfo(c,"float32",a.real),u=e.makeTensorInfo(c,"float32",a.imag),h=e.makeTensorInfo([],"float32",T.createScalarValue(r,"float32")),f=nn({inputs:{x:h},backend:e}),p=Dc.kernelFunc({inputs:{a:l,b:h},backend:e}),g=Dc.kernelFunc({inputs:{a:u,b:f},backend:e}),x=e.data.get(p.dataId).values,m=e.data.get(g.dataId).values;return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(g),{real:x,imag:m}}return a}else{let a=B.mergeRealAndImagArrays(o,s),c=mk(a,r,t);return B.splitRealAndImagArrays(c)}}function dk(n){return(n&n-1)===0}function tm(n,t,e,r,i){if(e===1)return{real:n,imag:t};let o=B.mergeRealAndImagArrays(n,t),s=e/2,a=B.complexWithEvenIndex(o),c=a.real,l=a.imag,u=[c.length],h=i.makeTensorInfo(u,"float32",c),f=i.makeTensorInfo(u,"float32",l),p=qe({inputs:{real:h,imag:f},backend:i}),g=B.complexWithOddIndex(o),x=g.real,m=g.imag,d=[x.length],v=i.makeTensorInfo(d,"float32",x),_=i.makeTensorInfo(d,"float32",m),y=qe({inputs:{real:v,imag:_},backend:i}),S=tm(c,l,s,r,i),b=S.real,E=S.imag,R=[b.length],w=i.makeTensorInfo(R,"float32",b),M=i.makeTensorInfo(R,"float32",E),C=qe({inputs:{real:w,imag:M},backend:i}),P=tm(x,m,s,r,i),F=P.real,L=P.imag,U=[F.length],O=i.makeTensorInfo(U,"float32",F),V=i.makeTensorInfo(U,"float32",L),k=qe({inputs:{real:O,imag:V},backend:i}),W=B.exponents(e,r),j=[W.real.length],et=i.makeTensorInfo(j,"float32",W.real),at=i.makeTensorInfo(j,"float32",W.imag),ct=qe({inputs:{real:et,imag:at},backend:i}),pt=To({inputs:{a:ct,b:k},backend:i}),ut=Ir({inputs:{a:C,b:pt},backend:i}),H=Cc({inputs:{a:C,b:pt},backend:i}),J=tr({inputs:{input:ut},backend:i}),lt=tr({inputs:{input:H},backend:i}),dt=Cr({inputs:{input:ut},backend:i}),mt=Cr({inputs:{input:H},backend:i}),Et=wi({inputs:[J,lt],backend:i,attrs:{axis:0}}),ee=wi({inputs:[dt,mt],backend:i,attrs:{axis:0}}),D=i.data.get(Et.dataId).values,te=i.data.get(ee.dataId).values;return i.disposeIntermediateTensorInfo(h),i.disposeIntermediateTensorInfo(f),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(_),i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(w),i.disposeIntermediateTensorInfo(M),i.disposeIntermediateTensorInfo(C),i.disposeIntermediateTensorInfo(O),i.disposeIntermediateTensorInfo(V),i.disposeIntermediateTensorInfo(k),i.disposeIntermediateTensorInfo(et),i.disposeIntermediateTensorInfo(at),i.disposeIntermediateTensorInfo(ct),i.disposeIntermediateTensorInfo(pt),i.disposeIntermediateTensorInfo(ut),i.disposeIntermediateTensorInfo(H),i.disposeIntermediateTensorInfo(J),i.disposeIntermediateTensorInfo(dt),i.disposeIntermediateTensorInfo(lt),i.disposeIntermediateTensorInfo(mt),i.disposeIntermediateTensorInfo(Et),i.disposeIntermediateTensorInfo(ee),{real:D,imag:te}}function mk(n,t,e){let r=new Float32Array(t*2);for(let i=0;i<t;i++){let o=0,s=0;for(let a=0;a<t;a++){let c=B.exponent(i*a,t,e),l=B.getComplexWithIndex(n,a);o+=l.real*c.real-l.imag*c.imag,s+=l.real*c.imag+l.imag*c.real}e&&(o/=t,s/=t),B.assignToTypedArray(r,o,s,i)}return r}function xk(n){let{inputs:t,backend:e}=n,{input:r}=t,i=T.sizeFromShape(r.shape),o=r.shape[r.shape.length-1],s=i/o,a=ie({inputs:{x:r},backend:e,attrs:{shape:[s,o]}}),c=sf(a,!1,e),l=ie({inputs:{x:c},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),l}var NS={kernelName:"FFT",backendName:"cpu",kernelFunc:xk};function Pc(n){let{backend:t,attrs:e}=n,{shape:r,value:i,dtype:o}=e,s=o||T.inferDtype(i),a=T.getArrayFromDType(s,T.sizeFromShape(r));return yk(a,i,s),t.makeTensorInfo(r,s,a)}var DS={kernelName:Ku,backendName:"cpu",kernelFunc:Pc};function yk(n,t,e){n.fill(t)}var PS={kernelName:bx,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{let{image:r}=n,i=e,o=T.getTypedArrayFromDType(r.dtype,T.sizeFromShape(r.shape)),[s,a,c,l]=r.shape,u=i.data.get(r.dataId).values;for(let f=0;f<s;f++){let p=f*c*a*l;for(let g=0;g<a;g++){let x=g*(c*l);for(let m=0;m<c;m++){let d=m*l;for(let v=0;v<l;v++){let _=Math.round(c-m-1),y=p+x+d+v,S=u[y];if(_>=0&&_<c){let b=_*l,E=p+x+b+v;S=u[E]}o[y]=S}}}}return{dataId:i.write(o,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function _k(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,filter:o,bias:s,preluActivationWeights:a}=t,{strides:c,pad:l,dataFormat:u,dilations:h,dimRoundingMode:f,activation:p,leakyreluAlpha:g}=r,x=Jd({inputs:{x:i,filter:o},backend:e,attrs:{strides:c,pad:l,dataFormat:u,dilations:h,dimRoundingMode:f}});if(s){let m=x;if(u==="NCHW"&&s.shape.length===1&&s.shape[0]!==1){let d=ie({inputs:{x:s},backend:e,attrs:{shape:[s.shape[0],1,1]}});x=Ir({inputs:{a:x,b:d},backend:e}),e.disposeIntermediateTensorInfo(d)}else x=Ir({inputs:{a:x,b:s},backend:e});e.disposeIntermediateTensorInfo(m)}if(p){let m=x;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){let d=ie({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});x=Eo(e,x,p,d,g),e.disposeIntermediateTensorInfo(d)}else x=Eo(e,x,p,a,g);e.disposeIntermediateTensorInfo(m)}return x}var FS={kernelName:Qx,backendName:"cpu",kernelFunc:_k};function vk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,filter:o,bias:s,preluActivationWeights:a}=t,{strides:c,pad:l,dataFormat:u,dilations:h,dimRoundingMode:f,activation:p,leakyreluAlpha:g}=r,x=jd({inputs:{x:i,filter:o},backend:e,attrs:{strides:c,pad:l,dataFormat:u,dilations:h,dimRoundingMode:f}});if(s){let m=x;x=Ir({inputs:{a:x,b:s},backend:e}),e.disposeIntermediateTensorInfo(m)}if(p){let m=x;x=Eo(e,x,p,a,g),e.disposeIntermediateTensorInfo(m)}return x}var kS={kernelName:t0,backendName:"cpu",kernelFunc:vk};function Sk(n){let{inputs:t,backend:e}=n,{params:r,indices:i}=t,o=T.sizeFromShape(r.shape),s=i.shape,a=s[s.length-1],[c,l,u,h]=B.prepareAndValidate(r,i);if(l===0)return e.makeTensorInfo(c,r.dtype,[]);let f=e.data.get(i.dataId).values,p=e.bufferSync(r),g=B_(f,p,r.dtype,l,a,u,h,r.shape,o);return e.makeTensorInfo(c,r.dtype,g.values)}var LS={kernelName:Mx,backendName:"cpu",kernelFunc:Sk};function bk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,indices:o}=t,{axis:s,batchDims:a}=r;ot([i,o],"gatherV2");let c=T.parseAxisParam(s,i.shape)[0],l=e.data.get(o.dataId).values,u=i.shape[c];for(let y=0;y<l.length;++y){let S=l[y];T.assert(S<=u-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);let f=T.sizeFromShape(o.shape),p=B.segment_util.collectGatherOpShapeInfo(i,o,c,h),g=ie({inputs:{x:i},backend:e,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),x=ie({inputs:{x:o},backend:e,attrs:{shape:[p.batchSize,f/p.batchSize]}}),m=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize],d=e.bufferSync(x),v=e.bufferSync(g),_=z_(v,d,m);return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),e.makeTensorInfo(p.outputShape,_.dtype,_.values)}var US={kernelName:vs,backendName:"cpu",kernelFunc:bk};function Mk(n){let{inputs:t,backend:e}=n,{input:r}=t,i=T.sizeFromShape(r.shape),o=r.shape[r.shape.length-1],s=i/o,a=ie({inputs:{x:r},backend:e,attrs:{shape:[s,o]}}),c=sf(a,!0,e),l=ie({inputs:{x:c},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),l}var OS={kernelName:wx,backendName:"cpu",kernelFunc:Mk};var wk=zt(Qa,n=>Number.isFinite(n)?1:0,"bool"),BS={kernelName:Qa,backendName:"cpu",kernelFunc:wk};var Tk=zt(tc,n=>Math.abs(n)===1/0?1:0,"bool"),zS={kernelName:tc,backendName:"cpu",kernelFunc:Tk};var Ek=zt(ec,n=>Number.isNaN(n)?1:0,"bool"),GS={kernelName:ec,backendName:"cpu",kernelFunc:Ek};function Ak(n){let{backend:t,attrs:e}=n,{start:r,stop:i,num:o}=e,s=$_(r,i,o);return t.makeTensorInfo([s.length],"float32",s)}var VS={kernelName:Tx,backendName:"cpu",kernelFunc:Ak};var Ik=zt(ic,n=>Math.log1p(n)),HS={kernelName:ic,backendName:"cpu",kernelFunc:Ik};var Ck=re((n,t)=>n&&t),Rk=pe(oc,Ck,null,"bool"),WS={kernelName:oc,backendName:"cpu",kernelFunc:Rk};var Nk=zt(sc,n=>n?0:1,"bool"),$S={kernelName:sc,backendName:"cpu",kernelFunc:Nk};var Dk=re((n,t)=>n||t),Pk=pe(Lp,Dk,null,"bool"),qS={kernelName:Lp,backendName:"cpu",kernelFunc:Pk};function Fk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{depthRadius:o,bias:s,alpha:a,beta:c}=r;ot(i,"LRN");let l=i.shape[3],u=l-1,h=e.data.get(i.dataId).values,f=T.sizeFromShape(i.shape),p=new Float32Array(f);function g(x){let m=x%l,d=x-m+Math.max(0,m-o),v=x-m+Math.min(m+o,u),_=0;for(;d<=v;d++){let y=h[d];_+=y*y}return _}for(let x=0;x<f;x++){let m=g(x),d=h[x]*Math.pow(s+a*m,-c);p[x]=d}return e.makeTensorInfo(i.shape,i.dtype,p)}var KS={kernelName:"LRN",backendName:"cpu",kernelFunc:Fk};function kk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,y:o,dy:s}=t,{depthRadius:a,bias:c,alpha:l,beta:u}=r;ot(s,"LRNGrad");let h=T.sizeFromShape(s.shape),f=s.shape[3],p=e.data.get(s.dataId).values,g=e.data.get(i.dataId).values,x=e.data.get(o.dataId).values,m=new Float32Array(h),d=h;for(let v=0;v<d;v++){let _=v%f,y=v-_+Math.max(0,_-a),S=v-_+Math.min(f,_+a+1),b=0;for(let E=y;E<S;E++)b+=Math.pow(g[E],2);b=l*b+c;for(let E=y;E<S;E++){let R=-2*l*u*g[E]*x[v]/b;v===E&&(R+=Math.pow(b,-u)),R*=p[v],m[E]+=R}}return e.makeTensorInfo(s.shape,i.dtype,m)}var YS={kernelName:Ju,backendName:"cpu",kernelFunc:kk};function em(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{reductionIndices:o,keepDims:s}=r,a=e,c=i.shape,l=c.length,u=T.parseAxisParam(o,c),h=u,f=B.getAxesPermutation(h,l),p=a.data.get(i.dataId).values;if(f!=null){let y=new Array(l);for(let S=0;S<y.length;S++)y[S]=c[f[S]];p=ef(p,c,i.dtype,f,y),h=B.getInnerMostAxes(h.length,l),c=y}ot(i,"max"),B.assertAxesAreInnerMostDims("max",h,l);let[g,x]=B.computeOutAndReduceShapes(c,h),m=T.sizeFromShape(x),d=X_(p,m,g,i.dtype),v=a.write(d,g,i.dtype),_=g;return s&&(_=B.expandShapeToKeepDim(g,u)),{dataId:v,shape:_,dtype:i.dtype}}var JS={kernelName:"Max",backendName:"cpu",kernelFunc:em};function Lk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t;ot(i,"maxPool");let{filterSize:o,strides:s,pad:a,dimRoundingMode:c}=r,l=1;T.assert(B.eitherStridesOrDilationsAreOne(s,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`);let u=B.computePool2DInfo(i.shape,o,s,l,a,c),h;if(u.filterWidth===1&&u.filterHeight===1&&T.arraysEqual(u.inShape,u.outShape))h=nn({inputs:{x:i},backend:e});else{let f=e.data.get(i.dataId).values,p=T.computeStrides(i.shape),g=Qs(f,i.shape,i.dtype,p,u,"max");h=e.makeTensorInfo(u.outShape,i.dtype,g.values)}return h}var jS={kernelName:ju,backendName:"cpu",kernelFunc:Lk};function Uk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{filterSize:o,strides:s,pad:a,dimRoundingMode:c,dataFormat:l}=r;ot(i,"maxPool3d");let u=B.computePool3DInfo(i.shape,o,s,1,a,c,l),h=e.data.get(i.dataId).values,f=of(h,i.shape,i.dtype,T.computeStrides(i.shape),u,"max");return e.makeTensorInfo(f.shape,"float32",f.values)}var QS={kernelName:th,backendName:"cpu",kernelFunc:Uk};function Ok(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,input:o}=t,{filterSize:s,strides:a,pad:c,dimRoundingMode:l}=r;ot([i,o],"maxPool3DGrad");let u=B.computePool3DInfo(o.shape,s,a,1,c,l),h=e.bufferSync(o),f=qv(h,u),p=u.strideDepth,g=u.strideHeight,x=u.strideWidth,m=u.dilationDepth,d=u.dilationHeight,v=u.dilationWidth,_=u.effectiveFilterDepth,y=u.effectiveFilterHeight,S=u.effectiveFilterWidth,b=_-1-u.padInfo.front,E=S-1-u.padInfo.left,R=y-1-u.padInfo.top,w=Xt(o.shape,"float32"),M=e.bufferSync(i);for(let C=0;C<u.batchSize;++C)for(let P=0;P<u.inChannels;++P)for(let F=0;F<u.inDepth;++F)for(let L=0;L<u.inHeight;++L)for(let U=0;U<u.inWidth;++U){let O=F-b,V=L-R,k=U-E,W=0;for(let j=0;j<_;j+=m){let et=(O+j)/p;if(!(et<0||et>=u.outDepth||Math.floor(et)!==et))for(let at=0;at<y;at+=d){let ct=(V+at)/g;if(!(ct<0||ct>=u.outHeight||Math.floor(ct)!==ct))for(let pt=0;pt<S;pt+=v){let ut=(k+pt)/x;if(ut<0||ut>=u.outWidth||Math.floor(ut)!==ut)continue;let H=_*y*S-1-f.get(C,et,ct,ut,P),J=j*y*S+at*S+pt,lt=H===J?1:0;if(lt===0)continue;let dt=M.get(C,et,ct,ut,P);W+=dt*lt}}}w.set(W,C,F,L,U,P)}return e.makeTensorInfo(w.shape,w.dtype,w.values)}var tb={kernelName:eh,backendName:"cpu",kernelFunc:Ok};function Bk(n){let{inputs:t,backend:e,attrs:r}=n,{dy:i,input:o,output:s}=t,a=o;ot([o,s],"maxPoolGrad");let{filterSize:c,strides:l,pad:u,dimRoundingMode:h}=r,f=B.computePool2DInfo(a.shape,c,l,1,u,h),p=e.data.get(a.dataId).values,g=Xt(f.outShape,a.dtype,rf(p,a.shape,a.dtype,f).values),x=f.strideHeight,m=f.strideWidth,d=f.dilationHeight,v=f.dilationWidth,_=f.effectiveFilterHeight,y=f.effectiveFilterWidth,S=y-1-f.padInfo.left,b=_-1-f.padInfo.top,E=Xt(a.shape,"float32"),R=e.data.get(i.dataId).values,w=Xt(i.shape,"float32",R);for(let M=0;M<f.batchSize;++M)for(let C=0;C<f.inChannels;++C)for(let P=0;P<f.inHeight;++P)for(let F=0;F<f.inWidth;++F){let L=P-b,U=F-S,O=0;for(let V=0;V<_;V+=d){let k=(L+V)/x;if(!(k<0||k>=f.outHeight||Math.floor(k)!==k))for(let W=0;W<y;W+=v){let j=(U+W)/m;if(j<0||j>=f.outWidth||Math.floor(j)!==j)continue;let et=_*y-1-g.get(M,k,j,C),at=V*y+W,ct=et===at?1:0;if(ct===0)continue;let pt=w.get(M,k,j,C);O+=pt*ct}}E.set(O,M,P,F,C)}return e.makeTensorInfo(E.shape,E.dtype,E.values)}var eb={kernelName:Qu,backendName:"cpu",kernelFunc:Bk};function nb(n,t,e,r,i){let o=T.computeStrides(t),s=Qs(n,t,e,o,i,"max"),a=rf(n,t,e,i,!0,r);return[s.values,a.values]}var rb={kernelName:Ax,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{let{x:r}=n,{filterSize:i,strides:o,pad:s,includeBatchInIndex:a}=t,c=e;ot(r,"MaxPoolWithArgmax");let l=c.data.get(r.dataId).values,u=B.computePool2DInfo(r.shape,i,o,[1,1],s),[h,f]=nb(l,r.shape,r.dtype,a,u),p=c.write(h,u.outShape,r.dtype),g=c.write(f,u.outShape,r.dtype);return[{dataId:p,shape:u.outShape,dtype:r.dtype},{dataId:g,shape:u.outShape,dtype:"int32"}]}};function zk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,keepDims:s}=r,a=T.parseAxisParam(o,i.shape),l=B.computeOutAndReduceShapes(i.shape,a)[1],u=T.sizeFromShape(l),h=[],f=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(f);let p=er({inputs:{x:i},backend:e,attrs:{dtype:"float32"}});h.push(p);let g=Nc({inputs:{a:p,b:f},backend:e});h.push(g);let x=Zr({inputs:{x:g},backend:e,attrs:{axis:o,keepDims:s}});return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),x}var ib={kernelName:nh,backendName:"cpu",kernelFunc:zk};function Gk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{axis:o,keepDims:s}=r;ot(i,"min");let a=T.parseAxisParam(o,i.shape),c=a,l=B.getAxesPermutation(c,i.shape.length),u=i;l!=null&&(u=Pe({inputs:{x:i},backend:e,attrs:{perm:l}}),c=B.getInnerMostAxes(c.length,i.shape.length)),B.assertAxesAreInnerMostDims("min",c,u.shape.length);let[h,f]=B.computeOutAndReduceShapes(u.shape,c),p=T.sizeFromShape(f),g=T.makeZerosTypedArray(T.sizeFromShape(h),u.dtype),x=e.data.get(u.dataId).values;for(let d=0;d<g.length;++d){let v=d*p,_=x[v];for(let y=0;y<p;++y){let S=x[v+y];(Number.isNaN(S)||S<_)&&(_=S)}g[d]=_}l!=null&&e.disposeIntermediateTensorInfo(u);let m=e.makeTensorInfo(h,u.dtype,g);if(s){let d=B.expandShapeToKeepDim(h,a),v=ie({inputs:{x:m},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),v}return m}var sb={kernelName:"Min",backendName:"cpu",kernelFunc:Gk};function Vk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{paddings:o,mode:s}=r;ot(i,"mirrorPad");let a=o.map((_,y)=>_[0]+i.shape[y]+_[1]),c=o.map(_=>_[0]),l=o.map((_,y)=>_[0]+i.shape[y]),u=s==="reflect"?0:1,h=e.data.get(i.dataId).values,f=i.shape.length,p=T.computeStrides(i.shape),g=T.sizeFromShape(a),x=a.length,m=T.computeStrides(a),d=T.getTypedArrayFromDType(i.dtype,g);for(let _=0;_<g;_++){let y=T.indexToLoc(_,x,m);for(let b=0;b<x;b++)y[b]<c[b]?y[b]=c[b]*2-y[b]-u:y[b]>=l[b]&&(y[b]=(l[b]-1)*2-y[b]+u);y=y.map((b,E)=>b-c[E]);let S=T.locToIndex(y,f,p);d[_]=h[S]}return{dataId:e.write(d,a,i.dtype),shape:a,dtype:i.dtype}}var ab={kernelName:rh,backendName:"cpu",kernelFunc:Vk};var Hk=re(((n,t)=>{let e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),Wk=pe("Mod",Hk),cb={kernelName:"Mod",backendName:"cpu",kernelFunc:Wk};var ub=gm(zy());function rm(n){let{inputs:t,backend:e,attrs:r}=n,{logits:i}=t,{dim:o}=r,s=i.shape.length,a=o;if(a===-1&&(a=s-1),a!==s-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${s} and dim was ${a}`);let c=T.parseAxisParam([a],i.shape),l=em({inputs:{x:i},backend:e,attrs:{reductionIndices:c,keepDims:!1}}),u=B.expandShapeToKeepDim(l.shape,c),h=ie({inputs:{x:l},backend:e,attrs:{shape:u}}),f=Cc({inputs:{a:i,b:h},backend:e}),p=zd({inputs:{x:f},backend:e}),g=Zr({inputs:{x:p},backend:e,attrs:{axis:c,keepDims:!1}}),x=ie({inputs:{x:g},backend:e,attrs:{shape:u}}),m=Nc({inputs:{a:p,b:x},backend:e});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),m}var lb={kernelName:fh,backendName:"cpu",kernelFunc:rm};function $k(n){let{inputs:t,backend:e,attrs:r}=n,{logits:i}=t,{numSamples:o,seed:s,normalized:a}=r;ot(i,"multinomial");let c=a?i:rm({inputs:{logits:i},backend:e,attrs:{dim:-1}}),l=c.shape[0],u=c.shape[1],h=e.data.get(c.dataId).values,f=[l,o],p=T.makeZerosTypedArray(T.sizeFromShape(f),"int32");for(let g=0;g<l;++g){let x=g*u,m=new Float32Array(u-1);m[0]=h[x];for(let _=1;_<m.length;++_)m[_]=m[_-1]+h[x+_];let d=ub.alea(s.toString()),v=g*o;for(let _=0;_<o;++_){let y=d();p[v+_]=m.length;for(let S=0;S<m.length;S++)if(y<m[S]){p[v+_]=S;break}}}return a||e.disposeIntermediateTensorInfo(c),e.makeTensorInfo(f,"int32",p)}var hb={kernelName:Ix,backendName:"cpu",kernelFunc:$k};var qk=Ar.nonMaxSuppressionV3Impl;function Xk(n){let{inputs:t,backend:e,attrs:r}=n,{boxes:i,scores:o}=t,{maxOutputSize:s,iouThreshold:a,scoreThreshold:c}=r;ot(i,"NonMaxSuppression");let l=e.data.get(i.dataId).values,u=e.data.get(o.dataId).values,{selectedIndices:h}=qk(l,u,s,a,c);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}var fb={kernelName:Cx,backendName:"cpu",kernelFunc:Xk};var Kk=Ar.nonMaxSuppressionV4Impl;function Yk(n){let{inputs:t,backend:e,attrs:r}=n,{boxes:i,scores:o}=t,{maxOutputSize:s,iouThreshold:a,scoreThreshold:c,padToMaxOutputSize:l}=r;ot(i,"NonMaxSuppressionPadded");let u=e.data.get(i.dataId).values,h=e.data.get(o.dataId).values,{selectedIndices:f,validOutputs:p}=Kk(u,h,s,a,c,l);return[e.makeTensorInfo([f.length],"int32",new Int32Array(f)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}var pb={kernelName:Rx,backendName:"cpu",kernelFunc:Yk};var Zk=Ar.nonMaxSuppressionV5Impl;function Jk(n){let{inputs:t,backend:e,attrs:r}=n,{boxes:i,scores:o}=t,{maxOutputSize:s,iouThreshold:a,scoreThreshold:c,softNmsSigma:l}=r;ot(i,"NonMaxSuppressionWithScore");let u=e.data.get(i.dataId).values,h=e.data.get(o.dataId).values,f=s,p=a,g=c,x=l,{selectedIndices:m,selectedScores:d}=Zk(u,h,f,p,g,x);return[e.makeTensorInfo([m.length],"int32",new Int32Array(m)),e.makeTensorInfo([d.length],"float32",new Float32Array(d))]}var db={kernelName:Nx,backendName:"cpu",kernelFunc:Jk};function jk(n){let{inputs:t,backend:e,attrs:r}=n,{indices:i}=t,{dtype:o,depth:s,onValue:a,offValue:c}=r;ot(i,"oneHot");let l=T.sizeFromShape(i.shape),u=new Float32Array(l*s);u.fill(c);let h=e.data.get(i.dataId).values;for(let f=0;f<l;++f)h[f]>=0&&h[f]<s&&(u[f*s+h[f]]=a);return e.makeTensorInfo([...i.shape,s],o,u)}var mb={kernelName:oh,backendName:"cpu",kernelFunc:jk};function Fc(n){let{inputs:t,backend:e}=n,{x:r}=t;if(r.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(r.dtype==="complex64"){let i=tr({inputs:{input:r},backend:e}),o=Fc({inputs:{x:i},backend:e}),s=Cr({inputs:{input:r},backend:e}),a=Fc({inputs:{x:s},backend:e}),c=qe({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(a),c}else return Pc({backend:e,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}var gb={kernelName:Ps,backendName:"cpu",kernelFunc:Fc};function xb(n){let{inputs:t,backend:e}=n,{x:r}=t;if(r.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(r.dtype==="complex64"){let i=tr({inputs:{input:r},backend:e}),o=xb({inputs:{x:i},backend:e}),s=Cr({inputs:{input:r},backend:e}),a=Fc({inputs:{x:s},backend:e}),c=qe({inputs:{real:o,imag:a},backend:e});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(a),c}else return Pc({backend:e,attrs:{shape:r.shape,value:1,dtype:r.dtype}})}var yb={kernelName:ih,backendName:"cpu",kernelFunc:xb};function im(n){let{inputs:t,backend:e,attrs:r}=n,{axis:i}=r;if(t.length===1)return ta({inputs:{input:t[0]},backend:e,attrs:{dim:i}});let o=t[0].shape,s=t[0].dtype;t.forEach(u=>{T.assertShapesMatch(o,u.shape,"All tensors passed to stack must have matching shapes"),T.assert(s===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],c=t.map(u=>{let h=ta({inputs:{input:u},backend:e,attrs:{dim:i}});return a.push(h),h}),l=wi({inputs:c,backend:e,attrs:{axis:i}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),l}var _b={kernelName:bs,backendName:"cpu",kernelFunc:im};function Qk(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{paddings:o,constantValue:s}=r;ot(i,"pad");let a=o.map((v,_)=>v[0]+i.shape[_]+v[1]),c=o.map(v=>v[0]),l=e.data.get(i.dataId).values,u=T.sizeFromShape(i.shape),h=i.shape.length,f=T.computeStrides(i.shape),p=T.sizeFromShape(a),g=a.length,x=T.computeStrides(a),m=T.getTypedArrayFromDType(i.dtype,p);s!==0&&m.fill(s);for(let v=0;v<u;v++){let y=T.indexToLoc(v,h,f).map((b,E)=>b+c[E]),S=T.locToIndex(y,g,x);m[S]=l[v]}return{dataId:e.write(m,a,i.dtype),shape:a,dtype:i.dtype}}var af={kernelName:Ms,backendName:"cpu",kernelFunc:Qk};var t3=re((n,t)=>Math.pow(n,t)),e3=pe("Pow",t3),vb={kernelName:"Pow",backendName:"cpu",kernelFunc:e3};function n3(n){let{inputs:t,backend:e,attrs:r}=n,{paramsNestedSplits:i,paramsDenseValues:o,indices:s}=t,{outputRaggedRank:a}=r,c=i.map(d=>e.data.get(d.dataId).values),l=i.map(d=>d.shape),u=e.data.get(o.dataId).values,h=e.data.get(s.dataId).values,[f,p,g]=nv(c,l,u,o.shape,o.dtype,h,s.shape,a),x=f.map(d=>e.makeTensorInfo([d.length],"int32",d)),m=e.makeTensorInfo(g,o.dtype,p);return x.concat([m])}var Sb={kernelName:Dx,backendName:"cpu",kernelFunc:n3};function r3(n){let{inputs:t,backend:e}=n,{starts:r,limits:i,deltas:o}=t,s=e.data.get(r.dataId).values,a=e.data.get(i.dataId).values,c=e.data.get(o.dataId).values,[l,u]=iv(s,r.shape,r.dtype,a,i.shape,c,o.shape),h=e.makeTensorInfo([l.length],"int32",l),f=e.makeTensorInfo([u.length],r.dtype,u);return[h,f]}var bb={kernelName:Px,backendName:"cpu",kernelFunc:r3};function i3(n){let{inputs:t,backend:e,attrs:r}=n,{shape:i,values:o,defaultValue:s,rowPartitionTensors:a}=t,{rowPartitionTypes:c}=r,l=e.data.get(i.dataId).values,u=e.data.get(o.dataId).values,h=e.data.get(s.dataId).values,f=a.map(m=>e.data.get(m.dataId).values),p=a.map(m=>m.shape),[g,x]=av(l,i.shape,u,o.shape,o.dtype,h,s.shape,f,p,c);return e.makeTensorInfo(g,o.dtype,x)}var Mb={kernelName:Fx,backendName:"cpu",kernelFunc:i3};function o3(n){let{backend:t,attrs:e}=n,{start:r,stop:i,dtype:o,step:s}=e,a=cv(r,i,s,o);return t.makeTensorInfo([a.length],o,a)}var wb={kernelName:kx,backendName:"cpu",kernelFunc:o3};var s3=zt(cc,n=>1/n),Tb={kernelName:cc,backendName:"cpu",kernelFunc:s3};function a3(n){let{inputs:t,backend:e,attrs:r}=n,{images:i}=t,{alignCorners:o,halfPixelCenters:s,size:a}=r;ot(i,"resizeBilinear");let c=T.computeStrides(i.shape),[l,u]=a,[h,f,p,g]=i.shape,x=e.data.get(i.dataId).values,m=new Float32Array(T.sizeFromShape([h,l,u,g])),d=[o&&l>1?f-1:f,o&&u>1?p-1:p],v=[o&&l>1?l-1:l,o&&u>1?u-1:u],_=0,y=d[0]/v[0],S=d[1]/v[1];for(let b=0;b<h;b++)for(let E=0;E<l;E++){let R;s?R=y*(E+.5)-.5:R=y*E;let w=Math.max(0,Math.floor(R)),M=R-w,C=Math.min(f-1,Math.ceil(R)),P=b*c[0]+w*c[1],F=b*c[0]+C*c[1];for(let L=0;L<u;L++){let U;s?U=S*(L+.5)-.5:U=S*L;let O=Math.max(0,Math.floor(U)),V=U-O,k=Math.min(p-1,Math.ceil(U)),W=P+O*c[2],j=F+O*c[2],et=P+k*c[2],at=F+k*c[2];for(let ct=0;ct<g;ct++){let pt=x[W+ct],ut=x[j+ct],H=x[et+ct],J=x[at+ct],lt=pt+(H-pt)*V,dt=ut+(J-ut)*V,mt=lt+(dt-lt)*M;m[_++]=mt}}}return e.makeTensorInfo([h,l,u,g],"float32",m)}var Eb={kernelName:uh,backendName:"cpu",kernelFunc:a3};function c3(n){let{inputs:t,backend:e,attrs:r}=n,{images:i,dy:o}=t,{alignCorners:s}=r;ot([o,i],"resizeBilinearGrad");let a=T.computeStrides(i.shape),[c,l,u,h]=i.shape,[,f,p]=o.shape,g=new Float32Array(c*l*u*h),x=[s&&f>1?l-1:l,s&&p>1?u-1:u],m=[s&&f>1?f-1:f,s&&p>1?p-1:p],d=x[0]/m[0],v=x[1]/m[1],_=e.data.get(o.dataId).values,y=0;for(let S=0;S<c;S++){let b=S*a[0];for(let E=0;E<f;E++){let R=E*d,w=Math.floor(R),M=Math.min(Math.ceil(R),l-1),C=b+w*a[1],P=b+M*a[1],F=R-w,L=1-F;for(let U=0;U<p;U++){let O=U*v,V=Math.floor(O),k=Math.min(Math.ceil(O),u-1),W=O-V,j=1-W,et=C+V*a[2],at=C+k*a[2],ct=P+V*a[2],pt=P+k*a[2],ut=L*j,H=L*W,J=F*j,lt=F*W;for(let dt=0;dt<h;dt++){let mt=_[y++];g[et+dt]+=mt*ut,g[at+dt]+=mt*H,g[ct+dt]+=mt*J,g[pt+dt]+=mt*lt}}}}return e.makeTensorInfo([c,u,l,h],"float32",g)}var Ab={kernelName:hh,backendName:"cpu",kernelFunc:c3};function l3(n){let{inputs:t,backend:e,attrs:r}=n,{images:i}=t,{alignCorners:o,halfPixelCenters:s,size:a}=r;ot(i,"resizeNearestNeighbor");let c=T.computeStrides(i.shape),[l,u]=a,[h,f,p,g]=i.shape,x=e.data.get(i.dataId).values,m=new Float32Array(h*l*u*g),d=[o&&l>1?f-1:f,o&&u>1?p-1:p],v=[o&&l>1?l-1:l,o&&u>1?u-1:u],_=d[0]/v[0],y=d[1]/v[1],S=0;for(let b=0;b<h;b++){let E=b*c[0];for(let R=0;R<l;R++){let w=s?_*(R+.5):_*R,M=Math.min(f-1,o?Math.round(w):Math.floor(w));s&&(M=Math.max(0,M));let C=E+M*c[1];for(let P=0;P<u;P++){let F=s?y*(P+.5):y*P,L=Math.min(p-1,o?Math.round(F):Math.floor(F));s&&(L=Math.max(0,L));let U=C+L*c[2];for(let O=0;O<g;O++){let V=x[U+O];m[S++]=V}}}}return e.makeTensorInfo([h,l,u,g],i.dtype,m)}var Ib={kernelName:ch,backendName:"cpu",kernelFunc:l3};function u3(n){let{inputs:t,backend:e,attrs:r}=n,{images:i,dy:o}=t,{alignCorners:s}=r;ot([o,i],"resizeNearestNeighborGrad");let a=T.computeStrides(i.shape),c=T.computeStrides(o.shape),[l,u,h,f]=i.shape,[,p,g]=o.shape,x=new Float32Array(l*u*h*f),m=e.data.get(o.dataId).values,d=[s&&p>1?u-1:u,s&&g>1?h-1:h],v=[s&&p>1?p-1:p,s&&g>1?g-1:g],_=d[0]/v[0],y=d[1]/v[1],S=1/_,b=1/y,E=Math.ceil(S)*2+2,R=Math.ceil(b)*2+2;for(let w=0;w<l;w++){let M=w*a[0];for(let C=0;C<u;C++){let P=M+C*a[1],F=Math.floor(C*S),L=Math.floor(F-E/2);for(let U=0;U<h;U++){let O=P+U*a[2],V=Math.floor(U*b),k=Math.floor(V-R/2);for(let W=0;W<f;W++){let j=0;for(let et=0;et<E;et++){let at=et+L;if(at<0||at>=p)continue;let ct=M+at*c[1],pt=at*_,ut=Math.min(u-1,s?Math.round(pt):Math.floor(pt));if(C===ut)for(let H=0;H<R;H++){let J=H+k;if(J<0||J>=g)continue;let lt=ct+J*c[2],dt=J*y,mt=Math.min(h-1,s?Math.round(dt):Math.floor(dt));U===mt&&(j+=m[lt+W])}}x[O+W]=j}}}}return e.makeTensorInfo(i.shape,i.dtype,x)}var Cb={kernelName:lh,backendName:"cpu",kernelFunc:u3};function h3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{dims:o}=r;ot(i,"reverse");let s=i.shape.length,a=T.parseAxisParam(o,i.shape);if(s===0)return nn({inputs:{x:i},backend:e});let c=new ve(i.shape,i.dtype),l=e.bufferSync(i);for(let u=0;u<c.size;u++){let h=c.indexToLoc(u),f=h.slice();a.forEach(p=>f[p]=i.shape[p]-1-f[p]),c.set(l.get(...f),...h)}return e.makeTensorInfo(c.shape,c.dtype,c.values)}var Rb={kernelName:Es,backendName:"cpu",kernelFunc:h3};var Nb={kernelName:Jx,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{let{image:r}=n,{radians:i,fillValue:o,center:s}=t,a=e,c=T.getTypedArrayFromDType(r.dtype,T.sizeFromShape(r.shape)),[l,u,h,f]=r.shape,[p,g]=B.getImageCenter(s,u,h),x=255,m=Math.sin(i),d=Math.cos(i),v=a.data.get(r.dataId).values;for(let y=0;y<l;y++){let S=y*h*u*f;for(let b=0;b<u;b++){let E=b*(h*f);for(let R=0;R<h;R++){let w=R*f;for(let M=0;M<f;M++){let C=[l,b,R,M],P=C[2],F=C[1],L=(P-p)*d-(F-g)*m,U=(P-p)*m+(F-g)*d;L=Math.round(L+p),U=Math.round(U+g);let O=o;if(typeof o!="number"&&(M===3?O=x:O=o[M]),L>=0&&L<h&&U>=0&&U<u){let k=U*(h*f),W=L*f,j=S+k+W+M;O=v[j]}let V=S+E+w+M;c[V]=O}}}}return{dataId:a.write(c,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};var f3=zt(lc,n=>{let t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),Db={kernelName:lc,backendName:"cpu",kernelFunc:f3};function p3(n){let{inputs:t,backend:e,attrs:r}=n,{indices:i,updates:o}=t,{shape:s}=r,{sliceRank:a,numUpdates:c,sliceSize:l,strides:u,outputSize:h}=B.calculateShapes(o,i,s),f=!0,p=e.bufferSync(i),g=e.bufferSync(o),x=Yr(p,g,s,h,l,c,a,u,0,f);return e.makeTensorInfo(s,x.dtype,x.values)}var Pb={kernelName:Lx,backendName:"cpu",kernelFunc:p3};function d3(n,t){let e=0,r=n.length,i=0;for(;e<r;)i=Math.floor((e+r)/2),n[i]<t?e=i+1:r=i;return r}function m3(n,t){let e=0,r=n.length,i=0;for(;e<r;)i=Math.floor((e+r)/2),n[i]<=t?e=i+1:r=i;return r}function Fb(n,t,e,r,i,o){let s=T.getArrayFromDType("int32",e*i);for(let a=0;a<e;++a){let c=n.slice(a*r,(a+1)*r),l=a*i;for(let u=0;u<i;++u)s[l+u]=o==="left"?d3(c,t[u+l]):m3(c,t[u+l])}return s}function g3(n){let{inputs:t,backend:e,attrs:r}=n,{sortedSequence:i,values:o}=t,{side:s}=r,a=e.data.get(i.dataId).values,c=e.data.get(o.dataId).values,l=Fb(a,c,i.shape[0],i.shape[1],o.shape[1],s);return e.makeTensorInfo(o.shape,"int32",l)}var kb={kernelName:Ox,backendName:"cpu",kernelFunc:g3};function x3(n){let{inputs:t,backend:e}=n,{condition:r,t:i,e:o}=t;ot([r,i,o],"select");let s=r.shape.length,a=e.data.get(r.dataId).values,c=e.data.get(i.dataId).values,l=e.data.get(o.dataId).values,u=Bn(i.dtype,o.dtype),h=T.makeZerosTypedArray(T.sizeFromShape(i.shape),u),f=0,p=s===0||s>1||i.shape.length===1?1:T.sizeFromShape(i.shape.slice(1));for(let g=0;g<a.length;g++)for(let x=0;x<p;x++)a[g]===1?h[f++]=c[g]:h[f++]=l[g];return e.makeTensorInfo(i.shape,u,h)}var Lb={kernelName:As,backendName:"cpu",kernelFunc:x3};var y3=B.SELU_SCALEALPHA,_3=B.SELU_SCALE,v3=zt(uc,n=>n>=0?_3*n:y3*(Math.exp(n)-1)),Ub={kernelName:uc,backendName:"cpu",kernelFunc:v3};var S3=zt(hc,n=>n<0?-1:n>0?1:0),Ob={kernelName:hc,backendName:"cpu",kernelFunc:S3};var b3=zt("Sin",n=>Math.sin(n)),Bb={kernelName:"Sin",backendName:"cpu",kernelFunc:b3};var M3=zt(lo,n=>Math.sinh(n)),zb={kernelName:lo,backendName:"cpu",kernelFunc:M3};var w3=11920928955078125e-23,Gb=Math.log(w3)+2,T3=zt(fc,n=>{let t=n>-Gb,e=n<Gb,r=Math.exp(n),i;return e?i=r:t?i=n:i=Math.log(1+r),i}),Vb={kernelName:fc,backendName:"cpu",kernelFunc:T3};function E3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{blockShape:o,paddings:s}=r;ot([i],"spaceToBatchND");let a=T.sizeFromShape(o),c=[[0,0]];c.push(...s);for(let b=1+o.length;b<i.shape.length;++b)c.push([0,0]);let l=af.kernelFunc({inputs:{x:i},backend:e,attrs:{paddings:c,constantValue:0}}),u=B.getReshaped(l.shape,o,a,!1),h=B.getPermuted(u.length,o.length,!1),f=B.getReshapedPermuted(l.shape,o,a,!1),x=ie({inputs:{x:l},backend:e,attrs:{shape:u}}),v=Pe({inputs:{x},backend:e,attrs:{perm:h}}),S=ie({inputs:{x:v},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(v),S}var Hb={kernelName:Cs,backendName:"cpu",kernelFunc:E3};function A3(n){let{inputs:t,backend:e}=n,{indices:r,values:i,denseShape:o,defaultValue:s}=t;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(r.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(i.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${i.shape}`);if(s.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${s.shape}`);let a=e.data.get(r.dataId).values,c=e.data.get(i.dataId).values,l=e.data.get(o.dataId).values,u=e.data.get(s.dataId).values[0],[h,f,p,g,x]=fv(a,r.shape,r.dtype,c,i.dtype,l,u);return[e.makeTensorInfo(f,r.dtype,h),e.makeTensorInfo([f[0]],i.dtype,p),e.makeTensorInfo([g.length],"bool",new Uint8Array(g.map(m=>Number(m)))),e.makeTensorInfo([x.length],r.dtype,new Int32Array(x))]}var Wb={kernelName:Bx,backendName:"cpu",kernelFunc:A3};function I3(n){let{inputs:t,backend:e}=n,{inputIndices:r,inputShape:i,newShape:o}=t;if(r.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(i.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${i.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);let s=Array.from(e.data.get(i.dataId).values),a=e.data.get(r.dataId).values,c=Array.from(e.data.get(o.dataId).values),[l,u,h]=pv(a,r.shape,r.dtype,s,c);return[e.makeTensorInfo(u,r.dtype,l),e.makeTensorInfo([h.length],o.dtype,new Int32Array(h))]}var $b={kernelName:zx,backendName:"cpu",kernelFunc:I3};function C3(n){let{inputs:t,backend:e}=n,{data:r,indices:i,segmentIds:o}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(i.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${i.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(i.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");let s=e.data.get(r.dataId).values,a=e.data.get(i.dataId).values,c=e.data.get(o.dataId).values,[l,u]=nf(s,r.shape,r.dtype,a,c,!0);return e.makeTensorInfo(u,r.dtype,l)}var qb={kernelName:Gx,backendName:"cpu",kernelFunc:C3};function R3(n){let{inputs:t,backend:e}=n,{data:r,indices:i,segmentIds:o}=t;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(i.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${i.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(i.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");let s=e.data.get(r.dataId).values,a=e.data.get(i.dataId).values,c=e.data.get(o.dataId).values,[l,u]=nf(s,r.shape,r.dtype,a,c);return e.makeTensorInfo(u,r.dtype,l)}var Xb={kernelName:Vx,backendName:"cpu",kernelFunc:R3};function N3(n){let{inputs:t,backend:e,attrs:r}=n,{sparseIndices:i,sparseValues:o,defaultValue:s}=t,{outputShape:a}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:h,outputSize:f}=B.calculateShapes(o,i,a),p=!1,g=e.bufferSync(i),x;switch(o.dtype){case"bool":{let m=e.bufferSync(o),d=!!e.data.get(s.dataId).values[0];x=Yr(g,m,a,f,u,l,c,h,d,p);break}case"float32":{let m=e.bufferSync(o),d=e.data.get(s.dataId).values[0];x=Yr(g,m,a,f,u,l,c,h,d,p);break}case"int32":{let m=e.bufferSync(o),d=e.data.get(s.dataId).values[0];x=Yr(g,m,a,f,u,l,c,h,d,p);break}case"string":{let m=e.bufferSync(o),d=T.decodeString(e.data.get(s.dataId).values[0]);x=Yr(g,m,a,f,u,l,c,h,d,p);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return e.makeTensorInfo(a,x.dtype,x.values)}var Kb={kernelName:Hx,backendName:"cpu",kernelFunc:N3};function D3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{numOrSizeSplits:o,axis:s}=r,a=T.parseAxisParam(s,i.shape)[0],c=B.prepareSplitSize(i,o,a),l=new Array(i.shape.length).fill(0),u=i.shape.slice();return c.map(h=>{let f=[...u];f[a]=h;let p=rr({inputs:{x:i},backend:e,attrs:{begin:l,size:f}});return l[a]+=h,p})}var Yb={kernelName:Rs,backendName:"cpu",kernelFunc:D3};var Zb={kernelName:ph,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{let{x:e}=n,r=t;ot(e,"square");let i=r.data.get(e.dataId).values,o=new Float32Array(i.length);for(let a=0;a<i.length;++a){let c=i[a];o[a]=c*c}return{dataId:r.write(o,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};var P3=zt(fo,(n,t)=>{let e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),Jb={kernelName:fo,backendName:"cpu",kernelFunc:P3};function F3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{begin:o,end:s,strides:a,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:f}=r;ot(i,"stridedSlice");let{finalShapeSparse:p,finalShape:g,isIdentity:x,sliceDim0:m,isSimpleSlice:d,begin:v,end:_,strides:y}=Qn.sliceInfo(i.shape,o,s,a,c,l,u,h,f),S;if(x)S=ie({inputs:{x:i},backend:e,attrs:{shape:g}});else if(m||d){T.assert(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let b=Qn.computeOutShape(v,_,y),E=rr({inputs:{x:i},backend:e,attrs:{begin:v,size:b}});S=ie({inputs:{x:E},backend:e,attrs:{shape:g}}),e.disposeIntermediateTensorInfo(E)}else{let b=e.bufferSync(i),E=xv(p,b,y,v);S=e.makeTensorInfo(g,E.dtype,E.values)}return S}var jb={kernelName:Wx,backendName:"cpu",kernelFunc:F3};function k3(n){let{inputs:t,backend:e,attrs:r}=n,{separator:i,nGramWidths:o,leftPad:s,rightPad:a,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:h}=t,f=e.data.get(u.dataId).values,p=e.data.get(h.dataId).values,[g,x]=yv(f,p,i,o,s,a,c,l);return[e.makeTensorInfo([g.length],"string",g),e.makeTensorInfo(h.shape,"int32",x)]}var Qb={kernelName:$x,backendName:"cpu",kernelFunc:k3};function L3(n){let{inputs:t,backend:e,attrs:r}=n,{skipEmpty:i}=r,{input:o,delimiter:s}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(s.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${s.shape}`);let a=e.data.get(o.dataId).values,c=e.data.get(s.dataId).values[0],[l,u,h]=_v(a,c,i),f=u.length;return[e.makeTensorInfo([f,2],"int32",l),e.makeTensorInfo([f],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}var tM={kernelName:qx,backendName:"cpu",kernelFunc:L3};function U3(n){let{inputs:t,backend:e,attrs:r}=n,{numBuckets:i}=r,{input:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(i<=0)throw new Error("Number of buckets must be at least 1");let s=e.data.get(o.dataId).values,a=vv(s,i);return e.makeTensorInfo(o.shape,"int32",a)}var eM={kernelName:Xx,backendName:"cpu",kernelFunc:U3};var O3=zt("Tan",n=>Math.tan(n)),nM={kernelName:"Tan",backendName:"cpu",kernelFunc:O3};var B3=zt(dc,n=>Math.tanh(n)),rM={kernelName:dc,backendName:"cpu",kernelFunc:B3};function z3(n){let{inputs:t,backend:e}=n,{tensor:r,indices:i,updates:o}=t,{sliceRank:s,numUpdates:a,sliceSize:c,strides:l,outputSize:u}=B.calculateShapes(o,i,r.shape),h=!1,f=e.bufferSync(i),p=e.bufferSync(o),g=e.bufferSync(r),x=Yr(f,p,r.shape,u,c,a,s,l,g,h);return e.makeTensorInfo(r.shape,x.dtype,x.values)}var iM={kernelName:Ux,backendName:"cpu",kernelFunc:z3};function G3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{reps:o}=r;ot(i,"tile");let s=bv(e.bufferSync(i),o);return e.makeTensorInfo(s.shape,s.dtype,s.values)}var oM={kernelName:xi,backendName:"cpu",kernelFunc:G3};function V3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i}=t,{k:o,sorted:s}=r;ot(i,"topk");let a=e.data.get(i.dataId).values,[c,l]=wv(a,i.shape,i.dtype,o,s);return[e.makeTensorInfo(c.shape,c.dtype,c.values),e.makeTensorInfo(l.shape,l.dtype,l.values)]}var sM={kernelName:Kx,backendName:"cpu",kernelFunc:V3};function H3(n){let{inputs:t,attrs:e,backend:r}=n,{image:i,transforms:o}=t,{interpolation:s,fillMode:a,fillValue:c,outputShape:l}=e,[u,h,f,p]=i.shape,[g,x]=l??[h,f],m=[u,g,x,p],d=T.computeStrides(i.shape),v=d[0],_=d[1],y=d[2],S=T.computeStrides(m),b=S[0],E=S[1],R=S[2],w=T.getTypedArrayFromDType(i.dtype,T.sizeFromShape(m));w.fill(c);let M=r.data.get(i.dataId).values,C=r.data.get(o.dataId).values;for(let F=0;F<u;++F){let L=o.shape[0]===1?C:C.subarray(F*8,F*8+8);for(let U=0;U<g;++U)for(let O=0;O<x;++O)for(let V=0;V<p;++V){let k,W=L[6]*O+L[7]*U+1;if(W===0)continue;let j=(L[0]*O+L[1]*U+L[2])/W,et=(L[3]*O+L[4]*U+L[5])/W,at=aM(j,f,a),ct=aM(et,h,a);switch(s){case"nearest":k=K3(M,h,f,v,_,y,F,ct,at,V,c);break;case"bilinear":k=Y3(M,h,f,v,_,y,F,ct,at,V,c);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${s}`)}let pt=F*b+U*E+O*R+V;w[pt]=k}return r.makeTensorInfo(m,i.dtype,w)}return{dataId:r.write(w,m,i.dtype),shape:i.shape,dtype:i.dtype}}var cM={kernelName:Yx,backendName:"cpu",kernelFunc:H3};function aM(n,t,e){switch(e){case"reflect":return W3(n,t);case"wrap":return $3(n,t);case"nearest":return X3(n,t);case"constant":default:return q3(n,t)}}function W3(n,t){let e=n;if(e<0)if(t<=1)e=0;else{let r=2*t;e<r&&(e=r*Math.trunc(-e/r)+e),e=e<-t?e+r:-e-1}else if(e>t-1)if(t<=1)e=0;else{let r=2*t;e-=r*Math.trunc(e/r),e>=t&&(e=r-e-1)}return T.clamp(0,e,t-1)}function $3(n,t){let e=n;if(e<0)if(t<=1)e=0;else{let r=t-1;e+=t*(Math.trunc(-e/r)+1)}else if(e>t-1)if(t<=1)e=0;else{let r=t-1;e-=t*Math.trunc(e/r)}return T.clamp(0,e,t-1)}function q3(n,t){return n}function X3(n,t){return T.clamp(0,n,t-1)}function kc(n,t,e,r,i,o,s,a,c,l,u){let h=s*r+a*i+c*o+l;return 0<=a&&a<t&&0<=c&&c<e?n[h]:u}function K3(n,t,e,r,i,o,s,a,c,l,u){let h=Math.round(a),f=Math.round(c);return kc(n,t,e,r,i,o,s,h,f,l,u)}function Y3(n,t,e,r,i,o,s,a,c,l,u){let h=Math.floor(a),f=Math.floor(c),p=h+1,g=f+1,x=(g-c)*kc(n,t,e,r,i,o,s,h,f,l,u)+(c-f)*kc(n,t,e,r,i,o,s,h,g,l,u),m=(g-c)*kc(n,t,e,r,i,o,s,p,f,l,u)+(c-f)*kc(n,t,e,r,i,o,s,p,g,l,u);return(p-a)*x+(a-h)*m}function Z3(n){let{inputs:t,attrs:e,backend:r}=n,{axis:i}=e,{x:o}=t;ot(o,"unique");let s=r.data.get(o.dataId).values,{outputValues:a,outputShape:c,indices:l}=Tv(s,i,o.shape,o.dtype);return[r.makeTensorInfo(c,o.dtype,a),r.makeTensorInfo([l.length],"int32",l)]}var lM={kernelName:Zx,backendName:"cpu",kernelFunc:Z3};function J3(n){let{inputs:t,backend:e,attrs:r}=n,{value:i}=t,{axis:o}=r;o<0&&(o+=i.shape.length);let s=i.shape.length,a=i.shape[o],c=new Array(s-1),l=0;for(let p=0;p<s;p++)p!==o&&(c[l++]=i.shape[p]);let u=new Array(s).fill(0),h=i.shape.slice();h[o]=1;let f=new Array(a);for(let p=0;p<f.length;p++){u[o]=p;let g=rr({inputs:{x:i},backend:e,attrs:{begin:u,size:h}});f[p]=ie({inputs:{x:g},backend:e,attrs:{shape:c}}),e.disposeIntermediateTensorInfo(g)}return f}var uM={kernelName:Ns,backendName:"cpu",kernelFunc:J3};function j3(n){let{inputs:t,backend:e,attrs:r}=n,{x:i,segmentIds:o}=t,{numSegments:s}=r;ot(i,"unsortedSegmentSum");let a=i.shape.length,c=o.shape.length,l=[],u=[],h=a-c,f=o;for(let g=0;g<h;++g){let x=ta({inputs:{input:f},backend:e,attrs:{dim:g+1}});f=x,u.push(x)}for(let g=0;g<s;++g){let x=T.createScalarValue(g,"int32"),m=e.makeTensorInfo([],"int32",x),d=Bd({inputs:{a:m,b:f},backend:e}),v=er({inputs:{x:d},backend:e,attrs:{dtype:"float32"}}),_=To({inputs:{a:v,b:i},backend:e}),y=Zr({inputs:{x:_},backend:e,attrs:{axis:0,keepDims:!1}});l.push(y),u.push(m),u.push(d),u.push(v),u.push(_),u.push(y)}let p=im({inputs:l,backend:e,attrs:{axis:0}});return u.forEach(g=>e.disposeIntermediateTensorInfo(g)),p}var hM={kernelName:Ds,backendName:"cpu",kernelFunc:j3};var Q3=[Pv,w_,Fv,kv,C_,Lv,Uv,Ov,Bv,zv,Gv,Vv,Hv,Wv,$v,Xv,Kv,Yv,Zv,Dv,Jv,jv,Qv,N_,tS,I_,D_,eS,T_,nS,iS,oS,sS,aS,cS,lS,uS,hS,fS,pS,dS,mS,gS,xS,yS,_S,vS,SS,bS,MS,wS,TS,AS,Ev,IS,F_,CS,k_,RS,L_,NS,DS,PS,U_,O_,FS,kS,LS,US,G_,V_,E_,OS,rS,BS,zS,GS,Av,H_,W_,VS,q_,HS,WS,$S,qS,KS,YS,JS,K_,jS,QS,tb,eb,rb,ib,sb,Y_,ab,cb,hb,Z_,J_,fb,pb,db,j_,mb,yb,_b,af,vb,Iv,tv,Sb,bb,Mb,wb,A_,Dc,Tb,Cv,Rv,Nv,Eb,Ab,Ib,Cb,Rb,Nb,Db,lv,Pb,kb,Lb,Ub,uv,Ob,Bb,zb,hv,lb,Vb,Hb,Wb,$b,qb,Xb,Kb,Yb,dv,Zb,mv,gv,Jb,jb,Qb,tM,eM,Sv,ES,nM,rM,iM,oM,sM,cM,Q_,lM,uM,hM,gb];for(let n of Q3)n0(n);var cf={kernelName:"Abs",inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,Mi(Pt(e,"float32"),-1))}}};var fM={kernelName:Ba,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>{let r=se(Pt(e,"float32")),i=$e(_e(fe(1),r));return ze(Yt(n,i))}}}};var pM={kernelName:za,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>{let r=$e(_e(se(Pt(e,"float32")),1));return Yt(n,r)}}}};var dM={kernelName:"Add",inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=n,c=we(e.shape,i);return c.length>0&&(a=ce(a,c)),yt(a,e.shape)},b:()=>{let a=n,c=we(r.shape,i);return c.length>0&&(a=ce(a,c)),yt(a,r.shape)}}}};var mM={kernelName:Ru,saveAllInputs:!0,gradFunc:(n,t)=>{let e={};return t.forEach((r,i)=>{e[i]=()=>n.clone()}),e}};var gM={kernelName:Nu,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>$t(e)}}};var xM={kernelName:Du,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>$t(e)}}};var yM={kernelName:Ga,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,$e(_e(fe(1),se(Pt(e,"float32")))))}}};var _M={kernelName:Va,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>{let r=$e(Kt(fe(1),se(Pt(e,"float32"))));return Yt(n,r)}}}};var vM={kernelName:$a,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=Kt(se(e),se(r)),c=Q(n,Yt(r,a)),l=we(e.shape,i);return l.length>0&&(c=ce(c,l)),yt(c,e.shape)},b:()=>{let a=Kt(se(e),se(r)),c=ze(Q(n,Yt(e,a))),l=we(r.shape,i);return l.length>0&&(c=ce(c,l)),yt(c,r.shape)}}}};var SM={kernelName:Ha,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,Kt(se(Pt(e,"float32")),1))}}};var bM={kernelName:Wa,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,_e(fe(1),se(Pt(e,"float32"))))}}};function tL(n,t,e,r,i,o){let s=Z(n,"dy","avgPool3dGrad"),a=Z(t,"input","avgPool3dGrad"),c=s,l=a,u=!1;a.rank===4&&(u=!0,c=yt(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),l=yt(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),Y(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),Y(l.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),yn("avgPool3dGrad",i,o);let h={dy:c,input:l},f={filterSize:e,strides:r,pad:i,dimRoundingMode:o},p=z.runKernel(Lu,h,f);return u?yt(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var MM=tt({avgPool3dGrad_:tL});var wM={kernelName:ku,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{filterSize:i,strides:o,pad:s,dimRoundingMode:a}=e;return{x:()=>MM(n,r,i,o,s,a)}}};function eL(n,t,e,r,i){let o=Z(n,"dy","avgPoolGrad"),s=Z(t,"input","avgPoolGrad");Y(s.rank===o.rank,()=>`Rank of input (${s.rank}) does not match rank of dy (${o.rank})`);let a=s,c=o,l=!1;s.rank===3&&(l=!0,a=yt(s,[1,s.shape[0],s.shape[1],s.shape[2]]),c=yt(o,[1,o.shape[0],o.shape[1],o.shape[2]])),Y(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),Y(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);let u={dy:c,input:a},h={filterSize:e,strides:r,pad:i},f=z.runKernel(Fu,u,h);return l?yt(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var TM=tt({avgPoolGrad_:eL});var EM={kernelName:Pu,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{filterSize:i,strides:o,pad:s}=e;return{x:()=>TM(n,r,i,o,s)}}};var AM={kernelName:fs,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{let[r,i]=t,{transposeA:o,transposeB:s}=e;return!o&&!s?{a:()=>qr(n,i,!1,!0),b:()=>qr(r,n,!0,!1)}:!o&&s?{a:()=>qr(n,i,!1,!1),b:()=>qr(n,r,!0,!1)}:o&&!s?{a:()=>qr(i,n,!1,!0),b:()=>qr(r,n,!1,!1)}:{a:()=>qr(i,n,!0,!0),b:()=>qr(n,r,!0,!0)}}};var IM={kernelName:ps,gradFunc:(n,t,e)=>{let{blockShape:r,crops:i}=e;return{x:()=>by(n,r,i)}}};var CM={kernelName:dx,gradFunc:(n,t,e)=>{let r=e,i=r.inputShape,o=r.shape,s=Array.from(o);for(let c=i.length-1;c>=0;c--)if(i[c]===o[c])s[c]=1;else if(i[c]!==1)throw new Error(`broadcastTo(): [${i}] cannot be broadcast to [${o}].`);let a=[];for(let c=0;c<s.length;c++)s[c]>1&&a.push(c);return{x:()=>ce(n,a,!0)}}};var RM={kernelName:mi,gradFunc:n=>({x:()=>n.clone()})};var NM={kernelName:qa,gradFunc:n=>({x:()=>$t(n)})};var DM={kernelName:Xa,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{clipValueMin:i,clipValueMax:o}=e;return{x:()=>zn(zh(qs(r,i),Xs(r,o)),n,$t(n))}}};var PM={kernelName:ds,inputsToSave:["x"],gradFunc:cf.gradFunc};var FM={kernelName:ms,saveAllInputs:!0,gradFunc:(n,t,e)=>{let r=t.map(c=>c.shape),{axis:i}=e,o=fn(i,t[0].shape)[0],s=r.map(c=>c[o]);return Ky(n,s,o).map(c=>()=>c)}};var kM={kernelName:gs,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{let[r,i]=t,{dilations:o,strides:s,pad:a,dataFormat:c}=e;return Y($r(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>ry(r.shape,n,i,s,a,c),filter:()=>$h(r,n,i.shape,s,a,c)}}};var LM={kernelName:xs,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{let[r,i]=t,{strides:o,pad:s,dataFormat:a,dimRoundingMode:c}=e;return{dy:()=>ny(n,i,o,s,a,1,c),filter:()=>$h(n,r,i.shape,o,s,a,c)}}};function nL(n,t,e,r,i){let o=n;n.rank===4&&(o=yt(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let s=t;s.rank===4&&(s=yt(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),Y(o.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${o.shape}.`),Y(s.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${s.shape}.`),Y(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),Y(o.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${e[3]}.`),Y(s.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${s.shape[4]}) must match output depth for filter (${e[4]}).`);let a={x:o,dy:s},c={strides:r,pad:i,filterShape:e};return z.runKernel(zu,a,c)}var UM=tt({conv3DBackpropFilter_:nL});var OM={kernelName:Bu,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{let{dilations:r,strides:i,pad:o}=e;Y($r(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[s,a]=t;return{x:()=>iy(s.shape,n,a,i,o),filter:()=>UM(s,n,a.shape,i,o)}}};var BM={kernelName:"Cos",inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(ze(qy(Pt(e,"float32"))),n)}}};var zM={kernelName:Qi,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(Xy(Pt(e,"float32")),n)}}};var GM={kernelName:ys,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{axis:i,exclusive:o,reverse:s}=e;return{x:()=>{let a=yd([i],r.rank),c=sy(n,i,o,!s);return a!=null&&(c=Tr(c,a)),c}}}};var VM={kernelName:Hu,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{let{dilations:r,strides:i,pad:o,dimRoundingMode:s}=e,a=r??[1,1];Y($r(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);let[c,l]=t;return Y(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),Y(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),Y(c.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),Y(wc(i,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${i} and dilations '${a}'.`),yn("depthwiseConv2d",o,s),{x:()=>t_(c.shape,n,l,i,o,a,s),filter:()=>Qy(c,n,l.shape,i,o,a,s)}}};var HM={kernelName:qu,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{let[r,i]=t,o={x:r,filter:i,dy:n},s={x:r,filter:i,dy:n};return{x:()=>z.runKernel(Ka,o,e),filter:()=>z.runKernel(Ya,s,e)}}};var WM={kernelName:"Elu",outputsToSave:[!0],gradFunc:(n,t)=>{let[e]=t,r={dy:n,y:e};return{x:()=>z.runKernel(Xu,r)}}};var $M={kernelName:"Erf",inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t,r=Q(bi(ze(se(e))),2/Math.sqrt(Math.PI));return{x:()=>Q(n,r)}}};var qM={kernelName:"Exp",outputsToSave:[!0],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,e)}}};var XM={kernelName:_s,inputsToSave:["input"],gradFunc:(n,t)=>{let[e]=t;return{input:()=>yt(n,e.shape)}}};var KM={kernelName:Ja,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,bi(e))}}};var YM={kernelName:eo,gradFunc:n=>({x:()=>$t(n)})};var ZM={kernelName:no,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=Yt(n,Pt(r,"float32")),c=we(e.shape,i);return c.length>0?yt(ce(a,c),e.shape):a},b:()=>{let a=Q(n,Pt(e,"float32")),c=we(r.shape,i);c.length>0&&(a=yt(ce(a,c),r.shape));let l=se(r);return ze(Yt(a,Pt(l,"float32")))}}}};var JM={kernelName:Yu,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{let{varianceEpsilon:r}=e,[i,o,s,a]=t,c=a??fe(1),l=we(o.shape,i.shape),u=[];if(o.rank===1){for(let y=0;y<i.shape.length-1;++y)u.push(i.shape[y]);u.push(1)}let h=_e(i,o),f=Q(n,c),p=$y(Kt(s,fe(r))),g=Q(Q(Q(p,p),p),fe(-.5));return{x:()=>o.rank===1?yt(Q(Q(n,py(yt(p,[1,1,1,o.shape[0]]),u)),c),i.shape):yt(Q(Q(n,p),c),i.shape),mean:()=>{let y=Q(Q(p,fe(-1)),f);return o.rank===1&&(y=ce(y,l)),yt(y,o.shape)},variance:()=>{let y=Q(Q(g,h),f);return o.rank===1&&(y=ce(y,l)),yt(y,o.shape)},scale:()=>{let y=Q(h,p),S=Q(n,y);return o.rank===1&&(S=ce(S,l)),yt(S,o.shape)},offset:()=>{let y=n;return o.rank===1&&(y=ce(y,l)),yt(y,o.shape)}}}};var tw={kernelName:vs,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{let[r,i]=t,{axis:o,batchDims:s}=e,a=fn(o,r.shape)[0],c=(l,u,h)=>()=>{let f=l.shape,p=u.size,g=f.slice(0,a),x=g.length,m=f.slice(o,f.length).slice(1),d=m.length,v=jM(0,x),_=jM(x+1,x+1+d),y=QM([g,[p],m]),S=yt(h,y),b=yt(u,[p]),E=QM([[x],v,_]),R=Tr(S,E),w=Zy(R,b,l.shape[a]),M=Ec(E);return w=Tr(w,M),w};if(s===1){let l=r.shape[0],u=r.split(l,0);return{x:()=>Wh(u.map((p,g)=>c(p,i.slice(g,1),n.slice(g,1))())).reshape(r.shape),indices:()=>i}}else return{x:c(r,i,n),indices:()=>i}}};function jM(n,t){let e=[];for(let r=n;r<t;++r)e.push(r);return e}function QM(n){let t=[];for(let e=0;e<n.length;++e)for(let r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var ew={kernelName:ro,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t;return{a:()=>$t(e),b:()=>$t(r)}}};var nw={kernelName:gi,gradFunc:n=>({x:()=>Pt(n,"float32")})};var rw={kernelName:Qa,gradFunc:n=>({x:()=>$t(n)})};var iw={kernelName:tc,gradFunc:n=>({x:()=>$t(n)})};var ow={kernelName:ec,gradFunc:n=>({x:()=>$t(n)})};var sw={kernelName:Ss,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{alpha:i}=e,o=wr(r,0);return{x:()=>zn(o,n,Q(n,i))}}};var aw={kernelName:ic,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,Kt(e,1))}}};var cw={kernelName:"Log",inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,Pt(e,"float32"))}}};var lw={kernelName:Ex,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{let[r]=t,{axis:i}=e;return{logits:()=>{let s=bi(r);return _e(n,Q(ce(n,i,!0),s))}}}};function rL(n,t,e,r=5,i=1,o=1,s=.5){let a={x:n,y:t,dy:e},c={depthRadius:r,bias:i,alpha:o,beta:s};return z.runKernel(Ju,a,c)}var uw=tt({localResponseNormalizationBackprop_:rL});var hw={kernelName:"LRN",inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{let[r,i]=t,{depthRadius:o,bias:s,alpha:a,beta:c}=e;return{x:()=>uw(r,i,n,o,s,a,c)}}};function lf(n,t,e,r){return t.rank<e.rank&&(t=yt(t,kh(t.shape,r))),n.rank<e.rank&&(n=yt(n,kh(n.shape,r))),{x:()=>Q(n,Pt(cy(e,t),n.dtype))}}var sm={kernelName:"Max",inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{let r=e,{reductionIndices:i}=r,o=t[0],s=t[1],a=fn(i,o.shape),c=lf(n,s,o,a);return{x:()=>c.x()}}};var fw={kernelName:io,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t;return{a:()=>Q(n,Pt(qs(e,r),"float32")),b:()=>Q(n,Pt(yy(e,r),"float32"))}}};function iL(n,t,e,r,i,o,s){let a=Z(n,"dy","maxPool3dGrad"),c=Z(t,"input","maxPool3dGrad"),l=Z(e,"output","maxPool3dGrad"),u=a,h=c,f=l,p=!1;c.rank===4&&(p=!0,u=yt(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=yt(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=yt(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),Y(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),Y(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),Y(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),yn("maxPool3dGrad",o,s);let g={dy:u,input:h,output:f},x={filterSize:r,strides:i,pad:o,dimRoundingMode:s},m=z.runKernel(eh,g,x);return p?yt(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var pw=tt({maxPool3dGrad_:iL});var dw={kernelName:th,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{let[r,i]=t,{filterSize:o,strides:s,pad:a,dimRoundingMode:c}=e;return{x:()=>pw(n,r,i,o,s,a,c)}}};function oL(n,t,e,r,i,o,s){let a=Z(n,"dy","maxPoolGrad"),c=Z(t,"input","maxPoolGrad"),l=Z(e,"output","maxPoolGrad");Y(c.rank===a.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${a.rank})`),Y(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),Y(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),yn("maxPoolGrad",o,s);let u={dy:a,input:c,output:l},h={filterSize:r,strides:i,pad:o,dimRoundingMode:s};return z.runKernel(Qu,u,h)}var mw=tt({maxPoolGrad_:oL});var gw={kernelName:ju,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{let[r,i]=t,{filterSize:o,strides:s,pad:a}=e;return{x:()=>mw(n,r,i,o,s,a)}}};var xw={kernelName:nh,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{axis:i}=e,o=fn(i,r.shape),a=xd(r.shape,o)[1],c=Ce(a);return{x:()=>{let u=r.shape.slice();o.forEach(p=>{u[p]=1});let h=yt(n,u);return Yt(Q(h,bo(r.shape,"float32")),c)}}}};var yw={kernelName:"Min",inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{let r=e,{axis:i}=r,[o,s]=t,a=fn(i,o.shape),c=lf(n,s,o,a);return{x:()=>c.x()}}};var _w={kernelName:ac,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t;return{a:()=>Q(n,Pt(Xs(e,r),"float32")),b:()=>Q(n,Pt(wr(e,r),"float32"))}}};var vw={kernelName:rh,inputsToSave:["x"],gradFunc:(n,t,e)=>{let r=t[0],{paddings:i}=e,o=i.map(s=>s[0]);return{x:()=>Xr(n,o,r.shape)}}};var Sw={kernelName:"Mod",inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=we(e.shape,i);return a.length>0?yt(ce(n,a),e.shape):n},b:()=>{let a=Q(n,ze(dy(Yt(e,r)))),c=we(r.shape,i);return c.length>0?yt(ce(a,c),r.shape):a}}}};var bw={kernelName:oo,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=Q(n,Pt(r,"float32")),c=we(e.shape,i);return c.length>0?yt(ce(a,c),e.shape):a},b:()=>{let a=Q(n,Pt(e,"float32")),c=we(r.shape,i);return c.length>0?yt(ce(a,c),r.shape):a}}}};var Mw={kernelName:"Neg",gradFunc:n=>({x:()=>ze(n)})};var ww={kernelName:oh,inputsToSave:["indices"],gradFunc:(n,t)=>{let e=t[0];return{indices:()=>Ks(e.shape,"float32")}}};var Tw={kernelName:ih,gradFunc:n=>({x:()=>$t(n)})};var Ew={kernelName:bs,saveAllInputs:!0,gradFunc:(n,t,e)=>{let{axis:r}=e;return Jy(n,r).map(o=>()=>o)}};var am={kernelName:Ms,inputsToSave:["x"],gradFunc:(n,t,e)=>{let r=t[0],{paddings:i}=e,o=i.map(s=>s[0]);return{x:()=>Xr(n,o,r.shape)}}};var Aw={kernelName:"Pow",inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{let[e,r,i]=t,o=e,s=r,a=ye(o.shape,s.shape);return{a:()=>{let u=Pt(s,"float32"),h=Q(n,Q(u,So(o,_e(u,fe(1))))),f=we(o.shape,a);return f.length>0&&(h=ce(h,f)),yt(h,o.shape)},b:()=>{let u=wr(o,0),h=zn(u,_y(o),$t(o)),f=Q(n,Q(i,h)),p=we(s.shape,a);return p.length>0&&(f=ce(f,p)),yt(f,s.shape)}}}};var Iw={kernelName:ws,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{let[e,r]=t,i=wr(e,0);return{x:()=>zn(i,n,Q(n,r)),alpha:()=>{let o=zn(i,$t(n),Q(n,e)),s=we(r.shape,n.shape);return s.length>0&&(o=ce(o,s)),yt(o,r.shape)}}}};function sL(n,t,e){let r=n.shape.slice();r[e]=1;let i=yt(t,r),o=md(n,e,!0,!1),s=md(n,e,!0,!0),a=Q(o,s);return Q(i,a)}function aL(n,t,e){let r=n.shape.length,i=r-e.length,o=B.getAxesPermutation(e,r),s=n;o!=null&&(s=Tr(n,o));let a=s.shape.slice(),l=a.splice(r-e.length,e.length).reduce((f,p)=>f*p,1);a.push(l);let u=s.reshape(a),h=sL(u,t,i);if(h=h.reshape(s.shape),o!=null){let f=B.getUndoAxesPermutation(o);h=Tr(h,f)}return h}var Cw={kernelName:sh,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{axis:i}=e,o=[];return i==null?o=r.shape.map((s,a)=>a):typeof i=="number"?o=[i]:o=i,{x:()=>aL(r,n,o)}}};var Rw={kernelName:to,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=Yt(n,Pt(r,"float32")),c=we(e.shape,i);return c.length>0?yt(ce(a,c),e.shape):a},b:()=>{let a=Q(n,Pt(e,"float32")),c=we(r.shape,i);c.length>0&&(a=yt(ce(a,c),r.shape));let l=se(r);return ze(Yt(a,Pt(l,"float32")))}}}};var Nw={kernelName:cc,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,ze(se(e)))}}};var Dw={kernelName:ao,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t,r=Q(Xs(e,6),Mi(e));return{x:()=>Q(n,Pt(r,"float32"))}}};var Pw={kernelName:so,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,Pt(Mi(e),"float32"))}}};var Fw={kernelName:Ts,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>yt(n,e.shape)}}};var kw={kernelName:uh,inputsToSave:["images"],gradFunc:(n,t,e)=>{let[r]=t,i={dy:n,images:r};return{images:()=>z.runKernel(hh,i,e)}}};var Lw={kernelName:ch,inputsToSave:["images"],gradFunc:(n,t,e)=>{let[r]=t,i={dy:n,images:r};return{images:()=>z.runKernel(lh,i,e)}}};var Uw={kernelName:Es,gradFunc:(n,t,e)=>{let{dims:r}=e,i=fn(r,n.shape);return{x:()=>Wy(n,i)}}};var Ow={kernelName:lc,gradFunc:n=>({x:()=>$t(n)})};var Bw={kernelName:co,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>ze(Yt(n,Q(So(e,1.5),2)))}}};var zw={kernelName:As,inputsToSave:["condition"],gradFunc:(n,t)=>{let[e]=t;return{condition:()=>Pt($t(e),"float32"),t:()=>Q(n,Pt(e,n.dtype)),e:()=>Q(n,Pt(vy(e),n.dtype))}}};var Gw={kernelName:uc,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>{let r=wr(e,fe(0)),i=fe(kd),o=fe(Ld),s=Q(n,o),a=Q(Q(n,i),bi(Pt(e,"float32")));return zn(r,s,a)}}}};var Vw={kernelName:uo,outputsToSave:[!0],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,Q(e,_e(fe(1),e)))}}};var Hw={kernelName:hc,gradFunc:n=>({x:()=>$t(n)})};var Ww={kernelName:"Sin",inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(Fh(Pt(e,"float32")),n)}}};var $w={kernelName:lo,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(oy(Pt(e,"float32")),n)}}};var qw={kernelName:Is,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{begin:i,size:o}=e,s=r.shape,[a,c]=Fd(r,i,o),l=[];for(let u=0;u<n.rank;u++)l.push([a[u],s[u]-a[u]-c[u]]);return{x:()=>Sy(n,l)}}};var Xw={kernelName:fh,outputsToSave:[!0],gradFunc:(n,t,e)=>{let[r]=t,{dim:i}=e,o=!0,s=Q(n,r);return{logits:()=>_e(s,Q(ce(s,[i],o),r))}}};var Kw={kernelName:fc,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,Dh(e))}}};var cm={kernelName:Cs,gradFunc:(n,t,e)=>{let{blockShape:r,paddings:i}=e;return{x:()=>ty(n,r,i)}}};var lm={kernelName:Rs,gradFunc:(n,t,e)=>{let{axis:r}=e;return{x:()=>Q0(n,r)}}};var Yw={kernelName:ho,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,Q($e(Pt(e,"float32")),2))}}};var Zw={kernelName:ph,inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(n,Q(Pt(e,"float32"),2))}}};var Jw={kernelName:pc,inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=fe(2);return{a:()=>Q(n,Q(i,_e(e,r))),b:()=>Q(n,Q(i,_e(r,e)))}}};var jw={kernelName:fo,gradFunc:n=>({x:()=>$t(n)})};var Qw={kernelName:"Sub",inputsToSave:["a","b"],gradFunc:(n,t)=>{let[e,r]=t,i=ye(e.shape,r.shape);return{a:()=>{let a=n,c=we(e.shape,i);return c.length>0&&(a=ce(a,c)),yt(a,e.shape)},b:()=>{let a=n,c=we(r.shape,i);return c.length>0&&(a=ce(a,c)),yt(ze(a),r.shape)}}}};var tT={kernelName:"Sum",inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,i=r.shape.slice(),{axis:o}=e;fn(o,r.shape).forEach(l=>{i[l]=1});let a=yt(n,i),c=Q(a,bo(r.shape,"float32"));return{x:()=>c}}};var eT={kernelName:"Tan",inputsToSave:["x"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Yt(n,se(Fh(e)))}}};var nT={kernelName:dc,outputsToSave:[!0],gradFunc:(n,t)=>{let[e]=t;return{x:()=>Q(_e(fe(1),se(e)),n)}}};var rT={kernelName:xi,inputsToSave:["x"],gradFunc:(n,t,e)=>{let[r]=t,{reps:i}=e;return{x:()=>{let s=$t(r);if(r.rank===1)for(let a=0;a<i[0];++a)s=Kt(s,Xr(n,[a*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let a=0;a<i[0];++a)for(let c=0;c<i[1];++c)s=Kt(s,Xr(n,[a*r.shape[0],c*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let a=0;a<i[0];++a)for(let c=0;c<i[1];++c)for(let l=0;l<i[2];++l)s=Kt(s,Xr(n,[a*r.shape[0],c*r.shape[1],l*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let a=0;a<i[0];++a)for(let c=0;c<i[1];++c)for(let l=0;l<i[2];++l)for(let u=0;u<i[3];++u)s=Kt(s,Xr(n,[a*r.shape[0],c*r.shape[1],l*r.shape[2],u*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return s}}}};var iT={kernelName:yi,gradFunc:(n,t,e)=>{let r=e,{perm:i}=r,o=Ec(i);return{x:()=>Tr(n,o)}}};var oT={kernelName:Ns,gradFunc:(n,t,e)=>{let r=e,{axis:i}=r;return{value:()=>Wh(n,i)}}};var sT={kernelName:Ds,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{let[e]=t;return{x:()=>cL(n,e)}}};function cL(n,t){let e=Gh(t,$t(t)),r=my(n,e),i=qs(t,fe(0,"int32")),o=r.rank-i.rank;for(let a=0;a<o;++a)i=fy(i,a+1);i=zh(i,bo(r.shape,"bool"));let s=$t(r);return zn(i,r,s)}var aT={kernelName:Ps,gradFunc:n=>({x:()=>$t(n)})};var lL=[cf,fM,pM,dM,mM,gM,xM,yM,_M,vM,SM,bM,wM,EM,AM,IM,CM,RM,NM,DM,PM,FM,LM,kM,OM,BM,zM,GM,VM,HM,Rw,WM,$M,qM,XM,KM,ZM,YM,JM,tw,ew,nw,rw,iw,ow,sw,aw,cw,lw,hw,sm,sm,fw,dw,gw,xw,yw,_w,vw,Sw,bw,Mw,ww,Tw,Ew,am,am,Aw,Iw,Cw,Nw,Dw,Pw,Fw,kw,Lw,Uw,Ow,Bw,zw,Gw,Vw,Hw,Ww,$w,qw,Xw,Kw,cm,cm,lm,lm,Yw,Jw,Zw,jw,Qw,tT,eT,nT,rT,iT,oT,sT,aT];for(let n of lL)r0(n);(async()=>{await D0("cpu"),await P0();let n=v=>ce(Q(se(v),wo([1,-1]))),t=vd(n),e=v=>be(()=>({point:[...v],loss:n(wo(v)).dataSync()[0],gradient:Array.from(t(wo(v)).dataSync())})),r=[],i="",o,s,a,c,l,u,h=document.querySelector("#scene"),f=document.querySelector("#x"),p=document.querySelector("#y");function g(){o&&o.render(s,a)}try{o=new wu({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(devicePixelRatio,2)),h.append(o.domElement),s=new _a,s.background=new xe("#f4f7f7"),a=new cn(48,1,.1,100),c=new Au(a,o.domElement),c.enablePan=!1,c.enableZoom=!1,c.addEventListener("change",g);let v=new Oi(4,4,36,36),_=v.attributes.position,y=[];for(let b=0;b<_.count;b++){let E=_.getX(b),R=_.getY(b),w=E*E-R*R;_.setXYZ(b,E,w/2,R);let M=new xe(w>=0?"#719e83":"#d4a16e");y.push(M.r,M.g,M.b)}v.setAttribute("color",new ln(y,3)),v.computeVertexNormals(),s.add(new un(v,new Or({vertexColors:!0,side:Kn,transparent:!0,opacity:.7}))),s.add(new un(v,new Or({color:7506308,wireframe:!0,transparent:!0,opacity:.18}))),l=new Sa(new Ln,new Yo({color:11876444,depthTest:!1,transparent:!0})),l.renderOrder=2,s.add(l),u=new un(new wa(.08,20,16),new Or({color:11876444,depthTest:!1,transparent:!0})),u.renderOrder=3,s.add(u);let S=()=>{a.position.set(5,4,6),c.target.set(0,0,0),c.update(),g()};document.querySelector("#reset").onclick=S,new ResizeObserver(()=>{let b=h.clientWidth,E=h.clientHeight;o.setSize(b,E),a.aspect=b/E,a.zoom=Math.min(1,a.aspect)*1.05,a.updateProjectionMatrix(),g()}).observe(h),S()}catch{o&&(o.dispose(),o.domElement.remove()),o=null,document.querySelector("#fallback").hidden=!1,document.querySelector("#reset").disabled=!0}function x(){let v=r.at(-1);window.saddle={initial:r[0].point,eta:.1,path:r,stop:i},document.querySelector("#stats").textContent="Step "+(r.length-1)+": ( "+v.point.map(_=>_.toFixed(4)).join(", ")+" ). f = "+v.loss.toFixed(5)+". Gradient norm = "+Math.hypot(...v.gradient).toFixed(5)+". "+i;for(let _ of["step","eight"])document.getElementById(_).disabled=!!i;o&&(l.geometry.dispose(),l.geometry=new Ln().setFromPoints(r.map(_=>new K(_.point[0],_.loss/2,_.point[1]))),u.position.set(v.point[0],v.loss/2,v.point[1]),g())}function m(){document.querySelector("#xv").textContent=Number(f.value).toFixed(2),document.querySelector("#yv").textContent=Number(p.value).toFixed(2),r=[e([Number(f.value),Number(p.value)])],i="",x()}function d(){if(i)return;let v=r.at(-1),_=be(()=>Array.from(_e(wo(v.point),Q(wo(v.gradient),.1)).dataSync()));_.some(y=>Math.abs(y)>2)?i="Display boundary reached; no further update applied.":(r.push(e(_)),r.length>=51&&(i="50-step display limit reached.")),x()}f.oninput=m,p.oninput=m,document.querySelector("#step").onclick=d,document.querySelector("#eight").onclick=()=>{for(let v=0;v<8;v++)d()};for(let[v,_,y]of[["saddle",0,0],["stable",.8,0],["escape",.8,.1]])document.getElementById(v).onclick=()=>{f.value=_,p.value=y,m()};document.querySelector("#export").onclick=()=>{let v=URL.createObjectURL(new Blob([JSON.stringify(window.saddle,null,2)],{type:"application/json"})),_=document.createElement("a");_.href=v,_.download="saddle-path.json",_.click(),setTimeout(()=>URL.revokeObjectURL(v),1e3)},m()})();})();
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
@tensorflow/tfjs-core/dist/ops/complex.js:
@tensorflow/tfjs-core/dist/ops/clone.js:
@tensorflow/tfjs-core/dist/ops/add.js:
@tensorflow/tfjs-core/dist/ops/floorDiv.js:
@tensorflow/tfjs-core/dist/ops/div.js:
@tensorflow/tfjs-core/dist/ops/mul.js:
@tensorflow/tfjs-core/dist/ops/conv_util.js:
@tensorflow/tfjs-core/dist/ops/reshape.js:
@tensorflow/tfjs-core/dist/ops/concat.js:
@tensorflow/tfjs-core/dist/ops/mat_mul.js:
@tensorflow/tfjs-core/dist/ops/batch_to_space_nd.js:
@tensorflow/tfjs-core/dist/ops/broadcast_to.js:
@tensorflow/tfjs-core/dist/ops/fill.js:
@tensorflow/tfjs-core/dist/ops/conv2d.js:
@tensorflow/tfjs-core/dist/ops/conv2d_backprop_input.js:
@tensorflow/tfjs-core/dist/ops/conv3d_backprop_input.js:
@tensorflow/tfjs-core/dist/ops/equal.js:
@tensorflow/tfjs-core/dist/ops/where.js:
@tensorflow/tfjs-core/dist/ops/elu.js:
@tensorflow/tfjs-core/dist/ops/pow.js:
@tensorflow/tfjs-core/dist/ops/expand_dims.js:
@tensorflow/tfjs-core/dist/ops/tile.js:
@tensorflow/tfjs-core/dist/ops/greater.js:
@tensorflow/tfjs-core/dist/ops/greater_equal.js:
@tensorflow/tfjs-core/dist/ops/imag.js:
@tensorflow/tfjs-core/dist/ops/leaky_relu.js:
@tensorflow/tfjs-core/dist/ops/less.js:
@tensorflow/tfjs-core/dist/ops/less_equal.js:
@tensorflow/tfjs-core/dist/ops/sub.js:
@tensorflow/tfjs-core/dist/ops/logical_and.js:
@tensorflow/tfjs-core/dist/ops/logical_not.js:
@tensorflow/tfjs-core/dist/ops/maximum.js:
@tensorflow/tfjs-core/dist/ops/pad.js:
@tensorflow/tfjs-core/dist/ops/space_to_batch_nd.js:
@tensorflow/tfjs-core/dist/ops/prelu.js:
@tensorflow/tfjs-core/dist/ops/real.js:
@tensorflow/tfjs-core/dist/ops/relu.js:
@tensorflow/tfjs-core/dist/ops/relu6.js:
@tensorflow/tfjs-core/dist/ops/split.js:
@tensorflow/tfjs-core/dist/ops/stack.js:
@tensorflow/tfjs-core/dist/ops/unsorted_segment_sum.js:
@tensorflow/tfjs-core/dist/ops/unstack.js:
@tensorflow/tfjs-core/dist/ops/conv2d_backprop_filter.js:
@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_filter.js:
@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_input.js:
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
@tensorflow/tfjs-core/dist/gradients/Abs_grad.js:
@tensorflow/tfjs-core/dist/gradients/Acos_grad.js:
@tensorflow/tfjs-core/dist/gradients/Acosh_grad.js:
@tensorflow/tfjs-core/dist/gradients/Add_grad.js:
@tensorflow/tfjs-core/dist/gradients/AddN_grad.js:
@tensorflow/tfjs-core/dist/gradients/Asin_grad.js:
@tensorflow/tfjs-core/dist/gradients/Asinh_grad.js:
@tensorflow/tfjs-core/dist/gradients/Atan2_grad.js:
@tensorflow/tfjs-core/dist/gradients/Atan_grad.js:
@tensorflow/tfjs-core/dist/gradients/Atanh_grad.js:
@tensorflow/tfjs-core/dist/ops/avg_pool_3d_grad.js:
@tensorflow/tfjs-core/dist/gradients/AvgPool3D_grad.js:
@tensorflow/tfjs-core/dist/ops/avg_pool_grad.js:
@tensorflow/tfjs-core/dist/gradients/AvgPool_grad.js:
@tensorflow/tfjs-core/dist/gradients/BatchMatMul_grad.js:
@tensorflow/tfjs-core/dist/gradients/BatchToSpaceND_grad.js:
@tensorflow/tfjs-core/dist/gradients/BroadcastTo_grad.js:
@tensorflow/tfjs-core/dist/gradients/Cast_grad.js:
@tensorflow/tfjs-core/dist/gradients/Ceil_grad.js:
@tensorflow/tfjs-core/dist/gradients/ClipByValue_grad.js:
@tensorflow/tfjs-core/dist/gradients/ComplexAbs_grad.js:
@tensorflow/tfjs-core/dist/gradients/Concat_grad.js:
@tensorflow/tfjs-core/dist/gradients/Conv2D_grad.js:
@tensorflow/tfjs-core/dist/gradients/Conv2DBackpropInput_grad.js:
@tensorflow/tfjs-core/dist/ops/conv3d_backprop_filter.js:
@tensorflow/tfjs-core/dist/gradients/Conv3D_grad.js:
@tensorflow/tfjs-core/dist/gradients/Cos_grad.js:
@tensorflow/tfjs-core/dist/gradients/Cosh_grad.js:
@tensorflow/tfjs-core/dist/gradients/Cumsum_grad.js:
@tensorflow/tfjs-core/dist/gradients/DepthwiseConv2dNative_grad.js:
@tensorflow/tfjs-core/dist/gradients/Dilation2D_grad.js:
@tensorflow/tfjs-core/dist/gradients/Elu_grad.js:
@tensorflow/tfjs-core/dist/gradients/Erf_grad.js:
@tensorflow/tfjs-core/dist/gradients/Exp_grad.js:
@tensorflow/tfjs-core/dist/gradients/ExpandDims_grad.js:
@tensorflow/tfjs-core/dist/gradients/Expm1_grad.js:
@tensorflow/tfjs-core/dist/gradients/Floor_grad.js:
@tensorflow/tfjs-core/dist/gradients/FloorDiv_grad.js:
@tensorflow/tfjs-core/dist/gradients/FusedBatchNorm_grad.js:
@tensorflow/tfjs-core/dist/gradients/GatherV2_grad.js:
@tensorflow/tfjs-core/dist/gradients/GreaterEqual_grad.js:
@tensorflow/tfjs-core/dist/gradients/Identity_grad.js:
@tensorflow/tfjs-core/dist/gradients/IsFinite_grad.js:
@tensorflow/tfjs-core/dist/gradients/IsInf_grad.js:
@tensorflow/tfjs-core/dist/gradients/IsNan_grad.js:
@tensorflow/tfjs-core/dist/gradients/LeakyRelu_grad.js:
@tensorflow/tfjs-core/dist/gradients/Log1p_grad.js:
@tensorflow/tfjs-core/dist/gradients/Log_grad.js:
@tensorflow/tfjs-core/dist/gradients/LogSoftmax_grad.js:
@tensorflow/tfjs-core/dist/ops/local_response_normalization_backprop.js:
@tensorflow/tfjs-core/dist/gradients/LRN_grad.js:
@tensorflow/tfjs-core/dist/gradients/min_max_grad_util.js:
@tensorflow/tfjs-core/dist/gradients/Max_grad.js:
@tensorflow/tfjs-core/dist/gradients/Maximum_grad.js:
@tensorflow/tfjs-core/dist/ops/max_pool_3d_grad.js:
@tensorflow/tfjs-core/dist/gradients/MaxPool3D_grad.js:
@tensorflow/tfjs-core/dist/ops/max_pool_grad.js:
@tensorflow/tfjs-core/dist/gradients/MaxPool_grad.js:
@tensorflow/tfjs-core/dist/gradients/Mean_grad.js:
@tensorflow/tfjs-core/dist/gradients/Min_grad.js:
@tensorflow/tfjs-core/dist/gradients/Minimum_grad.js:
@tensorflow/tfjs-core/dist/gradients/MirrorPad_grad.js:
@tensorflow/tfjs-core/dist/gradients/Mod_grad.js:
@tensorflow/tfjs-core/dist/gradients/Multiply_grad.js:
@tensorflow/tfjs-core/dist/gradients/Neg_grad.js:
@tensorflow/tfjs-core/dist/gradients/OneHot_grad.js:
@tensorflow/tfjs-core/dist/gradients/OnesLike_grad.js:
@tensorflow/tfjs-core/dist/gradients/Pack_grad.js:
@tensorflow/tfjs-core/dist/gradients/PadV2_grad.js:
@tensorflow/tfjs-core/dist/gradients/Pow_grad.js:
@tensorflow/tfjs-core/dist/gradients/Prelu_grad.js:
@tensorflow/tfjs-core/dist/gradients/RealDiv_grad.js:
@tensorflow/tfjs-core/dist/gradients/Reciprocal_grad.js:
@tensorflow/tfjs-core/dist/gradients/Relu6_grad.js:
@tensorflow/tfjs-core/dist/gradients/Relu_grad.js:
@tensorflow/tfjs-core/dist/gradients/ResizeBilinear_grad.js:
@tensorflow/tfjs-core/dist/gradients/ResizeNearestNeighbor_grad.js:
@tensorflow/tfjs-core/dist/gradients/Reverse_grad.js:
@tensorflow/tfjs-core/dist/gradients/Round_grad.js:
@tensorflow/tfjs-core/dist/gradients/Rsqrt_grad.js:
@tensorflow/tfjs-core/dist/gradients/Select_grad.js:
@tensorflow/tfjs-core/dist/gradients/Selu_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sigmoid_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sign_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sin_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sinh_grad.js:
@tensorflow/tfjs-core/dist/gradients/Slice_grad.js:
@tensorflow/tfjs-core/dist/gradients/Softmax_grad.js:
@tensorflow/tfjs-core/dist/gradients/Softplus_grad.js:
@tensorflow/tfjs-core/dist/gradients/SpaceToBatchND_grad.js:
@tensorflow/tfjs-core/dist/gradients/SplitV_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sqrt_grad.js:
@tensorflow/tfjs-core/dist/gradients/SquaredDifference_grad.js:
@tensorflow/tfjs-core/dist/gradients/Step_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sub_grad.js:
@tensorflow/tfjs-core/dist/gradients/Tan_grad.js:
@tensorflow/tfjs-core/dist/gradients/Tanh_grad.js:
@tensorflow/tfjs-core/dist/gradients/Tile_grad.js:
@tensorflow/tfjs-core/dist/gradients/Transpose_grad.js:
@tensorflow/tfjs-core/dist/gradients/UnsortedSegmentSum_grad.js:
@tensorflow/tfjs-core/dist/gradients/ZerosLike_grad.js:
@tensorflow/tfjs-core/dist/register_all_gradients.js:
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
@tensorflow/tfjs-core/dist/ops/slice.js:
@tensorflow/tfjs-core/dist/ops/cos.js:
@tensorflow/tfjs-core/dist/ops/cosh.js:
@tensorflow/tfjs-core/dist/ops/cumsum.js:
@tensorflow/tfjs-core/dist/ops/zeros_like.js:
@tensorflow/tfjs-core/dist/ops/scalar.js:
@tensorflow/tfjs-core/dist/ops/sqrt.js:
@tensorflow/tfjs-core/dist/ops/sum.js:
@tensorflow/tfjs-core/dist/ops/exp.js:
@tensorflow/tfjs-core/dist/ops/floor.js:
@tensorflow/tfjs-core/dist/ops/gather.js:
@tensorflow/tfjs-core/dist/ops/log.js:
@tensorflow/tfjs-core/dist/gradients.js:
@tensorflow/tfjs-core/dist/ops/neg.js:
@tensorflow/tfjs-core/dist/ops/zeros.js:
@tensorflow/tfjs-core/dist/ops/ones.js:
@tensorflow/tfjs-core/dist/ops/reverse.js:
@tensorflow/tfjs-core/dist/ops/rsqrt.js:
@tensorflow/tfjs-core/dist/ops/sin.js:
@tensorflow/tfjs-core/dist/ops/sinh.js:
@tensorflow/tfjs-core/dist/ops/step.js:
@tensorflow/tfjs-core/dist/ops/tensor1d.js:
@tensorflow/tfjs-core/dist/backends/where_impl.js:
@tensorflow/tfjs-core/dist/ops/transpose.js:
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
@tensorflow/tfjs-core/dist/gradients/Square_grad.js:
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
@tensorflow/tfjs-core/dist/gradients/ArgMax_grad.js:
@tensorflow/tfjs-core/dist/gradients/ArgMin_grad.js:
@tensorflow/tfjs-core/dist/gradients/Reshape_grad.js:
@tensorflow/tfjs-core/dist/gradients/Sum_grad.js:
@tensorflow/tfjs-core/dist/gradients/Unpack_grad.js:
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

@tensorflow/tfjs-core/dist/ops/cumprod.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an 'AS IS' BASIS,
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

@tensorflow/tfjs-core/dist/gradients/Prod_grad.js:
  (**
   * @license
   * Copyright 2022 Google Inc. All Rights Reserved.
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
*/
