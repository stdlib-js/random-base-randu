// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,s=function(t,e,n){var r,l,s,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,e)||c.call(t,e)?(r=t.__proto__,t.__proto__=o,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(t,e,n.get),y&&u&&u.call(t,e,n.set),t},y=r,p=s,v=(l=n()?y:p,l);var d=function(t,e,n){v(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},h=d,g=l;var E=function(t,e,n){g(t,e,{configurable:!1,enumerable:!1,get:n})},b=E,m=l;var w=function(t,e,n,r){m(t,e,{configurable:!1,enumerable:!1,get:n,set:r})},A=w;var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return _&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,N=T;var M=function(t){return N.call(t)},j=Object.prototype.hasOwnProperty;var P=function(t,e){return null!=t&&j.call(t,e)},R="function"==typeof Symbol?Symbol.toStringTag:"",L=P,I=R,S=T;var U=M,x=function(t){var e,n,r;if(null==t)return S.call(t);n=t[I],e=L(t,I);try{t[I]=void 0}catch(e){return S.call(t)}return r=S.call(t),e?t[I]=n:delete t[I],r},B=O()?x:U,Y=B;var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Y(t)},V=F;var G=function(t){return"object"==typeof t&&null!==t&&!V(t)},X=/./;var C=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var z=B,q=function(t){try{return k.call(t),!0}catch(t){return!1}},J=O();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(J?q(t):"[object Boolean]"===z(t)))},H=C,K=D;var Q=h,W=function(t){return H(t)||K(t)},Z=D;Q(W,"isPrimitive",C),Q(W,"isObject",Z);var $=W;var tt=function(){return new Function("return this;")()},et="object"==typeof self?self:null,nt="object"==typeof window?window:null,rt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ot="object"==typeof rt?rt:null;module.exports=ot;var it=$.isPrimitive,at=tt,ut=et,ft=nt,ct=t(Object.freeze({__proto__:null}));var lt=function(t){if(arguments.length){if(!it(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return at()}if(ut)return ut;if(ft)return ft;if(ct)return ct;throw new Error("unexpected error. Unable to resolve global object.")},st=lt(),yt=st.document&&st.document.childNodes,pt=Int8Array,vt=X,dt=yt,ht=pt;var gt=function(){return"function"==typeof vt||"object"==typeof ht||"function"==typeof dt};var Et=function(){return/^\s*function\s*([^(]*)/i},bt=Et;h(bt,"REGEXP",Et());var mt=bt,wt=F;var At=function(t){return null!==t&&"object"==typeof t};h(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!wt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(At));var _t=At;var Ot=B,Tt=mt.REGEXP,Nt=function(t){return _t(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Mt=function(t){var e,n,r;if(("Object"===(n=Ot(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Tt.exec(r.toString()))return e[1]}return Nt(t)?"Buffer":n},jt=Mt,Pt=jt;var Rt=function(t){var e;return null===t?"null":"object"===(e=typeof t)?Pt(t).toLowerCase():e},Lt=jt;var It=Rt,St=function(t){return Lt(t).toLowerCase()},Ut=gt()?St:It;var xt=function(t){return"function"===Ut(t)},Bt=Object.getPrototypeOf;var Yt=function(t){return t.__proto__},Ft=B,Vt=Yt;var Gt=function(t){var e=Vt(t);return e||null===e?e:"[object Function]"===Ft(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Xt=Bt,Ct=Gt,kt=xt(Object.getPrototypeOf)?Xt:Ct;var zt=function(t){return null==t?null:(t=Object(t),kt(t))},qt=G,Jt=xt,Dt=zt,Ht=P,Kt=B,Qt=Object.prototype;var Wt=function(t){var e;return!!qt(t)&&(!(e=Dt(t))||!Ht(t,"constructor")&&Ht(e,"constructor")&&Jt(e.constructor)&&"[object Function]"===Kt(e.constructor)&&Ht(e,"isPrototypeOf")&&Jt(e.isPrototypeOf)&&(e===Qt||function(t){var e;for(e in t)if(!Ht(t,e))return!1;return!0}(t)))},Zt=Wt;var $t=function(){};var te=xt,ee=mt.REGEXP,ne=function(){return"foo"===$t.name}();var re=function(t){if(!1===te(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return ne?t.name:ee.exec(t.toString())[1]},oe=B,ie="function"==typeof Float64Array;var ae="function"==typeof Float64Array?Float64Array:null,ue=function(t){return ie&&t instanceof Float64Array||"[object Float64Array]"===oe(t)},fe=ae;var ce=function(){var t,e;if("function"!=typeof fe)return!1;try{e=new fe([1,3.14,-3.14,NaN]),t=ue(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var le="function"==typeof Float64Array?Float64Array:void 0,se=function(){throw new Error("not implemented")},ye=ce()?le:se,pe=B,ve="function"==typeof Int8Array;var de="function"==typeof Int8Array?Int8Array:null,he=function(t){return ve&&t instanceof Int8Array||"[object Int8Array]"===pe(t)},ge=de;var Ee="function"==typeof Int8Array?Int8Array:void 0,be=function(){throw new Error("not implemented")},me=function(){var t,e;if("function"!=typeof ge)return!1;try{e=new ge([1,3.14,-3.14,128]),t=he(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){t=!1}return t}()?Ee:be,we=B,Ae="function"==typeof Uint8Array;var _e="function"==typeof Uint8Array?Uint8Array:null,Oe=function(t){return Ae&&t instanceof Uint8Array||"[object Uint8Array]"===we(t)},Te=_e;var Ne="function"==typeof Uint8Array?Uint8Array:void 0,Me=function(){throw new Error("not implemented")},je=function(){var t,e;if("function"!=typeof Te)return!1;try{e=new Te(e=[1,3.14,-3.14,256,257]),t=Oe(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Ne:Me,Pe=B,Re="function"==typeof Uint8ClampedArray;var Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ie=function(t){return Re&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Pe(t)},Se=Le;var Ue="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,xe=function(){throw new Error("not implemented")},Be=function(){var t,e;if("function"!=typeof Se)return!1;try{e=new Se([-1,0,1,3.14,4.99,255,256]),t=Ie(e)&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){t=!1}return t}()?Ue:xe,Ye=B,Fe="function"==typeof Int16Array;var Ve="function"==typeof Int16Array?Int16Array:null,Ge=function(t){return Fe&&t instanceof Int16Array||"[object Int16Array]"===Ye(t)},Xe=Ve;var Ce="function"==typeof Int16Array?Int16Array:void 0,ke=function(){throw new Error("not implemented")},ze=function(){var t,e;if("function"!=typeof Xe)return!1;try{e=new Xe([1,3.14,-3.14,32768]),t=Ge(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){t=!1}return t}()?Ce:ke,qe=B,Je="function"==typeof Uint16Array;var De="function"==typeof Uint16Array?Uint16Array:null,He=function(t){return Je&&t instanceof Uint16Array||"[object Uint16Array]"===qe(t)},Ke=De;var Qe="function"==typeof Uint16Array?Uint16Array:void 0,We=function(){throw new Error("not implemented")},Ze=function(){var t,e;if("function"!=typeof Ke)return!1;try{e=new Ke(e=[1,3.14,-3.14,65536,65537]),t=He(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Qe:We,$e=B,tn="function"==typeof Int32Array;var en=function(t){return tn&&t instanceof Int32Array||"[object Int32Array]"===$e(t)},nn="function"==typeof Int32Array?Int32Array:null,rn=en,on=nn;var an="function"==typeof Int32Array?Int32Array:void 0,un=function(){throw new Error("not implemented")},fn=function(){var t,e;if("function"!=typeof on)return!1;try{e=new on([1,3.14,-3.14,2147483648]),t=rn(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){t=!1}return t}()?an:un,cn=B,ln="function"==typeof Uint32Array;var sn=function(t){return ln&&t instanceof Uint32Array||"[object Uint32Array]"===cn(t)},yn="function"==typeof Uint32Array?Uint32Array:null,pn=sn,vn=yn;var dn="function"==typeof Uint32Array?Uint32Array:void 0,hn=function(){throw new Error("not implemented")},gn=function(){var t,e;if("function"!=typeof vn)return!1;try{e=new vn(e=[1,3.14,-3.14,4294967296,4294967297]),t=pn(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?dn:hn,En=B,bn="function"==typeof Float32Array;var mn=function(t){return bn&&t instanceof Float32Array||"[object Float32Array]"===En(t)},wn=Number.POSITIVE_INFINITY,An="function"==typeof Float32Array?Float32Array:null,_n=mn,On=wn,Tn=An;var Nn="function"==typeof Float32Array?Float32Array:void 0,Mn=function(){throw new Error("not implemented")},jn=function(){var t,e;if("function"!=typeof Tn)return!1;try{e=new Tn([1,3.14,-3.14,5e40]),t=_n(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===On}catch(e){t=!1}return t}()?Nn:Mn,Pn=jt,Rn=re,Ln=zt,In=ye,Sn=[ye,jn,fn,gn,ze,Ze,me,je,Be],Un=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],xn=ce()?Ln(In):Bn;function Bn(){}xn="TypedArray"===Rn(xn)?xn:Bn;var Yn=function(t,e){if("function"!=typeof e)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return t instanceof e},Fn=jt,Vn=zt,Gn=[[ye,"Float64Array"],[jn,"Float32Array"],[fn,"Int32Array"],[gn,"Uint32Array"],[ze,"Int16Array"],[Ze,"Uint16Array"],[me,"Int8Array"],[je,"Uint8Array"],[Be,"Uint8ClampedArray"]];var Xn=function(t){var e,n;if("object"!=typeof t||null===t)return!1;if(t instanceof xn)return!0;for(n=0;n<Sn.length;n++)if(t instanceof Sn[n])return!0;for(;t;){for(e=Pn(t),n=0;n<Un.length;n++)if(Un[n]===e)return!0;t=Ln(t)}return!1},Cn=function(t){var e,n;for(n=0;n<Gn.length;n++)if(Yn(t,Gn[n][0]))return Gn[n][1];for(;t;){for(e=Fn(t),n=0;n<Gn.length;n++)if(e===Gn[n][1])return Gn[n][1];t=Vn(t)}};var kn=function(t){var e,n;if(!Xn(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((e={}).type=Cn(t),e.data=[],n=0;n<t.length;n++)e.data.push(t[n]);return e},zn={name:"mt19937",copy:!0},qn=Math.floor,Jn=qn;var Dn=function(t){return Jn(t)===t},Hn=Dn;var Kn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Hn(t.length)&&t.length>=0&&t.length<=9007199254740991};var Qn=function(t){return"number"==typeof t},Wn=Number,Zn=Wn.prototype.toString;var $n=B,tr=Wn,er=function(t){try{return Zn.call(t),!0}catch(t){return!1}},nr=O();var rr=function(t){return"object"==typeof t&&(t instanceof tr||(nr?er(t):"[object Number]"===$n(t)))},or=Qn,ir=rr;var ar=h,ur=function(t){return or(t)||ir(t)},fr=rr;ar(ur,"isPrimitive",Qn),ar(ur,"isObject",fr);var cr=ur,lr=Wn.NEGATIVE_INFINITY,sr=wn,yr=lr,pr=Dn;var vr=function(t){return t<sr&&t>yr&&pr(t)},dr=cr.isPrimitive,hr=vr;var gr=function(t){return dr(t)&&hr(t)},Er=cr.isObject,br=vr;var mr=function(t){return Er(t)&&br(t.valueOf())},wr=gr,Ar=mr;var _r=h,Or=function(t){return wr(t)||Ar(t)},Tr=mr;_r(Or,"isPrimitive",gr),_r(Or,"isObject",Tr);var Nr=Or.isPrimitive;var Mr=function(t){return Nr(t)&&t>0},jr=Or.isObject;var Pr=function(t){return jr(t)&&t.valueOf()>0},Rr=Mr,Lr=Pr;var Ir=h,Sr=function(t){return Rr(t)||Lr(t)},Ur=Pr;Ir(Sr,"isPrimitive",Mr),Ir(Sr,"isObject",Ur);var xr=Sr;var Br=function(t,e,n,r,o){var i,a,u,f;if(t<=0)return r;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)r[f]=e[f];if(t<8)return r;for(f=u;f<t;f+=8)r[f]=e[f],r[f+1]=e[f+1],r[f+2]=e[f+2],r[f+3]=e[f+3],r[f+4]=e[f+4],r[f+5]=e[f+5],r[f+6]=e[f+6],r[f+7]=e[f+7];return r}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)r[a]=e[i],i+=n,a+=o;return r};var Yr=function(t,e,n,r,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=r,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=e[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=e[u],o[f+1]=e[u+1],o[f+2]=e[u+2],o[f+3]=e[u+3],o[f+4]=e[u+4],o[f+5]=e[u+5],o[f+6]=e[u+6],o[f+7]=e[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=e[u],u+=n,f+=i;return o},Fr=Br;h(Fr,"ndarray",Yr);var Vr=Fr,Gr=qn;var Xr=function(){return 0|Gr(1+2147483646*Math.random())},Cr=h,kr=b,zr=A,qr=P,Jr=Zt,Dr=$.isPrimitive,Hr=Kn,Kr=xr.isPrimitive,Qr=en,Wr=fn,Zr=Vr,$r=kn,to=Xr;function eo(t,e){var n;return n=e?"option":"argument",t.length<6?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):2!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 2. Actual: "+t[1]+"."):1!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+1..toString()+". Actual: "+t[2]+"."):t[4]!==t.length-5?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-5)+". Actual: "+t[4]+"."):null}var no=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!Jr(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(qr(t,"copy")&&(r.copy=t.copy,!Dr(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(qr(t,"state")){if(n=t.state,r.state=!0,!Qr(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=eo(n,!0))throw a;!1===r.copy?e=n:(e=new Wr(n.length),Zr(n.length,n,1,e,1)),n=new Wr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Wr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,n[4])}if(void 0===o)if(qr(t,"seed"))if(o=t.seed,r.seed=!0,Kr(o)){if(o>2147483646)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Hr(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(e=new Wr(5+i))[0]=1,e[1]=2,e[2]=1,e[4]=i,Zr.ndarray(i,o,1,0,e,1,5),n=new Wr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Wr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,i),n[0]=o[0]}else o=0|to()}else o=0|to();return void 0===n&&((e=new Wr(6))[0]=1,e[1]=2,e[2]=1,e[4]=1,e[5]=o,n=new Wr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Wr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,1),n[0]=o[0]),Cr(v,"NAME","minstd"),kr(v,"seed",u),kr(v,"seedLength",f),zr(v,"state",s,y),kr(v,"stateLength",c),kr(v,"byteLength",l),Cr(v,"toJSON",p),Cr(v,"MIN",1),Cr(v,"MAX",2147483646),Cr(v,"normalized",d),Cr(d,"NAME",v.NAME),kr(d,"seed",u),kr(d,"seedLength",f),zr(d,"state",s,y),kr(d,"stateLength",c),kr(d,"byteLength",l),Cr(d,"toJSON",p),Cr(d,"MIN",(v.MIN-1)/2147483646),Cr(d,"MAX",(v.MAX-1)/2147483646),v;function u(){var t=e[4];return Zr(t,o,1,new Wr(t),1)}function f(){return e[4]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return Zr(t,e,1,new Wr(t),1)}function y(t){var i;if(!Qr(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=eo(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?Zr(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new Wr(t.length)),Zr(t.length,t,1,e,1)),n=new Wr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Wr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,e[4])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=$r(e),t.params=[],t}function v(){var t=0|n[0];return t=16807*t%2147483647|0,n[0]=t,0|t}function d(){return(v()-1)/2147483646}},ro=no({seed:Xr()});h(ro,"factory",no);var oo=ro;var io=function(t){return t!=t},ao=io;var uo=function(t,e,n){var r,o;for(o=0;o<8;o++)if(r=t(),ao(r))throw new Error("unexpected error. PRNG returned `NaN`.");for(o=n-1;o>=0;o--)e[o]=t();return e},fo=qn;var co=function(){return 0|fo(1+2147483646*Math.random())},lo=h,so=b,yo=A,po=P,vo=Zt,ho=$.isPrimitive,go=Kn,Eo=xr.isPrimitive,bo=en,mo=Vr,wo=qn,Ao=fn,_o=kn,Oo=uo,To=co;function No(t,e){var n;return n=e?"option":"argument",t.length<40?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):32!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible table length. Expected: 32. Actual: "+t[2]+"."):2!==t[35]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+2..toString()+". Actual: "+t[35]+"."):t[38]!==t.length-39?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-39)+". Actual: "+t[38]+"."):null}var Mo=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!vo(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(po(t,"copy")&&(r.copy=t.copy,!ho(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(po(t,"state")){if(n=t.state,r.state=!0,!bo(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=No(n,!0))throw a;!1===r.copy?e=n:(e=new Ao(n.length),mo(n.length,n,1,e,1)),n=new Ao(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new Ao(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,n[38])}if(void 0===o)if(po(t,"seed"))if(o=t.seed,r.seed=!0,Eo(o)){if(o>2147483646)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(go(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(e=new Ao(39+i))[0]=1,e[1]=3,e[2]=32,e[35]=2,e[37]=o[0],e[38]=i,mo.ndarray(i,o,1,0,e,1,39),n=new Ao(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new Ao(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,i),n=Oo(v,n,32),e[36]=n[0]}else o=0|To()}else o=0|To();return void 0===n&&((e=new Ao(40))[0]=1,e[1]=3,e[2]=32,e[35]=2,e[37]=o,e[38]=1,e[39]=o,n=new Ao(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new Ao(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,1),n=Oo(v,n,32),e[36]=n[0]),lo(d,"NAME","minstd-shuffle"),so(d,"seed",u),so(d,"seedLength",f),yo(d,"state",s,y),so(d,"stateLength",c),so(d,"byteLength",l),lo(d,"toJSON",p),lo(d,"MIN",1),lo(d,"MAX",2147483646),lo(d,"normalized",h),lo(h,"NAME",d.NAME),so(h,"seed",u),so(h,"seedLength",f),yo(h,"state",s,y),so(h,"stateLength",c),so(h,"byteLength",l),lo(h,"toJSON",p),lo(h,"MIN",(d.MIN-1)/2147483646),lo(h,"MAX",(d.MAX-1)/2147483646),d;function u(){var t=e[38];return mo(t,o,1,new Ao(t),1)}function f(){return e[38]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return mo(t,e,1,new Ao(t),1)}function y(t){var i;if(!bo(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=No(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?mo(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new Ao(t.length)),mo(t.length,t,1,e,1)),n=new Ao(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new Ao(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,e[38])}function p(){var t={type:"PRNG"};return t.name=d.NAME,t.state=_o(e),t.params=[],t}function v(){var t=0|e[37];return t=16807*t%2147483647|0,e[37]=t,0|t}function d(){var t,r;return t=e[36],r=wo(t/2147483647*32),t=n[r],e[36]=t,n[r]=v(),t}function h(){return(d()-1)/2147483646}},jo=Mo({seed:co()});h(jo,"factory",Mo);var Po=jo,Ro=wn;var Lo=function(t){return 0===t&&1/t===Ro},Io=io,So=lr,Uo=wn;var xo=qn;var Bo=function(){return xo(1+4294967294*Math.random())>>>0},Yo=h,Fo=b,Vo=A,Go=P,Xo=Zt,Co=Kn,ko=sn,zo=$.isPrimitive,qo=xr.isPrimitive,Jo=gn,Do=function(t,e){var n,r,o,i;if(2===(n=arguments.length))return Io(t)||Io(e)?NaN:t===Uo||e===Uo?Uo:t===e&&0===t?Lo(t)?t:e:t>e?t:e;for(r=So,i=0;i<n;i++){if(Io(o=arguments[i])||o===Uo)return o;(o>r||o===r&&0===o&&Lo(o))&&(r=o)}return r},Ho=function(t,e){var n,r;return((n=(65535&(t>>>=0))>>>0)*(r=(65535&(e>>>=0))>>>0)>>>0)+((t>>>16>>>0)*r+n*(e>>>16>>>0)<<16>>>0)>>>0},Ko=Vr,Qo=kn,Wo=Bo,Zo=624,$o=[0,2567483615];function ti(t,e){var n;return n=e?"option":"argument",t.length<631?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==Zo?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+Zo+". Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-630?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-630)+". Actual: "+t[629]+"."):null}function ei(t,e,n){var r;for(t[0]=n>>>0,r=1;r<e;r++)n=((n=t[r-1]>>>0)^n>>>30)>>>0,t[r]=Ho(n,1812433253)+r>>>0;return t}function ni(t,e,n,r){var o,i,a,u;for(i=1,a=0,u=Do(e,r);u>0;u--)o=t[i-1]>>>0,o=Ho(o=(o^o>>>30)>>>0,1664525)>>>0,t[i]=(t[i]>>>0^o)+n[a]+a>>>0,a+=1,(i+=1)>=e&&(t[0]=t[e-1],i=1),a>=r&&(a=0);for(u=e-1;u>0;u--)o=t[i-1]>>>0,o=Ho(o=(o^o>>>30)>>>0,1566083941)>>>0,t[i]=(t[i]>>>0^o)-i>>>0,(i+=1)>=e&&(t[0]=t[e-1],i=1);return t[0]=2147483648,t}function ri(t){var e,n;for(227,n=0;n<227;n++)e=2147483648&t[n]|2147483647&t[n+1],t[n]=t[n+397]^e>>>1^$o[1&e];for(623;n<623;n++)e=2147483648&t[n]|2147483647&t[n+1],t[n]=t[n-227]^e>>>1^$o[1&e];return e=2147483648&t[623]|2147483647&t[0],t[623]=t[396]^e>>>1^$o[1&e],t}var oi=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!Xo(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Go(t,"copy")&&(r.copy=t.copy,!zo(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Go(t,"state")){if(n=t.state,r.state=!0,!ko(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(a=ti(n,!0))throw a;!1===r.copy?e=n:(e=new Jo(n.length),Ko(n.length,n,1,e,1)),n=new Jo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Zo),o=new Jo(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,n[629])}if(void 0===o)if(Go(t,"seed"))if(o=t.seed,r.seed=!0,qo(o)){if(o>4294967295)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===Co(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!qo(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>4294967295)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(e=new Jo(630+i))[0]=1,e[1]=3,e[2]=Zo,e[627]=1,e[628]=Zo,e[629]=i,Ko.ndarray(i,o,1,0,e,1,630),n=new Jo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Zo),o=new Jo(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,i),n=ni(n=ei(n,Zo,19650218),Zo,o,i)}else o=Wo()>>>0}else o=Wo()>>>0;return void 0===n&&((e=new Jo(631))[0]=1,e[1]=3,e[2]=Zo,e[627]=1,e[628]=Zo,e[629]=1,e[630]=o,n=new Jo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Zo),o=new Jo(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,1),n=ei(n,Zo,o)),Yo(v,"NAME","mt19937"),Fo(v,"seed",u),Fo(v,"seedLength",f),Vo(v,"state",s,y),Fo(v,"stateLength",c),Fo(v,"byteLength",l),Yo(v,"toJSON",p),Yo(v,"MIN",1),Yo(v,"MAX",4294967295),Yo(v,"normalized",d),Yo(d,"NAME",v.NAME),Fo(d,"seed",u),Fo(d,"seedLength",f),Vo(d,"state",s,y),Fo(d,"stateLength",c),Fo(d,"byteLength",l),Yo(d,"toJSON",p),Yo(d,"MIN",0),Yo(d,"MAX",.9999999999999999),v;function u(){var t=e[629];return Ko(t,o,1,new Jo(t),1)}function f(){return e[629]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return Ko(t,e,1,new Jo(t),1)}function y(t){var i;if(!ko(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(i=ti(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?Ko(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new Jo(t.length)),Ko(t.length,t,1,e,1)),n=new Jo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Zo),o=new Jo(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,e[629])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=Qo(e),t.params=[],t}function v(){var t,r;return(r=e[628])>=Zo&&(n=ri(n),r=0),t=n[r],e[628]=r+1,t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0}function d(){return 11102230246251565e-32*(67108864*(v()>>>5)+(v()>>>6))}},ii=oi({seed:Bo()});h(ii,"factory",oi);var ai=ii,ui={};ui.minstd=oo,ui["minstd-shuffle"]=Po,ui.mt19937=ai;var fi=h,ci=b,li=A,si=Zt,yi=$.isPrimitive,pi=P,vi=kn,di=zn,hi=ui;var gi=function(t){var e,n,r;if(e={name:di.name,copy:di.copy},arguments.length){if(!si(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(pi(t,"name")&&(e.name=t.name),pi(t,"state")){if(e.state=t.state,void 0===e.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+e.state+"`.")}else if(pi(t,"seed")&&(e.seed=t.seed,void 0===e.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+e.seed+"`.");if(pi(t,"copy")&&(e.copy=t.copy,!yi(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.")}if(void 0===(r=hi[e.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+e.name+"`.");return n=void 0===e.state?void 0===e.seed?r.factory():r.factory({seed:e.seed}):r.factory({state:e.state,copy:e.copy}),fi(s,"NAME","randu"),ci(s,"seed",o),ci(s,"seedLength",i),li(s,"state",f,c),ci(s,"stateLength",a),ci(s,"byteLength",u),fi(s,"toJSON",l),fi(s,"PRNG",n),fi(s,"MIN",n.normalized.MIN),fi(s,"MAX",n.normalized.MAX),s;function o(){return n.seed}function i(){return n.seedLength}function a(){return n.stateLength}function u(){return n.byteLength}function f(){return n.state}function c(t){n.state=t}function l(){var t={type:"PRNG"};return t.name=s.NAME+"-"+n.NAME,t.state=vi(n.state),t.params=[],t}function s(){return n.normalized()}},Ei=gi(),bi=gi;h(Ei,"factory",bi);var mi=Ei;export{mi as default,bi as factory};
//# sourceMappingURL=mod.js.map