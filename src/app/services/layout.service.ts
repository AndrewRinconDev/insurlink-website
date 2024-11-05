import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private typeMenu: number = 1;// 1: person, 2: company

  constructor() { }

  getTypeMenu() {
    return this.typeMenu;
  }

  setTypeMenu(type: number) {
    this.typeMenu = type;
  }
}
