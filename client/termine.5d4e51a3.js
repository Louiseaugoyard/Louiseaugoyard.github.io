import{S as e,i as t,s,M as a,c as n,j as r,n as l,p as i,r as c,u as o,v as u,e as h,b as g,g as d,d as f,k as v,m,t as p,a as b,h as E,f as k,l as z,o as H,F as $,w as M,x as T,C as L,Q as w,E as j,z as P}from"./client.87543f1d.js";function S(e,t,s){const a=e.slice();return a[7]=t[s],a[9]=s,a}function y(e,t,s){const a=e.slice();return a[7]=t[s],a[9]=s,a}function A(e){let t,s,a,n,r,l,i,c,o,u,$,M=e[7].title+"",T=e[2](e[7].date,e[0].language)+"",L=e[7].location+"",j=e[7].description[e[0].language]+"";return{c(){t=h("li"),s=h("h2"),a=p(M),n=b(),r=h("p"),l=p(T),i=p(", "),o=b(),u=h("p"),$=b(),this.h()},l(e){t=g(e,"LI",{class:!0});var c=d(t);s=g(c,"H2",{class:!0});var h=d(s);a=E(h,M),h.forEach(f),n=k(c),r=g(c,"P",{class:!0});var v=d(r);l=E(v,T),i=E(v,", "),v.forEach(f),o=k(c),u=g(c,"P",{class:!0}),d(u).forEach(f),$=k(c),c.forEach(f),this.h()},h(){v(s,"class","event-list--title svelte-kiduzh"),c=new w(null),v(r,"class","event-list--time-location svelte-kiduzh"),v(u,"class","event-list--description svelte-kiduzh"),v(t,"class","event-list--item svelte-kiduzh")},m(e,h){m(e,t,h),z(t,s),z(s,a),z(t,n),z(t,r),z(r,l),z(r,i),c.m(L,r),z(t,o),z(t,u),u.innerHTML=j,z(t,$)},p(e,t){1&t&&T!==(T=e[2](e[7].date,e[0].language)+"")&&H(l,T),1&t&&j!==(j=e[7].description[e[0].language]+"")&&(u.innerHTML=j)},d(e){e&&f(t)}}}function I(e){let t,s,a,n,r,l,i,c,o,u,$,M=e[7].title+"",T=e[2](e[7].date,e[0].language)+"",L=e[7].location+"",j=e[7].description[e[0].language]+"";return{c(){t=h("li"),s=h("h2"),a=p(M),n=b(),r=h("p"),l=p(T),i=p(", "),o=b(),u=h("p"),$=b(),this.h()},l(e){t=g(e,"LI",{class:!0});var c=d(t);s=g(c,"H2",{class:!0});var h=d(s);a=E(h,M),h.forEach(f),n=k(c),r=g(c,"P",{class:!0});var v=d(r);l=E(v,T),i=E(v,", "),v.forEach(f),o=k(c),u=g(c,"P",{class:!0}),d(u).forEach(f),$=k(c),c.forEach(f),this.h()},h(){v(s,"class","event-list--title svelte-kiduzh"),c=new w(null),v(r,"class","event-list--time-location svelte-kiduzh"),v(u,"class","event-list--description svelte-kiduzh"),v(t,"class","event-list--item svelte-kiduzh")},m(e,h){m(e,t,h),z(t,s),z(s,a),z(t,n),z(t,r),z(r,l),z(r,i),c.m(L,r),z(t,o),z(t,u),u.innerHTML=j,z(t,$)},p(e,t){1&t&&T!==(T=e[2](e[7].date,e[0].language)+"")&&H(l,T),1&t&&j!==(j=e[7].description[e[0].language]+"")&&(u.innerHTML=j)},d(e){e&&f(t)}}}function x(e){let t,s,a,n,r,l,i,c,o,u,w,P,x,D,F,C,J,R,U,G,O=e[1].title[e[0].language]+"",V=e[1].intro[e[0].language]+"",B=e[3].length>0&&function(e){let t,s=e[3],a=[];for(let t=0;t<s.length;t+=1)a[t]=A(y(e,s,t));return{c(){t=h("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=g(e,"UL",{class:!0});var s=d(t);for(let e=0;e<a.length;e+=1)a[e].l(s);s.forEach(f),this.h()},h(){v(t,"class","event-list")},m(e,s){m(e,t,s);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(e,n){if(13&n){let r;for(s=e[3],r=0;r<s.length;r+=1){const l=y(e,s,r);a[r]?a[r].p(l,n):(a[r]=A(l),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}},d(e){e&&f(t),$(a,e)}}}(e),K=e[4].length>0&&function(e){let t,s,a,n,r=e[1].pastEventsHeading[e[0].language]+"",l=e[4],i=[];for(let t=0;t<l.length;t+=1)i[t]=I(S(e,l,t));return{c(){t=h("h2"),s=p(r),a=b(),n=h("ul");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=g(e,"H2",{class:!0});var l=d(t);s=E(l,r),l.forEach(f),a=k(e),n=g(e,"UL",{class:!0});var c=d(n);for(let e=0;e<i.length;e+=1)i[e].l(c);c.forEach(f),this.h()},h(){v(t,"class","event-list--section-heading svelte-kiduzh"),v(n,"class","event-list past-events svelte-kiduzh")},m(e,r){m(e,t,r),z(t,s),m(e,a,r),m(e,n,r);for(let e=0;e<i.length;e+=1)i[e].m(n,null)},p(e,t){if(1&t&&r!==(r=e[1].pastEventsHeading[e[0].language]+"")&&H(s,r),21&t){let s;for(l=e[4],s=0;s<l.length;s+=1){const a=S(e,l,s);i[s]?i[s].p(a,t):(i[s]=I(a),i[s].c(),i[s].m(n,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=l.length}},d(e){e&&f(t),e&&f(a),e&&f(n),$(i,e)}}}(e);return{c(){t=h("img"),a=b(),n=h("h1"),r=p(O),l=b(),i=h("p"),c=b(),o=h("div"),u=h("picture"),w=h("source"),P=b(),x=h("source"),D=b(),F=h("img"),R=b(),U=h("div"),B&&B.c(),G=b(),K&&K.c(),this.h()},l(e){t=g(e,"IMG",{class:!0,src:!0,alt:!0}),a=k(e),n=g(e,"H1",{});var s=d(n);r=E(s,O),s.forEach(f),l=k(e),i=g(e,"P",{id:!0,class:!0}),d(i).forEach(f),c=k(e),o=g(e,"DIV",{id:!0,class:!0});var h=d(o);u=g(h,"PICTURE",{id:!0,class:!0});var v=d(u);w=g(v,"SOURCE",{srcset:!0}),P=k(v),x=g(v,"SOURCE",{srcset:!0}),D=k(v),F=g(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(f),R=k(h),U=g(h,"DIV",{id:!0,class:!0});var m=d(U);B&&B.l(m),G=k(m),K&&K.l(m),m.forEach(f),h.forEach(f),this.h()},h(){v(t,"class","pic-mobile"),t.src!==(s="/images/events-mobile.jpg")&&v(t,"src","/images/events-mobile.jpg"),v(t,"alt","Louise Augoyard steht neben ihrer Harfe."),v(i,"id","events-intro"),v(i,"class","svelte-kiduzh"),v(w,"srcset","/images/events-512.jpg 512w"),v(x,"srcset","/images/events-1024.jpg 2x"),F.src!==(C="/images/events-1024.jpg")&&v(F,"src","/images/events-1024.jpg"),v(F,"class","pic-desktop"),v(F,"alt","Louise Augoyard steht neben ihrer Harfe."),v(u,"id","events-picture"),v(u,"class","svelte-kiduzh"),v(U,"id","events-text"),v(U,"class","svelte-kiduzh"),v(o,"id","events-container"),v(o,"class","svelte-kiduzh")},m(e,s){m(e,t,s),m(e,a,s),m(e,n,s),z(n,r),m(e,l,s),m(e,i,s),i.innerHTML=V,m(e,c,s),m(e,o,s),z(o,u),z(u,w),z(u,P),z(u,x),z(u,D),z(u,F),z(o,R),z(o,U),B&&B.m(U,null),z(U,G),K&&K.m(U,null)},p(e,t){1&t&&O!==(O=e[1].title[e[0].language]+"")&&H(r,O),1&t&&V!==(V=e[1].intro[e[0].language]+"")&&(i.innerHTML=V),e[3].length>0&&B.p(e,t),e[4].length>0&&K.p(e,t)},i(e){J||M(()=>{J=T(F,j,{}),J.start()})},o:L,d(e){e&&f(t),e&&f(a),e&&f(n),e&&f(l),e&&f(i),e&&f(c),e&&f(o),B&&B.d(),K&&K.d()}}}function D(e){let t,s;return t=new a({props:{$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,a){l(t,e,a),s=!0},p(e,[s]){const a={};2049&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){s||(i(t.$$.fragment,e),s=!0)},o(e){c(t.$$.fragment,e),s=!1},d(e){o(t,e)}}}function F(e,t,s){let a;u(e,P,e=>s(0,a=e));const n={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{date:new Date(2021,3,3,20),title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},r={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};let l=[],i=[];for(let e of n.events)e.date.getTime()>(new Date).getTime()?l.push(e):i.push(e);return l.sort((e,t)=>e.date.getTime()-t.date.getTime()),i.sort((e,t)=>t.date.getTime()-e.date.getTime()),[a,n,(e,t="de")=>{let s=String(e.getDate());return"de"==t&&(s+="."),s+=` ${r[t][e.getMonth()-1]} ${e.getFullYear()}, ${e.getHours()}`,e.getMinutes()?s+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(s+="h"),"de"==t&&(s+=" Uhr"),s},l,i]}export default class extends e{constructor(e){super(),t(this,e,F,D,s,{})}}
