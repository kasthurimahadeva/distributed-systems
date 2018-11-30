import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-neighbours-table',
  templateUrl: './neighbours-table.component.html',
  styleUrls: ['./neighbours-table.component.css']
})
export class NeighboursTableComponent implements OnInit {
  @Input() neighboursDetails: Array<Object>;
  displayedColumns: string[] = ['ipAddress', 'udpPort'];

  constructor() { }

  ngOnInit() {
  }

}
