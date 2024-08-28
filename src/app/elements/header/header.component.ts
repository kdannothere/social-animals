
import { Component } from '@angular/core';
import { DropArrowsIconComponent } from '../../shared/components/drop-arrows-icon/drop-arrows-icon.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropArrowsIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = "../../../scss/lib/pics/logo.png";
  svgUrl = "../../../scss/lib/pics/svg/arrow-down.svg";
  logoAlt = "чотирилапі герої";

  navData = [
    {
      value: "Про нас",
      id: 0,
      isOpened: false
    },
    {
      value: "Діяльність",
      id: 1,
      isOpened: false
    },
    {
      value:"Підтримати",
      id: 2,
      isOpened: false
    }]

  openClose (id: number) {
    this.navData.forEach(item => {
      if(item.id === id) {

        item.isOpened = !item.isOpened;
      } else {
        item.isOpened = false;
      }
    })
  }
}
