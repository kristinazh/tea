import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../servicts/product.service";
import {ProductType} from "../../../../type/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductType;
  constructor(private productService: ProductService) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {
  }

}
