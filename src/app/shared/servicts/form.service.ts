import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateOrderType} from "../../../type/create-order.type";


@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) {
  }

  public createOrder(formData: CreateOrderType): Observable<{success: number, message: string,}> {
    return this.http.post<{success: number, message: string,}>('https://testologia.site/order-tea', formData);
  }
}
