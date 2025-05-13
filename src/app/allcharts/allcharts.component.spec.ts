import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchartsComponent } from './allcharts.component';

describe('AllchartsComponent', () => {
  let component: AllchartsComponent;
  let fixture: ComponentFixture<AllchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
