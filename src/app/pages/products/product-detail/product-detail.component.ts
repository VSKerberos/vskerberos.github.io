import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IMaterial } from 'src/app/core/core/models/material';
import { IProduct, IProductMaterial } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { SpinnerService } from 'src/app/core/spinner.service';
import * as math from 'mathjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  recordId: string;
  productDetail: IProductMaterial[]= [];
  selectedProduct: IProduct;
  materialArrStorage:IMaterial[];
  cloned:IProductMaterial[] = [];
  materialproduct$: Observable<IProductMaterial[]>
  totalCost:Number;
  constructor( private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data,    private firebaseService: FireBaseService, 
    private spinnerService: SpinnerService,   
    private dialogRef: MatDialogRef<ProductDetailComponent>,
    private utility:UtilityService) { 
    this.recordId = data.recordId;
    this.selectedProduct = data.item;
  }

  ngOnInit(): void {
    this.cloned=[];
    this.productDetail = [];
    this.getItems();
    this.materialproduct$ = this.firebaseService.materialproduct$;
    this.cloned=[];
    this.productDetail = [];
    this.cloned = this.firebaseService.localdata.map(x => Object.assign({}, x));

    this.cloned.forEach(x=>{
      let currenmaterial =this.getMaterialItem(x.materialid);
      x.materialdate= currenmaterial.operationdate;
      x.unitprice = currenmaterial.price;
      x.total= math.round(math.multiply(Number(this.utility.replaceCommaToDot(currenmaterial.price)) , Number(x.quantity)),2) ;
    })

    this.totalCost = this.getTotalCost();
    
    this.productDetail  =this.cloned;    
  }

 
  getItems(){
   // this.firebaseService.getMaterialsObservable();
    this.materialArrStorage = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
  }

  getTotalCost() {
 
      return this.cloned ? this.cloned.map(t => t.total).reduce((acc, value) => acc + value, 0) : 0;
  
    }

  getMaterialItem(id:any):IMaterial
  {
    return this.materialArrStorage.find(x=>x.id === id);
  }
  onClose() {
    
    this.dialogRef.close([]);
  }

}
