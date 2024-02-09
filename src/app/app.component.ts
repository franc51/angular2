import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './admin/containers/donut-single/donut-single.component';
import { DonutFormComponent } from './admin/components/donut-form/donut-form.component';

import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [FormsModule, CommonModule, RouterOutlet, DonutListComponent, DonutSingleComponent, DonutFormComponent]
})
export class AppComponent {
  title = 'angular2';
  name = "Francisc"
  newmessage!: string;

  handleClick(event : Event){
    console.log(event);
  }
  handleInput(event : Event){
    const { value } = event.target as HTMLInputElement;
    this.newmessage = value;
  }
}
