import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  subscribe() {
    window.alert('You have been subscribed');
  }

  ngOnInit(): void {
  }

}
