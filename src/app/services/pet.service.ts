import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pet } from './../interfaces/pet';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private db: AngularFirestore,
    private SnackBar: MatSnackBar,
    private router: Router
  ) { }

  createPet(pet: Pet) {
    const id = this.db.createId();
    return this.db.doc(`pets/${id}`).set(pet)
      .then(() => {
        this.SnackBar.open('ペットを作成しました', null, {
          duration: 2000
        });
        this.router.navigateByUrl('/');
      });
  }

  getPet(trainerId: string): Observable<Pet> {
    return this.db
      .collection<Pet>('pets', ref => ref.where('trainerId', '==', trainerId))
      .valueChanges()
      .pipe(
        map(pets => {
          if (pets.length) {
            return pets[0];
          } else {
            return null;
          }
        })
      );
  }
}
