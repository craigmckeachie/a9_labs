import { createReducer, on } from '@ngrx/store';
import { load, loadSuccess, loadFail } from './project.actions';
import { Project } from '../project.model';

export interface ProjectState {
  loading: boolean;
  error: string;
  projects: Project[];
}

export const initialState = {
  loading: false,
  error: '',
  projects: []
};

const _projectReducer = createReducer(
  initialState,
  on(load, state => ({ ...state, loading: true })),
  on(loadSuccess, (state, { projects }) => ({
    ...state,
    projects,
    loading: false
  })),
  on(loadFail, (state, { error }) => ({ ...state, error, loading: false }))
);

export function projectReducer(state, action) {
  return _projectReducer(state, action);
}
