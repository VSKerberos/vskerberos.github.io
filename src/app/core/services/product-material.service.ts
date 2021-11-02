import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {IProductMaterial} from '../core/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductMaterialService {

  private subject = new Subject();
  constructor() { }

  addMaterialToProduct(item:IProductMaterial){
    this.subject.next(item);
  }

  accessProductMaterials(): Observable<any>{
    return this.subject.asObservable();
  }
}
