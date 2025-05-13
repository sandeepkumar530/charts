import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApipiechartComponent } from './apipiechart.component';

describe('ApipiechartComponent', () => {
  let component: ApipiechartComponent;
  let fixture: ComponentFixture<ApipiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApipiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApipiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
