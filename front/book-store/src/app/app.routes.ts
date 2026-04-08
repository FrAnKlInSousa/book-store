import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Cesta } from './cesta/cesta';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'vitrine', component: Vitrine },
  { path: 'cesta', component: Cesta },
  { path: 'cadastro', component: Cadastro },
];
