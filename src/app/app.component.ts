import { ModalService } from './services/modal.service';
import {Component, OnInit} from '@angular/core';
import { IProduct } from './models/product';
import {ProductService} from "./services/product.service";
import {products} from "./data/products";
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ArtDecor';

  // products: IProduct[] = []

  loading = false

  products$: Observable<IProduct[]>

  term = ''

  constructor(
    private productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true

    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )

    // this.productsService.getAll().subscribe( products => {
    //   this.products = products
    //   this.loading=false
    // })
  }
}
