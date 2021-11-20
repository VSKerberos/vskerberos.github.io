import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/internal/operators';
import { IMaterial } from 'src/app/core/core/models/material';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import {IProductMaterial} from 'src/app/core/core/models/product';
import {ProductMaterialService} from 'src/app/core/services/product-material.service';
import {ICategory} from 'src/app/core/core/models/category';
import * as math from 'mathjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-material',
  templateUrl: './product-material.component.html',
  styleUrls: ['./product-material.component.css']
})
export class ProductMaterialComponent implements OnInit {
  myControl = new FormControl();
  groupControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  materials$: Observable<IMaterial[]>;
  filteredOptions: Observable<IMaterial[]>;
  materialArr:IMaterial[];
  materialArrStorage:IMaterial[];
  selectedMaterial:IMaterial;
  productMatForm: FormGroup;
  currentitem:IProductMaterial;
  mode:string;
  selectedCategory:ICategory;
  category$: Observable<ICategory[]>;
  categoryArr:ICategory[];
  categoryOptions:Observable<ICategory[]>;


  constructor(    private firebaseService: FireBaseService,
                  public fb: FormBuilder,
                  private utility:UtilityService,
                  private materialService:ProductMaterialService,
                  @Optional()  @Inject(MAT_DIALOG_DATA) data,
                  @Optional() private dialogRef: MatDialogRef<ProductMaterialComponent> ) {
                   this.mode= data ? data.mode : 'update';
                   }

  ngOnInit(): void {
    this.reactiveForm();
    this.getItems();
     this.getCategories();

    this.categoryOptions = this.groupControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value as string))
    );

    this.searchMaterialOptions();
    
  }

  searchMaterialOptions(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string))
    );
  }

  private _filter(value: string): IMaterial[] {
    const filterValue = String(value).toLowerCase(); 

    if(this.materialArr)
    return this.materialArr.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    else return undefined;

  
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    
  this.selectedMaterial  = event.option.value;
    console.log('@@'+ this.selectedMaterial.operationdate );
    
    this.productMatForm.patchValue({unitprice:  this.selectedMaterial.price });
    this.productMatForm.patchValue({unitpricedate:this.selectedMaterial.operationdate });
    
  }

  private _filterGroup(value:string):ICategory[]{
    const filterValue = String(value).toLowerCase();

    return this.categoryArr.filter(option=> option.title.toLowerCase().indexOf(filterValue) === 0);

  }

  onGroupSelectedChanged(event:MatAutocompleteSelectedEvent){
    this.selectedCategory = event.option.value;
    console.log('selectedcategory:'+this.selectedCategory.id+this.selectedCategory.categoryid);
    this.getItemsByCategoryId(this.selectedCategory.categoryid);
    this.searchMaterialOptions();
  }

  displayFn(value?: any) {
    return value ? value.name : undefined;
  }
  
  displayGroupFn(value?:any) {
    return value ? value.title : undefined;
  }

  
  getItems(){
    this.firebaseService.getMaterialsObservable();
    this.materialArrStorage = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
  }

  getItemsByCategoryId(categoryId:number){
    this.materialArrStorage = JSON.parse(localStorage.getItem('materials')) as IMaterial[];
    this.materialArr=this.materialArrStorage.filter(x=>x.groupcode == categoryId);
  }

  getCategories(){
    this.firebaseService.getCategories();
    this.category$ = this.firebaseService.categories$;

    this.category$.subscribe((categories)=>{
      this.categoryArr = categories as ICategory[]
    });

  }
  reactiveForm() {
    this.productMatForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      unitprice: ['', Validators.required],
      total: ['',Validators.required],      
      unitpricedate: [''],
      remarks: ['',Validators.required],
      unit:['',Validators.required],
      quantity:['',Validators.required]
      
    });
    this.productMatForm.controls['unitprice'].disable();
    this.productMatForm.controls['total'].disable();
    this.productMatForm.controls['unitpricedate'].disable();


    

  }
  onSearchChange(searchValue: number): void {  
    
let calculatedTotal = math.round(math.multiply(Number(this.utility.replaceCommaToDot(this.selectedMaterial.price)),searchValue),3);
this.productMatForm.patchValue({total  :  calculatedTotal});

  }

  submitForm(){
    this.currentitem= {
      quantity: this.productMatForm.get('quantity').value,
      remarks:this.productMatForm.get('remarks').value,
      unit :this.productMatForm.get('unit').value ,
      materialid : this.selectedMaterial.id,
      total : this.productMatForm.get('total').value,
      unitprice : this.selectedMaterial.price,
      materialname: this.selectedMaterial.name,
      categoryid : this.selectedCategory.id,
      categoryname :this.selectedCategory.title
    }

    this.materialService.addMaterialToProduct(this.currentitem);
    this.productMatForm.reset();
    this.productMatForm.markAsPristine();
    this.productMatForm.markAsUntouched();
    this.myControl.setValue('');
    this.groupControl.setValue('');
  }

  
  onClose() {
    this.productMatForm.reset();
    this.dialogRef.close([]);
  }
  

}
