import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitateArrayComponent } from './zitate-array.component';

describe('ZitateArrayComponent', () => {
  let component: ZitateArrayComponent;
  let fixture: ComponentFixture<ZitateArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZitateArrayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ZitateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
