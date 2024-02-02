import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    OrderRoutingModule,
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule {
}
