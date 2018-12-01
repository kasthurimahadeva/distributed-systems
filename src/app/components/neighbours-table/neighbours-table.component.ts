import {Component, OnInit} from '@angular/core';
import {Neighbour} from '../../models/neighbour.model';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-neighbours-table',
    templateUrl: './neighbours-table.component.html',
    styleUrls: ['./neighbours-table.component.scss']
})
export class NeighboursTableComponent implements OnInit {
    neighboursDetails: Neighbour[];

    // displayedColumns: string[] = ['id', 'ipAddress', 'udpPort'];

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.getNeighbours();
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
