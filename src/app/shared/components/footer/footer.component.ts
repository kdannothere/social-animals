import { Component } from '@angular/core';
import { InputDirective } from '../../directives/input.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InputDirective, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  logoUrl = '../../../scss/lib/pics/logo.png';
  logoAlt = 'чотирилапі герої';
  email = '';

  onSubmit() {
    console.log(this.email);
  }
}
