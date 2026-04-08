import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book';
import { ItemCesta } from '../models/item-cesta';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta {
  mensagem: string = '';
  lista: ItemCesta[] = [];
  total: number = 0;

  ngOnInit() {
    let cesta = localStorage.getItem('cesta');
    if (cesta != null) {
      this.lista = JSON.parse(cesta);
      this.calculaTotal();
    } else {
      this.mensagem = 'Sua cesta está vazia.';
    }
  }

  calculaTotal() {
    this.total = 0;
    for (let obj of this.lista) {
      this.total += obj.valor * obj.quantidade;
    }
  }

  limpaCesta() {
    localStorage.removeItem('cesta');

    this.lista = [];
    this.total = 0;
    this.mensagem = 'Sua cesta está vazia.';
  }
}
