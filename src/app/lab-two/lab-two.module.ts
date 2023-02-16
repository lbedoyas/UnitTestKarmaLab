import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabTwoRoutingModule } from './lab-two-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    LabTwoRoutingModule
  ]
})
export class LabTwoModule { }
