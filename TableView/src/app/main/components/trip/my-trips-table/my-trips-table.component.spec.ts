import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsTableComponent } from './my-trips-table.component';

describe('MyTripsTableComponent', () => {
  let component: MyTripsTableComponent;
  let fixture: ComponentFixture<MyTripsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTripsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTripsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
