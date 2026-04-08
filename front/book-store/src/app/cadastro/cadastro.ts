import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  usuario: Usuario = new Usuario();

  cadastrar() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    location.href = '#';
  }
}
