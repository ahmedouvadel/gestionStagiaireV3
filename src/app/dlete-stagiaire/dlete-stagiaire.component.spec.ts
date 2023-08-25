import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DleteStagiaireComponent } from './dlete-stagiaire.component';

describe('DleteStagiaireComponent', () => {
  let component: DleteStagiaireComponent;
  let fixture: ComponentFixture<DleteStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DleteStagiaireComponent]
    });
    fixture = TestBed.createComponent(DleteStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
