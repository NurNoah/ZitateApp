import { Component } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public ds: DarkmodeService, public op: SettingsService){}
}
