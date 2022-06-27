import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/spinner.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { map } from 'rxjs/operators';
import {isLoggedIn} from '../../../pages/auth/auth.selectors'
import { logout } from 'src/app/pages/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  clickEventsubscription:Subscription;
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string="mavi";
  isAdmin: boolean;
  isLoading: boolean;
  durationInSeconds = 5;

  isLoggedIn$:Observable<boolean>;


  constructor( private media: MediaMatcher,private changeDetectorRef: ChangeDetectorRef,
              private spinnerService :SpinnerService,
              public cdRef:ChangeDetectorRef,
              private _snackBar: MatSnackBar,
              private store: Store<AppState>,
              private router: Router
              ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.clickEventsubscription=    this.spinnerService.getClickEvent().subscribe((message)=>{
      this.openSnackBar(message);
      })
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.spinnerService.status.subscribe((val: boolean) => {
      this.isLoading = val;
  });

  this.isLoggedIn$ = this.store.pipe(
    select(isLoggedIn)
  );

  }
  openSnackBar(message:string) {
    this._snackBar.open(message,'',{duration: this.durationInSeconds * 1000,horizontalPosition:'center',verticalPosition:'top' });

}

logout() {

  this.store.dispatch(logout());
  this.router.navigateByUrl('/auth');
  localStorage.clear();
}




}
