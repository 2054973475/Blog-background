(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c09e77c"],{"07ac":function(e,t,a){var i=a("23e7"),r=a("6f53").values;i({target:"Object",stat:!0},{values:function(e){return r(e)}})},"0b4d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[a("div",{staticClass:"vicp-wrap"},[a("div",{staticClass:"vicp-close",on:{click:e.off}},[a("i",{staticClass:"vicp-icon4"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[a("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[a("i",{staticClass:"vicp-icon1-arrow"}),a("i",{staticClass:"vicp-icon1-body"}),a("i",{staticClass:"vicp-icon1-bottom"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),1==e.step?a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file",accept:"image/*"},on:{change:e.handleChange}}):e._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),2==e.step?a("div",{staticClass:"vicp-step2"},[a("div",{staticClass:"vicp-crop"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[a("div",{staticClass:"vicp-img-container",on:{wheel:function(t){return t.preventDefault(),e.handleMouseWheel(t)}}},[a("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),a("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),a("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),a("div",{staticClass:"vicp-range"},[a("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{mousemove:e.zoomChange}}),a("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),a("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e.noRotate?e._e():a("div",{staticClass:"vicp-rotate"},[a("i",{on:{click:e.rotateImg}},[e._v("↻")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[a("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():a("div",{staticClass:"vicp-preview-item"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),a("span",[e._v(e._s(e.lang.preview))])]),e.noCircle?e._e():a("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),a("span",[e._v(e._s(e.lang.preview))])])])])]),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),a("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),3==e.step?a("div",{staticClass:"vicp-step3"},[a("div",{staticClass:"vicp-upload"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),a("div",{staticClass:"vicp-progress-wrap"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[a("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+" ")])]),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),a("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},r=[],o=a("53ca"),s=(a("a9e3"),a("b0c0"),a("d3b7"),a("159b"),a("b64b"),{zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando...",noSupported:"Browser não suportado, por favor utilize o Internet Explorer 10+ ou outro browser",success:"Imagem carregada com sucesso",fail:"Ocorreu um erro ao carregar a imagem",preview:"Pré-visualização",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Por favor envie apenas imagens",outOfSize:"A imagem excede o limite de tamanho suportado: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},"pt-pt":{hint:"Clique ou arraste o arquivo para a janela para carregar",loading:"A processar...",noSupported:"Browser não suportado, por favor utilize o Internet Explorer 10+ ou outro browser",success:"Imagem carregada com sucesso",fail:"Ocorreu um erro ao carregar a imagem",preview:"Pré-visualização",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Guardar"},error:{onlyImg:"Por favor envie apenas imagens",outOfSize:"A imagem excede o limite de tamanho suportado: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussi",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atrás",save:"Guardar"},error:{onlyImg:"Únicamente imágenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeña. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}},ua:{hint:"Натисніть, або перетягніть файл в це вікно",loading:"Завантажую……",noSupported:"Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",success:"Завантаження виконано успішно",fail:"Помилка завантаження",preview:"Попередній перегляд",btn:{off:"Відмінити",close:"Закрити",back:"Назад",save:"Зберегти"},error:{onlyImg:"Тільки зображення",outOfSize:"Зображення перевищує граничний розмір: ",lowestPx:"Мінімальний розмір зображення: "}},it:{hint:"Clicca o trascina qui il file per caricarlo",loading:"Caricamento del file…",noSupported:"Browser non supportato, per favore usa IE10+ o un altro browser",success:"Caricamento completato",fail:"Caricamento fallito",preview:"Anteprima",btn:{off:"Annulla",close:"Chiudi",back:"Indietro",save:"Salva"},error:{onlyImg:"Sono accettate solo immagini",outOfSize:"L'immagine eccede i limiti di dimensione: ",lowestPx:"L'immagine è troppo piccola. Il requisito minimo è: "}},ar:{hint:"اضغط أو اسحب الملف هنا للتحميل",loading:"جاري التحميل...",noSupported:"المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",success:"تم التحميل بنجاح",fail:"فشل التحميل",preview:"معاينه",btn:{off:"إلغاء",close:"إغلاق",back:"رجوع",save:"حفظ"},error:{onlyImg:"صور فقط",outOfSize:"تتجاوز الصوره الحجم المحدد: ",lowestPx:"حجم الصورة صغير جدا. من المتوقع على الأقل: "}},ug:{hint:"مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",loading:"يوللىنىۋاتىدۇ...",noSupported:"تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",success:"غەلبىلىك بولدى",fail:"مەغلۇب بولدى",preview:"ئۈنۈم رەسىم",btn:{off:"بولدى قىلىش",close:"تاقاش",back:"ئالدىنقى قەدەم",save:"ساقلاش"},error:{onlyImg:"پەقەت رەسىم فورماتىنىلا قوللايدۇ",outOfSize:"رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",lowestPx:"رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"}},th:{hint:"คลิ๊กหรือลากรูปมาที่นี่",loading:"กำลังอัพโหลด…",noSupported:"เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",success:"อัพโหลดสำเร็จ",fail:"อัพโหลดล้มเหลว",preview:"ตัวอย่าง",btn:{off:"ยกเลิก",close:"ปิด",back:"กลับ",save:"บันทึก"},error:{onlyImg:"ไฟล์ภาพเท่านั้น",outOfSize:"ไฟล์ใหญ่เกินกำหนด: ",lowestPx:"ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "}},mm:{hint:"ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",loading:"တင်နေသည်…",noSupported:"ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",success:"ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",fail:"ဖိုင်တင်နေမှု မအောင်မြင်ပါ",preview:"အစမ်းကြည့်",btn:{off:"မလုပ်တော့ပါ",close:"ပိတ်မည်",back:"နောက်သို့",save:"သိမ်းမည်"},error:{onlyImg:"ဓာတ်ပုံ သီးသန့်သာ",outOfSize:"ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",lowestPx:"ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "}},se:{hint:"Klicka eller dra en fil hit för att ladda upp den",loading:"Laddar upp…",noSupported:"Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",success:"Uppladdning lyckades",fail:"Uppladdning misslyckades",preview:"Förhandsgranska",btn:{off:"Avbryt",close:"Stäng",back:"Tillbaka",save:"Spara"},error:{onlyImg:"Endast bilder",outOfSize:"Bilden är större än max-gränsen: ",lowestPx:"Bilden är för liten. Minimum är: "}},pl:{hint:"Kliknij lub upuść plik tutaj",loading:"Wgrywanie…",noSupported:"Twoja przeglądarka nie jest wspierana, użyj IE10+ lub innej przeglądarki",success:"Błąd",fail:"Sukces",preview:"Podgląd",btn:{off:"Anuluj",close:"Zamknij",back:"Wstecz",save:"Zapisz"},error:{onlyImg:"Tylko obrazki",outOfSize:"Rozmiar obrazka przekracza: ",lowestPx:"Obrazek jest za mały. Minimalne wymiary to: "}},vi:{hint:"Bấm hoặc kéo thả file để tải lên",loading:"Đang tải lên...",noSupported:"Trình duyệt không hỗ trợ, hãy sử dụng IE10+ hoặc trình duyệt khác",success:"Tải lên thành công",fail:"Tải lên thất bại",preview:"Xem trước",btn:{off:"Huỷ",close:"Đóng",back:"Trở lại",save:"Lưu"},error:{onlyImg:"Chỉ hình ảnh",outOfSize:"Hình ảnh vượt quá giới hạn cho phép: ",lowestPx:"Kích thước hình quá nhỏ. Kích thước tối thiểu: "}},fa:{hint:"برای بارگذاری تصویر کلیک کنید یا تصویر را به این ناحیه درگ کنید",loading:"در حال بارگذاری ...",noSupported:"نسخه یا نوع مرورگر شما از این قابلیت پشتیبانی نمیکند. لطفا از اینترنت اکسپلورر ورژن بالاتر از ده یا مرورگرهای دیگر استفاده کنید",success:"بارگذاری با موفقیت انجام شد",fail:"بارگذاری انجام نشد",preview:"پیشنمایش",btn:{off:"لغو",close:"بستن",back:"بازگشت",save:"ذخیره"},error:{onlyImg:"فقط تصویر",outOfSize:"حجم تصویر بیش از اندازه‌ی مجاز است: ",lowestPx:"حجم تصویر بسیار پایین است، حداقل سایز تصویر: "}},da:{hint:"Klik eller træk en fil herhen for at uploade",loading:"Uploader…",noSupported:"Din browser er ikke understøttet, benyt venligst IE10+ eller en anden browser",success:"Upload lykkedes",fail:"Upload mislykkedes",preview:"Preview",btn:{off:"Fortryd",close:"Luk",back:"Tilbage",save:"Gem"},error:{onlyImg:"Kun billeder",outOfSize:"Billedet overskrider størrelsesgrænsen: ",lowestPx:"Billedet er for lille. Minimumsstørrelsen er: "}},ko:{hint:"클릭 또는 드래그하여 이미지를 업로드하세요.",loading:"업로드 중…",noSupported:"죄송합니다, 인터넷 익스플로러 버전 10 이상 혹은 다른 브라우저를 사용해주세요.",success:"업로드 성공",fail:"업로드 실패",preview:"미리보기",btn:{off:"취소",close:"닫기",back:"뒤로가기",save:"저장"},error:{onlyImg:"이미지만 업로드 할 수 있습니다.",outOfSize:"업로드 할 수 있는 최대 이미지 사이즈를 초과했습니다: ",lowestPx:"이미지의 크기는 적어도 다음 사이즈보다 커야 합니다: "}}}),n={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},l=function(e,t){e=e.split(",")[1],e=window.atob(e);for(var a=new Uint8Array(e.length),i=0;i<e.length;i++)a[i]=e.charCodeAt(i);return new Blob([a],{type:t})},c=function(e,t){var a=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),i=a.ele;if(i){var r=i.getBoundingClientRect(),o=i.querySelector(".e-ripple");switch(o?o.className="e-ripple":(o=document.createElement("span"),o.className="e-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",i.appendChild(o)),a.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=e.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=e.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=a.bgc,o.className="e-ripple z-active",!1}},u={props:{field:{type:String,default:"avatar"},ki:{type:String,default:"0"},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},imgBgc:{type:String,default:"#fff"},withCredentials:{type:Boolean,default:!1},method:{type:String,default:"POST"},initialImgUrl:{type:String,default:""}},data:function(){var e=this,t=e.imgFormat,a=e.langType,i=e.langExt,r=e.width,o=e.height,l=!0,c=["jpg","png"],u=-1===c.indexOf(t)?"jpg":t,h=s[a]?s[a]:s["en"],p=n[u];return e.imgFormat=u,i&&Object.assign(h,i),"function"!=typeof FormData&&(l=!1),{mime:p,lang:h,isSupported:l,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:r/o,sourceImg:null,sourceImgUrl:this.initialImgUrl,createImgUrl:this.initialImgUrl,sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,a=e.y+t.y+"px",i=e.x+t.x+"px";return{top:a,left:i,width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,t=this.height,a=this.ratio,i=this.sourceImgContainer,r=i,o=r.width/r.height,s=0,n=0,l=r.width,c=r.height,u=1;return a<o&&(u=r.height/t,l=r.height*a,s=(r.width-l)/2),a>o&&(u=r.width/e,c=r.width/a,n=(r.height-c)/2),{scale:u,x:s,y:n,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,a=t,i=e,r=i.width==a.width?i.width:(a.width-i.width)/2,o=i.height==a.height?i.height:(a.height-i.height)/2;return{width:r+"px",height:o+"px"}},previewStyle:function(){this.width,this.height;var e=this.ratio,t=this.previewContainer,a=t,i=a.width,r=a.height,o=i/r;return e<o&&(i=a.height*e),e>o&&(r=a.width/e),{width:i+"px",height:r+"px"}}},watch:{value:function(e){e&&1!=this.loading&&this.reset()}},methods:{ripple:function(e){c(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),3==e.step&&2==e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this,a=t.lang,i=t.maxSize;return-1===e.type.indexOf("image")?(t.hasError=!0,t.errorMsg=a.error.onlyImg,!1):!(e.size/1024>i)||(t.hasError=!0,t.errorMsg=a.error.outOfSize+i+"kb",!1)},reset:function(){var e=this;e.loading=0,e.hasError=!1,e.errorMsg="",e.progress=0},setSourceImg:function(e){this.$emit("src-file-set",e.name,e.type,e.size);var t=this,a=new FileReader;a.onload=function(e){t.sourceImgUrl=a.result,t.startCrop()},a.readAsDataURL(e)},startCrop:function(){var e=this,t=e.width,a=e.height,i=e.ratio,r=e.scale,o=e.sourceImgUrl,s=e.sourceImgMasking,n=e.lang,l=s,c=new Image;c.src=o,c.onload=function(){var o=c.naturalWidth,s=c.naturalHeight,u=o/s,h=l.width,p=l.height,d=0,g=0;if(o<t||s<a)return e.hasError=!0,e.errorMsg=n.error.lowestPx+t+"*"+a,!1;i>u&&(p=h/u,g=(l.height-p)/2),i<u&&(h=p*u,d=(l.width-h)/2),r.range=0,r.x=d,r.y=g,r.width=h,r.height=p,r.minWidth=h,r.minHeight=p,r.maxWidth=o*l.scale,r.maxHeight=s*l.scale,r.naturalWidth=o,r.naturalHeight=s,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,a=this.sourceImgMouseDown,i=this.scale,r=a;r.mX=t.screenX,r.mY=t.screenY,r.x=i.x,r.y=i.y,r.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,a=this.sourceImgMouseDown,i=a.on,r=a.mX,o=a.mY,s=a.x,n=a.y,l=this.scale,c=this.sourceImgMasking,u=c,h=t.screenX,p=t.screenY,d=h-r,g=p-o,m=s+d,f=n+g;i&&(m>0&&(m=0),f>0&&(f=0),m<u.width-l.width&&(m=u.width-l.width),f<u.height-l.height&&(f=u.height-l.height),l.x=m,l.y=f)},rotateImg:function(e){var t=this.sourceImg,a=this.scale,i=a.naturalWidth,r=a.naturalHeight,o=r,s=i,l=this.$refs.canvas,c=l.getContext("2d");l.width=o,l.height=s,c.clearRect(0,0,o,s),c.fillStyle="rgba(0,0,0,0)",c.fillRect(0,0,o,s),c.translate(o,0),c.rotate(90*Math.PI/180),c.drawImage(t,0,0,i,r);var u=l.toDataURL(n["png"]);this.sourceImgUrl=u,this.startCrop()},handleMouseWheel:function(e){e=e||window.event;var t=this.scale;e.wheelDelta?(e.wheelDelta>0&&this.zoomImg(t.range>=100?100:++t.range),e.wheelDelta<0&&this.zoomImg(t.range<=0?0:--t.range)):e.detail&&(e.detail>0&&this.zoomImg(t.range>=100?100:++t.range),e.detail<0&&this.zoomImg(t.range<=0?0:--t.range))},startZoomAdd:function(e){var t=this,a=t.scale;function i(){if(a.zoomAddOn){var e=a.range>=100?100:++a.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}a.zoomAddOn=!0,i()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,a=t.scale;function i(){if(a.zoomSubOn){var e=a.range<=0?0:--a.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}a.zoomSubOn=!0,i()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,a=this.sourceImgMasking,i=(this.sourceImgMouseDown,this.scale),r=i.maxWidth,o=i.maxHeight,s=i.minWidth,n=i.minHeight,l=i.width,c=i.height,u=i.x,h=i.y,p=(i.range,a),d=p.width,g=p.height,m=s+(r-s)*e/100,f=n+(o-n)*e/100,v=d/2-m/l*(d/2-u),w=g/2-f/c*(g/2-h);v>0&&(v=0),w>0&&(w=0),v<d-m&&(v=d-m),w<g-f&&(w=g-f),i.x=v,i.y=w,i.width=m,i.height=f,i.range=e,setTimeout((function(){i.range==e&&t.createImg()}),300)},createImg:function(e){var t=this,a=t.imgFormat,i=t.imgBgc,r=t.mime,o=t.sourceImg,s=t.scale,n=s.x,l=s.y,c=s.width,u=s.height,h=t.sourceImgMasking.scale,p=t.$refs.canvas,d=p.getContext("2d");e&&(t.sourceImgMouseDown.on=!1),p.width=t.width,p.height=t.height,d.clearRect(0,0,t.width,t.height),d.fillStyle="png"==a?"rgba(0,0,0,0)":i,d.fillRect(0,0,t.width,t.height),d.drawImage(o,n/h,l/h,c/h,u/h),t.createImgUrl=p.toDataURL(r)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,a=this.field,i=this.ki;this.$emit("crop-success",t,a,i),"string"==typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,a=this.imgFormat,i=this.mime,r=this.url,s=this.params,n=this.headers,c=this.field,u=this.ki,h=this.createImgUrl,p=this.withCredentials,d=this.method,g=new FormData;"object"==Object(o["a"])(s)&&s&&Object.keys(s).forEach((function(e){g.append(e,s[e])})),g.append(c,l(h,i),c+"."+a);var m=function(t){t.lengthComputable&&(e.progress=100*Math.round(t.loaded)/t.total)};e.reset(),e.loading=1,e.setStep(3),new Promise((function(e,t){var a=new XMLHttpRequest;a.open(d,r,!0),a.withCredentials=p,a.onreadystatechange=function(){4===this.readyState&&(200===this.status||201===this.status||202===this.staus?e(JSON.parse(this.responseText)):t(this.status))},a.upload.addEventListener("progress",m,!1),"object"==Object(o["a"])(n)&&n&&Object.keys(n).forEach((function(e){a.setRequestHeader(e,n[e])})),a.send(g)})).then((function(t){e.value&&(e.loading=2,e.$emit("crop-upload-success",t,c,u))}),(function(a){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",a,c,u))}))}},handleEscClose:function(e){!this.value||"Escape"!=e.key&&27!=e.keyCode||this.off()},created:function(){document.addEventListener("keyup",this.handleEscClose)},beforeDestroy:function(){document.removeEventListener("keyup",this.handleEscClose)},mounted:function(){this.sourceImgUrl&&this.startCrop()}},h=u,p=(a("e604"),a("2877")),d=Object(p["a"])(h,i,r,!1,null,null,null);t["a"]=d.exports},4060:function(e,t,a){},"6f53":function(e,t,a){var i=a("83ab"),r=a("df75"),o=a("fc6a"),s=a("d1e7").f,n=function(e){return function(t){var a,n=o(t),l=r(n),c=l.length,u=0,h=[];while(c>u)a=l[u++],i&&!s.call(n,a)||h.push(e?[a,n[a]]:n[a]);return h}};e.exports={entries:n(!0),values:n(!1)}},7156:function(e,t,a){var i=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var o,s;return r&&"function"==typeof(o=t.constructor)&&o!==a&&i(s=o.prototype)&&s!==a.prototype&&r(e,s),e}},a9e3:function(e,t,a){"use strict";var i=a("83ab"),r=a("da84"),o=a("94ca"),s=a("6eeb"),n=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),h=a("d039"),p=a("7c73"),d=a("241c").f,g=a("06cf").f,m=a("9bf2").f,f=a("58a8").trim,v="Number",w=r[v],b=w.prototype,y=l(p(b))==v,I=function(e){var t,a,i,r,o,s,n,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=f(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=c.slice(2),s=o.length,n=0;n<s;n++)if(l=o.charCodeAt(n),l<48||l>r)return NaN;return parseInt(o,i)}return+c};if(o(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var S,k=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof k&&(y?h((function(){b.valueOf.call(a)})):l(a)!=v)?c(new w(I(t)),a,k):I(t)},x=i?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)n(w,S=x[C])&&!n(k,S)&&m(k,S,g(w,S));k.prototype=b,b.constructor=k,s(r,v,k)}},e604:function(e,t,a){"use strict";a("4060")}}]);