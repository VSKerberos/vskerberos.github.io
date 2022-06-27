import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout/layout.component';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {FireBaseService} from '../core/services/fire-base.service';
import { TextInputComponent } from './components/text-input.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import {SpinnerService} from '../core/spinner.service';
import {CategoryNamePipe} from './pipes/categorytext.pipe'
import {UtilityService} from '../core/services/utility.service';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TextInputComponent,
    ProgressSpinnerComponent,
    CategoryNamePipe,
    ConfirmDialogComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatInputModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // aut,


  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MatInputModule,
    FlexLayoutModule,
    TextInputComponent,
    ProgressSpinnerComponent,
    CategoryNamePipe,
    ConfirmDialogComponent
  ],
  providers: [SpinnerService,UtilityService]
})
export class SharedModule { }
