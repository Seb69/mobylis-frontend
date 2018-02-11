import { Component, OnInit } from '@angular/core';
import {ImageService} from '../core/image/image.service';

@Component({
  selector: 'app-seat-page',
  templateUrl: './seat-page.component.html',
  styleUrls: ['./seat-page.component.scss']
})
export class SeatPageComponent implements OnInit {

  private _calculatedRatio: string;

  constructor() { }

  ngOnInit() {
    this._calculatedRatio = ImageService.calculateAspectRatio('1:1');
  }

  get calculatedRatio(): string {
    return this._calculatedRatio;
  }

  set calculatedRatio(value: string) {
    this._calculatedRatio = value;
  }


}
