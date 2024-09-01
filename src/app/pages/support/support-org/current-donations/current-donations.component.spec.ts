import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDonationsComponent } from './current-donations.component';

describe('CurrentDonationsComponent', () => {
  let component: CurrentDonationsComponent;
  let fixture: ComponentFixture<CurrentDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentDonationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
