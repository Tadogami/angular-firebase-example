import { Pet } from './../../interfaces/pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pet: Pet = {
    name: 'テストペット222',
    exp: 300,
    level: 4,
    avatarURL: '/assets/images/pet-1.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
