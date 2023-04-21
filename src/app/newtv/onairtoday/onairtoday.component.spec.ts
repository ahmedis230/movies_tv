import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnairtodayComponent } from './onairtoday.component';

describe('OnairtodayComponent', () => {
  let component: OnairtodayComponent;
  let fixture: ComponentFixture<OnairtodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnairtodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnairtodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
