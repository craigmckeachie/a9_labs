// loadCollection$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(CollectionPageActions.loadCollection),
//   switchMap(() =>
//     this.storageService.getCollection().pipe(
//       map((books: Book[]) =>
//         CollectionApiActions.loadBooksSuccess({ books })
//       ),
//       catchError(error =>
//         of(CollectionApiActions.loadBooksFailure({ error }))
//       )
//     )
//   )
// )
// );

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { load, loadSuccess, loadFail } from './project.actions';

@Injectable()
export class ProjectEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(load),
      switchMap(() => {
        return this.projectService.list().pipe(
          map(data => loadSuccess({ projects: data })),
          catchError(error => of(loadFail({ error: error })))
        );
      })
    );
  });

  // @Effect()
  // save$: Observable<Action> = this.actions$.pipe(
  //   ofType(ProjectActionTypes.Save),
  //   map((action: ProjectSave) => action.payload),
  //   mergeMap(project => {
  //     if (project.id) {
  //       return this.projectService.put(project).pipe(
  //         map(data => new ProjectSaveSuccess(project)),
  //         catchError(error => of(new ProjectSaveFail(error)))
  //       );
  //     } else {
  //       return this.projectService.post(project).pipe(
  //         map((data: Project) => new ProjectSaveSuccess(data)),
  //         catchError(error => of(new ProjectSaveFail(error)))
  //       );
  //     }
  //   })
  // );

  // @Effect()
  // delete$: Observable<Action> = this.actions$.pipe(
  //   ofType(ProjectActionTypes.Delete),
  //   map((action: ProjectDelete) => action.payload),
  //   mergeMap(project => {
  //     return this.projectService.delete(project.id).pipe(
  //       map(data => new ProjectDeleteSuccess(project)),
  //       catchError(error => of(new ProjectDeleteFail(error)))
  //     );
  //   })
  // );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
