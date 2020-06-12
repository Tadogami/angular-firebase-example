import { AuthService } from './../../services/auth.service';
import { PetService } from './../../services/pet.service';
import { Pet } from './../../interfaces/pet';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pet$: Observable<Pet> = this.petService.getPet(
    this.authService.uid
  );

  constructor(
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
