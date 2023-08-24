import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DleteDepartementComponent } from './dlete-departement.component';

describe('DleteDepartementComponent', () => {
  let component: DleteDepartementComponent;
  let fixture: ComponentFixture<DleteDepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DleteDepartementComponent]
    });
    fixture = TestBed.createComponent(DleteDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
