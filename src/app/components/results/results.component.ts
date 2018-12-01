import {Component, OnInit} from '@angular/core';
import {ResultModel} from '../../models/result.model';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    results: ResultModel[];

    constructor(
        private httpClient: HttpClient
    ) {
    }

    ngOnInit() {
    }

    getResults() {
        this.httpClient.get<ResultModel[]>('http://localhost:8080/results').subscribe(
            data => this.results = data,
            error => console.log(error)
        );

        // this.httpClient.get<ResultModel[]>('http://localhost:' + window.location.port + '/results').subscribe(
        //     data => this.results = data,
        //     error => console.log(error)
        // );
    }

}
