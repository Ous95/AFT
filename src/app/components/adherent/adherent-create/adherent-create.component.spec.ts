import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentCreateComponent } from './adherent-create.component';

describe('AdherentCreateComponent', () => {
  let component: AdherentCreateComponent;
  let fixture: ComponentFixture<AdherentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdherentCreateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdherentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
