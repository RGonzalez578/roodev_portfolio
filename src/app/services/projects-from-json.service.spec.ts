import { TestBed } from '@angular/core/testing';

import { ProjectsFromJsonService } from './projects-from-json.service';

describe('ProjectsFromJsonService', () => {
  let service: ProjectsFromJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsFromJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
