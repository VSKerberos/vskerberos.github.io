import { UtilityService } from 'src/app/core/services/utility.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { selectAllCategories } from './category.selector';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, of, pipe, Subscription } from 'rxjs';
import { filter, map, max, mergeMap, scan, tap } from 'rxjs/internal/operators';
import { ICategory } from 'src/app/core/core/models/category';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { AppState } from 'src/app/reducers';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatTable } from '@angular/material/table';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IGeneral } from 'src/app/core/core/models/general';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,AfterViewInit {
  categoryForm: FormGroup;
   categories$:Observable<ICategory[]>;
   categoryArr:ICategory[];
   localCategory:ICategory ;
   updatedRecord:ICategory;
   displayedColumns: string[] = ['position', 'name','demo-actions'];
   @ViewChild('paginatorUp') Paginator: MatPaginator;
   pageEvent: PageEvent;
   mode: 'create' | 'update';
   localstorageMode:'create' | 'update' | 'delete';
  dataSource;
  result;
  currentPage:number;
  pageSize:number = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  categorySaveMessage:string ='Kategori Başarılı bir şeklide eklenmiştir.';
  categoryDeleteMessage:string ='Kategori Başarılı bir şeklide silinmiştir.'
  categoryUpdateMessage:string ='Kategori Başarılı bir şeklide güncellenmiştir.'
  deletedRecordId:string;
  info:IGeneral;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(    private firebaseService: FireBaseService,
                public fb: FormBuilder,
                private dialog: MatDialog,
                private store: Store<AppState>,
                private firestore: AngularFirestore,
                private spinnerService: SpinnerService,
                private utilService:UtilityService) {
    this.reactiveForm();




  }
  ngAfterViewInit(): void {
    this.Paginator._intl.itemsPerPageLabel="Her sayfada";
   this.Paginator._intl.nextPageLabel="Sonraki Sayfa";
   this.Paginator._intl.previousPageLabel="Önceki Sayfa";
  }

  ngOnInit(): void {
    this.mode ='create';
    this.getItems();
  }

  getItems(){
 if(!this.firebaseService.IsCategoriesInLocalStorage())
{
  this.firebaseService.getCategories();
}

      this.categories$ = this.firebaseService.categories$;
      this.categories$ = this.categories$.pipe(map((data) => {
      data.sort(this.sortByTitle)
      return data;
      }));

      let currentItems = this.categories$.pipe(
        map((data)=>{
        return  data.slice(0,10);
        }
      ));
    this.dataSource = currentItems;
    this.mode ='create';
    this.dataSource.paginator = this.Paginator;
  }

  reactiveForm() {
    this.categoryForm = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]]
    })
  }

  submitForm(){
    this.spinnerService.display(true);

if(this.mode == 'create'){
  this.localCategory =  {
    categoryid : this.getMaxCategoryId(),
    title : this.categoryForm.controls['title'].value,remarks:''
  };

    this.firestore.collection('category').add(this.localCategory).then(response =>{
      console.log("add item console:"+ response.id);
      this.localCategory.id = response.id;
      /////
      this.spinnerService.sendClickEvent(this.categorySaveMessage);
      this.localStorageOperation('create',this.localCategory);
      this.generalOperationAfterCrud();
    }).catch(error=>{
      console.log("add item error:"+error)
    });


} else{
  this.localCategory =  {
    categoryid : this.updatedRecord.categoryid,
    title : this.categoryForm.controls['title'].value,remarks:''

  };
this.firebaseService.updateCategory(this.localCategory,this.updatedRecord.id).then(response=>{
this.localCategory.id = this.updatedRecord.id;
this.spinnerService.sendClickEvent(this.categoryUpdateMessage);
this.localStorageOperation('update',this.localCategory);
  this.generalOperationAfterCrud();
}).catch(
  (error)=>{
    console.log(error);
  }
);
}

this.spinnerService.display(false);
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
    this.deletedRecordId = id;

    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title:'Category Silme Doğrulama',
        message:'Silmek istediğinizden emin misiniz?'
      }
    });

    confirmDialog.afterClosed().subscribe(result =>{
      if(result === true)
      {
        this.localCategory = {
          id : id,
          remarks:'',
          categoryid:999,
          title:''
        };

      this.localStorageOperation('delete',this.localCategory);
      this.firebaseService.deleteCategorie(id);
      this.mode ='create';
     // this.generalOperationAfterCrud();
     this.removeItemFromObservable(this.deletedRecordId);
      this.spinnerService.sendClickEvent(this.categoryDeleteMessage);
      this.dataSource = this.categories$;
      this.localCategory = null;
      this.table.renderRows();
      }
    })
  }

  removeItemFromObservable(id) {
    this.categories$ = this.categories$.pipe(map(data => {
      return data.filter(item => item.id != id)
    }))
  }

  updateRecord(element:ICategory){
    this.mode ='update';
    this.categoryForm.patchValue({title: element.title});
    this.updatedRecord = element;
  }

  sortByTitle(a,b){
    if (b.title > a.title) return -1;
      if (b.title < a.title) return 1;
      return 0;
  }

  generalOperationAfterCrud(){
    this.categoryForm.reset();
    this.categoryForm.markAsPristine();
    this.categoryForm.markAsUntouched();

    this.mode ='create';
    this.updatedRecord=null;

    this.categories$.subscribe(
      userlist => {
        userlist.push(this.localCategory)
      }
    );
    this.dataSource = this.categories$;
    this.localCategory = null;
    this.table.renderRows();

  }

  localStorageOperation(expr:string,item:ICategory)
  {
   let localItems = JSON.parse(localStorage.getItem('categories')) as ICategory[];

    switch (expr) {
      case 'update':

      localItems.find(x=>x.id == item.id).title = item.title;

      let objIndex = localItems.findIndex((obj => obj.id == item.id));


      localItems[objIndex].title = item.title;

        break;
      case 'delete':
        item= localItems.find(x=>x.id == item.id);
        let index= localItems.findIndex(x=> x == item);
        localItems.splice(index,1);
      break;
      case 'create':

      localItems.push(item);
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
    this.utilService.removeItemFromLocalStorage();
    localStorage.setItem('categories', JSON.stringify(localItems));
    this.firebaseService.updateGeneralInfo();


  }

  getPaginatorData(event){

    this.pageSize = event.pageSize;
    this.currentPage= event.currentPage;
    console.log(event);

    const end = (event.pageIndex + 1) * this.pageSize;
    const start = event.pageIndex * this.pageSize;



    this.categories$ = this.categories$.pipe(map((data) => {
      data.slice(start,end)

      return data;
      }));

      let y = this.categories$.pipe(
        map((data)=>{

        return  data.slice(start,end);

        }


      ));

      this.dataSource = y;
      this.dataSource.paginator = this.Paginator;
    return event;

    }

}
