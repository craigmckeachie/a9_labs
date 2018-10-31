import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { PROJECTS } from './mock-projects';

describe('ProjectService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProjectService;
  let projectsUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProjectService);
    projectsUrl = environment.backendUrl + '/projects/';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list projects', () => {
    service.list().subscribe(data => expect(data).toEqual(PROJECTS));
    const request = httpTestingController.expectOne(projectsUrl);
    request.flush(PROJECTS);
  });

  it('should return user friendly error when listing projects', () => {
    const notFoundErrorResponse = { status: 404, statusText: 'Not Found' };
    const content = 'The requested URL was not found on the server.';
    service.list().subscribe(
      data => {},
      error => {
        expect(error).toEqual('An error occurred loading the projects.');
      }
    );
    const request = httpTestingController.expectOne(projectsUrl);
    request.flush(content, notFoundErrorResponse);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
