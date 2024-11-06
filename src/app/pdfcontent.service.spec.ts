import { TestBed } from '@angular/core/testing';

import { PdfcontentService } from './pdfcontent.service';

describe('PdfcontentService', () => {
  let service: PdfcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
