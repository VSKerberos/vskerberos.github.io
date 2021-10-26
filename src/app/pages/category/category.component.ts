import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, pipe } from 'rxjs';
import { filter, map, max, mergeMap, scan, tap } from 'rxjs/internal/operators';
import { ICategory } from 'src/app/core/core/models/category';
import { FireBaseService } from 'src/app/core/services/fire-base.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
   categories$:Observable<ICategory[]>;
   categoryArr:ICategory[];
   localCategory:ICategory ;
   updatedRecord:ICategory;
   displayedColumns: string[] = ['position', 'name','demo-actions'];
   mode: 'create' | 'update';
  dataSource;
  result;
  constructor(    private firebaseService: FireBaseService,
                public fb: FormBuilder) {
    this.reactiveForm();
  }

  ngOnInit(): void {
this.getItems();
  }

  getItems(){
    this.firebaseService.getCategories();
    this.categories$ = this.firebaseService.categories$;
   
    this.categories$ = this.categories$.pipe(map((data) => {
      data.sort((a, b) => {
          return a.categoryid < b.categoryid ? -1 : 1;
       });
      return data;
      }));
    this.dataSource = this.categories$;
    this.mode ='create';
  }

  reactiveForm() {
    this.categoryForm = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    })
  }

  submitForm(){
    
if(this.mode == 'create'){
  this.localCategory =  {
    categoryid : this.getMaxCategoryId(),
    title : this.categoryForm.controls['title'].value,remarks:''

  };

    this.firebaseService.addCategory(this.localCategory).catch(error =>{
           console.log(error);
         });
} else{
  this.localCategory =  {
    categoryid : this.updatedRecord.categoryid,
    title : this.categoryForm.controls['title'].value,remarks:''

  };
this.firebaseService.updateCategory(this.localCategory,this.updatedRecord.id).catch(
  (error)=>{
    console.log(error);
  }
);
}

    this.categoryForm.reset();
    this.categoryForm.markAsPristine();
    this.categoryForm.markAsUntouched();
    this.localCategory = null;
    this.mode ='create';
    this.updatedRecord=null;
    this.getItems();
  }

  cancel() {
    this.categoryForm.reset();
    this.categoryForm.markAsPristine();
    this.categoryForm.markAsUntouched();
    this.localCategory = null;
    this.mode ='create';
    this.updatedRecord=null;
  }


  getMaxCategoryId():number{
    this.categories$.subscribe((categories)=> {
      this.categoryArr = categories as ICategory[]
  });
  return Math.max.apply(Math, this.categoryArr.map(function(o) { return o.categoryid; })) +1;
  }

  deleteRecord(id: any){
    console.log('Deleted recor is: '+ id);
    this.firebaseService.deleteCategorie(id);
    this.mode ='create';
    this.getItems();
  }

  updateRecord(element:ICategory){
    this.mode ='update';
    console.log('update record:'+element.title);
    this.categoryForm.patchValue({title: element.title});
    this.updatedRecord = element;
  }


}
