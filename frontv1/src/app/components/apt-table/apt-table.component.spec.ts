import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptTableComponent } from './apt-table.component';

describe('AptTableComponent', () => {
  let component: AptTableComponent;
  let fixture: ComponentFixture<AptTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AptTableComponent]
    });
    fixture = TestBed.createComponent(AptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
