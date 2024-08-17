import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent },
];