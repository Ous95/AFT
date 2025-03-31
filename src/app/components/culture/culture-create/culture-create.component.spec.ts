import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureCreateComponent } from './culture-create.component';

describe('CultureCreateComponent', () => {
  let component: CultureCreateComponent;
  let fixture: ComponentFixture<CultureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureCreateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CultureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
