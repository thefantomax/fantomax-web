// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-connexion',
//   templateUrl: './connexion.component.html',
//   styleUrls: ['./connexion.component.css']
// })
// export class ConnexionComponent {

// }

// connexion.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-connexion',
//   templateUrl: './connexion.component.html',
//   styleUrls: ['./connexion.component.css']
// })
// export class ConnexionComponent implements OnInit {
//   connexion: FormGroup;

//   constructor(private formBuilder: FormBuilder) { 
//     this.connexion = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       motDePasse: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {

//   }

//   onConnexion() {
//     if (this.connexion.valid) {
//       console.log(this.connexion.value);
//       console.log('vous etes connecté')
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexion: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.connexion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onConnexion() {
    if (this.connexion.valid) {
      this.http.post<any>('http://localhost:33300/api-v1/login', this.connexion.value).subscribe(response => {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + response.token);
        //this.router.navigate(['/taskList']);
        this.router.navigate(['/taskList'], { state: { user: response.userData } });
        // Exemple de requête GET avec le header contenant le token
        // this.http.get('http://localhost:33300/api-v1/some-resource', { headers }).subscribe(data => {
        //   console.log(data); // Faire quelque chose avec les données reçues
        // });
      });
    }
  }
}


