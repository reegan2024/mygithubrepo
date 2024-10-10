import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialoguepopupComponent } from './dialoguepopup/dialoguepopup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public matdialog:MatDialog){}
  openDialog(){
    let dialogpopupref=this.matdialog.open(DialoguepopupComponent);
    dialogpopupref.afterClosed().subscribe(result=>{
     console.log("dialog result is" +result);
      if(result=="true"){
        console.log("in true");
     }
    });
      }
      onSubmit() {
        this.openDialog();        
 
       }
  title = 'mydemo';
}
