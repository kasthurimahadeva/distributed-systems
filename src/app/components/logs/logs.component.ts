import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Log} from '../../models/log.model';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-logs',
    templateUrl: './logs.component.html',
    styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
    logs: Log[];

    constructor(private httpClient: HttpClient) {
        this.getNodeDetails();
    }

    ngOnInit(): void {

    }

    getNodeDetails(): void {
        if (environment.testing) {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<Log[]>('http://localhost:8080/log'))
                .subscribe(
                    data => {
                        this.logs = data.reverse();
                    },
                    error => console.log(error)
                );
        } else {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<Log[]>('http://localhost:' + window.location.port + '/log'))
                .subscribe(
                    data => {
                        this.logs = data.reverse();
                    },
                    error => console.log(error)
                );
        }

    }
}
