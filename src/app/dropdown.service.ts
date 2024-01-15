import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  options = [
    'Schorsch',
    'Italiener',
    'Noah',
    'Lukas',
    'Louis',
    'Paul',
    'Domi',
    'Reither',
    '+Andere',
  ];
  selectedOption: string = '';

  onSelect(option: string): void {
    this.selectedOption = option;
  }
}
