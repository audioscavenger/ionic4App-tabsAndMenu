import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openWebsite() {
    window.open("https://github.com/AbayIbrayev/ionic4App-tabsAndMenu" , '_blank');
  }
}
