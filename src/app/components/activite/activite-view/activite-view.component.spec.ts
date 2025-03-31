import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteViewComponent } from './activite-view.component';

describe('SportViewComponent', () => {
  let component: ActiviteViewComponent;
  let fixture: ComponentFixture<ActiviteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
