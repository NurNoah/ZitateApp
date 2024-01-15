import { Component } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { ZitateService } from '../zitate.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  constructor(public drops: DropdownService, public zs: ZitateService) { }
}
