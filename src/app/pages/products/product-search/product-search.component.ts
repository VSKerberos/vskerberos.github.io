import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IProduct } from 'src/app/core/core/models/product';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { ProductMaterialComponent } from '../product-material/product-material.component';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  productControl = new FormControl();
  productOptions:Observable<IProduct[]>;
  products$ :Observable<IProduct[]> ;
  productArr:IProduct[];
  selectedProduct: IProduct;


  constructor(@Optional()  @Inject(MAT_DIALOG_DATA) data,
  @Optional() private dialogRef: MatDialogRef<ProductMaterialComponent>,
  private firebaseService: FireBaseService,) { }

  ngOnInit(): void {
    this.getProducts();

    this.productOptions = this.productControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value as string))
    );

  }

  private _filterProduct(value:string):IProduct[]{
    const filterValue = String(value).toLowerCase();

    return this.productArr.filter(option=> option.name.toLowerCase().indexOf(filterValue) === 0);

  }
  

  displayGroupFn(value?:any) {
    return value ? value.name : undefined;
  }

  onGroupSelectedChanged(event:MatAutocompleteSelectedEvent){
  console.log(` event.option.id:  ${event.option.id}`); 
  console.log(` event.option.value:  ${event.option.value}`); 
  this.selectedProduct = event.option.value;

  this.firebaseService.getProductDetail( this.selectedProduct.id).then(()=>{

  });
  }

  onClose() {
    
    this.dialogRef.close([]);
  }

  getProducts(){

    if(!this.firebaseService.IsProductsInLocalStorage())
    {
      this.firebaseService.getProducts();
    }
    this.products$ = this.firebaseService.products$;

    this.products$.subscribe((categories)=>{
      this.productArr = categories as IProduct[]
    });

  }



}
