import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInput]',
  standalone: true,
})
export class InputDirective {
  constructor(private elemRef: ElementRef) {}

  @HostListener('focus') onActive() {
    const label =
      this.elemRef.nativeElement.parentElement.querySelector('.label');
    label.classList.add('label__active');
    // label.style.classList = 'red';
  }

  @HostListener('blur') onBlur() {
    const label =
      this.elemRef.nativeElement.parentElement.querySelector('.label');

    if (!this.elemRef.nativeElement.value) {
      label.classList.remove('label__active');
      this.elemRef.nativeElement.value = '';
    }
  }
}
