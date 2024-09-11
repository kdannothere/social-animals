import { Component } from '@angular/core';
import { BlockJoinTeamComponent } from '../../blocks/block-join-team/block-join-team.component';
import { OrangeDotPartionComponent } from '../../shared/components/orange-dot-partion/orange-dot-partion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlockJoinTeamComponent, OrangeDotPartionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
