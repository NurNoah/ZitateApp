import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PopupNewNameService } from '../popup-new-name.service';


@Component({
  selector: 'app-popup-new-name',
  templateUrl: './popup-new-name.component.html',
  styleUrls: ['./popup-new-name.component.scss']
})
export class PopupNewNameComponent {

  constructor(
    private dialogRef: MatDialogRef<PopupNewNameComponent>,
    public pop: PopupNewNameService
  ){}

  closeDialog(newName:string): void {
    this.pop.putNewNameinArr(newName);
    this.dialogRef.close();
  }

  closeDialogEnter(event: KeyboardEvent ,newName:string){
    if(event.key == 'Enter'){
      this.closeDialog(newName);
    }
  }

}
