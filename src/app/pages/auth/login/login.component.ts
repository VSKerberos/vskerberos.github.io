import { UtilityService } from 'src/app/core/services/utility.service';
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
      private store: Store<AppState>,
      private util:UtilityService) {

      this.form = fb.group({
          email: ['', [Validators.required]],
          password: ['', [Validators.required]]
      });
      // mavi pa$$w0rd

  }

  ngOnInit() {

  }

  login() {

      const val = this.form.value;

      let user =this.auth.login(val.email, val.password);
      if(user.valid){
          this.store.dispatch(login({user}));
          this.util.removeItemFromLocalStorage();
          this.router.navigateByUrl('/dashboard');
        } else {
            alert('Hatalı Kulalnıcı adı veya Şifre');
            this.form.reset();
        }
     
  }

}