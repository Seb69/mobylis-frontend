import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public onSelect(tabName: string) {
    console.log('select');
    if (tabName === 'seat') {

    }

  }


}
