import {Component, ViewEncapsulation} from '@angular/core';

import {FuseTranslationLoaderService} from '@fuse/services/translation-loader.service';
import {FuseConfigService} from '../../../@fuse/services/config.service';
import {fuseAnimations} from '../../../@fuse/animations';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class SampleComponent {

    input = '';

    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param _fuseConfigService
     * @param httpClient
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _fuseConfigService: FuseConfigService,
        private httpClient: HttpClient
    ) {
        // this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        this.hideComponents();
    }

    private hideComponents(): void {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    search(): void {
        // this.httpClient.post('http://localhost:8080/search', this.input).subscribe(
        //     data => console.log(data),
        //     error => console.log(error));

        this.httpClient.post('http://localhost:' + window.location.port + '/search', {value: this.input}).subscribe(
            data => console.log(data),
            error => console.log(error));
        this.input = '';
    }

    addFiles(): void {
        // this.httpClient.post('http://localhost:8080/files/add', this.input).subscribe(
        //     data => console.log(data),
        //     error => console.log(error));
        this.httpClient.post('http://localhost:' + window.location.port + '/files/add', {value: this.input}).subscribe(
            data => console.log(data),
            error => console.log(error));
        this.input = '';
    }

    deleteFiles(): void {
    //     this.httpClient.post('http://localhost:8080/files/delete', this.input).subscribe(
    //         data => console.log(data),
    //         error => console.log(error));
        this.httpClient.post('http://localhost:' + window.location.port + '/files/delete', {value: this.input}).subscribe(
            data => console.log(data),
            error => console.log(error));
        this.input = '';

    }

    getInput(event: any): void {
        this.input = event.target.value;
    }
}
