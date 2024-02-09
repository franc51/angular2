import { Component } from '@angular/core';
import { DonutFormComponent } from '../../components/donut-form/donut-form.component';

@Component({
  selector: 'app-donut-single',
  standalone: true,
  imports: [DonutFormComponent],
  templateUrl: './donut-single.component.html',
  styleUrl: './donut-single.component.css'
})
export class DonutSingleComponent {

}
