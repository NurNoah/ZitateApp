import { Component, OnInit } from '@angular/core';
import { ZitateService } from '../zitate.service';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor(public zs: ZitateService, public ds:DarkmodeService){}

ngOnInit(): void {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    this.ds.toggleDarkmode()
  } 
}
}
