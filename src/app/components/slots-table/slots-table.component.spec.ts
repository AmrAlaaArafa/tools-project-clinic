import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsTableComponent } from './slots-table.component';

describe('SlotsTableComponent', () => {
  let component: SlotsTableComponent;
  let fixture: ComponentFixture<SlotsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotsTableComponent]
    });
    fixture = TestBed.createComponent(SlotsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
