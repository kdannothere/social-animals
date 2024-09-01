import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DonationDetailsComponent } from './pages/support/support-org/donation-details/donation-details.component';
import { CurrentDonationsComponent } from './pages/support/support-org/current-donations/current-donations.component';
import { BecomeVolunteerComponent } from './pages/support/support-org/become-volunteer/become-volunteer.component';

export const routes: Routes = [
	{ path: 'h', component: HomeComponent },
	{ path: '', component: BecomeVolunteerComponent },
	// { path: 'become-volunteer', component: BecomeVolunteerComponent },
	{ path: 'donation-details', component: DonationDetailsComponent },
	{ path: 'current-donations', component: CurrentDonationsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent },
];