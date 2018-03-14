import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../core/image/image.service';
import {Category} from '../../core/model/category';

@Component({
  selector: 'app-seat-page',
  templateUrl: './seat-page.component.html',
  styleUrls: ['./seat-page.component.scss']
})
export class SeatPageComponent implements OnInit {

  private _categories: Array<Category>;

  constructor() { }

  ngOnInit() {
    this.categories = [
      new Category('Gamme médicale', 'main-siege-ergonomique_rtzo0x.jpg'),
      new Category('Gamme 24 heures 7 jours', 'fauteuil-de-bureau-concorde-cuir-ggi_wwpewd.jpg'),
      new Category('Gamme Design', 'design_sdy3x2.jpg')];
  }

  get categories(): Array<Category> {
    return this._categories;
  }

  set categories(value: Array<Category>) {
    this._categories = value;
  }


}
