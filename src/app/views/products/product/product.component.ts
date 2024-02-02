import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/servicts/product.service";
import {ProductType} from "../../../../type/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;
  constructor(private activateRouter: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) =>{
       if (params['id']) {
         this.productService.getProduct(+params['id'])
           .subscribe({
             next: (data) => {
               this.product = data;
             },
             error: (error) => {
               this.router.navigate(['/about'])
             }
           })

       }
    });
  }

}
