// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-inscription',
//   templateUrl: './inscription.component.html',
//   styleUrls: ['./inscription.component.css']
// })
// export class InscriptionComponent {

// }

// inscription.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscription: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inscription = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
    // this.inscription = this.formBuilder.group({
    //   nom: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }

  onInscription() {
    if (this.inscription.valid) {
      // Envoyer les données d'inscription au serveur
      console.log(this.inscription.value);
      console.log('vous etes inscrit')
    }
  }
}

