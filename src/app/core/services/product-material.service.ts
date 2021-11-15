import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {IProductMaterial} from '../core/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductMaterialService {

  private subject = new Subject();
/////////////

private _todo = new BehaviorSubject<IProductMaterial[]>([]);
  readonly todos$ = this._todo.asObservable();
 
  private todos: IProductMaterial[] = [];
  private nextId = 0;

  constructor() { }

  addMaterialToProduct(item:IProductMaterial){
    this.subject.next(item);
  }

  accessProductMaterials(): Observable<any>{
    return this.subject.asObservable();
    //return this.todos$;
  }

  create(item: IProductMaterial) {
    this.todos.push(item);
    this._todo.next(Object.assign(item, this.todos));
  }
  deleteMaterialToProduct(id: string) {
    this.todos.forEach((t, i) => {
      if (t.id === id) {
        this.todos.splice(i, 1);
      }
      this.subject.next(Object.assign([], this.todos));
      this._todo.next(Object.assign([], this.todos));
    });
 
    
  }

  
}
