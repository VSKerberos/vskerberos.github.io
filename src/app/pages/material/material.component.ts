
import {  Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import {  map, shareReplay, tap } from 'rxjs/internal/operators';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import {defaultDialogConfig } from './default-dialog-config'
import { MaterialEntryComponent } from './material-entry/material-entry.component';
import {IMaterial} from '../../core/core/models/material'
import { ICategory } from 'src/app/core/core/models/category';
import { MatTable } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {


  materialList: any;
  displayedColumns: string[] = [ 'demo-weight','demo-name', 'demo-unit','demo-symbol', 'demo-dimension','demo-remarks','demo-actions'];
  dataSource;
  materials$: Observable<IMaterial[]>;
  materialArr:IMaterial[];
  categories:ICategory[]
  filteredMaterialArr:IMaterial[];
  @ViewChild(MatTable) table: MatTable<any>;
  materialDeleteMessage:string ="Malzeme Başarı ile Silinmiştir."
  constructor(
    private firebaseService: FireBaseService,
    private spinnerService: SpinnerService,
    private dialog: MatDialog,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.filterCategories();
    this.getItems();
  }

  getItems(){
    if(!this.firebaseService.IsMaterialsInLocalStorage())
    {this.firebaseService.getMaterialsObservable(); }

    this.materials$ = this.firebaseService.materials$;
    this.getArrayFromObservable();
  }
  getArrayFromObservable(){

    let sorted$: Observable<IMaterial[]> = this.materials$.pipe(
      map(items=> items.sort(this.sortByGroupCode)),
    );

    sorted$.subscribe((categories)=> {
      this.materialArr = categories as IMaterial[]
  });
}

removeItemFromObservable(id) {
  this.materials$ = this.materials$.pipe(map(data => {
    return data.filter(item => item.id != id)
  }))
}



sortByGroupText(a,b){
  if (b.name > a.name) return -1;
    if (b.name < a.name) return 1;
    return 0;
}

sortByGroupCode(a,b) {
  if (a.groupcode < b.groupcode)
    return -1;
  if (a.groupcode > b.groupcode)
    return 1;
  return 0;
}



  deleteRecord(element: any){
    this.firebaseService.deleteMaterial(element.id);
    this.removeItemFromObservable(element.id);
    this.removeItemFromLocalStorage(element);
    this.getArrayFromObservable();
    this.filteredMaterialArr = this.materialArr.filter(XX=>XX.groupcode ==element.groupcode).sort(this.sortByGroupText);
    this.spinnerService.sendClickEvent(this.materialDeleteMessage);
    this.dataSource = this.materials$;
    this.table.renderRows();
  }


  editMaterial(material:any) {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Malzeme Güncelleme",
      material,
      mode: 'update',
      recordId:material.id

    };

    this.dialog.open(MaterialEntryComponent, dialogConfig)
      .afterClosed()
      .subscribe(result=>{
        if(result.event =='update'){
          let updatedMaterial = result.data;
          let indx = this.filteredMaterialArr.findIndex(x=>x.id == updatedMaterial.id)
          this.filteredMaterialArr[indx].price = updatedMaterial.price;
          this.filteredMaterialArr[indx].remarks = updatedMaterial.remarks;
          this.filteredMaterialArr[indx].name = updatedMaterial.name;
          this.filteredMaterialArr[indx].unit = updatedMaterial.unit;
          this.filteredMaterialArr[indx].operationdate = updatedMaterial.operationdate;
          //this.getMaterialsFormLocalStorage();
          //this.refreshMaterialArray(updatedMaterial.groupcode);
        }
      });



}

addMaterial(){
  const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Malzeme Ekleme",
      mode: 'create'
    };

    this.dialog.open(MaterialEntryComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        this.getMaterialsFormLocalStorage();
        if(result.event == 'create'){
          let newMaterial = result.data;
          this.refreshMaterialArray(newMaterial.groupcode);
          this.filteredMaterialArr.push(newMaterial);
          this.materials$.subscribe(matlist=>{
            matlist.push(newMaterial);
          })

        }
      });



}



refreshMaterialArray(groupcode){
  this.getArrayFromObservable();
  this.filteredMaterialArr = this.materialArr.filter(XX=>XX.groupcode ==groupcode).sort(this.sortByGroupText);
}

getMaterialsFormLocalStorage(){


    let localItems = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
     if(localItems && localItems.length>0)
 {
     this.materials$.pipe(tap(usersList => {

      localItems.forEach(elem=>{
        usersList.push(elem);
      })
   }));
 }

  this.dataSource = this.materials$;
  if(this.table)
  this.table.renderRows();
}

removeItemFromLocalStorage(item){
  let localItems = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
  item= localItems.find(x=>x.id == item.id);
  let index= localItems.findIndex(x=> x == item);
  localItems.splice(index,1);
  localStorage.setItem('materials', JSON.stringify(localItems));
  this.firebaseService.updateGeneralInfo();
}

   getMaterials = () =>   {
   this.spinnerService.display(true);
      this.firebaseService
      .getMaterials()
      .subscribe(res =>(
      this.dataSource=res,
        this.spinnerService.display(false),
        shareReplay()

        ))
      };

      getMaterialsByObject (){
     this.firebaseService.getMaterialsByObject();
      }

      filterCategories()
      {
        this.categories = [];
        if(!this.firebaseService.IsCategoriesInLocalStorage())
        {
          const data: ICategory[] = [];

         const querySnapshot = this.firestore.collection('category').ref.get().then(cat=>{


          cat.forEach((doc) => {

            const local = doc.data() as ICategory;
            const id = doc.id;
            data.push({ id, ...local } as ICategory);

          });
          localStorage.setItem('categories', JSON.stringify(data));

         }
         );
         this.categories = data;

        } else {

          let localItems = JSON.parse(localStorage.getItem('categories')) as ICategory[];
          if(localItems && localItems.length>0)
      {

           localItems.forEach(elem=>{
             this.categories.push(elem);
           });

      }

        }

      }
      onGroupChange(ob) {
        this.getArrayFromObservable();
        this.filteredMaterialArr = this.materialArr.filter(XX=>XX.groupcode ==ob).sort(this.sortByGroupText);
      }



}


