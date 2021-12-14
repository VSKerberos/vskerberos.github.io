import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { ICategory } from 'src/app/core/core/models/category';
import { ErrorStateMatcher } from '@angular/material/core';
import {IMaterial} from '../../../core/core/models/material'
import { of } from 'rxjs';


@Component({
  selector: 'app-material-entry',
  templateUrl: './material-entry.component.html',
  styles: [
  ]
})
export class MaterialEntryComponent implements OnInit {
  materialForm: FormGroup;
  mode: 'create' | 'update';
  dialogTitle: string;
  recordId: string;
  material: IMaterial;
  categoryArr:ICategory[];
  matcher = new MyErrorStateMatcher();
  startDate: Date;
  mystartDate:Date;
  localMaterial:IMaterial;
  yourDate:any;
  
  constructor(
     private firebaseService: FireBaseService,
     public fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) data,
     private dialogRef: MatDialogRef<MaterialEntryComponent>) { 
      this.dialogTitle = data.dialogTitle;
      this.material = data.material;
      this.mode = data.mode;
      this.recordId = data.recordId

  
      if (this.mode == 'update') {

        this.reactiveForm();
        

        this.materialForm.patchValue({name:  this.material.name});
        this.materialForm.patchValue({unit:  this.material.unit});
        this.materialForm.patchValue({price: data.material.price});
        this.materialForm.patchValue({remarks: data.material.remarks});
        if(this.material.operationdate){
        let s =this.material.operationdate.split('/');
        this.yourDate = new Date(Number(s[2]),Number(s[1])-1,Number(s[0]));
        }
        this.materialForm.get('operationdate').patchValue(this.yourDate);
        this.materialForm.get('groups').patchValue(this.material.groupcode);
      } else if(this.mode = 'create'){
        this.reactiveForm();
        this.mystartDate = new Date();
        const stringDate: string = `${this.mystartDate.getDate()}/${this.mystartDate.getMonth()+1}/${this.mystartDate.getFullYear()}`;
      
      }

      //data.material.payload.doc.data().name
      
     }

  ngOnInit(): void {
  //  this.reactiveForm();
  


  this.getCategories();


  }

  reactiveForm() {
    this.materialForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      unit: ['',Validators.required],
      price: ['',Validators.required],      
      remarks: ['',Validators.required],
      groups:[null,Validators.required],
      operationdate:[Date,Validators.required]
      
    });

  
  }

  submitForm(){
    let t = this.materialForm.get('groups').value;
    let currentdate = this.materialForm.get('operationdate').value as Date;
    let nn = new Date(currentdate.getFullYear(),currentdate.getMonth()+1,currentdate.getDate());
    const stringDate: string = `${currentdate.getDate()}/${currentdate.getMonth()+1}/${currentdate.getFullYear()}`;

    this.localMaterial= {
      name : this.materialForm.get('name').value ,
      unit :this.materialForm.get('unit').value ,
      price:this.materialForm.get('price').value ,
      operationdate:stringDate ,
      groupcode :t,
      remarks:this.materialForm.get('remarks').value ,
      orderno:1
    }
    
    let s = this.materialForm.get('operationdate').value as Date;

    console.log('operationdate: '+ stringDate);
    
    if(this.mode == 'create'){


    this.firebaseService.addMaterial(this.localMaterial).catch(error =>{
      console.log(error);
    });
  }
  else if(this.mode == 'update'){
  
    
    var number = this.materialForm.value;
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'TRY' }).format(number));

    this.firebaseService.updateMaterial(this.localMaterial,this.recordId).catch(error=> {
      console.log(error);
    });
  }
    this.materialForm.reset();
    this.materialForm.markAsPristine();
    this.materialForm.markAsUntouched();
    this.dialogRef.close([]);
  }

  cancel() {
    this.materialForm.reset();
    this.materialForm.markAsPristine();
    this.materialForm.markAsUntouched();
  }

  onClose() {
    this.materialForm.reset();
    this.dialogRef.close([]);
  }

  getCategories(){

    if(!this.firebaseService.IsCategoriesInLocalStorage())
    {
      this.firebaseService.getCategories();
    } 
    
    this.firebaseService.categories$.subscribe((categories)=> {
      this.categoryArr = categories as ICategory[]
  });
  }


}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

 

}

