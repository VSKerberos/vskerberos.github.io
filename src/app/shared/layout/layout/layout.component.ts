import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/spinner.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string;
  isAdmin: boolean;
  isLoading: boolean;


  
  constructor( private media: MediaMatcher,private changeDetectorRef: ChangeDetectorRef, private spinnerService :SpinnerService,public cdRef:ChangeDetectorRef) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.spinnerService.status.subscribe((val: boolean) => {
      this.isLoading = val;
  });
  }

}
