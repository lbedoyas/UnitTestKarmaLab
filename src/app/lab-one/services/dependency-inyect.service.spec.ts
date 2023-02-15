import { TestBed } from '@angular/core/testing';

import { DependencyInyectService } from './dependency-inyect.service';
import { ValueService } from './value.service';

const VALUE_STUB = jasmine.createSpyObj<ValueService>('ValueService', [
  'getValue',
  'getPromiseValue',
  'getObservableValue'
]);

describe('DependencyInyectService', () => {
  let service: DependencyInyectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide: ValueService,
          useValue: VALUE_STUB
        }
      ]
    });
    service = TestBed.inject(DependencyInyectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call the function getValue', () => {
    expect(service.prueba).toBe('');
    const getValueD = VALUE_STUB.getValue;
    service.ngOnInit();
    service.getValueDependecy();
    expect(getValueD).toHaveBeenCalled();
  })
});
