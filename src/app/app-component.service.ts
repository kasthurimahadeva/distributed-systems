import {Injectable} from '@angular/core';
import {DetailsModel} from './details.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppComponentService {
  constructor(private httpClient: HttpClient) {
  }

  getDetails(): Subject<DetailsModel> {
    // const port = window.location.port;
    // const url = 'http://localhost:' + port + '/data';
    const subject = new Subject<DetailsModel>();
    const url = 'http://localhost:8080/data';
    this.httpClient.get<DetailsModel>(url).subscribe(
      data => {subject.next(data);
      console.log(data); },
      error => console.log(error),
      () => subject.complete()
    );
    return subject;
  }
}
