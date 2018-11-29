export class DetailsModel {
  'nodeDetails': {
    'bootstrapServerAddress': string;
    'status': string;
    'ipAddress': string;
    'udpPort': string;
    'tcpPort': string;
  };
  'logs': {
    'timeStamp': string;
    'sender': string;
    'receiver': string;
    'protocol': string;
    'message': string;
  };
  'neighbours': {
    'ip_address': string;
    'udp_port': string;
  };
  'files': Array<{
    'file_name': string;
    'size': string;
  }>;
}
