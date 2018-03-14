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

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];

      this.products = [
        new Product(
          'example',
          '1',
          'description',
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
          '2',
          'description 3',
          'description',
          500,
          [
            'sample.jpg',
            '436810_exn0ex.jpg']
        ),
        new Product(
          'example 4',
          '3',
          'description 4',
          'description',
          200,
          ['436810_exn0ex.jpg']
        ),
        new Product(
          'exampleqdqdfsqdfqf 2',
          '4',
          'description 2',
          'description',
          5000,
          [
            'Photo_kbyuqw.jpg',
            'sample.jpg',
            '436810_exn0ex.jpg']
        )];

    });
  }


  onTouch(id: string) {
    this.router.navigate(['/product', id]);
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
