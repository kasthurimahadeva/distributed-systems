import {Component, OnInit} from '@angular/core';
import {DetailsModel} from './details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'distributed-systems';
  wholeDetails: DetailsModel;
  nodeDetails: Object;
  constructor(
  ) {

  }

  ngOnInit(): void {
    this.connect();
    this.nodeDetails = this.wholeDetails['nodeDetails'];
  }

  connect(): void {
    // const port = window.location.port;
    // const url = 'http://localhost:' + port + '/stream';
    const url = 'http://localhost:8080/stream';
    const source = new EventSource(url);
    source.addEventListener('message', message => {
      this.wholeDetails = JSON.parse(message['data']);
      console.log(JSON.stringify(this.wholeDetails));
    });
  }

}
