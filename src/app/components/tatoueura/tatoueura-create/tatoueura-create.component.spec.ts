import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TatoueuraCreateComponent } from './tatoueura-create.component';

describe('TatoueuraCreateComponent', () => {
  let component: TatoueuraCreateComponent;
  let fixture: ComponentFixture<TatoueuraCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueuraCreateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TatoueuraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
