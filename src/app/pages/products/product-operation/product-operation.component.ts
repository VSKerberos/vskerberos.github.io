import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { IProductMaterial } from 'src/app/core/core/models/product';
import { ProductMaterialService } from 'src/app/core/services/product-material.service';


interface Transaction {
  item: string;
  cost: number;
}


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
  constructor( public fb: FormBuilder,
    private materialService:ProductMaterialService) {
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

}
