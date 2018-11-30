import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NodeDetails} from '../models/node-details.model';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {
  nodeDetails: NodeDetails;

  constructor(private httpClient: HttpClient) {
  }

  getNodeDetails(): void {
    // this.httpClient.get<Neighbour[]>('http://localhost:' + window.location.port + '/node-details').subscribe(
    //   data => this.neighboursDetails = data
    // );
    this.httpClient.get<NodeDetails>('http://localhost:8080/node-details').subscribe(
      data => this.nodeDetails = data
    );
  }

  ngOnInit(): void {
    this.getNodeDetails();
  }

}
