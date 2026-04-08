export class Book {
  id: number;
  titulo: string;
  preco: number;
  autor: string;
  caminhoCapa: string;

  constructor(id: number, titulo: string, preco: number, autor: string, caminhoCapa: string) {
    this.id = id;
    this.titulo = titulo;
    this.preco = preco;
    this.autor = autor;
    this.caminhoCapa = `books-cover/${caminhoCapa}.jpg`;
  }
}
