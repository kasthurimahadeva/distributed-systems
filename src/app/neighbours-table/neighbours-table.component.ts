import {Component, OnInit} from '@angular/core';
import {Neighbour} from '../models/neighbour.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-neighbours-table',
  templateUrl: './neighbours-table.component.html',
  styleUrls: ['./neighbours-table.component.css']
})
export class NeighboursTableComponent implements OnInit {
  neighboursDetails: Neighbour[];
  displayedColumns: string[] = ['ipAddress', 'udpPort'];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  getNeighbours(): void {
    // this.httpClient.get<Neighbour[]>('http://localhost:' + window.location.port + '/neighbours').subscribe(
    //   data => this.neighboursDetails = data
    // );
    this.httpClient.get<Neighbour[]>('http://localhost:8080/neighbours').subscribe(
      data => this.neighboursDetails = data
    );
  }

}
