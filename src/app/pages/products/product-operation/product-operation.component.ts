import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, pipe } from 'rxjs';
import { IProduct, IProductMat, IProductMaterial } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { ProductMaterialService } from 'src/app/core/services/product-material.service';
import { SpinnerService } from 'src/app/core/spinner.service';


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
  constructor( public fb: FormBuilder,
    private materialService:ProductMaterialService,
    private firebaseService:FireBaseService,
    private spinnerService: SpinnerService,) {
      this.materialService.accessProductMaterials().subscribe(message=>{
        if(message){
          this.materialArr.push(message);
          this.sum+=message.total;
        }
      })

     }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  ngOnInit(): void {
    this.reactiveForm();
    // this.materials$ = this.materialService.accessProductMaterials();
    // this.materials$.pipe(
    //    map((things)=> {
    //     this.dataSource.data = things,
    //     this.materialArr = things as IProductMaterial[]
    //    }));
     
   
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

  }

  saveproduct(){
    this.spinnerService.display(true);
    this.getRelationProduct();
  this.getMainProductInfo();
  var resp =this.firebaseService.addProduct(this.currentProduct,this.relationProduct);
  this.spinnerService.display(false);
  this.clearForm();

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
