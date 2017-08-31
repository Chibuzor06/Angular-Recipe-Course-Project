import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  view = '';
  setCurrentView(view: string) {
    this.view = view;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDHlJqRspWyo8w8wUAROomCdpOEnmhplKQ',
      authDomain: 'ng-recipe-book-4172a.firebaseapp.com'
    });
  }
}
