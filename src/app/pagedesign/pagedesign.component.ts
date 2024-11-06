import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PdfcontentService } from '../pdfcontent.service';


@Component({
  selector: 'app-pagedesign',
  templateUrl: './pagedesign.component.html',
  styleUrls: ['./pagedesign.component.css']
})
export class PagedesignComponent implements OnInit {
  billpagecontent: any = {};
  showContent: boolean = true;
  constructor(private detectorChange: ChangeDetectorRef, public pdfService: PdfcontentService) { }

  ngOnInit(): void {
    console.log("in bilpage com")
    this.pdfService.pdfContent$.subscribe(content => {
      if (content) {
        this.billpagecontent = content;
        let pdfcontent = document.getElementById('billpagecontent');
        this.convetToPDF(pdfcontent);
      }
    });
  }

 public convetToPDF(bcontent: any) {
  this.showContent = false;
  this.detectorChange.detectChanges();
   var data = bcontent as HTMLCanvasElement;
   html2canvas(data).then(canvas => {
     var imgWidth = 208;
     var pageHeight = 295;
     var imgHeight = canvas.height * imgWidth / canvas.width;
     var heightLeft = imgHeight;
     const contentDataURL = canvas.toDataURL('image/png')
     let pdf = new jsPDF('p', 'mm', 'a4');
     var position = 0;
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     this.showContent = true;
     pdf.output("dataurlnewwindow");
   });
 }

}
