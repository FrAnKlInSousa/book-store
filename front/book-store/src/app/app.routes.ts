import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Cesta } from './cesta/cesta';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'vitrine', component: Vitrine },
  { path: 'cesta', component: Cesta },
];
