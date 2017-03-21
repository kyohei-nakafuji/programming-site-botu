import { Component, OnInit } from '@angular/core';
import {componentService} from './app.component.service';
 
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [componentService]
})
export class AppComponent  {
  messages: Array<Object>;
  constructor(private componentService: componentService) {}
 
  onSend() {
     this.componentService.getMessage()
     .subscribe((resData: any) => {
       this.messages = resData.messages;
      }
    );
  }
}