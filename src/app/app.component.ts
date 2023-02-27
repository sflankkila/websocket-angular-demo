import { Component } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocket-angular';

  constructor(public messageService: MessageServiceService) {}
}
