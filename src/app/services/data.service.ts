import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private myMessage;

  constructor() { }

  getMessage(): Observable<string> {
    return this.myMessage.asObservable();
 }

 updateMessage(message: string) {
  this.myMessage.next(message);
}
}
