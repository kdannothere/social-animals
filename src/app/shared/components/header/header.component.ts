import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

import { DropArrowsIconComponent } from '../drop-arrows-icon/drop-arrows-icon.component';
import { navData, getLink } from '../config/navData';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropArrowsIconComponent, NgClass, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logoUrl = '../../../scss/lib/pics/logo.png';
  svgUrl = '../../../scss/lib/pics/svg/arrow-down.svg';
  logoAlt = 'чотирилапі герої';
  navData = navData;
  getLink = getLink;
  isUaActive = true;
  isEnActive = false;

  /*
  @HostListener('document:click', ['$event']) onClick(event: Event): void {
    const target = event.target as HTMLElement;
    console.log(target.innerText)
    if (target.className !== 'drop-down-menu') {
    }
  }
*/

  openClose(id: number | null) {
    this.navData.forEach((item) => {
      if (item.id === id) {
        item.isOpened = !item.isOpened;
      } else {
        item.isOpened = false;
      }
    });
  }

  currentLang(lang: string) {
    if (lang === 'ua') {
      this.isUaActive = true;
      this.isEnActive = false;
    }

    if (lang === 'en') {
      this.isEnActive = true;
      this.isUaActive = false;
    }
  }
}
