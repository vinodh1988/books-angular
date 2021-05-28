import { TestBed } from '@angular/core/testing';

import { BookTitlesService } from './book-titles.service';

describe('BookTitlesService', () => {
  let service: BookTitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookTitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
