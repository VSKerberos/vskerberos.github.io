import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FireBaseService, IMaterial } from 'src/app/core/services/fire-base.service';

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
        
        /*
        this.materialForm.get("name").patchValue(data.material.payload.doc.data().name);
        this.materialForm.get("name").setValue("1");
        console.log(     this.materialForm.get("name"));
        this.materialForm.controls.name.setValue(data.material.payload.doc.data().name);
        this.materialForm.controls['name'].patchValue(data.material.payload.doc.data().name);
        console.log("dasdasd:"+data.material.payload.doc.data().name);
        
        */
        this.materialForm.patchValue({name: data.material.payload.doc.data().name});
        this.materialForm.patchValue({unit: data.material.payload.doc.data().unit});
        this.materialForm.patchValue({weight: data.material.payload.doc.data().weight});
        this.materialForm.patchValue({price: data.material.payload.doc.data().price});
        this.materialForm.patchValue({remarks: data.material.payload.doc.data().remarks});
        this.materialForm.patchValue({dimension: data.material.payload.doc.data().dimension});
      } else if(this.mode = 'create'){
        this.reactiveForm();
      }

      //data.material.payload.doc.data().name

     }

  ngOnInit(): void {
  //  this.reactiveForm();
  }

  reactiveForm() {
    this.materialForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      unit: ['',Validators.required],
      weight: ['',Validators.required],
      price: ['',Validators.required],      
      remarks: ['',Validators.required],
      dimension: ['',Validators.required]
    })
  }

  submitForm(){
    console.log( this.materialForm.value);
    
    if(this.mode == 'create'){

    this.firebaseService.addMaterial(this.materialForm.value).catch(error =>{
      console.log(error);
    });
  }
  else if(this.mode == 'update'){
  
    this.firebaseService.updateMaterial(this.materialForm.value,this.recordId).catch(error=> {
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

}
