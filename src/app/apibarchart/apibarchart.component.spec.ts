import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApibarchartComponent } from './apibarchart.component';

describe('ApibarchartComponent', () => {
  let component: ApibarchartComponent;
  let fixture: ComponentFixture<ApibarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApibarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApibarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
