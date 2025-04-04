import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteComponent } from './activite.component';

describe('ActiviteComponent', () => {
  let component: ActiviteComponent;
  let fixture: ComponentFixture<ActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
