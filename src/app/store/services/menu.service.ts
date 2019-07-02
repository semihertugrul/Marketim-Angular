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

  getCategory(): Observable<Menu.MenuCategoryResponse[]> {
    return this.http.get<Menu.MenuCategoryResponse[]>('https://marketim-3780.restdb.io/rest/category', {
      headers: env.httpOptions,
    });
  }

  getSubCategory(): Observable<Menu.MenuSubCategoryResponse[]> {
    return this.http.get<Menu.MenuSubCategoryResponse[]>('https://marketim-3780.restdb.io/rest/sub-category', {
      headers: env.httpOptions,
    });
  }
}
