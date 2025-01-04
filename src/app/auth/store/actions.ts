import { createAction, props } from '@ngrx/store';
import RegisterRequest from '../interfaces/register-request.interface';

const register = createAction(
  '[Auth] Register',
  props<{ registerRequest: RegisterRequest }>()
);

export { register };
