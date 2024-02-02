import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/servicts/product.service";
import {ProductType} from "../../../../type/product.type";
import {CartService} from "../../../shared/servicts/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService,
              private CartService: CartService,
              private http: HttpClient,
              private router: Router) {
  }

  private subscriptionProduct: Subscription | null = null;

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.subscriptionProduct = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe({
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            this.router.navigate(['/'])
          }
        }
      )
  }

  ngOnDestroy() {
    this.subscriptionProduct?.unsubscribe();
  }

  addToCart(title: string): void {
    this.CartService.product = title;
    this.router.navigate(['/order'])
  }
}
