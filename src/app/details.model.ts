export class DetailsModel {
  'files': Array<{
  'fileName': string;
  'fileSize': string;
  }>;
  'logs': Array<{
    'timeStamp': string;
    'sender': string;
    'receiver': string;
    'protocol': string;
    'message': string;
  }>;
  'neighbours': Array<{
    'ipAddress': string;
    'udpPort': string;
  }>;
  'nodeDetails': {
    'bootstrapServerAddress': string;
    'status': string;
    'ipAddress': string;
    'udpPort': string;
    'tcpPort': string;
  };
}
