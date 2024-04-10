// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-connexion',
//   templateUrl: './connexion.component.html',
//   styleUrls: ['./connexion.component.css']
// })
// export class ConnexionComponent {

// }

// connexion.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexion: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.connexion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.connexion = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   motDePasse: ['', Validators.required]
    // });
  }

  onConnexion() {
    if (this.connexion.valid) {
      // Envoyer les données de connexion au serveur
      console.log(this.connexion.value);
      console.log('vous etes connecté')
    }
  }
}

