import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livro } from "../../lista-produtos/Model/Livro"

@Injectable()

export class BookService{
    apiUrl = 'https://sheet.best/api/sheets/17e89629-4af4-44fb-9877-5a4d02312406'

    HttpOptions={
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private httpClient:HttpClient){}

    getBook():Observable<Livro[]>{
        return this.httpClient.get<Livro[]>(this.apiUrl); 
    }

}


