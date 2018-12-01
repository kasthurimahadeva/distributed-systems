import {Component, OnInit} from '@angular/core';
import {File} from '../../models/file.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  displayedColumns: string[] = ['fileName'];
  filesList: File[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getFilesDetails();
  }

  getFilesDetails(): void {
    // this.httpClient.get<Neighbour[]>('http://localhost:' + window.location.port + '/files').subscribe(
    //   data => this.neighboursDetails = data
    // );
    this.httpClient.get<File[]>('http://localhost:8080/files').subscribe(
      data => this.filesList = data
    );
  }

}
