import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentViewComponent } from './adherent-view.component';

describe('AdherentViewComponent', () => {
  let component: AdherentViewComponent;
  let fixture: ComponentFixture<AdherentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdherentViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdherentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
