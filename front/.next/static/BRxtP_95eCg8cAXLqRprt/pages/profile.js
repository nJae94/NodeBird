(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"W+IF":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),o=n.n(a),r=n("q1tI"),i=n.n(r),c=n("/MKj"),l=n("Vl3Y"),s=n("5rEg"),u=n("2/Rp"),d=n("LAVF"),p=i.a.createElement,f=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],a=Object(c.b)(),o=Object(c.c)((function(e){return e.user})),i=o.me,f=o.isEditingNickname,m=Object(r.useCallback)((function(e){n(e.target.value)}),[]),b=Object(r.useCallback)((function(e){a({type:d.c,data:t})}),[t]);return p(l.a,{style:{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"},onFinish:b},p(s.a,{addonBefore:"\ub2c9\ub124\uc784",value:t||i&&i.nickname,onChange:m}),p(u.a,{type:"primary",htmlType:"submit",loading:f},"\uc218\uc815"))},m=n("p+NB"),b=n("HSxB"),h=n("VXEj"),g=n("bx4M"),k={name:"stop",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]}},w=n("6VBw"),y=function(e,t){return i.a.createElement(w.a,Object.assign({},e,{ref:t,icon:k}))};y.displayName="StopOutlined";var C=i.a.forwardRef(y),j=i.a.createElement,O=Object(r.memo)((function(e){var t=e.header,n=e.hasMore,a=e.onClickMore,o=e.data,r=e.onClickStop;return j(h.a,{style:{marginBottom:"20px"},grid:{gutter:4,xs:2,md:3},size:"small",header:j("div",null,t),loadMore:n&&j(u.a,{style:{width:"100%"},onClick:a},"\ub354 \ubcf4\uae30"),bordered:!0,dataSource:o,renderItem:function(e){return j(h.a.Item,{style:{marginTop:"20px"}},j(g.a,{actions:[j(C,{key:"stop",type:"stop",onClick:r(e.id)})]},j(g.a.Meta,{description:e.nickname})))}})})),v=i.a.createElement,M=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})),n=t.followingList,a=t.followerList,o=t.hasMoreFollower,i=t.hasMoreFollowing,l=Object(c.c)((function(e){return e.post})).mainPosts,s=Object(r.useCallback)((function(t){return function(){e({type:d.E,data:t})}}),[]),u=Object(r.useCallback)((function(t){return function(){e({type:d.x,data:t})}}),[]),p=Object(r.useCallback)((function(){e({type:d.l,offset:n.length})}),[n.length]),m=Object(r.useCallback)((function(){e({type:d.i,offset:a.length})}),[a.length]);return v("div",null,v(f,null),v(O,{header:"\ud314\ub85c\uc789 \ubaa9\ub85d",hasMore:i,onClickMore:p,data:n,onClickStop:s}),v(O,{header:"\ud314\ub85c\uc6cc \ubaa9\ub85d",hasMore:o,onClickMore:m,data:a,onClickStop:u}),v("div",null,l.map((function(e){return v(b.a,{key:+e.createdAt,post:e})}))))};M.getInitialProps=function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.store.getState(),e.store.dispatch({type:d.i,data:t.user.me&&t.user.me.id}),e.store.dispatch({type:d.l,data:t.user.me&&t.user.me.id}),e.store.dispatch({type:m.w,data:t.user.me&&t.user.me.id});case 4:case"end":return n.stop()}}),null,null,null,Promise)};t.default=M},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])}},[["u1GD",1,2,7,0,4,3,5,6,8]]]);