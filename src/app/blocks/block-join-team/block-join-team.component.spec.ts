import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockJoinTeamComponent } from './block-join-team.component';

describe('BlockJoinTeamComponent', () => {
  let component: BlockJoinTeamComponent;
  let fixture: ComponentFixture<BlockJoinTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockJoinTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockJoinTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
