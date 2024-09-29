import { TestBed } from '@angular/core/testing';

import { VisualComponentsService } from './visual-components.service';

describe('VisualComponentsService', () => {
  let service: VisualComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
