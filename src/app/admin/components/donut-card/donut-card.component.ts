import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  standalone: true,
  imports: [],
  templateUrl: './donut-card.component.html',
  styleUrl: './donut-card.component.css',
  encapsulation: ViewEncapsulation.Emulated,

})
export class DonutCardComponent {
  @Input() donut!: Donut;

}
