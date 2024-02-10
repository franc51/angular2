import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donut-form.component.html',
  styleUrl: './donut-form.component.css'
})
export class DonutFormComponent {

  @Output() create = new EventEmitter<Donut>();

  icons: string[] = [
    'chocolate.png',
    'coconut.png',
    'orange.png',
    'strawberry.png',
    'vanilla.png'
  ]

  handleSubmit(form: NgForm){
    if(form.valid) {
      this.create.emit(form.value);
    } else
    console.log("invalid");
    form.form.markAllAsTouched();
  }
}
