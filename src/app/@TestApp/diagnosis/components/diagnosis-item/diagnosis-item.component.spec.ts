import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisItemComponent } from './diagnosis-item.component';

describe('DiagnosisItemComponent', () => {
  let component: DiagnosisItemComponent;
  let fixture: ComponentFixture<DiagnosisItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisItemComponent]
    });
    fixture = TestBed.createComponent(DiagnosisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
