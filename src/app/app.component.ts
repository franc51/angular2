import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, DonutListComponent]
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
