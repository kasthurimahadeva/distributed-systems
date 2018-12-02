import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NodeDetails} from '../../models/node-details.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-node-details',
    templateUrl: './node-details.component.html',
    styleUrls: ['./node-details.component.scss']
})
export class NodeDetailsComponent implements OnInit {
    nodeDetails: NodeDetails;

    constructor(private httpClient: HttpClient) {
        this.getNodeDetails();
    }

    ngOnInit(): void {
    }

    getNodeDetails(): void {
        if (environment.testing) {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<NodeDetails>('http://localhost:8080/node-details'))
                .subscribe(
                    data => {
                        this.nodeDetails = data;
                    },
                    error => console.log(error)
                );
        } else {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<NodeDetails>('http://localhost:' + window.location.port + '/node-details'))
                .subscribe(
                    data => {
                        this.nodeDetails = data;
                    },
                    error => console.log(error)
                );
        }
    }
}
