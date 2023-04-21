import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnairtvComponent } from './onairtv.component';

describe('OnairtvComponent', () => {
  let component: OnairtvComponent;
  let fixture: ComponentFixture<OnairtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnairtvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnairtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
