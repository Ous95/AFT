import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueuraComponent } from './tatoueura.component';

describe('TatoueuraComponent', () => {
  let component: TatoueuraComponent;
  let fixture: ComponentFixture<TatoueuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueuraComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TatoueuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
