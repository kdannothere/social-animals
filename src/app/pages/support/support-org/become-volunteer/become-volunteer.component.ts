import { Component } from '@angular/core';
import { BlockCanSaveComponent } from "../../../../blocks/block-can-save/block-can-save.component";
import { BlockJoinTeamComponent } from "../../../../blocks/block-join-team/block-join-team.component";

@Component({
  selector: 'app-become-volunteer',
  standalone: true,
  imports: [BlockCanSaveComponent, BlockJoinTeamComponent],
  templateUrl: './become-volunteer.component.html',
  styleUrl: './become-volunteer.component.scss'
})
export class BecomeVolunteerComponent {

}
