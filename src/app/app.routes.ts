import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'country', children: [
     { path: ':id', component: DetailsComponent }
    ]}
];