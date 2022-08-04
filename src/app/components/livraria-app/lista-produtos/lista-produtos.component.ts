import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BookService } from './item-produto/Book.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
   livros: any
  bookService:BookService

  constructor(bookService:BookService) {
      this.bookService = bookService;
   }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe(((data) =>{
      this.livros = data; 
      console.log(this.livros)
    }))
  }

}
