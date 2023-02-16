import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const HTTP_CLIENT_STUB = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      providers: [
        { provide: HttpClient, useValue: HTTP_CLIENT_STUB },
      ]
    }).compileComponents();
    
  });

  beforeEach(() => {
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
