import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadImageObservable {
  private subject = new Subject<number>();

  changeValue(value: number) {
    this.subject.next(value);
  }


  getValue(): Observable<any> {
    return this.subject.asObservable();
  }
}
