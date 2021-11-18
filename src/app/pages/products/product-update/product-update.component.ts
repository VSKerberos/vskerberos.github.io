import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, IProductMat, IProductMaterial } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { ProductMaterialService } from 'src/app/core/services/product-material.service';
import { Router } from '@angular/router';
import { IMaterial } from 'src/app/core/core/models/material';
import * as math from 'mathjs';
import { UtilityService } from 'src/app/core/services/utility.service';
import { defaultDialogConfig } from '../../material/default-dialog-config';
import { MatDialog } from '@angular/material/dialog';
import { ProductMaterialComponent } from '../product-material/product-material.component';
import { SpinnerService } from 'src/app/core/spinner.service';
import { delay, timeout } from 'rxjs/internal/operators';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  
  productForm: FormGroup;
  currentEditProduct:IProduct;
  materialArrStorage:IMaterial[];
  productMaterial:IProductMaterial[] = [];
  totalCost:string;
  productDetail: IProductMaterial[]= [];
  relationProduct:IProductMat;
  productUpdateMessage:string='Ürün Başarı ile güncellendi.';

  constructor(public fb: FormBuilder,
    private materialService:ProductMaterialService,
    private firebaseService:FireBaseService,private router: Router,
    private utility:UtilityService,
    private dialog: MatDialog,
    private spinnerService: SpinnerService,
    
    ) {
      this.reactiveForm();
      const navigation = this.router.getCurrentNavigation();
      const state = navigation.extras.state as {
      mode: any,
      product: IProduct
        };
        if(state){
    
    this.currentEditProduct = state.product;
    
    
  
    this.productForm.patchValue({name:  state.product.name});
    this.productForm.patchValue({code:  state.product.code});
    if(state.product.operationDate){
      let date  =state.product.operationDate.split('/');
      let yourDate = new Date(Number(date[2]),Number(date[1])-1,Number(date[0]));
      this.productForm.get('operationdate').patchValue(yourDate);
      }
        }
        this.materialService.accessProductMaterials().subscribe(message=>{
          if(message){
            this.productDetail.push(message); 
            this.setProductMaterial();
           
          }
        })
        
     }

  ngOnInit(): void {
    this.getItems();
    this.productMaterial = this.firebaseService.localdata.map(x => Object.assign({}, x));
    this.setProductMaterial();
  }

    
  reactiveForm() {
    this.productForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      code: ['',Validators.required],
      operationdate:[Date,Validators.required]
    }); 
  }

  setProductMaterial(){
    this.productMaterial.forEach(x=>{
      let currenmaterial =this.getMaterialItem(x.materialid);
      x.materialdate= currenmaterial.operationdate ?? '';
      x.unitprice = currenmaterial.price;
      x.total= math.round(math.multiply(Number(this.utility.replaceCommaToDot(currenmaterial.price)) , Number(x.quantity)),2) ;
    })

    this.totalCost = math.format(this.getTotalCost(),5);
    
    this.productDetail  =this.productMaterial;  
  }

  submitForm(){
 
  }
  getItems(){
    this.materialArrStorage = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
  }

  clearForm(){
    this.productForm.reset();
    this.productForm.markAsPristine();
    this.productForm.markAsUntouched();

  }

  getMaterialItem(id:any):IMaterial
  {
    return this.materialArrStorage.find(x=>x.id === id);
  }
  
  getTotalCost() {
    return this.productMaterial ? this.productMaterial.map(t => t.total).reduce((acc, value) => acc + value, 0) : 0;
  }

  deleteRecord(mat:IProductMaterial){
    console.log(`deleted material id =>  ${mat.materialid} delted category id => ${mat.categoryid}`);

    const index = this.productDetail.indexOf(mat, 0);
if (index > -1) {
   this.productDetail.splice(index, 1);
}
this.totalCost = math.format(this.getTotalCost(),5);
}


addMaterial(){
  const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Malzeme Ekleme",
      mode: 'create'
    };

    this.dialog.open(ProductMaterialComponent, dialogConfig)
      .afterClosed()
      .subscribe(); 


      this.dialog.afterAllClosed.subscribe(result => {
        this.getItems()
      });
}

onClose() {
  
}

updateproduct(){
  this.getRelationProduct();
  this.getMainProductInfo();
  this.spinnerService.display(true);
  this.currentEditProduct.name
  this.firebaseService.updateProduct(this.currentEditProduct,this.currentEditProduct.id).then(()=>{
  this.firebaseService.updateProductMaterial(this.relationProduct,this.currentEditProduct.id).then(()=>{
      
    }).catch((err)=>{
      console.log(err);
    })
    this.spinnerService.display(false);
    this.spinnerService.sendClickEvent(this.productUpdateMessage);
  }).catch((err)=>{
  console.log(err);})

  setTimeout(() => {
    this.router.navigate(['product/list']);
  }, 2500);
 
  
}
getMainProductInfo(){
  let currentdate = new Date();
  const stringDate: string = `${currentdate.getDate()}/${currentdate.getMonth()+1}/${currentdate.getFullYear()}`;
  this.currentEditProduct.code = this.productForm.get('code').value;
  this.currentEditProduct.name = this.productForm.get('name').value;
  this.currentEditProduct.operationDate = stringDate;
}

getRelationProduct(){
  this.relationProduct = {
   productMaterial:this.productDetail
  }
}

}
