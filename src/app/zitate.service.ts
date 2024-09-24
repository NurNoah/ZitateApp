import { Injectable } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { PopupNewNameService } from './popup-new-name.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZitateService{

  constructor(public drops: DropdownService, public pop: PopupNewNameService, private fb:FormBuilder, public api:ApiService) { }
  zitate: any;
  userFrom: FormGroup | undefined;
  dataFetched$ = new Subject<void>(); // Subject zur Benachrichtigung
  dataArray: string[] = [

  ];

  scrollToPosition(callback: () => void){
    callback();
  }

  getAllUsers(){
    this.api.getAllData().subscribe((res)=>{
      this.zitate = res.data;
    });
    this.dataFetched$.next();
  }

  pushnewZitat(newZitat: string) {

    if (this.validation(newZitat)) {
      const result = this.drops.selectedOption + ": " + newZitat

      this.deletvalue()
      this.dataArray.push(result)

      this.userFrom = this.fb.group({
        name: [this.drops.selectedOption],
        msg: [newZitat]
      });
      this.api.createNewZitat(this.userFrom.value).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.userFrom?.reset();
        this.getAllUsers()
      })
    }
    this.getAllUsers()
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
