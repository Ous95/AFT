import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatoueuraViewComponent } from './tatoueura-view.component';

describe('TatoueuraViewComponent', () => {
  let component: TatoueuraViewComponent;
  let fixture: ComponentFixture<TatoueuraViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatoueuraViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TatoueuraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
