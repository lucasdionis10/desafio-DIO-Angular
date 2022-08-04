import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../Model/Livro';
import { BookService } from './Book.service';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.css']
})
export class ItemProdutoComponent implements OnInit {

  @Input()
  livro!: Livro;

  livros: Array<Livro> = []



  constructor(private bookService: BookService) { }
  

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void{
    this.bookService.getBook().subscribe(response =>{
      this.livros = response;
    })  
  }
}


