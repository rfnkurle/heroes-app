import { Component, OnInit } from '@angular/core';
import {  MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } //must be public so that you can bind it to HTML template
                                                        // angular only binds public components to properties

  ngOnInit() {
  }

}
