import { Component } from '@angular/core';
import { ZitateService } from '../zitate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(public zs: ZitateService){}
}
