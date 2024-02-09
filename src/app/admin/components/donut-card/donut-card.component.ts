import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-card.component.html',
  styleUrl: './donut-card.component.css',
  encapsulation: ViewEncapsulation.Emulated,

})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
