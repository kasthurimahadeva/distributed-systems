import {Component, OnInit} from '@angular/core';
import {File} from '../../models/file.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
    displayedColumns: string[] = ['fileName'];
    filesList: File[];


    constructor(private httpClient: HttpClient) {
        this.getFilesDetails();

    }

    ngOnInit(): void {
    }

    getFilesDetails(): void {
        if (environment.testing) {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<File[]>('http://localhost:8080/files'))
                .subscribe(
                    data => {
                        this.filesList = data;
                    },
                    error => console.log(error)
                );
        } else {
            Observable.interval(50)
                .switchMap(() => this.httpClient.get<File[]>('http://localhost:' + window.location.port + '/files'))
                .subscribe(
                    data => {
                        this.filesList = data;
                    },
                    error => console.log(error)
                );
        }
    }

}
