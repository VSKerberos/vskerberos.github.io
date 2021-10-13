import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { FireBaseService, IMaterial } from 'src/app/core/services/fire-base.service';
import { delay, shareReplay } from 'rxjs/internal/operators';
import { of } from "rxjs";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import {defaultDialogConfig } from './default-dialog-config'
import { MaterialEntryComponent } from './material-entry/material-entry.component';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  //public materialList: IMaterial[] = [];
  pizzas$: Observable<IMaterial[]>;
  materialList: any;
  displayedColumns: string[] = [ 'demo-name', 'demo-unit', 'demo-weight','demo-dimension','demo-symbol','demo-remarks','demo-actions'];
  dataSource;
  materials$: Observable<IMaterial[]>;
  private lessonListSubject = new Observable<IMaterial[]>();
  
  @Output()
  courseChanged = new EventEmitter();
  
  constructor(
    private firebaseService: FireBaseService, 
    private spinnerService: SpinnerService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    
    this.getMaterials(); 
  }

  deleteRecord(id: any){

    console.log('Deleted recor is: '+ id);

    this.firebaseService.deleteMaterial(id);
  }


  editMaterial(material:any) {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Malzeme Güncelleme",
      material,
      mode: 'update',
      recordId:material.payload.doc.id
      
    };

    this.dialog.open(MaterialEntryComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());

      var number = 1434.02;
      console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'TRY' }).format(number));
      // → 123.456,79 €

}

addMaterial(){
  const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Malzeme Ekleme",
      mode: 'create'
    };

    this.dialog.open(MaterialEntryComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());
}
  
   getMaterials = () =>   {  
   this.spinnerService.display(true);
      this.firebaseService
      .getMaterials()
      .subscribe(res =>( 
        this.materialList = this.dataSource= res, 
        console.log(res),
        this.spinnerService.display(false),
        shareReplay()
        
        ))};

     

}

