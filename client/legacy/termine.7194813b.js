import{_ as e,a as t,b as r,c as n,i as a,s as i,d as o,S as s,M as l,g as u,n as c,u as f,v as h,x as d,y as p,z as g,A as v,e as m,h as b,l as k,j,o as w,r as E,t as y,f as D,F as M,m as L,k as P,U as H,V as S,p as K,w as N,K as A,E as I}from"./client.63e96332.js";function G(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=t(e);if(n){var o=t(this).constructor;a=Reflect.construct(i,arguments,o)}else a=i.apply(this,arguments);return r(this,a)}}function _(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t,r){var n=e.slice();return n[12]=t[r],n[14]=r,n}function z(e,t,r){var n=e.slice();return n[9]=t[r],n[11]=r,n}function B(e,t,r){var n=e.slice();return n[12]=t[r],n[14]=r,n}function W(e,t,r){var n=e.slice();return n[9]=t[r],n[11]=r,n}function $(e){var t,r,n=e[4](e[12],e[0].language)+"";return{c:function(){t=y(n),r=y(", ")},l:function(e){t=L(e,n),r=L(e,", ")},m:function(e,n){E(e,t,n),E(e,r,n)},p:function(e,r){1&r&&n!==(n=e[4](e[12],e[0].language)+"")&&N(t,n)},d:function(e){e&&j(t),e&&j(r)}}}function F(e){for(var t,r,n,a,i,o,s,l,u,c,f,h,d=e[9].title+"",p=e[9].location+"",g=e[9].description[e[0].language]+"",v=e[9].dates,N=[],I=0;I<v.length;I+=1)N[I]=$(B(e,v,I));var G=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){var t,r,n,a;return{c:function(){t=m("a"),r=m("img"),this.h()},l:function(e){t=b(e,"A",{class:!0,href:!0});var n=k(t);r=b(n,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),n.forEach(j),this.h()},h:function(){r.src!==(n=e[3][e[9].project])&&w(r,"src",n),w(r,"width","128px"),w(r,"height","128px"),w(r,"alt",a="de"===e[0].language?"Projektinfo":"Info sur le projet"),w(r,"class","svelte-1jovf47"),w(t,"class","project-icon svelte-1jovf47"),w(t,"href",e[2][e[9].project])},m:function(e,n){E(e,t,n),K(t,r)},p:function(e,t){1&t&&a!==(a="de"===e[0].language?"Projektinfo":"Info sur le projet")&&w(r,"alt",a)},d:function(e){e&&j(t)}}}(e);return{c:function(){t=m("li"),r=m("div"),n=m("h2"),a=y(d),i=D(),o=m("p");for(var e=0;e<N.length;e+=1)N[e].c();s=M(),u=D(),c=m("p"),f=D(),G&&G.c(),h=D(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var l=k(t);r=b(l,"DIV",{class:!0});var p=k(r);n=b(p,"H2",{class:!0});var g=k(n);a=L(g,d),g.forEach(j),i=P(p),o=b(p,"P",{class:!0});for(var v=k(o),m=0;m<N.length;m+=1)N[m].l(v);s=M(),v.forEach(j),u=P(p),c=b(p,"P",{class:!0}),k(c).forEach(j),p.forEach(j),f=P(l),G&&G.l(l),h=P(l),l.forEach(j),this.h()},h:function(){w(n,"class","event-list--title svelte-1jovf47"),l=new H(null),w(o,"class","event-list--time-location svelte-1jovf47"),w(c,"class","event-list--description svelte-1jovf47"),w(r,"class","event-list--item--text svelte-1jovf47"),w(t,"class",S("event-list--item")+" svelte-1jovf47")},m:function(e,d){E(e,t,d),K(t,r),K(r,n),K(n,a),K(r,i),K(r,o);for(var v=0;v<N.length;v+=1)N[v].m(o,null);K(o,s),l.m(p,o),K(r,u),K(r,c),c.innerHTML=g,K(t,f),G&&G.m(t,null),K(t,h)},p:function(e,t){if(49&t){var r;for(v=e[9].dates,r=0;r<v.length;r+=1){var n=B(e,v,r);N[r]?N[r].p(n,t):(N[r]=$(n),N[r].c(),N[r].m(o,s))}for(;r<N.length;r+=1)N[r].d(1);N.length=v.length}1&t&&g!==(g=e[9].description[e[0].language]+"")&&(c.innerHTML=g),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&G.p(e,t)},d:function(e){e&&j(t),A(N,e),G&&G.d()}}}function x(e){var t,r,n=e[4](e[12],e[0].language)+"";return{c:function(){t=y(n),r=y(", ")},l:function(e){t=L(e,n),r=L(e,", ")},m:function(e,n){E(e,t,n),E(e,r,n)},p:function(e,r){1&r&&n!==(n=e[4](e[12],e[0].language)+"")&&N(t,n)},d:function(e){e&&j(t),e&&j(r)}}}function V(e){for(var t,r,n,a,i,o,s,l,u,c,f,h,d=e[9].title+"",p=e[9].location+"",g=e[9].description[e[0].language]+"",v=e[9].dates,S=[],N=0;N<v.length;N+=1)S[N]=x(R(e,v,N));var I=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){var t,r,n,a;return{c:function(){t=m("a"),r=m("img"),this.h()},l:function(e){t=b(e,"A",{class:!0,href:!0});var n=k(t);r=b(n,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),n.forEach(j),this.h()},h:function(){r.src!==(n=e[3][e[9].project])&&w(r,"src",n),w(r,"width","128px"),w(r,"height","128px"),w(r,"alt",a="de"===e[0].language?"Projektinfo":"Info sur le projet"),w(r,"class","svelte-1jovf47"),w(t,"class","project-icon svelte-1jovf47"),w(t,"href",e[2][e[9].project])},m:function(e,n){E(e,t,n),K(t,r)},p:function(e,t){1&t&&a!==(a="de"===e[0].language?"Projektinfo":"Info sur le projet")&&w(r,"alt",a)},d:function(e){e&&j(t)}}}(e);return{c:function(){t=m("li"),r=m("div"),n=m("h2"),a=y(d),i=D(),o=m("p");for(var e=0;e<S.length;e+=1)S[e].c();s=M(),u=D(),c=m("p"),f=D(),I&&I.c(),h=D(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var l=k(t);r=b(l,"DIV",{class:!0});var p=k(r);n=b(p,"H2",{class:!0});var g=k(n);a=L(g,d),g.forEach(j),i=P(p),o=b(p,"P",{class:!0});for(var v=k(o),m=0;m<S.length;m+=1)S[m].l(v);s=M(),v.forEach(j),u=P(p),c=b(p,"P",{class:!0}),k(c).forEach(j),p.forEach(j),f=P(l),I&&I.l(l),h=P(l),l.forEach(j),this.h()},h:function(){w(n,"class","event-list--title svelte-1jovf47"),l=new H(null),w(o,"class","event-list--time-location svelte-1jovf47"),w(c,"class","event-list--description svelte-1jovf47"),w(r,"class","event-list--item--text svelte-1jovf47"),w(t,"class","event-list--item svelte-1jovf47")},m:function(e,d){E(e,t,d),K(t,r),K(r,n),K(n,a),K(r,i),K(r,o);for(var v=0;v<S.length;v+=1)S[v].m(o,null);K(o,s),l.m(p,o),K(r,u),K(r,c),c.innerHTML=g,K(t,f),I&&I.m(t,null),K(t,h)},p:function(e,t){if(81&t){var r;for(v=e[9].dates,r=0;r<v.length;r+=1){var n=R(e,v,r);S[r]?S[r].p(n,t):(S[r]=x(n),S[r].c(),S[r].m(o,s))}for(;r<S.length;r+=1)S[r].d(1);S.length=v.length}1&t&&g!==(g=e[9].description[e[0].language]+"")&&(c.innerHTML=g),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&I.p(e,t)},d:function(e){e&&j(t),A(S,e),I&&I.d()}}}function C(e){var t,r,n,a,i,o,s,l,u,c=e[1].title[e[0].language]+"",f=e[1].intro[e[0].language]+"",h=e[5].length>0&&function(e){for(var t,r=e[5],n=[],a=0;a<r.length;a+=1)n[a]=F(W(e,r,a));return{c:function(){t=m("ul");for(var e=0;e<n.length;e+=1)n[e].c();this.h()},l:function(e){t=b(e,"UL",{class:!0});for(var r=k(t),a=0;a<n.length;a+=1)n[a].l(r);r.forEach(j),this.h()},h:function(){w(t,"class","event-list svelte-1jovf47")},m:function(e,r){E(e,t,r);for(var a=0;a<n.length;a+=1)n[a].m(t,null)},p:function(e,a){if(61&a){var i;for(r=e[5],i=0;i<r.length;i+=1){var o=W(e,r,i);n[i]?n[i].p(o,a):(n[i]=F(o),n[i].c(),n[i].m(t,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d:function(e){e&&j(t),A(n,e)}}}(e),d=e[6].length>0&&function(e){for(var t,r,n,a,i=e[1].pastEventsHeading[e[0].language]+"",o=e[6],s=[],l=0;l<o.length;l+=1)s[l]=V(z(e,o,l));return{c:function(){t=m("h2"),r=y(i),n=D(),a=m("ul");for(var e=0;e<s.length;e+=1)s[e].c();this.h()},l:function(e){t=b(e,"H2",{class:!0});var o=k(t);r=L(o,i),o.forEach(j),n=P(e),a=b(e,"UL",{class:!0});for(var l=k(a),u=0;u<s.length;u+=1)s[u].l(l);l.forEach(j),this.h()},h:function(){w(t,"class","event-list--section-heading svelte-1jovf47"),w(a,"class","event-list past-events svelte-1jovf47")},m:function(e,i){E(e,t,i),K(t,r),E(e,n,i),E(e,a,i);for(var o=0;o<s.length;o+=1)s[o].m(a,null)},p:function(e,t){if(1&t&&i!==(i=e[1].pastEventsHeading[e[0].language]+"")&&N(r,i),93&t){var n;for(o=e[6],n=0;n<o.length;n+=1){var l=z(e,o,n);s[n]?s[n].p(l,t):(s[n]=V(l),s[n].c(),s[n].m(a,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=o.length}},d:function(e){e&&j(t),e&&j(n),e&&j(a),A(s,e)}}}(e);return{c:function(){t=m("img"),r=D(),n=m("h1"),a=y(c),i=D(),o=m("p"),s=D(),l=m("div"),h&&h.c(),u=D(),d&&d.c(),this.h()},l:function(e){t=b(e,"IMG",{class:!0,src:!0,alt:!0}),r=P(e),n=b(e,"H1",{});var f=k(n);a=L(f,c),f.forEach(j),i=P(e),o=b(e,"P",{id:!0,class:!0}),k(o).forEach(j),s=P(e),l=b(e,"DIV",{id:!0,class:!0});var p=k(l);h&&h.l(p),u=P(p),d&&d.l(p),p.forEach(j),this.h()},h:function(){w(t,"class","pic-mobile"),t.src!=="/images/events-mobile.jpg"&&w(t,"src","/images/events-mobile.jpg"),w(t,"alt","Louise Augoyard steht neben ihrer Harfe."),w(o,"id","events-intro"),w(o,"class","svelte-1jovf47"),w(l,"id","events-container"),w(l,"class","svelte-1jovf47")},m:function(e,c){E(e,t,c),E(e,r,c),E(e,n,c),K(n,a),E(e,i,c),E(e,o,c),o.innerHTML=f,E(e,s,c),E(e,l,c),h&&h.m(l,null),K(l,u),d&&d.m(l,null)},p:function(e,t){1&t&&c!==(c=e[1].title[e[0].language]+"")&&N(a,c),1&t&&f!==(f=e[1].intro[e[0].language]+"")&&(o.innerHTML=f),e[5].length>0&&h.p(e,t),e[6].length>0&&d.p(e,t)},d:function(e){e&&j(t),e&&j(r),e&&j(n),e&&j(i),e&&j(o),e&&j(s),e&&j(l),h&&h.d(),d&&d.d()}}}function J(e){var t,r;return t=new l({props:{$$slots:{default:[C]},$$scope:{ctx:e}}}),{c:function(){u(t.$$.fragment)},l:function(e){c(t.$$.fragment,e)},m:function(e,n){f(t,e,n),r=!0},p:function(e,r){var n=h(r,1)[0],a={};131073&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i:function(e){r||(d(t.$$.fragment,e),r=!0)},o:function(e){p(t.$$.fragment,e),r=!1},d:function(e){g(t,e)}}}function O(e,t,r){var n;v(e,I,(function(e){return r(0,n=e)}));var a,i={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{dates:[new Date(2021,8,19,19,30)],title:"Richard Strauss - Eine Alpensinfonie",location:"Bühnenhaus Kevelear",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,8,18,17,0)],title:"Richard Strauss - Eine Alpensinfonie",location:"Marien-Gymnasium, Essen",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,6,18,18,30)],title:"De Musica",location:"Eglise Notre-Dame de l'Assomption, Domme (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,13,18,0)],title:"De Musica",location:"Cour d'honneur de l'Hôtel de Ville, Brive-la-Gaillarde (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,1,15,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Frauenhaus, Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,24,9,30),new Date(2021,5,25,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-Kindergarten Gedulderweg, Sprockhövel",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."}},{dates:[new Date(2021,5,20,18,0)],title:"Das Land des Lächelns, Operette in drei Akten von Franz Lehár",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,5,18,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Evangelische Kita Eislebener Str., Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,8,15,45)],title:"Eindrücke der Natur",location:"Belia Seniorenresidenz Wattenscheid",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,5,1,9,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-KiTa, Detmold",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,4,30,14)],title:"10+1 Jahre Autobahnkirche RUHR - Dankstelle an der A40",location:"Autobahnkirche RUHR",description:{de:"Musikalische Gestaltung des ökumenischen Gottesdienstes",fr:"Accompagnement musical de la célébration œcuménique"}},{dates:[new Date(2021,3,21,10,30)],title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,3,3,20)],title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},o={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},s=function(e){return e.getTime()>(new Date).getTime()},l=[],u=[],c=_(i.events);try{for(c.s();!(a=c.n()).done;){var f,h=a.value,d=!1,p=_(h.dates);try{for(p.s();!(f=p.n()).done;){if(s(f.value)){d=!0;break}}}catch(e){p.e(e)}finally{p.f()}d?l.push(h):u.push(h)}}catch(e){c.e(e)}finally{c.f()}return l.sort((function(e,t){return e.dates[0].getTime()-t.dates[0].getTime()})),u.sort((function(e,t){return t.dates[0].getTime()-e.dates[0].getTime()})),[n,i,{nachtigall:"/projekte/nachtigall"},{nachtigall:"/images/lerche-128.jpg","de-musica":"/images/socrates-128.jpg",kirche:"/images/kirche-128.jpg",altenheim:"/images/baum-128.jpg"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"de",r=String(e.getDate());return"de"==t&&(r+="."),r+=" ".concat(o[t][e.getMonth()]," ").concat(e.getFullYear()," ").concat(e.getHours()),e.getMinutes()?r+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(r+="h"),"de"==t&&(r+=" Uhr"),r},l,u]}var U=function(t){e(l,s);var r=G(l);function l(e){var t;return n(this,l),t=r.call(this),a(o(t),e,O,J,i,{}),t}return l}();export default U;
