import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  private _selectedTab: string;

  constructor() { }

  public onSelect(tabName: string) {
    this.selectedTab = tabName;
  }

  get selectedTab(): string {
    return this._selectedTab;
  }

  set selectedTab(value: string) {
    this._selectedTab = value;
  }


}
