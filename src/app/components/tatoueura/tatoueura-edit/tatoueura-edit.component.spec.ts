import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueuraEditComponent } from './tatoueura-edit.component';

describe('TatoueuraEditComponent', () => {
  let component: TatoueuraEditComponent;
  let fixture: ComponentFixture<TatoueuraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueuraEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TatoueuraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
