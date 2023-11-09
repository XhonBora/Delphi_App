import { Component, OnInit } from '@angular/core';
import chats from '../../../../../data/chats.json';
import groups from '../../../../../data/groups.json';
import contacts from '../../../../../data/contact.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public chatspost = chats;
  public groupspost = groups;
  public contactspost = contacts;
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      this.chatspost.splice(item, 1);
    }
  }
  // User chat
  public currentUserId = 1;
  chats = [
    {
      userImg: 'assets/img/costic/customer-3.jpg',
      userId: 1,
      time: '10:33 pm',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
      userImg: 'assets/img/costic/customer-5.jpg',
      userId: 2,
      time: '10:33 pm',
      message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"
    },
    {
      userImg: 'assets/img/costic/customer-3.jpg',
      userId: 1,
      time: '10:36 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget orci ex.'
    },
    {
      userImg: 'assets/img/costic/customer-5.jpg',
      userId: 2,
      time: '10:41 pm',
      message: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
    },
    {
      userImg: 'assets/img/costic/customer-5.jpg',
      userId: 2,
      time: '10:41 pm',
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      userImg: 'assets/img/costic/customer-3.jpg',
      userId: 1,
      time: '10:44 pm',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      userImg: 'assets/img/costic/customer-5.jpg',
      userId: 2,
      time: '11:01 pm',
      message: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
    },

  ]

  getChatInitialMsg(item: { userId: number; userImg: string; }, i: number) {
    var content = '';
    i === 0 || (i !== 0 && this.chats[i - 1].userId !== item.userId) ?
      content += '<div class="ms-chat-status ms-status-online ms-chat-img">' +
      '<img src="' + item.userImg + '" class="ms-img-round" alt="people">' +
      '</div>' : content = '';
    return content;
  }

  getChatInitialTime(item: { userId: number; time: string; }, i: number) {
    var content = '';
    i === this.chats.length - 1 || (i + 1 <= this.chats.length - 1 && this.chats[i + 1].userId !== item.userId) ?
      content += '<p class="ms-chat-time">' + item.time + '</p>' : content = '';
    return content;
  }
  ngOnInit(): void {
  }

}
