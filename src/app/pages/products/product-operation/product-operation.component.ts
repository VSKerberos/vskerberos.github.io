import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, pipe } from 'rxjs';
import { IProduct, IProductMat, IProductMaterial } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { ProductMaterialService } from 'src/app/core/services/product-material.service';
import { SpinnerService } from 'src/app/core/spinner.service';
import * as math from 'mathjs';

@Component({
  selector: 'app-product-operation',
  templateUrl: './product-operation.component.html',
  styleUrls: ['./product-operation.component.css']
})
export class ProductOperationComponent implements OnInit {

  productForm: FormGroup;
  step = 0;
  sum:number=0;
  dataSource = new MatTableDataSource<IProductMaterial>();
  materials$: Observable<IProductMaterial[]>;
  materialArr:IProductMaterial[] = [];
  displayedColumns: string[] = ['materialname', 'total'];
  currentProduct:IProduct;
  relationProduct:IProductMat;
  productSaveMessage:string='Ürün Başarı ile kaydedildi.';
  mode: 'create' | 'update';
  currentEditProductId:string;

  constructor( public fb: FormBuilder,
    private materialService:ProductMaterialService,
    private firebaseService:FireBaseService,
    private spinnerService: SpinnerService
    ) {
      this.reactiveForm();
      this.mode = 'create';
      this.materialService.accessProductMaterials().subscribe(message=>{
        if(message){
          this.materialArr.push(message); 
          let c = message.total as number;
          this.sum= math.evaluate(this.sum + message.total)  
        }
      })
   
      
     }

  
  ngOnInit(): void {
 
    }

  submitForm(){
 
  }

  cancel() {

  }
  /** Gets the total cost of all transactions. */
  getTotalCost() {
  //  return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);

    
    return this.materialArr ? this.materialArr.map(t => t.total).reduce((acc, value) => acc + value, 0) : 0;

  }

  
  reactiveForm() {
    this.productForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      code: ['',Validators.required],
      operationdate:[Date,Validators.required]
    });
    
  }
  deleteRecord(mat:IProductMaterial){
console.log('deleted record: '+ mat.materialname);



const index = this.materialArr.indexOf(mat, 0);
if (index > -1) {
   this.materialArr.splice(index, 1);
}
this.sum = this.getTotalCost();
  }

  saveproduct(){
    this.spinnerService.display(true);
    this.getRelationProduct();
  this.getMainProductInfo();
  var resp =this.firebaseService.addProduct(this.currentProduct,this.relationProduct);
  this.spinnerService.display(false);
  this.clearForm();
  this.spinnerService.sendClickEvent(this.productSaveMessage);

  }

  getMainProductInfo(){
    let currentdate = this.productForm.get('operationdate').value as Date;
    const stringDate: string = `${currentdate.getDate()}/${currentdate.getMonth()+1}/${currentdate.getFullYear()}`;

    this.currentProduct= {
      name : this.productForm.get('name').value ,
      code: this.productForm.get('code').value,
      operationDate:stringDate
    }
  }

  getRelationProduct(){
    this.relationProduct = {
     productMaterial:this.materialArr
    }
  }

  clearForm(){
    this.productForm.reset();
    this.productForm.markAsPristine();
    this.productForm.markAsUntouched();
    this.materialArr = [];
  }

}
