import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public selectedPersonProduct: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() { }

  setPersonProduct(id: number) {
    this.selectedPersonProduct.next(id);
  }
}
