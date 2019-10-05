import { createReducer, on } from '@ngrx/store';
import {
  load,
  loadSuccess,
  loadFail,
  save,
  saveSuccess,
  saveFail
} from './project.actions';
import { Project } from '../project.model';

export interface ProjectState {
  loading: boolean;
  saving: boolean;
  error: string;
  projects: Project[];
}

export const initialState = {
  loading: false,
  saving: false,
  error: '',
  projects: []
};

const _projectReducer = createReducer(
  initialState,
  on(load, state => ({ ...state, loading: true })),
  on(loadSuccess, (state, { projects }) => ({
    ...state,
    projects,
    loading: false,
    saving: false
  })),
  on(loadFail, (state, { error }) => ({ ...state, error, loading: false })),
  on(save, state => ({ ...state, saving: true })),
  on(saveSuccess, (state, { project }) => {
    const updatedProjects = state.projects.map(item =>
      project.id === item.id ? project : item
    );
    return {
      ...state,
      projects: updatedProjects,
      saving: false
    };
  }),
  on(saveFail, (state, { error }) => ({ ...state, error, saving: false }))
);

export function projectReducer(state, action) {
  return _projectReducer(state, action);
}
