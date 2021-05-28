import { TestBed } from '@angular/core/testing';

import { BookContentService } from './book-content.service';

describe('BookContentService', () => {
  let service: BookContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
