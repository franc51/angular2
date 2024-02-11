import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';
import { CommonModule } from '@angular/common';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [DonutCardComponent, CommonModule],
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css',
})
export class DonutListComponent {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => (this.donuts = this.donuts));
  }

  trackById(index: number, value: Donut) {
    console.log(index, value);
  }
}
