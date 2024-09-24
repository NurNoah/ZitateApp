import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { ZitateService } from '../zitate.service';
import { ApiService } from '../api.service';
import { ScrollPanel } from 'primeng/scrollpanel';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-zitate-array',
  templateUrl: './zitate-array.component.html',
  styleUrls: ['./zitate-array.component.scss']
})
export class ZitateArrayComponent {
  @ViewChild('sc') scrollPanel: ScrollPanel | undefined;
  private subscription: Subscription = new Subscription(); // Initialisierung hier

  constructor(public zs: ZitateService, private api: ApiService) { }
  ngOnInit(): void {
    this.zs.getAllUsers();
    this.subscription = this.zs.dataFetched$.subscribe(() => {
      this.scrollToPosition(); 
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  ngAfterViewInit() {
    this.scrollToPosition(); 
  }

  scrollToPosition() {
    setTimeout(() => {
    console.log("top")
    if (this.scrollPanel) {
      const scrollPanelElement = this.scrollPanel.el.nativeElement;
      const lastItem = scrollPanelElement.querySelector('.array-item:last-child');
      if (lastItem) {
        const top = lastItem.offsetTop + lastItem.clientHeight; 
        console.log(top)
        this.scrollPanel.scrollTop(top); 
      }
    }
  }, 100);
  }

}
