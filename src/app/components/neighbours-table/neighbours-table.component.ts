import {Component, OnInit} from '@angular/core';
import {Neighbour} from '../../models/neighbour.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-neighbours-table',
    templateUrl: './neighbours-table.component.html',
    styleUrls: ['./neighbours-table.component.scss']
})
export class NeighboursTableComponent implements OnInit {
    neighboursDetails: Neighbour[];

    // displayedColumns: string[] = ['id', 'ipAddress', 'udpPort'];

    constructor(private httpClient: HttpClient) {
        this.getNeighbours();
    }

    ngOnInit(): void {
    }

    getNeighbours(): void {
        if (environment.testing) {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<Neighbour[]>('http://localhost:8080/neighbours'))
                .subscribe(
                    data => {
                        this.neighboursDetails = data;
                        console.log(JSON.stringify(this.neighboursDetails));
                    },
                    error => console.log(error)
                );
        } else {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<Neighbour[]>('http://localhost:' + window.location.port + '/neighbours'))
                .subscribe(
                    data => {
                        this.neighboursDetails = data.reverse();
                    },
                    error => console.log(error)
                );
        }
    }

}
