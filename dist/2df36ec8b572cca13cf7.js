(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{379:function(e,t,i){},385:function(e,t,i){"use strict";var r=i(379);i.n(r).a},388:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reviews"},[i("routeInfo",{attrs:{pageTitle:"Отзывы"}}),i("div",{staticClass:"container reviews__container"},[i("div",{staticClass:"reviews__add-review"},[i("transition",{attrs:{name:"card"}},[e.addReviewMode?i("Card",{attrs:{modifier:"full-size",title:"Новый отзыв"}},[i("div",{staticClass:"add-review"},[i("div",{staticClass:"add-review__container"},[i("div",{staticClass:"add-review__avatar-block"},[i("div",{staticClass:"add-review__author-photo",style:e.reviewsImage}),i("div",{staticClass:"add-review__add-photo-btn"},[i("label",{staticClass:"btn btn--blue-color"},[e._v("Добавить фото"),i("input",{staticClass:"add-review__file-input",attrs:{type:"file"},on:{change:e.getPhotoUrl}})])])]),i("div",{staticClass:"add-review__desc-block"},[i("div",{staticClass:"add-review__desc-row"},[i("div",{staticClass:"add-review__input-block"},[i("label",{staticClass:"add-review__label",attrs:{for:"author-name"}},[e._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"add-review__input add-review__input-name",attrs:{id:"author-name"},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}})]),i("div",{staticClass:"add-review__input-block"},[i("label",{staticClass:"add-review__label",attrs:{for:"author-position"}},[e._v("Титут автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"add-review__input add-review__input--position",attrs:{id:"author-position"},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}})])]),i("div",{staticClass:"add-review__desc-row"},[i("div",{staticClass:"add-review__input-block"},[i("label",{staticClass:"add-review__label",attrs:{for:"author-review"}},[e._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"add-review__input add-review__input--text",attrs:{id:"author-review",placeholder:"Текст отзыва"},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}})])])]),i("div",{staticClass:"add-review__footer"},[i("div",{staticClass:"add-review__footer-btn"},[i("button",{staticClass:"btn btn--cancel",on:{click:function(t){e.addReviewMode=!1}}},[e._v("Отменить")])]),i("div",{staticClass:"add-review__footer-btn"},[i("button",{staticClass:"btn btn--gradient",on:{click:e.addReview}},[e._v("Сохранить")])])])])])]):e._e()],1),i("transition",{attrs:{name:"card"}},[e.editMode?i("Card",{attrs:{modifier:"full-size",title:"Редактировать"}},[i("div",{staticClass:"add-review"},[i("div",{staticClass:"add-review__container"},[i("div",{staticClass:"add-review__avatar-block"},[i("div",{staticClass:"add-review__author-photo",style:e.reviewsImage}),i("div",{staticClass:"add-review__add-photo-btn"},[i("label",{staticClass:"btn btn--blue-color"},[e._v("Добавить фото"),i("input",{staticClass:"add-review__file-input",attrs:{type:"file"},on:{change:e.createFormData}})])])]),i("div",{staticClass:"add-review__desc-block"},[i("div",{staticClass:"add-review__desc-row"},[i("div",{staticClass:"add-review__input-block"},[i("label",{staticClass:"add-review__label",attrs:{for:"author-name"}},[e._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedSkill.author,expression:"editedSkill.author"}],staticClass:"add-review__input add-review__input-name",attrs:{id:"author-name"},domProps:{value:e.editedSkill.author},on:{input:function(t){t.target.composing||e.$set(e.editedSkill,"author",t.target.value)}}})]),i("div",{staticClass:"add-review__input-block"},[i("label",{staticClass:"add-review__label",attrs:{for:"author-position"}},[e._v("Титут автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedSkill.occ,expression:"editedSkill.occ"}],staticClass:"add-review__input add-review__input--position",attrs:{id:"author-position"},domProps:{value:e.editedSkill.occ},on:{input:function(t){t.target.composing||e.$set(e.editedSkill,"occ",t.target.value)}}})])]),i("div",{staticClass:"add-review__desc-row"},[i("div",{staticClass:"add-review__input-block"},[i("label",{staticClass:"add-review__label",attrs:{for:"author-review"}},[e._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedSkill.text,expression:"editedSkill.text"}],staticClass:"add-review__input add-review__input--text",attrs:{id:"author-review",placeholder:"Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"},domProps:{value:e.editedSkill.text},on:{input:function(t){t.target.composing||e.$set(e.editedSkill,"text",t.target.value)}}})])])]),i("div",{staticClass:"add-review__footer"},[i("div",{staticClass:"add-review__footer-btn"},[i("button",{staticClass:"btn btn--cancel",on:{click:function(t){e.editMode=!1}}},[e._v("Отменить")])]),i("div",{staticClass:"add-review__footer-btn"},[i("button",{staticClass:"btn btn--gradient",on:{click:function(t){return e.changeReview(e.editedSkill)}}},[e._v("Сохранить")])])])])])]):e._e()],1)],1),i("div",{staticClass:"reviews__reviews-container"},[i("transition-group",{staticClass:"reviews__reviews-list",attrs:{tag:"ul",name:"card"}},[i("li",{key:"add-btn-card",staticClass:"reviews__reviews-item"},[i("add-btn",{attrs:{size:"card",name:"Добавить работу"},on:{addBtnHandler:function(t){return e.setMode("add")}}})],1),e._l(e.reviews,function(t,r){return i("li",{key:r,staticClass:"reviews__reviews-item"},[i("reviewItem",{attrs:{author:t.author,occ:t.occ,text:t.text,photo:t.photo,id:t.id},on:{deleteCurrentReview:e.deleteCurrentReview,editReview:e.showEditForm}})],1)})],2)],1)])],1)};r._withStripped=!0;var a=i(131);function n(e,t,i,r,a,n,s){try{var o=e[n](s),d=o.value}catch(e){return void i(e)}o.done?t(d):Promise.resolve(d).then(r,a)}function s(e){return function(){var t=this,i=arguments;return new Promise(function(r,a){var s=e.apply(t,i);function o(e){n(s,r,a,o,d,"next",e)}function d(e){n(s,r,a,o,d,"throw",e)}o(void 0)})}}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){d(e,t,i[t])})}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c={components:{Card:function(){return i.e(0).then(i.bind(null,394))},addBtn:function(){return i.e(9).then(i.bind(null,399))},routeInfo:function(){return i.e(2).then(i.bind(null,396))},reviewItem:function(){return i.e(15).then(i.bind(null,400))}},data:function(){return{url:"",review:{photo:"",author:"",occ:"",text:""},addReviewMode:!1,editMode:!1,editedSkill:{photo:"",author:"",occ:"",text:"",id:""}}},computed:o({},Object(a.c)("reviews",{reviews:function(e){return e.reviews}}),{reviewsImage:function(){return{backgroundImage:"url(".concat(this.url,")")}}}),methods:o({},Object(a.b)("reviews",["fetchReviews","createReview","removeReview","editReview"]),{getBase64:function(e){return this.review.photo=e,new Promise(function(t,i){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return i(e)}})},setMode:function(e){switch(e){case"add":this.addReviewMode=!0,this.editMode=!1;break;case"edit":this.editMode=!0,this.addReviewMode=!1}},setEditedSkill:function(e){var t=e.author,i=e.text,r=e.occ,a=e.id;this.editedSkill.author=t,this.editedSkill.text=i,this.editedSkill.occ=r,this.editedSkill.id=a},createFormData:function(e){var t=new FormData;return t.append("text",e.text),t.append("author",e.author),t.append("occ",e.occ),t.append("photo",e.photo),t},resetNewReview:function(){this.review.photo="",this.review.author="",this.review.occ="",this.review.text="",this.url=""},addReview:function(){var e=s(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.createFormData(this.review),e.next=4,this.createReview(t);case 4:return e.sent,e.next=7,this.resetNewReview();case 7:return e.next=9,this.fetchReviews();case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),getPhotoUrl:function(){var e=s(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getBase64(t.target.files[0]);case 3:i=e.sent,this.url=i,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),deleteCurrentReview:function(){var e=s(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.removeReview(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("error.message",e.t0.message);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),showEditForm:function(){var e=s(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setMode("edit"),e.next=4,this.setEditedSkill(t);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),changeReview:function(){var e=s(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.editReview(t);case 3:this.editMode=!1,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()}),created:function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchReviews();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},u=(i(385),i(94)),l=Object(u.a)(c,r,[],!1,null,"1f42caf0",null);l.options.__file="src/admin/components/pages/reviews.vue";t.default=l.exports}}]);