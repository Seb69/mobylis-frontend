import { Component, OnInit } from '@angular/core';
import {UrlGeneratorService} from './url-generator.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  public image: string;

  constructor(private urlGeneratorService: UrlGeneratorService) {
    this.image = 'on_the_phone.jpg';
  }

  ngOnInit() {

  }

}
