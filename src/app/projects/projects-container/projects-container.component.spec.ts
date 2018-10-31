import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContainerComponent } from './projects-container.component';
import { Component, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { Observable, of } from 'rxjs';
import { PROJECTS } from '../shared/mock-projects';
import { ProjectService } from '../shared/project.service';

@Component({ selector: 'app-project-list', template: '' })
class ProjectListStubComponent {
  @Input()
  projects: Project[] = [];
}

export class ProjectServiceStub {
  listByName(): Observable<Project[]> {
    return of(PROJECTS);
  }
}

describe('ProjectsContainerComponent', () => {
  let component: ProjectsContainerComponent;
  let fixture: ComponentFixture<ProjectsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsContainerComponent, ProjectListStubComponent],
      providers: [{ provide: ProjectService, useClass: ProjectServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects', async(() => {
    fixture.whenStable().then(() => {
      expect(component.projects.length).toEqual(7);
    });
  }));
});
