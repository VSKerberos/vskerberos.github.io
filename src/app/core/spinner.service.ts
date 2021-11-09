import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private subjectSnackbar = new Subject<any>();

  constructor() {  
  }
  display(value: boolean) {
    console.log('LoaderService.display ' + value);
    this.status.next(value);
}

sendClickEvent(message:string) {
  this.subjectSnackbar.next(message);
}

getClickEvent(): Observable<any>{ 
  return this.subjectSnackbar.asObservable();
}


}
