"use strict";(self.webpackChunkcost_calculator=self.webpackChunkcost_calculator||[]).push([[565],{5565:(Ne,V,m)=>{m.r(V),m.d(V,{MaterialModule:()=>Ie,customCurrencyMaskConfig:()=>H});var y=m(8583),A=m(9895),$=m(8369),T=m(1295),O=m(9191),d=m(3679),_=m(2238),e=m(7716),D=m(3131),x=m(5618),R=m(3738),j=m(3494),b=m(8295),k=m(7441),K=m(9983),N=m(3220),P=m(1095),B=m(2458);function Y(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"mat-option",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275property("value",t.categoryid),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.title," ")}}let U=(()=>{class i{constructor(t,a,r,l){if(this.firebaseService=t,this.fb=a,this.dialogRef=l,this.matcher=new X,this.dialogTitle=r.dialogTitle,this.material=r.material,this.mode=r.mode,this.recordId=r.recordId,"update"==this.mode){if(this.reactiveForm(),this.materialForm.patchValue({name:this.material.name}),this.materialForm.patchValue({unit:this.material.unit}),this.materialForm.patchValue({price:r.material.price}),this.materialForm.patchValue({remarks:r.material.remarks}),this.material.operationdate){let o=this.material.operationdate.split("/");this.yourDate=new Date(Number(o[2]),Number(o[1])-1,Number(o[0]))}this.materialForm.get("operationdate").patchValue(this.yourDate),this.materialForm.get("groups").patchValue(this.material.groupcode)}else(this.mode="create")&&(this.reactiveForm(),this.mystartDate=new Date,this.mystartDate.getDate(),this.mystartDate.getMonth(),this.mystartDate.getFullYear())}ngOnInit(){this.getCategories()}reactiveForm(){this.materialForm=this.fb.group({name:["",[d.kI.required,d.kI.minLength(3),d.kI.maxLength(50)]],unit:["",d.kI.required],price:["",d.kI.required],remarks:["",d.kI.required],groups:[null,d.kI.required],operationdate:[Date,d.kI.required]})}submitForm(){let t=this.materialForm.get("groups").value,a=this.materialForm.get("operationdate").value;new Date(a.getFullYear(),a.getMonth()+1,a.getDate());const l=`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`;if(this.localMaterial={name:this.materialForm.get("name").value,unit:this.materialForm.get("unit").value,price:this.materialForm.get("price").value,operationdate:l,groupcode:t,remarks:this.materialForm.get("remarks").value,orderno:1},this.materialForm.get("operationdate"),console.log("operationdate: "+l),"create"==this.mode)this.firebaseService.addMaterial(this.localMaterial).catch(u=>{console.log(u)});else if("update"==this.mode){var s=this.materialForm.value;console.log(new Intl.NumberFormat("de-DE",{style:"currency",currency:"TRY"}).format(s)),this.firebaseService.updateMaterial(this.localMaterial,this.recordId).catch(u=>{console.log(u)})}this.materialForm.reset(),this.materialForm.markAsPristine(),this.materialForm.markAsUntouched(),this.dialogRef.close([])}cancel(){this.materialForm.reset(),this.materialForm.markAsPristine(),this.materialForm.markAsUntouched()}onClose(){this.materialForm.reset(),this.dialogRef.close([])}getCategories(){this.firebaseService.getCategories(),this.firebaseService.categories$.subscribe(t=>{this.categoryArr=t})}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(D.D),e.\u0275\u0275directiveInject(d.qu),e.\u0275\u0275directiveInject(_.WI),e.\u0275\u0275directiveInject(_.so))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-material-entry"]],decls:43,vars:24,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["autocomplete","off",3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"row"],[3,"formControl","label","error","minlength","maxlength"],[3,"formControl","label","error","maxlength"],[3,"formControl","label","error","maxlength","type"],[3,"formControl","label","error"],["formControlName","groups",3,"errorStateMatcher"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline"],["formControlName","operationdate","matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["color","primary","mat-raised-button","",3,"disabled"],["color","secondary","mat-raised-button","",3,"click"],[3,"value"]],template:function(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"mat-dialog-content"),e.\u0275\u0275elementStart(1,"div",0),e.\u0275\u0275elementStart(2,"div",1),e.\u0275\u0275elementStart(3,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return a.materialForm.valid&&a.submitForm()}),e.\u0275\u0275elementStart(4,"mat-card"),e.\u0275\u0275elementStart(5,"mat-card-header"),e.\u0275\u0275elementStart(6,"mat-card-title"),e.\u0275\u0275elementStart(7,"h2",3),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"mat-card-content"),e.\u0275\u0275elementStart(10,"div",4),e.\u0275\u0275elementStart(11,"div"),e.\u0275\u0275element(12,"app-text-input",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",4),e.\u0275\u0275elementStart(14,"div"),e.\u0275\u0275element(15,"app-text-input",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",4),e.\u0275\u0275elementStart(17,"div"),e.\u0275\u0275element(18,"app-text-input",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"div",4),e.\u0275\u0275elementStart(20,"div"),e.\u0275\u0275element(21,"app-text-input",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"div",4),e.\u0275\u0275elementStart(23,"mat-form-field"),e.\u0275\u0275elementStart(24,"mat-label"),e.\u0275\u0275text(25,"Kategori "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"mat-select",9),e.\u0275\u0275template(27,Y,2,2,"mat-option",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"div",4),e.\u0275\u0275elementStart(29,"mat-form-field",11),e.\u0275\u0275elementStart(30,"mat-label"),e.\u0275\u0275text(31,"Kay\u0131t Tarihi"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(32,"input",12),e.\u0275\u0275element(33,"mat-datepicker-toggle",13),e.\u0275\u0275element(34,"mat-datepicker",null,14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"mat-card-actions"),e.\u0275\u0275elementStart(37,"button",15),e.\u0275\u0275text(38," Kaydet "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"button",16),e.\u0275\u0275listener("click",function(){return a.cancel()}),e.\u0275\u0275text(40," Temizle "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"button",16),e.\u0275\u0275listener("click",function(){return a.onClose()}),e.\u0275\u0275text(42," Kapat "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const r=e.\u0275\u0275reference(35);e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",a.materialForm),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(a.dialogTitle),e.\u0275\u0275advance(4),e.\u0275\u0275property("formControl",a.materialForm.controls.name)("label","malzeme ad\u0131")("error","L\xfctfen malzeme ad\u0131 giriniz")("minlength","3")("maxlength","40"),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControl",a.materialForm.controls.unit)("label","birimi")("error","L\xfctfen birimi giriniz")("maxlength","40"),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControl",a.materialForm.controls.price)("label","fiyat")("error","L\xfctfen fiyat giriniz")("maxlength","40")("type","tel"),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControl",a.materialForm.controls.remarks)("label","a\xe7\u0131klama")("error","L\xfctfen a\xe7\u0131klama giriniz"),e.\u0275\u0275advance(5),e.\u0275\u0275property("errorStateMatcher",a.matcher),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",a.categoryArr),e.\u0275\u0275advance(5),e.\u0275\u0275property("matDatepicker",r),e.\u0275\u0275advance(1),e.\u0275\u0275property("for",r),e.\u0275\u0275advance(4),e.\u0275\u0275property("disabled",!a.materialForm.valid)}},directives:[_.xY,x.xw,x.Wh,x.yH,d._Y,d.JL,d.sg,R.a8,R.dk,R.n5,_.uh,R.dn,j.t,d.JJ,d.oH,d.wO,d.nD,b.KE,b.hX,k.gD,d.u,y.sg,d.Fj,K.Nt,N.hl,N.nW,b.R9,N.Mq,R.hq,P.lW,B.ey],encapsulation:2}),i})();class X{isErrorState(n,t){return!!(n&&n.invalid&&(n.dirty||n.touched||t&&t.submitted))}}var J=m(3066),L=m(4929),W=m(6627),g=m(2789),Z=m(1436);let Q=(()=>{class i{transform(t,a){let r;if(t&&null!=t.groupcode){r="if";let l=JSON.parse(localStorage.getItem("categories"));null!=l&&l.length>0&&(r=l.find(o=>o.categoryid==t.groupcode).title)}else r="tan\u0131ms\u0131z kategori";return r}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.\u0275\u0275definePipe({name:"categoryName",type:i,pure:!0}),i})();function q(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"mat-option",11),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275property("value",t.categoryid),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.title," ")}}function ee(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," Grup "),e.\u0275\u0275elementEnd())}function te(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"td",26),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"categoryName"),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,t)," ")}}function ne(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," Ad\u0131 "),e.\u0275\u0275elementEnd())}function ie(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"td",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.name," ")}}function ae(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," Birimi "),e.\u0275\u0275elementEnd())}function re(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"td",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.unit," ")}}function le(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," Tarih "),e.\u0275\u0275elementEnd())}function oe(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"td",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.operationdate," ")}}function se(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," Fiyat "),e.\u0275\u0275elementEnd())}function me(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"td",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.price," ")}}function ue(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," A\xe7\u0131klama "),e.\u0275\u0275elementEnd())}function de(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"td",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.remarks," ")}}function ce(i,n){1&i&&(e.\u0275\u0275elementStart(0,"th",25),e.\u0275\u0275text(1," \u0130\u015flem B\xf6l\xfcm\xfc"),e.\u0275\u0275elementEnd())}function he(i,n){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"md-cell"),e.\u0275\u0275elementStart(1,"button",27),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext(2).editMaterial(l)}),e.\u0275\u0275elementStart(2,"mat-icon"),e.\u0275\u0275text(3,"edit"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",28),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext(2).deleteRecord(l.id)}),e.\u0275\u0275elementStart(5,"mat-icon"),e.\u0275\u0275text(6,"delete_outline"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}function pe(i,n){1&i&&e.\u0275\u0275element(0,"tr",29)}function fe(i,n){1&i&&e.\u0275\u0275element(0,"tr",30)}function ge(i,n){if(1&i&&(e.\u0275\u0275elementStart(0,"table",12),e.\u0275\u0275elementContainerStart(1,13),e.\u0275\u0275template(2,ee,2,0,"th",14),e.\u0275\u0275template(3,te,3,3,"td",15),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(4,16),e.\u0275\u0275template(5,ne,2,0,"th",14),e.\u0275\u0275template(6,ie,2,1,"td",15),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(7,17),e.\u0275\u0275template(8,ae,2,0,"th",14),e.\u0275\u0275template(9,re,2,1,"td",15),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(10,18),e.\u0275\u0275template(11,le,2,0,"th",14),e.\u0275\u0275template(12,oe,2,1,"td",15),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(13,19),e.\u0275\u0275template(14,se,2,0,"th",14),e.\u0275\u0275template(15,me,2,1,"td",15),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(16,20),e.\u0275\u0275template(17,ue,2,0,"th",14),e.\u0275\u0275template(18,de,2,1,"td",15),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(19,21),e.\u0275\u0275template(20,ce,2,0,"th",14),e.\u0275\u0275template(21,he,7,0,"md-cell",22),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275template(22,pe,1,0,"tr",23),e.\u0275\u0275template(23,fe,1,0,"tr",24),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dataSource",t.filteredMaterialArr),e.\u0275\u0275advance(22),e.\u0275\u0275property("matHeaderRowDef",t.displayedColumns),e.\u0275\u0275advance(1),e.\u0275\u0275property("matRowDefColumns",t.displayedColumns)}}const Ee=[{path:"",component:$.$,children:[{path:"",component:(()=>{class i{constructor(t,a,r){this.firebaseService=t,this.spinnerService=a,this.dialog=r,this.displayedColumns=["demo-weight","demo-name","demo-unit","demo-symbol","demo-dimension","demo-remarks","demo-actions"],this.getMaterials=()=>{this.spinnerService.display(!0),this.firebaseService.getMaterials().subscribe(l=>(this.dataSource=l,this.spinnerService.display(!1),(0,T.d)()))}}ngOnInit(){this.getItems(),this.filterCategories()}getItems(){this.firebaseService.getMaterialsObservable(),this.materials$=this.firebaseService.materials$,this.getArrayFromObservable()}getArrayFromObservable(){this.materials$.pipe((0,T.UI)(a=>a.sort(this.sortByGroupCode))).subscribe(a=>{this.materialArr=a})}sortByGroupText(t,a){return a.name>t.name?-1:a.name<t.name?1:0}sortByGroupCode(t,a){return t.groupcode<a.groupcode?-1:t.groupcode>a.groupcode?1:0}deleteRecord(t){this.firebaseService.deleteMaterial(t),this.getItems()}editMaterial(t){const a=(0,O.m)();a.data={dialogTitle:"Malzeme G\xfcncelleme",material:t,mode:"update",recordId:t.id},this.dialog.open(U,a).afterClosed().subscribe(),this.dialog.afterAllClosed.subscribe(r=>{this.getItems()})}addMaterial(){const t=(0,O.m)();t.data={dialogTitle:"Malzeme Ekleme",mode:"create"},this.dialog.open(U,t).afterClosed().subscribe(),this.dialog.afterAllClosed.subscribe(a=>{this.getItems()})}getMaterialsByObject(){this.firebaseService.getMaterialsByObject()}filterCategories(){this.categories=JSON.parse(localStorage.getItem("categories"))}onGroupChange(t){this.filteredMaterialArr=this.materialArr.filter(a=>a.groupcode==t).sort(this.sortByGroupText)}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(D.D),e.\u0275\u0275directiveInject(J.V),e.\u0275\u0275directiveInject(_.uw))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-material"]],decls:22,vars:2,consts:[[1,"container"],["fxLayoutAlign","center center",1,"mat-display-3","special-header"],["cols","2","rowHeight","100px"],[1,"demo-button-container","space-left"],["mat-fab","","color","primary","aria-label","Example icon button with a delete icon",3,"click"],["appearance","fill"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"space"],["fxLayout","row","fxLayoutAlign","center none",1,"container","space"],["mat-table","","class","mat-elevation-z8 demo-table",3,"dataSource",4,"ngIf"],[3,"value"],["mat-table","",1,"mat-elevation-z8","demo-table",3,"dataSource"],["matColumnDef","demo-weight"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","demo-name"],["matColumnDef","demo-unit"],["matColumnDef","demo-dimension"],["matColumnDef","demo-symbol"],["matColumnDef","demo-remarks"],["matColumnDef","demo-actions"],[4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","matTooltip","G\xfcncelle","matTooltipPosition","right","aria-label","Example icon button with a home icon",3,"click"],["mat-icon-button","","color","warn","matTooltip","Sil","matTooltipPosition","right","aria-label","Example icon button with a home icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275text(2," Malzeme Listesi "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"mat-grid-list",2),e.\u0275\u0275elementStart(4,"mat-grid-tile"),e.\u0275\u0275elementStart(5,"div",3),e.\u0275\u0275elementStart(6,"button",4),e.\u0275\u0275listener("click",function(){return a.addMaterial()}),e.\u0275\u0275elementStart(7,"mat-icon"),e.\u0275\u0275text(8,"add"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"mat-grid-tile"),e.\u0275\u0275elementStart(10,"div",3),e.\u0275\u0275elementStart(11,"h4"),e.\u0275\u0275text(12,"Grup Bilgisi"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"mat-form-field",5),e.\u0275\u0275elementStart(14,"mat-label"),e.\u0275\u0275text(15,"Grup Bilgisi Se\xe7iniz"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"mat-select",6),e.\u0275\u0275listener("selectionChange",function(l){return a.onGroupChange(l.value)}),e.\u0275\u0275template(17,q,2,2,"mat-option",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(18,"div",8),e.\u0275\u0275element(19,"div",8),e.\u0275\u0275elementStart(20,"div",9),e.\u0275\u0275template(21,ge,24,3,"table",10),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(17),e.\u0275\u0275property("ngForOf",a.categories),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",(null==a.filteredMaterialArr?null:a.filteredMaterialArr.length)>0))},directives:[x.Wh,L.Il,L.DX,P.lW,W.Hw,b.KE,b.hX,k.gD,y.sg,x.xw,y.O5,B.ey,g.BZ,g.w1,g.fO,g.Dz,g.as,g.nj,g.ge,g.ev,Z.gM,g.XQ,g.Gk],pipes:[Q],styles:['.demo-table[_ngcontent-%COMP%]{width:100%}.mat-column-demo-position[_ngcontent-%COMP%]{border-right:1px solid currentColor;padding-right:24px;text-align:center}.mat-column-demo-name[_ngcontent-%COMP%]{padding-left:16px;font-size:large}.mat-column-demo-weight[_ngcontent-%COMP%]{padding-left:15px}.mat-column-demo-symbol[_ngcontent-%COMP%]{padding-left:25px}.mat-column-demo-remarks[_ngcontent-%COMP%]{padding-left:25px}.mat-column-demo-unit[_ngcontent-%COMP%]{font-size:large;padding-left:15px}.mat-column-demo-dimension[_ngcontent-%COMP%]{padding-left:35px}th.mat-column-demo-dimension[_ngcontent-%COMP%]{font-size:18px}td.mat-column-demo-dimension[_ngcontent-%COMP%]{font-size:20px}th.mat-column-demo-weight[_ngcontent-%COMP%]{font-size:20px}td.mat-column-demo-weight[_ngcontent-%COMP%]{font-size:20px}th.mat-column-demo-symbol[_ngcontent-%COMP%]{font-size:20px}td.mat-column-demo-symbol[_ngcontent-%COMP%]{font-size:20px}th.mat-column-demo-remarks[_ngcontent-%COMP%]{font-size:20px}td.mat-column-demo-remarks[_ngcontent-%COMP%]{font-size:20px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.mat-column-demo-symbol[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:24px}.special-header[_ngcontent-%COMP%]{margin:1em 0 .5em;color:#343434;font-weight:normal;font-family:"Ultra",sans-serif;font-size:36px;line-height:42px;text-transform:uppercase;text-shadow:0 2px white,0 3px #777}.space[_ngcontent-%COMP%]{margin:20px}.space-left[_ngcontent-%COMP%]{margin-left:10px}']}),i})()}]}];let Me=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[[A.RouterModule.forChild(Ee)],A.RouterModule]}),i})();var Ce=m(5189),v=(()=>{return(i=v||(v={}))[i.FINANCIAL=0]="FINANCIAL",i[i.NATURAL=1]="NATURAL",v;var i})();let z=new e.InjectionToken("currency.mask.config");class Se{constructor(n){this.htmlInputElement=n}setCursorAt(n){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(n,n);else if(this.htmlInputElement.createTextRange){let t=this.htmlInputElement.createTextRange();t.collapse(!0),t.moveEnd("character",n),t.moveStart("character",n),t.select()}}updateValueAndCursor(n,t,a){this.rawValue=n,this.setCursorAt(a-=t-n.length)}get canInputMoreNumbers(){let t=!(this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g,"").length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),a=this.inputSelection.selectionStart,r=this.inputSelection.selectionEnd,l=!(a==r||!this.htmlInputElement.value.substring(a,r).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/)),o="0"==this.htmlInputElement.value.substring(0,1);return t||l||o}get inputSelection(){let n=0,t=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)n=this.htmlInputElement.selectionStart,t=this.htmlInputElement.selectionEnd;else{let a=document.selection.createRange();if(a&&a.parentElement()==this.htmlInputElement){let r=this.htmlInputElement.value.length,l=this.htmlInputElement.value.replace(/\r\n/g,"\n"),o=this.htmlInputElement.createTextRange();o.moveToBookmark(a.getBookmark());let s=this.htmlInputElement.createTextRange();s.collapse(!1),o.compareEndPoints("StartToEnd",s)>-1?n=t=r:(n=-o.moveStart("character",-r),n+=l.slice(0,n).split("\n").length-1,o.compareEndPoints("EndToEnd",s)>-1?t=r:(t=-o.moveEnd("character",-r),t+=l.slice(0,t).split("\n").length-1))}}return{selectionStart:n,selectionEnd:t}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(n){this._storedRawValue=n,this.htmlInputElement&&(this.htmlInputElement.value=n)}get storedRawValue(){return this._storedRawValue||""}}class ye{constructor(n,t){this.htmlInputElement=n,this.options=t,this.SINGLE_DIGIT_REGEX=new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/),this.ONLY_NUMBERS_REGEX=new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g),this.PER_AR_NUMBER=new Map,this.inputManager=new Se(n),this.initialize()}initialize(){this.PER_AR_NUMBER.set("\u06f0","0"),this.PER_AR_NUMBER.set("\u06f1","1"),this.PER_AR_NUMBER.set("\u06f2","2"),this.PER_AR_NUMBER.set("\u06f3","3"),this.PER_AR_NUMBER.set("\u06f4","4"),this.PER_AR_NUMBER.set("\u06f5","5"),this.PER_AR_NUMBER.set("\u06f6","6"),this.PER_AR_NUMBER.set("\u06f7","7"),this.PER_AR_NUMBER.set("\u06f8","8"),this.PER_AR_NUMBER.set("\u06f9","9"),this.PER_AR_NUMBER.set("\u0660","0"),this.PER_AR_NUMBER.set("\u0661","1"),this.PER_AR_NUMBER.set("\u0662","2"),this.PER_AR_NUMBER.set("\u0663","3"),this.PER_AR_NUMBER.set("\u0664","4"),this.PER_AR_NUMBER.set("\u0665","5"),this.PER_AR_NUMBER.set("\u0666","6"),this.PER_AR_NUMBER.set("\u0667","7"),this.PER_AR_NUMBER.set("\u0668","8"),this.PER_AR_NUMBER.set("\u0669","9")}addNumber(n){const{decimal:t,precision:a,inputMode:r}=this.options;let l=String.fromCharCode(n);const o=l===this.options.decimal;if(this.rawValue){let s=this.inputSelection.selectionStart,u=this.inputSelection.selectionEnd;const E=this.rawValue.substring(0,s);let c=this.rawValue.substring(u,this.rawValue.length);const h=-1!==E.indexOf(t);r===v.NATURAL&&h&&s===u&&(c=c.substring(1));const M=E+l+c;let f=s+1;if(!o&&l!==this.options.thousands||l!==c[0]){if(!this.SINGLE_DIGIT_REGEX.test(l))return}else f++;this.rawValue=M,this.updateFieldValue(f)}else{let s;this.rawValue=this.applyMask(!1,l),r===v.NATURAL&&a>0&&(s=this.rawValue.indexOf(t),o&&s++),this.updateFieldValue(s)}}applyMask(n,t,a=!1){let{allowNegative:r,decimal:l,precision:o,prefix:s,suffix:u,thousands:E,min:c,max:h,inputMode:M}=this.options,f=(t=n?new Number(t).toFixed(o):t).replace(this.ONLY_NUMBERS_REGEX,"");if(!f&&t!==l)return"";M===v.NATURAL&&!n&&!a&&(f=(t=this.padOrTrimPrecision(t)).replace(this.ONLY_NUMBERS_REGEX,""));let p=f.slice(0,f.length-o).replace(/^\u0660*/g,"").replace(/^\u06F0*/g,"").replace(/^0*/g,"");""==p&&(p="0");let I=parseInt(p);p=p.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g,E),E&&p.startsWith(E)&&(p=p.substring(1));let w=p,C=f.slice(f.length-o),F=parseInt(C)||0,G=t.indexOf("-")>-1;h=this.isNullOrUndefined(h)||this.isNullOrUndefined(c)?h:Math.max(h,c);let S=I+F/Number("1".padEnd(o+1,"0"));return S=G?-S:S,!this.isNullOrUndefined(h)&&S>h?this.applyMask(!0,h+""):!this.isNullOrUndefined(c)&&S<c?this.applyMask(!0,c+""):(o>0&&(w+="0"==w&&C.length<o?l+"0".repeat(o-1)+C:l+C),(G&&r&&0!=S?"-":"")+s+w+u)}padOrTrimPrecision(n){let{decimal:t,precision:a}=this.options,r=n.lastIndexOf(t);-1===r&&(r=n.length,n+=t);let l=n.substring(r).replace(this.ONLY_NUMBERS_REGEX,"");const o=l.length;if(o<a)for(let s=o;s<a;s++)l+="0";else o>a&&(l=l.substring(0,l.length+a-o));return n.substring(0,r)+t+l}clearMask(n){if(this.isNullable()&&""===n)return null;let t=(n||"0").replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(t=t.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(t=t.replace(this.options.decimal,".")),this.PER_AR_NUMBER.forEach((a,r)=>{const l=new RegExp(r,"g");t=t.replace(l,a)}),parseFloat(t)}changeToNegative(){this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value&&(this.rawValue=this.applyMask(!1,"-"+this.rawValue))}changeToPositive(){this.rawValue=this.applyMask(!1,this.rawValue.replace("-",""))}removeNumber(n){let{decimal:t,thousands:a,prefix:r,suffix:l,inputMode:o}=this.options;if(this.isNullable()&&0==this.value)return void(this.rawValue=null);let s=this.inputSelection.selectionEnd,u=this.inputSelection.selectionStart;const E=this.rawValue.length-l.length;if(s=Math.min(E,Math.max(s,r.length)),u=Math.min(E,Math.max(u,r.length)),u===s&&this.inputSelection.selectionStart!==this.inputSelection.selectionEnd)return void this.updateFieldValue(u);let c=this.rawValue.indexOf(t);-1===c&&(c=this.rawValue.length);let h=0,M="";const f=c<s,p=c+1===s;if(s===u)if(8==n){if(u<=r.length)return;u--,this.rawValue.substr(u,1).match(/\d/)||u--,o===v.NATURAL&&f&&(h=-1,p&&this.value<10&&this.value>-10&&(M+="0"))}else if(46==n||63272==n){if(u===E)return;s++,this.rawValue.substr(u,1).match(/\d/)||(u++,s++)}if(o===v.NATURAL&&u>c){const C=s-u;for(let F=0;F<C;F++)M+="0"}let I=this.rawValue.length-s;this.rawValue=this.rawValue.substring(0,u)+M+this.rawValue.substring(s),this.rawValue.substr(r.length,1)===a&&(this.rawValue=this.rawValue.substring(0,r.length)+this.rawValue.substring(r.length+1),I=Math.min(I,this.rawValue.length-r.length)),this.updateFieldValue(this.rawValue.length-I+h,!0)}updateFieldValue(n,t=!1){let a=this.applyMask(!1,this.rawValue||"",t);n=null==n?this.rawValue.length:n,n=Math.max(this.options.prefix.length,Math.min(n,this.rawValue.length-this.options.suffix.length)),this.inputManager.updateValueAndCursor(a,this.rawValue.length,n)}updateOptions(n){let t=this.value;this.options=n,this.value=t}prefixLength(){return this.options.prefix.length}suffixLength(){return this.options.suffix.length}isNullable(){return this.options.nullable}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(n){this.inputManager.rawValue=n}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(n){this.rawValue=this.applyMask(!0,""+n)}isNullOrUndefined(n){return null==n}}class _e{constructor(n,t){this.inputService=new ye(n,t)}handleCut(n){setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(n){let t=this.inputService.inputSelection.selectionStart,a=this.inputService.rawValue.charCodeAt(t-1),r=this.inputService.rawValue.length,l=this.inputService.storedRawValue.length;if(1!=Math.abs(r-l))return this.inputService.updateFieldValue(t),void this.onModelChange(this.inputService.value);this.inputService.rawValue=this.inputService.storedRawValue,r<l&&this.timer(()=>{this.inputService.updateFieldValue(t+1),this.inputService.removeNumber(8),this.onModelChange(this.inputService.value)},0),r>l&&(this.inputService.updateFieldValue(t-1),this.handleKeypressImpl(a))}handleKeydown(n){let t=n.which||n.charCode||n.keyCode;(8==t||46==t||63272==t)&&(n.preventDefault(),this.inputService.inputSelection.selectionStart<=this.inputService.prefixLength()&&this.inputService.inputSelection.selectionEnd>=this.inputService.rawValue.length-this.inputService.suffixLength()?this.clearValue():(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value)))}clearValue(){this.setValue(this.inputService.isNullable()?null:0),this.onModelChange(this.inputService.value)}handleKeypress(n){let t=n.which||n.charCode||n.keyCode;n.preventDefault(),(97!==t||!n.ctrlKey)&&this.handleKeypressImpl(t)}handleKeypressImpl(n){switch(n){case void 0:case 9:case 13:return;case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:this.inputService.canInputMoreNumbers&&(Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)==this.inputService.rawValue.length&&this.setValue(null),this.inputService.addNumber(n))}this.onModelChange(this.inputService.value)}handlePaste(n){setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(n){this.inputService.updateOptions(n)}getOnModelChange(){return this.onModelChange}setOnModelChange(n){this.onModelChange=n}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(n){this.onModelTouched=n}setValue(n){this.inputService.value=n}timer(n,t){setTimeout(n,t)}}const xe={provide:d.JU,useExisting:(0,e.forwardRef)(()=>Re),multi:!0};let Re=(()=>{class i{constructor(t,a,r){this.currencyMaskConfig=t,this.elementRef=a,this.keyValueDiffers=r,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,allowZero:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:",",nullable:!1,inputMode:v.FINANCIAL},t&&(this.optionsTemplate=t),this.keyValueDiffer=r.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options&&this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new _e(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(t){this.inputHandler.getOnModelTouched().apply(t)}handleCut(t){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleCut(t)}handleInput(t){this.isChromeAndroid()&&!this.isReadOnly()&&this.inputHandler.handleInput(t)}handleKeydown(t){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleKeydown(t)}handleKeypress(t){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleKeypress(t)}handlePaste(t){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handlePaste(t)}handleDrop(t){this.isChromeAndroid()||t.preventDefault()}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}isReadOnly(){return this.elementRef.nativeElement.hasAttribute("readonly")}registerOnChange(t){this.inputHandler.setOnModelChange(t)}registerOnTouched(t){this.inputHandler.setOnModelTouched(t)}setDisabledState(t){this.elementRef.nativeElement.disabled=t}writeValue(t){this.inputHandler.setValue(t)}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(z,8),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.KeyValueDiffers))},i.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["","currencyMask",""]],hostBindings:function(t,a){1&t&&e.\u0275\u0275listener("blur",function(l){return a.handleBlur(l)})("cut",function(l){return a.handleCut(l)})("input",function(l){return a.handleInput(l)})("keydown",function(l){return a.handleKeydown(l)})("keypress",function(l){return a.handleKeypress(l)})("paste",function(l){return a.handlePaste(l)})("drop",function(l){return a.handleDrop(l)})},inputs:{options:"options"},features:[e.\u0275\u0275ProvidersFeature([xe])]}),i})(),be=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:z,useValue:t}]}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[[y.ez,d.u5]]}),i})();const H={align:"right",allowNegative:!0,allowZero:!0,decimal:",",precision:2,prefix:" ",suffix:" TRY",thousands:".",nullable:!0,min:null,max:null,inputMode:v.FINANCIAL};let Ie=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[[y.ez,Ce.m,Me,be.forRoot(H)]]}),i})()}}]);