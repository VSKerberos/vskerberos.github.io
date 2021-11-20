import {createAction, props} from '@ngrx/store';
import {User} from '../../core/core/models/user';


export const login = createAction(
    "[Login Page] User Login",
    props<{user: User}>()
);



export const logout = createAction(
  "[Top Menu] Logout"
);