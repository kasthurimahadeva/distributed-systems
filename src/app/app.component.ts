import {Component, OnInit} from '@angular/core';
import {DetailsModel} from './details.model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'distributed-systems';
  wholeDetails: DetailsModel;
  nodeDetails: Object;
  neighboursDetails: Array<Object>;

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.wholeDetails = this.route.snapshot.data['details'];
    this.getTaskDetails();
    console.log(JSON.stringify(this.wholeDetails));
    this.route.params.subscribe(
      params => this.getTaskDetails()
    );
  }

  getTaskDetails(): void {
    this.httpClient.get<DetailsModel>('http://localhost:8080/data').subscribe(
      data => this.wholeDetails = data
    );
    if (this.wholeDetails !== undefined) {
      this.nodeDetails = this.wholeDetails['nodeDetails'];
      this.neighboursDetails = this.wholeDetails['neighbours'];
    }
  }
}
