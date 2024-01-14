import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupNewNameComponent } from './popup-new-name/popup-new-name.component';
import { DarkmodeService } from './darkmode.service';
import { DropdownService } from './dropdown.service';

@Injectable({
  providedIn: 'root'
})
export class PopupNewNameService {

  constructor(private dialog: MatDialog, public ds: DarkmodeService, public drop: DropdownService) { }

  openPopUP(): void {
    
    const dialogRef = this.dialog.open(PopupNewNameComponent);

    // Du kannst hier weitere Aktionen nach dem Schließen des Dialogs hinzufügen
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog geschlossen', result);
      if(this.drop.selectedOption == "Andere"){
      this.drop.selectedOption = "";
      }
    });

    if (this.ds.isDarkmode == true) {
      document.getElementById('bdy7')?.classList.toggle('dark-mode');
    }
  }

  putNewNameinArr(newName:string){
    if(newName == "" || /^\s*$/.test(newName)){
      this.drop.selectedOption = ""
    }else{
    this.drop.options.splice((this.drop.options.length - 1), 0 ,newName)
    this.drop.selectedOption = newName
  }
  }
}
