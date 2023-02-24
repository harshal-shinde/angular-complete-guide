export class LoggingService {
  logStatusMessage(status:string) {
    console.log('A server status changed, new status: ' + status);
  }
}