import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../shared/servicts/cart.service";
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {FormService} from "../../shared/servicts/form.service";
import {ProductService} from "../../shared/servicts/product.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public isSuccessForm = false;
  public dangerTextForm = false;

  private readonly phoneRegex = new RegExp('^(\\+7|7|8)?[\\s\\-]?\\(?[0-9]{3}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$');

  public checkoutForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
    country: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+(?:[\\s-][a-zA-Zа-яА-Я]+)*$')]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    product: {value: '', disabled: true},
    address: ['', [Validators.required, Validators.pattern('^[a-zA-ZА-Яа-я0-9\\s\\/-]*$')]],
    comment: ''
  })

  constructor(private formService: FormService,
             private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private fb: NonNullableFormBuilder,
              private productService: ProductService,
              private modalService: NgbModal) {
  }

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.checkoutForm.patchValue({
          product: params['product']
        })
      }
    })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


  public createOrder(): void {

    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.invalid) {
      this.isSuccessForm = false;
      this.dangerTextForm = true;
      setTimeout(() => {
        this.dangerTextForm = false;
      }, 3000);
      return;
    }

    this.subscription = this.productService.createOrder(this.checkoutForm.getRawValue())
      .subscribe(response => {
        if (response.success === 1) {
          alert('Спасибо за заказ')
          this.isSuccessForm = true;
          this.dangerTextForm = false;
        } else if (response.success === 0) {
          alert('Ошибка')
          this.isSuccessForm = false;
          this.dangerTextForm = true;
        }
      });
  }


}
