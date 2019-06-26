import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Menu } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): Observable<Menu.MenuResponse> {
    return this.httpClient.get<Menu.MenuResponse>('https://marketim-3780.restdb.io/rest/category', {
      headers: env.httpOptions,
    });
  }
}
