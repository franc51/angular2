import { Component} from '@angular/core';
import { DonutFormComponent } from '../../components/donut-form/donut-form.component';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  standalone: true,
  imports: [DonutFormComponent],
  templateUrl: './donut-single.component.html',
  styleUrl: './donut-single.component.css'
})
export class DonutSingleComponent {

  onCreate(donut: Donut){
    console.log('onCreate', donut);
  }

}
