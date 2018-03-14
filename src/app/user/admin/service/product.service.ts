import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product';
import {Router} from '@angular/router';

@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private router: Router) {
  }

  create(product: Product) {

    if (window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null) {
      this.router.navigate(['/login']);
    }

    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(window.localStorage.getItem('username') + ':' + window.localStorage.getItem('password'))
    });

    return this.http.post('/api/private/product', product, {headers: headers}).subscribe(result => {
      console.log(result);
    });
  }


}
