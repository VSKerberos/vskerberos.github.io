"use strict";(self.webpackChunkcost_calculator=self.webpackChunkcost_calculator||[]).push([[220],{8220:(Y,g,a)=>{a.r(g),a.d(g,{CategoryModule:()=>k});var p=a(8583),y=a(4251),u=a(5987),C=a(8369),i=a(3679),f=a(1295),t=a(7716),Z=a(3131),s=a(5618),h=a(2238),l=a(3738),x=a(3494),T=a(1095),c=a(2789),v=a(1552);function A(e,r){1&e&&(t.TgZ(0,"th",19),t._uU(1," Kategori Kodu "),t.qZA())}function F(e,r){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",o.categoryid," ")}}function b(e,r){1&e&&(t.TgZ(0,"th",19),t._uU(1," Kategori Ad\u0131 "),t.qZA())}function U(e,r){if(1&e&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",o.title," ")}}function R(e,r){1&e&&(t.TgZ(0,"th",19),t._uU(1," \u0130\u015flem B\xf6l\xfcm\xfc"),t.qZA())}function S(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"md-cell"),t.TgZ(1,"button",21),t.NdJ("click",function(){const d=t.CHM(o).$implicit;return t.oxw().updateRecord(d)}),t.TgZ(2,"mat-icon"),t._uU(3,"build"),t.qZA(),t._uU(4," G\xfcncelle"),t.qZA(),t._uU(5," \xa0 "),t.TgZ(6,"button",22),t.NdJ("click",function(){const d=t.CHM(o).$implicit;return t.oxw().deleteRecord(d.id)}),t.TgZ(7,"mat-icon"),t._uU(8,"delete_outline"),t.qZA(),t._uU(9," Sil"),t.qZA(),t.qZA()}}function D(e,r){1&e&&t._UZ(0,"tr",23)}function J(e,r){1&e&&t._UZ(0,"tr",24)}const _=[{path:"",component:C.$,children:[{path:"",component:(()=>{class e{constructor(o,n){this.firebaseService=o,this.fb=n,this.displayedColumns=["position","name","demo-actions"],this.reactiveForm()}ngOnInit(){this.getItems()}getItems(){this.firebaseService.getCategories(),this.categories$=this.firebaseService.categories$,this.categories$=this.categories$.pipe((0,f.UI)(o=>(o.sort((n,m)=>n.categoryid<m.categoryid?-1:1),o))),this.dataSource=this.categories$,this.mode="create"}reactiveForm(){this.categoryForm=this.fb.group({title:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(50)]]})}submitForm(){"create"==this.mode?(this.localCategory={categoryid:this.getMaxCategoryId(),title:this.categoryForm.controls.title.value,remarks:""},this.firebaseService.addCategory(this.localCategory).catch(o=>{console.log(o)})):(this.localCategory={categoryid:this.updatedRecord.categoryid,title:this.categoryForm.controls.title.value,remarks:""},this.firebaseService.updateCategory(this.localCategory,this.updatedRecord.id).catch(o=>{console.log(o)})),this.categoryForm.reset(),this.categoryForm.markAsPristine(),this.categoryForm.markAsUntouched(),this.localCategory=null,this.mode="create",this.updatedRecord=null,this.getItems()}cancel(){this.categoryForm.reset(),this.categoryForm.markAsPristine(),this.categoryForm.markAsUntouched(),this.localCategory=null,this.mode="create",this.updatedRecord=null}getMaxCategoryId(){return this.categories$.subscribe(o=>{this.categoryArr=o}),Math.max.apply(Math,this.categoryArr.map(function(o){return o.categoryid}))+1}deleteRecord(o){console.log("Deleted recor is: "+o),this.firebaseService.deleteCategorie(o),this.mode="create",this.getItems()}updateRecord(o){this.mode="update",console.log("update record:"+o.title),this.categoryForm.patchValue({title:o.title}),this.updatedRecord=o}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(Z.D),t.Y36(i.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-category"]],decls:32,vars:10,consts:[[1,"container"],["fxLayoutAlign","center center",1,"mat-display-3","special-header"],["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["autocomplete","off",3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"row"],[3,"formControl","label","error","minlength","maxlength"],["color","primary","mat-raised-button","",3,"disabled"],["color","secondary","mat-raised-button","",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","demo-actions"],[4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2," Kategori Tan\u0131mlama "),t.qZA(),t.TgZ(3,"mat-dialog-content"),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return n.categoryForm.valid&&n.submitForm()}),t.TgZ(7,"mat-card"),t.TgZ(8,"mat-card-header"),t.TgZ(9,"mat-card-title"),t._UZ(10,"h2",5),t.qZA(),t.qZA(),t.TgZ(11,"mat-card-content"),t.TgZ(12,"div",6),t.TgZ(13,"div"),t._UZ(14,"app-text-input",7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"mat-card-actions"),t.TgZ(16,"button",8),t._uU(17," Kaydet "),t.qZA(),t.TgZ(18,"button",9),t.NdJ("click",function(){return n.cancel()}),t._uU(19," Temizle "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"table",10),t.ynx(21,11),t.YNc(22,A,2,0,"th",12),t.YNc(23,F,2,1,"td",13),t.BQk(),t.ynx(24,14),t.YNc(25,b,2,0,"th",12),t.YNc(26,U,2,1,"td",13),t.BQk(),t.ynx(27,15),t.YNc(28,R,2,0,"th",12),t.YNc(29,S,10,0,"md-cell",16),t.BQk(),t.YNc(30,D,1,0,"tr",17),t.YNc(31,J,1,0,"tr",18),t.qZA()),2&o&&(t.xp6(6),t.Q6J("formGroup",n.categoryForm),t.xp6(8),t.Q6J("formControl",n.categoryForm.controls.title)("label","Kategori ad\u0131")("error","L\xfctfen kategori ad\u0131 giriniz")("minlength","3")("maxlength","40"),t.xp6(2),t.Q6J("disabled",!n.categoryForm.valid),t.xp6(4),t.Q6J("dataSource",n.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},directives:[s.Wh,h.xY,s.xw,s.yH,i._Y,i.JL,i.sg,l.a8,l.dk,l.n5,h.uh,l.dn,x.t,i.JJ,i.oH,i.wO,i.nD,l.hq,T.lW,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,c.ge,c.ev,v.Hw,c.XQ,c.Gk],styles:['table[_ngcontent-%COMP%]{width:95%;margin:40px auto 0}.special-header[_ngcontent-%COMP%]{margin:1em 0 .5em;color:#343434;font-weight:normal;font-family:"Ultra",sans-serif;font-size:36px;line-height:42px;text-transform:uppercase;text-shadow:0 2px white,0 3px #777}']}),e})()}]}];let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(_)],u.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,y.m,q]]}),e})()}}]);