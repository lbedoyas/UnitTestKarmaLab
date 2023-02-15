import { TestBed, async } from '@angular/core/testing';

import { ValueService } from './value.service';
import { of } from 'rxjs';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returned the value of the function getValue',  () => {
    expect(service.getValue('hola')).toEqual('hola');
  });

  it('should returned the values of the function getPromiseValue', async () => {
    const value = await service.getPromiseValue();
    expect(value).toBe('Promise value');
  });

  it('should returned the values of the function getObservableValue', () => {
    let value = '';
    service.getObservableValue().subscribe((res)=> {
      value = res;
    })
    expect(value).toBe('Observable value');
  });




});
