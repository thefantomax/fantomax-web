// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // goToHome() {
  //   this.router.navigate(['/'])
  // }
  goToSignUp() {//inscription
    this.router.navigate(['/inscription']);
    // // Rediriger vers la page de connexion après l'inscription
    // this.router.navigate(['/connexion']);
  }

  goToSignIn() {// connexion
    this.router.navigate(['/connexion']);
    // Rediriger vers la page des tâches après la connexion
    // this.router.navigate(['/liste de taches']);
  }
  goToTask(){
    this.router.navigate(['/liste de taches'])
  }
  goToTaskAdd(){
    this.router.navigate(['/ajoutTche'])
  }
  goToTaskUpdate(){
    this.router.navigate(['/modificatiion'])
  }

  goToTaskList(){
    this.router.navigate(['/tache'])
  }
}
