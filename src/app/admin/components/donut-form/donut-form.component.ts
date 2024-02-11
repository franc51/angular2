import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donut-form.component.html',
  styleUrl: './donut-form.component.css',
})
export class DonutFormComponent {
  @Input() donut!: Donut;

  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  icons: string[] = [
    'chocolate.png',
    'coconut.png',
    'orange.png',
    'strawberry.png',
    'vanilla.png',
  ];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else console.log('invalid');
    form.form.markAllAsTouched();
  }
  handleUpdate(form: NgForm) {
    if (form.valid) {
      // we need the form definition for the item updated ie id
      this.update.emit({ id: this.donut.id, ...form.value });
    } else console.log('invalid');
    form.form.markAllAsTouched();
  }
  handleDelete() {
    if (confirm(`Really delete ${this.donut.name}`))
      this.delete.emit({ ...this.donut });
  }
}
