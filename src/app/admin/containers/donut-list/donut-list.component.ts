import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [DonutCardComponent],
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css',

})
export class DonutListComponent {
  donuts!: Donut[];

ngOnInit(): void {


this.donuts = [
{
id: '1',
name: 'Just Chocolate',
icon: 'chocolate.png',
price: 119,
promo: true,
description: 'For the pure chocofolic.'
},
{
id: '2',
name: 'Pure Vanilla',
icon: 'vanilla.png',
price: 89,
description: 'For the pure Vannilla flavour.'
},
{
id: '3',
name: 'Strawberry Flavour',
icon: 'strawberry.png',
price: 59,
description: 'For the pure naturality of strawberry.'
}
];
}

}
