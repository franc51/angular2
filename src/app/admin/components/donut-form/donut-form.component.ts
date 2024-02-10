import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donut-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donut-form.component.html',
  styleUrl: './donut-form.component.css'
})
export class DonutFormComponent {

  icons: string[] = [
    'chocolate.png',
    'coconut.png',
    'orange.png',
    'strawberry.png',
    'vanilla.png'
  ]

  handleSubmit(form: NgForm){
    if(form.valid) {
      console.log(form.value);
    }
  }
}
