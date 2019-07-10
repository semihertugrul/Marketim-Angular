import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Menu } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCategory(): Observable<Menu.Category[]> {
    return this.http.get<Menu.Category[]>('https://marketim-3780.restdb.io/rest/category', {
      headers: env.httpOptions,
    });
  }

  getSubCategory(): Observable<Menu.SubCategory[]> {
    return this.http.get<Menu.SubCategory[]>('https://marketim-3780.restdb.io/rest/sub-category', {
      headers: env.httpOptions,
    });
  }
}
