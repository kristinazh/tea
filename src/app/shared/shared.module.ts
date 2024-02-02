import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {CompressTextPipe} from "./pipes/compress-text.pipe";
import {RouterModule} from "@angular/router";
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    CompressTextPipe,
    PopupComponent,



  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    CompressTextPipe,
  ]
})
export class SharedModule { }
