(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{400:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{attrs:{modifier:"reviews",type:"review",author:t.author,authorPosition:t.occ,authorAvatarUrl:t.photoUrl}},[i("div",{staticClass:"reviews__review-text"},[t._v(t._s(t.text))]),i("div",{staticClass:"reviews__review-footer"},[i("button",{staticClass:"btn btn--change",on:{click:t.emitEditReview}},[t._v(" Править")]),i("button",{staticClass:"btn btn--delete",on:{click:t.emitRemoveReview}},[t._v(" Удалить")])])])};o._withStripped=!0;var n={components:{Card:function(){return i.e(0).then(i.bind(null,394))}},props:["author","occ","text","photo","id"],data:function(){return{skill:{author:this.author,occ:this.occ,text:this.text,photo:this.photo,id:this.id}}},computed:{photoUrl:function(){return"https://webdev-api.loftschool.com/".concat(this.photo)}},methods:{emitRemoveReview:function(){this.$emit("deleteCurrentReview",this.id)},emitEditReview:function(){this.$emit("editReview",this.skill)}},created:function(){}},s=i(94),r=Object(s.a)(n,o,[],!1,null,null,null);r.options.__file="src/admin/components/reviewItem.vue";e.default=r.exports}}]);