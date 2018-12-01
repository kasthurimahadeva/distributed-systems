import {Component, OnInit} from '@angular/core';
import {ResultModel} from '../../models/result.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    results: ResultModel[] = [];

    constructor(
        private httpClient: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.getResults();
    }

    getResults(): void {
        // this.httpClient.get<ResultModel[]>('http://localhost:8080/results').subscribe(
        //     data => this.results = data,
        //     error => console.log(error)
        // );

        // this.httpClient.get<ResultModel[]>('http://localhost:' + window.location.port + '/results').subscribe(
        //     data => this.results = data,
        //     error => console.log(error)
        // );

        // Observable.interval(50)
        //     .switchMap(() => this.httpClient.get<ResultModel[]>('http://localhost:8080/results'))
        //     .subscribe(
        //         data => {
        //             this.results = data;
        //         },
        //         error => console.log(error)
        //     );

        Observable.interval(50)
            .switchMap(() => this.httpClient.get<ResultModel[]>('http://localhost:' + window.location.port + '/results'))
            .subscribe(
                data => {
                    this.results = data;
                },
                error => console.log(error)
            );
    }

    addFile(fileName: string): void {
        // this.httpClient.post('http://localhost:8080/files/add', fileName).subscribe(
        //     data => console.log(data),
        //     error => console.log(error));
        this.httpClient.post('http://localhost:' + window.location.port + '/files/add', {value: fileName}).subscribe(
            data => console.log(data),
            error => console.log(error));
    }

}
