import { TestBed, inject } from '@angular/core/testing';

import { activityService } from './activity.service';

describe('activityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [activityService]
    });
  });

  it('should be created', inject([activityService], (service: activityService) => {
    expect(service).toBeTruthy();
  }));
});
