import { Injectable } from '@angular/core';
import {ProductType} from "../../../type/product.type";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateOrderType} from "../../../type/create-order.type";
import {CreateOrderResponseType} from "../../../type/create-order-response.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 // private products: ProductType[] = []
  constructor(private  http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    // ajax
   return  this.http.get<ProductType[]>(environment.apiURL + '/tea')
   // return this.products;
  }

  getProduct(id: number): Observable<ProductType> {
    return  this.http.get<ProductType>(environment.apiURL + `tea?id=${id}`)
  }

  public createOrder(data: CreateOrderType): Observable<CreateOrderResponseType> {
    return this.http.post<CreateOrderResponseType>(environment.apiURL + '/order-tea', data);
  }

}

