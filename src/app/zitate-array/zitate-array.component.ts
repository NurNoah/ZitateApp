import { Component } from '@angular/core';
import { ZitateService } from '../zitate.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-zitate-array',
  templateUrl: './zitate-array.component.html',
  styleUrls: ['./zitate-array.component.scss']
})
export class ZitateArrayComponent {
  zitate: any;
  constructor(public zs: ZitateService, private api: ApiService) { }
  ngOnInit():void{
    this.getAllUsers();
  }

  getAllUsers(){
    this.api.getAllData().subscribe((res)=>{
      this.zitate = res.data;
    });
  }
}
