"use strict";(self.webpackChunkcost_calculator=self.webpackChunkcost_calculator||[]).push([[4],{6004:(V,p,a)=>{a.r(p),a.d(p,{CategoryModule:()=>G});var C=a(6019),y=a(6510),h=a(7725),v=a(8363),l=a(9133),x=a(4069),m=a(1292),t=a(3668);let S=(()=>{class e{constructor(o,n){this.dialogRef=o,this.data=n}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275directiveInject(m.so),t.\u0275\u0275directiveInject(m.WI))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-confirm-dialog"]],decls:7,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[2,"float","right","margin","20px"],["type","button","value","Sil","color","primary","mat-raised-button","",2,"margin","0px 10px",3,"mat-dialog-close"],["type","button","value","\u0130ptal","color","secondary","mat-raised-button","",3,"mat-dialog-close"]],template:function(o,n){1&o&&(t.\u0275\u0275elementStart(0,"h1",0),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",2),t.\u0275\u0275element(5,"input",3),t.\u0275\u0275element(6,"input",4),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(n.data.title),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",n.data.message,"\n"),t.\u0275\u0275advance(2),t.\u0275\u0275property("mat-dialog-close",!0),t.\u0275\u0275advance(1),t.\u0275\u0275property("mat-dialog-close",!1))},directives:[m.uh,m.xY,m.ZT],styles:[""]}),e})();var E=a(4817),g=a(515),s=a(1893),b=a(2204),F=a(5093),i=a(282),I=a(5038),R=a(2450);function T(e,r){1&e&&(t.\u0275\u0275elementStart(0,"th",19),t.\u0275\u0275text(1," Kategori Kodu "),t.\u0275\u0275elementEnd())}function D(e,r){if(1&e&&(t.\u0275\u0275elementStart(0,"td",20),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&e){const o=r.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",o.categoryid," ")}}function M(e,r){1&e&&(t.\u0275\u0275elementStart(0,"th",19),t.\u0275\u0275text(1," Kategori Ad\u0131 "),t.\u0275\u0275elementEnd())}function A(e,r){if(1&e&&(t.\u0275\u0275elementStart(0,"td",20),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&e){const o=r.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",o.title," ")}}function w(e,r){1&e&&(t.\u0275\u0275elementStart(0,"th",19),t.\u0275\u0275text(1," \u0130\u015flem B\xf6l\xfcm\xfc"),t.\u0275\u0275elementEnd())}function j(e,r){if(1&e){const o=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"md-cell"),t.\u0275\u0275elementStart(1,"button",21),t.\u0275\u0275listener("click",function(){const u=t.\u0275\u0275restoreView(o).$implicit;return t.\u0275\u0275nextContext().updateRecord(u)}),t.\u0275\u0275elementStart(2,"mat-icon"),t.\u0275\u0275text(3,"edit"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"button",22),t.\u0275\u0275listener("click",function(){const u=t.\u0275\u0275restoreView(o).$implicit;return t.\u0275\u0275nextContext().deleteRecord(u.id)}),t.\u0275\u0275elementStart(5,"mat-icon"),t.\u0275\u0275text(6,"delete_outline"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()}}function L(e,r){1&e&&t.\u0275\u0275element(0,"tr",23)}function $(e,r){1&e&&t.\u0275\u0275element(0,"tr",24)}let z=(()=>{class e{constructor(o,n,c){this.firebaseService=o,this.fb=n,this.dialog=c,this.displayedColumns=["position","name","demo-actions"],this.reactiveForm()}ngOnInit(){this.getItems()}getItems(){this.firebaseService.getCategories(),this.categories$=this.firebaseService.categories$,this.categories$=this.categories$.pipe((0,x.UI)(o=>(o.sort(this.sortByTitle),o))),this.dataSource=this.categories$,this.mode="create"}reactiveForm(){this.categoryForm=this.fb.group({title:["",[l.kI.required,l.kI.minLength(3),l.kI.maxLength(50)]]})}submitForm(){"create"==this.mode?(this.localCategory={categoryid:this.getMaxCategoryId(),title:this.categoryForm.controls.title.value,remarks:""},this.firebaseService.addCategory(this.localCategory).catch(o=>{console.log(o)})):(this.localCategory={categoryid:this.updatedRecord.categoryid,title:this.categoryForm.controls.title.value,remarks:""},this.firebaseService.updateCategory(this.localCategory,this.updatedRecord.id).catch(o=>{console.log(o)})),this.categoryForm.reset(),this.categoryForm.markAsPristine(),this.categoryForm.markAsUntouched(),this.localCategory=null,this.mode="create",this.updatedRecord=null,this.getItems()}cancel(){this.categoryForm.reset(),this.categoryForm.markAsPristine(),this.categoryForm.markAsUntouched(),this.localCategory=null,this.mode="create",this.updatedRecord=null}getMaxCategoryId(){return this.categories$.subscribe(o=>{this.categoryArr=o}),Math.max.apply(Math,this.categoryArr.map(function(o){return o.categoryid}))+1}deleteRecord(o){console.log("Deleted recor is: "+o),this.dialog.open(S,{data:{title:"Category Silme Do\u011frulama",message:"Silmek istedi\u011finizden emin misiniz?"}}).afterClosed().subscribe(c=>{!0===c&&(this.firebaseService.deleteCategorie(o),this.mode="create",this.getItems())})}updateRecord(o){this.mode="update",this.categoryForm.patchValue({title:o.title}),this.updatedRecord=o}sortByTitle(o,n){return n.title>o.title?-1:n.title<o.title?1:0}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275directiveInject(E.D),t.\u0275\u0275directiveInject(l.qu),t.\u0275\u0275directiveInject(m.uw))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-category"]],decls:32,vars:10,consts:[[1,"container"],["fxLayoutAlign","center center",1,"mat-display-3","special-header"],["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["autocomplete","off",3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"row"],[3,"formControl","label","error","minlength","maxlength"],["color","primary","mat-raised-button","",3,"disabled"],["color","secondary","mat-raised-button","",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","demo-actions"],[4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","matTooltip","G\xfcncelle","matTooltipPosition","right","aria-label","Example icon button with a home icon",3,"click"],["mat-icon-button","","color","warn","matTooltip","Sil","matTooltipPosition","right","aria-label","Example icon button with a home icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275text(2," Kategori Tan\u0131mlama "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"mat-dialog-content"),t.\u0275\u0275elementStart(4,"div",2),t.\u0275\u0275elementStart(5,"div",3),t.\u0275\u0275elementStart(6,"form",4),t.\u0275\u0275listener("ngSubmit",function(){return n.categoryForm.valid&&n.submitForm()}),t.\u0275\u0275elementStart(7,"mat-card"),t.\u0275\u0275elementStart(8,"mat-card-header"),t.\u0275\u0275elementStart(9,"mat-card-title"),t.\u0275\u0275element(10,"h2",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"mat-card-content"),t.\u0275\u0275elementStart(12,"div",6),t.\u0275\u0275elementStart(13,"div"),t.\u0275\u0275element(14,"app-text-input",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(15,"mat-card-actions"),t.\u0275\u0275elementStart(16,"button",8),t.\u0275\u0275text(17," Kaydet "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(18,"button",9),t.\u0275\u0275listener("click",function(){return n.cancel()}),t.\u0275\u0275text(19," Temizle "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(20,"table",10),t.\u0275\u0275elementContainerStart(21,11),t.\u0275\u0275template(22,T,2,0,"th",12),t.\u0275\u0275template(23,D,2,1,"td",13),t.\u0275\u0275elementContainerEnd(),t.\u0275\u0275elementContainerStart(24,14),t.\u0275\u0275template(25,M,2,0,"th",12),t.\u0275\u0275template(26,A,2,1,"td",13),t.\u0275\u0275elementContainerEnd(),t.\u0275\u0275elementContainerStart(27,15),t.\u0275\u0275template(28,w,2,0,"th",12),t.\u0275\u0275template(29,j,7,0,"md-cell",16),t.\u0275\u0275elementContainerEnd(),t.\u0275\u0275template(30,L,1,0,"tr",17),t.\u0275\u0275template(31,$,1,0,"tr",18),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(6),t.\u0275\u0275property("formGroup",n.categoryForm),t.\u0275\u0275advance(8),t.\u0275\u0275property("formControl",n.categoryForm.controls.title)("label","Kategori ad\u0131")("error","L\xfctfen kategori ad\u0131 giriniz")("minlength","3")("maxlength","40"),t.\u0275\u0275advance(2),t.\u0275\u0275property("disabled",!n.categoryForm.valid),t.\u0275\u0275advance(4),t.\u0275\u0275property("dataSource",n.dataSource),t.\u0275\u0275advance(10),t.\u0275\u0275property("matHeaderRowDef",n.displayedColumns),t.\u0275\u0275advance(1),t.\u0275\u0275property("matRowDefColumns",n.displayedColumns))},directives:[g.Wh,m.xY,g.xw,g.yH,l._Y,l.JL,l.sg,s.a8,s.dk,s.n5,m.uh,s.dn,b.t,l.JJ,l.oH,l.wO,l.nD,s.hq,F.lW,i.BZ,i.w1,i.fO,i.Dz,i.as,i.nj,i.ge,i.ev,I.gM,R.Hw,i.XQ,i.Gk],styles:['table[_ngcontent-%COMP%]{width:95%;margin:40px auto 0}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:large;font-weight:bold}.special-header[_ngcontent-%COMP%]{margin:1em 0 .5em;color:#343434;font-weight:normal;font-family:"Ultra",sans-serif;font-size:36px;line-height:42px;text-transform:uppercase;text-shadow:0 2px white,0 3px #777}']}),e})();var P=a(1366),O=a(739),k=a(6658),d=a(3010);const H=(0,d.createAction)("[Categories Resolver] Load All Categories");(0,d.createAction)("[Load Categories Effect] All Categories Loaded",(0,d.props)());let f=(()=>{class e{constructor(o){this.store=o,this.loading=!1}resolve(o,n){return this.store.pipe((0,P.b)(()=>{this.loading||(this.loading=!0,this.store.dispatch(H()))}),(0,O.P)(),(0,k.x)(()=>this.loading=!1))}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275inject(d.Store))},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const K=[{path:"",component:v.$,children:[{path:"",component:z,resolve:{categories:f}}]}];let B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({providers:[f],imports:[[h.RouterModule.forChild(K)],h.RouterModule]}),e})(),G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[C.ez,y.m,B]]}),e})()}}]);