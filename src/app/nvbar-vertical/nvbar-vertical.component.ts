import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvbar-vertical',
  templateUrl: './nvbar-vertical.component.html',
  styleUrls: ['./nvbar-vertical.component.css']
})
export class NvbarVerticalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {
      const elem = document.getElementById('navID');
      const style = window.getComputedStyle(elem);
      const left = style.getPropertyValue('left');

      if (left === '0px') {
          elem.style.left = '-200px';
      } else {
          elem.style.left = '0px';
      }

  }

}
