import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../core/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  images: string[];
  name: string;
  brand: string;
  description: string;
  dimension: string;
  price: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Product>('/api/public/product').subscribe(product => {
      console.log(product);
    });
    this.images = ['wjkd15nhuszwo6ouxo4p.png', 'ekzsnexhp7hfms0fvzcl.jpg'];
    this.name = 'Product name';
    this.description = 'Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf name Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf name name Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf name';
    this.price = 1000;
    this.brand = 'MOBYLIS';
    this.dimension = '100L*100H';
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('ID url ' + id);
  }

}
