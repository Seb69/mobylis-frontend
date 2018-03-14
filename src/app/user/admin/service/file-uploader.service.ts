import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpEvent} from '@angular/common/http/src/response';

@Injectable()
export class FileUploaderService {

  constructor(private http: HttpClient) {
  }

  upload(file: File): Observable<HttpEvent<string>> {

    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa('user:password')
    });

    const req = new HttpRequest('POST', '/api/private/file', file, {
      reportProgress: true,
      responseType: 'text',
      headers: headers
    });

    return this.http.request<string>(req);
  }

}
