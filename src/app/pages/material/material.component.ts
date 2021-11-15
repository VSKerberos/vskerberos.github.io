import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import {  map, shareReplay } from 'rxjs/internal/operators';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import {defaultDialogConfig } from './default-dialog-config'
import { MaterialEntryComponent } from './material-entry/material-entry.component';
import {IMaterial} from '../../core/core/models/material'


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  //public materialList: IMaterial[] = [];
  
  materialList: any;
  displayedColumns: string[] = [ 'demo-weight','demo-name', 'demo-unit','demo-symbol', 'demo-dimension','demo-remarks','demo-actions'];
  dataSource;
  materials$: Observable<IMaterial[]>;
  materialArr:IMaterial[];
  private lessonListSubject = new Observable<IMaterial[]>();
  
  
  constructor(
    private firebaseService: FireBaseService, 
    private spinnerService: SpinnerService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    
    //this.getMaterials(); 
    this.getItems();
    //this.getMaterialsByObject();
    

  }

  getItems(){
    this.firebaseService.getMaterialsObservable();
    this.materials$ = this.firebaseService.materials$;
 //   this.dataSource = this.materials$;
    this.getArrayFromObservable();
    //this.dataSource = this.materialArr;
  }
  getArrayFromObservable(){

    let sorted$: Observable<IMaterial[]> = this.materials$.pipe(
      map(items=> items.sort(this.sortByGroupCode))
    );

  

    sorted$.subscribe((categories)=> {
      categories= categories.sort(x=>x.groupcode),
      this.materialArr = categories as IMaterial[]
  });

  
  
  




  
}

sortByGroupCode(a,b) {
  if (a.groupcode < b.groupcode)
    return -1;
  if (a.groupcode > b.groupcode)
    return 1;
  return 0;
}



  deleteRecord(id: any){

    console.log('Deleted recor is: '+ id);
    this.firebaseService.deleteMaterial(id);
    this.getItems();
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

      var number = 1434.02;
      console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'TRY' }).format(number));
      // → 123.456,79 €

      
      this.dialog.afterAllClosed.subscribe(result => {
        this.getItems()
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
        this.getItems()
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
      console.log("yunus  "+this.firebaseService._mechanics);

      }

}

