(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7,11],{229:function(t,e,a){t.exports=a.p+"assets/img/his.647a9dbf.svg"},231:function(t,e,a){"use strict";a.r(e);var s={name:"his-header",props:{navs:{type:Array,default:()=>[]}}},n=a(13),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"doc-header"},[e("h2",{staticClass:"doc-header-logo"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:a(229),alt:""}}),t._v(" "),e("span",[t._v("前端开发手册")])])],1),t._v(" "),e("ul",{staticClass:"doc-header-nav"},t._l(t.navs,(function(a){return e("li",{staticClass:"doc-header-nav-item"},[e("router-link",{staticClass:"doc-header-nav-item-link",attrs:{to:a.link}},[t._v("\n            "+t._s(a.text)+"\n          ")])],1)})),0)])])}),[],!1,null,null,null);e.default=r.exports},232:function(t,e,a){"use strict";a.r(e);var s={name:"his-side",props:{sidebar:{type:Array,default:()=>[]}}},n=a(13),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"doc-aside"},[e("ul",{staticClass:"doc-aside-nav"},t._l(t.sidebar,(function(a){return e("li",{key:a.path},[e("router-link",{attrs:{to:a.path}},[t._v(t._s(a.title))])],1)})),0)])}),[],!1,null,null,null);e.default=r.exports},247:function(t,e,a){"use strict";a.r(e);var s=a(231),n=a(232),r={name:"his-layout",created(){},methods:{sortSideBar(t){if(!this.currentNav.sort)return t;const e=[];return this.currentNav.sort.forEach(a=>{const s=t.find(t=>t.path===`${this.currentNav.link}${"index"===a?"":a+".html"}`);s&&e.push(s)}),e}},computed:{navs(){const{themeConfig:{nav:t}}=this.$site;return t||[]},currentNav(){const{path:t}=this.$page;return this.navs.find(e=>-1!==t.indexOf(e.link))},sidebar(){const{pages:t}=this.$site,e=[];return t.forEach(t=>{if(-1!==t.path.indexOf(this.currentNav.link)){if(!t.headers||!t.headers.length)return;const a=t.headers.find(t=>2===t.level);if(!a)return;-1!==t.path.indexOf(".html")?e.push({title:a.title,path:t.path}):e.unshift({title:a.title,path:t.path})}}),this.sortSideBar(e)},content(){const{frontmatter:{content:t}}=this.$page;return t}},components:{[s.default.name]:s.default,[n.default.name]:n.default}},i=a(13),o=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("section",[e("his-header",{attrs:{navs:t.navs}}),t._v(" "),e("main",{staticClass:"doc-main typo",class:"/"!==t.$page.path?"doc-main-md":""},["/"!==t.$page.path?[e("his-side",{attrs:{sidebar:t.sidebar}})]:t._e(),t._v(" "),t.content?[e(t.content,{tag:"component"})]:[e("Content")]],2),t._v(" "),e("footer",{staticClass:"doc-footer"})],1)}),[],!1,null,null,null);e.default=o.exports}}]);