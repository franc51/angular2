import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutCardComponent } from "../../components/donut-card/donut-card.component";


@Component({
    selector: 'app-donut-list',
    standalone: true,
    templateUrl: './donut-list.component.html',
    styleUrl: './donut-list.component.css',
    imports: [DonutCardComponent]
})
export class DonutListComponent {
  donuts!: any[];

  ngOnInit(): void {

    this.donuts = [
      {
        id: '1',
        name: 'chocolate',
        icon: 'chocolate',
        price: 119,
        description: 'For the pure chocofolic.'
      },
      {
        id: '2',
        name: 'vanilla',
        icon: 'vanilla',
        price: 89,
        description: 'For the pure Vannilla flavour.'
      },
      {
        id: '3',
        name: 'strawberry',
        icon: 'strawberry',
        price: 59,
        description: 'For the pure naturality of strawberry.'
      }
    ];
  }

}
