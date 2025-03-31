import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentEditComponent } from './adherent-edit.component';

describe('AdherentEditComponent', () => {
  let component: AdherentEditComponent;
  let fixture: ComponentFixture<AdherentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdherentEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdherentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
