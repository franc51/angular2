import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [],
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css'
})
export class DonutListComponent {

  donut!: Donut;
  donuts!: any[];

  ngOnInit(): void {

    this.donuts = [
      {
        id: '1',
        name: 'Chocolate',
        icon: '',
        price: 119,
        description: 'For the pure chocofolic.'
      },
      {
        id: '2',
        name: 'Vanilla',
        icon: '',
        price: 89,
        description: 'For the pure Vannilla flavour.'
      },
      {
        id: '3',
        name: 'Strawberry',
        icon: '',
        price: 59,
        description: 'For the pure naturality of strawberry.'
      }
    ];

    this.donut = this.donuts[0];
  }

}
