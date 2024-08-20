import { Component,Input } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products=[
  {name:'IPhone 15 Pro Max',img:'https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg',
    price:'15000',description:'Mobile Phone to make phone calls Obviously'
  },
  {name:'S24 Ultra',img:'https://samsungmobilepress.com/file/FC05AE750AD6EB0673D9E9D4C157D4FDCA91C0319D37B2827A4ACC850D3D124959298BB89A1D18EEB9531CE7B6BDB56BB43890C99A07EF46FFD865333FEC385C3A4ECDA52E32E217D32C2807BAAF403A9124FE24BD2AD9F141EA995A91D14E9095EC253173B6A26FE1DB745A586CC1ADDE7D6D440FA45C94CA365A5CF1A540E7',
    price:'24000',description:'Mobile Phone to make phone calls Obviously'},
  {name:'Huawei Mate 60 Pro',img:'https://www.androidheadlines.com/wp-content/uploads/2023/09/Huawei-Mate-60-Pro-Plus-image-1-jpg.webp',
    price:'20000',description:'Mobile Phone to make phone calls Obviously'}]


   
    onSubmit(productData:IProduct)
    {
      // this.products.push({
      //   name:productData.name,
      //   img:productData.img,
      //   price:productData.price,
      //   description:productData.description
      // });

     this.products.push(productData);

    }
}
