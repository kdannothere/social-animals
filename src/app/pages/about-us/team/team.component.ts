import { Component } from '@angular/core';
import { OrangeDotPartionComponent } from '../../../shared/components/orange-dot-partion/orange-dot-partion.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [OrangeDotPartionComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {}
