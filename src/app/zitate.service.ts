import { Injectable } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { PopupNewNameService } from './popup-new-name.service';

@Injectable({
  providedIn: 'root'
})
export class ZitateService {

  constructor(public drops: DropdownService, public pop: PopupNewNameService) { }

  dataArray: string[] = [

  ];

  pushnewZitat(newZitat: string) {

    if (this.validation(newZitat)) {
      const result = this.drops.selectedOption + ": " + newZitat + " #" + (this.dataArray.length + 1)

      this.deletvalue()
      this.dataArray.push(result)
    }
  }

  deletvalue() {
    const inputElement = <HTMLInputElement>(
      document.getElementById('zitat')
    );
    if (inputElement) {
      inputElement.value = '';
    }
  }

  validation(newZitat: string): boolean {

    if (newZitat == "" || /^\s*$/.test(newZitat)) {
      this.deletvalue()
      this.showerrorinput()
    }

    if (this.drops.selectedOption == "") {
      this.showerrordropbox()
    }

    if (this.drops.selectedOption == "" || newZitat == "" || /^\s*$/.test(newZitat)) {
      console.log("error")
      return false
    } else {
      return true
    }
  }

  showerrordropbox() {
    const dropdownElement = document.getElementById("dropdown");
    if (dropdownElement) {
      dropdownElement.style.border = "4px solid #fc2222";
    }
  }

  showerrorinput() {
    const inputElement = document.getElementById("zitat");
    if (inputElement) {
      inputElement.style.border = "4px solid #fc2222";
    }
  }

  resetcolordropbox() {

    if (this.drops.selectedOption == '+Andere') {
      this.pop.openPopUP();

    }

    const dropdownElement = document.getElementById("dropdown");
    if (dropdownElement) {
      dropdownElement.style.border = "4px solid #28a745";
    }
  }

  resetcolordinput() {
    const inputElement = document.getElementById("zitat");
    if (inputElement) {
      inputElement.style.border = "4px solid #28a745";
    }
  }

  enterpres(event: KeyboardEvent, newZitat: string): void {
    if (event.key == 'Enter') {
      this.pushnewZitat(newZitat);
    }
  }

}
