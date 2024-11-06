import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfcontentService {

  constructor() { }
  public pdfContentSource = new BehaviorSubject<any>("");
  pdfContent$ = this.pdfContentSource.asObservable();
  updatePdfContent(content: any) {
    this.pdfContentSource.next(content);
  }
}
