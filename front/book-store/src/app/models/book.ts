export class Book {
  titulo: string;
  preco: number;
  autor: string;
  caminhoCapa: string;

  constructor(titulo: string, preco: number, autor: string, caminhoCapa: string) {
    this.titulo = titulo;
    this.preco = preco;
    this.autor = autor;
    this.caminhoCapa = `books-cover/${caminhoCapa}.jpg`;
  }
}
