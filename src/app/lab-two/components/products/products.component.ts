import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Iproducts } from '../../core/interfaces/Iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Iproducts[] = [{
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  }]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((response: Iproducts) => {
      this.products.pop();
      for (let index = 0; index < 20; index++) {
        const element = Object.values(response)[index];
        this.products.push(element);
      }
      
      console.log(response);
      console.log(Object.values(response)[0])
      console.log(this.products);
    })
  }

}
