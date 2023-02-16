import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../../core/interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Iproducts> {
    return this.httpClient.get<Iproducts>('https://jsonplaceholder.typicode.com/photos');
  }
}
