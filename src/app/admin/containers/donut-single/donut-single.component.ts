import { Component } from '@angular/core';
import { DonutFormComponent } from '../../components/donut-form/donut-form.component';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  standalone: true,
  imports: [DonutFormComponent],
  templateUrl: './donut-single.component.html',
  styleUrl: './donut-single.component.css',
})
export class DonutSingleComponent {
  donut!: Donut;

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    // this.donut = this.donutService.readOne('2');
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut);
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }
  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }
}
