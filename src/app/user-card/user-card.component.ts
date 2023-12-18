import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  name = 'Diego'
  surname = 'Gutiérrez'
  age = '20'
  address = {
    country: 'Spain',
    city: 'Girona',
    street: 'Carrer Balandrau'
  }
  private dni = '44257400F'

  getDate() {
    return new Date()
  }
}
