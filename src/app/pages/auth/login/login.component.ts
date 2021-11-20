import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from '../../../reducers';
import {login} from '../auth.actions';
import {AuthActions} from '../action-types';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<AppState>) {

      this.form = fb.group({
          email: ['mavi', [Validators.required]],
          password: ['pa$$w0rd', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {

  //  this.router.navigateByUrl('/dashboard');
      const val = this.form.value;

      let user =this.auth.login(val.email, val.password);
      if(user.valid){
          this.store.dispatch(login({user}));

          this.router.navigateByUrl('/dashboard');
        } else {
            alert('Login Failed');
        }
        //   .pipe(
        //       tap(user => {

        //           console.log(user);

        //           this.store.dispatch(login({user}));

        //           this.router.navigateByUrl('/dashboard');

        //       })
        //   )
        //   .subscribe(
        //       noop,
        //       () => alert('Login Failed')
        //   );



  }

}