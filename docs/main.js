/*! For license information please see main.js.LICENSE.txt */
!function(a){function n(n){for(var o,u,i=n[0],r=n[1],p=n[2],c=0,m=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(t,u)&&t[u]&&m.push(t[u][0]),t[u]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(a[o]=r[o]);for(s&&s(n);m.length;)m.shift()();return l.push.apply(l,p||[]),e()}function e(){for(var a,n=0;n<l.length;n++){for(var e=l[n],o=!0,i=1;i<e.length;i++){var r=e[i];0!==t[r]&&(o=!1)}o&&(l.splice(n--,1),a=u(u.s=e[0]))}return a}var o={},t={0:0},l=[];function u(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return a[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(a){var n=[],e=t[a];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=t[a]=[n,o]}));n.push(e[2]=o);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(a){return u.p+""+({1:"mapchart",3:"vendors~mapchart"}[a]||a)+".js"}(a);var r=new Error;l=function(n){i.onerror=i.onload=null,clearTimeout(p);var e=t[a];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;r.message="Loading chunk "+a+" failed.\n("+o+": "+l+")",r.name="ChunkLoadError",r.type=o,r.request=l,e[1](r)}t[a]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(n)},u.m=a,u.c=o,u.d=function(a,n,e){u.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:e})},u.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},u.t=function(a,n){if(1&n&&(a=u(a)),8&n)return a;if(4&n&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&n&&"string"!=typeof a)for(var o in a)u.d(e,o,function(n){return a[n]}.bind(null,o));return e},u.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return u.d(n,"a",n),n},u.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},u.p="",u.oe=function(a){throw console.error(a),a};var i=window.webpackJsonp=window.webpackJsonp||[],r=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var s=r;l.push([5,2]),e()}([,function(a,n,e){"use strict";var o;e.d(n,"a",(function(){return o})),function(a){a.sick="#ecbe7a",a.sickLight="#ecbe7a66",a.healthy="#70ae98",a.healthyLight="#70ae9866",a.dead="#e58b88",a.deadLight="#e58b8866"}(o||(o={}))},function(a,n,e){"use strict";var o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function u(a){if(null==a)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}a.exports=function(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de","5"===Object.getOwnPropertyNames(a)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(a){return n[a]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(a){o[a]=a})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(a,n){for(var e,i,r=u(a),p=1;p<arguments.length;p++){for(var s in e=Object(arguments[p]))t.call(e,s)&&(r[s]=e[s]);if(o){i=o(e);for(var c=0;c<i.length;c++)l.call(e,i[c])&&(r[i[c]]=e[i[c]])}}return r}},,,function(a,n,e){a.exports=e(10)},,,function(a,n,e){"use strict";a.exports=e(9)},function(a,n,e){"use strict";var o,t,l,u,i;if("undefined"==typeof window||"function"!=typeof MessageChannel){var r=null,p=null,s=function(){if(null!==r)try{var a=n.unstable_now();r(!0,a),r=null}catch(a){throw setTimeout(s,0),a}},c=Date.now();n.unstable_now=function(){return Date.now()-c},o=function(a){null!==r?setTimeout(o,0,a):(r=a,setTimeout(s,0))},t=function(a,n){p=setTimeout(a,n)},l=function(){clearTimeout(p)},u=function(){return!1},i=n.unstable_forceFrameRate=function(){}}else{var m=window.performance,h=window.Date,g=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var y=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof m&&"function"==typeof m.now)n.unstable_now=function(){return m.now()};else{var b=h.now();n.unstable_now=function(){return h.now()-b}}var f=!1,S=null,v=-1,k=5,T=0;u=function(){return n.unstable_now()>=T},i=function(){},n.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):k=0<a?Math.floor(1e3/a):5};var w=new MessageChannel,C=w.port2;w.port1.onmessage=function(){if(null!==S){var a=n.unstable_now();T=a+k;try{S(!0,a)?C.postMessage(null):(f=!1,S=null)}catch(a){throw C.postMessage(null),a}}else f=!1},o=function(a){S=a,f||(f=!0,C.postMessage(null))},t=function(a,e){v=g((function(){a(n.unstable_now())}),e)},l=function(){d(v),v=-1}}function M(a,n){var e=a.length;a.push(n);a:for(;;){var o=e-1>>>1,t=a[o];if(!(void 0!==t&&0<I(t,n)))break a;a[o]=n,a[e]=t,e=o}}function E(a){return void 0===(a=a[0])?null:a}function P(a){var n=a[0];if(void 0!==n){var e=a.pop();if(e!==n){a[0]=e;a:for(var o=0,t=a.length;o<t;){var l=2*(o+1)-1,u=a[l],i=l+1,r=a[i];if(void 0!==u&&0>I(u,e))void 0!==r&&0>I(r,u)?(a[o]=r,a[i]=e,o=i):(a[o]=u,a[l]=e,o=l);else{if(!(void 0!==r&&0>I(r,e)))break a;a[o]=r,a[i]=e,o=i}}}return n}return null}function I(a,n){var e=a.sortIndex-n.sortIndex;return 0!==e?e:a.id-n.id}var B=[],A=[],L=1,G=null,N=3,R=!1,j=!1,O=!1;function z(a){for(var n=E(A);null!==n;){if(null===n.callback)P(A);else{if(!(n.startTime<=a))break;P(A),n.sortIndex=n.expirationTime,M(B,n)}n=E(A)}}function D(a){if(O=!1,z(a),!j)if(null!==E(B))j=!0,o(F);else{var n=E(A);null!==n&&t(D,n.startTime-a)}}function F(a,e){j=!1,O&&(O=!1,l()),R=!0;var o=N;try{for(z(e),G=E(B);null!==G&&(!(G.expirationTime>e)||a&&!u());){var i=G.callback;if(null!==i){G.callback=null,N=G.priorityLevel;var r=i(G.expirationTime<=e);e=n.unstable_now(),"function"==typeof r?G.callback=r:G===E(B)&&P(B),z(e)}else P(B);G=E(B)}if(null!==G)var p=!0;else{var s=E(A);null!==s&&t(D,s.startTime-e),p=!1}return p}finally{G=null,N=o,R=!1}}function K(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var x=i;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(a){a.callback=null},n.unstable_continueExecution=function(){j||R||(j=!0,o(F))},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_getFirstCallbackNode=function(){return E(B)},n.unstable_next=function(a){switch(N){case 1:case 2:case 3:var n=3;break;default:n=N}var e=N;N=n;try{return a()}finally{N=e}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=x,n.unstable_runWithPriority=function(a,n){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var e=N;N=a;try{return n()}finally{N=e}},n.unstable_scheduleCallback=function(a,e,u){var i=n.unstable_now();if("object"==typeof u&&null!==u){var r=u.delay;r="number"==typeof r&&0<r?i+r:i,u="number"==typeof u.timeout?u.timeout:K(a)}else u=K(a),r=i;return a={id:L++,callback:e,priorityLevel:a,startTime:r,expirationTime:u=r+u,sortIndex:-1},r>i?(a.sortIndex=r,M(A,a),null===E(B)&&a===E(A)&&(O?l():O=!0,t(D,r-i))):(a.sortIndex=u,M(B,a),j||R||(j=!0,o(F))),a},n.unstable_shouldYield=function(){var a=n.unstable_now();z(a);var e=E(B);return e!==G&&null!==G&&null!==e&&null!==e.callback&&e.startTime<=a&&e.expirationTime<G.expirationTime||u()},n.unstable_wrapCallback=function(a){var n=N;return function(){var e=N;N=n;try{return a.apply(this,arguments)}finally{N=e}}}},function(a,n,e){"use strict";e.r(n);var o=e(0),t=e.n(o),l=e(3),u=e(4),i=e(1);const r=["Iran (Islamic Republic of)","Korea, South","Republic of Korea","Russian Federation","Taiwan*","Viet Nam","Kosovo","West Bank and Gaza","Others","Cruise Ship","Diamond Princess","Gambia, The","Bahamas, The"],p=[{slug:"afghanistan",name:"Afghanistan",alpha2:"AF"},{slug:"aland-islands",name:"Åland Islands",alpha2:"AX"},{slug:"albania",name:"Albania",alpha2:"AL"},{slug:"algeria",name:"Algeria",alpha2:"DZ"},{slug:"american-samoa",name:"American Samoa",alpha2:"AS"},{slug:"andorra",name:"Andorra",alpha2:"AD"},{slug:"angola",name:"Angola",alpha2:"AO"},{slug:"anguilla",name:"Anguilla",alpha2:"AI"},{slug:"antarctica",name:"Antarctica",alpha2:"AQ"},{slug:"antigua-and-barbuda",name:"Antigua and Barbuda",alpha2:"AG"},{slug:"argentina",name:"Argentina",alpha2:"AR"},{slug:"armenia",name:"Armenia",alpha2:"AM"},{slug:"aruba",name:"Aruba",alpha2:"AW"},{slug:"australia",name:"Australia",alpha2:"AU"},{slug:"austria",name:"Austria",alpha2:"AT"},{slug:"azerbaijan",name:"Azerbaijan",alpha2:"AZ"},{slug:"bahamas",name:"Bahamas",alpha2:"BS"},{slug:"the-bahamas",name:"The Bahamas",alpha2:"BS"},{slug:"bahrain",name:"Bahrain",alpha2:"BH"},{slug:"bangladesh",name:"Bangladesh",alpha2:"BD"},{slug:"barbados",name:"Barbados",alpha2:"BB"},{slug:"belarus",name:"Belarus",alpha2:"BY"},{slug:"belgium",name:"Belgium",alpha2:"BE"},{slug:"belize",name:"Belize",alpha2:"BZ"},{slug:"benin",name:"Benin",alpha2:"BJ"},{slug:"bermuda",name:"Bermuda",alpha2:"BM"},{slug:"bhutan",name:"Bhutan",alpha2:"BT"},{slug:"bolivia-plurinational-state-of",name:"Bolivia (Plurinational State of)",alpha2:"BO"},{slug:"bolivia",name:"Bolivia",alpha2:"BO"},{slug:"bonaire-sint-eustatius-and-saba",name:"Bonaire, Sint Eustatius and Saba",alpha2:"BQ"},{slug:"bosnia-and-herzegovina",name:"Bosnia and Herzegovina",alpha2:"BA"},{slug:"botswana",name:"Botswana",alpha2:"BW"},{slug:"bouvet-island",name:"Bouvet Island",alpha2:"BV"},{slug:"brazil",name:"Brazil",alpha2:"BR"},{slug:"british-indian-ocean-territory",name:"British Indian Ocean Territory",alpha2:"IO"},{slug:"brunei-darussalam",name:"Brunei Darussalam",alpha2:"BN"},{slug:"brunei",name:"Brunei",alpha2:"BN"},{slug:"bulgaria",name:"Bulgaria",alpha2:"BG"},{slug:"burkina-faso",name:"Burkina Faso",alpha2:"BF"},{slug:"burundi",name:"Burundi",alpha2:"BI"},{slug:"cabo-verde",name:"Cabo Verde",alpha2:"CV"},{slug:"cambodia",name:"Cambodia",alpha2:"KH"},{slug:"cameroon",name:"Cameroon",alpha2:"CM"},{slug:"canada",name:"Canada",alpha2:"CA"},{slug:"cayman-islands",name:"Cayman Islands",alpha2:"KY"},{slug:"central-african-republic",name:"Central African Republic",alpha2:"CF"},{slug:"chad",name:"Chad",alpha2:"TD"},{slug:"chile",name:"Chile",alpha2:"CL"},{slug:"china",name:"China",alpha2:"CN"},{slug:"christmas-island",name:"Christmas Island",alpha2:"CX"},{slug:"cocos-keeling-islands",name:"Cocos (Keeling) Islands",alpha2:"CC"},{slug:"colombia",name:"Colombia",alpha2:"CO"},{slug:"comoros",name:"Comoros",alpha2:"KM"},{slug:"congo",name:"Congo",alpha2:"CG"},{slug:"congo-(Brazzaville)",name:"Congo (Brazzaville)",alpha2:"CG"},{slug:"congo-(kinshasa)",name:"Congo (Kinshasa)",alpha2:"CD"},{slug:"congo-democratic-republic-of-the",name:"Congo, Democratic Republic of the",alpha2:"CD"},{slug:"cook-islands",name:"Cook Islands",alpha2:"CK"},{slug:"costa-rica",name:"Costa Rica",alpha2:"CR"},{slug:"cote-divoire",name:"Cote d'Ivoire",alpha2:"CI"},{slug:"croatia",name:"Croatia",alpha2:"HR"},{slug:"cuba",name:"Cuba",alpha2:"CU"},{slug:"curacao",name:"Curaçao",alpha2:"CW"},{slug:"cyprus",name:"Cyprus",alpha2:"CY"},{slug:"czechia",name:"Czechia",alpha2:"CZ"},{slug:"denmark",name:"Denmark",alpha2:"DK"},{slug:"djibouti",name:"Djibouti",alpha2:"DJ"},{slug:"dominica",name:"Dominica",alpha2:"DM"},{slug:"dominican-republic",name:"Dominican Republic",alpha2:"DO"},{slug:"ecuador",name:"Ecuador",alpha2:"EC"},{slug:"egypt",name:"Egypt",alpha2:"EG"},{slug:"el-salvador",name:"El Salvador",alpha2:"SV"},{slug:"equatorial-guinea",name:"Equatorial Guinea",alpha2:"GQ"},{slug:"eritrea",name:"Eritrea",alpha2:"ER"},{slug:"estonia",name:"Estonia",alpha2:"EE"},{slug:"eswatini",name:"Eswatini",alpha2:"SZ"},{slug:"ethiopia",name:"Ethiopia",alpha2:"ET"},{slug:"falkland-islands-malvinas",name:"Falkland Islands (Malvinas)",alpha2:"FK"},{slug:"faroe-islands",name:"Faroe Islands",alpha2:"FO"},{slug:"fiji",name:"Fiji",alpha2:"FJ"},{slug:"finland",name:"Finland",alpha2:"FI"},{slug:"france",name:"France",alpha2:"FR"},{slug:"french-guiana",name:"French Guiana",alpha2:"GF"},{slug:"french-polynesia",name:"French Polynesia",alpha2:"PF"},{slug:"french-southern-territories",name:"French Southern Territories",alpha2:"TF"},{slug:"gabon",name:"Gabon",alpha2:"GA"},{slug:"gambia",name:"Gambia",alpha2:"GM"},{slug:"gambia-the",name:"Gambia, The",alpha2:"GM"},{slug:"georgia",name:"Georgia",alpha2:"GE"},{slug:"germany",name:"Germany",alpha2:"DE"},{slug:"ghana",name:"Ghana",alpha2:"GH"},{slug:"gibraltar",name:"Gibraltar",alpha2:"GI"},{slug:"greece",name:"Greece",alpha2:"GR"},{slug:"greenland",name:"Greenland",alpha2:"GL"},{slug:"grenada",name:"Grenada",alpha2:"GD"},{slug:"guadeloupe",name:"Guadeloupe",alpha2:"GP"},{slug:"guam",name:"Guam",alpha2:"GU"},{slug:"guatemala",name:"Guatemala",alpha2:"GT"},{slug:"guernsey",name:"Guernsey",alpha2:"GG"},{slug:"guinea",name:"Guinea",alpha2:"GN"},{slug:"guinea-bissau",name:"Guinea-Bissau",alpha2:"GW"},{slug:"guyana",name:"Guyana",alpha2:"GY"},{slug:"haiti",name:"Haiti",alpha2:"HT"},{slug:"heard-island-and-mcdonald-islands",name:"Heard Island and McDonald Islands",alpha2:"HM"},{slug:"holy-see",name:"Holy See",alpha2:"VA"},{slug:"vatican-city",name:"Vatican City",alpha2:"VA"},{slug:"honduras",name:"Honduras",alpha2:"HN"},{slug:"hong-kong",name:"Hong Kong",alpha2:"HK"},{slug:"hungary",name:"Hungary",alpha2:"HU"},{slug:"iceland",name:"Iceland",alpha2:"IS"},{slug:"india",name:"India",alpha2:"IN"},{slug:"indonesia",name:"Indonesia",alpha2:"ID"},{slug:"iran-islamic-republic-of",name:"Iran (Islamic Republic of)",alpha2:"IR"},{slug:"iran",name:"Iran",alpha2:"IR"},{slug:"iraq",name:"Iraq",alpha2:"IQ"},{slug:"ireland",name:"Ireland",alpha2:"IE"},{slug:"isle-of-man",name:"Isle of Man",alpha2:"IM"},{slug:"israel",name:"Israel",alpha2:"IL"},{slug:"italy",name:"Italy",alpha2:"IT"},{slug:"jamaica",name:"Jamaica",alpha2:"JM"},{slug:"japan",name:"Japan",alpha2:"JP"},{slug:"jersey",name:"Jersey",alpha2:"JE"},{slug:"jordan",name:"Jordan",alpha2:"JO"},{slug:"kazakhstan",name:"Kazakhstan",alpha2:"KZ"},{slug:"kenya",name:"Kenya",alpha2:"KE"},{slug:"kiribati",name:"Kiribati",alpha2:"KI"},{slug:"korea-democratic-peoples-republic-of",name:"Korea (Democratic People's Republic of)",alpha2:"KP"},{slug:"korea-republic-of",name:"Korea, Republic of",alpha2:"KR"},{slug:"korea-south",name:"South Korea",alpha2:"KR"},{slug:"kuwait",name:"Kuwait",alpha2:"KW"},{slug:"kyrgyzstan",name:"Kyrgyzstan",alpha2:"KG"},{slug:"lao-peoples-democratic-republic",name:"Lao People's Democratic Republic",alpha2:"LA"},{slug:"laos",name:"Laos",alpha2:"LA"},{slug:"latvia",name:"Latvia",alpha2:"LV"},{slug:"lebanon",name:"Lebanon",alpha2:"LB"},{slug:"lesotho",name:"Lesotho",alpha2:"LS"},{slug:"liberia",name:"Liberia",alpha2:"LR"},{slug:"libya",name:"Libya",alpha2:"LY"},{slug:"liechtenstein",name:"Liechtenstein",alpha2:"LI"},{slug:"lithuania",name:"Lithuania",alpha2:"LT"},{slug:"luxembourg",name:"Luxembourg",alpha2:"LU"},{slug:"macao",name:"Macao",alpha2:"MO"},{slug:"macau",name:"Macau",alpha2:"MO"},{slug:"madagascar",name:"Madagascar",alpha2:"MG"},{slug:"malawi",name:"Malawi",alpha2:"MW"},{slug:"malaysia",name:"Malaysia",alpha2:"MY"},{slug:"maldives",name:"Maldives",alpha2:"MV"},{slug:"mali",name:"Mali",alpha2:"ML"},{slug:"malta",name:"Malta",alpha2:"MT"},{slug:"marshall-islands",name:"Marshall Islands",alpha2:"MH"},{slug:"martinique",name:"Martinique",alpha2:"MQ"},{slug:"mauritania",name:"Mauritania",alpha2:"MR"},{slug:"mauritius",name:"Mauritius",alpha2:"MU"},{slug:"mayotte",name:"Mayotte",alpha2:"YT"},{slug:"mexico",name:"Mexico",alpha2:"MX"},{slug:"micronesia-federated-states-of",name:"Micronesia (Federated States of)",alpha2:"FM"},{slug:"moldova-republic-of",name:"Moldova, Republic of",alpha2:"MD"},{slug:"moldova",name:"Moldova",alpha2:"MD"},{slug:"monaco",name:"Monaco",alpha2:"MC"},{slug:"mongolia",name:"Mongolia",alpha2:"MN"},{slug:"montenegro",name:"Montenegro",alpha2:"ME"},{slug:"montserrat",name:"Montserrat",alpha2:"MS"},{slug:"morocco",name:"Morocco",alpha2:"MA"},{slug:"mozambique",name:"Mozambique",alpha2:"MZ"},{slug:"myanmar",name:"Myanmar",alpha2:"MM"},{slug:"namibia",name:"Namibia",alpha2:"NA"},{slug:"nauru",name:"Nauru",alpha2:"NR"},{slug:"nepal",name:"Nepal",alpha2:"NP"},{slug:"netherlands",name:"Netherlands",alpha2:"NL"},{slug:"new-caledonia",name:"New Caledonia",alpha2:"NC"},{slug:"new-zealand",name:"New Zealand",alpha2:"NZ"},{slug:"nicaragua",name:"Nicaragua",alpha2:"NI"},{slug:"niger",name:"Niger",alpha2:"NE"},{slug:"nigeria",name:"Nigeria",alpha2:"NG"},{slug:"niue",name:"Niue",alpha2:"NU"},{slug:"norfolk-island",name:"Norfolk Island",alpha2:"NF"},{slug:"north-macedonia",name:"North Macedonia",alpha2:"MK"},{slug:"northern-mariana-islands",name:"Northern Mariana Islands",alpha2:"MP"},{slug:"norway",name:"Norway",alpha2:"NO"},{slug:"oman",name:"Oman",alpha2:"OM"},{slug:"pakistan",name:"Pakistan",alpha2:"PK"},{slug:"palau",name:"Palau",alpha2:"PW"},{slug:"palestine-state-of",name:"Palestine, State of",alpha2:"PS"},{slug:"palestine",name:"Palestine",alpha2:"PS"},{slug:"panama",name:"Panama",alpha2:"PA"},{slug:"papua-new-guinea",name:"Papua New Guinea",alpha2:"PG"},{slug:"paraguay",name:"Paraguay",alpha2:"PY"},{slug:"peru",name:"Peru",alpha2:"PE"},{slug:"philippines",name:"Philippines",alpha2:"PH"},{slug:"pitcairn",name:"Pitcairn",alpha2:"PN"},{slug:"poland",name:"Poland",alpha2:"PL"},{slug:"portugal",name:"Portugal",alpha2:"PT"},{slug:"puerto-rico",name:"Puerto Rico",alpha2:"PR"},{slug:"qatar",name:"Qatar",alpha2:"QA"},{slug:"reunion",name:"Réunion",alpha2:"RE"},{slug:"romania",name:"Romania",alpha2:"RO"},{slug:"russian-federation",name:"Russian Federation",alpha2:"RU"},{slug:"russia",name:"Russia",alpha2:"RU"},{slug:"rwanda",name:"Rwanda",alpha2:"RW"},{slug:"saint-barthelemy",name:"Saint Barthélemy",alpha2:"BL"},{slug:"saint-helena-ascension-and-tristan-da-cunha",name:"Saint Helena, Ascension and Tristan da Cunha",alpha2:"SH"},{slug:"saint-kitts-and-nevis",name:"Saint Kitts and Nevis",alpha2:"KN"},{slug:"saint-lucia",name:"Saint Lucia",alpha2:"LC"},{slug:"saint-martin-french-part",name:"Saint Martin (French part)",alpha2:"MF"},{slug:"saint-pierre-and-miquelon",name:"Saint Pierre and Miquelon",alpha2:"PM"},{slug:"saint-vincent-and-the-grenadines",name:"Saint Vincent and the Grenadines",alpha2:"VC"},{slug:"samoa",name:"Samoa",alpha2:"WS"},{slug:"san-marino",name:"San Marino",alpha2:"SM"},{slug:"sao-tome-and-principe",name:"Sao Tome and Principe",alpha2:"ST"},{slug:"saudi-arabia",name:"Saudi Arabia",alpha2:"SA"},{slug:"senegal",name:"Senegal",alpha2:"SN"},{slug:"serbia",name:"Serbia",alpha2:"RS"},{slug:"seychelles",name:"Seychelles",alpha2:"SC"},{slug:"sierra-leone",name:"Sierra Leone",alpha2:"SL"},{slug:"singapore",name:"Singapore",alpha2:"SG"},{slug:"sint-maarten-dutch-part",name:"Sint Maarten (Dutch part)",alpha2:"SX"},{slug:"slovakia",name:"Slovakia",alpha2:"SK"},{slug:"slovenia",name:"Slovenia",alpha2:"SI"},{slug:"solomon-islands",name:"Solomon Islands",alpha2:"SB"},{slug:"somalia",name:"Somalia",alpha2:"SO"},{slug:"south-africa",name:"South Africa",alpha2:"ZA"},{slug:"south-georgia-and-the-south-sandwich-islands",name:"South Georgia and the South Sandwich Islands",alpha2:"GS"},{slug:"south-sudan",name:"South Sudan",alpha2:"SS"},{slug:"spain",name:"Spain",alpha2:"ES"},{slug:"sri-lanka",name:"Sri Lanka",alpha2:"LK"},{slug:"sudan",name:"Sudan",alpha2:"SD"},{slug:"suriname",name:"Suriname",alpha2:"SR"},{slug:"svalbard-and-jan-mayen",name:"Svalbard and Jan Mayen",alpha2:"SJ"},{slug:"sweden",name:"Sweden",alpha2:"SE"},{slug:"switzerland",name:"Switzerland",alpha2:"CH"},{slug:"syrian-arab-republic",name:"Syrian Arab Republic",alpha2:"SY"},{slug:"syria",name:"Syria",alpha2:"SY"},{slug:"taiwan-province-of-chinaa",name:"Taiwan, Province of China[a]",alpha2:"TW"},{slug:"taiwan",name:"Taiwan",alpha2:"TW"},{slug:"tajikistan",name:"Tajikistan",alpha2:"TJ"},{slug:"tanzania-united-republic-of",name:"Tanzania, United Republic of",alpha2:"TZ"},{slug:"tanzania",name:"Tanzania",alpha2:"TZ"},{slug:"thailand",name:"Thailand",alpha2:"TH"},{slug:"timor-leste",name:"Timor-Leste",alpha2:"TL"},{slug:"togo",name:"Togo",alpha2:"TG"},{slug:"tokelau",name:"Tokelau",alpha2:"TK"},{slug:"tonga",name:"Tonga",alpha2:"TO"},{slug:"trinidad-and-tobago",name:"Trinidad and Tobago",alpha2:"TT"},{slug:"tunisia",name:"Tunisia",alpha2:"TN"},{slug:"turkey",name:"Turkey",alpha2:"TR"},{slug:"turkmenistan",name:"Turkmenistan",alpha2:"TM"},{slug:"turks-and-caicos-islands",name:"Turks and Caicos Islands",alpha2:"TC"},{slug:"tuvalu",name:"Tuvalu",alpha2:"TV"},{slug:"uganda",name:"Uganda",alpha2:"UG"},{slug:"ukraine",name:"Ukraine",alpha2:"UA"},{slug:"united-arab-emirates",name:"United Arab Emirates",alpha2:"AE"},{slug:"united-kingdom-of-great-britain-and-northern-ireland",name:"United Kingdom of Great Britain and Northern Ireland",alpha2:"GB"},{slug:"united-kingdom",name:"United Kingdom",alpha2:"GB"},{slug:"united-states-of-america",name:"United States of America",alpha2:"US"},{slug:"us",name:"US",alpha2:"US"},{slug:"united-states-minor-outlying-islands",name:"United States Minor Outlying Islands",alpha2:"UM"},{slug:"uruguay",name:"Uruguay",alpha2:"UY"},{slug:"uzbekistan",name:"Uzbekistan",alpha2:"UZ"},{slug:"vanuatu",name:"Vanuatu",alpha2:"VU"},{slug:"venezuela-bolivarian-republic-of",name:"Venezuela (Bolivarian Republic of)",alpha2:"VE"},{slug:"venezuela",name:"Venezuela",alpha2:"VE"},{slug:"viet-nam",name:"Viet Nam",alpha2:"VN"},{slug:"vietnam",name:"Vietnam",alpha2:"VN"},{slug:"virgin-islands-british",name:"Virgin Islands (British)",alpha2:"VG"},{slug:"virgin-islands-us",name:"Virgin Islands (U.S.)",alpha2:"VI"},{slug:"wallis-and-futuna",name:"Wallis and Futuna",alpha2:"WF"},{slug:"western-sahara",name:"Western Sahara",alpha2:"EH"},{slug:"yemen",name:"Yemen",alpha2:"YE"},{slug:"zambia",name:"Zambia",alpha2:"ZM"},{slug:"zimbabwe",name:"Zimbabwe",alpha2:"ZW"}];var s=(a,n)=>{const e=p.find(({slug:e,name:o})=>o===n||e===a);return e?e.alpha2:(console.error("Country code not found for",a,n),"??")};const c=[{country:"Afghanistan",population:"35530081"},{country:"Albania",population:"2930187"},{country:"Algeria",population:"41318142"},{country:"American Samoa",population:"55641"},{country:"Andorra",population:"76965"},{country:"Angola",population:"29784193"},{country:"Anguilla",population:"14909"},{country:"Antigua and Barbuda",population:"102012"},{country:"Argentina",population:"44271041"},{country:"Armenia",population:"2930450"},{country:"Aruba",population:"105264"},{country:"Australia",population:"24450561"},{country:"Austria",population:"8735453"},{country:"Azerbaijan",population:"9827589"},{country:"Bahamas",population:"395361"},{country:"The Bahamas",population:"395361"},{country:"Bahrain",population:"1492584"},{country:"Bangladesh",population:"164669751"},{country:"Barbados",population:"285719"},{country:"Belarus",population:"9468338"},{country:"Belgium",population:"11429336"},{country:"Belize",population:"374681"},{country:"Benin",population:"11175692"},{country:"Bermuda",population:"61349"},{country:"Bhutan",population:"807610"},{country:"Bolivia",population:"11051600"},{country:"Bosnia and Herzegovina",population:"3507017"},{country:"Botswana",population:"2291661"},{country:"Brazil",population:"209288278"},{country:"Brunei",population:"428697"},{country:"Bulgaria",population:"7084571"},{country:"Burkina Faso",population:"19193382"},{country:"Burundi",population:"10864245"},{country:"Cabo Verde",population:"546388"},{country:"Cambodia",population:"16005373"},{country:"Cameroon",population:"24053727"},{country:"Canada",population:"36624199"},{country:"Cape Verde",population:"546388"},{country:"Cayman Islands",population:"61559"},{country:"Central African Republic",population:"4659080"},{country:"Chad",population:"14899994"},{country:"Chile",population:"18054726"},{country:"China",population:"1409517397"},{country:"Christmas Island",population:"2500"},{country:"Cocos (Keeling) Islands",population:"600"},{country:"Colombia",population:"49065615"},{country:"Comoros",population:"813912"},{country:"Congo (Brazzaville)",population:"5260750"},{country:"Congo (Kinshasa)",population:"86791000"},{country:"Cook Islands",population:"17380"},{country:"Costa Rica",population:"4905769"},{country:"Cote d'Ivoire",population:"25823071"},{country:"Croatia",population:"4189353"},{country:"Cuba",population:"11484636"},{country:"Cyprus",population:"1179551"},{country:"Czech Republic",population:"10618303"},{country:"Czechia",population:"10618303"},{country:"Denmark",population:"5733551"},{country:"Djibouti",population:"956985"},{country:"Dominica",population:"73925"},{country:"Dominican Republic",population:"10766998"},{country:"East Timor",population:"1296311"},{country:"Ecuador",population:"16624858"},{country:"Egypt",population:"97553151"},{country:"El Salvador",population:"6377853"},{country:"Equatorial Guinea",population:"1267689"},{country:"Eritrea",population:"5068831"},{country:"Estonia",population:"1309632"},{country:"Eswatini",population:"1008000"},{country:"Ethiopia",population:"104957438"},{country:"Falkland Islands",population:"2910"},{country:"Faroe Islands",population:"49290"},{country:"Fiji",population:"905502"},{country:"Fiji Islands",population:"905502"},{country:"Finland",population:"5523231"},{country:"France",population:"64979548"},{country:"French Guiana",population:"282731"},{country:"French Polynesia",population:"283007"},{country:"Gabon",population:"2025137"},{country:"Gambia",population:"2100568"},{country:"Georgia",population:"3912061"},{country:"Germany",population:"82114224"},{country:"Ghana",population:"28833629"},{country:"Gibraltar",population:"34571"},{country:"Greece",population:"11159773"},{country:"Greenland",population:"56480"},{country:"Grenada",population:"107825"},{country:"Guadeloupe",population:"449568"},{country:"Guam",population:"164229"},{country:"Guatemala",population:"16913503"},{country:"Guinea",population:"12717176"},{country:"Guinea-Bissau",population:"1861283"},{country:"Guyana",population:"777859"},{country:"Haiti",population:"10981229"},{country:"Holy See",population:"1000"},{country:"Vatican",population:"1000"},{country:"Vatican City",population:"1000"},{country:"Honduras",population:"9265067"},{country:"Hong Kong",population:"7364883"},{country:"Hungary",population:"9721559"},{country:"Iceland",population:"335025"},{country:"India",population:"1339180127"},{country:"Indonesia",population:"263991379"},{country:"Iran",population:"81162788"},{country:"Iraq",population:"38274618"},{country:"Ireland",population:"4761657"},{country:"Israel",population:"8321570"},{country:"Italy",population:"59359900"},{country:"Ivory Coast",population:"24294750"},{country:"Jamaica",population:"2890299"},{country:"Japan",population:"127484450"},{country:"Jordan",population:"9702353"},{country:"Kazakhstan",population:"18204499"},{country:"Kenya",population:"49699862"},{country:"Kiribati",population:"116398"},{country:"Kuwait",population:"4136528"},{country:"Kyrgyzstan",population:"6045117"},{country:"Laos",population:"6858160"},{country:"Latvia",population:"1949670"},{country:"Lebanon",population:"6082357"},{country:"Lesotho",population:"2233339"},{country:"Liberia",population:"4731906"},{country:"Libyan Arab Jamahiriya",population:"5605000"},{country:"Libya",population:"5605000"},{country:"Liechtenstein",population:"37922"},{country:"Lithuania",population:"2890297"},{country:"Luxembourg",population:"583455"},{country:"Macao",population:"473000"},{country:"Macau",population:"473000"},{country:"North Macedonia",population:"2024000"},{country:"Madagascar",population:"25570895"},{country:"Malawi",population:"18622104"},{country:"Malaysia",population:"31624264"},{country:"Maldives",population:"436330"},{country:"Mali",population:"18541980"},{country:"Malta",population:"430835"},{country:"Marshall Islands",population:"53127"},{country:"Martinique",population:"384896"},{country:"Mauritania",population:"4420184"},{country:"Mauritius",population:"1265138"},{country:"Mayotte",population:"253045"},{country:"Mexico",population:"129163276"},{country:"Moldova",population:"4051212"},{country:"Monaco",population:"38695"},{country:"Mongolia",population:"3075647"},{country:"Montenegro",population:"628619"},{country:"Montserrat",population:"5177"},{country:"Morocco",population:"35739580"},{country:"Mozambique",population:"29668834"},{country:"Myanmar",population:"53370609"},{country:"Namibia",population:"2533794"},{country:"Nauru",population:"11359"},{country:"Nepal",population:"29304998"},{country:"Netherlands",population:"17035938"},{country:"Netherlands Antilles",population:"217000"},{country:"New Caledonia",population:"276255"},{country:"New Zealand",population:"4705818"},{country:"Nicaragua",population:"6217581"},{country:"Niger",population:"21477348"},{country:"Nigeria",population:"190886311"},{country:"Niue",population:"1618"},{country:"Norfolk Island",population:"2000"},{country:"North Korea",population:"25490965"},{country:"Northern Mariana Islands",population:"55144"},{country:"Norway",population:"5305383"},{country:"Oman",population:"4636262"},{country:"Pakistan",population:"197015955"},{country:"Palau",population:"21729"},{country:"Palestine",population:"4920724"},{country:"Panama",population:"4098587"},{country:"Papua New Guinea",population:"8251162"},{country:"Paraguay",population:"6811297"},{country:"Peru",population:"32165485"},{country:"Philippines",population:"104918090"},{country:"Pitcairn",population:"50"},{country:"Poland",population:"38170712"},{country:"Portugal",population:"10329506"},{country:"Puerto Rico",population:"3663131"},{country:"Qatar",population:"2639211"},{country:"Reunion",population:"699000"},{country:"Romania",population:"19679306"},{country:"Russian Federation",population:"143989754"},{country:"Russia",population:"143989754"},{country:"Rwanda",population:"12208407"},{country:"Saint Barthelemy",population:"9847"},{country:"Saint Helena",population:"4049"},{country:"Saint Kitts and Nevis",population:"55345"},{country:"Saint Lucia",population:"178844"},{country:"Saint Pierre and Miquelon",population:"6320"},{country:"Saint Vincent and the Grenadines",population:"109897"},{country:"Samoa",population:"196440"},{country:"San Marino",population:"33400"},{country:"Sao Tome and Principe",population:"204327"},{country:"Saudi Arabia",population:"32938213"},{country:"Senegal",population:"15850567"},{country:"Serbia",population:"8772235"},{country:"Seychelles",population:"94737"},{country:"Sierra Leone",population:"7557212"},{country:"Singapore",population:"5708844"},{country:"Slovakia",population:"5447662"},{country:"Slovenia",population:"2079976"},{country:"Solomon Islands",population:"611343"},{country:"Somalia",population:"14742523"},{country:"South Africa",population:"56717156"},{country:"South Korea",population:"50982212"},{country:"South Sudan",population:"12575714"},{country:"Spain",population:"46354321"},{country:"SriLanka",population:"20876917"},{country:"Sri Lanka",population:"20876917"},{country:"Sudan",population:"40533330"},{country:"Suriname",population:"563402"},{country:"Svalbard and Jan Mayen",population:"3200"},{country:"Swaziland",population:"1008000"},{country:"Sweden",population:"9910701"},{country:"Switzerland",population:"8476005"},{country:"Syria",population:"18269868"},{country:"Tajikistan",population:"8921343"},{country:"Tanzania",population:"57310019"},{country:"Taiwan",population:"23773876"},{country:"Thailand",population:"69037513"},{country:"Timor-Leste",population:"1281421"},{country:"Togo",population:"7797694"},{country:"Tokelau",population:"1300"},{country:"Tonga",population:"108020"},{country:"Trinidad and Tobago",population:"1369125"},{country:"Tunisia",population:"11532127"},{country:"Turkey",population:"80745020"},{country:"Turkmenistan",population:"5758075"},{country:"Turks and Caicos Islands",population:"35446"},{country:"Tuvalu",population:"11192"},{country:"Uganda",population:"42862958"},{country:"Ukraine",population:"44222947"},{country:"United Arab Emirates",population:"9400145"},{country:"United Kingdom",population:"66181585"},{country:"United States",population:"324459463"},{country:"US",population:"324459463"},{country:"Uruguay",population:"3456750"},{country:"Uzbekistan",population:"31910641"},{country:"Vanuatu",population:"276244"},{country:"Venezuela",population:"31977065"},{country:"Vietnam",population:"95540800"},{country:"Wallis and Futuna",population:"11773"},{country:"Western Sahara",population:"552628"},{country:"Yemen",population:"28250420"},{country:"Yugoslavia",population:"10640000"},{country:"Zambia",population:"17094130"},{country:"Zimbabwe",population:"16529904"}];var m=a=>{const n=c.find(({country:n})=>n===a);return n?Number(n.population):void 0};var h=()=>{const[a,n]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{n(window.matchMedia("(max-width: 640px)").matches)}),a};const g={fontSize:"1rem",fontWeight:"bold",background:"none",border:"none",cursor:"pointer"};var d=({active:a=!1,onClick:n=(()=>{}),children:e,hint:o=e})=>t.a.createElement("button",{onClick:n,style:{...g,...a&&{textDecoration:"underline"}},title:`Sort by ${o}`,"aria-label":`Sort by ${o}`},e);const y=[{text:"Total",hint:"Total Sick",key:"TotalConfirmed",bg:i.a.sickLight},{text:"Per 1% pop",hint:"Sick, per 1% of Population",key:"TotalConfirmedPercent",bg:i.a.sickLight},{text:"New",hint:"New Sick",key:"NewConfirmed",bg:i.a.sickLight},{text:"Total",hint:"Total Recovered",key:"TotalRecovered",bg:i.a.healthyLight},{text:"%",hint:"Recovered, as percentage of Sick",key:"TotalRecoveredPercent",bg:i.a.healthyLight},{text:"New",hint:"New Recovered",key:"NewRecovered",bg:i.a.healthyLight},{text:"Total",hint:"Total Dead",key:"TotalDeaths",bg:i.a.deadLight},{text:"%",hint:"Dead, as percentage of Sick",key:"TotalDeathsPercent",bg:i.a.deadLight},{text:"New",hint:"New Dead",key:"NewDeaths",bg:i.a.deadLight}],b={position:"sticky",left:0,background:"#fff"},f=({sticky:a=!1,color:n,align:e,children:o})=>{const l={border:"1px solid #fff",...a&&b,...n&&{background:n},...e&&{textAlign:e}};return t.a.createElement("td",{style:l},o)},S=({align:a,children:n})=>t.a.createElement(f,{color:i.a.sickLight,align:a},n),v=({align:a,children:n})=>t.a.createElement(f,{color:i.a.healthyLight,align:a},n),k=({align:a,children:n})=>t.a.createElement(f,{color:i.a.deadLight,align:a},n),T=({sticky:a=!1,color:n,align:e,width:o,colSpan:l,children:u})=>{const i={border:"1px solid #fff",...a&&b,...n&&{background:n},...e&&{textAlign:e},...o&&{width:o}};return t.a.createElement("th",{colSpan:l,style:i},u)};var w=({countries:a=[]})=>{const[n,e]=Object(o.useState)("TotalConfirmed"),l=h(),u=a.sort((a,e)=>e[n]-a[n]);return t.a.createElement("table",{style:{borderSpacing:0}},t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement(T,{width:"18ch",sticky:l,align:"left"},"Country"),t.a.createElement(T,{colSpan:3,color:i.a.sickLight},"Sick"),t.a.createElement(T,{colSpan:3,color:i.a.healthyLight},"Recovered"),t.a.createElement(T,{colSpan:3,color:i.a.deadLight},"Dead")),t.a.createElement("tr",null,t.a.createElement(T,{sticky:l}),y.map(({hint:a,key:o,bg:l,text:u})=>t.a.createElement(T,{color:l,key:o},t.a.createElement(d,{hint:a,active:n===o,onClick:()=>e(o)},u))))),t.a.createElement("tbody",null,u.map(({Country:a,TotalConfirmed:n,TotalConfirmedPercent:e,NewConfirmed:o,TotalRecovered:u,TotalRecoveredPercent:i,NewRecovered:r,TotalDeaths:p,TotalDeathsPercent:s,NewDeaths:c},m)=>t.a.createElement("tr",{key:m},t.a.createElement(f,{sticky:l},a),t.a.createElement(S,{align:"right"},n.toLocaleString()),t.a.createElement(S,{align:"center"},e),t.a.createElement(S,null,o?`+${o.toLocaleString()}`:""),t.a.createElement(v,{align:"right"},u.toLocaleString()),t.a.createElement(v,{align:"center"},i),t.a.createElement(v,null,r?`+${r.toLocaleString()}`:""),t.a.createElement(k,{align:"right"},p.toLocaleString()),t.a.createElement(k,{align:"center"},s),t.a.createElement(k,null,c?`+${c.toLocaleString()}`:"")))))};const C=Object(o.lazy)(()=>Promise.all([e.e(3),e.e(1)]).then(e.bind(null,15)));var M=Object(u.hot)(()=>{const[a,n]=Object(o.useState)(),[e,l]=Object(o.useState)(),[u,p]=Object(o.useState)(!0),c=h();Object(o.useEffect)(()=>{fetch("https://api.covid19api.com/summary").then(a=>a.json()).then(n).catch(l).finally(()=>{p(!1)})},[]);const g=(a?a.Countries.filter(({Country:a,TotalConfirmed:n})=>!r.includes(a)&&n>100):[]).map(a=>({...a,IsoA2:s(a.Slug,a.Country),Population:m(a.Country)})).map(a=>({...a,TotalConfirmedPercent:a.Population?Math.ceil(100*a.TotalConfirmed/a.Population*100):0,TotalRecoveredPercent:a.TotalConfirmed?Math.ceil(100*a.TotalRecovered/a.TotalConfirmed*10)/10:0,TotalDeathsPercent:a.TotalConfirmed?Math.round(100*a.TotalDeaths/a.TotalConfirmed*10)/10:0})),d=g.map(({IsoA2:a,TotalConfirmed:n})=>({"iso-a2":a,value:n})),y=g.map(({IsoA2:a,TotalConfirmedPercent:n})=>({"iso-a2":a,value:n})),b=g.map(({IsoA2:a,TotalDeathsPercent:n})=>({"iso-a2":a,value:n}));return t.a.createElement(t.a.Fragment,null,u&&t.a.createElement("p",null,"Loading data..."),a&&t.a.createElement(t.a.Fragment,null,t.a.createElement("p",null,"Updated ",(a=>{const n=(Date.now()-new Date(a).getTime())/1e3/60/60,e=Math.floor(n);return`${e}:${Math.floor(n%e*60)}`})(a.Date)," hours ago"),t.a.createElement("div",{style:{display:c?"block":"flex",alignItems:"flex-start"}},t.a.createElement("section",{style:{overflow:"scroll"}},t.a.createElement(w,{countries:g})),t.a.createElement("section",null,t.a.createElement(o.Suspense,{fallback:t.a.createElement("p",null,"Loading maps...")},t.a.createElement(C,{title:"Sick, ppl",data:d,color:i.a.sick}),t.a.createElement(C,{title:"Sick, per 1% population",data:y,color:i.a.sick}),t.a.createElement(C,{title:"Dead, % of Sick",data:b,valueSuffix:"%"}))))),e&&t.a.createElement("p",null,e))});Object(l.render)(t.a.createElement(M,null),document.querySelector("main"))}]);