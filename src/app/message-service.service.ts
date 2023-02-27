import { Injectable } from '@angular/core';
declare var SockJS : any;
declare var Stomp : any;
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() {
    this.initializeWebSocketConnection();
  }
  public stompClient : any;
  public msg : string[] = [];
  initializeWebSocketConnection() {
    const ws = new SockJS("http://localhost:8080/chat");
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame : any) {
      that.stompClient.subscribe('/topic/messages', (message : any) => {
        if (message.body) {
        console.log(message.body)
          that.msg.push(message.body);
        }
      });
    });
  }
}
