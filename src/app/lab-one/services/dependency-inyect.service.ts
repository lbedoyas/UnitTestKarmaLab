import { Injectable, OnInit } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class DependencyInyectService implements OnInit {
  prueba: string = '';

  constructor(private valueService: ValueService) { }
  ngOnInit(): void {
    this.prueba = this.getValueDependecy();
  }

  getValueDependecy(): string {
    return this.valueService.getValue('prueba');
  }
}
