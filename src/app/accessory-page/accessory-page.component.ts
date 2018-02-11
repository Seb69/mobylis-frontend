import { Component, OnInit } from '@angular/core';
import {Category} from '../core/model/category';

@Component({
  selector: 'app-accessory-page',
  templateUrl: './accessory-page.component.html',
  styleUrls: ['./accessory-page.component.scss']
})
export class AccessoryPageComponent implements OnInit {

  private _categoriesA: Array<Category>;
  private _categoriesB: Array<Category>;
  private _categoriesC: Array<Category>;

  constructor() { }

  ngOnInit() {
    this._categoriesA = [
      new Category('Souris Ergonomiques', '14593703_dltezt.jpg'),
      new Category('Repose poignets', '60_Bakker_Elkhuizen_Trapezium_Wrist_Rest_Standaard_image1_dasusn.jpg'),
      new Category('Souris centrale', 'barmouse-ergonomic-central-mouse-1411135622_oscqiu.jpg')];

    this._categoriesB = [
      new Category('Support PC portable', 'bakker-elkhuizen-q-note-350-support-pour-ordinat_uggcty.jpg'),
      new Category('Bras support écran', '272_DC88_BE-CA7_p2jbfw.jpg'),
      new Category('Porte documents', 'q-doc-515-document-holder-1395148104_gqxvuo.jpg')];

    this._categoriesC = [
      new Category('Repose pied', 'basic-952-foot-rest-1395148338_oc967u.jpg')];
  }

  get categoriesA(): Array<Category> {
    return this._categoriesA;
  }

  set categoriesA(value: Array<Category>) {
    this._categoriesA = value;
  }
  get categoriesB(): Array<Category> {
    return this._categoriesB;
  }

  set categoriesB(value: Array<Category>) {
    this._categoriesB = value;
  }
  get categoriesC(): Array<Category> {
    return this._categoriesC;
  }

  set categoriesC(value: Array<Category>) {
    this._categoriesC = value;
  }

}
