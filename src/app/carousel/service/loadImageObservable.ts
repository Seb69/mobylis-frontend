import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoadImageObservable {
  private subject: Subject<number> = new Subject<number>();

  changeValue(value: number) {

    // If first slide, start loading the next one
    if (value === 1) {
      this.subject.next(value);
    } else {
      // wait that animation finish and then download the next image
      setTimeout(() => {
        this.subject.next(value);
        console.log('change value');
      }, 300);
    }

  }

  getValue(): Observable<any> {
    return this.subject.asObservable();
  }
}
