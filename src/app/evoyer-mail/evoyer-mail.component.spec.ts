import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoyerMailComponent } from './evoyer-mail.component';

describe('EvoyerMailComponent', () => {
  let component: EvoyerMailComponent;
  let fixture: ComponentFixture<EvoyerMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvoyerMailComponent]
    });
    fixture = TestBed.createComponent(EvoyerMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
