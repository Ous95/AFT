import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportViewComponent } from './sport-view.component';

describe('SportViewComponent', () => {
  let component: SportViewComponent;
  let fixture: ComponentFixture<SportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
