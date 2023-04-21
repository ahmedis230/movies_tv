import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedtvComponent } from './topratedtv.component';

describe('TopratedtvComponent', () => {
  let component: TopratedtvComponent;
  let fixture: ComponentFixture<TopratedtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratedtvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopratedtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
