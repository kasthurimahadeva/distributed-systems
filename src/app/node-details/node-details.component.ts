import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent {

  @Input() nodeDetails: Object;
  constructor() { }

  nodeDetailsForm = new FormGroup({
    bootstrap: new FormControl({value: this.nodeDetails['bootstrapServerAddress'], disabled: true}),
    nodeStatus: new FormControl({value: this.nodeDetails['status'], disabled: true}),
    ipAddress: new FormControl({value: this.nodeDetails['ipAddress'], disabled: true}),
    udpPort: new FormControl({value: this.nodeDetails['udpPort'], disabled: true}),
    tcpPort: new FormControl({value: this.nodeDetails['tcpPort'], disabled: true})
  });

}
