import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStagiaireComponent } from './add-stagiaire.component';

describe('AddStagiaireComponent', () => {
  let component: AddStagiaireComponent;
  let fixture: ComponentFixture<AddStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStagiaireComponent]
    });
    fixture = TestBed.createComponent(AddStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
