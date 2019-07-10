import { HttpHeaders } from '@angular/common/http';

const apiKey = '5d0ce64a52556062830a467b';

export const environment = {
  production: false,
  httpOptions: new HttpHeaders({
    'content-type': 'application/json',
    'x-apikey': apiKey,
    'cache-control': 'no-cache',
  }),
};
