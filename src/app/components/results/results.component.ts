import {Component, OnInit} from '@angular/core';
import {ResultModel} from '../../models/result.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

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
        this.getResults();
    }

    ngOnInit(): void {
    }

    getResults(): void {
        if (environment.testing) {
            Observable.interval(500)
                .switchMap(() => this.httpClient.get<ResultModel[]>('http://localhost:8080/results'))
                .subscribe(
                    data => {
                        this.results = data;
                    },
                    error => console.log(error)
                );
        } else {
            Observable.interval(500)
                .switchMap(() => this.httpClient.get<ResultModel[]>('http://localhost:' + window.location.port + '/results'))
                .subscribe(
                    data => {
                        this.results = data;
                    },
                    error => console.log(error)
                );
        }
    }

    addFile(fileName: string, url: string): void {

        // this.httpClient.get(url, {responseType: 'arraybuffer'} )
        //     .subscribe(response => {
        //         this.downLoadFile(response, 'text/txt');
        //     });


        if (environment.testing) {
            this.httpClient.post('http://localhost:8080/download', url).subscribe(
                data => console.log(data),
                error => console.log(error)
            );

            this.httpClient.post('http://localhost:8080/files/add', fileName).subscribe(
                data => console.log(data),
                error => console.log(error));
        } else {

            this.httpClient.post('http://localhost:' + window.location.port + '/download', url).subscribe(
                data => console.log(data),
                error => console.log(error)
            );
            this.httpClient.post('http://localhost:' + window.location.port + '/files/add', fileName).subscribe(
                data => console.log(data),
                error => console.log(error));
        }
    }

    downLoadFile(data: any, type: string): void {
        const blob = new Blob([data], {type: type});
        const file = window.URL.createObjectURL(blob);
        const pwa = window.open(file);
        if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
            alert('Please disable your Pop-up blocker and try again.');
        }
    }
}

