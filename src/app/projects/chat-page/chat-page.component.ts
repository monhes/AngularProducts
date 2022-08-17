import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignalRService } from 'src/app/services/signal-r.service';
import { UserMessage } from './user-message';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  userMessage: UserMessage[] = [];
  modelus: any;
  checkoutForm = this.formBuilder.group({
    htUsername: '',
    htMessage: ''
  });
  constructor(public signalRService: SignalRService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {  
    this.signalRService.startConection();
    this.signalRService.hubConnection.on('ReceiveChatMessage', (user,message)=>{
      this.userMessage.push({'user':user,'message':message})
    })
  }
 
  public sendMessage(){ 
    this.signalRService.hubConnection.send('ChatMessage' , this.checkoutForm.value.htUsername ,this.checkoutForm.value.htMessage)
    
    //this.signalRService.hubConnection.send('ChatMessage', 'thud' , 'go go');

    // this.signalRService.hubConnection.on('ReceiveChatMessage' , (user,message)=>{ 
    //   this.userName = user
    //   this.userMessage = message
    //   console.log(this.userName + ':' + this.userMessage)
    // });
  }
}
