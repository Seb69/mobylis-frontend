import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../core/image/image.service';
import {Category} from '../core/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categories: Array<Category> ;

  public calculatedRatio: string;

  constructor() { }

  ngOnInit() {
    this.calculatedRatio = ImageService.calculateAspectRatio('1:1');
  }

}
