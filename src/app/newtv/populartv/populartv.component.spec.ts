import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartvComponent } from './populartv.component';

describe('PopulartvComponent', () => {
  let component: PopulartvComponent;
  let fixture: ComponentFixture<PopulartvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulartvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulartvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
