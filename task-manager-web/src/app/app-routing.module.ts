import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path : 'taskList', component : TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
