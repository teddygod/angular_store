import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { GlobarErrorComponent } from './components/globar-error/globar-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';
import { FooterComponent } from './components/footer/footer.component';
import { TopHeaderComponent } from './components/header/top-header/top-header.component';
import { BottomHeaderComponent } from './components/header/bottom-header/bottom-header.component';
import { MenuHeaderComponent } from './components/header/menu-header/menu-header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PopularProductComponent } from './components/popular-product/popular-product.component';
import { PopularCategoryComponent } from './components/popular-category/popular-category.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { DeliveryComponent } from './components/pages/delivery/delivery.component';
import { ConstructComponent } from './components/pages/construct/construct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobarErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    FooterComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    MenuHeaderComponent,
    CatalogComponent,
    PopularProductComponent,
    PopularCategoryComponent,
    ContactsComponent,
    DeliveryComponent,
    ConstructComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
