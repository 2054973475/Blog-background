(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f513f6e4"],{1668:function(t,e,n){},"55d6":function(t,e,n){"use strict";n("a53b")},8256:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},s=[],o=(n("b680"),n("a9e3"),n("ac1f"),n("00b4"),n("d3b7"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(" upload ")]),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v(" Click upload ")])],1),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(" Cancel ")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(" Confirm ")])],1)],1)}),a=[],c=(n("b64b"),n("d81d"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){for(var n=e.uid,i=Object.keys(this.listObj),s=0,o=i.length;s<o;s++)if(this.listObj[i[s]].uid===n)return this.listObj[i[s]].url=t.files.file,void(this.listObj[i[s]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,n=Object.keys(this.listObj),i=0,s=n.length;i<s;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new Promise((function(s,o){var a=new Image;a.src=n.createObjectURL(t),a.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},s(!0)}))}}}),l=c,r=(n("55d6"),n("2877")),u=Object(r["a"])(l,o,a,!1,null,"641aec00",null),d=u.exports,h=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],f=h,m=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],b=m,p=n("b85c"),y=[];function g(){return window.tinymce}var v=function(t,e){var n=document.getElementById(t),i=e||function(){};if(!n){var s=document.createElement("script");s.src=t,s.id=t,document.body.appendChild(s),y.push(i);var o="onload"in s?a:c;o(s)}function a(e){e.onload=function(){this.onerror=this.onload=null;var t,n=Object(p["a"])(y);try{for(n.s();!(t=n.n()).done;){var i=t.value;i(null,e)}}catch(s){n.e(s)}finally{n.f()}y=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function c(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,n=Object(p["a"])(y);try{for(n.s();!(e=n.n()).done;){var i=e.value;i(null,t)}}catch(s){n.e(s)}finally{n.f()}y=null}}}n&&i&&(g()?i(null,n):y.push(i))},w=v,_="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",k={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;w(_,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:b,menubar:this.menubar,plugins:f,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",n.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))},convert_urls:!1})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){return window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},C=k,j=(n("e93b"),Object(r["a"])(C,i,s,!1,null,"ef06b4d6",null));e["a"]=j.exports},"961d":function(t,e,n){},a53b:function(t,e,n){},bccb:function(t,e,n){"use strict";n("961d")},e93b:function(t,e,n){"use strict";n("1668")},fa47:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-about__container"},[n("div",{staticClass:"blog-about__header"},[t._v("关于博主")]),n("div",[n("Tinymce",{attrs:{height:500},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("div",{staticClass:"blog-about__floor"},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")])],1)])},s=[],o=n("8256"),a={name:"TinymceDemo",components:{Tinymce:o["a"]},data:function(){return{content:""}},mounted:function(){var t=this;this.$nextTick((function(){t.content=t.$store.state.user.userInfo.userDesc}))},methods:{handleSubmit:function(){var t={keys:["userDesc"],values:[this.content]};this.$store.dispatch("user/setInfo",t)}}},c=a,l=(n("bccb"),n("2877")),r=Object(l["a"])(c,i,s,!1,null,"32e649aa",null);e["default"]=r.exports}}]);