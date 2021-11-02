import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/internal/operators';
import { IMaterial } from 'src/app/core/core/models/material';
import { FireBaseService } from 'src/app/core/services/fire-base.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import {IProductMaterial} from 'src/app/core/core/models/product';
import {ProductMaterialService} from 'src/app/core/services/product-material.service';

@Component({
  selector: 'app-product-material',
  templateUrl: './product-material.component.html',
  styleUrls: ['./product-material.component.css']
})
export class ProductMaterialComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  materials$: Observable<IMaterial[]>;
  filteredOptions: Observable<IMaterial[]>;
  materialArr:IMaterial[];
  selectedMaterial:IMaterial;
  productMatForm: FormGroup;
  currentitem:IProductMaterial;
  constructor(    private firebaseService: FireBaseService,
                  public fb: FormBuilder,
                  private utility:UtilityService,
                  private materialService:ProductMaterialService ) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.getItems();
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string))
    );
  }

  private _filter(value: string): IMaterial[] {
    const filterValue = String(value).toLowerCase(); 

    return this.materialArr.filter(option => option.name.toUpperCase().startsWith(filterValue));
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    
  this.selectedMaterial  = event.option.value;
    console.log('@@'+ this.selectedMaterial.name + this.selectedMaterial.price );

    this.productMatForm.patchValue({unitprice:  this.selectedMaterial.price });
    
  }

  displayFn(value?: any) {
    return value ? value.name : undefined;
  }


  
  getItems(){
    this.firebaseService.getMaterialsObservable();
    this.materials$ = this.firebaseService.materials$;
 //   this.dataSource = this.materials$;
    
    //this.dataSource = this.materialArr;

    
    this.materials$.subscribe((categories)=> {
      this.materialArr = categories as IMaterial[]
  });
  }
  reactiveForm() {
    this.productMatForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      unitprice: ['',Validators.required],
      total: ['',Validators.required],      
      remarks: ['',Validators.required],
      unit:['',Validators.required],
      quantity:['',Validators.required]
      
    });
    this.productMatForm.controls['unitprice'].disable();
    this.productMatForm.controls['total'].disable();

    

  }
  onSearchChange(searchValue: number): void {  
    console.log('search:'+searchValue);
    console.log('Number(this.selectedMaterial.price):'+Number(this.utility.replaceCommaToDot(this.selectedMaterial.price)));
let calculatedTotal = Number(this.utility.replaceCommaToDot(this.selectedMaterial.price)) * searchValue;
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
      materialname: this.selectedMaterial.name
    }

    this.materialService.addMaterialToProduct(this.currentitem);
    this.productMatForm.reset();
    this.productMatForm.markAsPristine();
    this.productMatForm.markAsUntouched();
    this.myControl.setValue('');
  }
  

}
