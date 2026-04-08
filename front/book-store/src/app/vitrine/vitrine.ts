import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  livros: Book[] = [
    new Book('Clean Code', 99.9, 'Robert C. Martin', 'clean-code'),
    new Book('The Pragmatic Programmer', 89.9, 'Andrew Hunt', 'the-pragmatic-programmer'),
    new Book('Refactoring', 120.0, 'Martin Fowler', 'refactoring'),
    new Book('A Batalha do Apocalipse', 99.9, 'Eduardo Spohr', 'a-batalha-do-apocalipse'),
    new Book('Origem', 89.9, 'Dan Brown', 'origem'),
    new Book('Jogador Numero 1', 120.0, 'Ernest Cline', 'jogador-numero-1'),
    new Book(
      'Mistborn Nascidos da Bruma',
      120.0,
      'Brandon Sanderson',
      'mistborn-nascidos-da-bruma',
    ),
  ];
}
