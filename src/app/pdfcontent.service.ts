import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfcontentService {

  constructor() { }
  public pdfContentSource = new Subject<any>();
  pdfContent$ = this.pdfContentSource.asObservable();
  updatePdfContent(content: any) {
    this.pdfContentSource.next(content);
  }
}
