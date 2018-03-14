import {Component, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.images = ['wjkd15nhuszwo6ouxo4p.png', 'ekzsnexhp7hfms0fvzcl.jpg'];
    this.name = 'Product name';
    this.description = 'Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf name Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf name name Product fdgferg sdgfsdgt sdfgdsfg sdfgsdfgsdf name';
    this.price = 1000;
    this.brand = 'MOBYLIS';
    this.dimension = '100L*100H';
  }

}
