import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import {  map, shareReplay } from 'rxjs/internal/operators';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import {defaultDialogConfig } from './default-dialog-config'
import { MaterialEntryComponent } from './material-entry/material-entry.component';
import {IMaterial} from '../../core/core/models/material'
import { ICategory } from 'src/app/core/core/models/category';


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

  
  
  constructor(
    private firebaseService: FireBaseService, 
    private spinnerService: SpinnerService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    
    this.getItems(false);
    this.filterCategories();
  }

  getItems(skipped:boolean){
    if(!this.firebaseService.IsMaterialsInLocalStorage()  || skipped)
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



  deleteRecord(id: any){
    this.firebaseService.deleteMaterial(id);
    this.getItems(true);
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
      .subscribe();

      this.dialog.afterAllClosed.subscribe(result => {
        this.getItems(true)
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
      .subscribe(); 


      this.dialog.afterAllClosed.subscribe(result => {
        this.getItems(true);
      });
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
        this.categories= JSON.parse(localStorage.getItem('categories')) as ICategory[];
      }
      onGroupChange(ob) {
        this.filteredMaterialArr = this.materialArr.filter(XX=>XX.groupcode ==ob).sort(this.sortByGroupText); 
      }

}


