import { createAction, props } from '@ngrx/store';
import { Project } from '../project.model';

export const load = createAction('[Project] Load');
export const loadSuccess = createAction(
  '[Project] Load Success',
  props<{ projects: Project[] }>()
);
export const loadFail = createAction(
  '[Project] Load Fail',
  props<{ error: any }>()
);
