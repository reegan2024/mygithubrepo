import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialoguepopupComponent } from './dialoguepopup/dialoguepopup.component';
import { FormGroup, FormControl, FormArray, FormBuilder, NgForm, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
productFormarray!: FormGroup;
items!: FormArray;  
  constructor(public matdialog:MatDialog){

    this.productFormarray = new FormGroup({
      customername: new FormControl('', [Validators.required]),
      productdetails: new FormArray([]),
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


  openDialog(){
    let dialogpopupref=this.matdialog.open(DialoguepopupComponent);
    dialogpopupref.afterClosed().subscribe(result=>{
     console.log("dialog result is" +result);
      if(result=="true"){
        console.log("in true");
     }
    });
      }
      onSubmit(formvalue:boolean) {
        if(formvalue==true){
          this.openDialog();        

        }
 
       }
  title = 'mydemo';
}
