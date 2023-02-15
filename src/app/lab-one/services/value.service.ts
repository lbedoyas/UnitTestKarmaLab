import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private value = 'My Value';

  constructor() { }

  getValue(value: string) {
    return value;
  }

  getPromiseValue() {
    return Promise.resolve('Promise value');
  }

  getObservableValue() {
    return of('Observable value');
  }
}
