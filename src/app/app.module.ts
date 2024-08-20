import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NewComponentTestComponent } from './new-component-test/new-component-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    NewComponentTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AddProductComponent
  ]
})
export class AppModule { }
