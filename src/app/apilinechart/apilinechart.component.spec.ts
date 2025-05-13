import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilinechartComponent } from './apilinechart.component';

describe('ApilinechartComponent', () => {
  let component: ApilinechartComponent;
  let fixture: ComponentFixture<ApilinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApilinechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApilinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
