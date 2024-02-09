import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [DonutCardComponent, CommonModule],
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
promo: 'new',
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
promo: 'limited',
description: 'For the pure naturality of strawberry.'
},
{
id: '4',
name: 'Coconut majesty',
icon: 'coconut.png',
price: 148,
description: 'For the pure naturality of strawberry.'
},
{
id: '5',
name: 'Orange explosion',
icon: 'orange.png',
price: 79,
description: 'For the pure naturality of strawberry.'
}
];
}

trackById(index: number, value: Donut) {
  console.log(index, value);
}
}
