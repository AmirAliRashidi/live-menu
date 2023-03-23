import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu } from '../menu-interface';
import { MenuDictionary } from '../menu-dictionary';

@Component({
  selector: 'app-pulic-menu',
  templateUrl: './pulic-menu.component.html',
  styleUrls: ['./pulic-menu.component.scss']
})
export class PulicMenuComponent implements OnInit {
  menuData!: IMenu[] | any;
  isLoading: boolean = true;
  menuDict = MenuDictionary;
  constructor(
    private _httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this._httpClient.get("assets/menu.json").subscribe(data => {
      this.menuData = data;
    });;
    this.isLoading = false;
  }

  scroll(element: any) {
    let x = document.getElementById(element)
    x?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
