import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropArrowsIconComponent } from './drop-arrows-icon.component';

describe('DropArrowsIconComponent', () => {
  let component: DropArrowsIconComponent;
  let fixture: ComponentFixture<DropArrowsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropArrowsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropArrowsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
