import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeDotPartionComponent } from './orange-dot-partion.component';

describe('OrangeDotPartionComponent', () => {
  let component: OrangeDotPartionComponent;
  let fixture: ComponentFixture<OrangeDotPartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeDotPartionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeDotPartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
