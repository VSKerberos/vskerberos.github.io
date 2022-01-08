import { Injectable, LOCALE_ID } from '@angular/core';
import { FireBaseService } from './fire-base.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(   private firebaseService: FireBaseService,) { }

  replaceCommaToDot(item:string){

    return item.replace(',','.');
  }

  removeItemFromLocalStorage(){
    localStorage.removeItem('categories');
    localStorage.removeItem('materials');
    localStorage.removeItem('products');
 }


  


}
