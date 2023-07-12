import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent {
  @Input() text: string = '';
  @Input() headerBlue: string = '';
  @Input() imageUrl: string = '';
  @Input() headerRed: string = '';
  @Input() whiteBlueBackground: string = '';
  @Input() reversed: string = '';
}
