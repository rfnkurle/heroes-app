import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; //sets messages property to an empty array of type string array

    add(message: string){//message parameter must be a string
      this.messages.push(message)
    };

    clear(){
      this.messages = [];
    }

  }
