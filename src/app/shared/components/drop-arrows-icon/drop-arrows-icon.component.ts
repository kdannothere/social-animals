import { Component, Input } from '@angular/core';

@Component({
  selector: 'drop-arrows-icon',
  standalone: true,
  imports: [],
  templateUrl: './drop-arrows-icon.component.html',
  styleUrl: './drop-arrows-icon.component.scss'
})
export class DropArrowsIconComponent {
  @Input() isOpened = false;
}
