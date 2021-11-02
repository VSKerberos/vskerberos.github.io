import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  replaceCommaToDot(item:string){

    return item.replace(',','.');
  }
}
