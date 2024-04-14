import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscription: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.inscription = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    
  }

  onInscription(): void {
    if (this.inscription.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    const body = JSON.stringify(this.inscription.value);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<any>('http://localhost:33300/api-v1/register', body, { headers })
      .pipe(
        catchError(error => {
          console.error(error); 
          alert('Erreur lors de l\'inscription');
          return throwError(error);
        })
      )
      .subscribe(response => {
        console.log(response); 
        alert('Inscription réussie');
      });
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.inscription.controls).forEach(field => {
      const control = this.inscription.get(field);
      if (control !== null) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
