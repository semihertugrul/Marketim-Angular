import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Menu } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCategory(): Observable<Menu.Category[]> {
    return this.http.get<Menu.Category[]>(env.DBUrl + 'Category.json');
  }

  getSubCategory(): Observable<Menu.SubCategory[]> {
    return this.http.get<Menu.SubCategory[]>(env.DBUrl + 'SubCategory.json');
  }
}
