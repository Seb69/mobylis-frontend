import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Product} from '../core/model/product';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit, OnDestroy {

  private _categoryName: string;

  @Input() products: Array<Product>;

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  onTap() {
    console.log('on tab');
  }
  panStart() {
    console.log('on pan start ');
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];

      this.products = [
        new Product(
          'example',
          'description',
          1000,
          [
            'logo_mobylis_ummmtg.jpg',
            'Photo_kbyuqw.jpg',
            'sample.jpg',
            '436810_exn0ex.jpg']
        ),
        new Product(
          'example 3',
          'description 3',
          500,
          [
            'sample.jpg',
            '436810_exn0ex.jpg']
        ),
        new Product(
          'example 4',
          'description 4',
          200,
          ['436810_exn0ex.jpg']
        ),
        new Product(
          'exampleqdqdfsqdfqf 2',
          'description 2',
          5000,
          [
            'Photo_kbyuqw.jpg',
            'sample.jpg',
            '436810_exn0ex.jpg']
        )];

    });
  }


  onVote() {
    this.router.navigate(['/' + this.router.url.split('/')[1] + '/product']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get categoryName(): string {
    return this._categoryName;
  }

  set categoryName(value: string) {
    this._categoryName = value;
  }
}
