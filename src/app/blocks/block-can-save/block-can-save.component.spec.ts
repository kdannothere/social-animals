import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCanSaveComponent } from './block-can-save.component';

describe('BlockCanSaveComponent', () => {
  let component: BlockCanSaveComponent;
  let fixture: ComponentFixture<BlockCanSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockCanSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockCanSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
