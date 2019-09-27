import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getProducts(): Observable<Product.ProductResponse[]> {
    return this.http.get<Product.ProductResponse[]>(env.DBUrl + 'Product.json');
  }
}
