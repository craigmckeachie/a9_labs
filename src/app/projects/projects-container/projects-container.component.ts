import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { load } from '../shared/state/project.actions';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  projects$: Observable<Project[]>;
  errorMessage$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.projects$ = this.store.pipe(
      select(state => state.projectState.projects)
    );
    this.errorMessage$ = this.store.pipe(
      select(state => state.projectState.error)
    );
    this.loading$ = this.store.pipe(
      select(state => state.projectState.loading)
    );
    this.store.dispatch(load());
  }

  // onSaveListItem(event: any) {
  //   const project: Project = event.item;
  //   this.projectService.put(project).subscribe(
  //     updatedProject => {
  //       const index = this.projects.findIndex(
  //         element => element.id === project.id
  //       );
  //       this.projects[index] = project;
  //     },
  //     error => (this.errorMessage = error)
  //   );
  // }
}
