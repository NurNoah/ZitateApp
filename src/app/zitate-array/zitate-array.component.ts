import { Component } from '@angular/core';
import { ZitateService } from '../zitate.service';

@Component({
  selector: 'app-zitate-array',
  templateUrl: './zitate-array.component.html',
  styleUrls: ['./zitate-array.component.scss']
})
export class ZitateArrayComponent {

  constructor(public zs: ZitateService){ }

}
