(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{386:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reviews"},[s("routeInfo",{attrs:{pageTitle:"Отзывы"}}),s("div",{staticClass:"container reviews__container"},[s("div",{staticClass:"reviews__add-review"},[s("Card",{attrs:{modifier:"full-size",title:"Новый отзыв"}},[s("div",{staticClass:"add-review"},[s("div",{staticClass:"add-review__container"},[s("div",{staticClass:"add-review__avatar-block"},[s("div",{staticClass:"add-review__author-photo",style:{backgroundImage:"url(undefined)"}}),s("div",{staticClass:"add-review__add-photo-btn"},[s("label",{staticClass:"btn btn--blue-color"},[t._v("Добавить фото"),s("input",{staticClass:"add-review__file-input",attrs:{type:"file"},on:{change:t.appendFileAndRenderPhoto}})])])]),s("div",{staticClass:"add-review__desc-block"},[s("div",{staticClass:"add-review__desc-row"},[s("div",{staticClass:"add-review__input-block"},[s("label",{staticClass:"add-review__label",attrs:{for:"author-name"}},[t._v("Имя автора")]),s("input",{staticClass:"add-review__input add-review__input-name",attrs:{id:"author-name"}})]),s("div",{staticClass:"add-review__input-block"},[s("label",{staticClass:"add-review__label",attrs:{for:"author-position"}},[t._v("Титут автора")]),s("input",{staticClass:"add-review__input add-review__input--position",attrs:{id:"author-position"}})])]),s("div",{staticClass:"add-review__desc-row"},[s("div",{staticClass:"add-review__input-block"},[s("label",{staticClass:"add-review__label",attrs:{for:"author-review"}},[t._v("Отзыв")]),s("textarea",{staticClass:"add-review__input add-review__input--text",attrs:{id:"author-review",placeholder:"Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"}})])])]),s("div",{staticClass:"add-review__footer"},[s("div",{staticClass:"add-review__footer-btn"},[s("button",{staticClass:"btn btn--cancel"},[t._v("Отменить")])]),s("div",{staticClass:"add-review__footer-btn"},[s("button",{staticClass:"btn btn--gradient"},[t._v("Сохранить")])])])])])])],1),s("div",{staticClass:"reviews__reviews-container"},[s("ul",{staticClass:"reviews__reviews-list"},[s("li",{staticClass:"reviews__reviews-item"},[s("add-btn",{attrs:{size:"card",name:"Добавить работу"}})],1),s("li",{staticClass:"reviews__reviews-item"},[s("Card",{attrs:{modifier:"reviews",type:"review",author:"Владимир Сабанцев",authorPosition:"Преподователь",authorAvatarUrl:"https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"}},[s("div",{staticClass:"reviews__review-text"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")]),s("div",{staticClass:"reviews__review-footer"},[s("button",{staticClass:"btn btn--change"},[t._v(" Править")]),s("button",{staticClass:"btn btn--delete"},[t._v(" Удалить")])])])],1),s("li",{staticClass:"reviews__reviews-item"},[s("Card",{attrs:{modifier:"reviews",type:"review",author:"Владимир Сабанцев",authorPosition:"Преподователь",authorAvatarUrl:"https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"}},[s("div",{staticClass:"reviews__review-text"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")]),s("div",{staticClass:"reviews__review-footer"},[s("button",{staticClass:"btn btn--change"},[t._v(" Править")]),s("button",{staticClass:"btn btn--delete"},[t._v(" Удалить")])])])],1),s("li",{staticClass:"reviews__reviews-item"},[s("Card",{attrs:{modifier:"reviews",type:"review",author:"Владимир Сабанцев",authorPosition:"Преподователь",authorAvatarUrl:"https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"}},[s("div",{staticClass:"reviews__review-text"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")]),s("div",{staticClass:"reviews__review-footer"},[s("button",{staticClass:"btn btn--change"},[t._v(" Править")]),s("button",{staticClass:"btn btn--delete"},[t._v(" Удалить")])])])],1),s("li",{staticClass:"reviews__reviews-item"},[s("Card",{attrs:{modifier:"reviews",type:"review",author:"Владимир Сабанцев",authorPosition:"Преподователь",authorAvatarUrl:"https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"}},[s("div",{staticClass:"reviews__review-text"},[t._v("Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах")]),s("div",{staticClass:"reviews__review-footer"},[s("button",{staticClass:"btn btn--change"},[t._v(" Править")]),s("button",{staticClass:"btn btn--delete"},[t._v(" Удалить")])])])],1)])])])],1)};i._withStripped=!0;var a={components:{Card:function(){return s.e(2).then(s.bind(null,383))},addBtn:function(){return s.e(8).then(s.bind(null,391))},routeInfo:function(){return s.e(1).then(s.bind(null,393))}},data:function(){return{photo:"",url:""}},methods:{appendFileAndRenderPhoto:function(t){var e=this,s=t.target.files[0],i=new FileReader;this.photo=s,i.readAsDataURL(s),i.onload=function(){e.renderedPhotoUrl=i.result}}}},r=s(94),o=Object(r.a)(a,i,[],!1,null,null,null);o.options.__file="src/admin/components/pages/reviews.vue";e.default=o.exports}}]);