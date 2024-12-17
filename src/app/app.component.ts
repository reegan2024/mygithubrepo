import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialoguepopupComponent } from './dialoguepopup/dialoguepopup.component';
import { FormGroup, FormControl, FormArray, FormBuilder, NgForm, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroupDirective } from '@angular/forms'
import { PdfcontentService } from './pdfcontent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  billcontent: any = {};

  productFormarray!: FormGroup;
  items!: FormArray;
fullypaidvalue: any=true;
  constructor(public matdialog: MatDialog, public pdfService: PdfcontentService) {

    this.productFormarray = new FormGroup({
      customername: new FormControl('', [Validators.required]),
      productdetails: new FormArray([]),
      fullypaid: new FormControl('true'),
      paidamount: new FormControl()
    })


  }

  ngOnInit(): void {
    this.addNewProduct();
  }

  addNewProduct() {

    this.items = this.productFormarray.get('productdetails') as FormArray;
    const newProduct = this.createNewProduct();
    this.items.push(newProduct);
    const indexvalue = this.items.length - 1;
  }

  createNewProduct(): FormGroup {
    return new FormGroup({
      productname: new FormControl('', [Validators.required])
    })
  }

  removeProduct(index: any) {
    this.items = this.productFormarray.get('productdetails') as FormArray;
    this.items.removeAt(index);
  }

  get productdetailsarray() {
    console.log("hi")
    return this.productFormarray.get('productdetails') as FormArray;
  }


  openDialog() {
    let dialogpopupref = this.matdialog.open(DialoguepopupComponent);
    dialogpopupref.afterClosed().subscribe(result => {
      console.log("dialog result is" + result);
      if (result == "true") {
        console.log("in true");
        this.billcontent = this.productFormarray.value;
        this.pdfService.updatePdfContent(this.billcontent);
      }
    });
  }
  onSubmit(formvalue: boolean) {
    this.productFormarray.markAllAsTouched();
    if (formvalue == true) {
      this.openDialog();

    }

  }
  title = 'mydemo';
}
