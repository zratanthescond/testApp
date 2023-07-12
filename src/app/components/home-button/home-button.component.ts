import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {
  @Input() outlined: String = '';
  @Input() placeholder: String = '';
}
