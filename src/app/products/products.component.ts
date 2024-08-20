import { Component , Input } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // @Input() Product:{name:string,img:string,price:string,description:string}
  @Input() Product:IProduct;
}
