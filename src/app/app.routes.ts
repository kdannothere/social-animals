import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
	{path: '', component: LayoutComponent,
    children: [
      {path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)},
      {path: 'become-volunteer', loadComponent: () => import('./pages/support/support-org/become-volunteer/become-volunteer.component').then(c => c.BecomeVolunteerComponent)},
      {path: 'current-donations', loadComponent: () => import('./pages/support/support-org/current-donations/current-donations.component').then(c => c.CurrentDonationsComponent)},
      {path: 'donation-details', loadComponent: () => import('./pages/support/support-org/donation-details/donation-details.component').then(c => c.DonationDetailsComponent)},
    ]
  },
  { path: 'registration', loadComponent: () => import('./pages/registration/registration.component').then(c => c.RegistrationComponent) },
  { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];
