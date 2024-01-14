import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewNameComponent } from './popup-new-name.component';

describe('PopupNewNameComponent', () => {
  let component: PopupNewNameComponent;
  let fixture: ComponentFixture<PopupNewNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupNewNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
