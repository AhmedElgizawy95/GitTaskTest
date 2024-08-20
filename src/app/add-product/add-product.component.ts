import { Component,Output, EventEmitter } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
addedProduct:IProduct= { name: '', img: '', price: '', description: '' };

@Output() productSubmited = new EventEmitter<IProduct>();
//mmes
onSubmit()
{
     this.productSubmited.emit(this.addedProduct);
}
}
