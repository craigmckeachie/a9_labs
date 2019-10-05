import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { load, save } from '../shared/state/project.actions';
import {
  getProjects,
  getError,
  getLoading,
  getSaving
} from '../shared/state/project.reducer';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  projects$: Observable<Project[]>;
  errorMessage$: Observable<string>;
  loading$: Observable<boolean>;
  saving$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.projects$ = this.store.pipe(select(getProjects));
    this.errorMessage$ = this.store.pipe(select(getError));
    this.loading$ = this.store.pipe(select(getLoading));
    this.saving$ = this.store.pipe(select(getSaving));
    this.store.dispatch(load());
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    this.store.dispatch(save({ project }));
  }
}
