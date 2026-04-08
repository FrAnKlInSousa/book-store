import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book';
import { ItemCesta } from '../models/item-cesta';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  livros: Book[] = [
    new Book(1, 'Clean Code', 99.9, 'Robert C. Martin', 'clean-code'),
    new Book(2, 'The Pragmatic Programmer', 89.9, 'Andrew Hunt', 'the-pragmatic-programmer'),
    new Book(3, 'Refactoring', 120.0, 'Martin Fowler', 'refactoring'),
    new Book(4, 'A Batalha do Apocalipse', 99.9, 'Eduardo Spohr', 'a-batalha-do-apocalipse'),
    new Book(5, 'Origem', 89.9, 'Dan Brown', 'origem'),
    new Book(6, 'Jogador Numero 1', 120.0, 'Ernest Cline', 'jogador-numero-1'),
    new Book(
      7,
      'Mistborn Nascidos da Bruma',
      120.0,
      'Brandon Sanderson',
      'mistborn-nascidos-da-bruma',
    ),
  ];

  adicionaLivroCesta(livro: Book) {
    let cesta = localStorage.getItem('cesta');
    let lista: ItemCesta[] = [];

    if (cesta != null) {
      lista = JSON.parse(cesta);
    }
    const livroExistente = lista.find((item) => item.livro.id === livro.id);

    if (livroExistente) {
      livroExistente.quantidade += 1;
    } else {
      let item = new ItemCesta();
      item.livro = livro;
      item.quantidade = 1;
      item.valor = livro.preco;

      lista.push(item);
    }

    localStorage.setItem('cesta', JSON.stringify(lista));
  }
}
