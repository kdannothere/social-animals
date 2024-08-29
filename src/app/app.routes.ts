import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  {path: ' ', component: LayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: "full"},
      {path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)}
    ]
  },
  { path: 'registration', loadComponent: () => import('./pages/registration/registration.component').then(c => c.RegistrationComponent) },
  { path: '**', redirectTo: 'notfound', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];
