"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[151],{315:function(e,t,n){n.d(t,{Z:function(){return c}});var r="Pageheading_title__ZNlVz",a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},493:function(e,t,n){var r=n(87),a=n(184);t.Z=function(e){var t=e.movies,n=e.prevLocation;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:(0,a.jsx)("h3",{children:c})})},t)}))})})}},207:function(e,t,n){n.d(t,{Hq:function(){return v},XT:function(){return p},fU:function(){return g},l2:function(){return d},sv:function(){return m}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="959c97e3f5136b0a1599d95df967b17e";u.Z.defaults.baseURL="https://image.tmdb.org/t/p/w500";var i="/trending/movie/week",s="/search/movie",f="/movie",l="/credits",h="/reviews",p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(o,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(s,"?api_key=").concat(o,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(f,"/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t).concat(l,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(t).concat(h,"?api_key=").concat(o,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},151:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(439),a=n(689),c=n(791),u=n(87),o="SearchBar_searchForm__61gjz",i="SearchBar_searchInput__mOr0n",s="SearchBar_searchButton__Bob3R",f=n(184),l=function(e){var t=e.onSearch,n=(0,c.useState)(""),a=(0,r.Z)(n,2),u=a[0],l=a[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===u.trim()&&alert("Enter the film title"),t(u),l("")},className:o,children:[(0,f.jsx)("input",{type:"text",name:"searchQuery",value:u,autoComplete:"off",autoFocus:!0,placeholder:"Search ...",onChange:function(e){l(e.target.value.toLowerCase())},className:i}),(0,f.jsx)("button",{type:"submit",className:s,children:"Search"})]})})},h=n(207),p=n(493),v=n(700),d=n(315),g=function(){var e=(0,u.lr)(),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=(0,c.useState)([]),s=(0,r.Z)(i,2),g=s[0],m=s[1],x=(0,c.useState)(""),_=(0,r.Z)(x,2),Z=_[0],w=_[1],S=(0,c.useState)(!1),j=(0,r.Z)(S,2),y=j[0],b=j[1],k=(0,a.TH)(),U=n.get("query");return(0,c.useEffect)((function(){if(U){b(!0),(0,h.Hq)(U).then((function(e){e.length||alert("No movies found!"),m(e)})).catch((function(e){w("Ooops. Something went wrong..."),console.log(e)})).finally(b(!1))}}),[U]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(v.Z,{children:[(0,f.jsx)(d.Z,{text:"Movie Search"}),y&&"Loading ...",Z&&(0,f.jsx)("div",{children:Z}),(0,f.jsx)(l,{onSearch:function(e){o({query:"".concat(e)})}}),g&&(0,f.jsx)(p.Z,{movies:g,prevLocation:k})]})})}}}]);
//# sourceMappingURL=151.5aa1f9f8.chunk.js.map